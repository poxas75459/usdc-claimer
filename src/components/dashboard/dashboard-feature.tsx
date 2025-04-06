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
    "2ibdchtFgyke3F5xdk7TN2Lr5hPF1SHzaJMp5ED5qPX89wcfy2vDMFQKD9K4qe6wWocuznLt5nRMJPRJEdJNttvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ag48zFPYWL4WajNzLLxUBqsUZZkX9BBnFphTJj8JiidLa1rascN6GZNe27Xcj7UvmmASuxvmvTZsMVvCXdPVBD",
  "key1": "3p8QQhJYvA4LBcYibJZFFYhHZfPsXZs8v5a8xCuvf2jVY3n1Aw7w9n4nKbDgbf3ywjiu55kFXQeHGkAiYNEjjxKg",
  "key2": "4pZfUms9wbcf2T3kq4qDqr2kDUprPJwttQRwHzyvkCqa6FkXMBqz5CPxB5d8tVEKmG3beS19VWTj2E9q4qzVUsbA",
  "key3": "3osNrizcZUA3DbPwi6KrnCZCAU636gEXWVJnULkvD2M6vx2t2X6pMUS1hxo1Ur9Tq1MNJLBdhjQStRaiLXxg6AJU",
  "key4": "35Dcco7qhPypsxBH44y9zZCRVE9bXwqix2BW2M6WVLJaVAzGuT3KAFU3oWyXB4NCnbmBjtJoQt5JWgF8uXt2ZvtN",
  "key5": "kFJuuVokhov1oMFpLsD78oeiR76P8DzMxuPjX1XDJpxxhDBJJzENAuYywAPr1wQVBgb3RMQYooB6QxtbqFPxchf",
  "key6": "356RdzZ7JfJrN1pNrK7RWvLxt11s5oAU2wpXpaXLQTwEpbnQbqN9jj8QQdcGWsUEN5QPshthqK3p6wfm81oS9MgA",
  "key7": "3U1rD4rZyEzbfsFkKD34uZhahFipDvCV4cGQMmMJqm1YjEPtgPgmghAz63C9KwMKgtUg6Y25CLiMCtrohfpgebnG",
  "key8": "5Dv177fN1j9PwfDmqh6yFjoZY4hjNd1ZN8AwercTVbKEK1M1aaPgVVKvak2UMscWKgJCa1EUb2gfuzkfAtf2z32p",
  "key9": "t1htCFA3pdSVjgWYKMGRxCw8gDXHkjrWkZAcMKaH69cZesDEHVqa32peGLY5E3EhqnbkZUG7JK2UWJSoX7ZkhGQ",
  "key10": "5jF3GWuJmvt4cMfNxuA7XZxDEn3tQqmUHozkKiJnMgWZdFtZ1dog6hMvzuYADyhp2uoTWiSf69r1chNESbNNCesp",
  "key11": "3fqbgnwCGeeG8DWa8GhufN3sY5H7jDWeNNEWmugSepTk2GtsAoq2xrLqtNPf4sn7UzMKAHwog8W1NZqykmAVnTCi",
  "key12": "4j1GzMmiPkEvCahdnFriR6ctLpGco6b2mY1Bc2nZWbtLr6fzVLpTDod35ggYMBDU146M3djYgM9qSg2LH6goBhqs",
  "key13": "4zDncC3uMubVpvgGR8aKeaQT5rc6gd4VbFdqttwmZcQhUBu2qe7zXyT5VuQfheN9YQz9cv28fFyTGPjJeAh3ha7r",
  "key14": "2aXBd1HDQwtrDe4aP2f7bD7nUADDvquzjGDwELd2QgPPqjw3j7sYXGCnAph8513J2r33jfVYyjiqwAexgBT7C3Vr",
  "key15": "dCxMo9SjoGocjfVGvkEtFBDbX6MnL9gR3Die6xDFpTwwRbtaDCXSi8bKMDibJFBkwfN7nmT2T31ibtyZvm16oQK",
  "key16": "a86MXaEfZnRQdoLn3t7ErqQAr8r6zukDu4FYzLw3RbeWpukN1FDTP3W4VLxBN9cahYQ8M3FebkhE7vvgYneaxEs",
  "key17": "3scQFU5gZWvnMRRb2YfF7QwAmDcEBYnrFFmiUhpgK2KYtazPMBTKySycsCduyTrw6L9kuu3ncaXmwPhX1oXEAenC",
  "key18": "2K7pCrmF5tpgWC6pXe7fRMYW7RbViWsQa6zeKusVGz785yy1mUuha7gnGxCnmWKU6ZHDrXe9FQBAKMDSG2S8xXn1",
  "key19": "4wnpjgwb7ufRFj96D7Mkat33GP71nS7pdqjWyKrzY515osTeQSzQtc8LTzWck1vWGhMrU9e3sgAUdL81TPs7PXzY",
  "key20": "3qg1HqVa5eE7i2VrtrjEbsdr8b6JXQz7TeW7r5eAotbqDKTUBfEaAAGVz2v2NLhFKDhhNbRkpwncYXpDtRGqgaX9",
  "key21": "4toYBC4myd8apm4eu3g7Z39bZBGMnRDsLTEPCmjWd5G7euYj11A4fqQZkFVnBtWF2tLBjgkKJZidVpYWg368xWdk",
  "key22": "3veyYZLeex9ZPKcmVvLgkQ2iesprirLGfGQTSC1HB9tqGJfzXV4cUgQzRe9bxXudwnUzAcHpNpC1KreVUU7m2hLT",
  "key23": "2kNxHRfZsgUrWCuRZJPz8efXcvz3mJuPH7QPP4vydf7hNBmg29bPMcaJazsf2waDGrm9KJURUCjEehWy7hbZ6b4z",
  "key24": "2y7zATzK82tVEd6anzgmMddtSWMQgBjzXLkFiaBKKruLsxioFQyDRoBfhwMkgpwAgYnmGrzuJHnNayHnwixkP35K",
  "key25": "59Ho9m1VvaXDLGdXJufmwhBiALFDGHVsmTWz6vLiYNrr3DAZFUeMEZuQud14GMbPXiNtXX97H5JQgcNwVUK55Arb",
  "key26": "5njK4rLFWw6txF5zuiRZBwtZcAMBqarvPPjFYAAEWqL8b5Jfws8PkmjA2sK5WikvDm32y7aEkAGFxjTAnTkLPgeY",
  "key27": "2FDdgTrhncUFQjHZsJ5hvEEW8C3oy3JWKPzCxvDhYkfqiZmPUMXwJShUBMyXAGPJaLpLPHwqh8ZFo8xDesJNENyy",
  "key28": "awjiq11sh6sP22FmYMcL6q9X6Zz5BRCWhALkMnN3Zt7r34fxL74bFFWHTtCFqLV7VAhmuXSF8W4WoEtKYoDCDAq",
  "key29": "y999FxZoiGCh2hhNi83DbZ3xWFSaAGhvTvhjrZu9SHaLHZTyoLjAexHb3vrsis5FYpp75NUJGc5LKAX5D6CaKf6",
  "key30": "2U3eE2AKZVmwbRfEbTVuJHG35vTuAo6zB6o2gPRJveJ4UDAcxeJu9pzXo5R3wwjfmEDduCSN8Ha2XF3uu8tmH62n",
  "key31": "3QsnDX3NqNW7YQ3qPnnz5cwEZWaoC1PNE6e6mLWmyJ54HEs1Sr8RKPjwY7EvxvqubNEuo6Gw1FU9eCG3rSf5Pgau",
  "key32": "3jBUftBdFT7MEtGaVhcufEyHTmFsHeMXc7xKmAKoFSjpQHezsVZ5EofQPV7sq5qUJPmTyGxWbtLMaFgRDX1tuYat"
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
