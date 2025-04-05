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
    "42uKePbUaADKREA1wzAaWdMvatRs9P82wRrkjTrudNP96yvjpKWRj4BVPnmc8dtgMP8uVbBHaoucwFqJrZm3Vegb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKndfJbvByobU1Qk2zFAcfbiYvGM768GwiXvBAYHv1YBpyC6XFA8EXBjbCobBMiDV5aU3R9VX9fN1oLu241YqMC",
  "key1": "2SnSg3zC34bfJ3W9BdNrdpi1sFiNDhcVq9EpRajmuLBNsKgrzJWwWfv1XZoC8T8agjq5sVQMtcC19WPb1u19FBD9",
  "key2": "5pQd634M1M2bLBR3x8s3dGYWaH6qwX9Uz5KhE8LFGSNFa6QaD57qbK2b4W7EtSyN1cwM5kkUU14RW18QSiUTDpgV",
  "key3": "2xXvxdG5eG9W2DnUCXQziEPmr7i4AVzsR85ikdYa3L6RFpE525H1s25UyYHsDd4mx77HRMsPk3Q2UFu1D4NoFBhC",
  "key4": "28VUDHwTEniAVSLhrMVH5mLN8qD5UKjjruxQTbcMFP3dYjs7G8gcHcp4BmgPC5KM1Wy2DoBQL72ZU5EzA7GUWmP6",
  "key5": "BnVs68Gj9WSDgwndUZprPByYSEHj1xUDhtPDwCXzuKvDVxhFd8FKa1ZwBRdTGxTFVMyJSqSgn413KMRy3fvL8ah",
  "key6": "29DfKG87JXUEGpZeenzQo9TpvPMjFXaVFBcM19X26HTNQfZ4PK7QkfWKSSNPF2bRaJQXyMXowJwe9SwWpnqi2DV9",
  "key7": "63H5ew1QaB21D2w8iAoD5hoeF22eGHR52CCjHB1167HAng5eE5EqSwwjjVrD4fgwvR3gms8hJ2FXUyPEw41N8fnJ",
  "key8": "3g1YpHoMgvYFgXpQvAY7i9ASFjMCaxMLrUj4d6X9HAeBMwLzxxQrF8Uu72Z4dB84M1QBVkiy9KV4tWokWSeeafSM",
  "key9": "Y3NioPuFqJQR3vLAZLrwX9mb4vj7XYqrXaLYAxsaMJaE98fPGt8Gyg2ZK3ivdzgSFUEBCo8sgjfedWUcAiRgJRy",
  "key10": "4YNmSRokED2kZ75T8HzEt5N3jEgLEUhsfZvL7Tj62SKQM9EMUC5NZcHJYpcXDrCCpBHjf1nxHBHd6RW4fcGjSxkC",
  "key11": "qqYCMeAVYMmfwk8z1NReCcTfWvwsgqKwB4UR7s3AvGgr9VGFjwWUbXJwGoc2SRXqoJEGNpPPnWC73pPphMFvNNA",
  "key12": "XNJt1HfMqgL8CgnJXfxYsHyiZFfqrbqJDnu19pm2ZY1DQi97wC7ubH6jZebH9XT7ZQcVmgdyn1CRPzxvar1SKgA",
  "key13": "3chjevULiFihZZhnhybT9QvnKyBqAhPsxkcfbbDBGgkuh5nwpBQWnr5rYNhY3hGa4m3pwdNv8Fc2hxwWAJxXebEr",
  "key14": "31wQyRiQQXPiN8BgZEe7LPAzhZ4YYnKgySDpGTcKerTdQHM22HgKb8MrfoDRM5YhZSPepgsfd2hSSV1U4EcGuLaH",
  "key15": "3ZorvGFWqdgi3RzYCRc7pKbp9cL8XDQAkQyS4UcwAXJ3dDrsSEz5Mm6hZuXR2453g33qTNvgLfZMpnmZLGqiu8rk",
  "key16": "4DLDJ6PqZm9D8bxg3xX2wLN56SxPwQxNuN4mLEMpTsiV26x8BXnHY7gFBrVo8XXYSP2wwqLNqhHVngprcrkSsJP3",
  "key17": "4h3zLaLtskknycdwdPUiT7u5RgYB5kkEXYJAd9AFuxdJaBTrr5YbLMootEByE6GvTTCF9n6mMDvKVjh36g4RP8Xt",
  "key18": "3WQWPFHQistyyP1jdtzcNXAdJNsYfsLhTjcfoFJee6Jj5GPv6atfZDfJkzoEMpyPz15vpvZCrNRkkCMyoqZa9Aw7",
  "key19": "5q7ofaYhkctmWVwP7Pp3x3iz7rjZsFith3KKWsqt7bSfvQFPBZwN68Tvh49snCKanAqxekxneHkxmW5zETUaMSYC",
  "key20": "3LjyPtcS3ZreaF6hzCUTaXBCKj6zcJGFCog45uUFeAYeCwpyrtsnraRP2ZGy4ZhtZQmrZ6AVYDTK2pbZBfCu861B",
  "key21": "48hXJsavQVmZ8TeEQD2uoyhiQReKAWyzrWepZPsk499dvWXjmCgyG6ppxP2TEWHPtZGSuqDixTq11sdnEyDyzvGM",
  "key22": "5WsnKDmxw8auKKffLCdz4fa6mdg1ZPaocqRyTS3T2oQGS92b3dj7dZABmMY3uNDGpueXoEKpMVn7shKMdS2SzTSE",
  "key23": "3RWcKkeVegvQQ7jUd7SVvqvWY9F7vnU2rJMzeBYh8gBy1r9jJ3KsPbqMu4NkpUKqBQL55ffjztu5hMt6V2CWzs96",
  "key24": "qgqGYJ32THeq3PKDxXEAqMEE93JX5Rz5eW24a8xpTJH61s2otK4mvivy3RRqzqp4jJyGr7DuFeWpRimor2zD6Bk",
  "key25": "2nUeVX4f23ANVXbUjuubdarxFTRs7WnQBLJZc7cRdpucmF5vgoQ2BEyTnPnuTCLZiv4rSx7yuvVjgBvVQ3kNap1Q",
  "key26": "45swuVvsDkC2sRyPBQuH4RLW85LTeNgiEx833Uus9RKWTJ8qBka6rPtNbyu9SHpsvz6sxpDzY3bwAZMJgEgtYZJv",
  "key27": "24ctfe8W8jRyNi1HNr9xgVi86N7gNgWXAjrHMSdZ4kuXqBjgQUYYJz1w81AiLvub7bBKB96NcDcSqNKzP5yhL2eu",
  "key28": "5mKBz3ic73T5mjMpYhd7g15PxAJZM7oyc3cLPhrbLeBEbQ6YNhwdJDRBTjwFEzb1iFGB2HeCusn9Fe8mSLn32jza",
  "key29": "W91qi95JqMDGvpsJwbPzPRsUU37Pdw5FcJJuhk3xb8eGtrAjPDqk9YJ3DEFbomNbXhMnSTWYZX9d4hZNBy3KJRC",
  "key30": "5dhp9mUgnK92Sh1nGALLCsbzwsdYju49aJZB1fs22gtUgeL1vAzuyvmbpbovWr1nDCH8MQEKEjPn5CgGbBE6SSAt",
  "key31": "oU9soctGKgD4Akoqp3AoXmc1R7t9fUsV77xb4XbqY3dUwpPeZUUeSSyGu1bQ7Wn3q2EwDJ8teYPzGpcc1Uq5WKM",
  "key32": "5eEKqyp8BJfmNhbBobA2XRdaRkMqgM755jZsVm3BzQo1TD4nfAPDcJjFpRtEFGskVuGhiqN4LYiiAdqLZxqNUJDa",
  "key33": "3SV3ZJtXx7vhVDQvDSGZjqbk7fRa8EQF7sr5XTTM9ejpK6ju36pPmtL5hzuajJ2M8KPFZgrdL4m5L2nSS1S855Gd",
  "key34": "3xQGCUw2Ns1DM9YH8zXkCLXNKq92ok1hwGGZtJRer9KhZ269tLnt2v9L4KCr53VLpP4uB8xiqZZDmMXSqFo2xmcc",
  "key35": "qF8sUCNxUNVzELvFUU2YtRDP72UEBxo88YpWQnMcCrCuvuZ4x8mK3MXt1QGzzUuFJ7wjGcJaTGTBvqxLqfGakTx",
  "key36": "5Bb9ZYz68NQCqyW8VXdutkHkQCGGY8dcnHMcD2uDs8XsNf1oHfuMxpV54SUCjcJ8jFTQs3J4tazPwGKB3h78Mvye",
  "key37": "4wTM1uSSBc3NJuNsz7bKEP7VRQhZ7qEg9UcS75Wp7Lxqvr7Ezv1mREMGiVraiu6SbnqmPiXQZR4BuMGc2p3RFcLw",
  "key38": "3hqeV6jUrY68PffshAcTS8LWNNyyCPsJw2ikNd5Wu8RB8MPCEQhCt6sMSUkxuxx5iDCGWP4gnagCRUV2t6Q75dyK",
  "key39": "4tZMx86fMhWj3bhYsnpHPVAbGx4UFPkAbV8Mo8mkuHvmG5MnS8T3e1YxVUU33KwfLsZakTDsUjqUqDEXp3AJVfY6",
  "key40": "51THKBqC2gb1infSEoWzsT5dkJyUNPjEsXvcDEMKwjYAbGqrJv5PfzoEpkqtJeD3uPuiJrYpTKZvoNzir16ACX15",
  "key41": "s5887LEBd5RyqkmaSsKGPsZ4U5tji6JcJFuJXRkukVD39vR31xp7kUipawR1smvQQJMnwNQVA9fRacd4J5Ni8Ne",
  "key42": "2EJ95q9avRWd7gcDLsmt95N6dSWtwK7ztWHcZdacAzzfq94bTDtVwBHFv14qwtyTVLZCBhgqmcH8kdLvxnFA1o9G",
  "key43": "5xwG8Lw2uVaVMJQ5f7beG4TgntsRUnzGJiGsXpThsXFiqfLyAkDEDemMUNgAhPmTxmoTrZkTTW2FLbdHKfMX5Bnv",
  "key44": "2mBV5L22Jzit1nyPgnU4Bo5MQgY6Kn741LkgXpTR6VJyaWJaco3CvyVWmbpr2jaCJm1pBD3w9eBKbuR22dix7dtB",
  "key45": "5iUS4uAMnGyaQp3pcoXY3Bw2imycH1v48Yj5PdVUggNq6A2RUSrXgXHofxBxxEm1f1jwQ9jM1oeMotRHP3UupWgG"
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
