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
    "4QTXLSsy7dLNH85p4pFEhuLGb2HFt1zoDKkr1uKGYqYm7pKfwR5pKgZzeYYjTBEZ4uLjtVRb2sBosUJjhtjPqGB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6cVN3BoBPeBV64RG6mbVcjk4KztD8943WUtoqRKYu5QbqWMJDGJ7HEPvs71H2EvRUmguAqXJC3AvwXXxrozSb6",
  "key1": "4gn4rGB3ehHv4jDpMzUikY8W91pMaRAaGHv6PDKc64FTskXzF7G97rzXjSq83jWF2vFETuQ3CqpYVaTxa5fFmLep",
  "key2": "kXuxP9VtGKQTFaeYq356Z9TktjxGCBXCS3fyTNk2hAwLFE6TBhGAHSgxWoatgBUo9BrcSrg2hsb4LjTkbPDSMW9",
  "key3": "5XAxaUX6K7iH55N4YzUUnd1HtzMayn2bUTBHJha8xtHrtzCQjvR6HHvx51kNAP5VRi57MDKaTt6JzWcerj7c4DbR",
  "key4": "4W4z26h3J72LbsbTvTw8efmvm4jQMjzvfrHwQLmhhL95Kwb6dH4EjwUDB7i6TPN9KGMFjEozGypCyFtVErbjsyVd",
  "key5": "fSKYPbKPXD2f9GR2ocoxF3Uz6ECnc6NGZCWcpFZK5ZnJaUYBDgGa7T4Hw9Bggtxb548LkQRXZxbbzREbYB7gsAR",
  "key6": "4Dsg7VroCRfGTKjx3ehnULMoyGheo5GRQVuegWqwhNrJY4bm3PvpK95wF2hn23Nuj3qfXkiQwQdDLTaTuJvK2XdA",
  "key7": "5s2CKudscCNnNe6jee5z8wUzM3rptsvwDvWYZaW8XkQ2oboQjQELLj8znVf8go7eSV5miWJhrU6CGJ8mHAcXQBPk",
  "key8": "2D7E9pwBEFm6yZNsBfBWf2GaCFmqtsywGtyXMvMAtfHdX5CgJmVZpzBE5mqux5yxB7yVfmBUoER9JUcJ4HFw3D9B",
  "key9": "4KVv3nZe5nVyg9CohNzvGv6uTDTi2u1Bbuo46djqdmChkeYaLhwVY2AQPucdHbQ7XdvGHXSipJRCmf3VKk7zuQxq",
  "key10": "YkzD6qsum7gBwUiTsQS7geXhchsLrQgkyudBRhXxZnbrANYG1iWphQtUr7RXvrXHeAa9T7ZncULozt6Dsb8Pdsi",
  "key11": "4QwJrCHWxkbksQw7KCAWpJmpjCQwKWTQt2sXnmdUMQWe6YTaJYGox6BuST2rbqgFQ4ej2mnEKJpJGhzjTjKV7v19",
  "key12": "4pZMPKHoPXEg9pzUgS5jU1xVNbdoFkYYDjQRwFtmSonj2CqNqfjGAYN2VAnCEaoYbDLArvAhsCBtnnecUg64a16C",
  "key13": "4n6hRi2MxpvuVpnR1k4eTANk3HnjxQJhyjJBFxa3qL62bCC6wAbZoG99hDcw2MHpGxYr7c7VnY9kLXkxPSss2HMx",
  "key14": "5NM4XpNAfh7293ZSgrjk7VdKtXaGFBbkdGwwvpJFEXWCf9czXGdePSSP3PbwRXwPNwGa7KkEGycQS6xDudgYnHrR",
  "key15": "GD4hP8KvWnc4i3XwjjYMfsv1nYPuCtVzxKzhgVKdgaLRo1tv7KXtkXtxQvM9pucwANgLWXxj2n5dpiyVuqfKqRP",
  "key16": "2X49Pi18QuXSqhNg6rYARSA56H6ewzVhzMyqpjpyMWvwbEKtHuxxfxSQnKiRVQuajDzi6w2f8UwYe4ocYu4bViCB",
  "key17": "2HM5ohm6PSi6eneZS2Pjd3VpVhJe2NhmRUmX96HXkumc6CtR1eDminrc8Z8wfxobyALLKZtbmbzKWdVGidwCyvSw",
  "key18": "5DwyJDiSZmB6T2pMrKje3fooVELPKvxGtfKRDGnzojeTtUefGSsi3F7ZVNYdfG5DhZa6NDTnPwkieC6pG2puumic",
  "key19": "3vbK3zgURkFCRTeDJEe9kemLZ74dNQ7uHB6MfK4KYsPg723w6Sw8UY7FmtddKmYQjkvA6cKvEmN1E42kWzKpL8gn",
  "key20": "eqcZWz1peJYHTVVaGF4hhW1qJDu63eDVzvUGBF65VYGAMXWnVp3EjGCD2Nsunceoo7pMLZEKmjhcDsQ9R7V9pmW",
  "key21": "3ybwJyoHjmhrDbuVz7FdthfK3CZKzYZHHxs8nFy4znFdnUp6TPjxWeuKYMPo9MeF9udMHGtjRka3s5tLPN8UGwVp",
  "key22": "3oaEmtPMyjC8bp3eBfa5BwnrSif28Gm8iFmoKNRwxAXdHCQ3boQWNTSgVyUQD14j2MkT4NMmmS32nrkwFs5n9wnd",
  "key23": "3JCMm8jnbX4qQbV8YbWYwha4RnmeKWqeithGcEhzi23EQHVFXRJu6cmSLubezHNVLVibsAMfzxk7DhsaMAAz3ksF",
  "key24": "4ZAqfHquJ66X6SYt7NZVnY5izDtSRgBKm1vgyQK1k7AcE1JjmFHUDbqjZ1wdg6vwbnsHM3v6Uo4SAxcSq4K5LbM9",
  "key25": "59dvv4YZ6XLjzhvFNdUmenf4Xg3ExnLfHhUSA1WW7kjFjqKy9a4yJuFGeriQwJtpQKYMCYmwgEku5CczKLNupz6Y",
  "key26": "wiTMRnwnxxqLJ8MDRvZ1w72S7kdLm762sYzSAspXweuZooiBjgwFnvBE8qK6Fxx9veg4LcodqmQZhNLP31xdrAi",
  "key27": "1NNAZpfwHEqPzuTE8C4ZWJUykcAunfkkw7GBeQRJ6K5xbbiiQCuvSSER6hANYxEFab8tjJcqNdr9eXJe45nAEqp",
  "key28": "CKfeyb1y2irQV1jf57CrVb4g35X9zJEnhuovhFdH7gzi4TLb1nyctu6qgvLFWowKHV3D4EBbZJC4QFLEEZwzRAD",
  "key29": "5hhoD9qED628pkDhreQjwX2AaKv2xjsZTchpQbSrkEKWTs4YF3BFPTVL6ypRUgxXU69HtVNj25XZyruwE1GPvTBa",
  "key30": "hUcfi8DVZZFhTV9QnaE3nhFBiEakPLAwQoYvgtQf622wMKaRWs9Smd6cjMkVb9s8pJBW21BiAAuLRnQFvbjrH8Y",
  "key31": "3yDbKvRmm9yQ1MiqLfazuqvS3ufs97mwsTUTPWtvzh8HfgVCt3DLXh6qTbB1j2R4x2G789wczk9ywavRSSAk9KQb"
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
