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
    "AC2Ft8zBP73CiM57BnYVa5xwNiPpc9wgHJRqQn9mb8vrCkctvyW6oFgNBn2vBfhbBRprddRZUgLW6HKwWQuhZQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyVQtmgGZun45MD2VBe9fq4cmrANXaugvADRgAvAnEwehVCZmatSsfuoF7ahWmBBHVptrecgXxjvgFDDjhcQshs",
  "key1": "527gTiVhE2zaauAnstWeiBoLWck4FWHVrAM5CTWBkFn4gGewT84oesDSbqKoHMKpRwKBG8ouQUn88XadJepnx5da",
  "key2": "2NMhD7VvA7xN94UKsN4WYR6ejDDLqJXNG2uG9uU7Ws5QLhpmtA9dAWevjQpMw1tdsDYZYLiCHsqfm4rj6vPEX3XG",
  "key3": "3Q6Z9ePJ6vTirkC4m6hyxXorsp25JGUu6Y7BM5FrMuFKVEj8Ym8nQygPam2EfsEuVGEC8AWatpCAWvKRjEiMcv6p",
  "key4": "2JmHtL2KEtkoX1cu5euH394Y6BVtCzHbhhqUqHjqcxFDL3SdxUpe7AwXdujHtN1Y1ZBfzJwSsuEf3zj7tdPWAhth",
  "key5": "2b9Anvd2SkCHSoBCdF45ki4aNYB4YM4hJwmWKQEe9HZtomWkwqmqh9dYdwUqFLqwX59yZFqShVwDYKuLsTujodUS",
  "key6": "2gnvSjkJ72GbHcjvFQvXvtiZ62XX3eAaLKyeMjFrahGFrvxXxUH4ssFmRdPChZ6XihmFwyweANojwZUbYU6LqbF7",
  "key7": "2mkQp19DVkyDpyTM2HFThA2mLjPh2wLPH1CyTE62XGs2ef61x69nFNy5HqsdRexCYwzayeQTNWdxYgB3r2GPoUtU",
  "key8": "3weKT6cHoAtRXGnS9NZfb7C7DJHQb8cDUqZjywtnrtEX7xwNebvGQo46Kq2XisUT2ktMi54GymdAVJBPbiuMFsEd",
  "key9": "4eThHx99VTJTc3DUjDWEjiyLDcNbhbxb4c3xgizScuQVLt6icchhV5cNq8zgpyZqgXG2ktrnvBBMcPFRfmLsraua",
  "key10": "2HrJ7uobBMx2ZMhbtGpDHWfA6amYTqFzRGd7GbUxjXLW4AzzQhDcPRTEMhPUbVsNbjwmLjLwV2VUqhPWNVZkJNMh",
  "key11": "47sQ7iVee6PzWSQZhPPZNYFvjN4RquDjMWUSkbzH4rDwtCwgyHc1aKCMas29mLogELDCjWgqsjhz2WRnxb1Agno4",
  "key12": "5HwKegKzJ8TgxGNGiq7wu6w7EgXS3gx2bGQoqyajnU5jRSXPdmTivp66AhKmRHPBBqA79t5JRpybh2drvrcW66nR",
  "key13": "4e9Eyn48iwvHMT48kZtjEmAkbVuUvnDTq3AqrZBijc52ErP4QiDK3WvCU7BPGTpQ9i5TFHeM3gBXsoaCPcq6mpyG",
  "key14": "hmUbuQQtknrjuEAMZEUy1krs3T42DG6XkTYK3KPr5UN6eJfm7z28hAoshyPuFE8FXnHUth4jkCtbCf291w4Emrt",
  "key15": "5RFVwHMAFCBWLghK7G6HEbs4bYbDhJN7JiZnaLyhZ6Dx6XqTrcNnwUUdND6tPaAhcWMnAYYaCPJuZpZ5v8B8JYQa",
  "key16": "2fLPUyb6L6iwehgRZWjXn9orct7qmDfeh365vn4xQwiBVAfdZkZhFw7n1CiERK45pNiFVs5trcJzp2oMi5EQmhDA",
  "key17": "4Qjmbg8Hqv7rWM4ta6x9xCtj481GGSAEbTFi6irTSkursrKX8Ru9qvmLVqA6BkhKxaVk3VeUU1dK8LUxGTDWGAhi",
  "key18": "5QdLtfL9hoZeA7EaEbwMumXo2wbpbSU3ctmuvtJRe6XhUyZtJVFpV7bDiPGHKKoah4C3oETYsWarM3zoq6Ey5EVj",
  "key19": "2fJWcTiRbesSVPtKwoSUyJgLJceLopqwpqUTHV94Xq3AxJE8jN9KHhvwWYjkFuf5RDMGdQ6PLQqNZGHgMjkKEEdV",
  "key20": "2W5M6xwVmsF2yRGoGM4URAbaowYnqqd7SZp26yhAq3bjQZSYfUYozdFeLBK4gBNYP77RkayYLzXZeu9b8zCJhYj4",
  "key21": "5R9q5FbbgGVr1wPvD4M5WZpoWnQAQPjCxGYfXdR9VWBEpdwfVFPifz9KUArkGDbohjakLFsmMYb57s1MAVV4UwXt",
  "key22": "5kWUgP3W7Pu4djNPzAnkMfgZiQSkNjjGXJacyS2T1S8GybVuJig1dP1fWAC2A7BazT5M3ccMXwkVQ7oPuaEAa4uQ",
  "key23": "2S9suZ6hmtkZRzJhPJ1qEUca6BniRJJukyea81F3U6Qt8HuZ7SbTQnA1ey4Tpkci8vDA7jPis86xHaPmuLwLH7bF",
  "key24": "JUg7YhyfhanRXMf7oH4TwLFMPJbWDKTSgKh91ie3qsYqxN41a81vqHyh17QVqZUgXCofZ22JQrQ1nx3ndEotWWV",
  "key25": "4aPxGzMCzek3iWHgYK6KQYkFQELTDg5vY41vk8QfGdkmcsibwquu4gr7Bdp3a5tGg3boBB7qFJ8KXbs8eJttPz7L",
  "key26": "24cqDoibbqnwkwWTq9aqtjr1cc4Ww7QtjS9UqhbUXotksxpJeZJdZiFXAao4KvD38iyaypWTHEPwtf1uwZ2oE9dt",
  "key27": "2tfP3opbdesJYvcKUVY3bExvhGLjvBPCnBDYyNLiwky2eq6dxtqSuxVaBSCnj5D1wc6bHFTkFuvWCQFmAhy8kXWd",
  "key28": "4PK7FP5ePg4P3gE9f9iZgPThTFdCE8ygS9BPLr1zuFVWSkKVnoyxnCiccu2Uqzb2vzoTokbUcRMK7wRUHMNu9rLP",
  "key29": "2rCzJApXMCr1ayXLDC2kUaUgMsv53LKBmkkd8Sq1LMy9MP3HNS4FMrjuaoJdb9ycdv1k8vauF9PnXentA4tYRLaE",
  "key30": "3h3n2AGBA2rP5X56Vq72N1bcZVHt7TuHj9aqqA2h2qxbQHFNQFofCKHTx5p9EwFCT4Xzbg2fWsmDRhfygARJn6Su"
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
