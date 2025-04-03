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
    "5e6HCKjMEthJpsfZEeYX7FTwiBinhD7HqHKLJjZqPzzzttapRhBEZ3zi7L47ExX744YMKLP9jx7Tp1r3fc4H4vA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rberxusU7gzHMyWoJA78MfGD3Tu244nFN1z4fmK9XACncdHwza7fyhaD4oauwbSJDTcn4717p3PD5DRAHv5KFQN",
  "key1": "337GdZYY1ZWCJ9yWD9tTdLuWrFGwdeFgZcyCLNG3DTPBVqzpNWQHxY8W3bZj4DVQPB9vJW7gVmeLHPWDgg5bCMAw",
  "key2": "2DDWqZWaazHc46fVJGcgQDXAKgpWWVWZ3tCCV6UNaNR387UfoweMcmvj5qJv2tNvcPgPd8dCrzgYoSBxwmacatWi",
  "key3": "5pZYrswaTREm2Z9Km9CGJv187xY6NCgH6Zq3UNrSga3yczDU4ws9NoVyt6uMxhgdHTaUs1CG2DtVDT7NpZyR8hoU",
  "key4": "33qwTokRyacoiAChkkVmgNMQsdfRpCJt1oYy4twX7nYmKVW1E5zy4kUFCT2fDBudq37TWaHN9RQJxd4sSQZQsrC8",
  "key5": "2uczmucqFwMqQrE1xDz7NeS38353HJMLjUf7nuudNq1caody3GvKhyBPRSg9GT2XjzYNS31eM1bd8ghdvSjAg1jw",
  "key6": "Xm5S3KqfBvykNXVfSLLptHKMrc48MqJB3NPXx7eWCbW63Z7hCzipA1RbYBJbgbdVvknA1Vb6uYwC1pPNRk8GZ7U",
  "key7": "NCbuk6vo7JQRVcQuNTuvwtupG5mzAY2wK3VZGjassmPb1DYanwvetKJwT1682CU2ZVQoguSPpEjb93aWDMA6BuF",
  "key8": "5rDiJwvBrWtVKEHrVqZNPgLpoeVbJ9nVdzUwfu81qeRQUWiBxf1kzzjZA7hB9zquvvhEzf88jiNyrBRja9yDizJC",
  "key9": "4d1nkaRGsJADpKZ9dacrWtbfcvATnCumSZYNWMC6bQeHhfwyGLCjwpvfBCW5ZNbrnNoSsDuADpwoyvZWTNhX2xtZ",
  "key10": "nAEnCZPAxKrj4wHJ319HxiPKYD1d1spcdu57TqqGKA243zYR2iBipe4NwsMfzGGm5msiMkxhotGGHYEgiVT2DRA",
  "key11": "XhsBzvrjs7bv1bEt4e2pJVdNSzuagCcLPM7RFtQ7xMo1Yy3jYWRtbjgnCF87BFho4tV3Z1BCmXnFa7o25zRSAmu",
  "key12": "kaWP9JEbE7nu4ekN9ygvronFho98pMfGnj7rBg3PyGwf5R7nk9KeCdXi7XQcQAVNKbD2DaosZPDFYCVxAB37w7q",
  "key13": "gGhyw86ZaHJvkS21hkuiuRZtFivo6Yj3vjmVYxfc7n3Wq6cy46mBDuZgEmNSQR3YwaPbHAsXH5mGowtoXdTXbPJ",
  "key14": "2jQL4bsV1SvMuh4zAefuZ6Kpey4PArmVJ3sZQfKfVQqyVxArvkw2Jsf8DywDmh17RqUg9jJA3kMKq7t7WgCJRZsZ",
  "key15": "3PpGbRcvoF15dXg3ZG54NuGUMKPRbpykfhQjT6Bm2C9YuqyUdofMzwKTF7JoMuQSGG6H4JV5UKWJvrTjoZo7hqhU",
  "key16": "2vUHmp8KZdJtFeDMkKb7CqBemzakA7m5NJeqYr5WYft8bNpihNQsbzCbs3KMvi7fdi3EEZbH1J4Pv2efTCEEMt54",
  "key17": "4GXe4XAqVdxXBGK1row5yJCRiGsYhm3vE9AKXFUCTTgELDUmkQdvksr9Xbot7YqmQFCWvq4mdK1QEMsyu9bHHbQg",
  "key18": "5s2HWjaUeHDQiPTZAYifVZZ2814zyR4j4mxnfSB3KcJTzLZ53h1ofsSCfF8kiUVHphNhgHXtr2ZQvNwXexjtRwYS",
  "key19": "3UGCbLUTqFJeibr72pvTVjwxuJowSSVtyxejyoDJ8vTi9Zja7V8qW8otWJ3UsPwFwhHKcoZEFRDvhB73mgip9kz3",
  "key20": "2PxdbRNjYmaRYjqzWvTuBKGqdWmz6xMT8ftcHfCivNj4AuQMrazSVXmwBvn12pYU77dXjHyE9rriDEmrp4CCZaPq",
  "key21": "53uboskyaNJHBooxzo1L1KiKGV12bUU5v5GmEcUywAgioxi7V69KMWgQnFJkshg4YxZChXstrLqsKQiZHyb7mkVm",
  "key22": "2BXse1WN4ZovqsmiRLNMKKdjgexuT8zocbzFJHcEcgX3s6wMK4Dug1hPQwDok7o9SyCYeWMHWhmXJJo1vacAZUCn",
  "key23": "2Lsry5ABsEk2vP2v72TLCjcAYd5YUbhyQHH78CgSdnVdb1PhLWw1kfnFo36UfYwZ2MUca4M87ctgseycf7F3iNNi",
  "key24": "2rWzYHpo2T3uaRJ2AE5VSNDQHdNWYTQz55VBH5rjbSYfhSBFCSQUtaW7TX8STtcZ4HJr8wx2T9w6sxyW2gScSKod",
  "key25": "3K3Zh9Cfz62VzA2yk5U8zLxQUqj5jFKuc18MPo4TG1AVknEnHYdXaiamBWZPuMNJuaMKs11fKhWnSnBSMYDLC5Jg",
  "key26": "54LKuVei7ad5Fb7UqNdyNX35JLtkkMx5aCcxxPBA8JvU6LghLzjJpMLwoLin5s9YUdRUCxYSLZXXBx7FmznYQThc",
  "key27": "9Rz165PQea9frADw1mAgeHqQvgPFCJCrgFfvghUwASFqgp31RqTNCbXhUVd9Lfyt8F2k47HKSwJA1huxRZwuHtm",
  "key28": "1dLXAzpjNMt2L7jyRTGzPUDBvzLp3caRu1veY5ZE54pFjwX5vERSsag9VfRNcM71hy1JDJDmMNxAWkuK9faspDK",
  "key29": "536UgqSXamqR7JNK9Ma85QamEnxUAmDP1GUpycGgaAREuMHtPwSNDpFGifTwUtAxAfehqHDS9i3hMK7tJexqkjAW",
  "key30": "4ggKYxmH42ts1j9JeMRtYJgJAp19CBLjSXCzpne55UB3HbksyjuiFmRiYMBEtgZTRP6nPi5vCzRahB2VyA63Vn3m",
  "key31": "4LmegmgG6rKkaaw9HCmgvuNrnb1Nd3UMx4oiBVp6BL72L9MeusjgMPkHABWZMmra5EMtgutbA5MS594RG3j8bUZp"
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
