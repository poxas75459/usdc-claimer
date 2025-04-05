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
    "3MZPtiYRZWQaWFsAfFQvgsL6ckLFHeycjhoH6TZ5AcBQB3LnTxXrUk5EiaUfk48Yx4awf5AqY2tZckdGka96UmHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4x6WPUqSspeZF5VsaD6ruPa6NzjkYY9oejTLQfrzfR8k9JEsGiQnWeS6Auv5cxSE7PHfWnNJMw4VwVkrt1G3gF",
  "key1": "5V4rEQ9iUfH6iE5yL8PtLngTqHgi9wcMNfrmXzUpdq9DFhE18DpmM2KPYECJZkeH55rAATARoXKiAuTAhXM4TCje",
  "key2": "4fvER7QfGipMyK4hYb93w5b6kNLiJ39xuCwCAxmmeQQ15SWx2aVxyJy54qnVfA8M2Sr5LbcUftUY2wFb3aZVTsWA",
  "key3": "5rw4eb4GiF9zXARXH8L8GWCWPvS9mLwYND3RPx2sWtUkWY7ibv13w88zeAmtD38Mssk2p3M12cVUkUNqbxwWHQdV",
  "key4": "yES7oLgJ7v3DbjX42t4n2VzddffgaZmjyfjKsSKxMiNwGv43FbCZfmA1QvdLkDvxTCneyi4t2jtTkiudTJwLKVJ",
  "key5": "2VXX8yV3ksRjxdHWCJDhP8r8rEbNVGwKtUqDgfrddQDxfUTUqd9HjHPbtgfdo1cqtcPJo5MUC42boTHDTgMHxuE6",
  "key6": "2m8sXmX7xgvPaS1YYj76zUgJ6nDTGKnfmgcvRoKS3XLjsiQi5q7kjM3hHPaAi9S2EMxrBmFgSyKQFQK9JGdjesb6",
  "key7": "uihk78oY84sHxTfQ5zunVJ4qgvWWrmcBQZSjcH9N43sZbzueJb9p4ukfmiV7Wdxw6cjNQXhRZqYxYK5DY2LNLqj",
  "key8": "5BewWg5SbPLFneU5Wa7AVcxzfcR6xTfLNh9qqpVzMNGUgRd7soxRhu8co6ZfM7NEefsAUpfUSYiNcNzRbK2Vg3Cn",
  "key9": "gSzbQxoawYuZEVtgBgdxWfmqWLksxK3va6ZUeLT2rW1WeRMfGg5ecazzZP4Mci4YTTmh73FAxTmvALVSftHU9K2",
  "key10": "5DAZNELneZmMHg7iucfn3iqLxXkxTvkPQPjP6qMsR1MWzFPv4dShsMpZjL7dagrZ9s75Hf3UJnxWioLaNCLnhbVo",
  "key11": "5AsYDAM6FVbuongcu4PCoCL8tEFVQqS6qdMMV1FquZtakgo1Cvi3vPuW7tCkYKg14BttRYcUezfTZWSD8PDTb8r6",
  "key12": "SnzUHWMQEBEd7DrPK9NbPoNTtL9Hfz1riqNDJzjuoEYXWyTZhSa7XXqJpvTJX2w6wKgMuVD5X5uz9i83eHknbre",
  "key13": "4DQ2LPxxfkPxGBDV8TJ4jBEPRdhLoTVa6Cg5f5xyA7mzwJ2MLu6g5hTmJYhEQZq2SNap9Va89pJbGjSmgwHVfowe",
  "key14": "3u58xPri8gT8Mt7CxKDhXEJnuoG5HKnYiK4TkMm89RynLWJUMofowAeFHBQHDbwjast3sCm1b6wZdmHTcfks6u6j",
  "key15": "y3myUXXSLFp4w9RRvXhrq5hBvCk5SwyxR6a5xdcAEWcRngqKfqrGPo2bipkjz85mKoQGTpaEKaFQhQxrtX3tfxZ",
  "key16": "4RFW8JegS2CjnBYDVYAoGfneZvmEBFLE8x2qvPmc7BFkrw67u6AeU2gcF7YCGyKxqhtpUeWR1BNUzYQJr1irxTzk",
  "key17": "4eqtviaXcQ4gmk92Xas5mgbfJoVu7UT2APLR1xApsFJ33sBgHaQygj9WePfFjxxevHDYKWnFm3oJW14vB5GQRJn5",
  "key18": "26rKdqP1AzFeZR6Yw8XRs6bN98EAEDia6sXHG8D6rgefK3PBn4E9TsqYLxcUeN39a6KKMLiigyXKxj89KhzpJ4Yf",
  "key19": "2rumkitTcHht87aaJdmUg2SkQaVcHH1z5zE6vYRyS72AdXyLPB3acNJo6GQVo3D7qJo6iHdgCXvovTH3t4c978d2",
  "key20": "5zFuvLRTkJfqLRQ9oa3d2zSvSvkSqJ7QyE9bN8jGmyrf2naYf4KWAJJB37RzMdTjpYkHmMWUSE2Gf4MsfBCu39rg",
  "key21": "43UJbqWkZoxNfeR5w15giu9uiwPib5HozYJ6ErRaekjN1aZ2yCE4w1pSRYaa2CMr2t54LpCypW9gsbbU6SuyNJuz",
  "key22": "4UrgQjQcH9oYqdwrj9qt4RrvV2xUZXXNYJPV2AyrkqujLe9DTx1tcX7GsrgoAirA6X6LXQnyFS7sthrXViWTC1wT",
  "key23": "49a5Gn9xJtGcu6gEDRs1pR151ChaFNNWgqV13t7K9G8CEMeeq9A2QJ4vStw8boD9McpM3sWErUeEsNBsE8eLd5w",
  "key24": "LSkB8qeXZztaPJPcvHJoXK4y1wGG26ykXzhhAZ8ubtKwButWgrgLgv61NJZpmGkmtD9wGun2X7TEe5AWN79HBo9",
  "key25": "3xv9MWnBSpLrtDEJmM9wq168oFTGoCQyh6xVzi1ziAWjTgToU3wMap5Qx8AZUtqLFqDUCVzC5qnQgh19MD3aH9C3",
  "key26": "dHfXwS8KdDUNDFutt5vKrewKxUQgoqb31v2k7cLKJXjU8SC5VTikiNrXr7NcS9XhMo4xGwTyHLh49Lg66kQGbop",
  "key27": "4fsFGodRHXK53X18Sf81kD7RczWL5ouhGFC9ch2xJpzZvbFD1bVTgR5iCpzGcEBq5AxQGJD6kgqGLorVoWnjyvMW",
  "key28": "hKVeF2eJteMKisiqn8q6vHitDyTQ7nmA5gC2gBmm3A1v53mkRAMxzVPSpc5uowu8EgPi4rDNKcoFUS6zGwxX6A6"
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
