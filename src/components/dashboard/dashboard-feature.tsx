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
    "66J93JsyhhgfVao63GQYUkYbMrkHtCVJeyeFj73Ww7niR3r6ke3rK6ug4F77xgU4MvJTE7YJcQ7vPyjSHRgdtH7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKePWLFxytbu95HTttpSkGQj9n5hsGwxZ41Vt49JBBMAk2jyaeLUcjbwFmXkm2e9mf5G65NzpFKhYAQg3qwKfAX",
  "key1": "52hT7nEKgNSj4jezrNQfo78fnheVykgwQFCj66e5DaBqksXfJXG9rPjNRe7WniFVbyawnTyNXv7mAFBwVK84A4WH",
  "key2": "2P2rd4w5CR54sZnJd5QEBCmNUByaZzM1Ypzh6FSu7A4k7aKZr1oXr5tqTRSpew3SZe4hXbEAQGxPjdqHKGEbbdM2",
  "key3": "3sLCVasmwfjoh3E2piwC5sF3EnXRnLLY9P6BFaogwQC514cieoAASEhWgsquLAbVwm1N2jbMeKrftoQLTXNWVgGm",
  "key4": "2dbLGJJ46Y9XHPdiq22PEHY4YuZ8xnXJdPvUn6ydnjDSViPpDtYEbpy4CE8aEhNUC2EdDjRmXfdAEnUiemUzbqCF",
  "key5": "3WciWbKhjjSHqJsCFMRys95uZ17cJ8HwNZumFT599o3tEDtJsxzP8T2UXSr9WQ8RzJdXmxXkn9gz7BNUMPfmSKLE",
  "key6": "5tegLqWVDqyLQ3w6NgRrrYmgfbMZFbS9ghmcZFPMoxFHWzCjurkB2od9UUx1ySkW48LFbqcivDDgcSXtgmTpd8US",
  "key7": "2EobD3PyA341mAANwKkAUvx28WGBcm3nYhoSH4xdy8PTHfZSZsM5mteW8P6TY1iBQny7451MhNEneHfBpVWhDvNX",
  "key8": "4s9r62biM6LR6s7CgZsT81SvG5SANgM7GamhHppjG659quiCLVw5JMjGJSq8Fo8dSckC4vyri9XJTAF5egqsReAj",
  "key9": "3ZkcToCWMaLaS3gJ27LURJizPw1x67C3EHMMFierLbVMcTSCScPW5SZYVU8RXn9kXTWRR5U3QkFfsu73Lx7CktpZ",
  "key10": "kW5a4x4vP1LHw4NLiWoaPgc1eY6SaeGvYbQzYMkW5YyhVzAjSMqhDZn1AFE27m1U6AzWFJab3F3TYec2vSCoSaW",
  "key11": "31xdUTPLK9sFvrV9fikNFeFph6MM4f7xxQXP2CfgQf7LFZXmT1NHBthM8oVqx1XHWFsJiE8Z3JDhhEXjgestkZMB",
  "key12": "ck8QCLXjprwUaFDKs35hU5xTg7KCDG5YA5bnL98NhTpH9WYvnBMgeNbkDSEuZtR4rWNP2Kcz3MPQwEJiWEXb8AG",
  "key13": "5DyjCCHGzQVb33A2z1edSxLSkr4Gw7RmiqjSw1rYYuor3f3ju9ihM3DSLDdr9yfuWGpgrhyzYUKmPoEnPGhVvjvC",
  "key14": "NbBoNbfGDKRm7WkTFkSiNoGSfFH6JiwCmegzn43eAmh4yxuFYQmRQPazpXd7tTsCPYNVZa5VtxBsuRHa8pP3xu7",
  "key15": "4T8VDZj2RxSv4LozkWSqT8JgFqBCsKG5xoNSXf1CUibcGH2GwcRDQF16744gut7wcqPE4abpiiRhmouMbqxM7hzG",
  "key16": "3bDEQXPZ4enPHu4aAfsyJvzaFFQAqFnwbEvJ56XeWeMt6wdubvLmBUFThDjjKWKySvzPLsygTnNRVwgtV7SM8ZTv",
  "key17": "Q8m7XksV5Dj5ZGEEEdzB2ijLPyEYBigCRrCicYF5LacmdYrvtr19uhms4eJYG5BNEJr7bXMutFppHmCucBCG7Kk",
  "key18": "3MKzUJppjMijBxjJVmZpmgFuh8dNS7YbHZsYo77zsZ2yk8U76XB3BQrLmfn7Zjq2ZdhiPNEp7xeNNeoRkMztoxS8",
  "key19": "2gDorfFnDDULoS6PSXQXzWnks4hS8dD5CcLivS4GfLqm9U2Qt8YKFbcVrxD4Xer5LvVuQFBcKixHf8WEqT1DT5wR",
  "key20": "5qNx8KTPNM9e5WRc7W2MLWxeBfpURhRgN65Fu4xLSbyjoiwej36PSmAjcdA4Ja1N7V4zaJ6GUwJwkywEXGE19uSy",
  "key21": "56rsgF2D89y5PG3DmApJXx5WbXpSXEK4nJXamkNVBLuGoiuAMH7P8Cuj5HTM8an7Y4WtmrTbMzEy4y4pXQVsJw6x",
  "key22": "3gsL7zHMZU1DumcAdfRnESu1XJBjhawv6xa3RRpdvEbmvwCdrys9ABEtPTuztHDYA6nCPNzmhoYMyRJBuPBWXpMK",
  "key23": "3BbGBEmx8fZG2X3sfZHgkNwJhqYq4Vg3yVNQqtfbsvU2FTEks7pEydfWB9j3NWZvrS8kjW1sKqrV5Qv9DhqZTyX7",
  "key24": "3JsUPtUQmrctxGHiPZ9vu2rhBNTTFs6bouL6W62v4USumaMGYeRQ172NSr11qf3T6cWcLeBtxq2jV1ojrAMSRsBZ",
  "key25": "BdjwKgshHAgkp2LG88eEvMTBZnSNxRqANmhCxnXRLrpVk1mCbHuXxEKpw6Z2LNAyngEXiNNg5vVZDdvMgVmoGZJ",
  "key26": "u2QdAMNX4RYTFaWo4s5dYGus8LwsPTrpCUQx3HxQnyw5EdA7M695TpebRMRekB1pfp2KoiEfQCUicYEvC2GGQez",
  "key27": "4C3NBGhbvRwM5DqDN2WgjRyP1dkdXrzQhLA8TkC4rthm1ovb6jXXoGfDeVJTrctL7LBeMKEKaCVcgmrEsmbxyYov",
  "key28": "hwQTxejqeYCi7pnQFL67EFTom4TCWc7wXMkXywLfg7vWbrpGAKAhHsA5hNkdbm5jmCTcG3nL1LwkARGrmBhJPBW",
  "key29": "euivw8nRxdGUhBYo2pPqah9at2UxdsX8T1nCDfYyb7x5U156CfFvnspZSUcqsMQDC2siKypfjNHDz8FTnfAnnPs",
  "key30": "oU7iGHQz96d9rG7QrWzaMRq1N4d9saprsoPU3YG87biZnfTk7efwAdVuR6i63FFFhab7Jh3LzgqC9XyoBU4ZoK3",
  "key31": "4i3yJUsqUft3KLtw4B3k6gNKGXE9yV5e6iUEbnmTYxuVRvwbe1Zm8efgBbChmTMyQkMpkyaZ9REzmD3xaomjtcsW",
  "key32": "5HHMMKSe1osLG8HBa5vZTzsBYWsBgKpDfKL2hG2SipZaW2J7P73rN4qoBEuPZK9giGsxEo6Adr5DK8mEeKVc4cLV",
  "key33": "2Gyh8Qtg5SZ9Tw1ZSEgA28HnGwgAAUczhj2JaLKPko57Xpk9dfJSJs1MKSFM2NxF1aKWacPAymjrNVYywsgnfvDY",
  "key34": "4bnRNwzTAhxU4TBpKxYFnTa48f9PqVJmjx1ygy1Tj6xKhsJPT9UD5KQ6cgC7AGjaVnQ2MPiRCzmKgHPF1uQf1zkk",
  "key35": "5no9rx5GkeEqsZUyTBp1UKciU83peHwoF8H7TztsQuSxMPQLxaSH3rvuociPfaecY5yFAbVQeYWZPcwgLF4ic5pZ",
  "key36": "L56BV1nGLt8DA7xS4bjo64FHUTLut2fLR2nGuLdSrKC3dYmPU4N1S1hzuunamUA7w5xV8bgUV4nU6dLmnRxQxT6"
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
