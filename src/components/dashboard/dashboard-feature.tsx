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
    "5tGLUw3WuUt8qD6pQQNjws9ikGRT4nYsmFAdUxPSkdvTSWaLubsLdEAev5ExB17B7Y9Btvb7UKKZN14D6P9b145d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvfttKRn8AC9aXDf4koNQmqrfdPmccJLzZVZAveFcs77fgnpiea5RCQiiWU6ThtTbivbYbw4S9QZKnNanQd2qBD",
  "key1": "2Kj62h8eRhP9BizDg8qdh6kid9XjsfUUmgYHdXXorRD2BKTN97xbsSvnF9BfN5egamtrHyex4szeWMCY2XLKVunX",
  "key2": "6mdjuWqiN9vSpXZjTyFcMEXFEsLTNhxtsMbQUV8mM9Sg57LpR4Qd4VZECNVWi1Vev2nFLQbRH3E5NgSB5PUkebL",
  "key3": "5sVcozcouZfjEyiSBg2S1NPaBg4XmpdXDTvx6hj2YYnFmRCL5QCTsZDREDz1k6xHeToCoWJNakJpgNtvTWjaLFow",
  "key4": "5p9TNf7VVB3NbNJWjfi1pi8Kxw5RmsgoSnsdZ1VweJKMJjVxMfX3LyVdj5NC4zSpd9aixx5G9YQXsSjDEfPFfhEw",
  "key5": "4YTKXUZkYjXFzJoGMTWpZoHsfGSvVXEoi9fMnbNTrPog4Vdb8i2EgMMYXTkecPuHZmLfNvLxEq7W965RMg5jb22j",
  "key6": "2zNdMaFzhhNbsdDFvpemUkMxGo5yWe3hZY8HGUpKzy7Tn5zg4DDzRnh9br6VTeUrLbs3hzwk1qojYTwxnUgzchQN",
  "key7": "y1RAVDYJxXxnjM6SMJGMDC1L6PbkMwNoRd8VvhCgeuphdUjNu7XDhaAfdX9CCLSrMGTLeqafHVd5kKNzEZNnJJA",
  "key8": "5BjT8NoutqL4vYRGpnf8PZs4GHPABoQVSDtqdeBht411rW6hd4eUeS3tF1E7STkjUQZHAb76iv7zQs7TYmKE246x",
  "key9": "5Zxvtq7MSSWCyyMvMspD2VyduS6JMDYamsVTbywezPSAGS1PiGr7mRBDeS2khtmJk6vusqWQpAJpoYAHUjomDQEZ",
  "key10": "6bSgkfCA3f1rGJFQfugXTc2WQnTk6tMonMU4muqL43xUAefGiGa6Si5MXCuwKZCjYDv5hGwrhDBAKySyrQb8n56",
  "key11": "4xmgasrcPQBuzZkFEinxbaaM9qs39gQFEtbnvYzfeCTAJPPU8EsAm2pMwsG8hfUJfpgmEox1x4dtFurv25QbEqNB",
  "key12": "5kVi937kXBwx45w6mu3Vc4kvHuhfAtjLzKVtWDbbjQPHxg47ipCWGpU8dh2ZriAdx7zavU7j1XGBZsy8TyjudphH",
  "key13": "3qWwjGnjNGd1HNNJq5xz6hHJezsMLSN3VA7D2ujQFzW3J3hS4vPZvou73YLmfbTsRVeYThQA369c5PyuwmRnjrvq",
  "key14": "3UNZEyk1TDT86Dv69v6DFinw8e4GVpFUcJGPBUC9x9nrsG1nnywJdW6gYfQcbRj6w4zUxfoECd2Jo5j2TA1RVPvJ",
  "key15": "4JLG7QUZHBKbwXvAk4i8qYZCib4K4jBGNeAAgb9o7dcKZnqwCA18mUmiGYw7gCjG2jFD4Ey7XNBdhpCiVQNg8bVE",
  "key16": "3mLoNfiJP6413oTWmYZS9b1U7MtLp7p9n6EuVS63cbP2ALtcwVVLcvfr8vGQzVsDrV5kAXrKuriEesUtapoMLM1S",
  "key17": "4G4LVmfhB97ELExCWq6DpgwdWYcPUCY7ZkETcAEwPxad5yyy4K54V4skyvLYaez9qYYZSL1sUJj4eYxVGQntNKXu",
  "key18": "5me6wxJbuaCooRVupWbnir1z9w3itypQEyjshWpQ7fqRry1nW5CUsKcwx3brfrANz4a5UxM3dWv1ghS4HEjoLdb8",
  "key19": "2X98fqQDQrg1XRCnM2vQB2yLUJgxKaKVjvq9qgnTTMKTeo5JoWTm7KXZa67dJihBEyxPEmH6AA78cQLib5h6bBAn",
  "key20": "4hHQXsd3UQxC2GC4Sxer5d8ESrGLDHu5AFSDq12Nhmb6U2BAKA6MEYt4KgGo5EwU8okLx8pMRNjyyhCnU54rcCeA",
  "key21": "2xYbF4ggPY84iJ8QJQMU6icdu4o8mLGScU5taxMthN47uf6vEWJsS8hexFVtCK84Y8q6MqEjuViXKbRJNT7MKRkg",
  "key22": "VtCX6nZ3HFYXYtJdPBhGnyareh2UkdFbeZKQxuEyku9kuN3Jx2L63AebtMKMSUuabc8rvXG4GTtBK87r6xCcwei",
  "key23": "4F32CT1rUKca73mzMbwFy3t6rSv4PJctdwhJ581RNSHF4y3xjTQLC9FUhZU8oBncCfPeQKASC1vPN4VcCeh4mL7M",
  "key24": "3wFq4nkFhcAGTq34C24A5giR9AiY516QCjPFvSbp559TQPLNriGu8mUjprEhbisdqsPaZdud26VVxE2CnTVuEEMx",
  "key25": "c6Gwq9ajzeucGJaFxPbEpyXcKReioaQ5QU3EoY5WxreKA8tVo46wGJRZS3XeoaodERZBLQ44E18LZqWsEbLQAWm",
  "key26": "t5LNQxGCB1FmP2JZdRuGexxoGLJxCZX9DHKouw7gNd1CVrK1Rp8jRJFNSuT6oo4354BEkCwAxNku7j4Wkk7rkGf",
  "key27": "4MtMd3y13uxa3K2SD9gAcf3MHKKPkGD4fMzgB6yPot5znAF5LqxdVaYi3MTg8xChWeXH511NxjDRvHfPup9V5SMJ",
  "key28": "sxwcKSG7fegXsfosd9zXf6Cyot4n9CZhNuUnzLuMkyYbEXe8pCrJsEvEPKoBFCa8YptG8i7kardggZMpymXepa7",
  "key29": "4yhnAtoWsAhXwNrAs15CkDcbis7PqbwEDJ62VN8WB21pW9jMJGExcrqfXCU2tBEAfEYwgwj1193DBp11CLskS5mw",
  "key30": "T4v1Cymq3qBtWbR2fcGPw9oxD3eiDuD3ncxEFx5uk5pWTQwUWBvtTGZzWPE9Zx6xw1mKaogFfL283bUVnzTeG9P",
  "key31": "2eqLf4P9DjfFcaUH7gXy3FpskhfDvhLv63LgGNwKNVa3d94yRgmYN9Wo84QiQ3vmb5uYGBGZ3moL39waPVKd7CLN",
  "key32": "2ziJLLETftrXWTCcPKjZDtuKMwMozRbpoGztWAsbVfy5eUf7gBGPjctPeFkoU1nBeh8iuVXF1q7hwzk5VKvSRJdH",
  "key33": "3AWAcH9GYFvA4PcWB5h2t377r9KRu8riwWqLd7mKRkCJnvtrwLkViNTcPKtzUhhEdN71zn1B9Nv1i9JeZU9kfWNa",
  "key34": "4hHtSMALHFPEFhZhNSJGNc2cTUSxZUn7nP1EYRr6R6Tz3eKUUPG7JCgAwKFfMp1HgS2CsLtZ4Ye4NSDmdJxRpEJa",
  "key35": "4rbebehUDDHRyyps2VpK3gLGgRpEzPvdEzVJ1MKkr52tAh1dnnuVBQHrSncsvCZtEqY3Xrot4312N9ghZSvRBRMs",
  "key36": "2bTPZEdCr87CWCMgUAkLxeRaLPAxdRRn2Rf82D4Lh4wvRgr8KhXUUMM95fqVf3k4Qs5Z1whcFURHxEsukMNMLtsC",
  "key37": "5gxEE8ywBbBHKajZhS7aNKb3gDYwnYGUvTWf2yTapY1GFJwH4tTbcvPmTYFqYUQAEstD9GYsoVfCY1KCEouM1pE7",
  "key38": "4h8zUD2ftoUnPHvZ94x6PNMs9D1oWYNqPSg5Tz1hW2Aq9gZYWHYS5EpP2nV7cyXwr6ffxqgpnw13Zcb72deTU5Af",
  "key39": "4WWxqTEkkPbPXaA3qtR93uGuH13HcWK9Xu19NMRkyYkNGP4oDmGo9KkGsc563saUAAm4AakLxpgjuvVk9g5UGdLF",
  "key40": "22G3fBbvWqFNQx5DwnAdoYwq3q6xug3pCx1yrkdHZ1PNw2QTvbSoKuaZT5ZTXRVyNEc2jsTjJKb52fbcAWxWoZ3y",
  "key41": "5N9YhiYb3bprQX6ThPs7No1aBmEnKwLeeyuC4mjNeBQ9qPFgMPEEUkTUVCENPxuv8c3JAdWX4khDA8cS1CrnjJPG",
  "key42": "475iPJyh7UWtmSb2QhvQxf4EHJCdCLkTXAjjuar9sBDpJyAsPneKd8s3YNYvP8HaRx2Gog7FpcWhHr1RN3cL4MHN",
  "key43": "3A3uxzWyPxkP1zpqoscKEoLKnHCEPPA9Fe6Pbz1MVP2jRwcBh7KuTHJ2jkFhcoFCspfnQUn9tukCqQ5W3bM9S4Mt",
  "key44": "27reGm7Gymgf6NWSLwvgQqLp3ahPU6fpHcvSkGUnDDBSn1Bv3TgrbomrB2FvyesoLHQZRbWURksCpg1AUcCY4Jss",
  "key45": "5Dqysj4HfUtMRLLhYJPWro4Rg7HBZ5Gy2KUNdr3q9fFbACS4hsB33fwXWhFi5NHb4wcv12Gqu9TLLsuobpQ6qqzm"
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
