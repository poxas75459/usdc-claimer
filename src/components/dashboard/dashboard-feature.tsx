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
    "67cdn6Xeo9dcRN9RUzn9QZyowmNRhJZMRZvWrHig5r2RC6W3DMX1EQHPzEeDJjopZae3a2URHUFkm1zHCwC8wSFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmuoCWyiA6fAT1ZhcUfwbzYvdnAiPYLpcAGycGG2ntQEA1fsLcoGWx9MwiQ25TgARmb9qNmoDsuR7ZmFYSod6sV",
  "key1": "THgwnMFiwcZdAgXmDj8hXZy5DG7ZKg8rWGtYb7CnXUYXKyvhd9jy4BgMB1vGEbCpzrZHGiSv22fut26ShBHVsdJ",
  "key2": "4rtPuRdVoXQz4A5EAa5yVNFZsn8N7LjTQfUQakD1BFyv4q3wbkoKKAv3Qo5txQCRBHXEpTvmKYSVwWM45sJxzSLC",
  "key3": "265iqrQEqvLNV2QAPvwEGKJsuqdVetpmKybrEbBtYYM2EguzWgj8aRS9t1bcMc5TenqtDFuZaJVi3n6HkKULj3J2",
  "key4": "2jN9KGEBNNNStU48SfFGZHTZQiR3Lg8aoiZR2hVtra6StaYJwVv9CJznpBYy7WAuqiDXShvQFkMrK27a2P3vTs3o",
  "key5": "3KiPxrWbvrVa45T6dPgqfZMA5QAM3n4xM69Ty8c1c7HTJ2Us3YJWXhXNsqcP2fYj1PR2Eaih26smjdbBAd1D5y6g",
  "key6": "5V18EbxjVSAKvfByZFX2FDzKnEFMEBdAbcGNLmvCGFfNud6TACvYESFWqxUXi9A9U2nSaTDKbLvU78cpUcV1kohr",
  "key7": "3S76vreGk7EEm3wxdzS9pnGtwgRwZeHV7GsL7rsQyipPd2B7gRfY9RRt3bRakRHM575Jjn36LmG94tCUEkhwFUpw",
  "key8": "dbuGipQAAFytKsgZ5pzS6aV2B2Wzbcn8Q1p1XPxxH1o2NSMTjxB82S7coj9DNZW2iHE2uQf2LtmemHk3uy7pPLN",
  "key9": "wEy8SsqKTrCRAkWKNAcUAkbhR8qaoJeGSU3pafxDcGtSNtNJXQkMr1733B13ycQ1YJXJ92xW9X5Yz8jmRQWfVze",
  "key10": "Mto7pRoePQgzBEkGLDA4vXrd69MY63t9vCznycN4yeW2uGafWWJ2985Ngeyrm1h4rYvQ5hstH9eBPd3Eb6crsFG",
  "key11": "5hQtjnSt9P3HJsqWgXQRybwjnGM6UXMf3eVzThm6s9zKKesuRz9HNbGHXtmP4pY8DAJSFL8uKgDMfNSR27gRnEyR",
  "key12": "2hzRQm6QDymnQsxgwXuxUt7251sr2YM8zjy12CWjgzYjBrnH8Qa64x1bh3nqwwM28r834rAz6hdjmU8QaRxtoVF9",
  "key13": "5FJwkcJ2D5SxL41R3fJLMhgGQse9sECwasbvLzQxinfxXkeH9yt9pWtKUNNCZcrqvsVeRBUndWP6eVp8zms5cJmp",
  "key14": "5i9BK5HwXDMWNkmvRzQUhSYDTp1ABVH7XPF1h3MikZuqSDtXK1RgpJ9QQY3y8b5bL1BXW9KsGgLY2kZn7YQiBB7p",
  "key15": "xUQEiY2L2Q1F3FpSdchGFy67fHNrWB2TtSRCZ1X1t4T4GF3pT87BHVy9pG2Kf8kSekgkvBmEYe4dEq72NNBX5HH",
  "key16": "KXAfZvecPuTrKmbAw3B7iV8iRDkaEhtJZ4nG7xDQK2sTQH4Gnqc6qxFES3mHih3tYEmFj5ZS81NH8xbXFrEbRFR",
  "key17": "5Ky9KKoJvgNwosArKTKg4uiSYzQZqq4QbwDKCAnfw16ZgJazSZfshkDyf8gbCcbtbKsoSLZXsZtWYfzGqW5TZkTW",
  "key18": "3K9CC55T42bpDqaMinQJPhVaAN2ztkzRjb1LjeYU58jNhnei6Dh39R5jc5zX2Siod2gqsghYgyW5XW6tv3TcREwH",
  "key19": "5PHkuPNfvCEsbaWsf8kf1gDyEXGEGfng1Rhky1MqioZjSnsJoPUq5WwVJxfXuTLZf6GXddE6unraNhujNqTgzRos",
  "key20": "3hJkvESLNoAdkCNw8YFCDvVSu7DvVngMEepjxtsJd4NG3aGuF3kY6nfBfbRfcrx6114VUPAGvpQs4oWoKRfWd2et",
  "key21": "5zUZEa2NCebG5HSMG4upyqZxSer1ohFUcQ8k7hAbBBJwEC3yCRnTBpRs7qVC8CtWELsxSftk1sqiNXfgSZxXMZuX",
  "key22": "29U1D6tJDPWxG98hbqN7uGfTrjhikk9pVLhaRAYD1LbCLXsZa4EN9s7fgJxdtwtRuh5x2rhAxxDGWMRZwZRfHN3s",
  "key23": "5ZZRTeYJjoMEV6jD5NB5yru5drcqZx9MtH39AWUoXPNLiTHDfFhwCx8JS5v3smv7VA31jWmwTyEuu27ZEX4UuHyQ",
  "key24": "3erTmw6TUmGTBsYQe6dJjjwNbJDWTMEgXZmUPmjgQwGE1gjxau38Hmjdqne1opJYhwDALkRG6EnYsmtGZtshUuGC",
  "key25": "3sJfpecqmQMLYwBQWNERNbgZo48Y4DzeqTcHiJNatqmv5fVpdpREfaq4zJqyaQxq1mQGEtXEARredrMA2QBvQvqb",
  "key26": "48aMur3uEDiyQSREz6RRBz7n9ww7erPPGn9KdaKeN8PqqCgMXwSHasEQA6tWBbJXAnAY4ghdMyWfgAzHu9mbBB4E",
  "key27": "Pw6k4ZywW7EBRwga9yG8CefELP5ZsQPzuVu523Tno1DwU8ejX5HCNASZDkVZijKVE9eCapup5mXPZ8ZHXfuT3ME",
  "key28": "2aUqof4e7j7fndizaYzL7BxaBePFLXtY4hyEo95LGwZqbfzQQ6tdyBDMgnsHFG1XkvPLrxCN4dno1UEizEPavrh",
  "key29": "5yzeEAWaeRq61n119kAH9eVMXPtfSmeWoWjDGw6P28UYkXaBJbdx7mzVmok3jcfZBnkKs4KLtKz2kJuWo6sCzw3N",
  "key30": "3yQ4Ry9Cpj5YUc6egtVY9cwcPKi1ubHTCEwrPwKWC8hXXd86tAkxm65ep8dux7ccEoJNkXn7d2zyD3pwP1bzvkS2",
  "key31": "57avQEeovvuVR2d9wE6hzsRyFvAYB9RmdhjkVqvq13Z2Az8h4zMVsWPZqb57ndJpjn5NUSQXB6ZR8iYQYtJGUh3D",
  "key32": "CC4TtKs3XXPGyypBTKBNRXKS2bR864vAaZuLZB7VwFcXcw4YGuy3SC2UjDjYvGPaxm1ihuATYfp797E1Nf5Pr68",
  "key33": "3rC5LQJXs2wWH9nWNLam9rjFLfUtEbAHsPHTEQaFte2o5QmvtyzSg1B3X5nEUxL71TS9zYMehf6gCY4mHZJ3i14f",
  "key34": "5Ya3GtG4BooodioCTVPBzPqMurVHoZhYQh4GS73huALhwrEpq12Wq4zGBpGNhfMZ8WeGCbURNWEuFfUX9PAFHfBo",
  "key35": "62QJ6cKXmFhdgxY8NyYfgE5u35T4FN49Z1yCZhZRf2D5fMp6D1JfHCf6SaMDWcq7cxnvXA6YmD44Bc8zjokc8ahg",
  "key36": "4AUt5fUNBA9dj9rznYiqvAX1S5xseSmo5SySZTf9TrKfbVif9Yb3JCFFtdoYMpmznrhRx4CvGJwMGzs1azymCAvr"
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
