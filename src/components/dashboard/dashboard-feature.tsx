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
    "2xsGRfQmaDroRELPZ43N2fACCCFA1cqcjwFaobSwUAHDW5jgWkcqdUXt1XjW9ND22CzHfvLeV3bvTuRpAQcsTazg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SB8nDWzvZ1AwmjQJUeS6cbpxu6gwohok3ZsME3KimkBkmizVpAbxnLNRtVdGxtkQ1J8gbeuHz3fvYD6Y45FL9TV",
  "key1": "2MnhDaBCGVWuv1Yz22NNeakt7U2wyb2BTGtrMxzJVdzWuVeqEYLaEZLX9L4K1BkTjs5er8AbVkrgQw7LKuhzeP8v",
  "key2": "4UWrN7J4QJEXSdNX3TK3Td9P125Nn4N7pp9k3wuAfJKPxA5nRf2VnAgQZh6fozirFxtKnDyf4pdQuYNM5DiRkaTg",
  "key3": "3Q3PpRXsyUNVnM1py2fdjsa55wZGs6C6sfjHRcTfVXS2Sjor2pS4EedsHMjD3Sxd5eu9LzaSK6nGteqHjvZM5Cze",
  "key4": "5cVWxpCnAzetTXN1nEcZNdMSV7GNWAYnmHSKMXpCNtuatcA7raj5obvJJ7ujM9zPczqbDGdt72XqdzTHboaywCb7",
  "key5": "35eG2XKuWFmWd4jieb3NDeCeGV68L1LuDF4fA34YsAXpoMAMr4WmyAdjpBRmMFhT5LyDgxZSajiT8SPwfnH79icv",
  "key6": "3RQT8wZrHMx9zfLbLg91LMVD9BGWrdzqv8NZSLG5Dyt1Fp1eAZ6h9u57HukQHevEFufsMcmqhUHpizjzQg3J9myA",
  "key7": "4FmP1XxUiah9H8iQrLMa5cBskBfbfcRq2sFdV6zbVMLohYuPzZNx4E5KqLcUqTHK4Kb6kArqd447N1WFaD9iXaMj",
  "key8": "4jYSDcYP3aVu3PogDDBSed3fXzbwbx8v1Ls1Juxp14ZsTLYw5W45D436DPsn7xUmXUypzH5eg5v54pjnHHQD9ZM6",
  "key9": "rJ4GcktM8L1KC7WwpqPtnjxNCjsWtWwNAbaWkNkieYscNW9phtFgbDuVXkoWm3WFR17A27XepXMTNk7WAiAYtJU",
  "key10": "5tP1Rit4pUfJXR4K63p3nydpPcKjNotuNTiPEydhY6kCpDJwZs6pcby3RVG8NCvwro2jKkzh9CPqUdAd2tGmAXbp",
  "key11": "4kKCbpiqBEjq1F5wLYCbXA383YygoykeUjWnrPoasQPoN9EAWyDt1abqNPScXAK7RYR7dUwAnwJpSddLsk2TVJUf",
  "key12": "3KWgXzepCYCdE7BxDTfGrDCJttKi3cwEcaoe937RGwXcj2Sqs8k9tBAqEcM69vjQSu65kNh9eJFRQH1QgPTWm5tQ",
  "key13": "3H5nppPrLWCfokwWsB2TBpLcnjoJ44fzcJ21hH2ErkoWt6qo9p65PjDiR8jJGv2Y6S4MZNaaqU3RCExuSsqUcXHS",
  "key14": "21sSbDoLGTPxscHyDcoyyQ534dvy3Jub2NRqRp9FujYbbGhWorb6zCesbsiB62LC4LRS46pvTAXys7Nq98MLnt8e",
  "key15": "ctXS83zxUHbzmhmqkdfB9Mq53ieCXrErbjrHusDBv6tfoRbDqitt2iaPhZMoMk3q3pzdByaN6jJynTypviQMMYY",
  "key16": "5yaeqNJeQiJqpCHuRiVFcBEUcG9uXLSdLrwiB6mrVJBPNZZCFjxzPMY2sVm97XQwiqjEbmErTv9TtaYGKPJRYq1u",
  "key17": "311ahu9gSbyiHUK1iF4gLhgTCj5yebFQ4GxCmuCMTvjBB2nfq56B5dwYXXrwNQqSFSMbchD7V1KKB4aaAVdd47QB",
  "key18": "aZPpVsYbFd3RwCVnpcQPQnmVqMAFFzsX9m1iGRJZVUxGHdfbnff8ZiepNngcsJd51xDCNXZ8xThHSWuRN3265kH",
  "key19": "4DhhvSL29Th5YP2oikh6YekUHMDUBueCwjmm4bm8ZWjmwfPf4FspbyA29ru2YPD58MvgfSupXBffbTjV5UytjBQM",
  "key20": "X7JbBTzSKNqf3aiJ1dfUzioVZEgeHX3p5wKfzqe13qVMs67fAvgYaDyBiG6746Do5kcrqPhpuYJKP7jSgunvUbs",
  "key21": "3Ft5Ch1n3ztbtGKXx4drcxGs3RYHPbmxBetFtX9SKqkpkZVdB5WeyZStFazGg37RtgHiE4CPzqzAtjS4A5Utdrv6",
  "key22": "dFrofXXsvvoGPWqG46S8vpUaQ6HefAkE9CdegBu5Pk4ChUkfWzRZwPJhd1gbFnjtGNFHXvHWxzPPJBfH6TCbUDY",
  "key23": "2LJCT46hCQFuREkFaBTTtjKF4b8iwJMA9fv1iE21iC7HoTWFNU5ztB8YezPyaoxq5KFC1DGyynUwZcDNoKURpyeM",
  "key24": "5RX19uz67vcHMz4yppYFoRhfKCcqRsZgC3kYNKNAuV3w9baoNDa4aX5ieUQPQrALYQYmHUJ8Bykhx1uyeKqV9C8A",
  "key25": "46y1Av8TFkGoSmmj3377ZTRH7uY6t4JbKKA5BRC9Fmiq1RdQMejNdmT5Uf1cCkk8udRHwewskS7LBP6MvTA3Vd7G",
  "key26": "616o9uN5cweC9GcgTdKSDBzrvntaneERkgTTyNHnfdeZaJSqh8DuVBoPZt36JxjFwyyoxrpbA4cbGG6rnMSeWR6m",
  "key27": "53WUPip7hPJTCjjEwFEuF2PfYqVUdj6wbpzxr4NJw3JiE1GkRDoGc77xwXjBNfUUzPq4r18AThdQXfuCbt674x7a",
  "key28": "5CMpojz8jxXJDGA8LoAF1bLGtofLVCgQkX1F5A4XqqpsGxgJnkQDiEXvC8E6159AeUkucWTmgDur2NX7saR3bvHh",
  "key29": "DBT1shHfo6TmQ78TPZGTBfLf9ZmzuVxp7x6XdDHX8NUdBvCHWVZqjSmDwkBAwocLYPkPoQ57QUycA3bQ4vGzaiB",
  "key30": "5NVeD6gnETQ3x7QfVLdsf55n7iE3dDqwz2ZLrksGV7FJJnJYrwFKZCrXUCCb6VDGXRRHFNs2jKyrFtvCQr6ZNHx7",
  "key31": "njChRtCHqnvusbMGZsmiQUAZxiEhhbfd2VtwAfAydPu8jDoosawq6SBUKmMFYu534xTsHdkCAY8FViD5jBN6b4A",
  "key32": "BqpsqTvdi3SMQf9yijjFc5kyuV1YSwWxqjr9nooHUfQWPEHkVYsVekWqKbK4CXpv2kj3w51qXaoUcRr5iMgnHp1",
  "key33": "55c9LCo5awDQ3JZEVuz7F1Be2o3UKbVCQUyfNB53dvo4JfHRcRaUFTUJbNa9j1Xer6sMot7UKaaJCFW7QfZZc1uJ",
  "key34": "3FPP4B5skBxG3eNxWJMEjx4hYFr4eKeaJeY2YUL1SdfU8dgiiAzxVNkiwmZH9LbENXc7UrZj7agDELWpANvMFKXu",
  "key35": "5E5rJe6JiEiQBusXHNRLsPGnGXkPXT1KCxQPXYHN2crgpBmTWF5y8XuAF1RwHPeUeqpBFg15qZxEsmExvhqnF4MG",
  "key36": "w1QVsFhDp8cG31brmiMhR4rev6dcdqsWFAhY6HaD2n2QL7eyN44PS5xRq1nR9QSRhuXeFGY9ZfJRKTcCxXcWWcA",
  "key37": "vBZWrz1h1HBMFaHVgPjbvzTyj47ewuh5Qz2EcK5ex49Q7aSyYhhMdDX6ZShJEoq6oK8a5ksP9wScc7PStUZLjkd",
  "key38": "62n33s4f6qCxuUF6vpVtAsvwTPkfKGSPpJFaKGfYV2EJ2F1D8c79rHSNDqdxyw2KVRM3eMEK7smWZMuNm843BrkT",
  "key39": "222ypZ3MQidxUoMjKUE1hnzvMhPN3uffP2rDkdzro6kosD9NH4Xy3okjChvRyQkVbMqNCuPzLY8Rv3TH5xWXUCTP",
  "key40": "2aW4aETCsvRCUVMKtkAdtLno59yDwA7mVWJt7SaSeEvNrtmro8Z1Cp4VbN38Uq5LZB8oKjcbmDYkPJHL2StvwtKk",
  "key41": "xCSNPcmCD1eZey4Vt5echzhC8tWyy9DJMbrj7CbnuL5aeiWjbWtqPaWRRgspduwxvYRUynqnCaSBW1GW6z47NeR",
  "key42": "Nvcdv8rAFmTv2kuhDcUrXeXyunMoW9vwGpe59yg3SW6WUkGv8oBRCAu2JtdUDvauJL7KJTMwPoJTtH6eDRVhgqd",
  "key43": "4MmvzRwsmkA6CW8PFnWqBCxHHQoVN6y1GFug6qCg2pmun48pSECgFwtjW1HiALdrj5Uxne8dcQ5vCRob6zHJVGMt",
  "key44": "4ZMVf5iZfNmveD9e2YCu4mDye6bUZ2CzQcpKrE8vCQn8iu7LYFap2TKNAnVHuLBxB9YiustvfyP8YJbq429rSkaE",
  "key45": "4QdCTY5qHdMoSistRweDeZJh7iJxEfVd7h2ZrocPt3A1qccZpGJSg2oxKdtymQG2aggnpcSbAA8hDf1arg6rd27M",
  "key46": "3wjR13BQGxhgGfJG16EzUyTJQjqMCfvoBN67RPhoiDTGhBsdcYe5sBNPzmoH5maPEpuPyGxAJMj6QnPXriT79Jbv"
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
