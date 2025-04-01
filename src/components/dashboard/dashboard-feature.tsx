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
    "5J5dhv1dKumfsDBn8uabjPnvtyVPWR6iVfwjgCrVpMuskKeWu45FYtJZem3VYxPgMTzN6La26cgcsMJfB1voShvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TDzv1DajqUB4hXVFVmW7tXA8kTDed3713i5GacuRAyCszbhxAsXHpQpdoroDErpFReUyFn6NjARCjBLbC9BmM6d",
  "key1": "2faxKkKeMcBKztFUDk5y6V1ptz6xcXjk5pYkDdT7fnLNgF76LQHGVunUD8zpoQ44smKVrrJKvpWTCeJ8fNYvWXQG",
  "key2": "j9K3g92PLoMjNXh2a5diRUpGxfXGgo2GKLma6eeTU3uEE3y5ZKXjouTUR6uUBB3tiPTm4u4uvp4cHaGXKabyCmP",
  "key3": "28M7z5pT8XFT8SkhHcgTY7Exsm9mRwjgZeTwvd3kDMFcRkTmgUZbV7ErSDHp1BDYYWnFpseh2QPtG7KbtwJntcdA",
  "key4": "3pMcEKNkytNcfaefHGf1nyTwcqUyAssHBm2GcbNNqH4vYusEHfhj3X1BbZYFKxLJWZcRytKgbGygGW2oNtUdQTxW",
  "key5": "2dBaf7dAHRX5tCedDZLCz8P2q7gJWmV45zVVthatQkHZ1XnwnFtQsfZGz7KHuep1g4VvfyxG3wyAf6Rc25BT5rMb",
  "key6": "2WA3aEPhJ99QeRzoP5F5Fg92bmbHWke9we3RDA58H8FKeKor3b1AfoW1uUPG2azc2g1BEt8J5qZVCaYHTWpQmW49",
  "key7": "2Aai6jnYAGZfLYkqMkzvcHMXpPAWiiw2Pm4nT82jjDpt2jSoCY6ah43Z1KminjrXZFPns3qdxvUAdQQFGt6ckTPL",
  "key8": "8GsCpSwrwx444QHCBT7jPeJahapH6sMhgNSN1ExrBqJ4wFzyHHus558uHfUvRNkG2Ksss5bTc77H8A4Tp6uVDyv",
  "key9": "4R4t2PaC5PFNaqKfpvZuFRd2wRDRz6VpHFWT1wPcsPKgSG3rZUwmdWCEDfJ33iFN7XbnQc9G27pyWGGmfScWyQeo",
  "key10": "3aYzFpZkGkdjMjv1Tu55NjTGghNcQ9sgtSDj6nsDFgsUR4Wmj1triYonEM4pk1NMRnzYnPVeff4WnrrhiSjGKUpo",
  "key11": "pDuDiRMFonnBJ2h1Qv11NmVUoFywoYEovp3vMTKfLbkeBrmr45fQkUvebh6BYonBJFY1ygwAgyPVdkNyDwZPsN4",
  "key12": "2tpDhL6nSKoZT2HYnJyny64sZTgK6Daks3gqgZPWy2uoNACzekDBbtbUNo5tA8tTxDiqMwrVNFEmDnEaAMsge5kS",
  "key13": "3NgTtkaNyiEWzVkkNobSekf5Z1gWb63tsNEAyB7fV1pcbARbeQXQFpuW6Z7knLFrQXfzh3H62oVfXWgVWKahoSLf",
  "key14": "4VENEAGQqo7gBZKkZ1gUwzuHy2CkpSAvW1BMQxWnEz8oQotY8tZgZPGUv4TZQedDf4sVvtcn7zbN9SHmRRaQNdft",
  "key15": "4SodB9YBkJoRNqeKAFqucXwYEBARaRQXGjBtwoLeTCHDVStT4m6miPGnaU616TxadAjj5G2bqrhcT68Rmq54GZpq",
  "key16": "2oxoien48kLxJCyhTZ6ugPhZQJ2bYFBpVznTWfPbha3bGP4eP1C6dXwUrkrHb4kSo1ip1TQUtyu43AiTybSLYNmj",
  "key17": "2PBbQXoSp2jqmdN5Z72X972Z8dEjrDM75G4CUe5JHnR258dmeB51ccekcFeAUN7WdoUm4bLB46NXSwvjgxZ3qsct",
  "key18": "2mykWTpg2yCBTXAmzEfvjePMNmNwhaymvaD5FmmzFwktnrHDT3AhPSmfTijrdkNTzdbpo92PmGxKdAAyc1X9hW7v",
  "key19": "35egrajCiHcamw9xQDqSu5E8PmJE1iJeSggDNFtU9T3QK2oJ5a3g5q6C1XKbQKcHv1sAsFCth9i8vRvoRvgHfRHB",
  "key20": "3mNYh5Rxu1XW1LRDyj11rLC9mqD4S1k8AAMjD9QCQayK8tWHwBEWJTaQqz8Mk5WWFPg89w5nJDkNzVYyf3JVLpoz",
  "key21": "5H4rkPcPUHmwevJRMR6wnSVG8nRRLEFv3jDJMgz73qvHQid9f7Zk9kMejiAc6tZWRtY8YVgs5xLdG8386NYCw5Mi",
  "key22": "574nCf58GyF8xYnskzY6pvE3bjBX8BLCSbA713dVwtvKqDSqL5ouhCLtpV3uYrDfcHLZnFcFDonWWe9iqhde946P",
  "key23": "3eDLzdA9VuZNjvVEeQq9zjhLLjuGugoTBqmpTpB2ztwVs7AuYJsnAqYyNzXA9g71R5DQqsVBu94KJhVZR2diMnhK",
  "key24": "23ez1aDcBQmueCLQyWXk6NYVeX2QpnaNYqix73YhmPVJYg3vzgFggfi1uknqCCqKN9Czz5zwgbUXQEwojb8mgfiW",
  "key25": "2GCCYwrby6nNZ5XPCEuhsg1aPh4Rkkf2743mgcFbbuCgPLm8wFuowE4AzTaFDJUmjPS1yKw2fKxmqmcHtTUYhuZK",
  "key26": "4rj2v9hsVWVSXEkfzvCPDkVmicXRMc7bvPq9wMbSAYumdbtiHhfyu8tWrxJHJzyMh9gUTvarywqh1jVTVx7Ht2Nv",
  "key27": "4na6LZrMZZRY2zTqxj1Kzs3jfanz3684bpewshorr4fo8365qDQyYWPufut8NiwGm8gSoWUjcyNVDKYHXHm4Ysx5",
  "key28": "4LqpQucpMkkDTdHn2dYyePwVuW64GAiZw9ASUK6UBX8LxSgCnKQZ6vE1DYKgxvA8dSbs9VJUXdkyajseBcwGavuS",
  "key29": "2geotWnzMo94tMs6NaxVtRc29RgwCvMArGgWco6Pa9PBNVgHeKuSotPC5j31Lk6wujUteuDxfAivKfmo4mUrPa2h",
  "key30": "V9ALVzUb1UhLmp5nTRYKijNoVXC3HfQF5EycWbawUxAT7jeWFeiqEXudyjHcy97Ahrazn4nHByM5DHr9qLC4XnQ",
  "key31": "3a4ZVcMZK28StgkNRjU4rvSn3p7t1dfEH1jDjDrykg6TBphTa71g2ebvJ6ndxk7my1sqAazGxrJ51pQuKYNob3Wr",
  "key32": "44RTcjY1Twmaha8djcrGExxpuUqJiv8hXFuUS69svNzAPucJn4CCoqdBjAxKtzesMZdMJMvzueJK6VUnrjJjEDu6",
  "key33": "5yXA3FMKKLSL5HvoJXgHVCscY1QCL2eHLsWP1PWfQJZt2q3t9Avh187djNv4ohaLnvJEuBsYeH2Sgmgm2kcXTQuH",
  "key34": "4dsbiqJaxFHqwyNNGifVhwVbrNfxsrUxZpMQawKXAeQDtWQe7KsCx75yFVZRNpQzNNsxS4fXVhAzcF5qvn1adb3x",
  "key35": "39Pn8smYskZgzZjzhGNSGLbQS2yhzReMNTnnBK9gTqHB1VUdF6KYnGtyqiNdnJtH9dLHgoRQUcsrePBTgpHQjjpo",
  "key36": "ErMwR6oYVbLQuBdnmMGdCyEqA4BzRXAKBGYbamvBEaF4RtupgV5AiCVfxik83AcpgUdva8H6wBFk4iMEfBxHxXo",
  "key37": "28ZsmzrfCKGp1ou6RoXbFm6vD6pbMCDYgkQtaqYct1iJW6Q1BUG9i88zcPru4nvwtyc82qNLQDPG8gGjWzWZ2CY3",
  "key38": "52RTjZWzTECzWphA58nSVMhhkRjhqCNE8DyKEq27F7vFHXeEhDw6ji4mXuJwvJxYVETq5Nq5gvmczHSJ2CRdnnw9",
  "key39": "2tMWuJfJR4EWZLfgRYmU2ySPacJBHPUReUSG2gYqZSw828cUi9K2wsexxEyD4QmXF5Bdb8QD8b6gDw8WfyHRkREC",
  "key40": "5D5hsUtNZXRQpw7isBLMYkhSvH4wAvoXeXH8LDDM4wyLrNKrUCkCsS9YpszbaBZ1s4qNfNKh5cho9ZWCcbxQkSfT",
  "key41": "4Y6w2xTRWydCiG14bQ6xLW7TNZTH7EUmhwhAwD5adNYB8rndsFWxtxj59AdxqgL1tkfvVNR18HKLiWoYugZAgMUp",
  "key42": "4GxfjQ7u9d9aMaur2RfCb8FAqs1kt3J7nSDvQcdxZEdWdtKdumLDsAVyhuNyKrcsJYYDdkkp5n1K6u6BbWBgsSjK",
  "key43": "27xNgxebkAhhbD6UgLePecgweLSUDmVVKxaEjG7w8JZfvWuAhxaRTBhnwTDZEn3A2CpmxXEntYUa4TnzuTQV7RLT",
  "key44": "5Nw7AQjDAWJJCapgSLYEqUbTZsAr7UShpP5qwVeyEbCSjznK3BkeqGpby1AHQS6zd3HUtdYbjejpySrf18dcnins",
  "key45": "4uPNHXNrXW8BYLiCdZhNYr724PiS2AcpdiCkkopK5chH5o7CUnYGyLSKapTvXyJvnmCtez9TNpvME1WSKjpZD1DN",
  "key46": "uGyrajykwv5EMUiT8MPQ7zmXhiwbH22k7YtkWvKLwjacZayAbbrAMYMwKFGHUdrxwLuk9P1qVtvbx5cjWyhuV8r",
  "key47": "4K4jaBepagmJXKnUpyXY9DsHEhLrCBxz7MxRY2rpcxyRcZXJGR3kz7TPTiychKQgYo3rczzoJjgs5BGfaAxKKGXj"
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
