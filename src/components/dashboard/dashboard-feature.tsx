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
    "2T9K3gNg92G45Lmv3NqZNWeiraSz1GnzyoC6JDvcKAWssJu5mCfj2NY9Fz8DCaVwC1haAiLHF42q1bG9YHnHFd6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fb9NBgkXCcbyMDRsL9a7WWav3WVYiyxNwYsVS4EJbRR21jyWeDr4ANo5kHmotuPgKT4daGxUy491NPvL2kmhQ2h",
  "key1": "5bhhQqLUq1cnNPd6bi1EngcUri8TAD4KwXTbcKx4R5w6TyVBDUKgft9F9yi6h4g7aVp6yx3LyHqykZP72LB54jKH",
  "key2": "5LLExB3XEVMTBbc61BNfVeWYFNg6pTXS4tNuZoaS8tpgm9vzyVfkRCFbzjtAWNkzkhaf1RTeN3D3Fd4rFfURoMTU",
  "key3": "2VrN8U8sQS4k2Kz9ZW5Gg45Xna4miHbSVirQ72JgVCWidjdRu8Zf8VMQyqiCg5rgEhXBYC9ierE7cbSmoW7tsvhJ",
  "key4": "33PSg5m1R7W3gSH9WdoobHg8s4jWdsdCMr5LTQ7Z3E7BBY2qJAWCDEaoits48qABWCkhbfBjkRAVXZcWckxrfk9G",
  "key5": "3k3Dsi3d3qsaEEaq6R3Kn3inGhyrqi3pu5fBh8SSN2TMSCyAXEyPW9ut2b1hdXfJB3qFwYhV68srsfR7ZumEFFZX",
  "key6": "2A5jZ46SHYFUWWF5hbx8TbYDBMn9p3iFGKtTaZ6GnsSH1c3bS78hCkS2QCjDJmQ4qyRaKf9aSSaftpYri4azh7qT",
  "key7": "3hP751biKzJx9VA62cE1Bbveh7ZyWzWhYebK6upbCX6bXobEDqeUUzxR4goFB3vNCjNmgR1U8EZeNezJV73KLFRX",
  "key8": "2qT6iC1w9XvVzZSLcJcvcC5atzdfArdJoqGLcPWjguGFRKyPFs7EJcyZKFnofH4zkMKaR3fT51oy8KFfFikxzYkR",
  "key9": "2oZQJP5tJWy7p8TGw3hNphjN7aUsHU3hG1HvLtoFQAiJkNZzvyFWpRCjPSDL3RhPwxuJWBqiL8yKn8FXFhJ9w4nY",
  "key10": "kFFKrtEVAFDkP2K3YtNySP2xPimvuy2nKc6Z1zJust1YngcSsgF2wXGjjYpBjmyYUgYQhH2pAWoJtua8QVkhe23",
  "key11": "5Rb3ChkKcNoHhHyvd41CAvMdHKd4oDm4ghG3aabbWA9mWfid6WWbmVYuEJs3Eot7AK2hejVaZ6QGLX1uYcMStFnL",
  "key12": "4TGqdVn5nNAhHudU7efBSTBttVr82Vy7BpahdKRS4pPdt9WKozG3yS1AeFBYNai5rr6H6bFG8rKZ5XNrKQKgkyow",
  "key13": "3xYiGVyeAZAEw6oMmeFAEgDHnpcEqZRzW58ZQThisdgTKyseURW29AgZv7fu5GnXfPx5JpE8RvBk39d6cZcKCvEb",
  "key14": "xrvAy8zwmib5H9hZ9o7y1AeH5qvZimk42F9SkNf5HsckkAE1TUfffVajhR9E21cXq5M6qChtdQtL9KhDW11z3KY",
  "key15": "SS9FFGTKs7dzDDEMp8tX3tr5bot9xeqASSLDubkwPEFMTrjb4W9emwW7fTK645JU2Ygh38s36gjPhoArJKzutet",
  "key16": "3H984mSdU8QLnsNw6MJ4VLfm4DZXpgTYbrJK3oAiLvaxHVkvSNjuTqrbt9wjimbjsarvRC7i9vcopnXU7uK2JPnN",
  "key17": "5dmuLkfzUJxYbz9AGTwCEuGH2dcAQbDW66vhuEzkwQw7sLN7SYYwzatNiVZd66ZZkHPQFrXwrGVsMFSByAPA4pZs",
  "key18": "3CPKfGxEVe9W69Mp2BWso6bzr5yyYwZdC8GHi1d254yH5ZdxzUsV2wkMcJdF9RHLEYkFf483Lr9rFpNVDWBpbyDo",
  "key19": "4KeLjyZCwDm8n1vw5PnkJg9SqwsH8yHqUrtrJ1ktreHZnMycWczomvjP8PZaZ9jagUqJq5pScX6YtAeEV9hSyWC8",
  "key20": "5eXjuWooguoGJNHdUshe7JRxhmFsHMpA5sunNcHNiXf5cSCSFYJwTzDXhLwmS8RHVqMZLdD1osYgahGur815RjfB",
  "key21": "FDLpSPE685zWYJXQJ1QRtDskKhX8m9ciqFc3VdZf16RJzVjtZzKUSu8UGLiX9uE3qGvMXLYeyc1sdkXTQBT5Doq",
  "key22": "59ybUjUQk6AsP8thKhhqAVKW7WJobSMN5QYFMbq1PpK2Zv4ocfG7PkdpN4ipZsBBi9DmUZySc1vYQF3GC5kRJ9yn",
  "key23": "2aTDrRWBNtGZngu4iKfQS8LYzJy6s1o5hzMUGZCciDbe28sFXmRGjtZ644vKbNrBGZxEqtr8FHeNrFLjy4bGko7N",
  "key24": "2t9e2vaqa9sya31i9dCC96Eg612fv5umodHwMDpBjJMWNaPmYaLWAbX41Ddefye6oiZuPGLQYGZBorjZ5p3anFeu",
  "key25": "3ZAwD2ttuMHNszgNjnBj3TL4HJFLs1LjaykR6XPyF4XhouFZKBctFk4XATQRNQeWLhSq5dD5i3mGjWkEyL1TNcdK",
  "key26": "2tSYUPjJaRVFkhq7XLD6GT9JjhZm4drCagPwGGbmfqpH4KXyvjmWAHecY1YXdoXi3dX8aTwNw4mMBBpWRRgjeufH",
  "key27": "5bvpUdvTAHGkwpG9b95HkBCPL5xARpvaz2psgVcpMaKer3Yc4gXqp3N3FL8JPBpS9gNDQeHiM6fqAkKHQKs1Ptnc",
  "key28": "3nHtdgSGs3kAMXh3g2M8FfxHf4jtierbnGax63VAWq94zGXVyMKjHMWBrERAPPgm7jzKviqUBjf6KjEg6VDc8YPC",
  "key29": "3Y5tyCvcpA26SXYvYbSZyzmKmTgzTCBjXsDR464KTF5XGMpx3PYFtEPTi3dxCs5R6rkcatD7fk2UcBjQ4JrVQkyc",
  "key30": "U1zHfrRFcPsRETZmzfqjm79rn5AnhuoxrsX5Jxuqye8FnNiuagXSfPRmxkyzJK9zHGmEQrxUgeR5gd2RAkCjoYT",
  "key31": "YWKEuSRNqJdgPvMXdzjuZLiUrfAHFB8TJFj9sijuyia5dhuKuB99pRkcFFzQ32QbFWRz3siVjdcwSCwTzHbt2vD",
  "key32": "4NUzdArME1fKbBoL1t22ogMLmB5WWzCnYpF9obegbpVWEW5hK5jSe5L4j8ALYAuDXDZTJye3x6chrLX8GgKyPGoj",
  "key33": "48unsuc9wJLWY7N2LHK1SUaCEbLQ6PK5pYWaebQJVebFt6aY8eAbojk8jMofyzXww1m7fJD6UaiUUMTDA73X9SAF",
  "key34": "39E3ovS9qtfh8SzV2H8tDs7AzuDGJbLqM8F5QSZXmj3XeR5uaZznSvgxRZYxzLQy7yS1bMYxMcsSN29EHt4Qg28n",
  "key35": "9oHoQk7Qo5T2a3pjKtMxMnAhSs1JoHu26ud4RtDfjnSYnj9As9xQkp6osdm4RwGJvpSKXP1Hr56NAmxCfVtTvqF",
  "key36": "2S6oC5JvQv2Jzm2aHqix2JzjD31YQLThCtFBjgDLE2ycXMfsEjHTexEtb2Bx5ouQhxDDC6YiuA7AXJArBvyYb6qh",
  "key37": "4ao37p2nWv8rkXyj34fAumppMxdBiR7iddBD3m82Xynrckfyxxby9rMDyvNSCzPsoK1seuFjwUbJEHDKntnaWbtU"
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
