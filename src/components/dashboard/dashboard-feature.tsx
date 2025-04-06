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
    "2QbX1nbHXSyLJgAV5FTQWZ8qpkGErYjVaY5DwBnk1tyGZEeR9zTQt7i5ow4UG4h2iEsiin9duqBPosK4QEzT2A7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2em3u6ueGp1ymtwwA3CRn1rQtKvJczhgdi5bKQxDrpqXmucxsuHh3GZ3rJatZeGRhvS5YiKMG3QnJPYineC1tU8M",
  "key1": "2CRrFZiaM9hJvFKDYqBrd32sja8zDBNpNuCoVKWmvFe6W3QGjcKCpSD8GVawzfXZJkCey7R9MLurUuDtoTJQ4nva",
  "key2": "2MPWkRnr57z8eVW7uHMK9Em8vExhoRs6Bqv53jWD5s21YKcuaXqPYmcUAhKuGRDgCQcC4nasJxcVR5Sp2HBFFQvw",
  "key3": "3RsUjHPZGsA7Y2C7qG78C6svyzT2gE2Rqmt4TygRxYrnbv7AZUxAX5dw4y7dWQEWi4hYG472dRpzpf7iCxSiSUCv",
  "key4": "2WZe6eAC6p1AgCz2uz2mv4MtWTe9ogNEjTrvTWq6anHygSF2cPvpBRXmnGHdhZFR6wbgh5efHGX8pjP3cWa8KKVU",
  "key5": "4CJHueWc9U98YQ1zScAZgGWXUFCefxQBEAhWQLmLYH2KthXa92EgvTJf1Gh9gg91nCveocwydy8Ai6osaTTRcowc",
  "key6": "3DAa7y4oaCD8QU1RtLNXNN2RiyeDyfWYvmXHzsWayh614PUCdaM3aDd2USndkMFoPycR1PuUWVG2LsFNVuyrZbW1",
  "key7": "3G75Tqbt82AceZbXk7xfxeCt1xZ1r43evyYwp1tRkuLGG6L8ttu5LUcXLGp3UiisFAYcE5VBRrhbUm5wyztxECiD",
  "key8": "4hoconTAik9Se6WaPE6SfTuytKygZQFxgvRkuXAAHLiMGw534y8oqhoZengWXJtjdgajRGt1L3azeBiCJVh6zSr4",
  "key9": "4yz8AzwTaGZwwoDTMa2RZERvCYy1m29ApupU57UEy2C1ZNMSvXpyp46ju9XzdgoPD9Su3Zsjx88mEUdHM54iYZaj",
  "key10": "4mX4Ppcw2aQ9Mm84Q7BCMxjYM866RBNBUaQtPY23ybARhJcuRTjemhjCRyiLVPYr9UW8ykcfN94dniwtpBJMwy7r",
  "key11": "2AQXRZgyUxvWvCtfS19MifzQgj4TfBKnD4fxeZkHjRWhvhu7zmuRg47m716ejjApBYMbW5NCPi9A8agN6Pv6YoEK",
  "key12": "4owU29PmoksV11m3TxUuYTkFF7aP4qn3aVy3cEaHZjkFZKbZTtdFtyQTG93YNXbD7SjaWouGH7YVBShemaLu9ZAe",
  "key13": "3G8uVB6jG7a4WbP8ajfYT5GyQ963K9Lfi58RjEgRyXu7bZN3VTzXXXPJcz76T3RgfecwqHxs92MVTBVdsXx59vJZ",
  "key14": "3jK3cnVDZNmesUk2VuCVqmfka95FAAbrE8kNxasS4xyD5yWFGpvYFKmSZ563KJScMaaDQBK5hJ4uC6VPhbhDXC8r",
  "key15": "2n5A7QSavC4UxutV6LTNqhARsjsQmkaDb4ihBMDmEVK8B4CGgfSHsKfF98TaAQ7HTwfrdpZ4ghvBBDbogT9HnX9S",
  "key16": "3YtS3aDZq5Q11Ha8dg9c5HuhWU1qsvSujfYB9iaH671forzdPEVtVz3U3ZwAAGyPLV3KGw2eNKGVRixDnautaCgG",
  "key17": "3EgZi9XA58TwuCdCt6cVZt4T3W4vypHsDVH2zvYf8hU3ZvFzoJ3mjYkN9CQq1gR5x3ftK4k9SWoATjZ3NVxgHUCm",
  "key18": "47TCz7KQxLoaob28vUoiKqVoJ4YCEUf828aibdad1gvUhdrG5mcXjv9hYebQCeUCrwBtHkRkKTkqLKpfcuFK2K1X",
  "key19": "2EZMYcCoRSipT2ohVpMYZMVtKHwhfxxh7t9NwJBKU1RWujY8RdU2wsUWuu1CgFqoXSLYqPoJ59XQBYUg2rWA9Xpt",
  "key20": "52Bg8fiGTMNWFaFiZgo12XUgpL45iKB3UomLk4E26wdvwQW6HecA8twUkV3vfCMfYwuAYXo3FyzK4EzMsweaf8Fv",
  "key21": "2ZeVJHYTRz7iM7wMWjdFf9iuuMdYQ4AxWverXZ33b4wyonL2DR4U51KpMbvnoywNw77eVJo6ngCRb4sEP2Ep9tC5",
  "key22": "Dt7p7rZXCr7RYNjVGka3DDvFbamo7twpikGNAs1aKiDT65AtYwaWY39nUGFXPeZzCZ2ydwK6teLnhsB8An2nWab",
  "key23": "5qphFz6LNdAmRFU5HCtAst1L4TbmnFqfdNR13AFNiquon25hJyypSQLbcBT6FXzdDYvZFG9kyFqjJoKX21mzqzEh",
  "key24": "3sZYP3ZheccDuY4naTkPczArscE2YSfwzMAuoF8mM2hiVapJfU5LS7jn4uy3gjsYsshzbXZEECfxbZogapoULVXd",
  "key25": "4zpAESW69iSAybFRUAp7FmdyHde3m3axRaFQqZXFoHPi1vsGAKF9izPijVBZzFGEgJ3rtvcjgGibGWTovyTRku8j",
  "key26": "54Uw2K843hXu8FWCQa7KXHE6mRheJW9Gnham2EzUU81dCHNfF3YQ8Mvk2DQSENHNd3dt6a7iRSh3EY1Xc2VXoSrv",
  "key27": "xMKgAZQYHNxwxLRPZtksMz53kwYuGVKRw6WLGPFQAr1VkT1iPWn6bFKSfVNnavC4AUDNVymRHCjhPPMQimZfhGe",
  "key28": "LLAEng6DhHdYepQ8hYxJ8aji8RCbQusKDuop9EDDeNop4Z2HH8QM6vKeyRrc7cqHAt5Uc1gVT6hWrLNBbb46rE1",
  "key29": "Qc68ouZHFdoSXUCtYVUgvAkSzcLTA4kBydyK8ciT4K8bq4ADNesF9wzoB1wqyy6iqfYgMKNqJNub8qbdQbcWiU5",
  "key30": "5HMcp34x6U3NG5zbFgbpUC7t4hvBWR4zbZ1T6KrQZ2buxjmeMUVhdcnzsiSMsXzcdmActynNZkoh4e2CzR8LRmJ1",
  "key31": "38wCiB9q5KZEVJCzGFsuc8fhGvyvbvqDirJkypRXVpYhdvYBpozPMdYj1CPR5boUddhdZgeLgjACtav3C37dkCWQ",
  "key32": "j7cq6wDT1cAXP6ZmHYQdNVZeEXmFJiPkckda16WJLug5JYG7RxUeZHNQ6qNK1RyRbhYWmhx2VXbpFgPRbtAUkCg",
  "key33": "24GNtXobHihDFRQn133dyr2dDeCwGTxRr8RZxh9AywoS4qXKjtXno5QoKA3b42cnG5opZWLGveZuynZzabpatHct"
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
