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
    "39zuw2cvUCywt1gtt3y4untJQ32gnPDCjeZtBfyhp1yRCHaFgWnGkH2y1NmFwfuJrCZoAAASNEsVsePr4JTjuKCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDFsA9VFyevmLnib6stmeLjLLhNKpLooLu69jJQuu5sUmxNanfiwKtVYQyrSMYDEVteZNy54tC4BEHNWeVD1LEB",
  "key1": "25cf3ZrYK1ZTf2c3joX49FJoKBjJ3S6Qcuz6i6WRqGbbKXgpysRWtpG9mRK3tEESGchGUXD7ZKRjpcKNdrSxDqd4",
  "key2": "66RVFvLD8dGXB3NDN8Gp89uVBvapGGyta7kY2f8h5C9WWfEGg4aumkDjQnJFex4n8Vu5f1sP7utrDJBfKZCVyFv2",
  "key3": "4kHvCsDNSHhS86St5L86z3bCyKuLBu8eTk3BfTKAPVA6qC3DFzcEUE8DR3by5XdboTToiiFXNMJgdM2FPgejKyUb",
  "key4": "4F1RbWAaEBUGVaQWrZWEE98yxBmwT6gVB6JJTzt9UrS6gotnMjhpK3iEpC6y5f6fBmnAvLSh3kKMyxZn6MKuwuuN",
  "key5": "3np23mXfcpaK97ue7ZxEDQMnxZevut8BNskUv5uegKN7rdSjLDyvnXEkLKx4eYosawhGvbpAvJDVpm5JDPszcjNW",
  "key6": "2RHj8CJNkjiNMKK5shnHa8AsuR3mBqGkzSi6Wqv6DdngBe5foY5iwMrDnMuTNrUjgDQPcboLYqjme1cTGTZQ8RE",
  "key7": "4VKbgJaoaCeAwDcq4QWVd89o7WZny4ZWRPRt43ZwNFWGieqjVRDeqmU9r7yFjxWgKEH8c2jfB1y6nazGBh1kv1B6",
  "key8": "3gTWqjUTHcCnVc2kKtH5ZX445JshKEiwMC1Rwqst6tEytcL6DGv4MurgMoRXSRpzWH46HaFUAzgw66nqeuV85Vbz",
  "key9": "3k2p5enUookDGqhDj7RRDswA9qW11yKBsd3hoZuXBxBjzWvJcTDKuBmD6cXgPdsohPoeHMtKzCxCJqDDbcL7VPgV",
  "key10": "3ZoaRmpUNHwbJyvRYqiojdhsWems6ht23avf83SFteDeCa49JUFbdXH5tQ4XdCvmcskYt2eyUzxnceicxTeTZYuM",
  "key11": "4gsWyxXRiVByFwue1q33ZwKUvWWknoHUQ74k5uAejBibchPFzUTHyjNnVNsEYQTriDXVbMTRg9DFhp2Ctdd1s9wP",
  "key12": "rfRXV7JkwmYvxDEzsEd2BnHUgpaW4Mb3HGT7jaNyEKT25WNfRZm8BPVTPErN8L3sV19BN9e8AmFcTpnTztrBeew",
  "key13": "9fJK8czYkX6KYT7UupDvS9vN3cUnxB46sTCPkP8L8wCfX3e2PS45Y8s8xUaD8bShMRVXQg9Pt7AD41uRu4Sn6C2",
  "key14": "2X3VD797MynpGvCiGJ6YAMTguKHVq4DboEnCASHASHuFxj8y7LL13SsKfVKtQzQZJYoNH4AqppRdXp8TSUAnqeMh",
  "key15": "3fw4vEExXnHSmC22HyfEyqS6KHdtrBhBhk65xp27d6ff4NsWzR6HSUqNNvp4gMyDwRwhbPWgRmfbCHEsuhwQvKSM",
  "key16": "ue38WZqmi1GXTKGnQHo8gxdAGRZvH2xf21v1vyVNpnLi2ZK93zu2xASK57ew6fy36UgitQqfH1c9BoQLT32YsHc",
  "key17": "4ziLQ9CCdMfEzhzwutFSsdKrSd32n9GRPi2HyNiBPcB1ttY25mgtS5QvVJQUHAPfzYmhYzzQP4dWyZwWnkrmUBiV",
  "key18": "3ivcdp1REqkVDQtBKfzzSvHY4TfAJBeYEYqHmoa3CYDowod8N24ThZEGqgtNdkkWC4rQgQys4FkQHZmhAfRrnLDP",
  "key19": "UaAA9wbvs48tBs8F97EfDs9CtL7ipCb3suPB8uaM4R6yBhGSy4nhSsAB2Ju6gNaTrAzqdwmHE4Qs1PkWPu1wyx5",
  "key20": "mVgAxy86KyYjtCRNeP2wrvsnDbfLH1d5z2Z9QWmUaXmmxHMEjDCuaZpZ1MPFcnyCtGKN7ZKEsN13mWDytv8nbuG",
  "key21": "3D69Vi5Lv2jtzzitviT2MHhc8hSfWiJF7DyU8WsUoyqG6Tvk7NXQ7vwR4pZabridbFsXjFcCuifK6W3fsVPQN36j",
  "key22": "357saighYdf8GnMQdZgV3vMtfuFFDH3ptThxgFPiYZsKwdatpLomAzArGifUSvEzyUBbnU1oBRe5adkThHAgnrnD",
  "key23": "3bQ3hfBL1F3vqqrcHSo2TEkAzM4CHURpCcwFV7XyB2JwzgSup5gRvUoKd5Sxm8GSVvDYBcYXngqzGo4MsUn2ZLRB",
  "key24": "2uYEyFuGLKT1phGCKbNqVQK9JrJYHJsmudDmZZepL1zyMa4SJiaPuTLuMp3YXP1nbogcuvVXz1d23E832ZUmaAuR",
  "key25": "3svfqyqbXwJZDzWKnn74WptMhf9GqBmZx66m7SwritXSWk1bzbJ1nG6itGcQCYMqEiuWJhVTaptaH2XNR5CTz4Hr",
  "key26": "3Hdn2vYu8DgC3d9r9oiRV3et6352PJ6FEHqqUvF2bBnxwQpKNkY15kVVfqaRFxVavKLeZzoCErJuR6zEPYELH4DU",
  "key27": "2ww8Kc6AztNE2PcxfYBAQrhXnT4iLbFfgHHgVyuQ5XBxZK1VoXYmHktZPc23EirjuWdmaDNZ9Z61s5zLUR3zf4cu",
  "key28": "5kd9W3cUUGU9RSFJvqdC5DtCH76U5SihLMcFV1BkHKTw7zqpmHAb8hf83ie5gyUA6mDESsMpk4QVxVixMnXs8A6f",
  "key29": "3Rjwxm3jjnGbHLrXHRhXRUi789A3u8KgiTMTKzrtuk99CpMpiucJKxwiNVJGuCEXgdZkG52krQciyR3xfmYJG84p",
  "key30": "MUi8vSLpjXwi8K2XysV6DrXWH5K6QsGTTSfrZWhs5FtSKfFeY7ij3FLydjJPmK7rdfYLMBtFnbh5xu9Cr7SK3JE",
  "key31": "3coxjpTpuF1hYAr12KHmJYKsZ2G77DDvvL7Mq1UZ1hdy8KK1PfDsdSCeMUwZqZ3cg4zzeWbxN8jU2R5We4jTtWe6",
  "key32": "3N93LW1yYBvix3Mr6Q4YpfHLox5HjxhzEzH64fgD9q4fowkmdTF2NSmJqz5fhAAvE6uQRvKarjJSre9UMcD6LiNU",
  "key33": "5rWLEBHEFRqmwFf1LNAznUhrqckr3tKHxfAyhQwkoic5cQDgn4dmoFDKow7yMFd1PDiLLLoRFRV3JK6o6MUgTZVy",
  "key34": "mpGB2SRTMaMi4rdVoHE4akDWjwv5w2scrPu3qmrKjgWJCL3RtRdsjR2ZASteCHtnme1R4xPz9sRrcx6aDCNT6Co",
  "key35": "4ZGNoFqX62tTUcRYxJh63L86Bp4VWfs9xjFNPsekCVk7j88qh6f5ArccPo8BBnmjiy9pqVvWGvnh9cd5Vttg3Wbq",
  "key36": "2JyT62DEMCMTtf2y7H7FbSuLSqhNjvL641AxJ1FHTXd3n96ZHAgWuNdv2DM34164Pw2EJpZXyLGMT7UapodgjkVa",
  "key37": "MikUWPmzpvQpZ6HnLZuiUNgw1V7EK3BUvbYDj9SFpnNANqramsBBjMJYygw4kNy5Jhjm9pUFUof7VAUGxSqQu6m",
  "key38": "3XcrNbUVRLqoSYFRcKGsaVA8BNnYG1KwCHch6A7PqkTKEFu3tQwbCcc2K8VBpwWnCfWoFwL3SFyWVVYYaeREAkoH",
  "key39": "5mRpcFToMTATLvUKmngHGCiYnssoM7jx1J9JXiNuuTW9VkjWFnbDvqEBhgkyDYPyx83iuou8u9s1bMLHmbvC5dDd",
  "key40": "UUYxUeQG9eZWYh85ufxKTHbaJMFiidf64Dmiw2X5e2XX28T3yF8xiW5MfK13V5X1QtLiGQAk1eWRDs7o5imCD9Q",
  "key41": "os7dis9UoxUwSpdv7CvyAcapzLm1rcdWqcp96Rf5y1n23dTifhxaf2LMSzH4WTPYQbT3sCuhZPEk8Vrf8hh6955",
  "key42": "2nV9sjhqmsJ4roXbqFVpMWNZhVR3U8xVfuvGmuGt86n2otHmk5Nu9s1DTApifTY4Ph8Di624nztn1SUWfXY3xqUH",
  "key43": "3o7fZt1itcduPjKpaztWf5gVcwH8DRGdkQovJ8r1CKUGw5XQ4BciKAwLRTh5QadsDp6XmUahvthYeE2dLxRpBg1f",
  "key44": "3456ZvDWzZLX6BMScCcoGUp8G5akUbvxSMSDAXN5TbGhBGC9GG2LjJ97Pk9fW83yrUkVZ6HPeu9GzKF9qFNU8idK"
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
