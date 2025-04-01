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
    "3AkzQFgpew2JddMgaQbhLMH3bAkxthPrHc8zroDw9QV9rjux2z1nP5P7UqgndBKQWyk4etND74LcqmM3r8ZBAKQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ZVPMHeirMGcN2Z6NvPdgVujRMZ28CUsWvvBLj1HyDmR4LA3Yq9MrYQi1bhut2ug1DahTptxKNzxuxf5varP629",
  "key1": "3SvQiNWeXhtoa5snr3J1MqB3ydxVzRCE1sgQYMJQ649ey8rD6Cj7ZL9M26jJ9yv6Y8RHJmMA1uTBJvW7jMv8hmzt",
  "key2": "3MsbLRXetnK27XegdkYUx4fAxYCxqGm2BhhQnhutvM2Bk54T49ohwb7y2gJvpzroi6kyjRdf8Phekj9fVWXTU29c",
  "key3": "4aJsczdodomfoSVVvKb4UYQQw5pYfyR4HfbA1X16Vr4FPEBBqFHuyjbciJfveJPAm24w5madNBcK114LPLMU6aFz",
  "key4": "1u1oFcdnnnj8s95qYYBjaB8WDWLr7udz16a1917y1co38DMwa96o1auEbMoz1XYH5oXQMFjagyZM2ZtaGjjfztf",
  "key5": "2c6yC78FMmgiNvdWEW2utYNoJvXGJRqzokJpcdkYUjPATvb7991kHpLdCeQMLhJRQNnc4HtD1vnWXh2kQ2vNknvB",
  "key6": "3x2xonk148aF1ZuJh7AC211uaMNQJ3NQsCi6x6JmbmvUYpMxRcC8rtReTwWoYWgUXBNDLdYkDgbMrhCETQb6TJuM",
  "key7": "EiApa4yyp2CMcy1d3trisFYhRhrYiGw7qmf3ySE4MEUjfcCDTCynaL7YYix7pwa6NRrBJhnLiNgF2bxw8Dj9Kw2",
  "key8": "ZRt5rAW4p3NSwjzTA34iBoSehPRiFagcwcbgJBhYmFLa1C8zHNBZ8Z2Gcoj5CSXD7sarQ5EajfNTfpTBbm6Le5a",
  "key9": "3EyEVFBy3odLqgonbamtKeVPiCC5KB9p4ydWP1FFAbA5wPnwx9ALUeT8RBRouSWWZUkU4WxJun8rpb4gCmrzouc4",
  "key10": "33jEiS36WY2Dn9ikEGLhZDHy5ekfHJsaRna9YAAejiN32TNL93SHeYqZtNut34w1on2hoTSAtWUnGrZdvo6orpN9",
  "key11": "3qVjtFNkc5pT1SArhqaoaceJzzJEobXG8H8EiZASfCgX68uBCXkMcwngEdkqgXZM3qeYxFnGEQGKQzc3ndkwaFiT",
  "key12": "28juiNcQZEyzQCEZWuB8NEtWjLLRzbimoVSGmWPSvvGHqJgkpWk1Fbr5ohijUHXioVe5LQm765UCVdnRWgDkcxy5",
  "key13": "uyEurZ1fzWwZ6P945ytrLQcrbq8qPXuBU48bqfvkuY9vk4JB5TAqnTvQMdu3L24FvjXioJujUBf1QWpR5cLLmEr",
  "key14": "2J2DfTi6NHfvdJbQuuLL51C7sic18ocw6f4TxgXWCkpH9NZdQo6RpK1uCQo9wsetw5N4FxrHvDMXWPha3MHRftJq",
  "key15": "4QgkLrSJnjgxV6xXC5CNdSHSNq3TNcLr6gZ4xfdrGkTjZxmqwt23WiEHBae5dDstfQKx4RPsgsM78bpJ9qEMhaaj",
  "key16": "5pS6Sjnah8CPgPPHwectqz75o4MwWz5AZJdQ91ZgfytBev9mRZ7sFnRQV758zF7yWJU9zLTSBikbrNxXWxoWD8gA",
  "key17": "24rG2rAqMPB3AwYtbPsWnSxjNhF9xknjTuHMGEg2AhzASo3ngmvVNfbGhWC63p34pXnBWPJjxWkZ6tDMJekfJV6c",
  "key18": "5VKjs8WzijrWSzBcPAKncLPet5zqB9QN7DPsY7xMHUMC9a7BCVdkV1AjXQmuUqh1PAKwhE5vGLRkY4SsMR4zBeZ",
  "key19": "VKNyNGcLcKxq6tme4HtMBFA8rJuyKQQ3XTTYSnPzuSNX15fzWZsWgbhkckVnEfVC7gLgRqj34PjsgfN2ERFPsQL",
  "key20": "25Sy8BSQeCyVXj6aAiuJr9eWfiCue7sDjBStLsHfFHD3QJ93rLQMLzwTEwxDjm2LZj6ovsJFzBaty483k2n7xije",
  "key21": "669cdmwR5qRcaTPk7QbrcX8vYXCmin5EPwb61Ai73afPZKgE3osr5DW6fUURqmKLuhPKWDmZnVFus4gYNTSH2SJf",
  "key22": "9mEtupNTLtLXYbVC3yNdtLTJUP3LiMidnHSzd5RhhQkSi4uu96nVVJ4zvdENdb8A8fs7iAM3YmtkhzPgG944hGL",
  "key23": "WgdcexQWXonDKDYbN4ux2na5LQXEeHU4m5NuBGebtLSJwn6DNpTkQJNFrbPVMrw4emEBcqQaagmxV7hhQZYv7Qc",
  "key24": "2xU8VFjwKFgg7JvEFtQnKxcg4j951V6BjfGRxSdfXHzzL4CZXvRfALNn7VeCmiuFPYSegmLSw6PndUM3LRqSuqtp",
  "key25": "32jZaRjfVSe8btT7qLtsmYVAZhKAkGvqbFeabupjrgZxPpky2K67xZSogRmrjA7dkomKeiiQb5R4fwFoywF2Bp4W",
  "key26": "2u3UhwsycCGuHg6NN9Ui8ujjXTxNEyJ1btC8CSDRvx93yhW1DrUUA8UmQn2q5CEu3YZd4NoXwca3oUxUYhdS5zFo",
  "key27": "5Sqq4PUg8vaCRp5gzPSDkzjSbcwtANNSwzFSLGeF7ou9vHU5WUC3qdneaqafzR62u8xLi1s4zX7nxtkxdArGWpP7",
  "key28": "3ffzaR9Fb4iYPFFccN6zMApfLquzMoSpzhnSaaicSJtRja4V5FSscmKeijqhZKdNQiyYw4SyJXM4QvFkUUyzJn4G",
  "key29": "5pfDVKqB2gR4vWR6fHzVFrfsjUCxFagNkb8RQSauCcoeDKooJprdGLbtU1XmXu2Xiy3dDoqTJ7vbk3KDdWTmzDXT",
  "key30": "2J7Sztbb3948KD3euCvGgbTqAsnGKqppqGAJ3d7Wr46B5fJJvpdX3P9uyHT96i9xzU7chkHQdVAwDZ5hBvzmi4ry",
  "key31": "3gtaBGrU58rgmFfq5ZKbnRZ7r9ngeWLJrv7pdtpfDfthy6CwixCVa1bmJXo7pp7cJS5v6hVx39dgHJEZju8s4n6d",
  "key32": "2XJgmT2GaV1tQtbC53xBVEB7TGPah7WCoiHEMucUBhvsGgc6KV1wCtDd8Cc5fPziHebTBb2qPZqJscn2gsLey4wT",
  "key33": "5ByAntQUeEFb7pbhq2eCURyQk6jntXBDakrp7KqedZ9zRayCHMth5F579K3fvuBUhNid2petjx51D27eXmCzciee",
  "key34": "5gbTnmnaBzya5G2BnTAxJ8mxA777XE18RRrZjzJgKkCBhegix6V6BJmELRcD1eg9tzsM3xjhJumn4x3mmAgTnqTk",
  "key35": "5fzSSv1zf6MeCoWEKr8r88u3p38jiV6y5YYMNBZ2qhAWuVBp7tMtVL3U6bfdEhZT5FS3gseDRwyPseXXcjEBfuhD",
  "key36": "5mcp5h7Bw4dUPdkHdL4jZo4327qNC3syQFsRzZL9kDodFQyqGua1avc3B8Z7EYEjex5f9scPEbsgDBsW7dP2Mz9f",
  "key37": "ZgAVPhKwZSBDdgVXAY4QKWcff2MGEVBQhgsekh9qyq3sVTRY8onVb9Snrezv5H8GEuoPPQEsNAFVtwwyaL4TeFy",
  "key38": "22ry6mGi7NKFZ6mLrSNtR38xGd8mLewPfjScBcdzNvf6Zqjy2G9sS5hL5biAqGDGC5dwDbPWaZr1DFag7Ws9RphB",
  "key39": "4XUGfy6GBFpAe46wHLha5aHGLmuPpSS79FZswnmdU95Nkk5aFDXdUoC7YDAmzVxLGWWKH3UM4iaV5QKScq3yPRGN"
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
