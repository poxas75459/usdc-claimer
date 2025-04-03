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
    "2aGeL18a8UiKMcBnQJXy4jXZTDnywNbWsy5woE15BaBWVu2Lr1sFvu2KeJU8hUpTYaGzsVQt6oHe2sYiSH4gQpys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7qP9eKbtdpgbgPo8j7qHicZL35g1NaG4QCHdLuxFhqbRMVziCqJ8V1UFiwxDfZJm6Vfc4cCEQxNL3uX9C5fFKZ",
  "key1": "5nz7pgsTuryxZN5ez45mKuDkCDRKaL6TzX42ZYT4HD8DvDgLpKBHUzVk8U9thE66tFAQKiwF8nfSRieyT4ZAu4hE",
  "key2": "3LD2oTXykv99yWmkPnMQAFxMk3DVYLu75jjL24snB346T2H1nVHuTv8D6N5GCN1JQKRNgpug3o4itWddnoiZBN1A",
  "key3": "2PcEXHA7h6xzFSmLKcuYQ1XWRfVadnrkkAzsSNRRNwEkiDYNd64X6aCAU5tGy8AekoL2iPUEFVKwD4wWHJ1jbFqF",
  "key4": "3oXLefv5Xd7W756qwDxC2in53ZRGzmBzMV4h8uVnNQ5wV6SE1Ud4TBZxoUoLu5fzuGvdsBBgUkNPabjhocTotwLN",
  "key5": "oUwC4sxZKsx4MaP41p7YRf4LHBfpGwZJuy8jpiNw6eHFkeJibhZrAF9TsaMco5HVYVBdxfpoRdYr1h2uyehrVHh",
  "key6": "5fbbwZdav2hAr1i6XVEPEfyKL1CmXoHxN1VCSqs1ncGMqc28U8Z1x2ee3Hpgaq98genmdcu2yam775pmk5Rs7EvP",
  "key7": "4deeeuTxfz9uvw37deuKmXPQH1fydZqig5AQRGQCqq3pe8cBZhrn9qhStktLLyMq5kvsFFj3XstvEVXk8UpUhiFN",
  "key8": "28tifgpvWab3dv5Tzy2Vsu1A3q1YyxUkQqLHsSXT8sj91nNPfYimLFkvmoAVM4JpEArQYu7Vu3jygKiwjnyo4Jeh",
  "key9": "2kmfvGiWtJbYRHyK7VxhBSSvLbjBqxQP4YYyvCav3MbPctDzJgyJAwYfNE7e3RqzHAKxqueA1NjsRzgsNMMHEJrW",
  "key10": "4Qex3a8aLVSnX91YuJprfHFYGe7XJLXcjS1tn3LHDBb2S691Uc3zquQu3n537oAuMdEnRzXsFEAX7PxbqLo8dg8a",
  "key11": "MqFknZfd4r9noKA8F8GsjYDs8b9AZvWzdMUdTxF6JfDpFyYyis9gaDgt3Qp3yfp6R6A2myMcJDMAPgSjN72pDCd",
  "key12": "4zPUyNSGESRLL66Zu9togMxdmsJ53dru8yHp2rRuRyH31PTNVzZSLV5DXbNQnWGh2dvWRT3zgYAhgLhJsSgcbiQK",
  "key13": "2iRj5a6MW8bmYQkNVjdp6ZUBDMYSxGJT7ejwXwa1iXWo5NTuy1FSPe1FL14kuwwjtKhajz6wZVaY1qdWU7W1Mh3",
  "key14": "L7t94FyT9MX1sSHKD8NRUWp3zUyMPcSc1eq95tQ8wVoEhh5j1SdEG1EUshhawErSgadMHqJH7ypJe4gDrnYuULr",
  "key15": "4HPVHstTqAwCd3MpvqcyCRDcud38ZgZC6bnYnChgu7gzVMRZbssAq4W38wuw7W7LCLbfBZvWCtHjCaqrpTALG8NA",
  "key16": "5HHB74LmwYMmgfphhsK37dZ68zHySkhQoGRfeSffnuouq9Lqx8tBCAQC5iSuYutXbrKAEmYcy6brCdRwiZZ4fqvu",
  "key17": "4CQADCCBnuUbZwf1bXpjMGCnGD8EGwdKs6wkxWsJxzpJnjkCCMW27VUrX9ggkcgwDmHGTPJ1uDNeYSyopsD5AdBx",
  "key18": "Hng77jNETYVzeo125wGK1AEpcsG3SxFiDe1HMFeT3Xt8khGe4svedDA9TeFiXLtQLH9eXFhMrP6bV2DmBDZFF5g",
  "key19": "3L5vX3tXvP7cjYj5yc5UPfJW1VxPmTHSHL313HT9YcMEkNsg4hvCiDzaZBnXPNZAfHWNuA3ad9KdGAmzkECnVezH",
  "key20": "2bYLPFHE97Qww6Ss5HuLpa6jFMWXfFRPf6jJaWpU1q2mMdrF9VpGjV4zzh68G5k9FNUezpXr29gcgX4JrXjhpLtW",
  "key21": "tKyZHDbo5U1Jv8Y1Hc9AFeQayByzTAQXvHXj65tb7ukq4nbXs7tkcKW4L3bXyRsWpnZk1CSUQ48vDC4d8tGweYc",
  "key22": "29HT6w8QZyonHAgx4hFS65R8xrmBqJDjw6M2DMtM8FTeTveYheRX7V1wcRDBACu93w4fuRt66BQ1N5EQUyqFrUef",
  "key23": "5Jn7zn5pnkKCx5zXBPDPt2oMARdCyuWsABrM3i8GcCW7iLG8MUDfD9KtJa5VP7AR6mugrf4Svp1ggRGMkMKtjPKa",
  "key24": "4svLFqymdNeQkwPVV4kzU4qeE8jcPn15nzDedxQ5DcDmKVkdfMgNFSpYcRJG5bEH46tjgp5QdDj4nw9Zc5UGfgzZ",
  "key25": "3tqrcKb9d4hLNGnYkiFGKneZWb3kdMxK18Fmecynzi6Q48tLhp2wtRyCWdpYzQBMopGVuvtV14DA1jVoXWrSGdKm",
  "key26": "sJEckEyTjCwx6UvBt4kKaFik9HwMZqXexLaZmo59wpRBbxDKzeo5A5KA3E9iiBMPZyAkGvRQ5tqTAPJgDSwaLm9",
  "key27": "59A3eXcGcZcyFZ11mViM3duqEFKymSTtQwMkWesmJrn6EsXshmq8xTeWzhZ6WiG7oKKcsuKN5nmy9pYccn7Xhs88",
  "key28": "4GC5u841gVa7Kt6zMTD4p4d5uYSWPeA1DiLg3ZvEPGKQRDRvKMropUjB9Foa7SXfExLG4TPSLMekRNQWwXVUDAJE",
  "key29": "5pWj2f8cC26qDv4z81cYJud7CNL8XwFppEctF3ibAgeW8jjzTDnhUqJw7HBXMkQddaGjLinKNVru2YCWXi3SQfvp",
  "key30": "4G13LVWuSSS4c486And5ni8ZoabcXsi97ZocysQmZm9LVvusK9RbcBv3a26UScwe1ZPANNppjQj5Uxkw3wBFbFrx",
  "key31": "3gAycPyrJnCDKbHRz1GzwYgFDFNj1zB6CTb6oVCebMVJkrGhCosQw54bvzvN4CKY4vDVTn29pjTMEnRhEPHudptF",
  "key32": "4ZpeyZdGhFFdQQ1rFwaMzjiQK2kaR8Qua8ff2kpmPgmQeNPNuvfFoQLWETZbCPXt8CMRYLccHe7ZNyXEeLMHTe57",
  "key33": "4xkZrYqxJf2cHf3UEpSQjEhKXgJHDHA7a2W1qpGFYbyZuRxKKAbW72S3Rc5w7AXhyHADnqWCoX3NMe7QH82gBeum",
  "key34": "37iyXHzMipSTDaVJw5qcQz4g46AS9R4ziUnNEvxF34V4CWDnrj9WuvrCVvY9UM2qrNAYfiBnqX86o5CSxM7jAEfD",
  "key35": "4B2oRfQefYHXhd2muKcgJUXif1JmiZJ1BzYfkxfCc3RThbfTcdrKi4m5pR2yiu2yGV8vNRwQdDi8DVq8AXP1UxC7",
  "key36": "39RChPoP4MUM5c37mADmYfJZZeGGYi8tL2yQrwoSW77GNqzfdbxBj5rxFxaaMSV26fk2WJYtJo2HFUBJKK4EjqRR",
  "key37": "2oLicBw4ew8qz3kErcDZLBBQDMCLqxrTkTu1HRd4EgEdZ9sSWVPCuvVVp21GzQiEAkF32vAny5pNTSKNTPw4Pcz8",
  "key38": "5Tgom3W2ToeJwiqMYQTxZy4UhePVriFXrPX6MMHpiu6J9TgHbavNamNWEqVV5ETh1k3PPrrLDjhLdzRAD6z8QxgY",
  "key39": "5HMHCyioNTRGKQUYU2z3WP5xpbYX6qnnEtjunhhf1eYosdEYyK3VWfNCf7gyXv34rYmmhDbNNyMrWMqCZc4TnWwh",
  "key40": "5ztyff1cWhYQKLZNh14ebZktarYrfB3YwLsiQ7LZy72MGueBnvM5rUz6dnb4LkCYaA6ekQJcNDL9jC7Pebd5Fi4s"
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
