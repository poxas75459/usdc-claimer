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
    "63j9A6LzPRM2wvXiyxutaTmy9Yk4wNmb7BZzbxZ3F9KTdAZzp1SwXQAWyVYgq4MKWhskUX7WuEjwbL6ZqNhq2ZiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJJUarvSsBQSvnUGCTatQgzZcLmxfJbNzZGD1re82saqd4EkAFv7YbMHULHU2K1xr1h9eqy9iaqRaAmud4Gdzpm",
  "key1": "3mPw6ZxuLvK1W6JrmB3hwSjNJynuFJ7A8aDG9QmNkVn12ANAiZ81sut8zzzo3g1XZACRsLHySSNoNh4qh2BVoujb",
  "key2": "3tkaCXtkbehW1T4Pa5p2kX4JRLPMsQe4qAZd5wSR7M5jF6CJexKXFFikwj1tVXXSagX2ojFcLJxrUgYFDEbTzDQ4",
  "key3": "47T5BgajcLs9n9y4zHmwz4kMUp7Cu89NEgGSUPcqC4qYoRC3hsgGUz3JindUTxWfps5uwzHfRrVsVwJQy8n2g2ac",
  "key4": "18wLGY6PxHoUCvjdTgGry7XQ324711CfD3zb3EL8a8Au7ucDY9pARfmSSQqtyWsmFnRxhAq6FF8XECSmbf1ZQEX",
  "key5": "3nwSygVvAkWgC639pmF2HU7B7JWu6fdGboEX9g1gGC8oX2dSkbdzAR4ofMWaXweRHokY3f4RMub92q3tnsYjivep",
  "key6": "xBVUh293HDLGUtQDE1EdrnPKU5W1emFSAfxXAg7c1VAG9EPemnDsDP8j8FU4CJZiu26G7XqN37ixtyNKuBHYLTG",
  "key7": "5EuGePVMeG7d2PCiCHeoyXS5DKDpU6tNqQBEZGTcDKBD7Cqy1WA41rt7PzCf49ZoDzHHkm1bi2tfY53JztmKiKrT",
  "key8": "3syWMENhLzt4j7XL2rFaXXDXvwDpXBj3dbBjzfcVnfWVbkFgLkXA5MKfJcuLeeJkjdTGXTgcN3sfcGF5oAvNBRNh",
  "key9": "56RfmRbAppcBtZjqtghWiRLgtjWVoY8kCSpZmY3tHut1JzejXsuTfVDtKaeKxUX6gGJiVDjieuuT1tDvtqCMcSmy",
  "key10": "229MvrWwouDCxCjK6qUHEpVVjvh1d5EDaLWFhtKVGvgQ6URRCGHDi9RhbsY52e64Lh6yu2QQtJwSCDy7maCgYy5a",
  "key11": "5XZMJRdDHAnhxSriu3gXdHjyHSZhBnNXuMx5NB8E2ZnLEXsVCksKZzgcMQ6GSsBaEjDhd6CE8QXELpzrCKRe7NSt",
  "key12": "Y437zvLL3JLN8mi5xLvgx97Kab98LZouvigWjbGpmvTesbphksYX924AXt5YbSydsNQQuJLxnN1zf1aFNPDXm3b",
  "key13": "2sNLvnCNg1XSsD38rrQEPrUcLRQdZCcXRh7k73XWKWgkHXNaXRZ4psxY792NHJiEMAeXsGrwgy1vMRj744yRZuYV",
  "key14": "59GP3ocabb9jQmLj6PcerELdhCsyAx2EiWJ8y27p991Xr6hLZ6bXACGkBSRvphd63qTjBpTxytkqa6v5VMN2m6uw",
  "key15": "3qmSZX84heMr4E1n6tVi6m11BjBQXCTUw58g7BGVUFa2Gs83WLiy27Yef751xTv78hwX4rn4sY3vbYUvq7zhYPY3",
  "key16": "37EaZRBhFzJanMxfaN7Wxy2akZCwP4Jca3Ytf4ZEitpyWYP7AQLAn562NDLeh9vWXaQmHSaUXdgaCZo8gwhvHmmK",
  "key17": "53iGZ6YL1jXfLMyzezB1meGcJ28HMuxgisGuRVcNWDmHpuftjRWb2myVgLJMoNwvwF7nQ16GVeBZZh5zShYSStVb",
  "key18": "31NWbtdBrR8SJkjoKprR3FS44CyrtbatbB5V6YD1VwiM3M3sFciBC8AGUWmLBv6KRzybwi7R1z5S8So7KL2Qa5vZ",
  "key19": "26emkurtbiotpAYtRRBhdz4JzS3BEyXxr44HSdBYdDDdC7syhYk2FAJWHzJQ6DNkYAtsMfeqC4TWW7zYQGFBhnV3",
  "key20": "5jsLz14Z6tKR5qpTxn9VFnGB8ozq3jWs3MXGHNViuQGv467bcMVa9M7hWJBCb7pM7Lff77FodWvir11qSR2rw1k5",
  "key21": "2HguLhJ8yx4SwuB3Dc988tZX3EoybnrLsxJEK6QtZTJPUYxh74ftu6B9vAWMJk2FK7bMb9MuXKdK9hVxDSjAVNjw",
  "key22": "5cNd41jKB1viAUVAG5o57DViKPTGXEkNFPridWHjjKExUaDZQTrPNZDpVTiGQjP1eSEQnE4981gZRdADrjnWtjk3",
  "key23": "B3iFYvyU1uGCBKJFgftzopfuPvTqYKjyKa6wobiHFcBPEZnjcchrHujPrMWkhYcBQ8WqY2UXpLFsJuLGekA9NTH",
  "key24": "33S7EXzU8VVpmQRykStjU22Cp2CWWc2qnfYWNkBAaQXvqTnPqDmuQ6D1oX3U1yjH2pdsA7e2Y6m3zxE3FA3j5CGB",
  "key25": "2o6sn5LXVuYVDpjKJZkRWESddNKYpTMLSFenoSSCpnvCgCQ5dkrBbHr7f6bQmtsLEtQMkLyKMWrYfKXSYwNMLa2u",
  "key26": "3UU5jhp8zkPmp9fHrwwy1JVuw2XkJwwDjmZSJVjzghYuknWki85xMhNqZUG6XS9jYdYchMzAgHvKVKNiyucxTqfM",
  "key27": "EQJY2w62JXE4eVGYECgVBxQ15vscDQx24xZkHzXLrP7twLEzJCx2JFfssGmpNF2kZVkWEhFe75K9AwPxdN2DPbn",
  "key28": "5ywMZC2xKsnHAfRajJejdkyGQ5JTVSnYSpzQGB1aPsjTcFXZFsTbNLQtWM6ZfpgXCPFYheXJsjTa3F1xtf8dJrbT",
  "key29": "2pEMCmJissyB8RbX79re3Rmqfp3VAwi1eHwMe3yteBgSVUPspY9t9rKc8QctCP2caNfi53Wvv3un319y7NUMwCiG",
  "key30": "3QAQfLqYrn2TG6BbwQajkPqmbgJtJgdFryZCDhCaaemJWob5wW5EhLzcVPzNChGvgY2CUwgku417nW97ktwKcqMh",
  "key31": "4zpJky4kPLjtmVXMxGxVjUWzUdk9AfRQfeAvYs5BcHoi3uWFKBjTdQfrzkYRgAA3GjGPGhsmcoJEf2iPiMLzhDoL",
  "key32": "4h9ByVPcQZH4xVYCcD6D4MB2vVzCfyrCQ8KHsmtoMzSU7y2awd3onhwGxqPqi9mCHxyBY2Ljs9EGrUTSsXR8uzP3"
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
