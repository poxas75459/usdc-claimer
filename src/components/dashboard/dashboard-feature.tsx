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
    "46ejpUUmt55UMwC4r4aLifaxkiNG57TFkhxHHgL7GgZ36wm2tBaAY6Tt424kpv3SWiyiZjHSnGwZx4buKaeQ8M5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4upNUBUpYjnAW8CnmDXJyigAcoJ1pigjXBSsHaZ6AxHvYYawXwfghYvwDvP6jyy5SuKBDeQ5iGDgEPSrVR6qKn1K",
  "key1": "4xYFju1fCgBLbpVx1yRGidyXhcEmdv9zJXph6QDTmCkHjE8DQgRNXB6ZSgLRPoMjLzn3Cyum9uXoiYrZVREVZkiF",
  "key2": "616CXsoHyzymtes8tGZwrsx9An5dEEMC2LBkyUjYTYzezK3qgrjRPNGvTF9mNgaHs2QgNVStmTEhXgPJNp9C7gUi",
  "key3": "2v3TCtdECkGqzHpmYThWZ4zXJmYoZhBqriH9GXDGkqQ7c3QuwP7hpHqhB93yiPcBWgcHspZEAr7EebwsdQ198PBv",
  "key4": "2jeHBRYthv5ETW8YWQFThb8EmzZkmbFMWqRaBoKDsYwvHHKp4GEJ94sqtmh8GqgYzzHkmYDDHi4mPLSVFbtKPB7m",
  "key5": "7E6d7uCrSPzaVHSymV5u88GNn37uXChWU8exyTv2QczR2TEm3r54ZZWcnH6QJtdqoH3dJX2kcH945nWAm6czs8J",
  "key6": "pAxLnZpMtDa7QhGhK3soCoCKNFtWM54VXuurNexK1hvmRWJhshJDdNtxyxUwSWFbgSwCpH9UeqScizwYGUL8KnP",
  "key7": "4F6gbaBngo9EECya3yyfpk8eoxR7tK4Yu8Wu6NgXV4uAnJHAMyj88p3DMynGkx4PBihava8Wzbr8uh9YNk5u2tBV",
  "key8": "p15BxVqd7AaXTg2QzsFBAM4UQgaCDDR96VuNV3Mxhy3tbZNf8r1p57VdReUeo9mQbZFC1gnKKJau1r7WVMcU7mp",
  "key9": "2w96M6Yj9renNTuQudfXkNZx35deGU9bJBv62dHWqdXdciyhjeo4pYs9cG68JtdK4FE4cTFMkAc1scYxMoQcLXQG",
  "key10": "i4rtFVDEBPS9Tnr5a9W6xV9zA6kXPAkme3QtQePwMFidD42JCb1iV1TB9rJvTPmgZr9wdMTuiC8sSP8xfFv9vf6",
  "key11": "5PTtrHs7bZYkQYZC3gR4mney45cyw4JQEKyydwamGYwZyjaiUJS1v8r85v65jo7Dz7yXZtGDp4DtZpeFMrB86tB4",
  "key12": "5QP7mZgvStujHhoc97qFbKu135HMcCHDfWcFNYAXsLSRF6KY3drHNca6MwBKDyP3dQCGQpc15AJRxsWpd94ZL6uL",
  "key13": "5gh4JMGd5kCj2hG9FxW2R4yrpFyFyeztkB33kXmpJiYFwSK3tvWx19d7PGRAgFnwxMKaDDB9x4PKgjywDuCemNP4",
  "key14": "4ZrtMQ4CWYkQES1WvRySuxaCJwFgQSAvdve4QdmyfvpYaTXkjBqKanUn72S9CogzSEh3pyJZAJ1eFjApEdmCRbVL",
  "key15": "5Y8HhH9hJPrPATgb4i7KSgRzWrzykCCT3GmhDUKHkaB3MfbJqCMS7kQUm3BppVq9JYn16DKQukY6dwADzfhQ1VMp",
  "key16": "29JgzXBbZKWAYbhchiVUT7EwQe36Bxex5zLwrWvVQVaNcVVyPMBobTQEBpcjjK5Y1Wc6Ko9MfLFspQW2Z1QcGuYa",
  "key17": "4A3ALYgqhUc6jkbWAm9PGN94f91cKBxm43pNZe7SV4xtFr5wamssuPH6LePeW8tioP6Qfxw63Lu6BHvqaTLvu6zz",
  "key18": "ouVwVSYfHp3y3pU8ERcdCMfPUSzb3zsP4dTRSL9rJsGhzpLdKBJEghYmMFTpxcFuDbxF3nV7ZUFn4nSmewNkScC",
  "key19": "36diAUdryvmdS5gDVfc382DcWVfhUXYD93i5p7uqsXRoyCcuYu6gnz4xzc4eyeQGmUEb36PgFqAh2fLSb6c8g5Fy",
  "key20": "3yRAuQ81HcXG8k3LDhCFkyiSKMUJnubmZuJ3PDuBNG2kgREaSzq1zTZXUWMSz2DNUzq8Tnu58r2dSd15SVE2XKdS",
  "key21": "421niuLBib4bDddrGdCMmhmnPPTroGp3o4fKcm9tgEvqucZNH2cBL1s9o9f4EBgbduzqwXkvCzgw3RF2GtU4yxz5",
  "key22": "WT2KMHPozyLUaarzfMjc1M2dqKa5mJSEHSDck9s1ZjcnmH7GrtVAEuoavUccyhFkQvHvrMXBE4fni1KikMSQpFx",
  "key23": "58BUw5n3F2FhX2kNY2mhGkT2wCFhiCigMxtu2PyRYqxnb4vke8HM6mY1f2mCMtM3UVTCutrJaXobzwdq8Vss2RRx",
  "key24": "2juqrWSR2ve1oUSSrY9R5X9vX1B7Na2ocJPyK41se6otw187RnD85ogf1ARdpVEbwYcDuAe7qsb9eWgSJxwa7gMt",
  "key25": "4C1Mjdzv7Kt8NHwi3b5nrsP3QfbywCnGfBk9d9GozhxfnKG5zCCxBPoL1pXkf6qvAVkXh1J9Ppv78ncg7cAUiLA9",
  "key26": "5GDreJxjWdKGd79zsqmgPwwU1Xo8u1iye5LPpYALBjET6GQdPTjF4yxrKZqsy5vvgBW7FNXcGi1C8WcqtPkQ6MMy",
  "key27": "4ti6a4ncnx8jpUoMbM3P3DHjVDSwYDNNvsaApHUjMPi9kWYecv31zH1JWabM5pqGGggc5m66HebCJWf66UsMvfgA",
  "key28": "5aVuS3mMrgzKsbp835AeauTV2krP9nK7WDctezkXoEfraAv1EMYUfY8zn1Xv935rPFzdzJjZLNrW8X1UvTkmtEMm",
  "key29": "3Kt8enguAaSfRLvxwG9RoafEyWwJtLxVXaG6CjT6NbFdniaMe5dunsT1vF5JAd1anPaZuotMyK3PLgrZxwehXona",
  "key30": "5qMB5egstPYFoJnfCnHGQRYV86bMEzHAG7srNV8oVBRbx4hkfG6tbcHXiT9E2yqkxsWyGjXH1mS3jRSKa1yFVqVj",
  "key31": "3Uo3SjR6VFpXj5KmRtGdQ41u4Q9BPPYeQWnmvU2rfETbmM7qoEhUXPCeGRwTncfJ5VoQqZLy2jZEJRdi3YLRFeG7",
  "key32": "t5WaUzRmvk7zSUr22HcCQdV81GnNhm7sxpxGGHQw43CwVoL2HmLsyy6XsnT1SbPV6zrU78aa8tBumop28C9L53B",
  "key33": "3eegBkUi9qiqgnsPN4A5atahSD6ofHRCQu9LNE2HvF4Edz5LcqYUkhHU4Ae3oYM9qLnvbQ7m5DtKVtDckyggX6NV",
  "key34": "4L1f1qPE2bfgrsEvCammzZ35QfuGAVoVQ7hAtKL6vgjeaex4qvQQdM5N2Ak6nwJxjXh5jBo2zSscyMa6dLFnag2s",
  "key35": "2gBUVKuZpoj56YzMr7hqCPobPzeV9LUpCPGfqpJ7nXG9fQePcZH6voXgLagcwZDjzFvsairBd44m971jQsznxoue",
  "key36": "4aH7AeG99Ych6v6oYTGsRSy1uCz8t6tvz3MGdUHrJznkoXUhr46c9tKGPLpdvauNXEaLwdNeikyovHvVjT6oZJcv",
  "key37": "3Fo9EhFV4Tj38AJisC3VwrjpiFQCZ6LFdYwaZSMZnBXfX7mAYBqJUZ81kqSGEUtHemEWBXXTb9we9c8sKxUr72tV",
  "key38": "5pcMRHCHhEt7cVkyonGAuqNUjT18FxbJTVYtAN3g1NguCDHJWjUmdSBQ5qudAEzpN3niu7eniJRK2YVPqCCWch4n",
  "key39": "3gtpgH1NFZTbzvnt3uPKuiERi3TmiEvfc4ZAA2MXL2Nbgs8uf4FKNY2ubL3iEMizwhNmaBVfrA1knK8rYCFneDvo",
  "key40": "3HbpTxGr75uCKosFVwMPuack9Nin3aVjAuz55rakTDmsLM32VsoxxGT1ZRt4W2J6Ff2WvPxKz1NAPPTmTZdfRA6H",
  "key41": "5ow1PN7xZidTu2CJ6Vf16uKkcXfoYWjnCAUVYyurzctg3wYePYkBQaeynHEbcDiN7bQwcg6XbKQJBidP2z3hEBBT",
  "key42": "3QeRqK5M3ocJYSeRAcBs1ryeZ9CUUZUUaAS3u5tVLq3XVuXHREpfkvQHSD8HnxtyCFhQkKMpEfVtqd8RY5TZEyAF",
  "key43": "4sqra5UkfpVwe3CJZEVG9vU3RdKwwEEsqtQULrj1q9inAm7K9Am2k38qV2rCE4h8G7cYXPi8LRKtCGy77vu19zAX"
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
