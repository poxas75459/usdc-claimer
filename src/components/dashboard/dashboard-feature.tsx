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
    "Gb3jiH9kPnon1LfmDqygCvbqhX4SNWP3uEx8CLsSN7S6UEgnKMmuLdJoXTa4KQmmKEZeXPLJJoUVHGkY79McLU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k76wcpi5Xzd6sURbLHdGCvy7fARbNxmu45LiCybWrv7x8MCSRtMyCSgwxRen4n8Br1qq9sYHwDp5Vd5o8UjBaMU",
  "key1": "5TviikeHjb741kYqKkMBj8EjBiY2gzzCk227xPhdTGh5f4WALTudMSPVnNLcitv4q1j5Q1HwqY5UJqNTzLyq29qt",
  "key2": "437u6oe9ioVAWHxffw1nnXU1ybZTsMg9dmR4uwz2T1VqNegaeTqkfHYbZ7soJXrQJn4XLXnoL8aPk9iEFQFVxE5v",
  "key3": "5nEjfSVxUdbdjq9tU9hguD5WG6swJYnbtbd8wDiXw9aJn3GoM2ou27gcNigka3MgpFuPzLoEaaAyuVhA2sMrLKL",
  "key4": "3hkDP4Qx56DtbLiopAtgaxiKVVro4ytDswbBMzGTeygdwXM1MGef2dW66at4h95j6gf1AqrsqGqQDDyHoHDxPPpN",
  "key5": "4bw8Wz9pNAUd72Vw9VH41CZg1LHgwDvDiUW4TBaTLExSU1wwN65vqc8LTwf5LGfsrxrvjZyKz5Ltj6NpmXL7daPk",
  "key6": "2sCPyDgUyiyPQ2fCLuzEi2hZYXuvRxmou5hE8p5J64a2mdwdbW7e1p8ZHYXvP29FoWMWKLAU4n155MTC1SJpqxtw",
  "key7": "2rC1maWLsMeZseL9HyzTE3FwbxhifVEoBswGLbTwdnA8Fw6hdz7h3pve2ZAsT4TSNo4iC1Uiq28zrmVex4nEYVpB",
  "key8": "3nZuuscVBiTdzCyJYpV2AM2VL6WvggLtL6NSt95uXFJYsCU4RGm9Y4hQaoub4fqR5kFjJVGqmuQqa9oynpxK5VoE",
  "key9": "4oX9puubQEq9bEfpQjcAL3CrVaK22HFsYLRgvZjHJ2qfzLh4HUHVi2b6MnFB1xKKBatCF9AHJhpK261dphabcHZm",
  "key10": "d1k5JSJCnHhymvAC28H5TXKf6WumtQDe6SiQTLiTYVoGaf59gudgxVZWG5MJGfC9dpyJUEHeErKPYtzR3d425oL",
  "key11": "3e7VNehpZEotzK23qMm5YFViYFjBfCNdgDthcrv31cR2syHWVKD7d7PPtquSBHZgKWRFuKThA6pMSbzGgVPmJSnX",
  "key12": "4i4NLPYRy7qRCwM4Cj7XH4yRxa6eHLMs3M5qCZYmKAT63PEFvVywcdjq9rR9Gm8bzQuq7tr3qcgjBMh6zS8318qA",
  "key13": "5uvkZcHPSxpYJcKNpwhWbKjELJHTYLifWy4CKgVpaQKsdM9FjJcSC4hR3FfZeSStqh9Z2MDB5PDN4MQTF48iMfGd",
  "key14": "RuTDr4qCR715r4yxAW7DqEuGyqqGxNExAauuRL4QrivL3DdayX8Vi4YS5BifNdDvkiLLAPjpiU7MJoDWy1LKNQs",
  "key15": "62F3viRM6XMqHWwbrUQWFjANaSzsTadq5AMAS7EFvrvzXYyiCSWgjgMLSR1s1BRKiH91rHTNLg4fTjoSC9UQoMuv",
  "key16": "pcxvzFQhtbtoQpuD4SGtBHsAackLyZu9Gxj8TKbrBUPgtcsgk1usDxcFDcfgF2ie5LdXBsLNLUtEB8XGmCChLA7",
  "key17": "5xPWnUf4NYVX1kitF7HieSA1psS1ukNHgPWCUdeRoupwNaW4n9B2XWwgnfU3UFgpQMrzQMttQSQaUazL5KcMDAy7",
  "key18": "4orrakMm1PFs8aeUrPQZ2kvMcCRrbdz17RcbmLHfoQcCZKc2eopCp2p55ZRm3rswLkzJk5hVosUHQTms18HqbGvT",
  "key19": "9oxc4BSMNn26UshYtRaSsf31kXGeo58jpBqQ5s3nJ35J5USPY9EXnuzdHRE9qWm888WUeAmu1zLBU5Bqh4V8GJe",
  "key20": "2d17wEcZLpG8Dj88Pg5Qknp1Eh1h9baAGcgzjmKPoQegK9wM49gvGcAfMftuUJSqa4SXHsySubiEZrW7C2yB5RFT",
  "key21": "Hb1aWBS7Ym9d1iwLycvzKw61pgp7cxfAvjj9MJ74H5JDebBjsym4AK7UUxH9gmqa4rX3takZYwkSdQTQYNNeWKQ",
  "key22": "5VVNU9JYhDqUVFSTZTaXkKYiLStmA5h4pp4dXwtQhB4obkJZpF6P19bVQvQBRG5vdPf8NcowDMnehpzRTz675exi",
  "key23": "59BLNTpUjgAsAxNYB4BpuhonAWnXCBmPVJ2Vg3LFoQJgd17TV2buZRfnpjmy3QcJzK2ys3epcVhUNvRiZBM52bAp",
  "key24": "2YnrNPy5wTPbyT6LUZnhYv1u64UsZq27bGHaBvcMDBTpPP9im9MDkpKLzdpUPBPhr9sjjMpbY4ypGUNovaEDXqJz",
  "key25": "4hK5paaNbQkYPaiLmPJvpSLYeDQYDX5XrE2J7x7tqAoV1y78dwCey9Vx1FAZHaMp2WmhTVJ1KdRFLNMYKiBCedHs",
  "key26": "5Nc8fXGBEb7kqUdshHpUegS7YTjHmWsHb7NZdAp3KcN424qkrjQGQaE1Cj65uYNAeh5WmRVioj1TxDA5iH4nbFyk",
  "key27": "4RzcoKAdr3kdFRdrcyHTB426uPc5R6Htp1gj4bS77hhLwEuF3Cx2fsR3GjP6ve73jjb56Bnxz24BRpgQpfYxxsdn",
  "key28": "2JA8X61MCXbczfGQXhL7yfbfPyfNrtWR9osayCTphDQUKnP9NkmcHGw96juLAr9wGBAEi32v5EWvVa99WbAHLaSf",
  "key29": "59PQW6zUbzXf9H3hkj4dspBPgJkKVDxEu2rZAQK19YNtF7Z7LRfoJ93QYMNnqVK7Rnc3QYNKDPhA8L57zgFjrmue",
  "key30": "3irjcEFv3gnKgynn1QEx39TcaAMzUqHvCcWSDt1mTGisaivt33crqEn4T1ZqDMCU7hRRxNvx6hTDKDZbDMp6cNqC",
  "key31": "5DKz8KGKaupsNxdxfGXB2enPUcWiemMwrcgrFXU6RVaYkqv58eDvgUHA7NUAqmCFN4p1DKsXo9Q1aLycPy3YLBpu",
  "key32": "3SoXRnjPY5XHHYe278t2atDbWkPDWQFPwsmCrgJMWyPsZ9JhDj7FSgxjnRBfmnUWFEp73tRkeT7y36HgT5s6s9Y8",
  "key33": "3UumrMYfJpy6zGU98FB6kWZpLFkPBte5KB2LJBvzZoGbHWRpqR3BgZqe1FpR5nCpiqWhfckMXc2DX2YP5ficF6KR",
  "key34": "53EYUvNSHLaVo13m8GNtWaMkrASwcmxL6LctJQpagPZEFP84ebGq2yC3VAPUxybXpwcW3GErAY2neGXEbQSQK7kc",
  "key35": "hhMQHZvj1NPbALkMhQSiVevATySfL3U63GTzKCukmF1n78srwC8QNtjCDwqVqp7VocmXwRF7s3ziXmPE15zqaH9",
  "key36": "3Jha9t3aZzX51KvUQxcCinz3P3WsY9kRr5MTtVgXKNiSndpchRJ9CdpUdoSmhw2dboG7rKvnuFFamATa4urEXrxS",
  "key37": "2coXeTo5Yu77VbHjxCMq4wQsP7Rx6qpo8xnCjmYZjj12wtZybrJtywVYvLyrMayfAwQN4Swa4taJizuCQzLpeZe7",
  "key38": "n7pdZU5qKsypgsTs8XX2dodQFUR7DB5h4Ao4asWvqZfskQapCmGqBQKGu6YYeAjWzRMg5Uxi9AuQ98eib6SEfVW",
  "key39": "3Vg4NWFxVjmjK8eJ6ZVoH9FqFvxm7bfX87umVdirCkGjvdh4JrZTGWLUY1F5SWu4LVCRd34tZSJfb3oBtqZFUwLE",
  "key40": "2UzVcvFYwB37ZYUWRMFPrPpRr2XVfZYAaXE6tqjUBnuZ1vDjFzufFwDof5k6hmQkYZYAJoBHBME2HNvL6djjmzJB",
  "key41": "2v9egfHSpaGNhKLKWfACXoLiP8LYcWWBXmpCRDGoQm2h9iN7pHE6SJyauLTPqoj67QhZxqZ4ymT2VxLqtgPtWgXL",
  "key42": "2HuRucKXpHSq3KDAxjMfZe34zUYX6fRhuZF4NU8puowqpYTNiqeEq2G34HybMqcLLmwCdHuJqjp4f8hxzJtXo46V",
  "key43": "44TUgtPLXNuije1xAmsh8wQqsZEDjea9wWWZHx6CyjLoDMa16M26GEyJpd9xQWnDEsstYTyijvUgv4gxFUYWprp",
  "key44": "2ogbNvpjzaTLJFR2GGifMPitGCwjCGwMtx6qo7QpLTKjhA991o5q8JK6qfpR6gyTkUKmpG9MCMJJZhixBGUSgJtf",
  "key45": "45GJvBgsh2djsX52tJ2vwKu2hMu4tPwvWKMdhWZF1Am55T9CanTSuFirwgCJ8Vw61yoDsDTcESoy2vQCEdc6z22e",
  "key46": "46D9h3n489Bk7oWtUxDYUEP8QAWNxhRppRwisYiqUHBSZidKQc4sFLRuPeKJSu3owhVmKr3LyKmpdQymVVwLiGGk",
  "key47": "bPgVuZhk1ofzr4rBRgTmf7TTNsNcogW22QHd97o5HxAa6ErhDPSqijRawEyr6dXP5vbrdP9sPfM7GvWULAYBc8A",
  "key48": "54yDqCRtTqhA4iTb8tMZKHVA6kMegsw4Hja3DNchpydvxBxCmmFNm2s9gQCypY8L8we7s5u9GZNNiFGfJHJMwxZ5"
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
