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
    "5rpzKYrj7noWqFj1gYgGByHo6LP1DwssEtnghBwKHp3KaM2kV9zFVvp6vd1Vhkwe9eryKoPQ6PgHcV2nEwPU8WpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jms3yAvuAQUjq9wetN2Hf8KyxZzz2pfYyDaWA7up2CgQ5irmtUefLpMMFBDFEzsBNCE4kgdy5D2NQGJ5mdqR7nU",
  "key1": "UDHY1rTSvNWZibKVUcntD8HUNMUWsjvFzFz3F8BHFri2MZKCRNN1C72wWDszzLMNnjwFr4KV7w9PVufa2U92qKE",
  "key2": "4wpJb25kqiKzHDPpLCT6djWsVaLePiEpZjWAtTTckiyyjoNLnYLQom4b3EiKfn6FracpTV78bAYUHHK7dQSEbYye",
  "key3": "5eCwtn1xfzZxqnFYLXmcA5zvLeUkyAfYSPFm1SjeUvbfsysqp6kTHuZvTpHV6C4zpRNMtpiL2MWvM8Pwu3BW2VBX",
  "key4": "2pmAvW33X22RC6yBeesv8wDhKuqgUPKJeDiwXtz8Rm5YbpYQw9FuKz1NboqWWxfpjGEYUJGRtPetyHFkz7oz7x8P",
  "key5": "2iKhoFZC6pkEdDdUT982VJH8u42hmXWwiY2rQvunLh6VXjojeJfgpBaTuxhPrarvw2TRjiBT4CHDAHaDmx653jkW",
  "key6": "2dgCVtWtLfAYXLAbXhnFZYrVQ4jcuJ7ut6mDMixyS15Wo51MweS8QwwyYivp5JruY1y3Z2dbDNTwaGwU7smoqfL",
  "key7": "3Ph1GQ57vNhGEZ9epQead5KdW6jFcMCr8rbz6cLqDD6P3n3bB4qfJh728RUw9FpFU775L2raWsGCL99BW1LN2hMF",
  "key8": "UFHeG7mZnFDCwn3kLUAgt5z7cmo1g4ak6nTtDy7ZC2nzkpXXNZXpvs3HCHfrqug1J2oPytq6jCycask1AwXvsYM",
  "key9": "4gXC9CVQBtakArrCazpsosKueevMG7pK8pzz56YsgmAExAah5sJB34kxmqTZF5FH7qSNQBkF8BM4hLekM8CzVCqs",
  "key10": "5e88ZSCfEHR9jZTqJ8GyVovqRDxioeyCxcqetFTMvP4P7rPWMEm6ZY8CADqeJqRZuH1sJgaz7H9v7ajLqdeMSLBc",
  "key11": "3twcy9E3sRCPJmAhmgAsEo4dpwTs5RzaqeQ2gGRFkBZsYH1hU4TXyqng8fWD148Kq7VzfmRZcC7Pma8mtYGAJSz5",
  "key12": "4Hv9BVNXBVnFxrY11SVaXRnhn3xccU9zy7YGSz3TxotGZJheUzoDnAukSBB8m1xzuVi5Lg5H7ffsLDw2thNJfYTU",
  "key13": "3MXbtxbvHiVRcSWvnw7xFhr6iGQkqmYsmaVp7uhsiokNUsbPCCtr79VToFeVXRUDfzs1SHi7RrY6jitXWy3DuQXW",
  "key14": "SQNftBa4rtN5STzM34A28YSqJKf7kfUf4QhwEbt3rcfsRWxG9BoYMyhkJzsmbDyNTjTA3XyQGwQgEKFEaaBEUPW",
  "key15": "3qjsHpP9jKBY5ojMWyi6LUUv64TP7uyYUr5K3KrTpYnw2DCJdFTo3mhcE5LPMvquMzGWV6wKhzJWea9uotYbGxLr",
  "key16": "47uVBvEyPh7nsaUghsqp3Zbqf6kjD6AgkfH7Ck8Hc9hWEChP5rR8P5hjvFC4psjQX4UvvgP5HwKh9XeQZX73eH7m",
  "key17": "2NtcsBo8xMz7gWuU83uup1MoVjyTvqcxxKNjG2AKDzwsBMhtoSpUCK8Y4QSy1xGxbZoR7MmwP5Cr3wg22gGvjWLb",
  "key18": "5oHhJMJ7ZBBUFvrQTX9L4e2fx5fPmPqWWRtLpWnF994ztuRTN6rR4ixsk4NoB5i4mGUgM36xzy2aPNK8BuLtYW4Y",
  "key19": "4QZ9aeW7QrewJ1mxn2tLuWEJ7vqCH9MVCHUpzMRYy4nanawppEQXLtPN6Jbjwew5SCSFFiZUcWwF5FbqmgoYuQyd",
  "key20": "62ef4BLJdwX1JL6GTqsH7LqLVxhhmvzHaaNNDGyjXQe5SeCwPKH2g1dKM7u9BkUWoxjQSQEYA7ZA4bbdaN9LxNbE",
  "key21": "2eZjk75Qc9fYJ1yJZ6FVsfxK1i2NQSi1ythisr9HfmNiuoxXr4W4mVRLfJ9NA7iW1qMzdcWtyiH44M39JWejXXra",
  "key22": "4m7w647guFpcifL8HJzpfwK5g3GjkWuZm4pb8vhBEdsxQX1mag8p9fpYH5QUoggebaH68wmSznN51xjuZuStMoMy",
  "key23": "5kV9yCK7zXDq7vx39W5YMteewY8JqNin4uD26hZxH7dL33HUc1vzZ8vLKEUbQYtZMXc55rA5dH1j3NqydBmeeqhd",
  "key24": "4oFeAwhChCVSVmBYDw4LkNG2tyV4RhA9KNKKTk1MnV4wNqhFF3dEknexByb1MHwZyX63vVSZvCPHe45qdcNzE3aW",
  "key25": "8Y9ZcvaBjDDsQNCzbWicvVjXUH1h9rpZ6Fx23BYDcA5ShD6WgEgocXXjgUbgPwFrp6tKcnczdk4pgTrigvXcSvz",
  "key26": "4Nbmb4wgwzcFKr3dcbG4arNmeqhT4z1AC8nFxTJdww4P3sf4oCTCSajALZDwtGZ8dqCAJqCN95qTAv6uVMR4pmRA",
  "key27": "2WBjynhGbqjaKp9Uxvco1nGJdAbUAvyd2KFNazDy9yvd531CmQpeSLnjsC3ggEQ5UoDW6CzswFCNPZzreTDDw1tt",
  "key28": "FXAf2bqBD2fnGiwH2YZTyc37heM4HPCr1k7picw68t3a4WSk5qhEds9qjBVWai3GBs526iJHnTLSg95nz2HwFJF",
  "key29": "4dJmKE64LUKoLkv9cB4DYLv5uD12PLuBqUQN4dJ8viiUgjmBXRgc8u2T8GaiQ8gifMf8ky5jQu6hnS3b2cVcyuAm",
  "key30": "39UeSM8WjGh41NFsiTRjRcPxoRSwqeVo63WMprUH8nzMuGXJNRT6AwSnQ38tetayYYkexmeEhVHNVAoAboqjWAQW",
  "key31": "4ChRX3xJB8KNhKdhma3GQ8WJ9MgJ7DkAYWXpHXXkwJZ5LiUUQYdZwZ4B1tiZUcBVpUXWocTaKRnhxEqGrhi2Nn1H",
  "key32": "JrkzopkFdY1qDJnKWe2rf7QTEwsHpzchwrzqxdYhP5D8G3n7sqbEAsKJaV1ANDPMCEnRefZPQzUFy7LD5byeZuC"
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
