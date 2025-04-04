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
    "5K9WuUcTPqhungpkMc7PZKZ29Z4UCZriaorB77Jehe5wbmRdzvy4S5jXQbYZRGMBFrHJnGeEArBm5UdX8fahHRSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oepCCydKbfaw9qoGVakDtqiqv4i25ozic87QTHjCUJLHXPVRYEP9FFHAiRrCE9KDaamsTV4G97rFpWrKWAean5S",
  "key1": "2VmYKKHnSktRQwLjc4UhauajGJkLMFcsT4tUK2mT7FQdpdbc7EtBLHpWGGKA6mBByA8KogHyqtRCxodmp9X7pVKR",
  "key2": "SmpcA8NpsNDwb1JttWsCkjTaBA8qhmKvJUy1NPfMdB5HLn9wBuV5zt4Wg2GYHSVvK8YDytkmhsx1GqyjpGfF8HS",
  "key3": "4dxNY4jCcdhU4rbnsKHiyk3tNgr7PXuF2AKH3sRCB5FUWyBP1kBqw6v86Na247i7n2TK5BUGsQH7WW3nh5cCRmuk",
  "key4": "PionTgB7LVmdTWHSVEhF3GdCjz1eDHSbd3CXWSwpPPU8bQRxVAht6fi4cFEZWvnQNAobMn99FFgEqniAjgJxUrz",
  "key5": "3dAdAti4RRnoTds2uWv26cxfZAUVVVCTU1FQf8xkzpdDgP1yobsiQ7vGxq8Ecik4ghCjSFkFshmJZbSdJiiCDWng",
  "key6": "5BKf9SLLd1H3YASLhThq3qjVoFcULKUWwViLZ1WA2LFdkm3SyRcSQf5T5TeEy5i6GmHzzQoo3jFxQbydfDRb4m2T",
  "key7": "3ysPnDCxSoWAX2Ps4GXBfMxAvigvPdcD9rLMcQaY3GVX7WJMKAeJpJGZevqrPdUCy6fp8wUTmCPEv6vJybBFgdak",
  "key8": "62ExNi5nSEdxo7MKsq2veJTyKqfuyN5RwyUoCE4yBkktNHs17RxiqX28skjq33JrWxS7xZRtBWW4tyEKghiHrZV1",
  "key9": "2khG3JTfhnYaeoAF5YoTiQE7XSQ1UJ1z8Pmxr3xqro1v2si7BeMtD1tHzgJzAto1dn8jS5thCKwjMKxnn1k8Ju6Y",
  "key10": "3UdVxxyLMD3fKj5DbbmvBxbuY3wzxxxWgQfeY2S12MTes2kgn8Nba1QTQfyRbWiN1nghArth4bJ699QQSNK3j9DU",
  "key11": "4ohirNf6xtnkYRrWiJmz14DKAQqvMA5ZG1znCEiSmJgZDpnR4CL4Hmcj7v9jke7eXs5NVPSJdNrxbpdvESphV4z",
  "key12": "WWhhQHNwjD3Gx9BRBhvDZWyQ17c6n8qoSeG768B3atNUoFXz2qHrxtz6BkCKPRk7UM6nYKrBCuhG2R3Tv6o2XfU",
  "key13": "3qL38Qc8LRNp742mzUN7oMpFcEBkZwZ9e36SRZUbSVCDPMvUZc7YvruK2v2LSrw1KNBPu1QMMsgwj6dSsuzEbd9j",
  "key14": "4iTdw6CxaGi5WaN3DxSp2b7Zz2wVWPpAT7p68d8yPQxo6nwrUyMsPPCoT1b2H8y1wRnW5jtdRrRCPGjQaJXrodrx",
  "key15": "5ys9Ev1ChHTUXP9zypaP2HGFLNsi6DQNmKjZmdLPn6BwWipASsMfGdzywWM6j53UnUdnCWtEKBupoeQoNCLroj6f",
  "key16": "2Nuk1GJEeMNpMzZzEWYgJST3KaU95Kpm9qJRVTrjPRE4kUPLzzza23Jp2sDLdcPpPdh8myEGSrugU8Sx1yGFAHz5",
  "key17": "53TGVJViUcxaLTHE4LeLR53YvLB4t9LFXKJDLA3247kF9sj8Uz9TSUEv2EVT64WJreGpuFYSuu2Lz1TVSND6JFS3",
  "key18": "4ZLQpEH7fJWp9aFz9DaCebQkASk8KXKtYnDnnJFkBcHiCEVGQ69iEc7kg78S7SALnFiDyigcL4BwL1f9ZftRnNvL",
  "key19": "3WyJkjSwfujnGYD1KLwhK1FbT9EMjh1F93sPXGhJXpdq55eEGi5RGEuX1WUTJxGQDUHzoKGJYghgbNbhDgozfdzM",
  "key20": "2YM8xN6xs2nYDtkdJqfsr8PWBPebiDmtET21DYKXnzXBeg6Z3MdmWZT6eq2cNYwpr65pB8CQeKFM4WfStvKyCnvG",
  "key21": "5TiZCFku9YExgq2RfVw6EsnCHnUJeFuFXMDvNLYSg5tGneXwVHfLi1UeJpZcyGwFzF3bxE4m5Zqg8A6bxLvU9fGs",
  "key22": "5htRJR2tnxJmRPMfqGG4FqkwqBdAdGF7mdKHXY85bU5wMKj7Lm9jcZor5JMQv5pCQJyb8F9JHjZHnAc6muK14bYt",
  "key23": "2AshDkS8Szm8cVsGSWM2AWF84dTEer57iWMvNFdfKyP3pyJAu25txskC9DQNg5JnLdN1hCvVyUBXdpDHdUdCnnkb",
  "key24": "2i9hJ8FaG2qJ7S2uKcV5PfAkaNzkBKSCp2uLE8aH7gQQY5ACaZt47iS2EmrRMZbBLtskyjjji6xHfq35qYyBFZJC",
  "key25": "3KjECmJvKs7uTApu5nY1wBWsYUABxrskAwzwMzMHWBEfEUHCkhRBoMwNx1S9v46Fin7kjgGF1Ta5xRcYihH3zzHk",
  "key26": "4dzbmFv49VQ7Q2oJiNoytj2qhmSD7ehsSiBgLSMft5WWWJeaPbQD2F8CuBmYMbNeZtGvvssTFvCk6ZzeuZg2xtC9",
  "key27": "AkKwMbNC2CMzRksNiNRLdvva4cBQRq4oJNDFAWVb9ii1iEtyp71KvwWkctwi5arwCZZ2ga4drrZgRMfjp8MCzMA",
  "key28": "2Jh2dvDA2uiDkBEwhGD1bczz85WpqJxxwQwgLtjJcHy88vciyDFa3QwSp48phRAqHcpBdCFJqmUu3ApgH9J3mDZ3",
  "key29": "67DT9G52JkcqCHZgSxzNQbWdNdCLVGxgRjPqBx8Ep3F7KcEDsziSyP6T4T5k4heEnrszxJzZDM4cHk4WsukB873W",
  "key30": "2osuuBGoHZ9qwH8XgtsksyPkic9wb3DMQUFi7cJAvCWEafJzkQqxqXv4R4dF7kTY4UHhfHp5yMZagthjZ7mokyti",
  "key31": "4B9rfEUzncm5mndx7ACrCo3ap4FzPTifpe34DCYUvtyPZVq7eQURhoGicHAbaFms9GufxaTLALfvtVTfGf1DU95g",
  "key32": "2Ebv6ozt2Mkf2ZU3MbUyMxK4EvZWEHex9n5S5gpFTXf7HU9oYNY9h4u9E3ZfkrNHcR7aXecgV4bfs3bmdU9K2yvX",
  "key33": "2uFoubkW6wiSxu5RZCbktugJaFgmee9m76LffTkKkB185znZrG1jJEfUqj9Hqda5hBpBNKo6rtX8ds7ZN56SUMVL",
  "key34": "zNehcgAw5tsKj3dwyGcpALFV6kf2Z3N2oVyMXMtV5cjXsUYjj6j8rvoFBtPbk9BF1aJtoGoZLUCHzY5gbSFnckC",
  "key35": "r9RnQBny56pejr2ivihLToQecmTQCQa7Hfxfzf9zwhMdj7EYxZkbAvshUc7uGsZ111bcvmWsyMeTrGKv2hwd19p",
  "key36": "3XztHGPvYJLi8W5HJJ2RzAWC3aZodER7gJAFbxQ7J529usWvsB353PvqRyhMN2VvXHN28fHyGEyJMME4YXQXdjeU",
  "key37": "5qqnH2xCV26wLr6bxkR5yeojuboZomU6cfhrKbJNtZQaiKmucTzXp6um1rJew6g52bDqAG2ANRBp33jLpWod6Vmu",
  "key38": "3w8ozT4sKoEK5ikzfpiJYMtTmHKekzdazvrEAh42GmSwWCS6TWqqTUmQgNW8Vvrf94cPjVkeBpsUyiUPC5zBcivn",
  "key39": "4oGCBbNqLY3Lpg5baJbr1ycYmB3L4hnqWbXuo4s6kU8AzmDgyXzUaCrD9SamZbajjsX8QaGQuCqFHnmCwCepvXvj",
  "key40": "2U9mtJjQv38TGf9XZEw3ncVZsSge1Urp7pzHuTzSjaj8BfYoMb8ZwFEuXUV1PcosvsXvFYnJ8gj7qbyvmmpwYEes",
  "key41": "37X1pAmr1im4fAbfRQEwATAhaHYf8KyFTxHzDdNR1rkYD77xWxTRATtpY6kK5D4R7bT3wdXcAFJsbtNtjaYJwihz"
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
