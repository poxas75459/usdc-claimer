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
    "5Wd8Ns4CgtVXgHuCzhKzAypwZrKbsYkLkiMDt5dbPpSe6FCZKTCNvViN5SRzNWVGfh4i3Z4ZSBEt5mBPaa8stskE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5J3gWur5sNfMbk5vWPXN8rgAShWEsHNAAhJKazmVrizBSnH8AELNYrkhpkBtuVLu9Ts37RC5vL7zhHKdFgeeu6",
  "key1": "3TpoPo8a5F1r5RyUvTpdeeUW29vNxJ7ZzKjC9cGaXBgTNdRCoDFNUnUSDf9tHQn4edW1Frsub1iJK86qANFsTaBg",
  "key2": "3yNgLx3zMpqDjo6uYF5fFKD5jQWwKnaEjSSB9QU2Z8yZtUARcwFaG3AGdqNZH7pBG27ce1UHwBSZzEqs6j36Ke4u",
  "key3": "3K6hAmCAPjtASqbU2Y6DdRARWWXqihGqdS8QkUniQLg2G2KxjZCJukiZrknU6azysCGzwKz1fao1KQvweGJdprYv",
  "key4": "EHyeXENJzEYBjEyXm73KfGKnJVAj1wAduiTa7nL3csW3qPsGv2RcDdh64CGvE7RQ15jJpxzjuEWgyr1zhcc7Wnv",
  "key5": "4ZJRACSKNhazgpdPnR4voGXMMbtrgDAHQ3peFQ6cVUVkx8BmQrimd1rTE8J4tbud1a17xgi6PSRCSJgXTpvAjTYB",
  "key6": "4WkH1TQyVgmoY62mknEqn8xoD4QxpHvtWvJcoDYwHmpdayXQ9z6qHxLsZSiJbbWm3eCQe8UhVyPN7P8cMP21LLg5",
  "key7": "4mck41cV2Wp819VuEFfDnhNo4rBoVXz5aecLhoRmxRGkFGbrs8LjZGVySGvqsaFK5KKD3buadqpLsrwbwS3Z2ZCB",
  "key8": "3BwGU8Uua8WMocMboyqA8ZEiZAgrKsfo5brniZs9uUnULkgp4gcRKcKivvoVBeB4m2K5M5zqdm9DSN5cPvmBXe3z",
  "key9": "4rNYakMbRAcWiSXrq59G6p7nv5L4Ewy3EsESrS4NZHoZ1HvpM6tr18cQP4BZjc5cBuMiLPgEBbZxqRNemhXnfSU1",
  "key10": "qhDzuQ3jDMDEeHGmKMNLQ5aknQTBQQEYVuWrqVr6CGSR8dJ8x2obByLHNbwCzWvVXQrztJJY9bm77oMMFnTeDQW",
  "key11": "d3gbwrmhRnw1b6EvtGME9vfZViRh5HTcxV9CLp4djQs2ACVGsRtgYtAgcs9NUWLk8PWqM57kywGyHywRWysy62L",
  "key12": "4Wa78jRAe1eF2e2UzT7HaXfrXBXcypTxgiXRDxwaHtKsXZYxvp9oN1uQuW76VBm2UXSDe7GdgwhnJXPzZ6mDh16r",
  "key13": "5EQP5Abw1GTqkyDfUBxxfbnpjiiaaVDM5btQ14yfXfGiwmHayy5jBhexnDt9DB6AzqnC89VD5vD9mxhDoXt7Vbwj",
  "key14": "3UhbzQkHeiQccTUxu1aTiWAQ4HVWkebJFH3U5MrE6ikQpzSGstotC1afeH2f7kyz2GDPNncUHzwt8Ldv2125Tuw",
  "key15": "2ne5wU1x29ABKYsVuBDBNvKBdJAECL2cQpfRMunH6CDvoX521etknPVC6FMXizr3UAPgqYnFXbXeh3T3sdfxDdiP",
  "key16": "3jHDWrUyWhZyTbjaurA7entpL295Xork7qeTEUFVsFEVHezHMg98cG4yxhzkNpTaSL5PaUGmG5JGJjWv5RBKaHhD",
  "key17": "4wvPED6VERsFhFZo2gw3YHddLYrkAkb2buJqyZcvrfLwKcG61CeFfui6mgrume7AKxCxsFdarKxfArg2N75bprwP",
  "key18": "4VRYhK3566Zmcs6iEwxxNSQcMH8KwLQVMCaGTZYiU59wq4LjmDZmZNQFAU4eJ7sxYDuYaTbPRBwasqWRbjTBpo9n",
  "key19": "3tHVzJJ6PeLtUR2utzLP4zfZzxbFqGzCgASuiNjLQomh1fcenVwJaaYTwNGN4Q1HLHFoDF96e2hKAtjfjEeXDmu5",
  "key20": "3D7DnzoGPVvfWTRiab9JT1YJ3rEpDuQzQVQA37Jt7RCiX2fCcqgs32Le6MxxC5zz9J4CZqgn54dZy5caJ41twq16",
  "key21": "99tguF2VMdvp5RcP4bUBbbqZr66cdoWqSBrj2WRTa3ZGKnrDCYk921PRRcSZmG4kvgmwPBAE9D5PCJ3utFSTrSR",
  "key22": "3siTHbtanqzY2NMKNvJtt1DDBKuq9RfSR6fmTNxRzscjnqEF1UTxva3FfRUXb81j3Pcfje3BJvAPfenBRnKR7Urf",
  "key23": "51znUoRuWuyqATUp9u1vfErUSLFDcC4ySqyjpXsJcCx3PYBggnLSYQjjmV7vmEgGHwdVQ6rEjbiTrrj5QqwaQV3L",
  "key24": "YSGqj9QWYiDWHTSP2VE6WiSaJbA8HKtMyAWhPprMzSVNAP5LNLHNjxFvxENaNcTZ7hWQ6EESz8L4FczyNKg19Qe",
  "key25": "2HaSfsMpg7PRAf2k5GAFz1SmzG5XxqP7XsG16C9YSMDtSwuogVBtfKinuWR8wFh8BqaFZFXYAzbvKNBhBZbDBvYx",
  "key26": "YqS7KmZH3U4PUyZqe7ZQPPFW62QicHSmiJw7woh3EjLtCD7qvAgKkhwtgrWQ6JzKxGX4DySttaFkLnmSp9Qc5WX",
  "key27": "5VanrptSx68WJDYr4NATN4xm7WZ2QZg42GkPep5VdU7qfL9jc9L5tYo71Vamg5JExEwvAjhgPULMDrd48QgGS3vn",
  "key28": "k1hvynEPv2SoVfUQGsiXsJUdBytty48C1CY4WPaVL5dGExLuXvqXdyerqxZgdnGHE1Em6bn5ryAmz55uLx9NnSe",
  "key29": "3jFH4DfjdgvmEQhGmaSWE6a3bwugWt1KPfXGJU27arq15y9JXcEitZpZnuukjXdGrL49A1rTsL3bEUgriF8b5Aiz",
  "key30": "3BU4CExGCDeJJZeJfM7WzKY93nLo5uGGG3bpKFqSg1pu4MnrGmStBWuYEXrTet7n6SVfCPHzGrGbcZHXWo153BZU",
  "key31": "5eRdZvAZXPnao37DA7UAXFrnvq27wnb4iHMd1nDBWuxGaaJCJzuBrwd1FoWYRtPtrjW5gxdXnEJcc1hGSmsfBBQH",
  "key32": "465rQrHuc6eGfeYJnpZfSm2vs2rtRorQaqXGwFtu9apJ6f2nkPhtyZGdd5anKPZSUe7TCseQhfYB26i5SWDW6M6J",
  "key33": "3VPpUniubsheNuPdWwUWrbvmj91Zw4gqvpHMLRESkANfL3XiDdkVxWrs1wA5HcMy7jRcRvJNUoDZtTRvCrPKews8",
  "key34": "43LtayTgrK9A3trUbAcqK3rLtqDCu7iTCAwJ7JQTWW9tqHqNrhrB3UWmtLaGRfdAj8fMK2tYJ8GQymoKLcNoQa5z",
  "key35": "1N5fRPbcMQ7muVGQrjjfULci8FP8uzv8vwB8H89G7nPJEM9jVnEvVpV4Zbgwqkmxf47fwVm1Z3tt6UPZEe2nUWi",
  "key36": "2Dygn48mFa7SwCVProoG5RSSE3zBaLw17z8eEfo7DDbJ7N2ShzxFMFxwkvHTL1KvDH4pJqKx5ViYihwW6uyz2EYz",
  "key37": "N5bmXhWeWR7zFfvZuNGcdV2thDgmrqNCeYP3G5RE9kA6yq8bgHikjsz31fcBtm9pe8SuzrRyfMV1mWLxXuCqhFY",
  "key38": "4iiZiyxuGzYmftTgX4Cgjjynep2xnEYvqGXj1E7ukQw9yjmEdoc2UjvXWheopnqXF34TuMuaXrstPib4yzNzfaWj",
  "key39": "5cfYHZWqptA7gzuk2Ly6bPzkZAsN919MAQ19fjr3JV9XD6mKqn6qwPEzPB7Syu7oTN35EauhGWJzpqLR2raSoKN",
  "key40": "dnq29Mp8WCopt4ikqwVj5czrjVJwa4E2vLGKthNJyU7LMiiEdhBgN2CWgb3SSzgQQjcuKiHd5rsjEVCtPqJjphA"
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
