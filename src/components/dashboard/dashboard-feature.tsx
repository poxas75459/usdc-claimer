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
    "2Z1JYWGhSqZsuu53ibgZ722f3X5rinCWrEBgfBBwvv6Cmb3Az6aiCXAPuX8KB5HB2cr5ykPWwHpTftXt9q42SFLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEF38iJr1WjB4vd4HY5La65nDL83JGgVw16YQ5ET8UMV1VzaBuHEGNnSfFsWAwsUoQgqgVWzKikGEHC2DtLBz1R",
  "key1": "3Q5hQvJS6GFwmJV6J6989YcvmkwKnkdY1sVsMXTDK8C3Vy6xajMxfzeNoecwwnaBHBBbM7nifPmvRGG5NqDNHCrq",
  "key2": "5KxZDDG8D4GjP7FH5eJSVL8BGyGYnyCvaWQzC8eGCfrWjqR47dhay4tVSj58rRe68XvXxiYgaea9YQcjpNgm5DdT",
  "key3": "zM7tfcN2DcqNtEd4tFcjrtG1tT3ULYXb74YenqNU5bPk995xbYzcxtQES6DcMDDLh4SknE47fzuGEhc7ranht5F",
  "key4": "54m1BUJ6pXYTysdxjje93z8DGnVKrZ13xRebZcBLm7SoTLdvhnciYSrnwyWpUMhsaoqFHYUC5UQnMyU1DyJ6mn8q",
  "key5": "331NpxjRGtaCWn7ZDozZoGHnVgDnS2dqupAx261go6Eq3ccAVgiKGfWym1XwLAHWxadwJjy1CjWYRdFTh8B8iWV5",
  "key6": "2M1R3LWy2q33mFVkeWbRYufubkynGY9QkSNNFTtfdz1WR1B6vmj1Rt8zTbJBzGrDMzL9bA5UWxNT3ztH3HcYP63W",
  "key7": "5vrx4kKC6pgpk2GDmG2sPazYcRXFXovv3P1qtkgxvZk5Y29Hrp7h3eYzVX4ACgULTfG9M4zUrme8UHUYpbd5LpJu",
  "key8": "5mDxWEHzY7MkMgfK2ykSeDt9cgHpeSK751r2Z2rLQfX6qxpCwWbR5CRp8SCuwv9VoFyLtip1oMKiQCJSF37ZeDHU",
  "key9": "3Vpc4xMm6d28rtxAbL42SD8cV4KwJWgQuhMWTUdsoxVntYPTkfwebqA35jLCcAb9qi9z71XUrRmG81Q1epvyXagr",
  "key10": "2LjheYz4H5xqix11kFbm8DSTs4z2gmEbnofFs3G68nZ7h2Ah7CnWioGxSPyiLKTJZUYQq2f6ao2gyTGeDTTqS5jT",
  "key11": "53ugcgiwZy8YCA9NzXwPEMw2UedvijBbLs2C4KngmThaJ85YDj2Sh5dGDRdP7Rxz1Z2FpSXfwQLL5daZKHYtFoaR",
  "key12": "dfYZymJnQu7Z1wQAC9iKYfsMgXK8mAcnDmT1JJTXwtQUGHFbAu91Pr7GG77iQCvCPnjmQtynKBKKco4RSTzVG4Y",
  "key13": "3x6mmK8McZccEfPMUNogeGyzY9YN124reb7BvinpW2Aua64hoCiZHff6C1YM5qwPRMNTGB43Vk73ZfQpgof2NjzW",
  "key14": "5jgSe6Uer1bSw6Vij6TwmTWuHviDN155hWEH7q5wjceG1AtFjU9RpRU3xFgJ8kiC72n68yZgj52zxfm2vqLApzn4",
  "key15": "5E976nvjVNb3pEpyMTQERzanDd7YJL2CffaZ1D8ZJFrjd4CuagYCadMwYtMuSmWsuR9opgtaYDQCoeLCjHEXGm9W",
  "key16": "5d17etSdBDGEre2K1U8jyqRFiWT6EbuhrDzeAeiwJBXEeWqXgKY85eefGRTyy8fa4oG6sNyrq8DzJLfiv6qHex3m",
  "key17": "62aUN5zy1bQNRAqbFPQGio9av71AuUCAJP7MuQujJ1K4JvE2v1M312t3bnr8o4ub6TbRkw94U6TixjgQjcMxw5rY",
  "key18": "5aL8skvpRCwKEbTEqg1BbCeZ8FJeBGEzmCkf7hFSs6zniPk6rotBPbfquRnikPgWrZAvFm2RRYBtwWb2kk2xNcAa",
  "key19": "HtcZKMg8YMG1ivDijk2bKfQnSErYYEeWYXAXezcjSxVhEcbHN23yu6WHusAm366fe3whTehJvAHT3Mwjv4ti9nE",
  "key20": "5PLv9UqrW3tEX21KC93knYuZG7njgXDrAaTDi2JftWk2y27GT9cqW32U5nP3or1cVaY1pQyefBK8wQt5Gwjr5oVB",
  "key21": "58V1gqxsCw7WyATsYjP2rFGobjpPMQUPQhXNzbPzfVEy7ZNzFyUUPqGw5YcuVuySJM8NcQfwQxJPQTEqqF2ZAWck",
  "key22": "4t11ubLSPm1uiY8wBjbcHNMXZpHxZd2dbtRRzRDxXCoMzfuBSvnDwydscxsxpQFx8LZnEiYJ6XB6rZK9BURz2uy1",
  "key23": "2zc5P9brMh7qubEVsmVUBvWdQfvitQbxjcJqsdqYSeD96EdXuN1aP7vV8iPfcYVn73cCqEwjMjiHBWnPJZEyGFg2",
  "key24": "4U8vzh6G32YdX1RDJiM1KjGERqmveuFdpp5DF4kPU1WaxeZ9vC968eGFdKip29cNkkNJ2PZ13b4ub42VqQvV5oRY",
  "key25": "5Q3LBEZaC7Yr4MAfxk4idrNVUi26Qpx4u8N8tUtejc9YEe1EAESor8CL2XYK6uxDjDoWQRuwxtEozxJ4CuUjYCCo",
  "key26": "5vUYXcJ8bE4KNwKxHjXu9rzg1t6gRf2xndn1LH3WmmJ9WLymzdY3BE1hMQRmzNGShnCQsYNyuLfw4ds3rohHd1m2",
  "key27": "2ds7dDNhWVKigGsZvk6Egmy7A2Pp91TpcnKbTBvdof2eJF2YfKU6mUTrRFPdQGCD9sTeFgo54EkNeQW8wL28LMCN",
  "key28": "5ENYNRM2m6c9yBHQF2wn4CsdZJbQaH7XwTPErY2GcggAJqN8i4cTjvQbA8sHETvSZnTfy4Fp7G3qaLFoTtMEesx3",
  "key29": "2fZA1XACTV9xea3Gkxg1TPPu1xuujNopeVx52L3rNSNbNKT9XMygBvwJm24YCotcNbx9ct1ez1QmWdP8eLZMLXY3",
  "key30": "5hSuZejDwxM9fuh4soPjmuYSh5WB6gKRDQfw4vLnsVKvHzqA8ssstecPFrQ89jhsFPoi4XpXBstPU44ZHhJoPfPt",
  "key31": "41uUYvEtAzuxox95YbgPbSFMoRMuf9ytYwK1AY4MmzwPw6XvfHsX3dJwiCLMhm2DFucaxXQaYpN7zV8MKsWYDxnX",
  "key32": "3U8dYa2ZFttFcQzeZ4zSgWRsYFkbTaGzFM8jkmgtACxu12nNugrbcfZedWZEkrmXENjQDhbPqQhSGmCwskUxjGxM",
  "key33": "3m6jxapLRhCmwdHbknbyMo4jgB31cnqrezhkfWL2gACGd4zaQuzZod6d8BfMpohPeCiV9qegexD2Zyv7FgZa4oHT",
  "key34": "3J1HsxjERzmKACNdTB9dtnKhbA1y6owX5vJN7AUtAqfUuX3vCZoCsWckrcoPFo1h6EfoJ5GNDr5Y63zSrS1jrQiR",
  "key35": "3eZFGnwwEYJ7SYb5btGt9HzNMDd2xjhLwvMRaNcT5dJKYR8oqqHXp4X8zadi9GZHJwwUdcqfBBtxfy6QmxrJyMKb",
  "key36": "3NFEb1rAfjvf1w6j8MvcYJnuSj1tujtJf1BYnWDXtSjxnKb828F44vEZmPRDKJuKbKgcsLV6HvY5CoRBowpoyJBJ",
  "key37": "43q2NckF429gbv5xSsD3ZMaLWXQ3gD5fHwufHqBYWy4QqxK7m9EDoi6XkTXNSyaDNV9wRWQtf1Tr4gxWULbYB6xh",
  "key38": "5XvvwCpYm1sZ6UitxUjxdN3yvQHSzAqyR5XQpA15h8YnezMRckTdXxgdJqHyRAY7iL6vr77xHVL5SUvBrZm3gnRL"
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
