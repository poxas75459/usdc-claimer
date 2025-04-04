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
    "5CbpJEzNmM84269sZSnuxjsi35fgDPRrq77sa4tgz2opVVsLFLnGqkrXmew3kgQPbjAZA3RmfYEsWqJBLDdco9GD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z934pomEuZfhCwzcutpopnnj3Ps3wTkDDX6iQCvxAP7yNQdgwD5XBKc6c5mUDCNTNuK1bkSs9tU4fWjiUvtdHP4",
  "key1": "rV2DLUioujTSNWB8YUaWdD89zXpF4QnUVKSxpMHTEapqpyD35MByUyaLYkZGpvgBPopwuBzd1PvWxj3QW2u7gao",
  "key2": "3XZsJYmJyNhoeReKi222hiic9bkWjJqkBv4ecdfC5ww8RRqSTGcY5w7ca76ciUxJBHiietEqR9akTYUjbqhorf3B",
  "key3": "3RL55vu56jCYQrcFwxP2aFTWLEKX9RR7baSjr4VRR7F7BZmAPfGGqxnkC8i4x8PtuYVRxVV2hiTCh1kQvwGnjdjP",
  "key4": "2eZ1uBXgB5cK5ZkEvNYZJUnqZjNx1jjNP6D7b4YjjCnD9VHrnVTRrb2DLCKSsvUE6qhCWghmC3JjrNLwfxec1yGC",
  "key5": "3toVXedtaSP4KhCriSkU53wzzuQqYEhNxgBGeyQrjXNyJsKCLWebaFZZj6j2Wo43NGXHV1gHhv3wP8SGCSb8BGrE",
  "key6": "7B4kDT2ob5n7ng6vuxE3ocaDniAVYxM13kDxziyC9yRrzYRgK1cmhxGrf2C4makCgdnryy9bT1xkCvP6D8qagB2",
  "key7": "31oK3oJAWtypev9LMmLTTjtgb5XZGG7svfFiSs4z3Ff93N9hr9t2WNiDdm1oQa7pHbYD1BxPeC256Wm8pfQU6yA9",
  "key8": "4VkNaQMJdxYeiFK4H5vk17Su24HU3PKe3EZ3Zuwg99XyGZtZBLkecY3Q9WamQvTTDb1inm25UzKvttTgP1RZTU9h",
  "key9": "4jJxoWeXiJo6d1b3XYvp3Y3auxsJqX5hbvpoERtU4PWv7UTaSpFHFHw2pBTyHZBXGYSxuknvCSthVySHLmKvS4b6",
  "key10": "4wyq359aRc7pGVn99yXdMipfBopEsydUyoygh8JZV8PHta39db117Cmw3kXjduXdgoQJkTAnynXpy3rWkB6WLXmQ",
  "key11": "5bi5eZT13P3dCVqBBmF3T4gZ6FVSyrDo78dzzfaSioZ8KE3p7bhFQh4jArwuF9rSmvyexMZ6iYR9n2ABJRsbnSdc",
  "key12": "GE2hKNeDrUj1n4TkwNeTi6zVrqu5JZeALjDWiSa5NmXSgHEE1oirs2ER89bLcWdtzbH5L8vWVYAEouM45gyW9TJ",
  "key13": "5BMsqsngBJCgCdx3U3AVZarjej9aw13qYN5KadktCd8QKzg2YJiVHWR19z6tMKTzJsXDGBvw16DXhBj9GvRLihfu",
  "key14": "67CLzWtNThcDxze7AYMQehvmWPVqNqzPXoCWj9HuPDKxc3dHqLyXXoQJXqMX4qGwfzSjxyrF6LDiJroAHSWhNnBu",
  "key15": "4wdLaNieYQYNFiKidyyR2dWdwZxwC8yMgZ2RzJSZBrNLhuxkAjsoUb2CqGCX6w15abGAE7nc4b37VPchjuAWqh4N",
  "key16": "Txmj1F62gGQa2ZKLw9ToBWMoJVcepEFGJsCfP3A9RWTUSwX5rhSBrGfTTfqftqJw8msY12xqCRxvAudHxFyWRej",
  "key17": "2hrPM49uwMepQkMqYynTc6J3mbngv64o8g8qnjejxuqBYtHUccAroaYB81shGwig5tVZnTTxpPM1sAUUQtVZSJFo",
  "key18": "3Pi5EgfjDxSrvS2MipwgigsRoDN4omP51cyTyXKUpj6qa1Ft48moDvEzBMiGQq6x84kwog4BXESKoANVZK6214GJ",
  "key19": "5dh9DNNW4nDaMuiNahBCZxNmFBwU2EueNLV8RUbxVACYkekergrHWFeLruGKVFuRgAGMsBxigFTsjJtPRGsXWPQi",
  "key20": "295BfcFvWezyiwmWnNK8Hdpnq34XQP39vqVULcmPggEKXYD4284M9fzDoQra6L56z1gT33ov4qEH2KCn8ufiysPK",
  "key21": "2FQgZXHxp62y8TYjPFUQRBQhAxVohrfKJkPtujC5GKdFb1R5xbotPP1tf9cjLgbq1fhUu477Q2tzUsjm8zahdKvf",
  "key22": "3KEByE8cy6EZfZJsWYLnPqAp5CTXMz8TGuxAsHqUdYBWYmKuGLmCtpkga8Fw8WAWTPKh7q7VqdXqv23W274g39EK",
  "key23": "48HtUSEifMARep1zxRZZPmcYigbkAoG7TsoaSMdzExdGYaxDPoYbTyL5ANgYGcP7p6n77P1vot4hf1BAyfWZCsRP",
  "key24": "2yx6t7SWUBLqXuV3LEU9w8TTJ1YLcasjokgQK2d1cAnQhnFJACJZDwDtS64ve9jWD58i6rUWpYZUitHABzhC9uxm",
  "key25": "4igZxCyemHyagH3CehojT7pskUeoy7cRiJwgNxvMCJv8Z3THSEpAZspp51tRjWpiVwcyt3Fqb35wAbEyYS6ZtmjN",
  "key26": "5xsyJZ1mZRrmYFRoJojohCQFcmb9hT6RNAMiT1gbw5wuuCvDyRec9nihT4dkKijaaYLKHDqykh6t73nBBMHHD57m",
  "key27": "3aTKcCTjsgv78YgV7C9TkCaw8SLSaze4WZ25JGPckfBryFX7QHXwoo3zmMGZX4HdD3fFCz2dXo5pnndWMMZBPv8n",
  "key28": "4NEQvZPr5cBwzv4gu3JFev9JXuhQiNWHQ7TVYQVk1r4F4rUYny48YE4t7wS17ByzTEQyPKF4tRxh9ZvPpqBzAKKW",
  "key29": "TntgHDyhJqTYaiDeAz8PY5HnM3RbdeSLNgVXDHLZVoZGAK1moQjHrVexBNVo1mCLuXwPea3EqrJGxnoiwJ7cS6a",
  "key30": "ZX3ZCBBFufsYoeVEJfTDeH36DyL8g2xtzHHZdiwJN4VTYHQpUsxVz6RcNiGZcYixfPYHSUgCmPsGLedzfgH2G1o",
  "key31": "4yHDwBomUqna7b72GdnXh94eFHBFK4NCbUdTD2CCxwAJNbb6W5knn8iTMmfkKk8S4EbR4dihQ5GydzEAW8N2N4Cd",
  "key32": "41dEFuL4gFqmDDvqUsmYu3vhvLdr6ddnHHGWgePgzpCMPj3K1N8uKMhJtBbV4WV8TyKwR65moLxDSP7yGPNxNcYm",
  "key33": "2yrMKcWEtnAQb3W8e3kFuig7XBFvg3yMCZnLJbWgMfrASJU4vEpVk3unfGSaZPhGXyd6yhLP3BpcbZHp373kzSfq",
  "key34": "4skGEUeWQ3voaDctysbQ9P31a8hEAjjQeUxEkhALyMnbwHSB6g5LWt9Y5BerSFJNi6EcLLFaU3arvhGs6eYYQbqa",
  "key35": "ASvGGQPXLjeyJj5SGacmzXG7AMu5rPTxAmoHZNn8EKVAHBGDXudf9HGHkS1MaPSMFPL338RySjxTLeM636tC9Z3",
  "key36": "4CKtpTGBd4Jrg9yeHuyYiiAjb67js6dCWkQ5JYvRmhaDFDTis5QgFTg2eX9Yte7HUyqFzry3c2EQzGmCmVVUj8L",
  "key37": "wENse36jZrE4r7yqur4gtknf7SjEZvqMtiduKnXueddoyuDuy5wGBWfiKE7auTU6BuCJGPwtcXEML7ULTds4H4f",
  "key38": "2wiaNzqPjUS52f1LiEuh1tJ53YHNWduuTmZmUEjifAq2MdKwEUHCRgKQtVWjV7xAM9PKgmoBzUKXW7KcRqTZr8CU",
  "key39": "2GsjhU2WYu4D4nJyTUpFUg5BsW3LuZ1E3WkwJ8ySghNkV95vUv5s5CZZs6t4RCa3Qjz2LverWeRorpjBCH9PqxF6",
  "key40": "5koi6776dZiNwuYscrZzDwQ1Ss2uoyEifQb63y528Rsg69a1YZnNxBsKN6N2XvH7XvFnznPStfQsrmjQndeuavBU",
  "key41": "3xHqch4PRvUiLDBAp9k3zzxpXhjtJ55gLGtLe15LZJY1JYuYBVtKcDrkZef9oynqsB3RYrFX3Mcr4ok4GQFxpCcT",
  "key42": "3JnocwgbWMb1uwCQsrChqc8PKXffR6EhrDUqguBqQ4kZttc1mQEKDihEeRKgzU7SHPK637S2z74bMHrFF7PbEqfR",
  "key43": "5Hb4QhJy1vWGnVYdWusmebYXmh1yeoxMRVxqeaoFnW7H6u7hxabSm3XRVCfVedcAr18EueTRQaND4gvmvZ3Xx3Cv",
  "key44": "47x4RmER71x1hKkE5qqycYQDRgUYLPRNmKR9fn7N3FsMgxAa7FtVq7yCWx4cGC5EHrQTTtwAQQfHSzLMrJWt84ng"
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
