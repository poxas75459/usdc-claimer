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
    "5eVxCfQYopSL1cKS5sfJj1QoZHqg1ZfEvQAfzQvBjEbWPXmpJ6p5LidWfhXmi5Xe4Fch7tQEJcTZc6GPsizsz2CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AgkunFffQUzEv3Q9Zj3aQuuffP3uAem5uTgGr3wujCqRhBJfiy6WCGxWHrsq4ZehmA66YottRQJsZ3LMczmQjdD",
  "key1": "3SAyPGxSpc64iv7bcciQZ4CXdmxnhKcVrtHfiQgRqsGXfMsRkYwHuLqntvjoY4LV1Qh3TwddiKRadvXoq5ihaDe1",
  "key2": "3FvhLYCEVbHdVdWZysyCW3x6PugFgU8MBTvrRKwtSg5rXtcnaqx46KVYF8Z2YW6z2pFqXtkAK2tsp2jSJMFDx1Li",
  "key3": "43mR3AXvyMzmeyMy7xc3qYeRunJRAhuUFMnSHSTvqoj16N4QeVTyFABQAnG4TRfABvowLoYQLvdscCvmC5kB8iWX",
  "key4": "2EtgyS6NoaDVmobF1yNYg3Q5T4XS9FEFGvaJoq95p6EtXynYrGaZV2uwxHjhGc468cstWAzfTrHgU6ncdryGfemk",
  "key5": "3V1rAZDG49XRxu95yfPPer5yxmPBKghSiUS5H5N4YGvHsy2ZMNcakVLn26sKSYruTXebHo5o5eaf71YiWbZg8EB4",
  "key6": "2eU81rz3grK4oZksPhqU7UKvPxhQPwgn3SfB9dSTL2gFqavgt5JfGnbGVtsLqwuGnY4rkk4BHtrRycq6DjQNy7YV",
  "key7": "4he4RoT5sPdPHhFHrrLV7hJtn9xnQtHih434oRBdSXygBc6SBPWFxApP2NseFQCriauriiBR99iPeEDaKBHDQErW",
  "key8": "2afczUgSbeTq4qvz8w7WbmNj81ESzyVzh6DfXQTNzy2CxJRuvQ3bmZKVNoQFHKKCdJkKdRCr7yU1VqHxq9bLWAnw",
  "key9": "4pwZsMDRYjiMGQ5tx1LBjj4AT8n3BvKoYFD8cUYMTo9DQ4SxxNa8ueRjcWZVz5tErbLBSHrvAmGaNsTAfkZGqzxc",
  "key10": "3mAU7BL8svFUSjdvvXYBwDSTqaHhcaFfp5vfLDsbbgnHSaMMGfYBj3QtMpN6nXZe3YdFs3eXRTxPMy7J6C38QDTz",
  "key11": "3NqdeZsQS6hfRsJEETg2JUBhwCiDKce3eSZJ6oWvu8uWGmU7BfuUpiBpYMCKv9dKCtqc1ETJR2ChhTXUu5sVihvw",
  "key12": "4ba6ZZd79cG6zodEAx4LJh9eGSgaqK4QSYrZujuubBkPhAFQdB6kaHhBSuANMU3F1wL5rvQQV4Aek6k9zN78ofUW",
  "key13": "3pF8fX3bbkhzonebf1SzXQvA2fdaZRnWm1PvXaAzX189iSN1fJnYG76foNQ3e9Jz9VUX2o9txYyETrhzYHREsHKU",
  "key14": "3RcUTC9sfeUc3Bp7joSRUXW3LrTpWaVUPSb75Kw5Vjxumct3hXMFh9FnFtrgU7QLqaaEdYVSifd2BS65VpYseWXF",
  "key15": "5XUfy9eSK8FCPFuMADPGEiKqvaEkYpevcezec1dvcKHfvJFUuEcdG54EZP9A7LYWN92t6AdzQyeHsdvnncVZpe18",
  "key16": "2aox9GKKtbkWYkf36NfNfmQRz1Jb41REp9B8e6bsaE1miCCUZjVLwVwRV828ZEMNaPkmHWXt8yd5tpRfXtQkHEYa",
  "key17": "pVXighkGBc9xUxEvWLKW9w9FBPXoBfygZq5VxtBJjfR7Kdazti2xCd7PJC7M2F8Ap1spb1NBVt7bMn7v2DCuVii",
  "key18": "3s4brzbwBBT1XbZrg8KpNY77qpF4CELEnzynWUVsXxz7uHFih6LRksC7w9TYWM1X2YEZpsWJY3ycYNNZA2w2Jq1o",
  "key19": "4jyZt5Ds5unpQgsmUTdsDRDD83YmcQC8GzqxEsfCbRZWPVGq4EmxNp8a36NEE8JmeZYppnKF4o7mjCTKj5rgqp7r",
  "key20": "AmueWgZUQ9dBYWqbvQJsH3RVRazGAQVNkNdFiE2Xo4cMWN65zviTvn3om4V46egKZiE9e3JAwDJdqXQJsm5gUNE",
  "key21": "L228BSmf2aEMWkDaXSrpGk1kArwM8rCgCFdpkxgAcLdnFz1VW4dcQaxwM4Pma2KkiQxae9ZT6VDwkvPRDAJfjuT",
  "key22": "WgFUBGJgmNcNJnPzMs3Bd78vrpexRP7E544AzpLDrrr12rKGixTMfxXDtFeUvzgyPwK8CatRHV5tKrEuTNFMerM",
  "key23": "3Mb9axinzs2iq964a7ZDxb1ddE1TYz51vGGGxAUxt6RhKESyQEBMuLXFYMBsUX4JnfW9LtZYtqm8RpubpihRZfUX",
  "key24": "2TGUynWQnDDpFBciWtQsJRMH3fBfNFk39E5yExCW5XpewEDgXVDXoqMpXQGsAzwZ3FKSjtt2s4x6DDpRSwsqmjGz",
  "key25": "2ArHGrkQ73e315kJ667vdXAbeAoNJrBUDjLMzSMVR5UwsYQy4B8ihyjNXtdakgR7QvBAMyeM7STPEVe15VmTbsmo",
  "key26": "V9NMRFfody4qWfgDp5RweAJyyNNkjo2vKVbQLJQdwGKT2LeCftDsNaNMfZrsZuqGzLB78Swgq4yi96fgZs63Ytm",
  "key27": "ekWm7w3VuTqzCi846iXcLVFH3x4aCp3MXDrJ4kMxbEtCjTHG7F9McVLr8JBnqvFquxe5Rfaeg95hqUt7ajiDYVY",
  "key28": "395PQjf5mfjW8X55pxXQTKCMmG6PDXUiv3L2RfbLQDUEFdDeNkFzXu7TNTBbd1ZirA1eshr5m9ptp2DbKgRu81Vb",
  "key29": "bDd6brRwGfaJmv4wuR1g6UqrhdrgxSxys1ULS83u7urZP81mzed56PD9FnahCQagw4qNAdynVP5eBsgPbgpSdaV",
  "key30": "JaWDFxi37nHopzKoLehx5EYf6do6pezpr7QR4Hok6D2aw2fmy3SSKsjexfePGYgcXqLB6vgQEkv1Jkh8qPrXAwn",
  "key31": "2ripv2sKiT6PQMnTgHmWaj2hbg5DpNQczehbJr1a94nxpAKwzogLFDA5tynT6bTwevongbDycpzA4Fv79dBj5nvR",
  "key32": "gGmTtxofB5WVcpXqC6JppAW6H4osMGexYUXemas7hSMJ1Gw1eVXykqrG1k37Xt9NujU6SLbmmmnD3JqdkBMSrhQ",
  "key33": "35U2EXjdYCrbZLsJLYzANfg5UVEiQCQn5oGw58JZWtKVmTyw4zij9sPUP9Pywz8fWszRX3uz5V4fVv7PkRDCqgTX",
  "key34": "4FwHn1zLRhJrUn8UuX49xpwPVwBTXcm3eq8hWWqzSP5CBQXAkzaxBsiSTDgDxexjvR12EKRaCueFupxvwTKQMy2E",
  "key35": "2wwpfoFcPA9Yut3ANVdU3GT7syuaRa2kAShm3nne2mMXHZr5APFpiU9Ryc9PGrDk3DP2MXuQRfGpZxKjtfa7pASk",
  "key36": "5YdVdYybWG6h1svW6yWJfnEHAn4tQU1XhacaScxLc7z1iyHJt48kWwMpG5abT3RP2q6YAiZvFUVjff6okkghQDVk",
  "key37": "5c9ht4oMEjKU4Sk79UGjMgATRVBFdmdqDq3uBVowX4scHoL9z2hBJz1FNSa3PY7pEE5HM6uGCx4nBWg6MWnwa1wD",
  "key38": "bET44ZDkpN3DwVz3sv3t89GoQCaazpNgK1g18mwk8ftTsxfATgAPu4z3g7KkErccxy6F4fSJUA6t6Bmi674fTGW",
  "key39": "2Wpj7nEquDiDRFeideDCytsYg5tpMMKt97VD5mMZ1bDdwoGsQRa6FPM9EC4hiX265FdY3Jx9hPVDL73WngGeZZAc",
  "key40": "38PEMULKZhsyC1g6tNZS6GGm42NCnoxp2wbBKq63s1DNyPxj9yYWXSHXgR7UFSTtyv3bvaCP3ppuJfTknukrMpTC",
  "key41": "3yw7vNdSw5wavHKs9g2jdh7u8wg7T2NU7qs7ZHuLV3ZBsLf4EixPLD8DPoFLUUTjCudwUaW9pwYeg9fEud7FL9jM",
  "key42": "3EFZTJ3VRJsi8t3isEkdLXXSTYTtvpYcTfjmBc8m1n9M5jJog7hZvJkoHqQ3dENZiyKGbGh85tkYoqLo5VBTHUvK"
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
