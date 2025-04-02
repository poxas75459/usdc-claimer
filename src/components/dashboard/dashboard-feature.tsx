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
    "4TRKpdL67TzYjECzPodfxEGJp4gVS8PUYdGfiBCpfKMUocYLThMKpzNJQSAqR4sJYAcgZtGVcQoLKE6NzyRatyVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epK3pZVHuqfZ7petRbDH6bxDtYTS1ptYeBHATafay7S2fTW2vWrXffQEwkwbEqMWyGaFcSna9KeiaiYq9d9vkX",
  "key1": "3xQLpqiwkRsd3Pj1vyWMQ6y2Z5xX4zCgXzGq4Jp9HuRKZ4sKCEcwvqWBMCZ1SrdeUUw7n1yeJ32tDM4qdKQ8ba1t",
  "key2": "5u8xEF1ZHTMYsb2XZfws1Gx3p6iNGj6rLWTKhHFq9pb11LueApu4kJ5eh8Brang8Tj5c7HEYQk4LoKjxxDPXJFHs",
  "key3": "4WQYdmMCqBFNFNbPaHU3q1BCF8RcdHuqgGn7ZvngHbdjb8RZyeG9tJoWgAUQzbsgyUD5r542rjLmKtJPnNhFP8dE",
  "key4": "3PYKFmSBCtLcfB1826f5PKcMzBaY8Yzmh3fbhSvDHJ7dsxEp4aw3EcmdMVg7wzhCFSfwfDgtmuVVyRWmxkTV4AAB",
  "key5": "3SVrqAWsRZkkB9FpDMEmb3osowAU7gubnd6fguaxoDuR9z4iG6UrgBykRAch6yBnXVW5tbQc9TmBPpChkdKhsML1",
  "key6": "52wM8RobLVKUgH4mB69Uw4oZZre7Up3Awesk4LRPN1GEBX6teRozBEi33pp82Q85WmdBMgzjMSmCGU1ZgvGbUSFF",
  "key7": "4AVWKHjp2GPubjPN9SUwM4TypdgVQD1REmkyrkM4N19rzKF6eGCw5qriyf9ivwSnfs1pGjjK5wahX3hqdgp7t9Tf",
  "key8": "3RkEbzjxiWLR7YSsfCRXqaC5jPxxDd5YNz5Jqc3HGLQhUr1JpvGVZyGteFTNtyq61Hfz2NjqNxyT5WfkxNZJEK4V",
  "key9": "2XGWZQf1Vfj5SnqwoiHzMLM4kUjEX3SXMveRs2VLmAkVuysH3MuCFMe3gU9KM2ETjfnm1LTS2Rj1fLd1ReZpBgMb",
  "key10": "4JMobPz8kkHCJdXA6NYoUvuj1QnwSzi81FbkUPnB65TWmXLHEXVfehzsPPnfwA3kyBFsPq4Z1YPW8hRPwyFxXuEA",
  "key11": "5EbThHP9Seoqvadwo6eraiznR1wSgjfwbTaysfqRJb4fXP11xHfxUsbFd9ccWd8zrLhgTrm2ACg5D7JhEN8W2Nkc",
  "key12": "669Xzp8dyemDfYrug4QBSag4uqBzaQEK5E2ge732cnWw2Hf5ydLBrpwkWXUeL6Nz61cnZCzHzuXnHBiWffqJc212",
  "key13": "4DYph94XJTGC3Joq2uy4EH9jKv3yffJ6WhaGTtvAcFd1FQkj9D8bYV9FJyHpxthR5zRFdRsuV5VnmqmxrDuiKWob",
  "key14": "7TbhxCd8UCpxYjG8XBcoZ2wRV89GUY5uE99edwcC4q1wPKrp9RUGa4nwYGwvYHRcKstbFiBAKotB7ouV27Qwxcc",
  "key15": "64LMyKuTKVfQhRh2rYmUgq7rariay8C3dYLZ2avjfYGLgXSE2EwkBdvvWZjm3PzBFY4g8aHaQUX4uosUrii7uWBM",
  "key16": "46gyNwp9CSHnpVtVWLoxDvBSNnd9msX68tpPxV4r6gSKcNyiLxn91D9UkVL36qDbRGNmHNJM2s63XR2qvqGWr94r",
  "key17": "2F3wRQpGm2Mh5CXS8Rdjv1S21jTJVNVfZWU4QnReiCr2kjdM5xyFHoMQgP9dY1gTF3gQ2vGUUyMfKR3SnNBubtkp",
  "key18": "2gxdVsidhiZmAkdikZxDJ79VN3caaxRGWfHgjsDf6kHBByLsZj7xj44sK9wNW2sdCEeohVrBoRxy9q9ejWcZCpWK",
  "key19": "3uaxM2aJLihM7PjTCnwBo4xcoJe5mkVgPb6DPJKtkSHiRdwyGXdzSgqoQ7kpdZg6kzKdog4vm6YgPqBEQs96zo4t",
  "key20": "2bXyaGzdgRJhXCrFi6mgTxPQ5ZWJaEmvSgmXDvwW7PZkzYNMov7AM8G9MsFaBcgpCdJotWcTbFcf33JkLnTGERvE",
  "key21": "5JhtWx2fDqmksMLGXTmRaC1jwmnRrVNj2v1xJfZNCzH4iZddQE4FaEaqQfGdT65NHpZuSXwvg7hMRt3eZEbLQLVC",
  "key22": "rbmSyR4YeqyChk9wyCiE8sziBgpQXYaMS2SuG9EynAB8cnakwr8DG87gsj8iM5KrvRXw7VyqVzUZf7PSJbJpFbA",
  "key23": "24H5Q99FGdURmzw39Jtdc7YsNNcostYFmQ4tXsuB4Nz6T8x77535PWdMAE4M7ZwZyPTjtp24L56HbCgwg5eh3YZU",
  "key24": "5fLViiggxU5Y78BfnuThfB3y2z6or4v1TBgjweYiPSWrNCHEtPErXTtQeRa6rh5Ni7LApkTg9TjNRqTKGqjPqGyu",
  "key25": "45JJgK9wJHE91xyN6K9MhHhqRRhvvdNNbpjKnjinP6hG7FomJC8uC7AbRkMqYedYvZ8dfw3oiugDGsyCDqMxfohq",
  "key26": "5roe5iJa9JaKvJaHRY3UQHHmh1waVyfeH8U4zRSMzNzv6stkvXAoMyZXjhpYQy1DX2MBuZ5v2pZ1AZTjbLZ3GyuX",
  "key27": "roybDLDPbLRtiiQpeNfpp4WETjDovnvbgfPULEdYuaA8XFc336VA84BkbA2qdccisfLJVA4UVLmMzMDeQjNdYbb",
  "key28": "3798APv51jpixfWinratQPkzLhLjyFE5SQTSegcPKRQrFYqbzynp5Pk1iuCKnB9iRD3RqWQdQcXxRyHWsdQM8Eyr",
  "key29": "4nfnnxWTrUuzAWgLPysrhWfgRUtvdA56RBADoAt68p3CyPCcvHtuopSivqfVJkhdx9grbD5qPJzXf6Ma6GocnvYN",
  "key30": "5uK2T1UECshqYDsbQPfCy2B1A82MoEbrydou4vUWBH1pmRraYvqKJUwACakuk8nx8gFGJAQABua1vWpYCxBzxUPj",
  "key31": "5KCwju6L9n3bk7VGFupnpTBpNZhjAvCuuMTZgLrb5BjkrsgcQ9Guoef8DTni5PMyF6EKS8SujwvaEJi6vJd8hrg6",
  "key32": "5QCcQUNRVxRAotcvLc7oSDhTGZxS911oAoJShB8iSxmsnCiCS7uSZziAmdgWdBbkLTQmgbe8MT19ZTPSceEfunzE",
  "key33": "3u7bHtFVf8YkxqjffQvAqJdHfGbbqmyUoXaTtuiBfL6fQRDbrG5UYdTcBvuyDGVspBG1F2JF2B9L7nRQ8aehYFEo",
  "key34": "2TeDpcannUeG3JNcNFgSB2C1ZXbLkApw17tGKuKgMfBUBJ9fzELrDkb8Lc6DH73Bz4R8G2fq1ycXsvTQm9TVpgyS",
  "key35": "4cKmXLaD4xsri8GP7wVyo5SK4THJNP59HxvBqBXQgozDaoqGdo7HUBsHbwNerLKrpKyf4CEoEGb5BN9PQSXzESJ2",
  "key36": "4nQg3EntKGjGF1gs26ZDBXKcaPAqJWBGukEV6djoGS7cJmpGkh3B7TkfAvwAq7F71s1sk68GepzvzHgahxBnrZAK",
  "key37": "76GUJyiFsKZXXPsnU73BF8B82N5NWT6FjwUAwE635kFYV8KCwzX1fZNqQERzj37icgDuh5APwcP6PU9kbPezQqd",
  "key38": "4BLZWg8iesxbkuXPHbcEidpN8bGkT4oPNXGTGL2BdoDcWXYenGUAR4Ceqt6QB4cPug9C7hEmvg9anJkzW7rwpyyP",
  "key39": "2kf1wNJYnPBrDitiTj1rWS9DZEWiGFkVxtztGmYxuCpycbAzJ1kAFHsxV8NfCPwQPmkDFM8kJAiEiKXFNiZ2sgQi",
  "key40": "otB9aTcyNmGioSYBJPfhZR9DcFdZfnndfoA8rZKyqe76AWorDr7ZNT3oanzmWJ7dCb6PHX9rVC9gx9uWc2monZy",
  "key41": "2fbmd1Wxf2mjUNkmSZojkG8EMo8CeJGr2pCqK4qnFTY1QGjRRkD3N7WQtwSTitgX9UWxAgqLa6LWxVf2GHi6NPws",
  "key42": "3v9oJisHWhjHingwNQWsU4dVU7NQuGJPNjw8mG6i3PKJga5Szb7RJx6CPmCouCC3Fwp9omcjdHArKABzTrXFXmCS",
  "key43": "2cUmb3wHkn4sBXqyVEymcEyHj2RnGxoJ5NSWCMNBKJEF9eYXrSnrqKneZS4kXKSMcgb5A1B7Lo8z82C4ecsHuZTx",
  "key44": "4GDhyQanyFyFn2ZyoTfdT1h2zKe3R2TYASEqKS4QrMXowFKUL6TaWX9vR6P2gK57JSRZhTDqdgBSWm79pS52259y",
  "key45": "2ZGw7wSvWBkpKxwgRXBj6Dw1ihXr1y1DZVT4887piageUKnzbVehQnTuwVCobWHeqApFqDs1aWrVvTnekXq4qzJh",
  "key46": "28gFAC9H99ZqD4i8JuzXXsY7a8ZJD9mJUj5CAMoVNSayUbVoMYKrv9fk1NytfHV1t8ih9RhAfuUnpPHjxWmQZU5c",
  "key47": "34TC5TDHfKUdcpmELs6kRJfjmb8Vu2cfWmCBiU3irNXG4iAM2PZVRecLQB43JGxF3X1LosS65PzjeevuzczykcF7",
  "key48": "5Q4ZKCwt3yDhZB9xjgEUci2hvqCfywguCms1SWYXJ1Py1yQxo9g4P426P1hUsPDVKr4EWcbjyEFNTSwMRsoev6dq",
  "key49": "259ojYkBivemp3tVCmdRFqXARPMj3munsH9BA7E1JBLeCKC1AjV8D9GjgxpGauYWdEjtSK5Gpr4MyGbq8nny4Ukb"
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
