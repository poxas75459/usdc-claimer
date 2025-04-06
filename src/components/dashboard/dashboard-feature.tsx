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
    "3nczXaRLXS8foqvCFdYHV4Aod1bNmeBMYEUMj7mraZGsr7MNSurBrhzYVzq8QctzbFkytWaGBZpY24eA3CMKALAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LpuFaEMjKSqL9Je61rbCXKEnnSVWjEGSHrzYqVWDm8xsaTjbZPbJC7iEeex75RJzXsAFNUUEHB3LuL7kUrpaz6",
  "key1": "2tG1dJna61r7jNPhDitSDgu47riMUoRbW1VoPmaxMWFayjoM4kTQwK9USAEn2xLXhKFoB6Hm9Tb5H5WhrQYqdzrz",
  "key2": "kBRBcn9SPX72ttXq6n7ULqp5NiPhShtFcXHoMwrjTc37jKFh39p1sXg6LiXDKH7gGnrJFqefwLt7HcCTBZUpipG",
  "key3": "ZiJ7MpvncN2GSp7KASfVuFCxGcXsTbs3Bm5iF55praxv7SsHWECv7jL2vvoVho8G6UJvfT4xqWtknzZY6GDff4V",
  "key4": "5ATmWSPiZ8hggM9wQnsEwa1bnKWMVJ4jC2ThVPutCq4LU2RoGsmL28kU8fxu8rPV3gyJZmf2ki7jFg5GcD9pthgN",
  "key5": "sH2QJj8vYpUXZAnGwsLRibqztwtQcptz99ZhMKhbneGNoqPNfq2arpL86RKXUBHwhavDZsAKEVPmoDA1pcstdFL",
  "key6": "4QpVs9Ws5oSiMBPwveEPTFq3F8sbubEGMqXhjyYchsni6R7tQrNPFkTZzcszQ3xjkaqkDtjoMMGmEkBwafnEZgsW",
  "key7": "5JABdCFNBToHdCfGvfrUG8f7qvb9UViZvLBxgNZUopzmy2Wq3pukMhDp8XGUmiQoKAQNYmoYa9JZDQPb6fw1o3v8",
  "key8": "2Zi4Jm2x14yBZBXGMypxpcDBLfRSuLmdRtTUZAW3KPS5wqtkN2v7RDN2CfPmK5MQrZ9DVRreo9VMRdTaAVS7Y1iW",
  "key9": "4t9KjniLJ57KW7XjnRuFAopXUKPdNnTRmKdPuPSnboNkXvgBSYtNa6g8ukQfhSUFW6XDLKS35cB3B3yHSnwAsCWP",
  "key10": "4jnH6tBS1JJWZ6SWpqtxtR5EF5SizzrmqEXergXKwduXbLzbg8ydsW4Y7wbZBYtUUbu25qYK5ULGX9ziZC6pkuwb",
  "key11": "2o1YxpAUWSkFUWDDzLD5j98KPtCFDWfRq3rn1hRGxuyLmsm4kiLAfyfeXV87gwwwAGxi5Pxkj2fTF4LtkK9EpvKy",
  "key12": "4dm6D9YwGiJ87fk9SvwZ2Eh4SPqsL6vqhKaa7z9JxdS2Hd6Z6p4pgPm2ugC2L9yrXUhSVcuqeZ33kLchSEEYawQH",
  "key13": "2oQPGjBVkKooEHfeHt8FRSbPqBFnseGw9kQ9ajuAgG1WV6mn2HQhbV5o2FSC6mzcfJa1FCdHqxYoYcps6xgJoJzW",
  "key14": "4j2GJ754n5GBjCKBkBocjR1toaLEfdaF6J7FftREBYTPWb7MgiiVZFS2ogMkWyBg72H8t6tufjXfFynB8bJqwWNQ",
  "key15": "51nbCiFE4fNkdpkVNb5jFRZMGXuVgGMqr8zgEDTJymz8g4Rv2tP6R4Jon7Y9BeUVbvCahZTikfuVp9hJqZkTm9Z2",
  "key16": "2tgdmJ18kta34QUj31mhn647Z9Qr56vmidSzesMTJjbF1ns7U7VzCcQ3sP43PCrcKjyBfsne3TyJBazGJPy2ttz",
  "key17": "3qWMsND1gKPmxSVEkwuLE7H9Kp4PQEGARfQr6WxcmvKKxzASUcddMryKWAnLHKY9wV1tzZEwoaXAQm5z1ta2NnN5",
  "key18": "5UuxgMr1mcob1oc3qUBnbW8Cnua8CNgYQKrde9fnGcyAjFYHMVPAQtXqN8fvKzeJM6gKXBuRkLRjxDfeSzXDPYoR",
  "key19": "2EyWjdAqRTzkMVpY4TfxaqK1BJsTh2Yx1T5gjiGKimYvEnq7uFZ4qbn6GFAN9W3RdQXt6jwPJjtqghi7KKwsSCc9",
  "key20": "3C57VuyUhnQrgTTY839zwN4XtUun2NXH2RxHvb6ZN47ks3Q5eoRhg7erX36svSh6StftsghApB7oJS6Fbv1Sniaz",
  "key21": "3jhrX1Coc6DfrV5mgjZNnQem3MkKyXjg83Tr5G3kS3qW4mihS56RsWBn8BsW1ExtyLhV4bGxPiGjef1Gc7XA2g7J",
  "key22": "3y66HQWg5rCxBpUbkz4uqgjKNiiqWaayQRY9AcKqhw5ftNBxqprqJTmixAbaF1GaggjVVLz3nFNWhWjMSV6cP8zu",
  "key23": "3dnXLS1947bUEF7JY6eimGuimzzaZsQkvMrCms2jCVR9rPPTnSp8s9y4a6Jvck86YCVChAXFWAMwLu4YsmYXbeJx",
  "key24": "3TZePpYmSaBDWQLrhWrDSDygkF15PqUtnFLjxjFDb3yddj6aNN9it7pJc9AVLUxSdrUbyQ7pRGepF5GTdmJZuyz8",
  "key25": "5aKX7g8VRPHgJ9RNTdnCwJKem71SACHufBryUsmNDCjdhk1nXeWDvx9CFGG7QkMKSsgtbxRBN6BDuetmHbgCcHfa",
  "key26": "5sbTdzvSkFWV1vvrhPyGkc28Zr6YqN92wfSXaD4CS4wg8G2wZB1fHei38NoHxnyi78oJjzcvbEzJStpanZyuCGSU",
  "key27": "5eDfdFYiUCgjEoyL6ZGBGNPgVp2kpfQwhLoB7DRKG5ZQW7Yvk6RqEUkgqnPCje1gRwB9hPeCtsMBy5wdiS171hq9",
  "key28": "5WhR5vcGgkEtsvkpyGLU3xbhCcWsPeYvBJCookvy2snwVTF1eE7UAk4BAepFLZn5F66aB5U5FLTU2qdmZ1cLBo2d",
  "key29": "4qMPsfHvozu2Naydt7qj7yTyzeNX26q14eDgQtiJNZ7PgGSwyQm1vDEZqAJAzbvh72bb8mSz2jVxy44utDb8WfS7",
  "key30": "5rfkwFypkzHZaB726YHn5skSnbVr1XtQUtPhgKqPoxt6BJ1QcHy8WgstbcjQhzbhPKdNCH1VRDJ9jzpDehNiSW6t",
  "key31": "2M3yXgWqvdWr9d86gLMeCgNF6a9TeqmMmWiM9Meb4dkWKj7xJWq8YNEzv8x4Gwv1xKdoYXMpvMQg2hgFGReRGx4Z",
  "key32": "YE1QKUpLGCgy9ePAaJC3vWv68Um2sS1MXEex1CDMm1VvirzcrLn1ZysGVXJgdEvBEjDLDyYR9F16Zxa9jFo9LL9",
  "key33": "Y3Uuw5zajbRokKqHrcqwyUdX9qXEWRrYxCQ5foEtxW24HZ3t4YoGgSWfHczAG3BD3i1JcQMHiKhiP8kDon2uyhY",
  "key34": "2Qg8hc5WpKiKYxf9jqb44pf8RqwRisAfUuypPFwM7nM4Qx2SNdEwREqNRS65bAdFDSs8VjbfG4e39NkPUgsqZgrw",
  "key35": "5m1eESfbJ6CMgMNjkb7a6Y6yDjnpUo8pM6Z47DK1FEzneWuTJKnLV2nAcAGQSrkKVbQnCjeu632Z4ouPqf4nGnT1",
  "key36": "5qyMFKTM3hsdPLQXX6CgMQ29fWrmp7Rud6LCxgeBQJzm7QhjnXSh5tAWyM1r6ee9rbvNtnKFSXZ8WmQDieWADsT7",
  "key37": "4H976P5k9QPVvqVwX28UFa7ETUX2bMn6BVRBuQHCZutcBWGtdHAmktdEZUTBsVSWUk1rBW8hXz6HtQ7yVTkpQ1Fn",
  "key38": "3wTmGkGY15ieUnTcMWcpeoRvA3qju6zGG9DBaxQTtw25XVPE8b13atjvP4anYDAanz6WQFsxe1RAArkCufHKmouv",
  "key39": "3wKtsGbnf62jZS5MjtCV3oasoPFiDqtzv7SpS3TXT5BoqQjC47phpPsXnPbn2tD3PnFLtamGorFR5zTwpQuv8gb5",
  "key40": "2uFY3V3vFwMsQNKNRbwyTruy4e6mEF5YiXEZbLUGo3JTzLpnrTKTornctMtRNVXckwYkjQ8AwBu6cEUgkryhEp69",
  "key41": "qioifGfhv3mgdvAcfEszc7o3WCz9Z24w4awiagLADexCPxSYWX9iDHkEtdB9xfDp66XcPcu46FiizYVaEVbYkB5",
  "key42": "3b1AkfxsdKo64T1qqN4LJpVRiSZvR6KJ4YVdbozUHQ94pkPNiYWvBh6K9tsa8P2kBnWg8o1z6QM6rzjXGhWhWvrp",
  "key43": "5c1ktxdt4s8kusiJYpq177kZaCBCjqkWvHLhoZLJJ8jKcEmJQR9WkUrjCvGQc7souxZC7End8svgLtToMa3qFBiV",
  "key44": "e8svcnzTjeHrEgmMr6DhL44cdrfpEXqUYZXknefx3Crzsc2bNosqKZoBzSPNtYSJsiFj4zWe9QRdJKnRWpX8YHf",
  "key45": "4iA2zepAXdwju26TAoDno28YhHawPJpzzu1H3wkwh1rPW25xrvyht3oNhhyum2c9PRzoXQdr7mabqFsTZxtF3UtL",
  "key46": "5WbhFBpJoh1ge4VutsuQS5HvtLXLjvMhytgkMxevvqhsLbiFBJ7YfufCZnA8Z29Y1bAvijk9mTzunn6fRWme6DK"
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
