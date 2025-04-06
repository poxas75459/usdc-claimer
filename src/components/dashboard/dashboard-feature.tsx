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
    "eu5e7qSJgq3s4bdVpL68b5GjshccFnQ7RXjbNGMCXKx2NJ3VSC1PXtr6SFwmkZGLxc6nhxkfwyykA6G8nfMt5nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CX8qyxD8FTW6V2puab9jUNXmuF1jwrbthbjU8dcUj99wz6fMn3y37viGxqjnfPcytcqJ7oa3hnePstzCdNXtBk8",
  "key1": "24FC22SxAdgBgnjj9fw41ytCiPNYCPDASjDn94ZE4Wb6jC8NCPcn9iYWf6AmK83SWexgDKgVd6zoRuLCpRCtWc4x",
  "key2": "PDhWMbmqUi6xAQDB3bXZU4nV8vnrLFZhvwUwmA6u5GWnshw1JJaA8B6zYjyzppfkFXd2pgWuKo41TZMc5yEmg2s",
  "key3": "2NgR1RGBDdRDp51Vo3USMPPb893gNYQpCfYN5cu4fh5xozSxfmpKYND19NWsTndGgREVR4zUZMYMw5YsUkbe4KZY",
  "key4": "3vR4wfhs5xaExyoRQieBJV6aNTetHdAZLtncZAzp5f324pwV34CbBp1MeDamRxxj1oFjr3DipnF9ywqxxaUusiYh",
  "key5": "5NGbiMPxxcosFyEenzwwLGKW2Q6AuHoQ89ZbWVg252q9WQQti8VS6tyuRifzXCZxBonjcVbbuvzGHoPCVh3yEivj",
  "key6": "4dhBMj8iVRTCE16BjgLosKRywVgmDxmhrg37kLnHxVaYhwGcBHAbrrTH7pzMm1KL6bHxdEAt4oX8zBPmjUX7wDd8",
  "key7": "5NxyKtgKjD2aqW2Y69d9YctbvGPtZp5e7jJwca2GaEDiYQxhhB7bDvcfjCXREjA7rLV5M6JB8447zrvNyR2FqTo6",
  "key8": "4h71r8JrZzBt2FhdT88U4rFLtmuAWtxqUgeLxrioBr6kkebHEewinpXUVDN7ybnCQKk8de5XdjxiQWyP2Fy94mCd",
  "key9": "5xArECa5V5s29gdVCmWSQuyVkgeQjAzvisp2njsTHgHxehU2VqHs1ANNaUwmhuDKRZibugJytUyoZvq4C8LpsXaG",
  "key10": "pjCG3yH9qLo5hCZ5yHrz7ZouwKbGPr6K2P1RURnv8qB4QFmwPeLQZcx6ZnfKJDdBaCvZiXAsfsPpb6Ld976Jcjq",
  "key11": "7LB2HJvorZa3zUerHBy4WueYLp36QryFsgUF95z7Ljz4W3mKFvTF4foyunW16UDmq8MDMeS7gcqmKd6kTwDzxph",
  "key12": "2ZAbipnpLi3wnivgqvEeXtuFhczBVRr9AeHALfgEnZuE2Rp67Tg7WEhiFxub5XQJCxfC6dfnk1KWt836te897frx",
  "key13": "kjUt7fdtSFfg1ofsje26bUDkWDVmWLf9bxr54hEbxzqzoCUymdcUxNoWnbdYiBTE5ZVi7QZq2hcnFNjRaeXMjCp",
  "key14": "2HqyxHLLtbn2rjWuCd4R9UCgZxnAptPSz7KVD4TkZXuhofJ9o996sFfH27BFnpeYMoLWWDq25PqydpUk2s7QFGUW",
  "key15": "3gtLpKcDUeVkJ449QDnRf6eHY44WdvbTVwshAPsdVFjEX491TBESsvYGBbBn7Mu7tTamNvZcr1A68ziUvotueJ65",
  "key16": "3zjz3ZVR85pn92tjsGrokcyXdHMskLXdt8XasJknuYkGQgfDoTyWnKLVHpLtxBZqQkciJDTMGrkMw4E4zu1rnWem",
  "key17": "XUDTLGtpddmxSfYDfJW4nkx2MuSXXKCYRGyzBhxkhzAkJSJtruJX8f4u8M8UoD9yAAKzf4dYc4KMkZhY9ahG9F9",
  "key18": "dUkNgcT6y3kYg6G2i4NiM7MFHcRTkRJ2EY8B6RKNsy35JDBjA6jC659VdvUiDE8tGs8u2nN7snBGua5X3zg61av",
  "key19": "7NUdvgbmYbdRp5o6idqVbV1VXzVDxC8MdgFVVZxbrHrjoXeQb8R4gCNMsqaY5PdSpvrsSkC1vprT6jeGDquBF7v",
  "key20": "47aeiCGwvhcsHb9gueXm16BoEjQ94LkxSBfAHv8kMidz8exeJDoH9imsHB95NP8kzFw3xACecUZSoPHPLaZLCey8",
  "key21": "gBRa5xgYsn2hQmQ6Y8iLGbgccjj5QW8G2cAB3KY92PCYGcHLxjq6KC74qzeHPi3cHLFoVhXFBRHGRxfWvmDoELx",
  "key22": "2eCimBF71KP9bUJ9LprwGf3eBFucKvsq6RhLVKv5eRJg6VXDyAVU5Wxo9jCzKteLCT7v39hLEpC3mw8FDnKHkY2n",
  "key23": "5xgoahYKyuaftiJCqopmLQUwzgeskCCmSeF9BTMKehpEssFgMHYyky8etLJoA4xrqpoV2xRmBMYcLYqDHqV2zUE8",
  "key24": "2Sr43icnX6uQqBXiviAburZr1HRZhTXTUHTa4Ec3jkK8Hfb9Dc8zuUNYzWaUNkxWrWqD8rL3d7QRjEfcox3V6Aa1",
  "key25": "5BB69jieXdzHey8iKSgTgERUNyEDWzVhL5NQGqLgqXWayzF6xs1WRNSsWWCRZhxYiX36Y7kv3UxoVNwmeJjFsewq",
  "key26": "5Gd6hbc8xmS1Kf1dYh4RTyG4qqcEjiPzzHnn8ZMkhPQHUbyMh4PR3LSzbQm28yyurd8ww7szAxw2HASo3tnpV2aS",
  "key27": "2QkFGfAFaP9cVTCkPhDLbDEPPsUQaXBbQDhmRdABLGGt2PEYeN4DmAegVmKPwS77Rp4FdgEs9vJu2nLwu4JDsa4n",
  "key28": "2GCGzmQZZQmM9PqzBc7Ez5f85SAUjvEL3EDMvQKQGYuR58BKaoviSuV72BkTPqHX6nZeh9AuRKUU7NDykFUHV9HY",
  "key29": "eFNJezaCmesLCUTRQ9xmjLAsRasX2NK9pMJtEVdmyUCBiaRbKj8WHU3FLAtvZEy9N2KzGuJJ5kLtFh83pxUSFDk",
  "key30": "56MKe5dgRAaM7stXmLvr2WSMXyZNp3n5Y8F6qoDdRgd8gfVMAXmYJ8BMb7Yt588FGk7uRgS4erJvRmECzt5mYdW8",
  "key31": "45AjRJve5ZbYC9pnHjgXt6nwCeJb4YqNMGXddAffrC8GE47JDJGCw5MZcKxfS3ZcnQxwL3CG8wDXrqmzqrcWzVjX",
  "key32": "3Edi1sbZDLBBYF6iwemrBHB3ffKZAyqKDfpgbamWEx63PxVwXgyWcpEkUfuXH5SyZsVhS2ubu7WsxEwJsS9FbByk",
  "key33": "3PMqKKPQvGnghGDRF15PzsbmPXa5LcWeXdqL3PnyuDj68E3xgsaBnuf7hsCFPGejzjn1KbYLKaFCEPtJ4D6dRKad",
  "key34": "47YFPjFj8qPUXAz2muUxL3RsauTDmZYWAWi9y23Phvh7moNgzQUy1fmr4zXVjVQNATdUmJayJfppoLxhSopQt8hX"
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
