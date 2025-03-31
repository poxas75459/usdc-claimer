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
    "67XPZT6PaT7EiMFeUnbwMb56QFpdZ9Zj19ZZrqpK9modsEohZMRjghRXSWAzaejtjBu788Z9kqhAtNN7DwWtyzvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJ5RyoEiEp9t2owEc6daTEFjnmuvikwPLfC2nbuGom9ZrP5RqnXijf9wNRfjpD6GyihUq4YZ8sh25TjEkxACyZ6",
  "key1": "3K1GuyMxa6Xm7ykVzMNiQxAm5kBoxYeaVaR6mB2ZrWAheUfbcdv1wTR1unFDgQ8wpjBGdCcC5iqDotVUrFiLtcd",
  "key2": "3uwuQMrUY3khjpUyCufppBHrfL8qKEEQAkDB26ASUAhwuubypP9DijhrbHTiqYKMihSLucFUwajbnSNhnkt1Va9B",
  "key3": "5JMFAEMkvhXUKemaUyPoMrkfg5qJhoH7WYEZYciriRj64eCccetS2WuftAccynxVy92SASncP6HNDHtULAwyh8bz",
  "key4": "5niwgvNVjj69tkVXct3bw15em4MEpsLkh1HEYsXG9PjM5eLY3NuN3VpY8QiZMnH7ofooqC6TbGgQv1dZ6X7Ksumr",
  "key5": "4iqG9KmZWG1fz214Ww9Mh4Pn8WkrXMWTGGt9Sy2MKHBb2D8sNEseEUa3JGEv8ApsCKQMaPpZri4qXekFQJzEdnPK",
  "key6": "5UwC4ZQdXu46euQ2FM6z4ZYaiQjmz73ecn4WVTXACV5P87xnj3dnbXVX8e2iz3F5tzSq7UqnTbyW2LtPSNRMg6G1",
  "key7": "3uHogTwav63S85bXnNfTRjP9S8j6tjTar3sP2RqXk8U8r8pcsbN8GUNGnmzjguLotRvcxjaDJE942fBesWbeAZDe",
  "key8": "5kswt2J1Ptw5M9k5HrifgSHYqXEeQy46ntcRb5Qobq6tJx3TeyYbAhwjFcdPnZDeoKLnmamhWjRfdqEtBCp4K7Pg",
  "key9": "3zjwoJ2tzKEDPJ39pShfBjqqvs4SfPyaieQ7tNgGep2M8mmdDbSBWR98zMH98LVMVBYyU6X4XdY9HwaViHJUCiZz",
  "key10": "5h29EBvMBqcNxp8mBBwHQYUNpQmyykBuMLdoTGRqgvs1uREHRtYUZfmzcmYEsUpUbGzdg3PHw5mS8NGFXdhATc3F",
  "key11": "21TGZa2yvsYeBXQD1cB3K6wKFuf5Bid3JPrabFXMoC5Byw5wg36yogwLrmeP539DHctxx8PetaEsmcnqzpnQJEck",
  "key12": "2qWdEdYJ7jahySPipDB3VV1tzADc226Yq6JtRUv1pSgoSHsgirp53wkJdZrJtXFMiUvHiHgtNohhsEym6qhLvbE6",
  "key13": "2fqFnQySdNYp6mdo6zmEf4V6dtSkzAAcv9JegRLXGYkzZ9VmY5o5bnpz8ATFCYhYYuuviJ1VNGBZ2GZ9nPRaPDzP",
  "key14": "PvcDofzxERu5sYVa3QV5A2MMuRWdmFh9iBiYTABcqzCVhtCBijYjrBnx5GaijF9Fe3r7ZDRTcbmVK7QZwpy5RC4",
  "key15": "rdQKkbfwLoy2wAKXN4d3pQMhM9PefiQkQcLt9jbHuKq9EyNXmvnRBmp4ecPN4WKM6GBbQKFjtFkAGQXZqiSPqS5",
  "key16": "5jDSJw4qyJvYbRPWx254KN9rBbi1u2MvCWC9Ugi9Y7JymVAaZn3LUHad1M8YhsNAqCtRozFkBAbfDEjX5Pb31tbW",
  "key17": "4gUSrA8w4XD116msCfib9pAmrZD3MvJJcrdAmsQT5Kx5f6bTLL7XLRLjwFbHi25JbShvhiW4oodGLdtef6ibNFWg",
  "key18": "2SeSm37sxgXh9XPdiodKsT4dCnsabiMpYYNj1CvfAASHXca5cMk4kGKj9Jem766dqHFADnmfdbKBSUjerSEQHZJG",
  "key19": "4JUqR2KTUPrrXqW9ABigWHgJFEedkCfMxAvfhbftTkzFQ3bBemrjrEsbHYfBfhoeyRZWfqVP9gT7AiUawjJzWgse",
  "key20": "63F1nHcQHGhakgWevoRoHHcmG8For6ktrdssjbTXqXsryeRmKxsuCtZxnhuSQdNJY785JX1JUSMk264Z5H4qtCiy",
  "key21": "3uZtEZU3e2F9wpZSrURNE7jk64x75yuXrZBXVZVKTZ5d2v2gsJPTmvH8FoQ73JvwUQnqD4D6rj2xcX2PkeNPDxXz",
  "key22": "5pz6o5xDjwQ6DeLreBWUYfhVK58KQsX2jd41GiUKdCvTE4aKM1qjQTzyxP9y3bpfEsXiwZhgvQ9KrYd2Cz5i1qpm",
  "key23": "5bcSft46zZba7s66EmGN7qBuzAVtx653SCyqE4qFbkr6gx5PfBY8mLmm7Z37gNPtuABxmnxsFCKyXDYE2dQQJwYm",
  "key24": "27LU4CHWQBFwPh9w6HaVhz6XRPqVBtWTxJ31YmUUdcSTkotzamzF9CVfk4uRhjNZY62q7RP8qqremaFNWo5w4mAB",
  "key25": "4xmqMf1KddQ96rqgvZ2yBNLQua6PKpmMX249N3V2BbjQM9TuGrCKqXGvKjxvfBL9AK8RUHD23iTKYwikw6ooTqhL",
  "key26": "5QNxmQyFCAKXMxXNA3dVDy6CneUp6dA9FeJA77r5JDezFzjkfPyFbWeUBF5phddRvt6h2dxLFPexSoYKjj3YnPAX",
  "key27": "5tvp19vsKeqcSyLqE6K2us529MMNGknFmuBnkN5gF8dJ7BqhR1t6XyuRWBYcM7VzsMdMS3ZZKb8LeGJBZ4vbqKxn",
  "key28": "555uKU8npGTpEQ1N25TzdxwzT2tGL1GLUwm8rxLK9YpXgFVPrQqZVDAQotV7Pp9SatEpNAZGS6GbZ8CsYkdfgoM8",
  "key29": "q4fGfRpMKDcrBhRmAWceqVjw24xVQeR5E91sHiKtX2oCDR8E1tFqisjiqkDJN6R5B8AddYY5hENMNVz8Ydto4p3",
  "key30": "FTeDp6HbWonHbC6hfQFLd1Cw2Qy417TEpeEtBuKK9yxxzz5HLxVzm3zfiRA9j1ocVZLug6uxmmCLv9SNobfpuSX",
  "key31": "3z6rVXrKxGc327gAnTfwvdqxCELMk1e9dMGVN4BrjsChzVWAf6stmCdNo7s4QYXnM1ot4q5XrtggKZ4MrAaoesj6",
  "key32": "21oxiB4QrYxLXwnRVC7GeuT9y2bNKswHFugEpXAqguUeamPcP7PdNT1zPpPCFQX8TtWu5ywDpArfzjw1G94HJaUn",
  "key33": "sj156H8DNLEbRzykvazXTTLKTU4vRcFqANCWV7rgFhR1xzr7nRAjVxLdL5q12gCthThpEemasRP3iJptpKB8yej",
  "key34": "3EUHwzqrFnRrn8bHM33ZZYx3eqT8zvAzbLLCgqH61t7ib36xMvb9NNBpHsy5Ath8qZTqjyhGjL3LQWBQ7PuY4PGU"
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
