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
    "3VCREc7cx6WJDUb2orWgTu6aPAUK3RLUQ66aVj4q576dKgyuEJrR3J2XEgeCAJDJK3bd6rGe5qYkGVK1kWBWnX6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYXNTbsY7tZQt5fq3rXPGfqJepRFuPW9SKgECWd54v3dBoLmnkukdUWK5gKBDribVYfAtTi9hRwkpWoL1cqjweM",
  "key1": "23SFW4ARgGtU9eqg6wWVuuYpoXzyVDhuhzFCY74ScbEXVxYXjfMydYYgsJYWjj6VTQW87bBh2yRATpGTDPYUwQdt",
  "key2": "48iFgDzN2cfkrhZdHNKZTX2d2oYNituwghjccbE5BcmB57FbojWUF1ibBKDrfX8B8JEBzKzt6epmvayYLTQSevqe",
  "key3": "5NruVUF4e2EBmJ9afuUYHTYd8hzqzM8sYkQ65SiajBo9tGLnoC92PX5ENr1zV1SP4A95vnWydVhVVaKCC8ZggL6Z",
  "key4": "vYns3MbeJ9UUzy8pjg8TBWnHRZJnHgpXk5eTK4oqhvdPHaUvmkt6vjhAk5PZA9wQPEejigeHxtofpnixkXLoabr",
  "key5": "2ox5BhJJYFbV4mubWQTJ5AqiWTQdTeMwCgibqGxk9ZSwiVMc2qwZi5rxw4n9HYJfKjQMdkwgux7AToeSmpKqd5f5",
  "key6": "2PBiBmm4QgQLTw46hPuryG7Shk7moFUS9gGeXLuWgytmf5iC487AdgN26zSsD48BGxjGif6gEAZDbvTQmZewKdpN",
  "key7": "4kzsBGYfiRJNhqEtj4gtn78cdY1Ltq5XTqDYbNE9ScDKFYMgufmdnu2aM1dwCoWELMzLyumFeE8fhHCMfVFFvoEu",
  "key8": "42deBd4rHYVEX6P3Ax5YKC8APZHjyESpvXTdCQHMdsWCwsjbqKotYxXHbTroDtB6ssCyazpYwavQXBhoN4kcRUdA",
  "key9": "5vnDgbBfxqBjNeNbqLSNnEZWwsdVjCpnDyfKM8FWA6czuMFE2SZbJTBSfR1E9RCQJr9GVuvTfXsYx5uLJ7LbKLwq",
  "key10": "3RdeL7hPH2A8KR2XtY2j3qcAfcgu2DPsZSWzrTFiGnn266ZmAXPi4oHXEpe2WJEmKovoNpdw3cHbExiahrUWBC4J",
  "key11": "3U5f6ABF3HyUGmXGWahx7VG2EsQ3G3PQcvy6YVUToNND2pTHHWgez1R2mt36rcHC2MtaRmdfG6RgN6ZYmf5HZTTG",
  "key12": "v6YKwiUE6aq1Zkc3YfKJwMigrME38RnJRHxvHnZhV6kW4jwqANxodCDDutEC74WuwMmmXLtmnvfarTMWCAYNfHY",
  "key13": "3FBd2QGioW1ppLcyWqnBmkbmcJ9ooKo45nLagC5CbfVhL8e2vexQDNErReppPhmbowr5sdaZggavq7yYrxksZWGs",
  "key14": "5aws5NX6BUEqvxB28Fqh4egSL7bjeZH9Wm52hK2Uch6sB2uoHYdGuQtmkmTiVejRKXaGnrK3QKGWSyLsbdrboKfz",
  "key15": "Emad6aBMJGK87EaNTF8YwtXZdvTd6FFXWpjBtfx6LanPqL76tpMWU7Z97tZifA4AXon1hs7ztULPAfsm92oujE3",
  "key16": "MaapTqR5j5zcTMYLwNmZeQVFx3C2DXjR5NqxLY235EWsCNkVRHZTW3qUDmy6b4VCEY66q9cd8zfoEbb6FjaFTsw",
  "key17": "5sUyVqsRc2sx3SKmEZBiV6bu3N4whgVYB46vN6n6d81B4Efs7fNgSpKFofkEy3JosSSBFPUDQXpXk3MUzJ5TQ14F",
  "key18": "5LsqZ79ybfvVfT5cLxoGJbsZAb4CF6iiSzZsup8CPp1pVKAneKcLhayyvgiaRE34KUmbYNXbGgkVo7LviQcPL14F",
  "key19": "5cQjS4WSo7BoFQdB1m2FvshtQ7HpNtbVBi7qPAPvtLBcet8C4dCVnf46HYcDbKcCuTVez2JDwrAMxaXg7Nu6Wz8A",
  "key20": "HucdfdvUbAxJgCiJxcBELeqX8kjDEvf28tM3LYUtCJXY3U6v6aECcBwdt3RLqUn3BBBniQHiBEuBEeq6WsuDnAx",
  "key21": "3s859eXrqDDPYKF9hKJ2JgHVMCXMxkdogJmHTAXZSNgjEZhrzCnG6CNcc2z2ZRdiXtzt1ivDn2fJs3FUgg9pKDCb",
  "key22": "35FMUiokkdaxwqViKzkLY1RQsxGsXwnmxz34aoC1pHGNc3niViWaEEG3zfJY9suSG5F2kZMDGUXRJY7QiUUbyABm",
  "key23": "2RKEqaDMcDhyhjKnWpT6U6Sv8DccPduCboYR1n29EuzDHeTTWFLEL5EqKcDNpiaec8JxUBG6743bGQQTL4YANqmx",
  "key24": "5473C52Urhs1rSY4udC8q4jt3hCJ7aJ5xcNE6gyMWMpgtGzru3Pr3jfh8B3wzVFBqeF6NZmY4qcpup5k4pNmmi1B",
  "key25": "2JUFRXpwC8SLE3zqkwR4zMkacaq5qzMB5M3gpCmq1KBKrxNeFsw69PkYbJZHAEiuouVYmdjyhQqnkot4USSm7ScS",
  "key26": "26KTfJUPH5zW2wZSKKPRWWuR6yJMtCf75AAwARmuHmyPbWqzxYnFLe7e2JhVsjM3Hyr2zNhzQLKFw8S8vtW8ojNn",
  "key27": "35TJZEacPcLrPvdvMkjLyNv3AKaHriDJ4Bh4H3u8j5HYDPmiMqc2DKKzsTVqgATRYaSUr38vYSeRS3NvbhyB2EQh",
  "key28": "5RgrdaCwWAuxDd4UtMidjXLFNma1HMgxFe9gTjJduCSE9w3wDsJxfLvZNFWa5yKJrxvq4mRvrvkwc384FGVtFaxL",
  "key29": "Y7EHzfwtAR4dbhXMTErJ4mtXPNMbCSHVWvRVVuqcMxBLjswBS5sy36YD1bgYFK47hKZeD1wcSXQnrfBaYspjtqq",
  "key30": "3N8oVuHiza6g1JnfL6L4khpT7w5JAGKfRbZfpq2bVb54Vy9re7gRnProcJvchKqAUEhfHMa92gxYxj8G2jw9AT5y",
  "key31": "7S8hrWAGu9DGerAVNuWJFBCp4z8LcQzaEdVCZWXeKeViMnE5YYnVVZJqHFkXb3oYCHhD8SBwhb2sJf8DhvusuSm",
  "key32": "5FKBio86mraWkWQskDiP2NgvukkhruxV8o4LEbhmXMZ8kDsU4MnwbceXQw4riuBGYmkCKoB2QRV7CMH7WU7yP8xS",
  "key33": "5tW3bA8MHuHjQErpYhMAm29h5kDtesYXMXZvPzLT9yg9q9MGsC2N4ZELHGnEFFJCRZGzvthRwpcyiSNhb2VEdcz",
  "key34": "4azgsHVyJWHukMbr8PxAuhASycPJwnKpaetQ7qZVsqgatnV4pAYtRb8mLGDwRE4MwLt1xbis4UcdF8p2YMN4YRLM",
  "key35": "4v39vrDUmuV5MNDvix42LEMSyBcteBKVaa5Ai4UCBxhjNk1dGpnvuiBr692XNAe4gcQeE66fgpBJdzyGECyzQpxE",
  "key36": "5o2DW4jdDK8vUQ8DSKmHPvkjtdyeSExP8VWFgznLxKS2zr1wP3pY11EAd8YU6JZonFa9SwnvnVKUZoBRKw5wL8QK",
  "key37": "5YSnZ9VLBne4a7dni8wGsCw8ExvHucYtPt1a9SHjBk7fJ68PgJH28UuH7FYGmHZ2CFhivZ8brKoKivgCVUo2vGWH"
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
