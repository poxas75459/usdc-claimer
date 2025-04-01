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
    "3rCkfrAuRGpNNbAuD2LcpZd2inrdw8GnFHhqXQnUEsBxVJzBCQD9kvGQeHzmnXsknjCQKGdphdBiYzV6CHHv97Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42U24JY254Q4fZ1TXrey3nMWebGKJTyuU3qWhC6iTXrYKHXBLSndwACAxRvypHvjUzCeSpRyfRrR1YWhXVW3xb8A",
  "key1": "5m6DipgFjKRXGG8PYjpjLF2sjHKVbYCJb7V8f3UcJUVwmJZxdgLXq9pMR6Y3iCu5rakbpK8KD7YivKwUaivikRSz",
  "key2": "361f9PSFJ1ha5XTZbJfs2khzjfGJq675mznwZECcDE51S7Yz9SWJZys8GoNFRZw77ymo16mTSn2PRwJhfpokdR5n",
  "key3": "2wY8cWfquwo1Pd4RWNzWFLFKyN9bQn4qBpDsSpL6eUSeVG62ko9yKoT3CpUm6yqxByHm69mkLzcbHmGeP9ysSer7",
  "key4": "JBT78KevWptdTCugq4XMcTeE88C6Dw3vFM3N1ktPGqDpgLgTUWQr55WKVus1nAohDqy4JoetaJs7nrgJFd8KMLD",
  "key5": "2gjh5EMXPULVmZQTA5XnA2ykeK2QJFrxXUAGHWLtAAJ9MXcWjfT8KWDE1QNqJEfdYPyQ8YSvpMTkRyvJDBJkteH7",
  "key6": "3wubyUupudSdd5L9SBGau696uEMqZ43uiY19aaSJCwvxahbPvPnormqNu7g15NJYTWqTUux96UT2BhG5SoMXXbTc",
  "key7": "3p3kyraevx6yr27LjfyX6FXCdUwwuLKnz1oQuBKFLFkwkysaME46t9hM9pPzqGTcyWBz98yzKqkrEQhEGb4yGqRs",
  "key8": "4CxPiD1mzZzbzaoMXXbpGmKSnQeSutwm9uZg5pu4ukYMXvySTvbPT1KNDkGM2MeE4PVbdrfmAGdcrMke8LiUCJNa",
  "key9": "2fX3RMbRHVzVkxKMN4zge9egMLgUQeDNVjvJznStcghyW9HFuPRbj7bMxjs4Vz1Cvu3bYniq8Mn3BbfCrxhBmDgF",
  "key10": "2KVKjzgDB7GuUYbvSXF5sVLwg6tvZQyasZywTq669m6m8EBTf3RFyXzrUai9tWtD1ZtkEGo4EbH6Go3JgwRXTrWC",
  "key11": "2Ez479fXiZULL7nu1PaGF5hw1Us4V4NVvqzCYdYD1oYbZGSDB7FbKHB3eEMjGakXuKzcWGKGtwyF2DDi8RK2x1Tt",
  "key12": "43WkcD4zEPnHrJZd4vuyc63RgvHSqhhosQnxNtjkcDepivD21sePHJ5y6dGkaRwgk1FhCPqQjiG1A1fdJDgaCJ7c",
  "key13": "83k2WsGTar5oXvD8uxAto92LbqQwt9L7fLv8wFu7qryVwH5ipcqP4tJU4ryq646ovRYNfA7widTcmYZAPbDB6ju",
  "key14": "3HbqygeSHDscao7anW96haiM4SQWPsxgyhXXATPAk6MRae7EcguK4sLUWCoUxa5RoynKwFGddZQxf3atSWmeKfij",
  "key15": "2pvbTTCHHnWyqfGvyFS3efib7ynYjySpbpyXTpXgsdn1UXQGT8UdHUiiuGiQR3JjaUcJ6eWcDAVdVMP9gCbASJWh",
  "key16": "JPG3gKdyQcuFBo98uKyGM8x2GRtFBTgfbUWz6UGEvZ3bA2BxfiPvVzAmpHFMa3896REdSewGLFdJ7P1rHtX95wF",
  "key17": "3TEgcHNM5qbikoPmnsdrkPLSP16QQKva1ZyUjhWNJCSsaqYYPggNUPmu4yXzWj7rHpzKGsnNYuUESwEwG7sR167s",
  "key18": "2Tvh24wgvrFQwoVg81WV3ofwnc8vAgFFTkWgGAKUrF6eSDMFPitBwSkNsQyHMw7qZiY7PfPM6vEKyQccK5AWREb3",
  "key19": "4CfAMEcKMLHJCXNHHwpi1kRaH1MLSDjyQqzmmboY3mj1LawigGaNNfWbQHXZJFxDSN5nVrFzbCUHvL7i1926XMmx",
  "key20": "5BuHksY9ypvz4pMpufdbFMgD2ufskR6GZNnuB33vDtdAsFoxbYVtFoTnRRkvq3B5ZZRmBLn3LiQ3kNZ5jSAHkEWk",
  "key21": "2LuhG7k4Cq6HKcT7i73igArdKMtCwfXQgos44E6oBEK1fPopCPatFf3A2xu566xGiw2DXqfzZtFPWFmhx8oBmdE4",
  "key22": "3dqCXx9efVc79ocZVquxTcnDsc3u2tfmSdCS4HY6ZkNmKHdBHR68GDF2KRBrp9dhou9dykDvMJvjE6pDFnxVYHGy",
  "key23": "4Wff4Et3MAuvzHcnEux2gv7v8i2UnafqnPjrmEgGhpxUX7UsDeiyfxxqmhSfE7HjnY3eXNpgP786Gxk8ThYnMbep",
  "key24": "2bKSDGisnvBKGkKrWg4bHUwRHE6TYbuuE2WKrjFpx56HjbeTUcsZBHRtjPq2B5Db5Y7D55TrNUK4TSMWjRW2H9LN",
  "key25": "5tBR59jFxkwBPFyhTGkneMc6cycmREVASRLnA2FXYiV1z4yYm5U6xyDg5a1dXoGpvhXahunzwf3eaDRNdEEUSJsb",
  "key26": "7PurbRHwEcYh4ockXvvqjhSpyraqbKHKxjU4mf2BAc3VpBNT7ub2JXRGvmkckhNnLLTcr762BXwcDtYqHQYpw8T",
  "key27": "4KwKFmBbr3axsjzSHZjrcWiHCKJJfRwS49Pz3PAedb4kfWPpd9XCcmH3YC15Jkrc8p9MVJsV9uiVFqZv8TiF2QPA",
  "key28": "5sdv36Jyd49TDUpFXz2PjFNXTpdfu86D8p1JWtuQo66HB3EFcXZdbRsJD9iwmuDJp76yzNVCkrcN8f6RBTNP8Rkk",
  "key29": "5hA1sCmFP97zhkqM5G82VtUnsJyBmGejwTuV5e3tgNqUyxq2h7iB7J2vSFRZye3V5EHBkNciVKHg8tLZVGPLR7wN"
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
