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
    "3Drkzw1Z9fsy2PB5c2bvSKpZiyxc7oaCLwT5teAu38nDDAFTLNzqX1VvovKDbKyrDwuN4vgLdb71oAXr2ctEeSUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZMDJB9RpZ269DGHexkECasrRiQpooW18wstKPb5H5gmnLczLEXGQJ3SpGZnsdtexM1pefcPEgopAkWxaEjPh8Q",
  "key1": "4wMjNN85Z61asEmL4pwe1yz8KYeZH1vn2DtdFiKat4HBWGyppkYYVrFCRn5W9HcKFCUJ1PDvfdZGPtYHmmJ7qgKX",
  "key2": "4EU5wzUK9Z8qtaasbKePyBHv38uNvXpEpvTQxDnkfzcxSX7UEVcHTr6jr7HhsidQkfRKVPR2NTCnQ9tZojARgBxt",
  "key3": "3UVb9H9pw6Ydi4tJnCQVbmuvXru7hwUNqFMaL2LvW6DSFX1es8VgdBkDs1cAH5oXKwcFjHVbT62XvjwLBagtzRC8",
  "key4": "sjmVefBF5aZgpbXF11FED31CuWdNBtupD7a7ajyjApL3SrKj5prJ6SkmZf2HLZhPxYfDHsCu3LJ5thBi5rBPh4N",
  "key5": "53Q4Se4UeV9f6UeaMyxNqK5Uh6nyzowRmcoyaLymXGQvGR5v8ZmoNtWxg8c4KuHiXjWJLYQBCo5GqRSRy3aXLKyp",
  "key6": "3JYqcBf8ryNwVjTm5Xuu41XCX75NtChGUEvuvTGhU4hCZiryjc5ig4rmCsZD2RqKTd3HCx19JrCmhDzhCxSiR9Tf",
  "key7": "3RY62jL3zTEoNKrLWRsorCfexWFVBx4aGrSkzJisKJCbm6Zyo7dVaCPj7tgAK4zkTpWQwEYrE9bPLjeX4MJj9A4B",
  "key8": "46JTXsyGmPjaGjVchXqKuQPMVJQdijKzXniYXusTUjn8yECnfGChfoRkFZtT6sx14JE7W35ekom4RoBt7LimZgaZ",
  "key9": "2UbZExjDi2g8W5jAZMw1eohUX1ywHi2sYRErKgjYrwkiQpgqtSwE2V4PHYiZ7ztbnEvqvtP9EoQeQr8ZFwns7fw4",
  "key10": "2HZVHi5jX7RAo9TP5Aqo5qZ9HoFwrHoAEnPLpcvZUGfW4S5yUfMV6xA37LXMVefUE5TR3n6vGJkKMUS44wBPEiba",
  "key11": "62xNfgVQEHTTQ7rFDvh2bM2vGuS2Nh27KZxJUEeuiz8Rioz6yT7etp8gKdzNAqwUQ6nWtrAaERDBaanHRQeTUqYp",
  "key12": "sc48QPPtAZ5pnV2fjFTADPChsmC16F9k29ZoDTpyj51zApik4mjhZM1CjQg8YxmDM3Ah7TAmkn99r6bK2cW7GNa",
  "key13": "RW9rBfgz6MgnA7BzEHsWH1o2TuzmQg2QYFjuEaFTHJBARiR7EwNbdVGQbjCfgc4YdTBe2yyYRwokwWycanyE31G",
  "key14": "4mnuDrYyYKyDW7ykztB2bTiqgDos7Tpka4CLcJymKHqwNY5zYxpG7x1MHHgJ2wEkbNCyohdJtTvL8hbLQCc2nN7k",
  "key15": "2rb2xp7ST43ABSy5Mu4BBiqdtgbWLgQtGUKPMu6wf4aJHSecPQTXBMM9GwAahubrTkvnM4SPeyGMLGKdhJR5U2KL",
  "key16": "2dcRHMwEdaNQwk43DfbP1fEdt1t7XKq9ieRJtyq5NQXvK2DAXu8BeJRrNqdvDNnu4AifJtU9xoP2pCBFFjJrLmpX",
  "key17": "25bzBhcNetfPSc1EpqpTZbRdijLa8R182z2WvmUm5pTKTmcsnv1MV3oFqr1tYitq5dxReKpqn8GWkAoKxoXc8Rav",
  "key18": "5gniKHDPQW8JEvcskGaqgQh7kxCvzzZBYQtFyYoijVHqJ9BsvdYz1JFrQt1o4uZkCoRPquV6wEcdobfBppYJiFT8",
  "key19": "3EDdCN7ZSaWRgfgsb5dqN15ih8k2eHi8ukqWxdiHbd8kNzo9z9P7m6AzUegLSWRsZkkfx4taJVJ28Hbu27otZCtw",
  "key20": "ZgNrQqqFMDdGeXU5Gdba5bK9ktXavETLPqcmRQ3SeUNkeCEACjQMHAbtUbDcr6HkoiX7wqqYfJuAHDYNUMYFkVp",
  "key21": "4JYbDVNgVoKxWqS2TPZeeEZEXMP1ASHNdGFZ6Upckv4cQMdV6KngYsm1WaNPJ4uVmFGaYvZTSh5LTYSakB7jMqkm",
  "key22": "ChTarp1YFbHCYYUJVsnQnM4AsKRpadf3jeiVGbYCSDT9B7ENu7D2LbJ65TCetZtrG22rAREuy8wuehehLJ81kMh",
  "key23": "5nb5C7aG8vdrcH2b1e6qF1NjfhUsi3miJ878NNZgCw2uxzAU9yhaHyEw8Gd6WUUxros2T7tEPUoMvRUi67nBds1Q",
  "key24": "36JUDZ7xZLpRuJSfKcyWgpcFB6XWust4c2Pkv3J2suu7Qt9tpjqeby2x5oHhfZdAK8G4kJDpYS7YaveJ4pW4i3A1",
  "key25": "5JXmR5ueM8breE9P8nJvYwzvdyRThpSQBuAmC9kYvraQiBaPz8Zp1gJuvLJck5NKzXcaZXXA5maF1U4V3xCyu5n1",
  "key26": "ysAiGEqqM1CjWTMSAAhyMSq8qXJvArH1wAFCZf2XHgiMM3MuUYe6XdUvHv7kKcTJhVuLx6gvMrMXqGgHZM1mCkZ",
  "key27": "WJMm1BJ8rjv89JpvQkwAru8v1YVBFebKwf3GFYiyiKmXkTjadQYLBRS9Jedhc7dMeERwWadwhM26B6ofrHZUGPJ",
  "key28": "3AY2A4LMLKtdPWMnx2YaXQXr6M6gcUVddVbzeURaKk56FnjBZZeqP2zC6GCUgmB1d5rgvRHF2WdeNwAi6mDkMVLd",
  "key29": "bVpykp6A4dfVzfLEPPiQsiLqJH4qZj4wKbmfV6GZw36jDtLnoKNQ7pLaZtGf8FpHKTWc7AuVyBNNT77QAQmUNHy",
  "key30": "szmqgBLfc9wqdE1ugM3fUqAUNS6RsFSuzKduo68h91CgxVgV4setKCJ8Q3dGAqv1hi41g8qdCkmhEKwNTW5Uno7",
  "key31": "aQcssJt7UGBczyWG2dGnTaQjH3if5kmpKE5VMRaZVEwRTusrTBA8yPceGS34Z7o1NaA42qmWmsw2RAiSZn5Prhu",
  "key32": "5JqDbz3XHyi4gDwdBcQgLd6rZwZbLMRWCKucSBG6LewwKJzjuGJCRePWjBoVYYJumRtTKZJq7ReR6QvzCiNvppEa",
  "key33": "3iijyjZ2Xhp5keRQUk3rdLkkUVyKXwBtBgYGWj4Q7zuQeK64HNB9pydBJnUAyceBKczKFxMJCxTyPp7jRwjQBvL5",
  "key34": "2ZHY6RgCyoXiB17Ppm6QtX39u2pqZGuGG3X35aDsgGSCrN2gGaQu6CuRpNViS8az9bQNgxc6YDbkhE17wnqXXW6j",
  "key35": "37nL3QSKxzsNAWFUK825zDRFPC48bvWAWQYinqyptwWnM5v734JgSh7FaPBDJSik3pRozZCTdfN3xshgMXqjkiB2",
  "key36": "5muk9MFcCyjNYj5KuV6pzBBKmtkL8wK3PyaPDdANDPdmyHFTv7pMnMBLhfvz6ZVFCDHA98pYrgvhQzfyDXKbTX4W",
  "key37": "3t5CDFNcm7XtK5HNNCdDuaeHdQprmURkuDGhWdTVZqg68HrVtPuPyeJW5qFzeM7yR2PqWH6AZktCsRxRu2haJdMJ",
  "key38": "4dD2En3jqUP4Ty8zTxhXwVzziXF7bFqUyuJEFbBwZcURATwUSKMKpz2wdX12pMdW8kXfcqyPeg89Ct44xtTQ7429"
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
