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
    "szs5aQub7udpWLmf5FcXFWtsfdHM6D4E5sE2Ku1TtocBkXsnfuAv7Mkr5MKMQQYwfXCuGAxVr4J5nLFS8JZX7r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RwedofXSRcZCHga7doqYmCaVrAdSJexVEVC8uQpYBQg2Bq6gsUWcXLFCp4AKvBNqPzMJf324UqUm9byURp4npMG",
  "key1": "2Xs7t32bKuJuqFGy6gnYTmSkUmKs1f3xsp2Z3163UfdW2KVvJN4FhWmH3H3JZpSZTQ8m8b4agHuZ5LFeGi9a7DxP",
  "key2": "4RzF7BnHf1yCnFjEzPKuEsP9tvFytHvd9RPU3jyfedqhq7AAa7zvyKj6uKTWs3FSaqRDZxcf9KaRUmimssKqcVGY",
  "key3": "65sr53GZSccMa21Z7279s1G2wrM2qm9P3Xg8Ug9nk3mEskrESPVShxHLzXjw9zSNy5GH47utU4K6qu5N8bZWzRZL",
  "key4": "4SYgrJ63keSYeDtoXQQffyKEXEoHEG8oaqJWwLqyh9ksfjSf2uUNmbJ7R4LFnzuSiVRShmdfcS1YUmMDjtt5D7dM",
  "key5": "5qcEk2sjXo5QdnxUhGVxYfP1Hq6TZ6wtk78CEdb2dvDKAwoaTL4tfotgaaQgppdr7LrVEDDHTa3SobuyriFYNh8c",
  "key6": "3UWkvZPis9kXWzQs5ytLNekWpCFGAA7hv52HmSUkeGD8fk18DU6Xvtgo9gAJ8vujVhPAD5Jw5w9MMQs3J5rD9yPf",
  "key7": "3wCdM11G5trPaepSZ2A69njHQF7MaeuopZQUz2qufbx8YdLebmJCyq27pLpbXy5zNuttvCmCFxcjtgiXTUkAdPMP",
  "key8": "37u8JMh8kvkVsRznfdJCvaRTtMkTa1C1vkXYRjMtQg4eRB66D9npoSqGbGCuuxJsKTUi9KaNLYoMZ8XbCKfVX6AQ",
  "key9": "61hQd1SLrKFWBi2utvdXp4UuK6PcSXnx6cH7ozTNgvSK3qjAVfyJN3kE3eggFz3XuwWXyYw1it8tLWJeeqSXAZyB",
  "key10": "3i8Vm5radenyGNDwGUtih6B4R17RopwyQStHndDHfeJvyU9SL8p2jYsBGxTC3sjuszUTz35z4C6CWeRzdRK9vSwo",
  "key11": "qggzepdxXm6s9mutQhncUQYvKfcMpBVEsdXexbGUsi9hMtSYXWsMUNNbrzeacFCaE14YuSnxtvQePjGSwB6tSA3",
  "key12": "4RTMyo86FakSygn1i76Mmym3v9R6sJJKz5DskVoE9yXvdPxX12oVujcb4N8AA7SeNm7T7CuHAyDub73mDFvaoUHX",
  "key13": "4hZs57aeuFyRHYXrKPfSFv4k4zSimTpSZ7wukFRK9r3jvxyY3wU1sQnRq1QNuHsnNPhJSohukB7jE68Ve39FgvSW",
  "key14": "4NGrWPhQzKadCwaDuLqHkwr44dFCHri57T2xhc1NgD4svmvL5JnG7stZpBTrDqBn8uHxRV468oYsgvCf9iBmZNzw",
  "key15": "32azo8GmqmMTCQkvZMrJwEiqmqY8aoNJiDGmm75qTTwKHGQ7cQH1V6jn7zJhSbvPhD22g23g2iWedj6hLJXWfqdP",
  "key16": "3MdY8N5JzZCZ8C5CbugJLkzRdbHYzBWuNr8md4WL2oqgYShYRUq5UVLzYMxidJNDn3XfXAvUKLVNDLZ3T1eTic24",
  "key17": "5H8LkkaTNyy5z3PYJkcbe5YbY1pxuGddGxXitmk322QnkTqfxZUmASKdJRMvacy8Mo6KZw8bwfcW3whd4GsG9WUS",
  "key18": "4rWECnb674bqkVXQ3b8C17yABGXKMuTd5FxnkFdr3jy1aYTsTBTRBBRbMovJmgkfHvzpUeGu6TNeSLxFQoZKD1vi",
  "key19": "5373M5hCsEbzcDuwy3oY9vMHSu4Qr9zid3Vd6Myi2CKinpYwM7ftx4KUwxMtQ5w8KwuMZmA92ZyXdAEoEEA65d3b",
  "key20": "2d6Rxyhw2moqQz8JKs4YKZgQhKaT5STbxSqRfMHjwjnEouofnQ3TuuK6DHvXFw9DvrrAzcNWWC2F7F1VNZH6PC4Y",
  "key21": "2y22rLsLC1TPgWYgCrHMhqrcngPCSbVmbxTC363bgwR6JSduKgBTnw96RBZz1hx1vrcLXnTuGxUHrs6UBiRXNEhB",
  "key22": "3ZTjnqg7ZYD45REcuB5AbwJCDzuxHAQGEjzD4EYHqWKsEYgTC8Yf42qmVgkypgCtHksMhM8iZuaCmwfvJ67WsZe4",
  "key23": "5mFGztqzUvgxSR9anoRftRnc295qGfqWfuvEJNnuBiXQri8CkmL38ZR7SMhRfEuQwg7QurCgF5GVzfbM579g77rv",
  "key24": "3wWZ1kNLAUftFjpY5H8J3zHXgPvnoKx6P5fmd4LYJYNPdXgUvnGgj91wVHMSGPZiv2jo5MAmHeYJ85wfdTRfqj6r",
  "key25": "4WJ46abhHANo5rJWhUQLqMgScWisbamNBiZ7cXcZUrQQQBvqcYT1xXST91zUBgqAxWsbva2Kw7w9KMEqYdxRL6W9",
  "key26": "5tDNz5SW2dGkcaFErqypFZtufLQhWHz6BZL7ktYhd1HUq4KPH4UBgxeQYpg7BaQP7L4UDirjL6GfzGMJNdEKbY3W",
  "key27": "qxZ9KaVf9zpLHX3sULNp4UMou8z3RQTARtsCUi7Ne9EMV6V9TwJdPhDKMwizQM6droY6u2CXKxB1M7WZeKgTb9t",
  "key28": "5RbeWL7hCcmxqwvgvsEEguNRVExRnjsNahdYFezbaCeXeZaK9L7AUTjzPNdut7kdc73dt1n3gBs1HLCkNELeX9e6",
  "key29": "3mygZw1Mozbz8H88SnyR2dSucet5k5p2WK7qjhDTqYJxe61Drwh1MXZHH356gysucoTs2kPnBEt17HNMLAt9vLwZ",
  "key30": "tAzytVnuS9DJdHKEoPsv5TiXKcNiMQvorojWwekr2LnSKnSnQ6qq3W6t9egzZL59kpWgaDEFe378bEZY3euqurm",
  "key31": "mcifA2qXyncMwyTYBpkWH8VbXaTXGPz575pbrZTkxvJKMWqkQyQRj2bTrqfHBhSZDRyUHsuATAGtFR9DqnUokHm",
  "key32": "3KXgAcCkVdQE5QsJWPNHd26GDEUNa73N7Q88K7ArtK8ZHKQG7ipBbuVT3hTt9cQGnTBF2uzpd2jKY7ejEAWwiPU5",
  "key33": "33vab8VyvWhVfnfmbbwLgsR6svN4LfYUzzLYMrP3dQwimTV3FdiCTzTim2zQdEbkEmL1g2eCXyM8ZEqP4PGm74hc",
  "key34": "58uJnXLMBLgeDeL4QVgmXAwJKk8oj8fSgfq9eNhMKK9NL5gLXUG3BZYZWxMfzCzjduatMxwcn1WCQSw1HEyZR6Mt",
  "key35": "8HteFZMtWRcxGdwrdwFsAuS4XmdkvC9cG3iZKmtooxtgyzS4puhby4c6b6A2uJJrcdaUfYyy9BYcQm7MXrCuXBL",
  "key36": "2ESnC6SakdWaz4aSB4HUabiN7oyAUbXCLSX62X65VJdsAdUZ6GisPCY8KKJNte9u8er3BX8eu3ofvu9XyC9PVyn"
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
