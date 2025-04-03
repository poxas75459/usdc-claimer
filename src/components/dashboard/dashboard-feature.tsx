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
    "2hpvYAasEbNzkmHB3RAYWh4Zih7kJZbuR6uwLHGjsgpzL4s78ZwopBM9auQC2f2d4jWj4giUuoLPJvg6ankyw4La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8ZGCfDkDVjaGbcg99RjSgqsG2HSe61UMma1mASond8Ye44gAw2Sws8E6hvZZSMM3M9wXpA9ET1QrhoAX4WMyBr",
  "key1": "w6ZioumCA77AWw3EwNJP1LPemKSPkGhCF6maFtiQoPXzD2Sf3a86raeZEvKhwR9KuYtxQjRSjShmGK51RjpCRX1",
  "key2": "2Y79xdggUskVW32gBYWBY5JTN38nXgTydDPb815TUP4ghvXcUukK1PCCv8PEW7iBfsZDSAZZXtBTRY19Ymyxmgf7",
  "key3": "54dK3adFYqp2iL8EYnZLMP2L6AfQ3VL2R28SpXD9NCtJ3U4uwuzYin7RCJ32xag9gSMVEfwMa4vxmxpp1vo4AnFQ",
  "key4": "4nxTw3pgN7vfr6NyDXB1AqYnX2j6MX7aUA1rsVMjtDWamrY9tLgFoHHXBc1vgA1ihep5GRMz7mfa3PyqnVVHSNBn",
  "key5": "5yUgZ36wLPNFuuWqVZGfrLafxMZjcz64KVFXM1YR7KjVXBCugP8dPkxmtVdjwt4b74LtzXsmey5YMx1qPA6M6b2v",
  "key6": "AtyVK4bd2uHeysQfJpMiVot4Wip3JzWZgksFWawzre7ZVdW5U7Wtxbx37athqHiHgvL2GLzz5UHH8FGtZhbUj2H",
  "key7": "5vzRQWdqsBWvyLaspBfMp31ynaGnumKvFJx5iDJuNjDnKGgpWBmVFMRAk2fn9R6acDoVxTdJFeAQ7gvhzk3geM3R",
  "key8": "3LtshH6grqZD9Ti7iYUvANFA4X831FtMydydKhcuMV8EP2zP6tiwo2C2mCxJApmHozrwMEfQALorUJGqxuBEYApX",
  "key9": "4UYtZh8YvLz7hXJrcKephPuxsoRpJzUENpt3jsbrhsWXtK3RyETCQmTAm59HW3Kzu4kr11LewrDJ22cEzNicXP3R",
  "key10": "2XdyNB3c57mBVMW1eAmvHizr6y4NJ85eShcvo7Y18MKYZYAQbWYX6F454nmLmGVhALHTugpbQVbmzvAdefEttRge",
  "key11": "2V6pfEK4qL3T6UcoXKikJg3wurcoLW7HLLPUVuLJaZmHa7MikfgsiZ9C6YVgNkaDeJAnxqLaRwWYBwqNzhu3o7b3",
  "key12": "2CwB6cu4N8smMyUR3uezPgE86ktsCo92sJJdQkNypBtXCrYxhfhi6KJHsgG58R9s11iLjyZgQjP73m5tYxD3rkz4",
  "key13": "4Bc1EKHRjSvgGradJnXavcihQJ7sKMumWFgjwNTDR6T67doBsVqkTUD9Z7noK9PD7DJeEA8DPzrtBrTJvx34U45f",
  "key14": "2F7B5VBjrfYEXgFaWVSnkY1trrtrbZhDZQSoErDCtismbV7XAue5Hf1MPZ5Y7zugabyjSPW7iPpkoTvpNNpQ1CLW",
  "key15": "3sKjitQXKUUi7V9LSoRz9aDBq3e4wufdWSGEMwp3JXwr1ehdHHGZkns7hUzKFdZrFqTDxMFLgaBfdapRButGarr9",
  "key16": "3bCg4tWoMYD93NUewfDUN5UB9wtGi5yAAFRbzsi5R572HUB2kbx9AX7DGppkGTipeBNXki9VouCNVDiYLJJWehjL",
  "key17": "32ybqwLuNSiKt3Z5NHFTtQuavNN5fTGje1AdFhg22hXJgbNFu5NkBNXbiJU2FxAjzQAinenumiJbtfn7uNpUKtxG",
  "key18": "59JKTf8hFipczLSVrXzDoRpPLdN5fCmsYxHG4PKTrXNqVtVb1REdRpxDTLiJjfWu9WTZPyN3JafDhqSYo2LpRLdh",
  "key19": "31xmQ6NdTYmYFzFx6aNMPJRd7V45LHeXNR5FCQf1cGiNT2mwoZDDas14a4m8BN1FYpDLNRwbZnVKqnKoL65K4ETT",
  "key20": "3gBwW3WuxtG8fVGsLNsUaHvyrGfKR2sx6kNES3Rxv1Bxrz429FYosmWZfvK8bmfrM89EGAD3BDb2uFtSG1tM1Vrx",
  "key21": "2oWh71eQzFCEUJc4nFtXNaJFUiwjach2bEWUP9ZRxoPeqLf5NND5Ex81w4oo685oVpomitJDMLkU98VS6UF8tE3a",
  "key22": "JKvuCMSewMhpVLMYx1deuJ5QeUnQw7yhbauEsY4mtMCRV3cwrPjwQ7URXzQ2BySDZx2grV7mgsUrim5Y6DX6MCG",
  "key23": "5skL4MmuyrWTuq7Ax39cU3Du1SexMrLLYtLkDecnPHfLxkUo2iMVqV2noNkfoZMDU8Rfjq1fStnXGcK4mfhfaQ3c",
  "key24": "3memeS6FGqL2XbwoebN5DwD1LvT5bknz8ft4aqAJseTtsfpnfSD1hGGZJBrkjhVGhzgsA7AjTGWGGqAcyCGMqWdF",
  "key25": "2eam4kehavpmZc8uScaoXVBiCAtCafqe4yTMbDiWo4MPiGuqd5WAFE4N5dRyXkTZ8EgpwCWdBEHCMbUcC7dBfUKG",
  "key26": "3HMKduLFrVcvMDfqnPnhbJ1jWrpwvKKEGq1EZKgxCv1fndB7Qg6nEVTbMtQYBu2cbFyZEzZccHQ8Z6owbzbeQ6A6",
  "key27": "4J5ohpogJZ6r2mGo23c6toVicEVSFUEpjNuzUCzb44Larkgm4nVAZZUoF65RxQqomS9YhjWG3SVpJHJZmmVVncJn",
  "key28": "3ubo2yu6u1gUp851BKNFv7VQTfCb4EGPNohVDLFUScdrEVKvtUhtarKj9cZ58wuKN8P5BiFzbaGYYkt64YTSuDB",
  "key29": "Auo1KndX83EymP72vuiG3sFJ7v9iqG4YUHzV5cZYsbGymg23F5of1pQXBAZzoYx7KjHvX3tjyEbCDchMJ9KJQKk",
  "key30": "26av8BU9T7FsqbaNnTr3bZ98AQ3qxajUrGhwYq9Q9wmy5bwHGenEzb7v4zTSu5nypSF4zweNXQedRrUWBLbsAVP9",
  "key31": "4nW37yTixB3Je4AgHQdn4f4LzdQNKjeWhSaQhQ8Tip4ps27bxsykfuBwQd9H88Y6Qro8hCsjZXpBxsaNfGH74kRC",
  "key32": "2PLGCaytkHnDXYHAZcrQNhHzTkYq51BFq18BM8iMwyLa9bahR4FbP8MVmVyAQmJ8Ga163cs8KPdyDWDcABXgDuAH",
  "key33": "3w2dsLN5egMEVE3u6DzwCfs1A85hkF8hwzvc7PxptUMvmvNkDjS67GFDtRdRtd9uV6AhdfZXsNYQjUADNbH8op6p",
  "key34": "54c3XrX5qCht1mmLC35dzhe5j9ma8m6gNoYAt1SFdJDjQKCAqqqtNNbTMo6JqZ6dC7F1txUgoGA4HUuwVAfuWR9C",
  "key35": "3cpGjhkxx5BrKF2bhJm2JnxhJdoRvCvxZvRBwuxk4SkcmkbKF3SGbnSEo5L9bpftZqey8gRH34c8ySGJVNjdwyjt",
  "key36": "5uF7fFW7F7YUCWBkveiKDQDN6x81fHKZM6fRm4CYw8AgEpuzB6j1XUdNdcRXSJrhfo6QEhTwaPDMekMqNk8vtgem",
  "key37": "5VatrSTaxzrJFbXrvKu1H7jAN1XDTM2Jw58u7Zfvu2NmyEYwVHttvg997WrSA8E1oYBWeh4vszpF4GTyMX3CLg3U",
  "key38": "66s7FGJJNaYC4p2fjG9qsAgWUoUpj3nUsZ3dDu5aXbfn7bGwSbpoKgwtKV2UZg5j11wv4nPUhGxf95d9ENZ5GEU1",
  "key39": "2sLk3PqJFo5jkcbf6adN4RCusuwE87VUS8g1D5KzdDu8sqdsxvAKXsmCoGnf2ZFEH8BCw1qGiWzFhVSdmJbc9FJJ"
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
