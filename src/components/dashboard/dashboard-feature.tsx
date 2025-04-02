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
    "5yL3ht6uWZXyR53QdkHzmeqobh4s8RwYsk4T2hQQhugjDXKdwFiZJhqzq31cinsXyZudETmAyL7SKXTGkuofjSLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6STEgiFBX2SBR1SeZhVE3VDPKKWDFLncX91u1NN3TeXVKyekwDFZrCBGiZe6sehttTpfhGR5BDDN2B6FoCDFw1q",
  "key1": "4fenxxGE2Dc5TMwb6UraXJBWXcM9C4D2ejPuZpMuYyEkh9hqiLUiQ3J153LfPwpk2rhWnLQfjzvJUL9D3UnRoHij",
  "key2": "4X9CjHZx7b7g39XfGkTZE95Yp8CUuu3wBuDx4SMKPBKvStroHL8ku3QmZm8LhyExjRcvUSsrnLfV2Gs34bdMSzLV",
  "key3": "4Zz4oddLkpjtedwXUUUfN235mn9NoEfVgPYgmaCNcXVhptJczxGve5BZT2radbH3E6Qf71WBjn57daXFxvY2xfju",
  "key4": "5mm9Bif9nzq5X99K9rC562ij3fj4mx7NdVQHp4etDbKrB5X7Jm85iqshboduf64K1mDHyGpeDQWuLwQdknQL8NLt",
  "key5": "37uWPyKHP1X7jg3XY4HGYawDdmuzeHR8Sbs67M5wj55exNqjZJ51dGwgtifMk8tVT8gJbqBMv4cWBntDgxFJnGaL",
  "key6": "25d37GztK7XLREJfAQhDJDDwiGwPMAzBLzJmuvhxzP2jeLdJ7wbXgXeHJWnHisoRfZePmryHmkmcz9KFWcgqdpLg",
  "key7": "cR3bw6fSGJ2Z1aCRVCTcdZAeXqdsKNik8SqPd86SoC9WWUtqAzLt4d4NPSGZKbbjnNfsbaVmrjd3ySF3u5YTgjZ",
  "key8": "ZTzNpP7xewSagWHwNWn1tYeRDFnRm8hn7KghrxfESiY9hYLpUGwxgwb8MfVJWAYmDSRkhv1aUAuTye6KkgyDhNQ",
  "key9": "hQ1UN7RjRra8WruQR6mkSgD8HKvkRT2eCKC8evPFXnc1sGVMLVSp4DSomdC8Fga5qqEwyY55Sn6f1v4QyaivmeJ",
  "key10": "4gbFydE3Wxk4pKCR9tis2poGwTYYM9XRZhqkMjrTRxnpiEQwimhxdmvFcnWWVYy9t8dTUhG8mz4T4mFZ1GpcQ9FG",
  "key11": "uiRFv2v8CN7KrfgshnQB2xY1dsF8BHhwTv7b1jaKbKz9gLpvApAXSuxong39YHH9YbWwW3adGG2WGC2tEfD6fWK",
  "key12": "65wSTqfq8ebtup6uU1qUY9XwesvNNwkpZset7fT6VwuuGy1e1EbxCqQSQYYEi2nPWoq2xyt7q6oH3m7cJiLwDV5q",
  "key13": "4vYeyzbB2S79nPyyba93CheuWwto5QQdSSQ1Wyp9MtEh1okmqSSB4gk6WKEcnjTNzZrAFCWun2bZyMR4GiQqJ4GM",
  "key14": "UBTQ997DL9MU6XzQ97gecTqCBufR9MXVLy4wrfmA8D3R9vBzebWeCwfpvmtkvMCzhAjsk6jEZUVhwZMtNRQyydK",
  "key15": "4EAKUXzegHp5KPyr1TsoYGm35Bx7EwJDtfDpcK9XTxvwftSqg2Ejt1wrs7FtGB4G4qirsTiWCXsA7bkNXnGH2Uax",
  "key16": "4DndSCUxT1MKzGCGn8Te8a7zaxirXjKf3m42jmT6czUqVYff55ky9xR5jw9PYRo6g25e2BSfgGAXjiiNoqYCMw45",
  "key17": "4QxvGm1tPXf5oN4yr8gUftS3V2h233mVYQysW3enjopZey7b4cNXCoGLqvHXWU7tQ98f4wkW3jFWAqA6ESreB84p",
  "key18": "3WM3vC8gw25A6hUub9EUy4NBEjTzuBcbYDEYFG3o8PbL5R2nyJZHb5sQtzrQ3gJFvTuuxRkv6V7jJ9h8D6KXkxFK",
  "key19": "5jMQz9gqTYfudfhxPfjof17JX9qgFVmuiGKvdUszFDPAHpzp9v3kPisHUcZU6XKAReSE1F4w49d9hDkXXLQJkWcj",
  "key20": "3RqyzjFur9rSsMqcaaDPapZZha9iHYRb9JBGsHqqRXu8ZkLPipuVoGfc4S3jTf8D4tSZNxWgEAedUnHN1eRmrwkB",
  "key21": "4zocdkv8DqnhhDRwuQgESXDPc56tvhRh4x5nYerwVNLrDtbbzBZMZST99Kqa65A2cvNmLktfQJNoLjSx87hXEfEc",
  "key22": "2Dbm6UnDYL8jDhNAW3N8fbyHopyF6erUDabudQuXcArszcAhHR9hYqEq2GS3s9TcXRxGsGkXPsuzZgyqZwvjWtFo",
  "key23": "5dwvpnFUwRXzk2okeDr57cZcxPtiiDuUgRqaQM6TWQmfvvr5tgZ989WvEM3BRbTXHgPTkN2vRyT9ySdbjVbSbuay",
  "key24": "5rKqwbDLTMVq1jHp7Y6ZSYQxPkobgiQ5VmYQQaGvZWiiQtgWmmXZoFYF1s95d7z9rjtdC7BxCkGbCRUETkgwqDUR",
  "key25": "2dTNvHokcKRJTzFiMqAJjEkQDD23S9LU62nbZfAA8EBpZYvbZd12j4wPXSrp1nJ3i7HZbnR862mj9yytTQzsfMjB",
  "key26": "5nZK5JAsD4ofUcFVaQKRTZMT2HFv2Zb1yBH4ACWLrAZHpdtvQFopomrnVS2yiN9gnpUmrG14CtpNHdRcwC6yfPbu",
  "key27": "4PidbUD9CwEX69QkvxdWYxXBRPCgB6CegpWoddKsdEH6T4hvqZ2i8212EnEJvDqBroa4RVS8qvHXF5Mx3QqLzYrE",
  "key28": "3SsHhtMHYrM8HtBHbCYfjrCRWRo7Hs6PeU6pQUXXCrWX7mwPcm5F8MfnGe4rQLxsTbdYo98Bjp7dQyZbWyDqeVMv",
  "key29": "2mUoeqKE3iRrTGFMN7s2vwsMqvrWZsU3Qbp1dcpEapRXPHi5tM7ubZKMxtSJrHQf1UBFghUnU6wTrRouakrVRBcK",
  "key30": "XvvX8eTecF5zJjFWAeGs9SW8NScFsxH1wiKowJHYjTKpSRqBhBLzNV1i37cgTVeuDqFjut4jeKnpud5edUffYDJ",
  "key31": "2hBtpTqYyABFSbNJSMLV7nGzegGTT5REg4CK8ibx7Pk28a9yjgAkokt163Sop3bX3KtsQUBrg4iMsyknwwmZfu8h",
  "key32": "2j1UY5rwvXvi8es2VK9d4j9sd8aE9m3qufH9bP23wysUFFH5uq3SfUzZvxsuzwwThwqXRon64yGEZQFUQCVk2bmp",
  "key33": "2SsB11WupPpLz9pqY7KanGPRvaU9hWAp6K1GxSRrt5NWvv5ZnrfUExqStuhuDxAQfFKCi84FsNrprDCrP51hE8xw",
  "key34": "5aEzxWoMnnffYHqpdSKCVVwLimtmtU2znkXXTvKv5jENoozMR5zQz4btXj7QLoHDg1yCmbtXeznP79T2kHaN5WBP",
  "key35": "oWpqkMcFwxSmeb5GYy6Jcq6Nu79FTtfANESUujD24VcoV6x2SK5um5kFkFAfumkNoQoS7K2XY234tAZZPo3599u",
  "key36": "3aZ2hoFkNffT1rnrqsXbFsBwaAgSDQWshWxeoKyAn7dB5TWrZkfcLhEqjiGWNDy46FXgGqbzVhw8oCGtUuAUyJiB",
  "key37": "RnJ1QPLUvHfGxp7FNfBXMZAhXXnK7yBAL77x8AyfGMsGAMN1VUNmF5H7Y6iQ8pXQHTxTQkwWQ6wVNZaAnJk6mQX",
  "key38": "67arHR2i1BAYPgPuWQ2yeSJyP7BoPz4TKMx1uF4pCpR2qPFw1xEj9Gf9dVTFUu7949Vg2pvJtmn9iQJmnW9HLd6c",
  "key39": "2AuGovHnQW7A6GdSMFvGU4pshAmNnU2WeqDeNMYWWfCD4vFC9YymLsiCVZPaR7S7idnJULr7mCyTYqHxvkfSSJCr"
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
