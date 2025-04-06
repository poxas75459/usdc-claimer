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
    "32jAZ71GmG4NtUjjR3yiz1G4Lm7qYbRettZUHBXqwh7qi5jWnNTP9NLVzYZSB8LEbFGTncy6q1CkHBxhXCJUSVcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fWxsVJp9DjFwpYvKq29aSeTLebf8TZ3eXrwUn67mfSFHPuQJ2NS9BXVHxaN3qENCimHGdeQ9Sh1dfNkKeoETT7",
  "key1": "3w7ngW5iQk2EMvQLzt13itbarvgYAKbnoFtREcbjBSWzsPvLzHR4dk5ew6uGwfX8ApgaLVnoN8EcoMuZ6gSPviH4",
  "key2": "LmLNngZkWoSorauWu8ZLBo9HhQ6EiNSkz4Tw6zosp3DDzRWuTr69T14De924towD1cjwBE3QymhgS1JvBHdKsnR",
  "key3": "2kXbRRP8vd6rVBKnqKBD9U8EXmLuwo2rj9bbRitxzXL3KdnfBoXa91qW9ZJUaG1zTVZbjnCnqfXvywThZnQzwCgu",
  "key4": "5hMX5P2qyh67bZghFj6xx1JzPmo2gjGXnVsWvV33gbjaN2AR7dtLopCUZLK9QB7PyzaNHEg1KRgQgmwr1JeGfSUL",
  "key5": "Sb1fQdnRK2iFt8BpZw3TTSZutncFYZC6zehHLPh9QgRVn8kbhVa2SGJrbZGRtxJ5dHUf36bWQFBzpuYvUbQh5oF",
  "key6": "2kHZHkCKJgGd7wgP394omSaWkVFG1cA86s8gq9RNFKZifkNyFBEC6e6SSt2BU4N6vPzXKmqLjS5VG4xtYwNyrRB3",
  "key7": "5iGJVmHDYVujrPY26nwBzJM1C6N3kasF1GBjczTts8FyNFE8QW1kAXHmsDY7M1qB9iXdTBoxnuPjuQAWZBcJJkU6",
  "key8": "BEvCohKQUEHS9Ua3cLUjVc9nFK9DudTaLBooWZqdV186NEDXKbNNNbezUzpEQAYUowJ6BC2wc7Rpu2WCbAZpWCw",
  "key9": "4iFBb9vdWSBjWzozb8BMqqg5QNiZXsZjGgoREMv2RRvr21Nd2Ev9sy3rAnXJrNzXPRMFcZJcCz36cszXPDj3nw8q",
  "key10": "3coFViriyGGb3f1ZCNA6UfNtnvTrfsTDP8zBuxhXvpaFE9b8WEVkRD9xbgE9wViXDf5wJdpwUK4cHxuimqgXkpxn",
  "key11": "2MmcWa3VELb9kzVttV1L7TtgW7RjvwMatAAc19HK4kGpWjZPDL1nKdBuycBwfKhGn3pfB9LFKXsQVeXcWuzTa9Zx",
  "key12": "3EyGG7je8itFNjA9QBMANWvMUMCvdXtAGoGdk13jdiES8oV2LB6QtG7R18S4CBDR4i6TJ9VHnXcqf3V3rSsLXBvs",
  "key13": "2uvyQeQENQmRMUvntrhG28jyMaHQ5aMeYe2on1N9TKJui8xmZ4jfY2QPqiJgvoz1S8KquSEzHi36NS84ttXcuQ3c",
  "key14": "27nG6JWxjB3hYoK3uMJiZx6strNZm252wnWcdC91ER3CYh3wHwzwyxACh38EEWk96F1DWz65YwQ9S6YQuRawnNCR",
  "key15": "4B2qxGFCAxZZYbyYqmTYR8BTvYZ4M9RvZj9q6KpXkyKTcXmyfUQ52VbpMeoAChasm36ng3mVpBn4jpHgH1fEqGCd",
  "key16": "XmUqgi95Yj3dLDjnC6UCQfNPRpZHdZKaWXADbXwnpNEdDN3uqFaDxgkdPkCBfbeBmfeW6h8cEWkqdbkm8Su9Pw5",
  "key17": "5gfDhou4tMetEmmPQzMaRawp8yWQQzcokQcZh623PVTui2g4SBYfqFjJGEM7zmPGvvLTif1ZtQvGkodE39NJL2TW",
  "key18": "51oX7GSTtc1E4nVxuQ6WFkMAjcEfdaVsDXY7TjjYZUstKWahxLLcc6YgXtd1UDvJMZEkW18TYpYZhYTQhBZK5LQT",
  "key19": "25jbqQL2jz888EmfYKD7HfMRVnLevibnNk1BaSHExM8WjGvMEb9pMrVKA5rzDchtLMVmMVn8mssdMfML8rnjX21i",
  "key20": "5eTT3knrB5J7NE4mkigFCVZeACAcoxpqXV8RkbWHD8Lwhnffa5QyfLGC2w6eRSR3RzmLDqciqRKzSVEUk26h55J5",
  "key21": "42VjjcVZdrSws7N7aGQZDupzUfaW1pC1veauNqppQ6NdqJ5veH54aMCW9WJoFs8AjKavVs4YLv89zhK8dpfG5f4E",
  "key22": "4XHtj7MpTWoDCv8RREbFZEcpf1pmsUy5i8PPMtNa7v2tcZtXGXk64VfaUV9uvC5trhn7XYKmF9mXjTJNWRMUTCaT",
  "key23": "3kwuHHfzFcVPYqZv8i1tzjunP7Hw1bTkdsrPRqSzgCaw6xV5AGdJ2otix5PMBGh7NsNtBp9Aw2h8z4C3LNdb6H3F",
  "key24": "3k79CnNfx9iZp2NhEFXqqAywJu6u3uk4DCL86T4LnMdvv4DiczxPobWLq52YamoBMkjZLyK1oHeRksf7BUTSChB4",
  "key25": "35WsSpa2Rqp4Xj2y8CNJKZH7FTaH7qFJnFKuAsV24ZMTq7gNbFn2cmi3ko5uWGYL5rL4P58ofjfdZQMWb3YAPRPz",
  "key26": "4AmAFnc1QNRhNvnStvX2A4Kg3fVLLfjbuHCLTqvuosq8XHWcfUGw4a6SJoieTWQqzMWgi4iQLizBWzgM1cafSpux",
  "key27": "3haRZbPqyc3jsgtXTbRDtkrXB5FXvfkTyqoeasDxmcoNHasS1DHsqbVMAaBtdkVQm76JPUcrLUR66X2pdMHE5Whm",
  "key28": "5Gc9Y4uryXxEQn73agC5CzALz9iAHrgz8Q31gi5UHsqv4QauVCK6JimodLQm5VjjyyXG6MrHm55hswitYMMic8Hh",
  "key29": "4ia9bPPLZ1xWeQpKink7xjrNv8Mzyruef4oMV89Be8vnrVeBsfKvVDp971X1g7gBJ8YJkggJGJwngMA8cQAvRHiG",
  "key30": "5CozyjK7ByUmrkc4Z7jDmztGARhYR7kVwm7Uq1p6BuPWg1Qw3PUkBpcVsYW7p3bQyhwwJb6mDgVUm5rFtKPiYcbg",
  "key31": "4K1xpjFa42spwneF8ycQbEoBcyFwyz6f8RK6G58BHQdyewSXKQvgEAU6KVTG4rCgTepHpgbSUZVWJa24HsJiN5c4",
  "key32": "9vb8m46rTtuMHUPp93iN2zPaS4CBQ8jU5dwDHKoGv8CnnneK5peHdGmRu39nTZ7BKkSYuAgGAcH7xQEZyBSVhfA",
  "key33": "Kj6APoCsRJHEjrr8Yrek7dhUgCKJBD3pzGZ3VRTFT7ZZSqMsqCztFXiEKki6jHJg4FEy9sGwpUJXL69gPJuqcXt",
  "key34": "4KZrYXWjycxJJETicsxHaR5GvWYjK19zW7bUXaeFotjqWWCwJtcsbL4Z66euNQKXWMoaqp2s4dNLBRqxdvkUzfqw",
  "key35": "3eZuwPqJbtpNpy3xTg7wNXqssSb8ZwzcKbSK39p6ia76DqjKz7foA26nN3uonpH7Eu6s1xMcau5tnvtNE74Mp523",
  "key36": "245e2KjBQvF8kAmNSsGoz5FXLVh7zZWpMF4pR1mg4Y8jmbW6tNsAWEwjDcZBVSbchSPbgxoYbWq4auvuHj7obMyn",
  "key37": "24kPk5U96e5nXcU7GXfnxs29S1Ggnv2fwxUE8fD3CbmqCinJqB7i3LmgFXALzUPbTvarRNvbEe6bNREAqWjii7XM"
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
