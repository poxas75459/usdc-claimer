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
    "26Dc6n67H6tVDd1yJqe3i7QYVEnGsGRZTD4mKrxj9za4apLtiyGyAQXfv33FHJQQxwGVx5GmWd75hm4bdLrTELVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qFAh5sBUtik4szDqJdGrxzuprywBJ3uTkZhnyLFqSahEj3Qyk6EoDjQKy1SW1PeBNL18yo12SkhSiPzjdLZeqJ",
  "key1": "PQ6u6dd3LjGWYnk3u7jEGqBMAUnBBvyfH96HeQjtdCscLG5nd3RFuArXvkRhG5uWDTSzH5w6BvmUxNLZfDqtpo8",
  "key2": "BHwBMz4FmM6xCkwYThUTgF2MUZJo7SqsESAkgghD2eYayL16vAKkFYjbvsFyGXR9uGBtz6crBRvn1zSdthLR9fn",
  "key3": "fAViiLKpQg6J4CJeBaXx9EXoHzuVPwtkhgz2LBbT6TDcmQFbiJmT4mdzRs4KLrxsKderyVJsRfs4JPKic8m6ASJ",
  "key4": "3R5JodPDF92a1w5eF6PdH7YLkLfheEUst6qQyHttC3BV3CRgzhmcM4BqEWcC2WfbhgahcH35Vvf6yjJ5mHXsTTZ5",
  "key5": "2hHX4bqB1aNdEqNL4U7DWvjMYg8RbBj3rbJmhwhkwJPrrA2biiRPJLhWYqNtMz5Dmpf6k2PoNhbfNjqZkVmpaXf8",
  "key6": "Y4STEMGwmrAEovrefD2f3A7ShedddR9ssqvgDhKrw1ZzuCVK8Jx4MHmBNbqgdyAMgtJB6p9U6z8MyAH5ZdUUSdW",
  "key7": "42QpCZPAARBL8nBxHrUBUkpjYH6G1iDwPpTwJ8T3AZzjPkjcFmsEUnbqQ5BabrLsgS6BTkbFNMkQ1CfYK8b8LRCq",
  "key8": "3qfXMWzYnGH32WDB5ESdwmnzaFHyLtXn3z4KwyjrfjpdsNMKkCy52wyWEFEjUNHJ114wZGEdJW3w5n5S47YLsFkh",
  "key9": "5xi6d2a8cfN8P43q9F1Zn65T2gZR2Myjh8c7vbAuDY1J9XsRCPBbVUv5daUpjTymNXirhEBqWGZ5ZfcHpnQ7D1j5",
  "key10": "5nYmYgU2PiTmP9NtmVT8b2FzUzdZf3QxXBjHqP56X3Q8UtuVkrcPoiJJfQgk4uNiSDxQs8UGfE9syZgayBqzJFq6",
  "key11": "3oBqPFBV6KA4tMLHq4c4yVt4aib9gdDwox2LvWLp6imc8t86TnPnYbNkSPT62pecPh4WRK7iNUo5quqfVe23LUUB",
  "key12": "5TwaEciKpWhR9V1KE2o2C4iDbx74mQrpYkq17FrS3qbVumAH8XsJE49yh32Fuj4tKTAiAR2d8EDqvKSN9HY6nwWR",
  "key13": "3fsuzM6DV4g2qdb1quzSJxrBrYmPEjVwXdeVbwru5J5RrczjxGjwfQk8NrJTEhNj2BuCwpxHi8MWhTPz2Z3NgzBi",
  "key14": "61516FpS7aUeqDL5xMdyAkUV7VFgecMHq44fJVYuxEryPUt7d2jifzpcHWPU5pVfBqWj2eGCUkiVrZmy7tw5vQLZ",
  "key15": "2kbDsDk8uMSWgDXd3yhh3j8MEBk2BmDCQJiR6W7g2LzbanG7DJi84GfNhfFiDLnT42t42sxsSquP7rStBnfzwQeW",
  "key16": "2AWyH5tt23Sfa9ZWqALz4UStd9mZYVxaiCbzmDmyqXhWgwNpCdJMVLUpMbWfCFoPSaSc9Cyf2FWPHHyBi9qkfxST",
  "key17": "3GQYYpWgMkMdsGQSyPdi9X6WbnYQ5STAeU9QLA7TREmiyxp97eqFQFYtKrU7asSRApLeALrDes6po4Y9T5Hn6JDm",
  "key18": "HR6qL8PiQcPz6jKcDU9Qi933ZWpWmv9HwzyUuEL57goy3g7d4at7e7F6PUKmmRTitRRwTdYhUn62CtBDeVkwYBd",
  "key19": "5HK39x5wxrBduix7MhBZ5ZdfAH4tJfYUkjSVEdGx8mD1pQfGhvGwaMpvWSDXThNghDg7zJhQvLToqSN7XjhVWjXa",
  "key20": "26RCcvRLCKMK1RpJHCmaT1qVTg3zo12C5XA6iBAzo3bA4WBQgxbQLKqHptB9Rih4DWRo5rzBSKnx84KowMRvUcWG",
  "key21": "yGgdeGg6Kuz7uzjVUHxAjzgyYaxtFY2HnqKNNzEr5FY4jHLrmFHoGCAQwPQ8eijGUP9CYeakrfnmcUDiYinZY8e",
  "key22": "s25VzTCyonPcKkbJUJhAYGfiGCjTko5rd5C7TgVpzoWgKiruCstLXw6wawnrYVLyujjERNTstASsfxdrfuPrWeq",
  "key23": "45Cf3RsSW56SLA5cV8E81Pqg2P7qJLqD74GFRtGsGHFhJU9FNtN4hpxtutX1WD656bpcbjq9vNuNP8BZRkvyeASz",
  "key24": "48Cn3uwAoE8d3eukiJJPNJjQ3K6hkiguHrj6xbw1wvc5fKm4N6etTVKpCoUwuiz9SWgjtQeVruNRE2HkFZM9hkTX",
  "key25": "2Vwbp7Vf8EjUJUH8gJjtE5zw6UypVWmdBSDcAaM7DtM97a1oMGs4btDAjwKkTZwm8weoQHcVzQyjFstGQSq2uUF",
  "key26": "qQPXx1RSV16SzkibjaoJ4jFNK4vaby1aDEEaALDBnhR9WAeQUrinTzgTCa3NneYwPiAiTZ5fDysk2vjSjrijGai"
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
