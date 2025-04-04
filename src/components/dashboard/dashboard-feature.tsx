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
    "2vnCEW53NUBRUXCMHaGXq5t1vPPoddDfJNAhUNfM4Dgm8eqmFa1MxeeK5dXGGUXFJ65ku8nBcCBCfhVc4zsmoDYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oj6qxEYZrwfLFC783bqPDMjgdKzpYRmVjVRv5cVQaQSy4TyZxonjP5GEveGH4rdTaN9s5gT2ibZNL84wCbMcpB7",
  "key1": "5Lm7yE2MFVqdSTk2tJgG1XFywNkRUF3Zqrm6rZzooo5VhfuqzTwyevMrZx15oqFBXBrJ4Cf9zCDn4aYqrrxDpZSR",
  "key2": "5YF2CFCadPgtiYNktptEYybdKXSUsLCfSyXCa4vSzy73ZqaXndkgtMwbXb7H8NxRJygcbHb8i9Qcx1CRcqjkbXob",
  "key3": "5rrEbitjiAHFDM9SQYNgMczV6ojcMo9twsUGGckP5JGsPbKm3yC2zt84xetoyeucdfF146tx27MtbdnoEHgi8sUq",
  "key4": "3WXvu2CXD4LXBfHc6Pp2kkG3PMEdhXg4tmbJCdx188YL6b64X8ne6Ly9mn1YoogcgucBP1y7f8yKW25GDNBtF2s8",
  "key5": "3wzxQRw41jKggALTExL3DAsaTUvxWSvDpB2BQxKr1TJSYkgEXmc9vm7r1kErBeD3eh7a1NyfAKrhN3p4RwYJfetF",
  "key6": "ADMfQ69KvvCqSNWSHsi7LfiaL6qdZZYZUBS9A3w4LoJUbZVY6mb265obRfgykPFZM26QAxpt637iuoXLnMpCve3",
  "key7": "5Tzf7Yto855R7X5CB1BpoNTdvD8sb7zFbStDH2F11pcBHeytJrkP6Pu6b8P3krCLPJsn8WNsvotfVKBULFY9H1Ly",
  "key8": "5VxbqEyanRLyetJ5fDNoyyAr1WW9XLRF8dekyfjQsJRXszmLoP42vhBeEAEX48oRU37D3GPnbaNMgumLgzpAVxHQ",
  "key9": "mXgYUxhKTCd6mviAgZdLtgPixgZ9CYFzEE8J2K2SGBX4fusTd1TukfHXMEemSzciEKBKZWgrJVeeAa2qrYv5rgM",
  "key10": "xxw7cvAKEHmPYCxjcGAywu1z9Yus6J2CfiieD7ooeuuRSXBPnFR2iEi8xw1QDjeYN6PXxdi8waZQWWfZrrr1eAq",
  "key11": "5mS9UmExmV64cNeSVBhwTdSQuJHfv1kZe4g7yjxW1uKpKmZsPRugYbCW42oPQgDkff3oqiTFDzMVY9wZxe8cgNiW",
  "key12": "2bDewpstE7t66jCziDqKmBNzDw8T9aQ8JzN2sgYtZsvxUE9KMcZB2VABvq5159j5XRCp1o9yupN9YGJfFy6Xp9xx",
  "key13": "5uTrtPNBuwZjv9EJ4sDrbDqdLXzpSUbqbxF863NtMbVF2XCqGVCFoeGSpL3ZgnHtVvpzVTjmrkYBHVR1Xo4WEUNc",
  "key14": "aUvPi69rqpSrM5D2ounGVt6ckx1KungtwaSthzTHis2JqqpAi9FmEgmQAJGrcf3WXmbK1qiGwLxPDsCMdeA82jN",
  "key15": "1Mr6tGkoFwpCid5zL8kUHLA6FG49dStyGKnNm5HowYqXLynxGmvi2EDBzUJnKsVZRVJ7auDcbS8jkS9TEmwW6t9",
  "key16": "4o2pGRfRfB6Z9TfS8T6bdxnqowHAfZhYgs1ksaSK1Abkirm4GfLxuVkZCVgkXjYs4BeHTkUNKDb3vK1LqWzH2sq8",
  "key17": "63b6bMy5pvBp2Kjp1A3suYhzWAnH7qFyg3onVwA6AXLxTZG5ciuwpAHDBrn7pGv28GoZ3qmtuUBkojhV8C12Bmet",
  "key18": "ZaZvgNLDsDBVu6hP3YGLK8xP5LxE8uTzYyhKUh5PR6cThh1cmT3w58cevdY684biEGpysVqPACP5VupabFR5egT",
  "key19": "31WwHzXqtH8rtgHyiPkWU5XCnhkABVYuEhVFZpW9pLeTFpgiM69RmmMh8u16RoJUV2mYMPqw65jfvygXMiN8rYSV",
  "key20": "5dWaBytumSqezfaRgj7qv6yvsMNVxeaiKLkXAApVDQE2DpEXcgoww1SE6qrLfoCuVPMqtMLjw7fY8yPNYAsQQaxn",
  "key21": "4Z7ZMfxMzYjYJBPR4tmbXtuL2wZgQ9RpMfLEV9Z2F4Sk6x833Ubtvysm7WCHuv3VuXL4vgCyrq9oimPXeTUhF67G",
  "key22": "2bZaL5hs9KCmWB8bdeqJr7xTAPK1k5nC58diqRDU1Vg4xRNzRk2WCCdcUiGieaknJL5cLoSVqMxaH6vkUdDQTEue",
  "key23": "3wpu4agW2DyajYGyLWdq5UJ3gaRbPBUT9CXZBNsM7GVMLkJxcqUXxTwCX9SfZz4QaSYoFsJdm55oWWZ9TEG6oBgM",
  "key24": "5XVhGSUbofAshpyCBAqa2LurwcdJAdtjv3PpxREZZjq7Ksi5HnpwVJfGqmoMumakcrrxhbLr6pkBcSuYeFn1nBV3",
  "key25": "gFvtVCfbFh8tRLRKxLinowrC85cX2yC9kzhBVzXhgFjJK4DhBFaS7mNbKzRaNCiEnFW5PmLmubcm9n44ffDSDWh",
  "key26": "25A11FboCUZ5LaAiGbyoQmorhWNx14FFJSJyieuv1jns4HDEaQW5ms6NpNh4vMC66rEZxnqZZhJ6Fsh7L63rpt9t",
  "key27": "5VxmxXHtHW8ELVTKde5Yfj14bJscVLUo31ywG1r95shju9vbM5Gh8Gve23K4ydav9XHDXoXDaztUFvBfG6KLLp8d",
  "key28": "5xCJQ4exc7tHSskdWDwSZuYUWaA31jGwN6EdifzEMmwt6nCckMK29ChEnVzmLx6ddzuJtGByrMSfGUH3wVvuG4xY",
  "key29": "31QiU43PSJcCGGUq4Z1omDo1NqbXQuavuA2j6t1kqMsQQuSYXK8qLuVmDVWgJ9pnkbdbPgHyJE2ZPjijsDtuWvWy",
  "key30": "42ae8TaTXrkwfMUafeA3y7HMTudK4FhtaTcJ8cBKwpjFvEoNG3b76A5kdxBeFsAgfLgB6WXQExkJYXSs34yByHxP",
  "key31": "2eGkmiptverPJ2gsLNKJjfnJtvf7xrne96eZhvC7eXMPodvMZ2yono1A2znds8SBHUqFyCTWAhMQnc8yC5wEZ2Nq"
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
