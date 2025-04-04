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
    "MdnVX3YqozoJRSETo5ASRjuxniNgy9BMRfF9B2KjMG4M5zbYhw4GrhWekyEaR3xjLDXqK8Em8Fuf4FcHKbe5cyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C59mJLtKxreiUZHxPvn5wgea8ZwWCJWios4UDi7tkU3dYEvJHafgGqJXgeerTGGAPJzNo31gzLqjmPa6oxj14tU",
  "key1": "5vanQ6Mi6Y1KkFSGPpRGrsPfgkiJtZV3s9vzwwayzoFcb7BgSc8AUffySxnnaQ1HwKTphcv989NdGXYbyyPt8qX6",
  "key2": "25Dx7pL1EaAfvC9mF5GHZUMtRN7AMwuzRzNopeUPSgnxTk5GerspvbJvpexcCVNtNbx3QviEMo8tM9WZUHS6oSrz",
  "key3": "4333gbqyVhnWAJoBx1Ve6gosTZ2v8wNq3HPv9AJ5NfMmGLksVuWvVT6EWXs7qAS4nLQ1hJuN3mKfwGMX8YUfWwdE",
  "key4": "4Zz5gyYuFy5PTbeoqzckBM9dGozp1ptTb1tuPqZshbCYcqSfq6rrArRTYe1amM8Kx3GT2vu9eJmCW7w5wNKFBo6q",
  "key5": "HGzA2jt8RPDC9Dyh4PYW1JbQNpqfKqDvvZjyMuFLurQoHk259X9orXoEbubc9Fb4JgFkNqdgmmRYL5bTXHuJhUB",
  "key6": "5BxnXN42ZG3G7JLX4Yxcpapzy16cQDMAf8tmmjzqYYiR4Wvh5goTNcCFs5vim8hPf4zssULL98NS6eQmp4NMFEVs",
  "key7": "Q8k1uGcAKbTGtDeQBwaVHRMGLG1rsYaJoMbdiFHvnSfWYW8YPgaEykiCnF5iXujV5rAYaGSazd4ekGiuHsccJjs",
  "key8": "J6vzNjRfRXLZKdrS7g1bA7LySLjbr2xa4RM1o3aqZ76NU1Y52QHb2U1GjFAtCsAsaRiz6sCPRTvQRdgZaBV3rKr",
  "key9": "ixwPDQPPHfpwDSUqH1d1KPsLywPynvR9oAApxsU2Chxa3LtofY5SNUWQ1diBAovM4JkmMV45VbNedjsR4xs2E5e",
  "key10": "4STj5dtrTQcAySfnCmBxNsmxcWbUGtaqdqnYhRLqJJiXp9tG6MwLFDViTRBJduf5rrj285eMqgLVkAzpDNz9YwmF",
  "key11": "2DX6ciXcnDQKBsgL7da86EPjrdksYEH6JtrWWtcH8ToSmHUgEx4i5Yjhw9YQXN9mFLC15xpLUbQ8kbsU29vJEuLS",
  "key12": "2wHhVhii96hWkbnXxzF2WC5ePTTqM7nma8EAMJxZhdbBdTcALS1sGN4TUh5U85RCNHRVeUUTBmnHin12HRvC1Bf9",
  "key13": "44H5SXGJKLB7NM5Uif41rASd5MTAJypkEKq5XnHB25xUwPcfAzoStqiE5LwGkKokyp6g9Un45bbfZpRaNq1GKMps",
  "key14": "28zyAoQvDRLydZw3cRAo6gSucVNEhvRDvHX7ytwGTM7TNWReFNHSwu4QUUsrytcL91FLGyyqH3FUYf3hjLY495Uv",
  "key15": "3XscDW8GQ7sMDBwENzySQTeJkExTi4cY2cxPyKoWqqqVP3Gasy7XYNjtCHSC75b7VUDyWYBuhfsqMKrobQzmvQS1",
  "key16": "2nRKTUptTdq2jrHLRWtUJ89M5bQKmoL8gNSAbTgFTnEBS9kTs21hXMmdvk1wpsnjvsnj2MbpwVzpXoJNxZR21xa6",
  "key17": "5nLukibJasaYReDUmuE1DkXGuqUhPuXWqcF6rNihQ5joCMTFYwJpmuvjNcLYeqpyn5tAsXa5MbfyC2KmQf1jdnKC",
  "key18": "2ndcA68sMzqwgrMSUtyaXLFyB6NczAqz1s2qcpji3eJfvnzNvwvDTq4eJonrNSU3k5rA9rUrLNzB5jebxaMXUrjB",
  "key19": "4ZCiUWqALKF7CeTbjdfoH1qWtv6j619xr18xGbmTmCSJjQKjyz7nLYH221yGFzPisZXMGCX4zQ3vgaqw1QBr5RF8",
  "key20": "5ANowGrpFixb2ru9bRd8zqveDwuYkggyhd4j7DWUKH1uM6a3LCn312utn1EucMJ3FwtQkcgJHpWYvWFE8LAp2nef",
  "key21": "2hLVDvg1LHZYZDrnKtfcL3SpY2izFTwcYMDkAZcKzaN6evcbQuMH8pu8jMi67r7zr8x3qJfCTExg8YzcACZXoaTH",
  "key22": "5V62ohxrpdV7u5o8owXzdLVGVkBMytmVZpbv5PMcsTTRNHEV2mC9mbrzTBXm25CMDr91Q3zEoqLPgNQdxd63Ck2w",
  "key23": "5H3YDJwC2dgQAj4DRfouokmw3Bvo2PzVgQADwphqu8WY4h5rRXoy88jYsK3iBto5PcjCaF6pWeXN8Xy52VJDd159",
  "key24": "5cQBVQWZvU8XGvmvZXTz8FtAMXYNaQVrK6tQxFhQeQmt3axVAJK3nh597f2hrTi7P9j6WoWXTngUGDBRppSeSQxs",
  "key25": "4tcSAw4z4if1dmwkphd1x1uFrab7hcYUec3mLGRBEmmS7R9CLDdS6ksuMrgUp3gGSeuMUBE5o12bfNYPBbFg8svK",
  "key26": "61pjBvCejM4pr3SgRUAdLekexkE6SwFknT51jTFEwB5jf8B1zkBetkua2NS4dEGSoUWYRVhe47rMBrs3ikSY3LX2",
  "key27": "n19wYKyWRH39FbLqVVHqHhoTAos7pgGnL87e7AmNM4nbeMqCpVGgv5UsT1QV9zQdK71iiDdUgMt4xJYmzp8Mb9P",
  "key28": "2EmPsJaRmJ3zV1ZSkeXDgzWTAJAKQiXDkhnXP1SD23x71xiiEWhShvyCyD3K7C8YT24uwn46u3Z2ky9oMmLjmqNK",
  "key29": "2fQwTvLavsNmYusT912xBaPS38itBspaGXhfhSJPVuHSBVFv4xUMWdsAk2SvbGdXn65cc9ueEJJunsBXoUN7rqBK",
  "key30": "2QmJqjnJdQMngj1dW7qquLngCjx5iQB3oYuvQ3BmqaGZV2HBEpRFQSdT7caZTmPXGSHUWd4KYq2mhHoh7WcZeiTP",
  "key31": "3JXvFrssiyLo7jkmqZBzMbodAXNtaPqkvkspwVHfz1QZQjAWhVdGMDkUqzXT7g5jPCodECUT2J8TjFdAS6iWQ9k9",
  "key32": "3z6m1KzmdAKqhoZSEMyHfyXps92kk3rexct7PEdk1uzmhsdQGUBLace3WE4dfUbyTiqdeGjDVrqZ1aHLTP6N3GYE",
  "key33": "53QwD5g7REKG6oxBXUspXfQCvtHckJxLw2hoBeveFE1bz37fhA2AAQ3kzCcxhxEZHQVuWB9UVQJDAmLsXtRG4rMh"
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
