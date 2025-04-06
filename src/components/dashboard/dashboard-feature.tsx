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
    "5BU9DyWUrqQBzy1n3jzFQedv7VALLDkV6LceoyBiEKKoibAfm9mnNBRArfMYM42u8A4gcTr5yzfX7avBbfDaNmDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePo1k17ARxnr5mct9xrJh6UFoMM5XCuYfaXYxJrSnaUUZam7nC5aViQDFqwk78SimARVB8cKjBKpFJg12dbLu74",
  "key1": "oWWV7fty5G3bZiFWUxhBUVbckAk8gmQ7i2pEpJN79V4wxGbf854dYFAXnZwbGyPGRYBpaSJDiVEyqvu8BuH8Jke",
  "key2": "3WdQDjGD3toE8s2CgXaC7jTPFtUG5thZjBEak9LZ5Na1S2EG2pYX4Nc8GCACPtRcVdHwLbzrzUJGbnBfxwYrLzWr",
  "key3": "59LibfodtdYBkxoro5FxT4c5wzkfCCtcYiWwuQuMXi8kZj24jrSqCTEfcQmyodFGWm38u66DB4Znx88ikHAzJJy6",
  "key4": "2HmjstpZL2LtUrrMW4ZorjpW2vTv6yarQNTTZEFxU4VhqWbRptXb76G21KNBuNRrg1x7Fu8ofvXnRAVuu9cwV4fY",
  "key5": "4yc3gmq2D5TCAu2tAyeDVNt2R9LxijxbRwgTKwUE6tVjBfph1AWm4cjFCkyvPjwGTxWyZGsNgik9FhsvXCRun5JF",
  "key6": "2YWiyZP5xivAroksCa32dGey3g1pm5jQAP6XSqASfGzyt3FBPEfLB3AXFMyChtKwFL5YrPsmGBGaXwmpMqNnLuuJ",
  "key7": "3iXRYCyKe3yNGP98KZnZLBK2F6SfRemem9JNc7mbKNR7x6yFCGTAqR78PqK6LrxDd6G6kg5wSR5CWk6PxhtskLsk",
  "key8": "EHr2fXc35uzYsvoAW91q65smtDR75ydYjWpAAQuHK7ZE3sPv695aKtGye4txjvwmzCADkCZ49zuQKvw27HgW8hM",
  "key9": "3efXHNVgnnvprnvcdbTjWVPCLLSZv5e4z9TJGSVBPV1K7ebz1c5pAnDznyBfryergP97RxtmsAyryuH5VJU6Jr7G",
  "key10": "4UGtNnKMeMBzdD2Fxys9d6aBi8MqzFmyQVBxLWftjgqkm3RGyJ5VhczsSZBJBhBn8YYhZUFVFuS5DNFbgiWQ9NRh",
  "key11": "2TVhG3rb6X7sEHc3Yzyu8AZ5X8w9Q1nVboigtUcrJMQGGT2Hdkz3jBsMd3eKR2NKFfUCRbNQCm2dr6ebpaHXZe4n",
  "key12": "54H6CAwDxWYiCbEbUW2qZ9nk5FMnyMxQng42LhV4uxDGgcp5jU55W8u1WEqhMMaRhveKd6caYJLQsoPksDZFmEQs",
  "key13": "4NrWGK5gEw81GXPz6FcVwUQggosQybCDF3hf5a3t3AGi5BYbf7jjYEpwpKwcNSgfifZdTb5CBMXqZpFjHeuL7PHK",
  "key14": "3gsd8dganrG68yTH59rEiV8J1BJrFFgaiiF6eiD917ctiRRBkTJ5eKFS9edNt64NVqNQxuq6jcTmKq6JNAGUsvvW",
  "key15": "44JXNobQeifWq7LaWZSaerv6rANiZtKhFFvHwyCWDDDUCdpZ7TV4rEFzPMQBeKr8qs1dyuCguQtX2uRExG7BkPyr",
  "key16": "2E9sNiMDX1RpPfZDSKPMca2QkraSS5zbnryuCHR94AJdix6jrUX3CzF1Nhamhc4RkRFV9Uir3kXAD2e48vPUK1Lw",
  "key17": "2eK2FFFHWrdquSH73yx6n5zA8ryS5v4FJyQkejexPKEpHPKZmxb19GUgYSSciZpmdqJhyBZf21w3hHAtrJLAceZ4",
  "key18": "48DyaQ8z35EY6chc7Kd7a8cm7EeZQE2JrwpzuNqEubkVP1b7ZC51dFMEnK223yK7bLbT9iQbYHyxrUx2WqZfdx5D",
  "key19": "4aei8mGEt5fqjhyBfzcLbn39zCLdB35nuSWBXDUZD7Ae82TPtaJ4TUsa8REwUvFzA7HT9j1uYag8dMSb2UMJysGA",
  "key20": "26sWxQ6roXCptqKVziFR2NYaTnaTrnMfPBxyVMkzvyyCRLHRcPwjXDcpNEubY1gJxMwAcyDzUN95MTi6dmY1UBkK",
  "key21": "gc6DCa1Bw3BWtxdeLHKC6Tvh4NUBhjbGAGyDp7RwRxKG34vaoXMWMjykbCz6hzcPbRkR9mwXwDBRcoGSRKhwoHw",
  "key22": "56Pqy1WBAUuVQRDCU4UomUNVmUR5YQtm3WV4EUWZPQNDURLDouXCF42tXvZMe41MGLn2AX542qyunyo7w5wAMFkP",
  "key23": "5yvwDX5F7UUpq3ykCNRRGD2EcFUaA5uTQuc6KarFjRnakkVsRPocYLRKCmtNamNHYRvekbxvqCvTiSGdiiHaucq3",
  "key24": "3Hv2ZSQwTFU2k3LtVBLp8hGtWuiLRA5V9xBmNGMfDuvBFMWFezC2H9hjJ36VY71cDZFSg4wdCZdwoDqoaqmCtNip",
  "key25": "2Qdt5WyZgsXddEKWF4Cdd5QjJ6R637YF4eEhGcE3VPqtwC8d268Fg6pB9Q5HsNsUGLSEkuuCZkBNcw7hF6MHh3UM",
  "key26": "2GYUAqx3o4UojyUSQ4XduabGcTotMZHryC3eo7GV7mR1NU6JYHn4Ztm5zDJZSv1hufcbWbhvYDFX9pire3dSdQGW",
  "key27": "1JtHBgMXx9MkwySWDXZHKntYSzmgqDLBJ2EkzcXkC58NyR2T7ABTUFmpCfSsAzCzTftYJZaoqMZoDxT9bLpwxVd",
  "key28": "3xGjpvm9b5f8QeozEsRuepPQbi7mNJ7avnh77K37AkfU9q8tqS44d3LhkVFbheqWh4CKWZRZsRHnGMx8E4Fm2uF4",
  "key29": "24rvXGaXQKPYpSdGaEiAWsePbVNxYBJCdkSL8B5CQyizKmeTUMJAdA174KUveHKUBorGoZTDJuJokWqJsu4YeNUw",
  "key30": "3a1CTDaXs5cHMJCMu4XLBVKZH4WSGzLCednuuxPp1rYvSuFjgcpXjkmSvvzgcWVeUuJoSWSKJj9v7JASpYjwsFue",
  "key31": "3NVPU61YGf9QWpknBYMsHJiJD9FdUsxqhzwgYvZanq1qvTbNJ51PqKoyP9GjfGjwjJx8JMFHQEZreTmXaVhym1C9",
  "key32": "623u4wNSLnZwy3hhSVCUweewQh8dDDP8jHf3y4yz24iyr79YFBtJHPULVX6UGPYa3nPBP77L6wrL4QsRPqxsJacu",
  "key33": "63DAPZDXe4MEgKc9PWTxxGod9m9KEuh5oTzzNvtTJ2mxmCJ9BudsbJrv9j7o8fWSVzk2M2ku7VVNzUfSrNB3YtQn",
  "key34": "2uwJ77jT1YaeyA7wxbvJPMTdBC2R2HqQYe8VEd46kyNLMkqtwCXGMK6qhJae5SEyzqUVCgJqTpcZHQhJXuZeKwGb",
  "key35": "FHHhsZrTZAKv1jZy4M7L8MqAQSEeBojDFDNUdSWkYDhHGidYPLaesa6aA1dDWLCvvyDdBP2gLXReevEz8KA6TqR",
  "key36": "2oc3ivRjrP7wWCd2QYSW8s8QyZi7tLv54mnji7VydTcw8u1Cmx9sf94jF87fAs9gkFWfmf5M9Bc5W5CSvFSk4LhA",
  "key37": "2vaQsBQT9zjnAV2zaEVXUCFHPgbyv82AW6NLrbPncHSa97w6iCiXdazwMGZdvZcGhXfAKukZmycYkNc4w92zBQ3x",
  "key38": "3BgFQmrFy9MARfbZHZkom5JAX5fDdLrtyVCauz3RTcEZ2yeNeSd32ryc3o9LSRwFgwco2Z7yhUVSyCPFXekTnBsQ",
  "key39": "4YkDheENepUVbRes4QqFaM4TkjE9hoBmzb5Xk2bU8Pv3b293zsiBbThwFJ66Y5AtfRxPQcTSiKCdDY6vP1a66BrC",
  "key40": "5aq67p9pQ1iBQ7PAgfD3rtSp6xWdTpxysSdQdUFqfUPRgCUQWc5MnNj4Y6iWr7dgah3DnFn7MYgm9AfhdLzRZKae",
  "key41": "m91WbEpkv3jVn6u8NwdE3UABLWq3UfuMHchE6Aap5Xh96wQGeBFVaovfxhGGmG2XvDtUb6WaUjjmt2QmNTqgv2w",
  "key42": "24af312p8PzpUrLaWtw6UBksKfF1wKpH3wEv4JtC2RmcNcXDQwjktYe6cHSup2dPGoFhAbxAtossTKLj4rGrEFmG",
  "key43": "57nMbEAVJqcoDJhaKzFCnuqfjS3qVMQZfDggE1RJBNq2sCnN7MYSckapuZ4Fkercf3hD4SSDGWA35E22cKL5cbA"
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
