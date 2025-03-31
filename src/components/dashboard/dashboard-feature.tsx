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
    "2aUqbL3vzrvu3Hvz75TsyZGnBcE5cRgiCbYzGbiUyKD5evqf5DgJ7miZnV3NVx4j1GMwR6EnB9aiMr7eccHhgYXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zj9dMLDoCus9SDWixvon7YRTajj617hmejVVa5KexMXGJvW2QmMbCvdZHUhrVFathcGePpq5HJkQ78FwQJRCFd",
  "key1": "54gjz2FS7ahXLBWxyNyu6ccj7ct8dN5X6P3QkEPbpJPySrqefG2xyae3imSZfj8Y5BUvyjG4bSHqMti7bpEwWarm",
  "key2": "U9PdMS5C2xsVFwypw4MfHDYd7ssjrFkTbHDich5UHnXbMd2sTogZsKzb739PagQoqXL7QYSWFfaecRkCDs9zVMG",
  "key3": "3gmbqaCUhJhK84jxvWR2wJGkwrfSG2g6neauW2XVUuNp4YW7ucCQafPApAoqUd5aj5DMyDWG1ymr2dnyuePGQVHm",
  "key4": "4aKPLiVzUALKqtNHGhA8x7433XcjZBJKNetCnGtsgc4Gz7JBbQYkWsmYqAvpabNvGnvGxSV98p2wrUYGkET3KL62",
  "key5": "mzKKeWDWxfhNMv3JJerxMQAKx25GxwLRq1dGkFKjpNN5H9YMG81DVaJgrHdKptcxZvgV1EP3HUJvph9JoJsKGDK",
  "key6": "5AGVYMxPJdgwZKE8XRjbgadeR9qZFGaJMFTYaSCfaftBLHbkdAU4fCB6HNL2kMKf7TeTSXfpJ5pvSG14tk4jd7PT",
  "key7": "YUbKvRQphWxFcjsHLrzwYFNLVJmAKc3C9rDytJB2K1noh81QAD9b7GyqivRu3D4uN7DoUzruNvUwp9srGGMuDKZ",
  "key8": "A1SnufJFHRq7tnqUxsLdyHSzjnYqWVtWumT1EDDGupx4u6ykBEZj9i8RaepRw1JLBqGxCLtqsp3fztX7uGeXuL6",
  "key9": "21d2qJzZ62tsG3WbcSqukY9h2epxwiMNT9fFsXzhNzC7TwPRteNU12tmsJfayT3DxxXyzWcMCL7jX9uJs93YEw7K",
  "key10": "KD45bvBAsLZz3CpViF7aztZzuH7ZxJYat2b2LTTQzLp9L1ViJ8EKCi95JoWbGPsSpTZVDNnhkDmttuvH4zV7Y4o",
  "key11": "SSDXG8BvvDDny7tc9TqT5TzV857a7LYUT2h8jwvx4LiQ1Bc827srUcfhRUm4oq1xFP6zCQQc3iitB6j3wsERuKA",
  "key12": "wnphUi42f2ASgrCB4G9eN5QHvCdsegzMc6ZoXtpS6ghzM2ZqW3UfQdYd8iPPsiFB3Vy6BrX4HNiGjbAuSqzsZvQ",
  "key13": "2zatc9hMNNT6bF4NiXiqqoVY9tAuUxB7z5aPC3n7Z2Ra4DURhcZTRgpEnZUJR3a4zqVP6bej2TAJwMeKGCvSykrb",
  "key14": "2rtoTPy7cX2cm2zH4RTP661hN5V9vRc7DLufU9VYfe1caVFgq7LEQuc8jxCquEYrmWjtJfh84WEh8Wn1rhW3zrft",
  "key15": "4ewVqe4Rh9qKzTDzeVP35p1VzkxSVXuqyPgBKMyMyCgVCQr5Y4TiNHrz8H5jfHDS1HLW8ivVhy7tYCjcce5W5CaZ",
  "key16": "2Pi7UQLzvYQQeWBEqUk4TjCAyWG1j7Bym9Ys5kUf7Hot7feehKd1Zg6qcijerPUzPa9cPk2FVWgyE9kSqKx2go6R",
  "key17": "4nsTRR6E9ymqtLzHB1LEGoYb8B3g1MBrpLp34icYNuR426VUSTM8iAK4URcakaURmtMbRtknFvqHzk6zHpj9p1ks",
  "key18": "2ntaZ7zbKcFCKd1kqDcrP22MoFRoN5eba2wiYudxA7qYqzZCswNfeKMJparGCT77dhdeyRhwmVmakf3veZqUztTd",
  "key19": "2V5grBYDmnDoB1bLRxemNgrYTHgB4BJdJm4uxpkoNEziCFhKkiaQBbM8qjKkYEmH6qztxBoJq9QSajbxsTNhaguo",
  "key20": "61JLAP1CATvWkX1e25LJetTRH7USQzcHvgvA8qqi58BYmBonb6UiMDCdpokEbDgzDUZjJa4uX1MfqehnsLZVdrcy",
  "key21": "gksF6Rk9Q58AN29XQhFY6k7ZrSTmf19VjPZeemWoWCregHGoVwoU3tA1YZepeCYWNvm2N535dQ8tE2kY3Cw8XiT",
  "key22": "WSwPDyRNz1q5ff9suZGmyR73Ex6NJqfGUNGZgvh4kayXJp1P4uZAyyXkJNUYJxSDT8Ms6bEg7UbbeRaxULGp8oS",
  "key23": "3XV6ZSuCDDcs5SkEeVkzscAYnujq5PPM1BzG9AvWjNbMPRjTkpMG9BLQi2V28T2ZV5EBdw4GkxNN9PAZeMxz6tvQ",
  "key24": "4CxEnQEtz55fHnhhrgeqadPWnTE49edYn7xLtrthuRvKNZs3Fohc2MTBnK1afody3V84WqDJQBz9NRWZxPmkoUda",
  "key25": "5vvfp4x3E54RWzde41hpdTVGDe5ySNS3boL8466GSFBwMWfAc5CpDxsuofqGkDXYRrbnbzhFmqmrqZ7LvL74AwfB",
  "key26": "5C8h8makSZDuNcc63et9GvJ6EVKc5fWV3VnvWgRP8K5ZxjX3aGq3jGzy5uPRaxMDPd4mkvwSGDGVTGbw6vQSUYZx",
  "key27": "4UHNG4fjH1bstor4FeuoEueRngaSywAtikThdVr3nW4VnSyLTgz7Y1cJwTpiHoqRVzgqCkSiWUduWbrPyRgZ678d",
  "key28": "5T7Kj8UMWF9E8Y1HVPxrXjGLok8L7fa5HQ1GbxrjBpsAAZqUpwFxWb4hQGaL4z8P1ra5GRHbFMozRvRd3fdiJUcT",
  "key29": "57Lm97bYW6oDgmivHbMrJGt7tS8G7SrwoujRJayrxxmrV8YzGQUgRndESt3rk8UdP7rXxjEZWX8aBAcvMRTBfCi",
  "key30": "5WTsM3V3BR5cx9ZZB8CbWR4jCpxFEKLXBJBcXw23JfkJDewUco4fHxjBvszzsw8BUpo489MFUq8DURwC5sC9go94",
  "key31": "5jBTmwcFhQ9uX4v4BfH6Mmaq3dXTnm52NRTxgSMnp69YZ4wt7BLZRSbJL4MohNEWQwJEhMDyKdZcoukFG7JHmNCP",
  "key32": "53uUNGqE7j6GcR2SSfFRYiJLEDXk8QxR7r95ir5n2BAf3wMwrv2zTpH2L2wH73FHgTkkfwiQYb1JVPVKKohjZpnd",
  "key33": "2G4B5Xs4pu6S1y8DUT8YcLgPuXPphBhH17YshDdcCtHJLNh5M6t2EDmadoBookWirM6XaYrHvJzStZQrNoDaK5ch",
  "key34": "2vxmisg2tZcqZB3hxp8hHz7S8DWKvdaXZLfZtkcD4bZh6qwp3327ZFjHC55aqgcskgF8um3a1sTmLUzJi99UFgdo",
  "key35": "p5SNB1AACPkPmX5qPkUsNUk5rDR5Mh18LaPjcufKdtBZQe3a1gSW52bDqZsEETM9myXcv4ASETmTFunzyFtxioT",
  "key36": "4PtSuRn1S6nEdTgf1iDUFUhRNoKxRduzrXY7PqrA3n9TBywuoHT1qYuc7rZL6CinhMiwrjFPACriB77Li8mHCY1H",
  "key37": "o8E9trHMYccQsRL8AXGd8KfG59dsTMURCVnhGJkSCzMECyp4aJBjNxh4Q7oHmvqkN64J9vPPg8rjum3DnqErKtn",
  "key38": "3gStRKMrBQQ7BU69b2Dc1aevK292mnT44irxw6pX9QQp782ex2911BwNnp9rq3kXqUTQLTnEAKpt86YQdrqFyQ5t",
  "key39": "sqaPU7nVLeCvM3U1VCAjC5bgSUpi5C5WcFWKxF5tEt5tEzscBdjmqEHip3vrVVN5ukEpWd61Pwb3Vic4bt5uzuk"
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
