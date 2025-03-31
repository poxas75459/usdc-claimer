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
    "338PbRHeJEiiqLfsSGj5rNy77LiMirVqhvX5mVV48U38wpoUrg9KTAjw4YBCHj3xx75S8PzodUcSFvhhUvC3miLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLK6RDd5zoH43kNey3DPXmceSrf8kkjPcn8njfJMKbHNrrhbh9c89Nx4n54w9zCPXsJ9YG1qzrGus85LYKGpmwG",
  "key1": "3GBNAM33ajDbQnGGeHXuYtYw2jkqY4HgUNgdQJwrD3va8sZERHE4JXAr1yiRoY6f5TDFQ9PqdaV517ViMZS3YXYt",
  "key2": "EaVwwY3wBcDnmgYcNAuxXpV3DyY9uHTnaxGneDt5kof5Vc8qx6uVQPwBtQNECnNCZvRextT8noYpw8YqL1e6p7y",
  "key3": "2xxR1a72ecdtpSZpA9b6nbvuBHMrKkZPdvu85SRwevkLrmDp45ELqKrmUBCVSBR3JqiGJS3HUdgwesVR4gqYNSJa",
  "key4": "9rK2M4jimuwRyhFi211YAjJ9s4MGaCoUnek2Yc3cuwhRDqtYQqaZU2wNbPggHDTTSTuJqTLGo4bjqRgc6TC1Jma",
  "key5": "xsUSBbUCLpGkD5qSrECXsheWyrWo6pThJeKWQA5w9VkmR9uc4wzLGo7NAkR68QqzpsUdoaRq7jcQ4J4utSLNSmD",
  "key6": "mTeiy5vKgL2dBhPASec4w52d6xXyqr7sMww2N1oMSG4LMXM7De3gVPWJdJyrS7Xx6L2t4UA5VrUehpjyYA1PaSB",
  "key7": "4UGKrsJkZcjDdcBVn6Zs9xLjdM7BNvcCVDtbLCgu1kEpAiCfLy4vCc6UXoYjEqxABmN6PUAT7Lr7oydE8v68bGPh",
  "key8": "yiEvxcZS59uchc63ozeTaPjEjeFHSJWgzfHwB3borqx8HrMM1YffnPMxmvWuyBhQt4BfVk1974E8aF9invsLPjY",
  "key9": "35PPV4XMNRghohcc3YJjjadS3yH4aMac8u7fweCTMALCFHMmPn49DB3s5Vg83VabUNnct4bysC2qhhSB3wCTFuZ8",
  "key10": "4uP6epmHTqX86pbA62myjUou4UnDCFenFZPbcvGSkb2D1t3HLz1tH2DXXeYaiXd8SNJ7cmxnvpcjVa8Vb5zntggb",
  "key11": "5KFEAzbj1tDcNc5oGXBeUxFKzojzJh26pE9RVKcKp8NQbf3B2U5X9rJwsdBJ1SA8AkXoZojuQjfnRyBg8Cm4iqPA",
  "key12": "2Bg13xppoMkjYoNtHqD4RzWMqp8SKeCDdvR76VsxDwcKvG6rHPssXA32cdaycLhZLXd77hB1HUDpe82bDRaCrJfs",
  "key13": "33NhEC9fLKDED4SoJogPRHLzKKH2pV3LjxCDENkbmbodxAqr1eyMnC6czFa8smy6gv8dxqiJPk8ZMdhU9pV7n2Cu",
  "key14": "4dFKPM7TQ7d8qcDvoBVHaTeLRj6JtafXFqTfjVnqVUaAG2RCVo6zfvJyCRAN16szcyKPeq7An5dZtmyp5jh5L8vF",
  "key15": "5m7qfHeeTcyo8yCy94Keye7vs9eD5VA9T5UekxG3DzK3FKH2E5tdRakyjuLLutqYcPikmTtaYkyNgbpTgno24PN7",
  "key16": "35nVj4rSqneetHzihPAgrZmwSznQYdm3M9UhW8qrRemxPGzKGqboXyMY4qnkXYosawKKifMZkdZ4w2rpw3nbxoic",
  "key17": "59RQmJs5ekJKuEJTh4ww7muJ3PJp6JEj7jFAr3WpK1f4TAitXcn5muhaxDx4q4YzD9M8qeEmexLo8uEQD2eGZZpy",
  "key18": "4oDCc7EtAArtK2epTNnnApw5B7rhL8G5tvMQXBLFms7zJQyYMxVe82AB3vZNSX6EFzmDZf3LU8Z3q2s41WarbVu4",
  "key19": "KoXtDnLCLeGGTir85GBjHx2UyJirSTCEnRVGH9VSojzaH6bPatoKmchnL4eqqHNjgG9f3NorDvMtbRJCrLrQEKA",
  "key20": "4KmxcPZaqnzz7wS6b8u6CuSTAUTDPtCYmkwZLJ4kWsn6Cpj1wu2sAHwaNiBqfGm5XdJrkHE5myhdTue9tvUyGng6",
  "key21": "6ASj7bF1b9uHcd9DpupsSwCbHp6W13wCNsATBiBfAWVcgNdebDKvH7wfuxWrZiqUw7Aio4iZbfVE8N9nagd8ti4",
  "key22": "4b2zp4ZsLCde9rxSvMAQxh9WCZZpX1TEALazRPiMseXvJ43K9xKo42NdvUonaENMc9xP6LPJefLeCL6Xu6tQZp1i",
  "key23": "3vdAfVwjVQYcReBSPVpMeE9Hw9RBVo5ANmqVvdccKaqUMveukhk2sqD9bzWWB9y44xKVVPTsFkExXert5zi2YMSz",
  "key24": "3Fk5WSMp3r5cFvPXWPcV1UEEM5khbtixY9Ejnby7AfLdogsw3Ft9EGbhdKNtEA5429oHNA2M76NdHdAHXGhpcaZw",
  "key25": "NkHEDLqvPNjUfmagX83poXzeZfjZqtX2Y1hh95jLLtxGv6foVD54DNykmMXiNinuEcn5Q7TefKMivssWEESJAMh",
  "key26": "3fHJJY2NP1HL9uopKkRGHbtZ6UtpKsBaub9G1euLCZmL6QpMzmfLeSsdBdiuYsq8re9TGaSpVBSgxqbAouLQtwiY",
  "key27": "54Fqbo8cXF6FaYvQrpqXcQ3B29xmdzxtzyYWVq4FnHKMN24rwiiTWDHRx3PgkAuW7vuGYurbMg3rjtrCGMpcCCdV",
  "key28": "2uUDVV2CP3spgKtSrfFwk33uoburS145USvcGDxzh4XPZdeFY6oi8Q6TBSE4QYaiWz93KEmuarBaAk5Hf2jgcJhi",
  "key29": "5VS5gFHpo1FRTwVTR4mQEqNysSuzpHK8S1d7MYvAFe3Jp6ovAddBj4Ki3SrEc69e5LPj427XAST91NGJQnNoCbrp"
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
