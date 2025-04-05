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
    "4EgWSnfJVzsvfi9JrXYQUSQkYb2x7FwSNCMHbG8i2V5KegpE6bPsT7u5HwyWFP6ZQVsiBawKDZsDZ4jMpYCtRN4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3kaXtqEYSjemyyfEWiWtmhiuBfQ8CcV1eJpC5zRKvq4fa2GZE8oiykZaZcRbUtZDRS7LSBQRo5JQDHSMqpXCjC",
  "key1": "3wyHVREnoJpggihbRswQEXSyam5xF3hHpXoMwbGhQGhAaAY9bDvtNoPdM5fTzBs4EZCThDi4Aob1ZtgyJVqFsxhc",
  "key2": "4bUYuYg4oGnow8Fx8Yn8DP4Lrgzb4Sq3t582LNmg7vBEnr36oQEmkVpraUMiyec4T1FG5mQh13t1L1exFmXjMaSE",
  "key3": "YsUiPvQf83xXqo8cJrF4cjy8H8TZNw17RAz7SJgyXJaF9rpPLiYHNoJTGye13LYmwZv7veQE1wH1fpBBDwbKtJ6",
  "key4": "32uZqntrwN8NjwEa1sJZbYNGm5FkbTLrjr4eLwrRaJJrb3p7ULGN4R4XZdoVZ9yQ9JqmJVQY928j2uPzRKvoRjNn",
  "key5": "2QYLWmYWpXEyzfcgnYBXb6TBzGhPdqe9BwMYBkk9zxuV4hXWqezzJnGX3itpfv9gSXiZ29Y56SSkqtDHgYMgbXxD",
  "key6": "4tk8oEDhoaxuPvuAkTr9c2zw9tRTkiCpuYTtRYcMWkHYk6cDasFmQDGCpt4rpBFyZYM1rSDFp1gwDPcchVdQXDiK",
  "key7": "3pV2oL5GntTCSkpRQVDZNEuFFfMkAWqpZzo1514qbLPnDWqqTvLCYc92Vyk8T9bRw2Nc2LkEFH1D5n257pxTRDfH",
  "key8": "2REvD6VkJ6bjCTmUPzoHbLs2ST3cK7TryjmExD7zcygFFrB6qGgEQjoRdeeafJWvyXV63SVbUfFFqzkNCybMStCr",
  "key9": "qLMqjaMvAKnc1WhTJKXfXSR72x3rWzLN9A92npJPjsSf75jZ4qdmiRnZpDmNCVnesSDwLesPqs7CR5i1iVbYpGU",
  "key10": "3rXFdTtoLex6qNW8beUDcsc4JXzVjiKQWbJxPrjx3NNk5JaojKWuNdCEATgmRsqcAqLhjLqj6hCmiWBCofNmVa2W",
  "key11": "2ZFWx2oxxCpX6D4LkbbV6u8bzSQCDTeWAKo9a4CPqfJNgu7Nauku4g8PJLRGqd7quhQJ7s43Ai6VTXiYryR5TFCr",
  "key12": "2rhYFDBgUK3HsQHoXcURKqFeLKshf6pv19Bga9jtn6NRiuSbkJaY6BCHyBZBshrxiJneAEqu85orxk4LbYMmEQQ5",
  "key13": "26MpUshuwwdUneRNtc5rY1C5i4dBBet3psS2wAoTGqXtt3nPR6WVC4VDzkozxDzXsTFYPH2Vi52tS8bCaPbYw7Zo",
  "key14": "5F83BZJn8AgdgKNKoaDcK44XUDJsRp4fAYUhnbwqfZFfJC8o2TyABrMsBBUsR1RMn4bHeANJkw3zqMa6sHWgKPou",
  "key15": "4g7rXxctgb3JXgdAhTehKkqPpk6bmNzdJv1e7YR2qYgbdCwtUrK6F2xrw1dEai1bhNcqD9F5ZWhhE8RTRLHTmX7x",
  "key16": "4H7mAZfbwUfKrkvjGJw8UVp4qvwY8uRcQLPKiE1vAps27dQY2cFMdvsHn4dRJgViUGXW3FmBbyqpfa95WrsFmoc2",
  "key17": "57wrEN7s1KGrbDn7DbtNW9XiZCDrynjKAsY4Z62oFWV5ytE3U2mfH3Q8ZwjfmKyZjeayXVmJvUmTYawq6nLq1KeW",
  "key18": "4WgTYNB8B2K865QDMN7JsgNTe3FXDJaqdzYEiqXt9smN6LWGWepguSZ2mVqrFzeFe35DcXb7tw4EZX93ZrHxNEJ",
  "key19": "3DQavAqc5xcb19q4cSkVb1smPZhqALf117WPfcu8kz8oZczbfV9vd81p8PMCM6trTBNcLRjHCx14UMzSCpEz5YVk",
  "key20": "4gQbuY65KoqkVTwxBh6888nuayfdXhUxXHCnwEyE3PZyQfSCyMunGhJm1YYxrcHm5bYWH4q9jJLfoapeSq4QAVmp",
  "key21": "5wg1cqrwV1dhu6XYbmKyc5huozM4TzZZTJVURMXjXS1PmvwjGnBkXStUUkA31JfudjqVx498M5EZm94NvV1PBJQF",
  "key22": "64x4Q7SMVRe4h3YGJn8pezxTnVH9Dmd51uGJii2z6AuQ1KYa4iz9H43XrehhrczkMEuKKpfuMn5qTaXRzeoT24KQ",
  "key23": "3auwpJSqBTTTcV1Qn9RYQPqekRUULEQvjmCA4NWXqZun4s2xvX96jjwcZbFGUzvvkPxHxsesg2ec4RW6gcjpaV6k",
  "key24": "24Cmtv1gwhD5Qn9TbuPzrQfnp2T4A16z1vCXmrCMf3ghwEmo5fE6nJHV44ufJkYGMnssx96MEMYoLr1RjjX7HqMf",
  "key25": "2MAnwkQQXib7zuJbYFxK1cpTrNgeSxPivXUAbH9pDMMYy85UAQMTcSVNdb4eJxhrdWzfbL83Hahu5PxyZ6cJRtre",
  "key26": "2S3j2LpF9xdEeCsDm9xGpfpnQSneCwQDUwVHEgAEzLeh4JEuxCQeBXkVayZ5BvSL4uu9462uJUGcD9siPDE7V3Xr",
  "key27": "2sqRJRchXiZgdt1xRHVYCWaWNUK5sr8nSCG5ATXzeodCm2bYXuo68beDG6gBA4LH8KkL8xJu7am4eMnC9FUD6TGx",
  "key28": "4LBEwn3oGQsSsTFan2zhaDUke3XM7GWpXeEwQKQaQ2J7gdpWXJe3Mb7X9cycTTGKzxWmcKDi4z9VwtYdoeVe9iAH",
  "key29": "uFnZc8WQufwHSntEmgJRAFnbswLrVHEs1jEbZMLJFVX1VTSvE1QdnR1JsYrshWckULreNfR7zVZGcTdViNGNu1e",
  "key30": "Z17k7e88jYsvqhFj12Si4tnvGpsqP1NW7ydu9pzwZuuF7M9rDXVPTnGwpdw7LfjSe3D9NvSp6qwDUYqnNqJFxbe",
  "key31": "Yv3bLJ5fgo3neRFRG2bGJEaKe6cBhJViweP3d27m5eh9jFWjQesLcm3VTKLtjKC7gUx2JpGVaxAaVNQxrXzd2kf",
  "key32": "3bktFuxtgfnkwaEiFBA6K8du32AEWTvFFKM6GcwesAgwf92KFSs2qrEAvpm3nx8vtSbHC2xWU6LzpFwhMyVYkU7y",
  "key33": "WsxFzMgQ4bWyCKSFhfGZT2chA7pB9YjuP2XVwXSaAHA9oay6vGeDrenTmt26X41xz3cYeigXXKEnaz8E6hiVe5u",
  "key34": "EaPe6GPWCNRw9AdwCAxzA7LffKmonedxHKahuiXzdzVyrY9fs8zVwGJEpBokcXjPttAabACMVQLQjfcNnYcDmgv",
  "key35": "veAnrKKJCRnJmuejonA1fGtQbe21q3ML39BdaUeqtYXrQFRupadfY2mAizwdXPRexKjqmH8qB6dKVZaktDXhvEF",
  "key36": "5nZpf3x5EeNzx1FokPyRKUenhmeKiKDdHJW5u4nHZpgKLQTMW9sWSbcdYzeapgCbSAAfmFTLcAsTpv1sAAvVQRdJ",
  "key37": "3yCwjZC2RPngjiNcaYZ4yyQ9sT3pgyn7icLVv1N2EdgJ2kNk8A28URsCk4hNaNTrKsRkaUknfUm9BnejrZAU8Uph",
  "key38": "2zCgCrfSE9t64Ueph84gH62qXNinWyu7RCujPHuutXadLyd8sk8AYEHVRbyusQHUAwWzcNQpPvA2xHMiGqJ6DokH",
  "key39": "2hLPxV9Q36LaVyusEFrUZ3EV8gtz6kSzUbJdLmigU8TPVJ453X7HAMJtHYuyKAZSmjxkrJszJUhzrB3Dov1QzNbb",
  "key40": "46fa9wdpGZpRp5uLQRTyTjkvAmhS9ZAvg9B3YpMVksp8eyx39dnG5Ch4fwbm8a37JB6pqVWPiYzyrpn5Vqtrbmts",
  "key41": "2VAzrtvufcjReAFiazD6B6ZyhCsJrXgXGtD4UQHaLruhvG83FginmpDeNENh6eVBTRi22iGsjnZU8snNvUsfnQDw",
  "key42": "3riMgYVSC61w1t6g94tjigjmZMfuLr3P7MqmHRSKW6zjDGdgbPb3WYKjybgn4XPzxEiCVgSVt9kCKX6D1gA83rw",
  "key43": "2EtfZUkk9eDLHQVirzB4iBbsPci6R5sJnTM8dkyyq6WJay868Sj66Mev5TiwwrgY1YQi83S3TL5NQc1XA7hB453K",
  "key44": "4gzoV3MJGVcXdqbCeEghCoe8o4k1YGG4zJZMCzCGFFXbdfSa45eXNqe9yx3k5TyQSuVkVTjSLDK5mkwHcQa6bgGU",
  "key45": "4XRk8AK5MKAxJKgEeTwpB1CwD5ouyzeLVt3RQF2WkkKcbUwUtnatCXh9ht16imJ3NXxVGZ1btBdG5YrXpmPfVmhA",
  "key46": "soBaF9WqsfvuWFw7tUxisuo1J3HQsMSKJ5AHmDZsTcTYCL2JfgoMqmB14JU7ge3ZNmz7WQR1fQDR5VVX1EHYcJj"
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
