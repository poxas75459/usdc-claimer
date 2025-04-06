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
    "5ZTw6tjvw7iiW7ZeqqgWHhLsd3UXqyXnB4uf31bxzAw6aWUiTo18GYkDPrQgqWFbmVUnTCwABE337TBBhUak8Rep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y26j99s8wwRP6ULarviuFAaNo1BveqceTyZDMz7wNML7F1pHhCMCVV9bbNJLmof7RVwrzkoqE8AxNZCCZq84AHR",
  "key1": "3iK3y5uQBD1kq62Me69PELgCtmgngEm7dDxtggzrLpcGQ4diUKb86iXCz1vWnBmnjKu3855eHQJuarAJGjaVxQHL",
  "key2": "3EWRhUTCbwpQXFoXLqSCGsPPdkJjuWZvD1TG8vWqzyuragoZbEXwA62kEvbEHjRFP1DCxQGWL79Whf9XN9pKTdXs",
  "key3": "36MwZH8kUNNv8ferB12xwN7gd1tzXjZjixe7ZizrvoPJTYCa3iitNcUxYoF8FzNi1XxoNZpSWYaPCQHmbz6kJrXt",
  "key4": "29jfX14DQAaWAJ6ddSv3W6WqJzvbx1USEehwosZWL8vUMEAiqdCzYKetbVWr4SLdYLJoTAGbmthYJ6azYtLmQhqA",
  "key5": "3cbGbFmx9pwbeHENRV2hz1yREGFbXp7tC2vkLfttykmoJwrW3g9MC1w8vgephVYmmESRHLziAomMMPuLSbZqhPqp",
  "key6": "37wYJ9rqghXKq1RGQG3pMpq8tJqECrjVVrUsQjncF83EjkRQcPoWk3bgAh4wmF1N7o7JP3BS52W3yK6xtogE63NW",
  "key7": "5Lr7XFPD4aLi9fNeaokcecVYKo3VwNBUtgmjKbbbMPaLMR4B71aEoT17dPrBn6Cvt12UgtUZ9Ebpx3dhnu8oeYm8",
  "key8": "3pMUguj4mbhM9cF1J9DLexFSWpgBLQcsKzBcmEiCo9NfjCq2dDDLPpuGHdUgnrnY5n5HYT2DuwgjYWWeBvzj7qfj",
  "key9": "64x4VthHMiNHq7jWZrvoEnQSv3KJXdKTH9vhz5QiNL6NiMpkxN6g8dbmRFc5Yj7Xd2hZ72Bv9voDLrnNSKAmSbUk",
  "key10": "4nFXrhxSmb4eLnL1ZxcQMWBBGZGqPBbXxSSwBPSzeTq5U1FcATcA58yw9eYF9ASq8an2fdjUASx9QUbLBZkjLuKC",
  "key11": "4doSWhbjA1hsN8D3bLPz2nhCL5FZYmFxGht6wPTBK2chqUPXcKsUBpuWcAJSvojVfBciGVd6aF3dVAS8NiL6h1Uk",
  "key12": "4HxdG7cWnb3HENxTszHUTA7pgCzSjDr63xAzfYdxVtkTVVQZx5UnxaZcRe2yexP17je648ZSc4vB3WaZwNWyH6Kd",
  "key13": "4MLZpd2RhPbfitB4E3YKH2orZXdcxFzEVT2XSDidh7QWxw34ZWEg4VrEiYg8WamVdbZv61AY25T2UkKMDSkGfoUW",
  "key14": "WaRf2zqYsU3GyVSoh6NCeAq2AhSPkRZP8rd48vGbpUWPSxhcYPLtvyBBYZpS3gtas7Ua5ZAcsJNpsXQLsL9BPhP",
  "key15": "5rCswAHcjgS2Kmh6Fc3Cij3dSvmWnfamwCYCFZiE9yiCUDJivL3BekHmTX1SXTEKMVYYuvmQ5VteycU3CurTCkqk",
  "key16": "3c1A9Hxr6Zb2zxnyjvAHssxbrfWEGauHdy2BfzeadPHkxHCQ2RBfpT9GBg8fxKozioXKn2f6v1e7UTD1kQ7yXvBV",
  "key17": "4Mjh2qeEwNiQQFgXCde5KeXWL4EqKz7ZxiuRCbdjuiyQJq6tVNELewjkVs4JFw4vPw2RYLwZY3cbaiWf4zBzGGHp",
  "key18": "8D9gZPyQV3TRYTfeHzbnLQCEWfdXzwaXJxZMFQquuDGsXrdVB1R6Mxa3YU2sP68WVrNJdgL8C7NC1wN4SYYD6VZ",
  "key19": "3rL1fmvMXPk76tbw9zSooyVnQULcawVEqhpS5VwzZ84vRWrFnDMws2TaoMRY7rnaAUMu2GNdRojNVUgtsidatG7F",
  "key20": "2Y8c65fCeMDoQuxGXWEyKR8XMvBRkg8DZkF38tcvqeG2onDLsRAEp4uh3CY23YEngeZRDd3gzefnAtAUNXut5jRV",
  "key21": "4BbJatAcS9Z6MgQMuohHmCHCG7tMhfX1EnLdNhiQfnQ9fcBa8k5YQqFDWhoqahyW8aA5qF4r9D5EpusZpN8NiFr3",
  "key22": "2LJLfM4Gc1eVRcKtPCs3b6LVsSJ9QJjsuQNLdqFh5QUArivfhHvVRoWFEu6Qvrr9NefqFXxsCPSWAf3uRLdgnYCT",
  "key23": "3Gm1YBeh5BfZRjQcQQ3a2P5Xm84C1YTFymvLGzLwNyp7v3ucn4srQKYdMykG9h71Bg5J7USJFFnS51WRatxVrSEE",
  "key24": "KKj76FUAod8vNW253rc4pdgzrwDdH8Xg2QYWX2vG42RHFfTw75J61jMNxFWcLdB39jTEfRDo62ndEFfmwbzPQxT",
  "key25": "2i5YNMZH8XzKYGupoTfAWqG2SrME9pwH5asJqubaYFPZSxi6S9YUUdCfKZeNEUUSpp7ZNyBR4tuqUWnwv9tdzJWz",
  "key26": "5ecF4Qr7A3rUSRiyTxXU1EH3uUxDhxxL9JLHjTfFrkBUucHX2NDjDsvHGCMuC5W3LmccRyQ6ji4hinm6q7U22zGR",
  "key27": "2SHBWK6iwKji3hGakWonxJPkQRym5qA9aV3wHdkkHdRRJGtEYjHJbYo1xBXw3fQCJ5R2f3rSuBQzdPwp8joXeYhg",
  "key28": "4ttaa8LbCdUESwtLxNSRdnFNm6mSAnUih1H6XMxgToTGiqAVkAnAMW5uMAYL1LJQ36PrRibJzqbW9oRTMXpS83eH",
  "key29": "2kXiihzu4zk2TEA5CtEY6VwifrwsyWFdqMNFngGkrFDMVfeeP541pReJJKcQjph5Ps54bvnGDTkpPRKts4qE3TNY",
  "key30": "62yzMz4anh6AaTyNyFZKRBBjc7mkWxP83XCfhzFVbPT6sgvQjrCJASCvMj9jm4i2bUxfE8qCg8BY1U1F3u3SGbgh",
  "key31": "ozn92B8y9cPEi45wtYrKcKbwpD8VxevCWmcKYLw9QiwiKBduNKKZykGSA5uFDeG5nH4Sb1jaDELg1ebNHm86TTV",
  "key32": "wunzPRmfPkgzAHztANpC5jKws2QThhNShFad6wtn68wGK2dRZ2g8bTze6DLgiPvSRgSZN7tGtHHRm2B1VWvWmn4",
  "key33": "2JayJupkHv46FvxeE5Coj5aTm5Z8mDfS9tR4yoUVhuFgLYiLp2Dz85qrin7hJYmE6WR6TtxG1MpBC8VmQGjRje7i",
  "key34": "2eFbsAfpa2Ck8KoZ5BChZe5GWoeVHVumsFex3PSkKukpE4MTerxvptXw7AWQR2hB4MxGKkddnJHAE7vTeg3teMAu",
  "key35": "3WkgMgrYax5NXaf9PgsjHrsM55v4aH5DxV34SN2xdDfht1o5XeypHwaUAykkhSnTrHTBhwr2kRjzoSBcZEqicz5F",
  "key36": "3bzjTuND87pRRhbXhQaxXT1aNr4woytnfurcTEXAEbqTkRkDG7tXd9GYwgJhVpKmQBtLbk7BhZxM6n4ZGGNmqbCD",
  "key37": "65h8sbYYvBcVP2aGCz5fL7cseJ1hPk3nuRfuZMq2Uuxt2qh4S3pBzBRVvn4HSixtaHUN9zjQjFpN9fwR6dQpgSac",
  "key38": "5aX2dQ9ixkBhwiqea4f2Qt4QyqdUWvhHR3n9DKvAbvmvGBAeaL9F1Fak85ESxkpKz8JmVGVYZPmTkpdgSoY4Sj8E",
  "key39": "2744VvYdeAhj7ywAbxU8SZ8eSQN8AQaDLYVBsjhzZEzDQZb8xi367bYEb2rfnMGaCymaXUAZHeZbeeN9QqFJerLa"
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
