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
    "4zWB19odq2uu6nQDMMnXbYyBs7yTu1ywtE58x9oMdMoCr6szKoAnJ5JsnJmXJBqx33C5vQfErpUtjj1W4gZ8hmy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QfeMCDL5doEzsRCXECwrdAg1MQR66B9Vk4tqrcWeKnx6KhCc5ffdWqtVy59FtwPGvv4itiPKycP66xW82ivWro9",
  "key1": "28ZpSwWCeXLZr8oj6f97pWQ6BjDqVMSMz51981dYoUavD627xHjcCz2e6iPCiFtKMqtPhrSUHNgjAbVVs4vocwUj",
  "key2": "48BZos7qchRdhUCBeHky5xC25DAaub1PxrE8AjWXZvqJZdhrL6xYYnuCbPSEgFt5ChvxzmuUnFmjpYKZgngTEAqg",
  "key3": "25ce6STwPbzsMZLMqFJNMr6jsj8zGLCyB9yGQu31vHhTM6aMEkdTF5Z2pzHNdHrAqjatAsDzqm1NaFMVBLrgvEnb",
  "key4": "5w2dfcUBW9GcbdMuJx24B1h2yqVSpJBjmFPjvyg336dahrZAb3Z37d2NjJwpTYEMmMyjQbVXnxpP5q8Jz4LeoX12",
  "key5": "31rGQLwsmp3hok6C273hi4xU7pN1yfaYYVE5HwfGn2HkA5eKcMjUAvZ4hSXLHyX3foQE7dByfSHKtkedFLL5FabW",
  "key6": "oAQaSQaEfH6BdVfScpmZ8HFYcDYfgfHeFgh41Goz4m9S4P7vBygM9uabUYsPbmj1sGmEZJQSvHqkYJ5PqEkUyCs",
  "key7": "3hKMYDU2wJtSdaMGGjLR5fB34Tu63nmg2ve41kwR3g2KWFUVYYUGaYdQwDYenBCARbLBCy4fNWFUq6qWKM1LXfuA",
  "key8": "2bhUUXxFeyxEiUZW1hdRw9HWqV2mBpEpkTUhnSmReRKHYhgZQJNxKZ6VtBMDgF9RH9QjAChvymVJhZMkdAjvWesL",
  "key9": "349RzpobzxHbsPQb7MZobjqcb62h7F74iyvCoKQSMQ4jLirLJitHTVEbCJBKXa8utdFMoZ9EnV7TaFtzsqSVvQGf",
  "key10": "gVXYS4zt9rbCNaX9q6B5kPxaKwbixHCCzBzqFGKzDPoouS2fNgWdyohk9juriaxq68rDdb9ua5erz9qqV6jCohT",
  "key11": "5z1jTaqqRTZRnsyyTQ9Wy3N2xNtr9dxq1CDvRJVEba4L6t6TMTqve9nbK9t4eN5dJPd1ZRkNqvkZmcCQA54NGGKD",
  "key12": "3cdrSruEc8zZAJus3q125Bm2JScyMTQ5ceMNdBx6cR1CW92RDhbZMP1b9fHnheKpw1HD6Q3t1CWsifCcH1YcFeVS",
  "key13": "5uZJjE6DURUEna28Ns5AQXYm566CNo4LFybmuM8c7BvCYd2cAGoTFeFaheG7MbS27cFvKjd1z5PhZQfUTphVN3uC",
  "key14": "3MSWTJLFjScXMiyvGArzf5HPF1va3rj6AorTczYn8UwnzSLFqncu5giqhv5TbfBXYfnYM6zTSayCRcKtRTNe2Uvs",
  "key15": "2F4e1cJJrU1WHe2k5Aff9M2zJSR2WbCUag8bKBW72cf9y8dJDy1SWkbrg84M1fScD5DsTKhzgS9pebdpLtBwyXgd",
  "key16": "3KjWuRxzreiS8Dn99Ayh2pJzeYxhfJnJ95idZRVjgrf9DQQMXrET5nmRv6nvPWjeQBC6NT5V9AwA43Th6vmwViY9",
  "key17": "63W7mktc8bcLehNWLGNwfwjHig1Vzbyk3jQd6mPiihdroDEX5pQ3aZbNkG5XwnUcMtJzWLGH14WRkqg26APq4pwC",
  "key18": "nrJpZogGAjdfXFEPQUgQDmGY1NPqY8d619gzK7Zbx11bVVDoA7pPmtpUMfSRVMsaXEna1SbbG2gSP3ztYv6mwjP",
  "key19": "Bbi2FBXkzQr6yck9RUpjh7Rbu2z7d2tK2eUZAdKRFXEgvRM3KoLMJwcbfPZyGQ7kZ2jp4cWDyFVG8MZwjqjE7zq",
  "key20": "2QEvu6LPeYGkdMdfpeFDRx942wcUzm4YfkRE1RKUqteABSwHz4FYPpGpSifzSGB1WopceboawZDxvdcxRcvmQZen",
  "key21": "5B3dYBteLaPj24cZpUkTeBdQk466CMRR4XMpwMULHnwwurNYZCD2rP8CQxZHWx67irbyLRC3u6bvRhT87ShcfKUh",
  "key22": "3T6L2n15qXWBui9LxuqBHUPQ6Unpa45YBPnyVECmQWmcVDzAR6rGBurEJqbR5ReL4Q3rMKSNkA76oEhhW8t3Poog",
  "key23": "44mWpuD4ykjxkv4zmoM3wHKTr5HjZvNugLxsDzizbQXHtNL4kQeRxamFXmHAbSvBLJaWeCB9ikiCj9WkwSSdeX5z",
  "key24": "5jBCM6CaPQTucNsvYea2Pq1Kd8DZkunR1Zcdz9pWRZ1ZNMApfhqUF4xmTnqKUuBKLEugzj1rKYQo6PqzVmCgtNp2",
  "key25": "3dv6eVB4SfgEFKzUR97b4JDwx9XW6p2XaGorAVUdNALAZFEKhrqxq5SxdDcgkbaCRFsn84Xqs16dbGGKhG3xE9Nm",
  "key26": "dc1ujab2tnyFjWhMyfoUMhEmAZ7KKWRjVJphVogLS9vgoXky34K3SmjiyEDCna78HffJ1zJd58ssQQu9NTStEMg",
  "key27": "3C5sF4xS6mC9Zn8Z78Cc8WZ65JvDSjxAVJySnc8uduLbkKccxk7GaG4yv8LXMzkVaHMuWFjMjKss5QvPQNz4pH1f",
  "key28": "3QLHCHzrbekbKVdCC2Du2z1XN8TsvP4jKGsqsg4hrMwmtPpbyMCWPonD9eAko1CXdAcu9NtC2zjXGBGV8uMmzW7F",
  "key29": "2f1W7szbeKZZ5pHxGD8JDGkzsKBt3mcqakJWnujgiaBTgHu7qYZMS5cewLjZkxHyTCLvmgmdrFhnS4iQasuMP4DV",
  "key30": "2C6PNzxeoRsRR8x82o3ZdV3EZQtshXvr9etAz7hf1gYAh3VqhQc4Pi4ShDrGu4cRV3oUFd4AtvEW9ixqnrW6SKTu",
  "key31": "3aDqmP6QTp9c6YhHrBGucozoZVtJ5S8eoz593aHXn9JGax8ST7xejtmVRZaazPkVvQWHEdoZQrBxb8PVfej5mbdD",
  "key32": "47CHogBQGbsoNJGMds55p4qXhNooKABS3MzT97enBFopyJZDBEDAtSrHfvJtFkSbem9oPJFvJdSnk2DFqXxu3JBx",
  "key33": "2mVWYQ6E3EhETcDMGsNpsgSkY8M5KogjwppXcpqXPtTm4cmgRKT1E3mjzV9zo3AZj6G3ryax5L1ixdeTrYHXMmbo",
  "key34": "MM8XQcQ7zZE2FW13T17Y93gydLYPfF8GDbUPq5TuxWoQdAaQdg1jEZ4R8XmAk3DGtVFnoJrBUV2YnokuubfQoDf",
  "key35": "4iFgdj7ByQCsyqCgb5iXQsdarBRQJ4ibBarrSigR61EKV8DVpz4jSCKqNQC3cpg7NGu8SqpSsJ4EnqTAG5tMEjzi",
  "key36": "2Q6wKs7qVd2472VGT7KPyrx6UUMHPo6x7J2MeNfZXoMZJByPMqZ7UykpgrxgRtLaM5cX892wQE8iXkMUUuXnd9wf"
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
