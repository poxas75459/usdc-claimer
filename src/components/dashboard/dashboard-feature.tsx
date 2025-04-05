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
    "yjewX3aHxa3NNUMJXDhEM4aS6vsDaXfjmZ28ENJV22anbo28ZZ2rjQPyUULR1qiuiF5Lykwt8VDaaUEbDWFStvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3ERjTgGZVNyZ91iYMiiAmjKRfgCvhhsAhPR4pDspf6zUWs1MN3DuW1MyzGArXb4yWaEZeCYuEF3rgRa1YD42gQ",
  "key1": "5doaLra9BVMwdLhenFaAHqQVRCjXPTdgqSzYco21b6ZQguNjJRiDK55yVm53ukh4iT5S1hxxXK4KqQr4kXwTkwSZ",
  "key2": "3k9Pg2EMHq7qYMTgCHpUir6GeUzZex6tEukcS8wZFzraBEfSC1AGjna8yLmpWYrugS7EdBUyhJ89YCUydw5wAs7Y",
  "key3": "2R1SNmNFb9uZroooSCH6GrgGsenmivbCNdzBxyLrG2oZ2rwmHHvWfQYa9zj6ATJFX63wbVGJxotfR8iirXYMkq1j",
  "key4": "35ZXn2ohsUDq8MXw8qmHzXodUqJB2FVii7XSingBjfewVAmiQadQeYzsoXBir25iP5DKJ9aoX5meU9gwnSCGBLjp",
  "key5": "5q6ZdJXHxyVKHzBbh4vy1bFnBheziLawtVQNZvJeKYYcs549tzftefWurG7pzjQwhcgPnkq4QnetbPPQuWYzKUr5",
  "key6": "SrFSzoQYzoiWXi5hwKCF8Qu4PeyNBcLnJHFLG9FvkUCDEqm3HvQGG8gEEW3QUHguJapuZMSufznYth26GzHSYwY",
  "key7": "2W7vM2cPRjAkc9GAXmy77rWwT1ZXCSzpM9zG55fHkhUEbDbC8r1ahC1rpsS2AwhF6xR7JwcdmyUyXuzBw1EcVKKd",
  "key8": "3SuWrQtoHfeC5iJHvz4MQNXcBcTTEARdt13tTXb4HniBenjGhyAicwV2xJaiq73iZUJgN9paD712cK2kX2cTxMWz",
  "key9": "4bQrcVMboJXeL9JogEicqXESrVNUPzzHcDiDwdrC9rKktYWN4sZZJD2c54RhfH9TMbitWHTsFg59Ra2xhyNpmh5o",
  "key10": "57pHGrW6E4ZJqUSb4oTELBvJr1qJeDF4wPe8mMDThBgA6Exinf9yegMRuBQo7zNvvgjFc3RFqvMPcZrQta6zjY9K",
  "key11": "33EFFL9mkqtfctbziMZtQEzQZYVGMJvRWNExU8g9SvJaDThvg93PjoXJ7XSppNrLpGyNLtSJjsEWgPT6p8kEgmtS",
  "key12": "5hxUSrQSnRhkoeXacPgbyryGsCG2oTctpw2u6Po8qsfLQi8ikHgsaT6JdEGdAGfz3XVi5THkasWc9qeiQq1enar7",
  "key13": "2zpZQXYVHuneTCbuW6V3TZXcRA3cTNQXGTu2ufHysyrEAQmJi41ycYkKMuqaFa8G1GMrqConZbgEK4pHuEZeRSuS",
  "key14": "4EsAKwyJFUMFBE4LvVFw74drX3WwzwSNnXEFUTHoBUZhk5PqPCvrZ7BUKfkYZuYaQYoWFdhjHhVSditX6NikP3rB",
  "key15": "5yZWwjf2ee8zVnZfS4s3wfacS6JcZAXQZMC4UMQp8rXqVqCXoEayCtUZDGUQFRZyTUFPwE1wTwh3QmW1isXq5uvq",
  "key16": "2Wz9wuQVEDArNfN5p1xvz1Vwz8WbfCQeoCKRjmuR9uxy6oN7XfY8fchEXH5X5Gm8mojPeNpMbex6miMcwDagmGvh",
  "key17": "5HrbTeWzELXhZ43cmbCNucnNvJdRm1wHepc1StVANnWhJEqujc6ABNz8xc561P7A9r1AiJm9b674A3Ch3QyGYJaz",
  "key18": "4EJ9mBerqiG7yXFGPAdWhxJmydamg4AR5NwtBBpzaY7sMpgc2r8TKCBMUJH7tRm4cCsT4ygPuN7Rv43cpUWff6Jw",
  "key19": "PoRdodBf9Jjsvk4eLWijVoWJWVuDZvZqSa5pV8s7XGbJz9mjsg8ZbmiR9egMnq2myrU63nQeEctyKBkvjrdQTg4",
  "key20": "124i67mqXybGfb8qinQoSEtzCD5H1UVbSSRgqysiWYRuiTr6B7tQ1vZQjrCmfduo31z4Gw4qormoy35WTZKgZCKw",
  "key21": "2TcKr4aJkFqKf7aLegRv3ZMx2Ei3aHyD2EbkQDd3BfmiGn2Av5GRJHY7Xmc4iUpUrkKnrZStrDxvrBoPT8xjGcFv",
  "key22": "3QYfBHM5moLAL71pw3KvUbyewyptRna5rVG9cfun3TUM1uqKseWMJcGoyjcn5kcDzSfG8d9rhJ3sS737C3JTun4d",
  "key23": "C8KQqZS3FCdnUQAbxPeP5x9VrUZKCozUYZ2N9mtLuX24CpATgkFyXoZ1XUtyzXwn2ZMkv21PP51anRuvPGmPuqW",
  "key24": "4eW4UhZBGTVFBL1zoEBx91u4DVHMMmbnzyLbGnG2EsQedJ75rECr1Tq8ZytyifmNKZ6ApCY1ZiC19sJ5m3uPuvNX",
  "key25": "3qyqAUqTxBKs5nn1GH6Ungk9w6FTyj6boSZZiLz39GXvRPBBrySPmrsb2JvpRnDZB2NcVwfJCVbhKMGSc9ShWSVw",
  "key26": "2gANw8vMTcbw9SLeux65KZKXdHyP9dZ6z2gZVDPnkgcw2f9b2Srp8BBJHJWX86YDthRi8UK9zGnJLUfkWXg6PGTd",
  "key27": "3rxjsPuHYhb37Fih8yk43BtWwB1bjaf3ua6fGkPnQzbmgTdgv1TuRWfo6pZm3WnFp6UeHPNjauF65pCwwPU1bdxe",
  "key28": "4mNAvz6askKZVr1GDHXKDSZ3yK1gHgLLPcT8y7D5K6k9TibaBsB674F3P3xdU5Frrhf1fNMa8313Bit5ifuNPeb1",
  "key29": "3uQYdFt8VjHvcbvJsoPk6K3yGdHvxeNJonUoZRoBHw1RoW8ek52wZwrmMxzN1Tv1L4XK4xooYWy1nVdB13rvHfy6",
  "key30": "4ERtNo9BgyPV1xL7uBnHYrqjW3aDwbeCQHKrx33C7ySKZAByo879bxcZLF4Asnu5ba95VsMqKsJF5bG5sgG2VHp1",
  "key31": "34uVDsgYeHugT2G6WMoB6zqNS84YcfCD8TeYuB3fKKnwBSGrDGTDfqn3Vfk4N7qy3Y5UyYfaLSPHR8GdfQ8reCJq",
  "key32": "Rw5J55or4qTmsb2C2cdpzLPS6Zso6RbUHyAF55WEV9bxmmGxS84btwVQjQt9a3qbMjnX9mdsqPfD2qyoKniscUL",
  "key33": "4GrWxZ9Voe3orD8eA2S7ER1HyAMsXPov22vRt3zsoMZFPQd3wEQB5DtwccqsQA5gAvgvGPBmML651HKjkUiVaGUm",
  "key34": "JJbySLToHaAT5U1gn9m3tX4hoayDZH37P6LoPXqA98sXKJkUwq2PgXZDRXkUXXw6xfPM6QPhWumyg1LrANQiQTp",
  "key35": "5yeRMFbqNgzt4h35evxgybC3sNckyhWoyQnXmtvdLm19d7rWGpq7vHaTZsuJLnoV4b6ZpE9mAjs7Yx75VXUGH2Z6",
  "key36": "549Es1dixG1Sk2QzRfcvKgrf13b9enL8zMGRNG1n9Kd8qoaDuaWfELet8e5jR3CL8aDyQAj7Q77scntrbx7K8B41",
  "key37": "3kCbgk1KWiPLrde4eqwbVXS9Ls5JX3BAG78WnCGKNLgbt41uQiZknSTfn5JQ4aBcJw7WopKkq81fVDKQiW4QgWpy"
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
