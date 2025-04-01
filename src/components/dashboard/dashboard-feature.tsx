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
    "5UTWsQ9FJ95kY8xJzDfF1KfMtZWSQXdTH7EmCPwcXNmpjjYztS49eJkiYCm6KivzXucxDH8njryUPmi22uvVyZN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjSj5TJhrEHMr3bDpBrYCQUV3RtNvxkdYFAuXPxsyF4w52XBJkktzS5PFa49J5jKnEr75uotYDHgrBfvZy4wz6Z",
  "key1": "5aEHD95szPUumNeKPAsu8QYHyPh3nwgFArhegeEZwRpAC56eiCP3eyqkrCRVhmWSbPoRryiq9y6vPjhJ65JTox5v",
  "key2": "4argKQxafF5iuAAvCdPXrGTEKqKeyTkpXUkMrvp3iTMGZVgAaNMTZiQGamWXJRZPPKkHeMHxBoJByzpXZa3Dh3DM",
  "key3": "3h22AbtGxSunpgLG87uLdjrtthSQqGCgmNSqbbchp5zzVuz95iSwvXQCpBXZR1RqMZKLyzFWgEpuo6jhsZS7Su7b",
  "key4": "2deXtp3Yvz7A2xYK8teQmur2Dfczr3GG5YZwvkT831LXjRb6wNZ5jcJRkc6PhrmBoWRVkr8Mbut13qRFRQpAJwkV",
  "key5": "4Kew4kv5Kuv1poSCUvCVq5JBwd8Vbe6CaN4a4TzJLq5rSDWjtjdkBVhjQ1qke9Mco9YcShWbfcjMh8dTaqthXKvC",
  "key6": "4zwDRzauJV6g9shk22XMHGGNqD8AoFsjz4iE6LfLxTh7rJd52djDGyTYbyurjdqPGjYkGCggbJXRaNQxeocmMyxi",
  "key7": "5WVsfnLWwTHcoPvzUpWbUWpf2ftBfJxWdpUFd5AMQNZwWJ1UwiFBJ2TJG1f3vmgSCWu7X8zgkFYQ44yzGtGkXGWd",
  "key8": "4CjH9eyde3Kzh4uzSWsUGvRVaZfvVc4YYuDfxCeKV1YAh4VgZdTDC4wqZCGUYxBDQQuM8VZoUyCipREB8XSqywDf",
  "key9": "2j1ScHhroizQzd7ocA35L4w4pbiQUNeXMFV2K1NUkBmYKgDhQTk87fLWvsquMhwAw49aKvjgB2aWgzSEeTepr1Xd",
  "key10": "3HEGtKhGHpDkU3c4TkkHg9kSEcbhmBMqmbTMeEGvcKcJEhqQJdNJFJ4aMNjhx4ECHQgrY3oc9VMsfu5Sx6UgMjY7",
  "key11": "5jZnWcAwKoVNxyrJS5swto7o2wHRwpAZGKnY6JnyJMEHnFtKhTpc1NjCSyUe7j88wkAG3oQ546saV8Kj2wpnCZ2p",
  "key12": "556EEfg7WJajRmfb5idu2wbAW14E6SpmBnTZJfPYU15ehuoapA715oQXu8AjUGwd5ayTUKGCdP4U77z3u7T9YDwm",
  "key13": "57QWgQLJUuVjCCcj3vp259XW14aPHjFJWxUNYT8f9rq3FDxA5dS43f7nubrSeuwKfBKGFP4JHtXghWbZn1QePAQJ",
  "key14": "ah5TWiCYc6QcyUiAspGhcwh29muncDoD59EFYG67TKMCPhKnr4bjzcnKGbAbuVKB5e1hAs7T413Y6JnevcavEt8",
  "key15": "22KigRpNuoXaSh7jn2xVVwgEaUeZArGYoAv4Ktom1BVuUyYvv4qxcRnC3ApGKy6GG6DFfAWPRqtuhTw8JpJoLd4N",
  "key16": "2b1wLqQMC8ocVE8KPUhgYW3iphzBStYBMxqYvpJGchaAF2fdpwH1b5DYknREMrE6dnJSvJFndpVVLj89r8ZoLtqd",
  "key17": "56qGapzUBMgeDTR2FTUfp4S4Ubbr5ymGxZan3r9U8meisWbJ2cq1D6VCpni1XvEmwLhMpSy8iv1b8RwdSNe2W7tL",
  "key18": "31trjPNrNsSpT54nGUjurbD2WRUBNVkNEMdPApUsdnnGQXnXyKwh9t89qm3wCUrJkfCXLyThEyBKuZ95QsLR5du5",
  "key19": "2KCrW7ByPNg5wy9378cByRvyB2QU5iQcEXVXTs5jw8AfRG1jm6s6Ckz4TAxju21ezeujAbGCzZNzPxUw4yK4SYK7",
  "key20": "2e8CH6ef8EiUxVgArxT4iNMQNFPX1G9k9ZdH9Y3qVjikYKm2yycxzUCPVL9cBU9TzgokGJSQJZPRt6CuVrVRPaBB",
  "key21": "2poZRtWQYSMHr9oTA8zYQ5bs6iPiaP1zMdDprywFyoCTLX9J9ajTJHPEuwpZjBhdPk9Z5AcTq7EoWukEy5NzSXp5",
  "key22": "3vsfh7hJUm3j3o9SNFaoiRo36gAscStZFgVD7NUGk1MQadHg9nxN2VWfRc6D4jrpFKoU67cY9fBz8njbfD9Waj3a",
  "key23": "KQTWmxgoxhJgQucgiR2ZzFzMbgb2ZVhy12c9BUZ4Uaao1XzJ8VQvd5cEKVdnUtmMReidpdYTNnzpYA1n8pH1mGP",
  "key24": "4kQKHfpCUKiULTdm8UBGJUc8uudXWeADZ6FaSTgAk3CyLGyakC4K5JsmMqWnzfJCgPF7svk57eCjwwT1SzTkRGrn",
  "key25": "5TRwGgwEs5jnX9tUrhc5A8ZXzXSQnGSrmSzxQ5a6zY6Qydhzft69pVSGAfDyVdBJBgyZthrq9iCpFUjwhPM6RTBY",
  "key26": "P2X7WnAFyRMRkM1fxqcabDkgeuAnzvjxwdSyxtosLMZ7wLkTqiqD7QhPBRQw4fTxbop1CHMQsYzD2Th4oTcvgQE",
  "key27": "3BFD5zcjtfU1NJ764LpRoDmyg5ZZokep7Tz1ECHfwafc7kgfocxJH5HLkBHkn1re7Qt2CyZctiQ2Jkegr45ZcTug",
  "key28": "YsGxxYqnL8NFo9DjDzdj8z4HF5WDvNNqzKsdeten2EiHsUpiGN8DPbZNdq1k8JuFuW6eEkvFXdvA5Wf753cynwd",
  "key29": "4MWzXaumdfV1VQKkmd44VT6eJMqGhuUTFqau3SnGGmTLcF5khKqv8euTRVoJ3j1LcYtCrmH55v4EYY5c9jqFpgoV",
  "key30": "p2TBvwT8F7ofepno44G4NpxwtohgHkdDkZSigj4GbCfyeRFN7AFGr4Thhp6v6xa2618CMq53vNQcpuGRTufhDE5",
  "key31": "25yUHu3QHc5Gx6wnUFFfUxaxJticQcev9BsCcUKBUFfSjof5RxG4xPXUMQknZe2poJjNHSt87FydYsAec7hkVTGJ",
  "key32": "3ThN1PpRgZWwjpfpGyhLVNEDFNtgj6rKav5G8dyVTJx93eUjKA11rFy3JtBEjddEF1WXEvjFh6Ns9xPNUexKHdGc",
  "key33": "4cBZNZLLcAjQYTnQFjtVfKVQ6uwE2fYHE2PaRiPeAYCss3F23GY6ziPSFEVjVsRexnRUznjFoUnXA3yjT2ceZz67",
  "key34": "47PAtbMMMEs7nrzugy16usm9vV9FScW79geHzeBqCG6v8KGxxXv4ctsJ6qvvU6yv7arTXcusvuFSbHTT5mPUDic7",
  "key35": "2rkVoHJVeuTYRBtz2A8nY2FLbKLxcq7fZBQhp4oj24kUU7VjsPXTwNQboHWJomrWH5vg1dVc2g2VKRutKSmiTriv",
  "key36": "29fLTiduBzYadgjYNAss2BA8VKHu2zhgTCSGNfrzvjZKRYBtKv4gbYTgPvSegBPefqQRrbnumk5K59NodenNzDcf",
  "key37": "4xvBhjohktP7cRhzaekQpVhKsQRdb52rYNpbtKTwo3L2iThpCfHnDCciXbuVyZ51RV5of8F58tZ2q85rP7VgpFMM",
  "key38": "5i3eGgzEuuVQKrvsMs1GypsxMpMqKDGEp4dx8c1x2ZbqxSepCbKa7XjriQGMTA7buUEmC65tdtzMj2p2wnNdMYHr",
  "key39": "bHMnzeJaw64VZXksqvnen7SoxWDFoAdwaoZKzhDft6Mx8TaMdDTmXuD4sj8z5m3HLcXTnfnTGL7EPDcForSKBbS",
  "key40": "21NwttYME1FWHoFaCiVGeA67vXG2NjkC8jdC6MUZAFTV1ByEZtk87XXS9PSyZqXV7yFBEtvkdsXZ7sqpYvW1CkZD",
  "key41": "4TVEJ4YDH6VH3SEUT3jRqCHrDZYRJeCuK73Fx67nQxr93Rxf6hTPwe8rRXJovh8qFZ7DNLK5zj5rAtetMpx4Uuiu",
  "key42": "8Z7FMPYWV6HoDt5QJZQ37KLJ1zMqDk9t8ncJzpxyo5nqRiYRp3YqgoaakVPudvhuYREsGsGFd91tws43jUBs8N9"
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
