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
    "3ZVYqpSqYabE3kqixgHmbLboMWqFGxtT1M4kkAu5ocdZ7kMNX8j5V8qUMByQj6xN6uiLo6x2ibZkCBPULtFje3zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbmqv4aCTPjHBpxbjeWJxMhiYBGvVV4txHcmF6VR7mXs4n9aVBAv8bbcCU4MdbJsLY9PxcWpWPa6di1Hjt1ukZA",
  "key1": "32gbstk6aWbTCeBr4dRcKman4u942KMcffZf5uDaHmhmQEKKg7XtxCkALh16WydfoX9d35gmkpiPLWbyeuWsnCtG",
  "key2": "4kU7vK1T5dsiP2vzAwfamYpKqeAdALELauZCAt1rC7pfQtaFjPg5oaou56JnbkqZffL55LyFJFpTkffTHWKuvMKV",
  "key3": "8qapWzRWUL6JaGFF3SJ2wxHMeQdefCC7cPdkvVNjqhJja4BqCQJnmtoNRwpaUePtHAwawGvcupTvDMiUUU8BmaB",
  "key4": "4DazoCBvG64g1o6QLQHxaL6oAgJUwZZDdkiJHmiFzXB6wy5k48LRPJQCGu1S98g9SbihrTuwFN1GvkNJzNAN2u7e",
  "key5": "23NXDo3e8Jf61n29m7ysEaxV54SXSyqjHtNuEemAXYkaseT5ugqWQnTamKsvYJK9UbCSV7wwA1uLbxmbJ4wtVTBN",
  "key6": "4WKCbX7JxhaWYi7TXQNF9nEXdeWWeuFdecAESn8MwX6eFmdhyQj9XFH263at7jfuHVqrq3pb3RFXc1i2yYZn2NXV",
  "key7": "57hcWxdsEeVCzXqL6h8sdzdkcAf29djvp9bZmfTj6B1N7Rg2FTfNkCXV8aocLovi2dmudhASHWkxJVV63QsGhZfL",
  "key8": "2PDds7xe2GKSCU1Uctsqjk3s5gau6eRz5uQkRkNs58jQ67ukXj8XsRoeEe2JVYfa4jjF2XxbJuoKEPhFNGoyyGN",
  "key9": "65WdvTnWg16CTUH3ZrMfdCbnW2b5D99tRAakw68GCpWVrP24AAgLhRCkpNSm89wUGkZYihjdefgYKYGaNCDf9vK7",
  "key10": "XRiPjKoU8BzYcEaJh5y44EAdG27VCQAQrkBCcuTh15GyxH5XP6ufzyGduNRZYwbJjadvyjpzgGQv2ADVEzGJFpG",
  "key11": "5GbRVKFD3wPJEuZpU2SykQ6DvBnQ1qiB9FX5Gv26jK6XRbEMtAKBJ24r2KGXtQicDpURozhvZE2Ww1GWLpPjV8SZ",
  "key12": "3wrwmwh9TXCRvFsUNrvH1LjaWthsPvzKWhPQkXWVK5gKM1TaxPEZiAULrdupwrd8rgYqixmgQuYzCwweRFGCXyC2",
  "key13": "4xtzJEXJRrCPNN2phJidh2CAttWj8YvK2St9rzowW1QASfNRgTFbHAue7if9NFQs4rhritMTuv8e9ezZpnmtTQfe",
  "key14": "A4Hz7E8H5BULNXYigYo3ic8CwfejoYQHG5TrURVrSkQa4GqeNPWLVYwZt6nyfjGbiSf6DfRy4b9nZQXtrKGvw7U",
  "key15": "5eZzn2oADEQX3bT5iWqY1ybTP4GnxbvDsDTAuUJ3nYXqM99rhpQqMKTdGVwZE77dW5mXxsRZaqZwiCepSBNA8czm",
  "key16": "47XfgAkumF6LGGigYFt91wMRURNMgVLsd8kqozw18AVUTH8ap6xZivva1PS7KMS3YmbWZn6Up9pLZStD2YddgWyW",
  "key17": "5VvGsJmLXkrE9GPKZZBTSKbqPLNhT3CJh3TNuRUJjVVgRd7ZJrDYvSQSxsxQSHU283SDnNyUy3PTH9Nk11voU1AP",
  "key18": "5rT42Bmc8LjWa97Uu27opY38DGvsqhnmrztvQyEPp99KjnDjxaV8EjvL6TQY2TYWJepJv8UahNe1X9FKn1Z7RCrj",
  "key19": "572Qg34YJWcNPmZKVs9hYHPyaVMDmMguPqcf3aPPhx1m84bBm2GcqvJaU8d5ZSF2nefB6xaLTJTVXXp2fvWasL8c",
  "key20": "5uJ2G8G9eJGUFuysAGuhG6njN9wAjbxDyg6pojhpXfDVvJ4dXNnisJQgUVk7zB8dJbLkX49wfSuNMQMVSDRdQDWU",
  "key21": "2weXgPrhhjynQfLfoNdRJo7GXuPrrmPRTEytvGnX5wmvYsWuYQayDzuuza4xBGy8Dg3d2Xpdj4xkng9NYBhRKWBW",
  "key22": "5b7WNfJPqhVNPn6oPPyfYLphXwBjgnwyjM5HRrCB21gJnPyVUFZGTrknLdT8Eb9RdrYWbG8GvMtPtE53ccHP3ef8",
  "key23": "1tuq3SnXAQ5upEgfGWpUS5yzaP3cmt7Fev3FnYaN4r9HZebx2EvUKdKLqhsTUV1KiL9hf8njkNDvDXMbkqHef6G",
  "key24": "5wuy3BkraENdbcGNgDhApJk1BwqUBAFxwGA4JYd4MgRgEWCPHWMxdqs3uZQXEdfMooPNoYuJ8ax9nDN7Cwjojqfr",
  "key25": "5GAQVvgwYvFKSYYo2zTxCToqk2J3BfpD7wYeACeWYNifz5ZkcWPN7vKoM899zB1tHx5dxdzNEBtHQ1XpvvxBnL6M",
  "key26": "3vYn46zJoT1LEohvFuQnNASKJS881TiGffJCrSm2aVdzcttYqt7mS2Qq5gW8oFXdMKtj4fB8YyZn61ho4RdLGYCa",
  "key27": "4fvcna3GxHHGPH6G4cnG5tn89mvNJiSshWMC4HSv4hcLMNnnTF9sDADrW2ZSzXLKAamkqBF64aJZLf6DmpY5L4hs",
  "key28": "2VjmE5J1ktt7Cc3UoDu6R4ZZHFP2CLL6A8XHaaFdQgRVuEHC5wzs9GkysYYoisHdKZ85htcZd3atiJccYQpQ3zVV",
  "key29": "5TaeFCmCexsrArb54CcZK7D7ZMaFyaZWowoKnnY6vPqZkFyCS4SxuC5y9BSTCGjCznbYDfDGAcEj37RiLxBvri7E",
  "key30": "mTR6A3kotwFcD1qtNTazD66YL9zKaWsL5pAFsDHtM3GahtMfPLN3uAeMujt5a7NnRap66BcUApoW7HRwA7HLRzG",
  "key31": "5DLgeDkJD5VSUkvWXjUGa6wfao12fitkmWvAZtoiSvjaupLVYToodA3QHLe5WpAgBf6wcSeE2sSA2evVA5fgv1kt",
  "key32": "2ZfpckzdQNndKt9vNG4vdmw8nGhgeTX9Yu8kE5HEN6YJLSKHjZpmDGFVS9Hwvi8V4qYzB6dd4SJXaby3vrVpV7wK",
  "key33": "cCo6tk1hjgtJgnSXQiXaqucMMkXq1VUWjWj7bLePB2v22mFU3ALwA2XJQVJECxefupEGQAQ7baPuXYMbAWrSidy",
  "key34": "TpuLFYnceq275wZHCQ3eckiV4uPZeZZSy54deCTdMxqd48QRy1Q4WaMn1PDfAWaXgpaNZRAzJtmE61Nzwh4YVFc",
  "key35": "3TJc2zE3xkvGR4VDh72oNtEc4h47qwHTVUsCHmhNY97Zr2cyTEPZVduFf8LSnSq8sP6Ri3a1HeHj6S9TpZnSgSce",
  "key36": "49kY6EeePxwuEvqbankizbzfjkzsjA72hqqHBb7CGySbggskDjmzViLCKoheEpbNgYqMjACv2k1fGfGRsAWE4c8T",
  "key37": "46AGynN2gcGX5PXytxBEDz3wmNPqAaHuWR7RipSHy4o6KJmXHv4rPr1CSUsL8f2p5JF6riyQGnK4k7CSYkmYt7ay",
  "key38": "hhodoAkANFZiYsAJvwNvyMLAFTFDodxcB4GtLZECZRqRJLuF2d2JHc3e39VwsFkQuSg8rciZHwqGqYYCsm7j6mV",
  "key39": "4ViDY6ZsPTMzxEZGJrtzv2R1yJxCSbKE1hePPbDpWA21X5izwA1hBuh825BvjUob3rGemXgYTn13NjPNjP2Fx6FL",
  "key40": "2nsdU5mfds3ty8TeSYwNvVn1y1cvrqozDeZzqzebPe1BMFGtAmMVine6UaQERTuQsq8Efbvk1kUVCciWRfJCAoEy",
  "key41": "3xsGRnhFuVbiVtMqybSXBncknGHsAjj7xCK2EEmrekq8HWctkmeNMFotq6YNMWq6xihiXwbTCUbR21RUWRp2R5NP",
  "key42": "4CiZCZxxTHu3k2L15b5dxsV7ytFpWq7fwEcCt3dwdaX5HXEoKhxg3dF4bXphcuisc9h8byFyTkvKMr2iHX7Sh9Y6",
  "key43": "3jJr3MDC4dEgEZnwyPzSEAxCfV6MzB5ePUSpT19XnxUF1Aaq3ZxRvyT2KNS1A3iHzUp98KFAM3Bcy9B6MDaFQZhx",
  "key44": "4WK7KKS4GTE9FjF9myZp3hyd7nFnTDP9ZUxvUBTyWbPZZJitsjEqW8D7HN5wUCV2mvy4ZjKxwiuxoW41KewPPrzW",
  "key45": "4XGE3kLQJKpRq2RKXhHUYCdfAoqcuNEj4mdS9YmcE9DQzz3BjgTCfJoR71rQY4yftGkmgpkq5aBgfuuVLxy6so7U",
  "key46": "5XtpNinAFMpkbf7bSe5fWm8BbK6eULFZabb1tRAua65MHHXGU9uL4aiuBHrAEh1UvFEnJ2w4tXmTgtjK2RxQ9zvR",
  "key47": "3GHZQPFeQMiEpv7ZpAGytpuw98nrDoQ6MRh2aLAehyRwGYphnsBnXChUSoFn2mhDyYBegvSDM1JkvpGCkPTYEE8r",
  "key48": "p6mkQG8GSL4HVtbFbkHycYJMt7Q1vsmGDdZKsm7AHTvq6YUaSbFdzzDkMGVPMxb3kRtS2fFy5ruStAXB8tRc6Ri"
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
