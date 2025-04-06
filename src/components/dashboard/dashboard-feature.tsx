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
    "4tZJZ3TUxLtn9Ma644L7mfsoV1HvXHSGrD5mbr6eo8pYeYH7f7DrUXQpeFdbykNwxrTCRjLA4pxEwAvoE59ifhBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LLuDAEZP62WSsFubPKgqJkuLPHThA4RpjU9RrkhAWpwpLRqhdF7Z3xTKHThu9pzMWHK4UfkvjTaJrV3Q4Lhvd5B",
  "key1": "428mTqv2PA3rvWx5yX2y9aUCqDkvwdBJt9QUxHZj6xxHfRgJ5kmSJtiU4Jbg93QWFmWXsyHai32KakUNkbjirUwH",
  "key2": "4gQtPJENPAaMDxuUmjJwUJDSRU1m8TYD7VCrjyqN5fhUSm6mhH4SbWoPmZNLcxUnGoM3T2CCntWwJY7shbZwyPYu",
  "key3": "2pKizhAHYReMu2fVbTHcySQMV9pYfz4bwyuRD58aaqZyVLDEqcwEf5yAHVJCwQazW2PSWKp1pwEHgmMX6Q1YTkqE",
  "key4": "53F7nDdKXHQDhdZSSR4EWhfDyukWTkKJXRMFNHBr198bCZxCkMcS7wAngVkZXN2tnmZpRDY3rqBaonfodPyF1YmL",
  "key5": "QWkC65bLUzkVRkW1uFW9ARkwaapiEP5HcJ56rESKQvjBxssWLQLQix4893vPhSkzZikrfzuQ7KC2Y8X4AqqyNYZ",
  "key6": "5E4MDGrdqjzRxGmEbfjPxB2gNsJkTqHVrvWVCUrFudyjoxjvpnJAo8Z3tmhx41vMX8FFoPjMEqeprJKkmCANexRw",
  "key7": "4imWersBqjoaNG6aeRRCtTNa2huRws2soFCHZSDPbRtDccbWqkRw2NYEJAFzjcGrTTvS8rrFNxUcUbfc7Ts3Rny8",
  "key8": "5rZc2fGbj6s1bK34XBXG4GwwektawuUM7UbtEZZMDiuBBRrebQEkY1vcUoXyj2TTdDBEvTNMFDpGJxZT4LZHvUED",
  "key9": "39GC9PF98H1TgGz4Mwi2wkZ7wpeo4QCbCMQZfqFjkj8koX3edhrxkEZ7cWhn7Md9g8jTvHnEeD4SKvDasSkzy5CA",
  "key10": "UcRQjPdXroxPgxgM6CFdQ6JqziNQyuCMiSVnsbma4hZHYsbn9NmYtqGToJNmavTfbYkxxd3Mp8wRhZDTZ7dxYrt",
  "key11": "4jyLpxo6QvAjVTeG94ZEXBFtEcq51WvUw1LCS1xZkbsqLmKfmmeRj5mVkepTpdG92pKq5LvwJCMY8hHWLcVSNqTE",
  "key12": "4sxD5tiobWqBQVMzHUzAKLWVTvwN32REzZnGRDqy4NW7zWhAGD6Pt9a9yBRw7rDfFnzKYcZJ2HpegrzfVMHorscS",
  "key13": "5zPuwkeNbABDzFVumANwVEsAywQ4xo7ZMoGudC8AqUtZLZuycLiHj6vryEFQ7cKYrDqhTs2bYGtHeHJ7Kh9bAB7w",
  "key14": "3ZZA6AaekFJi9XiSouRM5fFTdcuztVBKm2gZxKnvVZydbSF4Fa2aiCiFxXHbtkkpD12DjKMh4NT3feWqEofESvBw",
  "key15": "5D5b8iwP7c1PweKNtS2kG2ydEW8exS73ZXJvQELx7qrbHfjQYALFD12mxf8op6Kj7LV7kV3zfhKmKYAqkuXfLYXo",
  "key16": "3tkV98Nd9PjiM5Cpu3xakT12PVeDFMC1ynDzWBMCPoW16nJzrjbV1UJ7DGV7EHaH2Gm1urGPU78aBdgFXTNFrqU9",
  "key17": "T2NPn3co7cePNZ25up7Ms69JcuTZ47caR81cqCXRQuBZJFWLHt7GrhkKW4d28RDtd69QFbu1VjmXoyjXf9u63jd",
  "key18": "4xyzSuEZd59DqSzPPqTtPMvz9td67WGv6fbZPP2JGA4TXzCNL4vEbwNG8RetGdXWmEthNbPWyY98mGKNW1ctAPYm",
  "key19": "2Rdo3qbED5WbXa4HUtJcM3ShQ2VNFaujWAd7eWTY51X9jujW5u9RbWmsqokaZFvYn1b3krMPcaDnAGuG7pfFEhx6",
  "key20": "4w9QW8u8qFyeDPPhXzWrv9mdr5J48rWQhzDZTbQpL8ADvNkaJfwVQqhoLkJwVNJADTzAmdymQirCVLpGagxwvCmM",
  "key21": "5ST6HFhfH8uFKZTNsReHeWKC1hfHCHTfLoCKT7iHvzS7NLQgKN6RoUkepVM3ZjdXFGQ2WfsophGyTdMD3j4FF5EJ",
  "key22": "3bD1UYRU4JFn92nMyhbQYBHgk84Rki1ZwAvSFmNm17M5za2wSR72Hyyogxm7qK5gMeWKa8Gz4eyY2CUeAnfsgk7p",
  "key23": "5ryDriqwTKrQcpD756h3QDi38HUdxEJF22AhajDFZhPPGURSqksdC1qJPqKnYWXsgt3qs2B2E8u3fVK1zsrbXCJZ",
  "key24": "3euK3XBw5gWPtgcwFih5vsu1QNVPimE4H5FXr5D4rGfb9AzaGqx6zTWFfRnLHMsiAhPGQVc4VfiUheJvJuuTxgMz",
  "key25": "5ZTtjmRYLdQj5p9Py31k3tNPujGUoES5XTjy6rCuQ6HZZB4Jt454nTVSWDvujy3gS5UJ6t1Wkfz9Wym8c8pwngKG",
  "key26": "422jCmGJiLQN9VVm4y8LKbZvjE4znTUM4H4SpKkHScTKAhJkEwx1jGB4zA2jNyCkbpCuTV3MWJHbpA5u8GZcqC2P",
  "key27": "4fuPhz2BLaTAvhupXTwUSXMnzkaEjxQmrHWfZ9uyu3CjjJyymF2iwB1P3gwE5buSuwNh5fbWTnmWvQ34bh6AbCBU",
  "key28": "4aGsXf6Qqe4JmYKsbZuJVvxcVgQx7MrH2iQwe4rZ7SGVQYfJiozqG3VUafiadf97MVWPVosXQtWDvop9xNvUPruZ",
  "key29": "5ymX7dLv6gdwXkGP29se3vbsUDygyzBtijMUG4EpjDe9E7WWb38cMXwLMasUX69ErDCt4qGLAk1PEMoKzJ8vSCvW",
  "key30": "6HpWrjGFfQJZErJHgSYUi7ufFjNYDgozfnPvewUt1cPQLBJ4DYvNwLn4nV7XBdqDuuLAXWYG1k5MU4bQt26rpQe",
  "key31": "5fbqSVdaNDYDk3abtbYiLdwyZk4rtymAM4up1SeVUaT59QXjS4dgWxxJT7TFYavEApvk9DeCEMwp37dJV66VftrY",
  "key32": "5yZmyUUEHqzKp9M9e6bbmNChbHPQJQC4UbrveGnPyRhB6ZbKrCuAzxbNSysQzPrjD4AWPfSpGjYP1AKxA3h4cgxb",
  "key33": "5QMu8HrhsamivxeahQNUJc8CJ19Kkbt4mK9fXsgZgWQvLQgRAhywjBQRyjkrkegyRg6sakj6Hsfn7Tzkvybev7xb",
  "key34": "5GDM3tAXx625gusgVtESCbTrNdysAgrR4AdeFcuBELgmrdNzPNBDb9ZbmdUw8vy1L3V8JwGcCct5BFRbzsFyUw4C",
  "key35": "3AhHRzCKYPuknSRNmGMN695VUZVPS39XajYQyB7GN8vWaAx6y3J9gijFtkFVtb7oCykCmSocMJebXMgqcEQL7jnG",
  "key36": "ZSnAUxX7ZKA2qVtrNMGDFXtok7bgwvRKAcGgWrXpSjNhiVoszSm9d6G9CJq3JNpNxUNzXniQXAE4k4QZpFhgX3Y",
  "key37": "4H2ZkgtjLqYjoiAgSKTeywBQ6Pux9uvMTBhXkbPHBajUqZRoiDFL1pKZnuGgJngaq3p2u9J2tPVBGksshNbw4xJa",
  "key38": "mZ6Fk54y5EZB6VCob3iDtFw9PRauUohZ3PTLCrbrQtxJuuxMsGf6GoQVUETwN3wk4WoXCJTVufmVY93Mhc4GeU8",
  "key39": "23VX8RoBxDYyhCeB2pHTDeZUV49QFuGKFkECNzv1btyyYdLD1KDhkAx2rzMSmCgfZ3Q3VBg2cALXh2CoVeeBoi6x"
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
