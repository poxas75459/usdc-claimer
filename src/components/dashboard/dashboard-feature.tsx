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
    "cX9Fs3yWap85KNjVxwFDQNepBY7QvkQCeWNikXiQoFJ3CAWUW6yxBwgtnMRAKaCxnUEqRx12zFrPkiJUxqVpVBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X7jADVPooCaFkqd6MRE3g1WR4AsMFckAoNzy3BQfZFky7YWXQWvZ5rcfnPtXKZ6tSB3V93cSGfmd2zEvptspwNq",
  "key1": "3D7VEy2AKRYRrGXkMjGoeAPdfxrL5D6bed3XU3c3cdZAYWPco9HYLqgwEzCJznV8rZnsdQsC6MHVMRCGoqEsouPM",
  "key2": "5kGwYuZViTnjkftJXUTVty16S3AfUwkjqBkRgJxqweMN4dzNsmxtTXeRXU3URrJJiPayM8LUnfY2dUV8jyw5xbrs",
  "key3": "3qYWtE7NwUPZ6o85ub983pqrJYmQ5fLGfvHGLuZWT3BXhDTdPnArMexZUaGtXMpaHvgkhKJyJqSqQcebMCSJuxJQ",
  "key4": "2RSVLGUXPAftNNUKJv3ujptSd8A93XYg4FFSHiuwxybdg7h1N7btsEisdPVxA8cTTSXXdVWZoCYScigyccqrg3ao",
  "key5": "3ANRsG7PWAgcj84NFczWzKiBxrCq5HoWQUJX1VorV6Fy2BkoL9XkDHRfAMRwf4BXXfACebXzLwkXPkE6iiyhJLhR",
  "key6": "4rhXuHaZmiNMxUM8iZYoBtc4d1gLkCMPALvh95tosSbrPhVWjdV3yUAiieVgenSV1VyJ7rHSFFuctrZGBrJmWC8f",
  "key7": "3GCQUuC3hRmwDzbN1qfYVz8PFd5or6MYCbHDzwmPRGinWnCZRtpmywDMqVgNF4wBvE3HWqPpBejNJMJkNMLdAHN3",
  "key8": "3FCB7uGhCwFvcxuGt6Ygr8n1nMdsJ2SbCyvyG2sFr4uWp5w6W51JJHNqmkZj1adwhL9SXihBf1tSdUCNmjDS2y6P",
  "key9": "3GBkFvNycZChDJg68KRwS1fLdEqmMwxjSPRQ5qTcx6vgrXWD38mWwKbqE5PJmH8ji9Huam1GJy1hStRsL8Co1DZn",
  "key10": "66xBjHFVtWCouZLbEv2QBptQeLYmGEERNrWsPTNqw56RDLwPdA7svPq321g2rc4w2q8QquA9AwUDXT6sLihur4o1",
  "key11": "2beveBdGZVCaDvzSdNasxutVpuKq7BJePSAxmfHkQAFSqicrcamudt5tfWzgL3v7s55UUFGxWsLRjy7xuk2vuHHR",
  "key12": "399hQ69gcM9b8TH1JVV1DLpAKhAksEnvVGM3aKJZfTSD9WYxLmXJknFYF9RKDiHitp7hpSPiEvczkt1mW7BjHQcn",
  "key13": "3zXBTMW81BgwEbqaaXyzK6UuwMnCqin1zqbe7MBEE5d8F5wvrjedSazAvwxXPrUVD7FeypydkYUg9oK1yK9qL6k4",
  "key14": "3AuknqrufTzYrkezgTtunujw7vW7fVz7JPSHVptgytB4NNmcex2APjXzjsZ5xwpcmjkz5Z7fETqXc8jTVn4FQtPF",
  "key15": "4WYBMapH4h2TEohkmqxmqjJp7LFCszDzUzJkdVkhCmKxUyS9EqisDxkzEHWptDSMhbqXQpgWbTVWMwTEdZN9BtJe",
  "key16": "Ajr2bzfoXjGGgQdtEujQkzPR7i6npTeLSTXfPpoiRJZh5U43GgRm9xgmmFoLGnJ3GgSMRCbZ5hHaGoejdGvoHPh",
  "key17": "5YF7zgqWzHdUR64edFy53M5Zh8XQPA93y8SDvdqbwfwAt9MHb3wt6srN1DT6r6PGH8JpbohiDmUawpB2F58rZLgw",
  "key18": "43yk3LZXwwgJaL64FPL5MfrLGtiDA1sf4VHXcAQN1qGfRZAThhVx5e38xfeo5bPyByYHmGhLXhFkTmk1Vgvy79ZN",
  "key19": "2VWYvAPWox5MCm2on638y3NZSM3QdEtoqu6aDNmVwfrhXC9RcjzeprgecuztHK5Ze5eB96SkiMp6rSMHUfsXGAny",
  "key20": "4sGtAWTRoSfidZeYb3fe7YETTdXCBhAvE8cxNapPz3iUWduhMwGJD57VBCS7KuDmCV4g27KpA2B5eibeJ4PiC6G6",
  "key21": "EK75etSdZFWdfYxAgMbsBDMYoLL6z7F2LwTYH1h1Kajtx6cxY8d17Rp6iSZNoXc2eYPXu8VijJ9rpAxju8JEn35",
  "key22": "4M7qFXEq4Z18ebggFfenJXg2cZsdmrDLMaxNAX6V6JwQxgif5XM4en4zSgpk19jjwrxDAg1cH4ye7FWoz5BxYn4R",
  "key23": "2zfjY19HQqzCSVVioikm74o874gEKkJ9irtb296kFD7npSCKBAUSnYr7BQ7zL9dGzu5xEiuzFYsyaGKawYxSfyKM",
  "key24": "55fhAAGPuHZkLXfxkFLpJELY9VjeZAbSHRUbMbP8K6geVPgJokHZbDaZCBZgEDQDDF5JKUr1BsrRhbn5TbFN21UR"
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
