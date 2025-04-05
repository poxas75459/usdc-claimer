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
    "2ykGKuGu2VhgwjovDQhkVgQ1zGXSTVKbqS9qgm9kGQKyKpx9gB7QSgUAmUE3s6EkvEqD3vMCmBveRvqu8ssJTaxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j91u9UqGzFVUeFtJ1Ym4Uq3wzrKsYGzWx1nv6yokaxtKp9osxVkAxKQYkZk6qNF8Nre6XogzsQJLXoKSc52qdQz",
  "key1": "3jkz5qCnCHuDp85yuGQpjCSyus8FCR26WAuC9hVVyq4HEz3oSkbo2N8abjknSvZTWEy2RctJ6Wihyaq5u3NZU83D",
  "key2": "CCttsPn56m2s5YVXaCs3KopCzmWuBevF4WVK6h4TNGVuNZr6WWe7zFTd5K6WWFsRV5qHd3PYHwUqddoa17bZSNb",
  "key3": "5Mfi6DfoSheJ7knLa6N59zShoxhNE9sWxfXGaRTkPaqrsk6zpybn3b18E7RtYH23n721b8uPg6Wy5sZSjaYj1zVG",
  "key4": "hweoY2gFBq2oSYFe7tnh5rvJY2WnDjji6s9LgWx2KXDt7jPG9xM8cZ2ffTkBwFEKXK3hRYyPmUAmPGo6hhoZmgC",
  "key5": "2KDmpPajPnowv7Ea7ivWumcJp1CkAL4noboYyc2inCjhydzTZ1wwp4CxuvFAY1oVKDJt7Xku8hJzgaaXZc6gTV4F",
  "key6": "2saJQtZerYNkaFU3NAbP6Y1XyeiwbfXna8bvR6ZeorAx8YvqZckVHxgWSFvHScL4ncGdE9arcRuHFfBMcfqsfCVB",
  "key7": "5sK9gEMZfs26NuTh7VxiZT9jJSpKbp4CoCHFGfvw1tjjxrmZWWyjJxEWTdVs8gfojyuZ6iZt4W5w55iWDSWafm3y",
  "key8": "5kEb3voJhXJF3bS1NN7zKCLTJRboGzSH8NBjjp8RZfhZ8MAsLsUhXBZ4epnk96EyCtjV8gpWWnjcmJ2WaUNMQ4bF",
  "key9": "3oCZBckr3s86DMVJTLuLLAP6LqTfTLEZMtEnZpBF2tZtNw65A1oQydCMkjddcDnKYEHGVBoHyqY6DgJFvd2yjut8",
  "key10": "L4zvtMTG46QTDKYSBmivw6LE3JJDJ9zKHmHD2Jo6M2EBeAXUUy9GFru8MwpN7QfHTR1wNtM4DocNUKNvy4rGAhJ",
  "key11": "24zM8jZh4AYgaysy5gLMk1m1mvuNtKS6ycb6poRf1WA4ogq3duJ45X7Nzdi9Jbx9Ws9mayUERSuUkjEi4h9ZSiaA",
  "key12": "4k6SkHrSHvp4v7rmDAmm9qG8C1WFnpLYcuUramvy5CdLDWmBs2M32Zk4oijZ7qajzJpknqBLYcxcNR5utn6a5UhB",
  "key13": "53moEK3NH5WJ7F2BBw2tYNrcnNG8UNqct1YW3wtqRXAA6VZajks3rPqSyhxKtyqnDHzkXmtKeksSx9Fq3pPFYgUX",
  "key14": "5WAgoAfTQ3rpYZGd7JK9uw5CUx2zSHdnuUU7ZTjVXHLFuBaBpG5s9NpKaHenq3Xg2JtLNmRVMK2PdhMN39hgUR4z",
  "key15": "33qx6Ncc2CMSPpuyy9Y7Qa7zGaotiCorcYocgqf3tDEdM2nSt5BnA9hWRvQT9sdtwafeVERGmKDKzD7CnAv8NpN8",
  "key16": "5zMtvXi2q5G5winmFJHRv2KNJQwPnMVXVsW58QWqGxTfmQAg7ssYr67VhYP366oPvvKQyTDeLzkH2hwc93BheWLh",
  "key17": "3izrF9z5ALUZssukwwVVoJqiVXTtsF4Nrsmqm3x2iSmNDArQ1DjPQ2VnBeoVhR7qwYUMz7xHxf7wHDMNsRHufdt4",
  "key18": "4V1dJcdRB1AibXRYfX9LnmNxJ8EZWe7c7gUfVRVYuyNxqq8cpn7NogdaA2ELaBJQsCYk4gpytp1yQcVPVwepuFFP",
  "key19": "FtMpZ5GjBize3HLrSxmpUtbKPkAwdWa3wzmvHYraiveWjqFJHgPue5EHhHNnsgPadkY8DyoB3qVRWmwvxT2MNVu",
  "key20": "5f5KgvVZ2Q4SkqX3X7BYijLn2ADudYh6wfc8wnyMhQMXooaPRoEQokzyaAcSDwoKA8YMgpEzs1q91qQQzTdHH9Sh",
  "key21": "563WemSsiD4MQApiRuRsTiHT3d5y66PShpJnygraaWKDmbgRVstDvZobonh8staLPafHBNoUrcwTPNTw2a7M7QuE",
  "key22": "51rLYzL9F3LNBumbyvV2jwwy3dU7g2bcR6FyN1m88CoYrE8rXbrRiBXfzBvfwM4wpG9UPajLnLnkfXfFWJk6G5k",
  "key23": "4ivW5Twps5dAANV9vYFEXwDRMwAvawoEXnvc1JBJsEgoPyu9ZDNmThcpgLNAd5c3rkYA81BL2AN6dD6C6VP5xrXZ",
  "key24": "35xEjTvdHeaYCLa7TF1qyvV1saAH62qjvAag5P21TU5MriqBhCJkYR4yhPbm9ad8FTejiCgL9X443SXJk43qBgCL"
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
