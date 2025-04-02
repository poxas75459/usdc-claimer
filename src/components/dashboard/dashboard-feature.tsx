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
    "3SPUaRrT5mSScWLJPYS66Javhvaoc9SLwpyTRAaCXLrceHeL9jFdszgTEytxPM4Cfo3ZiSSUDfiXeK68vbKjZcKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqU1EG3ynonP5pgDkx8oZkEsQyZeUUi5xPpA2aNvGxV1r2axNigwGzMYVbB5x4CVW96pjFGLULNpo9GMBBsw8Tv",
  "key1": "4M5Cd7rDwNzmjsyDX4VuiehgsCiGknz2YAEGJTXiKdgMQoeUjo38W3gzMFbmuLFWEz2iSkL5CyDuKjKH8LwFP9H2",
  "key2": "kxDiUvxMNeE2PwqyYDBntVmWSs5QkU7KKEbZCfFCQZSciiZAfgAHKxBgKnp98zXaiyyyoR6sSMo7neg5eZDhqre",
  "key3": "2PDRb2vCGZx6PRpmFW67URDiJamHoptWJNLVC2onLj2PYC9NAJGcKKT5z94NEoc5LG62faE4hnrCra91o9o92VBJ",
  "key4": "2UdXg34vkJXVWpxQAeMPGMxGDx8mboTGLg6DhpaGMtfckM5CerQhLqFb1nA1kq7BSBpRp3ScbeeDMouitXzkwuxz",
  "key5": "5y52SunsNbJwFqhzvNgrAqBenn1bTzQee1Zk2fii9uHpjMV16AnxsZciFc5JzrybiCqhr6yKMqjw5vYh2a8dAsV",
  "key6": "ke655ssmDYqjoQowPvHv9z9oCGDMLz6AAGqvvNwzk5m71ysyqnL2HZfn2aaNcFUAkctrjz3W8yaqcgAcaXHfH9U",
  "key7": "5qDYVsy7FctwwKtGt81eVzHpDSdwRJ6uoNCYbJYEYnGFXPJSscP49MgqvTVGvKSEP7LAkvbiXjmek8R6jTK2VzeJ",
  "key8": "3LRXZTyEj2LbgucBr7r5esFiswEmTRZ8xoyQ7Y9XqvR77tFS2TtLoLoqCoFNjEJsyvU367k5wf8NnZf68YUP48Zt",
  "key9": "5dAdZ1bxtzM9FaZGf89Bg3vv3rFo9hrAkeUxhaXZ626rDCHepdKBsiexdtdVSEZSbmqmHrbfuuv67z9G33wPXJbe",
  "key10": "5JfoyFJen4j2yVD64uKo34xdrCia457x8H4hcSUXSGjgpC4v4c94S24t4MLu2SFUNZGkFM4Y79cx9KzxcaonWnL1",
  "key11": "34wtW8cQJygP5hMfxTeio8JKJCspYcpTmjFfa6cEzvWbRA4gTj2hXx6jevB7scDdxxo8xDkfSr81c3KePnA1imXB",
  "key12": "2Bf5WJ7DvCeKi8YX1ZEBZRKveZ696pa6wqhSekaDs1g8o2JXXcKcQQhgaiarXFBV1q4CL2sbpXMM4XQ5ixY4uaQM",
  "key13": "3FQov1jeAsCB46JdGKwtptvcU8hLySsv5d9LX8543VYmncvBZkX5YMebjgECpFL9uYRB6JewMZMPrV5q9KJBci75",
  "key14": "46yJxpmxTynZRPfC2ErpyMvyvKikvdXSDX2rhNQPXP1rUp8v7XRbLG5mV6XsN5b19vuAjSLzsbF629piWwChNArH",
  "key15": "3PFBXkXMxGeJ8tJ8LSfYcYnCwZRhcMjtpPJqncy5TzKMZworNeM1MvXosjreU8qCXEnh17tdgcrJDc3qRemgf5PG",
  "key16": "4suLkxLbapso75krAdC7uKXnHTzcGPpMNuvikemufAkVL7sfSyFMheeYW3o4Wg9bpdXUnES8iVZ9mvGN4ent9USG",
  "key17": "52Y7ubyH9N7UqUvAh741hkXC5WZ67fAnTJQsjvpa3K1h8eUjrZjD4Vp2qWe224An1AWFD8xNhDjscw4L6npHwzNB",
  "key18": "YXQa5NkVzTeLikeNyu36cHfYz29xbpJYbA9EHqwrABspDAtvyRu6Zt2cf9aQuoVFY5iueUoxTmk87HpXm6h1PFz",
  "key19": "3UtbfMz1WeU5GCWA3x8iuh8tPqDsAiSjVZoeyxP1EWpwfjpF4V9Gdzfzqz4L5SZyQ9Up7wCf3qJvM1xeAbEya12S",
  "key20": "2BYxrNY3xQ2xSmYNh8Mom2VYi1GyAphzojjYEmiwWThQFxDGC17VQp2XuTzjYEofJtKpWXqyN1m7D6V9zE8oJZeN",
  "key21": "5PBTNCNXZJbXihe1x5tTsoqjQVJsiur4w7nMqFAtL8rsgNeHMdT39zG9VsX3fBdPJBBpuGjb4Vi2m89q7Wcgmtvo",
  "key22": "5HkT9HGsaJSJ6gZTB5NfeADzykj1RpPZbvRNbNrTT7TWKtckDLJj22TUR4sBr2a4DtfrYvU1XNKVCjMuwqxKZDst",
  "key23": "29y5X7zL9ewVgoLs5SQ52UeH8NoXxcpcVxLFvPTZCoPy9BFUfe5t55B2cnivng4Bsk8evgzawqLYn5AddA7gsd9k",
  "key24": "3eQrktm8HTbKHUwQdYuK2r8s6AtfNUhWqaxm8xaovu9aC7T4cq3JPm8wdU3ETp8w6uBDYCKkSETSDJ5hWcwpZXpy",
  "key25": "5Nwjdoc2EnDmGFvAv62wF5PETp6LZGyQRg1Gj9WZAtbznqp3qgxCiDL1ccYQc53941Rdyt9fbyqShCiXe1yU8y2c",
  "key26": "5tvsDjH5yYpQxBpS6vR8HL5QQnjKhXdJyHq7jzbCXZvSCWZA2Kc8TgtezhVFQsZLhRJNB3c1ktc3nQUMELLFRtJc",
  "key27": "gCPTsayGAzspQiHeAczupkmxGFYMxNBDFwFp83L6F4FYZLJRTERU7AFyat8Z4J7ESuJD385kAUs5hXsqfySJ29B",
  "key28": "5ZobCsr1opFc5Bckjysw6GzUBiuNCS6vcModUAJiZPmcX9b412wCHNKr6W6YXupsY61CvpzUTvpjw6Ura8bwy795",
  "key29": "3QqdjXtnJmUFvBvKs2B1jUcv1NSqcTUZPuf1VunEjGnF5UJZQTgCdj6KCshVFpKgste1JZHtnmucMaKEr1ndgV3h"
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
