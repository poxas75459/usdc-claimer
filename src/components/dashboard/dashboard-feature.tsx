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
    "2Gn6YVyMme6trNcdmNdrmuknudACjvAH8tdGPRWvK9fAqsFTKmRBLVkhx4M42nPvW5YtGxuPx9Y8qTNabA8wohLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uz8s5aKXFgTGxNCr1w6iZKuCjbbVZFBHqyFMB9JnRbEP3NKnjrNdY4rjydL4HhJXfQrDD33e3jTpx5NBtjfJA1C",
  "key1": "5t96W8kXRCwyQTeqLMLqYrYEQYKLJFf9f11mkEVKK61okgFqvosHw3MLddGeoiLufz4pBGxqBjC5NjD6G2xUppyv",
  "key2": "4A8YT4sSubzaey7W1H6u3x387bv7Cg8BRB6PfGeptLiZcKqgo368KgVCqAAMn62neNdz13sBEUV4n2BJjiwkYuYw",
  "key3": "4tJwQiNqch2hvPsxSBN9HSdZmC6FvioPH7y9EUJwCyLaDT2GYtcdyZJ4v8VkxC2tvM648fuMx7hAE5DbbZeqx7KR",
  "key4": "9mdMkX56uus383uz9bevF4GXERDY2pB5N94PzsiZT7niEXggrpa2dXkhUjKcrsdGQAaurg6ADQYUuqYYMPcmoZ2",
  "key5": "25mNpH8okLxwDc5mgm8ZMejtzN5iy85NZFNXRHDmCaiAuFw9QWXR325v6BALpgL4QBMrHBoY21pEKMHxfNcRHSju",
  "key6": "61wS6CZHTo4SqDbEjMTK5ok6iH3Tty9VneVkS3KRPzrXvnRdg6VtPfJGCFvEq3HTvAhyebczFzCtb5L67ctRwTR1",
  "key7": "636AKRHgoEAeXEgkoGL7Qe6AfXK8a2AUoW6NKSsonbaJ2YWfog2iA6KxXF9Rhucrn6GgpBXHgUTyLMgGGQfKFd28",
  "key8": "24urNMk8yMsNQwmAkH4rqDz3iMZ1h9Mg2qHgdX34BPixxd2DX6cMJP2Epz286VG1wedX8iVkCDTh6WksA9gHbgKi",
  "key9": "th849sLY5qcnVnk2AaHiGZPZ6V4Ro5aFBxq2RJ9Bqe2mpUzAy1hckvwawvBnXdbS3C31TmZHW7S3xvc4aRTvNDx",
  "key10": "3G3F4ZG7dpnoq8up4KpqJNAkXSWJeD2QYoJgdTcGnvk9Z35cMJMpjE7EMnzEAnMmBrYfvSEVpbNRXjK9Pnp11qQA",
  "key11": "4tMBv2JQBaR21QwX9fcEJpET7kVpmB41ZKyhd447gfSttA4qSQPnnn6XLsETnYFRgyoAXMC2H9gAPABDyjaJr2dt",
  "key12": "27DZvV5nqYTnRpNBAFs8SvXhPt7abGC3DkHqTzyfwJXUGYG1Sz1VziMYTouD5VijuqsDvraRwRmPtMGvYVZ27ULm",
  "key13": "5ZzaotuMk2yQLi1xU2U2QfTETY3uTAKRcQJ7T22v3eYmmwe11E54xD2jbtdb6iiBTqpW9c3JYUT6hKsetJhT6oVu",
  "key14": "EpezLadMEVfjKxjhoF2iSerXsuyHwbVCd5bHqp8JzN1NuVsm3Bvnbur3ffsBjYv9uvYKGVzY4CJA874z9UnbEVA",
  "key15": "2X4hXnSE2ubwkRwVe5vko3NwezqZYjJhTNvfHnKVjpGUKbc2JvmTbe9xDLrMvvkTqEqud7q4prt5Lho2Gb8vPgDC",
  "key16": "2vUz3GTKeQVzLVgF33RUg7ta17wHZfbAiBLvmRkPeWHmdLnGK5krYPBWr6Z5g3u1XTToczpjZhbPSThsBrXHQE8Z",
  "key17": "43fbWPdoD4dtFuSsEaMk8iQnUyTbZABJCwJu6YGDCUdrZpi3Aq9hgeSccZQPcbpNxxbUgG6f2ddB9q1Hiyk7eNbd",
  "key18": "51fLztN6289SLHstpT545NemEaubGD9TAwfZneqpdg2Lb9cw3UQaUrySNZbagvc1JD4JFfbdyvkWmcv68RKM51Vs",
  "key19": "5CUyqn7C7YwY5c6H8CNVoiwkNbZjzQqQS7rx9C8SMJUML8nSAVgb5Ft5PsCymSnzmHyt7yLx1LLxKVQb8oNiWBpC",
  "key20": "2JzLAmePZcXbZ1jkWkQjFBbDU3pw99ePHTJ5DZ4AXqZt7w4rX2V16HzjoeWmETB95cicQ3DYFMMKvqPjH1riyoe6",
  "key21": "RNdYV1d97BoSya61ZZyGF2NFRBmJhLRaAuEJSHCMnUxUHSFdLJ2gpqgjyh1yXS4qbVTafE2wK8iZw7f5utAkcPD",
  "key22": "2HWGGdCyUoNVwS6e8u6X5Jn5HMX2XomEF2u9CZhKT2h9dxQu6MWjs5TZneXRNZGVgLLg3Yc5vnxDTHH45T1Uv7e",
  "key23": "2WrotRtM3axxH5SKJtFhcwuf8wGuceGVNdWta1NMUZS4TTUe9K9niJiZi7tn19gd93gfUvJxVnga6PzJrJwSFLNR",
  "key24": "3yRBp2bd6VyJbsafJeJNYeXiVo9TRX93otm1Hxte6ZPB5rvKzThkgyfTVbdW7K25WrtkVeVXo8HadVqdjDLXvEgJ",
  "key25": "5KTtzvxeqEnBkgvci8jjxBsr22wxvEz7S1fs9eWFZLLvtw4eceDrTNdP43PoqbGKK9v55xT8xctyan1KApGGC6ye",
  "key26": "Wi9YQYBsNo857z9K7QtVv9LsdoUboLmQHAsjujpn7Rh4WGymV4v5RUgjBxcSgWVZKSSE9ds6HmwNLk6nWtrfDkv",
  "key27": "2BTJ764Syw4Tuc1DymDxn94LW9PMLB2vsSmzaxFWYayQo7r5snPj3GhoGsMgRsnLD9EX6FZEi1NzdcKuPgVM5XB",
  "key28": "Xg9Qvbci83dA3hhkncho4aDAuWqcLzLiDKWNFEnZQJ1W8w4czeDXt51XndhJMhvyUFKofdiZaYFjbuw9AQySPqi",
  "key29": "3XfKam9YEpagCXZayVCQbpyhZWYTaG4gB1cfXdjYc6xYwh5z8A1hJZiEgX4Kx1b4jiupmukKbn3XRdfRU7Mv97pb",
  "key30": "48BBuz6g88tX6erbxiRg2bjpYD46sFsspdLi6pQeukMot373oVdsUCEW1ukXd5L3ULsa51SYNej56jRZ5f49Xbuv",
  "key31": "4K2322V98orpeTURogCpL7KPLBmkqL8edJzQRZhpJ7dNWM2CLwosYDiRJp8pzfiSx2azwZ7UA3oeEM6d3e9EVtJx",
  "key32": "2uHAJXQhEU7qRbQHGud94m5MAmVsmgEeVTxDM35eED6KmLqwQtLxtMzNiKUtBZEiYSGefP5Qd1QwqRtGVKLyVBWw",
  "key33": "33SEYnKHbRuNJAnTFq4tLXENp29neyQEXzH1yXUy2tsR1R7EeJnMB6vaHDf9h5NJSrN17G1oiX5iQm6maae1H2nv",
  "key34": "jgkweVwg9DkwCzL2vvFcJ2fPDSqtqkMfknpmXt1BkPH1Fz5TihzLfaXMHvw3kEeREUt6CwoWCEnYmUaYzh8Gf6X",
  "key35": "5Lip6bWUfCoyqTAv8PiusaTcNgW1JGnyBfbfqeRG2bdn9FJ9Qc51y44nCAXbps2FFaRyrdFXxdRALbVtdAGtFRs2",
  "key36": "4QavpwhY9ygHFmUUSePQ8M986FbVT2RAoc4B8EeNZLW4Rnj4ibYpc2Z7vreGEd6qawNU5HPtHgRGvBiMfHPBKXtv",
  "key37": "5GSzXXjvjHmiXpLZLxm8ESKE4YcY7wmE6k5yDVYmbjjcgkSz1ptVNBSdtH4vaHk15XbaAnX98zFzaE8EH6m5TJ4P",
  "key38": "m5N45FUBdj9cMwvAFbpuyDXwziXuoxx4fHsFuT3ZULKfpEQm8ek59pdRhWboAWnbSuThejdqQQ2AoGac6qZzSZn"
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
