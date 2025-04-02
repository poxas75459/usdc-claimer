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
    "5YPRzpC1W4DKiw2ngM2Yz8xApjeVbjb74SkX9MDMKAzAtAyeLC4fZgyztpP97KVAEgSLTVQszPxqANTE8QAzTSwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTkYPSkfES96Ed2MpnY7YUqFeX8g2zxordwuoPRAJcWbbZLXkP3eBE1yLWB6oRZY94aLD3jMxp452LVPBrkkep2",
  "key1": "5LMCVUB76NwNvfbnqLq4UCgMHDUUm3PVTC1sn2Th6evea6wV8BA7nTfLsuL2FyieLeYS9mTxaps6gfNRMoBCND79",
  "key2": "2UiZiW5gjxGSDfMUTfZJ8Cj1krMGSKazyYd6Er4DPj3siun3RtTYJiVfucW1tnSiqmJKV9wJxpc4eqJVZywzLfjD",
  "key3": "xR3bfVhBB3yHcTS2Mu9aQiLu65LPfF3HjqKbNoPKt8h1WDrB2aJ9LrZY7dZW8Ro4BQ4v3oCnzFbw2E3FZmuVMwg",
  "key4": "3yfrHM7u5SmjsRGqsdefrD92goQGXnGE1wmdBM7yMM2FRQ9snQVEP7g8ZyT8RykF6f9di56tvKocmQ2JXhkCwiUE",
  "key5": "4Tz9B5qhQi6zYqXx9M9qj6t3cgaCMsAkeQ8QQ7SJEwfvzx5UGGs9oZR6Sp6dt5FtsKGPgxHYAZ6E94VxnYvGfv2p",
  "key6": "37JdKGzpiBJTciWjvVF489GAxYEt33R21pA8ZGL9D7F1GY9r7BFv4gmjqBzDq3G6jHQJhbnaNbna96q3eWs9GBLs",
  "key7": "2VNebn5smzhFUwJ3X3BQNXfwgq6h8SKr7GuxEJ7VwTwQR3QTah1EtW1JDV78e2Uevwjh4PivpDULgovV6MgauHfv",
  "key8": "5ZZVmvKWErYEsTmZovPnujukou6nkybG8upkwmF9eZtWuHswik6tUFYncDVRnLBPkymtFXhZ2UmqJu4wmsNpaqMX",
  "key9": "4z9LmptYvyARXXQ3SuQyRSyotPRF5T2XA5xr4eDF5BfmuAhXgos1K7NSTvGyVK9GNWA162cQemXXs8B9bkd6dz9h",
  "key10": "29YKsKF33NrZMWBvurnnA4aCf1MhqDKKB3P6WsWiZ834P51tP5dJGCkooRZuVYwRzmTm6VkCxDPGovb9rD4rLNyC",
  "key11": "2uqKqzUF64zzzGrTZpnFCSMohT9Gf1RzXBUtCT8tZTEb26ivFszS81eKoDftrs6tFcWm3nofMGDUnjx6ybxaRmGT",
  "key12": "L35j6VDNxaYnKiYbG5stCTVskkhVU1A93uHi37Bk4gdJvREsjEGo7GkvHSWSZczFJF4iax3ymDoWfPgEhrpNxvo",
  "key13": "Sdj3vhGYCxad6yFP3z6imovipxQajU7JyjJDcSxwZermQTg63Mm5cSbNNdCi8X8Vf4ccLij5DGu7xEipxXea6UD",
  "key14": "3SMXJt13DbQWoLo8fvF7t6aQxpSBfBhTPJnS679BEHRV7jTrjKGAzZ53mWtGaUmNfrmbZQFzCy626K3CYgPbcKyp",
  "key15": "42RujM4aayJ2xT5r6YEVM5MjRywd4mZbsVRiaf5aKon9RoCXt8Qc8oHQNb1RzjTnSaQJMat6iLaT6kJ7c7UZ8At9",
  "key16": "3cZpf7DYidhaB3RoHaMSfeQj2qr5YKjJxubM1aPEzaqJFJYvRkHghbdQg7jyfEseChemECdUpH5jZKPWn5zoxyyH",
  "key17": "4DPu8D4ptzd8zXLcT3DqXCXGBcanXUTMwMonrrJjERCJox1oZ9p2bRp3JEW4Eoen72r3ABxgo6ZHkXP2XP3svSWp",
  "key18": "4jtKnwSNGVx7awjpRpHXqnorM2FDeDxj3Ka6HdHPQBFLN89Kv4juHyYfLDsZQGCktDL51LVsMULqgg8yeQNiN3cd",
  "key19": "2RgcqJxYqhHLtmNRoZpUDhdSNm8d7W1GDmReiep46iw7noKoQ5GCL6ACWcT3QswhDFSgbxfPFZzZAUYzg4hjDSQH",
  "key20": "5H36Hc91sBVLXVTyHwJ8G5Ng3XmU3aGMgLV6WY4MkkoyRc9uQmeX9nLvkrmL1CLkk43v4UoLyL3qMJgW57UKh6Bw",
  "key21": "4yQLsPwLRrCU2z3Y66mhszLtxatJNr8kvreLPAqArd44YR2e1V3ZDa8dNwREzqaZqAqRk8YJ7ekT9YtxLnvRUdsG",
  "key22": "3FHa6dy2XATxCHTuaMjcZMSpeB4pDi4urxLFtz3JVNGChD4W4wETqgtu1Pbv6173tzEeQx115GakowmnYnBLdw3k",
  "key23": "5XCntmdk5RGR7h25xAGwXX7dEoFzXTS6aGDWuihCG3TCZNMHCkN4tomxeSpgaQ2rCtrJYXys2VJyeDhyNMYYvsVw",
  "key24": "55Vkk5y7MEmoouD7gDs48XjhVbBMaKU1ZvtkuP2rPWWHXeuXoSiEkioDfkh66jYmeS3KmTjaKsu3DCjNqQtyJACM",
  "key25": "5Z4GKs1dPeKSc1B14gBXvj9eZf8zGPdnEQxGGmvXDoMkkN81Fd3iw8KVpSEz5cXG1utnbX9wgtsm6cFirfwEtHSV",
  "key26": "3GvS8QQyErasLkZVGPp46PtqLn4vf64jMmdac3jsRT8qR4pBZesWBB7gine1rtmyFV7G3Mo4yPzJwSTf6j2QLCwA",
  "key27": "4coX1EDVvgH8mNW3CkbN7oS3hSvFMmoUUBoTgMsrvRJErjzUZuBvt29zv4TcnFg6ZuMadkiAKAhrYb9K6ennRLVc",
  "key28": "2skqmSfRzLr6iJmP2faudbDH3TEwGs5J7Eu1DUAWfoRqYcUxttTdg5uc8t1VMomec7yL76ZGKSPDT9JKUFP7SRY4",
  "key29": "3bBwJ4SaLrygS7vDS75tAXgL4dWTFEUVKjiePkgkz1RQS8e7Jb7Kiy4VUFaEXfeWi14a3o5fzQuDkfSwWt15keTn",
  "key30": "5aLPB1yY74eCBE5JDdnTiGctj8YiUA3q65td1vUdHq89sKUuM2qPc15GBGo1tH7QNBzG4Wstv6uKHmB38KRjjf7B",
  "key31": "3dHU24Ye5wa9X8UHFgrLpi2zLWUPbSjvhx2XapeR91xYf3q7TMn3Da3kAmbRuw2qT2vj3WZyMQsSxbjEY42YAaHi",
  "key32": "36eHFNh5wrG6cLCB1xNdS23sLDN3BUrea974eQqimZ9mVVn38AMB4nJbwEeUg4eQDxVLYQRhZ5cSdTFeqiJP1ooz",
  "key33": "4Y3v3KtrVM2BhpPPFNdKxVLy8vnnqH2vrMLnYC9edfUxthY94PMjVY9hFc23b6xwP6qwYqTmkek39mBegsXDTw7S",
  "key34": "4VMRGoyEVbaRwuHjUuVCRhmyKFUZCkRGf7tNZJVHpKaQ5AnjmZQo1P9Qp6HQM7kKVQE5vtFQJsxa4cj9DKSGBHnR",
  "key35": "4Q2oMzLufivp1UKXjUAX7CB8M58q8fFqW2Qw5uFrG5Ld7yFBJLkLaZVDp13m3V5EKS3mfBNKqFd8m1PzECc8JFmS",
  "key36": "4w7VyjaNAxScWSeWZANy1PwqQ8k6JeLwmVtEWJvKkxg7oZTRdwYUfsJENuNCxV1x5oxWEG4ga7uWMKJ4bQWS1WSk",
  "key37": "5WiiEUekPj6DdnWWAnmjVQDEJGM8PCtnUwyA3hwzR5HtVi6FtsGv6GGep7YJYfZ4bj3VgAyNuEFEsqzBaVNovq6M",
  "key38": "4EnudgK6k36dmxBMFSRSTotEiBBAN95mFNTBtw38kA3i1FqssjPqRh2TAbAKQP35v1hSBFtqxApNHrNHA2YJsoUu",
  "key39": "2JS5Q7c2Q3NyAQbCeWrdigq734po2K1HJBnCBpHmbxnhMsvXtnfDqk1avLxgGFma5Yv5bAJDJzCp5TDmd4Za4sE4",
  "key40": "57Fjb5ZUDMZa4BNTZXQCAxCQBWqbr5cNUKrRTGpSzibAtujUpcHBEGvdbdt1CYD4HJaXj2bsocMtHpWNuCRBxMno"
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
