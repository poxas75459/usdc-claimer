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
    "55oZvs9jdA9Zayuxt8dkKML4xoqbd7uVdBbjNqzeghHpKVbRsU4ds7GZA1zSQv7nxmLead2RZjvFR6PFvJhLyCTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eoNeREYxzPyj52rCPT9J7JNJNHir7Kfo4EZ9JQh51yEJTfrMLfTbyRPa52iTe5zpm2s3UaW1toCk7aszxKET9t7",
  "key1": "QtMAesatJWPXJTwEtGT8X2oKK9dXV2Dwio8uM4gNLa6LiimpsJDCZBxVniWZGbLPZFgaTFzaTCZdN6gK9UaYDmH",
  "key2": "4DRDj8Kmf5Af4A8zJohDCdcAn3nhtUwiqNz53d7dq5ZHbFS22qavc9VRN7iaXhfYFQmx8163fhZWy4PPKXGa8Rex",
  "key3": "H7J4DgyvHFsjkTpsYQKjSiyGeYrbBKriYCuBYa8gKroP7uvpPyPtj7Y9y5dhxBFmU2umkEGmPNkQyKQyKxZ7C9W",
  "key4": "4n3qco5uNr2FYgixdyJeXp2wAwPkDU18mwPkM8edbY1fPcdgtjbxy7Pk8kRBHyn5MGzoQMXptHT4XGRZLLq96Pn8",
  "key5": "4ES4SYBmcN5GdCN27gRuubU6pMSTrFZ5uqcHCgUPag6V2VbGottHvRqPeFRPScvhYAx7tf9KyxNnj8EiqZC3eTNE",
  "key6": "2eYgSATyi3EqHFukQx94yQD6SxT6KEwRb2cGgonkDFjed7fFKG8PrG9CF8WmpJ63jCEU4tyXB12HYWMjV3vRWPmY",
  "key7": "2DXXqhddNG26dLrgPA4bj9CcjqJngS7xjak1g4i2aMH5ZDbvb6VCBvGKSaUUKTXGu4z7EYyfvjNmaXncU8oQXQYm",
  "key8": "3nAowr8EUyM6vGyhxNmFm4yiTpcdMLrmdkvLviJQJNGGg85VM1vLgRs3vXkd6ab1XQqamygSXsjZQuXrdN586MiN",
  "key9": "3s4WDttPrQqEKvHqn7pRXB1jkp12Y8PV4L8jxkwUDAWPC2MNC4ob8Ub9MPUCxTpxQEZ8XkzdNJ1UvdCQ8tomJrjT",
  "key10": "4JLQ3iVLEirrU1M7DnLWfxa6qcXkyxctT2FvUQAUv9CKDTrvbfnpECNHcnxh17iFyzF1avhJD7uEUdtqZUqukXuy",
  "key11": "4xTzRPfGXquS1CQCu9UCjou5TdGfQnQJvQe7aNyDLqy3DiLGwbcVw9LsVoUfJ8rTM8wh72M67YAzyRJYqZ6YtKeg",
  "key12": "oA3Pi75JZbnEBmUu2Z9wYyBxNo2x6cfJ1wEg2YKS3cJzkp1kqdrjebLnKUbZcobsJ5p1KMTK8ZhotvadtVA3b72",
  "key13": "uByDEfx6B46g4rDB4nGFuFyD1ipikssnXVNptkZj7GDdC9Ur6QQmqWSZqVQoTWGXhsEM9mVgzj3uKrFY3AXTdAV",
  "key14": "2wrUWMX3AE3nKuD4s9c36CHfxFS2QFg8kcZdV9H6hETRZGk1QpRCw4ka7cefBLCTdsGp2fFZKpyVh8VXPXaDRTkp",
  "key15": "cas3uYGdJzz44WCXvynhy8QmWngbkKfMMBWmHzfA9t4SjaT4oozxjo2GGapjj39vc7uEHPPGrPUjV4MQukoDttY",
  "key16": "orsHFZtLphfFza5fkqUC3ihqM6qLXjpyLvDQo7QoAPXHzv19QuzD68z3NJqbyjacaTg8xYeFSHqx1yfyMJ5DBnL",
  "key17": "4PNGQygPhHnGvYSoFkv9FvDLeY3rW3zK4bWtkdWEgurSxAb2S6E8E4ux4DjewZR5quUYZXf8EdizTaYveoq9PjpK",
  "key18": "54rgdSbnL4ZqLSGaRqdS44YY1bNEDDK4PSrjhczUQ5PBbRf2hr4Em3rSGn7PJgeaStxqfbgX7L4Q22xeCHUj6JXm",
  "key19": "2okoN2QryfTsotwvao1G4ynzUvVgJnn6bj5orw25zsgJB36C3JLYyr8mizqkjVwxCCyUW2pE3cXp82YJAFnZ1YUS",
  "key20": "4BmJV6u99Spiq24wRmcx2Wysn8cy7QGyKBgdigY3PubmBkXnwYEnvwQUfKvucdHTC95x5QnckcGV2bCCVUdCp5Aq",
  "key21": "2CzoGxDMAR6m8dq7gD5WFP5odrEd73xSFa7ZdaZJ6DYXc2qHc47FCY4tXWHckc2eYnJxiC8GsB915MUgn3YnotSG",
  "key22": "3C58HdSXKkvDNt1VQ5ukyvBKhrvHwiW9irh28fTCxQSzYzhNHGpi2n5gtivZmv18uXQkaSeBLnqamN77qqnVBHwJ",
  "key23": "4tN9LLPQMwR5JetCg5Zb6izuqHwuPcQAeWYe1MM5PXrwajd5zLgWHTEsmFfr2wpdiv3cfMq2LVwuHeuH3odjYQYn",
  "key24": "3SHtUHGcZZPhGihzbGx2qntWXUnrJAzqPqwuGorR7AijT8Jwmuixz8SRZgf8KpXWGZWVoh6uG94gV8jAVyNMGVvo"
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
