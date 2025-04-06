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
    "2YjpzcfPU1TYx9QPbAPUe3znvh4zf3FuGufxNUodc8VSU7rWELrzERAPo1VAh8bvBAa1NJEeMxHQ9vZu5qh4vSEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifCWPFmz2PiB49Fdh6R5fq19QaF16ePyMGXy1vFBMd2b1aG1MLbLM5ys5k3ZXWiPeuM78ZvBthkvx9D6puoHkkS",
  "key1": "TZD53Q5eEXoxyH9Z7rYMV3vHAkfLkFzKsYygLuHPkZLK2FiNWZyLvmYZm9S7MqALvmzZzxDwrG76XrP5271kxdC",
  "key2": "QEw6s3WL1b19YrjPUabV6gj2eAW1Py8VZ4udNadrFHh4NC6tVwSvVq3oPiW9L7hQbs4GqX5jawob2KbGPewAcQx",
  "key3": "2hKM9pffhuk5VUtHmkjkNRPZVQFykTYGhR1CKkk8d69fdd2uSyfmAs2Xjt2dMbq1UJjUcS94J9dzyWuVNe8KVUUM",
  "key4": "6sHLXUzodyr4s9hb7xMomvLRaKJp5vvs1PhZ4z48wHFByp1zhRTACUTaNDgdxZuuR3vLAUvwjqWdQDynNqyTV55",
  "key5": "5KjjmAyYcJGssYhzmZ75oyqD3TcuAroiycWbaWpBoYx5XkZrUvBqJi5hM1DiKZJjYG1hSC4vhhDyvsqiUPn4yNso",
  "key6": "3kHync3zgnv2Zt7GN9Vnx5Tod9P52Wh17cARu6Edx4K9JEGjUcPLXZbAaX9zi4KGgqfwWufRcWfJeCFumHfL2g6c",
  "key7": "vxUe8fvye8MML6t1cvaj37d8YmHegjppGE6mzERdQsLdQLwrt54D6P89uHhRkSdBzxnhnF3nBo5nAaJMLjVS4pr",
  "key8": "4YinCkZrDTmyofiGfozPHVsTqedP9Kbb3NozxFhDRhvianVxb4FBudV5wKbiZUJeiSkr54gB8GRe9jBs1yMKQ5fd",
  "key9": "2q1waQXc92KowEqnu91hfin71N5Di8DupUVekMzbwprGLrRfsf3uPJGCxJF9qDdBCxYwTkQUjnbu7uTyWn9EfShD",
  "key10": "2AbDNxJCShe1mNyjMUnP624ih5z3EBhx3vTYyYDvb8jtx82m9VsaHYLHc9ajMwSAxcbbCfYSC6FDT9fPvTzBZ4Md",
  "key11": "5UMkEy5MUfrUBSLgpUaZsQYyDLXkdVL79fvinTHPGSrXVc7ah8SnEvjRnVGA6v6PazK7VXnTBYYYoAk3u5JVWYPL",
  "key12": "43koQfaWWFpTSnbUoATU3Uo3yPKS58Vz1WbQyra4ANUBSVBNkDP2cBsJre2nDktLUvubugSjRE448bJbTiHXAtss",
  "key13": "55VMykkcogsGAtqM5v4Nuih3c6CFnzhSSW6cBHzD453cToemJhkbokQvkH5zL94JWUJiK9hgqAgmqpQyNFQCSRYr",
  "key14": "5cD6G8NhZwtaCq8DNeviLngjPvKqYpbbTNDYyFQPtgzRQWLodo9iSBq5oLcV67Pn7uEdQLa1fn4xetYsDwbUhj7s",
  "key15": "58Nhc3kf8CdDqFQ6XqWpiVKZW51JsRB7vUKMEs5QptLpPVgaqh5wSkbLfdvxTDuamsPFUcVC7gLnD4BW4nWgYrSb",
  "key16": "pBcsQXA38yo65wt2tdKpwsje8LNaL2o6W3zFTrVeW6JxBgrCHXW62MbbnECgmFyZmkdKgHWVy2KRCmT43pPHjdc",
  "key17": "gPFHyhTWm21CvkYRiofVXo1kUUBZfxpkmT4NqsfaLDNn8mCaAntfcz157STtgJg7PyZEXEPgkaguFQsvExwuHYz",
  "key18": "ZoLVanVWdviJmUW95BPyfbf2dkQhchqf9zW2DniS3KAgLgrMfpmp6768HYZrZnRqy9jhT55a2egUoaNq1WrZGDG",
  "key19": "2Pyix1k4wJmoEQeHrTHBPv5mUa9Jm6qFKJuiyNMGjvUxqqGxMrTLhRPCgyyLq2gBkbvuBzPdYrdubYmvWC94BBGz",
  "key20": "5YpiyZqeAFSWGmhcdwNfmL6Xn7JDojGffufVqfmFnQgpaf4bv45ZtQ7bNZf5M8m9FqM8SzuGHnuLMiHmtDhXi8uK",
  "key21": "4g67RZD1xQMz5n9McbiitBsdgVSStmkBtvXExibqWhKRZuP5yKf4PwahqNyr8SsUnNvk3j3FLUoJLtc34hx8WRzA",
  "key22": "23hqmhs8PjnkHWZgdQqkKvgqFowDqvCkTUtotPpPwd1icjNKv7Rak1sQ5TWrBfneZnqtGce5oNCXLrxRms9fnqBk",
  "key23": "29S2yZKeiXaAhbQnyY724sQmyVXoZSi9dAREJb62kJRWTFmRjHQ9BR1hDpYQzhQBokmKhaYYk3h976pJnmtQkjfR",
  "key24": "pJFsh2FbFM3zKkmK1hYuyog65LKssSPfeBUthCVeqbtThEJjEkcLRqS8HbbtULiwA1Jt86xHgmqKweFdSSGpMca",
  "key25": "2YoVD448Wvb8SP8zxHuSJdz9haD29vxaMz68REEN2UZUjSff3m9XhVpxc31UY43Qypuph98zZbkkLNaZ9F6x6bEi",
  "key26": "3TDD9SA7Uc9LZEe6i18aiATVefkZsJABeTVrTcSiHjGmXSS97TWDBwXKCvu9DWjGbqJiXKZ7NpNq5JXprSb1qiqu",
  "key27": "NCWR7shxpC49QZpaWAJuU2NFsRStNNZqt84CePZNMwcfRziiZFXgyZ1v3irveiPNSet1AAKSCeGf3efnhjBewDW",
  "key28": "exJDSamWcDmPHyTH7asr6gJmzC93dY9uJ2LJvaT1yWTcmjW9Fva5yL9QZRPetGcLx3umJSGasDFawa8GfkyxSkE",
  "key29": "5cMEhKzWxeD74RMfpPdzVAtrr3GqobAxs3S9iy19o4HdLUJuet9UPFrwyN5XiE6KR2ihzqESnGA1chjqEsUqx295",
  "key30": "cgewU54LizdFzgaY7U3bqmdQ5GNdXjfHwzX6a2mRNMFXJPdM81JS2osbpooKVmUvEiYktc19sxFVbYWLRMxX3FS",
  "key31": "2RLMcJa6HjbFApsh32ybj3kXiZFPkjxkA5Teut9AMcBLnxWyc7JQPvgdvyKj2FZu1TfCJKt5BpxR8ExNycqDiGYe",
  "key32": "2XRGpxLH78eXmkr5aJCq7JkJYiuLa75BgayojKa7DXeAwK4syRPC5v7CiprpuUUBNH45sztXN9tacj4gU6wp5U5a",
  "key33": "4UDDovCwau7B7iV8BithvKdDEXrEVh4TjGTMBJ2WwddgzhKF4aTi1ahPefmeAYjUSiSHDv9Mz6HAYnVdHBoUBBom",
  "key34": "2cHBnLKTPDwKcgmiwcrJ9ss6CVWjCQPtyyXowPN9j6uucYnpmbZR7LVTgEYr2ZoUtX9o5PgDoiV6eBJ4oo4X7XLh",
  "key35": "YTMYAKfjqAe1zWtxZAahQkwCdVVC5CLkNNNJGTXaj2Ubmm8p9W8nNRbV9VB1V7n1z1y7Nrz4erEFw2jzmHxKkq8",
  "key36": "2sheYjdqHaeqcRfbUAwg52s9jQZxUUxQkGzFeat3JCt58Tsdgqtb3HY5NcpAz9a7LtNTMANvSPi7o3QH4GWVG1YM",
  "key37": "wdiK5f2aREvaypqoakLbPK8GkSfqS7NDmFEUmnNa4t3PHiGRxjaFbXTLF7TDpQBGHhdbdd36vDxoTMBeD1MeWW8"
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
