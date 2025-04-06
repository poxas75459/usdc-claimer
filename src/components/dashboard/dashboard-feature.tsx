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
    "5cfBny8fjnpLRVTfVdF2ehRGjoaU8KQvSkL95d4uALeyTM1Aztwf4zQYn3otx6utLasY4PTRdQqSuQ1K4CRszU5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhdmqkxrrsQa9w1KUDatPzMTUHqMXUTMdu1iSKLUoBwbao92tD8pHtn1jV71MvBXeXttmoCkjUnzJTAtuQ5ycPB",
  "key1": "6X8WSKLt9BDbnfBYVkySFf7dJoMPrcznR1J71LC5L32WoRbdeRvqn3SVA9fejCtFyfGQoLg6BxEcA2W5oRdcGj2",
  "key2": "43mJoj94Reo9nuf5T3GnWnEDQnwhVykMqecrJkMiL9QxSojRsSQYpfonwRgQQBspQ6U1GKccLmm3MbkG2HcGa6wq",
  "key3": "3WkizqNhMsvxCTuMig8g8UybAtscoDXonEBjLh5S1x23W9Zdifbi1Bt6P97RAyUKXdwGNUYt1WCV7dbmiduaPHmY",
  "key4": "4GnT2a2CktKKABDHmtiwPAPcV65ejQm36mVnaDjXB3WkqAejmCFDqmi7kvHfNs7aTdoiYmEMRbpjDKR1ELsiajNZ",
  "key5": "3qhSyGBQ5PFBb8NyyX93yiLjd2RiHrYic9dwd1axDpM3yoMvKSwZHuhKfjc9yPvu9yAso2TL3QE7vJHgFejyCujJ",
  "key6": "3HvvXierPXN7hH4eLCpRRkmAqvoxWqurSUBSp1ti1cQStMiSenzVivEftgcA6qPXn5Bd5he9qyZcx1DPtPg8j6ft",
  "key7": "3FobBkWaM9kFjajrUX5fDX6P1k5iFkJ3GqR2xXNk7T9ihkmXAB7wzUKGN1ey8e4fZDjmSi1B6mVGmv76YKZ6ie6f",
  "key8": "5EamvGtBh4UxbcBb6b9eja4B7GcGGU8AR7Kg2fAGax8HBJqRfyEQG4Wre8aARUZZL1zJqTRgK4nLWanw4zCZkY6t",
  "key9": "4axUYAi7EM1EyLvpp2zH3Fefzo9V6TvaFDKzxqVfuFWZdeF2xfH6JhZsJgZCztQXpcXQagW7Mcq7EgCpysJK6w7r",
  "key10": "3gFfqpsn1N65wdBUjcNYvRwTHmeHXVzGv8PrLrtHMNFN3N96TVnFWVMGv42wjEfg4u3M1VTvXJ65ysUCZELPRufT",
  "key11": "2XrzGYvRjYkMwBKxkPubX53jQowQUuyahdDvxSP1er9DDmB1mcHWRtqwG4grkEBt6AvcMpYe1M3ck3VTb346GHQ7",
  "key12": "5mdKtPqSubbYS5LrAUcrmTdcBAwth7wwyg2zq2mFUJRzt2u7Jzc19agdnrnfEHQK9JhQm3TtvtbHPv8Sm9ASqL6p",
  "key13": "3woDcedTMbEkG9mNhTZvD1hCCwWk9XE2rsUzBeirMhgeFUQ1k6GLf2LsnwrZWrpMsPTQmYTuQi2SFF9fZm3cTiYP",
  "key14": "33rHiN3kfgVYaxis8Eup83ZCBasVuAUBepHQtnFpQ5TtJAifYGWDDNWJMvBpJVBjCYEHsQG5KVLUnQbzTN1GHMeK",
  "key15": "2p92R4TsSgaUEPocWcsKqj5PECCborsTLwhozvSx7fQB9Lueu1cKHWiT3VVZFNHqgFd9TZvVmgqvXPvqygTGsd8T",
  "key16": "2KEf6pNDRQxhh8HQYqttGAC2MVnw52P5imuXntT2yfFcyHG5nofioZG8ZxpkFjdsfRcjTx7W4kVep3TEcv128kHp",
  "key17": "q6cwmtSUgQeerdeKTJB8mtCMp5nHzAJx7SBMaFZb5oUk4WS53misDrpTJkkiPMGDc6NgT6xiKFC68gffmajJy4i",
  "key18": "3bs7HeaNtHNFKftXBbon7Qp7qr2nWPhFQaaGEfSw8f5zNF466qSLkWesBW8AphLQWRCyocSm1Mq4Jqu3V8WXXwdc",
  "key19": "3Mr7GrBtj4b9pPWUJ9dFoEq5W9ir1yAafLHQB76c5t7LwDbatSHVPAr7AN1KHUdU2T3dbu33t4tmi6yAjfX9ugCL",
  "key20": "4inAuxmSvAQHMT4w8Mtjt8Xbra42azSadCWhR71rJvj8oj8JLNbLD6USCi3EbgymLuWarWU7btrYNkXu4AcXbVn1",
  "key21": "2YGfJj1D6KSBQ5f4CFsgtwJFLV3PgZT4Ci5N2XxMEDFokEYKDwuwrAA5FtiJuEq8hDvue1HatjdBc8sP1QqNhUkP",
  "key22": "5SpZUt9xHJMev2fvfti5ELqS7kLUewSQjT4SJVqwqUTeyDzXryD5zuzJbS2AMRLMQHh5v6v952sdbHSAUpJRYcwo",
  "key23": "4DdxN4xdmkdTdU1nqrm33qRi3C1L2SsV9Umsq4tkVb3jSGtYwn3Efyt6joa5ehMTNYM5WAUEQGRAjtwtRQQNKvH",
  "key24": "2ZEeWxmcAoTEEAVBLT1v77PLGiVapp98eXMWKD3Q7SqfKReQM3VZYGeLGPseEyX7125aBzaEi785d3w9pPzw88mK",
  "key25": "4TMnQLyiArLSDqZgV24hEdipSqcaUX66BWeMkaygpq8hHjszeabrmwco1EDnfDMMTx7ZJKE35jUrgQg6qwsRvkeE",
  "key26": "343jgckFTiUPTrV6p6svWQp3C72kUwoY2vyNCTtLcwCko4WLnQbzpNd2cTyRDEEJJrW5CpB5CAw1TpFbJSdM35MA",
  "key27": "5nZsJH8vv4KzXhnr2GDjPhHRRZ5w3n5RptB1Mj7E7EjpFKJbqT5gqQQRrM6QyZ1QCs4yFyg3Qir7RNikzbfC9qdv",
  "key28": "ZZx2Q3tyUVKJqonv1exfFZmsg2hnFxKcvcMemSovfXQmBe8wz7rE34ucjEfJMcMQF7QXNRdZo4rAmn22Mm1nMQ5",
  "key29": "f9ofnQsPi77V4vFc9Nztgx2aaCvFutHQ9LnUdXxuyn4JJEc1DmcGFaaoVHeyWzY92xBdXNbLH7CNcCC62MtFr7i",
  "key30": "pLCbwH93HFqraS4g9KYbPayf2PyCZ8eu6NspZVFZypAwznSg5Jn88HVTz6XdkwNDCWgNeVd4FYVHs6b6MbYRcDf",
  "key31": "2poFmnc6nJ3fhAJPkwMDqpesQQr5nrzvEAYTsAJrHtazncyrN9HFp48GnqpzdUkAtryqA4viGRrcMXUzhoEe3XMj",
  "key32": "3JdUwuTZHMHeAhhmF4cXQCzZkuGT8i15HTDre8qp3xUM431tPunz3btesCFAu3YZRS4UbAUAMk1ysMuBpitZEvqj",
  "key33": "3YhVJYJQhgpyR9kF8buBonCDiofUJPcLkuWjPzCL22FwrM4Su3wtkrbL9oCziqRXLDpVpcCk8bfvqX6XBQkGK7iP",
  "key34": "5zNLSsZcVZhY52GNpZb9eYQjp4weDwwFegc6pVXggnz2xrmAk5dzW7wjCGorPfkYQ5JTT7dbxNgYpNBYXne8EQ47",
  "key35": "MULhQF6ZRjYgzp3WVomchRHbWxD4KbN8YrW5k18DeYp4H4pW8XvwTd11zPdQ87oGMSVKcBtRMFeSx9s6QzGMzUb",
  "key36": "5AL9V51GjL6Hufo8rLVYN1d2ZzuKNakQidp3ZWLwbtehEF4gmhVfkKu7RZ1dcEhwibzFofw74v7oDrF1npx5sqJQ",
  "key37": "jcGfQaj5RPqTdL75mk6Rbh9WujkUgE6KALhbKLCFVrfd8JPwaLWhUD83aGhg92eKDSwv9izCDdzM4NeKQZzeq7t",
  "key38": "4xBAZBNec2mAmHzJjgPEwY6tijaXMpz5q1Xho6Pj2uR3npv5euDopvdJLkbFrAwRPcphj2HkuXxFYUrLXExRP8v9",
  "key39": "8M1Z4ZtPEaroA9Cq5N6XFuwahx51PsbEkdRtmsi3cR9qAQWzupExfiCvh64hSt5BA2A3DhmBeQ2av4F212fs3g6",
  "key40": "5NMsbQ58mDd6pFvnFFydpP7LD1GbDZViuh5SGSX4X16ebo9k1nzRGcpFKeUqjFWb8vTC9buJ4zaqqsyGXTqvgoLR",
  "key41": "unjLD7BY8ywFj3BRiY9qkcosqJR5KNapoRCdbjZX1DB3TZRYME74LHLWQHwqsACEncY7rKUNnttH1sRP6fjvAkN",
  "key42": "5PsKRK99Yvco3aK6aUfwYiTHLSfiNkkBU7H8PMNLobj5pTNdpeB2fka3Xj1hqWRNgwY767BCvkSBztm5AdjMZWCW",
  "key43": "3peY6TfyeaaQaxuFdDp4gqakep1UXed83fi5gHFs5rKT6GesXUDP9KKU6wNS5tQEksXKmvK5vkGL8tXewFrkweVT",
  "key44": "5VbXBQVcy663Dpsw8GxMX84Sf8HxauM5k4KYme5shec4EGggF7wuuPBZyZLRMAB3sXNbdoYaNpsErju69XmA5Gbw",
  "key45": "48sBoQZcNvwJ26DkUxizDbf5RnKRtFqUwyeYJ5Z7tCdotXHGVVpNj4km4RipVBpyCcmXU7bu6WMgJUsM7ycgHp1c",
  "key46": "49VPRebY18NhQcoHRWUmZj9ei1FXnJ4f93USGnwyKaqCG9RDKyL8QiLoGBNeMy6WLrdQfpvmcJcRJxYV9hVLr8QA",
  "key47": "3jx5kGvozBnDqXBVrHtWivauSgypBNZURqiMeLA4MRtB3Tr9mjRj5YGzGQ8grdHEKiDDYwwc25mkQ3FAH2JvPZ8L",
  "key48": "5ENNdFM5zhzr84MdXZS26k5oDYTddALTqAftAiZck28cSgB93bd9X4m8fo3Q2pwnFo8NHEh47abqdVkSyW1Kktde"
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
