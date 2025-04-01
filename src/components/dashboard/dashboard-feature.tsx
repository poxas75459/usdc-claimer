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
    "2EuDcnS3wrmcP1imePhZFBu4tkcFQs5txU8EaojQxhmFAuRfy5o3BkNvpvj3hzHvth43UbUYziPnThdG5HvEx6DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oftY4ZjcqQK85qKm8wo8zBPVDuTzjrgE5Ai4LyvBUXNBsnqm3pwLWVsdU73qnCDHcdbVQYp4opeEUmvfmAPQBqn",
  "key1": "5hWyx5ZM6mGVbZw3BUzXtG72r6nQAUFBt6g8HQyJfCayAynxAP8Yac7QxBazH1xWkcDBP2q5VR9o4yxXPiD5A5fp",
  "key2": "3RJEmhq24ivw8woZDBcitxpXnt1dAij82qPiagNDhDYPfYc9uytkLCD1QZjcwqaWSePhwBjjesUBV5uTWKMrwm2a",
  "key3": "mhiedeJMaaLSEdNz5dthQZEwsPFt5JCfNdrEyecvuL1A5ofQ1Bihi7iBp6RzD9picD3d7pUQFmfYdojUQhjE5uL",
  "key4": "38pqHoUEuG7GLfvgKbsV4wh1GCYZFLjCSxSf6VFrRWqn51RZ7JDhANE8YdKAd6tYzmzALSAke4LupKEiJE91wQcY",
  "key5": "49AJ5NbGYTTj8cb1F15aw3jPkzcgT8GnuYLw3hZ5fff6qPqNqCH6wq9zEYkdyY4Qv7TnWS4Z5FoBPhZwexZMJwBf",
  "key6": "5v51dGozpZZH6mgTFy8W3noCoatphfBf9Ws4xcMTmtXjpnczmYRgUGYjFwTCmGvuWzmJP4ok6oV8Yrtjts6M9w4Q",
  "key7": "3mK7DBJnK8usuPB2EkSAryrW5EUDDK5rhVtxaCBRkm3FABm1UwxfbfT8kXi2dzuN54U1ujn2N2tHyLBdt6qqxN2",
  "key8": "qLQZAQczjSHcQN1RLqawgFyRj1V9sbzW9dZ1M6p5TwoyUNZPiY3H7MpihTiGXvd9i5JravduV1N8nkxk4ys6BWg",
  "key9": "4WNY6CZeLSUNLv6zPZZ1wvBQBYHfBSqssuBTyaQT22vXsjDkcojfAhFYnHCugNjDBTmBhhV9EtTWbk3skCKPF9ZR",
  "key10": "3oqmZhsqhsx4Nziv6vdv22CH7ZQFraxvT52oCvo21VAHgjvrUUHh1TqBERvRAnGzbJoyC5bBJi3izHq6AKS7yajS",
  "key11": "F8Ao6A9U2h9bShMwciMq6usLTnAtG1hk6c6Zs6qgnfe4LXX65f7VcwjW33dzAMp1FjNpZjBA1pxUi99dVQunm9X",
  "key12": "4n8fTtvnxJnqdkHYTKCWibrxj2NkXBdsMYgNT7dmjqeFX2hvd7zrrtXCFP78Y3ovwv2gsg4a3nAFrsJkNacxX139",
  "key13": "RvhqU9LH6Q9XcpWTJXopHuqnA1WRxQpSaqTL9Yc64xkp8YXmHY4eMZnDozrCUyTkVNuHtZLDXeBRGWAiDZK3VzZ",
  "key14": "5tQiA3jAmGRPpbQBA8aRe41QvyA7nhGaGTBKRH7xcuAqKDeJ6cqpSkC9JV73M6P8o6nuAEKFqT1YKm6KWdCEjGVK",
  "key15": "4gMF19bsMWr5Nos71iqj8LCztTkmTxcRYmMecaLd5nTcCsgLzJgGQPfMP3nMkXLUH3wx6GysYbhasMqKULR4ZG1D",
  "key16": "4hEkphrZfzpSKcpBjRqUcChQiK3GcfWDHwZ6jH9rZWEyjMijeR6yTF5Umq8bhNBzS3ycGNWpCXvgzG5KXCVKeX8U",
  "key17": "5y5528XQV7d8uMfdLPvpBe8XZNbUuK6Cu1GuiSoExdDFdsfkWXahHLgnHKFCoRAN8DQbFmidBANTsddA8XSmKUjt",
  "key18": "56WVAqz1R5Tod3ypRBmHcrPZeTk4qvca2hBcZYMvqJhVt1sSLwJGZMTpJRoTnpqA1PBfBoe6hrLLG9duyZaTomt6",
  "key19": "127sJk9muLuisZQuv7Dt2XRYSmkEXQ1tKBoQfv3wnkkZEFQPULP8Y8pY88v2UyEebygG8H2iDY6yEjab6gwAUyH",
  "key20": "2LadoePE27UzxqGxpzBGTismuskgMqiod66PGS3xWYDQakjb6JngcWYNU5HSMYYsFXhvKwGDceTya6XWUW7XGvtu",
  "key21": "617aSnBeVteGiNPZySSwqn3CCaYRtx1hXPcT9sCJdq2kdGWSD6USe9swMyQk72PemGpYzCe9dBCDVP9Kdn9pCiBd",
  "key22": "4sVZwvGANbWSKgLP2oqUR8eErB2uZ1BToaZ1CHEDoMHcY2hhNS3VvUn7kFCTk3Rt4NpEk89beV9nMVmrb9DCaHoe",
  "key23": "BAjQnxqXePgM5bemJys6VLgxN5jpCp2JjpZmWxu7CvuEGyB6zxKJZLu2V5GoPkHkrscP9qM86MVXZsvUL4iV6wY",
  "key24": "5grMaRCX3G7xzMQTvcSWuQJ5SUgZbvcwQHEdX8vUhRJMD8y6YgXGweqEceN9ZNhFAVE9FeGTZTZbxNhLNrLhJHJD",
  "key25": "4NAfk3N9ghS63gHu1UvrGoUPoqLh6syeT4MUDnWs237Cojr6KEVEuky8hKBAfmcG9bbjf1aCRXpmvVnXFi9tmQy8",
  "key26": "bnELBaTznT8DPx7Ssz5DyQih4Xb4sQwxfwd3FSosZ6jhAkHZVxPMjZvgtK7JD82n53YfWerz2SULaWpHrsVUrrs",
  "key27": "57fAZ3jM8VxeiQnXLnekgoUxksR1Yy4EBE8SvGqyxh18bnqfHvi4n5t4H4C5zfkvX3JhLQAb5Li6wbBFdwj1Srya",
  "key28": "21khjevuHhBL4GLsJy2SdcY4PEv1WbnkA5AvGTrxv2d1Q3Uff5gzngLHQXSmje91nc5R9uK4gdRdyGQnVJ3fWqVN",
  "key29": "2xB1RBciiAxfmhLHHMoBdh4iRXj7zrNvXajaUgJttjAFMwsNPZCRmmPhQe16NWc5fNv2JW3gzTR2i6GgYHMXpXsM",
  "key30": "2hA3RAw6J9Y8FQVyCfeCeSZgrn54KwZi6QYAWGdvGMWwU4Khp1VdwbbSxFGizz9N99Zc4F5czdVEpkcKFhxvm5hW"
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
