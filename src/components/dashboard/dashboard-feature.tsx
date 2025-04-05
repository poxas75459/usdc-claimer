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
    "3pnRRozugCCVoDk4fqjT22zsUtQZbNwnzVoGPPbjTMRx7prE6L5eTzUkyGmDuMkGzvgd3un5LSJgiFWub6q6eUsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZw3bdMo3WMY3RnmgUZeFumjFEve2AE4DyXoVF1DfWtpNoPc2UmsSnnSkhfE5Kx1ij7LW42soB98ha3LKX4grTU",
  "key1": "3AgYWQ3PNGuFnNFR8GyCuzvr8uHm9qesv7RFEUrzRGEazS4aTLT7iguxikKFnrERtCgociab5y4yp8Eo21GG2dN9",
  "key2": "3jBb7aCbZcZE3ViGSRdimHGUcw4L3Rv5WTqEhrMS8RkGQU5YxsXbDe92ehPBiN3a1mPGB6yW9z8RX4QpJa5ePrgD",
  "key3": "4tYZVuqAzwBc9Zpey7trUAYMSFn5YxCwVL7pzPPHjAQgzUPKwtMC9rMBJYQ52MX74pB6iSnwifkbd5EjYkN9DVNv",
  "key4": "61x6YgqSzmL1RNjLbxZQSMpm3dGVEuxfSmkUvCto5us3taLabm4cMucv5TewPixhxbZu6x8rSdgrQaitr2eLimZp",
  "key5": "4gYzexenCwfHvftCkmXRLMHWyXpoqK3MV5qK7phAsradHBUGB8XJJwmWaPd8hAVrjavN3Cyq5HPj8sBdoAoXasRe",
  "key6": "5CfZJBRFszT2Sn6NQwJoNmcHmVQ2jn8r2F7wxA6Pmy6dDMgmFchzh8YRW1V8ghC9KJ73LNvwVrjvzwEqwXsH8J3L",
  "key7": "2aEQkSvahYkCdZ8xpQa9TDk2XxntUvJ82HqVVWbm5jyaqu7NtTxHVH14Ete5MmTKWYDygmNiMBiyytZurrsqG8E8",
  "key8": "5PrsGuRiYBjuo4UL6fV4G2CHJfjhyTsfb25FHLsPPSx3ppYZBPBvGBCr5jcG7jUo4MrwdUpwwFm8GzqXeihb521q",
  "key9": "23kLb9czZVmcRnYp91LdyQnrYseeLGDDNRPfGyJEoDEW8r8ChnfbL8asWMkFt6qTRdraqmZiHqyfHhWe2Zn5Mr2F",
  "key10": "VwnK23W4vs6NHeCJui2hy24f4iN9MuYSe3nBogrvgxRX7A1bVYxw3jBYjxjdLy6P7UYNCidpCaE2skU2rvAtY6X",
  "key11": "4mN6guHQDRkSL8qm3MD9GZLazo4FX9wuEJ4syu4DUC2x61b1zMoqFJNMpEoZyscGpCbjrUm8B6bMARh9JhUSi3P3",
  "key12": "EaQaSys7E2T5LLgZa58E5DAS6hZQk1hexLorMavZeaYUYVV5zbfmeinncotfn4fSZUTS7KNnQc6PbQC8WuPRRYz",
  "key13": "372WfjDc5e7WKJ99ch43cu1aEAeMzArUeoDpFLx8WB2oztm6jGWd1Cnu8ug8FHTb8gDYfPTVoZvtmxkNCYgFPkS4",
  "key14": "4gQUbG7SZZjJmVa72XHvaCNaJno8ee8bpQk7htMYmuo9Fus7ynbCVxJZPZdctW5t1t6Vv8L4KtvUpzi8mD7nD2Bo",
  "key15": "3GRnoAV9WGWmK7LRZoS72XfNGCmhJFRkPVTadj7RL7nE4wf4B8fHikSyLHKAzRN2bGEkVNByhFK34A3zsw9yWDC8",
  "key16": "2hrd5kW827tNQNtX44cNetVSpMWB79SbhLxnddVPjCPyXEAvcHiNNTNQkBAhPBvbjcwXVvqkNqG4iMZZV5ddiLD4",
  "key17": "66Sj1VfbSABwqLHRjNtjxfDYdXG6vsRLXGVEWtD7Ph3J3BpuVDwGs6KEW1LRZd86gLJt8Yv9uiiRyLkCS6hjK41X",
  "key18": "5odk9YUWFq4FpVV4e1wiDKnT3XFmxTMU8NRiHwMV9Se3vciHUNpqcKTBCDU9FzNFAv6N7CCZ96psnWa1BmY1m4je",
  "key19": "3iw8DrvTjE619kraVWkGgrjY23Kx2G84YQWdLmpTJS4h6C2i1fnNWBFREanZqbenR1itJYwNmRNuTYuGQDYsLhPJ",
  "key20": "22dVF3yRnh5rUsx85MkYBd2nPwfYVsRRdEusx5bo7Cyx4skxAukeJ5hwdBN984XG2C6GzLsozaZ7CAVfbwprQocx",
  "key21": "4WuEtUUJ4pjMSEtZRHQzAzjvwpotAj5iR9oqJabN7qRK4buZkBj1ZpnNfYEo9wWAemeRvA5kcuyfqLDxJjqYrd3i",
  "key22": "3nSkgLk9uJ3VxdL5kbnyAyC2MPcdKrCEQefTbs5km758kddHXyznVxvDKvFi7zSeNHCv3RXbd1crngmEXjKCLyy3",
  "key23": "h2DfPJJwVH2xfLbWn4nZRbjaDj6eJdPfc2Z4PQw6E9om244JAnpLUb1xig7bK2ZHPRqkZGCFF1p4fpRpwVex4Ys",
  "key24": "2qHTgPC5i6F8chwysNtHnxx1PSq5cfmWKcMrv1Dve4pHuem8w7p2mULLgjgoJMLH4URoJjNRKMdToQojWDCUT8bT",
  "key25": "21AXFWZqUgVLKJnTjB7WX5XerqpPeHvyiCGCB3JaTA3w5W9JNyxKkFaKuuWUPz5H5r4LN6V4ZjEdL4E2RM9RhTX3",
  "key26": "2kXdrFvmfpdjreBuawhnTcQJMz8oaRH2wQZg5JExjaT2wa3RqwEoReykdbFpRLySY5mmCGJcN1xVLUchDWuSA526",
  "key27": "Bp8tTs7sCFDjUeL5cu7XbrJjNB9Q26LDYawM2TqsbYMo2YyLZAUnjhLuocPrTKm55ULef1XCov7jGHzSBzBW9qQ",
  "key28": "dFRHZVSucZ1SzkAeiFBxeAJ1UyBpfVNV5ExDNcDXR6GEYgCBuvEyVTi7qPePb64sXJsTpJjEbMFJaGmgZrDcAhj",
  "key29": "2bubQmKX9KA5S4JpNGrPELiszSnMW3tc2UBoGGnJVk7m2mCpn1dtMNp6XT7yYeEnUgdor1g8xR8cyojWPF2bJLTp",
  "key30": "3q9QfeQU9QX5BqYPtnzYAUDJgVJeAEUo553n2NdeQXgNi5JmTUTGtJfd8f7B3iZxbwnZZYAW36c3JbarrYni1k4S",
  "key31": "2skXbEBW221xLsoQizW8ZE2DsCjpnvS6tFKT5qA3FV47jn52iHPihm4ucCfToKQ7yyi2ZUnmZkrLifYYksAKRCdi",
  "key32": "5riVFWqJ858VhBup5e5kjcCWUMQSc9J5i7MYfVdWXJMJ7e9zL5jQhHahr4Jar5AKLk3o5MgdJiTVZSpFmM1eZwGn",
  "key33": "2Dkxut5WS81Zd8VYuiBa7vZrLAokbSDFyz1SiPcXhd8e1nkUAj9XgxRoyuxUXVTuYp9kke2Wy2xNPgYbcTQpDRW3",
  "key34": "4d5v9NjPpk2RHVC3dJeBNs9bArkkf87Hw1Z1mvhp12VdeEHH6czHBpdxZof7akA8YsunAsxAQtws1tH7Pj7g1Nwk",
  "key35": "2j8oSHtAL1efb4KEguzpwAtjatCC5idwXM7KtpzbJRWacoCKAzHtVTNxP6t8kyQFK4Tjx5XvzZ8EEbwKCKod8jKW",
  "key36": "2PbDv3dSanVF2CeZSDYLfCGwwyZ8s9b9fL1yRTvvKEYV6h14XZiDWQk8QqZ6eaEwHNTn8N3xkrKQE1CmuZbYaekg",
  "key37": "3JBXj8aatyMjWTNdPRUFWVCuTVDFRkPpxSs34eBiYqGuHPBCZUN9LpqVCFwebcrsjan5LXznFgLdvcd9iLkgJ3NZ",
  "key38": "Tets9LmZy1EF5TXJtyWXpDunNJBjtvXqiP8H1AF16bUS2j9KZnfHy4vdvmorT1vLehDpvKjbayzrboNLaBV3A6x",
  "key39": "4wtmKaWGkUJk2Q6bavg8tEvQ2F4aA9fpZoN6NJXhxJ7jZV2wCSArVvHzBJoE5TkgcBhiM9BP73M4J5BpTzZitYAe",
  "key40": "48CzQKGSjkY7XJdA6FMB8yFZeB7w92MahGQ2WY1XtBnV57C2dGKCsYynEA8jJcP2MXxpdhR4XcpZWTjudGokqNfz",
  "key41": "5BBMm2nSvyZqR3TZq7WVRyRZZB6MgammUNJq6pFujpBL7p7RN8RfzJdAwB23M3VKsXsmTE4xv85NpR6hMScRbjYX"
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
