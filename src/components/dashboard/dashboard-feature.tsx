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
    "4yDHCXvDCQGcR2o1ijvhuMMZAz1mnrCVfVD4b4sgcZ1oCHyJxtfUMuFsHuwmvLWXLtRXWKKLB5ErBsP3eL6UFr9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27APuF87rbCSd88VHM2AUrj2XVrNCdt7MqWakMeHeMaHTwUJay1KmTQbkKxgt77WRMnTMUyuF7BYKdMBWf2BCwwC",
  "key1": "2TJBeakPehANDqrooAxUtKjjnNZQ5RzfxtrpPuZvHLisnVs6L4eZPVcdRyW8ivfyhohNC5UjtSHpzgUK49TbUsmp",
  "key2": "3UdiGno9DFt67hd3iSLYsXm5L9Bnrw3Rb2ZzCHUq5eEnQEAQgLBwWB9VgLy7jNyCzfihh7YQ5Fpdrh3HWUXQrYmH",
  "key3": "4zgdLRNDn7wCfPeqPkqGqmxT22XY4WcstVoKGbggbcTBeU5KiGLT14pVJPBc7bevBSehipPZoXNG7JSBz6qKhCLF",
  "key4": "6474aCendTbHTcAXGgtSQ3bVFd1YJ5cBtBrr9Pjp1efNFak2cXYF1ahFNnNsprgVWukcPab4EK32juY6bmrC8zkJ",
  "key5": "bNAabmtuEsiXd5JAvevpt9NEwBXmwKC9KuXLM6jrDjoEcgfy9Kw2ssAHE5WwEmKyYLZjn6qxSeKfcjuRSa2ZXia",
  "key6": "3mQZdBzj8tC6Q7GQKibhq9sJvz8j5HjvTcsh76febV6XqSzfk3eZUSoz51tPoCD8mekFq6xVWp7Kwd8QhvxrLjTe",
  "key7": "5kiA8DE7zzR5MudvNe6ESGuypk6mzdxGmJhqDERzESDTBpX8SVct2vaxfdw5V3Et2gkyKJgXD4aBCzgv16Gtwraa",
  "key8": "4V1rkYeammYp91mEiR3rCh4j1GDt3G6Yc6X1ZgRgWfTecveTacaKwin9zioWL9ticYBjH1YgKKQnacG4aGusuABG",
  "key9": "3MCnPqNKmwecwWS5H2Tp1z85g3LuJky9cbMu6dhh9BNPHM5Bo8BmcykYTw39mSQX2WskBb3X3xkN4RUWAoqG8xMu",
  "key10": "Zg1PM32m8cxUTUc3gUUXoZvHp4kyxcqHcvufHFsLTEHHfrpeMhjMbTS2NpN1C7ZEZEZsX532i8VnpM2gEXEfAhA",
  "key11": "5iEsTMBqFYq5LzqPTekpVEU9MnQ92vfNuRusZoyitsWnLaXSq1L98q4kL2St4T69tBYAb6pbssrmUdk4Q8zD7gZ5",
  "key12": "JHA6Nwqbmq3pAZyUcch1Pi2Kjafp8acM66V3CfcMQnBqWL35oHDL98sCLsddtZ3U4rxmJ5Y6TQkQbzHyM7AyQ4E",
  "key13": "4oco5jy4YSXjUoYu3vnGKVHZYwGYLER3Fbmhymxrqn65Gb7xoWemFP6vbXmo3LhdjbWjUxaDZ4zXKScU24uLDAJb",
  "key14": "5KSkMRsUxnd9toR7VUkCKPqzMJEAWsD948BpzAJAuEYEdVq2aPYrdDAjYP9TgPxtSk8XavxnMmuTAjAg9QStVoDx",
  "key15": "7DXXipzWwty4eVqyRSbdF78uvcEnvvR7XY9SoReEn7gVEuZHGMPzgotfzc5rfSWaxEYMgTDyUWHQWUAXad4NcQG",
  "key16": "53UgkKCYe1JEoKETs7EQ2bUiCNC3J7tuZHovDTzrzGr53umU3LcWCbcMo1AS2N7mrjVWfNsHVwCrRLY5LNvnEwRa",
  "key17": "2USwJz78KzsupRhpv8oS44zUKiALAYnSzuoa6g6pMPPEgdPhuAXcswPG1uCn9gHiDW4qD8VXJXEDRWaJKA2DrNHc",
  "key18": "4DRWKbZGD8k3khvLgGNE8k8y87KrM2RphSjjZeBF4yaBZ1VtWgZasgr79XYxbQSPv37VwxCEJxnmNER1ygVfTE3e",
  "key19": "4mujvnsAigJ9pamhQZzWpJwWN2kgwTJYUYutxjJet3eUGKKSs2EqTNvKpGajZgvJLJQj9WwLh9gaX7kp2sjdhgCf",
  "key20": "4mdVjLWenqKdFz3apd5pzmnk5t3rsDYjYfT3SrKniwZmnQx7qqvuhZqxx796Unkbw4s4a15FsHpEr3MJ74hkogGe",
  "key21": "4gegixu9BtkW8irgZBJf38HGrCUUvXRbNb4HhDY7K7RgiqbNuuxq2mpPn4fTXTz1rpkoTdFyRSsEpu9hYCkLvKfK",
  "key22": "3f1FaEmM8kQsfTJGcQd1vpf6iZjKmAtKC4MT5yvscqrYd1UHYhbYAWDFw7qUJv4c66Udzo5PtMSnuzbd1k3rcgyq",
  "key23": "TEvUYBmVyJjDY4puA1DyZRDDbcA7PTo6qpLFfJyN8urrBhp1JHcWMve23F41TTf4Y2cnYy1ZmDCZcLUsP11WCnC",
  "key24": "2fneEGySfkAfoQss7TWk9RP6TzcvBJT3tgoYHdantCrXqe3ypUsvDPFeemoxYdWmmHCfLEMu89ZYchmgu9Ynq6bD",
  "key25": "5X6ewawpRXy7d2wKAxMbjMMEMNGckNWuoDx82peGtb2WcAYXfXgYUiEKHan8x6i61tazRD1un81uKZAX2npjZktK",
  "key26": "2JfD1862X6LtoQ5U7tW6BwDPujgtMqRtieLVkjKRqfhwaFbh71tE8q2NJiTFZozuve32pH2CjkDhUd5bJP5GYgPH",
  "key27": "5shEq5EzuAdYNs5tLopSmsvAt7LbhZzaM8uWpMuyRutg3ZwgkBvzu8ndQJPNtbm42NjPoETMQw1HcrQ3g1i1NbHk",
  "key28": "1nejbUHBogAgRsVsJs7CCwq5ZyyjhQvvG2SLGYor5oNTrenrEf3PhJAgoAXFyUtf2FQuu9benMWHgeBSjMyQPD6",
  "key29": "ELF1Pv1S8hU1ySf4Qfkh9yTnYmTpuPZQNfGGtWRFCKMEtNAgbbvJBXhGiMYLpJcR6SEMkFtteJzzgc9oL8vW2FE",
  "key30": "2u3mq2S6hwKJfnPS8SGv5CnLzFBkaNxxH9L3XVgx2nrn5cRaKo54rsFZFbKvSvzqCcGkYVNWHEuRNzaZF9m5qoZH",
  "key31": "4jCUjzDc9kVRD6zoihBZwtBBydEsMVk1K4QnchHf6fTh7HsBVUUmzJZuKcJRekxYcRsnPjKHhj7EqPUuZGQXziYV",
  "key32": "5dYXrAsvmCMihPoo6vSxeEZSef4P5eAqruaaeC9QyBczTDQR3H8pQ7PzVgYPyCW1Ck1eF6PA4RuuCU8YjvQApFML",
  "key33": "2BGGUcwX1eWarkraTz7rqkuRz24S86CbzQNAYWipTuMJDN82Rw7Lory6XBn7qUu9zpSUemoj56CSguW5wAPZvpPi",
  "key34": "25472npPZDnoh2WB7Qmx6d5xSzhmHLzmyffvB2Pe58kePaDmzxWNowyRSVRsHQ2eFSaNrY6fdLNMJQAEHg8CGiAr",
  "key35": "3aYkQckPmA1Sx8PNRxMxH1p6Sn9m9GMyssQZW5pjSjdMARpeAnL4KC5TFuNhcsCjQd9ZuoUC7DThRU46Dp3tBjT9",
  "key36": "JXPatTrQSG1CH77CEh2f7sXzkVQ4DDb2S43Jhyb89ELiEJjtHQpLFNU2mcxVZ99k2FYkNZTF34ch39oHMy2cFP8",
  "key37": "2KQiSzuuoSaFXq9SehMLqqAdJfQnB9VmDyC8fYXbBS17R7BRViBfuW2kN1ukY1hHAAi3FvS8FbWVWwFJY7ufALi6",
  "key38": "3RbAJT6TzxK5m3f6LwjfkynsiAGPUk2BDo1Ut7zdhAD7bEDGRXLUguo6Zaym4v6bfURpgtyDtXoUC6nze2ALVgzK",
  "key39": "647UxyuWhsf3PcPuJdVeuLdJUhME2ZPbSFGwhVrN94D3wtxVnW14vyDEG2qVS6uFMW33KH2GhHhNqpMfZAPH28dd",
  "key40": "4kpzUDTUBC8gURv97JoVSdp7Q6nkENGgg1SUjHdZiknvbnFVCTRXADg1tzLTXV121gw12zQ2W7FNcFeC3eXAwAb1",
  "key41": "2rfWMMuF7xMr5Kqx3yCYubEjNL7MJxPhfKHq1ZDeKV1veZExiQnAT8KsSRBhHGD8DmHT7J64DHDo7VEmLfwBFjwm",
  "key42": "5tEDAUGMNBX2U6iWK6wngc8LxBBXextvqkaSFUDCJDWk4cU5QAbD4VnrR2SRK5h8kZKLZtwqXZWCVh15Wr49ANaZ",
  "key43": "4DezkivmKkALLxUMyN8kqKwURiCsVW2zF6hd83Uq2BT9cyBnXoRFSsrMPRoAfDjv8Ud8nZPAUnDjRLjthFdzaHk",
  "key44": "KEQLvYtbKP6FYHmgf6zY6uW4R4XSKMzgs8WgnQ3KSqHtPk4Xd5cqN65yNpFzdRxHdZ7g5ay5Y7M5MPooUn4FGr2",
  "key45": "2qCeApkgbRCrq4z5wZiQd64LTxvZqojWKWVdZQYvYTeztdgJiJ2bBgPTZsN2jCpEW9o1LA5yQz4azYjE4TngoCWY",
  "key46": "3jAuwSgr7cpMKfWMpvG7rVwXf5L7zB9cFKUv6Uy4MWmMbKsMUvBZrn9YBZWFR7ycrqFedS1WWfNqjHEbsyVeUN3h",
  "key47": "3W3zYQY6keEbHo2pUg4oypPx9f49PYKysKoa7SoxtUBGJuyRpdRG7qiiU9fqSYmMLSSjAvjELBZCLWeqBdaro8E8"
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
