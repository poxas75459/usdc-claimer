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
    "22syXqZjBHLk98ENcXXZU6zjCii831vrvZ4MXrzT4F7Z17iyaCWAEnT7NQKso1FcnZzDrvscXQDsc1bCDcwq25aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSav2Lcer9XuMvn6iUpP3N6UTWy3GUs7rCEWnbz4n92dn9Z2oQpDGQjPwPkfcTej9fCVfGxMNhceRqCfBD3fk5Z",
  "key1": "5LRdUMZhnAi3upii4uVxnGgo6EYGsa2B3SSfibTW7B9ds9d3H4maYZu4ynwDexoDLNwEGD3votZ8ED1REUQQswns",
  "key2": "oBPSRtHi4Fn9dfNt3GmpYAhXHYSizWW3F76EEm3AQLVRSNQoMcm1AbgbkiyQ8mJUDWmvi3bf7rS7CDczkBiDw5e",
  "key3": "5RhJRbLG3ag58HH6Q3FEHa5TFS1nb5Kdqk4oCiCcYj9wW5PovySAyyZuo2iyHaUwpzrdku8QhN2ZkJSramx3Tx7T",
  "key4": "n9mMtnxtyoLbKDA7a3nMFx5MJ3WbjRMiNQppCFe1DsWBjY25ddDqBEmct3tuBg65ArQ9Re43vnZCGkCD1v9exnA",
  "key5": "3fUNbD128hrzHyqZ2snshALaesY56hf9d6sM1k1NUdEXWGFd1j5afbN3x1M4ASYUKhH71wp4JHf4v7y1jn6jyCyr",
  "key6": "3gsUXo3KQ7xtopc6nfXGbDUTbh85oGPbCBBZpd5zDUBfj7wHWadDHV3mFxgm1R8cfAo8e7bx9KnkEQ7ZGHGQNH7T",
  "key7": "syGiCxnv1MxoxrM69L16cWknGAwWvdGyEt8pdy8ENC8fQ5s7PxThQKHdESm5Mfy2k1LFVGpEvFu9mm8GoFFDpwn",
  "key8": "38T6CgcXvLyRt87tF3qCwH5mHB8W66sbhyvGofVr6r4QKjiWzDwyj7JtKCNUfajtvtL5hiN8D8AZ3VCKgfgDAchL",
  "key9": "5nqDyYNRD7STuCBdRxgMCMAwrSWqQDFN4nCPSoZ7atL6YrPybDz2pS4urvrueoY7YgDdiQjohZyfPUfLnRxiqEaN",
  "key10": "mSPBp7po36XrKGeCGXAQ5tcKdhX33urJn31se5C5Hjssbg7qczvudWsiA2NVt2dKZJLaomVHE2EaQw8Z5Eqramr",
  "key11": "3dy1FC63cGsPK9zCHbC2Re6s877z5Yp51etbr7xMX1hNBJWFV4YKdkFmVoV6jfDWc7jtw2a5FJx1SDpJ2RXipGTt",
  "key12": "2SMF6jwLN89YQnLCpRtMTSE4mNsLD2FCSXaQjNTigEdd3HUBAXMe4ks449DNhaqodsDRAxPWV21HwYZh7i2WBaDT",
  "key13": "28tefoEPYsddiCrWUGH3Dwn92VXNXybMM7gZfmYEgATbthHAZ26GScWF5WUy4htgQzwaWHWU9eqn9ZwjbcCzp8xH",
  "key14": "A3WLtC2n2Hbp5aPFhhLjqmcUAezjqLyU3SjV9VGt4nqALxyVX5niSy5tBAqXDuGZ4tBicDEUDQbZahR9obSbBiK",
  "key15": "52QcS8FsUx1cEzWbR7AFG1Gm2V2RXKXnCV3WGA4hvYfF4FS78zmH3fA2eQDmzY7JeAuoxsrdMrNYwfqkVv5aDmgg",
  "key16": "3G4canPAziRz5eWDinuDtcN5RwYApw1XkY1oPSeVJnQr1N65tpcrWgnKnydWfYp4iooLihWjw1z626E3crRntSkH",
  "key17": "5oS1qXAEcNtzbUXz9CHR6hhNyfhS9Ws6gFDXUy3Gt6HMR62ypKva4P3UowU7DRXcNYQrnbKTUyUfwCkbPJCkAxKA",
  "key18": "io1h6NvZjDjTdAfTsvJyKLsYoY7o81UQotfDLFeXDd3cTGkBkuMAoVduMPDZjC5y3KtkYLMryvqpJdcWyDsF1pA",
  "key19": "FnGHekutwMQBVaGNxbe2UxaoU16iUSXC5wU4cCNBcWUhGVbo8iTAqTdUX1cyVP77nKfigGHvrxBr3iLkPVfu2f6",
  "key20": "YVDCFg2VBUuTdYuqJDcHbEvXvnDTdtoqwXeoArMPY1NCiKJd58Hvg6jAz9DW8q1dvfWmbYCErrMDZETo4XLWCk2",
  "key21": "4LAHaBqAfXK2dA8Wg641kVwkxWhLcJo9Lg2UZwoDLMS8Nj4jNquFwF6b1d281Y2YUbG8xK7WoZAVCAD6kzbKhsw3",
  "key22": "ozfGtfvDncuRc9wNe8s1ce2Tf4MzDq8esYmNRgwSvccbiAYn2XLu9bKCuCwtdMALrdXkozq7n2RdN7YsiLrunmF",
  "key23": "3pd94Uxp5iL9doR1aP289fYGPLjxDCSRUzXtQ1HfcJ9vxLyyP83uJcuivEAr6UkstpzFGjkbrs75yeL7j7jorUfX",
  "key24": "27itusVwyjK9kQAmAT5L68k355HcCrwuuFjjSh7bFG9EV2GVjrLTpvj6iGShC1GuZuFUxRQRqh1UCMpG62UQyM7Z",
  "key25": "3eozoyRxFbgRxJAt5Se5K5GdLaZMUhgp9iKHnHy1Udy2vemom6eZrnnUJSJpzhd4N3HgdkT3VgUsPypDEP16M8zw",
  "key26": "3kT41isgCUq4h5ASezgFf9UF9jGsG5Qh9zg3bj64vTTxTXvs2ajHfuGkWtNzi2LHtqFY6Po7xsU1fFc6vZsmGt5r",
  "key27": "MVPZAq6o4f6D8MEPEhk9eTxuPhPfdMtTcRDTWu8setyV2u5Jfv8UiEmGM5zScosSeAK24oDBaVjGpia4a4CS8gc"
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
