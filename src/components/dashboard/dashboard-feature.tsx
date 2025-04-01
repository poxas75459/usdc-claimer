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
    "3LMy9ya83c2uUHUmGzqqDjtAiupJ3UL4FCJestFbGHRYHJZeAPHuV1GPcwi5Fm6Xs8d99p5KmVVyn3vT47oSCGS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDr48ctvkrBwtAeQQ5m7pvDw8ejihCCjejioSh7tt94QPZSG2x2ckWrHDupV4AFyiBhxwsGpptwUe5xiMGaz5ft",
  "key1": "5Z8J39GawUe8Af9r7KCy2HhTo5Gq3mPXrG2M7qDR9QwbUwnaePxYXEXY91UsVrmg5wk3wnSStRuvGpp46FJkXhhm",
  "key2": "2qwCK1jh9a8muJF2t8n9buo5v9k8Cyur74jWn1bXoGhR21F54Yu4QcQZroapyZ7EzVMunZVVMPjUJUnkVLt8itv9",
  "key3": "5ncBHWSKQQ1ZNuvnfrPJndpAQ8rRzb1hzCPSJc76TkEECJmhXiB4YnSLs1Nj5nfjCnNcS74yhQm9kiJkWmGwDYtk",
  "key4": "4C6eQqnVfz2M353vRx8g1zmHVwu2xSigjqFZpoYFgbwn7mFiMpYYejegyS3jhrNPJ72QVSinzBAm8zFJA2Jcwu74",
  "key5": "3WTeo7LSPy1QthwgzyLbXuCWjDZVPxRKEt5BRuPkwGDng3AZJvmQEGc4y1xExFmpbjZndtpj4bkeoGvGuW9XBWCv",
  "key6": "4SG83J7k1ViLQ174AZU6nfw1eSDQr9N5mFUQr387BTZ3x2JChWNpxX2fT6dta3fy2m4GabW3YdcY3jpqkkc8Jgg",
  "key7": "4X2NWCNogqc4uj2fCJF1LTFF8D5EukPykNJu5nw66Lcxkvc68ciGV12Suo1yJvm2TkabhCpie3METesaEwTMVHU",
  "key8": "3X18ofgkxeSQdqQtPwDRsytFbmsyBUrk6j4F3EnNBYSV3gtatm36wRYJfGCWWfcM7VsEoB7E7hvfXvU8f8J7Gqs3",
  "key9": "TZzs38sQtcATgGuUDMMspZ9hSaWb8ZGK9u2AyK95dbgdAPVG7fnNwy7i89Kj8Fo3N4FLnULjsA2rk9J33tpiLxo",
  "key10": "5biedQZmGqymLrCtGRziFJ1JERG9SHQHFcR8FK3nVvrgJTk7bGamjcRvURiCpMpreKpbHzVs8DUpYcTXHJmWFzEP",
  "key11": "4RevSPmXzQRVTBNqeE3eQkxPxFFmDaDkgUqiU9SzCkeHcshs37AxREBYMCWYBnNi2S3k5XBR5LhSqUZ6eweQW7a5",
  "key12": "2qNdkvJffbKRKda1pXbkpBBTcp11gHAUVmJr3j8x2S11zS8b44RDQLRTBFC4L5dBRbTUYykVPuQY6Sku2MAhKRdT",
  "key13": "2gRjFJgyFd2yRxYTUVMEgmxgCZKwnZe3GBixKn1K4TS7aFmTRSriYC38G8z4i9YdhCLgHPByatkk7m7zzTMmrfrn",
  "key14": "3sG9MKS9uAkoZ6vrnZS5JX4LUwoG4NYrHk1juJUGg2KAUSxX71Yc6pt5Ba6FLnTq4P4yLwXo3YpLsFdvCkaGGvee",
  "key15": "yXJzqMQheXCHQSTCor78LuRhPnKMunfcvjFD29h2Rf48EKYSda4G2gz38AongEukwJXYX237b1uPCdrLNm1fzrj",
  "key16": "JqcHQxNvSSC1j5KLtsZXaQbCQXtkvSgHQsd5F2n7jU7fsGhabRMk2o1CU1pK3vQnSMRee6brf7cN1Uxh2iu8vVR",
  "key17": "3iab2mwTNjrmgDdqKEfKUP6NZZZpZwLJDJ8xqEHtAE6yrumSMSdjk4LVLdaz37MiGnGw8Wzsy5ZUc5zq1kAFYG4z",
  "key18": "3Y6w2L6c3MT8H2VSRQS8ybqvTzDLLPAbzdwsKs4x2r3Fx57xK32LSNiUoxY2nUS7P9DeFngG7uFC2zEsu7ssSvFK",
  "key19": "p9GuaMhrKgFTwpxyTNkdVV9eHZqwbGiJbrZzFRZgCA5AGDUAzu8S7JobYVf9YsZTiRwxPQnLZsga6rr5WtmWHv8",
  "key20": "5X5wALbJVmVcsLJsTnoYQ9671PnuuKXDMijbiPGLZ9JxXT3ganCdiwpri1VfBuQGpqhp15EwRwKxDYce5SxMGFhR",
  "key21": "3jjbvaWP4beVyoaQcgaiKVafU8ypvxgnWpCoMv8Y6RbsYwGjrZp6CHR8TF94JBFzpqTjF2ZKiDDeon2xze2vKZMy",
  "key22": "2ftxTLvaRFSZRLJyT1uaMVdeeWsrAAjqJsGb1h9JfvBLo2BJykCcBbY9H85Sk7nkrnizbidCjNrJqxemV2T5w4BN",
  "key23": "5Fg5Xc21qtBejNmheHV9EEsx5ux8E8zFmckXLzvk51yBTQ5ur9HrXa55YugqzpKfKkCdoUyxyR35JChs95JvVvS",
  "key24": "cajeNBdAyDVNLMDqSD3h65q8chho62gTqNdorsBjHfbBBMjpZXZ5H79XhkQfeek9xwyjTiKQ6VRRhvrkNTPPW5R",
  "key25": "2Ke9SMoWT8YZcNqxfcfmidiPzrBbMLySjKw5je5bTGEeN9xNzTrpzLbzudWz7rQfZCYsDYqZPhQTMzXcMTd7bXfQ",
  "key26": "5Ete4hkvSjEiFoZLCtdJkg9SfeKG9DfjQCZZNqGx44Md6tNkL4tAYhs7nPZYVZjaDHXG7yXHH1Qe7ZFdauXEXs4D",
  "key27": "4CsFxnreGzovjiY6BXzxXypCSqiP2r9UoBQr71a55mCKTjcJVgDZcJ13Jw3HSDvgo1UYGUyCt8YDYHsKMeTKj2xW",
  "key28": "4movT5pMZUcgRGcH293bkrgRFkCQwFocTiphSRb8GVNJFrvf8qXUwVNuVewrNACSDPDmj81yLg2NGPTrSbhGWk9j",
  "key29": "2uL9ddSAKJvL6H8cgdbQEdhZUpR1PxNLJVA3vMM28VeGUsJo3nd6XE6w3XHuQTzdgRyDX3cJhs5245U21HcZMbKp",
  "key30": "2q6RdKXBRMVJ3cFGqg9YSpEfSM7FkE2PSa17QzAB7i2Bg92FdYqr53Jqz3qtBVFQWRRxC7GdodLTEZs2oHMhrzkd",
  "key31": "2xQqD2AXSC8wCv4wi4h48Epovwozi7Zw7jsgJzQkKvfPLER4ZXZy6ipQV7gme7idRsAPfMPr5vfZjh5Yf6adpoAT",
  "key32": "SpJASMxo4dEUKYxvzRtSzufwJYeJAFuEmY7KtAiAFe4aXttQakfHHG1TKk2amyPZLQZNxznCTo66MSU1Z6Bnuyk",
  "key33": "3DfZGbG9SCdUUpXZP26McsttV2QvorK3pwjByQ9jaTKrMHdX9D1WLgQsieXVyeXDgKZorq8MDvGMdYfc4BjaNe1h",
  "key34": "46VpK6sHWTq6qxfHp6bKsxUPpiZC1BcwfZijv2mu2K8zvYvRBQtRgtShcfZqaVEEm4JKvZ8r5tmoDGr9Wknuy3se",
  "key35": "4ynuCUJCVdwo2NWX3fbypkcXt6q2rWGxKHqgSKHkA1rHm5JiHkZyf1hrqZLGmbSz3yeBqXJCZiupuEXSRkKwNhhQ",
  "key36": "19gJ5uCZRufoCM3vxzTj1QNZuquvr6exmTvXdYXEWzAi7mKGPb1EtkDAf8XcWMQMtTkKqMKYwLMwQGX3AMPUVr1",
  "key37": "hRrBnDTQNfXRXKG6W7xkLJtrCm5LHKCgbZn6BdtH3adxna87ibwpzTpEC89xfzAV8xKcpC8gaWiTYyrRHb3otbB",
  "key38": "2kBEat77jJUCqXtJPFxU5g4YojVfmU2ukoZuT5eZG3zv5pWx1QSQykHTLoe65xwow2kGQLQHd8ngKwb3857B7d9e",
  "key39": "57KopXD2q3WYuTGgiCmkDGqJ69TVGmzFa8ydykReEXuhnyR5yAhwv84pycMTkewnHDiaURatnU6gkza6DKN1gSXA",
  "key40": "37D6VRHvZg1xFWgHtnCMUSAgrqsrfFS3mToYeD3vdTt8pmb9uKnqmqnM1q7BVL6B22NoffEXVCg73dP8jvQoWG1T",
  "key41": "XfxpSqDiVMzqDGfoWWomTKB9asr28mLDcMLeVfTANVLogbFLFZ1g457mwiSPMU1dTCWjYDCCKt3enrwJZJu5EGV",
  "key42": "3GBAJCG5qQz2mdqXRKeFoWBFouctNCp8XM9nDrCWvb1PQrbKoTbz49jnfo2zM6Ph3frMm2pTrtnshRB7BrSPiBi9",
  "key43": "WM9y1GCzPqez4nWYW87KYD9MXCQ6Fq2Qfe4PW8xVxR9pJ5Ey9gHhgyPhPYidD16SpGwbiz4342VDScrh1cUQivo",
  "key44": "2bzPQvFHj7mJpNyebDvaquvg5s8G5GnB1vYupeFAn3bHiZmqUh6rYQEMa2brQ91mpdh4StC6gbkfKiZzb22aoEV1",
  "key45": "5md3VM85UdJCBr5XBkkRsNXFcB7EmvW2ew1oBAsoUBcpzNnUr9zLVbqw1nHV8N7ed3K9hspvYyi31ZpVypq3qpDb",
  "key46": "2bXZLnEyJR1ZiJFLZ5FSLUwZRiYmkitL9BhtHSHgFunV9mF9xo29o1Qj1GMLCcDY65QwNfQYdj2sJvq1UoYD2VLa",
  "key47": "35CKuP5Sazp3Pjn7GVUQGFuRbATosiRBrqXzZPAhfmcCU5857bWt8T8AFWzfy3yjiNQoGxoTUSZV23r8B5wLA8vL"
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
