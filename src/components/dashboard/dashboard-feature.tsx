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
    "RjNJXEndeL798b9mKjJCvGSED34Uo9paridpP5M6moGC33JzRn9yegpHK6cBmcTaaRb8Wpaub34pkDpQk13y41h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMD9bQGSuRgEHKrFwGWLqm7uyqNg2aaN8W6T2nW5bSisHUCy4boq6psweLhXmv6S7H8o2Fz4sNPc7PXAJnxHsHw",
  "key1": "3rgzR4Fd7uUP6yXbqDDhTLFSiT1LVqgbTgib2JPa7PDZFUWVnWZt8m6Bvms3nFHBWvzk2VXktChPxF9Wj4GPFLsX",
  "key2": "3BB9Yw9pKXYbVfoEj1DheS87ZHJgABxebboa1xMwGZHprRe27c1Xc6BUmQZCEW4HwUF91eMToFmAB7izWiUBGvqU",
  "key3": "V4q7S2gNuAJa2TDcDsrR3Jh9BALXYnZJDoh2XoMepcgqCtZ48QZj8gqY8WSA12qMyf7yLRNUFXxD4jEbTBReeNs",
  "key4": "5EtLUUtLraGELy3fPPnKtrBswbZ9d5bZjgZTyssQzjEwBvHPbUmEEqQmT4GGV46mxcaaSuFeBrMcE5NBjTkbS2dN",
  "key5": "66SUDCMukrdGV1HsMUS9JY24VJic8A58JgNM476g7Hd35mPkGzza3fTKiC4iE4swz6V9DAVStoHcuHZYbN9PzxtB",
  "key6": "5upxutkQJBKxrdD4Ez12RJgncKTgAUNCp9RWZbrbZoW72t9hXKN4KRGnRpfwqwSwexKAJGE2JwGcs4yZeSfgqVa5",
  "key7": "5kA3qzbT3K9PKEEovqec3MN4ADJyK5JnFaiKaMtQ6HDcoKzHqUX8C4K1TMBUeSKge6CJedMuXH5LEwraakMRkNX4",
  "key8": "2Xgk2xzEWhhLCJC8Jqaz62qx23HYFEHcnzk7yr2FvCKz5MZ1GRwLLWbi1jQoyFYeBHwzj4R1seo6znBLd78rQAyF",
  "key9": "XZ3DUjoSSXMVVzwWNmzdxR3mz3kW2yonVQoz6RZprBabcvem2bZzvjrWFZhV23AM9NZiHuyHEU1PVXLssTMhdGC",
  "key10": "5UBm5X5NSHw9F1ZMAFZjDyfE4W3kV6NPMEaSJcbxoVNP1NrWTVMqiU1PfuBYcHbo2gg2wF1LAmJkX5SE9KGhoe5T",
  "key11": "2rWR8twhXQ9V79sHNAQQuyPP1pfaAZA6Lqk9dfpsDuRcGuQoBuUtD7sgcodN3Rx1CAHyEgFtAU4t17HYSfZmvxvi",
  "key12": "4EmkseQ4VFEU3pc3VDHe2vQNeLfV5cwq9b42u3UpNVtQJA8to4h9RwKMQzuya56iTQvQnaJZSaWkv3wrkxvVkKep",
  "key13": "642wXk4yAetWh5ikyXRwXnKzKhUSyw2YwrKERQ1Qn4EVNgcSnibnd4uePiptdk9wYRrqtxJzM71zxVMntTPLu6wK",
  "key14": "yyTy9gJCrEfVRJdnz7qyCZz464dTSzNmzmvegjCNP8hST3MkfCnwbLD6VvZ31Re71owLM6Nfw8StrjewF2gbr4L",
  "key15": "5sz2HucGtQyLUgDkybr8i2vkjR9XsFgQXat24jftQHhNwyYLUspyWE9Ecs17MbGLJGKYRfNnY44a6PNRLnSjBjUR",
  "key16": "43VWvTJ4NBanGq6YoAvSkUyVTng5kzTJwqXdBxWMP6KT2aTRwJBthbfeMexvggtrX6ZZFcm7tMSFzk68jHSw88CQ",
  "key17": "5giJqf9dYk9uFqnuU62zKDhabWshpeHb5KEYx98uo1DY7vLovqNijUCNdw22pSHG8L9D2mA9DqT46txBNfvrR5Gz",
  "key18": "2Y93NBDGeKYWW4X4wadnoL9GdK2WLAw6bS5aYrKEEunqeDNsvwy8uesicyEzQyou8FFrUoCfu1iMnxpVdJ7GbFjt",
  "key19": "5v7qHnBQGMFhZDM1q62rkJxSwNQjuV6RGV8YBEC1bhLgioZbxtomvpPevSrJx83Py28UqSucGVBU1tyXdBwGKgi3",
  "key20": "5TdD5xGTqpcgDiFRFsoGBwtEW5ZJ676cojrUsrewq1aasSjNBHLsWkSgDDehoCPPq236jUyHh3ibhiH5aQsBSHiD",
  "key21": "48SZ8rcmHZCWJu5nmg5SRHrPt79phCLET5zHYxBzGJxQiqVmahK5HSaUCD2p4bWD6vxBN1hQGX796xCtxj51Uy4B",
  "key22": "2Cp3NGt7AhLES3MyJNE4i7fog1SwGoufDj7ztdZD3GNWbHtr5z895hQn2hw8gtiwc5tmUwd9Xu4JKNDyEqRNJipB",
  "key23": "3CzMrMscKSMnjgkJFfPzMnMb5PqXSYndE4v16hUtVuKM6Ejcq9PLUgHbmoPFnATF1ac9AvuSkKCTH8qHfGGcoJhr",
  "key24": "wnkJjkDaYceHDSoMz3xWKXtFZoWP4MkfEcGFxfPiiWvEwYLLc3eveEZSCLjQCcNeHeZSECwSj3JMp38oXAZY89E",
  "key25": "4hisRASHXZQApyftgafgocjt3Lcree1FzyGjTqzYmLPNhCCcQ6MmYhypjigMDiphVgYwXJVFCFpP2U62dtCuGsBe",
  "key26": "5N4kT3yJzt1on2sWMBwmyu9w9y1UYLffEcSDUiqKtPSDU4cjEhyN27nkNhh4ZsSmQ4KC9pgY2vcL24oMijTiuhuU",
  "key27": "5DV2d1LrGkWCVA38ar1NNeReshiPC8rYSzyamnYd8x7VYcwvr8UHbT7BQtbmMpGwZNHez1GQxwuBJk7icDzENM3J",
  "key28": "3BDRsgr11RE9y6diBULHZyEjuziZtRfUMJbtZdAphzicePEpHHGnn95gQUsqit66FWKoYoJ9XNS54HFS5n2YSgMo",
  "key29": "3wZPmGL2FopfqmVcwaB7iXb3J6G7Qf92ZJhDAhJfYmYtWsSA1iEnxyEzWm8aKAvzhU3svqMh3KPHPyh6rRX8C98n",
  "key30": "2jfEnkhQbL1bMzUghHVC8SjHdks3PpsdvyJn7TPh64U7S7mxzbuhCY9CdkkhAVQdG73sHshvR38v8dQGC2nY5cGW",
  "key31": "4rmxdLnC5aRZRaZmCpufX5hdQREmMWEgLvmN3TkrzhLryv1vK5xoPdyVJhnLzFp15WM7fkUEiUyiGNDxxwGN4sYi",
  "key32": "4WGssixhiujeNjbHVaDATxBftrzzVgVTNPdkZTssUJfjbfFX2r2Z74sBqmZAok2xHGbNha3PJjei4xs8xQ9iQQN3",
  "key33": "3fSsGXzNQoSFbRVb6CaCn29utmfwfWkxGz2rUQWghPf4iV7Wpp3hzK18YcK8gxEn41jG5UW6sjGN5QGB2KQquTWX",
  "key34": "5hfaRs4TATkEqrGJLF76GfuDSmSKHMuJ7BChu9U9ntJxpLFhG7FUAbuBGwwAcv3um7Bd6Zj6hS5qqKcJ4L3EFb26",
  "key35": "4siJEBAWjaXnE39BkSgSzyQar3zM9a3SQutcyEfEW4SijWi1yizLRBpSNhdCaJ48NTj8kXNz4b6RPdBBg4qrrKFU",
  "key36": "q9fp4o5jjkNnka4mBxBzzmVdEpVU9hdcuYimkba9Re7UGVbn93YZKXrArJmVQ1qHYPFUmeG789U21jv4wUF21Vn",
  "key37": "c2WDuNBNukRXBg5UN8by2nmGKgFXzPgnWj9bvPG193NKgRAz2G55cW2ZbJ1dP7UNHCPjfqAjr8Vy4o58DGkfQmv",
  "key38": "2KFDQ34fauvo5ftpMx7fcFFe1BHYpxo5tndvYjp3g458ZzSWQt6fkcH5ju4jcaVri9LQjVfWtqtLwhpfoTFs5i3x",
  "key39": "5w3w1DzxVRybbKxMYoc191y4YxxNcHWeas8ZdSKWMsQJRWJMMnNVHD5gBJvkge3d43PFnTg7WFGypfZwHG1Rdjxs",
  "key40": "47ntYzFdwNGzsXE9c5ujCrrnuJZvmcsHNUMQwMsn8B6py9znuFXShZxWtvvGB6B5ToYEtBP5XFUcB7inStu5opZ9",
  "key41": "xm5hLafqMmCBNfm8r7M6cCB4PE1Lyy1F7H46VmKXG2ioLhf374v62W1zg52FnP6T4i5tJmfz5uMucVzZX33o36R",
  "key42": "2twj5KUSw8jdixCndUKPiHuRV4p2wkWsd7g91M3k38yaWeZFY7XAVmTW57BBZ6AvZFLyHrs8B13SHQrSckfqKzNH",
  "key43": "kWyC2aySCV5j7ZojvCFduJQCdMFAWcE55d8P3CcCL5Cq7vgqLsN93xHQmLo6qGycm8fszuhB3YkKcgzdjKTdb5B",
  "key44": "5Bc7z5eZeJGNR53NPeJ8ZMtaqPi2htRxwrb9QRoDEHBvrXkH4L7LQ9GeBo12datXbPZQr4MDycb6oaps9u8MvdUc",
  "key45": "48pD3dVgFGju1N8XMKhaMUqMqzZoa2MDFLhdFWmjzaPq8PMxESpqZrpTm9qYv1tHpFiaJ64WZhxsj7bU7HXrf4Aa"
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
