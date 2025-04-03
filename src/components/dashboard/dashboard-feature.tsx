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
    "3PXexhPNDREWpuDJgyjJg7GK1qaV8EozQQZAyW954QZPvuKKNSf2rxMih9mJcGswoDh42eHxsYrFDvs8VaJkce3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDXQnTyHEgjLe4rQUEe8mp6ZsScrVZLCYPw2WmEat4fPTDiPPPFTQkzGkaMpYpuuwyTv27eqTrdwfPEUeB5Pu56",
  "key1": "hF9W8W4gRr6U9bfQNftJNjGsFMEDZRVY8wrMhKKA9emYwrXUrV3noqXGeTV4YchrCQtrhuCzxGENyyrD8nxn8hp",
  "key2": "3JZJ2wdcuaU4FcYGxBu6PMcXGrYSXdRDSnmTVX43vD3JXE3FUAfyM6R39Lstz44nH8rpX89TD3tZ7Vhw63RULQDt",
  "key3": "YusYzMmB3vaJY6UupaMUsVLMBgcEsr98Q36FCWbtdqy5Pu7nPBJVLs745ubTrX5jBwNJNJ96XmxFKBxpRKxBPoN",
  "key4": "doSAS9fEbtUuLoQp1vCAF9oXYNkpw9CghjNQ2xoHA1KisN9i9p5isStuV2qAdf6rWrnRURmsCGuDF5NFLJiz7zY",
  "key5": "2wXT8TGBF76C3bEYh3ZCLm2YfZvJq6sQ45uE4fiu6g3yvkQA4sXycNMsCsPpYTU22qKhtHYgSgpgBc2x6aqVYxXZ",
  "key6": "2VPhGTs9NThoDsnJKkDVvzRBywZeyESTeBajjURG4TcVT5paXcjV63Z4es4u52oK9pMyJRSoMY9gmP9EsMZVVRFW",
  "key7": "5FPvUtvx9bHKV32gfjTzS7mbJNmnNGBh5T5KkCuBQLjbsjgQN7dRKhuaPZj831e1XSSX92K1XgGyeDiv9yY4zuSB",
  "key8": "5tUUJUUsPWfWnMGmJ1p1Myiad7PpAjq11QxjvDwC49Aj66tojumM26uhxzGuhow4GbZAXmeKaEtmX7DiKKsFvkk1",
  "key9": "MYWsf9oNZwQjJkNwizXqFWAR59RnkSN3CCvfG7WdyciDwVJRaHXWZzdRoskVcsqX7nwZDE3ABWUX2549B34CCAU",
  "key10": "2QqGctyHzJn1xU62uAwjNHruke5nsZzuztoVcE5vzwohJH6yAstYrH6zew7tCeoCuitM6yLBVcFejH3qYC4BQXP9",
  "key11": "39oW6Hgj6LH9e4ZPRjLR3XooU6AoEi8DgmwxFgo3pQbH15Js3VXCfo8YMHaegM19SU6KNo9fKoUWmW73x27ANPbt",
  "key12": "438G2JobPYEaApW4JgyPmfw4oxVWDMGDozKK3LPbeCXEyVx7x3vxcofb2826utSbi2acJxg9wEptCHh3khp1XwF7",
  "key13": "virxgoT48srHMTcjE7FQyvBp7eYZqzEkRNYpg2Vx5Bmk4qT4eD1Vx9yhuVU2K3X8Z6pPH8Tmv3XtbkrrWb6RtYa",
  "key14": "5jUExXsbegFMyCp2ucgbwcfsY4RF6ZWY8qbkyXV9urkENf7EAqDnFmC8qApLaHAVsu74HkcnPnYQ4dhewwAVVT7z",
  "key15": "4tiMz2yq8k4E9VvnS7hmakKfuZNmxdmP8e6U9yqkZB9oUdRF1idr4S1Fd5EcBFJTQNJSNHu98S2WChH2QAdHFGiq",
  "key16": "3Z478k4RyauR5rSaXdXuULQ3S16NcDRhsrfs3ahnpKwXUwLjZMATdsKRbbfi4JDUnyUAzH6K8fr4rH44RpMCFYD1",
  "key17": "2ugXh7xGtTPpDqVS5PDfnBt9u5EyJSK7iDxhMoVNVrK9i3WRbS5EbeduxUFphFtQMDpMJooHKxtdbayWU6fhAYma",
  "key18": "EonHPHvhLMG3BsaiR7o5kacVBrXfDeB1FXV8AP7NZsbWXJrTebP4p1zY3VWd95G68cz45CWCmuPQ2W1xj15htV6",
  "key19": "2hgohKTfthCqEtkRpc2Ym9yR9ttVumMDwDREGBYAwcpKod4Vz2E5PUuN59CCocUFm67A6ZCLGDfiQE9YiXer13oV",
  "key20": "3GiMHboiYKVsqGzLkm9bKwRc9cP1rHeSQWJxQ1hfLDQ3mowGbQevJLEFBjkvXe8qVjpykJbCMiKjzLGkWQnwFYx3",
  "key21": "2spsNyYKrcKXVPmz4ocfPbpXsm2At8Ho5VVC4ChEpJdkH5WF6vUCvLJqBnPuAFuD8ZKMwexmF7G8zhBGBqxhN3Yf",
  "key22": "5PCiVpjS6i4Ac8NtUwzC7BR4HHQV7WLCUSMJZ6DHwYkkDz5rJcx57G39UZHW3AjgCr7kxd7Trz8xmQ9BGnCapc4r",
  "key23": "4BwMocNtJnGvWZQv4Cov6pCExgrm4WgiU2mUUWPZDrH1ktMcbMm35dLh7p9cgVKaXe86kT6Zxy2mzVdpANyJWaLT",
  "key24": "2CFwSjYfXEUxkawhccejwNoR8EGFBeSCk15KFAspBvuwR5iREuXN4kFfy26W4k2MwUG4r7poGUQGBbwiv9mnqXka",
  "key25": "29rGLNsVSewRAvXeBhKEoeCwhEnfVgPYcXZ9F1MatS4xzRF3jP3qJg6RQYDtskBpa4tnDA2WkyCs63FYmLD9U3DT",
  "key26": "CrJsWbRTmZsAwzBZ1hX7dRpAStVgPowRTuEimL932aziXJ53pX175eiuSHC17SDP8551vxvKzHGoGhj5KfS6fR3",
  "key27": "A8kRTTcN7otmAWUTYRWsmfLydNaMh4QXa9gp9wKWDCH3z6BQJtjmu5okY9whPqhTppA5yxqzxF1axXDBuWKd5TE",
  "key28": "Jwv5wZ4qSPKfNynKwSmRHGBf9xmc1SE7eEDtDLoYGCRMXEVs39TwmLrQRzNe36H8rAMxsQu9XYhVffYAc9CtVxh",
  "key29": "2fDzuYrKSy4pn7SrDydwbDVnTiuxAJ2pNw8gRFEKR3284cyiVLF9Fo9e4AkrtmqNu3JTgjqcvvWRA7WGTo8SsUgg",
  "key30": "9MJJfsP5pYAo9hVAQ2386DFYX8aYcFPRnskUzDzmhY4ximda8roLH4AR37SRbYswM3VFanmFf74c7jLR9rcgrkp",
  "key31": "24g11t1oKjbB3XcR3oreKkczj8TWomZCwYq6uJ2EVPtfr5Hty7CFifMyJck6ZKhx7gzpVqLCAVuskJkgZveJcGNa",
  "key32": "5pYnShEHXYkSnxzijmeeNeYLFBi5vxktE6ueTDsKCqUok6vM1tjzrz22UpdD922WE5yk3EdZsJq8b9fsFDVWBR5x",
  "key33": "2GdawUXznmAHnR8dqEVbFUNLrtTGq8FzjyjXbs8w7rC8XHkBZs8CTTDuEF6TAWiitqHJJXmD8TNpk3xHcvUkGH1P",
  "key34": "2tP6sfU9v9HXfor9bAdvxHYwo84JPW21ts97BbRUCgrWywuxmqBRNQjVPs3YQx4fqS8C1cCkQ7hL9XnbMqJHBMgZ"
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
