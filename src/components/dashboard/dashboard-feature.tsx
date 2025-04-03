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
    "5cz5PZ5Es6YyMnE5xtaZ7AJnJipfZGAFfs5W6dWPHBWBii9wxjAWzNVHiifF4porF1kbTKF2bwJcvXtmz4wXfVWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXGLqwpFxBRfu1unKeesjw65Uau36EMza2wcXai7tpmb87Wroa3fC7XhA21turZJXQHTacnhV6jgvxxarkiYzAE",
  "key1": "239Agz8k6V4yVtvJDMYXKQPUHy9oSCxT2br7HeSVtFGJsdhmpUHgBMZmwcufY2TBwAFrieGLnN95NKGsgF4HcbwY",
  "key2": "2wJMQMEWFogHQnpnEMkhbrRukjaQNUu5aNDP5KFvkqjx69siZySsoQFotg9bR1CQfReYoAjnKrLKuHUj5NAVVSsB",
  "key3": "3Ebdgixd81hTonfLyBp8WQiyqBJYmT87rcbY2UA46yyqSFgWM6kEHzQyW4rXp2icaDbjyn6MGQ4JBcSkhzUz2iXy",
  "key4": "X4KkoKmkLkjaPGXadXQ8obXK6xU74deH2LxkcxrdkRoDkYT6jZtr848hxg9einrn6bkf2vhpVK9LDRVUQn6LoBn",
  "key5": "4eymghrjUjTbaZHERivYLEskjSnEwrCzGkhnAP4G9FRfrLU59yFPLN36ZjV2rXKeMyBBRJbSJmsTLwGqdMVQ8yD8",
  "key6": "4d9U9HRiye73tXJbW9Q27HfcbX7jN3nraZGV2hik1fcvbV1kNzQefGgBPm2EZCjWvY9VEJyVyKAiS8wk2excifds",
  "key7": "2nb9t2D5iLQ4PFgei5F6duiV1jokfr3z6kUd6Giv5XzpbnEPUHjSS3exubuWQh9XX4QwCQGNvqebdGhk8ajESVp6",
  "key8": "5n7rKxkd7aUpwTBuUrfPGjmKP9woPopPoDjQgD8FgPhQsWdgj5WS5ThkMR4xFn9NwDHA2hKbezN9hkGP4yevvQnR",
  "key9": "63TrX7MNK8ABphTdstcfPzA2qS3osY2mxKZQ14fBnDjT5UDc8f4rriTm6HJHxZCh1gyevnj4baenua8ZoyndFq9j",
  "key10": "RSw8AbgodLQTbpXCCdENMcna9PzN95CghcQPW1FXha1LEujM62yfqweJ4aHpyCPRyiK6dJugUsWNi8eCAdPPL76",
  "key11": "4sBHfm71JJDapcy4fnaMqtGxoFReaKbrkGeoAGQQdTbhcnA3Pvw9h1vM5gkSWc9sVEk8ccQXcCHj4HPE7xCPvzHh",
  "key12": "TLS9rw3xDTtJvmiMfZAEP2SJJprFfY6Qci16eFiUEadvstpqA6hK5PM68bDhFzCD84kGScFe2F6jnbU26YMDb5u",
  "key13": "4aWMKAGySRQhnmiac3zJwZtWGvLHcnBVhHZszAG2Bn7wUsz7xJyLzm6U1VJkArdZGrwKDtNhAxSkTETWn1HZvfZ4",
  "key14": "5p2ZoXrxdtPBq3kt4RnAWLwgmxnrdA3Mkb88LQSQFzg2RjZe1vhzZjG8M1HWP9nYnApCAXDaw65NoALgGWGMqkjW",
  "key15": "tS9DqnFXJz7mvqNWvGUJ3cFd7Aybcm3j2Lv3aGZgrqQ43ZXnru9y1Je7e7VCSgjY81GPXxLke8VeXcAAjQtsnTQ",
  "key16": "5pyCzc7qBMm1tg8NkV6MCarMefgr5j64HCWhmqupMdAfR2PRJBGo162gBH1B1gj7PMXQrnWy59wtxJ3RJJENzfB3",
  "key17": "27o46MVem8Uxuvz7mUhg8urc6JCTqCJE26Sp7PSjjD1ij6Qhbwf8p4W3KZBeDvEYg9YzcRbMZTkrhumx9wJU2ZCV",
  "key18": "sByWHDJLPZAjQA2xLHDWgtWrwT7CaKqEaL9LKpvCLKQ41G81LvgEdTLWTvLSjseXJjJkyNoPcPLmTEH6HS2JkpN",
  "key19": "4hnm3z5tPA7dFqSCRpRLzyC37Wb8dw1R2bTRjoZSZN23inSfkx7g6DRzDrqcKn8xW9LnQDWo1CZWSoER5BHqLuLd",
  "key20": "4urNjPFvMzB48nZ5kCyjZGo15Ti126PuNvUQG656bYhVr1A4AXnJhDZpP4dQZBtY4s5JHr6YaSeKC3GjgC2RzhNe",
  "key21": "5aXXnKvp3HLAZorFkcNHsebyd72X5rje8giWqmqhBYRxt1pEiBE5bSBSbAjju3Wn6sfCTJVyQS5YMPgxGGZkZGEt",
  "key22": "UwvuUuQ7xCMaog1wNcepxfc99bGTBsgiYzuZ72BUaosZTTx8kPPF5s2wfmadkDqSGf62L5eCkJpD1R4rCXkX8d7",
  "key23": "5kf8WmrzjCkdBiYcqmytzJwFHb3U2XiDZqd6V46YgEMZje8BUEfDXBtBUANQkh8wVwFWVXL8FnRvyLBPEwW662wL",
  "key24": "35fWDqa5WgL2XuM4vTAwC2eM7xEwzcddwWekz5gGWUtTUdex6MSt6er6TPwJoC2tHoZXEAN24zTybD7S6xzRr2iE"
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
