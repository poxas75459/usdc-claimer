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
    "2aEz9oSb7R9KZngqmXX1CUYfJNQocPmjiJB7td2XbtHUPt5uocFRXzcUv7uyZPkAHLFG6z9zRUMSoLUigoXLQc5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hzvLBhxdSUQBoAeG1aekMxAy5TYVULehRiRrRPKE3bigYsFaw4ee1oXp6pQiCQSyVCR5MV3UD5xkti6EF6EyrEB",
  "key1": "3GjJqajaNAzd14NMZWq12srd5r1rp48WyxU7bSoEjbu38Y3bFUWBvhumvta1RVqnD123x4agq4HqdpaMPguEKzPc",
  "key2": "5YgrZ3HfdSVAAgZJyR43Y3d6BF2dC3we3NwGN2bgzfJXwDWKR1oacRSn612MmgxVzW5yiWmUdJB1mdTkzm6VcgLT",
  "key3": "psHGCJHD7XPaXjT7xXTQ2Vatisq2EBAUv85MhSQWVvFQa4LnD7xbdXDe1gJtwmHuEpD3EhhF8gjj7srUgExUuXP",
  "key4": "64bWbXukWWmx4DHLpLdQg7wmfaCMwkzR8Kr1ET2CM59ZWXMwi2UKHe5eHgLgUAwHHKQXnz5PjMapT3vQ2nuV36Bh",
  "key5": "52Hecm2Rf6npgxt2prdh5nTBtbRKnBEKCqmw79irWxfxhC2Pg5J2zw1gmfftzUzeYVrTMj5SFXFSGh54UFrdkNA7",
  "key6": "4QXQP7YKPCDsSQEY2vLZzW8zTx4c8nnKQ347RqXx9SP5qpQFgn9qDzQYBRihdgEGXd5AfqEYTT1tmsM44ozYRAhr",
  "key7": "5tNzxuarjw6hwC6JyJ7AsYfhzhgLGepHQnJBY7i9cfv5NEn3rsW92Cz76NZH7quvZhcM9DvMcP28akPLdgisgNLs",
  "key8": "4SEccs9wT9YBTxgcmAvbmL8Zd3PdFqcCbNJJsErt1CqdHkfsqMJvJwpwscajAYBVBsZPgow6ZsUZuzz1pDit2Cs7",
  "key9": "4BwgbBAqvwgFWkK7sStqTsGx77XoQB7iJAbbUFirQqRnt3qmTEjd9LKV41Vx7QTU7csAqwDe31b9Qnm7sx8Jemi6",
  "key10": "3MTwsZw55aMWzCee5Wenjdr9644WSANZSCuLGDXi1NyUfSi3T8FGjgiqFaK8ndNQ2dBtqnxdJfNWxVmFQ94B2Ku",
  "key11": "5k6A76B1F8BCEbsycg5iNpKe7jzTkrm5fygQehZM9hQ3RtCxBYyZTGaCAsHwDojgfFBLQoWLtbWk5xKzQWcBULDb",
  "key12": "5KtoKQ3gtzCgFwuXjxJAPSTDQUG7hspkw7UoAPhm2DyvS6vd2FGK8nP1qSy9r9ffT5gsUG4CFTu5uhZXuRXX2oiZ",
  "key13": "4YCgVpaXjB2BsianhwfaNbMUp57zrsnYJfYGg4dLugDQsfFNbgPHQWTC7RxTuQoZH9favo5NmQ3t67rM1oYQNRgj",
  "key14": "51f5zednA4cJjMpgUJYa9UKqUdZSa9SUfdBX1hLrDoSzk3AQDWVeWBuCp8pZxEz2EYgHniR4scLEcFC7m5aQmUqP",
  "key15": "622JujqDRMQRzqedgSrYjrvY2PByXpP7Ju1hLGXw6mBYHb5ab6RVuzFzZWBy4BLZW8q4dpYqXwC2d8wngh1Fw2iB",
  "key16": "2trTi48a71jB4tgRrk8HRFn7fq4BBTU9BB6rHFfphX1BjQVow7onF65Rt8DDUVwexZpSp4DPViShHtaLNwLjYx4B",
  "key17": "45xHviSy5mnUQZwqMWmcFVPQM9KHrsSTENw1xLZCE9jiznz4ZXguMSXjK4SF8yWBcRNnSntCekDVUbkARmdpXnYn",
  "key18": "3x4QXMNYpzJt8aEhDjkKReUyRsRvwDihwxgpMR9iXYyaJyEeP7uWos7v9meF7m94NV9XUKPP4DLMnDR6qCyqeENF",
  "key19": "64B8ZEgJRYYhUJEPJqNEQoC1pSp6DnXPGxg9CzL1a3Vro5B1dDCo5bKwAYgxsskB4QTPziZ1fvF5q5uekUQ46Nqe",
  "key20": "4NidmyctavUN67HnPNPKRhfB2ranSPy3gA7VEjTTw2LNvRdzD1rQkKKGsCq34t7CAh1Et75jNneYJJnc3GCQ43Mi",
  "key21": "5w72aVUAwZH9C4g3Z1dLKiaLgLiQQEcZTNwyyZFJtcmR8sVCNjSwZ6cjjrqT9QSwvu7e9uri1sbny9Ec2urDnfc3",
  "key22": "38595yB2CVWc5MsdCWMusRQhgCEva5iv4idnH1p1fsRucm6sfFbxCnntMJJd9E6UmfzHTntpoNCPgY1RHP821RVB",
  "key23": "4tjDzA2UdeE9RocgxyrRw2KMDmHsEVYkBoK4P56oRCDsV5xn7u9aGjkWsKYweGWYt91LK3wngCHcnYxkCVaP9FyA",
  "key24": "2aiaoHGgtpDMhB2GgsXqeEaAj6XtRVvLupcUboKrDUfEiEkzJ9R71iDsi272mTWGPMzwpEoJFdXQUrVxomCqvmpK",
  "key25": "56fGdggw9GcLaYA7tpGAU6azRgn944346cAe6etFkRZ2iLjJTwKiTffMNfhnN8BNEuMcQFNyxdkWXJsrM11F1942",
  "key26": "2EzfPoapZ8LqdBr6XpyMxZeHykmze51xVGu1wfFuatNWjxS7pRksKBpgSnbvMbDQE4zwbx2itubLonQE3RUXfwRu",
  "key27": "5eiebPig8vGk2kjHSoqisVeeYpGutvi8V1hScVFwyn8VKXP1QLL2ZLiMnsgwWaQYc8hPbi7ctDvGkUQWqKq4GdXD",
  "key28": "4Q3NCK39deGWjxg5z5K44EfUpmQVgXvZEQ8Rzs7joXmCfhuUX1mjELcxeBTkq65Y2XvXEHbLtvTo2Ep53MvFitG4",
  "key29": "64rYjmoQK1iJ9AdDJHH6jh3phbyg29vv9Qr6UTpg7AeUJ7bXhMLL66AuNy3xR2aL8vNs7ZQVkVt3uyN3Sk3JzRYc"
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
