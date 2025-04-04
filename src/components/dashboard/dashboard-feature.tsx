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
    "X5RUbARrRB2ij6hgMeuZtUQokyxjHKyKQiAN1AwAAZvrhLiLXWjUbGYCkRDqASVGWRN86BW4uEfwzxS6C14MxDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z15EWJGPE2Ub4GYwHV5vMqEakcBXBCvvfBAZ4aEjZNgJuKQk858s7xdWgp41UjSPwvWkHNCFA1eQtZFHv4Le11s",
  "key1": "sVbJ2ZTB5A3LpTePGtB4VJJnZkBiTnAsQe3UiAXYDbTYLgtTLGAhZ4pLzGRwxRGFCNGhUJb61YNDQ1nMY7XBM35",
  "key2": "MtzHa4qpShqqfm23Kh2eGWL25w17iyhoKiXDJ2Az6GivjuQazzLie6BAEs4RiiTkdfzVsQMbSsasLkFRXxLXdDs",
  "key3": "cTo8ohbaTwkwVtL89cBuovqPA5aWnExJoJgKVvgnMgDEo5swmP7e7LSSb9gRGXw7xcR2AHRPhJq6zBFhaqVzJMV",
  "key4": "wVhN3etPwpnKu7fb2n5RgQov25euzd4b2RFtpx1udxB2Y64319vwBDZDEysdqLnQxcKoUJU4NJGWH9AJJEJsSXB",
  "key5": "4GVMi2jPeWCbizkeWG5nMinK4wqJFmAhYdbtJ2M1Gx5xzMnEbcTd72ADr1kTA4TQLxo6ePAssDq34D4K18FbYcP6",
  "key6": "5qX6uzLnsQ8C7qSMdkjSvYBY7cHPBe8T7Feed4YoCgUqzVtGGJQyM8bPPDLnSGh6vT494Aq2nLWwEHZyJX4YDqA8",
  "key7": "3LYA3owXorgZRVrapuygJmQUctQfq2vtouX8DcwMTuAJNLQzLo8EgFhVcGv1Ydza29dQoAxXnQS6zyaFbMqFZUP4",
  "key8": "geQw3fehfg1CxsKAKRuXxG2ehNSkGD2n9A5r5J3i3DeSnGCTxX2FTEHmoDajA4EmmnjnpeqAnyPLWCXpy79jUTa",
  "key9": "3NFa2NTNYeT6UoToR6BpfkKvvLr71YdCmTcmhEdTbVXPmbZrWrJZueqQuobegoHze2jAwJZDZ9Edq81tzjcCycgE",
  "key10": "3bp8onCuWHLKiJfYfkA1bN8QTFKb7sdwtvPViuS3Ga9KJAj54Ucx1m9LTdK6f1movd95pkYvwUpcJKfQsuHjmXkB",
  "key11": "25TgohzmjHs9wcuj7LRtnXGJXo8kCeZgmp2CjpBcHXYwPx5grbSaQXjyvoHvN1eZXD6udef3xkmozsy3hS77KjV7",
  "key12": "5oA5JD1j8ce6WUnqGPq9GekC1DJT6XnHMMqhyE7bHNwcNSeamarXWykAvnF8rZq89UYWcJ2zbQu6qe9cPnuW7BhC",
  "key13": "5ba3KWj8oTdrx714ctvsYdnxRBSCNgNBvAffv8KosAfzoPT3sVLTKmKPq6auZDSXG6TKgu4wnxDWzUFjj75kevKt",
  "key14": "Q6C5yo63GRqscw4uhivmX6eQaLWcJpgpRuHRAwMoVcaZjJXPn8sjWDt1Wi3cMKGbm8DweDbYzC5GQPgRYE1d7rb",
  "key15": "4zpQGZ5iUBXm6KP9Q9s8S3pi7GkAcjjQJ8tUd8j3KpFGhNM7gr1zRNqLra1cvU6Qd65CzBMtY5zA17ozmWjohDo1",
  "key16": "MMNKKPQ4HdPcmPrw39FKbZNV3HRSrYVq4TteSwLu9Zg7uRpD1j24VyA5vr23fqvDev58KCnjg9PSPbty9LVkkgM",
  "key17": "kYF2YE2T7uj69SKaYbZy8cuATCHik9sBzyxm6xA3nXHU3Ew7ML98EHCfAHeqaz5J6JDBoAWHmmy9Uq4qE6URuZD",
  "key18": "AZXg368foKsGmnrMUdb3MBwknwQLaoArLajzoQx3634roWjVbKwYP7fHc6KxQCsopLMgg5MSeASJdo5XRE4SKag",
  "key19": "5F6WCmRsDDKPbPeWgrqyP8xLrrDa51fRVCwqQ3w2fzqKBMLk9YXNNZzuLgUMFcZo8Zv7NfJffynrHvSsKrnYU2uq",
  "key20": "2PZ6dyQrDfQezJX6XYRdCmgwDgm4YPEpLC8f8puYznpXVq79Y9Hiz1EaCcxfNKVFdQWm6Vb47A6jTpB9DNAqSK6E",
  "key21": "5Cc8NrAZ8fJjte32tCLs6sZACst6NyQPXgDWvwoxi99SStiV2H3guTSc9NxPrFBTzW7FtrUmFgYtwupaV4mqw8tF",
  "key22": "49zuafBxLRutno8kJgxiPHKuxp31CVYszJBdnVq28MxmRSXGUgeKno5PEyirLkdiYt46uRP8cYXtvRxqMYHgQdoN",
  "key23": "5asLATDb1CZCffjhPewjsx77doqy6ugw4uQKQjucBSBY9VR2Yv74CFQzx6Jhux8RYC1nJYzmk8CsnLGWRR6qiSTN",
  "key24": "3yAyuabQovhZbAAsjFuzAQgJQzGGwvEZ6KYjBfdm2TEdkWX5GMg9xDKRXsm7sAhA9CJxF5QdGiMXXHvWhBSzXfop",
  "key25": "35fCfMLWXM9CpkVqkQKg7R4zGRgD5vDxhkfJncT5rYBWPYDsTQr5ErfvSdKmeYboiwTtANycznFWDUGKQq3UzBdK",
  "key26": "2XbaGdmmTjymxyLtc2M7F7F9edmYmcvCwsLfWV3aqrVfrFfpyhjYaVJHSYZu1WTW894mB7Cvs9iGveJa3wyabW8G",
  "key27": "2TPadJEmo9LS2i1tNUCKecxDoVvbfcs4q3oAN3PeB3NsUQiuvTVAx3eFhAnmjPWMSLPQKtzMyn1fSzWn8eYHgRVu",
  "key28": "S2HhLJgb7e1KD6id7Mrqg8hjhUdyuWNJ3ZPEG5mttsL9621B1d45wpm7F2V5LW3Xa6Wwwwz72ETzgP145SDnyK7",
  "key29": "6162ax879FyAYqYfGcvg8B1qs96SccieiokgSDXuSXUX4C7AqsheocKcNty3QdqyYdtzUrgFJih2bpyUA1rsn1Qv",
  "key30": "AL3JSzKwr8sJMvbvyihfpbT2dVbXZRtXZ2d1ctFpmHaQ2qfVK8VF34nGLF4sAt87T8ue4zwhpWdiFQgQJF5dq5C",
  "key31": "61Zt9Dcir2adPj1LdR6eCEBqnsKo66vLBoRV5ypSeiowMLGGeJnASj8wk9uMa3psKJmjeEhFWwZFXE1nc98kfHdc",
  "key32": "38SYR8fNGWvCziosdZGEse6yveP4GvJeReawqE3Juv1jRqz4VFi7TVhkGx7Z7JEBnW5iA2iBTBA6Ye5CUFf5vDxE",
  "key33": "2a9dKSaYHj18ctDqhQod2XAj7WFyPkuN1Qc33mBictfM8Jy1VzALApAGaZNpjXB9JLhX5s8B2cUCYxxtGS3UmFJj",
  "key34": "5AXDEopREGrEmW3PUDBk9TyGWc7UVNL6ixxffG35QNh4cZ6dZ6AGyaYXKhVAoBZ7FFh7XjptF7RGFaMrnt97gNmM",
  "key35": "2YTNGmBvG9DQkdbgyM8zYmBT9HGVQ9u6Mwern7FB2xVcpAM8hnqpCbB2CjEdyegtmge7oCU6qqyLEBvBvPcftX9P",
  "key36": "395oaHZrzJBtnUzAewxd5UD5MqS8ubgZSKhW21DrjUhaMwUEmjPPqfuY61joTK7b2VK6XNmzpfa89n7CYiEnzpnP"
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
