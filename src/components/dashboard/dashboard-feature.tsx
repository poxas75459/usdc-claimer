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
    "5eJXUBtpVTjBsGMRGhBheSLEwLPHE5JxNMVsrYwmXYQMm6Q5x8vC34JYdbRD32gZzgQuXmMh93veiw1tjTudzQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FUaQLvUBSHXvfx2NBvBrTjQw9K6XfUjK4LoyfViaE9HGvz7VzRhJ52YSZRoJHQAxDHd7wvmTWejzTDPU5HDqFe8",
  "key1": "46TpMz91Ps1u8tihNy1hQb63gs5pXcQD9KNbE3sZL3wHdScNaov31qzotA5cqcjLedbjGDfFBbZ4GyqBHoYjsnL8",
  "key2": "21CEjTDmWkAo5seVDpyGy2dsg8bYrMfiL4tCLcJ81BmLbi9CdCpCDE5itmi6GKWbiAuKbPyXuVRBcS5eGrFkV3Yd",
  "key3": "QcPSPadukQrjvg89CbrzyCfKT5AcMSErNPEjzWthpFnp2xBdTi5QDLA39XbWZRfhKGnV2JfU26gPrQz8avA2cXr",
  "key4": "BF9KBWWqf7oRJSyNwEPu4ubRPehWLVG2ZRiqHhWRgznfCtsNZqaQ2JQTVkoVKbCEmB9sFdzUo7nZFABbC1GeJWG",
  "key5": "2fFAtFptHWkUcMwAYHqvDoEYvH8ZuC1sUkqzbNm6LLcP2QtzWHgAMnKBTcCdcrVaurbaPUgW1x9o32XQpiUeuSWR",
  "key6": "38zvab616gm3RtJgUTjVDSyMdUiysDXmfwrS8TQKAZjc7H9opPADSvScdSAjkQAGmmw6DH11bZjYdsVV4cV3G8W8",
  "key7": "2Ci6RFihXjwtMWRnBYyPuiEJmSADP1bAq7gAgX5bzjGHQ9z1ngZNh66AfePHE3uJjT1uWQKRVtnzoJLhadiZnPTR",
  "key8": "tZNgTVMp69vZyvtkCVjuxFVsDygPmQDY5N6wta5VZuiJDRDntY7M9UGd4pGEKTQ5Yv9rBa8pFm88vsDj9pHmZy7",
  "key9": "5daMjCaNgzc23PyFGz4864KJgnSNaF7VVs8Doat92fkWf8gEEjJMjw1vMVuTut8VcSiGcW6VMMzV1j4DGSMUC5zm",
  "key10": "5dSDBGxuTbsv7ZZcpdzQtgRkLXpoFvGu36j8gazxymB9MQ1JRrmkwsdAk9LQGaEND29rkDe6aKeyzRAFyQfNzSQU",
  "key11": "3SomzrdmLV857EwQ9Zsjhv6Xagp7sAf2kiAJ6iFEkseF6rqNCZ7LwWz9H9QqwzDVHi824JU6EBmvBVoRnnFnxB2C",
  "key12": "tdpAuscEsYxBv4mJxy8VnfT8L3LV7Wk1TYnXG8rq6G3sDAGSWVvmuH62Yoizm2MLkyKV8BHW31m45YHRBop1CNj",
  "key13": "5TpmTZDqJHaZM5GHUf5mDNw8aNDaym4HyEzXiagvHx8HoLaybT8eWTjrBKk8RoHzJeNSuQCiqfEUZSXDi4vSYNgA",
  "key14": "2MiibSRsst9wwcR8sygvhf2wD722tJrdv7MPHBodjaY2jufK7dGAh1wMHmk7ywjtLVkQXioM8BpDJJAx4xJnxP2r",
  "key15": "rH5ukmhbRowKCBZAX4BsEEcXNv75211vBmD6wKE7MKnMcJXArErfDqgkAUeg6fuq2Jk4HZvAnLMkSR1eg6P54gc",
  "key16": "3uvCfEn6bH6ZHFdU4ya7Dcu9D7TvQmmorzSfymCgYjBgzb6DE5fLDixk821HEVdCeM6V7kh8HFoEvsNYeuztydLD",
  "key17": "3PGMPRjB2BjJeBGNDXjqHgC5bbLu2kiS4iuifV3sMqVcUwHzSzqjYiyqy3qFp1xmniv31p6s1yQy2Ud2AMfVXthy",
  "key18": "3CswZngbzVMvefiM3FpAcwjVdQoLvS4x4hCF6UUZ9V9xhmmiqtj9wsovJdbAxFapUDcpFGCnT848mNHLRtZFWa6",
  "key19": "3HLEDrgy75YaUBf6pxvUrkx5CU6CTv8zoqfmgdRuUMZzYX2xNfSZqBRibSXWkLjAHYo6LQnmrM1vMc4eCc9XBeFK",
  "key20": "227EJH8byzhaCCtUgXu4wGjzDfgEqDeUsFZY6JBhXe1YXJ2xrDzJnUzweF87oF5y5V4dqaSC5GEBQZoninWyJnJj",
  "key21": "2y91RU75Lm5DySbLAXQorULemqmY4gF6v7XL8dmQzU5i8zuVX7uPLTGXSfDntgYxDU62tLgPUAJ6kR4Gh1j5qNxx",
  "key22": "65LkoLnPaV8YuG5xe3LkrmDwpHYdLATwLUZTWuVsM5aAoXqjdo7gFYdPdCVcLjAfZ5UpX8LnZQJh8sz4kZLCkdg5",
  "key23": "5noVzf8ALymYnGRfrP1t4pbwXL5rECcEisj7NSFE4NFLjT6TMivdNztY7bwzAqq9Uv74DVVUFYEVBeYnDpnVY9Ap",
  "key24": "oz5jQpAuRR524p38qoo2Bm1qa88gL2Rxg8QCJjw49yPr7gUo7BcpJAjHwxijuP3Q3JXTqJF1zHEzQnCeHs1ncqe",
  "key25": "2yvsrrCFbctDL5PuaqyQX3KihsSj5QEDpYLtXTHenqyYBqP12qmUfTHdiqXySeaQur654ZNFNz8761uVUtxZmAmE"
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
