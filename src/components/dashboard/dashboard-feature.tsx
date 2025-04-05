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
    "5jdxfWVt2cRjMafjwUfSj4qRk2Yeix3twTHRXVsyLhaCfZEkUyzNnxFcumXkYkQSAWg3dCNHsUJoPwGMCUAVAPHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uznFK5WMFT9aY9UCwvXoLKPVZS7PPDpBwYn1yQ8iyo7NMZ1eDYyMtx4x2PuPS8hDN72zGy67gNwF2AwnswBNm1P",
  "key1": "3ZdiDiUntYn5jjRJFFHFnRFU62d9JVXhPz1Zf1xHXi4EDKxQi4tVTfo9j7hZbMqhsk3UqCwmv4583WD5XURDbMy6",
  "key2": "biTAa8bUFtRviYFMTqXeQkNunj1mDQoUNZ8piYhWmukcRmeSFPrcjaFvv2KTA1V3ZbZcBVAsPu7rLTYtgjZ5wDE",
  "key3": "4k2eH1MR3xCFVuYz6a4qiN8cUACG6RGF4RQE5M4dzoXmQQnXmnSnGxnEvzUkNCiLCb6BYDXyeKVDTyEne8aoSYgH",
  "key4": "5ZRHHEe7ReFQRZ1FsWnUbeFo6YL5uEcjyf8n8A8keSXprTzSX521Db6xHE2dfmQ7i22NeufHkN4HdbNofzoNdXZh",
  "key5": "5XJVEdN57RwVa6SfBd8kBF4eLdfJeH1DBcuA6i2P4BzL2BFV91WgDg7hFkzgFvSCVvDPSSUSA527SbMC2GmoXTJj",
  "key6": "2mpEfxbRGesqBNVMoq1hL1QM6ZFfn5jSHTJE4155pUVSVPtU3MLiMCxEEQmkjRo9j6qjG7dLksFtKhLmXSPALKG6",
  "key7": "HmaqGPZxMXTN66Q8YoK8w71uvNDq4aLTwL8jET93aEquRDvDe4y81Drf2ZCU9itVbEtsQhSRnJQ7F3EdRDNrvnt",
  "key8": "3vuXVFyZ5buyxBedWwW15bfRgpTpACPtuoVJsdhhoYXDS3YTWZXZXsVXXKjTv6rFC51qiwDo7jxvi38LmUieNgN4",
  "key9": "64KrYTyCPLrDNaWcFhrwYz41xXMK2BKDyJujgm9utxN8yfC7mjMkCbXzjaHWgJndfWhDvaaFdeRt4tMB8ap5vQU1",
  "key10": "4XtW9TgN7jPsVXxE1PsHj3M91jbrvTz3TUmBwK1NydFkY7pomkWnQ6NtgYUHA7mWeqrEGJmFb2vgGWsdFT5JpbmC",
  "key11": "2LTUtLaG7nCvQTKXeSy44ZXzRXQXHFQUeVWZiTDmJkieqQCrP6pvx4tEqhdgBepxrRpwQ4qfzbHf1eGk4f6oUpWi",
  "key12": "fpcBXxCQGroca9fHAjUtw3Mxtap4KnYPwHF7rKAswGb7fgnNdYRa8sJWb7qVMAzW831BVjCErkqeDJcgM6y4LSL",
  "key13": "2zmsfe6gfZ7bqkbiz5iGfqyoqQXmE9sw46gJHJ8PGQmEohAj4zpH5cMuba94JqAAgtVjXNqfbqB2koho76XkHeXr",
  "key14": "3r9HCrzTLCnNkMUcPfU4yMBGo42wNiYWukaWkeWCwyZwDDGvnKyubGrvTsgfXGQ2NcLUbsSDRVd4x5AbvKCnPRyj",
  "key15": "5VJwqkpbUxK4rnoKwFfaLs48uTsYzK6cPbgVdH2XA6dk1mAi2Y7VWGXXTheLMZnz9a3VYPDwzAi14G7NUBEhBRA7",
  "key16": "45iDiWC4SMMJHYE3LVZDg9dLvZ26mTPD1qKpNy6hqPNN6qsDvtm764nwt347e2TqxmczgX6zdonrSQnATTPCXn4d",
  "key17": "2rwAX9VDznZ5fGgZWRJTWgBNuryv583HumTyxrXSfPNEGsKZL6T14SD9wcwj6JRSdmjWZR7LExSi1P3VrSGAhNHN",
  "key18": "4cqvmJgPakKibQtbxR7eymEPMTV7AGoKopK3cVKZHVjSiR8L57M6GWt3jTKCmGBhV97LKkodbSQ1JQ8c8boNj72s",
  "key19": "gPDcm4edgUcUQHMe6ozP8VXdcYnvejJYzXRDKT6s2DezTL7eUGujX1gwHaBHZ5xZUxTGCui1EXkskSpCgteuRvG",
  "key20": "3DmYrYkyVxLaFDW6JBDfveD8Yw7JRpTQrxHjCUVu54Ybsf1Bghtt6TkoyvPUzA4JUdM4p2GAzA39PmAAmZKCsLAW",
  "key21": "29pAVsHbkNWqRZBDvef49Bh9W9DV6wsuKamFDPgZPnn9FjrffuFutzJ1jD1yAnNXG1tu7diSPSqxyPLfSjUZWz2u",
  "key22": "2PzxZmAGq2RD2UqpG9As94Bb6vA7ifpoAHb91Kwyg6YxDqfzpDFrHo4DHgs8CBescXyar8cBmbVe5hUHkXFA5XZR",
  "key23": "GgvgNi9MhGcW3HJxHgRkkoeX3D5NXVWEghEpgCntWzhHNdyGojVXYY7tVeUmENXRhUm2xCD3yKoXjz5EFMVsiQZ",
  "key24": "4R1bARAc4P3bM9K3WuSVWDmkQbVrxHDLuez8nNAKXkPvLER6MQMpauBL2HRjwnuLoTP9ZsrNeJ3U9c8cXi9BAL8b",
  "key25": "5c9DmLXuLBQKPdmLvLAENx5kdfuE1gDnfxEJYNRdaqsYn17shqFUFMrh6BiuBntsMiMGUnXEtCZsPnmo1q1cbfRy"
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
