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
    "5wMummvBhoFWRzgH7AREnJkCTgZ7dHhsCmdDoaqdfeMLWrBTjRJBbpygvhRtXXj9rurXaJhCYAAETS5YAuyyEUfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nutthQ6zn2Q8t2RVwbRFUUiKM46UbMjdQmJLaWQz1xtnCyTpVwYTvBTjK5tCHXRvcDde5zfxuDrNEsYmdVa8UyM",
  "key1": "2sjWn2bRB11fpWZUGtDrRcjq1WXrzGUp3KgGQN3t33wGwgWK7iNq94apqXnpeyXmwF4vZjxLF8LydEQeqpMoxZya",
  "key2": "4dsRCtp1mgNTTzZd6d8TRAkPsDvMRRoNKPqbT654kju3PUuRfxwfm3pQGTGRDaU8Njm4hMT4DTJEwN9Qppdu5Bve",
  "key3": "5tjDQmg3163E3ZJW59QaudcoA5s3jd82F9EeEUH2pD6L2G6dNgYp7gx4traycLHki53FSjwHSpLUcMHHMWiZ7Yys",
  "key4": "3JJkQcT118igoTkBrxLLYWTgikpAjXLr6WgPJikkLi2wmDXFDH7FkMZU172ySJhxqKieb8sfQitC98RSURJq8hMS",
  "key5": "5aZ96W8UB4xWyLH35dcN2tHHzbYxBs1aNfLLA1WPupLJCGbqEAicW6j2yAi17oU37TKUC2Auk7Rp71tBw29uQXKr",
  "key6": "aT83SYVzU1CoqjhGUieotVbpmpmDLW67nm8LmT9TGBiQw73NJR6Lo9SX2ku6AAjL5j71ekHaEazPu3Rp24EbHYJ",
  "key7": "4ErJShgziH4RR5tYMpm2D6ji97ST32rPuKvBJi7qe1sBjaZts2matztEL7b6Yx3CGYAAYrnKn7tApR2gYwQ6yBLN",
  "key8": "2RQK9S34YQfCpi2zAYKzU5iZhDprQAtMMqzXVKBwoEDy9xKGMob2aaNL65WvybB8tD9y22T8EcLDhNeLV1qmaH3v",
  "key9": "4kjmpNsvDzcD4JLrff3qUdPcnQivYu8A9U1CwzBHyBSJJgjB6uMzMu4nm2Swo8Ti2wZRK7bhKpQwgWK48Z8ReznS",
  "key10": "54DQB2ygaGedCkG3puAqhYugf65nJQLLbRLEiFnnLRe7KiBShFChNUMoyfQ31hyM3hku6TQWFN54C5c7vvDyJMrH",
  "key11": "3H1Ubm5aEiVVC3HhjGxTNUYQPNGG5fCKaXa1eBQpRnecXXSaDua7q7UjBFMzz71AaiHdG8kmrvNqn8iBiHNntGF",
  "key12": "4LPMCoLcABeAxQbtNog83CjPKQWGDaC9qN5S8fxK8BqK1vsjtmyk7nNrVAuknTuW1uM2DizGHWhZqUgkYmr6R41t",
  "key13": "3nAmbvDmTP1LfSUaNdnHDR1LN6oL7vk1j6NooCod3iNcFu3QeqkuiBYskZ1mQtZZfGv9debj7pEiKGRm7fnmP6kf",
  "key14": "2tcFhYjdMkYTqPGHjnNSkvCuf8WqJqwTBeTwpi78i7GpjCRAydihCQHDuw7rWvMxnyVpHikGv8C7raiPMqc6UQq5",
  "key15": "oVSXB4W2AUTF5LYdHr5uwKV3hf5rXY9nQ1PMCnHsKRxN9okBsFUS1aJpUr5qjwkKv62ZXJikVsS2tAZBin6KV2H",
  "key16": "Aq5UQ84sSRMNXmJ4BeKfvxkke7Jj9HMCzkr7QnhcdFoJKMd4fCsbFKNDUGr1ggz7nJB4PjBzMRzD3TX3VzG9WPJ",
  "key17": "5bYHeyyi6D2HoALUm7YtKcTo2hkFDa9YAQJgCrNUZYE6UXFq9w5U3yAWnBRQueXnSCBWHY5674QJweFSQYLmTRyv",
  "key18": "5pnAiAhRFcgDhfUwTxqrmmPD5AKCpmhjeaJEaiKzARoWvXRoNEN2ysk7dYCzbyW98tE9cD5BecFjF1Dx61RJfk4w",
  "key19": "5FnyC9tDJGGcrbVNH2oaPVe92bGqneSKDjruAQWEdatgM66BPvxbzgAiDSCtjAgnAkoCMm23GxYuNzktTbKCxYu1",
  "key20": "2A6NdS1rfjWhZoQ78xdZLzNZo87STfH6RMFhubTaNVGkn3Srj9ie3tUiz8cDhJ9WHAMyWR5NTKizygtmy5ZGDfsm",
  "key21": "5PG6eByqSfLc8T77Nf55etC2amz5iKMNRJeeAW3A7YBZ9iJu3XWjKFpdrWsgessaiL8SCE8xx6T5tvJbr5Gv1Rph",
  "key22": "qaMJLeB1ATFXeGkxTY361tBm6rskh5hNBPn9zcWaH9k7ZhjP881b6zZu5GEKSdVZEUTCRr4vHx2sND5g1nooRM4",
  "key23": "3iryoernZVk5E16bw5gR62SRG4kYyAELs6h2wm4NmbQwhFXH7dsJn8CnQKJtSWK5BLVPQDGTLWnQRT74TbDxyRpD",
  "key24": "2BjyFL5voB9hYYqje71HGr9AFPa2BeCcSfBEkMcpCCanf97T5BLhscDb1oU66sFHDZpzqvg1VK6swMoz98GCZeT",
  "key25": "DX5MVmKUCb66H3hNKC2hGTf9y6S1VRg7dUat1VFyeZ4BFbiiEPXYaTVtN92r2QNkQ62MV52UYfMgPmAdHgQkRKE",
  "key26": "21Dy6M6Ae18skf4S3eLawgP2Hq9EXqQpk8ZKzTGw6xCz3AVoFL3RYwEvWKuMAXYof1jsUBnwu7vvEBY72p4dsfLA",
  "key27": "3GPoHgR8q9GgJ1FdAcixpiP1doqkGxKKRSZHvQ1qPTVHEbngvewRNxMmnxWJoysEQRJDgZZ5DzrePDrcx8LkCyLg",
  "key28": "27S5e6PW2Xyvu7yd7FWAmzvNjhmZWV6x7GHw15bcdsLhDDi9AA67AXL7LJK1HpPrr9vr5w7BBgiKDjhKfSvK3nWc",
  "key29": "3Ut3NyKCYzcmip4dLreYJmQXcYKMNiBNSVamfMGBZqVx44had4cgtfuvFAutpibvuzZoQXfdJGvVVrr3XgzMvZB7",
  "key30": "GkUvHAqgqceA6CipEzrinMnbvY93QPgPd1v8SR45JtVTA3jKi6Ref7kZfmf8fGhAQH3bfwpjMGBRraXoUZvZpRB",
  "key31": "3Gmz7umX8cTKQ4ecy999YEtKGbGXB3CjvLw234WjPBCvTkjW6AqPLjcm1hpAqHz6fhjuj5pp4NcYpTgHe67wi56s",
  "key32": "QvvUAZhXWyzegZNUmT8qSGuTnKUeCCfAtQFaK1Vn9Xh7AQSmKC6zayTfTuEvMg7NtcMcPD9rCaSuHfGndRCSdMg",
  "key33": "2nfUcw3sxEmPnjkLayVmeuftS9ydZYLg8Ga3Lk8tZcgBEf3nM7jjQmqfk9MuFG8aCMzD9kBCBmq79hxPhVjzy7zy",
  "key34": "3vu4xwXoo3bsAYXUnrWEQGnCkZpu4oMbixb9prnML8PUhZoyjwT8Pvsfz9gnA51vZeeBKDZXYQqXPbVtw9FtBLaU",
  "key35": "5jS3vkWcHru28XJQrGXSPyBHUZQzqZELxBBmU7qVtKipJQ1PiFo6wyzN6FPen3JXcPmXB1iokx8xpTgYwC8LoAkz",
  "key36": "3eMo2799taZ6d7h7LBen3DgY1E5aFdAhQ9ekyYVBbaJVjVtCtNhPzHVz1uAgdyM8yUR815xcgn15SYVDAof8tJ6",
  "key37": "3jFmDfmEFU8Ch61hZj6qYHja69CTJXeNf49oUj9vAmV5LZb7hMgUWnTdkkfyhkmLvpVSfEX9vTpsNbvdvZA1Dnr7",
  "key38": "5hMvkC3UbYbRfyqdrXtGMtktBMQRSGrE8gqK4weYD2Lr2zfDJRamDeqmYkV6EpJUY5vwurx8kBaG9mVNFPfRepoA"
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
