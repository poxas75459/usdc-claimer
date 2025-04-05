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
    "4SU28txjoMk2iTJp7dhAbMc3fDHUc2taD4h9dCG7qzwHybP8rc7sPVXyvmSKq1gjpoe184k2uNtEV3gj4CaurFnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oR2u2UiaKMVoGq6AQnrgR21cX5c1GAstKX2d5Rnc2Qkcizm5MJHfzjUqPJhzWYjawy1ze2sLs6VLwjjLzGaqwgv",
  "key1": "44xXdLL2FwS4tyaYKwzC24v88S8Uny6r8FxYBfEr2G5VVqwC7N7Jdc5cCcRonTZLW4XgNfEAow11j9Maz4qEvrhM",
  "key2": "5GJvZAW8gXRoHYz4gHXpr6L5E2pdww4LcxkFcoXskwR85oTspPicNb8GTx45Fz1w17Bywda22LDGh2y5FRYKKkgo",
  "key3": "5FHYAG3JUjK6Cyp2aH64V2wG8ExkkiqLozVuPUZRJmxSu6EjCbQJhYPapBa3YcwmuSJRvCcUjPSawRAX5eQBNR66",
  "key4": "3jDnYth3WZy1dFys5wpsXLfp75K2iewVhxsZsrMhVfkx4q9Gc5QqKFtAhj895nhHXkXX2MpK6aLrnE4WasEbEEyF",
  "key5": "3tfB7qyR8ZDC5ZxsmoKgX9cjpDi91SkgiRrX4ptVSHRZXNbYtonGuzE4ZN8md4VsySrGLNaf27vma4nXV7CpLj43",
  "key6": "4KeQKgeWycfTYUBpiW2jdoWRvox6vdBMXNUT92tjErxUwWy3ZJdr1yzc33UwMRzHmb9hG16UQRwdWWaasW7xxSvr",
  "key7": "56SpECcZoSLo4EC3NaA4ZAZPCSYayLy6QSMW2zhP2dKQ4xKEarWwxyYJdihDHBeRbEYbVojsgM167q2ASmdHuknH",
  "key8": "8pLZ6qXni7D4461sd3xNjUP2RNBQV63GD5ZdCFxnvH6c4mvMUQn6mEnXp1iwKkHLLQedQjKKAszqjiaud4CFPQC",
  "key9": "396CMkXDkt9agcg13Y9y2FPPYr5yAH1eAbVk1kvnGYF7EN7jRoSSb9FvsoefqBQCQvbQTQRd8CFuJAEB6SmLsBEB",
  "key10": "3iAVihNT73VEtExJh2SGVKiyvcDeBHgJFE9xg1kqNGnxpADJvmej3Ujp7GmtAkhwJUZ98JfdRN63p1RAemEawfta",
  "key11": "3qoPHdyXDF41L7mmNbrws4LeeWKSTuVqoGNahskWqUb8t1nRcNnZUihWomW4aB6MRGhWetmESb3pEzYgBXGW5D4z",
  "key12": "2mx7MX119neWtaGDKzC1fTJyiXjTDphZJXfpS3r5ZEmiA7S9wWtxpaH2JxWWA89NCHcnsMjPJQiARQZSwUF6NZwm",
  "key13": "2gHDUSi69Ns1GcKrXatxdaDySrgKb3j63FZjaSTd1wkALfZbNkAMeNeLHZZnXzy6fuy2arpGfaLBurSNwYGNpT9R",
  "key14": "3f1Y1tPg2VTF1qSY3XZR9hS9qSfJGGWJX4UVvUoTUP4JYpiU4uWzquPPUi5yvbP1EkWBGMJJDZUrMS9cjhXewiUW",
  "key15": "43U6jedB5fhtJkFsMe3dC6QHpX1bT2C9ynT2hBBiwJEJxg6MLaThm7NqUtQFmjbTq755X97Q6qzacGTZWDeeojPW",
  "key16": "2kZW459ANendecoryp2hTZa77a6UgWtZNxFhvm2Yr26hNyi1Ge8QnEUMaWxJ2csmT3h1aSvS2hMFSSuj8PVnbpio",
  "key17": "4m335LE18XvT9mgx3TRDgJDAiRRhFkYVjGxh94caLbygjuXUy7yAx7fRdf38vhxFPWFYwfKVhgAg9YGLBZQTim6p",
  "key18": "di4umHGJJXh12KKCXQfnPnhRqjLm3orowgmr3uTP9LrTjCNBqbFtrZ1AbjkTDBEorkmh8sLKUGyttVg8h15QTYA",
  "key19": "2uGBZbdJuwdq41R1xb33MUPRA1WdwTVpwkDTzKs94Nt9hBXZC1NBxddR43rQH1oYQJxQrvQdBy6gQU6TYdBbAQHZ",
  "key20": "5hw5jakHaztHRFgi1cEvXJGVzxeZFc7ocpWXYA7MF4twJWLBwU3f5GpvruqTN2V1kXahCVRhad5yL6Mgy8MpNbka",
  "key21": "3YUJodQo6oPA6GrG2wpf7cGA9FRN9F4r19QisezmuwpM3xFTiouGy4t4GhRCPhVHG8B2PcfdGAVePHpRnmZg4iCa",
  "key22": "3mg2WuG5XZ43dg4Px8zZ6eVDbQHDGPR5ovrza2q2qiLZx1evEzbKVrqEk688zkxRb8wAMLAjr9HEJKhNLundH4k2",
  "key23": "2yNuT66TvJr3aMS2fFHyVHhdMd5hTPfZShN3DKojc6hHfYS8Zu6z6Rwm64wnGjqXZFKPrL5G4C8JxrdhM1jvYdj9",
  "key24": "5HRG988FYXCejaoPCALx5uP6CgUqFzGv6wR8rD3Sq9E3TgQ7ESCE1vVtuwTWH8XtXDuRJgZQYBnGL9ps4dYzPtkk",
  "key25": "43tQ3qUtV3szuEdAc2hy6E2apCFQyDNiiRMwLjcjQtofeV1fnq4XR5fBSBA2kj1amptLJULTVvYXLCEAB7JaD2fV",
  "key26": "5KAoDjfG3R2zXKtsDKu7xjPP9tcXEZuWPXo3Vbud2rqfBmS4wxJPFaXLUxCZubJ3kt5o9J13KhQpSdKiN1hpp8G5",
  "key27": "3FJbhYZkF84h9akjxJsexzty17XxnGDN94rSn93wEz1o7YkDPFKo1TEJU6Y1zXnJPiHnuWSm1oh41WQ5tQdt7rTF",
  "key28": "2nmkbFMcgL6TPwTM2SBZszYMP9EzbJRrNnyyidxc35VeHMW2sKWjescQt2dByC11hXkWw42mQds8CMwHwzg2gGcD",
  "key29": "kzTtNMWcty74FnG7EGWWbf5J1p13kFKfKxX5qvKrNAxvq3cY9wPdkQsFu5Hc1cFeNHgg7Pyobqx5vi9P5G1CjSJ",
  "key30": "3ADBLy4YC9oyeFGTP5NWjPaFEAtE9oHQVUy8iAsdBXVgxyQx7fqZf3JFQeo7n3jx8RRwzAR7J3RVHwFYQv9k2pxK",
  "key31": "5JdoVNPBgsAtV21vhF2DexA6T1C8m1pB3pdUaJesrSbSMEcsgWcfN8HN2m4dohdxHXDtGCKjmtiKBHMr1nGBytS1",
  "key32": "tesjMg8zppgcfua2MDtZ8SAvQzkWh9gnKz9cy59ypEnf7DuiodCzBQxDwKr1tydLN3VU2YBTkjzttRZF9xzaFAd",
  "key33": "5xkvQzbzdNExT3RG9vaWYZ7UujLZtvbKUbFSKgjgLS7GUVsg3GFDE76Xs6Afx4UZzun945oMCefdmqa9fStgBusX",
  "key34": "4moSMRHBsQZnn2LuURxgjvgupXLCxQbyCSWR3X2TWMjbBc7XaeUZQjdi6JC4xHEdzdah6k7PNjBg79wrbLvYKExp",
  "key35": "4LNfkcGECmZwqTibaruNZSCCjA2sH4s5rFVvHuEFz46DSK4qfFyU9cJQzbT3W3r6nUbmZHqBoK1zUyZtBBdVMMxZ",
  "key36": "2hiBBQnk6R5MraQYNeZ1tALBKh626Qhtey6is4C8VBPsGpVaH5MQJqgzTmqi21Z6spfUu1j7yAKF78ujVt7oYiFR",
  "key37": "4Zg4jiVSjBfi6xfVFqBpiXL2ySMxewTefJMkTLDYEgALbXep6qN9VEUDjcGjhVTfyM4n1xCqdcEevdBoGxBxe9FW",
  "key38": "3SRhK2LWSPJpp7tXrznZkpnBYnUDjCMovf1jjbpcyqzCG7V9op3uw8FCkoZVf4YVFE8AbEeDFwEjbLaQKwutaY3B"
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
