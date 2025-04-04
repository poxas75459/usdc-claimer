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
    "r92BAvFwvExBULCMb36Y683YeMMcFwbR4eZ7jWQw7m5LXvFscRZKxT2ix24vXDmh2vxRjbLAwHPGhjQUo7MMQy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V55WM5eMUxqPqsZroMNaXmMGNACY3pe1KQ37pWRF32hBMaFdfZqneovqGjgjZpZjuUZDFBUsP2xNu6SBDEAbrXx",
  "key1": "28iHeC2cGVJieLsLRx1puy3rUhnf9hjCYPvjRKpbs7Nz63bLCq4oAtAjSzxftoHr7BLcZDqoSorDwsRsRDwq91nF",
  "key2": "5gaaS73qEWYtgv5FJ6XHqRvX451o3Cgfa7px5aDDLHzbdVrZCwX3HYtXnMepW2RbkRtpRMNRhP6Ge6cV49uChV49",
  "key3": "2XqV1rXTiywQbAD5Nvjzbab3SaW2CJbCmnc3ATwx5fmazerZenoWcojzV2HjWfYRSBpocvRq3cjFmrd71icbUgH7",
  "key4": "5sK6xg55BdZsCNKoJyzYUbtphLPg29c5tNNpLD6MtD5bPYkZHp6nH5tS8WeXy8di2w8bs1ZMxwRqTqsrjvGetvKD",
  "key5": "57Wc7kjzniGvQsWYumpnwN74AMZ1fzrF3Sa4qb3XoFEcYGwrnPRxpi8X3GRCYP6DXqD2EE6zx6LkXDcwoywAxXQk",
  "key6": "5Y9vmKM8x7CGiPYYd9ZSMD7xirR7x8uBN6cyTg5NYdGfzFjRPAaMLoXjYs14424KrYdH5xvDN2pcB6BffDxs5BYw",
  "key7": "5xND6PPkK1vhgBCoYQU432Xq1gHiQMro5dXwKGeESG1yPZf3CDN3hx6XiV8F5pTh1TYx5smYPcNQvbDYE5jkB7Nx",
  "key8": "2b7FNDRsDosByHA8ZuCJ6JTKAxoUpuZ8mihAKJMWcvYQ93hXFhFgTagBmmF2z65ERYszsuWGjZUJ21F1FC3Ct2sU",
  "key9": "44GdGSv8GkXmJNzCMbyroqXayduURriFQMfheWDfHEHgGEiFV57CCWz17TFVPQNxqbD1B5ZMYdVVC1HHhfFrhG8y",
  "key10": "7dohFSwqpJYaXGvRsbQ7JSrP99qC85LQfPBYj2TAg6pG2ph3rRUyuAgEUSkyXpK1dkQUCFCbSWuHSptBnRhZPS8",
  "key11": "5ErBn2kH2hpntbV478byvC3XkaJdMykUC25YdqG7zRsuqa1Auoon33Y2cmVEErbckagp8JjjTAgmMucKaDTDNiq3",
  "key12": "LzpRaWUyo2UC6DCtk2BGo7nVKE3oRA1CxxPhLVjcMfRn5c1mUNFbDr1pwMjjaq8yKbUkj7JkKSb7ec8qLSMnBnU",
  "key13": "5pBS5fouoc9NoJYgBXhDcynQRutoTjctLRjzeyr2usbKc18dXGbU6bAELo3KaPqGkX9GWdkRgRdXHj7Tzf3d9mLi",
  "key14": "5vGmw4DR4dryW3REg1kTELWJUTwxvxxn2XqpKjkwgP8oXDVrHzRAqQ5T44h1aCYDAnfNeyryqhfpHVfjvWDpWCiA",
  "key15": "5CqbYEUvPs4UKqdsTyU9kSk5DajvLVKxSUgu3sMP1ohJ9iCDg3fD4x6kJe1odp5UsgtsYFgNiBWCWvdDfqrWZdKr",
  "key16": "5e9jJD67yHHkAWC7jM3En7A8fZ2a9CQnqAkQYg1iMFJX7gFdDcgTXnvtRYeWa3SLZHaWd72rpx3nJQYxgqm2fv7e",
  "key17": "vFibsfCiRYtHXng6AaNN6Q85bP5Smm9JLPGVKXQtBJ7DiaQF7KtccBrkHSGLhgR28j2rmHyPtW4D2fWtGBEn8YR",
  "key18": "5VDy12nt188p11mYriAmFK5k5yqW2nnVteKFQf8WPKd4wQXTN8XwXXH1ybeFZuJLFzeVcWY5PDA8ETzn9TZa8gx9",
  "key19": "2oxEgQj2gxH13K7FbewUdEGJ4YJHcKc7WA46Gk7bRbfxfXcNB3ryAZFaudufUcfVpvAqSYDKD4hKJQzMZGMdwXcS",
  "key20": "4MSLZ3J9vz5guSQkDrAUo4yMJuir2HyxADr97E3r5CWBzJ5ohNQu2AsAanNsGQ5NFdRaSULmfz8KLAkikjHwYNHg",
  "key21": "5mqN2tmovN8mZHQpCcTQi4KKfA6QG6oYE1wn44vBdqrPxWXNuM4TYzrbm9asYkVEeyhiLkKk6XyfZie7ba26AZ3J",
  "key22": "5q1auJfhT7gWgPmpxyo6VwAwkAhnTzfCrv9EhbDkDZM1eyQiVrfZbjhvkw9CG5wELjx8N5wyPZBwoHXcNrt2KPhi",
  "key23": "MEDiL18rCVXBHawaSTUajRojLW7cX5eSVaN1bVz9qkXK321mkhzpSTLuyyVffnonyZ5DLbvKjXNPXtdyTarSog1",
  "key24": "waGd9vCr3tveQmJZUkj5w8kNF5ojW6FAbRoiDisVVMWKJhknrbTb8McNXQxnJWuL1L73jBQSggChfLhcJcTZZG2",
  "key25": "59y9nMcVStNmzL1LnDKkmvLuw25P85XXyZSTn1bo5KqW9os4bsSqZmC1NxRDbK3gJY1663xgdVTSMGUR6uuyvvSR"
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
