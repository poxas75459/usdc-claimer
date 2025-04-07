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
    "2kAG1QxG5pKptU9aSwp8pQ4BNJoMZFRe8WctT5VCsdwxoMHdFfNTAchyVUDen8aaGYxPx66Qzxkz11rksQxHx4Bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNyrj18FAtqU6fSpAGVG8FUfQR1rtC8ZBBFUEV1vpMRzHY7CF8BoMewLnmsqhChvK6CwNtVdmeuEys8fmFqv9r7",
  "key1": "4HUTXAo2NvjNQ3d3eXfi7dG2kBKKANK8T6Vbx6mtqZsp5GdcfXckp9vEodZ1oaYaRdERJhojE9wbM5EQxiU67yib",
  "key2": "4KCeebedz2x7R1PhNdah99PYHNfMkUtpNSt21k9AuknErGm6kU71Po6vpeNV35H1AuRsS4Q3vihGdAAa3iTmyone",
  "key3": "3e7Tb7SCXbpnqCF7uQpcBaJPbm952U9kVGaQwHi2LJzC99mLtwQombjiAPvXT5baesXNpQv2M71dyygsRFMUHGa",
  "key4": "62NsnQtvGUt2BE7EXqmhY72T9m86nJ25atrddqV1Gswx2Tn7DNeeYF2bN29P4eRXPqajwkD6BTwSQnio2aDGBjP8",
  "key5": "5yjVZPrusPtYNi22MULRydVZt4bGXqQvudHnpqfCnZiNgz6A5Ygzf37iFhXNcQxeiQiYb4jPaPq8nvpqZscyEJdS",
  "key6": "48hVzDBrNodCFVCKHLhVgBk3vDYfxjDjMjVyYGwaKmJ91S8JvmGjaiLzsdKrQjiyD3JJiC6c5u8ccmmN6gGFudZe",
  "key7": "5voxhiSE24HT1cNYDGjXER4hz48x7EdDxTdLMomfsXaha5WPtNrnpb8PkkojY8VUxK75dg5ARZXpBgc33AkGx74u",
  "key8": "34z2hRuSVwtNcJudWrbwLRonRXgoaa1M1deQvogFB6H7mDmu9YwQpongGbVZWjvQhsGucco5r5BPPKWvCCWQgAzK",
  "key9": "4pjZYmyMHM6hf7rmmoCedQ63HRN8bHNg7tr3iaDELfhC6ZCxTU4ysUsrknLeK2gL5EtXE1Tim3PWviJDyzCUcabD",
  "key10": "J4K6Au8xLrKDtAHxn3hweSHqH6miFn6L7fJzh2j5EnB2Z6iE2c7u7c7G5vatafDQWm6nJHqN9PaXHzHAKUooW6r",
  "key11": "5AHZvD6NPsEjG6wpYcgc7NhUZqNNmR8tA2gaN2JbWsYjngPqMecmzg3MEWvZ4FMY5gdMc2Lz8bsNMCvhyRKLqxSv",
  "key12": "36ZMXuHrWo53N5sJjMjWVJ2JtZWeK8P2Yp4Q2REFmDnL8pyyt2SgXwG5i6jiZnw99Q6zzAegkDkDdAeWj2B5Rduz",
  "key13": "5QAD3LsvFSyhEAEv7DyLdfTQTWQ2tMBFsNVcAP8LG1KpXaL5TcMwGFNmEeMhRhJbpfcZ1uZjoh8Ek42y9Szuay5h",
  "key14": "672e8EVQ89Pbck7txMzumqWe7eKREBxAr366GDWqsiZeULSPq5hpfmEk3B4w5KncEJgR7YQkBxieKYZGbLQc3E8T",
  "key15": "3bzDecE5s22rPCn3E3Zhe28neiTDCNJA3PWuSE9ECaqrgh2qNycsegHWgLph28stbz5sDADDTvcWn49p9AfPQcNi",
  "key16": "54vi4eGHeegoY6DrzRwMa31mePz4sM9UZHLusebVHF3XgBgiyUfjfwjDnEQoWekeCFkVwTnNz6wPzMRUZKSJn4UJ",
  "key17": "5QaJGdSomcAr3qTL1STmjkTKNcYw4TwgMeezEpYDD6RVda6UkUvuDHtg7bB6F1SUxKtwgswmMBhvyeUsQ3SJ1ZEy",
  "key18": "21aStML2Zi7JyxNpxumeE6m61wSYvt38HiRRqZEm3KyA4a3hBJmZ2RtuvmiU4fhmnsvhdFQJZNNE5jXq7d6nUtem",
  "key19": "4zdJNmjUb5CpgawYfKji2fe7HD797uP5uqPj7bXxNWa4rgGAjepNZHEi68bK6KjkYDjBWsbFcfmHVmFCjfcxeD4f",
  "key20": "4qbKVf8EqdWBKWRZLeNu2JTbkgRJiUgv9KCEbbppAqjwcNA1Pbzy9NSszCqBQ8zeMnVodUp8tiE4hfy9qUSAiJ3c",
  "key21": "3Hh7bQHx9MzdwvodHQAWVWb3tX9DiNYBbY5SjCxzapQJsN28eJiUFfdTMg9E3aPUeUVaakMig3EZr7a77Hx1jVQQ",
  "key22": "4EUtwTmFHGJKc1pTna2vEQf3NpRYN7VAfjTCYSzk3GCUT69reYrNkgAmBYdMooFdSWKfQ9CaZzpXvE1Y4YNdgo5Y",
  "key23": "q51WchLEFYpNmL9N9rDLga3FYbWC1wU5PASUv3DnHUQgRKL2f4rTbJ7kPScxrWJfbkzcB3QEvrXuqWeSWbvd3wz",
  "key24": "CnXf4rQwffWHtw1wvEQjiGxhakVe4aTP3RM5fJb79CEST5AEHhXp7ezQZpMLGHemMf83prwMX6oV3bmeqbeN9w9",
  "key25": "3QbKYa7dvtekt4yVWJBkvKU7HfaXn8WtBbt5jpoJtk3CQgMqMSNtByV59ULHx9jQq888jRPPj4MEP3AstYionXGr",
  "key26": "sWm23qdNLgGg47mbwZrEmKKeULUbkjSVywNUieysEcoqHShiv54R4AoZv8ak6x119QXrvuNKqjtDboQTBAE5oej",
  "key27": "3njzj3CHbqRtsbUyR8u1KgUbuURXru8gGfgMKpxUVnj2eRC6FEugxo2gHrYdoiEh64ik1x3m13QxyUtRNeqoTNVW",
  "key28": "vNEGSSuRXNr1HEyZVSeGoGVubkWYmnxaMWm5bCr9da8YJ21tcttmt2rhHNyfi8g74opm4hgP2G4HnAVNaBEj2UH",
  "key29": "4PfWTu8yRXbL7CjdwbyHEndsBH74s67SiiTnD3xp433cngmeaLXbpsXSDnsXirfiU4wEPRWpR1ZPqyn8BaNxJZmY",
  "key30": "3RRMHvjwQ4Yaad8vapgCQTRw5cbHkyp3muvNpPhmTxZZCXZ7MUR3X8tpnzKFed2KvcuweMBX1TwyVX9q4DhhtqG1",
  "key31": "4qpbzoabWp9d6uphj12tZBdhkUhh7qN4DjyHRWCUJRnaFaSfJfXRPef1eBJDb5aspWebEh1KaKgZiKoftruWozv",
  "key32": "5ajR53szcjDREvcsRzVxe3fn5AdT3MBxqPA4EhXAoq6GLQj2WVm97WJa5C9Uer8nwVBrpNFS2LBPyw2U4tYwpXbH",
  "key33": "56go7Hyt7jL26Wg7prLRBYKqF5VyfXbUq647hMXmHutEJMWQL7VqJB1kpf461qaiezxgSMmCexDqYJTP1ecNKRtF",
  "key34": "3sQDXhPS73RtTfBgWpVsVU1zd6UYrbtjfGFBZj2DAv5kzjRZZ4XazjiasfuE9TUGdEWETrkCkfhmbT3Z12noWcwQ",
  "key35": "gGuLdg2L2Nb39t5RT1mFuyZnCuiM39CnFwr22DpX63tZoN6VXhGJHUP5EdwVciLen9Rqt7vGsqfp7zChLbRLiup",
  "key36": "4P7rmHfQEBP5rywk2z1DihYJicVw1BcT16SLh1hmPkdPyQJcvuPNZCjKCjXGSmFwEyeoghxqskhnGPy9fH8bvx4q",
  "key37": "VipopGXpkMbPhAm2EzqP671XsgQWewxXe7m1gi7rd8F7kid594VXFX9HTbmjskXzNx9LR5GPXapBAhLsznvzU1h",
  "key38": "2Aaxoa4mDMEd6a9h82UHTzoJxCvvEEpavoR8mc7KdydRwmjJ667ChMPEdLzLbjZbBihMQTTtvfaKY8tt6Yu7D7gb",
  "key39": "64GEpY8ATzqvF9Vj5243x6BadzUbecPUi9xKcPAFmAEhVq1qWg6JE7j6LzRn5s7AoYN8puFjsg9b1omVVLcRseGW",
  "key40": "49R6tj6inspMoBtxhGHP55YZPtZnGPsgrLLVJBQMb9WwZ1UnRoFr1LiMKq69NxnqiwehDETrBMp39eJgmgH1W7Yg",
  "key41": "4tKHjDL8Pv8QSK3A2pdqAifHyWGz1QMekkerC3GYnNAYfJ82oe53hgpGEYQ8wAHvey8e1aTiJEgcp4z8BtCM1wKw",
  "key42": "WgDiQYWjxj4z4d4MQumyo6XWh8nAr1vas9egMgeKBxXfs9Si6Vo5c1CbnyJ8qp1r8UJnRWdYk29iYuxHbnDYH8g",
  "key43": "rBWaeqKAYgNhRhSWg6PzwDUSkFDFs7p1XBdGpeQRGM32r5GotWX446gEGRr2KyTKJrG6kZ71xUn6SGApSHTTky8"
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
