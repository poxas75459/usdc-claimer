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
    "vZNYa9Niu1fQK9nV3kjLe8QBQpRuYRhkSr7ZFkGSw62HNuCtfrpo1iQkddvxTZDhTfuwTgGSA6XqVYy2tBjhHzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jb9bLF4keT8RqMRr7cZpoEN27BDE7kQEsENzQ22XWoJpeH59LrpHYAy3mdDbwNeYacQC8MwxE8ynu54MKBiycZ8",
  "key1": "5jEBRM94a4WRUw4rJPGDZ8nagCSbjr9t5qMgYDgkeTrbaLzsiuU425VDyVV4Mnw9VvJjYvmSRFiMGrWqDCAR7tfp",
  "key2": "4xfSyPFvDSkV8rxFVLwWrUxFHaZuNwJpkXbz8GWm4n6a6wgLAn5ddYxMhAJtDYSG1MH7JTMUEweTkdZhUr654HF8",
  "key3": "28Dk3mwuLpp3hZmGTTPR9QdEU897dtSuFaagfUxdmPa7owuEEAgvjD6ufToG1NpsWRAxTQX4fzXD6TfGoyau9J6h",
  "key4": "4VhjfJbb8AZaccKSofZaJDU7jwWZzRdgMts7U3G33mcddWr97vtTNFsLNMjfNVhD4iGcLBdwGssc6WwGnsEHMKAD",
  "key5": "5Zw7WHhRu6dfceR8xt7ysw4ayXM8vquMqYmM7QFg5eqUaMBcsXb9Kzb7ngz9eh8jySZ559YpmYXZz9XTkUnrd61R",
  "key6": "3kTB1eszdqbqBUxUerT7qEA8PvV8nBCfvL7Ak6Vc4BU6rbe9emdsksTh9Vd6vVh8x8Gtb76ZaG3HH9ZSesi35g5p",
  "key7": "3c2ctwbVduHYVKMeRTkwNRao8JUMprNktMKSomHUERASLZQPSpUjxhu7YhoWBfPKyLdto9EXE84zdkNAqMY1b5Js",
  "key8": "2XGEuDqwDXGeJmhXBsTaeqvUj7LvSbBsD3N18aSDxjaK5sqne5WGfd7AYtE5ThWdJSS8RaSBXptJ1rAaNzUoqpcq",
  "key9": "4M1tgxQd1sn5AQSayD6UmZRvA8YiL7gt2h7GZLPPr7oMMD4YLUwP8vr7Xc5kXtnJy231b2QaWoYFhRUatL1s2qAQ",
  "key10": "2HEjKWKG5WWGUe9q5vp1Bw79fLX2hm2qcgqjMDjMyxLsPes3VLZWXyYtbCfMRvCjghhLtJHeDBugXxKtZQG9KnrN",
  "key11": "53CtpEp4K6nGmA8YZfEvsuFEVF7bes5gb4witFQxb8C2V3cF4DcP9W6Xe6vQSNgUmfEpyKHLSCG5EU4r9VRPv6TG",
  "key12": "8Zy47aKnzVKhf4PfNGJhPexKWCz83y6jFZha2FuQU5CAzUxjdEmofBAUtTQXyYDegQ5FXJ7XZG4RniwH67ydwbz",
  "key13": "2XufhRpXBkE6HzsmVMS3tjCrZLcuT6wxwywpnijT1EE1qa9z7fxf9LAedZ11E4ZnfCp6GYGEHzZxZzCviJSZfVZw",
  "key14": "56xVPHq6DjLPEhYDyBsjVQiuChrm9qRbd17S3he1obdygeEUkPBH3KM2v48iBbao6FP2k6QdR8SM28aS7u5FjsWt",
  "key15": "4vpXUShydeY8Exe7x12WjvyBuFUKGhsaJqRUPnKjVWvbku52z2bA5CK5pLnxYrkj3Dyuay8r4rkZ66XLbFNFpCmG",
  "key16": "2y7JMh3sXX664kvWzoKi59TkqxUvLoj2zUg9cxHZwJv8KSFyzwtwKy22CnYM4PKoAvWqhSc98dz7vTKEfMjXgHFB",
  "key17": "4LTgSxurRdgaZwr5tNDEKAf2U9CnUjZJ6Fh7ei9S7AGfENx8YGc1iEeVZB9cijXuy4vhPDB1A8mXfPb5kdAUQu3N",
  "key18": "4WjGo9iWZaU28NqR8SAPArXMmkw8dajbB814RpHQHWas6qh353T1soemFA62KkGR9wvSXAFQY87KCbuqf7eEbUgR",
  "key19": "3FfCbGLgDcjG9EAdsD5ZYJsGPBp6NbzoGRp8wQPHLEgBVJMXWqbnb9D7SoPBFmdz9EYNPyeKYEHDJ7LuBe3Wy3sz",
  "key20": "2h5q9mCvFvTCgnAC6nNnGAUFbF2XU5DWdjt9jYwbBKm4mgLruzsuwPZZwADN5FQ2WuShWF7Qstut5KUuyzG6rn7h",
  "key21": "36yF73TNSH5Ftt8KzFyKZKSQpxAbrrAbwcKotza2xJD1bB9zwujxC8XSa5DzjWzBfT2oBxTR79WqByyZqjFAZ97w",
  "key22": "5WRz1HdJ4vGy38Bq7QgGmvGjy3iL5dHxgBZLvdHb8zsKyPW8rdwWnPbRyrxmb1N7sPuWwTfnHoxNQXbNb5tyaRMJ",
  "key23": "29ckv9tAeGabBZ5qGFyuRQSEigUSJH3R5WGHe2YYeWYW2zinoSdFrGmQ594k6NQ64cqXMpAzTWpx2a63pD3zuHBY",
  "key24": "4esSzYHSV6aoku6GtzxrQyThVoNgZjAp7ZTQk5iexEpXKuTXaRaBcafv7LyyHT7qMoFaFiEEGMJYcCMNKe29ywLs",
  "key25": "4crK5kfh5sDcZ5NDmZKu8fi1NThf7t6W5TqmmVv1AwpqRp2EC2XUyEhAkF9oaVNydst9S73G3f5ViWeCtBzcnnLZ"
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
