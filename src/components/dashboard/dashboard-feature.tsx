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
    "5zwSzgusXFoo8hvnJKAXH71PUR8rC423BJ4vkwMuMLLGAxqsz8DZW3pPnHn1AjCNfeBvw1bpGpGi2AMx12xWXhHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJnrAuTZoXcVrqF7GWbgEiSsQBxgCG2h19eLKrqHz7mPfD5rQFs9RRwag6274C7VKRVjwxZ3Vj8ULGhenXvq8uC",
  "key1": "5enSBktFkBfthWrQkE7obcbWzuWaLzsSECge7C5q4WazqYoU8ULGHHPUhESr7diFF2VnXpiDzHenkgpdRZs5CXn",
  "key2": "2E5PdArarbQLN7As8mJaCxdLSMnogzjYbufYBqmouM3PBrfcXZ37PALFiFVPEuhL3nU1hpxDUYqshLPPd8a3vxz4",
  "key3": "3SK7wT3chg3fpFT9hU2WbmVi2kacD8izsZcc3FJwaezwYVBYhg1rdQV9U4CaMRJRpEp6BRw3u5TYUWkFM5ZcK4W1",
  "key4": "26GFWP2WSDjqssvroojTVVZhQ7afFuRq6AxMFyb8MCpEdUiEXLD2oRbpPnJuYGTac8KC2nGjhi5JsRTGSCY6454z",
  "key5": "48EYEW1KpYz5ypaNQXDdZRTM1m3VsHjvWC49jFkdMVhxtyffJAXG7KnxA6Rv9NmKxNkFeXbbMKrR9AM2e6V4qhpy",
  "key6": "2QFtsx3GAGhaxchP9KhJk8FtggJQT4f68DZQZQHj1xdHfUgKeN9SvbvKRDwAFmm2eBWLnTN4rJYYbc8y3tZakanE",
  "key7": "5UgdS965VE3h7o4cWw3BxWLf5Te9G1vz5NSCZKzY3Qe3uKZi4K2F2GFKR2fJFSu3wh4jXhrRRF1gS9s6rZDhcoiD",
  "key8": "3BjSrsrVoiVdEhTAgDyChR6mKeJedBhPB1tQ9obyL4g17wn7h52ZEgtZr8wcE6wpUUzoPRwu2nHDnLQNDc2qpA6w",
  "key9": "5qDoVfmzhrgSWzcwwZmrLz3cVmhUNkwyXtxuxiGUpUjkKdh8Zm7HjKexkxByzVariAAr2V2ijSkKpU6FYm6ugzNC",
  "key10": "jAtkFw36VFX5i2Gkd2F4JTPBZWphrYGXHzaFkfw6RbpNoUfu4JNoMHRV6YY5E6twofWLLmd5eitHvvcqeau91aW",
  "key11": "2yVhqy7fZaBhasxAfri24P2gSU1re8x3LDxbED5BfAFzUxm1T7av6MoM9Re8Sz9Ww7wo3dDdHi5KwqeDSe7wFFwB",
  "key12": "2BmC4seAwVKhcSnjPr2wwZDKr1Pc6kE7kPVRvJSpWjtax8xFFSpCS5uxWizm6qrmcLpe9aRww9uQ3bUMMz72MZ57",
  "key13": "5CCmDNa6WKJ2YAnXCcXpaqcejdccC5Uk6xZLqRhBY8vDZrReeKbsh2DbQHRuBsviusNrGMJmv9gB1bz12RWoTF7s",
  "key14": "EdC8aFfXdsJh84oXqgNBVdnQCL2WYECJ2MDFZYYqm3529X8HnzpANR8ATeRDrhYDzuuV3vtsSAfVBCvwtkpU76v",
  "key15": "WHzcCTz6TS18HEJTAQBUqCLmcrca4d4uu54HRfPe7zoenPG6M7adtyf1uM6wnN2E6N6cFXXN6iNgMcX4tYXPn6N",
  "key16": "3G4v2jED6pBwNavAJSJebiRwDGxKUtzHt2idtUwSwhxGzZhtZWTwKMMYSUKE6gw69ZVygA5J5XMNQnKQEzwqpApr",
  "key17": "37JxiV8fVY4h58nmCcUewjB4RD5KdRF5SS6EVs633vvBZe9W14bZbUqqhMeToFydMmr7NjV9Va6VtuQ7u21HHXnh",
  "key18": "J8CsX9TqnaMyWTYu2z8dXfg3GfsMFDN6nYfRBbsE8RgzA89SAs9QboVGM81BxGLrVH8zthThhaBn5PnzrWso7rH",
  "key19": "4RcJZcAziWkQ9qhadCFqr4xaEhkL4GKtKYE7p3MXoHwV7gDLDm3ygxh8LT3HUZBM8ofiGLRJ96ssUtFWMsE2wQS6",
  "key20": "2YSpPqqz7Pt4oFESs47VGxtB79TxdeHhRK2JF8JQ58YyNqPiFt3hYivFmJzTFW9MnZDSPhdMRyRKBH9NPXSzdo6T",
  "key21": "KvnooBz6fdUhyJJnjLzrerxCFypajHRoa6yt6LhG7mjHn5D6EeH7G1nLot6kesVd1cBj3eHFhmDUyMJjQULe3zd",
  "key22": "53Sxs5M9Z8zqZD8MvbnLSmqTQhkv2L6QbJLKGodmaLzb5XEm2HMTUpj1b8WMPDDBDA3V2Fz36VpmR6T3bMf4DmQG",
  "key23": "65wYoCreSVheUr2CHxXVf3sUdfbEUZKBzUJf6vd1bNQkwxB5iZvpWYcaq5x9EpckQFRmnZbSPYrZRWy2wLzkJe8b",
  "key24": "2q9pUajPUjTJB93cD9n248tXCBaGjz83s2rVCeHADBwXpDK2kGSzig8QyHF7BKmHLh5YMQSmVJU8JiMkB8xoaYVu",
  "key25": "2xfVoo2LTJ51kHp5JscrxqkTZcuEitxMTANZs7vqCMdgAAZ3uNHrDzaPNSxYqWHDgh4brWsSwNSWC7MgKKcfJURU",
  "key26": "VZTsEPTtND2dakNzVdFijJPndRQo5xSjqjZe1nd7B8xMon1sxPBW6xWVUaQU7DDp4VMTPtaPoVWFLW4fKUE9dYy",
  "key27": "5b3VQi9D8ki9PjVBVt6RAiEhfFzBKjAUGtKLBCxuqYZvfYJsBDEpHQML2uxLzAQP9ZJvJtXMC38bNCTgYcRxmrt1",
  "key28": "4dKNBRFrWyauxbBtb6sJtTMFwv3gjy8FBFAvBmpKqZUQQSJXZaSVK1DZLGZEyT9YnqDkXBzdzXWsweNnvTMpw7qF",
  "key29": "XYwocnBqi2wEFXqSp48EP7a9Pii8DZ7YRaxjkNyKgPFGA71AzEwZQ8zvThFR45H7kEnGvneZ3vJJCzjh9zYQ4ua",
  "key30": "2HKSJ72ECk1Q3ji4bsYdrhhvc6wZ991o77HAG6CqVtD5sckoVti7LV4MvQsM3XZrmUpqsRSdx83v96mDz75FT9Qk",
  "key31": "2erXuc4vTWqafqGbNFvk9Y2UYnTyEzNhq7xPt8gXsXAbVACEajLsXtMCFwpQ1WtiK5KpQfnQo2a4TKyoL1njUsas",
  "key32": "2jHE1D7LxNH99jWfMXgMMHneL4A62Du3jPMYqdFRQmfd4x1ZsduFy4HFvTy61jVYupjvzfJDQNMaqkeGamuzxK4Y",
  "key33": "T3vrwAhVsLzppgF3LcbRhYgvWxwtKL4Z3aS9kYUAu9YSJHHZyL3zYyRjunkK7zQ7DnkXq5ymSNbf1fDyUDm7PeP"
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
