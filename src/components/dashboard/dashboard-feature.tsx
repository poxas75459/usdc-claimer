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
    "28Ap48HYp1RBqirskdRCMfjh4SGY7jKvyo3rvWGYambA2rj6tYNPAkABy759AMhrpQNycKrJ6um3BZKLLQ8j4G8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hZJJUuK8zo2ifBFQk5erafPUjwXFVCuMKYRq1TCsH37mutT5Z5on7msjx5eiqhYCsSjZpwTbnjdB7cSUjQhS9ah",
  "key1": "2yXtuxrdmQ2utSC37XXdaX3uH76SWwAHFWE199cAAFnNLNCdZJ6rRexntL64WqtKs1PekFLJ2Vvoq2RLqa6qRcYU",
  "key2": "24oQ8ux5eD6MjtQZiSF2FeyHkcZ9fFgmGEv6VwbfPzF2W6YsbWH4QwCdBBAHbJ66XZH5PRBaALHuXK3Y6aGSJeJN",
  "key3": "LJkFt4NHqmZxunQMmxFr2MFra2MgQtYf9mmfvStr2fVcLyXTpHy2txVtiWeAxkzFqCj3BsUpfHGCLQ3HVLFUz3V",
  "key4": "4UmwLvTw5KwkvgmRwJfV8eSa1NcYBVKtjP8cPDhffgkiuQtWqLV4ZxNjRPwXRRQXA6HyrdBevKG9BAWqDMK6WtHU",
  "key5": "LPCLcr8Y3eSATW3YRzyCP7MU4EnZV4btzwDzJFkbswCNptDMCbdSZ4zabjLMG7Hy9Hof5rx3ngX5Geg6XoD8NhN",
  "key6": "LSiZrum6xSA6Cjtt99hZDG1BGxjDkaPoqpgWoWDct3gNQGDx2c6YtqktHtAWyP8YBQFJ45fsJD5KSAfNu58Jh9g",
  "key7": "4wTwarkcvYo485kxMpa6ZR9iYTaxJsZqfkWEdk7x1rNM92inVr1CxALPz6DuutsNhk4odSYcVTrhALQuZ357FVvd",
  "key8": "2Y7tj67aeQJywcu2sNyN3gzoQwkSxKD4JvrgjM9fEVecxeKAo8X7YBzPi9dBU4ZTP8RMNgoWgRPnp18mjLpMaeAy",
  "key9": "2mEpARp2pwRKfGP1FV3VdPyfpL9rQp2scF5yDfJHnMN3SYSvgp9dasvLUGgZLmURLMoxEPMW7QqMcTdSVsmRoLzd",
  "key10": "5AbU4TqQedkaQyA7XC9aopXdhu1xfTAs5T6U6ZZsvSHqsyEHAuTn9mXPz9Wr5oMUe8RYwQT8xm6L65engCzBG73f",
  "key11": "5Gthy73bLKms99n9TnANEvhv8MWgLZmH923G3myzGvQdhgxPoURxsXDZnFtAieyTmaCUdr91YQoM8ge3Fnb75nqs",
  "key12": "8wuQRYUscrktgBZXURb3E97m3AtvdwBfxUDVNeKQ9VjbXmukh9X7AkBq3ZSPuy8ic6bxZbRf7NM6CZUUzMG6Fz6",
  "key13": "4CFLKUPexnT5tbqmR5Kv1THwu6oC4WnegoHocKYKWPNfpQXx1uvEgs6aLKbRUsZe21KzofDAhb2oQhCvdqUR4UMv",
  "key14": "4NtHECLDXqb3THEy4gwK1sGVozHpisvcmRPBz9MbP72y2WPdZBy9hXAKjuKtjay8uviw5LpZAyWLUAEhBP7CECy1",
  "key15": "4yn2ToN4gwk57JxkuNkMZCPd12AbtJrM4phErGxVDpLHcwg5LugAnNEaNAgKe4HAg61EUYycaDAsHt9qwdCnnPot",
  "key16": "668R7kHK3Bm182MfHqmn9KRig8m6x3XDjrJW8ovADCrtaTofXdENN3dbdwT2FGHzrZ3hfaWsJz2Zb6FqN8BuczsG",
  "key17": "3HK6vxYFPxnJRrTikVpjc9SpjxyeyAazcsfuPcX8WQNDq4Zb8AEwgsTpuMGdk5PQJUKrDK3QzL8cwopYgR9FSE32",
  "key18": "3nayUxf1uQpmQEV82TZG7s8srugsSH9VAhLtfxuLCSUpdjmvySB5CE6xqfL3GteDqNoyaYX1NCs9hnLNSkhTpNbY",
  "key19": "3NBLkYUNCuMU3yETiFFykau91NPGK33fKjD3j6xiujZ9a2TefWMZkE2NfoV9fCxdcECefLxoQK4fNuKZnHEGHPfh",
  "key20": "4j1sy8TL5SnVHyqtXjrqDst6VY75ey9Gj982iGwEt2srHziAKFXPFL8bYH8vsZeAo1HcuCGSvAmahPty448QuzaG",
  "key21": "4KuVBtupATeWnc1i2SsXMAz6QEoMTnXgsNfNzKsAg1TkPuX8pHtrCGU9RebUFmWwsDpUSK9W6tU4VzfXFueVkRtK",
  "key22": "39o97VtX5ZrsaSof61D3CewKpE5eg1fntdMFQuqyzqYQmDCER9G2FAqTyUd5gEpRSP13mRFpXzsUhKafT5ZsVaWs",
  "key23": "2WgYcZuVXcP3mYHWzYUPQhFTHdX6uXLjA7Wb6M85HFZJZPvEupMMXTE1WW9J3As894ZvY5BLJrJ4EpTiiZN9C4qg",
  "key24": "5wbvRHnQH32oGZCb8x4Nk7NLU79DRmjcMLjqU5t9TZ7xfxEhk7Z2FVj2EHh3viWTdtLutEyoXYDtmubFFCbCoctA",
  "key25": "5f5D2EEGDoS5JdUBhQMmJD28wiBQq4fisUqGqzcRvb51AGgBp7V5HGEZqjztXCCeCMCwzDLsv43qCDsda2BKHiiM",
  "key26": "62ycSfz5Ss34pbK3Gxfgz1o6rdULvhb6wg6qV3h5FnYq8bRQHFa7kxy6gwKzkxuHtkyrtc45BfniMqBmPmSu5oo",
  "key27": "4dvBVNwKBEJvgVEgyhfgAu1NsT3dqEZrUTjoShPPCxf4iqZt2XUbrgi7b4TsSmioKYAYJkcHnXPYMrYLsVXGShWD",
  "key28": "3VJFRszStJySE1xhf1izJvP1amgbmpn1K23wSqs5Yf2QdwfW9krz6pzeP9AK8ZkSme2qo8miMbyKakkcvCygTq7d",
  "key29": "3bswwMttuzBWqXFf8TbyK5XL563gczGGMbBrGRnKCjhthHxnMdXUusgt9uGKeQpiJ7jq9oFCr4t9GvepAci2Edz7",
  "key30": "3zyQe4ZfmcbxHU8w7NSas1PB9jj2iKmGEK14Smv7EWSb6FgTKFhqisxDsno1pyjVHi2G9xtJFwobEQc8R9QkErjQ",
  "key31": "3YovyA5wbqq2ZiJZuGc5KPXXS5PnbaSo8ivepApKdz6rKwwRWahTqpnenAyWMDsnFrZZ9mQmMERtRX3bG45uv4BP",
  "key32": "56vMjZDxA4Le7rQYsFRNvgUjKhHgE8xNCUKb4WQgZ8s2UTSMEcDnJt25n4Be6jAry7oJx44GijzmHdMKA6faMnbe",
  "key33": "2zqva1eqFFqLgNCh78TfhYmWEVinfcYs44Vt7Pp46mZweCRJg7gDsEVZECyjtJV88i9fbn2VY8Gmzjr83UGQFL7S",
  "key34": "1Ri3R1c69vuYDzKy6NcJDc3uM6ppMFAE36f9VPnR1TFp3EMVsj8cHMRjW5AYDaTFY2mogiGRuudjKvNGXrQuMoJ",
  "key35": "3huPPPE8VR67CH6mg39W9Wr71xxQACLHF5P3PKJDbhNERjdKYBMZgLXyVd5AWBo46CXCi3Yobsv4aJM4iESC4UmA"
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
