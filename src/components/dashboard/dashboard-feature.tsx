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
    "4DnUdY7VwExgywY4bhzM6pcifpGMje3u5rb4wUY47CtAh3D82KkLFqoz26Vpw3tMq18T4sEVBc2v5jHvRVao6MtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oU3xSvkNwc6abViVZdsFiUWywFpDXKfthqYHRwiSNCEeCtoe2RacTM6M9sN3eFE6KuHNHkSiaTZWZDFNWrZnZpB",
  "key1": "2BgAKD4dAgtUp5WU1vDADyRPb1fbrkVTT9kjtFiVo2WEVN1uwY5nrDeLh9Z5igHpEe7T1k1xkQwGGs5Yp7hqxMZm",
  "key2": "8rVt9fLp2ttJ8N64zGBQWSBvVh3mkXjaYz6rXWcmhbz8aHxBGGWHrprZZiwghUpvvpU1JZqufim6Rh8id9v31gd",
  "key3": "HxEJN8fFuERtNdiXSY7FY2bdx1eWwtZqFj9dsax6UCBbhYV2aVJzaVKMrTqeiSASy5ZhXmZi8bRCBtcVcvfi6An",
  "key4": "2hjsCnMpKBM9njhJJssmoJRDXao2a3YcyyS1kAidyGsmX9ugGDhdmihhWCNScNh9KinfdmLtTUteyLXhG9hWPger",
  "key5": "D4VALsrFjJ1cTv2GL47bvYiVu2JsegNmQ2wEtVs245o9EVf7T9qatj6yV79gCQk2D8iVpFW5VUymBZRgo5B9Dfp",
  "key6": "4Pb4tCVyZTxeWxyAACk18M2uGUc4NCnoYkr9oKQEUh63MHwykJLrUWRkNi4etndhpUjh4MWJeHpMuyRqovpgubzP",
  "key7": "2LF8DAc3DMrXsqS24xWUZ1bNVCz37E4Qum65giDZMHQGYs5DUhmcRcCfh3eMyfShL5s14HyezZi3aBoaByJ1YtMZ",
  "key8": "35RWF3jTf91BbobucSGr8HPXBMtACn89rczifRAyzfEPXnVy2FRYtJytTQBJHzzHu2VRrKY8gjGyyp7SKb3F9pAA",
  "key9": "2i9hZ49wYz2ynSUQsaBceKCarnXpDcAR6Zr5VvpbYJFeGfJg8WFJ6LktSDFtJBYBiShowCcS5Vv6RzHzyRj1bekx",
  "key10": "2Dv45a2LpssvHJUifEzGFf6quTs9kYqC5Srj4ybqXmiYgyg3YZJFBsn5hN5XmrKKZsBhVbrXSL7ykP8RLh4kdcvY",
  "key11": "2SEFXfdbZWLoqVj45qeyy4NYs51TvBSTmTxRuedUtaKtbbmkzbgSjZ7UjjtWsY5gaLUZzPNLMUSVSpMdZmDv2hii",
  "key12": "3yym7akudJAwk4bkvuQcJUMPEuT1565TkfDY1ZrHXiBJ9KGwEaRwU8csk7yCgHMkrvb6F4h4rdrXm3RpfJXFMG9L",
  "key13": "3wwSw18HW1TER8wEiAjP7GBsKowtpBf5Ani1dedj3d7v3nioJK44yJJTVxYpGDTUkbMTgLgfryYKkAVF3ArXq34Q",
  "key14": "2NtaU7KyoXmLTQTuaJKCeyCcnHJWKpyJPGMLgAo846sEbueZ2jjcYNyKwj3dwty5QBuUMsKsXnRmUw1HXszQqmar",
  "key15": "quC5SV284kFteFyn8a6qBcxfs2PFQTagzwGd1huCFvToZ1FtdSbU6etqbfAnUqY821dGrmECrKUhrWC6HoNDvjQ",
  "key16": "3z7LyfuNLVFKKrrwNRNewqeyxAXMjiccFj9PGj9zmJb1uCLAUEWaxRQVrA8cpgwBL6Qw2kAbsarCaUULd9MEf6aj",
  "key17": "eWnQnKhnvtYE7jMU5qmqqkHteXuHhPuNv35P3PrXVnF1JGgVt2Fi38f97QFgGpPu5VMj6emoJdA7sttNJ7xCWsa",
  "key18": "3wokRMaySprBKSJgzhMsVhfdiCL5EKU3LuekC2QPjZp9vXK9UmtbyGKvVVV4PrvJPJmseXxYq4HnGu3CfUSbLhdF",
  "key19": "4SkU2LDT5Bmo5tExFKGSgoShiiu7bR6X5oX6ZnAa1buxG3Abd4jwow7xNpwwrjJeCBctCAxTbV6Lp5crGXk8bQeA",
  "key20": "5zyX438CvTo4rDHwMvTbLVf9W8PjFYHkQ6MQUsmTFppE35CKc5AjxZNURnsaQ3xysb8XSCBL6t7DUa4Kw7TCzEe6",
  "key21": "3YtB4D2xDAgFofMLyzYLeUJcTqu5Naom9WBycLFbk1JTGcDgES2zf6KBRmESXBusFRCSQj6SgfWgBzStVn8QUXjV",
  "key22": "2qvKHH1JkwHvWMuurqDkQdBQFePaTZjMUm1Hs8kqiwZHR2qGWvce23eAToUSf82m2GWGZGq2GMtaaH1REnHHXPGy",
  "key23": "5rQ5iFbdaszJHnBmWRyArjfNQhoMi3CizrwToyRDje7k689EfDXboZa1W6NaRCycoGHXdrqCKUhArSVHgqgKysG6",
  "key24": "444JM4UPyn9B1qkn64L3D7FVMXBNJRTmqfJRXgas8toD9ZRcbZ1hietQP3YYNBpe8BNzbFJbtJxZjazf9q3aKaxj",
  "key25": "23yArt8AGBCwnXPQBF6nnorffAYZvPcpRumhzYAEE62RbQHsKsBBH9x7Ltb1MVYqQUhu4792GZuMWrsNsGPqk1NY",
  "key26": "FMfk3aRikrzZXS5oCQsqCkkMYJEX2ZiYDehPeHQYpN7sFTk4qxut8xR4GAcZqH5txEaVeAWDu6wN8wtJNDzCTir",
  "key27": "2ng7m3drvLfQn6Ep8Tx6gDBw8Y7zeFcZrHA1dQd2WYjrCDNHgCjBi4vLEZer8vSyzNfCmVhD1XTgjd6s816nGC2j",
  "key28": "53NdWmyqqqYj4zhsCEjFVHihupHeVtdRD56qhq3a41fM4jCsJ9gDe1yjGBJfYnuPRFEtQ7fF9ipgxWhqu9kdQ1xe",
  "key29": "4GxrtFrq1yXhncBEcN3TNu27z9kYGrYEw2ccWvifakZ6AecGQYEFigGqTaQU27tCfHC41uXaf2UubUbR3Tbo5zCB",
  "key30": "4q44ebWyeNX2zPnoUjwCS6yRGykxKwKYJzD2JLqyRv4c3QsbKUJYK3AaJV3MFN7S8KhXQN4yyUnUgxRtkSNfjTBh",
  "key31": "2gD3EomiTNFXVYn8Eyx9P7ARjEHQ4bcgw962nUtjmd2E1PRY11jm25ZVNS54cepgqkGK1zXbAyHxSzEfSKghSk6x",
  "key32": "3iVsEC5rw7v9kfK9JEtzhQrFhoQgnxmJUahAECTGq6u1VtYPm6T9Do1q5m8mqr7yD3ULPeGfZp5NMpwihYYQMboe",
  "key33": "BL5JM9Kp2kexYWsKTbwFBzyq7QF4nxPPkMdScox1dpm6Zq7AMd9o1rkjjishNyPDAc7XEsdDJTcrYZUQFBbVDHj",
  "key34": "5Gu9xSq7NjMDS6cFvqgiMr3QpMQvdc9DtyGrq38Seh5AT4CYFSUERScbPawpiH9wse2xUW3jrbeodEPDrcLec2fh",
  "key35": "HYHtQzMnKpgzude1GvMiZVt3uBjAojnGW1jXgPuZZpeQnRSKKqjMyeDvLGJQSsD5hjBVnZD5qEV8MQvNfYxWZY4",
  "key36": "4HxXVj5m5vnBdnf2Nr5uJ3UzGYtEAHXdyNtB6aVUMz9UDDNZSrgWkPt63XbYP8D2TY8jkAASxoP3jHGqowqnYkUY",
  "key37": "2CCswcbTfPUZdXWfib68P1LibEyv2B2k61Xo2FhhrcCu1dqWBSRf8mqqP1TjcWZZWgDg9jshLGxaaaBsakobxgNy",
  "key38": "4QrtmCqZuaAFVK92GbnZGi3jxDyPwEAD9gGpNgggrkCMg11hXUvQUQf1v9D9vSxUZMcDNZ9wP1mauGXo8ehrimdY",
  "key39": "3JQdeNrocYqeRc8S7BipUpYoTJErCNGMwzm8HDxkjNvZegzvbsc2K6MJbTM5KhNzN6JXQUdcZ5pnEpfDjBU7NBJR",
  "key40": "2CMaayXvZ5hyJMsDtWjYsDUTXQbbTqkSV3hreCwpwH7ycuUA7JM6iBAVaR7tXvcVusQUhquYvVcShsjZmw3Z3kKw",
  "key41": "36qy4SE255EPYo2JbSGnhYo7uUoFDVRQ91HsH1y5kjtwbdBFF4tezCGgCeoLZzPmsShD3Sj5Cn8zhcMpajGkPY8p"
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
