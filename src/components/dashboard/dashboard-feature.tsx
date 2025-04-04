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
    "VQhjAJjE7rNsCMHQBqtVT1HcfHAEDhEQycfFbXkrtHNRqw1WgdbunPnDrQUdacQtLugKEWzPdcjo3dpNUyyXp3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVuUeSwqZfTfbkhqTub715mupATh6PCeHrQwrAFusk1gQm2tKA51ouRTRt3tuPzFkawoexk4dx1WraEKMgHekzH",
  "key1": "4waiqaSmMvVMRHmNEVQhW3GJ8DdwDmtjoa7phrgcXNbEzLWeMMTJiNWRKQc4BPucC6s58i1m1EtYUVLfka8E3MbN",
  "key2": "5NcPRgPSC9GiK4W4Y4bGiwaYScH96hzeKSoUESJ6JwkgJoVyJM5HFd6TCcnTafkkou2rJA75BGgpRfpJRxZ1b32p",
  "key3": "4pRdzisejD8YrNUd2yRxmc5Ay3W3KBseYsN3oyeA9fC7ppqhavD5bpUmtDYVc6sHSU6FSL9S1gmMw18xyMSEWDjK",
  "key4": "2byASkJof1xCSrGp2iGHkuGiaxyFhsZUfmmmPrgQbTdfM1uPq1Qk7YSiGheJ3gj9PnW95tuCGLGdMgHd4gxRMRpR",
  "key5": "YefNzF9peNpBggEcwxXiDxRKkCX2GaCa7E8A21pZhQomvtS3swg2sV5hL9gjgRpnaESNDDz5VCdfpT6AjixUKpv",
  "key6": "4gZxBdsoGAxvWLeoQ4Dfk6qsKZv2jsu4S5dcm7LtvvRt9rsRooeiESXJLTQjen3vGVqDgUJAs1hS9wGa3dmsTREs",
  "key7": "57HEPUh1k1bU35GdayAapLaKMR54rnMWM5JtgRHL43wetyc9Zjyjq4WZbMYkpPm4cV4BhkifqDBskUbzeXHpy8wP",
  "key8": "4D8W1sd5hwWk5wZpPhTVYoTEyCjWL8Sxzbs8dLqN2ENKVi36RTbpPJyBB4Jid4LsdsHKFbaDgvCkoo7oNrFtAgjE",
  "key9": "3ZD9oaZqctT1hbjFdeigbZVkPBukcaTQ7jQtcBFguGNuir7bW2QJG2x6CBUaQFCkxTzyW15Tfx6977UrMri5cp5C",
  "key10": "3GdsuS9FY8AHWa32ZDRST3XpJe5h6Nj1VqqrwSJ8CYUHyaHiKqFfKTXrVR2qYzUpnCa34Kygs7gTAnvUKk82Zh9q",
  "key11": "3tuLvux8YhqxksoRD7fVS9r5TtLxzTGSFBjSQH8UZGFfwTwHkyVsGMGCKWSswNDmFjwdmxi9iyo1KSjT3BsJnmmW",
  "key12": "24RZ2zsRRfN3jSEr1UKRYFxyGmoGxaHVtZzkUCGQmWrcmiJaxcjemin8u1P7JU6ApnZ29N5tNyjJ8r5VwuMwsXUK",
  "key13": "2i6b8FiwPMLdF11fAyMx2EwvVzUkhy6iumZkKnstcemAZMD37RrvKsJXQc2EmYcf3BrVMVSe34FPcAJLqCy9HfTH",
  "key14": "2D8ofuWkMLxiTRDMQmrU1bjsucstbVXRXxC5NhBszaJWzZ54DgjvJScterngqp8vDLcPEesf1UsfDneWwxg7pGQf",
  "key15": "ooZ9XF5TtTKfi6YzRDJGVceFZMkquuFZHzPZg8KZQkg5smoMemmPLPP3oXipz327nJsJkZ5TRAkEzi29qCGNoZn",
  "key16": "3nXMVS4Xhdr6DTo5vGfR3nG9y2VyyjzwuC6nBSpbK4nS3ZZmX7j1KHVXvDtQWF8Toj3cBPQmGs3sZh2nArmrbsvc",
  "key17": "3ByrporXBENGcmuH1x4R7MLJifXh2RYG3ENFm8HJXhedjp9YG83De9rF3rvnBwFb8t65J3eYjoQhpRRoBFttg3N1",
  "key18": "5erdHSZUUuTvbqqjz786HhWspzMKCc2QqusqinDjKX9dRS3DiuLyfqNMxvg56AacokjF8DRnDzD8wm6mVFYvwST4",
  "key19": "4rR9MGxJvBKrfSxFyohwveoBFMs3zg4Sm8sf2mHM5dB91xrvSwinMRSxiYv7UtspW1jh88Ftx9vLhSF4Gj1zDQsg",
  "key20": "2c9RYPLxHzC47wtfu114JwW2ehhFrJUYpEMh8C6gtKWXh6FwXzwycUE48cvuLy6nXnNjjrnV2S2RF8pLrghdWRVr",
  "key21": "2DxbemC8FUNiXBhk7jauoN52eddiM5XbNfyxYq72rya9oKDm5GQoRobsAo6gSRLvpVGTnk1f7xSp4QEtffPNHBgD",
  "key22": "5vkPXfg2w49VEy32NJ8sKLhCxKjzkXXLxDY4WnDouaKavQ2ozfcmv6vmfE4Q3BHGMnSgtf6NdmJoUx1cvtnEA5a4",
  "key23": "f5yRKUofBZUXju77gSRA138nemgmQ6BE5q18ijbEPhBYFxj8jUDLudUPTMCiNTbx8AJUfVMXZ9PZYPemGKuPw7E",
  "key24": "5UtFxCst5bA1ErzBhDFNrrzgWA8nfkKRBMjUUgjrwGB3hh7HfsoK3C7C5CtRe6FVfqmFV8VyTKHFHdo8wbmjLyvS",
  "key25": "3Vx3tDTMrAPFNoQGSbkEAjHD9a5g2LJ1LyGvwBGBvMJvzVkj542cx893kGc3QXUS6xf9Ey1zPzpu8vB7NFEbwnp3",
  "key26": "3mo54X9QiUnyTFuRRi1XNM3mKAD1hJninrxCXF3iz3CrDsbefN2Fang8bLf2mBnP1ffkAixSNwKGR3aZoYBQm55A",
  "key27": "5nKFPDS1pJurMaoeoRru8MbNgqwfjkdkEtvxiPGacqvncdGkGnUEbekBZS7hLx1hP77bPFjaBsVPrz7ZkgTDwBrq",
  "key28": "4vgnb1pwyoGmUzMeeRhkarNbnPgLQLCYkEKvMYF9wwHfM9byBdp1VXB68txxZVYNL9ktspvD7WFTqe2XTSdXF9c3",
  "key29": "b13LsmUG8cjgDrmDGDAiTPmyFJDb7pHLs54KhRjf4K8MzqnUKUMpLokpFpngSBYD4NJvPeZGAtsukPCHkEKTede",
  "key30": "iecyQmaNFzy28T77WzQGDfi2hPEgyEaPmBzpxzbFZ3U3ywEnGwZio7kujGhbmKazhY6AiPB8BRuNuuTR4uGih2r",
  "key31": "34DPF5wCAvw5sokN1DPPKeNroZvMCEZk3vR9WQLTgPASo1UWsGUr8QqbhYYgv2SMoLpsuDDR11yswJVvgdsMPqVt",
  "key32": "vWbibNcvHDV4sU14Z5oaVxcKaDH78HMJw9ktR7zTnpfaxeTgSUtwskfpU6FCb2ybdXpkHKZ9NKtTAR6nUPJm8JY",
  "key33": "4HVsqC43PAkXZWJ8k8RphDv7CDgC2W5HQZ8UK6LqYkZ8YZJxrSzQNeFEkbMbJyN1wdBNWjKrAALZxTm8QtiRBFPH",
  "key34": "35NXwCBxyNSpeFTgswzGug7jDBVqXAGLbSE1L17ACEYh3YRpTqfajt6hEttUi4MdCyncgvgLRLWYnwHkvaJvyJMh",
  "key35": "5BaTkfRnPyHtMrQ8BdTXPz9eJcXFBPaZ34YP8iYApvwzw4vNJsVwS6xrgMbYgo79B2n9E4o1AzoJsTTJ69qELTs2",
  "key36": "384VDrFfrnk6ndr8Mji38JSh1WK13EH2p4bb6WNvbACQsDUJFPGC9VaDbsnTjo4rvWSQpNFdPuQXRufJ3Kx6LSQt",
  "key37": "477nJh6aTkxzm2Me9YfQXk3Q8HrR9SUCjN88KMwuFthhBLcmQQJUWPe9sNRFf5qnzERM4GXXWYVfGa1z99X9VrCg",
  "key38": "3AUEKUg6DjADD1pvJEt6MW4HH31BgDV4oj4e8xbuQ4JSEmfRjBV1ewE4tNa6Y1gQhZhsVC7pLuW7dZhm9LJFDuZx",
  "key39": "2m6aeJh7M5zpzjZT3xkJXcE9ypgqhQAbzfAU9ecKc1pk2gwy4qVDoKi9UD4pwTMKFsmcaCcmg6BjhH3aXt9fX8g9"
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
