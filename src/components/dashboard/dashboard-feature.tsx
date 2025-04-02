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
    "27dNbp84hwkV7Ej3KnxFsZyqo7mEbXrAxBnKZnQAWjsWWc8aoxejty8bgGWZj6wK2zR36mN3sr7THwsChLP4WGr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ygMRpPwVxSidKSdq15Jpv3xY68CmB9QVm7HKe7cuptdwU6iNpqBVykLuBA7yTZXb3WKxk8vmiLfvzw3uZzETBZ",
  "key1": "dZ94jQ6nYyRsssdNEaD27KxsisT2kuKBT6vt5GsC9VyQsydhXrM89JXUNu51mjDVwqN1D2TVvthNNo29Jy1V3az",
  "key2": "XfwTPjdkVA5GJeLrq1jYVPMgVrWZZX8J4rxfw9Y2AzCoKKLdvG23M5pUDMacsDjRPQRuWj5fsrJ5Sfz8CqZNkxq",
  "key3": "HNUwy1sDMx4vWKDWXymqeHgk4cdJCptJuMfyBRKeeKzak2aoBBUKWfqxCdMXs7NdfvrL36ryR4guCwDYufRMD3y",
  "key4": "4B5XTLrmEVUHQbRoHz1fSuVcrJ9n9TVQsg2bcTRSAZCzznaRo3363pRsdzgnMRX1tQPQFW7v53Xvv2779KaLKrrt",
  "key5": "2fiyAEAUt7oaQJeEHz9f6ZuQxedTjcdEGcTjgEfy2Bo4TfsXFQmCduMFnwghpqyiTNBCN3us5Pq7wAsLxvQbx7DL",
  "key6": "4HVmAvMZRPREKMjQnJAx9Pokuky3V1VH64UKXkKUw23fN62G3rDQH5yQFXmmARdfJDgbUiRpLTdwUXnhkvGGzuK7",
  "key7": "4cHXHHq6tEMzPxpDfKH92xqnaAbs3owtq62orEW4T1xvwefdXGa4qWw8mNPtgbBJSt5k3iWHR2RjsfMwNK85gYmc",
  "key8": "3R8GsaDGzaJLkThCZZBkDNEwY91hKDQDJJcA6SfNRxL7WDZevDaG3shzTkZGDaMuTFGnZUxMFc8UbLRbQ54d9nj1",
  "key9": "2mBYYBGP4ZANJQWwDKwwFjwvkb6PwTPnabrqgFGdvJBS4yooRDw5uuphnZ5wcccXStSJJgYXDmVvkmAHA8KSHtP1",
  "key10": "3vMwnZYmo2UGj8xAGoHLEDUGkekNF3z6vgGCt8nyyktpsTTrMKr5M5MQoqtD68PAWctPJAceaKFDFQfXhoLAQoDq",
  "key11": "2GS7uojmC2QFoSQf87E9fc7G8ojrfQxYZxodmFdNvvZ5g6ZFt9Xq7xuuEs2BAGfss7epn722LLjf6qBKu59T3MoA",
  "key12": "b9ggF3ciHvkb5KaZFNZZW5kFTQVPkn6dA7z5hzKQn5XDXN4uebvkbcbT9NyMRSmja43AhKxRZWXT1awP484k7v7",
  "key13": "4pkpr1UfC5K7Mbjz6YhgLoS8WGA8Rkt2dCx4dULGwTLeQrvea26VfcYU3agrHmrKPzxnyqctsuuficAX6qN7DQnY",
  "key14": "3WgZJPdvhkkUrTPuaeKarqs7wUC9XAbJEw8Nv1dTP3PYJYZgze3cH6EKWSRUBCiq4SuJzSDjwLsggpsU6k2ySsMt",
  "key15": "h6BGtKYFDNByP7C2JLdhPhpU5pNMNmzRDZUmnFe3EfTiDCZfreYK9CRVVAe4tqgSQb8prw7Q7r2bhy6m6kV5LaR",
  "key16": "uknnb7WA6o6u41N9A4Y8ho3isC7yEgzAqkcnjgnFW2sy1WEeQv74BTeJkfCQrXC6TVxiPxZn9vKfLfiW6H98bVo",
  "key17": "271EtnbnthZnBhC9ZZor7YMWWCgjyFDSB4GAXdnT1bafESE1RBxdJHi4X1SQKyocTLV5qZes4avJoAqBX1jCY33Y",
  "key18": "2e2V1HagrgpejxoR7qapirs3yvBg2MLrPm83U7258kpcdWHGQ6ApTDFYYBwQDyGbGhpHFQyDwXs5UGMsazA992A1",
  "key19": "52BDDwqTJXoQakBXGnoAryQhFbRNwgk9xewUokxMVeayLMCS7iif9rQs3yw59ExSeywhbR94gzvXFDuhuGYGAjzh",
  "key20": "462PZakSM42f12A8WywdgxvxRMpH8W2yToi2V1rmb2Bw2JnNWmgYt7wSSEUtcxAJ6awZM8prBCGMM7Z29H2CZDyi",
  "key21": "5PU9uhZMbyr6MWhUoN54gsWsE5NM3tuXrsi8KW4H3JVC9Vy11qT5EoXvF3THE3Q8qLfqbT6VNi6Jwjupxnc8T8Mf",
  "key22": "4Ze7o1w57JVJRFRmuxenbbUwd1WAaxgBUacpKQ9ojirFEBuHunkZf7GJb7gtACjFPe5WiTR9uYibwc12sBCFSUcG",
  "key23": "3NMk427NuZnVYci1faCM1Gem2LVYHBAMqBHjjaztdHBREZDTkKAtknkCRDUzUNAuuVhvW1gCPYZKWo93CHHa1wQC",
  "key24": "5LWh1AtLGRLEZeowjWDbLH9fNncdpNSxTmJBXG8dipbqL8MANqUkVnAH2ppVPRSnaZDVsKcoxdZ5sRuhkqUeN7Vj",
  "key25": "2hEE51GZR5xBFfRdqdTtNQi7xnJsBNEGXJWmEj8AWBHxyvCLmkEny5yQ6WDe8NQ4fBkWJMFocryuAPMb4zFpyNYm",
  "key26": "YT8YtNV357juzBwXG4KrVu4Dz3MVCFvYhHzehzBqgRtjgxTZYMda9L9AFM4KAjW7zELgVD55CyrzinEEb2dwXba",
  "key27": "3s2MqVLiQ5yn34Rt8kjeGWqdY1ZjHpBi4SxF4C9tSxSfhYxMP2tDqKXsuGnyui2uvwFLFX8U4kxHXuoTnBLkNCzY",
  "key28": "4t9BuTFWzQFXptAgt3nLY3aMGd5BLZfYw6zEw8yL7pmCoJFsmw2mKURFfSRgCR44eEreistqd1hf4ccsA21jN1NR",
  "key29": "2aKNkmBi8vqo739iuNpLDn7kcfvVto7W47qrBVpjyP8A1LRvppFYsubTfWPeugkKMDzUsrA1Z8QU5nqrk8EAywZS"
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
