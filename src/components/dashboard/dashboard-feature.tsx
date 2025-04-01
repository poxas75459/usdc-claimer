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
    "5UrHxFinMobG3gFzemKEA8NSa9GDTqNERbvPZx6vCpPBWL34E6Rr3gKbmuYZHZAsvhiqntxX1KMDLozue3RetRQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZJtuZHqVBmTV3QKDt1s93Undqg8jh8VV8hXUdWubrq4BCRNChLnAawt2XRckywzxnUtW1Ed837yK2cNGcjLu6Z",
  "key1": "2B4ZVAQpdn5sbuyDQhwuyfy3UxrfKGT1Are76uQ3YBrC8L3n8XFLbTJcj2moQ5aRv7SqQK2wAU2XfF4TUFEp85PY",
  "key2": "2FCFr3MUbEQt6m1hK4CLSh3W2zg46SacQX8i6waGsnPYMJbRHm2GreA6xZPGfCcfweyoAeisEKWAFCNGg7eXfNK8",
  "key3": "5PhLGfrb3BFuKdgHyaaZYyvo9xS8rjHBq4WD97X5qryvMwiYkBPXKEAEoG7FnqtRyStifsBsArdUZQGooEf9Cbhq",
  "key4": "4kUS7jq6E4a8kPg4EgHiGVU9iT3kuzp6TtL2Wy2WhDeWTwShwHeWZLKPYxn8VVKLDbCJd2NVo8bKMhNQbPLKqxh4",
  "key5": "4oeetd1NC8wWdKLJKHJe9rDBX7RhywS6VPTK2rCbXsFmfpLaRZ2WJ3GfpSU8PDcHxeqryZX569mXGcUfexx86fe",
  "key6": "4KLiUErP2pHLbfoqLSDRmkvYhJqnK16fy5wPWBcUwWpJLg37HPifM3uYD1AePCV2X1u4TwGqadBRGxj9fVkuvob5",
  "key7": "28LH9fKu3NZRJL5gSkRNdWkZF8RdqSgKdyNaJnSr3QQMmKP1U6CBZjhxxsBB9bNp3RMwSye9wA25Xz2JUYrco76M",
  "key8": "dWSVfxTrBSPoM5Wu2xou4hijDEmeBAKA8ucVmQRbsRqbjm5QqzrYPNYaxAhFQKJnq3FpiRp26ogJidyvek8yWqX",
  "key9": "3q4yG68Dt5UcbMbPZdXy2NkDwt8AMHLqp8CDtkfyVJnQj6Rb78B331kFAWgeRgP5uGUdaECpRKRrtC2ghyQ1xLWY",
  "key10": "3MAtSpdtanv7ztJYzCVkjEDQz1uwhxqeAjTC2UjPrjsBevkS3gRxMVEcCwLfcCxgr8qiPCGUpfiAZGwKDd93LpZY",
  "key11": "2z6fjdiQfcitiHvHqmQsdwPRieZ2f6mZkTU5TzyVkya1aDULUTFtNb9kef4cfkgDuAP57PimwcxiGeEVh2gjsZnP",
  "key12": "3UfK6XTyr34Uz9rZuoMPHcHSqdDGS7a711GzEmjZH1wMsWmpgKn7DjJ2ZSAEPgYeq9TLfJao8ke9kdb1NjxLd2ny",
  "key13": "BYjePwdpxawejJqnamf9NeNSHStwzBFnQ7PeZq1i9fUE74aAja5MKZ4JpuE1dND8F1K6toRnfbuTGYD6ERP5HkB",
  "key14": "325TuXK5TPaspX2kCPzG7qZSHkh1engPHqTKA15hyMQASdMmKCKWUv88hgeUhZkZL5hnGrAH9jobPrk176SzFbeT",
  "key15": "2w1ve2QhNp1UKJbNKkWWxVitQbnvWZGU4YydLPonNskEKpHWrDdp2s7fXjbhZnbCTyCD4cXriSzaijj16fFFQ2hX",
  "key16": "4NBajLf8ypYrKeorMn82uchbi222rvpUGumZu5iM21YCbgJkzbDQCmaEiUqk6eLa4tBxQDmpz1vLGLpCvHjg5HeR",
  "key17": "2kg6CvvNgDzt3QSoiYjswaafazixS8csA2PWwWgsvn1NS7c1PzVqSWn1i44Awuqy17W75mVkUdq16M7dCu2Mf7Ek",
  "key18": "4gASws8EEnzNhkUsTF7DNDVgHivSu9qrCWWuajVMqEB9VUYN2UdrFEsYJnFtD8e1CCnjoHyYqAxwPU3hU4Vrzn1a",
  "key19": "5pjxdbYFoqi3ixEVLfPD8kK8bt3tNSPcAFfbMRkuBNnywyCAoQGbrpdnRm2rNimZ8SBrBuewMUMhbYNS3siUUJgZ",
  "key20": "66cWAQJh6QsSbMUhqZDanYxjCbUPDVWrm2VqDdFLqHZv2UkMdpGE7cb2gMHJNMAS5aK44RD5vANCQAqRV7NZQ8Ma",
  "key21": "4TmTRhLBgjzpLeSfAwCz4DX6XZnpL4mP2zxmbDBJtx495ik21kbT9pFjcr8ZEYWfaPjJjbD4mLjguVg5UM72GRgm",
  "key22": "2VnuPMsHEtJAu62G1fjet4X1XJ2PLyDrfy2u4MpVgXA9TZASZA7yQDYdd5DMqPkmZAf2v86rDtqT292r8AvzLYJx",
  "key23": "2KWyudxsstoBYVGZyPnTCcMeCNUpcavfm62PbiUX3yS8xrfFL8m3xERj7rKaJCnGC5fdQX9g824j5e4Toz5GrLZu",
  "key24": "4GoTvD5YnS7YakknbhAyX4Zs2sWZNkJXvAQiYnTmKaSeF4gneyLM89wJZNQtNyQW2CN8ZUvUgZDD9xqey5zRXh5e",
  "key25": "2P7ED2qCvyWNLXGnHucRwYuPfjBJm55ndRCbfdPiRbgwUf7jof9ax6cn4yKBWCkpXmrpSKcMMpSNnQCHqD9kVFgH",
  "key26": "3DuVfkiPkqiWC2wU9215CiSmbVFY7vTSeeRD9VR71JfaQCam5PzX69hKRU5NiARzYR2EV2AdCYaRoieyqvvmicQY",
  "key27": "5LfEnF4FZtVrkmTGAH4Ks8ZNjcdjKFn99iqePA4YvivRb58aj4Z1h4hoWDME7941qecWWMCnDwVVQFSSGqWsFDie",
  "key28": "4FnQ9ScNWDHHyGMZyTNtTX4Hb4i5SUHS9NUP4FyWagdM8WFWfgN2vbPeskVhWUNTzAM9z33oLo4acd8vVCCkx1su",
  "key29": "28nmsc8S6EpLEXfLxQjyYk5qPQEsZUh4bRi1CXVwQaePqC43bW8hQJFbSibLDiGrwu2w9RhFh7Rc3ETH5Bzu6gwf",
  "key30": "5SCj2GTntbxB3dBEoQMcrKrixHstwkopKHRbrFspJBxm2jh2nJRun3JSDtXrNLYNYu14kuUJngF2y3eXxCiUoVEE",
  "key31": "4A2omDasRNsd6QirZewFE96imMTbPBKF4xBU3fLudE59nEN9meQEx5uK6f9mBvTsQfhCVEtZVjbJb7o5ttKULhpk",
  "key32": "2RVMFgzMvdF3VaviE9SKZwGCr84Mo919hJuns7Wq3KuEwwcVbEeLYVoUv4fYAyWba6rfeHaXnfnhubDBy3HVEGpN",
  "key33": "5QGTFZme2eDH2tzLmBKS76JweGvLjg5F83Pc4xLNEvNi69Du6bb5MgsoE8pAQxyzbPBWBddLLJY9HCoGYP4S3mHh",
  "key34": "NgTZxeZGgTKMLYVyTr6ryfDDhQD4DG1NYP8e7dscgUoEFCbxXeP9aWSjPX1K8NSeQSt767i8UxEd6SpBmNvK7mg",
  "key35": "5aCfqXFSwa8YHrCw391Rv6FCKHboebMQRMSntubXP2yyqfRJ6amNpqSb7zbveru3eey8v7NuByyRurWn81zsMvfu",
  "key36": "5oYrrQYhVXJNbLTCmV3njKdkpUU44mDdpzBPGY38oBSt5CqmmAnrr2kbaGm2bsMq8BnMmz1Pk676MKYgFF1nuJLV",
  "key37": "28XirF7uYrFwSKZMeG82MgwqrwPZShREJNMso7jBQcuJDsctX2ieh1a4Xqw5obtXc5cSo5Ggi1AszBCoMAdHPEtF",
  "key38": "5oEPg19UY23Gau9R1qFPzw3FVFnxNcNxfJr29jVamnCZ97pZjtp1LgeqbDz1zofWHGqNJitc7khduksJ5VwL5npD",
  "key39": "4PHZUSER3fH9arqzK6SUQYy8jsudSTrzsmmc6k31jqX7ki1JwPKr7fisWn3jPeFovKt1zTj2D4HBHPB6CQ4ozC3e",
  "key40": "4S6AT6LweRnRQyXKd7Bh7Yf6r8hGL7FPPRsmfjPZTFk4WAV3UKgtXupKRpvhcEBpddBF8xx4DRRtzKvqCB31rFNg",
  "key41": "3RJEdKV3ksSvZYqnfFBL6SghWijT2VpyRH1qe1Q1jhyM5GLMtcJn2n8cwwweJwduCMS5KJmoGQYwGYCwE78ZbcWo",
  "key42": "5xvYa4kAsqnQNsho77NCRJAtQa7e4ByCaZNRYQb42iENfkTK5ZgjzK9vLxZv31nN6ftQSxdnTzBV1Gn9Cg2QfdRe",
  "key43": "3uGAtChW8aXcFbRHChGkCPe2r63MxcxA4Yf7DuSCmNruqJb5RkQHqChnofQie8jcBk4W4j377Rtapke89KQqRHrh",
  "key44": "67BKcJ5JcM5V6Z4u2BRfLu6YASsHVk56a4io9Y4v3siVkVQYXMpgPKjS9tmuwsa85bB8GTUTi7cewTySgYmuTaYd",
  "key45": "58KJkPsHRWFeUzhpzV85bcx4gXdbkHjLLWNFhDGAV1faU5jNJzVWxMNBvhCncDXBmGsuDnN3Ef6UcTm4mdnQTRgk",
  "key46": "4a4DKR79jt7mZdSQZfsLgLn1P7kaZknJ4kEveXVPN9VqueNCuBqH8YG255vM69KTFY12vTgJ7KxRTJdbcnWFPaNy"
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
