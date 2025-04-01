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
    "47yMf7NBtJ3SmKAiCbhvp8CUXASKeU1P4uTnapa8n7tvLDsFu4GBzGzkrgUmcC389YEBwtmCq6U3kf5smBBBVkXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JEyUHMFKA59vW3MHWgMc1GP4oVcgW9WVdWshkC8q76vMYVuj8obhxbQCRicdZHtQ12jiqW8mc1xeGzLeAdPRpFK",
  "key1": "BJQHhL3FCF99tNfy8vNjmcvfehNdAfXmss7xhtTQNAnrjXkiCfKjXemhWNzLL8MuuoabmwUj55bVv39k3BM93F1",
  "key2": "NxyhBAj9PUv1YbMddFvp2mGSeXeDqFmSSvgJjZFtqY6nJf7yTz1mGrb1eVFPnmHxRCEUKMUqzQuaA31eCVfUayN",
  "key3": "dpQ1DPs35VX1nMXuNGh6sMcbaZgKuXuWpiuW6SLZBFiZUVAQYh3duw9aCBQ7Pr1e5Eky7hLJJmAa2PdpVrwNSyf",
  "key4": "47pPaQo9Lz5qfLsfMQLjZZpJDxUTwNbsZFScR2qmk9qvJxM4J12F79XZLHaApEzYCdLVYdEZtJ4ZuJxXQac1nU6C",
  "key5": "23ApykR8PZov7HiCcB8gnix3RzGxKKgD7S6Rjm1P6VvivXuqhe5bWYvCgoFvMS9xjyR6cn1r5y7RYzvE77apP1kh",
  "key6": "391ChDy8yH5haK5CEan37bXKeDma7YSc3M3aw2cE9oTiXGcScbx6B8sZWQvKjhcwaVquqnMP3x8jRZkkDpYYQbNN",
  "key7": "4D2sCJXbsN6UaRCpciwhdk7Ao8Z4KNnDJGcMmD7d6VFtnF6GWYANxxRvdLDMq6eVrbPfNDboHz57WpfuvWZtJr4D",
  "key8": "3KwsF2sg6wd2rFd9qYHRn2RYjL7K4cQzG4jhTfWFBho7sPs4veNNXXabK8JVBJDzhSJSejVbAoip8GxBzBbvtiaV",
  "key9": "4Huh9fZk3mzP1f45s8Lxcys2Eg8LiDRB8VgaC6CEozz5S452476nf1tTvJ8z874EWe5dPctKvAwkk6F7pBkt8Ab1",
  "key10": "4J6Pw4yQPcXHZ2XJD83pixohMFzPKUGe3hXWGLwCycH9sG1MJmUofJFX5LR8vUd2dv1CUZP5xqoSZ1G4mNegjiW8",
  "key11": "25dspZpL2yMzbHmXNfo3oC9saDHzE1PjdXrLwjacMK7oviUaKGzBkRgDySUzdemzzD9uSPPnUdfFS8GrQhY8F4xU",
  "key12": "67Gi1hhsB5WXUym74hgH6eLzn4SfiCtVBtrhAXhHgNxWzqtRBvTivkguvhHZ6ZKuWdvpWig9x6vXPoGhHg3sjmaD",
  "key13": "48e7GfLY3279v2aqJa4zzwHrgVGf957i1ggfhW9Yw2HV5r4TNdURna9ex5qdL82Y8seEoeZdotq36WN4gkrC8v9Y",
  "key14": "4isLmTsU2xJMEyJx7syKcYUhhgYQFT72hNQtEkjpj35cRvCQM94Q5E8SFHpcjxgZ7c55Yrx3huwRrTE7yPv8GKph",
  "key15": "4sPUTowMAkXvf8LPEwFsiSLGFLmAYqT2RdYUuRdhHv6m1BW6z6oE6jUiCyuiXWS3xYwjz6oSafYdUT97utrZK4mz",
  "key16": "2ihhRdhwAVWt1uhJoscrwL6LX9TLRekoZ8A1d3C29PgnGrcCBFdqT21zPvS53pFomxYp26ZPpxjxzkixWFwBA8pP",
  "key17": "4hJQZvnqKSP8Dwn9EfB8EjGtWBxhttV4fwM27aNVMwNHaj4fcrpvpMNhqVdSctyxqF5j8ehM8QUT6RJK2aihxynS",
  "key18": "49B3yZm7ipR3v7qZbjMjBxthxQtuSjQrVFKV8SJDYDHwoDGkqc6VAii8xP5gVcqEf2cUpcQaSK49MoqMk6VUWtgQ",
  "key19": "4w8ZMobmWw1m2JQPV6ZfcDW3Ax1vom7awiD9CvZNbEpkeXXQmVfycq51NAEUoAVAKKmtHhebh7oJaaRcohFTFGSY",
  "key20": "2efKj2KduxYZ4sHrZmDLTpcH4orL4itSGEP4YwBnG7nwrXpn6dkNNTBfbdaJohzsghPjad5GUrdkPy81WhY2nB1D",
  "key21": "4M9xY8HqyX45vzwDAtkA84t68nUM3m6K71MAK1DTwbbcYfwS981QkCyKEgWjwVVfrEYD9dQFDWzQWS5sPFYqRu69",
  "key22": "x9iz2H5PaG7LcG4oEsthTQpa3BDgxCKS9bwt7N8pqoCzY69Zbk192CiYN8FfghrQydPPojSUgZE1KXVAF2zQzgL",
  "key23": "4jHdQj1frJQzbuDq7YXmpxY6ukVAhQ69XWE8ft94RagLHuCo8wHCe7pjzkWL2jGpWGuHXCD1ecko7Lmzjk7niRm2",
  "key24": "SUKQL3j4ReWibiQSaomHviKZn5KJj8XAFK9z4MaNy27tcZwFnPHZhtpxk6ZE5mCBdhaaaH65fCSu3c6ipbcaoMa",
  "key25": "4m8FxEc892qj8RpryowGhWzD6DvijpKfDKpcFzpienWkc31jDMyCxdP7SW5nDPte3beDUtAspZnnHrRDCEyw74sh",
  "key26": "2xaBpntRGqu4XEnv3KuN8AidxyCm5xsTgdwZ9VsDuYbbvYEPykdhXHApas69DeDMQHdQLQYKxEejEw3aAiq1iN5q",
  "key27": "5T7zbVoupa8JkeH7bYwEzZrYVqzsmioihcNWmBc8VVk6sZccDTZZemArcdCBE7emaZNMX2MJbnmSft7i4YZNxsC9",
  "key28": "3Sx7rAzZdLgYvrncFYcRqLDkpiYNiXfmwGcfFYnY5u5V8ZAjvPY7d1sQPnFZhEApWJdQzKNBAvp27aeAWgjpTnX5",
  "key29": "hwoGAkSQHVSxSGFd9yzfjDjBFDYiSUsqWPEGfmUyzpQPYbHQB6UoBSYMqQFNMviSRH8wd9KQ1ksk9LLwg84X7XG",
  "key30": "3qUfm4mcjvLBVcZNZkH5gwiCXZpAZWbaMxZMar2P2ZpWkGNB1noncVmYxp5hWX2G6wUGbWwqiNF7r9tnwcFjU1aS",
  "key31": "64sBtWZxEakkvbazKik2TeFpJVM9j3wFS4gmhyWaTzfXtTTR7R4JiLaVy2qEJAHXSs1Yr3SKQqEaAcr18dRBgj1w",
  "key32": "F4kyA71ftHWW3bTVk3PZq8aX2SaTvkEsWqmjLzWkhBShqR3VNbVJnthUjE3NDoUxMpqPVQmMkFaH4VoQ689vWBb",
  "key33": "3ME7wXMZ1KpPRwUPVingdJVsb6T3fr2P1Cc2HJmmqs754UNgLTqWAFzbEb73ZzGHMXEMRyrgxqXpGvoRNfmh2kiB",
  "key34": "2HMuop2ZMMRG2c83LGMfafpyZ96yK47gq51NKbX81XQBL7cS3KazTj3b1hth25wvLPcJZsatcvBwQ4hVxXD6ipBc",
  "key35": "2eQrx8u9QuT8LWycVftCZXtKMePBug41kSeG2haAiPanSKf77TgWyycq8i8F4NxCLyWb7P41jTuyCwpKJ8GTWTp1",
  "key36": "2biYpYLkvgdvWF2TNFBDEJEdHXrrLcPhBFdAp7BcdeY9oTMzK8PiQn2awDovBy7CvUxKsthQePNgxf4BAHQZJTVy",
  "key37": "5kLQ2zA7G3r4n3rxRc8UYzpLVyaMbMffHjWPiu4uMzKV8diYsQbQU3hC9ignAJmMWrZQcxgbK7EWzXCnCSfpPuzD",
  "key38": "4yNjiY88F7jQ39feKyE2Ht2BgsNZV6rq7EnHVafmsy7PFTysXivNBHjn8ScCht6xzRsXUWV5ge8Zz1goEU1QtnK7",
  "key39": "4tkoFe8i3TXzxgAqa41NigETSZ8QPcS9oSNzmPsWrtgEgyqBTNE5p7pBcBnzrH7bnVbHDsw9Cj7kH7DDWDJ6bLtx",
  "key40": "Wv1NRsH8uGsR22w8G2vfA5nfodZ2sAwfBbYFvErxi9aAX9hMpJr5EatAsQCcaZk9ZjrzQktwRWiMAzRvq7akZuh",
  "key41": "3a8MoqWYmqFKPXsjDy7AeMpfMxseDvj51MpMjKu4sUqFMGB4ya7EX48HBQj2mxgh1FhgpSKWaWo7V2sUD2p1EEKx",
  "key42": "Mum13wtJsPjhV1G4NXbtqxpcAe312KVeT6YncJ3Lk8oGk5wGYxgh6EifKG6LPqJJeaoWnRXcSg3PDVoED9rzj8T",
  "key43": "3pRyBLMen9fLb2Pw5SZ1mj9ChxzU4vadiDMh4xq2mXGSkR3D17VawCZchgPs4gWfy9FJQz26NUeo1Bqq6eH2LT9q"
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
