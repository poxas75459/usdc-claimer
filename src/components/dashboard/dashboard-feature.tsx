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
    "61hMg8P5ob7YkeoxCbmTjCtjGRURHFc493dYNVDRoAJBxpoZYD3VFTme5xpRDQdKrAu5TzbFin3uiUv7nVSLBycP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUmhGcQPNhC2YVss25v4A5ASuV89pjEKaTJ5uQ3cNbgzhFnWpuwCQzJyiGKJ2HSAbEMdF5fGGRGfEFjM8hiwFAF",
  "key1": "3Skh7LHEQhunWaW3pgYetepjvpUes4ZyGhaTR3ZD8CedtLZE9s2bgk3HHF36MmQFMFNz1ddDrqc53C2F53aDj8qa",
  "key2": "21AVgVV7fWAu7xzRPRBAzNYoD6gAgKG5onJEwiLuzXiMcYdTdYVqZVLSguzbset4uiFVvokNyJRbDguJa3jUqPuh",
  "key3": "35shXZN7fvwRU5FgYEfLwdThYL6NGXRfyMfU2uxZUmSr8PBz16c3qdknr6rbMsvjMDvEaZH3Hm6X8qeafcDF46ok",
  "key4": "3Bp8dtfcD1m9nAsG35A3qpJgTCCyHd3x7Ki4xHKFgb42WDLujj2hD2JswLXQxAnJTRNoHCgNoCkPE1Aq3JwqgVaD",
  "key5": "26Uo5WgXAizzua5p2Yg26sqYxtMJ3vHBCYDxm6zp9PvbkEp7ZTq6Y679jEKeRXczhFWkxrbhi68oRFK24gSKqPqx",
  "key6": "KkCRQsn8KBMs1D6q7EA73oMo1LkVAhSRSXBUWzsPkRRXjNprwVebESEFSVa2AVTuD1hkUoqdtbUacH9a1RqMEXr",
  "key7": "4DYQiBzh76uBLMJNme5vmgV7E2fbFZfXCae8z8P8E53nhigiGBEUPjg6JbvMKsp99hSdXEwv9qSNox7JvoEKAiyF",
  "key8": "4iMDQDzEoSnzwMQ7EUQE4PBA5ds22QjDVfD99pqri2ocHiGcanmwopHQhactJsy2bMTz252xUoi9Fe6u1JYUJ1sv",
  "key9": "XxpycbKnKxXkRM25TPkFWVEqVTyJGA4Lba31XL8itGfA8uspSR76zp5hN8SyrzHkGi3ZV8prfyaAyDXrY9avSto",
  "key10": "45cVHiiX9QgCDqTJyQ62p1emiTdDFtnaVy3vvQZCyx6iSQwqXs67qaA1XLXAb8MUT3aHfBmTswhtpfncNt5p3ygX",
  "key11": "3hnB3NoCvbW7VPHbRgLG9rNX9d4UEuCGZcX9HKLwRr8cQZYpFVnbQ5WEp8MAeSyqqLqfcLaw84dSDvgUFrbtDFan",
  "key12": "5UqBSVgAYua7rBBbAt9u57MX6mQZ1LxPsBSuxNeBJm7zgd5Yg2p8mGGac51ZCcq1JNC2a2u9Dmd9WE6xm4esZsbN",
  "key13": "2QtTtfnYGVrGy2AxYQvg3hstLzjtX1ppAKPJTiEjvptzNiBGGhLDqzaBJteFXtYtQzTfAuDk78cu8WcZuioRRNpb",
  "key14": "5RhdCC9NzqkQnUvqhWphpEKMbuji3m6kHDcnZWAVY87Lye22NP3xe5ooxXYdxMd7omDsu3kVt9DqnCM6LTwc3LLe",
  "key15": "5Rz9CuZ6GicWWVzqvRCqgh3WW9PeLmBYptGwH3QSPeGDSJVa1Ny2gyNtFMBhj9EUfEzDzUdo9Nkd1Gr3RygWQufr",
  "key16": "4c3aqTSAftWESFBxBif35G2mqbNLxfjhVsR7omfsbP5v9e7Pr3LPUePXAk9TYumFkXT8VXhQbHQQMAuJ4wVdCJwM",
  "key17": "3igghWxF9Bj5PXcF8mNcAuDavNvtKzNQZasH7q7YzNhp5aS4Xq2RHjzsRBSWXc7pBy6tPNSPJK3Aa9Gj1DdxJW8V",
  "key18": "4TTG7jZtj7MPeRifxnWWkAKtPjihsiYkSkMgVyMMEVDWKTrsz6MW8BQVJQhkgLuWCmktyEL7CqYW49JDuVyYQCEZ",
  "key19": "45jkWqimzVFnfYMtPxXqo2WN7TUXDRazbiVaeZYWmQ5Pxt3EdjbcYNBpd4Lome3yzfne16Z75i4LsQbbD8WAhFcy",
  "key20": "EmcjiQxt5zrfXgTA8Ds2A6eutDrGyozNamuZXfz7t4eu6eTn4LNEtHCVRTrwP7yozjSS8QjFqGP1U9SCPCaLn5D",
  "key21": "2u9V8x7KM2MRHew4vP8vKnq9NB4kVrdpGpsbn5XmnVVRkxEAypsRZ1ACgmBfDhecz834qvX7CxyKp4mFh3tPMnHK",
  "key22": "2YzZwB4MUSkGZy67RS5tJHUQm9JN6YC62suPimb5Np1BoHdmcbMmBpMB7okwjzBVXpicTmnkqEAaPe3K2bvgMSaH",
  "key23": "38gqFkfWn9WVgw32GJopoa9M2zN53e4CXSzFzFSqEKYQ2WVXqJWMDyBNv5Yh5HHSUJbDb5WADLuLHa4bKUwHfLph",
  "key24": "49xM1YHmbQHPoarDWmuSUfZBrNsJDDpRmVygoM9ikpuf7yvoWDhTXuGiVVeP66vLE2xHq6fEDY7q6Xdt3m9S5Xbx",
  "key25": "66eyWP3E51gHTSzGoHjTHB3LFHti2iLU1P9myjoBG2aLA2f31vnjeq22iyRGfoS4NhbWN9pzm8XmUeUSev2MGaRR",
  "key26": "28hveLeiJ5cHjrkkKLM742P4aTKFnYBKaxbw3bCVbKNVKEWosuRoRBa2STV2eXCgdnbtvCwYDtcrtsC8nhJf6ZWu",
  "key27": "83zjfR9aQWzVCCLArazX8sbYdyrTMXb7aJ6ozdJC9oYzBuwNgG5uiV8XFfsF9C83C8WH1TzmPPN63XDgupSQvYS",
  "key28": "453vkDhGeU3QadDoayF1fcksaqMpLrKVxtMvoVozMdKgiuuNXwYtkPiTtxhvmXFMBWhpUTrMZ174tPtpZv57iwNp",
  "key29": "4kwYZAtgzcz3JqGcZ9bniRJHywMBDhK6r8VutQwvuFspgbp7E3R6Nbhx78fJbY6b2ntQHQYuCVj91shtoVSSeFz7",
  "key30": "5tpiyHTqd8aTnBRvzJfE5Y4dHhqyrAxVubJcrt6UzS1ASnqYgJrQvCytdya41Crqu7UsY8cQc6HGxSHSDJAXZonX",
  "key31": "5dwneJViYBB7kYL8uG8f7yrQHd64V8sXY1i3CvMTLzxaijmnFW4rD3N2tKXXcLjCYrpPGum5zw4RdYbGRDGpshT8",
  "key32": "p72kt3h9hTrAYQpJZTiC1WbtFjyC8dY5sV731mbPDaQr5gAv5goCvpqk4wyAu1zakKsnkyXWahZMFRVzZXAooMZ",
  "key33": "4gLy2EcWoKG34yeFR3tWv77y4GJvyEWzgd4A87FMzoVCxvAKdyri7oHuDLumFyvt5iT9cGZiiMztNAqa8hWk6eKo",
  "key34": "4SbiHDU3Cjb7TMEWuuqVkVEJhDZV9vWq9nmAsBJan25NSXdSdQ6yLxb1emyMB23y5JFHXM8w9sCqgZ3sn68Y9U9Q",
  "key35": "5vRr1QLmzk9iibHFCC8BcRdqhR1cwfiuqih1sNKRpPA95fSarw2ovRRu5bBgu3aqVGnxuGt1pz8svpy7csd4i1e5",
  "key36": "LyMfm5k9e8oQs8TjZVCs5ckLpB6ojXJ345asq74VAPHWnsjK3rBXWKzxpKsgzhUv8J2GGThoJCm1BAPnphFLoNQ",
  "key37": "63cBeptQHzxt5aTpdVdDQREU4JWxrTvWfhfSN7tBJBN5bx8je1MwcuC1przga8GW9LZsKKCdc2HTKgX1YwsVWfdq",
  "key38": "3U41D6re6tBcmgwe23cxG7JCLTTou2R5hxDF3damL6fj8yzWc4Qju9kDHWYPRrYPuNe997YRUa2YudMfYqmLMFZX",
  "key39": "zvXcHVjt9x9Hn2uKWbRJx4M7vJcJrSZG741LV9CPTBpKB46xSZWv1PZ3ayTAAgjnokHoTAVxs93frT6H1MqQDUW",
  "key40": "53Kbb2VBUxr4NePNvgTnfh2NzRHmvCVjAzoaikMnCyBV6wZ9rTWFL5svrb1XcoBxWzJbTRGxSjfz27pZaz76YW1m",
  "key41": "5owN4v59NAhxuUqyaW8cxSMSgwfwPpGooXELNXhCx2w9VQkAEuQYvYSc8XTSYu82a3xtK29wHcPRZNouBDYWGVGH",
  "key42": "2qkn5dWYFKRW5UosmwpNSgd6ZnPmst92imiFcrrNfMBYNwU896TWXRMER6VtVTVxEJXdFazWRgjBcPYpmvoKaoUK",
  "key43": "5cUmknThyHTS66cpTkTiBifuEFiG66petFKGQxqeEqKnURYgnZE78cgPdmzTaJmuKjAg9yLTJXyvzv2ayq8D3sze",
  "key44": "24cHQcvXt1Efnn4A7My2pohajXfBEriu1bb3sXJJVARZcocB9ZvrDA7b7Z8MsrjJiLeAhbcxqWXTkQ2DCfVL55QN",
  "key45": "4Bi4pni3gv99KP2tEEBambTZwxGp4vMKHUX4esRw7gM52TXDmmiy3fx22d2LANT26y1RKQxi1HGLQWSicNep2Txm",
  "key46": "37EuZS5d9jkaegndmwcwpsCMGWT2MFQLWwy8Bv5y4cLJWbj6QbkJikKWJeHP6Gw2YXgZHm9GJaLbkLbgK4KcfnQ3",
  "key47": "Vn5SQgxvcyVN3caWZWcU3T77UwiddhqF9L88Xy8sDUk6GLSoY7JFEpsdDsj9anQebsLhan5dzawDgzfQuLKJVjV",
  "key48": "2nBKXCMPkuhnX6D4G59pGKEdaGy56PsDBqKPSCYsasjenGNBLTu6QpRXHyBVu6UaHWBwUwKgBFTLdrtTcwGidTp3",
  "key49": "55VhXignpZqpZW8xEmzmMBZL9G5pcyh2g9Ut3RgEiLARshfFo8ejZHncgdjFX3b7o2nZP6GsW18tSuCMuMY4dbbh"
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
