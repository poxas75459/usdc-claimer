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
    "25SY96eGNmVq27JYwDhtXoQmVyBwqhT4GiGtJ7XqbM3uQAXA99a9Fd4cbzAoCZMMX9mm44Ca7TZdve62gtMhZyFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLJn9brLM65WbH6CVZcHzuJDLMzkfy5b5r3T83iQ3q5fu6SMNfPFgVNCuXSLiJfYz3B6spExFkfALNHuc4rwrgk",
  "key1": "TeWGzHxjAm2CrvPYon4aQvESeC7R9gLMN63MUyQUCQr6VCnCDqEWLTxaX3KuSBmv5ydjap8tSDUQSnYzFs8o39b",
  "key2": "3vV6hLsznuffctdh3Gvc1skCvegRuZftqU98cunWszY72ePyGRm37pS1ESdbrRbbEJA1FUK9Jfwr5W2SoYiCExQN",
  "key3": "2xfFKikRDTytgy9dWVbkzeCvjhWeGPDwrvgdCqeJwf6RuS8sQY9kHQWxo4Mk2qfstC3yptwRd7xhRKRHu2QJzkeo",
  "key4": "33E4FqCxXUFx3jRNCj8UQwpEpY6mdHHLvc7JjMEjYzJRfdUqDzWgSL2pKyqYcwBWuZVXPrbB8pV5eX1VN6BBhnF3",
  "key5": "383CdeCEhvdfguqSbmkSvEwHXkbGmdvjXxF8PZM6fNxvyDCQCv2gH7oNJbpHXABRtRuyAcd942ULgWrsmZ8jTXYN",
  "key6": "3nc1EQvYgokqgpgGJmN8418bV6CHfU9JbKPzBwQ8ad6CSPtPhXYzMxotXPEiAVCGgc2SCWfuLZidYFX2rbeZ2Yad",
  "key7": "58aDjADBPy6YnCH7ugFRpbvpFU2ThxiGzkX1uzbZ5zMn9KpXxTYe4dbTx4t1DJToJMfLpEjTVBLMThp6dPjs2hL9",
  "key8": "2tXJfcCoecubjei6HWLBXbA15VPgvTBroRtDQRfzFWWdVE8KikqCX5uUdsRDJjZW2yeesYFmAtgsB5nFwVFCR7Jw",
  "key9": "3NsRWpybhuP52GYhZhUwk4HtX2v8Z9tnLnEdXCLQpWYUqSoGYtTMVt15aAydZitN4QTycRXJ4VMD4PHomQvoUMZ9",
  "key10": "4kGtuw8y5AyHdFgy7bCemnLyjcZVBJhMDYJ6q4stAm3BSv2qtjyJKphbQuhFBfroaHZ2otYE4Rk6Y5x5HzdCQrXa",
  "key11": "313DPLNMStmJupsESKoZzGZ8wztuTuaw3zhuK3ZgP5hzTAdrX54rrkMCTNrieN9Z1QfyKQD7Lzx3F9hBoEQ8j8gA",
  "key12": "524MTfZAcWfW5JoKdGCuVN13ZopBuy8u6y2V8K8WjDr9cghbwK9Gj5vawbrppJfMUMm1cw7Y98TMZ4vaCDhsLJa6",
  "key13": "sfBhbvNPp6HyWdkaKUYVv8xwFFiJ4qLyiiSwxqRFcNLSarZKD4NKUoyfW52ASk1YvGjhXTjFHFNu9a2pZGZwGRz",
  "key14": "2rsU3fHEdyEEV9suBE8pRpcXeRfHtbmkiDK1Y6KvTRE78dswvo4BPACKQDpyBrLSHNnhHApKrrVkZG3rJx8iMkas",
  "key15": "4m7THcStEzuykh39dY23Uu8mwfFcqs5D2SKmk7p3rj1EVNGetGnMmm7oD1Dbdh5Cqf1SYXR7DJYwredHG18PPh41",
  "key16": "3UXveasT4x11mVShs6NVThzb5ZqeLyZjwcr33NeyHyQdC2sLnRE4pBmCVZJ1nK2wUEg4RR8MCBuz849UgBsTZ25R",
  "key17": "5k3EB1wb8K4oHixS58nKg52g9Dx5stpXMiMgukkb8NJSu7e1RjwvzUw2Q8qs4fT9mjDrMuxAxWoKPDeme1rQQfoV",
  "key18": "3zHDex7DS14NivtAU4u5xbNBEiUt9cNVWdvKTSFSUd7CS1E5GmrDku8pDL6PwXF2KRngffJEF2EPWdza6VgME8f6",
  "key19": "3znjP7a8JFuMy6aZgsHr7nVLjqyQjF446KYtjCdoVHYVyCuHFuoRAqmHJuLWYSpWgCoyoajfM6mgkWxQP7Ruz2u7",
  "key20": "5PVGeorqhBzNAappcvwn7PJqvkgxo5wp9NbvtxJrMTLUFLnMGgh6oVsW6WUbMDibDgqMyH3BdfV22v3E6cr2zXrg",
  "key21": "2RDfKEAQ8eMv9PXcgCavNmst1JDM29XqoGigPZiricPKp2z18DrbeQzekQg81onC8YdefDQXEAacRoLE3J8b1zq6",
  "key22": "29sm31q9s7Ktjsp7kA6vYN7hGFTLDNFwDvpSRmDV8K5tYYAhz8K1iHwqqTL8nHL6psmoKKLvS6AHuzB4Z1XKurCD",
  "key23": "5JXwZakRtYnhUn1H6wLb3r3uiSCddJkbG2J2wC3dk4Z4FpYNn2d4EhAc8bMRLQ3tQR77X8sMEUBBXENiYtEQtNJT",
  "key24": "4RuG3houDFY6HH5awmRkntTXhXHYZ1wNryPuHAwu1dMYw3cF25WZAwJTSoS2edTRwgxfQgHZH4B2EAArbpnGLiee",
  "key25": "4c7AUebFMYczq8HHJZipjSo1o4MBHBWmaeTzZfiJbrYAXA8pMbdMjaKQcwec73Pk3EYTicfLo6yWoScBtXrhWFCp",
  "key26": "43tTQ2ZiAjxmFKHB4Hi5mPbvgndA1pjpBZfnhZwDPr4syYPrLyNca72eTgx6FcNMLpLGE58aPJWfoXtaNeGUQb5T",
  "key27": "3hkx2YWRXCo8u2QQugQdofhSmpq27XqC3piXPffsp2dBLQQ6pUGWNXpNVdGUsFqMBrRTPEQ6YbDXoFTpt8a6VDVE",
  "key28": "4fi6Rs7Rc12ocnyuCYCJj993ZUq9Myqj1NpexMLncM8reRD48mEGvdaL49iTkq8x28yqAmdj665Nh1gLQfHbGNH4",
  "key29": "5zyxpTM35SaYfxTpPUk7JFKuo1bdkwhVFFpuqwrPoHvWFb1impZr8C3dN9EDKkZ2uGVF7T8jwg8Fx1r8npd22CTB",
  "key30": "3RDXEdtpJ51CRx2ASxMLgz6iSXg8GzZovhSLkXgPpDEbFznQHUBKY3q64uMXU2WdA4qyEzmo7TFjJkhwFpBYCQaC",
  "key31": "uKxpzzPujgVgzTANQQoNGu4ntc7Jgppdun9cK8k4AuJ7BGs81Rby8ax15UcePMQwmnzQRX62UYA9BL7N6Hg9oP3",
  "key32": "3jB9VUFEixUJqkQZdnuZkNbvwe4zGDSaarsgktL5JAmqGkX6wsok728G1XhzbJCFumxwgkzMLmjGmGPiWCsZb2Ze",
  "key33": "41oZ6xLdeLroqZd83GHVDn7NjgmXHeCFZgBa9hxBWjWEWKSACQPnvckmVH5YGLaVFLY7YN1jSYPvn97yeT55ECpZ",
  "key34": "24EkC47ADj2ddDNskjTrbko4ex6hVrbcxFzREHjDPqYsLHFcYdX9EAbxcDZ5wmJF2tWFLsFVEJQZF7gW5Lp7v6XP",
  "key35": "4npEyYPgS5vGNwX8389HCU9HwnZ1at8MGqenEVRYBBz8T8swqvFTDipzQuMPRpxiLy5NqmtUuHRbLUsy3HgB5XA8"
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
