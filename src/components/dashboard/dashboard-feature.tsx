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
    "52MvrgycND4SATdutPg54ghW1gZwt4VBRD5EQNC1ArKPHTwgnwSXzLT91yxQdZi1FbgtsbeU4vfjPaZimM2fPzqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDEXCNWe9geLTZDtWGcLzAyabrHJZHNKQyQxCgjNsGtwfwysWjsPFtQGqGspgzNyUt8hLAXz4WLdiYACGLESKAc",
  "key1": "2xNbZHrnVvGSWUWT7mQ1fMvEZ3bMXe3MSaiwvQbHU1jRtfHNGx2bfzzrTf4qA2Pcq8LctWRT8xgNdHNjQb97R6Uh",
  "key2": "4JUVgS52zv2xoUC974sApjqbPKzisGwviTopiq4TjFMrdGEqTpyeHDDsvoKa9GbgrHxQGiYiwzJM39AWCpaThSkt",
  "key3": "5bDQdAnfvjyFDpoc477MES5V47th3fM5zHJFJRmYWdPzjtZBqepVy1oxG71yUVBsGUFKY4UubybqxCPeaiqbBNHC",
  "key4": "5vMH6hbqGivQbvgncvagy74GcrCiBRunrcCzgcYFsdJ4uSHbCc5FTc3LLxscBkALjEspii33SYxKgEeZcBG7k6Tz",
  "key5": "5Ak7tB8h6aa3dhn9eTLtyLR6Er17y5N1NqsfL47t7Xb4u7uVVzosmdK5M8WCH6EEB1RAUH1tHubRrn1o7E3DFyfc",
  "key6": "3ptox6pfQ2Xh8QZ4qyKJ8cioKWzUUhQHQ5dfsntFiQ6EKi3j19j7BZ3Jsvb9CHqi6bvxnQdLjwftTHNFEoEzcury",
  "key7": "5nPe7CZ6HUYLQxEsbs9Tku9e2QjA3Ee2yHzXwoKYrNtLkha3w53nzWp3qpxXcrNmjh8D7zxdzgJ8kq7GnQ92Piy7",
  "key8": "4s9Cojq1sybjrkoetL38hDzCBAiWeBVgx27d8PQUqGjkCY4PoTAhARbo8ZsuRmCvmVU9FZ1dKvtMqtdR2XJabCq9",
  "key9": "44dyuysKkb6LtLvCURXGpU4pSySsWeehCzDNCayBK7sxvk9ti5xJYEGMboaxKjTyNEGdc6VMgfJtWrxGEeVPzNp1",
  "key10": "634KELQ8ZaR2FoBkaoiKft1z25PyjNc5aZ79LEMkrCDg7vf6E7x5QWe4UZZmwZ7sHRHn33gnwwpdUVzZPjKwWatu",
  "key11": "3BBNchPyySDc1qezDmvXX2josLLrX2kGJ3vwXAZasEHbYdXK1kiazpSMyezSdxELLMJE8HmaXwi1jzUvVutTXKtX",
  "key12": "5cB9vZrDehvuZK2w9ZYezLzFH7jzXcnjWPehjDJcGR11a8VVjsA2ZiqLy3noaqWuVvxm3hrYADpb27JnW3ciUFvq",
  "key13": "5EE7Da2MAP3e11LAQZPeje2kGdfE6zCmTMdneydEKmMk3NKgL28xjiBxULHPhoy58KEqpmyHExGXvn7L3cofEzAW",
  "key14": "5dLtcGwHdqiUpDJKtW6jkZ7tv7WT9uTwEZTT4piDUaQ7gdZTVin76HvmHZf5T46oXSrRh4sftv2vfCLtMK44owVe",
  "key15": "4gohSSbHzKhvytGx7wzGg9tvcoyUwLiSHwoFknxMB3mjSxYfXrUSaN5CsxVQRUn7MmvWBzgAGwEsvVRvone5noSr",
  "key16": "3KE6CroZs2SyujMNPFNWQ3mBbMfAnz6nBHEJ7NarFXNByGHm8wC3L3ETtaneCRoR5BHpKGxRjaQ9XYgYx273SATP",
  "key17": "3MPveCWiLnNddRDs1Ng65MhzXnKpAM1QLdVtpGqw3KQanYKi2bkCoykH82KBbz7QkP7gKkQvN3SeCiiXGmhm8kLW",
  "key18": "65vnvYopd89357T3uG69XywYLZVhUYQQxGt2KUbZjoB2T8Q6J9njt6DvZSiMCUd5YVkc7ALNz3F6ncveSZuTUGeo",
  "key19": "3S5FkByGyeJK5uqkTgXNf2dh8ftpPzaq1Rz63nr8UyZozcwZBTZ8bErM42DRsg21fFbi3YwXgdzSaL8tdvWdqXmK",
  "key20": "4iHFgDdSC5zkCS5i9opAF5rKbAXcBz9HM7gJCdLg12AW8Ay4NKfRWxUGhptCAEsMUoxS7NbpviVtssgAChY79xhs",
  "key21": "4rm1NNB2TGSGQ8tdFHZj1MWQwXS65fM1UTAZ4tNstdC79BERG6sDvJUZYhXm6UqiduMBX6XR1fGbC8H6g7Xjgf8m",
  "key22": "59gQjadozYNGfdWTECn39AbHRrLEGgH5YWNHjiLfjGY1vbnJHi97WLhAJ1ZLmedjgrzdiTC3k8CKJRzfAZgsoMdm",
  "key23": "uUH6Sp4PaRFe1cH5nDrYsjj7mZj1rzmj7d4feJGyMF6Phpa1q9PkqGhQZRAg23DCyAiQbqr7UZFLnqbT8HRpp5E",
  "key24": "2tWZ9Jwht5JH7KbD8uMhybQqKhFAbfPg1GatE5XkoQgNrRPWSQ2jYVYK4gchsm4KoAPeQauWxFnmKzadcN7LDoDQ",
  "key25": "2kfeut4btkRZ7JwRZQwwLqwBoRzdPZd3dQdmZaeZBsRKQSFZa3T6PCneEMEFAVsHHZ1qidKHPeZb2DwGPTngHGfK",
  "key26": "9k3gkDabTTGA1Ph3MJRmcF8r7hNKj2ejgwD2UrzNJKRK9CyBuwesn6GPkNcqzhvbdKiMvv2oKaaAGPbTBUDJxJo",
  "key27": "2TSPWYLy1PKcrgr23CTSVA97qLi1qaYMQKVNd4d7EJC6pTyqBi2DQqx4b8wG1e2N6fXUn3nZg8fYwaXiqXno4a4g",
  "key28": "4ji7xu2VAc7C6LWKNVCnzbL82ZtQeHu7VZD4qaUPUQSxMacx6c8jPoTZMDfVSVBX8YmLH2P5WX6spFcjkax5u29k",
  "key29": "95ZfR2cJGE2NkyCNH3C3Guf2CMbWMMGjjcxTjVtCmk4vKVFhLGTUsMisAa4Y54rewKbxkk9VGXErGqapm28exiY",
  "key30": "5p4R5DbWHWfoiBMQt11SkAY1egZJhy2DTaaEmXKefkpTHzsrs7ea2YdA82UPMm3qc4HcUVKsKnoV9YHyeUxLqHtj",
  "key31": "46TEHqrHBR88QB6TrsDkDMDDWRF6NbTGSnNeGKBEDrFwwHW57n1quBrnj1MJEAN7q1oHjhpEDVHNYS4t5jXVyN3V",
  "key32": "32R3CQNdjyC7mKvZCmg1FyrD477SAWMxnm4JV4LZqnywuteuuSHa2Lp2bhjqiMftFTGaLCtnSoA4pSFCtGTiyrXD",
  "key33": "3f58iHDo2RsLsXSfL7PjcfXUKknpUEVPeR7FPfe8B8AyFJwreU18vhWrGJHHAP3ymbJTsbT6QqX6pAThwdk9RzLe",
  "key34": "4R3MnKYn61WqS4je48p7FsMN7E9pixrSQD3smzxCVt59HZjhM1Qt3XW44T3fa1WDAQ3bHCDyQLMCtXNKVkCmFJ6M",
  "key35": "2ByDpxVqHbGHdYB3NJt165p9oeUmk4Buwow5AngjNHYuyQrfwCcmWFXVejvwu84gFeSD2AxLuafYsZEPmcmQbSro",
  "key36": "2ubs9imtgZ9fjRHLpS96HmQeg9S2qtoprMHPx6wFyy2Z1bRwAvVN6BMawZCneAM4Jo5A3pn54D4drQj2QcvTTLQk",
  "key37": "ZDxyBsYh3J4a6e9pHXhRuonMSZDWhQAMfjpsPJNCZsyqfxZQQxAkwcpSmxqpszr4gJxpS1FTWW34LiqZ1hbodAQ",
  "key38": "4T232QeooT21vGnYiZ2hDRoC1cPirVw8xTNd2QsRHc9pkybEJv2HBhb6Tn9L8mr2ygfTomM2oMUxqzrNxg3Dgqk5"
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
