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
    "uePqz27AMDrLuNHApFtx4yDFQHkRB679RF3ZsER3q8gTjPfx3w3yp6mr2wgPmgTdXFSaa9xtBk8yL2cauuTVuV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "udkRKSURPakRCUkpaGBZrpstE7YZZx5Q2JW4VHEVt6iUpyaVorSPjKKs9PbCYwE4k99UDVUM7RaTcXubVHD2qQx",
  "key1": "2yVo2PmQjgMsEgRErRfKXu1pFF77Pkui7HaTBuuKTacPuXsK6upE72xrsCvGZpC1jjZCs13xvvdzuKqau8gXSbL8",
  "key2": "tCo4o5E6JPuEjhGN8y52qRQnQJSWX7Q2FMsKNwWNJG39hApZWFkfj2BVjuRa81UFAh1fYLGGfV8Q7Xss42cdH4U",
  "key3": "2uurvFsnzZDQ86yXvuCAMzL7hBLiL53JYgQgAZ8r7tEX4L6TYrfaSV9bmwqNzxzgvLeaA1jmRudKcA9VbtA1E8Ta",
  "key4": "5Lx8Ksgj95pQ5WEtQrnJP8dWLazvkysmLCgvRNeR2Z6cNCVsK1zUjVG2K51t6GxzDjUVbT3cVfgASCUDgYPoH51A",
  "key5": "2Hibog8bqs9m28TQeXTbougdZN9u24yxuab1SVeDFc4frSkH3gKzW1kefkBVQUMNpJuWGJy649unGp1Zg6hJ7rf",
  "key6": "2nHPoKSMa7NRt9C9Q4knKvVXAR775ikkuF5UxNwnAnkkdVbJcUkJWnCQTpFhDmaJYyNq834GhRdYBdSr4ksozecz",
  "key7": "4TVb3UXjkMTfYAmufiEYYh6qRX2F1V9gzQazjhwwk6Py8qybrJfszmcVG3G8G6cReQ8ntsPjoSZYNBU6EifAg3hQ",
  "key8": "4BMHoY1SQh8HZ4BtzfwemWzX5AYzkzqexUozCWUsvbKQN62v1oE5dti5bVr5vH5NV1g6W9QVN9EsE7xoh8ZaQGBS",
  "key9": "5j7EZaMpZqUVRPS38wbrBVgqQjJRwmfWbq7KzLBaNg3GjLVwruuPrF7nd52AuU9qJGQedzTrAu7gpyPcMUXupK9D",
  "key10": "5ZaxUjhaLGvmr7vPRfAQwAcHrZ3ETipAHnhqg3adyuRKMY8W5ruNuZ24WEbw8njhjqqzLY76nC4teYJzmmaBjngk",
  "key11": "27V3QJ7UF7xctzr9evx1ESuubSYesfUxo7zLNtJxkiGuBBLfFJ1DXYZRvMdRP2B6P6JhrrZyBXyWiXbsiCGC3hSy",
  "key12": "5F9eiRqgQ6kyQFeFsh96oeXi9TZSgy7UGoUdjjtd4VQAtzVKouWWoxktKJFQMgT4HoHru8gdypJ5HYkw5JYAdGCg",
  "key13": "5qDPqzHLdrfTLu9oYcG97BK5M9MRPG45qURUtKhNfppsBYiDbDoq9V4vnLNa5XXJzvgqC4JnHWEdZKQBQRmCc7cp",
  "key14": "29yw8TAPfVH4ZQXSjYR1MJNHM7zssGhDzqzrchmLu5rvxXaGJjAGHpcym3q14fxFdvHZFF68ncyrU7nGtHkH7itg",
  "key15": "65DiA4TtkSdwJNMY8TLd7vfq5aPU1cc4U645xqUc1W1SWBZTq984JzhnqE6JQ4RV8j7ikvZ2UjhzuPgJ5izZTEju",
  "key16": "3PHUVqdZPkDLaHYc5pn8MuvE8jzwt1FT4zFwKA1YcYrBXzomAB1SKC4XCsEMw7LnsTMH26U7mmpDAX8nudw4Naqa",
  "key17": "2jstEVm74ma4YKN3Y2snZEEEFPRD8cXyJa4dbjnJZceoJybZLCwZ4XcsTwG6gVHgXm81KjaWxGTywSLy9QFD9HsQ",
  "key18": "fUV3dujMoWDvPfbVsism1umRHdz3qkDdNB9LYw5WDyYtiyFt4rv5qb8tcweQQSjQdxi3n8TApTYYZAZaXsXp3m8",
  "key19": "392atfCfk7QR4EucMoRgsJ28uej6peXFUTAeFmpcnYEXW9eFXoBu3nzshXMe8m2WKhY4TvXn78bjqb3sRVHEYiEf",
  "key20": "4Sxs6SCjEGRYRpw8YL36Rroc9JA1fQzvGWv28ZMm7svbzCGPBTRifSZ7gD6HVT3WQhZttHw4MnSkosiUeKhz6tx5",
  "key21": "24pjVUyC7nj5GBFKkhKVAMbdrkWcZ1x9vumsLrBhBtbBGW2MRzUmTDcLUL96xMCao5oy31sWBU5MGQcEApa1776H",
  "key22": "2NwRLwVpaM5Ya3KchDD4Z8ZCd6mcBuiCdeDrzgBACUE3tb5UDiiDBuUVgDC1YC6nYKjrskXhazwV3KNhcyo1hZeJ",
  "key23": "3cgoN4GspcrsF4M2K97iHrYoaWvqftmjwK3rcS4B6K5mWsNmXZsKVMFHBb9xTGvoU4rCrNTLjv32ohq4H6ZH7j9o",
  "key24": "3eTQ4TeT4cEpeZ7aEHavGNPvzR9suqbrf9wQSHtRkj5B9ygt7h3T15Wm7eGzEoKmmwHTCZpbACdXbodr1xkSVGiF",
  "key25": "4w3iPcHYH6HPmVkwmwTTA2Sv1d8rLmgvCLoy4zLaCEPhrdJy9PMSmJyzDKtQJyoUuNvRoUv8miBvgM9UjEu2ARnM",
  "key26": "5Unzba5VB5XRWpY6URmqJ9qTzQUPT3H2FK2jNtcQ8w2zpi5w9yA4suxX4xCNB9XvzHi4enjj5neadr9wGCRFsMfN",
  "key27": "8QnJpfjwGhor8iigbhS79fjMFsXQVSqzRVF8GpS7DsxyxgZTXSviq3YAL2N9VzrapjPPGkJHSmG5fcKvhbrMig9",
  "key28": "3dGtEve6nWQp6dVdneKuhGMzPMWdMUdxeVFhNBt4srxNZ9PPprJyBNXMNVenaSwZ8SppqS7hzepVQHxp19TP2xrN"
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
