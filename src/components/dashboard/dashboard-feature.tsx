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
    "4jR1T6PMusrjmsy7gzu1jK9TNzHfZVUMvxJwR1o4RdkaK6YcpmoDzmmJ1qNNZBSxprhxa5NNNYD6UnUfqgYJwZme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ritqapgwSPxSWiBpAPeFiWxtPCDYWjrngEALrLeVCPj24m13PjuMDML8phD7StZtYpY9oroAbZqsBjuCW6PBU3k",
  "key1": "4ZAEp3iLDrqyRiM7VqWDEvEMTKzMTmNMt3E9NQSyvpm9SCs1SKE6uPbW4iHg2ujjWuo7CAdTvb1mnStwTzuySz9Y",
  "key2": "4RRaZV7cmuVxwLjnd8g1kY9nKmAJcvpehb214LkRwjF8WN7wv79u4sK8gUVVYYLzMStoMKjBZ9AENYr2XyKMpM8T",
  "key3": "4eHFwBcmbsgB8ueyjj2pGisGDYtCUY6o2nfafebGxF7LhAnvKqgauovg1YCyq2p8mcyG49hyxBCTJyZxKERgVpxT",
  "key4": "2sjT6ApwHcU85G6rGHPPT1Cjo2GbAD6uKk5Q1VzJ79aiXNbNCdsHA2hVD1Kdg1CgTZCBt1vTJ4G2J1dkz7aYY69h",
  "key5": "2yTS9irKsJVoCyapvrBw2gssaRj2W6YMeXi98kMmbNxnx8ch7ouJqufFHkwh1h5eDtRyJcxNUHUDtWeZkc54hpD3",
  "key6": "3DSdpercHh2huGKJd7PkQ4N8RYqEX9soF31JWUqLtzya8DMyYCHHAPZGBVjwniCTom6ovGLJzRuiBoNrTXEuu3x8",
  "key7": "3sHvkWCAScAd46aTZ4vasRyMTo2KrTHfJ7oCzSsqDpebzkNm5NSrVAaUHfSGbF58VDC3LP7U6KhTiHtNUvAwDHbm",
  "key8": "Wd7XB6CZw1pFJzwNmeASke2MDRvdvV9bdBaT56uY3bKTFySSyqAZHsjLAk2gb6YN3Nh7ymA3tPSZEXZG1ujsQcp",
  "key9": "igkBpsUWXcSGxZUiEJ9GYLcYvQHYUC7qqcTnx6xPohqsnNAUuhhLT8NauMC3yraAPrC9xuHgaTLem2TKyUpS38r",
  "key10": "4pGXib9Ae2rkHCV1PfacbLdzei6A532NNTsHWsRVpmY4Q5VxT2ZbKz97HC68jwzKVW99smEQex4Sq7PqSuyiFxZ4",
  "key11": "5C4dLfj5L1mGRcYFPLDjFvH4EVL1VwpTBXKGo3EsZotKvz8RorJ1GvyYczcTch5BK4sa5tQqJM1Yut6WARy5m9se",
  "key12": "52u7BQ8ipdExywjRDXiioXhps5pA2mmhxvhV2qz3FTXaVf5s6yBGER5JmkNvRzG7s54dBggRyZ5QL9zCkoSYvT5V",
  "key13": "3YLokQ4QyPk44LrwTy9M8nJdqzPRaL6ffcb1QbR24HsczTwpdSVyhExoUU4L37ZWhxqLV5WejFvHo8L5U9BV66oY",
  "key14": "iEZ7QXYuo6k2r6qHFKV6Ro4YSoPuokYUJFmTsJU5h232r3BQbs3RNkHc9XT7saYmrbzA63tZtx9wj9yzGScshnN",
  "key15": "2V9ec1K8Ey7jmpzsPb6kBorcu9RoGXDNVvFYQhJAhvW4boCVNUDNTMwarZzSBeYgVpDc5a4kZwvBpJm4yw4gBgVp",
  "key16": "5kWQq5fvkGAFLrKBQHj6tBzFWjquGG5L9VyEhfzH72kzyXewLjTxREfPmovdS28wSfCUtRUn2WmoGF8myXfGahX3",
  "key17": "45RrmRazQWoDnHwbQ1z451ybZMDZEA8hzvw9X2Zpb57iMHsANjUdLbhg5oouZwi2X3uxFKAv3ygcmGUPp3DXyGvU",
  "key18": "3pb2nP1fpV9JvHs5PenZw1ykaPP8cxPryhLNRbaJNCJjq1DhuiZePWMQewfcoi9AawpAyWdB4nepCbqqJXSFaJvP",
  "key19": "3q9ZSX9LXTQQo5dRzEvzi7xLR2KY2C2451tsD52s25tgY6R4eqe8sUy4oa3d82VDLoo8JVrJEuTUk3CCNHwEKH4b",
  "key20": "63pwj5Ym3Kw8jreVNZuBVY6cZ5HJGAnnYykJFzcJ54ZsoKyVjLyBrRvJpY3HNxbG364onri4XMwgYDzrwoB9Nkvo",
  "key21": "2hhTHhY1Q1paXLRLAutECqJbiYXvBMtz6PtLQx1tEtFJGNsakTNAWanbeSrQ4eRrHjUhM1Zdj3QKLaW35s2kYgkn",
  "key22": "2GzmHcNzZ8myQUo2A7VvdBEEfPS2EYzCfZDjZ86y14jEBWryirKhLv1skuTCWtbKrtoURtx1HbHtB95TqRZntJNG",
  "key23": "4Wg83xG5zWJEMguDLUXMG8pucPDrP9GeTW7WYWDBpeWktuVHViePAcf4xj5uu8KqaLvAzqb3vizkcPioJvbH9hat",
  "key24": "2HJmT3aHknMCZcfCzMAWNgwGEyji3VSFQSG7fkXumGRsqRw1QNu967kYeu53wZxiYXWc72qPawU5zEXaxVHrgnhF",
  "key25": "3rvKzsuBhUHSTGY8bg7BshSSDKUrAvdsuKRAv4VurrK2ZcBzjJ9JaMjid4WJusbA5sk6nmkPvS1TQL5XqJZoLWa8"
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
