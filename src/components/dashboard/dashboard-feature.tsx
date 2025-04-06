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
    "4oosaaDy7FAHaWvEouW1SCWKQNxTubBNgF8G2Np2QaeXkv4eEpGN4uCzifnDJNknDRApcXEC4c2QDj2N5E78tpyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAZHWojNsAw8ePxLkbKd1twr8bjhyJRkv23qpSv2tLUAdDWbF8FD3uZTNzcnsPNvi1SHwUBWiydYdvVcx9QwpK3",
  "key1": "2CnNYnTL1f5Qmew2rP3odrkhmhahfzhi8BEP297ufUD6NeSdZ2cT9B7MioSTc2JzAfsztDeymdp8FafPPnsjoRUM",
  "key2": "4NtJ9ZJdYBvzNvWVtskZdyBHGSa5cqZG7GfFWDurXxGeMscSSMJFAEEL5nfHraurxHKY8Yh9MWbti3YY7YaSnFrx",
  "key3": "4T1o6M496YdAxT8aTwtZuf3DeMPQPdGmAsssawTbd5yjS5iCmb8mFZJ3bAfrK1HZsss1ybqCYnn5C8c68uvGyeoC",
  "key4": "GT35wzQqYXXzFX5FWeLKCupiciGPYX1Qyc8F6bF7Cdy5fmhG7Fw6zepXCpopA4qaT8aUzUF742kXbVCGW9Dt2bW",
  "key5": "45q1JaMY9d2gfFzVasD8Nnv5RSghjh9ZQL62qg6jfBf36guuj2nTCUEL1Uxcp8bei1CjHn3zpWaafZ1zNsKSuqNZ",
  "key6": "4r5F7tnWV6JqMX7PUHVFYg245gwacMrGLt3kAekSoGJgjcrfNU6n9wVUEyXwsw7s2hL98nSySG5SjnKi2RJ655du",
  "key7": "36Z2P1KUjSStiYx2JJ4Kq5u6dgeXLnFpYx18191f2TZJMMKU7zL78C4oqgy6hxVv3oMQnDSpGscWLBZ65MXUsZvg",
  "key8": "43XB5KLXVNKNuWN5d43Uio5qnJQZFupGsCteJM6s2y8t1xmvRgeXNeoZT4hatroGGApj9M9RJe6GHheah8ZHJbVp",
  "key9": "3Bzoj3wW6FGQm8HK2YthxRLKsqzrD96VQ5sHm2jcHWAZkDkosivqwYBZugmWT2p7Gz2GN4VmZyebfdrhnKy4W3k6",
  "key10": "Xi8vfiuti2yyx6GxTqcCCTNaVmGbDcodEdkj1UaapsCGegBpCAeLJfAJ3E7WjeNCC2LoMocttVrAKn9djz2XrV2",
  "key11": "8i2mo5JxmoZx2QQFn3vXvY8zgjFzJx6FdTQcbSgBQzaLCpFseyCEs13AFqjPzHsixtAvj99cAziXc3uhn4Rr5pN",
  "key12": "sniRZhdnxc592ZGoCzhqJWmWUpC9H9MHqcdMUSFK37aD76QzAA4rT3AnDP6rLbUiPa13igarkJ71LXZvNuj64nr",
  "key13": "2CZSKUUjSRZ79Fj8R3cYgDW5zH4Zm38bHkQ1MTuM3kLzETgtr7wr3SkDbz39MDQvXUgk7h5DTrvX15xBVVtmserR",
  "key14": "3ymTVePVrGXp5rH38wVRmwEvUE5FaehhRYw9gB8jkUU1cGaMjSTEePMYPZUB8PMvaLvdMcNYhhFP4kUHwzJRFbGe",
  "key15": "JCYb5dfyc9yE3qftm3fQmDXgdzNTCWMr7zsa22jEErwmFXtmoaaBrGckCWqcvz8s9ZohFFmutL93AS6dJs1QpES",
  "key16": "3Ecg9Mogw5wPgnuEUYyMtmL5V7o5HHr1cKmGxcGVSGSza63qs5kL1PG4eUtWwXTVte59vrU4xscrJ4Ex1ohmcT7F",
  "key17": "55s69PKyzm9Yc7CtySdywfRfbMUdFdtFPBZDQjbhgecWMgzDYphCRDjhYXmDRDbpLWnQgAKHDB686ZizpufvAtuE",
  "key18": "4Pwu77gq8TQexS2hKsCPYjwEhxHnsoKxYEpeWo1BfZvq6zzYDXyuX93X64TBsQ7AgdUDKL2Mb8NDYVsLbAmk46Aa",
  "key19": "58X2Xjkd2tcCjrBj3BWsdKTor51vnu3DGAqBUPNdTYSCUDtwLH52PDBqXiG6pYwJBFL6pYvRsBtDy6mzqxTtT2xH",
  "key20": "4Qiy2Z7pujuegvsmFvgn2AwF1qjUsChW4HhZdxB4YspgckZAPJJKnyjcKSe79rSN3EY4xU8jDZkWKr4ek7QYqs2g",
  "key21": "3GFjTmFuiuboPp84tgy4ithaH3c3qBX5pJKJXpCzRHB1irUD6HQ9TDgarJwiN3Ppf1jwaRaDqW1HVAaVSCQp5e9S",
  "key22": "gNicZZPH4sPxPAQa975jueiUXt9VhxThCkW6MCZK8at5EQBi9urb7kPTneYZ7KBRdQbuYVgonGAMuNS6F2RXBg7",
  "key23": "3uZ8BzpMHqrjeyxPFhfreyuAmTWDS4g1u1mHgrWZ1f2rn9hi6CWjr7Q8DC9uvaUTYG4vhDjvrDQHJZBsDTrk3q5t",
  "key24": "3z6WizhXmTgT7bhLSo1ntMtFxr4mDwbLUQ6ARFu4jVN6vivTYmzSx8VeEmrfhKWHkPSZHLTocVsLFnbbL629pvSn",
  "key25": "5XNqHN759dNSYpxGUd1691Zbr1VCxAJZtmAHkaXSf8pXfirtGEcgQgaFFjRfPtL9xjCR38vE165pKHsNFr5xmuKB"
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
