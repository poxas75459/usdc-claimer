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
    "53ZDv2cz76pM9cFACbBdXEpWHS6Qth3RQUNs8EKgeNjCkLsXTG1VAiKMeWMyh1VbCBSrRnHY795wkrSgBEFkaNfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtKyeAJaYMiG5Dtfsmu53NoQ2GY96diMsT4wt1e8EWCtcxxDcmM3r9uCKywUbB8DV8kj6WW3PrAVNhR7GNo8wuz",
  "key1": "64gfRSJrBpUWKZPR3fC6MEo4gKSFsb9CLkqnfhPvPzvaqCc3kz1x7hm4JGzgiKjn67WfqTSeCsEsSLTCAxDFPoAV",
  "key2": "3bcFu2nguw62gJJAgb41HQenhJZw2VFpMiYuH9KTEmUCK81FhLtT2Bbf8BRC1hRzKaUheBqs1hFApMBbfti2a6kj",
  "key3": "bRU1BNDBiAagV3pok3PmPSatmSxv1rUDEXiKJNXqXvAEqVMpWNshLtgbRMFNHWsmyR8fpq5wTxyosLk2TLxARcy",
  "key4": "4zTi15gw7bfCNxyHbmH1cZs2gVR3VoHTw4pBZGrD5hDKSdDt12qBih2ouJKqF47rUYzD7prrDxPUZULaUgqbUCqQ",
  "key5": "KjNPkbbMRhz5mawtZRo4ZV5wvoCf5Xts5xFE4LybymvJnSUN9VkkXhK3woEqAxku3Ep4Z5mEs7Exac4K4qC4cgn",
  "key6": "mh19oPHSwZNsGncoRc6pjstSGudKDikXsvRx629qnUH3V2TBGuUqciG43m5scehRrr9XGxPYbgKyvwkryVNfKy4",
  "key7": "2WEtvAW7KyqsqL5VezYVRweKoEk5WNRxfJjf3brmFQQ1CD4pzBnnZy77RUvCxs6zMEHT7nUdxBGgov3Gcs2awxea",
  "key8": "2W85qaat2wuCrpyPB94AxLDWNe7xjiHtA7Do944aGhXhoiNjdVEoqF8c7kCWJPiP58zpFUbtisJC6PMVZLYRuw97",
  "key9": "4USCPe2PNd1E6jkPdT4h8nuFrQigdvzz5MDxxiLD42LYTRKQC7tbEyShmPABVjeKjPgNgTZ4v3U8MmTwi3N3RaKN",
  "key10": "43dBZyG2zwC4W4PbvK91Gx7UHsac1zAibuhyYgQhx4oUZTxEossqHRTwUBAfiVU85whRaJTUQgDyHP5BChVJjbH6",
  "key11": "5QMxvxPdxvZ3BnSuE114xPVQYbhXFeeWXTCtmBYk8tNPD1CojS54zKMtrdoF1tY9oWDdLFb2SpEYHSNzrbqDeAjU",
  "key12": "3ALS89sTNkc8EhBZruP1qEzvZJk26E2C9bjGzjfmbB3uvAkYXMjwgAVfG1eswbQd9EHDWVbNCxFcPcGFiYr5eTMp",
  "key13": "2T9LVyaSoUmt7etNZzKg9Z3au4TqbEAvc372GBTvTKyRjGcb7M78GBHeH9WfwXPdwDc2nZyXKEuieJsMuYwGyFzC",
  "key14": "PA3ckK1cq3XY3o4ZzkDxhsY6iVR81qhCFcm35bVPynQGscnxTJmZV7dbp8pX9LfyLjooJLaYpm6hPRN4hC7Dkxg",
  "key15": "45qVy2UeMRvPH6PHzDRekALqAXg3LESJscZcLE5jDe7xUdtK4iHDfEGTHeLTip3pcpusfLRWaJjL6eTebz9z1Z7z",
  "key16": "5ayoN2fg4i1q9LLP8UKXwoqyJP8dTyYoqBiiYQp4HNWmmNWVotpgTtGSoE7PKzUF2VAi9eakQM4WLBgkWtM3QJGp",
  "key17": "ZwUTwAQ7G7daimj66X9u7RyfscMfQH3okJh93yNcRjp5kVeMnaLzSWRLFGzgwWVWYKLzzPg8aFY9V2SeZrK6Peh",
  "key18": "41suNfFxT7pPMu2TFQcsiqbcY7LZRRvZc7vWeHwcAdTsQ6sSXRL7H1nkHYbkZrvqqXVTrLFw47Nm8fq6DGuLfwPf",
  "key19": "3fXzDff4G5VAnBR73snGHFN6YJKcZozyZ5aXuEBzcmbTvy59MUTYdcB1rVRF3BXvUsTBVEXDFU33Hxj7PTsJMPd6",
  "key20": "2kCR3o5LwyRQYHV3CDSBV7aAEMawVfv16TwXA39ghoreM1U5yGngzzcQuSCTM1844veBQNyQXqAYnKh2vCn1mUoA",
  "key21": "3UvTbHXs3qVcXudDrtypVik3XFZeGA4ps8koq32ZibXGifewsQLTxHa11nzWQF435NQDr4djmsajyZhAYoAr7zD7",
  "key22": "5sHYpQAYvzKJhSPztrm7uzCtNejjVuPL9dGwCWDE8xLyXzAXkj7x6J26erir6ewug7fd7uJRnQtmAx6GrVANFfSM",
  "key23": "54knnuqUVivPaeBCMcHmn43SMgZR5Zitte6WDmq8QkbWP6xiGBLaEjKVe2ExrcZm1Xtt3vf7rrw3v3AzhEpvob7q",
  "key24": "5aWEvStSgXKxPuNrG4EPonWTi8mYbJWxN132JhyeY2oHA5EXpEMJqo87qGwZDNy6s7bZTWJXtRycMK7BKgAPJFyB",
  "key25": "2Q4x8iwzQYwcAUSNTbVRS4akJ9Y7wepGMcEnc67qoEyQUCF3CMtzXbniUpY9PmYREihkBLfeYCrGgW8ZSP7mrNXu",
  "key26": "3Nyf7QpJmj5BAY4z4XbcrYGudMDdiT5zv9doCvp5Nz4vu2p5ACZqPhSb5Mb6qa9KiZthD29LcpV6i23a1JM89vgz",
  "key27": "5EMrEM5vsfYLPvAvSt2XCg8cp3Cv9roRSb4gqbKYTfhSebRDu2TMuYW3n51dgrCkwU4JFfgipqpoC3MCaobXvC8m",
  "key28": "3zQf4g3bHt8hhYL4aUzXkyd8GeGaNta63jvWEZsQBhSZ8wKENqdNsfHuHCGPLA9stv8Y7G3m46DuHqP3CpyaRmmp",
  "key29": "4wCDtQtnVUpovatSgZEA1ARKBsKjbkVqd6E1o9pHxa8dN2eZv6HAxcQ98ZmYGXjap9hmWFyTDAuczFyTVeNQFLb5",
  "key30": "4j1hX6X1NaVdNZUruVcMfnv6hEQ93nxkPfDX7eznLtpdYekjM1Wjy7txw88RD4kbCanEqFvURgSwWfYVxyciBSYs",
  "key31": "2Ctp8Ydz2UJ4ddoHL18CFJ6rLLXeWw4QT7sSo9Kut3JQxdSt1PnSFmKSpuqDidxVRg331eX83J21YYtaMfFAtqfS",
  "key32": "yr7t7ahXmpN2mPYddvhikQyV9jeGSHvyGPu9b84LKWUQtDLFTLPquaSgTQRT5uu1xGCre227a915zttXxfCLmY1",
  "key33": "5WVbxaxMwyzAy8DkWzp7KCBLQSKfCPLsqLXqbtaJ4BWu4gjywXpsAzqMZ7q4K9rKZgiuTcFytEq36qtqMyVjKMep",
  "key34": "4PyN2aimNfoEETvhL6Bo9iscN5hCrK2HQmHz6yVfnbLfHBAQjJCxmHkN3FX2dwESsMtdcgmUQUiDHqrvuvMeF9Mg",
  "key35": "3NQ9MD1ZoRjypQ8daYCHmSxEwHX13LCCevke6XwBm25QGiukpUBMwWD9iBoAmobSPQJPBcqnYNFRKgXKBLteNexi",
  "key36": "5E7ewRYahK2cjMiJEpEcYJgAwtkU4JsJsyTSrQyDjjL99Ph35Nq9Ze96jdjS6Vgidj1CWAS228k9AJmVrd48q453",
  "key37": "5UqtjKzqcU99WaFS6rtxW6dL229tSj5s4BT7V8fnjnbbnGmc9Qukv9ShzTKxp76v2YK9Y7WGWZnBAA5wLkrmRKV7",
  "key38": "3JN5Ak7T5aUBkwjDeqoWQ9eRkcw7PM2iVubDAEJ1ZCkTR15VAfJtYKTwBhV1ReYKs9YGinXrXFNicVxamz4yUauo",
  "key39": "2MMdc1tv6vErSvAfA8WyfNhmQXZzyRrQbwfV6qPko43Z8cck6Utzv1ymutW6mEv9GJsUPJAXTrowkcKe5v6QcBK",
  "key40": "2d7rGiiW7z7wR8xsPXtS2ADxZtLjtAp3vifD79k9YySbW3GDDBKjYeuMRpXNTx2jt2DucWRx7kVFAf5gRFoEG61z",
  "key41": "28zQLA6dboeXSYAcsEi3E6L3LAoWWaqHLY1B447SuGNUUf3trD5KCxRgKEx9CP37SkVxCuiVTYLdXtDUKFonzBUW",
  "key42": "3qEaDKUVcxDe6p4ujogyBfT5jBm9fLrNdZNs5DeRiurBYPJRhq6SBzzjabC8rYUTi7kRn4fZ9NZJVBtNxM97ig2d",
  "key43": "3L2FfrBbThHk4SDuineMmAEyM8mGqN8VPsh1gtsAzMcCN8GPohovosmZbUVoTMgkxkSsESSinSc5ZHUgj57mC3rS",
  "key44": "UvwUETHqyLjwPC7kKbsCZAu1bCGx6E2QJ83sk4gSm8Jbef4Vcb4PgkY29XvndAvNLxdomsBTeZkARG1rwQoGjCn",
  "key45": "3bjvDS6wBwVDfy23q9TavxV3DiMg3wycBXfBuRj6iJAZ5gCEU2smyj7U8ToRZ8rmF3ARmAXCvBA5pUTnFaAmGsHw"
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
