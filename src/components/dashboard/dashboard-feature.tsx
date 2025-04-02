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
    "5enC8jM7B5ZXgcPgWTKPxN6ZQn9dofURE5ek9NAXz6Ug3d88zk46TcZaYtBTAhguCUHHMxAuiKf9GxDGvcEiQJrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y26KBFqrQopur2UBDtv3wypxmXFqF6NTSPvvkjVtQuwGdsBs1oHtZAQWFFKjUyq3uDpNfZfou43gr51zCpWcfpc",
  "key1": "4dfG1udoajsPMvCw1w6UKRZZnPkHzjg2oaiBZsn3R2SMWaeiFA9QHeS27VWKfEZSJjzjjbcWT9izyM2bepCbfz5p",
  "key2": "5YGCMErGgWLFNkJ4XfKmud93VrhA9rBS4R9vKyaqBRvK79VZn44hhLReT61YSsL7tQdast6w5t4q6NYVhxTUcHFw",
  "key3": "2jVJuSovnBCNwbRv6NhHSHCN1aA2FmA5xnkULk64Qb9sEwRnKrU7tm9GzyMsyQwF2TGBQxuMJV3d6wTG1DhNwxgy",
  "key4": "4dXV8dFNi1uCnfUmJhUp6s5okVJuVAJdXVswgKKsiF81GbdRgUJEsxKLsFJQDeo3o3fPPpWqwJivNWqpg8p6Jndz",
  "key5": "2vwYRL1Z2AUPENYsoB8w7npcLLXZvEUNXTuz4CUwa9hZZdVEYP4WPhSjdfTC1ADhNQiZ6qYxF5WPK3zDfm4aKkmt",
  "key6": "52MshERwBPbvvWuF96GBQVYvQQJhuWDVaqhZo396zVPSTZyx1c1bSjWpGNNMrXVa4CvBwZWSetnEYtEbWe1UWbAR",
  "key7": "3CTWnxXb8Ff8fRcEmQVfqXdJ31dNkjfL6gdQ8WpnEFFGBEvfLkzenMNinMJRym4AqvMv311xJEymDgKZVyDBnJCd",
  "key8": "5UovXM7kAThvZ8W3oqBytw78VisGZgXHWnySKERBtNJwwhuCEuk3mVUK2fA96JfiAde2qTugtk3d6yTw8c9o6pQs",
  "key9": "2roBGr3WtXVYCfnrBhbyi9JcVNAjkhgLJvS1dRdUNGm4imMnnayeYGDYT7yNndBwyCJdXNe4jXyp2kRQrGQ4wNVh",
  "key10": "51MCTMFAZdHejwNUf5uvKnYEPxxLShmFP9xJStGM6qz4jRxxw92V479U3yMwfQedfpos1UmGN51fRr5eLkfAnfeG",
  "key11": "21PZg6dzYoPHAJ8HV1kTUT7YfBNMTg9hWvBwkwstTG4dJf2iU8TASAJjHWbb25FRh4oPPD7nJSJKYg6gBfAUqdVz",
  "key12": "2RnSBKodTKXj9GZuN4kPJWwS4kAsMJvQ56hCH52Sm4ucCiLPemGoWGDAnWMNRWpEMPYWZYTbmoXqRQYaeB2hHFJu",
  "key13": "2kyqVDjWBSYWhXpNwsf9vUjUFav14pmSnCZR1bUT52qQj73TbPPuSGfCcAwT1drHogU6NSvPuVD7Qz2x4W8XJTiG",
  "key14": "3js4aaAgqCSVcwwoMpSxcJnkC9RgHEdjqEVMvRwytE7NbkuvdFhGR4qgU6zQ8RzwZZsnRHsaPkzujNHPwGBRqQSr",
  "key15": "3mmSbUTzA6brZNs9qEq3WXk78d1PCM7bfodk73jzKnGiX4MAfd7dQW4RVTwRPoXL8LDJaxy97pLE7SZ6sRF4Lxrt",
  "key16": "4wycRsMWEUSJCHaA82kAGvJT5JBPs5yCtat2odKY9f8zKFq8r4ia91tZ1FRMaPVsjVxCZoUA3xMyPxqRitnKsH8P",
  "key17": "4dM1xe51GiSBA7FWXVHvkW63uc5nDEoGfN8BxszGoS7j7WvLgPCXzQ2m81y7aGkB5adiLq8XCzfK21znH29UcggJ",
  "key18": "2WatR3RdDzA3WfMde4ryaBZznXyoG8WaDs8duZe3FgNETLqdjZ3RDkrigqFVL6W1gSVboN2G9T3cW1bMMdLZ5X5W",
  "key19": "3PkDeWzP9TvGyNM34E36mvgC2aVxAatKapBUWFeWavTMFgF363BX3qY4RdrUJKpUHghdPAj17HvEzoLhY9pQY624",
  "key20": "3gkcSgxCvyXuYH36vUEGyYw6ar3AUDtc13RcJf9PbyNvXG3d1ZtEjmMviRZ1bHFDRwtzQzr6MHNZ2o1rPSykLkyt",
  "key21": "d6nYcxXAs3DtC2ZtNSRsshqoYA1ovUBSvRts9234S8tDpbeXk5JUPJ7e5wELwncY3kg6eWnzSDSDYsW9HGDcqMx",
  "key22": "29KTvacbdbzVm58ah6ieMQhxtsTKn5ip9SYxYFYpWFRS1Py2J3dNc7K3fzo26U9jhiA4KBBggqFMvbFvkfLjKsk1",
  "key23": "275oLZmM9JfW6eTZosYqD6p9Ut9CMZ7sSa8XtZMsN2NJai683ghSku3dKhM6WNiEEaXnwHJd8unzEC8PGuCUwzFC",
  "key24": "3wLAjQt7a8SVh64RXX3BZZ4MEh39Pq1fn59b5e9sfgtSnPLBEqhvqxNaEJ9F6rcr2nJ5ChptQFGYuUuC2YVAWv4b",
  "key25": "5gWkCeGuNsvHNZ6nz9wUXBww3Cg9sKvVdyF6pt5FoqpAuT5dPvCd454NBp6MGSwxKBb6s8f9nrGhBsBqshGtkYB9",
  "key26": "4gBMj9oZ6VwpkTPRttG5VN6GUDPZEYQbooT622cFWW2jnP4xZR7Ptj1apH6BAKiBpRrBHW4E1My1bwEFKPwspG3w",
  "key27": "5jZw2Ts3YJUwYVKhEvezNShRHGEoEXKxqBeoqNbpzqrQgZn2saFR26cKMq4h686XMss8FXNNNtVQeRS2YgDFEm6b",
  "key28": "4KMRgCqN9rUzAgLa44gJTdQByyR3kiN8eqA4v4Z86ztqFBZ36LwgPEKwDNjh5wXYLzCTZiTdP3EEhvBngFCgXGne",
  "key29": "586U31oCtUVp6jkYB9TA5pPsatTieRNjjEWRdP61ig3kKcrwUQsoP2RW9DmAGZMmqryzrKJ7trLQY1JFvQ1Pp2Ty",
  "key30": "hKdyX7s5iCyMVTsjhJ3pbZyjsXd8RUzcsUiKpfGGKELfaUFeePti5NLg26Sg2A2DbhAjoUU7XCjCTSYRpGzDcLB"
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
