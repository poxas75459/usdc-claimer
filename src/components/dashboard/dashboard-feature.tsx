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
    "36qnWLRpwTTLue2ESTPvoc1RkXXVow6irp7ujpRSFstFnNEMQ8eqipkwZAhUxMeYryxuzmz4ZUB4JjdRGk8xQfeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwmAjf4VWrFKfX4wf5Jkd6aZCJhRtZEXcExQM6EiysoeANxq2JmdzzF32gcKXui3Y3MseGwoj19YibxUqAsBEb9",
  "key1": "4uSFgTRb4SBRMZccdaaW7hYDsknzWaBNNg3V7HV3gyN9gUUzitUvfkfHBuud72kUDZgVxdE9Hbunuz5VQcKquMTg",
  "key2": "5ukC3xrdVDPSv5ZahisqHL42gJJXCWspxe3AkxccjtG1sqym6CQapfa7LGFfZ5DGSd1xHFJ91392pAUDcWixVto5",
  "key3": "3EXrf4MHdcyKG5zv4RcLCQ2knJzYcxoHPpXnxDMo1jAJ5H1yz2sFrETgx8hL3NL46c1tjK7yERLkMiArCUn18Vte",
  "key4": "4YXSU57kBxdxSXKBRJth76k45doweh4xP7VjrVJstuD2162vTLQ4kk8xDzmeGK2tEnQturqnkVRADuBdBU8QEMEb",
  "key5": "4B9jNoFKFndGGVoxqwade2HVR4yMP1P8QfrR4JmLzF98PjELyFJn5gfN8QXASHkdexArFojr5N84h4RHM29tz5Fr",
  "key6": "4nf5WEwEtwKgYbE9EsLw9PkQkqo16wXDWAjhbyQTwwmm1PAgowJ2QYfXFnreV1vQWQj5SxU7NkpmUNVgsghWTkSY",
  "key7": "5Q5Ep34CPv4ZwmJzDqyGGZsvNCmwjCGofMx4xeTPfZUmYwMndqtg9qnHN1EQsqqxK3RkKmwmgTpatz7G8PNWSJiN",
  "key8": "3ECKDhdUezcJTk1ymSAeKMxouU3tw9vg8ZdKGvodHZXjjWQrLukeWJfs8174Yt2gcTGTt4kzZxonaw9tQRRMgW9P",
  "key9": "62uKkrkK5Wsunqqm8UWPKypV2fZSE1rn8tyPLVbRBwGVgckjBkKXBgFuSa9VDg85mzqTX8Pde9CSAhPPg2ZosTKp",
  "key10": "3qg3EYZRZWnRB8RpYR6oFA4oqyTMLKzPjAyEBSzkBXX33o7jL63Nqb11FJBBVgcpDUgU6ySY4Y7CfnbK3TddvRmP",
  "key11": "4dGtovKwAHdnXQyPttyzim7UDFkaLkJahfrwkib73zZye2sZzMs4e8f3d9qQeTtCPLog3VJxK9u95BXcYNFRFzb5",
  "key12": "46Nv6NeBxcFfDaJwVeGFtuXUywWBNEzStpV9kZfiPXfZnVde7HyAwWgsMY5m9nTMtbTLigQM1uZGUsjiZq41Xuf2",
  "key13": "4V5gK9y4HHATYo9rJx4zbrmtfCQG21ZWZP7SzJ6edTQrk26fqP55HHMHRC6iS6kABYQAVfzed6cQ52qSVSB42Axg",
  "key14": "2C6fkX9rJ6oeewX5P55NoxGCyvhPWah6zoxsMyRrojSoWJPZdjAghbr4YEUNDyVCZfFscYDb34uGgY4ArEjA1gH5",
  "key15": "5EA6e6nM4xBhKFSRdTSp4gEUWguDcPHSNah6nXULMwGUwFA6tPmf1HKZcKsZeLYNKXgKowJDpxgUPjX9G7tn6Sz7",
  "key16": "2sHSKVKypmvMAN1MoWKXUW2yTv9AVMdo5jSvGiEAiutVpy1twHiSi8nn3tTYzRHh6EHfeNpXPN2XtRDpgJKBN7Sj",
  "key17": "MQb8iqdzr8iFPkqp5qAGssx3wynLA42f1sRpJr5q58p8XCdTbD8NiN5RrnwhDo25jWfXNjtJ4t8kWvJh9PaNCpR",
  "key18": "2RY9sYSk3FP82t7JEBAAZeD9ucP3mQS2JdttBur1ofUpvxUSob7uTvcnFEvtXnhmMC4JLQhnyMgaYAPHpAAWikmA",
  "key19": "3pr28oH6kRJADwXrAVJbEaQPUz8Rv8wedPcHiNh4hKhebvYVKyA3SdEyHWzVAC8dhHGgzAzjfynepcZF25JtWy31",
  "key20": "fJMYGxFkCm3avEpYwcArrCJQwEn8eWYSZcGpktCw6nEfEhUAjb4J5hVTHFb43njnmwm8vewbe9nSPigeCZzr1ad",
  "key21": "5dSa8v2wPfo8qA5LADUP5AMztko5NQ4eaDzqgFS8WjCgphztCcDZ6L8n2PjAUMNu5XphCm8QKTPYSkpDvhLUF7Fh",
  "key22": "4nphiVCQEQRjCwgRGeqxLEN3J4FD5rkCWRm8feFtpGhy6ut2tEDBkCPzwgxTe8Tqosav2iYPfoUpqquerwJQ8NHF",
  "key23": "xJdk5ZALkxrmVE6WcLgAfGqSxsoxSc94v8Cean1N56PQsjAdUcikswkXmHKewMuPLiBmcj1eLLgR2bi7ysWJzdA",
  "key24": "5SJnXHxgchc2gqkbTGJvzSFAz9WBRqXVKiWAw765x6NPtDsKLQaTqVi7gfF9G8FKbXnP18SXodbHBncu8GPbJkBn",
  "key25": "27BgLFE5B4iENcM8FgV1P8w2sJqDsMdwiUTj71THUbLG6nisB2JTcFnwCgHoBF93FcURwTN68PhHvQoatVCyubJb",
  "key26": "2FLhFZXiNwXhNgwYtLKRTywTaA2G7eVKUWXjnZvpmek9ervcGErMxGhqUb4r5Z7oJXnFiuej3HQmNyYrABPAWEw",
  "key27": "L1mQQ33JSwZxKnSMkpiRpGw5mVDDWkCxBtRo7Nr2m7Mu2nFAh46RAbyC4asrbCRFtou3egg1YeqUr4kgis1bP93",
  "key28": "34jWqNr9E2961SRZyBskqr8L2dJcYi6S9Bt1d12LYUSDAbrBpgCoihWs69MGm4oYZFtZzjCSqvbkCRGGUJjMJzVb",
  "key29": "47YP8n3fg75SzAEVYygn4r1qa2CqbpKm59aQtqffL89ajj6MrQjhp7BXWqAM9FuJTK8TvyhHU6gysbsBsn9eQJiJ",
  "key30": "5vjD437aEA5DvatWxgp1Q1MEgxPPex74XHi3rcX2wUwy63Nq5us2r8ctM2gD8CNcGfMuhSyAJ1RNNaePpbdbVgB9",
  "key31": "5MmWx29i4ZZG2bcnMYR6zXTuc21WppVDzb6Nse3mDYHsDMq7g8U4zuxrnSye2LgPVhALWZAZ12W76ty7MGYt7djN"
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
