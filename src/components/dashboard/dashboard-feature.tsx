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
    "2fiXUX8PyqcdKZPQHpfxhs5cnmuVSdZDLhd8fVFFoVckJnJvqw2fNcgP96RtCcE4ifrnbtb8wqCKUjinBP55zvJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oa3Xtu6osqmsovAVNXXVFZAd36M2DTNEK5X5v6y2ciHYb8PypsSpsEaGvfxYw33kqpoQBLjHhDDLvPhjfR8UKYg",
  "key1": "9oA4tzhxW3ig5QF8NGQ8e2dPoiMpxbS7SNvnbFNDkQpwP4hbjrYBTqxpDcHqhkLNu2eRVn4hqTcJeQrvJsKTey2",
  "key2": "3iHQzGzokvgeJpE8NQeqvcjZmsjUsvMpPUBbwn9pSf4Mnwedf6vTmAjrutVnHR25VBXrHwPawMhdE4boKtE2TFNL",
  "key3": "4ZZi2qWGo4rXf2FGWmPtYa95BR7Cc6fmRrN3w3G3XnuTSwHVBfp143NwTvtQbcuP3ZqCKouHDbQfaijxJKJANjBe",
  "key4": "5wXs1nWnDfDdaJbw8HKGXho1mQyh4pR7EefHkKXYcHtfeUjCwBv6eABqz9E3cyB4UAE2yKN7FEeBJmFMHNYZWgE5",
  "key5": "29EdJ4EGWQzWa1AeiZrqY5VmzU35wY24ZwFN1aDzXN4V6vSVs6meqDJMuFoyyRnxFxMCe4ag6NYNxnrfFEpJGeq8",
  "key6": "2sEFrRfgBRz7gregVsscxpDB4iqGpQR3BSA4xkXbgqxZDM5wFg5YaAt6cqmf1f6cvHGtqq8AxvJtt3mnq2XMWCCe",
  "key7": "3MtYoe66HgH3mQF4m3P24LiubxsX2AgVKavRXwfUS3uyeGdchNLcHqRFS2hTtjowg9Yaosn3DhQ93FBRetb9Cpgf",
  "key8": "2X3hQBzxWQ5KCECLSK6kwHERg5LNAJq43cNSkwqQhskzbCwhcuWA6LLLzot4vaW91ztQ9xAMDFWepfwsky8jmb3N",
  "key9": "2VmpDQksSNvPexCX9jqM2dgwPi9U9shnnYmJq7F9ujic2SR8f7VH9i2Zv7VYixT8CVMMYCfnc8C5V8WGqMRKAgcc",
  "key10": "7KtCGKRTvKN4EhNTb4rxZedgoNpnPztjJsrKsWoBCJhxAv5vV52Tm4Kr6Ftci4L8mmHiaX9DrF8nMiz8fvB5D9f",
  "key11": "gsbSQAex9gXebsgVCFGphRwc54RoKHx8VS71ddeaugXx7Bg8eZgum9Fs9YiYGNw1v52cASEFufmv3ivnSQJeAMk",
  "key12": "4JiE17dMUS5yaZWfBLtqeLYwDCrTXuicgHpyZyV21z8ZFXKxXsTo8zyiuSbERMf1G7Xsiagvq8SGy7bcG7iNP1oS",
  "key13": "5BUNaCe4aSFN4enLVfLeDpGAzFqM48q7nCtQe9urrDDxnCEgBeL8FVDBNSTkUrCA9sbmdiqPADFo4sms9EVYdvA5",
  "key14": "3LExUNk2hJe1WHComDahQoMaLE1fpAAQ3u58QFNmXX9cvfrkuaHaRW7nURDChkFZPjAHgEBaJw9o3aNZBDuiTr2f",
  "key15": "2fFTSb6pFKgpxNZAoMuQsSeeSGgRtFtKYnEsK8NQPvRrXcuX2CKM8xd3wPiVyQ6fcyQWYKnP3JxRtQ7KtpbgtZJm",
  "key16": "2RskditDADm6QU9Ug8GaS1Q1n93huNAngfk4A7d1A5f44PVsH3YCGMuZA5Yw2Uc6XmFvG556j6oTY64M3x2QLYZp",
  "key17": "33TKxNDUirENBKPQaKnLuToEyTVBKvyzyEBiDvY4HcFX7HoLFguq3EvyRH72Pbne5kiN3ArffKnSzT5V5iXKinmX",
  "key18": "4UUBb7Eh2LanwqPVkvFZuxvR5WaUdr69R2fSXWetLtLYYFHg5p985wyCbRs1Z4HWBWVsxVfS4pfqihAJP6t4G44H",
  "key19": "2Nh626Zbz9irFTrj9Wqo5gAAVkgYYS8bKo3hPKyYH1kEbFboqEjRDkKiLLXQYFdeE7tjiPE9TgUqaYtgzYTGkmAy",
  "key20": "4CdmLL4us84PTHQzuqUZtN1xjszj7CDYSF7JMr4uj8ujpur8MUCYg1L1YZqNjfhzVwqDj9Zjbd6GaanyoUZqExFn",
  "key21": "dKkXp24HCRDGS9hjZkjDprhaW2Pk8JEsUDkqm5aB5S2hKXGA92deNdJQhkWGikCGJ5n2TVZyjmnmhxJrGKLZtP2",
  "key22": "2E9dXnm5hw8iBdSpHLykTwJAgz8Ltsiz2Jy6tKTvmTb8sDjuZGqkWFTvVRwLmchTPxc9eKTR6bDkxRoYVVXXPPup",
  "key23": "UMuS8JtxWJ91CgQnct7ohnUqxkGsPnALUtDMk6EyKZ8iQaA4nkfxmyZY4sgCRCCQSxuusZkHc6wYPFdc67JjnbH",
  "key24": "41eZpgUwZRbzS78yjunbC31SLuShnimrPfFJq17gFAkzXSefRr8kGej6tHJUerPruA7DmMWmZjhf2haBk5UpQE3z",
  "key25": "5Co5QEd9sM5UqLdvPdL5KzX8or4YbKjP6P1oxyprjBvJwbGEYztvup3LqMW6RAjTYK5cVKjDYiPovPLcLG8fnhxQ",
  "key26": "4kY6x9PorEMnNDL2LHo38sNGi2NXKFnXjMJeSdm981nPsVCAUV3w8Ug6n7fZft5LcExbF1cAq2bMrdBrqvAzo1DV",
  "key27": "36Mp8KbyWGT4i8FTB7B53GQeFV7JDwuDUTiDr7huaGzShjb7dJ7o6RWCg5yqjjT4rMmkxa1L9ocJ3TWngZJDEBiZ",
  "key28": "41s4H5yZmTKp2yj7WyvtLGAo6WXNKxo27x4UJwc6icE1DB5zDSf1KnPCs66w45FUe3sy6o8z83qLznftxM4BT7uc",
  "key29": "6W6itEpudY38sNcu9Humw6P5p9EWceDHWH21WUjsFhy5DpLpAWDuRmnTeVzMRZcMkYyhPAP3aCBWwjzzVc74LMg",
  "key30": "3Y8PnkAujLGPmt9YMGUDFXypjEmQNbRj5UHhRcTMNNAQm7VhWxEm53p9ZWda6sjkQ2xgbB8VVFBgKCJxfk4ftLf2",
  "key31": "3FbuEXmuL3HcobiVwJnH9mbgj5PBPjTEuxoW2qDGHRDxBYZzaWTwZ4g35T9VEAw5xwbSgo3FQJypm6Y1uobgXP1J",
  "key32": "23ZubcsCx6xQVbxyc9jfbeCC5co73gMEQ4athqzed5nMRRcuFYeUkfM5VCWRFCQQ96XsVmbAzHMYes8kKvx8Hw8F",
  "key33": "5r5vYoDboehKJaqu3ytbWwAgLb9UsKAwMFpGkgN3WiPG6eKQLwbxji1J26RuWi4bVvsXC5zd2Gh6jVSSr3PdMbBc",
  "key34": "2Z4Y3c2zPKLqwmrEzUacFT3fa1QhRT3wQ25jeeQ9otMYeCk9XAwiyd9tyFE2Q6t2m94z469xVBmqeuZhzrZgH4h1",
  "key35": "42FPnmprqQfR2WmfsULParxfNkSPYKpowm8fX2GKN3kzrmyA6AZkxFDt85XjZc2BAkTRMabEcp86ycU6MV7bU2L1",
  "key36": "3ovyhinXEMb7JboJBYjWDSHbik1q6ugQsrwTmF7jtcPahhaCfN5mbFhZhyz4eNRZF9fpyNhFncVvnTeAPfEWKWC7",
  "key37": "33sHT2fazxso2DTfkCa2aeMbkxzH9dpL7wyqgnEvy9xxqP16QSndCTzGXTKgJkq5PWmF62hMP1Wi1ZG96cL1JP8A",
  "key38": "NM2EhzUJ5JiEsFb85wP8ebhTko92xqNSgkhNcA3HEMA68vQLvSDL5PqWEpBu4R2Sn1139PmbJvfDUox8rUgmqqB",
  "key39": "yW2xC4dZz6VvQLQAJHBmWFPyURE8L3CDVJEKGSmSvuHpUYXWawSsMzV7skkjaZTT2jzRNfzsz1QLmyxz5oQ25pH",
  "key40": "2yfshBcG8Zkmu3K5L3RtxZsdBDNgP9AY2J7DgLTte5Fi9W1H8s1Fm1sVm5959CviAiSUfzvPHMYAZM4iFoDMTGJX",
  "key41": "53C53Zt77t7zTpGjbUMwbL9m5dEfoeNVrRiLFXg6bk2atuoBbyQYUZzAoCbiG2Rk8EbkFswXjPHAQ9Y6qiN9tmS5",
  "key42": "J4HaDtiXWWeAGCzZPnBVkk83mmmF3oDUpeiQ86gu6AU42TMH8eckcyURWx8h8AkeubWkJyKmZCs9yLKnnJyJNRS",
  "key43": "5joDzavXXDWbgkBPrH8FNonv4j2RxLFHRegFADhfzQnPoc8N21Up7EW3QUroX2ZEA4FvVr3hoWcSzQmjjPUEH9cF",
  "key44": "5pS8P6dCZ61oKmVwJhHVHg7gLiRC1XPrg3BnDcC1u2CqyKqXF928Pmc1qqsuhj1rXQBGM7jJ5qGRUkkwoqivkEha",
  "key45": "326JkKY4vuojZ9mPcCChyZSrSpEk9sWnWd9FTBPvokm8EMiTmUWburKKLb8d642N8FMkzez2F7ufX8NZZLr8J7qF",
  "key46": "5Dhu6Art1eUQxwwRELDsoTyjNkzjFRynEtdqFeaaBEyUpFNaru4vR5iSX3HyzRCPbu8vmTrhEiXPWK8FPxgbrWmp",
  "key47": "4WmhMjASN5vKxjgUga5ssxvrdnjKBT8AHP8CnDuhq44SKpYLFmsiCiZwGaELTEECdepeLdFgCQrEVKE4eNfVStCM",
  "key48": "2SiN8mLHsSbE2VeGyGCnw5aNXCbVvykqLfiXThAmr6ehusPK3PCWjJj9cJ3EYAuGApTG7LAv4PsNhbPnhFYDXLuH",
  "key49": "4fgKw1azgnZL12W71CcnDFji7vUf7KhzT7GSn4NBgpZnBGwXVptLejKZtSP1xgkpZRUJhK1R7h4JXSbmeNU4WNw"
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
