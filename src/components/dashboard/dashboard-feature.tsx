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
    "4tx9Y8GgrwY8L3Na3AXRtQB9jdLrhvUUgAzVUCeEazuDAJrfpUhwv1cTp3cei2amyYxyEqACx1UPHN9DmnmZesS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66q7Pf4fXG3vZLc53n9DQxd3X8ssRzFinrt3rNQQzYqLBQTZh9ZGH3mvDdoSVfyDhD32NyiuPiKV5C3ZsNvDvPTC",
  "key1": "2ZMoq85wFxEpuEuDJ4b2KATppuHPVhx5VK62Jz7AyWrUGTGyhzwWZEjVp8FPbZHgY67W3FfBGzyQe3Ae3pqe2B6K",
  "key2": "3V7tqiRBFoYfnYcB9iFEpQT1fvNRr8FABYniSXMxKfB7C1zDAkKsR1TVDDvRVhZkoztEdPVnRThjfhrwRndyPD8E",
  "key3": "rpriYLibNyVVUbHFtCL721uMRT8WJcMfbfrybeMsprkmyNwBSokb9B3WzrUkZHjz6qxazEquQkMoghEDgFQr1uH",
  "key4": "2SUhJ2xHNn8o1gBwpw2wuaYfbWWjwDFe6DmmxKcnS8aGoUojZQtWEpFag2vgV6tnig6yLimmSfy2onQzfNVhfv4s",
  "key5": "5MhzJkJTwu45bWAEsUK3fd21LJK2QfJH4tctFKAkrpYapsaLyS97AAf51sxGGudPYGFFU6UTxnVfQyHPH136sHs4",
  "key6": "i84fhFeFS7LJi4XhYTS9vEgTFB1zk5Bnxecz9Neuu5t6RYB3XqMDBr9M7aSQczbRKiAGprhT7qTiBDVsUwweXqf",
  "key7": "2z2RXenyDyYSHJTYSvTckgimA2PLfbb4GLghabuJxguG3YTVKtnNxD38eteArucB4MgKKA5sqH3HrZjHgoRfxwcV",
  "key8": "2jwhaEuEKjXUxqnwrtE72ntgMMea6ymtmR5zU72aRGD6K7TXEvLbqKZwMvyUhgdn2FgTNh5w8rMcQMWyvgS27dHK",
  "key9": "4zU7cwsZUNVxy5yftXCA34tjVLBNm2zUTxbqDkQTtpCYsmdSfczRYZXBuoZ46qJCPGdAnzh5wfsdDYy9rdfrPP4q",
  "key10": "2q7kR8AzVAFuCppN26GxKRT9EnM6gKTAezNX9Dvpc9XBMDbKqv3CiHGHmenGH6WnTkebRo5CbLvN4tqfiCSgGCSR",
  "key11": "3mhCx4xAbnCrAhzQ4nHWdVeZdEMYrh5xCtfWb2i6U4p6Vv9rU5UL9p9AUGHQTKdv1DpK41geixR9CHyN1mJX59So",
  "key12": "3LDjeiUKkeWsCWWsAcS1GcCAKYJoGWmULBpijw86kJCK85a5NFE6UaUxgUxS8HQHSzGbaZuQ2dVA8mfF9g3PDMNX",
  "key13": "2w99dCjC7HBsC1Fjgq75JXtCxPyxkZ7NDhkV21bFspYnBiTY9kjsBxU5pUdWDkMcTBqjdLEoaAhmazT6pFtLMfWp",
  "key14": "3aUwErYHGnbP8MTPDcS2u4sdHqPncWHAenN8iMYUgYnjRzyzWa4FL3mvsLQpESns6bUCsBU5Gir7U6ZM19RmMwGo",
  "key15": "57qnRvq3oHdfK2TM8aZC1Hub3sec7mn7462woAV9BsMbTE73Uak5wbT4pRYqjMuYLBw6iC4xppPzB6MXnpnB17oJ",
  "key16": "5RFKcew7epyaoU9tpkxcGhYr8YgcxjWgzkDQBExxLXBdoKU9TdA3NMj8zSvQFoEAX3LYpmtd11grd9mqFaGUkA1t",
  "key17": "29eYEuxzBQLdGQjXp33pmVUW7LT2Dg8dc5Kmr9cbkzawQb42fSS2uAkMRPCcCn3cJzYsPk2TyJDgxAfCfneMs2Q9",
  "key18": "4NPGYsMFda26EsDgGwW6YGrwfDE8F3Phh6tWRs512k4Nnmjctyfgr6dFaeXeiV9CNuCaryDmK4L7x7Fqb5yHH2kj",
  "key19": "3Nk1TLYfhHT1t3k1UeSpXmc5pdiRPsg4QLKv1Bz6JfsjLUzthUgiXxDfxJVQiVrtS2nG5n7PLUAt4m1E6fBhixLe",
  "key20": "4kbKHiDHXN3WD15Pr7s86CNVHpPYTYePVjTKcWj7kY6cP5wURaUfzarwrZW7UZU8bGK4wfWxzLLxxz8NcaCM3EJo",
  "key21": "5uJULgc1y33YZNVfJ2VBLmBx6W9ZkTuYze5FQv9KmtvZzzyc7co5gaZEzqssqshUCPx3NYnEhct8cSvChktxqmgG",
  "key22": "V19MGcV5EYqybLdHi7p4NwR3BwYQqsAjn51uWB3fSrvo5bsTuYAAWRkJW8UNvufENpvVhkQF6gDvfsN1mJuvz6L",
  "key23": "1GpUJkVhMVWsQdshE8hyRPM4wU6QLHw77KEB2HDNtYw1FrWbxrfAf3QZLGktYMQzMkDmSkHKVzKsPr9XgCqjHeY",
  "key24": "2oMgTfgUr9eNvEW6yUECDS5xaToMBoq13ea8LLpFNkN5aYsQnqNmSnYBMobuE6HJs5Fw7Dp38Z926S2nZktxKPpL",
  "key25": "3CL2LaC82arjyRtG3RGpeMsGfpjG2gRWVt7Vg6tR2jX5JaWzPtovQAEstzMYrU8aLZdZUaN5kypSRVWi6bUKCjAV",
  "key26": "5DUh5LgiNKCVuWedVZj29xykapB3WmgFjo9zEeWLX1W7xBYu1S4xCexo9WCjHqtcgkFACucr87yfyfe7xqKKWJxN",
  "key27": "39HoFD6dR75DFPVKPnWLXp2do7J3FKssiqk6wvYuoHRZ73q1krzraQZ3CDVu1xjAfLd43bgyMnbQf6ShhuZ9yEHR",
  "key28": "62yZ1NHMGtaN9VeVpfvaHKRR5JiCFVokY6Vy99GATojfguwDGPp73pf9gMnHCEKsWRjjpMmUSqaAtebETXbUp2i5",
  "key29": "nFZuwj1BWP34tmQtePB1cQjJhAVWJJFKWXLhUmS8EcXF5a4LCt8kvPknpGk43CcwCcKwVFi3Krf6NLUinmSQ3JL",
  "key30": "3xF5TKMF5SZWUiAyJxXsfAGFdwzGPjRigwRvnw2ZUsBb86wY5oVzTW8YkhVwy2eiaQV8k4vipHkm7G9QeAwfPi2n",
  "key31": "2ee5MzwyDPFFrEDWejqa52GNfkh4Hfzn5njSZmxrS5aPSw45PFyfjCenq6GNVaDtF4y8WP867Ho6aXUBB9bsLTgP",
  "key32": "4ysaV7rqn3QoXkQ3iFYdCyq2ehCG1WRrW8d17iDHcqq7BkFF4yyn8tFFuymXB2iu3bErTGwgBTNMptBFEFHm6PZj"
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
