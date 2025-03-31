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
    "3Am53R2bWrB27MNBcBBC1deCcJn5peKWBNDiN7uWVTEBCDg2j6c5gRxBgZ6NKiqxaLoXYa3Z4JKXjdRTWPZ4oMnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqrpsZuSgK54FF9pPRceCY7WZPKDGZXjm9Se3nNZb9V4WJGcsTeXuK257PN8TdaYd9y7fucVFBYnbWzDJtj85sA",
  "key1": "dNHKkcQz9KtkQN2W8h6rhm1nrKGz1zGfLekdnwU2TYzdW4CTZ7VVRf8Z6qV63VgjiPF19hTeVewb3uDvCAzPbhy",
  "key2": "4GegTrMZUtHEdAadnQkLzWH9YAawq4NoAieuGYRNd9GYg6iwsDBpAiELzb2ftBYgjakSUpY2CMxdbXyfStGUNmvQ",
  "key3": "4Es3WTP8tQa8wcU44Y63iT9MwLjg5JogWk9kKnJ2q1t51omsv1dXMNYH9Pe63Bo43ZZdvME37VGtYQKtUmiZyvMv",
  "key4": "34iWjPMBK9Q6BMh5ekNvco9G5WvssRzHa425cgQq7zGB9DUK2g6hehnmb5twfjk8fu88k4JwMhvNpAnLmRJaJr7i",
  "key5": "4zfmNex3kgBn127UH6fwshEP5wj11Hxg6V13m5JQDaMKdhxwNCa5XdXora4HtH7YMBM8ihivUKMyBNfrb4i7rntH",
  "key6": "2miouHRY3d6vWFDpbDJxdPQ5RkwPGxo6BfRoD6dPba4q4aGA7Ya55yR91ptWgXTrShJ5aZekcT8atTyvxVJn3QSx",
  "key7": "3hWSPxjMAm9RdDspnXgd7F3w42KZMH6qkxr7ju2Ev3zFVKnDDPeQvJds1nAxd9T8hDmWErmrZryZMPZceLySUcDR",
  "key8": "3DmPuSgJxb1byEbWxhdoWAq4uYuj4ntyeZwKzJFAd6NZay8EsWQxG8972JVXH2RBFzpA9Gb7V8LB6zZumPkcgySE",
  "key9": "3A2AGJhdGziffKN8HfNuh8L6W2J77qZnxDs4JyheG246eq5bw4wnL4RwH8CN57XZ5DwRxvEZSbkNLAZFxfJFNRfX",
  "key10": "4Cs35Q32MDw3ehFDB9c9JFLbtfN4QhpPf4J5kaRuZc9pVhriwY4efCSzKDE7GyvAimnW4b1P19uPfUyB1P1Zmvep",
  "key11": "5EwMTUFrwFwM536izGBEaAe3yHJZB9wzxhLTRPKfB4HPaa8sF4NmHtDTovWVtVHfEBP5BHjYdwzNsuADNPawQgic",
  "key12": "2aX5uriqdFEeA3QSrz3KBj9ysnpxeX5xu64SrudTMrYyaL1ki84gVnxGtwE1sbnGhE1cfhq1QXKqqj8x7XXr6bX6",
  "key13": "5DGNbHNqeAQv45jU9vvWRzCb71KHEKnXUH9QUCEoZm9chwLZVVkH2amjGrzmZBfxB9Z5PZcqLf8Mmi4nMdLYHzGM",
  "key14": "2mFj4zPazRa5HdTRSBzCJLbFRt8o1GsUf5Fxukk45fAmgNeYrMQEfGV4B4z7XUMD4C3uwa9LHYhwaNign9BjuB94",
  "key15": "4gFz12VAjtNYXJzHMmpMgcUAs2xCkpGV2hpt6WGhotMa3CiLqw6VyYEtWS23VZPpaG5bjJMJeYVSKdqQSAWjx8sD",
  "key16": "3UfiEyoeAHoPdDAkfSt2HJDNuiGW6Z4FAdfpuJCnxEUtvVyf1bAqCMh5PQ1HG6qkHgGHLJ9EgsPCTsfMzjpP9G7C",
  "key17": "282AzmKzPfbVYwU64g4pLY7mP6wWwowQDGDsspW4MMpyqFEFP7nyVYPozHjuMEJwHwfqWyypp8Ra7hSgH1yipzWW",
  "key18": "3gv1M3k3YetJs3wSaaDvvuFpv94gtYbGJg5LDzXjjXghFGBA7tQn4bw4PJgqfFY7ogs5HeDRPXvcdieooKruGgci",
  "key19": "c3xbJRvGnrZSnoUNLVt4DBM3Sy9Zh88Y2yt9BTAToYFhzfxoCSWownHBPHcYYLhKPaLrHEoWbZ9r4948tTQjXvv",
  "key20": "2wSWWjXQpQFdu1iTqbVHzeZQFSrawAwxMZf5M7wVMxh81nsa32f87hibvvWHxfjXxKC3R1Nfhm68oFExaUpsHE7X",
  "key21": "62ueanf6U36Q3n12TCS672Rh3AisBHPVm6y1TPbyZbXmb18wiG2FwPv3gSCaFpyUjdzQSeXJ43seacuzPte6Qzni",
  "key22": "49uyDFgaqVhMaKpAsjkY6H5ctr5XrN35ju9fjGPXCvCiBJnwiZBuQUQcwh3i4TGkQSCjGn5qNCWr8YBHwaFFPVpg",
  "key23": "552EyBM9zkstX4xjFRANkBKVaJnKmeu93r71xrAEv6dsAfVGzzXDkzE82Qq4gVqjK9wveNh7c8JMQTWrcAyaKjFd",
  "key24": "3d7YJdGUDgTKvLh749QjfjUba5EMhGLW5neNmPknjqv5jNNYztydTvjNFLR5C9PqSNx5x6wX4rf2AoPG1dS3vVVz",
  "key25": "3VmQ22R8BXfx8A6ax1gX7WS4He1DbrJ2R8wPzD66fm8G2bFAXgS1FehGfEESmeCvgZteN8d56ddmVa5xqDa9yg4Y",
  "key26": "z9KXEmgNFiwfbEnsdWKTMTLzcNCpk4jUpKv5gmSgL5gxJzhbysDfaJpyfVt6CUHdCsbEMAKkS2sqwpPHVVhdyGL",
  "key27": "42TStufMCGE85Xr1yFjDqsKwkFypu8pR6eyohGW2MfzVAZf6Fk9gESssNuCLakaSSt8AL4x38Euwwm2BZhMXRvTg",
  "key28": "43cZbZccEWaFsFFdvJvyDVpjRmJ3t7o2QWRZEWs2F4DUgUonc3ndQCccfSfKWn79cqxMLBEiGE2TeuXPFXNcEKox",
  "key29": "3nA1i6TQkNz2EpeYN9FDwxjnJCzzsoXabHp61r3PPM4j29L6Dm9wtkfdprbwaavg1PQ5m82aCgciA6Bgz9fMnjga",
  "key30": "7wThk84ak1ZncejHZ3bT4kbhhhMJ7y1ocdMq8sTp4Xz4NSzyfdHAPQ9kV4jgrkuASwGbwh3w2NAUnTjoSFtFfjs"
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
