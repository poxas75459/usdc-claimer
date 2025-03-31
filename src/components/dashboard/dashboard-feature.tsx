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
    "3ozUzQVdCa279uHfKdJr5Va88XigPsL3aVCgY4ftC8NiWZmaC7Zcykevx6rACcw2du1tV4zReQqJKgWfnvMwgDW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F41AKcid6rXqidvPFvfJ6UxEJfwrmxNj8NhNU7NrqJJrUGA4Ji4a4pxMiNFwSN4bbDio5ygmguuyMk7WjUtaXuk",
  "key1": "2NHQMidqUudLbJRFsasHPpUZejUWxCQWuvTB5FiCPGYaS9azgHJMKnp5pGApbB4E9Z2JHLtnqiDajyr292PUmZcs",
  "key2": "581vvgc12zLnqeAevYc4ecBbhVUnCVwq2YKU5qrA7zwEAVyUSd73m3hrKqmB9cEKF1ChSy6zbACxFVXJJZStTbgW",
  "key3": "3SLrBo5UNwACDD4ZCUQsKi3BmruirexiWApFPoftii9RhgVwkkCFJYcSsmnc1bxeFb3YMoHBTV4GKGn7heQVvW3f",
  "key4": "5XgjtkqE8EVEqQiySc3X8WtDTn82e311AFGp5gBR52FbW6wb97JqYov3GQYbK4BF5Bx7GmjRZKMMKfZc4ao7jCog",
  "key5": "32kGPSywh6FGG6RP7cgdoPdPYNDQwHJsNJ9JzRduwTFcxAFPK1fZgVJ9j8QFcG7kYRvcGpbq6gSw694hA3M829Vu",
  "key6": "2SH2wFCyKWA1H9zeh15RWTe8sn2b5enFeZMg39fsfwFYz3jYAxjBwg6BPjjCdsbfiMysoicKnX728w1wuFGAGGkR",
  "key7": "3kQiQj3B9LbW729mnttm2JgHQSHViQ1FuRqsgq1dmPypFrx3qi1vfwzU8o44sgEwdvpwKDh4z41i6KrRSvUtBZRC",
  "key8": "4FE2CLgc4gfLKmbM8vSjaFWkKcoDRVtfo4uyxP7vxga6UorX47pvx52runFw8HVuqqmxCYgHcPxepn6AMtz1hy3W",
  "key9": "64BBTeb9FArwGSKHzuoHQzs9QtM1UBUa9H8KASkF8rtMUbhJ2erHjf8ZWoG7CKyCQ3uikQHn2fbSpkUzZ9AdHamx",
  "key10": "4YW11tobVDR7ALMoBdZxsNUNPxKHvBHhz97tzLDBHSa9fEDaH2tudTyT1JKNVJW6acs1nwNmRjXgqGW8v2GDJK5Z",
  "key11": "5wG8qNzdxbcb9rWefhF5oHZppQvnmQsnrzhveoqr5YQ1wDHcftUJ3kQ6GQB7Hbti4cA5kaqTz7AngUtGMbLHjsz5",
  "key12": "Rm4a5dZnL7VKrQXYvXasLSqjdLiCiX7b2AhcF1Z4sGqsYNhuXr29Yw9qPCtbCs9nh8B4UZkzr4R8Gb3cX8E5b8L",
  "key13": "52Z7dzwi9d34ZTb8Rh155YbPkicmwGxsUqRtRq5CbBGdiBSuEgiXH28wkoLsxd9723Ev5qmCHw9zHSv796hRutVt",
  "key14": "2rN9PPZnrSimJh8UgHieqGWMw6RVXH6mZ3wjKKY34AFjqHgn3wkypwBh3ZQ34aYWJnPX3UwfAXM7wWk9fi8goQL4",
  "key15": "4qXd9irMzk8fUpv4NgVDXUtxLreJnuCz7Ku6cKx21CF7bdUXrU3c3B7mYFmgADHJHgxY2fuTa6kSqgBi9mCP42tP",
  "key16": "PnZbTyGAA6rbasw8ntYCFQ5NxXjbJy8aMU16oBtdmVegYi1HZ7g8rqpftTmNeanWmB2ghap8t8ZFokEnGyEsXFg",
  "key17": "4DLa4Br4gisR5xxAtvjqKg5ya6MKFiStKQLr2QDa1nPn9vkcHz1RGZ3k89HrE27FUTLqvzbJrMZTHjt5eW4SWoxr",
  "key18": "54CDSizJKMktYKupCJHwtP2w5iVvDjAYXUc9JG2G3E5asLhhy2ymA2WaEJvrjtnDR6cDEMHhi9Dmx15sBW6TxLbF",
  "key19": "4MBUEoxzKkbEEFZALnZSUAL8isg2o6eaDFUW8XoPL4TuYpyzb12S4p7JuZGEPPKxCdQrDrYGjomgmFUdEV57UWNd",
  "key20": "nZiPxgGt4t4Nw6i2LdAX9oLR6xyB4biKUjTNZEZUEjPf6sYYn9DjP47rUdrQBngHM3GPfqaH7Mgczmj1T55AiMF",
  "key21": "4Zbey6n7xAKu4DxGgKwDvSrJqGmQsoobjpjJgYAuq148Ma5EPKoMjLQ3ncNtQ4cnrQhaawmKem3MHNggZvERZfgq",
  "key22": "58eSQWkrBK3C3Frz6cfQhJbDRfyD2wG46Jx1p3MjAFxPM5nLAxxjamTdsRxksVc8hu4djC27Ni7g5E4we7GFZ4P",
  "key23": "bJWqmbAfRih1H1EMa2KniMhZK84PtqXmRaBWTXRKvxagyWppEGPtGdwWJEXLw3gQfgJnf4iuRy8MWKz5SB5Ykz9",
  "key24": "4pS8fC1AqoWqRpqqyMS5SxJym8i8yYsVWwJ4MBPghRaQDxieZBua1b3PYt5KQmQR8qsty9pFrMt3Bhq8N3Bce65Z",
  "key25": "8bZAnxWNN8QD5Rf8RfhW7r7MqiuQJzSPdM8AMHf2F8EFk47qoKxuwi2VcCahYMgxe5QvEQ3Z81rbQdksr3Xrfvf",
  "key26": "2wNvpDeUNeeNNUwPxgKkSCiABrzrVZmEQfFW7P3ep7wMYWA7ahz84jvLpzbRmxECGpJNvTWoJ7b4mScff6GqHZ5X",
  "key27": "4TkuK7jVAnGqfRLYXJipN5LAG2YLUiVKEAfEEnxNhtG5rQUnoDwihyd9ntgJiQAiMK4X8W21T8yJQPPRrYHxmXuf",
  "key28": "216mf6BfDtYUqogR7w8YSvkts2pFJeHnPko2s9p51bPwC5wezGsDcfjmzm19LngpZHG24v5FnAKvKV13NenKGUsv",
  "key29": "4ugmYAGtnzCumhGZCRTr12532rgbJbaX2VopCqtk3BP2FsALq4HBLvsxd9tVqwi8WrgAB8HKWKUvNHF3WrKiH4L5",
  "key30": "23qiFx2TvxgTrpch7P8dBiPN7qSPKiwHzhoFo2hn4XudRCBB6VUHVWcdDz55G1SHFhVzkSjyxTCWM9igZrArNXNQ",
  "key31": "4PYCCA1WizLcY5yormAePgvvtT7tQQii9zTwQdB9wA2farDHqM7jxUUDTCXJfqYbaYMEeGePWTnLtveLHLRnuhJK",
  "key32": "EB9dEWhWgioW7ZX6u1c9tJ5hJnAAGG1R4VyuSaRap87d8gHDunvAfwvgF8KfuqhR8nMmUBvrDHLzsJEZvqBjZpp",
  "key33": "5SXDdhwuuELjxVuY82M9HvU4c3vfP2ZQ7WzvV9r9pTnWy49yTBDdECvA5jEwxAQHgYVBQSQKBcRMNh13DP6SzTF4",
  "key34": "44x722yqaGzMnKR3Tur1aG8SLtogWzSeE2vBefnVtDrqz6Wo3T3Ynr4tUhK8WSnT9PmPQoiQn3qfmEw58MP29czp",
  "key35": "39EzG6piwr1S8P2h923zL3TZogMbuxqTGoVNjGjuxKt4XjkEMM3JySRxR5cmZ1fvhRzzPouUgnkeM6oDWKerNgZn",
  "key36": "58f1MqtjBAP84rc64J4DiyXqvpU5DvSSdqcfiJZXLycNdNS6Hm36NT9hwhWKpSN2wUepoAZ7XmezQnorpcBizLBP",
  "key37": "3MigF1KYAaVpti6s4cF6P9AvbkThdEvAj7rdcWL1u5vTA61w6U6E9k8UuLHetutF5pqWFcef8T1xDVrA5SkYuhXn"
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
