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
    "jGdisPJw3VKstNJSgaioV8CFLy9yZ1xcArxuDh6kRsiEsQszzdVaKPp4hB9uekdMytH6j8a2LEQuVPoMqUPSDvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpWHn1afHHwjTCivrNxtaVHyTfTgBdJE3FUvnKC7s5jBnVBMLh9Hdr2UmSKJUxC5TfbxE9m5djPsJWQZSpmEpdm",
  "key1": "4tMBr1E5ycW2WFRh9w2YoJBQwsGBZHPZs81d4zmdjfYomx2WenskkFnquV4EzrBjkFzHsc9BLyLqpdqoyZnAJLt3",
  "key2": "63h4huyXNsaksZrzQJMsFBh8odTbVtMtpNT2U6Cz1DBX3XqWh2bo4PYCe3iarB54A27K6RMX7Cz5GXUWCdCigv7h",
  "key3": "31rp83rdwPMwPXgfTCGSBqf2DNNEkVFNCxcNSV7eZaPow6tuPy97p5WiEsqmGpkC9WADYtDPff1UCrbz35tto2Ty",
  "key4": "Uakd1jDebUdQbZCLBUs5DgMeNX5P8m7ve5Zf9uxXdqvFGNoaoTDq2uUBpbwC5dAubvmkqqWJrHkmV72D4ozC5cN",
  "key5": "3eBHWqQovMXaNTurF1bvRG4ujiDLSSmxJ4uCP7hZ1VzeHwz7MzZ5pqGjMaJGfKft4Coq9WYK5WnJAMe571X33yFw",
  "key6": "4dbyz3KhbVD2E2zbRb8aMgQs27Uvov4EuLXH8Twnx2NTPE73zn2PvrPvNJJctERUPPrczgXFoSNqti14kdFoxL4y",
  "key7": "2gKaMvN32Z7KkdAHrPKFAwsARbioyggBsiakagwjENAPpro7ddaGhUUUc3egCkR1W8F9hZg297yCnQ7ZBDuNxf5m",
  "key8": "4kABuoPFDRF97e8vtCJaufT6YPYT5P8NqCBkfkXwsSn1Pmxu8ihqZDtvBAsQbk6XkAbUGy47vCSuCgVKK2KsEj6Z",
  "key9": "48tzCq2NuUazvrsDeEsrxEMsMuwpestxnj2UoFdcoiqWbvWXdHxSSc2NzTphsWzPvABtwRHGSVeD5nq4RfWuyLXM",
  "key10": "41HNAfQgqgKxauEAM2UVjjQdM8hiRDyTsCrcCN3MeazLH8TchqXRxrSauKE92pt5Uu7htpAXRvR2NyUhcW2Kvfsz",
  "key11": "5zkbziMB2taNWxhUygq5dGjMaq9Lgkb1waFVAxhnh8XeY5rzWz92J8VL3CJX1nYXARVB1ysDmm6Jk8rpK7doXD4J",
  "key12": "2YCafHaJRnKNXR5rKviAjxBKYNkkL7qbgr8nQXBhLzaxycKA9YfkZ5Teif1hnVJMaBVDu764UnU1r3g6X9WiHDx9",
  "key13": "3nPnc9XwUk4XsoePmnpcLvctkWX3jETbFxWARJiPNfJ7tenAudNPY6bcN4RRvVS4WaHjHU237GxLL45uudf4MRUb",
  "key14": "62qBtmSi2xpLscHvoLduCX5VFtjXv1aJjysFeaKmkfKbc9kazYkVZAQP8GEwc45Yp37GUXf9PP88PCVmq1pdtNZN",
  "key15": "3kEq8v1mgBG1g96V2VveZkZUYqqWeJiYNYxVwYVNooyR7QcbgNsHQadGg3f5z4qx4hPAcmm44GxzgjhWE2xTDMDc",
  "key16": "W7BsYzDN5z4HdfTv8j7aKeLwLR3vkiDmZQyxToTLFHKFzFn789gBsCjkaDBK5rwmeuMgvA2Bmgb2qogvPxrqmCj",
  "key17": "5j1CTcpcfVV7jh68RYSdWKAy17xF9Kw4XH1d1HpDT2PbmgQx9hYuUJRNvfTcPvjV7ArjJr6k1biuqdshdd1ofRJe",
  "key18": "58ESwVDCQpDU1h6a4h9GYyJ6pZpjrym82GmJTrykTF7McVQ3VHUha2TPMwUrTV7eYMb3AkCBeK7VDYZ1vycBGNco",
  "key19": "4jiUqpUxa9aXhyvA9jvu4QnyKWHjhZs52qWDs15ULNFEJ8USjUrTdRRQTx676ZpDfwYwSgxUkPNFGi9MFXGLi6rs",
  "key20": "2X4LMUYH5FxFY65zrhUEfVqdVauCXrMXwjT3H7JU7XCZpfPUfiVZdBQguzxYb8t4FipzXkhzBVYXAqsDbbKTDexN",
  "key21": "2ACZ9mtceW4vJAtFYr89FSkCT3xVQWKoMfmC5ZCiVZeEbZenaeVuXtBp789u28C2BLNPuABeMnFvQkR6SvTsHrg4",
  "key22": "4nXcSN942x8bTMCMNEV8dwJXAHsHr5JnVVLxgEvy5v9xV4F28gAE8wUv18PMtN8Y1pGSo9ZkqgY8vfygUf9jP862",
  "key23": "3mSL7jVHFEdW85VHYM6HJzjJZQ9khySU8scMhrjRPhTnW2y23fRc88yzr2EjQSavowAxLrUUQueADobHb7za26Aq",
  "key24": "q62uxvinNUbNQ1WkdSnXSm6HuuvBqwpsUyeojjZhaUayjA2L558ruKN5Mo8d22TymbYvZAy1SvLktWjfsmrpzbD",
  "key25": "4f5iivGVroWz1ECVxx2Ans5yhjQAVwBjRRnsCGHhRER1oyzVTSNMiBxyMTt3wnwXChJyrctZZWQsQq6gcjkNKNTa",
  "key26": "38uCbRVJas2WK84gpJ86yWNoShqtGBRUU7tCwDck1GBM3RAdpQVgEqXdSWkzJ4tdVwaRKaFjAxKb6XASUxDRLqRW",
  "key27": "3TVCpFS2fjCZzrKubchqayhBPckAAstD57uTh7zBjNBUm3ou5AsoRSeP6Da7M6Xq5esdAJfyKU3qMucUMZmdM4oy",
  "key28": "2bJhKW1MhMTr6F8CUcRY2MBU7spjP3GeH4rNmeERFgSnG2V9tK5YF1QkbmuNzTFEdk4cKgCpKNEyM2Z76wBogubP",
  "key29": "Z2G6JCbd8ozYRcpQCa6w5n8Cu9L9zhUZ8jDf4QMN56FGqfNPqiSBqjrMXsZCbcjPWqsX9jQURqC2pAAyrQB7iyV",
  "key30": "2hVuWvxNquFoA9CS7BZ1XVM4k2hFAJ2eZtmcXWgkAQ7t2EkbAd3UNou332HSSWX5tNB31vNEiVSJLDGWSBh9d9v2",
  "key31": "2cnZS7to1kQXy5MvmVG3WeJdyGFBgW4Ga3LxNTTiiEvESSRZC3Hv5Ld5qcpd69H4UBTNTNwRe8rPDGGnVWrwjoTZ"
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
