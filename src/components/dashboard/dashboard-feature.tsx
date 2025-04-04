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
    "2auHinqx4nwLWjtmu7j2c1ksPLzDciC2eVSZjQbwdrgHW5bjCZqByGD9N1iYBAL4xuq7k5FpNWqkvVa5vPUr8unu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqbR6sLD7AwvLvHyQVxUSs7YxtgQJPyh7nX1KxGWXFarFZGszVz72AtYaJoSuZN9wsCn6zV7zTdhqiuREAjmWXQ",
  "key1": "2vJ1cSHcPgKRtBNqmg4pYdDJiqcJJie8qnXBzpgKk9DKsnen3E4qZJKnA4wAfE1gEjaqtzBYJmUc2subsLAGByq7",
  "key2": "3CmjKeRew8tKUHDtZBtgGA19MVgH4jTgDVrU133QdcZHgPQaBmqrJ7o5yFWNDsn1u7kAGHcmHZPqXugapjP3zijS",
  "key3": "SN29ivty6isQiia3Y8WdZJf5oDQJ9e7VxLKSrSh1MXyggAGtY5U1bfaqFy9q3aSrQg2kvxUN9LehrWvJujCCX2K",
  "key4": "2a6gYJxVisSiq5edMNXnRTEjkT11LwJpxHKXvSL5ErkLabNV3BZCZeN1wHoG9x1MUMqHDxTASdDR2XZpVQXQMBLD",
  "key5": "2zQkZM1qRYqFXDp5g9Z956y7BfgWDZxNPHPaTm9eA4RV95jiFJVVUtbYWQm1rLfbxqz9Vrhx5PoUj9JqwrpRnWKQ",
  "key6": "57rFTDENqjKRtZMehNPTKwHvfY5qfzPekzBFZDK2FWqdYta4weX1w24hvtkYZLiRR97JNobJPTjGdscb9bzJDuCf",
  "key7": "4svz5TArby65xgWNUq5RFvy6Z4qRJSPpYrQQeTcEiwzayRYcL43CfRskPDPZuKRkgN3XHxKeGnWstie1RQvo63tk",
  "key8": "643AKsY8T13KgC7S1qMLJLDzMRgJH7HPkK5TzigrfNG6nUbLhwoyg4pNqytaBuqqXqmXBdGCjmJDRwXuhTU3U2yo",
  "key9": "5pnsyhFagqwWM4oTvgQQDdGjmsGpQPPHPVnVBGWAoQo7kjhrK1inAxFZdQi9mjk7nrzTQwdXNtjmpNif9DcjD7PV",
  "key10": "3HTLGkpUKLMGiEhnB48ghcngSFcPRgQKHRb172xZkAGVZ9yBTPZxfF3cvT9Wed1A86KPJsKYyuvRyfCepMQHJA5P",
  "key11": "3w8GypJzxfuwVPpyNh5hKzowmmnFLGVA2gGe1cvFS4wcBfXw7TtpDyupWMEVgDgSfF3xWmjPw3kWah2fNQFiAB2m",
  "key12": "3XejPQyz1VYU3Ka6oxsXP2ddoMfciuBKu9TgtC1bGLWpWrpQZFyujDteuLv7EXyWZG1dLe76t2cGdocHAaED3DNQ",
  "key13": "42dV1nsTjeVzEttor4ZdzaafoRkjMn9YKq47TAUvrGQq7XdLM7XS3a7nDWU1oipszAGWmpYfQ7ewbAnQZykq1jc1",
  "key14": "4CZWRbvKBHJH5VfnPJd5akTUEnrrKAjA8iZ7jBjXaTr6hPZC6r4it27snj4nVJEnepJxgNBXG928fNtHtgZo9pHA",
  "key15": "2oUnXxENB7yJPFw85gBreqg7biaW5ntGsHG5zGVuzD6aJAQLvDYEGEUmYGcWRgvwv5ADmwpEbgKme9gk4oVSqHv8",
  "key16": "7AjuTEV7rFJAJUV4msFjwpHCM61ZmG8xGcwnthni5VgF7doKfjfwf8bkbtrYLKSYej3a8P3g9frZg9Cob5x9e9t",
  "key17": "4iRjFS1xM5ChbKUVCLbgHmD7iCrQ3A3TZJJd7e6f4Ee9YpgL4wGaP2BCkKVa8so5YW7kgYppowpcfkqJGVEfSpRH",
  "key18": "6suVwmzk15nvGigbHsP6Z6HEsDHZYxZRfgPNBwca83y5pjuDMnezE8bnqAMB6VFdzmkpWTFHEN2LKh7JYUPKL5Q",
  "key19": "9SvwbYnttAoMUNRdkpVVqW2jvkGKCaiXenNK3MKt6nCbvKFPrJt9ZUssE5xEh2QrND7bbtSKY4SXMgUF2yJzWRM",
  "key20": "DkGZpJzvVofq2rSJUe4uwxNmoqEPTpAQw8FjnmFabybvJyN6caCsFSpHG5czFDDJRYT1XmnwsTPA7qEuSABdtyW",
  "key21": "2rR2HtFKM4nc7gQ9Rhf62MCeipUS6miGaxazBKXP7MZFLcSykPKNMoLPnup2riRejaNe4hR8ETVxjGViGcmokUmZ",
  "key22": "2wBdu6t9LsjKSEdCp7fzDfSP8hMiRNB8PUAarSg8VXgUgpUgi1urFefoVk7YfDqrNd9gyu2UowDww89WquR5zJs4",
  "key23": "5YpaxZmZc7v2cWMiD7KCnRxv8byRyvbPMptsDBbX2JWz7B9fH7MtBCqPXb9S7vZmLYuhx5y4AuPPrLB484iRYDBu",
  "key24": "5tKvy4Kq56QhNLmaoNvF9oxtH4uVzJf4MHaCUcNJNUTzNG1JDVwkDBLZmtr6LwsA5yrjx5UoKLBAFVYsdyqtgrqK",
  "key25": "4Zu7jmGmdreR6Q2pQdiqKibfmziiwhTuYhQ2EPKN1pDxSBYBKX7kyC2eqgSupoYB4dhPDtkoWSyXkT8kkEaDHUeB",
  "key26": "2TuQMikSprjEE8XKhkWXA7NuoPDnLQBA39basCy42mQ25Mihj1X4upt1jw4CwPtfqwj7cy2SjSxApEH9Pu6VbjYH",
  "key27": "3T8g9GFn1LpXDXZci6s9ZSic5gEJWACBRgcpcjhNa3yvbHaDVeWdqxWxDNuEnjGuFqCoCAd5AM2yWyLuYysuRh5v",
  "key28": "31McntRHNg3trB6Lw287W2RhajWdwLYAiVppNinAFvhYeCvmmU4ameqExJmDsQyLcNuoYuQw2Vxwufkymy8cBuwq",
  "key29": "3DF4ribKBKMV8D5MUzKkREvUrTNCocvqX56gLQ3sZuhRLxn6h7cNMnf1oYFVc2JnVtPUKxtbKbLkWcuL2kuxmJCV",
  "key30": "48TRv7bfBjryxhE1ZzZ8w9tPjaG7LgiuSh3Kck7FvpB5Y1Mu2vWTd3udcaurZSjBeBJMuuuXJ1ym4snJnYkX3hHc",
  "key31": "WJ8ToPoAw35YqDWAKmPLtSQhgXK4uqxJXTvyWCUxthcVfpkQk9JHu764ADhYVJNsVSX5xnRBsND9L6koh2SotGy",
  "key32": "32LUsLu2w9z6aD1PEoSbWDQEvRrHqwXMVDyBjCv3J2kghJruu31jizo2c7kAzsxDTiETJsgQPEPvTzvDZWMWnjTB",
  "key33": "5hhKgBiAdLahX6VxG7dij3qQAWUuEgTHZicDQHny4HpL695LdKgrrAY6Cn1ujQoxwGXNUbkq565BFU6kRVtS19qH",
  "key34": "UfqbVMShFBfWx1B7xFekkfpxKaEyzpnjidMzkE4gETbzGzpHTCUTe8q5MBYvWreTFr8JgqTcHkntoAyv1esyste",
  "key35": "bky1j3G5yGCoRD257GfT7rXoAvmE2ezF7Q3b7spM6H4fpMaVbAG1xQnYYsZyogNThLkJ9snxWewUogpz8KaxCsS",
  "key36": "5id8nWmBRqbLzy8pso7yKdnyeaCFFS4HHLheTrBj6Cg9b7uRpwaLE3hcLhqFBg3oZjH91SsefmFaCyPu1ECxbtnz",
  "key37": "27uaEnqgEfCEbBNUcGrZD2T2v5pdsMvPtrgHpvUeEHSzYWJSivp91WqvH3ApvPFYndJeHWo4yx2YasvmPqBAPfg4",
  "key38": "2mFmtEMF4DZLjcHT7e7YHa3hayLgtA7AaSGkMQ67fwPqKphGbQEdUWx99Y2nAdX5WUdBMPPyEE8Yumtjz4oXLGDq",
  "key39": "2DL5s7v9z1KySDGa9bXaqxMQ4m7gBm5gq3PUmt3gW2XoYTaa6nSKmVTVNBCQgsiJT3FA3wocRYPj2EDG72j5xxGN",
  "key40": "4DChdqY42WkVHHACJyiNPw1LamiidKMrEHC877SUL56TxcT5L7Bvr6CTQ789U6zfqmBYKcaqJuwWDEm1UGJ2uoaw",
  "key41": "4FvbL9g9Ny7hWJDjCSuDt5vmuTezdXgt9x9PYyDwfSef9uP6UVatKwYsip2XqyqAVYQkxqXdUjhfLRVK24Q7LuDA",
  "key42": "3s58oCCNNeJADoBeyHvKLu335mN9pBsjgqXJN5hCSPZuz3mDbJ44duszmJS1uMpuXFDGNhHdherc7yfD2TkSBqB3",
  "key43": "UYjK5GhHQo1LyCpwsyqCCLn2Sj2GeMqRQG91UkCbfasY2ETR9nCtN9jXPvrsLLBy663ESA62jALHBFsoWPPBHJr",
  "key44": "3Waf9X4A4gUwcD77QgZTj4EnD9aoVscyz6PTMaoKMzDWDBTW3XhkP4CTAhDDHPtUZveHUYNmrKjCmvhsMKqWyw7b",
  "key45": "2ccCXBFUXwUnsRBKg1DTK22nziRCpt6BXQjehJ3o3shkBvouTomzuAm3dTkD2SoKDsNgHzbq2m1qhY7pr6rYCuhP"
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
