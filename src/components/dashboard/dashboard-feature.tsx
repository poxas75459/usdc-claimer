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
    "Yy8XDBsGGV2zznZm34KUjVCWpHUWFqL6GQ5Cf4dEvB4brcpQXopvgYsjKPmRWB94Rgcr8pNbEp8Rx5zLWDkfmiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pz5T5rC8mjU6c3kAEv11HbaqdrJaLWB6tZkc6VFyf1mz3Gw3xEghGwYMU8ZFTtY174DPzLkwThqudBx6q1vc3DS",
  "key1": "5kUXNHrzc1GYG9fpYNVoDJDJf7HjP57mmKE8rx3Fsr1TCtuE4pZJiakYb31vbSMubxA8F1yeWNaBjmBaN2W2d9mi",
  "key2": "26H1RrQr6TF4hhpFTsWM3bbP7q3s6WbzymvupxpZeyon82YtEq8kuynfjgCw1rBhiMH8AeTWmwN2RAUNpSau4TRd",
  "key3": "3E5toQMajx4gNQ9kWBApgBXAbjNALkW3bf3QqPWPNfwHw4c9sTsi7LCvVbCQbG5v32U8SSVcoxRVspRa3XVJtS5v",
  "key4": "4aVSYmm6p9sn5ELxn2eMr3Po54bpyNiUm9fuvUkAJvFLqeKd1BZmhvSb7Sfc1E3S957RtBcM7sHuokaaY44LZv9K",
  "key5": "2tVTLC5ZZt7CXCkKUnaYjezrybph5akjA8JbKRrf2kmBn97Wh8dVA6VmxvRebf3jgCNGVJLHDsL3CC3nEG1j2RJP",
  "key6": "dUfVTTQqJbu8k539hdLafeCb3qg2LWkaiavbRD1GH2EXQaRDUyUDLXkiidVRcBXTKxDVgfdQeLrpZdNEukeu6cL",
  "key7": "4BtAtZTsoW2s5fvjCcygWqa15LRKdkFeLboUEpFqQmJk8JAJrxHSW2FRZZgZxS5QH62DxgiR1Xk7YBFFmcPXJriq",
  "key8": "3Mt9Hx2RaS7zeicvPCrg4NxtQ6sjKEwajeZnHTJzCnBeRYNKdd72AYfgnaedY1kFVjtnJNgUtFTx6QKhW4r7woPc",
  "key9": "3FeErc4nZL1r1Px82m7b6FGZeV849fwhys1r9Qoej7rh9xQoYegaMwoEhHzjUY5VG3GnPbtHeJpLN6fTzi9ahahj",
  "key10": "4rnB2sdxAKQJVWLJzYJr3sfd9g4fLmsKCHPF4ziBh2PdgkdPn6dttWJK6rnuKrE4rwiHrW1T1L6UUPYm4NyqpRS1",
  "key11": "FPuE54dRxn7qSvbn1MWvwcMNnAJFfZsY4ZkWpGBuxZbtTv3kfrrdo8zR963uP3Rajg3p9xEDPm7UFvGTfhMx8tZ",
  "key12": "5wyCkrS9ifVzABdwwrj8r5Wn8WXqRCDbVpnhWJ4LPpt8rFK3XL2QBZzoXz7syX4SCrGjUcywhY8165uW4AYBuqF8",
  "key13": "41RH9woXXuRcK78CfXqgonVaURfUvavs6sMSkhDktGXSY1LYkTiFGCWDuowqJzsM4wV5R2Ui4SWwPop79U7eWGCU",
  "key14": "43XiM4pKruPcJdxwHYnKQzbg1s3vnCbci5xs34ayTYgdXnH7gzuBgEE6aBFSK89ruS9Pnnppqi8mgjz3NoWwUFjB",
  "key15": "4cWv72hCZZsUwjuqeEiBhCgzQ19Sau2PjG6xM3KSysuB7xNuh1qFfPT6pjEfFob19ypANbXZjhfYMEMgjEhnqDaj",
  "key16": "4z1yQg5WRFEQgCpwGLGnm6oZ2EZp5Xw1fPdojZU9SCoCRbPydkRhhvb2uom2yvgKAYW1DuvQXgB7dc1GXA1awPhh",
  "key17": "4sxQSgnq2QA286e6AsAn8wnDqCjyFU2q3gFne8diXHaBt5zqcoKasBk68FejoaLdGkgVgWVSaKKkgnJ17tqSwBaF",
  "key18": "5eJbDiL8X3jaGeHN8v5aR1wbAZUqpQYJmVegiz42dzobFT7hJpJC3LS8ykdPenxsJVTDaUhuAeQ2J3TNWJ2Q2Xt7",
  "key19": "65ELcJhQ97HWaadyBmZ7PC6Gr8LpqAyCCGSUntMKeyonzJMFrn3wGi3jjDSxWqvpBYzM9iQUcKUrskKcFziHqmgT",
  "key20": "3jr82KYnqXvfWeqEJmFwnCw76b5j5Jaof2WnJSbxbtXKDPbvfbhVoQCmBtaJqo5DhajUPhprdwFy7wZyVAaEVg7a",
  "key21": "5M85vAHWdZskqEWD535aaR4rUjbiEsKQabGpWnWBigpzaHQjCvS6Dy5pyNCmws8zoy3TPCM1Zvf4cZAJ42yiKSxB",
  "key22": "2SFpC2aWGRYCWTci7dGJwuyqWi5MKohFrKCqMTHLddoqq27ZFq9HbTm7L2WzdzK7rs61VJ63Nnkm4rbE14zFgfTi",
  "key23": "7xFCKxtVzPYNDrvGgdPxkfrbVHGrvrjtyeeV8UzKPJwaTrP3ifTxiDNAAiK1APPTqTixj8myRTGGzshhSQ9sw7f",
  "key24": "4JykGcspPwgSwgNCNDpUzmCth1dxHTNPjZuogyeTrgTnbev1zatZRzdf78ZTACGwKugcnE3Vpm6vwrirKntTNDtX",
  "key25": "3e8hhijh8Yk4xRP97JYRgjsRXrEdGs3FQS1vp1xb993BQHPNnh2xBLbgAMAaDxHyj63Q35ebeGcpL3KHhWgbZSTa",
  "key26": "iUNNHrvcA2G8xxXSN6CuXKDeoYLaZEMBqjxbehiyWeFQbWtXJ7dZPvxFBBBeV8TRJ3zbUNajbnrCpetBhJ6N2fD",
  "key27": "rdvi37NVqGiSeN8uJPSgiCiZgrv5MBvMuXK615GeSn1qnNitaX8j9VkoeWvBhBRLwpYeeAv1L49rWYpBtTDoC4T",
  "key28": "h19LwYmSjezmNs7VDAa5gXJ2Ahib1NLv3WzShtk1ygeQ5FvQCjovhBkDEDQRRkcaSr1qorzEWgrGSZLeBMR2m3P",
  "key29": "4ZZtQgvqxjGZcjixY4uKA7uZN2u5DkhuzMCYGwcMapuZ5MzncS2hA7aDXD4m1fsmdf5dU5G2sSfWcXiefsvaZReZ",
  "key30": "5xwBzPWgGMPaDucsCzMu5nzkSoKuef1Nxb65q4WQD6Rk1FQcPM2PEjYk5wxbMM6Lng4DmuZEcuoLWAM1A3gimUk",
  "key31": "2LAau4E8BXywsZF9Lh2RzxYEdUSVMRPiAY8oTR5S555spWTWZT16KJVTrSn5aRNVQR1tkb7anQ7qj8Y8ntV88pbR",
  "key32": "3wRr7GTT7W9ZywbnxyCM36QYaMoakFRcfMuLJ5DpEL5c1RQi3FyTJ3Hpo85CaJcfH6ZKawmhEGM7RgLBWpnUFxu8",
  "key33": "21KzShT7yHTVRFx3cRugMMi2TEm8Tzca2W2DzzyTPV25TV7PZJVob2mPPxaa9w2754juHyZkUyDkBUKXTqGYkMJx"
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
