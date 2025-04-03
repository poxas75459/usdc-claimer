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
    "44ycBnicsuWjk3abcWVNhfkmdrdzNEbfotVXuYgm8vSj6KAyvAfFJsku8dg7uGkGLcnb6oTNYskCPtVNVRz3Qi5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7KwcqMjvXyX8uMdfDvwHJNF3sbUXUVceenAft639tHuMFMwAxXDki1iYFEqoxQczhMcuxxrKsDtfg27Ujqw5QU",
  "key1": "Z9EDSbX1CHuRLNFuyhQQT7V9MAktwv9SxVR4NSZKWNDgKTBmvqbL2YZe77HaG299bEeXCbwrujAswczagQMYL1p",
  "key2": "3SD3QE2D4zgvvk67DETCcmNkjf2MN12E5ugcs6s3vBaCRjfJRBvBK67avhSnbcQB1ymYSN3MFHhoqixRdnG1JG5e",
  "key3": "56pJV3GLkCTskzpQQkR6cdvrFPS4FXDDyZL3adytjgqXqGbEEr6LfcEasKiy8pPVitDSsRQJp4ZqMN678Pi69zeE",
  "key4": "24axvDjBB34asSiVnZLKr59UbGiyGsrKrgJ8a8mN8BxLQepXEwZfYbkVGomBB37GRybRL8m2hiFSfiNGKozUjxLj",
  "key5": "673VkEPeWwTiJMV2jy7iQ6vw2zBqz9KX4SSSvz8qyqPF2z8Ldgau6NB8sBnQKSdyhdMDL8QZMz7hgmaoxMKusubD",
  "key6": "4eb6gg1vnjfmSNFDRopSbUThaC11pQRJXtLC8y2NCF4VQtir1x5Hw6v2zmMHJkTT3Z7CvHYgGKPmWGmSrFtkpTGo",
  "key7": "5cpXbcqFxKb9ASvcf1rS1TVqaiEzjNb4KGhpVF4x8Wy7TiyqkrvxJDP2Dyu5oykYWDgu3JZ96bWifGPKwdmHwpyr",
  "key8": "2VfUJqJCtpxfKMRZV55kzG4Ejpztr9855ddf3TrNUKKRD5FQmxUNxVHex7VNWPGMNH1UpAsK4LqdNZxzbYbg5nT9",
  "key9": "5LchvtvmVr75HmMpnqpVzMtfPy5PoyQ4q1rMbDnmZVqjfKhbK2F16g4fcLPBUsnLE3hi9gTqMjFEwDVMQd2LkEAr",
  "key10": "588WrZqJ7eddKiadKGVYxgQtsykitk1d3KmGgPP6mqxSzapJuHtvVR9rvM4BkGBpsyqM324AH9hKay547Qn4iAK6",
  "key11": "2pcKyGg4J8bkTb7wF84SSyBovGt287uKaPBSkXsTpQS2tdkfRNRYX6tz65qnwa93TudVyQu23XCcGA4ZWDBB2kb7",
  "key12": "5HiifJ8o5Xx3JwbuEWTA5SJbNjeKUfduYGHqQPYcWdiHNHikxXJpMXbdMSPLUFfuac3NTvGeTiSeTD2mMn3A2Ce2",
  "key13": "3wH9bdDZAAv39DSD6jvHAv12TjUQGedBdnKQzifLz3fCRw4jQThFGdysSwWbtPsnhrW98fge6eVb5E1Kuru71xqD",
  "key14": "5MQT3Ys67ocSz9rWpXjnokzsMjt1A4FNGq2mU9xYn2NmY12uEq4ePJDa2rWKxmNn6L9mSX9MJqg3Ck6b5AzHfcnq",
  "key15": "2fwjxA4VLamGtQNfAn3edzTVwU99xBN2phSDbRB9WRkFqGAv7GtavHmHUa9Qd3g79vK8HwGf2MCesXyCDSjgyfPG",
  "key16": "uKyqqbjAgMVVH6rg27u1AxajymNSHJ5doHFMgE1TWa1PY6KyLwB3JVyqE8EZYrrEP9fFoFuXDGcRnbai9CANS9A",
  "key17": "5XJ8yo28zS92iLzdABe9rYMZ3L3GCUPLPS6Afgbd6zqVwRFGfP29V1AByKgch5ryHjAj1ZUgYZhd6eFxBYVFL88c",
  "key18": "NCt2dvhyd9p4N28ZDgm6ZTPv94wHoapFtqeFZTu5RoCNY2V9WNuSSiSz3CkKcv3wfco6UfCG9gk9wHVyfEjNFXB",
  "key19": "5d9w9UPADQZ8XEBJ24HqmsrvUT5ksz7TYn7fgXh9LYnyhYR4zCbCnsd3ya1R5VedUffiGPBgNQzUcyooStsZ6jqH",
  "key20": "gjACXVwHBv7JWaV8qYGZWpUVHK7avkQFW7QLNcv44V8ptLfUu3o6CR8humV3xExRghz2Ku1QRwGEdFF1nxRb82F",
  "key21": "8vmRr7kqKA8Puqmd4baGAmTPiTYsbZaoVxqJMe1EpW2G7ufthwQ4v2XjmZnCoTdghSHnnP9P9Nxr2xvAdGW7FXF",
  "key22": "5dh1eNHsTjhUiTL2dAbMdt7PvTMmLopU3aDsmZjTXPfZy6j9Kju8uEyNPocxcfEjkiWip3Rs8eokF5vLDrmjAFCf",
  "key23": "326W9qtp8gZQturKkWyAMaNgfN8GbsunqsgP65JqkaWEVMrr9zWHxgtmRCwR69SyHevAb6tf7aAYNKzLz2ntmAH4",
  "key24": "4LHrnhUUHVHn3suXRSC1cJVBe5UrcE3YsZKewNFCDS4VADcJqo3MbxE3o29dLAL3ByUEQ4fbxFspLCjS3jrjs97E",
  "key25": "3gmto4Ki7uUVzLJ8xhdYKrpufR2RxRZaJFB7WVskXjokT9iz5B2AtwuL8K6A2yugPFMgcFi35gnrm3r3bAuRVhEK",
  "key26": "4BxGmxXMnzbn3U5UyZoHrTcTD4Kze9kd5XnskPg96gQvPJJ1yTdNjYL6RTUNrE2XbwTEVKRWv7fvzbjobvhNTa6D",
  "key27": "Qbr2vaxqKJiF1q8u1VdskiwHfSWTvtvF9xHU5WC4haAzuvaTfBXaPiFGCk2WVaBDgJsjs744GfUPL1ZgisLVEpv",
  "key28": "4UCkSvensHGgh4DgmH8KvBrKueJaszznE7d8aipTPMoUsMaZsNbqHwqohCCwHBPT7aENBWKFXg6vuGS1nzx3M34P",
  "key29": "fCJCtCywwN5avDq2Tjxo8iqSr4SiUVT8aAtfezz9WRxt9VHV3eWCwHBkjf1SpEKaH4nHoiZn1Em28fHDYNXcb6Z",
  "key30": "2CYgP4eJwcA56D22rA18DPoT1PjBxYKXdsbMS92W8hATNwteDrvPFnwTNy2jvW7pjSPhQzbEyHFu9bzsVcUrjADn",
  "key31": "13rsRLc2j2P5Jx3ukAyyjMQGXrabRGEUh3qqDof81V8FUKi9czRRg3N8ui7kKQg6WhzzbRyzrnZzSRKC5ZSpmzE",
  "key32": "2KDMqHF9wgNKgRFpj1MsEEUUHEQvxPkyUJe16wdm4pfxABP1UHJw6gXAFLYtRusvFVGDqvESUhvV4zFB1wi4sRKp",
  "key33": "3GN6RJHT1LEQbP4N4DtRCdYEWZVVaXaSdsMAeVumDsAJKdUHrWhRptC3NeTgBqHHLKkHARzT63t7bmULNM4M1AiY",
  "key34": "3G4ZGewmbUDPjt3TicTLPfvpCjcik5B2xTGXQXCv5USx5jYhxT7xVg7hxqzYHh6V7GrXegaj1BuntdTQKSWs6WUJ",
  "key35": "2NfytR3YhhUGM4Wn5VeMqj5AYp4N8pzmquy6PsQm2Rmh6fQ9Kw3pJEsgAVUXqwoM1eACvjDBvHxN4fs8ZoKp6LdP",
  "key36": "637oHjuyPYeYFgnniXuV6PUn3vHZxYYnQLCktLqrdm1JEnWYggc8G2mov562vSgLwGetE4hnKa9XTY1ULqPAckxP",
  "key37": "3EShyhx7QaUk8Rx3sVnWuzVuxXcbNwCT2YEimjM8ZkJtasWnr1XeEJk3KKeREVuXdEo8Jw5vXnWcfdsd6yzhWaXS",
  "key38": "2GncaYusmJLkVwvw8fdL2ozAAReBbsYezrtoD5J15ie7bDjvkAc5UyNjDku2nEkWS43HxibxrLLB5MGXb9JdQXH",
  "key39": "59Ta9mKhwDYTfg8wJEGYJAnnMzQhHZvjyZVXtcK3qHpsomc6LC2Hr2r8sJg7jT3gr5d2FhkzZ3VmvbzL5ER2Xa3B",
  "key40": "349e6sRWGVfzwA8GugRDsj53ipmWX1TS1QyDAvL8UJbVB16pV3npF5bTTM4E5HCGyBCz8MDfFv7KiTs8AHuWwTvE",
  "key41": "2KrXWCh977cTDwPBJdLrMnZV6a79djfnX5Tt2JDwfWw1qhKtiKY2Ggt5xBMvV91HM9NuUQ2pvQXCaWqgJ6cAbRP4",
  "key42": "2rMbBXH1LKego7z64Kx4nY8UKABdzKQq7zAThQfy5PSkTTfQwB995kbhdz78yEdeBhdyQK2aANouY1HvVifRfyJj",
  "key43": "3ZsaiayTy9sBUofjWXD3WVyv87oBvcux8oxwMVFv5C5dTeesZwUgyVKRUq99VrXWLec8sFuGrCYhC7Z56YtmvDrx",
  "key44": "3XNcLKx1BTeiQb7XeN3XiP7tYmbA7y61epYtyco7rjFWrt8qoca3durSeeSNrjQP3fAyiMgsvxaPGYU4jRdMejLW",
  "key45": "3XaPQKCF4NPQ5ZGVxgBMTx2on2qsbGDjiSeJsykrbrZUDctZLY3a4RnAFaMStcF5woQpJVSEkHJ38b1wvUzKKp21",
  "key46": "25FfAHKg3L16rCBq1yVevU7w6fn8RvWa7WvWt4v2MFSVikgcg2AkgP37SBKLLPLMAB8woJEE7TVQUXjgBAkkBTbn",
  "key47": "YyJo5PWiWC9n3RaFn7QjoPLdnJ8NjaCTxQeVqSYMRVP7hxo2Arri6ckVwMMtQL3Gerwispqcci1hvZohyEjj95W",
  "key48": "38JKZfw5NpoadKHC9LDUg2pAemUkSbXaV5NHMmdf4QfrYbf3Cps6dP2QbAYti11MqHK8CyyBr7twVqPLqcorMURd"
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
