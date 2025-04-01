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
    "5Rv9XBaeJoyMmx4enAJuGTLEokWHrFYTLwQXTo7PSonaCfq1fqqtZkQCffj2DHYXEVdrdWaswaZbYnnTnrc7RbQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZG3vt9vmS3T3HGJUy8JDkTUyWFwb2r6eSDHoWgcupJQFbghhUohUW7eFRTgE1WhF5YuHNFMotXvVjDrkfYEjeW",
  "key1": "3pgMzfULJMcrjtb3ByYQUMiHsW71cq9vwTetxxGahZ1QVkUTdv3hbKjMW8HXCdM82KZVa1SAW8Ga824S72LAK3xH",
  "key2": "67Lcg7H1tqtDHSrHfnxZesSgJj7xMBf4HPcPdhSokFB8qKM6voYoXqKRR6uN1j37ncuC1RhW2bGc5NeLuzP1k3hr",
  "key3": "t8L9dnh8Sq1tEbfTcbq9QWs6cjZvXR3WP1rby6mFgWUbMMTpdLGb3gdvSfyZmQRUvUVkXhcgXXDXDJUSV8XHcKG",
  "key4": "3UkXirCXfW6vCuj66Emuc2gD4kmrpf2MDY9LcSDDviJmnmLawVHbMArFqkRoWHh1vxfrmfok4b3M3g6DuSNrRPcn",
  "key5": "4AAXdghGnYyHnSQoDSa6GjDrZVkfLfAcdi8w28qYTv2NYw6rLYDszbMDjwijgMBKHZ2qwrntnBjZp9RFTPjL1WtL",
  "key6": "33cYQVjqV5UBqSCr4wr6aF6FL6PE9tEiSNPg523w7UKhvvgdj1DWuQRmqsRytNogaxqo4BbkkWjASRpJy6hM1U8s",
  "key7": "WGmw9P9z7UxA3XxT3rdwpTETegtwDgbngX8ck3poSfrBDacNKqJ1GbVTZ21Zy3moy5revWUA7zBmVoSoNuAgXcB",
  "key8": "4R6JvoCy3bjnkmVc34gqv7rnQTu1GkikuADv8UhVxUfkzyoZ8VmgWMF2Aykx4nasWdJ8WEESecGufJ4W6K5QtzUD",
  "key9": "5Npv8Tw3fLozEuLUdisz5qr6nKKg8FRcYrRSpbEuj51FU38w7cxDWMvonF2EVU8W3WuvyEAY7kWRs8gwfAybLvWY",
  "key10": "4rYeWeaM6Ez2gFRuf9FuP346etBfrJVxZwZGGDHEtNiuf8oZ4pHFdM1dQGXDTYkkNH6jdgu8j4WEm2STFTzTQCc6",
  "key11": "2pJJqEUi4DD4LjuvsSFGd6wHBbXikH2Pgq9o6N5Vt11Kkoqq53EFvARx29detT25Qi7Dm3ncDNPp1gwVn5jSr8Ap",
  "key12": "QTCwjWfwvr6KgJXnXJoPm7Zfjesa7HGS2PoojHvn3uyq4BDD6avFntoqQCgWqyj35YNUmM3qdcYswKXWRCjTAE9",
  "key13": "4g3LDv993ZUyQaoMowhyxXm9NrG4iyoyjZshvKR1bnwJPpUjMZifLxUB3KZq5mKsnkLSRDJ3mhN1HRwXpWvM4Jn1",
  "key14": "hLGP2Uhd98f8MhQqnQQTn8Bwpk7hLktUDhZNfVtxQczMcLVnmeeU2ftcVv7m5vtxLQvZYFPe5qKAxdkzpZCw3Yx",
  "key15": "2yX3TtvQngdxvsW9tet51LbwgG6yHqKKL3K8MADB73HD63qYo3STXFBU6UAb9wrN8pozk8Ztoscqtbb6PtxMs5KV",
  "key16": "QqpZgNubmLr2KGV23G7QszxXZgykLJGA7tR5eBseg3SQRSioMjLCPDs3cTTPeJkWyDQEaB8J8zzzpgjDZXgaGBV",
  "key17": "4ux8uXsGhuBKBZsC3YUzRRMMQkszyyauVa7eMBcWpsMAK82ZnxPBYbWMwcd5fYdh5pTPJ5ivtWdS1YsP7r321HVX",
  "key18": "2deztyJQikAdPDsYPGevLzv84mhV9oM2Eg3mCTeDSHM4PdhFoQG3dDCFaAnRj1JTHnFesdS4bxiqAmYkgkBJ5M5e",
  "key19": "2GLv8azGSoumHpKiLrbVbeLEqLoDSy1cnWdPCxBVRJP4osMNgr22NqZUaWcegbvWsXkCXTm2ecTBKrii7PqspKBj",
  "key20": "55h3j1dXuWrPzEchkAEz11Wa6SdzRgW6Foq1t8zir9ekZvJ1bNqwqjRPXBJvM5AoHpwDMxGGbLoB5NBGnx974bRj",
  "key21": "4ccJbVJssBTPFxU6RcW1rjDGz4WNk13eyKsGBBC4TSCwgYmUqoAP76xrxUypBP94CCSkQhbidKVp1MvJTzVuPCYw",
  "key22": "3gjEMesRazAseGjjfiSz9svLM9zSXQL8wrwosS1bj7q19wXSicW4QYv5J5eyz2wF7wp7b6WUyxz5ouH86kbweiiR",
  "key23": "NxSQzhtUtGsQf8jehrJpzA7teVes7FZPuCWboETDdsyxu2dKWb79vT7hDN7FCWNL2shAQkdYzHXDkwoC347CMzn",
  "key24": "2RGQ4Ljh457imTnqh2gwCuoMRg8Bu6J3dEBTFDkPM4UdhZeg1zffJe17MgqXVKfWNq6xUhcifpF5sZvhEB4ZyJ3E",
  "key25": "5T5TDcpJURt9toSA2ZYY7Ad1Sj5qKsihKjFLA26DL35YqUpj6J2xqXxtCmxMthnNjRjLnW5fccEMVEgKhHUbMvzy",
  "key26": "2kYAyJ2WsB6ysWfiZG8AnnjXNQ1jvMNpcLumnmwYpeP7Hp4LbTGDu547MboAGFpEkWvnKWD8L4T4XJpC4Asu381Y",
  "key27": "2PcaVFxcixWyPonfnennBUCDpR64N6HJ7K5A1H9dh2gB98TnE2gh75Bk2quQALqcV8EC7sExgebpQrq6evZ8yAge",
  "key28": "5u7EBuby5dRTkwWQGQDKQB9VRdwq5UNG6VixW2WxjZ9C62HPRLaX1Qm4UdFACZheTEkWcQvF9MexkpYrukwnuZKQ",
  "key29": "5pUXdiKNFt8sscX8vvSN7mbj37B14KKy2eaX6EYCVjqUgxUFBvQrarGNtf2C2h2wj7bRJAxpjZydxESBbUcBVTZy",
  "key30": "5DKpD1N91KQiUKQDZdzNQCt9M11y6cRDzAZJmiQgf1x3zztWF58zDpGD6XutrNb4SHBmydYwbXDfDLtwPNQnahv6",
  "key31": "29bUeY2TJ2CtEDcmj2dQ5uUUnpRd5BoUo5QGbhG9XE1vWFm8881e7vjWvz7G4ihck8F6TNRcyMiqTn3JSYiZbKiK",
  "key32": "k7n5FQMq9kKP5CCgTMcen97ZWds5tjU1gkZ5x1s6ijYG223y2xeS6tZMQpp6aeWFrJxhZKxs5eBoC4YUuBUg7Zq",
  "key33": "2gSaz4WCXnMxVHPNFWphkoJ2bwjhPiTiZKBZdgfzaYANAXukG2qS52Qowr4g2oR3o1bnfJr7XaC5anJ8oVdq7Ggj",
  "key34": "5WRoYUXiahuiY2EDsSEsriSwPNeV3BsX9qtwc6jRcPxEokRVHmJEMCU41ye2zKXQyDMD6p9Bgza3KBYp57jL6K9g",
  "key35": "jFzUPgKDui6Mxd1ktgWmgsySsoZ1tCCwJ7EGqjLsgtbNLkFqtSaU2FgGfV3NkW1eZzFL1j6MYR8VzHvBmDCYJqw",
  "key36": "63EhJFk8vbZbtT2skpmSTUfJ12UUz2rhJCc5Pgqa56fP1ZHp3qbp4PDXVRZpBLBLuwPixsdk47f347pY6deM1wx2",
  "key37": "5sCzzeQJ7iHQpvi1DJuVBYPDgMAwHtwS1TVWGY89EHpPQ6t4UresECftreYLQQYg6EytSMArToQzuZfqgszLFD45",
  "key38": "2CN32G7btBsrW729RRJ24bpGZuGDeDhKW9fKJykCP5NyeBStxwQWUdSCUpfjdMNxZJiwe48PGBUkmvaDKAyGGR6K"
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
