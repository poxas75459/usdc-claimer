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
    "ziK9wY6RMuwexUPaHFCzDqJNiHEc1Ngw9oJDDk3PXEPkwXbDTSt64DsS7ncEq1eqjwzwEqJVdcHpjmjxo8dZ6u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSfRnQR6gpMkviUBRJNquAi3txYTffDd5Hf1BEB3gzoMh4CWArJoCykzvzqzmP9WYEvLQ8aWBXM6FVMiGW7S8At",
  "key1": "345zdQrByUUBXi6LaqQEHkWxD5FRJ7L2eeVABEz1rNXr8VeJNfVgp572esC7nMLmAmkNMrB8PhCviwinXn2Fepz6",
  "key2": "agf43M3ou4WNu3rBRkiLrkDAj7x7ue5ZD6FsMTbDdzeBYAwgDLx6VjAiuZYeRrwoK8iEZCL7Vjv2jMpyeuVaCGR",
  "key3": "5pCX4fyjCoPNVu4f1ispw6gbhg2pUqWY5535XwRk6xN3jszD3es32FiNVTxfLGVt5JyNFv5hB62RwtWNDkDF5hNL",
  "key4": "35m8nNkBVSSsr19igaPe4EVw8xmbWoRkfUPKQoty5VUBbNKBbT8zexTXjTyuetGvy3uPP5wpQkxTFXBvUKtvRMeU",
  "key5": "4TiJYsQbhCKdEqXSN1q8zjpBpB29vWvAEeqAC9e9TxshPD7NTG5ZCqjvT5RdCE1tfJCe1zzCi1CPknX57uvF7isv",
  "key6": "2AxVLizYwYDpb391rTxiHAjnBx31SiUBZR6jcgpynC1Y2W3U9gFv5tbPz4sYJrAvvvqmWfvzpayRuDTbph6q8DyC",
  "key7": "5u8S8Ln5u6BmMmJLaPs9WBkKbV6MNPUDaq88xLTMVrvynF9fWWdBvo9uWJ55eYbomwucFd9HfxVdyrrcX5xnEFdD",
  "key8": "zdPFGZC9gNPKT7XjxZPt41gWtS69ZvgsX1Z62kXQbbnThrH118sNCD9LEzu1g6ZwTBSDg1wF4GfJPP4oMxpLTB7",
  "key9": "HeDLX3dyUM4ptqgED1VJFrSXsTgPo2Sx1QyjyBMPvL8XHUHNaNFcyEE4osBfwQV93yPAQzin3bzUEyRHgFqiL4C",
  "key10": "3RFXbdoA9C2qsh3wFfpP58jTcRXPrqemPDFkXTbRjVtpxaGKm2K4Ggva6z7VQuHaHx1iFv4mkUoAazugTyUFpH93",
  "key11": "4XSMcRurDgA1Cot8zPjK89SLxwUDzcu9xxJ8yQCyYoQKk546TKEJEp52LY1vBcAUJkV49Jjg8xXH2KNHvDqNt234",
  "key12": "g9zKM6vv7UyQoF4YYJ8ZVbbtPpYxQWHyc8qCyzP3BwGXSS6gBJy5o4NyfgcRNjP82gWErbSkN5DuGqhtTb3aZ4B",
  "key13": "2U5HT1kXVNmZvEV86MZeZJZrewUeKXq4LRzWbW24bfAXnm3GRS57DfefvcjkpV2qtivm7dEtr6VsFJ4gzYPnsLUM",
  "key14": "5ZCPu6TfqVTcGj1ZbydKZwmP7ZtXtfKVnsb9GApsANE62hT5MYTzZgNBAMwnvArtAPgjG6f8P91VPTxhnwobBt3i",
  "key15": "3LdsLwpuKvGg2tU3VsSgMbXcAPMFuGL6A5tJCPAtNDm5xsmCdLDzXgmaJhPnPDa2vg566FfwkwZk6PGEdrmQ9hUJ",
  "key16": "2UdHaXJrn12xhx6Mh8vkMdefZB5mhhvEGTo3pJbEyPzfDNpu5iZWgstyh3JQ5ccBVNgyj7QfRQ1nz1q9a3Cn8iKU",
  "key17": "2Q72XfntjgNpcr5Ts8gWkhdLXXsgHVwEjCj1DFSSCKdUEFz2fyVfnK1SqVqjZK7w5r2D8X1UoQQUUeox31MUnZYY",
  "key18": "2jBMUxFroKmDJzohvaUeaQer8qTqd8nM7k2vUUiu9ysyGqbSYPPfxHXo3PpNx8x8ApPrcmaD39H7P8aTnJhze87m",
  "key19": "3N2QcJiGfyJ29PhyLqgWMZosh7ccPvHCcXBsD3Q5uRitJtqwEg4T7W1gujUw3oJ6MMmD1yBVjqhxrBBuQZxVByHJ",
  "key20": "255MytSf1RB7KEpCdaWbkVpWcetHk7s4AJrmGxTYBPXoKqJ8Er7BnmaEvkfmYdi9m6Mc5x4Lx5mz4zvkzuysPLHF",
  "key21": "AKTL2fXUKPvVmKkurrNXs3gWbiyze8F5Gd6sLQRQmuV6Q7sW9oRhSs233FZcVafuSVdpaEDKfzeqFedz9sBMhLz",
  "key22": "2cfahAF9HwFwDDcfhbnFbapWuys29RUuNcCMUUxxQMwqrMEtjxHorTqk6jutPFE7KXzS1kGfzrmihShvwK7AWWfs",
  "key23": "4qNzFAwoS687fMMu8rUj4RCGXfXVc9cN9vV8h16LzfQpxbX59W9DESWgcYAgxQ3woin22HhzsyPH8PfthGRprTbk",
  "key24": "63bcqPFrVzJ6x2JH2r6SnA1Uep597sTkLEiX9rVqxvsovdGHywi94V3zvpZBjw3GrKB7Yb5mmWvxuDfzSN7cqQiH",
  "key25": "2N35ZF1C1E6mEofFCwygAnRf3jhc1CXEP2peiTjgS4nW1SGF28yeY7onBLGagC32vA2TMkSC6tPmt29vofUc9Qh",
  "key26": "62wyYzu8o9YqnW2QHeDcXiDa96LneZNx2SzUiQ89HtUfbTGcq3vzPs4ZZZg62nxPDjBJdFuUAin6duovWF6cyrop",
  "key27": "2rMGL3wbspcHxe38jPzda4S22AAVNQmTWoonPNDNTZyysfvzhjyGBJUFXktTrsJ47WSgCRfk9Af4Gd1S1e3cSchn",
  "key28": "5vUvU4aKc1sD4SLpMVdywfWmvVdqpHVbEHnMefx6GH9afw5E2EYUWCwNsm3AN6EPGwmd9JYydFhbeo5r7Y4hysAp",
  "key29": "4B8yd9e8w5urLq2YeLTNSxm63guQA2XJ6JUk2DEiFaQaTYgpmHDu5bAm7F3dsFw8LGDSPDqjZAgN2BunmbkQCbqE",
  "key30": "444o4sxv91RMDtDkr2PR23iM6pehCCQZnbbSGWVFmkKB1brUNsbYpZY55QEWhrru56z6mLSQd2WNPf4ZnDmAQrWs",
  "key31": "5HnsEceZh6c7ddrS4pkcZmBg4S2rgUv5tySBJEiUQ8TkBvznDYhCNkBpdTkwX2hwPufpNTvMawirWyMJwXtCHJqJ",
  "key32": "5aCpcxMzcbKFisYt3oet1wBfHEAxfXkfwgehtPNx11ZNQGaepURAP4GmCSzAK82ehzuVBLvEWWowLbtJCEd8u8Si",
  "key33": "3DDzPWWFieVZyRxpKQgE89fqABmnYrLTDsBCYXgjaTZNucenrv46zvjqBmWD1u3PiwqmRW4tfJfpns3CRfPMMTP",
  "key34": "5rUjbyuNp9twJ5trAyK9b5k31WXVAADW1pncsYD3PbeB38PYZnaaANUkhN7bYKGF3hWoDPopRsYJg3ngCrpEgukh",
  "key35": "4zZX6Fncw1xvFDcumyYWGJNNMfCd77EfriKumokGR5fyfutN59S2bryqs6wdZaK1kUTQoEKnWy7NtHDgHLDLtqEL",
  "key36": "677baWTSaeeTYYyLfRfsaS9uKU5E62Gfxcy2kmaV3bavBxDp5uqr59Ws4tGo1yxadSembnYv7kfsLXKPp471fXkH",
  "key37": "441oxTrjnyWwJdotTVsRrDPyZdvFpQCxh4HMfZhm6qBA5sasCM2j2xsyGjpJCwJ7SSbvAPWaKK3a89ZQapczv95H",
  "key38": "3taAydFqPnX98szKw2xL7Ud7vNEsPpW79saGpC7WvDeBKCQEBkbKG2ZzR348SBhHLgaaVBp3x6KPmQwEdqDv284p",
  "key39": "2zEVrKwQ8caqru8ScVgcoePVk3xBbbzzHcgU5vqd5DovvrNWov8Px4oyDL6KFYH52jmS3GHh4SbLtyVZVisJY6G2",
  "key40": "3AaY4vWLtsZw67MyE39g3BAqhhpSppKACG3em94XECJui5E5CbuJ5r6JQ8XAeGvAzhm5HiTtbgKrUJhzzzNMJSPJ",
  "key41": "vBFWsUfoMJCcDXP4vqMouFKGLYZsVF9j3jd7qVHirRTQe23qAY7Kf12QoUC1859iZqsc6yigDytm68jrxi3YESa",
  "key42": "q6vjaGSNuVpZawCXdbL7PKDADwjPGPT3QM7hk7NLWZ6fdc4rfXHCyFj2crMTwV2S125qGVY3tunVMUDCFA1KGK4",
  "key43": "3wL7w6mWMMSrnztutYUZ9tGEhxTbLSR1g62FGjshPoMdDan8ePSVQ54zPdeuytXrWND73SQ4Xge1izXvgU2uTHoG",
  "key44": "4KCFSbFf3Gw3FULaR3kPr4Pfbp8yyreb5cESqnxsy24HYNVT8TancrryykE8p2zaF7VjVtKJTVCXnKyaNfUZQzv9",
  "key45": "34ij8fiM114LGLtyTvjnJiSjRKs34Fg61samZ2A4ESCEikXyKHCSSyctkHfqJ1TBeHpneDMzUm8tKcXgiot435Ps"
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
