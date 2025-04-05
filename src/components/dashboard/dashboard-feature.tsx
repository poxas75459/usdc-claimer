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
    "2DRTLG8PyeMsYV1mhaXfho14hYNz9E7mkLvQZYQH8wLjn9DKAgcd8ptK62zm6cR1yvvkPaF4QjG2e6RTiBtADUds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXXUo4X9Woh3MpDPrtzgSWGiZGG5H8LAmJaB87bgbYtsWBAEDASykyaB8aMHi88woMwNDMwmXU4f4w8heqANLXn",
  "key1": "2xUcDn55vuEAF2742z3ZxAuWuQA1oLWWLJGBatGk4MDbrCxpL4VhuvtSnAoyezCQadxj8WipXsz9jqB6QhjWgpsS",
  "key2": "2xnEh39oTLRnZ7Bq6stuCNgYrMmoryK5Em66oajaA8YFkyqwK8WRTBqkvPr29wUKUd4hqmWqQnV4BecNDmVhvp5Z",
  "key3": "2PKTbaFVAJErU7eXmxFGV97zVGxViRSKVNF1WEHnY6BVbJjeMp3DHqS8RdiPYJ7y3C49qHGSL9WcNBoAtm46oNeV",
  "key4": "52xXktwVKKMGea8dRtmZgG28dakYpZoK6HgYQpJ2jDtNFszfVC8rR2dQ4sbDt2BTia9R4TUiYpDA6aGj2mgW8rT9",
  "key5": "5EJmwcq3sGdYiixPTDBYHxYsSTP6jxwhgrqKLoYTMEBkydkhNCMpBo3YN5D9SKHhYDad11EvvyGvnoQa7EGW94VC",
  "key6": "2cr7imAC6XYGvBgNjobzAgfSNTjVWN5K1ZWuSm8BaLNatAhC81vFfesbtbYfp25bcHaLuJ6mr9ZecpooqtFYQtp",
  "key7": "f7LxExk6t1sGotG5HHGHp7oHHvXMVo8M64y24A7RYNj6Cik6Bm5Wbb4gCp2T3ute5ERSUs2XJoqSerVdebHb7vs",
  "key8": "3DARjbzDYSvrj8csqrBKKrazAdwXUSALa9eLJfpopDYiccxY9BrLaS3cH3WcfbwF9pysZfKVSZwqBbKJSxC2MtDJ",
  "key9": "4mduPRLVMis7BCRJjDkv7TZ84W32PexasreLvoUQf7RjtwJhqfBgzu2FSAboJQGQ1WPxwHb6975snEYGqGfmKA8m",
  "key10": "4R8qKitygDpMt5qLQRbZCYxKw2aGuWC2QjPEC4yXLPg1c6cdJWyAzSV2RXgxbd7ktd9Vw5hhX3WEe5UEJTwASN4w",
  "key11": "5GGFB6NcLBX9y4MZt4FVDaMqBT8z9AYFGE5qQn6TuWgqc3qwRJjep6FKFBkjC8czwkCpJqE5of8aHzcMcosX1XJp",
  "key12": "3SfTuTz2vswK42QmW78KKWRCaoXhfUV7uqpB3k6ajdLTmAWAmhxSdD7XZwB4WgWJ7bd4DgbyY1kD1AtkByY6aWYn",
  "key13": "2oxf6aPp4Re8dsYiQdiUy2aCRcdPU4TMaNWsDmdCsSZRT1uyjyPggiyiR1KtyBRA4fu9KBszfdR7c5K2j2KpW1di",
  "key14": "3AfNnHAgiRXrQCY3AE561cm29UYuZ9X5EBeL9ED8t3N9iFAyiEDPpUYU4wtMrdLZ8b97bD3nmSNjhGKRZZX3f2gF",
  "key15": "3AuFH6naTiovEHjbYY86mBV5CPcprMLxTvwLiyTEygo7P3uJaYiqP8NrKTCmVC8kHBuayU2JCFWcCUovHuHW9Aua",
  "key16": "3NsjRGTUcmpxi9LEi9bmSEQFibMUY6wQ5L8MEeYWgUzTn2SU9wMcCJmcj9cUyjje5eXv7yPbhW6eGDtgenTygqpK",
  "key17": "5kHGPdjcZ649t5Yooho3nfVeGXVdJVAGuXvbQMGdj68svw9GT8gRJJpBf6RFFGVbz1LXhm4qcMX8AFgfhL4k844f",
  "key18": "2Pt9zeLRoijidHNgKqP5aZAz8JDwGiZ5X4Si32cJsD2sjYrXeS6df2pu3WRTich7HhXoA7tgPtSBmca6NkBkc452",
  "key19": "4kxj9boCdRgBJFfNUtDy2cChJjU29BwsogV17PaqtKNAnDo43LF3prPBK7mHZZWDyWVXBVHyumHno3REhN9fgtMf",
  "key20": "4WK2Ggf1nuBdiWZUXRFeuXLUmykcMkbn5KejY2P3L8LDhKGundg4GS2TrwX79GJdNri5CnBH5Lqbcty2iHJMBLJ8",
  "key21": "3uZ5gR9i37jqesjzviJJw7TEY99AGPgGiJB7X2J6cs2i1Sd1aYQdeDo5pysnfWjLAtx7Rm2P6Sts6GSiSUcU6Bp1",
  "key22": "5W9gW9J5F7PimKvBPFMysmBuErNpbimVH11gcH45mALDquG4grEaTLnt4RzL5wqpoTXaYiKqLbCueWraMuRAF8en",
  "key23": "2avnkWNeNqBTKB2hrcSczSmFNBPAvrP2YwbrFcHW68StRGfTT261poBGC62JZ9axq1W5ajAYTXR88XmbUHnszVRa",
  "key24": "45ypL9GEiJVWe8KaR77v5BTZEKjPcEYr8D8x4XRfgiqJw6zwkYNKweRVojD8St7eaipQ1d6mXJDboQu77EuZXgot",
  "key25": "3H4yTF3e1axEUzvrUj91CvDPRnGYXJD2gkSxX3JKdAQC7WeLab3qQWUSqmgd7ErurpezCybCu7NjEhzTMCBzdf8B",
  "key26": "3EU77MAvCXeDSC3kRJzFixTCKFapfs9Z2MsZvKn6MhqBQHVsTA1mgd7dNRNGrjkxUJwf3H32hYvNqg9kA91pgoq2",
  "key27": "3Fmb3sWLbvbu4hf5pN7jjuT55peG6bRagFZpGfjgVvmJ1AZecQQ6ycL7UQoEf3WzABM1VpcPJTRArmiUnESbeBXf",
  "key28": "5qSTr7moauq47cqMJxT7qVZYxPUwBWCKLT6tc9FYJYnSD2zBqoKpGC3gghdPUm6Jqmbsg7WmueRzeAdULwiMEr93",
  "key29": "2gFZRziuLtYcscGeydfipTaR5QpijgSxZ7iEs4NvWEZY1g4xQVoM3pSCebVjYS1uYUcXnW35DX6nAywXyGEcEoj4",
  "key30": "2B6V8MXUHT1dhojEB9MQJyEkLYaNhgrH1NJSM7hBaTkFpb71GrR72qZgxB78Ppxs1hrQ2VFbPEZDfN3Nk9KHCTJ4",
  "key31": "2FdMd8Azsgbf9jeAp5PmGUo91XCPAwcAFeC2ABeCuvhT5chbKVJHGRJJ3Ws8xvtNAC3x6kLDLee2Z7qVXBvm423H",
  "key32": "558ZucukPqJRFndhSJxswQtmZY81HYD4RVV1wMZT87jp32aDDSJjet17yYdUpXVbsRoeqNiL1hCGW37RTne76CRK",
  "key33": "4hKE8ec63dvVXEVLtBtt4ST9zb2qvFj55ztKguFnDvAZf8YfnHzKPR51hYBWeTtBG5DMT5ncdBTSQUDRfvj2UGen",
  "key34": "52mPTQzECb6jTRkGwBbt71QHRawGwU7g9ejhZAR5yR6Weou6o4tGrffmrwfb7tSTSVFJXUxnieQMuz2jcaqvWM6g",
  "key35": "3uFtQZvkgS3WCxkzN8Bi7KPbQepNQjXSHRSzbPDVVR43TPGcS1EJ3XzcMkvZdC8nvvripFHXeLwu56psaKZUoCYA",
  "key36": "2dGtg3fYmeNV9dYG6uYYWLjrFxzi9BwmpKTFWtEGCLiQUQJFpXU35qK6TdZJJyXkoBWdPJX5koSRbvkipaosohMR",
  "key37": "5YHJAq7xtQNA8hzA7KV7uYHy8mww6kg98t1bXPvJvkCiGnixRpWL84GaDhP7AQzwKbuJgJZrjKtmHTrYvqPN4MTo",
  "key38": "45UCuFkvSj7WwCDE4UEi1gCPyYjs3r6Nsd5ouWRYBuEYaAMFpQkBkbRpHb71U5JDvJm1Bbr3xbdUhu8vQwUF1mM",
  "key39": "zQLbhZchsXU1jnfoyjkuPK8PHBeD2iw3XZynw9Kn8r2EcRcJPZ1CrVHnZZe2gC4qXVnCWQWP3PQvHgouiNYi4Bm"
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
