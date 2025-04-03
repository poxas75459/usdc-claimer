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
    "657XHGkhkniPKBbdCCiUCQm6exmPTuRZ15Acg5KnriGqVZ1XmELTgHs9D5Q2o3ekAuLScG8Q4MkyK8QrvaL6oauM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCd2pgAJFHuJwDqZo1NUUY533ae9y4jpynuDuGdJWCrujCAVouABH2LP4uswCsRvH7HPzACuLpMBfHGvttK71rx",
  "key1": "5cR3Xs6s1PdXY2CXMFMeao1ZMmfXLxQ34oJknLApNdXr4QKLNGVqba3WsMu2QLofuFfwcmpwKoyB4tvtdGyz6idE",
  "key2": "2F3WKZidag8LqpMiiiy4PdYxhJ9aU43DfYXFFCbcpU8fwffMcxiRtQ6CTH8JK6KFvSvta5R83rWPpMKRQnGvCL33",
  "key3": "2EpRtVB1y8Kyoxrhw1RrUx8A5Rsokkem6fHsVkRz5f5N3EJwcCTvyJiCW9H8RkeuULSormDm45oY4tqKd9j4jUqy",
  "key4": "yrLFHg5utuyBCAvCtSPGUj4uWWR8xy1mmsk8B2K31pERqvhKn2NSLDbAn91wDqepvJhs2dEEY2NxwbkGb42dpJf",
  "key5": "CXgwcChbi3GXXNrmEA66AP3ASZGqAXB1dRrSMdtvjnnfvBU9dL9FF3JB81Rhq3TiEWcFC8yWK4iPnkTBvY84kT4",
  "key6": "9joiVc6uMgHcAwEmzLBGqtU1kvxdbLiDgwCrKjpz93vC8KA8UWh6xZHt3vz2mG5ER1AfaAr2XtzDRuPijXMCEwd",
  "key7": "5eTiwXeJQ3QuebRScA5Uyr4Sj48BQC2CxVBwBrSFTcqVMCyznVVjmY9UBwdSX4VoEs9RejAUV7wc6wkpzEDJeey6",
  "key8": "6v2qQh7Q6KBn82Q71eNz6zaTrhPMKitxz32K5heYMLyHLF1YftLVxZafjtbiT62ZuQUE4EDCHwk5dvtD7cuQyrP",
  "key9": "4V9CYZ6mXoaBbtakkhN4U5wRngfGLapSUMoNFKGtUUoTANnbQJGFyVjymTapjxnXuDXJV42EdV1qFCaa9ee9bfKD",
  "key10": "5BceX3FdhGLCVhRwt9XtqHacTdjVq8YkQHvHHbPLHZuNynD7oPDrgHmGKsPYC9D3Y7naYht3xbXbXuvQWzryMHN4",
  "key11": "3JqyHwYkobHexa9HxDge4KTzs8zgTJadMv514N3yjr3cEnwsZLZpmNB9bkHUiENCQiDuu58uV2UX4593rnhfuKNX",
  "key12": "u5uHatBdWQrSBYBz3wFkJP9a5CWJLAgSbpFzGHKGU7sbqCGPuJormaTBzewhshP4YqsiSEVW2NxxH2ZmFLYN5qQ",
  "key13": "D1XicRC5VktX1iP5tsLCzkYBZHkAntSj5WRYq1fKCLvh59kroWxv8aFkc3YuWFg9fbqgUZhrgUcvBjTxYHmuScq",
  "key14": "W1b5dPsWd5e3uzkB7LjnpcuPZSumaLFG1sALwu4LzmfobNCXoTvyrNw6UenapmTMYrPtQxP5zWiJnENTJFL4hEf",
  "key15": "4U2oifXAAf8zigen1epRfFV7b7sirkK2qwFoXQ3Ki6u87zx3bCGSq9y4dSXs4tUxo88F48Mpa4nQYfgjHPdY36hx",
  "key16": "48TynpwCw5Rqz9HCBgq9zfwyrHAgFLgAwbgBwwEZFnCYQNLrayCBdNQDRZx838XpUe51NbT1dzE9ao8Yc6qksgux",
  "key17": "3BkzC7k8KboXQ1QRJ6mYsnkoY5ajheS9HARRoefLwwYi1BKKfK4UEsUfejr9MhiDdrhDxgxvaawMkAPk4w3D4tAF",
  "key18": "64v21a9E9ubXvjrvsEs16A5CdtLLUxGNueMrRxBP3NwMqWqsFD3KBiL3NvsRqemxsGksuNo62L8Mr5h2CFQbCTXc",
  "key19": "2havoA9QH46SDJ68MY6ryNpjhwxKRvfyDTEQ1XEpDuFE38fJUE5Aor5vokYTFGmjrr8r8MSLfS3hyq774HeCEHY7",
  "key20": "2xY1nHpHMPc4hms6PyaeovZp8FP63mhedYWp3aNFna2T1vcwN4QeCgwQmuxe3J8x5iBKTteWidY1Kb8b9FBYuWXD",
  "key21": "2sgBxq5A98zxMtQbTkBT48gvY7UZwzi2ha8kqGtozpHY1gsxiHXuCeTBpQGBpLKMCvXNggLxRD2VM38uVcjJ13ee",
  "key22": "66kmsobHLCL5P7Yg5voevs4zcetbFhVsB3ELhdjPfUHNcuMz6DAKvhfqBVxXBoiUtdWaypqQbaAjwcZnTgmQrXkS",
  "key23": "5ikJmmB8eYj71P47JEdAmggT2vJpDbCAhd8S6xkN35mTWxMGpytBpLp3FGFHQHXtWfBEiYLoT9siYa3vvH1CS4Fv",
  "key24": "3xW7cJzYLbHQwxsZCF1GSv4J1x2wwb7y59597t8UMQMixNgwUyPXZ2vxAjq2w7p9qYLjkLpxgmrZUuQZ5jrmmnrM",
  "key25": "2yPB1bH329RLDM4UFGydKKBp193QtyHSR55ue8jNuuonx2HX4eJXiK8wQhSRt3dGkiHebHBjjGQgzNB5KFgff5vu",
  "key26": "3siZWeW8rFKESUuuwpfKN6iyNuegCcWFRsDyA6bYuQ6wwBKiqttiWiXegbheT87muD5agzPnHNtqqKxmJBS52rwp",
  "key27": "2i8rdT6utoh4nQJZmk3fgBttK7NRSiMHGaDTzu7dPh63HyA4dmEuukjwGBTRWbxv8A21xsuUgpsApGj9pxGhMaKc",
  "key28": "3rk4w2LJCnjQP6h75Pjw7xCYobJeZaqCGcQuUyqsp8ee1pCALWtQ4yJgxxseLihypSdCMpCvJ9QPNLrxTNEYf92X",
  "key29": "56XhgKpK4XatvXBeLASy6HgHhje19yWhBZQDBJskWgpiPG2xoNzXXifiP6bU7NEJzAaS96f5eqeTTe9b8wgZEjzU",
  "key30": "2zegaC5inP1dKCwyYtVxJfAhyJLz3Dr2J3LYdSdUwqC8s9bFUTZAvB2e8QJTqw2fuoediequtyYMBa4J8saP7Jmp",
  "key31": "2S89mp6Sq9Wsu798pPyuavdct2w1AjkbfLeFzgVKEXmd2eQ7fFLPwoFxetCUduv1XnGSaWktQ2ZDGDSLCS9nrKoi",
  "key32": "2DyRUMHEufMTGSM52n1VAeRhxCXLPYHpvFnQZcTzTYFY95E5ZdQ8iHJxcQ6hxAMsq8t83hR5PBbqkGs8T2uyUtvd",
  "key33": "4UXBCZ3GkesY3ni748P1sQYUMdAMySwqEjanRcCpyzooDMaQrG14tDGSJT8VcdFaSAPVVFT4V5rwk51JL4PjxFBp",
  "key34": "371RhHnWm1opTmvx8VgoMhtdWoFw8tVhnkoKaZXC2HjUGqzX5puwP2M8bb6pErxjM9fayoPS8EkJkXtVnQZu7byx",
  "key35": "AEbF6w95RxwB9NbdYoThdaocy4KmA6qFY9eaJs5qrZCjj49tD4zvVoSbv2oNXaE4BcM1b5s1zKoGU4iVUFGSETq",
  "key36": "2BUtj7x4Xv8EdVhXoYUg9z7Ebf9ARLujLbPkVNkksGVXZq365eWrPMpWEyX7N1dzHsyT2D5xy5K7gcdWfj7CJvya",
  "key37": "5Sa1U5v7ps7io2rw3LdE3PhFhedfb714njTLdsq5B9cAGx4LWXgQRYEhDuBXsv5T84VuGsbiyAECguCSxWEdV5sK",
  "key38": "2dk6J97pCeKcjR84cXfbnxarSZZuWUqMsDJXXL1Dp8GpF6Cw77K2HWbqSSfMg267aJCKetnYEtbkfP4tJMH9UEjp",
  "key39": "5wuHHDAjq4cujSL9hux9Tnaa6KiPBuaVS23m5uH85Uaoo3kLPjyCGKQPTwBHAFURcBmMe5TgromyfyAV7gQBAxQb",
  "key40": "28Q7bNKpGDbeAcPHo1TAvvkVaiJi2H3WLRAVqn3L3XmM8bVStfcwRuuWH2GjZHKLjzJesFqZE5LGJjf4uvdg44is",
  "key41": "3srgcKZXCb3t1HNWnNm6Y4C28q7Wfg9SgRmNfKTuhBBraAG6pR3fQ5DkJaHSTVDovYxb1zRhy9dq3rKWgfSXGZEp"
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
