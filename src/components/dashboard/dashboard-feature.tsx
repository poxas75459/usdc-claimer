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
    "646sCjZCZLQhQcdprZj9ud8vaRNvUP5oNjYiLpNHbed5c5tjYuqu8BezGixKsavDyJbw94yoLTw5UZVS3ZZ4bzQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCgLmYUnqhxCS3bKUrmQAi1VGWGhPf61JdCureRGx7LyVpXSXSuka4Mnavw22feNvotp69zEwXvRAc6pKe9B8hB",
  "key1": "5BuEajHp2E3pwjfLsbCzybSZruNwsNkYvJJbsYB6nxHnqEyWnB4ehBViwrGVSKtd6y7U3rHTn2sqUbNnkY9QaB1H",
  "key2": "3qEd9W4eZSz2v4kpLrF6WR9tMcvFEExnP29AhMjpvBjr4Wjn8AdjzvrK1DZmvm8xuJV1MPpVUAmh4iSHttK6CnYQ",
  "key3": "2bSKuEydjGMpBBcivyc5HagSYSNm4hnYqDRFbQZxkF9qks4uFSCkVSUZcvbwjJ11JgxPtq6CUY47NauZaWC39Qs1",
  "key4": "5jvWvJgANT4yZJsvDhGKUsZ9ZnRhxNwgLgFqdgp9cir2i5YPnBaFyLMTS4FGshm77cCN6rkC2HYf4qmdpwBNTE84",
  "key5": "34Ft47HKkZz54bgfRMoSuxVPBNkWwCwWqCixsNf9joKv1uCWiSgSqfNDdo5UF3mYeHym9HP688QjNxtPVwagDasP",
  "key6": "65Uonn2CwnmZGt9nNKwJESfGtqHKHChdmuyiFbVzbwQzndf7ytEQARhiQTqZhT9Xt8r26767WVYzTbh8mqNeW1PN",
  "key7": "5SCM32S1P5ykdXxGXvresgwkTwis5aC4NL4gPorX7Z3oEojXiSSUgZmooP5FkZpELmtCXpta5fpo7iJMUGDRQELn",
  "key8": "4vuAQJXBuQYk4jtCiqBshSDKJdM7zHjp6qLzKF1PiS7yPdFLGWcAbRVcU5TSp2hXKPg3nzybsmVkb9cpFHb2FsqL",
  "key9": "5EjYzqzqHuoESCQdP4ynV1nuGPk89P5Vdur6qcPkdV7d6RpebvtqQZyxCK6ALY72E7t4hVW4YBBDmNpNHF2ZL69J",
  "key10": "3gKNiiaUzJyofrPNtighVuPT4VashpqJYYjETQcxMiHhFj9c8tQNP7kG6AfUvPRFKdZF5hTaV2QsLqBiAABWTJPP",
  "key11": "gVGMv3n9AAdAppJuLRnCQEQou31wSmEeQa8Vyn8Rt4YbcmbS1aAqrS1f6SDQEYhUzo6rrKYVAduN664fiWQtjKb",
  "key12": "2V2qvqsSVXY6TyR6odANWiYWUuV658g9ZPYdvsvU7AKEQsYAX22u9oormZ6sXMxeTWNDw8uu1riX34YEaM4QQNzT",
  "key13": "21FsNWzhgzc6rvNkMZzRCq8aT5yvJ6V2sPp8uUrGsvoZug39vgMWLgxwfq3WvJ5tsTBMptcoeAwdNgu91XPxZTd1",
  "key14": "5TdshjtD2Sny1jatbLUJ79g97vUwCxuwUnN9sznjbY3UbNLMsZ6XKfFfz8iFZTz949mKeRgNpgF6Ew62cy11JXwG",
  "key15": "3JnDQk76VNaEMBbfeURWp5GxHfrK2oefmACCv1bKxRaFgdoPu1qkE2LhXpe3AiY2DBxruzYp5V7n82a8w3Dq5L47",
  "key16": "3pB213ZmcTZekZ4Gfuwj5ZL5MkgKdMci57chC2koSxikvZDaE2W7ibcsfKgZzo6Q5FKYkA9XYhZC9nU5gWB3QMUt",
  "key17": "3CmiYgwtigH9DZ9JwtYTJiztuxWxpP1iz7FR4DU4rjmW8sA8jyVi2YNJjcH5L2RfpPH4peWwDup1WcUxn5xBsRYK",
  "key18": "4nS4NMeyy1THkHguqP6kPd8z9K8vTdPSCDeR5Au44SjDRDTmLy6ZhxziCYj4DVahYdN5SFziXyURfWxc3UafoTrK",
  "key19": "4Eopkew4eTxDVdcojX7V4icszefrk7hrJUHFCCssaaDF595zPz6WyVPEHQqeMqGZT4TepufQGmgm7YgR1pBemzrz",
  "key20": "2Nav1mvvt3safeKszLxFU1jRYUs5QXouivYpZ5C6cTRdc3pCm7uRhVk4s7z9jwV3KQ2vA8GQVbSe4xEYdzXBAauq",
  "key21": "4DkmbZCSfzXg4hwWV35cP76vE8mKFyvohsdXtAoXJE14SHm6CyaoCa46WNQgoUZLUTDVey166jxZyeNikLvguCaF",
  "key22": "35oQBtRDAPzhiEnuiWpWjaF55zsWnEC5WWQXR6p86hdHUH6sYbHz9y6g6PC6d812jeoxHKUebNF73w2p7hDjrPjn",
  "key23": "4L2uges2eeD4gwZA7SLgW2Kv8BNivQLwaKP4gMnbtDYLBt4arLNuKqU6Pbtx3h92nez94CCVoMbYtByvx8VJaiBk",
  "key24": "4qC3e3otRWPiXK3rcVo9LDq6fK9hC8BjE4od34oAPkQQPtHtbPbo8n4wKd9npxBjLRzihZS4w54vUcHA7A5iSyz5",
  "key25": "26bdXwD7U1aPix5HYDy7wDYiyqY7272JpBqGrpi7sAuxUo6bi9SYNzogFLpzF7EDPkqGJxk8DyDUeNrWt431a2h5",
  "key26": "5HXm8LT997boAsaGBfGq8DPJEHuWZZh87gPWBi22uyAvPxA6WKBoW7LkBVY7usXvSbanZjJxXb8NHm9aN5bjNCcF",
  "key27": "64iDVDVHR6Mo3gxAJPMvrsWQgJZ5DxojmWrUUvYdDcNwHvraEod4W2rsAR8bQyPGY2kWbAkmjKHJW6pM8vA4b7F",
  "key28": "3gWDLYWz7iDU6d4Zko8UyFnCDhgrSJFF79duVoNf3RpwZMFYp9qNo2mtVLZ8PT7J2LQKMmaXcRHAtzPZMnjZcvkz",
  "key29": "4XN97gyjRi8945EJnp3i8GFthGjtzyhkToGvGmrWBBZtSJYDFdDy2LqJK1eCtvrCbJvpgvdPSEEf6gwK8VFhRkRe",
  "key30": "2krHTgFip7Q9qX8mBm3RnTdAL44dgLjaXj9QxPaTJx9TwJzzFmfgw2sGRNARdg3sGTjPE8GedDgYNdmzTQnZgfAT",
  "key31": "3cEk3cypNMof23Yk2FUYhRkXR4Mv1dsaidB99MaaLwGETh1SC4b1qpPgQa5Gs1qeRibSZmEq6GXRxSTAF6ppdqRq",
  "key32": "5JbXsrXKfDFxLEz2d4DuR5WnpWFTDscrig6tp7iKvd75d7y1V1Fz6cRybaSkocHcKkwMrRvFimjM3jEyd8fLsFn",
  "key33": "66g9bXcWZmW95dYsHXtcLrVbQd8R5PweJe8XarwYNPZSXnb3WEUFsmGdyx47JZyvHfJAr1vT4x5ArMxGkHQo75bp",
  "key34": "3TbFWqBfZETQk3gfe4BEeeMEkJYmv5zLUz6PkjXc1GHN35qXgtYtdReLnfrEnEkJDeRbArAP1xDB6dV6zJCfnDBd",
  "key35": "2Ne4j4q6bcLKHWt5ficwa7MHyRncAqAdQ62BT3eF3pTGXkMooxUyR65VK2SVqxpopfBzYjwE5AY2pNjCB5FExePH",
  "key36": "9MJF1e2AGg9Ud4TvRGfA7J6oQSvGkiWq7sTgJmsd9BMg6JafqFzrtE3jJ9FEsfX1csmMCpsFRjCZdHqrq39DJHf",
  "key37": "3o6VxqgcQYpF5zaBTRLWqE6HExw6yzmQLVfLT7EnkLMWbsuH9oyvwnp6NRUop9otUASViiYtHmcW9maVLjMBfviN"
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
