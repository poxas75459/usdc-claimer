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
    "2qRMJa3nAKwzNtcjJxThzwv7RgCJEEyWAGPuCgwhdhwL3J4zNJ9BmFWedPnAWQHFB4Zuwokx9Cu8P8gAKbEWt8LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PashdYkKaNTTKqQ2Sde3r5bRNUFM9HpuFcZCqb2r4Zfjd7CxHutLC9PLYJnNMdCfgJKTbeRP9ZmSKtBy8LVtgt2",
  "key1": "4d82PipZaHJBLDUVwFwTV8rQ41zT9TDyLuZjcXmUbyccj7sM884tSEDUARtR8SJ75YW93YncN4ZWonrTyW1C8Rjm",
  "key2": "2wUDfjmU9yftrAu3QV73MwrYmiETsg1UfgiVL1PQRqtWiFbWgA37S9soUAtdMpYoqoSbBGtxCEEERdmD9j5CQtJ",
  "key3": "63jYbicNrfMVivU4F8FX44kn2CLZfg4BzgQUbJZaV4pHDbpYb5tsqZh6roYhrd54g4B8SZdKzTWeMpV9umAC9tKp",
  "key4": "2PjUz4v3YyEZ2oUv5i9pF9BgyCyP86WRpp7TQzwHpdno4voakwUJkM5mDjLrF9KMW4z6j4K7R8LGbbCpkq5oy8ry",
  "key5": "4XqBTuWMiJytodChGEMpKHF5QmJ5Vtkf75uthXL3TecXJjSR3JpRmfKsC7YveeqQuHY3VsRqnXvJ7JnEcD5y7C7T",
  "key6": "euZ8p9NVgUnSff9V2LP4tVdSK45ncEdAprjeFVs6eUZqV4d8JP9RmtF1e3PiF72QPEbFUVqJNbo5u4iRUdDWmgs",
  "key7": "PRLJ3shskvaT7xPrukkMrduM8yLSCK2P53tCz4MrHhyTkEEdCiTLa2Gbx496T9nxUZVy97cMMzEgusm56EN1oSB",
  "key8": "3jUqcJSfn2SRU8FeLj7rUprvZFhYi8vc45CqJEZfpNjkwWPkdrXjLiEid6taLkQfVtKcJJtLCnzooc1PiB1VDYvo",
  "key9": "3oDr1f4tDeQCEYch2DETBgW4iqRxrXkPtVqgo6PY72Gn71WGnvh7sz647NQSv85BbcwynZZx4DD8ot9ywpUEUuk3",
  "key10": "4ypU3RGQEccHt5sXhdP8Sk2vVF3NYt7dhckSqapNTsMsprTrcVsRwCDSKq4y4u7mTHLWCgWkxV76cZEHes2vZXNm",
  "key11": "2Gi6g6HDoCZdsJff4Kh5uBFSedSYUVtysBzVJr91LaLDdzADN373F4pJ8ALD47sHPEvL39sGVXKsNRuAMbgEhnUG",
  "key12": "4aFjpXpaCjq4EunhY6YihWvfWSzZiykXumEnNp8gxYhxHDfYx1BRS45Y37759MLqMLh7UxJQq6qSpSgKGRUsKyPi",
  "key13": "3RKXYtCrW17Y1vDoBLg48si3pKNqQZFtnw9rMjRQvRns7v5yyVamQDbgPiCATufuug2HwwNSAGoueeSWFhYNhbx1",
  "key14": "3sxuqr6GCJGR28hh3CFJPRKPvL4799icBSmwkb8MBDSKhvavm2HjAwSFS9AMf78FGhxN9p5JGbyi43vCPXGz3Lt6",
  "key15": "3BkJowMfrEavdUGytbzgQmELBqrR6981XUR7qGcC7vezG8SnpnQPCxC2SCE16fZtLTkeMxZxG8NVTbF49TDXfxiM",
  "key16": "RcewcqCwrnhHXxsBeq6Gi4hp26j4Xg1hF9PBj51xCEqQYob38uU8gBMeV5UVREeFfHdUFP5pNranydZbaojByyC",
  "key17": "2RLnJGxD5CCBFgUjx43kW62MTNxN9YeeHKuEdFV5xcY9z1GhxEJQFNmwqSestM6sifS63k8BUKaPRFKh5izumZTg",
  "key18": "etd2WbGWbY4cTtzNv97Nrp23ZubRCg1WHxjUyEUESeuptuUV1vKNEqwbEU5sFzTbRo5gXYLG3osC8bJ3BzeFKaH",
  "key19": "4itYvniMjRHKZGvHcTtcM1XPvhv6bmhdxDgPuD6t8jWKGDqqvq2grHJVx3w4tAGVuvn3Gw7PNnvkHWs5Vr1vvrwU",
  "key20": "2cLNAMkweN1NkczpZAz4f3DRb7z4owEicwWwawvbJHdXfJMWGrJaSVT2pXrmR43zMHYQ35i2oB53TGrjewbhDW6z",
  "key21": "2rqPe9rC1mgtDd4YiiCL9u6PnTUyJr2cLs8tBA9JKBX7q9Zp35RGGPDL4hSWiANJ8L2bgCAaASbX4FDeB5DFa1gi",
  "key22": "2wanP6GHRxGKC9aAudyjRwtMBX64pwrsboJDZkgPY85dT3xhwqK9NFWZHpicpWc1Rmeos7eEFWE9YivuRsvP3nN8",
  "key23": "5TpYTRsgjfmrpoywh6hRquiuqxzK5J6Ud6CS1UjQkxtZP14PJDAt8c4i6wXsPKiPE4FahYXo4UEZ8GkM1TLGG6et",
  "key24": "32bxRqkJANZLHH2TitTM8hxqFKFrhJa6LttkZgF8sYojNKg8ucuvLwSJtR5p59zdfiHuqyeXwBP8fYx7bdozLiGL",
  "key25": "3RXdVfuPCydk8gZdFwAvUvfL4ACw4bk45iiz2Kiipi4FresPrrN3eP22pq7SHn2sPUuXuL5zyfk8ip2xbW7YJMxX",
  "key26": "4kgSiRKgGvxTesFcDyQ35rzTcZcgWhYqxRjQ2VHKwhsiZqsm9hNnfvLKTqKRcdLrWmmFxkuyHeCNkGvda81mk374",
  "key27": "5hPp5FLQ3pc4k7jP97NeqzKE2kCiffCEUwf17s4WwbPoaezahWftTPbiVtys24J3B1Pg7wDSe6nDTBPVoMjUjJcP",
  "key28": "HkUc9gkGEyeHyA635v1EKqmmNDceWmn2FXgvKWLGRuE63K3wYxwTvmgCHYdPTUpc7mTeaSFkMwJjNumz3ce8QEw",
  "key29": "3GPutvhn5niCk55EbmqBU8bCzCiguSsBYuQARBzJGhG1xUoe1Nc3JRirvWqnaefJpQkAKYchpivXpatTczq4YYrB",
  "key30": "5jhL9YBKFkkFYhZSoeZkuSPUzZPA1QAJMWzhwGUYY4p777T8ayAQGisJ5o4ujk3QuXcJffa7Ea6qzeDVJMbMr4V7",
  "key31": "346AZ1eKBFTKdEckAhhP68fzL2FBD852g1Fo7dUKjFt9Y5HUsVqyjtTpsjbxucFVUVZdW4y9YiCvGG4GQX8K5QCw",
  "key32": "JCBE4TAxEPN8wwXoDQQ99pwq8cuGxabuUGtGeQaQhRVwGtDh5HS7iRqUoBdUGKjzKjGTvd96CfbYiTgL5tXaNaG",
  "key33": "kULZLvoDcUuSKKBcCWqQSTb6Rk2P88Q3SofTr38DDhBce7kDtNwwwMSrHZoRaCbraYGoVmrQMjWpkzXbT4iGHAV",
  "key34": "2TUSYRzmLcPaxJiVcci5qGkddeMGv5M9hd7xCx4XvJiWnJ94oZCzgnFpEJxPKU7SM4mTBCyVmoNSi13Hxqb4uKH4",
  "key35": "4jTpb23ckGwp3AiExvgaSM7gCebuoHiEkoW1Hc1yLqX7TVvjtZBX1jhvbxna9zPhgjy6XRY2du6WGQDEhjS48Lc4",
  "key36": "4tvoppJUkV4qKvT2K5ZLmGYK4gdxYzRCSdfX1cZ1kBscYF3NTso3H6NBvxYKzzAXCWkPKdMfzLsrhrL8rWJCoGBH",
  "key37": "3NotJbePinaZ3nYMnHbmDbLLJySVrHcLs1K7gcbNNuGsQJEpRThLgz8YS6ymawrYtKZEGy12qqRnDrbmfzSKrJiH",
  "key38": "4jgQ1abx4ymDE6YMSNL8jwkwaAHPrbD4sSoMqBeLPng66yjhLFCA4zacfr8aim3S1QZeE4YkTKJmWe47PvniBbm6",
  "key39": "4anLNBouviC6FtVTPrDzeoCqakuW3k7EJ6QFRaeNaTdKyuVoaWREjH6TzyWXShE2F3gdM3xJTH8TaXFwYJR2mqnF",
  "key40": "8PemntBx1aHc44nhNtKXsthCQ1VtqbFiTwmmVULWsXQrqX7GZM9x54SQ5tX32KyWm1cNBv5cdPVcYyei63DiEXU",
  "key41": "2BFng7UEcmqW8hSwTer7F6ZAE4AMWxgg1KrhgRrG4a1BQ69aaAJAJSpg2o1NzEHsEvKBfVj3rC4gnRekyaFRKU2P",
  "key42": "5kN6yEZCHMM2Zh47uwRRrmPD9Y1GoPzACvcKic7cEVPSDGTVFAKn4YPyEjqJathf6ubLQPB8pZA1tdwjRq6pDduD",
  "key43": "3QZULn4tBC16KsVHienGCBbbMoubVHNJJMQzHmirmDQM1nBV45zLeKmBw9ToYixw4YjNFYziJdkHx6bMuk5AX19t",
  "key44": "27JHBkX9F32YJuYtGeu5fNKyrcJpVL5QDqcoe2ktimxUpBshKQw5qpHg9ZUfh1QSpaduUNWqNmFCqwmoksahNYoE",
  "key45": "5xNAZWSaNeLnkahfN2KUTsVrHfmH3cTYtiJTFoCXG2bnZkWCtu9a5bHMgQTx2YsVkY3SWUzWPKCgxHL94XwxK6wE",
  "key46": "3Z2GrjS3Fe9Kx6BsMURWggpkNStEcn3aX5i7Qg1QuR1w5pduVJwrNrdojMEqvrH19MVTc77qTo8Br9EC6KHWm5rb",
  "key47": "2waKsQ95c4rrTnZ4innLfqdmYBDDNaHn3GvPTQnHyH5fvh8f8LFAcsfYPxY75G363TYQNoe3UbZ7jXjtK1N5uwj3",
  "key48": "2KX6tGnJHibR93z3mhtV15HNCdQm8WBeGPcByH6UnBy9vNPJoTLjg7dDRkMEZfBsWYFPTT8FnHvb81DzetbC9fbs",
  "key49": "HqQ1HmdAyd5s43GFb7BEFyRKHmzNVvR7fQ34Ai7Hd28e9DiHqGBUZdnkeBGNhQA3pbj2YVojwZAurJY9Aqnr2u8"
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
