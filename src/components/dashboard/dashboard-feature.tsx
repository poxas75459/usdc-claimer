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
    "3sNQgaJiRS9UwKUdBUrNpeGta3V6qJv9nZeVwp6UNNJsYXxKR9BuebCUMLsxQQYdjV6UQ1Vs7ZreUGhfkGM5mNPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Krap6v1xqEuKEB5WGxSDGeCLgG5pLxNEFfc2ifWmXiYtMEmzXfLNWWdCfA5oT4UYpfeEtP6LqjCYjHjzXU3tvd",
  "key1": "4bDCggGRra1XV5GgV2vKQte49E55RLN6YJUFUrznGudgyvMoQq2NE1iayiEWniJ8yEqh94EaqFuu6vBWwktiqFUt",
  "key2": "3fT67jcdydE8haHDeUng89duKcFKXKbjN5otg1BeNf8ptNyMrAUP5ZzGD5xryMEp6JJZ7fy8ML1XEXuDw8Kp5Gzt",
  "key3": "333iY7882299QAmuqQW4ugfAivBRRoe5wQqQZZSe3siauog1aNch3i3nx8WpdEK8rszNCVmTtsuUjqQQJ2XGZ7ua",
  "key4": "4xpfDpuWSf9U4rY4PA9iHwk1q4b68RFjq9Yfv4hoZpZMrzpSjvK5bogaPMoBt9AYyFva463SiYfuvPPJW2rGJYCL",
  "key5": "eciR5U5tjSD2ACvgLvbFs8xD5HUPeVKw3BxNA9PzNi8kUteK9Psa1ecYoLFdeAVrLXKa1n5sQEXBsJi6JduDETB",
  "key6": "3tAw6upvVGAxjuenFbppHjpff8NC3LTN8bSa2264zPqaygX5Mh6CMFwWdfFjChybiUfWxf6Ujgd89f7rVzgGMMw8",
  "key7": "36tVUriyQSXfQuMeVhywPyQnt8YyCGqqX5cBEixrTTtTJ2HvuhkbFrwQxwkGUh5F2dWTXTnVDQ5WVC4ZaetUgkdT",
  "key8": "2toXCh2snhtJY3QBWDTkHmuBu82X4brK4woWZXpkkC7358ksUpqZdmgBw3eQbvfMgsSqWJeo5whMUKZnjWsJqnG8",
  "key9": "2i6im5jN362gwgU3znftCWwoQ7Lz6mEsYnxZx8ymiZUMPDpgkHUDmB5XwsEKgKjoSL4XRHgpxHYMeZcp5J6jCqBy",
  "key10": "5cDYgyK5NfJ1nE9QiZyngM3d3NoGnYnJfPqfCmRZUcUHjzjH8avYVySX3AH5WaGZwcUmu82gvUnRv3eyCZHn6fDu",
  "key11": "3FDnGkJdRcyMNRJr3k4cmhQhX5nfmUDFgCoFdcdJ1JVT2ZnXfi8YHSwAWteeqaHfALnXvdtkfzzUh1dK6D9tHE67",
  "key12": "3No71B2Cid6EdiqnExXMVJh5Zqj3zy9jrULWdstchpaTvaZ4YBBRx6iicdwbKqGkwwPyrSfKuaaeXye9cVvZGRhU",
  "key13": "45q9sfTdzeFeRXQAoAYfuJrr4hhyZk3Hx4ZoaoUr8dJoBSKCigz4a9PKkjPJsc3TbRgKeHWZwuN4UFbK12vtDvf4",
  "key14": "3fpC11hPbr175dXBXf6wmCUSdYCg3Fo9AHSZcdGRXb8A8nadVdSCLvJb84JM7RfLUrf9LzEey7nAYa2W1vrutosG",
  "key15": "5gKRu4S6iKrNZKMj4B9qb7wy8vz1nYXbMhivJ2QvmJAHZVQJNtxV9L8iwvXgGioLmWQtvyknhZ4fDcrEKCyH7vW2",
  "key16": "3ZEcJ9NLkYWycsob3r3mwUjg1GGhvHaAyn59ATzWJBVFDoHbEpt2C7uJjAXqvWq7vPGLrfKi9RdVLWPdYpcB8vn9",
  "key17": "46xMa3i3AZ9SapnrvxT22SXhwuKJ7PpfAVp778dRntcNnLYP8EF9cTrKxY5KMLrL8rXLH6uWdCA3G57RFnQxtEZ3",
  "key18": "4Yh6dKwodWG9ucp955P5Rz75UhDMXU3C9qXuvqkUhgdujYEGDncS8Fy1TrK2At6a4KhQzfYcpvCjRZTYqAQk8NNU",
  "key19": "qLmECtcXgeMCLjEXyBL75DX17UwocHSVvrhRzPBiCCULpQJPSVhSrpF4xHZJEYzd8ZgUKKgJCWeMJAncSeo5yeP",
  "key20": "5YriqvYxvGxR93aB44zUTTZvTM78mU84Cbf2JRZrjwsYZgCJKy2ZZR6Vev7BMPU872wjWUgVSFEpoJ5v6WPX8iYb",
  "key21": "g39r4uc3DvLqfo3APX5q2PR6UVLDwsEDzMfY9SNiqEuCwYoTindUMhDmvYJj9JqparxEMr1ZLUUDRKUVmR2yxEf",
  "key22": "5E7okGNSu4SnqfxL8CTiFEvhghTi5rUosknepRqig75a1AZo29vdj6xXDWjXjZX81zuk1pu9nz8QKC9t4uHR8g3k",
  "key23": "54AnKSDjcBdqLcLSWU1SqV85hfGpx1VjjLqotppYPJLEaF5aPCjJSTNVVYjYHYZoACdU4xX1einYfnEQL7MeG5Wy",
  "key24": "3tP7DZLFVKV5HYJTdRuA83n3ifzqvg6gH5jNcR9sUpynvGBtmCvCNYfhZwLecUai2jkiZ6kMccaZjuecSf5AXoP"
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
