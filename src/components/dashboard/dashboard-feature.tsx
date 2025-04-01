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
    "4habSdLk4J54eEiWdAgbd8czBmAV4g4wRVMBcXYyDt8jerYEEGJKafP1B1Z7jGchEP68UWEt55GuN7eJ9zni4rKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1bdDh9SpJULrqVE92UoYcBoYGHLXKJTwuxATch8eDVoRaFcwpFBUVouf3aBKX6NWX6c3DVFUbSrR6CKCWv61Z4",
  "key1": "3jAQyAWRy6mR1V7a8jXtc5ZeMKGFKSgPPGEHyuaDrjtc2PknK7ky473Wq97P5bBwUa13GzyRYQV7yCDWqZDhvT1n",
  "key2": "3jw25PzxkfS7uGdvhN9iXPsdvhPxVENgrMF3VUvKaEpQ3MURRSqP5Enyg1qR8FTMhp8idyve3bASBSqN1BiRvXCe",
  "key3": "2xSWAJjiJdbn9tZs8YaiphBxYy3A7i6PpbSL6a7JopihV9QRiDFT25NCD8uhEVxc7Lbs5uYB3BBgNfT2o7MJAPRB",
  "key4": "4jzMnmw3ZLCTuMZJJxdQLLxfk2sThW93qXFrEs4kkus75vPxg1nAE281yE1cmibqrnMcvAvFwMLXRZYZeaw3rV9A",
  "key5": "2dwhHsXXdokVv7P52jbVcsuRHVgvUykhiXGq68yNwrcFQF6q1WbEELRHTRrnukCazGUhLwsPte5s7TSVi15o8t14",
  "key6": "KoLAfsL2CnwTabiZMaj2LKbQKMddzKJjvhtg6DN7wnvXnAm7e8phonjcbGXnAKTWU4fmhVXjUp1Ggg5wEe56HZU",
  "key7": "57MDk2wW1Mq7Sd5CBLh4J8Wpj4JKh4jbF781moMoJtQtVBrNEw9Q2S2vwwZ6J5kCmRUGc8uGVbyeUBe5qjThkBMa",
  "key8": "gbDzQSgzuDRjrHh4rLss37XT7FdMXiaBMFogZiwc5rnh3butVic2MQostT6XqvV38vsCxFmfM8gB1L4o1RdvnR8",
  "key9": "2rsGWf1XEK9WsDATNgkPhFJVdFFykgPAHjrurGtVgNQwzTpXU25vpdwizr4BWS4ssHx8Ex6uXe7KviwzumQGQC5N",
  "key10": "2R1i4BygCndkymLpT5PdSpEZDkJPoi5BuasKtQKCfnnGNcuieaDkxCYTDoZ3BeGgtSPRh6A5PY8QPzw9zqkfKc51",
  "key11": "32xujf6BGM2ic2vZugfSuLhVFSPQzT9mgBmrHxDdjJSw2gxLnqDVDhWDQrmVne7CmCakdqX1MRRbekGBv9WV83H9",
  "key12": "51G1SZSoLuX3UPiBeNLqbAWSH85VhqK2xJX4H3ZQpazMoi8G6vRVowgDRLC6NG7B9Ad99ZsLK7MmeNSyiiMyy9MN",
  "key13": "2D2nqPMKYiVQJrmnUYq5E4XWmeAU61UYjYMDD7aqaqaK2xVeWZqSWbFZ87DoPKfXDJiyj16wajMbUWyxs8421ntS",
  "key14": "ZwTXADtdzdzNxU1XMij45E8Mm4UQb3TFQqoCoo2sz4guGRH6n8xcTeEzWfKViy3D32W1yzVynPGKKhbu6tGJp1G",
  "key15": "2NpGQ25hnq19o54B1iuQbjcxVbrTkHykhABiQs7Kd2t49c2KfZYALiBtoY1TTm7P7avwWpUgM9hWSXLW8UwQ3t1S",
  "key16": "24xmq3YnRwyXDhazgaozsEevqLEH5or92WqwVxgckEKc7f35WaA7n3gKiaUs2JH2JFR7qa269dAJNNPnmor8SXVz",
  "key17": "5VyLQ5CQYkiNW5PDNDCeHiRcTbrmch9wNRaVMcr1HRHaE8tVJGRBwtpkRGYEn2eqkXSuBvC2rB8NTyNj6UA9tbwR",
  "key18": "Redd7ckhejA76i4LARsKmX7aGmqbL1BTnYG27EVUK3a9xbNNCYAwUHRC8huSmznN79gWxLgqMnGCBr28iUzVLpy",
  "key19": "4GdqSm93cSzfSp1qJj1cGkVeA5Vc4fDqGW5XmnbkKsegjnuBz9tMsrEoipJjPwPepfEdMaLvve4JjU3qawUJBtJ7",
  "key20": "5aibA44emEnrKPTMXY6aXErzQv9XWfg47y2c7v4Ya13guUdzogd9VER2bVjUzkUtZsmYPEZPMtX2b6RhavJxjioh",
  "key21": "4KdUWdh7f2iLpt7CaXYQYWN4iUrrUBHmMyE2syCgoutbgoJ9iA9FP8QkRESycy986z8KaAuHA1KDWoc5Zaea7Fyi",
  "key22": "GkHv8wNKyuJDvRi7gQakoVF1xZ8ZKsk8gweEnSHYVyjiw2HUQ5yyZfdDuT6pNK4VKTYwVmSoMXpFP9hewbmaDSc",
  "key23": "3NmJwLYtVUKmj4Gw5Xkad841hhVTuk839Ba4MD7S6hrqxXdTqruVHDdVwXsyd156CSvQfK8yHqztPxcq511P4nQc",
  "key24": "i72RD374J1RjrDmYe6MQ4KHYkBznYoeEbKNw7cEmwSoN6xQca4AYjAHZZNC2d7vK8Mnsi9jfNjRyFbBpQGw7U3S"
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
