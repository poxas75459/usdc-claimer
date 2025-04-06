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
    "64MTN6vUhTd2HxY12Uq3PrAzyViaCeiAb8Ejimhc3CEqdizjP5A7Q4GCe8ZT9ze5QnG1vBEVHtFLU7rYmAnSepN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xuvT8YBKmhHUhZet1m5ddREENs8Yu3LGoKeZm49E1mpp6eLoHNAuFbWMUUv8Ky7EMPPaZtwjCwnK7JzxBcr1gws",
  "key1": "8W83R9TkebbmpDRqfeiP6F96HWwbgd5DZ5A5ZtP3CgeLV5ysJhUczDRGKWzp4iZTcopps4UkKu8pEv83KTFWKt5",
  "key2": "RvgButFzWkaVLxek15FShfqnCxTbtUHgbGguk6ZJQJHLpoFeLxxzKrPHbWdikcpUQ8FsQnf1vcUYFUdguPwJxbW",
  "key3": "6GgjfYfKgT7usyzVC4V5wGrkYo5DKyyz2VEoSmo1dULDdPVZEV3t2aL1fCN2N4j78iakfUNAfhmx2aoAaqxT1Sf",
  "key4": "4b3o2HijUHoMAvt3SGJc7prKs5dsJgPqbeP7KjaPZipPrVMpq7qNEYVpqgfAbsuNkBrVGkG4ceheCvJ9VPVow5k7",
  "key5": "5zeLzqWtLYnU6cnq9uzX1x6M9CgmkcT7RPev75RSW8EjzWJs5QLvDnda1kAnQQmrQJX3AzD2ZuEupQVnpPSeeXhw",
  "key6": "5DuLhm8vc656z47ptzvFgKb4veue72uhdZqygC6PLhgFvDCeBR1uP8Gon62KTmPFVoSZRLyf7v1JgaDcAtqcXQfX",
  "key7": "f415myBny9gVBWkcE6u9QKfYADHMDNJc84gxiXBaAZbMMj9qVRccVb2zHHcUrSbSr5exk9ATaR2KTfGkpmhZW63",
  "key8": "3BLwmMCrH1hkK1uQY8HdNEp22vwBEKMbnkT3PShUEf1b4p299HLHYunnQgBsYfdr5LbW3iKH9nXbQMKsU2WdScPm",
  "key9": "5TpCqSAKKSSWZXBFyDa3g426PRPwcfrKijarnjvZULGvup1FBG6memk7MHKWvGn8LpsUezqZXX3QV9WVHcFuWhAX",
  "key10": "4XKYYYa1iNn2m1P5oRC8VeadRvmiyHo46LEXjiBx2FvLP1p52rgLn2atn8BhAeX7fBiHQUnf2ACkmvBtguzY6MKn",
  "key11": "3KVatF7vZHqYuRUyXoF3a6cJDhcAB8o1vCf6PyzSEBGQ65uNCyTBchvMxF1i1E6GzKXnSDmRPPuhtAM6xj3KwE9e",
  "key12": "jrSNPfEJh6bGgCFxLFPP34DNa7fxZEw2oNj1FZpfSAkrX3JWSJi8HGpZfLZmE2E4GQr9HnjzVkqR7XDRY445snv",
  "key13": "4edZBnkNA6wZFE3iojUThxAWTQjrNX8WAD7MqkmUmx6WfqDMMfU3PtzjuvtszzqzFAiAA9fPqFoj6ghihqhRBRzd",
  "key14": "3qn7LiiUKpcq2gyhM97uaUkxyHLxxcv5SsxJFRZb9fCFgTMzPH4uhEMdP6zuWXQwE1YxRkr1HHyZQih2XKx7hegW",
  "key15": "3pvVwReUYfVpNs36oZkBJCsbTpyDPos67FAnXzXo8YX8QAMwXXpHw7uFY9CYtSqXRpHyVyZhBWjJkpQkhBYX4gh2",
  "key16": "5swxYhgF9Va7c1YS9CoBe75xhBJ8nE9a6c9JGBLT7CeUPeya6imm4sQtNVUdUcKGaHh5eWXFSLyHuUeusE2GL5x6",
  "key17": "5w8hW9mwEeJWAEiaPK7b43XmWmTCa7B2uPp8UzWejjRNq6VDnRfJGiPfQ9ccjNUmXe9nctBcTeikb7A4ETwVKxmk",
  "key18": "3j7aFVMHLeM9mXypUPco48nvWUSPQ787ecYCPBVRH7ucCVQPFy1DBSSqL6VpLqQf8qUo8YmL8E2z1qxXZM267Nki",
  "key19": "4QcfxitqEBuCBqoarWRFkJn6Lo6nqfmgtphjRGe5zY3NRxUDAKP5hxWHECjv7vMcYd5RtsFzs953jTJ4TgyYoXmx",
  "key20": "jw57b95D1eKfYmd8p814yzBeXLiVY4oQuC9YUGtKDRaTNdapBN51x2QH6AWxCUVxa2werYg2DXmjjMcaNy8juVt",
  "key21": "38YRFfoaKCjwfvj89rVEbBzffSxvgUht2cqphvftYFfeH6GGnpTgXVeg8XPuUMr8RTaxdfXGvNXTM3gTKnZ8wCjR",
  "key22": "56ZeADJ5TFYMMMCZQdcHNkHEQyjg54Cue71JMERWFA3nvyaAErQngtLBYhprHhSFF2UnZPNk65G7bqvwDGdUQr4r",
  "key23": "5ZEfmPFunVZ3nEu7YxhjHVhkxHDKj6hmnUkxFUrMZyet8vJME8GRpjzjJcb1dGUL6airWk7Ym8qreUWLGDfp2dAw",
  "key24": "35GuA3G2kfuLbticJmHpyDGJsGkgfB89akV53AJDxCGPuBzoSWmR4aKXwgFdWTeNK9Fzj9ZzxEutsPodVQEt8fdE",
  "key25": "gSsBcCY9SKYA2y4m2xRiHEXcmZgmGYrGdUoZgzTsiJJCTb8p9hhPj1pTFuw6zDUyFED2uBnjicmCXLMwD6JhKVU",
  "key26": "3TfUvgYPRQumNRiCqXTZtV6mqQ5E8zuubWzCxjWtwabh3LFGcF6uUo4HnV9c8BZfpzS9F8w9F98hrZikFyAvFTFt",
  "key27": "2WPhv8yfQU86fZshk6tKYVAhBCfDm6ewa4Zd9cWQpgJrvm1aRZAXUkhKMGeCu2VVLVAdtWj7qx1SevvLrXHa5xo8",
  "key28": "5cuE3DEy6qPehsgNBdhZnXYdzSUjUCCPjpagmeFBJe7tn3CFbu71U36y7WWuMYeLMuFyuT6NQyMS8Q4BbNRSr6mY",
  "key29": "yH8avj1WbWvduzRSdfGBMnT26TPP7dnh479q6RwqrYgNffgviJ4NCZt9zpFmFXQWctuUDmUvfwssacDapRubjMu",
  "key30": "5Qa7Q97Zy3U3PGicmWFdxwuUa927RKGQKn3oohvSNbALMGfAwJN1rEN9oLhp9MWEpvTiUUDhEhhLzSo1f7ym3nxz",
  "key31": "3pr1nvdcWcdijpX2DrM6tgwVjtEqrTSEH72fKYrvyyXLRrCm56Fm4iYETqN88st2yurSNRQJuMbXSoKfRkhfpafA",
  "key32": "9hdmRPqBBTjxZEQFddKj4GA1NRJKaGsKVWS6KRFpHpGVwWDBAJoqyoe4LMsdrbgFBcocuorJPJqGQtU1qHVjpSp",
  "key33": "2nrDpr2SFeip8g6R8Ro8XL2665nMzbpQcKbW3gvHmb69LMisb8FgMDFr91SPu8WqdVjGSikb5RGnAYA1NznBtBHP"
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
