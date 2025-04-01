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
    "2jFYNCfsvsS2PTNefGGdTfu52zu9XyxC38m3pgHtJD8CtL79QDYfnGgHfySo8RS29ntBgDQHHXXxE13X7D2RLziY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpVa4nWYJV9jwMmDw8y4B3KgVaxnWGE6JHu2rH4vd6CHUmaVtPyMfvR1hA3FCrhLWFsxgroU71RyLyitZoU9yQ4",
  "key1": "2u8xFGWBM3RNxQE5mSoznjLFs79iLT8yi3Zwp12GNPaUhzkusqyXJjgh7DMZcswQ5GPBdTPTh1bAouszT9BDPfo8",
  "key2": "MPcLN9X2Jsa5A9dGeoegK2BoZoTu33EmeneihRXLsS8RsmiEPRGuG6EKruabjU8NDUawqxcLKFLcWbj9WCyC5C6",
  "key3": "66hDN9xwQ2VytsQYBFBe9T7PpheqGxpKAd2s6AsxYhUokLqfRm5Cugssp1oagBFxLDTtrbRkeBLQUPgPhcGVamtj",
  "key4": "3N9UWEWoi4aUQVKDePXgMTVje5Ddc3VaoHsXgqKf2JumMv3YFC1BGdYuDKxBgU2fD8W3WM4fcHb2ALJboN2oUn78",
  "key5": "5gqtdXcdv87qdri6yEXJULFyrPMp3j5o9MtZZZ3z4A2G5vfJYVRdtChGP4zQ2UpFNCfx2SgrvAbRQZ1XnsBJpBJ9",
  "key6": "5WRvXwH41T61JpdLxdfhK2MrbFX6yCAmHogpWNCFrs8XYWBH8EsPYeWoFd4wYkau1z394jpQWmE6bmgCspCE83UZ",
  "key7": "2WiTgY29wruspZ6aNVdUTNhraRZmzLHUzEEifTC3vTTu4k8Zp1MvLmo2xy8cnNewQcxi948ARE4ut3cBez5UTVGa",
  "key8": "V1q875YRXjdGYWKiuHjH7CJTSGBiyoohb9vpfacVMtHMCv75BBvBS5MYvJxFwmkTMmGJVwhWH4J4aD8h4JS4HCd",
  "key9": "4DYK65qmCi6aeWyyS6e3vf6atXLBbgP7DPxjHLbFmtsFc3sNhpNUPBYUVJ8PuABtRDjdrLmPn9nA1yMxUx2iZVjQ",
  "key10": "38oiZFCBQFC9SYxWGmY5Up8Di6dECyXuBcdbPtauPhiDRmgMABZPzWuTMBiFHoSjENzbaXoYdUzxQRm4naQDTZWw",
  "key11": "5vKCQ3ZDNKReutHxTF1ZLsNcQhdbm2NSbrd6X7G3NTiqw9nr56VKa28YRDvtMy3gGEd5aXobrU9VChWk9h94CNFT",
  "key12": "51MirRG9T71T6mHFeDZ1t75katX1kENjxj9QWobzcHJUnqwmQwvmdULUdTsBizw2xgjH6WDRgtJtG1R4x3UUjJaN",
  "key13": "4GiJzbzeasf88JgiUyzvfZmhzixh3YmcJ5V4JsxZAzqoCYMJeNaYNAeieW2q4CKfB6qk4enguU8iCQQfu4DmzMn8",
  "key14": "4WrUBzo2zdibMQRcgTYBa4RQDBKHEbTfyjp4uuTBgRRTRVaxHmvcqiCtWzQszi7ZaCSruFx3wBGjtZE8MsetWs2c",
  "key15": "54iiFenqXhNLghAiSwcLfzGyAMVxe4ByDUQVkrbE7uibKUxfgSG4iXHPReNiyenfijnsxDuQWJ7zhkM4H3KpGXqJ",
  "key16": "44bmPmTePmvRJQRhsghrDQocxmryj3UomptjtzdAFHqFnhgwKFXJh2gasWkq7axKKzGDVdNpHE1ojMuzfTYC1xzS",
  "key17": "3oEnApxpGNCRmNhSjQ8iWx93zXoKKWP965zah9ahi6hnYmGbcsvEZGUK3r4aX7bBnppJzwxyW7us31XjdfDr82s2",
  "key18": "46W69nHCzxaSZjEfM8Z4hn6U2TL8zqbMUy45g3xveChcAiN22NsonuQQtaYufjx6hrgfkCWMJgv1UN66QFqLCrt",
  "key19": "sMRtcY3yNShoMJB32JvoMTeKzLez8ow3b5qggHpNJ43i1LVZRNTSLUFfA2LWy4dRJJqk2YAvd8KWKJHC2VzYUmT",
  "key20": "5oBdYGe1wneMCAXx7y5jxMDnsZGKS27Q1newRuL3YjXz99ZzpkJfGbwjjWaZeLYAgyZeKWomYMSMUzeBqZnPKgJ9",
  "key21": "2kbK9VYV3DMs3VMei56SToWpon1p7wn8dxbdaYyR27JK3Q8ynp9UBisSZwHuwriwX2HXEa1XgLmpSTQSEzJs5Waf",
  "key22": "5Qsy2qQNxmZSmDjCEmE37SUhsWyzgvjQ62oKRJZdAfLEaDM87zRTAuCk2a3phg8t2s3snoHTD8T9rez3suDmWspa",
  "key23": "vSfCQiotA8M6p8NzpMuJFoX8PcdDVZd2PRD6Pj3TR9QNQBCf4bGvLAa8e5384AuiXXzmWW6853PnutwXfyWShhj",
  "key24": "ttbxyK72QosDDpkmZaNjipHzgqywZuaXSYsDDERBzmeNZTMeLNLBoUGcKGm3VzX7ADFHXNM9UBmR7dnsFZ5zuV1",
  "key25": "5NDRk9WQeDDZGT7mX78W9rzhYjK7pFG1wJkK3nMLCobS23Zp7Q6PHk1VQQtDVU2mRtyn1SvLByQ7CEenqBP7Ju1",
  "key26": "3a6A7244Vg4y7o5cZRiQ7KfbmV5yZoTshtd8ue5QjX99ngkCTxz3Cxwv19mtYkoZFVfkNAgziHq2pTjUuVFsqFsB",
  "key27": "3DXsDuFQBDVQosw8diWznajV2WUNwctuiu2182SiM5JntPe19egwNxSRbfeZsRZSxC7z1LzFs61YYqTxf8NX352r",
  "key28": "2ZCjpkrsCuwYShqCtFaaZKnk9r5J7eMcCUNjKrdKnsRPbb1pEk4LjKzmeGzvTCobM57eH7bjX89fhK5VVq274EC2",
  "key29": "2XTDpGcxbuaMhH1ksuE72RH4jaUbVkSG6PhEBLSu3cRmMLMV69iGfLhpVCdCRiTstaeqRQH6Adg5ZBF7Ps981EbW",
  "key30": "33rAYiyQS8eymNBFZq46cgLSW93g2Uryy8Wpwx1hDudBFsJf31KRZ3vRT4cK7kpK3yQehpm8msAWG3YZDa6a7E4j",
  "key31": "3AYPJDiEoKEaJqWSUVgZ7ZEZrcSyiWuERLxJYUdHpZSM8CatS7Rba5uxn4zqGUuw8LDCqQbCSLPWrNHcw42fNGX3",
  "key32": "4wH13Fr8WMppmQVwGE6BnPHFCjU5sBTatiYPfmCSwzNpgzKjzpvGrbYjycqqo7RVDYPKpnywAFGBKdpQ33RPsUuv",
  "key33": "HZrNnMbeNfE8eUNcAW3GerFBV2mUwgRQ7dx1Q1Up4dbLr8nf4LLcwppsn8RJt8LX73EaeWcnDa3QvVJUt8PgYCK",
  "key34": "614ZxpGQZG663Xauw85xTv3ZTATwTGhH8kCQCRfKkoP2tFcNyLqah3k2sjQGw3xrujMLbgQdjP9tKFQ37pfiw8Fj",
  "key35": "2mkJ53v8jNHnT3Gno6y75KdAQEa5xm5AiKJbPJD7Hv5Qfuv2tMm16cPK6sGbrNnf3a6uCzKPzzDXfDNz3CMzPy7u",
  "key36": "5easxqxByL8ULTxUQssjCnhgHfFWtFkYoTwAeM5wcNbWxqPmVqvKsd1xGeacfmcqLCxAKzD67WUQCKibS8RbFUWP",
  "key37": "3ZyjjqkvXtxHwfeB3W7wxaRMeyw2bpwLGiVqwz9D5SERudjWvMToLtUEbdpCLptjUafLe64g8zJ6h8cYbvsVF47P",
  "key38": "uV1FHe9AVeE1mKTAp1PPCuhASnUFuyNCFbBNpkpezwUGWfRygu4B7scqiMHfuBUxuPyH9qhcQqStAmwuwMBPSd9",
  "key39": "3TwAx7iCCwFYv2Z5p6VkjBkS89nX9upQyAiQhnbpNgnhVh9Hy72DJH6NWCcG7xCzddwfCMxxP5PTqj8MbASufW7q",
  "key40": "5d9fFFXky1uKZMsxguvSqZjbckDBAUb4qvJxA2w1CrLZekY4JksbHrAbxXCpuCor4LqwcywTR9wFC9wEDhX26puN",
  "key41": "5j9uHcvyySe96RYXaRAVfdLzfdHf1joYpSaG5tRFPeZfES9jxGaFFUPJosU49jdihh6R8qvcEBNihxfawgFnRLRm",
  "key42": "4qMxKjDbEw9bS1csJCRWpt2YBsrzgdj6yTpgBzV8idyHK6qWjWpMPom6t7ohwDmRfMtGQUCkUQ6Zg1iQoCFMH6e7",
  "key43": "bvcCNzcGsJ8xFZ9XXKLdADcDt1FjeJjLZM4X34YocThLcQsN1LkvMDAFPUB7cBwxWrtSwW8AzvLd6SJYCjHb3ta",
  "key44": "4VxahRdoyMgz2PUEi5UJzoa9K8wRQUqRa9vYwuujz9shbwzpnsMV2epQ7YePaQJPbdk6fvSNU1kiPWGA1e3fK378",
  "key45": "YHYUNqySCop9kf1yLCJC4jfXjS5TqUpxpU4TxPcrYAMsVHwjJiCpmbKJojcFVQp8fNij3zXN6Tt21SxnwZrDqdd",
  "key46": "2HwS984XwnJDknY8PxHDGt9hqjbUqNHoyzgCKrdXPHdSj98uXopVhrD8BCMWtXREXvMJjuxRtV3mP2KeVrAFMqCd",
  "key47": "4HHoznSgT33J38sEzgx3P2NpzkD3BQRdxYpuCuopHkFH99oP8WAUgw6p6F81fziKK6spZv6FvvqTWvLf2vLxEyB4",
  "key48": "4gRx1Qghzqct5BLicKN5hcPRNPrJFGJU48TpGiovNugRJznkzZrALFsbqKtguEJJB5YXMusUTZyEvcd3vmi6LJWh"
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
