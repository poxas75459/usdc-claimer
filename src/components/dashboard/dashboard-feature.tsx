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
    "Z6B9mcyEZwhcAwrTWwRh7xYsC8k1mefv2hgC3mS6kUhg7avVptRZmTq31UsPdbgjwVtXb4qmMszdeZ1T2SeeXob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnUHzp1frwKoKkH7UUFZAut4JP8QtNXHFMirRN39ZphZQGALv51zNq5LwgTSL1hEebGzYjh7hznc8A9PusUCDDt",
  "key1": "5T6SfQaDAPqBZYRHBidmnuPNaYBbtx5QAGcqXCG1RPUozzG74kDYu83eTrPjdHzRZjwRihu8EtfW4v8fzu5WBE9A",
  "key2": "4345Z3KKeVduCnkm4iRTyto1YADKRskkiBA7c5FhM8bXDCYWxZzQvyneoZVgDXchdF4rKWbVjQmoQkZh6qWFqAxX",
  "key3": "2kYBLyHpQXyMXa75yTst5rXexLZdjuPQr5zazwqemDKnG4EkqzK5iY7Y3ojzMYdfExezjyVECEoz6o2NeDPp1y8u",
  "key4": "25am3gQ939ZYkFaggJa66HaoM3xfeQ6vwo7y3XH4joE9tDu58nWeABnyjCR9iy6wLDYneu4KxRTLN81majV9rMnm",
  "key5": "QqVJ7wZ4tTfakVnNMZMW5wcoTpWUNr83rezDMeWXVJEa3YfeAGWUyv3AQBXHUwmoFf5uyXqfJvLsgCwrxVxJW53",
  "key6": "46J822caZtbQLS4MXuykowutPkSD7ZriaUSwBqejUeHL3SPJRAaanRo6GraqMAZU4DS2PobU3sAg6buZk5PzWb6t",
  "key7": "LxczKuPUS6ctTjH7Xou2qLhSqEUcxz2vSKjK6iEK5YrpwF9wakNAMxczgRr5rHHwDUgfqke157UdpqTUJ2kiGfA",
  "key8": "HUffqyEBdMQzzuofUdMt1VjG8LMk8uDcBXwRgRocnFrJ4dnVAsJzd2mgKbxT4FERxEfcemSWjiPYVBKcp65GeXM",
  "key9": "2TmvPbBTSKwJeaJwsQ2YTV7VaiVgdqgsWHg4TTgiaWMx9GTVLf7yJCbkvpZp8VW74xo5khnaABxPbuDdUkdm6wVu",
  "key10": "5dZJFWJUwzemnihzUS8Nh6Gsd96Yh8XCC2QZUKT7V9u2KzQCHdamwXKoET2jLkQPpY4znTW1RUCJHq7t1v5Fsjmg",
  "key11": "2Zdo12jZmEGk1MBNxbGbCcp6wjbTfNQeW66kVnVGcSCSrXxq8GQBRHXK1zRXsziZWjCTzLDrFzXeNDWZuUh4SsHo",
  "key12": "4Kok6pjjdDQQDoSnyegdztK1gBMxhMYwqSiDuwjHv4y2PEZiaU1xYykSeDJG8tn9Y38LYVejPHZfDSqa5q7g6NpB",
  "key13": "4J6CWMPLQoUQfH5gsYV9T7DxDCDM8FjzqkVRPPzxzR4X66vGsoM7gBj84A9cmSv9A4M4YEvWf1Frw7Ba9qDKZe1T",
  "key14": "52JgmRSEqRZ1ibG7qzEJGHWpoJsGaGQ4Ger51Tkx3X8qMRrBmNxoAfuridGPFxYTjJsuA5gVpN7JZqeQH5d7kixK",
  "key15": "RU9zZ1pBNYjvjR6t6hu426ZhcNFrbH6T8jwyuegwv6yuwABAAWFqvzwpFG7ier6tjpcBMfy7YjFVjbJqN7CuoJn",
  "key16": "2nLTQv1XaCLWje7kdEH784XCEiyzwaGaXVepoS2aDAZfdLXugQn6hw3idJgrv7exuxCtyvMvxusTuTmDDRbtT4ot",
  "key17": "2TzAMREF3VtxniCgzN1LP9VLaUswhTZEUfJN1619gW2d68aFNuRLRvEpUPqboPBguNG3hH1V91kQBefBYVwTMEvR",
  "key18": "4DCCza6P9NWYzUkoDG6Ln1RUZ6a3tNKQwG1kcViimReQuCyZx9y2b8GpwGQf17eBvDXuDCpH3q4Dp3S1tiB8MXsV",
  "key19": "5NoUvWWSyXDAFEDDUAjUEDtjZ1KcD4tjFPgKrjEfgpCgWk92qQubmCQf48y2mnF4bgkxop5RDNcnn47k11k6S8Cg",
  "key20": "3eqjoroWwdC8rwgA1NQdSadNzccXWgu78Z3uLqUfDFteNsYXnoWMxHs6Z3tghcvBvsVuNvxjbUVjCqMTZgf5ifvi",
  "key21": "5Sym5oJ47iyDmH75i38vsdJpbCfeKUWaD5ysiMVmiKokNDMyL1hFXKfTQxcTY6FqSLVVB2TgQKiHHPDR8GAQLaVF",
  "key22": "5v6MSvZ9Jj2cX7BeshfWtZf3kxrJ4iBvAi95FYE1uodAKQ7Y2tF82vFSGYurWd8UqUWXGJnRr4KcgYh5yWrKkMvM",
  "key23": "2W67Q2VcnwYv4RjTVRCW6Tsb1qU4E2iihvArokbQcNJApCWaJYvrkFhPuzXcur9tFND1ko6VYg8biYS311JmYKKu",
  "key24": "HF264xw77X8xeAaBBcNHqAqjt7TAY9oZVgFcRs8uxAGrHZdKombgP59qqeZ4ScfjLZY3xJP6U4ZGt93R1no313k",
  "key25": "3LMgyt7jVMN13b1KtcZZXCh5t9nSVLFojrzG8W8PeQzJ8Ff16JEpLag675B6zEYRc2h528rRgDHevu5h75iT8mtP",
  "key26": "zjWLZuQDdJTjexaD8o1YEmS4wVRpsUgfGqiYxjhQtWdtSnGHbYhRK2ammpfum9R8J1QFGGPay5gQS4y2yYgj5kU",
  "key27": "5gcjrMXB4NT7Sa3RKT6aVbgwaes1g9dgnCZYntJxJCwAQekuQXenZ2CRMbyX8B1jDiaqBu5aoXMwsNvbFnJWCMWZ",
  "key28": "5wrCnPXTAawMZ15NXJN1xbCG3jAJs2U3ZG4bHmc7Df91WYZknDDuT52UBrMPJGETZxxZubLEP9pXNFKsHhDeJaxi",
  "key29": "5Y3hSqyPCVqRf5oDF6socgkuaExdwcFH1qsTKvxNLKqjehNwde1pjn9DHodVoofLM5b2bkpXfcwDaizXfm9MX7bA",
  "key30": "2WBXZ1H8hxams8Kd4kbhyQmCpJHYPCG2U9KxtHHtYSXKMgGKGwAprz8TioS6pCL4rg86Zs9WJFLZEUNo8t7JB7zv",
  "key31": "54KHGX8JY8hQXm2rVdHebHtzBMLaS7VqdRvVhLH4u9gh5eMo5f8NXCugRFCndarN5D7pZnrnhAsP839Qw2vHLEkw",
  "key32": "4cyEzeF3NNB3ru5SRKgUeotziRxokzgKiLQSEaKJZmbgX3yFBTsouwBmqnw2fvQ43AmA4ovgSpFLfUuJcfR19aXN",
  "key33": "3C9PtZvkdKXSwVfJQQ5dxqwDj6bX1SA49JgLxsBZxV2Jw1cT7T2Zr4iSRnCpfpA3MCZYmx1wYbjzu5AyynnrALgY"
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
