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
    "4hGpJVTBv128HBDrofbDGzFfBRCsiiFsHbmSqGUVjPcfhpm2Fa55uVVqv6F558aWM6jLVWU8nuraBAMhyxJFBBdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vA78DSeM3MXFKufyUvaJF68wCZadGvupTHfJmYewtPywYvwNsgwFXtgJZi9o8pRH3ysEEsRRipZdpeqbpMCBZ2J",
  "key1": "yf2D4ne1XBF4hymB6Xq4gyW2AJ7Bbd6hGvWE7ebzJw9hbeFA7ghVd4riFsiUHGRRv4KzGwfPXXHmteRgaWKfLRa",
  "key2": "2ynUEk9BxMe9Qa5x9NddqDCHLdmbGhjGpzcAsLFE7uu2rGCe4g5numfvC7fZFMp3ATZ4YidVLL1DTBAveD1qU9Tm",
  "key3": "ACvykcZfEpRxFJ3f1oCgvASLn3VdQ36BcE1p9J83dkUL2788QHY26h3ra2xkEHva27KYBZQcGgWMA41fBmVVtMb",
  "key4": "5nksJsX7QixFnXqXzdvi3UPeDktxFHfrAW7eHd3VrC5bTMDRWz7Rj7ESmC3AZ7Lhkhbm8qQaryLE2kb6ZdV46bF8",
  "key5": "2Qi3AHAP6agxzxSeALV5mvHVoCDipZyH6qw2mmyTM23w4i2T2qMUYxtBSPJPoBrdPV84dJ3dsDHVc3vqBZbQzS7J",
  "key6": "2htm41vqzipi3bgdjcJdPYmGBqZhRYuGDTHSakmwDJQf6bdb8NuT8HMG8287yvrUw4LSeJx9yzvgyDSe6299K5TC",
  "key7": "uwZJ25X4yRYefCTc4pRYGwk15cdFzzQstSiWGXiWEKCtShJv7VijXrQJac9du4DzfFJwNw1wpZgrDENJa6RzCh4",
  "key8": "4z8fp8CeTW26iPveAodLbsEHGdBj73AWDqjrLCuDNsbzNb5dbti7JLyZzoUKLgCzQ5fYkHh1f5pdMREXZREHH5Rb",
  "key9": "WVyqG15LBGSXLSJCGjByD7AmQwCmvW252eTV59ZJMFU4ZpozVe8h35SbexiFkGQzeJHjd4A9tWibxTncE2skSHv",
  "key10": "4th411JyUb6prp3qL6NVd3WagXcUX3hbyj8zY6MMZuKNsdbuuUhLZZytNT8hCCYafJDhTe9iWkiSwKqr3Y84Hj8C",
  "key11": "518W3paBWh21ZyMrDy2aPQcPNDLuLp92z4dTAJ4TpY7y76XeFEp24hKtiB45ZNz68BVsDpiV7hSbNM9LRCanu91q",
  "key12": "5HxMuUvHND7JHBraomvSVXsmYUDZzMot28iGJwYdBqpTZ1KDpoxxfqZXGcNv4Jtc1pcM3NJEjE8vXgq95fz1QDmC",
  "key13": "5WcMH3jFri1goB7YPjMtXbbwchhKF6hkCf5myEqtoaQZ9wFC5Hnzn46rHPxjhigNYkbkXkcUBrxmdJxEdN4rCecg",
  "key14": "43tW98Q5819brexBAVN8kXVfYsDPVepp8ihy6t5QHpoEyqSdaVkPmL1Hg5AECTR3Q9Xh4QbtTRSxMxjnJbLxAiSa",
  "key15": "4m8iNaw4XjRKg2xbehSJikVXJyX6cKNiyVR1FjppkAyaaxd74UaozFGA8TLH7jDCyWHehaqoBmBp9JrtvJPEBgWP",
  "key16": "2hKvY4gkiaUzmKrhawo6VXyFR8a4AYtxnzMfQ6Gi4LpkT76KVuVsNvqpFqYRbgEWncM7UXzDrq38gtizAPQLGEQ8",
  "key17": "3yozeX2pWQcUD8mAiFL5qhvwTRqUmXuVP1yn5RAZKXaMw3TvcAeJeHu6EKxKU8egJ3rs9NDaFGs5G2YFh6fCbfZU",
  "key18": "559ASVHBpRGQGXbXTwLxVFAiUzgmK7Ava5tsr6Riq79CNLMwnaGSmomZweppvQGYaThcFVpPe5xA7tT3uicPHJHq",
  "key19": "4AzCZrmSuoVhDCYvgVVTsmR95Qr8UHzLuj48FKCZ3BdNJoEC46DiaBSMMjnuK2oQF3aSd9P3thYyLsoi3bfGu6cK",
  "key20": "2ELcADxKAJuXkBcm45oAkZSbQYgqeFmY9bh3ncYLvSQR8cGJg9pRfjXT8pbzr28edLGUQdgXuvx3pXptDDE7N3yY",
  "key21": "jzNpuE2M3ec9s6c7FC727cbCPPmrux2zFnwFhqnY2tkY6vsLCWfn1wiYACvno3eprEBMysm1dQTu7Rj7xA9aN2R",
  "key22": "3bPUmfcchHuXrnoXS3ivP4fsUe3w43z7fTcNXEoNsY6UczC2pHDuV8Mr1PqKHqMxNHdRqBQCYD2Fd85zNwHhV6Mk",
  "key23": "66RPaL46bLPUJjuwtJ8YPnGdBSSyncpwoY42NZ4Sr7TH4CPJRXo5ta1zoZaqmicb6ykdLejY9HU9HoBVeLPQNLY",
  "key24": "4BqwQvih5txTTYN5Fdi47DTBsxihosCWS3dAXUyaUT1bjeoAdGwupMyA1v75zy4c5GsMN4rQmu43oeg693tpVwec",
  "key25": "3qVK2reRvcHVgA3PfrmYi5MMxcAKmtsae3VNvzapZx1yFtV64BWSyjGsSxwGrQsMVfvAieRuniDJvfbLEFMiBXDx",
  "key26": "2J8s3xQmfMTSb2MxSrunigffpUNqrbq5Na2FrpgFVENNVcz2cf1AprViYp7p5W95t1LsCp8RL5DsSqFuYJ6cxUmW",
  "key27": "5a49tDgerP2xqWaQ8PXS5Hn8J3y2y9ecj2UHuoEqz3cH9wJ9qQ6ZHsocJVfPLUVq3gtWhP4sLFWWj4qdQrZ5HoZX",
  "key28": "39vV1Lctd3m88azKqmDXXqKSdeGnFAK3rnfhvRB2nHNpy5e6A1tbQtwAcMGP8N8fM4UMi7EqaTGFeigti1qePEQy",
  "key29": "GHxnVcgTdYpf7vdvjG2EY4cDg6rZpKG1a97hFNKfWM91ZYbDPAHj2bSLYcBCbem6cBd9PSjsvgYSBfofbN5dvY2",
  "key30": "5pVmLR1bsE3CVbU88rvXtpn73KTQn2as27Xxm8Bg123JmDsupv3TesLP9n1ePPuWsoCBdQJLjXdBC9SgMXRxoRJJ",
  "key31": "uzYr324VLoMxY5GsM6nknLLxRoYkhc3NnXdVNEXRCotAGkPnuYt6GuVEsF3m8G5eZBdXFvgnEw3xtEzywRy6JPW",
  "key32": "3Ls7JXEQ7gRL2thixsqJvqaLUhmQzaMvEEQu6gNeZQDKs9oBdAexzBjRPP6Ls11H4sEyEnkTHuDrF4ZbU52s5hTn",
  "key33": "4vMeQ2jRBSCth84MepQCjjU875jJMPE1tL8a9MWF7NSVghvq2gznT2zroLi99AGsBr37rTp2v7MsbQSCwk23TW9N",
  "key34": "48WvJpa21noheLWk3p9woMXkZK1TZKYSDNiaJx2kkLm8XY6mGSwhCdmVijxGro3BfvGqhnDZzLujJUvbXf8zYud7",
  "key35": "5mbU3D5TxcbRkSXur5KF3UVVAs7XsG7Hz2yNj3Mc4ESKPVAQKWGg1GeCx3jeNsMTpFp5cTkvERD855JQnmiqmTJ2",
  "key36": "5ktTAmHc8FsEZXETLpb9uyc1q2UCH7YdjWuXurUSmChMcewBBk7ARohETFYnuu373zGC5k7SmDAzfcmTc7ZnSRD4",
  "key37": "4ZE7rVuG1XmQCzZ8PRNPu2wFHjJcy7hPcrA7cbffxzHy7wqAhQSVrDNUA91zBRpv4iYkV4XqgSpfvpDUYtHoamT",
  "key38": "3nuFGjd9FfTyh4mSrRm96uxD84Zsf2iH88jmHriH6nhRc8Ei8a7pQfaoU1M9husrQR9rkqARAj43PWrjhJweSPt6",
  "key39": "vFzLGw8P8AToCx8f94pFPymG4zhX8mE9dTPdVRS6AYhhHsfcBzaXMEWFf5WvebPYVx8jhrqpedG9LLpRMX4xXNp",
  "key40": "3qsoDxbzGNhoRiTdX8f2a1AuoPPAv1kXY3SSjKvwsUnfhf7nFfo4YAh85r8YmAJ15x2mvBvNPcKLhnfvCD5Nz2Zy",
  "key41": "4hJcmrf92dBbvDPG5S6MjDmjHxR7Znz3irAiuq4hfwqEVz7tUPDbbwLKFBYrpqxcmcXWNCXLx3JE1G7zYKinp9Vf",
  "key42": "3JGQaKztKV89LV6Wd7qYgVLWGihEwwRQ8Avs9rmprpBu5kx5rBi7U9VwEuru1RxQXDa53aPDKFUh56b77E7goiE",
  "key43": "32U37hLZFXAW3PYTFH8TZdEnxF8eBJR9h28QDGLczARNzWqeGDr9Pm8estpMQhGUPJADCdwZQxHBMv63GdTEAP7f",
  "key44": "2WX854ayqraeXUEhEXQFopjtCYqcTHR8P5WaokMuU27EcKL9rjjU2M9XvVZSMCZBAN5RoYYvJsxYKFEogHU6vKi1",
  "key45": "473KquExenu484cNe5a6cpQKf79St7LmpeVUxUsrgV3Y9NVoNQRRixxNmMiwokjbuywk2YnYWmkE793cUu74WxnG"
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
