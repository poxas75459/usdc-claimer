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
    "5RdLtX3Gmg3SorBJhkbosc2aZ4eeNmmdn9AdRdRtpmmDQn2tspfJZMiJmmPVfxZLPEJwoPMsFWF3EfwxtE7t2moo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38WJNEGb4efo9aYJtk7SAYfipvEJQjANaVo7bnHguPJrQAjhWQPmQCnCK5hSULcj2kNnfGn9C5rwnHZfssJEb1xj",
  "key1": "4DCrbVv36mTtYt73Zz4Y984kfJ9H8NQ39SvYMLGLeCSGds7Bdv183gJM8h6TzM3Pb3orTor4JCFKac3pWrsEea95",
  "key2": "3enQYnfA3Bz9UoNYKDdQK4e9zTh55Qq4smP7Xi9KocFvCSvMBVZzjmkLM9oB5ZJJsNKxnWr4K7x9Ba9Ssc3xcgpg",
  "key3": "s1KZ31kLTaUtqhxCjsSjzkJcZW76aDd3LFpTzPBymwyJtxqq8MkGom2nYs4d4B38tZLYMFQHJ2vCcYMdbGkV12s",
  "key4": "3GniQp18Tq9EXvGDKXN5gt34UCLB7VRWtjy3q1JfdAX4yPErYa5NSzEoQzeoFLuaU8Xjubs54F9cLEFJ2Gp3H5LN",
  "key5": "CpaJijejTaL8VWoPvBYiwV7GUrvsj5KKLNbq36YcKQwNWgwAQkGqwtcgKtvVnuzJFvFbm13zdYLbXqpTZX1hJap",
  "key6": "RjhGGhyvBYgUiLDmxac7MHiDgSqWMgQn6riX4T15qGyQTQuAV6vn8NbdMGr41d9Sc2P7zfaauiVAhAdjyEAh9wj",
  "key7": "RNP94bj9TdpLhMwBRGugGwf1D7B6N4u5pdFMJSKiodLKv8jnDeXwWd91qGcJ8ERUWMPDdFSSgmFZ489j7BXG4WH",
  "key8": "4ZRfGxW4oYYr2JmUsqxD9kdj1EtZucY6jR1ebPNWEbVqm4FEzdAvBxYsDAJv2bPrWEJqJ5BFuCFfsgxMFvvjpg27",
  "key9": "ZVyfMrLVk3yhaqn6NRpgqxZeMhnwgUXH94bCZKyErPvSc3bhcr9kG1DNYHFDeeaEtCNV9sasK2bSP2kghaRweda",
  "key10": "5vx5nd9aVRGsPQQuPrdm7NcQDujmuDAY2sjY7gDj26WmSUELVvuXDMreyYgoK6gzk2LQTHmp2uxu33MkswLSvnZC",
  "key11": "3Yw82hKvEHxQKEaqLEUXkSKrXGXChMEQfyuuUuYj7FViQBvEHG8NPuks8oShWYdyXyWfRsXtV9B82JjDgag17fK5",
  "key12": "4F2fxfBZD4nGavh6BeukLguAeYoQdixGUsaMnHFcvqzf69C58cF6sifDCS47u4m455erxQ8oWUmmPuVWeu93SMFK",
  "key13": "3mixBRCVRWBEm3n9oojGBaUAwibbYmSSL4rwHovEmvcTR26onCsxPC57d2WWcFhS1odfPNtM2j1mBZCYrcbTjSFS",
  "key14": "5w4VuLkaHjH47vyq2GQ5ZtXqoLTduDRetEDM14FmYZy4FacEiAsWCpq4JgGQ25GaNwR6Tm3zUPzdLwBQf8Lvng5J",
  "key15": "5gzMsbVynHhW36SkGpabC8PqKTyRaY2ofDyYh7cjni96LMLN6uyxwdKcqyjK5c4RnesNs2AMXQKJFHfXWk5AmP6D",
  "key16": "4RqhrBiHYiHKXMRGDvRgfxrnfWKJ5t8HBCnsKKbLkP7RuqRAhUsntNdt2tUP4WQWQ9qf8uSaJzYrJhh5dG42dnS4",
  "key17": "yDAgUB7oB8oNyZj2Mnmmu3hp4Vg5RzudPeV3BQr87EfWkYqYCAjEubAfnvro8SqSU8HhPBRcYe5xqKGgxDXDYCm",
  "key18": "DzM7QuDmV8ukdjwsVCDF7sMVEzKeH3PzNhbCLyNeSXkfaKSCX4SL4MwcS4EvosYTMX24k3b13vKkDzVnAKJJaQd",
  "key19": "5hNzFKn9V7MW79o7MQwVYCK7wftgqrwmhJ9icvcFs2oeQfMusnecvKn9EmvApCaEEMKzppKMkFpYuJSfNMt4FSbG",
  "key20": "4zwVxQV124PmqMXkZtWP4g9KiEBycJvhsxeg6N8mZ8Tc4D6y1f3ACbZNkBNo16HfbniKNz5eSRXivapq8aDE2J2v",
  "key21": "3aS6FkZaQLUozvLPGXjrHhmmGciNef65i4Xn7TBzzMYB7xazUpdXuJvttafstwmAGQd6E1Ea5DGZgUu71ihy4yGc",
  "key22": "2VyGsbWmkLXRmf2gSzWQ6GZqTJb3436mU3tnBjSaHkYCuedkFMPM4x1fbQQ6Ub1GAeY2hYbNnp7t8MB87QzQTPbc",
  "key23": "2K4cgp3TYfExXw3sHLg4kPsV6DCyQARwKxcFz7PvhnVnu1pLhoxeNMiG3WP2QT9SmLjoRqBoiCQr8rvQ4irUwVS",
  "key24": "2yuQ9GzeNYYXJcniCSwr9UTEi7zNG2QwbRXmGUdkuC2igv1NSLx2GTV8HwoQHLw1XCCHbRP1zJnsMV5LCn9Zvwoz"
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
