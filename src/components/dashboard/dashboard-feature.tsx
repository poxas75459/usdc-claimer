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
    "4g63L9QVARzjHAxxLrqnavUbGvGyRo8KQ65NzgJUoLVi42TZ5nEruMBB2P2oMPbt4N7Jat2cYT9VRjFDsJgkDX9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cntSrWVgnah3x7WpSKMnwxuzGSKYSgAyoEwG88cSJURnn1hCA5sLfYgxwKdMkZ88yLYdKBRfkB6EFsewXaGUaTH",
  "key1": "ttQHN8E3ow7eR7DPeMDZBjPycQRPnNmK7UA1z6byJZRyCMopr14Scqb8PiHwip2tE4q5syGo7D5DzAp16NUph8w",
  "key2": "4FjxmrxoYo6Kf1MhJn7fG3oHAdyWjiLMGaHD3dSfsLXnuRRsXRD6FwsDawSBp49BKPTKmir9hSuG21ZD87bRbMxj",
  "key3": "4rNxFti2u8W73tFBtXeH46aM3hvvxNjj6qRZ4mMXWHJmM6TNgvyJmwVaQT5arM2xoeY4cxbmYXWMtFXAENJoHDoA",
  "key4": "3swn11TFCh8RpeBi5o7LAf59MDxLsUfEa8xyapFTuFqoxDYLVxPXyZ8ASTodRV97BNdUPrmwJHhq2ZjwY7RdDoAL",
  "key5": "3PA85hK9oXMSD3MthcmwTfAGs6i626zAaQnCMDeZoRzjN2fCKvPkY1d7mCVkYRhKQQMmFS7hGHPmfuUWgXbsV8Wx",
  "key6": "3p3sZgobH2XZENptu4tM1bxTbYLbnkye7gfoCBs2ve6Wvk7vFex8n3wBa4FyYRezhLBXTxGA3Kdi6DZTmugmySmX",
  "key7": "BCNvWq85P2tNZcbicv3jpLbd6hxrPEaUB3TYmf4fXtTXC8SADThrExVs2gWkLHE5x1Ki2cGYrHnXtwTrGAPEYvR",
  "key8": "4TJXdyYNFrkqSvqyXszCtR4yx6SuyKeBdwEdRmCC1try3PucyVt2wvhw9mQS4Xo99TgsKSxwVr9jC82UCxMCR4BT",
  "key9": "4y6gMCqfwNLo1iJKu3fRASGQugUthjgsRpmwV5rD2mKztnz6hFYKJFfyytapZgvPCJ2t31hAX3hv71eyGS4YNLEC",
  "key10": "5j6fiiftn91mrMWWsYc1vTSC4BLBqa398JrG2EWUaXq9cesG1b3sccK1gRM1V9QjtdNeVRf6pQrhxcGSgRGwsDMy",
  "key11": "8W7DQhQDcEXNo9Lz1Squot8q15EGeSAta8BvrkEYm8J7xDmnrMRMipd9dtRM8yL8ddenYjv6j9tJm12ayfNg8FQ",
  "key12": "26dEYvjYuvAhqWfnazZugR7jT5bw9wYxRhJ4hYA2wosdnQuVKzcKnFyQhwXJTuf9RezRcnxS3K6MGSbcMZn96eKX",
  "key13": "3Mn3qZoZxqotJjpysiAmPm4wyqkaZDDqWNUp8UTk6tdLSXPX6DudtHAQET4WLToQiDVW14r4xNBB4vV898tpjcqL",
  "key14": "jduvjj3RMqNaKJpdL8iSmpNcF5zfU4DabwdPubHMrsxyG5qhSVHvo7aFVKi5dJvoMHKran6fwPHdRR595mmrjWP",
  "key15": "2LT7KBBpw8PrA6m2JgQT6hMyuosszqJWH7jMkNuTJoc9ca4QYiAPCVAwzXTZCZnTQtsTVrGpuad4Uso8oSZN1r8R",
  "key16": "3W3D4B2kLf7ycxvraBF877eZcLXz1dSxFVAzsK5ddC7errrVBebi6GEExtzrgtaiEZdxpokw4mUH9t16CJVwTh8z",
  "key17": "5WxLcdpYhSd9LV3JpUu73cJjWm5iMhP3cXaktvw5pxyQr4YZxJAs1bgGwdTUergymNq6ZN55TN91rFEaE8ryNESb",
  "key18": "2GG2crCN6Lqkkz3dma5riwkDs3ktRSG1tWCuGbriM1zQ47ctFcRQz12jzbuETFzNthvfehiKXDhjCXmojmmRpYLx",
  "key19": "PxyvE6yXH7sqLqPrMhPqD4hECzyyBZh2UgT7WZag1QmgdqVedqQL1tT5afCSv86xL7ZSXfSNs6Z8vjaj4ShminK",
  "key20": "3nVrdHGjBGL2BNkNTqybKZWUbvFfNqpjHs7rms4LX5t2KrtDbdhSQW3cXc5LYYRhmZnBJKQwNoxH26P7PmrCbxKQ",
  "key21": "5VCfx9A6nqBpS6vtb1g57Bbi8vMFk8LTyuQgX4s4wC2d8a5QXq2uBz6TVGgsgZJGwcrv1krxEzAi7ekmGAAM88Jt",
  "key22": "4v4RBVSoSxV7Lk96rSWWAQa9ejtTpN2aaJR4stRJr45d38MkJcxdNZ3Ke1oZJAwDGxTiJZPhsFGK4PWpW4dtjDn5",
  "key23": "4BSg37aX3vJZNUcaAaureq8zMG9SEzK6CnobqGRVPMdzNeCzqu2h1dYGiECxNfbF2DoNPPQcHkLqk153JHKTf3us",
  "key24": "31tbdNpKdMVYJSEGhx2xzzjELpeseL7atFfZqgj9bJ9CD8Aqv52pWma4S13QcYzj42PxmeX3RtzxnkEjnTPhiNYA",
  "key25": "4Vdpw4ktDcYAfDHE1SR9fzjHS4ZtX4iTqPhNgFCwS2dYgEBML5Y3nyqzHEisKW5Nuc4CXwA38UmBrgbs2mpuGEpn",
  "key26": "PPC4KGbPv9PBQWnaqj75Wz2XZJBaMtUjuCwrWfscyrUhU9Hu7UxTseqECtmpHGYoGUzccV7yXfbP8HJJV43WgBH",
  "key27": "PRAYwPipnv1aHNaipj1WNcXan7E87KngPoMXoQhxgvJ2srwr2xoDXW9LAP7rAmihba6SGzAAKoRk6Pezxw9FQvy",
  "key28": "Ln4JUnT3vF3UopCx15S6JdWgaPFQ1b3RQgd2rNEZFMs7HZ4vqmKutWowsQzcFoKVZzRYh9MCFDVMk5Pwi243v9W",
  "key29": "26aVvt1qJpYEaxrZKfzvZsEhRUcXdgVQGd3618Fzca2YAHW6DxENx1cRUhX4xg84GWfwA8whs1JPEQXagp8fjc6b",
  "key30": "5q16XxYP4KhPkCKwzMsC8Dsk49j4oeeQngEwUWrT2dCo29RjGL7X4FxgDVsMfrLWsoeQ2xwfJX95JHExEUkCSSm4",
  "key31": "5cvrzPGazT6M3Tk1zNe2huCn7trDrWGBnc8XKHyCpS2ZzEZr62DGcJT1tYUsQSFmZK7zUnD1c7fKT9jmDB9gxqzp",
  "key32": "3tRJDQwE99Q9uxWeM4PrXwpuzF7JENKTWbdYxVK2nSKKpkRCkjuEMjVu8pbigVhVsJJAFCFVL7DzuRaQAx2RAKwP",
  "key33": "2RAjZfmhs7yEL3vupGdgKFBTG9sNdSpvfVLQ34cEXZcfPDPsLTXhcdRV85HndwiYzNdHwyM42eJbcFQmru9J6eh3",
  "key34": "3cwcaUKg6fDnTcEPZncofgZExVFVkcpgtVK4oFju8qxnSean71WqjZ5Dc5G5mJ5GrKC3aRqfxxNKvs8iVi1pEgUT",
  "key35": "PNUeaKUSQdWV2HgfBsFmqwbNSUMD715ndhwmz94a8j2htkr6iVehdHD64fsuVmRySsw4h986sfyzY66CDnCNv6h",
  "key36": "5DMQ7FLPSDBJdmdn92vaYbkiZSZxQLJvcXWhZjWpst8jMDvnkeFA7An52umJiY1QBNJtBXHnVGn6TWdYcDPG44Bb",
  "key37": "3JoTLvcrzS6pVHxiSKhN1685W3xVMtAnwA5zp49VKp1G78yDW5obv9UQ4C8GczdoFa6mAVhaPCKp2VCR9KwBhbBX",
  "key38": "3fPHcAuPooMvxvNMD8xLmMNWBV6Yqwk9RViwTe2NxqQWbbsrD2pR7NnzT5BMHvcyzsQRUydMMCRFffg4ymTG2bZF",
  "key39": "r9aMTu6mp2m2h14JARzGRvLwB7cV3ZTV8jyccqKAjevKr4Xgi5ogz1eBpMZwoWKLka5GdnuUQEuaHjigTFeedZW",
  "key40": "3ckd3fhies2u1y9joQEfJqAzvfMWo9iSdTFyCyR57UWf7viaqbDGniYbvJuRJCZgZ9mLYjDMCJXP2hafckLipDVE",
  "key41": "4eYeq9hzUm4crteSNjKHquS6MppWZnTmDBpySceS9iLNXBfYy3KXV3bEKHQP1SsCZ5TinUphGE6eYSygEVt7HfMq",
  "key42": "49VXtVu6AH1ysCTofH8S3h3Wabpztb75Y9mAECjR2P991NEGkwTde5VA9dhSkg89qRuc2jYbk3mpdx3u3JnMBVb",
  "key43": "5ejoQQ5PNbptAW4pigMJpkohKZBSTuRT59HnBLY5qH8rCWC1wNTQWN2NtzQkPwzrN6eEgAQSK5o5awFNWPCcPF8M",
  "key44": "2boy9yY8ydo4bQ2KU1vDgfbVWzTaxdzmVYiHzvZ5pc5oW6yppmSrrnbqJKPK3YvrSVFCYpGrSS9reYwUz6oj99KF",
  "key45": "3sjvsGdSmxZEu5BeNg43YHvTaWsmD5KA1MffsQwHnw6x8G1K3XNRded5N8oCr8ik67rMNRDjXrcp9NQeBoMrSbWD",
  "key46": "2o4Smo21MNwiABtDdWcZ6Rr9hg6cscCYnwRPYkK4XkZhxU59L9Ay68SJm7TS5uNLea2jYwYR91ypyFhJCWAsRmtT",
  "key47": "3bHQbhF1LhQso7NJTRYMkymxgbxHNthkvePXUz9ZqyMKLoxCvCr4TMqDnoQu52qiK2RuzLULA1QbbLoSDq4PB9RJ",
  "key48": "5U96f7iZkPL5exap1UBSpG7jBTUU2eAp4Gqz1oamABaBkCJ14Srh3knFS2cKryt3TCzdGoWZiT8SXiNCG9t92nmf"
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
