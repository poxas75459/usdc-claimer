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
    "25LdND3L6Pq8fvLvzs5wc5NefKKAbXPb14ZZ568uDvYsHU742hkLfKg7EeTxSvP1kaA1n1wBswAFFGpUgwEedfrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fxp3pG2VTLNPTwA92KYmRGiMY5ExfJxafbJ572x8yiotjydxDKAe4ZhKwBJR4ZaK862gLbzhuQhhFNUckTZeFcZ",
  "key1": "QwaLHmCMEN3CH5Gz8w6aGdRc9Qhrg7sY7KfzpBigPZkbixzcE2uMCzvZMy4cJKvVdvztDz6QrNW5FTFAciz4qHC",
  "key2": "zGbEDjyBEbWiGHi5rFBcMeDrf1T2mMHHfsR8NTpQwiiNGzCcv5dmZFofkPzFaRKmfwgBVKoA3iwEN2qLdrWMs7F",
  "key3": "RJaTBizStbpSdZh1mJDfwepS59chYUnR5aL1tw4153uJyGHwgyTYaaS9UV57tWZ33jPBXF1YPhbPDStWWMpGvS3",
  "key4": "4WXN4xDbRv7PLHdCP7AmigXL5DUKY686ztmkgjbTPZF2STkM2V7Qddp56X7DEKMMpVhZY8M49pDpqgAB34up6TzD",
  "key5": "2HvfgRpFHSb6QBeFhcLhQ5onHkWLThNoApM6Eae7KtACjEphU7yoUd2i49JWCpJAo61CMKA5wwHa9ydHAEo9B2dm",
  "key6": "5Fv7dhrLMw7tAFSekrrf6cG1cP1Gi5KxYbM1gaRuhE3Zj2LygpKooXjK8cQRWBHevQWPZaWy4FPjWopDo54jF85K",
  "key7": "4dUqz6KzPHKJFNeoHBG6LPGETjSqKVUJUeSjU7smF9PUggT2t95jWaxSFxSS4v2y5WKoH3hNQEySMe9BWHo2KFoq",
  "key8": "nD95ZcLJLw8Hz9N7ry8Kjw6ig7zv1e2SLC4pBs3nPzJfSd8hrCWDfeyknfDrSikQfwRMDufyPBWCqd6VxZdHMCT",
  "key9": "4eV3Tg5pJWvAE5tpmPbt4u8TKZdz7VhCQbvWQn9YjeKAG56qNt5appEDnN6msJ5XymWaejkmgDn4DhrwgNVW8dPj",
  "key10": "5o5pWAjWjyTv3AkAFR6QiVbVzGSRm8y1Bqw2gZ1QfrxEhVQA47AkKASorcAwjv9hNXqCHpAsVyFwLsZQ3mVyE1Yu",
  "key11": "r6d12kbVtCoAX1WwqCHXZr4VzJmHnpaFz1HNYzM9QF9pT7siV3r4CCnZmbYZHKadkNCEosnNHKtzCZ4EXkoY6Vi",
  "key12": "31YkuxVVMfokJ5NZn6xXX2UNYVdEMJJmqBquftkcZzoNeW6QGvzW34tzmUtjsv5v3iDDGuqkMdNyFk8WFqJVm9Ws",
  "key13": "3xVYq1ttcx9Eo4iroRAgqLTKuFkYMkM9zdbpccfqshg5WcQzz9R8pBRMDojXB5uVUNLw33Z2aFrVUKHRL1QCQ4Zq",
  "key14": "4jLG6dDvPr1tvFC9p4WjLqZGQtK8spMV3G7EmTYdk7ewSh2W5bPmP8kqA8PsQ5jcFz1qe5WvCw3CvpoNtj3o3wqH",
  "key15": "3VqSxWrhBn6R8XSugmw76JTbHeFtTiQpMYe7ypXeue8H3qZbzJJ24risWsgNBsaLFuRMEqUpE4ZM473SxJsvJMpw",
  "key16": "2fv6w4JnveGeW8Yt8y6PtCF3CZ6LjsjB3N6Vw69SZRG4kQKwzt9rNdq17QFPxGYhQiUgtei6zCcWVHd8KLS4GBsH",
  "key17": "2pBb6RSxxpUavP8GJU4Hn4xucgHwhwArTz3mcJNKUGnCFF17WrHpda4hJtWEma2DKN5eGuU98HzmGXMCCQMAfAw",
  "key18": "5fDxkDucEuQLVjxqxsxW4pyYv7ZGomi7Z3hMjw535jMteayXorGtzXhoWyQGKRxAMNzqkoPnwuZEYvM9Ej6FUZ44",
  "key19": "4cUAVqDZEyWaLkP7SUxZtzCYxB43Ls6wnBPL7gyeUGo6qWUBjw4QvHK1qEzYzrjFjCKQuxqo3oQu7QqBV229RDnL",
  "key20": "chHTgLquaCXyduJW4B4YekNAGETRgA1FrjyrY5axWVJMyS5y4LcuTfbYUCsgAqvQQbeh7vhur1nKud2KEsoHNpN",
  "key21": "4ncQMoxDgFBwiaojnaXc9hoQ1L6diAMhKTBot5xFqoBehEyy7XzvdoqmHofrwztduLLdsFLsdvhqMtmDnbq4c3WX",
  "key22": "41dEZiRXx4mqQoveWtnhut4gF48KXhTHuAFQgbdubk25pJh1uq9JNFu293gnd1qYsYZC9o1NwSZnT9wLfGRd3SrY",
  "key23": "5fjXRj8GbVWPP5AJq6BV45gxyvMm37Wmt8GG2dHhd8K2ZpCnpvNSCwRu4rSAuhEMDRn6HtKHpKee82rbT4PgPvUM",
  "key24": "26Y1ZSagb8qtWgUEYrPv6cDyAQePAiC91zvDFwG7ntsgej1F8EnX1t62iftrR1A8zeFJdoLqAsS5L7Rhvt6bRcz3",
  "key25": "22JY1UGXHTyeV8owxHXtQG6Z3dVhpTR4FjmMsUgJRFAYXc7x82CNReFJBdngrADQE89zEmcrBTnvfm6FV5i3aP4r",
  "key26": "2BR1o7cCA3cx5bo27H4Ph4pc9U8PVtpjBjj6PbuFtpfVDpY1PVWM4UD76oB3YnCoEcXmgHaTEnvMi2dUMEh4TrXV",
  "key27": "iasiZoTNZhi68dryzY16Y3VUAkZZXZ3D5jEGK9uB74ykgQDGen6vvCq3BPaipD96DcXPfG8fD7kzWDnz742LaUD",
  "key28": "5YbPbGQPQ1Wh4U2FptASjQ9D5Gs1MxbLhgaUxsxoBgZZ88HUGiVgUrowrNmhxv3n7CfsqzbJegbVzN5NgbDwtCD2",
  "key29": "2Juvh5hXuM1jdkJgyJgvNeRHakRS7YMRk9hQDPoSPdJ1jK5q1gs3vHfQz2bDojaCAa9AfjBuNBMk8ZKgKP3T2jFz",
  "key30": "2fMvs7kTbt7jWdxMXnnZ4fNv9mBQ7MhUDSK5SbiiSMZujs7ZGrsxsZGXezCS8Vfy8hxLj3XxDi2Nsr3WoWVyE6eB",
  "key31": "2UtHrmz9Ah5n1q46NgcFcuVhozHAQnCJxjn8yiTPY2rRCvcGfZj3jSWhsVJzUcxkaiWcc4JZVC47S46JWPRwoZJs",
  "key32": "4MUV3mSGncQTU9p7DKnK4AvmnvKeJLQhnMd95YJinfGftQForX3ZZJVS5AY8vTQYhSZPSit6e9PKb3TVDy7zqcnn",
  "key33": "tPqM57acn42T4hsvV8GhGHUEQtwiXXe3NLyjgMCu5LygcjFSqxM9WBB7mZU3dAN6UwcLrKp4mz77i6N64Gaze3y",
  "key34": "3BjFHCpRbt8gsVUU3LKCJxoWDKGsQYuCwzwHWEcNV7FtnfXmSpH5bNZ3p88a7KtHdGSBwg5AWdVFodQJoT6pVQQ6",
  "key35": "3zNgHU5D3ui6DYk4FksDvcd7wedhKUzLcGd9nSyEGbhham6Kfez5reiqRdBhVeFkGCJyTu6PYRUjp1t8f6Xs7nJA",
  "key36": "2JUVYaghRBugBALR56s9pbKDW788woNCdzjY3tfpfmbeW4hAxB5DWZYL758FnJqkUnsaJwLNVwV59fHfoNCgJjqf",
  "key37": "41Xz5DpY3AjW3qZVGnKqGcMTmAY3GKDwmU6p3oXg7yMoJWBekCfsEWGFXaSQasWVqMSPwiHZjo3yuQBpQS4E9ZYS",
  "key38": "43xFjwDrsNwBpTEKe81C1fibcP32LEcAa2pLHKndqrps2GzikbhH37uAXnccUWEdwfQ18xaWjF6vHu6yJgas6gZo",
  "key39": "5D2fuWETzQGyZfM6HHZAjipLniwoHioYATPSM9b7Hyi9tWdSw8f8TXXgmUVxnxMRVTP62AEatJ6JTSNgX2xNJsac",
  "key40": "3N3H4oaaQhkWkMMeGK93buEVEp9cFGZ4RyqTamCY1UwFpxD4ZNV2w3zjEgEMUAeDS7LFZVXhj3iqmu8MTC2b8Vr3",
  "key41": "3ZBXq1uWpcnhveAoPg4y6q34wQP28qHNiXVckGrargZzN3EHGx5iZbfRttVBLtdcQcbhonN6UjBgm4tVT6mJQfeB",
  "key42": "5fje4JfY2WRiBsABkvs6VnUtcSXeBFGPvpwH3xynTgpZusERJ9pZcoFgkXbFvkvw5vx4ugAYKyfVFM7yM3oQUoLH",
  "key43": "4JVcfsbdNGJ86QXPHZvVnRU8zv5bc3j3ageij5tMyNoimPGtc9JLKmbhdmnMGgyUxrZtmgpwCRQ78oTBpu5TXmiV",
  "key44": "3xb5fmfYrCftFQzXRoeHcaMTfFBCixZ7mTbKbFcCUrywXXg94VSvuxv7Ys7DciAfKzZuS4uHs7MRadBfMgNbEzUs",
  "key45": "3etATRhqkfXGJEYDjVj5ShzhbQGwTawjUrvdJkT3rbi7Pxn9c1vYsf1pLcficrLEiy2yxSCeSrSDquMiQVxLUS6J",
  "key46": "3ssWWW3Ten2ycaLQ4tVgdjtjVg4T3Z1KZrK3G73jZwdywAiRnnnCNAJxZjp4cUfM1Jgxhbos5UDUdWejhc2jqNrF",
  "key47": "5RmG1gGcTxXAMAen211SnwpqBT5NX5ixCxqinGd9bDbzAzz9USocFhepCfJmVdmhziCH6dDFipQ1iCmiLnmG6Cwn",
  "key48": "UJrKvCqhxGCrPfQ23iwmxpmYNm5PsCKJs3uEcLfSZqjs9QbMsoBr3sHPMbVak6fBCnJr3tiM5veeW7DGkMyEK74",
  "key49": "3SHauwbyUtJrsoB7ssTLbY5QtfMHv57rMiFxxRLh4tQGX2rHwawHY9H632MoJUW6s7fNLAwhC5N4U5yU6YRkrWgM"
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
