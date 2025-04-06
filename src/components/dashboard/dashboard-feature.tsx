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
    "66BP4qy4i6BfJrva424yreAeuLJPduKrUz3hC1X5UqkxavUeZ7aerZT8VKZ1Q26T9epCqbqw5Wwa8rHP2xtP8aLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5or5dg7nQvhHUkve9J3TMcWXaEtcQ3EoGRzGgBb84SDF6hxwbKixAa4GKHho3g2VoqFeHDQXUkLziNALd8cY28JK",
  "key1": "iTYNsymF1NU8HvJ95Yhfh7hfVAiyDDchSexcUogAMWK4BQQHhegaqK8wg5sFAc26hG1efWBarURhNgUZyVUuUx6",
  "key2": "5cub3vv1K9qwpfYw4b3Kubs6mMSksF74BDxeWmK5oj7GERCMnucvRrAPMc33PjWPuXsKnptsPs8xN2rNqUvb3eRE",
  "key3": "3jmgHAP6gzkTvguwpv1c3AyLWmyirY3W1bUNhhaRfigPQpQCyM9twzFCvSBP76HX3XryVkYb44omebsqEGcvEK2F",
  "key4": "5NpzHBrJMxM2i6qLi3CDmGqHZmGFXtoFL3zsXLx6Lh7TriwXqhQH2zFFLBUWSn8yogTR1MVPvup5N9cSvbHxobmG",
  "key5": "FREEEEnFkro2UwBhipvq8FZamPDe6CDoDQBqNepZ2QpBvH2Chj1FawSo1Bys4SK7NWyWMZmizKvYKkFZUXJQgLv",
  "key6": "1vDcw5kfaiVB9jmMcHcu9i3Z6GEqJQaiYECRtBrBatS98kYP2VJHbJcUgz1wDUeDKq8JUwdbDg7LLW24AzLy8yp",
  "key7": "2H329hvTqLgZ7L37a2uWctqhn9FVSwVwbHtMXrzWDMjDFW1qLFzBrv5NAF9KLBdnKcj3sbMmBApSpaiHVbpjAmya",
  "key8": "29oBSMKbiJQ9pDuWMXzk6CRu8SNRYP6urYYepdqatVgjRpCGhvxfT6Tpu7hBwDmxyDamLCq2q8uGGSAAtrBY5yiv",
  "key9": "3umr1BonwgdGX47NwgUppPrin7zPiYv7T9NnSEXnhYsABZfCAYGMexXvSp29qyKvtNvk1NjA5a69NZUjn4N7pV6e",
  "key10": "3VA93Tw7P4yBLyCZRc8tE9LLhD2ppfdjG8k2dNeDKtE8xnixHGSQks2fNCBpgmidALQgYEz4fvHXSE3SKs7KGkfF",
  "key11": "5RxhBz9Em2M6XqEEPxTEdDeNNqxhQF9VxV163k1DL6WYXuXnpurdDaiv7WV8VJzVJi2iLmJy7xCz7k1upQjQicRG",
  "key12": "5vg3hB1uBQFeq2PK8nDeVCtCCYWvrWwh7R7qiieG1HD9RFogpqxCovskjzDwsntVvEFsUoanNaaAZVT1X1fZ7yHx",
  "key13": "5SZ5dvwjxnDzgLXbZqWVDhbbCSxgCXkccQfiWFtsUsyEL4NQHQGvN4hVsAc8gHrw13d4VGxa92pnp7WFzpPKa1V5",
  "key14": "3hd76J1Tmhyq5f4XrUDbTtnzMhvaCx4cvWFYo7Ryp9txfnb1BjJN4sMP8UMAuNtMZfmR2nHcfUGEJBTNdNa9LY4J",
  "key15": "sNuJMHaMUboPgTXry12akPuqxqb2D9uQckVyT2yLNrGeeb8DCujj7GjUcUUCpBiatB4sJZyit73aT4oFU8cwUPh",
  "key16": "2ei4YwzNfndTqwHthqiKoN2yb1C9CWCJaBrTfpq7RdrKNsS4xefndH6sNBCH5bMb6PSQ7Ysp3B3DEUYPWc7dAzi9",
  "key17": "5iRxrzozb1cQb7H7xZSFknYezDArr4oEx9giuHGvJacP7xT7WBoP8wGHges8sja3sPsX3sRLfGBuK3sMKEsC5rMH",
  "key18": "3125aZwD1KcVjMtbi8G9aAVmnhaXCta3yzsLAxSkTvp9kZAD3dFTnNECyjnW6nuUJSVRKcw1FmL6HjAGhPXjXsyD",
  "key19": "JmpYCpyq2CT9rkNdBa4VxUpapt6RzM2ZVQyV5ZMKrsL5Zoh7Np1ZAJjV2DJLLLsu8Xh76kq1xPhzd4m1SQH9tsh",
  "key20": "66w5mNu1aJ1u7uvUdcspghNBf55M1vwnXgCSxviFSR5XZAeMUtKZu45ULmw7wbaYkjwupi7faQ6GjhaVb6a3VH3h",
  "key21": "4XwMfig1CJmaFatHpR8gRJbCR8tJggrMoZ7KDU2ZTpLnpN1h7zkfXuRPYFfwaVXpR5j2qYPvZ8CLCVjzqV8kfPwA",
  "key22": "KVv8iDL4RXdrjGdHmTX9Q5B3z7rL7dPHQEusiB4H6bYGgyGLp5iGUKH86dDRTPZyBfrCD1VZNimRZEr5UPoZyiq",
  "key23": "C6f24Evf1mWCBzS8BjhTXktpAjn27X6cq5DSXsgzTZk7jxFrDbmFmAmEvnwEFRMFFhic7C9xUnSZMUCZN8LUW3J",
  "key24": "5agsyaUBs7DbBcBTh5aQCzNxenAYL7hpDcrvt7X3BoKgqFJJDMT7nE7nqTwFZqxkUWhmQh8EVDD9ap2C9z6EDyyM",
  "key25": "6efwp2KEg5kYM99nWs84ADtpaxHresfQYASHVD3cL8Crd9mKmrRn12mBtDCytj9RVdbXyCV7PaeBiYJ6jx3R5GV",
  "key26": "3WsCgu9MZWcVXT1pe8kvGiFi9dLp2obYsuAoYEoLuqK7gCQ6QU2TTkTENYPYbwApEqk1Ezdoky3D9oWVKkBCGWnR",
  "key27": "63Bk9Y38a1ufNnXtXb8YivC5DQwibJRe4unz4jbmWWB1xkE7ctsaLCeXhzGFPgTsygyvbGNeBRkH65Fjmu6Vb3VE",
  "key28": "3MKCVoNxXKFvQi1HjuwTG4VbVV6NCv31VhL92j3wJ35kfbEzYrrALkX56DYVzSumv7u4Azk16cBe12XGfqYYpu4j",
  "key29": "5KUz1scvzAdxZEW6Gj5tYPPjQK4vA6Q5x5ADnaj3VNjknr55eZT4BNYoUrvm8guLn6E2kPn6HktZ8rQ78cqExHnC",
  "key30": "4LqrM1t7HDMZKunZgVkU8T8U1wvZ375c2zSzAWtRyVen9XaXQB5G5dCD2yakuaoTnTsXaDBo4WawTPowbynmxaj3",
  "key31": "4mVe5FdzBSGux6wG4KV1WdvjvSz5i61aSdjPP8FmKx7d2DVv1ReaM7Ui2PW7KTvk8m8mpY4S2nHYoGUVSB2Lf6cN",
  "key32": "2M8mu1Eksgv5FybNF5x3rYq8JtaznJT4o7ZHBX5v3PWaCPDtgrvTW7z47Mxap5uB8H187975s6Ch7L7qejX1jZy3",
  "key33": "4p4i6P3Wr91AhL5SnY76xuoDrMVtHi5xe2LFHeLXMEwuwVeoHBtc6W4pk6eguzr6whxBuvJNFF5HZKAzncFjq8kq",
  "key34": "3v9ACQF7y2RJHJmmoxLPEMAuuWuQwN3Hpj6VgwZGmaRf1XQq8gi2yZwSsd8vWXGyy56cQEA59UahiqHPQf8prR4n",
  "key35": "GBHawgrjiY9aAfH6qXcVngsjVpBQtMiRaBybcjoBvMUENWgZBUYh5pR92NZmkTKj4hpQb3Ed5Kut4xj3avyHSTs"
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
