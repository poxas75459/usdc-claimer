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
    "2Q9T4k4wBhqa7SmdefB7rQDdHfd7qAuapZZwpDYDY9uwpAv4a4i5zDYoWkFhapNZa245XT4Kr4TooVGphQZLg3eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sWRPKtWe5krWDnGf6Xg3uFZ8zD8uRNdpJFRqygEqLvJ9NX5kGnvktSmwiS62Q9tCHWSKF5pr88hFEYQsjDe8bn8",
  "key1": "3zSXaco88mKKUaptkKeNAJwUs8Y2bJ3Msq9hvFY3jkWXG5iMpuVUJQXLjJLrFUu6nYn95UjMVPquJncN5uCcSX8n",
  "key2": "t7Veiam2dpyYCHruQQEZEi73YqMPAbiTYA32eJiJS471Z6MSdLjuwSUG4WrrXdJhuzjpkQW8cFXAQb6L46FD45K",
  "key3": "49EYTktq3wJV1aU6WMWxt8LwZ9RyXHReexPWjn4q8pyu8JwVSu7azyGkmSHDBj9ixD2NBCDbt986TuaBKHYLWz14",
  "key4": "5toWvRcMdDK8RJNyFHSmKAqv9kJdfR9CtuCmPDmdPtNxaS9gnmwZtuNgUhuUAJhLNFMKJa8ueCzVCtj75jRvs49p",
  "key5": "4sy8vB5Zt4p6zHCwBMQw6XNwjH9WNfa2Gw1GEjsmxyT95vzYugt98qHoLqZ5Pzg3gqFXP6kcQZF3V5kdJRrsc4df",
  "key6": "4QY8iAapTqCFh4ufyoJ2KKvqH3Nj2U3rS7Rrb45H7Je2P6D4FpSk8J3D5EgCFfTGts5gDUNaBF5Jd8Rk3XpGBpwE",
  "key7": "4qYjxy5YSEMRferQJByjK4NvGnCZmnAVTNnuXELpEWycfUjuCrX3riKHDqCpxZzvV4Nj4LwXR7jGsekm5XFt7ZQG",
  "key8": "64VpcqatYh5jp4hzeRPsGvqRhX4jEHEpFo2Avh8o7JqwV3gPH9hCBAuSEiAgW6vvGYBLKU5pnnYZYzBH5ueJwYQ1",
  "key9": "5TxEkLikzQxgcL4qmCTj4RLJkPSRt2uHvxf2Y5bt1Q9WimKXgc6xsdbsXbBaqxPrUguTBfHbEfsaqMiqzH3HwGQH",
  "key10": "5dGbnNgqKRz8fADFjkAnEegU9qpHkwavGopqEQFHWkAeZDEjaQUZcdj2qnV1c5dzJfDK3cC3hsL72DmUXZgsNQ53",
  "key11": "4pRh9ztskcXez5HUcMc5NuRQqyxNCds3NJbKhVFXkvEHLXCNn5aFtYYJYyX7rAK6VR68w4WG8vo2W7i6ieBEb7kq",
  "key12": "2oFmBFexRs8vP7hvR8ekxX5Tzfqo4AZ2WAPgJx4FR9d18pQfJLb33cpazYajkLkiNUgzgY5gy3cZaevaxh8jZpuL",
  "key13": "34YJVzm1g1CpgKYMNkpJFxrN5afYmT4v9UDJyHHnYtgEuomHexSXKbj2o13QLxk8DYDyvmqKCNU2k75n4GyUD7ts",
  "key14": "5B4nnD7SPKmXBMZqwfYmbvKgThEWDB5Mq9UX8Aes7R4hjCgJ4gd29aYkQuj3GtAQAwjNaBGBys3UJ3oXXHftjxGf",
  "key15": "2QkyqxGWifJefwPFQW9hkVwtJBDAbCZ5dZEJV33J5VaeMtdACJeFA2Sgskq5MsJAThuPFAJ7LGtsoigrxQLFhbYD",
  "key16": "5TpN93rKy7iPcXfXSPFCYGxwq5TeH3NxiTinvcGvVAa3ryqv8U532xhFYRWnBWnEbS22aPGmaquXYoXhnGomDBUX",
  "key17": "4KVyMr9ySrEagZNkCwGotb9KPPMerRkRK4iLxgvUsfivya47n8Q1fxExojK2yBuVooBX76bfg6Ah9KGfJsAPWm5d",
  "key18": "3GNBAkxfSzX4sei8591X1er3S89cnssY882ZUqFnrJ5c159b6hzNryedwXULwUhTvYRe5A1Er1YHWw8kKNEy5nM9",
  "key19": "2DsKFFi9p71uz6zr4oZTSK43wt8VCWqSPGTCBL9F9Q8MYJ98Hn3hPcZQfPZaoKywVq1wmNG9Cj4jKPoc58gMCEJX",
  "key20": "4gCzJm7xKc2MnNJ7sdgBbYWceQzvczANYbYiWsSUn95a7Gk7ByGwQGMVGpehsLLDZrPqDTLoDuWUgLXKeaqpBedY",
  "key21": "hP2HdNRy2rz2k7vspYRAGmgW627XaBPqfMqmGqQvDxtiFtnwCucQRydhfhaW1UeRGCpeSfaMZjjiJYkZzwL8Fod",
  "key22": "4pdmmJpGeUzdYSc2cUed6wGuhhxC6HPgBhDt4gAa199uGvUxTn7Tx2heAaZMXCwVnvHst4HcpgGGxqd6qdXiPbDu",
  "key23": "NhTtQRUXGwFSyfa4yiicPpi2mRBysnGQ8RsXn6WhfC1abWzDMZRURCPyCTpk2LLCUmpAG4sYYuGgByX5wUQF3Kd",
  "key24": "23HoZuwAiDBsA6SRE86sv1EgNWP7DQJiqXgvdzCbtt6xxCTCAf4W3Lp2ikcTNC8Sayz7NUZpqQYfgNNfP7ebqpUV",
  "key25": "4UpUfeKDYjNsRnT6y7CHXztbF7jxiC3JvfmWyaGZwjfQtByFb9MmkiRFBMvp1kAkNfAtHD3Laf4p7MnEGmLZzniY",
  "key26": "35hPsSuLrZCrVCvdKGhSbb2LA8JNFXyMxq1Q2aC9pXu45jccXqG7YWhpBZ14m6U3MHGkq8iDAXqNFmdHsX9RnQUM",
  "key27": "4Jg8dPDJ6ypNbcuLrWAcy1zyCnvMLbpEkVEphgYJEdSstJVBjDPnK5Xmcrt9EK1MHkJw5yYzycKoxJ9UbDztyRrE",
  "key28": "Jp6LEtyM8iQT4K2uD7NnXZaSu5aSfWJq12cw3mRhLSRLQwPztZ3gURQmmBxUwb4SnhNKYXiTyiPBYfqepeoCcep",
  "key29": "4md1ZeA7GhUY3eaJ2Q3NEhFY33RDC5F31etTWTBYQUcDxLpWL8ZynhbvTyqTH7c6ME88mXzW89r5e7fTLZXfZaum",
  "key30": "3ALLDqUNucDN65fdFtooJUHxAB2jfFk1Yiv6zt3EuZB4trDVw4gRXTrWabeCpg54Up5T6qEGFAzUjpekUHLvarKR",
  "key31": "fkAqFSGwZobmtaUKuki4kwKZc8jT8ahhCB1XY9rwTZ1txbxvxHfCt8BaLjBzLdhrr7PDSUuHAEFnoxF8zvnywbE",
  "key32": "33XBhWf9mjLNKLHk9bnewyobTgsMuBoZPUob2vFMoA3Sd1XZtKEFEL7dtaMfRVWcgicjkqhBpoWanQ4qwKmKzF6j"
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
