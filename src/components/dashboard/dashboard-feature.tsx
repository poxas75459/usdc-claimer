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
    "5swA34bXfxDbx9q3V91zQAkYnrZyNhZPzLVF4TfRJt42FAUg4yTTvcNZw5EaaNYhDgH3Ub6shkxeEMAn9aVY8nGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCGAvzkQygCBL9ZAXWsoKvat4yD3FkRSgxge3QgT9t8KBs76bHtbjPg9ZTfpwp3x6WfGkYstXsoXBCwUWtPauy",
  "key1": "Z8WJLJ1NNcDGyMvqd343hWMZHfbLZLdTNb6bSs68ezFvaJ4Ljf4ARrVKRonFyaxGWGttpH36mHkUqM5RRRHW8Ae",
  "key2": "5941gScHcViYUoqbM4dKskfmKQyWN1x8nHkKE9rGtmKsFZ1E9SsGQx21a7KcwV8WsaDz1CvBRsJig35qqqt3F7Lv",
  "key3": "4NNA5HVZzqCgpNp7xz8GqqnNYvmwvFRFmzw91X1PqTDZX26DsxtJbMdsVQ7yk2tCCqhgCVLVCLa4QpGYb4LCkKYV",
  "key4": "2zrWsNgh5oHw8MgvGYfTu5bsv6VCeGbmrLS4vAFbZ5hE6cEbokfCS8iV5CawBPJCRP5NmJa9mj8A51USA63RBwHM",
  "key5": "2rqGeEgeoVGQ8QQg4sfosk5zU5d4NtLUQe27hKF94PdifoHQohBr7bWFmbAWFLh8j8DfwLa4xGgczKqDKb8gQFNk",
  "key6": "3itMzPqbXucmEKvoJqR3dYb6ZjLEHvADLYFs8wbRqbAALAL6Eb9khNXGrBDupJj9kBSCEESZ6D64hPd2ZTdpodmW",
  "key7": "2yiXF54QhLx4DTXzgGXPWCg8xzfWSfYnq2dFhu9A5EqnGkfGynNyJ4nmF5gtxu93fKEAXHGvo1uuXirvyvaV53jc",
  "key8": "4GfDV8YcaoZJ3YqPZXBNcv7TK8BwTevyWtRAnCctJcMTU6Wm2BQJiMD4foGz99schVrCjj7d26TJr5jh9SmacKMG",
  "key9": "2QF9yQfzc4qEE4tHL6w59mm61hUAhYEtU81SWnSyD3hVJpnNiDjSC8WZzRM2FUwcuvFLczj3ZMLjx5NB2pVRgGz1",
  "key10": "4P3rqCWxuQosYbFS3PiEYNWoDjoLogbxt8sbfxcFj4vXkT5gt3Rmk81YVkbP5rJCQbpkvN7gKnKiMNJTSwAzuDJW",
  "key11": "X6ddzt4ZmaQHDJuo553Z2WY6MDmT1MyzhfzokqNZ7z73SW8JLhELY4uRv4YCF7PQTcnkbWF7n6hQCdJmBsb9ydf",
  "key12": "54RWXbXt66NvVXx5QLfuTop65UnwpXZa2pHqKRiNjq8igiVwRtaxaaYYnZNGGqteJiWN1AUxtpkCZNGhAMuc8cKb",
  "key13": "2unh2Njj3SWg6ASPhnneNAW14g7pcwJn1LCwszKwHK7DkqVyqpDrYNkuz9JCDD3NjWXRYjANHWgdRNrRPqNqnRsD",
  "key14": "2hhe3i12TnDfFtMUUAtdXUxnQ3uMaz6pqmVD6Lx8rd6zY7oGjXDHQDHvrQnRQsAU9B6i3iDbVuHQsN84njhpnDsX",
  "key15": "2fy1cfDk63M1jFRwj9omcFgi12p6KXkQJua24iNqRaay1NJjYQrSwGy4Z1pLxDPNbS4B5Q6DcsGNh4imxZoKtmTf",
  "key16": "vdNwZdAqKF8gzGboeCk7utLXtXcLvTde27HKTa3cpVY18Ai1C7XL64eUYUtqdB1KdkRDNPMuaBd4kJhWco3g47V",
  "key17": "278kh6LKBNjMZPLjUDSsWjGWre6kY2BfMm2QWxRmo4c191UMXgApzgQPDuQoQ4BimRpXZnbnxESugPfyzkBtdfRf",
  "key18": "4QjJJCB8tSz57iv1nySJQpGwaaZtBAHkXPYeRbzp2JhY1Cp3jYGNxaqJYkBz9YBTfj3x9wkHC9Ez2eQ3qRdmAWCB",
  "key19": "5nFz4DjM6pb3g4AWXhUU44teEW6pxy5k9n7VrwaUKHvNFi7xyUNuwdieed5NGwC1u9bKzqSEKR2iWW6xpMGuvyqp",
  "key20": "572ikCmPZRBZUsjPifFHQ4uKtvFiN5FdAys4c16Fy2cco1UntWDVQhLpyyrCqHZ7f5eFZszVyE5b3Y4HV26rrtjM",
  "key21": "3CdLovQZCsgDQ8hwdBui4jXepNn53HTSiy8G4gYBMww36Gm3YkVKHmNs1B2R3LutUxqzg9vt9pNCtHEKhkhSqYE7",
  "key22": "4ebfXwrFF1gHoQchQD84qnmk1xx4FMgkx4B6GUv3t9xVGWJTf7dPNwbjUv3MHY1rNgQ9FKHAnUmmqGwRdR5EBv9R",
  "key23": "3VdiRkxEMsdn3b4Ptqq2u8KegdxTnQCR4hAaqvyLj4zMQ3MUF2NQcgHEQAqYsHw8EdjxRxLrjiwRpVnjxnFZYF7d",
  "key24": "5GKDs4utTZASMEfRzLSTogJwCyHv3mLjKiUhbxFP583JJD1mVbTeCk2JWGEURn9dL1N4rLU9hwRzP2Lfhrtx2pbE",
  "key25": "5o28etTDhCTVh4kDehD2R1gv51gAchoj8MWg8E2foJ8HoBc1wkHrzb8bdtZDbDQu42VoS3JiviSSmSwpo7fWUa8A",
  "key26": "V2mkh4SAbcAaYtaE1yyN4H9xucrz3fMNqN4XvkE428wNciahNJofcYLs9xS7cqetg7qCPN3rKssATDnP2BzFkvh",
  "key27": "5Sf2r7miDPppSzqh3jWVDuEuBENi5FpXFxAv6tNf43aHnG4A3jxn9JG8MrzfbVWKLt5W8FJgHjhkScs3Yc3EX7ys",
  "key28": "3EZ3oeu1K4Jsp7NqCJzZm9cYFyVgsoh5SMJNErTSTh6QNWMq4RMDTwUDPxhEmRyR2hSPYSk6qKDnbxEvkwXyb6Tj",
  "key29": "4ajogKjArY2PLkt1QX5MVWQjuJHD8XZgUJHgaqUd2yAFBVgFHuwRDdBrU18b1WdpENJmYsAqs1dVgwjpputvTvX",
  "key30": "5fe3URLMPx9qe25YJEx172KVC3zyHs1pzYbcYSJ6UDymv7bX9G7BaFFU9PG9ty1x1ZEvTpygwjAy1mXttD3tKCto",
  "key31": "2H9cjYSPq4SSteU6TpMnVneRyM7F2gcHRsEAcA7ovFhN1X84VixVbkXKVyCJWYE6ftgkLMxfbkoS8PECu2RKk3fr",
  "key32": "pUeX5x7M7cpssWxJuNS2dEzTRzzmi9ymnGa4rJLdz4is4o1krZkBLXihJx64bskzU698UWm1By2923dBe8aEXtT",
  "key33": "4gEL5sdpL7XyNNZdJoFAvMR2VXzfZoHmK7oD8UQE2sUf3iqtEZ5V9kufvvwwnaw3UMyUUCPrP5jdvnkppso3DnAA",
  "key34": "51eYDq6muy7VpcTWb4AEr3S5HdGXZpei64RuqvTiu7uKrQR4cDbGzzCmBWZ7wfRhJFDkRc4knShwi8tP3ree9cpR",
  "key35": "3JPFVrX76iG42vHuSwKhb8zb1r3njcQzinFRE8kDeWyKugA4DDVwMGigzER5vRN15tHLeRUw16u6yvpqGyaRyRRS",
  "key36": "4bzgS6PSEc4KdyxLap9CBNcyrZwdgmsaZzyUyxGpae3Z1LEAaHxbCgwFd5VJgZTafdYzVWEN18V1gF1sLtgeTpsR",
  "key37": "5tiwKAtmdu63KaBQ1feD5Hu7TqogR4UVL2X9m6FfFuWp4SJNy91HgiXWURt12UiKESYPLr8Q3fa9aj2eCvVBTwYE",
  "key38": "3yC3aJE5xMoF3bHDkch2UVBZefT4cQc5uA8CbXcJTEtv1bhPCJy5rvk4oRw7GNvqHV9mMhXdsTLi98AZrQiPpnmZ",
  "key39": "hLShEpioGkoRDkBsy9e7yTh3MVbNMVvSTaUGYpEgMdo3fYJgbhBfc5ukku25iwe1cGSm1XYowb2Pu7xRfN8beiB",
  "key40": "2w3v6TBGuYPEyBa9AtvRq4YTxEKjxthBtUnnJ1b84NuH8MxL9w5rqaiPDErNQkyMnZs4u47XVdVtNJirMMvCYRhs",
  "key41": "5vEGWUh4vw69pV2mokcmLUfFqP6g1mY4RyrN7vpeXeXGHaiG96p3gZzwm9DqUeJkGQ1G6Dm1R3ByvpJM8iVb5PoF",
  "key42": "5m8AzJHzgUy3j4dF2Fu8jcQH9UUADp4d2v6jzCRJDSRn5MEZ2fwUYNvN6p27BChUCfydHM9wzZ4GBoThxpugXqd5",
  "key43": "4u9Zr539reTPVXSYtcERJpXU3PM7GhtBew1GvqY1CXCQHUPesHfc7Zzv8UMmMVFDxJ7sNDHewpk1uv6APDamE5oa",
  "key44": "Mei2xUZkFqMJTrxnUVchXzqAqLsEZr3uJ1XrGiFb1bprHWM48bPBU86YVk8ghUkPkfP3oGFh3FuuiUCfKRBGw1J",
  "key45": "67egr23sVb6pf3PWNx4NwweRrtYVQdy943sWjbJDx8nz7k9iWzjvgSdjmSCQ5fr5JssJ3krnkkzMMEYJxGC4y4Uq",
  "key46": "3oNqYtpev9rZWQeNbwQn9RUeHfhEGF7oMGha79tTqTnz5pbajqxmDEe8vkRULKSC4pNvp89XtFqg9nJE448CsJS7",
  "key47": "3dAgtGaSYTUxcUArEYsVd6ip3fdSbTAMkyjSMTgADvJNK9rhn9hJoY6MvjZAHg57P9SRQa94ykuJizikYwxu4DvB"
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
