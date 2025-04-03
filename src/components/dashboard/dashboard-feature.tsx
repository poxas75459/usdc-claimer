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
    "4tWhT46SM7QwWwjwy5EPXLfMQiDaVSK6BYdEHMuSx99RaHc4bvD4gymfq8iotsZWVqXEKFDhTJK4zS7b1M5bwUy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDDrk5GuegY5QXY43LfBgQ89hiTJbYotje8wXXuy2SXrr7z2SR7iihhgGnkiDUWZRXLiUUkCTysrrytR42Sqc8G",
  "key1": "3q4aAeN3GcCm3mC2regPMgBTF1WQkBaddJj7H5kEMs4NUyJFvhsWR1QnyMSKqZsMYSXCqFa5cFsHJHE6EWBWbjDQ",
  "key2": "RCYF8HxXMsburuWZ4u8VpczuDZCp3XNkW9wTNTBMwTrYTojktjFNzUsZc2S3HJPdASNjEbbRwMopXH1kLgYjXzs",
  "key3": "4s9UnYHc14S4AdZyMepp3NB3TbeHHZGStvcxEnW38vRtvvmGB7NPXNweYE3F72fviXWDCT53YDep6aqz8Bryuq3i",
  "key4": "N8bn9vKw24Fi9n1ZrUaN47L4jdVpntpETMwjwpJNbeGPmURFvsfs5UmxcVy3pd2mYYAAXpUUXVBiX5HrrxUr1ne",
  "key5": "2tJSfKVKwLXmz5KWzuWU5xMhak3bkSzW3EratcPaVuWPvUGzGYqFAkVKFQ18Ker7N81JBguUysW3zDSiCHHVK5kc",
  "key6": "7NsQMdJcQf4rBEwM1tJP5hf8dRB1x6A7k3ubGzyy3bvkKpwHwjSnz2Pb9kaRdzd1AjcMaCY1hZ1wv12UBjuxVJP",
  "key7": "5fNXGNiX1E5GshjzTDoTWZRS66cnxXwwJhocMu6KQzqgCZaMnh5xoZs6WPK7ztBaiZwBmnws96yAEma54buh3Q8C",
  "key8": "5DZ8C6yEGY33cqjePSQQcXu7huzVhVKMFLQbb86BaBFDu92YUPpUzZJpsLCTbgK5raC2BqDpPiKFiwp8eWNumMA4",
  "key9": "53tDT2aN3xKgnTuzZcvEPg1sppko7DhTt6epxnpXgk77uLei1Da6Js279KXvj89QDeUtPqWt37z6G892kJBwtB9G",
  "key10": "2Maf7zKs91qjP1bSCgiM5QDzBoGh7p5eGjTy8QSuyyo3etx3YrNwUZJcs42qpGxunKnSDwrZk5FFtXUPU1QnE9uQ",
  "key11": "4rJE3bBu8hmYSwYFYyCQuQDSQFMRafXxzNRuC91fSb3C8c3FpeRzYXX5RFikyBcMAkbfcbpnVnVVBqNefM9bCC1J",
  "key12": "GcGuzqZRbgCF5cRqgJAqyPMDCecLMFaHzyTvdxxLQv1a4Z825DXhZu6VKdaNw4ZKtBKLe6WGZeBpw5th1cSUHCS",
  "key13": "5k3uiQgfrsLZSKeBgUTW7DHyfmVziqP88aNkZV8LkRQTpCM3FsgCDPsH3S3kGzzv2HJ9UHKcKZzab4w4oVTVqwH7",
  "key14": "4qpgi3WCTCdhJVLUumPj3D1iWFnVicc6q2Qi5jsE29zJknSXay1wJuqpXfK6sirh2ipfepebbuFQVBi5pQb3XKDE",
  "key15": "4rwwTs4RQcFjuyzVZpC1nHdmHYr7ZMK3fvkHq1tbQ7yqiuSz2TopAAvYkkrZDRVAs63iAchJFvVbswHrc3Cz4YT5",
  "key16": "fTmzQfV72JT54nwgGVZgeGF5rQuRccsUeZJSwba2ee5Z1Xh1XcdpAj4D6ZY1hbty1vHUZDZbPXxzoPnzAFoGqWx",
  "key17": "3LTbqY8BBQd4nN3CRJGJKUsqaJLFQZpYsyN9toUtk65ALvpcqfHudBaCpuxXfUVV9UwyzUmu8e7W1pifqhjaTCvu",
  "key18": "4CoQXRGzNvzdE6Xh34HjRP2jrkYnjH8sR21TwkbqopNVmNNCHB1wpukrR5J8Gmjkjy9p1WJT7uzXDUYYHg9YWjbw",
  "key19": "3H1wchteKz335RaGUGPMBiasUtTAbXno5LwgDRGYDyXP5UyRv5A6qosphzXxp7pbVvxcTdB4ESzkoHKkqeDqmR3F",
  "key20": "3NFjsboYdi8kBMcNzrPDzwzWCEoPtJctaWtLRTGumNoi5FAmfFJgyRKgVYf5CepBvb9VJ3K5fyqmqchJ8rqpkVTY",
  "key21": "4cvwe1Z3ErkrRg2aiBT9GL7rkgnC9eVzWTPHuyNUHG21ho8zNfCazFSn6ymicDv9gKT8en3cKN4cvg4fhG5VnTmB",
  "key22": "4ox8TmU9Cau9A1PZUJik9Z3vSDdPj193SJvBayMSDwhVPTbuQETDNMA6EihxwLj3ohEYx75GKZ7w5NkDgYVSoTau",
  "key23": "2M1TN5ZJhFY7yKHB4F7Chq4vCs4K7MqgVxTeaM2YAVPbMuMrg93XUAiqELhFk1mikgKxUuWoaHPxsmJffarpyo6Z",
  "key24": "4RCe6gJV2Hocy3egdfdsZQMRNLM2RXmksR6TwKWDWgoQyQSKW9JC4xaaQAz5bA4vb9LRYrzUuyb9uBAerBv1KMFo",
  "key25": "4BY4ZkpaoCvmbdC8WsCXkviNvqxRK4WxXDN5xD9LHChcc7uxexbTxEQHCtgt6eWuVTnxf7FqjwFwTmBw318fwWmn",
  "key26": "2yeWYUuVDXrKu3agZgNXdSQVhvnx1mXJhtgJ73LfZ3LQwTrW7xmzC6B1hHhZuv7qbc1u1QgEFihe8wDRJvcovWVz",
  "key27": "57CBufCu6rgTNNvrqVBQE18a16bjrN2FKiGRtQRjstg1W3t4JUKovTZd8AdjtRjz2bFrGVrqiuR3p3c7grrv3oU8",
  "key28": "poX9n1KHa1i7LqnQGMcoGJ1x5DVS4NoXr9yBza651ZyVUiBxuqKUeBAVxbz9D8vR3Rr3BTsxwzgJVuGF4rWwfGZ",
  "key29": "5KgZ6RvPMFKdEXKHYcbXz7zEpDsdachZ7CqHiUFH6eXBJDuvggYpzSZZMy2F9xmEuJ8FbaxLiVkuVCoBccmAUaSK",
  "key30": "A9UGdywZKC16PTP4xpMwXHiQt8z1tcFKCfN37rhi1LyQ8AbWjiYBEMQZ8pShAzmUkxuQrZfiiMFgMbdF6yN1e9U",
  "key31": "3CQAWEQDBuod9oXgULyv5oiNyEDb5tPFNupckWEQZsKmj9zEL8B4VQ1SLwT1sBvkWLHechUxD3rBsS1U219tqTnQ",
  "key32": "2dUGiHafzNM48dyr9deKwWiuf4RcLFU4hJPVJjgrWP2zYEzKn29mujcE5Uwibmf6ESkFyzGaqU6jDx85Rk4qh9ff",
  "key33": "3vt9EJwp73DfWs6ReddTBqvEzrcrkho65RtcJdjyzCWHPEeGpJ92oeHM9Tq4q44v1mu9aBKnX6kqj527GHXAzHvv",
  "key34": "2XwaoGZsyoq28kWJrNNWkz6G6yK6sdPoJpNvkVVyFcHuPYPpmUr39XFPZQuceUXBQoiQs2bnWerwPcKCgj9QSnrN",
  "key35": "2kwXrUYVc67M7gZe3NipoF97Rrmqbd58LiA9HxK7B3CBEmxqmvyH2oahEyFVDFU5WQka4sJqTmZY2DMtQnWRVjz5",
  "key36": "1a2FAKq6nNnWMQbA8vJHYffrzf48FUvrHnAQxoeqawRJfWPP4wPcX7D8xRcPVPhdZXCNLbzw1TBMcdmt2izXUNi",
  "key37": "3b7gVuvWwJWZK3LHA2U2kMfTAgkM795R9sPd27UvQiXhA5uHXexmPTkLArYCk7HXJg2kL2kwP9oKoS6XEKdtEYyM",
  "key38": "296ARf5wBmaWmK8AVQU3ytB7E6R1HrwQvuvicif1uFNXbsP1rZFJxJspkUDmET4C84M5aoXmbRCyNPwLqmnTxuG9",
  "key39": "3aH2dJjF5x4a1tYPpNRJiTZjvT33PCeQvdAYZSsMmzR8FfZ7QnUARsZCy1ohm2FWQ17iJA5RLrQnvjbetowJ12gC",
  "key40": "5jCVTwi4tnJD4kWcEVg1Rkc7YGrJTZ5soVRER7AiFZNrw3gioA5k7aB2cP1AhxqY86fDP7XfuYtPvTfa9NMnoiKY"
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
