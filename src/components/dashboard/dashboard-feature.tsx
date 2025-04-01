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
    "4Fzdz1b5HC1W8oNUJGZzgZ5Vj83928H711uhYPnwJW5QvHSWvm11STrfq9Vpj74TZ6ceqCrMW5NrvkLjXC2DDKw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c3gZfV9DB94hLaL9w5nPEaAwxz4pNwsHXKSSm3MbBCwLRnWPtuTcKT4soac5aDtNiahys9o1yT8L3pwD3V6RFcU",
  "key1": "3RB8e7uSYPo9U5wSjbtamgacGjgzEqHyegKcdRzMKmoZYa4x6bf44dsEMNCoUqiQSkEHoD9agWufHg2BW7Kq4t4F",
  "key2": "zCdjJ4Q1kQrhSvxYC5LSPs5REQChpMAheJQ6Vc5sBJMeAytcwm5JxiitFZdsY6fLMCDfCHj9SwgD6XJurrt8ZPa",
  "key3": "3eB1TEBnU6DubteAnQHsXjMDJ2BCRTEbqopSZAHDfXg93fQfU2Vx64tab1BKoJ4t3aQgTfAmAuN5FLAv6ToA37L6",
  "key4": "4DgzPtsENSqQ5jiyr1sLSQ9xSc1GMrrx94F7YkuDKZr1VbjXBfWMBxANkEK9TboHMFepHsnSs47PYEQFtHiEYnKG",
  "key5": "2wbQCCmYqdSVLe43aszGwVSVAYHaQttQANY7NqZ4BKfoaa9GytMD55ypA4tS1cXXQrxgTDPjfcti6sQEi4bR9HrM",
  "key6": "64u5fPppynJbUwoKx5SnWKjY9jPmzKU43yzrvL59pZ9wFKmZUTELG7N1osP9yB1sq9PA7Upq9WcjzbtaGqetsXTg",
  "key7": "5ax56dwyvXUpa91VcX5VG9FUYSEWrk94KyrUBuTxNxudtXzJ2x4ocyGEFNbCuBrB7gwwcW2QFWTrJGqUgYnKd18A",
  "key8": "2HHGiMe2toynJYXXtZGLsxQ4MoSqCuz5mKTFUFGVrCY8ApzZZGsbkTV483KF1Sov6wiRkQ6r5vTMchmrLTdod37A",
  "key9": "3MtHHit99fsH6ncVvsJM52D6kdMo4ht3euPNo3fBJ17B5FkDet3CAhSS4wuTMpG2cHnBrxGFya7PUDCmTKMT4Ae5",
  "key10": "2LhZJgmMRtEfthKtqFh5LpLb8vSVC6h6aMu6gvT66TkYzSgVv9FLBwwhy9mtrvjNPAtp6vWcpZeRpMxUu93tWkwG",
  "key11": "32uMUMqwQ3BCg2988fpzCSacDHpyA8c5jgFpbQGSt3TrzfN6jpFy8oYbCWZuuCbjeRD9U9pfbBSgUagHohZD7Avh",
  "key12": "5WFaY7kH9RG4hVp9c2W3morfkqm1yijfngdkgW2ayDiYMjjTVLKUzXj65jXJY1eTd62fEAAZxJ9ky9aRGQM8YDgd",
  "key13": "2tsyR1x8oX1YeEraZ5GyENADrxrVNCEPLeD6SYDeszZeo5FjgfWxMmRSwbm1A7ATK8gpMVTq7g4mdCyPpQPw1X7H",
  "key14": "4NS9MWmznBkVtbFK2B1pvUAWiyoYf1psQzzZMKvrK3sJZL3RcukCm3DsD57JAa3666N4jTNudQCzDp2qm35YfNEL",
  "key15": "4mbnQA1Yi8CMZYjmq3i7HrhzkeuREMnjcNWdZpXL8NnygJ1MZs733ZeJrgvWNP6ptgZFLfaJd7nSqahbF8Wp3ph2",
  "key16": "3zdg3jMKwNtXPRC6HVHZcyYCjNMH3S7VGrazBAWVXupRAKd9YdoRbCm8iD6FdkiHhM74pNvD7umejcKgN9LMzXb8",
  "key17": "5FY8fWcdfnoLqEQrCocerqohpb3axUszHs1Vs7SCDy81fgyLMgPHXZGLhrX4u93op5dPW3s6zZaTAontRabx8Q9D",
  "key18": "45TtuzAb5k252Fc6QaTALmb7Q8GgtLXinmTHELMj6VVRuJki2A7hLoC1eiugqonqnKqD9VMcG8vwJgx825fFUsM6",
  "key19": "4zcaZBnG2waAguSELwaH7SbVYk661tmqYBRvQqQudjQtM18vJKFw8hGR6PqrCAafdkBvDDYPrAZRP19StZVH98i9",
  "key20": "2Wn79S1ot7kMFJJZeCuw5ApPnt11TTbX5pgo6zA61xRMKraHxcbgKrVjmay4sHavFEGsZE7ea4uDBfrgGQ8ozMKH",
  "key21": "5WA3xgEcKjrFD2XMY65ZGvFosUz61fRgdbFQEgjQLgyAsSDEwbeYrJyje5Zp4feM2nCVBrT9zUPMM65nx3PpBrK",
  "key22": "Yy8jSnkkLeqGSoSXp4yqPdcpGEusFbcSTNm5goAb5Q9gksDtpG8zu6P6kH1TrZcshGC3JRRJmFsQaa7dnugyJBR",
  "key23": "2NUjQgRs1oF7zZG5xuBbBi6Zgz1dvD7hht1kwq2Ryh4cJS7gXKiKNmM6s4UNNorvgFviqEJnisiM7FaaKpmJY1N8",
  "key24": "4ZBF2f8Ws8EWneuMxvMsKBL4ABQqMSeZQAbKtZyL4TJVoFapouLG73sYibV4Mfb8bcxMna8YZhi9E45QExrZ3TTu",
  "key25": "65YTUspQA5at7divgqDvK17xnzLV9AaxeWzTPJ9xCgoemEDCbPfSUrzsA5zTV8n3j3DDmh7JGi8D7ft8uKAe1cG7",
  "key26": "5FktXvUvtu3SUi7LW4DPiTt8iw3ZqKC1GmLj7AmcjVdZh9dqfh6Xf9YUJCE3BQ8ZyGYajCuqMtH3YJE1UKr8PYEX",
  "key27": "4QfwfSaF7bRA2xvePpnEKFgdWFjLaPFcPKoFKcLNQ5GisHMLMQHMvp99airHJxoJSCgwcHBUSWqxZvP32kw5UT9B",
  "key28": "5bEdbvENAAhgDqnVugExrpR2CPyEWhiUdNCz4VphgUGwJwsGwUjhEFBfjZir3TVFAvx7W5YjMnizBfF2rHZFSQJA",
  "key29": "wQ1EtmtLwPNfDfDy2veedVCohcBLkU8Yj48e1AGmwtx4djuZVFNMby3VVAhcrCjF1A67oeZqzzpZfCnHSuR7F9k",
  "key30": "7fkdR3PAbhgJvSUrjgPBysGo9LyYGnQiZmtmWLSFRE28rdscRBHJ1bhhSwzAm4EkiVt8A2FdTKTUKPMqwX8LY2Q",
  "key31": "Po8wz641uSd2KLkijWHBeW34Decei2nJvd5XuMydrSF7oJfioQGdwDQmkm3qKosVE8h2nhqznh9wBjSeAG8rxxs",
  "key32": "5YBtKriMG2GCqD6sSWyPmPhq2mhzEikmoiZhG6TT1hCfvyr4tZtD6SyTeLkUwJnjh7Vm42YJYC3r9QmmnNhM2yX7",
  "key33": "4JBGADnYeamm8ZUH7MFUUrzJaJnnkQSkHkf4MwN2XELZwu4p3pdukHJjfjhzcmmBpCZKCZkpZEFcnyQY7iCGVhM2",
  "key34": "3uBzhn1p8WbfrF8W8Bo1acPsKzSEKmghSN1aQoS3vj5UvMXKkMHxEiwvfr9YZHN1soRo2VgoMd2Q3SWuNUfe4EK3",
  "key35": "5cPqgTjv75TYAHksWXduP4m3GjVPtaWVtr4fb4VeUVqkhTiBEcSyoS4nJUeFFsyFjrEnR7sczobKupfqxUKhd2e8",
  "key36": "2hQarpiiT72trZixn4iaNgsvBtABDvG3JgVkpP9pZKAmzKsEZhGEWPqtkP5WEdeDiDUT46ifXvoxCPYK3CXvYfSV",
  "key37": "ahun2cGQ76aSLdA1YdNBu3mUQyTGb8acBHGoozXp6XKjxLddf4y7uQjGU1TVc5btw4cso5CfEmuNrCRLqTvDEmV",
  "key38": "4xxbjH5jCRJyYv6tSyBzPWGBJac2pZ86E4rYcwLkjEzomsqkTGZv7Xa6sSPL9TAhMUzC3zpNWCQunmpiC9S24DJW",
  "key39": "5T27pktpeLewGbKyanGRpPQ8GJnE3Vq5HuqNoXKa2EihFWoBxq3KKJNWmHPK4sAwTcw5WXnaCfEmjzDJPPS38pWs",
  "key40": "3gHnB3pK1ihNn9R4Jbj8rvFFSbNPLzXWHCkXbcSGLvpuBcG3AyzsA2miBTALvuZoAWeECYLxSPv7Vbh5NcgFwpz1",
  "key41": "3pr6gLDLV6aVvTg2sDiwCTyPB2cGygwKHcrG4yVYsrQMYgg2YJnnFkvreEDW4V3hoayoWW2FznUp4nczmTCBBMiA",
  "key42": "2otwuk3aNabdT4HjwdsZGXAtqTy7yBodWKHpy7hqRLhWzJC7MEsFnvJjSgdxGFihGb9YTuKyQ4w6eu8zKs8JQtEN"
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
