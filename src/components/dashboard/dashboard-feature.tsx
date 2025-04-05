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
    "4qYRCaa9Wm5HdozyGQfrWoiSmrQmPEWebpigMsKN2KigSp4VGTK2cZ3QrP3HTU6GrGjbcnEYB9LXKm1auDPCGRmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSG4iQM3DC3m3e7QV4N2NmN4ZMqZ9hmDpvqrsCCfcRxjSGzCdcDFTgtB1rDNqRjj9gVJdeyLubz9xknFyJiZmtq",
  "key1": "3adBBiqLh3CFBnjpuh2gnc2enfU2gz4mBU2ch3p5whGpxZSQ2U6D5VWz1oNeqNjBkq3kYCAdGEAo9F64A7PTyh2o",
  "key2": "3u4Ta332AMVTneWLPx38NWG6nMjoxbi4zzqxtu95A6bk2fudxwdCsQ67ysdC9So9XJhCozNH4cyv8knhkQ36Z3ut",
  "key3": "3X5ztYUNSehTZRPBMQypHi2FbyZhXPok2RcFyY6LEQVqzcyzsHywz5tbvm6b4rjBie5kiwHBnJyJH5JutJLsDhB",
  "key4": "4QpH8AmKLkFAoxdNCMictqoBgpSZ9RvUqtgv9mNWJSXH2E32xgoq9NPLvE98X3AW9iNUYQbiGwmZttnU4SXfQA2R",
  "key5": "5HPG52vNmqH1Mdr8earrvM1gee1QRdwrP1CS5Pd9Szo87bzekxvMWa8xwqCKzY97xsHbxmxx6vbAgTvsYxsvFep4",
  "key6": "3fm7ZBYbMEvCXpq4FiKGrMs9H51tqChvug6wUhGi73FdKKuVHXnkzTCec3T92N492ZcqKDpJJyjzqE5DpVQma6hF",
  "key7": "QUD8EhSsvbTrEhNAweEQ18ZhujEBk1oZEgEuqdMsfp3yh95w8HDihY5GZP8un5zS2t1yN4vc7LAx985Scmn9Dqa",
  "key8": "5MnVy6TYppbuWPA3u5512PwbQvWFx2FwHDBqpUTuKoEj2ZiKz55obEFnCzT1oeiGBHhHHjZQGw3UWa7kp5XwLWpx",
  "key9": "2VVQAWcYrhYo24sjqm9eJVv847FNvFQHNZW8ntgs8uk4hmWrVnrUScJZc9arfE5FrytUVn2U93bFXcbix1hjytaL",
  "key10": "3Ue7VpUrnosLti4Syq32g3i2DEpJ33vfTAVhyDBzPjj9A8X5p89MGAxZtsDVbJZJ8mn1H3HTmDYNu7Ra5G6dLzMA",
  "key11": "4U6yQsfCac3qhZHcUGxKDQvkaM6wC8xifrkKjiHvXXdZdbN7ZNZ6j2T7JeDoLv3BQAn7cnh7RQDf61pAE3cRrzJj",
  "key12": "5hrpJcKEaZKhWREa3GKXQTqaCcdwwBrhL5U9GfB1pr5KVYzQ9WDCXKaRfSEY6rJeWz5ZRyBojU7qUfAMGc9ymKX6",
  "key13": "7m24oY6v5ZbGtnDQoReyxiKtsp3a1W4pprN9JnHJT7t1D1RXJ2arbKTpZVsnVEUhwpcuhPfZshXuk7bmWyQFtBA",
  "key14": "4xz5AaJJsLbcST5Sp1qxTZSE8DWcFSJnwmRHaDCeRVW8pE8QpR776oTUtCQJRqDAxZQb4UFomPpGgMHXYVkcsrdg",
  "key15": "32PkiRDt49ALbvpPwzQM1FYGVT5H8Wb2uMUUfF96t6ZZQG4NmumWZkEU9THDAbZqhnTeYpyq7CzdiwZpq3bN8BU1",
  "key16": "4Mz8tkvmR16gMEpz7kYE5RgJfn6fbHri8tMSWQcgDZNqA5sfmWQy1eomxZ2HW6NRnCiWswP7YnHHizPAjgUZbMvD",
  "key17": "4r3jN1kNEKFHr6ipkGc3fqDYJqnQ3d31CfGNZqJrBMxSVaCc1x1LdAhfxjwsKvCf2z7fQgJm5frLz4SpPjZbehAA",
  "key18": "tT3J1VZgneuDbzGXaZZubJUYgyCiA7FP6CbDtVBzDLUtSkuDfQ2UCXUQLqU6H5qN9fySx8K68mH8ia4jcmeRvFy",
  "key19": "4KhhNb49dDBVkcsZ8mapAAV4frnjPBoXiTj2vXAZe4ig3giahJG6YHmpSKBFzPtmTvA24K36C4Eqxd29yb1rvBxG",
  "key20": "2Q6oDXN2LHm4hU8QemHM2kM6zLFzRS1ckmeDcrRLsoLk7PFKpYjmt7GG9EMvhGUGSAZYDYpuyqiHLw8pxuoLdHLv",
  "key21": "DWjS7GutLkgNpmy4G3wUkPxt6advtop1G3C531H5jp18Em1P8XARVhNaFAAJu4SnRpdfwvaaJxaeiZpw4Ldc4R9",
  "key22": "eewiqaGjVjFpLNTs4gamajFJt1abxQnnYwBetV6vZFYRbEA418BsCERkTd95sMVPGfMN4oGUVL93AUjdR18PUbT",
  "key23": "5aH4i18aMcyxyJ7Wfska2zqsuUGuatsawgpj5oque5wmzgxpT699tgSBAkWFN5RKxNstxQdAdeoRSSn9Wc9UpxUE",
  "key24": "21g1HCCoQAHxfavScbEKDVUUCwwyHN6MYuuQnLwjZGghwjcLH2PVxLyLnAu6xoHNmvWMpXava1guV7KWtSQogwLK",
  "key25": "36ozynW5rHwu1SqQTGj722aBmTtGFSzBMpJzoUNk9vseJFk7Pbf5gydnjZY74xdymErpzx5RtcofiZDfmPifLbXc",
  "key26": "3Sk77LVpeJjHQpQjUsrkUQuGgbrSS38UhTJkWbqoLjWr9SDBDbhZ4BxZ5YZskF21tUgnxwn6ieseh4rupdDdzuZ4",
  "key27": "3GtwVmMHrbtrnXgm1TNY3ZvLwiv7NUjnipgAFLa6YbTurjZZbLpcdb63TLArUic8B8UchVo8hGAK8EZGJzxADtaY",
  "key28": "25hGASzyg1DqYsuq796yhASxuDc3uPRiTaV3xETFJUgYseLtjpD3idgw2jUWP6hHNEczTkw31Z5SBbP4hhYvbHXL",
  "key29": "2WMfsujHC1Bw6vfTvsWYw5KC3dR3oTS7th3uto3qEojjKWxbAECaD6hbQhuxSfb947iiFqx3Pmu25msjXFi5TeFo",
  "key30": "3g3Bqf51z1Bx6qzrTpTebRUQFAZUK4f3H9mb8EWwkGxcN1iuPVzoHQZRAMooitgGNXqENZT9S4pQ5kHVfrLaDvyd",
  "key31": "5iqidngq1n9mFuiYoicW1Wo9jWU5evMyaTfJfovXERAqLmP8U1W1jwAVVL5GyaPeUrrNnW9iAjqTFjZYb1UPj4pf",
  "key32": "7BVAG42QYZn2t7YR7aa7Eji7HHsd5hA7zQsSEKkMT4LU7qMu6EckNEdg1nkF2XqN5kGPAD5q5rTKhWzdo1QyrPb",
  "key33": "2vGkaGZ9oA5m4xZZFB8kpje7exc8SxomCPqcqB4GXXLZgBoa9LV3gpqcbkGez6d9pYa3Fe2KzyYuyB83JKxH9Wa4",
  "key34": "mtdetKfkhVykpyisTWV2WFB2WJkrDfPbNE1m2GsYKYQJuBqYnCbP4KwTdVd8fK7tursmaouAzUhbeH8vKMR7adU",
  "key35": "4kwj9wEoLmyRgaw7kZ4jFRow6BDxYUWqN877EmV75uVrrhnyxiWExRXCFkYLczBiwCWvsJbB5Rv9tLtyGoFK2uqr",
  "key36": "4gEMT8wz2rgdg6h4KwBfL1FxUuiBV9hjdBRBVMKGeaRd1P9dADZiTYXGRQcHHgvEKaCFkJyRQyQG8V7GBGGV9qBG",
  "key37": "38Dq7cqEZ8grgmuZrSA35T2YYjT3mjfscPvwX11omWQvXLvj4gkAB4fQZq63B88ZDCk7TaJfDPiGjBx8qXB6PFog",
  "key38": "39fpPFAbwFPo8mp8EdKfFJnWuNSMmWJ4Ce8XhDF5bbyTxspsXasQaVVqHVe4MNosG1Kzv3FqKEkDgKR9iniKGGNN",
  "key39": "3GB9pEwHQgxmRTXKorBBJG153NjMD8fGz8UgZMtjApapAh6oNxkfdTyJMDpgAYx8jRexMohSWGP1YpYnRk7WqLGc",
  "key40": "5S5YUPpmdNCycwKmemT2pJZFobQZ4D5XtJGDUQiCTzDJL9vtsyqADsmpKgUi2mS1WLikuUBQ5aZJ2Q3Vf6MzS8jK",
  "key41": "42kXCWU3mj3DWvYtQ6on9ad8QwxYhQ7YCn6K8KhbpSbKVvdJxXD7jvLELsSnkCwDkyQGZFwdwXyrjc8UeZacSxQN",
  "key42": "5MV2BKCnkwgTVtQsi7xJGDuXYEp1b48wVtbBqkpB94TkCjHMys5q4rKD3Vs57PgTpExWo96KThCB4HSeRyL1nQgp",
  "key43": "2VrbcDPeJvJgcmm7w1qxd1QQMqRKz2129DMYUjAvTJGaAuqxoXYHkiXLRds36jZLT8VZnCaTb1N5odraXewy1vJz",
  "key44": "WaoH33UkRVa7CsKBhv6yeHx2uLWAPCtZmPFD5G9CRCxhGPvmfZK3jP2wgda8ZgMe6YL3hT4m4F3pHp8pKYjDMeg",
  "key45": "4MavvKdzgrCgiDBb4D4Lk8WJwBgJBSMJ7doGdbzm9kXFwDpkU558JeCvpuR2S5KhZJGnAMJkkr1H3EN7rYDCxtF6",
  "key46": "5iNc1GD7s8LsxjvbMrB9V1PHYRz3c7cG56cEVMHqE6zFwiCRt7rUXyKAZ5pysdbQgsA6wRd4zbkPETde3M1HDW22",
  "key47": "8CJj2dkSg4EL4bgy1wpcSC67AB6iT3VrjdvBVZHwjhvErqYTJ3N8w6wUxc8M1DYGvvL8QSMyWnmvSGy2uE7FJ7S",
  "key48": "4LtY5N4W4oMmrxa3a8pEAjoJvKNLGi5QkPHvXe2giu3TBHSGWsMxT647fdp76gnFw2Njde9RwJP6T4eQo9eBQyDF",
  "key49": "3L88WhguFcMjT6dmFPye6nkA95PvHbonBXpDUcatvNZKgp16gXSbtBDjmTfYKtVEU5ByZyTvYskksSWaSydDQBYn"
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
