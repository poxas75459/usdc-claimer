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
    "3LUWKRCNTpfRB1vw88QfNBLK1Gv9wpmE85e7yHmatxjbu6BkJqdDcG6wdxWU7UjSUxEWNxzR2NVF56tuBe8o4Kka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BgQDCWJHcGeJGoEpEUfHimL7NRmJ8aTkDuh7QDSQLCgDnfdP3e4XJ3tUYSMGWLgTMbsz5EphBToW14fvznpffFV",
  "key1": "LMAN7Wj4bW1apjjqnNvrucrZerxaWtBtPe5KEcwwdRrQS7Tn55oRTk8Rjevii4wQmvm38L3NQ4yHKvGbVkzR5Ef",
  "key2": "4FgrNgbCij71yNV7LnEGDiyNwKGCk7mpy8XRMSYqhks1uEAwXt38zbxGLk9YXzHu37Bw6L87kRykud5eRxf3WhVz",
  "key3": "5gWNaYry3uhBu9Kjo7kCAStHs8tCZuYjw3SwAs6auLaTQafSaaH9iGo5U8c7kJdDvkD4MaxxZxUTE6mUKzeaikAe",
  "key4": "3D9wS6p5v4wFSJi4n1YcYBGXgnSnvL5KutrVDR3YPh3SjW3E8qXFoPV3MBxU4PJD9zBs4ZZLrztzr9q7rnF96Cf5",
  "key5": "447qckjYB1uqEeTJSxwARH9XLK5LsLy57sbDfb2gjyJuDZoFHvXNbamsAWpwzdCLCx2Z82RwmpQCUQpCxpEzjt5E",
  "key6": "CW34XhGk5t976N1N8xng4NJnSKbBnwXJShyEvJPjasZbNMiUz5jr2EuTR1foYkE28TgBqJWSDUnwU154BKzfJ3Z",
  "key7": "1Sj5iPSAnkMGg56FqoriLasNcufjHMHsnzxLwEi5Kd45ADtpf2upNbhjV4a4PdWtBHBBcPvWc3GgB6AbzpD8HcF",
  "key8": "an95JFfpdXkepBsqG2G1bXa7C5ragi83iRz2dRfyuNqCyWUsvXFTAwDJ9oRbUsR3x1rtSBhZCkAGmjdeTvFz84Q",
  "key9": "3uw92sAehVR1sKDTrJiBfMkxichCPPE9QDdueXguvF5z7jbCAFghknJ4VQ7kjq4LExbWyqVR2ADDgkTDt7PkdPTs",
  "key10": "2Zpvd27SeAy8cYdCURcegeHb6yPskTZ8JYh9XkUwYvij1coWL1Emj2rNeuqrbi7bJb4aAkYVXqV5LYNfx5UVCSVY",
  "key11": "3BtiLvgPdKFHdPLoy7e354YKFrb9LeGnAfCRqGq3RNoyjXSRMpPyJg3ULjWtSHw1xCKJ2pnnqgTAW6Vrue7pfs3J",
  "key12": "4bnyC12mfJ2gUjQBngR31e2RBGjEveQ5Q4B81dbM1pmSRn36UYtVxis2tKhvYVzakkZEqCP59wSVtM9sXjKPniaJ",
  "key13": "4SetCFc1gvSo96C35ULp4DDuggjCYWswsZw83sVw98fnGVryETrnsL87uFQ1XjkXRYosVnX4b5q1f813dgWoNMgd",
  "key14": "5QdAWVAnRWV9DfaTGJx82fHgKUCSLGNkuzXjPLY6nj5jwHv27444CsvHboskcYUtvtezGxaixaoobZhjBMQcnNWi",
  "key15": "2ZdYaw2ZZJzEG3EGJcGF7GmTBVyCvirj9yG8XAuwG8ZXrxJ8i66zndBbdXp4vu9DRs71QMiBGuYV45APJKh5msyV",
  "key16": "49dpegRkMHX4nZ6XJvV4jMG5aDQdje5PtczyTakwtXHKTNKYte281KWMnoeCxte4JmGHsVS53JsuGEqpNmRTMqEF",
  "key17": "3HLbatPG2DhBJ4iJnJHQX82crikCixC8rNL8x4T7DqqZx8pFHZb2YAiVkjq9BLR1mCXpJEAD9EU58bTqgGCHXuLK",
  "key18": "2deRA6SMFZEVG9TJRnsmPNDGk9XbR7R8abqNq7wHcY7RvQiH9yD6zCGyjRd5rVuJXkFuPcDCnJMkXTiYs573wJGR",
  "key19": "NJwiKTc4UmeiYKpXNkvi2YaM1wcoxyAuPe9yHcJK2HghWjb3p43iTPh1KxhDRmPgt1dcmoDh4eCeNRfSPUMYmFG",
  "key20": "3m1L3pNvaRuZ7311dMdqkAnzb6UgUb7zwVHx2QmAGD3uLxxJseLoxbWLKahJ8QxmZngBqnxDuLhmNK1snmrJtJSi",
  "key21": "28rZjHku9gVW8SNm5DkoAZrLE5rtNHjAzsSnWpid78GxAVmCDZMcMxK8hAmvMHsphhjhgaBfw5qCTZSNak995HRT",
  "key22": "2uJNPkHkAxE1ghc4XAQTLBCU6udzCFmj9GsP2ZAHA9khkPt9kXGzLfKbN76vWwjnfjcvdgZyjRttbZEo2Xp8tvU6",
  "key23": "5zTaTeSMRiEjw9cNfD8N82gZcYTyhA5dvfAL1NgERbtYzzd7enwhvimARhZcByW1ggkEPuXQENSVohLj1X33WN88",
  "key24": "3DyHBvV4fF4QkwsfaLJwLWqvaA81YDV6dwtz652FPZLDtHbU8iFtCiTqMR7G2W5kDwYtNfdKUY25i1z7oGD1UWwN",
  "key25": "QtMSGugwqAaxuuAwJ3tYWaDzmUsD6JtCa7QNwqLRwwBnmF1EhZGzK2S3Gfn6qpMfu7eGAG6QHQYBJnTk49FZYGe",
  "key26": "2eGJXJhEbdr9S3zgmNhZz5u9LNDkuMtSFb29YQr41PpuqZhh3J63p57YNS2xruhSJTvYzjS9uaRXXPSr2YG88Jbb",
  "key27": "4Qidz4m3hnzfyJvyHQGd7NqZT9aikZNQdztmGwCWnYyzmWYrkJe6wPJtANHVD1gMe1wELM8Hj6zsJS8BrmvRfb2D",
  "key28": "g4TdL2Zm3wJ5fKgsTfbH1HMDCcTho2qG24syjFUJPk5AyiKSfb7PzbJeENUcaAz54QriX5aFznXX6Bb5iXSjcKc",
  "key29": "YDL1jm47ZsHi41fxfuwVuh6nE6MCAgr4GSeq5H2joFkuUxunc3cZ13RGpdjsV36Fgtip7gSyRJDp5tAhpwXuuat",
  "key30": "3kf4J9NnPCE81Gs8M97eCHD3pZeM3XNY2ou9prXiMF613VkjaEx5NAxTBnw8zUTktn1him9E9LqnPEwubLzhpFvR",
  "key31": "5ay7GJKd5peaS7LbdDodCCWzhbyzGGKQA7T9zeW9yRnSwLanQBXNBxb4e6kHCbQKLmcwbTZURDkuFDtFHX26d2yP",
  "key32": "pvGw9VpUZ2ZQWDqWbBKxh4T2XzNzBWWB3B1AnvRey1xLRN4EWgxkRvabv42zF2uKwRVVFr5SztGmz3NP8DuV4ch",
  "key33": "5HKoVKvqrVitCLf3aNm5ppkU16KtgPjFAyZ2DieTGVQffUZbKAuq9Y24eRzYav62fhBDHo7Jwdp6KTxh7PEieEMy",
  "key34": "4spXTgPVntjfM6ARxt1LStZDbi1F9stCRFj68bVe78pFV9XL4pZUYXVdU53i3s2Sk6Yz115hesTAoBztQG81HCTx",
  "key35": "2tWiRi5SyPywTcnAbJLUnWHJw7rzhGVyLYvso5rd64mYENS11oT6eRbs1r48DJTpGHWMQtmABasJb7e4JVzs312u"
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
