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
    "3Mabuca4bqEHXQw6aV1qAgd6f4MTsRtf2oXTvDLJ4YHhmnrUoxVsPRnmxaeChyK3moKRArmR2KzRWvYL8AUxt4Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iz5b5BqFxCgWCtf51EotRCiYFcTquZPzhE1NeLDeCYcxuf9gNXzXT8wzt5pk4kxYiBsuEBH7ymAUjvRrfv6qktf",
  "key1": "5NwHgBz1mie3RsAB7GPijUmer7CLfUV64d8EorctPcu5gqTroYnK6wSmkg81GwMN4mzNYUYLKGkeU3ceaG6FkrfH",
  "key2": "3w2ikysagMiu68jxAiXgpXeqrAJyVeH3t4weS7GuajpWPd7d8zWFiyKHkSXNq1qy7hnyC5KJrdicpXdnJqLhPe78",
  "key3": "24K2E7mTmN5eRm4wqXDjP67dyLyZmHXfpNJbT8ZmSjjfs5cZ8BcgRd3JZqQeGCQfVmXgWUxF5mLx2s6a5PXJm5V6",
  "key4": "31cnKbVSa3a9H5DH2FN3aMPEJcp3ZkSDQSvJ63cSYgvGVewAir72GuPeKSErWvBXMAVUzDywowpHfJLAXo68trkS",
  "key5": "59fpFKVMCf4zBzAVtqMsPTbC8bHUfAPA62MaS8Dv7HY5BSb9oUx9ofGoQTccEfad5bEBhzURQ84UQvyUbXkiVTgW",
  "key6": "2enB1wnHqgDvTGKBMLd7ESVWpDgsCZKmoMgZJTvDeqRKRy36dGVdoveFKw66edEZU7fsL2pg1ohUutfywNFfWGQV",
  "key7": "4YkYDYtF1nFsBrKcDW9sXWk45TRMh3YnzozPK5vY1SGR62r9ctHQKNnDLub55JxpK6KgYBaN3mWcAvV7DMp9ADzq",
  "key8": "AzBuUqV5Zfqg7hrhFMW1FYrE2NT4oiaR94HRcisPbhxAmDHnTm4EgcfaxBwEKGWGmJprLVFL4YBLBRfLivVf8m3",
  "key9": "W9dUoWUMxbX3CzVaaPZRTduYp9DLmZHDAYnJusKTnKM4tqp7zvYjaeZEyzYHc173Y1kQuVmhYRNaYEYZ2qxFvY2",
  "key10": "46ed4CwCMtg6tXEvEuU9ABLBLWQdjRVWjGbpg8WWxntahctEcW3oo72RgTVVmeLypDB3Ladft9kZcg5iHWxSJtv7",
  "key11": "5wVZB97KEgntZKZuP4DaEmXgaWPZtxcZvH1qnEVC16FSiH9NgQnS8MGwk5WYRLMp1aShdQWx6NAuVB7f9A2x2sPy",
  "key12": "2Ciko4xQtVBZTBv26chRNUbWt5xLrEPrA8LkM9p76CqkrG2pfkUWGFcqngHtioJJcK66xovyxqdesTjbNMtwucwN",
  "key13": "3kNCjNsgVP1MiL8zgpWtyGF4JuQV93q917KnStQKF13xD3BrZhocKoqyfT2xAsk8ydxsRV2ZSC67pte2fwCJ1Skg",
  "key14": "5SjpoL7BQBrHRvdYsx6P9q5pNZAfVnC1TtMyKAm3i68o5sxmeauwohb9VW5HsXwVpn4C69q1pctAXN9kGZ4H1MUy",
  "key15": "3ZNUrpY4epvY1NpzgMESrFgt8rKiLWyBpD2vFdn1EV4VuEciAWgRr6Cr5FGtAn1PhcZDnBzGmGHYZP2h6N7f5Qp1",
  "key16": "4dg3AA6gdfsc4z3LaiRAUiaA9eitVpWCtcxCLAYTHD2hrPewB8ms1uZE1fc69HnK7V61rLfTA7wHnDduhYbLwTyS",
  "key17": "2rAF8diXJF6YbimZ2XSGA3SZPXdEpdonsyByLRtjMeRLpXc77QQNQoQCu5Y8xVEEfd3B95mV9L7EcodmT4nowfVz",
  "key18": "Z6yosuESvWRdd63wAscVz8EorGLEwqTC2QjhtbAkVjNascRyt2nhfipZzvbriZCtVuVDap7SJJ6mh21Ae233NfS",
  "key19": "4G82JaCrD6pGymAgcpiwfDVsmh6ddoxtKxZjUHati8bUZYgqwEbb79JnXTDKGey21eu4c8UQubVE7t4yWvvSPoAA",
  "key20": "2UdkbnkVTatA816hVSSCiobik63YVX44rsjncA6Rz2b2fsYAPKHdRLNzgCbh1y2fhk5o97VgpJbAVg3u5RgUVWVi",
  "key21": "59TqB6XAQyN9N9sS7z2a8rPRupgzktziX59GevApponuHhmiu4dBHTTfyBSDjgL3Pa9PG47VkRkmh5gubxJBXc3V",
  "key22": "ye5RDvfaeUvuLvtupBgGY7WFkiy468Hd9wQxGtkWcfMMWoTSiVC3pLK2gzX69a99HKM53u2BpqCKg2cb8kBVR3E",
  "key23": "4hShJu3RDFkZb6qP45cB4o5KMcm7MYzRErtmDRt3q8XJMC8pNoLDfTZNthpSGZufBYzRMWpCaFrEYmfAVt3KRJ5L",
  "key24": "4iEomDXx5wiNxUf5paMDqe7ChKLXPvGuFf52VBP8QgMsCyTsGBS7MTgSzc2HWBPxXCwbvmefMbfrYTguu5t8UfdF",
  "key25": "3XS1i49LKdWc9RWoUjCw7TXLQQmMro8isVyGNaE86eURKAtj9KzAL5h8yZC7bxB8hwoH2KddGyrAy8eAYjLrNgb1",
  "key26": "3jTerQZf2TdZNMoPr17z6yQpNMCenG5b9FQhHr39V66DPDssKW6khbxbnHJwUtrVWWb3zMzA2KFLNoFMq6u5FUcL",
  "key27": "53FmxnSTPZqiddfCFMjxzM2gNQro86CZza9A7Gh9KzNNYir4qbon1ewdzfrsxSXjGDgQnAHgRvNnbwMgreGf5dBp",
  "key28": "YxZ59ZxSntZ7QFZqDjUF4SiW7eK4fN3CsFNKYnrengjc9oFUaSLHegw35vcQQdoempjTxqpRWx9eNXTbzuj9BXS",
  "key29": "5STqGz9NBL2Prfw7c5LiYKRJZ8RBSLx56PBo5A2kSC3pt2rh7xcXQQD5FehAP6SVR1mPSNwZvQJDEwhmBTZ6524W",
  "key30": "5dpCjxQKK3azjqD1Di4WdydMYRgQrj3vKpHF3KqzXWKqcSkF5EtZLhuwRCpJW5UY7cRmC9yq3AFZZAmkrEVakA3F",
  "key31": "5gufdkGC9XVx1dTKYZnjVZyrF2TUg6F9qeZjRrj8xfJpELF8UVKff6ob6V7GJGGhfoNmy8gZpRTvfQpnzsSuwG9L"
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
