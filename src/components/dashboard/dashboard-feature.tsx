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
    "3HDsGFTm6sD3hrUbyR29Grkha46cBEbDbSSX9Fva5bfZkJDTajHgF93YmXjZQp1NUtJATmv4YvJz7ZAvtJemPThT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tcSnEcjvfN2o5p9VUY1creGZ4cas8puuqBUa6eu1R5S3wCSUBru3cjQnySmj1RqfBWynakshX285j4DW3WMDCH3",
  "key1": "4fkkuvEhPb6hBSwiFtgSKxX1KoncW9pBnG5nWWkvgbhcTZrjRqZaGcXiDfHVXtUkYAFWm9zX4iwRdvscHmDqYdDk",
  "key2": "n1aRNKVAW54Cx2d8NcrZePxRU34gPQqC9B2YsmcaTSnChHqf6cMpAv7WWo6SaxVdvm2mi1vYxSE91uoeZAqjJ4V",
  "key3": "4EPefJhCvJ2twWmqyMdtjNM5i1mGfoMJbU4goj31svQ2ckVv7fLTxzVdBqSkGu5WQZs7LyxGpC8224dKydrXFP1X",
  "key4": "5sj3AjSrK3JcZpqJEt8NPrqXS2dso4TQKMGSUxFvjkQHYAaSntEjPF23kLoaXucFL5xDUPzxZYnBej6rrbxz7PM4",
  "key5": "UP2rWU9qeUqKTGZXi76nLoEukR29aXgZqENdccueGAKnUrZfzdWoZAQMrxMiiQHTAsuoLCYREYk1mVjXvCk8Rjh",
  "key6": "4heaHLSxuLqYmVqTq2cx2pzkXwkJQgUq2JQ84ahUtAvBsYam3WgTf2TgpTX6CfyFDMw1z3fNoyrnKzBcDQwjEAMs",
  "key7": "yh5MZiwonMPSRfnoeBSWgHEk3NwtjhaktYCUAr1Y1KNJHzfAPAaNHJSi6kiJHQ1jjaDMHmNn8EWxTR2LqZV4WbB",
  "key8": "3Ua42Sd87SfAwTxJPrHW8n9MRdGz3jaW3yMNS5ShQh2Zwang8j13fA5sav3QoAouJ1kRypaopgamjtWagCLYBRi5",
  "key9": "3YkEbPSwge1A2e7EcAFxvtc1i48arJWXMSXmGDDGToW1TNR3AdAwXm3pMFvT65dNG9dPJK8SZAr9Piga3PerB3d8",
  "key10": "KZJEugV36EkAaZtrDyBQJHXUDZFnem2EZd9ZJbDMYudpsNaFFVFHqTFDPCbbYKhfconMgzknwh9NujFsnM43uDh",
  "key11": "52zivkhQ7rkvjMwqqpPYX7xRTgBarZrUqVWZ7YzLq4zbVRnAtAmah6Ukmes7SS1UjRc7xfYhhtbrWUjEFXxZFGBc",
  "key12": "3u9EdGRed5s99dd24ofnGuf9e2fwTTHHdXWZ12acmy3rSiU5tQ6voBm7JQH6Tks95WE9LvZ31QC2WUUtuAY84Jef",
  "key13": "3jRFM4a8QhfMcTze831Pca4hWRh3QPiV64JHre6baVFiD118LF2oSbak2i22qPJ2uzpJU81DwVFANX9z3Eixn2N8",
  "key14": "8e9yyWNJCAURpu7hh2UpMx6ivviFWVGcx1iVT5SYRnnXCm9trN5KXM8FL75nY9NV4wMiQCBjxTRLb9jX7uNw9hT",
  "key15": "4L159unXqej3e92bjeccnqZGYoRz2hiP7To7jPuGabc7pZ4d3iDaXLNvEybscc8HNV6kc9PpVhSYKUEEqbsKRY18",
  "key16": "GGrU8fDfeRED4i2mGAn4fiarHW5Zz6SYgnDq1LM1xdbb7W6gWLYPWCRSskVcykddmFmA3njCRjdV8Kq7r75QDBv",
  "key17": "5JcnZwqGGeckMYfQnH7mVztMS8VXpkM34cCPjUW5PCBQkTHsMUXH7zSBteUXa25rDAyw888UhML5kBbW8bwvNMWg",
  "key18": "2A5Z7ZgjRVaqqAtu92cJLi2ANQFm4npPFhLoAvh9V9aQgrGWRNCDg3FGkcnXBegr6rfnGznXZaigFrFUgwFGaNiY",
  "key19": "3mmJUjqQfGrP1Y7XhTHvCKkdYD6P9afKEyDvH2eYL1kusaj85MWQRmkEuyCgiXYVhG5Hfztk83g33CX9byqkUwPU",
  "key20": "HsYbxwRiKnKAMggvasHM9uDvQ2FmHzWdZAQjufDZh5FUuvveu3Rw5hvgSihBo49XATsGVHUeLbzYRSHZBFyN9r9",
  "key21": "jRtsongnbFM6mBYqumndudJsSqdjEa82PXtC1UZwYburkmnaUGJwXNVoF8kTacTwepm2gqT8cVno9hLzgbND7FJ",
  "key22": "4bkmgNqnXYN2UU5mQXoUUB9k7C1PiDpgFgYdZL5SFQVu7ZbebDkM8dcpcerEXyfacGFpzWYdGyuainCF9Snn5gJy",
  "key23": "4YS8GbVuCFhxLidgdPvdBA5X9CeWbq8wuv2qBL9nz6nPyDS66tTzkpBi2W4DgrJCrR5X5yiwuYmdWtBNJX3cj7t",
  "key24": "2qHuH8jfBDKpq7xYyfkMCsMReTFnE1XnXxtFCZoencyvhXZtXFLN8DyqZXWykDhv2NnPN5hrFHkU3tVw1s7DQKvY",
  "key25": "3Xtiisud8wupWx879Uyr1dqKBacQyfwEup2aQe4NgQ341i5eeA5FivhZbC3mKFHkAwaFbpFaTJzP2Wb7kDb7VReu",
  "key26": "3eKbLtSV135NPWJTUVVf57ubmjSrTqNnGUJ9qN9ai4Jazz7CDxejBYe3tmzJm8LDKHLkG1Z5t4o8mWHW64sAMV7a",
  "key27": "2jiUrki2PsVCaWnoyvqx9ReNixjr8tgAjzTfEQJcYSBHrzVA9AczviUfaQwwGAX9f6w4CAVz47uxgY5ojvy2F7bD",
  "key28": "4TfH6wVuJE8ztgceYYdcZ4iaatx5BV8esF6UzDbWz4gyZsUUYEgpMMngGL8Ej1ctuuysi8HwkxoctHQqYSZmSi2L",
  "key29": "5KHhqDHZB5Dm3zqhwqCSsSW4AP69xeQyJcBs6GA1e6uwPsrDYGC49KQPGmgZQev8hj6vPU4WpNSx4PwatWfT6zuJ",
  "key30": "2PqaQ1fsQ7933p7kWszZmGpeuMMCU7ppybLfUH6WxpXHeECBB3bNo3Yp3PvE5ZX3rtyXRwV9s9vTbjbBKHku4z9C",
  "key31": "ZQMJHvRQuEvT5csDZwFXCWjCxsaLdiQt5f2VERxWqbc8xNWRSQxWFySVhQJuYp7UfpqhhW18gQSgto1EqYMnzWH",
  "key32": "4X4Cc1VcCYCAR5FdLmhmj1VnSE8BoA5T8gmPpSWH4kWyrsczXQi2Udat18URUuzrj4aQBMHHt2PA8ceumfPC957A",
  "key33": "3ijLp8DsiGbhrfteaApHmjxJSLbfW6H1zTgXWLx7n7ajKnNa5rRuSeE22KfRS6tCq3twjS5Fnpnm666MUCwss64J",
  "key34": "2vguoBsWTWL2QcaVd775JJt4HmhiwDg7zHKn7Msisgkpd6HwGDyfUPT9wceUuarfceYQ3hEdDCD5oQCQzxttNiz6",
  "key35": "5xLarKTzAo4THTqrD8TPQZS7Q8cLeBhpxtW2tLSAhnM1FusqSkAJj8BU2mjZpN4E45DNnxdQY8nasu3JHF3ZbxA8",
  "key36": "4Jkp11NkxRTubg9zS3yoGMapLg6kcDG2x8TU9XcdiRpuqcim1NrUMWTaytHaTr9sAoQSdAN2Hyktqky7zKK4cN6d",
  "key37": "h1trmSmU6AezoP8j2fJHKqKxN3X9UydEUnEKD85nsBbDGES8PDn9ayysSkJRKcwVRSCdQigXmxvXKtupGJcGe7o",
  "key38": "i2G8izmrWm39RoxmJ7nQgE5sYqMSDpyxFRQmqG957aSkVgMQhi7qHR5FUcKzxrKfJNThsnwno74VSDauECP6LJi",
  "key39": "2rbvTipGJ5KzJHBiZPMTiAsJfjS4XqCfJ5WK5HGrrmHJkadjp5EU3T785Dz93BYZAYzoHxNYKQKHzFvaeuU9AQB7"
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
