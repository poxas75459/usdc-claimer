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
    "4dp644eaeZu3ve5oW2pvrNQuzg3H3GtKqKtNHq6AFnwWXuhTfciejXcWYiWeEQZ2GGhPZNHmh4beUo1WaAW7H4xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Agac6HYkBejgaxKdagHPUdD7M5iEo4VjCTrgetwFMwCTiWyCSpwrCo3uD6Tv7kGYrZGadKVB9Fa9XfP6CA93DpN",
  "key1": "WgxgsyBdhH1eqaiWvmeQV3d1uqqbL7hWhm2WBgG9K8t4zcLHvaYgctNrH7Zmj97UWZExLRq2ntXGKH26pFvNJVK",
  "key2": "2zp215WeKDiWuagr7aD7Rrpm3J9KT7oEbeM5P7wwNBietDbD5Tw4J15S2CnkQT4jBcwk4JzeMxcvDtEjRoBA5mDg",
  "key3": "5Wq12qAYsa8MWtjkUCYghUoRmyy3MjXGaozW8oBK37WxRETGmNkzrVH3ce44yeb6DYNmeaJv3JNmZeeKYpzjtq58",
  "key4": "3fVjtUK3Aq5oonpEFubspjaExaE3FuWSsMHTe9HPRQPwv8kZjGCccGG5aKRSFF9tTipYfdqLT65qXA4Ncw1GzqqJ",
  "key5": "okHh9uBCyka9kz2pmdLSP3JesbiujMRAAzm2JTDf8heddnPj2HcdGjr9M2sQ1ztQscicFmsVGFvoKNjptU6eBG5",
  "key6": "3sgVpcLqmvu8X5aJEXtrfwjYigX6a2P1eaveyXqb884vqHDFvRRr4n7yjQdXxHJDsgg9KnREDeomyMuxvfDv4SHC",
  "key7": "56RRA3oLvi8hsLpcdfz4bCXvqjzG2QW6Jse4BmTqMmJFw1cmk5KBz8GW3noN22n8N626ksNYCEyZoRpDr14Gf7Te",
  "key8": "4s35dQYuZsoLnLwPh4mnL1TQew2UpNyrSnmy9FwUYXuATEn6PFa2wXyjatTLTEZeEWtcwCPaEnbBMdAmoRwSYUyK",
  "key9": "gT8ofhh9WsXL9s58BTrX4Ao4veAqbZYFKPTsHwJvNPLZAn3EaWiravw5fnVgcR8D23kism6zkoTnt3Fhty1eaRv",
  "key10": "44HtVXWRrPvfqYduqdPgoKbKN6NCrGHbA5JGbTKjD8ZBcst9iJ5CghgEiWyAVxUCfy72KLizmHubY7iNLGkZKScB",
  "key11": "2gPWvHDBYa6BjnNj29d78nxout5ubR1HcQng9uiMFC4cyAvrAassUGNZ2pWMCRXro6qThnVx3VomwReSrCo44W7G",
  "key12": "CaCPpAfGHfhs7AHGZcEmdSZnDVxTacJkS35M1SUGMXuRLRoE8tLtYDXwf3VGG7S9HMjdnLD7NyUMwYCST7EBmjw",
  "key13": "GbsJCDeXrbd5fNySNg31faCKnJyeyq3bdqRtSDPeVyTMFokM9WtFPBAgSoCPK1NSEkEfVgBg5Rfwz8UcnHHhoDU",
  "key14": "DD7Ach9hGVhtnJWJ6cQtdECi2H2T1d727Vo8MNG4qqjVtQVdWp1GHWSSD2nc8mMRG7QkSu8Xtxuy2r3DcCV6kEZ",
  "key15": "4B6Ne6Ju1QbWkpk9K4ceWfmP3Zh1CEazV8Ffx7czmN3H5wpG2CoQniewRwotJ9DnckpAX2yAmZMA5pfozGcVD5zN",
  "key16": "Ug77f34AbSKbUFExMDVkRkRFLCrEokupy7ccZz6W4kC3CWGdBgLjJoVys3BUrQTV2quK3fWfU9546HQrQ24Bv2P",
  "key17": "8Q4GUXLAPGbhJqhKuUsCAWRVPx9skXGwgT3JZKogwNAzk6RyvsbzUfeAqvgrgFRxzdbTd9ekM19aeKaQymRbXzK",
  "key18": "4Q3DfYpxPXbcuCPET6u94wPzDMBunMWPBfga3y2kYeDNakDf5YDaNBd1QGooJYPamna2nA3nBMtjR92Jmj6yKQt4",
  "key19": "3uyWg1Ts2Z5xBT3dn4TBia8W5X3uLDcA2pTdY6SZNj1wKCh9LNHiVya8oeVRizZiKH7T2NvLRuJbisVziGRsjumK",
  "key20": "3GPoddLZJBnWHLPH4xC9oV9pizyeRrfTYHRkAL4fn4mJPdXjtDbsX7ZzeXYg2bmU3wp29AUERxiG9qep3pRCKD8s",
  "key21": "2vFyMRh3qH1wytBvy3ZhBnd12VPmAhr4ZJSvt1kQTPvJ5cDjzX56Qg3kMy3eko8VJ68d5mzhP8U3WJiNZLqnZBvA",
  "key22": "3m4m6aYs9mD1r2s31ddPRM94nEG4QP7j6LajoNg9WxzEaj2XhmyG4Mc1ZEgrMt1QMux9K5VCrvQEAD7LY8Xmh9UQ",
  "key23": "5dwzyroprbnFUVLsQmK3YHEyMAjhEwtS24toqF85Y6hbh6f3poPzfWAhB5n5o9eRbsMKnYBAn8QPUFWwdR94cW7G",
  "key24": "3fq4BcdxCJSw4iJEydPRQRKCfvE7A2NwzSo9wzJiHy3bZLVhA2trkXGagUFtePjzGZeMe5cvqe2y3xxFJ8Qsud7J",
  "key25": "599vZm7XUn9ZAARZVcUyT44LeGghrD2EMM69e7cFHazazn6X7e46jV24pn7GxoqN32XWo4PrkL1LYLWU7vw3CoWZ",
  "key26": "zJhZHp6pbxTFxpFnbbwaXghZCFbGZE1uC2MtZu8p9QEQEh8sQ2PT1FG3oKAhGXb1Eb1G3uDMQBszXqtmytNDikv",
  "key27": "24t8oHFkuGGNLBWGKFoC7KaSdFt7RTAqsz29hiB7Kt2Ssfkphta8BsDWGnsZoueyfJ9da6oDzpUVjBq2S8v455Tr",
  "key28": "2TZDZbAxEWykdg4aSoSf4EFUw8jan8zhPgSvZ5ynmSbhmmxgncKh6Z9gUwywZtEyQp7sMjTkmSB3jWyLHqUgnXtV",
  "key29": "24TeNX81cBptVUDXTcmjBQfVcp4dZqLbLt2yiZYUnasCnNakLpnWsszmNwFU8XCUVb5DUwMX411U3WzdHNhk2c3S",
  "key30": "Yk7B1dgt2u5BDHD6yGgw5TPeehvENWYwQYMfPcnKSgTzD5ReDsTS2sj5Kor7qS8WeGVJ9TouBxx319ngzwdjbcx",
  "key31": "5evH4PSMKf7i5ShLMiiQUi3gub1LmCpWKdzGJ5EKZYXwtWUL4wkeduF8CfHvHQL3SsJNneJqsoF7sxT4JyahD442",
  "key32": "5AFFVAjGALxXDcoLoTZsiDDkSLnPnthENeN3ZDLbuPW5ejfiLsKD6E8u44rv7uC9ge9MrjAPFLzFQbut9FBf9nkb",
  "key33": "4XGt9dXTWuJTmXvL2tipvndvkKYK2zcU3W4ZgEehEcqJezjWwsDTpmW8gJYVXvsgmsTnimweAkVRoT1yGQqXzDBN",
  "key34": "5xubfLDDKDbhcdpjghNrL4XuQewJRxHHkQimUHGhLBFmiazTcH42ZWG4u14vsLaxA6N8vwQyYW4RCjrzWn2iYed9",
  "key35": "yGbjVaWhmrWEAKtDiyVoyvj9rrdakRtpgDkcJb7iT3hxHgJ2wDjxfhfNjQBbGEwis5P1aeSHNL64fuM24nhmaQu",
  "key36": "3buBhTtA1ezzQV5ALHauMxUuHP3HXz7ckQeKadYe5aDeCqhK9jmQxXgqa5NoCQ3Ssz8LSF1B37druqcrK3YFdHCE",
  "key37": "5TwDjahMTnz4FwpfCgbNxBS6UgZtFZzdgvBF5UdRbSX6UJZfyY3xM6LkTfHvpUSuxxZgbTzAtCFeVZ9QpKDyrXE8",
  "key38": "2kHG3cb7Ssdk43CfbZ3o1BMa7rMJToRDQBDDFPYZFMZRfoTt6TEyDmLBevL6eouXHRRf5kSqZT4bsUSMNFdyfoRE",
  "key39": "4jNdpkDD36feSkoN8Z7EjvPGTvue3z5ro6ghcbn4jHmf9N8BH4QT2ynY6qHKFFdWXf7goHNP1oftvRDUUxwGEiKy",
  "key40": "35Hka7b7Dg1aXfGWGp1owFGyotsCnbtKUPpH1hwQ1sGgPmCtFwmGNcyEgQvCEgx5NBuBAm8DAD5szno75zx3Ef7s"
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
