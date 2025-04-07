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
    "3PMUuEFmL5ULGX28pmgRrgbBmVa83pFP4vKBUD6saSLP3HE2LLiGvrncMum877D8amZEoeGg7aoL9XZSyXUngMYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4eXd4c1GwDs5ZoMHeYHPxYobDd2HVUpkJNCtnRSWCW1tm2j99DMoAtFEhm9RoZciTDrrDEbUKSQLt3XV3gqNqX",
  "key1": "37guf2vT9QmrUrXy65Ng1W8xtZtyV7viFkbqq2zxTtKu3F4jWD2ALi33sz4FkomdeUE6QNKbVxTBf4arA3JMEoda",
  "key2": "5AkitdvvtrF7Lkwrm1gC2yiJFyD7GTfXU4QBaBxk4Yy2ZRu5GVDV7sNvemMQVkwZgbsqNcFDf8PMUMEg1TWyKLKY",
  "key3": "3vGbYNui5RhQeN4GtbeU7CEqv7q8W6cRUZKtYvfhs8QircRwU87dSdB8wpM5bRBnA2emkVrzhKmTqibVNRyhyAeU",
  "key4": "4mTosFf82PEEcFF2fCStgQLAxgN3y3TrDbHYMDfb9sh7ZhnMKmo5VvPbZ1iq1izu816LCe5DrSYnigpkSpCTPNWu",
  "key5": "3EveevHsqb6Fr8UhX4cifn21r7UNP2XpCg1mNTog13HoHm7G3LoZe5kikAwLNrCgkTYZKf3AjsNVyssFHPqsNHGV",
  "key6": "5RkgzgR35bAQJgF8uFNatqCijWA53qciEokquyfMwaSmedANgaQJa4pvqRLweBAhzfESBc4soSW56zLqZ28zWtjC",
  "key7": "3L76Y71VDSzEg9JGRtjV3xNoWr8W6rByoq5xdydCmK597FhSTSmoDzKAKunSLosVH2CQT3LhidyckuAUKRByNkBP",
  "key8": "4QC77YK5aJ6jwFs4bh8WTjsQTfGbdkduRZsdWeiuwtdEU6ivEoTXrPnsc1Vng1t4u2YgVvo2aXWyJWuTWLbo89pP",
  "key9": "5u5NLNrgv1838pGQDp72abaeWnDH4EfvyEFFpY93QfMMmvVQC7xmTxj9KLFip5QCRbRRN5La173D2pjcK3pA2XFn",
  "key10": "23efhn76ZGYphhZUmjZu24LANGkiS1RqpqPJTAwLVap1zL7BRF5eJmqoEy7mvFYRo2nyB2Ds1WNJAQJdS7E78RHZ",
  "key11": "39PcefJBPWjegJUCMmeuQcLHoaefM2MjjkponAmAq8ZmAz2HhxFDbGvJ1bZS2JtYp4ULCguCps7cLy3J1cVXWipn",
  "key12": "2cngo8vH8fPxK38sy2T5qbLgAdE13uCpikDrQB1MnMomtbpWRPguiv1Q5nmVfX5Spi65wot7qESXHuYvnoDuuphz",
  "key13": "3ndbJWhGCMqSJMrucguYRG21ihAWNP9qbjKMsbC4RcdjFyRrjeLLZmriUjqgxk215LW68hApgjidciBs2SKptNP5",
  "key14": "MavswQyZRRSiMg5q69o7FTVndKYgczmViqC4Wp1Fr6RMp3sJLS1DkeLp5CHWZYvcf4CD7tPisd9F1uezpdTgWjK",
  "key15": "4Y6ehNrRvBndF1ovfajE1EC1dpCVCFPL1ZAPA26nQgba7YyMHeXnEB6EZgiqrd7uK9S6Dd1K2bEgDgX3YZkCxjia",
  "key16": "sRnbiHtF8sMJXbQ1uneFwhP6WFN82XobizGFht42wyXvF1zKKsWY7umSxAhCY5ep2DZRGQkPscbfZmcab1AdCPD",
  "key17": "2XtrcuiXSzXTDcReBScViBZQDBFpaFGP64gjcyRVk7PEkDULuxefF854bMGcWCjWYLyBRKoBuGztRTSpTDvsBwAG",
  "key18": "55GCjpMzQD4s1pWXD48jv3dqVtv4zchxn1mu52Aopzcj9sRauHBeYA1X82c9Mqnvt3oMtV4CxRmnJnBdaJKvHxTT",
  "key19": "52XhtXhAXswAZ5M1Vxc6nrh3sVSUK8FYGNnnB6DKJfBVP9mKDnwgsGfA5gNTCAJH4BN8hATmxyn2xSgQkoHiTfF9",
  "key20": "3Ko6K3p2exfGQMe5kdAfexNSEbgRBypk6Wd5eKEFVt9EFr37qcYUyPaXjYy3tREtvW3EB7v7EumTs7jsFXsikCZw",
  "key21": "4FUE8Q4n5Waow2vpbUbu2xTttR7fyVJv9RTMQwCcDcEJcEvHhU7CrUMnj9sSFeJhX7QnyJqUphH3XKKxYEXuJL5R",
  "key22": "356wubjdT4mN9cRk3nzwJmxHmruhhzZ6Vr4optjyyAfQw9euvxHYBeP1BsRihsXsabyVT5Gg9NVi7D8FEssJuWCB",
  "key23": "4yhYuxSVZCUqmF83VXVyd8zmi1H2u2FiMJM8AkZ3HPBPqyoA1dP3z97QWDo7QdV61wUHtM5dPGreUdG7twZ3biA",
  "key24": "36doTPZZTV7cuR1ZNqm4brp1sECZWRDF9Xxku4REDG44d6aNFe4JR74SmeHCFqFyVV7FdEbie7TAhWsSECQ43Cx7",
  "key25": "5jxQz2dhi9mnW6UDbFA4R9V6CEMGzGzJUZheze2LwL2GyfWsqPksvvhT1KgsV9MmK3XC9ZS2XEcNuDA1eDxjWq8G",
  "key26": "irMHXof2z8jiYWzWvyafrKFgLs2hLXr1YMQiVXJvTEHsMRQA2d3cuAFTeedKauERP5Cbzi9tBiytafwM7sht5E2",
  "key27": "3Md2gyVvRqEWidLexaaT9VQ5wno2XHxG5KwV2kMh4kd2j2cK5HmC3HnhoG8Ms3Bc5bm1PUHi6KLRt1MZsVejup1y",
  "key28": "5cM8JKYEJZMPPhiir1ja6zACDMCg5H2axh33RuFLD6sMeJFQms36UktLex5jEJTxjAZ9xzSTJu6VVsqJBKbirqxK",
  "key29": "2rVKoJHFCtmPs8fYYCorYhLrSysovTnQsYCZwoE5KTPyhEqHzqwnXjufJt7VWA3sTGXFW93TrkvVEaWP7z2NRe4x",
  "key30": "HzPT7yKd6SGJCcvDYBydAi5zRwKz81FByYcjgkkjSk5UnVB2smrfGKAvXBs16pFh48ptKdwa8NgxEHMiTRCcjLd",
  "key31": "37dyhXvjFpeNfin11Tzbh9J9kCNrfxhc77PbWLVNrnFnvphKTrhuShjbyruXHsWQxAG5CG6ZFVqZQdUNoBnVpefv",
  "key32": "3xSEqA1Cb7JUwaJcEpj69oYUP9zxuHiPY9iUpZVakSThvUUZNAog6V667MV5zLx4jmZ8BBKhBuBHqBVcNvL11m58",
  "key33": "cHrqjPKTHCvKyzw9T9CnYr6KvWoKp2SrxSrwTHHva5PUe7VCYvz5oJBVKbHyahKTTXDwxqcu4s591f2CrNbqGTD",
  "key34": "4rMdettgQMtmeYDgAujMDQLcmA5tPcuvug3YxUpvKBrbU67WpEoATawE7N8Fx52NjidNnUCWJLH7TxzDqZWJJkiE",
  "key35": "2PzaVby3LUpVyqvSoZhKbexPuRM44sUtHwwFeRtX6U3nfBJNiPgJN8YwAfCKwe1ZYAYxxSghcvfb9A5nTNRstpDi",
  "key36": "2mNECMSfNyk4jbRh4iEiN4bDqVjjUSsJHJNtK1BtLZSP7VFCh9mjKsbaG6MzXerRghUEM8MWSaY73KuJjucGxDvG",
  "key37": "4LUH1VPuK9bnYqBg2qQ78WRTZbhGUGGoa1ubMxK3kejwpMKvf9bxtgZ2MYZdKhS9bN1hsMdT8qNg8LJBiJTntDzV",
  "key38": "4Pv65RvnuqMBLD53Ji1q5ZQM5N1hJBV7VwpYcTnNvzEjGvznwguuuirb7Qf6NpAmUSqK3LkQCoMSfHokMSVh9JMd",
  "key39": "pzHdWYrLqZMvZXXQqPSv6jZBNWUngPUs7wD6Jo3XfLyzD5Jguqs2q1a6W8RhdtY88hXpeRuoVUtc8x6J8n4ky5T",
  "key40": "2GRppSNmtg1KkWdpTNK9EA5UYZrfp6rtThhtBz2MjMyk4Z2eVTzYgdYguAbvk7H7oSZnb2bq7sCcgjQMc3VJMT2s",
  "key41": "3ZszyNY3j1E5q5wpyJkA5u4C8LjhLUbmkxHQUQReNi7iCMfuqqD1YTgZSRuNTaskQMx6dyGfns4ccUiai7fA4Rb2",
  "key42": "2QjnAf7TqjcugEBBPYGDngvoo3T4Bnr6oB6DSsPJo7H6RVjGz1fTQoZyz6ePy1mogoGuoY4qZJqMM61a5t3eAEhb",
  "key43": "2QJuw6vgFQQPumQnfGeuGuvYpP7NxkzZgKGJhsZbjuc29id5T93Gzk7rWeZhGbvshbPNwdMtAs86bVttLLrAvvrZ",
  "key44": "5xjkjU3oZAevvRVXzU76ZKA5J7goHSZkoYuu69BjXJRGKVnJoW68HPUvErXe69XNTTZFJQtYfzDXxDMiNhU4Esjq",
  "key45": "2DW9tEryv9B2AyBpGPGjjyigg8n7N5AU1SKHCGMgA9cq9R4az1p5bwF8VVWAHW8uNiUn2nCw87hfbP7vU9wXN5LJ"
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
