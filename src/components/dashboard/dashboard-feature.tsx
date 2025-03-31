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
    "4fLCk6UuBjmL3Bahoqic2VjYQbqseyxuPuX5uFcdLfmJBY7jogxpVMGPs3nSeZEeUThK2sjsehtUEJeAKjjZirph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8b8G7ypUgit3cYQdTnW7dKXRabCshZpjy7CN5MjZ1DkbZHYL3PQAn5AQRJ53atWWMUGe8FpSmn3Dfqb2DXpqAY",
  "key1": "3egc9JLQuc6qtgqKagbdhviUsr8LwPxU8iBWCwqoPfyU74LvpUhyDMdzKauhx5YigWMjM98yBKUrHZcohKrMDXDF",
  "key2": "JCVN2qASG9U2dVN8nD8UCgrEBFfF3LvVt9tC7FgTaJQpZZkqohFS26MY7cD3SUMxkMzu9DjJzNLVgYadu9CN3Yx",
  "key3": "3bkU3txwgJpgah5uUEk6wacsJKySwqUMMnXqeBpAQN6Xh338vot9wdHA2YA1Av6iQd1nbsg26WXTAKQyay9vPGTN",
  "key4": "4jRciTqQNmws8bmUffSB5MhwuL5ZBT9qhu5xKCV9bcikSvMfAnvzsJDzAVutui6utaKdJvzxVrFcViKF4SQgnBvw",
  "key5": "5NnAdCYhxgxkmvf6N49E6vGMVanCM5b8jKVXyCFCocXAg8jLbgcAYo1WyEd4o9E8vkeC7LqorXCmaw6FHDoT3R7W",
  "key6": "3b5YqJwDMh1RKZeywb8J9sbVSfjLU8JXa1vGXrh8n3CbjwkY9V5jZ46M93BLyRWQwsccLbN1QfNc37u9oKWaoM4C",
  "key7": "2LgxB2J6vu1ykmjS3V1Z48ktMhsdpwrkdDdtqLmQtGtSGNgdPykoe2MyzHqN6Hs2uZmmNH6ZSBNeBWz8oZCNSoTc",
  "key8": "37LHJKT1hAYwC8ALoBiy8MiCmeHb4QT26xhim3162ga82wxKtHo7kXQKch1HRkW4XghkD1y1CHmGjB4ZyA7BaAb2",
  "key9": "GCK6xbYyHYdMMQRv1GzP2TV6xdkuAXEWxSbCTbRVkfSjxJn7yQfKCNQvyEHEB5EtHjekUGiaj9hnr7Y9aavKXbg",
  "key10": "WEi44MCo6VA8uAkEWG7C5apbN3RkjnPanRNBqBUfDqfDDQ5fjgTWWV1vGt4k6Fy3SNhkL1QBWYe9DL1edxXuE1c",
  "key11": "Qsj6FMPY8bzMPx6Koi2MCp1hUDJXzwKGVzqLrfLr169nK1DfGadc36D9P8uE9bsk9suWTmeTBYPQ9PpLCVd8S59",
  "key12": "3JAHGg6BrSCnD7hPLQex5UiFGRF7hrEP8r7cEwBL9EnrfA6XunxZU9ohkH2whBxQU8U529WFHWCEux8qaZCEs34Q",
  "key13": "29mJqHf7AsHk3JU6Lsjg18oJzLivhvhsfJetW4jZ2k6cShveK8pE9juhxEDR9uMctF3tNvTJnurwfTcfFWBAJJkZ",
  "key14": "4K8T6PoXzCNf4XXsKUYTHcYtS57ixJY311AY1b2tgXunxfuh9DMV8by61pjKMzuRwWtzZ2PAaVeecPd4tQQ5fANH",
  "key15": "C7WKQpGc2mzMwFP2ghQANF1YdofdVwQNTRq2g4DkvyNQydUZHkCD15sa1RtHWmPZ6yi7gyztN6aaveyQYywoKCY",
  "key16": "36YxMwx1gBw4aCfYDuP9u9W9hnUpGU9ZyzyFiK8UHiTQPnFqU3wryz1TTE4hHf4WcXZrYLzZWosNMQnTSta3FQYn",
  "key17": "2U3g7yDwN16RP5BjSAuZamjrnjPffVeZJYYinJYsg223VpmtXahXc2mdMxkHuqPryhLLrN82RtR2qtuAPkVW58xK",
  "key18": "4QRp4it5QpmHu6TPQ8ay7CXXi99sKoawYPmBus1xZrxboGCHScDMqzKxLFjmwiZP3RMwgvYAC8k25RnZoEzs86g3",
  "key19": "48zw5Eo78aQ1xYWELkMzS4CaTjMLcgVWovQhnVuhD5sTU4U7dJkqgfkeo6D53AGG9PBF2f4HhWFY1FQuUf5b6Wug",
  "key20": "22y2qWCu4Z1dxbZVLfnjhXPjXzucLTiYtZ2aQaExKoxXrGGYufi8eRocQjyTmav5GpmW3JNkDYcseRx4WeJNoaFk",
  "key21": "65wenWKgxdeFSUhmN5c5oTH9fBDXc9QFxtDYusn2MPyi5iJzYeX89Wo9WCvuMtvetJkjZsd7Ai2pxx6yPxQCafNG",
  "key22": "2QSEVNktk8igTPayZS4TRnLcKTKRZDdsqLHRjkF1S83mAxVLpPbePWkQufFLkkNrWeesUEmzUop9rJDn173QTLky",
  "key23": "2ixKJtbE7pwSjHX5hj9PZt8bKTxATBMuspMxPTWPqstaPHZpx8gwdkm1HG3mqP37uy1rYuTrNFbmmcUvo5FpULHJ",
  "key24": "4FBkcPsQ3df9QEctGLyJmh2wsB6BU8U6fXCGMAJk5oW5BJ17EVQsfB7basUphMhtgRphNTN7y3MkXmSf3orgLzfz",
  "key25": "3P1JNJzrPY9Yufn7QXHSogNfaqahyJMQgRnV2Sd8v8D3dvNnf6YQ9oU3Y5Fg5vcJmL5aBkPtj2uoUe1PYTUgz2c",
  "key26": "4yBPm1cujevToys962WpSZQVmYwPnbfewyMz4FHAw9TpF7iW3P31LQqRmtPC8VKMy9asCoqwc3Q3N7vHvYhzjswy",
  "key27": "4YqGP2e8pBvsFKML2jTkRHiUjF7MdkdUDyf7VtQFiAeh8ZZQzU4mLrnE5FJbCGMXoT2wkQrd2vnTjmkKdAASMaWT",
  "key28": "42UaCbKLsu9t3ztPfzpusBySpsYpCGvx2feYF4do2cf7WFuXo9mkzPHbv7Lg3SDUJd4gci74eCfhzsk6F9xMHM9m",
  "key29": "52h5RkMAtpYrHz8GQ7MtigvEs63eh5S3fhQJSsZqxHTvVbabrbMPxnCTYZvjNdpsCWQEerxD9DqyyA9EWvpVfTRg",
  "key30": "is99SjF4WTBRVYp1BuQcLvoN8w4rv4Zo3sT1GTkfnn2PHgXHRnXhmVjJebCJtmi5rqrG4bnjnXTd8qDewXUQ2Zx",
  "key31": "5L7fGwrZqSrFnPdxCS8ArHmKTGdud331JG4XYN3EA6CRWH7v21nNYSK9b58euWEzMMbg2QNkMbJiDDQs6Nags52d",
  "key32": "3W4UUoLPqBWDW7KEY4nDvw6jgu4QeKWbVi5gnqLA1ukrpsEBJpsBpKdp3Prvh3191Jb2GtX6muGDAMDxELMu4eFh",
  "key33": "oqwRGhmybSmenvRjBzCHW1oqVxvHStqceopA2CtN1gGv7eYzg37K1Z9KY8Kg19xmMKKsaVZhWYfe5KMYtkco498",
  "key34": "5mEcNZZGp4jSsT1TD6WpZGXYgSdWU74KvBr7TbuVCVrkmpD1KeYVtRvTqqTGPk9P4zQWdQywyb34f7AFFTeSEr8z",
  "key35": "429t8k2FpYPGwQnxR25ASd8RCs9ZtsQYaqkn72UJdJzE1YJXay2FHGXbbthy8Ax73Mmv3otfM1x5RYBocP5mLNup",
  "key36": "2eDLqPHsDYdwNCkrG8jNZQ3xiCPxfhJqx1YnM3kqgJ7u1NbYgzhosnoqPLSw9BbH6xEYPGeu1ixErEubxAGUgAN",
  "key37": "3XppBocqsuTBXMxR72zRJqaA4F5zN4frBSbgftGa3poWWFkKcv88964b1qcHh4Yr3M17eEDfDSjs7KmdHNKUCkab",
  "key38": "2dYmCodn5v2hSmWF2Uxd8gtzyZ7iYZc3CVYnH1x5nkkQxCfabmZJdEvfyZ7PxgqNFNJaZqh4tfrS2UZ6S7Z94QCM",
  "key39": "4N5jo1fj3V8jYcZz3KKvZz1BGW78nbqcDg3rSoFTJXuxdW9t1zxKB8uzCgSHVhNj3WEpXFbELuUCx4R6tPkmKEBc"
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
