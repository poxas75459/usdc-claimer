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
    "51Z4zsdrUQiEepHPVQubaSH2MYScJSNNuJABzViukZEbj3eto6eRMZhH2RCMT4n5EqrjTQPMbNh3ZYSLEj7eDPJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjH5TaH8rxSSx4qgkyBKs1Dd8JZg9DuM8jcUVXhm8YyYv3ATKXFbcTGy637nxd8yxiM2DCRwmfQY9H7mGRj5pkd",
  "key1": "4PNUKaNSDf46owTgk6DsMwPLfiQxVtJEtXnHUNBHimqmz8pdRtBMUwdGkj79YfDjHLXcw9Mgwn9XWKnBgBjqvNcf",
  "key2": "2foXRvCmDs52b3emW5GqqCUoUSw8Ufa22AHTZpZfMoL7sNAusPS1eCB3pseEiAooQHk1SuKx6c1C1rws9xuKdHMo",
  "key3": "2c9wYPgnpzxGkZ7LzKpyHCAKTe9UJ6yrNYYz92MEGwJBRNbHqY4jy1KAnvo5dsskPQyTzfAnFDVsthLMZVu3srgL",
  "key4": "2AxLgnX1Vx5TUxU9KfXrEVgFQCrafcqH7Fa1Qc1isdbxC2KJNLdK5jQ9fJEmkq6m3bvmDeApMiEsJbSg6o8wZtpF",
  "key5": "57dTHRhx9NSiktSDmqpGW3CB4a7RFUDzfhrhU4BWVMVo64XYJKEZdAFJxaJw9wa2RYEAL5gpNGLSyWj5tcx2NGzj",
  "key6": "RhYpiQzWq17y8oVHHcWa9p7Cs68qjkhdSetPmWAGzVA8uuMd2FpJLXuXxdktHcyKRDCwBeDQHVCuFsDodKKf44z",
  "key7": "67XtUHY63mmFT58Tqrrknkp96xt44TvE7gDPTkpKp6BxaU9cqztxBN9WgvejmXBPXGzN5qMrQszriUKPfmjAmm3Q",
  "key8": "3HqBuokQ1qPy2fxNMWEMybQ4wvqdWF94tuVdZaHXTFRm67cnand4vAqygRrmPuh1JzDTD3pNfRsYJZFR8nsCuL7W",
  "key9": "321qBjTR5D8dKGaxPtJaPBuTsDConDwbLuz9monSYwBYRt3JvEwd4VjZ1KG4QVZDJNtSctQcoLvbgjeTVbDJ7StX",
  "key10": "2u1yNbHv5ynJRmEShrXmo8G4q7WdzoWwqso8rSaayzMHurgooaWkUb7L2dXt4F1q4df42EWoEDWYdh3QQctorp41",
  "key11": "5ekRQwbV5XPV9gh4qULddEh3oUUXUZo4vqxjUamHPg4kxXyrweHvW29mnBDBA2rE46hYM4MyDGGbW6XRnsnDEAmy",
  "key12": "2JeqVmozo2mt6RqJyfc9uTtriVbwSHPDMANjaA87txMjXHcgj4u8NCdYxBZr56B4ogBZoXG9Ce4Myuv53YdYRmwZ",
  "key13": "44VQmYDuUZBXLJTwxUp2HjqWnyyykSKP8vVYkrJzaNkdGV1qdBYGg6BtCVrzxa2ocV1qHgHrxtiSG7PczkVxeP7G",
  "key14": "3fkuhDyW2UxBGVPsK6rww1n85FBYS9y1bDyraZyvCibfZPddkbmr5ZYtCBqg1CHVSbcXfEbkSkcDped8gwEvvoaB",
  "key15": "4dLp9ZBfKeB1DadoEa7bMDbybHXpnSoyUbexHqacFF8XGb7PMqZm5UdvniMENXzBtoxoRHJPmYZRWFoCfbAiVw7n",
  "key16": "5RpwisbLcmAog8oDU1g8Ffv7yTVJrWiTi6vvs7956UQ3WzV7KU26YWHFu8Xs9voWyhAhcG5GGT4wutiGN8ZzPfoC",
  "key17": "3gzupt1ymqqKnk5HZR3C2msf4AUy89VpiVHkmgQhJnxd63otrtn3fsq2nc6sUpUxcGCqeeRy6toGoMA8JrvUtBBc",
  "key18": "5ZoEowZBxsT2ewGTLzqNuZn6FCqHg2kExLLVcskpmQecfBCiBtbtXhAQD6hxQXJdqu7HNPJez1kWc7woc9BtUCte",
  "key19": "2D2djPHG48tpEy98cV6SsDsPpKWBLvKeAzHeN2GcYqY4A3dpAvx5kDjN1qA9SpxvfqbrGA3qC8fHKFgpmZ3S2iMS",
  "key20": "47YdfJQoTTuTJ3k6ESd4oBkydy7sW7Yv2UmL2MV7RZ5bzrZKpuhKFvd3A2bgQ6QSGhZptpzN2QeWmfnk67QVrnmc",
  "key21": "4Tb1Sk5VN2UBoCnQnMdvBftgbFZatDfT5iUw2ENfyz7XXFt5My1btVNdvBCARbGGvoynjzbzx9jiyhf6JSiigabj",
  "key22": "5ZsPKkira2fk5bL4Wddn4D3K5c4bvftZxSZEyvQfTxxWoVnTW9F4NcSBM9mdZ95CSHviwdFgnh7i1wZwtGdjMtxR",
  "key23": "5Gfc65ofdDnF2DcLySgdoecRyYJFkCtm22X3x1Jst7GsNvBh1F1vxSAvmUYpF556f2HJQXwU6k1bzm9D1n8nB8HM",
  "key24": "3LUoLAxnLHMJaCgBESWJZrBtnR5Mwncz1AAFmVooHcLPnVZVcUPFE2MPouEy3JtYkfbu36ztEBcKRpQEw7L2fEeX"
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
