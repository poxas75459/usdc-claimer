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
    "4sgGPJ1uGPiD5nN7GiEGhW1DNCCxvK2KHZ7fxzU3xsUAmFpz8Te2boebSfRNCv3Gn1sEiFT9zSQHYNUXQE3nHGSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9P5MMLtdfMgPChVYRgNVrezAPEzz5CibJjoqrgLndhak2j6g75Dt7je3dWPpEwLuz7vcyaCNunjX7pqcwG7eZQK",
  "key1": "5hXL1ZXbuTGxoVJeq3nnjCREFpGRgfswhh54m5D1k32Vxd8sJLN7wveYxmAeo4kqu843a2PnHzuaHtRGQHN952YH",
  "key2": "2hJvduUz9FqvT7uVDLTDzL3q2W1ARwxjKK1DDC9XouMvrnsK5rj2iPC5ijStEb19Ufgf19VGxTKHB9KWmgUQRKHH",
  "key3": "BUwfvynjPU8ViaQmMNVWURJBoTmxUiNGuft9N296BqpuefwiUu552FVoxZQ85bQ9qkrF6JTRJJ7Yf4jSNnz1SsB",
  "key4": "28DNewakXRgBpzBcPARLJkUF4QHEfPbztatZau6M87J1dTRm2Lu4bat6mLmj4J8psjsGonadpjoNywxAkFAUcmJQ",
  "key5": "3CfJrecMpc2MkQAGrZCiGAMWRfPsPCgQ3S6XZ7cTf4Gc9Msw5y5VZVgECXyy5DCmpBEBCf4x6x4ZfQXLkB5LMuBd",
  "key6": "4vH56P2hup5UW3bAunHpjBTsB7Jf3Xvzg3TcvSFtHCg8dEiZoDbECunDLRnNqHnPEeafDkoBt5MtJDmu9EZ7Gm4j",
  "key7": "jR7otR6GVEhdeo6nQ9mpsZ6hD6Cgctbx65B8HhrcKcXjhStGq2aDr7VPHaJq46N4TQUcVDZVJwAFdDfSjgDYa7Z",
  "key8": "2VziWXNsHos4cPoiwDDZ7maWVeWaLiW7Udu9DUqkswR1RXQLyixLtsPP1Apg3EALcnUo7jAAtksVQe5K7MPpMZMs",
  "key9": "2SY9vuqKkioNnnT8fsqeY9ysq19ouNHBVtfAVRmsgQiBc5ammmbqHciSDbPCZSfPmifQAN2U1dhxPD2pwK3Hpjbs",
  "key10": "3FYwLUDi97RPKpytkNQFSBgtvA3AdfcQpG7ZBhw14fQwSpUckPVcvN5xNBSYthHrXy8iHdXkwLz7ATScq2LM1HZp",
  "key11": "5ZS3UGr7UcCaLPxLf1sN3jG1oh8vBAG1w35XW5iQ6hW24rYQFemVDCKSxvZxUr63KnhbX2Sc6pGckQGSP2s4uB1d",
  "key12": "5KX8rxgLgQMm9zRykA1fsRynWPxFfzPxxh9AsMa8SvavVwwyn8HSqZbzySnisFNxpbNoongzsTQW93vZhJJVeEVw",
  "key13": "4m4T8yiCVc9gw4beAYrLZuKh3R18k52eFXwWiEHB18tUHx5KbU6WyA9rQRKxLHoZyKMGtJSTq2jkXTRXHQD7ALjw",
  "key14": "2bdVGa7bhcHcannrx6vaoB92a7nShHhzagwGYQJ7wDd95uQPPLP9fDXBr2ydsAKKPFCHPfXFnr1J6qsH3mjEEyyd",
  "key15": "5Z26tkSmctmBJxrT4qMRfoFy1wjV398KXLvafyaL8xMTpWxGV2moXiEDTGFjFpiNfxqFyfVxvkSmVP9nBrSKbkc5",
  "key16": "4ebDYaCUKKdZ5yccL2d8AGdcC1Q7zZwqtgtqiD7WppsaZ6fKFuevCGp7BmNTpNvkZHZ5RTuFpJWFrNQd9NWkgyPh",
  "key17": "oKYP1NEJSZvsrRwHtiBv3pA8gqw9KPnc6cxE91WbTb3MTWEhURnBn3WGgLp9kagfDGiPcP8NYXDDJ3eLXFqqBLb",
  "key18": "XowKFR7PtKXeNQHr2vbS75vopjy3BxfbdMVBPXiLCCNTjV1HtSbixYbmR6vFSW6YfsA4MF9wSCgPxKfeJFnTDo1",
  "key19": "5GbpnkZH8dkoe8maQ5pZYmeYmi7KYURGBELJLM9JMA1xumAh2b5Sxy6Cr8v9WTX3TViah8kihCMRZdFs9SjmYRXz",
  "key20": "4RRSCQmU9LgRQkiU67s2Ajbs46u6JqAzCuEedYC8gdsUcubX2kvNrUtBGFA1BiqpTsgBYfTtp6BBM3zEuYY7ZN8Z",
  "key21": "1rv7PXgUQKW5pPHg44KS6HNoeEBYL9D4dj47sA9q4CyDsXmstc6wEuQtmqfvyHN7BBuq9V3hXuUfkzsrcrLjUZQ",
  "key22": "G1PBZajwrt7zm1XYoC5Mwz5WhSpMeRU58XsFGGTtcLUKmUHdBjrK5msYB8YUXnGFskLzBY5NT753dEjhDuWgeZ5",
  "key23": "2TKzUo8uXBAE84vrxQg6UAqwq9g4yZR8c6WPKNwjt7ZQVQHEMnecxyvempwHHBFCszbtvDsDM4iTthqJTRjHBkJL",
  "key24": "2XzsNuJ86No2FBmjokRWhUGdYvsNFZzTars146MEUbKXBihg1oMBP6y4DoDY12kYPHGYthUdew9P9RFfLer9bpQ1",
  "key25": "23iUNCmGvevr9LqY8W5t29pfdZq8p2r6wGNNpLKusYpiDfshdC2yEfLuKnyhF5yLq4NuDgEK4mud1KmNsVRRARWM",
  "key26": "wUJGjHfp4Eg1MSRuaMTmFppE1pJBHH1SU6HqLQu9Ky8cyFC2tNqvtUmTPCdLR6pQynWKadxmuBB4qRovaEMgrDq",
  "key27": "5rZwtyrPEgDzGf2w5Z1jsw48s2r91vvLUwMYPx7GSYCnnUTiE8umyVtH9ptAUzndTksGfGhDcbUqN1MqWi4ex8ZW",
  "key28": "JXy7tM3yRL1EBW7Eea1GEnuMqU437i4y4xNyQwjMSn42ahoKVDTSwC9e5J6iRLiYu6SyGN9iMbbRRJttmCaxKwr",
  "key29": "2Kjz2a9Z9TBNMtWzBg2LawRWKEaHDW9W6UVir1YQ8WYLYbSWX2FBLAtPk3W42VfZb6Wt23c6oa86KeAfcUbjBYUh",
  "key30": "29V2D4FyWtxrwLL5KwknaM1wdBAVSjzsUvGL1ZZbbMZNNrg7TrazkSq1RHPm1YmGDVFY2vYq4D1wijQgEfMxu3co",
  "key31": "5h4qRQpFnK7ZnbJHJSuXAy4XtAU7xPDvRBkvnggeEqrUkx9SbWeQZWgeHxtZJcpxX8Q3uqGaeaD6tanAQatPE1sy",
  "key32": "2hTdKyMnTzv3rsxaJoVY6MmqUW1aa4j7v3us2bLv8C5X5frqKsjXV66LB6LKqfveyYePsT8J5j7caCYWZNrUVPXx",
  "key33": "42ceaY9zPtKYAUXNPHXpMsnRZf9RsdztQ2HLBpSo1K3EhhqDukVqV81xwEcNdHWTXMGMBbMYNBPmvQebEbgKegXP",
  "key34": "muR2sNUyZzZebXX9xgHLA3b9xZEX5sNQRcaL5HbccY7h8BV212er5ACbcj8LFb88Xc1C9eVio8uxQuzMJQBshcW",
  "key35": "3qmFkfX6mfGsvqhP2xt5Htq3aDzRch4pe6o9AoHuyu5TezqFK8wEfGh7rjWwuxoT6KFxkjtqqJGtPZTdonbZibYj",
  "key36": "3i9BUAKSxNGLefBvrJxApG3hN7ne8k9ffQ7osa7ihn25vxt3c8gdyimM3Hkz8MwmXuXMucdFgmxYv42dRwbmEu59",
  "key37": "pG7TgmgKQKXw3fKGyPfohUGRB1UjtjmVMtRrbJdfYNtGeb25Hqfq7GhAEHsHq43ZKGKud9EdJRxatPDXmgzF6H6",
  "key38": "2Gk8PJUS1389YsKhTwvpLHhuvC3hXSSsYyEhDqiE5b987LdNByP1D1QTz62LE4owE2mjMYccNArVJ769dvvJxMno",
  "key39": "5qUgVSGVjKBxWW1Fdnf9s3t6fDdQRUXwvob6jvnNye8ZWRB2G5d9Gto2sLWMXu6ojwrG1sgNGJLqHGUh85jTtfsQ",
  "key40": "5xzmVVy1bixc2f7H9RR89hs1ST73QkBFaP5pX4tophvafToaFqF4o8xVqAPmbQCjU4xa3BQr4L6QLVNkMEZrLS6m"
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
