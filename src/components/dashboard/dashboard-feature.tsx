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
    "2qWMQpKgvrgro1dmPppLigTFwqBft9KSLmwQWJCG7WCSQNQvNMGWqpQRuyEq6Rtzr9tmU4v5ex5zzzsTBddzBM5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7LhJz6b3hdyAwFL2y1UeVHxfCcYdYzKpW6ATbZoTe1BasZ1WPjM4uVsJoqMnRV2dBjkquQigon18axLYpA4f8r",
  "key1": "VviMrW3HxFQ5AbF2ZcQf9pRHcc2Mu4uAPoe2hu6WUz7LZpKfnQWZ9VP9muRUwdFzrhsH4bci5mQLpyJ7jptopSW",
  "key2": "4Gj5kew9fAhCWbmrVrLUYS6e2BNAekDygQ9joSENpjJCrAjLF3s7RmZkrfnas2Qw8J6YUKgpf8RRdUEU9WCCqxKC",
  "key3": "47a2JsRchZQTZfeQULefkmjQUrQzQmsViv8VG6KwCEvUw4UF7XpPUFogjoYCoWiDou9nj6PEWv69CDHfmvk6bivT",
  "key4": "39wP4fUpJzHL81JGsLkxz83n56Lxb8ktnJVuXFNtkaR5R7NBF8j986CCM7LY8pDDgD1g4kBL5x9jQxQi3xF3FNuT",
  "key5": "8ZucHvAjQwAo16vKPSGpkMeHRsUUXeuwy8eNZrKHfVCFjUzJU5aNiHJo9XwS24eJ4qbsMi87w9cvvtcCiNePMax",
  "key6": "5GiVBMtD9qCE8FpNzzHR7byCS13qmkFmUzuLS3ohnJpNdyG5knkZid7LhN455jZLDFUi37gAaG7h6MmW6KHwwvis",
  "key7": "33AnkUGSSTLVUA32vch1iLz4tyxW9FJFCyzxeA7MjfxQ1J7kNjCYeL5CMbb6sUTXNinbW1hfEqjFex5RT8JwmVxv",
  "key8": "4UUBdHYHXk5jBP2GGgAtrSJqm1G5wFxppqBCQCdjpUnCX2VpcnzGNw3W8HigfYdNS6FLpLJJLvc9NgrqdypWhmoH",
  "key9": "5gHxDcydkw4RwKkvLeE7ysxzrHtarZrQz6vyhBf9gxy24JHpu3gtsi99kaBapT7K5yRB8HSzhAavfH9nKPmb2gy5",
  "key10": "1gok3nd3w8AGkN48PSvb2u98e7E25SQu6NgLp5ST8Ryey3jd8nHk22gzjtrqiaZtkcwPHTkGeQQRBB91FpCHfe7",
  "key11": "5hJEd6bkR4DGaJTaX9Xcu7b7YmSvi8h5Tk9wSPttZzUkqaFiGxNYNU2EVv7RBNLWp5FyTMBasg5boGHfnuhYitTh",
  "key12": "uzBrwbnCR8M6ae4bWy1qRJgphEtr6sEExu4a6hNPrQbEDji7NNPTgBkmcSVuXVE2UhZHStJWueWM6mGYMmi1hhR",
  "key13": "5Y6sm4SSKKCKBp3ZnmKNRuibVExv3bc3esZ2LPReFayPkt2PcWTtvdqToXAbEN5bHiGd2J2pW7cGEPpbdoYaw8P9",
  "key14": "2FSCvpJTHp2wz4jeb5NfUSASYWyELhfjXRXeqUKugbXs6j4vJzdWNyNuZ9P6U66utN73wV9Zfwknt2A8byUhssDL",
  "key15": "5Kr1UZts5u4fr6Gy6KLZkzhyqFv7SYjxvEstwgDbM7ryqEJtaqDdEYvMjtvrzfpxfTCSHERYENSu7p8vFnCyGr9B",
  "key16": "4bDWjfWS2q4JkNDJpuyE51kaJDLYQqDx7FTpHq3xrJYxnYC7wwzwpChAG5DJDnze3yLvX8PeZfid5YntAUzyREQH",
  "key17": "2d2FmMAcyiDD8YCuj7UEdUDxjhqn5mN9rM9sfbh6wpYt2mW9Qx3NJGjwm5jAS592SG3tLSJY6hrg4zP1HbbUCYTR",
  "key18": "5KywQskpqZ3iimETvkNeGCSmxMZfpWufeckFbqrmZfYJLxVGMweqYWFDEoizhXf67jQg8QuX4Z3rNAWufkT9eEyZ",
  "key19": "63WDs5VyyLVXhm5U2tudUKaNt9i5HkZ7EDPppzrPSC1jMXVM8Zr42vX23rHzbKypZqVy7U1cFiL7AHNnwU6rjzY8",
  "key20": "2nS1XaACpcBdafGSUx4GniyC9iBdSYyyJR14287PDqsKzAXkcS2tXKRkLAbGRUd4NA72mPgsYk7jbrXodTUNsqbJ",
  "key21": "3w3DVZhYQf8Jbgq7Xk7Lx4dBJQutPo8HUs3j3YxXNMgimCtYbgxU8nktV4mG3Wmt5HPunU1oT2PPypCKZx8YW9L9",
  "key22": "2ZF2hTXQK2RWfpCagaAu7bQAnFk7qWfuJYRyMmTFb8e3VUykThVvsPVatRKK19xN9Hr2kbuJKnLXimkqs7PjWxtg",
  "key23": "3cv6NmtnKjjrj2mitxGR5QLctD31JWLy8UiPRcyLivaybDBfa2bz4G8wKdfbrJCi9u2xRrfFrjvEyVUvuyYMhJSL",
  "key24": "4hMnxejtNhQYNxTrSLwq6jcvhvVbePSr7wHWekHEKSRs8vJex2hFseRtwX5wbnmqxQ6C7hX6y5KamYQ4gw8hvodu",
  "key25": "Q2NFjrYbH97zvLTGh3PmdWb1V4oTiMTeqKtXaB7jCkj1X5Tbet3r2CEap237WBh71ZEkPLoTfbnwqeX4h4AGoL8",
  "key26": "4DX9U7XvX9g6DLV28U8iSEKtZxKraGMHZpGZgCDWpWEydtt13Mr98geERvpzYtCc2b8SJRGHwpSq4DkknB6Fk2QP",
  "key27": "5AeVKBKTYooEw3fnNFimY2q66CTPHvW1YxbjiMPf5FkPmZug6ip6AH1GAqCYfC8CJSYUw6V4eqM6WYNN8XHcU6fx",
  "key28": "5MFRgDdJREA2jB5TCGd4cDk23dyySqaGANN4snEAFtS2suCLGpqazZkV3X1haxddWwMCEQK1D8EQ3Vgykkee9fNW",
  "key29": "4pCB2wz1im8vy8vELmixawfWXx5L9XhdSLj5TJmtpgvFhZ2cuh8b7bf7KUdhps8XJ4iBPit1yHQrDKTt1LtreAG8",
  "key30": "45exrDBeQGXhmjKq6RLJifQA5eX8DVYVSwiFMkF3gvc9VnBLeRQMkycBHAKo2tkayKyDReAJXWx1D7Dui4WGwugP"
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
