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
    "ZyURXnD9c3emxgTzd6s6ZuFz88uP2SrzgcUrPW5bS9oFBNWZatMRs23Hukg2mmsb5WPDr2ARzHKvjemscgz3bGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BftZa2tr53jGBwLCu9RBxHDVN8nbW4CafeJDmyMDA9wAC5YKm5ZSw2hL47pv85BecV5mVd7Kpp85vrgctH3sK2x",
  "key1": "46aQBttNMxWuZbPZYEzQKYHHngCaYFQqvcgdnu519KYuRVVfNPjhTNcBxSwMfMXCWGuPSn48ah9RAxLeyCbN6Zop",
  "key2": "3wGJDaE62u5vvsPF4HTCF62LPNfguX2nJcYqZ392xfcrMGWGGnvSeyPYN1oWZvdNkYUvrop6iTqgeWBdHP6KsEnS",
  "key3": "2cdzNNKf5BooAFZm6kqUqJCDCee12GAk1UCVsRnXiVxSQPAoxyZYV6FUVFfyKJUCHsWYm18QzFwnRrtFKwDvpA53",
  "key4": "5SUaEJF1HUKPbYikU1gnMYLyKpsiiBrumbSvdeyeBctLZr7HRAF2iw2LuA8bFcVD19PR8ijQqp26x2bf25rVvsvY",
  "key5": "W5UDzMdwCyQBNoBfgNr9QGWN48Rf3Tt7fBiNjTPKDj96fSFPiX2Ni1j6hVyJkt4zNdZ4HVvP41JfTMsdPLFXJf4",
  "key6": "2z27JfpcsmkqQrJxkN1MCzp34i72saE5saHLTzXsZHGWh7WBpfSkEQfFR2Ez4Xzc5mYKrDvTrGkXsVu5CkGBuFLa",
  "key7": "33aews1PjzsDvRJMaScLeBQjnLEBQGxwhLKyh6QvRKrgLJmYEovT9uBmCC1WnJYZcsQeqCYbtVHuVze23QmHBzND",
  "key8": "49VVvvAevhjBT3RMXVJT3JJRW9832Fo834furMU3xkPo18S9qwGYeYpdhGdxmtw2pnAkmpniFy3BR8Aggid1dRrT",
  "key9": "5dxhbFhWT2s8qDh8kdmZtdPYkMcAvKtmtyz2ZEZrTZ24Ra51EikXPUwhtWy47MzQmHEFbpFgPaiqYwkXJjN7eYUh",
  "key10": "mTb4giBzmwmg5QpM2PCERMa7v5ehX3enMfHHhhk5PhgVtWg1JrReXmw5SME8jWuj4K6FcLgpauPXe8xURng67nX",
  "key11": "2LFrRA991KeEPShJ3guMqncR8EA9yoUv4U8R3k8C8jqc2gNE3K7UoEX3PNvg1Poe35p5FybxuZTGkJkPVfLjG7my",
  "key12": "2vDjWfYqXPREcEmxuWNtKfMwex6razzcv3hsEaw5froSbRppjMubnH6JpE9UepEpS4P6wBrJdxM4MhzzdLmdnxJJ",
  "key13": "2ejLevYrVkUcW4y3AZV3EuyWcToGYAjP516CEEoRWAu2VCY1pfKqpJijzK7n1b49Uxo1MwyWWJ3hLrmaotJUqmTc",
  "key14": "3b95GAwyGu6joMFDafjHbftcz1QczJnSEBzijYS4bQVPMFW4xmbR6xFDjFJ5c6GYGs67TQ9bqzzRVWw7smkbrTBy",
  "key15": "5mmC2JuG5pWUSDzpnBZPmarBPkYJ6YCD57cXmTUNThUP2yRLXE2abLcEwTfEBg5SW2UpjKqCPmynH6yEN1aStkcw",
  "key16": "t7xeLWTjhErnCxzDuGN3y6ZduSvYwEr2nR88UH1yMV8Cq3nJjsRWnZGXXs2hM3JT5wu2roGRW4e9hAdpyMzD3KT",
  "key17": "38NZKNtia9qMUTDbKK2UprgFozaFDmkMBx5k1Nn6ek8pJAvSDoot11TK4BCfJDPVDAVNjUUWoPxbDEFXiWubhgKJ",
  "key18": "57wBFRMvWELzXcbFjRVscMUigh9phSMJREaDwDuBCydx6kDMoFRhxbUerui7fcLqBd5WBpqgfeymAz9pD7yryJjG",
  "key19": "3yUj5Au8iG3AoJJTWroSt6QHaRYW5rcYBJU2yqKaDKnppoN2BCXzebndDa1qhj6CojWjwJsr9tnpwJnM4iSLSa7G",
  "key20": "2vBaHJJdtpsqzCxswHbxJHGqe4fxz1hZmXwfdVyCggaLwTWpTokXQMmm6hJiKoQQ1LCMx6dsN7zzxzW39wDSorZL",
  "key21": "2vQBsobJFsufgUyLHM4QUzFz5ELShkARJJfv4kULh5azzXhEnZRK7WtSbkxZjvXfPXeLBGngAdTVijfoKav3ir92",
  "key22": "5c2r2tydPKoufmpnXfNAACWXER6iY7CsqPKXgi7tvYxpDtwGPRUGfgYM7pcXjdWF8sZimMpUW7Q2jHHM8VPcFZx4",
  "key23": "3qDooV3vfKwV34JkyhB43m1C3rg42nJe51uJSHcPyHtFontH1qDjyAQU7KZfE98N2L4xrjixvDpoqztnvBH6jryA",
  "key24": "29BVqDrn1W4ifg5C6WvwLHR8qbZEawXCnbyKVgcD9XZF8TDKZ7j8Vj78u3KozWqkBAV7AdW9cuXNVikdTup4PcGB",
  "key25": "4nYcY7PWB3udzCzrf1S8AWRkswJPg6eowr8wF8kXEbyj5FwPSZsWqhYrrUShUXfo7oW94DS3kqqB5AL7L1yiTfhu",
  "key26": "4fC6BpqmRW3qJvM2sBuCwfvdmu9NEducX7qaDv7eJaAopPgYQ3YWk5cGbVyQsvTKjCgqka8w6dEXW22szA84usze",
  "key27": "tY63V1p5iopYHJrCRESmrzkhDmqehxbYzahDf3rnYaUf6SCzMer2AcmNttX4e7ckahfHZeZmKeKP6cVjdPtRZMP",
  "key28": "2D7sE1gbQ79cPdSdyCoTQNvxW2ZhS9hD7dmyex3UnSnwHPJiKCt5pW2Y1AvvdZw6fWD9W8nZKLHrwS2zSGcUiAdi"
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
