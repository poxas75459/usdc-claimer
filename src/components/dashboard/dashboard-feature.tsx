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
    "4NTFkr2hwQLNTRWaSwVLgHFF5kc2f3KqycWtD1jaZnwfjSY5tSieZTHeiwCdCLSgQCJGBdZqCNjzhjdQbuVLLNPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ykr44PmKTm7Bo88MfFsn5vLHor6jj14924AQ2NEVq8R3tByjMokfC4577WuAiC9tYB86oXeKX5tsXXFucVULZf",
  "key1": "4pZzZiUh8dQgeAYWAKtMugzQSQMLrA8kYDyuNWjiETqmiLwrf7eNj45wByKYmeGHd9AJaSHtDMLjaMgFBikatQ4W",
  "key2": "3D1HnxeCMLvAwTB5BB2ysHhuzywmCPve8yo36bjo7noJfM8DhTdQ3Bi5RABbmsKFmdQQzPcYJmkDe5HV8mb4RCew",
  "key3": "2YaELzfUp9nFdzLBZ8m1ZDeh74xJu3vN4b5S99DmncuzitDYLMhspDqEBg7So6KdAHh2hsAHeuzPB2unoWN8QEwA",
  "key4": "ygLAqywj6nppWkaJkQSCAT9htpuMDwHadPwJyCbWz7qgepQ44We2rDd8CezCYXG4ajuJbhxgspzH4g8DvZJkBSN",
  "key5": "2Phx6HoYa5avik5DyL7yGXLVg9Snsx7GAFu3CU6WHAomYEESjWjqWmBqwnbmqoUdAQ8N4Hkj14orGvoupU23bJxV",
  "key6": "qEEcGgF5gHzVEzKPzyrwvQ3ZuGhPKSVCuvaHYfuiDQHVQdgLNzNvZwym692XWsRTzCvMZqnq4eyWhFxKt6WXgBo",
  "key7": "4QrGHTY38HS1T7ybejksz1GC2Q3bU7medPFZtjv8YLVtVi8WhUsz4kTVsXdSxXjpTwLSJz4qqhCMmFinoAjMo5Ld",
  "key8": "4s7Q2DUSsoXoFmPgZSxLouMgH57h1LXEYf22wuuGXi6UvJMH5mkmrVj8wHZthRHbmaiHHyjcvUiPuEnMcAqbscsW",
  "key9": "4yjvCmMfQ2RsFcdEE3sSJrWdY5hjKNnfsSWMHEcYp3q6VCvdVfw3jP7CXsfVqXryV6E8eaD425eUKw1ygdHhUbKE",
  "key10": "5wxh1ECKKA5ZHSm5e9JRabN1S6u1qKNRrWXuoxjdHtK7RvnoqQBXVxaxJAPMcz8n9T7Nh3bHfA12HuHSdNHUw5XP",
  "key11": "3kZRXRMBQk1qbPrEcf4kcDPRHUB6buCuRA9ygXyBinvfhQmesiCN1KXUUh35JnDfGZnVVCYHLUchdmWVPT5Lm8CZ",
  "key12": "p2tuL9HxeLbH4r7QqSprMARnicHj9Zf7QhmRcpMek9J3TtTrZ9UydeVNJNeMjBWqqEhnZGAFV35TdH7fJjwUbJK",
  "key13": "5Bh95kktDDuwYbnx4Zyq1tezrdjH5vgG59JAFyUpvJP28cBScNAGTFN82Na8T4G2QzL5rvCmUb14eyxm7MUttBBx",
  "key14": "nykK8p65PZ7Jx6cxJwZdV5fNY85ZJLx7V94pdHbkD22W9nGzWankuxkwkpzYZ8opdY4MayV8dAZMCGac1aVZznz",
  "key15": "4ku88qbEdPmWh6PqJHUrsJnd9Qmvxudn59VUWueQokdU9SWSR9ijCuQV9C3hsw7mP1TBCVFPPrYyJ7dXnCwzfZcK",
  "key16": "5stpKkGcDZuWp8J5mrWPfHX4XJy22WdkTc7jH2aSe7HG4QjUKAJbQzjKRAcAr4M2zvt2rWibY8s1ogzPFubRaZvR",
  "key17": "T3nRxxHNgeDgPTviJTnEEvhdrY7aureFYmGoSM2dB31WK8DmyhZT6eAGxoLQKXLNwgiGyBpYwW2XuTdZMahuVzY",
  "key18": "edmTtxBq9y7hRw6L5u4TmciTMKnby7W1yUEs46Upy8BCr1YpUDVFLCLGk4etHrkNg6DTqAGWQoWL7hPBP7sFLCc",
  "key19": "gW3fBMiMHStiwcgoMHUnAcaBFKjorkbcgpMgzm33gsHMo8VdX9agPbcy7XaQ5x9TTBxjnazUZaKYhcugPyQzp1P",
  "key20": "4KvfFehqeYo3fs6MfwDs4yTbid4gJZG2iwLbrNGsQtMctSeP6TqP6wMr34wk8ZxxRjwYtJuPEf7hn7KRWuFXD3S",
  "key21": "4o2NLfGcMX9hPEuxCgKK3GkqE1MQ45UW2VJsTcdNFMrjkg4j3QSFp2c1W2sU2LzarTTF25xBUcwt4F9GGMYjbqdF",
  "key22": "5uYGB6zQFCjpiVDxk78eXEbT9h5bjdfnsM9teSfaAjawu8a7M9cMTNAfVWUz3feoEcFuyfH79mRaUkPgAUJy4Wq4",
  "key23": "3iJuLzrXsdGdhoXVkdpCuPKprjadpJMoeyoybKqxaeiXN2VW96KyEx8kNNzup2iPYy3yn8imbyRdrswbS777BEvK",
  "key24": "3h5gs2beFZtD1RFxeZsrSQCcERdeXYUqqYS9zwBjaWD4ouWE7v4UiHNof5NVJ1MQ2yFKtNWFkJSwznnp5ARQZgXm",
  "key25": "5EEfF5bzHRATqbuNjMfk3iJLMpoCtDdmjPPY79RDS6a5WkxkSw3mYkTkMh7Zkb8frXCivY6tmgg7tZzMQNb3frxm",
  "key26": "2hGtCwGvt2yKCiygJnvtvKLzrExNxX5is7kygKTiyoikcvhvR7jZDzefm5QbdB7PphsfuNFDtn2mtzV3FUzSeQjN",
  "key27": "Sv6CMes1Sbs2B4qLW3hbv9wzAPydUMamtmFSfQEYd1wbXYBSZC9f4ZRmHxxp2y2hgaAKr4sTUY998hN6ng6s1hP",
  "key28": "2aiNVRKEPANe7ncUnb7Ke642xjiWeFJuxERhRFBicJqdiCDggnBXJQbb5Ce278AQzRyMYAnoJrg3inQF36A7QtdM",
  "key29": "2QMh61ngH9wdQmEP5v9c4wLwuzyFMyVbHVk8PLwGD1WVNmpS5NRbPRGuxgExo6hypGB48y5xV1Fm6crZyeV75dmw",
  "key30": "3P28CB52RtEwKYXiPwZznzTZuUZXxNv6R2zvcFBVCVJ99wUkB5pJMGK9Lywh55juFZtzfNPdfTKa3LyDTQd3AWER",
  "key31": "4hC9HC8jnnCdB7f6Zg1HVuK7CfAZwHzG72AiQMnsM3FPq2JHK5z4VxR4H7NojQpsfMAuYELci66vcSkCUqWpCuDG",
  "key32": "3RZzMNNu6dDRrEKBWbEUmcuy6hdnUC87P9db4MeaHqJb6oiQj2uB3WDQo3uK3cj1hThBVCcuadkKcgmTBepGHN4u",
  "key33": "4jrYkrfxc1e8Wc7Qfb7n5ooox9CWG4jqPaG7VB7rz8WWV3PxBJttzuuV8ytbnYtX6cCSUdBrBhFrYvMuLDZ3SFVW",
  "key34": "5KvzLxuabDdZnxoLYoZXBuHHPkcfrBcHtqvTZZS35N4pZP9EJ1xFYiwmWt8UrhSeGDqLFXzpUHkXJnZyUBxBs62a",
  "key35": "zqtbbioCX5JoUoA1Gm4TGCkvVXc8um6rtH91c3tXWr5sv67X35qa7JQmtGdEczGNiHK7h4Vi2G5gjzwmtp19SAZ",
  "key36": "3HDJEWwY74wKmgTHGZJ2inVbCgbapf76bVAbMA51a9hTNzAk5ujjztGwtLDoh4Y5Zw8W6oQozekAC7NywR1rBcT",
  "key37": "6TffPRBvsVNye5wBAFybck5CFuthFSQaPshec4XPfo8UR58EsoAmAXQC8yPccavGQj6bsaSDHUZ3ngrZAGyVZwq",
  "key38": "2YRkoZV9gCAj5H5t3rcvinwqyRj5yBcTD3K7SSTXYyzCY4aDfDt2hegFcnf3ojBESqwNtusP8Z2h6mNRVAFXg534",
  "key39": "K7BbhbjdVi4MvnwdE1AwKWyLLTcuSYSXeKHNGFupta1EEi9dyr8guTC9UQNnw5mmX6fseS8zerN8C8vGv7d6Cba",
  "key40": "5i2aQ4M37zByWGpeU6cyQK6vGZFwT9TAQXHUsSKVJrmKUtkoXaCauRssSExfyPagJoDAadZXkvbA7ZfufjhMwkme",
  "key41": "5Kpss4VsoGBXdwZRvvvXaBAxkjKidr6psGcmyXVMPbo1t7YYWiatJy25A7gwMmUn6L6EVdWj7j2s11uQucYc97St",
  "key42": "jjpbj3nQ2HabeZy48JKcPuKne3dgx3YUCshK18DhRp6bMWWj6Lno8a5zGAJ93tZaMihjxKqppxdC1KstSxqy1PM",
  "key43": "4fXPHSgj6AH4TMXg3Qs2YVjGeqcPx39xHHxHatgtAk6rDLLkyPjZ2azvzqfikTq38dWUzG7LSQWDjmY6DBwQhZNS",
  "key44": "2NXtnzT3mAoGVKy7RSxzLD8zzyYFvzfsGfUrVJ6tDHP87Q44HoPmrmqa3PZsFtnAADaT5NujBNU8gVKGxQsYuTAM",
  "key45": "2nxzw3tZz4ZsWXMyFnFvvVB7t2Jey7Ve6jAoSkXTMNpLR1DmCy5uCXVDE9KzDa94fGuvCq1SF86RASwANgZRkAeg"
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
