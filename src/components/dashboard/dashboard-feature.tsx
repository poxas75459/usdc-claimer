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
    "cUPt9MhNUHpqPv3WG7WihP2P9KBQvJ3xzFfY6p6UFn7VdYoyBL6Z4XENCsM5xUa9LoMiQzU9tchHPeZ8DboVXdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3mLp9CfgZdNhhKi2z1pAPEwZdfVGvo33u1aCAZzYHGbWiHp7NDeL1KX946W4hWX4KWuinvZmb65e2oUS8ZXNpQ",
  "key1": "2MnM19uyLRM1PQD7vxTHSc7sEQ5G5ffYCwnQf45KtXRNwfwvzBRW58dahDjeswk1Mb9sTyYmgCsnKdTpkjWcgcBx",
  "key2": "4vZ4V1dXE7EQLok7iFR1V3BHZziVkj81HF28yusM14oxPKyW7G9yRf7HAxiPMPgk5UW3mmb7mAD7Bj1MUyiQ4Z6N",
  "key3": "53wLqeW7Wv84EvCooJVZf5LoGKc7qcsukWZr5HDSt1gSGbv3G4znDiGbyCKA9pKWSaZVfchqNLZkjj71hhkrsGWN",
  "key4": "hRFumGp4gBYqxsocDE7GE85TKcq5nivxqwKiqA8UbCe8MBBcJcAXVGf24MNdedqCPpZMFJbh3C8HNBmjt5txMPD",
  "key5": "3nYbNNv5CsLRxiY64892RZcjfX7JiE6gEHVRGwkoHq2cZgLsRpDzQmXe53tVkdUt4RQmpcq3826saQ66xrhYooAN",
  "key6": "28J4QC3dbCxA2bCzdXiRMpJTKcSH2fxp5f45HSaYcNfpbGEBhoWEA7kpdNWUh4xTgyoq9yB9urz99wZKQbBBEbTD",
  "key7": "m2Vp1xk7veVcvv4pxcmMEy2vgPMELzC9hLSnKB2R21FFceKAKgfZmw6h6u9KwWE8GM5mLT6AmP7ddVDDPCby3VB",
  "key8": "2vpoTqCjG616f5MJA64pmwqmvSybyParHGGXH2vEwv6APfPp3xKEcWZ6YSjc2sfmTPduQgm1PRyeLa95M7hhVksT",
  "key9": "Q3zyi3BZu8go9ktQpxmG5pRqvnb5aB9yccbjzqDL1RubhHpiURdxZnyuwTZa3Wp53kFUVVaK8dHMVuL41P3uF1S",
  "key10": "9DyZ9N9qou1ZR88xUEaBwov6J5hM3CpitGyjgR8C2ne5UaouMs55iKxf7mnULTT7nM9XfocNHKdCdk6eMLr4mzn",
  "key11": "5Wc2YAFFPPp4ek979PvUFgC2sqJVvbYpmRx9z2qU6DJpYi6sQ4tCnCBY3apbtjg7jN8iuHU1tYJFM9LA5DJon8Jj",
  "key12": "4vidjjAuSiUid485MAjXYxXM6vxG3F6W7xN8Qz9LnQCLaoK5a5LfCf5VNJhhWw1umLgjwCW1R6qSbDMVMETe33n",
  "key13": "BEZTghbvSnqiih2h8C5JLX2bnFtmtvX2huVFZujZgdiBjeqBrES3bpJPjbkdCmKpwUMyWw9a2Lh299FmTo47g7S",
  "key14": "URXXvTXP99c6D3d8PAtmSxkRHtRxGNHmtGfgKKLoLr2MvRWHCH1C6agAxtiu7PxEyc7zAgGVn7DGWdvPo92WQcy",
  "key15": "469f8bi9F6fJEbZS3QottrRBwsMCceAMy1Xpd8Jjb8JjLHi3xdpD9a4LaHbDeH2J6kyigirous28hbS4pakMvZjL",
  "key16": "zmDDrDbyPQqKWa8FaMhNNVj26Vv8rSs5x4Ng65M8ovuntfg42HtPfRRjpTNpMJnT5myC56h35mt6jFQxgUGEER5",
  "key17": "2xZ1oUpH2KVUN52g6WZjLhK31hySu7ZPcsPrMazMrGteRNYyH5ZQPp97hLtMDep16pwxwK3Xg632oAdMFW3eAnHS",
  "key18": "58GwsJnnq3s6Q5yj2DBSmxu4Q5e8XvDU3ryqRS8nDKABLxjwXtPRGntyVEa5nWtoL8UanqiEBeLeMnvudnKnXy8r",
  "key19": "4mpdXuxDgoM4n3k28ELB8Mwg9NmNiXV3v93xmjYyop6CKqiDV5SUcGZViEFpyF2tm5hXutp8QSrMYTsDaR3gxxZF",
  "key20": "5r84wDjZfEYBFdw3ppk6km37Aix1fjQEwT5tkyQvSNPmzHhsCtq2EKSGA3gcCvMM4umm6R5cBtboXnDrH9ZCyfe7",
  "key21": "37UfbExvVdUH4DcDPvz2taZgXMyLvRDoLHxVJxaLTWY5wNrWSoHSEqwk4BTjMSYy14UJCqBv51CgXRetRKwevZAN",
  "key22": "5GL9pzPtrTheUyN5ZL819UzfJ4pMiQxhNdGFFTkyN41DycgRPhaK7Q9bySeVxkncNTdJ3AJXwHv4EoMn79N4sVg7",
  "key23": "2SXWGDSgSLW5JWQ5MZbT1vEwYLbJMEsPBC3n3zoAmrfeNjGAyTZLbRaXRMVXnJvYNTqQiobrrtBHDjqGebu7VVpF",
  "key24": "2GtwaW4NaouRDD65ANwzWMqqdznGTyw1fxcxwjmcijRnEoKdshfgdCNNfyVRWgLBdb7z4s18E7ZenWee13YqY723",
  "key25": "2nRwRuooGN1EENEkXJMvHpH95ENz91LRYriqQ9xpczyMZLJpwBU3Nmk2k3PKvwgDpnJE4o7mRdQaXbo4FPVUmbJj",
  "key26": "4Zka1o5keRZLymGYSZLvJu8KD961AkdGDPbMnoc3XTQwABhXYeSPYtmGWJPkXmyRnTfJK7jb2ZMHtKyBGkHU4Tnp",
  "key27": "3fJgKA9PP8rE12mNFPC1tZokigsLHeiWG1MbvK5sXQBV1EvnbNUirZ5ue5JMcrR35vgj1ubJ72vXihpiZuGHipnz",
  "key28": "42ti8rSdFZwDnKktvWNLkN3nu9SR31FgGNq4gNFFezfMuNawizziVyWCD77FECZdr1dRRJQwyKGSnjsKxkmZJFd7",
  "key29": "vitCxjYTpKH6BRabzBkUD6QFuTgNkYoXJxYiYyP6Debjkm6qPTL7v8ffx9dmzg8bEvGrBPnSpqsvXxkmi8GkLm2",
  "key30": "375DvRdDx3TnHCqdTbAA97xM39qRV8pmFdKVx6VZ6YJ3w4VvayEz3xbu9NsFHXcvc6kE2sPw9kZQYKVJYhdLepBD",
  "key31": "2bR9oN9srNmFV8yEGdXTg9akaRTQQcSwaxsVHWviBQaWguMM382RDk8qviKwm6v6fy2RZkEK5C8n5xanfowmh1uv",
  "key32": "4tuup9C8bpDJJFK8FTMw5uMhyf219yLQ6FDVjEiWRGcSeEskUwvVFmDvLwh8XtsAUpUBGWcW12bNnpBXWc9owCeb",
  "key33": "4he4adXZZnYQvdu2CT7ZXoU11yn8RSiioadGBEaFSRrsxQmNYoVtev2Dyt5yNcE3RwJ1Ym8BSp5XyR9wxH4dQxr4",
  "key34": "2eqotUTBP88pzwvSSd75WxkMkESNsAyNchksw9DRQ77kCBDCc5YLrv2oyF7o8NM8NQ65yXiBaN7wQk96P5G8bDWF",
  "key35": "4NENc5rCWQGJSg11uf7JihTGEZt9v26H8kyUmzRv9wPAzgjTJ4kxjxvBsporm63nJZgXBH7wYP2Zn8QPqjPGeTjV",
  "key36": "48MYmDfeAATPcAh7KLq3wJbJNM34Qf48HShU3B4GnDybR11ebA2mrAnNdt9JLxVDEjdYfoLv2sGXaLycyfRtMAWa",
  "key37": "3ufSm4JybnCoreVmttyLb4tYwad3fp7Kdi6hjWYqBmiUB5VxQ9maQSt49gR8VRBpujFwzp5x8F7ro6xQPKg5m4P3",
  "key38": "3XHF3hTAZJgwxdHS4FBvGZ6Qti8LWa9HBp4tE5cv1p5caNGzJLHaY2BKDtfZEdusy3ZaRU4WV7AicurpmoECDML3",
  "key39": "5SwZ6ieY37wG7Jr4pfSPBKbJfMAH5yDNSmQsWMUkGbV9bMsU9y8rSe4b3B9QZw418LemAzciHmq5QPKSTrwxR6uw",
  "key40": "4PP87LpSvhXpN4NJ1KoG8xabXsHfLmsfkxx17p1PuaVuuZmQHghb78LVQHJeAF2uYiGoLPpzpYUPQ9mMW6fzVFGf",
  "key41": "5BMZwtsU9xYQLnpt7sJX2MtfLBVXorFsPydATabnBnQhtd47kYmHUbtACRt1BTJ9euKdFmYUtLESqFmWxHPKgKFd",
  "key42": "3ULwVSVYbmTds9hT4NAALJmQ65eCkN64cXWFj7vDrq7jywsZHsWqq5P4TGebD9Sq4HiU7kgwxDgiuLJGsN4MpLiQ",
  "key43": "55zdhieTRK3WnTsebLRzD9DKyXd4EoerqqSkExCuC6gRipdxPU2yqHAQ57YobiPyzmpJ55ZsdhxmD6h5mf4NScUs",
  "key44": "2z9jgDQYhndQvprxDfUzyw7iA44Kc2Pxksg53Jh4FHBUnTKMCap24F64YKFyDoHea2b5rH7SaHbEVibUNz5LaUCK"
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
