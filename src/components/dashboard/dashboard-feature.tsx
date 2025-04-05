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
    "2PZCKeuYK84W6JQE85smzj6FoDjHBBqy3HJDrbAYA4w6MGSZqSBU4dGi5KaKK6g6Td9CnrnAKVo35XJZLDToUAVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QnWJq5xVULx8k7mmVYCd8hXxYUJcC7w982XTt98iJrefsSkDqkXEY3QT6oTjYw22qRTG9YUHHFh6aAChw9xUT5V",
  "key1": "33WFq83KiYW7v95Tmv8F72fZQXu2kHEh5PktECxo21bdHqbqeHd4V2vsF2d5HKgfSPxZrbNiKcQ83mFwcjp8Ejeb",
  "key2": "3mGQZqpEVWdvXqYcDALoAGpMHzS8Tew9hmMarMyiL5tmCwMCrtMrePD5D5f3fNV9w2W9wJg8VpRrF8TVWykfKhWi",
  "key3": "5omAvJLRbWq4ZFV8n5QeegqWuoyw7gZt7V5L65uMEPrpbBB3KSoZ6nxhjFAt1xFybojXuMgMjyuAcoAf5qgr68Dr",
  "key4": "3TfQLsxV62qf8RnhTeZDvFjB8JTusUsgnTVi4nMamgPCAh12cUtbkJhFQ9Yos42UQCEzfL13qxavzZ8gRwMJQZDP",
  "key5": "5yfUfCH3iNVrPzo2dT3fQ8iFbGy4DoZuKw6DMxaFQb3SWky7JbyZn7T2n1o6v1JKAWsJYpzr5bdCwgptFZF5UeXF",
  "key6": "2yqGmHhWczmjQjDduGHcmGzpqVjcXwWFPyE1G9MZHZkCkzStM7vcFvmNssk1eYZtGUdsuvHB16KamGmmyzhqUQa3",
  "key7": "3Rp2CdBfTQV2VLQrkkZ9PjXuUZG4vbJXR2ZAR6n2eZT51X532qN9QkxiFuBqPvcrWJWt8kKWQeXC2KhSXgfXknmZ",
  "key8": "4gwRo6sHg5nv9gnjC3mabfJPASmafSrkoSq7wvU8mZnaMxA5tkmfKN3zxSTohXovd1zVmfYrsP7YwpKUnzdjTjug",
  "key9": "5brxxFJxkeUsiG5mAykDeXgXiPJSCW3ar3touxbvJXXevAVPhBPs8Vpq4UXvXnQpWtzxKbLHPLUxxkJcNVUiVQTt",
  "key10": "27uJgZNhdSPidc9VKedKDCU1rsCNw21XzoiT5NS558amrvRagTrzJ3M1jcosYPjQVBM78JfpUz3GC6bWuvadG6YM",
  "key11": "3sSerK94tN2wY1h12TEA1WbeyF2VNvCb4fht8jCpq8jtb9j9TSNHdfgopsx8Rs9GatdQeTHZvR5ZNqTJztrXoxwt",
  "key12": "2LVzpMeFqNXExKj5h3m3nqGLnTvEdoga8FmqT2fjZdggdqiQxU5Pm6iWYmHACjfEar1MyY2oJ62hbz3dX9YW8Z3L",
  "key13": "2byixktLbMELSporgAuN11eM1JVTAtZ868cRZu6R8rFEEYcoWnwYXq7qVuqm9d75c7SUEuLPVq8pv7dyPgiRLjRQ",
  "key14": "2VREh3oiYtze4V1y4cm4P1RpHgYCs3LFugeWxcnerPdsuESJ3DqGNyg6zK7BgU7DrJNL3rD43RN9u4mYfnr6DECX",
  "key15": "3uz5cwFxX7r26aQVB4bHRMZSqVXeHBTnJgSyJ4wKoeG74V5C6iXP1BnmUGxJ7vMZEHgz15BfhZg3meo9E7iAxMPu",
  "key16": "645irUAi5AxJCwNHQEmTaHCBG711aWWgGn5iCEQ7ksZQZxvKijUDFZQV5iv6JpERhAVKYyrQp9eCofYZcLJkt7bP",
  "key17": "5FAzMLUH6DN9kDAzPUqhdmR48eSpttwL2FePoqQH7WXVmg9PjvYNbDgFSzmDk53rq3w2PeZgmszMFyf4WUt5Bdex",
  "key18": "4jn1Kw2cuCr3MUuEqjWhFm6fnLaBRgJowoNz8C6vc3yosKFXHvZxW77a32PQAMxMoRBc1GRKjzrPw8Z9BpPbcmSb",
  "key19": "5ZXfaHTAyfmTo4WwSXK7R6r5aAdtET7KanjWRRjiUZAtB1wPA54zRnNKf9JZvN2zVMNR3v2Xq76cNvE63nxRodHC",
  "key20": "5MvNQPJuKw6Jif5SPKeY86ywPN55FpB27UwkVv4gLmbh2YtdnUHtMu9EZfY7PXwBCqssCMsJiiMf83zCQ4NH9JeD",
  "key21": "4ZxRxqDekVxKXaECuhLGMKNKm3wDjBJihFfzvQkffUQFeL94t2KHN7QronMASBeHKAWgg2fSsBo4hnwQaBAGc7JL",
  "key22": "3ZQPer72W193uGH9DDERD4nRYRGTVJrGNkmvYZaANY76zd6UWHKeDXt5RwfEbyy4vRrBvnKQRa7MTw6e3A2j5LGL",
  "key23": "5RLBijMQFvoucfacFwfpiu7sicWqzSTHtZeGQeHYe7JmUZE1BdC6bEY7PmrdQoDtoM3aM9yLarVwkByk7jS54Mkb",
  "key24": "5wK8jH8JSP6SYvfoewnACo4nC9ADCCg8JxqFpygGq8UGqGnkUAmFkTWsjwC5MQoDVTYsFSUZrcYcReQJDoWGovvi",
  "key25": "4YLPPGPiM4s4895JyJM4wp1RWznK6VyYR12r2zf7S4sKpCsQa1LkH2jTTFNmQHYui9uYGspWWxk2JuT82WEYtxSi",
  "key26": "UC8neBXicZc13ZyMeDCdgqfZvoShUMHYThYB4QCqt7HYW5c3npNHFRyBBzcUT2qVcTaHj9RFobzK2yoMDKg7szb",
  "key27": "2f9KUWTyYsDmVuPgP3A4evP2Bt17VFPDMmcJDwb574w6ksu7Rqq9bu6AURh9PFP1kdxZ7CjLREH9HS774DPYZ2US",
  "key28": "2XFZiMNix3Dtsx1xoUb3nDAUyK3gE5QfZyBzXgcFYZoZXUuqpECni284AT7yeGPuGpmYNxtwgx8s5YhsTDF1Q3mF",
  "key29": "2eUYjc8Li3BzD8rdBVD7rCg2tMroZESfN4hhCaxKo4ka1wvopao8ZAytXDgQ2g2mxkcB7miWaZSDHogwQy318tp6",
  "key30": "3wEGrQUqg8BccbHx3fvekSRJ2SbbXLr8rRacLcPunneFYvvdGnFiyfrGypbp98jUp6GBd3QTxQW3qipTeCLrprqW",
  "key31": "595wzykXQFzNgjzFEf1FCqx7r4zvAFeuLocyzpBd1qwgcQckRpVbihtZoPWPmE8jNB63zj8Fb6kviMugyimaEWN7",
  "key32": "5oX7AUxkrJEerzaE31ytMdLys5dL33S96s4BrBwjkKRdF4jq4nCLYapTyCP56qB8Ai9a6zEqaP6TJjKbgahhYmDb",
  "key33": "2UTN34P8TUMLZXQcCkEa8WRJSet1E6Au7TfVQohoaupkWaJBexZT4xdjFz1FRb56Vfam1ZiYaU25q8zkKV3oqRv7",
  "key34": "oLjMzvZ48wHSmMigojbc7D9GNznqdnXB4E6hPB1gAgg9W1Qwzuc5dAbN5QayK2dgg89RRcA6gqGWPrHDBrucAVW",
  "key35": "4sA71WmzUoLQhNAJLsWYc9jYkTxQnfQ5TrGzBpbbNUmN9YDGZjKw415qXtL3ooUwvXQ7KR69k9dA4VmgywRzbx7D",
  "key36": "51EwbvYEEGnP5W3GYKSH3p9JmtGsqFCUxRwpSw29ht9iWPGEMwhzNeSs4E6nHTCTQMdZFvgdYEWNpQVi7PeMGkmx",
  "key37": "eMoSe6r4PPyp5q73eLCDdj33hkLrJAStekP1Qa5y5GkGsTgCrKknmrysNqnYoCQnV9c6xxfkS1eEiMuaq9vNnQL",
  "key38": "59NuDuVpGBy9ZvVBHhZn3r43Z95MZJF9tVZLBhmTnD1A9DdTFUZRQHQjcaDCAWgX9AyNNepiCvwLUkfzKqJ6atTQ",
  "key39": "3qr9SHZ3HozUQHBaHi8k7nn4f1yDLaUZfRfjtFZNFPaAruwTtCk74EBVPquMfEJyrtHB2qRptzMAkvWhisKVsR5",
  "key40": "24Zn5gsyZX2xskrvDdyp1nRa3kuK5mgW7WtAjBSd6qjgVmL514bKtt3aPAJ2dumocereb28H6GtiQQAN3r2ZeByH",
  "key41": "5saWWbdkzBDcZUrzNEKRaCKvmhgkKUHQRYbE1s7fSrptcb6zUpC3qQgLqiMiRUuCFh44SW6xh8wguhwNmR2NaXfG",
  "key42": "3FXNC3LeJjbw1QxuUYxcRtBnrC8S5AA4eRv7izj7s6tgNJN81N2wGMwjaHqymso8zyX1t9PzYZibxdqXYk5qFFZE",
  "key43": "5cjVyqpwZ3chjwzJf9UMxVgrbzzfQoVrM38aDR246vzuhGRFLcShawrS4wLHWVeCUUJLbBvUKorrnEH6Z9ZpjayZ"
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
