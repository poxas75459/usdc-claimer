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
    "5TmZKASxwawicWEMicMhr4jdMoPCWa4b3CMiwFFr7W9ik4ErFRMybudtrdrgcRHicpusTMSv5umQo5QAsi8NKMHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdPAjkhx1ZuDDLwt8SkEUyugyLEGbz7DZvb95zgad865ktFhq7a4j2KdUsvmBD1uMcViEc98Jn3xB1puJvfHCoj",
  "key1": "5hCJ7BAxiDFuJWUPN2WG2ZGg7UccYdBJxGr3EhF4h9UUiwX8Lqc4eJRsXpXBhM88HBTkicK52JdF5awnXMKujC7o",
  "key2": "44WH5k1V18pEuvX28bDJK3kuwN4BjKuBpLsboWf8dphGABvkmx7tAp7bTS8XdY3RGyawrRoDTdiV3ev4TkZQ9Wdm",
  "key3": "31kNy1yNkvT1QBQ1a85JjUyqM7s7wUUeArLT9WGfGTp66iAypx53swhMuvA4RZ6faEuxTDYgixK6a5h57g74Qj3H",
  "key4": "3AABEspmF9p6nCna7XNeNeKhbVVGkzBLont9adq6KcX2NeJ1tCMNfesXsusoXLWLJy3ir8LHUc3DR714pNGFrR8S",
  "key5": "2xaCDg1ArRho2KHEMB8kVY7D5KMbAqFQbfsfFRAVSTByiPW72gjtGiNPUWjDA1SdJ9JP4dcR1qioE3G1ZXsuiVti",
  "key6": "3mq9AjjrLBUXAECPdULNqoUhNYENJnLw3PJuwPzTrMb3ygC7FYnFo2LZFJNB3YknhubeAL3AYQd5hKutEvZwUTN",
  "key7": "4WwvHMaSd2mtdit33ZENgNFY6jsWvFbvD82XTnJizSCQtxK41ocd8BGpJPvjcrp6FQJ2KjgBqXhRJXACTvgp7uPi",
  "key8": "4CGj454F37oNxsoetafS6pdVNwy4PZQXBk3YFUHg5gReL8dFvoZMCSgmWt44XHqp3rnfYc8hPznQeaHLiEvMRjrE",
  "key9": "PjipfDi5YGVfMGhRKgX5jyGZPyfsiSb4j2eRZs87A1AS6xiJzk7EmgCG2GGWkc7cCLGyyiUKXBqqhUW38ySeYcR",
  "key10": "3UYPq23T9Sp5bPuMMAPNLuQ3wYZrWp6VhHf2omn6tSLEcPkNcQ3WCjSHqNNFubzBye4HdbNi4kUro4BnDCs8iVru",
  "key11": "i5z9fTy2c1JuBJibGcRG1ar4APzw8DNkyXR2KexexbBuHDej2JGPYMC1Ft2UN1m657ryDwukb3vVXkB2NTReT9c",
  "key12": "25kCF9LCUWFzScYi9MU6cCTJJ4gGJCSPpUX4KV3NunwYbmepFgBZ1E3EdcooAhMc8CJJtoumhThMWsyCnvcepA5T",
  "key13": "3er1X4F2pjgnGgpBx3eMximw95BRf1weEyWBx1R9HxNqq6sAap6gPFcUvYNJCdD235UdhTg1k4XKSbPCYqWRxj45",
  "key14": "3JRHp9im74REa8weYVqfnCPJmFaMuHA8ZKew2BLgxRsQHuQJUiPyVN9Mpd4MA5PpDCCmg7MBAtxZJBFejXmuLuX1",
  "key15": "2pan7FmKWQyqec4tYDPWcvqvGYH6PZaMYtfd3sXoUWSS3t1V89fvFyRYUXMmDz3bKJsfWujCNHAfSR6PEThvHkku",
  "key16": "CtkH1k6kSiWRHFQgn7wcRGzvuTKTfcXyvq2DooxZVR9gfueK9k1TxdMKaYBP8TFFsM6CL1xHw4yxubSzJu6X68L",
  "key17": "4uXs6Wt3QWrH83EZg5wf7PLL8SiBXRkAoNAxy2ZCgq9boMYQq8EXvi41hkG1ZWGX3GE51k4xHeibRfRYUEUHeqcF",
  "key18": "47maQaMj3hqYkFqLYMPrXEWPyRT2tRHQ8hin5SxVfbEaWtsp5auFvjDGizfKSP6JhUyaURMP7D9keSvFYuNt6R6w",
  "key19": "4Tm9M7eXfa4B47m9PoWXgvgvxJRB9ouub1FYJPcedqbbtwzTTiqCFrp5skiJGUseXKcPxih44atKGMUBxfUPexr8",
  "key20": "2rDZKBi6uVXyGt5ceGRh8JLmi3wFSsapiGhYCmqJ6tFB1opSxg5LR3TC8aKwYmjB4zXXga2Mwfo7ExKpVWfHE4Ai",
  "key21": "2AZQWcBoz2HPMLmwz4saNchnVaTvT5FCAbH1S3XZbWV7QU7kNsPwdXf2KHFWS4roLPrg8DxpSeQaqahoXDonGABD",
  "key22": "4kjFvXjNK5zZTMyHNo6WTcxUiW5GK6wgKGWy5auh9fwJe9gPiyG66KCmHmVWgBvR1EN1uFvUCfxErk2VZDRGWUmM",
  "key23": "2Mka7szYp6qkd6x3HjJ91XquxMJvVyRBFtGhDbLCB3xse6RWHfVRWVk2g38NyrRJTwkva3CCz2edkifM4sStoPpr",
  "key24": "SUFkStcVTtABJkE6MQsEn6MQfo2nc8eUKZYiezY1kpaJyM6ZTbhjswv53F399UM1p968tvgeCzuCDaRcjKpjokD",
  "key25": "5XQ6xPGx92kEvt988xH5TVf88gaafVTRxcVj8vThM5WpWQ3jccEwtGHCHrVgN5ZpDA4RNC9B3R8HDCqmDRjxHCFS",
  "key26": "3FPtV6gHkc1L1FSfGnckyeKTsLZyWUfJtYrgxQGp4B5EWomMjjxMz92LoXwDamrcp61bwBMptWf4GYPMVWSFzhrm"
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
