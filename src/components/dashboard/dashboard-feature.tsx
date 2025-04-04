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
    "4BrwVXqLWYBPmcqhSpH7yBJXapPdjcveQayqruXMPgfJxWjEzMSAVp7kdppAdsrEYED92ZgAaPT7FuCf6PytFxei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58G3vgZJaewjZz2tZdaMoUfYcWgmrXeTsT169Jh3FedBNz6ADM9R1AexycGD7HihrwpVdiWfV8fz8T8czyXJBohh",
  "key1": "4GiKgbGB6NdoEHRFixx3dDkdPRZzQG9qCKU4A5Fc69J8m1ZaV87MZ8EfeyqsGg499DaMdAxygQMKMV1EyV2PUYc7",
  "key2": "5adfvdty4fMj6YNQVX7dWaBdLUU9i7qEYdBQ5YSFY9kBuL9AygdZ5vFM2vFw7qHDdp8THNZiGD2iyeHQmiNHFoSm",
  "key3": "3K2CfcJZdauiYhwPGWa6fxTymya6YTH162rb89uhU8gUB8HwT5nS9ig28VvxVFB9y9ZS9jQSMrfU4Dt9CCW8Lb4M",
  "key4": "2bEThbDAiNhm8VH4VwCdSwtBRGQDVBZCVLYwVgFfEHo9VXTikzLaTm3LCQ5japFAJPvVtEoZciUXnPqNq3ETiAaw",
  "key5": "2UVwAKXCHXCqBRaMytDKvqLhwSW6vDDeww8pRNP3eCBgFKKxLea1rhMgeSjJruQyj6B2NYHfo3bYwRYnnv5zWVo6",
  "key6": "SH7SGbVDdbkBvWjEcqk1gp4jZvQJ88t4HUUGWJvLcRuAFpiW8L6htDYUPf5v6K8nT6kBt2YVRK2SAShxM96Vp22",
  "key7": "3u22xHSE5csgKZXM1r7CNAywEh2d9PPCqBUrMiN4Sdw62wKKSKo3aMwac5L7oBrU9WrQgoBo6Bke56PxahTLwVuR",
  "key8": "bSEFJjumWAii3Z8Np65wNJkoVhTBLoQTWt8Mx7kTgnx24R7Njtcad7LeNxr5amYHX6JxGAsjgpRzZTZFcrV2xbQ",
  "key9": "54MrVBzgTBuf7RRPvVSoUc5uWWdjEdH5ioch7nKt8MApJhfQ4oW3veVwkmyrAcRs1y9staEvtWzg1AgEkHLusvxo",
  "key10": "5URBywEc5vkweaXpn8CEM937Z4t6hvPEqjYXv4ueS1bA3SMokr3eVGDMkssc1DrNC82LM93zXoSq8kyZgjbSKM3H",
  "key11": "4gU4LMbCUFVsp6LPdtGE1Ga23QVKh4iqmuFoKKW3ueZDxWmbDJDkGCNq8N56kR4Zs9m5oDw7Kz4bA4NZLMhF89Ug",
  "key12": "4GmzMpVfZ4ZAZ3u7aJTzxp2rx9UuqubGtQLZ3ewwEWJ7G1GNkALRnKusEjcRNbNTr4Ars8t2HxVvi3iCHifdkWmZ",
  "key13": "5DJ8enRWnttQnarUGZJEgh3XffrptiXxFHMb8EeVRbvVGAfqDwpvF2UhWrngDEvT8TyjgkejTh3bB55Vu3Wxk5ec",
  "key14": "2xT9ND6h8bm7UNjekurPo5pVuH4kLZuFeMGQPzP1tMudXLEdgvFY39JQ4yqe3pkp5vcvxW7G9zMvG7ECcQZfUT4p",
  "key15": "bpax3DbfDrq4XwSVZ4hKrzGhdoJkYLhrdqQPiNfnPXWmYWjht8eD6QejaAotrjSpVQ83SQr4jzPjfZffxjDt2oB",
  "key16": "5PKkB5YtyFVGdeMjPDEAkWM3ZHCoftTnsRd9y62TYhQNUhbpjnc4smNCkJvSeegGDVtTdaKK2Vkpd7H2jygTgZSY",
  "key17": "3N6LLnpbNxYrci6w6m2Jn5bsyp5t3mpXAb1474EGByD6iS2N37DGwsYmJF1TzB3yiwvcC5ALVJyNYo14s3hpTC4p",
  "key18": "FkmF8sG6CScsK56B7T28EY813TcBvqaFcZGmZdUhHMqc7tEErs687UXs3y3Rxy1ofQvB4iJNkvXLnxDQVgqfHYz",
  "key19": "3fkvqhRb5NC3wMMmcutCbVDhUs1cRNkazARDLLC5SgrECHiYBAvFRQVU7ihe2KAhVeGsvA9csX7SRQGpRZ49ccpb",
  "key20": "H7tbXrHdCmYUrXUqvEFvRWETm6BWzdaFuM3GquGPYjamG1xQNChgJrd2LpVemsg6GAgAd1MmxJHJeDvktdG4ruc",
  "key21": "67DmwKCmXFRTz5EXCsDN2JZbqGuf4XmZevbFbdERkjdCX44oDn5tHrPXfudFvmimE7GXRVnk2otosoUvYUir2juV",
  "key22": "22V6Qwcz3fYXS18i8F7arcTyfLDpTM9LqpzNU2DTyyLKkQKsduuZiV9uzudfdb5JDdVSKzheKMyb4ieha5wLa18N",
  "key23": "3joknqqiccph44ZL69j6TmyKAPf7a1RDVe9hjj2QHDtdV3fmEvG6n9qzffeEBfHzFCc1NdQyUMxjLX8aAcVzeRNQ",
  "key24": "25MDpu8EEscs3iXFWeQ628zg993N5esjWXTY5P6vwGto34Hvc1ypsvjDTefaDWZfTd98h1evQdH8syF6g8SoQ7ZN",
  "key25": "bDwqWrAzcAiXXosgv5x4EsEd18cF4Nhqs78xL1KCT8ScjEzY3VUPojRY4iqK28EeasCq6DHGeL17GzXiRz5HTyH",
  "key26": "5ZRR8bcpj4y3Sue5nW7cEYDxG3JozWYMC5gFiP7owCg6ahTyU3Wjsq2DuwnndU3FjppMn6u4nyNgHaKap2tFHtEk",
  "key27": "5gg2LKBWM1V4jFpwZebhknM7mj87jBU71VErpQVoEws9gPVw9V3f5AYQNhyVQCoxXpyvqXUeBiqBskLt4MGPeqmC",
  "key28": "35Js2miG4xQ7ErEbYqpBaJwgKDkZefbEbLNV8sQZ7Y7vhMfkQ7CEZ6pTjuzT4mbDhqHBe63a5VWKj9XvbzgmPUU1",
  "key29": "QLmR62VNfZk7g98JeQGRAUZfYKpojCC4aeSorVRSnVAhZnG524MpwTcnaizPg4VBnANgSWHjTSJ2pocKLxRcVUU",
  "key30": "4pHmez8spmGojRgohBkFXHvSpNpUt2XBku8fFS2rkja2yDk8vFgxJVPsS3FWwaKnTgSRevaBtaj8MPRfJZUK4xV9",
  "key31": "3SM6pEyruhPMswQ2Rj1CtjqHCB7YNEqEHiTvx3NSD8sLrhRHXhzEw3uYoSiKTA1KWxGJ4YY7cgSEpgoJG1EGDPuq",
  "key32": "2k9uAK5o46zxhvcgZGfAJDapKThNSAFJpDv5ycp2YVaVx1SQPf8TaLeeu8h48NGdWZZQHWDijdoAgcminpArYfxD",
  "key33": "49xJieBqAZNWhrzmKJk3M9yJ6X96PCeLZfco2SWpnoQNCwhDi85WpKLAR7XLVJDCcycFRhNK6vMtKDAAYzwJ1s49",
  "key34": "2KvhzFBNzwAmALxijkLF5wYhzbiHqgesqBXyZbqfB12eGUFzmX8TQdES49MjDmmEYeBzmXhbBAypxKJUq6QJ1Lgb",
  "key35": "4crwkVgaFqi7DWu5GhbMF5UDYhaC4KVpKuuPpujQLV7Ps5tcjyUvbEFK196S1NffSrwE5HrLcBjuFsopZwDuhFJy",
  "key36": "5h9gxzgnp4uuJEAZmd3DWyzcfZYLdeAYSeip9a3BFdwTsGKhgyBDtaFn2YkzJFWXLMB2caB134NZyDb7eHkXKvv4",
  "key37": "kPYmqhLfAdMsnBExgvN2EK3r5KqSJZDDrEdctwZscfBua8TBmWi7ZUUfwVzoFoqDJNhFkUEQWJRbec78MRuen1C",
  "key38": "4y8VojjRwR21uBWAHHJMUQG71TMcnJCkKRtMWzbESHYsACbTtYHoFJQaXQYtxKekocbZ1cugqy6eoyB5sGBbf89D",
  "key39": "4iktetpBPiHP8vNS2t9J8SVHDNphrmFkazLvrA6aQmkfmSQtb4XczJ9dAsZzFhs66B6d5hcocTcVP3R6SAF4DMH5",
  "key40": "3WHjVpKw9tymb8QNZjcN8yZ6Nbud31BVTeZEicpJurWxDTYtD3gQ1Kbr7C8DUhtZ5919MrKdCqkgDud6Kg5ozPF7",
  "key41": "5kFN12vsyyEfDfhkMYce8pc1akxh2RVqJDNdUE9YYCPJDHi48eWBD29xyhpmuuQmFmPSvgxbpoYDUWAxWZX6Zb6y",
  "key42": "4Ycjsijqy2FH5icNYWbrzM8oUWTE6rz79fVnwfGTSxYtYu9X37Tn7RApN1jQeUdvfumYDDgBKxn1H5f1ErFxLUci",
  "key43": "3MiSC84HxqrFQud7z74H6GwWLq8Bd4padkD5H8MWsDi4hL29jQWj1r8yCzkonNHGi99WY5zkoWvQ9bHt4jancmvh",
  "key44": "5WsrjHpsnfr4GSEB3VuuKhHDNP758r91QGgTLpH5LkR3N4Rvsr13CEWM8PjWj9o6ViMXLqfRMxqM6H5E9RRi6xm6",
  "key45": "4iiGBg9r1GSNSqM7cu8MmG5THC5wK5eZyy29ndC7qh2zaT3zw29Lq87qcHZ9VAktRZnZ2YeUZj9nEJSKt4FrUN9w",
  "key46": "4SfjvicD73mxd1BkEGwT8mwwjwj1XCKDEtCFRnnyAHu4gYopH6upXugrofCFtq67pj4v4TDU7SP9wFN3H8SoUWDr",
  "key47": "1ay8bsghAKhpwF8ZR6PHm6RWDfViB5d9BsMMJCQAueswX2sSChE8MoF7m3V1pBz2NudwdHt5WL7AyDmLoxVzexx",
  "key48": "k4FSnZMbtS9afSiLVdQm2QoifXLaoZpANRtKhG78EfRjaoTANBKDBAiDvcaoVP7G3jPu6GgiVBL1prZs9DYhKo2",
  "key49": "5VAxnnfPf2Hfy62ctZx66HUP5cbgVyFfAh3GWjdFctHyYtDUMvq8cBv7b96UwNCjpmRbUSTP76pWifBSD6eHVn9Q"
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
