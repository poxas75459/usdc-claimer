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
    "2HFNLiwpxEKHr4DAk81rmwq2rkMpU16BNGddLZwA9Q5knZRBXNvyQgGaLSikWbtJNo3QQT7A7HDDVJLNYGsNTA3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DouQT9THZ2HC5u6FsreQdZNGeHyfzEzDaRQyzaUGEjm4UiwuPTK2NYYfxeiLGpLL626Lo3Pp6JdT9H5JKWvPcKo",
  "key1": "k2dMuYM2ukVqnC98Rh5V5cxSQwFjDgTp9YnpxDACowqg4LtUCMjHA96zaG5uqGCXcxQVtYymCrpESGjzx4czpi3",
  "key2": "tmtX7wcnKDawwg4F24PRaQgK4GWGQNJssa6BzDWxJV39Y82KJhmhaLzg48HrXzHFhY1TX1V97D5awCnPiXGteUF",
  "key3": "efPJXHEeqUTBopLDyuujEKmAsXPYrcHkjgmJf88FDTqnJFd1Cjct7SqRi31HtuyMP5ifQJpoJUsUvr4V9HPYdvn",
  "key4": "4Csx6mY4NXV6XT6jSDUktgWWukDdRYnzu7T5r1p4hhskWGHYYzuXxzxpurZVdRbJJ2YFbTF5cSHWoxgZYV5yjUkW",
  "key5": "5BjeBkHqcF5QR2U75rgtVdD81nKdrViXGg3VZBCUXqszwiEDiXorKVxg1HPDPC7ER5b5QJa7KF4JmkfcWJGMk2p2",
  "key6": "2NipkFgqg5MwDLJZcGuctJxgu3b3tygQvw7KCEHcWMtGS7jcnJS8kgu52XvVGjRo9QMSCmh2Hguhsx5NrqsAzwVH",
  "key7": "67ST2v2LFcjAzWkHmWp86FoC79aYEYH7SaiLfcQGByvYkGotVsWMBUK5bJkfxuXwMWJyftMfZL2MUEEEhhDX57Ve",
  "key8": "3nrwSAwhKceJFEYBHjAnfczeTXfypZ3CB8fjn59xhSsLuWjvcxu4Kkc11Hr3ucDjvWwDcj2VodioKVro9zN9DkCs",
  "key9": "32UPbTY7bDKVtDxiadHiB6WsWPgg73uZ3YnHzT2NtCAWbSrQLytKzVPyXmXFiC3rsdcdFJc4hrfRh2KJDkXjojTf",
  "key10": "5vwzUGPK6KoC85etmpKVkD4vRhcWyzvHdbBxxVWrkjZk3CkDqUev1htjVBUd4eTzBbrUAYBLqTBptsyMyUQh1L79",
  "key11": "2FFxrEdoEeLZS881RbCDiDw9y3L3Doq5f3864jUAyVqzP18NKsf266DhpWxcTeGUkuU7N1URX58KzkUCZrM14GYz",
  "key12": "4nFNgizg1nqTcrvHRxobTj1zcPJcGiRCPzd4iPuFfQfbRexsq89V6MUqVivtBVattjXnXanEVLAg3YQMakQNu1df",
  "key13": "5FYtScqnoPWrzhgJKHGvjmPVsAfWiuv9f6tspxk9b2fGxakkEptac8jfdVfoJ5kaqWqLM6SrZCysD1J7eENhj2Wc",
  "key14": "X6bWgfi6fkpRcts5TD5wwAEXCfXWXMzrahTYYSbEepJtDR4MX3T3UzfRACxRQ5as3CEwVwSBupzrvBquvkHajgt",
  "key15": "4pCjedv2hKVK5df6tcmuDeLLdTuUDdwQCMU59BT7ZQiTPRAvvTsFfdrWba6GotGDqdway1A2wRhyeme7BDDq1YF1",
  "key16": "2PKDbc72Bs2T34FZGe8acSvnXQ88QpqZJHiHTPzNds7chzJJ4z7PAEQ2Ajxn2QdMLx2DP4DNE6LwXYLc3TZ3Nuu3",
  "key17": "26Yy6mr5Rf3JgG4dU7sGdd3QnFUkxisa1ZECb96Xt9qtL2iJkM3WfVw24MSS7UmTk6rnum2XRFKBGXxHnfvqL5XB",
  "key18": "5AKYU7awpURGT6gz7x1ezeif2TucLrB3ZLF62ZpQKjt74khoCCyU9ydfSrpVy6kpzFniER7SURHUkfVbatRxugzu",
  "key19": "5voF1w9ejkL8rpehgy9u4UqTWdNweJ32Xz3dXZvk7qkEjEG92Jty6z4JoAhsMUTxptkm3SUWKAfetEM7APaMfExK",
  "key20": "Wj1a2hYXid2nDDv2eb8LMyqDq21ejPuQHSHrTGoK4hJuYcG7KX2WhmSo4vqrEpXBTR1PHPdsXnZL37ioFBbzJrF",
  "key21": "4ZuN32qYRd3cTbyUyvCgZh4FTsre3fqT4VnqSBdd2YqJiTL6Ackxa73E6a2vT3nDmw1ZmHxWd9QUoF32wia17PfP",
  "key22": "FUqfWxTVQQNx7Ka6q1uwmS9ThfnD63cfL8VBHLFyo7xFaaktEp4rtMpGg3ikcHMxVfEkLQeHMQ172EknAxXwxju",
  "key23": "j91AwqbR8jPFNANdAY3Sei3S4zyB6kFT9UNPYXFky1gUSFo1fiPth8j1oPf5DkPMCqFb5JuYyciVc9uBvpwQfG9",
  "key24": "2F5zwdtz6Pgseh3yj5Ln9ZU3cxr9kQAD71MTh8YKjBjU5aQp1eyqfqGTuE7KBwghiqykbHG8bkbfLk8biPndprKR",
  "key25": "5ZoSuvuD9As9fvmA6PRFzmMVuqbPuSHTcAH3eGpJmtEZ4YNR7WkQKB3RdZpuUkr4YohhZ9jQe4zswFJwR1Mp9F5i",
  "key26": "61MhJ9jXpedJfaFLCKFUPx5JTZe4P9FriWUhmcunq8gARdqUKMyKu5JRprpJtkR7m9YM35CxcGfRgzFGSRBbfGBx",
  "key27": "9p2wQBPZAEmiBSFypQzbAkSRuaABdmGCgpZPi4gGJ91GJHkbVbBfZb8jEbBYeYjgp4PhEbu41Rw1WNjDGmw4Jvz",
  "key28": "51wEzPZRqWFDDFpQexcCdQfgqLJboeGUCU5rnwmLwqUxnM5o1g6bgxZP8GDrnLuNomjFE3Pxb8D2vqyE3TGDzEXG",
  "key29": "35kxi4ziokMmkdNteYz8zZ41xsibfvLQvNC83WMqkBnVPyFg2WqLg7W17gp9kgEN1HkwGXWSFaDuSsqTaVqjmZAR",
  "key30": "5ouQCupKujeP7CdTPkCHrkzrVy3pg9PieirgYSCHj1aLEi4UZWxovRJysPaUp6XWkr6Mbh4hVru8d8ekEJf6fKb2",
  "key31": "3x7KYcKpMC5khgmTgW7FWPayRxPpdSu9JovoCHdfUFiTFGz1VVntfetzfm1hCZwpV4qebKSmifWzXunjJvgxo7WE",
  "key32": "5KgJ9L68V1wQMNm1iHcY6XiocEQNz7JVyi5dM6bioQWP6hhytHGNNSxYKppAmJ38c1dBozJHQuQdiSp4tHmqEqP2",
  "key33": "4XSLkbm1ZYczuxtcmQKx4aYXjkN3FbwUTgDcR54FCn6ss1Puy2sKf2zQoDU1vLerpkuooryRDPX739cTJpngpaTJ",
  "key34": "2F7bsWYFAsEP28dSVjLvVTFP5ZgmKQYt1JPmNMGynygwXS9SHubsjK8faMThpG5QeN82pbbLrcDQ4YuF7ehBiGXi",
  "key35": "5FdntrKbCv4Q5P2AWDPcZJMqyRFnSMQug2UMFfFvVCd1PygzduAwEJg7dxXuu2WiRHd88A7CsRA3WhA6akeqi2dY",
  "key36": "eg1zLRcdbdBNQmZLRPbbTARYFoePrgyjEJ5yhiHkR4cEUHAyURNay8qiLuSKwdHwg6h1QHREYy6kYbawhaxcQBk",
  "key37": "3DZ6JXoLB6XWzQnYDdRYMYLcKK7EJ1szDuuWoVkFAmt2dtT9BRtwRNVryPnt4S4bEBTqXC8xrnWGVB3tucM5H8ti",
  "key38": "61CQAgv6Yt2MrjK3WCx5NT5Q3qwYtLZaRdRDMw7L1UQ1FMCcXrXcPAhzXgu56kHcfoAKPFwWGzofoMrXCKB5G626",
  "key39": "3jnvudygqoR8UCLzn32tGePKxBFM6dEdCeyxyWCZcthu61RCfvohk6kz1mNccffU1ApG9BF9VasDwyuDQinshtDU",
  "key40": "24mwR1uRGectCjFSA36kFFA7eakaSZVDGQi4LjSj4U8xDG6PThyT5s9w2KWVkLYfKot6Jn5BDMdWFTUdDboTqgo7",
  "key41": "5LS9RjEsJFgEvQ9ZetmYxiSpGyvXtJReRwosYHevZmhpvEtF7khfzHnJLrGsdEvd1eaFxhneA3jUqUxSVEEUTrzS",
  "key42": "2auAKqjHGGFxjU5MLGYrHBtWq9srdyKjo8sAkj9nTjpxf9uDF4grFU3LggXPXw1gBSSLcdUAyz6DdSAcnaY7qoVV",
  "key43": "5fajorTLXRBcw2f1xsooUyAVV94ADjmBBgyFUFYrnhutYnEf6CHo9Fce2TJvHbgiEVbUoBwqkJSfPjMhYFGbD3eG",
  "key44": "2sLVrbPTP5GqQ8mhcqgsH21KYm9Q5LP3aNfUJfKMwqZbXxGiaMzvRrRP4LEKxWpQGDZodF8AKi5f9mSkUf2jzUP9",
  "key45": "3ecnankiG1G8VPkXaAmLLZmCvtvRZegTB6kywdvDjyji3dxCiMNjLmxhWPAhrXkhQ4Pzicu6pMsaVFbK3X3NH3Ld",
  "key46": "5tSHjuiT96ELwx4ZujoZPmMtjdx6CHJBDyJUEZRgLQ5KCwSukFrDq1jtWkJZi4kujYMgjL1fQF6CxnyEKzGDBZcs",
  "key47": "4eUC86eXFyhJpFxCpByiHLpft2m1HSjVr4Zrc2DfTPz6y2C75vhumDK8yKivbnXTkHa7yNmmQBb73BjdPtDfoPcs",
  "key48": "2fx7KKXNEAJnYNn19BJUUAyJvrQ4sjzCv9JpvZWvfq5qPoJhci2JwTBRSi8deMbyzWc5KKN5i1oD2GZKcWtUVY4G",
  "key49": "fdR6CaNfV31EDhYwbKvbJV4fsFomoDi2f4qGvsjEy9HU8ZYqZppEDCD8RtYrMSaEKA9r1We6HfNkpwbo6GGJtW7"
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
