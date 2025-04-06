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
    "2Sw2Xp1ki2YTD7LRzE3EGVXX38D2MJsMESCBxamqQmxFi6cX3DA6iR8djMhdUYGotkm3VoMziRRsjuxX8cBohdJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bmywhBBhFzzYM9JxTQQpPUFpu2XPtHiHMkDVEJE846Nz2ZRNAMuqWHXm7ZLaoK75JsR9k8jZnxrav89VaFzR7ht",
  "key1": "4ZFenx3D6Na5PN7hZcQrRtnseUfJNCCFNK3EEyDX78uQyp5qZEAh1YcDrDha7fycdNCEu2UE5keJJVdgHJceP9Ea",
  "key2": "gvwWh6rWGvUGUgYuJZF93aGq4bUtxVXtGJxxj4G5Z4QL8Z6R88FV8W6MDypvrPU8ZuCQV6HQ5yDeH3sntN46WoH",
  "key3": "4UfRhgkw7sjZzJ8MqSooTu3wDLmmedwSYxbbDutoXtyQh8km2FP25FtRfEaPEmLTupaTjitPL9CJcTsjNJwQkpEJ",
  "key4": "3Mx3REMKKezurWsusxkiN8ZvqHYi8emtYiVmdJRu1vjLhJrX2GJPQJygp1SvPtXNCF4HuS2KM3kriEyZ4yDH8VJf",
  "key5": "3bwjqJ7BsAHZXwoZ5Bb9rBjksShYXUHowouy1KGQ2697kc8YeaRuB1YHAiHxvinJDosZj71yYkXuys4R1tYt6RV3",
  "key6": "4QNc5spbYu3Z2SqUBXzt2V3ZzUP79CsjurLLdehzXi7RGMqSotesBAbKYBy8PzaDPeXQwqEwEwPGxXQwt6h5WiKC",
  "key7": "VYrS35zFy5vRHjdbYa5w2ZDxXugvyBp9sv9yPWZxwzZJUzReFzJd6r87yKDs7aDAitJUgkDdQ4rUqWEqrJvFFrr",
  "key8": "5EJE66P31XnykHMDbrxukYaWXbAaFno6eNTcduFx4RScXVPcrJsnfrBM2Ar2YQvfEEsBAfTmnaC2RLumJPwBmjfE",
  "key9": "4NsfhskAWznPtXeDaupN8vJ46a31xw7SJ1eK3y5Zrm1f7AyUbpr2ciFFjRaUusmzd4vAVxUun5Ws71rfqhDP1AZU",
  "key10": "2iQn1Hc7yQn1VhGf5TrYrFnKx15ctykhmdpNQQnSpwShCR6qYXCZHbCcDLPP6SbvPwe3weGQacAA2tR5zjv3iF3P",
  "key11": "ACz476MjP9UzM9YL8q2jxeqkCHH2H4EpcQMq1m5rza9eb48fdQJY6vpeoncyLYiG4cdgAzrCfwPeknfWZRga6xo",
  "key12": "4YhC73gLRNWq7RJGXV3AomPYnmTYcLELkz7v3yFX4rNjgsY7TBcRv3F4vVv1sgMvPxs5i4LeLJCAX6uZg9zcs1mL",
  "key13": "449DBq4DEM4wT66G6J8kzWzyAeNR9vmqhow7STvzr92prBKEY5x1UkEBSW5psnoG63nJ37wd5TKKzYymWa4nZYzn",
  "key14": "2AomGJQQvr1xzqUvLGfxuhHc5sxNS7E94cAZeU4AL7ykFBLZbwEZtcFJRZ4QVgkJJimUjkJTUneMnfFxeAE4QPby",
  "key15": "3XW5sf7PoV4ECzthHudYkQTuW5AN4GQv24CDLiRJTCNJxN9huW4vUGS5GdVWwrmT5nsgopBZ3m2UHHVLGqCnPc3w",
  "key16": "4KfS9E8dDJzKzgJ631bgHTTsCSW3EyuKxynqHZURqJiAui3RxG32ep6yeiDEJY8hqrJcwHuAEib7he67nbheGGqC",
  "key17": "hDYJtwyUPxiUXghupdzbZbMrz8oVexzThbTSjwbDA4XvMBrKXpVKkhmUnR5GowTZM7Mhb6x1JwkhBL31tSamp59",
  "key18": "24N5RwFTWw7gsHV95tJFED58Cm6i8BTmQq6WvDTaqu6d3hQRYxgL4Lk7jjmKRB3gjRUx8W4qFYBjpbU1C948LebB",
  "key19": "2KSE9y7FggqfMnrPTDpqduWLYwseE2aEts6xZRT4zMCettAn84BHqkqgkECjnRD9Fd9rr83bthCmEYzADNoZGXnW",
  "key20": "moBaCUz8QyVTXv62RQiQ8CbmXYQ94yJupDKyhEHrPrpvrb8NNShfmpEchM9v4qAHrySHBbtuMkBpToXEQio3GYQ",
  "key21": "GtT1hZV5MDdadqFKwicVNtNKxtAi86HUMUFpGc5g4bdfV88HXzehNWnNK2yZCunQ4VaGVEXJvZeVcWrX6FeuZf1",
  "key22": "6shNFgBFT1bhm1HkMtAtdbvTqYZxTZSbJaf8wHUYPt3onqkGq1W1yApkRj2kzqhqVKHQ9deJbiPQT5DGu9qTqmE",
  "key23": "3T9Ck4Uu9RXaoCyguXQro75WPXkbQbcdR2B8Sb9H86WN31id3AJm7QP8Dijwq9rRxTjzwB9rxSG7r8Meijwpw4Mw",
  "key24": "7fw1TmJeTzP2TcHk9XpBQxMGjhNTJtMWRiHd3QBUQuzT54sNyyUSFhDvcuqoaTPE1Z4esPLmkHse4LRRH6PCq4w",
  "key25": "477WAvKuXxgBfZ3fVUXdgieyfhsyYAhMeskiUEj6xHf64vaUoTXpLMNHCnTPYeBjh8RjHRFHUWbKStkT3yJiUj3M",
  "key26": "5N3HS1zYANKfwGbauMZzZiz3HQBkHdPKuD5UoSMPpQgpbxK57qMhJX45W8ejjHmyPPyTjaDrFLGGSUw8L8Y4EXPy",
  "key27": "3LjFiPBTKTNr7aB9kSA5EQruWKnJtUcPVjGMn4Guf7axQmsPnBhPHGjP3A18ipP3d19zSUASa3sf2zpQCb7mwc7H",
  "key28": "4BdDTFo4XK1d6i59DLE6qkraQ8HgoHEsQgcCzsM6myZHk8kTCg7hLGqZhc68Myu6Ynh6Mu4QPXhcuE9wK8DPwBxC",
  "key29": "2FGjWjcGnkHLpv7ZzYpWTrupBakjkRq3TGgL75Vci4yJ12WVe37AppnnPjtVJfKUtGP8mh8JTA7Bcak6KUawgJhb",
  "key30": "54eGJTz5SqG7gvUpCUuk6iiwab5riupa7R1MnXS5f3dcxFjvF348BHFBsuA6VzGCSMpumWBNFWxJ6QGK1A2QXxXw",
  "key31": "3DhW6bAwdLCakXT8z8KR3ZhUb8pS8GvNHf4i1rTf8cKmWt2gZbg9Nzr7M3CtdAyYeY7qRcee7VPG34rLULNZhafq",
  "key32": "478QTMwJxBusuxmLbWNr4iT1h9gKyZgHF53sKbth5Gm5nNYG33BfsmR1eGJhLoLuvFiCPREc1QfSstDpMdawjXGm",
  "key33": "42utBtde8doHNGmDGuhXNcxofFZZt1xxwvAZAr5mfsR94gfQxFK9EinguL21rAmMZPrAJpHGSSHrpr4y6amkxP93",
  "key34": "9PdvmZGMT95yEpAt53GDyKvmqfsHSbBccpfai9tiekG5xtsDBNrDcsRhpiUHPtTvKb11bMPSVCrx1K4qpFTLA6H",
  "key35": "61crVAPbqsSre7oS2XLzBQcf7DHPKuZFLGWukgmf9Ucshtth1xVswuJuhAtAwYZY7UUPiEBucYKQcaAaKgBm95ad",
  "key36": "2ZRmxfXyZweMhzDBfDv2dcTZEDu8gcbt7omDKff86AsEHNYtrDueggHbWqKZEgGentrDAboyuLr1KrxUsj4u8bjU",
  "key37": "37oNQy6rgyF8aUnDM6BtnHQc9naUna3r9YvBmVWQ5evvZAGtPdSxCKXVhbEmNSUxob9C8zZRToncVeqRapydk7nx",
  "key38": "4zZMPeosET3mFbWJnayVzHey7eJCiwL2TGXTPKzeWwxZkyFSvr6oFD821dsbhtKyvbCEy61e3RkLaVT7GVbymoY6",
  "key39": "2nTZrDHAtCJ8cGmzJ95uZaS93ViBsEpS1jkD66UDJH9QGWQw1uyCWuizkDXk2LqRvBanMazZTaqPpeapEzNesM5X",
  "key40": "5NSz4B8aQ8yTDy3vAzjkA4Un1eB2uEsLp3j2vHr5zZ5RkQjTpAUs5RWdYpcJDfEw1K9oAQfM1DiRtUCYWQpZhmWB",
  "key41": "3jbqmkdurVegAVvBiB22enAqcox8tDHrFtyyY13gJckWeufqfx3GGCPsecLS64teZAcpagb3wKQmcdnz4VuwFBpg",
  "key42": "26zDNDMqDdeWdfGW8GyCdZ2EHTuSFPRPRzWrTsovV1RwqFujQU6bKffCfjagdD5ruSSsjpVSUrxXRt17jiX1R1ta",
  "key43": "2seLMMLR3GuiTGod6zn8VtAoVkun7mquTVxw3THFjJoz4PoCYMwGNWUHjLsWDpj2fdSYWTngBNu1d4QZcw4MeVwE",
  "key44": "2Ee5RjPGyFTBRUK2AUsZMem9CXfm2rWzsUZg2uYuriKqW5dzN7a65JLdbddQwMXAhPc9FGKc5wTRsuQVqRnPsPv1",
  "key45": "3S5fSAqVqN9vxvDKRiArt3eGQzwzc6WKZ68v3fATeQKUbGPV5zycdxGcWo62nSJTkYUwX7VicgjDgR4RyTsgyAgX",
  "key46": "3Gbfai6o58FUk72SgYguhU9M7MqBeLEoYTgFfEv6rKhMchbiLvpALczu4Kx1oCtTKBPzRacVSyuuGRPDiCxJ4YYL",
  "key47": "rYs6vjU7QMtLF7uQeiknuLq74iEZgj3kzpQBGJRvShsiq4QBMQWmWJF9c1bor2XLrRfd923kVRoAJnvJpxREyyt",
  "key48": "4nqP7tqw76PgBegDKNRm2f5HHhvZ2q3rS1KVMbSXxBqt3h9G7D132bmE7ebXZKifmBrqY4BrcE2nKv1vX2B78w8B",
  "key49": "3EyY2rCeT6uQAV2HMknFCax6WekJDGfWtuP86QLuWteea6P1TEQ8TXDsqrH6ZYpRjybAg4kisJZxaR5ZV8qG4NDY"
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
