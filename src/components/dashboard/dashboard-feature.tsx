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
    "5ifUDbXBeD5vYw9GKamwphsFKuZhFyxVNU5StCe2hFgjTWKGQtp42yfEkRPjqRjk2khYkQti6jiZRrd81RosLogx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkCt51ikudjs8vCQPUSQZVSBY1iuDeuBXVtrjnpK8bmfWfZj4QcEaSpQTzFaGN2ZZrWVp6LHE88nXWH85Eap5RY",
  "key1": "5BqeHxnJ4qJXNtZpLFyf8YG666pb7gkKG5jyhgeKD5KRkTDzoGZk6bu4zxfP4ZoqzaRgupLFiJ3GrTsQEWKe1wCe",
  "key2": "2gkzNxSeJBvvwpMh7pRwgaYgW6quUE62BB2bsuAqqbgqza3xDYiq2infcY8BE4KCgZWwrnYJkqMzSaL2uXDctVxA",
  "key3": "5NgpqNamiGCfd1v22sktZcoEcsheqwJBTMHRqNzohpUZgaz33ByyGVEEqVoijDBBTzUVBNnx2hPwaQVM97C5wF2T",
  "key4": "5cX4enBvgFtQFrbEsg5CQevFF7FT77Q2hwBHZidmYqiSpBZDMkafWdGMBAtCH4RVXiphpLjpJqx2rZXNEzM1Q88P",
  "key5": "3mwfHFDMutpjDaVvfxSSDyKg9pcGYhtoHcRzGHKA9Pyrh3puRJdfbbBdEpJPYv8hHQnYqqRoYmz1YZxacVHiQrb9",
  "key6": "35PjFS6H5L9qSAbruJpSeGQ3eNDMi7uoXkjjK2yEZdC7xQccdffn69xMiG3xuPw5hDSktQDCSEBTDvr9UQUAj8cL",
  "key7": "2CkzhMXD21qK69t1Fm9nTxByeHM9ZcyUJBzGezkFnJrv2vT8zaNcQ343gdJfXvaA1zCRtecd2xM1vH1P3NaArbTc",
  "key8": "66C7SzY1z9bZH8kqRr369UroZ3kwBeAg57BNrmWp9jHrVHeEPrW7DPRJxqiBZxUWMMJM1DmSiN6rHH79rGCGvvYE",
  "key9": "5XkYKSKZxfPguWvvvCKgvRNgNZNagogqWPHAKJxLVKy5gUjRoVf5CE3CcNsKLDbvCECm9v8aRt4yux9ydowfewFR",
  "key10": "5aFrA5ER4wK7jHLJLNAhAdL6G9Jfv3KL8pqUHc43wNNJF99GcuGZkJqzmrz7KHfipFNnd28warupTzRxGsXGgWyz",
  "key11": "4iE6HfBM1Fwy4Vrhn6rYnsEKqFb4wKZiJG5bfxJqYRU7bQ8saFAU7pbMNNPN6bLXthE5UppPVu1frRNiLbwHH36Z",
  "key12": "4tZDbBhYmgx4FqQvMYZCkkXMRMLjnzk2xeY8eTGULMGmaW2YNP1gqxyrGbd4ocmhNRgEmJMAtEUwq6DhEW3dJu5q",
  "key13": "5xCXiq5uvs3TQtMYTPxXsXeRK8rcotHHXzK6hBaWQnEBe2FnWxrwfeTM8ooZd2bT6ED2KytC9aqgdRHnpSUB5fJL",
  "key14": "3Pyow3vxp8sLdRd6mAtRtuf4xjB8nn5hGsfA8UwoLdnrJGpK117aqYmNLZgGaDQ85LszDEepsjBKMKc7n976Dzoa",
  "key15": "R2cKQP7tyZTmxMD3XvTLsQz5YfJD7R9T18JK4oLNk6WrMqGMhwvrs83bsdQdXjTSXkVvz7tafRTqHR3Hs211i8F",
  "key16": "4V374oMa6xduC2EJDripUxtSjxX5x2Rra9P79t6Hb8nrNrj71rL2cEvwWQjByPDdWVxMnegXZsDj6nP3YchGbCND",
  "key17": "5fuQae996W1AHScbdtFNg9zGQyCC5k4zNhR5zQP93SEut1i8QKoGCdvYreDLxm4w3SyGLJbY7oamsYjAzTc6BfZr",
  "key18": "52TXeVb6bus3KoNaAZQgsX84ZuW6xiVs3CyRZnVxjzERTchjrf8rhwku4UusKfrLgqKEomrWEVgQBv69bNjG77BF",
  "key19": "2eT8J2DxSbske6QF2A6nSQxSJPFka6VrDyUBvAGqK5y2hDAh9k7pzBzBfiwku4VURFERk2V3T6J8fm8QHRzbHQzm",
  "key20": "EQCNFaPmfcqiMpiSqpstDYGVrRU6ycKjEsoiU5bvvSDaG93ZdWLHXJiWyJnDVKy3gMzuXqPwgiSYEvFbJA7WFft",
  "key21": "67S6Qgc2DscgbTfwjpEXVSVTd5b2w6QqnRmbMVbSHUogcVfCqZVdi7YDuRE6EsRzDFoZ4EdRi3cDjcE16KNgiXYU",
  "key22": "g8AV3TDfnQ8LgPodFpiZngpEPFPBNy7Ui9wUZN4NdqxzxR3PUbnSyhK5iAsJ1BkL7VhUq1JDoV1guPJEEFXjj3i",
  "key23": "2mQa7dnBJXdEj9iwsrtw2BQXBYAx3Svps5Yo1Csz6LskTmsat3dW15s7QwwSJPBZ833ZFUBNtXxuhGYXyic8jhpY",
  "key24": "5ALEDY2sSu1kYSvApf5eAvXZHu5YZHJp2ffMsTxd6SPHFZzXaobeC6R2JuCCbA3ixvsa64E3C1Dnn7QBw3R646WZ",
  "key25": "1cuGLt3oDuNea3JeS9oHw9JkcgJ9qA4gyknK2AR4kj7hVkJpUke5G1xqgkfZYAbtF2CNBQdHVKDGUEkkUYjGhXN",
  "key26": "57FSCbDc4bQDMgV3zrJhkhGSdPBgLqS6bWwdjcbzDJq1xpQbCJmPBF7RjErT4YaiWzXQviAPHKDEf22w1gL3eANP",
  "key27": "2AyiBBomn1a9kofC7kXxZZDQxbXuKD57w8ZNdmhUFs3fBM22ByUgFAnRvSD7Bk87Fhkr4bTjt2Sr4jZ1z1AdScid",
  "key28": "47gZtD2etzdsEsKsrHhSm5xWcAkMjzZMnM4uTEH4NQ7ZjGp98StvtQCEw7gyGF5dU9Y3xGkR93mRjaF1jV2H5ziL",
  "key29": "4fyjwB4NA3DWg2V1KWau53UBUimFfd56gBwkT5EJkv3NZERBRYteCeobdyHc3NnHKFE1NuGFqv2X4WS3wzgfnTs4",
  "key30": "4ViMNaocXXHfLKmdNT6ydBnAevpN533wK8HdKru2PNkavoAV8wpQXErznJs5cJ2ug2gYBYRvBQYDpbeanW7VQoof",
  "key31": "5Q7sXphHqp9a2fFxJXsuLVBoaXVAPxWu3Y8MTyRJLrD1SnL1nsLgdugWYxS5D56NPKWtmUJzPm4EgXFPxqs3DmUH",
  "key32": "34epmaRZwrTbRxc8TkaaLxHM4xgCrPmdV8XuLwSKgYCF541jcdV6eLm2fJaX5pzAroVW3FpD23nB79Ky3qxs3wt1",
  "key33": "4CVMsjWRiuWfMgJeTceSDu8BYBq9qWVodC7MkuezSTGLhoorm6KCgVkzGqdvdFW2pC3n8xdEiGcdhtgo3CzGoqFe",
  "key34": "4ENcHNQkihq5M8R5BHE1kLDh3ov4qCJQwCy6njuDK4LncgZGVCTurjyE2Ta3FQZekfimTh13mfqw2mRvgPT5n2U6",
  "key35": "e7dAReqaRnPKNAF3mZM1YrP2HVDm6kSG6uAM3ex6ct4stmN1f9A5R29emPNu2MsyQEgcqQR5fzx59FChKoFp8Ct",
  "key36": "2aiZzUR7c6EKGdj9CEixZp5Pp3qDYwRyNnuUrBJP7vacpjztvxbYp9KhQa525jk5JiTwpMvc71KVwRagAsuF9Ge2",
  "key37": "2KVL6NnYdkbbVh4Co3UgPKP12dQvUFHDEwHZ4zv7ChJQWFMywSXJPNJxMNwkqvWS57vLZqA1ze6HrGkxTckGuEhr",
  "key38": "2aysDSH3RngqRhnJEZk43uNp63vXgnWAkeNRCi5KJGYZNEPq1yCzxNygYhLq3qimgJN8bfFZ2cPSjf93fPLBLgp4"
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
