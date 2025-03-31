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
    "3fVcbhFLys5hiCsiiXJMc69WvrPnyj5htV7U5LYtyCKLiXf996i49yuNAm5mHNAJmDroMoSAQtJrvnCPvnvHhhcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rifGJfHtzUwSBcTquPGw1ij288zwbyWzPx6NnLXa5ESiw8q4BFcfVySnEC1GSkwZ1d4BnBME2Fc9GiRupVvR6ep",
  "key1": "3gQMKvWg421JowkknW7kGYgaDJsEyhtwojQSSVNwqJY56ihsPUerq2dsHSBq17o4L6WC4m3VcVXnCPNZz1CpAAr2",
  "key2": "2fgn9yhsFtQWRkAs9hfr9yrQ828DAiWKnnePFzE8roNy7Q5d11qRUkm9arx8tYuEayNCyoZ5JnZdkK4jd8r9VLzn",
  "key3": "5LEWgxg8EVanZjh6n6ASqUpcsYYqd7r5BPCtX9LcsmFnqgQXbJSVdRD3UF8TamNbef1bGLXJzFwyfLjNoMdJwJj",
  "key4": "5LG2rvsktyYibJ6e29kjHqJzuUcnjgrqZoM6UZbPWmvVued4uSnMiFtA3ctokMyHkziVDHmSwAdf4RayMrJTrv1A",
  "key5": "YyHaB7gpd5mpW7knvEYGz6ATciJh6TcuNdWw3bkASH2mL9xWozRQTZbePd47vDcCGnWYLwtCY4xSHgDuTuLuQ3K",
  "key6": "4rZxuwW3GASCiCE2cUWh2PLKzG9Vuk6kbnSL1cB7A9VAKz865Tk31ABSBPhktD9EoESVGZj6nwBBb2R2mBYzMKtb",
  "key7": "3GRHc6PrnsJqoKDV2UNTsALEu5a2o4KU17YgVHaf93chioV5tW7NWVJnaF3BGRJk2mvnQkZyriCSQwcuWwUS6rem",
  "key8": "3XG2sM7hGt464UFVoLXZ6RWoiice3qmEDCMFzFMVWa4WxFzzFTStsGKx17vKowP1aBoMMrZKxTrckg5BnM8DAT45",
  "key9": "5czzFhksxKZUbcjAsrMFg6wf27XGk7aDLiWLsgYtyK5xPCSvvT9MohU5wqBYC72pNuCJ2p9mwHhVpNmn3zqmg4hG",
  "key10": "4gFPEVVKkgJKSTHTWULCu7tfrzvXF3u5oXtCMsgZKBheYbdNz66kRoJhgcPgGnA7QTLHz4TY17CHgW1UF5YvY76g",
  "key11": "3WzaTDaueUio4sqQ9w8utdL5tBwxKummxpPN8gpQmodfaKK7kaTfhZHLYtSdoRUaKzSm2pBrjepyE1PTWH4o1pGi",
  "key12": "3XDrUqYKn5jDEYBan9ovEY4AA5m9mKa8GQtmbh3SU6Goxfw9DoCUgT66xP3uBBga3JerTDQjHTpK43PPTvq2TAPW",
  "key13": "5RUW8VZQj5qx9Tzphz8czx4xQi9x9WXbnsTh46UVZmpA73mJaxqmRp8ADMfgc1ycHtxX1HJD8fQsY1AggGdd2qLW",
  "key14": "4nuGPVwntdU1Yxz1raQMjYTNTVUbs7HWmngTp55DB4YbHapTesNfqEUQMyK7tvGiqhLwaBmbragTk4vxc2agazdr",
  "key15": "22rnshPLmSdPaGnVZY575xqfkcyZS8opgZ1xNrNJkUgDXtpNLQ3G77e5d7oiwMRNweQ5ViBzW7MFey3D2yVa84T6",
  "key16": "3cdcUjNZHmQPD3YZbQrR6G4jyAzE6DxvSgf14e8Jj2qAP2G6CeNXT1XkrjBBTzekWNhpvjQB2A6HakHWZtDvXLR1",
  "key17": "4Nmo4apzDHyDqF2D3VRwpZkfVLr377MyKU2MkRk8g6dLEzkzDHcZNZDcWBVWAbfNy9T8weeYxTPEY8Jo69LZjtip",
  "key18": "4AzDWXgJwMMhaXdmpeUDzxBbZvcPe3p2v4kNJRYKSua67J1CFMNEfNEGYwk9Ya6NyK9WtMZN2kmtJNL814S4SZtg",
  "key19": "1P389CMJ6m5tB4WTKPPEjJXbRhLsn3wLf5tjdTsdemFukarEeR1HneaeGfE4g9e2ythAMey4FVd5gmJomPD7qZM",
  "key20": "4ETBDUt9skzEV4eGtykugGyu2bkgg4E9tUR57UBgKub7BD7z9PM97GqESMund9Jn4VrCooizd4kyLjteCv6x59WS",
  "key21": "3umsuDPW66pJqKWe6Gfc7rGRrXjQ7JZvpgp1p7nMU89qbUeb6wQe9UtSE2F9Uk59mcbrrUqgECNd7QybcrWtiA6w",
  "key22": "2Fz3KhaHzfyVrMhF8e2a9e6sAPdaK9TKsGZaoyZjyQgyRfanbP7DddRaVE23GLvwfzsWBEESi9A616p4161A3ThW",
  "key23": "4CwTpdx9VktwfaUhWT6yakVst6CL3hbXb2ZBsdY69NU5abaC8f4mKi6VttJE9aTinswWQwbf8Rmrn8Sa3qbHamqY",
  "key24": "5vdHjWom2z28fyCjoxETnJVtVUJZyN7M1K67HZddQbuxYm4NXWTZMxTrCgW9h25YB43WXXKL4Lb27bQNruKUEx7R",
  "key25": "pTVZXTcFX8dYifc73AQdHs6Wz6hzQ8mv62dozuh8QzFVL4RNzawCGK11djvSK6MuurvXPeWct3SzgB4NTSYPKCk",
  "key26": "5w3GYmwU6UuZ2sZUNxsM5CpJKY6C8EPsqwmvVvPqaK3PMSi5wRvcRJjL37QPhN7k6KVc4FjBvrABzC11sYJHY3nx",
  "key27": "3U5WEqDZLYiBG4ogxbYgGuKdioBFKyMTEznCbA6xDG7NUGhJukpxyQgm9v2ToYTXNQNKgc5XQiZandhQymvstctX",
  "key28": "217Pkt35oDBQq9kY4tteXFKakCKmoSKWXsA3Q6Fg6qioJ1wQBjg6BizCpaVDs33Z5r4v9juuSFQiNvHLmCwVBFiA",
  "key29": "64WgJzHCzL9jxjf21c4DBQ4giT97Yz6dfC3hiZUza5n6Dvu8T6tbYmrcJGz4AycmPFtJXBbzMksXRd2mfwBJDru5",
  "key30": "4odofDWWMP5g7edWVzpv9pHzLiMf9isXe178DK7fajuqzh4v65SQaKLk8bcG8ZAv1Lgg9fR9CeLTPjTsyFJZw5i4",
  "key31": "5UKHhCy6xUFcRXFZe4CL33pcwqHdeGS4FqcjJvF78Cp1ffd3jkze3sLSntAXU5F8gwKbYrgfiwcFdVXJqbPrN6B9",
  "key32": "sJCWhh124zfg2UJN48hQTLAfPseTPnc2HaB9Hmc75zzuMGPcm9hFRZ6EigLb4NpaHyUL5veSPeRhqtQZtFKxMe8",
  "key33": "YQdkHDcT17eB7QhjkiPNetHRQU7CsYNcmY7iM6A65egLUUSPhfXDSVnNe6maqi82ES6Q3NquARi4w8KQYGE4qro",
  "key34": "4x9JBP3R4RtY53eHgEaM7qgVZX7NpnKxaKbdPJD6JGckM5EcPHZVoriRQwUJufcp4mKAx549JrhdjsRwkvsCgw8F",
  "key35": "4wgdPYA2s1xh2LuTW9yysbUn59bDH6bAm8G2oYe2Jo9q5dxbtZULrxXXf7qJvvacoqwJbYWvj9Q87PrNx3253wEt"
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
