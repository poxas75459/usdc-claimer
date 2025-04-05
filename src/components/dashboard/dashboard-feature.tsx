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
    "48b53oWRDRFt3gMxDkwc43fpKBwGhMJQdwLyGNQS4kwhFNhrf6EcJpJkcFjLXWJqN2TWiqakUc8xYfoaArxfEFMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtBrTPaaHgfnGjwNZJx3qnjXEH6e1sdzdBGmT3S9seQzFosJyvz3XaAbgEEg6Eq82kZnireFouCsXRbtZceYNCQ",
  "key1": "4ZmGXwR5b8HS71VmVJBGzEAyAYAZsLw3V9CvmkcnT5HgQMEAmSGJMe1SGF2k2GKC5YYkZrEzJ3Qh9UJLeLjGHTPW",
  "key2": "2a3DEs5QnKky4Gpc5rGNtXdSh8tBJr4iASxvXoRuh45sMUvgyvQKU646MAbJqUGknRqr6jDT8ZoVkXShkZCezHX2",
  "key3": "5ebf7bkuxuYY545saSatAX4XwVjh5Vo5WTmzZJq6V7v9u4qjmgDLX3a8EbNdt4huVgbcSSfs21xqmnciTJEPtieb",
  "key4": "38u71xVCN4hdhz1ug47gXsYfq8bwUYpBg1qtQSqBHcD2cQpHYRUkjR3Axd1ikbehKRMZUm5qp4ZgopRaSXmSD9PX",
  "key5": "EcLz63YCqXi6GpzYSZtkcpzKdmZETVxNz925DEPSDLdqZFHkqTaMDvUY8EqdAS9EiBsi5GayLh17aazGSKqHMyk",
  "key6": "FZ5F4FWoXXj5MDGzSaXDqMyHyZ298DxMqgXycieWYbrZaTwenHZRA61sMpeJCjxUGnTHdY33CU2Q4UXv1hoUYGx",
  "key7": "4A48QyE7thRVnPGMkUXENd7CThhYYeTXhekQ7TmioRwbkJNGF5S97NyrYS2zFFdDGtTeQoQFh3Ge5wNKGgEssM3A",
  "key8": "4WDumRG7CtdNSekdZ48S83uac7sr8tJSeMcqd4CLGDW7cXsFdT5GxJTt9AZteR2tAdwwyLBAHELgB6FsQLBq9DMv",
  "key9": "3eQcJM6iKJr8tizbHpGT5HkGx3WdesURfnkjN9cevLbA5trkoVzJK352frVtoGRRmbfvkK3gPCUYuWXnrt4xuBxB",
  "key10": "4ftTdGaNYxQeMshvp5Z4j1kgYMX3s8TMR2c8gk8zjZorzA7K6VCUuRa8E9oYkTzMLKMWSEGCeaNrev3gL3Qgj8zs",
  "key11": "39KCpE7Qn8L2o1BZwKzTi2F7bdARvh2uQwdJJ62L1MN3Kjzk2492ZgNTxsZMyztgrNiWzDgiMDNBkJiH4NwK9QPb",
  "key12": "2tunnxjY1YfUNZV2ssAV4Tc5xGzY9L4XnmWUdHo2H3yaWSx6s3R5djZm7Zyhzh8dQYR6LnHs9j6nS8VZczN11Gbi",
  "key13": "5keP1jUFHSLCeXv9UTLJo5G3SKNwZiUgMiRnoiWXqAQkGjVui13bJMZPqqcNtXVH7tSmxzDccyFjG8Q3sq9FPaXg",
  "key14": "2Eb8yoKtPqS8HQhgoJZ8JtTXQoRMNgktHtgBZqnoFoL9GETDj9nPhUu4ELoNnKVJpeu4NqGVi8yNWN7dPG8jwDWc",
  "key15": "32XAcbPg3dHvJyYW3YCtoHmy3x5BULkBAUMfYmoCuUkEbTKmvA5SS68EZeKyKiDNYfyc8efqtNvdSQbpmngNWPqj",
  "key16": "4wPDySikPf4XsGpxpYHkDQb9NxES7UThLV8GuS2QHCtij4TQUgwAxTndtbCjEMEtvWCKPhtj773i7gPnZ6hrkmLt",
  "key17": "3Uctes2agQ2n2pheZUsn9DWJAaeLbxJtQ7f1tpbCp6qBvoowsG18tHsxT2oKnj6QsCRLFyzXvQakvNCD2ZYfPNpm",
  "key18": "xQugHZycVBxFGaw3U21U9LCpF2HQfQ1vUUzaRVvt9zi87n3CP2MHJPPwwCumMWKa9h393PsnrLW7xdfgEhpQbNT",
  "key19": "5e6vFJobunzGyfLAyeXZG7AgQM4LxmC58QC77XZQfG9sTuwEZPTbQBtp7bfvbDL8GGnzq7Q4kCWM5idW4wYYWenD",
  "key20": "3ey5dBY6HxqpUYE7barB53A2reVRU6yX14Z1oADQSjwULcGubGbtuVM5e75C4UFnGo4AD7PSR3HeCXTgKmuw4RNA",
  "key21": "4pKMC3XtLoP4HqdS8yqCJDS8x2hhReQ1We1Hg9xiDJkxU35Zo32ZCdi5xqjH9Fkf4txsHVefERPyWECTU4BM8gZF",
  "key22": "gsH8ND9Lv2qoAjDMSDLeHYtfd4MBj9NUD2UG18YRTFQM4Yi6WAaES9xvpnnqVQ4gu5cMrUwP8Cd2SrzhShENWkP",
  "key23": "4r6ttqCvoHEggnaZdPngyLHfbhpvyZCtjUgoTHyW2TqAu7Tduuurek1dAzozXDJSBxubm9f2Q1tAwtXGyKkTD11c",
  "key24": "5utcaBF2QigJ7n9oLDWfei38uCW7LWcMMhZv3Rs2WqrbEtWzPp2hBgn6tPmZr99T16vAzpqSztYSFMSqPKfMMLAr",
  "key25": "58tQpvKf8GuGVPheuL5RGWcaErktAxtwSZKxLknabmSJ1zhHwHfTgKuXaK8wKkXx9DhHhdmNByQoXYbMC1gLRnvP",
  "key26": "fDCFXdB5po8ce48Q4SUB4LkMFfGX9EjA51UZQ9SDQeipAjiDEXTXQmUkJLf2T1yDQJgBttxZvXf4tNjnCNsuXpw",
  "key27": "2vBwFGB6CCrgUqcxP4z6hNBxzhXDmAVwRrT5g14Bv9NxfAmr42zkkvHLakRvSaSE9oJR51X8bQv5M6kzuP9Dycxw",
  "key28": "4pms4Mh1kz7hTyVvnuZMu37Xg2XLcVvozSNV4TxZs5MhnBnCcsDLuq7UzJZXVMoi1ngicvhvNK1GNdjgDKNb62Fj",
  "key29": "2JZQYyJfa5wkecQ6BFpQWN1VfwNKzoGvtds9NkWKHrCgZhPEE3596tXtSttYT2tRxi62hFHbD6LDgoXXY4wFE6r8",
  "key30": "WvHECnt4v4XaetTbvg6fJLKqqn3zLovpf4eTk1vL6fotSFzg4Joa33RWb3wS4L2VyVQK3MnrXi9dpUtweEdH9UQ",
  "key31": "4zXGvwZ8CANdkjUVVUhVqd2QrRGS1KrTPi7zwGzDFBGuCLRUygg8fKkP5Py63HGT2rw4oPvJErA8y4ek4VTNpTnE",
  "key32": "3sfiyizii3JjtnyuvkqExg71fGZvmV5ve56KNgi4Z1uj77y3MTQo6JbbjHx8FLWr1Wts6H4YnE8982LhRBYHar2j",
  "key33": "5yzopyiBYQAYEvxRxE9qtMxPvtTnbQcG63degc6DNbWmoZ2Kvh2rXXKHAD3MmacreDKie7z7nxrUg7LGych4oufi",
  "key34": "48UYenEdYYoiHYnpm8w4YX2r357m4zQ9bhetbg2uMr91qMk9nyo2mvpZfpsXeCxsRMucAmAPC7tyPzmHaYpufS5n",
  "key35": "3XAzBmiSK8JcrAmAeEBgAFoGFuUZFg4waEQQ9vbv3AzsE5H3mXHJmjH4tpj8WMxi3F1ktmPrWxvF9xaY11KT24Ff",
  "key36": "13zeMyEVPk8QirHkGBmSmEhDC8tbtvrC1Tta4XUZDR98K5doCUAueVSh2YZjj3FVRq9jdF4sW2quQtnLSfmQReX",
  "key37": "3PvaSW4AAEUcbawtvkdvCbiwKhnQn3HtwyfoAnZaUT6Ye7JUCWgAC7pEUYxibCa2HfJzzaVRLB5MW6HQN1Ktvn9M",
  "key38": "3e5P4usMPKg46Fyt4HbNsRNk7Z37GxLsTFesA8cfdo8qc2zWbhYcWnvjSsQbiopBWKoTQrFaA3vASh2KFsd5kmeM",
  "key39": "38Ymn18bjMPHAXEREBW7qetGRaKmkP1JPp1yEdKqv121eyNoUNMKNE9NkZYGLNdiz2CUhmEQeyi5P8R6ERrBoEx8",
  "key40": "3LyshAKn8YgjTg116rxSD15dvajJuDHA9a9Pm5ZU2jEFvVVLvEUkKG86oTJmugFdJSs6KuEAExAgr24SCp8h7Qp6"
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
