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
    "67NnEJp8LZYVVtny3kDbLcHjMpNFEV1fwF9HKCyod7RkHx3oYdHULnCcrHxjSaSy5kLf9mMEC2pXV2v9AuWvP9t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rrNEwvPB35cVMprcqeaurgPuV5Yt8Rqn6ybpJiPyxftWqQcz1FVFrBmqFuTGb5ofmMaWnaDoBUpjnGJd4bGQSYj",
  "key1": "V9emEbN9XyLK6fYVRsm6pH8ENzWM8t2KNg5ACwbc6rA3Rk1decY4m8TVUjDVh4ygdq5Zwo8boEbn2QzPBK6CqmM",
  "key2": "XQZ5QNmucFM8VWtDdxbAQJ747QHexWTu2xSp5JkrG7zJGKGUh7Ey9EYZBqMQmp6Lbx4CpQLfYwgZmTjMZN7Ywac",
  "key3": "2DuzfXvNPPhe2x1Pck7XMkb71HiCv9enkdq6KtLMRvZKnp2SbmqU6prQxk6EXkeJSCXvVgYAZvoLkzdxiuZjjanh",
  "key4": "2RthDx9V7RKEpamodgJXhUgPGEJyiQkcRjXNh3mTMvSNPPxq9bnRsq1oh72XBRmoVypPtJL7FHgj5uJTsEDfyihd",
  "key5": "4Jm6zrsjQiQZxumGTcCiUTNC2AV7U2W1KBDP2x5LjJX73jQHEQoVBK2FYuHXb4bzrUv1cwgG5tbmTz8roERK6EUi",
  "key6": "27Q8fyabd1oR3NBnVqxAVxZtj5FFx58Cz6UQVaSYs3ULqWxEuxfAaNhaEfcvvXtszYGSatH9LNpR4JzVtY54z7U9",
  "key7": "s6tPmAkvQqCiNT9J82jnUnKCdFTjJRSK1fiZ4XDJtqBLP5Voycq3ViZDrY89czFg6zUeXALDcWsqCrtXrWV3GRu",
  "key8": "34zcGePjy9wWWDHtvvSxNBS3xFKVWMQeEJ6wbSfTKrbRL44kwj7vi7yFKfo1Vt5RoW2KCFhp9X3bc4QG3hU6S6b9",
  "key9": "3bWbCqWa3Qpq4FDHgkDC1gmuFZhVEaWeEhFnKLay5WQHPqqEoQdApkjxSTdYfEopBRKQjqcAQN5aWywp8Xbt8Bnk",
  "key10": "5sRyyQwZrdKVMZ79XL2rkvZhzZYocQ8SzAAMw9t5oN3Q1SkVXmG9Xt7GsEZ5Sad3tbGYpSG1hMespYTf2bDTtVpG",
  "key11": "64rfVZsvtT3UHNWunbsyhZYE2TodhRV9CBPWcE6vzC8wa35JWMxviVD5un9Dne7zS1y7wakryd7AHiir6prN3MeX",
  "key12": "4HUbZQW4ZFiVKsS4FVnX3PxR1UZxTcj6EGH7jfUtkyZ8MtUNZsxpkhpd6yubq6oPQBNdtUNZiT4iQ6JfK2ARrvkD",
  "key13": "28H45i9bqr7RVfiqQkeuPg8rfFEzTW7dDvgXmzA1zb2D2jvP37r3dqnw6vwgB3j6x18ouFNEZ3YH9CQzQGtbLfxS",
  "key14": "3aH2RNY4h7Ciu52f5Aou2DHcjpP1vozTZDSoN3ESgPm4nzfEtkuyW2u5vtqh418fGbLY7uALkqHsFMX8dnhi8AEs",
  "key15": "26VcyrurUWLo62XKUzN7RsaRGz6pJfkF5VEqEWd8MuZiJjEcyAPWsGD6BigtKt6psgh8fE9UQpd5q9S4DovwNwP2",
  "key16": "4udHzY52eBRjpt1kqy9onuBsFMXRHSt2UxQ7y6EAdzEe7w5Ndwh5XvYZ7u1TW2eBoU6SVyKHNUHXeGLb5zF1hXVq",
  "key17": "BHH3zyTky4YhxvN8iSYn4n5r7Yom5ffQ1NyGJNvASfnmRpb5tgXcZTzyBf7nPB4fFB4jvPFN8hksEXX9TjSKdTN",
  "key18": "64TpMTpa5KdgUk39XRFixK4KJhoRq9aTfzYCi8DRPZgJRpaJ7Hf9p1mrJ96p7hQCBLKMoJW8PWCdMHLFEzuQT37a",
  "key19": "3k9qn6i8gXsmm6GLsEvAc1CKAhTLvd6tPAahZpBAVFYutYMJwgdbHXSnUyc5sznN5eZqkqVWFh8K7ZYyXqFegHvH",
  "key20": "4NdWJToTkCytdoKZzN29b8BTNsSaUgXCA6o6kK3fji2a5Q3BLAE22ZPe8Tui2qPMtaomMp1C7qqtV4XZW3mdmSzG",
  "key21": "hzT42WAuAnSdR92NGNjTm8LTZR46nzYeq9P9BvDmEpPoGdyt5b1uiZDmpoDdGtwSkq2cojEGG1uMJ8ef6khcuJH",
  "key22": "3M7bGLHFLx8kE44UxXNprjth8SYvHHhu5ZeGXKTJtgdysJ4V8hDZyfG3wLdeLo41XYhoP2ysqx8DvpXJUfy39bkE",
  "key23": "44u6q8BuegMnaBVbYyxpcLfBWoeKCHN5y7WzSURzkLaubRSWJ2X1N9uBnaKYBDDwcfhXnFHdcR7QX3SBSpaYXoYw",
  "key24": "37tUdyohthD4rnBy3ADmM3GEa1H3XeULbMqeA1NjWhJW8jjXfeudb6mzaZSNH4mGc8Afma39zU8RtxLo73rixq6W"
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
