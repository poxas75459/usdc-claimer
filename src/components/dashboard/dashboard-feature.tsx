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
    "3Dp7j68aM9NHPUXRweP4p2nBnPJujpoNZCVonaizVsUkmHJm25zUmX5VkQK9iTM48XK7GtRZ63tLwJEwjpbhC3mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSJ8DphuoPW7kVYN2FwLgSnCGPPSUBgSQgnQW73AosBWfv4XNiC8twxkPFr999ob8rTG5VmmNyvSKeDmy3PdyQZ",
  "key1": "28nfpNRGJEr5RAtsTG6jumkSNAzdZmHHqe4mpQitMkqreeMRzAyjzhs1heveM8ZpBnsfdruXmz5Je6PzALUMWHK4",
  "key2": "2nozEV74zKf1kgG9P6QHdnyMAnL5mTDAhbb6TaNgBWZGqo6dxd5PjipBSC3vvXeJ3HTzQwA9QNW2h1yE6SqJZfGs",
  "key3": "S8UmB2swcrUiffnhx2m91WFmSkh6bsrNAQXuJkunpGpQGymYBtFZgwkq3m93YekhYZLp1SD26QN7BXCmHYTg6yL",
  "key4": "4nWcfxfxZ9yFsQeV4cBUFYSvhHtiSdERmsGtLPhRo5aehHsxYe5YjfDZSKeHqob3nDufbhQ9vLQUnkt7oPg3QQTk",
  "key5": "2BFZi3n8Li2dQMPvUxnjVa2nmqmhuBxfKEpB5UsLmi74fguiNAFAr2LpYwanGyYX6UA9Jgmu9wdnSpMgpRJsrebk",
  "key6": "5BzGaJXDXXdXHAMemGrqceyJYyETyRco6CjJunH6vydTEGiYEgToC8dDMEZrCa5c7D2BZP8zGHWiMuNSPD53sdKn",
  "key7": "4bGyeXKgajTvj9GTJpyY6SYUSq2NgPwWdefA4dWjm2XrNhnvq2LszUCMbbn83NjYLetRrRTPB7JQYiYMga2JXMt1",
  "key8": "53rErV7ParRrxgfsfayNaTvmgS7LrL8kYa6z4ix7tF3eBhPG2BNXd9EFqVeyWAKPwgsyeHQvNuh7pRFurPrFW9fm",
  "key9": "3NSvr8WE5iMv33F7K7eVTwZe9kLgpm1doNu7D6MxKBosz56HtUAoAu7MqZVUGFT1m6neWii7ibNUDDk1kXw5LCqy",
  "key10": "pwhBii3HDzMv4tjxevWW4Aj3S7GF3m4ojfZnk1vyQbavJ4q9kjkA4d4CrTQzQQxr6uNYQSj3uKwiceTVWxf3gW2",
  "key11": "2Uva8hGCxkqMuW6V8FVyLhDJDNHzqx8M2NWq1as1bz9E1HgVTLW6EzjPGY8cfsV5MPe3jfeCXeCtpqZ4KvUtqrWv",
  "key12": "4S8U97jmPYPWy1t4ffZxZ4LVenewztx9G7nwckiEfTJA94vevpmtwyTeWNBVY2BV2HnCqYRixnr2juvZpU11fccj",
  "key13": "2KmWVR9huUkJgwhy8zrCuu9wdbjvpN8PFkrorEjLkS5zWAVDdVMEeN33bLYCAV6XzqpgLY5mEQAH1AYhrAUaJweJ",
  "key14": "3tHdc9og7gM1EMuG2mizK1PbXCxkFrtZ1TkPJj8zBsUsCBjRTXGJnmkLqgsy8Kpz2tSYndPUTYNp9s7crGyBy4Wj",
  "key15": "5ZSVTA6ymcqgkKVaWArWPXn21nVn5UDzM4CbXur8t1HLEMG2eejVGZgAN9XN6KgdsoMHoN1hMJKizSFdrQDWadgm",
  "key16": "L8CQuyFJXzyy72uaxjNTJ28yHDwRAvTEZfHeVnDEEBBatX7eM5q3YCxJ1pcBj96HyLC12FWjhbbYSXNYRPbZVy4",
  "key17": "2vdcQsA5hw5yEutD2paEYkkKruErcbfhRimvmFQ8UmCbs86YHuixpHbSWdX2wbwqmv3ttiJGEtmacwTzmfoBYxfo",
  "key18": "25yAJQDvRCq1A9d9AousCQUHWYh8psuNzJaM2gFMtSHV4Bkyb4H28dVzsd5BgNyzfbKyjuzXcKkbsuQS94opH7FJ",
  "key19": "5ACZGXS8a4vjgDnmEBoZz32LgpWSXyqf2Kd5akAih9xNoYCcinuR2rNtfeFvBMjnQmR4ptva8nWCZY6GZSsLthmL",
  "key20": "4tK5pKPuXoaVfJ2ueoHGbDhsi8C9Fb1YXvhjqV8T7RLFfCBLpLnNSr7X7GQ9VEYp1s37E1WXnYMTjy5pve6FGG7w",
  "key21": "5QD4qcteVoNHkGad8WutBTD2zSEDYTeRn1c1C7v5NTWMkzAshEBMJtt6xegM94oKcTbNnBbgs31MaYuDfGvGFJGi",
  "key22": "aPHFnowGMbmMSLsqyVJ19Kuh6PKbRsbRz1pniTCUQf7Mv6jnBXWTtz4U3Uf6E3MfWtzmQSdZpLzdDkM7GM9uh99",
  "key23": "54mCyFPCVJYF4f6kJQXoymiRzCZi4SkmbMbK8NkXbzgzBvEaVNjPZGa97hoPEE7CNyoenGs7HF2sVMFteuS439xH",
  "key24": "3w2aT2wPLj7AMD5wqc2ZYRgeqPCyhU4wxHfqi7hU2VKb6khAqB5Riihtk2WR1hh87KaPiy3Gy5cDb7JVP45nzAbU",
  "key25": "2RQnB7ZtrQY1T5HsVqAcidm1GdtxVAz6LVLSL3GSYDMB3cB7fwZ6DZ6LB1T6zkHkohuqBcane9zGkZnqjhzZEQLz",
  "key26": "4EtrGAWfRxqH24t6TAWuxnwdvBVvBL41q7ARhDfwF4dBvrdho9JgY2pPt5XbdA2MGhkRjey4kNG7ZcK4Eo7rvgdz",
  "key27": "3smChFnsarRPJBGfnm2RNq8URpBBESqcMaS15xXKXtPcgEtbLs5LN27x9ryCF7SwD9Lh4nXZe5nUPuGWPGLYctJc",
  "key28": "5BJ4mSVFibDq9FtBjBWrPpNPVET8NjV57V7pyj6JihfW2jkRV8Nz9MV1hxqhncX4z4uyvRZqGA8Ncw3FGyLKxKkJ",
  "key29": "2zJUdLuVrgnAvygN6KKBNFFgyqadVDKELYZtECwXGywKqvZDfMR8JZEo5GgvZfySQ6h88y8zX8xeGzxKumQwiSHc",
  "key30": "4H74vhyrzB79rJzNonvGjrNiG5xtUKn9EiKFRMwzk81ipvUcSofZ8VLeXUBmTccUYNJyZNCv46rA9jMF95PXBfCm",
  "key31": "58mBXJZX9mnjXAoeVz7j6fhYDAZC67qFBi5r3bumWwWj1mAnZQdDPxYWhJR41MzuovcRTr2f8ccorxCAYUaBktMv"
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
