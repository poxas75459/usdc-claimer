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
    "4skQnGxcSaQkcuyChyEx9ejKFt5JZfuhbUps5GFotwjZm3ke6psuLqHuosxUkPMD4vLqAAA4ePTSRXVL6u34vuSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uY4yu7b332nr8JeoECfRmTeGNvd2KEKoRAUd9Nd1z5k261g5ao3DC4LFy9gfop2n3apa6q7M9qY5k2MMU8Z64gh",
  "key1": "37H1uuaVkSRDx1ABs3GaVzdZp1QurdYieNtnJkG9fq7r4avgkBeKkscsTVG1C1RAcGGMF1mnaPSu1aGpwnwfRvoe",
  "key2": "4Ar58fSirdUisUjssnbuhBE9VvmuGkaAGmVAk8k8pxCCN8R3g5WgM2UEeZ7ze4JnL5xMMSRgjuDT5oqZBQzZtAe8",
  "key3": "5sf1ZtwZNseWcvryrTmHdA2gumQ8bHnfuZV4YJqXJELTTyWJ9jbjTvPC9TjEbNMJ8sTyKeE839Z3SmjbqE96ynMt",
  "key4": "3UiAtmNYEArmUnBvm3DZ3uxoBqv4r1ReTHvG9n9EmvRApbNaBj8aBg2zT1MuFNNyejrCMigWVWqkWkdyYeGFEpi3",
  "key5": "5f9LZisTiGJ4fWfjXhWhPy8YS5JSyJYeyohsKHWraGfeeqEcVjVvq8EWa5aSJPTBZCHXTh7GhfHFWP5Uj2yZgaqX",
  "key6": "RsPJemPeiFUnWvQogwyetFJpPbgCGAbY5yexs4KQaKV8QQwVRuBgwvSAFVyZNWPFhzLYZQNMTFADEdRnsobm4P5",
  "key7": "3dnxkW3e69qNcsrYenSoPSK9bkpxPV2Q4bjyrFjqSMW26tX781szR2b7JaygTBsNXvGjhN6stkfgfsRwPiKfgp4F",
  "key8": "5fmXYnn3VXRyVR6aRX6ZPQuxw9BKVXKyFsAA8Y82qVwipNGiZypgASQ8XuvhWEwzv6bA5tkELt9F5HCUj5RNje7X",
  "key9": "ePz5KeHtcfBcCe2buzoNqy3ai9DEr8PTtYeK2tJZt2T5awPNQtGNjetpp8w9SdX45jWeHiDCA81JbKgi1g528gc",
  "key10": "36X6FTq3nCVVZGubLed8oVG8Xa8qShHjoCosaxTYjuURUhUwVM9PhKUJDUrRzZqsbjSCm59aKGjH6nrwaFURNFBV",
  "key11": "5uxB5LXBP4nVWJrFUb2FgiN7nKXDUPFHLSM1BBkdGcd2LioXqDkvVMeTwrTyHNZvffbcPjBqDg75YJo7u2FvXXLx",
  "key12": "3F4BjdifPJz6GxFgFckEHoj24MvaF9JSdks9Achx8VD8k9MW4gATS4xa1T1mcz7WxnwxX2S5vCtPJmQzJx8KD4FU",
  "key13": "5jnYQ3YyHNHWexde6HYtcJeamM2TfJEjx1Jdy6L5rFW7hfuTLpkzb1a2KUDxuTnNTmTJsM2xVfbjoSmJeJyLUyM",
  "key14": "2Yc5nU4z3XYRxMvRxYxAPwKuqKuFypNmHj39zHy5rJXr9TGY5jbXbvLDXGnj66rof6amUgUuMKZFfqAi3crFYXNy",
  "key15": "4G5kzUDBj1kHBYy7wnjhL1yozcdYofv7rhdcgHEKQbjSwkY2Z1U5drXBZp8d2D8qqQoLxzpr8G9U7sHsa73ZG85i",
  "key16": "3j1StseZjgBVbrYTFVC3K6hBwnckzL24YLqyz627gYbYQ6Q5youvN7Rr1e4w8nCPN6xG9HRbzUc24zGT5CezZJHq",
  "key17": "2WeaacBR7EPPrUV1arunNegzx1D3rxPXRqSBjp5dzgTJvWNeUwgsBiH3k3Ygm2iZAFhbFc3o4nKUmEfuhDUD6RTv",
  "key18": "vMaBMhpYtkEbXBr5isbwG7bMiCm3UwW8U181SFavS31Ln2P2BMmYtcBkwtfeVwMMPSjrx9YqP4dbzuA3NTN6c2r",
  "key19": "5NUfjNJGFJGZgMNseQDkgR8dDpNAdvvAzfhBuPU6YYMkvcWXdRUeFc3yiambrLw7FvgkAbYpRtWpdnYEZijUpqE",
  "key20": "61HXXJgUSX9BQxXcZhzbLkADcNpFuBdiF4w1QwvzF6Dcce44ambFJQpkTLBLPyZXHx18qxGQr2WULqHAigui7CEQ",
  "key21": "3pw4taJDDGyYCgSRofBVmN1EoygQEFYFN6pB1woHnTUkMhqP73KtUihQu535rAGSJXengvMHy6HaQLe3onUS2Qgh",
  "key22": "3QSrwpas3VXPLCna5JV9X7zgnyRM9qPRR5ayj73fCJLJKKrUGi6uHtb3XmETF82M5BuSaq4PB2fNcetpbXvMzush",
  "key23": "21Ttsza9KqCZZ6BJyFJHZF5p2qEGx4FRnESRVxLsNGE9xFLdGJAqQP9HnVsDFivk5WspUBPNqptPZna5bvgW1pLg",
  "key24": "4DwqZ46KuCwGAVwzLLj2BMrLtsjG6xF3VcggEkQaGpcapYxaWse9sF5ZGkhR9E3urspzswdiYUudPUNkLohgyQPS",
  "key25": "2cM4yqzWNeTCuXSf28znvP1BPQXsXfGbrDKaNxZFFkvqDY9iwCtigdRrusW24b6gRj4qLENNZKJ3J8qxqDSpanJR",
  "key26": "47yFgyFUMaARqnZ8B4QBW4jiTn7DHbV24aKgqwgiQfdiyZA4KKaf6pVzUQUpcccoo6PstQX7T6Uj8DL5wHvSYNbM",
  "key27": "2Y3NHVvXTv3jq6fvNpJgBadczwB8cY7UnA6pLAgGdy7Tjpj8nptZX7zMJLsDFC8UKFdszeYCaB2EpCrYtNAykjzj",
  "key28": "4Dikxh5FoWd8Y8wkbQjxYJFz2h6MwBC8ZpQBM7dB4SEkvVXk1icF6uEWxmUWUUus5D554vQ7ANMtdX9HuAYhN4rW",
  "key29": "5ZmCMFTMShnDEPBAfd9KEYLZU5SCZMP98SGvJYeppGFdXc1sS54Qu78c976scgP5TpC8DN7z1k1jyebc7xKwqrDB",
  "key30": "3SMLfhVT199CYXSZ415jAxZeKCTr7PAz4q7co3wUG5P1R2D6CZVEzHkHs8vGKC6eNPpTTWiFywREuJFy4LDApgFH",
  "key31": "3cRQCtJh5bMvyd95bdhtyS6SfF9UdM7Dhurie3icy9dcV3PbmiaT5fzMY1obj38C5g9psjHqM6pDix3HBYo4K72p",
  "key32": "ivRmDY1AhTBqvvT9ckiThtaMLfgQLaFhCZcf8UrScfYLsc1JLfUtydKNVDC82k8PaR6cdXgZiNH6nxKn29N8jUy",
  "key33": "3WLVppLw9o1gcUw7UdwQVzbzPrL1hf9eRTzfjd53geTgTyADfceVAiD6zVbwmCYFhwf24HsMREMiwi1hsVTpSGTz",
  "key34": "3Mwc8azFfZomQAGRmF7YqS4sS8APsLAzYmH2ns8tJ3Pqhpc1e866p5Y8Ffw7G5ZB2WWE5nXSYyeMEAjXUwRfdKC7",
  "key35": "3HVeqqoV1rf4uzSW8SJuTySSJiC1M22jrw5A96LggGEFwACCpTHbUnrWfavyJUnETYwH1JEYXdcM9XdWDwAZXtGr"
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
