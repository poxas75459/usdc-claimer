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
    "keEhuWsgPTGcTkKrUJhtKqeLMu1cbQNmBvhsanwTFXYTKpMXPTrZuy2Q3emU3pPZ534F1AEWUWFomga6QaX7wsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGeRH264vi5uY26djy1xmSYiDVHWQnnPN5tR1PvTqjT7gV7c9pTLyKjSBbtmkEnNd7X6KrYP2fNRkYBbbDbseTm",
  "key1": "61dbTyTNP5AFF4TjJgrHM4Muo7eBvc9uhufWK5WYVihUinz83TZqttzFvZdwpmGTHGTzKBtxeAHz3wiEvG39B2KD",
  "key2": "3jCqZ4Xy5Yi3PQ9GJi8oZGgPEatN189RhErsKaDbhZEBcufzeUhGj1QecdigQxZki5XD89iYREYAeHrG4rtbzbvr",
  "key3": "3wyA6MVcvATTkP4umxD3R8JDJcAFwq6ScZKk7FN5vk442cG2Mc1Vac7ErXzSsG4n1S7eEnoxcrtKAk1swHG9V4gw",
  "key4": "2LhGhpns9gQu8JNThVPf4L2dZwjpvuCTMr1otKv56EWhBpJsjp7yr2199nYQ3mXTTRUzcUta1cmDVARGiUrqvfe1",
  "key5": "3e5rRuSfk9xkAM2Ww5fvHtiicQyK92iYcJAsCWpGcaqEWFkQjPKHRcqfuDKXku56sS4fRz4armnfoPFcf4QAPoGX",
  "key6": "36RE8Hzeii2Ba4ZkKKrUqohLz9z6rLn25TpTqTfWXUiXXeNeiby9ZnS1Htmzo5ToyXQ596kyYCKYyFQAvv2Syokb",
  "key7": "3zqCVaLdcyKEZWbuefDg5BAdH33mcZ5caNC1XgeCcuvZZzJLX3jfk4KgiEFe8bbP2JjKrMs8rcwZs7ij8WJD1cBT",
  "key8": "2hVT9itkKWNYCf5W2wZSutqoKFL9vdE1DDRQFuBPZYt8xHs1SeHZaEo6ZTsBNwwX21couV3gz7V5kD13bhxiByVB",
  "key9": "5ZrJmJSmbchRhMJD5PYKhjZUJF3fnYNdCgLi1o24BthE1mudNJQf2JTBK1Paat5tS5hqcBmkm7VJHmjai2RtfePG",
  "key10": "4PH2YpqwNJkNPSy4ujh3VBTDguNV1kxSK7BL7BgFpEDZHTBpHdpU9yprU1W7Auwdos4kJb8KKB5TuqAovSqQF3Bn",
  "key11": "26aSQt3LaKGGXbXfnGdkquckTUg7ANgMKxYspEMaaA9N2dy4KjB8yEaMXbFNbBNbfuPhFP98ZWo5Yr4sVvu9nNxd",
  "key12": "2iRot2N9vey8jF8ueE5RAP8bgYsmEkUmdBVLmUXRnL1MccnU9JC1XGukCdjEVsMj3kSeMbqvXv7vbhZ4E1Gsjrt9",
  "key13": "361HuLWyuZruzfkQPrx5qySGB6u9hxD9CGXdLfuU9gmK76kZs5ZG1FLbAye1vhFWZ4MxTeUzNuTvxpe8CwrkArPd",
  "key14": "5B92miGvw1L28Yj9Yuo3ZxZeXDebUvKZBR6uYTCXWMP7f4CADumNVFTdLbveUUijjm5GkP338SFSMN3VprArsytZ",
  "key15": "52PrxL7GaKce3qQ2rAihQ6tB7rULQ6gdKm9YEfy2gyigkR4UMVqfdScb9rhtzbrfH577q4xEK8U3VWWnM9fpvegH",
  "key16": "432PVsoxV3xoY9KmJLsjt5PHoXFPBUs61z3J6kPj5ZyC75LpFad1wa6YvD42kyC2M1BzM3w6QfsbrNeMG6HnqXvw",
  "key17": "L9h5EwR54KNAh4XbJYCLMjL867DhNgY2oYByBUanhgj9mv4UtjLMqBa2pVP6SmSpc39wC4xmF3tN1LHQCGdV4GU",
  "key18": "5KSbvivDu6veuqjmXMG1zi3NR51BXB5qtPetXWZBy2oMSPrhAE9Fwt6T6e1qVstNkGVnFzhVZnF5HeJY6yp3ycn5",
  "key19": "3g1r59GTwyiovckqW4bygNW4nes5175APhVgpNXCujmnSG18r3h4fUSPLXqrBS9iX7tw1YuN77DY2De4CAzTrfrP",
  "key20": "3qBkBTbPhS8LiNKvKUAPyoB6pPSdkWFsCHx2iSdZmAXidCoJUdTcHXgPdw2Z9Shnkg9anoPHhPm2kdJduphNYLJg",
  "key21": "3ttZCzJFR3rLgCFu4EdQsxD7XpAq4fGpYbPEEqH7AegJaXxoHXTFNGrNiHBrJBFfhARrX1kNe4S9zHtH1m7jpPA3",
  "key22": "Pv2QDRbyypE3fQhzWGWbUmAB6M6sDyiJzXRAhGitCTo1e39HCiLTEuFAxfXy2MpLbzhRxKQNP3mo7yiQjywRxaj",
  "key23": "Q2Ys9AsQP6u1G2bJimK3mVU6c55gYkWvMWiFZi2Qfqed73fBGmcdHbbEA2yoqdPebkTQW29YKELzNRFGiYVU3SY",
  "key24": "3EDLVM3SWNgc6JkvHPvyc54ib7RitbFPXPfr8Lzjt5txFeB1n6qTq9udqM5QtFX87k2XPHg7LRcGEro2ALPiTRdn",
  "key25": "2GtWaP7PfPBymWTrovt2xYhRGVsZWHhFZdw1cPkvN4DvAfEDy8uxv4S6c8zw51TePxtPvJweN9doQD3oRchjUkhM",
  "key26": "3QEpsS1aFKfTqh3eYC2VHj9MoKND8GstSiqVyneKQjTy96bbgcJwuw9zhFYm4Qtx189MaNaQ6vmR9DgQaqtSb68i",
  "key27": "3WAXVLj13qd8mdqzDE29o1y81W3XcHLUQxRqs8nAXAiV2YgMk4r34doHCdBTvnsWQea9ZbNhg2sLpbJB1m1yyQHy",
  "key28": "5zE7n1ejvXLK5aMjMnsHX2LWNvHb2ZNjNd12nbWVz2UV5To3iwJhChTdPaebJPE4Y1WzoGAR65YBFjtioCqVaYAm",
  "key29": "5cnmbnKvUxGb6JekAj9fVKBXYoqKuqA22TYFyT1SUejKeVkYg21NcbHjB1umScExTGwH85vhAP561GEWv38Dmivh",
  "key30": "2YKsBtsBqG7rYewYUF1R8iH5fn51zdWFugNbaezKTKW7LVR8uexZF6TFG6yVWRfuWCdcVQTJYqiEyLuBZEc2ZTmx",
  "key31": "234p9Ac2TKySPyRRWZhUCueMr6WVL1havuKuSuqGsenV7yQHC7FbguZfFRg75ajGdXB4Q1pBKPqeHxxtr6viac5s",
  "key32": "EoPNg7i16pJUDfgnC4KaDqYfbpTqUaoryDEJBV9Rs9UvwxaX43BtnM89EdigBeJMQVv2avpSXYc4n87yHWUF34D",
  "key33": "253Mfhi3e1yxDJJ3cVGNT8p2N8JP11wfr5NT81gqTTad5r1c3P63VVaHVa1fSNNNSKjemnFamBVPKhLMTdJtYPg9",
  "key34": "3YEoykiBvYF8K4kYVy12hYNYzVtFHttRmUuSqJJ16dpozYY3h4DBQ8AAg4qeFDHrkfgwa6bk6YeGB7PewvPp6SkL",
  "key35": "3GUsQwAuJmdQkGTaDNeVWK7U1fuyrpPHf77FX3v9S1whwmWpJSFgEqnJTRqRvq8rb5B22bfzru3SHqDwZoPo6jUM",
  "key36": "2vdxFQ1cu3ievohi3pEdZs69VLjfEWpQyQGP2U9qH7rnKcBoWN2o4A5pcMHmvwCq6P1eCpxwGQLpNuUkf4p9giji",
  "key37": "5tAFwDrdJfq7ZB33v1RuGhyDFpeZqp17oUwtNw1pJwVFtYwY4ghdUmAAFmATxLd9QYXBcER6zhFnSEu6dau9BcTW",
  "key38": "4jTKesN74yWsLC8cXkXPWhqGxyktManyzPb9zJQQbVVq4zs3YVqRvxWi57VwqeNoRfJ1so7o2DQYRvPgL9LdjbaM",
  "key39": "2xNGfW5VsPXj9UFW6Ffua4CV1vMYWMNgzuA41WWwqgv3FcbZF3BTLXiMgn2mj7JdwMsRUzjakpdqZv2nqAhga1q9",
  "key40": "FcD1yeMCFSAobUw9KB6E8fYWknWY5jceERwVMhjD6ZA96o1JhexrCuvZqDiYQ28WVe5AiHygHcFh5hH8VjPipEu",
  "key41": "2KCsKp9cRG2qbt3VYRY6aQ7QJLc7irCHJ7RiaYVqhJScf3zdDHsC7uNmbKW2ntX7idpyMwx54Q1Lt4NpDiFrvGRR",
  "key42": "2nALexCQhk8EpuA9xBpyCHC8DDsg138QscFVWnsS9fqoSf9nYqeTshbQsTW1Tvq8TkvB9uETtx6VzYThsorBxcb9",
  "key43": "5Q4ckGkYtJQPH9ZMp1Kd2kZRHjX4KkSh9XU8FfZ1RJUk3CUJiCR7JYitheu5rdjhLxEoaPuYX88D1hvzjqzyUNLT",
  "key44": "21PNFU4YPVZm7VWKJjpyQHPczDknQVNLs8GzUwNhzCRooXnm8cJe573x28UJkdcceANMSvV26xrMvfDLQQqokFJR",
  "key45": "33oe3As6Ucynmr1e3F3nsZNhEwDkg1fmX2KrXWJo3CbJAs2S3Nv5sfgr1yVQTqPqbLSV5pvUMgGKu6G5ttUFwdMR",
  "key46": "4fpdnRfQdwvu7YwBhxRTyzhbDdWe6jusjFmMpdxDMxpYTatm2W3XKVsY9bkLgCD5pnbsKp2aRC7P2fRuCjX69dpK",
  "key47": "4gtJjDPA6KvcA2m7YxjBWF7bonKyWqFGqDJZaYX5NCqWH1fD6on4J7rqsFeuvZdSX6Gg5FPJtaVCUex88HaKwEwq",
  "key48": "9bqtsaE2WeaxVeuQV32dctUsi8MiXtZaVWMG9xNVJVrVpDgww88CKEq27u8Z9bz22JVgFshfzm7P81LpQUJVULV",
  "key49": "ZnzW6w8vLPbaZZ8hm4UUemCqB4tnW1wjqF3NcWu42ojQ2gmmm47PDrLAK5SgZba8fnfwHLb6cP2rreQwRYGnh6A"
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
