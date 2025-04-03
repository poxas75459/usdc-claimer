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
    "28zSH7Jam87qquuQ4j9oKpesEgjg8hvxmwA1ZbKN4du7fCLdyaFCaiA7Y7QEvHVBwW7eDuZEfACzYnKMqkjapuhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBs2uuhiD8y1vkAUw5A8kq8kEfzPgvroy19nt1SfXXfhWtWSd85qrfAxo79x3vWe16e33iLNanHvsYmbq8kVyu",
  "key1": "4H6fYf9W7VwMrDvYveSq3KntKZVGZ5Vkywtsajnea7xJbodtFQ2JVsZQ3Z1weLhhPu1NNWqeT96Rj8F6LQwPdidh",
  "key2": "3WsAX1r68pmFD4cSJbkw8fBKP9C2MDouyyH9heKRUr6zSmVNDUjTWGx8QhDb6j2YZPP48zxMQ8LfvungVD5ULKA6",
  "key3": "un4oRtqbvwTpVRNKRPUHtQjfVsemSVkZrtmMi7nkyyw7WBpFcZxoEiAgDJtXpxuE9bhPaRBBNwmTp2wyU7ysZfn",
  "key4": "5iu5yKvoRRP6ef1kiV6D4o3coBxkpAc1WpwFrMwq5NUME9uTrkkGJYF6pSrg6Kw6wvHS7PVeVA5aajvXZds6EbF9",
  "key5": "rYdyuS7vy4zk5aojfEbKDMBgztkXJPGoJHDvz6NvJkhjdBSykneEjxgMWQG8ecx2L1wY1xh4tJGFXGmPY8vuSHK",
  "key6": "FG2KTkBv3QiojXj7rS344Np2FyH6iAYNtt3SCwwHjUYEtTpb2Zketif98EyqtJGwPWwUFDQhnJ27DvSrr7qXHjc",
  "key7": "5oKLjJJuM2dp3vWYYZGWnL8ib9CeRg7ZTFNXGnCbeWhderuxV8mom78HYRtKy7BLVyo9M11oKqgSZ8CnUJ7W52Ed",
  "key8": "3kL8nXuRsxFgdWSCD5mdnHBoBm43g942YTCcHdaemsZR8J3zLWRgVkKpPMSARGsNWupnhpwF5hiaU4JwqyC1J4bt",
  "key9": "DpTvaFNXeQis2T2o6qLZc4DWFPJK4JdcUbnX6rvf1xuM4TGMca1Utb1AMSnVeXBhVYU8BPnjcrc7VKoPbDgejLM",
  "key10": "47yDhPz3iss5agTa4jQww9yi2nzjv3R9aPZoPNGz77rVZucxrtaMRo43hxQDTVTX82Mr7VG3EhBAoj68aHhH6wEw",
  "key11": "BfPfguGprnMb66EaoPn9hLBFmd1F9Fck31Pv2C6UUcMZWc6oK5mbYFdT1YMWLSkKGtszbRdqLoiu4MsFK3bF87T",
  "key12": "2zgY9fmPz6pskugTM2uobRLrDLHMNdoTehocheeW5txy6uJrcHNSCmZYDQndug7mCfJfqKucBvr4EizmJ8k5s9XA",
  "key13": "4HMhU8RPPTHvmAtbZJGA7huqm6AVFG7aGvbMu7igQUdxFD8XUWeRk37TJA3VYecqKLJqFwEnwH38mF2CHFm2nub8",
  "key14": "K75R7Sy4MWpL8j7YTA4DFB1k9BoNEa3nfXkcJ9B7iXd57iTakRBNRkjkrPXFMTJWusiQ1qaLkz2RHYf4Ygxdv53",
  "key15": "28HzETWmLfiuBFv2YbUDkTvPrTHvh9CYVTiJhcfCJF2VKp2iGtNyHBNW1PQd9hqSP3Fr3fpKBQqZqEBBTF8GZ9Cp",
  "key16": "5pFEoA1v6wyDTTbMnpN1NDgyQQQ72KXvGi88v7Spa99ZYDBCJSxaEupJou4MRayK5HQNKrmDGxHiwaTm7dzZtHwA",
  "key17": "4nQ3WJxXZMpUsjAT8gUVSUBGZ2qjK9fvDw1NYdaJ3JphzQYt6RH4eeCFGDNM3nfjHCA8Tnad2GFwdumFdd71qkvS",
  "key18": "4c59tRYGh3YKPGNipwghgbUPBcdjmaB3Yj5ho7K2iFX21zhuF9DK2smMuzKTwMeX6WH2U64Czi53BBGgSozXGi2Q",
  "key19": "FADGT6aZHaZmu213Qbcr16zKh5XiUrDYNVibo9PzdiLQSG5enBxRRHGudZFyZEGMC3p4pz7tnwtcJDPWuRoFt2C",
  "key20": "52wTCMbdFVsMNCg8iBmzBt8FSU816Qu6HJcV1PZaJzrevUxywUco5xoxUQydG4KrALaRkMquHrVRJRHJ3GFPUdLo",
  "key21": "5JaTeteHEvZFLUd6nUy775br9R9zFKnWxYJ4R9wi7PpPRG4RDLfqRX5uXToPQGvevfLninw9rb8vQDnoP7u4pJeS",
  "key22": "5vWCJJfKRtDd8CK8D4A4JfnKhsLBEeNjTyid15WKfJ8Mu1vzJHYcLCnjg6dR6ZHcYVmCS6jqtHRqqvCgK5f9dy3f",
  "key23": "42jJ7EUwtBYYunJKSamykXuCWZvHKwySGebP1RAEAWdsj92GQGQomd9McGcVME5pbbYPmfTwUa4hWVefeZXhFMXg",
  "key24": "F8UumeYajPV2bzVVav3biHMg6w8vpJF5vC3YeKoR9kxk6tiCE1EwPiGrVNLSj7WqH893WoQwP3ujYaaddxtg2VZ",
  "key25": "2muD3CRv3QmwBE2CJhv6hmUCBVX7wC91DumdySWGEjPzSxENwRcuZVsamqq531Qe7LYsjRsf53RkukYD2JK5pB13",
  "key26": "wQfmvkUt4KCCMdy4SXDRGNLkpfo6o79q4rKve5HHHg6kKt7wqYx1HCQKuVatiDoUrojgW4YnhdZSZbEgHCT9tZs",
  "key27": "3eVhKYSsE14H57uRQrQi3eYTHDLJyVdxNV7Z7UQcNYSNKWiJNsDjkXqFUaNcv6Cq5HdSuCXBL3xZUYwxafgbEggD",
  "key28": "4dbbB29QnJspDZ9aBFAyYiwTdDygFYA5Q2CidcrAcmK77uEhkPKnwNPaWjtAGB1sdhp4LabZixK6HcEMu5fmCQgy",
  "key29": "2pP5WjY1N3suXEWs15mtXu1hMpxjD2D9HcrsvSJQrz5rFz5aAxzjbEmmAUudU1rJ2zpDy8Y3tQp8WgytjXCNygZX",
  "key30": "5TeQ1xJiEfz6wGnr41adBHX4LzoTi2MLUoFnvBRqxCo7pwQ744tVj3TtRXsf5qM9oqYPKMxvh1EZouqXdJvMfgVh",
  "key31": "55MKjsQ68Qt1VUh8c7pBhWiqKUrWZ5axzDFNZ68oZrKpTRY8fQ6RLNQ2koSuRUEwwrqvXzUSA9Jv3KwAtu8UDVqg",
  "key32": "5KQcLWAXtxP2ctgH3emM4Y3g7MCCan8zgnucZQT5agnkNKQ2hdLm5ZR8FTitVzYqTagujuDd1ynDugXC14bmruK2",
  "key33": "5htJNGD7K7fmW7MYAuNXtBxCaidDhaugeNe6Q7toLmRvk9jaKqZxmJV3mJvJdd9hzdZnsefE1yRv64R64RUBDAPc",
  "key34": "65K1BXr9AoZwq781sxtyWCkMS4eVNgT59Zv7iJmQk3oLDk73jxKD1nh7LdPqSt5QC5PsXgrQH52TSBom5w8hZVTk",
  "key35": "2iD6BTytLQAqUT8bNarmZMtw6B52a5nHRabWeZJtPPJVG5DVjEZeZ5R3yRxmRYLnXyybuevF88Uv3QWcCnbVrRZB",
  "key36": "2kiNcDnTbV5CdkuciD4jWyJ3bZqnF3NimQhGwxxNTVB1wZad9vmkgu8uDihd5zGk4ofHtohAktxT3CNR9QKtv4EX",
  "key37": "2GroVJ1WdxDRwekCH5NZuEMcVKxe4ssa61o4JNf18dGbqidQ1ALrqyZin5YJ6w5Z2NMj9mrNpo2c2Dh7K2QMwM1b",
  "key38": "5gVafLKgdJHLZNuGpEXsdghwgDZmxxvbayML6i4TASwC2Y3VaAyC6LRCkmtb8KUosrgTHTUXG4KZkfAZrtutmeFn",
  "key39": "4BuucG3HuvwrVMmvEv7JQStc1gEA2aat12qgKLeN1hekrUxw68HowK7LTUjsMRS6CwvKRSq59vxCe7GWKBSM9SsU",
  "key40": "2jdv72G3RehygUBqpbPAzkHrZ68X5NeT8sy2EKYXpiQVA4TuzAH8AHGoXJ7xYRh1xVDgEb8ZuziD1HnP67R4twHZ"
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
