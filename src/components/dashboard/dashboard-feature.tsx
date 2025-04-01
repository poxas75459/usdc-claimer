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
    "2V4z2uc3fN6vG8xDd7tSPTEgKRQVppZVJnenFnU9XVMPz98nQjk8scVRc7XuRDaK68nDiazvRddifBfHuRYBwgSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXCvLpVq7Xoy3E7tVAunmMVQFMCfuHLK4yQ3uMovrjDQe4p9mSEVgywrMmTGNG8X1xSLQfpCqVdKR4PwK1iDavd",
  "key1": "5ZH1UtmQSU1ioxAfd56baBDAScax6rESdsLnu4wm1sSdzzC76CPDnZMFRnQaodBm9Mx9xRPNqCqJTrrBwK53rZ6E",
  "key2": "4Q3sHf1PKDvmMtVu8UgPWdhhPx57SoaSSaxBMBPfD7yAYSCHQKAz74ZRkHK7CSsAkrBuCmvXsStdG8M1eM6UhTAT",
  "key3": "5JTwETbvc49DMjnnpXmc9mGYh5oMr2FU7PrueMKTkDVpn4CGsy2UaJjexN1sB3ek91xgatodfCvfgLAQnRMWLbmK",
  "key4": "4nHQ8FjTDEDEjfvpBnPm1Rd4ucTid1oznNJQEC3TA8BwWmq97oQ9NSo5LsuYp1QfGmsFGHWAvSiJnSx1mueJxVXB",
  "key5": "2ZHRwGUgdzYDPEfvkfNRFqSq9YouzQ6U1X7kYxab24H3YqjeNjh4K7sn587iK8bjysPCpNQL5PdgKL6xw16kq8Y3",
  "key6": "3hQNA1N6iEff1dp1DjnKcHA2cXXakyCy28Q6VUD2oze8EgLKVPA2N9Kk1iGhRaPs2kLUHZREAcy7aqEC9xYT39Jh",
  "key7": "4wRPi4r97qGEHHwvPa2z3WVt8tMXXpwDvUHfW4SLdD7BrLXdNmgTCYfb5pM1A6XWUYuUAc3a4h35JMzp7j6Lhzu1",
  "key8": "4Q9MB67VmRviwLNmKGhwyZUwJYmkeqX5gUbvnGNegrsBsp1FAhdySYMsJ1s4Gvx7uAoAKSP98uCVcXjtFocBaeFy",
  "key9": "qGyaGxkcnNoMZjLau1h3eR78vApeGpJYhN7qhAknK5EZyjj8hBKopW57XyBg33q8uf1PktdtXgL2msXya4rQHpK",
  "key10": "3CwQwCrzgVZj4z89LTrTFKKBLFCXUTzZE5DXE67HBYPijMcyWzmWYQVgEEz1jS71zKcaPpJkmtKRU8WWFSpRaxxG",
  "key11": "4FAzVJist4BER315qsQKLbsj4TrRxHpWDa9LdkPbTugoGC5NNemGrdvAEAiD2NxsiYtjnnbMBskkqjZLN1uaZEzU",
  "key12": "SCGcubNegns8FKFWxpM4TNZyqSyB7PWuuhApKFxsqa6cEBMvKTgt2EQXCVgQMm2JSFu35w3enrraqsA9GA7PkNT",
  "key13": "3JjHSoRxgghX7Af9ktV4o8G1t36S4FGqsqZmS7mJBfHMUzjBd5aA12ed625FNgmQEn94DEg2hxsKZyrydXmijwYS",
  "key14": "3XTVoYENYeWc37LCWNJaxJgErXPe9FdUTtY9W7SyTKC5emiyp42agxogHgyA2N6ci8Z3SWtW37ZMWXfnViyCcjyz",
  "key15": "eePbMvnLZ4pyPfsiu1sLFfRvF4DzuuY54zsATk17MsQbLTjrRMrPQXKXtemC2aVnLxU4bwteypuuM26YEgkRXgH",
  "key16": "5obHn47xKpt21umEPxLLvaAVxvQqRHJincEJ3szPGo2MnqYVZvF1adEpiY8AkZVzbrpKQ7pN48xvedMSaWAwdktr",
  "key17": "31SKvr7W8F3cyd9KUMM2hjHzu7ykN46nPJC92KKxp7dLKhLuWbBoVbAx7ncP2UU919V3D2S8dLnpYNmL8xZP5bCq",
  "key18": "35DT7GbKe7n9nLhr5n9RfANF651t7GtR5KNBtiCBw5mgzeP1B6KAcWWGYESbHV5Fedec9A9p7qLzGET9oCzPg4x8",
  "key19": "3wHfT9CxwuNAB4C4UPSACXK3Ha71XN6ytyJjTUV189on5vnn9J81wqVmDopfjktHpz3K1BRQVBDinoRevYyggdc2",
  "key20": "3cLNUanWGr2iXFcApkt6FNc4AePKr9cCrZgsjNEqWt3wktuT5WjMuYFMurUwaur1EWce6vGgpEa6EX9GkcEAT6Di",
  "key21": "5SEj7sSSLB9EtFrd59fJQBWZw72bEahC65TZXkxM1jEwLu62rEQVuVk72kaLoxLZaNn7dMmAWCzYUPjnVdjBLXY6",
  "key22": "4cVgHiK5a8XfC8PMhjqUzZ3kHx8F6jHEHV7DvL1Rwk6x1yh1TRxy1wGy3SE15PREr4k9uQWdDuwuj3qaRKcbtg4B",
  "key23": "j88RPu7jQ3Hz72gLPZw8fA9dum8mo3LZUqaZbRQCX9fsV6h8Ai6AvUk18GaDU1e6E3LnJPpHBKH7PUruwFt4XrU",
  "key24": "2GhoGMBcED7NAFpFDkcrrftssPKHCBP7QGt3YTaXFFM5gx9KmRbwjgzT8dunvAZXRNETjH87grMRA1wteYedjBuy",
  "key25": "2DFPX4qqyNqr3Nd9Nv8catfbkpPraG6wZUZzDF2mvedqwbemMYBLG8dofED57ZzgQs4j3HG3p7eHD2NXyK2w6jKE",
  "key26": "67dQd5sjrbSH3Zvmzd92FJUf3UVvXvC5naqVgnR5qeA7NdcVGzhzfadrksFCrUzYJhuASybLes5HPnCPgE9nisoP",
  "key27": "ei1SjvoYTVpsEUrbmVgSV91sszAACdQShg4dZLwk2URHGgXtwQxxEZnM8kvi9ggKdBmaVrrQQUkNDTfLGTbzPGW",
  "key28": "4vmRn1ddRLzScUX26V7p6BYZZJvnxHjtYw9JiQKczUXjCfJDm6crsi1dsHwys7zsMFoUbb2UB3tsJxU6Aq6cHPoP",
  "key29": "5XJwATyQHCM2TUo4Ln6ZLwq7m2RsbJsrN8izGe4jQuwCQ3g6YJT5aqQ2Z7dW23zRawt1Hbm4yZbLQq8bGVCgstQT",
  "key30": "5rP4E1fTKbA66ZaoEwNUj3BRicwVsqzk5dsYpMtn5WRUyp1mq7sJNZMLmk18YoaUiNGdRxdDijDL2HPTs9PAduzP",
  "key31": "4CvuUJy3mPyxDUzbQ7VYnvYTV5D37RWAa4PZChTGNnia5YXnxyAk7WrsfWTWTq1tHtQsgNTMHi619capXGSykYfi",
  "key32": "5mr5NRkE7bhH3ouYbPxov5Eq1ksL6MkQsU3f66ccg729G82Dyf8E9SNzNf1hJa2qsvSMvC3pk2M5k7dEr43p4kHE",
  "key33": "2gbM7hoeEYWTUgeucqfT2kuRXLy7KZYWoFpNmKxgusmuBgFZ7p5EBXQbHSsAjMzh7FxjbjGxERG8tEMy2LCpSWeA",
  "key34": "5BAKCeJG58d844yXnDAp29BB1B1YrD95dRLchsiQukR3yJ9KHU2GktbHYhjSvGPSUvqC7zeLJfEnQiArJ1eAtvfJ",
  "key35": "2FAxTLwNtUX9ahRxYPDC8CJ1U5FEb596vkm7C8Kcc8HNB79hGK5eqdZ4RK82pwJApvNLPbcLDrE88koWr9JxKHop",
  "key36": "4HRy2RB19rBUyyfiiDGgcXJw78CJaP88Am6D3KSnYPBRdedTbj1EycYctnaL6Xvwtxfggr89kjig3oxBLBNgbgUd",
  "key37": "2wBAaavfVALGmNN94bTZdYLJchzwkyFPLCACfyD5Tz7yXJ5fAE2aTBBtSK3rB5sFYcRC95wf9PfCDtwbDWYDoAtT",
  "key38": "5eeQcKZBZUAtUrXJe1VS2AxKvk8rByg76suuwffbjYNKJk15CrF5i5vTAgW1PmpjyEHiJiWq2rtdJKgq8hKCMb6h",
  "key39": "2xYVhotbeXgjVe7up17o3B57gEr123ddY8os41m5MEhJ1KKfuUzAYcYpG6xB9ppsfVe6CCVn6uQrXp6QBGxM4hhc",
  "key40": "3xdKo2sra9Ss1C97u54KiApU6wFxFE7ZN3hAWDz8zFM3ironHgvNEy4wMzobjrXZNujYDqvdRiSSP7TPiqp92VXP",
  "key41": "wJ2KcZp9uPWNWCjuh41G6fogQpMvqSfjVkMVbrYyfdbhewfumEwEYSqsgqmMbwgHroKPWFnqYiyt6V9HaT3UXrb",
  "key42": "58L7yWtsvcGaYkcBtkcThBWZPGTq6LyLB73d3gqmbJdPTgSerhwU9sAaMCHxTrLQrcKqQSbKUcPELWxWbFMrY9nr"
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
