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
    "5rtCjFh42k8h8DouZU26JTd3Z6G22EpfNpFN23LHwvH8Q47k9fVWhty7mioE9DTPwL9fMEoM9gwP3PzSSQa6DLdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4shVw5oseKgvg3AEA2W3kbtQbdw9yaurnw7PHDBw5MMdkXEcabWHkUH7QSDR1RHMqoTozBQBEXDcCDZ63v1LsPkB",
  "key1": "5A2HrcFaED45kdpVAMC41TuCAyY4pe66JVahtevyBfkMg1A9tEiejLof4YeJpAak1Fe1bUNp1FfM19eMr8J9Ez9J",
  "key2": "4KMd173jHM2R4bgpVMnceE54r3vrgot4EvrVgyxvjRGc1SVhfRUMe4JxfpZ7fF7oHzkCfSQsY5GZ6aebNrVNuoHk",
  "key3": "4gdF4J72BFZJifhMWtuQz2eZcqrqgDPFNUdpjr5ZUaBoQ1QsE8A8ruDc9wCdxjmtoRRDPQmvasNVGujyT9p17Qg4",
  "key4": "363GyLKrgFNxEQxJVrjGLWfw3MuwtQs5xioQYtB1jvmCHxio8uzDGLh7h9257QmFmjPSw5Sq3MbRckCJrKcbmPYQ",
  "key5": "4q9GAaxPLXHsqv2cFrg1vgGnzdZdAizbw16xabFR115qijcvx3foCogzELSav3f6qSMjmeiC6c3euCELDCxxYhwZ",
  "key6": "7pTWNsztUrshqdVGdknSDppULCQKjrD2YUWPTkPBnQhx2PJbpats4vMVAYFNsTgxn7qmsxtR4KwcYpbGMfKHt7b",
  "key7": "4esZ2MxjaJGrfoHhxDozFCddsghxnx34KPEmo3eqDd9zma5cTeo4ssMpu63A9G9N7qNiXzfnEuvsF5GekQShwZzW",
  "key8": "4s4uq9eKnKHTWgHyex45sq8ZRGaSicU6ZCVnpFHkuERQTDjDgzrCoE8MsyFJbZ3WsYAbH6TjsjC8zKufTHJQonJ",
  "key9": "2iNTehocuD3KyxSeAPFFWnHfZFeXSBQZj9tdzzTFEMycbXrrtnza1eNWJuae7DC6Tkd6sFcL6fg4HzYjyUvsTob",
  "key10": "5bRj7FjjMKFKsZMHhWTswYg2d7D8kLG3ygnzs1Twgf5zEP8ZDLTsGtmVmZYJsLPjWkH8o6H43vYZ6jcQmEYs4WyT",
  "key11": "4eWELNtyCA7YgNWUNsUmSTygrp7iizvnyQqRV1XMDZ6UVwSLiLvLDCsgfVwuGH6Z7uf9795rdQdGAWXwMUAZWeYo",
  "key12": "4MHWNn2iYFkC3xNzzX7UF4yBaTX12hKUNSuZssiomQ7nZpaHQsfWApwX4ZktfDq14CcNgUZJPvAVZkpsPNS64dvV",
  "key13": "4A6qUiuyUQRaPmB1ArZkrTLjxhh35NgQKaiiUfCiZKH7xWZeSZHxE3XQJHjn63QSbeUhpUunYowFy9kigGCRLq42",
  "key14": "dmUS75dxttemjyPahtrP9Au1p1PtGjkQbh52bp7pvmkhycZUANjgqwnifzGrAfcd8UmTVMjCaceEivPMBLQDEjd",
  "key15": "2msumurtQBNo9gRGdbyrChmX8aZjmnnbYJGvK3SYas53Y6P9Q5FLiDTAu7b53PyiJPpzxkVpcSFGGhhEdVsmk2i3",
  "key16": "P5jrgjoJbX2xePo89Wi3jovSN8zj2JYQ1JQqHY34tWXUMSNJ8Aum1hu2mrzNctx8nDrQcAqz774NrG7i8HHQoZF",
  "key17": "4Evzc99VrbAtHhnJ1nSUM33sR4ZLoknZUvuYTjYap3VRG9nGfTanqaFMajEc5DpYkXPrebHLi3ym8uvFvRPr6Hp8",
  "key18": "4w24sutrFbmCqx4WFTqMFgUYYQ6SrqLKmwhYDvjfGw2BE28h5LTXk8N6f4nJwEFMdJYuwNr83MCT5w4EDeCzae1V",
  "key19": "4V774JT8t6WY7JxhmRK4a5UyHARaRWtGjuUpzC9ZkQvNbr3T6d4aLp3QckGLh5XWTges958AZN5wc6794PUVvpYq",
  "key20": "2u3H4r7EbjgtKn6d4btt6PHm5NCMDHyaDs9FS3CYSwEFz55ia8HDiP8AqPaHfDXG8TVQmccT7zvBZtnKA9kRvtU2",
  "key21": "2yUsdVRLDiYwhndcer34Fii9scq7yVtkCXFH8fA3w1yky5LJ5mmuGxCshT6xGb6LY3F9BNjZjhGMeToE93ZWoDjD",
  "key22": "C839gA5DsfFQkACdquP8Qyo38hEbeQfiv5mZYkrDp8zHPnnPshP635bcvtZXXMkPww3rrrGs7jmEK2YjEVDaQzZ",
  "key23": "42WNQi5jtg9CSp54CbEfDkGJncT4gepJZZebcW2CkGmJqheTEmnyojG6DEhFhVmPqCH4gS92TsHjYG82DXkfgosL",
  "key24": "289LnuSjUq2PPL76RgRLUTt7nD8c3xhexCwLuCpQGsbMb63DUTqXTZ3uDMu1zo7homWwjDitqAgCuZ9zJk6v6dLt",
  "key25": "4zyEnPcbcarga2jSycki7wzzKT4b2bdrH7sPbe1z8YMaKSfkzzGRceMGRdN7nFt3SiLRvHucduVTayzn2e8UXXv5",
  "key26": "5rp67CZ1EPG2c5M39kSHkBBdhvTkjwg2uw66b4AKQ9A5JgmcD6DTGVp2RbfqVerqjWYmLuQqcu7szoc2fUx66MY4",
  "key27": "4cPQvVaCmiDMEykAY7ZGzbt7bxThyAaMwnMGZPYHgoeX3P6WbyXaFZLLVdtbgdLvotwTNDUGdzZqkiATZYp8mz6A",
  "key28": "GFz1WMG1sV6AXnenuFAtjPDu2hKXGQ4rmxHEwiBYwjQFqXZQRDjg8saSzYD4fBYmbBVSPHhL541gcGmezChe6Qa",
  "key29": "3xccUdTzZ1ybc6HTvfBYsTuTE5D6criQiCAL3sDHmPuKomjXjGJYEWLhPyZunv3apr8uXESMndhRjYLtL2sZt2AF",
  "key30": "5M1dQe4KtKEP3fhnf7gwN5rZCEpfY893xNyHQre7MPW36cEpPWG6cjbDbba9xJ3n82RFEmhMmZN7x3bFWSbdC3Mh"
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
