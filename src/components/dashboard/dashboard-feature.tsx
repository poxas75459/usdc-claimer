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
    "4XU42spaTZuLNVB3VzHpAzWUAh7KUbUjxWSLdi2SKjh5VDhvFVANUUmhyyat72xmo7HF7nAwsimnoNB8wbhuBzk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4ujsN9onMrH3MSUV6kdGLhv5sKQxdjn4VK3bZoB7RWb3DwXg3FSotpgL9SF68K33APdGr4mh6cnpDk9dmtTns4",
  "key1": "2z37vSEdYnA7gTdcLpmmBg5smd6JQ1b5PhDRFb9necRUK94QbdTkPrF6oAjwiKGyCNcfw6kJHmuqWeD62Qnw3rGD",
  "key2": "kFA3VXMw98FsLvzsGtT2MTavWNotRxXXXrdcvtqqoz8JGZC119HfSK4wsysjJsKut5xDYwU3JmMKBdLYupVFT3C",
  "key3": "5HruFCSB3UXQ5FaLcVq2xgxMK5aF4Z5PJaASoovh8eMd7cd8xoWV6LVv2E2ZVDdhRyxUHVhMhnfA5g9NcveVLq2Q",
  "key4": "66TnnqKCJ4R2gf7gGBHzp5x4EhzomUJfn4xRD5s2nQorQUHeumSfT1p5exWyJTCEoSWEDnxkriC4DpgXFjqdFeFi",
  "key5": "3h5pEzrYf8mDzi3aVVRdm3JADpXUQqPSZWdojp26rjF6YkZAsFo7FWjp45rM3TcxaSo6hALUG5tn1PXkVQaS2QdE",
  "key6": "5TKF2pBPyaxJiumN7WrnktDwccJYeKYXJEmpTU7671PpeY6CQiVwdS27FJ7LTBBSLB3eGMNx6qXFYgbm7veVpAq7",
  "key7": "611ohHnqtG2XfyAPeN2tYwceKfvGSXmgzmDsh8Tpxi8dH2JGRTZwgmtneHujcdLw8Tub5FTMBDKTSF3CEhyCdZ2x",
  "key8": "3VkfrS1c94uqZS8tTcAMZa24SuL1J4bTcJj65mW7oFhEg2bnLA4J9uny8EBxjh6CoDdxPiPntL2oU8t7VGMS6xsT",
  "key9": "39sR7ztWiNUMYCr89WA3u4xKVr57WjPdb5Hh9UMWzcg3HqBbQZLDAqpCTZqHgYWURZ9eXB9JMZYNhHmWXt7kxriD",
  "key10": "3SPKFJjBQvmAbhAXf4ppyJeB66rBHckqixQrmQVdMSHjPUuXbV5UohR2Smtu3g3hGifC9fpgiKBb3ssTnaStKdEn",
  "key11": "2wS7kmgDddrhUdjCmxwx6thYHeHAVFyrgCQY4q6N5czL4N8dvMkTdxxu9vtfnhMzuVV8qqtPSbGetZCUSqPVnyQi",
  "key12": "jU2rgezBipH7K6DaUvnjGeo2kP2mawTiquZndqEyDWxvaRPm2Js5AcyGWiDg3GytmCcmGp2v4XuZRWiJLDSUF5A",
  "key13": "5W2o6aBhG3BEwfiLV7YLt8rmVLJd4Ryb7axTV9xJiZZtBGKMoQbyhTJSQQZcUGHcJKi6iVEqTBRUaD3ufctRnf5Y",
  "key14": "TbzUaBFYC1ZHKdEftkvpNgXLLstzxDjoQ2vuryp9xKpGqc2iHRYQDDTQ1m2V2f5AEAEVuCRyEZ9iHg7LN14JxUM",
  "key15": "22Fy5XTYCVCbNymHPekHFNdgBd1HEyMrPsqtAGZ1iHU5Jpne49EiHeDANV8GjvBHbZLxdsg8rRw1sEUs61fHQ6zD",
  "key16": "4h2DGyf5gaXQw2SEczGGHcgKUXXT5etoQs1DUdxnhrz6ntwtQPfYgoHmwvZHuUb2iG1QhqHgnhcbALo8Ubj2WUbg",
  "key17": "5NNNMV8bjD28GuRipfGpRbUPhZ1eUoxJjxmbbxEqioCwkkW6fXxdnPZtptSvcrPRnddWYpGBL4ZEQmVajruxDNVK",
  "key18": "D6GiYwYfSzQAgY6z8qVnSheAqnA2JhMGYq3bVWbWCTHw6BaiHR3SWxRtqs5Csio2PH2YjpFpegAyvt8AwiE3psi",
  "key19": "3NMMvYfpqeEN5GhrcaEv9F1LRJAkW3qmL5rHoUwqvnaAC3e7KYKqM3KUyVsLuJs2pQ8mpdpZWf9oJJKQor6vE3rv",
  "key20": "2XNLEjp9M9TnLxnxCnyonZPCGGMAjc8ciyNGgVmyreQTs3bafu3MeQ972UAgkz6GB4KVopy6SEPFyLvpFpxHtGEy",
  "key21": "5V92RokJPeweab8qiQo7BbRz5GFGC2jgJCMkqzf5QvagwduDQeHvtD2yJb7iAzG5JW4NxaGrX5m9HDchKPiorWWq",
  "key22": "u4RTWCghirwcT2qSSaPAGCPv4iGf49kLSbsaGpiLfXVqxQdDxAmqctzwNuGMEABMptw51JsdWKqYyYKaCUNf62H",
  "key23": "2pweUsV9uQQWfFMTZp6FrEPeKs35oKYAuGscmCFxXmNS9i7TkQNNz4jE6uQvW3nSbsgHzW4SK7GoGGiAvKqBk2pE",
  "key24": "31qecipKqh3qP7cvkh5QjGgzrg9GPUcVT47XgRL4DJwhWQ3yEdsjM6gkKeLQsGbKkQndE93JYnkB6w5hLmnp6HJj",
  "key25": "pA6atkQpXqiA1p8EudHhWkk4QvjvEAZLPN39FypvckDUWmex3EY2bBJmV1KdEVWkGCP7xkCPYWoXRn2E5hxDK3d",
  "key26": "4EzMhAwU11pcZnq2T3dCBxV3QdWL1tXYnhTgDRhKKsXhcQL6WRVotwJtFMEKxjpvkQF5M5z5RNFSLQusuKiBzBRs",
  "key27": "3NyCQBRx7giD5bEhzweHfjP8adC4EupFU8EGGftHdc7qZXtRTH9Y2S5vqPPRcZAeLqj4Wy6LzZjy9KEhTPdwoj7U",
  "key28": "2V9pG8TrjURrtokECgvZaXEACnYw3Wtznf9VrD7m5hy27uuxJEyjNgXbENcXH5ZYYsJ7BkgPpFJT8BE8U6Ncvkw8",
  "key29": "demTggGTvFCYpSprMvBhNU4rbJ5Zs1MvFUYNUFkuh9yVj9d7NG8bXT3mmp8xf84T7H5DzVcd7DqPHkrmAYZTPXj",
  "key30": "SV5Am3xZ8vHhVDp9cCSTtx68aNGJB9cNJzGrRN637Q4SmHSjqrvoeH5szA5FAfzjF2wXyy6YWqkAceD1ZBTw4a2",
  "key31": "3ZrsEicWGF2LwBsREBNLdiSH5TnhypRzu3Anoywhfmvv8vDYrES4nXAMACyFDbYdr2TpZQVmLmX8koMwJhi78YDT",
  "key32": "2b3nk8VfGKdxHvswrRHrTiKtKBwswiUCUCVwnZQHA3qv75VWorZKSBmfZyXoAUEvZRk3YKJbF5xYajw89NajB9G9",
  "key33": "qkxo1g8TAeWTQ7sRrXwvi1eheJGS422QES8WwzBx1yiQfW9Q7SaFGYqUnTxriCDcRZF5qoPqnfJRQAuWrVZLARB",
  "key34": "3EHZFbcmurGfPPBhr3kcsNJrqDDH7oQ4zRaGvXmqSrADad8XDccL93W7sRrPmnxLjCgi2HYAXuMY1FYsNYPQyomk",
  "key35": "42GdiFL7ru98wuTDvQYCnKJ5py4bUgjHxPZwS1mKDbJd8KGEuWpWx8wfxKEpnvYQNPgnpwJdbxe3dCq8ktbZ25CZ",
  "key36": "392u99e4hjW75tk7ejma23e3JoWY2VVFJH3HCcnrkwNQ7rzb7nQxuSVXAPV87kai7B6ZcdCjitkqAer94QuW1vs2",
  "key37": "5ZgXHaQjZQQoV6D9GNbvy9GjUJHrehW3Kb3f8R5bgwbxB7BzW2MBPDxfSuJhUbkbPqLu8TByFcccPZMoDvdiz5bT",
  "key38": "7wgwxJoJacW4hoqaVZt2BW8mkyDK5TUPKnynZDTpdEewibSqxoC5ZeNasSsC3ATdyHxBqQDQri4Yqd3EHFQBHhV",
  "key39": "24YyYAWjppqhhbYnfgYmQLuEXMyMHhb63EWn1v9AbEzXjCCzDgPHvwhNCPTa6sBtghDrJ8cD9QL2MvxfpSxPbFVh",
  "key40": "CcNJDxkopqBmadrLQRfZLfyPuqTWvFPoU5Rf8ZL8pVBiKCdgMh8W4TS78X2wwURnyNGuv5U6URMUvjE5SCYwPxZ"
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
