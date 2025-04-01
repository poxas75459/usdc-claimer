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
    "4rkWQkuV9PNjFf7HYNBnE5nJ5eioz42jwNHuBbht2RUQd1SuUAVhLgsEckhrNfcK1kaQrrxG9CaSp5BbeZWMnPCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rcyZ28EUBizRnXdm4wNobowcBFE9JgBnPnr4CSNH1gmQL9KJEVBF6z7zz4NZ4P3MvVaW43aEotfEY3ZMGiCb94b",
  "key1": "5vjmwG64Gdkc1iAXbfMW42Nv4CvW2WAjs7WwRg5SiXuRjMr4Jyay5xqFCLowgX2Vq9UHSbEUTgUGMDfcyBmHF5PA",
  "key2": "2arUvZVFs4Ju2uNi8xX6MUoWLTqg9vBWkA2862o3CeR62ydYXgY8eyxRJSCtcCygkerhHqdLojHxbDFtieEFcm2V",
  "key3": "37EzAxHcpQhLNvZpbnx6eouKMjjk64H2TfoUZM8GddewsoR9UiC6uVaFDA6aYtwxNdrBCApyJbsDWT1S2ahxNEAQ",
  "key4": "3GfNc9ZvtSkkaPVfgoUNozvWpJPSfSV95p2yXDvCydQBfBJVhuteCZwLRqaApXrcPFjviHrhuQ67xRQWzN4nZvxc",
  "key5": "2RgiBP3RDdVEAMLNV2W962LmrDDjuD8MtmDRwmYTPAu3YrfYaHBFHxzWLnbxWAzKGt9phUYY3p8qPUPfGgHgDZzM",
  "key6": "uxahgM57RMmx5YXHovUrpRNEsWcoGJf97gYWPuuAxqKHbWMdhDBErNjXLudjLQRFgh2fDqcp9bkHJE74mGmyzP7",
  "key7": "4X6DuH25t686Z2He6Y2ZbMiNtSwLVe4Kmau9m8vsr442TdRTKevgU8tfWVjgeDT6R7LHp5S3miKUeKHGeS7Af35E",
  "key8": "3b3ChTwgR8Qq1EsWxys4Y9wTo7jjvANf6UX8Joi4XQ6Ym1DuKuyLLwoGvfVUxbkr543YzSoaCcnFeivbsFLMfhB",
  "key9": "o6KtYhCs86y3ya1CdUzC2CUWwQwW1Q2vBzCwtc1LvJDBDAhAmpWdmAEpGBfkDaVhaWRQC2CgTxhKqVbsYnpmuPF",
  "key10": "4n3qFsZtLWrw6ubZu7CaPQ1iNMhrvbhraDN6jjwAMBJ3znZANjahNTLBy2QF62zYdwJ1ud5yQtqKU7iaybvAiasd",
  "key11": "doANC2rCZpgb3476ewZrBXHiwvPjQJ3bAV3kiYYUREZLtM3Zix5A3xsycuftnwEEyjE9G7xywbCE2jARQW6tmj6",
  "key12": "2uf31s4rh297MH8FgWLPshY379jtFPje8nPqN3DRYeCJ2HLMNBxBtJyDZN7fdvkQR7YdfjXki279fCxUEK2sd5jV",
  "key13": "LGyBm1v9xTfcztVPbC6x3yy93vwJSFuScR2iv73D24ctoJ92sC8XPQD2Na3Rd3UYsNwP9oSjAHWje5b4ru72FNA",
  "key14": "2UM4smEHevV3UMXTuW9r84xPChkjot55AvnuMXij1wjKcHDsVYxXJmuh4ZQKDmswXAv1fnoTN4wkbisjECFdpMBE",
  "key15": "DdSDnhenS8MT9JSi5ghQoYs5mQx2xb1fpSjgSj2F3hgNQGSTuukGJ45FCqWMqdhFfFLSfK2iHtjfxDh1bjTFPip",
  "key16": "xqTy8KXbshVWHXs2yKg71g4Y3gg5hmtQA7gVz75fUhocV5sMi2GTDYMeJimgDw2qB4BY3P459bHTWnjsncaAjhx",
  "key17": "2DRX7iUmw5pGWmrFfnd7sLumP5T918ddbCqMmAQGtE9aEZw4DoYhmcJZvgvkwS9siev4Aih7cW3iMbfuHFPcWB7C",
  "key18": "FzMgPSQQFFiCe2QYPiKxisna9ELsdPJ57wBgGzVsR2njxnBX4CGcHssjnP83yoQPGXVtpH8i2PhMq3hi3DhZNEJ",
  "key19": "3gqVQwnJ5cBhYJWLX75RC4ny53tQWzZx6KnZRRbMaDuW6zgnDzGv5oegMy9bNpmQp8dTuAXFKjNF81HpBuXRkAea",
  "key20": "N18B9Rqcxw84cJULMDhPWi1JWj5FMLYv75gXSynESyKYfnkNe4ryespx1vUZM2n7hpspc4MzXwJHVkP3r7MF6m4",
  "key21": "4gEaFVBTVGzNnoFWJMLpbk4mRD4jYTZUwbH23m4x87WfKGVuBwQ39eRbt6c65YYjLrhuhY8diYgA5ruBU8f1ogfi",
  "key22": "4Z6SweU465QPVVQ2dXe9Cy1soLH54iVJ69kar6HXaCqD8hc8WWcvHTRHgct1GiiWsayPqihBZTtnn2w8o3modLd2",
  "key23": "5HcxEYYYx3CFaCz4kJRE68ZLKoFEsTbELjH1qaqpMGK8d5Uon8kkxGoEXfovpJdHJMN4ZKvacmkmapkkEGS7wHhJ",
  "key24": "QY3TEPHKFKVdXKDDApanM5ApWfqRw4LhxprSFEEFEvVy2yazdtnGqMNCHY5ma2u4zB3qc132GbJTQ3rvkATY96r",
  "key25": "3ZgZ3uNLCeSY3sL7iBaBJSPP6GUD3RsmZkva3ACh4mL7zLm7ZVeMuBAfFL6P5j4rqejj48jJMF4kFfnSGx4utEV7",
  "key26": "2ECChNBqThmnDYmirtrAhsYeH7x4MgQnNqJ8AteXNaJuvfyC9TpEDvGoZiqaQzNkeKfXxeAXs4uA2W5PvfsRCLbf",
  "key27": "5kLh3dMzzZEH5m6ospoVHSFjhfVbcNW7xLAxvaSV5b4ydMXr7YQb6b7k6Y3Jm2HYk73HL8v3RR2He2nQSo2yaksn",
  "key28": "5xhSx3dkVSnctKYTVoJ8QYe4jqP9cWvm1K3wVKCMmwgnhVBqeo7Kysw39d9uAgbD95KeWe41eoX11PGowkoTjc1D",
  "key29": "4Fy2wfvA5ZgodqxQyciVHfyG3CtYSyPMgtZdYPBpVCw3aTW53iSn7y2FwFj1DGUbsimVJZjuudzcB5NfkCjLPoc1",
  "key30": "2B4dBmud8yLGwaymGvoQbkdjEqKSu8xrEC8rSLMKe8t69scALPphs5u5zHLZXw7DCQW4WnTGo8HHm1mP3Q2bNka8",
  "key31": "4gvULqHgyFQLcDfA8Wxxy2zRs4wPDX4SWeNGsTj4dKCLCDfR2d4suX1mVRSXiZVvmxFr9Jau7g9jEiNCAoDYPsHj",
  "key32": "4fLqZtVvrfD1YZe2Udt5s6jY13mPYgRYtVWnCXUyNNPVZPGHTbciRPDBrinGwphVe6WkcEBafoaogvLrg3x4hx9x",
  "key33": "3wQSk13WMPXyZmtAVtuLj2comdp5QAogpprn2S76AEWJ88Ab7xxQH1ButZCpj7YUsnSHcEnECVvNSTdmbG4xgCoD"
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
