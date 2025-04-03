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
    "5FCsDUSsDYUwEdAGxszgggpajrt5TRNhpUHSsDd25CeRpixf5juU9AsU8M8svWY8GMdHo9k5TaUcoQGeAUybLaMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bShKNpwR7NvA9VKrC8JtTVH4uk4h1FPn4UC3HeuErCSizwFHfMFSiLnRqSFDBQoHHSHo4EcNviWoWNKdFeF395b",
  "key1": "2Ywy7i9GaxVDiAJXtNXdQhcHFQ1uQYC3x99bxzmcbiDmDkhJHtAebeBcvqQfSjxb9FJnKdVdWzRZoKhaXaAkYVvv",
  "key2": "WhCtWzr2uYYxXvR8PvWzFQ7Va7pMxqEq8jttLtVZgY5q2wgujg4m8X6e8kGhVxGr1KQDFf3qWGdJshPesgTjd8n",
  "key3": "5t4m3abj7M52yEfsE4jNMMxi6QiQzSvorm1h1EUVfKjXeSdNYYBbgzuw7xbp4hnhmdRmHi2LGysqi7wLFmrCwjvN",
  "key4": "3U2fULDd5DBzfHttvnFvJ8zazom4GhzF4uRnMgVt6sTN83j9ZmcAPK2jQcY7p8kCGURpouGMStfziCp3rktxdmvN",
  "key5": "47hJ5CtAvaYovra7gRtwF189r8cPoyNqT15uZCncBu5eeUCRqjRZcS5jAjiAtes2qG8W6SxGpd3R6TMNFsdQs12u",
  "key6": "zZT6BEuMessraeEtoGEGZdnNKfDuXZhA2jYPMS8yHmp61Q5KY5oMmfhL9Hr9gAqf37TvxiiF7VA5ZFeEvGAFxDw",
  "key7": "56mLc1H6rDTKrjiFkbBg8PMBGb4WzYEus2mviTJWATaxNQ2W1R7UrsnJz5a6DpWF1c24Ud6H5hrLfi646hSw3qU6",
  "key8": "5vHnUMB8WvtGssatAEja7yzY8X19U3Fg38rKTb2SNzqYgRgxVkYY96DcxT7FHWVcm2tQGawYg1ogXPreEEcJmqed",
  "key9": "4AYWudUH73CY7NMP2J7Rax7nMrw4VJ5qzm51wwBcRDmWmCahv6pYYjVW6dSHqqi7MidBvDmKw8rGaGQ5vPyKWkVQ",
  "key10": "3iURAzp2KoAFrn3NA3qTDf4Dpe3z7haMDiF6Y33cJ2SaMJySZxFjA2MbMQew8d2fwP5NKUFzhXrjWQgUyJJyBXaZ",
  "key11": "4jgABjuVMKwFxesgsNVUaLWqnacfZhkNqXxdULkgGg1CwKfL8xJsd66t7WE87p4rRu2eZn1mGMDNVcYEKLAe6SUg",
  "key12": "4UQ2vY36nkChAuZfash1X5yXaBPRUxP4dV8fN8nVKWU5rkrV6Dh9wBQz6pRSfVYPcFvBedszVEnEa4eTPLoN1wBX",
  "key13": "5YMB99Y2iXArvDQVze8ixv29Yt48FXmwJrZ9SeLWarf6M3uNGsLKTwG93GdKEfdYQajHbRqT2fYC35MXbWbBzHD5",
  "key14": "4F9jo9eemb89BQu3LX6vLLwm8nn6eMyMk9Vs1ViW9xCpVYxXxQWesCjBuYxUjAvgKvgwdnx8AeBwEMDGvCPB26K8",
  "key15": "5huBCWDam6YqsjoAXu58Xyn9EL8491XwHstd632VQUmAHPWwqvDpm1dwD9UCBndEpEC5F8vVJb5kesvif9XKvh2K",
  "key16": "1KKSkRw89kgMseYdnxmYdv1b13vw3pqh3FAeMtNrs1cnJvsmDG8LyeY2hfkX36RnQ2RZ37VfJrP213jNE8Kh9s7",
  "key17": "2RBWcdM5d9AY7ApYiaD4Vhy2pGBrdykc34FLFuC3C4FZYUPnY53LoNWNEqjwVisuob3rW3qChtBySRY4dEJJYtme",
  "key18": "2BC3Hyr3Yh7767s6WWBHBF1o5gN68JYmdZNdsLuqwpByxZgTLWXUYZJr7nA3bYAmhNiZs1E9gcR4k4f2ACvJyC7y",
  "key19": "i1R3BjfrTQERKsDSCxT9xJ3rvQaHpC6ceH4yLFCgi3aeGVUrArDL367B8JVQTh4zFzfnf3yquMRmpiZqzKs8XAa",
  "key20": "3AcnzumwQ1TKPArgVgNtQ2mDN7cKJKoUdDHiYmguwchYuUGcmmVaLFjtPdoVymKsfFn39onD9VeRgS6dmP3vy1n7",
  "key21": "X5x3fd3Dc4xhKrYJw3CuQbkDQudrSDR75a7LTyM11WcyUbHjMPygM5CpdKvWKc77FcYjFhbDKMJbfpRY5piRqLQ",
  "key22": "24n16eSzKACp6Rb8UC3AxYzFND1EMuo74Df45keTzQUZJ9Bd1kCFBD9HrNyRTuRaSdYPkHuNzdYUo33DPcnDbLxc",
  "key23": "4VRuizcGWf8QY5bJH17YcpeC3s6YfMbq7JbQw7vxPr8fZqAqtoQdjVmJF2o4KrBUyZJp7aFUu8pya7QirXkBArCL",
  "key24": "5JqzQU2je3Lmwejg6ghM2zz9W2tQheL1LX5BhjGRCYEGswWxmWLXVs1SqEUR3x8qio4fPaxi6gxSVMoZPmPDNk38",
  "key25": "5rK5Xc5U77xaxPF8BeLX1WjQ8m7h3cA1N4tPZMFgKWAheAAfiFMfeDBhkycnjX1xMACXLRDznvCPMm8jUFzFWUSw",
  "key26": "4t7MLEayrUUbxAPjRBZnQYbMkrjqnNhxizyM3vN96Vz2UZ2yjCXvRw18pkX941HWDsY13jciXV7ke4GU9es6BqfJ",
  "key27": "LpQYMpZ894DA7FdyTqB5ineqfZ3KYV8uMkzyRu4uXRQdV8cChCix2HCAVmAEXZrNpDumhxExHuxZWh4b31qxHVF",
  "key28": "3c8TwJJb2dr7aVVNcheKHEk3vQgbJgTnYicUKKB9hwgVd1W2Dhq3GdRscstp3mq7YrkAxY5xTk1ddE88P63Z1V9L",
  "key29": "4cbCb1ADDSdQqUrfDgKshx1vnKaXVubXYCR6K7CizVYpB535Dqmyni9mstvzUjpSEpPRZs4X63RuZVoGBR4SkJWm",
  "key30": "2ano3K9XXWqhFr38DPLrYrqiErKc9eErQLHcKETANCCuw5oTKpWyfj6zLZwjihzi5EhDuPxdEKc2kxaataq6JyTq",
  "key31": "PY6f1BGjjw1dra7LGu2g3HK1F75Fh7XR5YbbwEimzRKgmt9CsuW3azXaFhobQkpmnmjkQmALM4ZPzmKC1kBdU9X",
  "key32": "35XR7rC5kjh4cd1ZPu9baD73rxkHkruCNrGWSn19QGtzJjSq8U94jqwx43a8w2GdiR5CBgTvwHtreqi6hgjogbUQ",
  "key33": "3KqRQ66Coxxq96CLyJifTGMQjn7MK5CSbufMd9RtkoJEaTiUvY3xiAzC9wJns9x1jSzth5DbceACW8mgXFBvTUmo",
  "key34": "27WBinoAHU8hsFJw1cMgtEbYYuegAJ7odVvVAsag5CC98dJNrLFNNfhA7C51ddaih5SmSuyEXKCjGivKW1c87Ace",
  "key35": "64nh85636DaNfCeLd23htk2ynUtAUVW1mvzGxxAFduxuGXuzZnxC3vBCMDjsGVJEPrNfbMK67XyhGoEk1bjjJJLG",
  "key36": "2eHFYsEWkLiDZ1XbzqSZnchF7spd712g5FGRjLXnjqsMwBAdy9LoCApoZjFxqcGnj74iSp4fC9V8LG8XMDvgcS6U",
  "key37": "4V82UccXoH2gozGTEewcVsWyHyYpS8XxtEBqckgCkViDD7AkK8T1K2TNBFHSMKcPsdfLokUfs9Ztw59P2pXwB7Tt",
  "key38": "KPNEQGjySQPNzVtbSeALQr9GfSsfa6TFAfi8a1TKew9afqpm3FeC5dnLp2K2u1948uAGnZqMtFumEAqCaYNif13",
  "key39": "5VDRkRK9ue85evBuTsmGPP5a7qQ38N2aVNGpnBBmiHEWpLYpoPdKqr3o9dqJzxshS46cWLLLXdkDCcyBA9sK99UT",
  "key40": "3cQuj1Dcu8u5CbLkVq7KXenz3bP82HkB8Nz6Roq4bzSauKQPVxnpfEfB8WXeUh2Lu4XgvmDfwiNF7PuB2ykiKBDg",
  "key41": "5cjhPs247aTRrirZ7Ag3atw5FWTKsgBm3PixwtbuX2dfEnkoyAPFpyeRDuYh9iBn6fp8BDnsVPvqzwHHX2EStFVy",
  "key42": "4YqhnS1vKaaYXDxoMA5AWF7MTfS5GKF5dSzYz8Z6b7JYRoPaJsSNAkaHDzaSBErZTRQeFvsx45Mo4uzz9DpTC2hD",
  "key43": "5RicA5pBgYQg9sTjSq56aT5VvBpsLTiscLcnFihiNe2rYLVNcTWBfMMsy8xae6KUjkf9igpDoifiig1XTKM166AT",
  "key44": "3HcsoXNiqnvyQjWa8QwSyM6ca1utzk21GNu4MSifyUCecwUKuSvJqA8ik2dFw5MrHdvfdmqKgxtcB2r3zEsKr2ib",
  "key45": "ZEVz6k491BE42vuHQmR1mpo86krGwzc3Mq6tB58KYz32AXVzHSjhv9uTs5dNnFQnrJrAAbqTN7F8wneyfXy74e5",
  "key46": "4GoeGDcej2QcSX8D1ttsJwcYiapzgZtRwrZYsjpKkZZFGA2RB5Jph3aVdSJY28XRutgqXzUp7jHw3fkZAr1yNw4x",
  "key47": "4yAdXvr4C4MsvHwG1WNKTid1SfvmxefAzhGvcGcrFbvQkrSeR38rDNgumxEDjXAAGdsd8hUWW4UWCfUy42iVSPdo",
  "key48": "2siHX2KGL7JEMLyGLtAsp4BpSaC3W7AwgTMbQyBd3dGgtMhNDmGXWksiNRfZkGVJMDcaS2WM6DbdCfAfGQvzTz5h"
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
