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
    "54XLWso2mfGJyPyfy2ZBuu74bT9sX3FpfYZ6EK6zsupKnLQCm2gqcN6a47wzMBjwaATFSpenuKXA99ir3VW4GzSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkDzjWC2M5gWLZgvCu2S275d8VWGc5jCjt41joqtkB86mvwjwaqZbZHEwsZ8UYcG5J63kpn8H51zYsh4HgKH7Hd",
  "key1": "54LQi3kYa7thmVohHxz1XdQUjUTNrZtpfRZiqsZhkCMPQHcJWSKx8VnNmkAsk35W7Ti15UzXwwiPQqvEdLs8HkDS",
  "key2": "3vZ1QxGeKu76borxxtENFuWZCgBcLE9XqQaHJG4tDM46ex9xycZ6hBiCgXGCKwGpSZDsXMxuWgWDA7qjkRHCU2XW",
  "key3": "2z6Ki3GekgXjCxiQA3kJCVGzb5cU9UVsrUjVokYnejfyAHM8gWVa3uWfNbZJS7dwCNbB86T15DHShxNVTgmSnsa8",
  "key4": "2WSmHYgb8X5nSAxtjjRhi91rSEJ5rhjgpeGhmdAiiq9GYuziLaayHkNafN2fnUEHBUjj1QR3TaqKLpeaqFLhhZA8",
  "key5": "5ZuA9JCPD2ts6DFk9Aau4XpVgnUfs6HMtLcR7DZA1T7Q3tfk8kURWSm8yGdKh8VjicrJo66BL9BxZZAffEXH5VTX",
  "key6": "2SgKq2aFTwK4Ffidi8xpsQZudGhLe9GrUrUtj6LVVAvRFmjVWwRp6DbsBjoXrWhfcdmmCXJrNGWLAcpWQpKJzVoZ",
  "key7": "29sGWQWznWJJGuA7jRWaM3JFABJzfykeePutKTbBCFhCTXpQfYPJrq76GQhggtVfXkHahYJYsHRFkTHF4gHAZByS",
  "key8": "5za5xqoYpeGRNdMMZyk55tSSE3zaS6dxToDN9Ws8vMPTMUg8RfusM1KxN9GmVspEh4E5kSWCrs1F9QSyJXtVYGGC",
  "key9": "xKoWUowEmo31CgB78J1owY3VgNQys5buenMQsyBHZ3Knn1nwrdgt1npGVbraSJCeQDH5Hah4Zg84vMxejZdKkXN",
  "key10": "23h2uBc4mfaAbe6AsJMW9vU4Hv4U5eshr9CuGQZDLEFNynxdw5PBo7VbtUmqomKEveDLukmqneoLmmMDGFPne18j",
  "key11": "38F1h2nKuXpSEiyFX76Rnidt3RdVVtMRXEjRamNia2FVbSofF6Y5TAd6xFCUgnbSbBHTYqUWBAovFYRymP6nniBA",
  "key12": "59YxDyWg3FihRbWAB5ZVR8XQEGLtkvR9JWeDCMos9rwEy2faQHHwY4EXrfBcBDx6T3DLrC64ZnRcVtJRFqEbS2PR",
  "key13": "4u4C5NCR5NXzCdWcX7p9upVMw5h5gKiYZrKX48KEYwnXuGDbCB5k5biUooU9ZK6pUy3M6ftf9QGsqjabps58j4Pp",
  "key14": "3CTbbQ3Pnx9oLmx9ZWaQtPLT8E38Qf7ddgKkyB2XA3kPsZ8WnZQ36KQRnmPvkVKX7ppm2vSHJpZLKyaQYwsyZUyx",
  "key15": "4pj4et4QkeD5JZodDmEgqUABYtz43323Xhor1gzTvk6N3oh4HGf2ad3bFm8EfCYcEDjUihaePHXSC5HL3QvuVsvP",
  "key16": "2cfRKRYbBx9hMNFJCAsgNdj1VDY2w1oa8esakS6DvHKMjdVaeJssfXe7RC1RKs1eENeBhvDXYdhvPumreMqiy7Nu",
  "key17": "igE3MBDCsJeGQaga5ykTmstEjBotsy9sg4dGYwh8Wm8BkpFgYCuEegqjGQGABXUFwYJ6QpNd6i1JmfN4rxdpdPZ",
  "key18": "5X7ge118sCjgXqrzohfao5RfWDqvbVyoEvn4zuVL2q6ArJHjy3LAhrg51xoycjvECo5kuCPck7EHGRYHBUVAfJF7",
  "key19": "3LJnewSi55GZALFCVXubrT7mfwXoY7xX9cJ2DtP7UKnu2vcbgZNGGKcnKp6MU5Nssyzs76BWqz3wfwFAfqzK4kT3",
  "key20": "4r6UGNF3SZFMUVvDaXv11rDKogv46EutuMToVkN41F9L49Y6R9PCXXhdFiGZaCXSdRZBX2fghmATTC5M22FEtK6F",
  "key21": "5yY8ejwNfkWwT1XYE1oZZtdSgzhuRfz3V9wPmn7s8y8RYHAiqWJxYf9x43f43UAM93mmFXLmEoZ5G5syAKa11nDX",
  "key22": "3UmsjdVoF5NCjtYto2qExmuUyFwCozeuJeU6jYWWfSw2w2GmRS4JPXu1jxuZAHs42mCWnVKRiy5nzNqRmTzUEQNr",
  "key23": "bC3ANBmummtKtTwfBMy9MJsGTcj7Na2gKh7NVEmy2czUMLyALVcJC9SMceQhZaDdd6KHSDGsz4p9tYfLqRkgN2X",
  "key24": "45xNj4EiTdoVe6k7fu94APr8mojMd9T58K9vbuz9Ga9WJLa2tPrpzD4gtqLqmyngfSthb73urfUFUgBZv1M7Sm68",
  "key25": "31Pf35KkQXqbMjxGgSRWAYGBqbPcgAMNHBvM9D9pqbTx8f86Dgdb4z5GqytAVsq1Kt47z1vJicMYvkfkvpiC2yEY",
  "key26": "2eyW8hmXrdHTKjcAgWWjBJtk4u5Pt9xi27RyeWh5fFh2JBH4r2kvcBKcPKPREEudJMHYoQjVqZNGc8UqfC53ixPk"
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
