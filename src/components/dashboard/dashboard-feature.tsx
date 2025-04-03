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
    "5F4BgEudhrGbMz6rHkxGGxNLJw6UWykKEtUsGQQ3rCEGD4gNhZwAf2nNiN7oCgpaT8BpHLhxNRjAa7fsq8USH6sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KELc7ALCTDSXYK9QHd7c7or29op1FzN9iSkQYxJQeCYZTe8Z7dfrPxbcF9u3YC6GxREtHq7yFudE8RqKGVKQxre",
  "key1": "4hRLG2e2z8y3BkVno9Tj55QEiT1v3sQCZgvQKEeNPmLULznv2gwGfZ6NQ65RwSeeRZ4a2V5DMZo5Tg9MXAPYQtyM",
  "key2": "2xr19iP1MtxdqNMfMDqJTtM9R6cpkCpSobHevmuY4XaD4qf9GkhLozXf6mSSwJxu3jSdoEHS4TSomGAiAmeTPMCq",
  "key3": "5PQjsh7ahSfdj7zzhYDcH4ABsUqGftv3qrVJxR6f9C7qD4suRe1VknULGsm92jakQo2ui4aqEqfkyRR85M7s4dBn",
  "key4": "2ue2RaBSKqxZhJjEhYXB4z2cZfD7GGUNrFxKwpWQ6agywGsNPUEnaP2usv5n8pviCYAUo2pqeJGCiWvFN8epwrC1",
  "key5": "3uwqWbGiZUPGyoLzzCKqwkhzeyJD69k9GQmuudHmoMyayZawnLMRyECtNNzgSwSXh8SCuBoDCYGQFng15gnfiw3Z",
  "key6": "3XxehYXckEgK5FaTtwFg7BDMK8mtUocBjEfN62f9fW3qtfuWwDqt5i5fMb2jr1MaSpoyLXQKWXfAH6mfQucrjt6F",
  "key7": "38zEMtw8PEiGSX7uJ47GHsjRNcfm1DpgZraH1iErWMQac4bo3bApiRDS2Ta8Xfaw7RkdMtiZDTovTde58BMEpaSe",
  "key8": "4KfCPDNSY2QmtZC9qtnA1ea4B1yDa5UpXtGdamooPHgY9u3wF4AH13ubHVCupCaHNpkbUUrvw9GzwtoNE8ot5WjA",
  "key9": "3UocVGJL1qaxmAUoD8unECNrmkGA6zeipxZazrKu3Hs9kaa9YgTCc3GaxTGt1tBXmEFtm81FPd5o91VzZ5dP3Dgj",
  "key10": "37MZBHtgDaL8jCsKMdXBT6tvyAs5a3F13z2h81QP7u3TwFtwnw22Npc1zFT4LQe9yXMr3YvXKm4y2hPpsqmgq2dR",
  "key11": "4Tq47KKDEVrBcJ4niqZsDmCcYxHva84rTxAz7GV42RRLAUKmp7aFdvKZQ4VGdbvMEhYf9GurRQVCHBPacFS3fxE4",
  "key12": "54ytWpae43UWHDLkrkaKJ1ot14JkqPnUEK8YTiMUCaR4WacdrkidEpQLC46HUShj4dWNnFHmpFSHMBbVDQmFbUhR",
  "key13": "529dP2jrve8iruvuwsz1a5Wz4eNvhiQ8k3z81o9XgrKgjEJju4hVM7qRYrDeAjACa1ofgvfNZrGLV8VPtMV7np4C",
  "key14": "5SSDbhTgiRipdMYx1x54hkqK8qSmot8KZ3fdjbpryBvawCXLn4M17JTsmNnFKimuxkv3uD9Q5K6pRVNUbvTcB3Jh",
  "key15": "3voCNWm28zcBBohevKiBunCDy1mTjFgBKFNvzkyGKZctcrqEqrXWrE5aG2B5aUoto6F7utmWjUgATZXPonRQyMpW",
  "key16": "4WVNZveak1XS3fFQniaX6JS8KcR4urhJX2NFh5NU4uS5T3K4XXxxAdfBEL6qukGCAjPcGwybpVCKmrKA6tGWj1oY",
  "key17": "57865icaiWkNPUQfQVHgiYNi1XtVejw2PCg9MW1QQ2ktnoaM4wzvQDYZCABJeZWvTA1rs9Z3SAZzLVTWPoyfsGYq",
  "key18": "2TzeKAFmjQLiFZJMWpS3qjiak4NWZsCy3J3qmKgy28TVnMtbsYK3m89vjGFPycXpEUGYrvghhdAEM3RcRZdF6jDU",
  "key19": "4wmLBYCUNWVq4kTMeeYSVTmAH7rP6nWUiupTEFRZc5AMW1Lb9ytfb9bAfFmfZpV77Kpz8pJU1Gg17a48GLp1DgHa",
  "key20": "2BeCeJV6GRMLcjLjHCexzhPi3ayLHkmccmFfddqXkn2vE24KeX8f5MAhM685DPZJLDEjFieXLMYR8ZdCLqEsABn7",
  "key21": "rtTCXWwbYMnALCwvb8qPLBy8SNdD9pcQFYTEAh7PrJ71DhydTPYqZY2bVfFM7uWo92yhewpJPNb7mBRyANSUdVt",
  "key22": "5iCBrZUuuGdz9PKNvMTkZ1H7zac2rTgFWjvZQzGjTxf8cbCxuiB4oAZK6jzAZcAV138qzURQMMuKDCMqZ98RTNmR",
  "key23": "i8CDdfUV3zLXSQSC9so6cnPMcCASRre2HCpc51bn515wndiYGcQUdxXdAfq7yeibxCaXZf7rNSU3YwnGRw5Dkjt",
  "key24": "3eoVnuErBzfAXnTJoY736rNssPdXiokse6mk8isJpj6hSejGjtbUjHXvSTHN9v5guh9ygzxAeP98qhiv59r2pVqB",
  "key25": "4XLwgfajd49tXn4Hzohpba7y4gmNU6N11iNzVt1xDFnKgwS29ytpmtTagGYBn4aDUGAL8NqFEVrz4Qd3gLGrCEC",
  "key26": "2uS7jR7V5d5wMeYb722visBobh6m5ueG3Cm4EGHaZbECvDhJzw8nzycn9jCsNMdjBr3cZsJKQsyF4QrTXRnXP5jx",
  "key27": "4nPAFRXZkcziVWxjh2bzJToHyQyePrznPhjumPFBTD7YbM4eXKGMQomzYzVF1g8sRo6dF1xJHokdMDusfp6MoR3W",
  "key28": "3x2PeWjQtsf9bLYW2VubXoeoFoWFhxR5ZQHRqruoPsdFyrujz98rsWZXa2uaDUUgNWSYXApyceRbgVcsKe2KzRR9",
  "key29": "5Gf5zxBg2HEHEyYjzYbm9BK53RHjNweiY38zQJPis8Gjw9G1SAScHgTQXTQKRMhuwAjcVkL8feAT4UEWRvA8BJvh",
  "key30": "c6xXvch3op6xhBaQZ1etQF2t9jSXqGKRaDSXSmX7KVyCpxhmnbsLF4sGZrpqqDLcqbBcSUx3eMSqq6RKnjpmRt2",
  "key31": "5s7r1DL29N2WUQXBb44R8TvyQrW6SfvhyEoUEvnoCph6Zqg7MNrKvEjooQTX8ZS7JPSePPKqpfJ6zVi9Rj2dmYw5",
  "key32": "2cCgmEf5tSqJ67EH5BdyVWRCrWTP9cB9VevYLmquRZpfaFMkXWEvJka8PCXGpQNjCcbZyf6N2bLA7mYoBSNhoTRX",
  "key33": "S62mYJZb5YcYHi8Tn5QvbSQdNPWv52q7kcfkjyGSnvowpuMP8JRAYM7asXCXDmRYzJQ6b4CxhWtbnychzCwi5W9",
  "key34": "2ySLxpmXdVBHq6udpqrAuQDKcKunEqh49hwRKXsS1byjZdWhMhnpMjGGd6uCg7WzGW8Q92EcPMZ4MYaAJLcQPMHK",
  "key35": "5B5GPaxiatdDBFYWaKB8VR4qtfCJHSZCj5sNAWN6h4qJzpQP6QR4fuNPe6GLr1dihB8smySh7pJ7NF5PXmemKp2M",
  "key36": "QGEEBjyMtfDYynwHCzhLb94HyLxG3jpzvgc2SVAU6nKoVFmGPx4bhF5ZpujTdL9D1XvxXjUjKZPWqUNUvhnziqt"
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
