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
    "5Gt7w8JioEvZs3D1KJHpipFiJx5CCM5avL7bPwadMvWnvuMjYpu9Q9EVVSuy8UPMiYxv2TLfV41Mfdx9127ccqMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21TRbfhkY3DoGE73xjY1cWdnee2vr7KK2ETf5ztgKzs851AUP7zHyM5wF4QQVPWaN5SBipam8295TgDNKCo8nM3Z",
  "key1": "3Fkt1EhVodFaZ8rExU4G9NuYQWuzEumRPBrCEJmMPzwcrW5C9H8PhAfRkRJnfK5BsHFGrnWHqDhMxyEJMFS4AGZ4",
  "key2": "3BRQEQ4tTndsyfQn8rmbgsRNkS26QmcNGjGMr6WkeP5NeSyiCPfnb2WCALaVvVouyLmjDepR4byNzaoMaSyBT581",
  "key3": "2tUF7MjP5V19WZjcF1vBqwszHbitBnV6FXg76kag3rZip7xpFPLhwRWRPqGs6mFDeMCteVcM14Cn2qWgEuPxANji",
  "key4": "5CzWcF3NERjBmLK9kfQEj3UZycoCAY8rebupEpoqUaUTxeKH6539bcAVq2gRffbag6uqyWgscCP96jRo2wnqF6st",
  "key5": "zWKLBDesfdDQWzq8PVhQ1fpMLxAS5VBfC1URiPPrFTyZqgAcz6Wa9nnMB9p2oNvEmgksJRxvNDkrzgDwXvJftn6",
  "key6": "5pZ26DfLeP9zAn895NDjcSBGAGazKt3mLjp5j4xxALQzjBbkzPhnbUvEQ6NEXiyumTnc85VVbX6swmmM8rBbNAZS",
  "key7": "XijJ4J4bEJFV1Y4LNZd1dtbkbdvHWujufa8t9EviNKUFzSwWGPMK94Fsz53AdbLLS2cCYn8AXwvuCGareFzenSC",
  "key8": "YNFgiHtKeD5faEhNfDoe4EgvSJGvz7g8Hac3srh8wQMTNuXYXHKgbV7rRng3Khcj26G9tGFG4fiw3uwn8Y7vAeM",
  "key9": "2cEKE8sFEteuaimJF3Ec9eoyYBchAGaejG5m8zVsdM2pi3ZvVRW4XeM3Q4QvfbV9jFMKMuyrEPrHK68biEKsy7s2",
  "key10": "5FbfqJTrV5q3edBjS3i9f3JR6xarX4p7upJvPraxUDi7AJy93SFa77wcKVMHR9xTLBHGkJtZ5AgZAjBDkTE5uT91",
  "key11": "5fdq4ZEyNWz5MsA6jRQxMZxW2wCKEdyAkthkV16APVxa4ug8eTh5AeeLQYLMbLVjEf9pkBpZLgmBXYPutLoQXXp7",
  "key12": "2oyv38V4qW7YkDGmwX8RaPSzH1RKRTE7BASrUkJTfHA896RmSrD7M74GcTksZRk5Pozk2uCA8iyLnZhQb9EnAaDU",
  "key13": "59RvZqPvEfnjmKEWCYMLS9yKUWw4nPnHCnSsssUnccrCvvsfRA7K5WTpPcQwgDVnULYZ97m688TRWEveYq13dxCs",
  "key14": "2uxcvJK9f4hcNcofHGc8CMkUA3sN62FvPJCMPEnMxTZDzcCEN1yUtGt4txLkXvCXTMWEymDEwrMbeYN8EbrvRV4d",
  "key15": "5zeKzUunzTGwfBu3EcQQ3mh1xNkLyM8aF2JCtHD87QhFDH56DnFSpY3EF7YL72STEbFjSdEm8macGxcByszErDZw",
  "key16": "59X4d17rGVgtgLjDBs2kEK972f5zMRYoewAXVdZh61RKMRihoqV5zWmdouQdCHtUFJrNxtLEe8ACxxbPiYqTwtNN",
  "key17": "3zj2CETPZsVdVX2D8wrGVZ1k4JXcNW93dR6mJ87BZYkZBdDuz9pQ89LiGCKaikmu5g49vC3FjvsPVek81wpzsbTu",
  "key18": "392iPKHF9kAhHS4xEVSqyhRWs6ddAxUTaD1ynaCv6jFKrTfLMhXKeLwoSMpmAaDLFaAkJBWYJGxqsvCSccTLJiNx",
  "key19": "33Bv5pBAsMn2pZEivqTWAh7RrHp8dqftKtMBrnYLc9jQrPn3TvAzjQQhn7skdGaUr8WjhpHaCzf1F2WNpujNgxJu",
  "key20": "Hdkod95Cf7K5LwRT39kLo5YMzjGNK7r3Q2NtMBUb8CNqMNM134Hu5RBx6c5ewVUxUdJP32uQYFd5duAeUzkN6VP",
  "key21": "2GUfVfuWoL8gCEGBddwf6TjXeeHP4nEanefLZfZSncuGmkgUSpJQUXk55sLw7PdST717X5SPK4W5XfbCjX4DsnrS",
  "key22": "xzqufJTWrXFFSk96LQeYTZUPbc1VmJKZAjq9unahnmEncyudPYthwaHgZVUjWkAQQdf8U2KrK16Mm7vGjAsAx83",
  "key23": "5G9exWyH4QKjMp2XuC8yzLdF2VX3twPXoajDFYZWdQTckykxKwXE6gpxdeoftLgVyJjz4HxYNF5K9BEd53vuTaXp",
  "key24": "2PMtNbTUqT45FAPB5TSDB6xB1ps7wJNvM5D5by1nMCjGBfamw2kjetNJ8WMiMnc14bfCv6odxxEmy3fdZtqBxp2W",
  "key25": "3xCZuKb7Yf4EL7efFFJwR9fd7gMCagEp2txCk55Cq7rFeidTD3Tyx9wjr7JzMACcWYC4wMYhA8wkPo4JhJqH5FUW",
  "key26": "48RQHnC58EV5DdNwApM9fuBe1UJUHDuxvNUnbpVXxc1ANKTK7g9vxTSHsyoMk9L6smz7izHqxLHSGZyj5PEZboxJ",
  "key27": "AvtqrRTm91g2WVMqDBUcoBLHK5LDsFyNUHMtYW8jazrhq9nyX4YjUZo2gWGCBBCZ2rpt32PnBU6tRTuzC5amLWE",
  "key28": "5J9dbnBVXd1rvyPPxq4q8kEs9BDk3JUDyv8hkARUAgcPvWtvMnSyEgySNWkkWMih93ncdQEHiEvCWT4VqKqqAxFn",
  "key29": "5NBpshBKFTvW9Njc7QKcJFSPY1kFpdQVXSMcMAw8akUYcgWmkrjzQXxAyN67aNFHjFxCXuvuTJ4WVkwjnypw2hVj",
  "key30": "37Zou8ERGQdUoioz6T8JzTJr7dTRhJ6ZtEz8xnXUJeJAK8TzhJsj4iCivUxVb35W6bjuZ2PLUyFAoZrXeh72nDH4",
  "key31": "5YXF1e1vaQG8wVCiFgfqCvh5h9bHHwgBh3PWNaRyXVkUo6JTg3WL9r5FemA1ET5NTLorE3UbndjWNEyHDeModsiB",
  "key32": "2TvcbRykwR1VUKbcPiSvMiW2mxxXGBpNZsQUQfiLH4tYhifeY4mMnsuj67W7j6wAKAPJG1r49McsxuSTUWedtz9T",
  "key33": "2uFKpcg4DPEbwnKaVSp95dgrimy3Lxygs8r9yT4BAWRCNp8GpncRbdLP5wyJFdE5Ln9YCHzzKdu7kmchLyzMBChA",
  "key34": "5XtDFVF7d68sSbsHsEtLcMwDsJScot3vfeoHb7J8RYMFPsvktp2MjjCS9QqowqSRGv9rQ8rgeUN2zRWsGP8x3htt"
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
