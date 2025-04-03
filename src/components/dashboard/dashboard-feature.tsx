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
    "3ztTN6cV6mEgXR5pQ6GC5Q9zaqjiq25E9jFuKB1vETYDGD2gXZ1BbtBBqpqmd7KNFUN8GLrm8iPWMxmc4dvSwLoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCukCF3D7medcf3BRnxTvd3jPsJiBkYABG8MDYwAhNvoBzGDbEECwcdvcFGqWPEwSgbZptnyXaEPXpM6EGivGKf",
  "key1": "2D7i9cPtLC9NPKstZcfsiPz1sv2Aw8bMhPbBhMte7dRF6iFiESn9Lbn6n9bN38kmeZE5vtrDT6sEEcuTYgCZNX7w",
  "key2": "2K2rsE1hZXAdCuT4mSf1hg5U2LmEpk4u65aiHH2YysXH4XvJ57KZUZ2nFtJpyXucxeSrasME2Jv6GewbUDowErdo",
  "key3": "2UkEbqMozL9evoT1u9aERuKVwZHFQjqGjrmnLqh1ZwTeDzzyNL8aoxXRmWfFPJFKY6yFTfDkeXadmtdPyifxGW7F",
  "key4": "42g7MY5wGepyvEbVSCcxYqxBy4TxhuwhiV7G55ZkNEiS44vnUB5ZLGwRhtayCUMZS9juGPsYiFtXSVuY85Wj4PUy",
  "key5": "5DVtVdwFt4gJ5YvancqizWcpQEoMCKKYpGFjk1Lw36Mcsnj2BYQ4GAhMroL3MG7RxRNYFxtA2p1NnEFJMNvyATEE",
  "key6": "5jz7b9AzuCBh9dx93RhU4eM5AY6tTbWMAjkKSwgV1cBP9YhF7PKv7bCzG3k9VpxkU6tL1ZBAwXaxfUFBkttQCmGp",
  "key7": "5oK6RFx4BttKLqS7trqWiXu3whH98EvHdkQbY4wGJLX4u9A35ssDicuxrcQsxh27kmAYsDdkPtEEQk8f5Vyb8E6t",
  "key8": "2FCPaR4pRHTCDHc9ZBPrygNzHse7ASEtBhkDuoYs3AZk5ZMXRg5soW3WZV2WGWLGLmHXRxQzLHoeio4pYm4twnYH",
  "key9": "4NUbCKUmGqJEt4jz3MVqrTFhddLvBA5axpwUWcuthSQZ238rtsJF1rkWx4zZXFF71UWCAfPrMY7Ti1WRsSUQYkN1",
  "key10": "x8PCkEyZ92EMSniejRfMDgBasEk4Gf5e6tgpxbxM8VpxQMXoBaaTH2kLifijB9RmEAM5wx6fCYPVohtophm3csT",
  "key11": "4cJBrwPmcFK8nAqqjb6qdhFXEaTCQXy2jWHKHfcRpcuMovXD6Uou2Kdy3aqarZKerw8L6bn57Zmz6gunwsCEhdnU",
  "key12": "4Qqv9kaE5MwybjqRzpEc2XeLDNYr4j6qC3MQY12msBo2XAaRqLyLT3rzE8RGw4GXGPTBkoJVpL3rrRvxUcirovsA",
  "key13": "4RsZdqtBznggG4nzDsNB1FUMTVVfXXCGLd57FC6RxHh1nqmSnkALjZBh9dQubhh6rPF9SCHV8Xg6E7KMXc4gWyJ3",
  "key14": "4Uxrd2XA4xZDqSqBnyhw2Tk4BZZnajPFmpuHxDiuHAacCHewG5pqTwu5fMdwpVhbdFFM26ABaprXE53LuJ8cdFJa",
  "key15": "34M9c1RrMHEVDjVaYHVta3G6MXTy3EiqcYtXpxEpccGgSwPxvX5E2cqBaqwhWgU3N1FC9mU3Rmd2KgEP2n4npTTj",
  "key16": "nYkKZewesHy3QZJ5pfNit6GbswnsTybUuPNWVaKUsrXcheFpiL7EZmaeg9r17jRj6nM6jeFWs6EbSr1u2LByJUU",
  "key17": "4AfBadwD35vzji1PGxGUjWabuXorhJWB4bVm11wiatUP4c5M3zjnSLomSerhV3KfeuuyawjNX968ZioyADrHBwvD",
  "key18": "4AL2w8pbensg9C6QRTYUPHisJi44b7vFxFJiHoY4YZcudwp2GFSz4B3iq3vTCKvZU4jqYoFxiJk2j6tdFxCe5S8z",
  "key19": "6tvREcBjyrCApw35YatzR1oD27UXkXVMDrxWDE3GHHfy2HKzWzwGMexYG81gY8vapKiCTv4JdNBCs99hNwKx6E4",
  "key20": "5533VEoEM9SSetubTh5wscVSqcGFC3e2k98JyXwsR138QiEuPmDq1mJVSestwNq3Kfc1MnQ2a7uKeu1zicx3cgzn",
  "key21": "2ExFGDFH2MN8PsjtuhXF8UppF6AsG7Uof7pksQQkUK1oqGWwJLsU8ruUHx8xbb9UiWhEoVTvvpqXhehGAj2S5Yx5",
  "key22": "DdUfDSictYhgQGycr2cL3dgpCPWAqrW4zNYYWKFA74Ke4i5BuFHhBcNBqZ6vctVcJcQZstfFXwtKyJzUbXMHETk",
  "key23": "2GkMDy7z1qX1tF39Vy89Tou4a9Hy135WEkMLzggGnTgHKszmFP9x13G3xTDiRgnqXTdMp5LdprMWMVBocKPKSL6W",
  "key24": "4QJ4N5gNZ3PHTKcUt3bpVzbfnUayz9iv37i8Zf6nTWpz1HqjerxYAM1bkwW2oH5Ubi5mtXcrpxuF5eT32crarZfp",
  "key25": "4snWqwZM6cFSdjjUCViHYoGgQ5y6PbPCxhp3gg6yRCuwzHg29te3sBvhvmJEQ5xZRF15aiUcEmcx49QjyoBaYiRA",
  "key26": "3awU9ypTTGrw4uNyTnUiw2WQxPhMPUmJoNEhdMFsystypwXswxoUND5uLyrMhAE2UzVGW6CGy3xJ2sDophgehKDC",
  "key27": "228pbdnfPzjCY4AetgzWcJkVQszFLYN6rWkeNuvd7Hc4vFwsm4P5mVJy1qzUvfZfWL2ufZiPZjxdfoKagYusYf1g",
  "key28": "3DNFKkW54WdWBDyQQ51ozD3ess7TZa1S6cTQwXptkYavbzvqrAkTPzJ6jkSirC7ozdeBwzX2TfUqreG3fHfGTPwi",
  "key29": "3ohLV3urCLi5J1k4tbd1K9hxDPCbu8EMMJDSBV2MQxDPa55DEUKrri1JpDwEvGiMFYLQjLBENUQAxSYR5TJtHax2",
  "key30": "4TYJEydL5FTbnrSPVwraLcEX9xMZgkJebbKh6stn6wGsnPMTpa4PnYqoXvR3p2ub9c7XwsyZYrQD4u5fiRWsugd4",
  "key31": "9DB2mjjStLMq7Dk4HXESBLu142R7TYS5YH4HGY7aEDyzzhu4nN76g6aNktsTNX3We9Dc2iGNKeA1QGbbdkP7WwL",
  "key32": "57EkF2qbvMwtydM4w64eJxRmDiUkmcNacb4ow2ewgb1rbm8kDjGYYeexpKEYJRuF4YA87RDootbMpr1R84PUwAbb",
  "key33": "3cwbT6sqogQVfc7miLMawTj7QVYx78GnDnLCWVVj7x93fSGoz4VS4wQ6sBfN3BB5oVHssiEJtBMK21bv3h1dsTQr",
  "key34": "3NK78ZPK9HczrPYJe25bcQTscungA5xPVfkxKyZQrzpHT6kqxKhJzkUPrzkAYzjGxsekzJYdBZdPi3oXJgdgotom",
  "key35": "5mMY5fwohT1hopdRbm8uaozcdZJwop5PcZiruxt12XSY4YTiK2CbDxYRD951eiEo2akjCc11KqSJhjqXpcHD4EL4",
  "key36": "3jAGUmw6sxRaUyXzm6NUkupPMy6nfVnkpxKnfBHhny65k3wAqnQogfGkmfs7bbe176UM5xKyUY8CFj8sHZ7m4Tg1",
  "key37": "4Tt1E7PT6F7bWzR3QqCJ3Pr3K6yzXob8Uf7zsUxFDN3bHHT995Cf4ZbfQKWGKxF8CPDnJrEztcRms2YaYp2yPao2"
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
