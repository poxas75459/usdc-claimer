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
    "5pSQFAibkQCnALU3tAQr9xoMGA8QdprkRhSp7X1BbiRJoBmetuDy8qkznsUWVWZUtS2Hk1bTvARagiDXzWR1L3BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXLwb3pMpmk3hcMwezYSA9PH4eqmoWQkAtDndP4MMhbYSXKNJbcC9oFarAns66dHVSqUumHD4nrxFLpBgAQV4gz",
  "key1": "5WbAkFLQiikngnJkf1mzvRjSC9yZpcEeyotE5L2fNM7daEbNE3W6GGaQXHVTnb5igaJGASMLEbqZRENESn9UpkME",
  "key2": "5apqVCECQuPFHJfb71kyarv1gs2WMnSbN4LUVy9NsmyDg5PBwuYxpgPHMWvga9vc1ANp7hZAWBQ5ZRKmfnufExN6",
  "key3": "42CiDVB3sjSZdRr66g9hCSrbQFwLMwrQ8q97jevAEAHQkpEoxQngg1xQRo4fzm1FWccXjXLBztb7k9UCLJ3cgUwn",
  "key4": "64PxbEFFitC145BvuRhb23Xmy7MjGihF9mjNquLMz7XhsZZWWUPUskczNmvPFfCvL2BWDUy58vA3JtLhfpAKgUyz",
  "key5": "5NhXM9Dq5UipQr3oRigKTs8tRYg2ajvSX3MkKjLWfuSpEahvLx6YMLvVQJ99gNZjcWtUKR8MTPbXYXjAhTGqDNMz",
  "key6": "4hKgyXyERi7opGaeWofYnYitVdj7kMwmn9Lr1KPUmzYVSLtq1XTy4xMFt8KZWuqFCSqfwfavgif2JUbd8kDc97bv",
  "key7": "5mprGgjMx3dKqXMT8QyEJwv3bnQjXG6veWxaGanqYbFCBFCxrEfE6FR2Czwu5FMe1kFRRtsuDnop9vy176PTyB5e",
  "key8": "2p3Gt77LFwMG4nWJN8KpsC8u5J8TKC7Var4obgsF1iXVVxFhjTii2tGUZwrfVi384rNTunNhDrrwsJiBGhjGPUZm",
  "key9": "2sx51UMKsBs8K4wWDHT4yNz66SVMdUQqS3TcQP7XAPeKVUVft632dumf4zaxqiPLwPb3Az8mV5Q1FpQU6eBMfNi9",
  "key10": "3Gb418MzLuH62iXyes1gXPeu1sXJPRcybDR5xk75hoFz3myVFiHcHc23PA7m5pziTDTBrq7a9bs8w5q48AEY5U6N",
  "key11": "3HNY9TKSHMk4HydCm8bYmjDdFeTVSbvpFyZvUE9e2wZt9RYamytek3VTh2hn4HJwFawvuYCfaXBZb6GfLuiy3Sgb",
  "key12": "5N35EkpUy7z1B5cSAmHBsKVbXmnZRpcZBXsFfL354e6vrYsngDgD477ra9xKiMJVaSmn6HLCMxTi3MEq1JukwkWM",
  "key13": "x2dB3yAeFRbUTSsamDWyLM19Uqb67rMR2qPT35HxtPi59S9wP9TXgP1abkN89ESbREZKWUEjgkZXWVQYnzSrrk4",
  "key14": "3QkhsUoWhrFP7y3a48cNtCjTXedwaXyynSLSeotKznc69Vd6vMDjF3j5ubp1tkxw2KYbQrhp6m1FBWb9VGBt6Ubz",
  "key15": "2jSvGuiecPwrRV85vYv1gPn5PNBRMqrGv9dsajN2zB1k6a8MTpxZdpxcSXXnVhLgdgsh1N1hBC12f17utcCDLhNA",
  "key16": "3JjXX3uE9S8AWLKgBYrCk9jb21gysbr2kiE74atdHzSzwFxigZZMvKiuzbM1b9nM2v5Q5Hd9uWvBPrabtzAPuRwk",
  "key17": "35iPbXoZqq2YUVwR27fQxwU5HjLgXavi6TxWQmK5UQowZ9wWAjQAYfMDu1GMDiGDg1BBtod7s6uYJVx5ZttLt6Bc",
  "key18": "T76Cc6uTiB5NC4LZ6fQT21FGGwLEjjuWkVXBou1c2CAwwv9b114dRBSLmoaAV45PHspn5uNV5nZunHiHpsYehzM",
  "key19": "24jrWmdrA4f97fbErCMwF2CkotBBZaD7FWke3KWceuAjyXRqcJwSxrdq3jHTzGiMvLSFk6rZrPsHatVxHfDjsECL",
  "key20": "yo1QV7DuBz5GJp4MzRogqnkBe6QqzJpcRe4iSJMfifiM4ByNpDknoTjYohwJNzndafgRyhuBuHqcC7X8xxQtJuP",
  "key21": "65EJTSMheJyxhFkDK3panoWSiWhF9gVfKzGzkwKTjYcd2yYSL64tdpZa3Jx2nHfr8zViBguJW6xYXoykQspogJe",
  "key22": "4ZyaA1hdCPAYq2MJmtUnG3aFruac7j3kYHiFF5D1f8pqdkmDcxv74CwbgPdjwQiMJiio5DtihUAMahBUgfbmtdGd",
  "key23": "4kbD6cxfweHQoKmXn8cozdPncQCsxbvWXTmniXoYzcKTgEK6p4P9cRc8mwoKYt9FWifvSzA5dEF7ch7k42KNRyfG",
  "key24": "2djA7d2a9aq87dHVfAYSamgtXPwL8wECiNZf2iihCknifmCECwKYQTA8qEeo4YPAGv5n2Ua5MPQCwDcWN4585EhJ",
  "key25": "5bSPJf42STrVoPyQ36mwq4jrBEC1wveet9SMbfSfcUR1rgz7NVZAVC2BrWrzuu9SRLEfYZHAHxW9S1J1bXP4eEsN",
  "key26": "3SQU1FAhZrKrZHQPiDKob5E8ayoG7rs6WKtPUYZY2RXbUBua2S7TyHjh4xbja4ekVBFweFGNpVwuJX66Mp7rjRB",
  "key27": "3W9bwV5z6r8exyD99sS8TQFhZNoT2T8Uoxc6SsiSiJHT9hDFYNcacsUTnpX8PdPEwNhBw7533N9nPRqXzGhvPTu2",
  "key28": "4sQKVKzuDFbKnJ53kSn6KUQ9yqLydFsYdRvpNvah4SXCN73QdhRiuiC5cT8KiRM25n8eHNCJQgmptZUQSkxSNfi8",
  "key29": "5Che3CmLGtpYZ26Vh5ZJjjn9DYkmx9TVzQrpNqtmgaGytBqowZnmgmZCNXwG5w9LD3BjkAUZkjd8YNZkCLtvr9Qq",
  "key30": "3U6DuGTtumvHwaL9yzBKCTeqar3pXbLRXovhfu7aTQHyxX3P4Dhj4HfEb6rK5LCKzcgWmvwKj3g7Yt64VMWnRfQa",
  "key31": "2jrP2nMC7v46PkC3t3iTj5uCDKEVANdtpZorrQTpr9N1TngFc1CA9fAYBAMQsfQsgeVyovCH1LH1mTEX2qDhxH3s"
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
