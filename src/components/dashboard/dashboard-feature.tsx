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
    "36mdqjWSSmB1J4yXZ39BHYMWEVTuuKaSUDvX5Av7Ka1EadYvpQRBXSMjK2TisQKPrUoKdHnUMTwJy2GtZ5ak5DwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLD1HKRV6umLQS5aRvL55o2bRvPThjQfNExELvvokktWHMtupcgPRMxqKkyLzXNea6ee9GN1EsD2ZZYrqB6eReY",
  "key1": "3whLE5TnCfjYxMfJi61YsScbXKwqrWyYiJmAEgBAYdAVPZLgHcRCn648XCiqkqJ65jFkHD6wYDwH7WHRT78VdqtR",
  "key2": "4Dq3XZRKV9MUz4FEueB84t6D4B1Vv8cL2R32uY5Esd4mCNAiMbhaMtsxEJwQvGkKwB7mGSUTUhvgwnWpSTGfjGGR",
  "key3": "4PKzjYhntbTbi6jaxNbBLxWKQjrZwW932nCv95Rdt5yVL37yq7BLqDt17e99daAjJFVcedk1BTkuKWP6wGamFXZF",
  "key4": "46P6ivU8rshCfifQMDmZpSykJfYe5BMkcfuyNVE3o4BjT2e8cSztP7L8bzdB1HFnKmMfDEEp5CKRc4MPVLN6a3aF",
  "key5": "26fUz8fqqv5WSv7Z8Xfo9fjMjnFwRz1stXJ3Bj1v8LCqsB1dFFf1NvxdXX9cAh6rJWMXCRNKev5hjKgFpqzU5WEC",
  "key6": "5DxNLRa68UUpMmJ9fTNK1nFJ5tyyAiKMWZVjBdR8oAa4MzQQkk3znnB5ddneRMF8Na5M3AWfCiBzQajjzsjb36iZ",
  "key7": "2Naaj3VhRvMvTiqvcmGAyHFvBNMbCbUHEpoLC1rCAzJvidtrGbzipC8AwEe2dQPnyv5vYnwo4z8JChbJ5oBKizg3",
  "key8": "nJbHqJqGLL4oLTBpkBniXnGJYQLcDBEHmdbU3T5VvmBsqmSq74gFWoX96Y9YDc2Pwn1JbG7Amh5cNAuRWCEbmTZ",
  "key9": "2qtC9qwTQ1Qck88VNFTY8kah7fLxAarUn3YeboFMAku4DdXSaEJhDmQLAhD5oqDtPiiwBhGqp8dSbphYrPHf3uYc",
  "key10": "Pnt6R7ZbLNt4zury7KexCph9swfkRYCBT3cdhVoaKCF9HdeuUBZh6ZHCRaCmnvUyvEWfq6VSbP8YFCZ1NV4PmL1",
  "key11": "2qBwaFd2BXE3B7oJHXvhEiWxJFtdfpbjzcBvbxUDSkyWfTV2VRUi2xUYJ7Ckxp6cQSHZmt68mLzmyGjZH5wjDQdP",
  "key12": "4VpysNtuPgBYeUHkCVFeRMyhfTQq4kvL24CUj1fqpwXZXcgMGimgVBrKGfQCir7z1cPSyAZsyTjXEJmKZNaa8n28",
  "key13": "2bZA6UuXuNru8qWztCDZNZXHga3J5fxy4TruhboysW9pQ5cknctVvryoHneyqZ7ZoJ3bcp9xaAhcMArUULLzZ64a",
  "key14": "21Rmk6KuVfAQrxWQmut7kiZKGA6yn1kwaZENZyJPJx5SsYrjYcvuMbAUZyEJzCAxMJQU16ydeYbje11L7hpjAY3H",
  "key15": "3Zx6Rvv9Fu8AkCRqDHmt3ibwLA6vZnMtK1NrivRWuhFYX93xXhAJeqvzfQcvmWdFg4DJ4yoL4Razf3qNeHWBg3EQ",
  "key16": "5h2N8RFax7drPK59vieNqEJLrDhporGBtLngdTqpGDWjZsrcAwJuHsyChMmXqrDCR8GWg91F58FKdtqu1cCnKgSU",
  "key17": "2a7MAfT1PYTdCaxvuy9ua3iAY1zYgoca1g3wQu2Ny9JAHdvL83vbuJNh1XLBXTqF42yi4Hu9sxqSyVHD14RGbg6U",
  "key18": "ZCVFZkLiUgPvtw1SPrVk9EF8nUaNn2dEHgJRHuL4opJmAJgG9aXz54y9YXoQvH1HJdqkqqFVVGNvNXX9VGh6Aa3",
  "key19": "4trf8FKmYWSrKwqGgkCwfteRA9tGMpvKsKHbUhL7U64U18yXMr9XxxeGphdDigzr68AsvnF3C55H9MM8CcXYBR91",
  "key20": "m5SRXTCMocETETkqB61modwDHzgmYzQ4jknxXqFXAY5URdtUTp3WNgt8oznSXaVfy9WnuuwjfuvNvpqZ5dpo62q",
  "key21": "2smAbmsaJoRpRJHM3hC5gDsuwLn3ySKp3MuTPmeNV4pwnXKDziH6exwpGVoP5Rx5XZXVQdpD7zcuYjdxBYq6v63t",
  "key22": "83ZB2uX2BaPGCcLrnuhXCpUzenmkgRAxHQ3v33NHVYZAXizjeM3TqBQZMdFiwboLctowB1FP73wpwZiZnVC3Gou",
  "key23": "4MgskHKP3eBD98SF7MpMQMBzWZMW4vQfmmTihHKsP2AVX5KqQ1DSj8FaARPwC9sjaq4Q5w8hz6JvjbYPkrgKKcNY",
  "key24": "4rKpkgGPgytLG8ZC5nZSY61f57zLRwg7MkyJibgBem6pAYT5XSvNsGDwxyLQ6wiUL2JiLvbnRZKTSdbjDwzg54pE",
  "key25": "5yxuHywyAXKYfR1KT8LAjWJv8ipUFXmbFn7BVhXJwqLj24GBDpG2DGx88SmZbM7GKj55yV6eNBAN76NaqVWjFdtv",
  "key26": "2UawzmqfVWJLn5cF76ZuBdYvERDM8k14685Sp9knNxZhF9ei7P1unt8Y7ZtiXhQmkfc5jnNvNYnP5gZQJEmaUohY",
  "key27": "jbcCjZfGter54u68ZvEx6tL5w8YKQdCpqmTgDPwA4gqy1kPuCY7D1Dj8QTJXTqUTk7vNspahb4d21eS7u969mbK",
  "key28": "4RfvC6QPHhrzcd7xDoFDpY8S6Y6WLFCLcdxDMBsTiiahVCzDv3ZeYKQ31jozNWipSsKbwsx5XWKSUZqWwPGQ7Ptq",
  "key29": "5LiFZ7ftt7zSjM5LV7wVShinQjHSGJq84GdarAiJGRDbU3e4ktEAtYSpxX51wLdjm4yLyBwHsGAs776CT7vLbtFw",
  "key30": "5GwGypjKQbYcygGvd5iZkgHb45z4CT3wvHDajAJSNSUXi4nni8Y8NHbZgekyNkoTPmSfDeukqJBHgtvHzGdVXFbP",
  "key31": "2VsuDm73AH3QREhUQfTxBDBKhZNPLWkuck9DAFFS6tQSQNiLFMrsuLhwcoknW8AGtWtuDxB37oLYGwgR97TUc4Yd",
  "key32": "5tDGZZ8EFcVJsMBF4KDEk73cC8aspj2dGaUrDDiEGbHh5behsK5kLWmbi9CGzcrhbZpD3gGnFJrRC5ksA8LDBRjT",
  "key33": "AXZDoSUyKwr15RkFJ4Qvkt5GxMyRhhWErQUUxjwaPm4bmpqtB3WyUTm8ENEddoRGrmFYFPrirbpnZEKp4MUgFXS",
  "key34": "6ff44CZZ2qkWcn1cwwfcpypmjYpdqYMptsjpcTMvTJHppbbna6fe6ywN3na8hUm9wTm5GB29BjJtz8spbNcXo9r",
  "key35": "5HVY2Wdp6q5A6JLQk9Q6XtgoBjmLv9FzhMutttBw3QYMyUNXkhdx7kSprs2rbG4LF23umRqp1SLjmEoi53UWs1Un",
  "key36": "9Luf3eAVWg4seQ4j2QPk2aqXLQ2Ej2VVQJU2js8MCLZ4TtyaNFbd4iF9UKCWbQAhd72RsyCEqzQnZjvGAfrY8sY",
  "key37": "wrQFXoFAYCHbGeKMzCg4Px2uxuUCNro3ibKdUHNauPWkoB3hZnKJnrWYRGdkHGvRMKync6qW1agh2McTS2CJpkK",
  "key38": "nH8aTqQT5Jb2RNBbD43ypb6RLfyL7VpEN56wPgVVbm87epbVKfuwro5cm8RKttYDbtnbjQA9FVJU5bd2ksNGBq4",
  "key39": "3yF3LuAjT17BPruRganEPQ2XeUbeYV1XBSWxaZnRWcNT3WdKn3QxR75q7WX49MqXHScm1Jt5qjWWDEWUSjMP1ofy"
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
