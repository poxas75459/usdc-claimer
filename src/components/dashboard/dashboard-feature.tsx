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
    "2qH2kTdDhuAwxqxNHj5rtcZWbAoKAWsuR2bBfjx7hpLp9mpW1PeBSdp5L4t2XC9GqH9xbWDT6fNUAfVNqsnpBswE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zXnBsDWHiGCLiT4TsBcABdeALJfadmZVuoSrnpJzxRbA3UKkTiJbL3GngJmUoaMeL4b69G8pKRyUuu2wgn15ovP",
  "key1": "5SRDVk3U5UtESusYVihofKADEirZELyswFrxGxjpdtZyZ5qK3QJZXTzKSQbKvtLWo8fSdo8unQUcLn1PMNysELsW",
  "key2": "4R8gcNEjxHzoGVgd71fi2tvpVtg1QGdRBkFbRRnX53d9UqsHbLSVqyVf9nKLBqZrse1GTN2XvDkTfAkizoP1dhd6",
  "key3": "4fgsQAhj45Rz9evCFxSeCT4xw5HbLLVF87UMuPhiJdbJvxuyD9KfasAwCLfxBXDARXxR6qErKAVYneSNuZoiRhfd",
  "key4": "5sBeyYA2Rg6kgezDaDk45FEELnr5qpQxD2ZF4AnmqtuzcQrUhtrBXNr1LQz1J631MWG8dRFosJ5ShuFRE7eRuj4d",
  "key5": "2WApLz1TauTmeEiVB9DWtLHZzXdSax4SQANzMQ4C3MrKLegBZ8amvHDQ7Fy4yAehkhemoanzFQKgEN5f6PWYy4N1",
  "key6": "4636oxU5V7BbQiu3WVtJYXrW4Sogpyh7cjBkaBT9M8HL3pmR5hwc65RGMeM4NPo46VYJ6NghqpLNQqLYkQFVKQjs",
  "key7": "Z2YxgXXFfQnf4WpLZQufkuwMLD9EcpJmAk1mfVCxeYBQ7caYhPho781ysXrYkRa4HaJ6k35FWCH38i9WnCe86NA",
  "key8": "2fXYhwynWU2dZvWe6wMJvMvYuuAn23C2gwhHZFCt6KWCkQBSpJpj3qjdA4x6kWn2aFnNgwaccUEJRJa4KUpSPAgm",
  "key9": "1jysJnKxoFBcdUwTgkookNQq8pTZmAHQTtVU7Mvcqp1hcxtsZH6wtzmTcWgeHtyJfEKcPHuF2SQqqUVppB8zuZH",
  "key10": "9B9WK64wAr4UTCeC1oyfkK7YEvdEutSeJ4yJiCRbtoTdTWJa438HwTbR3c5rdsEF6VVnEk9NMfya5kLZRVRTu4i",
  "key11": "4jXdEnMa3wSkipyohaiBiTpJNHAg7FyQEMMX98byDBRM1Qto7Wrad1yBWsK7ZGJPvywX5jhUpzm5qsSJbFTux8xc",
  "key12": "4kFnfnbGdRncQYTwUCwZhAH9KmE33nBhRK2se7Z3JjpNKh7ccqmG1wE8fAVQqJo2DeHaMpw6NpqmpCy2BPKvBCTX",
  "key13": "263wJGYeSpJZV98ofQPmQtMfcvLzgxvQd7RYAzfUdJYzkaK5URBUHR41E6gWoktYcM9NJL4uJuX1GUZ7xZmnDAbL",
  "key14": "5dJkfyKNSgE9vdULUdj9xGJ1AEoT9BhKkhtHv1Z5sXtm26TzRTkKG2tAawNyVsJftFXNHMDHZbnX37Nt9U45Rwwn",
  "key15": "4WxJJyYEox3N6cBdczEtmBwiVwh2sfteDe6fWen45hshVmVrRtrv3nR3JBLT4g93wuFPmkAD9hWHcQX5evrjx8jB",
  "key16": "3RLAYMVcTiw7zxnvmWtSpxSWiXAcRkU4kCra3u7NBRE8QsUMCggSgHf48U4ZPAbz2rLkk9EZbB4vb1UpjYEGRzjE",
  "key17": "2A85ZYMdLV9qfK2G6BBmFXbkM526TKLGhyecxJzYYZHoPNqAj6LJUnsasZ9MVSMizqtwUTBqSnwW5kH2B5YFVmQk",
  "key18": "3dFcJVv3ugjBEvmWvPjQTVuSCDh1GFy27ch4UkH2VdbekTUuUpmsoEukh94c5FkRrHkgHB5B7KXrBQ3AewUPdkg6",
  "key19": "hRVu5y2A1TCDVawuiRXRBFJpyjjnPz4ZraumPgj2gjZBUqaSdB24bVh7QPjBCMJ7FiHi9m42WkGWjsogDFv9FPF",
  "key20": "65iNQCBju28pkJV6Cimj2uar98gMKgW4AsCRr6EmwiKgPw8y6YFYZWcrYSxiihNBpv8DpQdcFwd5nqBSwAW4ZGzK",
  "key21": "5R4m1CrzwY7Qu3dhvX5ZodmviBovWFgndRrNA1FPS5wMtnLxokV5UPZV36XLRp3FaRWzdiBRgUxDw7DDX65KLGSr",
  "key22": "4jibDGAts1KvPa7KnhuXwNa6J1EoJSfFBkio7V6ZT7ibcoJApvcb2yYnyAVbWuqfCsqD8chwJji2zpKqaPp6ffN3",
  "key23": "25tzGeegmJjch4ssj4i9ei2jkHJhv8D8xLKRx2WHUvwedUJ6s2SdjJrmgEWNREn13jiwFxnszPS3bhFsPTETGD8k",
  "key24": "5p2xLR6J4yRim4v6jwcvyYGKvzPd9pqxLUH66uiYuhCnbWTUfBKBLy9THhpb3MLCUydYJLCwv1X5QmzDtRbbSpT8",
  "key25": "4QL7zUVebcfvREmpP6tjDc3cS4Uh6PViSKUyCH7j4MWsCTBqohf4cSgkotBqJW68FoPUJKuAMcPKKxqxTFd4E3Bv",
  "key26": "3ggpuGxKeEzXFWJUiR1JAMLuR7LRzzLzi1JZxwQUrgoQRcbBxWZ2UfkvKTB898HtDYyeZsWd1NPH1fmMgJCSETPs",
  "key27": "JPw2NPTCuFbMWNTVj9fQ1gGidXzBSPYppXL7iN466NvtnX6y66Yipm7LQY9VUvy7rcoxj2cdd5Y5CjTgB8u7i6z",
  "key28": "anXrfWSXwVXBRDFTzMzqNMfwSAQt4BYvbuiCpuXJyhsvD8qEBFCLoqvgZMVZ6V2ikFqVPiMpo69j2Uyw1HaJrVf",
  "key29": "2g4oVcdvF9cUgEnRFhDJB6pCrLZqXx7om5CmEPVkuQXGkUA95AX47YWjDmLg3j8YDu34wAXk4KcEZgwwbo1NB8LE",
  "key30": "4YQXUGEgz7qaCuNHjwVBHCdRfMbqPdgG79KN4thtvRnfGmoMKB3WFihxV7CK8BULT4PqzVSCWvcHGnrq59nHJ3KZ",
  "key31": "5LdHPexFoKycHXzA53Jw1SB3h5L1ie9n13bykxcLhvFtxP9ZusnhiGh8HnNAB26EVL8N6V3onEL6boub8V7AjQrD",
  "key32": "3B9uMur3mszYQxCNBZwzN3KBCa6KZY78CEavmiajySezCtQYG97qYhcp1vGX6ffkxYgjW2AN4VZQwwL6UZYbh3T4",
  "key33": "5ZWAgX7yon5SdA535q5Azbv4UWqTPwJqjRaH29yYDWq4nBgYVjChfJf6Ck2kngqaCw9jAWGry7Ji4fjQ4reZnyGT",
  "key34": "3ecHSwUeXp7ayzxZ6w3dEM6u7fGV1YAytAC3gsPnUvof1ZfTMbTyLNcsbdSzvhr79sNi5Q4cnZvH6cEu7CdbD98o",
  "key35": "2o7M1NLowMqooBLoaHpuUvnATsSb6eH3oDVzZ3QgBUT41HfDJPmz7GMuQjFJJTLZJn9Q9HybpBRyxCJQ5HB5gSrA",
  "key36": "md3Mq3ot3gp4wvBB6rm5XxXZFUoANKKiFeywaCRp73qGPWmug6azhSspVNQSpmgsT8JrzypXBb8f69aasCLZo2B",
  "key37": "enA1JWdtMAdyoqy7oN8gPcfDJBWVMTfmURQF4TdBdCYDsNUokpnaqUyhMGcCNNKVCsQZxtvPfcHvpgBAEDyHzMd",
  "key38": "1E4oKvwi4h43D8z56aL6MQWKbLJs2BN12ERJZHh67DYKmrYeQLM74SdDsGQebfBFLRwtVxMgkHQGHJq5g9MfkFC",
  "key39": "qPMweicSkTpPryj9qrm8Y2kp28yCdPThgBZwCaR2mHADRCxyYtvzyjsStcDz8CZwABWDZ4RmsxhyujLdeTBUMbk",
  "key40": "xpQPC1WSQkkta9sW76yqCi1dLDpE47P9Jcmx1CgwRQAtXZ8K9iMGCVUF2TquZQYVWxGygB3qVFoJdELEZc727gy",
  "key41": "5wJVwSiEWqJwA37Lp4fnTJiNUyVeTkUwTetmRGExUWwDJbrBYbqQZq2SfFoEpxjFfwixDZVP7UacyhTYyaqJzMc8",
  "key42": "26sGppc5pBi1dU71sQqAvhtCCuL9WUQcEyXq4XN8G8nJMmYXvHCdkUgQ9UXWdDDqzT17VGx119W4foUokxismq1U",
  "key43": "28YKowZZxBGs1cHU1DHaPqS4Gqzdwz3S41BMrvF3MYhaohQ35D1V3RWPcdDPujGap6K99ygni4QjVfu2CgaYpAxj"
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
