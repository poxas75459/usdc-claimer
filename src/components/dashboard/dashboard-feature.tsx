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
    "4j7y3UNzNSgboNuJ5Q1pgYxjTYYgUZ7RkhZ4tdVR66b8hmrzQab3cSHxshRZb8mziEjdMH4bdwYwtUdYz8d2FcGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7TSFGGWSpzfK4gfowyESfkQQTf9guDrsoXBx29teGmgfLC1Tf8ZwEsQnaivbjs7WJR46TwT82nRC9DEjfucA2E",
  "key1": "3q5x8XbNt5ur4R2XWt9w6udmf7if2ED2c9GvaQsTCCsQhkkckNLWie2qgTpVvCToXtftE8XU6rY6NAr9k4ANeBiH",
  "key2": "23mzgLiEva8vqkpFE6BXr9e6c98AkoUZL3zZQFrBfPWTJsR7RP9jmeJz5B1eNwhvfBuBi9HaTBLq7vV3aUW7rxeY",
  "key3": "2tvX42QPKcA7YKZx8rJPx32KtGAaj9gR5zuBVNw3NNDsjWYTh1MfHvMHRLbwa4eJX44cpPDBAZoomYyWcLG9oTfm",
  "key4": "5foh5MwJTt4JZnZDFhKx2CamL6gYCqL3biLuoFxYytt4wpdtBtcigd9gEquohMFLJ5XYb3fbi3Jiw5AokGKj5MwS",
  "key5": "4G9B1L6wrTECeGfJs6iCJutYb7icQgeDQK2bu1WcsWkTdy9z6dGoC8HbPcPD5TpmJrTsW6h3rtq8JndNjuouSs4k",
  "key6": "hhhFwSm9Je9SJYdxQGmq7Rb5AtHRXQW5pA55Bk7Gm4dxPHCgkUp9bEgvitRC6aE3ZYvuZNyzeibCjrcYhaUt2hA",
  "key7": "4NeeMBUkPdmWuA5xiYq8JhgZ6jjcCbQVzSyyc83fdcUMtJ7EL2evSdaiQ2BV7xJqQBGvVrhQPKkjsyTHsKLq4qjj",
  "key8": "44EPy62RogNp7GTaJep2w57j5RkfmWXKmBRKpgZCNR76kebhi8RfzcJzVNk8Pz2eveJYQA2CBYHkiW9tvnPcGUaU",
  "key9": "31cuXV921x4zBoo4K2hRNF11pX3GBGZATADjcY86DPp4Shnx9FTkcCqfiMFRfhwKYNUEnhvgPNFS2ccr9mVA3Gip",
  "key10": "66ogdwyZQsWvuxJjKWtaF2sfhAto4kAKjvoXZFiaQq1XFUGaiJ3sjUcsUcUun5Gd1r3kfrJdTGX55HJj7bGSiQEW",
  "key11": "55SvFu5hDCCFSdGzBVvnDFwFMtPkCnd9DUL4LrFuwe2utnfqE4o89M7g7AFK6s5WuddFacBviv9SdfarjwrJzjr3",
  "key12": "4fcwQWH9GFQpivdR9QuknuVg7nhRuEJeoPoUsmBLa4V9sEdz3QhjrW6ZpKpAi2YRZ78Zh8ovttrUZvEYRZr5HGNu",
  "key13": "5YsmmVre9NkX3XhMFTPz6usoFauw8qEmSC186STpYaX9iVjDYaXoT6xYQgt6fJcRG7qwtvPPV73bqPJujy6PvJVv",
  "key14": "39jcwNxykvfauoRGNMxJjFGvseLcxPSfCCJwGgXgjuSkPRyKBpmMwczuVW7JDvQLTpXuDGdWzLHj8XTqydreLVwx",
  "key15": "2nMGSKpQphAHGza39jU6XcTbLMqC8eZgy29FyQpxh8LWJYSmaFY54QV6smCjGvnPx1vEq8r4vnXE6cM7kBpeUvhk",
  "key16": "2qcNj2fRTCCccA9iauzqLLiwMdD5BhY31dUGkYzqCghSVphS2XdVqoGRwQSPzztouEKE8j3LHfpQ2q9ygRzjD4n9",
  "key17": "5wHXbpMQR3JB1bog6aREWmWKLnBkRCoikdqAUoumVvtc1sTXNZJnzLqCHDBaJFRpmANsGQnsq8pJhN2cEjVTTTRL",
  "key18": "BmwsnSDHq25TZEuxVVvuednaGawgKQW27RJQGrorV4WmzLJRa6rJDqz9SAEZ7GT3dtpF5bUMtzPC59hd3PVRuVs",
  "key19": "6UhUDG7ToKgewDMz1fuTkgDjKkZN62uKbxh8SguKRbsrzPKnBuaztivkntfSbxQcCS3R1jjfBirHNJXigRkJ8rP",
  "key20": "29W9JnwFRivFhyMSZJEb3zrEgGUNhg6F4VVwV4KuxottxHeEEczrsJrGWWVvqY8GfJcrGDVCjiXvkf9PJVgyXrz7",
  "key21": "RvaA4wZyRctJ2zCT2HaWvyuVU7S4QHZQAWgYe3tLJHEQngbDsJHjzFpxYRmC4qGHweQkEdrYJn15HbFKn4Mcb3w",
  "key22": "26Fg3HScwjuLrAzeaFptg1mTS7UwtLYTJCq53eMyB7PJM3s1Eri93PmGHpDXX6KNkp9tktNYzmohoDM1GpBGs4mN",
  "key23": "4JFBDkrfMeWMdZRhZgiSmcCcUpdWByW2VRKoQZgvmY9AuUsz6ibk8ikhbRNaTKcRLkgvCkTutuYBYoQAK33JFSjk",
  "key24": "2HKasYCrZe34G7VgSxAYWbsVvhTa6Tkc7bw3W4kHCqQvdQenaxceEpMVE4b5Uh9g1qXQgXsL3epxLA2Nd1bGRoh",
  "key25": "4oL9C7p46TV32a9SwGABdmKRZZDYmXpS18aXr2gkrL8WPvfFQNjBwdtJSa3XgZHP8oWzDfZZifijqrEckCb6nUMi",
  "key26": "5MYnBhF31caw6zLCJVPe8PYXn9JiAxuXxMKH3uBwLoojs88FEybGxDcLCf1UWohZ64KqW6jjCRQ2mw1iYnc69LL6",
  "key27": "4BNP7RrWp777GHtw8MSbMJ4APwYFGsAKoag3JNb451mCixcSTQHjeKxVph1RwgNLX194qn5czRgzGhqbpcUsSdqv",
  "key28": "4SgGcAtUCDwU6EL2bRWsyPCMTuZjHtTWUFLetEAmfe1QDabxiv2mMD9EgL4udEVgP7V9BdckQoEjVScFknnkEFdC",
  "key29": "48oAx32ea55WS1PjqhQpycj9BLVQqxX51zn5x2FRQ6KY7BtnBEThJcThY6TKbV13Maa4mEbV7UGJVS5XBHQNvVKm",
  "key30": "AoW27HMukK9FwkmSotmH1L5PJ3bJPv3RHA2fwiEgLYz8GHFDUctrjSbgEP1kDXH1ttdqWmmAKZhsAcHsfQey9EQ",
  "key31": "2UWA75T7z23Pxjz4j5F9iEb9t5fuiMXpNB4Mt3Du5fQbPLSahtzS1cwDUuZdDrBrYgXQfXui3UrUWzL7jFyutVUd"
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
