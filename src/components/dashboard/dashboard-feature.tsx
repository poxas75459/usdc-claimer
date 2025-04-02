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
    "5csQxcMQNRKxZHsCoizF1kj8mvrAXDt4NedRZKBux4RiErC3R7AFF9UNPaocoABQYFjhS3JyLPTZGzVB2YA2fCfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obLTTLnX4ykZs4hi6BSUVkAL87mu2dJQTHQZ6goDtiSvTWLv2E3uMs9emeE9QRsLszgWGMmQ64XWPP83QoJs8X6",
  "key1": "Z79jWtQvC8uQCtH7ks4vrkKcxGojQeZVbx7iYTfsMiMci4pesNpMKdnJbj5ngFkTUyuHuYiRBPKM6QX89qf7ME2",
  "key2": "5Qt6mdAUouhHgzs984GwZhpgeT67tk53RLj9ELFheEGZVYK7DwCUrHLPLi7w1F51sb8H8UgY8rHDCUfavZfadY1x",
  "key3": "3YAprAUTkouPFt6S1x35ErmBq87QLJYPStFtJzLUPe5r6gDguR9pYDAtCjbsWxyaV5cU5D6wFjHTKzaEyxTXaBzM",
  "key4": "3NXp7EgqbG2JzvYNxSe5WuCUvNBQdcQaswDTcuJFrb51iLWTLRZ4tDLzJDp3KvpTmnbdhLyW7WNX7FLKUuYiTPj9",
  "key5": "2UEMSTF92LHzSwyr4M8cBwdDtdsuwNyyA9zcZWa3By3FKmrXBN6tyymmvMUgAf4Lw2svm7ihq5dJnC177qGzpvdb",
  "key6": "1vzEAfVLCfGmrYKbCnYBEeB8ddu6JLfWecKmKcufUbRVxKFnH3By4xTQFCGoJXqnFEYSMoFVB5mfHYugap625cm",
  "key7": "4uYGwoeMwmuj4YF4kYVydvvYvQi3duCSKb8WkJUsJZJ5i3zZi3FK1E1idqEVxZqEXajnf8d2WEi8pNuny7j4gYvi",
  "key8": "2wTGncbMrsTkqAVwfjZopKDUMW87cY8tqBJ41cAijjjpKiQL5dSNBz9uKeMmTA77C8SV7A5UhZyx7VUZHuwKcyUR",
  "key9": "3BuW2fWLkSvcFhhLe8eB65iy62oR4NuTy9sd2UYt4DvL9w5WaJi5FfRS39Y1LoRAwRz4u33uj1ciVkona5a5uTLt",
  "key10": "5c7p8j658ShyGhTCDsfkrtzWtKH5uaue43jFjGw8nDVYHFDWoFKvPu9s9Sfw6r4Y8PH7NyLppWexb8cg4jBMtPge",
  "key11": "2jj8mBKzSMsdTPmHLFc4fChh2aHLkuJtH4q2gskedMVUKbxmXsC9vgr1GCtjT3C1fsffcwEYUofrP3httDHhFV8D",
  "key12": "5jWRoaPnsiEswA5fzQzU1LHbhusiuPoNTnur5gywf2rSLCcghKopwyGFQUxZCr9bYNizUTTqQFux4ZLhax5xP1Lb",
  "key13": "4RKHn7StpE4hWYXkELcJxpvDu7CqFu1bdayZBbQAckdKLETxYH9xN3qYbf14tao72qjDDqFjNGt1A1z7eRywdqtV",
  "key14": "5AutP8atXL9bY26gAxm1C8DvHga9tafJAuXs8FHTWRTZtXJ6TReYEGJzRJrwa7eLvRaL4nP2ghEQxWa9Pyq6snwv",
  "key15": "2UFFJdycAhP8teqBLChSThJ8Nr5BPWikQUR4nE9oN6YjtjzHAsmiup6C6hxxRutTGYoJHipT6MqZsue6opyqoDjv",
  "key16": "5mMadD73ZbiVfJKyWfWBysaj6raxaFcKfJFWXsaW8yRi2AQKZJuGWuTAnPZtDeR82BjJwDzU8hQjfogCtqw8eXXb",
  "key17": "5CXVhmeDnNdZvUcFPQobHLkLPEGu23jF5Ppkq8DKFDBh4vEiwys6qAbYQCpn6Uw5UwCGHtmJ7gmZxPZ13Qr4Ki5c",
  "key18": "PfVMFcYddrXxyhtEHRMdZrZmjzsHi7d79xLAKjZ2cJw8Zadm3Yr6HZyaDcnJLkYFuGBztbaTPm8HSt24M9L7zG8",
  "key19": "4Gjvi7SbQLfhRW6tHCXNv17HjioPx8eWLZ51aE2sMD7M71LYDFKCmKN1nj6Z4SacRNv2RrBZ1PDr6GyXzWitFyrh",
  "key20": "4qHjTGiG29XFuUxgGBrYHS1CicoUSNCAD2cYMPPA5wZydcjnFfuyPYwoakAGM6b7PX5ngLDZuMqpSQVA173wvh55",
  "key21": "2vuicBT6AqDcyq1Ho9mS8MboTVqgKEBPEXR5dGRCx3QoG2VzsTUbfGbu2toMSk26ChXv4wtmgEaQ1nBgZnwqNHcC",
  "key22": "4mhY1w7SmVxDwJGbCbw2UoWBnVzh44e1E2hbJDkSxGBzAtFhw5LCz9ny8F22WW3Dj9BdkQx1m4F6NntHd4xV7LYP",
  "key23": "52JTeZZjSTb3ETr6T8KLDVfEge3dc7YaqhegXchFNp8RAudLxETRFAWHP7yrfD9WPwAiz6ZAR2RZcpEVpr6fiBD2",
  "key24": "47JfvnbqRUhba32czpRQXbDfnsqchFagMERkocoL12dVmcjadW84MhqtsDrXpC6tLHrhiPKNFnB1QGpjGiuLMmek",
  "key25": "5EatuDnxFyJoj8TQqNJ5CjfKr4mGzHriwPwNtShecf3WVFJ1t9gqp57XyC6HUDum52jDquRiKCP9kmRGXae7CyUo",
  "key26": "3ATSxtkniVEKUe1LCsHeBNEQgPpyD6foS99w7PmRSess2He9mHCytHuXcw4EzZW3sy1q4nomdSvrsG3TiVxyDRNB",
  "key27": "3ji5n3m1bce9yPWpRGggg2gQH7oU5KMuu3d1tgCKEEtidbJMEREmTiqYbNdfyw6ABFgc7CZV9UfcNJcm9q11vKQT",
  "key28": "2fzGP2bAMtXECQYDUxoAgNeNe5PSzeDYhzXbL4b1PhjjpBEpkatpyCaZGTo8JdUKGG45RFfEFhKZwpSLazBwssFA",
  "key29": "iRwS8MYppdcezam62Vb6SviTWr5EJYhWyAUa3zj4TK5CJ43evJpFA98tbrzrkKEgNrW8FipK811QyX5VnGQcoqA"
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
