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
    "4oA5ea6EReaE9s4C32Yz6sEYcjWVzK6w95YM7FbaqJr4R83gfikgNNE7k3Xoecb1n4xvScNh5GgTrfzRRXVQzvt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezNHn34ui7tCmU7EaN1QJW9ApCiukGLJ5jmSBmikgbwZuTBzoPoF4xTMiBtxZa6nd17wzoWBKFDZS3MyUvgW2KF",
  "key1": "YzGnerGWAyJDM1H37dy94aKvNWJsd3fzAvuwKGgRGBc36qdLAcYgxLdzX3nd56RfhFWJgFdaaQy2ieLpsigFiCA",
  "key2": "31hxXRUSdx1ezgm7nMp7YmVdx6VwfShBafueTA6QgY8To7fWasZMmhtuU81Y3r1xqkEQt9gXyPtnNdqLFUJ9zbjm",
  "key3": "RKTVZmZbQUGg2AVCH7dNz7p3Xswm17F6aAJ5qda2hj4Tkyt5TfQgVu4NskhkDUDmh64k3hoQJqeUR8Ec3wdaQhM",
  "key4": "5z9apqr1H1XJuW1ZiWqbQ2SDK5vEafRr79mofkjPS2RjGyniR3grjGBTpuRjToDN2t3xQjkXPHVnN4zwMmFiEPca",
  "key5": "5f6ya4XTYAq9z4Z9JmGcQjX9C6j7ppaZDgE5UAcGKM96tSE8C41prv8N3dE6EtZj3j4CCB4fVeqeKxivoeB8YUn6",
  "key6": "3LtQdjBnzM9inEJQsHpCyznHmfrhHpfcGtgbUxph4bNrHme1n8sYX7xpo97MuNdwkzMdfmgGT1PP7JXFTeMkdyDj",
  "key7": "5xZpXXqzSXmacUcw9Poj2Lj5GpHXSGHBPZFq2WJRxhs3wghi3qMsgGTbazfGZ85AnFaoeq4ssbMTvnZszZA5Z3p4",
  "key8": "4VP6StTzGT6TGAcuSjBhnmghHT3jWUaaVpXAQpNGL9JeUP5vsTDixNxMym1FAHjeKVVM4jza6dSobNDGdGQHpMkd",
  "key9": "35Peet3UjzCPVxovfpeBEg94DoD1YPe5hQyFdbMxdzBPyD67a2pzWzYwYPBoNaXZYfzHvGz5fqwBxmtpLdHhY5Yc",
  "key10": "5rmH3GimRnPSgnBNAsPZ5XXoqZTxAcDwzgtTnunJW9ECUYDMSeeNuufuUyeqM328P4CNNUJA9iY9yMaPcDEAk6gx",
  "key11": "38gwuq83vkHCNg15fFNALdtT5vnaMW5RAg6wU1rM2BUXndLTJUU2h17jXVCsv9ki8odDjvnPuEGeL6AKR3YcxmQ8",
  "key12": "2vhLYCabo5PRwx9fHy9NynmMsgW37eTQrNLK14CK6ChmmrQZzNuph3jLvx9gMKQhAQKMyvamyyXobdXeDqW3ky7r",
  "key13": "3D4Y56oMhqN4QJRsw1ifzjrW7LTQf7jKrFadMTZwmdFLwRcs9Bf723a7UyYW31Dbe6wsd3rZjPSiYCD5dMmHuZJc",
  "key14": "4MrfUFh48iyrrhjPWzZLVK7gBhsyES26u3N6SfjS89nQjfdKNR5XVQSW7oygsT8YKRJ2fEZQg9z5Pa5rYKLtG7w9",
  "key15": "4rjAdgEg5dT4S53nNW2JaDQvYGUSGKVhgMF5J5sD3mUzEx7WNtdEp79dFZNT86csgUsH1tddnco2HtWeuEdqpFQ1",
  "key16": "3EXuaf6f4fbVhbhgnW19GzqkFZtSqUnKEzbCz41ukvhJ1DGCzTMmwKXBHxA6snVgMucDjN1EuqSbvQ5v7DEKTxnp",
  "key17": "oYQCS57KC4NFP5xHCsGbqdKkXuS31atF5tVBUL2nmcHxz2tBxZChi7Pbna7CmKEiPF8vdteY2N1D2oAoq921E5m",
  "key18": "47YSZS4dhq3zo1s943higUhmchQN3GCbJjpGZxYF9CdWPGmJkCqA7Bh4EuMUYb3zhezZvKx4cXu9XsjF7Wa3DHCH",
  "key19": "UGfYB7JvRY6bFLxoNKreeNCGsJSbqrdc5E64zXpsEeQyDSkKPzj6op74NEo39jSh9QhfAgowVJuT2bg4Z9BcpjY",
  "key20": "43WR5in2RVBrufAV9w3XbNixMFTVbDdZ8tQGzbFSTDxssBH1yNyzAt8CanVYZcXJaZRWs5eZCKVRakkjTfpQhAXr",
  "key21": "3FSuYvZ8EAxqxRje7AkSHDPELYTRVvM5YQaNiM87sdwigERmWMiK1zEBQGQbiEZCcDDYeNwPUZFW4U5v9q3jH3A5",
  "key22": "2iAwZKGmQT2dpJfgw8zDD5WJoiFVN2znX4aF3QVyB5cF9crykUTZa1BHXjfpHUQJfJgtLK3MZqfEg1C26fdnNCeK",
  "key23": "5uYqaG1VK3acxXaAzsaZiPkZf3rzBPV1qyM2zAcxxxNK8oogsxLPoBfYz8j98K4cjdwUnreWp2JWbm2MgRiwhDoU",
  "key24": "9zpKvJPTPDwrEfuvaQvF3SeS9dtKYF9QbtthJmNoSMhTKuueggoGb7GZmrCAVySkRYqXYHqmwqgQxnxugMwNHgw",
  "key25": "629EBrEmpjz8e8Niwi3VYYvSuFwvWg1drBs8PJYcqsaosZs6wvoBneMghSjYQMiB888TVhwVwW2aXPpXCcTnC6RV",
  "key26": "4pUhr3yYVsGJ8jkSgSLy4kfDhfuETWTJeFp2mhcojuScyHMfK7uQ1odAN4kfxtezAvXWZE52wtxTEf5TjthgYaCK",
  "key27": "2o3XhtrRbzstXXZGFtdG8RHL82prN5pSWAXQS54jxJiy8bdqQGDzyAyhskxhSYSD3u8V2dyA6W4zCSKNNPiNQJRp",
  "key28": "3UDyC1dfRahGu4wTMBLcyZbWvpGvvMeJ3hN9nAMQGfVmUrTY1spHJRsaJKQzBcBWCZLctBGhWdfqJWPwWSypkLUt",
  "key29": "3VQtrK5tEs4HdLCA2gjb6CWGuNoH6EcvLYshdkSyVSrdsPjh1EM5tXCGG3EEPZXgQyBGDkPFbpfcsEGkfoicYsXb",
  "key30": "23fAdFdec9NsYh75R1PKV4ka5bH3FNB6amMYkURnNQFF9NMjjC87t3gHahBrthJQUoHR4wZdRDbrZxJjks2aZbTo",
  "key31": "4ZhjBrHmZQhZSYwZFpT1Ymydw4Ka6GqdFx2ycPpGmQh8Wd7wxnYYL5aog6ivHaJ3oHAPpcRtXEc699HaU94Kcygx",
  "key32": "67PNh2cS5qPVUKoj4zhFU3gnFF3KKp8jECKyDx7AKngnvEK4eDzLoQK7imZADdbxj49s6SMPdfMq8d4AWEvQAafQ"
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
