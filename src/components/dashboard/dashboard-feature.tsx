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
    "aKCyx6ZEw1w9M5smEnsHaZgEGNrqidGvhzwymFNJDnneMmY5kAp2fHChyHF74VWbVSCcpRMRHNLuUt1GTXn2161"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYzvzyvkuTdakoyzFQpMuJBHDvYvsUjE9m8vBaFovFWVqQ18iJetLUmpyeY1KKpiaH8muYsjNxpGnqnxsAn8HNj",
  "key1": "5tX8up4xiMMxQB3DMat4KPHNh3zBRnnPAHizSVxsxxJPGHWauMBeBUs8UkgNEyHwwjmsPTT3FqMWfFkggS93ENMN",
  "key2": "4kAPjwpzdhRKkBPqjCsrCqHtrnBQr5kYVsgN3JkxadrRPVAx2cJiEfLLJRj2LNjHSW9BvDp72QrEpTqi3WgZLJiX",
  "key3": "3C8CaYUcsNnPrUT9X6qXBoY1JrDbHDu9t2hYxWfXi9vVzJEGHBeMffHzcQgQt4d2QG22t9iQk5TC9i5WPG2qtot6",
  "key4": "2erYd1vbVocJ9YuxrGRrdiFNffb5rB7kJdcx35VXeA3w8wZuU869YqdrGKmP6HzALQoTYh41RHwL6otngxmSzriC",
  "key5": "3fvh1zimPzUnrLzHwPgU5XtXDiprVXveoXt74ZAa5LoLhhXXVNkavmeUt3C5qghsUF24Acaon6obh7N6KY8mxouZ",
  "key6": "FUdc5D5Wxf7kW4Da2a7Qia2ffJqu3xHqL7gd6ZXS7J1v9kGihxLBB6v4H96KtnDWJDuT2u9a5dTZJq8G6oNWfoJ",
  "key7": "5CNXVnkrQsefTdmgDWSSHKpmtqnPApyPq2qwG7cAfZc6mYEyvzhu3aQeZC3cpvUrj7BUB3hw5W79JLnHkNVLsKKt",
  "key8": "DZuYZSKxwGkGM8JxErnHHBbw8nERjuAKb3aWKReip5W6W7CG9aH4SfZVVSwHwV6P2wTCWHPhQoYyTg3SxGML6kt",
  "key9": "3VxxG9reCZeEN6tFV9T5HoqzaMaREJo1aX92f7MXmNdqEkXm8C9i7w9VEQdj4yS6AYBwFc8nQuCGVXokKUWiM24p",
  "key10": "5JftQd9bXapMGxmCbMu216YP3guapUd2s3DbMc8DvFER7GVCCoYk8L2a8xBruR7U4xZxLysU6BA7aHh7Y5iZpsks",
  "key11": "2SXw5cXBsdxiZ4WXQ4FJpUYA64cX2YyKT9JsY7pdZVsVX5m1tw3HEJVQ4tocYgbb5vTjbcdkAY7B65t2chJf6S8n",
  "key12": "5PcL5pn2FfMgvo6acTWAuHV81x2pSmEfJX5KMHCZquZrXJSZu8zpDXarycHMRKjF2howYHyDSkk3eZvHcrEhWFoQ",
  "key13": "34r37RYyX48Ya6MkG6SFZ8Bv4Em7YM2Kd4SdD5DGSTk9nPjzw3o8pEMrXM9Rg22AMAf3eaVWdgxaj4Dhd45zpy1d",
  "key14": "67QJKmRUW9KQUuiSFyF5TXiNoRHbXjuiKFm5PqCEDpauyecpqSnQ4muX6dFin5X7toP6FXLwqibvN6xmKSmH4bjM",
  "key15": "5vXR3879L5Je8QWPLppANSmwEjZd75xhFJdm5NV8Wb954AtTgnF3iEPFjoWLYCVKxbZaSr8rtRvEDzpdWPK8evKF",
  "key16": "5XUbSR3rRudoFBRxGjgBuHWobhaxd1Vh9hLQv2gxpvrEVx34tH3jvtxkkPGbfxbcEUzKU9f5d98o8wkrVBfMwnd",
  "key17": "2RQsyjxtsd2cvutVdDuXDmFy7gujk1watzhT8y1dU9b7Dz5Yq613VkoMWxqtAY7ySaBKoQHGMQTvxv3rfTqUfZUN",
  "key18": "tbF4ivjdR2N5BwiscwwgohHni6rAkEwVhKeAyuh1ohqoHF5n5Gsa1ufAe6iqS9ZvMZJ392qdYS8U5SR1tcVbbfL",
  "key19": "4W3hxvJeP1CSNN1ALhaNadPEyY2DG2zZZ562dM4kVCXsrHDjcHBEwWhU68yYdmoVH2y3sYDe5fAWAUMSfvh2LvdX",
  "key20": "2AaxvoS7pqfeGZcQyw8nxJt7uieE5nuCqk83ZBxM2zjC6wMDhkpjmxX2pMUBFzycNbKGd1N8qYmdwm8DtRdHjFCE",
  "key21": "4dDwAP4Mif21y4YCQNv8cKdKmLtudfshTVrbSqJJQx5Kb11Eun9hWdnRfVEyRuwmfvqvjoUEFa8ieHAcDDmWXaUQ",
  "key22": "3aeDfK1uQvtsQW6mx3RWk3G5WP7vbGW3k5rKXZPu4PBuFhHhk7WZoZnug2M3c7uJNyBScDqL42iRryrBhLAyj3op",
  "key23": "2TRdo7mMHo2We8i8RvA32CRthhLN9ZKWLr5VCwuH7DqFJNQCdXvk4JrKFAXMvaogxKcnSSgKZGAW2A2iRbPVzQca",
  "key24": "31ewxQq4mdvfRENN4qKVzRdzfw3zek7Ctb5s5VUySUp1F2kDtrMDS469mWcn2ggzAWin7dbGDvJKLm3uipSbEA15",
  "key25": "2opzToaAZmBBNe91YNjJMjVWvGfhQ85bZPkvXVzNcZqKDrZQLJDhgy9ggss8JYZSgg9Pxa6GtXwRmwFs3qdFHY6",
  "key26": "38eoN2JrB6HqnhwWSBeQcdkwL7RxFTUdU57yv4V6DqJGcv6V2p3PhdUJFkpWm7qQ4hPYDGQHK1cm5YHvL1XMJaFD",
  "key27": "4cgGNT87UkBN8NhSYQpcDtFNxJc3naAs7CdygspphzpKLfVmJjsqCg8rC1G4xafzyBfsjQ4cRsWG5EAZubrr9JkD",
  "key28": "2WxDPFHoJm6Ei2bJ5Y3nbFYZesEGHMEqR43vqbivaXh1wyNk4E5qnX297NGE3uhCHUYv8e7t1GTdhg2f4MRswedv",
  "key29": "2Nwoagj15CwBcaqF7NPzRP81i5i9qsU1LCcvLw2aFF6zNgZQhXXS2S69py7PaWJAGqpTasz4wre9cDkw3QXP78rK",
  "key30": "5bfeJph3foBwYd7gWKDKmEHMbcxwjcQWkNvSYSHapwhYfNdUqLyMHfZNGEEMpjUutFdQThZ3rwGrgeH8Ab1nW515",
  "key31": "49yQhup8JpGPA1G1UrXdQ8pKQGyyG5ABrCgW731AySfjrmzsxvBKMBDohiT1yXzbz7GJ3wz78aV6hYgYZpgUGFAo",
  "key32": "5jVUepdemjZgxUQNtos5VB7T1KxVXLfAPZzcUF3nDAk1LbeQzoLDNCGqPcuegpMkinsRARBXgieKsBFyZshnofXq",
  "key33": "45z47DDVeFZ73yahDLzyTWycVkPxEVgS7KdpDArHtZyQ6a2Bty4Tu2dUa7iVSciaLN8LCJuw76PnwmNvBmUBsYKT",
  "key34": "4zY9NXyBWwtGMw56N2mw36NmSJ7L9XtkTstVeEA7qF3Lwtj6S8xBwjHDUFL44rAY2AQux7LMA1NfPWUCtpKZHFaf",
  "key35": "5ys13y1gv3fZuBvkGDhTTCCwwpZ8m3tALUvVh1ZAKqozc1K9h8h25JmaXU3pksX3mjsd1ZawbKTSGmBJZR6zpbJF",
  "key36": "3j2zTfnZHa9xkRcsN4YMXHcjGrHb1mqtGb6R83VPe9DXpiMqnWvTRDtF5uANAqSnRGpV5uyFR5i5KWX8y2B9T62g",
  "key37": "PhBJH85YkzW4kaqCjcMCzYADfeedbwCcrMzmsHgeBTUVYgvj63ivs9pkLXSn5XNjcCcFzEQfrMCdFFmccddGgxE",
  "key38": "SwLtz6aMDcWBXhQottMhtfyU3MeLfE8F2Rs9GzonzNMjDnLncTUNZMoEHckVAe12xrZfrHguCXbghpSzGVaC2ox",
  "key39": "49PwXb6XeHvfyXDg9o1nyd4DHnF7mm7eLRicP72VNs7D6pZUFZ3uhXNnQ22Tj6cpqyzG6jh7Kfsqh8ZNTyuyUrKz",
  "key40": "4jAXpMC6CWrFcN2kDfkgpR9Jh3mSKXbFAXLWtr4KGjw1KbDSwxgi3aTKgWr8DDuAjX9BqcDLKCYFYzJ5kvtNtLeg"
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
