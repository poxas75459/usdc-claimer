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
    "4tfSzisz7NuJLy2uiRaBdrLyKPdUU6EojUuFoKUEbnHkgiT5btw2QTzGS6gG4x1MoKUcqh4Ty1nH16jzQ5zB6PX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31x1GyGJsef7AdjNmsDkfPCY6cHcS6VUzsCqRJFw1NFDqC54cB7y64x4jgbkM41SMwq3yhaNTLY4hjai242jux2j",
  "key1": "3kD8u8rFP8JucD845zGay2F6HHFbS6ddkTsnZkJmYB3S9WpSy6G2FzaFvrkYAftYYfbzv7HwLADHsA2trFTy9CYz",
  "key2": "3mFbVAk9zYkHaWrsrbojXxyo5EzdDv1Y7Ku5FAHBGA3WWhz64CPWUjCx6mwqTTvBjrjyt6nwy4uUMBaA8JB2UF2U",
  "key3": "boEAQnuvna97KB5qSu95Bt4QnpwCrN4PrKJ3hG8REgqmFxd7XNLtA7uFkoStxYFQikjT8P4oTFTou3SLyQuPC7V",
  "key4": "3uAnmpraKg8MznKFHer2poig4mcteibnadKxVYZW1mJ5vaCSfA6HcN1hK1bvpFUPF3fBQ9gHaiXd84ExJ9HBAAnp",
  "key5": "2ntt6ZaozdUJLkDNLJNfzLyXbdnBUQtyPpVox18viKz4oE7odU6vcpAJ3Bz3Hq5QQL7xpN6Hhrjcztn3BD4MRCDL",
  "key6": "57hgv2Wbx6GgWUY5wEnTwGxdN1qMg9YdJnCuHP6oVmB25AaF7v3hB9DZhLXoGdXmcQrffei6bHydr2NyRTw3FAuR",
  "key7": "5kiU5dWzQ8o2BSudadFuzbECrRoyvqeS6RAmkjB7tSjUgkSt91kaQNsJxYPQhmyYuRAc17fcW7NDA2FxtKemqD86",
  "key8": "s77HmBZZH6YbM7XUEe8x5BDXxN37LvbUYxuxu4cA8GNovjFfs9pW1EK6JA4iUzF8FKoV363Pm3q4shphZSvUp5V",
  "key9": "5EyrxK5BBzM2jfWV1kJ1upPLBMM16nack6ynw2ZQj76X1Tt6QPpQ5VxcJpYPiTipezmk3nxMpuvLWQAw2tgTUrAW",
  "key10": "mZND1iJWMuxpK7FeEGGiqcNr6rvdFhMs2F5pK5hwrqwLtmr3ATKiFLu8RyepnSC6RjeUWH5prTJ8KHKmtTk1hqe",
  "key11": "2JdQ21U9jM6Vu71q9JiC2wLjutNUABHqoyHCAcEboyVbdG3etFP61wVALXiCmhtYheoC5c3rHwdN7hJ1JmtVs6uv",
  "key12": "4rLW1t9AcgT2Tnd3yKgqCKxo7bumsnXLA8ZjYQXZdXYjD2iHLCM4w2otnZWNAX3GdNnwHwf6PkX7h2nzciKBALnK",
  "key13": "3gxwTwwJo2AjTB5GgXoAFZAdVphRT8piCm2GLoYjZphJ8RTX8eLBMGXd5hcizWwLit117n6BxNvCivRLJPbN7Mz7",
  "key14": "4bnHw3eZf8zjKttKXajsXy9hj17ocyY1c6KugKzCFknoZVuwmEQS7qCdZKX5gRGGSbzda8Psx6F5fKhC1PaBGDj",
  "key15": "LiWSEYeDDnQvnxPVfz6CykB2KDiZ4t6ufcxiVS4hRYxmhYenQR8FuPKXbqBAz3aBH145XQaDEKPHrXAnkefrKWr",
  "key16": "2anaHoL6k5Jx5iuHc5wPfxBzRB3htzZih8ygApEnL6jrnG1unQ88UWWqNgrETzWLDxQ2dTS39jWL9ohTgBmdi5C",
  "key17": "hJzAUxCnjyBGSg63SgvEJXEjJqPgwYHAgKbjonFFociDB5y3HVdqYJa93be5VpXD1Biwvoo5CrS3doKHMRoKRgp",
  "key18": "5VtHuszBPSNUDjYch8vXaVLioEEH7YFo87Cy7fNk5UL8kUkJVyuDmv1kyKC5aLhxjEmaZZkXVq39kqv4N6fGsQEH",
  "key19": "5YfiRN6SWQbUq3vsht4aCqJmwzWngZC9gR2DKbrWwDFwE6sFDBqHQLnY91nofzB3VnALW56wHW9BY9W64qcrzTfF",
  "key20": "67Sfd92CQGUqCjs2Mn8xKPm7vfRmrF9RSchR3F6rgUx8Psp4JirS27BT7dnzmJX5w8xt8wauRnFrJTkfLiu9cGb5",
  "key21": "44rYVRNa2Dkb9HkjFL2vbfwLWkdMx3NCbFhz8GScKgTLSrvmf155eDcdWteLtPu4kGXqRQm3AwPwVvspJ4Au4Uuy",
  "key22": "4Sp9L77Sw5GvJHoz1WYPcNJAji8crKz98d4PLEsJFjf9M9HyBgNTnaks2Qi4Pyc6WCncR8u1H6avWhFgE7FobxWZ",
  "key23": "5gn73JnpXNBgUEiA54AhcCML8ogrwqPrdXAYx4h225WRGFwudpSp7vtrHfsN6ANycyQ3cb58eNU3KaT13UFYiZeH",
  "key24": "PHdkr5m1EnxMs1PRtk3Rqy4m1P8fYUD5fLKNUrhGXyFXDNRu5BvZJfYKFfYkSUgDeiKs7N3vdNV7uPr9DsasDfs",
  "key25": "5yKAYNEhRmCqxW41DUf33REQXQ7WANSGxyvVWDV4rJXKpfjuN1GugWhDfCfHRFELxiiSaLvMkUh9ucaWnTjEXDKW",
  "key26": "2XMyeNqp8hygHNFp7eZf2EVgArR4MWrvEYYnzHBKk5HmLDby9paf8njctVmbBJiH7x42kMH6dR8v62nrqCMebixH",
  "key27": "2m8tcUz62FUeh4DtuF6KLRzd1PWyLdPzDhzvtKDLjgBfNwUbMBTFcou9co215N4hvXkgnutdbo2M1yaXZR8BE4g4",
  "key28": "5cDWvTZfm6MdGgEcuMEBBioRyGXzqHBYEabRYR5WMQZxdKFmyKKd4wWNV794Na29ZVm91KaEqpQ5Ub2FCcgoRkcA",
  "key29": "2ABtm3HZtrbXozrX3KUAr5MdMYYcsx4VUK9pgNJvmXzCgGcMZj3vMrZixXAaXR7huhB23G7CGKHJHs6FPMQEv6JC",
  "key30": "5zXtTZhLkoeMberCgWQdPksUQtz6ymujR1XLQ5AiyNNXJdKTCqeFbhuX4p4tVYjhccdWE5dgujgioFg1FqGpYEVQ",
  "key31": "riyFb52jTvFmwvjAaP1Y7aFgZdwLggPyiwMaCYdiYxonfYyrhvyF6rDJYWezVnuz9DA1Yus5AsP2EafijkNh6SV",
  "key32": "yZ2U4PVDoubyw29r2MPMA2XSfWKvzLyhTXH7fXxuvNa5GU7R5SyvUunVxt5PJQCVoHnABKb9HDx54CpK2YKg2aS",
  "key33": "21i7uB5AuAUMseqyATUNKdmWYskBnZC5mSyHPx8hj9MykQfLH6hsjSmefqbdjpbdRqPVtd3Uxpu4oriveD3gTKHN",
  "key34": "NC6HJw5oVfnRxwetKFkrjPcDRVSYFYYwBe6bL3Mo2ry2NjQf2VgdAmXNvJ752wP9JT73g4xcu2wypHX68nibXuN",
  "key35": "4KXMe7JJEpzv8ikpBPZ9Lkfm6bEmXZwrqPvR4yaspVahDk9bdKLWJmYDxVVSBfJRwrjBxU21tBHAXdstVakRnNux",
  "key36": "4peQ8mtftnpUA8SWdvNjRTCeJbj5gFKovL5AyjkUm1EGCZHYYEqnYEyQ1a6JXxxpc1cUXHoGmqfj9WnKLV4LTAsP",
  "key37": "5goFCHJUL1YkjYyZpfBiPm7UP3dpuGtTw49Xa4Q2nnn1L3s8814E9taXanSc2SUMVZZTwprkDLDFnncWoXTakDRj",
  "key38": "53JViyEpDMRrsZ75Fh1mz2sE3nqio6Eo2WU124u7w3ZP1KWoxL4J6MqwLJw4L1UDg77WmN7jyJcNMAwenPz1xqLj",
  "key39": "4Z6VkByaQwhPKC9uWStjdkwsUQv5ZSk4Jk1FdqwSbAGj9obU2pmxRPN2sAyCGFX3tR5cn9eJERSj4FDxfcbmGy12",
  "key40": "3B5qcwpdyLhN76PnekrC8kFjoeZdyLjeJNcbpz8X1FeA368ngMBeJyYr9nHgCYHvhy6BNjfqXfZQCufyhdEW6sy8",
  "key41": "2TCN4YTHrnb1r7qopUbcrDDc8YsGdo4vhx8mSYqbFqvkMiGMij3NPzKVEbD46sVxemZmLvXmEB2BAtn8n6iEZoBW",
  "key42": "n7K8xoEnzuP4HnXynaivhJ4rbYgHpmbxnE86QScJ3QRnhQq9Hv2uuT35pk7PSM7cSNjBUPiCcoNdWM3oZ67gX9r",
  "key43": "3PV3uCf9vDP5WL3GsSkVvkbG7JW9LuZjkfznajWQBa3iDwQ42dHJUKozk7KouTdiigM4MotKX4uXErYexV352N7o",
  "key44": "255Ecooo53T2zYBZC3yvQrMMb2jrmyABgHid7V94tHnMH2MEghmkrXmq2i9vix56dLomKUzG1zTUXZ96DGa7E1SQ"
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
