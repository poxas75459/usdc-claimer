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
    "2zCqU2jxwkYgLmLQSPdNB63xbTMWhH8aGVKBzthpJjiV7zQAPWDAVVeBjdh6ac6wrsXUtPgZYMgp6nuuMzJNStri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65y8MgKiEeifMDBBj2StefEnrTLKyc4kuAhofQqUx9Tj3qqUpZWojdvwB6eNnsnfzAqjFvGhdpjsAeWgfWPX3WWK",
  "key1": "4DoM6tGUwt8hzDgWKqtdUPA26GpkYaydy1sLS9jEWPTLhUVYLUBMLM683Fm45Mw94iTJpwgDP9LhzTieoXdCvoA7",
  "key2": "FCcREJxC2ts4caBytrmSygo5QMS4jzu87vsjjAf2zRcM1tDHc98ACCdMmH6T6wXccjHVT4Hc2UYQ6b37LP4toV2",
  "key3": "2K9hobWmexAGqxp12GHRur3AvAFFf5s4KT2EWcYnkLmjafC8YCT8jmAiBCJ9DiniKCPmNWkyHV4dnVRARTRsQ2Bo",
  "key4": "4sV5jZXweeXCsxVWucY5wprWP1DsEqvjiZMKALKUHP3WpuzBm25wiurhwLJ5gk2JKZ5CiZSEqbxFnJqJrUQ5eXAC",
  "key5": "4wFZmsyWYcZc6AtgPkromDYJ5SwicSHs8ooihE5xRQ3aBQcowZ8q3K6eXzEPyfeBGzRaHohTXn53P91YUDRW8Tbr",
  "key6": "5qocfTbmCREQeZ1s9XNe7HPoTsnNdNbNLqNQPkcbuxUu2WYnRmHopRBic8PDaHZPZW34fnhHqt4gHU4Aq9WJ3ZkC",
  "key7": "4BZF2zQ9yufFTX4bjnFv9fPDt2P4T8t8YffmW8zvtSff6m3RjctHASAVNZoUjfEYP4ipCd8JT6h9AjBKcSSZ4YhK",
  "key8": "2tBz7guAnC3ZovUuX8rmjQRxqhZ3wis2hfUoGogs37a2das5dcwfRtNBk1Z897EBvKnHBdw5CuHm8HFDBAihBFck",
  "key9": "2m7mjFxJqF2BB1A6vxHsyDM4PVASmt5jU67aG7YzaejGBW5cLgtnQfoVemKPvzPWaA6eBSJB94VwMQ7PpnLHJp4v",
  "key10": "3pSsaBsNvBxcAWubUKnHbKKz7Z7MjptE5H8B6UXshbhwkydmKK6BTEn3G2x9PvjmuF9ENf456FtN6KVjpACh6dic",
  "key11": "5Snb1U7k85ZTbnWT5n1Ect6JdaJ6iui6oSTzbTcuzzj3PnFnadzbU4seZqS3h96aN7MPYx1L3CyHRKGfJFf2NdTv",
  "key12": "LBSRHegWU26i9Dgrs5bnaqygQn5DmGLT2D6oukVmG9JQaX5wP4yZBG1BTzoSckLsjEcmusZaZBsf1nKXXKkyyfm",
  "key13": "3pwaiXiETZQ7451scS7bdh4AmVpQDVhpLk2sFogJ411MaoMq6iyAACbUUo8pPV9N6mMCDJNJQTKP23ABh3oJnpx6",
  "key14": "kKSLoDju96RDZCwRH2ELHRzV9wPNzaaQzgextD9do8SXPao78pnEehuoUDAHh9Jzy5Yi3vC7EtzjuW5m7Fc7BGG",
  "key15": "FKXzGRbMg6A5LKux8hUp6mrnTQHYMSaQjE698JSxw8jwjjrE94GXozKVqknu8YtzoXSfMHWkdS5mCvtAhb4mqVU",
  "key16": "3qxzuwtcAdseJgYjGCZrNjn2SMbNQknK7X7T4mXo8KHASZuPJzEZi23kKsWQqzJT7NvhpSH6mtFcvFKhc2j5dQNP",
  "key17": "3DZ8qpK9nqCRSgXa6awBLsq5Eyf8xxuy6TjM85ZnCVcL7GLQR6GygW6NTGJuep5m1QpAbQk7PZYAdT9vAycS5Wxr",
  "key18": "4WYNwnEkeGkKZeiP7vrp22fLE58tYigKsHEPboLW7jDswUFmDejTioaGQjsfCzkWAH2rycbMvevFcpBNPx488ScB",
  "key19": "3Z1Y9zLtRW8b3rdyEeFMBcxsPaBCz4dWNJxTdaBnKjGbTGMUx2SPFYwV7XbTeN9dH3snfD2Uyx1fc7fovzgenhBk",
  "key20": "45BDaNMLLHGMGjB69RsAdkPwvFzAi2q6VTmZoFusCHGmXNNWpPcDmVWCvcahXdu8CUNjFKvvVkqBB3yspxFxVoH8",
  "key21": "44BXg9pktdQ5BvHKku52hQsn2Hbj4FPjeFG2h2nRHHjtwCur4Fe8xh4PmTUNiuLQDE516ggEqRy8eHtUuRhAxpjd",
  "key22": "3kqofWPXXdQZhwsLjwBn7LeKDeXvxg16sPMS4k8CKsrzVgepGP4rEkcyZFvXoahM3YVuUuEGSLvtKoYrWgUeCTpr",
  "key23": "uLxLBwdZckhc3Zoy2ea1eWymammvevLLpZShWU4tbkoZNQ9RhBWNHQf7pW2gp8fHxGQuRTGBEehihKBxXFLsqLZ",
  "key24": "21eepc6VcCho7j8V4U43KZa6vojRA8tecC9rLQvnLb2oArzKZRK4dgVFon99vznfY43h3C8cT5RkGZ8uAG5mjrn3",
  "key25": "2Ryf1pikp7jcQjF4hz5Y5U11XKDH5oaBy49EMSCHCtDJgdssVmxJT3hC9kVSHZHSa2NXdbaLFeqcAyFBsm5ME5K2",
  "key26": "59tWHkq6d8Yyu4tN33GS5C4oVSWXC2PWSskU3VHeT5yZn535dNx1CTU1PPdJQ594CUaiwUq9hEnHpYEssTBU7n97",
  "key27": "4ctreQ2shE4JgnaT7sZ5tiqpMJSVK4x8ZXgmFBmRpcG8gmFQUVnBqswHKNAE96GYCShgZoXse35ouUkDY3NzaVAS",
  "key28": "5eR66CMT9Pn13mGnKB9whzWY5ryiqFZktF9imzvnsxRSgxfcwvrjBXJfiuX1XMoyCmQWjwtXZojaVjyGzuTVuJme",
  "key29": "KykixJoBguunsv2wi5M8qmi3JtSSq39W1QHuu1q5eDKaKCBcFHi2Bv9o7AjeyGQx6GhFC4EaxzQPdjE98qFmSZ3",
  "key30": "2yrthMnSTxMCzj5rj4YXDwuh1doPj9fKe73hHCdBcruJBJtffUqFj9xToZHMm7XTEzK3QPuen2LeKXK1ciFY3Yr7",
  "key31": "3Sk5upsS6iXScV5jhYYp9c9CD5NGsMvog9yCPKYCqbLjmM76EdGw9ZMnu8JzZYHrjQkPo7MvXuvmzfptjeNdH9d9",
  "key32": "22jd4FMBwbP826KeYQZzDebwrybev7baSbkZcxi2WPqnnB5PemJZ3CAvDLbF7nn3HAzLD6ydegNWeF8yEg6ZdvtJ",
  "key33": "4jdKe5xUXP3Z7GgbUbAnTi4DntLk4uwWfWSfy5DiNfSKx4FHEJ2cjeiEvCcoLbNyJyHprBKXnPoNtKCeR2j9nzFV",
  "key34": "4v381GousH1zGg58ZtHkyhjD7dLwB3WeLwJs2dh5giAjwXJFiozDQyipoUHrbJdmMabhdiVxTw25GCPUnPSndP6z",
  "key35": "4HJXPmJnFePKFppzmx4cCsxKgWJxTXCsZiDzo4CAAUYAt7YdVXgoHR67pmyHVuFJ6bjWhGFpB2sdQABhMPNpsVQt",
  "key36": "3tw7LJ6Ev2KwZKELRceckzviLKyPNgtsN2sADKoCoRP6FmEKzmVt138QARsGZKBTJRCK4g85JCJGqo4E396GQErR",
  "key37": "3Qus39rJ4nAFU1YjDfnUha1W1k2aqinnkx5TscuQZjEBWqSjWNnZvKW7uKJpuo5aeA1BWvfs656DQpK2x4rDEoFt",
  "key38": "2KAumKuU2e9Bu78mopXSmo7bGAhUtuBco6VGmrZUNkxgsd2Us6dYTxhp4Kk32ca2vy4f9J8hTW9vw4h25MtPrGQi",
  "key39": "48p7CMnk4J9zAktUU6xb543GvdZRPkRyrx8dGvLniBxGb7zfdqjUYXv3YHswVTKgNqPB5gK3qBYf3JFrMV4geuZk",
  "key40": "LP4r3zMMCyuwFsHRQxHBzSU8jMbcHwjC5UEeHoSCm4PrxraKsjWztzficboo2jL5x5P4faPQcVmvtm5PzoiaQty"
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
