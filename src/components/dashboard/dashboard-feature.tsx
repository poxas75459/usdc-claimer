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
    "5T9SCE5gTLKKfDoQLbwsfRF2GmpBEAyT47aLsfV4RzjTH6HeTuxvEowmAYQGRtofxHKt8RvRpfYpd6som5mzttjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ePf5k9J4fDTM786j1nqYnCB6Y4NtFZk4qteBZo5NMKFTsxZzrt4MRzdhT4XJpWfFymDMjWrQS3aVbQA6ZthmFM",
  "key1": "2Tkc3ErKY8ajmFLVKt2TB7W4fBwAe2MqRkDTWHKTZE9NmWxuCfwgXoFrFJVUkQz3vN7dsjFMLWXc6cXcd6LwLzyg",
  "key2": "3ehsJVqzyJmqP9EsSVbsb8FFqjZtoAvAfZT11zPsgg6xf8Fe3dEkw4SSHTz6MryFm24GfUWd5BUu341tdkYeTnUj",
  "key3": "44UtKbVVDv1JXqTtaFupC89gKKgiKQGPiJ9PKLKChuB5xGEKQV6c5cqddESrxRKBBoVWfgg6EevyRSYAZyuScNhV",
  "key4": "2Bd2WZFj5PXXP9KHypQ8zkhT4NZJ59GkSqAFtsixuNPfrjofHkXXctoaNQSEmtRQ4bkZ2F9dCveBQiKvwFF4uPXL",
  "key5": "45N8UAQ6UT3GRnSoFvFQxUKgD1jdaH3JRfgEpE1aj5BpM5GajBop34zLAVbsLZP56jjdTTAQvPz5GVyPJcvH98o2",
  "key6": "5unxfqK2PMTP8M3nZUh7nzwqHxDR6Bo7uar73kWew8fx2y5zrbzBqX9hzVkhDzGdcNgjbemCM7rKqYuNAaL7aUHW",
  "key7": "2FVJBjeWws8G5zESskZe5mubYxhY7dENYyaquDXrTHAW9WMNvQeT9u78DbU78frUh6t9EkWJ6jPCs3X8ZpZyeGiK",
  "key8": "UMdaV2urMBF6S66banmNSYJ8xwokQsdsxKbokWRLv4xVJ3g9SfiY5ys1hsfgKW7owkrC3rtpfBG7rtFhEACffuk",
  "key9": "3HhXXTTaii6HcC1Nsn9rR6eGK3pF8cqBPnQ8cFVFH9vf1Dv84dJKeoQAAzYq4isTPMjLaqsPdXPzK6csLu8F3sKR",
  "key10": "61tmm4kchkQ512DnUxRjEVjsWfBvjv15LKR5kFu9jsefDPJNiFBQ1VeM9hjpdTPuxDV6wL8mVjjsY2JnpytpNMnV",
  "key11": "3ev4KLCyQPrYoG1aKP7aYphiyxVjjndTrBQQ8HRkQRVb6BR4YYzDAUK9F8HnBzAF5D2uk2sP4PMXo7SLVEzsvTQ",
  "key12": "2mcrWUW5vBRgiFVrSkoVTYiJqM8sMQ4wafA22eukx4TFthe4odYSPFGBL9QRksWTP1SnG3NsM239jJb9YFAv232A",
  "key13": "2sFnzfH7zCzyLrXry6NqvUY3RHwXc1vkH2xambo2rWC3hVJm9NjhzYXjyeHnXiVii9Uc3t6bkoWXC2adzhE8GMm8",
  "key14": "UV3XkpABjtfRHYq52vZSyP9JxWytDVgDhBJAXFsUJ3Hdw79xpiun71CwEynqbBRBx9cg2SSFra4JewAK3Kw6S3R",
  "key15": "3qRPvF619ujCfd7bnaZNXBQ77n1d4hwBsKvQe7ZT9MwFfiqsrsYDcQ8FQ95mjH92wKqmWhSHAKvvtAiWA6yRxQsK",
  "key16": "2GuSPSd32rv7KU82y66pMeU1SQgvY4hi9Q8NRTfuobxvaBG4kryncCoKaoKeZkpCkfX2qizoaSvWjsqMUw5ZZvVt",
  "key17": "5sHVhAtwpFQr7jEukgS3LBv3qD6AKmjtkNFMMjNVr4YHaDMZaNxu2dF6cwUMaqvip8E7J1XxGwX5YxKHBTKb7zN5",
  "key18": "36CAbuByvCQwBTkfzfUVuLyAiN96XRBBVHPgEXUCv5U1MsNpbUFxUNiw2fKbxhjn5YvAY3R1ZSo8EQUVY4dj7D6L",
  "key19": "vCWY6FkMWQkLfQeF9xGGHu5CpBrhzHQxVbL75oacqgFycsbixNAas3M6PsB2wLj9NiTSdS2G5UhWBKTaaamqiiG",
  "key20": "Thqk8PniWgDt6JLVkY3GGKFR7HS9SkWep9V6Pp3vaDzBaNFp32AA5VoT14DGRsr6VABJ73C2SRHdLSd2PqkCQdn",
  "key21": "33BSca6RroxN9dsY5Lho785Xr9v3mrKQ1J6Jefq7GUJAi3FjPHiDH1eKjaDw7P3UZeLLLbcpcbdb2xCc1zWiQHmB",
  "key22": "4FJhsNTJaKd6YiEgH8c3AGBpAz7yubo8y18BURzfNRES8wRo9R5LyHgztCTjXbnJUjkxW2iGDeznsyu5HzmqNJUf",
  "key23": "2ap7ydJMN26t8dwkV2eqM6gebY5YriYagjJzGsqa2TvHhF3jScJcLRdN5zbBkT6tCJADbkrBrPeTqsNmyZ26rTT5",
  "key24": "xzhd7oBpo8E15CycuEnGAkfPvHanR6yXzB6qspjnt2uD4yTwkapAr1ATT1wypRVJVmNJsp5FrH4UQGShswBf4M2",
  "key25": "7JdbW3x1ManGhLc8TF8vBu64rF2qdGswpuEssmy95xEp8RSeaRcxiwdVupz95oJSvjZBoTFzxNTrLXTxS9Lod6W",
  "key26": "5Uef4cKmw6EniZbLhTD3BeWQ2wEjKFNn3G5YxzwwGbWrDnf8bS436ZijdqbuduHE3qvqn1C5JEase7c1vhsVYakc"
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
