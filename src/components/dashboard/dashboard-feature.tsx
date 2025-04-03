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
    "33NiZDEAxuPDpntedE95VYvW26tHptHKPcScBqBzp6cyfiDf5zMjUy8Eghf4vWtqZ8pKbSGNEBx8diWNjcZvjYxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCr6BQcFMAnp8Jdvhk7sSuYJnfEvmi3HArv35vrm6msKK32ASxKQuuf6en7REAAbLj6oSAqPRoTzsX4U8pxtWny",
  "key1": "5JV8Xt7tndL6bJvxC7G12MtPNhGGAGGjBhj7Y61x6k4BRRE4kuRZ6dT5GztxyAVFPvmhozmftPTwEKFz5nBuRz9r",
  "key2": "5GGxWmCtrZjvCxJ54gqSmeXzddJQKuoRx5kZh8iDEabaTF6tJkdbTZnXj5nthNq235UAswzUsgfmiVxmdnGjCLyJ",
  "key3": "555uA1LiGH4LTjyCGs6wFDr2Sh9BqpxiTTxCumy6zLcrrW4gqsP6drVhCiWJnnqWhG2acf1Yx8c8pt4nMBVeprWz",
  "key4": "sWZ959Dqz6ibnHta1coZfVQRMpjqzcPXh6d2XhoPCKdWTmBBkJQG3a6o1kZY7M6igk1PF57MWp4zw9V9RquzzkG",
  "key5": "vJHRS3DnDES5qDcKWjxfrZUsoC6pmbvZ4fTysyJHftXJDRLkR64WXbDEdxev1jCKq7aZwLboi6HYTM1mcogRqCT",
  "key6": "8ntmGFNKK5cNhuFeZzG4pkyh9PWbVFxEqH3cqVdg1jmsLYSTz2iaSNxc91jEY8qC5aiCRphPdF1wz6KpKCpEqAA",
  "key7": "hUHFcFUc67qRdthvAxSYo1KJY9yyWMDBh7FP6fNkJGBcT59x4gSSsA3EqVFXm7Go5eo4MYfehkVFUQ2LiA8M6Aa",
  "key8": "498LedBkyZuqXpV16NyUwitMtxiEBNepwXpyEzCc3M96aAE18bbraVhhcuxP8T5tkVmqApgfBJjjxccMADRBQNWo",
  "key9": "31cKY6Ycedcm2TFNMNU2yTTa3xHGQKrsnvUXhUHZHVnQkbnfubkaGYdze2odc44DuMehEuxX3zoJ9S3FgvhoaYMQ",
  "key10": "qHWPT8Pf85mStjCg6T91uqWtm935bm6wjKYNmqPkzp5evMyb2p7zdaVSehFTTbEx3i7VohybJC4d1JEXpZ2fhtm",
  "key11": "y1qT4cwERJUc7rUR9aKJAU3KRoUdTskaVmNEcWNNLWAjDjAWmgj5FoY6pNVZSa3A83RZE9EEWeELEsaPCPxqsQQ",
  "key12": "VX1ktz6ySKQURusAbPYFhz8C9xik1CM23ctbPbnmQ5awHFWEkrHyH3zKvRm6bdfEgmQottRkgd2vDvxwZ7Ljhop",
  "key13": "XQRgHf7v8VsGJvcq7azRGjfyFQjL9T5inqTtaWHQdkQRygm5Dy85hnezKHJ9xtsCtee9uvzwQ4vJCMqmEyRnnDb",
  "key14": "FKsXdjkQpCdd2GP8i9k2rEX6GM5WNnzYX7QxhBjAbrCoxtvmQfp13mgNmcApNdDRWMYwbcbim3xDGyVFLrjNocg",
  "key15": "65yFZUj822W25XpKR1BzBKNLykwtjFEnM87PZhtAtWcZy3PLVedDPzdToSKJSR8X292JPfw2v3XZNLUxV4VayTQe",
  "key16": "3pnp8oe845ZejMmou7BWAvDL4kUTLKbtVqvygqXFEUmMXsMWvZ6i8BZh7L4cEpmhZ5EqkouSxNriFnU6khZKt5sL",
  "key17": "2M6n4vzPHD6UWZp3SEhRPvkT9Dh7TiA5sj8viT7cB7zjmFzokUkoxnXTnRiiVFGneigBeP8X936fhsKi4zQ9sTpZ",
  "key18": "4AoHv3acmKf3dvV63XpJkYmaBf7uTSt19dH3TmuCQ2DP9wSD2WkK8vM3dVXo5JA92vh43TNvXmLPXZayeMEdsV7L",
  "key19": "27qD4wwBM1qP3jmYr11NWSs69AjxMDCw6QRNn61zipsV4xJo8eZ7P3e1UgSAiPas9MzJT2YL2Nfg9QyWW7iK6Ri4",
  "key20": "4m8LTnVTsBa9Xh1mr6LZT96rc8TManRpwEHh2Lc52L7Si9Z1wwaoj4zW5UMxMKNj1sVeUguaVZgFBHk9ha1zK6r4",
  "key21": "5ByhRqTj7LeCm9wwVmCX4vPC4y1WPHnXxmQSBCQsfyGM8WtNuQkAcJw1z6wB3JBc23J9NfxKweGFcAVsiVSr9yXn",
  "key22": "3qo8xCqXKFrtXQZV5cYMfBR69h6eowkSeuoVwMbrz3yKHagswwtD5aNjgXV3QQ5F3LkZUqPWDqCBwz4GU3WXtvtp",
  "key23": "44t7p2fabSfiER3ERyoGZSQfCeL5Jo2PVTMHxZpAprKXGqa79wX3JmdAvPsg2K4rnyKEvRbzVQRHj7Yoi6pp9SVL",
  "key24": "2mdhPc7GfC8tx58xFLcHcVdFNTBFgBFwyjxSpqxpMw4ft8hC6UtNFJBPdxyhHN6bSpqBcyXXQms1pHNwYQ5rUjV",
  "key25": "mmMUYDUGaocvmBU2RgFiRgAQB1ZpUpZNh1Metagb93YuujXuA57kSgjbuDnJdHCjuP5KmaJQr6Lz1RCqg5xouYk"
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
