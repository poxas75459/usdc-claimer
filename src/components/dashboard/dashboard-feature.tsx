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
    "3JBEsS2R8b1aVpE3RHWn7UnXRNekMZmE1DTWXgSHsczhcwHgTDTDbqWA6ZPMBVypsQc8X3bBqJuKB9HpQMZWF12V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1n9kA6bjmKY1UDfVs7onyxKk4qKpu4qJPzG7vXMNADDetAg8mzQzXWkVHZW3P821yR1i6WH65Nkr9PeznDJv9z",
  "key1": "5ETvFMicMgLfPbaN5T7HnA4yD5z1k8kzxHA7AkbRQTwzczu85kjaRGHJuCt6BGeoW9iQd4q5HEYzuYAhwMThQqzW",
  "key2": "6jkjWUGR1AsX2Tp86kgqRLvDWVuFHKHXSqky4hUPM79Y8TrvcAFjhyXttZAqiGB34mGjDxdM9TzTYUx5YoeswpG",
  "key3": "2Cpoh3SuqwSwmaxzzn735oZReihCbNaEuKKGNbsNcbj4RjDmbyiWkAyukiPf3prmvKEmRA9ijkhB8xtY4MMhDLiK",
  "key4": "3srRYMF6MRgBmAv58FyAuxcfahWjpDEDdhFPpj6b8qLWMJsLnP2JytHrSXZVPZEdTqeqhmXXwggwjoyedo87NySx",
  "key5": "2gKcy6PF4Bis6YuKBZLfQG9a7r18YAErZRj9chNADsFFEkRTjE5L65VgQbHcEoMyo3nuJUFgvy8tgF3kzEoYCB53",
  "key6": "5tbFUi2fYM97kxX1gvVFsKm8ppMNWNLh6tKZGc7opY1KZPuwKKPpG1bxsSjJWENTXfUG9nJ69kv1qcXhdRxBf4kp",
  "key7": "f2R59T7TsprLivd3obP4yZjjNUpK6VfXoHqCQtVLNZn7iG8F3TyBZNrit2Uq4eEspSSs9xE3nedPe5yq5UEUrb2",
  "key8": "5qnDdHCzXHarFpwCbtfuqquBAUKbtKfpbMJbbT4ZmU2pJnZFZJSkSxYgCc6HJqG3q7MbrjRgpuWE7bgA8xEnG8gi",
  "key9": "32wvgJPRe7NVt5qYTXANLdB3u3ibhtiAtTLJ6iyow7PycyzN5Z3w2uG1YB2euPMyuvwzgY42ehNSJHUrq7p82XtF",
  "key10": "3Pem2uRxATGffrWnKC5yfdVZcMLVsLJH1rSFwDDHKRaMXLr74Xy5TCeSYkHAXizbA4hiKQcibD5rWveqTCmYYoMH",
  "key11": "34qEDUxbVoZcDQpW6SWxZ4FMC55492L5QNuJddnPzJ1E7gruQnVJeLDQPqbQsJ4FZLCfWvbhAr7uM17PdotxyFqG",
  "key12": "3xoVgKgwCvZujpyoXBHniVvYU8QsdjthpZY3YmdLxPEqUc2NSSByLF5oTLQuLTXxuWgv5ZJreDR1sa3nDRY4mSv",
  "key13": "MrivmpkgggQ4uJEvDe8NnvyYhr3v6FJosXTYLipcTveP1AMVujYK7wGknF9ZJ5YRebefg61BA16tFGLufNt8UhR",
  "key14": "5UFyMNk2wibURcSNqPfKPp5R4ckfoZxpMr17tsQgzegahTxhSdzf4EbwbmHNvGy9WVY5PHo9t3E4R5iRrWQXT6Kt",
  "key15": "2bPYzBj1uGUEbxgMWTxgsqyA13i9VKUJDjjvhs3aQ7JjnzQArPLpHVYzxiSiGPvAAw623wqHWWaRe3Fiy2veXCxa",
  "key16": "5JXPLeZD4vc7uCeuQ6Rb3BQTZgF5m91YaRRr8DGZJW39xaapEwJyi9RJygtQsc9dAn7RHS7tGaPQMdpM1tkUtGZB",
  "key17": "7bsktEiJK3Tr3oeN7oMkzWuqrpcmP2W9Qz777SukYgjEQm8y7r9XStaGP6xwbqM7b2SPzM5wZQG7WLEobSNDE2n",
  "key18": "5Y9sjv37UST1TH7etnPuRu7FT242aiMfcijhMxxe49vnVEqxHDpWsgt5uX3i7e8FH2xWpC3H9kBPwxuZxr2dRkbX",
  "key19": "35fcGkEsdNRSd9ZAxvuuLatxm7szWB1axwNsAetF53S9NyiV8xos7s34MFBWhWbUZk3PTibSJ6L3ahckurnQfDiJ",
  "key20": "2vtkLPoMWqhZt6Gm7ci1fq73tcZefCyzbkU9p5xAgp1AcziWMwGXoaGHNmD7paqSJr5WtHHfwKF94P8bGB4txSTE",
  "key21": "1t3BtWBdn4i5Ke4c5honsZrRSSNX97Y67CHYvSCgQQeTSB8E4E9TiCBCKYVcFKkhixVJYWZy8XkcJfPoGCu8zGF",
  "key22": "2vMtF8NWa3WktExCje6jpFXiNyJFKipqTprvc4CrBwQYrk74dDhkLvwsXSyCEog1eSZLEousSWQqzkWL2XU1Q5j1",
  "key23": "5TRXoRfadrKRThm58K32k2boExiUmGLigUAjtWcHmamkpbgr3ezrWE9GYN4fueERyqEkUjdgJkHX5FXYbKHBBKRB",
  "key24": "KrC4Rof8nx4dcWGBpoDf3afJ7fWHekq5fssDc2J9Y9U8LjAGyrzYGRCtA4hLpcBAWzgKgXfDnRgM6wmVD3oFxt9",
  "key25": "5JR9cEqaDmMx9grhwcarck6UYQ1NPiGXGcrMzyUUTt9kkQM8CpXBUCnmfsYN7mYJpe8tJbwjMi5oyAgfTHvPRHDY",
  "key26": "ihm4XXrChwWJwQMxuPe5fWqiXUyhaocKDSgCANQVi1ikhaH8cM7P52cPvkomLyi3eHDgtNFs4sxWhPvB1wrjD7f",
  "key27": "3cJsCNd9whJb2fRfULmoYAC2xRViD3sCJ3kvfpu1qPZnoZ5KHMqTEi7xdzvhKFZbHngi6tNDigPpVk4ymA3m1Efm",
  "key28": "4LheEBe1EPsuaskhbhWRZDKsRphxoDeUY1NjuNsHHskYW2CShjDtMsPNFUYrXfJkuPEuMFp6g6B5D9Pe82oRPhxu",
  "key29": "5BSrPj66U25KttRqqMQqKbapbpDZsaPHtQRJHBM3B7vRgGoAoEx5W5Lcg6f2Pq9Ng1P25uAXpTZmSFa1Xh3TySss",
  "key30": "3o3BuWnf6bynt4thoKtXwSxnKLoArEGXdLTieVEhn9ehknXbL4LUU5a6Dp4LbaTaWMyMgvMK672UezeAn5XAboYi",
  "key31": "GJnvxBfoj3nEyr5v1c2ZhQnvJcgVxat3gF8xJtGLiByLfNeFff26uMsN9SACYkcSyzM5JQKZhdirdFoXLWumi91",
  "key32": "2QLEukb4LyCt68ShoKVwsCtcp6yF5hBbfyKbvKckZhioQYhgSLYPZEFG2Xv9H1qnQqRZ4Jk6D6aXsKdk2Bymye2X",
  "key33": "4V82AvfuCya2DjhKfYn1cJSuV5og3krHA5JJp4uYuTw36ipXVv3TFPrqYVLbJaAiQwCLJQbxgfHayzwymzpBVAUT",
  "key34": "28MazUS3n8RicrE57Ps4rkZnpvpDvAiM5vh9s6KLJJHdauh48zJMAxrfnn9W1vC34hLm1szMK6JDFzWqQXoLQs6c",
  "key35": "5m2WxPZXNbmYT57J5ATo8RZiqFdBgoDkJ2MHGgQg7fgRrtqzwccF1GnRjc3V1vy6dP62AWSbdxwzjquGAd55NXSM",
  "key36": "np56v1S1qC1qo757mvYCH8zYivfycr65wxwCzabRdLgPTqm6jQaPYS9jaekFRaa5JvmZmVCRuKtjEQ8CDNt6EMX"
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
