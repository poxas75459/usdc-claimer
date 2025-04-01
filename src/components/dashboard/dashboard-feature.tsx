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
    "2LA7Zs9BsS4GMtUbSr3c7HdJvVKdzRiPuxJjckexHNJibj1NQ5j1Gs5B2VrRrRnEHpNuhHtStHtopWj1THArd7tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYM1rbwDdWbNv7zT7nNoXZM5PjvTsnEKprmUjrBdNGr1x29u8LwMRt86AxcKrcyh4DD3VCb1FcfQGgg1hnZdBWi",
  "key1": "3pLWhTc1RaqtDcpRiWiB72bSsqa9X1z3o6xA4oqeKjvwWGUZQD5WYXvKiNjRoUwE8sXa42XTPFXsGpkga377LZju",
  "key2": "5YxZ6swDYtiovmJazLnrBAcBksjEe7ooFaBo6jottXtdgnfy3zm9bcCh3wsDQWna48BoggLzzVrgs4r1b2ftuewN",
  "key3": "3uepeddRUK8EQPwDhd1nL8yVawW8Ybzs6XxpLuD74BqqWTJPDanaqUyFNngpFWEwaQNRHAN9whnAXWhhAs7gkJyD",
  "key4": "2PmkadkHFmNRXAfbid1To3BtyxEv9hCYeYxPth7NETkSbssiJezenHrUhmGFofoC17gpfxSXsTqQTUUUrxDojrJs",
  "key5": "2nEwhb431Ed7pcccqVzV5cijNLCQYNoM4XB1kqGwvwT62Lga4LD1d1grc7KsX5nDspYJeAkDnWwqcsbutLo39zMC",
  "key6": "qmRQiY1W7pK8xSLwDh8STFw4nqg8HbjfcC4kAdLig4vnFNM66CcWs6xkN6WhSpgsc4c4mgzZTMHbF4RjiHfhGg8",
  "key7": "4HDjX9YUaJrJ9MdsEcpUa5qVkgAhoq5zh4jtiCAvHPGxc5vPVZovuS9jipodxLhPgRtqj6v3hyZF9MDXrHryLpVb",
  "key8": "4R3uVVLuPaAvbG8jchXUPvsVTVUGqzicNYpCDb5mQysj3LrK7YHn88d45sjXzBZCWsx9A5BKZvgGDBK9o9z2TWvA",
  "key9": "5L8E9P5UcxCtTZEgkvegjCxuKaYroATQbFVRsjqXZyCu8dyvju8m5sG15YJM2b4pebUJCatXZnJ1HTUazqvvFPYw",
  "key10": "58HjiDRnaQk3PGCqbFLJD2S96KSPTGho1TYqjUuaMb32wjBUtXkg7wy2hBymPcBLzEFrBTbvT7b8kNckt59two5n",
  "key11": "2bJu3VWiwBSvWP24GuS4Ctzg6wg6kvpaZxnHUuJrh99woSHvYxnzVb7Ld6cgtpqJUgCXTkXzYRL2CTkTaA7vh7Tg",
  "key12": "5WqVRLa3FZ5cgrwRpZJ4YH2Ji1k4t2fbLmry2apsLCbDYSNe8Mzjxm6FB51egXeKPnGxHebvEaShCeuoKHftFeGN",
  "key13": "5Y34pFnLUVYPcHfGwCYYRpmmnepCSezcyN2FLCx6cYHYo8CNUesDKFgu9zQ5ScXJNqLDPQLrX6BwC4hm8FNmGw6G",
  "key14": "5Rxr6h58a6UwAYvyqGcoktGELgFbuUYGT9HN4sjfPxphY2mW3N86aV3WdWMdzWW4yqXtqJQTwHLsEA9K4aanB4Dm",
  "key15": "uvL1G2RLJXiGTEfzafNCKsySpKPHK8vDd9iyX9XRqEujNm39UmUjPb7bnSXYFbmhNZDMw5P5ujz3d1M9i8ybNEU",
  "key16": "2fUvo1e5hD2LX9boRMoCCm7SvF48ZQo8Aguki5CFPG5vdZfT79bwkqaywmgQAz4oeXcMBfJpB2jRMags8taJsFRu",
  "key17": "eBcSvLaR7X6Us9X9wtNvs3Y3oH198iqRyhqc69KsvuWxK6D9njvS5k7Hg4Z8h2oyfNG5R5bJE6rif2bRKz7a6yf",
  "key18": "4e7AXZs4th7WU1Wbawm7impMojB1A7wVnjSwpT2URMTt3Wujk8m4rQb4towAvYPTdW8zNbd6h34Vt9mXMKstfNxS",
  "key19": "5E6nHM3BZLMtAbD8ek2hgz79jzmzYQak4gLjWT5KN22bwLH53kbEHSqX7dxumfxdzjUQGityDxPY9yZc4vkLPdtR",
  "key20": "23ytaV3cvCfXyC1xf8ax9TgJe14TV7Ptn5pmjHwZoWxY1jLAtkcGjJC3tTnEgoeJLySNEKFh5vr9eDKKcCHjvFQn",
  "key21": "wFwcejDNM5BvraLQaA7iXQNni44Ch27q8dogNic2mVzJ5yxSAyyncSjv3gmr2Nu1BQ2tXPk8CzKiFDbtnEEc36o",
  "key22": "YPvqEJP2rA5VMWUpKfqfbrxqKj9s34zD5LSrBy3YXQy5YnRdYZCQGshc64NTC54zPDD6NYhwVqGF89hXbKR41nh",
  "key23": "4GPSaCGA3kATxbKAV6fTUc2jLbXyhZTX5asqVGByvyvisPSQ8f9yaGG6qDMg6TQ8vJyE83SaYjq5mmzwaLGFsPRL",
  "key24": "2pvuH8DQD2o3goz1aNbVzCcHopWnamJmPBXGW98nKNnMGBDm2NNxbQAw1Du2WWuneELzr6mq1VpkXiAhQVsJR3Yg",
  "key25": "38w64VvcBrbgNjuCPb2vnCDsz8uLrus9F16qxe3siD4YW154nviskZAE2qGoaqugPGaKciQQ8o949V7193cnXBGF",
  "key26": "4Vm1txZJhZr4RGm3ydThXkNxkepaLhC5Ba8o6edfzNwPrfAPdzVeUQyj5BPySaUqyM7YV5xnjttxJGi3F4fmCyeu",
  "key27": "kHQBvcsrMJi1HPMQhDp5aoNMfVRN9XqPaLoFB4qgC32TUh5Gpa2H9NNj8EX1CpddMn3J3N35XZmFUnkrFSEBsQ1",
  "key28": "BvgZhDdVyvM1uAJuQzjXom3LUfsMbCfWxhFkgSBfn3tWzC5N31qv8cuPnGRDKQKTjYLt3dswvDwtjVqrQcJVGx8",
  "key29": "3c1aiksBxfq2mYobt6yQvf38Ja62WjcscCaq2D1regzKhznVZGciGaym99tL4cBsYBNq64ByiYchFUXe5KjLXE5V",
  "key30": "3BakBXFZ4ksNUFuGgy5i5ikgfBrEmrW9kknn44RVqYkjk3eCSamfisNADEhB1HA7qw4cDMPwkvJkJiuUwGyYqdG5",
  "key31": "kE4GyXv9uwYiWEGhyRxz611qttX1rPPyu6cbZwceuX8QW4ZbE4UXLiQaU4dtUUDFZcosP46op5ascksyjjnPSPg",
  "key32": "2sJqQLh5ZBeapAZyd1ubUBRLbavNf87T6fxDGyo9fpyawSnT7wQGKEnVXAXLmQTf3WBcDnXU1u6vci2FVteq7s3P",
  "key33": "2VCofKeJfnCuqFEd6TfXBBebfVsAiu7MWh34h2CqLTpoxb35Je5UuFNG14FDWUewnpkEkY592bBK5VnCEtjQWfFQ",
  "key34": "4VBN7Hs53R1q8rKoz42qAaP84Gk89Kb1qYFxwJCseADcyjvNqwzitFMDEcRntbHkDKvwQttB3bkvmXBYPVARxn46",
  "key35": "478XDNd4NtweyRo9Kmm6WA3UVJiatxZkmipCULhv9tdUKwi1GZWgeCcH6cq1KxsgXbucCbZpC2iaFxGgofSKahC",
  "key36": "4xcghdXwFv1krEcqSm8UwmsTpt4RY2VzWTSjf1EYFstYZjcJq1J8na4bX7d34f4wgyHjuHtkwuhw9VRhtsnhhWqs",
  "key37": "pxxsTpnKyXTPxgCSYJTjBt8S5aB5mcC4KALBDyqvy2k8eKS63XEfCBZiLQCec17QuzXhA4XddaKsxz85WifWQP1",
  "key38": "Mb9hWDD32yUAmSMeWiPjnFs3XXtMpkgYHjEwgivPaFznehn1iPSYKF3acwCAHoo8dLbHFTPBqTpLTMhquJNS63f",
  "key39": "oD5XqJEo8KfR87boE8TWXnBN5tXyzwheBBKqzGsfT8bnzTwPWcQ8ti9Cg2odUbn3TkKYHtb6mbL38bo9cQREmDB",
  "key40": "2bizeb9Mve6tFZvbmcknyGxybihzymxPTkjgRqdz5CSEMUxpbivj7Jcn9AJhMAN1hePVL28VfkF6vHtidHyUiSrz",
  "key41": "2UWZL76TJzMT2DGGo2pY9C1FGP6Dxh1Z6Q7G768kfzVHUHLHd8o27A1MqQi8toCPD4k4WPKfAqKaazxazTzkfhvp",
  "key42": "5HeZjD5nWr5r68Lpa6QoWKHWyYkV1o7eWGZPrm1BzMguzfLaiFmC4D9ejRwhjUmzSmEHSwNQgAoqUBGQ3FbCwqjf",
  "key43": "4UG517czuUe2d56iVDaMUiaLD6TsiLJY3T2qp7Gu2x4RxDcfz4iD2mdKyziomvGr6VJbiuhPB8EqR7jtVbPQoQ17",
  "key44": "5F8HNC6XCKFfdjSpx5aHoH8YEw7dftGMfmAmTgwyPM1PdN1xNKjCCq6v4QRQ61ajARRCYi8BgEdZP5pmeYwgPzj7",
  "key45": "4LgxPZcLWE8C7b7ugnTzyZdPcGUXMzQ7JFMSZKW463tjtBdgEoyCNwwEUvxi5pXDcYEDgdL1FcZsDjeGUiRBXEor",
  "key46": "4hoArS3mLQgG1t2dj9EsaReXsbD8hQTjmPkuXdxhrk2L5zSWFGfZH5gfFWW3ZzBiaMZUavHtN5aYRHrDW7dKd4R4",
  "key47": "48wH5T5uQFMhkKRrd171sLXtA7osjxoSVVY6ZatP2rg8P1uVrrBaxKVDmVXbF5dYFunWZjzgzqk9kN1HqneZMpni"
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
