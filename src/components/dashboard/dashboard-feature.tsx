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
    "3SQ7abe9WPMo2wfW37FR5XrcHN8zoukwpi75RFgSjScwLJmwNtwwYouZVqx668z9Y7bpBWgjRh5r8Rr2SeWWqsud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QaouUhCXEeQoWaF93Tjx7WJ3ZyarMbxkr5WHS5mCac9F4YNooCtSAGuKMNJ4miM71fXT93hcbyJhWATiR5A5Abk",
  "key1": "T8FUyvjhY4PGxkKBvv3pBqGYJxZkyum5YXHSx6fhVWR78hcFG9mHYbNnxcn3sLzVSCTs4noAnp27G5AkytNyjsm",
  "key2": "UQU4KHdRQZnMxJjfXhZ5yDezZ293aGFfsbhKQQxE9F3aN5yfBz98up6ssx9xohCq8AU6STa3i5uxjD7b8kW45f2",
  "key3": "4dayS76sC9XB2rUsZM14YuNwhzeTKWMwhyGTFvmK9NvnTQCrptPjNkUfDjn1yYWbejePyjNjUBMKNYRNFpAukzWs",
  "key4": "4TuLkqQjTK4mvkCSYUxtzLCVbsemkGHuUMHGygVrD337ARx1THmHECAxUXAhTrYxokXu7BXBM3KTb1upTBmrgnsP",
  "key5": "4ksHsXx3YU33iw6FVZcQAzznnNJqdJH3KApXWmn3Lbgdf5cbZ6GZcRZ1bQfwiWeugDDkNUb69K2sGkwSybFYT42x",
  "key6": "4cSNtm3AkVfBv5A8x82uLUQJP3umJqJgUxm9eNnyYDJVRYJgGdsn8uYbD5uEyJtdywdXKVEwvPgTgNf3XQVTeHxM",
  "key7": "4AbWAY615nVyo6zwrDPBU6ozpNvd3j2b4otSK5KUAX34gdCMWGi8WEpz1s9EabhczMPYiegb2PCCK36fhAbmfA42",
  "key8": "2PtiU53A3Mq8FYo7pu6WhnDFApJ2Pdj4Z3V7AxCcqmFSZgBUqAGanGAUKvuhzk2zdhbBw3PgmYB1XoMy2FVDULnR",
  "key9": "5vdqsGuCyYPauieuEyPVu9jdx6L2tNPmg8qN62xihznyscxhyTiukaKEuLrv5r6uuEtaEhepQgsUFVeF4pgKsMsf",
  "key10": "3AHa1prDtWRnk2Lhn4S3SeBSwnVfXa78wpVTLgL4HuMEUUANMbLKTjx2aoyKCJdBY43Fr6zq4edNg7gujGjbLLA3",
  "key11": "1y6u9iJfRdG3vj2UroZooM33UG4deZs6u4GMyzSrMsom3mApdqZVrEkpVwyhBUc9swrUvCMfrQ25RaoC8KjXY1T",
  "key12": "1FrpEqHXyLDT57ghPt67KBuBfyqJ6zpsv4GtcbJgfTArQ1wkSWaGmGmZ4H7C9fA4rZUUJMy3iuEJHRHtz8DFv2F",
  "key13": "5pxQYzvQqefuySfV6H4yjNU8DXh4TfNsaTEn71JanmjkxkaTFBCJcj7UmnXxZ9b8W21x5jEkZDpKYULhE967pGhc",
  "key14": "3pX8sHuYyhhc4gs4TkB97NkVhazic6iykuXkQ7iRVbCBsKmzJrZre8iM3zznbtYg8sDUu3F4xAPaK3EFbFW9TTF4",
  "key15": "UQwcEyfGdDuuNPxk7xUH1yMRSHzuZLsDDBXZeLoFaYAsL8tgdnUvMYqTRQwF5vyT9Zmfhnt1TVZQfK5wjNqRuxc",
  "key16": "3ALieow9F3Ye2uUu8ny585o1tgXAT2uTRUvdgmwFtRciYg2Uj4MuRDaAXCc4nQ2kZqRDPT8i71FWCN5eVThifYx7",
  "key17": "2ps9QBmsPExqeGY2HicsDK6AtFBKYQ6iMFVCXp79NHweF2Bt2LDmT4AGZEiUWg49qHfz1RGTPmAWTYiZL5KKTJAv",
  "key18": "46aqTxaAnfbT9b8NAScgyQ1X1nd8coscfFnEhRE1eQCXzR2DbzgxzNLYsowntHTZ5LesDyudVYboTCVbkZHtSthU",
  "key19": "2ycEZiiMsodtsDauSD7LMCKGLUDTQwBhCEYcL1wysShSFoKLH9braKyrWL75mMiHhuT4jzKenUeb73a1duGyX6UE",
  "key20": "2CJHUAxAAga8cy13S2Yi6YkX8tCEc7Hbit8ed1CuXvdesN965Y7eJVpWRg1WQ52vJKLgPnBKD5njrSULfzhC1iZS",
  "key21": "uwn8Wq48xh9STj5CvGHGkxkAUSgrzG93igvL1FNh9wiR4wZUHwHQZFgszqZmuU1sJnfgSaWZKSfLpiVEsu1YnMu",
  "key22": "2dNekXaHnvQ9dCN785NxTURqwhEjXrzGQyFXFVaW53hxQgCPwXVsRM9JZAoDmSpHq1RKvurybs92W6oyUKz3mYPm",
  "key23": "5j1X5wpk8F3KyC9ufpbWft5MMCr88qwBow4M2sv3Gt928CiGQvi4xBQ82qojpANSJtMUxZSj9CSHSYPcea1yLPgk",
  "key24": "5MoStYgy9XPEmtaJYcp2FckgpUipQQMxTvR5uQTAaWFUTEUV3BHA6KjDBSRdLDWNZG1ZZhVMAp4cbmCzbNyFw8va",
  "key25": "t5ppcHTQNWRHsXLBi9CB55AuAK66118R554P7LXnKnWB2y3AXNCDXNBQV245vNvCcowwjMNU2GcB2TVbF22H1ZL",
  "key26": "mbq6roqxQUsBbCYUZpcV1sEWLrF52youd5ewzjGz31C8sU76GSLrPJWKfz7RP7JbYXR24Xy5CpCpYEkE6LEv9Dq",
  "key27": "5V5yTok5i7RGGfjbB4y7wYA5wuKzC3Kh75eJEzHoKGVJjeVN4uFpd9ZtXhnrXAo39ToTJvVJzUswiCG4BVMnCPQH",
  "key28": "3G6HcFdqB6rqdBjPaK6fPEEGazR4fDc4KtX9Bu6JgnmhTi1Y34ADUqc9i8v2C18EAUV79ABM6ihyMLnr7kLw1m8c",
  "key29": "3cA3DEzBNyLhDJCwshQRWRSDmf329RwzmMXkPiRScb62fz2RftcErcH1wUqrLQezUD5bzK7wxdhygA3LzbSE41FH",
  "key30": "5Pf9vMtdXc6ewtYqeBnaYFTiwmKV3RsSEuTd2XVKyz3hRny8aZmzaFCh8GkJmZKu9NURNdi63kJH5ZxNNkQqe1qh",
  "key31": "2MmmpTswxHyPA57APpDZAiJAMyYpChXJaLB2vw9SqTMT8sFjW3LTj6TFqBrB5enDUgpBcwCgU2nVvGAwVk9yzhcW",
  "key32": "5x6yLdYfxepdxVV56H32NXWAWZwpoheG9XRLZN8vyYBAZgnN4Y2Za2Pk11tSZ25Gc88nvjHRfiocZCQzLzUfSu6c",
  "key33": "3sWnXXd6KbKspjiRZ9L8wdsArMsoNUypdaNAngKXNnLgTXRULjBnak233ZVNSBts3yu1xM9zZvFNbCHrgagdtHEt",
  "key34": "42Ug1L6ecUDqVV3qFAiEMjjxLwyuEWLMfeAvs5ftdbT9mnYpfWkoLmQuNeygBVwTDaDY1htgx7xnAbBv4SHGR4C2",
  "key35": "ik3QMmp8vBzL4oaNHq7zFQyxN2P8ggfL2XEnYdpeh8CCKc4y9HbHDh1uepWFef5GK6Gg2Biry1cKGPcb6CuU5BN",
  "key36": "3J65iySEZbSG564VpxhqrsrAVFyE3WgvBDjm8mv2UAwhsfsPhWr6EM51AViYERrxHiG4Y8iGpfP45tNs7F92f9At",
  "key37": "2oK9GR5UeKghysUXooG8KGGGFMDVVNsbZ5xeMvCzujRcGEGRqAphUqBGHUK1wXHABGky7srELxhyt6FeeZj5t6dW",
  "key38": "5VWzC79rk7FmCTgKBV3SoxT6r873WN4M5TetMyQdoKNyShGpjA1hHCpwCHrhbrGceakooavzPi78uvv7H5MKkpaH",
  "key39": "3ZqhdXAs9CEGSzMf2KjCQuSej9Niv1Hzndb92yMNnnjP1Pbp2arkEzKh7CuF5z5HJwZ6Y947NYKTRGTrDdVo5kgL",
  "key40": "44WAPUHcxutbF4SMz14g38268uLAb1S8XkeuR7pGyHNTWAYZq8qrniakDNKLsGqAkUSvudvuwuqRQy2CJUn5kjfH",
  "key41": "23TkhcdEoC6Bdd7t9PE9UZcSRuF2W9b5LWdsWkNTrz3ceHMi1kvppNguKo3T4NVEZRMnVY6Faev1rHuJQ47ehBy9",
  "key42": "5GXpqDhpx6vATHbUYovsFc2on9oQoPa7eMj9amW2s69au29SVjHr7Fu8sftEjGA8GUSEbg26BnpL8PKbzUqb3LST",
  "key43": "YkqXujjrDGEtvjoPF8EvjLv2DtXYYTraEb6nHGtLnt44oEt9GHLTDxhp7q1wjd43PMLTrbsbqR3XmrvsnmxaJRH",
  "key44": "5obQvptFmyNrpbxCYkiEbmNf1fcDjbCQ179KejmTYFQcqbnw8LGH3rkf34A6FTR4o9iGAffzV2io3WmcAPENshm3",
  "key45": "osVJ5RnmL7F6E3KRCBhVXBub6i35iu1AdHoTuFZUg7Xb9McG6FFoBAPZ2D8vjJF2dNbrcBsYYJGShW8C2GJ7uyL",
  "key46": "4VfLYz99Gi3HKtWXzhR4dEWtvxXPzWx543M7Mzw6AC7AvvSmAt2v5eZGErXWM42MvQUyGA8ntNhVJgS11MWr1KJ",
  "key47": "4WFfj8y7XJYWyfPWup1V4zVFfVdaLccSUdj18f2NjwMSWuHxt1LqQvfyWCs2op4fLgB7Fw1WRhypNo8EBUeMYJhg",
  "key48": "2SaXthXANWLCu1JyMvtGRpoANersSQ9V4m5PFzvMDe2oPTnfstZ5itiLr4eMrKzqYmKVHaB4rfmt6V9YPtRGCo8i"
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
