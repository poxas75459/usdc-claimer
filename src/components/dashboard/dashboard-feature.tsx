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
    "ki9LijXiVj55cboWfWh6kFXRuCJAHfJcUHsFHVvsBmXxAnc4aDyNQ1TPmsi761ZVkegQh18v4UtL88gLFEYt9vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4es1HNwhsVyFQKP2RP7wPAiLQsvaQkUhsU7eG7uMXragsyqm1uq9yBHjMMdMju4BT9cvQGF6UHu8rjUrPGFsEtCU",
  "key1": "5ZTZfKHtVCLqTxXqP4z3eChEe5xpRD3uYyXHHvMT9deyWw2uaMYwJ8zDch8Q86cg6aheXtB7N1AxJBoWpeBTwBAS",
  "key2": "4ryup5HGHWqsbm8YBvWM6CaZgyiU6fAL9NNaUv1xK7wT2xf2zQcufYL1xAQDfgXf7QZyBWJ9QivgkdDBAK65otB1",
  "key3": "KoQgtMTf2HqqaH2rRuPdjX52httQ3rF3iAB2SJeLovAEoSb1gtVMeNGcbtb8gepoLbzzBFjC8yxQhpyUq62aXg3",
  "key4": "5SKrYCJGu7JxExngsdMyyDsPUJphJzomJn8sH6UuweHSgo1PoE9EGDSVgxFsX47z1Awwhhxt9NkoVjsYt9wuayyE",
  "key5": "47bbfHs4cPQme6E8PWpSqyMd9SGduadxabC1B8xzuuYLENLdQxQErSCTycD3jGGaJoW5z773KryoKq7jySSDEKC3",
  "key6": "276Dmno1MG1xTyws3YB1beiWcFbEvy7ma79AmEEYhVkjKedainkreSbrpovfTmCXNMuEoRbiaa9jR6DbDExtWo5J",
  "key7": "4PrfJCUjCrW14xKyBirFAa6UaPbH2ENncHq8xVqTYfXmHWRUJcpCsG9PvZGWUUvHThLVvDq7SHWD6jsMPrdNjRwn",
  "key8": "4atHQTVkqLkudRas1v6KqacJ2DHo3N7pKj5jbGgUpeD8irUfeDHqCV8FADSCmEGtUSzYrLsB37EWvycGhkmA1pwu",
  "key9": "5xRF5c4fL5StH5XQtqscqaPnEPh8R47aQvwox557oNZmWGfS3NfpEhHY9kjqJJBcn5aHXiztvJCf8dEqABHVBT9",
  "key10": "4htGtFhTazXmWWdhy9dYFdgMAqcrdsL2QYNSu1PdoVCo7Eqi3YVWh9u2V3L9m3ALnFATvcdk9DLCghz3LbP4hMvY",
  "key11": "3iNtdFpW6iQqZTy3gpWz5gAGeBiMpaXvdp4aeTQvzNCwGnqzBkQYkPgSZ2LTw3vD1HwTq3UsZ7ZN9AqsfhsDTGPQ",
  "key12": "53nVsP8zSJY2c2e6XugrwNxhsJJVey8QhCMU68epPCjbHdknNmbdta1WpH5UwGrRrY4b8sDtv1khCY9WNoChrpZf",
  "key13": "HsF45ugiodgSetMLGfqBMZM3MC24DUYVYtmM2eePJKppxGzG7VTKEsjQbwQvvwCT3MwKTTgZcRbfnDPy1Zj5dtf",
  "key14": "3bs4fftJXPFdN9BmKu3xn4BVwEi4jYuV5V3okutpTXSutNDb8msBmWdXK5JSZqjgoMtTgk559BFNRK3F8NXK99kj",
  "key15": "45fmX3xFabeRdRn86Ej9LiLNsxrE1ums9QLQWR1mzkLroozrKcKUvYby57BEVoeXrcTqEumPpbTjEfTqpXzdYUZj",
  "key16": "3R3Xa5RdCdnGNE97BK4NGYsuY75FrECzaHzdZk6U7MLBUSBKbTr7HnKFAB7o3TE2iCkqipqNrrwPdMEu4Zayaswy",
  "key17": "5mMeRLvfWU12kvGqFuWA4xSpKBnJFyWEFNkjfME6Kaozh8HtVGetMzgZ2u4c5hRp2gjzySoXk1nBG6QZJ7MEdXek",
  "key18": "3tX5R354QK8Jm6VS7DrkT1hPAhukzUzrCErTL3HVZ2J2CT9nCQfJ5xtWhQtqtA9CJyU2Y66AF8c485qnNgkKjNM7",
  "key19": "zdcNP8BA5acdLkk4jLkxiZX86NiDhcuYze45uykwD9MoF8sY5xENhhxsC8V3qq3RQZKy5LtnuszPHnHEHsu3M6v",
  "key20": "DysFApa2P3PGDHQH1EFjHLZLtmSQPvvGt9WZZ1ps4ssX8kCfqvyJZoLWkdQo8GXta4WhqmiWUM39PLm1MzVNTqY",
  "key21": "5WTevYLAUiPKdeVT539L2Gd4rmZ6foZthGLq48vJTj7YAYJNp6AuQexzb7F982kspKUE39ZspFGCq689XR3GqE4t",
  "key22": "3vWFDoSgDti6HQNG5TyUkRc1hjxFV2oQU8JmsNThM6J9V7XS2S6J8VRZ4xGsjNPq1nTEG444XGaqYHUcXRNYRMpF",
  "key23": "62AiznLwZcw74kL6Qv2VRnHHUi5XmwFz3LhjjfRJHoohzbGuuafEgvt4XjraWxfvKFH8DAizYd24E5LBHwWhYvye",
  "key24": "2fkwkvAwfJRP5MSrxscibiJVHYJS7W6gPmrG5G96MdQZsB1P4JaP4MEk8kggHBjVNV99A2R3BF1EqyMPuhHkeX5g",
  "key25": "3z9aiswnv6EjWaY7Vu5kyCHuFWDJFS2aH6zTowoEqe5iM4FdTh23pfWDE9vBCh7yXjs1hkNV55uqE18WNz9yMj62",
  "key26": "2oTgp4kcsWhfF2AruxfqqjquoKSGNVC34NnU1mNQBgty87cxEfaSiSf2XjHfMQodYUyZbXLfXPuTL7NERn5bMWJf",
  "key27": "5xavuvVUCa7hMjwDavMconP8UadS8cJsRTWn23zXMoUnd2Xb6AmvGdvWfXSYwC5kBafJEzEKsLHb2UADAJdGLGtZ",
  "key28": "3X5or9rQgZ1sWL6HdWajJQQeQ8eimsoySB11bJjRYcMU2tB4q8MaaZY7ZRPuq15NaAkr65TpSDXyXNemaCk1mC1C",
  "key29": "4u5ch9WPKeam5HNTYoNDpbBZvGVwyRSRr3invTD9UqkL1y9ZapBE96da48ntwsXu2hpS7AnS2m9UgmFy7VDHp9Am",
  "key30": "2ffPmfgB33ZgBYYPqLrwX6tHahwTbNXXe1GR9iVBrHmtUQUSNs4UKrVARvPJkSoBqkqi7grf8nedMwCYmW8pV57V",
  "key31": "zqUX24siWTVJ9MgK7zmqDwqoh5E5168MwsYUdT2FUPHopZXjQWY8s67DduhTiXn8c3taACWLvMp18KQb6k3bxf3",
  "key32": "57tjaP56YarwELhWtLGNTfe3pXUgPhK85R9WFm238mABickzSXvzqz6VeUSYCJo6J9hbKR3AsP1YfWWcPBJAiX35",
  "key33": "21RNhLkxLWKGvTfKJeF6cWmNARtE94Mt8qZEH5VeEh63WjLzfuLKe36mbGbYpHTCWz7anwpSxNp3MP7ZcrWi9mjP",
  "key34": "5k4NLNyeKFhr8wTAVqEyuWoniepbomqBoob1Wh5HVnpWp1rb3xZh7dhz2LBATkLpN84nGxjfU11BQB8r4KiCUNv6"
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
