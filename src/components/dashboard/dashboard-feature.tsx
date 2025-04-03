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
    "5jKZZj9pgHKvMvT6nCtBRZLHSjEGSSE6yayiDp7e1t1V28QZG1bApbHQbACk3hhnsHZBYCjqFAV2sDdBHdBcxrCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tnDwPBTd8psMMwJpGvAqWnQxK5nZwgPmzzCytfaKBXbMDSUc3YLB5gxs4xZRNo3MEomvuaA5Ci8R7jwZcJcdDbv",
  "key1": "2E2kbL5BzmkzmwDAeaqfLzdHHGk3GbHcB4Hbw91HmNR6mi9Cueft74tQmPZjYNFfmCAp78vep5cjR4GhJV2veT6M",
  "key2": "4KNqSBmxN5byRBuNvRBbQAp8RssSWfrE8jaaPKP9iWp39TxtY745yWpaCJrzpUmm51jjZVqtfdNcZuCCXSV7k9hd",
  "key3": "4fQ4fzqbEWNWvWMnnTsn6e1GYSiPRMFEA1YagiiAKFmpWNv5JxiMYpajnnhGAoH67gXGXhR9ifj5QZzifvrxGHz3",
  "key4": "FeHcigWg83FQAjgbcZiSk8pb3kLtQV99ShDW5LzbVcHRQEKzvzuMKpfAndccoERuJgryKFDBMqiHiN4pmzh8zpV",
  "key5": "4KZH7wcKn1qNcPZiKvE779WvkpEUrqERD9uFMU7ma8TvFK3CxvhMU77WmCY2n4SQnBhr8aXGbNGsVUYktgEibdFs",
  "key6": "2P6NgZk886tRcVJJeFnu6zY8eEKF5xTx9qp8aSgoqJg5KEchWzH9Rak9FXAoiJZvMQoWjUFEoEFto9xPdVycwzA4",
  "key7": "Vr5WQ9HqNiVrpYfbRCyYv1Fk1RiC2eZCVi9oJcVYqsgWMLshPCJtEKg3DyK3a5su49sekyT8ksBvEy8CUcYwR5q",
  "key8": "5s3QpXfdPMCpWsttTDpz7WriktJ46DLcfNf8EHvRdTFUVgNyPTZEpvjfb5HB1wL5ZZ3BWvNuDJegSR3khmExsjLR",
  "key9": "4Wa4EjTsNqjPmWnUz6YCLJdSxF73Jpg6rAp47wwYt5rimefx31w7GmadZL8UYcqzVgzZPvvLriFv7qndtuV5bbQN",
  "key10": "3cz5GMWj8qmZq94xRQ65DHrKjG9bwSEErUEDC9UFKDn51ARm5B6GPjn9S5VZkbmoNgwHfav8YeVGBfL7vN2nqPdv",
  "key11": "5sFtyYu4UrMoWJwcR8V4NzG41XB4jQDttUNL8WtXDHZCftmtoJmdTugMQ94qFs1RDw6KnhUSv6QuKCvjhqNRdf4D",
  "key12": "2hcH3T6xVfzrgH97YRxzrVYNfTZ3PMQHV6eT11uN8N6xfF3wE7ozTd9BxDWAizo5HKERXBCwEWaCeatdkdMvZfYT",
  "key13": "4x2zWcnNgYFMPkhK7Sz2wNqLC6KKGhjzv2AqnzUx2xE8ojithaZo6CJY2uFzDoszpuNGXAjUt1oaKsESbQV3ez4s",
  "key14": "3giVz2yEJDtiW3une4mM9Gc2pPq5G7f8VqWVS5u5RPgfWrScthc7Tiioz89He7KA2R9EMP53sf2qsrBwr2Jxhe7h",
  "key15": "2tEqwxfAFS6m99WuixcnduFDnGiAN4tqNukhDb6N9WiuKUiFJsUdDXf82XGqeswV2un88hWdUmfLz4zHn5MZ1eRx",
  "key16": "2sEqQXsQmcjr67X1W6NiSpmUqKuPJgqP9fj2UsFErk9T5LL1TFjMdtoHauv4x4bV4zsf4uhjuSGnWbDNih8mwdCm",
  "key17": "3VX2SY4y4A2scBDZkHLChbwzcFZvtADpictnoifXScacVVnyREf3BZZ7s5mVL7WML2UKPYYKe8GsncMyXzNSbN5u",
  "key18": "3kqguhHynCspEqtCw4vt9YNY1QAsRtTe6KQrNjYGhAB5sVJyYsKPccwfxgWSv6afCjfSzHgJirt54vwSErtojAXK",
  "key19": "597TpXabULLCHfqUNLJwWrLGeMuDzBNMic3spALu5vHRVt4pwqjS8oy7v12i1z3aei87GcnyXpM3DVJBSJ8zELLu",
  "key20": "3sUpKBSRzjBszU1uLcybDE2oddd74iGY1scXyv5KSZjLLoLFnzZwkPhNd7m6MikiRMWxjsSJ1aimrwYtMyjPs79q",
  "key21": "5Pw4yrTapACbL5Nvi15hdRQHhCDeJ7Hsp93HmuHtxLTog5hf4v3EJ5PL5hZjdmMi5svniEQVCBzb4uqgH8UmWZt6",
  "key22": "3xwMbnheYddRiUw8v6Y9VVtUiRvTnAbXFbCMAPLzXaTPkHrBoEABghJUmkvcvvkPaadba3RUDahTZcrA6kf4VRUD",
  "key23": "3FGu49VvQUpvAB2oWp7hEFh5DwQK1sC2cH9Ypo4fabztJg2P1qZQzhyhX6PXw6jwGscQB8RGTExi56QAoXE7uAxe",
  "key24": "2yp1zf8hGgVHGS4BSMeYNPgKiusCS6TNxTrv3VatTvgYkUufRgzeU8Csd7am56M95QJbQLFjnyjDfgLX4Fan1T5a",
  "key25": "4ZioJoSXkhUcwf2osD8cqajz6n4kHD4QURNzLZQN591vS2PXyhEkkyZCUq8AWV4toJeMraonSFF2kcQTAVzUSevy",
  "key26": "4BhgUTq4HnCaKHKuf3eyHRRBygEkQj8f3DbD2XmPLqwbE5Jk6XNMuc1TB61R1zdWtkPyuV5scSSpt5biwZL9JJd2",
  "key27": "2wHNq9sVJoGCdq6DFpFrXucxztDqZ6mHK6A7VGsyBhHwmy3wDS4MTPxN7UXBoV3bnZFXM9W2ZCLGwiQGuukGvoFm",
  "key28": "4GjrpUXRdC9rHcMdDeVrffssPKuKeXijdzizxPyfsrXq9AaUoRR3C5mxAaTvJw2jQUjZCVrLeLkNG3hwiDTBdCRn",
  "key29": "3rLd62v6rHgTMdRaJSQT68AMEsCscH7a7g4Beu4R12VkUhNVVreoDcyDEbxrj1ihjzVxLapqr5B9VnoyFcoNpVJ2",
  "key30": "3hr3jm1obA9g1ZSQHAXbFX3HPbSDAcZMrUvJUg4p2eabd9XMERm178qJ3Nimheq33qLj2vysXj9dSnqQ9ETD9GGn",
  "key31": "GkeARGTmdnGFvpQYg5oFvQnfKSGyiRo21UaNtVbvzWCc9BMJXLbDwC79y3sBSbBqo8GAmJUEUPSFLiocn35LYFA",
  "key32": "5ZD484KadWxV33zFqDg3NENNnVX2WoDsBZkRurR9ugYinsRudPt52EhRCTSrzhPraWYt3JMZeXgFvBhsJ8reurvp",
  "key33": "3KjYbjhrgvmJwqzdAgC24pwLK7MwDjNQRQ7B7nyp7usSLhhi6j5RortSBnBjxy7AqN3z27yxdP4Nj6Cv6h3TnB8T",
  "key34": "25EYX6AajXUZ4dv3MeaJ4jKkHUyrvfYWE3mNA1XFe3TKjD61gmFszoweV7hiep8KhS8gaWdY5WmRM8igFSeAuXNB",
  "key35": "4TGZbSTd4QaTPrAe4dAaFZf8MQ2R5j9cStxov4c4h1ZYxokX3tUcXXhSwXmArJnxdbyzU9FDVEsS3DpCRCY1MV9J",
  "key36": "oF6ZN8H4Q3sMXGZ7y1sHhUtLyjoc7CHbZnMrQFxTdTYaDMUgBuMo44RNrgUdkJx4eyf4TtC3aKSBhfSxzb59T8R",
  "key37": "2PTa7Ue17AP1ZATovqRrJWnHW5hisPtSUSdqUZQGN4nosxCcTEqDB8sSJ3acKfZZt371ttBaueiGkPR6YLfSWVNo"
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
