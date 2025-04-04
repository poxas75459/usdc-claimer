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
    "4ARqCtpXBs1FZZjEw6bPKgJGUeU7z5hvNpZYb5pugWAtxoaxY139zPmHXhZcFJuAJKaRiZkHKzxN9QDqCki8g7i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZU2A767s2cUqJKYtbndydw1DeKLEFW6KKS7eMtF1GXrbWtk22DqiJkCERwyBjLR6HmX1yctFtQ7BKLgkvKJxCeT",
  "key1": "5znB8HKYjen6ZsXdXnC65Pb1XYkBLXquxfFAiq8eAykHjxQTeoM3RPpZSkehmcSiMuzBmazkfqDdKgnJTzazLQge",
  "key2": "4jBGtD1K8MQUaNMQ2rJ4F3DcYTcA3uwzSeXeDd8AfikPpnmPvDEU76a4wuJtmEe61A9iwFhdieT8QzAXFVgFcEJ4",
  "key3": "4mA8VJRC619r8w85z19M5HYbPeUH6eKw9sDsuj3VVAb8kY4RqdtHB8P6B4k63SJjHK9Qu53nJHMXTxHvHHUfyxtG",
  "key4": "4dNE9P5Kpz4CryXKt7mtsSFXZCEsch782nyfdfHM9RGihaJYGQ4HP12LE17YHMqnaH53AD2FQVvMxynUgqbhWsNk",
  "key5": "5zxF3u1uxvvgNFZTMuh3FYUUGpdYo2aoRtaXvSz87z7QUKUTEuCQmgHh8G7RYBBFKcgGpwwAo9UnbuNk3ynm19y6",
  "key6": "4CwzLXJ9UrvgGBirLyijBFMo1XW2c64sxKTMdqjRDjH5PVQ1rCnA2EXDhqvGagmGRxgrJRNu3cwM53iv3exjYWFd",
  "key7": "25o1wbpKYCubCD5BCzU2WUsQYbsHnTvrL7LeHXvaXpmbQWtYDX3acufbLJGoEA687ramC8ouHPbCQHyyvmPoXsAX",
  "key8": "4Dy7khSpkqUEiuNikbyqV91VX3XbpEvSSUWqsUsw8ghzEkLiLvodVPrymemK1vw7BMy1zbddNRCJBwY2psw1gB43",
  "key9": "316U3Gf6stysbevHenGYULv5ZnV2Ao5PaFP52FUi5hGtnoCP5KdstAJPZCHjy5nztGvSicJMYbgFeuG5GTHRUUa1",
  "key10": "5iArK4ms3eYeQpx5PeJTsotq2zUY3fiVTHinB2NxzJfr53xNh3NVZkb4XaTGwsVpPYs5deZbqQsjp7tEk5hNJSxh",
  "key11": "4L6WQ2raFx1FbJx7gTQCFFYHsC1K8VED132yShio67QmYJULn8PzGo7p1pxvdhy3xs75HZB36nPVLKcPvdNM2tsk",
  "key12": "3zKRZ5hrV3DDLDfxjx4k8pDnoxbUhy6cEH4AsxQnzPUdmVhM3vycptBZDRVM7hb9CqAySsUoQ5NFq2VYHZrRrAej",
  "key13": "3pm5D3CGrZoXF7quTD32bQyUC8gL6Xtn44SVpAxhVmcmAzeuQCsLqMwpLSUJZEoBsB9knNVhaXEGew5VudwdUgtZ",
  "key14": "5sM1J8e8M5YH4BuboQYuRkXqyyqhazahTT7ypMcgCpNJKT8aM53Db2yDjte74dGr1sey3rfj14n2WFgnpV6smHj7",
  "key15": "4KSeaTFC7NXrsAKMuvFeZqKYMsJprEPbMErBeKZky3XLpsbB2QE5KEV8fWACxWVq5V3NNApnsSPXpuD993err3o1",
  "key16": "4wMGSynMjLxD7RCThiRyco4k9Jew1En7n6Y5KiTpdJQT4WEe1oF2QJpQ8DKAuwJJXTGUooxgFFKCogmqouUG8pnM",
  "key17": "3iBMM8BXgx8H2JH3faVxUjVWL6Hp8sYqD2mcfE1vFiCBjLdc9PzaicCBMipJpp65XKjqehxiYx9b4NmWBqYRXYo6",
  "key18": "3X1VoGiuaspiR4gLZ11Cgp9wGDHgoHNUtAjyNSgcurmbnaJPPEKWB7zRiH79uRDutHFq1JWBGik12gNfCqcFqALB",
  "key19": "4Zv2X2PGAswSjoupLJuKihD38rK97hWiMT2p6LPMK2XfA5d9hfQ6dz1WMMCxmZtW5ofYSZA1wo1zQifGyk6pY5dz",
  "key20": "7Tmq8a1Q3krMc2P3xuy86SZPRGwGHaRrvdB45uz9gtAs2qpe8Jg4pn5a8yoxxK1THzK18kpVrkcgWMWYuhkev2F",
  "key21": "BEkrBYZ6t8Lv6hwa1YQBEMRSRVCi31uGXoYAMbKpnPqwrS3Q3gzDZCr58oMfUpwUUWtYswgN2UDiEYuvumbuo6i",
  "key22": "2qpL9bEgohJNd8fyebGFPLPC4xowtv4HSRgqJ6QtS52DnzM1GLkVBjaoTAB6CmXbkTvFQFGY7JAQSwH4Vj1KcPLt",
  "key23": "4YGtZXBcphWJhEdg9CARkJvVSEWLWnmby9v2WCmgwwo5Kv9vffjtGK6A8Y1PDNn46Mn2CuDVaynLTGgCsfDNmaEX",
  "key24": "3NGYiKu2Vp9h9TSgRUTMKR2VvkbVdCPj9qGWrDwMHjrt6jDfSwKmyGAb4EHwmM7Xww5kEWHQCdTEi9SVQX9f6BhC",
  "key25": "5RMV5X6UQ4RdyBVmnhktN4rfVKeFmwp1NZdhMR8Fc6VVFzHiT3k14uEGU3QpEfKKEQMYgHs6XGwFykaW5YfDnui3",
  "key26": "2iVZK8etvEbKb8pR3Y342Cm1dw8Yb2ZY5BBqrQU4mLfn3XcD3NLvtjKmy1a7vZZAVc6Zduq88RaXy1eFeUX15gho",
  "key27": "AZ85d6gjYxzPCHYW2U9KCAH9UASPiuac6hCVq5KauA7Zq7gdJQr1UbPEGnDVyD1brmBhEXwHAFmRKM3274eQRUt",
  "key28": "4xGBMARXXetzLGpsEH8AzKmkUHkCLtir6N6Wy9fr7h9GqFiCyHKQd3ZUNoPuUGQKX2zSz5WG3UWXFyoXCKR2ERic",
  "key29": "ohaytqGnvKKAbUpSTgHKSvXfy6j41toS8qrVp3sdVn4sJCncKYBzWomvp9z51AbvusQCy45EMfpAZJbR6dvYRaB",
  "key30": "3ims3r2H4dFxgJfGTQiypipBNxB92HNAt3ec1G4aKVsi3kztL76jeszHxiBh6XqiWJ1Uc3aYWZeyEtTs6wuAN5Ki",
  "key31": "3PXJWybGMYvnrGAg6imyiZk1CeAf2VW4e1CQhQ42smYdTsaQ9ehMkHpuX4RfQbLity1Mtm17apbQmuVnTYAne5pZ",
  "key32": "5qkagveaEw58ccVu8P4Vw9wCqCxYuGLsB7Q4eP9JPsZPf2TWFKiErwZvy2sZiFCj6BVbBwaa5izA9P96RkmWRUaG",
  "key33": "fgbZAYe8MqhdTRu35duw1uc2ToEGz7spsrunievaQpVMYrQnxHSTdfR5NwUdtTykAoR7t4RhKtYBJbskjGUosTA",
  "key34": "5yzNXPs2BX4Z4iRrNhYRA7Kmmrz8HwkpbAR2owLKscPGr22f8ZJViKrzrWevUtJzSU4eP9NFgqHfy1GmnBEXtNDK",
  "key35": "2fzZTDGWd6WVwb3fU6oR72ZUxDnS8tiD3FJJNXTwD8NzLARsVZD9Xe9yBqJeSV59PrExKWka983vHrxxKmaDusVC",
  "key36": "5YFx7WSJpx8Kcq3SPh35jH6AeSCx6DqM3a6NTgEBKX5iZKDRV4TYiwRqGLXy7L2gJP4dDexpP9n9K4BF1T4JHvZ9",
  "key37": "3fjmLCT32TiN9dTQmvpATeGSBWYtESqtXrwUMPZSmQ3gx8MjP7wCNTsnHxxUnkXmMt1xnAuQVmyRY1izzC43cNsp",
  "key38": "WgPkpN82MXM43KHjjWWnxB5NcGrU1GFBG44MwVCSQ2dtPDKMzaD4MGrN6hv9Dnarcdtpr3gJr7Do6PTzvePt9z5",
  "key39": "56GWJZh4SivZNwiQms2g5fc9sQBq9YMmMvT8vZmFZhPH8f8yPprsiTsyp4Xj6Dr78pLE415YuygfoprkBW16MExs",
  "key40": "2pRCqyVWbz56xCjSucxz5y6Wpz7U3AjAHoni9bgEVwybAjMBvRjJ1ypMVdcLXUGPT5YK3gNNiCohPgjQoAJ8Asqa"
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
