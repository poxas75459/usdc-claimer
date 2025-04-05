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
    "4TNLwF5SyjKGsTUkTAu3L1PyicsAhMVZEP4Dx3mJ3T5GQs6tzYGt3GyifKeF1qpcsFgxpRjKrBzDPScPuqQrK4AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNGBwTKgoMownnZJhQ9dAu1pQSixGsJNWmr9GFW31xJF1ygwfykeK66Q9D1ZQAJHHSh55hHxEyzHUC92K7M2x8k",
  "key1": "5vHrDad9BMWWsKHG5m7rgpVJ5NsnGPAFL5BxUHZiuCMpbj6QwHUhQGXcfFgaGciB9LB1s32v9ZqjK67w3SZjVQtU",
  "key2": "4UjBQJsrXLMihTB61Q7WaGkd25AUamg3qdtE8dRTMj2gQNdXwFZe433LmRDhVsEWbvjP9AUaoTdx87P3KU7FxCPb",
  "key3": "5Qjx53imfhrQaaSMWrB8xk8oAvMBX5qSazN2ncYGew5GVRuwaXzVRRwQqan3JTBJHWH4oewNvL9YzVFnXUgVEvAM",
  "key4": "41UXCrrY3D6UvnPHbBrXWEjBhENHRnNyFu7w9miFNbVdfEuSR8Jv6y9Fdo7LJ1qrqZXuj2s2EASg4HLNGzEgjkXG",
  "key5": "2eFL8xXyNngtUfaCKDd2c6oAJEury2mtqr3272NKWiR8TGU71NskWxEskKjGt4nDvDHpqth3HYyewQQh21DW77UN",
  "key6": "WECMm8SfXsm9iAkLg4UtigXf3BFioCtFMZPxYhgKsfhLu7Ai2YB6vhciDwX8RUV7Lio2MFfMcRtNcRAAf42ZN2y",
  "key7": "2WZsfiqPLgLmWthZ1s8JTQgCT4YpqJvxMzTzPqkokYbSw1idZQc9yMRUTMYwz5aEcLzNATDfSERHvdsVbbBZ14Hu",
  "key8": "3t4r6A5G2LRZm11kfrHqkHyi3smWEzm8PfpmbYKVHBP28oczcWYgi2ZJCuV8PpbmLZARdQ8jcm9p1KRcrN4mtDbp",
  "key9": "4XsNphavWFss2hnSCUimb8neRTyusnq2k8SxoHE9zis1p7sHsYHyjZygmtXA5Wnq5P9xDrU54n3oCH2FWiM96QiS",
  "key10": "4VoQQsxZSDgHoBjQZwsjLuJ4G3QMtujobwrPScfVAZ6soNjA8N7GrpTVnaKHuKxAyEkbC5SgmAYJ8Sh1UTkUZwKq",
  "key11": "4Ucw4MkfNNW4VzWqbTVso6H88Smk5Av2YqTD9WPvMMRuAc7wRqNrTgzyxb2qhZWkdFogszkrAkisbXsUSdP1t6c9",
  "key12": "4YZDuG5EypjBDN4q54cG8qwn3zo2FisnZRSBiEzFa1nNvvzMBBdkW3Wu7pgnZ88YzEXA7hypbVJdJzw5tEvdZto4",
  "key13": "EUqq3wx4ajYJ7nVMretxcAFNE8G8rUTtu4kaqaUeF3rJS4Kc8mrjvvEWhejR3eQi4JzGngWLf4iQCTsu6pAikb9",
  "key14": "2zkfk5TXA3W34wJ5uJi5LvvYG7c6EjoJ8BUcEdFZxowmTTAU6fB8uy32t8izMEhPR1uSpE3p4N5d5ZGx3zcZkfgs",
  "key15": "26sKrTFeCBPRhgQDQ9EV9h6nzruBXMfmp5NSomXNNfX4MKmVSmpJk6us7WsoPG1KUzhn74pkck1YkbC4t5Hh98tR",
  "key16": "3r25Xc2J217SzScqeUi9o2gz12UZjSHuXe1khr7voHb6yXKdYiqyAY4128kpm4bm7hfmw4Jeqv3ge5z8kK2eFC1q",
  "key17": "5Hsov7HfxMsykPN8mH3bVUT9QGgS8QcHAdagqLrEg1Wy5EsEpVbH4Bz1KZfb3tYx8A7hc9j9jmbjdCwniBXzJ6xv",
  "key18": "4jScGjosnt7pRJ6i92i3XwLb4ayzC8JBf59JwXcF7gqyZBXs45BSqqYMm8qngJUM9SnQdRmBjdCcfvYPDmhU4Ucf",
  "key19": "x21qGVJQ3hEFh1toiShY8XEdrJ8H15SJCrnRTWpvCko5iy487GsZ7qgfnjvBpUBjdc8GVxbLXFRfQjBdLqfNozZ",
  "key20": "47jJSNahy1M1XtziCP6oM9Vbyz4inM6kDDofuDvy6nwJLoWFYvCa77TKuFcv5SKGWp7W2NT2bFLdZtZs85rHoKgc",
  "key21": "3k2Xyuj2PKNQd13pPxh2fetyUKPNaCuWVjQTnUj5Q68sb7BjrBU5hJV8okX6nQNj6hgQvXtUmP9BVHqnP1zAGyaf",
  "key22": "2hyzPLsdo1Fko1DSiKGDo1ovn1TRFvN75993eFUa6V6n1xttSjP3J1DaaS6UmKSLgqjiXVB7exoKZWzeSjiUaFxk",
  "key23": "3WTTqSAcSwpL3hZ75ugVHjw87ydMVbPgscauHv43DPucSxunh681oHqpVjTnJXskiuqF6trZPUns1XCJUKCpzgKB",
  "key24": "vDCwxqc1Hrt3HYgHcKn3G5DtoGBuiPyXewdgp8vYQRp6ZK4cz7jLFfRJxndyypPTC9xgFWU1YazBmtbRGdBUL7r",
  "key25": "5cToBKeqyLZETSYKLzbsJxxX9ECncbPua2AHC3ksCd5fXYLU7oopZNDcpt6NLrijo7iRa2ni61Hxxi8bb6MMpjj",
  "key26": "62Y2xPXVDNtRkHFYwQh4XzbDYHbbYxEWVpmxnjiKX8QYqFQrZH9SewwhtkykUKLrGNDvQYfAi5AqbqWwEM6tZu8E",
  "key27": "5hiBBBs6e9fVgRJbM7gWa3BNJ7fyCQxMEExmhpLHUDBd5dwzidxfExUk4Kx6WxcHEdigYQY9qZ4SUYtz6vcg6cFm",
  "key28": "5KmrmUuNXvSurTJis2fquyPAUKiag6G1sm1q4gSfDvrxZJvXRRuFhsrUzrGSh3pKSFKomxEp9TJ2ZtUW1H2PTYkn",
  "key29": "2itNKcMbpMhq8ANW2kD8YN4rWR3aZjuL4ZXBzmvbwffXJ2GHQYjbrRgTTZrRFZjfQRberx1jkNJizZ2Nj8xPQWMB",
  "key30": "2xaydHcWgy67mjeMcjcyyxkzxMbwpqe7VBpu4uq3oRQ7teGxHA1cdgSMs2W1A9pcrkeBDYhK4jLpFMdR1bouHWdV",
  "key31": "35bo6ENBoij35ftVP7kB1BLT4D7GPm4Qxyg3fh1RQcvsiiQhiN8FAwFFrAUpM3rpm3L74LjjAAX83obCNH8x6mtg",
  "key32": "WT7VFkTbZ9eJdEr1Pn4FXgaFNkFth4fHdDUMkRWbQ34KHKBfXUk1aS6mKbXqEe4dD3duYAvDDbUM5Bf3nTTyTTz",
  "key33": "3fZ6dtjPa3jnaXq4KSxacESircvaq9vV68mNpnAXScfMfjBUkqKduGPQXQpBQJhAMbwg8omSc6CbxKhSpZ4RLug5",
  "key34": "2s5Dayq1tLgtJpD58tWZkEQyoNmN4ofR5eztWhkiFubHtSzYWfqtZE938HFwHy9UhZsT1NvxfrRqNwxbD72au4CD",
  "key35": "4cfK932nKLztnvUFVU4FUTAaofuVtRBucNp3btPhinw2n6dCyZCEiXCZxHBx5qHieT1VmJaNvhsdAnpVWNourP2p",
  "key36": "4ethHCkDNB4CtWWxJJ4qyJtoeZ9BAeUKPZavi94Coguf6z7V2FEEWbXWXnSjdhidymiFKWjxm8ws5NRXmix8PBDg",
  "key37": "4cBjua246KqDhxD4MdGxZFwvrPa5q5S7FGxy9jwPUGL68jnUBBPHpEmhA6fmR5CP2rUPjRxpMAPuBgWXEGgNdnKP",
  "key38": "4YmappnySQyr21LkhBdsYKxqL1fBHrJoKg7AySG7w3uXwRtZZ9PXLsScrKV8Ro5zyjZCJeYktXMpXypyHjBE3KA",
  "key39": "5DabvQPjQifSqb8Wfpq4TCAhMmiRih8vMTmSs9YpH5xwGV36b2RNw9D3kTJMwKARJWjeJeFimu6nGUxXddDc9NTr"
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
