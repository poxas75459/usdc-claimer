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
    "5Pg5U14cfkj9NJdb2t7LRHn4vkXygSkCxsGqcFhAUj2wuCt4Tkad2HBjs9wb77jtD4mb6b7PyV9vy5PZrssrknjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUB3vUwkoWgLzVMuLnXSeCrdysG533CEivdkas5bxv3uyK9wQpmHXDNVbiLNBA8ZP99wa8rMg2t5wLB1yhJcvr8",
  "key1": "33FCA6j1e2AYDBnSix7zqunp1KxJxpfyQrPkY56VVYJc6ggnoyasHYDSWa6jXDB4sBMwc57b1jf5mH4EZNSqUHxh",
  "key2": "4R6f7Uywz4QpFq99zzcx88b9Eymricq1qfEtvM2PAt5FVqirXjBiCVXYxsuVWUTq9yJxvkF17N3s3DkazYfHZZyC",
  "key3": "3v5kMh3URV4uQjwz4avCpsFh8ZRD5vjMvaos9WwnfWAKtz8njy66HS1muPxAHGh7DrZotfo2dA8ojtXTbbDDTVs",
  "key4": "4yfFxoo33tWbEX51ZrE3VFei4P6rMEgK6MdRVGvuQxjGxnaz7KjhcfUatfi9Zp5M5n7e1S2bpPgxKAh4sG6syZM9",
  "key5": "kD6q7fHMvi2kL6PFCZMMowHKA5cjaV95ADa6BAwX8m7uGv1zKJqJjuri4aciaYhZdC6PQoXDZpzuAomfvVGQqG3",
  "key6": "2njMaaLmZEXtWrgTTRamt6HHh1QdmX1orsyonA4bCWv58k7pz21qhfGbLJXFeXAkVDrex2Hi2aj4uHYyFc4J3Gzp",
  "key7": "RzcTD6bwPKU4xfJB44mLBkjLmy4EfYZApnm3ABdwTQJPPVj8XbwKDGWv5FSsrLiwo99Re83Xh5NVaPqUx1C3dJy",
  "key8": "35545VUBv6Gapxc16tFvgtJbs2nTWG8LCPyEWxZqBYUQ7sJ14KhMa3jtFH8zvv9R68dFBpEE8FBf22V5yAVioxET",
  "key9": "2DxnbAmBk7jNWKELr6vkXboezU6VYXSFZwPYLM4oFTzioTxa2tohz9KuvepcuSxaxRUsoVoSWVJfgKeMEeRgQGgV",
  "key10": "5dGNKBxPTejmsvAbMCe3TTDUjyziiUWdJD2TCqTafFi7MarRsBREiC9gqvJ6kkz2gAJzQPqBNDiZcmznkXPpzaXy",
  "key11": "3FtwMhf4ncvtinX86wHwfZ559YYCZuLs3TbWx5WXZqWissFpSrsT5BGjCqgbe8GUnuem27tZVC7599AhfKvdREdb",
  "key12": "5QpZC1d3VGXbBQoNqhYnadsMunTy6GH2nRJcCS5zZ7JR93e2srTJb6bEtoKY6k8JfpuQ8pd5qMhpMoEGPfsCMoFT",
  "key13": "2MvcW8FAJTu1aqfpkz8AdrbpLkkHMTQL9bpWEMzAVAqhtEFe2XSz3VzRVYSTZC5CEAMMb12T6iqphPFJX1x76Ew8",
  "key14": "4nm2uyAtZa4hazMfGMhovoUGHx2vmfVVzJciXmabd2M9DFv9LctHdbTFU2bCah3tezoEnfm2fVMEhisoUzrZsa58",
  "key15": "227HP5NmHWZSEirSRB7LSHw6JsWvMnDBHuMUXxZYxDw7R4Yt9PNgHLQ7h2T2nH3bxWJ6HW3SEYHMLTe51RQZKcCD",
  "key16": "4igoogiYcqwQeiQhG5bcXDYWmqwCbEiGK4qGdx2p3C7ACPBi1bydsDStZEvUA8M7HM1QpEr6jZHnT1k2zrgtXkCu",
  "key17": "5ZPLgeW4G5v1E7gr8VSQRdN8kxiV9Le5oJSv7PF6QD9SZjV7htp9wBgkcvKR6J6TGRtx86nFtwqzDjhZaTpZE2fB",
  "key18": "46kBbBt2H79KKmE73o2vRANchSv2waXBKjNNH1Be4Y75oNZQitNGFyqQucsXKPyPX8PY1nXh21CvcZiag1Tsht4D",
  "key19": "42GihGetj9REAs9wcL3g36vB3FNtktkto5oH4Ab5NZXDRH2CyrvetpMS3vt1F3nfzXzeDasuHJE9S4Fye1HEUZR8",
  "key20": "5AwDRhTbCW3LqV6At1iXYENLRng4W7iRXmZwyYwmmEKTHk241QantfxobL8GFGHT74XmNTYFEQztXzAUWksYZw6",
  "key21": "4MYQ6wtatJLzg1rRiXF2L7P9vtQhBCfHBk9HcJqNP1hpHPihSkRp1CfaCdkKkE6ZPPqDtvj94fFiJQBXQxfGhV2y",
  "key22": "56N4FbFnG4v8hreqKZQLTuXH9N97Zrf8kJt7xNvzqdmig81pZGcM8Q1iTwV2nnYsJnuhR2eU56d6HCpdN3cCz6K5",
  "key23": "CFgFwgoiJVNx54srPVksyNJeVdeLoaHUDVcPeYBXUyLzNjGayPZrEtmyEzyx35NsdNaq5bTamyodBDoGv5SzGRY",
  "key24": "4VQSmzhfGHDCpK52CqouUGGH7nnXqT18267pknXwJR1jg8oMZSMXdg7c4n5hW72P758wbi884uUmiggTJM7EW6Qx",
  "key25": "4Z4JczKkTvaT5315irEnq79Roks2k2PPmpzavMb9gE1GYU88HNehUzYHxhTLMDqC8WUArPHxJzyy5GhskP9PtJny",
  "key26": "58af5ihwP39LfekAu1WpTkwKzEji72yDvxjV2ynw3AYpg7r21Px75YpkpKheBoUB5rgvBKjCFuiQUZG8yGxHfRYn",
  "key27": "3ztQRK4kTLwNPdn2pASR4wXNBs7FduPfRgCABZoax1Uqp7sy2Mis2ccXqUPyJZSrP4cq9FrHYiZ2b8oRXH8oEgKp",
  "key28": "4SyGVSL1U2EJVww6B6ZjCU3wDdMkxq8MCnDYexbGssHcFWXhUKcxCzyJxXTDFR3fPqsGNutdmXpoKfeZFxoVJMVX",
  "key29": "2TmzgXRisk7nZkx55GdjUFiVW7TXyg3XnZGVzUfug63CZjXJuFwCAW5XbuKebZKw6cwUSJYPj5xiK3NYYzPBZHjt",
  "key30": "5bLDwhoAzfV2DdfBwMCG9HbQrVRpUnescsVvNncATtxyxEHYrqf149P3b1D2eipwgnKWnxZaacnEtKtGS4ios7NU",
  "key31": "2xUjYJcHYFVFCQXfv9bqC7srYnXhB7bu5MM1wMp9CxuFV6Fj2Q6utcYYiY9ZhfU5QeKZaNikjzWuTZ5MrLskCkqr",
  "key32": "4hSCE1KJJEa6MXJ6mXBYtctP23SBhrcGSeVFGc6MG8ETRwtc2BcQfYsr5DHJQaSibwDKksmbSz3ywM3jhyyjRNBg",
  "key33": "5ouwVpotibSfi6zsrRVQ8dSUhbLijZ4DrCRYLMFEcNRYUY2on8jQ5Z84vHxCrQ5Q5CHmpUutTXkHaHm4NxM2HuHT",
  "key34": "2KzZfG6BPnUxj3cUArThS5Ycig2h44GPcC7FR3AW7iWexUBTQ5dLC4GuUuB6yi6vqkmJSf3qAnhy4sTBb8kACtAk",
  "key35": "5BxRh7JuPcjtYPLVohXJ39BuoZApNKvs7mibufmNiz1o3nqm3E2Kd3r8gnBCb2Nd7LbHGsTeiEVXWQCHzSMyCuoU",
  "key36": "4ScRmqiRGbrJfag4yZjmwYYkAEsu9KSNb6QKwRdpsRLogUYBYmiof2a7QWYdG6fZFDj19M7jCx8qhKxgZN47u7oP",
  "key37": "3vEnEXMuSXwPh9rZfebYK7nGKUvFhwCSMzwd32xMnwDWmqUnSpNYUQL2kaEb87qeGrCdNWckQ4zhjM8GrtQ1tqMv"
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
