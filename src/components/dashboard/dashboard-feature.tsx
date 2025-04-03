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
    "3X7BB39YXDSJC828yoCQWGJegJabA4acz7GJyRyF3J1QxTe1tmbzkgQs2yT6QQRAAu2Q4xGzct6XqdCyKmfdxF1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DX4az6yTRQBwyYwTTnzSNG8VgEF5b67D3Gu3mSpHbMTkEsmsHxijPug66JmB8jdUDmPVfMbnacSqhoEUP3Z3RaH",
  "key1": "5oz5jGgmc2ozNpF6NxJgNNvaEhpazKvy43pine3dywKmsYAtnejNvYDyEBcyRZciTYCC7jo6XjjWP1wCWi8RzUpU",
  "key2": "3AkVFREk4VEp2w9hStmA1GZsiHtphSKtTTz57tgdGbVrafSAbpCkaT1Pisr3fUQWszomkvypxKQCAkeNeEfEEnAr",
  "key3": "4K1gKA9ej4DEpzKyqB1UPc5nX9iDfgGyRzYzx83jPQFpezJ7bfgBQgQjA3q2Rki1EYGmxSLB7VgUcmjVz2NBSoTq",
  "key4": "4kGrFkxpNdsyo6zdQwYW7KrrQ9zR8NRuMVMZqQRGjcyMWiUt3Thi3oC1cWv9FUsStvx4tkAihfpMwXwUxj8Vsk8L",
  "key5": "22pdMF1dXTVCjWfyaTUqUVDNtH4bs7DKDbJj6wsd1BcCBkHnFMmf71SHFGG6GZ5uDwDdpkSaEVPNyoTiLuGyNnBk",
  "key6": "NYhvRXNvwa7VnT2hDthVga3BtUK5P8S49Y4mSvFc9QXs4AWVxPVSh6PJBvK6dQU92yuvYhuhFKqTSNZ3seKadV1",
  "key7": "3rFEkgXR8bo3o4Nfn4ANxZPMnaanV4XyEqdF7jU26qMFHhfyKD8s8u9WmPZBmvtc7MsMhVtV5y8rqkhaq83hYv5a",
  "key8": "2mKFECuTzxUUAf3EfU1CdcFprTRryz4vxgcF8HyLGF7hxTb5dRQxb9S8g7amfz5rew38SBYvCWQhrYoZL3McfY4J",
  "key9": "a34tGGMEub1MWPaZZ11UPiPyBSdwcGZiEFEXBRjwJhZ82FVMguechDaV7LcGcN77GsSs6nvet2NV1AnrAqxmyuY",
  "key10": "46z3A4F7ZBxnMV4m2JUYKzq8yriiLz9sxNVW6LtFZrDzwJ8Jjk8K2sjLtDHdk2bzWzdMExGQJkgMZesp8jQx7voj",
  "key11": "5Djuf5HARqWpjd66BLFUTaYaXCCNMoowDZHSvxDb2XuuUV5V65ZDP5t7riurHg1Cb3mdGUUVsiFoUvrzkCNg2gzy",
  "key12": "48UPePnn8XbnBrra6gUBCMmV149cLWAofBWcYCdNZ49icmNnXaiCbDVWiGFnSnJqn421NFHnZj6j4JYP5gheaqkZ",
  "key13": "6HtuwEzWJnuYHR9r4GNvs25cV8A3rqArbeQ8KyEZiT4J2E789Cm1s413CrAYzvK73gWVUhz241RM5KqiaEMNey5",
  "key14": "3mRV7z9qjDUKxWzGGmVuXcj5h895j81oGL64HLXfYu1rAxYA3nNXdStgmnKwE6WGk9YNjDkrWaqLHvXyxkjMENdB",
  "key15": "vnjwRP2ApA3AQJNyfsXJGweSa4RfSuXYGxjFfLoCFiHLMUHK21bUSFXma8mNv99FZeHUSnqne5BLg7FWsjLtc2M",
  "key16": "p7YoJtzgKJ3MyWawZmf27tbXUro3URJc7opTQZnho274bdZMqb256g7Ga3BZsq9oPd1XFrb9LVJpRPpbQSpPRyB",
  "key17": "47xnAccMscAyCjiBwMrRyEvYtaui4b2qfDcoaNRP2fGYLDaKNiY4wz15zvV37VSgR85psXpbVegdqoSVnN15FnRs",
  "key18": "2fnEF6vmZz6g1F7mFwE46Auac9KGnrT68e1aoNsvMani3BGCYWDp3AwbRNiKd3yYPM8QQfPryH2qEUKMQgTNSrC3",
  "key19": "3UPf4QZXGj75Pu7dHNAqptDd3MhX6d59zU6WyLSVyHah1NwVa2j55rKLfsujYxDxNnACkQK1D1BUq5qahH2QhtvN",
  "key20": "3RjeeUpdmWEqfmLcBPGbzKE6uFpg1aZWQPU1uCQmQsb35jwHBziAyzAquzAjfX24Tx2ad5G1KWbQKUZWMT9m5eHr",
  "key21": "4Z146PUTzYU6dfZWdVd1Kc5Dfnry9ZKsJTShMNqLj9f2FQ8GRhXAqjp6hn11kvBGm3KDkfSgr8foqkh3M1wBb9iy",
  "key22": "4nTbM73H1HbXYEJ2xkpQLiR31uuBW7udQBbihoU4EVThXPNX5ihPtj5Umd15px56ciGkeSZVD5NPiy2TKJb8VFCK",
  "key23": "4CrUhck4cRhjbEVD8SHJvhsakvG1B6vNnKs7QB5v82WB5wn4UF3oA9ZLmv7HnXMFF1NnnQbNNf383A5cwuw4W2ep",
  "key24": "918G5LUrVpzpR4cH81VDiKpzYoZk7KbVWmbxsetsDM3AQCt4jCeXdE6G2RPtLJhud2VLn5QQEcUKbMS2HiSf3gY",
  "key25": "hZxHRsqszGD3VCuj6nnvacFHkbohJMusgonSQmaw9f48NhUS9ajaT2AQyCdqD6ds2jAV4egwaY8Ut3XqdYwJ7fW",
  "key26": "2WS8HtGQc2PVhLG11KZmYbuzweYLevsk3RvzGXujn2Vhk1mQF9bt9EpnPkhxXzpKnFnKCPdBY4PMShLQLHqT8e5Y",
  "key27": "4JstvGGok3MhXTwaMWD2iFQdU27NzPyWYYRAc83VK4nKaXz421AGwHRksbeh4URmHazuqHAWrJnAFesxxvvZ3PZW",
  "key28": "M6dkjSS7C4Skviji1NAHEoNFHvtiH3UiqWcCLe7TscV4vc74n2zQ4kLvZ5ussK96fBYLsEjTyKfA7FeD9iVpPiG",
  "key29": "47PKuAeygvjqexNTqKKbrxDzV9B7JFRXV3eTgPFGjs4BQkf1iZv4vGmbAy8qLznQGEhmHFXmfVeBaqUjsnyzWtH7"
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
