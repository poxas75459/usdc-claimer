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
    "63Aqz13kw2Qp53H1FTvDG4jQWoLLUPEhBF72JhGAemjVmksDa3iQpxgMtLw19X1N16yeNgnkM5y6ekN8MCkiz2Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADCaudrc1VhQefoAuiqtZjmtzny2JAvqRGGzkLpJcsnXLuTDz83Y7MUvvEvPKnM6tBNc9QsDPpmtYwF7YHigTnU",
  "key1": "4pArjKtb7SV8K1q3kMj1gg2FpYZxmbdZbzjq39fHZ2YUx3F1L3hZk2fSrUQnHjLSEx8seTK8n5FNytWLjnJdV8BJ",
  "key2": "3g7S4vMjFBKPrRGF5YyYHjaotXzgYBS24dX8jSbqk4rGQCTDEKERgGjm8BTv1eaLSzxyzMeMMwa3MrKgLWTXnFV4",
  "key3": "5tDMnkrQ7ZqCCDUHbb9hj1nWFi2NSYZ3namQQYiykfJ7ev9GDysNx6EX9PMX6ELR9pJWTShzxyNfyJtwrNiSnuVz",
  "key4": "4yJybobibqakqxdZ3F5mDZZ4gzvS8RmPHXh2mwNrq9KPgT4JcXjRFNDH4KrjourBSVPDHxEvbzi8MD2VWbDdA1Pq",
  "key5": "35KpjPnP6iHUn6SPwb8KXs4ApZJthzFjx2S2yx1ehAzxZAb1CLy2pFeHBnphKh28WRcbTpu1RpQFXx5nmKyXvxeC",
  "key6": "5rdvmBBmDB8gQGus6qTCTy6Jj9u6LWrGXfyeotj6qRYT1gb9akhdvAGcweRELKnSRqQjjoHFLvLCi8hq4dfRGLCt",
  "key7": "4smH6P9ZthEVu764USwv1FospBx8krZ6L1idCY9cqdT9kS2meAdCQm4A9hJ9igptqfQok8jjfsL5dTLvow9b8pN8",
  "key8": "daE7H7AkSBEwiH4iSZYqVW5sgjF2NZiaqATW3JKCM11uajAU7Dkf9pJ8NZ4tGaf7uE6Zdchd2jueDYYDSJFEZw1",
  "key9": "5E7wtVutgrCn5uNCxs51b5yi5cmj5X88CfqDubcM2tcfFG3uZXzZBTYNrw86eAgu7RwrRUEoYXcqPUrjHtRphFo9",
  "key10": "2azn1RTm53jc2i2ePQcD8tzH5mGfC17t1UUTZUcypwiTSKwdkgeKuUGvmz2HpdXL75pprf1PvrRsWx4XscBwDsFp",
  "key11": "3iFZEXKpUUpQ4CDCq94M8wz4bkR8zgUSQouut48xcMAsvr2MbFbLGXyA5S8SvbdeGwhfGAny4bUWTK9rANUWae9v",
  "key12": "55XjrkPZV8mbHruMCuthygxuofi9LEKw1B5PtCt23PXiHGHD7VRaB68fA4SphZXhiABj3kuuQ5QHQ3rChjp8mqV6",
  "key13": "4f4gFa63HQSXaTBoc1WDVgXiuQYM7z6zfJ4Y8Q2mgkeb153okLqTk8euQ2zvKXam3vs5UF66yjvWLa7EKCJ7kHNS",
  "key14": "4SUUYeQnLyG9cPNpa6pFAF85oBtVwGVGLi1wwz99FvQRfVvxgzBW8MKeLEwQaqbNtQKSyTRps8Qm1raihNKF4y4Z",
  "key15": "39Lu5MkYXQHs9AfaKCHodKnBErcJeDbZFSc3LpeBShZCGGgqvDmN6hnZ8hxUg2yoweYHid5ExuRxXE9ANDiij8hu",
  "key16": "3FhLPKtfwWX8bXmhvcySV5ENHHF1Up4ZueGnWytYbo6x4U3AZNxfb6GBjQwn3TM3UoraK6YaqFQcZRemd19fQEJd",
  "key17": "2vgpti7d8EhbiYfvJAdz7ewcvLUxcGkqxjdWjo8aGybUEqXdQ2g8YK7MbPwCXZwMT7XkbggcoxCcyhH2aQv1QYUy",
  "key18": "4pgHCJkaZ7dtJW9QcCQ3K7GbQuHGqWUX4eaguyb2uK6WowTWSFKt2LVpbxQMDWC5VM9Vbq33bWtv5uUHcYYvPMYd",
  "key19": "4SGYjo1kcbvTmvmn8BDRQsR9G2xobAPvbSQ8o3gL75cdy8c79qxvbcHpeMttt6rJ9uXsMwqwKZ6UfuWtFRjeyoKp",
  "key20": "5kZY4qRae18m72ke3t6yygPezVqQUsbZNJLddHqKr8Ud4Z5y8NnHpyqnkAcAM89BknTaz3M1ch1HHCSGuasUKHZc",
  "key21": "4At22a9jxiDzpwbbAKhp31fBTTnTqtHhfmDdFADqjhZ9NrK1giFJGAh87DpXMZgnd3zxZJzcG95jWBg8qxaX1N88",
  "key22": "34Mh2LLpwUkRvvib2SZUX5CZ5WLufYtgCA4jpKcRJxezL9ra5QD51DoYPFAwVaGLWAEHr6SivWAywRZbgudAxchR",
  "key23": "5JkNfoR3qM1nqoByYtXJiEEb83R4A18qsvuYoCpSVG3RM1XK5FFDx4kuLxEa6uYsK9UQwohivBqUKkbFDAiM3jXe",
  "key24": "2x9Fza6qoaFoUKc3xgdeWejL6Jmra3akF91j3CZ35as7SJHsAU75FJcynwGB3oXjRUkfx2PLmFQfafCbHM31R2Q",
  "key25": "4yZDimtZMsq3emFGiPLvchJMP2bCJ7aXwKAWwC3fSSXu9wBgjYcapF9CZN2Aus7ucWaWDrcUM658rLrm163vGraP",
  "key26": "Erim8j4Ur1nBSX5brAYp5XMu6c1afy9UuuAfWLPq88bTSMseMXg6yzVKfagQbG6XL9NeEjU27QHEEgDSBsmXzWA",
  "key27": "5eM2WHsKRm9TbR8GUKsHciZ4KzLPTtaddBMcHM4NL5Bp7zfDjspjUkv55oaEaQkz3qpjPQk411mvjF7oxLBp5dGj",
  "key28": "2fkwszkgX7KSwCnXuQip5hnzVaBHYcycNPZnD9WVokMGKtX7CSjpwjwqZYhVJi2W34KUUjGMwtR37s1SjLhwH5zi",
  "key29": "4u1pmygSyVJrkYjc95HeXh4tZNuQ7ut9w1KwEw5Z9nWdCu3ad4yS1Frnb3iMMtBhu2a1f9hPosKRryRumw4PZhzJ",
  "key30": "4VJt7cpanWQFbfxLpE2HKTzszrzbTKPdsV4faUH5zQwbkYo5p1ViYSTv98syxVoFTpGUsDnpQ7Fzsk35zyFGERDK"
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
