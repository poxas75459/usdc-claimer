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
    "EGwo51iFF6NgFvUHJ7xrPyeFz2C3N9KAxEBncoYWvq3px3CSRVLf67kwDzY2V9upFETBbqMPiQftFT1H5VVW9JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMxEFL6VVaz74zmbxC9WDzsLsCcNStUrJEiW68tHRHaDwXAJ8TDg8VUXSc312MXW9dBVqnsCxrfEtvEg8DVsVPf",
  "key1": "411o1uDgE1wSvnLBrVLXytgrsHn4VHXFnCpVRBQK5iNPdY52iGmrqsVvvM7CpSGsenboLmPrX83GgjPY8YHFbh9Z",
  "key2": "5UWmZ2jpZhKgKaKNDkCZeH4nBFNjPX8ZNUxhm4GEKoEx5Be19AwuHVp7W5sgcPLGfGHdB9c8X55MsSuP9s1kD1XA",
  "key3": "46L3uvQJBphVXuNxW6QSxo6Q51oCPtB6n1RYhz57ozdJcjGfYi9CGQZ8ERBQsy8X1eypH5uGFojt3wRUWztpmJ29",
  "key4": "4WJu3Lx5qbmxcY1y8Wijb12amSybpUqnTQBMXY13DJ7VeZFJynfst1YodfEQGq4HWgKnjgaVCcf8tdyrHisNNxAS",
  "key5": "5xUumtQFBcHrRRcidW1hkHZHJQ3Pp13fZz4Kp3iRDNrspwKtbrJRkUVDgZu9KAWzs95PYa88JsE5GQsUfdG2NUpw",
  "key6": "4LhGda9AkHvSF3Mg86jXZuQP4zRU2a6WoYhUMg8gyF6Gt5YkG4ZzPpPM6gQaov84aovAoTynpjxpobPttFGpdcQa",
  "key7": "2CB5mMcHdUdNcesaBVhDh1si3BYafUhVhhTNNSDE3TFLwn6q3jYAhrMNRpPXFcF7F1wA4HsFThWZdv87zaNGcTDQ",
  "key8": "3U2JJpdMdSk4zab8Vw2Vk89j45aGHBuzpCMeTHzZBF59qg8aDJKBRnzVR1zxo1JAwW6B72ZRefeTqZnbrAf6NHa1",
  "key9": "3T25n9nhTquXtQpNPkno5EgNkDHLb7ouzfWe7UczsLZHNZVGbuV6PHYm2xzmxAZ1FZk1Hsz7ddW2e2R1mLsvvd9Z",
  "key10": "3NgXA6vA1RxA6HvRpjhkt7zP1ciTtRqUL2xhNuv9MbhFszXGoZV1mqSom1C4GwcoE4DhHPoxsnUDhQNDhgbh1qqL",
  "key11": "4q7V6vLWuBNFZNEMxQ6a354ow5fhJdMYh8aFug6WrgEkhLbYVq36iu7cEqyXKTjRxbj76artbZg73PxBUYdjMPbY",
  "key12": "5CDhU24Umkjf12Mr73BRWxKwMmECrBnrWKV6XGgnZoPdx2PFj87isjt5GeCbpaJyGostZaFw9DX6XmuEVm8V8kvX",
  "key13": "b8cHDupaUR44RkJEQGew2p9c4zDmCF9Q2UsSG5zTtT6rgdM7JHRsSA59Lstme78VssBFpRt7L8fyQ4i2P6fuH4v",
  "key14": "4yTP2NHYAAeRn5KH6MHxM6fUc7oQeM5WVUZ8T6HvWTKZboobaf4jFtk4utnQMkSCT7fbvFZi3rs56XP3khYdRN3G",
  "key15": "5WwbTVtVcZ2ZgXf9yrAaMkGt3ivmNpuNPxr9c1tspA75JEw4gd4SqFezJDXXBS42K2hEuWXCsz1BomV7ThEuQauQ",
  "key16": "67UEUyWvvSA6BGhqsURj6tXciJxGSX7qe7eUEjew65n1gABR4HQkNYfkkzrmdwyKtfcvq1DJbmjD4CrdsXuQhs8i",
  "key17": "FcoWC1CWrh5xEdSt1wVBNc5SLzLRtFyEAcenD3Z6PXXcxHBUGF2sBHWBzkXUfG6psCsNyAQJ1jAPLL9oUQXPqjX",
  "key18": "5ivEBf64B3U9cfQmfyDmZtBzKpGayktonG6BTLgNzUdVr9CwLCDbDkkNqRBiRn4YcGpL2NCMwUKXjFeEd9ye3XBs",
  "key19": "3sRBPphXVQu3idcdRc3oZgGobFw3yQQLYNHG3LD1mhMhaNkTpKz9K21As9CTG4tsqYsooSMkSS5bF5d4rGKd7rHr",
  "key20": "4HrbYXqpfLfU1p3pszBV2v1SZ6fCdgpjSyPzTLHJ4T7cJbVnUCw59y4MMuRA3LNwK7MzcwpofFo1cgN92ksrRYfw",
  "key21": "58ckdq6NeKCF9tBkLQMWP8cBidBoKL1Epb339FqG2RhKUjzv7jweNuouk9hMDaNRrECWiD5VEbrKyYSvncXUphXo",
  "key22": "2tpHXnT21j8qeQiEnz1ywVo29cPvGeGZYjjGBvTxD1g8AtMCV6ACbF1RerszVwpEPknEZxjSs3FqEsC6PFFDqMez",
  "key23": "3ZHrdNrQ826zrV3dWJNneGHUsY2Ep1vVKcqqXVML1wE64jeBeXqh94YCou9ST8uJyyX2K4Cwa1JvtjvkL9tdMYKv",
  "key24": "XkPyj43vvoadKRcdNsBavaEX7WA5fQabThY2G1cYgdNuV3xmXtijCS8NESY62QuQ4A2nC6E426HiW5L446G41Xk"
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
