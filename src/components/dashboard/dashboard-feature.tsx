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
    "5FWRzc7jH7KXqKtiHSZjKPb5UkJMjeRDi2pXeoVivegWgiW2betq799pb3VPtMSteGce7X3C1SKJH91E3zadr6GB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMpnWEG8CTG3G4bnakyhA2eLFtbFrKsSC55EzJj812EFowu65KF2CXJRP4czCUqx31qsomacZPn7tpaGRZ63sWu",
  "key1": "32qnmcUHzrTk8Yhb8YsoDmb5poMqAD2NEoEYnLSXzca5TbZzAfCXRvC6z5Eqz9JzENhMyJwX8nxzEkHoyoP1d4kT",
  "key2": "2PEAkKZMdsM9upfPUTrKU3RSLkfKxRdnSFH4ZFfw4spG2TVVvcJ9Q8Giqekh7RbWswQ6tCmBHC6hQvVK9V1g9cwg",
  "key3": "GCfmWZ4nVAofJn8TSuCm7ehAzU85sTx5w23ZUYQX33b53ucaXVn3eSxbTPgQQtwKgYVZB6Gb4UuCMoydV4HLxYq",
  "key4": "4NTMbGiLZ1BKLkuAdh1FFzuqkKB95dTxvhUoNdEA6dHtuaJnVJ7eH8snV6j6pZ2mxijKoj2CZhSsNYqfFr37mVgH",
  "key5": "3AUGQf961oFXLu25TsLBBRtA7ywFEgUxUbyRCXHAh6ngGEYGKBNpmWGQjwtr8xWyPK2VPxKNAMbiSVhV23UaaKeh",
  "key6": "2KKpmdYRw16vZNRSYYdsrtrgkQbaMzWqECZoABEYAs3jzezKZTqZKRYPJutBdPFhYjukhKUT7n5bFwPazufVLCCR",
  "key7": "2FTZbBsbL64JH5YFA9YmSWpo4fhVK8vj1kMeTjqSpzazjusNkRd8vLjmxJY7mX5sxmX7Jh4EHrpSKrLGeeJrEV5U",
  "key8": "3DaDWXfBhSxDtvdRxaoNo31QbMtFWMGqnXhB1ZMuWe3SztmCoSp8KSCREHdQx1FbvA3Q8gF3Yhtmk7kcD2BzGbQJ",
  "key9": "cJakuavaLo1fcyV3NiNpNPAVcVWqU57c2UozernHTnpVeqaSTcbpX6Q5WMF6dSovDpKnj16GEtLkcThESNdEAPt",
  "key10": "4eDwuMoapEnJeDzmiVyE64V7z29VMX4XA3Fk5PbTN1NQ3dnWVSN1ZG1DWgqUC8njZ3bfJt1Vysk8E74BAuSuf7RS",
  "key11": "aJKwsmAYigLjiJJGCgWasaaC415JU3C4Kmo5oAMYVo8zoCLBsRMHiE9tg9rjYbVM3qQKB9yhc18cFVLJkMk98se",
  "key12": "5LQU1MtJydvNRhe4wjjdUPtJ2TNuuEBfD7bzWHsPDAj5P3XJqH4hSbXrhB7VeMCzJXWpsEBTirtteCdCYEWk31Qv",
  "key13": "3kMYXKNUdiaXfdSptJEySJN5jhuK5uymaMR7QiJU9nRU98Aswmbe5dyztR8MGW8dmVMQ92FAyfuQVSpvEwgvNYTs",
  "key14": "beDEJa383hcXSDKP3VxmA4UXNQMpsCweQ9X2657Hvyb8DiQgnzVPZUTVu8LZwukiXtzNcdmbnrhihLuuUcYK4NV",
  "key15": "568MRRb6APZWjMJPeicgKXVnJmMs8WdtHFWjJMcHAkXd5nuUff8rMsbguTd2QGdBs5e6NDscANaRakagoQ8jFmaQ",
  "key16": "5Mdi1m3zbB5mY2try9CAcB7hsinVmB2HWFveV1EqAQTG5dDHFTtCyijvAHDWfYFkQFod5MMkc69vAEmFzFPm6ZnN",
  "key17": "3kvpjS7c2yuurJNhCYyq7nv6nt7DtnHgHQV5MfXn5NwBasCw3DFhChzadwv27xSnb4bpHz7fMJpYZ7SbfZUcpEvi",
  "key18": "2f8LAPFwUDwKw9fg8k14Ndk4TxGT8vvzFjXb2tv54ghsw7SSMvNcauBMQZvSLwpYg9HiqEAhqkXJ86M8RBcSV4BE",
  "key19": "4c2PCud6wC6u4kx9EsyYWim7x5xMpPiuArEMAWscrLbSyHWdeBVe9w9wg1L4khNPQQjtm4qJHuf3rTPxa8EfD1kB",
  "key20": "4kpMgnoDq3nZdFgBXx4cdLbTmq9S91yZK28YZLQY6wbJLNiZnWrgnGm5Hb6dPBEa6XPfZi7JYMXkniYQNCnA7eLk",
  "key21": "3r4joUaj5aSRzPF657baBtqVvrC5HaRFoVUDbFKosXCURojQYasN1CoqKP2n1Nuq4h4ng1ybeFDuSYpFJGWpRJa9",
  "key22": "oRvVLQ7tUwYXizRLqnYxLZZJ5RTmZhM9ZSG7dB3oDcXVJGRCchnfo3wJ4YMAYgY5vfmpiPG6X7igJteCycVDnD1",
  "key23": "3RmASqiP4Wu4E7sFT6ZCveVT8d8DyzygB54FEEZGsF655G9WK2RdtVe8a8WwmAUEumnjxrRE8QZWsfiJsDnozjED",
  "key24": "43Jvk7qdcpUsj24SnQ5Zvxi9cHRu6SdSK2yjyP8WPKasqJ7avf3ETDgb68x2x3RdKGoxG86LRehjsbsZXQo8pUFG",
  "key25": "5eejC3S6ttJ5ai3CYECftunR14WBKu887BP1zK35YMwVcDWmedRdTuuBomk4Aa9R2fo4R7dbY5ZfakL3hUU61d9V",
  "key26": "2kbBih3UzACWbQDwQywfeQwHa1VNYwf8xnhCBCcB31KPqZ4PEkzfCU7c8SKatVLnQGAnvPaNKCpHNNDDbN8RrJHj",
  "key27": "5wrF4UWLfhFBP5CMYgmenWjDZk8pfLviSNiWqNXc36GRUxaZKRVdCtS4kNWyR29mqGpuqakxPgXfWAFD1iC5eeRD",
  "key28": "2bYfaeAeVLEBEtUGJXm6PvNMmAEPyEH2bwBfTfJrgRBbDWRr12DKVAAefozvNmLKUpkCtfqYqGBjxCGpJME38C1N",
  "key29": "3XidyjBkmbRpEGBFVwm9xgX4Y2MoMSHSvJ9Np1XyuvkB3WSeE8LSYL8YDT1zfzxSxaqWc1Y6H1WqrTgtSVBz42pa",
  "key30": "2yNe388LKBtsdXBpT4j3uASSGv3x5iyZo6jtsgsAN4xnWZ7wZdjmcEPmCq5savyfeBRhWQ3kr9w4QRcTg5mAAKE4",
  "key31": "5xZF3WN7u5mufy6LTyqcWKiDfEQ8Zvwo8FqHD8Gf4zxp8S4DKvEDKRhHhAhPjmzsgm915axf6Y1QFJQZbu4E4N37",
  "key32": "5UumM7edaooy5mE2GPcwbGmMj2mJbcHjBJ7Z3PYHDbX5iXLDrLhuLpMrSjGARvbdAxQD26L8ViA5J115ABpXA9Hh",
  "key33": "2eZjZFRjwj2gZgHZ1nwDk6wXJU2NHwv5strLPdTWm2hfM3wtCUZUtMqU4zBV2WLNJeW4YNnnsbbfQJbtrQAVt8D",
  "key34": "2swuPvffLW5AbaujcterpNrLgr8iQtGyd7MeDP7mr6pxrNqhixvXSGkR5N6QxEPREt2iC1E5pZ7T8rDL6dHT7wW4",
  "key35": "3KPCSpMj2cr2TW1vZtzn6YpDrnbkdaZv29f5dWevgvPQYA7wNC9LAo2jxC7Fgw7KGpG3zvXMobYsFAMLVmQmnpHe",
  "key36": "4Ca4YJxqzi2xuwsAXhBuhTi3NGNDQCrt41SRznHwVAUyoEpKXabfZ3QHSa5L4TPggcSfic4sEAQ7gtFazHQdbW2Q",
  "key37": "4LfLyKZy78ogeDU1PjD1jzmMS5gmP5Gvf9TZ27Fg3473yRAVEHQzb6FEYAkhz5XJxzxRAbQdUJVUpQkEfzPkiscj",
  "key38": "ZA1qmAi9vDiiJQUtAi1WiyG1FhuEcfoKtFmqkNN7vQM2NzXVupRmNSmDvshpJaoKxeDbucRojfsEsJqaqUf45Dp",
  "key39": "3VG5TkeqJVF1CYF3b2EY3hRF4heTzKzUwSYQXp3DjnCBUhhBpCNYjQwQGiktBXGSUyEHCJk6o7SH9fuMuHJGVWbV",
  "key40": "4wrUbdW3ZHNzG6TeJMFQLr2Z9WAaMBpcgdY94UwUT78BwfWs4mr6FghH72epMotWTAnYJRCrQ7J1oif5kKGWXQJD",
  "key41": "2vnhHLh7raFBJMoEzMfQcKYKpu8roD4Pt673Zgr9tAbFxRKJnRrj34fPcfyoQCG4hmBj33CaUmpTazxZsCAGg22P"
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
