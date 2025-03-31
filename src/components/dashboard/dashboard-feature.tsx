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
    "3EtSK14L7RT54PRbx33JHXK4mP93GUtBKtqaDLLAtysYTzjskfcgTUgVipxC3f5k8wFMhX2pZsAkJYK6HdM3NmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NWSrUtBYD3NYCErkrQgm2HmBBE5gNj6ynYctcKJK47fdYHfWKmbju6XEbNVGMG7uV3LCeSumiQPWW5KCHampV4k",
  "key1": "5Fh6eTHLTcwcHvTKmQ4z43B7Z4t68mejHDAV4CwkCYHkcKdbPahw5p4jZqLZWHcSejMxwBcEwes7LYqRmmdUAPTh",
  "key2": "8b7anMETG2Sm6hNJgDvq7JTPXNaueJqoP2MwMsC7gaVdmv8u6USx5X22vCJ7yt3drVXLnToiohjGVGER3waNQWd",
  "key3": "PxRHeVM67Xb6hM2DV59iDdJ4dbWWXfVoUpf8uDFRSJuxUsdVjeCWJe6cVR1MdzvTHXfZ9tKCMbe4F7aBi5snY5K",
  "key4": "e82b1Ke9aRPbQqk6wpwRKLv4YCwSqpVuo5RgHMDQBsLHu2iSZNrhZfJ7Rur65Z56kRbZWVo8yMqfxZ9iqaAErsK",
  "key5": "2iJ3MJfXj8uW3sKZvUkTKC8cnamAjXXAbrRiNJ816FPAn7ftzGy6ahBEwEyJpmi2YrMA1cfJKonE9HgJe5tPhFr8",
  "key6": "3DuPMcoqQPouhLZfEfuRsTHSWPPQ89ftwtHebQFHQJLU8FbefHXMYAKmiAqk8FNULWvQs76YugSX3ukCMFSY5WXF",
  "key7": "44FZsNHqhTyJNTt3ojmujKDHtrteP4ZVmmt1GDvrX7ZhHkYMx8Px7B3YRnUiqyNb7FiHt4xqpQNAgoot7ajHi5TM",
  "key8": "5kgdECaLsEjCeD5wMWwMfZPnTqFL6ERxTY1zygrY5qCmruTtwdnGRXhZCwWtw3BenEUXLecdcxhCqeauJ9aACsbJ",
  "key9": "n4erfZMDcmaYrFkge4TabtW32rhRRSNw5KRNEQDGiUiRjKFJh2CnUMZcoyfxBq1Ue8qVUNK1X2GRvhjBCqL5qwf",
  "key10": "5sN9LgDmHjfaESxi4b8NFv5cJsmi5YNPha4QPGomozzoy1ms9ytmbjS8yXbvKCR9UBrfpfBf4XJXLjLCoR5TeWyF",
  "key11": "REyxSe7MZyXmQrJjy2vhqev4kQsCKDeUpTthdwYQCife24bmN9LyRZtM6MTymf8hp8CsD4WJcMfuJBYwVrafQLP",
  "key12": "3X7aLTpZiB4QY9PHq49f5LP3cydU6PmJpha6GGaLvzYGjScaXt7X2Vga4xfY1STJ2VaX5sAKe2rLyqp2s8UueGsL",
  "key13": "FbC8PjebuLjFiaPfwXTNuWTfRvWzghqwLb4hwL2daZYtPuZo1ue9QSbBb1ijTsQyWC57tjzTQhLrV4GWnZodtXo",
  "key14": "4otHthyoqexfD87PrfH2abEbdGJD8vqJ9jxYazkxmhWEY7eWHXBrRoHu3SXXrAyr8W7zfaAX8oYyC3yTLLvzgmhu",
  "key15": "5uimjW2GqFPuw758fSJazh3F7UHF2UG4umR9D1P5CFbwHrJBEqmS6WLNpjFHtaKGdVXhkGjoaMZS1J5s68MkxJgY",
  "key16": "4cEXhsRbhN5uxPa9Ef5m5P7QT1ctJFFChvY3jWwXLRaewgyknzSMpTCUY99FMW5voTDHZUfesGBBDJE3oPkJRYGS",
  "key17": "427HM6Jn6JJkhwLVbJFbtRHUaQv2sJgGWvRQ1rcKq1DdZuZSqtsiR4GpTEejBkw1fG1E1Y2YoXtwegbJmKcqejNS",
  "key18": "5yXsfcU8n3a5K9QHjDc7oNUD1oPwTVYt2nRnNPXuYNpxwL2dRhWecYJNTLvwWqhJXiscg4XQ6rWipbxUMfpyaHPV",
  "key19": "2LUZDApH3fpj89pBj2zy2BpAYpaJzdrfeppJT3v1XuknahSHmipucgABFjQFVenjTx6PRw2iNjWiUaTrmTerM7BW",
  "key20": "4jvv8yG6kn7pSQNzNrRBDJgXHtRzqwUnvQjxjFzT2YwLFp6DTP4ZcDsdSvTTcVHDg4BSkmFDUiWNqgQ7EZsrsCAX",
  "key21": "4piuQm2boH9qvYw8NQr5hdfVpAxmTTAdXtboVEsWh49dpR3SPJa3PwVgMx6MyZBrgdVcZUm8qJeuAygKvheXNzDc",
  "key22": "48YghmVbqALfcWUMZLhz4drKGLJc19ALoLUzMtujUVa8wD8gi7FFqMNnfcBknJNNWjHixhr7uLLHUr23VvZ6hJY7",
  "key23": "nQ4f64Ffq2VsrSWkGhq3mp12HNQiPzsab3swhts773sjAUtzaV9yyqBrJSnswZDj3W7W9TGtXLdC7RCT4Q7anJv",
  "key24": "2knfi23NHeEYX8SUyq2uN2fCdJbNHbXVATGbB8RZBFqRSJJHVUi7Yfd7fXGdXTYUdr2gHEUJvTMD6gzjthwHETCu",
  "key25": "57EVyAVrzjxAy1J3VPworbd31SnkroSR69LVzY4Xktr8FxuhFmTKox3QSsaWZZ3jnLoBdYs9vQRzxGo6KxbWjePs",
  "key26": "4sx57Yj7B747YsrY3DANxFv9YuztQX7N4CjQWzqoPchQkxesWUATFG98kjf6vF7aLuz2v7xM5SLY7yqC1Hou4woq",
  "key27": "443Nndp65RYMdEfnpDW5gqxGVji4hhJS3VK5rLX4o5kUHyts26aMfY7bTHf5uMkGUarNoTNcy2RvXmQJ7dU4KeUB",
  "key28": "5Lx58zKkRmk6oqMUyDfspfnR7kWLNkm4yigwz5m61byf396uBPyWw6oraM1ZkW6MQpHa8dSN5jF3tfPzynPSYBnw",
  "key29": "5riEj7UFRLG8T1gUJnzgrLpYxGF2xFHFzEJ3WU4JQ2n6m72cBbhMv9t7a3w5cqPECMR49NonxTVx2xqwh9dhkWF9",
  "key30": "4k8ogN58szUGbTg3QtF6pkeYTxS8z6EYjjAWBJ5csFPZgP8phRKTYE4LJ8uJjN3xYzgy7Dtz7Dm9xe8eaURyXfc1",
  "key31": "5rPuHVuVWW1bDP8ExFnAa7UDvsjwBK44hN7mo64nJ5aMv7BeEWQ5KLLXvn2hdLLt2vcBfKmSyCDgdynCqEiPhLTJ"
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
