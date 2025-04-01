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
    "3SzKKgju27Uv3ZfibmnqwietLH1zXCVbZPHZUZ4V5LQwRYueyLKgpM34KyE4QDMLTZvSifiByjqXnSKojyd62rk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M4JKtLN5TyTyN5QkgqbPR7fWyZSKhvREjQ8mE4o98N6jnn2WEdNveruqpq1VNb6ZZgG8wb4eXTVMUYMcfGUA4ct",
  "key1": "4ndwf9orS5A8XGMf4q71e3MERwGydQP3287wnigTKwNqESFrpGa8uQiPt6yKei7y7FNZg8cNJGTZbM8mFsc6CvZr",
  "key2": "4RXUHHqzgmDN7GSv4H47Txyh9jBF28Em8KzXob1YyVvQU6um4he7s3yiG1azBnHEkp26EARpfGm7fysyvjfwFRAo",
  "key3": "4wxiWpQU5GUegKfR9iR5Gxn2T1dZfxYz9Yfb2977NB4qhjJQeuvYu77iADeSNGCb6f2xk1wjrNFnAUAWoq3nrX8F",
  "key4": "taXiHQhjxZmM4ZS6LiQgfinjj5L7UY8Q2ixfWeCbxrf7EYe13uynw7MHG61D1sQBsWzLoduCeLPFACQ7VSQVoWt",
  "key5": "5y7vuGCyJ7yv3cnpZovJ7b1RRsLZeMLc3v5mResjwhvepUY23PtyUsYGkw7r5jPKTo1rvud7AiK4HwY9eoxW4itX",
  "key6": "3Y85fKBuXhLjGwztKRHZNoterFNkhZTN7hxQ4jAAJzJScHGeLvo9y5nKnwPyBsGEJzrPAxppacHgS7awCvRjownr",
  "key7": "3wPWfEWnTcnETbvSNWfohULZj5Gwaugxz8cxYAzm8RHfVUesFgL1PLCukeHmpGRY7SShmw8i7xWYpGcs7Tj6S2Sn",
  "key8": "q5cD4NzAiB7S3STmvgPVjrXg4pkJjb82uZCMgiSCLXcHfGBuK9TUF3igVDtFgrMjSoM2PUauQKM9UpHY3Ybh2w8",
  "key9": "5gTQcsQgVok1gJGAJ78ofDe7WkFbcmE2SFCQszBQc43C5LZU3rMzTVixX3BCGf1cKzkZYEqUXagxovSxy3ekp3mK",
  "key10": "2CSkQqxaikNwnzXEVXtkdPDBZXY2dmdzaonJmG6wQACkxaADsspZQ2cGHSTK9WhSH9Du8wP3VDRJSHkMCwshEMsJ",
  "key11": "3YewAWCgLfJjZxSXWjSzancB6LtJ1f6rcx2fP8nXryHXeEFHcNXKXZ4Nxr8MbrGCtw3LRhsCdCQQPAsJuLv4dJx7",
  "key12": "67a8dbzRG5HFoHt1q73uUuBz3b5nS7uNgkgPLyPAP6UHBemTFapML6w6BqxuNHp8s34X2aornjfJw19Z573bcqUL",
  "key13": "2yCko27mPu51o9HLjehWZGTN634EKgyc5c9h1h3wDHSepxwFRrQ5ALaGiz6zb3dqvqg4a3ieHom1Cdo3JSqhk5LY",
  "key14": "a5h5oiPEPpy5GHfhpDhKTkvbMtEEYmySYJPMhz2mDnfAtMS3tLsfW4MsBJ5UhX6QL41u4XPwUUUd6AhrnFBJ627",
  "key15": "5pViBcJXZazsxzA4gy7Y7UCVoMfr3bj8q32kQfvtJ5sjvEK85RUzoMiSYPZG4ytN6MeXCqBD18u7H8DKS5KRJkrk",
  "key16": "2f48MAijRgB7YAegETg71HqU9qCPRwuYsQuWSYbEvZAvbUj8tXLiB532Kmha2L1RgCidmBV6oTGwr2ss8KwUotEE",
  "key17": "5hQkgHRGrJ9hJffdLkcn3eKKHKLCCZgK4wrA8f25G7kSqxbr1JcvfvqaKfkFnzHBLWBip87u1B5d4M2uG6WfkXo3",
  "key18": "3AEv9ZcLvJRvwsdjqGDvqKBxqMUDMyfcSuSLnSb8mbNy4WYHJbnwEvnzLikwQQFhiCYT17ow9UCF2ZxG1YVMqZV1",
  "key19": "5CqxnHWFL4FgxWmvcZdNUx6w17EoTH3Zs7soUwtvAEiujRG6n3N1RstbxnqUDWCLrH64A311gKrafmw1yyvDr9E9",
  "key20": "4Lmdv9F2yg8yfsV8AZDF7pHJUy1UwGqRBKcjT9F8LaA8i13kktvJSzbvkRpYUyUfphzMsQuNqcw5SsSbiWtmBL3D",
  "key21": "2rpmuxkx5nBYVFiJr6riiivARg3YR4tpfX9k54ENjmHxejgK48ah7Pb63QrBbydnScvC8VH6t2gptAxWZBGLn8iB",
  "key22": "5dSxQj9myJVWrkMEoWYWXJekEqjCF4uTdvuCG9rDhC6FEPoJDj64SsudD21rvtMvBJr5BF5ncrHHPpFdzVKdXrAZ",
  "key23": "tEfTY2fHSfqBqFCFE78UMx6Pf6we2LtfA13Jua3oTmZ8m5MH6ZKMJs5gSuRG7CWGEg7w1E1Daq2HNc6F6xhrZBj",
  "key24": "3fQtAdCy7MfGP6j2dHaPATSmycXcdc6NSZAXA2k6FVfN1XK3nQ4ULwdyrhDscMoYckGpZBj4avtweqjesdichqoG",
  "key25": "52SqFg3ygdZ1HqjCgefmiWMHcDse5rEcpKyCnRCs4ECgdStWA5xvwweHtcG89aooqgTS6oxLcXdXhVRbFMk9Pp3n",
  "key26": "B5hnjCiCkZJkNh5BBmdopzVfXGk8aYD4REEbqyirQ5Z7b2nzCyc7RXEShZoQxfbTkT4VSrhAgdprsVq4H19x87F",
  "key27": "4JzgFTjxq378HycEq2eFZZHxZdZbv4FPqnz6vdzCkSMPQjvQuU6vdG4MwyoaxujFkRg23Md8wGRi5LVakA6uwYtA",
  "key28": "pQonANTZbimZqjKbez8CQzY2DUJdh5gwq2mpZqyaJBtpRTDDhuhKyQypPdwnz2A7rroifQf9tg2KDivcTQmTRMp",
  "key29": "5E1zj4V1452eYPv1R4RV5E7rVPp7jp14nbi1GaoP1fRegADVyvN5TZWVi2qgaJBRybibUGGovBTm1K8CQkZV9Sqe",
  "key30": "CwXCxwMTHtfMjaQ6PBbPmBfihcL3ekeG7KfmpZoVzSFbtoW6Vct21vzYmdG4RhnwEPYt7sjfssg1XkDYcKdPaM4",
  "key31": "28GKgDALoTY4ZBRpDMMY4soyNDsSQ6wXKUfGCDAjzSyZ5FPwQv3D6ttoAiUXTi8dsL17scEwBAvxY68Z2teJG5ff",
  "key32": "u2Qz1tVftZD5U7BmgvmZJu5uB2r3sauuBFX8t8Zxzt2paX67pDsH8Mz4y5VrMpJpekw21RCBE9KSxV5zNZDH9Pv",
  "key33": "4nLtVfZN5wpMhJDNnnAUN6nrpQuLhCFoHBbD3MC5GK3aLqSd3cjuXxkXvqJMQNpFEu4bU98RBiimvv7W2FN6y1Nr",
  "key34": "2QKVxKU4UqrJSXZy6Gin7DNyRs1PvQaDMtmdkuQEeN1Wm9z9VJfUjJDssXD96f66Q8i591WSfuYMaKLJe1moYxrM",
  "key35": "2dM86sCF784fLbSwo8xUxfxweowP112LzjNs2Jufzpgt77GGBQRnYdRTwF3qyb1Ke2nGFSsNfRxHuP6CdHdtS6v5",
  "key36": "4mHmYfg2Mv43qRoFtsaXWEDEnWM3yT2awbaBgTHqPRX2a7Ry8HxptgKwvuPyDF4tH1VMvYvHFUpVJkcFxjnfzkpe",
  "key37": "jsuLnLhMg9vgJqguUqwwMD1MiVFvXLnmk1Ui2g3YsZjeVeUKAjA5Lv7QLEmATRR8iYv8VSmDH9oE98qgpmaebwo",
  "key38": "pvqFqS7AknYoGCBf5G8zuaduoiKcvJskHj51xoCrtDzPJ2y91ifNwbgYJoUtEfLCueJzUSU6vDyjMbZz5JgnrMh",
  "key39": "5AwywGyEGHjKTBRzM4RdqBbpu62P26QaCxxXRD5YbDF63q3dEN1DNVDFh79SZXbURtT6TjfL33MrCdXDsYoncKGB",
  "key40": "4gUURRuyZTJdrZ5776pVH1QUMKkHEmYYDqr5fUDvH2J6o72QTWuT22XhcWCfzDfps5dT72PSTeqBhXSerR9kW1J5",
  "key41": "3iXTmKLtJGa9zhCdtdcZvQVsScSJgpEyHGoAXH8sMM7pEbMEoqXx9pM15q4kY89AedVcV2pBrjgFTzZqkodHmoXz",
  "key42": "2VRK2igsbtAWBsGqZaYtsLvWzxnxvq42LWLmB1JZ54joEzyeGhw1GGtQZgS85WJUK5fuU6LW7DuA496aEGkQ6rjd",
  "key43": "2FrJsze1WPSQda9tqmoj9swGdsJbXj4KArDQgEkebondovFjB7WKGRkZjfPq4EAQFXhwd4uvLLvcKvMrEqDnayEk"
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
