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
    "4sQzBWFL31WgcDbMejaPFxzjFZ1QKPu9cW4GKmCAp8QcEJQcbamcSXhRNx3TNxS6FvywwxXgAEQdTQmZ6QemmTh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23BdWcEyp3L56xi4zZaMJBKMx7MSpth39FiNYjUJ7WEE8onEEdJTscc2Sog3LrtdUriHhHafYDV4XX7nNAvPjoiW",
  "key1": "4UGEPkxxRz6nVwdAkzazjhfpyyjxftD5nyPV4dFccDyhpoBv8MfpjoNTAdCXqcr261vmog1aqnvDqwmCVwJhTboU",
  "key2": "57L89pqGvyhKRyykA1WGUeJR2y7StXPKRn2PMNfcaSVnyZReCKsz9ZEjKnpsJebwVz76jBkeuHv8uLYJ2GmfAXTT",
  "key3": "18PuQpA4reZQxxpYkmG5sFNafJDrJTUpJXrP677tvdHtvSwReZXzkwVv7KBSXJ9RMnKoBU6FkUHLyhM6iBtmDbu",
  "key4": "2AQwnL1FtuSyJkEuZLwh1ox1KaPdFiSADzSpZaCPpybTctEfYsM2iaDZ4KSXe1T2zsirQbhZdLvX6LxoensoiEmz",
  "key5": "2atbBwFtFr83tGqVgbWzMRgiuJUV8bd33w651myuzhvM3ivS5CnVSG8aQSZ9DJ3qedU6s5NRWppnDgFjtxyu4hF9",
  "key6": "4PoTqBK5YGdJk1TGkznhnHpRiEVu4TRj8tE8U6i9zwnjkFN4QpnaHKcxo4hRy71eRWGEyR7W4zJq4R4os2VSykf2",
  "key7": "5sGyWaLuKBhTd4jpdqVmyFH2xBULHabhjmedec3mb6Ecj2YQ3sfB4j5ty87y7m8Wqm9RfNjQq22ommByaTh5mwkE",
  "key8": "46SUGkqN7d5gT3kRnaECVpBSRRvXraE1t1nMqp3Kb2xsj2aqTjMdYfZgwJXbGsJn1wn42FcnrvpRNBPr5pTn2iUD",
  "key9": "4cnBbY8j9tMkF8k5ZitBjHVgVFeRE8UnJHKzXSgmCz9nUTpvCV7UHurw9qvw4HkHorG8cgV8Zi5wuEa2PXwmiwUx",
  "key10": "mx6Ep5JPeFHpfJYYeqZ3HYqYqhV1JTDFNs3T41sc9MDLCGHZyWygDS62TCa2tvmdfZahxHTizz2t8hQg69uU5Xt",
  "key11": "mjAGym2P2EBFyKApiqmo85kg5VPZCz1CRPo7jbuz4kLVhz3bcXjsAVcGUUun4JBGzVTyxj5Fjm1bgtwD8QkhnU9",
  "key12": "49EX3jYJiuTfePETSXXeWbR83JCM51kVLr9Tx4zM42mJJLCgSfmsFTTKR4R6J7NL9zBQzNs2Ao1ya9Xx5o4QARZL",
  "key13": "QxfYXr5g25kqDXFtYf7wbfFy2te38ZotRvRs6JTGRQrwSMNzHdUZVq9GGnE6b12aeRmnumYrkHmmhkhmA2F7fFK",
  "key14": "2bjhUDaDywLP2fcu79urkCeFDHztSxjpD2b52HTtpV8A3TGv9A71TLUqyeGJ6YWnC3sXGS3sj6mSfgdGpoMVj8vp",
  "key15": "4GP9EMRfYSYSUNfjgBJ3Z3ADhG1EHQe3AkQxWp6ngmbE397Uw9jDVZt2jvYJTZEmVd4RRKiYXn29vzFM2nCZQNdq",
  "key16": "2RYDWvZsPj7ovKYFJHhfsoxVSDgCWJ7wpM2G5jDBCmdNWJDgAvrEUXEM7whGRrqWVPQ52jM7QycAhhSXQeF79iqG",
  "key17": "2FC8HDWE2zhXPJNm9jjzGq2K4897fzb77Md8c8d8QjgwWPvwBaSiDicQPCntSr25TafeeW2o1niMGeaSVkwNz4tT",
  "key18": "33q9keJEwiijTNioKMK4FXxKwqSE5YVdGq2JF1Fk1qER7EoCpJLoinJWudG4BXt6bFstVRYPmkEYCHqRsGCVq4Nn",
  "key19": "4W2Gr2bEqLZqBP5XYxyuqr1NV6c2bwAxH39gpq9yiWKwtAjUcGT7mtLJiVgsmsjWknXgzJFuQa5QVJCULsV11WUM",
  "key20": "tmRfWsBumH8UGEowfb2YVr3FGAmBQ1ZbPvtQLEGAWn1LvscRse5aXMNHTiJbzxccPP2Nx4Mtg3NyfvuKgaWAxiz",
  "key21": "2Q9zM992osRhPudrpQPAY2z9ACB7wqLB1VEfM9wdNrSQiPzuUkx9EMBQQAtY1r6ktNkF2mmBGJDjt47qS2pkNVpn",
  "key22": "55rGABcBaZjVCcFVPP7JzZBFFhaSJu4SqEx6SbyFaPmXyNqbLVbfFMaxWG5d51LUSLVbg7CR7xygdPFaiDDxZKeZ",
  "key23": "3qR8RnLEPzWLux7fzcmDmSv23xCkTAtyRZvky2KcuYDsNmVF2cFkoenSqzhG6SUViHnwyCHz8yJb3NWh5CrtthRd",
  "key24": "2mAyMysFq6rmyNb1XzAiFcCSRRFm5SYQ9nRENH3qzCmv9JaHGNU8GEKFAZZ5JzC7QF689zLLqQ4axwgHUFZYe3b1",
  "key25": "3YkGap5DEJHdZUWUbnXKKtXeZCSK8Tff2diRAKVRuX5jaHSmmnUyCcsk8efTSTqWzvgirFta2TduKMKp6Ek1QNpM",
  "key26": "2AVSGmXrwEjij3S2TGHm1tmHJkwvPdkXnaKHogjsPqQXeoe4oPrcG7X2M6gqPXKLA5J9PAgo6CnE6VjyNN9TrN6y",
  "key27": "4iQE1b8ttgYfSE54cuqfeB2YVcbRbewHY8Wp4ALMkqSGAtwAnE1kvse8R3Ea2phpcy7biXwqfJS9kj4HmhgqRrN4",
  "key28": "4GZioDRy7hot8QbuWQzTAy87q8XXVjen9FJBvhjUaiKpnRWQBrytNeQCPs891NAP8LbrbscisqeLqG4gDvpS1Gz2",
  "key29": "5xNMYdtcoMpniqYwvonCTEqHBtWGPU1bTcQ2dZ7Ng7AgLUJ2E7gdQr882aiHmpVMFe5CMYzc76KL7168EsUG41Yu",
  "key30": "4HRJ88D1n3du18RQrDEc6YMxCyWc64tHnoAPQP2f7YB8U1eTVAUUqXgdejbupeSZRCejPkgUzv8nLiQMa9JC5XFy",
  "key31": "5ARWFZXbpCHVXUqFaEWtR21GFh5ZHZBo3adujMTjLpufN1GB8915SrsMQpDorY73iph5ibTkVXvgiKbppZSVnFcP",
  "key32": "4ZeLt6tGNthiab1e635oZfhYthafP6thNqHLy7VzEAnA4BeYTPCen5RABcennEPFw6m9GZSjG52sqJUQ82AcPsre",
  "key33": "4CYNmeASWfxHFMsBK1x8Wm95pSP8Xr883h7mZoDQtJpvCGhz6s3sibCKHmfyMo3YXgJHnKzYqv7EYoBhZ6avDqGZ",
  "key34": "27CQQ6WzesR5vJb9tUqrvds6n1U7MnJZhFRpNBVVvLwaF7KrbWW6hvpAeEJQm1zv6DKZR2uttC9M4z9447LejFdt",
  "key35": "pDjao8MC12AYrk3Fo3wnHYpAsTeBMfoRnmhVPt1BGVR6JXCL18abax4qFeMAjiHksVgpwmHPcAm7BzZCZUiqnPY",
  "key36": "6LhLWG8ngxr9M9133JyTMTFjVK2YHkX5ztBHApHTikr2kj65C2Esm8TAQSeUwhB1KqhNVMJ3AppGEvur7ZTU9UD",
  "key37": "4JeMM3aqh7kKqXvF4wFygBnR6LB15cjFvBLCyfQTUBXG2SXi7mULRsHG3bLVHjLbxvYUJUhhtBif7ormT86NzCZ7",
  "key38": "3RxjtPyY2BaG3saKAG2bVHSgDhNdC89SnraKpra1ea75Q84rPraefB1mpKTKFmCSnJHQBNrqNxSMN7C3Eq5wh3sE",
  "key39": "5VEfMQanmMX7HuMMxVNEMxz5KjjWhpGeEw5NHeNzmoaLVCsNdGLVJQh9ncJ76Cm7nN2BVkR6PfDCpvAgo4dtRzuJ",
  "key40": "4ThYa3pCmbCwJtmBXPBi5r9hBCE3LnD18h6V56vawMVVM7Uq4xNZvQZS8CJX4yYW52n4hXCjMf1j8xuk9XNmHZYG",
  "key41": "48pA3tvH9F6pLcCLShj7hK8z4VLCbwU6UknjK1JWt8BNY5ChhaYoipyUuE7Nhy6GRXJ3CpPLibUuVHzBrnBteyxR",
  "key42": "9odZ15AnhF4sDrxXwx23Mq9hDtA45EN76ARwDRXYQ86qCwYyhAQJzhxprcjGANhpD2QKFckPq1LjbXfjGNhbFLq",
  "key43": "3BPgSpoND8PqexxwzkkCynhPeK5mdD22fDbFiiDzoVgkbgMnbCKPSXHmTzMmvAjcsuqzrfyH7c1buPu73EyzQBj8",
  "key44": "3qcNhTnP6TQRH5L66ZA8WVvukPj95fGSncC3JQouGAyyqHRZNyH82JGma43hjyUqMDxSzxgzTQuV3peyEZWvK53a"
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
