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
    "27ZsskLq5Ay49XeunWyWzK6Z9bMbZd45VeCXpmWaqXS2LWrZsmNKJooWKvvEg1kwGctmAu5G3w3camGLHA1gUT4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnHZ6GF8JxQzRqdaTctUNoTYjNuSQtTq1hw9F6TA7cZFXpRqG7UABfLrnDxZBkhCZerTJga7ZbvykVZqRv5VR1E",
  "key1": "2FReVXHDMw42myqd5zCLeqUz6V2bvBTQoYougj3T8XJ4sEo5ghXqVyoUX45TpZ13U5XjJCVYCLN4dzo2qW5EnXLd",
  "key2": "1NkKTdsheuWiaJC6CRCKvdzURxKZw3vyNUhQ1T9PCGcgToXGG3qTWLRoG2voFMF6HezaRmXm4ND3gP7nG51dqmg",
  "key3": "6vFrHhN2QDDVTMqkX5JPVFKBnVw7DUntnNb6SfBVPWhg1GdqUY9VfJJE1mNtN8qepHihNKwBo41y5JHVLTQwC2r",
  "key4": "2GJaZM4dNhKwzJx6BD3jBtGfePC9c4cgPZKcPmbJ3PwZUqS2ByMhRywCHozxP5roqM8NpF4rWkeXE7TUXqBuiAvy",
  "key5": "278PuHfBmkKZ9McRKozMmnVL7bdkszk2Afbmr31tKJWotsR2txQyTmKtfXtKeQU2LU6f22duUdVnADyUVY9hj6h8",
  "key6": "3tNpMzJ3N85qbT1VKbDKTVmydPAZVxU9yQ7n5CwiQko39EC7UqhJD2DxN143dBDCmY5EDCc2v5HDArVbt5jph7su",
  "key7": "4rysBzpM1FGrMj4zBBgwBKThgEFjFyevMw9w44NrDL9NQFMMnbF38KajEvL2CfCFWhwEa55e5RS5NNT9RTsxgego",
  "key8": "26oKhVhHDKkqePFJu5kT91hkUiVRUrtAZsckaJ6odmHiCv5uH2Fv9rPmNFFPPRVqF3VdSFXXXCXaGMVwxxwdH5na",
  "key9": "4RfCUJEw5fJTPRELaatnx1Mmy4TSLASStS1ou2zCTTZjRErXwakceahrSUqdhtBVwd3nf3wWrK1CwdgoDSeHXVBf",
  "key10": "4CngWPDMfRW46L6rWGGk61mgT4oWv4gKEtesaPgUM6WpENGjqyapcv8KujC8syMqej3knvExFbeMK8YigKhkPEF8",
  "key11": "2zBzPq5GxALVHv19qBc3NGk2KUNU4stmAMbTxusrj1nnYCcJrWBJVf5xGBWUeTeLK4Va3ntiCjhGAJiUxqD454Mh",
  "key12": "2aLxNrnit4LeP12S4PuBDFfi7A2EKQ676iSnDKmzTsjTjmitx9SsZCqmhnYxq9rZfjc4YB9U8y4JtmYc4yZqYyQi",
  "key13": "2BrSiRWyM7RnejtYsLBXScmXqYVH9W2CUjvFD6x6GZiWs98SnX1fun7wYh4NGRwCSEk5NAYvqX6BDwyXWGCYf1sM",
  "key14": "pneZxNFXxf2E4Mf2iwrtjw7SS6aav4wakYcoFHCdVj6sK8uwASmytsmRZ4HdmrNAQiwJ1WfHbZftaBvZ5GW5kiT",
  "key15": "24wkUYkh6HNU2dFDWSBCXHKoPzDwQ2vw1VSYjznCkJNHy3BgCWd7tYdZgjXwQYMUFBEhRP4JrHFTneahMkBvQ2AQ",
  "key16": "4dkqBHygGZu2K5tyxo48gTgE4z5RkRxC6pijFrrS5ueFZoXiGtZiGjxCBHYNNUSVFzN5P1Pt57U9wGZ57oDzipXS",
  "key17": "34PHqGZXbXbZZ3tZuhyHnJUgdWm5aDLMQi5aQYE3qcBPiFZyf2YTkNsNuMjyLpSQVFqhMvFu3BjZgBbkTA5wF25u",
  "key18": "3pEv1KH8EpMPJzYxdBPaveSsSM23HAe5V4zVqGDJzZEYUetPMndszKThLQNrsgQpaGGghXkrCNXWz4yNNuGVYdCH",
  "key19": "246YHmJXu7XcUFhpvvdTK4X2NtDYsHqFw3vHQrCCtEuX1p31H33ZpaYQH3198WjVQuB5BLXDLsStR1eSDkdpom42",
  "key20": "3HAAphvseosGdXu77FPYVvmbC6MchpAPAoSnM8DGgkTzCnV7FEWHSJDagpcqurVLhFYdMqvVhEVFHY9aPuVrkT4f",
  "key21": "64fiYRxuoHYWxK7uWWTKUFNsvS5eZiDFsnvaKGsS2RaJfBTqhnNnEgNadKiz34nMNeW2xAgNv65HoV9hLjFfcXnU",
  "key22": "2ec9n8zTUwZ3wrwaTL31RZ3XTJEdz2XokZNZe5YvAhVozGs9jeg2Had3iAuFuRmauDjUJrrpcWjCV4Cp1j8mS4S3",
  "key23": "vK6WpWMuyL2qfPY3JjowFzjvUNKVMeygffpHucp43HitwiE1Hromqha4qthmm72XqGVdVcna96KsvtKaMfrFA8m",
  "key24": "2pbEeNqYyhLcPVkKNs2apYccFP35gUHsgoDB1vzdvh9SU3Jqk4FPPtabH4ZEZ9X82BxiJ3hzAbDu9oYPmwLTgvgU",
  "key25": "2Faoj4HoxdTpaipYDY8dtZwDCdTeHnZ7pXiU3vT5ibc96QSpw7MSm8j5ba21P2F5eeHs9WbAHvi2KB5VYv9R8MRA",
  "key26": "3hyKruMaukwZYWmE7PYzpczS8cPXg3k5SRLGTbFweijGYpPP76W97aZXy2R5o7vFGEQa2VmbNdELgdRVA5qgVZzh",
  "key27": "5QUWGM7d4DdtYPnf4HoYWdxRXd52qA9fEnSv99ej3CZTQEuMLzWSpHEDqBH4a4cEGvkXuSsw7U2VxkypoUzcrr37",
  "key28": "61yv5h6ipaERny3QzM9vAxJpYZGECmVXdGbaZgTWcN5Vavv5TqcYXKLkzfe1qG9cXteQdf6ZDZwKtntFt4Nsxi5h",
  "key29": "xEmmxVR8vx2ar4UKK12FsjJWuGbiXD7w7fVyvYFJkSwUPtwW57ATZstsVLdhvsq5EG7xyoXjR3qRWz4Vr5cdU3t",
  "key30": "35xgWFWccNJswGjzZoWbaaZn5U9P4uWnEwdMRjFrREu8w8KZzKLoRgkoW5jkKaPtdXXrNK37Ms3nNespN1iUJbqq",
  "key31": "4BsR4ug1APP78rvnCcw4Pym9F91nQY1PhfDVriXTXVQvj2wvyp2VzuYHnbkMb89XsKrF58HEm6F9AyTQHtbEGxne",
  "key32": "4Akeuhq2wBjJQF9BiHSUL5AQKNsX6LKT3J94y2KKTnd1zAtDtPosSzxsFEJh2ag1Ztz1WekeASDeaK4qseGEWs2p",
  "key33": "2U9wRkKC5MTUXsXrudRTMqVAKtx2jpbrNxPpAn4Wcz5hztUGfDCQyR8XytPzVrKdEQaRKZkrHF4Xy9GYGjkR9tFL",
  "key34": "4hKuEuswv7SakHQMwqJHdEBK5Gi13NH5rHenHyney3GXjzxZ2WX35m7kQQ2LaVzBpzsVgTdQLmFcmMrLsMPkQKn1",
  "key35": "3eTxCTZfa2barT3dEgPk5YmHJtcVHM6UYjMvcQAE4yP3346kvMaYgFxm9hZTTHzFFC6ibcYdXs7m9VJKYYCebTms",
  "key36": "5tJUkC2tJG1HBaqCoboHJpH8Any9ZjgP2YvA8A5C6VX8WE7MT3LQ4zvDf9SmyrM5zkaeLhKKPFrYMi6uDpmxabhF",
  "key37": "3617s8CquazVuFrf9YrKbEKMgg8KUdpMQiabYfXfudjU7W5TcLEV9v4xGdtxF2ah73KPLdKTkSasBwAXCJnwnxJU",
  "key38": "3H8jXP2E9U1tZVMiUsvz4kCm5giVnJ1Q71FU66Koa7bUjR95jNFmxB8Fax8wREcSbbYcYCZJE9zcaJaxjrkj8FVC",
  "key39": "tLve5yfXdbsPwjxLZ7ronyjt5Jhjutdo4yGL3KuBLc3vKVqEdzS9VjwsPVd9L2uQyuedTGDjhXAnnwvbppubGjV",
  "key40": "5QqvWhWz3QBLm4GrnwwxV5wQ3R4qxKyFifZw2RBWxR6acpPHTfvSFTtPBeBC79WQF7sJDLLL2pSzLi3bqWYVH99k",
  "key41": "5ZGWEoJeqkTbRjLz3PoLMgKM5u3tqVSmKFeZNtJskzYemQvan7x2suoWi81JsocKttFXxN3DHpSzG5nfpTPKhTNd",
  "key42": "2hZm4Db5JY4SWAhBJA9p4aNZxZjYfy54poLZJQkCpN7FoxXNGYqGPvUorVFDAXRUYtgnpuinurZA6qDRWJytVvHe",
  "key43": "5RoKH2Sz5a4jDrBJQMHjaZCmHbzh8ofaoU9dVtedX8wZ8QRu39AF55gFV7be4GdSTs2A9tQfocdrLaeCJqy3dRw3",
  "key44": "4igbwa3K7RHxzZrh8KRV9zGYuQ4xLq7wwPfNxNrv6ok3sgfoqDxEuGxEwQpu7aUnQyGP5xG1eVbs9ccmnYitzuBM",
  "key45": "4wLB2ps3FVUQvCxxb3vpnTnrEiFCjnxN4Cf1kKurrTG5hNSHRAH4TD3chYGRM9fV9nAaYd3G86PgRJMdmzj8GAgG",
  "key46": "3bvqyUHGqUnq6sY8kLvmjPvJnQ5F3mtqo8VKefVnNJmrMvVEkxU1eAVWcJTwhAW4jo3Yaw8i2eK7SgfHKhHTNK2w",
  "key47": "2NUyrQXgTgDfwCmZfojxhSEa68RYeMEzJwxaJzNReoNhTAAX6JmuGxG66v8Nu35aQuCp91L8WFshCC7JNKuPpdrj",
  "key48": "w7hHDdai6s7yoqw8JgehVhZkQPVwXLZBDPSLbxW1P864wh2rjj17mJvAWpQmBZHKWoCngXu883tRW7E5wBxnYUU"
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
