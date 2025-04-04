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
    "58Bq3XRcp6XjvubnGpdZL95LNmNgnHBmkWYUos72HQmRRyQFsno1jTwUE8y9T3d5aSiYefkPsWsL73voZAwd449M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isiKW6WW871Vg3Dke6GLzPpgZUqLgfM1vruMM4wZMYMBJvX2cGM45nY12yc6D8hXpUeYfy2T336eAypVpo5qjeo",
  "key1": "2DiGH8CPedfakNtJiJEJBVkuX6tsD2AioC4gQoLZxBq4iDENMvMnchuEQxnEom8DfLQu3BTq2jHgyy2Q5bxTTFJP",
  "key2": "46yHcG1BttXKv6RkeWjpy4Q66B8sWFmA1rzNxmjigr89pnzCnWno1x5QENQw1tZ1KWT76xmo22PeXvEHBpWxPpoT",
  "key3": "4fWj6gb6XiD2cKgGBo9U8qp3a5Z7d9ZBsbbULuRg3nTJmk8NqTN29TMbzaNx4nSMZtzfi15Dy1EWGqgDWY4Ct4Jp",
  "key4": "3mfP8WzYbTK8EZDTdccvibcmTweRTkgLFDTvy9Ytj3krHw278SLpMQfmyHrEbkfj3LzuzAHbgLJFnSkKhbMGVX6C",
  "key5": "4WZfyX5naYU9ifgMrSz3oL6zToZhjdXWsC6qrKJwqhmZLkatESVQ94Xm6jkm2Q6UByfk7ZWtf2CBvm75wNJMT5ft",
  "key6": "24b6xpJBCgWwyvc5Z1sAxTLJ2iznZprNBcYa2NGgyZqUXxUiXbUsus6JT2cY5oUDD375RJkF1gVW44Xia7mMCqFR",
  "key7": "3rxVx5LX24rvWGWgNnpyxXosEdB7UNDeyACnXwe1XPbdhRudZBLmiY9P1zGGbtoKbyN3fg89A6LwW1hDBn1gxWLf",
  "key8": "4XQMwbkLTM9hysEpx2r8susxhgUjKUHUCH8YNXL5rCPngHwrD15xbmgAKnzUAi5Cgo32j6xZ4q5r5bmWDpAvuEXd",
  "key9": "5NUZZwNL7ZxCFDwixTZ3YVjUtyMnS3grsjMqTJhT3pN5ZJ696T3Mkasb5RCuUzEGcr7SBU5FCvH4GUzPVzRTQivY",
  "key10": "z7TAJgGzXq8ZWj6mZjyJo5hLaQkXGpx69SF1RnXum55yL9xgPfbLUgYpFrJFSUG98HuzHAqYe9vvCmLbiHWo7NE",
  "key11": "3PeGztwYkEwXuhXgrBZoBXXgoUXQsHoN3LF9c28Y91AU9JXKGVaFdW7KgUL9KCehGYtt28bnAChe3eoS1VjZbc8W",
  "key12": "3Nn5ZYnSvVKkdrTxwiTqCtT69rWh7F3HCr2X5ticQTwQ3mu3GMDu8UuBXRqCbKK5AeTP1KoBPmCLuNWRtZXc7Jpj",
  "key13": "5GzGo7wZ2pYrQEr77pamGoDZTmpdi6mdXyRngXqt943iE1vPJUYYdHz5A4oJedQQc1LiMXBisL3NGQJRhYP1QTvU",
  "key14": "21VnToZrmH8CpfirLrEdpZQgaW5FXwhVYXJu7MVP7myfAs1DV2uZ5zmVDNr3Ab99avgKi6zeKQdhY8ZX1x3MRjn4",
  "key15": "2P587uUvM7SCq3TTTTGxKhHhTxLE4c2F2xwHd9BZFHtYuRNV8MSJTS7a9zR2nHMGSjiNpC8ByLfVGsw3PZgmHibK",
  "key16": "42NyASuZzGA6DQQPmSpGvPje1egqngT3VCr21TzGWMyssoJay82uSftLDG9EiUn3Jz55qmqAvosYwFU9qDde6mzJ",
  "key17": "4rkek4Ve255tMw658B5taq9EXuUwrzg6Fjhac5napWg3y61tteTv5dVqxMRXVzDhRYznJ5hbrGtwsT7TNTWTgiYp",
  "key18": "KwZC635PWVYRfzzVaTbm7VVW9Gwoeg8UtXR4kWw11vxW4Q126zT5NpHYXJ1p2FvVxzCZ2CpQFEG1FWWQ33UzzTm",
  "key19": "444tfB632wXs3LzFmDgJ1xhwSdayXdN9FL6NmNfosmnks7Qt7rZArxSZXAJtZ97rBy5cX4fBiLx1wuURqoHcCenh",
  "key20": "2THMh7rSgwWeVgA5UfkgGRStPS1ayTg9yQQE8vVyvuF91zZxnKS6MJk7huvdFvwzyfrWXyqfmYMmiX1sYQCJ6H3v",
  "key21": "5L6ZMQ43QjMcaBgauugboG8MZm3KhMsvYzNZen3mQpqXK8R8Af3g1qRU7X9Qi32MHEuejou3ZJEXVk2u9zhuHRXP",
  "key22": "ftALwpRJzzTL4YAZvfmZXwKfH3kG1sCqcEQYsXQh2thpsYWLE17Vtaaow3NBd4zwrNAn5PXgTVSX1XJG7fVXh4c",
  "key23": "oqXF8KGcRmaKBa3G2uKdmZJ9Xjhk1v1LZQQuAT9Amb28z1VQWMmr5tHfDgLgYb4Jhvheu3jEFW2yd81PPsVj4sk",
  "key24": "4HHL3zSAJmQpC2v4YXFWP7E2Yc3yg6N8cEaSfg1HmupRe2Xem6Bxcz6Vgd35ciKRBAyEAcSCYVn1RuwrW4MRxEY2"
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
