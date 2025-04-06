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
    "63FLppjnAPuPigMeL4mQ7X7tWi27DfbFp4viuadggmSozYUrkCHtfGQGipa7h2G9JgESPk1k6MF91jXeeXqoswhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmEHjaYWTge82NLFp655mcyAbe2uojgbvabC9E3BsJrySnKsG5CVpFiqgcP53MqtedyZwXTZRn5UsgXL1xHTss1",
  "key1": "54nhu7owv7pSKry1g3ggHAQmPbcWvy6mGmV37VGLMec1NNFgPcPGRyGLttftn8q2P7LXxtVpRdDSMbJVVNLzovPH",
  "key2": "4tNBuak12qaE95heCrYXapLSk4fD9ymJ64HUA7d28YykDjGSrkVVqed177f6Pae2v5FwxdDzz5zE8tebfkFACJy4",
  "key3": "5oWnq8qRHUigBpLrPEkTxYChePBLpGmxbD2ZyKLFg8iQ8U1Y9aAPXpc5LAmEwqGjtWxvPREbXwDMGnLx5kkMkhqk",
  "key4": "4jwRxVkfxs8xmy5Pz6JVNreKwUEdzRNm8zR8SLiCkz7SyQ8Le97hYXBxEdgxmuSko1NGV3eJyeWbEnFZW4bftNeA",
  "key5": "63L3qKjVfQt9eoDSFBw8coa6YXWXGrugVAQJfWUSVgufrUGbqb6c6gyYfwmHQMVqwJMDzG8xpx6VkG12s5rvFGwX",
  "key6": "3AsY6dWBAj7YVbq88beTPFdc1qGxetdJxLe2Zmub89uBK3zAkHJ6LY4CffnWk3QTwtCms5maFcagRfnxDETiLFcQ",
  "key7": "5e2KGUYkQ6HjXKgaTB2AL4QYuCY4wikArYicbHnm2NnMaZjK2EcbGsa9pY5i8pLVekcfEq3sekduYZ28M2kRPZYg",
  "key8": "xPfcAtgNwEjzMCbDFWjxqbGJBRskzeK4xqTTyPjWwMz3FzLZiT3Z9X9XKmyJ8Q5KMRED92KzTop8VKM8SqdAf1Z",
  "key9": "4zXqEAfqE4josmsmtc8Lwk3PemvPYe6sfhz2mA7eAXpoyq9qjDNVZhPjA4r9kSQi93ZpvtruzirqRCUbMKnBxe6f",
  "key10": "4nJWne41oYqzooHSAJNwKFATWx5f1zog2dyK8JVPYEevGbdv8Nm9PxL1rM7tu83tfEHxDxsW62oYEVSgkZZtibwg",
  "key11": "4fQByjieFT25xDTwoooxvMiH4EEBrtF43QBoGUzCL4M2zLpLvdyejbnnGbxD8L3sB3vG3NPSdCWoikuueiZo6QFr",
  "key12": "3dTN55kYqy68Ac8hVESkcmWRLt5Fi5dUoxgsWBKYt7jXavybFbtgvNARnY6ggB2EYNfu6jCVQoFncTW1LsvDgAso",
  "key13": "fPkJzUQNJr6FGGHHJV29sh5QY4iBn2AZZ4STweQTLU8jeUgFWfKSBaP3QpmCkJFC15nwXLwSRfX5UfGr16AW1Jr",
  "key14": "2a7hRk84b8fsfwN2VVmgTZ45w1Fao24GNVcdJiM5GTkqy6xjKhNw3kDHJh9gV43aVHGBw1z4yovvmtEuCEANKmQ",
  "key15": "3Wt6kQLoNRjtzm3qkXnVp2xFkeJ9KhiSR9XwaGAQ6xFbKBUyfCz8AQXiHyz6CWJiSnehigVjFhKa67eMJH99EaHq",
  "key16": "24LR65xuKNg3GNpVqsc4MKV3UWfiYrMEQ8dpcFurVkZBDjk6eY8udVjMM9eN5HzHwKH96QsCRnbKZwmt6JN5m3LL",
  "key17": "5qa1AtvxonoKLq1UgrPNeeU3kgoVHZweUEivY3cGwLrbdUoeibfcxAE1ppc8hvgBCNW56jttJnYS2UGwdcYqJMTk",
  "key18": "2MwBAQdFF4HLig1QxRp2MTc7uGdQ2SVHeaL18XBpcyxADYzaAKuc7N15mgAh9iQdVCihWhJoU2Fc57PUnLePxqbv",
  "key19": "uYVfSUxVNJNAScmvdxx9ytguNNqKafjD3CwYuzWi6nSQ24t5fgCChNeihHuZqkM74zy5wNVhfBo9hJnkXwwq8cn",
  "key20": "4J5pQos6xd5DE3d77pLQziW5tNHPGHt8KWeadVpvUmmcqSn2zDWryYypnZZRDdeXdusv3NkBEJ2b43ySVymEesGY",
  "key21": "34YMWBY8P1BvYbXPDEbeQHd39ixjXaamSfQDFM48789FxEDHPJZtJ5q2qEvmnGUtYXGtpcWucbRpqFsL7LSrYzua",
  "key22": "3PFfcBZEgYJVuLNTH4jBkVQ97uzT1BvDYvxC3kNCqCrY8jeJdtR3UbLiM7ZV2oLVp4nNh2fgdcqiyDQWtPaq2uE",
  "key23": "2b5ZBikeBuFVm3gAjqAxjTrLVx3AXwjdjSnF783zQg4wvRzdQGbwMM5jjMULUxmut4fB82gnSF2t8ZVu25x5SnEu",
  "key24": "3QrPJrwQ59M6qJKx9iwptCJK2HuEFzvpxunkEFsgGgcCrmGJi7iAezqHVNFaGaP6qTVt3UdneWP2P5jWUfEU5TGe",
  "key25": "52RGDAZZJjEjDSqbxcXLJPeR6PuXmtqUtzxXAnDtMf4txXJ2uuqmRX3VjqS74g3CykwMiwibged9TD8KFtuufUZL",
  "key26": "3EyRogYay2q8RAgqpycCBiiR9gXHPqYRYQfQEP5mEgaZzs8hHmTzZS91RDuTUEvrEh4CfrdzC42617jWvWRz7MuR",
  "key27": "3zNV6QjNrKhxvxUJZQEFuKMamsTd7hvaHsyGgkZnTxzqkAGzmYCdv71VrzbUxp2rJGmUWn6cNaSg7KNPtRXscosR",
  "key28": "2LdDMp4MAcjFT9KpzsENbdg9ogaUrSrXDXE5rbtqCUmRWKrpkATHE2UsHdWWRb8TBoZWX6KfQey3CCrCiQgEPdpe",
  "key29": "4mzCfGER7wPy5qntpg85UBzvC7QNDbc5NUDrqdSJSUwqyFC2PDLdzkcUtQwwVCgFnguZ44QWE6UFHXb9gaR3AHvN",
  "key30": "2U9NWUpPBoySCUGMfNoAo6bKnX1UmpeTpdkhYETkfLhhF5DyVuibtrrHtQVVR4Z53f7JQ66n6Qr2enw4TpYQrCZ4",
  "key31": "541ftEZkuuknVvVQzde5C4vTaKyUo3uYTym9HZLXFQvmtDYKGMrwdpf12xX6esG6uq46necGhodBi97L44NZmbWs",
  "key32": "55PV75SCmvGsMTvz4rjhM3zY96Jf8aJZfbdKn2sr3uc1UM7qEEPLYpoHrZRtJCFt1grvdRhb39qn9gaeYo6ax4yt",
  "key33": "4caMymxiaKjKFYmCg37RQnwr3pEiu3eics8ijDsQHBGKCrrw3w6ukiTP33o7AEEi1Fk6txk9aBMxgNRYc1gbRGpF",
  "key34": "5s4XYiSDR7ys9NpjmmFTorRJkoDX2kJCvEwxgg5H2k4yFR6WETaGfCFUZz2WYVN7cXHTRDk7P5tWduSgNi7jUFpd",
  "key35": "2LS83vHtWoUYv8mHwELy1ME1vNnhH1h1TqAerjABK3s95B1zXqY5jJgBY8TG7skomsMWFomoq6y13G523NbGpSbt",
  "key36": "56AA1KvfkTu1LUnFBFVkzQHFMMV8u2uiAsLHWSDGpm5FcGgSYDaaqXmtQruWav4VW9HC6htLPbTZBqdJKY7tRcg3",
  "key37": "24qBrrToB6RTZvzREmjWSuqkvTUSK8UERjZ34R1bEGTuUKj5onVDCFZiPjo6EmhagxBgzrrJMMMZ8U9kcsVbiaQc",
  "key38": "5QXSWm2Caw47XVFUqy3b1k4A5MghMJkWNUdP7Frc37n7fMyAhSoSi1jsBSJQTu1es64PUyVzUUKm7KSjyiQxRKCu",
  "key39": "62tEmzwGSx2VC2n31Zficphphsp6ozFgSZCNsLkE4YPv4Y2Bm5iwUPvLVKGw8iEbnwekrZewgQaD1XgUB9MZ6Nty",
  "key40": "LxF9ZwyuK9jXw9pp1XP3YBxXmgKLw2gHzUpGJG99RXxXJvy3Fd8yHfri1z2K9EN1wtfdmyhmQS4todN6zSMXWUa",
  "key41": "3DSY7SoCCiXZvqPL2ZugbFZYc2PTSFQ3t8GCUDHMa5uZUXbEJKaGRtnPgUKxZRTiiEU4aqZvN7MxzDqE6t5JNYvp",
  "key42": "3a8TCpEz7MM7tpALumuemkFw31j2MMshsiKJAH9KWU8Wxy5WTbzWiQPRuanFt2maqjfEMtmwYP4fj5KaNjLo5oP",
  "key43": "4bMy14pWDb4w5xHNmhpTswgRz66tiLLeSkomKVpf1PxwjXEkWU2b1B6PXuFpRHMu6h7mSLdLcS767vXP5MEAUfDt",
  "key44": "5BWUjAhdkaLDyPx4paAgUAQjJ7psZfpbmbXv8G1QGbYvGL2UnbyHLx2r9uf1CAiSzmKeaZqNq6Ds8fvQ2dWKpYHJ",
  "key45": "4cHbKC3LuxrZoRpZdLwf6bM9GsD2sWdthR5BqDN7kGEYxHepcembUaUdfoyzMwSkE6UNXdbZibX1TZy7g4pARuVX",
  "key46": "5de2aSXSohJMLUdLJoZft5mpsUHvKWUqdhApGEdfRu2CRXTKB7LqNyiYhVQEW74ta4o5QegZvWmjBwjp3DS5dzsC"
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
