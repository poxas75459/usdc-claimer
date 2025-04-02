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
    "53gSHdNBaGqsmoXJxwVpA6HHP74roMa5inicWcpfWiy149s41krdwQRJkg2NjpvYMWBNJPhXSpSbxL8ddoKme8JB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXVjDmUYizYvX4oKJpH1DBkQj8QWuK9531YG1aH8YikvjuBqYRyBpP4pMPcDv44BpqqzuDEakh9mZLkJkEPb35j",
  "key1": "rNsv82xEvSuPdinbF7SsCrRFEketDWNoDzgxG8MkkL9QSdJn1bhyezhF3ZZPat6H23CW332ypckmCxKJwwLEwJ6",
  "key2": "3qboC81gvCqSkPDcrRUhjJ2bqKABgDUQJpH9Gz6qygzBL3zeT88txATiTY7ff2W6L5DpYDbsRgC59FL8ArzW6ZNg",
  "key3": "2x2AKq4SuFj5J6nWhr4YoLFvSovDwaHwVX62NeFEQmCK3Lf8WAFU1V7h6Kj7gHu88TauJMEGMiZEbsZRaDxW25uU",
  "key4": "4U3EpZLF467MT5N2ck61ndoadiAZbJjaz2PVF4XCYbxp9wYb8yBZ3Ju6tWRjj4MJSBkcqXzYBhKm2zCLNw97AZud",
  "key5": "LogNFoA3VTh8xNxvbxspmejnV1DCTbr4rr4eprrZUfj2RXmgwa3orFe6HcBUjHemNqRsdG5k2VjEgVsi7FeTVc1",
  "key6": "3v4H5pKGPdf99SvEzitvPVpHhHRN3gtR911yMMsQqejMz1Bct9WZcvsCBumDJDeD4waq5fGyYYSrZDkYEetcB7op",
  "key7": "Ps1a8gcPxUHemMFzQTmDCpbPrUcd7JbXobZu348pPateC8TqojdrWEXxdDQU8GMvL4JVRxmZC8XYLHxUPJvAeH9",
  "key8": "5nuSVV8mbmzCM1C43oH4rw8MPimhZV6ohA5NxyDRRd9hAAb5Rkfpb23t5gNvcZFWuk7hrcWYxa3x62NNe7PMUHyg",
  "key9": "26agbUN4fu1ZiQZU4yZmUyPh5yc7LupkCyaCC2NHZzQn5jWbXEz6NKsFSNHdB11Fkoz3JQ7egbnR2rfx1DHUNBzu",
  "key10": "6eaF2nqbr1iyUwpHxzy8PruKh4ahaAGuiEK1FabLv2U8hLfnp6Mm6aPK8fmMysd1x494o4WAC9j5y2fvSvtXGNC",
  "key11": "2EQ85H2S5s5u5ZMVsXb7yyVNEgdPZozNWVEhw2JLSr3WdC5yi9jAognE8jUCCiuoH2p9GvfReTSeU1S1ztzx7d1b",
  "key12": "3S8tFiBw3WbAEnpAKu4WCJCAcpYTCs46xSsuQd8uZcLjTMcNoiLNLuRfrdM2riRkseaWDRiKQyS5wmeAX2YnG8a3",
  "key13": "3rQHnsouwVGV1PNeoqLYNn6jQSRDyDaiPYuwD125y4pptp2ycAN4hNfctbHVwtJ1wsSGHB2txZbBaurZ9fFHt6hW",
  "key14": "oUw9SqeK6davFH5ryaBMyRgkkrrmxrzwXVA7y6dvpe6qMZA5UK87KEYcFwV9QWhiuGexJnVHNugpVkGrAvQe6JF",
  "key15": "4UE4NDNkFHCjQdZKEanAVPkZQ16e4PGzGH6wMrXXRRhjrJ9iJWVeEv5ieiZHQPjcFYhAxKxg3KsycF292RU8bdXU",
  "key16": "2QR31GhwEyaDPNJoYLFo44cfGVkp3NRY7qhGq5tWPQb869NACqWwY9vZceop1jz6pWumVM7d7uVphjm9SY5P2YsA",
  "key17": "4WHfz2BYD17AUrEdGvpvi8B1G6LPLYZ3bCcKyS9Ua5iAvPaRpRGwAwHEba3Qf8SdY1mQbuhBAmnjGBB2amVn9vf3",
  "key18": "5bPpJCTe3J9piH4vod8EYPHCkAjwPeXJvS8W9zuV6mENRPvTV5PGNuRzfWpuMi14fyX5cc5hY1z6Z8hYbzf6Jr8d",
  "key19": "3K9Gf5Bs3zLTgqELZEfVVdhX2n9XSiUS4GztPXmc5F8CaKwuGdZJuS2t54QJswXJB4PiQd9aVfS5VpihNZRynbz7",
  "key20": "cYu4GjKnA63yobVV1XcZvPt1Y1nNSjDikRheFGW4QRWD7o9VKbhxydoEbAUbYgCdXuty273fGenVy2rCB1fB92m",
  "key21": "4G42HtTqDzMzoZMxnSjqNMmDHdddjETADfHoyorUtdUcgcG1gjbHnGqdTTR7nFsGoxLg2ius6W8Ctk9QhKggB2Yw",
  "key22": "2DZ9WLN1ytBkBbhPECG2rAsoHgDMDAwxBt2EuG2brbhTffN6KRgLShowAkQPceAbKCn4P9ofbn9wc9KArQa1YtFL",
  "key23": "2pcZYMoB4V71anSh8M49nUTgB5vDYiZvipdZj4a8XERVVUHHTTfR5yzwc82Wxjw8BGPZ8SdhZYVJbaAcRm5cE98F",
  "key24": "53bq4JBsoZRTDvSNpjGXr4ipenedFx2SpXrcqz2bLYFGhK8k5bDbxugW6vwbi117hsd49P8k5KG9M3nNbK6U8V3K",
  "key25": "UWkYRa9GcuHJwfjoGP3zNuvDmRYQDP3NXQ2KtC2FgfhUFVgTMkRuBmPkKeZQqYFDHEgAw6aKp3dtPibVufMTPsh",
  "key26": "4Rymd6HjNnPC5ZDyLCM3P7BG5YavHMe3NxrdeyMa8xCnzJHooNykR1L5Y7K1tgSkM2NWw8JzccDjCthA4SWUUdcy",
  "key27": "5DLmpbT9NC8EMh8KvXrRCruTwEQw7mGMRLp7Xc4rBwAjgzmvzm1QJwhQC6pDsDjxDg149TPuP92wZKD1mopo2PCk",
  "key28": "gaBUXf2D2WNRQCxkEZRWyP9ac3XDbjN2Gys7Dy5CXukQ6bCFrES2r8ueezPFGrDiviuDYdVhz3aJwUaDHFdMr5j",
  "key29": "UngGReJdKYwG8zjNN47gh96Pw3fzFHjdw77vyHoqsdgTar9gcxXS66aog7h8SWW9ea3TNYQdB7ftZWtmPnyF9G7",
  "key30": "5v6hJvYGP7M8CF5UAzBdbqhiDSV4m8forbBeTqyQKwR3kzR8hUMJj3zMmwZgxZtzGT8ATUrmpvpqSu6BWApsKex1",
  "key31": "5TixJRZy7LmQktzCgoHeSYj9LRqMGmPKfXZ789AjbJ4ZQFfp6y36vUKVYRLoDXvGCKEVkTuVPd1Bq67pHVo7zHes",
  "key32": "3k6Gp2YesGLMzcj8QkcbRfSoZLCEWUXDJ5VSpdm2e119VdYYTSBsFbKkRVfb6ZXhH4mZK1vwsi84Uu5ZmK8muokt",
  "key33": "jXbrFiZnXWXz12V1TBh4gU91QjrS1nP4Ecdp3CuMdV2ifANvoh1esZxR5HQQmTzRbEuvadJgFFM4XBLwALGF8nR",
  "key34": "2ohLH7q6YkebKrJ4WAoDR1r4qSHSvEBaf2TpcZxLg16obyDsWNDqGcjrZixkKgubrKdfGLZAbxUUWtmqEhxpjUN2",
  "key35": "aFpDm6PEfdoYyovbMpv2JR3ENyz3h2LJUMtgvjbVqaAaJaMyM3NnMFPuCU3eNoPgANuWt4qVsys9Hwnzs6KHc7E",
  "key36": "5ArFAHJEoVwnB3eVz7BLvLGr8dmi6k1DiZAAKy9Qk3eKvjwkLmw4WCGBcsr8jthwHCYstKmFmjNVeA4G6VVcApkv",
  "key37": "27sedFFPLXa4baGyxFKYx5s4UNHt943NSmYJqvx7kKYUhVc24dbYCUFXntW4jeyfZuuyetB66cjJ7pcsDWHEF1er",
  "key38": "jFWFpA4YvEzTt2NRm2ybHBBiXzkhgtaWVzAp2RdJ5qkwgNSFYFQaUyfc8PCGn82nYhnTG88mPbxMfL7kSuvPpaH",
  "key39": "22VwpucCJtN9k1xFYA4dEqjLRuoWgXMYVELeouyAQvyZzF6h4oHBS2ZJ9bCjytnU3249BpmeBejDZPXEfHZcVXwM",
  "key40": "4C6kRVkTks2AbQntbhGB4poWJRz8Rt18mc9goMnKUehAqt4jsraUeiZNEPpbK5U8723oXcx78A16uYMxFrWvXR1H",
  "key41": "4bBwsqwvnvB8vWtT2iXxFy2HFbFonvb94menHPCmq58KYecstcyUH6cR6YLsGxevksZs3MknZYKSSTZbCPiEq9ru",
  "key42": "4dhKL7e6nWww5iV8Z7DHUTo6FRUpxeVg4Rk1C6a7ikdnfx99GncQFXWXHSgCgBuPf1cfexSCSKkweqz7NyxzXLxf",
  "key43": "3eJXYdzNgS2NVwYeUbP322oBB5vqxtZf4k9RdiYxqQ3TeVHuhzFr4gwJXWAWFeJHtwA2hv3oCrdnw4h391PTEi4G",
  "key44": "43ro3eTEwQgtLoz9aMQb2qau9vZcrZkEPziTD6vtNufQPVFjU1QkBzboQsoqbA1XwpGuSS7sBcZ6TAWhvBQycd2Q"
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
