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
    "TqJPjy6Dh4kcbQmKFyXJHfZ5NU6VGNT4669Nfhdr2RKHLA9MtjpUTwhNvVnWYAY14Z8CiL1ARgmXXqtBCDoHWQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hdzv9e7KfxUbTpmAPxK5SNFiBLedyi8n6B1k8fvuX7NB2p8ppuYUc1WqH5z4hbHDzntAhGu8tcPLHM5YPRCbLZg",
  "key1": "2ekyLEqcdfHTwWmX2ts2cHMEUY2bCXfRomMNv6BxnnCjTQgWQhf6HNJM17WvDC5xPBi3gBUTB6VrZnK1EYq4S7sP",
  "key2": "5MdcP2trfk7SoC8ftvw7SxptgVQEudzJtQLXFLngtvJchPRUUecPpMriKQ8WJTTUkwE1bkARaMAFZpoiaxkEUCoM",
  "key3": "3A1KhHSdzMZpaiERQSyGXafrM6T7HXXUJh4TXjbQdNnbmNaEQuQsWgUBxyYaPfhWfBUrxnjBJUpYLBmtkWXBL3V2",
  "key4": "oavX8cgmWyDsKCFZNqgAVDHUcypjJ4Uo6vUx9f7hWiXiXgeQyVF1iAgnTfWwHymaNoYZ17WDJDq7dExHtrPFKBT",
  "key5": "5AWeEMMBhzaeJmYmUZanTEK414bYiaq75SZBd7jAG7LcCoAVA2NLMRK3UZnFB9QDAbDe8cFEMTEcmXLSq2U3nH7g",
  "key6": "4MpCVu47voubo7Y4io8PB1neFiju8Vcfg51kurNYh2dchUE4HgnXk6xSm9LZDpQFwhs8o4P1YQ9ajefuSEXLpLjn",
  "key7": "2MN3wfcihHCShChuQw4NmrHVeVf2VEL8Eh64MoCd6vxj9qpzJH7v5HQrRqrRus5cNZEse3rGx9RqaziSTf4VP2AC",
  "key8": "2Xv4mr5sM1ycE9KnDA7T8WDChr8c3kaSxsPZT7wYgBD7Pv6boCTk7WrUZ8s9T1Y1m2YQmrHE7wXk21QgmBXzcuJF",
  "key9": "2pce8L8S3kJNfKNr3hfMnkhE32odjKFUqEkzFzDzs83HeLjyC6epWgjRx21SB8ytHC7rVotzoGLH7vFGDcJeuN2Y",
  "key10": "3tzQqySH3xNRJhsJDjaybunpxJyB1cWoDcPhUbLdgYNWJNnR16vpgSwkS3mdz3kyvaEBSQW9hTW3ZSMWy3w7o5Pb",
  "key11": "3kSMMTxHKDe8fqzDLvDcfH9yuP6z3ezMcBTeubcPDFvxSgPZFxFe9V42Ltsj5Lt4a9RU79qAhb2Ea6NQYcLsBtKb",
  "key12": "26dnV5wcqCkGcDp3qR4HxDhm7jXRc6MXKckr1FCv7ChtauwK3CJHTDyRgiGy6ooqFmrYK5nBhtWsEAryg4Py19yX",
  "key13": "5h2dxyoT6XbZkrEnxwFxQ7LYD3MeyG6faWnvaXpHR8oCFNiPTW9MhqXsqiNuquw1TZUTrUED9x7d9hrspxqnffqR",
  "key14": "4dGKeGLMsM15KFBdZiman6jP12DxQpkSPnDDgGHyUJg6Wx5bmNF5SYFNSWakrZYt8TcCfjEqB9H5jCs2uYnYzHUU",
  "key15": "4VJd4Y4TeC6QQcrDHzpPL9fqRrr5wPAmTh1QttJpn9UiEtpjDnUWq7aLXDSwdkhDyERmQG7LX9kZpJw3y6ad1j7X",
  "key16": "4ZtMgmXNzHhpZM41spdtmn6K4mFqyjYYoZGA3BHu3CWbB3J9AmJp9m76Cei3hbaa7V8KzTHJewv8gJYDrsHCVKgS",
  "key17": "3hZ4ApqL5cY5uS3HS3SaMQHnxXbagzAF3PQQMbMG3zMgHMSoqqGbX4y6rMZUrD17WViA4k1xVsLJs3k3kdb5EsD5",
  "key18": "uPHgbATfrDSGGaGVJNY2oio8E8GeatqtRGoR2EQo4c7huMceZ1Xem6n8K4QjN1c2YbEhgyDJfgjjqxTPEaf9RBR",
  "key19": "5paQ4cJf4Y9aSjk9JCvggMQsM3P8rs1eVVq9jrLsgEc94nzPJsa8W2Ki3xFVREShe4oLay66e6PkCJD6sWLepjqu",
  "key20": "5P6G8ZDfgSzSJWYnRoK7nymXCDgiuSmQPEgH9nAYtkvhii76EFYSq2mWGy7u1H6ej4rXTkuWpW9LZvUFTqKZngYV",
  "key21": "5uT6VAtVs5DMJuDNhRXdEbuvCT1w4hCKfEMqVEdfNUYQjZbunuLeyURZeu9iCUs6SUNog5noAYx3bhc5oXfrid23",
  "key22": "4eya9ZYBwtM4pDoSDAPWQrGWFXSD2WhBxeJj3HWkTKCcPoYpw4Ns9znagm418Yf3KLyXadKVYGTELHvhQsrQCvmD",
  "key23": "2n4QbGv4fKhR9QrNH4cjbP78tM7Mq8Y83CWZMwxfhTAyfjPksAMifS5Usvp2CLuTsWvnDYMhryYBaQKGYUjeeNBD",
  "key24": "LARNUXH9iMZ6HJZ36zRiRAfJq1zqQi8hQvBA1KPWG9qcYSZGyR4zthbPezt6gi1ihMTQRqMjGmTx8tRUyJzYehq",
  "key25": "5VUsbaedVDTQtoB3xjHr7ULKABRexYseUY1zo1rhNomJFEtLd56rcJFnuzSfXraXTQaN3qgmAxqpYiyBVjk4bHrd",
  "key26": "ZoBCAfXTT4HZHyC7r5m8sPt9JjmvUeaSFv3hZxCnhaVUfw6HvLYSijoetJY6HuQWdGsG9dmpzf8geQDPqYpNK73",
  "key27": "4VMQEXmHqTZBeGJ8jsDpMHHVavV2oK6mwHdo9hF43oZKkKEdKLVxcCKFxrWg5Dq8Hu6HPkxQcfoQHVbAYWqv8Xhq",
  "key28": "4fFJRp4FumwRRMLiz8wcRuoB4X7E2JB9xEZG4mjSRGscZAgce5cPbow8qXMWZE7wrPGKquJeCwQLALXH25tdLStr",
  "key29": "3b9giYixuXxwi5DPY9pm7cbP9o3qwfoJG39NKX4yjFKpttSEivcQ51dDjgzKBUY7j5yc9AVJoexnNLFQ4aRqEjHb",
  "key30": "5EfzbvmzBzZfWBHEGTo1eRWhPcqqwNC28MjggxLtTYrjsmpiJyKKxzGskGdo8W2SEXgEVcvF6mPYWFzPaB9KznDA",
  "key31": "zk84WdbmKnCJTnXEmcvBQA5AFBwT7BfzK3TbLUnbwcMm1vSYgUUE4UvvaBBUm7BZrVtmNsZiyWf4UmFYUUSgBW8",
  "key32": "4aXxKPc6iF9L22MSnJJWRUnEP5xPWJxR9Lx3jqw68e7RUTYSDhmJoNbhFqxueqKSKXD6RAViuvRkqJMw2BPVyTAq",
  "key33": "onznMwenZbRr5eTQ82rbzJBCHkgKvxiv7v3w9obF82fs6hTr4hpcuH2ZZaZnyzx6JTjJxAsjS5ro9bcojAX23Nc",
  "key34": "5RYqiKM1dAb63vJhcmRQHn7GWSMNSqmGoMk45mXYV3L5QZsB5D8nN9QW3o7gLya86oCAocyjiigaF27rbZo99xMW",
  "key35": "4dCK11tkF1EZjRqDzREt6rcQ6xYAo8g2g7KBrxJ4duaF7hWeQhW1YNE5do5762HJz6yBFHXRcQaGDt1AX3Vw6WD4",
  "key36": "wdPT4Bpx8aP6MiruHn4oMkJ9rsrii221KBLQWnRUg6GnyJBEXAA3yi5UmyqcTrCZvXzb3ZarE5XtRPuiDDdBCm2",
  "key37": "3omPfR8q1PYt4SXCgzFDtowVtKXBYPvrHAQxXYGWNUXLJoYCpCLK3qJgy99V9fT8dfy1NFL4HuZPXzfY6wtiEPzC",
  "key38": "539YxBSgVLJc9CnYZdSpBxsqGpxtjNRcFnM2yB853PQFYuofzPvskEWUrF8o7FJm4L7d4GNK4t6n49GuFDefKv9f",
  "key39": "59ZpckhQrvZ3y3cPsMTCW7izLfiT2rCGh58KkxUcBzkU3AjcsGgiCaXazZo1AmjC37anRj8gdRavkagMHqHDttJo",
  "key40": "3esNrfx29DqpaBfGgoTmV7jXrMBRL3sSKyEb7Bua7krQzoiaydcrgjpQecak1LQdnq4GYY8MQ99QRiLfHFy4QdKh",
  "key41": "2KR7pXKCTUagLH4GMMuxYV7uGe58CXX6sX6t5oFbBKZ7uwBHCmZwjnMbEwPeqdKPqKyUVxDojgx6dZta5o4c8uJS",
  "key42": "3QGukCATjkBRUKPZArNiWXeg7jb7Y8HnSFQFMAB5pkyAythkFedg1Eq127jgVmEawaX8JU6uVvF4jjNUT4DnNP75",
  "key43": "4vkok4v3YWpPUc8Riy6CU9sGhV7DLZDUiehyGjE7uu9T54kycqZ5Cv4KqV3Nvrw8wcXUb5R1CTo9NhuG9897LpAS",
  "key44": "2FSDiFpi64KyQbymRdnrerYTs54yQ2oJHAN7DeQmZMcBXUTm9WFaqvEsMiVFpgRf3DZm5ZPTAHfGyvvQxAL8Yp9o",
  "key45": "425tcdMVSm942ppXBcADickrotnkyC7MWkYjfvrmpYTrKf17Mt9TV6FpFsUrxRbC1FpBDj7hJJppdjHDnDarkMvR",
  "key46": "53WDfbdbZvUaMQeajvWEJtkG59W3fiDZKgJyEDqP5v2uGzTWkf8MpMJvHRNz41p71qFJ18BGpxf5ptztPfNpTJmJ"
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
