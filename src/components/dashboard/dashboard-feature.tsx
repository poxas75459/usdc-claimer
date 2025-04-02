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
    "2ueEqCPzwN8MiYXbGmpXJrZKn1Y2Gey2921XNZ4rBif7mnhHBygn8mBkS7qDCuDmkmcbRW7qCWfpKVw7JzPxKMoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erSJU2AGv1ui3e8p9gLbbeFXhiscJd8K7fhdLV2cXj3HUeDNn6AARkUPnYyfBDrikUXdhRdmsZdghSttvzVPERV",
  "key1": "2KVi1CoGvaakgTLo2rYTydXD1NGJpCbuwANQaVZ3FfzMcUvmgkAYwyRM4RqFXyZW2kBxXSBT5hoMJSJCkpg2jDHr",
  "key2": "3Z6swFsP4WdWuEoWvC33hUTyPXkDEF7ABvUdRpUXmR9hniDXuaWoyU1wgPwotzcKh2rxqN4fvTZDiNKWX8cZjRq2",
  "key3": "3yE5VMNEdjJSmm4k21Z9imUcNLYbK9CLDBW6ic2vHn83Rc3vBBvdxxsYgU8gaE6dkBptHYbXQ7kiXXg1Sz7xfcT",
  "key4": "4FzYNknh5HCVKcZrnL5wXvMz3hqtD5WhP7HhLuThorio26AqAMVPtGTrchqwj3ZuTVeSrRezWqDEAZFm3GGDy1zq",
  "key5": "TpQHa5xM9MiBtkosdfXXrwJuwdfXLchhtHmRW8uFVMxNjeq5Mf7C2VeZDpWVLhMjn6dt2m3trWFf8TPUGrRAZBu",
  "key6": "3SRKmFCdnoATicE4Hr7ycgHVMqcbLV4jzrsDpk4yC3qBot3WQ19ays3ADxKt48VYhs2KaEiN45P8sqSC7EqCC5Zq",
  "key7": "b9aHe87umdK7eKuJZGN2uTGcBd2wFD5AVyH7S8BLbpvdQeHCggFasv4cdzr2TdEkfM1ZwNffT2MatQ6tZ451f5s",
  "key8": "rUyaKYivJ6Pnsm7KJCftf92rp5PyYW7PGT7SfPJc96CDGf8J29F4g87HtKZmz3DW286kYSE8s86Abz566Xd62oa",
  "key9": "gPMqfNjs9wzm78Xp8SGcN3VWtiiHifMgeCsaZMgLzLroCxaVzckzJPfb4CpdDyoHwDnfTLUJyzc7w7U25aRRBpv",
  "key10": "4nrbbT6hpvy1dhHc1N1eGke2Z8Dv4BXLrPgg3txr6wDvrj6SNFP4RX7xDkqEHnFG1CdkKBuA8vT5BGvvp6Gwse6m",
  "key11": "4C7iiEnbk52KeHBxrtMSSik4BiEDpjM193KfYXuSeLyzS4b3i6NT8PnfDh7eeV1VqQzyK6BtrsK8hujrFSwkgTmD",
  "key12": "64YjhyDq4zyC6rLMe4nfQhoTJDnkE5jxsTa5Tu6822ikh9A9xt64whaFdoCJuDbGTZZb3LKm96xAPRFnn35w25Ht",
  "key13": "61Nx1P19f5u8mgQPfNRMtVcey6KLTykbuGwpsK7yyJzE5jFUhFrWusPvhKF56ZhPbUaES6StvV2EVupXqz2cBMGR",
  "key14": "c4gpXCes9LTAENpyaATuF2W7czgugXXh2BBJCPha5w9AF94H4Pu2nmEV5HJykFbftzPoGUMyLNcj9YvDhjLbCkT",
  "key15": "enZVuM357xHYMMsEDwFaQGrQcpN4b44UjhY1QRfqZAq9tEkPbJSaHw4QbFqudyCJeVQJpjKWYJLu1jDKvjDN6Kk",
  "key16": "26rntcLr2AA52PyKDCYW75VDrov6twp76CJ71e3fuj9hrFcdKwVqMvnmjQwrtubqupNU1zo55WsuSKMupYijh8Qy",
  "key17": "YedvtpiofLuW7n1FjruFvNJTfbhi3eZbQtfgpfPcAdqHGRc4BHm97sMGg7UQuuzw37oteEH47oJdJJWtez4aCsr",
  "key18": "5mV3VrG4KbdhQyhb8v4MZRq3wiRZrdnnrua9xcdTW372ZDKQGQNNUyN67ZfasJmXpQiSbSKDKHGfCcrJ43JHQvc9",
  "key19": "DgxbbzaAE4F9jdHnCNyMrENACRg3a2Y1mFVuHfB8tfAmsB8jpjzvFQLjuRT3ATNkXgNyTGiF6rRy2KkocP3BiPc",
  "key20": "2p7sxyE4btmPqm2EnzUkVffjokoXK3pKshMmLai6Q2oykfWx59qdCADnFgPJxWpGt3FLomdkAbbPkFBASdmfathN",
  "key21": "3pxx38qFywXnCJ65NS8djSLhsyNSvFhUwgPiMDJdghRPsSjVcFYsdqaWG5P4HL4MKGChYeGMBA11p2R7nJopzug3",
  "key22": "5zdJiVytFekan2P3zL97MUftUF6nbaikdzf1EZKHWTVtWBqCxxpnqPTdxrfr8apHPtyczrYCsXASSNEyMuZ3CpPX",
  "key23": "2XmBf9G6mUyQTfpiH7RTQr4rGgH7Z7rA3qpEXcjyeik5dAxaAbTY4eKTnUf6hLXarUd96Pq4gQHSgtoURAuqkgmS",
  "key24": "3ycMHBS9vbjad3QHLYthTcksQ4FwchB9NcAhw8AaEvEoxMqATX1dP5mtYw8vvczmsez825fBKAubQro3jWchSZqD",
  "key25": "DjHr6aVNKsDu2gfrgya4SBrhEYcMRgSqNu8EMUeG96hbCMw49JmAE9L9TNYae9ZXgpALF14CLcivA9RJWhvtcWo",
  "key26": "eu3MAktR5UCqhDLctzdLHHMTuYHwTDa5yTYX8YbGJJqcMqb6F9u9osLbvrXxvWg8iZ5GwiAidQoDYHKy3T1z9f3",
  "key27": "3BobgkyRbpa6Ekffx6WrvwQkv7kHhxn9yoNnawz74Sk6znG535A9nrJhGs95QhtuEmJ7qo9DEZogAfrDKTsE11wc",
  "key28": "7zZpqopXvrmdLTYCM83HH4Ekwsg6kWtXHffTEb8N5hh6mXVZA12dqqxAtrren4Uri75fD4mAo8DFrxR8qNheTJv"
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
