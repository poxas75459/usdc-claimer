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
    "61pm2WC8iQQaeA7M83FJCZfgK1TQizhTHEYFamS3zBB5oUt7qHamRffCKYtcZWL2poWNvQYpxp8e1N1rBN8uQmvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "upbjuzsptuV7FfYaHihyyG8Lao5BMmCnLGMhfWfBUZG8NmnitoynFBuqKsR6Nn5W7Djjf5CbZLqWoR4BmyFva3n",
  "key1": "5KLYUbBAHSEWR7W3mGFNJty4iJUpb8VX8DPKiGZwULnBBEvLrSfaP1Rr37GGaRNL658rfkHMyg71TTWbY3YNC5xz",
  "key2": "2YS4kkc5yTZL1UcF3qv6Xi1Fuhy5z4smAoqvuCxnGbXA4nY88VJtDXS2Cm9rNQJcSN9Un4meiuWQhn1TU9K8LiCY",
  "key3": "3Tzcy8Ryr3wE8i41TzvXhyR7pm8LZsXHMLE4QduGCgVjx4iJcodx8Y8EpG6xk6XYqZhh5vv3bJdkKpjyQCHf7Dxk",
  "key4": "5Ujhbm7bwUee5esUDmsbftzkWKf2HY2c8E9AW2qQm9G1s1nLbzVJ3N9VbnVDHxrtUJhTTT78gTmZAywXjCPgVHyA",
  "key5": "mLoXidL5xF276MT3nPwAnFThvKNwFcUy3ZKgrRjX4AkU2b1WM3Lg1vV8Qn4nzt9GzK9MvwgKDiyxn21AFFE1sL6",
  "key6": "4b4rB7pPF8QjGMDS54p75MjieqAyKyYroQQCxdADngHJFXzYzYjEJpfXLuUmdpjCtBeLo5vv3HjTDNVaJ5K8d8wk",
  "key7": "5nuomc9uewBTV77JFLNuvr9RN9vu4HoT1bwL556KCr8SUgRMoKRxi3QDaTyrK5xYVKLAAcqNGkWGihbCy55gCYAL",
  "key8": "5anMPuTWxMbDgErMCmUVErH3iEkP7QSNskHBA1Uirozf98i3Y48j3XK6aCscQZhtJBSuNjsNVb9KZHxEhP9SZToT",
  "key9": "4mqN7Lxjp6zExcbGjAkKXySitfrXKDnmtfJqBmUCCPUe5zX24SKq7kLVdf1MZESQF9xx44Fu49khmWmpwBsJqtNa",
  "key10": "2mh32bsthLZQJCN7u3okEhYGpxxFL3Sur3XH5WQFTWtvG9U4Lx7bNVafeFgAnxu3jj7umy8SjLM3iggsjYrNGd9o",
  "key11": "26JSWxxyzpJLPA2bxNSWtHnacupnu7yyaTqTdXn2oRTfDeYPG3rZg76qajcjjtttzbrk4ya25sWz1ffx7fJMavoK",
  "key12": "468EQ8T6Kod5t34g7HEWknnZJxfBM5o94VQCAAZMeoRuyzBeai7ZocbfoU54kyewTjDm3Euq6SCA2ZRxPUiuAyH6",
  "key13": "6yPrGdzzSGGS3W8v1aZW3M7i4uZnBBV2LprawPGPPQacv7LcbxwrRH5FYrLjP7pXRUiJ7DxQEKphiejWebW3jef",
  "key14": "3JZRJr9oLiLtcD7pzLz8UQ7QGLHFnA6tXnc2ARPZitjgXD6CictZKL468YwNKxEyF1DrEgdsiB4z6wqrjBcnrGda",
  "key15": "3RGua9vP2KurQVEs9eCa3rLKgziLo7R5jmPHzFHrZ2wsokCSGEykhQagHTF19AWLLmrYhLXnzQuDHximrkYCteEa",
  "key16": "xvoudbFYnuZK8E4EvNTbFeZh1zvULefFaoRWFbf6AiNDFSjzViNtC3LGzxuTVEUv3KxfSEsohfSvM1pxwWeqnzk",
  "key17": "t92ZQ8Hq8ASyToDKbH7bCQ7ivb2QqgwBvim6bQVcvXpyx7NzCdjBzo5tk6DjKzTuAQdVPK9maM5nwDzzPa45pRZ",
  "key18": "5iuLoMgSUzEEM15zfYKTPiF5pBdqrqjqTW1RqMJxYPz4hp5nt5sL9E8hxa9sgGsCN6oF9aMwdhWCgso17DKyhyaL",
  "key19": "5Z8fNZUvANMBrncz9CAn1CqG3rNod7zGK2N79oRTKLYnwgkG6bkWLcf25kPMP9Ad5c2R5rW9FPZah6tAQGLowQpe",
  "key20": "5kGRksy4VTLCFxVnamz6JTzAgyamGiEWNRmwKa7njzEDam9rGLU3RPsVS3KwEiDJhDuEDtwLoYUvQcpS24oBKv16",
  "key21": "3VDS8euZDjAT3qE1MHt2gHuGw7AhNj2nJWiTn3BqYaz6EAiuWJTMWGhqX4vWUxuycv9AH3Dds9gCzv5mvzZpNGb5",
  "key22": "34y9A5ckjmADpPrFcFvDybSHZNU8jgsbT5aFAM2kbt5RKWimE3B4XBreibt92w7V3MGd4UNWMJSREABQfnZDyerF",
  "key23": "46VHQwKtiRPhuLp3voLpxYZVVaBSL1DkecShT8qFECKgVixB7YVyThSkCR7XzAQ11BkvFa31at549jyhRWG7scGP",
  "key24": "4prpGMuucRTwxWCxtEcrCpTPrrT1yxBTq3zvH5rxYX9LmYjhs81qcEigYbDXuLdBxFLD4SHTkZqpnizWToBWZCmm",
  "key25": "3eU4HdddhVe3Tf7nmJAjxE4YBYEjh4CeJzJiynXKvZz5k83EJokApsFnG6GkvoRp1ToC1AVN8g4Ho8eKdnoqDpjr",
  "key26": "3LwZfZcypUQHzh3qURo8E9yYbvLhJM9tPM9z9xCHJUdRKqyv3dY3SWD8jWRq7UC5PVYU43WwEeYtAbzBiBVciSaG",
  "key27": "5aDFFBbLPxQFL9i8WACtprRxKkYb4QsCk2i959VLqZyno4zaTCLhuirUaRoFUY9wruTRqbwvKG4zyvEhUdnfRHbq",
  "key28": "2apZFqak3DoUrSQbeu5frnp5EZND9Ro6pkRW849rv7M9qBm8rn53yctivG2X1XQpKQdc2FAQ936Hhs1SZRmAPx3b",
  "key29": "3VKen737fjWtxkre4jNo5pKRfz5R8ap32eZWcX1dNSBSaTdgGaA9pMtkUqmS6MTBecGNuybNBhPxTti4rPRsvVcC",
  "key30": "MHZDyetzxZMJvc7LDp63quAmE1EqvJfH6jwiNwQyiWsWoySYyV9mveUZjpDWLwo6Dq75fR8JsEbPAN6LfeSpjMx",
  "key31": "2AbaKPYMGRppDD6npNcCgaduMcDBQ4cMFcNEj1tforM7nr7Sbxscu1PbeZNNZMi25w5Tjt2aHCdev9G7R1zD72m5",
  "key32": "51qjEctdc8b4MYYxTMu8yffXgsFzyEBPnrHvHzDE9e5cYQ7t7Kn6T5xS9Hx9Rm4v8DwkCC1daJwr1hAve87UGYBN",
  "key33": "4nJVwFyr6bPkwGmtgYGzSSAAjKzbCgtT5vxVuRASYGAsbzhh7mVZSAL5PTxuxXbpiP5roZUs8eSPPtbu5Tp1biY6",
  "key34": "RyUmvM1NBpgXX4Y4BaAvR4fiDYXDcB8bYMLb3BBS2jZKppoDy6PJiNqLmdD6UULd6KoWJfocgqMU1FTLF41wzAd",
  "key35": "qsR2Awv7G83Lx96ySYnYUhP4mGkeoV5itGXhwtu2gtHHpjxoRyocQuxu2Wdoavh3gEg9tpTuViWuASPKsWFV6CR",
  "key36": "33Ch82mFDMbKGPFuqqPubabLncZSFU8GD54UN4jXTpvjS5C2pCcfNfrJPAQQC7RSzyiSdYmV83fEbvHjdT9uMwki",
  "key37": "2SJwHuWtgEKc14P3FvQhK4yC5Y14JJBVJ7VTMN3Kr4DzLqAwa6XScBV12YmcxMVU53gM1Gs4SmfJ3MdLCLuo9fkp",
  "key38": "516C8Ju1pJGRdL7rcQzjJzZyA445dskDYZNj9HVJ3gyq7Ck8qbk3naUkdm1hGydLznGbExfbPYLTtqAMpW5tuHdz",
  "key39": "W1gKcP4CQ3F4kR9vSjnZ1wqBpj2TkgAayw5fnL5a7F1iwkKVsFdXaWv63HHSME1XkgSSn25uJxAzXMsnWDCvU41",
  "key40": "pLC5W8ReoXP3uD66dFgBVt5WpfJBBGFwbGGC2QyhAmExq1GV3t4NkpxyrENaNhX7UuYa8zT5bSS7J8goJaLTcFv",
  "key41": "2V95LRnUCaotzjrmoaCGVqDgwgSP1tuhuZwThyWJGzE1oxrfmdpaH8qCHQ5YPmh85Hks52UiLi49qs6Ko32zPRSD",
  "key42": "4kphVdsmjkU62bMa6f1WhYDCdYun6o9q4BhdqyN3D5WLdWgZDdNzHZL7RB7nwe9Mg8jTpVXswXrFdd54ioKkwGAN",
  "key43": "2WZL4oSRpD4NcKt6gMef6PUibstwx8UoEhXZ7ca4Pwm8drmH8LksXML5LAWoqG6St1DTWbPqFdvGQWFTX9qxY4cz",
  "key44": "5hgytdM8qCMdE1Y45vMGoMr7LSGztJCfr66F4aniFJrokDGLsWRrchM3dbJKFXrPREC8H9kRP5cEwsvVqkymtyGR"
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
