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
    "4qUKp9J2BMa1KdoSu52hbXJjkfCYTAZVHqmh849s6HbXAdECfSyJggakfgvg1FXqkNZbS1VBZJwng5a7FQ5Z24wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r14ckgDsAX3Q7nLxj6gG7U7Sh8BNdJ1jSczN9xYQh3UYEzQjTtCLwREEnwiS3U1RUWPSCUA4NQnhwuwRSEUFZ5g",
  "key1": "BQNz9htZ8zUoSdsqtgoAqq2n9qTSj4Q8HtxPm9xnej1xin1HBr6ob76YJGpFEhi5K2UxtZhS6iNneAnfWeLtMmB",
  "key2": "4QZZBNkPwFjhj4J4Y1LieZMkxjN4awUnvg51pFNJ2qR9xkZYgnD7jWgo4WfwwVq2VuKvH4SGg9DQEhjBxZMv665n",
  "key3": "VFj3rMJsQwDJ52UHQs8FhPNDLT6mVKqtjDUPmxZSZitZtJFH2uaQKe8eq4viL73i1UK73SRt1BeVBEkq3RfAhBA",
  "key4": "5qPduqej5vptmPh3ojFKwmpyxZBaQP3JemF7deZQy2Fe18HeCnXrW4XSG7cSfYjtCow4pK8Cvh2QVs8pGxkAm6A9",
  "key5": "4jK9wM2YAN3RB4aukbhjoNyU3vyyZ81u6T2BRWFL7bY36nB3mRpmXgzXPDbtALpuRB1gW7SVXYZ6hBR42tx7QNdW",
  "key6": "3dWh7VC5QVdWs4f1FRThqowjT5SqGpe4g3xftZxeBMu74cxYtiGagbJJoACB6xYki4ssZ6px6fCjHij758TEWfZb",
  "key7": "8keBP3eyvuhKny1QDYeqdpadKKNaX4mDtMYb26Ag398C1LK8MWUzG64kHdfTfUgjhwPddKnTTRkZvj71u8Aobws",
  "key8": "2CWUfmjZskE64K63JY2g1bjyXQiVJMY1sUyrn16TAEZ6HJ57Avgdey7ivWvYziwRD5gPkisVrqo6Vpvck2k4SiBp",
  "key9": "5rTJKavb41jq2VYUKFWUbeicvDekyjcNNTYJED4gAusn3uLyDb2JEw3ri5JShydT9iLamhwYyFD2TJSgC5YxQKfb",
  "key10": "2JRRJbimXogW168wSGwV3Z4mYHWg1BcF3QkLMmLugLrwQybw1Puj1JKqnde7CdZD9uVnUTAmPsUYL9sQ44hmWAwe",
  "key11": "2iGrXTUnzrRWr1Pi2Hr6ceSC6fGrTsKNVdgicNRgvq1jxFCDoKWDd9ZRYJb3rj2NrCkDbvkUWbCnwWB4zZQkmfNR",
  "key12": "3DtnxY6JtDLSbDWiU3WmSUKPs3XtjoV737SKVgt5f1piRUUyykKoeJrd9PpEgS3bwBfgzUJwRxcQP8nhUBwheE9h",
  "key13": "3vJEFCUWAT3mDAqtU1YwEwj5KVLt7dsUH2pcAuDSSnPpfPmLpZNAskqzCHYht6L7JbSsNebM4oUKVTMAi21A8KDD",
  "key14": "8StfARX98mjawBf88As8Euf6LnyDfGJJgMMvbHzTo9BCaNyXSPvARGwAQ6WXrH6h5dhjJCfER93wUyYkjCP9SdC",
  "key15": "58Yq1KVSjF5hvvf5aDq5MWopkS7JQqa7Svryrru7o3B9gJ7RoR7Xm4kE5tg1XBUQ7RhKzvmZpQSuChki2e9MEM5u",
  "key16": "5hZnsF3fyQQ6Fn6yJnAgEmLud2rwcxmfNyMamWJwKhaaSGJCMN4sdSQykDJfUdy9MjNjEJDqP782b8gKnVZXYgY9",
  "key17": "2yvyDw3Zqkecg8ddVNmQrfMFKVSUHTKo6JqgPFSHCNeM3n3ZD5nEH5nBmiFrQMn8wMwTtTAp1J5FgKvUmyp2sVDD",
  "key18": "3CUAmfyw5fFvK5V8uze5CguvMb94V8TQ43W1w9ntuitcaMBYqjV62jP6QYNRUkuDbkskEPZR3yxeAdxenyq3bfiC",
  "key19": "3jLLr5mDHjqttWY8KWMmh3P9GdvUu85acppWGKpkE9GuP4nntg5RcDdujy8q3iDuG84BjiX2zqpT6NfWDrwTufvD",
  "key20": "FeGXioHqhgsyC9dpJG5pj5BbyBMF72Gkx3mVfaXNhtF7RDzkwt3gZQ6r7e661Zs6YUKqYfLyJk6i6QnUfZKCrgb",
  "key21": "4uBohRmAge6wsMrz3VPpZMaLDkXVsNYykbCVPWeHZxZBqY9v4p9UMpmbmm93vSfFkGBDiPwbk3QVNZuhDpqH8AnW",
  "key22": "2oUoNRbVfiGtjRcjFKWx3fdEnSyShdSAXzUcDfhtNi2hRY6iCGx3FEr5rzifbwZ2c6KV1Dsm6ZNbX4pQ6XKibNrE",
  "key23": "5aw3CJwBStqW1DDVD1VhrhaFq7eA5tQaKEsBcLo5N9QC2WcKtaHxZAeoWwtoz5Df2GJxtozZFYFKf8VKTBRbhSM",
  "key24": "2PUdCtc7bBwUTWs2xBggKNTSBpLxc3YWYLyZL11XePpZySCtgtWoCWWkT8g3FZtZsofKJb2ty6EKy7K2QQqPKBfY",
  "key25": "468K4neF43oLcUmSTkyMJ8BTSXnxumNhJN3ftTpieLwS3KKhYPPiQnpqgtWKkLPFKos6Cn4byo2Yds87vAjwibXE",
  "key26": "3jcdAZmnB4Sg4ApoBfWfjEdAysomjCny24wGkndTjTXHZYNzCJZkXUUHqoHipiu1DJvjpr1KM5yrT9xoLsoRkeXT",
  "key27": "5R4Vt4Wzv54jqJYXJbqSygXPAUrGonsLMY9Q5BRhFA8q4B54ArvzryD1CkxSyEBfqhGHUfYMqHUnm6WjRiZP7B8f",
  "key28": "2NQyJBHAuFFaPMZjsByYESmno7hR9tWrrEW6XaYMgAkj13URgevfjnC12wYDhzMdeo9DJ9Vm3rUkz5Fg7zbwywQQ",
  "key29": "2NDg2Hhw73QLj3w8EkwRwp2gaHZwAwy1ANDTBBUoKRQzRzdzV2oW5km41qdLAiwE5HCU5c71G6W9fpGK3EEuPGeW",
  "key30": "597yqeNfzGcV6Mt1mrPb7PMSUKredLgwZqsCrjMpWqDCZcmonb6SreofjjsQqrftYoxRavLEcewykkPUpvCbJK7Q",
  "key31": "4ufVaTY3gXjBjzxhrwPYEXCSMe7emNZzbV6mxpz17vNxnmtBvZm5rAW4gwdSEaP51q7SY8TJPj5MEekjCrs7rMwk",
  "key32": "3UM8RPGLVPNdw9r7SqihWor3zgUnQc1RNBW4etgU4Rg8Xph7nTUhpiyCwk3w3dM828GPyhi2ogeG5FbfsnX7vPLK",
  "key33": "5NoKntShDwJGxeW4LeL3mxoHb5mR14Yy6UPXtbDedZgfv4rriFDEK6p2xXdLhN6FmuPn2SMUGjGY3ThT49mQJW6S",
  "key34": "Uv56ZA3wWXjo7vb5NpSq91hrZB9fFbk7h1jqdMm7aSVQxjQgseijoPvpEDaUZ6n4U9mR3kvxdqpE5oaBvr26vaR",
  "key35": "4cFqTtWXbBT6gK2JWthdgivvi7z1ytTezrofNSvaHor315SBckVjJne3QHUv6j2Bq8hQfDhS9vgVaS6iWFoWFnSp",
  "key36": "65p24JAVyVtsdj5NArHKDFZaRwgbWy9Wh4DQMD5enk8jRtXCUsSgx7EGj1VcJWMyEg3Pu8RR9mRPxVNiatgkeJZ3",
  "key37": "6p4ozHuR8SvcWtG3hrruGYYXYUXm88ooq5APMSKsKaEGBb9gWnvga9SmrjGoR4FDzoJ7cCQPzrPrkHWpBSG8VYc",
  "key38": "mkXMy1fgLoSYGZ6SHBbJYyTPhZntH8QyENNo1zr82Ck2EKfkwwVccgmoQ4e2uY5sSEKpfiCANYsGs69P177Ez1R",
  "key39": "2sZR5UxsuoSYWRNJMBiLmK7UE4PjrSXhU8VPK6PQQ89PTL94jUCkUoLFtRfPM6i3ktKT4nCbpodd45bwTFfMJKPA",
  "key40": "2S6cuYF5qjjV5cbFSwRPyBox1NAEKJeybbP76S7Pf9eecMb1FP1YMxhLpf76j4Cw8GUoAGozk8MKrDvBVQP3Z6K9",
  "key41": "D1BTBejsFTANkdihTKABaXNZiv9udMsozEh1VYFofYrJmBP28eFg2QpgyEVixCbqkHS294JFuHZEUjkFswnRNjH",
  "key42": "5MFkK2iCLwASYBe1avUnfqTrhMV5meWMMnsvFXeaK6fmczmNBvjYih9tgG9ANhwXuMEvBQkdwyzKMUxNHBV78ZY7",
  "key43": "2PRCP8gGn61mLpAxCqCzMxdhFy2ZZoSCe9PHD32byP8nRzC3XDLCvvYESqAPdUUBYZxNdZJiuUdSzw5RcCVJ9KeK",
  "key44": "3EvqBYy8VJYL1bagrCK3LQ26iUixubsCtEpTXBHauRspcrWdgh3wcA91vqkN1QQiagMBAm6GJMYD6t3sPZT5gskH",
  "key45": "2HWiLeGUCxkGQiVxa6H6b1Sp8d9SBywY3roFGfHNafaqHnX9z29Qddqv73xFRsbUawwt6d7tmDD2x5mETK2hD6hE",
  "key46": "5DUscESA5wTjYuDkonju2H7Jwy1U7Gf6rPPx33nzW6sqjtpcQZqdU91dmHqaLJ582W24mSAkP1PhRw9PTeN7chRz",
  "key47": "4Vy3zMwBgrXRX7v7QmryQN4SsZ1SNeQbxWcEehUVRja8XNnCb9XUmiwwAxSfrzqimRYK8Q5pkEDoqhjiSgnBns1g"
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
