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
    "2EhYmZVeNV7c4Qfu8kBoQbpuk5APfkejCwUb6eShGpni6CFEwZ487AcgR9tS8UYNBSSkJWNSwqFbMhh147j4kaXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DxbECak1z93wcvYRCBC4xoXqnfXRZWwYZyaqYUcr4boCSv8HHywofDob1GvR5Qk6he5SbiCLe7Nd4jaW676DbX",
  "key1": "3oTrGyy6rJM8BngCaRMmnkEPndjaRswMRYGzNNU5XpEAK7TyaQt7bKEfNPvZViNokuuUSy1oVYAT7zJhEmZD8oH4",
  "key2": "foGZJdWS3FWhvuqJwqTk2goTUfq62LPh2oVE7v7BUrh8hiCeWEkSB82TL3Bh2UYVpNdo17eHiGqkCZsh4eY1s4S",
  "key3": "66Nv7z3oJby2xYpvsQm8xmvq5MkJiAaUFdNwk68wE8j8QeGZZE2KEgWeXAbEVQACEoK9iEQjHrt16znNo5T8KmK7",
  "key4": "3pQPWfp212fNhjvLz8Ax7ak8WpkLvRMLjDo2b3nDXzK3f14AaA87a7swYPmWyrMTLbbTBuUAFge8su3TSfDL5DYg",
  "key5": "29HR7MESR9L39BVtC1p79LDUEHx2MMkCYz184EM868oVdfY3uMF7JXJUNWtqHUWsqDwEHbkFPLxAuyC6mBoFqEDu",
  "key6": "51k7XEQtDZ8cxJciR5LdtjqbJ7ZWh8Bc1rSMCFCjoWdnXdf1sDt3bwjUZVHdmqeyVJHL9Cpdx52zxFWmehnVV2ty",
  "key7": "5Eye6299bh9NDWo3j7B47CD2TWg2hZfWrT3yfHqoqChYXpwKFcUfkA2SGo4UGjPPSq2S1XCpZxPHoadGcbZ632oD",
  "key8": "2dP3fjayjKZDHnf4tk2YgXYnysV4YUkWxQE5rED6bDKWRYjc8AZDoz9vtAGWgXkp4TfBBCr3RWSvFv3MaNsdAjid",
  "key9": "5zfJjLtkBffkMsmc8otCFwS5cGmoaEPQJ2S5Dc95ju5KQbHzFRYnU6rCkUgaSCFwN3jQyiZ8PP6zMgHxERXsKf4c",
  "key10": "2ZZ6C9p8DENap4SRg5utL71D54TtrhYMMGW1M6Azb8ptGERi6itYTkbJBij1nDbJPf31cXYn2kthBJjTGRfgMowM",
  "key11": "3rensBhK5tqHkSyps7jEJcvT9K7b3XQnaFdupqpHneDuv84AgDWAVbCcMmExU3LFGG5R6gUKGLqgxsTEcxXkRvpK",
  "key12": "58hFNhfDMfKwrqJPPqfU28fF8zddQDGbnLpe2x5LamxNsgpeirYDL8qo6RPQDp5hdfCPB3VwUG6HtuCMGd8AkyXK",
  "key13": "2KvxxhHt5q5ttb29RRKy22e7ikXVJ1DJtrYzmsfekdt7thyFVhFBHPJBBfjtYmYAAr9nhVmRjMVB74JZB9k8cfUK",
  "key14": "32BxzFY6gAHSQ1TmnypyZAXs4rXXEv8rmAGL45QCXuLPowPYqJPxTaYpKV7ZC7ZrwEyKKYvU7AndCPWPdFdK4rRx",
  "key15": "4arSf8HLE1DxZh6e4CMF7jw7ds8Azj9S2vVDQ3BCvpufWuUj48amT6A97rqS5WW6VspLedCDPRfGjb9MK1DHVUtw",
  "key16": "3M48DRXEDGhie3K9wuDk3txr75oQijo8ZWwc4wPhCgc46uNEKZPhuVnVibauMeCahDukXQ6xJqmWgS66L6j4J4nu",
  "key17": "4fQNfHzcjXzhyfhkLL5wUDbw3SH2uRL2N8qUzqTSWh34FpKcNnyyJNDPEFQoKsLnF2hpJXSn15vpuM3C155165NE",
  "key18": "59KEADfnoGAz6ZknQH9W8k6XHiLmfxwKUzdP6hF2eHrP3mzf3uZxTGjfBgyKLQHtvdcRXYyvydpMWgozDZUa51U7",
  "key19": "4Pp9CNdHGEpCNEuzi4swYT3rbHZhUt6Y97zPQ4JjbcVVhkDG3xkNM9BNLSoRc3LwBrvPQV7zu3h8vNKYiJyiq1yr",
  "key20": "47mRQH3mQKoke7iXekAWxLKdyvcTj8Gvo6SLx3Qhant1JA7AjTWY1BAkuvFZeBC4UbCHdt8i8aZaVSzMLPyUsCRs",
  "key21": "5qcaaEQHqX88b3jzKqRqXUv8e8CT7ob58E6wAqYmQriKpG6w2DJY1v8hMFH7Wan5mCnfCfXrvEfKSxvC2Uurr6g6",
  "key22": "5xuHt9cnQTrVSbzRtG97k8JMQLjW8Z3TsDC7sVXDH9zLuZHyWJNJaHHp2ivn7SiTAXKQCN75UTEuT8trrq3oH6da",
  "key23": "bz5ixjKhdRhUpnD5iAZAesbYmSRTqMtKwgy6Dz5JhMNTDosvW2Wn7dYd7bivs1QxLPfQHtzHi2VUhVpAXH5b7rT",
  "key24": "3bxdbcCSs3iTVXJnHh2mCsibHewRogQ9FXSB87U9L5FhCgeJWd6tmNW21YtgFsd3GEToqtXVe6UQUec5agk45Ghz",
  "key25": "hcCQqRaUPDEupzeC5WD4iPhdsCTtAHjFYJ6bWXH8oPUCfRXWidAwAuiQZddTHriWf7uKEGDdVZy9PSvoDrgsjhA",
  "key26": "2SN5vXZQNZMRp9RyR8PWZ5fKedTcdbyt3N4SK1LLhVV7evSmLPSZ2gb6qhbUepdifqRTeSU8x3r4PzWafhX94GPt",
  "key27": "4vk2VAyZPF5o4o4Sp8cBfGQjj5Z4rCuiQ1noybcbPo3GdqfVuezCCsiDf1TdzuAGtGACe2u28zr8KK1g5V5Edhbq",
  "key28": "3xezsY9kciJ8ziYQYBms6ZB3fw5qidEoNKi1FZrZtyiqL2iRDLgMCJddUx6S6tgpU249FVrSHvT8CA9RsRNdfHCz",
  "key29": "4YubVrQGbXSPnC4SamtWnpDhnFKGY5gFdTCt7AAPw3SJTbvYe4yTrJZqa1wAgqhhthzfFNriDp6nSREyjR2eMbCJ",
  "key30": "2R3ksejBTRqLXzGaytbnuWbX2v444WAA3z7wJXBtEg7edkDMs6voo9e4jNt4uCEkAKnNfJxB5vzedT22frjaRFCN",
  "key31": "57vAfwPU6bAGK5UuU1RjA8DXHJZgHF8bQy6iekwn3dNHG69SxmuHtWkXBFEVcgGiye9tXDxnwWF9G3AVqP1rUgBM",
  "key32": "5vuk4FnjRjYDpn4QSTqvUbVuy3cdkao5MYuyVjL5KNTxrZJWjfhKg9ebSrFGZVnCYSEPgSDX7GeB9ujquH1P5MTD",
  "key33": "5tjHEkKjiNEPouUF2qpyiM2QHhT12HBdBxKnsfA4CCfTgxzvjp6DsMabHqcCJuyzYq45rwgGmEpCvL2KgP7qWfH8",
  "key34": "3VE1CNW4CKKF7y9TTYA3FDgPtCz3wwLqiYpkDeAsDmJzQoiq1CBpJu1fVvVne5dj56mS28vBQphKnFrxq3krdADQ",
  "key35": "57ZFeEVEU7fmTubhR37wffw7B1RpC5V7h4igrifdXz238kQA6tNsE66ZX7B67AuJ7QYuuVVQbdVYbcS34LB5hMWW",
  "key36": "2uzf34WpX373Sev62mN8yZRhMRYA6wZTgREfNTUFJ2ozQ6qc9vzamQiEYGCB4DDW1SW45MWFrQTt1gmyGk4kopBw",
  "key37": "3G7xAf9AGeUWNsvY4K2F5VUdeCszsMmkLUryL2vKtFZioPiUpp1atmyKqDUsEa43UzVVihFVfwgMy9Hd4ueHa9Wh",
  "key38": "5UeBDDYCsaUqXXDmCx8M6coXYwKAnVWzkyQBWzVYKgWg4gY49GjRskAu1RFVYH7rNZfGjdyssAxaf2dYRyZKpepL"
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
