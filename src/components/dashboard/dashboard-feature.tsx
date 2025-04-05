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
    "dotqRQnp2AANBm535dJwmF4fTNM6uUrvR4hz9DvcHN31DStEQTpT4AyKBnUfjbPzV8DjJZECPyT97Anazt1GteJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZCV1uUwYw8Q2Knwmj8CEhUMvJdJrrV12JpAGhGZ8NCb37Gy9tqxNczsnSUsRCmbZuXvzNMi4GDavoYtZFjdCFxF",
  "key1": "fiAxjbLJT3VxRE5WxithfRMbUF7gRVucerFPsMhssLi48AQ7EASV5gek7hbY62roByhnCdvZrXZRtjRJ4yHvpeG",
  "key2": "5mauMd8wdvJsGZPpN2YnU8Px7BBCjZYfocNoev2F6z5gw6f3Yq4axdBKUeYkuyg4WCcQLXm9rswBGvm14wtheA9q",
  "key3": "2oBZ2bVP7WijaeTTjKfq84oZbGYfQwPQfYLjH5mockrNPTT4JJMfdttQvYeRTfK3Qvh8hdDmPR3HVYGJL11bB4t6",
  "key4": "61yjTqRw2XZdgWD66tweiCQBV81xkSzA1fueGssTMaawHbTRNxhC6fUDwocemYa9K9ThmdJ2Q4z15F8kk2RMQbdp",
  "key5": "55hHNVo1cHWFmgVtzzXts3FB2go5odxJNstJu3E8AJfdxAjkjU5vLZKbEz3vXHa29BwJyNNuC8sqe1nWHM1vjnR7",
  "key6": "4dXN7MnpTtZbHhyjcvrrtFFmg5gKCnQ9BWhgX5hvXsSVoDm1AZF1xvPa9Hs7jpVxTVVSR2RbdoVf8QYcani8ziPW",
  "key7": "5qs4Y81PVFrs9CFiin6TfSmdpCibhtyqJ13o3GtS61niorq8kjXJuW3aikPTDnixMuBSN9hFBE5b1ufgmpKYX3iY",
  "key8": "672M6g2xRKqLUsAeJ55g16r6bYzFeiVZuVhi4uJbc5SwVTca6m64QJjojEKjmxX3xDSHNRLLWgH5ZpVddtUicJdY",
  "key9": "4kmBZ6L14s6sewWZXHBiHbZd1bTP6u9bTSV7TuRpSKPxLs8KBzrNy5Yg55sq8ApLPNQRU2ZiexbSHj5TJLDaNjhU",
  "key10": "aFko7ZreioQ5HNkveKsy5ZKafDMcUedHtjD7ABSn1XmKFBREUC4PFT2tsGWK3RcV3Qi4sSgmyJrewrgdAihK1vj",
  "key11": "2w62fn5efvA51MyDDdxiXgs39HZa44H1KfrgPkq4TjwG8KF3MvH8as2r6TfL4WpN5DnSgzCdLThHCiHaDknzLbXZ",
  "key12": "3QBpWrpBcspMWqnte45b8iXeKyVrZK7R5ms7xvt6WeBFcMEf1c8rpzewxsJBWhS8cArdHByFJYbkM2aJh6uNoXTV",
  "key13": "4XHe71kSrzw15dcHNFjk7VJDm8B83vwM4Kha8MGjTygoXibK6KZMCJW9WXgfxD8wnzvzye3mzuAzmo1WBp7ELm6h",
  "key14": "45ypTBjdz1ijj4gmgYhvkD3yUi3gSdg1ao115p3YiXduYA3h3VbPjE4So8Euqtdjtu1QgowaMQdnEJUSsEnrCoz5",
  "key15": "4zocQHLknBh4gd1JSRAypsnoaJ1QLNZv4UkU7ZYXbTbfx6EShBs49aa2RyNA7feKmgbvgJxH12SiT7EAfnKwGjt7",
  "key16": "38ZnDSSnWEtNm7bvhnDo7LMtKquDfHj59fG7zwE3rD1nSNzTs2tDYs6miXWfFVp6qzNc1pUthMmza5cX9xHLmD29",
  "key17": "5LagyKodJF93FVnpVF5WdE1FvL9Ko4mRaaFcc8h4jC37eRK1N2brQnKH4Z8dMT63rZysSMx76RMWuXTLJVqR5HiU",
  "key18": "39AABuQfSWubD3U7w4VQVKWGdEdyt4EYNd1ok4cW3CKUg2xLSYBRnC4bKLmu5EgXUbNddLRrjeMcYys6TKtL12GY",
  "key19": "5wU5vigWXUpK4TDSJcTUWkfJDKihRJSyB6bvXUDinzxpQusBvHxykBneqsSL26ujsdy5qyx84yeavKwF5c6yM5DM",
  "key20": "2X1xWziJ8d4z859QUMexHN5fyR8aYS5oXV5ckU5rWg4wsrHGUb6oberj6mrDg3nzYoGaxSfGzw35r5PUCHYJKLpw",
  "key21": "4uQasFjY5EabyexmoMkoUYJrtn51qiZ5a4XTqdhcVce8YFJ4T31F2JRqTE1qodhsqz4KtHtQaiuDoUTtPDFjTjwY",
  "key22": "4ngS2J54vL5KnyDkksHRXxfMfpnENo3fh58jipr7PhXGogyKHf4K3ZzqPYDgMn4o823x2sdeqnH9Svq3crf7moKC",
  "key23": "s4pjELs7VX1syiueWXrEaSrE3MokX4CWR2Divv6QUMvzLvQD5LqGxSDjuHYaqmcyg72PGWC2k6sbE2riySY1jS9",
  "key24": "665jPQNRofZtQJGJxDhMr1cFHy5rH5TuvGFa3R2SyCN9ZR327XnCLVuShmjsjqVUzkqtmhzfttBysnArjV2zpoXp",
  "key25": "4gZaZsxFdKhZy9g32unxgQt4TeMyR3iYGoexciNVZVuomWRTNXtsPxMrkaReuQQosTwrUAgqDztP5fs8QZ4TM2hN",
  "key26": "4ZCNdHiUnym5C3Sb4i4mxZRRy7XMR95y12guWCLFZgZwBvUL8wWyTZnibahH3G9ayEhRHC4MfkU4aSG4poiUZjw2",
  "key27": "61uMDG1wYzqPVK9oiEa84U4EdnqeBe9LRaAe14tW8ZwVUr7EhppjxxxcLLtc5NVpA5M31GVULf3gEh7py68hvhFk",
  "key28": "5HVJxqhrycU8LL8QLcPWGGcVxAJ6kxmJXDUeKW9kLw582JChP3eXo3RnN19GKXegVceCQ4ndQ8BZrqXNNbzwM52X",
  "key29": "4x49PGAUC2CtZyZ19EBm3nA2Gyb5UyL4rEFAUWiRyTc2URZSdcb27xMW3Yo4udNhoH61i7UznUFoVsqTXwTAPuG",
  "key30": "4ixyf2EoVsG8LAqoX8yGXZF74nYkbdzJFLQEw9h8T2W8AgBFkRQAYGTZVsbn5N5LNqJXMcCARVDw3Ym8M3kT2hZ9",
  "key31": "imteXD1hv9LdNr2i8snduHubHAD8jqZbtBaN8Uh4GZK9KpCNnwAnBDEviMZtv1JFATnzYWEcRmHop7e3uu8NVvf",
  "key32": "4WbEiVSnNpH8gk2KY382Z6NNpWUodVUfCRmj1cdHvuPi2xXQe8TyS6dxMoE5W4wxCdeV24Zps6AaqyDbkspv1hQv",
  "key33": "mQGHHH7hrBMiHM7ZPWvnkFfzuzXh1Qj8BPTMdUdLQ8kNquES6c76ogSu6sHrK2CwA8g9EVgw1K5jn7HKHtZN4cX",
  "key34": "z7CgYnK7mj3ThKdFcPLZvH3i2Y81K4FkErtioVtWMEfyS1VNx2XZYgY9BgiUW9DuSgGWSJR4JdDqaYdXw9p58qS",
  "key35": "4E4kGDJtkeFDZRy112d9YswTSjco35GqrBQbUabWYWzPLkjH1hy632kbRPNAEY7d4a7HUrxdavVVdeFqjG2jfn6D",
  "key36": "597QYYKYYQB57xCe1yMMxqtRSi6qZZ6V83NK52MknD7wh6ibT3ePAXVgg1sg1uAAu2WUq4yjssynV6bW3EpZ9UBG",
  "key37": "2Pmb4vwEXjpPJ8xcjixdxuvEHbsmruvN28Va3dfXxB9rE4PJBspC4k9sCgcRbB4EXjiLTiZCojF7mL5RQRzvvqVC",
  "key38": "3NSnh1joibYXcGFKZx4WRT8CrU4Zdezmj2hoU8YbAfTWq9ddVBZAxBrdprYQFuqbPktfiHxoVTCtemTyr59J8BZy",
  "key39": "sW15EQmUFHPk5tDq1xQhp5FcrhKMTVUU4x1BRdqFLg69HwTmPwh6HtkZMkh4xphSBJoPA89AkMWESWFEp1JgrxN",
  "key40": "3xRsoLASf7hGvy6DVoqrTHmxM5yEp266hmT1xBNWFG6XAkLT88q7udEcUMAkgjzN2sDeF5eG3FpCw77mvqLv3Aup",
  "key41": "4BFxtGLxGxpynxVFGJCXddnzCBGKVhhostsYWqcnw4BCVar1NpqScdH65RvLxrMR3oLGEnfGwvvrhApVrATsEmCg",
  "key42": "v4AvudzTHcSvstttfiDYpLf6FpYGiszmoihErmuhBwHNXzUTQxsCJ8wztVS7J7tzQAdYddzAZx6uWjquUjuXkVz",
  "key43": "49giFftEYwJqwLPDZb4iQcxaNgXriqBXJpMkQfT5Weiqt7BAt8Mnrdc1oHfM4cGigtAAwP1Jsa2EFuZgpSg8svv1",
  "key44": "4FSDiWwKyE3BMUCGr8fifMLJ4PbDwBkqmi9WnSj89o99kZ6WrCwGipSn3pyJnrciPR1bUWP1FQogGBbHMaKyvZNQ",
  "key45": "5F6Mv2pgF26NRTAyDTwcs6qhavW4YQGLPyubJDLEnY8mkTws9uv4e4LjVcEEfiaDQY5qZ8tS4uS9CY72yb21GmHh"
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
