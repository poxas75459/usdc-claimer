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
    "4QncLKwMLXufQWMs2dZ2TjXW9eodhR4LXUeUnG3ZsAG9ZA1ydYgruPPPXuqAV6FQfUeXxjDekjBJMqNTnNJ5nhjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQ6efuHFgiAfFboZ4UhdhiFbEtFSUwtQ8iKo71w7ZTt3fth4zVhbUDwrHexZyAekue3qYSyieMbBsEpC9LiyZBV",
  "key1": "3gaE16NvKnVbbWEZ5YnbfF8kMjHuU7Z8paW4fYmZeGD5NPgVPGAvGHbBoMqcZ2V2FXFbp6XdcnZDsaxM32BSzhDC",
  "key2": "2M4GJYDi6xxXdrwKtqZTqEeiiFRot7KB8gPLGXXPvdPVfVQkExQBfDoHnJa2KZG7JHfjgA72j5a2bGjqVrV1tex5",
  "key3": "W1aE4gzsnGsr7ucuyvUcfBtysRoCHFisFJYr6LnARAAq9WxjEuWzA1CuiVpXwwkn6jqeVpmxjTaN7BqVicrpnVL",
  "key4": "47v8wp4ZkyTBVhJBpjYHvu6dMNYmxxHaZpDo53h4Z7kAgAWWFbgPsKhv5aTUsWoBo3LLabtfNjkuukxzCBsE33d7",
  "key5": "2nghktcifgvjFyz8JbqkArJkKHqN1VBKaEHjKhQSwo65u86aJRehFZ6wbVfCAiJfdxrghxSMXxjE9GLfh52RWUmw",
  "key6": "5BZpyTwxds16P2evihiedAfyQuRLKyWwyAvT7cs2YBv9wcQDsEfAtrD1vzPu7cu5h4svmAF1f2nJsT3rpPo5ixfV",
  "key7": "3hSZJW4ThtWkhn11wbRN3TLoLEG6Qb7xUsWJcAgrs61cYuGQnESCEE4WTEeBbvtzHf87v9KHANorrRE7m4yswxEr",
  "key8": "4RA2Z2SfBBczaSi3S4mrD59xbLJAZSPxZsWk7NAUCJmVEwM7LUdxRDbqcTXSFXdzV6ZLeRB4DaWSNCZBPUzvRgu6",
  "key9": "23DvKHNFhGaoBKBuT8bxLpiy7sgf1tV9hCxFJCgYaux43hQcMftR48A8YgXxWA99TjFCGx9M1gGBAXbUvgG9iNh5",
  "key10": "5Nz5GvMjvQ5gWoXXaQLB7PiV2hyN2oAgj3LeTbHAj1RnJWFapd3dEv6MUqMhSWaHwGoUycP4qMkTfj1N7CJGDStE",
  "key11": "2BLHenTJ41mxwtopGn9DJwuxB7y24yJvhbVcMycBwdPP2egPnEDCDAApYYo5dBNZNNjUcPHzeDEdXxF4Yk2hLRPG",
  "key12": "4FZLqpQQuxJLvKGP3nZvBf4CS9PxZwgRKiKVZq6D7Z3oA8xSjNXyFspWv7w8rACMwouStUh2bXGXQHoPH2KqgZAm",
  "key13": "3XsMUPs5RwhXJ1oGiyorvmjZSiW6Pq99QjZuH7efVfwUELNB5kmgSXg9g8N6mhEPPeJ3Coox5bYuTFppWWTLCepJ",
  "key14": "35Pm4fMXrGV7aCLUhER15AK4BunCRizduXhQ4xsKpa6g49APP56zyWfzokHzz1RTUnGtq4XJ8sBb4E1jchg8TV8h",
  "key15": "vsDwqW2841DDGULchAt7VMtDZ7EJ65nRRXttNLf83RWrpefkCMfSX2PrRvfM5ag5vmXtxBCGLyEGbx2LWBLTuHa",
  "key16": "59EBUNwCuaVUPKzF9M3bccokjwoTfpkC9r4RC9UeZGqW1wwpJHVpwvHy8rk29UEoG9Ck5hPhdXtk9LGZCUgESJU6",
  "key17": "5KEecJL7cGZPG7j17vBR8zwQv6PrHJTKRZ6UBK6AEtX9Go1dddRHKsfe1DLs29D1Eiqf23Woh1DDZj4WPcshhj2c",
  "key18": "3e6tSag66aeu1TK99d9yNTW7c94G95yLCF4cxwD7U7SKuwDfN1oWyBceEECDiEsSPrZojHU7wGPheCsM2H2TASx1",
  "key19": "584R2UKLT8TC7dLD8WynMm8y4vMM92XAmFCDrKqJVZbECqjU4hxcZecsP658CQPw6XhfQPRqRAa5Uq8yX7yJCPws",
  "key20": "3w6U9moAG3sejVNCgh9L7ATvHhxEJ3nRjfmF3Jk5m7XcVjWhKz3kA5GK7jm3vVdb5vSyU78Q2dv8Uot49Bd72AeK",
  "key21": "2CJkmSwhU4LjhcMsUuYBHGhPATZEqsMTR3ar7VMszfJiNPJ53rJd984DyqpzjWRKTNN27Zm3rLDbgfXL646zg36p",
  "key22": "4sAYDwh7Xszj4Z1Vw8hbVZymdtuFJEEh8cqEyGe9yiWhCurjCL69CwEPp7yKdi77RbitKrc8GgdjFrguHomjGrM8",
  "key23": "5nDu3X5gusEpoVVdAsAe3sY7dvTgkZ3Lb45vEQ29cqGcpf5QmaX4ZyRaVpX77Fr3cZEDJTqi26nSvqVcMzzZKy6R",
  "key24": "2FHcxuVBfRq5DVFowNAB11wEqNiqkkCwXTgMgQxenKLkaJft2rRryDzWA6T511e9qsX4HdbJkdYVGhw64JMAtxg3",
  "key25": "bWQcJ46fBHN3de6DSkfNESDJFEM6oCtW76iCDQhAWtUqqXumzpNsBzPddw4N5VhCxYYgYQUDnDMoz1iT6ksGByD",
  "key26": "hj61EEmnT57EaE6C6LUc9ECJDNaoa5SgZvbwvK4AAzrvfJJNUMAeuyBcN8yPiknFjhsLokcMZS5XPG9unbCzSP8",
  "key27": "5H3Wg9FuC17A4W7eZgoqaSwqZNNP8oXkTN8qP4gYfKnXdph99P6hhBy1ZaQKegJuLab3FyhNZqFiKyBUcVqMR8Mg",
  "key28": "5KQwwpkHYioNMQJAiith17UXcvtbcbhMwZU2f2n8FYBb5BZExibCJ93JDysw9oCkjJxSzcxSjfc8Lbj3Jijq6EAT",
  "key29": "27SRTD384AkbX7r9skLGYCL6f4prfWcPNYDBGBtBua3oFPCCqYXA43V3Rps5nLtnjfYizbXfDTrmPsSM9kQWoTTc",
  "key30": "5Dpd41rPtHU1WbKRvhZMWMk44Z9cwJDp2dEw2iyG2KaPdRB6DoMxW38xtg8st1r6vt2QQgXQyaYxHJbkerD3bJ2T",
  "key31": "3kwoqVkmwPQ6JWLdtt6AHruhGm1gLbKg3axYTXbhNy2hm5DZgk5Zh2qqGHVvZYGQ4zp4Nq2u54Hw4vn4bmQKFzNm",
  "key32": "CmuGYu5JbfgRsL8HEvKiA2DVjJyKJGj4gfQd3zUsFHTNCVXFb1HqZEMhTVAEK9ortJxRne8ZhEEvfZqD78nNrdP",
  "key33": "3Mwaad4pzJrsYop4MwD5U4H2er4D7iNYS1Dt7TbcuajPeggFmyy6raywKvpJ1hD8gytyRcjcsQ3o5CrvQVVW8Nhk",
  "key34": "4tarQzNr1kxfMgNGooL2Q3tULoi6nUFmb6vUv89XWnavj1iF4YJo7YpesqcciDbF5LXu9dyuu6TZ1brSG5UfrVXT",
  "key35": "3Csinihj9bEPnj3TGAX1PQAjSQNscLf3BcEpv2BuMpBgka9dwdMuMtGdktYk1ovEnepyTyszS5a7X4pBX8udgNUA",
  "key36": "H1pdVk1NvZLGkxUCh4tai6PC8BJygu3iSSWGZiVgnp5eonicJqaXLHjWcdR3ERtoRBAmYnZ2wknkf8Je2k3EtDw",
  "key37": "G5Mu1HQcNar9X3ttv6iXeHviAULFAScS4tVGHZcmuFtqBuraAq9s7WxveFVt9a8ke3kg9QhMFH7iFhVMBhPYU7Y",
  "key38": "2urVcMzMX4SRZgPRW8xquPyqdnnUuWA7ewfAhtmR8g4yr8NmrYXLFNbaTi48QEXU183to2ZhqWVwKpmfDbAVGVhG",
  "key39": "5VMekeFRHSRAfp4H18TMKpmgRScPCeWNxunZucQkVfKZ4ra8j4LSL2VefxFTUVE967RLBcGQYSz3Jc1CmRE1rWud",
  "key40": "75LVMz9JSMt4HmoPthJCCFsT5RW4hmdKmGVsLfPjrJdRr2FVqSQ3TeLvdwYzo45MkDif7CDaPrmbLK7jzKwKuSi",
  "key41": "24U1t9QCKcLoJS4NFNDm3eQYzEmNgxwjoyA6ZHySce9LnHjXSFw7iWVnA99dmJTLVmKtnrhA4G3aTfg2Lm1PzdzW",
  "key42": "4dDX8pHjAm2EswMvKBU6fpkwHMMEhMdkSgGRLM2s7SgjshTd7fskYd4tZFSu6YmM8ibpRmL77B7J3jzCrMSy9Du9",
  "key43": "3JJWZaXsdxkdVyJTjLfdA254GTpWR8pKCNLs7qUhpn4iRr7gLoaAEnYkTyyFH4dJTPqxB2uLNNRMWwTKFyQk2AmB",
  "key44": "48GRgt9ez8afWfhqmSpnePHGNPPmxQM1JD4vfWPBNkgaQ6mXfmwR2fgbb1zAxqXSSBiRmqWTBv2juRRhrECQPM5n",
  "key45": "gZ2Dvt3GsXyrKP5QWtzZLE9X5EWiGpU4voxuLoKWGQsijF7VGrK59wq8iYnorCGiZDR7yBMixiRYjShNP8VB9z3",
  "key46": "2vdD6P2hsuF4cb3ZJUCitQ8gwP458KsJneLBorGXmGomAFx7Sq7JRgWFgEPPJ8gKUwaNjDVRKY4MFBxFzjHHET1C",
  "key47": "3s4TwTdwNyDxaxG7YBbBAWxCXorPuLSrv4qS3BSv3QNp3X3b3bS7MSYUbCfz89MYYw21ChKq5VsEq8UapXuyiBJc"
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
