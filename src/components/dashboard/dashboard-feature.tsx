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
    "2am4fdyvF4xoThKVrfqYLhbUMWoiknuALFQKbVzNvVKHXkR6Vq8c1u7uXqVSjKme6bCqM968T2pBZGTYCEgCw9uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqPLvFQjQA5UL1UrrsGT98tEyiQ9cNRznKwCGCHyUPH8dMuXCbBdzdthVawrhVvuTFGhdpqQJQWZYjWYdJoS2nT",
  "key1": "3Q6pCe1hA14NJrBpAthoDAu5U8REfdBrRU9FSZQgmfgGpEzTvG9h6vPdaLGRF8GwEUaMcbmEtY5HDTZxs86yo7Pw",
  "key2": "hkEBkX6F4RrT1oArjVKmAiCG6PTUC64r2skoMmUwFis5nYJPw4L19jeD6wwxoS3aq9ZPv2uNS7ihn96R5iLzswz",
  "key3": "2HVjFSTapH7kHF3PuqYSudA3Y5KE7iDyHtB1xcZ943JVGz7exTW2r5wBHr9HGmETcFpsbgmjeXv59TkimzmVCjzF",
  "key4": "434awxUshp1CBF1yx5nHUopKWpLZ8TfZqb4D4wUjouU9yMCZmEdVSWBD7ADzbCeEdDk1piZ1SgiE1y4xHj2Rjj5w",
  "key5": "5gGTJwc2kZRsoNCbZgS1qGg1n1XzQVfbvY9Qv5Gi9vJg2EmppJgz2MU9PAgCHQZiBZnDTPExhY9waKptNwTK6RVM",
  "key6": "63K4vti9egwP4xaf8WZb9kMdXhviYbQ7qw8RLr5tUoSV5asXMHoTPAFzgY2T9xrKGfR4ERBHJDyjShsEenP6WQzx",
  "key7": "3ekdHW3vu4LsRknzKtqYvYc8z7b98xzT2VVq8AcdV6s4GXvav1ngeo4gydMaLXoYR161a9TXeGBrNtG3HDovSP1a",
  "key8": "3nLDYEqsC6LBjFUY9UkMAbEBASnMZavjc13QyrDWcTwEryGtaa3d7xkT3WLxipE3TmP13j5gTpjtNGTe7uwmvedX",
  "key9": "4161prSN77iVba4ujDyrxy6mmPQnsPsS5kvov83uzQ9LySFEScaijxDc2z3hossyB8q8fAjTbKcfkXbv8DQLKahu",
  "key10": "svKtjvtz81sYW6NXTsSJnGMUrF2AVaeKLCzZbVbNuhenUPRvJBoQ2cFgt9yznPBqDo5XAoYvXmpffyLyQB3btRN",
  "key11": "4pHHjR7rBqejCUCDaMH5vosB9fXkctffw7XKcwFiEr3ZG3Fxu9CevJ5iiiD9fcjkR7FF6Vyed7GCbPi8bN6hD7Pq",
  "key12": "5vW6JWztfue7ZcueowqtAQrPwo61KV6rGM5W1GwBtxzGfBVzrQ3kptWpxt3sNvA1XhWHEUeXHkAJZxT5BK9kwj6a",
  "key13": "5KNh3RteiHG21cksjGDHyhNEbHcWZPtJ7GGMmeJeHDJosHjq8NEpTTrCwVLNM7H5QxrPskgrPecc8ckg7TxJGgMZ",
  "key14": "43HQEDsZAgyHMdhhnxm3onjQfBKstmyYSQNCF9iHznoSn5JBBMAnq3C9ZrQ3ybj3CeC6hx2YD1LoRHekWUJ4YMBq",
  "key15": "V6LeRa5sspgJ8X7JRx2KTnRSNoVqcCb9xXyc1b6XkPzoG1mPfzN4J96QraVUziqBdBxGqh1Zt18bnfF6TqWhrt1",
  "key16": "5ni9GP4pfUcrWfikNmZwA5GjPQChm5wKUSzWYkdZt33NZ1JZkDMzf7NeXsPZdTj88BcZDv9Xdw3aVhY9Nx6mVQga",
  "key17": "56kwDoBJZTDNQo1LxUCJYZz5Pwf88JHiEA6uKeaa8j1nv85UB5hgETewdm4hWQFw9ytrL7NeknucDJvEmmYoLQed",
  "key18": "3pLW5c3FdGrYeM3o6YDNN1PjDGjNArj3j1HdozVBSU1hbGPa5nd53MvxFVdgBK4xTxFB7p2sE2hzJoHY1ZkJZxFs",
  "key19": "5Uw1QsRRJGXiDYYdtuvjKVXDoErjYH9rcZVMvRPvmmoNvZenxekGmi2D5iJwKjafHQddmtQRZ4Q6v7Ad4aT2MBK2",
  "key20": "5XKAnR5K7PhfNFLnzC9R4QVXw4tRFBk8D1fgTKVQGjaYSbwUgjQhefrzJrimyc46yu6T5bbbjsaHRBY4xKktf1og",
  "key21": "3YxqUkj8bTR6VWcKtauZQXLMhn2XNLmqCGoAhDMAp1Hb6wPamJaz6omhFyZU9bvXURstDH4ZtcQQ9HAiUeXpua2a",
  "key22": "YMserZtsgA4b9RmjgxWGdE1pcew8aVug25kjTihdjptThcmnxMys6iSxYnVWQdH6hhKpi6pSyngjLqFM5exyrjK",
  "key23": "4sZr4qmURDkHat8arCJBHfu1ZKNzRYwGAyLcSG1BwzayvWkrMFxWbDon3rC1phRorYY7fsJJYJSxozpx4YQ1pfM",
  "key24": "4LbAQe7t8Bn6mNSbsN6YYxAi3VqorR7mwYRDa36DxwsNFi8ddw7wt4Qvdj9QqkNLAHovWg8bPJiyQKXpxJBUPExJ",
  "key25": "47rPnRaLLUbE7THyWPh2NyUqzPKXqrzDr1LZ1mosaFbw2N3WHY9ZuNmcu5zrcueZobGNermUYzmU4CNv6a3ExHaW",
  "key26": "AZKWmJN7RaSJxFdvKcWa2Tr8pyLRR9FmaitCxKGifkAxXFT2UVAmvDUR9hSDvL5x1RxMRkMBgYumjjv6QAhA6NV",
  "key27": "3cd4mDUw19EYVmz9MiB9SrBPG4a3wVdMAAqGAcJ4Pb83CKYVFnZW2yk1VyoTcAhSbBBRvvmVVWpoRpBshnvcgH7z",
  "key28": "2dLUAY7ZhVEqvt3xuWzLjyc2VcD19ST1KEKnDn24cP3qz6TXiG66BTcwvhU272r7tkRhY4hLmMTKPaN367tVZY86",
  "key29": "5oUZ9wp6nnqSaPb8cAn2zWVU2Lv1LjdFA12fr8ntKi7xU1pfYkT3XSww4zULen2D6p7stqnNi9sHbjTYNJYtEMHX",
  "key30": "5D6XwZk6TkkDdmc6siu5Z9QmFFpmYcGdnDWPWNAz9Lx6rvJ5rf3n77rgu21ko2J4UjHHY2PgxuMtnhAqfcbQTtMc",
  "key31": "3DVb8yaGpMTiRVCJ7v8Yva9Dm7N5NCcnpQkAWfe2hEcMSGpCxtHyH1MDo5D4yDYBkp8Rh6CyaXUY6dsLTGh1wTsY",
  "key32": "4mqLMtzqppp4orrQgF9N4ExdviWA3uA5t5YdeJTGNGqyYQPNg7D5A2TG2JKcCq741P7THF2a28nudTRc7DStWNXz",
  "key33": "248gRPQXtE28KjRek5MiCzVsEdsUobqh3iaJ7o1aHgVnSujZcNE6CwQBcJcdzBEK1AVvoUTfJyDBU7MbzuP7nhNw",
  "key34": "4Af6AZrpU16Gm7QE6d8fsY8Xw9AbLioXLFe2SC6xDRzQZbpeLCACAEHfc4un3umU1hbzp4eQagN2KGfQHwNn58Gq",
  "key35": "5JjQ9ix7bEnpGbpUaakoXAyFSVXvUC8mAACbQ145HQ3XWA2dKGYoSprGYy1UDbJaHjJ2mdoxe1NyMvEYTBdKXSwH",
  "key36": "5tNHZU3CCtg5CxVSNL2a8LwiawPrUqBPd2k38NpoHuhLnZo9ebGEmxBQQ9bG5FkTJyMSoT5oAcPzMuKWYX8P9Amp",
  "key37": "gHXxEinLqMcp9r6JPNK1Z5nKsWoQ5z7bsBWajp7hD1qSrubgBV7aqeUSvWusqtnQtWPE8fD5eZSReofDtm3pvu6",
  "key38": "1rMMKeFQRDKaZKFP1hvXUHxyyR6wXe4oHioxE15HjoRT2HT4rktuXSdqmynxoD5mfLv9Cue2jmRaYAe2mcw1A1m"
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
