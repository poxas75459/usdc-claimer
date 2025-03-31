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
    "56vqgBK2re53UkE5VWVMpXR5BTmFTRyUc82pvdDXxzRAJECw2zyEeaq9EuqCePJ5YKCLq8cwxUwiRSifjFxAQSvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdSXbxKFpW1E9r5joRczmxVGrrh5whmpGmzGWLC2LYaqtriUKBEMzxTTxfu4vq9CDJ5oyEBjefUCLPWzfBmYGEH",
  "key1": "6kyd6XikQHxoskwgXLbEWvPh6T6atBSwsh3EsrR7bpBAuChcSu3BjESViQ5SvvFFwebFmNHmQ2ndtpn2vy94LS5",
  "key2": "2wBPedUz5agoTbddPCS5uG7QvSkrMFMbbF2NbAW6KGAY7XkU8NfN3NKQjTdKorJ7Qn8onK7EdZTpUkcwgVQE9BJv",
  "key3": "35sNp1KjukuqbkHsJzkSFYvFzRtDjLFio4o2ZGNdDaamr1d1Mv3BtReKNvjaTo6BcZUV5CPGfMp8nuvDKpZT4iQD",
  "key4": "5RqhjU6LTzAVtLAD4NdApPsCyyw9nfEL74dvHjRAF3Hx9uH3sFdLsxdwtXLEUZUSJz8vDDoFhuSbz4ZebaRVmwLj",
  "key5": "3ToGuUN9jqgdxto7ZNiBibVCKbLPB7moTXRe8LvX3bopKwuXcrzhjuooxdnu3CH1z8muwBcVK9dYTbSYN5xLsjQi",
  "key6": "47EWBBawKEWGrqzyWQeAC5ZmiuJL4BTWaok9jP6QNSwYCzGUjE9nnm7iUkwgEB6Jpoy8EnA8FRqbPCPFjBj9CQW8",
  "key7": "5dJa9KeJZWXAuD17gnVMdoNc2gXGuypoCy1Nj13caS3V2USPNGSmZcpr1KepWtjPAXhxxpfsQhBT7VnaWT1qxYG3",
  "key8": "31Aepe7hghMnybpJ1hphoxjNQ3tHFmT7Q6F7wc5ACFcBcMKBkPS8511GYRyNkztkeq4raC5m1h8Hj6Haz2eGdo27",
  "key9": "4kHQXfgEGMf4xWXZHkg1tUhpRUFgbq6g6dYGoH2LtTAFpVCQsafjgpecZiuh9fyGmBGU6hsjYqY6Z19mee6BvTw",
  "key10": "3CYc9hb29muqYvsSBQVTtfViorFQVGy7Gyjb66WMv4uKEVUhqZqJjhrRM9Mzjcq2dtPd1noyVsjP8RQhZc8egHwg",
  "key11": "5FabmCuUzwTaV7VTWUttswutVGXKzXQ5aUEWgRtkXCg14mev3pSx6U3YgPsar9T5GgfpbFvJyuYmSWQMeznBkex7",
  "key12": "2uwhLt56TE61KuTUFX8LdrVAvx9Ex8D6ZhkZTCZbEpnd8em2AzdYyeVkZTrGqthFGNBgZydT2MZmpoyyQ6KKP5xq",
  "key13": "5daTaVcnV1fMJRZ1r4hAKFZfLoSFYekdevsqNRqjDsMvxrYWh4zpLhAR3QZtiyi22HNrTsJ5YkN4Xb5BD3WoEQtd",
  "key14": "Ys394aqm2QqdBP693iVAWFac8d5xM357e3XRnLgkuUjhAWacZ8epK78tBTRbZ5K7TwJZqcca75uDiCCgHnUbqwx",
  "key15": "pazZJPvRBTrueHQtcxip89PLkLYyRibozBuioGUT9qdKxkq9aTBLvomftGPJhdjLkGXcdwMRrKpB7PaJtWzMAW2",
  "key16": "4kqrxwwq3hAdpfVUXqcLNhvSKbUXzbY3C6RToCgt5PEWq5FG4RnnTmLwjMPP46poCqsroQ4SG6hiwWBs4rKuPdNp",
  "key17": "39tjuf94h3DYttjvo8XgRpdRjNzojvBPguTm1o2EYcojwoCcbcG1HSKqDSPjGNm4RBZ3aRbrpjYPJaqS7TjmUXqE",
  "key18": "5njPPebvqpbBCSD9C1JquvTRSshkCQWMTJmbk3ShUGmgDqkoHXT4Zu4xbpXmoZEKPMVKcufXJvKSZKh1yPJumo97",
  "key19": "4Bkoh8eHWeN213BRgehd2DMcnBjcfjTpuTrLHsHSE5cKFcXLiW2uRo38Vj6sYSwGptv4Hh2RtWuHrnGTFNqJmi3t",
  "key20": "sghx9jxDev774Kqin3skyR3yHoZUgQjSdK7UkE36pgyMGv24CwYdGKJyTbUfnxw6pAmiTyfsQk83g3fxkTMYTHz",
  "key21": "Y2kuEdYbEstMjbBsbRW19giFC2micFCt1zR84aAMgk4jdHhEFePgjN5wo7QzKpvju9b8cnE6N4g7KstkKWqhMW4",
  "key22": "4W4ckqVvTHWAiCun7Rmugwn5Pxf97iWPUA2Vdv2NTijwx3dvhYkXGn6pDdV3vC7wwjY71gvv3cZ76n73zSu7qtUq",
  "key23": "2wMKEAoBFDRpg6hcvGr4BgLFVW1VHMvDvMNdTu9UiTxenDfycmSrHioBgCSUViqvEu63WowHyaiHqAW1joD3ZQK8",
  "key24": "3Gb6WhV6LfpH1PV2ZCQLi4wtcY1KcnKekjW7Ero8bBdCndBWqkMKUoSqzGo7H96Q1kgk19cEmYttt4PBFQ4eKF25",
  "key25": "SUULNkHUzY71iQXgu4BmmmNdnybb6buNT1Mfy3hgieWQhizei9H2PD42vfksmCWoXdUjHfPACX9kuMAjMDpTpjm",
  "key26": "3RsxQrQVT9oSRZCthJMafEgdPSCesoKMAnjogKi2qmz2g7NYBQN6xXYVC8tbiaXWsgw9RddTeDuLZgtUPMSkRXdu",
  "key27": "45cCtYgsNhvGaH2n3vohSueRNMTDY6hpUzxauyMPTg2VS5SUh2TWLbiicbLNHjgkXzQbbU4RjjdHk3kGyy5xAE9C",
  "key28": "5cuM3r898AMzK3QENyPSj8YYEVAR3kM6xSrS9ghXtZ5UuLFm1GFqqnJZCAFQVzcBbXEXSQEjSgynMrPVhXXeymJ7",
  "key29": "498H3JkK36mTZuaMEHuxLK3RaGMdesnaq5G7DNBCN7n4nD4RCuNzoGwDparZv67b2eS1udEaFZh2uAi3UZDCJJCB",
  "key30": "4uaXZQJXhhgfA7YNQFmiUNrQxXEyMDvAHsDh5PFxzrjHJXaj4ZXXJEV9xfGK3tRFBTpoDPYmy3REBmsxXprbAHLt",
  "key31": "xqMvt2YyPzqhHZkemoi8nVTccWGtbXQ3x9nevH7tYDez4umqanSEwEJ1R4ZkaU8RzVXXnhjP6hMsek3EpoYYZ3e",
  "key32": "2WPbqzNtaF4XAALia1G5mxqjTWEdWVGMEQuedfpqDiYoQL8Ghm91FLCFSEyHHN7bsgeshV8oCrVPUz1DNCQeGXEr",
  "key33": "MDsAuVcDRjiaEeeuhZPRe6rg4AniSsJ436mTxDEqJSEMdSFubbJM3pXTqQjPvR2AaJXzL5gGx4w7vwQBKaFUs6y",
  "key34": "5SJ5FUWxmAZqd6TBi9B7zHVbbNDb6UzfDTakUT828GfdpwQ8suhaNgXC8o3f6DYSnRHMm5HJ4NBceKbrDSEiUSwk",
  "key35": "qCZAN7sBkNVJKf4p6Norz4K2vCY2mBvJkmwRTY9mWiLD7tKZ4wf54xJdGUFEbVwxtA1pX2cNPtF8FCbeQshmsXJ",
  "key36": "44Niet4c2yMbzNAWCFq2jxLuDF3RHv44ScdXa9g9EtnysEL4kif95WWKbZmdcd4zzHt1nnvS5ZRBppfJwVDyEjZR",
  "key37": "35bF3DfYdJA7CSnc2xSkmAZuYwuvWBuosPc6U3mNpY8ZUZrPwiVP23GZtt7BuDGemTekdbm45utuSDkKZdDbbgGq",
  "key38": "3k7P4Luz5yBFdPhgV4EsF821yuVGJAXqoXQcLjno8UDFG13ZXwMg3XWuuLyvjpPcks9qZfWG5WbKgJasU4D4XTr9",
  "key39": "xcBqog9hTxenHTWAQLv4mL4F3jrvYViVPunvyxEoYsnErbS3uoZSdDTPL4v846Pq5QAkCrfoSomSRVwfuvZVazv",
  "key40": "48sWnGRHYKnqqmmQyeToc8rcuG1zQDDt4KTULGkJaSUxbqnsCsR2HTg5wKyzaR1ftRNYcc9W9ruyHhc4EkCyQQYw"
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
