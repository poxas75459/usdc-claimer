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
    "3UA54jxXDHMg4c1AoEa7ucFXKKPFoP9DLKGay8aYZ37HxDLjdYLbW6puHYjX3uCUq9Se7bgHZxztKpETiaEXmCns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auRWfCJKi48rTSfrs17Y2S2dQWEbi6FCVZr2HB6vMoK72fd3mceTyphdYwmLzmiprJtNuoFRdDVQrcEaxiRSKUY",
  "key1": "42cRhYqiqTefrNHh8sVwccpRkwvAAhoyuvseq1dQjUShiMcQiLM1KKW32b4tAmZRvVLRYYfkcGGsBKhvm911VjAs",
  "key2": "3nDii18S2ebHVfMdNX6sxyGKPZY5fH7sS93fg5abo3xWA2A3nBNAEtXZMDLK37nNsmVuP7d752bz2PLABPgKKsJm",
  "key3": "4gwGgdQprLamU28CiijTRduW9awY48Hs65Fevt1GPpuqfcmDW4L5VGgK1gdWQgZMPEYbm5TiR3zZTyeKijazMpVN",
  "key4": "4UYMxWqY7N3RzKqaYjxgPDwY3bZZkkFibYvPM5L5b4BBXh6JwqcLgwAbfzE7DhgU8HynpgZ39cdNxvQ4Qm6VxL9K",
  "key5": "4TfB3cvgWM7Ms9efaxBHjcRewwzovnoqYNWYUeXaVQd7Cmz2gzG54YBd11QFpN3xrWxCZYCSu4anKSQ7yRG8nviP",
  "key6": "5NGZcxQAgd8RHLjok3Nmxz6QTYTWYyJqnD6uVXj2hrM84o5C49RqLKGghom1UaMw5qLHwXDKqX88W16s5Jkfu6nV",
  "key7": "4JxjyknDFUCWUpPWkhK74zfZTNVcvDhFDgdyHgRwsroEJucqxVUNPmkmQUB67aWEwYfVdXzXmJXzhwEW21MgUHrg",
  "key8": "4JtUuFA2SpTAKfhhVzLct6tSgQPcpWC7qafyw3jBkB7KoMaZkq2F8Son8vdZMwfGiQXednWYAJQRbMDjdgn4BEY6",
  "key9": "539vMWa7ztGHhG4wR3wasfGmn3kL4pBtbL5D8VeYQSEGdSjKS6UAxKfLGJX3fJRijCm4yDkDECeJMkrF5nHhiwDp",
  "key10": "awYKDjoM9gFW4aF27RjoqVvRQyRC32uFXgxJEn1yxuM8BjMMuLNTuDZCm5BAXHBJpurYBSb6HKnzZ9f5rnWmqZm",
  "key11": "2qBkWXs9R3Z9vi4DTS2pCwcibWohwzFcVAoEGmXyAPdjoc16e7FpUGFJ5bJ77eAsv2FT2owYUFWLXZiKx23exkQH",
  "key12": "5WK4ib2rdLSJ3XzXwaUj4QhR17wvazRLx6QED6m7kYn8Bwn18twCAA6YLU2ZW7njevmpFfEFHkL8Mz4ZhZsLAC2c",
  "key13": "3TsHx92WkbhfFYb5SVULH9nEMV3u1TrBryoqCukcQfGExMcsFThzqLRsXUPKZG8sFAeZp8BQju9UKwKgDXKCxzqG",
  "key14": "4yxJNUtVHtKxDXkEAChQpdSaHM6qYRAMieoVG7nM3s7rFod6L4KaRv392nyCNH6h2xi657aDwYtaig7iQikGwLgA",
  "key15": "4w5aXApDFEGvHJwthsS3oQM7cg4joNzCePNZTEy7nAA94b4r6WdDHH2ke8jpHUxw2PGbWgv7Hdz3W6umdBtn6xsU",
  "key16": "2ytd2BjrEbGaGtY8ukwKrH5WjYmdNRdNJkKuWV7ECYqtKmQMeAj9db2fRKZ4vgS5Fs864Fe956sxf9DNMAm7BNMi",
  "key17": "2ypFx6tKqrLR5UEfeGizTzcDfs1c4HqJp8aZENJjvfbZQQzNXj8UZQScCaDst3p22B2CrUAZDGZBB8GoPGzVXyhb",
  "key18": "Vh8DKX8E4WUzGEeNTifghPgbXr4nsv4VBWnPVyhyWa5G9huMwZtXmBobTuovUWkcCgzD6bkn5M2VTqXYFtYUQ3g",
  "key19": "31bbPuhtMqcCBj189yhBsjmyG5gVXsGo4s2ouYyVk5EMPNE1dqSgYYSGpKvbqH8xqXeUnEfKE2HkkDqc3RCyUkQH",
  "key20": "5Arkju1mKug5wQdJDTPKRHKQbZ6vBVkmHv6MRiiuLGqfdTSshSZ9KqDSJrc9wXjD8MPpKwATnr7AC8hxftj7KHqK",
  "key21": "rXrMGCJkMRDpyBN54HfB91LSZafwFuzeKepJj3Yqhz7GTTiykZYUjkXfnRskMQkD9BSu97J51mnzBpokCdbQSmS",
  "key22": "v36gRxgvuTD8hm6TqwzRdi2hjuc78QfhZa7EvurvwTcfgHHPxeA8ESg7Jet2cnHwm58eR5RaWWcpZdgztQMrDF7",
  "key23": "3wnX4EubFMctL3anZMCyNMVwkDBVjqqt2545K1XaE3whQ3WHBZX147U98PV8G3nUa1Seqzq1D2tKJXmQwx1q7wA4",
  "key24": "2AgyJX2NiosBGmhk969NibAq5GmPEaLpggoQ1cKeM12i4ouRwd8TXtqfYm6wnEyMiDz2jKK2X9nxTdXQgUTZVZrd",
  "key25": "4bEJcchYKaRNzheaV4gKBg5CfvRFw3M9aJY7q2Q6Z1xAyGcw16TSsd8nKhF7BYovVRqvVvAsxnQ23mNEgnQCirwG"
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
