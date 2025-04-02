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
    "6kdruyzQMktpgTqwaFMy8DVdCbBvmQnkFYGCctfSZXmtSRxbiSvCfrg6yFPDBe28HrBCQkPjK6fYmAYKaC5s4sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C1pcpRXtf2U6ehpuqqctjCGtxHsSeLaEzhuyeEhQbsEYxZYajQ6EkDax2zNA9WyCRJ2bhzBwGQvTSfJf8SnroDg",
  "key1": "4iNEd1wzf2C6cHaRd8rbYbrx4k97xqadjkXTefALx4CJsU6u5wg28k2Q1TH7gc9Wqw6ktmvQkCqStJBoXfE193Ra",
  "key2": "7RZTsT1bqms97RgVXzjDvo74LLfopwkBFmuGnam1dsVARvj1xN3xFeuMoLXfUJtEickNrenvpHVU3FRGG7v8yWN",
  "key3": "4X6QUxkNsDL2yfRbxjEHtz54T8LvM3Hp8C8mxjtigeTNvM77LYDJbgVrF39vj3BdHkJifm28evJ45mZ6utGh4kFf",
  "key4": "2TWkUiXdKeg76wqYRsmrSKw7Vdn9FixdkszLCGuQpkAsL7Wfxr3jxakpcqpwKTMis2gJqBMwRLTajrt1Co4CJvcz",
  "key5": "okwbp8kRPbk2QuMEP68pcNs6fLScYckHZLszo9LniSASxCmCx7cZt65tCcMsfJL2BQ1AK5ymY9JGL8TK6D3Qazp",
  "key6": "677pVBVGBrSrKcuwaAnEmeHFHNaZ2efRwr6vzxmFERgiCfp6LiachevZmgsV9LVaT1eWXCcQa591rZHDdfJZfAut",
  "key7": "4uVhtdVJvqaN3gdMGJbu3YBp3696iVF6r7n7SB7umb1ByYgWkFXfii9vYVAw7Tg91fXo3LSavm7aAhTaf8eX2Tqg",
  "key8": "3WxCrqx8APbDrXfFPCNckXRMgmWXTvVMQ2zEUztPf9Jo6SFfdQhftmjLbyLBWKFcBath862KBfCRfA5DGTM2Gxio",
  "key9": "rbbcRKNR5YCoUKvFfsTohv5RcVSWQjfAhzByvrZ85HneXReg5GDMdWRGnCVNZu39VHRGdLnRVAjJxiA5qoaJXJ5",
  "key10": "5mPhixrd2SxV35kHwaBmjbRQTLJskSghSpKj9t4Eag66HgEKAaW9us4MRurJsEMLsGe1NQUMpJ1w2nSkM7GSvKhv",
  "key11": "3RuvqYQchhdKmuyjPuFLXed23Qv71p38fPm9qx4vWoPxzD3K8hUvSjbmLSxfGbnrr3ySnHAk4qftLmY7vHLetVNC",
  "key12": "5czvf2YBV3NxE5qHfgKtFEq8tMWWwuLSmVTQgM32RwW6soGjzSKXrUyksnzNxS1d9Cs77xRLUdwS8TNJG98E9Pxc",
  "key13": "4iHHKbjRixMVfrHQxJAMSbgpLW72JAu9aWsyhGFi42RSm7cJ1GauPCWxvrqaLVKrqiUxkb9pwMucywGAqL9XC6WY",
  "key14": "yP69hzs3mgokeMettzW5bmErnihyUvzAiheoHDh8p6MoaJ7f5Wy5gBjaoQ2xRbMS2PhmmgxVNP9UBdpZAKLBXfg",
  "key15": "2VpnQaW4mJhkF4tsLitfFvQoPmwpYUTGekhQfaZ4jzGNB9firQ18yF1Bu4Hxdmq6MqUGQtJycGqpig5t22YpqX7x",
  "key16": "3boPYftk7U4Q9B2aDAU8mipbdfUNnrAK1Vze9bnxY4PS2RVw8SLXtCNaeBKdfHw5DbkPgbLnXzunPgDE1j6wA5Jk",
  "key17": "5uPHJ9HAsse8kN8jAUmTCkGbQ7tjB9cmAGzpeHSHJDQ7V1dprk8eqM5m3WHGrJLHwnqGDLNz5ybvCHUFB2FBggin",
  "key18": "2rgJoHUX7AqH1X745obBvvSQXJzpAqNscCS3qPwVw5Lhd6Zw1UmJooygrfY1frxJHftVh4LFip8JRccZGaZNRgVH",
  "key19": "4hJsjyVUtLov2xqYMJX5od1GgjJeqxjeczFDYE5VxxcHavDQUYDpBXZRPs6cewhrEuuCRXq6BK3rUiVcRdS8ZE8C",
  "key20": "5hFdnt18AqUtfPdP3oRRB7x63gcMuwXUWPiiCT69kdPUp7v2mReYPm1Ps6sfB4SA85LdYjsjyCHCURVWGpdb9nec",
  "key21": "sKic5JkDWqGZoXVJqcaVUAMgaFnyF7YtkeN1tcMo9C1CpRbNsj887S4ttV8LX2CRGVQiHJmXdhnj9UC9wL9zSum",
  "key22": "2VqQUunXChzfzGyEyBJS94khpNCp6gs2MPL2adwHdpAAizSvo5jjFwWtHMoQNcM8fHVLtkkfv78KoPxGp1xetRNP",
  "key23": "4W19oyhKsWGQnPwtEuvsxys6QaApiiSye9FEv5terjFPKcqyV2RQjoWyA9VabHyfc8cfDgmDzGVa7w64wkyVXw1T",
  "key24": "2dastZpAYXh19zbsSEGqYipvZSFcaJVLZL81Q5fxJMRzCdawsX9UJ8eo8vLgAvHerYBa4Yq7XVHDoSSALtAJ2WR2",
  "key25": "4oNd8rT9HCE5EApoivNVcTbUEgKbArt1PmTKJgiNyBbBu5BWvtD88knX9aaumNVC2Lbyz93sKvVvPU6c2J7EfMJr",
  "key26": "UitNN1UKom1rAmYAYPLWrCS2q5bq6ox6tKbBopcgZzPLLQL6xcmDdW6V6k5W31PeAUuGvtxmQYeEFhXLw7YDkuB",
  "key27": "2LLRpJNT9jd8gnStndGTHNhgHQ9XdwtHK21k2FhqPhZDa2GXKrDjbxGvo1vERGLCJ35harCU65hYFCqE6ZLR3piM",
  "key28": "4GMy52a9WAXMbLgJcTPeFmJMpB89R9Yr4aCF13fbzhW8iweKL4G1Xu1vKQkyaHi31KRK6HDZ5fd2WYQ6BWW2WdFH",
  "key29": "3vb6yhXUavhCi3hvkWXVxqXh4DLm4hVHFFwH7ESNKV1w6Vo1yoAddg88zRyQf3MTRxqpvPW1YRnyZ2a75RsAwwcN",
  "key30": "5z4fe5s9MF8eZqPMkGiLWw4obBB96ih9k5odwiU5iqAWUGnCTaysuCKdCb7aHfzWBpJ1UwGYdXdNm1B4jGB6CYEz",
  "key31": "Vw9q79jGHKkDbhq5KQ7Ejnca5wAirezsufTvpvQ1xgLqWDvSboc3xyRd56mf5mRbC7Fq3fbtX4BuzjEpN5fiVEY",
  "key32": "4WjMH1xRSX55jyXkeE4UoVvcXJRW8sGa57s4sUmqHGPBoUbDLovJkxCBkpXoLvx5QLE7WnUZDUPEoWXBzV763r7z",
  "key33": "45RPkSy7KapBXLoW9JKJkedvYH8W8ydwG6JH6PadLAWNMzQ6yehCDm49jzgPALoKh2UNo3uM7M5jvPCnfh9j9JYa",
  "key34": "3Z3aPFTnCu2Uo4zwbJo98XbDSgUMSbZRh6Kk7t4d9jh4eBAg8H5H3ycDKzZqX85RseAikJjfn2iHDcVPDrAS5iDx",
  "key35": "4zn6sTGZCDPLGEeLsujdBYLeW4dZRYs5epynzZ3k2xgoBoyLwLRaS8sBXw9jyrfUvkYCz7zww3Zc4w5wX8HHxq2y",
  "key36": "64Ac3gwDNKAUJV8icq7ntqr8zZj9FxBB5YQ19CVSjzvNKjtot8bj2rD1X5bRdgphmwZfo64Y9kUvA3YW6Q2QjYvG",
  "key37": "4bEz7ydF81geywsPwMQVFyARTBRdMQyr5HpTZdkJEyZuSYtVHEcHXTaW8FHDMbWd6HdHf9g1trSoStR5XgnTmjGN",
  "key38": "3apJZ8d625Yk3aKPrtKTXSVp4WtKaT76wi9cpzYMrL9iiviBTCqLvb82Ff3MkkzhfhtVGGijfqcKtxtKEUdLez2P",
  "key39": "5ZoBX7xq21g6D6vopxUfsZ6G5TinfQzU7U7V245XGqFL5i8UxTQ6ASe648YT4wBAV9XKdZH11FWUMV1Hsv1ZQy37",
  "key40": "4Wwa6U9cnGqXR5mZaDFjnCeDf8XRwEWXzpB478j7KXSitY5ZuWLWDfAv9RCEBQJbyBVSny8FVYiNuvUVCZqYsLDD",
  "key41": "2cupA2edUa8Tf7M35tc3qhqo9bHvjXPyYGoGN3zFYfsqVigxxWQpdBep2kvfe2LiPYpBs5EeMmv8tfMtZ7bDS6m2",
  "key42": "34o7Zn6ZuXbc9WQrhycHE8wUbUxnEXCztNAtRf3DnQc5P2pkhVHV5gak6sc2L7iEtRL6v3TypYntWB8LfrWMzgxi",
  "key43": "5PW7DaPghXNv4qMYA4tBNcmGZKsZs9raQYcq8eHisSkWtTs8L8phbLVcwmMzutmXCC9quwcWQmjgq8e1UfNnJ8xQ",
  "key44": "5UYL5FMfu8epYn4ErpzTzBKPDfEv3YAAiNU79JmhF8HCuTvhk8eBkVw5aaHnZrfaYAvt1DaCoum7TG9cnknASCWW",
  "key45": "76TaUWcnZByWSirXVWTBgYExZmDzBqa3aL6fdN6bsDo8WNUy55ymaA7ucHJ4LRmB4xHWTH5M2GSUp8Tgb2oAzHg",
  "key46": "4QuLhjiY2Hj1fyasLeS4oTWCfr7xzMaWbKwuh6ax5DCYdsAa2cdsrLXQ6AwPAr1Mtr6d2sn5bRDdKsgPpMbthm3C",
  "key47": "55wa1CcsYmec1F58QXNMyvZX8Dd2cxS4tBRz48ea1j5hktwrvWeR1RVAehnDv8DToNRhhWQTYd8zXM2qR57r7qjW"
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
