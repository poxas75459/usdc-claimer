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
    "5cyycuHkJYVAXtfEpEZyVvx6SpNvazk9JiGviYvGL3StJijwxm69QgEactzmCJum2V3SU6y5UF17mqowjF5gCiop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNiY5xKFUdYk6d641G9Wqzsmp6QuxiubMEAFLVYFxXNkdMXGJ19sTadC6PaxPcG2uMk3MJUT2pcpRbP8q7E8NiU",
  "key1": "51NESCfceZvfunCKk4G4fubGamdcbFFtFMrC7ZTsomTfxfjDLm6WfppUWXxiEF3taGnUGC7683Q7vq68o7stmhda",
  "key2": "3ASPHvKnSQh473PZhdirzYd3fARg6qQWRvzqWhBSVnV4tW2asxxZqtxQ9pEpi3WyjaXWcP8JmHTMrZtG9FRbEcFT",
  "key3": "5n27B2769qUxxwrhR2x2JmBEHT6WWEEKBw1f22FuBvaJsTAK12LdqfKnYLX7ZxCfkyS35NktNn5AaqcyNMoRDWX3",
  "key4": "5ZP4qNZjkbo7GmjxAMoau4vh8BGbVb3xs173LmQQL4hoGXeutoNo8c65R7oYDZi97aXJQCEEmemDEhYLv649YaEQ",
  "key5": "2WW1bUeGPRdNQ4Ajz3FvrkT816dZdAiRTCDxZ34tLMwGcsqWwkGj7Hhg4PFYsnAbnKnUNMcHwvvSbYp7P85cANKS",
  "key6": "2UKZYcZ8F49X9XHna3Yx6u4Yr5ugreTt34PLEEkwNHzY8Xh2kVZwSWuMFvexmCDUGGsYPVYMcNuTmfaQ3Vwu1mHz",
  "key7": "5HSp4Je7i1Ses8DbNC9Kufyj6gn5cxFP7zcNEB1hkTmRHrgFTiPnt3jHbFPvMrc24FFr5zSbBWt2cXfkpT31um8",
  "key8": "QtCXtjGfdhqQ84WaRAnL2wJbhXYJX59cU3sm9Tn9jKhMEJKeAP3UisqMRKSvTVcH94eYY9VNwc8ZMdGrJ57EWLr",
  "key9": "3KzRpCSBELUV2PaJF54Ytnh1i7JErtasqL5NU2VY5TkVkr8EZZndRWwJbhwKSucX83hEPJp1kd47ePTDxa8XByZB",
  "key10": "5JdbKr9xdF8L4MB6Faqo9wEHNCi3rx6ePe7hHpubwYv4dtYs3f85r9nBXbi3YFfxi3ruGkzxgQgaYhW1iYqzojnG",
  "key11": "5zgFNrBhQFCz8YEto7u1JjSzUcTxjQZLXkeSCdf1Ys6YRpNbfgrDELAhbKJy5ArqDPjoGVZW1dt9RfcxR4rs94Pq",
  "key12": "UKD2Y7BaUAWpVFu4Dxrxr86R3y4nLYBxnmXuMJaqcyRgSGRScRzN25J19iyzuwkDZcR5h42GEB6g4SyAnoBZ8YK",
  "key13": "4K7SjzdTmyzc2DKsJ3pmKXmwWuwWeHkoMidNyBUNM1kobK3LcSNLdr7TDqWPXnuxeTRUbQwLFHVMURAgqJMd2sw3",
  "key14": "2g51QQ4B6PYxNacMFdjTBd3D19B9CmgkaCUt3befV73aWNGeaHGNZDhDFgZkovue7CriDtaPddK8KzPnMrVN8E9D",
  "key15": "3vtCCXKMPoybzy2EuGP7NEYrzMzTHN3Qd3s8baYsLzfAHPnKPtucT2GTfiV9e56soZPL8EhC8qBhr1c3NpH1FzFG",
  "key16": "36v8Lu1c9NqhWak7wWCZf3HbUGDbWHfP3F8MnVCZweUHW1FSw7CiKq8SVGx1GNvVdjrnczQ85yAhPRtbSJMWmL8R",
  "key17": "31rUG2N5KVSGGnkRWk8cSAvbFAUDVqJn5JthMyqttt4azWWQN5tkr5cxNaewtLWr9v8mvLcgCrxcvKdM93AdYQan",
  "key18": "2idS6PKg2zrxDPp7ycXQQHm1AwJxToP7ueaZcj8us8uhBJzrr53XpodSuP3M16QmEVwQRNJZwdBZPUmYFW7vQ6s5",
  "key19": "jJsteASHKfRUXL7PD7xUFzDJKACRuMsABC62H6SfvkrAKC39t7PXrg485agYn9VwcssR3oq6xcCfgLESd4hgZPL",
  "key20": "4Bismk8MWonQsMBG6bnoNbDS8KZ5N71Q1yFefpRZNLfPo6u1Sn2WWZmS7hvXb2eaUqSWSFHJm3wATJ86rHS6uXah",
  "key21": "5M4rbhMjGmfJGrpffN9riHnLW74nSHyJMgQrm21m1yh8eBzzUDcqdLMJBAUCCTbjbKMWMqxHMYLj3hqqHKvEdwr7",
  "key22": "2ncX8NYHPvkDn8CVsCVgXL1PHge6Jy53Q36yBKLrYUGyJ4thVLzMyTDrNGaMVb6DP4TjUniw7xmnAyzi95QvkR9W",
  "key23": "3FzChRuXyENghjNaA2hhC3Mbevbf1qYaZ5vp1JpTNo6RUWTsvSqmta1EjpNj7pcLG4GhemXXCVfiQAY3XyngYRiU",
  "key24": "aLmXZxDVFwmZPtB7e3Q4sa8hZMc2CnM5Tmrh2fQV9RJfNdW59zgFKLoQhfxnZCT16AetfcGpmXX1ETWfJ9xJmEj",
  "key25": "5FFiitEqoFVZpTh4RH7zKDyyCa1zFmtUu4rotQiopdFiZ6NQ3rKdegsr3uChTEidAyGxD3vvzjgkwMUhKELyz7TE",
  "key26": "2sbEKPYqPrSUNtScGBj11vh1vhVeqV4JGjyLyPuizhT5Yzc26cWM742vkDEi4FdPZn5vo5KdDJazLbB4YYhXAXUq",
  "key27": "4qA68veEuEqyJAx57zSenaV6DtLepPry6L8zYCRm4ZWswsoY2MLJL2F4WgZKETR9twLNzLT3quoUaPkmET793UAJ",
  "key28": "677zpwWKzogC78oJiABawZ5xaq91JFCqYbW3894CSbUrqhxwFZwtZJCDsiEmiNpazZ26MdeSMdXn988Ya5cGknfy",
  "key29": "x1ZaziPv4fC5ZwLxgiP1WN2ovcSBPCQbvNVXMFF3ArWD2RWDhZttA1SWSyrvJ6q1irBRU5XpyVPV8R1oAe6FFUa",
  "key30": "3pJXBm4aKGdtv5G1z8DEiWf9VzJytixxKLymUCSo23nYiUUQuHvuHpzPiKg6vM8m4r8u9MY5xWa7nksiMX3aiciu",
  "key31": "3wgEuVseTd64bzSRkiFAcpK4WcjvmH4U1cqujmLsTREsyurEMhLYNGQ4PBtN6beP7zfNaYuGJZgrS9GdLjBVpvLa",
  "key32": "2T9VcpaebCMVdk6nwjQbuhhEgCiUiY2VUV49dQWapJLNbHeTjHYE5ZTGiTvwC6ZZUjGCkZpazdymPru8UUWXTMe7",
  "key33": "2pdFnNygh552ZocbxU32bCaQo8snhLR9KNkxK4ewSpRUU1LzhJjAqtjsW7tLzABjomPTJxGcWkYz6sZ6ixPZLQ89",
  "key34": "2DdcA7ETpKHcYioz9V4J1T59nvFqLPkzdLvuf5Cj84oJ8hJWWQFiujK6SKeFyfGrNsrr6MdEdS61kUQydy3QfZpA",
  "key35": "4GGGvXTFYudDHi3goJcugG4GktLeXyH4dskutbPmMhDbtjjRbzNv5SyS5cpM4udKmN8hwFKYch758awbZSGq4EkK",
  "key36": "3TjZcHRgXXVXHMz8mbom4k2hfJ3segDpinfcyeWSGiTVCfWQimp37kABL3WhgK4RsjqJkoUVQYr7ZFc2PFpKLdTa",
  "key37": "3sZX1V6XhM6Ds8AcjXAcn9NYtA6deW9Wv6Qdz9umGyQMdNezjsbs2pawR1hzdRNkBebeSkXEXS4tDwdTu6vCscx5",
  "key38": "3e7awbrwuRR9SGoPL4eGChjXeenwLtpauiq6vozWzV8BnfKF6aYmUz6HT7Q1nJfhZdkytpcEiU4yTsFSTAxScG7V",
  "key39": "SfshJzLPTxarEbKN7a9s66dn2iEVwEjmDmyoUseCLwXBQKUrPFprxNGmTZ7YqQ2cE4zFcscezfAXzQbjYNCfABi",
  "key40": "YxrdfCAhsebNnSsY2WVZwE7str89HcxHBMYqMG8PXtfChT1syYvQ49ZKRWvGUxg5vyhYRMTVFCFfNnHmXGQ33de",
  "key41": "3xHEVdBCjpyTEavNgPGqMg8ATBoektqj2az6afDQ4ED32oF6BQF1Mud9ZKz7LeQFR5rCvB7oPtBwisxcjanGCqUL",
  "key42": "4dE7ZDWfs6AopCB32gHzC4nFzUALr6FsV7xx8bHdiXUQeeErVa4AwKGNH2ARXeZocnKBVLZD8arhVoSNs9oeinRV",
  "key43": "3oMYgEjPkRnUhx9NZMDV1m6yozNxXsBfNd6YuEB2wudpPEDB8QrnDpYYgsbS6on3mNKD5Hpn2EdxLXWL8p5sKh6R",
  "key44": "3RNHQeYe3fNZYQi26CPXbqG42MDycmj5PTqmexYR5Lmn1uvwSuW4zsTt7Uj1ztYBsAdHe8WV55ndQssefyD5SCGC",
  "key45": "5RbBXuttvM9ZJCr33TQJw8idyswHx5KYd8ip8MaX7s1Nq3kjBg3yJk8raxiyoCcuF5jmkqdHRZAzrnMe4ojqRc6r"
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
