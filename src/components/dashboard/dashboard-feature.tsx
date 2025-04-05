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
    "nVZT8XjHUp3m9nF5MN4ysWZ93ivFEBkfsLEd7LxLTGbY8zdJ8HmsxDBvdRfSHT4TL6bdpJDstNMFnTXWutm6bN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bAgM1qC148TjxCudRccAiNsm23WiAYRuFVTqPuZ7dsQsFWtTz7oQFcoRP26yw3grA4RujbdqiC181KYMbTc43L",
  "key1": "3fJJs6RTBvnqyZ3dJb66UHVUSKWTwq9fNy2TxudDFuqgtNoxUMunVPk1brSHtnEZ9NQbH4ufaQwRTSmwbQpucDCc",
  "key2": "3PGY92h4BwpTejKRQnN8WGkShkpZx8HBK2Wy67qXp6pwkwYN9bX2SdidUz4T51aEv5j7kMqTkYqSWu5Z66U6FmwQ",
  "key3": "5EMAKYMpfRBYUrVrY6S6S4ut7tHv5AQ4sWc9mXoa1nPRuZfVBYGmoCaYhwb5nLbaX6JLkG98rFyPG66w8XTddcZz",
  "key4": "2o1MtPuDeoGm94pv67M5VkLoap1f1oxYhZ3AeuJ4mLNsYUA4BrPtVwu1GTwwZyMLTneZFoHQL4Psc5StsdJb31Nt",
  "key5": "5tXaJPUG9eK6U3U8prDfj4EPrtyj2S3dhbXL74u3cAhDTGCuDkpVSkaNydaahWnmJLcMeDLqxZ1BAehedkppgGUs",
  "key6": "3YAvJeEFAdCWtXbHvt3S7FttDDoFKZcf9q9ppYkWM1XBk1gCRQu2opz477CmWby2K47CcxGK8NHvXVLYQ9cGk1bD",
  "key7": "5V3g35QZCV2fn1hCKdPmUtty1H1sqvDZqBgwcCFL2TPkvEx23u3td8TjHkydGk9i2CybEJfjuskCv4kuo2FfQzkU",
  "key8": "4sm5AxETqSqwA6mHX4okbghieycRL1UAJ7GDJPknhXBVy6BVXrcLQqjZRoRjJnAmVUTXiHsVnWQXRK7UrUSpgXAk",
  "key9": "uG6ZokoCJuNRSw5QPrZeP7hbLCYt7WSoeZmeaajyueo3U34UKdp2qrq23TkjK6qKZy2PKo1HVByT8ThnV7xtmQh",
  "key10": "4LSCq8roPvwFKGtFX5gm7zyKKmh3if7eRRXRTErYnNKM5Vii2Gw5KvRetSaczFut5CifRmwrTvnSSu6tWRLhJSwH",
  "key11": "2Nvb1Bkn5NhkYjtFvZiJorHicvWp3yT7S7hJ8dHWRC92xFDYWJHN4yM6EAfRqbSYoLKhynPMXjGjoNB7Dvvm79pG",
  "key12": "26L9eAogAqMgbcZejv1TU2Kbhnf1H8fYyBa7243pscnGKVtHnok5mdq6u5wJXj7a9KwgDuPHsBiLDfGcG4hNnrHy",
  "key13": "5DxdDco9paeMrhuRcdWj5WqE4uoaJrG4LmDoZkF6MZSHeGo9bhepmX78sg8qTsp4JLELy1EXHjbywndNUxDTcqHn",
  "key14": "4toCyJwEcfdethsNxSfrCfT6wNhXWVoB9NvEfYozfJZWi8C3cQf9Cy8tvnxFRbj7EQaPPXUkuCLWa2SVTU4rigqP",
  "key15": "24Qo594F93fE5h54GpE1L6DC41M2SVgLeNV4YsoCmuMZ5ieRcyyNunMxCvtKVYSh91nWYQKhQgmyHAmxQBW2crYK",
  "key16": "3xV83RyYkEdCrvicv9NMpjTCh2XPpEJsdDi6wGu3QgRL4qSenuNUahsmUNGUpVWkxq8vHdYeW4f2GPfsmYMTMz2D",
  "key17": "2GxbMSyhLrJ8UtpQc1aHAuojANrLqRbaXikwGjJcB3Fbavzgh3v1YYHDof5fdPTuVepjEiDgHJDhKBCZheZt45ox",
  "key18": "3d529HtsntpFSTnqJqme3fLdV9NLREM1MQujmf5yuPEk4kVHW6QoZcx5EpQwaTchzqvGZYWKaCsQj42yMC9fw9cz",
  "key19": "4TaJHGKmG2P8xFdXdx8FtRSmLFpQwwC6xTMSYEoJbjFy8Qmfs9KTTTZUjkG4CS9E3odfejHsYy9tY2UaL5Xmnf1c",
  "key20": "3hXf2JLChSTyvgTjbtJbTma1r7o1M9dBty6jmtThPsAFQbGQyEQENYsipkW6uyg6yqj3EQXBShfUTAxUGKWHPsMT",
  "key21": "4U8LHLs5gViZ7CbY2x8yYyaPWNx2nPSyDNwDjERjktTpZZqkxT2aPDvsS3z2c1W6w85CaiSF5zZ7p58V2SbHiu4G",
  "key22": "2DGKaGPLKJxABLQuMoXRzmuNTgBW1g5uYo9UWy2ZX1CnYZohWUcGgSXka1kCkAFLEsDNrzembi1iwNW4tRNTPTmE",
  "key23": "2m3FrcZj5VAXsLLYhg6WxQsz6kJ3N9g9Vy3g3jiXFB8pyuKZtJbPk6rpbj9nb3o1Qfn5JWTHb91ADKgsfkkAx3x6",
  "key24": "4DgZ5TB3EmBpKZAroJ8J2nnGVMJqjgnhziB7aQaa4k8hCP1C7ZgPXBm7ehRBQfDpFSPxisj3QEjy6ucDrh1bknnX",
  "key25": "5Xi1qiitzhHKA2nPA55wL5bF4u6d5UvmajLWR6pcukCtPEC4c8cX47HDYaefcmkrKgYXfgVWo7dBEZtufNLsZmni",
  "key26": "3iqijc3HNqqwatjwvFxLEoPfZnF7MBMgUZj8MY67sQXr16uoLfoBj4U5NZmYDAVTGWSTvw8rR4c2wcmACmYT45vW",
  "key27": "63zHUzmEH4sZnAyP4nLGcZv9Q6FVFQMe5UwGwLSHfcAqxoLZ8USXJLDvQ6jDNwbFuthESPsDc6FYFgeb55JSNWQH",
  "key28": "3duaL6Y79sVvbs3VX6bVtuCw5U6q8B7L99E8NrkZC6qDQWfDuPEVwWjHtVDmAuswxKsmyYmiFK4XQ9u9yNFxLK27",
  "key29": "3mZJfC7P4zaVTHQDWkhgQz7hJQQRRD3vUNb4zN4g4AX7aoYkHpstgZAgnCxdtobZEf4hFfkBqCfre1pamb61nEbU",
  "key30": "4ktSdVAJ6YHcy2vF3pm7t72cHUTG44ZoWfJ2a4MPbuTUk75DoDCvXtyfed2hyGS2ntQ4ztNLmf3VphJgo6Lqhv4Y"
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
