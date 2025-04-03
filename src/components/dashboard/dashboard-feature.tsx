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
    "4EZgwrR8bA5TX6A4WAYpyv5Zi1Z27kvAmH3w9jfNgFm3v4zYRbD8evPwE7ZGoiSiPLUimTYTbXVbBLXnzjFavBxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Ra46PoGWTZzkMM81ayudHG2RRgDbBG7oEhcgVm8YNPkwUwuoTHuuEW2byAPZHGw72yJC4yR8LJjKT69UJcGMEr",
  "key1": "3YonYkMYTAePkG634dyr3qePfeswBYZKXmdzNhuSbxJu3JEGvegmYUiugQnQa65xZCWNFofp3mK7SPvCTi9Fc82F",
  "key2": "bzfzffMYj5NzbS1MoNgdMKTgstFaSwZ8nux4z9ACT2CSYGRkuURutNwDNiSt2wTvJkc6huSqsizUJSn1688hr2h",
  "key3": "275dwBYbCYfoaH84PuKEbq4AewLtssqf6ecJaNEoGPVW8pm8qHUAkQYFkyvau1ZCqjErF3eAWdXKZn7BR7dsMUXw",
  "key4": "2DV7ptQMieJb5YFkuKEDiQZCJ6qDfJvRHNwrAR3XeEckvpkriY6XdAjPXDKvW6QqZvDt5LdxTG8dzPGqnUA34Qc4",
  "key5": "452oPLCtLKwg93tYWU7wDEVZrfEx9mueyzWRHyvxFHD3Y9Wr7DKYNtET5hpNPA94PktgPwzHbRnutEGp7UaAtSfQ",
  "key6": "54wuHhdbyP6rDDn2pDixaUuz2KGqQMHBb3Bu3xSieZEfZq2GugZt1VN6mwHQFeToSjJ7Jp84jBhYEkPJw8JMgfzX",
  "key7": "3UG4PSujz63yfGkzZjBSbMR88EDvtc777PkN1vJsJ951fNF23htJYWS5sdUPR4VQEabe9opxKNK1vrc1RoS4YTvQ",
  "key8": "4K4m21aboXaW2iAzc5dqLSJ6AE9vy9xCXbxgDqjdoYb8DdKSZvReebQUieKFTG19YP9dYHHaE3bot4swVPQGBcVk",
  "key9": "2QpeBrKkNT1M37DPw43rBtCQiqJQ3o5VkDY1dYVJpdMsSaTDovH4qa2aBTrroFXGDMMiqDsFsKDi1tsVEgAu6GrD",
  "key10": "3givqLsi7un7mYCiYWdD3Z4xsZUXSzNMq31pU5TmNnyWwda9Pbk1a7nDBLVVwZehsid3S68oCxGDfWkeGbDWn3vA",
  "key11": "4zrWrFgvmKH3AhN6sHJiP4UZfWNz1eqXy6ZgDYK8dkttcQWuQ1JrGbgtnLQVjHtgqNitY6G7guc4EZkeShsTo71Q",
  "key12": "2y4TDKwrQeBqfJ2SKQjA71ULQuuBH5Mf8t7er6RFJ4Z2WyzrPSRiKWGqaWW8gBb3WxuB4twAANUF5kSzW8y57fgw",
  "key13": "4q2KaKvVMnh1UhxSbSutHM8iNzaQoNNShhkz7PUwwbi1EjnNB5gEpQjWbfYRd4EExd53We3BpnXtE7AyqizsczWC",
  "key14": "3PXfUbXtzoGBFTE6iZfvkTXQzXKpouHyydm1d7JEeqJ8YWdUFGYSvPjUjXtuKgx5VP8Y8Soxb6FH7cwZe8uhB5jV",
  "key15": "2wyXXPzLecKfY2VJH6CZk6faEVueB67DiNd41d5vnAUxSC7mdr56MX5ov7ZS9KLc8XbvZg7Cr4t93izFmwSrUGgR",
  "key16": "LDZ4JEvrKYvjwDpRDQxR32hDtFuB6oFrb2Ah4GFNWZU38xAhospoUeD8ToNJcbSXKCfv679eeTL7aFzvK1JSvbz",
  "key17": "3X7feBPmfgRvYsBFo6Mb255R3b8eBn26PUrLfpj3x1vifckheCtJdvAFMacn6BiHJDFJxtLwQf9DBEDFoSBUZCfq",
  "key18": "3e1wtfJuuiHe12wt2PouxDq6z4K8ELjoHkK7cV9wMMM7akRR62wXrE9YGCCx3F6TsoCMMtsvYRaYtJP8KdYn1dsY",
  "key19": "4EL7KFJKq99gBKN8nyFTPR5fbVcNA5S23yM6corQ6RJRstJX8STk24h8SwN7nBtiKsGLjZh1zUzhDXKnTuxNVj1X",
  "key20": "5PLRjFw9NFMHwHrLdUJqW96RgewisxcNmDkHCTBgycF12LNnB5sy1CDcBfuBcsX3mJiXgUDrzXHba9dW9nkJxnwZ",
  "key21": "56LuJyGU8QgJ68fcPDhNfMMKCWvrv6x9VzmWUwQu4Kwk4oQ6YRqHCRwNMyogjAuSU9uUX7wryEk6Hi93CmAuBJub",
  "key22": "2e6JaqdtP6Hxrvim2mh7WGuf5xsYe6j8BLEsUDZNUqkxzRQnFA8Cn5Rs8tNVyjvTjDZptwajqC7N87F1h8iVtxQc",
  "key23": "2H7UtquyuEau22izD18gtfdtv5jYbCWXqBUQHWq2xx9Gj27FgYf2zurAqEWTZCHKZ3VWEsWcKUdSLkjpEwLwt5Hi",
  "key24": "5LARLdEWVA5AaqDpbqfozF1kFaCNuiC17dbVjz7JYuMY2ZstkMP77XQ71QtBmju84GYT5UdBJJCqXzVpkzXS8VB4",
  "key25": "4pxhit7gXj53kV4fQ3FdUJ6GHbaTLGaM6m1Gs55wvAicEvULPSK5F8CitounuVLhy1dE8DPdoaDdkGBn5bvCddJn",
  "key26": "5yWDPvp9A54qN9BUHtX18i7NVCtXGVE3Y83wTsj9XAW9nxwEGnbFjtbFgU9hjfXZTY7PLpV1T91wiJdLnujBtjKW",
  "key27": "4V5Sj4McvQ8cRKPhN1nMnV988o3sbyfhM3xq4owfjdxVKjvJcT1wskuK8a15M5rUtE9uLBprEpv4zzuHZAQnuSwr",
  "key28": "d5Eo4kPgsNHCUSsdfpBbcLz6BWdai9aej7Vs8pg5sGnD2AB2MUEwBF6eo8PrGd3SvJLXpCj5zRd1k4k2NinHVvU",
  "key29": "26kHPeB2FbS7smKJVeTNpo4se1UkNtokeZTFBTq38cNEtLtNhxaKxBVR7kwPXwZYRii4nHZXAvFgJyy3LGyRAzr3",
  "key30": "3bw58c5pfik9RTKfp55FhvVMVSRqYJ2bPnVASPrtfv3QHWzYYLhZMck86ndexygqBro5ZpirRmrUXLZ7qoYAbGTm",
  "key31": "3SfDs9x6ZhUysXe4fTn1YF6jLeEVgbXtRJrRKTXCJsqnJb1VM9Cd9a2HkECXFK3v9XCJ1JHP7GFQpks3fWxib8Dv",
  "key32": "4YLgaGFP8ofYqrn57Q1Ho4yaEfYYW7uSwBDwswE1xKF5xtH63bs5CgAUafNewu8Nv4qeCgSKkGmKCg79ihqJwrWT",
  "key33": "61G4tYkJstz9Q1azyKmxaUeiwhUxGfevVZpesJ8d3fejNpe4h1SzDQdJPTEwrKwhvtYgctoPEn2LCUe75pr1ggbA",
  "key34": "26cWqHeA2y4cL1MCcraF6vPNRfkfoHEiMEM4bqW11KabiUgKSr8pYSdkaeTU8kcyHRGPUY2Xe9jhLJ6zokfq7keN"
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
