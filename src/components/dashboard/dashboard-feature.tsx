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
    "2DH95LyepEJydCp1LQKVGRdEkxrbC6AWYUDgiXBX5F3UhgDUpHh6tBPnCvMW4ttKXapTFi54ndctH2M5qbs5M7Re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yzcf48sZcbxdu1qpyoZVjHfKrfpK9WvjgqyyroWirPAxq5GK5TbRsQAL8ZfAbjYfpq34AfyVg7M8XNjZRCU41uY",
  "key1": "2vEq8jY5Jx8KAAXCDVpnCUc29gAqzDBShEswWUjWkXGcdjEB4QR4k5rdft1jqYfscJtV6g9sqGgjPp3qxw4F5xAi",
  "key2": "5tg6PWsJbwuvz1MR4sgA3ihMZZhzyM1PBUtGivdKLVgzxca4PMsRZ8gb4utZcZ4gdKi9MU2CzVno2teNFvUq49aZ",
  "key3": "33kbWrB34mB62JweLVkmsXEKtktuCK4Jfckf7Axb3SVE1EqB9LHr8TjUKErYYL1i8QoXb1cUG53U4aRJsHdGFdJ4",
  "key4": "5BSbWYLVYpTUh1q3RMMUDFExWhuSsJQRGLyptKa5cJfD4mUXHLmJRWhvhmMrdp6hk3WiHtCA9mcufhDckucgxz1m",
  "key5": "5HbQCdzqHYdcSTHi4qRpZfXKriwNVc1zjsniZBCrYknG9GQL94BCdbqATGWvmYCraau77CzxxAYHbzjSCjPjnqtt",
  "key6": "5KbAzwhXo7CchwfZA74saL7k21NNGVSvjproWwuREJ3CqWiXyPmnrBieyge7HkAeTE4QevndNea1DitouMrea8pE",
  "key7": "4VzCsX8yzrv4U9sqsoX1bJqsnRX2kZ72CXWFBFWvccBPg5nEeAh9pYTPHPf7WAWzousofv5WAspVVwaJvaYkMnKp",
  "key8": "4tR2FzJPeFS1h35n4QUezReQDYL4oQNTQmBnATfc39widSs7ixkdqi6csiGBD8tqVke2dmjKPhBjhyxNgwWJVJf6",
  "key9": "N68zm52JJ28TWeATgj1qB9GZr8am9BYxG5Z8AeyhnVohv5K58YbX6yQCfMCZSWHfNHnkRFaLuHaksUeG44yjmE5",
  "key10": "3C2pRQoymcfC7gPmiqhhitFG426p9jciVvGJxT2KWqpHo43BwmiB54bQK1UoTSrAcUQJwftyfjA5nkrh4wnin15R",
  "key11": "4mXSUsLvXUyTvL699bHnN18REj35aBY9ANPtTJbxQrWn9bJG4aUgStyhYu6Rg3Ph499doGzA1WHRcddr6gtzdkRS",
  "key12": "4846asESnXDB8djLnVA4idi6d3iVHescoNdpZ6EzUJXhwmjiFe6gi2ZqYxF3FgC2uwa9sdJbjNuZ8VsEq7mzmznd",
  "key13": "2Zm9RxmeYuJvNvtDWGqGyEkUpQ7mzEsvBoRnsaGL3yAygvYx8peDN3pEKa13uXvt3sMKY5jJvLbrCjtuYFAZDWf5",
  "key14": "4ZE2BVv88gWbdPF9BMfTwzxMxEPJDz6EUt5jac3LFowPnCLdkMEuewQS7DU11RTooRLYh8NR1m61GW4ZywRd1ag7",
  "key15": "3w9BGaitjeWFGRCuTB4xQkFzX19KZdQrkMeHmWpHjpavvh6Z9JCULo1dCSMzVRs2tP6BdjYFojxdYgtW5Jdoy9NA",
  "key16": "aNPQWbsHMRXvda9VSGRKwhPAxLK7kTZJ1yrsKZE4Cid1f96EhdN2dcBpKLgyNq2ntKHPvowwSrHGktbz2VJdRP3",
  "key17": "5RQziYKqFyDVMdKzyZP8DUsd9T4bYQU1A2ngK2jHbbsmhEXNRFPnpKmNCQVud4VFYkgxdbHKiiigLzg4oa42b3QN",
  "key18": "2A8rA7yy74irqcFWq8Sy5PY6tJhprcb4DbC5Jwz2JTDKpNiJKspckx9zNRpZnaYnLmPCuNwiBttx3KYH9oXCojdX",
  "key19": "v7vrDpJN76j99k6EwZxWrammswv6ojzrbPQbqhXXaamzGXQHcscgmYz5cr6jS8HCN8iEae8vbaeRsJtBYsUiR3c",
  "key20": "3Tw5B2LhBMqTevbGBYAAUAcYwAsXF3EivgLiTNZJbR8FyGTz8mQN13rvBu4AJEgZmjicvW1YZ3XG3Agm9vp1j3uE",
  "key21": "UhXuhynXWNhfEV2cYYXmFccqTSdrUQXaD3rWsxMXVi6eUbv4YK85afnx3wq9tLgyz45pgq8wgkUtcYNUZgXb4cV",
  "key22": "4Hm3zgDFc7B8by1hu4PQUKTSmAnw4aQ5c7jthPKTmLFdWEqxPpDTbWq5727NjhJdmXUF87bg1S7q8VDUwf6nvqPn",
  "key23": "24ND1NqnNomTjBTQkng5yajm7mL17JrZjJE2u4ewyoGn2PVxymqHXES7DMiALSbdw1NMMmbXF82FLpZc6gmY8jGY",
  "key24": "2d8zgvC1jDjFn7vd1HQzQVkBHZWuszAKbQhTM68FZw5s6gDymWDWEFd11R4Q8fLqKT8UcB6GTpKLuhfYv5aMPBt8",
  "key25": "25FxtnZ4hyoVHqWAYXmBH6awbLb95NLYdpA1NpepjqeDt1Q9eNQTL7ChDzzicXTbGv7pBYnZaVQPUH9DwXLb3a6z",
  "key26": "4AyC2JqGPLin1AfSnAGkqTJQuYE9Ba3kC8NVR2ohmYuk4Pzuh3aMSMQeFE8nSHqCttByFrxD4TWfNRZbafNeJc1m",
  "key27": "5vUqKMf78bbPfvRTyt7wJcxo1AWinggUPyNX8RuG2qG68Eky3WCt31oaksceXCwVNXNUTkVHR5qTHG1mb5Sc1BQY",
  "key28": "54kggfW7bN18CXaKQM6E4Xri1opDcwkNgvzDGaWXiBkitYSnjKpg6VUpWvSSKCmZQrXTHQN6m7CZhmvGJ2chRiSr",
  "key29": "2AyGbvqNpyHQgsGGc7WfeSJhzaYA9KaeDnxdKxZWPkzWEeZCuosgPPq5UuTynrvZ2sQ9sYYFeehYo83HMHBoQb59",
  "key30": "ertm6VBtyXFMB2oRtpkUGWMU7KLp97vzWUKxy97ZQuUMTUmTwTVkUxF3pp2qtztx3J4y9rLLeGb9AG9Uks3ccxz",
  "key31": "itNXwJWZmrT75yTXhHoqqJZAWJnsXBCZnoghg5RU1Cwo5LKvjFqFGx5kZds7nR7Yp5wkddKjbay2vpXxtegD66K",
  "key32": "5Ycwk7Rtw5WRuyoZpwBo9QZkstBzudVrsnSwwjSr3RqguBTpnQzuv2zk5AsK4jw6H777qXFarKiBsip69Kn2DfVq",
  "key33": "5Anz7h22Fhim3oGNawM29iTDY829ZNCAe9paJQfpGzVzAKar9JwAgPYrDGU5zXfarHNsPQ5zzzXJ6cgSWMKyLrxy",
  "key34": "ro1zm3hXbmADJc4hLmYRuru4WrAzcsjewnSevJKuQbw9kmPycYxvrkeMNXrVDZ9w9tGbdLBfY2JnzU4ywUYtmyG",
  "key35": "3zypT1XcdhM4krpEMjMXy8vzMotdAojJo6f5DLtexkG7q49Nur9HiDDX6ZcL5ZU9H7vfgBiMS44gBgJBBUBJuCRV"
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
