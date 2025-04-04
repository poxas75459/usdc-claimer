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
    "5ZUiZg9KmhTyrFs3poSKhAiZS3xurukYszjCnzFncNJYYm2Ug2NvKhG6F8nMpys8Jp6X2bR9ouaaAuumKMMrhZtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lu2QBAgn6GWGiDewK4PFZTNzgR42s4DJwsPmw8EtnNtPHhcmUq7bugsYvpmTDfH35dsLy2w1g2gdhRWZGNkJjjQ",
  "key1": "42jM3dtjjnnDnZQHUKGc11XPJPRSxdJWxMf4Ku8U4PoUJiPaTQPoQg8J3BtydLh5zSi85a1ZMiEntdDLkJdeV1uk",
  "key2": "67etUZYci4ZAqoqFfNzRpTgWbyQDgkSXXAeCfmZDQX9A9tUKgSAozbFNVqdzMveDeb1tAysBWiPueb1xHkduPxvr",
  "key3": "2ynAmUxq8ajCdmEBxWUKxdbxVj5mXKdgYFjEsZSeEhKsjTY3Szs4mb18cKEPrUnHVDRomNYUbabUzYuNvwpcK5BZ",
  "key4": "2igrK3uacqcwMH62JkfsD9j8ADaMoZGnw6R9PDWBYXM3Lmf4EXLYUiKz4hesgE74q5fSpUCnmv7Jw6R4z2y8ZYpB",
  "key5": "3eqfs2dMFGbQfCL3ffguttoTL9RZp47pVM9jvPQeLbL9vVMdwwAcRWWdxyPeh5CLFiuxvDKHvT2aFRZL96H3YFqC",
  "key6": "3KuqVoS8JDzJ1cdh8ga6Nj7q6S9SqZu4Bw43BUqvU7nMjpJnpY1K6GQCW8zGeoJm8kQBbvECPNbgH3gxa5GWAfEt",
  "key7": "3P6iKhDf2N55ZEcZ7Fohwd9W8zkLXZTdYjfBc3NVsUhR2riJ15haooc4g4XSGZmiVU55RKWrq135TQXS3oBsekPJ",
  "key8": "3oEgHhrgZ9dNghj6brjsYaxA2uh5oiqEoSHZ7yqGXxW1N3maVMzZozarcKmtHZGF152DR5t9idKqAFferwBisDr2",
  "key9": "38PVxM9UvsYPCAUz2EVMStNPSXsHKfxt6PmkmTHiAS7T8bWhmwN3k5JNP5eLJMFg3b3iMRBdQqrmnmVJe29q19Jr",
  "key10": "4M75SwZzgpNRBH87pAUY7q25ZeiwMNRR5DYPcHnb43n5ppuWv68BPtQeG1Jss6fJStXBBfX9Xe8FL7ytDBUB3VKC",
  "key11": "3E2qdFKXmPWjVktYfWBwhpp24Y5rVyHdiNMZr541d2LVvej2A48uhpEKE3U4Tg2bEZcogYdtTPJoxZ9sZhqXNL6w",
  "key12": "5AxGQKJ1SAdUr3XDT2MK6Eogu81kXxFzh6uPVda3VWXJPy7xug39aHXbfzTfyCMmro9XEjGZusZRzE2C5zo35zay",
  "key13": "2CqqxxqAbvFS4pkuetZhxmz4ZNn8D3zUmhdnzHnfiCGiqTq2BwKxGxNVwJhS7iHP57gXbmj9n6qUK8Z713865YKd",
  "key14": "VJc92SYunuR3LFUYdpZaLPJMYGMUcT1U9TJgf8bUpNgVKkKoXuunhrgRHsvkTWEjseCHDbgMAigDvQqmAZsxWkP",
  "key15": "5uFSoiTdwUK63QLtKZU3HSzkJd6urtJrUFjMCyM7PTqQYCJHVTg1rbZPE9hJYWFR4CkFJAB3oCaC42YxKLu3Wde",
  "key16": "4ASYRYcJMvnsorM1di4jGPVm6CR45cbbw57sXfu3W7kvHGHnENiVTaztydBfzCoBd6UBCsCZxiRxF7w4PJU6yuD9",
  "key17": "5M7Df7Si1anW31vjqjarcvAczsTPguGhvE4HfwzrrZbgRVyYpVse8paPDehbSYuXemEbHbG6X9ZbJqmVH4CkVWq2",
  "key18": "4HskqboG7bAkqg9v9a7SoZzd275qedZqN2Sz6xo3QuEnghXDyAwxQjpirDjkZdzihmruM5hmMY9EnTpJnaubGdJ5",
  "key19": "4FcWxidGnd1ZsGqZFWW4cgYqh5vwKK8XjkvJ6umfde7MjRj2YT99EFU9ZuymUb4iCqi31g9ATKJFBjQ6By7QchJR",
  "key20": "2598Uib8jM1TnZ6jTNu26HAZBZBwJw4J3Hddc6qHUQ2EwiSf1oYoqR6ZmLK5ddjsT33BZ4oK5cZeDYKfznJDgkNa",
  "key21": "5VB4r6UM5MDFYPKPYy4fr3GwQGnBMXdZFsmYwpM7X4rFjD94fC9P1dzrcA9QtyjxE8N2cvcHGKuRanWgRkA8U7Tr",
  "key22": "2eRWExU9ydekrqhSUVXWXA1mGVmF2WswA6ASRE7q9xihgf7c5FPGipwPubmKet2xi3q8ugMkd9mr2hb6nDi34Vqs",
  "key23": "vy2kwuiJ1KaLAobp2i5B1mpLKhsPg162oFfnykAUjLNPriPg4sgUH5NQ3v55EFBbJjKE9xszi1E5y85ATGpEP32",
  "key24": "5oMuoXMRX4bqQRFAArinXuu2S191DZ3rkU7PQVeXRtHcKhy8zxTvBsEqtdHyBqAtPtLhF6mkZZshhdc2dJuDbB88",
  "key25": "2wsVVsSLR3SBeKqDZV6jVFCfc8BrvgXBNcEHmUPD7EmMefHH3KQYmGuMSadRZB2kgGZCfmqVR3DCjVfhP5ya4emu",
  "key26": "2ufAMzBdcVhGmQ7pieg8nYFoPA84gFeZ3qziHk8Fyrfx3kVcroYMHRYm5t8JYtUSAbpd4mQxWxopLdEtYCK4tVVM",
  "key27": "XR5YK9jwetHwX24ictxoC56vBZ5WhhHsKgNjzwLga2S54EtT5LC1UUosxojfT5jZmdiJo3zHJRjJkg8B8WVaoTN",
  "key28": "1k2PyBhRbuMiM17ee8iEwkz8exDpws9xaGPHdY9bnjLVan4yFjWTTJRuzLuBmTmfNzhKGLMqxy3FdqWsfhwFsRx"
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
