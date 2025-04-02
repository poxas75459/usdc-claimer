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
    "7JQYzXR1E5ZvCrfCnFpTTjuX6YVKWqbtQSH34kabTAB4cPHhB9R7gqGZQji84kp5uHvzoUKF3U7mYtjfQfj9psC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36A9MaCzs1kJVUCWq35L9Cz2sut9tm21uUMee9zU65mbVm9mVHh8DRiEWxXFfKhQENz4fhDTk43BSR2myhc8QKmC",
  "key1": "59KuuPEis7EbuDT7rW7cxTZ3n9879pHeXDex6oL52qyK3iyaC5QtxBRB5o8dZPGdf99uuvFKivAxFYEbfABxDNt8",
  "key2": "2JdRtrao6JhnASsY2gtxxHVAPKwFEhPgC9Nu1vyMCHUk47m4KyNgCyfAmmEGNii9RiBmZE9y9T7biRVUA25aX9rP",
  "key3": "3ZdMxFCLXp7vN8qecqtokqVXot3fLr55BDqNWnHUFuUR5AkaQcQ1c7mKJHbKY7VQRD7wZToPTh3dvZnXLeHX7p8x",
  "key4": "2uAxDHFZpmT8EQJp7Uz9cJcQbDzFuz4JZMDEbwNwaTbqz1ULwHTk7X1ALwCTP7BVPeGCoksSFuj4r9h8B3mrk9e3",
  "key5": "ZrbCrVNG7mTJRcrQLhLS8e2tkU4A2zmLKboF8ijBvvhLxT1VJnhNeSK4YEJkpq6xa8yV9gm3ZPaGuov7UZFTheM",
  "key6": "3b8u5Yj4RNunERAGuyKzj5ny38GzJXMVWTkhq4Cd6Zf58PXq9Zv2tFHSgJEVGNcJvjKvWzRfdg6y2fDSsSaotgHo",
  "key7": "4JX5oNDZsTjT76Uoz2NRgihVHAqdqXcRp4KMUSb8cimruKdovExNtwPmWJ9VEUAvEcu7iQoNuNhePy3feSGzzJv",
  "key8": "5EKFXaT45vMswwBp4ejc9PMFmD3BihnVdPpFX3JjnXzxYA92eatYQ2fQGp7P9FeQUXnF8hKzeH6WjPz6VDKtsbZB",
  "key9": "4uBT8EbT3scboBBsbxaT4gV1YB9NiTu6PiLnJRSN34f6eRSbsKzcuSgkED3AwNUFpm8Qxu9gHjtAoC6enc3igoqz",
  "key10": "4ez3EhK7PBANjtxygUCNfZKHU3ymdhcXCaK4rd8kPqfsfC1FEXUtv7VeDM5bGWZaFkZkKxod8jdd5Ybvmaygccxp",
  "key11": "5KmKSU9j3NLPTe2WP1u1XLSD7J1Qan7RGoavfH2TJSrNv5yMpscL2xCeMWYfzRdWbcS2fM4SGPF8pkEytsuK9t6j",
  "key12": "5K357EouJexdTXziiGBxit9Y4yU2x9qU5f5TduYjnH9spYncF3pZ8XSfh97x3a2CxV2GvuG3CcKLd6TD54CzdZPu",
  "key13": "xqtstUpG2oX6WCnegoP8f7i7Z7hr1eBR8ZLKq5mby44e5N3pSyYSRDEFo62oYJZuv2x9EomDKBBW7qjYzkeMgwn",
  "key14": "5a2UFU5uoNswsJy8XpfAYk4MfhwzsvxkGtrxAmLxpULjyob3TPxhECGZ3d6Sv9bp5TWQFn14SwyG7XnTj8d3aP2S",
  "key15": "61jcMtMzZfBU8XBsPhVTr1sbc9fVGqcCxyQs5HP6U9BiHrLQHrGndfvRtwKFwKQsAjJtm65YnsCzxHk5CcV4QA6q",
  "key16": "4SHCaFjQtDdLYXoWLLKDBfNC7ibxaHzWF4LvaCa1zVXtLWB8WveVZJdSRD5TtmcUGvF7Kpq7MqMyfH7Jux6H4q3a",
  "key17": "5dtHb8mwLbC7txUwK3SzJiKyrMfWwE1TFgxGzrjEwHUwjALBQDnrRB9kXvvLVWPozz9t1x21qbqixUsAp37CGywU",
  "key18": "5CJMoDGjwmtgNJ43R2gtXxbu25P7F3RvbxunCEjpnRKCJUA1gioeUHzfgLfgFJBmEB1EjJsw3MYDMUzeTMEwbJ2y",
  "key19": "5rgTY78RavYXzstC1DKa7iF64Zdj16QcHVUtJt8D8MgXM3iubMeA1v87uDNGDvUKWBrNzwi9Xj3TA9PCwxVS3CqH",
  "key20": "4Sxv8quj8RGwqgS1VfFXCqy26XhkkAY5fG6XoDTEGfJ958fMSxRFDVSmzBbjABRGRZRmgpBSyghiUYzryaNrwnDD",
  "key21": "2xvxXY8BNdEDEfKojfB9pQvig7JL16C23qem7nstyk9NJLBstn4nT24kAUk8DFdXg74GP97WHrDmkh3NX5cedH83",
  "key22": "4nqEaRRwC9nRg2Y1FjYQc18WtQErPcqNpakaGUpqY1pnDTH556fmV4w2TfsiV7fq8HcMLuQ2mJ2JgRjKwHhSBpss",
  "key23": "3aesFNFn6Z3wZQbu9RbMY6JuRAPEAtSmJ5hMiberwspxNmwCTT1hxjQFdVmVt7G5j4sjdyXXC8ie3asB3oCG5V64",
  "key24": "67UbpXJpgwaiR6sejWy1D5VHHeP12V9UWyvzeBYTpWpXyV82iGDRR6N3ENnygxiupuwAowxF3oAVcoF1JzNVUCZz",
  "key25": "2RenLYwQVn3gyWr99LHJGpKuL7keY3ZGLQ8Wpf8MMJFwpyzGM5tYZo4msv7aDYMNZ1dW1dJw9g5scua1NRievbyG",
  "key26": "2n8YPPnXNpXWkZGAw42yZwwqMgtdrc3eVLihcupg218Uonzpy2S66uRxf8wtCNnJ8ufX7g3ardr3sf43Kt2viDWY",
  "key27": "4ioRGxXEUUedYgFebrDcNM5vfrZit7SfD2SvsQWRmzyeacrBXS12qkY8Zw9jr6yNM3QKtWBVzdotja4ToJEP8XGK",
  "key28": "33n9tmh3gNmm5h3HETc1NSgLftgKARXXy3UqDiqeoJ358zYbzoYxMfaDxjii1QnvU8EKx3HZtKMR696db7nFiSgi",
  "key29": "2QQ7x6FcUDbaiJmALStEcakpyLwN4DKK9LZzREBt9Eb5poGQPWWsuh57sf9D2HcMKaDxAuvsQWvHuRxGsWH5NPs6",
  "key30": "43CWjgFWY7yMHUKjsxqYGXaoYXPR7fMpv8wCTLsJwTb6sri6sXJKS2R3cESpkumTXDhPF98F7TNLJu5kTXh75HMf",
  "key31": "zdKcX8AQXkEnkvwHgh6dBb4i99JczZmpbF7FE9CYR9KQKM8uHwr3A5PhzQ6dRyahMjFAmyhiS8GSvsXxz7YKDdv"
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
