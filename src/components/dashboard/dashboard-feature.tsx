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
    "4SABFK1Z4a5Ajijx6n8GpfRPhqKx3zyFzPcy2zEC5xPpAf7cxprWmfy6C9nL4XCAbi7XBCCanLKt61uKu87G47p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GVBzom1UqaED1sqCJq6LJ4MM9hvdnEKGDcdf9Y3wsTBvY8phE3g1Y7nejoXqLvZWQTPF5vCGRtnJLiiRpiQw3QU",
  "key1": "5CEL4fnrGFBRsSohcA6s5r1SauqMrPzmXMYtHmnfqmddHiRZ8GZDEYgGn8adf9cKetmrwygzz3CYYd6yt3umQUCD",
  "key2": "5cP8VXssxV3B3nJzZjcVpokHfPhC7tZwrRgJuppPJhL1NZA5kcXpVJTdYCibcY87qPu9Q2NjXeyLbdHm5FTRWcuh",
  "key3": "3f2fmLmx8YYuGJJNCB9mg9a7KHdf6BGeHYzryENzgxyEbKUEixs7QHo6kXQzhVrobTtjNRQWWwrjcQfJz5gQhPcS",
  "key4": "2vXxfp7NLWryhktBwXPieYsePUN1Myzpwh3RzeZUHXnmN7AvdMQAi749u1oyF91XqeAch4YjQ7vCMUn1srv9Fnzk",
  "key5": "3VLxQ5XQAWa9aG7ewcofojCaEF4CwVRDnmwfsx2ACbRoafar9Ni2VcybdsxULTHKpXyQgyq3UCsrB2CGv5DKvzFg",
  "key6": "UoDt7H8NX9dtc79KErcixTBei4EAgLUtd9DePHt5offnrYDb2E1RNWEFwyzUuzHhkoRst83muUSk2y2aqc3Q4Ng",
  "key7": "43SznBkiyEaBgCBQ5uaMApeSvadEXtTzyHKhWEXyGWPs6MsPQ5S1VxYbo3LXsGo8cxxGzKwMjFcLh5k7a9jVv15d",
  "key8": "2CvJwQh7RnMHDFPRY8oZxLJfPmaNXJs48eqoxaTooHebgF44dkvpYTVfvKugH5TozKRrbtDCCSF2Sf62y9MWnsi5",
  "key9": "4i4TyARvLAHxAdZ6bCimYESPMYktQY2LPQFgt4T3upN2Wq41kftxLUjBCeN6GqAC7LpphRALNqSxg7VfCY7LvWJX",
  "key10": "3d5Xb282oi4u5JqXdxvXUAmhsBEvgYwt7WhdpJ13Use4ScfogyFGSeDDAaSq1udwcTpa3TwdvurhvNkGdFWBLuqi",
  "key11": "4PLvdgmPcDm1WPh9JNt15GaSK2uDLmPrdmU1qMtCZFYiiVqAZN14wynatEx6DPT3Tz6ANwUiUo4XLj3tGQgc1SxR",
  "key12": "5w6W7j9rMskESV5gJdDKFToB3RPL6DCkTpFardQ5duQoxgbrBqF4Dxp5iTiBRJPoAkEqESooTb1kDh55FNaVePhE",
  "key13": "5AapZkFQo8Qdt6Gkc73KtL8jCWKMQkiYRvYJ1XUCmtUXqGMAVRHmabSh2Jw624sxXk7SvoSGTodNAC1kaA9Bb7cT",
  "key14": "2sCAQDXyVPjJ3MskXB9pvqzx55sVojnrpgiM4y8F2FguKPAfCfVMGcuGtp4p8zp7PrcSGoiZ84frfJHDaFmsYAjW",
  "key15": "3C1GpXbWqFcs3sewjYgZqjNCapjxPr43ZUhTt8a9g6AuNgVvgSrC4jGtsGqo78632Bh3v428iFXNYrb576xmxeg4",
  "key16": "43XoVE6Junsmgb5nPCfbd1wVXhdz6XwLwAVSFian4bFrDPWMWv91hvgkPQ11jXsNnJh9FHEv1mUECWUz5iSbbjhB",
  "key17": "3BJuXseSVH9fxLXk2beYv3uZ2TyizVwsSxccyMw3kZidDzivmoDjTAPJg2EhqtZnKzb8V79S2ahTDUbBbMABs2N",
  "key18": "57ptSPSQmYj4y9BzWxM8Jo4pfW7tB3MdHjafbfhWAffFsJJkiJAeMJ8gZiRdYc5yhLgrWpt7CJPLBBmkc9joprWY",
  "key19": "jtREgbg7Mudet9vJCT7XXbvBCbjimcuLMK2Bw7zovSaDxamCdb3sh3LzuJuRpoHi2oZmZhHyZ5dDyr6Pg7VmSdv",
  "key20": "3MSLVcEC7v8U3yVbnwGZfVJtMGpYn4SQdGSqpgn249MaypzNGuU3tbZgciDEqLo4HkCyhUSHMuteNuh2ctjWYWpz",
  "key21": "2aucw324Bj7nPhkhJZwQuvG9PsMG94UyLSeuGnqzQ1eXSorEwADkqG5pSgoKF4NRPKUr78BaL9KE5cifEVcSUDb8",
  "key22": "2ATsqHmCq6UrNCTkYbj1HRDgERUPxS3DbQdsU3GZdTzG1mgmrA4j4nayEYuQTSzKopkF1ZQR3x89T9Br4vMSXMMd",
  "key23": "3mgF4Bmuvp9W6VX66wBVXpJExMeumWWCr35a4WFnBVDaoUDPeAVPJZytV1wbNp7jhksKbCd58KrtXqSV6YVC4bJ2",
  "key24": "5ztCEwb1qrDqM2UuUSb4bRjEfNUuYCEfeniccadcXUtpSv9mz8YhYpavpSnFQBjoEANuqbcxuZ5z5qn1CEGw722y",
  "key25": "226t6FesQz3Mr5sXQKLWFFVayR2tKdL6eHVucVRTangRxTSzoNwXfhvH1HVFruZZ6CJpdo55mCZqba3EghfFcF8e",
  "key26": "2rTgDH3w6kLKYzN4qrcwCgsd1eehajEhCwLLouRgo2WKLBgEWFcezosCKhRywa1PsQcYwYv397ADRZ7td5b5vaPv",
  "key27": "2j4SdS5Te3cLLP8VXZzeLixMrDYa8A9XtWCD5WTQDkUP9sM6yN4tXGYwGUtMhnL7Rz1oYNqp6qmqQ2NjahmXQQ7K",
  "key28": "2VHbregTZcqV2oeen5xT33jtTcDNj6yxNrzgedCAgrs9Qvjy42LJRu5Y1U3TAxgfnKhR7aJdxD9FrYLx6Z9S7ghy",
  "key29": "R5eTURDvrEPkUTHCk7JbBjJWh1B2A8btXW7Kh6fwN8cpp4JYyQt2qN5DXZKQfjG8b1ry1PKENDZhw7F7KpKr65M",
  "key30": "4TWm3U428H1KZ4r9xDK5qAaZSaxqycCTANHaknVThVnECB71oVEuN5NwXXD1MvWuqokJoESrJco1XV4c4rx9LrsA",
  "key31": "3GRQgTYEFYSY8xKgXEXnQPg9kDjFS4r3KPZPjDWwQKCna66b5nqYpN9LiubkFXVA3j4LHrGBX9SePVcvKLU1thMS",
  "key32": "4MXbvMWPawg1CBvQx7aJGZDuk8iUPRRRQH7AUAazVeVcr15XLtiDcSvMfpHJq8WzphVysrKn2b3e8ZEqyx5KpkTd",
  "key33": "3UpJKYxttQfiTDjChKFA8gWSQmaLzxTcZAox1guWyzAo2WAm3a7AVNuhgqTvNxbqtR8PRxd27T2RvKjBsEpfX9uV",
  "key34": "3PF5y1DWdcPEouQ8ME1mgPmfvQmhvPanvf2ZSv6Jr5yrhEcpJg55pCMXyFzkZkUCuv7dVELsvnaFTwkUprs2uZjh",
  "key35": "3QK78TXTp6BdnY4JoREXVWqhnZcuJGbqyD2gZt8His61bFejhSKxvMnfy5vP4X1R5Tfuyue6gQwPwRLu23ZRtjpA",
  "key36": "2p2RH6Fcphvrj6mtnzVUvQ2ZJPL6fmWczrq6RvVBkhAamHqdJTCWfR51jakSYQm5TCjSqEutafiMPtiH3DJfXLEx",
  "key37": "3M9txYjGMi9j13NMsupYC2x55xauGgzX6kUssak3BgFMzumJdguZVZs4t6KK8WASNLtrwB6sX3MKdYHzf1HWuzSQ"
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
