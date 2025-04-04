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
    "ic6eAmq8aRvSedibP8KHf46zKCdQr9pXViK8qUEh63E87RP4aUAjZgSdEAQq9wCtNLnKNBncQSq3juKsqfnoBF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvmJfHEys4fNfuNL7DDQWQcNFA7jvhQeB654zogLhq7nW6vNd7FfHXsuGPzpZr23Xoz3UYcYhYHc8q6nspeMt5P",
  "key1": "4WnP6Kx9aZYQDwo6zNZvtzytsmdwYkwZUv89gGCLv8ZQxPqAR4Knc3XZtsSB9BCaaudDhoPj98gabLtbUJy9ozke",
  "key2": "4YVum7reWVkWCB1fDryGjVWmQbRifMDBVTPooWXiduLUWwXPHku2FBXJZrKgbJkshApQxUwN4vn7jGETTvWhEgU5",
  "key3": "4KF5hc6hoPYAQHz5HC53hC9hmtvJMBCiUdGYZWy726Xjxg9FXK5yD4H6vmT9mQbLc7hotPuW8ovib2VjmnRyJyZ",
  "key4": "4kCQqei7qBQv757j5cNzfRsKFq9eBz4rjf6Rh1xs7h3mS5Qm8rR3vLGWYZKCizmB12jBpkNqiMbRyGfCUkWJdEJE",
  "key5": "4c3NhhxJjAxEjDLrDdZQxjnnPsWgPJ7eoVHJTNsYH6TCNDnNWmT2mujfWgUdVonC9Kji5KZHp2FuNyYrdpW8NEAC",
  "key6": "5p4qfiWjcY1WzWHfSNo9LMujizeJ8RbfhV9kxzEGj2oyoJgtT1WXLqAYfRaC2THCMxjY7Dpmht2hgdJSXHfQQcf4",
  "key7": "PH4FwfzjevP1K9MUskFfmY6mqAwDHogrzMcXnAsNfmw4zeeFRy64Cr51akyTFNKEwt2pFDaEtu7a848cw1ot5kP",
  "key8": "12AbUu9ezXXqcRiy1e4cDwB46TG7K1w92EmUWq4VMAUSXd5PMkwB7knetNZkfVKinQQN9KxrfCq59bKT48vkMTq",
  "key9": "35P8Bg8LBH2fMoWbHDjoEoBJBUxauSuMeJ19BynJoBTSA6iVvjbaLa6oRCfzvpXcZKDkb2efj2aAdVfApXEobZtP",
  "key10": "kxDQMwQd6RewJsLiG4VSh3bdWyVzEjRF2teASF7dZNPMgy7Smqs1kjn1KhnWFCTCy6GuvdqCfv3ZFKW5rdnjz3k",
  "key11": "vHrj1sDeQaxmBqK6Zu3zT9vQg7aL4VtJKxRdkYwSgoyfePkr3XeujeMXPjqDebhLPgkD5sfVaP6noo53QegNaHA",
  "key12": "5gkpWkucpyyFSZ4sWJooVtA6yokaDNMEMBaK9KVpAAebhqNQZJyJS8xV2QzX6MgT5SqokgaqahQhei3FX1dewDZJ",
  "key13": "42238SUKHhN2kSALeVNuroYppHWVpf6NxJLa5i7TfZa2swnzVyUvYktEfSTFur3MMXBUM3tFaMTRCzZhF2MropiN",
  "key14": "2gq6rJsoY8f5HMcEvQBNZQos9JGHHHuGpxm8y1aC6E9SZRXdB5QAp5LdxWx1vnpGGXnNX3dk58jWzysfBZ3osjps",
  "key15": "bjFvZUN11r7xNeLuekU2VB1xVfd184gWKnxpVHgRT7a8EKy4i5mgMmB7x452paRcdAzkLLz7JPAGnMWhcEEVN7G",
  "key16": "2HV5WK7sdhVVDw3bBSRQjm7CUZiccYF4dE4dVXAc6iwZArN7JA3WTc8AiHRHXEJkaAdaKiRnCbzm8WZVWn4LkRsZ",
  "key17": "5bQnKzyjuojrUKFs18JCkknffV1sQnge6rjYraxVhL6XtH1jU3JfZka8KgnXWvZR7murtq4t85YwCQviax3C6XsA",
  "key18": "2mjc7oXETgyU1EN2Xa9rJxy2ySJLNHyaBKJ8aStYhfLeY4aGCV6cHcmXJwnmuQhKpF1eFkyrfy5VM7E9kQv6aT9e",
  "key19": "5TwGw5PYNvzyLWmXn4wjpZnZ4RxT4uojHzoSAjmAMGF13a8EH5BwF3F6yQaWADbK9jy6Lc34LPJsNuwj5RFsAKAb",
  "key20": "514QEZbnYQfoJAYDuJNRAQvovAhJ3suqJTGfGpTeFbcjkRAyiA6bYxSwkbL9wxpbNg7QspiK76m3KJDkVtp7EBix",
  "key21": "3bigNB1q2LB42wxWXs64kNUC1wuj8hhabJXuziTkMBLemRP2YyQVcTZLgNVfbhVaYTJ8TRFms1ZFg7eUw9vnzGbj",
  "key22": "voa3fXjXKVSks9pV9m7ywrZpT1gS1vYVjzQoFUWLVpvkQ6v3fQ3Js2DtYNeWcoASV3oJ4wgxqioa5qKPRFEsGSj",
  "key23": "4uXfrP3AKfvm3Nufw63d68xsdqFEsJwB19N4eBvyTJoQtSmSDHut4HU4ZkHpR5jjy8SsPfHoX2NVwaFJceQH9mBG",
  "key24": "2aQKbH1LtiJRRzXGvysDEEcDQ1sKjXbfhG1nebBB11JnEobNeT7F1PQncXJj3tb24vFssXwm3mVntfd3p2amiY5Y",
  "key25": "2cb4xhXwTU9ASxMbPpk2qT8UvpHEjHfssetnbp4VzHensRx98Y4NFsWfgeq1fDTNWA55hJ1fcCcXAKj39NDuFnhg",
  "key26": "4uQsrZ79qKijQ5Y6ruF9BMoCgL4ePJ2z8HCZxXHrF5qjzsmhUKSxTxTAFa15faLhEXSusDxTiYXzYfUgcqTCzYoQ",
  "key27": "2nQnBiMK8gHowBo7AhavQrx5D72cZpVDscTGEV7gcz31CEpJm1Y3ouqzCK4eaxACnnngNdidVSmfDL3Q4eC2vwvR"
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
