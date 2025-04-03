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
    "oEL1S2uXq1jx1bHzRyemcthJ4gMWTviZKohfb93ZgRkzZ8YT1sxfj3zUwYEbF9Lzegd4AXSJFfeAV2fUgFowgys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmZqpqDjizLwVwihALQ38zPmS6gF2pDPQ8Mfk25ko8xmMxoiS1bMMdxzkZtNQ3J6mDQca5WVkaA8QmYo71uyT6i",
  "key1": "66vaZzZ6dMZZcgRDwJt86rACoLDzVvuX42ZmoSYugz3wpyfdx6jDemS5LzFz2bWiya2zDAfpQRPv7WmxfjiYmuPg",
  "key2": "5tEvcm3WdnMmoG1yaHrzLrNcodxwcJeH4mqMRxHZgqR8WohxGhHkZ7dEncnovBYGfKXSbUUCucmWsnEYdhhac4jJ",
  "key3": "3RA4rLPZGq7hgcnQ8XaN4fv6ujWueBoYTPomXLvzj2szUfC5i9WB1qLzLei7uLk1k89mFhVk3KvhHtc1zr69XnbK",
  "key4": "2rK4QpqWHVui2Z1iraSTim5pWvXRG2EmHNcbdrmWoVEAkbpZyYuLKtCjmBBW67aKpCxsZ2HBgEsTDn5wcyTm2Nr9",
  "key5": "fqstmktYeSmrSrDeDzvhKZyERHb7F9txUvmWyRcyZGDhpET5Ua3sjmFerdNRakeHWCbKzZi75Gt7vCGt8XPHec9",
  "key6": "4vvmegptWyrK2Gz7V1DYEZJiPtZDcHC9uYuJRN8fvtREjdGwPLo1ekvfDXcQYrJDQVsT5dRwXtd9ekUQAyyDGv7W",
  "key7": "2HMzasP3nDpEUiyjH6EzZmqctJCmgm4WQht9Rt9uqfLXTZLy2Z3RRYtGjngtbojdjEEZ2xfWcdsJnJEG2VtD2gN4",
  "key8": "3PNENJCf1L2JBpbRtXRgqcWaPxrTvDh3AZd1FZ1BF6poTSntqYN5Ab4rRFxnepXvPxv85JAXw6Hnx4PxmiApyowJ",
  "key9": "2o6R7sQYSGoMu9oH2NPGSucsMpddaoxZtypifsFm2RQ7h7Ev4f2yoCDsjBk6s6pn6GVEfVtJyzHj7TqVTbYBk4aJ",
  "key10": "3qFoPsfH9cjmYw9jy5QA9JG4kSTA3Lt6TftjaiEz6tCCw9bMtVgDkT7vroutfvd5WcJu7MticEM27VMxWQLaFmaj",
  "key11": "275UWF5nHDfcT88jKodKmgFr1qzMoTrs6KUc1Tu8cXjVANQ8Pgb4d6MPLqgFs6gTjkdfVj4kenR7qXtPHJawbtWd",
  "key12": "2WoBv7pA5Jsk89C5ucceBfabUffvNUrXVrTvaFwnjkREE3nswNdpRRHaENCc1vLm4vkgqakYK2gtJ5DcdCUsYN4T",
  "key13": "RYyUbRFMQVGMtUM5xsDGrPje2c3HzHsZMot5KQTuXkdQ3XWo9ZRcc8mpoLg9ihTMmp8BqvffXmaYYu62HGpk2D4",
  "key14": "4KLy8z5svfWRx6bEYdSTPGXCE48P1ghZ64wAquYt5VWVQ3omDjbDxXbtZNzgw2QTtnjMZe65yjk1tov14mE7ibBr",
  "key15": "2nUoX2XzfhS1BespmeXFW5vwz1ZXfWMCb1PWDqm8jAC3yzE32eHZ6RQCT8CStBa62MHFNbcT7pTpNZh4bJGzrFcA",
  "key16": "4HRZTsjKNHakX5G3Dne9JKf9ChajKt6TzfDAAJLLNsmZNnoCaibr33knQ76tFcX7apJ6aTnmWQwQnEQN398Enuyh",
  "key17": "23uU9QrEq72LtycAkMbVbYzsyMRyYXz4hmGCjXsNKTJR1JZo153CsVFmwwVqkXaM8xrzTALYfFkZR2nN8njJRmMo",
  "key18": "2xFr3r8m9W7r1r8YzE2LbCpaBBXohQLtpJ8gVt1B4gezymVPp1EJm3xFtHvvMzorfFWGUYShu2kzUncXdgcDWvnW",
  "key19": "apakyqL324j89EinJMDSx1RVpFw9eNXPTUAdb3b5F6dCHHfv7jPmTsaTu2LrnVUmyqtGfaVTrtGS41YNoPeKNwo",
  "key20": "3wfHKZ2gMHxgQ51SZiJxWMHNjoJaiyd3z9TJNkAcsZ9snVw8s5zrgEq5x13xBsm7Pu3m76tC1xmHcM6FHB27z1QC",
  "key21": "2UsprzmXhL5ji5h5msjN21AXaQN8tmUMQc41AH8y24pdM84u4pSrsdtmTtiwwijMg1TC7hwhWFsiJRymgoSXWzwy",
  "key22": "Vy45jLatYBeMCTjZ4qGgiJwdhtkdLd7EU8kHLmD4LMz8CjHy1ZycStmv5LMxoaFEYkGc7VPJEEXjCsUZ6oFJ5y2",
  "key23": "2mMEvdfVDALv5iHiNP28qhJF5zbSpkg5ibALjdwPrYCwySjwTzP1ympUzRmtBUzDrdK6TPPdkcDo654xJMgTJDre",
  "key24": "3BPXeubg1UZS7pG1WTpVJzLY2cGb6TVTBtSWxVJ1YdDRMPfBPzdSCLzK22MZhcwqoSRSZoShDXicFa8pXg8KX8Eh",
  "key25": "4N9JY3aM3k7z6TWiNj4BE2GZ3kfph3RGXNVfq9HGzD7MhmsN48XFrvaxhJcBdgKZbJ87mRTEGR8gntvZgbr2ywjo",
  "key26": "5zY6hqWpFwHgZbppbBz4KNLoKqSoSheyHPGaxS6kURdrpVrgX5Htv6e2r7rj8Bmn4iVwmmsU5DabiYfye6jS9vv",
  "key27": "27ixWuaJc2vj8UzsX27qxDjedLmgJxBV2XXRcwk5s8wc3N1fzg4aTeSp8R9GzBoNbXuyA8iU7NZbUtwp2kXNpVTc",
  "key28": "xoSiEv5XG54KCSJVKia7Y3FdtYs5Dr2WzuYLrmMYHyxXYMBTZjVSe2y2k1m2Q7inoJsJQpw6dkaHjr8H2bm4FoC",
  "key29": "27DFE4Z3Z9SvQvvMLsfiUpVaMi8QXz6m3jiETPqd2W22XPighdWoLHrPwptfDdmHhtZAjE17dUsG22cMrVkhTM7m",
  "key30": "3iSgp8MnZQFoYxaWZKtqnyTvVAQRtypMDH3Ab4HBV9w2tSTETDzGW3JJeSnBA8PBbWFEok6PppZAJwD2txYxsp58"
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
