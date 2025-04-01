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
    "42uoXH4SHG1kFE8P8SzN9Do4Pe5GwJ4beCJqPKTcULWxHhyAmCbCqYcywJhqMuZDtEA21dJXKQ6Lu1uC2kEkquP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaefPWasGPKbKHWd2ViE3ZCjhGFt8zVgWKCgpGopxWyPs1TVBFNyLBMyJwdobixBijaRKtp3r2vG7zuz6wALiZ6",
  "key1": "4qpTUij4KuUGTUReTakgn7TxJ2U26RsUhNrqMzQ6CP5oviMA1ppPujjwtBVNRzfxtTK11SpwpPxpRsJpqxTFdJRK",
  "key2": "2HKBtFxchbY6qJaQKDE8YwdEUcHBxdbJWbwjADMNrJqduL29jynEx8hJKRm6xaSV29xVqwUiYWnzoDFozpVnkzqV",
  "key3": "5q1BGqLRrLyuUPWcqVmWpkwy7fcgL9oDfp8SgVKt1feJMkQduKKiK7PhYtq6j6j6whGR8o3u2yzjufo6d663WvTx",
  "key4": "4WfJqgWe4d3pC67idSN5c5WY99E6dRYjGiqWP85Y4Pr5L4faKbsGeQbpJXZuE4KLwtxiQknjGw9DTib3CdA9mBTN",
  "key5": "5eLTxXcZWU8fowcHf4oZuhqsYdRiasoy6QaVQ8rwG9yr5U6L2are1uSUKKXpUBpV1zbm1XbSxUkn5zXR9TWRCvQ5",
  "key6": "3RmKUxkmz7TQRhevuaCuNBveABRm31BhF7zsLpZqzTMinwv1iCd47hDfscJCcujGZnNwMpCur7pPXwxW6YkByZwH",
  "key7": "3Y7n6pxX8fmWYDGEdWQ3TeXuD7GFhRQTKcUSAHc3GWMuwuvHXHHDkmEVesfxb6j8bxiFr15L6DPnPj6UedQreC5K",
  "key8": "5VkBBgKWp2jbV4nXMhYdM1s3U9qqNLkUA5w6Y6tUSLNyq4P9Se17seQ2BFxWH3JFxRNXT1oXTHkt53kT8wUYA1fg",
  "key9": "2DRBdjxfkujmQZ1R6Wvdg3B2zHrxNTg1mhsDq1rGSbFGHmq2Jf4dfVz4o61dRJ2CfuciAFxEBGNAzepXxxgQNnE6",
  "key10": "2UGvbTLPtrXESPyTPo4PDfPgGizMoi3v9Pgy7BXx8WTZuZuAZwBoA3eTJHsXWygkzsMxq7TogBXgJwCWXuMBw2NV",
  "key11": "4G9JSsdbzug5mi3Bh9n6PEpn9RNK98wmuezhmDRZ5DApG3w5YcqGtfszPhrMNMeANVNhFYGXHxiPaRK1p4aYdSaJ",
  "key12": "4DuDEAnqv15ht1P4DznghkZrcfBYYr5MYVUhLNECtVPQKn7H56ubP5h1SJrTHToGBSnogTRYQiPy9J7Q17pm2Xrs",
  "key13": "29ynbQoidcvXe8uTaYttq56Yg1y6CLjnCv6imnXMLE4qtUtrRrLkVykJ2d1zuSko64ttaJrAz126ENZEdDq7rmJe",
  "key14": "5iLJifsZxnAdGZ66DbACKwRn94YfPx2vr3CPYXpo17DuBBdRRUx3rmPEeW7T1bWoKzyYLnyzRLcaqa4HL19PMm8v",
  "key15": "2tdMPHGntXmqBvxJu8xZz4kVgd8P2aPutAdQtbNYAHL2EAiP9CE52LGqNCNHn6rtvz6yPKRDATrVTVGdkobCVion",
  "key16": "3k6mJS9KteWuJddY9cqS4baCg8AR4uYofD7th2r8XtQtg2ZLUetsuHNrV2PsLu8UeAtcuDkhXG7RgQmCrHJW4mKt",
  "key17": "3k59Ev9jFpLpeguBnNSeT18c2n8zo3h7vQjYpU1LaNXJ7JVRLmbrHeKMgcHYY4cEiPFEuwcENj1RNAbpeqbJFGt4",
  "key18": "27Zit1MSHyFuD7zSSu67dyyPQnP1Ypv7w3EFfekXBq738i3g28TZpvxoudB1q32AZZheGsp8Pt9CriksSrE9fiNr",
  "key19": "4SoHQxoofQkik8pbpohAJKGbai4tU6yvXfzmS3S4qC6Vb8iVJrqmoxNS2DAUjA8hkdcQ9SbUo9AaQbxYLKXKgHA2",
  "key20": "23nFW2Ehgpj2KuzqfSQBgeRbKiNffxAU7bhiAQ57so6dSKojJrTDP1Nnwb7N5X95yApoSAwZnY4APep3jfA8Gv1d",
  "key21": "4kHpDiPVDJU3moApdwEgNTgAL5Mu2Ae29GR33Mwv42sP44qDtkixMsa6UUM3Q3mYpv1dvH8tGaLp2cWhSN3ohr4F",
  "key22": "3BXVJV1Qmwh7RuRp1cW4qCksr22wyxFvUUQD1LAEMBUxgbxiyd6UHD5JT4cHanp9hi2MduFAvaadL9QZQAjPkq3A",
  "key23": "3vrFWmk4REvAqYuugwWb591qWuCRegaSAJDp88Htb2UE2ypyd1TqDvvqCYxh7HzQ6V1zoD1gg8bV9re4L3qFfyhZ",
  "key24": "64QLyvGaeJDRtsVtgsQ48NSmau8hCio2QvfzBXoUGdZfnDnjWDBWiEfuRdeDwFhe1YFyU9HhqJWpRTFPuXH9igan",
  "key25": "2kkvmxMe3HXkbycQWigWjaCHQ62ESnNeAE6BHB1X4Gf8Da9TqhUzcTKMQuozC8Xp3Y9Xvo2TqxQx85kAv1EhHSdm",
  "key26": "UvHEmiYD4tqVzBrprL2ftPq7cwH2i1k8DxEHfsto44YyMS1mFBDrymtuRFwLqn16W1eFY2xSfvDAF3TG4qnwLSs",
  "key27": "Fpa7juNjUC7tCqCvwXULV6HuFJRd76BC7VS5jLHdNJaLF8AJYum9ZxYBy7UjHmCubi37x5avnjmM58TKc6KwFoa",
  "key28": "4kWyQLG2LAGesTcbYkZKmCUr44RohpqFhypGPWaagRcJH1zQp2PXGu3ZYRmxAUthwXYr15T6URS9BHLjWfSN3Ve1",
  "key29": "43ELTz9ace7HBrDiuxXqQUsv6C94sGUjYeY11tfozsTwx8un6iLyiZLL6MYt8FWGznhzaidGuHLRH8Uuk74wRyme",
  "key30": "62y1YgmzjmZ4yYeUcKg4sF615RTA1YcjkEAimMznZkVNMFqa8LjnBM8bE7nHGEFAFd3BvpBfRs6C81qtbp9kzVUr",
  "key31": "3256mAoSL2qRNdgFjNqRWFsdr2rPSVz5pSb6XjaFeb81z7UkXDYtANAVUATYDi1QGB7CR8LhXyLG5856eYF5hYCu",
  "key32": "5bM872cpP1eP88phCe31sjJ3R92jP7y6Av8iaPejshHaGwoQTzcT8JukK7YfTvFeRTo2j1mmSDeX9aAXHT19dwfY",
  "key33": "7hqAgciiXxks7zoL41k2Ae1Kg5Rvw54rxVVN885P2X6RynkAf6anvvScZx6gSa153W8CgDMbLTGSUh6UyFUtiCh",
  "key34": "28vQuoZRWw47FAdCi9QfqfsWMvNMhZhH1t7uVLa4Mp9kC3dxgRNfUdgeeoH8ZPsghtP5avXrKr8aNhrGCBR4FoAG"
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
