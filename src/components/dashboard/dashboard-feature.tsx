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
    "LhXnFuALyxcAWvRXRRC9m5mb6YwsznrGVRXsuoRrhX2mg2VDtXLDkYzp98hzo1ZHhSXQU7zz3SJTwrkBd8ADhbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJQJyfeaLe16Cw1ccu6JzJJu61SyUwpmticbZM1x4QprddSxqnP7sGaeRArm8YTyCvQVN7sem7Tc6UrgxBHGM5J",
  "key1": "3qBTeDVSZuNCiT2cjkBCahvAXT5rCdFnNqTezMJorju1rWbLfTAqDtLyTpPZADDXMEjaNGuab3bGZTPb9D3B8DzT",
  "key2": "2Fd2fyMGybALjHc2weFE8EARikTxBbmHZcXkPQHeC1uHEP4jHv57Ex2PjeKedR6NLPRaWJWXh4CjciGKxtVFjbWP",
  "key3": "448Qbs82YjVNxzQcQysgMik8hRUoSh8fqvsUUNUg5KiAYamjyEXdR5VhRhoxv7o1etYQxqAug89ofrAEgSMDrAv1",
  "key4": "4nbM2ojJZ36nHP3gurbCiWdS5T1Ah1JqQ5mffHdKJUpZNhf35b6yTsEP1PV6Bytr2pQkRjJtF7oonz6UjT9dfnAR",
  "key5": "rgpAH4mA519FBuLE1iXB9JXErbzAwXy21phSaRxuyzgExuiWqEQFeUCqSGtDFkfBF5io3mdZSihWjnjNaX5xy7E",
  "key6": "5G5BEKqqpNqRc8Hcw25ikXbedy88cSjYCBhb7uyCJdoSoF7TCBhxSVnn4C3DyeFHyXo4hVs8eEDK8eZ259p6YZ6i",
  "key7": "2aGsWDEwtpBH25hJ9Tkh6unkpnJMHxhxCekuchfiV885wa4JahANbSsr3eNW3mCkdbtCt9e5tBRQWSYVNbT3bBhm",
  "key8": "5WSKhHsrNDJJedjA9mhyaXEiqT6KRsVUQhXaEeysVCd6Py6TSVVDsq8w3DbzPsb2JnQfTcmT7DTvMB15H5E3TkQr",
  "key9": "4T2eRHGXyMWJ8FXfaJMw1fNA2uMTTdeR694sS48wT1s52PvpZrwcCVsevEeUmJuwLYsCf9yQtPXtxxwuHLAvMk1C",
  "key10": "raQDFxei3sU8fJ6XMpNo5j7fxPsthgC5dpE97cjANPCf2kfHmRARvjBQTMfzZujqMbLLtpNUG426ug5XBmunoR1",
  "key11": "2MT6LzS4uX4sbZJLxcpQE7HrtF6wmYeKELBMQ41VYW9NRW9vBZnjznERNwxBWAEZ7gbHAise9URRAyu3ds8v7Yma",
  "key12": "2wYHDThCvoR9shs2DeNzhshZJ86aLrPNUhRggKqrRHuueqfUmDcVht3M175XFYe99ZGMuD47WqJurgjgqdaLL5fh",
  "key13": "4BBeeXVfFb3pDRZAeXmcVz9zmnfy2vW15Qm8CTAxsuHxGqG21SYNqLab9HdVNQTLsb2HhcFNi1hbhrP1VNkTNbcB",
  "key14": "2GwAxqHd9M1V6JTurzuojUEJuAyo5xhVDnRhdes1Jx7ZEUrA3qR488dY3233eauEmaJzuPtc268bzkZs2ga6iCBd",
  "key15": "2fHwEo8MjpBDZ1W5tPDfrKUwVHY4LrasigfehamauvumnFZhydj7qM4sjy44KsonEXQ4nVYDiLfV1E5ekpQbGWzz",
  "key16": "z9QF8S8paSfgYzmHHJdgcmpPTobYA7sCjwsNDGrRRY61hRCrKVR4gBGTNiJ6f9TgKaj3UBsEjdV3XDrPrc8dD8Z",
  "key17": "5DBrpTNoK5VB9xYdVEsGaMR5RfP5PfBc7kiDwEzzUXhRdhrZo8E6sKmPCuAaz5HgwTrUjdcknRBmri475UMCYwgW",
  "key18": "4GQqtvmwrytfdRm9Y3b4ZPr83Dz8oFwT2Hz5jmYUpgGo8kihugdStkxoEmCpMxaezD6DmKSMaKCFiDqprTg5JpDx",
  "key19": "3JmcodDPuQANkquC9Kff5NgD8tGmdtbNDQKbsAfu5522xH5yZbXUdHNjJ5QvyVAn7fXRdAnZ1g5yz79Du9YjKRjp",
  "key20": "4yAZjXGN7Dd81rLJF48ASnBtRznHoqiXheAF4fF1MJvj8r65DNz9rEX67Q3PUySimFj2mDYnbodQoNLmV4ekvtgi",
  "key21": "VFKVd2ccghUCuLEVZVdkYdrGmHJNLsMMNMNMehA7QRXAePpdFyNk2sAiEnhParBj5Wb2rvPTHKg4BRPWXN4SfTB",
  "key22": "4vkiN4D1kAN5q7cgM26x57GguD7iziHGckpGgPK2wfsDrjrwqhkxpD14bZLFsqFH9dN8hTTuZ7vSemCyWTo7ui1z",
  "key23": "5Uf5GszK6uhfar8V2tLNfbfHe7wGZHoLUn416nNgRgQFBEdB5Ey963g9ZVQo6dB1proMGL81QzqTq5y4UnYNvcCJ",
  "key24": "3VRLktysVKSAHbb3AXSnZLAnBQywoiyRZsMnYyF41nG7Hsr3TP252ddecVJ47tJ5GLWxJdm8Q2KLXtY8F9M2iBEx",
  "key25": "2jctjRZWtzadGJmhqYWtWe6SXZdi2e2Dzgn2Zu4f7Cci2y8hfB7XjgpPf6HAkTigNecKcyuH9Hd5kgiLxxrRMKsi",
  "key26": "JK5NhZggjiFaZT4pYrSFv5WHVMHKkTSxYgQFFNzb3JiUMsck3ad78LkmvQtfueqBqaZHRcFd8FumEZxQzLxgbPJ",
  "key27": "2QLyXV7gWdVWn8jCiBoQQYGctMKbgCXSqNCSr7eohdMv8XrSs47cdehRt9cnjBGf6LULGpVWocdYit5gVFAifaUG",
  "key28": "2NVLC4nsx8KdyvzYpYMvZ7WJquFKiK5uCHQgKjurTDv8UobNssPdDT4ySKfkAX74RhYFqvt6Zz38skdoWJeZUDBK",
  "key29": "4xP7wsYgRvQe4zG47M65K1bWR6ZZ1mdQAXVnrkXjvjS3t5M3MEyHzZvXkUhhBuJpfDnjkpesyXvJuL9AmgPe54R5",
  "key30": "2Pd8K2rpPDvtqiVXcCXUtRL5T4NE41k26QGfshaCbVepu9kxpq91U42gVhxjooRCgBuYLtLjJD2PN1SsvRfzo5Mr"
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
