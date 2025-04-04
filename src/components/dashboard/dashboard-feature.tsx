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
    "pyKHWYFNWvv28UwoKbGeXxKXcWpChPj9w6zh2qKpMRxv4uLSfbKDNJXy1FHNncKXgJSd1gCrJkXGzPHVvLSrSKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2499pkAE1W6pV9rGEmGN4bPxFq6s1mdnTSGssuhG7zH6DnhrdRyCqvnDnVKDHRQT7kyycjmJtTw3qPc4bzdMiwni",
  "key1": "4X1qvcnjCL4PzWn8TziMxtBrGyyT3eH6fJReWFbd2CB7j4hBLAjjt13UeV9BJzpLiQAhpuhj4YrEELBTiEpHSscu",
  "key2": "5Te7vhWVjJAjNq2C1YxxUkrC4grpCCSRxxbhcNZeFwmt14V8N6LPor9FTP2337JHsavmAZp6HDGqAeDuU3Zn4B7E",
  "key3": "3JJ12FMKNqj2Cs7CJwohkVESDQvytqG1PngGiPW2ai5XJTZQLWHrqscjpsAhiZ3rkY3HP9wMTzgEByz97nQNFJtd",
  "key4": "zy3kGBqMjmrkBSyRRYBMHBXGigSqUctymK6ifsVq9pfdJQyirQ9q6hSEMtKex4YvDs8qWDrb5MwiAwnFW5nc5nV",
  "key5": "4PnaegF5KfHpFNmrDngNDfHiwetTAHcLrNw2YSuEZDcHZzjM6N2DcFMp5L42WnyXGHcemJF5yJmafxCnqr79ZwVM",
  "key6": "5BELvwmUdzKT56T3sWhW9x5T8xMuGfYkiC2wfZQE59cxuZoeZE6sEVE8DKSnfK11oe5FopWR8ugfGyrXexeWmdbr",
  "key7": "2LXJphK8YeWjXkTqxnT3fnSJdrM27eQ1fP7uXC1VVpbkGQu9wMfzpCuXmYhhN7wwtuiMbvPZ2tyHBmceCHX3L8yp",
  "key8": "6sPkvGUWfH3iHmxurvFejxe456Q13YcEcKHGQhPJXo4S6PrtvT7Y7xqdTh9ozeMNhf5fCGKa2Qer8u9NTqqPHi9",
  "key9": "3ZYwsg7DHNCm5Uf4RWRRRVBqb768dQBpkWvThujbyCEcAiKB78b3n8RRezWPbZLte9vjCWFN3jtgVZzLa5a7PwLm",
  "key10": "5zFjP1eZWfkc5jdTHn2388Wd9agBCGy68HEbUZEvSUASNsPiLp9h5zVR2AR6RBc7iQ5pLfAtySP8iZFcbEZg6SXL",
  "key11": "2J6g24quEP2zCrXCNow6RY5N3ksMAQtggajUopvXhbzAZLXjrq4FRtR2PXh2kkqRfTbKj1xCqCakdxkwZGiQt1yv",
  "key12": "HbicAiFt6jrgrwz2EnKpdXdr3DNTQfu8PQbgPfPqbigBUFjRGCbMgR19MQVotQUrBfvG5uYQwSnUrjXk9aVufSs",
  "key13": "acWtQqhBgHJMZB12TukQi1mEQvRrdyEUrXaSfk3X6UzD7jPsDQgVvo53tfqCLstKauXJUNPfRdprKzvxFiVabiy",
  "key14": "F7tr5AoKryPz6NsKHSU7L48Tk8LNcTtP7zEp95L8dgAtgNJpQNh8hpiZFshBYsVs27yQLjQmAPQeEzDhx7SJSec",
  "key15": "5y2w3bRAZEvmmdMbRmqg5415nJbHqVj3Jh16mQHrvQMwYkuF9QKpLGNsQ2XHsAuuDpgso9cF1FHx9qBiqV9wLB8u",
  "key16": "5j6FuW73qsUjhdxxV7aEPKThP5DR3jVPCZPEMGSUAJfeo9MzjFZYuMYsXkgohTsn4Vn5QHShYwzTTePCpTFu5kwE",
  "key17": "2rywsnkngFpwU5qXwkUQekZ2FmaXCw9M4B6uMHn3uEdWLGVyDkKNKL9yh3FHWuP2RsmWNouMP7dWYvVo8TBdYqPG",
  "key18": "2cqQkXqtWAXhnmrYzmqDYyddwoJc29pDdEkLb6KvRxJHi2ZWSLjSNkFVcPPKt6zB7K1zqMv1ajNu17yBK4VTAera",
  "key19": "nCEZgRrCsYuSeFDyCkH9CHRQi5HBmFXGYTLjt6yDjwfru8NhZ1j2tBZejE72shXU4a8aEUhyTo6THFP4YXGxB4f",
  "key20": "2gr3FgTRMBeByQtKZpWB1jBSAFLiMDZKoTyp96PCUYJGPMjzhgiMoMXSHZs1QM7QTv8uDH8h7tjgG4zmyB6jw9sB",
  "key21": "3kujFnr8YvqosxeQY8F4jLSz4qtcKB2PE6mm2pDJksTn49ripeurWbWVL9ghetRkpB15iLDEm2ZXSvLA1YBx9i7p",
  "key22": "4Hc1tFgPkqcTbokH7D5vDz1ZY4HksEcPmRgrKzTvQ8G7wqwnP4A7u16kKjNNjyVigEKLNC2Cx1kDBAyQGnbFtQMj",
  "key23": "44s3DQt8apMZ9PPrAsLBHtkZt3Q4mjf8tCNbYBaA5EDywg8aiQ3oHZ3ANJLLGVqvdREPgu1uVKYu9AQ9esqaVpap",
  "key24": "4mYJDMddHfMJNtaV4vDviCN5xnVdjnwJjJJJYA3Uy4caeX1CVEupmK7HPfVSbA4dRKKB6ENvdDMiNYcLy3PfJkxe",
  "key25": "3MuEJJP5W4RMgnqxrGLKGbiSXxc6vUGcCvi2iJhnbWEwbnfFBtLCwc2zEf9LG9hJVbPuqZGrtiZnm68r37p6Pq3J",
  "key26": "o7dzko3r7TW1UYAdhhRWNMN6qM6RSqcNjY6qGnpFEf3EPVJehmcQ2C3CHLcfoXbBMf9daQqr1aC2uVe5UpY6UQf",
  "key27": "XuSqe1VBxKS9MYfGmfFRArzqV73LFKMDWH82KTE1UeALMwE2JMUxpi1EUjnvTxQD2WXKYSbjWDVLjh5gyZbGzBZ",
  "key28": "jW8XbayhuGB7gwrooUZz4xgWhgiHDJbCkSZS97v3UgdDH8zoW68qZtr1k2eashCgwFSVaHCcxSXMmjgcKqcEioR",
  "key29": "4twZSBmxryfke6r8UQeSczNQHx7s7CAep4zBvp3q3ueGDXU237CdnPYw4Xp8zzirf3vW2KNnVpPgcBng8JieQ2UL",
  "key30": "5oDG4uAWNrtwuFxysMtGga1va6DouMD7fs5YNcL6TQiY4aX5Kr8mPb24e8uAvjo4KixUcq7hAhX2FpwGpw1TEccy",
  "key31": "3jSRotCva1kXy7r6WmQ7DSjETBEZgn5W8RFxWTsAuHpyezay1NwxPVUfT8eJ3fEKXmBuNLw4yYV6NaGQdwcfeAxX",
  "key32": "2WBPb563WBjNMPEL9e7EnrD2XYuZBuBhqeYBQPnMd2XtjWpJ8CP6DrMZEDJ182k8S7pBXFWcbexfbYfJdoyAxcTs",
  "key33": "2iUYLrFNotzWQ8AEcAWvTSJewS7hczLPFNfdM8Lbs97v6J4eqMg5PjLGJMGFLsfq62zqNdcAPAu8Ybo7kMQzMh83",
  "key34": "3PMSzVUucJPwuvwNaVGXSKjTXVftqUagyNgaUqbU5GQSDvyG1r1eZE3vc9gwGDBiwHZCEzESTqkZBLKRTxrsmG6s",
  "key35": "RyTT6oU4bGHQfvpPZpmwuACMpLKUJ82vwaciMKTGvorCHmKZxXtPzsYksbeStYj6KnkEtfBjs5nXAziLGZPfhcc",
  "key36": "43H6W9tDEAv71E6a6YdHtTakyS6qyjAD9GjyStY4rRHNpJfSp4nMCLRaAUYCUhgx8ZqFDYXH1j1kFB9th8WCwcSY"
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
