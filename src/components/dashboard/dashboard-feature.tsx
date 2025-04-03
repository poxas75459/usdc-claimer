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
    "5rWaGT3r5KUWEAm7SyNPSefx28ACFrnxmTW8tu6RoHwkCuA84JzMZdp7T7vP5eRJ5UbVLDY4rZfvkQ4ajNqTW7k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbkogMuh61FQxTqvboHMQegJy6ZRmj1bHPKm2kkkg6jQVMrpv6vUMpPZPN5aHiUexTPMsqpoLSJjB5QWX6uQosM",
  "key1": "2kD57Uap7B8dDmLsMLfEjZRBucoAniGAQtEU4R6rKtxGTtawdMyMQTNrvHoaX8eVzRsBgxf7gvZcczftSyLbrTH4",
  "key2": "3NagkwLhR78Lpq9uRfNbdqqpdNoUxvPcfDmkGWdGwxMc6z1fPSZVnnBpojDj5trNT1FKRnpPfFCv9ZfVL1YojVcQ",
  "key3": "4MuuJiReQv72EMUVNsbL61XRVC3TQGkFsAPwT6Hgpf9CxhbNfG3FywxCyV1HHugWJVcx4uaaXpHqy15CQbUYeC4U",
  "key4": "5ey7TkNnPm92xJvkqkRNEcxJv7TNkASdGxA2H5ejqQTcZLrBx3YZ6EowJ4HXrJ1zycRXNB1ToTK3VZ82VTFK26gU",
  "key5": "58bKo6F2yZVQRH9JCvdCmNon4N5MaFUR5LHZVRqQ1pRSjgayCjtxqeXnM38cKsRApMmUgjakYfMThdaGhQYJ6vzi",
  "key6": "28vLq1BSgX2mEDYV3tpXLskjyVkTF1hzt6LSXDVMwUr7JTYeFNvoLJTW8wyeEo4GbqNVsyoZEe2vywiyD2xFrZwG",
  "key7": "zdkh8BnepAncPfKNSSXvfLiYdKQtFs7cszZ7WatmY4YxQs3s8LhFbs5H1GZHkKDcGJ26yRmch2gDZJo49eynDyZ",
  "key8": "4a8K523wquviQJLEX9UWcwP6o89CtSqTTzwAGHX1qxUujhi4tp3azhJZ9NE6KWfrzy1wDwkZKPVt6nPAp3ANP1K7",
  "key9": "3Yf9QcGfHNCjRhtzDuVCioqrTYjUDu3bQfjXD4ZPQ3fKDUzr3vFnrjRaQV9mjYyB95o8pw8P6xL4rqYh6cXPtCMQ",
  "key10": "N9hXvRdyuHq28rZUKUf8mSsKgLCYnwbtNV9Dzwd5dLkgiKCz4vmcRjJGoDUQNotnQPoD1i4cSvXHYirT3JUPrfo",
  "key11": "3oRp9oEqTBp4NRmaXeHmnsWwGgZ6HMckJFbzuY4KTgJkPymPayfdjgtiuMuwmFREUtYmQZviZ2aM9WkCxFkBihba",
  "key12": "2MLUEsGubSefn9en6aDB2y4kLAwniosfqA5R82VcgHgJHXM3QKnFA2BQTQ6TpK1YTCawn3eEymFbLagYaAmvCK7M",
  "key13": "dD8TVqQ2bE8m4FzRAViLtCAZ8wqd7xqSh3zY461TKudEcAaEmbwE7PSBKYyqSYmHQdmQJ3Hx1emowAE6Azk2re7",
  "key14": "2HSBZsQaucE23ZPeYTaoRbwNTSxtAY3nbk2kUx7UQEbVhvY6BmxyDiJrKpSVRgAr6EiLJr8ZjSQZC9RCBhEVFsB5",
  "key15": "3Qy5MeLE3QyChzmaZYhm3U1cYU4bqsfLHFh7msjtNYEAdQ5wW4z27MaHRLkKD6YAswGNqwbS6NexWuNVzZZ5EGEM",
  "key16": "3DZtD7E6Qumzk5czm512jvyi71xuWAzAxsQWRuaZfLLjKmFi8UFEaV1XovFz4qDhk5mQfcbMF456zxUUMWTkna5n",
  "key17": "2cWXZ1JGfjrFkLVTyrVA3nnvWAJVUtLzL8x2RJr5VrhoL84apa4MWahXAGq3R5iAvekr4EjoY1ZhbsRhcvyuUX95",
  "key18": "fuRAUVzSovW89hGoXc8ChvXvALRwQoARrsSjDoquPmfJstDdUfVEq3h8Chv1cdSptrLiqPNLMHB17a9wRDNvXQA",
  "key19": "2nxZUzcNsfygrXKvfbvh3ewzNAuGQuTQxH6ptrd56XXMMWUBzzu6sha7HMkGTRg2CvpWQC9RQEKcqC1xDLVxsxBx",
  "key20": "57LiqYiXJWdW5rXBnDPHMuzN2YVzkpc24EgtZKaWsDKfPeWs4aRJgNPZNYaywSw6Eou2dGYwxcRrQ1mUbjA1Q1fB",
  "key21": "4y3iogoAhSHGLQencUBpmuDbrUdHXQvi9eEFqnJ3VnJhWXP9bDMwbbETNzZQPAoL5W3U3mrX6MBRRhjxTCfrCoZq",
  "key22": "3KeEPXoQnvoKZ6cAGg1X9ZkKFbZhE4gGMS6fZRyPGkT6BMwypJa27HTF7hzfkQpJ4tKfGuuboHrQDLKhZRyse3cF",
  "key23": "bS93uLv1x1mn31qRstExkqvCedEkM8XnPz6Uwn8PLJnfmaMbiSKKCYvDYua8KXMsCpepUbCS778sdbmpDYsU2V9",
  "key24": "4AUjE7p8ydA3eYcBGGjxuuXZusJnYm4B9euqFEZcn4BsvZZtfAJmgQWucghL5oyGWwV8d74tveMf6Z8vSjMk4rQM",
  "key25": "2mmpdgMQBDNCiYen6j32Uxz9xLykqACwFU7ScMteHEzDBC75nN1Ywaiqi21A2YuaVah3jdqRXGgz5QssChhFHf4h",
  "key26": "2Zf9oSwpWLEx4sPEhmXVTasazpeQGrvFGmqpnoy7BsDaUVh7raRYzFMVkKvVD7dyNmbCX7gowWFAkSU3XTLe7kUV",
  "key27": "4nZzdrPpx1zvvFSVcKDGiygZdh9KAoDYqLmJeoxrq817Pd929RuPZLia1oBvUwDxN3rFgjWGbXLqucXiv7v6sbtM",
  "key28": "4jFoUwiYf7NtvzZRA9QCeg2ijihg5UWdFGYsWk9UgvPxpR6GWVEsWkf59GDJC43Hd4p1wYxc8WhBdMAysNvGbHpK",
  "key29": "2fh6rwojUxHfpz6op1ZvXAvFDXGbdDPC8PTvu2yWVewamAtqFHpTp7J7qsZKGW5WeKhwJNruYxJ5HhwGi8Ltzm97",
  "key30": "3uwPPXtgvwjvLYmua6wJXkffQzR8tbjFGVi7Uz979eBk6HMrJY8oiXC1gbXP2KTn1CeqF4g49NEGAk8yZLfEWoot",
  "key31": "4frz1mCY6FGSTDinck1mjjG188NYAJJEf5AfQTXdBhZsiBSgzU6BjnbYJmse4qewxoQdqqKZpygYrHZ5MUpTMnug",
  "key32": "tNso85KDUSU4JRqqpkMgHu19YtDM8yGVHH6vhpGfurKVmocukXwd47b8E9JJNFGV2e6pCe5oGtQoLXfhDTLGomz",
  "key33": "2msgqZmBfXAzk5LmQvZiEB4ofNWX2W3Q3jxYA2wHLfptZsENGnm3PCmeY59XVANncKPttqTBPmSSGoNNMcv7mzy8",
  "key34": "2cC4mmKXtKVQhijbE1m6e37WSbvMras6hBhukkoYFoYE19HyYSJV7ffCM1DP3So4p8tcs8o7hns73ngNYsMqBL7y",
  "key35": "49MEdUmE4VrzCYgmJUQWtBqDmRn2KKe5bN4bcEqjwMvxks8hVXLJ4DK16WnbGfrN4CQumuwQvf1JUr3vVEuBLg2R",
  "key36": "2g6j4oXzht5J43dRic9aKtWxh7oHDW5BfRa42e71fG5GMwKBsn14jCRJSQAcCAo194A3wZBLatF7CYNQumaHH7FN",
  "key37": "pji2KavUBF9dYfdZKYzUGzDZmQpk3XayjAu5YmXy9SDDnmGuY2MxqwknMhxoNNPhVBnbE713x3CNFADFKowsmDt"
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
