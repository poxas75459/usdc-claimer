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
    "5dFfVHnLUA8r8KPBbbjYvHYsHaeDcBgg9PveGt1cjCGTCByNZNgeuuCdYY3RYfhi9aBQy3efSJ28Ls6zv5wJcTu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TeSTqbQv9KLLZLEqB8FidTxmLdaYkf5vwTp8tgdaFBisViGH7j66kRiGVDfLUxGHSGU5oXiQ4QTQD9CCFNiCkD7",
  "key1": "4wryooNTLNrTyaphkfVS6CiX39QLo3Uzq42YiQ26zffiL9JtyXeaDk7BHPHKKNYChuZMwNxS4tUBxvsbm7ACJKVS",
  "key2": "4MnikyggmdGiZiyrhsx6LkJ9LbbTvTS2zhqepCWeAeAEyXjRfiUUHu6DPooUe3g5MPct4ZPxQJMAmspKp3JchwBa",
  "key3": "2vCLq8ysp4HKMb2GasnfY6eqtt2dBPrNXuviXFfy1dkjYTS4L4x7vswtUabuxDfrxDZAKSfQtVaMvjup77wLPtfw",
  "key4": "3Ad4QXFtawxKNUstV67iH1LSedRR3spP9PHnBuDFFA6iLHNwSUNjEFy1tqEmSbqMxQHoeZR3vzga1ANxJDtvtR31",
  "key5": "4GLE2i1suuUkpiZQ5syUJWKcFKJR1bP4AUTGdcNxkFR2sA9ahLBQcZuW2SNGV65mLLaJbsq39Dqe4WW4WJgF6119",
  "key6": "432kSH8MsCSPUia13MUG2FonWLk68mv6yciL9bVErrspCX23cfcTPiZB21qPG8u8dt9d5sUicfdQoXCfBskVecni",
  "key7": "66XhqpHq46UbtVFN1NEQJpTUiFfAk7wQ2JfG6xp3sufTj33AiCkoD3C3AFAL91bD88qV5gsWSnHdvP451CFDjs2Z",
  "key8": "3YejERS8KyQMBemgkcZ5g3NVMiEeEYPe5F1gpCJQkTkj6PQytDtgE3p4k9S22PUFaKgrV4AmqSEgQ5cXM5VhMkW6",
  "key9": "4Fjn4cgRgA3qmmkgX7tt4kv2TnRZ2Ha1Vg6TimvEHpPU9T1ShojxDkE5yGrSjpQCJmN7K7Px2T1izSCSC881182v",
  "key10": "2F89tqTR8JWjmUkjymsVsxvqFTUNaRPi38ZYepqdRQVKsHD6i9Q4DtX2D8LXdg9EsczXW73gmEFgxZgS33DJQHmC",
  "key11": "24KZUzVAaunekHDT7e2XNccSwA3AnbMow5SDgXZ84jqDfevzk2VJhcgfLFn1c8jnTk1dzE58XLpUsknZcMiJfViX",
  "key12": "24dVKgbVdBn3XmKr8TsPQAsvfsdjQWJZr29VBA9Ca8DmDwTUGygjhnmwCKT7SmCYt8b76bQM12riieSUfp2vNL9w",
  "key13": "zVQH5NpcZ3bBnT2CqhS5cxnsjsgqmZ4WRFNgcbpiFMBKUpVKwiDp3UWDBnpSXe4D9ja4b1TDgtgiRjzPPuLRnUq",
  "key14": "2w2Awqd4jxi8f1UF8aRrwyDgqLwG4BqzN4aaocrcMdMBoYtiLFwbFS9i253tWJ6JsHvtu8ctRNDfNagmxQLNT3ht",
  "key15": "2f16soyqxpyYGiue6kFf5qQjaRfekHo8RaD1pX3aZbAmahYNGDuX1z7wZDwVRfJ5CQwJd5Mp9s31Q1B5NDx6MDJH",
  "key16": "3egxztNAY2cKmJF96TKZJLmjpp9b6GidiUoJgdWjpdtmn6bZ1TYtL4qDtpdoTRgUAFrR3o6M5mUYS8PnghQiR7YT",
  "key17": "3xxbY5bnX8BHFNJ5VDRwijpV2vQmMV6e81vjJXU8eiRMSqZpdETiLPvrfAxdLZB8wE4NBZPE5JdPExnxYK9DTyzm",
  "key18": "58NwuYexNGWQH7cDkq1Ji2uZG6TtacqbBrgDNfXMvKGQFLE9TiuFfRVo2fRegeCaQ4CuFWhb46n2v5dg4NaYoFd5",
  "key19": "5czNQdxtPnjer5BRTy3uR1HZQR1JbJTbW8Y4oFkiFozWgiegKqH4fdVQ86WMaxAct3pnAaTrF39FYJbEQ83Zrstm",
  "key20": "rUuKAsS6MEi5oJtagEpZz2sNdrBqQCFtpeFmrvN7iz3YAw9YkcYriwEpoWDfdeBSmT4sjDUfURacVY8t3qP8xMr",
  "key21": "3cd2eSFmWU2ruAbEaTqKJqcn6ceiMGvWDVuFd2cxKK3RLk6hrdwmi4b7YjSSKNdFgJV1XrRFY8RRFGZJHPb3UHVy",
  "key22": "57srDevgBeGWMXxJU2Nzfsp1SkCcqukBWAWXa1MHKmaxBVwzHNuKTX2gtY9zbw9DXwp8KRLEXSeQF26cci2J9TVU",
  "key23": "5jXn2B5Gxixx6yn8eMCYapeNLDWjwTJFqrMRKbttYa2Fey1hbCMGcpBdFQVbe93zwe2ed5uPHGQM66vnUouSB8Cs",
  "key24": "5uVqF7kURsqAAJqdWrnP4M49tg6tLPx3sVfGg9c8aEtZSdVT83eQpsXmsRPGF9J27y6hcAWh55qqeXJvq6rYvok7",
  "key25": "5mhRuzp99P8iLr2fESjtfFC8qhPiyAZ86FAYJ2LVSdCJPThf73DSfS24xjjqDLgbQ5baexAXPCqGpzu3qpsvfcse",
  "key26": "5zuC9hLwyd4KdmaXBGVBXw8BtBLFiS2e99RdCvFJ3zPvSv8nY6rvhv1gbBQw5Nu1ADqK8ydh3p7Z36sCbT16EH49",
  "key27": "7cUDbLZDyMqAwVujMKzKUUHqFrHQ3jdWsFTumFFEr5FDT99J42fCP8PtVZrRy76MtG1jWw7BUjabUVHPxND1jzQ",
  "key28": "3M9oNJVZtYhhHqRSYGnEwe8GeLd5mwkCcrKy9Lpj2AuCnyfs9dNK3kzdHnu9CCoQyL5p3vxgTJfiaMmPpGc1sXBy",
  "key29": "24XuD2hwt8Bo6MU96ppvTEvhfcRpGn4EVyA3GVTmrczDDV7Vp2oaTZseXfDVGPzgMHT9ee2sBkYwd4VtGoYjzk9T",
  "key30": "23ZcCzEujuxLCfLjUKdxQzL38H6fZseeK6mpQ1Yd4cFbPKEGfTNGoeMxuwdewRWhzdjrxzm6xXyn8aU734wNkrTH",
  "key31": "2pooxFqfm66E2R2vPnnQyiGPYemxq8BRcpSEvoukwGZWReMTXUujQnBbZibsAPwWpEt8ftAdPNcJySz2z4PRCQ3F",
  "key32": "3AwMxgybraj8aQZGbcKL6cNy5i1BxqAkATQjLMRiRUefAR6CAD6PU4hXX2FsCzq9Do7M9UfsYUCbw8LscBzaxBpC",
  "key33": "5CN8x4rMmTCtTPeZ1515Zb17PxZEBzcLQkRJfJhiFz3npbV5JwiMyCtaq1my1vUFx9WVJbYTHR8doG2uR8qPRjeU",
  "key34": "4Etukt2oh5J2kLC5VUU5P6kJmcY3xdQaDYP8ERkQbxGSivfaxVQVrFC4hgsZDa9VGCdbmGAkJKsjJXqLEaFyN6ac",
  "key35": "gRmUDEU1KKRkdQFPh4bMk39vm1d4SEkERpruVJjatkF71duTBsryuCEcm9pUv8AQiqisRjp8f18EXzSkTJVvrJ1",
  "key36": "62piLJviuExt4RHVwRRGHqWszNHoGp7Mu2E1pugen41FjEMsYSrsCKKPRRnHGnxit299UutSM5Lq6xvphnGmzqnp",
  "key37": "5cZLKo8X4MTT1en37P8jH3qeuFvuzX1dQQUkDUDagfbdv3W1M4NmzaUk4N1d7MeiRGb9THd1ZpL4ERxFEUnPwCWQ",
  "key38": "dxzf9YtyMbqUKACj4uEpLyVnFMB5LEmFeuXXenxwuQ9X4kzai6rjZVR1cR3KD4YvRRQwNZfuzQEZWjkLDavF8nD",
  "key39": "2qYx85YcowvNUXx5PXExeMcubTYZgT6hth9zfYSsT6hgSZ44TZNcwvKbX2MQZ8JfPk2Njhnz3vRED4tZes1fEBe8",
  "key40": "4k17MEE7WHccectgYnWrVJP7EuSepu6zZeNoiLCVT5w62cSKaNPsHHTGJd52CiAmfMWg1iUqKHvxNaLZ1AQw9H2M",
  "key41": "32T2fivwxMWmaNmGYdmEuaraXN4AaYVhnp91yMoyi9RXWQNjoiMgkvxLBhNnWZnZ3p6q3rWVE9CAFb7LxCsKXe4n",
  "key42": "3dnVuxsYKQiTHNqKUe8DN2mtS5VgK8rXMQjFesC9QXGEJyHG3NWGEF5836yb9UYUV1Z3TVUwpPHSjAGyf6ajoNFg",
  "key43": "2anKuh2dqZoSdnL4tGrHW4YDRp8713Ftsv7EpzASqCUa14RzR67tPeWLLD8ojbPDkT6yhKZRiNfJDbcheSxfuTui",
  "key44": "5nJuEztLPzyKmRTdi8KqqQ4jqxCLJXCi9FTmc8rhfGJiX3prh3v9w9PDVqHRK8gsqKMuay5DaDxnWFANuGCLpwEy",
  "key45": "2w6pd3PBe4JruK1XVmgDHZGtgAzBLctehE1QDLGe3NjXvfva4PNfo2ZbKZaAzbNhDToEN8nrJNaxYvpnAWJYR5aG",
  "key46": "3AdGYEQoqwzUysFFYYPZNPfutS5zCvLAAx4g2zbJFqMUW3KZ96q4yApmVmXzyTeS5xwUx8aTLTVPpCtbjTCNQcyS"
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
