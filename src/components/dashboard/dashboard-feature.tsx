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
    "52bLYQ1VPobQjy5Ac5QkUXevrafwe61FgQjMabNrXuYzXUTvoYxmdWQhJryvZjhAnYF5jeNQrdTbUkZfsSKYWrbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aEPyzfXRBfrSvmFMMNeB9c5F6LN8Q3brXgBtWxNwpXQD8UjwSYMoGtKSn5ieKGLt8Zzh3jUFQa6g8fNiLvNmz6",
  "key1": "42mX3NGTSi2QzkfDiq3WRAgJa9J8BFbs4PCYy2cYBpH4HdJsunqHmhTjm8zuPh2Q4nXJBw7bnM9Et5CcG5QdbGNd",
  "key2": "qPH7d4fRqF2q4f8AszLTCamDHYFeqqyswiMooaMifFWMzBcfRwsfAU2C2P2YVcuVXEKpzJ59RvPmARd6LpQDKdz",
  "key3": "5Ke7a7ciSGVekrSjjAbTj59oTrknP2E6hy5RvykPYtv36r6F77Rz6k6jBakV98goxksL2EDLMtHZoVevGqm9ZQ2d",
  "key4": "67HouAvGpAcckd4N4MyYLU75faPouW5dbwx8RriSs28bf573SnA3tiPWcDff5XgGNnosK5KexdQgwNVGtFQtqKow",
  "key5": "2KQZR6cTYg9WYPzARDErWxpNjx3Egwq1jaVnjb2Mrk5u8yQZd2raZzwy9KLMrnk3BeLJDs7C3QpbUg5sSGsSwxTM",
  "key6": "4zvbyDbyEYS2o5VWdXDMMGimN5syt9HKWyD96PdVyS7e5wEYVmX7gSLk3WLJj86BDyb31B2B248Lo1dAhoFmvnN3",
  "key7": "2xaUzdhcnPtxztKW7NciW3uXfmy6YnYG1i6LckLfhoxjyu8UW7ZJ6CeCPfzPMzDBUjZmTuaJhRQsbHwd3gzSRPFz",
  "key8": "2osDt7FVjeJbrK33dKDWi4ipqL9gbfBkRsoJhLsLRa7AdWt1Gm2zJPWsJEGwpViys9g4gpuQpY8kzFjQx2hUm7Hd",
  "key9": "2KqtXEs7xi7De1PWTa9VyyFbfSiNhaE8wakaVru5kS6uSYdy4LLB6mozBWjgD7ck7RSGH2Xg7VEbJS2zdsWinm8C",
  "key10": "48WriuAb8tBbhFJQkCMdBk6s6i19yjzyVzzdfiAUYsaR6yMbhTvt1da9uD7pv4Mk2UBabe9Dzaqwdeah2cS2rQZ9",
  "key11": "3pktgztuQarZapkLSF2L4eMwN2FFGuAwzgCYPemtdSq7dxFXEvBecziXvzotpBayduHoB4g6fM6EEqiMWyivzZkp",
  "key12": "5UVgag8L1T1C7qgeDwP6Cp3N78cf3AhYCqPe92PRaoVGur6DadiH8YV2a3J6CyqZWbqRekcEunN6WS6CqPoGk4Za",
  "key13": "4oZymtkoXkx1hDgyHyUzVmDb5JynrAdZJA6SUCvh2QB5T5RQtxJz15Vbz4K7hw1QwkZrW2ff2mTR4K7hyKNFJowt",
  "key14": "n3WQMiWzimxm7qgGyKCSpXYyb3zvZdgraL96cZ7tB7SSeLgqt4gTxXN7Pm2Vddansp9PAJDHyrUDFCc963tZMQd",
  "key15": "3TmQu2iwkt88SmwN6USJNVypzFK3UixGfEye25Scj4KSAavGXnfnCSh9uugRT2bwXK9Qpfkt9UzFG5TWL7WFKD8W",
  "key16": "4ntRn6Juq8qvLth2mE68H3HSYifGpfBBVr67MkwWPUGhnG7R8NrNjfX9c2hk68qLsUqhUvmAPUhYY9JpHVDSZXgB",
  "key17": "Cfp8ZQEakbcEjEZCSatGCt4p8P1X8wVe4ewn833voSwgAfv5tb129WREXazXH1qAqJ3Yp4hLCrbcZCxx2FTRhJz",
  "key18": "3Pps5DZTjheMfKHg58fvsUut9RY4gCLNEJ6jWJQYQTfUbSYh1baGeLEGe1uvUgbnWRpheFvBCaHUBh3LT8XtqJJY",
  "key19": "5GBjQum2Ht2FHiK6tJq564YViBk7NxLneJiXsi11Gmr6k5ht1VcNJ8uA6Q4aAHfWcmePXCLAH8gJ3eehWsrhhFDf",
  "key20": "2Vvai5kmjsv3umaYxzo42DepdKMohV7ckaDdeiH2XSmFhpGTSAoFETaS5Sq4aRBMjPu4ok2cyevwut8a1rNm84Wd",
  "key21": "2zzy5KyMt91Qhey6YKnEueFHBHLQ9BUn4oWUK9xodhycgs6ca4qbUyJeC8e6esh4WK7tjDyQVMbWSzEjDng8Zrs7",
  "key22": "2VaVk5LfwXTUechsYBxgE7mU3S3P6h6gm6dFmRb4WYP6J6cwaHFkZK6j2MbcbasARNBkXBuZdfGJakiQYVAEYWrg",
  "key23": "2GjvP3kYo6WnWugGA4akUT9CLfoytkPnxk6GBRy2e3yFitAJCqVG4cBLQ9jYH63vnvQe6Tc75VkNxM2jzsL9xTaU",
  "key24": "5w4ZkqKwpUsofqUE5Vn9e1TimuVRRBsKmR7eZFUMcgasivG4neV69nH4LfyheVtutCKTDLQRrXMRYnJdUm9u6gNg",
  "key25": "3xgBuNA4RWxGxS9KRuANFQXF11VS4cXX9B8X15dTKFxmNdcv9ZTTa2FC6Kpu9HrbjxpSTBBeZVRjxnwwrSTkZNrs",
  "key26": "5a1G4jYzze5CycJdMrGkSYhEGqUAGtH93ff9aHtTTv9U9D1rvXVzY6oLZGTjRHK9f4suBgJcc7yspLf85rVsSsKy",
  "key27": "3dd6fcngdawuC6mb8EPzsHmoa8iu9QKGvTDANcJdzXmVVKiMdaQYS6ZykdD8quWaCPjJjwJub6XyiYpgMbp9EtTP",
  "key28": "3ZtpMbN7jkBurvk9wafELCbV7hBUA3XL2KGPnGBXZkeFdKLyP9hqg5sXZjuBmMNyABzTUnzKasVof1DNpTrYQjPd",
  "key29": "3biXBYCfkRAqKXwisbpuskjfXpSDCiryacAuqt3u9u7VWoG2jAVjkeDqhtPvZtuB5pREhyDQbVmaPX7MF1AcS2Jt",
  "key30": "57ma6z2NHDBFrqRxe5P929sT2h1kmiETktCgv8kpWYpTDVVbYXcvpY6XHN3aRS2ppcVnfWz6eD1BoQ87JpC7XVrg",
  "key31": "54m3zgckJpE2N99cnoqNpFRvkiuMEaiXXkkYNijVi4uPiTnQfdMA7wmhrNEeZWkuue96xkGkNEta8qV41aCJySjM",
  "key32": "3kxcbc69dJDdqJFy3SXVSfNwNL2wqmxHYaWPvhmMyruomXqtj4qYkpLsaqWL9kKNpiUp1Gx7eNPdgMFarDEpv1Rj",
  "key33": "2kRtfyeCEcVVLCR5MBiRpPefBCa7akhVmf4sCf32pehwfxPDXK2r8p6Nfx4HR883cosYJQmThtMGphdtjbPy5tg7"
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
