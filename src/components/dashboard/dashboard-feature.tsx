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
    "393EnkQfbFPeSHB6wWt5X6oENZdZLHJR1sw5YafEE92vyFBgYZ4zyCYwZBpm9g8S8W3uqC5QPuzhm4vjTTCkJNVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTdPzbh7zy5NLtLxBi4VF1kAYT8FMPTKYXiMDDzqYSLuJ6rMKj5CBSoER3Z9jPEzKvptPjWNZzWSSmJnkVEcEb",
  "key1": "2jKGPenQUvQg6CacuDNPxmv4vZNLgx17RyvPK5K3FVjR3NELREu3chEm3EjwUt7jvVTFEeySBUThVSJHkRKqK4iS",
  "key2": "8oK7AJpn2o2KaJ8LTcxdqn2mAJDFQ9RkjJXAxZWGJPNE5oLPvoEiv2SRHY1G6cA8pcBcaLqeKL36owxVtmoiCJ7",
  "key3": "5Lui5qRsttc91GC8YHxyk6HP8gQ2WH7112zWFqYBAhP7Yo6m93PuchrrtxN5bbR9UkrMEzhgjnV6tk786juZtRQF",
  "key4": "5D97j6rm5SxAYUmUzchnm76Ced7YtTCqp7B64SYpwfyYQnxsXxJ5HdW1b4N8id3qa8pyjrGti3AfmDwrpG5EA6Xp",
  "key5": "5PSPsntH5vpYErx2Wh7ybZhBzR4au4xGXgKumWbwAAihcDCzx6ry9FwES8wbQifnuCf3cQzCeJ2jU9uVvmbKY6V3",
  "key6": "WYuyqNUg9CVjmzF8xoJe63UTqSStC29AiEhLoRaTgNN5uygG52UBE4HuqsxVsC6xJZu8hyLxXCX1xhHkNREqHBh",
  "key7": "4EbG7EtNq8z3LasAP2K59sfxuSXBBM9FViWuAT3ZmaYG2LBMxexUGKkdL3HHHGAnMwnBfupm3GQtNMdaAhHQJxc3",
  "key8": "374Ey3WZhBg1BNte77uYy5tKqmb8hSbVHhQissQeqfQamNWTwDPoyFHeKc4j4dsDWE6yrZcRKP1Jx5sEhk1sXsUF",
  "key9": "5PR1Exw9FQ72JghWLUnFSheJ4qhJ9sscuFSUGLTHNTZekmJQ9coEKNXCb9ZWe6DLrJQzB3CuGE2S2xQu3mb45ge",
  "key10": "pwJqsTsuwyJoyQbpRSWLornTDrjESdUqWp6ARjF78pWPja4y8vfvngMT9yoxA5L6HVoyP8he2st9V2mPgoQn9pA",
  "key11": "3XEbYGsK6SKSGSN3NTm5GoXfLz1WnhtRbUGy5NTDtXLNL4evSnysPbG3QFJQVQ1Wj5pffZZxrTyuGAK8R17pJG15",
  "key12": "2z7HEYYU6nPbdtv8akynXrX8kobZFgymTKxqCJZHD5tCbbGTpYV4xwVmEraGHVJF9j3qnhmw1Uz51nu5Lzmd89GB",
  "key13": "5FZXgF5MqmZUheb7CjLHwErhcgYqsq3KP4mfWKvQNARqctkSQDP8RCcMSTAPFvtfTTmn2SWJ5pAkEKkbmvm7DTvN",
  "key14": "67NxnQgrzSymaYALW6V5AAhPdpX74ESKrSgDKvSYF1JGsXwBffQTpTD4nLiAfxehtPEpZqStyWqg5T5wL4Bt6uCT",
  "key15": "4RLJohxmmujS2n7r74sPmp8XD9nTYEPBf8x8nYKbFEi8igN6Z8cFRKboX1HUpRUwmxit7trj4uyKfTS7PCQpCqQF",
  "key16": "2dqcoHG9sEUFJv1A3dab38Nt5e7wjQexcn9BwaumHBBY2pf7vbbmoFTBbvrY2FpLdJEZszr2oT5XZ8HRkeKgJXY5",
  "key17": "gVBfgaRJus44MrCGTDRpqEfDwnU6jzng6xkS27vUxM4H1JH6riAFUgPAeeUc32MrN3VD1sXy7YKaJjg6j8LiXHH",
  "key18": "i9UbbsYBmRWwU48k5vtkhWR5WNX5kjBh2x3kCfiBTscyKowx4AEdKRa7X7nrfXsP2Hj93zseaAi55TLyNpnfnMN",
  "key19": "4xvKpX8NU3Cn1dPTY1JsQHHhvdv5UUy28BUCybTxkUPGLkNcMNuMbaAotrzsaXcaYNv7ebGxbHUXHaggNwNi4RXW",
  "key20": "34AhHmJo29k4w7KL1j6h8pPKKhaTNsuKb4Mvn4WAA9aX6qQBABFnhvhMbg6QJknZbJndXThYoKcCFXWa7hW9XTCh",
  "key21": "51vcHdeqkGGih7agL368eL2cux54w2JJ4oHQurXfCBN5G5TsfhAgjyp8EzSPdZDzhyijcD5ivewGGvRCwMzx8K1F",
  "key22": "3ViBwkGxRg7meGvoKWx7rB9YVKJy7cP93RjWMeRxHJUwcfkHSEYzUTFdny5w239CVkdfVvmR1r1mmK5Df8RJUgyX",
  "key23": "37DoW4uXwhe6mEVgBQttSsxqqzFfwzWziSK2Q5WYQQM5m287auXN813YyQowKuRdVUzXRVsoUYAFEjsw88qoDCg6",
  "key24": "5KGHoq4s3MysLxgKUJtwsCBc3JXeaiJCmAHSsBCEF4DgDm7joHjNdrozVkr6pYqTMprVdjoSwtZYkSwXttG8CAFK",
  "key25": "2CZHYWBCPnevuxsCdnZKH61ZyKwzmLG8ZuQDDxFCjPr4mD131e6YbqAfTDfHonviNhMGyKhrXqnkdMbDC4jJgpZq",
  "key26": "3K4xaKRM867avZdqPt3cmw8T3zj7CUKKFhjRAUWAXKNfCSWRZvDDjLY1YrpMTW7FF22fVrBrXFWnhYGzoQ87NWE2",
  "key27": "X2DVxfyBtMyCVbtbkDpCqxsqpzguRjEB8wBDfWVyD4VL1cjA9rLS3MZZdqgbPtian7Aa52Ry9943BUE5FHsffgg",
  "key28": "2pyA4f2U8VBX7e92y8snwSAmuCECqPfXEFRjGxDmpuPiBZk9Dw85YAmd21rUGLrsThgZDTJDjH5zmtDMtMw1LQdb",
  "key29": "4eidRsWBLipQ5FmWaxJmqc8Yp7vMXHKZyAERD65yqbzcqzYiRSVw9jQijHMeBTtYq1cMLUs7JfQATb4iMUv1W131",
  "key30": "5GCgUo8RZZtMfSPim323rnXBqUxx8o4FKzzHgLmWAWhZtRytVXJj2nqkhacN2t77kG7rDuUbWCHb7M5WYHK36BGq",
  "key31": "3jGDS7jWKkmt8DaiajYVjfNPbhz6zffLqvLwXrogU3JJNshZKnA93iUXMSs7wpMuBs9sW33PzNqXGBMdqebUFDFf",
  "key32": "49JdJCmsqD8cKZmG2B8j5EsEthVE7GRVSTFotJKDGNNspAQS1xVGdnLCYv5hjYnZzMhHjkvBF3H6fFfZ8uTuaZHb",
  "key33": "4zdrFRrXUZVUtQysaq6CZN8koKBPmMPH2GTRi1dQ2n5BPnzQq5tFZqTbkgoKNfJqCqcwohibC1de9rY8njJsRvd6",
  "key34": "55wKftbrQPSFsju8iJRoNu1k8FAe7njrq5dr4obE4h7W6gZSXMFjcmKLzk76n4WnnXmVF1NQteKwTex21pgQpN1w",
  "key35": "4CLZpy2im6JFMspqjQwBStXAKFa8ZmTdLJTKGWNRuZTywn7Nq2uEY1PFXCWRbRddtMhnGkz6GpUCYW3zGF6NdFFS",
  "key36": "3qq1maVJq3HTbnKBdysjv2h7Vehxw5zHu1WiBiwB4bef71YmqQwKLVDV7kPEhxRYhL2BYfJ9Lt5ddddPadv9W1rL",
  "key37": "56K5QzHHV1HTNRPGHayFy6jb2NL8qe5yYNnstXA97oHZqR6BJ3qoeeAbAPcUYJwV4QfdpRwNr98gEMw7xQuuewxY",
  "key38": "3XYbkndz3GYy31XAQJSJc9Ux8sYScAxZVFoyB3mGQUXaq9Z4in4Ed772Lwx24mS4e7PxvS8sA6kmTQmv9zpaePvb",
  "key39": "x2Ndtijfzie4s7uRcLfomqpm6HWZYW3dPvdk8t4w2SqbNehR2HihrqJEM1SnUp15PhfWD4TeHmfU7CWt67r6NpZ",
  "key40": "1FCcnHrt5q5vFPHU1z9yAzfRZ5DvpbEKodFjeQ7a6AoRdCbc1oDRrMf2QP3TuFd5EYDjuLEKY8eCYWtivGDrf5M",
  "key41": "2DWEf2oV1x8NrUMuK9PUE4YJco5Ddru5kGJKUfyz8bDzAcwLK2PmNNCtPJLKTgczq7NXykyUxMvYwLG5e2uVTAfZ",
  "key42": "5xrmpMyCjvqAE4k3NZ7kv2wfUCg9bqk3xXMkQwnzkX1sb9MkqwFhx7dkc3UhAsNHuJCwJpnx5wMWTMekLwJKZNFe",
  "key43": "58QFZkrLYUZxVKPbViVux1QLQxPjUXUvEModPcE8pSDP7debUpn2Jf9ZzcWLCsw3CLGwA8mb3LBqAThYqRvBFLmp"
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
