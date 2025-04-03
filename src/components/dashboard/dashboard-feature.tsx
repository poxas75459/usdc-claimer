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
    "vG86ck66cZTNJPHHYormQpQub6S6vqBRWcSzumzGdKAv78ciJ4UB3TkyX3G1yvTDur3bLvduyRrZJA7qA6MsrEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZxQP1fgMFAfaiQ4zy9ERFFmz4AV5g6gcuKxEvxMhshnq9zweLaXyac4uv182YiWywNG242UHuZQZa39bnyK2oC",
  "key1": "4K4u4HwC9qVQE541mdRjyD9v73Cc5nNuJ9r61Y388wjWPzpcUE1sKhz1KPq8GwiF6qCkNonwX6azaM3WSyYqDupA",
  "key2": "2twUJFfTeboqvUSRtGfnZCAXsBS3EMciaEs6qMNDMTqqQVAKKpx7Y9MmqM4WvVxxbbGLL54eWmBH7UNKngQXGynZ",
  "key3": "4mds1T7HkGNxuQVx8k3D1z3txW5j4HCbCZY52Ypsn8qMauxmefPRyRKFPTzRxN8vK9hVExUEAhcsoNWRa1c39u29",
  "key4": "3gyRxv2dvdxeHeTghDB2AzWv8i4J6qPdShg2Uo8yxxpnsh6aYg7CpxKU3wsRK3oMQdNpPRoNbfodTwWxLRXv1Gyq",
  "key5": "2QosmZiieCKrjjunSKrQVMuipwnjY7muwwift52vueGaeXiQCbD8a1HAYvT1j4Y2SB5yFgMXJ4cmZjSoQMRJs5Mu",
  "key6": "heU7CnWz2SL5dA2HNmK25etHbDQcR5tQh8t2Sc27bXQ26VxzdR93mQoBMvHWGfBEy4U5Zm3S8yQvnNccBcaMeg3",
  "key7": "4zFmLUnT63LAKUYLkHJQsPqYJJeinUWVkFeNHgBWYzh4s3smTtJ91Z2HMdKjDLxTbdZQwdmwXCDA9hMqSawmsw2o",
  "key8": "2x2fNeMxoQEWTJusQA1SHFUn5Wv6VV7bkQ1NnHNXu29ijx6vDWEGYiSQt5pxv9ET23sUYXcQzdibmNCEQM1TPuhd",
  "key9": "5dX5i7CURSB6SZjcpPKX4ZJszXc8ZDC5E64xhCg5ijD6ZFYjQ93KZs5fZQMcarsHpXpYssUzJ8477ACE9W9ads29",
  "key10": "5kQpicxaiLNmJ7zgx89Dh9RXED21MXk5t6psfrgCeYE4vc6R9N5DDQ6esrZb4qgpMKcNLTbkDNSEbxS1oDGcWLbB",
  "key11": "44aBK1iW2Weu8gSu8Y6X6fUG6CbrkbhpXXezUym8goGtq9JPFgYLedY5cV9bNmqEcV21tE4YGZmFd6KfCwKJe5d",
  "key12": "5BvfbvCnfB4b77KLJEfZD8RCZnPuAJheEUkHhG7sCxN9EKEauX8Tsna94LFo5QnUnebN7DFAEx3A2vVUYkDExy5P",
  "key13": "3XwLNCUbaVbn6FBjt1b4LefA138sHJLMHrvTjvEioZe5vQDL7HW1XjYTRMcNt47it5dfDuUFJ22aK8rquGZaQQE",
  "key14": "54JSYW7ihHyhqF7C6QuCyoACu6GJmXhhVrDEUu3LrDc13w6LqgpxfbAVDrqXUxdAcjKRuSMeACgNXLa41HXqt9Hg",
  "key15": "3m9RQfVDCxgMskkzEhR1PAzYqpx8xPhLGJJtbtXotgpGNJfvPR5TBibwy7Q5UTtAb8BNiDxsHwkj6PTgjik5AwNV",
  "key16": "4JbF4fuRNtpq7WdtU1ZSBtpQxTrphaQeS1nouhKaqh9r6cAmxsgUN1xtMVHFVVZt11xxHzj2Ds4swFQpQiqd26y3",
  "key17": "2ruFR4UQTdP7uFpRf9b6GTvPaDJvwkky2C14paafUiUMu1d7KWyg9eB7ZzGqxNatbnnH2yzyn5JpDFZsoD9J6gmV",
  "key18": "urHTt4zco6v4EPiDwtjMAS8gsJNayJRjcSqpG5SV9qyvmFFw9hXZhcfgMjYCYkp4uVR163QuYH6snE8RfiVYua6",
  "key19": "5bfcBKhGG9mrC1JffV2Vk96cKHdanDe4U3hGK33n4pLV8PwuDVFbaaLPHLAkpAL6NoQuxvJ3SYMduHo6hymRikW4",
  "key20": "37DzidYA1LPazZ4h4cWARq6CcQYnag4epGGQwF3PApizuXNbQzRGbivX3qNNPBmio3kErbSavL8Luqk5vWkXQUEt",
  "key21": "2QswSUoza6Arfguem4Duw5GsucAEhZJFaqnw3kEMGrVoQCZF7MtCaQoHBd4Ks9mLzfB4541J3tbSKST7S1ctvVzU",
  "key22": "2xoKvKByQGt8MkBZ7WZKzHNwFVMa9Tc4ERkdyLjLgak7wx1WgJfJcDUFQscfznYyb9B22diJUj5kPPhhtdN134ES",
  "key23": "3eg1zYQsSV2AqiGHKmSCEzX8U6Dx68S9J5gSjgF3ENjU5zQfXGStbwtSseYCNfE8PGMGF8Cy7SxgHWiHSH7jaALu",
  "key24": "bh188GDhqnarQMJr4SKyna9BVQLJ8rYXym5Ai1bzkdXnmccmX5J8Yx9epLatQQqVQdEG5dsNVe9LPQcAoBmMZYX",
  "key25": "5UZaiZDQLreeK2nCtr2fs9ZGbDVgQEK2wDfi2NgMwZxsKD72rwWCnLAz7QeJ7F9sLjrqDkcSUbYrM7WZvAdK2v6w",
  "key26": "5MGMXfQKUuQcKyakWmtAs2mjxz8c6L9CXi2hW29JT7RHrvd72FLfuKVigvsM8AC3go42K7NupgeDdfzfzDUU2WUR",
  "key27": "2vqMqkta33YBZ2EkRJ2BVSMRc6yavqe7Yzc5WudRprAM3ZdGCZEhfiAhjjxQ4i3hawJmV9AWKHSw9LijWxY1APYw",
  "key28": "2rydtBGHxkoxM7hrQCxRJPFoi62s9JS4Muux24rLbCf9vk3nEQLfb3Nv3xjenxS3jH867ENnqMJ8C4bVGtkGp5mH"
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
