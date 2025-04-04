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
    "3NkM1MvVzjLGPCvoCMkw79XfM8mDYgh8U2zCWSi9tmvFJiYFujtpKveEwiMfsnr8JNPzxMFL32JmFXJxATUsUrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C1Yt3cjpUh2tdx8ftEEwgoSJ52vTZbzPHNTqHf2ET7E6PgCmEZTE1De8Vp3ZZ3LBDEn1aLxFvafM9wB15ioVyBX",
  "key1": "54ZviuUBeqBhQmWSFxuJYJUBNVCfoGs5iJuTsSBoPJna35StfJwssMMis7f9bmwjRmp7tn4F2tiUNEKhuQCdNYxA",
  "key2": "56KrJ1Efr7Hh6239LbjUfVCjkhCFryyomvDRwB8oAPKn6avAMEBzSEk1WwUr5gVqW3dcdBJ2ENCxQpi9vVCo2L7",
  "key3": "4EWpuMq7343PdaG67QzmEBht4YSxJBy2XdxSDFk5HChtAK11rmzctG5CRu5xkCNeNLKXQjyypX6h4ghPScjwfRBM",
  "key4": "bTBJYxhYDFkgJzYmGYXo7F5x4ETpoYv1aHPgVQY1q9pC1jNtVz71xCEgVhG9hQAdVfFTdvSwiyhL79csEJvU78D",
  "key5": "5KYPBrdbrJ9avsixF5SweNh4fme446hBdHt2jQAT564NH5L9uccXVVYxsbaAhbgpmFT39CCrm2mNy2RtyNa7vEHs",
  "key6": "5wZ6pKZSbnbcxnM6RVbbH1aQ5ssnxLVnoLUmcA8UwVGWSVPWQ98p57fjwYUHpRrJM8tt7xMEngX5bFiQp5jf9YdD",
  "key7": "42UGYLNkaS2o94daihCaZ34K6ZGWz1iJKqAfFFKLVbYP2rduvYq8U4NWtL8aAfPSEiFF7AttpggjbVL5EZNn4zhw",
  "key8": "5ywqGmvXMUR9Lzo59mT2febvJEB9b2f1F6SboeNgXhQt8GKAv5LSGWmKdCWbwu6ALqnqSQALD4CnEFdrMDEdE4eo",
  "key9": "32UcfMj7f1WVvmMZfMVM736BfhEByHW7TtdVtmG6XjZaPfJnwVcCxybz9jq2gxMKQ8Fbn44uZfkhUyhp7VeyWB78",
  "key10": "TWBAEYAUWGQbnPuYNDA5vxjBXL1cUSitGdso52S2kvKssdFLaNL49xBgUJFdbhGTryXvhNh2R7j9zjk9zpqkp9E",
  "key11": "w4moXLKs43ggUNvFJKyVtvbJH7iDy3zteLK4AJeeYJxL37acmA7Qxy2Yfj2pwmDTM5sxJwCednUGozzdK22Z4yu",
  "key12": "2ajrXnG4ynomBs223wsLCjTUmCheDtVUCcTRk7psRwYWwPgFcc7VxNeienMtMGiuZDfvLBndFs3JpnTh8ciV6Yu9",
  "key13": "29rHQFXgv9Ln9xnCdn3gjNn7ZUn2GHetWJVQQo3btq75xpemQGXD6Q6MU9B8QgBeqeMhfdAxsRpKw5WTtb4TkTQC",
  "key14": "YABmi2ZNTkB4x8oCaMiqKAJ59SnaGv5EnWLV5Dg6y7hAsBtJApBSU9q5hpkEAPApW5SCabuoVC96BNWvxCiis5T",
  "key15": "46hevGBYqBgAdWkTKSPBY12aZi6VSohEnMKm2JsbTge17teEiTHAxLi7gpE36k8vw14BBQpmwF3nnNzEjapkHvFJ",
  "key16": "26mrftFLcLc3Y5iJGJ7x9hrAJhyHwcorTt4oWQzw6vzUexoqN7mL1eCChAyKoeRbTTPVoXYgXj9PHndieUyzSH5G",
  "key17": "36c7ErWsyEG76qtuzuwRCbzuXr4ktSDYPCGXGMvjRCMGhCJeggqD5q4zrABQhKs6Tn5yuKxPC6YZS5yvSjBToy64",
  "key18": "5r7QBqX6dx8ViDok4mjE5MLTv2h19yu7moPow2b42tfFn8F8qC1miqVxcwRQPs4rtgV9NeR5SpUHuEXfhEJTuKDm",
  "key19": "5qFvH2pWGimdtommngvf62bCZCmEC6xfgt2AequMRb62vKaurtUNw2XWj4PshjvRHorjtftfRzFY97b2DncdAK77",
  "key20": "DNjwX18MDhCaQZKVGQpPbK6YbxLcfaMKWeUDfy7658t31jmHTbBqRCVoEFM8nLL2RmfbRYwkSD8dWByQUoRmDMX",
  "key21": "3pEiXB3KUspHSpSDZ5mLzuH9sp5L38zPqTtM2sbwm6NQ1mxWeaBNzeA3iRFtfzZWFZWNAkGUrivmPqRAkZFZH6Us",
  "key22": "5Yw1v154ScUFfrPTUBuEM6enWwj61nD9nNh26DUzKFvTWCioLxRRcvBXT7CXcYswavPxHtjPVnXMSgskT3uLUpgw",
  "key23": "3KYvpGqzYVFERPyB4HUF4rYGh45feubE8eCJWvizavtibUQjSAxJYPszfTcCvJjnNUy2f9BjcgayVyXmoJKaxVnr",
  "key24": "2xE3b8bhigLvHdtmy1fEKkVdEWbr2f7GsE2KWyFLCPUnEi46zFpCszSXM3ihpF3gDkTjwu13RRCKFxNAVKx37Mvi",
  "key25": "31Nyep6Wd4Ujh4wHD3VzsCfpGJKBJx31qx5gACJScHi1EUDHFLtKAGvTRJHWLzgukW3KT15im8PJGnK49AaGZwhD",
  "key26": "5nXModaKFbdUHzHU7oT4iNVN1QvFswUVS1Vm6Qhdrwyo5WsVztZGyWJvZsXFhtsmFgU9gr5nYifNCvKBHWv6LJUk",
  "key27": "2i8MK4jXJyKjhP3AnSHEhsi7vH3VoySoeVwU3ygKnsuKGBnQQroQXn9zwYhu2mo9XfuKsSniXRmgEJquYi9se1Jf",
  "key28": "4vBKyQxrFDBMDxMBAtMDHSJrWLk8uaVh2ue4Xy7t1zSs7YyhicmR5CxLFg8TNJ6JGPsACEJmTgWDzQfET7TdDoUM",
  "key29": "5JAzqVqes1n3ajru8d5pqx9y5o6Ax6QbzcbHGeywXrD4zgAvRm2LCQJS5qWe9YzYD1ttf3u2zudUvyKUdQiwvFF2",
  "key30": "4RYgtnrh2rgMAB4UHuRRoisybvMGsQujRbxwFVWcDm1XNN4BrcUfYZtyHvYweNWxsdyo7EbxBWuEsBRCi6uEXoxW",
  "key31": "3ForiCohwMTWzyc6cWsgGttWtdt61WAZHzPK66Ku6xy1M2VP5CZ5fquVsFjhkmcJ5hmWAAxEk6x3MoRYjvg2SWHz"
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
