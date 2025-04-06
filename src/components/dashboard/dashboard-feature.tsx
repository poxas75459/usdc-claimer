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
    "57ey1QJbnLuVZmUBpaepYE4Ne9uNcqBbhMQ1dWsEVjEuNKRJm88BzjbqUHcycn4orn6GhYcmvUgN3kmJuRLBdHL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ir1tpBCq1ZdA1oU2S9UTxNbW8Phj6GPW3gKnhXi7swFNmpRF1eas3VcJqPchEBATdfTiypFz1yay3gPVsjN7LZ7",
  "key1": "vXEdcpg6r876diskNG9ppCtiX6KLVDyRDZrchpo8CYZEvc1cRbw4n4MsRsEbR67q6NSoGdynnqhzU24xAYXHXpp",
  "key2": "2y2TtcMsW8hWi7tmkeZAi48nWMHrQibJLdpZgMweBfmruzdnDajJJXda6sEPxBi69ZNPeFfYyAwuhJ46LhPBoU37",
  "key3": "3zg96qHht9z3Bq7rDk1WqaGXDL88sYRMDmPAbZHKZLsEWTGeLKE9ogHiuFQUDNUCfbABCjHGLMzq7ju95vBCJrP1",
  "key4": "5F7ExBHbeMmPexAEHrfzdhnZK4ozB4fP9E5eD6imzSRvPAchvZDtFiqLrbYeyFr7fD3CAoeRw4KS85sFWrnaTYWu",
  "key5": "5Raki3FagMAUd7RmG5ScreExS4eMYNoL62JHhfs8CoFFLHnnWcbLrnMK3KHJHjEVck9byvBncL7k4L6mq3tpGDWu",
  "key6": "4JhmQU4uQgxGq8VNW3yKSM6rYWR4gmzEDa4aXiVswwQNJ4XfG4Utb5Zq9asbjvEhNWkvHwTvrytKCSQ7EeK9E5qa",
  "key7": "5cH4s8oLZy8wYKXuEjERReYiB1Awchs5MtXiximgibJbcXu3xoFRL97qXw7PQWQXKDy8DNoJ57qzehgZYfncJJej",
  "key8": "5SzhrTXfBj9cTVBSGyaHRw9NYAnL4qX5yAFLpyewkpE3pXtpsvXonMNWrMxtBgUtSZj2xDbLDM2yb7dU7Xu6fLud",
  "key9": "mZ3pL2JzY8NSey7Sve5vJo2CcQKLV7fpugxY82HYwpswTcTNTGTnddcn7XxqZw1sGGDAJ5LA4PrejPrCmbWw4Q7",
  "key10": "51wPoWK2BmCAL6hQbeEXyQcTmnjg3FM88V4bzCjF5guf4KNchkzVkWsab3DpjDsuRS41Namd18UcPMrAySqyyAif",
  "key11": "4qiUqzPL7dXpeBL3aBmixcifJeikPbsXHoEh17eLPAqnVXjkxH17UCaSraZNoSd1sCqV26ChJRvFF6fqxgUyKkXe",
  "key12": "32JaZFqUfoUsjTmLMW2QkAE1wNyGUUsEx88ztieDEYj1ZGLZe8aebvMjYd32vYt5E8kBRnzg4jxZfRQtWA4s6NF4",
  "key13": "4QegX25vPfg74YVUGD7rEcZ2VvGdkV9EcYEyb54Tz1gn7qyUTXNzggZLEaTXwo8jGNERtPYJTMAbhXz2ThVHAXs7",
  "key14": "4FB82jTJoRoMzkgr8wt9YHbPYt8Ljbv3qRUj9TVjiHuTnKGiiGBmkR2zpmiEk6DQuAhsUNzfBCAXJajuwCs4dD6Y",
  "key15": "5UQnNXdNuoscd5nXjRuDkdjwLruzRzBM9PoxFBf4hhxvQtjZW6uoEm2Cm1nuWUT9e4NfmCQoZ8SHXhQCowrnCDT6",
  "key16": "28cyr9ipcxq4kQjxcJaphGuufFyQyM4ZDcnRLF1UG453u8bw9FL5xxFt4rAxK9HZmzsDccYP8yAKoaCGR6mrb1cj",
  "key17": "2rBqK8vmavdzpYhSVzyyZn37STruoxMjQS8rkjhztfEYcVsvqGxzSJEWsCRQjafGNKHW9y2KbmE9bSPNMEZgfJjv",
  "key18": "4K2Kd73BCrnV3bSeorJZujY1zJa3L2rPdPoCjhXxhBGyk2J92645hbNdmhMBf6eXz6WvYCRdaDmGeDw3Pp5VisDM",
  "key19": "5Naz1zCMGm6UiNoz9TiqDHAZPaoQiWhhqt1eUsnATkiVeK7HZEQAzcePfrM1Jy53rVf5Xa9gMBFdryZMZpDwABMv",
  "key20": "67gwQKif4GDFKBREyxT8YSXZoTHsmV2fBVezER7fV3LsFUKc9FrC9nXkZ7Y8pw75wiY8qs72kmN3xYiHGujxu49n",
  "key21": "2rnxxWPo9ZnHx9SRwmejq6AJEQXw6XcRtRKFV9dQJUTFb7hUMMGuhEDTWaMEsGbUnDPofUBpynnWxK1SDKKiaHNF",
  "key22": "41smfo7YYw4J9nNS8BZLL3SVb2YWvU1tRtrXkehnASn9EojURDWzSxHUny4GQdR4Db7oJqrx7d7d3CCN1E2kDyKr",
  "key23": "4dX1V6QM71D8yDQWq7iy9ppme8vuKQXirhxA9VMkYv37GXz6umZSjU4AQ9Z9FN7q6c7fNmpXiHGTTYLTk46sRXLf",
  "key24": "3hWpq7wJFpSWuzafSs5roemiSHd8GwRSE1knTbD9e73iFYarihxD3rfxrSbwE4qK4KbjuFWvS51oVuC277ygGf1Z",
  "key25": "arwSLXkrCvvVsigCYXxEzELXuFwXQP5yeMP8Yxv82f5ntQk2rLARCDfZjjTZDqMx12vrhwgEFv78CSmmghWTzNo",
  "key26": "21zCB3qt4EZaR375dz7WvuCRZbQnAtg5cYUbWzE6pkyEoLVKabxFyzu5irYBsXnp9X1RfS6eYJCUYtaFHd8VHjDh",
  "key27": "53exZZraoT7nSS5Bo5dQPUy2ciRmp6CXP3xbB22F2dksaMpSNk3BaCsLfxpZNzrw759pQQNeMKs89PiF7C1NbwLo",
  "key28": "5bMcum75RshCv3FyCF4mGRU5vK82qSMmUvLjewPTptHNnbJwcUr76LxYXyPSiKn2znvFDemjE3tunNE8a1WVNqqH",
  "key29": "5dBnFaUE1cezoTChiSsweTM9TpCGz9JYB6C1CvjaBay7x9AdNc4ptpqqbbSkjNG4y3X8YzSLXfuAqzQURVuJAB7L",
  "key30": "57kMoMdxe7MXRPhwiiF83MdVGmxcvwzjRsMX7Z9Farb7VYUpezEvGP1NXmu29TgPuLkxhqEe6mhH2uR36mdLnVhz",
  "key31": "3ptijdiWwWKBuc7HqENn1UFHXzKmEtmtnddm4SrJrThn64SZxgvE2VvJrLBTL8mQESfgisLrFo5mGa5VFijyryBy",
  "key32": "2EXDMGzZ2m7TuXRD5ZE39c66N6GipqtpXRLWvaMW1FpfVSqr95oCpdFyYT7zcebpWZmCw2keSUshu8kGY7DsVt5Z",
  "key33": "55hitKgSSsE9ayURBH6smG8mBVQNs3mYNiZfUwx1pFUULvxQQu6KQ7dRqYzpJyJVQqQZTgwN5sZJcZWeKVBGSPbP",
  "key34": "5BkdbFqLBe1ouSnHMQKE2zQmcKBXmUkaA13jyFUmT8KyqxfrGv5suVyVwUDoUsDvzyKZVqgNCrZd9TPzdfBAeHfW",
  "key35": "5jM4Vr2EVNitAa8JVjFyruCLCWDt1tw14s8z5p8c5Aukvnc9Q3CKbL4n5CfP1Qabx3kHhtXjypMg9Qs9BZt2Kkcy",
  "key36": "2mD5RgsoTUHbMDrD1HZJjdddEhwMsq4UmDLXvzSSzXYC51usfTYs3Xrgwa8b3S9cNWUwU38FUmFCrhQFZgSxBb4F",
  "key37": "5WE5Vt1g9867NBmX2tAS62GbGNyMXkxg4rcS2Uvc5r1DFgV22D7rednLBHPGh79Pnw8iF2iUWT2WEPb5sd96VAb7",
  "key38": "cRXhVWHYcsyquLM9RRD6EdvM8MpHQfRV8U6cwZEJ6VmK1hHHrV1qP5jmaoLZaG817eP8aWC6esjSy4oALx4FG6Q",
  "key39": "3RLqqyupGhwbiT5667b125LimmLBt6hr9rq8JmijAwqRUjXSNuyrjQXeYXxdoYtR78rbmk5cU2KAgwLhUqdJykxZ",
  "key40": "3TKFyS76g6XFobDDHgyKxRm7AGNCi3QzoQS5i4MFU4kB3jzTpD78RLi62kmjcJvzKSfbtDsHSoEk6YfFq9RM3QrR"
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
