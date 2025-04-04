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
    "2zsQcNFuPBLyPUBJYVT9ykHD3ybyDvK5xdzM8ujGoagzmce9hdu4gVEmj8z9ZtDmPYnWYSVSMCJA3cpa3jF5nauS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFJHnHpGPxEo6c2vweoU3FctPFh4UVocBP16VJ8ph6k6K4dKSDPySNXRnZDLbA2h8E6vFCtornxdCQyoapULhxa",
  "key1": "2pSAsFTRVVAZto7pPqnAUjKYopQN355HA8qHd7yo6UvS1wH7oitJQwmZHrXG189b2h7wEoMqLRW3fzNarthsgiY8",
  "key2": "5CWWhwRHhG6wzz2wYc7scwiKh3yRiR5bzFtCQZu94t5mHdibdQkJzpodnBfCFBR6zrd1L3L1n8NDF2bc6rwaWFuD",
  "key3": "aQKvt7PeEmgVQuZrgBpW6GJnxNqzDMqZ73mrxa7U2rBjjyeoTFuZfoBH9thmgeLEBsY9oauCVjmwiz16YVXPNyV",
  "key4": "4yNynndPgBQM9jqT3mPFeoDRLhZwL2Xu2C2HT9bsTMkWLQPwsBCXPTYftwg52buJcPStuJG6XMcFwWmox5DGS93v",
  "key5": "NwXhbZ2bmNe2GH1EvjoAp638qxhkiiEr4DsY164b4dh1BLWkCsExkRop9Vguf8gMWSA2WNoCTQfqULuetxLYU33",
  "key6": "5PXDVcka1q8LQmm21NQK8AfjdWKEJazp6wzjin1KKy4kQg6noXvkzSGQLqWwd6Att8eqbjaZCYL467p3k1Qe8tVh",
  "key7": "4oEHcDMbtyjU6CZrmE3AqT5UV6TmeCMVo9bJKWmWrw45QRgrX4WHao75WvrQjpYWRvua48ZNvcEXgnwhttbS7S9F",
  "key8": "2KuSFQzkaQfZtRTPmJV9K54tkUHw4rM34AMLqoY73k11rTDr5NXHkbsdohvjXLWCH2xS6qMZeQHqmQLHyVPoMmBS",
  "key9": "c3PJTaLp5HJzUTp5tK35mfeSxQW6eL8fh8JUnNzo8typHhguv4pWgB3xznRqSjp12UvWYbZg9DHRbZsbUjs1Vvx",
  "key10": "3eox3NT9n6Hq3Yekpkc2zHkpRNw31qwBbNFaEXJCkSV14tBfkTRSP1Z5gbTstkdNaoVVf4eRXz68GvJyrTFJHc88",
  "key11": "5QdiurzqnTgznryxs5GrQwLYfo2G253YjhuUKefF5Qvvrs31zhfGtzPkVfcKCh3pWDA5ypM5mv8J5zqosyqFjaMj",
  "key12": "WuUynjtt9BnJLRPsQunUGBb3dS5QUn8UD6z6Jr5grWfiJNMW8fZfu4xD4JodVq2M9aLADSLgwesUm1ksYqnvgVy",
  "key13": "5DwZRCH51qBsW5e8sHEBuzn2Q2oFpiUzhHQfoTYaLYWpmH3CfnaydJfowk394KxMDmnD2Q2U8BRy18me8JCUyEmS",
  "key14": "5kzyaLYZU4MFZeMMLex5bNqSqMHekPsK1BwB7PeCFv3ExcZtNSEg1hcXPiSqTYeBsDrvhXpMCBxL7JNvt1E7ATzS",
  "key15": "3hWuJ7auWub54s4Hd3NCnA4KQiogxvPQ5fcqnLQW9KoYvu5yzkaFE8qFGdASAkBCTBeu5PtBVgbRjftDzpBHQbZb",
  "key16": "5SFFMskdA2NtCPG9wsejRBhEzqCvrsvT7kiPe2KLmRLaf4saaLNPSQADfDPYnErJc2ANanV9rFUwUpo3tWGTBd21",
  "key17": "36bioLUNm74PjeGRQGUCkiAFXsVNVc7tF7qVNihFnF8F8Gy8adsUmeUmz1Tkodn84VtJQuRTjMbFq6X3eGZXXt9q",
  "key18": "2WATpQLLYDoNXfU1m3X4DqpdWXwyG7jUVWemAUEPhwfGm43Pm7ZknhDGVc9THA92tFCtmRLwxNKdC1fjtRN7Qxti",
  "key19": "63W9wqm2tk38kfKU3eVxXaeMrpfZffZ5P8KJzmpvN8SyKZpwRU7gxj3pgt3cFjPKSfMfxEJZAw8qkJhQnNNhbHhX",
  "key20": "jeeaqRPos5Pe2PTUBgZW5FMGAnJdPofYageqLg5yxRttrcqCTt4m5Lm8Q974Xjd89uDEq4jM52tnfPbwKw6qA6Y",
  "key21": "3Z7ftUFRqy4XSScMqYUteyp9HEePJNPf5SAsHLXrcu1wh2PbA1baFmA13dcu3Xy36XxwManT4GsdGMYPPW77Pj6B",
  "key22": "5bL42vCkUrkJXZoJceKfirQ137tzhzmDRvrkxzfK4QS4TNvnKGWtpZzxeYiUQiDnLLEytK9CgGNrvMsoM3GT6fSx",
  "key23": "31XXrWEpdkmHj9YFXqHbJo3KCGyeR95tBvHENnMRLCVTYaQogzhRenkUh3FzeG7Fbae65VSMfU6h7btgFcMEj8gH",
  "key24": "KxbSbJfGd3YCCLj7SdT4xihYcMpTq8oRyRPWLk4mYA7UqRhiDmbLjVgqTDC7CiZXmkKXv6Gpezci3awf8SvfyQs",
  "key25": "3zSS1cDWUSRbzWTysyQbR5zpqER51DPR8e3J5Wk12759w1bQm2XneG8VbukaGuvHDwVEmb64DVMGFkJJ9Cs3CLrN",
  "key26": "5MVkVooSwEEhsr3Xo9S8NY7Ki3WGnStq4bgutoSrA5TkZgNCiiCy36z2mDCMEkeuv7YLN5BimKW2ZcxC54YwJspo",
  "key27": "2kysKTXtgRsn9nGbgK87NnM18ktBUtyQLcPKD5qE48HwQASZC7wQm9ezkrgTVFAirHb614FowD4BvW45akVwcPHv",
  "key28": "4ukEThEtMAzPTo6ocLmxQjZVChakyeeUftSAKV8n4gzovB5B1VHNMCHeAxFPBb9YvZnMxHhNuRwBN3kU58hwtFUN",
  "key29": "4jf1ef3J2gD1i8yMURtcnaLUnWwySpkfZmRGLVakthbfAG4EF5nNxEkZRBvyM9d4uYGBHkSZBYocstwwWVoRxUN1",
  "key30": "4WWERQ9fZrmACGL7WffxhuvCAkKFb6Ezo9Xrn5chLGrrXuyyyDbQCzDCKu9qES7GEVAo7XCXLdN87ZSh9onYifMc",
  "key31": "2arwStePDChLJPqx4gkBQGM5rmqKuKqaYNZQLo2QGNxVdUBELcNpStFDf6beCtjGGRd76k3vTTFLmexwuJbBu7gJ",
  "key32": "5evQ7Jp9a45GHYhBMmv587JArbEdWjhpMXBsd3rvwZSujyUnf7q51HD96LvxeG8sHqCR7RVALN9y2n5rdjgYzL62",
  "key33": "ptYpJNRdgxjC9AJFTTHnE43ZT1dbmdFGSdQB1DuN5XQcGdHcXPANgwoNgJ6vMx6aoVCsWsCf4UG4Ja7j7jD1XxB",
  "key34": "4PzEcxmiq3eLmzUjsuMqoYjKGswrh9c1WbPzZZEBoCouU8Wgmbd6PUQtvAcZZX64WWvCPwGMzK7CAo7WwgFTuA1u",
  "key35": "3KD2uV5uPDWhGrmkvKEzJSoCV5QKkkbk8qgMv4UEwJS4Qqjsg8hVTnx6MjRTKa6kYsoWA71ASF6jYf72wMS39p8k",
  "key36": "3UVM1guKqzC4Tfeq6WxYT2Wry7Tqj2dBEsfG6trJpC7nWTemJoAUe2LLv9RfJNvcedQDUnL8aAA3M4LBz382hxhG",
  "key37": "2993MhhzcvSu2x96tXDQ7uu7finmaRQE1gYN9pBFszNCiRWGLyztfL6RWuTcVfRcEFH5qKHSekmNWBvYW6sVVLP7",
  "key38": "58VgqqPqSDm6FvsqRUy3BtMFn8YsuCt4RS5cf3uh6BtSGWBfzoGm4zEYPHrjxvBxkZ6URrJBbAGjpGJgvgAp6k74",
  "key39": "2DBGmvY4awGBF8PLeGQrUGi3nLnZ4mNiE7t4aYFXaGvjMHXCxtPyYXAyT9AfbxDRduhpRUXh5K7g7eR3aFn9uxQE",
  "key40": "fRZJ91JSEGmV1iuxiMbzxJ4yvPMoUtVxvcxsC6UrAgg2pioQQBPKfe28a4YCkm6ad7VrfUPeZViS43KaVCExfG8",
  "key41": "62WTWxqa2brnSNKESEAtgZSaVuwrEYUV3MdN94DR9zGA6MJE4Qntgg1kU6Uv5k6jHWTAnyp1c4gmVsLjBmAJDCAW",
  "key42": "3Yn2HFQx2LYeK7e9hAfsSBTb2fL2gYmBFb5vfzNKiS4dfrZemvtTySFr5Cmioafq21VFTX3HCdEwvt2kdKrbnHC7",
  "key43": "qyXyJZmdAfnfPtZigzHNqwfsm1rBzJXRTEZ18kdhwyWtgVaKRKMZ75TK2Qgni4uhTvoQ9D1mrQbXcqZ7ZB423xK",
  "key44": "5F31MK3qh9d5cyJ1nfuDyMYT8h3EzZgo22dGB2iEMsoo9zTA3qgpbDHuLtGz7JtsRtf8hsrajazFoQ716A6uR2ni",
  "key45": "4LbbsG4Tc43J92edYaFWwvwDnhELi6k2upqpSaamrfAiqeNVQM2LKb2VXnMJ3d9yewM6kzYL8bK4XxdTWBaCpbnh",
  "key46": "4tLTqdyKoYcoMLbqUCUm9tay3jfrYEz2wR1Q9zsesc562LqXPujep6rxF4xNadcYuRUTrcJ3yV57LrR5MvjdR5kn"
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
