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
    "sPktvj25aazJ4JDZABF9YxWMtwNdtPGCDp8SFrFwz4HMsGrbuQG8s5GbQsoipouiCKoHWxVeHBDZMDNRT26t4w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qUxomX3nYvzriKrWbxbGw95xzT7oK8ydWqoX73MkTS4t7hyzCTjdf7Gp8QsJ63rzZ4gPGAU9M9jcuC5Wj7dSGJS",
  "key1": "42oj6tdE96f9hCKT3wT5TqNKoHJQ9SGGirhzGSMKphSeqFBgTouNkvCP2WanQwvS3n97wxdaxBvLUmoaZQBPLx5R",
  "key2": "2tfdeYncT9t2sDufQVx9kth89vvAk2Q691UNgQpdbQzYt143RnwrzDBU3zqkkb3ZjWGNUz4Fy5j2PLoSMp8LUctN",
  "key3": "4K32zN7LtdxsvpDwJPbNfeqpPKKC5G3aTk6kXaSQuasPDVnso3orhAZo3E9n9ytTHmCaQtFyj3wa1BYX6DUS6xHf",
  "key4": "2yJGQJY9yMe8T9SATwB5YUFTiCftFxbdNjJWYeZKkF9eZVfbZJJLEte4mUaAEaiemHnUjNwfKfiQ3MDt5sLtEVfE",
  "key5": "4rs9D1Sic1cuVzN4Y8hGiwVEjpt7jna4D33XxadhUxb4rgH4jsFkeqtqRQ5kue8G3drMVukpfPhWmk9zKcVR4RKH",
  "key6": "2oyxKLFzkUfNsieo2pFMmfDuYLJmCKYQC37foHADmgcTF9egqUng3j6dXmkujTdMtyQYwQzQTxEMMC4YpXH1SFht",
  "key7": "eUg5LVBLTeL4idU3qktCPYFLH1shfgC6pDbw4uF4i9n5NHQKo2J58fA5xXFQXpcWE7QDtSkR4vZLYzWs2E5TtQE",
  "key8": "2aCvDM8KCwzFBwFQnBXYYhYSPVzySAYxPgZjc95H5bvVgFWAXfpuHcWmyrE4fB1W3CGHafGkR5BbKtxnuxuevq76",
  "key9": "3wwTcNfL62T28AmuXHNb5neLq7vL6RH634kWGwNqbwoWoM6umw6vUmZhD7QuP5UMiNbYnXH7huphbpRapQMzxgAT",
  "key10": "5vP622uXd7QYcauu71P9mvuNUyQVCGVzDYNZUyKDJFFkjY9UcNKxjmqBKv9Qv292B2tdQKm8MD9u3zZRJpw5zLS5",
  "key11": "3h5tgYgBwU1rw5PrAy89iv6ngZaWjCRULeS4VaqM6EiA2aaVnwKL7fhuofRnrrAJqZLn7aRJbdE4zejiRZ2jgk5N",
  "key12": "3K8C3r87YvBp7uhoZDv3aCXFCgukJVC7esWB1b6RN71NLfoPuKdnFjrSvKt1rHwYUtjDu3eEQzCLps57KZk96Ckf",
  "key13": "4jU4U6RY7Tf7xS5FxVv9hfmKWxZdYvVHyf3kz2676K2QqD4PYV7Ywa5x4x4Fh27RLVMAq49RB5P1LF9E42uPBn9r",
  "key14": "rzJXjm8AvDt1TGi9QfgayWmhStMuuPo9zj4xF1KorjD8dQ1z7PteC4qVDLZBTwD46sN7epTYC44DqW8bp3QJjug",
  "key15": "4BT1m8SfYwEKdB6h9p3m4KNYXzSN2NpeKUqLRZMENyszxpfW9nUG8hr16avRut63PR8kPm4bYbA8o8GzKTYrQ33X",
  "key16": "3pSZSeCnHxydc1y7u7kpxdaZwb2uMfDUjnDhKmWwZZf7v1B1DFWTXQweiyfhdTrJjy6YU2ftq4aQvkYcwijHkPhq",
  "key17": "5B5LRJesPX3Twzxq1hZ3jmHmsecsRDQ5yAxPXaX1iHivFdWrwLsz8xWqnFaSyZWwkbY4KM4xkSruSwXwkFSA8j6V",
  "key18": "3dTaoST2hsxvxt27y3mx5sCT6RAS85wfRNuaY3WKjAVfhrrSNnXL4fmPhTMxRr1SUhqWb4isDQy463Pzuw4fJiR5",
  "key19": "5Mu1XmUtsM1kimFSigmdUeogGZF6Xrt2qEuPCHprEEvAo3BEsvcEmy3CAhhL1modBhNraJirYxuvpCGhRAopebRE",
  "key20": "4JXxfG7ZsLKcRkMfFfYr9SXyB2Mk44fXMRzY7CWrMemArHCYhuSH3MQc8GGzU9hL7UYVZ7zegdmhff58rQupur96",
  "key21": "4KSQFm5MGUzvtX2SMg6dZ9YNUMpio1PaGHQ6uqRLCZzBnA1bzfRoRHYWfTxR93PqTMm52Fot38RktMJnY1za69G5",
  "key22": "bCW5E1zxE2XVQZKy6b54ZFwCQ3LGFDmoEghQ31UvpoK5p7GiT8kJ6C7FWYctCejHMZhPcEnzoUGoTMAn3VbytpC",
  "key23": "4sbfaFUS2Kya7XCgA3o12wKwsH2y28jQz7LvTNWsoaDCMDm4tBAhnS9Exyt7UWWe6k8HuCNU9FjhmyPRRo6P4WU7",
  "key24": "3c8iDfLnnAZWS27qJ9tk3ZaM6dfWg6N2i6b9tU4sEjbVSqEQg5x15GdyvgCkEtDVnDxhQHexh5tNF5cvKcUCj4bB",
  "key25": "4c5H9GTkHqCh4mqGU31e8j7Gstwdgj4XQH3ak7BwcRcsH8DFefs6H4rmFc5F1p87JDvF4NG861njM6fpvcdzwtuR",
  "key26": "5FyaTSSyJtx4CcaJSD1zMD9f8oWvzvw24cNeTVvrsTsUVjuHuu43bvgNk3W7YsbJQTsZUxY9NSnwB4cGuTKbCyHw",
  "key27": "4tsu7hzXVoDcL6qB8j1tJc1hrfZPMRTwXWHFXzEF5sYyyfcYxQyn6RVt9jV24d4mdfuswgiKcMh964rYiEXonuNN",
  "key28": "4Ha2arQQPEEmQiApNCUKhNpd9fqesNA5RWfKKoSeTZrdvzH75P1tJ7u5jDcJgyeYBWbdLvkyyASn3soa3mTwZZCn",
  "key29": "2BP5mLQrXJGayMuE1YdSkPfH8vi1pzcpzyFBahaEwhc1X9J7MdPHJihq8DNC8KYXMqGB91f4LzdDZ7Mz4DRssHx",
  "key30": "3qcFZYAA9VG6S4NkkJrkNWVLPtsrZzpZastQKfK7vDsnWUitVcRhytwiF838uVVfnJKJ4tyy6B4cWMYV3pwXkSBC",
  "key31": "62GRswZgLymWZRQLh6ybjd4wmEB5xSHSkEhS5DZV8E9ieWRSPBF5z3HoArG7iDk4qqiNJfEoSwbJgxFZsewpiRbN",
  "key32": "3MaJVwmRPkevKmraEaGVUGPwddDvQjj1LKmmQRPyYzsHfH7oYk3aqi9kgsBEtSuweXVr3dsNAbZmmTNHkwidiJvu",
  "key33": "4fFiTCXVoAk1iCcavNRmqTcyfcf8NPVLGSwaVMTBGLtMy6bQvPtVHW7XDrwviDmuNgrwcpf3UeKW45JfL94CV1k7",
  "key34": "2axGD3xe3nWdVcMShdfrDwJP6FAxz6m67eqBxdc6JB7isUSKJvNXsAhf6k3isB6G1E8LQwSUEBa6SBQ7hHjCLZUf",
  "key35": "2UCbrBcLRnHgqCwX5p3Jr62nLkX6nQAA8HPAfrdyaqsrQVthTFo97geBrvSmMsGjMGmNG7WaLjJpznpfCyQ5fsQJ",
  "key36": "GWWAiCjT3VdAeuXrSufTaaV32qwPAk1oR5AVL4UC4hyoKEh4S8ZYTrHwsZuTJKmsExAMuoKMN7YeVnwwfHqitEm",
  "key37": "5JjvQyUhUj9ZoEHC6knUz53AD4fh1mNmonFVxkt2eEMdyEiHXnChpPtD8QcxXQr9gU8MQSP1RZXRRZRSb2B1Uq9A",
  "key38": "3pvqjor5XXQiAaXp2RaHgB4E3ogpxY37zSiojHNrSXg7FiHACu5nw7yfhE7H3D31GX9Cd93JCPjKm97tuAUToaoh",
  "key39": "4CMf5Q23ThS8oKiwTpCK9iz7uJDgwsbwFoW5jiBtCCyQ5KAn31DWTc3PQoGyZP2Fxow1NfPLNKNtiQP3zTCCtFNJ",
  "key40": "4m8S4bNEQBrXbbDmkDSxotJBVVjr1YzPRTRCEuiyu7B16z1tPZcpyom498GTojsSzvYhTCK2GZGPzmk7KNhf3H54",
  "key41": "ezQtj23ZhiWeG1YJ4Dk4gmLDxzLEZcT5Pa3zVtLE5aZznTjJKscNmdGp68d7UVauiEp78azPdM9VNT2BvTPiZBw",
  "key42": "3m6cr7VKhrrSxfqoVqj7SaP4Bm43jf1khWocuXUvJc1etZ9y2a4FBDWmNLBmQHTsC2ccwCsecW4wadZSH2CUiAkm",
  "key43": "7e2YRJBnurM2d4z1ETgM5wM8w1BmnuuivWH4Zp4g5Qc21BeLQq5GsndtXd5NaFzxzw85A8T6FpYC5yXfNW9ExjY",
  "key44": "5sxNiDFVJk75hvjRZPitcq1nPmQgRaUS1x6HBAQ7tZsfiwJHa37Zu9jSabdMmQ6AhnKANFtPfUe6jBjFai5cXtf5",
  "key45": "2a74vb7BNLJHZzS4vWZ7VubT5za2yNMHUp3E8N21qGBxhjLiGWmM8EYPxhWEiXtAFQRvvixoHbWFeWdrY9Dyq7VL",
  "key46": "4RaJcY2pRnkYCaM2u9b1EV11u5QpdRxWSc3k6QZGJnzFmmnZL1tAyqVdFDT9C4EfFWPinHrMTGXQmCdNGV3AozrP"
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
