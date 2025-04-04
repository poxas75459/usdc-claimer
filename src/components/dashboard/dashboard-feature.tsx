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
    "4tWfzjG1ozy6Guq1GMuyHTh6yKEBToZpKVjiMoBhQ2PKFxHXXN7vskkcqxdYpoeVJEv2kgjYaMxZBKBCWgxhWpvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cs8FPWd4gSKR2AK5Gt3tAFQFHfPCR4Y9cR1emHq9P8QBUvc48zcc5coGPYzc7aj8SayHrgBdUBADucbs3Tx9rx5",
  "key1": "3WNTdjrMpy8buX8oxjn1QzYwoRPzZvPcFVuSfmgdJFMMtsPNzXTKzwYScUzC3Jo1vvXSHu6B1FHjbRCMZdoGL84c",
  "key2": "aKeb1ywm6jiWNwTPibeu3tSDfSudaqqUYBzpEaj9dN9ofCVBmUPbQ35AzSzCeadJCBLKne1cLbWsSCVP8zGcb9W",
  "key3": "vPhPznrUJStZFCicTVFVHpNFbiycJddt6zrho2qRTKhc4QNFjaybxm8Nd87LutkWRAydJBMgqZNRoJGZCLse8Qf",
  "key4": "3gQPNHwkdTJVexip2uZ2AWNRkCputvrN1vMsACYigsZZfFhUYYPZCwxzsnYgj9ZPxjrGUVRrdDoVXswWN6F3FWot",
  "key5": "3AKSXikZ72dxHP5hAJzPuUgvgaTzeZWUzqXDZUUdkiaRRDqPodtNHGEcUdBY5noNURi1zFF3oaskeatdfvZQVzxX",
  "key6": "38efADEuJ3MmRHPocEFPTgTKNvi9HvCA8vVxuPQuHtYXhNH84WiRuXo3WtnX3uvSR8xCNQdnE3YC6mVUeZ281Ayz",
  "key7": "3N7wYk8uCBsut22fAPd8wBNpcS3yH6FTwghuGf77X4JsrQ5kBSKFGxBv466etVk2TBUfrsLjnAHF8PBy54245e2d",
  "key8": "2398f8R4QDaiE5JfLy96xkAbe7TvBhYCYASrt98xtoXgiSFUxT8KwfNHAhyQBVAqjzTLPt2eL1DiC2zZcyQ5yAxb",
  "key9": "WzgdaFt2FPpMy6wEkmJH1PVfWQjk8cfSxw4ia4wtnUyYetKJvQXjbY3tkyFJafG8yUM4eJJioUwNRgGKKtUFLLH",
  "key10": "2md3T1sC59LmNHuJGMcWi9ga6kGA6fdtAnZaafxg5Bn28hv75yeZan36naqcTGgHgKTJpHUhP1BoJoSdx2KVAhei",
  "key11": "4ZfvN2z8BDQQFhQVqT9vA3YXCQJv1RNwzvhDm8bUdhFSRTRoytGBuEfrvsz8nzfjhDpovN8NJyKMkLack2T9pfRX",
  "key12": "58S1ybAMbHNy53aNBFuqUNfGCrKzR9bLnpFQpUs1i7sTkdU9GQYZh8B2fU8M3myBFNHrZu8Ddx9HWUXmZ2Ngr8TZ",
  "key13": "5aDcfQwj3bqghXNDvhLu8RYYaHnSAM7CpR7fvLt3vmph9Q1Uvm22HPQ2cn2iCVreDbevvkwQU7ritEndgMxGjthX",
  "key14": "4rfSS1w7Kkj6xvqzL8VWHKqVGb7bvQKNfVCT6bPyQB1Mi98YeidGxtJKbtGkfF917SauaPAtKjjmsLLcHjXPRtjL",
  "key15": "2T6rRaKR6G3JAcZKpvcdUJvAMata1z1jfVeYcyRnfEyub4eaUSGBGZKccSx9mCxtAeRvEecFLChgzxU2GBHo5mvt",
  "key16": "4WR6CA97mZdBikb5Mdq4MLh3Kar8T2Pq3Q8yPSKkPC6qo9JdUpBYTz1aioZB6HqMiYTX5UCRtw6xTT9GabFvPqJf",
  "key17": "2ibsFHenYg1zeaTkUSVByyZLckZMGpzdD2GAQFfGBohGk5sJnRSHUxYx29Z1GWWmQveHXaGUcC99MG6YMM2VZYve",
  "key18": "26eRgbiAuzUms8CBJqXQeFazBKyMvQ5mu7USJY2zMprohPcJaY2GLYccjNc8XHN3VicKHMswuFbrSBaZTprHKoAH",
  "key19": "53m5cB1uYbnszoPB5WuQTrwKCdMSJmMf9feiuWo7HaQQLTD8YbbNYGUS7id4XL5pT4KspXDVG1aTyMZX7iv2iD7e",
  "key20": "63eHZv3z6u1SU39GKidmN3dRf9jNs9BYkVniB6eAVmVu9GqUQYxGVHQrYNhsuE7Nsoeq2gW5zVGdzRgE1oNcD75j",
  "key21": "26AHWHP2Bu9Jm9BjXczoBRrpywDhadu8tpk5XEXwZRjwhFdQCfQy7qqzNmdKGSgao4gLUkLmD9GevRHmCgNKpUmf",
  "key22": "3LVEkAbrjVf8nsXnqgfCT2dEzN3zTfGK89Mnm6XZ39BEZp8zSGMhzdSLgXoymrrJXBb8W7bGyPfQa6xyeuGGt5sd",
  "key23": "4TBvP5i2avvy32xjYzkGMbDy2GvDCawtUcp9xsY7TVLTgEi7gqh86ehLwF8WxVyw8BSJdgpkJ6i1XLQkCkkThKSR",
  "key24": "QCmcovR5cutToEDganQUcWzEsrKReCs2V1NPSm7bFkQtKvTB4UkYkGpp2C5GeaFa9mwnTjj9aPvfEFLEyCKjWPf",
  "key25": "4ggPmYEVnQ3wwZRsoTAcZ88NEdwxpFKxFFi1NWVHYKVBaVGfDKqdzemgKV4ERQMNqUYFT1QQ8HtFhZXiBYTGsycA",
  "key26": "5h4d3D3Xkux8jvJfJHVnAe9AGxW5nahSpHJLdHi4pq7nAzHeW5W3NCTwUdmdY228KWjrp1HGHStVpy3ebdAd9TmX",
  "key27": "r6p1Bws9YhasgCS4LovWGZ9nFsB8XiQuh1hHWiMQExspyGMJsKXiyuUGudnnUkASTuxsh7dL6DdAnzqsc1HbuTZ",
  "key28": "saeVLVQUJGckAdF8ungYyGAN73MgjBxDMJekJE3p1zQr9vAFRn4HUa4Y7tvbVLn9WQzHYFzfFgLNyW55oSDwxcX",
  "key29": "J9ix3qXhniEQG5sA6chzopLrJHuG5tZUNddtohFkbTw6DYGm8kFHETkwEWkLFnD1gXyG2hkLoYxxkYJgwh3obZP",
  "key30": "4j388v8mpJ6PGfLKzyW7kPhejNHy177tdMabWUSrnjARbkCm6YDzffVc8GagJyANJ1YpDqS3dMELNDZrMrUjkg8o",
  "key31": "34eHPPPQMMX4ekWBp4cERfrXVXVTR3hTdSLBTbu3trCzdcUeEKJEn1hx35rAMmCNJ4k31PNWgzEYJQ4AfYGPBY5d",
  "key32": "5uYdAD5wxe9bLGxjCr8E3XHG2EQ7A7i4jSZVLhiWBFBBaAd1fYio2vjuAkpFHWiGbezehYT6SeDd9VVeqnEB2sea",
  "key33": "JmX1nQY6Ya4ES8Ybw8gjgxyvfNUb3CJskCQyuvzcC1K15VPjcmDZnP3CM6tQnhM5RqQ1UggN1feEhn2dP9FtS4c",
  "key34": "3zbTbxBxHjEKNyqkHC8CVtbZmsYRx8bfyiLdKYyBjytbsmmbH6kuXKZQz5SgCwBA3m9ozyS46uyN1abZdzgqQcwQ",
  "key35": "5fF4G5KAgLgVY6xgMNZUHHLYkYwBsWt2M1pkE4AvpGvt4nhLJPLMgMT7kU2yxeXPgHGWs4pcSrtrFUtLdW8McsuT"
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
