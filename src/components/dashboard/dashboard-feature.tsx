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
    "4JpitCGjnAzBgAJUzES6AGxm3bXS3z67wcfPrvJsMmSZAhnFNUbkjEKmR7R9ApKxLZMHqDVz84vYYvMdchjtrFz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKWBJ21NGJZ4Pojmrgp5LfL5JsK4FtPWjtstqpbhioAvFCoEaifyFFVBMqjFvmZ4R4f8rKnn1vAg3crz8uRv5Wt",
  "key1": "5U4iivcCAuamSZRYfQe3oYLcjNKm3gYyzeWcUSQUSyX7kvyYmC2c8yiffo775pzv8BdUejrAmtY7SMExdnmt24KW",
  "key2": "4RPc1WoibGYKPczTguhQmZDXpiHgVXA3vSkZQuL64wdQcWSc3AmxeDuJYtvnVZw3hh2sc2wj5ixJgAc7ZNn86cSD",
  "key3": "3TCmvwNvRhVKoH7KoT3Pzjsupc43anbbni7dmbScmWfLrPYH9RuY8PqTC5o99PVTxJs4zMU8wYg7Fhhar7PyxMwK",
  "key4": "48qZLvJDFXSu9sbKphVe4eD6tVWUDH1PEr65Adh9k44hAxoPQWFhJGSvTfU5yxE9956djLsSoqWqPshvBvymL5ar",
  "key5": "4WWFzXtCKUJc5kL5xnSqinAbFuvPJmrkH5kCAU6KwTV1zBNfPELWf9peivZXPYdBDUTH65QXiH8fzQcG5f4WxYAS",
  "key6": "4MmVSr2nsnmZBRuPw28t3wyQXbHrCc4WVfSDaufbuuweX5AMywb7rC51njdDxiao4Yz3BGVoiPMjKq4qeQte7NHY",
  "key7": "5GFqf9DGtorvr2x57Z6o7PSUu8jEsRsHLkeamoJaRJ3Z1QBPuBQvYTrHvqbfZZVpNG5QqPxenrVfyukRaVQXf3UH",
  "key8": "3QCM3GqyN8dpFnn2179y1vjSxTDWLAtSjRVkqGfxQ98m6FSBL7ovxomi85PATns9BtrhzrtkqJdSrXaRXmT8NLef",
  "key9": "5drjvE1dCnUp5m1QXJ4R9nAcpkVSb5ZwUfZ3KxjDBkSf4uuMwv6ytLZ9vjcHkjkZXkuUtba5PuXnawGtqyvbKQUc",
  "key10": "tQwR4GtWraZ7JNKwRQXfZfouQPYptKN5obRoTLwGBdVYphBEy3FxWKFZ3ts8qUTxefc8kFfroE1KDSTvm2kBfNC",
  "key11": "4hc4yNjvC6wVC74Ff8ckUGASXu2284KQnYnN3N36QQ8qfEBeongczXykNNS59pMoNxSVo21FhKab9AsnFKNvgTWS",
  "key12": "2vy922SYUFfVwjMoxP9i8apHUPUeSSKjKHbUBCjSVj8eQa7zGMuYxXiRBFXsjuXobndhkx5T1nRDgpMZfynVE6fv",
  "key13": "5Xi98AzymceawVSuT79G2MnJp5yPXyiCrA3KMeLovdR8YcjMMBJc6CbdCWQiTJBKk8AB8RK1zHrRZkpqFrVBj6v9",
  "key14": "3m4xmksMfJmHs5bkYrH8QeWQXpAraytCsmfhF8GpPiC3GEY2HyDBgNSV9rakSTruMFGcbY9gTRTxvFx43YmLMB5J",
  "key15": "4HUTVuQWg5KJWYjP2N4NYrvNLd4KRrxDUHn92gx5nZxaUemK6P5529tB2CaiFuxpm2tyThtV9gAk2fGFmgXHdMcF",
  "key16": "5417pg6yo8tAPAy7ZHiGkUYHmS9JZG4hmk1XZ6Dzc5LcjNPytPxwwNQrX36P7EPxr86GAtfFN7gJDaV1JyChmjGV",
  "key17": "4fPsakPV4kcnfFuLQKLSZtvpb3mM66fxvS6np6wjta2TEVEVVxAkfoM6KkWj6UtphGWD5P5vpykFwrFgnHQddSEv",
  "key18": "fXPpwmM1iNpJW8DFP2nAURUFrmHERqXnte1va7vNk67EVkPuhaXnvLU8UEdvHyr6cAhikaag7AaPPYN9anJdeFc",
  "key19": "3inAo6qBiJvgSz3r42ojZbzPppRHu66uJ1E23MLAaZ79tFdyPKHKJZuq3gVt28zcp7x97hVF6urEiUzECobGVaxM",
  "key20": "3QnmrH3eeXZwcJXYDV7nR9Z1dPRjjR4nhNoHQHBmgmMSsnSGk4vaRf24x47LDRxpn6kQckZw6JpvsFSBrLvopcqp",
  "key21": "4HTWJigf3819CBaTw8aB9sS1BtJP4Z5ZRNRt1xja7bP5Sty84tP4SUCb8rwzkcBf7kjazzjAydQPwK3vzmdQKX8P",
  "key22": "5nVoR4Y9Uvg6bzfewpKfzdhkXo2uD1iFZx3rjTdKB7KZznMJEKF6cTJANX2w28m71QwM48d4JY2uLrVdggfy6BBZ",
  "key23": "5sexrssJk6hJWRGxp3tAtfp3oiDCLbonqiTuSC7FPvTXaFuQ53tmgMkdAYN8KP9fL4ZNGPDEU9AZ8WP9VYZppuET",
  "key24": "dCYLYBhQK8LrfiNUs4BfbaCSNVb1xwuere2QYFwGYfx9oNfnSe9JPwuXwnN92KBDfh6M3zpJs5fjSjTfCBE6GXX",
  "key25": "5Wya63ET9mJ5y78aPDAQr8XzKs8BFJwJxG6FeWzY2d8xcQZL2eQgimdRERPSM689m8knJNQhQHWwscPeicxnp2RE",
  "key26": "4C6Zsg3FTRwDEwSJbwyp7nvbHzWiPARvhogoddZsZjB3pYw5hUiveHHgpvi1p14ZfVYKhXEeNNdhL1Xax2FEFeQi",
  "key27": "41Q2afSaHL4x6sMo5F66J6vTzWnvwpxo8hKX8ZLAonsUuFtN3u1GkCKfY91cERgRwy3BwzJkxcswh3EfbBiKdxg",
  "key28": "Ztguz72PzSS69bw29wuzWPJWqF7aQxQ56A7evrXtbTrdY1DfZbjNj53zznancGuKBTKJfVYgmqVr2oqqrL2yPUm",
  "key29": "2QAbmoTmsVww4bFDF5Qx8cwtNKjdM9s8aRmF5yY4Q4gKXnVGVQVxZQSb5Wg89ETDnuNPrdxQ4d9y9Ex7wHUiJoLo",
  "key30": "2gZedNjzUC99sxhNjwxa5PJMXFSn5tsEL2Z1fjBRnhrSchrmcJU9qoS1dM4xQUZ8qCEYRqb4qdcuj4RRzH1uopQK",
  "key31": "31XwPLTBqnEuKEdjyyFhvb5EV3wU2MVS6vyKki5En8DRgSKupAhdsW3hE3JT5P4x2TrivDw9yNPr8jT63myy83We",
  "key32": "5tJo8abMW3ENx43Hz9c19f7SxeyE9FtjsjKWi7zYrKWaSMjdUomhrTYqtTeEM7AbsvVtq3Vbqixzd9zAYwYSuMpu",
  "key33": "3Ek9fMd63fPEC71CD538g8BEr9xG7NApd8pY33yzJ3kpGvLNT9RjZMd648vX9myNySceJD7gwzp49NzGPZyFGVhF",
  "key34": "J9RbGSSfMkPNFGsrNjeJ6GgUrG31GSs5Usx6D6pm5LGD91Hn9JSafpYfs7N2oLDWk4fejBd7Ugpb3UgB3ZDjbJt",
  "key35": "4ivjEckz7FPWh7tNZBg7o1qUs2j1GrtSnQSoTibhyhP14jFbezMWKBpNUerDmNpvLFfeRFU8x86v15T9ZszCodiJ",
  "key36": "5ofo15oiC1RjTmNMhuy8XpEpmiKcrF3gYm7jwxXT6kBrLY8kMhh2TbtGQDmCZWAf8aX64SqTaopvsnkLZ8TJzAhW",
  "key37": "A6Py5mzHs3Yn6rczp81n6msS4cNBrCEBXSDCgGLp9voFYGrQbCs5kaS2STTTriDvJHbwj1KayuvMtF6iH3PPbh4",
  "key38": "3U7pGvCoao6WGxMNDQLPc72fDXunJMfMzVEyhshCN1fiSRsnFerHuvP3aZphHTVCEfxj3sjDBiEE9Uewh97vYDx6",
  "key39": "5TjJtjm6QrDe6WzWmdYn4Unox7AQWnjGdJaw6xzY6ttY7Kxg5iAvwV9rmx1F8riEDC6SPRu5wQ7qcJWs35Xxp1DZ",
  "key40": "63gdHc9qysLivsFUkCXr7k8ax7mye4s8CLJLLbfzEnxJnaa3qekh2HYLb3Jv5gkesNjKtt5bDmqnRNVH4iEigA1J",
  "key41": "23Lk88gCJy3R18PqJVaF7MKMtsr7drHqry5gi9SoGgAkio5jCZZfMk7TbrCfKigkYnKU6RWuds7CMnHyWBTMxGz3",
  "key42": "67TfRAHHEp4fQqftokFxoNjvAuPGGSyr67SHyePcrZJJKedk3iP7ViJ1ytcRgzP5MRVd2Qmi9m6fzmjqRrxsBh2d",
  "key43": "5NBCELxcTAePQBBPj6dNAvCr7JQoyviMaAzyXBwHRZpofxN85maR3sGrq13pmvhwYmZZwkY2zyoZp3Bfhbu1C2Uu",
  "key44": "5z2tqNqAtVZuHkHMAgwaPZq1nUdMgZZYbt7wm4sMqJWTVtvcsLP7jF6qYTxmoQ6hdDc2EPV5dEJxeXuuqrbPNrcu",
  "key45": "37zBFGM6jdyhrpcAyEVRnJRuWVrK4MdXqbAAQWCyPxH5wE8caNhiZnzub3fZQy3vzsdWbHCJmWo8c7YWQBXih8Lz"
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
