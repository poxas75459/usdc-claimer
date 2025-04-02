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
    "TPAygVHJTnSx2MZDkWYaV2vkvMSA3pJpCurakNYQoCy3fj5NLdmKh8Whi1iWFAchmVzUkSUfon97itnxrihtNQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTN9MGikmmPN7qQxY3t26w4uRzFrFw5HyZiQxcTt2VM7YM6XC1czNnjeau757ppAhJHnUzQLCA3gwb1VyFzbAeX",
  "key1": "5v7p595C7z34rd8NB4Q8iQAxXJK6jypJGJy2ETGG3wfva4Y7dwnAeREuUedF9VWmNtvUR6guZEg7pSDoZirMVZ9Y",
  "key2": "2LZWDdxWE6A3qkD4ufFFMqV7Xt5H5EJ59NK9oFspPeQ3TXmLUqRWMnxLnikfJpHXgZBeSdjVxioG2rDYkKRrMprX",
  "key3": "4PPi14VZsVBPRhNg8ihh9VvSKfX1HkQ5n5UeWKmixojC1sDn4dduczU2bzWaFJhbUVosRt58yTVyjJsjRjAjKMFK",
  "key4": "5Vvt4X3NrUZ8fovwjsqDqKGPnmC7fQpgGTXPn3KHbZw2rQQEvNV8D8U5paXt5MPAVWgJyEHMDfnebXU5ajBxnB6B",
  "key5": "4PDMPP2ZeQc26TjwtKVqfoo2PuSve7wZGtEMr8S7ofS6n6fCWogNRRDpxsr67MGyQFxwoQ4r4PtV31y9LYqphdHW",
  "key6": "6xXUB8KbaVbroYEEKHRpdbEs8fBc91yG7Go99XuncayCbNwy9wwcvQ5PzxCZ1fTmBk3GmJZVnroUA26u2JcMJUR",
  "key7": "39gv16RHjXGYaHRmftZxwedH5JsxbA8xntiVH9cGZft5wxGXKutQ9iMfci7EFjFr3yjzjtgXxBwBGMTRmBy6hmMC",
  "key8": "sfcSbpXqxFs5mF6fvgsc9Pe7iEBEkyX3URZyBUMQQoRgfrsCtwx7qqDQ1NyTChsnztDgdW97ojCnmMBbqLHaYvm",
  "key9": "2CARo46v4v7GuuxRgbjz8LCdQLt1bEvEXv3BF7UzS9SECwSs41jTddZMAgcaTHoj8ELXKDUiY3KnahT2MEAJyN3o",
  "key10": "5yFgzLhDFEMXpSC1NXCyfaQNFAoR1chWq4N761GUkJVPaEwhfnL2ae2egLgj4QX9fBThUgeeQQTsYCF3FUrDVNHi",
  "key11": "5cJZnrHXRe8tezEdz2s5Bzxn6CFu2xFekqtTAg8UD7MUZ6ajUYQRQfeeUmk8u7XUCXbsWz2ci4ijz7Pqe3nEVudZ",
  "key12": "J6E8ivU58TCzv53M6QCZf8qbaKR842W8JEtUoQ15zaDTmuyoF2i12GpgPZ3fTgGvyxXjhk3arQNgGUcLcjCji9y",
  "key13": "3H2xE7hapEMK9qaJecPDDXFdhdgUQs2pRnaaboncXYaV9wZuacZZ6p6uEQNQZQ4Zx2XffrdVNxfuJJYkcBzWHdVv",
  "key14": "4p2T6wSr6MfuHhjiFCdHApkFYVKNqxdWrLHqFnZKDtbQJU5Qjy9JBasR6ftbVvkuZNfWEGB5vBbR43aKRmfsMooR",
  "key15": "2GPwZmfkp8PzLN7FUPdETSq1ZDx2bohgicn48F2P5CXycaZw4NvTSBMrGXapaR1gdWpGjGbSQQgJ3NgUZxsL16y4",
  "key16": "4PjemG6LvAdRWiEGcHpXgr4U3SkTkq15NxLqzQSjyFQzueRt3qd5C2zujPktPFcRKWEk5d9eubrAGixwYW3jiYau",
  "key17": "2vC8FTt3fdD67xFjHm3LCfxETzqDTQ8XEARTSxcUkMPTfEwQtADDCnHxUcZaRZUTyNBQMBCLF8YiWAzAvXw7eXTg",
  "key18": "LD5gtJaEu3UfHsMLft9sSxbyMv4Es8TF7KJCB1JWD6ZZ7ZTC7nGygWYcuqTJE8rpWUA8TVZVR4mwFQG4hTU2gZ7",
  "key19": "3eDBhmwQBk8HCzcaWJYkDi1miq4cYuomc1aqPMPJKgJ4tniyguiWYTq4gVxULiUenrrU7oewrdFKq6oUzQo6hR7v",
  "key20": "4rUgqHcbxEKHjYNyJDuEuDUqSvgCaVSAJMNgYLMy7EApZBYrejGhvADCLQFkRiNMN9GugsepQFQRRB7khefqnzS",
  "key21": "5VBm2q7nderSyKfaWQbZ8xRmhbsFoCCwtjxFm4dfQBzsnqikwC73KEy1BhVyq46KsREJtn26887NbyyrzjQKoTQj",
  "key22": "54StgeEbUJq3G726W2yWGs9wbYp59Z5dMMfABNYjqzkKdEBuJxegk1SpVKNSH6XwFWqqBzKW2LurwUwrgHj9DN4v",
  "key23": "4gNd5mbY8nzqNsqZsjoGywwyBKrN3GfKS18115oCBugtQBNy1YtGiBDQfM6My7YgXVse4srKdtd7Uk6Kbtg25YEx",
  "key24": "jrQHBhVYcUD5CMwyzLQJn7bfR9X89MdzSMpjYB5QhZQgzkfuhCJyx7c7MqLTP8L74xSPiXA2XCUptpmvitFrvbT",
  "key25": "m6FhuNSEJFTw2iBTddMkoCW9TwEGtFS13ivp4canf7GeryYPKsktXV3m5tNrpFWULi5V36qqa6CE6cjG8GUkaZv",
  "key26": "2z6YjPQik32rHnPBfbykWpCQMFK9PcS6krNGS7cEx7dGNFCivA7qFUUw7qrAcuthP5kp6nuimm2T5oRwGH7oPWsN",
  "key27": "2L4gNn93jCP6yyzz37955eiVUazcZsimfmJ36bD9mwyu6hhLCnh21hTVP8hAC2Rhv9QEg6CVniqUP7KPbcE9ykNf",
  "key28": "2bZ6qco5JkkEekEnFBitBtDuP1uHtzx4hunQue3z8C94i1Mu8oE3aciSeHtoFSH5ViA318x1Y7eWxAGTUybjWZeC"
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
