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
    "5CCi17NX3jxjswZHUL8L4qhHKbxhsMugUyuHYd2Ad6v6mox6vcY9X2dVbAvz51RLdzKsgs3DyqoEnQHMPUqvgSz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47QWBsRcM4qJ19AYEfeA9xtsz5iinoQUUZvtszY1RuomS57MPTKUbXUqrLqV7CTE6Y3RprYs33ZSMgXh5t5nJ1cs",
  "key1": "ZdBbTdMTMsFRh6ErDTfqAR6QcRU6gkP6eABjZPd7isK58sfcMUqnd1krtjnsZfifdg5pBBjTGLbWRrXsr4Kf1jq",
  "key2": "2qaCpt5PmdeK3fLMS6E4iT36z5Fjjo6Hj9hJy4TJP5FMydEQfvmJVsWTcxSozmePLZVP2RtQgcxmroLAufV3CGNi",
  "key3": "cMV7muiYdFjB83Lg5B9f9vm6SmzyTvpnsEV23WjfjCcwTNbz3Wog6BDyeHYt4rpk6xcN4ZNh8dPR9dYNc8Xn5ki",
  "key4": "MboAdGEL2gYMcuS3rTNmdzefR5sFJCYUptQnPnzdqpKa9EKyKPR9wzmofK5jYzSpKfH7hf3uGQWgJHGHNqDjsj1",
  "key5": "33tFzNSGL2WPufxGCfZXUpKixMxMQCybXvLWrGemd3ivPjwgQGoXBtge8KLMWmRr1vsPo3erWd93bnEGzXYUb4Vu",
  "key6": "3gRsJBFb2FGRnEMYvcER76mkknY31beZW2F9nejXTR2yfrqktYKWJ3uGeRVuuZwdK4MbDVqfJYXHXzgD2AWNeXn4",
  "key7": "5eAuunYPPK9KPENhJvapCk8S9QhhbMv9eD11bhHvLaxUN6GRuNTiXueVzvkDKWD5WvdTPbGM3uf3WWapaFPEhbkH",
  "key8": "2ph214pCrvaY2fVkmKnQRsHpL3tmd7J88v4zizrEQ7FcXZPfPd8zwYwaAR5TjGLrTKX6GjpjBMqh94pHUFBeG7s",
  "key9": "5EJ8DykMq8G5XzvW4j7axrbpWyRftzGw3Y7Mwunaign4eF616fT52gk9nZ8JVX18i6LLRaXWBVWCJwzYEe4g6Sp6",
  "key10": "5Je9thnzw2rxcNgaGFPPD6RTWErt7fyLEYC2JvHS1D6y1y96LfVHhWcz7xYsoujEkwF2mzH6LM2tUL2wwwH5iRRa",
  "key11": "42WFXZzkcThJfHa27Wq6FCLjxAcgDHd5DyafaJ3svzeZP5wtoyFw6zzoR7XGjqeWGwB9GZKnntGHZToSKsQwTkVP",
  "key12": "4XQcSv54Bq1spGJQbBDZoaVzdjg9Eug2uGVhFTNwbu6Q3G5yQmRtJekrs6a4UWC16t4Sm6EFj1HgSrmttnM2KdiX",
  "key13": "4sUXugr1DwJhvhYnhvKqRQQ5yeYZJ3bhFJM3Gp8cgkRdc9DScwYSMUVnN8GWX3Whomxgxn4AnZJ6fTgtX7CBQ73q",
  "key14": "2uiQw2m6renSFKQEAs6CBJC1P8VLGy81eKQtfwdiRixtKCNyjKu1MhdjfzNf2Mr9VNwwXQa29yPDusLXMahDkyM8",
  "key15": "2jqRibqui9hukhtadWkZfiCZF5LnQGAZzHfgNbu8FtxFJ6VfXExvAfSiHtSinGUpw352Kn7YBe2tdzQrzjLStnsQ",
  "key16": "3fGFoyrGkZTCVtAqDHmEvkLHf5wfaaJyxHuUrb6QnJDRfv537mfA2VNz7SK7oRHEeCwqVbG9WC3fmfSboYW9gbeh",
  "key17": "5v3dnSY5GPgzzFCH8JfzvNQd7AR7TuwMtv19cYyPWPk6tBpYf2iYBVyRuc3yQ6yKDBUBt2pSz9uvXGep5Yd4KXy2",
  "key18": "2Ssp5KN5PZ5dvw64VdE9heLZRUwfYwFkRPKU6uis3x9bEgSAQ8HJSr98AVYoF6WSs9M5MhnfyQk3dFLFhCcmjxBf",
  "key19": "4YPTLsgVXrm79LtRWLhNn6sozgbdzZBhiRQX82mUecTmRA211pDittwMFaR6StZfX3LdMykUN7kdDxEpLXudjfhU",
  "key20": "599V2beVdZw8Z3ksWPZDXLzVo4tNTqGWD2fBNR8ht2T2667dhJCua5Dnnva8VXH3je1zZkefnVY8LfZzchYUrVPU",
  "key21": "36mnpuwqxTV91mhX4YTxyGpxUKW2PozVBiCvgBB7A1RgktzcUSsLbosMW5vZFC7cpecDSUex2RjSYHBNm2FhpTES",
  "key22": "2Xazh3HvHgxvzR5Tyv4rJtRyx8rgbsyn53x2cSEzjsPm38jqprxU5Vnzt36RKTyvKeSt84dVjBwEA77SUhfSQu16",
  "key23": "4XtGLbfJ8ugF5pWTURUANdpCEKZmpMuLZon6W6QAtsSVwLGVnsgdn5Wf1QxNzn2uKRGCigLjtH1i1nrse4kZ4rH",
  "key24": "2Bq1Usueoz58PLWy7v17B2N6gqe4sg74MN8hmxs81CfTsuTAKqXUWnJqbMosJ9PZEjgxMjbPvhmYeH9NprFLCDL4",
  "key25": "3vWjwENE3EK91bfrkdaNhBqEaHrq2i8dWazjHTRh56vcmHioN4iGpQfMbhDjcMKArb1DSehYsPLuPQjJf14iLQsp",
  "key26": "52kq7Y86bhw6S1W641y3QaTk5MRhVrEF7bhwcJMhrnVJSvcCz3kuBDe8F3rdZoRZvmjftRqTrkjUT5tHj8imTJMu",
  "key27": "25AF17E3c8TWFxNguJBHEqFSgEKQJ7JivoGB7HPHavbQ96dRexvPkHej6XHd9Hog7oySk5GFvXidpUSZe2S6Hcex",
  "key28": "57g6zfouRwBEMoJt1gt7PuKCNZdoF93aoNEviebUPtkdzARxxyoZMoy4HD1wGuLgf8dRYLUhUvjL8oNRUDPzxe5r",
  "key29": "4T2gC2RYF8txoDyDnZt8SsfgwL913QTtmwk6LB8j42mAZqo7j8XUkFs4ciPPqeJMYZSvyLvwUX87dQC8ZYchb51h",
  "key30": "2nZj3oRCn7q4U9V6T7oPv5KeYCzBLYn414oUbdms8AwwenfaQVggWgzLG5xHJwMV3PLVDKQQSLWRBqZDSgJUy1KY",
  "key31": "2CvAbPYNAae4psZBRG2JqMi3icFdwvEfYaKVxpTZkXV3HGGnfGgFMDqPWzi1zT4uU3zwuzAZzuLB33SvQt8HkJM6",
  "key32": "3YbdobC8WUDTzLtAcvCAgvyPGLZqHQPAcbKsunQqWk4HtpFGT3ekDwqrsHR3yFadvorWvzDCEZqXV3A7zt9bY5gf",
  "key33": "441crnXmLEv2SrtLXJCgys6YtwbJxbaLor2ZwafAFf42qR2NoineSAYWwX8riUCZ3u3qaZxmPqZ6qe1wdwv6mWjD",
  "key34": "3b8VMTS1ZBNNNCNMWU4kkxGGCfidCZiERieSqKamRNNxpsJvSbCkpUT3LNFLoNGCQrP2ErSxpdQGpR4pXCKC43d3",
  "key35": "3VKbQCAoERmj8a5wVoGvT9fYGXK8Kq5wZ3QQQbVv6oVSNzYD2RKHn5Xv11cQRyycjNxkV5DBjTrEqkA5MMnNAiou",
  "key36": "xo3rLZ2ZsMgZuShSgNCN78onRSHmfQ9ETq5meZHDxZEbn1KFaUHnHfZ4KkAYtaoeUzSJv6DL7P6yLZa24NqtmGc",
  "key37": "2sG7H58iz14id72URKC1TLWPChDyiYSaoXRdvHaV7dJQiww1KUc7HdK6bnCSTREhNtaq9RJ95dLkSgBrHNGonzTJ",
  "key38": "3sqWPx1RPHK1LVhpoaVD4ZyK3nYvHeMp2juT7Lgi2ndQPVK98T8CNFkqgJqcQBYM3wWd8M6N6LwW5rbapq3H2pb2",
  "key39": "2ecJeK6TmLKG5rpFGM2jbSGQBwDkRtGnD3crjws4swKTmAkGfcfKTwbKC9TAmgi4r4WEhMxhYM6fo7zAkYQSPuxP",
  "key40": "3VDMLPDQ8qJWoptNRxkuC18ZEVAZwqo14PNXYwv8rqbGArEReQHVyBxc2yZqcVbRzht3UEhGKMfLbV3uNuAM2XT7",
  "key41": "3RTNkD2mR4k1ziMFrGkCga9aQhcZH7xQMQ2BrKwnGeR5JkD7Y13Xkbw2865ENry1NM7vQs9HuDEecLAFLHqFyyZr",
  "key42": "2R4m73yiL79bdSBCks7Qch7UEjZ7eQffcun2BQ4xgSSns6ciWvXeqXL6zzHRD3kEwPmhpo24mWyyjJouR4Fr8HaH",
  "key43": "5833v1BjAZfmy1rXj9Tb4YGQEzreezTom1RSCVomRFmbHs3L2cQPZc11RDiE7SGzGX9gDzAb88yxvrkK8j4U6sgT",
  "key44": "2UYknC9y22H7nkxEP3UjWnrrpzxSvCXwHdV5LSzSn9BEWGirc8Ra6ZxwRReGC2JLztbuafVacszKJZW1pDVkPXa2",
  "key45": "264Qnk9aJajtaug4LDvxStUiN4ubVEHtcHHaAU6jku7xHg7VkAxqoyBnh3eRpeg65PhUnKgpifiKfQF37SZNBGiv",
  "key46": "2hPejztsxVQedm2XuUc4aBbjDBr5Wc2dVCUoxnC1FytxXq7VZv3TD3nNq2mgn6HpZJ8FRgEQP9p5sTZvMRtTvEiZ",
  "key47": "32Vr2tAFEvKtpvgPc9ZAYKCjh3yf9iJ2189QpLrFju3b5hAznMZWRBdBaf3yV6gaATMvE3qpVnLS2oT38cxQbGLA",
  "key48": "27uzgVd3F25yPeUTQmTuUG6wcHoZmWrso3fHgYwACQXNJLeX7yA8HYc9apTnmNveDEPNCWv8V3RAGNHuGpeVvdzg",
  "key49": "CVdC3xdVkoRmGR2sJ7BC4UPzrnJctB9k2VQnUKHiSYUQLQ7AzMDJoRr3TEXFHYy2JtYR6fdFFoVEf36riEqwynp"
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
