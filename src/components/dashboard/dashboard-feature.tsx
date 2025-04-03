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
    "snsMtCF6uHjuMgLQ6aQdSVpwEaYW9WfR69mHhDBnj8RWyzcoDPkeofYUdKyxep9xDYTvFG3SHT9cfr9uXYYUj5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3iaf3NZDXFn8aZrNVZMpySF52QQDuPuskq3Wv9hW3FVgCaQ2o928n8MpeGWwMqX9XbZwjkYwnWQtDZCEYSmqXc",
  "key1": "4LnXgf9D336XxKTFukwm1k6fK6eAnLNqA1T6nFowEppoNgYAs3iWJuBp2ExWyzLrZKC2gLnRPtU5vUwMqpedfq5W",
  "key2": "34dfQQyRtB3eJTJpvAFHkHP9y2QhYbPapUu9FFn7kaPDrFNgmgGmM1DfVTF3u2iLMuCip1qoDbS7seZKu72uTnqP",
  "key3": "28yfEss927RXm2j2qbrPXCPkJZMgZdzHuWCoFCjBc5DxR5kfr8gN4kYCZWRpTm2aUKjJ793No6uAUWcT8dMZATsa",
  "key4": "4uaFNzT6C2t7NZr1jcxpBNpsLzpJFVKzc8aYidRJ16Q2ZULGRXdbwEtL5kkebTNCs9VKU2TTqJdn9QHZ7uqcWvYC",
  "key5": "37GkvxrLm5mT5WYHmBz3qCY7mz1ArRkscZRcGjfcD4EjY8sLSEmQfYGvfM3N1agocnSikf8EybsdiKyBVNMsutjU",
  "key6": "4wvbXgHaetFhnYrDe9yCMxQ17fj9wVzG9dUCdndc6DeP12SKALhpczcRkGkWNGhxk4Hzt6mJjvb7KM2Yh66avFJL",
  "key7": "Ev5FZXiFR5jFT8USxX4ahm4HB4m1BbQk9Stdzf1J3SmVGnnz6tGhtSveUwuk4WwxcRxcnSQygZGWme6ioYKaSwn",
  "key8": "f4X5BrhVaP9ifRMAL1DZHusRx9Mxmf1cnZhZX1oawtz8UR4mXibD21QNjQ9Ut8WoVd38sKdXCTVG3yLGvYjFLxT",
  "key9": "2JShWXdv6ZDk4VrWXWKukTivNn9kTmazVtvkmF1eHtkFF2WfaGq2hW4XZd2WNoAR3Fg4RjQVnMapXoEWHLvVjXX5",
  "key10": "64HRfhYkQ2KNh589VYEqpg2GYyBj4s4WkatThPBBWAy4HD9M9F7cc1tarjXL99bwMvaivrgQ4AXDU1gH5ES14sk3",
  "key11": "yBLf3EAkzr9NCPJQ3Z1Y5kVUcMA4X43A1z7sgSAtXf7u7YfwukhdHFpJ6vFMxFr6sFykuu8W5e4uqvFUbrdwKF7",
  "key12": "uMjBVkjZZNJ7NacQdrtUubvNSMu9c7nBMEnSHrUHuiNiK4qxGW8x5mVWRWYBJT3wkBvxHo4jY1JYW27ctXK5het",
  "key13": "5cbcXa27C5D7SDDsmPuY99aQrRtRxu9oJzSRuaTefy67mWAaJwyGUfTkUxzt6S8dW4zJGEkVWeHWPNfzhFHCfmvo",
  "key14": "3WDUBCh6DXHB6eKR1xYbtZXNagB6mbej3H8babs98nhQUEaXrhGQ2urYF2qKryHVjQRMiFvws4TsVJAX8Jn1fxCN",
  "key15": "2vPNmGZfCiJKg8YuguTikWCZTYtPwCaQFLxYXCnwB46495yno1gYmXmYicX5wnimstsskJhg3kJws42x2YQinT9D",
  "key16": "AD1an8AyEMjoxGX4HCyCf4X7BKNx4ax9jwsYyktKtf9pkmAgvdDU49FbzuYyg9XaQXcc5McRUNT7SCiM2qXWbNs",
  "key17": "3wArzqKUfj4mhNzg6LGoBCdcdGH7Mg5tkcUCGknjgq9182R1cHtiH5UiZUiBK4MYufUF1MbNTJbz7A5qTV9FvExD",
  "key18": "57G8WjsjvyEAAPhbvLmRiu5drYM3tRM7m1UJYvgjFYBeRthq3H67rTQvHNPZK5cmwZTrzWDUCQHWAEAXigN37nfh",
  "key19": "3roSJvW6AnjnbFB1vsw2zgHHAwPYTKnWtVkQqZNhzjKU3sLAdHHj127nqFpbEposFUXTQGuXyXGDVt4Pa8Rd5F1N",
  "key20": "4s9P1ENU3uiXxyPbWgiGEMXSs9kL3CtT8B5KEKCCUGueo3C4mnb9kZFv4WVZ83M8qhRGtRBnZ1EAWc7XSSpExVfT",
  "key21": "5gmywHwVfigo1W163nxtqRTxzFe1XUPYQkRSH8Aau5ZXwX5dY2AUc6sqz7sNhvttJVJ1cceGEWjdBJJejBUSqzTF",
  "key22": "3WAChbmjETiaycNKaUsnsaYgS27HS4royohk4cZLGes6uGssKjwzfLAtdgPFwjMJkKzoGppfLtYAzToCcFNQM775",
  "key23": "5FwpnLtDFLHfx4Z8EXgbwZZ8WgqyMwdbr3yFmAxGRb3kBzGREvtp33WdrcJ1XMoYLdi7hDGRcLZ8f62xTbQwZZvY",
  "key24": "Ai6HfJMctcm1M1KAJhmJhypgfqexNsjYwmd2XdNgB9JSe3q14LgFUoagjmSYMvJVXUAdsFSoDVNM8YqYstX7M56",
  "key25": "5bpz3HbEg4B123rjdTtWyDPLd9NZwRyUBvBcvWeLNh1SkLHp2mnevR5CbPLZv3jyj8XYLnGuPotNbeprVUX6bARL",
  "key26": "3vby5VLN56g8SiXwCZPM3iara7Sns1XkRGZtzwVMN3aprBhmSq9MrfuKjChDrRBQzDAp8E8rTVms4E2TuREfR3wZ",
  "key27": "54SEGzDimX7VtMidmbpZTjSnTScTGxCM8gFbZcMiLbMLzoReyw8Me9mMcaVomUCXvp5XjkSUrS2Rfux9wQtrGYh8",
  "key28": "5T7gVcSkz9g4Kn7EFy8BbcfqQVBoE7pcWCudS2BCKcBsZNrK14p19KvfhTNbVXFRa2EEkt5uNh5jRWZrni95AtjK",
  "key29": "57e5iXTQVo2H9PTCTKSAu4289Qhw4JZB4odstLCdLuroadpNpC2nQzT38T1JfJzuyRHqDfX8xgFaMpWz9nRcPXvF",
  "key30": "5PqjTDe8XmZgRoZ2Kg1LzjwMZPLsxnFrxRKEBSvoPnpfieJeDKUYyrw3ZJAbq7KHfjgLpWEnNyxGAfTnEEYaVSk9",
  "key31": "4THgK7r4CCJBgJUfyfbeeNDJe8zVUCKbGW8WBpEDWueaXRBnsHaVPkrakLJV9WUecuthmphGDR3FdJbedXhyuSwb",
  "key32": "2GCqucYdjXhGXMf6JbrifJgkk3bEK3L7DFsE1iDBBfVySQj2drgv5cCSBjnRfs9fLGpQoJi3Svr1fVsrUxGFWS3c",
  "key33": "rUEdMqSUU4K2VhKZn7bnGhpAbXVrYB1dvqUvkbxgnCHHcza8zEkPEf6p98PXieRamUJPUZ1Kp2sGoze43CGVbHJ",
  "key34": "2BZVeRBLkjah6uNzJfnFojCqZN7wygD9JrjrsNnUHxpu9Ndkji3aTJwVQhbknQQEZVZ1EZ1p16ixBD4NHqaNQmF1",
  "key35": "2BqBV8TKu2GXgoasLa227djcBpsRSZZcKPJbaDwQuU9smr4etHnL5NLz7sSFGfjh4EnwJUNk9i5X4BSfocBa6XwZ",
  "key36": "3w4mf4vpqqwheD8ssFpcQ1g4wvctkA9ZV3DYyRJYpgBhkqQFaNRF5P6YRjYGFqSiaSX2EcM7372qUN815vFfrELX",
  "key37": "jc1KYqg7rV8HCQtDa1zHq6vWg3NPK3awLqhLz1dTdJAa578Gz9qjXtsxjA7f4up4TPWJWPrjQczhbLdoVp8FTQ9",
  "key38": "2s13En8JpWQYich1m3fSZQubMLYLgXfaPUY9U3KycaTcWfnWJv3sJ2DdS5KJkVpAhsbMizpRdrrC47Zb5eTfxZBD",
  "key39": "4K7V56TWTNxzWoUzRRtZWrKuF4hNJ4wuxpnSP9a8LsQo2gkYqpeooN3uGMkphqJVGWYxNhNkbU2cgRx8vqdGudHx",
  "key40": "PfdPby9QxxH1Qu8EGbvxXRkpDGZ7qZ1ZGsCRqLkXRJr3DeuaAVcffMmKSNC1R3fTYeK7YUWaQZ7EWk5XTVZTdjY",
  "key41": "4JJXcKNhncy8A5MSJQLkL4UTgyFJwxe5HofCuAJKbC5S6tLH3Sdsy3Z1Kd8A6hz5JRofjfWagvxRFuJbvPSaZvyu",
  "key42": "7N7AawtqYbxz3kKYVH6GGvTqjeWy1HDEDYujvKqzsbWq9BMtYVXYYnEwMN6cqZTopTAaTRmFVQPUbqcWZyXyBTv",
  "key43": "zDebKdHPjUKhUNwgEd25sbDiNxNxMHa1W2VxDMXHeoCjArrwjayMsqfuf3EPxsDxUo6iCDpMtBQNenzvyKSHN7q",
  "key44": "2A7GytgotcQ7KDKAWjuntaLefS9KRHDMW5YBXXu6L4bJLmoPASxreDMLSUKniTyeLJBV94Fpv4QuCu1Xbo72u2vH",
  "key45": "47nMhRKzptHLBXVV8o8e9LYoR1YXAaMLr1PPJX1gkrZFbJkcATuvhmgBpnszgFRohkUgXWiDnH1vEqaeaWjDPZRg",
  "key46": "4z28mhRamDuV4BU547XhpCRtpKgbDS76Prk54HoR9jGQ1WWeU3GYcCvaUoRWAQ6DGzok5JCwGRpeKmefooFVvxGb",
  "key47": "3iTa7BgjBbmKQmmAWV9ej1gopQ5uvgabDwEPhsnT3i2Ejwade5KMtpc7X8jkADjWuRF65vtsHBsvJ3vnZCQTFgPv"
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
