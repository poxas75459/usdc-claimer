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
    "3MUei4J5JT2rQaLPWU22cHfqUyRHGaozDtqYtnptgMiLDNT4xVFbVQqWQEYUtCigGVexvRjQiKdv1YPcVxGyUfMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeXVjhY46xxkxDDUrpLpMiyrAX7mbQdZqdFFQVZcccC2eK9HLLp9v7qNAu9ix8p9gmAgB3BTUfA6jYVu1KPNk3h",
  "key1": "5xxJEeQceryoK9BS3mz9VfLCyNoF8FE8jFk2fdTdJuLmrpX4Mi3dSPmDRpyJYCzzusaHc2bstsRNe6vP8La6u1LQ",
  "key2": "2cjKgn7WGtP1pb1TVb55NhKYwmVuHWqEfU8rayAQULno3Sog2Rx1mMvgJ7RZqyAmw9PBAa6LTJUNsSrXdXr4iJc3",
  "key3": "3vccGntg1YzLNeFSXk6NC3niTM8UtbcRynFRrsuKeY213TgeTphYHa53EQ5uPvrqi9e1fEWmYwKTk3aq23c7S9Np",
  "key4": "3AKwarZEtfGB526qmic1UBr5iqxANMYvX5AjSHuCZzJP23fBf12ShPCqymizQAooBQRsAKvKGu7S8ywHCyZYJuX1",
  "key5": "exhKSCX9aeiW7XpQM7VYL2nGZovy86cJFKjJV2aBCWvoqw9PBTZyhvTqF1MVZqheNMyVqNNXPuLbqi5kYQCL5Ph",
  "key6": "3UfbC8noDTs4W2MrZV2Gb2BTQh9a1wxqphxswsCFBARpxqnVXvHDdfjEbSRZVkVhWWgwzawfMk2LFXb7DNa11SyM",
  "key7": "jScQMRQubmkuBte28NS4mufVTuqamd6iFxSMFf9GMAwArDjJmc7FREqgs4dvNF4hEPtksCrgiWARv6fF3zyTjgt",
  "key8": "UCPWGRTPiXKk3GpydXTmSiheo6wdCpgQyjobRT9Ka9xPMRbYFWSgjcRiKj4kCBN4ENNrt31nfSZBmzZKRFZnhPd",
  "key9": "29vJALZwmYs9n2EMGWhPzcoxkmfvXEQxntDq9wvSDDKPnGYdz1hxn66k6GPArEetotERb5KyPbrbSfZfPyi7oUYd",
  "key10": "664oSt3VcgSN3gKvA4rhzZiYCLramSbYwkB6puXNEZewD9R3XK73qcH6NGb25MSDzr4Efr6fvT2tG5LztPJEAH9B",
  "key11": "vttfwRMD3hrc6k22RCNX9mAYGKgvU2knSVW1hTTHM5RXikP4VS3umW5j7UsJ7GFYE8grg3818w9fw7rCF6SCdbB",
  "key12": "5VHJMJSTaQBZps5uVUhF14s9a2pdWu7VYBwzSyhvx1DefSEhSgWHK3TcCjbZdqS4wjqKcctquy9WqbDF6orXGnQh",
  "key13": "2e6CzwvqS7WLotTHsttW7fqLfMdoufCukQSo5azYVgXjbqc4gbnU9ttzGFefungsUyHAGUkTvDN44NTq8ugLZpBv",
  "key14": "22Y1r8828akxyf4E6z9UvYEaETLmEdGMfoiszRFaY4ygpb31c8R1eurdmFZs1QoALLGcrkkE98sxTr5L4ZrwttRW",
  "key15": "4KEy7xYua9D4AHgTrPvmnoFVxphfZztebMro2KKXDb8hfEmYjRsnVCBhpUAcE6b7PUe2Ax3TXqiHQv82y6PXaHra",
  "key16": "cAVKXUBDWWghDd4CNGqYZajMbEMCgZrzmj3q6qT11HUWcC7nunLg9Re39iaQyme178zcGU5SjLGvFQCkmyoZAm6",
  "key17": "2y7dJR6rhSn3F7i9w8dRBJWMMaGQ6cyaaCpqf3duVE598mdJvovanVmdpTuemr2kFDf8is85oydonLVtS4Hg94yp",
  "key18": "4Bvm47E45jycVYp2TuFdy9fk6X6P1Ka3e4xoRgzrHoQ1uJQjGJTsyQJGquZ26CeFCyvr1bLRJ7421XyuBS7N5EgJ",
  "key19": "5XRgJbbRJ1Le4kYEMnSFc5kE2X4zqWKCZ1Rv6E8CwA6fP5zawHBezW5SHTT6EWBcuuoiefC7JLecRtXeceAP1hA5",
  "key20": "3pkTNQazm8fMZZgoUVshkRkMt4uk8P554tYsGzGNnsZAgp8tiQTZGqQ2rZWan8YU1NjLJ9YBsi5JLwgRYJuG91L4",
  "key21": "4PGKTJ4rzXGT9LCZwcNKVbV4Yaw1QefZ3wz2VV2TT7oiMK11aKbZGe7JHYHJasB1BGedLVDGzGxjEfYqABEZ9eJJ",
  "key22": "5pxURaqy8UzwXUQi42wPvK2scUn9sJKnYgu6A6zyBwSVPrqnkf1JfPZaBcio2Z5QNfbxQwFYbyngMDATShZupASi",
  "key23": "62W1GGH82hEku96QExpab1StvPD5TKzeV5BucTsWypVRrngfftms7Xh3BaoZD7DJL5s7JCnQSaxJWxC5zdGubbEZ",
  "key24": "3eEKMpN4aJVkRXN8seTPe6ik9qq7YNxXhpz4uEW4proFrCY1eAV8VnqZtvhREmy1UTzvypDneqUPRysZ3wCWchoh",
  "key25": "q3Ea7UUrkxYqk1oogGm1AdrugiGYMWSr5tQd7VkpxQ3L8kegsYs7tpZw6sc2gybdzNQMVAW9JJ1LUEmpd3GbG6u",
  "key26": "JnaYnfaK6X2ecWz1iRq2agoAQtQsF6oYUa6dCcSfA3gwkALppWdpqyk1cT4SSJm9JVU81qhVtXoxqvD3egvpXkj",
  "key27": "39EFsMvHvTfL9cVMziTDtyVW1yycGuRuPkMrjAfb9ruQ6Nvo11Ydmt1kuHsU2nYGBfJbKH9L4VZyNqTCasC23Aqw",
  "key28": "51az1Cuyes8fAXayDZ8N42dT8WZG9GHaVrbdaUiwLBkuW2dVVUKTEDb5ztoTJNU7xFwRPwenqXARujdfFM7z6mys",
  "key29": "3STvTKYLBoQwL1AQX29m7zBBimsfX2scg7MavoB8vcwPLKDJ5t1UymUm2WMmKGKBVnzhb4Shhz3FrnFn1muWDoAk"
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
