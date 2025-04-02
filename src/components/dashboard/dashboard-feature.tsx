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
    "vNXxMRR4M6PtbjffX4yAamQSZeLf1gixmuJPHXEhZVdQGyrbY1wtphJzhNTLLdWDLEYCPfp9UuJ16irWEZcJdvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWVnAhJZ8aE8GU3YwMSC6UpERSrBMGHFK92Rqm3iPyCsFrQCSqtoGzmMgUddXdsdP2xVUdYH6VErV7uSYTAYUnp",
  "key1": "4jnrPgNVtpp2QNX2k1ogBbb46GPLfzrDoBRNhHHbM7eNRp21w1aUGAMkXQroX7EdiiyEyHCj6a9X8yUKpfZBj7aB",
  "key2": "5YMdcrfJAn1pzABNzUteLu9LFShC5PEAw7GkUSYF4eRRcgTQi7eeGUDdmb52y7y3dLdkscRCPkEv9dgJXciPEVYm",
  "key3": "29Mbn55QxjbW4P4uzzbHkHVKFJsgfC56q2QfA2wyhwkYddZ8HX9QhZDfFVXiUKVXMaer71TmF8wmouLVqwoMzULA",
  "key4": "46jDczvmn57DSMR7TGRpJpdh4As6TDCMKP7BX83AqofnVVLbXJsRXMBRBAWorsKDfma29huiyMAX2ehTn6MKMnTe",
  "key5": "4EVMvFXk99S77iQqGzc4wEAwGkHvjZJG6m6qowkDf9xX2CE9WJN7tHR1gnJuXsySEwm4YPjh4G5pFxGYZKTBiY27",
  "key6": "2P6nBi463F7NtWmYtZ1dcsCfmqqEcVVYFAPLHwLUq1SJHEUJHKBiaTYd4p2DXX9qeVYnoZWH52vnAUXBouqg7fVt",
  "key7": "2dMnUeNPRd4V7bT6V4qg4xSjZVyE2UeRr8W5zuHe9yUXNg5DBaSzYC9mz6Bw8EiDDRSWi5fEkshy93EKMPqJzev7",
  "key8": "4k9KgecTh8HgWaWheX5Ac8WC9mkmS6XxFrCwQwdmr8TJgapDFCZk5jnySwQaXHaXthkv3bvffqrxcjR5he32A8cx",
  "key9": "5eZnpfRCnzJBq9GdFH3jEkvAVjhzeEnGjDAY7DTzyXxHfoVqxUUAWoh1dwvTWSoXKiF72w9z9dprrSshub6Wxhfh",
  "key10": "4kZdKHqDuhSSPzgW8gwUH3yr4ebKV2MBG5AexiN6enVPXALdj19Z59LHS8YyfLbCZzvLFq1QXohhuFm4GqcdxJdw",
  "key11": "GrkQLXr8R56KxMpHZ8BYCR5gurbcHoWGGo2yfKCaQZADnguXvFbFckS7aAqv1gSB3daHmmKtf8zWest7bh5VcFo",
  "key12": "5VLWXMngg6wEorcfe693GbEoWkWsJbBeRyx34GozikMfxNgAvDzBJrJGESWjxuKfSoE3y8VnT4QRSxYS9Ntbmpsm",
  "key13": "62FidP72cKhYr2Z2v4YNJ2u5vXFZQ4NQJdwNq49JJRoBYfeSrT7crgM3gqGdYG3HQ11hXn8S7o41mE2gKeETUrVa",
  "key14": "5qmgxR7zjqQnyTPyjNhFFdTskSxFxn9ywtzfqMbmxb8J5iTxjNuRB49HvWCiygY1ksErbDpXGhd3n3Kp7uA9Wcop",
  "key15": "37J5E8xVNLxFSMCai9AtU8wkXbx3gaVmdWeBEPkyXBhQM2GVihgPfr1dujkxKhgQT9gsbEJykePW73Fr8e4S6N64",
  "key16": "3qg52KdfdJf4u1PWmgPSpeNPJyw6CkZpf79eXkWw9617ffrycnWDrTiaav2BDMftPt3MEa1rX985WoPtzoRhpo8y",
  "key17": "2Pz8eG2zUaeh2X3JX8Y3Gz6kzh4EFrckNjSmTEfGSG7s5VvJTpom1CRFa35RTejmjzvoUQzUX93HscZxSP812az8",
  "key18": "5QA7Wji7jnbeTuxKSRGLYqwNTXLey7TKLQymfXstdKJ8cBio3S8gVR2YBTi7exzDyWREwq6bbycW5gV7KYuizS1F",
  "key19": "2E8a6Tc2gwQKVKqzphSbVH4QA8behbyKVXdQhpiFKRARHxaEg2fw9dkhMATRJh932tzXKqfQ3buqxqqJaaayLXku",
  "key20": "3qEYxxG98ZG4898bynz2bPa62aCGhfhBJ1gpUfqCZSL4Nv3Kat4MmxqKj3fW5T2qbnbUchHmyv2juVBXcFiBDm1p",
  "key21": "yudXuCTfhQY8TbaUex5N3WfMiVEaQe8f7sNMub5RTSTPoCw2e31roTog1wcg1wvcRYGCaBd6wScnSSrbQRC8yEG",
  "key22": "JGLRYLdaaMsp6GQsQ3HezFJJ4vKmYJa65gqTEcbY4rGLb8RDJUPnJU7MihPvvLjctPDqEJS27f1ApYesPd6pBMQ",
  "key23": "5DNsM388vvebWTBqD4Do1p3mobeE3u9fmnSPCRjeucinzKGbQWY5PZyQd9N5QjYUDtyrcU52mw1ZdbVd3YrFHzFq",
  "key24": "2jqXsVKPxaDYmVBLXFqUaeaYpYMy6ysZPj99HGzfjncnqUTcefCjnasCHkrKXcnesM8SnD3iu3ATzx57apKgTg9H",
  "key25": "kegSe1w1FsL1pqZ9o6z8NdFrVgymDgMEoHrW5iLwb22xGWZGrKKBxZk3oHHvt7i17mSpadtqkEX5f1maoyM1LAF",
  "key26": "2scULhdq4DMw4ZYQTEA5YfzRNNFSwULRCmdV7mh5Xx2gBJwfe3tJCkzPMLyuQL9iqvuBZUidHfMCr4qq7A7XfPTh",
  "key27": "4wk2zzyF12QqexEAvEQg2Lqt2qr2TEeh95hLcpHaxJ1ejYf2DEvoPR1HBDanPwXPT79jVQcq76Q6eEJdgYDxG6VY",
  "key28": "4ms1maXL157DkHwqsod3z9D6Cdp6xSVMkgz5ux28oBpNxVfRUnEZrXhWPr5Ea2DEfut9Bhbi4w4BLfxKZ24QeLCm",
  "key29": "3ZkKHYYZdemK1on88aVLXc2hFDjDruXmfXi89Yt8TtkyQqnodKUF5AP9okjTdHdohMM5LUGg9BcUVAtfLqyXhxZR",
  "key30": "5uPUjFLEj6WkzqSdPYwqEbcDX52B5s6wvnWcbrB5vSNKCvDqWJSPTxpXZQ7PSqVcUombt1Jv3KZJ7uNxMCUU8DwD",
  "key31": "3acTk6TuejVQHC7rSybbhXKSqWuysMjedKQGCtD5Kry1exiCZj1qTir83SFU2wrRSiD33McvYV97beGi7VdppraU"
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
