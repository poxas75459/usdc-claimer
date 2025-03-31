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
    "4cpMLYkwWQbq4rtELX9Rp8ZwAjM9ucoxCP1kgekviTAhx2cnGJi21HizmnmtTouEKUSywHuRb4oCrLjJVvGfvrQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BLZmfwmeJ8o2FPtVP73XEwXSwzeMotU8MWCGoXbu3zB5ANxYXu6CPajqyzZP3u3Yfsn51rU4RqA7JhaBwhY2FRn",
  "key1": "J2LB2PNs93ETQpjD6tmFwoNgmCEVLb3t2GWeCo1jKb7C6C6q3XoTpMnWKZsTjcZzopUQfLP3cDvTKKBTuMzr2sU",
  "key2": "5nHazT13AbWGZ6fzJxH7fsBqsqF9KTxjkR254mYzk7hqDvy7r6YcegdyUHaRj3ZxVd3aVo6U5iSuBqBrXwc3eS6s",
  "key3": "4KUvL3gShsZ32xZdig5ckipYoDh71J2n7NnMMrws533BRp7Rqpxde9TKu9FZhAGi3rwi97h4bu8fTvAtV9Z9y4Kg",
  "key4": "uHRt57u5b1rbrkT9o8ATaqNxDcq5pk6WopmbABYRQFnyD1XnyLQjVnXzXEM4NwtuBkwcYeSUb6ZPunD1QavXYpz",
  "key5": "5gEwujj9z1mbM3LaME8tYUJXmU5TUMv8sYHvAxWqeKHbGXbHKQazNLseFRqeTAcBXtZgfnmQ8Z9f2bJJCJU3BCd",
  "key6": "5fK5wqJtUyd9um3px61zLe4hFepyJj8FVHkfMGuexWzG9McymwQE1qSj9PJfrVSZMcCUSLVjAqogQk8b1wr5WNjD",
  "key7": "3ZVLUXJLPdyzeiMUszTeGr5X1vPkCRTERJNDUbUiF3vpcyxeM3Y3RoepsXHKxbR1rWKt9G4XsEn2rDmW2eE5i5AM",
  "key8": "ksNKUaLSMvk7UgRwAmqhZmTDNVwYFqAB9gAx9p3MvWUKkgEosvyKWGrrUTME4bytxGhtz9PSk4DrFvJVhZ9k4Tj",
  "key9": "5tKYZHTGKQRBwpy8wTtbCjEtN9V8zjvkDtiAytWufauQ84pkSHJ2uSDyhSQpoEg2qgdC8wvt6jJnqwYt3AfofMmZ",
  "key10": "3XHR3AFQmxAJwtDpGCXF7FB1gee3JkutGJpZkdxayqbgdPZzJvQGMJYD74HSYjTjZjNz6dKZs2pdouem8y9pVM4E",
  "key11": "5H4A5CDrfUom8HLDgKLFfvb8pBtELvRnJLn2Neo7P6fL8iF8E77FAtt3BgS1AUUru5w8dVnWWFRiYxmF1YYh5732",
  "key12": "2EoBDHfjN9XXHrMLWsQYSyBQ91YFAk4XfM72pK1xNQnpfBFYmXNu8Vu5ZUSJfyWMHRyhrvnjuSN2QFXK9RuDsg2h",
  "key13": "2o5GW8fJF35AsXmg75xYMwxtG8mv8cnqqEb21yxpJzJWXn6fuThvrHYffQqX6xkULUXhcZYQv7WMnSHKjJyHyg9b",
  "key14": "66NxexjYb9iraZ4Qw6et2CPUMDyfn4N6DVcGe3ycPrzmw64Jj47BMPoZtk2nazcPaqo1trYeiiyiHkg3UiftzGPR",
  "key15": "3r8XPZAB2u7uLRyfF4RFYqBvPHVbvA72iuNUZfPh1a6jPyxGhjqepnfvoQ9nPmWmnLwuwEtq2ea1TpFDQmaJmojd",
  "key16": "5mHgdKey4fcUdM5zGpGwfgFSUorvyC4xAteUryqqXiKHsayffvvJpfWtUJaRScCqJvsEAJDVuKrbURY5wxV5WXWb",
  "key17": "3e4s3aFVL81nxJksV9JbJdN29L62LcFyKynp2GWvqBWRBNL5SoLUzUeWjUE6tWxARxENxeqowgfKhVmEZNQs2CVT",
  "key18": "33TDY77NTVspMcSuaHatjnWiqhAQJ7wV4e5xCHykhtHTEJiof2VcP4i7SbuRm8PuzUwVGDif2cUyKJAsrFcE5Krj",
  "key19": "WuTHbUwXLkTboJPr9maM7PYVEkAJbyAVL2Poi5mU5dhFaLM3m6DKM1ZCy76wvkFpgFQ6KMpEna1chdfusHdePeo",
  "key20": "4ThLtoJAHt39B6xKU4EooZ3iiekKV4N8JchsU4m9P5V4tWHgB9RHhwvk8iXWNotpsnmzLXrzxByPjL9mATNMNh7g",
  "key21": "3nG8mccM4h34PEmgkFn8bBHiwAGzoj2qqWL3fLoEovjtaTrFYNLkFob5Tcqx3VuSrJEXfpzC7amBS6VDmguNapPB",
  "key22": "22ufzjDdZHxmwGqtD3nGXkf51m2Nq3LjEZd8UfqPbojHFa94wWWQaw6JQzu6EQgP8aGdCw7GWxpNmQrXLFggwqzo",
  "key23": "3HazEApMhgUBuanhHnPUgYHP9wNXXDC9Xuwx1RzCaJcKaczNL4FyJWKzFEiFu1Euf8jyaQVf3vbUYwU2qbrciHeY",
  "key24": "4Hg23TcchZmorcK2mQ7bBKxVJrT4fVC7hiDTMrmvUvGABjyBNhXvLBqJSGF5gYvA92S4V1X5MuLuP624TXgi6anb",
  "key25": "4TajQtJ7DDNbfe2YSbUwpwqsdjPRx8fsA4CZ3x3kXZjHkEB2DCbwqC7dvm5V2HW9cAooa3xALh4sqmciFYTE3YqA",
  "key26": "4PBcPaU7AqSVNvPg5M53rLVcoViDZsz4Qz8EHfGxe3Py8ZdEDJnTVFcnRBiVRoKQQ2mZALbTXd1HBT241p8wUeYg",
  "key27": "zKy5rYCB5zsQzHxvm4qwYodmY7m22TTtdHXthzU7LRrniiMtyZbvHNyTMxSYkecLt4gPEFYuGwB2p6PgKGarwDr",
  "key28": "474jUJ82NXxeZQv63PtDqBA67TA39PqbgM8vJZV5vHeKneX5dxwCZWuWTNFPNR5KXMxDhY17fCy37f6y6XycAwYr",
  "key29": "5cYvXo1mGJS2gp4m5GZvJAmphaR3nSo58Kx8GQRkYoasqehjRoms6WNTZjViun8TxNwcMdj4b6vhv8LGH2mV6E2g",
  "key30": "4SUaPbF71EUcDnVCyU4vobvazaGRCYyyCe5A13WFWMJmTtsC8VRvJ4cLXtPdyXuaeLi2WZu9Jyrv2YaQsDhZWoDe",
  "key31": "2t7K9NHqFnC3XsFVK3ydbzdnq7FRkHkKPMXBbNu4ekYXdASRxc23itR7EDmtZT7hCat9K7DSVLxAjj1ENQ5mwgNy",
  "key32": "3KejgREiexShBbFPqApSoFVyXaSUJ2L7Lj6To1rK9bpTFP8uPNZo7NygEaY22mDaZtu2Ff7Ax8zBUakJ5MiZEq8T",
  "key33": "JgMogLS3cVsZVDLSrYFkNukm7y12qZUyTHVSSSwc4KDQ66kaUKkgEoAt14LuueXJy8M9gL1s5WZRbiQpr3wSf5y"
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
