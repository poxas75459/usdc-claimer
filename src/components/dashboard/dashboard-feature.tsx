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
    "4uJtsvAs7ph1UeqMSpwCARKbzjMwDWrmavVZvZ5575oiKDdcjzxDxEUbFnw7uz4JndxanVZdDg2YYVD16NQueRvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDiPZ61ChtYLhYVGFV7ofYrpzRvN3Hh3K5VpSiBkeBMSDb28nBHoh6g4uysScHicpnp6MrCPjNUccXsmhBxttop",
  "key1": "3ZcZpgKqqNjnbs4m4EJHuT1A3uLZr2M4htroRtfJcMVZfUYZaZK3rviGQgSCSnufspxdzNRaFfjsnW7K9VzJhxhR",
  "key2": "5n5Y4rUdGU7vrhPj4h7kaz6C5VTPyTRubKqQc9Whu2e6iRwzQPRXMpgLicf81DUZaUnA6aGhad4jqwP16jdX5Vo7",
  "key3": "5rxx5D8nQ3B3Uy7S74XzVB4ijKLhak3sred9soNzaaTMgt4RwQk7scGGiLFRDPnsK9gt4PAdTDAQHZnBmVH9hAQD",
  "key4": "3KoqdRQEx5HASTp4j1a5NQK77XFPUaiTuEQj6EdMBu92g2QmaGT1A9UqnN7RArhYz7iucNuAyTkBBjk1BFHonbZ8",
  "key5": "3cB2Y47uDbcjNMnx3NcwjtAkim2RLC49c4pgkch6NX2J3bdPzkz5ZTfm6q9Ed5cWUBeqdZtAMxXhtjbeAWzkDmQi",
  "key6": "3PvbSErmWnPdbygotseogzYgx2XjpdH3p7Amu3YfahqGCVmhvvpgGK6RCjy7BLkdg1uqxUkHytNM47sBKvS39UuW",
  "key7": "41bEQjbUeyaDs1tGxruNYcWmnZ2ykmgw9VGtSsRpwn1mRQMpB1yUxPWexBZfLYuk6e9GWKAzqBVLsRLZnSjMm6Nm",
  "key8": "5zGaxPPUp4pVMRUiMT8ihHVXzA87Vo9XLySNxLNKbzWWm6T5oNRu9sX1obxm7fFU7ZsKhzbF4RdZuJzn1CAw8FeC",
  "key9": "3NeVMP4RrVRcLTQrdbc3mrCHY74W3g376QBSQwQs2bPmxu4DA858F4xssdbqEVhaZgNqPeCVRq89HjaWLj8jqntd",
  "key10": "yTFNzPAVNZriqWLBKDpYcc7JMnSDPmbZF4K1TzT9t4oV5ocpxJfA5hPxafpKwUbNKRy1rED6KFR7RvSCQXZ1qTW",
  "key11": "3dRiWGKXHeXoXwVTynAcqiuHSAyqHSECUz6z951QNUC6WKxvgLdZuj1V7FhH1j9zAoNtrbvzp9UYk5FtKF2omD9k",
  "key12": "49XCsex6JQ36iYmibrDeJHyCyjsjybFAXsnd9XggXuAXEZWA5KDf56F7F8F68DhnxbjykkfWbPqeRnPso5LEA4ZE",
  "key13": "3kGNjecCxzXmNvJvyjanALAJLwDEdW5hggB6T4n8QUXRKv96VLR8WBbGp3SshmSnVunQZ2ay381WYoaJMpEXCRPj",
  "key14": "67JsV4CpbvnVd1nAAW2UK26oSTo5ghdd4DQVGXdXfWY9JzEt2csLTeWPkxV3qxoXxABKtqjSNsqwtRUvHRk1bFp",
  "key15": "2dNu3bBJY5yLXbeiZWk15VZ9gQPFJzCtMehzoZ8ELyR2c148osskkh7qvxea79vCKGHSZttNHAXYnXJMJfuRyYmb",
  "key16": "4YwmQiA6hFWbHvTagb9im7PQa65bUvpvHA6F5kwZV2z6SqtowgNMTbtttjj76GfcCxyFsBLU5xm9TMUWHKBmnhWx",
  "key17": "3kxQLq7tV5vyZsCRopCQQjfHztDMDkagXYtRKvoku7XPJxmzT6GeUTubESgZLqct1HuKmGzcJnsPKKpPnkDuji3X",
  "key18": "5iyirBmRPVgkL6V6quQRNqMxkKnCLAa6Mwq1yiBUuHZ6pjQH7DTSku5hyoor3Pnq6LdUkjwuyMgp6Dha968BB8bw",
  "key19": "eB7mjwh8TJF4JMP82g77knbWnkUvnHd839LswoPdK2NmiryHApajTPvqK1VmbVS1JAtZvdTPYk31MVJJDxFuju5",
  "key20": "5XVLkSZGhTz4H84xgegosPP9tVDjeDipSyuTfyPgHK8x8KZdYqC1sTGMhDURxKxNvQVNByW3kg8rEk1Ds1BEBMYo",
  "key21": "2kKK4PrQzbNULtGzwPvUhz5jYLKBYbnBXng9JS6iYMYKzySEvbHWfJyUzT6gUfTjEr3WM2MQJFbhNmGt8Q9wVWEt",
  "key22": "eB9b2RgFBwdCe2SnRmVDBERAsn9gpdp46wJubzm8GKMrmEjwNEExj3oePh9HNxVZKrvfwzGBKtgzgwaEPRqhRw2",
  "key23": "5UvjFfk9GdEvvj7M4MA66hNspNXjbPBPh7ej3G85boEqAmSnkBMBGGxD9yrkuR1YoggPKte9PhQ9DBsf7dMFXyzm",
  "key24": "4fY2iMvbpk4jAUAHwsfEL8JWprk5dUC5q7UaJebcu3QLBwgNGTs1T5tgYAHZg1pzvNCi2YmAqt8pKrTXFdbJmrEQ",
  "key25": "2jSzgQKKaw8rdQDTeY8YJzGaFcReJjB3D6T4JYpMKJTPUxZiABxWuSc4WY3BSSBYBHoU8dAmQ9BEH1s8gx8PLYfg",
  "key26": "41ZffykgZhPM7a62KC7iZJGHqfBqfQaMucVruZon9a9s4kd8csorPrGRSqwW8Vq6WciX3Do6Xg7LMjBSF73BK3T3",
  "key27": "WbRTVxZLPi5F4BQ8swZwktwmLxPjqmJy5pKdxBVD5mABu6Baekv6TBeWV8WwdtQfE6ABLFgXdw8Z36PTYR4F9AY",
  "key28": "2Wni9Scf5yjzy54sX6ArCRN6F13W4nnSnQRrUmrY9zyuXpNbmgVS9kMENP5P1k64PLT39mygavpK9yyJzLsBBW8J",
  "key29": "4R1RVJDFy8qMndD1XPjq4hQQ2272bToVvtjTvkn9zzimzmZx3yQ8aaCzq3kVeRt6dN4PSLLFAra4TEgXiAYCLHqj",
  "key30": "4wAmApifaFPf7BdbXxAn5hcQ5wNKjeXrpMD1yXnuJw1EaQpoxpDp2sfQmyEQSkNXHwjaqHHR3Doo1ttzcHVfZYdt",
  "key31": "2TV2kZf1LmrBAnDAsMLFrHG8X86vSvofA8n8bxsyudoHWF9AZi81sc28Zj2RF24cZRnZwJEma4JxWZX3GdrGEhTX",
  "key32": "5a3nJsRAXWVKdovMRw7RBi69j5ak4oFj8LgaVGVL39rgPkbtQiLqUhRVdeVVtnk8qTLhhHu9YJMFVVWzNnh1cH14",
  "key33": "5VJWy2DPGnK6HW4PRQeCP9zHSs5AHZAfhu4qS3jMYQS7QNybirNvtBUXhPagKKbDQQ9VpF9iMirxrFNvmxkBEpwe",
  "key34": "kRh1z4w571uybdHT7AXpnDkyYPSGrohuRNGSDhaaA86qNUjuHz3kzXpMFHeDTzZKLqCVDDwMcA9whTXiCXBpcn3"
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
