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
    "9paSe7QfadK4XB677GGxknm5S7eLtnoLKSseNjD2o5Yrdvf4rGtVfvxgtKDheXhsLR648fvifr26hs3bPzs3P3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjWWWYfgLjzHMBTVUAznwGey9DQ2eVaX756TLebSnUwWXgGDC3N8ph6hCsVMHNAVGiNXDHeqTtRRzz4sUugUnwx",
  "key1": "3u4qhhUGQ1vz9u4vtvxkUYx2WEYPKYj7u3ak3PrTk7mTgTdF896946okcw4h8imy1WCtSoshZMUFU4GiYEzx4wC5",
  "key2": "3UcjveaarQSWhU9sqbSuAYHsZt9DZqG1N7BrkEiGenQCC7W1prbqQMUquYbmL8Nbo2vMbXaC3deoAATcTQxAV6JQ",
  "key3": "42obNjenr8vKnBeoV3rvZd6256iT1Hte12n3JQXeZN6SRc767ihTJe5cQHW9CsowfQbrSPcN1s5eKEEuk5VjQ7VD",
  "key4": "57vDgm33kDRFswDEBwmwz2x133AgfaTGYGcjsjMTrFw6tAvumECXfXszv24NZV4XUjspSaw8DgjbpG34H1tkw7Fn",
  "key5": "4Ph3XyduLduXP7DuahPgDQxmSeUGsoQVFUAe3WF4QYJqvN4rCENrWnmPctf2GohRX1ecdGQJiTEyS4XRK1DxPCRg",
  "key6": "4RJioyzQXcXttEjvy8MfGiMzQNQhuLuwe11wn5Y7dpudFoiXjjwfNFEUWwxeKn6z1cbCRgJZAoWC17wGSrAeCeZo",
  "key7": "WqykZdR3gB2DrS9nHoLjB1M9BRRf6zmWCqUfWc8jU6NAydJt7dafVTP59bzh4w7uHtNJ8gaZxccVqTWpuLCfh19",
  "key8": "4WuyZxZMTXhsMrz6UCjzzMNbed2nTadA1Vn1vWtExFY5zka25gLLtLSQ3SrmMiQQpVXiaw1G47ATFrizG2tCeivg",
  "key9": "345vgNybKQYSDxcPwx7UDcp3PNsR59HGDLMzjmsaHs5c46o985dDnAciEA5LAgkku5jC7W9zDcAkt6b5BUYdSFzq",
  "key10": "4hqPRh3ng5eibM4kMxWzSkWgrCNpEnefvfafn4VyjTw4vCwZzHjtjqrFabBJCYdJHhJRWNaZ9FQbXsJujuvN3DRq",
  "key11": "3xa8qzyMotZZ4UyTwUh9koJiXXGjeC8GG77a7LmotmycmG568FrzzM3qdwB3LwSQzNx6e5xJvG7zWPdWuKV339Df",
  "key12": "2PAzWvxpDt9wp8Zn932i5LkK7WWUuvyRzuMJFbvk3Q1TqGTKqTF8Lcbe2WwfvhDzjGuGjbkZT4Fyn2vBUXcxSb6G",
  "key13": "4Ys3WD6tWoxEnAPCQMHcyHHCsTsfFxBQzQCUL2vP4GoWBdmjcfMTa6bWAahTCqvW3KRMf9LJQSLLwGj839QNgtNx",
  "key14": "5tcCzDFwG32ykZR6szrLhEfph4bC39NzJKYcyvs6JkwYuHGKRP57jmAWQH2i2YBvBsRZbJsmRPz8PJsqKknWr9HV",
  "key15": "3W6Ec9s2D9YAvjcmxTLWaekwvwmaExw4D5UucRaP4bMnzgcqAmfKrmJc4GfhXfWvZ1cfszfxxne2A2VJQVCzJCgQ",
  "key16": "3YpFYXpfGwfuLnka68VsTWhbdXaDNYPTKbV7nEc2UumD4hcnueSP85MZT1mghPmEQoc1QNV85TQ6nzgGbQun7dmh",
  "key17": "3tj1CxhYHEMpadgN9GUgFfWJEDk7Ek7GxrtQym8xkV5XGTs861JRwhKfRQnDRAYGo1ZNiTL4CCqfLmbqM3RMsVke",
  "key18": "4D3hP5shJyNxdrdbZUXawWSgBMmH8fagj6wBQFvR4mb7qh7CLpTj7AaNPwHMc24LP3vKTMU8bYuKj1dHD3ggJDac",
  "key19": "rAFiCN91Zc9Q9ZPoG8grHpTqMoe7m9bqejHDqSDjkRqcmN8NunjZcTKcrA5VKaApxJTtD6j2hbtqBxGYf6pWSYZ",
  "key20": "2dsxtbFy7TNZP8NsH5q9MzYm5TeDD1KKYEPt1umsizVDGoPfc2JuHAdtC65mCpM2sBQ7LT5auRaCw2d1xVuibNvb",
  "key21": "23VJN5hxWBJfxh6FcVckWfpVjJGJ62XcUvxFkJpKgwMxP4BBba6ErZUY4t8cBB5z9RyzxP5N7ThuyRAKcg673cNn",
  "key22": "4aJJLjEG39Kkh6RUpu6HYMr28FvfgzMCP37DYGtNe4Axwhx16kGdSVZZvFZST6aFCYTVDAEj5wZTsGajtvPXcVd3",
  "key23": "2vfVb7sD9r7HxwXYGPTKSMFseeu16WmLJkSYqAdK3YPjUmUgA5TxtBB5Cj1h8E61RgEBkiuH6FcU1dXZM2x9ybwP",
  "key24": "3fes2Q41N4gZo9Z9aY9PkPPmgQYPDBLkbfnK3Ys1gtjP3djQKiiUKf8Fsw4vqrtQ9ZoN4nTqx6z8yBHSjT36jUVe",
  "key25": "2KWXNJYerb58cuEce7UQJHx7ipw47zuVRLudP1iauiXMYZZrXbnoBVzg1F25sQ3tfBw3nDYtuNV3CudKWPTUL16E",
  "key26": "SZzxC8VH355U8Yh4sdqcu3kYU6JFeWjcvSfzcQUrudDFCyaAUTMcADzXe8qgsAwurGq16HEXkRzTrUQ3gjKj1n2"
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
