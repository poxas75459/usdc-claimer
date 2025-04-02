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
    "5kRApcT3g55B8H17pZ5w6HFjaRqFx8jkkKiVnUozqJYuvGcaemJg6VwTGekYWApw2vuey7qZYTvZgEQrsVdGn2pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUY69cik5qVKNV8Y5asbsFeo1zretCYRnJu15Xy9VM5ZNYuAJc8xoGVJcpLLXN7qCzDyw5AQgX6dszUo9NHuQd8",
  "key1": "4Y4eBf5uDY7qZWmKRyVuWozGb11ex7aM1JLbK5dkbn9ByAjzrEGCTvhcvzbEsrAgvxe1zABNuLQkPt6RDZ1aZNJT",
  "key2": "PobYFM4stQqB8nsSJiMHgYs899qzSxNaivdRUAPqFwmSGifVgmTbGWmHciXA5971FxiD7KTgY4VpLcwWzxLoxMs",
  "key3": "3zD8fJnsHKVvaiAbU8n2HFtHRePeEkD1Duwjr5Fee8dsHBTn4S9RMxj1Yspr9NPrBfedtifJxXCjfMzbaWXR5J3D",
  "key4": "39EvHE7WSZiS4J1LywKz3pYatasBwkaV51cKeuwj5AJmRQ39zZyS52phUpE9LehzvpqhyMcBirFZc8Sn3FZT9uHG",
  "key5": "4WckvE5BtpiZNEVYa1ZfYxKzu6gcEGcAAUFrzb6kDXM9wp3QaUoEsAeqYdNWs6qKnHL34KsBx3D9BjHEwBU4PUof",
  "key6": "22CRpSbFtbZisx48yPuSYQAx82pVc5wJtTuVVTJGjhrbEKxXxoMrfRmMSurFxFaHAupFPUHCueDjBDY1nYVbzdLL",
  "key7": "23CemGtwdjLgCwX3e1By2Trn4bUeAibwJHhz37jjQPNCZ5N62FKcu1E7ntuCE4CiK6Yeqcevdc7De8gPwE6P5ZvK",
  "key8": "3bYhZXb5PZ9bSiHFyc5MY5ExDjb2vk7B3HsBGqnmiCtufrhtyQx6xHtnnvB4tBC9SbM5BgCk834RkAJREXC8BfeP",
  "key9": "32pzQDmew5uUYiv8wyJQ7gDNRGP1PGsNrxRZXJA8fmvqo54LEezV3wvBTT6o6HeRdv9ZJk7LdPa4cbiTAnBMZStW",
  "key10": "EdqkJqdwXrJSDXDgWncbPuEppxnTqjZJpjyqKCY84L8hxnpBJdh932eQzS2JuVEHkBUZVbBsgkirZg8a864sCuf",
  "key11": "SZ4ybA1N54oBCzz4WZeuZAQG4amFs31o2HuRovkyjXFSxSqzHXgv6dDovJbp6dXX3hV9Df2uPZhxqydi9prFfhE",
  "key12": "64ncnhix3TkJRLdrSnxR5JhMDCimLGBUvymZi7wWHbELQ4uwFN1WntMh2hiiXPeE6G3fBm1cyDVE92HJgFrsZg4H",
  "key13": "5RhnUyCoWwNuLPsrFgqvQPeVUf6gCwJRwmswmDAPHkQrt6RfmGmtee9bauxaoWYxJjTA5t4c6fb2oQcX9VKThLXu",
  "key14": "5CdChjSXUYpt3cQQFows3HmWc6jYD4R8hGTy7gA6qBzsmSwygjuk7DWAirhEMzTJbxk5KSNqVM4AdFXQgfVYG6HJ",
  "key15": "tzXKEXTe5ipCkrWvVLRpQTXUYhjaMTek56fBXKAqwcY3N7JS1eNa2JwRZpHb3W1rxQgzweYU2ZvHtxQv779d5HX",
  "key16": "4hHsGg5d2j1jZDiKennYy3vVEhU8Nhcd6Lph3XLzFCAzEEcGHTeTv6k5osqX1iqzvS4va9aZNw5patMMZiGopD7C",
  "key17": "57T2PX25jtf9QwHxhBwBYfcrThE2hWmNatW8mqSncSAetUVGKZWJeyrHSRkg6r28aY4TQihGxU4YAW1Rk3WP1NMT",
  "key18": "5xEWXF7QYTTz8J3fZgP5QRfH2JLMCq9Cgfy64EtaQheYbrMFeyoLqUwoc3kKwa4fyPdF6Q1RF1vVXhmXZTvyBUW9",
  "key19": "3AcKGg65rJfneMgs2hJypJPBbSvu9ZDD35Ed6HTqNnNym6j5fjF8e4qm3S3bc97288b65zBdAjxeF1zP248KSq3s",
  "key20": "5fhWafvaT8CgXV2mgFo3KKDZFQCr1L3ciLr6wyWQGLKZMAWmHkrMxVojgsSf8NvUrPCmquHZkiP7MFgkkJSZqFsg",
  "key21": "3a897nFjUkM3bXAYHwvN8b7jR2KwhccKJGXF2JfixuDUFwhYd9jGnS8Kb1FoMjRi19Vs4TPzzDyziT8P8cvWVgX7",
  "key22": "W7vvEq9bXj2XQnu9rLFYEYqgXnZwe4TgpZ4VahjivC7Sbe9gCn6pUUHxz2NwfZo7en8TDhayKsm78Y722mq5vpZ",
  "key23": "1jCov7Ui72YmVhXW8GuTn2qV9xd7QESzK3v9iJqpgJeEyTXTeTrVPVWaz8Pq5rETagDcDJraxQ3bSZVCDh7dU4f",
  "key24": "25kQbbH2qtGTt8xfGCBnvaj3F9RXMt2PtSf9dQMgd31bMLm5RvzNG7XtpwVdFYe4Rs6uag9XeMibj4usWtBPCfn2",
  "key25": "sHUFoGD2v9EspUQLH6R3yxeiiFGnCiRpwHv7RQBW9tcWYvuAJV2sg3vGfXPD7SQjeX4LMfUVbQkwHoMZisZhrYr",
  "key26": "5SLp6eJNyNwEBRLg4S4KuHZh9g83XZEntEhKBUBbgw8MW5LMXfFXHRNhC3H36uxLSVeZcUHBu3jELcvKEak8tTuU",
  "key27": "4vG1Fe1qRCAaFSsWHEh9wZPUvPW2c49wTeVhUdt1K7pnxS297gVVXgToCvDtqLQaEe77wSqqX7ne2y6M3EWaX5zb",
  "key28": "3nMZyDiRr6WeYpZ7KefgStxmWearFv7fXM8jHU7A2H967HCWpSmrbMbmDiYXbSYpJzqAXWKKi71eTFAjLbVGLsyK",
  "key29": "3vyeQ27i5caWKywBkAJ4rUqAoWigQML1myswRY2Lik885xXjsUUT9nMckDmDaKzePAGA7QTavJ2x7Hjx49GJooLB",
  "key30": "hBbvaHmNd58V7rLGFE8FUYWn8KGpTCUYq6H6Jxxmz9P6f2q6ei6cEs7k9fPoCH46qvQiekNE85FTwzefwnWzzGB",
  "key31": "26GyqDm5HtA6maaDrK7ZPAjBfjN67b3pgYw2rHAvEKApbs7j2Z97Ld98A9ARRc3GoVijiDWdGTr1oNM3DdD3ref5",
  "key32": "5fKXg28b2iz2AgwWrDPsjpEQFkrbZAkvgmt1YYVKXhYDPRKfFyANucAEKx4a916fN8BFL2xbYz5fB1Y9Ci2hs1Ea",
  "key33": "5FSV8Jv5PUj7Gdug3nbvkYMbttZXn1CTjctxienHbtE9vQbG5h11PMePRGHJtsRD7fNJKN4MtwqGFB1yVTE6KTvm",
  "key34": "3Vb3Ppfq8aHxPGJAckBVfYLJJYqZfADw1YJ8gZoHGouyCz9QgVRu5tZm8LPpBk5nnZyfoMHDSA936tsPptSue6Vu",
  "key35": "412pZQV9XDdCQ66Y4Je2U9mHtcD3BCrDfNvdZ1LopQVYUAq1XRVkCqKRHDnFWmEkgYncL2ECoekLab4xVAeb34V"
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
