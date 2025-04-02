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
    "4jVeBQhoRu8UyeuEM3nbHDiYhvuzwjZRc8YizY9RHTXkPgRZKLxa3xRA1bK5PoGog3Wbi3ycyxoWfSpat3w75ws1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcEEYDD4kPV8hm5vg3qQcPTC41H5vBXwv1iUDDwAUzirTNhuAUVGg8VcpJFxL6gjBKSqyksyy7oAgrxQT9XgG3P",
  "key1": "5kwSUcizmWhWSmLE8QePU5KXjqkDQPtuFTNKwTQwQeW3gRPbPZuNeRauKLAjkAqKX1uK5PtdSDvbGWCuVhz9ERvV",
  "key2": "4GhsHzdML3FzvDiaB678ASt8CCD9uYR3b4tU38GV5sTKqT4rgni36UPc7eQYi1yjNxDYFkci3pWE56PeqawYXoJ4",
  "key3": "BhBVXmNW6bu8KQviqh72uDewEzMc1FmZgKwdvtSwMNnkec9K9xnVxRvcYUhsx6wedGqPQLHe9V5rK9ihFDNU34x",
  "key4": "5BC315VigTKk2wA5x9V8njQbNezGoQYpmwosCy64nm3nkXbRseaHuBRwJkcZm3o8tVCKNgN5LJ4iXHC6exvCjtSx",
  "key5": "2YR1ArFCDQwJqySdxiaPnWzzToEkwYR7ymDdpdS7BZsXqKQ9kc4zxGYEe4HxR5XhLjn3CDksFMvQiEizFNGb9X4Q",
  "key6": "GDcsJx8ymzry9vV6okB2eDkGiC2PdJM7JsMToo3ZByv5JpLBtT6CEMxF1VpFCjLdsKX2P7DayDT7NH9RDuNhESG",
  "key7": "4boCww7aWj7qc6ozmDTtn9dpEtvb4zY3rqCpJTTHEoosQfdRzYWLeuf9YBKbVSdxUgeQxnXKqw46Yv2feCGSg9gi",
  "key8": "35RBXdsYjDWKqTcChV8apBwwC848PhmKA6pRuEnJkV93t6Dy2dspMvvAenztqP4Xn4AkpBRqizAECMXLE8tvsQRZ",
  "key9": "3jqRk1M52T7nQEEwNWBpBRChxrmefgUfzUyfvn1geGx3gekjBqFfZcsGJhZfcmtdP8juSgta47NGqgruzFepvagR",
  "key10": "4YurPwsZyG2Y93hiW5yLA8svt5imv94z4N2Y7M4sAYhNU4q4tbtzD4AoK6bKq2bWVAkFTkPBXVRt3qZa4f9TYDH6",
  "key11": "2jkbZvWk8a2hbLv37DSeAFjA72EfGSwxUicGEMymhkMFTv8d7GxiJK9tmxKYrnE2JvA4JJUBusKNgPTLux7DE4NQ",
  "key12": "2j89kvzgsafspSsyTNQgHP9U4oWz2Nmg8gr1xRKJD83WP2L8tjEzce97M3ZTi9MFNF4xYHvNE65TX1hfvjxCpEc9",
  "key13": "3Spb6LVx6NNk6XdmXGQ1qNSAkads942ZXsKM6SDDgE1rQhjWZtEhgHcJRgnBNJXgcN1VbheocjiZ1yegTk7f6RS3",
  "key14": "4j3G8ZC2kR2JzkHpC3LTpYDawYuWAJ8aqtQkHRGbbMLfdnx4odFKg8bKamBGmGMavP1RC9j91cLbj6vgvXiL4GLS",
  "key15": "GbccEf7GFX5sDjyE6gBCp9Tf2BoJKvqwqgWdLDXeF13ZmtMJbvVbvshAJzXvjvWsivTrcnmAaDLXLcu5qiM1N7f",
  "key16": "5XagEhPghZ66TKRTG9z2GF5TAyrm1riPsoNffm2GHMKsaVUd6JwUJbcJjTEq92xF9J9dWBKWfUYZnaSA3P9GPBBp",
  "key17": "4mPKC2Ks55fMFV6U6YaZ96VCHdvtNXBFadc6kL9BYi6vjeB5vczYrVyttxxfN98MLCQ6Vf5n9CkjyUG8EWYTgCAE",
  "key18": "4ohbxZ2JKxUxb73PJqtZmUsFh26hz9LCGU2gDQrcTRXWuHSRxghNnEKmoC7UvFHvbpR7jm5XWnnjaVvKHQKwespF",
  "key19": "yRZZgku1GJpvqCz5UdJNCNcUXzp7GKSF9zdpeZi8enbwqbvyFUfNCFkA72FzeEDQKvrsj3pGLYTZkhrsWmVHQdg",
  "key20": "3HPH4gU72GBwNd7AG2fv5jcibtx8kh1QdfC5CJvfLqiezPYVtEvWVAvLpzX6TcVBph7J4k8GuiKitbvujR9dHtRu",
  "key21": "5NqtGAZiRAimdFAbZoYAUzURuRfmw2tyxJ1rb2x7jai9LGTk2TmnTAJ3dzscCczwg3NuyK8XckZNZkrpswye3oSg",
  "key22": "3C1Q8axsm191Ro8WHLEDjj5BCjYiYdr8t44kLr4neidmEsUhDfwMx9UiCALfah2sMNowgQi2dQGEFYg5k6ra7Hso",
  "key23": "XGgfAtKYpejwTEYM2SEYsHimtznP9LZ2yDxLcGdMNDoWaSJEarmaqyNbVpMHw8oFxD9CSgnCMUFwGJk67Xsc5yx",
  "key24": "4tnXjN3XnmygXBRvZTEg8fVCFe5QF2bbzrULwBEWzXnYbPayLw7yGdsvGjwNCF8r2QDnHixs9Fnp7M2XQHfuk3sA",
  "key25": "p3H1BXn74Dw4aRKw4SSLgm3Tsfb62T3bHcvAp4b34iEBHdUeud7oEkQKAhpnPs1y5VNYykacu91DKdg8zvHJSnA",
  "key26": "Apikq2mKRVFGgkRymUxCmHdiWKuRY6TQL9czQSK64bzvzfTwukq8Gm79t7SmgxrsR5Q6cWZmL8oJxKqraC36FpA",
  "key27": "4DpSPHRx9HTnQDwF8t4aNKNVn4tDT8fsmAuTQxAzQQvDxxL37Te4aj3BxQJUamabnuVbbWWzngC3jVo11TQ1R84g",
  "key28": "3eefU7T4u2GWunUJnYNaKArFFnjaxcinMw7qoP2e11Y56jbHXyfzJ8fAfaPq3x3jSJZwxhvaSem6Dqrmcwp76Fir",
  "key29": "2ERTJFtmwYU7hDh9FqpqZgTktVNAAkNivwCZQAispiMa5Jjo5DKXKXim7g4sctAMRtn7nxSarSw2q11YynuPuYEo",
  "key30": "4oe9Kd9djfBuh7CpmsB8QsRFDhSpVMf5xFpET126hif1SKoJPzCw3NR8d1jVEZ5be59RMHeo3bBbZQWKLkKyEevy",
  "key31": "3xTszXtbZ54gS9wurRGA8vE674M5HFC27j4b7SEtAJEXxEr6q6sPug1EXekZVRSoauZGFCW5E2B8AHmLHbkQ2SM9",
  "key32": "4FvckMe892XSYM3gNyNd3sV7WZttoCaU8u2FhUXkQ7Usec7AqVk5ZteBzKqzAUvYfMgXA9EpzEQC86ZJcwR81H7v"
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
