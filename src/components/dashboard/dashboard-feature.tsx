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
    "5ge8sAaqAcdYY2jiZyDGqnSgV1dTC26KU9aipfWkrzeEhRKY9BU4dGfv7VYaQM7XJmPAnpJRTbsJBr1KqwZht1Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeR4q7Sjormeva6YuQvnB6ku9MqKCTw8YupsjBGc8U2CtWeniVvUF6ngvZsGHf7cqCsNEZNRxNeJtagG3it7nWU",
  "key1": "btgDuHMAujtRHtaScMnUT7qsBzBF1tZ3zzpVPBLgy2wqet7fyRVGnsvB1YKULcqwkRthkXxwnGYWwwYCALU6bid",
  "key2": "3ZQFh2n7PCd7tikD6GRhTMeNTor5RM3jqE12kpVJ6beKgQbYfHFQQngHsrzdLfxPYtHkiig2pbsFaCNXys6SGnXb",
  "key3": "5c6CruyQr26y1FY2uPfC4ReAYL61e2A89C7pk1mi3bgi6Sv4GAqiquV3Q6HEvd2f9r1DY2wu6dvHA6Cv9uiFDrad",
  "key4": "2vaya19rDUzAqwEiCZuD9x9i1Hsk7pFrjPWfp6GCGG7eM2cEU3xEkv2DyXmcQv8qgdujcHGxuYBxmyJ4V7e8ia6v",
  "key5": "6cS33A8gpfsEUBk2iZq786qakmXAoKYShzeKgXDjW7nxq7Fe51pNXtt9g8HhrNSzQzWxXTyiZWsazbQ9t1VCn5R",
  "key6": "2wH8DPsGgMoUz3VXVWtiCgnxJDpWeyTa7v8D6agzC9p4TgTGiyjiARsHZfqgUfEJTxzeg5VF6BuwUQobLUbofNRU",
  "key7": "5cTnQfzH1nuCUXR6Zf2THRmdw5owEPU3FC1JMFCuMVycW416P2EXqMsh8hvXVh82JXuPupVEjz1Wetfy1DRauFtQ",
  "key8": "67G6GcNgysCs52bdr5iZu7Psxqoxa4CQi5gASygRCw771pUrBApa5FjkjX1gujZUpgtRovQYoNtEoczKhCtKyy4a",
  "key9": "4jyS5J8daAeo7kzjHcziW2WNi3fcSh81YzUTYDmeU8cm1Qjrmz1wy2YFTanECnSCHBB92mTkXCaYiog2Mh3o3KnS",
  "key10": "4egAgYM7Rk8C7bwPpJ1r57tWsK1mfr7i8AB7RpDqKrfZRJYvceb22syRVP5hVySGBz4Hc7izNHfj6Zq7EiQmyHUg",
  "key11": "4jD4rYYmhscoNC4vFimrpZtNFCBFwGkSQGnUVM7ic9spD68mqnuvz9XAZKn9fp56D9grJ3k6ybGszRZ9RV6Evcre",
  "key12": "2TWgH5LJEocxk7W12ycWCq1pDakBYnkEZZ3vsuKuDF2UEFeETcVNf4tzTHbBCCFow7kuuDtS1FmHB9gfa91XN5nx",
  "key13": "121d55FyjhRNu1zU23utXjyF7YZDneGQTq99kfqgCBnh8SihsXnonmpzcegexwgyEn7zAbgeuuwvN7AwonbQME7s",
  "key14": "5wbBLrmDFjaenrgmpDxAy7C8AFj9fAhkWhZYsZzgsdxagTfkHtDxpuUtP9C2zbtdKNDzX1uKXKsABVMS8wvH7Au1",
  "key15": "4yrDz6GLpqajgeEcqxtPNFxnHsuZbkouq5Y5H46xU96uVVppWd9a6Npp7jKAsQsZzdk1zdBtfNjijyWTSjEuuEtK",
  "key16": "5m5TLjCjk7LvBcbpE5fCHSizQrVv2feEfsrGEswMUSvqXRehDkDtsXurucgqAaRZ2KEim6Hzipp83L6DbPpbrrcR",
  "key17": "2vX1f3MH4ef9f9MMByb4mWe4zfKhE8JJVhdAXSxU47img1Zcsr7fhrwoue6BAn1gaeUqLa4UCGNbCXLuoHxzPhUF",
  "key18": "2W5XCnENgg6tGQcW1HtndFAoSNyaYCBnSwteVLpPrDFCtUG5CCQ1UGeaxPsidu1DARsdpkPWnwSDuGrcv6DHHjTM",
  "key19": "4gkYScgznhQocsVNPSMvwqSnRKCWexRG6xRuqcMTCFcjf2DwCVtgpveLiANAGNskdP5U7qLijWwz4T1oP93rUR2j",
  "key20": "4tXMH4AxRtby3pJuymGvPmyRqrp46hj6E2aYFC4r4nZb2dpxVAdVagQVm1paCTtH9TrwQuh4ZF1QuQVGWDArzsdG",
  "key21": "2Svn25Yai5kDXS546CqbnANqHo3WpYEuJVvkgmsieRsHYx3y2tmkkmKwZQK5KNAF5p8MRX2Jza8VKos1SFCyQnpq",
  "key22": "5pAot8JgWc1u4pF7ypki3GXHeaifKNc687Pf1HtdBufPwimaRALbTDeAuwBSk7zgx5iySyPAtvGTgUTVj1PP3XNV",
  "key23": "Hjdfxb83zNtzcatLRCwZ26xbgH1dkfbLQg5SyS24KMfr8obS7PHD4YVhv3mS1tdsVMDvzWWPAaZYQmqadEyrtaE",
  "key24": "icAtVHKBVGVtAQ5TRbedgpfJiM4wxHVqXoZF14TTzdZaoiSijbJyHViqba3xjQe8gYMnKgBpVBjJFwF1RjLU2xQ",
  "key25": "4vbwCCgedkSiqyE8ZnWFQ7sD9wGWJXbohSQRAF4mVj6QmXurn45b8fgP9AG2bg62gTKTZSFhwtYBnagteScceaeU",
  "key26": "3mriUb5R4ihmNUucXTuGqvFqsUWzyBb1nTRFnFKwguo7NvyYUAf2Xu1oaYHq1mSi5SFzLGHtByUfXpKCPTd5VzHm",
  "key27": "j5SJ8d4zjjhQyo2nvF1QQde83iRk5dhPhNFMNt1FnTCi6ExDPTbq9ceL45fChSSoUzsrmk2E1TzzpFADLnHKBf2",
  "key28": "hU7gE2YFG28etX7crwdUiQ48cnYfvLrFBmPdVtM7JQ7wYeMFH9Wc8pb2HMgu6a6QYUYqaQMFywVBF6oxQb62sUx",
  "key29": "5WAWZgpZJsAjeb9CfmXvB2JYZjAn1x4GdVrXNqJkfcKUY3x4Uf7exyvPmCnbcrFT4EkDfxkNiJUJP4U2DBEijsVi",
  "key30": "5XP7AxMcVYYJ6Jo3UfaHPvHppFuxCtSXDb7jwYyDgozn79ZhorS2TKTc22yedpT3gn82xNc4kKUNN9RioaPiKZ9X",
  "key31": "4RzdDVDR1uLfApYU3kNmunju6QsdvTUQn4UfvX3sHNsoQ6xAsYR1qxPDw3U4hLydLWj9WFB9CwjPsHY7FmkFAsg2",
  "key32": "86BoWm5Tvc8XVt9ibt8bPRYjgspuTbtyYovpG5jHNuGhMqDxKxevMa73Qgu7Z3wE6S3hG1iPbCJQPVU3KtSyKPm",
  "key33": "3GmChAaz4rwuBFCt1u1eN3isY75vDR3MPHrxnKw49nNpuQabgw2WfggyNoWXzdJ1ikJ2FipNY7WNKHiNBKR7Bxjp",
  "key34": "4N2dRxfFEfEoN7bcRNeMtaM6MCE8gaTBRf4Y1o21QYhzuuqoNK8N9jXzUuRm6C7u2XZRDzvQKfwjTkSHSNfnzfDu",
  "key35": "5vKK1PR2L4j41AWq9rkKx5MfMwTrRpG7ZsaYcvfCcPfFsLpDta549M6UnwMvNqTpGcVc9Wf7ESR3DqC8avZkMTqV",
  "key36": "5qiHy1ZRih8gppmX3nofhGNm8C8Ub7b9y1G1pGaHB7AgjSKkrp195DdVyBkgfrTuYDF2ue2da6sjqp9koBvX4amX"
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
