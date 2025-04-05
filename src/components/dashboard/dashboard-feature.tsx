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
    "5S7xtXAFxJE9AySWAHC7ciMBnHJVAbXSB2HSWvZz5QtFDHRAESGWxqAt5xAXRjjBAg2jxavH9Tsrz7epEpYNZjfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a4vq2HnN4bz56B8UU4YHnhomFEUZQ8Qy2x89qJ8v43ZuuYMgys52P83TA7pBeQzyjtPixgH6YXiNpqsAgBa8bo3",
  "key1": "8YWEZGQF4QQ5psikB3NkrVzUmnxXdeGRsXFgDJj9z2bRBbzNgLYsXBrZbRRr1EXYYqRUnjgofRhbFnM5bzTBbfJ",
  "key2": "2NJJjQd88fXjyDvNyYQoG63gubreANUFKaS3Kaa1Ye1c1z4wD5n2zHKj3cyGABLo8UXHiKJqNhGAcS4J7xAF4cuX",
  "key3": "25nzxCoxsrkBgpUTAAQ7pkUmCZRCPPmfrC8gVXcUhpmMPtWeTyCurfYCi3v6GYdZnrJaaizseVFQvzXcYM5tkLTa",
  "key4": "2XfRZPFhFs5WJG8tQhvWFwVRUbV6WBbMMXqeqQMUEo1jud55pV5s9cE74B4skRHGAmggBtjAeYYrzRePBLhuNAMc",
  "key5": "53n1ycEhXvcssULiZMH6b1SbZTuFUikHLA3kXVfiLt9syeqnGSk28cx6dCw8WpgwtpjgknHgSJh8tCnf7i9AggPK",
  "key6": "5jfGgXQ67NujftdxQPT6i3Y85p3asGA23jn5my2sMmJZqX6Tq9sUWvt4ahfAopyxCk9cwem1mUsvYpdebRzVTJtn",
  "key7": "32njKo62X8DdHj9UNX46Wqe6wGsSFZuZ5Bp9cAsgsV9iKCfizWxBFRJ4QFST1nMiDj9RWd7LZ6Te2s6xP1D5bn8d",
  "key8": "4sVhAAdYMBztPQJK7JiogEVhysjBHUTY5F9dbwyutqXTa3jBR7PbCPYiAyw9KYpSoKY2JqymgofHgBseu2dng5zJ",
  "key9": "3Qt3dMKdg4xGVEyghS5593ThAeJNNAE5twYpUxNpvPaXnpKVAGpN6VJRnTjSk8zWFw71HA3nHDzTELAksHebcGEL",
  "key10": "hf5bAppBzcHamixAmvkmUUSirnRrrCQyoxRdmt7eUpUtEuA7PEJShjSZTdrNDDFoYfvrvdEDgVuzF9bNLPQyXPp",
  "key11": "F6xBG3UadxPWGrGRJGsMksR3uLLezVw64wGPPsHHL6DTw53pivN5e4vnWvVNpK9Gkhfw4SHiQfCTJccnjZri33h",
  "key12": "29XRNQgXf5kzHRQb7tX1aQbhXBhEUZMNJST2byWDmGpEDuJBKMCQjRXVfCXnqst8uJvphoAyTraekXV5awmoaXiH",
  "key13": "3CtRX315rKvvgT8jPQkdPdien7zoBpf9AH7ynnumxgzkCA9obTfonVoaUe8M3w9iMaaW1ux5dv8qRfMz4cs7PLX7",
  "key14": "52CqFJcRF6EcCejCS8f8hUhx1ige4J1hGrvsEtHYqZ2vNDVXwkpJ3BqM1tYBtHTrkCddZeFKyX5JAzGmW7myEJCW",
  "key15": "5o7z3WNfNqjsMZokE8vKkn8DV1R9RzBee6kYuzmFyu8nmRxtPDx6bdFRLw6uFQLPM3QuLA1KDkisFNCf7moAhgKS",
  "key16": "48coNHsdG6GJyzNhhREv7EuuFzrWSDyXVKrdw271N8wRCQCQ5Ym9iGkXWejhWyr4VYvwog4fZTfqeZFx2f3UC3vJ",
  "key17": "2JQTxWByMazwpGtX5SdhcAfF9q4PCThtxNAzqTsWHYcJrSwUt7e5vTY17jVKncYXQZzu7HhMhwm6rCBQUC3hZ9PS",
  "key18": "XvqW4P58Y5FnfBsX5VnMqPrdAQhzguxcVb4yMh2Fnopm5eeyseeeFVcurfKg1dNPrHy9H5XQQfAVsXnNsXo6Qz1",
  "key19": "3HvhUHtEChPcKVr937YzZx96SdFGDMVqVLe3aruKPfsYEV6NF7zrRcrTrP1NCdZKJ43DUzUTtHTANqSJo1Pnprmu",
  "key20": "eZL9uCg8jEhZPmBWPRALFaVqKmidYRBNz6dLx9NkpYDVNCTMfBAAd8uBhRBqget4HXmfY1a9Ae3NGtmLueCLC5x",
  "key21": "3Pxpsba23TR13hQ1W25s6vv44YDMZKAcWT5jn1Cn2aYgpSH8GVSvAdjMk6PejrJJS2yc728fUP71LvkFxjdGE8GD",
  "key22": "5joqYsyzEvc1wYQacxB3CqLX5nxgX67Vo7hzCefrRUPa3B9eBfbRnv1ALcuVnJTn7ntHuX6GfhbsG6tkjE1oDD8L",
  "key23": "3giQJzL3hT5U1ZAySmMMUanLoCiBTJFzDvJhDUK6BDq1WroEnANwutPfWqYM9BkXdeci26W5YWExjLognnzAUvxf",
  "key24": "3Zd13rntxBjrzWkMaLG6DKndowHEy2dxSwZRjHQuPBZritkKC62izqjeASXr85z8UHdrUynoWiyjqehs3w4Qdw5n",
  "key25": "5j6thKZH1Ay14JY1V7ZVsu1pxLZxTtKnHjXCsa2o5u1iUMAkY5JHBrzkWmctXwXTpCJNNGpkBVXmCpJRDfapx3a",
  "key26": "2bJtmvKLafC7SQJeDYnv6o2j2EMihV7Q3B9mYgikVbwk1CDiddEy9LkwpS9U557uMmNRRL8umJFqqdqyosUKjAdE",
  "key27": "fq6CpDKsE8t1AUBCKffT1kt4xMPwMQRvu26MQWJz4RjxxgVzWkGKPuARXAXdx3545bzcYu8ztq7Uv6qwf2oR1fr",
  "key28": "5osikfkdikdaTJpmkFgxFwMsF1k1B5DqGDRxDimfWrageNasZKvwRpfggPDZz3PMrpFA6pEdLx89yTJxTsZFShQn"
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
