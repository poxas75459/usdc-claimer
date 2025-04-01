/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "34bsyLQLRNinTVyLKuqXmbc86iYz5jkqQ97y5N5AsjdL7pteSUuMCuGUpxWfMgtW4UQyKA5kqvrtujjN7qiJ88Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgND3rb2CYDhWKtcXwpQEVeWHJqrFdUdvMxSmetZL5ABp9CB42yqfJFETGmkB62STp5MWyPHxsHi4tZ6qoRH9bt",
  "key1": "3a31YvysE1UdJ19EdS8go5LNrumdaewBxRBSpZhZNaq75ZrNSdDvR8zSeyxnm6mDt1MaGhoCi8rUjjXyzja9tftt",
  "key2": "4FDMUu3hPJ6o3sJieFzWqqM6HGAsmnznGyrVUV8mCEXXfYB7Q82HgNnmZN3QbmKT9bN922ggAAw15VowMRHuEsG2",
  "key3": "5UxdWbHzSGp2t5m7zUY3iACjQX9MNn9p6UgYaBKwTp1SjYne6Zy6T3gbw99CcJwhE3fbDzajpDgtwtAFRYYBegYw",
  "key4": "Eam9rszAwr762FyABKunbQ1ngqAvhSCrZKEk65jUkyECiwNwHcD6HNepXKT8uJrzEkpbxnLv6pon41RbzCrD3vB",
  "key5": "4uZ6WKcVqMBHxpJ4TJXRMP8KBu2F5n5Xg4vLXs2cgWPrkrjCdG9VT6tURYgZwJmiPgMQ5pnakFShDoN7t44yEhsQ",
  "key6": "2G1BayabQm85zziMCatSTtquo7pj6QAafsdUtpfsBhoaUm3y64V9FQRsAicGSDDm2Awhgv8NjEd9iEp8XHtVmLJ5",
  "key7": "4DZHxyufJFC12mUbuXwmLVQ84Ugg6Hfc9aSgvajBBt96MSaGZa8KqyrPiEr8hArxGm9bBSPZVV6Bs4gdkSVSieem",
  "key8": "3Zt1DhyazRZ6Kq2CPLP7FPyQD33tStpkHwbR1ciuDjWBkpX2MJ4ouqRLnH5uoh6PMWZDmn72rXwmGU496JjLsoZW",
  "key9": "4gwtBEucAYBEdiqtM89egik6NjzUag2un6F6UuakEQcv4o3xGVUo5Sq6Az6Grz56jTTXgDhy4wKiXr7mzzLDTimr",
  "key10": "29XkSwLrGUJgJNdKX4babnGUchbMRaQmmKMGigQbXRaHRLQKiqk3tRh6wD8Q52rD1UmHfqzV9ZsS8zEz62MzzJJW",
  "key11": "4AAci8TbhnPQFb8TP47a72obch7QEUEoSPnpGyMB6Zoa36RjmXtxreQSTp3g5MwM9C9t4Pohj6F8ZsG4Zt9hfFuR",
  "key12": "34Ms16vUt3JzticfXdboPYREoa3PJLdw2GeURXeRteNaFxfge6Cr5HNhM3joYgYJQgjAosbEqKdNCJGeUcW8aSLs",
  "key13": "3mTcffSYCR67LcrCLca8HtdQjJdjk4rbPadRWkUquKnLEii74n2QFCsRyYPPky5g2XVStSzKVCisknNdBsGcu6bR",
  "key14": "55v9ZXsLc5mtmCrL27ELcu94UPFAcAxbmYu9gUGwmKhYDefczuwYRJHdKhaXkey1RLUgGYxeWin3jyyBrjkRu8Gh",
  "key15": "4oroyt232ayPJuiDH9N7VabVoCagDegmChMrtnjqRVgNUPj9CTqD6g29gFo8gKbAzG6y7r1quBxLVxdnvic5JsXA",
  "key16": "miyUmkMBmexP2pszebvWr4znbogfmfzuc52awfQAXRU9xJfHmvk7hoCjXdN4JtjciEisKAkZeugKjvZq9y9fopQ",
  "key17": "3q9tfroiHmiCbrxXRCj4RFR5rhQqpXn4FcB18S3Jf5omChmrREcvStbS5dEmkjW9FjzS9qF1yYTKEnnhmKQ2uMzh",
  "key18": "4d6pafYnJyHyeJ23gUAggJLf3r7tkhib1JrWqTXGEfbpL7syJ4ZLVNhPDMDdC1UHG8kmK4XJGzazSGtBGQx8bHQF",
  "key19": "2jYdEa5FDJFMEBVk2AJyTJZzsSiMZPCsNpxtuzqbWxdYVnXmHatHr6DtkMR2ntc74DfaWHSZHMpkgB7EFpe1c5qs",
  "key20": "UNmoBazyDmXV68GPcUhCCbdtCPiDR74wc6F8rR7g43MXsgKEv14UQ1a7x13nTYaEskHtMfYLtX5ffRmYwkQiw7o",
  "key21": "5mtkmuHHpE4VDz6Mf8KEedEkWd5mgWqvH23i1e6m37mj9YbK2H1MGGy4SvtWoidjmiaK6zwwgf3z5xaCH8j8ToxS",
  "key22": "4EAcBrgSK1oEJnDN5UchSY1sXESwwfwjLyy3MuRzgva2jpfi8Qp1zRUzpA1YL8iPmVUY6TdTFeynrJALEdfmDamU",
  "key23": "4X7Skdt63GzTWdYxqcHLb5shSGych92R6kF6XLUeqvroBwR2Bw2aGD9F6hraCbtzp3ewEqDFtxfHoC2kvbKQTFL9",
  "key24": "2HrYkXRwCqgniXZDXaY3RDkNioiBH4XTbdCHLCYh7m2aog7xcb3YHvH4UdkNSQy3hQ1RgXQnvJfcnofjaoEaCRtH",
  "key25": "3HBcYQdrvopvcBvNjazk85Kt5MPX8AaF8kN372wGaaSPm4Gbi8EzcWic9dVZZWFCf1krwBYbG9MJb3czSeHEf3Zm",
  "key26": "YREJyAiLRrr3ASVoFcHbSVZvKMtW6w66bcGXV5F5nGZQAmYUCfY2V8DLMJgqu7m1ud92QiybFTxjRHno4NtGNaa",
  "key27": "4B3T5rHUMzyKPj8jPP8Jz7DdYmF3T5kciim7xxpiQSwESy86XUsJgtvUyo51SVsiWEm26UuCW3t7b42KCyYhcTAM",
  "key28": "3JoMXqw7zJcufpUorp7qVhM6gp9SYSEHvQtkJsE1p4Z4id1kDjKGZ6qxmz35SmZydoTthr2stitDggP51QV8KC84",
  "key29": "2Wrptf9uCQ9vGj5FqWEHkmuGHKPqzcYmYr5rywmJp6V3H418u9GaxSLqQTZW5LWDhRbbxye2h3UKWVPwcVpjnJXU",
  "key30": "8Ufm4jE48iEnYhCVdGynmpSps4sN57azYBDq4oToQEiiXtPSVyyVC3ttqkRasBfYqvSXMPN5k6xMiHCWChKCUUG",
  "key31": "2Ld16MD2fCVf7JNxAgbuQs1Fz8wNYgioPm1Nu8coPAFsydyRAuvX1xGGkfBi1EFYrDXwRm7MozMydQqe98JcqPCJ",
  "key32": "tLpuB7MyNgUiZwfbYnDej64gk3Rz8s8hCYtPSAFGATdHqa3R5s8ywenSK9Qg3K9aqDPWc1BzqoVZtcUSx3AEdoK",
  "key33": "4unxNrT7gtsCs6wP2CtNv9FmH2dkjiR6Rptd3AbVgBXNwXFjeNdFWP8VA26kxhkupGzswbREDxZP18HfSECQ5pS3",
  "key34": "5JwsVML3yxXEW3q8kwRQwZxue39N1aXCatZ3PxtzcxqMRAqzFsKw2NvxmFYsyTDimvr8U1CKGudNVbo5upHf27TQ",
  "key35": "5BkQQqD2V1FMcTWsMB5iSRSXczQJ9TtDWSjJ5BgzNRGcfyjy2uosDC6VGBtCPTUqidvcCQAxVDFD2C5qHzvZRDn1",
  "key36": "36cJpDudi1rNXo9BTHPDdm1cc45uzdDJVawoBhMzbFgKVSaA558GPBiA35xVwwwYG8rDS29Mcx7J49fAHwALGJo6",
  "key37": "4VJUid877nWS45Ko2Vhe26nmixwoouWNv7dsBqYxPiKryefP1XCmoHunZnzbJ5snQBNdC6CKBREhtR2cPwvZpa2q",
  "key38": "GMDtYrdg4aTBdx8x3UxeJEFacEFFKSfJSxoZCKWNJxeCmAbJdWWTzxHvk1HnKpM86GvmzmkEeDg8tAiFHRDjjQQ",
  "key39": "3vawLUCPNkhnQFSG9XcZxQzWL1pvPDVE1r7utuctwCaBRq9yBZMpVs3fdNjQRi8HAQ7AsJ9EhjxMVQdQ5UUmXheZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
