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
    "2rwLyN875iNmNb2kVq96vAPDUdYCphkkXRKRHQMECXFGRUpSSjpF7bTUujqyZ4yc5bBR671KCwtqL2iHd23PyKdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iMdxSuZXVbavfiUX3jBLgNbYh5rh9YzpmdbPFUiYUAANBEG1WYETpGU12FaqqVmjQkXfZvt5WZonU4ybiBnQwxH",
  "key1": "3P7Fgc35R7BV52VtfpyL6LkLBW3fFAB5cGXMAyNHCuePG1qw9skQgtxwx1FgnsGMCiUwhgP9kSR73buYKgoWSKJa",
  "key2": "tRakNkBdVHChasAougPd9hPV6HwrFMdUrx7iykpjenq16MrKZKKcHgrRCxpBCsLuuF6hmDPQyRePcxFv5MRZTdg",
  "key3": "2ttXzENoxxrFbGrHjpA6bZ8QzUYcKAkRymxEWFmwDC989a7oM68WQdoLMUiYWi6HRcCjR4jafNp8j8r6r5Xq2w8N",
  "key4": "3vGREJUAoNGyVMPdJWSSpsCBKp7dazXbFyX66awYPdjHXGAPV5AJxYGa96Rifuk4mt2yH8QFBKWPgt6nX6c8b7TK",
  "key5": "3Bzjw6Lz3qRBXJNMdwtYCgK7atfaVqSXKurbmV4qrwAH3vGoXcv8PrbKTGLr899k9yN1NmobKT9BwzHBFEPK9dsA",
  "key6": "5FSimPznRTAgYSXyrv4rEjoVELUHEFUXbmhty1Ge44GHPcFtDuHZDEX3LFGdweK5Cu7tm9bFptGCsi2g2puEGuL3",
  "key7": "4qo6YYfJjrNGB7tDLmLcPSw2yYVwUWPpwUim4BhfAD2YxnPuThuKjJ6bvChqFFrHarGhhxtQUSdF6ismtGX5NaZ",
  "key8": "2rEnELXFpbTa8r5BrQje3dyHLQhitF1WSFrVWtiHLpcHwVv8cVg7osNVK8ScyT7pM5TZTxz1upNGr1Z9Dp15YraE",
  "key9": "5nh6BEoaASnBEwxBTnAKMXqNV61bMz1AbLhWsvBsY98SYDvBAYV9epNA5yhrh3tn1rqksKARDuYHDiX9eKM6ijrh",
  "key10": "2bLN7XvmR5xiVQGcmPkNG8oH6Mfiv5Z87kwygp4qG4eGGFGjGFzTP8N9SQHDJEw2Vw8xuit6D57JAGS5frE1yytS",
  "key11": "2rkpp4NRDkCePGPBKpFFupBzpv7JZt61m9BEQ99Fdw6p8GeDWub9D7H5izsvRKVKt7CT2HaTGvVpexSJqJYENt5F",
  "key12": "5HPMztwpAuorjoFP17mS4hENuH1JZUBNeeSucAd9mJJXTELjmuYhXHVzXBQ4KKmJrZRnFhczcYrEPSTCxK61YJzq",
  "key13": "3ivsQKiNk8e7YAhrHyxsifng7Exnnwz4QpJkMnym5jR1u7BPXfudyPqJSPGGEms7CG3N1reyVfGAYMPX9pzEtGXg",
  "key14": "2Zjau9ccrhoefK11CC1UobNJijLYFMKr1UsDT6MTC5jYmG4AUJfVHAorTuoBXzPUMcTi9YAVisHQA3Xxbr1yCR1J",
  "key15": "33J9unhpEcCqJ3Z6i5WMRwMgnyznNCHUxUS66ZdKFJVf5DJbPdZTgqNbZV4TuUc32AHDjN11twuXzB8Qqn9gwA6N",
  "key16": "UXkeqmAUWh6rvtmAkLuLwC6yrh6KgVAE4WPRG8gVyt1q4zGoVa2g6BCM1NK3jCQ4jmb1RK6rZ6fSUAngNhWijTd",
  "key17": "5NZaVDgeqyMNYdJG58LNkd5Afiq4BmbZ33Lstyjt5J7CELUk1CzsEUjMfRA97QfDyNbei8YuPFxG9qNNWmRcaSDR",
  "key18": "XcSEYAUdoSfCHUdhuSkcE1gj2zcY8tfbdM97Z8ww4u9gsgPqbpmnDKs9iF6F1FETiJLuB4UTDzuVtuXCqig9dxc",
  "key19": "5M6FHgCqm8AuCK7REqwB2NfcahSCcUzuKqoof1BYBzKnYtoXoxj4nJcEa2kPvmgSV6SH6MDadVPFgTdxRZawnYJ3",
  "key20": "4ieMAU7dWWcVJNjmjFVZjmsgdKwM6WjiPK5cX4ouBRwcwpJDNKYw2bjRCzDpvZcEL1mbALie5t9kFN6Fj4CLyQMR",
  "key21": "kyJC23xePmtjqj5XJ45kwbnZfm3sQB7ztuWjwC41vSu6fuQQ7oTG3JZuqTaxpjJuqb2LZKYiwBfP9bcXoDX8Upx",
  "key22": "29ckVagoeVyU3EneNtC9Z7RmrYv35fwDWootsYqx7D41iTJFFQgJmqQz4HgQRd7v6Xwd4bgXjebUMtYKJ6AbPxTT",
  "key23": "CYUdNLELcbaQgw42Khm9ACmZDRCngGuGZVKeEpEVNGwTzNdBmTikx4AzS3w5D1ja1HASMUxUduwMXVzJA4CggLk",
  "key24": "3uWtxBjicDT2FyCG9hzb9z4Nrim7AcxDZ2szzPRbPyrTf8bF4nXxynpwBLxv4mrAAbk8QjDZNxk33mFy8g78eehN",
  "key25": "2SeEXQjxsCgY8YXZU4zKMMyCZLmqAv4ag1Sc5jh4UqJCB1HRN2HGZoYztz1tWMbt9LAaFw642v4nT8u6REQvTT9f",
  "key26": "7Tq2PBu4XrWjfTdYwrtBWWY6dAWFt7CmNm9TtN9dDM4ZtU4M8ke7YzjUUuZ9nez6ERjuJ8GcpTwiau9o1gpL2Tp",
  "key27": "2WR2hSmYiry9kJef2tcUFGBAWUsf5a7qZ81WgNoZJ8NDwAERX819ajsmzpwk3E9DyMYm5XdUU3Mi43PBqsGZcMR9",
  "key28": "4JgesJPdc1m4KG9nQhEj37VsmnZvAxzfybcurnNKfAhENPU5QzYiLnzuPDjR6M8Fj3VcRT3TP7cHiQEQCDTFZ62L",
  "key29": "3eFMRZuBXXareamVWBHh8CpfWY824z7VEksLSVaR87HVyjiZfykLm92oMFE694EpLx65bop8xUnZM3FtTXA14XJ5",
  "key30": "TygdanRKsirt9viGdmoYr1y9jAeVNapvuyf269uk9DPVxn9d5PnLLDVjpSvaaqUBRfQEvLg9ZrAbpUT4cKEt9Cp",
  "key31": "2BLTuo6nkoWCwF477q9JNYHMLSmqvZk33aojhtD6M7dyaGnAGWnUtLz78sWURAgAScq9RrkdrrAsrKPKutP5tSP6",
  "key32": "5m8Q4i4kH3RaHqGcJAaQazs9j417E1Y7FtxcjPKZHvyGuH3Mnb5emvt1xpvrwT7fPAmPWiniEdwzHRnZFZwjdqPM",
  "key33": "SFreGaU6o1SdFNTsAY5RhhWnJmM7LyXGN4dsHvWBbSbuqqkCxnqrFywBxMewPHZRzrUoqTUBxUcLyAs85xwFuvz"
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
