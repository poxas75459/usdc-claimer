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
    "5PbppbjYDG5YzkGpNGpghrLFRAvem58hyxR6UgRX1L1WYoS2SpFuT4FP5nstw3SbQUeyMwCvXhfiyBAA3a5zxWGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boTQbMPp8pqqFsNJ8iH7GtDdf5zWtkruWRHDQYehV1U99bftbxmftRzVfKooFMovbUw2NBocJVXxQBc6WE42z8f",
  "key1": "54uQHgbnXQGW9z3AGFdpwNSKi4zishiGqVY6QjBFDgG6MitXqSZK7ym1UibwFVJbXBVBcHsJ82WQjCioFpQCLjgp",
  "key2": "GEkvryT3oytjMR3sA7nSgzVRBCvJK3uwEHKPFSmh8TK2P7BqwXP8KEwdSohzWsz8ZB8i12vtVpXoJoTijxrpTBc",
  "key3": "5jzXpG64gA6yQyYme9YM2FGBEkSupcwFcghgLSDtAyVucwG7S8JsF9dAZeHpoebtxAGrhgURVDeAyq5YYepJU1oc",
  "key4": "5sp7h864yshZKbQ3tS3uLCXD8BuXw3vZ7CfsQudiy46yaBcXvdWoeJ4DmcEvvoZHBLt8zrG85Hp32qdVHJRpUhMF",
  "key5": "QjsioDYfkoafpawn9U7NWkB7NVfbva55qLZUAgfi7Ngx5PKE1SerhHmMMgwefDEL79AtsrrZhr4Qr4VNmnRj7cT",
  "key6": "LuTf1MPLkiJao8GtDVQuRB5DQ5rqHgAGo2nDmuXXQKH4duLKoEmNDajRFJ2J3Pu2McamUTBYtRDrbAuGq3AzYXg",
  "key7": "kskYzeYWVm8coVAM3j4JWgQupNMV8HJeamT5zXGRNv4YatzTpusRf7vQfssXW4aReN63jkLQA3dStM5EQLYPYkw",
  "key8": "5DCy4YfsxF88nvRWzvxXhfchBthGrmTS4SmcBm3dUFxEcnkd5yADmCXR7sZnWaqC4oeXwZ64DmsSsD5oxvxZqbqY",
  "key9": "2NZMrdRfrFF56hUJBumAkxPUgModx5jGvC5uyub15GSzShMoJbCtpd8JvinYvTPdZKL8aQJGzmjFaDhL1nwJQuFL",
  "key10": "2xwhgfUsNcdyZtTxCXW5x878vqgYBFW6zo5WoqdW6K2fFyzx9rAscN1wyotJdKgBwS4HzSwiLNU8HRtRyvXd1TZT",
  "key11": "3piiCJETwzRhMi6mfUxo561vUoKLLGYVga5ywQ3J5r5x3k9NnYZaJBttFbpBWESJLJ9YjoA5Bu1pziEBva2tUMLr",
  "key12": "5nfSpx9yx5AVbEX64PGtnsfCX9Fyok7wL4StaHwCkCt89uJCKb8TJzMDTU2kr3CE1Hkayriyo62Ko6nD5ZKtyLoH",
  "key13": "5ukwW1RTXcv21ZbsQBJsMsFJqYE4GM3AW52Umx5XC9RAb6eeYDJ4m2H5MKreoX3cVrrUWQpkiRDnm5ka6dyZBMdU",
  "key14": "52THaX7MBCaWKhohpLK6vLeV7xWiUEWmuxTdS2m4ujBJkqkyQ9smohDJXp5usiofy93E2mu8Lpxehtx7P5cWNaed",
  "key15": "2aGadsLYkxC8yfn4J3fx7Tz4CrJmhHAQY41b9wXTUXYJFXrpP6nutZ8L6conqpG8R5UW1UWndpnaPi5u5ynDRYvF",
  "key16": "3uiTs58sGL2Q9vURK5KkK8HgUBDa8HUDjfYoddFpLLn2kw9vk9xZtkR3LGUs4KdR7RtNUJri3mZaD3x15h3JTo2v",
  "key17": "5LrQxTbhe5DE2s9dKtBq6T289hKzjPiAVyC1Tr9tyn5XZd4cuTSTMRcph6QW49dPz3QtRnKkBkoMcxVo4gvtiqH5",
  "key18": "4rFTeZUbatJiwxRjR7R6FUjexctGGfTGXUD3vnHJsGwNEfQZq34HNTsrfgfS4RYnLDAbdRzaY8GNTwghFYvGogjs",
  "key19": "2s7a344Hp75zAKaFVJAXRyog99CzeJFEMWWPr8K9wtj8tchsBGCBaNxnticFvky7ygJEvRnTDEpYoDy5G89yFP69",
  "key20": "3J3DZEdKE67Uy8Hca3zab1B857qUGNpitFVW2hcfsroq6s3Kpgn1JDNEhmdj3TNkbwz6Smo4uBdzn6df1KLXDQtD",
  "key21": "3h3RnPkLtt2rV7VvnpZ9BstLzjSvaztZU2picYiBopY558Q5x4dybesqy71Ck37Jv4P1gPFvhsdG9FeGt8VwKoYN",
  "key22": "grQ4QWrjo8zc7oNXJ8dxBWGmtWYXJn6eHiK9wLh1V5j4tBcNK8XVDpDH143CAjWX8jveFFqHaUqeAa48q5UjQo2",
  "key23": "5aUuUB2DvbkmcsbYYzeKdouje6GjnaDySURRSYK21UVpAohMSavGWwtYWtj1Mh576THVViaPK56caoow3cbyjAmv",
  "key24": "4azqr3yEjJXPkBvSDwmaxcYH2nK3gq298HuDiQeQPCgrTceRHsgwKks9WmRAZTArYeYphbbiBjBa5fj39krnpVQd",
  "key25": "3mknke5L3EoF1gAhDueNMqV9xwDNmVQwuUSgetEBRBBMdUpQujR441FWfM3RRirc4Eann2iUMDSTiDnVPfTw4qtJ",
  "key26": "54Aw2fHJTtkuMwHHQPWuvhv53ASYVSz89JjPkBzemju2JeYt6pNyFWwdGDTDs2iuGfgmFTR2GJxpZBA2BXUuAbTW",
  "key27": "VyKKMu6t67QZaKA5TwigJHNBzfPVVbSFF4ecFMNsj1Ttqr3o3T9Cxu5DPVD979FQpFhBGbGUcLECJL2Q4ttnJ4B",
  "key28": "28qtdg43X9VTAhsSoHkDibbKgKvcZohtdc3LnavYhR3NGWwUkWAHdrQPu81rWHgktoq9vUNr56WQt1uDrtHRangs",
  "key29": "fBxJZHDmGsqFoR6dSvPm7RjNcEiZHuYaxBvdeWiSr8yxTjhRye871KKVLY1XK3JrHcNNGDGxXYBChwmhrKxvoXL",
  "key30": "5iseJn6AeDhLfk6jNs9og5e98jiKoq7V1E2cHwVVjNZGEpGqxmZLSXEjg5Yt79CUY4JLbuSn1XCVUFFof4x3d43N",
  "key31": "4CzPKwDgBAm8tqZixU4TXQywgvJxkhoMf6uEJiiqYh2chwk1yvnpoeNDnBoZZf4zTeQzUgiCcEprJvmEuHRLQc2C",
  "key32": "4YsC8CjP9dUyf66PGm9UvsCL3JsHkghCAHJqaEftvbhUY1SLDsTmqfxG4A6XYBFWtFmqgctFtfwfhL3krtK9JWsC",
  "key33": "tXNXHgDRVLKCFprrVCmQvvdZCFpvYqG5FDxWx3iApLDw6WW6HTh7n3eoY5cd8jBxzF2cQRECgaucts1BK1Jry6m",
  "key34": "4Dnrt9G5LHDNSycJxKKBPNgrs3ExjufQfDJmux6Hsb5wGbx7diCbkRLtY9grFtjp1qkzehQzcvy4pxwQGqkP8Exi"
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
