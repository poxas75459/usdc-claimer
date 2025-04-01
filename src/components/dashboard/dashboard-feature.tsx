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
    "3JKkMmxvkk66aay3JnZcamBMhnK2bMo2y5rkpAkZ74Q9HChFreTdrVy3XDCMgvbSFaFFzzvWBMVinJ8cMdEhLV8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9sjsAs4rJkQWzFUAmnUwJ4gKX4drGK8Bvz6nbveygCnWNYe9dmrBoECUujwNJrUKy9H1fjUQmnh6pKWMzCXAuk",
  "key1": "oYthicEpT5jmbFBt2SCBo4LcBnYbei54jDDuqrNSvHqR4gWLBZdcSsFvtygAE33EXLiabhiR6oT7cwNKdoGZoj3",
  "key2": "33udkjY1EwV6JWEcRWxnLZRgo9UnnPLSLBFQe1TR7P3d8dhFPGLdKzDCEpFz8ThPh1Y9EohpHx3FD3hojkurcidX",
  "key3": "DzE2LP75o1Vz7A8KidGyxjx4QcF52faVewRonbTPt86YAZCVspZD6kNpuP5mKyqPFK1JtvvuZ82YtKXSod1k9Et",
  "key4": "47nMZ3FMuz9exqGm9ty7eMwQPu6X1KJ41GLabRkv8GoMi8Dgn7v8WuPZ1ZQA4qkpC2sS5pfS86k62WY2pPnxicHz",
  "key5": "5JbD79ooaGoCRuiNRUhC5zdgYpTK8JKhkDhLLFYoPSEYytUMbugVk8z6nELiCvT9Fv3auvy1hiFFxqd48oD8sS9W",
  "key6": "5ELRTZUprYyc7aGi6TxpVDniukQhYzL2ASX5cNtpMgjhLkRAiKHaJF8JvqjUHmFQaMjdiTNApgvvaaPVWuZRioW8",
  "key7": "2puahNfaEnUZaEMD1owvbzAuibJeaBvgN2tgifpjtraDvmfyH8ZYL6gdUnmc2hZjpRfdZYCg7TSPK6odqmHcjCS5",
  "key8": "2KJBijTBVqVCHXBM2pbgD9YL7Fa1Px3nQ5DyisijLo8ruLJ7Lz3LN3ihq5bP3AMJE67PPsnfQWeRAWZSmgJkuSkn",
  "key9": "5cU9p7cWr7MQqfwoXwp7Mk6WbXn9CcRQC69niLRB41fiJknZS15GZVioVcsHnMREyeTUAVrMz3gzJj5Rjo7Jk6yG",
  "key10": "AM3q5o6xs1yPgjz9CLvg8UG4LFrzTDwYEa82JyUZvEw3VN5Ga2xsKfuEZDFJFhChMHRceESiv7PEPGVbAbUbtN8",
  "key11": "3cRc7Gh85Xt5BpBUqatvtCvWNzMHoDMnZEJTsmt2GyZLwzmBsGrxKMzpxHCC6XqZ272y5WuXiNQxSsLca61MuFPt",
  "key12": "5Hfh3MiZFW4xJwJbLayBDWGuvRjyHJfCh5Mh7KxzwvAtSt43uAZCHg6T3v5YYUSpXPJoMwBw3JcpngG583qasdcx",
  "key13": "kmQ4SdzP2AzHETz3GtfsE2HqsWwJD1t77anrHJ4N8LDYwtYncQSkrzcncLKauauEr4QYMZ5kbp5SapMWitnxfx8",
  "key14": "2vBjcHADK6We2LFMUaiw5DKT2i6S4DLCS5RMrophhM9FncKZf1jCgMQvF3dtArKSYdk4dcXpS4mLPZata29Voioj",
  "key15": "5RJ29DQ2DQqkJPRuAMoq9H3ydQaKjTAdzrifniEpoqrGtyrb3RozTvvYmfftFEpXrFP8zWbaSnQi7WSLz5BkWbWf",
  "key16": "kRXL3GLX7KGhqgxGMFqdkvGMoMzuU8ZwSVSPEdZeeQ8ig3Nvu8YUMz2o6pJSyYacrAva3q9m8gYkauCdaCAAvc2",
  "key17": "EfZ97C2jnoXmkkBvq6Tso3VLzHq6b3rZmUwCgqqn94KpG4R2CQDveMaVwUdtEYt7wKvocBDybPokqfNdQcvh1Q5",
  "key18": "39W67PfxvB7phnE6udF3azdn9WfJciKvK2BrrboEbPkTQstHtDKLXiw79CcJ9hRteRCkX5raAXvzEueEWFfeXmso",
  "key19": "LEvamuwZcpZ9aw4atEYtk8cKUWEvrkfVSKAzZgP1befy8dVPgwaGdwyYXb1GQSjhqetYEi61BSVxSUJxdFfBbE4",
  "key20": "3wgMqvYpzKzbqZBsk6D1pszRqRa4vEARq8oBbaLJrb9DERoFdjWFxSWyvPi6mYTBBc2C81DUrgggv7XhFLpwQXL7",
  "key21": "mby7gmXUsYvk1US6HRBQ2imfQPUCf7cn3namwTmM6TK4gAYiG8DS6Z1g8UG69iXiUN8NZ5GN8DEZZBduesPHRYp",
  "key22": "3UWzJ4asgvsTaK5cZ7PQi9EurPB8MM22HUJhgJkyTCkywNVuH1VUPyiaqC2fbXAucdpaeuufNjsfJ2ax1XhD7vL8",
  "key23": "5tFKSW72V8zpEJUtgUgwYSegmdp1My738uwisvg5s1nwMJKdtC1zm4Bt96VnhZXg1GMmqTmyt2kx6JC18em5TtzW",
  "key24": "2aW9XhEHP9GGrup6Rrnr4K39aVKTuzV1XwxEGZxTmjKh6g53Jo8jEbfqeNBw3v2xFcnNUdxYkgN4HHqnA35TPTpm",
  "key25": "575iEdPrwnysG6A1AAv8aZG11eoRbR3esMkktyeAhk1Haki5Sq3uTXmYq53XcTV1LmAANPiEZq4Tzf5wGcrZmNep",
  "key26": "TFYXd256hcmwAV9SZhySWVW3jD7JvNLvB9bE18PQZqNC4dqhenjEf64egiTfQZi4iJRksuHmdqJ151xZkKcjhn3",
  "key27": "SC6G736KMD3JfYzgkG5DiNmUeAeX8TJCBW4BiEA8xqNzFyrZRQ4kchxrKakjZdm2hX9RqMUR5WTBWq68nt66dcb",
  "key28": "3GAmXDvZa8qvAP8c9KAZcnpK9bpdbUvKddCej4WBJ1jv8LWCXAJUovG9UTmNj4EbGNKxvyY8oKFsAiepDomSTb4L",
  "key29": "2DtHYNwBbrXXLbjEQDm51JuwKmxXeBS2iYMs718wkuswoqK8kyEw7656f1WYHvkUwjGwvkRNNpt7ALwgEvzmb87d",
  "key30": "24czmRossbm5T5ekpWM3D6JqTJ7B7JHJkdZayVaLGmFJhYBmMsKySe5q8gtEaEXgkQEg7vhfBNLEtofU62esa15n",
  "key31": "dWe8wLDUubpFua76by4cbh4DT5H9VKemoCiHLiJs1qswhhLfjD2bb71AiCGF54MN8n7rbjxP59X6gALitqVY4zp",
  "key32": "4DoucDHu2wvvEJsa6yoTQx5oMEXxhkKTK4L2s3TQT6vtEqAjLkUFSkUv143ABJp3PjWmqe7JZNjAwTGXgVBrBrBp",
  "key33": "5vgqnZgwZquTKeiA7TjT441ABMXgBRBYHyLGQLa8pezER1EgN3TSYZcZsHDdJL8xZEbnNK5hXHcZnEmD94T7Eusi"
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
