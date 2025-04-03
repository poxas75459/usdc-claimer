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
    "KZo7YKas46jmba1RCS855iUeEobc3kLgKVfAGU9riPvGgtrkktjNvWEagHSJUMByCkUYUMsvqSsFjb5bt6YBMvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsg5opo5trtCaawbnTVdmf5rC6Z56sodh7T7Dn4tT7fznoUjgL5VY16WNf1iS6gbCEPfRXuG5kvYRyvZXjzJ2XA",
  "key1": "2pVwB6LJ7xu9FhmoZb8L4fbGSBLpyikAg1TwnXwRy41Ff11fxkqzVL7pNfmk2jpsdwU384BHSAzKMUNDA4nVrhLT",
  "key2": "4ZEsPNeJcvTqNLk4Zvkdu6Apaj8Jur7TZjyQXXAFT3WdZBLgMM5bWQzhuwj1nY5s71YVG3bCzVnQnzsQ7nwUW2E7",
  "key3": "5cjKGuMCwmrZoz66cTUJofVpneGXmqb2S659J2wvHWhSwY2aD79pKJVJiM73aXGvRS2AqymPB3CoTpgQ6CnaxtoU",
  "key4": "678gzGutuAF8MRVjME3PExYPf3Zi7XGXbACVUp6nMavpNJQK5V1GppmvCALu51dpQJVxzppJLkXx5CwrNqzUgrkN",
  "key5": "5MaEjrSvDoqWkL99eKii48q3Bh77MmfLFYidRxpaVTyhgFGEV4jxAppnCAGkP4Q8X2AC9RWAjAoqkxb7VVo8uNq5",
  "key6": "42iDDYRB8wsReRJiWSNCyCjPFQTivt3UL1wg9bWMeM1wPx1fZWra9gpmBFhVo5pxpcFuwVQdKfBgd3NTm1Wt9V3",
  "key7": "42aQ3LyspU22iHVx7ts2b239D3bZPgK6HHAXisUyZpsRGQFLn13abGTH9Y6AUJvva645a7BfvR3c6beMHcHRVQvR",
  "key8": "5SQVJS9G3yVGVyqT7b4yQCeLirbxcYpfB7oBR3rdGurxWeYZ6pSjbhVgN4R2i62kHBUnkfereSmd1v5nhC8neTFi",
  "key9": "55uXADUfQME2FC4uPNKZwmuqJitP7tS3UkvKqPXyzMEh5n5SomnxunXiF4iWZTuKdrvGuK7Gff1v8t8cS5mhVpLP",
  "key10": "35snn3z5Hb5SsyRfkqnJMgpMYmb6ktYvn3scG5tazDgZqLC7Wqvs7ZAgEN4BwVaBdGyjPwrujrud9Bk6Jn1n8FRg",
  "key11": "3e2iW73ikGCa4hoKW6rPMahiEY9kSd9UiV4DJ6aoSHJPVfL9sPTtLLXzorfvxHfZoSBtx9QCVmQqMZCTg7oqG1Ar",
  "key12": "5W88hqT8xfGjTDEUbhVHety5WNza9vgkfFX4GMftdHpPhyXKHNK7bZC6bXVKHoYNeg9Hm4jho3JTEDMA5sQ75nkv",
  "key13": "5u2n7ra23aj3ponvH1Y8hc5HcSPKdKhrfDQr5KTLybmgSNqPhSe4kCCimga5maTiomSewVxXMGhCq1uaxEmM3ero",
  "key14": "4ssGz7KeXryuTa9gbRMrprFdDZy5Y7GKtkXDmtmqCHzLzTdABUE49uCY6wfs1U4KVYhX9VuFTxtR4ZeEnbRCMXz5",
  "key15": "3xDwWqHfrqvSyKxzo5kfSstHP9mZd9e8q7KUPFMwQTyvv8NXBu157sUizuCNRSGY8PNjNsSiMYAMD8Jvfh611p41",
  "key16": "4y3Vs6bYPLAhSGKpGoqjBpiwXyXsQ1aGZyvRnBEnfGCy1g2RqL9ozWLYQvAgnQyCWZFwBMsJ6JLiFgyKhrCRCdj1",
  "key17": "41qz1jhZmsm5MUPUKLqWxXTdPfx88dbwKm37pFiAhSUKX9wiA6Tcw4SBhUkvYzLBumapz9zQBKASVntWTYYGr23B",
  "key18": "2mPoQLp2SWB8d3jBR6WciSdMauG4oVBYw4kcVinTu321oNd3R33xoNPJgXbaV4QgYnWzoLePb8Se2jLcoQPAXoYp",
  "key19": "trvWgkqPv1Nf9WvhgTbNVqCEdDY9EeArK82YMsGX8HBn6raojLBFURGGCdKn5JPeeyw6Ecmw9qFns2Bae4rdvbS",
  "key20": "fiKkvUd1VfpTkFhrcvqVWs7C2dUKxinKBmeLC9a8Xq8HvZZqq9FMnUmDg3sJCceCigPKQQR4Y6G8xY5DmYvpYdX",
  "key21": "2ZNNgqz8JFR4boJDs5wo8yKyH9fwsiBZm3f5ZvWZ4WaqwRQSk3mW2AFtjQx3nvTXt6nnCnFrZeXSu6AHfGQ7Sgvm",
  "key22": "24Bq8dywwSDUMURsxModRT4yreyDCs1iahKzDEvgNassXeBUTuzPDRX3Pc1wGMGFvX1sPjD96C7hozZQE8T6vtJ2",
  "key23": "4zosZecb7aU46eYWZts6mxpimqNded6qXenG3EgiafF3YaV5ecaaMHUPKtFp1dwZVBy5dSjDLpGA59YNxHs6hLZ5",
  "key24": "34C4SAqGnRiCEZZ6f24rvsZNU11Jwj2JcbhhnBTC8fauLEE6HnbxJoQ9NnKho8uBktzjtRwng5b9bcNw9CiXueR2",
  "key25": "32NBEYLmsdnHfT6K62ESRDMv6x45QxZc6UXDojfdREsfuEd2NyLfahcyo4DrhhnnuWZErJcT5cA5ionPvVmqPdhM",
  "key26": "4fP8oMDFPTGMPtG7AKAyM56ioY4M8WqJKRG6wNXb88KAE1ZkzS9uAmP43ySmJhcxrKo1YByMq6EDGmRcV7g43hd3",
  "key27": "517FZW9xGbQ8j8guquJK8M8SQYTpN91kyj59EowJttTrq6ofnyUCjABr4Je91GxXnfFqQhJaun9qhgQ52qCNxK8W",
  "key28": "5zNWv2LriRt2unxhYbdsfyVFxVYTBBAHkvkPvubv3pt3qPxKMt2WR4MRREheMzhwEKAgbrbc599x7WqVcNJTDRgC",
  "key29": "5oA1ntJEVXHa5yyMdd2PX5QEhbRR9BER3zC3K4KS1iszE1MexfJA2JgXM6ehhphUaJeR1mrpnxfkvtkVX8mtb6r8",
  "key30": "3Uiy8CjwL11yZt3FibdHiwbNj5jRExdftUHieKVYr5R72euXuhfo8scuAzDVoPk12Dkh9n5DuspBinmjmM3Vpur6",
  "key31": "2WzsGJmPre9T4UX1iTxdPVmzFKUw3TkjxoVTrerf8Cchro6pBgTnq9RBHbCm6zcyPrypa2wdCvUMUsVLUQSXQfTy",
  "key32": "SbpUCkmkiCCuXviN9ZpZGRVwGUyQG5UgXmay7em9vbyimxnaHYvXV1SacHTMtTRJWaVc2fu5LEEgC5PBR3jrmzF",
  "key33": "4hoxPCrSnwbrsqcMKV72eoJ5qZbNpoYD4n7eVLuokAE19tsxQLgCRdx7SKbNdYovTZhoafMSGqCZJ7ydQnHCRZQr",
  "key34": "4BBQQ1emCWHF9dF19yZwxanByxvEpiEnx3JE9tZ27ta7Z5YqMcatGe4cEMm27zmjLJRw5RznbyuRYjbEnMoJtr5r",
  "key35": "5TZL8d6ZESSYA9kYu5LATTxgfMBkE3Uc36u7Zj35A9X2i9rZK3hC37Jts9ame2UcamdpNpdpQn8qTwGEJsLXq3dY",
  "key36": "VDw7faWDhW64trC79RBaEYLvc51mwQfDfgNhPxKnQAQpTGxQ7NqP3YC5twMKVAhs8KPBkBxKTyrezA9EDYkGTyN",
  "key37": "D2imSJ4pjJeTgbCXXsj44barQSLU5cUYvu9qXZEyFzLCDbmPnrasxL3ztb6c6ktEUBQMukHG9FtxWDPEzwr5BSb",
  "key38": "23LCj6h36VsJrHan1nMsVkTiHYLZCgykeKnPoVUnRS3tJT8nGBbSrLCq8vt4g7wUqMzmDQG39jRqpTtGs4MoMbmv",
  "key39": "4BLWcFH119BbvXRu7ydYyB4b7u4HUcUpznfZVwJNuVZNecDYm9pELwQsJZXhuakKKLyNkuyd5e2cBkYqKAYiC6uQ",
  "key40": "xord2uWYZqrMFbyiiFhZdr3C4eFw8sGc57Ttzs76y8TjR1UB7bKsaZzgTvpc6JQGnUFysXmqjTdT54JVVBtKGea",
  "key41": "4YzDcndEcMmiSLaauqJN1ZyLbjfzAeeRGS7UkqmeNG7CVDt8ETacJb1cpFd1g5FtLGNrk3uqSQGN3SqKsFYozpk",
  "key42": "5HJpmHNPfcosWj6T6jbnuz6KbN5gfSSCsWuQAzVBLYZ9AwyB6Kxk39gBVGN2KfDveJdN2DpcqzUb2mPsfkuBdCgS",
  "key43": "3zm2b3BKFYcmTE65obsqp4wYqmvRD31V6QcwdvxUBJd3fVD7RTyCXkagbMHhMbzbp6NSzF5aWRGjJFNDqSwtd7f6",
  "key44": "2Gag9fm92YyGcaALxBzi5FWdWLxzb5yaNNtetrtuvHr5FxKFVR3E4bBX1CnCgHE4byt53UsYAorGhPEAuRLgei5E",
  "key45": "4bjvXNX33cPJYBSP8sFgTMCfzmnDxgczq1VVCwpNDj2xSdRh5RXbqSHk1ueVU3hWDVahctqjevWsqqdZXEtDCgiC",
  "key46": "45p19P3xJzDP8bCWEHum5qm9J21fyTXDv8eT7CC21Rnr4NW6yRr3BkaVJV7iHZ58f6z9Vq76MKuF4Jg327T1LEiA"
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
