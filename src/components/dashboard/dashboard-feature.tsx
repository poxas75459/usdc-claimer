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
    "LWyERxdkaYefM9YJwo63K3UidBsUvPoYLP98z3kvaFY6YJNHwTxvJ3EeEUdiMJYu7i8cg8aTbuRtayatCaoZ61j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAxhjqm5KSCGVFktEV2nmKCipSm8UrkTe1bmWk3UdP798954U4QuBxJ8RDn2CJ1ksMchDcmBr8gtMxxg4946rVt",
  "key1": "4czmBpiGeEzhmpFt2f7UHvRjoJvGTVkGxzo3kwEJBS9FoaqPjV4RdpTEgYJGKUnhQmSCwHRVW12tRcEG3nW2a1FP",
  "key2": "2ofgCK7qVMQzPRrdqvfeXASfTCts6GByf7tRzrn9SQ9W51VZLN2v1RZjA13Ta4RXER9MZyXgRcFocW6sD6b1jgKV",
  "key3": "2JhRBKp6V2dNgEUv9fBwxchXsakd9aFh5q9R4LJsFXP48KijYEGqWyuH12EkjxMw299BmfePgmkCRz2GUhPrFb8G",
  "key4": "4iCtMb1dxXHvAfK4BJFjwdCcRZF62UVMhQXkc3JjesBJWtTgwcRVUBJtAejPMZwZMcMZmooV33ySLsstkwGdoGBc",
  "key5": "3Je49LUWmRLcQS3FLyE4TV5ToQ4hE2VXrvjzoLyL8d71XTPLEoJvGsardsjMZxUgHsBkUrNYnYmSApzg6RH9GnaJ",
  "key6": "3122au1ohYGYajFTnzmuwifGEwqJatHJMw867nnGabaWi7vRESJ4xqtsmup2mHScCY2YXPK8TB4LTxCxfmYm4KR5",
  "key7": "4rrZNDbfMF8iiH9ETbjqQRVxHupz4VZMtjN2bN42xxX2RTpmdwWonqNdGFdrXsTaAAKEfrPc46gKAAvnP1ihc9CB",
  "key8": "579aUd9zHvpTa1WSwzkKFZKuEEwp5ACtmQdPj1aB6UTSeuGQmxeQhEQoCzSFxixnQpHhhYrS91jJSLdSw8CBFywc",
  "key9": "2QfKCu1zHuZYtZ1PHVsfYU6qeXHzxXwHBHu1J1duU2znbWbEgsY7mHYHpUFD59uKTNcNYYN4wnBZzBeqwBTh2y7M",
  "key10": "56KqspkAMwDdp22dFdyU8qhJGhtepxxXYwGzR39Xj7Xea8LRbNvwJJ5DDhNcC9kqLFycBXPzR72ZkkYUEzWmfeAy",
  "key11": "63vKcrBkLJT8zPZq8yAhzHtdqQgguYmQSQoc4HvFRByZ2A53RsFvMnjkNSeL3iGNHThCfwFr9jogRCEfC74BSqfD",
  "key12": "2MyAWD3YTqKYi8RaJzSkE3zMWJCgGHVi6Z14FRwhuR3whD546Nxjj2rCyLCMfU4yzFS9sVPqz57UyFrFTiyNtzzw",
  "key13": "3WixTPsMAgYbBU3tzC1yUGnCz5gSRxVSCbSB2xozXkmhKWN5Ku4A9HvS82K8yB4vUgrEmG3SWmnVV6CWVAJG13nH",
  "key14": "2463i4VMbQJ16YiuTkyZbGtoS32q6Hy5RJquEyfefhgFHz5ZyDMbnXbK1pfMdbGdaCYgdhi73ZAQA3x5B2iXPjQ3",
  "key15": "4Q2LdWoWkaBb5PGyEaRcJqBXvJbDj9E65HXPuWsEdWyDAdUAdUSGzEqwum2Ypk5Ah94Uf1ERezYGvHSLdfjH8moT",
  "key16": "22z7184pvvka8UJLu8ya9Q3bz7ggqbXa9LMvbTtYg3XXTeDosu6cXBDP659hycKFhdEzJsFo46cgkNissZrupHTm",
  "key17": "2GXn92JYewseZmjXMk6VqxWP4kkzGWC1fLCuDi2X9UPUaBNdx4RZRfeBtMbhwh9PR6AH8549i2yAZUc4qgt79hrC",
  "key18": "3npth8mDryi8YNPV2mGnALWqmP8ZAG8nQxfM8pM9vMUwssC9Vvpcte5V1griU1xEakivTbKVyDDd7trusAHxJs5J",
  "key19": "2hQZbiMtiebe5a9GW7zjNEh1UWAft7g1uQ9fjeQDMpVAfRp9ztzLEKWdK765msmgyPpMYk7ZkgYmQVTPimvQtWyE",
  "key20": "3DYb4RxLw2wKtEkszcxRpC2mjpPvK6iFiUu6tgVK4QFeZAGSkS7fTDszxN3vn4JSk9Ub2A9EEFAVSDvWNjcGn5ew",
  "key21": "2HqStUM5ceZfFbrEVVSPQ4SGFpfu5SBjJZ1k9wZHHVHwsiFJjFD7Xk8tdGSrgVmMr51VjSt1U4trSAyP6Ln87vJq",
  "key22": "2yZcQhTadX5GdbVeWHDvUcCveb6GtSYsGhuB4CMmDhaeyeLgjwS9q2VMdiexCK3Ja8Kg5LaTZVJa3jeHbGsYhGss",
  "key23": "5yUVjevigdtHYdoL9fmv6qimmeyLpfzJNUF2zz2ckzdPQBiariBtdFnU6TjAsyoeKDbw9Uw6pCNMKBzB5AeyJaYJ",
  "key24": "4a2xS8huBKcrcgtdGDS35Dgvxb1WwCGD7CQfd9oegATB3JB5Mxib86nYsZpCjG8SyZ2A5o9vXQqqgLGiTdDY5wm",
  "key25": "tGiLhbH41kCPEgHbhSKZjN1mS6G3ZB33nfZJ5P8EaUXRvtpF75zjYsuaGtzBS77SjU9VeqgBgNkGC91tcvwAySr",
  "key26": "5h37CgupeRSWRxe7jyH6i961H8yqNe9y4KwXBRHH5UU2doz33zZb9LXTpVZTQyer4aAnmo67k5gZ6fmj2WN71sC2",
  "key27": "5FMwvm3x6v8gGPBPXqU8h3hSkktwJ4f7NpYW8acy5qs9nVXdrNkjdQLsrSDc8GRi8XEi6GyCc3Riz9oJkvB8fjG2",
  "key28": "4aNw85K6nnjRhvH9FshjdRU4F3rUsgtMKFyMawugQgTePqzGqfhPU8HxAN3hi4C1FhtKBw4YmQD9HhsxCkghwB8G",
  "key29": "3DdDyh6ugAQVSC3GUm7rJWru1TYghTCTw6csRmB8xrwKrfqF7LANw71TJgVNQPXuzRXmKFR98JdPPa8VRjuvE5FT",
  "key30": "2qcEML7XcJnPtDqdyPLaUfW56FRqPZNwvhFhwEye8rTgST2ndJCBQppdRNSMfdiCviaxJk67xdpBGWTPSkktjZCB",
  "key31": "jKyJcyTKM1qPCLEaYJo8h8nx2AL5zg6E6HogZLM8htKCYd1ok3Md3GAQr1XP19zUUD4uCKkW6bcyXdhCYN33A2n"
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
