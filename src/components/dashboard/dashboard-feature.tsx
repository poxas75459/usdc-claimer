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
    "3Mhhh4NGKbyQe4KmzZXsQponsNqnYm6gmajKeFKCoskcHgzeAtNeh5WUbXxdQbZkjbJ9e1SWKdN3VSxhhZPYLDfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52X3umz9HnUNe8eC2ts1KmKpU2P9s8KmjPNbG4KtptxysfQJC3gUc1aFVSyc53FnJ8xdGPbam6VnfusUL27nFxET",
  "key1": "22wV1fqu2SWz5Y3kCttej53TNhCsrPXy6YWjPwP7NT2ZiYtgDQuyG5dxfDhUM7W1U2obFKJWF9Wj7gJu5CrdWXj8",
  "key2": "54nyshTtEhxWgrUazPyj9cTLHJ4ihSWVPeoPyjryocCaKmBQzzhiELicHAWfAVDWpxbHtcCmeNeqwy9B1J4X5rRp",
  "key3": "2hRYmnEapypD65m24PfhbcezqAgVMuomRcxbA31LC5P15W9WygWnqb8xAp7EizpDrdDd6ShdePrKjau9dMgMG73Q",
  "key4": "4tAUQFKVFKr3EYiGEEpScAwxV4kdaBY18ByaiLcZeqWL3xueXNC4b2rJaHjFhyoVJg7rzrFnVdLPPZiGj3m9mAPZ",
  "key5": "63z8CNHiVjdnzVeRruCKLYjV68TjYwRCp4xzkgg6neUJobmEd1ztuYwP67gvXVd84eXEbgQMDiucMt8rY6ny6NDH",
  "key6": "4XDzkx5NRvn49HgfiP2pwKc8N8hp5gLVxXiKz5zHHpDzNiyvGeNzU6rms28x52okgUC9cMFEdMP7EnmWKBnTZVBp",
  "key7": "5VSRsRv63kdU1apPjGgJKU2ei8kp5o6zNpCUo8fq9j3AowqBH8T5Veu5Wq3GFFsvb1wXANGfBexypacRvUaWMBNm",
  "key8": "5w27X3r2iin7DN57CCMArNw1UT1tQefZb7pn5FbXM8ed2RtoUfKcnqmz4pJjDFs1ftVFbckhHndTKT13HjvnwmE5",
  "key9": "4vytETigyusDdy1ckDrYQ8Vfw6JozWMSLA8XzfJMCKhiqHVE1fBPqTAHLFzyDrnKFWZM49sUwrxC3UPm3ru6VAyP",
  "key10": "2Uy9t5kXUQheocHuvP4XxWiaNx1Z2WRvVuyz1SRRxhWoDMV6MEdd892SD2uxALDNGr7sZSMqaxbT7URsZAHWgUTx",
  "key11": "2KDDS53upzkdX5FBUc8MvH5BRgArZB8p5oL4Tk5CVg3gD1WL3BeAAjPQ1WaRF31wQmpLAKbRznBX78dagdrUWcHZ",
  "key12": "2S4kJqpyXdoN77eXBJJTXEV82AYP1RQwfH3aYeLHUTPT3aSsMemegT1JVrNYSoGpMHQRC8V4L3E2RuDr9aUsAKxB",
  "key13": "3eJN3woirwToa6N9Gym393yKkgdLapmQordTxH59iTrJAyK7jhjwWjwJGD6TuQEKtDVtKaDkYgiuqEqvxFtU5qer",
  "key14": "HwpaHJSHhTRtfeuhViN8zrLZkzN1KrLDYQL5ruTATh4QifkFF9EdYFuLVm5WKbbefEqSh5p94iiupHcVnvjtK52",
  "key15": "29zaM4FEVcyB7PG3yHouRz1uGcwwb1tPEbJ2nu5SpdQZ85byG4GDetLXXpw6fVFWUooBiuYwfVpyhSwEbJnRjqu3",
  "key16": "3uKoGKoFYksb71jTDBDzTt6QjoYfYtPSnefaiuiirjUPtkU1iJ2DhdzgYLLkU5erHoTevJad6HqLCpegQGbnzDWC",
  "key17": "4W4hgDGKQunAXk2jcrgP3MgWYojo8r1JFU5x5Qp943TPCzkdknRB2YK91YWiYqL3nW48XLjWEsN4uXiHAQSQuFNm",
  "key18": "2bfs9L4SNmRtVWy2H2jCJeXtHXQE8G8Mo1oqA88xTWSCh3VvDZmJV5QwezdwjNzxKmYPCCrdMoq5qWZENqtRJdwk",
  "key19": "36LMsDUauisnYXBNUVvrk8HiMUuoLJ9gmNAH3gEUgDQ7K7s3f1uZsCMEpVuZibmB67tKcLJPoLa4jTw7QZiDy6HZ",
  "key20": "gJ3ypWuyiKohcdH6rZzRGsg8wyR2ZmYHqmhZgdPvvU6GjJWB1MwDN18QTvpDJ9iMD32xbXZc4vunWm73FX8jRvf",
  "key21": "66UcwgdrQAvwrWEGNcwDAahyLcmNZzF4V8HfRhxPAjRFf2793pTfMWZe3EsjJYDj6pZGGdnGs1JhjRFptMLFi6YE",
  "key22": "5zWGZzUZAoScmwm6XXw6srKUd6uzt9MjMsBYZKFcvJNqCuRAHHTDpFZHF2qgvd5tQQBqm1KUwmhjcCmjaghC2DWb",
  "key23": "2vNMZtNu1xHnctQK3Dc49TY1QGpYsLSY6HUsgx6EfYYbUHQ8KMtAXkP2bn15tUeuVaX7LZwyZdE7DeuVeug8CqUe",
  "key24": "4Rx3Vw9FojVK73HQkMijv4wr2bMQBP6mvK95hXfuDyN1j7T4bHf4pmm5MMW5szhkj9fqpGGkCVZ1CKJaWRL72Qga",
  "key25": "32i38quhPqaidkz31FrVwwY85rL9sFrxpm9ABZyoN9e3JtZo4y9DVFZFASLk21AwgDfiJTsmXBwu8W5meTXcuiTk",
  "key26": "3C3xVghC8DSet9Psy7ZFKiiap4UmmSQknjmXex771JJidfpb6NSjSx16S8vaa82UEjfriHZEt7or6hFwHQ7k5NmR",
  "key27": "2GwYMWvM1r3ZjGjRJSeo6GGLteQGe2QdHpRyatH6v3x7uinZZ5CdgrT6ZMTnoBHrz2BzDzwLsEaLSarwgaVUKSkS",
  "key28": "55DJ8niYT84z2vzDT9jrUrYZbcvHSGKfFWh9P9GiaZjxGi2VukD3bTWR2NZviWoHSizYzMEEWmVt53DaQKd1FUDg",
  "key29": "YgwQrP7ww3rUYAHM65eFcXAZQcVRWSvVpL5njY1vkni8Cxy1X3yfPxG3k3kEBqFeXV8u5tH6ETcJDiA1Wzyni5i",
  "key30": "4vVCh29XRyowH3ntD9Ja7jezGJid4FNzfqL9R6cS7oTA6UD65s2H8PgbFr81MAk61yGiY6yrpQLpLDgHzXk3rVW8",
  "key31": "27ryEW5aEsTERPFg28GfcNDeA4s498LufqnykmKDNYDr8pUMaSY7BNQ2aqNFXQ2zyMVjRN42oVkSkRAoMGsT3DMa",
  "key32": "jjnebAqpTd85XTDPVvjjx2eQQPnypR4ZDuVDcVLJYjyFVsKBKXJsKFf81y7MLgxiv1KjZoJQkXE9xQ3mA3xcgvG"
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
