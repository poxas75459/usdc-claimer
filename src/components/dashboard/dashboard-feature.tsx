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
    "yGy9hitfj5dpdFzJEit9GMsDgba9qPU3vZGPmF6fKJ5hywWruQ7XfdP4gYQA17NcTGY9vQgijUcA6jfuG5ekxu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ZUrntPtGxpMZp4hYUkCGJCWrEHKGc6gaczYBM3SSv1hX8mxByxd9Ph3b5NFvwcfTG6cE9XmF79fo1vC3FiVTLE",
  "key1": "4JaUJ1n2GgJ1Dn2gQXFRVxjWmLzHTcAsLNwfaiutyt3UckMAoWqTc6VLVeNCQrTNE8Vc1jB1TnmkWaQFY7SDR5L9",
  "key2": "488zKi26CiCXDQWrW4xFvFbLxFwkmxAMghy8h6HUSyNTCZqsKiDB759Xnjw9gQJSjieXdr5dbEueH3xQBUM6mPGV",
  "key3": "DKU7GHRQH59VtyP9WtUaRdqVEhTU815qirPCc99CZEatngQTV3L3svbdT5W3os2KwSbooXcfWof1KrSx8Gy2CXX",
  "key4": "2XpSZ6UJos3kZJteHFaZ2nsF99WuTK915uxuuLonEEoKAJBPvNcktXTJRQrRYvbRwnhH32ftDxfWPEqGJe4dQRsC",
  "key5": "rSPk3eN7c6wELWbGeaJrZMapFnsK3vjKswUsPwUnDwinS44S8pwLuqStob3XfbYpxrjw1HtPqiZFf6RHVWqqxCw",
  "key6": "mf4gFD3X3823LNPyHfWDQ4c7c2XUxnQzpMEPJMv2GTdCDk3z5zttSq8AEJrpJMVftsAV4tytu4rr72hzGA4RDBa",
  "key7": "5F8Bo74kraQ4eAigjzmbbm2eYaBo9xwNNnV5V1cjytL9MLZ9zv6nLHdXEEazyXJHJtiFFZTcGAm4uuDDn3xu3NZ5",
  "key8": "NrjSxrJAvLqsSrJRQXVV2FTaYEy6E1LV9moCvzBTAhoAbSEGwNT5Jdivm7mAoZ18rGkQkDmFwpj4Mom5RR6ZYR9",
  "key9": "5NdQwtDE7DRfdjEw4cKQcjb6HnKQMLgQABNeX7nGQNFjHFKagtXomJWdDeeSe3G59jh4F98ysoPkHRMLzh5dpqwU",
  "key10": "5PnV3iugrAgbrwVoPDJjdjBRNcCdHXeCjXx4CTGVAWoF2WmNfaLbaVAovxM1mAxtzmuMVcgJQ3c7Fb989yCXg399",
  "key11": "2LRiJGvxb2niTbgU9T74WAvC1yFtEVLePomca3sVgoU5NU75NigUbEemcAUvGMUb5P3aJCTaCrwbrHWiSn8H7pTc",
  "key12": "2742NUNHWGhVsgZyzjV6SNvqtG6FnSbWkNUB4Uw6rfyAup5PSZFyDX9BRbbK7QK5wceiVQGa4vDh6EZHp5RXiKJx",
  "key13": "4AtGW4cbwbNKEhdxMQdvu3SrYpwMrBnf8PrzzUin6m8WSfoRbWEbdmag5yQELHLc3UXaa9juqk28X6TvZUzPEfi2",
  "key14": "2P9xTGgAKNRPkegUdfsQRma7D22UHqbdcZc5REgARHStmhVVb1awPstNNVrCcLuEpVwNyzsSmtfoP9an6DKJa6kP",
  "key15": "2edsKY8aefdMnWNXYBB84wQtn83P8oetUCn8T4Y3atCJtztmVaqzx9JsgxYKGn2t94DuZhTVDJjpDbVHvaycS2Z2",
  "key16": "3XayeHmBwuVtaph2dL6aMo8qvvqn9Zj1QHm5BXyt1sdKX6Un2YokQjwUqJJnNSajTCCps9hQ69jWe6DJ7sbiKV6D",
  "key17": "3Yf3YW1QN7ZYZdd46qZWx7N9AkRF7Szz2jow3HePHxTSWSRhBUYY4vgiSn6p6SsdcNWhaEvw57XfEq49U9HLasPr",
  "key18": "36k6qDWTVHhopHX5zymCVNqovDPjghnVJg8ASvft99SZVT5gqtqmk1V5BADDutAyQneA7RpZep4uRtHjkbHmj4G",
  "key19": "NypU5V86TgeXFYpNuV73E5gUVcv9TpmjZwqp77Vn5zmcSYKzc3YHXAsSnDdPC9918JVwNEd5CmeBGACmuMrd23h",
  "key20": "4KvBTqoqkmtRkirTnyjYtSjt1LfSKgrWHUzDt5Esz7cwVtHZE17akSnkK4gLwKrBmaoNKbXUbQmX7zBWCVepHR7j",
  "key21": "4gDPSZrV8iH2QdJxi4mCwGSYQep4qCgTt1QFDPFVmkyoUtDBDvZXmh3pr4Bc7ER9JXKPheqyGahchLNMX6PFXC1f",
  "key22": "2dMAD8DNjqKYWXvCceyTBjEKWVArsfHGBSxUGxPKVu39Fme1pyw7rcP33xuNDtZ9qVWc4TGv5KUBZenHFFf4H4vD",
  "key23": "3vPoJD4z3WstMYmbJJtHe3oYCCvnM3sSmoTjUsFmgpZGMCmwrZcqogeqqMajB8k5CsxwbsawRTkAG1uaod2SVFXZ",
  "key24": "4aH71hhWvx6tnYoaU7Z4Lbv8duEmgS6yhXbLRiP2dMvR9iJnZvFtKK53as6XTY6Hon7QtptjGcCn99VEUASStbEZ",
  "key25": "4JUcgjPU2XkHfFE6RxMgAYCcYv9MjK9bd43DabesKa2maUA5oHLheMCPo46Sh51r88N8zAsytEabsU9FFiTSgP8X",
  "key26": "3ofzge9N51rHFcNSSRM1ARydRzHiw1bzTgPYcn33Mhb6gFjy5LgJNsoWVh5KUHYEuaWpBCcqm1mAeTgPpcmh3ZaD",
  "key27": "3DJePuD9cZFcDXaHhNSU2RPvR7hvTW2dLazo1AYpqyK6qSrsSKpxkzqohHDjoJq2YYeFjhKzvQPMQrmjQPGJHC7D",
  "key28": "5zCGe9T7YJHgNcjfTdVt6pSE6KeezXgfgvM21RFwS9kQGcwssuK9YGVJeVMZhZRKZW7sUdKWPzjxPAE9bZvUxCVp",
  "key29": "4qFBdcsvTe4WnZpjFph8svQRGCiYgYvDAM9W2iFZxt6weNosaAKiAipEVG6qLBoHRrF8788C3gssjYpbQmeewbmR",
  "key30": "rVN1Qc9t881JQan9YXmrbgtQBkF5fPfm5nARtwvuf872UbGYMR3ZZ6qAbwCLT4tGSKPRFt4HZswKvQ9cr59obxo",
  "key31": "53MT5Yg9CjP5PZ3Nsmyvg2qLXzjc55gK4FBQHqfkHSMDSSUb9Ceu268rTtckithwyQocCT7PaMgQianT21sUqaNS",
  "key32": "2SfDHqBMZmHcUYr5n6FS7srfzP74Mjm3iU3nyWv14T5P1FuUfPHnGonfE5R4QKLeGoYDVzkkq5sXtxBUhvJukhPn",
  "key33": "3bwgC6YTJ1nNs4jZMtV6cM2pr5nMHob4Y8To7RW5xTF96V9bhvKkxVGvi5jRST4QtiUw9qVQfsuh3bhvqGXDuoJg",
  "key34": "121LjErzbi3St95Ju9VSB3FTNcxWDU2RdWmFNbwdhj925Z7mT1QSn7Ngg5W6enp138mhp7X2dxwVyb6VT8WYLch1",
  "key35": "qNJMVEEy57B9ws2U718arRm6GnfStNNNyYYfPVDCEFbmFBcREwa2wusvMzszdsZ1PJHevv7LDqczqG3QTS81WUj",
  "key36": "MCKmgWKkPyS4Fm7X3z8ctmNm5C1bJpCd2hUEN6nbvNcWKEc57wUqv77Q8NiQ29s2mrYzo6dd4qnPhggDmA2X3Ym",
  "key37": "2SsMUyAtQ1DPskZn86YTyQWv9yXRhYobYsEibBxvnCyhCt6FAUu3d2FdVWdjZfGDEHx3RyYmY5teW9VF8xCo1vAS",
  "key38": "3gymP8k2ha7fqcXxUDRWCSS4EpaiGSjEK9CxEezTj54Y1sV9ESN2DjFYvrvjwehdMtqrRSDGLe6LBbeJYcApuEck",
  "key39": "3XyDAFQDoy3h1uYCBANNiuskMKHjCsBCEbpe9iRZVGA5SnMdicFJNb2LJc22G47z2aWtCRynLvzR5KxH26C9vjSX",
  "key40": "cWArmHsV2w1fBJ8jVcNrdfMqKMxfFDSdveZYLmwaFxtt3TZ1xxfLNvUqX9BYJKbL1PH8kkLSRu95NcSKxhDfTZ8",
  "key41": "55yWD3BoSXkWm3gkzZcd92jdkL1KFXgm1bkV259eq1VgcdG9uxQ5Z876ALJWcs7buUaKf2sUqPDCUtewWAAU2Zok",
  "key42": "2LBRdnZT7zdhHZR46hVyPV1eLkmohbxy8vFtQP6tMTHvXXroBAA3ozz1FQh3H7tGwWeG494KjnaWi4odz93uswb2",
  "key43": "uaddX45EZo2RCH7ZCrzXxSrMYgG4CGVZoz6YghnGFoDpMJsUQrxMXVhkArKTzoASBypVfQ8RidVMa9Lw2bg1Fpc",
  "key44": "ELZwHcJgWwe9h27dBZzinyixPnZGTqbZEYAiQBJb4yUMzxHttbCwDeqE1P12kfBvTY85o5rNS6fV5gyzfe6rcNg",
  "key45": "4dSYBeXHh1AYsYhgRXfBdZb5ywhzvqdTiPPvGb8U9uAS6dUSmGf67gsxStRar3MjS4Stv1ruTp31PPjMp1fnZqkP",
  "key46": "4H8kN86JsRHTqq4d3qTKqHeWPB3aZ7Nmns3JF2XN74jT6LXjBpLXUtVR1oCBXcTMmGce9RzrFke5MXS1WUdJgbnE",
  "key47": "MPHA5GbjYVPay1JpykmnX8VLRSmpcuS8Ywvs7a298JU7rsEwg6uNKwhgMdUG4SDhYA2PnuCS3tePjAv7z2dYB8y",
  "key48": "3AKtqAdhoFHR2dzmBti9DLq2Thguyek3vLPSoTPSYeB9LgSNbqXVyB9vTX6ySEGfVvpQGETmm1PzbKJxCsUJQ3KL"
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
