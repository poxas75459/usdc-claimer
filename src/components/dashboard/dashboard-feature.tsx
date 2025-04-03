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
    "3bVss8aWNUWxecrXarpFQS5Fz3kNVB6EQNL2c9mdiKYFGERqf2xpbQLP8KxRMnwrSq5g87yRHa5t8xiUdbECmgE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Z5QaY6pk712rULB6nwHeY1wbxPF1HyyszNxQ4ZdexF1UCgNpTAsCJqGUXQUN7F24KLFYM9vJqgbmh2wr1i9DZC",
  "key1": "3FQcSiSyZqWhYMEDTZrDNKthqPwkygWQtSkhDsZJyJXUnYEXV7m7CjQqgFMoHqfMNm7acFcCc6Uo2yUtWfYxThSL",
  "key2": "3daXRNMm8SVTnbtbWrfaasnF9Lf3xYsKrGjWeJWQMbWkQLJYrgpNkztWZY1Z17WY2S6pTRk26iqTAtruVddKxm7C",
  "key3": "4WnKwDWXGrKeKw3xoM5Ufqxsj1VXvf3LqTQtXynfjVryP5QXqkCaVwzHTQUzzyUtEaSDb4DeDA35rWDgrszW8Tz4",
  "key4": "5T3MP939WrqKuj7ajAPNy2xQh7Ge2EGa3hf4VT61kMrk5Rr4HVUGx4X4STJp9S3T9Kf7ChJSJxMzcyFhoo5udNKs",
  "key5": "5s1UxiC6xJ98SBvVMRdsfw5ieqJFYZxquxb7TnaTRsARdxqxnjyYig8edFowU4VBNYGteuUs98SMey1tSmDA6uVN",
  "key6": "FkzzUKcu4VJX3KCuiuTrcfASdoFijPSmxGPQdqGMf6CLbtUdc4EcT4yxsAATxXXWuVUBdskM1jChoQMKJuWU1Ud",
  "key7": "3H81iaMU26JRKc2apY9Qbg9ibZ5KGvuzmu2Hfe5P3jA5xxFBHNDRk4bgMthySrZUcxAUtAtA7gQme1wYYHph5pTR",
  "key8": "3tzn9KZoCToicNF86Qf1iegeEyAyXQPVqNRejqTqFUhqGXmEMfD7juB3KoLwZS1rygmdgSfmiHhFLLWWNob6c1rD",
  "key9": "2fSBtEoQiUPhwQqLbfYACEq41weBMut1fmAksby9EMjjaZb3FczcGYXRGwDWu63Fx52Q9JhAphHtWmTB6ME2zSMm",
  "key10": "42t9urfQujVPZK4wcDgJSaj4S86r1K3AtF8WmiBb2XVJRa1pBbXSQqodUVZuUF23TdWUPBiqiVGPf9AotpkXsT4z",
  "key11": "4vayH5aY9LDafSiHRsxX3roE6n7AHhCwMSpE997yFFGtTr7c1VciMa6jQdfyJ4mz7MUte7VJowvK5gfqxh55JPKs",
  "key12": "gmoWarB9LH8pm34bYBbLW69L6FE9wRrgC4TZLA9XxdtyudTarHFFrHQdCqFtRqTQnj3EZfSGys7o7d1pcCDxSiN",
  "key13": "52AYrU4DGv3PKopm9uxViAaZmcKwYk82xySTbLZBtECBuKGfzYSoP79skfsvqVwh6Qc1S7S9vCXdLBqhiqYJAY74",
  "key14": "5HmnawHCekre2AZ57GF5TwxxR88Afdxe5diTU7riVjeU1VqHUQymaCCRpbKMFcs9oPnPjp9yjCJYxPq1TrZLpo9F",
  "key15": "35v7ccDjCLTCfz6BYAsfFKZaGQWwCAjz862Jpp5g5avxXQXuuW3vump9iwJKhHWL8N53WPX5z6W5E1DJvnBCFJMe",
  "key16": "3ZrvExsUgNS9qiWCiQ7LEFyBCmoKuCK8714TkSLWFC3Lzb584rLu2JLupYdW1HD8ecCN5BUVTb38ZV8YBH4AyNbF",
  "key17": "3wiESFtdyqyTHu23ZBa1t1yZmvgYbjg45muFTLwahrR7P992jCm8LiKNJJzLEAX2dfkY2gF9kaU4xiKrsvvDvRnf",
  "key18": "5MyabL4XVkJ2tB91xUoNCNh3riugvFu38w6jnLj3mQdAjVyHMehhcuA3Qf7Z4vT8J9cto6FtFoy1ay1X3vHpT7rr",
  "key19": "yxLjZG6jDyKTZkw4TN7QDjqLUbLCo1a7DkGHmGyMCNPTbKghRp9LS4xrD4MFEUFAcJ4JxFFy3bqb5PHQdbte3rT",
  "key20": "YH8ARaHyaoVsHiW1itRaZxAgkaqdcEBoSgKNq6aG9g5vtWtnE3QERDePWv4Ukhot1VdvfqpDSixTDEzjvB6jGNo",
  "key21": "38wQuLNhCDvcUDuZ1FwUFbt7is1o8kVtM7szh62m1pTPDo6Zdo6J2iZEDyApRJ2Pncs7TuWkQskJ8UVJKAVqG7tt",
  "key22": "oK3wPM4dfdS1iLSwzWsfdqaF6cR5am4fqK5Y64vuiSAw1cJ1H5g92NRecR3uRyerwK1UukJSRwoY2wsAVWr7XmR",
  "key23": "5Gk2FzgZpMnEgWu9cVZodH7tPjj6QCbA3b4Hfh6Ui5tB7MwmFSx13ZVEeh6DoRacvmBxtb7WXwXZ2A6NMengvzBE",
  "key24": "2WqrKsrFvGEyCbUzwDTGda8bktCRvvk43RRQXGsUYhA2N95dKRZ7a4zh2SvSxN4uGcsmRWeF3cQ34rBvKobgGfUV",
  "key25": "5CsREUYAPadBJ1u2bFqXHw6H2eqjicJroxFxJSsyFeWPL81WPkSg9mv3eh4R5xRfbAycn3qXRm3gKXCMVWC22TQP",
  "key26": "3bXjuCc3juTwvYUxYDfEy4dPxGw53DnBwJAsG8zTmEx2may5ZpZXa3L71HaCYNa3W9HT6PMGsYMCoBdm4vpSwUhc",
  "key27": "4BsWjTpmmHWv4uFigzA4uKhkdfmtsUgkZ1XY4G2E1h1LZJtH1jyqUcfYc9UGegtwLqSmf4enE3NG71VEo4aoANTP",
  "key28": "4UKn2xmC7A8JsL3wuTgXQ6GphwCwDHM5Ek3yuwCM917G8T9P64N5nP7W6JDh9K5J8wxq4mGPUB9D7x3KZMzmLqMQ",
  "key29": "3CeUAW3ML3tj4cPv8a8BrSGqRdBGLPEv1KYb2J5kqasHrJkFeeYwBosQpr7i3acPZCa7H881jKFn6pZE8ePduXmB",
  "key30": "4YC6BvsUgFqNncEEpwjshtgF4BAC6eU8fchEa5qrYXCsC4HUMjMVKW8j3PDHwcm4wB8jQKP8Wb1GRmTdVeMyfVYD",
  "key31": "2d2wryZ2fzKRx6JP1ARjpkEuFGZeGhDGHtoFBhU2oMGZGav6S4EyXEM1Y1ZEaPLkXWXhEzqkmPPpUTC6fYgWp8eq",
  "key32": "fyi2pZGVXXf1sLid3xhN95W85Nd76FSjpPvLXD7gis3dKhQXceyNbKfN2ruR693eyqMxf4uAHzHtWpn7Eb22kuu",
  "key33": "4TE3eeQiLAWdPZ4arUvEGEYTZfmhKD4NSaXw7U8Wni1W1jT7bdJNtnj8Dq2h4a8i2CyKumpyTudfP52Fj35AvbRM",
  "key34": "5FmREqKh9oLzeFDAqgsTuLp59wooTNj4cSniJdbfosxcAEhURMYLG7UdcwoH5tA7czJw8rz1u8H4XFTVeVeGUMms",
  "key35": "2FaCF5X6Lsxx1mEJjsfCL4ZzcN3nyoBjwuDwNvDEbEi1kGN1dcAkJL62Md1ZPogftCGR2pgVa7ZmR9cxuxvNA8Tm",
  "key36": "39UrEfq4Q3CXtskJn6bUds8JNMB4hjB1GuisoBWPUb5xQcm1AaHxbvDthrH2wPib9Bnaq1HsThPMzrTgS46AVYsH",
  "key37": "hBtxFLSdgEjfpnUaFYEV2JzwvwrBfikJ4XKV3gignyuzURC34eCcBnPvpcNMdK3KrRw4ox9BZDUkWYMhuSeZr7P",
  "key38": "3KXttPraBCk8DRTKcWHR6gKhKRB6G9PZotBRNTk77jwcfaEjKxAHeyyN7BKdodiyWseq5XqHdPGooXT92dGBhUyS",
  "key39": "5FbvPjapStVSrWRzDJHox8FBDFyq7FeNLdccMCeG8UafhcnzcZx4NH8FqPQ3JANRg7pT3Um7hDTEZPXsNcJvtj9t",
  "key40": "5ShiBnFo91qSSo25X6MaqyCiAQGHNGyNFYyZCFKmY8LMdTLARUArcjvxSnhyYpakkcTTjj59AzQM7Xv2s9kjfm3u",
  "key41": "5gEnY57ZSoYJRu7dtYc6XymnEXgxNnDnTd9jLupafRKsgRgiNsJJ8yHwKby6juvrosmHkecJ492hH19VFjXBRWVo",
  "key42": "2WJrhkvqL8PhASDHnCWsWTq3ACmKtpGykWKrQfZsebrE18CbVMoJ7abAe4vg5DmrHecz8DeibHPuiR2wiSvwtXED",
  "key43": "3E45uXd2aHwtJbmnvp2y24ehegu8SnJEMCdiZE9GbWGRSNk9pw7x4LhnzTsNV1NEuQ1msc7cV31MGsEfRRrjvzrr",
  "key44": "3c8dWRN6fVwNXfJ3Ck7tbD6RBVVh4pfAHsXUUUvMTjE7KxYcjcvpAmSk93eGyzDrY1UcQK4kd7vXH1gazwyrqLec"
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
