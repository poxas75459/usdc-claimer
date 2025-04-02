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
    "3c1Sm3rCpp5yoQrYs39t5eNQxzuNQz7JW79NiKBZnB1HCrGtveKxjDvy8XfVFsAJu7ArCVBTdBkdEGESfCpaHuCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1zz7ykQY5PjynJ91wBVybwqEWsp6ZrYnzY8bwX3er5DkJ7tCDTdBBuTNV261emcqetAThEPuXy7yHcCEzUzTLk",
  "key1": "49Fzk531upE41zyygbrkmzkf9UDhdAj31smYzCuqvmnFRokTMteeiyif4dSAVbkTMpE8v8u6YhdsFhAgtLwwreUc",
  "key2": "ea7XNc9AShRq3ZdyVpGYXDkhMFewGbvwTpriCAm22HBY7TSYPKf7xkzwe74oSdiuhqtxZokAJofjpzB2sw5BQUk",
  "key3": "DVPJEwvcrizNRZnR1T3oYUEdwZEgtm898SnCHmSFMjJqmsaRqpeMm39YNBd9BfdfgQk6c74bPSMi3jcGDyz4N7n",
  "key4": "251Amv4tZjZyNqHp7cFveAvZZV2tiVYpqi4yq9EVf8wiAWXi37byhsisszbc2r39dNmndwtkkLsqkWcGMdf3mGhq",
  "key5": "kg4KDBgwD11QsUxTTCivc5WcVUoFgHPyPQL136NUNU8S1cN7wnWYrUn8LQr75S8Dv2mnFBC9HPdtSj1wJEhwQpJ",
  "key6": "5ytSYt6ju2hz9W7W2W2jAiRPfcDrirwYMJ864cPu9zug8QHc5fKZCzZRL63zHBnfdL5aBY1ixKPv6JFc3pYV4SAD",
  "key7": "42cKLetwPqUMZ19i75aJ2qPDtFfww7a5mQ5AFMb5JzW54fHvjju1buwEaLLx7jHb9TBmpt9w1XrR1TUrj1YbYpox",
  "key8": "hbgS7iPyUtsixYCup5Q39Gxft8JYi5QgkZp1rbwmqr1R6LQmPGLNSDYPmSURd8qpD3a7ZNNiowfYToecQJ24Axw",
  "key9": "5kn5p7k1B6bs88CdExbNfV14VarVz56xCU7z1unxekMyV15WdiYkxdepTWVULXK7gBX43R1NjtfVmevYYCpbqpE2",
  "key10": "KwpHj3LtQuBGMJ7LrHZQrX78F7B5eE6sSUL2wC2spwRqHC9ZMn1PqKeDmZs4YCsuw1nJqqZdLit8t6ETcTuNh7z",
  "key11": "2eJfVgA5XYN2fAFku5bVBehPnJk4s6tgaKxFZRbqq3zgMCTMSGynqDLwUWHNLnwNiUajx8qvShwMZB3aTPzNgY1J",
  "key12": "2UkcXiQbz8MVgaqiWpbmP1qyQuXXWVfwQwRgVnNMHY94D7cq4DNJWanhQvDzCHjGUDpriK3kRsGnqQU8kvzW7Bhx",
  "key13": "2cUubaLKQjS4tndCpohw9C49SHtx6GjZUaGqMZaZ1LWCXFxUaFAgV7VmKTp4pgiBbP3v132pXLU4Qw1Q89ryGyp",
  "key14": "5CJrLSis2MBMdUpXwrKPw7pXBobHVYJFfLHAx2AHRLYFhcbLnD9kDjQ3gMNfViD2P4WTMfMxrLwLv8Af9Go1ipTn",
  "key15": "5PHtXddpA272KSeotZrzyCJzHS2FdwpcS8DYWFpgxCmxo4tNS8xnA9Tg6YQkTfqFtGA4QmykV62MuHX24xPKZ97T",
  "key16": "5Zih5WSESYJfvYAjiaH74U1fZHBMLrKc8HmMjVHvPe14LURxseRGBuZE4SYqXQfFEqdkGafxq1AFBKXCP1LHQyA7",
  "key17": "f3EzizDdWwTrpYWuQgB99RhyaK4stBM6u8PBXy5jY5d7RyhqViiESCNqUsmYEvtqL2Fro911Ca4qx8uyWzF4U4W",
  "key18": "3wFpu3281yRCuXo7X9tgTqzNsW2FM4K3f64bEfn7BMknPhFDz84GJ8DV4DNrY4RUrXVgxdhyNLmnXtECqgUE98JU",
  "key19": "5JSJTrA2MBuDZxe72tYViSdY2kzgyS831V44TJi8XRocSRoZe7xnHtgSZZrZ2pxg6Xs1oWpDMzkMQ95zEmon9EEA",
  "key20": "4HkuBxVjScwM2rXNYbKQwG9wuX73R9eiGKWshbvhsfEJuMXKPcCy6adCqp4qvrwXFNbtYrYHyJ5An193xTb2XYmp",
  "key21": "gcJG9Tn5Aj34nTx4upejxYqRWsoMVDYUcDvGn2J2dcqXWqmG7PXwmph76Bqv1b422qNaHwAMJXq8GDaW4Z9vwuA",
  "key22": "5fiMULxPwimWrivyJwrQRnTZv87WCRkABYYgwbiPPPPb8SE1ynYnp7ZajbA9nk9RXY69QKksQR8w1NPy8Byx81gG",
  "key23": "4C6qMrYJygdhUFUq2FsRDFFTGqPJaUjs8FozEzy3D6Gk4LViE3n8LdMfDgCQvFh2vs4w9KQBkgKkovshYQqkNtuE",
  "key24": "5YF7YoWn2ixaQ15BxTRtydaBMD4kwXTZZBXPjg2xq3ktTegmdRrQLLc1o6QmSKJ9PFDZeeec9S6x7gjHjcesnbrp",
  "key25": "29ny2H7E1PNtvTr6Cvjg2QenVwaHjA37RRS45RUywTic8EYL8i363BK4RjdRKR5KbZxZ6MZWxYx8x9Bs8nutqaJU",
  "key26": "2BHCxcdfREF4BhK4SiHWgLqCS7gnZhMn2BWfZ7n7ssant4eSdR8nbwEb5cgCjmJBvnbXSEfveVTHCznm1YvKy7qv",
  "key27": "21ybd1ZhPWC2c9MTrNXAT3UokLHjQRkEhVtDBNY1jMGMQYwWXYFZPL9YXrJNzLvyme2C9xKmK8tJxGVSKmgZ4yaE",
  "key28": "28GL4eZwJRqVqsQGXm26Bs4B9XiQ1DUyEPYoDQt7sMRBsehdh9ADGRya4jcqj9x7H4nHF2fpbUChywm1ubjp3FMZ",
  "key29": "2VQxTxJHBb7PbqCTczjdn5GEVCRVSRjrQUF9VztgpVGhDa8Psz6fznDakPxQgKXN7fw4WGfyPZvMUkUKNKCvWWdA",
  "key30": "qUC7cTKdcxqA3v6nJwUuVbSzcpd5nvMUwSUe5Ka7mEwn14k5y7ZEmrppzah7geZgxNCVBoLAFduYkXwZjEKk8Ri",
  "key31": "2Mu4bcxHQYgf4s4eY14PWseLdzkRJU38vs4E9eLQMbsaFH8TMRpPsiuVX1AakZTj3FN3yN3QzY114eQqcJ19mwrB",
  "key32": "4qP3YYFsP7yBucSTeGxC1Qw2XVBsC9pXvzMVx7t2r9gajgeAB8i32AYdDH19xpJ7mfatQC6fUiqcCmeT4wYiD3Eo",
  "key33": "3B5nnehgoLTdCo5ZF29QpM6dkc9DetFeJxQoQyz47EbBzC3Hx31fBGTVSnVAmS6XXSGZDZoaHqMLcbH84o62frrL",
  "key34": "5NvxTzeD4wyPchsfk2RGM65wt2P6fVZZSGRCj6Y8AQpkatQmL8J2SV5w4suu1rYc3GVqnRei3xtZnSLtwaW1q55J",
  "key35": "5kba1cqGz6FKytLqKHWyigHtWNC4eALtxDSZToSKse7siXNUnuNCH372YJok3tUupXkJzxKGAi1xdrkmo2j7KwJr",
  "key36": "5EzPgcGfhctMd314Wi7DBM16PuRU3EjSRCF6Fb3LdotPbwZoUFr6HBuuJ57NRKThCSCDxhEAmJW7J3r8PrhpNHC7",
  "key37": "5a9nrxJT2Zun4WyzN4rvZt5qVSxpQnkBvx4u16MKrTTFHcDXfLwLesJVJ1FocX8mvDTUukM3zNRWMNZ5vbC2tmmH",
  "key38": "5mpgGJxr1sbEUupqzujeh6P9PYfXjuJoECieMNxjkPninfbEaGZjQq3Q916UWwcWLhPKKgzSHFcaSvuELhsnbuAf"
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
