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
    "357g7SdH9HVRbiA5nmcj9NmDkGS1Tr82yBiKfgGwnytfjVveucA2UXiDZX4W36L9KCi8FWhHZriiM2n5vRxE43Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yiiUefApUkrnKcUkjkhFgvAQmLrQDBHtprqNxAhnL9yRqKGgY77HAQMDB1zc98MSMfjTjVNw8K3puNSf2YjgSSj",
  "key1": "4wFJ51BCnC5rw9DWzNJ5wLoqghHQWPSBTtQMqeVUDFHUjBh92npXqMndoZ7Ymi6qi5sHDmyk9eRGHqq7bnGR42Lf",
  "key2": "B32Xa5R5jJ3iM2ou5kXEePBZRwKrLsZc97wgAZoknVysVJcNKMYhXWSVehWibZsSgLXxV4sb681iS8Ka8XvNHWR",
  "key3": "X3jAPEbvQ1ToERfvvEsJ8tgwu84DU3KHTWg284qRbkkbN1jdxySFRrfnznDdWTCpBD8tJHwdiaF5pXbXCYZsuBE",
  "key4": "5hL4nFtHVedZoR8zqsyAEFWbdPF6T9nNCEnFWsfKNYNHZyfSuarVmxknVEeYY8X7u6cP8y11wEeFpLh7J6X79Aq2",
  "key5": "3rtaVA3H64hHrdwP1718vLv3hEEHzWRk37AtovqfqGcb6dxubEGWAypRHUwYWfE761aq4m53z7onKdLkMBzGYpYb",
  "key6": "64vNCf5Cb7Bb8C1Xic6BXmpTcj9raReAA7TKiPZvVbVHzRQWAKLYxKinmDsK8nsaYaoL7oqSaZwY6XujaxwzqYqe",
  "key7": "5rVxVRny5UfUuSjst8p5HiuYGGB8FTgDZveWUJyacQeTAEFUA5QdoxUZXruu1UeWFKGDzJdbmBtnTX9VNabkUZMM",
  "key8": "gk6QH2ZsaqgFxGiRo5v4B4NQv3tN3rd5EDR69kxnCseNRMDXLhFg7ZpxSpBAtBXBq6rtJhAbvCEyRphMQu5zdwd",
  "key9": "38xn1ZmuSqyeqSmb8bWXUwF96SLFp8E9YyREy9YwPph12jrpdREfysJME6H3oK3HKzv3AbCkUeLSCRvL8X3vrSCi",
  "key10": "3mvCQXaqM3jSVuKtyq5eEWTNAU4EJfwjLioh7sQ7TAnWULi7nSmvd1gbS3GUgQRJYq3r4DynqWkRcaTUhty55s5h",
  "key11": "4kGDYaD2TB8sxLrbtn6BK92hQB15tDpFW8xV8HE46MioAVewLiAGjkjwYdTwaSCXELaUEsrJ8zngALG58UhP7Ewx",
  "key12": "2T3P9HhSygNEW7P3bGiKTeNQwVuLhNqjEWNH9pWPr8gYXRFjrKvHxzsPK7wHc2yExLrsDx1pzCz6Jrjhc7mfph6f",
  "key13": "45W4YuYvqzWEBGh1pSavw4bjRHXPp6fKB4UtZHbubshgo4LX4vL7fJzQR2ndKiMymhqMThivUay61vApgM2vC6MJ",
  "key14": "51Tpheu1LDotRwhycrWvF9Hsmgd6PWw2FhFc8mSRbEnJXmzDaEotxqmE96e4r7KYBA6Wj57Kse4fh16J1FrLYyyH",
  "key15": "5TmWemc6gHmWE4WogBWVPPrqd5rRWpgfPahyCeVPfiTw8HyNqW7umg9466wFyJBAVTGmEyqaw8kEhVyjM8Haii51",
  "key16": "46e88jkie8cEw6qM1sKmxSNgWSL85zEzuXDxxnAXmiu7MpD5am9DcikQUSjFpF4pxhheciUTRtphq8PEwdZDuJrV",
  "key17": "4mXXTirEXAqKJuXewLwuArFxquanq7eYLWRakddBD6tnwVG1V1VUfKxZXeTAPDVvo1XPSXD46gxNpYbFRSab3xck",
  "key18": "4gwMjXXUgcCz34mjbWu2uyXdFc6LtEsku8Wycv6bsBKxamobJfnRZDNBik5eyJD7z4BxXopUqM9zPksHJWL5N2xh",
  "key19": "2nsFsNhponsQuW28LJZMY5CGKWAeda8cgQh8vAjDF2CqCsp7ZCD7MnCHAC36syeXEfzXaUwsGVxoBcwBAPxZnAPi",
  "key20": "3XxYrtVx9RgLUvH3VD9LKq3NBr71r9yQ1VVvgCFys1XQ9oo1DP5oX9Tm44sEZiC6MMUYv75uhXPGd8SqrSFPtasL",
  "key21": "4SvCZg2jwnkXZVKAojSR45JcNifKqn2JTChKxVMDwfZhpm2fzmr9RYA6Z7gUr9L3gD7MSKz4nZhTQ6k8HmxGGNgX",
  "key22": "ocjx1fhUjPiFW2E8HX3DohjN7txpg98G2bnitoAgcWe8EcqKMVECRFhFwUgx5Y1WGaUJiHusEuSzbVyFNWZVSBd",
  "key23": "4CibeaTWQHhMdzwRms8fvhoZX1KA8Kfwnwj8ywn2PSuAN4nKhwo4k8cpVykB8c15cGY9C9TXZdZ8Zd7BvFuwHeyk",
  "key24": "4Rq2rkL7n6FppfyVnrkFoh9tZM1v3ZNjTYT21neNtrymm6j5wjwDASbs4tdaRpp4KrdSaNWABzUyDtuHDw8pmuCy",
  "key25": "2WtJ6N7hScXGvsAa2uzSiun6jc4im49A61Nx54cKhtK7EE7RAkLVRmz7dUkxg5W93C9M2YkRexvrPkr2ydRAGLiN",
  "key26": "4WM4Ldqzd2YFvvGiirb8Gc9bkFay1VAn6XksYVkQsxcDJK8AEn1pqU4QgR3aYF9LAh3zKRoaMzHdowfhutX7UKUp",
  "key27": "3qvbrqLczvdc3CGPwn3neUAdKrRq8py6k617FBAYzZvEVZmnE1eGofF3ew5Wssw8C64GvbWh3aUW8cxzub23CxFS",
  "key28": "5fUjRRHUwYqgBnY6F6dNby1gMS9gg5aez2wsstGF12cGMvrgonZiFBXM4jeCQQZGirhyzMPjt2oXfMGgfy6vYg3U",
  "key29": "2VVhbje8G2e5Jrwo5XVrE6Ejbvi48E83KQsmsVwRd6cCQKiqerHCMjXCey4bduLj6PG36t3SGkpopzqZJ9Cgdhce",
  "key30": "25zKPskz9rm1qHsMNxRF1w5p8xEcYpBRhfLhTydyGCH1qvqyFPfHSfdu9aFjwmmnJb3Q1gnAf96Ps7i8cP2XPhxJ",
  "key31": "5U9eQKui4daaN5CDjXCSMndetziThXzQrsC7Vv5aVjnkByYSmcHvfyqSTqUUopAiy3sbB2ZFFZdK1tCPMpsj3yaU",
  "key32": "gXcfRdRjyfiSQtVbFqv2v9crusc64L4qqn1qVGaDR5UanyghgLkrgoNkSKjJnpffg6D2tNmV1x9fkXevLiYS45i",
  "key33": "4CpexrVR6H6LX9EBkgqN4nS8P8sGBbZwn4bqjoeyjaBemCn1W1YnQvCQkxBir4FiW81AssvMWZiFLhmYK7UqJEBi",
  "key34": "3XH6KbQFdTyfvKCrjYi7FPJ1Ymot4u4f3cXnywWTpoAaZJpoNkhDYwSQ3GDM4AJ5wWwG8wvx9AiBRkdBsmLif6Yf"
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
