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
    "3511aodYoe1aubbda4Z55DURnCXxWLfkcRMjXQj9oFn2PgdnChXYQxBwBxQX5Roqhm8dsGLikeE3CjkVinCdCMdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2Uwy7KJDko8fRTNp27TdMHXUxzK1scCbA1h2BZVR21khLfmtq9H7fQE4XC7JmxTHypsUNb3aPUmPQr43tGLSiQ",
  "key1": "rJcSkHNRUFnzUxSXT87nminFRUFyEG3ZstSnBpbwpzj98Z9C4p2Bv56E5syHdQeypvJ2b1vqjKKpPSouyVaAXqH",
  "key2": "5QHfLNCwYK4Eu5GNHCWGToPfjBeWSb7eYkgsANL8XQ493EugRGJnqmLvizCSEB5zVNciVEfwEjNLnQwNSvWS24Jk",
  "key3": "4tjzAF93CZZf284csY9fQhPNL7uhhkUcyMJNMNGhXfJpa7HHv1AnN9JYSrn6K493CmW8WKRwUkCyUs1UZbZ7QTVi",
  "key4": "3PdX1oN9smspb44V11JMjQEeWKBmVHV2qnNHfDbLeYyPBh76YJnesnTvX721KHLD2qk7LTA8NRGERmgtyWHKgyq",
  "key5": "5unwXv4AqaB54WBQUG8Mv1VwZi2ERGUicfN4ZANUYhvsPCCjExoWrEr7qKnfP7Qbf1P6rMp7vhhoJi7PmLdsYDK5",
  "key6": "3aGTD16H4Abn9cBsGhgfX9V24GfssNWxa6n62oRS7snxAukFB2TiBPsvJsKz7BGdUFDqfAVkW1v35vhkNmrvj3L5",
  "key7": "UARGNq7VCz7q3FPnJgAhkTChZFFL6MjheCb7kjk4WFtXMzW8nymztVHkkDq8P66KfT4YmSYDJWepN2hAe9zqNJg",
  "key8": "4HoVB5Wzj3a1fkuMcHFCiXRrrAnk7TuHgUns7CCrbjP8WJ3bMcCCCFYwbjmvknVj6nPeJrdEYC3bPf8jytjjY5d3",
  "key9": "4enBR83f5P3Qpf8r5p4rsWhYBMcYZTZcr4yY4UhtZ9GcFRHQDH5eECD8MKqebvkXcYuZCaA2zfGe7hn3P214uniP",
  "key10": "4R9NsZy8GmobSaHKgkxiwnj2JTgTsbLK9rMk7t7vDQiAifDh1hJizshNkmJnQ37rbLcbGygDJ4V5GD4eeeizKv91",
  "key11": "5hNjGrbD5B49c8JXxFh7CmvaNNYM1kptB28TttRAQzStqTY4314aqV22uX3bf7Rg4hbbYRUhDh39tSppxsbDjLQc",
  "key12": "3N9KrcyMqdDNTpLo2GSwKz9GiXYf9u4VyLCABFES8FRh8hhK42wTGwtcMbLgXJVBpuQ9M9tiBUWT95FeAmDQtbGu",
  "key13": "42qTicQG11JCuSn4DtWhv8HMYupfH5CJQgPNGoEcpf8UML7r8cyWvVWaTXMjvz7YLxPdKfLqTZZHybkhgf2pQUh5",
  "key14": "4gtfG7pHNov1oMTfCypB241ARGAVu4hNtMf3oz3sSMdahDhYhBu56gh2M3CFvanvLaeTPY5CyjLtDpRYy6xSASnQ",
  "key15": "29fSo1XeH2t1SrxfW8yuixEFii8a9UMu8zhcogntHd7e5YcfGTH8V8gmuefzczL8F1fZn1LBvermyrdZgWqFekHM",
  "key16": "3xFYLgPo9A8mqoG5JVsph8Zw5wW4cpAcCPEV3WHskwVrXdWWnYx547zYrUAid69ZVHjXxXtEkqn3fCWtdU6NouCX",
  "key17": "61RGh6ZCdmks41qcH1gbTjkqNMFE7ER1T5kJqTzTmHkKgNdwtcGEcmN3Qwz3DF9TANcKDi9Fh1EvETBWjYuV1C1s",
  "key18": "5Z2EbdxDNaEKPKRM6b5SVhSTLSdc7BS8gzii6KuXPfWu9ftvLfHkXhCb88WDrQxY1JfN6vJR2UfU1UpJtLvKqJzL",
  "key19": "23c3NX4xNYbNHBzMBvGBQmvkfSq7cak9R26ysFqzMvoUnptyVK2agWRaXo2GArCs1GLtbkUDC2EH1omWctFEJSQm",
  "key20": "4LjdmhLog9PmEWvA14yQ68TsJrFDLr9pAB5HbeqtewfPQ6wEh2L4BMawf47qVQG97CBaaUW1qEX7ySkvsKLzg9nA",
  "key21": "MSRPN2hcPnU65H8S7SQtGZpA6HaeQmCgWtgEE71tKLn1NYdMrsybZNznkqPYeVzRc9XAoLVT7rATKBMt4QdWQF9",
  "key22": "4MXYLmwJUHDPMLNYVNAXg6dSsXmxEzZS9ffnNoU2LXPy2YStPYXDYV9KAcsKb5z21RnNE15r5EhpYe2xEfhPqTcn",
  "key23": "2BXuscsK4qzNwKeW9Y8RrnTMr2YjSkzDfDeavyYpwXd1dm8YyFzgCNjSU7PzJvGWfbkNeRejtohwmyspPmLYXher",
  "key24": "48VZ1r3ZikaQrgz4WnAJM1Ui4f3hyzAhmpDjcBTqG8Mm7JW9Lgru71mPubW4B7XebJcDMz6s3ufrQTxV5i4A7cxE",
  "key25": "2TTJr4JExFNWEXQ3bgGHmKW1wK2M3mpUXS6hHbNe7AfQbBbtYKvo3GA57jGw88SgykxcEnSM5Mdou4geQ8yRbHxv",
  "key26": "4CGZuuU3RPDzU5Jfq8u7mdGBtLDkMeK177NMPf3RxXDVjQ4a94xzt7vkqifaxU3MprnFttjkMTvGqSwSzRPumpbq",
  "key27": "2euGpn2hcbJi29Mvfuad42GxfpqUsi3cLw6qD1BDYdy1jYgY2tUUbtX5BaUJPYjg9D4ab4EQHmjZ2xDjPrK1dT4n",
  "key28": "3mJm1tKesoBkKmKi7sJkJBbotrB264bhMB1FLQrzpCZfWpWU5pgsM1HyaghRATTkxbUbh7ejqQSJkK4yocVTc2wy",
  "key29": "41uGVy65FhKCRJdRR7irxKLPL9P6cuep1gCTUXpSF4tW69m5kb1fzjxAeaGQPsdgUpY2mt8yAvGPWrBoGWoKFskp",
  "key30": "2ZRpmxmDH5saWff5kd5pMS7QuQWkWLsnQKwmPjF6DqMEVHVxs8RqHsdPB8kRXqgoZEky2SJbcSoNbntnQMFBEpTw",
  "key31": "3Z9aQvLSYJei1YnV547QMjMCj3ZjV6Ad4CUopka4Sgcnu8KmxGTMWkvZ92BQVwMw23Z2bXZ1ejNLW8YEyA2psyHf",
  "key32": "kVbecLoS6YY1QxQZtJKprnysybp8X7yifbfX8CojF7LU3ViQw4jzxZTFgUfB4YtTBC5RXzKgUcV58CsUUo85unT",
  "key33": "2fBKJpEF8q6QoyaqgkKYyatYsi1i5JknhKRB2zRLaNLpEoWro3wMraqzJLxj8eVMUffYKaS54gvB48PCRiLRczNF",
  "key34": "TgZgrMZMq3iWjp5jYaSQW71rH3qTPGUb8rzsBwLVZVJiCwUemScSwHKfDJEHbUW2ZWskxZ1iHEoHgkH2T6C9s2z",
  "key35": "2ytUfvvEJtTwENe1YnbHonVxCh5ZooCTjeMYmiDx9DpPp7eZQKFjQA2U5WcQHRgke8WGMRJ6axn5yb6tqvZAbdf4",
  "key36": "45wEZq4g2ziErkiPEwfzfThCGyjKQ2zgVcjTtZWc82W9oJzkFASVq41uXhLq1P1EyGJTXfWhjjSHFqBZJdgrkFVH",
  "key37": "RuXxwUZH1WijVs7JaWBRve2jg65HFQoQLNHuSFLCC5Q4hoB6kZV4pcdo41PeuasWp8yGGvoyg3tHKgc6WNKmQ8m",
  "key38": "4hXJnjWZCLB9eac9cbqWb9qCnabYAriJYxXgqGJmZ8cosdt1imqEcXFARwwwsfvEYjzeMueD973R4uZ1BTb9xkp3"
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
