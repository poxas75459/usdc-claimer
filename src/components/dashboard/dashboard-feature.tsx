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
    "5nvDkapiemjXiyk2WrmdAZHwHvLCAPzB7ZhgeLyb3MwVAmKV5jLC8A9D8suFbDGN8tWPerE69ocz1iM6wqc6Yfh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzxpuYNF1kTGQtrje9rESKo4CMvRuJTChmGTbNnZXuhohr8dM9o97aYPSxHR7GVhiRyXXfC1UGFykTk5fK7LYe7",
  "key1": "PpN9mt9scTMD4me7wGBfp4u6zzCGPBPFe4Gjv2YC8o8Diz7kkRZwsTdW2yEHJjy2SdjWvCkoHpY8sVtWigavif4",
  "key2": "4h6qsnZY8N76VYQB2nPMM6z1ggn33cvWtQbFRZbm1W3ri3ZtSLvaY3UeSb1DVRSW6bQ2fCDSUv4strQshgjDkHfB",
  "key3": "3ZUXLZYZm1NsKCKL522KFMMBbPzaJGURJbB5DevuFHehdeRtRJK6ZaRujXbCajWHaq6coPgyNNhUTcuWyGceb18i",
  "key4": "2DeBRRvSP9vaUPLZY4C4XHEPrBDNaYzpEpkYfVYHUw7DPApjgzHvvHZezm28cQu2arVe6zwFsGt64wHHQUT9iUje",
  "key5": "2zPntbAUo7srz61K34HzzBHTNwHqFjXAFDGtNy7CzFJYjAomgzELwTdK2cgxBQb2heJCjHgY3fD5BNnUdmoXZ6v6",
  "key6": "Xuu8Ekvbwr9fexPHWdb5eTeLg1ewFTDMAQHkV3cXj91YWmUF1dTpfMm786Wmz3P4Px8C9v6AyNYSxuncHyRAPGw",
  "key7": "pwH2DR3t6BYNXeGRrhPrsXuD3n8ZVa4GFPmFiYDN3HMjk7u3rUGjQJwZdN7CKdtexhyXokVno1DDoUufwjYTFJP",
  "key8": "3zdnPnzmwpb21hy4tA3QJ5i6saPRA4TbFjpCRtWUgjPeogTdiKdA5X41Qitpgn1fEaTBNzXcJ5V1SnxnLSW9McDV",
  "key9": "35JdSkJyNSCzpAXNAS7Qv3CCXTofiWGiowMV7XTA1guNj6ESCHjucmyoPMNegApWskad6W7rWWbtwGW52rRxtSst",
  "key10": "3s1BprTwpsRPg2QCYbmq3THE7ZFMsYCtjuHH9KEBttQk3iShUdMqWyWz4cRDzrM8gut5ni4NZ5CGt32Eisqd5SLP",
  "key11": "2W8NB2CVpBBNZasJ15Q71by3YGiStWNnhCLQAj51pQ61x3CDGcNm8A81aD5zknV8FYhhS2G5memUaagLABRcvoio",
  "key12": "5bknsNqALcKz3xh7RqBMXSX1idgi6hhMWdAXTBXxjwx38U3zaoYWbL5oWjFg2tMpwBFaUBiDwQkxUJ2rS4Zhzm2w",
  "key13": "4VknzXUgfovgvSZAdSJuXruJVFzeL7NwDuWTVyZj1FHPsWAgYDU94jSP3Aku4nnc9e2VWP1BjUiorfNjFVfJePge",
  "key14": "2iskEotbz9Hhfi7urQ4oDE8epSUt5ZQ8Ujcth8wKzAKKPoXTTP4biZ3iNvsp9xou4RcpuH1j7n1QovQjcvh8caLi",
  "key15": "FXDteuMc4CPSgsaxrve2CGoiijsunjwp19vKJWnePWfb7sAPJu6KZpvasY8wyXb8FyU1XkmidJC52jebU9aet5k",
  "key16": "5Wq2JNmddeCqHftfHWqoZSxMZRP8K5gGiVLcDreadKug9Pau3dMZtzd5Fr2oY3BqwNormjF2DCmd6JCm9MqwwLBL",
  "key17": "3gM2bqeSWEqRPmCHH1a8s9A6dj7WqqRDpUWtepiswFeqYiJMdBUpKZjDjSpb8QrdxsNKGLQRS1fB14rhBy4srhUC",
  "key18": "5eWPfo6nWHBYYfeQqTnEGbr7cmRZMtm9FaoX2koja9xn65YAfQF3jYJ3Z1mi8yimzfZvqMkQmfPuvttyoEDKe77g",
  "key19": "25eeYXswkufd5PWFCVnkGhH7qymmF3HNoFgVZcwwEPCcp92N6ram4WaTPE7P3vtdTJBKNfVMHpq5swHxEQ7mcjmD",
  "key20": "3XrzUNnWhLgcVDbfPK55rWVZzGCR4A2epdRsr9C7NUp5P3tdJat3SQoPhQNZgYyggMrasK86WmgtgLZqUPGHYzQR",
  "key21": "3dKarMFQy7kTrcMY3iec9VT5CFCYiWVvG6RhvGRMdgb3A43heeGZEY1Di8PfhsvdQ6vZ7eWJVagrK6GNh4sgoUGu",
  "key22": "3jrfGYyC4sifUjBPqhoCSGndxCdCJU9hf9SyyGLb9V8XUDo79Eg8L6WeuEGnoLScmsoxPcAtHepvtRPnJPJyGuyA",
  "key23": "ffAcVBAG4zApyrJRBNNGfAfVMayKCn8CxspStfBXw2JijrZ6L7snRVLUhMQvUeCMxwab2thq4s7ukc4oUMwGPCY",
  "key24": "42i5owkTjjXu9JmPtUmKCcyVDb4KvM6EMZ3u2akENRe8JSbsqxDP9QpbfeUxpNLLX4YaYzDan78p5WKEPfRscZ16",
  "key25": "5MUvmMDFWJLDwPjQCYZmoTn8RTWBr5M5j3geUA1xHLX4m3bnR7Xk3gp99e8Kz95UTNZevofBnUdg66rHfCDDzsW2",
  "key26": "k3kfZ4SXmBa75VEoxdQ2Qi3YuoeY48c64nTj2AMLwCJHjJt7F16HxHzacmCcRMrqGsdEkL5xAqmXgwi7sDzgQLv",
  "key27": "YNFRCcPrfsPsHgnxJPjM53r5ef6UqJcW92ncRpo4zTy45137oJREZBCx69swGycjsqPinw1D4UMKDfMxH3d6L8U",
  "key28": "4WMKu5qdaQwXS6JDPDzpNZ4tanDYRPtyNMAMk6GNvXQ53ryatkhuHXCzSGxTsrTish6r1abRYezHkR6j6A3LmzMH",
  "key29": "45VjfGzF7UAqMFRJkcv6xWitMixn1gp7JQeiq5vC4ZLgpiE1YCyQk4pd7SPKdRKB7jqC5ws7FXhRRvVodH3JQu1b",
  "key30": "2wgYMaxsDwNAijBAftnTtYVrgjFXd7hCtkzQBHwWvEqWx1kEhbbF5TyGx5RQAf4BH7d91q9yphxmkTsqRv6S9Vf2",
  "key31": "43KchymLh6FQjTdyL9YmVLkSGEDq7f87S3hSsakBUQcARp4Kq23RCodcj4jMihSmPEMziAgHsNQ6B7QjMjvnWhWW",
  "key32": "3mm2xJ6JRUeLgkk5m1Lf13K7Jt4d9mRkrzD6BA1NwcyR9pndRWg2Yb4YPaC5Rix8a1nnZG2CchpxwFEtJdVKMgc9",
  "key33": "5VbpoBnaz7BXrwjR6hWfCHhNphUeWC6pNCEWVK2hXhade4NDDFsaiSv4JeexK5fbd254nxrYGCeWiPNSvsh4DBK",
  "key34": "3XK8pAx8EQ44RbawJhNxD5WxJveaqCPxapJFfYP2NBZbKbFNe6i8KqXt8JGmo4uF5a5qq8dZcvZMCf86k48zLLew",
  "key35": "YFRB9gmTmUsC781RFxD1o3KcN6A4w1RnrxkJEqHNS6G3PTMboLhgG6Qq6Vc3iFA4v6gPrQWQtMqLbQMY8BhcF21",
  "key36": "5fX7tdiYtGE5XJF1YzsR8QiR9cggHdac6odbawPXGcxi8xaV8HQuicnmUUoakVLExiFgZ9Z18vzPVy5Qx9926ZKY",
  "key37": "efQb54uMFxqM5B3REEcv1XJb92QmDrKdtxsHhVhsMW4netksYj7D37YPnLKB5YoZDawtAXKHLH9dWBvyLoqH7mF",
  "key38": "2StRpLz2r667EyRkXoekFCZDsNR9qN84DN6BayR5ehnKm4Ct8gHwKXAiwuDUrbNqMinb3wy7re563uX5KKwUFhJs"
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
