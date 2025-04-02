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
    "5Ut3ej4CFChw2guRbk7uSytyeigEYo4m3iwQsEfYS9Ldp6TgmwHtBoa5GphGSoc8Pcn7ZdcHjjPyPqNPGwBF1gNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prVcPkqYiHxoVd1vxjBLoBokmVNFkwB7SKoj5HmfujqCgPtm8D8GjvZBUxpH8X9P9fAU59EMR2kVsTkPhHiC6nS",
  "key1": "5xNXVPdTt7zmDueCdcZAiu2pWipo1g6fevdRypE2WppaN2PK8bTE5oMWh3UKqBoGYZKn9aqjcS1uca4LAHNTnrVb",
  "key2": "3Y6QocXWASEcdJM8J2SQxzWhjcwJ557v1Fn6kpY1qg6wsH3FCiPzNMSJTB5chUX89WrTZkmg1RjY9dY2HkTzba71",
  "key3": "T5pfvESChXqrDvRzyzQY9abEZKubn7bNhuWHfNZYfZy3BJFRJ4T2f1G1tMtq4jR7Jy3DmXk7M5VtDBwSxHzkCgi",
  "key4": "48iXVJXxKoe7ksuTG5BGusGTaNhiDqTYzc8YZ4eqbfEz2yaBKGb2HipWK6rCv69LwqWeiAuX3tPpwiadP1zei5ik",
  "key5": "3KgL8HjGEgTga2oXsnM7EfW27drnVpHmJ2whxbAtpKbMU51S6feUsWTrnXY66Wtfp3R1FCFQKWLhresBHAA6d9EZ",
  "key6": "2CmRYoqE4d78KdcoiBFctJgQqVpF8u4z2aSziGKDm6SUqWUVRLSZDH88PcR8uymsi9jkkyxDzh95yTcRBp8G644Q",
  "key7": "4pDuomBkKgP9m4qZbZhLkvtYHoXyuBXLt1fgtbNsM61JWyxwVaMpw6viMnb6uUmZRqk4274ZGL5SuqYwanUwQ8fM",
  "key8": "48UgZQhY1Kvj1FUZpNkBjbheLW9momPSDpG2GQp5bHBDzebVnyhnHUoX1uKivtWb5qHn3XxeFu6eKchtdwzRNjyf",
  "key9": "EF4LrowqQ41BcWzgGWcbjuS7AutLaj1jJptwq13WuuHJYxpfQ6EDdTbJmcCg4BUmPcmNrz3fy1Neb2DCyHgau5v",
  "key10": "3ovezuCzbyvnFcTCKNYrU6TudnMgE2Yda6PB76EEjJaKJQZrY8PDPpFAUyTcTBPoXyRiNbwkj5dFZKMXYNQDtdki",
  "key11": "5KTkWuLUfKDdNVoxgCuSyGRzwCmeNLQyrRBsuFbSQQHY52yMVhm6BXLgGN4p7MHhq2cVtassTXnL19aPBBUMnc1T",
  "key12": "4XBe1TTPxd1QY14m6Qg5zrkVNkPBu28hRXgJBiakMhZ7YPnpX9Eb6ZXaBdkULnediwKLq5PdWeYM9kZz87NqZuWy",
  "key13": "425cCrFmcrDU5HRawupnXbS76wGuuPZC7USqAdjMLy3q1hyk3835y4V4BNzA5J8nbkzHpW1cB5zeuxjasTGbQCHz",
  "key14": "34Kdr2TPMp4Qb7syEZP6x1ceGBDKFJ1j279xSKEFY4efTh6UeLnnk3Js25FmxUQBysnCMk4ZTLTECEaVV7mjke2v",
  "key15": "4pYnJb1FEfGmZPK4v9g3nrAEFTcbCQQUYhvoHPqedfmWgR661QRJRVG4bZMUbwzY2F2o4f2WHB834CjYQaTx8b7j",
  "key16": "3Bu62UjnA3QE1EZN8VtD15WKvZPuCFNgUBZk4YTobwXsHxNEb7jCaxsmrz87oUhbaj2oJxkRpcxSxVYfvCqSRjNc",
  "key17": "3y78HDKsK6b72xhG84KBLHEvpKeCad9BVNxAgnm8VsSPg7B52k7GZv7wYyn9Z6jNDqkSxjcVGk8zna5jH6jFedmh",
  "key18": "4hJp5BjAiJZDkBQobbx3hRS4FJ5WJkyuHwWoLB3CMHRSDcV9MBSVWU8xoZdLEDjyzQpafiqK51BN97EBdD5QYRJB",
  "key19": "ryZ8udLS4eBL1dv7dUQGNYytao7gKNYJsUsKx4VYKh5ZHTUVw6qJsc1qHQZRAPgGUu3KKZmmZDx3HG2aJW12Lam",
  "key20": "KCjxx9PP7dUjfPhcYR5BE7JpaAQvWS79bnzUGbRkXBSZjNc7gN9Q3yzmANv7PPg2Wv9HYMVcauZimAnTULnArem",
  "key21": "4eYhDwBhdkoBn69Z6aeZSPwyu1N1wLmkg1Ff245f4bnKdAUhVfi1u1841hbGt3Ba6RgbRYwjEwDhyAauYJdoUrHb",
  "key22": "229S9tFADWSNgr6wLzmPKe4NF1utzV3Wa9UgwvDtSMAPwGeHTNYPToknG4ZqoHqk56PP5P4GGSnW3KjCDp8DyTpm",
  "key23": "4HNnnV5u8XyNZC7KdcuWdhRh2uBLoNsy6huqxftRrmAQVuXmcJgXo2FTUHgvhHpoDg6CgigUor6nKJQWhfMU1jVa",
  "key24": "gLNxS7MivvD8yjrunAHyBRwzN1EdJiy8i2g5VcZpNqG8qwi9cNPKpW99QQQaNu6h7xugagLqy6eUYBm2D2PfPks",
  "key25": "2JFDuznfRxtYzH7vJYgTMD8MEZUP9VFfwPRWubNjAwPGeQZzjwL4h55PcR7uuDwUMVLRnPW5Samk3xZedXJ6Tane",
  "key26": "2L7xpFUNTMJq9iEUfbDXtVbHvMMdKrWpCySW8zJqaMhcGoKNufSSbDiDPjf4e9hjRHxQQeAvPEJmwiscCLVS55tA",
  "key27": "HoMu5b8541MXnJF7ekWrEodUVpoUxmVqCGMDthsaxN1zCb3wvYm45SY29A6t5NttsjdTkAH7Qrfi1x12ipuHUV5",
  "key28": "z8YLh7LLzGzRggrzGtx99vd7aejkGHnHqC3agJmJARermKRG5DANUFtzVDGYpZwDWoLZoUu7wt5anb5k62gLKr5"
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
