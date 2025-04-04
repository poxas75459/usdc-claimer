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
    "3ZGiGvjgML486zM2EMEWLvSpJzyYVp9bjBVTsSRJ1dZtwzMc9wjpvz5DVitN9v9eMfigF6kjgxGfvhD4X6VSiH8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YRiEwjAQT7XrWe2BrsdrC3tu5EmDg7sL6q2j6JyfYAyBqr4RSNjKiHibzCCcJGEgfCs97uaqVxV3y7GY3eFzgfy",
  "key1": "5e9MdrzWAZrrNo8yQJz1HKmKNYtFEkF1M9bGriZLmFxjNCSxvMbGfy7xeYrUxKYruHyjRb1DHGXR28TzHpGvt8Uj",
  "key2": "2SdKaL6nDtyK6C1nzZgxXts5s8Edfm9CELeJp2rYab1FTFKXLPWxpXQY3BnMm1cRqtTFraoVCmficApmzowhCbES",
  "key3": "2sZRBRfLFKYEoSXa8Vw31MiyjeZ8h77vmuoRavoTYotvpnS9ef9Xa1r22oJ19BU6rzxLbPZEiayuN4D5hHpbg6zg",
  "key4": "5HUntMmjZgd8Efk4iVaxMWkjUGoKqNiG6uvUtKQBjkHqxshV36KQ7xatZxzDv1hHVQV4SZcsPMKHDreMvvyuFwX4",
  "key5": "3XqF9WKnLc4GxabhrMcJoEN8hL8XC4c2Rk6JPCf3dp1axCyx9K1WBQx66H7nYs7RuVyYMNYRq39LJV3XfMjy7RX6",
  "key6": "2V3DdysRX3SAhug2YtYfTeFntWiaSRPmNvxwksFqH3GABpsdygJXRrwS6MBRgX5e94gHzwyxDxgWVK9nG2Nquehy",
  "key7": "4Tw9xst98zRzSb66NZFDfhAtH9CgBDiFLa3U3rqJJzcajsTHwZLxbMYQk7qKrtp4JpHMXHtoQZHaqLPA1pkzZSCE",
  "key8": "48DvrUJ5W5u4DMTqudGXiCwJL6eKofVCvExNBybWbXqaFcrP34raepkUenLP6413vti6aXXW6WQnv6mzbqcFHkQc",
  "key9": "42gaA1fLi9rUwQbtjVxk33Df9G4p23MsQSWyR6DK7gMTiuhtZvkcCXqp3hB3kcUdheZvFZjjB7yCbFFeTnFJACzW",
  "key10": "4JoQ5nSXJbCSjKxzZpL8XhFQxwAxNEvVgJ1EaBqR1VJFTfpnSCuJVuE8H6wHVceGLNPJeFKCz8apSmu17AmHRcL",
  "key11": "5outLJARkGZCG4MfCMkxwkk57jNFXTWJeQ8qQETxhUEmehgra548Nx9ashJdFU7dxGdW25AVVasBxftxczKFzU5U",
  "key12": "5puLrdDgjrBbjkGjWXjYhm4KzYqdZnyEy95WnWKSeDkNFLofqmZtQrCX2ryeGKS5dEhZW53ZQe2HWCZ3FWNhA4xE",
  "key13": "4gcYbHbV5MkpzTztJmrLDnhLT2qkXSqFA1LPcJkD6D11PKAN4Pc2Pxw1t4xSWAYJLrcS8sCMA617kpLAQ3Webkfj",
  "key14": "2M64dGecLSpXtVarRLaUsBeoFLpLtdp1UFr4ahkZU8gNA68hJUfyYy7CSH469MR2tpsJh8Te1gY2meL9WSmCwxoQ",
  "key15": "2sydwEZGeFKSYjTqyF7dQe84MWCwVEEbH7HgCKojhcqKivnjVea3ubWJgeQfH9xWzSxLkBfXiBZWhyBrqsb96Q1B",
  "key16": "237SC2UMkBG85UkUdmhYt6aVtTECQDxAr2uA2TTBVzzYmhGUiXZhWLdXrnCdU6wTb3iS8sLpHJkwHm8zyXz4PWuK",
  "key17": "2Kp6vKRS6WPgA8Wn3trdbomYETsSa3vdFmzwBmmmvwGCRJH8i6W1t8jb7Z28pgEwZJmXMpi7QZbYMRaAar9XbvJw",
  "key18": "2cn8aXQpHmPE5ebuW4bZvV7rwoBSG7uzEuSpXTJbF99wLysPsGXk3gm6c29s6CWPCoFcMqVS6cAisD8mFP2UD7S7",
  "key19": "5C9n9kHM51oXrcbkaJXEXqV3js2Hk8T3gqPVfTEbYFr2pz2SUk5N7XmB3Su7BY6cfdBje97j29tdwGCeEBpuKgZi",
  "key20": "4fpzJVu5ZKH27XNUW5tSHFbrp3heTThq1fRDGtLTZwR6uJF8jEmB8eeEYLs7NYeKJYWCUUzzUnxk9Nbjinv75rf4",
  "key21": "2FQQdaAAHkmdugzfD2xpoVdDEFLwmfm7okPkBRqx4PvkadqE6AjYAN3djZhwqYkb4iTaXA2jEXnXC3cpBkt4AUes",
  "key22": "5d5KJh4p1wreede5N9CKYLKG1aNUEHmVro3sCixvwGnSspYLmbZuwej5jNa9wA5yrW1zCn8kNsYgPCCsrtqx6MHh",
  "key23": "5i7zhtf19UFa5gdke6uMif7n4GmT9ruWbUg4wiFThR3N6NDy454zCFZyYxSkqNW5ALhXJojW1RD9VhwLib4Kvfgb",
  "key24": "qjqcbFysoVS7fR6ptfmxXRD81BMnGvirnqP3fSzcUpaaTghx3XF8G1bYvKgJuD885ATfupW4dNzHsVtJQHMeVVm",
  "key25": "5VNhPamWUKsLtnU5LYVsLYNfaTvaPgy72tkuDJcv1WTiuBRSGknzctrkMcSa6ifucLn3WUhN96krNQYzLwE3hBE6"
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
