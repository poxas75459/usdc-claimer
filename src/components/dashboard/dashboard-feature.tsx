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
    "5a716fyq5ubC42ExP1CgUDPSAP5UqixGKYyEKSUgPsv7KdEcYKaxGnFoqkFTfjDyXPAbshBY9YuWRr7Pi4A2ktZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PKc9inPMW7SQJdotCDuLQt2AuXfycAJEyh6gVPnbbA9UjuEaTxSCwFhm56qJzreyKnFVoRrxiXtqXegqbFaPeff",
  "key1": "4CygzYt56nLAkzTFiWwUb7zZ3UtTJ5PCbpKXGnjbVNbGZ4HQx5bN3eiyZz1QcJCnvEWEhHXoAR2hPojvLbKhxqD2",
  "key2": "583sgQYeWQnd8X36D9jA1ntGWPjRfJinUPP6RicR95jAkK9ztpYz1fsFfaMVsTVZXYmk9jeTH6Gisszud3An1CsQ",
  "key3": "w9EMstFvCC61H6EaTfGNwwkpup1kHdiAhUBDAf2Tisv7kR6sQUe4J9aNDcvheooY2eVBRzz9sPwjJSByt5xc3ty",
  "key4": "23mTG4ghcJVMXhJjjzk4UBcqQuAscHktKoopSpAJzJVc8WbLU5AeUY3Ay1orM4YSvNRJe7Tekza7o5q8ugra2UgK",
  "key5": "4dPXSpnG3tkEYuRm78eyjd4duEsfotfAvDqpaz9cu6D1MXAqxK5j7w5x4sPKe73df6GiLc57K7Qka9LacL1Q9fQu",
  "key6": "4NbM7GGAyEGrxzvAeKUu897bQ9vt3S5WwDVEzdFUwy776jWk2q4GQ59nX45ue1X6J49aXAUUw86KtRwK4WLQitNG",
  "key7": "neTEXpMNBLJofpxbY4m1JYJofBMg3H3yntf75jnTWEWQEE61mra4ueEGLCnEYhvBCYwfUwKsGJCdRzV61uBhupM",
  "key8": "3pVN7LbeNSVdRUPZKJLPE6MsUbXKCtzCfq6Urd2rvtZyVCN7ziNtDmMa1buSaLDq6XaXeW4JJsDq7LWt6vLBTv8p",
  "key9": "2jm6fgAG554bEFedvZYmqw5L4L9Vx6f9TYmwJud967QHuwfZithfJaAiE5VYxNQk3kDqX3nKD4ZZsqRuwJmuGCYd",
  "key10": "4j6QbhaRgiuHv8pCNwjjmSedQX49jx9kmx6kfNB3gs9M7nALCwyBKda3Y43J4smQwC5hafmgSQDGwtcgE1dDmUKr",
  "key11": "678vNcP8HBGqpUZuL4nh2YVgX5mLnEoCyf1PcX6fEYKBXb9GBo8Ja3Qg996VGz2Lie1sM5rUJAaMrWRaXtgpTVVH",
  "key12": "qCbvRrqqp6zGJcjxkUuTVoUtmgAkNGo2AahV63Z2corzPHFe44XSFxGVr56GcvaEufxL7UJRWXNgyn7x6rP4YvD",
  "key13": "5YU2hMghcgFmM6rnZrDQmGz1hFbvp1sxnpLsshTh82VSbJ3d9f1Bdwe6wXx54BUmBt1v9LDf2dVnE192Y3rbZsie",
  "key14": "4uCwMkhG3hjKn5simXpU3buwm8S1C9k5U5M3qsVXjryBCNMWP5uYLTDjDxYcDBsERa2su1b5AGXKbFzdawdDLQkT",
  "key15": "RR8Sp6RRuzv5cpPdqk9ukPDW4eWJnxtaDy2x5xzU2VuN6kJHhqjCRCp9b95p3oyRhVPZzJMsEdY1UT3YgcvfRaH",
  "key16": "4T2KR8yN1494dPf6WBvU3Zurmu8D5HUvpfDhXfkytN38g6NR6aj4QmjL8hghmo76KBrVPHvMx3yCxufXULsZGAth",
  "key17": "2pXLwJwqXbZ9JqXaEAZH9thyMQpMnzjX98iLpapdX9ErjMmDdf3aPqR9Q9PNnWLd5ACSBrkgF3WoqWKpjP88oGek",
  "key18": "4h8Q4dYa1K8Q6AjkpBYCojfsNv8Cmt41gxnnRJDGaRVVMEfQ6Wh9PM8vHXSD4qvsZ75v5o96ZExPMXZJYbSmmYyL",
  "key19": "3YDTmhLihBqhoDQj4WH2eCPjYWeUP3q4gkgtQdcwCME5hviAQUATogPN5aAJJPr1jySSVYnQq65u5bDYdkcN3sRY",
  "key20": "4M5Q97jfLZkf9V4ShA38DsYKLE4jMAumNUE1Jn6iqG7amZot5b8GhLZePffv19zLu4PeRqJz1278nmzKy1LyQfRY",
  "key21": "ByJUMeUGuuoSgLRfpS6zPgxeYVsMUTkGyPXApqcGe36CTp1kJedo2XmVKKKAuMUjVy7tyTLsjhR6iBtQkg91YFD",
  "key22": "5vNtkGANx4Godv9cQX7wyghkfF3z4ePBeAB3o2TY8SVLqjRd5jiYYDy4rUzY8Gi88L85VfncKuSWXg9MwgUJx46V",
  "key23": "2gBvKYsJh4kCW2h7Qv54vQhx4xgvAc2qvViFVnMqejpQYag5vHfoBjHgTSfAesbSYXWxycgkMsRywMnK5X27u5So",
  "key24": "32iAKisL5ohWXDHN77p7VjL19ReV8s2sEQ76q9nQe2NGorgKk68KcWGDLPJ4dJpVTTxJ2Vp9sGNaWPC6MMcD43fv",
  "key25": "4eKYu54DmK2yMvg79nZ69Ubw2ujDrVYCcTWXANzZS3a5nJjVqKnsiFh85hj6QRiN63uatHuLQ4eiWvAw11VcCAPg",
  "key26": "rPAd8vZD1ALepWemaRAJVwFzeedbmTWKVuxhaE9mdYU6q9i4y2sFnGT6XfQd3ByyWApG5XpYcwZu7exaMrTGpa6",
  "key27": "38TDZEg4TcV19MA9V2y4PKNeRVEe8KMareAKSPVKU5Zud8x135rHLie8usuwUvex9p9F5JouTdBqTLbLGX3Qp6UZ",
  "key28": "2ZQ8TG4o13GoVKBQ4oXiMvU1NxDN5Acn3PDcHHgXjPg89DxdzqV1TC4jqDVgeD9A7MgyhRp6PTJrm1iVXUF8Nq16",
  "key29": "5HNRouQxWtmAmjGUWWe7DUFJfJ4pZDNE6JW5PFrN359ceErPdxoLFbWrJLzgCq89kvMCc1n1XYepbxKCiUDqro8w",
  "key30": "3dncWCF8ap4HmpPzPk9jPxfiW8yYBiBAQpVmhj7cKXKvDXZ8rvcUHexgE6Ckg1AmfFVxQgXHurrUZX2Kyppm6QY4",
  "key31": "4Sjkbb7HqbvEgdsRk7TbfsAbSffMb8zPh1dBxi4GXKHv8QFgPzerstPwwAz71tAeRq2NPQuGPV9b1iXSxZjCLiXM",
  "key32": "6238X7njFtEtWBjPRNsvw6UenQBbiduTjx6tRQG767CrBzkznrfaAicvqtSVLoS8izPk4cjzwokiJVDqbe9LQ5Vm",
  "key33": "53vB6orufeq2quYv9NfVH4MfFwTkGVakKc6bTRs7sKMKw6ojGAhkkaXUwgSKi8WUJi3WCw6SvcGztMxNAPyssTpm",
  "key34": "5nep7XWjsBJq1n2CydpaiYudfa79iTdJ7hU8XBF3TuGY9xCiPxSs6NY2KCkhYfpnSTm6HrdP4ey3LfFFKyKsqWfE",
  "key35": "4S3APQiXMTzSqzx3UbFMSueA4E5AT8j5z6L3AEgFvCFHgbPXjMa9QgysZKRcVNkcMURsM885m7LkuFpC5Rxaafbm",
  "key36": "3wT9jBuC3zZGDwkYVxt39AYaSrhTzM1tHNLJ1V5W7uffKpef8dsxsXMXCkSLvAtSm1qvXLauFY5fDg888g3x6Up6",
  "key37": "3YH9SN2fGFxtyD3FcG29APs9nNpyeB48QfbZfL9rrqHieC7mi468rpb1Y2ebKRBRMp5EZTFQicuBmLG3MKReNnpy",
  "key38": "2wNDHPW7fs3rA1nSvxaLhAGUAeunJ9z9fXTvB1D1x1PYgcjZXMbxAshgK7F36VnT3UY2LPsDkTNVEfMJGomCYR3Y",
  "key39": "5Taz7mdU1Mzm2vSHVhzVvB33eumatdsCSiekNhqvk6vkjA1risH6GMAv4c5AYuzQDgrvPJRF84XoGeoyv5U551RS",
  "key40": "5zgxpTP2eiBXXbbRfkmaExrcbCHm9SZkXUTXNTdLUpaqQyT8vWuGcCYcEd6Z5AcTHScQuw73HJrwuADg79iG8cEh",
  "key41": "2tVVa77JRJTEtU7FsJKWaUyvZYX7ToL8iUNrRbLtY4VgQZEveZfN31nTJZBj1GkE29gN7cJnRQ4DfUSYZtc6pQmW",
  "key42": "2DG8rfYWYH3jywj1E1yKDVqeqTNg7vxaBpx8PVjRuNSmWcQZvmbYXqzSxibvRdiyp8oNt2cfmtidemuuhUKwbePa",
  "key43": "443xiuZ26TroydsSvYJXRobZGkSMVK1eqYfB4vveZ9GySSfdLTLpy8xuAF8ggt1ZaMQ7CMxDcU5xuH69aesXtKLT",
  "key44": "2mMd4hfZ58DjwEysKoap1kmUJGG9di68FhwNPSXovAozg5ftSGQaEQS6StjJ5aLoTewi9Jyoq5Za1ewEsJmbC3f9",
  "key45": "o15ez3LWUfSRv7vRMYYsdnh65vp9WejNwfeAjT5j3iQXf7AttqnikqKU46gikzdtuKuvmT8uehjthS4FatiSL1p"
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
