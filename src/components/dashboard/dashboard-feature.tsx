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
    "3Qf7hZpwnS16FdyFvaijXT8vQeptvjeBpVQ2QjKPEgq5bZa1yapK5AdVELsV8FfuXBTxNfSJH6VFCs3iRAP7e2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29pMwh4NEvDJXfv12umG7vZ1EJS2eAozpSfUoMEoNsz5FuD9m4qFbA9r4PD4oZUAmjvHZp7zg56HWBxZx4sANNU8",
  "key1": "512kYpqLrS5kKfLaCdbeFb3Kr5hZ3t1qx6GGCqzT8BTuFzzui56FU3shH8WzvLtCczF8aA2FWRss7nhUT5H8yGZZ",
  "key2": "62N5etE3ydqRXuoUY1RyNabTyhMpF2yTuZNq1exQZVmYhTbBUBFaQnGbt9TVqb99rkDkkM6zZibJZh3HMrGA8Get",
  "key3": "3ZrVMA92XfVeQYxpUGyyAjwvE49KJTgTASmKH9ykjFnPvuCCT7fnMQPA3x9wVnqcsQz8UBoKMD3WMj5R8a6R7Pc1",
  "key4": "62QNQjQrxTehhUjut2MV93TdKD9Bmpwv8wcvvWn8rVFKTGQRnXZPsx7BQejLpvJREp9tziCAPakjvm6Uj2gTVT9r",
  "key5": "5a9oMK2qYqgrdnTrBte1ZMYb5JsmAyrcPRMmn5RtuizshQ8qrgmrEJTfm9oCP9DpXMgboPiymR5BfQswCdp177P",
  "key6": "4WoFdb7CZ8eiKTgcUCug1374iaTmTGxbzvHtWzCHZFnxYhcbEtosQHxU521qeJgpwELyM8P8ZoBwvoW8mkAt9P2E",
  "key7": "zsRfk45zHtVcuLiSBckLaGRPUnmZSXosrR9iH9PD2NUquxCZFju1nMab3AhUPyZrZFweovbBkmr95GuVhoWDBHU",
  "key8": "3YTW7MQhL25ZZuS5TEAxQCAbBsWubRfEPpYWSwEzpx53Dc3uGuBrKkvsb17RUMn8DndNsaw7neV3YAgrVLjMtdff",
  "key9": "3zVvQTA6j33Y9puhvJRn2uPXzUP2P7KFJmvusw9KDqSxcMsRQbzrwds3d5CFWAeXnwB2bV8ezXjiuPbRJydUBALe",
  "key10": "2cEEVoa7UZukeEVjPWoyEGWcNMLZHh1cCTeaQUbEQKGStLhnqMDKsmBqBCp4FxQyKssgPB3g3vQfrkg2gpNEeRpB",
  "key11": "4oDWfkxN63FkiP9NP7aCZWb1LzFszUh4vPDnYdNZ3nKe1iYw5fuoisJXGy8bUWHZrazhesUcxqDwxpDcJwW3wRpn",
  "key12": "6TML2cRZ3AGvJHeE3HbGRYmU1y68B1sCSAvJDZcrX4Fv8ngMxvtwJzyyMTnqZK34oLoLDSfaqdbLXxm16VtBY9w",
  "key13": "3A56nZJcUgzwtsz2JdcqrTzVak3q7F5vpAsJ6Wu5yjmFiBhpYGzmiHM5gSADpSpoLELTcq9qr34t846LBCBxcXvn",
  "key14": "E41nfBBBc3hkMCdUzSxBEo2Ufda9uX4ESTe3zgmcFKSQXVvAewPrVU7vnheUh5JcD16o8bS4n8WVHBvtzyu7tft",
  "key15": "MdEFvuyZjoyuWPSk9AUsPdR3V7KjpjLwaXLVF4LPNSDx6mvG9FM5oyvdbaMER2seEyB3C8XHZm9qBR9CdHdRc88",
  "key16": "4n42ot9c4RSaw9KUEAnhZ9ksy7bDicTGDff8bSqX3rj6vtz87MVgpda86JJEC3xSBhi7bqUxAhS54Qt3D4gK9WT9",
  "key17": "4cEe66fc9qoLiLJQwQxv7XFRLJisMfameMeHLJ5JiprtTRjwqYK88Jd6SXro9FWKm7bTh3ZJLPuC8Da8fGfeCzCm",
  "key18": "M7JxRtGKvobHFj6DD3N144QDY65BkA6ZJZyVtGT5k13iPy9JAsJq9Edngx9M4HmRvEBapLo8cSXranT6Ku6Hnac",
  "key19": "4odsskZrghoW8RKdB7At4eoCmMJySzbpinus8pqVGpfsbtDhAbft3kzmmvjHR5jsYCBUCaT88gv94s7UDRjqWFJS",
  "key20": "yq4TsRat8bUcB2QPHxTAhj9GzwVKVvCcNuDp4pyADV1EtK5YYPUPHQd6mXEFzebPkVuz41AnAnUDfGawNvh4qEy",
  "key21": "41CKGCFtUhn2y1kMG7E5Ws2twm7AtL9zEvfAXii6FKsXrqwVogh58iUgCiZ7NssjQp4y5DwfPSKtkK7AueB9Sj5F",
  "key22": "5kh26hr8qfD7RxwfZ9CejuGBqidCMkC4hn8JxgRJFvvCLJAzUrVLVDN2YywtFagX2vYQW1Qfu9GGkEib3GB2nPME",
  "key23": "2itDpvcQbt1NQQDNvHJeqN593P58bScKBftzxAXXscsGmuBWRwRfxJZ52G5YRsQ72PYwuvdzPXHHMuiXCcTRxMxW",
  "key24": "4FbuR54qkBTTwtmryCCqUivtcYKS7syRXknJtbiVmEXEzYHGxxtLqAWZeE6NPyB1HbTXZiAtegxob8b2NRhaUTYC",
  "key25": "5oaD6LGjoCr4jzxytbPAqKV2w1f27GPaG2UMGU7qbruB6k59yccB13HMUwRPnGzK4qregqS2VewAyLLw7d56dMQQ",
  "key26": "5odjmN7qyZU4NUifTP1HHtDgrs4fgXoKqgkW9W74jomWrPCEoj5wCqhfiHC1cauhZbDHMPovTUmFph1yrDQhiaH6",
  "key27": "5zsDAHabZSw9A9iu1Dq7CLPzqhqe7vuL6JxwMqTGKVtXxAoRVeZqeFKmYFMCWKwaWZM47SyFo3YMLgi5ZxzuTvKy",
  "key28": "ZiUTiJxhYSPTiwgzqa2oaa89ydgStmTvm2WAdVtFjtczxr4zKYHqCMpvKjktTZSNi8fq8aCiuLrWbbdf23ysTPB",
  "key29": "39YY718mVyANc9U5DivpFn11jc7ncvMWNJooR7aaADxVA33QEg5baBugdeybiV72ZeonwHqq5NEm7qRi5T4dUHHJ",
  "key30": "5HptpBxCrJa3dpAb4Sn4FUDTHbLcpVS8uRedqPc2sQrSNFeB4AoEfNx6maXzhzVxUqE4x2DjiQ3PAYXrQRycyTmR",
  "key31": "4ksVih5P4Pnx6xMfBSUTRtVkeDJU1VG28iFV5D8QoYzkkeNx4jQc7JqsLgT4adj9kByfhiTmmBJLfXAR56c7kBNh",
  "key32": "3if8X6rvK6YCoGYFZTZiayvRPnwdg2ArJGXC4T2RnNtxX1fREgzbQYwia1BxQoWMNn78gSWtyDy7Dr9zcst7rh6x",
  "key33": "nzVwQZ6V7bwBCSovsJdFA6CMyahedePqdzkwCbSjtVdV65PMJkmJcXRHGDfAgovXxj1U2tNRkURjTa3tjG5vyu7",
  "key34": "UaPrv5VDLeekAQd5o8KMNbndNnpsaynLyM3VDWjL7SCyquKW38fhuDym5FNMc7zUcHvRWpq9RskMrAaA8rN2usy",
  "key35": "2fRKUKBsewSFkMFRWDATtEmLAYBSUpaEXtrtJEEoCNynr4yr9vYwFZx7dhfxRGtEH4VGPvLpTzot9KSJUe7H7xwn",
  "key36": "5DYKyMY2JebVGg4DCHjLBGMKDm9HiG7jYJLDXvq8KTjniw4A4zb4aCkdMWLLJpERHpUFBgMHzWpFxBVAkpFbCEjf",
  "key37": "2ustaUebzANHj9mpYSNg29mko9imtrCdCwAQ1VETRAHwAAHCgEDVu6FhbMNL2Mnccdu26jPt2B8Vhd52wM1esrx3",
  "key38": "3yK7TG4uzPSuWECkX37RDQwhqhG25eMDiY5CwXsq66Zeei9gh4cPtuNEvSAvyNTwezhGgbrq5Djz5sjZ1qaFnFQq",
  "key39": "4DTPn7uiDMoejZ8au3nMrgZp1kZj2xytuXkcBcDES7x9L7DoSUMrA9u8csDE8yEfF1p4X2M8zj6PJweNiDNz1N7j",
  "key40": "2pKTMn3JpNw72atg6v6QCm9moM2Y3t2M6jLaYrmnacL7UfPnA1z3MqF66bLwbMv4yCSDrNHKxK3hnakKn93rx13V",
  "key41": "5ATgBQBbY5bUBqdUQjqm6GNK3Vm75sMtiJmshJ4Z4J9scpTXy2pmPRXctB8udzdhXY4VZtA6KuKWnNwdYTB5cZhi",
  "key42": "3YrnCS3nFcEVWywHDVX9sUrxpZtowb6oAqoAcn4Mubd5c4YsszTr2byUo7rDuMRZHfwABLbTSvTJ72oD1BeTPyCb",
  "key43": "558U9qFBW4Zimi2yfFUQD5amXNrQKujZFjBKyMNxe2JCKpk2oWC3WgDW6kK1hkV9WNGRVpx1DN2K1iFS5EhkuwnD",
  "key44": "2zQfZ3cnssCt4uTGBUJgEWo71i1GrUzKP8dUX2xqyj9kqs13wjZYCMP7RH3PcqoVUHQzExyDgtYsUhjAkwZboLS8"
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
