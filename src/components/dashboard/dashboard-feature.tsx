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
    "unqEHwYS2cEHdrogGMALc1TjkFRQEVzsJrujg4g5BhhHte7uEJPL3UnFD1bfrggRitgDEQthUJwW44NKC596CH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuuqKfcgGByvmGzeBQBSu7Hh9RqfLt36B5wVaqxhimnqydLCxsQByu5cN5GHz3gu9CbzscqdKfLrMusH53d7d1N",
  "key1": "QaSXhLmpkEzPkn34kvA6epufc1PWeHFN4CTzjggvJ3J9he4U3jyz6WTTK7xjfApjjSdAzAEY1du8UuT6NELSjCZ",
  "key2": "fs1qZtMSNstgr13SSM22cLxRia3iEknkP4Y5VhaasVQ3JgRGEfaA6PPAU1PD3apPtBSgDbpaazPYUcL4a1HhpDs",
  "key3": "37zBQKCJYs4s2WkA1wdfWRye6oKwbjeqFnVWfnsyPqF6pKDc8G87e9vK1z4EhRvdrqUwAJVgrWvjFh5RtHPvZndh",
  "key4": "2VYp7YKeSfP1kMfsbFJzhd6o1yjGZEoFETTda8AUkCZMg5UsuEBPCv5FQq7Lpm2Zn4N5Qv3UWw3Z9JTt2tRgDzAN",
  "key5": "3BbeUcRBh8Uv8kH5BdkVS72dsgtcN5n2mAttrudRYBuj7dw9SHczGPsxV2qa9Nx66WdFRKVpaYEYYV7jD7X1FGU",
  "key6": "4iYpgdsHRkHKM4UeLQiTeBcP1NAisxFCjdp5thQCr3ceyi8ka9MpGXThYNq7apBEjcEut37bcKbvkBCPno1yMyrW",
  "key7": "3dajZtM34LKyaGHjhqxRgQ9KjFEb5pWmPWqHyeEBM9Cpj3FwD5T15FALjqdMwKZG5hgf4XSJfRLFYp72QUGgZbZC",
  "key8": "4Wsorbd6xaczVcvaeayqt4ipRhma5UrFQ8XpMG9PvXpHKpYJxBw1idpNyA4GmPQnGs1wuPgFsZrP3dVjVaPYnkGM",
  "key9": "3AZV597qnB2YReNBBLVEAC7LKKNX351MP8M7oEk5kAqVwzqyRAyuvn249bYvNjS4xnzbfC7Nqwe9ZyJPi91oRBjA",
  "key10": "3oPNSzMwZTSjt5FyNbRARtncQG3Kf6hUvuRT9HcDrdY28nnL7zAvqiTrqSZZy9dE9oKVADxesMWAvrh344KJLt4x",
  "key11": "5xS86Ff8Cfbb3WSpKSPmTztCueNciWXxLDbUYY9iTeygRfoPLrnxuxphmbU3tN1W954arojFjTuxP6iRmLdCjzkb",
  "key12": "4q1DvERwuSNcxihckfrjEbMnzb1qvRbsUFJEm8SiPR4pr2Eib9an7FiyZJCWu6H25yU1x1SnMShVncMb6p6SgZM3",
  "key13": "64iRUrPZDpmYK3ewfQH3LUvXHrqhbb4qZhvf9DB3yB1yKgdPkoBvdiV87NjGAxKE7CSxFMch45W9uLkBpQ1W5gZz",
  "key14": "9QvzC7JEvWWTd62kn7bZQod8qRJQex2vBv6DM6TLXwaGirYjz1DoRgti6mwvqoEhcL69723bZZmmyVSrf41Ta2a",
  "key15": "3uFg54UzqCTdxPKZLt7SLDvJ57HxqyVtX81hYYRnGTPVSYHKiw6WWXsUPvHcoW7VFFS2gLCHKk5Qb1WpYs6HKrbV",
  "key16": "31ViaVqMt97VLqkkXTBKJJ9bn5JaC7dqDEj64oEgKhRoguVxtL1xk4M9geiADqFFMeodcibiVta3vwK3F3fAoAeG",
  "key17": "47A43sLLj1mpuPmg1Z2cjYspAe4fmfbrdgopTkB9wGUFZF41i1A8TNHTHrGEvFT9hnGkHdQQWg7GUF72VDCdVXsT",
  "key18": "4pqBqnKZFva9oh8E3R1JkDZQhhbrGxGnyx6HJNCPMkscn7cSNCtSixLo2F39Wpdu3FcfpkbcHqvu416XNaNJc6HX",
  "key19": "3Uizff5z3mJ5H88uzXwJaq4kqejWK8XAQy1QizHnuqhjDf3RRjV8W56n2bo2PAscXVdESf1LesdcEhxZczPqM1Jd",
  "key20": "4dvgKxhoHSxmoK2wG7aMQ77V5pb7f94g8ogMkmJiArAe6WUDvUxxdvWXfqjWbHKvJx9ZTDJdr5WjxRk6vvHyzrCN",
  "key21": "4RWDqsoi4peipDvVbtk6SfUEu64i6aLjjvS7FRghM7JG8ZVdna9BvVuE3xQtsuewZaCLEv4iNUrAoU1pFZeP4Qyr",
  "key22": "3MwxU4SbZAJSAXJAVpo7AG8ekM4ePzVCHnB1iAQ5vyPdM4667fwXhrx5KyJCCe65h4TJF76yErthCYFoWQi8tZpH",
  "key23": "QNDb1cnB56eWC4DZbybxZNzWcHXML7c9rcTep6YnRrnaXEfQuuUQLqwtQHTKqpQsnLmt3uFVUSWra5BBhQ1zCen",
  "key24": "2YiLZog4m1mWtZWWnte3E5Cadmn91Wz8JAvZdstVRWdjQNh4B9a1eJBL3fVTuaHgSHprj4DyKvZouZPqK9MFuzc",
  "key25": "2bfEmAZWzVvrFxYUFr3k1Jb6pznMBYBJ6KaRLZMu8ur4SEUCBKyD9jvyLGVDFxfTNxbZwgVfqN9Tjn4Qp2iJgcbT",
  "key26": "4Um8L7WnQcavCBrhQWuso2JwpZ6zmmGirTdAjGSkD4Ky5P8LUDttzY43fnNdbeCMTbCxmNBg6zFq5vJVHK5L5LPM",
  "key27": "4unC9sH7Jde5TABH9RvGZnRC15ggHiUGYr5BZPZrYNtfAE2zifcG9rob3J7EzQHxAQTFLChJht3EWm54vj9bdmb1",
  "key28": "AsyCsLd9qeYtoFnXB3ZRj4BVMZwa8t28NXBgccmGLJy2rZD1b991KjrSstgBArS8Rgibc3WL7KyUgFW76Euxgeh",
  "key29": "2x2ESqDCU2RX2vmxGX9aeM2K6P1VEzws35MWy2unX6Z38zKR1H4pcSarj7VeVFwy9iW9tYVgVQTwKdrUzHVxG8Rc",
  "key30": "2sVxaC8dn5fxgMfSVUTvPSR4ukK2TUnLQHthR7uqhHKVNtGbXUWJ12vmPgBLc4bkP9fpQbJ3wWunhM1kMgjnnypo",
  "key31": "2at1opYrjJuSUFQkeyuYMrjKDNmVU3c2P63RjUXbeCnjHzxhHiLD54MvEKTX7YxNA2pCQMEeki9BdCR6m2RdUGAt",
  "key32": "4LGUsEugzND3Kirf9tPXNhmeKv3eVYvymAHrQqEQ8rqJeS9yGrmkSM9icyJRGcUJ5xc9rczXQpQz3w7UoFTWLTP3",
  "key33": "42UsjTVvEi9gDmZwDeknWvWvaHKxxG8oQ1dWwGVDeHW5GCcm1v4cd4t4JxfU9o4vvf8ZJaBYajK1zzweHMpRJA63",
  "key34": "3ZDNqdLS1TpdRDoBR2ndyhpYJk35xnSJFPoZaN3wumNpz2rCkR9EzwSp9s5rgDQr2987kMY6DAvTCQb81osaWotX",
  "key35": "441ctcK39sq43ZCg7fuQbqDBPd7s9RdAdjVnr5rcvFxxxUyPMF3FKNWLikdnXtgQiyKebSdCBErneyaY3SpYDDad",
  "key36": "3zFFuyYbDz7MxtKMyyzf9gfXP1p8qF9Pnu5a2oiMyesJVFdPUszzGR4ptGEfYw5pu2izYGL14CWzQYUVg6cnH9x8",
  "key37": "2KFNjfogtpxturYJzaBZv8MZXg3UyFamy8E8N6FFvF4oXTHWR2QozSbuLuuLP869tJuAkgpjsxCpB3BpeVFjEANW",
  "key38": "5haxUonhWq5hRCUBpdtGdTtGPuaHdd6cKKsePyeS54C58h6NdvV7mZuUqU3uhg4katojXRqUfYkj2TCMgk9Fh888",
  "key39": "4tZo46fkipnwXohQAT8saoePg6TLLbYrGdZtA49G2RToXTi77LZbnn2rmkHohtBzYrLrNvTp2GGfxEYxsiLLYm9E",
  "key40": "PJCXQxUJgZNSSEkbLb7drWT5QSTS6F1q1o53Ss5u3RMV3f8KsyXBwS6RnMB4A7jVGPxCogbe3Ex9XYgjLr7qNvL",
  "key41": "uHWzkGEju4YCPrn6Vrxzgia6j1dFCwXiWntDwLtRrbsroawTynXear9MH5qpaKTPS94JD3L7UyBa3via4PJtGM2"
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
