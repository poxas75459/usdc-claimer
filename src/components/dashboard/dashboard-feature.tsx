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
    "yMEh7ZunciV3BooBuKECKrgTi7vXMP6Ap8787D5NtH8cfRBvJarWpHgPLvzjY13Uk8TpYfNxfiPVojynHxBw8t6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqZvECYC7vUmGTMF5165FehjeoAJXZbLXpQP2rGU1RrYaSQ91ss9QEmWGssQy5vzaDmoSBmzs9Q8RRGi1V4qp5m",
  "key1": "29GYEAoLeVRCem53rqzbZUXZNn6LFsvvLi1tKQNkAaw1d7F6ZkXDL7bwVb9tkDi2sDtddG4WEJPinPacBZefNzgc",
  "key2": "3wTioSbjFKMaumrrvTyjB2qD2fQ2V2ohbRq83ThP4YBp7Yh5vokeeLnt5VPQrwb4K3nQ3FwReSoPvjtxyZy1Ygmd",
  "key3": "5nkiGmYsVyqX77G24emPC2MiLmqgSpcqguZHNxpWDxDULDN2z19XG5AGmGk2oWvkqqhgBUfuGasG5ZJaUTctcx9A",
  "key4": "23yKLTLrxNVXncPRT59jD1PsRBixRxJJgBakJyuHCeSxzJywK1mkjqzCtxgs1ggyayQ86SoQwknHrVAvdeGh68R8",
  "key5": "58jLcSdQoXDz8oFe7x2LSNEMb8mLyqmN413Nn4dnWTJo2kdW8G2Ao6pSE577TrQQhmyn983kZrwvh8ym7CjxFbp9",
  "key6": "4tfYg2UG2g9N6fuPxYPHqDijysBsdEo5Cz7XnghsVRPsBHebh3Hr95oqNoi2xb9sr3UaWzzbM7uE8DtAMq9ffShd",
  "key7": "5BLmrMQktA3AE1Ku4LwHMeJJqMhDyzrGZLzbgbkJzpkqbmqsYuZZSnPkGR1t5ho5pmZXVTfisfNzNBtM2LdxbAby",
  "key8": "EopSwtbqBFdRCF4iDTberh33eSBdB42RRWUVBNjWYL6gobjS9zWWUXPVPUcZyhCP392X9QxaNchM58wuT5CCjeH",
  "key9": "52pnwZochYKM5GnfjpvTFoLrEZGpNthgdVdXk9ErtUKE4rMFbrV8Dnfpu6iAqgJmEsabx1Z8khej1vdJ5wt8GeMv",
  "key10": "4LnMxRzxnKMJNSRunFjMBVZPGfQqLU93WNugbg7pioUAWPse2Jefws1qMYbiDsdyoLMfjSD8tDwifWS7xx5yYTFr",
  "key11": "5RRnXiMTcJiZgMaSQqj5iUUoC7oj3SCnnQawT2MBcTp8U3iGFbPvBhgMM1BREZLVJoU7Ay63T7sBr84K3fkxpwkj",
  "key12": "UUQLuh3anFnRCFqqJr4yYoozMfspKvdfTZBoCwZSZA7TKrZq83H1SzqY1h3zJFPtQFUY4dkLMtw7pT7pEtbV8Pc",
  "key13": "4NNoZpBnQHo2duXMvX3ZZsVphf3B9b5n2frPTXViSt28kkPwnCUpeWHjfYu32wxtvbfEW9xDzNoWM8jA6nmXkVDT",
  "key14": "5sWZ2HM1hGGSF3jtXQBqyaCuGXALoMFZmWPTt6neEaERdvC6Ww7qJ8CXuuqaD9qwn95tjS3Rhg7kuQNjSNxEQ2np",
  "key15": "4cKZiEaE8a4UXDLYd9oVRDW6aEAnDfKHxdxtyXxiEpLcj1XQfhcstRzcDbyAeVGivcYyeEbD84Tf4Ufcwg4yABS9",
  "key16": "4GXx4gEvvky1BzjmHcDSDto3kSFzn9jXuVfUyNU9ZBLNMBDHSLW2r9g7f3nk1TtRcru4qSM5dBDqfsdPpqhYCcaw",
  "key17": "YUUqbN9Xds2vGxSjtuEH7ZLP1MdUPYKNRqJGaqAHDfpqnnwfg3YnSxiP8MNvPLVzEdtBYTXwuxpLNX6CPdQxmsD",
  "key18": "3kE9wq9ktwaCpHFiRVbmwefQuMNVPBpojuhWMDgLvFNcb6X9hxQcNYwDicTdhi54pwuoXpxsy5eV2BhYGK9xn82T",
  "key19": "5ketRq1rxASXuvV9rHm9UVWDiuXKSUTy7zMmarddJdsremnC32N6zpMGciPc9GVi8vUyocBqJNkUiqUk36QSBb3G",
  "key20": "wB64guPqDJ2XQCmJGMiTHAMkARQ1hviWujpN211wDGBvxwYkiryD6HVgVgm3sNXAnC7BWP54b5JyKkDiyxkYTyh",
  "key21": "4xeQuLy31AKqCCZQHFwCsuKDWuUGo6o137cf3cVpQyxgTTco1mSHAXwDZrcgJKwwkrS5Q75JUSFceeXJyVG44bYi",
  "key22": "3o1ePkWroDQrRoMUepXWbZSj85uY2QC6okaSNEsmvraVnJbsGSr3RXQHKNWoAPG4BX1J6N7NRYuJ17HQMLYzpFQV",
  "key23": "5Va2zfEmmZaPMCyzdFV9nYoqB53CXCPqauM4hBAMZnkL6yn1ZbXM8Mp5BvqEqhW9CbdXuNXAGoAXUm2sLQWf89o2",
  "key24": "53Rop7pUjXSUTpYLczMJicyuHiMZrnUd1u8bVVEzPzcp6mJQDiTigGHricsihPVeKgVSXr9DJ5PccnZ2KZtiuVht",
  "key25": "566D2FqkaBrMWD7WKPYk8Gcvbmis2VCrq16RgLHqXRQ4jJSep6ivLdsaWnid5Hk9jJHrAwjjFQMdo5vkdP4RFZ69",
  "key26": "6mdjcBMV3pJ2sEHz8FQd13fdaZZgcyKq572JmgJdiuhjJMUrFSiUUriSrLQWEMJZDiv9NLUK4a9FWgmx6VPB13Y",
  "key27": "TrkoEDSKQVeDxBSUWiDEwPfxyNsahbbDRfjqWZkEbZxvXexrfNABbiA7KTXbChn4LQyvciK6NVVU4pDYiAT2PGK",
  "key28": "2X5C2Ddkegmx23u8xjqBdrJGvRCVaQ8uZHRV61pXV8pRaHAnmvb7BKoZ89aYdXuoYGCSbvG8g7PP7e4AbMb8NCKj",
  "key29": "2UWXTNQLFtRkYmtwSgxEdpjuU9ZAsqSxtxAhrgvfr3t7S1eJJDpeQ7Y45qp8yKyBctckvr48xd8ukUhqAAgHHEC3",
  "key30": "4f98hbcpUqTA9twosTarSVrZ4KZZDjPowNuPuWwSRiceD3CdBw53MtK3T9wSgxD784ApDMcNY7aEHeEK4L7hFQsJ",
  "key31": "2Jhji71zY6Jry7am9ivGddwoWx19Zz49Hh2Dc73q8K3bKSQxJgrLhk3xCU4vcB2oaTzgMngtxBQNpXCtb4pggDkT"
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
