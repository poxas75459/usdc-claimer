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
    "NiJo2zjtw1YDC1MsDZcc6VceQbXJmuA95msmTJDvEWccGSWgpQKimZ7XB554ZvVD3RMKK5vBuM7x7w2HJReTft2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tKbtBvYR2Au1hnasYvGk6xNA2KjdEQbwBgGBssRwvcnDTUb7LLGJjYxdPRoogZKKztj4b6DoXcyiGBz8Aj35dFT",
  "key1": "5KkpYMN6DZyrC8wH1NwPaNeynPa9D3Gqf9XTXCCJxF3arBxyx9HN1hcHMr5A6fr7mz77jhWRm3c21QbSm6dgU4Hd",
  "key2": "2khXdzSkdz3CVsmXQTQcM1ksCGuP1Bq5G5Y9xpuSQeP3Y2v6NZozi9QE17muS8PtZJTbUNfUQ54R5Bmvc5tSqrRe",
  "key3": "3zjhweQSbzgHybh9BZMpaL4W8aFx9e9qi9utKRk662uEYqpYd2hQw1YsmLKxAgdrc5pHKRYLP5FxWGbJdHkxorPD",
  "key4": "3xN9M7ziyH1uAestkVD3fWMTJ5tCYPtKHfKy3vhuozQXRYHWDLAcEgUZdTTbvKTbnhBupsZEKCBm2GNce8vHz7if",
  "key5": "42FAEozR461pxWUjGxGPd5owcsf2gjm93SLu91hKUL3jPKwUwS6pnk2AZjAr18RDzoYtHBNq9LvqnsqN1jPVe7YJ",
  "key6": "5KpNyje6Z4WnNERdPHGtDLP2ZU5i2wxgTTgn7MJLZ5whXYerwmfjmQqQPXC4cZfkNqxhvYJdoUMJziEbx4bfsm3E",
  "key7": "411xAmpjwzDjyCvBcktQNKYgxFBL2SZdGBtzXM1DZbuwgxeWzWdoSV2WAWuNLbpKEUKLrQYw2bGkUCSMAfF33BJj",
  "key8": "3tVxSN9EkvbTwp4YZVQTcczEGvQygUqrrM86FryaRV4jhQoGoACtg7QnpaRhRZLxgiEDVCw1Z6fcdze584jqTrqN",
  "key9": "eeTh3LaGwV8vfMwAQ9hSu4idpVDam9KECRUcqPKv28C48ve8CkJTXRgkSyidmtJ7ShfvkjuXiPFoN7CrJU4T3rg",
  "key10": "2NohWWs7eQnc8GCeMoaNpmxAPMFHr3Boapp3tAJMhx3qMnquzAC1TmLyZVTrsN6YqK7W4Jfn8LPgtdkxUqUTfUiF",
  "key11": "hChqWLZtpESyp2Yzj5auQvhibPtkY7adhoSrsUffxD2bQAyPeDdDTwfBkfnde4Cunr6xf1b9RQVbeEsVQu9hFRv",
  "key12": "WmgYHccfsjWwhJeoymjLfEhJHeHJ2G6VM4VLY1P8egmbpnhk8Ttn5JqQoJTPGaeEG3PdyZ1UWxjCjKQEbej3rnv",
  "key13": "2pGxKJHyEHVUXVCTTaFDDK5vLNnAPWUwsHKpa3zvTBXvq5BQ3fE4YeME57ZBo2hTGcP7daqDUTEJ2V2LfNqguqQ",
  "key14": "3zkH54VutcfiRtpG3aWfC4HRDpqaXHrUUfSeNWra3Qh6ZGRQgGvoWEUEeAUXU6ZiUgMVhCaGMe4r9dpSrpQiP9xb",
  "key15": "3ir2Pc6RfxjnihK96u7QkcAEdgWoEKHsWJhmnHZb8DQSQhr89Z7XnTZzfKGvyVCof5pUZKsPUm2utRoGiXpgwj6U",
  "key16": "2bu2zmYwFycc3Hdx2P6SkDVqabWRaRoqQ4ifXsRhRaC3T2G9dTuZLcG2ARC9UyqQeAJdt8HSpyaCWa4tqZTKcWpZ",
  "key17": "2eS1hNRUDjA1qgRiy5HDa3iWSidY36yKuYrRhj3ttjvVAubL4xjDnsRHZrJmDpHVoRqQo5LWkpp5pG25jtFFgrUb",
  "key18": "2XEBz5GoCqb6ChuQgLya7nx6EnhgZtp4ykc5XvRWJ5FAsKq8K2Q6YneqmwHLtUCaRAmDBDMXyj1xrdsYz3YKgYGm",
  "key19": "2WLZzvY2VtfubsuKWwVUmhoPuDutBwMJatEhyRNWpqmZCDejSWWS6VU6HZinoab7d4Tm6vkmHiq4f8h4x6FJUm8m",
  "key20": "5GR5DXmgKpZHxH9vT7fDaXdSAmrJKo8q5VGFSCt6BT93Egpw9GGJt4p5Dv7t3NoAGFvgeQiW35Pga7ogs1sSDLMa",
  "key21": "58dagkUMh3sq3vdEV6tyLPWUAHx8zfixgihQbmQgZmMARviXyidjF1zK2WtE4amGg4Tf1jjeU6is4AL35D3M36Ru",
  "key22": "5GerpQKSnoay6t5XcCYRqhiYXo85nvTjFF5SiVsGeZJBarJ7zb9e8jo9K6bdApEbU3PkwnCZ5iYwKnDsD1JznyR8",
  "key23": "3vq75TuUpeQQGeYYPVynCqPZ28PimwCo4TU7k4S5ebWZn2oSnotTnmHPFq83Zn1cGP4u5eFTDoaPDqgsYU15Drqw",
  "key24": "3RHGyii4SfQSrhRc7JvFxQPaS9ahngzUJqQ9sEcRTnzR2mHUC4Tf2AiSaEJnrUymEHoA2tuxytk2ZiivekWPHS3Y",
  "key25": "54myLYmqwMxLYopNH3GLPjNB5BTPPQGfKq9nXr2z8rAsQKtFvpfRgktcxh8ooEYgKjhKwKUvd8HbziSCs1EsiUvD",
  "key26": "3SHMTzXs9uLQmN4xhMxygDDhW3axZtEhrJUciQPbGuCWQH5Rxni1aV4K6t1XEcDsNQfUKohLe2VzvHhV3HCLF6QN",
  "key27": "23Csp5xuryANrv8YXxbki9vP2vVw6XHMKUK3jCUF9q6N89HSB3GE2ivCwJAatmGMLUeXRahPKmXF7MWWvJWWwPdu",
  "key28": "3aaCcskCKr1D3fCsxuHbUP8d8hNk9gGxNxyRspZCmswHyfFBMgewhFcHXf6Z3ZxBfPSK2nrwhPFkKdJijqBPehiW",
  "key29": "2htnfBUn9MzFhJsBEaKdGka41TcKi1X9wEvkG5kGTTQcjv8ZM28hRmyCr5Nj9RHYp78DRAwZq2cpfzyReQtC8PsL",
  "key30": "LHjPFkE1TbWDSWghZoSpWpvmH8g2tCex7zgwdQAE2oVZK57j92sDMGYtL9X4zocKZ9Cpb84aiUYkqjiVfYEoBjG",
  "key31": "5tPW3cgemrjKJ6vxJhLiaUWHerfdBm6kKxXMV155cMKsjyyX7eEcays4AxCPHDYadUwUY6A138qP5wdzSsLJNjus",
  "key32": "4SzQFc2DJTtKpPXomWECSGraRifqU1JrHe61gdfD2renx5EQU9KztVN9tTw1jVSSLWwM5b566hwP1Lrhm3M1fcqu",
  "key33": "327gRWwiNVjDtAiFAxwhkGS8YnAr2H6okQ7CkyrNTDPxLPG9iYKevSdrjJ36pqnkbqRhmB2HgeEDQ5vDHwRDTKpF",
  "key34": "27r8cQQxoaFG9jnUqfMXrJC4QxpvDauCS3eNHGsUMgomV2E7MZYbpibaBb6mjjNTQUWCY2k48tYUkM9VNUPQrS7U",
  "key35": "N6JF1WYBMurrZLEHLLieKuWwo2UmsVKTTGiTwKCCpRS2gNNjYrZ5jMwmZuPyw6eraLiz66dGjmzyFw7pWiJSXKm",
  "key36": "3Emv7ujHYyJ4r14Ds7zv4mAyYqmtbn41mocYt6CCujQSKF5zDrVV9mM8aSQC7jFcVFU2Q9n4FXuW2f7wBaFiWqVu",
  "key37": "49w2PTAHzsrHBHawGUqhTUTrz9sKP3iWuHjpK1GwgDabVJaQWDRGZjtYxDZSv2tdTcVhHSesCshFJRhyfuo7r6g7",
  "key38": "46MQT5PNveZJN6B9aixm3mBMkE4Xa5Auo3QYpiMQZ7uoSfdvrdBYpCytRcvRAyUVwFVaEZRwC32rMLRCtGECdVh5",
  "key39": "5A5foK7QZSdPdWBGKtQeLnTR9mmGJ9tvWvhnsPSjBrheGZiFxEhWPMwEkBSPz86wW4QeUK7WbXRQj9EfgiJ7WncZ",
  "key40": "4tVPXoivvg8VMcvwyCZEQeWcYcLSRVcXkGVjxHsbazmLLYQ3jgYvKZMyA4iFZeb5GxPBJDZWa9gcya5FSMxBjPYh",
  "key41": "wsdRYYhwK9XnAB7V4ZN83BKaCJLNRYzJfwbYN7EfeAHVCeCSD1vDURzMXH3dECXM65Gx4z5TrcfSH82VzDDC5Rt",
  "key42": "58TXq8vg1cRGReCJsb1qBw9sYGx7vbjkXng5x8Wyvo3mnby4LybKixqcx7FvanebcAxwouFtBoGqd5Swqtn4hyZe",
  "key43": "67CLZsmqXxRv1rbzGptFkZH3ca3XNdfxcwieLquqP7KK9kDpdLML4UvePyktAW789pu8NVMfMVXd6hqNqfD59UCk"
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
