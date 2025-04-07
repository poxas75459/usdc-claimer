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
    "5buP7KZiNZ5X3ag2b4YLvBNU7DpJXTNaJVnNEkn3d8sWavs34RXZkBZ7eikzKLuVkivtjBWKFUrHp6ZCVY78dTF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPopfWPkckAJq5xHwpe6KGy3BKdGaqPMSUjSATRwM7egzRb2qC96KaozkcXHwvELRBxRJjvjCPScSA7CShiE4G4",
  "key1": "415hTzsSDqXrXTYLU5Xn695VhLmTEZsd2Rw14F3x527ZtMc6u869peL8boA2KB5ETtXwvBRPbqMVDaxYDQ7zG6Zw",
  "key2": "33sdtk3C16GVVWsLgWWPsRyV4ENxgTTCQDsia5TpeF6Sy2fJk373wx51QDszqEcdcS2NMoEPgSnnEmJEcrFBGjbS",
  "key3": "3meDv4LWVAjbetfzpdA31vmJdv86fZRuEKkmunqhX1ALdJMes6VXGyNwf8wfXKGuKwSxeWuJy3fwc2ZKcS14EBTG",
  "key4": "21JJ9uREHr2nvUeFQoW9NXKYms4wHynXomA2msv52DRrukpFX62B7UqcqxHopmS5pcUXSb15XB8JUF4f3tm3NXJw",
  "key5": "5audVMtp3UXm6RzgFaNn9CYL96tNUiFSrwzDXzJKfddQrXo5NJEGkH4J7Ye6CYfhm4pBKYXt1YSdr7vNCUtu1bBG",
  "key6": "2qLs2ryMCxZaqMbiPWRqJrgtdxWPXKogLgrUC9Z48YUWHy6zy5bRKV3CcotdExA4RLMLtePL7zoFoxenxbGQJfxL",
  "key7": "SdZGo4s1kVjGTXKopFtZQcEpwjJgR44enmjkoEUKRvsTDf2ftPXYAG5bEFXxfFSSDo6sCdvJ31hACiZshXtCVh7",
  "key8": "2V7pxC5GEcaVL3emqgsdEgkFCzzGUmNgvdDHvuQgXhxQhAACugab3DiHXwL1Z6jwzwoSNb7rpBbDJwdeaRRLm9QB",
  "key9": "2j6dF6J2FM4oJ3T4FY8uTAwiZPqDQa1nVop3DC6VZeBjYfnXh7jt1xWNjMi8UzhWRw8sY556JCCPU41PS3NdsS6k",
  "key10": "4c81HWdwPLTiiLTAsGtrN5KtRZd5aW8N9Hiiy9kbw1YQnJDuD1MtzUxV7ZPLeUTQV1tjGuF7cmf19XPmUcLzYiQ4",
  "key11": "5D4CwDoNrV5y4G8LXtkA5HnFmp3y8eEcJgGKcEpq7ybZRfg3jUfsNohUp4LW8MAgJbKkHv9ggv4zBZ99UG8bbw5t",
  "key12": "2qLeSN9jwB5CzodwhRsL55vt68f8xWHe9mqhvHBNnfRNvoFwRPf9cUnppUyKErJRAmwiEAbftgabcCDAxMyTpBF6",
  "key13": "5VbnGM8joGcuAn94mTrTbgCRHbVTDK8LnkAhXBAjVW3tijEvCvU3tCVyievV3w6tbQYeHPXVuMS4Lcb4HrEQy6e7",
  "key14": "2SFVQfchL8U43fts5KhH1T2UrjeGHicyGSUyKB5vxPBHBDRst9fUJR5EZyBp6QUAzFgu3n7EwbYQAaxNB5kKkhgj",
  "key15": "a9UsNshZRPMYpepgLGc4fF9rkVPxb3nr99nKDF8mQxm3Lt7ycEzxXTJmwskGexrpxR54uj8vAUosmTgzjTuv9nT",
  "key16": "x7mTVR9AfQBGvddmgbKzf8jAGnYFcuZHp53eW6gG5hHSTxXGBACvqLtT4grAMQjqweNXW644sNAKSTGksxzAUaL",
  "key17": "5XtUBm6gMnJor7uURtk46rStrbRPq2iPZWxTQT4cgx8U4x1Q2iB8TdTyYL6wEHjGt5MTcTGFHQguaUi6YWbxybP4",
  "key18": "2UmgrEgpHD73j2tujouFooNAv5Du4BZ8PbK5JohZpJhJEodrj8dd6qiFNrGuRVew9t8WCPQRkf7rqMEAmvrTsL1N",
  "key19": "2DaNTrGS41x785CcqWUkop31LFcrvvxs9p3Avo3GSxRUAzSKhjJYLJqQnxrtfNSdiRS18qiJXTpSDVkqLu95j5Rs",
  "key20": "2DGp7KtEyhbmXZ2uY12LQiWxF1x8Zdsc39UQ82MGCchX1ZiT6ypbD4a4CV2g9QnnfeNuJhdePkLxnNDRNY17EPcm",
  "key21": "4SSNFnMhoaRd7PRxoC2LTwuSVRrZQpt2eYVWUQcLxNce8dXrFmY2sSk2UGFTZoNUfaSNNgFPaMRVakMyRqnidQ8x",
  "key22": "3Hu9W6CPtHYCLno6hQ1NDKMcjP2UaVgy18nyrVE7tQNmwzQjFAZN5syMEk6oFQKTopwBG5wu86E5ikyVRG8wp71P",
  "key23": "3HyLntFgFzSpQQZLr1wiPXvxM8MhV3GDsadcuttaUYESDtqYFWa6ZznXV3ptZF5ccf8uPKePxQhr6kr4jeuKdqnH",
  "key24": "3zPJzyuS956ez63uSj8bsmmMC6mK1xZcAb9uvXqvBnUKJm2CT7VLxGePpq3xpfzfu1NB2EztqCWddznYYg7raQeM",
  "key25": "58ZKvkz5SB69tA8C74qrAb3JzW94Hq1RwgziPWpv9mavD16tmZEJqjbYWDCCT2DMezM193n9Gnec5Fnobd1a6RKC"
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
