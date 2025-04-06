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
    "wuer8YTi5ZjUfCHNrDUGHudVcJXh6eimdy8Ammwc8Gb3peXvAhDkR8cvX8Zk8CPa8U3sfYpa1SL3QB97Zjimwif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWbz3DRqX2mPsCfgRMwLRZmo9wyrL5hxNBGQQAa4vPHCTJgL8fuZ2uTxs1bBbZKFKVdEkNaRLfMFmirUcveYFar",
  "key1": "3C25MzDgt2kkbM3h4Njt9ysZHzDsjH8tWLQC2NJxsw2sXgznbwMTZ8cXSSkKKeCc9hYKRmpoZBXrHGbGKhzWZWHP",
  "key2": "3Hn77xtiXJhpmSUgYxwu5qHaGyTEgXm7tkgUtfbNPyoHNPD8GuQbemE9PvRi4vHzWoE81tHk5jT3j42UxK2ADzxi",
  "key3": "4vfzTJo31HHZXH2TZWywuQY7gfXy9VKmBFo8f6HtReForKaXEzb8uKAkacWqNSrLGsXuwtHJXQePRrVcHYPe5Xme",
  "key4": "4GS6tooJv25c6eUEqxT8RyDCBrV8Rh3me9y9QtU7NoF3T1UibmY7uuFQHnB2X2seTXNmUxBZTpz3wFrw6Kd9r5DP",
  "key5": "2ihhBJLoSdyrAHtUuDrRL4SJxG9a54J9kQPDSY8oKMZdNfVn5xLchLMmLaErFvFRMJ9qAEK8gXNYgjVSqn2Hu5rP",
  "key6": "5EoDBZbsRrVitT7tA6Bb9P2sGae2VgsTZV1JoioQhJZpv4y4YWwFTGFqTtfUPPFg2mEiL3MoUfnFRkSJohRvx3Ji",
  "key7": "5yyePKhJaYaDZqwh7CdsYHPWFQVun9Qo44t1ACfCVpjiYdrurwNYihWicV8EF7VYu2rb2i2zYbndfiMeXMCwa1gD",
  "key8": "2M3x2kn5Lmx1G66soATtgN9EUqusmecvtr6gTsz9WvY7w58eEsuSp26WRSKzgSTNVxiDNgbbJzeKnbCxrcvUsni7",
  "key9": "4kypbebgGpuscFB4cKsw2M158wL39YvAxio9YhsUwJ8kdJGUe2iqVscZ4fdAUbmJfw83J3hTRvjdbbBmhYwSNUqf",
  "key10": "ynbtQZem1P2yWwC3gp7xtMmFpX2T3aQLiDNTBqRwCbiGgGEoUzcXMWXFp7PqyYodEr5cnspAfUAtdWcwctz5uvg",
  "key11": "4kfT5RsjsNG6tjN46yHNTnaRmwSeutdTpYQFGLqZaoxrTjL9mMCi9sTWfxDxm7j24djEdcgZhdREsi72Vpuir8zH",
  "key12": "4yPGtMw16jgKLE5M4cSwJ68sy5GM5NWG6Rmkpo1PrCJRiTn3Yx8GLg87FPwF7pcSKbQdg6T2nDWxVDGpHV65bEyA",
  "key13": "dhR4E9PurdtFY4Tu33wAYRAD2AvB1ctVQ8g2DmfHb2CUropyVqjsh4umMr3oVa6rYjm7ZenPqQJMci82MBnQYhj",
  "key14": "5XtuMriQHgXsXH2ccJ7791shoPGmz598UkdmQ7GxgLdv67fr8ZDryqN8xez2bT1F7E1WMjUuoWQHatgbANgDNngL",
  "key15": "2wdgUhFjcDbjKkFoJy4z4aXKvbASqNJZG1D17oowjU3EoM5LSziWj6jCmpJzjvzetw8xFNooAnxnPjsRyjhvQC6u",
  "key16": "5B9QfYU9XYUp397L8A7CPQt3fcjG7Fn8y19semnpgbAUWESX84h3wrCEeL9rNxuSVL3ZD2U6gbEEWvd5BuArY8hk",
  "key17": "Es6QdaJAj9fZiJ8KwwQZuZE7bSKph43AXFnfi8pEPdKh7CEKeUaLFiaFH3RfyzbUHGvhVwKD7PsVyNTSni6SR4k",
  "key18": "4V2Q9dEBoUjz5yEwEYMFuVmHJyz1mRHpyXyCYktXFxHse2J4jcyN56Fa9fburQUkxNScmUePYCHVSitbnREAHp2a",
  "key19": "4dMoWXd2nG3ehmgpiooQkPntoxi819H8F6GzZzcsmeS6RGi6N7yVmwUDAYea9Zgzagm87wt3kTgdCsR1qaewFXem",
  "key20": "2H9xPoCWkqtZRQ88N6kyb32GxDSVKcnGk8Y7zUqozLik9DG7KNEAruzSxysZdStnCFJiL7vYZ29E1hZAL5zveXWp",
  "key21": "4BZaPGCTinQedZPVjrwirumNdSZ8bp4tEbWY4XwPYcLW9sCnoBGDPay7ptNz5ruEzAxQVPvhc2cQ37GZHbWdqZfj",
  "key22": "3HxLf23yyVTW3dBMyXWpFGPohpLLaY2QsU4JRRjqGTaYPjjTzn86krVR9a35EhKtK4WBoRB8dBPFdoLJVrNk9h1E",
  "key23": "KB7ibFCxt1ZAAi3zR9Evvaba4H2r6mEax8T6VrioBvn6rNDuUByTqzZqtRLPFDFCGpiuBKtwa1VZ1FWoVDxmGrg",
  "key24": "3wGtfyDozdhP8q6F4neJ5MnTyW8nHVdCgMQBoKw95xqFrDUVvKui74kTkDMw8Qgg8X16oopqTbAZEU6m4owfkuG6",
  "key25": "2kjHha74bH7kgY1uJwpt2EeHUR4yhKAsFJCf4DvootB5nL4ZJvn8Q7A1MQB7C1rfdiRN4p6Nnryb3em6SL2xNnbR",
  "key26": "4xuyWsGBPEhJUfTQddCtrJxcdMSw41EfYJGgibNsbet4wyeFXNduSpHQmHr6dsXxJR1xLeacfY8f3Zor9V6DALie",
  "key27": "5yFenvNSEJRTWrRaCGfVKjZyxUcP1sUtKaE34h3ZY1LiaSsjgxPewVxUiqGwmAjZdCvVriYfqjTdJJsye5VtaVLR",
  "key28": "4mXP4rjceVzPPDDZy16ZPfkrT1MgzoTGMhNEqd4vRK4RQYMDUt8SSez7XGwKK9sCc7fnUooVC7poEDcZZhw8tUAy",
  "key29": "2zHq74KJvRP1snwqAHa3QuESPY4bwxozZ8XPFGbhi1NVLg3dxQWZJsXeW5SpRU38pe5fm79ubrcPfLkrrXF1coM4",
  "key30": "3Dn6kzd6chYWNJR2kLmhUyUHxy1rp9UcKZujbynb649C1FN3jHbRsA21XujnqUAw58a5V2Ao5b4UPVM4Spr3WEpc",
  "key31": "5XcRyF5JgSXozKCj2odJ8ckGaL9UyfyJcV1eFQJEFp1KX1DAtT7YtX5ijPum3efo3v27KH7ZPY1CbkLwSL9eZ2xC",
  "key32": "4zMLDe9XPNcHYmK23G64w76QbcfYRhLYKw5Eaw9Q3LpxqAGitf2VZuZYSrErpSuNVZppAzNCNnr8ye3re5jZwEMS",
  "key33": "64cH2SirrvH2qKpmhRVPjcV7XE2BSZL7oqysvKNbR9Lcz7BGXVkRsS6tFwuqn8XWJqASq92B4yNnbqHW4PrEBqik",
  "key34": "5msGbCsiUBXsZLnjv5Y6Rf5DTaiFQGswh326t5Agf2L9LBvPtTBMzhn8naGyGtyjWgaVxwNgDB6ebNvjKoscaQPW",
  "key35": "2KaiJ7iodtMYQ9vFae1sEctCkuL8tMQ4HmyageCUHgXAWAwTdQTds4iA8v7mYKTZzuSQEdQRaSVArgwoM4x8YfHy",
  "key36": "3X53XK9HVmPHQqBgZAP8NoqPpQNx3oYXsd1oSorUzXp5jah4HSmAvRRfQjrMW6g275TiUWjVyiXiWVe2zag6umDW",
  "key37": "2Rwhk65hpyFReX1H8aJN71FWT3VGJg5v4nH4rWXUn1xGknZwfSE4RUeHwFMo4qtJsLQSvFBhrH2wZad15vnMZy98",
  "key38": "4GNVLXoGTgaz2bvM8gWTFh4QeWdL8UE5Br9NRkCAeVZTTXMVXSz5VfSScQktJ1mNHjR6YijwhznyFRwxBSD1zwGT",
  "key39": "BnYpmC5LJzU7zFyV1tt84Gj4MeoWrDCGeKXzBeDygYvJoJyeMNksYxpXYeHqdH7Q7PC5kY7oaQm1p44eiSnsnQ7",
  "key40": "3wRSvjgbptnPWQqHLjC1pBsKEAeE9TQGQ7pg97qNfJCEgGBZP13R8NCKfsFHZwbJAyjQqtdSCwRTe8A2oRox7C2j",
  "key41": "4ZbKRYovgJSgQwvbhrn2XaPegTywV5TcUeHMrgmief8i4k6a5GNgqxuRxcaoYaGjWiKu6HyEGUfCYfWB3BBsh1My",
  "key42": "2EgJuw7EpeziTeFphAECWJtfsnbpJRMxsUng2QE29Fcz5q28wxy3oVAgKXppF6BDto7t2SscdvsW1rbWXGXSjUm6",
  "key43": "4kEzZ3pKrASKbVN5Euy1iRGmJMz6TgWQNLHxiSvQTzZV2XubyzNQYH8S3zSuNZbBkLEbD4a1M7f2MUt2UAtNdedi",
  "key44": "5km3KJqMv1ar6MkkRfqCRJbYD5rXspFpXd6JYAzM6Ced2Tm95ktHsqxpxpkx5J8R8uL1uCepvWYVkyeCus7LPXCt",
  "key45": "5vx7o4h8WGAi15WQjZUgGQJqNpWsWTCdmcMAMfcZX6ZQJEe7yHXN6mJQc1cpDwrMSAgi24ZkAR3pjZ26fLBZMfj5",
  "key46": "WdjyC1At74zFELaqRKgB3GzRCjG43dCSY5eQg7cjm8LL8zaYiJTCiXgjGqX2LBfWCJ6SLzd7GrAuycQptzKZKVE",
  "key47": "a4ZKLy4i4eLuwCDW1D3ppJ1yei7fdPRgS7fgBxWL5tFCU3NDPncg7fRgTFRKFBMJNbPPyRZ4AVhzpfPLDRMDF8r",
  "key48": "5bApbEna4hBwwH6kxT8GkD5KkBmNqnR8LJ3rq8vQPvKJ2efPFXpQ4h7dyQH2EQbjA5CwhuMi9XwgAxWi1EBvpoGd",
  "key49": "2s8L18nSSghRdorGGevdrzKyE8VQqidD8xTumN3a4HiG5eCkT198zLP4ix1nN6gJ1BWZ5nftNRP85J3vVRdKvgBz"
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
