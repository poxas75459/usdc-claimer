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
    "5Mi653Q7fdtyzVFfZKukBYsW9A4THXSGuTbHpCk8aJYQgj6diPb8hRQeNb9ic53VXrynAP74SCqHkxXgMLP2waTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xsSfErPCPP9THCJHst4NMAvcNEjqL3EsxAEogcJTrBfpujMeiSB1rzvnT17xZuCTY9UY5nWa27CtGFewgceP7N",
  "key1": "4VB8hZ1yeEEY8vdXNedAwwcnUMiDSUFyghrfseQkcy9Xe8hiUw2e2ecy3yXfpdRevc72VhnvWD24uXcfQnUNUvGo",
  "key2": "3xipzg7XDgiBEQ1pBpGvGZNkibZD5QUdeDccs89Jd4CBAxwBXNeaD6trFXBW1u5cuXZLxiR9Y72iB927sQ9addoy",
  "key3": "458FZqs6daoQd8wJQCSv2R11CUkBaFJoM7FkMg2SRGv4YQpKvrdypeUv3MqJdChRxPY13j93ArdXjTPe22a73ebp",
  "key4": "Gqg2V1Y4Yda5y2zsR3ghUp7TqqBwKnTvU6uHbG7ua6QrwMq84yrJVswKSWbP6EkdTQ8iwV2QNXhfvhtbGj9TmSv",
  "key5": "3QTZCjvwUGrqaeqaGXBrXrYCpVCMcroVsMoJ8zdhmFAAnhgaRcz113v9nma6X6afpYGuDKM21h4Q2qBsXdwbMXhh",
  "key6": "4DU7Smxy5Vtcw6P7h7swn4Nd3682iDGa2kYTbCJooBmJsu1Uv8ULUWy5vFJ1QKvvRJvRZmrCR5y4cMGLQyiubrac",
  "key7": "3kESAfaevbQTU5UooZtKYdxx1uk7fjJa53nd2kDNNKsfs9spbE7knthZtU1GoeW5FpYYw6BVqn2uU9AkJcKhqM4a",
  "key8": "rB73og7g7FyvbtXjS1ocYsNiquJQrGFVD3oVVhWTaQ2eo6SBZfWMyYEcAbyp24TZzhd5EaNKauczzogLPzq7cQC",
  "key9": "4Y5Pdnj8XJ2htogBMjSDf8f8EjDEEH3jxtQTxXzcLdkiNN3maGABQok5cCxxX7Kzbvc7owfRQJpxp37wnWfLa8og",
  "key10": "3NKpBkPghHb9WBEEdDh4AXDKFs4pgL4EUDCqB6gUvwziWuNAscfd6nyVSEFUNkNwAbSxaWPx3ADpwaYF5m7g14rc",
  "key11": "53KJVno4WwxAcEgwJyivnWciTL4B6mqkjvkeR7Vxb1w4XXR6MoLuhv99BtiEUEn9YdZxdm6Ua7a1PDdhjgL1A5GF",
  "key12": "4epqe4Po8ySFNLbhFBjB2bXMtQLccAkjDmoQidyCjh8S2BJNN1QHCojhRV2UFdmxtX4tQYE4VEL1pji1zfWppmKY",
  "key13": "2MskjDGjLS2gC19DtTntanCGfmdp5V7fFAVi56o59Uvbtv8aBEFM3hUuidQ6xsaHaH3pX7rjMAuzxuTr3rMubaaH",
  "key14": "8qBkGtcwa2hiMnyxYT6JYtrv3Tzcx7r4UQww74eaenrpR7UAiK5k3cN7AEpuyMqwJSsts8trcyWuVBJemqr31va",
  "key15": "5rzCwrZ8yPao4mAuFr4nDE1FREuft5Kdfc1WWy5gigCUVsZmtepso8iCQadxPS2qYZkW6YYc1Atm94JrKTanKUew",
  "key16": "4YngkibjWr43G6CZ6KMhiAwntwXhUAsqUq6GPoTJZSyQ2qTUKQ66iHVes7FwLfs5YAsRepo5dKN2boMMsZUmdY2t",
  "key17": "2iyjbTADjYLSjNgT9B5NVVoEP1VxNwUMiEGfjx9TmTkzFrAsAyjPmdLCjiNN6pMQ4tUXwBZyf5uVqvhxhk87pKeR",
  "key18": "2E1kTsLCD2UeGKgN8qa9HL4aLsUUgeKPvjiB8bKJwWoHnHnCDMn9jQ4yjBbWSJ1URiVNPLYSRCCGuBwqZidUNc6u",
  "key19": "3MTxhdYE31cSS9vFnRNLiyRJ2RCH4cUngeFaFtJfsvUZvx5D1btzH5U6PRHjNnGuDnhPpKj9zeXXvx6d6UwK9L6b",
  "key20": "5KT8D3sYkw5Kw6ZHnQkCUZPpPHY9eSXE8wDxJUkUut97beN367AqAu3cMkVV9yy7iQjXtFPmyNWEqxjzVw8vYPmj",
  "key21": "MtRJYd4ba5aYiJDaKKfaALBZukvhfkdCXNRmQG5R7XXeJ3TZR1WEUEYNu9KCnPutgLb6jYfvrnYFLon22JxFgjx",
  "key22": "3BKALvDbca1n25mZACKX9bQqDZ84sumxw2DNvZpux8ayq5z3UBxtpEufjgqQXrKrRdsGL57Lxhy9Amp3G9JWqYYC",
  "key23": "XZ3mJ5hReDk7zbeh4TVVMiV25aECFK8sKrwjgBURJR15HrcNkxxGueuWTYTCAhvnt7tnUyfY77zHMXWHadx6LwM",
  "key24": "Sc4sfiShXorP2CpsEmQhyxLy1PVtLjKSsYatSBnUjkPZYEYDRNabpYkwCp4dKfsScJaEbhGHBujGFWMv4mAENgv",
  "key25": "3VLfm6ee1J4ggF7AVUNVVcjyTqNRrqDgXrkk4KABoWhdeRMcUiAtEhhMcUwpieuhEowjarNHzJrxF7nx528pm5DX",
  "key26": "4QTaXfv9s7uAo4k3zGwhsQ5jo6UkVc9fa6eqaVydWXdN6S4fAKNKwtFVQ7NH3GD89mWDViqFtFLnhDCoEJzaZDYk",
  "key27": "AhaZo3S8KVqZPY5aoPNifeBRQ2RZiyM7vvXnmTEXSJtGhCNdAr5iZASUbBrs6dHDCZZJwMnbHvHEgR1yGVapm64",
  "key28": "3eri2xJJBhGhnBg4SogMtHUrbjNp4giD8cYBsNSqZJkfmY719KjQHN2jcJtMe99qZDMAPQxVpAuyeGXx2YPYpBt",
  "key29": "4hvAauQk9qD22t5ce6uoSnCVNH9HC1LpEaa64WdxzHfXxNXpRfvE4PXjkaJ9RS36JwaogShfe6aAzejtJcnidrhz",
  "key30": "HWcoxmxuu3RQ44qYwbhMJ88zfjcecaL1G17EQBKZdBnxxAb98jjYqj4NdApDNfT3XZMkcYB5Pg6REkpmmGZTEZ4",
  "key31": "3FRG8zbfb3awTG5fQsJu8qWcscVAZ5vyrXM474LRB6JUKGsfZ2qaw2y5UJAH6hW9wuJXcqEj92YAZ87uzDmy8tSp",
  "key32": "4qSCN6k541zSCPqFfV431Gu1tyoAcudWhkvfsMZghZQ58QVnt3nJMo91gdFbEdkXgFew8e3CuFHjPcNWCrJdCBsC"
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
