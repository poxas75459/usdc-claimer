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
    "5mP9qYqSdzi5ZsNAim5a42RFQMNjNAkZ8oahc7VtiztVrheefNSR8jctzPM7V8nM7iTMs4tpKtRz945HYSkDMu6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yagCyUku2aZvXJxKjmNKhhjsfiCdL1AXyYpqRDHFW2LnHDnXYPnAdxSoTwns9iohGU6reHjFQ1Vtej4YV522vca",
  "key1": "3gsczVdWAP2tpLqd4CJdJ8fghsFcxaZ87zgdpvVdrjPBXAMZwkTcTiu6BBAQGPerARzB1Pwxze9zWAeEtW1Z4CPJ",
  "key2": "25MmJcEKRmYTF4WS531rQ9YNotUhPVyNsDauqYyRk6ZjExJTLdHLPP6SJYEnMjDNdFrrVjThiLBVaHzX3AqJkNtR",
  "key3": "uhegBtGwA3ruErgoSmypNhQQQyjRCYma29cPhdDWSAfGzDYtL9tnV2CdVudiEQLEsTjAbeg566t4pQHvx8TbV1w",
  "key4": "45kHunVqqfrBAQkCD49VV5Zf77HEvydRpYQR79f1Xe81WLXKBhAtkXEBNqDuXUUC7Q7M8M8D6mX5QpLoHteYp4da",
  "key5": "4bWEeXGW5n4fy2dXGGZydibeWbrzMJq6uZCf2Myj8JLW3a5zgG7aS1H6Pj94bs18cVPDTbCSs6mCQBUbR5hNDc8q",
  "key6": "sE3DCcHum7JearM8YE9f6VyNAf8hUEsrNxaW6FFqsfayDz6wmpstWguUD8GbJoD4nob8ctHvxJehsx6oCEwBAsQ",
  "key7": "2ebC23PWPnSfHNAQBByyHxc7CjQrYArzQtbwECmRcuKd1nHSbLsqHM82F2tNLC1KHFDqoDp3NW9V8w4NSwWfFuF7",
  "key8": "2hM6P3C63BQD7HEWzeu8qQBzrU4MYUSSjwKQzVNq8Kmgg8jWwJJrP873CZe94t2sa9hkgHZtBvs7t26XyEGSqgBD",
  "key9": "6bVMy6KS6D38iWSZ7SpMQ5gRfv1L4ttgM3pYBRaiepXKEX2VbC2QhdhawDfskb2m7MxFEUXVkYHAGv2NuN2g5pp",
  "key10": "4sVKdZM4EsXXGF4uMaYHiZqMRVpuLVwfV1gcykwkPpNUBkCe536pX6214zqE87aqwGQ9PwgsnB9Sa7ihW2i1MtrF",
  "key11": "2DedqBcLFPWFGY9gxDnbFMCzKwYgRYvc5iM6JjCer7vuRwgWKzJ6L9cCkUD2sh3rmZ17uRfXs8p4KHuS6LDgENZp",
  "key12": "Rk6cqG7wN6r6JYkG53siutzYktcMGLri7K51NGhXzGvZepeu4dfNTRpdwwB1VksSAgPyikjXRwdut21wTEFRPSE",
  "key13": "3Pk94sSoFWzXJbnTKH3JEve4j5gGWDPCDkWjW5tcUamw1mUwCGYqaLv21G12DaJyzzPGAreQfq6pxLMnRJ4RjAC2",
  "key14": "537wrPR47QMeNZpXyP5S8BHTJxGqqChX3X8fWE1ADcVvoXgGcwSsKsd76sPfBqC9x3pyxPNE9bEKXfndZqhR767E",
  "key15": "Z5o297ZYnqh9LLfaUe6Wg2gu1hcUVbwW9UcSQs1TSA8TS2oEQL6uXsJvorY8mecX889PJw6n6wg9uN3umqgjAwq",
  "key16": "3LbY6TzdPaGAbi1qQ8PTYeJvBUWcbFesqZzPhh1YLwHKvDFwTtT85nX5nWXnHG33iEbJyTDCrSi9CHF4npM6YZwV",
  "key17": "5QPm9ZG7mK7xnegMmY4baK7GCku1uk7cv2RZj2Jb2RMPNSydSpDTQUTPyrwycuDwdxLz1ia5xsJ5BWjDX7B82p9R",
  "key18": "2CCz1WUYkTv8cPEVGbQtqQUDWFXEY5P8cxDdhQYFL5iBvmnEmcy5TPNaj6xKszPfkcTtz4udASuSuix1ft4FiveJ",
  "key19": "pzg3mbG3DYoJkUd6er975XXwn7cGkTfBrSmcdkWCvj6yfrgm7MTVbtNDB5TcBFhqhTUHSGUU4tLq3r9D7aGuPtc",
  "key20": "T5ZHFGAH1wqMNhXPWV3bK82ZfykDmoRpvDeRwnnytxKpa2BNQGqEQnviCdaqRjdLWn13FHJQ5sSBXRhwP2o316N",
  "key21": "532AFtaZYghha4Qo22zQz1VzkSFyYN3Bo1L7Fu2Pasn8MQcRDZmVwuxr4NrZSsRuPdS6ENuZUddDjXM2YjHt1LXs",
  "key22": "Gw4r59uz23XnwTsAdUbbYiFHC5Z7XZwxt5fjeiUr9oao5fQd5i58gMMA9xWL8byRdHryBF8VTkHG5fcx2sWWSji",
  "key23": "5i6CgsBL8WPDpcesh2xWd8AGv8kEoR33AaNfB3itfFBmeLDEoxDpGQSZKyxhAA9TntvYovSEBPGH1WWBaoAgTPMq",
  "key24": "Va3YLB91apayBqapkbtnJ7AAyb6YjhNiHhVUQaia8FGofs2nHEqiCKT5sseqEnctk6VBczZ5TxEv6FvAheCFFmV",
  "key25": "5zcYCDbB7rqoQ1Wu32p9dhfPHCwPVAi2tZHX5TXwfExaNfiKChCXKbbE3R8qYdVU6eKGXQ32MwFeESL9d8NJghr8",
  "key26": "4hwfkGPkuEKzwFKcV9gW1euYZzVVdp9mrvHzRyvkhZqXroS7JSd4Umhwu1DiDSs6xfYQCf3p5soG5NtZec4vVm2k",
  "key27": "NtUAHau7jY2aVGgJcZ34ieJyHJwTxAD2B2DEGnDq8aYeqcg11KNmbHPTjJxvgDu8sPsUiGrdjBJeoHQEWNDm6fL",
  "key28": "3WhkZPjzxUaRY7pg93z2G6135NYiSzDG9NpHz9DEWbhvJjXJBrUPj4AJzif4zYtvGJ9KKcw22tdbaGmDsKL61AwW",
  "key29": "LmjKTfgsGXeKS7rNyNDeEvUWKXjcUrxHYu7aSr8KRoF1hfJEkbWZAA7dKanp1GRN9vu1qABeqr7zk7TWYRLLeir",
  "key30": "4C4cW1n2oMUD28v37otMEhVDWMwvuKpaXmbXCYhNm54mz6ndJygDJFySmCr6tx49yRuui41LPUZNgckHvPeHKZgs",
  "key31": "3KzNDjhbSNd4NyTqGxA1BeCoF2chLg9SKTsHAWto92gnmS3vbFhKua1fJoDKqCx8KkukAL8DcFNi4adxAhNS93uS",
  "key32": "4UneZQemfmo8M1T31Z1FwfXLCMY3d76s2HDiwQybrmGwRPFghUHrMywRYY8qXapUeRqb3ScrGneAVMzkHHT7a2F7",
  "key33": "2bbp4LVSSPTbHt4ibALnjVMCiDan5REYPySXFU5Twv6pcLWk87qi4mKgnC2ra2VVn6yv8xavajTpGqsPvy1X37U2",
  "key34": "4gtD6WFmVL74r39XCoUcG2mAFHN2kv78eqnXkhHncDnXLkb7DdkrdiY35L93haQkSgx5yoqm7pGB5XKihVS8a7X2",
  "key35": "4Ld2bs6bWomr3MS2uLt5t8PF53jXKP2TxFntnf4YgRi5RUEjLWjM86YB5VkGfcUTPYtSDXiuAX9XwmFBtnXxK66h",
  "key36": "533iBZZo3iFCvpJTezZUxL61NPNWBvbGZ5SziT4adCEi95dAmQ1Y3bbu8TbH2eUYDmeiB1VzcC18R6VWKMarCd4N",
  "key37": "5qs94ewP9a14Zjr8Ttk3cKerJDhmn8TZ9FDWzmXSf79VEBwELjbAJdCztmb8BEG8ergAJGvS3jRX5vdnqLJvgCXE",
  "key38": "2pJmUAeD9u1Yg5nUUMuc9LmCMXSkvLKeZdokMzRZ5Tw4hvkbk53oEdvEukmzmt7SACPtvgKva7wZd7QivJKjeiAE",
  "key39": "593vbM4s4CGx7Vo3oRknRSVqhMyYh3vgbnxbBbVBWVXzHREoDyt2mJSq18X9YJRFKtXTqyJY6DVVvhXfntakEwh3",
  "key40": "5u9R7fLut7QJTrVKbWQJAtHmppdA7CrkTe7kigkJWKbAPHBSeQmHbSQtyRSvqrkfn5ujzp7F48ob13b3U9Kw5uRu",
  "key41": "33DXgW6TyqK92UhWNJmM4Jmtc7PkFUQnGJaCQNWCFh9BDNwJTqEjkVtD7viXAXB4BdmjS7rTT1vanNwnHb1fi7E6",
  "key42": "5H6x6naBBoCQT8jqnqgEhQuFtjZ7buJ7Ht61ZrouKDARJFkojb474gZkoUYe2KxQJTsAAqANBWbaMRKuJKjd58wN",
  "key43": "EVbcprbz6SDpGivuZr3w6kb3tV3uKWvbZG1a51YgBaEWbD4cxpwQAi9nFG3vVQbV42sSuBQdUFZECgbgFmSRGft",
  "key44": "2KbnNYP4va2sYYSAvo6ZWLKJuicwUJQDGiA1ZSqqf6PENJGQomnvPE3rDFmxQUoMaW1u8E9RAf2AS6Dq6Hbn1LBj",
  "key45": "3DdgPC3ChiEpfyoFdewdphVkvomTuvYqk8AddWM5S8Hj8zzxN8yZvfBZvzE5xeET9BsaCPzHHLRk48ZRDd3bqkFy",
  "key46": "5JhEUjz8tymZYjHDfWzUFTcaoLizeEbvHQJLHxUEcPMqmBx2NugWwLVHnZh5WgcYVeMfrfuFiz2PrjiPPhUQ4sMi",
  "key47": "4zFXEQ8o8mTDarzSSPMgNRpy3DVnYnk6JffyKoXk9nmB1ZF1gCb12UmUYK41G5pbwTyMbzniEyPy4gXKEHX8i3Hc",
  "key48": "2eKaZUzNgtBxx1NhhEFQnnyMGNLFHagQN3Bbmer27qjUCTPP6sfTGDAsRoe9LCjaAZZWGnrMzTabG2qtSw4En522",
  "key49": "2ph5yb4bhP9GricYdgiofokcL3H9KK9acy5WZPpZkqpi68jiBVRpcHTYVRt16e4gMenf2XxWmPAzXSSQtf5qnyiT"
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
