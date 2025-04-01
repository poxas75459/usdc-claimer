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
    "5vZinbA3eJPuigDLgeYdJJBPKHxgiZoPmruQobnzNGp6knpjVSRSQoexWTdkiJ8Ta6a11boKXpDyZR4tqksLHHEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxhFCES19MXuye9LrL1WEzrPFE2wgwHzrCPe6LxkrCMM1kaXy5gFP5C266C58CRgLAQwuM952JmsyLtYWvgyFms",
  "key1": "2sCgwwydJRTJ78FzKSFRLcZVLdpopyx8wu6mPRj6N3EJEe3xsoqwsiWC2kCTzEaDrQqbFf9do7uzX8697JUGAheQ",
  "key2": "r7fpgiB4iWA25Rhak1ZzKpjutCVnEU9dC8JDmamDb8y5yDEexLR4QBve6Eh1Z1akauqhNASASYkQ1jbyssZc7eM",
  "key3": "yexhHQ3cG5gTcvs2gkyfiGnm9LeKtAZQp8SqHtoroJ5T8ShnS8DrqMdYVvrBQLhy9N9BvknytapXSBszin4Ctms",
  "key4": "5yZvCG3p1nra6KeJPRFSgexq5xCrWdTF8GmfEZfDHA1XNzHDs2gz7pdFjbRc1gh7DH1fFmxpnRoFrakoYH4PThBV",
  "key5": "64u3P76Zqx8a9QhfZGmHqn7z9hVRK1p9w8wVVNyBmJpnm9cY6VSjgwo4Bn9msL4UzcKCvLWoK4oVpxMxngeEB9cy",
  "key6": "5afYJSHKmqSUdnFynSHxKeMVvCAg9RGXPj5fn8HfYp1HgJByofXNfeESrWwTR4W91La3RJGr8vUP2CxMkaiEcv5o",
  "key7": "2wKLt3Cbv6mGD46i4wmdwjgpCzq5ttcpg5QS1EDQNPS12tErHTVBR4MiY6YbWitvq9SLEc2HoKWcbh8KUbVBviYZ",
  "key8": "34nYJomxqdq8RvoxT1driEvugTsNFJJ3ZqZ3PmvgebWuNisyoSs2FHKKiTKjRz1PVgwrfh4sCaGZddNsKVGfmt8W",
  "key9": "66erhToz1wRRg2XTbmcU77LgpbLJGvvQAwcPBh9auiM4mzbEho4KRXDCvE3G9YSZJ7eRY8PT5VBatuQkuw3LY5X4",
  "key10": "3u6vkeS28sZBBYLQwoCZNhNTswc6DfxRvdfa8ybdLntmTeyTamLmyFeVpeEL6VuKBVqBowAX5UxhpS3QVQ3LLJHD",
  "key11": "56s4ZS6z9xbKkjV4sQniRkZTNwS48BjzmvAbTs1tqnQd5aGLtcmowGL8HmYPohvW56h2QLGdTvqV95zaGUJFMThL",
  "key12": "JRd2h5TWjMbKwoPaLsD4gqnKozR8x6hZvQfDWhRLDKZ3BFrxudF7juYJAGJa3RHwGmTqNKfCkEua4P1CSdmmJUf",
  "key13": "46DqVWRvUC72hJCZgNrJ1aaC5bqpVBKcYLMjgf1j3tdiwxfhy3N8ceAtSyJukDJFNyhEYcb4BxP8uCaGd6J1TPkZ",
  "key14": "3bHjnUU2w7vTi4Tuz6EqcZGMT8JhvabN2L5jkBitZRudtteCGM8MrHo7K7VX3qezpGgjpTxdjs9Z7amVsekvuL8A",
  "key15": "3SLqG6EJM6V9DaxszkEz5H4huy7tZqjvweTQmNi1zU5dsEoPSTRFfAUm1r3wAHswkJvfdpYu2jahuzkVo2DYAUxG",
  "key16": "2GZMB2DHd2NccgMpHvi3xViqQoUcJpSYR88JNjjCyereqbonkhUprhZkX8tK7Hrs1eK8Jjtj9WkurrUyV66jorhY",
  "key17": "2FQfkAq3GFHHqPyZwm4KzXignn2dnQM4RNoxc7BovTo2xP3dzkitMnot5Z1ds7ebocePw62ZAmxcbUwpYfRN9idF",
  "key18": "oTQScEds7PmANwYXVx42G9K2a9FV9hh88oSGxevpTGMZ4A6yGoUf7vC576xpuxLkjTnaViTHTQ3FW9bspBTMnbz",
  "key19": "3x4S9gifKzCJ2aZuVLdDjDmq2cmW33d8bRZj2H2YZe9eXotsdNRu4ynyvhzYo7k2XseCrmx7fmKp2xMunAiCkKF8",
  "key20": "87n9Q5cNewwqJYDs8Rx2wftf1a2vcfVLk3g16SWJZ1VQuWzqjziYYbmfovufc2qqc4PPBhyvJcGfXYsCvLCtJo5",
  "key21": "4a5aQEZJbCq6RoVy8jpRDC2mLtfXzCuMcFy73Wx4WSdsrs9qfmEhaXTGpNgGoF86Hqb5A7wS8R8jMm5tbGqA4Dzi",
  "key22": "4YcEakw9oLtw4mvmmCpvbPFxVQgFiitcPdi7fgwMcwLBw32jT1NFqStYbp1JNvPVM1GQP7HvT9t22pqivTVf8AeL",
  "key23": "3XjYZaJFJAnnoYVkRUYRskY1BosGgPbGLwaAzAAiam5BD6bRkGkzFcz6oncuBFTf134zNeXpetdmZNUga4rXPjy1",
  "key24": "4iW71os3pAhP8hizyB63AoFk6qzuGALzk1QyrQyGhesfyTx5GXomW4U7BzqjdKb7y2AMFxTAMEg1wnkYQ87q9qUb",
  "key25": "2t1sHrD5V2G7PQZTCrzE6jwMqcHF1pYwrYK7SbbaXnz4b9qjVSwyxwe3sGc6F1VmQayQtuMfpv3sH2MVBWQUwZAa",
  "key26": "64YHhwYrK1qmKLTRq49FE5mo6rz4BT2r8JLyRVcTagL55hFRmFXCZMBeHyTQzbQN9snkDFjm7d6qTBVRSuBD6EtK",
  "key27": "3DWXehe5qvGLL5zTbSjq9nTshYwXTDrq5jEERjh23LRMUcBcF7qqqNKfNrCktca5dCjEhhhESJWqTzE5pG4CUruY",
  "key28": "3jYe6afwDGPKyhE1fEM6mXD5FRSuiFEMYqaZQahqdV223HZA9QUhX9cmZ8zMrGcTasXHetFGzr2E98RPRzV5uyam",
  "key29": "3weNtiU144t5LrEkUaGoRdAtkXgQdRysfuFc2zXwD4QYdiARsquftL4dRD6AYbURfp68f6Up4wHgrG8BcA7ZtTCb"
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
