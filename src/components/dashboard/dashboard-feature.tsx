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
    "3h4JumEDkNHQC4jfQPuRXjWLxVSZS4PAQetuercYYpJUdLvxYEv3tYqyDdvoF1Kwj8S6jGwcKaTP2ohGYDA9SkJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNe7o31D2rkpHukCDBAkSr1zePvfHEzNLUaZzMcniTBbpJbGJBYzW4VpB2KD3PH7xeg4dawQoMcTVJP4VpxK4Y4",
  "key1": "2qUTyYHotgK78VvFMAuXaFb7sbtZt9bLkriidybxj5wshnLDj41fwUSUjbxb141paiwiPjpvhMzkY1QGKtxC1faK",
  "key2": "3RDfzptZRVHKkCEkSsf3bw73qZBip59QDDEZi9LX29cAzt6a9CTcEEtiE6McKBDZbmFCnGXgxubFzpHuUTAk9u9Q",
  "key3": "4Ed8hcD6pdBZLFa7bhJWyNw5Wq1jBeduknD26XQdgNUHeaPhVDSJs6TdELvWVp5MxsdLggJpqucLkDFpKubYsSVo",
  "key4": "66WiBu4LQVMswNR3bxtg2ud9zEL7a5TRmPXKyM4Ym73KMGX4z46WHuTvEVfTfiNDFAVdTXk7Kq9Qy7iegi15bw8c",
  "key5": "2hHgKs4rmX4a6yHpN1oo5G9dJRAD5aKwupTNouRvRWNa3n76BGB8DN6iVKfkK2s9Ss25mRrAqhnqVHT8R8ytdHGd",
  "key6": "s2G2m12DET8PNBqMsUtEYqZvngFMBi6L1MHfkGRqFnKEDJ3ySWxeXrMfCo8nS9WAM7Ee21tm15QWf1JuEem6zRF",
  "key7": "3abKdMZ9CLkZHgJijdME4NXwgn9rJ1vMhjJ86NrPfnup1kph62yMmE4f7zELCuN5da5RHwTVYvUGBnNEzuLc244z",
  "key8": "2u5vJpBZ49LrFSYistAh14M8nyvGhJhWdpGqyVU4LN1n1dQxeqbpPSQKXmEg7993SkKKec1S26keysvhdLWvuqDu",
  "key9": "3VjaZQUo7ijU37en5FqERUMEyW95kRduj95XyRutwpqJEo2jH68shUe96re4hjjcgWFN2sqa9TJekckQbCeQL7tA",
  "key10": "3rJgLeFucCgX5pnCQfNss6SnHeTGt6vLco8oxjpezaotTGugzy4phR29Sqs8HKquRTJxh8wfdyLBc3Y6ns2Zs3Kc",
  "key11": "B5QRpjkbHELxdhvKeJ3XE8WcitkAxVzxWENHGWdZysnbuD8KdDT1R8YHgrT8FgD4wQRyVyH1wTqQvHTtp4uSiYA",
  "key12": "49nM6Jn4pFw44ce69gZbnnjm37W6zMjahkWWNDsW1GsrE6iZ1MpAxcwgqJpZXkLq3hRt84vNica4uvcgFfJuJekP",
  "key13": "4SLAwhK3bM7iT8fxA5CRkigKfXQrm3cpqF9eNxqozgBWmCiiAwtBjR5WuY9UQj6aVDqdzKcCPwGbbXP8oh4NM9RV",
  "key14": "2pZnem6fZasGDmsKoH4EbE9KxZQKmWhCFgpwvfNz2LH2Nhduon6SecbD3YE5qCzSf3BDjE4frrmze8bK8SZFHjUX",
  "key15": "2ehcp1YTnKaxWfvxewJXVAdAZvBuYPDcCPuTYu5sJv2VkJ2bdFV4zaTq7i6cYRzAXaoazMx9D3sHTjtN1GNdQCrN",
  "key16": "3y1SgXcmximksnJK7RzE2Kr9vvuGKCYUXWZjLpdTjRhf4pAUTMbfevRH1NmUyksJ992AUs7fUZbsqYGBKtHYRwuP",
  "key17": "337rLBdgyyR6u35UsAaAUhwojk5QHniEJzRouqAGkeDi6QsjYgw4KnqX8CvSNo6mTsJ5qkZf4aJoSNLhE4A8wpLq",
  "key18": "35QCQbQ3YSVkycDz3VqbgwK9vawJeHXB2qDBzqruZKi1QUALgJzkT9rbFMHcbpuVUc89W5h3kD1vZsAWE47DDhCc",
  "key19": "tu6cit4omBBDfNC5H2AwuWsttB4LkAqZiFkYd8wzESCuVvEoRSPbQosoge27MojwJnd3eHjbmUQ7voKqaifqQJG",
  "key20": "131BNCdwurJUXo2y8uF8vLDob7VQurscGGLqz4H3pVc8bLUgrgW5NZtkm4fBWnZdxdg22zkQg7LWEyTToxfm1Nv",
  "key21": "4qRkoRccBsZmhjWo2PaiCz8pUD4QdYBWb34psdt3CW1ZTQr5JoNwZCWVEn3s3FAPPcK8RDHbtmE6ZP9pWAD8YfGR",
  "key22": "Exi9XzJL9L2a41aGQhWUPm19NftfEQk5S2MFYUTbFodoaepkoGPuxrAJyQPe3wMcB6SvQyP1TVqAkjn8p3NdDjZ",
  "key23": "2MCczo95wFrWjemEhCFQhMqYVY1nSnxA1PevKsK1v2qdwVgbVFZD5jLiBvZt21sT6syJMzpX2YNcopz3CYBhPjYo",
  "key24": "hnMSc2Jedos2wYrzBETd7ADNeKV91gJoQwRsyx3H54AZVA7QUeAbQUovQwN1q9tkX7HXD8yK7Vk4umAAAWiYNef",
  "key25": "36iav984QhyPPck8HmSiFnhu46Qz2LXa759aKFGQCLUqWDDMRSiY6P4thuW3AJHAAU3VCmmQJMrFqNWJSBUkAMt5",
  "key26": "5WkgBC8kNKHBxzdcbYfrySs1hbk9ShqnFjg48vZABsq31naT5FoRBNV9GWkh1jryoxbLET9ZdBec4AcP3dqPHzdM",
  "key27": "5AhrjWAD2caqeZ1zXYzYwaGztMpZNUQSXUgqARPzoQJ3YqHV9GUc7P9ZAfpzL6AY1qdP9X3mZmmLQ8engyyUxKTj"
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
