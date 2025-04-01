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
    "2UZnzwN9LCyfqKWyX9vDwcoJC8TV1uPH23yYjapTitJFC2RkbwtXty7QEYDcqPrQiaq8fGMKA1muVuEmKvuQqu6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EKp4oVtASc1hrjCuQXaXdKaPzdTBRHCAbXhkN8qTsKvtUX15EWCxPjXhzidgRhLfSjP3RvfNmgP41YqUTPExJQM",
  "key1": "46Zbgmu2x4c6WefwrQjm6zqcMiFwrQDC5zaCrZodB8uURAqPGR4V5a2Qi4Xbx1PoWkyvXHj8EhCbptrCRNiTkzTu",
  "key2": "1CGQodJ6Se65ZYjtBS674eX39xC5BB9KXHns2a46YUuv6BuF9AWmM5fTDBcmS6cqPr11tP9zjJPkM8joyxRZ7LQ",
  "key3": "5upAcGPoT8h4BrncgqJ11vR9uwVQFvgauPRmFjiNRT9js1EiPNE6nQ8bybhGxFVzK6nRYeNZpjjNY3ymXLNXwA22",
  "key4": "2QhCcGiPTAFEJFdjpRBwWkYoRxdawTBVs4twYMTPir5MccfyguJ6QYvQzM5aAxikq8YRUh5JgVnqSeRxZeZQyyxy",
  "key5": "3hBUafLBWKdBHT28rVtRENttmFgoLnrbCM6NiymMfJLUdDVSJ82X4YbKxtM26SRMbFiFbNuL8xNK87fwEqpByz1X",
  "key6": "2WUbhuEprWvSbjRRseVpXqhRsmQKLkFWDAQ4StpFjrzRALopXDArKT4QtmJ3gNvDR1pAUnPy1ySnwYgvHLbvFE3c",
  "key7": "5YxwSwv5VTTa5oEo6V4fkNRdzMSn7RDgEUyh5EFqaGzWejMT5RzGptmrauaCKn3c6yZKGMnJijXqV83XwJ2hWY4r",
  "key8": "xb3FVxWxLpVyxcUnsWHTdtpt8qyYEyoifHqu8UfV47CBdCE5vu36JSMEHcrwumQPj4UGCJ7F8a7BV7VhykCTRB4",
  "key9": "9CymvKBLU9dxWAiKtKhfKUHPEKqbbXhpNzcqnq7EV4R8TWCDBcsU4wQLKumPpctXw8LVszoaYixjAo69nztmaBh",
  "key10": "2yu9fwB7TRAkcjMrJKAuk5TJEg8GXWdxQeBR5DWjRGG5i8SAE8ehq4czvvprjCas7ikxojTSXst7y1YsZfJ4rWvv",
  "key11": "4XdW4ECApincABoSZkzWofXwfX6Xpmpgoe3Mdkixpnph2YYeL6QQ5shdmDsxFXSjv9YzdHXXz9EyzQg7u89tPToM",
  "key12": "55g4eMCqCCk2G21XbT86dBHXr9QZTpwvGFCox9q4x4Ay8DTJcGyPpwRVZJcLazeVidz36hFquhuXZyRfaozbEeXx",
  "key13": "4xQ9AZej4shpn5D1FW1A7JXcG5RLwphyPZ66rQWyYvkKg8j4dWHxvkkEAqg7n7CQ8s1pHwWyp4cauZHQuiywZrns",
  "key14": "2zr1F9D4NJPp51DxwuKHxUZ5MJy2FuSE1rrQp7oV6GZ5Rg9hEbgbfxuzZZb6uzR18GwVjFq3czSrZu4Bn219fHNj",
  "key15": "5Nu4KughxYoRrL2Vd5V4xhw6t3oPF9AJ5A1ZS6MeAaUyA8xdnnvYajN7nreKuutLo9pbdNHtvxT5QdMdBf6mG2du",
  "key16": "47ZJT13B6i6KFwbJRVYqZJRUgs6GC32MJLpSY2Cac71RBQSqikgx8RpAPhwUtatnsE5gCP8DW6DTP9YCWe4PmwuS",
  "key17": "62FyHm6cmpyGMKZtczfwbksHqtV26N86DYtDLLX3zTYYjJmTxMkEfHTg1hXMpy6fEZPVqbp28p3RfdFENWFbByNn",
  "key18": "46B9SYFjmdVATexULJqWioNw9Vo2mBuUMSP6ApQVcSBZzh48MqS17B9kwcPCw7GpsJoy3ugb8WLuR9f5tiCLwAPz",
  "key19": "4aJWNrNmXf5CzhoDUcBXQtnK4BBnybcfc91GjprmCvt2a3jZWtj39VKSqsfG5kgt6csTdBW1orQhpk4jRp9dwmfN",
  "key20": "ZcXBFJYx3ZsGuAUksUhVF8E5s1vUAGrzs7hBemnsYbZQok4XBY9TAJR58cC6GGszbkNLjXt3wQadCZZk11a9tAE",
  "key21": "bLbyGpB9xpY5AFwBXWBjixqxcxcfUueXqMZ32Ec3D3s2YjcbJckq1EVSrEjwWXNTBHkFMSC2qdYUqfdQPTnoarT",
  "key22": "2yh7oFNEg3AzaECUBZb1jGEEUbgCAKvZaJFeeiExvSDW1y3yxfFtTR965LgLu4YCZLxLprxkTHLkCaz47JSR4iyn",
  "key23": "57YPsuV9bpaAa9ahgDWWhDGaGQkNMu372e2mTiiicizDdZbRANezkxJ6yVXUq9Ai7sFakEAVGBMfWgZF658An4hA",
  "key24": "3pX7ZeBiJRASNam76peTUHZKHFm1NnVftWEYdnsYwJFZXRzp7RG8GqQUT2kkqFYvGJic5ohupUmgbgcXVRj5mEaF",
  "key25": "5LKEsYkzDrJD8zK6tiNsHSJ51ejtZMqoh6UXLRrxZkarXR5NUQmChi41F725uMM8kYYwpMHa8vuudJ6SpZvt6agV",
  "key26": "cWujfTdbkQ7rZWnV5ETcDqoJAn7TCBbZSxyPPAMA5V28takSKVNh4XzTWA1d2EqVKzWkyMERDggPg48oxFLsMgx",
  "key27": "5znFtQc9umvyYFikduUTUtqBMfnkxE5e9vfZLP7kEc4HZbjChsY1242dcq3FnKjqAHi39MUFmH4dmE4hqEYvtYRP",
  "key28": "34R71Q7fnFEtbPgcayeSuEx5UcMe7Gw96zjY3qUm2Dfh9pPKf2sFezCjHiCJKkDTvdRpZMFM32TSYzdN2ewYRfMB",
  "key29": "4oMYDxWzF8cfGth4JJY4cuVLqpXJc22EMu4G3Y4QtpPRmek2oDWZBSHTNBEQrHNzDgymxKWwG67jGHjvjESfUSA7"
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
