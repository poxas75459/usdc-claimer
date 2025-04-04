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
    "27Truii1ifAm6VW9WpCTq3pAdUft8AQQJRpudsAheKY9rXrFqfECxXkj1mkqNq5HvGB2YRSDgmNqjKULQbfAfnMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtwZQgrsZsx2ZVsGM66Bk3rAPtFRHBN2MJmFTiXyCHadSJUJxXnRi4DnC3AgXVrMWzZe4rvRyFZUNha5XRJRqQz",
  "key1": "2hYxZ3rrD4fFUUgYCyo44n52PfZNx2WFQ1jhzaJ7HLJ95mYEYgEMqDnEKYTNEK29PB1xe1eY8f4Sq3YXtKXtafFA",
  "key2": "4LeCHuULx5vPpCsAR37XyomHAWCCHDW23JCZJZNwA6ahSKoPpe8bSaMLmcjXzDfpmWjvhhiEiPyqo7qK2aTpHM7Y",
  "key3": "2y5QQmWKGGA7PzqJUjabWt7hz1ESZKtxK1wDakkUSCj9WzmTWjweSwmGMsBSveewAr4PBu88jXvtCfFHWpiFxGgM",
  "key4": "5MMh9KZoC6mgGCjAUq5V32sKhAhbiEbQdN3KFcw2wqiQWkxUq8YKa4PqrP9gVRZQnbtmFE9zyUvBP945or5JU9mP",
  "key5": "2MMdVZkQdThxjfyujDFnGz7UqUWWietjX2zrnYjX4zXHNWLFvrsKggqorjF75rQ3w6D1NENnVGnyzi3JpAhPiF9d",
  "key6": "48wmCtzkBxWAgaJXKK7ivt34D1E69kYhXot6CwdZvGGvhqyhFaZoRt5Gttk4iE6EQF4922qRD1WDNFkteXzrucJd",
  "key7": "5YBxMV32Frqccb2ZvkzkdQDxbYZNYdZkUjrd9NpGt6SvhozAbj6nKD5rkTwkXEHEu7vsFAnqvs2vC7Nb7owfhaFz",
  "key8": "65iudcRnusi9FwXdmGkJaMno1yUZkGtAECJYA3CJ8a6QgEoZ6dA3XxKPrkx9bw9h23mBEoVeToQjeAXMDVeSsGpg",
  "key9": "46QHzEorKGeMVWH44VmF9um3GQrqVegUg75uVsR3ZmdJvgTUggGcbtwXXmfkBoVmY98u5Pozgg8yvTHVxf8cweLm",
  "key10": "3z7arxbGBTUYW74NhAbGAbTQEnUxzVU5GfGRWmjo8T76iHnVmYRwd3YyKatAU6KVFmAW4b595d7wEFP9RK4tEXKj",
  "key11": "44YZhLSX7BPyDWxChrJkMhSALA8tkE9PNWAADmRergoShEMpSZuVTMjSAmTpxWYbyv8iiBvBaBrywACFJ1MrdryE",
  "key12": "4QkcnqHFL6JfcnS8EHnmC5K2vFsZKc57MEbGU7H6v1H4KvQCrBQfnEu6PjoxcmQZB7eXeA7ZxVT6edsRstwJKHNh",
  "key13": "31axZTjvpLovtUAr3G252orLbt3B5GLHBKDJYPdRWNWQpvyPreokrVhvAYu4Abww4sDZgpCmvApD3ggBVbTJ9sP8",
  "key14": "sB4jUs4mZnjpcw6hqU5c9HvK8i93ee6DJSGbKvApbaWQJLnzjxRwrf84Ayy3oGiYXUtYUDXQfJzd3z9UNTQ2YGH",
  "key15": "5DQQnzd88H67CtFzwHfSRjDR3m3S85zZ923spQRaZYNtEzXEBdgnXu3gMgcJBwXXNNo75Yf47wcriJxhXS9vNDKH",
  "key16": "YwNpRAmJ5gwFcGepAtrwr8o7LjhghU336Vu8tsi11Ks3b4ao4wHmYrixMsmcZZmY6MLXYtPEnwSuqZ8oAZAuA4U",
  "key17": "4cBG7a8nzeysKwsE4xJ83oERy7n6KiXsWfXbbYsNas35fJnLtS3Xh33ZRiEscBtoXbk9oX6ofsqvnfbJos7DNcqn",
  "key18": "4KEpy29ZyjhJjJX8T7Aw8fKuuRC3cfTAmx1hgNScduqEVr7gH43txoaLwbvYZjC73Z6MF3NfR72rkdYbaqGdrr6d",
  "key19": "444imaF9otHTGrvPTBD9PLpWcJaQQ3DasGn1sRaVhe3NEGFnfDkQxGkASzAVm42b18iSZbhadd8hu7kjdZpRCxS5",
  "key20": "3Nb1rxCYb48WjG7R74yVbt2TQp8Mq7M3GDJHYCDbV9eFATPwXxkTWfzF2SQaKpXTjYwDA29dgaiS8XRV2vjCGk5c",
  "key21": "5u8nas5HwnQXtEpjQ8NRjJQ17WNxinNhhBh88yVC5w4PJ3Ub45Q6VmiLCAGLhJhrKGJndyb9ppQBf7uahxPRrzCo",
  "key22": "3JYtiuGifpg8yy55TcTbGRgBs1D1u6KAuGz56e1qkrgEn4ZqMoa1cYSEZ9q3gbrkgBAuqdzw3t8eE4gKbqRKFzHi",
  "key23": "2rop8rFVWfuCjEH88Xt2FLthuzf1vsxUKmwMkLZZFuH67QgdhJpe9TMNV3ww75wNwL6N64WjEgwHxGB1GWUyhyKc",
  "key24": "5zJiu9BuwJaQg8kdNduywzMkAs2MzP6HubzGD1t9ak7EpuTqpnoqSQeBbe3dHAMz4ZBJezwUDGxgg8Wf1bnfB88r",
  "key25": "1nbkW2Gf9svjKmgzQspYHLGP1GDc5eSsPJnLDwzboHsZF4tZFoQJEcWGebLqhv3uCqmcw5VkFW8jrTFBvowYm3C",
  "key26": "3ia8qRYgHQUL7kQPM8tHm3W7FXKR6hHi3BQMyvQ557o1eiQE2YrgvfcxbXMNYbDe3rK11gHPxKzEoEW9B3yv9LUW",
  "key27": "3SzhtBNkwww6zfo5nLSwecyUH6CyN7ULaY2wQhizqbEm6ZJDeqR22e2zxuaPKniwaG5NMjawXV7MpWLtaskz8cqw",
  "key28": "51sCqQquJtjsHwg9ryckZXhUHNQNimwzhTNAKdt7xjtxwV2tAqWEWzt5mLcApN2jscsfFSd1NvgzXe5rrHEJpLpQ",
  "key29": "2A9nVWUxB8QBCRJVLVomMgZRD9YRJzAnjnipqtUpdP9ZQRRCE7t4kmpLG35VbctTy7b3GLX6AjiVHnwgFaux8xgu",
  "key30": "5quJySanedxFSs3j4A7UEZZq7nFauYZJ8HWntM4gdd92LhoC65ZRzkqERhLUXyVDzp9c3vfpTd7EtYfYGkHFybac",
  "key31": "3NnoVvNNXFuM5wv5odDNnreq6jjeZYQNtZ7apQy4WkajQA9dJPGhFW78zKBa7yZt6RpiQDLFFnQ5uwRKL3eFWtnq",
  "key32": "2RYYR6ghyN3berhRv5P1tGDrPrTiNCY9z4VxhCiAWwSxKjcSYs3iyAm19mLRHiXMeRNuQs8CEevYCup1QFvY25cp",
  "key33": "5q2txiuv88QCSwAus87rs5fVQ6d6Dn7nW7TPHDkMU3rPfjpBzbt3E2AL8MboiZX6jMPgNVDgH4kGxHHM27qQBJRx",
  "key34": "3eFGDvq4VckKtdUkExGPVV78cLV3KyYmhMAo4PFN5GVxMNkQXW62A44meYSzBqLq6Agw8RF7UrnRDERX1VPHy2be",
  "key35": "5dRT4RVXcaQ2w9QrhhxEGUGccR7crpfWRuLch2yS3UpxPWTK4tfhZ6gLAd6Xy5QYpHBvmn4REjDJGM6P1VwXo2Bf",
  "key36": "3KGNB3C3LYT8YLRb8kxfv6oYzZdutFShXTRHef8e6jCsaL3PhQ2f3CxopWJxbLCztKY8tPoJosGCNYK8DkYGrezi",
  "key37": "5X3At8kXmkCnz64Zo6ifePWE8WiKD4qaVTDLU3reFSj3PApgytR9d7BzqM38JaxVU16gFqXUSovwkfnD9PdL6iYZ",
  "key38": "3YDcFxhTh1u27Q9HffxY6mf62tVJWUVgBtJVtnMsgv8kW7e5jXdiCZfKcTFS7aog5XuxC99T9vPuzYicJ75Qexp4",
  "key39": "3kThFetWNSCopM3RPufMZwhd8gGHeNyJNvV7vNwaM5e8UVQUN1cAVdZeTpd2uHjmJbLkhXdHBV2gNM69ZxYwHSKE",
  "key40": "5Zz6RH6nRWhC5egXDEBuoAVpYfN89ULpzP1ZrfeuLcfbfUpgjboSa3Q9Wi18snkqHTjcNtqKj6k62guDgpWEWvJ2",
  "key41": "2bmdcuKdQkAwXgke1JLCopNAxC7bUrgcLsuhBykv4aTUu7XdSG3M2d3ZLxonD7CW6jDXXvKCctQPXP29TA5kQAF4",
  "key42": "UuSjeLcgm2AVrzfXdGENeURYthJXY7TuZCJojgGWHAEBvNmoE7bD227FEEpe6zcqRqi3BQVPNoFkuASeNhDSwma",
  "key43": "4xTSszrxLxju4AoYWckMq1CmaD1oZsA9BFZRkdXNizeWYsx7AtTVG3RNfxgXEv1SosCKB1iXucWzmvqJNfuL362t",
  "key44": "5NHZrbcKoSh5azmYm29DduhVMs2XL8GZni8oH3i5cEhcvWohSX5NujoaD7GHRpf21csLCp5djRmYcVN5GvEfXaJQ"
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
