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
    "5rmzb66aGHGSAVFZEpeWFafMvWfvmtZteQcHXPGWvKm4DXKJk3trQLR2Mypxm2Ba4CtSZDqvW7A5DJzURXF5HNUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZZRN4vLaco6x5wkY2qzEk2m54wrdbyCGqX5fcJxnv6GwfVjC8PQniHpJLNPn9XRJAb2bt42VhYZkynYo8HzJyz",
  "key1": "5gqGQT2ZDqpEfFfv1jJYaxRoqyxkrbwtf4uLW9BGrApnP7TmFURWx7C29NVM9MKAgGT1E6WL9gCSoyjh3tpd3jP6",
  "key2": "2tjf5e7T7WnZw7ybRbsu2NA8hpuc8SuCjiBpZkii8pxNbYa4nt1bqfnWPpqibsHpnUVQNg3d5BAWst4ScfRdfX2H",
  "key3": "1vguDPDGWNAEGeygf6hYpuYLZuKUcCY9FAcSbC8a4ziAABq2bo1tPP1NEpxGjjSmxoX68LT2o9himDu4hCG7zGf",
  "key4": "5MgzBzhHyeQ587PnyEvR2HQ9M8hNS34xubYCt5WkTv1Ka5C3bVVTMprXDP2VWZM9FZqgMGymsCwrv5WNYAy4FHEU",
  "key5": "5u7Q8PuMPYEuDWjAw4H5Q8Zp5DFt6W96CJeeRFcxdpSb66RJUznyAJyefDpZsw6NA2TmeJTKvzVSxsBAY3ReUnhS",
  "key6": "5hGSwTjVXfgLmxA7pbLJm5ScoUd2hE7rWqtEh4SmFBjZ8XDDSEzu3ohrtXRah7huXEJbAfPS9sFHwDwsgGWTxeYj",
  "key7": "3XBB3XGRUKnwbHER8XMvX81GEdt4B1ENMhs4TSnF6rAriEerGxYomXRS1V1es2AzP8UnD9RC5hGB1qwDiN9hNWYE",
  "key8": "wc44Wr4BBdhDjFdknuQ8hphQFkfwZE1cMUijyzSGQ1hTZu6QMgfnQZxYJS3pszT93o1i6toGXgfpPyjUhAdAXJh",
  "key9": "5LcY7JPXRXccezZDsi1XNirr7SyGShaa2XegmUFxDM471CKF6BYMtEADrDCUR1xUK3QcKHg76UXTpqsGvcjWTyW4",
  "key10": "29iRoCuTWgc4YJNS6BpSkt9vSi5rMjFEhDEiz1cZXjRyHHBz91cA2XkktH9MAYWbSwr6k9yBR5mDmXYWXMAZ5Gbi",
  "key11": "3tW25bZBNjsHL3uARgbSj5UR3ZfwZzXXcX9mYeF2fSn3tGeAtycW3SpQ1fLbZAZT9q3DapTCRAm7NYsi697e36rY",
  "key12": "2z9kRNkhoMt8uGikkGq5MFjtvDWFVZfCNie9orJCLRVdgyU8VZ2dt3xJLN5g95mntj4j7jY4oKU8Hv2AzqmnPZi8",
  "key13": "526GrmHkTUQyXbcKKvpdBSjdvA13METxsWxrUw49Sfs6ig5Yayz4rjJXmYUdXNFSFTdq3nBnLxNYpV4N39LSYkWC",
  "key14": "wtwkGb6SJzrQ6y7vkkExioruQhqA28dTYZ9EMZaKfg4B8MquhNGp5LjKvNWqUmXaLBEkVW5GBgDpsdMhi3iKD5U",
  "key15": "3B6ifsMtXiQwwmiiYTqts2kZQs9UzayZDWK25dyxeJmWyER1KTCu5YL5m7V5bHn8F9wLRXs98BjWyqU4LpGgMQgH",
  "key16": "2HVy5KJp8vfNdzN5gqKmpzNqWemN2MZhnKwfFb72kBkjCWW8sf55NvUghSYvKmjj9mJzEUKXxNPY6ooq9NauNqnT",
  "key17": "2JEpJVrMdjXBUvL8UFbHFgK7H9sjyg8JfWo2H2Yc9XPiGJy29fpiKD27BtQ6SwDV4n5WhAZkyo9oQ6PBqFUUtBqD",
  "key18": "5cZhg9EMnKHRKjPH42uihENZqe8bEYiv4vtWKpTGjNEu9rtWgb1Nnq5oEqv3pZPikfUVXcHZBTzibcNvtExp9b48",
  "key19": "5zNEAmczKNyYDBtx76tVTb2ookRQK98cw6bgtojNJmmSuBAGByiafQcFzsr8kgwG8g3AsXbZRchTbtoq16fioss3",
  "key20": "4V5K1w1oCv1pu8zNsVsVydXXyYCv5zomo24gs3EudDPMntohmtKGPYyq3WdfC6DbthExdUAG1sEiExnfuZ586KuX",
  "key21": "2sivL8NPtQYYimNgaL798Nk4J3WTszSU4dk9QytdQdULnRcohKBSUroANhfUcGmoD3ocxYfF73xFdHPVGdbKnHyp",
  "key22": "2LGrBiqGxE6xcjKjDY63UqYhd7HyZxhXr1Gx9XLo3VKqxJUXLNsGMVe7ZCn4fm3zhsy9aw1TJaPAo7RsYKdTLvMy",
  "key23": "2uP8uKGR7QqDsHVYp4bxp4m7YmHx9px6ej8HnkxGbqUC81CfK1XENvSgiu1ron9duH7Nm9xym8B19AZ1kSiutrU6",
  "key24": "2kJV6L4x894LkbNaMN1nfHyf4GSQtSPfqxttrx3jEWjCgBhdV4Hn8nHaHT2rigc9oRtSx9CbxjvjKrmminbwqds5",
  "key25": "VRN1N6UNprs7SphH7zpWdPhCfwJffmhbccdAiUkrHyPuTqojvPJ2aGdwBidJah1KUiB7ktnjfjhuY9MuweeiiDr",
  "key26": "2ciQXBwq9hHkVF2dJ1JeVfCBy1E2JASajNcLGmxvbkdTgGifwWhwxKNuSBLbzXa8nMHan2smxdBkVG8fxTSPHPGT",
  "key27": "5L8xrX7mFBLRRkVZjCFn8vn1RgySS1qF9nt235x562ik2whyCQZw8Dm72SiYunswCBUVYFntsBe7H5JiXhw3cQHH",
  "key28": "9c4N47cdfkWAFsmu6jKvhUUcCCXoco8s8Vk5uNyUtisvjRzNLGrWmuPNAwd9NU3Gi1ovTo8YvuqkySYPxxawDiu",
  "key29": "3EeUEve43Wcmyep1GPPTfvQEk37oPJ568wWxf8Zm93hJWP7cyDKeM53G1cSM9GYcscJcTdxrJxffAcsqWeKq5sx8",
  "key30": "3o5e8yb2dTyjeNPYbkHQiwRCyWSqBoBxVq6yPhLoa3hufmqS7qrMQHvJgCAefnSQjqz1W5nUFrFLnoW8KPfiUdBS",
  "key31": "Mnft7BwxzsyUvtMKvXtVXCxPaqsGwMjTNC1qsR5WSQz2UYphicYwSwiLLaZzvRjiS16LJuuZf23yDiWsZ4wzALv",
  "key32": "34rLK4JQwy93dMPopCmTpt8jHVVJJ2Ai6chbk1zA58qt9D4cKjTgBzzpL5TNAPt2P7uD4xZ4CXdM2yfw1BTBUDiH",
  "key33": "5v7cMmWbDXFq2FNiDkE6LX2fB9Dh6PUZmRswoabGXRxj4FSS7HKVi2cKYSCov1eBKNwPV4ENS88BaU125r5d1tuQ",
  "key34": "3TLQGBen88mNBDpAkmhNGp9vMT2pZWjsoUr3sa1Lc7An7xUS4A6HYAmEFcC7vyVPBuGByV3971YzDrRwiD99mfj9",
  "key35": "5AdGc4C7f9hETo2arCJJ4egHQXE3vMQ9bA3T25UCxP3yc7yAG8q2cBiRy32F3W5dZD9UQLpVeB7KUrv2k7n7XSv",
  "key36": "4yLGv3DuJgkpcgmK8ygVjgPvemydDrfsaE8qibJcpyN5H7L6qhXXw8ERxZQrX9y3K7NpEweP1cNruUisQ1QnZiYp",
  "key37": "44puN7itPxRv4W74pqTKcZc6jKvd8CwJRVYKEctsCiZfnwVf1YCMXyWA3cmqK7Pg7P5vM66dkESzyu4Xx65wB6TM",
  "key38": "4ydwmZaDnbmWqE6AVSLhvFH3suG7imjZmh9nESkHHXkX4YiJpx71cCuCZJVW1z3xFNRFseZiwrAf5jcW34sVXS4s",
  "key39": "5hZn5tsi2vNfMhv16wVWv5FWPRu61zU8a6Q53UTG5b8FUdJUPxQS3X74FMJdo6JMMGZy6hExo9wEp7GfyqwCD4tH",
  "key40": "4iuaz3MeJWdcQpDD98uhAhN2RA9RBUBLFSuJLZGbhpPQocs9v7cUFqCEhM2b76N9cYDnHoDtNu2UxawD5kWR9aL6",
  "key41": "3Dn1259B9SSrgU9FkqdiE8gCLr329PF4qbcZgbUrzLc6f4DVdBGGnggdyDqsPtyufa1y5tTYXeVzxePqqBkPdsUS",
  "key42": "4476FKDKCCKMtBnXe6D49BgduyWEPPuLJLgUJ3Uu1q2caZNJYfzyt4i79KmpmZ7pSVNkGiwYJSJMn6nbqkRvAxDM",
  "key43": "3RP7peMBT16gNMw7MsRtY5v9MbrfQDSHSX8fndRz8AESyah5tQM5V4Mhkyr3i7e7fZBVoeYHtXK8MA7LrvbhQPum",
  "key44": "4uJ65ScCHpdbRttJiSbSCSUY7MaCFVhbkkraio8h4ARgpuzLhVnAaqtnqzT4kAhqeStuYeLdmr7a7NbXEVZXRQdu",
  "key45": "489nFoJAzW2H62ykRj3jGt5NHdZw7BP9GsA4NwF4DsgPA1KdG82UuUTYjqm6vEPu9y8YznA6P6WXx8mWaeihqg6K"
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
