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
    "3sy4UGSpbYv8TRQ4YkR1uRVGg5c8uhVyR1JCx1xebvQDCdbHBHCmaLf3tNJBRu15UuTxgEWTCRGGUBJGbMhYJQRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SvqhXwyoU45TgFHZnyJcbWaPeJoJu2SEABZXJcK3sNuR9BYCAXTXtNcXF4afTpLGRcUqX9spvcveAT3z2FGXQj",
  "key1": "hd6GJCSLLj2a7W5xF1MQaRv5hmg1dvDjD9vrXR3GLCTALrt8XtG5bb9JnLd3MWGDYHfmRhpH3GL1wStkZEWcZzm",
  "key2": "5gzxZJey2ivKANeBBgm33sfe5164TnUeGPeZzqjQYVRmk12U9NQqndNShjCDUTdHBcSn8Db74Z1jbmZ24uZCFst6",
  "key3": "4rdnkUMWoFa3m2j5VDnm1esiW8e5EiQoadCoSM4Lpq22fijyT4hpubCtdUY61WDbc9714ZXEW5S7ay8diohabNff",
  "key4": "4WEgQr6qDo66R11x6WEUy9d3iGKkkHb7ZPHpRZdTCo6cTgomsBautm6YQRmxRzxnk58ftrwZ75xe9xhiHfin21kQ",
  "key5": "5ZgGZoqSYgB2y1hc9935fv5ZiEraA15X38tQgXDUi227t8chHe7HoMFXT9ZFw8NPNxg2nZdRQQHqc8RDq9TbQqY2",
  "key6": "4eV4bP2tohkK34x2FFhSJL6SgtC3QuDkcvtM3q7FmUDXMyHy1vC5joktcdhfQzz9nWXrv9wyCoC9cgtfCdBqJvaA",
  "key7": "3wx3kFR6qxLySkR7mKLHP1KxCS8SaUt7uG67JfFbDRVwf5oPsTdAU5Bh73Ft5JiH1ZQzi4vZsLbHYgB4nbUqGtKc",
  "key8": "32Le2r25ZLWhUnvev4aeqQH5yei9mPagwrZjb1bVKj1wPbbwiDX7vh41Eez6pxvqjzN7bBJXKBgCTtipK9nTeAwJ",
  "key9": "VAcgtc5K6rkjpdMBasb2jxYvMn5vrSmj5SDdWUbXiHXE7BJ9KgDDiqy8NTJuQnjTq1JNwNFhrcwM9otH4FcTcrD",
  "key10": "4stRcpJDzX3keJkmH16z8RHPWe1pwDbMgwYTJ5ZEYNqJFRmgd1HbFrYQCeD5iJbEQNwePhQNmSjQZfPX91CfSSTL",
  "key11": "49YaGKsKGoASwXmf8Ba8GzwuJg8GFrATPaG6u2WvAZB3RsVXJDmXXaT77LHd7p214XtkDwE1GoW5BdkNYKkzhtT9",
  "key12": "5CJMNpJC8GgWvoSXVRPTQQyZLVcmtDRLs75vE9EmcPVnkCvmWUNEtjsjWNQYd9SWDvcMoCgU858qzpJib7FAYVKN",
  "key13": "4zZDyVFUiMun6tJDyfb8L7xqmBWEGoTe4snJPYMza1jjwwpABKQEQKKYjwRU5JU1MEPAwatceaYbX7WaE9cBDkvU",
  "key14": "22orzTeg7PHpuHkWj6AF1ycJyrsDC8wmTE1pT9hKJHEgNjbRYCAaqxwn2vHZ3AWUTMqgiqdvXmswRn7Q8cJ1gGEi",
  "key15": "56KGcxYpGmkgqvs2aYRnrypF1dpHj4yFg991bAY6odpPg4mXpC4PGmUj67FsRihhMgkTgtmByn3QPAP3Sfmn9tAh",
  "key16": "52X1vJkWK1Pb57FAjULxGYrNGsfWkPyebZYjHziy4XEa7uSU9AJpFH5HcJ7hwsvvZXSnuqQAGxbLqriRd39YxiL2",
  "key17": "2V67vx2RgpPpCdwyAW1chNvJ1nLhKCV6XLTVwbKPt7QvjRMWFJbPnBwhoK6dJ5E24v5Wzhtgk7QK3xfT7SX7cJ8F",
  "key18": "5wFF8LCTaz9vKQgo67G1ScUZ8wq5jRJrexfb5pANBEPFJXxKXS2WLVUiZDZPJrrBYJRafBVM2suEAqC5YWWiUKaX",
  "key19": "3thedw9Ko1pn3SvJ9dyMzwhzDYbYLzDQvCLffA2mfi8CvNeS1xEiLWQEdvYf5FtqFzan9imkhgCHyuhAJxfFTEo6",
  "key20": "4iStu1quPQBAR7tqPLMszmQLCr2vmBzwcM85LSFBZ6M7ac3TRjSbSZQCLB8419Ws9n2duvPSwkRQZ9CHcsf5q3fj",
  "key21": "2RoCLyB24YQ8zefpJVitMKq8ZQe4TzDVAStLVrMVenDTv28VZqp8aAJ6uBSSLnjgkofEEvywWt5CJsiy6zNxCAxG",
  "key22": "ztQ4DdpNXePV9PCRhxfaTR1gHp4CgqctniRqnje6dkmqQXbxZVGfYuwqPUiDLjarbFBG6tbQXrKbxh5DZ7TPGGJ",
  "key23": "3XnEZm51nZTTog5pfu48TbBMPnLiBsiwywBdXenHNDKFoBjySud4vL57wx5vEVYisFYFLYnbLerFUqUJf7m8cxrN",
  "key24": "Ksq47qCTSr6fpLAur572EipMMB1B5WEpRzfPsAuUdWJPjE775wWZyUffERfJNxPgpsphYNAn7z9t4Dr6zzr2wg8",
  "key25": "5A2SLvCerM3uDcb23RHLi3qxvwpC1dEMafAdkh14HTKSp9dyG4zgpAPqtHqJBgQ18Mwu7SNcyv5UqwXNSzyT7WAf",
  "key26": "ApGDYmdQsdwmEi8mtdcXVEjqoZFmLs6SLiZstpUcDskuq28w23TK9rtpNJ4saMLy8MPCLhX1tyYbDuRajtB5BNj",
  "key27": "3HAELdAm12WYG7dx1hHyBwchJnhavrp7dCGwZBC7d3GCvr7Q8kJ8Z37E22oPp4FLwkwxou6tCX7qdCWh1etv9BUP",
  "key28": "5K5TDVbu6WPBKmUXjNMxtyWSjkVdujcqQQvX4LJxoqBwcDDBxyeJmso7qWFJADF4XfAtgPe2aXTK6tdeMzrCPKYt",
  "key29": "5XQKb9zLyvcdkN4GBBkpCb78CCv5BCDXde7KRpzXsLFki2FGDDEY8PcB3gRdvfwU7HxohrY2YS4yk7hfCBB8Vr1L",
  "key30": "2Z9n5oMjHuP83mX8e9SmjmxQK1nkojQd1YtFsDK5hqc9KpYv9WEhZ5Hk3CeMUyCvPeWGqeDotRcCV6LtP5kxMeUx",
  "key31": "ZGTuSqb78UdMuJEVwVcpZkJt2xKof8tjUgvCP81c1xXQZTQwKJSrGkXMHktUdNTEnN7A24FoSc1BhmNRSXpKETD",
  "key32": "3xrwqTy4BC9eaoHtqhCVb8BZB54XExJSdUJfhSLtE8BwCik2ooHB3Hqw9hM3ykbzL5Ra39M23wtrjvWNi6LA9TBv",
  "key33": "4RoZqNcSb4deMT9Te88Jg5SzY9mmr1QT7Kktqwr6tyhWYqHkyZEzfbysb53RdzY3HAXKhX2BezZVn4YjuhGYhQ6a"
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
