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
    "4YhWQQNhwEaMhj5aFQ6GY7j6PmhfFzBR43yuwBTjHnC7Y6m3uBJkTQHHSrAWg1yDz2s1LVzNHRxu6DggoudF9eh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZYos57ZbL2bu7SQzfPx6hQBgSgjbKXfno63AhX4mUqtLVjAhxjQ6YTja9z1jtC2Dptk6hYwqPz3FoX5pKkeRVw",
  "key1": "29EK3Zounkc19dkNBLXHgSZxgUxMvPUfsqB7Y71H3mWgYufTxtg3RCg1unrjktbZjx332Mocwuq9eFRFERkgGMuw",
  "key2": "2dSPGyhzQQgYTYnCxJCG2Lnvj5DGXThoEaHAHTJwYRuLCd61bUzEzmkUHQnNjvwqHYpL8GimMs3wnmFdjte28sRH",
  "key3": "4DtSYAWqiABBueatok7y7fiT9cMdtsRZTMGjSSzEWs3xQdjcoL3jpEHXDQzt6SnrzZGq1PXnwZG8tqhL7xSVY1Mj",
  "key4": "4q3bvKaRrbp5GBtu1PkKQJgbsPA4hA5Va7Jow8gM9dyCdT5nWNMoJR1NvfTZa5qqRNRM4jxH9mkRgNUDtxzQWiim",
  "key5": "4M61TE4YreseREsZe1RTxYfTZT7R177v8HosiBVUfLUaGTQno3k2taab2AsNg2wFY4tJgU6CmVVhRYgDqSRe26H1",
  "key6": "2KAZGJ9QpdLYChF3m5vGVBvDmDNic52ES3qkot7jCHbxkvRqKo9hDKgs9r1r8k4bvQeG9PTBYPQqjwZQUzsf7bnJ",
  "key7": "5Za2XicpS7dMkfBAT8AUJZvFuB8kJnpxA3LibgtwpHc9xNKUYcMQmQPyh4CngHfKZpkbpAVJBFLt393eWtT8G8jN",
  "key8": "gwoM8fEUmiPo5dBrNYTbFtJe2ZHE3atpD3xoigPsAzjuxALMLHShK5QmCG2VmCEX3zFgABKPCbo1StckGFcdnV6",
  "key9": "kVcNpoZLLtsWub4SKRNr34FcsneEikz8DTRJfmB5g4mu6UT9EeKkny9C6Lyt55Z3ywdNspb8F6AqLhbXMz8ZBxu",
  "key10": "28TLXbRH6AgKLSLytFCtjt5qJUbd1GuSGrowe2NKA7Y3YLu6sZKs9LMZByWyboeSb3S9n3i2HNbdPoDzd831HFeV",
  "key11": "4ZHDeXuoCX426X7GfftE8mvK3Dxzcwmbj9Ue5pxjpwJWisqw3qihVKgD4AX6gmJh55YJJ33zmZPcEPLSGNrMu213",
  "key12": "5hGfu96k8PGpSDCXuRk9LnyQA8XasD3PgCQekzHRbCGoo6Np9R3DVkE1HYL3NvYRzmj6TYaPexyyN45jbudoWDUy",
  "key13": "2hGbhvt42wWvSdjBZxjNNvW6b4gzbTq1p6ibFbZaFiJNkREdjzmAse19LpbXJZz9U7MEXejQ6ia4QbC2fFqGaaHS",
  "key14": "3cA4iqywVimwDMEpDGEEEKWKr8SWReFdtCCcaBqxYBaKwNUFFeUvtWs9SDArq2E4TvzTZGSqfSjFuyqy7dP5gHSM",
  "key15": "2pdTYBMtUD5Grvdgtrz935NqGjQ5hoBxGpGbcHjYrNn4iL1iJTTA8Mx4cqLjc9YXgTQJvHTAkSdi929rzQyU87dP",
  "key16": "37RcGkJYMgktwSb21fBEMyNCdWvWM1EtRqZvh1xhRShDrRyh2ftyaw1t8ZHgbwB4pybxK3sAaxwDmh5tjRhEtzEj",
  "key17": "2mgdxKCQqUJ6Fn44eEQX6wJLaEi5FKrkphPu1WdKbTm7gCWNxW8ECBbfgDaBa6dWYmoX8CuFu2RL8YQwo5rdZyJi",
  "key18": "3vD2ebyjMnV9mHTAEfFyTPpDBsx9i1g9YEy11uhJ8zdYXyUxW6rvg38XZC21S26PerZzTfVLWW7hfqSuVtmgG3r2",
  "key19": "RdNfYYtsAQLVabCDfJUmD4AUCNLFkhHS5ZDq9Nh84eNE4aQkmDdy7s78Lbqv47AosChSdQMKURwYrxV7MH4wQ7N",
  "key20": "5vcCwCtTsWYuu6G1GfqpEvDo81kPvsfTDxzvbzdJsXchzt3BAaxXAAHmqH9yyfA1Xqf7LHpM2kBmKYW2mN34SHmm",
  "key21": "D46q724BdjMkpLkvA3FAbVhUQABRJFNDUakcQG5Gvikn3UjixEDmk49Wr5RGH6rnmpRwomATK8u3kzbyR9J6WqV",
  "key22": "4CPo3zHpbw8xQWD6LufEsvrYquveogiffr2S42pSmvSDtkeRdzPCU8tgHAc1RWG8PLY5HB4QXUx63PfQoAqcvboq",
  "key23": "2WLUPS4vAgkVsBwNvNjray44244mfeA86jtXHCp4CYYoyc6QAa9pd22CvmrGBu8JwsB81F1uLvJmYr6y5PPg4kZA",
  "key24": "4MK5n58JN9hRpk35nMLK1WNxoAn1yV3bmd5wosBHsYUW9fRu9W1x1ADWS4W7Xv3cY2eRxp6QWFuaNX8NQvRm2Uci",
  "key25": "3DVxEu24trMopXqZEReR79TT7vjSZG2fEpAE5i19v3n3662JWjm8PSvMAKxkwq79SyVsX5Meqga8ttsbABB5GECR",
  "key26": "5bBbnYMnRipzdiV2mRmKGewWkfWyRmf4RcTL5vhVB1FURA3fjUqx3nBh4TzjYeWg7N8uvrv7Db7LCUNs8usCUDh4",
  "key27": "3QGHVNsp563FaF6QQSeAHmsoDt3mNVKRNu3aEc9DXzAoxg7CfYWVGd3WXKGWwoY3c1MrDmQMsTJodEyR4u2g5kJo",
  "key28": "52S6rhZXgUQCyXM5U88vTgidBHFPsFGq68WmZ9uZePj5bmK3H1reBQkRUPZ5VNgZhGqjQ5ypLavrZQJAVzieuUtm",
  "key29": "5LHLdcVrUHQ8CVeeW8foEq2Duy3bwJT6mMESWkRYNusuL5uRTkZfVeaZhN18hhs5otXLfqhp7qeeTd7s6A1rxkxk",
  "key30": "2bjGiv6WVcN3gJMKyB9aSq7vZivyRjTJvXANkxyeQUMFcNjm1BKUaxtrmFrgSki4qP9BjRPVbgwwbh9wg6hH7Ho6",
  "key31": "5gvXctBRnDfFYroXm2j5GEfYPXMgnSzejTeYqQq4bUYZyAajA7JwPSp2Ljn31rvUEFvQqnNRKUZJxzhEFdsAVL4T",
  "key32": "5D7a6cDnStkDvQ1T1Mum8HhvExetd7XMqvY3Uo3S8LtRPsALo1kbwhotEWBYNwm3s9oPkhCA6hLmUsyaA5mRoyHz",
  "key33": "29VY2hT2L1QXZeiVUYdiAovrjA8VfDagboSBs49gzEs32zFowyTbDoEfDCnkgBBDVUXK5stCS8TPKLcZWUnrQUni",
  "key34": "2w8rHn62PBRzXkskzHHg3NXPAN4EMNhJSC5D8afk7iS455KnuBe9GHn4Zd8QAU79DnxktkJpPRMbS3tWJsXJArLS",
  "key35": "4N9hzZdCkiJnRKHgp3WkVrndqMMGXR2rpwbFHQjNaAUPwvbRhpa8c329Jxfb6bzMFVFc5tBpjHvP9ZR8pSes61GY",
  "key36": "4RLQ8CJbWXLfKuPyBsrnBkrsRV8qKLYh9RF8h2sS73XgPR8rtgoX7Qg7t6UASj7LmBrHGu2vNSaFRu8xijnbACsy",
  "key37": "39N16AsFS3F9pPLQ2FCsktzz3pVVaXszwL2ydfggc7Cd8w5GfafeDTCNEx2jCz9gnqj9Bdn7rZXhb3N7sQBTBCv5",
  "key38": "5WpeEF5q4WDnapLdmpCDSLLSLKUgeUAUf8Ub5XaZEpqa5t3MQWWVwg5KW7NyUipZuofy8c9pq4qNLBoiTQCvReMM"
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
