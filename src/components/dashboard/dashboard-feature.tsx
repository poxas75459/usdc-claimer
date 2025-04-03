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
    "265S8VMFUaNZjDNse4JDWNuJPCTPFCZ7mdvkk79iULoPzFmzjKqbUTsny2nrFjtWFQsLXdqsX4MhTJoyjyZBQBRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekpedz71NSkbcFwAAJScfXUnPKaQyWYb9X9pPMWechnRVzRLrpHdykFGALif2RMpbJw46rbik39QQ11Cbr7wd8p",
  "key1": "2XyPkqmnZwQXPUcBDwuQqAEkgGYVfN7PBnb1j2bi4pdyjw7G7tFc39tAqYSS4prSAVtEzYjL5H2N9CbB6aFwbUkA",
  "key2": "39SYDYMzg9j3VBuhsTFTqmiriMQ3KVStgNTaAcjgHWR9UmMjprRabNd75hXiNLgm33EpmUFPXyVSFQWA8XqBRSgY",
  "key3": "mqBVNtafGG2iMWgZcipHeSvT5ExpyLC8FAnPpAPhVLfUU7kps2Qk2JicuFhYbLPciScV1g9oy8s3crmUH4rBwyA",
  "key4": "pVXHh4v5imD7tGzPAddtCTrNi6mDy3kev8nqYxzJngCGHpp5KEjv13UgsQvqADEaqizXiFSHQHZpAGfYZ9N9yd3",
  "key5": "3yvs7tW9yBiy13Fk1k3ubr8Y8mz3kqTtMbj42ywsuU6rKps7pfTWNnppaj85WC92YGHC5RzGCAr7t69rBQxuHjoB",
  "key6": "5gV3RBJEUwwJs5UmpaZa42W2D2SrrNCNJW2ZqYfFnDSehP35UCKBcDtNUN8otb9Qm5wo8y7yZPYr22nSmeSMxY4e",
  "key7": "3XFUbY47pJfyM3TqdvAs5dx2zxiK6DrSvR8utCyEYQRqA7FELFzF4cJd6ZZ9StGTCiG9W1jMgCdqf7akHaUvzoaU",
  "key8": "Q5vRWi3cL8nhz4ArkCys6a3xqX3bcRjDVGRnNMdjr9W9RCHWBnW5nrTNGcz6SSJRmYtFPafsUAaHLvvRDuNxWk7",
  "key9": "3Juukw8V8uHWSHf8dr9Mxv91yxgyQ2z745zP4Fs5RLkvYnvxErYuMDNonvFags6LTYQaLuuveVQ2MMNdeN8heUQq",
  "key10": "5kQJR42CmU12QFrPNHmRHNRzKMUxeWZNhXWf8wAW6ty5YPBQ7gAjJKSRLtdA7Lh1vyryg66FRUnJfvTDdagqtZVj",
  "key11": "39YG6Np88Hvb8YB6rLisiyPw7kyzcxVvDtUE9Q2bcThRmz86RvYReabQGsLdVN8PdCruyJkiaY1WA6LtPgApFW4o",
  "key12": "4vLw6GDq83Lhs5Z5uyDt6uyCnYRD9VgSY4NrdnPnEgfuXJC3Zx35cDdQHnNem4DkmL9vu6oo7rtQVosKddYXTJhX",
  "key13": "4JsHUKujDpdSLQVr8No7avHKkXcrXMUGqQ7SMpQu1gWKMgWHBRusbet3vVDcAN9hoz9yxTFL9PNikyDSTZhNSFAs",
  "key14": "3AwpQYUsdPc4gQT2Tgfcd6cq1ue95S7Q6PvjPukcCGb9q6czgeQQQMiWxaKt7f9W57AjHLRBYoQKksLQCZWZuUsM",
  "key15": "59rNsppnPuJYi5wu8Pzbsvr63zddzMkU5wDcnKGfsh5Y6JUgVBZYhBiUr4W5dpkfPJa9diV3XCjeWnJv2LeR7Fkx",
  "key16": "B2SeDw8sxaV3HLwUFcAGeNnH5QNQgxeCarbKyXWBuaVxEqMeXffWyzstmjoedFNnS5mUrEUo2RsJMgFn9NdpkoK",
  "key17": "f3zSa3J5gxHq5XUnCaedmZFmwWqi4oVQtjp8hrrKTd5oMXFNM8cZjpQn8FJ3dW4ddGHYF4zYbSGbXmqW7zAdjqB",
  "key18": "278hV4PbxhVFujT2Z1mbQNnvVrUBRdUNe8baKLZv2wgMTvcLH7JZAgpoUiadJYbKsEUJutWViJbNrwXetFvH4fXU",
  "key19": "2hyS9eqe5F9cGBJbkjjGgAc5fUq8NWxRvK3AKqGWCukzkNjpzLLb5aEmBtQnfbDsRNvcMC5FzXgttzJdvouZu26d",
  "key20": "4wqMG6MCwQUcu8PEbQJtG3ZAG2uaWgmveVPZ7nBWxZeMZL9D7mcz6RQL7gF9AaLa4BGrh1Jeqaw73FWeKUvGYQJ7",
  "key21": "4V7TkSZSNNMBJtya8ek23V7JCFHbMGn3v6YUxdDrye3D7Gg96cEf7hjNKhceJ3LRA1tmVEr3FdvDLkHitGEKKJLD",
  "key22": "2nUifrgU1qcRHkCxDS96F2tjKKeJVWY3qAB9irFwtD6EhRUUfp5qGsSaBWDDBuJYMJxoHLYUkzPDXfhHtrDCvJ5o",
  "key23": "5CDAfsAkAaE8ZvSHGm4pDDukbc6rQbBQ3DugPhK3P3EWazQmzeWpLhrNdpp9vBGy4ZUFP8s9VZopDV5wVnVvAsyT",
  "key24": "3hyU1NCsG3dxhdkg9Zm2cTRBZXDxiUDyktJa5m39L49TTvPbb9BZq3LhJzLzyt7pa4Rb6CfrxkEY3G7f6gMvZgps"
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
