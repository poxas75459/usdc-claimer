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
    "3z3TcJxwjsYyS1r5TRghZXKFYkJ28X4T7KujECZoKdG6LrzzjxL9sbRxyRJcLVNWMUvea1egPYUf5K2UbyC7Rm1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U4nAinMJzf4gfJhSW36ZH8WnNtN9NiC64ThVTFWm4eBwr5mBY5W1EVY9tpXHyaiqLvwWGDKcKvtMF9bg31kMwKi",
  "key1": "56UEqZX9YuGr7ytf2j3MVp4JskRfHpKEXzHWSo24yw6q1395WT877MBQbyBhRKgWSTX2MPvBRLUVoZhbRmejYuMK",
  "key2": "5BmzyjAGBdDTZekx2dSvvUtvEGzQeRi8Dt22JWsXh6t4i18wYiJCiciYmVeGKMot978ctEdmMkUnfAPPtT3YVfWT",
  "key3": "4Moxh1yteC7G2NNwgLwf75dqh5BN5MeKacx5L7mWG5Q6kFoUoXDcCT5YQy864BqAaGoUPcjdB5TRkPkEoEzcWWYT",
  "key4": "4HcGUXp5GbEWDEXsYkWtH2PXAAmvDFn3CT3HLjrGjPJsghSBY3dGqzCk4S8BbSkNR2DWtQGNpAmy6U7gGCUcgeqJ",
  "key5": "2vy7LPV1EqMXRdGPL4Ax8Q5qtL8t79e2f1EcQebrK5zQyRVB2hZMLNBCKVpeTKyRiV9aoxPNt7sNT5ry3mthwqbU",
  "key6": "2Yt9GhDQT3ytUTnh4Q5rtC4FT2roHLWZ7nsutX8nZvy3xkKyBunVsbondWZPHR39TDAx2Lj7zTwp2gcjrDyecmMi",
  "key7": "35NCqBvJ6YCbLqP7yiWEooVrkEwgTPB2WMv5TmQn5N9VLwseEaYtSqr9vg4LCYYyyMjPaLF87CZawrBiJUk6rvL5",
  "key8": "5dEyaurLRfe7rVvA23Xp2d4cGyz8DvEtGadd4byCAGkcGmhpQKNZFf1oLKkSnrohYGD6EQKvi2DppJQHgVLfP8q9",
  "key9": "5c6EqpFHc5zLA1tZnNxxjPf5mMMyD3x7FSsMEqTfoU62qN1UhBSUVgoa3MhFpYyYRdLAesngA5dc3uNXynJHgiYs",
  "key10": "2LcoMLhsvaijNJTWErmYcaxmaGJLBcu4A89QYNAj2Hz9BS2pe11eUuZrcdcKwmwX6XjTbUxqoFYZSNvsrzfx5iWE",
  "key11": "czRFneWZdWtszgvbnmE6AF5HFLMfG8bbwKUquQFA8HNcRDy8MJhpbmNDud2TU8s65gyNPLWTCAP4QUHTxFV9UyR",
  "key12": "rv8mt5o7qDk6272DnJcDJ7cVriwjkJgkSd6p6F5gZFTHGk4KostsJUUnKYz8wXt1PM5kqsCHMkW1vkvrkDySnMa",
  "key13": "2ddQtyamQ5MHtMrYFzTQ7BZg6sdnYRmNKtgTe4X9Fr5j55wfaydLUZDtqJd56LmWmdgeetYi4FsNQivsYRgveKVx",
  "key14": "5QMZUeU7iGC4XkB9RrmdX3rtXsyVanpuR1HRe1b6LpRX9WadmdywM8pwBQFxzjpqYxeaSaNYU4GFhW8QKGvvkX3N",
  "key15": "3KbTCdiSibMkZ8nnFMXJk5wN7FdVPazk3pLUNa1w8PDBxaWxkYSLthTcecyMUFwBFQFuFvYFM9qL6Lt8gVrPaHDY",
  "key16": "2SAQ8ZbgJf3iJ5Puk1cUWb7PMtBaKY3uAZxqXdJ6RzU1wNEHin6Vae7Abk35yuhuPE2jkgyk2vHSX68hPGFu4g6G",
  "key17": "5k2LRdEkKZwuMPyUVSZPiG7FRGD47wWxYRByeGVUnuTMDje5yYKSyD5Q3UBDGMTn9xEKDmJBe5rdKN5xBhuJKGmL",
  "key18": "5trj8MaqR3Y7pcCcpCusLAueEM9rJjQDmdXQUyUzVRSkZHXUaqtPhdxM72YH27pKtLS8GXp63WExJfbeobanyA69",
  "key19": "c2qZF2tHhtcP6yBj8hcqVdU6UPSXTH653o4zf1tBEtPHJWUMEQgHFeuQZUkLsxfCGt9hKRogqAUMvEcxQp7o6zs",
  "key20": "4ocwxxnLXqueoRNLgQcivyeuMu3kuc3Etk5ovo8BTjidywPzvBe9cD1qQE2JbDgzyYM7BVDRZKTshyNw14hMHw3b",
  "key21": "58FXy4mRaZf5aE2EckBymghhSjHgT9ZCbWStXxF8v7dzkP2V5bpQd6XtUoFNhoBe6ida1u6BMemFp7YSDKq73nUw",
  "key22": "3kHLjFNH6QLv4At9y7RnGdJvj27NKTTMb4jKWwxN8rEFRkydKZ1tqFPBJSLb1nT449it2hsFvmtLGHZJeZEE8Qrp",
  "key23": "2t6Yip8GUCD62QYoes9WKTVyoyQ85Vbx6VMpMgD44SGRquKGj1Q9fjNGpvHuDpP3psJQRMQy3Lr7y3R2222EY3fu",
  "key24": "4vXw4BSwbbFyukheNreLmsEYg1nMjQUNJ9Na3x2Wy2ij62amYsSRRViaLYb7TwcgpRdEk9KEY37TWZ3e4XkJB3VR",
  "key25": "2aJGrXbGHu7uUnBAijHZ9AJ36UfHw5a94LC3MzKHTBrvM5mB8k2r6CJoVEhicxHQQKLbZfgD51wVDKM9mAaZTP1D",
  "key26": "5WVG332VKYqMoYJLWuKL35q5S6eoiwsnjyrwBaiinetgnU4yUfC5T6bC8xaJpVdytjpSZtXnoLfstcNcCuPNttFq",
  "key27": "5d8r8QgWFpUA2TF7rdvPzJLmR8NkyPL7oAikFhUBBf8WfyBZ8EM15JQuoKcUntH5GJkd3exhWsGiyk1fgNTtmjPg",
  "key28": "3R6deSb6yDSGNcjrDaAEdA7uMmNb37yakhQuHZPNkDse9U53453dEdq72wtMNpp41jSRLnLRMzTAxi2r32jp7rC",
  "key29": "21PWzJuN2FUkKRpfhk2cVAioSYeTVSyMUyy89JCV9so2nfh69ukNThVvA8fgqXEuMQAXtrV487QK9yRUkZxfxYAW",
  "key30": "5A3sJxVezRnXTe4tBxCvSiGwNgtuDe6iuGW1a3wMPet752RUKJSRXZ7HKvXLaqwsm4V93cmxtzL8Y34hMngoGpW4",
  "key31": "31ouC2GbjFypik47D3QP2A7CybNW6k8uCeWaFBhok4GBAmJFYc7iQYU5vUHng5WyrygDnxDuV9G693PEDCyQCka9",
  "key32": "2GqbA4X7TdLso7ufKpjEscDtxVdBgqoDAAGFuo36GK4Uus7vxio4gzjE1q9Q42gY6ebpWXyk5k7jJvr7qhesvbZN",
  "key33": "7D4wfSykqX3swJhp9qkWDgeWu4VQ4tzPBriiDfpMcziEFu1zG1rfND27BU3hiPwRAHDawZij1ordpJ9f6JJM6Zk",
  "key34": "25Dpi2mypXVW6SNyzWsiSypTCRvzqGBaa8TzwUBp5hQo3e21Dg3DPobJnppM4W1StKEWT6zTjkwD6SazoYfHUntG",
  "key35": "4TvL7qFF9qaKM5pjpV13iM83U9XTDeg29cQ2sZZpNvZvHPwrnWeTTcGApURK9Vak7ddM84Rzb8RU7bhcxoc6UWgi",
  "key36": "JLZGnCW71UoooZpK7aAMzfUGDQCKFjCrt9CcaRBUyuVmdeSMCwmPz4ubak8npS53PnLdbwYmauspwbRe7PvqDCK",
  "key37": "3J2mRTcA3NFtuVSnLRYaiinYcWsBCWKEXBtKhGVMnkjGFHf8K9Bz7PqkwdYosHNzUK8gSDypexjpDwYxjLDGCE7H",
  "key38": "41LamDee5ZLmxLtPTWNM4YNfEV9mJadpKsCNqPztmuuZqQzFMummRN6tSpBpDZbY2bQd3ywmCnDBt7pxMDNPi3sp",
  "key39": "EKsvaH4KAnXLB2fg9PrHvgMcHcHQc9V5EpJHFM2beHyp9o8DyV3xEwRHTLUX6UThpauN3HUbBTccnzKrR436nWc",
  "key40": "5wEvDE7AqGLkf4UbyzTezSeHK8tvN4EGuak58BnfPxyiUf4Yv4LTxuvdGhXKdMRso1LzZF1STe4GpXZMCjRNbWPG",
  "key41": "5y64wu37MA9rdoKx2JZhp3C7BCwoW5tEZn9Uya9t5KUYaJsPDXefBVqHmEdPvDWTTZXSigRrgvH7yUiL76WzmVVH"
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
