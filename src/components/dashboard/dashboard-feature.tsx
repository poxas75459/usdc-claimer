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
    "64xh1nyWMFJHcnG9hAAAM8FDPozFuUh8f4hw1WLm7NSKghdGdKn8XZwkUJZt579HzF1oF4dULCfYafY2HMHqVYa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xsoRMq9zr6wKNmGQtds5YTV2rDpUF6L8HRv2qj3NK8R1h2SyksqpSjwogeouqyieMQP33qvgcHsFPxcvaMmz4pz",
  "key1": "4YhdkN5gGB3q5dhupaJQa2cXk3nYiAazgrFgapwKSsACdmERkbmqrad9wbkKCHGvhLYrcVDS7aanvNkYMXK7x9Gi",
  "key2": "5j4JDRyLTGyKBQs8TzvWA9cQoGvo6i1K3mbar5ph1cDGQY55zJXFWoiWoGWe9uGoebjaPGxeGeeiJr9Gx2PiFAX6",
  "key3": "2PnERkWApDbnVibnadJvV5mHaLg4DiFEeB9gGmx8BNbhzA72n1kEpJThQJwyHHgSJQBfJ1YHijUEu1YxM2fAxM3m",
  "key4": "2xRDQ9AEjmET8LzJaH4Kzsd527JZcgfyWZbaoZjmEG89THkB754tYvK2W2aMEtBwkvNGxDhW6j6wQKCnACtPiGnJ",
  "key5": "ZtKb34U8vUr5Z9bYdgBe514R75HBFrXAfivdwoUhnTD3qvdz6GvvqGEQCjKHAMacva9qqTscxQWejJJrBB46iSh",
  "key6": "5nCYRR4g1yRM5p5gtZ1aPK7GD3dPpmmh2nQUUxXagXVJ6LzjNB3VLdYmteJtQFLR9MSRq5a8VmM1x7i8hxNdTejS",
  "key7": "28xapfsNxjrKdtYcpcZwk48MBpRQXS1GmwSDRLFTCb4raGcLAhMFj4wtVeAeJSTc5ymdiMzKUwBjrp5aBDWNSbUN",
  "key8": "5AnXhgig8hCc5yGEV4QE2vJN233S5Z57KwzWurNYQhbRF7RFdpnwmr6UWQ2SBj2vDxpShLKYtMALg4pcftMbRhGv",
  "key9": "z3ykvdoRLq8dMRz2rbk5bMH7FvpQuXyUbAqA6MMtv39Dz2fLh5j9AXHCx43nsDMPx6GPSSPvKSdtTkTfmxLWUpf",
  "key10": "5T6G9UTzMnCwvzEgkH4j95hwuJzaiw4d8k5b1tcawguVMwpct2eGYUDtV97LApHiUF3BZxvJXfaU6RQLAjE6tQvw",
  "key11": "4XaNoU6vyRS6j1HvbYCRecYvcEL952nrusBSsvEmvhEHWndD73sLyfi2TEpaYJ8zXVc2feSdvRHKBxgDmGtafz8t",
  "key12": "5z1o9NM7fAkdBvwmKsTKcdkcYkbyWCs4Ud6LYSRCURP8seeHitRd9wogKJxeFvKd6w9DbQvRBcGNsyArnnFRaNu9",
  "key13": "53qrqMdscu7fMgHRCj2jZiva117q7pkRkraD2tX1HZq6NRWce8vQfA4jpuQCbSSpVpUvt23fxXsfxWA346z9qWXC",
  "key14": "4iV4TDdUzM7NGJXjtPQpcDJVKKU7MHDM1KakuHSLHTM1uk3Lp2Gf5UcVoYHfiFZvSzSoq2HaHLKCXFPmXq8Gg9Le",
  "key15": "5KuUcfNa7TLxd4vcoN2oNKRDatiotM5e9v7Rj3Ha9YvqAxXFSnSsFfUvYocgtfqNoP5tj8a11duhGomdsQyeGueT",
  "key16": "MzTNHCnkDdNtYkvPR1CJ5tn8ipqGUGNCZrUMux1SYZy8pr59wKZQfMRsFqPmjPvSwi2rZCx3u1YeuyWK7nKprqy",
  "key17": "5hixg6FUGT9eGtjCWQsKUHjh59JLCw3SWCZsxnuLoYqxh8HUazNZT1hs7ezSoyAWZ64hfV1rpmyLrj4jdba7bej1",
  "key18": "5NY4MpbfkqnLhVjLQh2dQ5uh7cfvqnnw5KzvmrFW7FCsU7GHaQe8sA4Qx2dskt7wfnJ9tvLgXXnHHqBytx2oeRcz",
  "key19": "2uUwQfbqMu8csAJn4CF1pHdAdyo6QwjTnGdht2tjuQnrvRbbcjbrRaSWXBWSJcNFmUXXXi3wSMj2FkyfFheLhJdX",
  "key20": "72JxZjJr61rSfJXyfvyeY49KP6tnQATumbX8rwsCXB4n1J1RcXnQeQvzvRqMimComPqsqLoU9saQ2xjU7Nu5H4o",
  "key21": "3T9YCNwGyKGe4FabWKUvqX5yWTWAYHUsHbKgKN6QLnsraGWLRVMvzqwgMRQDNtakeGe6b6K5bqfma8tNcj42oi6g",
  "key22": "3bP4AoQYmY1bTwZJVVqt26QNXnTiZBYq1fTF2jN1mdcnDM5Td9yNNHKJ7mb5KSou9RJ5hzEqc6jU5EyD6SZN8Ncz",
  "key23": "wyseFxAiMv46Szjqk5uz2v9bDg32EZTtbxRPj7y7nLGFvK9oyBYAVS1EAseAXWe4EGuk7J4cZGYRJiX3x6nH3wv",
  "key24": "4gHafxj6sWwZcfJAgSEwqzp5zVyJ7cEkNPL3PBJyLHuKyDJj6fx49u1XpUafPA6gb9WTjr3nmNaJK1UGwZBxLHtc",
  "key25": "2oDWy7guUP5mrD9dg5ZweNc2UgLrf5n7iKeRjHobJuwFpxASWbu41ydqogodT37KX2kYnqhopvkfpeUoW4JA2Mdh",
  "key26": "44jYhPT4YEC7bbwewfyjw4ezGWeeodMSTTnWMztTL2gWyp9FTHHW17npGMk2MZRMzNKnjhaAJ9SKx2oufuxcRXus",
  "key27": "2sLC7UxcGsmZB6TXocPdrFhZ5austs9fJNqUqyGRD1p1dyZmi5gca8VjydmFHkcKmRq6XZLfRN6AqjA3SHYGB7mb",
  "key28": "4XXfZCyLkWgsCCe1dcSxrzjaoRNroVPgDGt3VRjaEKLY2UQHP2sCpQnDLoSjdQmsFooVVCNYSuo5rDPgUMpAfHFd",
  "key29": "5aQ5ygbFPZ8mFYeKPidGj9PDjF62zHUBRgwi3Fhy5jkRV3952wcDMRU4nPtRAcP8STsF6j5sGa9Sb4ttnjTeYhWG",
  "key30": "2fA4B7fgncvDumRNtdLmD2z3ZgpRfFbpeaLJVDmRQPcSupYWWbVERFJ1DNURRUSaofoueXCm3MdepfxM2NEaoANH",
  "key31": "4achcATa1at4jJn6EeT3z4Lm3vCg1V5C5qUJZBRD1GuKNbQ8Y4ePoRsumoQANGJtTeGqPogmfueyrCsCx6y9juWV",
  "key32": "4g2q1pHVA8Ct8AeeU4hrdLuRqiTA2AdyuE5rhbvccxunCDb3sfZkWvL4At52yqtYuJonim8gRg3xVrLhf24uY7L8",
  "key33": "5ygsEkhRPfXEmoT7GGkXY1gGJ17amcCmgQGShCN1rTVi7xDciDVbQtR4QjVD4s9cqkoz8FaYLuT8e9nE3p2D7NBX",
  "key34": "616tNNvGEpoysySwfXoV2KFWdAapakJ4UNF1WeJKN9CRHNufZqk5cM3VwAchPY1mx671MTvo6UPnGwbcMCaenTSK",
  "key35": "2VvkSAqzraGYW4zsFBhjWVABBSX3AQaD5YFt4GcQbHSGWg9AfdXgznWVyyJ4cefFt8WP3N2uoB6xwKWB5rtommht",
  "key36": "53y9b7jaRBv3iN2qyWYEEsvGGKrZ1TZXweQd12sb5pSupVwYhs6neCBssep2exTJuXw7p7dZoy6fTV66ZpQKxB5A",
  "key37": "4WjhCwUbR8TSfXKgpVjmiuqMe6SqYnCUv8apGDtqYyuVvLzGXmHNeGLDtKHSdMmLMEr9rF6ZtrpmxfwWRuPHvPaD",
  "key38": "4b7VpTqUA6HD7pBcKscDFZ7K3cqqeVeV1DHV3AmkxdSwQv2Vx1JxMf5Eg14UeeGsX7ZT8T9fggVAAdxune4rh7xv",
  "key39": "2asNVY5Vp2acJESqeVEcUiJvUypZB9vQQ92zMURb8xjwbSN532bDRgiL2CkfvrXAmKHBdMpAeRQ6GkWd7L71vj4K",
  "key40": "GGVdL84nTnucuPdYehMMrRbMqDTrTDuscHqvs86We7rJxr2JoFMwNKnGq9eXLJ1rPbqgB25rgJFM6JfcBvP3Wes",
  "key41": "5pXmac8zcnuQV1aB3VGKGMefFe22zFr6XbzeZEA13TkUKa1tc55hzcM3GYjx8xUGfxeb63fqrHaBkA9ztibqDD5A",
  "key42": "2WJjteXbQyaK4Jd6zbuVXi2rMQof98xt9M12qP68C81MMY93GUSP5LDcNRj6WCjaufD4Zd3bFEk8g2Yo2LRFaMGY",
  "key43": "5HP7qoJ7sBb5oqrScow7f4ZebGXjF3gLozivD4xVaNmzVHzvgsuQ5RZyDK9Ar3nKS6UJ17vomHyw6MooJGJdAYfK",
  "key44": "56yikEnkigyEmTqB22H4ARdnH8dyxF7W6N7DAeZLbLGLuWByj92iRTciX3QA8HzshssHHUs9VTkUjGohThVY7qQr",
  "key45": "5UQMiXTVNeb3uH4guHwSCbQ8gGHLJtobQoz7bLPn7ewNiAhH2qSo2V6vi3Z4gPYqnzbxYTKeoXZ48rf4f3dzRGSn"
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
