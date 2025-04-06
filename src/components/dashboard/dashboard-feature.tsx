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
    "32Y4mwosDdaqny44TscCmVdUWQ3JcM1NMQRsnsy57JEKxAGPU9ysh36JAnbhHNRkXUjVvvruoavTaaetK5m96A7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLwmaAaoh296XgFiewZAJFQSPdF9vrHdn6abidBP5NNB6nAmRHYHvmp37m2putLc1khRUoMv5EKQTottdJmqkae",
  "key1": "2EBLTezPydfK8kFvDTVAkEdkJkGVpXV4xht6zsYWD13K3RirTzYnRaajZ7dj1KC22Yp2e2ZkKpGNEYeLgWnpkBhW",
  "key2": "RoTaCmrsco8DrVomZMvbwj6HHaxqzqxL2ZCH6Rbf6eH3S75daBtTqG8RZ6Uia1fU9zjE2CaAXcqK6c5cjaA6NFW",
  "key3": "ZQEWDmJDyoo6Ad32TES9T3bhU4dFnsGw2YERJCXeoCRBiXd3gd5nVLEo16D7JwJDvwS3dfcecv7cBupb3KfwT8V",
  "key4": "EwuDhUVQonS7EjJY6Mp97evHv2vgVBxPREp2pyCDuGW4boFdqyaANTTnqMgjdubAhJhyEDDwXBUDGpkwizvVABn",
  "key5": "4LBM9cH9Z7DuYFPAwTwj2Ci8rkDDjNrWm7kaMzM1FRVzQ2FioJuzNgbmNUoHXQ1T7ehyPwnyNqvVD9B9AyhhQ6Jr",
  "key6": "3sjG51Kv1J5GkkdYz3s3XjL63CM4BwfdRwS2LD9VvmBqVpzKCRWstqQHgJp6fLoCdhTp6e9GmKG9zmvmCaHKJuza",
  "key7": "2XAWUkpLb2k3C5qT6vELJDmvaa7AGRvmhtMznRzS4HdTL41z9VLcZzyJo6yHgc3f8uBiBEDrkjXVdaQxc19WXxek",
  "key8": "ebESMjQUGcY4CJY9TKn7zwwyS4XBbsKASRFD9mX4Dm5NghoHRwhHcGkwDHjABYc3zi4Jfbezg4feRTejD5Zqr4q",
  "key9": "4eLrtCCEZhAtz7avowBHzcbbhnka9bmZQ3JKvnu9At3w45Ryv7n3pTJXvVWWyzyCiCfhgrMwXRkfChcrGJcsErZu",
  "key10": "Q6KynUGW1g28cnSHqJ1pffMqAFjR8bJ6oMTCxER263euRo5J8TeS78zekoRcBU2KZX2PaHzn8JTh66MMGvMFUks",
  "key11": "3XJGkohG6rtkXQcLMS2ixBvB77Jcnwg7vwBK3ySuZ3M7PfyWsd3pS6WouKZGSTqHGnx9LWSWoHJH6bAx6rzG2jyc",
  "key12": "3p1UjqdtBnSKkrFbbfxrZ1wWfEjM6UhsaC8G3vXBaVJYbhsBNucFMFhzYZfA4rUbUmxstbkJ1TrY7k8XyZZhojPy",
  "key13": "4NvAV7T1cSBGWWyXxB6ihW8H6iK7bDPfUL277basdMYPMTjeEUWMSHKHNb2Hd4gGaSd5qJd7UttWrQmXd18XN9nF",
  "key14": "2izj3xM1TJ4jHzGBYjndkNRjfvhZ6yyZ2iZfmSvsLaZ2suQyVDE3SA2RKuRXow28vQqhMcBdJ349zacagdoKGTq3",
  "key15": "127VHK6bN7DCU2TYaSedtr5B72sCeEJDvSpbHw9Fk8XkXn1iRAwcsExhQhT8Ss8AEw4s3S5KtKYARqopTy2fvYo2",
  "key16": "4fpNEmHRS9NMzFiMhNnGF8j66vgEBdQK12LtsbomTaUQXPySBCeAc7j62skVMjbqen3UNs4qYKWpV8hw6ovGhCnc",
  "key17": "5BtrfxV5L4mgQ61uBNMa9YNGfQrt7oZbVfQbE4M4Gp3uzLkiKc2F3Tum8xv3sViwz421Cc63eXmgP12NgmGADmU6",
  "key18": "39TvLGCJdZ8NB6juPbb6UVhd97RnqZgDf9WcufR8uDiUy1jjhdUj43KDTAGUPKMxje3MA21QGcMCMCmf7FMHdJZ8",
  "key19": "4oSqkdRyQWtkvEFYrkQ2Z73G2ZBmjN9mxpqvmkQa5QtZgfyFZoCYPmzVJwccGYxfhRY9htMsZaUM3nWgkCSQCecR",
  "key20": "4qRtEiqnfQ32wZK7jEiDiiG1tPW2NcyUfcEfvcLRXhFkTErs78cG8moKpCduMfuv8hxcYYo4mQ4bfFWCiLXjcv4E",
  "key21": "5Zrw6d3sJQCs9A8fJzz3yKXvFfQdimStbL6mnMp5cHzAhPyVtaQJUQ8q3BUgRrK7qKAHTjnYCfEhmB5hWqGrQJsJ",
  "key22": "2CYQcaDg3c65X5HD7dRwwczewcxttwobwyUVEifLT3fkrVQ3hZzkw4NBPtA3ChaiYNDWmWdrAg19iXMouY3nXt5j",
  "key23": "4cTQV15GDsKP41NsKqQthuxCG8Jq9cdNopFjLaw3mgNmNE3Csy1K1aB3P3zPzftGn8b5fckaeMtn4mhT7neSKNFh",
  "key24": "2odr3UCCi2LmPBW5oTka9W6Jk45EDUCZaY2DA8ucWcPR5JQ6asSMnGwzJB8K6gm2PP75niHPoJZck2gxU4yW5cFg",
  "key25": "3VeFC2NbjfiVCyzVe8CtLbNMkoZ7G7HxEAdBMPZw17CBAbR8vEmHaRbbMdZh9rX3waj4cSPpMMDMLy8hL4vKmiKJ",
  "key26": "4gEcNT3wKhMUzuo3qs3JC6U2RoXyPiUFrJAkN7ZZkjeenh3bz9FKXu8H8SvBbCDYztfrWMaXZVFq8tHic4HSm1TD",
  "key27": "5ASmuHTiSQnU1T235WhTzKYSHyVY5o3GRw1noCiEWqN4XpWDnjHFjKQsHHkzJ6GEVtLc58C1VZuvPQ4BERLMqaVZ",
  "key28": "3Qii9P5DX9Mw48TUBbHUrM91eRzKEMECxEkLHE9SsRkoN6V4Wd2VC6X3k6sw6pyovbdD7u4Aj5wtVwi1fBMdvXNn",
  "key29": "4kiHAmsTiTimxjHMeCP3u6RHwwZpCV8wmqqDJm7kJWDMdLVKRKfhLUbnhE2DnsvuDtLDuNxhSFNTyG46nEUeaPBP",
  "key30": "4xkV8ZYt72RRTMvui3qveVegX7DQVy93E4swf5DpcV7SwqDui98mMpMjHFs4cdj49738fyEs5TpfK97WvWsn94ui"
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
