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
    "4RiDvmaCN8SmhFURR7hjCJUzw9aHCcMWFB5HGLgvszvt1r7EoY5cnNMckaZ28hRGFJzLwrmesAwGVHeozXdAcS12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K3rRZpZZkrW5Q1eGExPQQUgKw7uqE8aDTC6LcaR9iaTm18hqKJ67rgMsvP4w1eG8qTiWp824EfDW4YFyNazEF4E",
  "key1": "4fuMHhUSNSYf6eN9Yj1BESp3wbTME7gGa2Zw6gLRNpPW8tnPmzmLzedMToXGtZK37TuCVso8M2YPBt6ZQFdrxy45",
  "key2": "xzx3w4v4VKHAG8Y787d6JAmPqoGxY5AYCXVEykuWBXduKoZZVyNwkoRJHMf839TYTjVnjr3wFNdo9zExhF5HfhK",
  "key3": "3YWpMRn7cDkDg89oGZH5Nnw79i5D317EUeDPzAr5HQn2ZBabksapWT3jaFK2AzRRVrpfWKydawcPwkjunN1afTch",
  "key4": "3hBrtyu7zfQGCPxypTXS9F1yPXBezNjAMXmNBRFQkoDBV6xXs1vTd22LFb6RDakKzzU7oDLhNxnQ2LzxpAA2o6Q8",
  "key5": "27pFTeuFmiwwN3VnYQvfT5eqbAL18iwJP6RzqT8zQLMFaDNfartjzpMWW8JjrvAnVZgFZGrkRghWrdefeJwc2LTB",
  "key6": "65yugcWruDji7jCNz5ZvnWvxkL6P8tLYubKuzweFehiB7v2bb7u3tun5bF8s3fN85qsD1Ye9xvUjrT3MgLSd2qFF",
  "key7": "52fkBzj4vxVwK5sWLgEaY45kH4wvKGwSNWAhuuDZUZWW6p6PxRrYXVxXGjQg42VgG1QDCwyx4D9sJb9kXcaWHizX",
  "key8": "47rQ3TYvJE1o7kXaJunMFZEE5XDAnsX2jLzmScwFHnnDiXTLzyJGAz9vF7EgGc2goB7YHQSbdTMemwHYefsECMXH",
  "key9": "2DDKuQWsnM4cLwDP6q2QirqfAwRcoWbERSjVqhoatPEy1HbwdZzbfNFnude55bzjcxifUXhkMJvnFoqPXCgmS73Y",
  "key10": "3quosokh5LjYrG4VUXDjcgUCxR5forwzTdqonmPg7k5uDSUcgSoGUsmN47f9ipTj8J5fZ8JYRyTrVdrv3kdUUbXU",
  "key11": "2cJWBJaT7HUP2ytBKZsWS71okXx2AGFMW4HdVaUixqRD5iqjsidrYPuLEFu44XqamTtxvkEoU2KzhxRZmaqNRvaU",
  "key12": "5vgPPADtLQywfw2ygQtuGfENpx9Cfp6XtToFTb2Jv2G4vzpkmdVQGrdVq6DXzL7iaXzYUN6oRw42nGCuv5Bg5eDo",
  "key13": "64N3RLrJwPeBuAYFjvCVUKvBW55W9LSKafxASJzbbFU84QDdnp9EXrP78utmBvUdMWh9pydeMbfM1mzXHaT6nbuY",
  "key14": "HFeR74NZxTWJD4KkSuybLeFg9vqxCbokR84fnqDMUqejqGpLKbuPSBdjGLXSF8hburM11p1a8Zo3MaHAgS8CQGC",
  "key15": "32dtQnANUQLuWhJ5VV6p7JgbRhMDdScoTbNWGLKxoVkZXtF4RCD9PhrdeVYXwHZ35wowrGNwyYCEh7vnG6W4hE81",
  "key16": "3rNZp8nwNMV5hfwmMXhgz7erpeachvPK3RyVdCC98cU4UU8bEQzneF6q6f4khfqAgSfCe2shmSXTSQgLVA8qBDnw",
  "key17": "3H9QUP4iZqpmHbkp78THqstd6jtUbyEvKYQ5zNArFmbMH3SDtUkvMAiCHmzKKVrob7H6hSNdiAtHiJtqjKMrwktE",
  "key18": "12Cifn4P1QMqVsFr1BxrVeJvvfrfcJEFtJ2CmUhpPyytswjFBxqUET5CMpDbJQ4sMMXzzHJdk34kUhbXNDpF7qP",
  "key19": "2QrWBbgL4hueywZcwTfkaQR9LkVz7UZhWV2wdqBh4bJZkKJosUotthJpgcgTz9wC8xdGToKdEUfyUKLbMjusGV8g",
  "key20": "5gNCgWe3PXkLrRuzdAd6vWgwYR4CDHA5YdZPoo1MqwLoUm3oaCU4kiiZKiBty1WpJTx6AmAANEsNqLxhUKQGETPV",
  "key21": "44QXbSVJyuk3zwwhnGRz1wgZMtmxdPhAHTnE7UNGEMAKQXhBtqvBhonby6eu2GjxMuSgahRvYoPPwhCpAjL9z5fv",
  "key22": "2pYhiRwWKJ8kWkAqNTUax43WPA6RpfzJKMETtDcKz6YagH7PNKZHyry4MVDVJiDGCaU7ySZ5yammBDXQwmj7e7C6",
  "key23": "3p9WQDAFtrsw9BJGsnV9fYKcHuqgHrBzLGsU4eVpRo8vtyZzPPmy49v29W1Ac5hYvrR3PTGMZRWDEZftJsCCszwR",
  "key24": "y1DyxYxBYAkCZUwJEAxBtwy25umEMTdL1sR8dXHqnWy3oAgALrUxsQk4ooN86Gh45cafu7c6R7vVFFaxgFEGcu2",
  "key25": "2rDRUGvZ4SHZgCH73TaQsTEJWq6b335a5pe2RbkfCyC3pG79Jz44Bqm9mDpM229VTnsbWdnoCXzBJcKuf2qAgHcS",
  "key26": "4vGZSQ9VzXzeRMxDKvWrBHtyUfXM7dYAmQFNqkj7F1mdSBrxWuKQ6oqVRxh8CovZtL5EJNcpQvgtnV2QfotJZ5vE",
  "key27": "2iJDFmoMXKHzCvhPbo612sAvabjtKGHicvjXHU4UEAVRaVfQAh6ecRKKdt8fgEJgwBGcJzuDhsjkVBji2DEmnRDs",
  "key28": "5hZw6DRXfmSNHtXBThXRWgTZzk86wvyWFbdR8K7wCmSsJjRyTHvHhFYYVCEft6dKdSDUStzsqw1brbH4DUtdou3J",
  "key29": "2wuzoJgCWT9g3QwcvmTC3is865L393sUk5zTNrp6sXGwrBmQkEJTF9PQWRCx86SdozjoB7jxUZSE7vdeLqsUh6Re",
  "key30": "2sow5g2PEGn8PkChaXC6SVXD4dPorAvFAXzfHtojrnvC2TxMUvuvEk1faFSURzr6m5kSdJNi5jJvyE7Hf5CefLWr",
  "key31": "3dZHCQQSBQDD3yQGJs5K2jZbeG1RqAQZuykMPW9EpppH13THuRTJKre1riJVbgV8MxAeYCoaAojGWGgTW1mpaKP1",
  "key32": "Hz2TU5CPNpBVrd2zaN2cKQ8uKttxVSiUCq51fNX4pQ98CuiApFJYGMSE9QXdGEWFAUHTsFT6ZvTuLWbsJwRXgTX"
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
