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
    "56S5E3kczPeTLwnSrGngjPrjSuKLtNG5KMr25mTTy1AJmaV2RBVqHNeLhXgEwCPq6oZqECjnwwoZhTHGuVFQxF6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8tbKdafAdKFDx4Zydzcq2Jr45M5oo4YSV6AbcexX9LPFK4bsR26scu9J9xu6ki5X6mgkqT8MPVGexae7EGahWX",
  "key1": "3vYA8q1No1NLcTNc7FRrR2KAQHXF1V1H9odcpZtjV1iHgQR7HBwxAEvSwXXoeSUFHmNDsuwYQZY9151CCsiADBLV",
  "key2": "4qkAG3rp47sfvfuFhrfEmNG4Joah3u4UargEJVguMviSidU6MEFe5HQiDE59cMEzQhiaEHEVG4vBUHqnNZygyBL3",
  "key3": "RznDKauf2hQC3vjsnx1Qek9Q3jC16xqRVcCXrczrmQUnBxpLCUGRoRrGnkikHVwAkM95KW6yspBDbvY7bTAiqJ4",
  "key4": "SmnhZqXddib7UdBLipEzE3q7bRT4refNrc7z3fYYauPmLenpd6yVo5T3xNVuHTuQFsTh4H9HQ1TogNRbaYNU5wr",
  "key5": "2Z6TmGQrnXj5xFRMjBKuh7HefW2BZ49FZ6Mp2yfdFGHi6mHJk98fiXvjRSzNJh31DczL9Ck9dSFxz3Hd1iAmjL7h",
  "key6": "4ZMoQSBmns33KHnk55xs5zJSkMXUPCmExQ4xks8joLL2Z3QB8Zhq4Kspr7yaTjWaea1QUg1Lscoqbianzt646Nfr",
  "key7": "4tipq24ydK6QBTkuqyNFfDBRGpVUWK4thYGRhr3CzG69te8eXpWZ9zznv7Sk86sUsGCt7M5JcZYP3xsvcPYcWE8j",
  "key8": "36Lrk3QEhuoRGAmq5eGYFhopXAkEQxw2Y9eAfu32owfp4hTcebDAfNqZYb7ZZrbd1PJrju2BRrsDMa6sCjQNgn8Z",
  "key9": "5kwiz6DhBEo6SHE9qRsKcsswwSMXUQ8sXRDv7qSmcepW1Wp6KfzMfsXqJZE92xLKHMUCSJ36ZfbRsAmxFwuHNAEa",
  "key10": "3g6fDRB2uvxnAX8vH9YxxjVxjZz7qsXJsbNqwu755zwA2MHsCaBbU156FKL69TKVskExDBF1GbPGWgw6Mpb1eSiD",
  "key11": "3nRiBVMgnThydwexsecmdxC2z9i2zzDA58CS8hw6589xi94EgXvjkP9WCzqgAvArt8NDW59xxGE2vg3a7FZ1cJyJ",
  "key12": "4dsAdmNqDKcvm9XbgG8XGpwDKbUcLXdEa1W3MsxTVMpctNdMnDoVZckGKKXLSi8Q7kw5meAhW43pepE8p4QY23Uf",
  "key13": "p6977bUFzNNZbPG6eWCWvgHAbHmstzfayB4xB3JvyH7HJrdN435ZL3UycNC6MXzEE5yADBrAJrciCKLbkx7p1L1",
  "key14": "1Y2shDouUcvXDwtWS2ALj26yaQta5gUiCyBgqk4AnzRjuPfWhcQZmrsD9NouTjZ19LrztAsu35NUXp2pP2Fyoif",
  "key15": "5ygYQP5cqzup9LHfEs65FRWEjY3f7on678gL1nNmFwoAn9V4GFK42dvBnvkjTH4RhjPHogmLFiwLctLaJuxsuJzE",
  "key16": "5Bi8UUKi9DPUgYZ56xL5VHeTBVXfwffRjatvDyjs2kGbmyeLSMWubYhM674Y3kkwuz91Ld5LpN6HJyJZCtyzshtV",
  "key17": "25Kbb1ZrnDnJsSpCzfk5UuYwSYvxzZExR4BzqWSTZZTTwsKSYBYqxwfC6GmgtQomSK1wQ1PWSdtdcTM8nYWEXVWX",
  "key18": "2zu642mVVvcd67487JsJZpSuK1ECvkSYW6CiAuFKe4eV89Gf8ZbpJXxHgZeViNt5jZPsTaMTa5WTfxmJKKKHjF3a",
  "key19": "38jESYgsGf8GQqrGNYaPHbmn72nasWRJSU6irKysohvuXKY754qQ8m3YqkQFnXgjGXWBSaJ4NafyozRoMiW6kyZc",
  "key20": "5wN8kifDJo5K1jqwjRKFYKoCA58vusHZm5AYCqmw65mXLsArj95KBx41DLNex7b3zTEePcifQXxvNAAEKzgTaiwb",
  "key21": "DUoGN46oYfX1iRLXE8AgqJpP2BkwRaEyStUYiqGX3VABnNtPCPsrsWgT67xQwcnt7ZobmrRHvGSbK2WPF6fCL5V",
  "key22": "2vi3sQ2XFP4KdPLuvXQ5j9wNVjgnmnYqtJGm7TBQHJkUcY6Dq9dN623X3tdw2YWedAemBghJWm8Y1ugepgxL4yRL",
  "key23": "gN1ne2UGRP8jbBck5UMZGNBfyv8RhK84yX49kVLe4HJK8gka8E3d6tNwMNQd6QkvySmtqhU4QHfD5xFrwibNgbc",
  "key24": "4pfgVTQLPpTjvzUeFKzdriY4LzDLwEEUqFrQtubNv5XMZ5qcke2jm9ZeQT1KU92yrFxo7uf8mvAvNCLJZtkP4Kcx",
  "key25": "5t8MKHtaBstsCKsLZkD6k39U4WbvTW12VdYgrXvEHr7PFZqruwoSZ6cenzSF7apR33SqN63VEX3doME9Xxs1a87H",
  "key26": "2vgNu2c5ipAGD4R685xm8B5EXcuRFrNWbAJQ7WCPwP7HNKRe4rELxsyMdRgp3gd8Z6XFTRV9FdLPkePb3v1kE6Q7",
  "key27": "5MUu2yMyhiuyLHqsw9QynxMe8zBy2jDJnYcqAqwFaT5Ga5R9FsQjUKmUUp6jogeSid9VTEyaKezXPrhSMT8QkKGG",
  "key28": "4XW8Lc6WAyiNQLFUYoK6CM6mSnzwTKDdgrZaSt7f9cUyUAp1mg3DoDAX5L51QmaSSMyEp3EUxTajiNeDn4xQeguE"
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
