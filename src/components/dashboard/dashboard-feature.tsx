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
    "ZUdgYJY1y5LUwycd9VXnkf9BSRwxvuBj6LZeahVUoxsbAt7eJWhdY7zZN8kvk7THzqqQzwn1JQ8LNi8pBDe5wwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAAK14fmmvv57n7uY3jmF6qzGnxjxdMesiuaVKDDqV2MVfVzmdc44vi8D4mjbwSNLAgEErBH4h3bchbwLcWqQ5k",
  "key1": "2o5vQCiMziYeGtDwDu1UMh8csh5k5P8o24T7UA6yzTBRMhqJmSZ7Xn8bWihygWkMxQN6oeTVeXZpjwhiBZLSBSao",
  "key2": "3qkmb6Dw1x1eExQyZNz8BzATAH4CNTuQFceu4VHAjLVz1QMKscppxqHJwGxPsTsQZdsg7N1bVDQLd6shXZtM1B44",
  "key3": "4cwa3rWSjSGDj6wEMxMzwsumH8Vr3i9X6zhHbdD3C5q4fjjmxsAWEZj3e6Ln5pHL6rZ8Rj7FLDPbj9zxw1zzZeqp",
  "key4": "2WisWB5HJbxHQoDFSTbCDeyrLanRCA83fro2baJhuH36EkaXBtcSQcKFzMyHgeoizJdteLb1naqHQZYRF6HoPjwu",
  "key5": "22VwyMs8B9e13MMtRLYuuVV3Dumw1Zto4y5L2SLGkyzMFiunqWG7xR1pCyBEHpApms4zCQ7ke1pXYcPN26Lubjrm",
  "key6": "5nm4veEgWVUhuqaVTXynX2LNgEdkNxZkyo9E53eyotjRSiq2Dx6DrR7cAJcxiwWyqu4Wd2NuDvTEbEADg9UBtrvX",
  "key7": "25sEjeRNShNQk7htPqLveyQiUXPpsAE4DP5zm3kemGrxzSLf56odacoZKimsUB5h9PUZ6sMq6aByPp3uScAwptvN",
  "key8": "N76nmULgGi7abuNC9oWNqtxJUAkqyvt1yYapi2Nhx7bEbAqoGjhsxtQtvH2XwFUq6LkfVejaU5PiwTAckJKwTzi",
  "key9": "4GtNpQK8rDrRyoMcLZMscrWDwRTbsRQMqRiyh1mweCnXQy6Pr3nz55zmtGxZ3Uiwpd1ED13heJRchdoZoMbPPW97",
  "key10": "5UZMArsDFW6ZbZqqfZCgr1UAViEmascRWWKFFRKVdZqGGLrqExzmcxBDTbkrAm24ngYHXPMbxCAbDqABBhsvctrL",
  "key11": "2MK3xC3HqWGEY6jfxit7BV6XKRuPzq89DMTyUu1MVRu7jr74grK44K3cF46iJxisVhbqvy5VJTHwC1KrQngfiKbn",
  "key12": "Ah17owLHdkgZ3v8ktMQCR8ncspj6Fe1eqhNizMPhFartgW5S5gvg3nSoacmX8QDV5t3ixeevb89L398FBdTQ4kk",
  "key13": "51kVi9MCBZThkN13LFCpEkVjuUcphJ6wsoumwCb8WLrj64X952N8JdPZTdmgYwi9jXB94q3TjfAvyVHbJgSv35C7",
  "key14": "387n3dg8FDEhyGg6M3AJkntCaLED9ay3g8pkb9jDXDnZRtcw8CuJmtD69xe28ZsMcRkHMbXAUDZvpPZcAwzogRRD",
  "key15": "22xc9VcYVJV1nvcpit4cB9JFNvWN532UhqTiXJFKEYUEHkKM68GJBU6xw3SvaeWtHXFusn75VW38wTNHVwpjagwt",
  "key16": "2Uvm1zGqSKdPkgAghpHVYPAjECJMmwCKNLCF2aUWFJNM9ExWHCknqZbwAHLLpUp7ktm9wa35eWhMpnaJZ3tDMgaX",
  "key17": "5rkM4V4U811kjHW2367TwJ9mk5JqMPMjFwJN3jFe4A8oP8gWZD3QqWDscSnr1RJDzGnzB7ot9teScfVqrjcYVCav",
  "key18": "4fYjqzrvsihLfJxW1juDVpKdnBmSJrs2ZmA7xrT9v2DZkG2NvqPsBxgQPtA41Fhkx3Hyt6dWJkUzDz2psqwxv7g9",
  "key19": "HLfacNvHiTi3YuY3hUfVgZh4Vu3UcjTpJq26ZBWdta3Ln9ad7ZXPHPehM7s8CwZ7GpwFcaUBv3XtnSPqjteCDsD",
  "key20": "1AoEsf39y1vpXeUnWskWxrnprryYnWPQGCcdiwDmcNayQSewktsNNWaLKqhxV9jm7zgjt9JSFqy5Mum7yUzDnMt",
  "key21": "2q2GeqcZS53zzMAwtTTgkPM1j3meLrTJAVWt18K7q7Rpz8EdDKkuYt5AmTP2NoWmd87G4wfwiWC8UCCzqtG86E14",
  "key22": "4mjzUTkE4nwDnjgusnfPmH8PfYXc5sanYjVJgzxqo9Dc9jdGsqC1Rwz1JCPWJAsKSf7i2foyN2zxBmzQk54k2HrZ",
  "key23": "2qEAnLU1JUvKVgzdnHtJSWsNSMzekHqAMrpfgBieX9G3rhfWxtSXAGqSGRXqHhJQSiHPGpFbPB1vvRFM9MX3LMaK",
  "key24": "24FkZxgimmvN9KqBBgKq6ZWcsWY1puUrWpmWEaurx4yj7fpEp5szicQ1EfwjJue9iJ3LPkRtvEG4nowqZQh5B4jr",
  "key25": "grjntA5ddk1oJJMyt8uUVoFBw4rEu3XWt5X7tpmBj3K12CRuoX9NZdgUyZh3gi6BowmW11AMWfWBX2dLUyJcbik",
  "key26": "X26aVt2vWQgmEKeSo9XMdVtauWBMUNBAY6sc8U7ro6634H229CXwpn4tDVrYBPPWNtdEEZzirSrX1SZKxms4xo1",
  "key27": "59QnFDnoN62VczLpKxEXnxz5FXLPEaYTFJGdh9pxvKM7g4PVbEdLs83CJoPSfNsrSpPw4s1diBc1um7mfH15ShV2",
  "key28": "3okm3phNT6NuEUHzCpkGQSkw4SjDZ4Y3WNnoeAfu2qL8UMtePBb2BC2qc5nS43WDLSNnz37f3ioFZsnN9QFMF2xV",
  "key29": "2SUdALWpiiPCXgcSri4D9UJfCdcgJRLXuRyjZq4SjT1QQjG7qaXTuKkeHfb2zhvSaYj42bziNV3avuMMRiLx4KAL",
  "key30": "nGVVoRU8QQyiLgZmrzxai3Seoe7xLf3aarpnqPVxuw3jaHF1wKPRtDutg8B8ACQCBSwUkrL6FqmL2w9uHsDsq3b",
  "key31": "2m7m6JJbFgo4vKHHbnPWUfPbv8TfxJkx1tg1ZbYY2Rj27PpNJ9hAcGjjfvgBkiSmybTdwieDBbAXVgGNQbTANEnG",
  "key32": "4aTy8VPVSoeERYfpBefeKJywjtA1rbSqxvniVemt9b8fnEob1Jji76e4MjsXd9Bd8V4KJtxTBV2PGzNs3ob9FCCT",
  "key33": "4MpozTXLtiMiyvMf96zWtcneL2RvD1ofEu96E7NDrW6k8MwJWifMU8BnoZ3fC62npcJERFXnJHmfshMQdBUf2tos",
  "key34": "3rPcdcDFNyKyRECs72RBWqidTTJfiEtYKgQaFXXzhQE23FYTZtf9Pk5ESDzXeeXtmjwz9HNTiaRKyd7n2gVBcsMJ",
  "key35": "5xERa3WgRjL2m4DtvQd6wddxAzVnS92Nf2BF8Q4sybrceqH2nrAAcySc3rmgE2xHiHNAGvKcFBGSHGYFCLmbeMa",
  "key36": "4X5rsn5XA5QP1R1ogxX7hsi8rp47MWzCsPefRPFhWYDheoaMeSxodTjsEzodzgEUpC3or9ZPEdv1U2ks126DbgBN",
  "key37": "5h7HRhkAW7vuT3eUFApFHXA1VJV4NrKmPse1MxuV36XUyE6c6JLtFueUrvctKM8hJrP1Ka3pWKrGbWCdHtu9pcN8",
  "key38": "4dZzyXKKMb3MaqF44Uchgqjo2v4D6M552GbYtTnurZUM6fnB4FHpjL6Xk5M6Mmo5DY4hBu65R6xcr7RqfLoaS5sh"
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
