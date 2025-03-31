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
    "4zjHEADotvmSdjZSc9iPuQ961Pvf6DHWPakXtZVqbRk8Kiqg1t2M1VTAa1uB3Bv8kMKyeNPrE9hc8E5UYVhj9WEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMaeof5epza8ByrLCMRpfCFdv2A1x8csFLXDJ1Ns4d7mQUsYjMdukRPcrMqHVTrmk9y5qhY5w1KqdftQs1jtgzG",
  "key1": "fKcyi4Kx5SEyjAH4C4Zwp3xa94ud2DMXoontP81rX6jTfcs3mEVoBjAnuAJ3z259AdCb6sUbeTH3kA1qL9fRHG8",
  "key2": "5ELqCCysNWgec5rfPvvvgTSEb48JaCMR3VVQTSeU6JR8P33g1JhLeCF52pEHnFp3HEQdNBmGq3VcJpuyd5nCTzoR",
  "key3": "332m6cVvftmorNFzN6Dwrh8aoY7S3aqjFRWa5XFnFmA55u3s6rDfB5Z862EjcSruip3NQfA7h1ErjgGexnWf9D3X",
  "key4": "3AfCbi7EehnNYvRDcKJ5aoipzfACGxvqfeLqArLQKpEb7rN7QLkZAzMTv3FbvNDBVkM1tK6XsCs84ReY6Zj73kFC",
  "key5": "51yTCH4ymDTBc56KycH3DhsZsvj2rf1ncSLjt5fNtPM95GEbxeWjtFrJrgupRhKE5KrYHhEdAKxeSd3FFLuZCGjW",
  "key6": "5jKRvwDnjv4YrNQMQciFNuoHECaH4XoFALoP1BsBb3JQJvaF96F8D3hn7gCwBu6TmP1PVdcsuk94KZWjAxzuDseu",
  "key7": "4oGcsYPrVu1p7EzooN4uehPQuQ1XwWgg9ihPBscoZHmdcyavKdPzo2qdfrJ43DfYw5YAAcVJHcYhvV5rYqYqwsjX",
  "key8": "634FnCL3XMT26vBNWYpwj5TZQboYHQCWPic2eC1XyWq62rdYMySG4DTG7crsp1nWn81Dnk18pG8agTJfFRjRaqoh",
  "key9": "4FghvvJZF1cygwLFXdG1n8wAmPmSWGBDsFGMDVusP5sWe3nyuTfyHC35v8674EzeNz9RS5Lpvxy1RNCQpvG6idtm",
  "key10": "31wzngEVXzJyDY18P3Qw6CtU4Wh7MPHkS4ViMnXRAuSBWVDwQkszW6RPpYY74G7vpDuBtGRmh1m2j6i5fh7xBqzV",
  "key11": "2DqmLxmbShPxRZpw7FRa4Bc12iVKCQNxYfHACvB4MTS7LQcQYikGLNhf7tRt2EjTp6BQUhjRr7jogr1vuHJUoWVw",
  "key12": "4xEzXGqRwHSZGwVDW7emdhiYQWiPKMQUpQnMWBA3W2sKPqenPvfp6tsFzwiRLsuQiYd9hbFxWJ3972mWFNoqYwXC",
  "key13": "63RtoTwKdhD48fdodu9DuP8CHswY7kJdJLdAPwfK7aTJHmmQfCZsqzqAwPa3S93Mohusv4RxE6YXSee8nYDpgP5q",
  "key14": "4nxmK1FiKqfR8Rbvzur3J81WZdJLxe6E5wz941SLzgLKHWdeJHobuioEwGmU2WjmXFfBAyfnYBQAk6d6wbGv137N",
  "key15": "3yediz5xAYDJi4UqLR8KpU4W4rStRP9BUpWjwDfnA9UTRyGws6pPkve2xs47y4QVzMKHHaX95cFKhUT6rTwyu4GS",
  "key16": "tQv68cuVH4Pc1VPDu3YuaEMoarJ9RS8RPu1RamaHNvXqXcA1xBvM4abcJRe8LZnj3KPSpZGfg4Dq9hDaH3kF4Cc",
  "key17": "2dMqJPoWsrk8avy8pbTY2FuYLyQSCfCWoVjPbtGTgXUjg4JDfoaMkjiNVSehLXRWAxKy7TFJDSvdnrYU6GJAU9dy",
  "key18": "4Vi5yUakzFhDrdYc54fnzWsrcLzprS92aA9u3JqbybyMiGkDKxY75zhrMTPezbMzZCv5XV2y1D5ZnaRkb2E2EC4x",
  "key19": "Zm2dFDz62ybrJUXmNm4ad9xxtysFubf9wFaxxbhngJad7bFnwvAYmfGLtdNzKVUhjx1PiqmuCBudCiE4cDuS2qe",
  "key20": "4VAb2wegi1nPisMBRmHHXVdxqYd8FHTRE1EU1vvqPnCCriypjKEnwtn42WAYAhgZhzvwG3s8uhUwacjFBXXyrnyu",
  "key21": "4LmXvpAD2KwdfPfToTomiGhYcfjARPwswq7djmGzcMBZ6yMSXRFrVFi55rUqsjtRevjX1YcGqR1NkW2iktUiLCgx",
  "key22": "4GfEETtcPkShgxwzpQmJGFXYGmB4KfpWNcZgnafVsxLWVVuo6q3uGDQMTpejDNhnUN7nBExMiJhkeZHELaCFEYpF",
  "key23": "3jd3iKufpJLrYqJEbdemnqNeJzuXYqS71G6c6eri94aYvmUYyLMBFLog8g6xd6jiCUdydfXmxnfCGMJt7sJtJm4G",
  "key24": "39iKF4ddPJoLqTBZ4cbttB75kpzQGRyLSJy7aLucjQNgKbNbG53b3VufUTeqdsu4dKh22wMu8NGecWorZtMTguki",
  "key25": "352gjMgs6VeVPeEDwDj8z4f9xsZpvBPzepXUXdt4NkA6wBD2YTJMUfi7z8pr1JReXNkfcuGYPUvdoPZrvwN9Fhji",
  "key26": "3fyJDiw3tn1tVoYwTqUJu4FVEcTMhXp4PxQyfiDfw1BNZcBTvJVKX1DCNnxNXs6p1QjqQSY3RdsL4RWnrgFfoDG7",
  "key27": "2RnBBTTKz9MRuf7sKzUAF8qkwc2ZRecM7ET4Q9EHpMgZS6KWoU3CUCKHsa1J4xoxqodw5886MQumCARb3ggLW7VT",
  "key28": "2899qJwjqPDXUCeZrTV7p1wXdD4jUQqHg4abBnJw7yVfo1HLSNuqpi5zfaZvDk2SSWReCVZjgc6dynk1Ft8cyjWa",
  "key29": "2jDQWFyE7fAWd6zko1kjPTrKSo9wubW1ohdzKu7mrQdkponM8HA3tC6W4JrPNyfFD9tNusdpNmHqkkfrce1y7Lnr",
  "key30": "5ZTWHBygY3TddpoBjUKXMqJfCGNaf53FBGzTX59gMXaGNQc4Vs6zWvrUd4QjCGxGJ5TB4t94WNCRVcbU2tmWZfyQ",
  "key31": "3dhafX5YKoWxWSpwW3EazsFVGX9NgQkjyfDWqZyiCAKRBB7HXQB2s9wgSP9CGydWq4fjQy9jaZSpk3QzPy6uSuTs",
  "key32": "oaAKLonRHBLwodQa9goTThVKxQBMsaGNgH6x1L19TuyAeTvQr4gA8LnTdab5KDfX2bVgSNcMWZKxt1iBK3oM4zY",
  "key33": "4Yt4xNcMCAqrmESQrxJWNq9P9hVznRzEFLCgwHujScW2eH34r2cQzXwLp39CsaFk9SGGVrZFsXnN6imT8qqBc74B",
  "key34": "v4cn4PJ3XTLpwbDiPR3c8gB1UqZ6Tni9EcCK4NQbwb1u8AFHHzv3gjwWz5LATtJR1arho826STaikkHoc7Uzb1Q",
  "key35": "2wS7Bk4EXaEzEsmTRMUNGV75tk9CYotXsg2pKjEF4FzQezTZ9xuaSDbnRBFoJ57RBuUt8rGyeMCjN72LUVR8m1zZ",
  "key36": "5di9bAMgTwA6wMU9Q8X6iD9skhfCZ4XQNChrSLroXs7mGdzV6AhjzNhdUZak5DoQc7NKmvVVjcDQeYFehbTbR76M",
  "key37": "51LjRGjaZDCwWkMMtCCV2468Z68EDRLZsGWZ85bFbvVPrHeTwJjGcSqQvoWGtRtdeCR94gkw7u78i39gy3YHpn7j",
  "key38": "4KkmaSCDGz1xsRUKqvkprVjAMdo39EWDkLoCoEY3DWW5GT2KSAMiHL4DP7UACKG8eJuWApxkxkVuYHFadmcYVvV7",
  "key39": "5sctpgBY1z6rh2MGx2EZXALLVnqWycemt2zy2c62fZ2v7Ai3y1G3gsBNDNdkGA8wkftpB8oKaFSEmcz3k3vcEd7V",
  "key40": "64FeZtqZjSYoCZrPnxjE24U8kMo2CTdJBFPq8pDG6JYu4j1bS21hj5kMZErrQVNhkpUCGjBDnova8mStbWLeGVk1",
  "key41": "5TN6T2UUbSNrVnYTzLyQWyk8hPoSU2qvozJeJYnKyBG5x5BW4ysihDUSYLd7KzsFjkMHPiuHEuJD5mmQxHbNRPJN"
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
