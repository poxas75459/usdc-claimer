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
    "4emh8YPU6GnoBYncrNsJexvkwyFBZ2Pfk2sAdi6o4EJKroY3uTS69gv29dCpNyztDpawTEZadJcVhZbQRC1xZatX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRd2dhH1WrhHKVFKzRKwUuDKAKfrt73MtYWKuJnBxtf3rLA9SFAF7roYUr1Y6jUbGtZn19tMLfX6fXqVb4USzeG",
  "key1": "5EZHut2K95LTi2E2MJYi74oamJwCQnMeQf4YwXpMX8QSjrfu8czJ9KmzeHWRV1n8u2439D7fFCtdSPmRcsoE9kmV",
  "key2": "4q1ViHQf8woMWmS4bPrZcABy4VwzvokHPdQKCHr384rTcqk3SC7ftk2ikVCmTmCr71puZQ6j2BX3DLwxne8zHGuv",
  "key3": "5cztKxJLiPW7UTxYCL2xbaSpXuZV63Duk5hbDPCJ6wgLUKxJRQHMZbLnsbmV4Buk1afCKZmPzMG2Y6Mn85qB2jnh",
  "key4": "2zJ6KSpkDjRwjRtBTqQFSQsQEmZnJB55SCfGw99ExvyExu2PJV734YB91MzNQsTQMdXLjGDHtLwWcQEZHo3RgZZd",
  "key5": "2FxCztEhsRqcXMrbRwvw8mWiFdj3Uqps7uzLu3SwXhd61k3DsqL7ey8hQwWDaVumVk9TPqAeimGaBdCgUK5gAyck",
  "key6": "4HhSGxVdPm6yuo6TXCtGkcyeB4ySmQ3d757U8peKP3cQREZnUcVzVEEVV8qdHJyuJbbRHbR8XKpADDg2wEVzVGvK",
  "key7": "Dh5eW82UxjvfDa2p4QCujcqyUB2NhoPB7D8FgytNkedyadtoSURiQk6RYrkZZrJMaHtDpFM4VZQnjy9YQvgM7LG",
  "key8": "3RRzrn3X8ZxMFnmqhztuftKswKWkZidyihFcb6MWJU53vSxVhguGFr3QXmNKFUrpFc3q2VrQ8fCeaPnae6syGkos",
  "key9": "3qLYrk1Kep1jCd4yAs66CTd7xiYXd6yTXGDDV1svGsZb7PGqSA3bqM9bCjBDjYsbJM4cPPE2j2Qosxz1G4D4Ao5",
  "key10": "3xDkwoebr2zQ4R4aYDBWvHs2PCWXRPNzLCYEwfQ8hUerKyjZiSKF5BFReBfn6BhmEXaqfz1MDXPGzvfh15npx9H7",
  "key11": "2owcgswnjDp19RZSDd5bLeEkpNzzREmNE3vwbWA2Xek1uFYf53RMXR4pjK4ZVLtwxWWZ8rV3pJfKZswj57LAz45Y",
  "key12": "2JzJApNg7oVxZDmjGmR9LwwYR2rgtrifMkZjixeBevdYQpQHqu7w2zBvV9Y2HP8FfkGs6CAPbgoYZuqrnCcFTo1e",
  "key13": "2YoAHMVKi5VAscoeyfvnutLq8eKLEPaW5GFVHD4qFU9Xk3q3i9iB6xLgrif7VMnNHT6kKejzsxvHgtFLRGAfGbzX",
  "key14": "4dQg5CbqVdAp3gAvWAUzpxwT79uzvrhsYh7jb1QSvJJXidnp7XPAKErTUT21ojuXtJKjx5vgAYhoXco94kqFZwoH",
  "key15": "2eZjcMQgDZ9J9AJetx9uKdL1K3rfp61jRMf4X4g6bdBJ14tGY5zz4ZbDrn34VtNBPVBD71euXYbrcFUpRVwyCsPb",
  "key16": "4jahXSPcZVvY4iegdnHqbMmtkaJcx9e3VwRFL5RmXc8MQhefyaKGP84qAPbxRhRg5pzq8kPEW3oYyoKxBsPNWz9f",
  "key17": "5kiucQTJbX1suvuVovaruRMD5QqA9VDxAUoo1w4rWVXeehuFmcsLA58p4enSM54y8ScKbAQoBUZWZS1KsCEtmy1a",
  "key18": "57yTd5aaFp47aSwsdQk6Hf2Cub8kCmMxgtpGEWy3ixjyvSc7VZ4pizjEUv9N9wEgJNae8BhLURKGuTTdF19eCEKe",
  "key19": "2vqYWvwB6Bnbem5vjCHPkCnFi9N6rnmeoG4EjgzHDay6BvKqfcyU5MovLnXVjg4Tco154GzH3hRrFXoYYPZk9iJn",
  "key20": "3J2y9URqLg6hfQm1YTs4M33r93hqs4XLzJMp1NSA62HGnjpYEjdfmSAtRAXUD1PSQnZL2iTMqXMGxAeLtm8HSzdQ",
  "key21": "5r1UGrMp9D1k6RaUYF8hQsHYRfNrFr7Yq6md88Aa7vGpSwgw37tZxsEzkYJwAyoN2dznyMgBeRvBmoXWpxNkbeQW",
  "key22": "4th375xsUTjciKmSRnAj1A1Gj7Lpvj1pFUZTgxESXtuy6fazyVasR6mGrZi9BpDaZCw1SMA1NJijfm2Li38FHgWv",
  "key23": "3iJHM6oQddzCDmbpwiiURBYbb1EzgDqNUaE2URVmTvpaNagBSQz9k7vDqF1wsebeZVAbGTLgay1fcywoaSm3QN5x",
  "key24": "5TsuygSjNWU6Y5ANcW5EhRsrgo8sH5gum69wVTyi4Y2QVJpdCFK4UPyzT8EGtaz5QsaPpAXwJUPjKLGNxWTuLEhf",
  "key25": "486AnkPtuAy8gjyXGUfg6x7zgETnsN195uoqiJMD9HRZNrUHvAGr1z5bPxVCeDoVNjN18wtougrsZc1MqQQvH5cP",
  "key26": "wqfqJJVC3BWpY2FSnmNnPz4M72k4znZQmFWbTLDEL5pgV6sc6LMdhqTa7KnV3epyqwBssiAw6Z5pZqRU3Wk4PEP"
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
