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
    "3rjk1UDfZkV1grpUE2zFcTbgys7E6Avz6jh4mTBWNoxL9ogoSs5ykNFo6RmUzayW8FmaCJ3jdYJyBX7ibUzuJ96E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3vKrbtayVjdmKxmNbSmNk5QrQVKobLode53fLPDZbUMA5MKRCJdxA3gsb5jxhas7hGGGNrEzZpi4NhRHz3PEE3",
  "key1": "28aT7HmzA2uKEF7VNZtTnZrsqBrCoZ1Yfaex7FdsBwg42NQfKNUot6mK9TyDnvHmu2dgqW31tXK4AKJ3YTNBgQSE",
  "key2": "388t55GLJftGK44Nto2ecmG9yvLRDpQotSE3ZrkCg54VMVgSmtM1n78nuJzhvdoDwurQ1d8TsYHx5PD1HXtWPTMF",
  "key3": "3KoghyZSRzpUcf3sUzvMC6o439birAVFWh439xMG1ymK9oBc8bo9JfSWi41yZm84mwU8Dt2mYavV4SqRn1pmcyEr",
  "key4": "2Gi71fcrjoHWNJX9Q5srXfgrqEQYQePtYBEPot1YhKs71B2UZaR9rBuHduEHBijuMftzw3JkHK9jTSabz6sZ7LLA",
  "key5": "38zvVR8YaLhv1HepPkD7kyrjifNxARh8mkjJE63zBucYfvJBLC3Aj78L31dYdkpKC4Twb2w1Pd124SZqdvssuvZB",
  "key6": "wiTzzV6mkpByuFsCphMYJkzLRcSuuLgpFg5nSATzZysM8g1LD1Cchhhg2YDWmkAJ8J6FtNQTpyPgJbEHK67CW5i",
  "key7": "5pzxUrSxGARcLQ6DLCLxKsdGUDE977VunyUkw6x92WgV4vq9vezru8AC5rGimBVwYqKuM8DQ56BS5Cxk7BDsdpXz",
  "key8": "3tnGpy9uhDB11gc8E6FPkuNfuQ7wmE7ayuXAd2APsxXTCQg5t2D486AihSR99sAWETpAc6mVYeFFsDoMUXnjYJ8G",
  "key9": "29VXRwLfYFqiExTeCvtg1zFvDqSwy1yxsg8aiNPELLQpTrGrZiEmdcknEY37LwQ9ehfQBQVGcZENpLXHjYVrNRKL",
  "key10": "3JztfXkqRT1w5m7hDGbvjAYahAZGdCqnSqxjz55nmDhyZ5NWZseoEnBDVFNFq51cCv71Vx2viMZpPfoLZxCj6jdD",
  "key11": "4PHKXJUnf1SLPHoSwChxeDb1WH7nQRtVGFanMEmowwrzveDhYNsTSCYtZyDjqbY2Q6CxmQDZAnqmRRTwLp2gMqGM",
  "key12": "56MsxFJRfox4YDa4xuEvyqZU81Jxedh3CDAdWLRK6p1E1Frj1RNVvL8gPjkFoCbPpGSMtJkCdkhoKXnhA9KfQpER",
  "key13": "3f1dgjhReJT467nBamqiGnd9s93rrAmWXrHxzVrN4JcCsiqTLJzy4ZgWtQ8X9cUZFFDCsYhhKgzeWdn6LgCwCfaP",
  "key14": "2jKTdHwscAH2A8CoLJYt1yH63rMjLHyCqguxxYHhSCA5DuHMtcHDoTtPk92bujVqxKD8KknyTbEJXM8o8naAiDwh",
  "key15": "nsfEjpCCommPUq2QCv5JFV2agpgf7oG15FsiFVhodWZmuyUUZcZtrYwNdCoYAURfufbzhc2Z6J88vowdd98aiqq",
  "key16": "jf5WNkitcRtn64GC3gQZ5MXwqqy6uemH1SjQjnxuZNJFQWAU7dPL8x9nyCkT94TZjDAN2V1fvbUqB5DRCVseebR",
  "key17": "4hx5DgCdphuJe8uzLRRWvMhNLAUwLgZyi3DgXJ2GTwFq5XPjHEP7NMPLuZi7WK6oRcStyemJXnbGEGCFdQ5ZGfm4",
  "key18": "4mRgLaQf2ot71eEB7YfFDRL9ik8wTJCD4KLKiXUo64Spuioq4KjNsciRjZLzPSG8d8aLYdy3igJT8zammrRY92xB",
  "key19": "5nZTShBHTB7t2ajMC4cgt9FpXTXbHc5o8iVWiYvXBY4a994dDzQwYnoAtSEPhbpr4GkehkyMoeX3eYujDHVQmtFh",
  "key20": "5chWiTEk2i5UafGovL8H6TeLjZuUTiX3AbffSJk7Crrgcu8hxApVmizRS5JwBNyup752YeGKQpuCmt9pUxroAFRf",
  "key21": "zZBmuGC4Gpgqa2CKTcKhc6UtAYSzVcK8X1gcj9sYkGq1pYwe5NYoTJqDAn55WkpU4sELW3W91RVhfcmyjMDKStt",
  "key22": "5eZFhP6vZdAuAd27JweTozkJF4ipsseotuaeStpWmu6pQkhMQqdhDLaiuHkFfu5zy9PU1jkobAuW9LnvWRWSQof",
  "key23": "CDTuYSgpFprRiT8jDQaXG3uEsDpJ3fChNakL7382wf3wzL2gegc94J9eK8NDtXh18HAM1GYkhm7SQ6tdmFtpXZk",
  "key24": "DbkABr3JE2j4CzBz3PEf6tfir9HLqo99TCqVksKZMmtKpEG9QkWaeDneUF2E6bHqjYgZ4eEL88ieDx4xfzxPLPL",
  "key25": "2a43HanJGjky7sNsDdJPAssoVt4JJzeuqf1aB9DpRNNxrrNdirFdcuUY1jqvygdmbYaEnR5KqrJov5S5kaqsrFtC",
  "key26": "4NHbcBw5mULtf7ZZUECpE4jp9qU5oB1TJDwTGi7Hf1Lg2Bd3QisG2CJdyYJCiJDryU2MMjnc4jVPmUhTX1wMrkEZ",
  "key27": "4SJ2tqfVsouoh6tmfuVGSyo8EtTxj4WhucMmiqSP5o5nKv1ySLufPp1rTyXSLUUTVMiS9F7Rp4pAzJG5zKUWpfKy",
  "key28": "3fMvySivAYtVU9JCVxwQJRCid22re53up5ZiskCkjorjKFwXXjhFNgQekPb5MkVed1QYMfz6Bd5qU6sq7KJDX8xW",
  "key29": "41j4zCHu8bfeWzYigmedSW8AMQWE5inYDfP1Qa6up8dZ8omL46yDWsmRj976tfSmN1vBywaU7GFzr1g4NDmqearC",
  "key30": "4L7YR77W4FbNx6Ukmv8MdnByJ7kJGeG1EFmGzGtaxGbpftMTdTxqB8eqaVrmgBnH5Znh9i237QpoAEEF9VM3Uqg3",
  "key31": "3BtFLhNariDwk6uU621UUjmzwW5WdnaGo6irhMMnxWHBbgRaZeE8nQtUewnT27w2tQQ7YqxSaH2BrY7JCSQRC8vt",
  "key32": "4scovQHiddrru8Fxj2NueYLFuwhZKwpK6f1Vd7vmMwG7f43i7v56ZSdfDkM9F1hAigtr8McGhKYFAJNyS6rCfJVF",
  "key33": "4JTAbKZxzRvrMZypNXMc6WhUSUpTSeSn5QH7uNVaZaYa7pFmPHjEJz2mw3pf1bYGfZmiQEF8T3YxeTb7teuFtmLj",
  "key34": "2s4x721c2FvLtkBYkEi9uu7718zVSQ4zz6yFoKvJ33Yh9Rzni6cvgMST7Nt8Ry1cmWuZn9ym4ipCMe5pmU3JxfMv",
  "key35": "3p2KfWmG1LCxWKSHAsAGTtGqLbzpynR4G8NKC21tvV6HYxEftiNvdpRwdmj7tkx4ouudXY3ypuNX5zbrZApqpBve",
  "key36": "H8XAWsVdnpAH5nqFfWE8HkWymaL3pJRRuoE4yAejR3YofVrg5oeS4SEbEk9fee13aXU68ngkqjPxtKr6si4gssY",
  "key37": "3FuXapG9dvEM9L5e6bfxTMwDag5wFC42yfTBt4UjPd5xXdkKEhuVX4QmqRBGNfKHkhDqHx6yJDouKHXoJpwSRxZS",
  "key38": "4wwhYmN7AttxysnHakUXMaWnPgbuKnsMkhapRFMJr6jANvMHh8kd27KsRPs89i8Szny8bGrHyye36CpwgFW2WvQY",
  "key39": "44uWSxhDSngbKhyngDxqrXQtaK8gQFjtkPEpvnVeExX6cU1LuBozopcHnVArhM4MuHA1zpbrECdyGp7wnD5VKnPg",
  "key40": "K5YPYGo1b9MMqnqH7touvVKFnbjs9KosDuHZKAsCgiSyBYKGGCYY15scCNoY3Dv9NzR3zSv5kgEuVXs55saMuC1",
  "key41": "3HMgW8Zc7PK1frmefacP9nAi6obJTyJVA2a55YHpKrCNns9PaWyyaNFYikDxqXLVi5VE3W1i6eLaBk3djg6yDbhn",
  "key42": "KtNjzAP9cWdtSx6pnWXRdNRep1DmzVjM1PFU4e9jHAQnBQSUzou1e3R7PdaxQJZSJBX2ynoR381jyrBaPQq3j17",
  "key43": "c3mE1QdjZ4nDsRkJQK5SJmSyavYzo7qJKCXbg6hjUTUebPR4ujVZPNftjKdVCrrxKf7TeEj9hDviTqKcXoSFL1T",
  "key44": "5XWeZ6fHVM31s7iwuw5ZYXQyX89GwxLeQXDY17H7uUQywPuwyKFRdzSYXkcK93ZNQoUwsmieK2DgTfgFSpy8kkMG",
  "key45": "4K3ygaxRYNeEpNjkCYW63H7G6mty34RS2A7b8mZngPA8Uc1BzcNQR8UDTtx6xHthdQwCFnoxPKs4XVtBU1ZLjqB5",
  "key46": "4S6LmsRzdyFp5jiJY1R4CJWktaDw5nWASnr8KcStfZR7YQmiEddCHCXEx2rBTZrxVUBBeBpM85w1Qnfswz1aJ8EN",
  "key47": "hwZsyY4G2BpueaySEMjyAD1h4HA3HjFEphneuw7eSwih1brJivrBuN9eManqtVs5DVtAw59GHxVVPY1U8qkjg5c",
  "key48": "2EvPHmS4qwoEoE3CVFiuj539YMHLa2Upzuu6vZpnAsSvn18mirfufWuSEmJTyDzDfQx4QXQSHFxZoPJa6uQAet5r",
  "key49": "8xbVLHfrQcwxcLpBz3vDEdjqPUrJhHAWpcFHwxrDZK63uEefk1h9rSACn4riKu6fpjYkesAtp5AJgqJ69rX3wJV"
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
