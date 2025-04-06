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
    "2K9LHxPWpRdXmoPn2XNJBPgkt6qSPn6wY4c3mERb9Pp8or8MvmRunTqE6whBrzuAKapDm7orYnaAspgnu9CBJ7kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vfs5dbJWRUwQv8H47EaJk627hcH2joipxVrq4zUzEntLrDx89o5Ad66vvdT7uG8as3TKNFNCURicG9gTtoyFdah",
  "key1": "5jGk82Yuu27PTvXgDDYCEFDqkqf39pQg4sFNehuR2utTYm4Ceba7GnUYQ52z6LmikPqpa1pBjCooLnEkCaBM9FP",
  "key2": "65CQR5jn1WmFxcGTYPSXiTuxPjumoVJ1rXpV1Sj7rtM5BfeUfbh5YWgDQPQQmj5kQHJSKKz8fraVB8VTm3hYan8J",
  "key3": "2zZNojMCp6n58zjBzbzmcagQdiqhuXGmkjJALFPJdW4apjDh3G6zcBBk8qZZozcUEaeVZggNLFyR5rjT8basdGMe",
  "key4": "3JT8CZUDivwczud2uQomC1ipCYuxzGp4psju7wEVfT7tLG3zysFnLNDidt7HSemAhzs1E2bo1qUJ83dy5ftmHR4F",
  "key5": "KeiZjLxg4KLsCanFPimHRHHjCkHZbvk4rx5RrWHmURZZMbYTQnTjNNgH4xnfFmx8Cco5aX4eBcBMNwcrPJ78hWL",
  "key6": "23RZTLDpKHBs2T1ybxKaEJ6RVHZPHGwZQPZybHKUw59LiNiPJfCYZM7N5zod57Ug3zLVeszASbJDhPc2tHtap1E2",
  "key7": "5ugSbUbMg5iwJGjnqQeVR9671g8kCd7UFvmZPLsgTKnsRd8ABX1oDwPqayb5SsF3zW6Eq7CuXUQRyd9mXndxwarr",
  "key8": "aSBX6dhCCiu8YnTHaFqAuFhx3Jpj7yMZyqPojXWRd62C697NqGbVVN1zVeupikXUSmQMVkZfz4Bmd5uVPes6Na9",
  "key9": "4uhhRj3KKioz7hLrQwF2nkoMU2Fisbh5VfmMiRVfPpL79LRHtJHnxrBgynv9PCbA3z8sEFV8hCkkCfKhfu2VRUz8",
  "key10": "4ZGCDMdUANSyTQvaJ7XTKmwuZ75hDrmqgCV1tBa8VfoB5u5bZzkvWmWgqC7ecoKi7BCzcbsKcCsJKMiaTeCvpWJA",
  "key11": "STPykEKomrcYYQaV9nZJUTKe9VR6EbboDcxdTa8oQz4tK8E8gJns98RgnyCSgWmvRqpsVWeVewcmuuedujg7KpJ",
  "key12": "61AYBWyaFR4MgSqaZYfmyNhKHXKwyDPMY3gjX7QJgSwyUde9M3MpA8NSRVzQgbPoHFKoQwnekSTcXDkHNLr55m4D",
  "key13": "PgYDpDFnK9bzkwojfPME5n7K4yCm4CEDhG8AQzP6WYuRnwEvgaFNkZowQrGb6u61s9eng9CsnzQaJYuGQpFQYJf",
  "key14": "P1ybkrzgLfU5rKN9ubx373GjoFJyGdg58nKwKRREPWmmi8teoGzC8PxbidwAQZscPTbKHxp7B7QCMNtK9f3LR5f",
  "key15": "4eBCQyVdYoQ6MPy7fM1XDko6krWHuqrF7SS8apf2kojj1hF9qEKmKJaFzGiNhFzDFrUgLK5eGVs1vwT6KnLCbR5v",
  "key16": "qTMXjDzGoeeXtqJwxcUg7zdvVwaLoEP8p6ez1nACYZby9rt1x2YxQD1MpPC5MNDbKx7iyTDpcvTYzEUGEz5uHAf",
  "key17": "39xNesiEv1jfBebLkVhUbEkchYYhHmxxHUSdv9NxsNqi21MTYF6mJD31QPhKhv1oTRZbVpdhQCKTWMiyb5X3NL3v",
  "key18": "5P9o5Gfp8uBzwDpTLsF365F2NUnGVW9e5KATjwnopFrN2orSbziy3BtLsXMbEyNcPx3oixofT5BmkUxbUy5T9Mk9",
  "key19": "4KWPjRRDv3umL28KcvaiXLgxviiN7pVeztuniMAKQgW6qdRovNMSTZ57xRwTt11AMyUi7nqgeVwxhtPLgTeLVUSF",
  "key20": "4tHn7XbC4QiAsWJ826Dg7BhKdbZk8VKEYSSx8DS44oaFfg6Vqs4AUW9mJr99XsnYsSk5qe66HWMPoSWfYTuKyifh",
  "key21": "5Lwcs7tSnxfVj6DnwyzpawuBHCLbibJzAK9MBmLXJsy5ZbGiDS9bW9KC5EfG7ABEXfCcrGmgf37TFLgRfhvEtTKg",
  "key22": "2reeYJZiiPvbffbJMeJNH654z1i9S15pAHw8Hqg8b4Y3AVQ7w8iHkurCjp9wSkoyW42Gto8TcdvFjiYftcVdmJLM",
  "key23": "2edYLz8LocwKL5ojaajPPtkhSjpXYaAwNtjp33kqLmfksUpRy5CKUFHikGa2YuhpCBCz8cYoX9yKDMjf71tTtCVa",
  "key24": "4YNdFtwTanXU6TYEmiWbkpeBoToLodVRZYNdFzEVKoe1e3cnNVFKgDftmgE7Kx1Agc7kjUD9qAPkRkv49ZyH57Yj",
  "key25": "5yFaxzZPefgqBBbnsZz4zCECXWzwu5qoMzMXU6HvwBQBXh9JbLRR6dEkW1d2KU8Pj8mqZXsiZur32xNYEeT25at",
  "key26": "3NhD4qk853xBiCCM68NCVYrntiKCPd389f2NgFZkd4b59G6o68rNnZhLAF7T93NJWbYRjB5dW3W8KP6yHVekZCH5",
  "key27": "BTZsk48p3rscPsQH9J5unMjHaZeEEWTq5wo7sjiNvWQVYkZtsB7ZjCSsHXMUdyXoonkV5LFhczcHt8Zowynrytb",
  "key28": "5ikiEN7NBWpFCbtMqHnaqGCbBgLnvgUtaKL9a4XqCYsKCaYm9fu2GYxa93LpnthwGUoq4h8AbRaY6z32NVp76pF4",
  "key29": "4UGR4sFdxfnvE32D9NzJVyyNSXEnyr6Us1qmpVMX3A6GNAz2QtduVTs3s7tVzCuwits9Vo4wbD6pQMjyiMCs2LnS",
  "key30": "1si5tEw5ftq6ckN6zoEXNvWSYC3bdn2c9AuQfsvN2rymfCc5JmoYKH1dLaXhJGzCJ4AXSoDtycb7tGaQb4wKThY",
  "key31": "3GQqVMgJXUsLawbHX35cGwnJtiNyAkbbHsJftbR59q5pYjNUBNpQHc5kPGkkHgxpzXC6kKJmrXBP32cUZ7w8Q8YP",
  "key32": "5St1ajy1Q8eNxy4HJXhGtVdfqbhs5oJgiQnG8tQKem5BVXQBxSi2UUgHRqZAGoaDNThQuZPbmoy1tCG2hCyxoWky",
  "key33": "3xcmu52CHRDDxY1gS91DMG3xF8tWdFsnMgNJ7zKtQ6UVw37Bq6eUxYkdQoJQ78zA5XMLevh1VAmZNbVLioAAXbH7",
  "key34": "4xQJm4UCSr2WVGjCEuqk7HLFhUTV9ovzyZzCBGbi1zrs4YzkLSvUw9RpCFUZDoFsx1u5M4d9U9F6u3TUyXKe4iG4",
  "key35": "2zYZep9mekDAvrGanhRCYXde555TG7Y2d4bRFypwEUejoEnPfNnNXuG8kJyAnixSGg8JJ3EcGYfNagDPQYNLr31e",
  "key36": "2APADbU9rVJqhbgCHGsJYR5JqMQ3UrbaS1FSiGTiA1VdebgyAmEhHEFnEJtbpUuK3gNiTTiY1nu8Rsd39nQVNsJ",
  "key37": "2mJwYt2tX5pgJWFxqna6kyNAqyVNaytrAaE2BKYqr2txSCgxAa73eTKN9cqQiZam4RWw6bhkSrYRaxtwYNHvvv5A",
  "key38": "37KvTNconvfXTVRDxtVPMXXDyKD9d22MwZ2u7hRv1WDnC6wFsNMXN3rPRFgy9eVKwqfzyhjSUGpzJkugqqDLjVvH",
  "key39": "2gmwSJV2JkwJ2P3tdPxUY98bazWEC4EQkNBRyhW2aA1Vri6nQfJLATou4v1qjoE6G5wwiBHX4mgxMj9cBEkagxbW",
  "key40": "3wdNZ8nLnbrMfUoWwXKGUkWYy22MDX6ysduKeSmdUZ46jbETojzXsXxSnKqgEB5CZTaEHeUfk7oVU6v8B34UJfb4",
  "key41": "59xfpBynWzhvodkaxCKRcQ4xreFqQyXUWciSXFWhzqjKtDZgRobGss2ijP2DZota7vou87BbimwbpyLL3rhemBcN",
  "key42": "65TKC9ZF6hQiWHkfubob2itWdJpLAe988dWsAGR2JCzEeUBPBHDqEtdBY3ubUcZ6FwnLohoRhwmMjPKPLwXk5L5W"
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
