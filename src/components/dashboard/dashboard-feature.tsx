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
    "4kqCqrS5Jz7ZXcvV4k9GKDmVAMbm4vwaUradGSCH4xQZb8Pm9bwZYYsEsqkof1KHJ6CfajSDcqy3VzzBHw6b38Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cArsAVLpgb6zSgQHjDopLrLQ6DqfzqKA2mo3NixfHT4c3a5CJyKHcXGkwmkHZxp6La4DgADDpCDievos7CjT6jf",
  "key1": "5jiGyZERoAUyNoBYDL1TnmgwMg8s6n7Q2yzNXHCMcMthm29J3WGQH8AwzbAB8GndZHgE9JVas5xSMa1yifJv4AQ",
  "key2": "2NF8JbWhtdJR3YUHnUeJL4WNPK9v3eB42U9CswiYpFr9r5UWg3kajoeXvkps9aVbuYGFEggmUbV8wDcVhiizDNPk",
  "key3": "4B24yQgWm3iMeFkdp3gaT4HAX1LZ4nbM9TZCRc5uCihT89k48remGU8kZBKhN1HUwnFCez1S7YosQgfDh8jsJ3rc",
  "key4": "2VKgzXVE69iMYp695zrqx3RL3XqA7HcrUf9mq9cUfYS6D85dBv2vzL2qfZqqeFZXF3jD484h22rF6KkkbahoEuHG",
  "key5": "3xHQBc3QGiwmUzGoddfhWTpxrpsVJs1dQfCcY82pQWXcSBmDNqwrkaZhamT667ngm1YpvWcjGn9SKSsLMLJMsex4",
  "key6": "4TECH5n4KjPMef8RavxRM73Pk3CBDzG8GM46PV4e1NyBB4kgbU1A6p3m8gzfcsCZs1ekbtznnQU72UaJpFCCHH3R",
  "key7": "u3XL46zWEzXYgn1mCvqfUjqYHVrVnRRpbtr4joAwwtu1RuojMRy1noA24FvCwbWrCccpgmwyyZQPpqX3z1uKWbv",
  "key8": "PZz7oBcd6xkM8aZHZx6smebbtWnNhTSc2PZiKQzP4vj11XYTk8Wzd2mJNp1Qgm44QgKfLghgHRGRar9T9A26phG",
  "key9": "2zPc3BP9rNYzND4DzsUZ34fcz6qo4sRVVvov7wVxJupbYQPkM9rWc52NqxdmtyPKaNq7HMuJMu2p8q82Zd2VMm9c",
  "key10": "qSAYS3LD2XBnvBLxBbKAqP7ctnSdCJxRi9FvyRnLbk8xpP5a6gewjEHj5rU6rhYUozhgbisy6M9tSDMQ5oMBx7t",
  "key11": "3nAvWYBRnVMjEqtoFvjemz6uE7XZcPaKfCwvRh5w7y2gN673Qva4Zqo6v8unwpNGn2KCbjVEZWDWtiyg4BbyZyCj",
  "key12": "1mZLaE7TAGQSZQAn7E8U8tBRqkE8n79UEGEG1wDD9haVCp1GkHDAsC5UjncsvfSGZBx6uAQNQzcexDRcmznTZ3q",
  "key13": "4xXpUuU38Yen9f8X91nme92cwKZn8q6ob1GbPa7Wm3tKrYoPkSbqtTu2gKFgHtfnZN6DAfthK5d6VsXVvRQ5KdCR",
  "key14": "2eXmrvwktHNq69AkyPjgEGJwwumVc6rEAVipfdKvekE3qd7RewUUhLWDiDjrixiybxGs5dNNn1pNQfUFoqqcB1cR",
  "key15": "2rkgsq3Foa9wLXGGu9jRvecQJxpZvJ7yaQDEtaBv9RrMRSju1w41NsjxqY3yArGTxchKtccVhQEfb9cuALSUR9dj",
  "key16": "2RY5VLmU2af1c97SvjXQLGLvCdmGYtjDaBSuZ5woyLJbboT6ECGckucUNr5fye57kgBaHBMFdHzmagNi8hjVvmDF",
  "key17": "SQcvW5y33fnZHkRXA27DKXUqXJoCZf4cJR1YRJvTf4xXYwNp6V1MPfP2uugyHRHJ2qmBVZZBKj7uwNvzRRYrewT",
  "key18": "3U3B39RXpxK1qnpoqPxeE84bEF7yqj2MBghQXhjNa28mKAkimkRWe5T7qwLH5HyB3udnr8g1cxBFoF2dvUw7KuhQ",
  "key19": "41wGKqwQTt4s8AUGcBTLy9HVJ1rMSKfbFvnbcG3v3wgJDdW8nuDWVh2pBhcbsH1pkDskb7cvKwJPgiC4oSKFLkC2",
  "key20": "28yvJV2z3dz1Gkgff6bmEu1Uq3gcEeZLCb1WXsXG8gheTxK4Qymiue78YBFY7o8jXhxvgPeMfAF7dm9rDi6GJvKc",
  "key21": "5xHjz3uUYhQTCP7YEpKGx8dLZYQtLt5aBdJjcRNELSVbDvxjrZuk2Ugk8ufcJfeWFUBQMD7dLCCKK4Yrafr2rZXs",
  "key22": "2zZM5gSNc2BAjMbPgLvr5e5aqhRWjydw8WENkTNUToNTfHms3PDTE2QAQLWeMheF6SrvdT9iAqjqMqxERb347BoF",
  "key23": "3YgqB7YGXLEAQhoiKNuygGGuvGmH2ZNrYtchMHAsiEsf6HskSXHzRhF8nDppcKS3EipyXUe8VLfa3M6nWproHH6d",
  "key24": "2RyWPtTAURK3suAWhsf9RxUgh1wthFQ8d56N7XLXw7wKj9UfxUfSdzqHRNvRjMCCyxEEFixAuMHh9yap5NpEdCqc",
  "key25": "4sHDtAKV4au19k6sAc3CLDpah2JpuAf2dDns52Nyx1d24m77tpWn435RfPYhDWMBgCCphbN2ejQ2foWKpvwBc77c",
  "key26": "4cb41iyUfthXwoVVz6GiUds4maVNe2o671YYJg9pSTUkAkeQLaA27qM53mf2iT11r8XUres7Ex4CcrMAUzUsEyvG",
  "key27": "2tjWmGWwL17A4CxDpPrHevxqSjYHUobZAuApL3mRKeJA3b6QEfW8ZEBCALwoXzBEu4dqtCWWFksKTXfmMaGw3jZe",
  "key28": "52nQRLTL3n4JsHiu5obp9p81BY9WhoTU3bdVDWGjHrnx4x8EQG3bE1NT8CYwx9oLpQBc4S8hFCDDS1hJNW42mT1p",
  "key29": "2qhqMSwN2giJPR92QZDHYyKqp7Zn2wStMWRb81vyKY2mWSxqTKyqhDsnt75RQeKGAmdrg8VDTd3UTr8FtwVy7MbW",
  "key30": "3GezP78M768oG9xScybfCVN4f6dEN5M88Ue4ppEryxHSeT7AjbZsyjzXGxMbz6RPrRpHEGiS9cy7rAN5T7eXrsVD",
  "key31": "2UHzDXLtwKgnSs9tXqLcs9qvHgAo19YQpYVr4uEfpY2Li5CHWTqZNCeDsxdhi8R7XTpjCKFqSR3p3VmqR4ZS4vXJ",
  "key32": "3xKcFVza7aBJyhWmkQCwYATyKTEU3vXNa4F5Dswqq9SpLu5RCFSHhu9gUGwaz8w3yJsws1wuiVpbkzPXU68Eh5Rk",
  "key33": "5suW91HkQEYpyWADEB6fAUim9xnagztHGZQGkhu2rqZKQpnCuBpzcc59bquQptBSSs2CFpmqfhoKKZTvGH4L7f7",
  "key34": "5Yqz9bVE6dRhuzbbypTnYJSGvgeXgfRmUFSzy4VC9EfrLjUghs5PPdCYs72swoSiPAWittxMJwu9RLZ7j1e5ZBMn",
  "key35": "49SVpS6AYYqWGo75enkzbPPhcB59drrea7g6xkpr5FqABsNHKtj4zBz49QfdJ7LCFVv68EQAEYU1oG5m9GT5rSWJ",
  "key36": "33qToiNzkmCkKpMjVSnmREaosF1GoZE6GzMkJAKmwnXFVToZHANLx1bHAuCP5qGjj6QpJKtEkQhwScYwKXuh31pC",
  "key37": "sRo6toNSBEXRGmgdoxujPgaU9tFJCLTS4SaQiPWd7wLHAu3pMX2GjUjbQAzhRH8GExSm27eiCtvvNR92wAC8Q2s"
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
