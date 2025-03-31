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
    "4PRu1WBSAELkQL3mDmHrS5GWux6yoLsMQDZEHCbeaRL79iBVDtSHQHEZ4hpCPD7ZUbT4nNfw6nCXsQZ9aPK9gUL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BNnWns5sktgjuA47PfaV9vu1umBD23YCmrfTL3FZpfnUaZPYxk3zdmSbfMRXSRxSrcJwg3setcPNEBLgpdUGLH",
  "key1": "4T1ZwcvZUVj3rS8BXWG5B21Qdc3z511LpHctqXqnppUcrxDYGrkku62oHeQJ9XCRSgMprvDpqKUwhQSED3pAsT76",
  "key2": "47KRfFHuewjchBs5dvxWywmJYqjiHJHtD2pornturacqKhBgd7qzkv55UFBnrmZ8rBhxenCDKbFyLx4EopcWddBU",
  "key3": "3gsH7H7pdZL8jqCZ63jSQQpGepvkoN7uMTZ8iWDPPdC2Q9QjvQJqiBK41RGT9duD1istX5woTHDsLQ2Fq7HWTuct",
  "key4": "5iKkKz3sfmzxjyb3o61ttypQfRA4tzJ6yYPytuyKgmMZWKGcpU7p97KyKRiXQf7vAJUC1CN2saeYNPg2ZT7d8Bnt",
  "key5": "5HRPseAGtGiMxDwTPDqRPqTjPmCNpEfiF2qbr5KLbA2d4ToDGCN5uHxASiH6sTiKXUoW1Ump66qaTmoNK5NhsMc2",
  "key6": "5ma9sPmptjp5VrXi3rhpsbknkSZ7i87dDSK131mLhdvMaDpwazpwJVWavigansRmZ7bBZRqwijwKrA4UM4rtbJfV",
  "key7": "3sqqP1EiNkz3w7q9L24hFamWvUALKGM9pjGhihu131xBB3B5DbjRT5yCxbYPvwd5nUJXAXioizN7vN19dSFFZ5HR",
  "key8": "4KQodzChX8fgGh6rRVJ6sxW9vV8HMxpqvSqbfVp4qhNYuTpvhShRhYZuUJaRJ84prpqvn7J617Ckz2tu4DpLg8Ur",
  "key9": "5tfSEwActsgEbYEBnEuVa9afBYEth974ugUF7xU4WCG1xEjwrHrhM4eGFbcQ4t6Wj3L94qPJSRNJfjDJQxWemT5U",
  "key10": "kJn3kGsGDF3B2rwW1ozopMt42zQkzkvAAJsJv24DMhd947fQye4dUYg1gvJ9VREEGUk2byMKf9ycFKFSSJUyyEk",
  "key11": "4f9iYLjXVVePAdUrLYTTg4WYer7865CcV4ARFiPhDmEs9bzXmcYRLgPkQYwN3FibaJa8XDKcfCTj1cCyqkxbBm3c",
  "key12": "2XE2jrMwFyaksHa8iSFi3nsif7eDXoVqByWLqoKF6qm62vM5VWMgHqWAL4Rz6hpa4VtB4WJcaYCwxZBAx4m8jjvZ",
  "key13": "3gzXEhHYWpMBDvRfWMMJ7JQcoDSfUpArPXUZvcBwiHuJXVF8QV6xZT2sroUkXXZUrEfbJSh3gCpR5LKSVosrPBQz",
  "key14": "3yujc1FeHUh88FVBBg1Le2voWFhZ4zX6ZGfa43WAJXC81cF6ysv6i525L2pe6pXYj1RNenPCiamn6wxvsrN1kpDZ",
  "key15": "5becgdipqkyVmh5n5TZSbbjvGMbr5EzAZMsPtBPoyc36Sc4PBkBVDYnwvoJi2WmgeKNP3w3CjoNbmCCJHSnoZ4Jr",
  "key16": "33fUrFypH2iznsZow6hxR9uvPyva4ZGtmx7kVPoVzzRp2drhLXPa1obpFTUNUxQPxt86XPut7cq4Z2oPDRbWZgHR",
  "key17": "3Kyody6A4bQQ7CsKWNmh54hQZKSkic3SvQppFF8pAqa9jxyk9WMHiULzYbUDPDLHaEgbdfgF2J3jdred3nCruYqg",
  "key18": "5wMasL13xpLhEt8KFsPpmRoGYgM9kSYrjyV4KqT82vL4rM7xJxPyPBEkHFoJio6Qt3yErMvrK6M8WqgGqeqEzVqt",
  "key19": "2udF523dB32vTn2zsTi2CP3DKbbUwdTxsNyGqRQu4yoiyHh2M755FFFPFa3BYsirdKv8eEoq76Xhtcn1rgU2ynLd",
  "key20": "3g9XAQKJDnuTVfxb5wgxntc86TZH7f46KW6gM4UcjGykwr5hN4V7a72b6NSRQaN2e5exb1Pb7uxWViFrzrAiEK2j",
  "key21": "4PTNAEzkbHSDRmw3r7jAHUVsk7Vn2pphSNZdZhqQkqGgYNkCyX1gwTiZ8XGmWysvHzpMSg82yRHqK27J7ZF9jTHU",
  "key22": "a6NW7FNep6QmV6g5wPhJbdeFe3E3iVVqq7SupUaiq7bQEAivhb7duCWD8R7w2W2e25qMaw1YR4Ad3WNA191d1no",
  "key23": "2EZNDfXjqtUbFYdLH1pnQAj5S7ZSfBCyfhFxAB9U45mYMkeVW7TXys95AEwDHyHuyaLyF57eKAv4DxVX3pvQu3Cw",
  "key24": "3G1P1A3KAtShvHBpC41UkAZAyt1KrGqSxsa8ohzfZGCasHv8ANgi6WqgAQ8zC2vWZkmQ4oZfEakS4ETXWPLodgFe",
  "key25": "4pLVeTuDBjHkumqoZKHhiJ6tMM94e4T5JKhy9oRHwc9VkUKBxQt9L6kdar2NhnAUMtmNdUEBtMuXTNgP4wVsgWy6",
  "key26": "4LZnNnLcRCFWnBCqn3F5cGCZ6qff5vuGThrxn5ABcRTpfXf7EHD1zyy4VDaSJvmR9JvETzRDvZtiU9E371okn9F2",
  "key27": "Yu2hoQN2sP5Qciv4Tzr3MMAmmhWedjhdfTXtJD4iGsyybzJh8BHDyqyB4yrnhh5CicXzGgxbgWLxJ8oS9sxLjqP",
  "key28": "2fNfgYwJ1DLU8FxWxEPTRSqsJebrjbP8wwiYqVsZZ3vYRAkKvHNUyJxVi34JWGnKxcTx8ddfM71J5A8ngppnXJh1",
  "key29": "61vFgEaRoLFAWgTBAzqSeRpcihMad4VF4yCgGXaiPx3qhJ1YizA4YULMx7LRdxZHjBXMjVVkCpH9qVALXmWgxHNT",
  "key30": "SuuLh5S9yf1s44Rr92t1frx4nJ5xu8nyqaRFVNfAuX9cqZooM8YNZvGVAJ9jBduwtduzbnn8F677hoKQQRMg4KF"
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
