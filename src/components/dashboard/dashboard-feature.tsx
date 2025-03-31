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
    "5py5SNSR9zxz1JoswnssGASpPxvBoeXvVYYW5vRJ2GTvozEkd51uumtoRRWvC8UT24NqQQRzwBJMhPswrQANRn7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUVuJn3MH3y55sjvjkaEtk8LsMaBPpQHipcxTEmRX3C4Z4narak4gx8kZ2AxyAqaWJwKHKgEV7gy19gHGHQdZe3",
  "key1": "3CKDueX9k4ovDQrgXJDtuBLWYGQuiENwuYNdzKZ1evT42Jm59H7z4KRXfM2aYNu6HJabeYKv4v1h9WtECxhqVzJP",
  "key2": "3xb2dDhKYvqVnVyF8MkQmAzxnNZhUypE56jjP1LQspWB18TqH4d9NBZx7GxZuQ5pG3rutXQnXroayHtecZEU2P3J",
  "key3": "2WQm2TBfdCCBppaJ7WXhTWy1GZcFpjnhgM7ncucLuGpXMH1AHiG8aWYcxZ1hUJmrWjNKorridVggMHX5nxrp3WEu",
  "key4": "4xPtmj3hdftD6TS1e3mjVxmVDnCo8g5NMSt5g5hWeEBim1N4YjH25jW22k6HH9YTfEEdFoXu9K176tLx8V5n7Pmm",
  "key5": "4Jb3HjnhsH5iEs73uEGQxsKxupxA85qaXS7h2fWHzodDzGTmYXUhzbKBymRyTSd3WbshR2KEzkaWBLxRF1G4ZGoy",
  "key6": "3UZnstGiz9bAS5LZFUZkvPyKn6j7VZfpnQRi2Nzuy4AkQTLmVjcn2hAsvbx5pMPHDz6UTyatiKUzbebJWk5oJHNw",
  "key7": "33NjmUaSwc9Pv4A6Lv6RJBH11MpqDWfZMkwbeRMBJ3Ady1WZ4ECmsP576KBdjBaqrRB7c8YwPug551o8rkBXJ6i7",
  "key8": "3KCZqVgQACSQkHGJjhqzLdjN4y7VwAeZyCsCrwBzbdWedtGxn5SiFN2zbGxB8TsMU5ov3NQ3XZp5K89jY78DThFC",
  "key9": "3SnaM49niiR9uZmHDo9bTjeEicqWySXfZSCavjqRaBZrtRWereS4Buq2JfMEHZqYt4VYBQq3XehUiw6u7e4svGxY",
  "key10": "34JUDx5MKBc4LznJTXzSVVcqzcBRc8dspFfZBYVMHnLvQ1RJkfH3o5VJSW75Q1L5unh9qLwCFJDv6dLnt32T9K9F",
  "key11": "5nwXW7aijxP7ZGqQtFtySVQo1b6ELWioLoRJsxxMKzqFDbuFPytK4orTsetoMaQ8GoKKKHkTAWewT7XsexkbBemo",
  "key12": "3NpHSoKN2Z2VtoiVFrADWhK8CoQhtY5xs4N2seV2ofJLYeV5ECiwhZnx5RzrwZx5y4gupH13qZYAqeti4zhN4Jkv",
  "key13": "66rwXfABRWxfgN1UsdyQxzpfhv6jCAaxmpyL2oC6GzUoHRQjnJZAjdR2wAbKewyfEYEzXH86QdFJvBbf8AhZzAtb",
  "key14": "TMtX8rHkHuY8w5SQkZ4mmukJqXtNc4Q4CNAomfii7WfV9RErotsqFaeWwP2Zi1ZFN1UCuo3219aKNGVzk1W7Rv8",
  "key15": "5owDQ8382oetYkjB7z2fXAb7E2PGg3UAxjMrEZXwyQag1uHZwSWQ34E2uKyYzBj4q7bJApb9fMVxRDQSdXs5GV3k",
  "key16": "5GK7YRM5T7k9Wom9VVusEkhmjAWF3KRbcdPyrnvax4kP86abqvLXvT93RMX8dShxh1ZHVXh3XnKomtMHp6zDPHuU",
  "key17": "3nD3wdVdDeEBGxZjDGBgVK92dbsmmTcmfDconTBPYE8i5k2zep7vaXBQjykPzCcULyQ9t6HLUEyjtyHYKsHqz4PE",
  "key18": "5qcFw7mkUaG3ccskJmAW3taPx6WMeqFEGTxuw8jgMJa1s94CXhK7768R2n98LA99b3iKeKc3xPMWkMcPX2vaW21b",
  "key19": "v8veDFj7sjBacL2hL5beZr1aaaJLgrp9KjjMj8vudmpQ8qt1oJpEfbbdprYKTqkzEFbTX4cmpBhnZZsrEBkG5Zk",
  "key20": "2Qjt1eHy7xWveg5DbWXMPxdG7Uer1yfG4r7v9sEtEioVcmWZ6VGM1eU5PdPKJH4HMrW5tVJPdiABcqsp2q8dAtCY",
  "key21": "4sBxGmm56u1z8C1K5buVWsXKAXwge4W9NbaiFjmkW3euLt6anosp3ve38kdiWoru1hSG9FrjWDz5kRn7HroJEyy3",
  "key22": "3ouNzAB83BHbwhqCtsuYs12DpQPpw7A1nTzeZLBsmKEiEzHcnHnV6sBBzFCJLadMpMWL7uou9MxAtujQexMfCvj9",
  "key23": "xLRZERBFobcbVqC8ejj2sCSfR8odkwyuiAKCATA9RagDg3zCPdYjsu466XfZHjC48LAt7NK6WZ9XEHEhUmUseJQ",
  "key24": "2Kv8D2vPyDQ5h2r5jXscsrUNjnCo3Nd3CbTBLeZr1tbT7KCmLpyU7TJ5NsN6m25cwNnFcqSWVZvukm248zrjV7TK",
  "key25": "xmqDDNWp6NMNamPgxGYTL9NQBtyXdshkR2friUXd4qwpGRqbGjZ6n1ZSNf4WfnQC4hdAMjMu7BoDGmSc6k7GvSS"
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
