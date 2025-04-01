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
    "5NJ8AHNjR1sTWWy4MaLrEAHKiX4tPojuK2sppjzpqxcQhM2vPNhkeDwsXkkkkHkzoSJM65QE2Fjaq9npNGfqQWMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZcePmFGT4D474Z4CyMcU7r5dytVxufoEvCtUPgXwj7TN9EGrMyYCWQeAAKViNCPXyuqAmwm6krYpekQmobyxDo",
  "key1": "4zEtk6TZNYPHJH8KziceCNEPhSVrvLDhoPAGw8ZRxq9ztQq6QfrXcz1oiENgAPgrwzVSb7p2NBbXc3pwYYnDnLmM",
  "key2": "3HznGdqAGAqifT94XKHFWyJcZeWb42ysHcrxQE3cZXPi5mC9dC4UgVWq9GTrZergEY2tzkP9CGF7qQvZ3rzvSPxV",
  "key3": "594tEN7vaEJZj7xoSwCunw5pkooiiwXEUoF6VTi3RCy2msHYWfmbrE1wM1P3NtHkQWLS7UhLy65TwkNtB7HPwqDe",
  "key4": "2ard85KCmA38di82MReSeT8KqrooSoQAn7YkWZeZaAawgV7P2imwtML73PRUA6oUcrz17Zrcba2R2fvAJqhibRCH",
  "key5": "3v1BNBWY83HhjzJJQSWTU9BnFfT8apYWwXZ9yzLuo7bXJjtjPzR6xNKdVVJm3XXdu933biER1SoswoNi3gZyMpjL",
  "key6": "5xw73zaVFM9ukG6G3BTDw46rj16oSDJHT8eBZTNRsQ1QiXjjxSi2c1kC4Ha4aUivmAg2CCtj4qsniwkBaNbBaaBs",
  "key7": "3QWUieWAapFNG4J7X9FY4rZbrqes5Lw9D5JHDMGAiQ9iTbij1SHJSgZyyvN6nG9ZJkUtHcZW21mL6Go1XiFGSSZX",
  "key8": "46FDrM3Tc24b6x4YwKa2YFkWpyb9zydT2tNA8J9Wroe85SL18a5Eg6pQZ3Txo7VCaZGNQMJ4hStXx6nydPwCynJ3",
  "key9": "KLB9mce3brAwdDy2iDUM2NSerFdVTcNKGnS1n4DuSEZFjWwNEV4jbJqxeP3wftDMC4L5Edj6PDatqYARZEDfsGf",
  "key10": "ZyhAY3SQxXYehQtxyB1fqM3zBEGgAkb3pD2UGsi1WHV4Ze4ZsZCFge7mHVA3p4i6VbCyhHaibULPruXGuqQ7T9K",
  "key11": "618vrS2DzmTvjMTpTeRJH7v4M4nTRr2oSxaDjcoEhzD8wLcjszSMGbsm1d5XBVKGdQtf7cdAwtxm32SWFuZNX95b",
  "key12": "5MbyYwF7Jc7FbhsgkouJvmaXJ3Rh2fBkFh5KeiycMvZGGmBcu4dnKteU668Bx6TQGRRGXvfp2rEk84QiyEA32Twb",
  "key13": "7jmrQ7TLw1SkA2AQcV2m7eSJGiFQDDdBcfKn3EWCatD6PHWiHmPigqSoZ4YgtJnZ5LsNF23uxSoZVhQU8ptp21G",
  "key14": "67AiLgLSKoF5wiYKGYv9vsgA455fbCm6FRLktbHQX9h14yiDuMayMqSbZiRWs6iR2Bx7Q1KjoXw8RZWMP4HyeNGz",
  "key15": "35Y2q3oKMy5spsVr2XXTbqH9YcM3Cwax8H6bgC7jsg5tHhFW8WZmn6v3LnEFhf75cz9eVVjTmfDraPLzKt4hQyBY",
  "key16": "56V3V3MqqvjqtySE5THZWKFbKZUWJTBdqzWs7fyeyjr46ybiViKwz57LY8FbKoFXQQ3RgjV13UPrqXBGeQrGGTms",
  "key17": "apa5kEJzRAPkY1cSHEKnyiEQjRLLzLt5QaxrJ6UA4mgsMTPY6HQsYVos55TBzc8FSVCDLw66ff5ZW28Hi8cBX5j",
  "key18": "32ouCKL3matTitdnGNZeV7mihKUhhn4KnLs2K7R7vM3WqD6dym88BQ6AhrGMdhpoRWtChsTJa5ABvQLEMyEqBeJP",
  "key19": "2G8EmLX5PK8AS2HPhCphpDQQwQZm3skbexzH9SM3GZzv7bPFggQPT4VDbAfP4v5TgPPb7usJLb2NxSUbNnQx377c",
  "key20": "758hKniePLFamENmJyfqzJ9jWNeBL8FzvSWNMDjRhPrWV9UZpzPMoefGWeBg9wqj4Y5azfwEaE15wDoadrDuksQ",
  "key21": "QXz2uMhBc7kApfBMaBfdEwmiaSe6NGEturxJLzLBHsUDtFoMcG54T3ZtQ4QxVAgBsg6Ftin2Q63HCWQQP8UWuUr",
  "key22": "3V2QFBkuhiLDLGGVgExdHCyxxqhjecN8NonApPFo9NZabyZtRRguHVGhqzURbQjVz8d5UaGAAcKCuHWR5hzr78kX",
  "key23": "5bUm9othgy7t1roH5UWvuBuLRtig2MwkdDom7LJXWZvX44HbwueE5nDNTungLNZmaXAayoEmmryV21RSHKmhV1nj",
  "key24": "2qEegzrgDyAm1oVcS2gjJE7KdEQed6vfEYm6XHB4SxvmHzZCU8H2WX55CxdcUDjyT7njfw7qCfdMyf9ahQghGTk7",
  "key25": "2CBPW1y6inczKUVFgHsj8mDCvGtkEBHNj81rNjdhJRkHq9WntCiDwTZTwJwrjL2xzRxVpgRj6J97nxgjWbayDNQy",
  "key26": "57AD13ossKr4k6owfrfk45jBhU3gtwmFwN7wzc3b61mgNR2DgaMzo3Vp6v8FjktjWvgJRJNCStPeWQJYKjMcCWH3",
  "key27": "55J32nVzFp3TkWLNNYaYw4bCbvbqnT3aJKm77vDZ8dvwZFXQye9S8R2uuYui7nTg9amwYeRtoTa7K9Kh2q4WJ7xm",
  "key28": "2e6paefnPq2HWiESjfSakU6geXepHC6tDE6ojJ5obJhgqV8voMFqqYgYZGUVVvTMkMz4XVk9bFdy9ufhFdRa8DYB",
  "key29": "3JzYzjVSo7n9yxgtR377Ben1qhQVHJ3gPcFCockYx1NVzRefUVUypuHzzLbnKCqC4VE2WgPY5jfhiKZzHFXLhGSu",
  "key30": "59pP6tzqFZPaQ36dEpYsFtTAW9FqjZ8DG55Gzt1A7YQaJ156Yr4Y8izcMw29VYRyBPWHQBtrLZyEUUDdFuGp2KhG",
  "key31": "2DxdYbKC3hE6Uo2RENe8aRe6Va4bK24WaJnjWZsN55mW1jrdSmto2F8mC5PDt3svEcHqXR8KrmChPMQnhFipqGM7"
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
