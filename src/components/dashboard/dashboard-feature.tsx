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
    "3MiZUW7aVqwRjAQHVaeiU3nbgnwsoWN2K3a4HAsz2crBwS5QrNCvs3DQHF3BYY6cgXoBSdTj7TVwmrgcFZCGt4nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9udRGzi4ktxJyCVq4HnHJd7a47NbCSLnJktjxPq4pjJLBpezqVzgT5rMRb8BUG7si68YTXaT1aZbsXPnJMYbSj",
  "key1": "23XWTyYabFpyVAqqdfJsbudN86UcW6D7vFguDMpDrMFUg6xDBFghHWLkhMRxDZVYva3JgFCGLX5LtD4bJ8dCZM3x",
  "key2": "4rGi7qLUsd82f8Z1BCmedr7sDUFmpnMaJmTFPPVLmkGEXTjzHkkxKmjrg8c4HSXDV8sui7vspMyK27yYxZTeuU8Z",
  "key3": "SsPpB9kndo5yLDEooGXAbari3NNt2Rm5Ji7w7Ab2V7oFpwhCTZavnjiRvX69Lcjy3cSV4XB1koQFifNA9k8Az7H",
  "key4": "4dYurrVQSDQL3md1tDrjAPWDARaUswZBUoxNR64jdC7NNqqJvf4deq2L1P8D6pjcheDc2SDoWegSFsScjZcBHZg",
  "key5": "pb7mRSc88b54oJ2r6ce7L8WAWGms3isboLNYTNsnqoqsu3audAVPXEvZW9V6FzYnwomnY12M4VNq7s4znyGDYCd",
  "key6": "5Jv8AYb3h5zYbp8E7PxgSKSJZTfUyPRszRcqn5vyvBukbVfdK62dFhtWNpT1JgYrKLA1FnZkxxJNahKmb9i4JMqN",
  "key7": "4UgcktmK386gxrugmiNWXxwgUX1kAtPpXMGAV3Wi6zqrrbK4fAD7W9C6ShmLpg9ZMThqH1dtRanN42DgKrmikaBc",
  "key8": "4TfhtFWZXhAP9nMekoycBMjqmALmDq98ME1CYNnr85hmecTDMc5kMmrWvu7fYoDK8ewv6qiKoGVMBgTdhB7f2NgS",
  "key9": "5UGuEa3FRvTHbYKPPf7YzNeQwtBbG9THsLLJj2rBQ6Yn5wHBr34UgY2ryoctSDksz7WVwzAm6h8fanX1x8sVuuun",
  "key10": "5P1QyeBxEpxfzwYvtbqiZhQzHdpMx9RJU3CxXRh29eQxKZkvsUWL7jWLXt8kTkmmWjS9xpWCBquMdpwpZgFBdEns",
  "key11": "NbvK3rk6JR5U6fvwRzEB9UQ8sYy9p7juSJf4HJxWjKWvsZT4p2TzGeanRtbop5jSpxYZgykZQtCd4uBpsRGXHi4",
  "key12": "59MNv265wqujSSfyTc6sv5hMLaqP86x1B5L1Jb7XphococrMZ6LGaTKc6xfxeHrMq9CqG4aCSBtmStkXfdzTfyqB",
  "key13": "4soqmgWHF5fWJ4vkuyZd8FxBBdgYLeLSkF7HNRV7nCVeabr2okNSARpus3VGAAUa5Nw17neagEekYgTY5TfVHPQN",
  "key14": "3iszxtaUKciydTk23PtU9NAE6LUpeciuiqndMkQv5SfwgWhqhGWy4fzPvZtQ3omB6SyRajgz9EwN5VNabbQYFV5J",
  "key15": "fjLpbrRe6Tgo9CRdzQ686UAyjTcubJ7EeurpfAM8Wdu4Ryj3AGtdjK3YZhkFMXhX3vLaybg9tgw1qZe2A1XnQkG",
  "key16": "4hsqeBT3eJ8ciSw5VsqnJDyx6b6dtBh5t9zkknsaE5vTcyb4fgHwG2oXrtGXFYSogfUXEoEWJZWG8BRRFXinfATa",
  "key17": "4Ggo9CqcCPbGr5TQ9byF1B1TjxaSEwkisJxChZLk4J2d4Wr7UXUZUPdvJAtnMRdrn83GSVrfEyVqsaLmExA3rPZy",
  "key18": "vnxY4FLL82U6cZiH2EzRAFzJcLkYXHinGuAspr9eJfoYUQMsQUZ8weHGovhmiHgYLcKn8NfkVZ6QXSQX4hwKU6K",
  "key19": "2fpbHcppWrUfS9pdsnNaHRBxqL1reLdzqnww1kxk56vp6wroiKF3GJfGrLuRca5afcg77Rru7ajW72oG9cWRX5oZ",
  "key20": "46Ef8tb4qm93z4PegoCSauQU2SFzALt5jKqVVDqoAawFhFQ3Dj13Z3yKkDtUR5fPjDDJQZLmg5d93eRq6J1uVLwd",
  "key21": "2zRjaM9rSa5KB6Jeqx1WW2Wwebnq8adWYNyxVQZThqHe1gyCALmP9JNVyxzTvML5bcagzcR58GGAzXAar49ZsfVh",
  "key22": "444GQeoS6HxP6N3tZSopN6C95AN6chqb1nw8vAgakzmq69gqJSRRTiDa4N29K91MzA455SwCCaJ1rM2X6DfAArvX",
  "key23": "2ksk9e3q99QUDKzvJTb9mju3J7R9H25w27t5QRzby1oKgMMPxnYUkcyJ9iXUkpNxUBBQUEt7xkDydToTjpjLZwVH",
  "key24": "2FPZxqE32uxEZzDug8aBypKFb6QEkd1m2M4GXjjA6ZMqBpUECVgcXrVSYx1QfyD2EasBxKKtjq8c8X8aU8qNNY57",
  "key25": "3XVFXGH2wRkqXRmhwTyaPokHTQizRF1EFL11gSVLCRDAwAFQLUjZq3kGwTc4sd1w4dA4uPj5vLchsvRhs7n3X14X",
  "key26": "4vfJXVNBwyqLbYQcwT1udh6RDv2psvizf71kkpkHpXaDMR3etdGdvB8jGU25xY87d2apdRmx1HMzwH9hS5iU1usX",
  "key27": "5HkwExrbqjDZFxEFAKyZXqnbARzrbzSffN7L9di5q68VrTfZgsfwN2EVT2nRjeEuZvGAgD9SfDhjGorLDfospeHL",
  "key28": "5hnpdVWTJtSDTqNu6KwUEBRnWxRk8cFeYCpcswSun71bBtvAPfDR1qVK7pxhiwawaNQkxU2Wsdg4VKwEdJwqWN8P",
  "key29": "kkgEXq6L2pdcxmTSJUGwoQkS9XQwPbBSocL9wYd37EEUUB9qw4c8q6yUUkdPaC4m8jKF66eaqb8qtrmQqLqZWTD",
  "key30": "4w3HCL4WWjqFDFsZTeqFTbxjP1jUVP1FgBXZkTKFNCdGQ9EafyE1fQADyAyf4QX5EqNVBP17bU65UvryBHW9SeRi",
  "key31": "2h1SupQ1YcGH9uZqhL6A7YwAiSaFKtNgWfrrkmwdBmE6LfKZcn4MZ1QdXRKm1SPHFPL3XzzVfzbPDCjiuTQdf3pn",
  "key32": "5QNHt3oAYMSKZagbrCMTYDxoWfjnYjUZtkcLDGCjYH4S5HkpMrXphKCxANsYvL3YQyiTkczRMxHa1soS3Q6MYJWL",
  "key33": "2ATYYUFSgH7QztoBqgmdYLQhQPZtkFNS7nxZmsL2v2JxLVinScjkyWnfYWBrURe8bQxk7rRiLPf6fRqPazL8eiux",
  "key34": "pNECNC7UumS5XyKTqkt5Yc9YLUeJwJB2u8QmYj5hvNYLErVoS2WhHUJWKEoRsEMcresGGWstw2mgaTwJdS4Ew88",
  "key35": "2pieHbsArCUuNghaCtjgzaxhh4D6DZFY9xHCD2D9y8btRTHXhy6YGuZH1yJz2ekVQ3TRhtL9cZZ5Pp4KsBcQLGen",
  "key36": "MpBFnwfwGdJAsQhCTiSvpvRU22goqXwuNoy51N2RqZghbqHGb2jsYMgj5YYf5qLQXJMuEhkNT5gASBXMRT3VFY6",
  "key37": "v1aRFrLsY7ivkwRBzUPpoAu5B9RYMZYS7LDeL2CYaxfF1VXBN2xASS3SEYo3wjqm7hDY7JyWJv3BbxauSLgoQQ5",
  "key38": "37ghwLg4MXbpbT9zv4QMENYBpb36uYVxwPJd3AJUjXBGm6m6b1y8LQDQuVyeJVnarZFfrvm4CnrGxZF4nrH2NhYg",
  "key39": "41ZkRNTpdkVcVveMj9938oa7ZKFvB5gJ2hBP4yFf6WRFLu9WUeQMftDXZMFqVm5V77deSTQR7RcSYq6x6q8JZgiH",
  "key40": "51oxCX158xunKtjVDaok5ZJHgUysDaFf5aSAD63XUpLNVgFd2PniCGf7vGS5nHD1xz5XRtpkTpWtUNyXBJjZ5iLY"
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
