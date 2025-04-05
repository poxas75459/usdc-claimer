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
    "3NCjVu7nQ9aHBPEEBSEYdTWXBtYTjRDgZM8cpLb5viDTgRxV784dWEGoaCMSVwxeuohCeW4cpUTYJnZg4WVpFyG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZyFvCNmrRcWM7gPKXABHS6FTEcjQAUCJp26pTFDeKxFuZHZmztJGvEMgeCbM76JTcyDE7EJymbaAHQJUDgabZ8",
  "key1": "3F6HM2XyzzzCSeUtJkFwy31CDpMz1grVuffeVZ7dzAg4iyX4bR1ooKbgr3NJS93163krFMV1A9FNUkT6dEczL1wG",
  "key2": "2zbM9A8aJVWS6NJFVEQJkdKdx4jSWoPkhDECFSZFWzRfyWhPpe7VCHftxag7UkP4hg38KTS9CW4tD489pkB47Y6T",
  "key3": "5DUqZtMSQeGGrzg1HhXndgFW6ifwrQ3rymwjvw7avdQ2TXJnF7ZRwsRPqLt3qCwz5ZATGuxUCvyAgfYzrGjsNExP",
  "key4": "2hQeBrekWYYndc6CMBoC2tzgPXKf63Z6JPhqqx4soG9kh1n54euiK6mPySdn3oD1j8cy86tm38zS1dWRoNvADvUY",
  "key5": "4LP4vo5itBT7omSnv8V2Sv9z6EKeaTkzmGj9wYkoTXKymxnnQwbQctR2Z8dXFr9VPjkqX9vYJzrne6sbLVEd8GR7",
  "key6": "398pCu7WqzVf5TDaXxhKb4jVpcvB9d5tnP5Anr3fDnA3FJsDqoXf1B4ddWjUGNvs6aUrA5FoJ5it7ZLirjKR6z8h",
  "key7": "3WfTeBBayXev6zg476JVSUnm8QZMwspQWzEeyxyMZAgAXuV1EjcxaCMv5wzD5wsJsbmQs9qBCJmutLAY5HqK1Sr2",
  "key8": "Va5hVoXb3FHu1FfQ8zx8cMs2z9TUDvmzrQQpPRsPWWkwL9e83U2kuPzsMsYyTW5AfJ5wWEZjQx8sqKvT7VeWAtG",
  "key9": "4uGJKzM2vZHqT6pezfXH4K1rhDGs1YrVrnevJ4wFwEMQpBtGpRWf9sQi2GCtnrRaqYXDW97LxFGoos9Us7UApsjE",
  "key10": "2EnXsBFWgvPHnpZCDNN5P44W6RWbTwzSqLov5JhsV3wVvjnSmf9uAaqCC9DJiSKdvgaipvGnj22x2gDqT9dcQovE",
  "key11": "MhFgeULHvmZs7u3JinPGW3Q8DKtwmybuaDsGZsPWv1y1CHwwHJSpcvt2fV1NH3xjUcR8pmWRmDL8UdvnhxrN9QX",
  "key12": "qfbc85tjNiBpKdUzdkEsReCsTasfkdMCkDTzipWvTowuqR3XNtLAoDGyRSYU2b1QNSpUCjocL4sYHb774tHueWL",
  "key13": "3WxYzFxvxbuTvEAkZF24TnzKptMeAb1TAZFFgMiKxYfVnbsdBcYfPpNiNThn5oct7CZbDRCJZc9VQ5LCRcqXT1du",
  "key14": "wivjZBj45ZGGub6kssHDJcFokeqvqq8X498aEmENzFXdHpR1BiC5YERhjgGoFvjYAzCt35LJafMLo7Gnzw4s1Ci",
  "key15": "57boERXaZqwMbJWrvY7HoekK8TPseZoGy3zemg54odKPcvfVRkutmxSfrrP4JAEAsYW8mmbJYPuXQWVTFDPBptZ3",
  "key16": "4dUCed1252sEnYoD2eLo3s7Ee3f1dLzeuiqdukYNSuVSPCetTZoWz2acC5DAoEjsMtmPCvwSCuqg5gX6jYrkk8oJ",
  "key17": "5gSiV17D6c17bo5SVYFTdwBU9azjmnLqYz1kv4FwgfCeX7knpEvFdwNFsXw1JshgAKUT83CQo9fLs99JgeCh42D7",
  "key18": "4J3YEbiaQQWXDSXQsDxiZpmraLL9yaBfdPVqVT7usyJ5NvHmFTgkS4tjSFGthm8eXnF6GkHyW3MLuPZYsL6hn8o4",
  "key19": "4JDFJVAqgNJC7CsK7HBhUbQyKa3HJf1pASPYa2PRqDSNTpM8ojc2v5pnE9dvrZgfJK9xTiPpcg7nrDmdAQEpAuLj",
  "key20": "223HzDkDzBVHVNJRTDfYyMV9oYVL2NzJCQT8yMboRzC9y9b9foT7VToVXBFWj5S7wa8F1BzN2R5DQpvN6kzyfCut",
  "key21": "5qP9BKZXsyXs2gY1uqRVygAyYymtXjjzRvfEg8FC3KzrdAujrFH7jmeNJcKCQ2XJxFZwiiw7xCV1YZ7EkFhHGDS4",
  "key22": "4c4kfVvMCkW1vmVJ75iG5MKDpnpsXj7M46X3jWCyA8eizDqsc2ZoEQ48egozcCo2isizXFCssrehJmamsLiLAD3A",
  "key23": "3kF8ujqsVaz6hLP8WBtvX2oN27bdvSerZLhAs36HvKGsfbZ62uHE8g5wb9SCmAfUrLzj9zfrMvRHiZH6YTdn1AJt",
  "key24": "4WtAZNQ9oQ1HWhVr4DPnayqppsa9jGMeGuesfvTZmLgRDDSkxHiUor3iC39RTSg3PVopBUhTp2XsMyDgijfqqbwo"
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
