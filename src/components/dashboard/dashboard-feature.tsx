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
    "4f8N9fnG7xuyCCLcY39gYz39iqtM3NKzMQKe3n8Tqh837QvRtWb3WqEkNEsY71xD6fkTvgWBUDcTimFPAeTBzJ3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsVJhi3N9E77xjyRnUkbMa8jwm5p3uTTgbghrRzLKUswL73NYk93qbxxuoYv3eqJUh68iLvQdJ9m7m7t2SwBrg6",
  "key1": "44Jgc64bWMwWPrLUTR7KUsg19T5dnAuMnBDRrnCY9p6e7XU24e56pV3hfyVUaedamn6vDGY4PU9oi5mVUZ1r25G3",
  "key2": "4r6uijABnsjM5ZfjdyikTfzeHAdE9ZUajtCbhPFqN51g59UZJxSmJyEpp9gHmQF54gjrsyETAFWvueT8rSnCsHc6",
  "key3": "479ABF4TzswGwzBbdQ4jq4JZgF4eET9u9kfpHDb3ovtTKHKuuu9YxPpT1zr7Do77xHvJrVNYBfTBEyuBTXHfeMWp",
  "key4": "BqJH3Zh4oTmHjxvBMdpBBi21BvGp5njPPDRepBUViUBMEvfZeQXqXYpzYUFENr1MtUSHg731HVRbCgnHmGtrvPP",
  "key5": "2Jwgc68cDHkqQnM2fK8n14SvmkkoHG1jLu47Q1e3w7F17JJVybMCuPKA1bLvtgn47hJ2PwLmRvkfCyWLTAJZ3tZW",
  "key6": "36w6JaPqU87dfK4trFtXyddA19Z116Tynydbd1f15HRGaKamvC5ee5roHTCcVXSzEqLqG5p3MxNrDux2CT8poQUf",
  "key7": "2JJkFWP2B1vmYVfGghQPbmUCQ4czKacud8psjWBro1BGk2hmWjVdcZ2sW5oMAciC8Mj87UWkrf5F633rcAJYXTwF",
  "key8": "5jmpkTBpLRiRtBHgpLVE5ZccsPzyeXL9U2RsMCKCxu8Ee7H8P67TwUprWzqAuBZNwFmv9zwqWhadj4TKvYfbpYTS",
  "key9": "3RWE3xoQLJrFq77NHWCNi2emDgQvs3BHW6bYFn2utK9SRxLhb6uLqFjGAapCnd3WaPGiwd9Nb4495mutvKwjNCQG",
  "key10": "3myp6HBPkZoT9Y9DvEkgT7swZKyeFT6N31LynDQKkdcPhhWYXDgWxamhXkynvA1cRNPcXVQ12AqE1WZ8xjNaSUnc",
  "key11": "2QAixRW6xEoDPpdzmvR9UohKCaS69vxnE9X97zCZ2tLT11x4qTsMgd3Z44pKoYrnmciJfmhQ4nhUJ1SmjyXWBx9t",
  "key12": "CjwoMkK5zriBiBgFGmwKxiycnk2B7KR4oi6RxsucTVoxMrbALDvBGRsuDdtWC2evSBkLb8qy1g2AaYrvYzbY7mu",
  "key13": "Eeq7TYEKyRpvo8ZPtcofKQoLXyQx9inkmDSmg8rKAn2irn7ACCmNe81enrFLdRjGua1cttxnYUBAfSbbH8u4KxE",
  "key14": "4TWxYJg4GycN3g3EBpoJs9E6xvaeoX32WS3P2MPnK4bZTGJ7emaLctj9WY5HnMtwNixifYVywZKnJ31H1VrZBEZd",
  "key15": "3r9QWvRKtDwhB8N8oXL9v4TmLwRs9qeUDMioJbapGZTJKV35uKMwwq6aYtvBPjdYjGs9HskVKdyS6rqo8ciiiMin",
  "key16": "35eStNtasEYwpdEz9DWRN5TsUY1N5JtC52LPKkXJiF8osUQ59NwDDmR3VHG9P9Y2ZbSq8b5BnFuNLV7TqUbKZwLL",
  "key17": "2A1AL9NjEzu32TzsJUZwKHQFxZa7NYXPXXFZg2jqfGiGADtWUEZ5c99dopCrmLjvkoN4pZ55TcBs64iktNQNcaGw",
  "key18": "4BKiAebyCVwUddHvpKE1WPfHo3SHwr2AqQRLCvnBzvHtXrmd1bbkKeRz14voJAAR71wgvekbD8hLPJjNiQas1UTA",
  "key19": "4anxGRNw7o9utmWPmMEvxyqjQfN7CAPE8Xam9rKf3mSas31kKBPnBWVcEx3L6W4tnAtXUuiFEtKeUBA27ae8NQ7i",
  "key20": "2giAyDfwkyKCafXZnRSKNkGqttzWThJbyxuFJXJWrmQbNdYiH3oNQF4GgoxYeRTRxDC2XK4ui6PPUzdLkDZQ41Zv",
  "key21": "5KFj76LzwjG6UjPs8WF5DwYqf99Hvkt5mLHphuBeqGB1MyWxWXbKh5NYy5bLP13fidhXmsGzKF7XdGYvmmcapuuu",
  "key22": "4tQdbmGZ3R9KQfrSez2jTmkrifpjaUtvuihGw6HbWxtq1AWdcJZkf659zZSLXNzHpAnVZnx913fgos4XvhF8YfA",
  "key23": "5NbAurhsS79G1edDYAZihkFQVosi69Sf9NZCf1X6zhUX7jZ7Hqa4dxgCtad1dSHbZFHvZbhgpoLDRAHhcqCDmv2r",
  "key24": "4iZPgPvs6CL9rMpd6Lryy6q47Sdvinp6NyqGGni9UDxB7J44p7Sdk9S5Sa6eQFFAzNxfsaeknL1Ha4fqMZmmPNtz",
  "key25": "2B8jVovCTogsFRVo8G1inFEJBuJkhcWzVqtsS7dFk3hUAyAMmwKUDs8P1sUH1d4wk7GFQjQqN5E4EzR8XAE2LaKy",
  "key26": "mxAD6LxiLgXbUvwexHErtFrXwDoJBWG2ZWRDLyn52C8a1F6GEbqJu3eurC5nbkGiTj1ZVvmDcWuSDgw71Uz3uwd",
  "key27": "5eLgJbAJFob4Wt5D81QbTqKNRF7oysHRotB3nMeSZk1FjRdRjvwsV6YoS2VeUhQSP5to9sLki6JFd6StqXvmjxbR",
  "key28": "5jypciejgWMKuvpMSko54CtjmAvr3jjrB8TmgD3svDmSgZFm3EMV23jsQ1ex9sAEU6REoHU79SnQg3JHD6ucyTMQ",
  "key29": "a7QMzjetM2CQAR2dSfnRn3y6wDQDCrx9C9Ri4nQ9RtwtMjSkAivYLYdzjMUcUHx5ZEuC9SnfwmrcpBjwaG1DVTu",
  "key30": "3G1CPxvs69NkkfWo75Dz6dEW7RTXqrNFkjtgzKvSgxA4CeDMGYWNuDs3x3Qh9PYRr3VvhAGzYMpVFaCjfhM6HDV3",
  "key31": "2qSeTYgkzcrCs3Z3PqmCJHrDrascYD9fQn1kD9DoWWvKK56pgHCPUcKouCLwqUssEDfJ8T7BXHHBPmWhnjzgaWfX",
  "key32": "3j4DKGTvrVbUaKkGvFkhdzCPty5GL5JY6LtTLhbtLWpHM7PbEhPUyu6r86WRYo2TpwjcXY8DT4DGshC7xh14GdTt",
  "key33": "4Mro1uHYwXQCuRnSNmvDJbQbjYVFDbdrb9uyos2yvPeeEWp4L7wLJKuvUgHhRa8KkaVMsH8Un2eJ8K1NtyE4iLCP",
  "key34": "4gtNHz6d4LuUmLyQm8pKrczWPgSJXJswPGcCi7k7jgdqW7Nm8tdNXELZqbhkwQGJKxn588LwqNjNY6egoJHMbLb7",
  "key35": "29AY68XxsFCqQUdRVhadXiSDdVnuQu5h3RMppsAzpdfNbETn7JijVE5JUAiWft4NUUjtw2Vq9fthvmfS8472rerY",
  "key36": "5SdAhE8NN3AwevL4A14Xd9Ue12s5fwfLpZmM5XRzZ3WGmAWJjfvY39gfR4uT75ajhUZseNnNLV9hHcrK81daQBtn",
  "key37": "4PGT6YDPNpXnMVqxR4SZD4EkZRdhH8m1trTe6pUt9nLXZyYgVict5j4dbjb5gVpMa1mRGdTnrH26US6XPmqw2iMu",
  "key38": "4FC81YugX4vmhu6gKT5pyfyARdFV542LpUDCRsk1Zh46r3QCoeSedcxcBnne4Uv5bfu4BWTuqbbx1LsWsGPz38k",
  "key39": "ZCmFrACUxUAks3rFiYeMCNLX4p2YmqP3yj2nUgvA3Bb5d7raZtPmLwci2PnZBnZAMpQt4MWjNvDhXEuZhY7PNVv",
  "key40": "PHtUxiP9BZw2K68wNsq8xb3tMd6Ev873Qih7eYyhuLTZYPSHdccnyky8tCnNaPAB9ZGBrtXsiKXkuk3hFrZieCp",
  "key41": "5YZ7FnXw2bZ6MLWeto5L125PUaCjWcZcqYRXo49EbMQJofPnA6E7XvZ3kA9yHwfcEngseh6oajx5XDA2AzkYBhTk",
  "key42": "c8CSPXhEb81Hrv6TU1NzaNhaXcRC6A1td1WC3VPTG7Vs7BTK9okJbeYz3qdke5rfLGvCdz8kVG52cxo4gCNdEj7",
  "key43": "qE5xH7asuk7rF52PAMfZNS4qAXDNsC3ax1r27DbCZDs21S2D8L2Upx8YCgh6uH1QfN9EpPJj5LaQ9w4AvFRs24F",
  "key44": "51bBtecTrRLLN4m98noUUPN7kFGT2VU68c3ZF86oDLexEKzJmxhT25fCx62WVsHeWJDqr2NTkCBJEYJS6FJAFEbB"
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
