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
    "4SABJJEkZHzsEzYT47cjY5xj57m8u5myFAJkxMr6ePvoaVeKNVFLSaEsnsxJ65uuJfy1CHDth1wdpB5wkjZRkc97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asrR3vxpZZhYLFY2UHfAHuFC47Y8fmxTBFeKNqEyy5fwuEBcnbmwHoVwWqbcA8FTLGh6oEXzxtA1pmdTmAYVxiP",
  "key1": "6VyyCzTEEJfeCQj5uCh3o3HyrstdynZHJSvv1PVCA5gUVVHtXpV3ipCT1L7xWaznfugeSCNyQyVEZWA6vwmMaDH",
  "key2": "2Rxy9Lrnq35suc8TbRHvL7AAkaQw8v56yo8uwYW6NQmZGHdAN2BebNoharJ1CjfNzXSsWKKEFyPVZcWPKikWxyKr",
  "key3": "4y7m5Bk8nTA4mzABhvWKJADtD6sZVMh65WVFQhvAJBBK6njDVtr39UBwdH27euaRL7FvqcLDpfCmWv8sB2KpWNkn",
  "key4": "3EkN9MuriuBskrz9XsePcvxqTqFDwudMuZ76hhntZv7ERASDvArwLCvU9hD6iCoD6N4zM6aFQNeAy2qc6XaESdUW",
  "key5": "5xL2RmWfNPCKU1DpvzU83xjHAH5DA71GTdMgcrKy7GfMgEqTpmKCrPestMoVCw1sQfbbhyKBSAShQNbw5ipXCPWk",
  "key6": "46qYEVRxozZnV3bUBp4qMHzDYJNFBZGk8paCnTTq3CNKoc25UmCKiHYhhvMYr2xtR1WJzsCYK6f5vVqySFGrQZHt",
  "key7": "dLSifsHKaq4c643NNhihmu2G19oYFkCbxmYKHHZt8jw1GsScWyvcoXRQoQHWkVg5fPCRb2aWtF9dyCVaMJjGaWy",
  "key8": "4DFyFC8ZgisFRNHF4qVr8wPgAsM1Xaj3kHshad2trwZeMmYF5dzg4NF74umVJwFEkjYubkAkybTJfE3rWpAx5RjS",
  "key9": "23YVS97DQANLZ2DQwPwC2iYVAj9s8gCWiStnnTXnYBqNZLJXdTdw4tkethPCQFEWyqAptTVREuCLwaWowcjdGK48",
  "key10": "DU1P9JPeF2pHVpPZCjkgqci4F45Kc5w7h1YVFoiFVup2iYCyd7tA6nN1UxsSTHRL7c5AVDS2rBSsypT7uSpqqzi",
  "key11": "3hDB4rXGBNByTFzijCb4jhQ7euEeqcia3bmxHQ2qME6PScxdpGipgsCgbkiNHzujFuT9hTW5XaAKD1o7r7EiBJ13",
  "key12": "5hhzfDKrTKaiNFVmsePYviqFedCto9tQmiEzx2YuqzHUeyYMbNqMRUciY8RSmRuZHvq1LPJeLRLggQignX41FF6r",
  "key13": "3RAr1BUDMFF8Fr1ZDiFfLgTeH7YM8Zy8CJfm4gGJWRTgyMjvky1avjZFzU8zq7yfbq6NJD62bRMhDo7nutuBcuEY",
  "key14": "2brg6mqg4anSX8FiJ2a3QLUzLkFRngXncoJAoUD2gfU186eb2hNVK2EpY7eLx56mXfHhyHHdoMohmdA8cKSfXPUY",
  "key15": "4xbAzNvXvG6LLxkeGzRmdKjbGkWnSYTU7tTi6WuPPk2xZ3V3de5EuJWrsmUjQ4BWnFF98EyYxr5tVf6ymN3UHt5A",
  "key16": "2yWgrE8c3jd8AZzQ6MK5ch3h6aivUwDtm1KepWhTn8ggh2GtLJSg2cmVZb8SkFV5MXuTsy5Fm9jYF3oq5LxGXYpp",
  "key17": "24DLQoa3tvh1Fa23sqaQWtaCkSzyppkm6xQcJ1A5bUWCEGwpy7PA3gd64vYPkFFWaMMNvEdGn2kEyg8sKX9eXLRc",
  "key18": "63dzzumE4UH2wxu9Q6EbXHe62oxfcoZSp2SFxw48V3dZ5heLsKkyxkhQmaLmDfsqYnfJ6UkKvfkraK6vLVjfASqT",
  "key19": "4h4zgWcSjRP5CowyzZXuu2mMG47G93z3FK39twTj4JRmoDT8Z9D1rUWtAAvZSv5TPsdzkYwkZVdcghr9MHgV3bz7",
  "key20": "2hJbyXQLnkK9HBgehSp4nWonqRF6M87vCjsQjNxmLgR9ps55tUiDbBuPWWdkZ3aCYfYHhw7awfTHfGHTA3ELCb6n",
  "key21": "gkm6WiogrvwivAtiY7eqon2GFm34cSuScwaZQYKFMPsG18u4kBBu7tJg1sytKnB9mJnVCZ8gXyEVqW57aJ6GDFF",
  "key22": "5HTQBd4QGHKhgqu2MZWoGV9cE72DQpHqHX4w4zsG9pFQXCwWWxnNqi6EAhP1Xg3vgaLYQBojUC1dh4KEjaKJWnv2",
  "key23": "a8yUZ4jf3BoVWStBD1DtMjFffrFq2fboCyJQdWRtjXKS8j13TneCzRzSpfmaw6oC7EgUL8d34aj9LxdtFHSAEQq",
  "key24": "4E8hozN1q4kUGgv5oWwtu3zTtxdGVEXzKwQpSaAZbHqRudYdiHcS6Fj3pENzpAe3XuYTkGKEqzrMFS3Z2mCvNFrN",
  "key25": "5W2Hghwqk7cRCxYWmTBMhrv8Px4svu64NoQr63Qv869RJWMiQxsv1GocWLH42ZVYPZkcWYmc3oZUEWZWUUacFR3t",
  "key26": "4vFJjwxhVT6f3o35aD7ZjW2ehReV6hvz6HCqzH5fD3M3stuoj4TwWGqNWRaFVJ7ygzhRT9crAS7hJCxJW5buAH7k",
  "key27": "5GfzdPXMfw6fRaVqwpmgN7co1V8ADTeToevjD19BBotbFH5W4gJokuZrKYKqj5g6yYtMTr4oPwcWzVmtBMZJnod",
  "key28": "2QHhAyjRGcyJyQ7rhYJuZXX2koYTWdk5fAAHno3GQckA1ipn7UWUw8DA5DfKrvPJ9AbpLTndUiKYn8ZtLpfoiUPJ",
  "key29": "65fYAUWWkdHr8WT263rDUkMvtTmVFXTo3UMfKQk45jQhkGk5GSVDUAzzPJUfPkNZPWD9ep5VDdiaxvXez7wbTYKH",
  "key30": "vTUVBk9caTAFDcUKM6sZVfms48t9PyPigoVzsLRXBwgeuKNTfntyffwKHdzHB2Zg2n93NSvaSFxQ3QWTUXV3ujj",
  "key31": "3CGfLhyfBKverpMsSXSaYKismgjwnmZ4e5f4bL75KzKxZjMFv24dZwnzNKnpMjFfTDNbsZzkCjkPPg1hWs4QfDXi",
  "key32": "5U26ogGa68DQoqhbPqmL7muH2xo1q1qLp6prxNHEVp39kT8qm2LifHgKPkQiEAaVPdhnUEWUhrXAqPJV6UN1JvTy",
  "key33": "4PfiSFjeY7JGbz1wiCdCwtdgRsxqiKdLaKWYhsHthFFvnEeyfiRdmAreqz9cM9bpWvHjK7oy1w6qK5Brq9nb39jB",
  "key34": "2FYMordxXxFH7Vbp75uKJpYchW5cWFscVAYWEJcPcEsDYmDJ7DV8gQcwVfJBDAV8UeS9NWk8Roe7z4qCj5FBYWy7",
  "key35": "S1NAD6QfhkqJhtzL5q61aBiRkk9yo7G3FoZrL7XDoG8djmiz5Ysh7hTqDxMJE8S6hPc57huqnceYPXgvfEqpuMF",
  "key36": "4rChGfAH2yi6hajnTpJn44YPVBDC9wXM4VWxmrRZ8jAx3vUjC4WuiRuPGU5nzpujaLkcNeB6ximRhsfGu4Fjsbbh",
  "key37": "372Hafxn6tHrLLbYJmNjp8tAXuiP4bYbiqV2UAtAcPJn8NSXbST9SysWA6eQZv1agEgUVZwatekug7YCJXVsD3HW",
  "key38": "DKi1xJZKTffMC9KBjJwxkncWfwQRjQScZX8h7gt2E92ezgjp7J9xF6SiBk8wzqnJ7WHnfnGGVZjdxNTF1e1ABzE",
  "key39": "3VLuuqUwjEP2Pr1ii4CqdYhM3sYqWvUCWMFMtjmVpG45YfNwSKwQheefaR2VnPj67C1VE1WD8kZ2LDFqMJrA5ajy",
  "key40": "3Sk5o7quNH3Fqf7RgUWcdCvKiJrMWLZoCKMf3Eo5R4Re2xPQYjaKuxodw6bMZDRewdouz5G97JcJX9WifturcFAD",
  "key41": "51Vz5Nh5J4sMytVSyNDuya8HdjKLEsVcbx5pW1ofVvxq4kue5jQd1PLesXwRCzbKLgsKwDdWwXf938CLMGGDnveY",
  "key42": "HcKE7sGwvnRfTLYCQoT4M8gZ8kSusUToKKLXB7QxRD4FbvDyFZCLD8byK3QXxKyRiwC3npPgZf3Ze52oPo95WhT",
  "key43": "43JEJieNU74FLRvo24WHh6FiRFU53ozsxrJhCF7CMJpRQQUMpcBXrcs6E5UuVx6gNzJiFkmw7tRTh6Ly9YVMnxKR",
  "key44": "3BXeNSduA34VNu8LYrQizhNcCkLZhUApsRnM4yCdaVgSdpMMi5h3EwZkKKu32ebeUxnazu53Am1og1tEVNELLupX",
  "key45": "45NK2BfTV19Q5WX4BtskaMQsedWiXJTZ6LKEavSmBaWTt1oKGmvU5nM38XJTQp1d1LphK3ehEoRJLXJimKw9XCyi",
  "key46": "4CDJa9mY49waCsBM9FNKjzsjpXxTSDPcDnReCVVkCSxwMX34UwCUp58q22NZPqmBRsMgLTHD2Az4sBE4NQD4v9JN",
  "key47": "2g1doj5ev7gh5DARZxc74RKC8ts1eFcu8L4ViegWGtjbXoE29NZAN8gWPAp4koNqsBJwRwuWMFqdGUiuvYMqrxXD"
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
