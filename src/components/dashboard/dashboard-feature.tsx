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
    "8w7G6XEk94Zxi1QQAzc5eZZim3MALhPexqV8PqZUs3CVBmGPP2s52KPGYCQ4omZKAAqvHeaZHrF2TNPu5LiTAwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQ478YZfc3kNGpAEkyyeBMLb2oPcPB42YwBKmccnpUTzShXbKwBC6ogJ9sgxofvkyzu6iuQTpKURvYqvtHM6HrA",
  "key1": "KtS3zjPLTYA6vFXdmoYRRiW7qRx26s4Mzkj1eaL1jXnNE6Vj4ki1Rdm4zaZ9KA913qoaL8qbvvHwpjQzEAPjswz",
  "key2": "aEKBfqif3wGvk79LusVYL7G8ZCLSn898xVTdLeBvadUXBHKvZjke13ttuQ3gn5PcgY4GSHgC98u2f9zpJnTAuL4",
  "key3": "48keSS75wVRPxskEmio2H1wMXUgpHRX873ypXF88FxYNejRpBVtEoja12pYWbMdmwUD88ib3pChRPF8vTDyfPgvR",
  "key4": "2s1yjtinnBcrjPgNHPrS8KGbLTdpwj2mBCqs7cjPCAr1pQAJPtxZv2UPG6t4Qe7ATehWsY4cKsjiyiqYx2rqyJKU",
  "key5": "512ysgkv1Gbh2P9XifWYSCspkjqqpTZu8iLcefCeMYHzTt4UPx1BnER4h5DypeavcebDpzKmX2JYVZ2kXGEf4tKE",
  "key6": "2BiZsZEMTBBdsdTHcuC1cqvFVDvqX6Dbc8krktSBcF3e4qECgGpYfXqs37SmqZ9QmEL77xx26Pfna8X7BeUbzUBM",
  "key7": "5V9HarN7FYyTjKmctWE8wfWiDi62qZUqZGHjYunwC1EQLexwnHBC81eU55kN2peio6Mjcg1wUmsf3xYajXyBhshu",
  "key8": "5zifdaoGQS5gfAoPRVuSVdzcNc1c1PVcaSgiMqRQSdGLGf255tpmcU8EQiCA2AFxuS1gwYLJwE7qxboxYjLRP3n5",
  "key9": "5zvLMUKeCwv4M2YAap71uY345fFUtB79jfe9LdsFdYESn3LnYVVCRLaRrow6FZG81VAeAtb2ZiDa586rgSQELzWz",
  "key10": "5t2pSFu5pCFWabTzwuTy7F5FSZydAkD8UXdMDFrZvX5geyKp2pYi7Eduqa5RgJDHQ3LAgRUhCbA5wN1hbCbGJdKQ",
  "key11": "5QUDtQMzcuXPuN6SEJ52HgpMKfntsSiCxyMW2Y9B9JL3CKnpvtNRKBX4pbpxcRFb69WKn8XQ9DmtAXo9g9A5aCXD",
  "key12": "3Ki5Piqg34bZPezgCiVm8N6bMNrGmz9NLxVTCceFM96oUidnskakXemBVrf9csXHZx5rPEPE1YUSNNz1eGrUmMCg",
  "key13": "5MBU5Df4cAV1QDpNnZ3rEbj17axaReFniykYft7bHGdekNTeG1gxPgnYGbjJtiCxZfoMfWRX5GQQAhKvWqZWyjnx",
  "key14": "3nMbAmsrdfLKhbtczM7haktDsey9nekEkvub48YV6CaeQEfxYW7QdLvv5RfuW231MwUwgF1ehSAuskvK4f2tbrXx",
  "key15": "xnyHU4RMxYsjjgSVvu9UhnxEWd4jDmYuqYR3uq1GV1pZcyDXL7KvyuN2Pyi5cTmSy1aeKw15yJamedxJhZUcf9q",
  "key16": "231jqmmRYH82ngmqWd6DnwPEfn6C7F5va2bXp89V4m7Dxx5n3pHfbzXdjzqutnY3wjQR1fejKffN4sxhog833TvZ",
  "key17": "5qFxQK5beKAnw6nGDCVC2whJMrFNdjsntwCHmWCerLohP8B4neRYiZ5gaHXn1YsngPQGQwvPvhsFeRgMNHkTZ1NP",
  "key18": "ePFJD2KDWF2b99J7BiK1ogy7Qc6TwweM2nmh1g5qVjpC3T2JJE2ZJS8nEXnMDBbjAv2Zw7HUipEYK8hn55YJ4QH",
  "key19": "4jvnHpVWTWieRsk34YGz6yFdhCWdPXh2tzc3B1mvPgFxKC8t1f8PTHjm25ZpSPNqcQ4rDKtEHtegVtLPThE86wxW",
  "key20": "3UVpRkfaZe6UmMabr2LvWg66KKzu6Hx1UNCUmYLbQmFMTinJ6D64hXiMTqrvxRw5aX9jJcsi5Vz21Qqnk7HhECm8",
  "key21": "2VpeMeK9DmYMkF5ZRQRGnPpZFr2GKPTLjosjZpcngttcV3iFQpuPV5g9F4ua82SwHx7wCQXctewqLd8V1JCr8EVi",
  "key22": "5qV1251d7rx7ThsuTktmAm5BFRVir9yL3ebjj8HH4EMd2Fr9wVv58yM36nrjhqDfCR8eKBXUTgZe58CTzGozU5Nv",
  "key23": "3vJKE69b4HvE4N15CC1CAAWD5sp8QfYHhyDxnymoLJKGofJVM85DSa2SLUBHJSanwyatCf44fo2VjXPrN92KmRMX",
  "key24": "5Nnv5t6tDXMbs6EA4dJ2SomJa4x4wYkS7HikrN5C6CNwvAhD1KRiySjFjPVLkMpqRzMw8iXpNbSKwjR6MoSsvU2s",
  "key25": "39AAiqXX9sYmD3BtRkkRGzrGEpC5JFcE3E2kJidjL7mUDJqoVmE77GRKTrunUohjkRNMBWtKNcbw3zoGyhWjnFRt",
  "key26": "GN8rtMreWyhjjYVc1juyijrQRFZawZDRPJHZdwNvEimJXYtbYP8DGgbX95uHf1g6G2ys8kz7vwFfs8tnGY1qLit",
  "key27": "5w9JYNLMjE8MgiGLTZnc7WJq4h7xRYbNTcwn2frCkzEeQgGHjtuCYRgEzyvRLXUXamW4rKSfJttyscJTwyB6aAQX",
  "key28": "4rW5vRZkvEGjuW8QetpUHRGszi7RqALBcDUZzCVBz2txGgLMxooxZ2iXHDqeztMwt3jB2bJ174LcDvquAn4UGfWm",
  "key29": "MJJDfLHb8GQ1Eko5zQy8cgM8VdPeSAsZQQS38PEmWzKgzGyv9oMMYVEycB4kNQpLZ8MHhWq611V2E1mRpsNYm45",
  "key30": "2BNcBvp6PumNmSAr4jUaEN4Nseg2XzWun5KRBNFMRfvrkHx5mHWEh98kyvc9BGCyGUHbt4TsdvLE5MHSzAtZcy2w",
  "key31": "5PPhsMLfoDhKV8k25urKqBDKEjsFKmTBRv7DKspV3bGJP1sAnssR1DF5QsseMcMZRc5eiASuzCwFp7xdEShMDVrf",
  "key32": "pRFT2Ek4ZXnU4XzwJnC3ZBhF6PZ2KMQ2X6zV35wQ9WkxnexEikVP9CXRSxzGSrVEgSF5sQjcyg8aAuhQrRKygft",
  "key33": "3KLoaRqqkT82dhz1EPuYx2r772kEceyuhq8rGCCHAGjSw9woroFmF7dAfgPmhdfx2UxUaaCz3o5sgmLcJqDssY9Z",
  "key34": "3qFq6wongLgkAfkM2aiFFs97F1MfmoN3Nvqzr6FTQwAhWi6AEJWM197tRf8JUCdkwyZnXcSdHQHnkC3nX1oSdwrJ",
  "key35": "WhXYcUEsD5jFBim3QbgCVprmvjujMPpDcaiVayHnAwHef5SaKHz91MewB6tbEL1vFzyxKqkbKDNAbMUJV2D9w2T",
  "key36": "noPYJqWdeyJ8767A4BMMdovYtKF3CTwh8aWbqUUvPUpQELecLg2b9ZybGLkAoMYyd6gaQzb5J3u2byrTi2XwZBG"
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
