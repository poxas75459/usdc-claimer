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
    "2YhrPwAczBhRxVex7o2RP6CV9FzegDPMCAgX7kmCkkj5xNcRmiwuVFVvJAYBWiFVdSYpuv9U8XWvTQZ41cTEb1so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qz6uhvCsvtvqdCJbLfoJHuheECV8x5BgGsuCVivCDmL8b2VsnFDaMeaJfCfP73hmcHyiKhqLanAcNbS5HtutVmv",
  "key1": "5unnvCBiYQ8pLzdKAqL6z2E6zjNRY6kpXMcPrUakKfmjFxD4786JN8vPEMkCjLRCzQE7uJJMmPerdixbmmQFqTZD",
  "key2": "ouXdDnSameSyMUpGJc4bJTG5GqXU1sYnrymp55ZmNWKcPaYSurnQBRhfmXZvDq9gy5ntWJ8ABNKN2Ux9AP6Qwza",
  "key3": "2AaTM5FAHAbd1JQRisQZV8gRdq5nRr8JA5EvEHuubXaCe9yZ8iwvttM2W1qNgLaVXYxYSywcddWPdYdeQjQYgVAp",
  "key4": "2n7qAtsCpHWvuhUzL7Vw81xZbZVEyATGRY8HAyNfVifNBRuZCRRgXmxCTJYySrV9XKDtWph3i2SXoHCXUufdnBA7",
  "key5": "qLux8qBX6mD4q3sYkWgBnZp51hoadgVNgT8cFBe7NAsGvhYnN9qu8TXZrMXWCuMopfs6U2fBKWmFkjVcWZfHPgD",
  "key6": "3GZbzmmDPe5jtjzfWUKnaEByFqcLnipcNLanrLPQ2tFDZXzvKWCxkae7WEYWZBzPZ9LkorZe8GrwcSvdQwoqYe9E",
  "key7": "RNkyzD6NutoAcZdj2jjnLtEkAYbcWFVpX8YeUJCNMHwdoDRHNgFLj8fhaWTmC7BYydLNQ9MEBX8XnZqBmXXK5KW",
  "key8": "UpSnsu8mBpbvm9YsY3jPm19A8g4isGow3YSGGPFj9RVcekaDDHEponS6WXuDC5Wji8QT9MRibYw1EAsLPkmGxtf",
  "key9": "2v4u7CsZ2souU3AVMxMAbtMMV9iXyVnDE623cspNnLasZqkEx1gswKG9ftWW7qLaexnXyX4vzSRUJxWA8YufJbpJ",
  "key10": "3RRub5BaEyDLi3ZpMXuYSLvjqAG9eLxT7eE8NTwfWfqs2Cuxr3Cf2uLSbDHELXzf3JxRhjcXxcBjD7QMTCV6RGpM",
  "key11": "2zTyjdRHosJAWCBAVSEVPhfBTPqTcZHV8FBYMbhHMqQ2YLLJBtC6S7ZbBk54AusYW3CmDkVFKbpyPTdPshd8bs5A",
  "key12": "5xMjc5hybJKUMXMyLK3CuYussYGopDWyYoEADD7UbBQLhYc8DSdHLwVn5zkmbK5Ab7GdPTw1S5YdpQknPwQZ6zrV",
  "key13": "E6F9feRU7iRaNCZCi6uVRnySQaTZ5ZcZ4f3R1XPZwtZ7cQ6KFWqkWJYkpecSGmNk5fSPQjgZVJtXAjcCVsTDnbD",
  "key14": "4Sn577hgmqRSZxxeguJyuD3LQryVjS7X4GytayZq3pzWhPUQFffAH7YqLYbm8fNQv1pCyYPwR1t5iTDtAc6WhuL8",
  "key15": "5V6PkJUGaFCAwBJhweYM5pAmaJHDen9fNmPrg8fDUKzNhZqrFSwwLefk1VxK83gKXhE2AVoqvDv98L8ftYhfQAzY",
  "key16": "4Ppi4tUGaTS6x2fdYvtC4wcuae8vBu7CWek2RnVWpJh2RxFa4iYuNkRHuo6r3qWyS3L8W8sAoCCHg62xaXTvhuQ9",
  "key17": "4K6RSg7U4yNzsjsaNXGGayKNGoU2Xb9AReeTpUwXmEA92o1Jmc6vKjMpeBxFDoNr9QTDjgQ6ekTP7rTfGf7RdgF4",
  "key18": "3ZksjSPGTrhaUhwSonyrE57uWqT25GkHRmThhSgUDp1A7rPEuB6pxsMpPsrNwDCVnVdiHd43TMJze7FnumdrsuQm",
  "key19": "5WPXTX9RTqjrekkKMJ9S2D1kQEu2sxvN3NUCSKuHtYT7souhwrzeMZWJHt1s7BA27taPea9nSmjCJoNrZbeUop1j",
  "key20": "4CVHUkBo4FxH2MgMUabfQ15ZM4f8dGiFwr6ipLqu3aYHYu2qCsz95Ho6rDzFwQLdXCL2NJgxDwDPNiDnNkwiPgHk",
  "key21": "5ZmgQUTE2uyUxZegZ6VgDSjnNc9kM88zBWvGbfpsyRqRdqKzc6aXTWjY3mjyCchXVDg67pK9kesxgGTUiASPLTMj",
  "key22": "2zwG5FmERZQheFTDpo1gStJqCjRsvZKpSZ4ZRCEFz4yoQQu5MdvAPa75hSKcXpyjR8uzu5CBNEywpLyZTQRfWW2P",
  "key23": "5v3TANmFT1uuHzXYX99eS4T8Eu3vA9nuMbRRwmcMUpg1TohZ4muVo99cE45C9Sa6KhL85gYT57UFbWKaLd1aKXWZ",
  "key24": "2VoYoG8jS8WFnG4QrGpHxFUxS6uBkD3QvQkBhtnyNMe2grvxRqcEdotD2fSj9xFjbAbJgDHt2QC5eFGx9taE4GXM",
  "key25": "3bpR2P2PbFYfULkBECHyLAKqXqTywbtGFXCx5ANeRykXmeHqHQFCm1gb6wgHpE8ztUghKBM7bC2mpGgRVGvo8hxa",
  "key26": "24jAj9eZ5RuvjGhZ6YBdMYUg7iaQd762Ma1ZMfddk6W7VC7g2ZRLMcU6hhAAiE1H1P19ZxJzAUuzQ9aeqCx5G1Uy",
  "key27": "29dVA6GW35FYLD7tkxb1DoNuhjjVyTvsDQvsXwsePmVkgesScEeuKFdRbExmEvtrhh1qzYCoFmu6pbVJa4BiSQws",
  "key28": "2hbHD1kCpqmZ2rKhs5ZFT99WEvnxT5W2Tki2QpQm8MfWzZC2pQnWvgoL6bvFJdH4MaA2s4g4RUvKmsSiyeoUFVSB",
  "key29": "329XaWkUry5UKvTJXejHZLLaStyNy5ou4h4PPXRn5oDNRTeryFq6EpgDgQaYMKz6RXtGUeNDaiUWEPkfZFYsUHE4",
  "key30": "pKzdUgrCL8pWCWXMCnEJT6wrMz58Hsnec9W1wNDquFofr5dr9QMr769JGKX6jvyVFzS48aKRvq7fyFQUcaxGKQF",
  "key31": "5nciXvu5TCqhedx48D4mfmCCSVWUnoxThr4euhH7oLmeyuteUxaUb5VJzp656gCJVTAjikDsmfn4xkRm1dHo2wMi",
  "key32": "2uEzTAb6dkJo2vffhrXihnmJn84xfuFu55hEKLez5Ct4C1X1MoFXB7grigRUpcDa6CxpJLsfsjJ1psUnivR5JScC",
  "key33": "NWLRY347RTbCbR1yU57fmTuY2PrMyWngp8tGpXWG2oG6msatdWjrq8zDjFcBm8oS7GtzkBKo7qR43wBvPWoUMJa",
  "key34": "3do72GyQDua7kg2VXPLmpkff8kKkbfLAxurh75TGHMhx3UqA8shh2XTRA25pqDECgyZT6dRCKaCmJRkxbEBSvMTE",
  "key35": "6WSKaS87YQ9bhPGDQj7tCcgCTcqW3RoVyytTuM9R2aucw1Tt3Y6VZsxExJAZUKQos1sbvwWPvi8CNZ7qm2x6eTd",
  "key36": "TaMB2kuxHw9iQPx1MW4v5mfp4BhgcPWphXrkFriKSzaLYcNMiPHEW3SF3SS6YeqWCHu3ZGwmFgAGLxsUNqf4BUn",
  "key37": "3GsVyDtib6m252yzW99FywHTDCFYbBZvHRCNH4amtnuNY7QJdCUcFguwRsTL5RYTqY3y45mdjnyDSQBW7BQb5h25",
  "key38": "51oZcZBV6VHtPyq9K9woCEEER29DLYkKxrCGKzB2wk8Nm19cM4o6P3QLU61d4YKAaZHu4cHAjhWKADCSee3cPCy8",
  "key39": "2ScjsddeyK6s3dGJbt15A6PHmzBYsXK9uNrGgHHwBbopWvtA8gHrmeS8DfQw3creKPtVn8cvbEbtZD3Da5VyKUV2",
  "key40": "3FFA8KahSyiSrJHHRaQNsDqhe2k6yV9M8LCCxcJ4zAKg9fZTmnrN8Tn88HSaZJdA3bNDE45dszR91a4QjjrPt2F3",
  "key41": "pTbASQrJ5mwykAKvaGYSCWjCEGcHViTUt4yRdAp82w28c1XY69xTbV23Y26TTcEHR3k2qKP5cZnh9tEQHS4AVuV",
  "key42": "3DKbo4g22sRPkqPfqNgt8wHwKHEUpDzEMeqyFCkj2MUeQspXzEqsrAvd9w1faJwk1SYkBr827s9f2jk3G7XUbVn1",
  "key43": "5V7NAsAF6jC5qfoF4F9TipypCN3jr8nFk8pKVxMFs6cs9zdwaB2icnBb4RM7W7xaHggao9NGhT4gPbpChdAq7JN3",
  "key44": "wQ9kjWYQnFR3FM6zosYAqsEb1wYQbx1FRDV722ze1NjEp9JaysVdee6Xhw89btvDhKj2eqkLdcMeSwuMvwiimCG",
  "key45": "52zqWyswmiuPGBKMeG2zSoExx7zGhfmfCRrNRSXc8HgnvbX5q2BhtQmcs67LEKwxj3xm7tV7qfpCV9evPJ4dognG",
  "key46": "4juBdP4qZMaiQTVdW2HB277PLvG4s4gU5Y6j7bJuYPv3H18H7nTFNab8McCuh8RKJRVJU3razQxzjWtnGaUPm9kU",
  "key47": "51oLo4metmAGUfGZiQ3j4gM1rcWPSQXufE3NkNuKQ5XUCbKbG1ayFey3KZWQMzaQYcbLzZXMoC8wPKkDq3FTzEGJ",
  "key48": "4YWByJf5wFyM7PNKL2S6mgr8YqnY4DUSTaF1Zif3z4yKy8tV5WRdZn3a19inyk6DN9mWHtmMcNFV5qUCkBbtcBk"
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
