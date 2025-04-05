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
    "5rYDuA8QNB7BdWPtq5NEDbLpuRZHzhLLQyjC136bgouQch2dhdhCewsnz7jCBWwwdYgwqHrQnzcXzRQM37kJ8yKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2hUkVRR9S5LRrPweTotCHcUYEoz2cupDG8TmUiRaBh7xktaNsPc7MpNS4TN7Y8n7MnSer53HLWUmsLUD343Pdg",
  "key1": "5tLqFLUZEyY8rBn8VGGLUJbEk8tPpNsVD3z873pwPjD59X9vykEY1d8ZrLNPFw7KJEMjqDMxrmrXRbiPPzoh1Fva",
  "key2": "4CMmvMuDtaBksZpsuejXRwBHAuvUKK441kaH11a2zF2VJoJ8EHhMkDqY1Dw2ZYyQdCytYoh7ufrefMvJoJcWnE4B",
  "key3": "PTU9Z75Zq8uGAY9P1G1sv6b5Yx1TgZJ7VQY4Sg3ZK8VYd3drwPLmYgpmuZ4NyxSgzhsgHz4S5Dg6g31ukCrSxS3",
  "key4": "5zbPTZB9xwCW8xFiKdM2FAsBRBxREkCuBeiqDSxGkFECrQe22PcBvoLozfmUEw83DxRK7ZN1WwiTEG3bqr2eR4d1",
  "key5": "5dZ6gt87gpuJYRkVDzFd1MmQFY4sPeTBtGwHXJ2CDjcrkiyBoRenPzDKMFaN4XvGTSayGsZsMuZCNFzkHPgmynPE",
  "key6": "296Wdb6kHe64HUiyYps975uKevZizbFedgP6ufiB3oec25eQsEBqZ8nc6KN2WJPdJSTr8BsFrYYEPgz5o5dxESyS",
  "key7": "5mUDAyKZwdQqw1cBkB5y1izwvXZ8uaRkcxL2rtRPyYJmGhuzPMYFAJLRExgLifupVKUbofVBJJerECYhEYdNaLSF",
  "key8": "5Y7ynHKNbcGdQAvK72SaLVdgt5o32315UPUMwRsrvkFskKWS8wQUkGwHFfvnsm3tPks2HkjDrkMU7who9m6tK4vK",
  "key9": "2YpdrhSvNcqhuAHJ3AT2Vjj1GfXudB5D4hZjXVLkhchxhQitikQ4HtdP3NpHGvmQAxECXNVs9fokUZ21qHEG7oAm",
  "key10": "2iW9pMhHSKQ2bQQBcqas2rX5TxFF5Q2Xn4CR4YrEcXegZ4Z9eRDgARLgBBSHiF91KKRTcqKCm1XoPQWGrmZSEoi4",
  "key11": "5TNNp8PzCtJ16KKgdXVVkrYLoM2xDe6KgYeDZWV8ooqKJX4yrke6YYbQZ3wyVoaNXxEVohyuRqrryNZSPhGe3JNY",
  "key12": "2VwMAUjzokSNq6bEEY964k1FdYTjkm1L7jv7Vo132nYTjoCw9nTHjR8rKjwgqkZPxv5pQQuYfZo5XShrmVWKuPFX",
  "key13": "5EnpJpbAePzq44sDQV4CzVynE78cRS4jbqRZmNnd6LCa1EE2nquEN3gZWT7yqMjT8Pp3TqxmdHdQPLkNmBwaTH13",
  "key14": "5Vb2qLbhQExX6qZoi5uFFaCN19UopDn6zWKJWaRrMizmM9ZGz1tzMDLxyQ1cKWhyFR2kFT6zsw3LZiK1QRSS59FC",
  "key15": "2cy6NQWxuX3cjBKN9SQXxCHWRSPYWRnhDeeoyUVCXkMHF6YB2siyRLhCuW2CWf9rL1GTS6QRLhLKJuzTpCd28KHz",
  "key16": "2aWLz4mMZi5TiXoXRPgjwH2xWPUZ3J1uMLmTEofcx1qZkNxsSJPLugd3CpzvBsCA9ynph2dV1f2ChndEJxhiZs2",
  "key17": "51z515FGaGs4jrkyjZakPB2cCeYXbHYvim1qHQgqc1Q3QbLKfBCAAy1BhepxxA79mqj5cskSNRSnGxGuWQNA82rZ",
  "key18": "5s4S4dDaJYcQqZrkwM21yPXmf6BCAvxQiEfevTvjEAZnZ5QytkM1JXBv7XbBQSKP4J8457TeQ4UiqLGS63LLtFtG",
  "key19": "svw2jgaPWJFFnPkr5ZTgPgxZVFUs6ZwvXxo3Ap6BUhtv2oFvXZ8HmW8qSW8SaWYwo7vwwsK9Buirkj247F8seNC",
  "key20": "2y3dti8dUg4StRWvuYeipdHehv4yK8x79HAWBhYuYiX7kiqH5TspWVdQigpXdb8W3iDHa3YiZFe9ZSM8J5bVswDa",
  "key21": "4UAoGKcbaKjFZft5kTtSkgYVJaW68CRSrDjKZ9B3v3SY7EizuV5y4q7xmpDfg7LfY6FcTbcicfZ8TAEqXP2g6LzR",
  "key22": "4mYMt9zD4aZ72od13Rvr2Qx1itP1PZaLbVxQJFZJqY4SbWxFG65KKn5BGwLNpJgqVqUo6cJAjDerTcBfRGR9HPxX",
  "key23": "4sRALhqDhDrb3pFfeuwmAjY1udhYHD7i7nPwag5HpPHFBc2pAki9vupsHzN5UwLCCYAXVB5a4ns53BsDgm8GWfEk",
  "key24": "u8mvopQC7fxa93JPq1h5fdaWrD8S8wx5bW7k6Z3o71Zc9qztNJ8Uk5ucpC4vdzBbcRWQGAWKwq9FvB1rDUj1SHV",
  "key25": "2QKJEBgokghJsYqG9ZRe5V6NMyBmooPtGcP8KWAeEPNPUzGqHEHssasCuCwYfUdbhiaY1cNSvyWHSNWRf29Lnfie",
  "key26": "fQPoZ7L7XqX5HdgUMWS4vdV8N9HAhLUFKYzSdifGxm1YXXZaMF4xADEYtYKAe5mwF4NLb38qLCqzomrdjwdPT5w",
  "key27": "5Q2JMTDtW6UnQ4YdnyRb89jrZ9np6BjcBNRxoZbaWdkiF7kJ3zMLwWPBg3KEWK2nsLdSnRzRLdAXBCsAQFF1nwiw",
  "key28": "27MQK4xnhJ4aKQUXNtoQ2DKQoRJvJfDgY4Dp5NQfiiE4B7VbfhcCijqG8SPo78pGsuBQTU9Jf7wridupXaWJjtP5",
  "key29": "2Yr9irWfxdVPkwjy8wL7MtcKEd3gnQLXHfiYrLY2zncKouC7Ees3haXAduBsENVhZuYTr2NRX6rBiRditqBDwr6A",
  "key30": "d26SbndTx8MeViqMR9LdYxa2ekyrR4f8xjaMppZsy3owtofRP377YFtqLE4oRpdrZzD7Gu8U9R9EqQKq752mukd",
  "key31": "ueHqT3NNu8rCVs2HVVYqd2VwYzojTAVtebBxtCcSP5kHrHUpPhueeratg1ktfkhdVpRAexcAycRjRjxAh4q1UVM",
  "key32": "2utYcmmWFHJWCQJeH4BZFsL9CVzL3Ak5GjTZggtujDGTfoCHeXb6XVaHxrfinTEKDtdS8wKAFYcYPDyTXASPqrmx",
  "key33": "4AiUBXjuuW8WmEBQDnm2DdZW1m4veQAhfoPDDQrCFe3NsQGN9oSF4cFRnNhKwwjd7RAXpgRczSrY3RJKQrXbcmY5",
  "key34": "49bA5AX8dnJaf2zuFA3ByRK4Z1p3ndJLtJxnjFnGKSNE9A2MyDdt1P3CV2GZKrBzMN86PU4cqL8HB39MSWcNTKZG",
  "key35": "3AxxzC1SYmjPVok12SPjSBX12mZ3BsUoohAVL2Shdgj2kMMAhsizU5WcUjp7rNG5ZTSR48TTY1Cyc4m9eeoSvhCf",
  "key36": "2kbKrVRfKnh8VdwUbVgSnj8n5twvmjCa3YCL2Qg2dnnaWQ4LT978CMGxKeKywpCcX3wWKj21SBGHvqQbhQ21Smin",
  "key37": "46N4uWyqLbScqv1d9MAbQR44tHkYHLiF2FpeYJ5RbbuFbcHN2jGxvvNJxqNVxGjuc3RSwDWRAaGbdJ8Tt6utpcF9",
  "key38": "sChgaUNX9YRm3X5vcLSKLYRgpAAnEckvdFKcLzrascrWQkFZ4pYeHyQ8k68ttoekbUbk1nBjUQGi45FCc5Tc4Fn",
  "key39": "2WGgiX61yrT6rGv9Hp2yfhZtFHVvWE9aitXZCxAyP5ruM923TyL86jxqdi8epgifNsjq7YyV8f5BKVqByEWwqCkz",
  "key40": "4dU46ysvMuqYDuApMUPrWuY75NcZXF16RuZEK26z1rjd74aYWEwRAEtGC3Mgt4r9Zs8JjYBvAhusCh5ySFuBRuFc",
  "key41": "5duMvACvgadnLNdJ5ziwkx8dk9gGBrp3zzwyAd5ngjhvMTyyBB4VaxJepc1kJ6JSZkH7P868fRs9iFxebv2bxm6J",
  "key42": "4wrFuczEuR9U8JvefE5u5y26pYUYrrVHyhgxCPZ7Y1Mpdom2PvPnGM6wZmHB4xQxTnCETegLZteqFEwR3jGA8bfU",
  "key43": "seHvCJ4bzCCN3rN5CRuea4xtBdrPsYR6BUKMMrSETc9i7EW5bimr4xGAgV1525LiqEPx8EU7VjrWPQsBvKaUbRu",
  "key44": "3ngu7DLvXWHpevrD2fCDB6iJieXAQdvMsP4CgWL3C3BR9faxsgVFLUSdzUw3PPT5FHRytT28GTkbEGLd5VdZdqR9"
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
