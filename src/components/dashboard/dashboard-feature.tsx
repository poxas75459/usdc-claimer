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
    "3AW9fGeajE3CjrYecL7Ai5Wn8pqYfvTSisPmGnLpX6Bmnf21AKzXiRm2kPNfKNoKW6SQ7UQXejQXLztmE6RWN6Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5dw8eKvU1CrY3NsJB1gp4cCHYGwSNxwhjXfbk5eihV9BcbxCbM49CovDJ67Lb4Db44tYmVmAk2QamWvgPfQJdq",
  "key1": "tycqEwYb43JWDvgAzvrw89ZCQyQbzs8wADz9UqNfg9XA2w97xRSu8qPHjeJSnjjCMg8C3Gc8oJMg6yYT1d56PYR",
  "key2": "pYzakeHY8epgd8BXq6hVuUgEtATcoiVFPxkUDUxkpX8YmkTffQk3gbLMDk5M5Hf7bTuxTgxPtxYQgnryc2hwNxy",
  "key3": "35zcditJ2u9UR6UdHSZVGRNhjzbWdYAak4JpDDBWRmJH9wmSZxL5WsgEngzLqRJqT9knhbiMu87bkTY8hTBp9S31",
  "key4": "51bgbFeAfir4oTPDzr7KNjRNK5Df3THiB4ew2LJo41dDeByRj5ucapPUr48Rz2Yn4GZ7wN87qB6cbNhWNVRcVgQG",
  "key5": "3yFbLEG2VnCCMdkTV2Lg83J82nAoGBKhPSqB19Bif6NMfD7rEoYcH7X4jQxdtb8iotGQXY9PQjAWbDPke31xJFW6",
  "key6": "4sCL3gmUVarkNm1V5QxAyMXEARdUgYRWisPUeLEp3y2wJT62VUekiBY8UuGJGqBTjwJ8GvXqpM4wM6HFQttwe2Pn",
  "key7": "4nTv3PGL6thqi4CVSpHx5EE6Su7hj2GRAGePxeqqVh7UhhZfChRgHcEFxdVWD77vrgx62AZG5ow5rrFE9xdijdws",
  "key8": "4E3vQxW7Ti3nbtBBffXRjfw9MkUYATF24EPpzmSYZmcYCnyzKwCBGqnimePDj7hN8VkDch94x4VYP9GSpXkyr1tu",
  "key9": "3da14D5bGZeLXzfy5qKHbYQfBEBWf1z4ZhEo8pxj7G6n2P9eqxPHfdetWcTB2wNLRhxmXox811xxghoW5g7UxG9c",
  "key10": "5KJXunkLH8ktiTC3iZhVnYA4ow3rfgkJWiarijgQt6PqPRwdmtmg4JhBAbeytRas15bVEQyY3E5qb3eVsMZFjCAf",
  "key11": "2f2YXwStKrdgEixb2ezBeUcucYjJqv59pFwZVbJ4nHdh4ByjKXH1nRJXr8jJudBtAX4fKJM3gmxxoDnbfrctfy78",
  "key12": "4i7425HxHokdMmGqPN5DxotEc9LXQo4kVZyxigvxsSumgHX7bzbbadj896BmHi8JY9sDGyVQ5ZcbDADuc24H5HXV",
  "key13": "2uYRduDg31sSRcn4WUETD1LAgNfac4wKNeEx3Q4nKFzNQzdUv7KLo1wnJhaHF5T2ox3AcQT1GGToawxByuCMsN4S",
  "key14": "2RnRMPC7x8V3RvXCR87Hf3oUaYmPbEqjppamnZBVMFeeK8LHMWtYNqWCCY6xVcVTBtzJtxZCgXbx2U4yVcM2SAEn",
  "key15": "aHBJoQpv837dpcgvnwRmCXmj3s5Yg3WfDcvepFQmVu1DEivA4RYvrzw6jVGbGqgRLxKqYxMHfyzCCiCcmtWh7Ct",
  "key16": "61UEHgjbxs5t8sRFTV2dxn13x8zGHEmd1r8wWQ8aeG2AzMC9PLEHfGgxbuDD4ZA7jAFA6WWCWgzu9FsxL6Tq817Y",
  "key17": "DPiFZCo2YnTEYeADLBiMPKUvM4ocYq7p1a9UxiNnkA37mEewA7WRwenxdnUmQQviDK6nrG6mvtnA5S55dsAweMB",
  "key18": "5qgDLXz66zvS9UWhDCbvTsLyzeuHbq6KVKqEk7BG3RC4wVgXkQAEK9dYdiJ1D2aG971VKSWuJF4ZQfpND3bFNzjj",
  "key19": "UiXFMA2EJDVFDSt4n3nMF15dxD2DyFuCykRuY7cVJuA1iKUv7XWZnXejsemrYr9iBLaApN9fXmdWrhAHrkdqA2o",
  "key20": "3PFhkBS9ivWbPM83gZkKGNagqioeY1jRTkbdXYSL4Tpw5m6jLWNL1bYf3jd3wwxXuDmDZM7ZHtfJdm4bAj71LGyM",
  "key21": "AKNWSW7zkzoQrkHk3T5Ls43XnUemR1QYskZgXdjdfT43xbsE3kd7P8dndhsZWFmqfvwDd6RtZx1zMf3Ek4cBqt2",
  "key22": "2HHEVJZpPAmbVhqHrR8DCwAnhXafVxxBzwj427QxBCMYSwhQHdjyKnbCmk468ndF4HvsEFSnP4hggRcE9RMnZEVY",
  "key23": "2cwcfKyNDcREsqNZQ4Nsy4oHEcB5ENC9E3NX7xWTcmWs3twVQFGb3h2yKtPBXsJshTeWpUQgUixHMSEnjmJHuL1z",
  "key24": "3RrLk33B7V7fuRm88APUHmrV8uXuSfHtb3ZLBCQ9B72YgTT4tF36jb2mq1KGxFGSMoJPM4rXXLKWGv924yyvZxig",
  "key25": "5Pk5z3rToMM1vaSrScS5uBvyocsC3LgaGU3xvoEjyPx3KuhnuTdVWFHopMdXBUtBodzBuhxwrePeGVh5WQVubvnj",
  "key26": "64eNiQo6EnYLUWbGFS2oSKdsW5hkGARfhTcT8A8ADKEbP3zFsBH5RQAoRPAZ3WNX4LLRxQDc3Bcpuf5MPeHey3DE",
  "key27": "4j7Vf99zqqUDDyVhUUp8jgoG3pD9uALdkaJ6jGCTnjj4g5vbrAshbfJVhX29jArWvmRByryPSTSTNnChwSvE8DYt",
  "key28": "4L9aSgjRfNxBuRJPSrCre4TLPF3QZC8qSkxi1wtUwDdjCHKWpBHiVCnt1VGpt8uDtMp4m173axjjDFh4SxMBiCud",
  "key29": "39fvKY5xJwEnJQR4a3T5TDkHmYP4ZxgNHZSsnLoDSQw9BpvdfQhVaXAbCCLnKuDFoNfG5VVTiH7D74dspHHhUW2g",
  "key30": "3JYgZ57kXpQJbpWT9cDqSfG117FVXvR39ATL2pefuHtr8yHt4J4Bkk6Vzg53R7BviRZCnhh8r74XK9amZEvuTnLo",
  "key31": "66DqhxHVUU6Ws144gsg4YEcjJXfKEnz7agd4Zju8TPWU42LJE7mBFME4PdadA65FcyJbLwK1suG8vBernFDnwaDq",
  "key32": "2cU6MpLbd6V39crYNkaWZ6be2z59zBZWPk1ezwMg3dA51iaUHedzdtLaxHFPN2n4ZcJ56yXoNUCPkAJSm1g4WMod",
  "key33": "oaWaW78VwqerywYNCxKsP4Cviqzzea7y9fTDxECWgkJczwssWp1UJ7BYNZt73D1q7sXNcvxmTcFVTKt927Sd1A9",
  "key34": "4ouj293McR5zEvGRsob5DjDRmtHNY7NFnHLk4jg8Ep5TsLwAH993jyoEdRt2s678Bf1AKUC83K6qdAWrHadFMWcr",
  "key35": "2nqYNaSa6TX3cmgsgCc7q13n4teEyoQbKXtsJ72ayH6b7b9DCjpmG3Xd4WYFF3cwyLVSQ3T7CLNU6FFQAVLLvxaY",
  "key36": "tdLtXTmwamd85Esmfw923dtr1LcySocBZNHinEadyv7dQde6zPUvccB5uc4hHEB8awMuxNcmTm5d5nD7zPKaMyQ",
  "key37": "23Vnp8YniPzFMVpk1EVqzr7vpAPvHwbVnBABMtB4VE6TzcmAXPyyL9jogALav2Hinbf8r4grfnYac8PgFSG3yaAs",
  "key38": "FEMgkvBb7PjfCbSYN1kYt4AeAt6Bdb2F4f9FMucW6bzZJhsY3WjDRdso6d5t97jYPes3wRpvTkYqtAcE2ryYwGE",
  "key39": "3GzeGbrEbR1sAFZ4mwMwkyKymi2HUzph4BUg57oUUkRPyC9Lj4WGjaMAzxwrxiFx9tPTbEiH4XXzwx1W83CuQrAJ",
  "key40": "3VF39odEMhE4V2Zzi6jcnyNboVuwE3wr2Zbw8UtTU4BVMYjE1Pe8bY6bzpEgj1EvssqQAcLcY53qGAMcNeaTxz3A",
  "key41": "3ATPUhr29n853XTFesB6qzduCffrsza1AwWnnbr2mMEozAdgMJktqh4m5awdbJ4LEyXmZtF9KVeAgv7rXDgwpwvN",
  "key42": "3FC9X8CicmdA9oBJkRkTDUW7LwFc4RdQ7fQq7q71YZ7ko7v9uA1ECBk4XDNrJ4aQA6QEKPPmX1PbeqTnymeY1zKt",
  "key43": "2qJd1CtbCRnxtHR72JKr2W7oMujFw4cM78odpLoJhqem5MZmojQx9Wkmydu75JdSSd3p7tLhHTcHC758KhtNPqFq",
  "key44": "5cZp7MNv6UcLLkBjeTQH3mCRcs23gqYbCeBicVZMvhvTew9shr9kMFgLwiaAsPVrLEtSa3zjyz4Vk3bftJ2NhrZd",
  "key45": "3dx4rKKCFBpCMHRxXAKpxxWe5YaJnq92qN6uro1aZTMrYW3Joczew4DpuEsJ2gbTy9gzSxoJj8CssQGv7CWXJRf8",
  "key46": "4AJepttR849yZ3JFavxsbTD4p4Q2jZGjkQtRbKkD1vDsgRBAswjPnLkeuhiuexskhYaFtraN5zJbBkPDAT3c4Bgp"
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
