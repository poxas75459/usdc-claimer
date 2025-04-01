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
    "MYbMY3rw17Lq8QcJEqkXe53AECUeHfEjbBQvhSpwQ4QYAUNsc9o31ipYWd42qcAa38SYRQtgoDhd4bboxupQKz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KyakpSCMKdHSbN9RigngtKfa5rQuTi79vZVcr8sois7ewiXrTJf38HVxyNrFGuoj5RYwUiYDzhHNEgZ7FampbVz",
  "key1": "3Q8isQTz3jiYCsRrECF8hwidmcbdiWrgDhKSBit6UqbZZbxbKpoqtvBzfD8pU7kbuv11PXLf1urKAua2z8A1tjd4",
  "key2": "fEAxmNrkA6LuZTerTr6mTxyr6owYBX4AnUxjghaBD6E4PcRqJzWcCob9MWDcZpCBW2oCiMaRen2yLjazHWDKFJX",
  "key3": "4Tu8bYS24K5WNcZ7v8UzGpTjAyBUSvJ4ukV4M1H6vsJtE3fEDSAXLgFqjuWmjr5VCRwNDFPjXvy9uUsdG47U6Maf",
  "key4": "4jAEko1KZ6GsNQw48km86d6fBGFWzuMNTMNGfM1dstw1nkoBxS3oW6jW4cVvKyDqBTEDP9xZVRXCWBq3GWgz341a",
  "key5": "4vuaDu63dSTU2ZaofoCV4wWvsR72g5a3SjoXsWNv4VcQTMREMM7XQNF2wH2w3bvDtJWpFg5npDqSTNFUEzLQjthR",
  "key6": "5drMCHHhKNdCF1HBUnrMYdVhe1a8TXTkp9WowhXCqgPrT4XJ3o43GX58eYHSWpAFm3PVoGofSW7Pt6anCYbjhg1x",
  "key7": "4SvofaCtbjMPWG31uioTBvQmikvyeVufXuad4sMBFAamCPoMHWroGgLYcywk2T4B7NjbV99wdsYb1H8mvDqBS7qQ",
  "key8": "RLoo4sXSTJPmUfwjySTx15woobCFoKEzAEhZCrB23AFLQPzXdZ4S7KgqspFmcKaiaZd6M5UCKoc3zMNQoWd33LZ",
  "key9": "3X2JanjNYcsHz8yWJXLVkP3hsFunydgagkfgELmJDm17zBsYMX5QevA6jSGRFL6xPNXX8NYPoZPCUT4oHzaiFkuF",
  "key10": "53hJaBYWK5j2HHFShcWJDCpTu8vPHLcYCenUyDhJNSEgyHPZJ63PScjgSEmZMazgc7Sv2xBGocaZQFLo5PZgmQC8",
  "key11": "33FvhrvhxZe3Bk8CzCaA5xh6BKCS84v3Q5rHe3eWJsiH5X7k9taSLgjQqjAEzRYgSCoNgVRAapDAh2Ru1c49BjaX",
  "key12": "2vt8faNc878XUpeLNwqqqLQ7yUfAAWd64tAPqz6YZJNGDR2tZpe9zRN4cCtZHsCcYSQDrk6TxCZDxs5sSfWfn9EY",
  "key13": "4R9aE4vHM6rSezuSZedo4zaXVaTNjh3yK3g9ERnYJo8aqKYiAxRTT8tCdDRYpwizAzkEXpcWCYEJYDvHf1XVt1eE",
  "key14": "2ipeWtq57vZVZ86RxuHVzNte3CQSZ5tHiqZ4zLzyXQZ5C4kqckfN9uHQcJTvXgC6eyX2w8rdNo2esX1PMC3YZPWV",
  "key15": "4d4CoDRTD5Ftdh5DBX67fQkqpSAwWCT2FnTkqY4b55G5Ch4wJGMfTPEY3mpJtKmKNU2CDLYkwUDeB3zov3Q261kY",
  "key16": "3W1ejkikyCdsD7cBPUy1JtuCKE65UFW1Kp6fu617PXBCJhqdKuxZMfC2noEgXgCnqXsJML8T5VQJaNTgxyrKYkxM",
  "key17": "mhFDQvMUR4Rg6QXsyXGHJAoBSjtcjH8Ypi1uQytY7cqou1wTve3UqiqngnfyBgVufx1hYAmMfTmyNjthKFdzuNe",
  "key18": "2VKxTdacyqihqkGHv79zwzfpZqBR3tLDfXTALb3qK9kPSh4ZNRjQ21mDq8CjCvQkhE7y2keMA9E8jMwGF6ui2YD9",
  "key19": "2eQqCfnjvkUJ3fPzyu1m8A4pHGhvksyJ2dwtJeGiYKuhWCfvjoNE3SYL5TBSw9iMyN4GKCiTc6NHRt6bUWGw2Hgs",
  "key20": "5FfkfXDm2jxfM9rKD4ZTCNDxGdMVoD6sLaBDSAGpUJk2SB9Wneq34v7gX5Aqe544K2EZUr65ngARWaP9rGKsPjcP",
  "key21": "4E8EJD7DVZVLm8h99bvqb68yXm6P7vh9J6VoWmfExfqM9BvoAoBpU7y4BfyWVjLiafDCBEFLRrDWzqsv7sfo9Cgb",
  "key22": "67nibU2kGhWCxooPdtkisurbYhbd3w7csDsJiirBS8jDzC61XYYVSW8sFxe5jjfkeZG1mxg6MTeKFC8pSkBe2aiT",
  "key23": "4thz4Ld7mwWRcUQtM2EKPnDw7bwVYLWJW3Ke1Pnt1hK6igju9pt3UzjuhJwS3577BxzDMmSu3cfSCvVRmSSdruFz",
  "key24": "3WnBTHjpoB1ktfvZ612KnPRubvmyzBdguKjzFXgnZbgLwxbWyGGNFndQY1pmhAsxAE4dyUxRwvMWgz9hNMauSU9o",
  "key25": "5B76UrW7Jp56hHmpZ2wQ7REFaBfZameRrZUM6JAXL9UsiCbSyv8tfrKgLDomPuuuHtSJyismwkFwrst6EF4hzjhS",
  "key26": "42a5iyJFgdSyMxDPQz3URmAqrsts4Bx3ctbp1tboQxt7DZSTJx1hb297aR4EDpKA6EZiNsD9ZJNb4crNnx4fz3LP",
  "key27": "37jPajxZrRJKGPms5PrFtVQuhCYxfVUcnCVPB1ZrryRvw6LD8XK2aS21rvVPUgHtoKEgkaZ1JGxvAadamZk5YU3H",
  "key28": "4ZgmerLFuR8AJHj8E8x81Zfx9GVzx4474Yo9cJ3FuuNXgjw7QVBpjajG2JqVFzxRj2RpV1gYBseucsdDa66U2W9Y",
  "key29": "3srZVAYuwqJ6sL3VbnhgVFwZqS5YNjXyLvXSSWJQY4tC47nXN7JjKLtcZGn2gKnM6KUnemYMCqyv3NPZcgQwt4KH",
  "key30": "5NzrmEuRwvvpZDFoAX1EhiBuPwGXJbX7hKbRqrHJFtvT8qSszB68uEhxx9YSR2YyMHYTyRE74JoNJAAsQ27xTYpt",
  "key31": "4w9hdyt8hD6HYq8HpahEPpLKw4R3V7ngKZcLXBwCV32eNWnmUWNBwMTPErDmK276kq5Rd5gZobH3J8CmVabTTadB",
  "key32": "5JvgofXWVqvJrFgvjM6kjbQXv1LDgq9sLhg2Powyii2fQtb9mneH3tE3LurtaZfgKvSs64Aa32sYfsRWmGxjH7dg"
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
