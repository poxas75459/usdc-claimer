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
    "3QmcbF7o8MqsAZGsHGRGitWt74rFHbM9uxkbJgQJ8sJuoKvj7sNmK8BjAj5C2iWJK3oZ6VLgPJdiZXArsjdSgNh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irJqnHGuBiYLWcsjNxmzqZyscK9npWxsNkoT2JjLbgfkiEuAEiP4TiAJLmSRfFC7SqQKqpBiJdkMzU7HeURLzMS",
  "key1": "4oKXJKRDPjfv4ScvdTxwiu9ZDaA43g4kPLLywxWHYTUs9dW3hUduk6Yr5DrB84ab7yyzLjXYdAnSQwgsFA8L647n",
  "key2": "3RpnfTTAQ4ZSc25amUhPCJVFrdMB9ia9mTq1ip8hRf1tY9tuip59FRuf75C2zvMEo6KTFmxiSoRQASmVNL7nKZvu",
  "key3": "5gvhkJ5QZuzuCKsQWT3BnWDZgHSYauWkdFdFnndBYPJT5Hrtc5avPTeErqsKxiAELbgranvEsxsxESi7abEtyUHq",
  "key4": "4eXRPcAydajgMmzgDoAjkcLxdnoMPaqM8ogpnSJKmzfa7ALA1YHpKfKYuSL8pW9or8arpLteeEJFvykU4TetLJD2",
  "key5": "2VR2Ag28BMX7bQC35cUiwZikhop73ZFyD11tmgSNxQiwBMWK5e6XchNZHiHT5WJZXSykzc5X9aSVU7BDRv7Y5keT",
  "key6": "FN9q86ZZzbxHRQdDieSJreAVzw36Z3Y5BaX2aVCgHcxLMDkoLA2Sf3xgUqsvv4qyHxT8C4VoorVHsQcLMzomzby",
  "key7": "2uncFFEuYbw1NvmBMvxgKV6XGoxs5Y6W3TmS1CJSD17q89wqSgiMHNTdE5HDXGr43DwNmkaC5P2XbXAmUG1t6X6T",
  "key8": "4a5uh1pbxrvjFYnUsAauAABz21vtC2WahhkLF1aP13oHTxzGhqZXr3YBhGmFVQTtpDjSHS2asVgdRhbYAvYM7BnH",
  "key9": "2LeHrfEY2P8sAq5ycuYHtsDa5SvmBLpC2s6S8FVnEG7imLrT2JyqRBL48nmoRUYvY4iXv8ffK22owAbtCeH91hdP",
  "key10": "Ejh1WZq1Vpr4HYavZELcTAvNdx1EaSxN3YDdSWR5ySqrq5nUM5Tu5x7otqpBdJrZ7JqftTeWXdQH35RNth8HmsV",
  "key11": "F2cULR83u1bo5AVg4hF9xBK2JWBsHsTEo4VDYi2UpztfKYGsTg5sfdPEF1rtPoFR9BtAdsj2XqBr9oomwPKCKqo",
  "key12": "5PZGUVfxgvJ2ALQctTA85JL4wYPM1HBp6f2ewVo92eSgek435DzPKQ8CoRjRs6gFZPGThiR5b7QwitHjpSeECtUZ",
  "key13": "CRNiAiLvfdVs6W1kuWW8SRv3qHdb6PZPoocVYMydeV4TzHNZjsUhVt1X5vuXiLn9NRWa6SimWdB6coTWzTQnwKR",
  "key14": "4XPBuu6v7X7RYWRPQLBxxdsrtUsdLKX7o4pRevtrQri2ioHxpcGRo7WbEtmBi5sJumBLPcHbk25FtiPy9KCKdryq",
  "key15": "64YoEscePb5eDozRhoF594SFz7grG1XecfBp1WNXjEm126w3AGhpzQuXy9feZt9LyHebwwPBZY7ybF717t3GdGB9",
  "key16": "3N4iYK1qxxcxovH6YwCr9ahdWbPoaxuAnbEjkcokBeX8YmW1wCwPpPxEG6NoyEDzEJiHyHGYBH84ohg9TUX8Gr4A",
  "key17": "4NkSARSqZrhZoVpuLTuTTHU3Srar2Di9yS68jw1JqobDRU9XYYRt8XAQEvUkNFRq7fGWUSA64C9sH8MkPWGD9TFj",
  "key18": "2gsTfk4KJWmMpphxW7vvhny83Qy2RnbPf2ugAEFxgHzBPQHeSHGcuyWrMKxSaFCqRyAzVzbLfghBqWC9BLgA9JDu",
  "key19": "4G3FpptYV5f3a22aVBeVgsumixnWHtYU3xh3b3Dj88xeb27rXgVANsDuw1W6Cns831gCUqNkbpD9oxozvMF1pKjF",
  "key20": "2C3mzbMX644XmE3RnRb7JqYkumYAtQBiRREhNVHGrcya7XotrccnHE34gS7wniaXPZuKhsfBYXsm1TNpY7kUdgsf",
  "key21": "gt8Eo3HVsLrUhyoJ6cNgVaXS9QGTaQfjdu8jnmE3CKorvirX2GsVVBFWNpwoV3fMJZAiAUCcPSUXCL83t4CVH8h",
  "key22": "2cHSNpEQCbjEGTse9XRoRgTYc3fQy4yyakpYk7u1XM12jv57knzvMVjWF2XoVMrKLjDzjwenRFZ5XLSCVidao18o",
  "key23": "3kNxJFv45DqFFojT8kWL4tEHyAk6myuGmY5jBBP1nuEuaDTwQGQsAVd9Ngj74zWQaHmGChP2Khejbke8kS25DEHv",
  "key24": "2znae2ar3P44BmfATsQPJttiJvuAiABHovPbRyqEAsnV7gcqbnszxEqh9dRQVFFM8pWcn9FT8z1PqwPcVDN9hAxV",
  "key25": "22kbNbA13AYr79aq8i8Jj8U6gzEJWN7BPXHSmaVXSoYkd5qRXJa7T7jDjGSKu6MgqvxdFwoKFTfsEnvpsQwTGsc5",
  "key26": "3tRYJDDfr1Ze8T4RSxdZVJLvfNXDFr8qNfN6bZYtJGwJQiBg4Kyqa5jzW1ARhzMesoMcwaEA1ZNi9hZRGRHccVCn",
  "key27": "3BKyxE1iPcmavR1S6487weEoKgsdZochbJBB2Rw2x4PHEyfESwjGpEc2CCyaNArQ7qWA1iDbHxFvpZjdDtg5UN5g",
  "key28": "2GSz8XbpWdJ4Q7JsMrveu7UXx9WpzT2YkDaTjUHcXbcHiVadfEdXiZtCMRpJyrqRZSZdGWjdGmVoydy37mGWxYzq",
  "key29": "3pVUY4HHRcyvt7fLjJomv2yDkR6bmRTqcZ1nEcYVHEd33XXgCVq8hyZRasNfPQrrsCh4RVH42CewZHg9xuCE8QPp",
  "key30": "4oS3YddQRpufStD8EGhDAVHVDVUUGyTvZL4f7cwxJzwuNsuPoebvfPSofDZdWoY9WhGX5aLf3uMcugK66xonEso8",
  "key31": "48JBzeugy9dKFAzqUgKzVBVGnLGCG75AX9T253DyRcGiy7wAH4Z1Z5TGVM6wCYbouz3ZCU4orcmBMusSE6EW2bhD",
  "key32": "taHvfkZb5GPG8yqGrgXGPUkgZhMdTbox3oX1q84LMnzAzYeNDUEkjNVsvnE8ForZsuNRQm1B7PBDwxHDVKmq3Q8",
  "key33": "nMLgvnMrBZzD1NHipw3KAwNnA4hhEA3oBDT6zMi6yLzvhC3MVgpDi86du81zeQoAHyVrGxFracZ9VWoJnAH6cb3",
  "key34": "5bLcXkV76rhBhzzYdrPsnkbTWKTVw26AY4Hd31MjGruDHZLqoUgRzrydmzm55pLogd5vM74WFkkvrPTtqktwGP67",
  "key35": "zxUkeJpZUWzM8fQ8zUgqUn7D7ZpQzB2q6vf8hfeeNoTPNawieHkpeeAXkKLpXXbKhMPzv6tCwgahPmJ6fLN5FZC",
  "key36": "3rfEHFhhz5nSx7wSEmmVxKCyYVhokENFgrp4GFjukCMztL1qbmp9qMonKRxgrt81NyDjpAfdD4P7gCkFnvUAhors",
  "key37": "58j5JA38LdoJqy3pML3HEY3KARo4iezBWtxiLQAVQsh2NBbzswh3bdqvN5BsU4jQdpwq5JbCpkMQGiMbnytAp7qo",
  "key38": "SydUFZREaGXPFjyXcKDAJNMBUNKDx1SL6Rwtez5x93kcvBuoRj22o5QPxNiGng3TdVwb4ymTkxtC9tQvU3vCtkR",
  "key39": "5ZCd9VLUzScdkfQfgJMfbnX3dKgTFozj9btooBjjnWpT4ztPa8fX41Phjntpf3o9ewhtnnmTmgC7LiekYDkVnshP",
  "key40": "5EBNDf6r9zkDJYT2Aut3GNokE9PASe8ASswxsWA1a1JYwVs4zxb1u5ZcCKQCndq8sbEzxuGdJ6YwA4b6m94AsRbP",
  "key41": "2KzBcufxdb9QkmgVWb1PmQ3wmJWxPgRj7oLkVzzSZgjEShqCSUrWosy48yRJBpGtdcJmDKz5ER6nL6s7fPDfvWeC",
  "key42": "2m7oqjcWXCrHMjL74VZ8yrgjaPeES7aBwNGddndeDPNuy9Wb85XvCHGkoauYTEFLhHqq7yGjsPidjyxcJg3r8uwF",
  "key43": "2H2hGRByYyuxffKgRe3spQ1g3gJFuNkBRpJcrQycBk6QofjbfTHbWXAUNGLwE6dHEmBU8hsm588jC7uQi6idc6kU",
  "key44": "4WRgVLY3Kv92HNamLhceLtPZzvG26VonrQvgNN6q33PE4sDmBx5Lbfq2xt8cvmnKBphpGks49LNJgMBm6eittCjw",
  "key45": "4Z85xR1BEAFT9TDe7pPUWGu6X95yhuu2TdbskBK2qSoGGVWny6Km4vnkgT5csZYyCPewy4WhmoUVKwSPvhSJKi9R",
  "key46": "2cJu7SQzBmSsEQxxQL4Xi1yJ3kqFNQhKSoZmdBmq7ZeV9NFx91yJshKKfBiuVL1TznvYvCJDEmSofxmozrDJRdE6",
  "key47": "kEpjALMJzEAg8Gd7ftVLFQdgbUbWhE89oKDFYBGwKQeEuBM2LB2f5Gdvufbufp7ghCzmKLZ1dLgEKwvWVfwqs66"
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
