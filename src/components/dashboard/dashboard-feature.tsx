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
    "5HbXonFeGrsttfgQdVnrAfhAHnahLgfhYUXQjx8YSuXkbC6X9d1Fs3oMLEJoT6haxtpHqejNyXbm371MqpqJ7pt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y72v3GMAYQvjS6teVJigZRgu3Qhv9KpdCEyBD56nEmrRkeiGh9uhj6FHctK6PLZTgaLvbdG5SpsHZ9kg3gQUFi",
  "key1": "debebGLiKKXhELG1Lmc6ycwA4U4cAHmuzfkMYq8LYCHssujv6b4WregAQ45rw32xLLxBGQHxPnCXwfFwDapZ19h",
  "key2": "2z6rod7rkeFse4nfwPHtoEf8Dozo8fHrpccYFhuA4vqyjWSJzTdafMybMnw7WtHa5tfaKbUh3TZncMjcwmKbeVCp",
  "key3": "5KE3BDTC2ZgT6s5LMfH3xdgiKWw8c6Y5ZCW3EXQmT8wPS4P7Cn4auX5amQZYXMAZ8FFdjLdXpqvDpeUCmDccwpQo",
  "key4": "4b4QiFq8tjjkJGnhbmvR5V12K6pBjPSzBRU9gAxat6tYyensdBKpQ76wPSShzukedhcQkXxCRxmZ76JCghR8P2gw",
  "key5": "5unQn4mRGeurLJwFAd75tchmnyvRoAWrQMzfcidAU54yC2vWHPLWxKtjSZ66rhDEbfi2dvmjsReEZHMbqtJnEN8o",
  "key6": "5AmcUGwdoRxQJxiEe4QajTbVgzEs2nTqrGhbYL1gYeTVbmG2xPyDsFdNaLJzrK1V3H4vcxgFkpDBeWDFioc3v8pE",
  "key7": "459GnStUa4RbweZMHS9xeZmi9gDpsrFUG42iGVvGg7ZGyYeKx6xphQGrx9vWdUvUWyo3p1nAvdFJ3q4d2MpD45vw",
  "key8": "3QCYnDhPdtkrHtsH5k3UQtCNSNNmXL6tZcoznbhJhjCNU1qPg2ZPF16jGmwyx8Warknn5EeXZmmHDURv8GkhiQhk",
  "key9": "2JiUrHikWWThL7GtYDAM3L7PVULmzu2nCT6NK6SgRayPcxj8m87VyMNCKemzGurkgiwJn9E8jRJvrj1k1TpA9BXP",
  "key10": "38KWqHPUwBw6eiL19FUJNUncBF9xLso8yZZMbbAzxXTVZnRKD4dmP8fvmg4ZMTPWKSerfdxZw5vs8CxUFZ8SMorw",
  "key11": "4G3yTmExMeWTXZ9wvgcL7y71GCkHm6ajr6aMELxHQAMj6f7TAnSUy4grF5bY9WJY3Bb6TtX7mvyF3y8tTvGsePDj",
  "key12": "2qxzeV3KeBpggfQ2viB7YABZ2f1rVwHzTG46HzRgRmsCGnA7L4WaY1df1JtJHwBx31ThkmcM7tHZEQYJoFwEpnmB",
  "key13": "fWgGtbRrpuJUKS8oedeSsynrMPVhDsJbyDh4mqJh3Up7ffHfqTsu8XaGb14KXcTuW7fsjhc8BSnMGa3fyve8GQh",
  "key14": "2qTS2T8zWq4RkXA3NGKo6JohXrzRvG5t1m9gybi4NHucwa6Sk8JLHdVfQuyoRUcFXR1iUu7YLsig3EgcMTC691Mc",
  "key15": "5B9VGJTaGLFv9aago96bnuzw8HGePG1cE3ce4UBw2LfRJeAYGTFKveiP7CevoWd4wUR3yhypPTx2ixdvguNugxtj",
  "key16": "4qqrT836axyGXxc3vStU8YaKxZKA7rF6p5p4GJRpwu83JRnS7Y9RuXtNyiYvHeRbCdjuify6PkKdcqjwwTTHq31V",
  "key17": "2gKe49TCXiXWs5eg87PDnBd7aYBmKXavFafxR5Y1i1tnR4whUFTtUM9KJt3Bx24ydcQv9JrkBkKK7aPSVv1UvRDZ",
  "key18": "2YjDhFHAzSnNmGFDiZJvJKi114QdYtJqcozgmFaPpDq3BxnRcv8pnt2R3ESDpTvc8jL3tfwCBcahkKhWMiToLZKx",
  "key19": "TBrgKa78TN39a1b9bjjVscLuD9u9BF3mDa4JN4mmWvDkxuwxp61BYF4rUy8N5bZ9oL3Z6e7TtDS43cM2iYC5Kej",
  "key20": "PvxKQ2XkogVxb7SKiEgLrmTeme1x69d5hV1Xi8r1KgMippStNurgXCR9XZQycTyZHmrwTk2QruzbCCt9HDA1o3Y",
  "key21": "2ZTMhfRpb9MNPds6dn1gNt15rYMC8o2vsYFXK7uorS9suStKg8jGAjXGcEjcDgmovfUEPijhQDS8ozismQZhJWh6",
  "key22": "4FtP7DSZEoUEH4Mkp9UvAGjqz69JiKm8JkjXpj6HQABMUVVnuhYQ4vwq2b8sSmYN51TSaFpA2qih76WjBqQBPawj",
  "key23": "3UWY84JB4Vq6oN37VQqf2L36YHMYr6AAgvK9tdbkaAjaaS6HrcJJNoK58LEjwwkzzrRfAH4B8moXq9eSCV77pHBo",
  "key24": "59NXzd7LzzAaGhTgc8mW5499KieXjgbWfVD7JRL1aRkyKA4mgZMQNCaVyJWXkMFnAKuWtJiisuS7ETwr9BUSHmpe",
  "key25": "3f2hr5bkYkcc2xnkoTuy5rmRGRf19JdtDWvPNt3fZx9USakKcoZNsnVfmZaEyswkqNscrV5CB24ynbMfkuoGpPEg"
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
