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
    "2F5WkM9FFmtp2reEwR4v4koz9p914SoXFuHvWGSqLU6BXcmZWkXQudvH65MpUStsnKGzkJDpuNRh8MqsfPgv2TWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXG9ND4eMhpbHwbAat7WqdkAS7yEARRtawnrS1GMmQYEUzZDPNeVAuJmE6pbQnA63oz7GrfuxPNpHXJ25XDY6mA",
  "key1": "tCGxoDVvzGARNABHXynhPPy5JJkVGbxSqygyHjdhakXTNw9D671JGU3zi2zR7KL9Tyuww4LWi4m6wamKyTSqJbC",
  "key2": "4Et2uaCQLdGHRethzoPBnMC16zuDoCuCadz84k6rL16jSpwhmsR3ssDdLmikr83wT54ryTuhgngurmYqGkqEscVw",
  "key3": "2RREq4QywybichcYhMXvYXMVjgmUigRcCLaTisPbx2fEM2t955YhjVTPU4Yzwzsn2KqUC3gdy64JgtAbcpmEfFdN",
  "key4": "4xQQssLrjDkj3TmCrp9ehFZgqfZemVqqcuzb5keop1PQ47MBDGdy485T3HZ2PYnTdjXq9mHUUrKLb75JPE4QfNTo",
  "key5": "4NmAEP7ZUq6LoPFzxaidrn8ej8TdrMQ9VKXgs3aTFHdqr8oKngPspxxK5teW22Cq8cWXN4XHaHwdErU3QiTmCgHE",
  "key6": "67XFTtL6QBqSDgU14iM8wfjoDCwfPvQUdkqUU9CDkToDVnhXAAjHG4LyGztXfAEn1uE6VVf2xRmDP57aaPKTAwqQ",
  "key7": "4uGf2ePfSJiQQYbAzHF7RPKegxaeafuxQan4c7kMFPGxNFKi1DTy87oPP6x2E3vopYdhw97WtXbvq6cHUEBuVmrq",
  "key8": "3iWUrJpMhMM47LXgiH4TZdcj8CQbmajEZKMs6R1Mn4oKdUGrdeoedsEfvhiERDzVmi7rxKNGcbz1BEFHZT5dqX2k",
  "key9": "AskB8MzoxC8n7BxoHEicZDtWLJx5vXPfvcWWWDDKgZdLiQNuD3s3WkJVR88t9WXsdHVjxYBJf5xvP245oEkFXPN",
  "key10": "2ZRHY196wLUESUrTrbq3Hd4qmX8eXeav8QojVqLsKXbxpuSkUbijPKnhBHrwBrxsTzMpqgoBNVQtHaWBqhNnyXYD",
  "key11": "eDxi2i5WD8hXAdfjEHu7XJBNRY7Wm8mbthgC1Vk8HfowNZYd51CYE7toQj3Npfviar4zdDmnJVBX3iK5QxW4fj6",
  "key12": "DRXhr438rbYyYZA4HzUP5KocGB3FgcvtJtZAf9yuM47qkHS69n6jmpvfmWGJerNQ3wtaRZ4qaZ9Vu5eGqxaNhkZ",
  "key13": "2uzXx5SqSLvrPZ6E9sPexsQdZr5SyFkJhw7HL4ZhRXiGTZWwjPjNMiXkdsZ6UX5ymbh15Smho3CkbmDcKnwaZVhP",
  "key14": "5oi4R26AU7tVR2mKk1w1DvJACbzLvcW8s3Bh6sufuhDWgnoPQL1918kc6w8pHzf2qvd17D8TxxjsVx4KUYCKzBoK",
  "key15": "43rWZvisvibJs5kTxTvvLbRnhX2NWtatnPYUV1nXYYtzoy2QqX9AV5stedbQnRBDAE8v2qzdYAgGkbsVuqc2UzbV",
  "key16": "4Fxau2fszGtAMfmMs7j6YzwCWy3jwCUZPtuqvgrS2WPMtk29gjwGriQCo3JkHis9r8mWqo6dyUBFzhNG1rfbPLFu",
  "key17": "PKgvaF9nnWowPf3cQssfk6MuD9sfKU9SdDvxmW4aRKhtkpCXE9i7zM3JbJxNwmnt1SKcjdBk1FcMDJ5uDgmuFAX",
  "key18": "3r14jRJm9vExWe3YQizbapzjBwsG4LsahrAc1j3ZtgAU7RjZF2J1HQ86yxs9Gj7iKCY8ix1Bh3zA6qDnz5n7ihH1",
  "key19": "341UUjbewG8HE3Z4u9r13ffw1bSgfbcMBeHc72UGfHipxUSCmz7wF7RUg8yTkNLQ7fkzTDszvPVFhcH8ueaSZZQt",
  "key20": "438TBL8xvASRqrsnuMKHodMNq1Mba5d58sXxy16Byo3F9HbNnt1UUwEtjPsi67EKsp3kMuGWCxgzjVME4FTpE9VH",
  "key21": "5rG1XGUeLDx9W644uG9wZYxcfwyS2wumRZoeQFcyNNxRZrCMJfUKzntg1MGppakJnAg42Qj9xExEJUpFV51Ktrwn",
  "key22": "Gscxoy4MEzp8QgU6FyK6ho428jMHx1Dp73hd3X75x7VqHdSo6etftEq4ZHe16wKLty6hwt84JtPeod3paU2D3oP",
  "key23": "3C441MZgBxiyxjAkyS33C3rBMbEhWVKN2bByuKvg3AMhtgQSXmMDrhX8PpQEMawaLyg2advqMn2FZSSLWxXWekaz",
  "key24": "54pT4supoPtgEXcqcYxFFvndgDTSzvgeJTt5huntTHgkS17yZqtxKEAYBT8Vd8xfs8feT3RbPxj8K2C4fzYnZTD",
  "key25": "29sBgtxWz5GH75NNLbrkmwhk2D8Ti9gFNTcpyWcHHmiBBC7SHyKH3zwXQiERo6zdrHZkZ7B4vE7SnnetrSx6LEqo",
  "key26": "51WrE3QsG1oshTk9J39vnC9hNGvVf3CESsWBtVgHGXSedd9edUab7zTTEzm3PaxToVPHv1KKytQHbtb5gciB25K4",
  "key27": "4amYx5Vic4rXA87v8oBba99ti9G7y2sGPiCABv4jgKLT6qGMQkqTjh8toee6ydzQpmdHJntyWuKqeyLYd1pZPRZa",
  "key28": "656wXciKfVEYWLNkDgnXBuHi1Zz86APTS2RwYPu5P4j8WzcYntCJk2VajZH9skZ4byQkdaaQKhsvptuA8Y6tYVM6",
  "key29": "2Yo7DDHv19rBt9VBNduKchcB5juAQ39DRHD9iqPUnuDNTnC9AUo2SpFBKxSs9pofKGNCQ5zw15KQDh4wfQWBWS2F",
  "key30": "4YYYkXD9mzWDWbyb4sFHAfsGbq2LkJAEkhJ8XyRf9h12hiKGdYAnQKXrXLswEbFs14maY2BzhLMQjwkrsjNSTSL5",
  "key31": "2arpBEBCRupTMGbjaH7o3yW8QxAQgA6e1Hxwc1ptPKBBeYGBgfDAX8JVZxmcmcEW9F2oFtWrXCY5Bgm29ucxmCS9",
  "key32": "MkDyHE6r35eWAiiF9dP7VXqUcsT3UibqnMjmaHTnziPfuyeKfp834TevXDVF3kuSW6h7uEs69g33364Ca7KzPps",
  "key33": "ySFm9XDJSqvukJZxaDjzkyQ2bszfjhQC6nvCkSwKh71ebS7pVRRtx5r2kUNFdLbK74wjunYf2JdfFABVKZi2nij",
  "key34": "2MnGuHpcwLrJv1oc6VMZrdCKNSpmTzZoSUPqQoJa9fyGVGRkf3kF9mcHWrgpLH22NEKbyPiRLBJJMgTyoetJVLiy",
  "key35": "63tsZWC2gDKiSfxtxT1sVGQLZvaeUU9a6RG3T75iujfTeqocLE715UsN6nWxL1X3m9mvx8xmnVC4sVm9BmRdAcmK",
  "key36": "39Tc5NbZQrQCdon2oVza7D9QuwJ17QusihUt7PQ9eXQDzUqgfBCkELyrbLtwcbPK2nXU19fgavBP9YzAY6P8jCsx",
  "key37": "2mBVsC1sBHtCEtXWb3MNJt1xu3kSuEgcYKmqnHM39ocmiHrKaQH7SVRixudJCAsnmvDSjJByCpYY5tjVDT12qFiM",
  "key38": "5rWLmyZd9bV3M4ZsTyaXt3qLWEiLBirFVBfZcdUSVf4YRQ8yf8wYEKPFYfW5QKhZQCStZbHkrejsNndSFVcxbT7N",
  "key39": "3yGpcys4mJsGvwS71AHANSfTExDuW1TuMn9k2x5okvtj9PqXfbJzUeFaq3rBnDZjqo2rjZCpRfxumWiTtkMDTaJL",
  "key40": "24aozg2KwAqJp32daJAVSomYBV9FuFHhea2i43gZnFcGgStzVDVevBudQGiZKm2CBDWUJ9zviuCRYAknZRQBWeVL",
  "key41": "YeDPrQe9VnGbyhyEEUSAozRozTJXEUEfadZfJjuTz8vzbMxvei2g1kBJBmkLPLWKLVx5BBsPWoCGk8xcUABFjJc",
  "key42": "5asfywuH7VmnxoPizC5hjcFesUzFKekof64xAU7epDZK4bZnf6XcqNFkmGxXNf8JZdgC4WPMahfC9G9tZ3hrmLky",
  "key43": "qHa6J5tnYE2tHq95FvtFvwZRuxWqa4YRc1zrpVUsEgfGce4mz54maEuLeHuESYbFifRS3SWYXHK725YAUqfCiTv",
  "key44": "Jjieg75QEKdzic7zHbBq2GHbw78NWCvSYQwcCrDEea1tG2jPQ5yALcGivtwfeVxmFE3FhLZUPLqJH594LHj8iKH",
  "key45": "5PBxvkDJyfEvTTDeP3VTW85ZixKgZhaP1coD5yVAvWdb6yetskpeXT2XrHBbQzYATXj2EMxa6VVwLcdJe1ZcfAhG",
  "key46": "4SzgBmrX9jPmq43zomRkQnfMcnu7EMT6hak97jVUvZ46L7mZ5U6rZfZymyrTySX95zQHuTghBPvFrCvvyzRF7mox",
  "key47": "49xbH5zs93Rb6PHBy4FsCwtnn7XGprQiEmAecgbvHsw295D3NbLp3mrRErwi5ZyAY2Z9SbQM6EaeFor6SqEEthA2",
  "key48": "3Aon7PazD1zNbqKNSjECWBPcUbfdMG7opCKjrTwcUtHDKuaBgKaRWbdfPeCGGXbPee5rGykwcLXR2p1Ko6pdZGct"
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
