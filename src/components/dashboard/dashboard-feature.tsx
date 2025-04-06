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
    "3wtTLFvbJNGPp1Lab9mD2GPuSWndiRSgXPg2LjkdpALPYaWGJmnqbWPeruJV5dfNeQTGMadQgRGBr6WpWfqhERym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d39jn47NKb8p22sYiyy4vTf3xm3dXRiJcASjo4zwXKw2674dJ7LLA4SQDwoz1suhuFZfqxSWPcofVcwnhsFQ1eN",
  "key1": "3DGgqZha3Mt1WZQ5XJfqjzyx4sjBc43v81JxggnBxziBnxWLcPGcegvN4Saaeg2nzUHPRuoNQbfiDpAbgh5mUK6K",
  "key2": "4HPc3NeFiLK45tDPV2A5c916h4uiFegioHvTJTwmgSFKHe1r51Y9Ve7N32NNcaSLdF3Jt5qLr9dmGQRa6RFXeBi5",
  "key3": "5kS4xAZJNMy765Jx4KWa8Bjfs2qwK3GspVGhjSW4mtnGKcX8brK3bUsLX8NgkUtdqxHRiqauF5WLWmL9VpXCg8A5",
  "key4": "2YsiwQZvabU84GX84mUibShVcD2R84Yaq2JyXqhQXpWwdNPXG2zkdAeqLmjdUotrpiSv8Jb37gY4LNfqeZVYhhEo",
  "key5": "3desdfAcCf5TrdNFFrVG1C8npESHQNTBLh9rCS7udiutwskdomoqZsHD3h6jjYhGyhKKJgbcM3UfyHePRjTjyUit",
  "key6": "oT8jcy8uGbaPZCN8wqvPj6nCwNaCCK1qJBMFu3Ui7T6zFctYpWo5BKpuNfu47hh6sHqNCxzrnwmN5DqvW12xn7Y",
  "key7": "55CdRw5T11woBKuxUv6AiMxv2Xxkp9jJmvvcwJDTQMqB3DmpXoTvY1CayauDVrDDjr5KJKvA77Yw6nHricMRntDG",
  "key8": "5aRAXitzALBks5SLNCqu9yxT9PL92XAEfZJM32PRntfUBj57wCw1wqWGXBroCwm5KdWrK9AqwEhtpFUCroqKdEfC",
  "key9": "2U5Kj7k51Y7dj4xh2wHd48eGJSi7LwSW7dM3zX6eWxmoLUCLarZeiU6JSKqDkfNbmMVWWJj7a8eBXVXT1Jthkq7y",
  "key10": "4R68Ypo7FuFxrewD16LZCsNp2cb9CwiRHZ9cowFobXc7Exp29D9b6oVBLUV81ov6YbbuTyiMDvLxTQtBAggyFDEV",
  "key11": "39n9Rp39tf4zDAS73jyHNsjDi1EqnpmsoGP5PqgP8sHEoL3UBNUc6JVy3UdcpfygSRxF7AB3LyXmEagFN81fGFcB",
  "key12": "4FgJmXaZKbaU2rNC6kugWna1c8krbmk6ees3A3NTsGB45McbZApYZLUgGdfq5dTR9XQxH8JGvNGCLZsckkjxde99",
  "key13": "2pBw2ufpxptS71kSUyyhpQg9giFbw2BvzComDQozzkB2FC2VTkPXKAZThuLrwwLV8Bu2u3puwHRPFQXotovLVuuJ",
  "key14": "4idHBKC8oRRPM8n3PL4zcghS7UwX1RdaQsvj4AdhzUcnmmRPNRzBLvGdnSievdRHAt893vPWW1wmnocmJozbAoZP",
  "key15": "3zKviVwMcCDVKAbrn72aEjHAmiqs8QMh5pJcsFccXqmYw8rT6hmPKanxX3hswAE4Mggx5kWo4cfaYSsFX39NZzbX",
  "key16": "4JNVvgSjp7yKpPzYsbmqmRwzX9AuPCRu615qsoygAw1Gfm6ziwZiSAFwqMMCm7apCKreSMGxqVfY6EkH16pbKUYo",
  "key17": "53qVzcfkN2XMNkpKHBxuXRn8xjTSA11QVRU7SysKLuzSGmnuwLtufKijovwaufc4b8YH7CxYvdcrQa6QbdChfKvF",
  "key18": "7jMQsFNGGPANvQv94B6hdWvQWUoexNCJyyFvws9Emk8QmfeSCVwsLr5hXRsxSYtQ625s78XBpudyATJSkEcXqAm",
  "key19": "2FPoVNZbNviByUc7VoHGY3pxnHaabFGtv1umg11gbRJCw8HohRQfCKjx1oa3eN6sabzZXA9vfSQgAVtpbUA4sBMC",
  "key20": "22dpfUFW5dWsVjBK2eRJQSQuxc47teSt3QHn8DpNjzwc5GRQjTMJ19ZXq4L5KBDsbszVmn2gv17X5tYo1Kr4vJkY",
  "key21": "wYW7NCZjFK2T95WhSYp7jdQD8CwrayVEcBwQTSLt1XkVhD8ULGit5jUoAwYiq2zGG9movdH8XwdYm4DJJXuNKWN",
  "key22": "64f8Y5atZiNdvGty3gpKdnwwATj7BKY4hggkdgAZALd5yANTi4UCk1Rx2o2npyoGg6pFB7wxsKJRxtP5djxB8Udw",
  "key23": "2fnSHtWGRwLzSbLuJAiecMDKCZZHz1Fo2WS4xHUwc3i6rhBqiPiwLPkYmHZNcXtmPBoh4ffTbY4UG4WFUyPsiM1g",
  "key24": "2mFsqszZDZH3Vn7ZijokihAXTFs17SrqjBy5vgXrcJ2vfhWYHpogEci7KEjVYVvLXnYJxG7zWW3kCf9rtRSjv7Ze",
  "key25": "F4AMhxUDKxsQcr5H2fSLeg3tbsaJtum9dkX54Qe17uGihsGNuep8HRxQdNNPvko6HVDf8xCe68atDAZ21FXdXVv",
  "key26": "2GuRzwZKYTTD6YANoYECkdFAxiRB9EBd1BY48VuPpzrpxRXjdmfbY8D2x6TjDaUopNWkE2n76fj9rsNaNw3nqM7",
  "key27": "4XBn5fXQq1dTc96R5VVww2V7Nxtk31TURiKbFcUGRRfgETtn7QE6BJc8zs3R52TbUcnrtMvK6fB84FfWYvo4VQFG"
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
