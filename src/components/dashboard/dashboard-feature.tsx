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
    "4inwzkfzKKPhH3QBkvmrCB9GC3dGbEU5D3MNXfsk5QJZdbaPWf43isyenhVToJTPy7nxay45jMfk2Kz7jknKBzSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYX3cUDiFcYJf3eRbDzr3utUj9kwGaqHRESjbBNgXVp7neHWvTopuZWsu8DvocKCD7e557mKu9zweamsDKXgoWX",
  "key1": "52YkqNNgEaGK12XA29T881bqX8NpsVizUWuJYhtUsrjaHJtBuTqksVdBCNWtZq1Cf6kmCaBmJjWycMJ5hRTcG4z3",
  "key2": "37Jxs2LDHk3PRsjczXKq3Y5Q2fy5A2QKKiSfNwJLuZkSNS2px3k95GDH9KTzYCcnLzLbqJw7qGbsX6Yh3wzsXcHF",
  "key3": "4JAH52bAbU1gV7WrLfnVkb34voj1aSCWVXDdJtaA1vBtauHnMnGa3aaeSpoCzzuuHJ7pmMudnCDbKEwAozJbwVFB",
  "key4": "3QtG5PKhCEeVgJ46oy2mm92RKw28ZQtMsosjciDQy77dCyzYZsKwjqTvXS5xwRWEqTQ2YGsMkPa4bM3gKeCyEKTW",
  "key5": "4MbgDtDxrsxJGgg7URKGNr6f4rjvPZw2DDE5oYzjKT9apVaM747upomXBBoekeBHkLL38QFhKszt4sYTodg12WuS",
  "key6": "42vEdSQoibxr1mqRLDRQfduNWfwxUYdXuHZjNVPttvNZLu6VWdoFA5Rh4pj5ZrJczJhUpQN7mJzS53FGM4o9Z8ew",
  "key7": "XKJubQRLKBjfW28SsAAXsbsnxCh26pZWG5QJyj1ozYZ2CpCer4Prqt7bqJEbNTmVxvthJeHbdk5SLimvkdEi9ZR",
  "key8": "y7suMrHwfcEJNpYTJ16daNRb5MgDnqMsVzjEpkZUdexcEBv3hLRDx4KS1Kvj7mnx4dtENW6CSq2g7rueDoj9tHr",
  "key9": "i7YPgC7my91ptfDesxHU5AH6pFeWiS2zibN9mMHuftJXQA1tiUxMZyn8NRjTPwNUZgGG4zKtev4sNm18z7FSauT",
  "key10": "3tAxKs1X1ranCk9uYzynLKkD2jBSJvpNjsGW81woqEFJAezz9MYnGaq4MrZeDAcTWVu42C8QB9DTmuB1NWph9Zdk",
  "key11": "4octFvFGAKTzQM27S8hBnpg3WwZYTiPGG8X4NQ3NJ61QNwTU9m7xFsEEzvkZBjRHf2rfvoZRJYvqBu2T5Mgkuap3",
  "key12": "2aNqNgLi6EF2zjq54ZtQTNppuRiQHi4Y4xf1CwaR1QWHmmk9mF2XnvQNFUJ6Dz93pvDxqqbj9yeh2HwDFmyBfRqZ",
  "key13": "4wPYgW9Lk3EzjxvLWFzEYwmALAL8Toq1t6C39s9fpWqo7ZD88Z65NnmXPUAunUCbeMMxyKtfjiyE9HbDZcML5JT2",
  "key14": "zmdZPKa5xvZUgoBzuBp6QAE35p8WQA3biZT1YWaYqznk9z5yLqwVQ74NTYW69b3jHy9gPAHaonJRswb7XEUU9FR",
  "key15": "2UxNpAdnPLTwhDuMMurYE8x9jNyoKmau1CqamEjYUuqbxsiFXKHeUY7bQ8zk8VqcUXhgwqpf8xogs5A2pmWEjJrM",
  "key16": "552RecspJvykrpyC1nivAZZZv5358x282g1zs1CFeJTBfDqdnWi1wn6EFVZmFNzbMkqPpFq5EKKNeHUEyaRuPtJV",
  "key17": "2qLmGfDGJj75BoCZGeSUju7mgmuE49VP6LGgDFMXWHnUqoTPPU2vec61s5DQd5R5euDoWqQS35mVtiuyo7PvaqJ4",
  "key18": "YaYQmCz8gBKt4tWEHLFRqPA7y9d7HEBYWrApDTeKUsE5miDAMC25XEdBV6dVh1qAt7VmZtWnsKUmFdJod1QgZ9s",
  "key19": "5sAhBsUXck9QoTvqjoW54g5z1ozB1eaXqjkVW9im2VhJaXMgRD9YdFjn2U568fKMfNTxg9xegLbN9e5d2dDgGK6o",
  "key20": "thKXwPrJUWxtqWgpt32bVQKikrkdcq8hfaAz7szJs9rUW9PVTYZ5HLPG2zDbKq8YFdmVgE6Ajsdo2GZNLowRxvD",
  "key21": "rdsJsZCbfEW8kxzDDWdpeQVQnknTzdRTsPtBtnRpmGuVCTzRT18uHaEkQpEi5yvVSHRfG8vow5c25AGCvvBjDvt",
  "key22": "44Pe1xPAgNEP8SUD7dwHsJk623zoNyLYBBtpG3GYUBwAtWqt8jECWtJZnZ1Fp5dBcHsRxo3MxYhk5K3dHctyucjr",
  "key23": "3u6FczNkLvuTHTNVXzkL7fXRm4UUipGVGtVKaGwn9CcxTmdmFfNFdo3Hd2pcjeeQwmYqR6Wd4Gq1dLrnRKWHvR6J",
  "key24": "4sMa89j3xZsgeef4pY25hzZmueQKeAogFDGUpgD8GdwDzPDhhaxD8xwXLmWoSyzfHAHpY8kp8mVXXTejSMimaQq6",
  "key25": "2qGmdbQaJoA2wpR9jkAG4Q1vvUcRTwY9pQZDqBrkoFFHPrsLhzebCKLGBjvt3RkZMqfaTuhUv9nDxdB9aMPCfBLz",
  "key26": "515rsu7XiyVMTTqbdqctBVGBmxQt3HN1b1N6MRZFaZ7Pmy23gwVmjzFvXpnrp4UoZukSzKKx5HxnUchETAAm83FK",
  "key27": "2P3jBjzfbnaSATrdeScVk47n1Pdh4yg35YmeqAuxNeUytDLTJJZcesWqdvhqGuzzXQ8t9ETuYv1zzwQcbHWwNsqK",
  "key28": "5KUzTcRxjXzcWniq3rByXUyodVH5JCZfrJjeWFg4o7LB2PNCuao91645GADDk5LVLyrdKStKxvNB3Suj5RJn43SR",
  "key29": "3dwAuzaBE3DhHRwp7U1USQjct8Ey1TemZTpC4CQWCUwkLP9g9vFjz9HuwVNgteDexja5kxW9K225dnYowDbKNoUT",
  "key30": "4uGhjJVLFUmGZR9qSNXvcrQ5JF7MctWSRAv89fKbExHGtjp3aRj7eDVpouvmGbqe9zBmKJoyLxkFi4KBDhvemxHr",
  "key31": "5eUsQRBfKCff6vJX3dQ5VDiWb2GDF8cZR6XhnonPrCmKnwoz2GUSHifUQ4fAHiWguGZKuoHVbMyWhUsapUM6jzz2",
  "key32": "2Q1SeqfF7vHCWEWKPYRWHhukCsWDM7boMUGnHi9QrnRz1TvdtDGq2J3W3qqCfivohhouqizD7Fs5vCkd2xWmSEV6",
  "key33": "jG1eFMbMxL4EgautzGnqnzZNaVLYPNBp9iKGvK1cCULD2t3pioHmTz43fNrchA95iqGcP5AGPbQxdjy7UwuL2S6",
  "key34": "bYFWguXVf6DvLrc3WqsEgvg9NPcP7qre5QkbeCx5CJVAN8iwV14AJbZdm6vXtvJqJWuGb26YNvQhksvuRCjGtNx"
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
