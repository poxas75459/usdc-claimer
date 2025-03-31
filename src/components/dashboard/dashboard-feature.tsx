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
    "4HrgJtYELjZAr6dXoQSJxS625axTVfYGrqY66TicFXAwnqFdwZDLov9XErRFBAyCrFgRdS3GWT838nSGVMC2TrPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yEcUt3mYK9Mk2bs5v6jTh5yJVqVfgFYqhPCaP8FdwzTuDFw9U9VAHP6eBV8tHvasc2PkWpmoZayLtFdgj6JJWBC",
  "key1": "yXswm2GCeQStiYvnty8QAaCfKEe58hYfo6vVv7jH3oTGYAgSBqzqGSp553Gc4qB94k5ppHrFEyCZdLGDKJJBqPa",
  "key2": "5sQxgcLEg76vVJpCiHhgbkdT3Vj4wrFNHFNm4364YFFrUXnrPDRckfLWVRYLHF5oLg7ZY45ZhntzutZFeKm4dgVR",
  "key3": "nqxzmSjtjLM8R9yemXCYQLUykuX9LtvQBW6gZG1kD5ahMSxVaTs6B8QiqGzkj19fEtV1keQ8WDu6BwV22FqefMu",
  "key4": "3rqaryVMA3rhw3oSjwd1Mvgd6QVH5PHbZ6HfMa6LkXfoySEihaULpLuryx1Qd8pbTGq7RGUd7hojqWckQdJYn9KW",
  "key5": "54gXQS8kbxkHdQkVkLHyZcT5gmWyb61iRJeHoa3FhGqFcuMjpoqGHRG5QKNP2MykffCZcWnKkUakpVMcsbky3PDv",
  "key6": "2adR7PLgFWw2UuXX3ArF5jxr5Gdwp9inxYffQ5fpxzJvQJersMsnkMnpuXsAusXpTWHGTMbzeD2cYAffoAzGqm4U",
  "key7": "2GJvgYfaJkEHmjDs7J8eeWdnws6Q89yMWyaaSQDQDhgkuML4mN3yDSDT2bVL5fDugxuHu2ZrfgCGnPMsZikVSPgp",
  "key8": "4DYebVgqxRSWVSTPEDogkMiee9E1v83YLeeiSbtmaSqdTSH59qC1JYPpG53LJZHGySY3PTtENsPz83tnwvfHrRH",
  "key9": "4Jdp4oHwWrQyG3uZ5dG2BpDFj4stCm9UXyvaZzWWQA1tPD7C6f261W5uLgtXSPyqdS1v9KJUVjiTMTgdje7bxxbo",
  "key10": "3LMkkBSM42ryXj2yyvYKEJmx6Fz55TVZZTRvjL4FkcccvXrCLkx5kZtBS4Gu1pCT4UCGWKtfojneQHWKQUPyTRXD",
  "key11": "3R8aJTbxRjhAuTAUwtf1SJAcpw1jziS6ebk7X1cpUkKZrnLZRcJitc6rV7WBibmxWvts1uWNch3iZSvYvLa1iMeA",
  "key12": "4fLqT2FqpFJJ5q6FidDt5JuBeMG1EjPXMc4Qj2GxBzXUwPLbpSXvbdzr5u29J4JnkWuHxFicisVTf3owoTuNEvKT",
  "key13": "4y88Yf3wRQBjDRz9SW7GFdcBFBR3ZNqg5NzK1cWhw2K2oPM81jjiKDEhRwcLPjhnkq9haJgH9TnHw56g99Yuhkvt",
  "key14": "5p7QD1tjr3zDQX72ahxnhQShAKqCija4SiXBKM7dsUnzRsvfxa6YXY5a96c5vK46eSDN8HHUSA2priZQ1RjMtFs3",
  "key15": "3K8i93K1t8NyMD18joxPt9jhj8hkUhvWuthPbeUJTWXTGompFhqDd9aWdorwGkdYfjaFZa6C3dAg9hD6XPrgeGEN",
  "key16": "794LAaoBzAKm6u257wD6bLqg1GVpXmkCuryaqaRpQmRQ3z3pKR3tCjHg3g4voUz61KMUunKMsZUxhBenhTTvERf",
  "key17": "52oaaUQ9R2N2mUSzRAYhPQxc9dMMReyBYpxMbPzwjQbWabrjjzT9oTF6ddoi1hZPJhENG2PjZv289mwLwwVLC3ku",
  "key18": "3JmL4jYKsUqfEC42Ur4u54oqfoQRMtA8i1HQxffpqa2pjzHpFq5mpoLsaM2E2oCiLt4ZBb35xmnv1mL8kXr1nH6X",
  "key19": "52GzNj3ZmyVjXfRaYrrVRhk7kR97ymeJN898ZiCdfis1Azs7Sow3gtGczbm1bhsqwxcC2J5Bw2hLZHLs6iPPKRU7",
  "key20": "3Rzop5mk6oRQtfiGcnX55Bc2n54zMBTYRufDPD1BnUN7T4L1ue2WqLgZGLgsASt8DKDSymy7StVCmDjPaTx1ibXY",
  "key21": "2jLxongtK8MczWz5xyuVeLVCd88fvMPMmgqQnQBQF6V4tgxjutbSecTa96jVz2ysFzBs89VxttQfsiCLMcTkm7SK",
  "key22": "51aGtQHaPcncmaaFYuFurB7iJQzCYyQ6qjadbJYg7dApP5h41TVhoWx8TrH82t65L6zH7EFJjbNtVTW7PJEvToxd",
  "key23": "3QcRaa6SkRqsjYaZUDgt7jshwT2eDhMW99hBeD1498fBnhW1jsobMWurKosLye4ZrnekjZzibp3N2ns773FiDVv8",
  "key24": "42D2VqwmbCawe29nQBZjG8W595t59qj4kPufjWhNCD7PiV7QgUktdVSQRGbCSM26NmVJgKd8rseidBoKBFP7Qgov",
  "key25": "3ZBEEMDBTZqiKHBYVe3H13mzXLqxmBd4Nctc9PJKauV7kWMYjZ1n22SjzZP3yc3HcRM6Ev6mKp8T8s4Fig1SRvQx",
  "key26": "2En4PWDez96xeQ2m9zyzEcHznPUZsyo1smv84Q79PGGVY2T4rHLjWdY1KPBFqNQbebqYjqGkfnpDqh7KB55UhWdo",
  "key27": "4ezLsLsJwnUMBaqJUwNzDREPBU6ntG5g2LiSg1WJwqx9ebCrmRSD92eDk3mtuWduX3YeYjHtvxiqunLWp6ctgouQ",
  "key28": "5dWnK23fGHW8nTZhLCXKAgHRiAeuGy2btt8uGAfpBb7SMSrszZbjzvwURAJ17uzLxpZM8W7HiZiqNozHCejm8QY5",
  "key29": "2PwRnk9Yg3Zsapq71ZEFZq5bhT3mNjgto7EPAhLK1tktnvhAEcdf86tMPeTtNgbefeUsK2rZA7a7e4t8ZyzHFAvL",
  "key30": "5Us3UpVbcd7pi1kpi6eBk77HZkM8USyKko9PNwwssLCs5gn43qS4UEQbbQdn1oXrXZFCgCBzAZ3NM6ARRxkpjaXM",
  "key31": "2sCM1BgmgM43Ln2BVKkkQcUtNcBUEWTe6wpJHPtpWLWhdnHodeYExrJgQuMCGvY9N9mFtDApAqAcv1UEBfCRZpxL",
  "key32": "3mDNnQQdiPza7T6woNWXwYcvBP6Bpfe9EApCmGa5ruhjbiDHa1o6FUPt6SQgW72hJXUDzQWpq64sFBGVKTAnWFU6",
  "key33": "5BjfouadGzQjqX7tSVUvN4tLprA7CbheDdHG7CN5AuKsLhDuVD4qELAoaFXCo5KgeTiTQiHG3saCteA3ARnAsq7V",
  "key34": "53rbZJKufNDsc49LZwKQtDWDqJgpY7XYW8VbYwUHuvacpfahMX2cTAHU3RQSc9AiehfhTTJ3BnTgei8h3r8WVT2G",
  "key35": "5eh3zsVL5kufbZ8d9AQgjzoaNuHuexiRztd1tNYdnLyqRvNE6otSKLLvwoo8hW1PG6PfRQDb3WVWjLEvz3RrFT9Q",
  "key36": "65ovA6XNc1qPh1yEBsKHg4aWZYMPjnL6S5Lt2N4y1e4X4Y1tBLWHvRGdDpVJSvdLUN5RKF7C8bZVJrMvmCRfcTaZ",
  "key37": "iogf8wpAB943eSjkyZxcTw4DanyqZm57271SiwoqdF1ZnLTF2Gx6wvFW2nbe3Vn9gt7jm4J2WYGJ9LCCNtNtrEn",
  "key38": "2hGLgiFSw1KRU6sMYZZ9vjWe4eyas9Cq9L3XHcqEDJQsRkyDMdDMHaaaBEmVmbtPZ5zstRRE7on4Sa7PbjcZcz9u",
  "key39": "ZXcn55MD8k4KRqo4sN8BT1oGvRDwp9sn7WD32zsNwhmKePoHYqetSjVTHgwJez4du2cqdDj3RqyfYMjoeqgv4SE",
  "key40": "5gD9YNUYA4zFtTMZmJHd9y8La2tgAbn9puunnbv6tzdP9XmXnLtypsQiFNfxWz1ZHNeuBdAqnzbKsH4St2LsU53Z",
  "key41": "4WKBt1U7P9j7JBQWn25zPd3eLEzzrXuKsdojobrLJouiYpzSUwNAbS9RVuqcSLnxpCM2skxAQKYTsmd9hf7Ak9L2",
  "key42": "5nBqGBW1HiSJUdrg5taLU7BiCpF3p72iytDz6SLCdNXeM7DKBw2MmjFQNisxAQYQAkynkU6vS3Fy7chpRsbXAfV8",
  "key43": "2mXZCWoE6mSmxYpFJo5SQM7nRFaw3wsRM3dEpmBnG95iYopgzTCkBfESy11s885hMfDwGwLe9vEXKFffiQuWTPcE",
  "key44": "5kP2VEGJUMtsXuLp4SJjLnTHN2KDftVCo828FetkMJRNwHVXKfdk6yy8QFLrXh3BtETB2JjfdTfnbpptBiNfcFR6",
  "key45": "2HVr1HkkdAR5NKkyREdLwUYvVBAX7VdoMBT2skmbdxvCzrtVKhpyhzUJQWyLV5PQbrvWgJuDSjqidv3KwXFFyUaF",
  "key46": "2Efm7zS4gaVRzPh3x8RGFC2nM5nAmsQnn5vm2v1ohRsCCo2b4XKLFMCrgGWLe3sQoBxsR1xQ4TdvcjP2DaqRp2jH",
  "key47": "3CY9h5QeBextybHq4chURLTQCM4hLzyCyKKsqFoDZDo2PM4aJwjabdnrysvma1yMxMABaQmAWMDSRNuYKJta2Y1L",
  "key48": "3dPQPRjF4cqBikRsF713TZtu7DyidyKqJCPPZAJrmHJJjpcZidZD9zT9xmuH9QMAZTYJLZFuazqYgcp6x2MNQjb2",
  "key49": "4RCD6pKckMFiMuPQE77vnGv5mRuXy6YCvb9m4FyLNzRmFCzELnXqT6eDo2yXGXTmWMDzHfK4JQ1TkXn9Z87PpDrW"
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
