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
    "4TMgYFaDxdAtdi11SEakwP49LD5rSMTPcMtZJFzK1PdnZALFtNgLvztvx6e7SU8guMAzsxHVG99Y7mVav8xwUc6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcVH6EMhLjj5pFW8URmmMeASioxUsYdMjJMakivj2Cb3XcW259cJtu86sWgpXwZqNSkN8eAWJJnqPht9UeQa7ZK",
  "key1": "3mi92pKH1VyjjhF4mM1GphDbBVeaT3BAx6wtMGm1ysx1ZF31D6wpqwziFovUxLg8yQ4b9Ah2TqdYw5wtSkYV5hTn",
  "key2": "sjvArQa1V4atvH6rbKRM362BuJWftcqdzJseo7gAPvejNRXkFCnUw9RkBMrqwEFBhyo4D3CTdzPZLcYPbxdmDfN",
  "key3": "3pjG3uFB1QdKy9bCkoRFAFcMt5qnRZ7B19PiCNxFcaJfS4rvakam3gHMEcjiYNSiPWvWDY9Q33xKEeySBBVxRDh9",
  "key4": "3pDuKjdxySNp53s4w6PRjdh3Qk4oPw1SMVkgqYBsbhmHQhYK1BmzEDPJEta66rAVLTC2EPPY4H85ihQi4zdDJN2D",
  "key5": "4jDxzjBgPFKYbn4aoFVAeQbW8WHWZwhrdWFbsBpBRgr3wjZh7XrDGiNkDvT1eQxucR63KDdvs6CdkvtDH2DC23N7",
  "key6": "4M88V4pYbJfykJa8JW6HPwTKWRe7RCXddfZf3Nk1Pbn2jDi6ZCo2bBmLsZa22P1Nm1PAxWPAt776oDxG1d3t2ny4",
  "key7": "4gQHhsziH9yeoGTsCFURufzdLiDFV9ps3ouzNkNBy9Ri1WgrFoxVcF9qY5mjj2ojGEj3cuiyDsQny8tnXG3DyXe3",
  "key8": "3gjKRrG6RuDh58askzhuub12es27QWfPYHMQHar2sJsbPYz92vE67p91P6JUgsjYs4LhsHZw1vGtoQWiPJZVQxr6",
  "key9": "6G9ZumEoYX9PG7He1YygnAUkd7kjTQvtSUqcffSJ7KkiNS8rREoW8Rm43RemtioGp8g6RoVsxTWHFeDQhBtLmbs",
  "key10": "2drwHUcM4H4LACY4guFfRUvHhrGo6cVY39cA3e65bMiknghWXUf4Us1LLMAPLttyhPiHivHxtXGPR286A2pxTptA",
  "key11": "4r35HrKJZzyvfJHLfCqixRiKsyuzaFau3VfQ7ztNtqjEbv4afiPW9gZVnbk5CHP6Nv1NkXTLNEKNt2yH2QzPi2iW",
  "key12": "KCeMdfywkR6jvvTzLC3nqBXPwkUToGUGFeusX8z3NXSjmV78TBJyx2USMZBwBGpDEyFLzVM8kmLW2KReju5cq3S",
  "key13": "4gRCnUBP6N4mKrU2KJUkyJhW18pztjZCmSuWjARidNVPBFRqUKP8B2VPvpzqGbii6vCow2v3aRvKaLG79n6TKkKY",
  "key14": "3Y4gfLKumM2kaP26SvZWWNGoYHJGpKVCzmi8iQnFkVuvMgH61USSyZWiDVEGVVTfR4mVbBH5EDzrELRJVZYSHetT",
  "key15": "2TZ2soTwHBg48Ee4pRkJSJfWVYGqEodh2htXnyYCFCNJpLR7M4nmzyoZgqNvz12wK59VCnPcJqzGh1yXb9bUhrne",
  "key16": "5arZAwnJE4HPkdqpA216mj6tp8KfMR2mPxGtE4zLC15hzgsMEyUdQtsyRokrmcG6vXpnW7L7KRZUFdpuNgvxnnGm",
  "key17": "5q26zXzdDktxXVftXkqkzvstLy7Fwm65vyQfYmyKs9zvVafdffjAju3vHLqjghrck6q7tWNeXzHtLUgmT2jSWh8i",
  "key18": "4iKXS9u3TUXMWYSjFM9DtqWsiPoXpbZN9qg2GNAXQPw6ZRq2WRhDhFFaxzd84rv7Kd6X968KaWqa91P6gFyMWusJ",
  "key19": "32njLmpZAMmu5kbrHLQkhFVVhyJrdbTM5z2cHeyW9YmqNehTUtmbyKgDB7LiUqP3vX8kVprgFV2yBMS9LPAb8xrZ",
  "key20": "5mvmXXsxzWTg1Uq1E6wreN24HtsqgRmysc1B8bhUzM6HYykqR9KdhuLUGZxt8Vh9Wok9CgjvpRgUqFWDHyHBXFGk",
  "key21": "2gdHAUCNJz8bKYJvPo73Nw2ep37SDq4cwkJYkzskQo2cEEfsfGq4U29sznYeoPXy4DWmU9hCSiRiJHJvqWRwibNJ",
  "key22": "2SGCXh5HgAUNfLWM9eU5hcAk8wGTritFjv7cTiidoXXiRi5otVnbs7d4gjWKYLK7jwTtQTWyHDbjNXbAxTP4zTh2",
  "key23": "4oQZA5pccwv1y8y8W2HPDqsENFgv8Z8mF5yWuBjPQun7BJLBds3tfEbH1Mt6QJETxqXmLexWbQYUp8wkxTj3uzRX",
  "key24": "5B1b8EEFdwUEAzDHbZFv8C9EXX9z1krbtnHoPYwxG7karHcF7qHEXy1A2XmtV8DPh2vBANydFpbryRnwf7hfUksT",
  "key25": "3di3gGiP2LjgMWEgyLU25dCPKhJUEjpvpjvqG3MXchQNgBV4jBshghmw2couPdFMEZb9832H3481T5m9CCeuZctS",
  "key26": "2srBDZJEuD8CaU7dLvaRLPUyyUibaqSnXbbjSX4E2JSPBccgLUVJpb4GVLaXyJej7w8E1K4fHqCpZkxdG44RRjbB",
  "key27": "57nB5MkknNeHhy7LLJXn7oThFCRTbBsNQ14V7U82KXpRspCdY7cPKJtxrUU8iPFJHisyYTN1QMXBKv4nCwJUMTAa",
  "key28": "3CFF1zAgFWZEDouvDGoF24TW54ZuTM7VZ1GF9sK1QS9XV2wBxbsDkrVP8UoynNwBF4DStK7Y6E8GCoomRxjhe5vV",
  "key29": "RQVBhi7j5VW2Kf23nE9WpXmcSHSSHU61aK98KbBG8JahibG2BVkRo1vzkKuSys5fPQVzTYJKFcRXoYcc9Y2Hgkv",
  "key30": "4Yjevj25RNHrgJL1E6kVVpCxUTwVtzfBsq1k9u7QaWTjmzDtJVJsGphNTX4uvSMchBeh9sbr8WZ2stBp1Wze6rTA",
  "key31": "5EDgzg2CqY8DkCSzZ8ETNofM3V2yuqLa7LfQ22jvN2tJe6op6QgneWEHjX2hPEvmZwdtgLcLSjRwqD1fx5JCAcfx",
  "key32": "27vXdy2gnteR7fuyG7cuLNw7XFAPUkC5gtJKDEm8AN2Upyuj3Fxab3U7UEr3MjidNvBhkRPrxDcgNko4TFkvEv3o",
  "key33": "4ZnMXVuHYc6DXZbqXBh5GSEjra9qHmQGHJbtHwhwJMtvqF2SRHvAtY4oF11dgWr47CkDq6nsoxMCbQFn3rqPtTAi",
  "key34": "5Na7YwjEnoVnhBhe73XYtnFqfB5wN4GmuxJejVbK9nbHe3J9Cxtim6NKMH2McKRJrQgSm9dJw2DXFu5S6kQHBkpD",
  "key35": "31izD7W3v6rzjgiayvVX3apkdWPL4im377uY4G7nh1CEWTtb3PdsLTN16KMa7zaNNx1qp8eaYeQ1cTqjnUXmZdAT",
  "key36": "3xaFzqebTEibvd2oBQTSaXzXD3G3hh6yHmX2msm77wd3SXLbobxPbuARU4zeZVCcjtFmRhZV91shK5S29jFtzQko",
  "key37": "E6Xcz57LT7dYAKNLbPN7PNXg3cw4xSRw3Mq3mwebUdEdzzJWkwESiP1Phufjw3ssNrCb7DeyXuMbymtCNJ8uqeV",
  "key38": "xMfz7aBaYsppuDjHxYsWZwX5RG6aydJed9UzPATzUYZhGF2xa8JHVYB1nSzCy3cMzsr4JZmifYHJ8Znn945PdfY",
  "key39": "43cEezvn4dwiVUADtaSJABMFoqHwRu9V1eoZD818aeUuUjRZ6TZJmTJzKnct2J9GXx4NXrKzFbKs9SBzCcjG89P2",
  "key40": "64GRmJN2cWYKzCv9kVGP2morbV7dtKUw3vYmsoetggDtbEtzer6yzDxePrkA6z5m8WnEDgVDXWaCjGXUCv5QSv3h",
  "key41": "39nzbxbzVtZYgMYozNpfqo7wpoYZCMMsJnwRngTEaa64r5sL6cezDcyoBL9LH7Hs7QT6FaRZaP6VRGhnBH13V9Gp",
  "key42": "41JqChJPRNhAxZDNNRN7KgCRQuP6cMZt9QvwFejztduwy2wuTeMUsmT6jV8GPjkVn8S7SD4vuBaNJLLaCvHcGpG3",
  "key43": "5URzfNqQpN5dJ5ZRxQBHeGA6jfqoYYFYUjMMRM3Pa73wDsjQFy3eb4yQuBsjwgZLdnvDLYgdtMkjvuX6wkGm1GMV",
  "key44": "493jgyWKM5UYQYbLxZ3487XnbTdSEVSc99FoAUkzmZXkLbqHHfs6x2Ss1UaDkqbDQ3AjyaBDjyanq48R3dWXAEhb",
  "key45": "dw4N1GF55Vs9BikoJv6CdhuJ2jev744yE1gRnzqNGsNEz1Cz8a16VMP9fPQD7hoWPheXYmJfmdHFzJvjdZvM5ra",
  "key46": "4vQtgTKLd3j3pbYttXMK9iZtfpGYuXkTTz95UaFTtTNTbfnTmv1x6hezF9QnEJwPMpwzD5DGx5D2w8M1uFhzZg7L",
  "key47": "3GJZjnjs6CDm2C5ckV1HEYZk61gdj5bNLTrogpbLGj4gLLN4yzAe6QjYYBzqEBwKLaUPrwiJHeWcvSwzDFsWmPMN",
  "key48": "2K14jnTkubSe2N1euD9Nj9JTQQnyWRXHHMKq4K4WT7JHfFdUM4yL255ysMCqZwe924hTxJM8wVdPB7t6pgwxfAqt"
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
