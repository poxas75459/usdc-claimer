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
    "2m9Xv6NRerjhzAZMf2oTAiWWVg2ytuCCMLEiGnVZrcTwKV1Bbd8PLhKP4Er9i5gGwJhHAvPz8yYrfm12bFVN5SxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CqCMcNaTG58SjN7759e3f1GkiaZ3D4ZVXFZdaXStnnNEPuptqQqzdD7jRC2wA8FBUPu5ju5EYjFofpW2T41Hmqj",
  "key1": "35pPZFpnd1vKebCdo4HMBP47bwe5s7KzCAyKV2H7PFnVqaeyg3B2YHAoY7G5R8pWKJrXBwUqyNj4fkpaCk6WCKSf",
  "key2": "43KA7tAmYsvpYwCQSETDZVUn9MSJpsQaKyaN8DkLtF8FAaXZtjwZmZa7PQXiQQGnmXFnhcTvRrzqaHjisNCoK2Hm",
  "key3": "33RUzqgXqNhkmvb8gYBVhgWJgdkfgex58Q4uufmbG66T8nkAJVF2E92EJtZR55BdVJ1r6UchqQTNuiNue1ij3725",
  "key4": "2e54paYfwY5f91zatbTSbBecovLcTsoXmPDf3iQPepLfExXtjW4bWPYNSdKQRPkavNBoNYctFaBijgZB6DDQ1ruY",
  "key5": "4pJ6ixv4sozNKASVNoVHBRq7X1meEhVut4Yd3BxKqprpabHmC4wBpj3QGQh6ACsnGd1rcTnXHPL5QEk5V9Kt6sjA",
  "key6": "4J76kjUCSSkJxV7YD65TLvwC7TBCiihT4k4Di1C5rRYMSYbMUo3B84J5yQZK8RbFVW3KGrhQBxMnDoVXMFhwyuPy",
  "key7": "3ENP8xKSCYBc45dqBY3WxzG6ZgU2G1pagHfKHZToaBceSCy9aV6R1XjZSWkBw5px7qLQ7RF6KwitY5YkBMXtjQ6D",
  "key8": "5nnHkYZzXYfR3ctyNjx5FmsLiFy1GAdoqUuBD2WfMYQxnAkby2VhZGABVTceHUrDEkuohFs4zyy6Uzd7e6yvsQyy",
  "key9": "3rikkGcfvgCUcfAT3k24NA87yR6uUwppPSWq7GgquYUmwTG4yZn43ozbCQw547U5W5wMcWBSvnuvfuLn67ZzhubN",
  "key10": "3rARmbYKhnuq28sF5BC4Nz3KRssWLfVPryYgQZDTXUFiVquK4CnmNMZUfC5b5QrdMUa24cDPae4t7S6usu216cvb",
  "key11": "3rT8QLd81SwajB3LNLvb9yFh2UMapTfcaUbLBKpTgzggL3vGV627aSDPkG7bvi9jkLjPpvv7dunrNdDkkRS3qwCC",
  "key12": "5vXXhevW8SLq2mwvyKLa5oh3kMD5FtnP1NCKkHi3mk9SmCFeMSrqkZZ26ued1YvaKd5CseUussuKk8EH7e6iLmm4",
  "key13": "Acnju7NgrAi2eR7PqWQ8Mh84zNKjkZuMNoTWhosVE3pLQs5jYuisdAS5xmbS9FhHjiAFhbR2hq3iBmFic23cYbX",
  "key14": "kZfoX7jcUVWzK7DAhE3mqdmAspmJ149iwroym9nXKHe6AbaiJ4MffW9my9UGLoQ94HtPyVBUa5DcCD16GPTWFJ5",
  "key15": "d8zPu6wTcaefQ34TYK5AbU8XP9eNNUwQe1oFV235VwG5dpgVBbfRrL3MqgrQHyegMkvaRg164nviWzHJk8EHckJ",
  "key16": "4oJ3ehzTpDNwEPjuWhKoiVvtAfxvtDdWEjraF62GtohKe1HV6UMooR5e8EDQbF4BmkjRzkutnPH6AKM1AFtJCqzu",
  "key17": "3FWRqMCC3qA6MtMb3eGE5GGXdVGP96xy8dKndoFFyXYFXyHEfnvnF5NyuCwfPkmd4XQDUNwbmGPy5DDb7R5xd9SC",
  "key18": "3RaJzxAgvDUbb2TPPfqrKSDGAh3kHAg6H3mLNCe9MzYGxVGqX2bYNqNPKM7YyxA9AwBAGm2quq2sLYAe81ai5bZB",
  "key19": "bSw6Kx7xwNaprT2XzeMVvChSkyLYvLG24vxtbCayDoU3BMUrXj7svnkGkZmhkiwTTidy3wem4u9V4yr7ckVjyiX",
  "key20": "21RMk3S6wP3BSfFhT9NimEtG2BnbDzrhLnTCJCifVh3dceN2v9BwdzNhzGvgxmiWrELn6A27AAk29vtBpB2kEDXZ",
  "key21": "2BgVCVEuBiMaYEJsUqJiSYa43Sk7tbE5ddki72c7ovfnmzuYw3gNdExMQCVthKeudarN8uacPFu1kH7LBZ4NgRq9",
  "key22": "2bhnSqZoyFE5YKCLYJt9XKmvLBeTQpyB6qHoEzjoSHB5nXqXqtFLP2UKtSUYzPDqUveCUoMMKstaoXB4dkkuWb9x",
  "key23": "2gwhDgwnqqDVSaMBmWuwdyLCYfRpdKNHbVxzotXxePoWAKMScH8oBjeKAXxafYLyGFAkNZ65Lc7HvH78crYc7gzU",
  "key24": "3yDiMyPsUzsDFeq4uiLDTkjuH5G3rYJEVNcafVqQnCEx4B5xDXV8HPsjqQbwzRvrXfpJWfmj8DhYTAvjbWcNkRS4",
  "key25": "39S9aKjwitojZar68sUAbT9FefBe7KAaG4fEFm7LQ5PDdP6KrJDRv22W3vDBk2EGDSz1Ydtc4D3LA7c62c6rSPj4",
  "key26": "qEPq42a7yzmfk7bVsYcBSQsNS2RcRQiByeuy5nfZQQ3T91b6E5LdyJzw3oHKbdvFkF6VK9basLTQa7bKqc2mt5g",
  "key27": "2Y3p7xfD1nYrmx4AJAp1C7m4u31Ze48erX9fhXQpmjwVHHEq1JQJWotTZaUUockX3RATquXQjXYVdS3UJM3xyxAv",
  "key28": "jcMfvq2byWVbJELh8QYYUmp76NzdmV417PFRr6U6gsZ9uLng2a3xMiTzbviaarRFjHT8DrNaP4UgHQExbiCjQmh",
  "key29": "3QanVZZJJVVjwiweZHW85qgGzLQ4Xq7a3i65JfWTsvMDh7sGPkBNK63pCrCQ2FZKzDfZPn7EEgbiQRT9App4Gtib",
  "key30": "4ahz46heH5JkRBY4PeageW4HQtWuPm1FbXzdC3ZHsDyiNnN4vRKgJt2iAYj492nc64tkd7shQ8FZoxyDUt7fHjV6",
  "key31": "4KWZcygXy4GNY8ehnjspp81iUDVmZCi6THZLaX8fLgjzvbCfqGkk7qhNJpDwmVa9XrnQAVKqcvRJ55Fouvqbg1KV",
  "key32": "3fYRon2mGC39njq8iSwoFxqJTY4GM7cD1BXtVKb15o4jEoHVspKWhKyHx5Q1fBwWFTtpoDHZKahHESosctzstbjS",
  "key33": "3VtSzrWkTpjAZbe6TGfC1Babiogj6R9LahEwtg8y2sPopGe9Y7FVN5bqxPGUXDwguFviaTi8QN3SkvnYuAVh5w3i",
  "key34": "2Homegoiz3qE29DdtCkYQhbMwbAEuTqGH9qr6WUn3kq8d3veqwFP6VWU4jsE8JRSmpLvQKscr8cNW3gweLSEqvd2",
  "key35": "2Smp1RdP7tvrhbzdvdUXaDKuTRQAPb4Ly1ZjjCNW8zVTUeKMsX5CVrDqZsGATC7oWxJ2Y9iLv9LwncubrsKa4RC5",
  "key36": "4ryP85qLATYUJ9ob9UMhoeKB7rD3Bi3mSvKKRmJEfhTyUaUyjNc9LgqXAPG3FXck9UW7dHdzATFgb9t8wk2QKnZE",
  "key37": "2SAtwmfgME9svqFpWit1CpFxQ9LzCGsYgWT5m1FgfDf6CeQW62ioeSA3pqhEAAWTh4kiEi8R2AWejZkXmUpkm6pj",
  "key38": "2wuGWvgWynxoYpsYP5ezimBV239DFB4LuwfmnjP3AvitzmVAHYKamNDLVVgZKoYnecioaP7k6znLVMZtkDK5w4wK",
  "key39": "3Vt59byX7VCzEGCJ3pUAyHgGraEKsZr2EQmDBLdaDRBeDzETvDdc5unRTARxSFKAagQe3YBda3Xnp7Ku9T5fkT8F",
  "key40": "w7wijQL9eUiyWVkd3vcdZCKNhC29rMXNMWdMqPwWsCwieLqnJ3ywqDtAQjrZwTajTU9K1VvKnFEdmBasxUbtJ5b",
  "key41": "5UHfDjFFwFKJR6TRWymVtZnTMGZaTEnCWG2T223NvfNMqQKhGXnA1Y7pifzETXjJ7uSzescLwB5rf7mWA3mWmfyV"
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
