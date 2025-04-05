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
    "5d9kduo2wS5DiYs2j2vpHoCKbAaUNeeAi9pNF9a3FKZj4HDzZrELBRaMfsprWqRdN6kBzTxfBGwoYuahByd7app3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQEMSNxt7vKgsX8eubqCSeLgfLk7KnJWFMQhmaCKhckdpcYbqxraF47auLCcYbQnE8F6RR9HdYpAy1NTcQfj5PY",
  "key1": "4QWCDRKJFzyfj5qc1tSLeFiaPvp1Rbi6aQpbhd4a1W6UW6eCatwF3N2BvL8xQVfxtKSyUSjEVReY2TwVs5ScfD1y",
  "key2": "4e5BvuLAmgzzrb3ecXYh5iPa5AhYL6VQfGqCXm2GZRemta5L99rYzCQfbUqSHd7xVAJTrqvYhjYqMiNZpQz6LCR",
  "key3": "eGjTKm9qkpCEjJRBKHKxFcwLAowvVCadUhAFJr7JGmirUCA3LtVfH83RRdKE697tXy1zjCUMtCbgz1TJ9PrHfsz",
  "key4": "3VzKMh9wFbj5fCeebHrBvofCBqVuUEya3JMPkquXhyF49wsSNmC4pgU7hMgJPbH3DjYvfgHQQNod4aqya1eUUqTn",
  "key5": "3e3nZ3L3Cu3aRLCjJW7VHgrLi7m6gKX8roWcP48bVmPVQGM4BbjGXgpLK3YpP14whWJR2fdLWwcqYFHy3nrKQAwf",
  "key6": "5fk5J5T9Q73pQycur9h14Bb9U1A1Tdm8zxVDVq6XBBzC8DgPGXQtFxi8AYQqXLB1HiMjmAuB1JFitgoXcvZnVVH6",
  "key7": "Hb3WGmtLxwPBpyHG6wvyAeeQrQdg6xDyPs82n9CNQ4bkGxqae4efgGaVxrvZ5wXbyftYYKujyDQ2oFJUyzMksEJ",
  "key8": "22mFvnQfrxNeWfnC6EQChjCvUhEC55BhV3kWX9WyrbApoMG3t1gxtAnNtC2hpmVKXMQ4usufVGmX7ZB88DZEt5zr",
  "key9": "4N5c92aGxA11wxfDdGfqZLtJhzUmpnBAztTScyV7xNL57rr1RRJAXczEPcA5tCZYHRVs5vTRV3LGA5bd8oQ5iGMP",
  "key10": "2yPJWfKZkgxabpG7as7ijxiMhQYN1ujkXXdfsmKPuyqjxaTvZfsHH48jQwcnJjwX4SfodgP6EnBsS9WsZ3Nqv4XK",
  "key11": "5zp1ffamJExrwuDRLYCYaVZH9JMCJ5seu2pQ2jPHgzpDv39yq4pJXq3Xzng92dXjKsWYWsKXebLPjrVafRotMXad",
  "key12": "25JBftGv6SSsZxwFwzyjXgrwFPYURzBKzMiYd3aECMsszN6WbSEKgucvVADXko3shvpr72Y8SxvkfrQHRpYhJTvc",
  "key13": "2cnYrgXMCmWac1SPvkVvnQffb67TBk9BWfD7zfYE7KNHWdWcnaGxa9CY5Ziah2rJh65VdABHhsZjjbA4ZEwHUgAK",
  "key14": "c2Rq3qfKvL8YH656XguegYSEqdBvWindqsvyqQGeP4C1YayFin3KvC8ZAaBamJUvXaasPc33sAnDAiT3eJf2qZ2",
  "key15": "DH7xzZgpR1fVg3VueaiRMckTQXrZyc8tWzUyDA5wZRKtDUkhMuRgWZUby32k3TDnmPcbeEuyA4UDGKCQ8xc8XyF",
  "key16": "556h1gxLZaLXE424ofKwY45UupEuYgutHjPP3dVq4BhoLL4oBYQLBAcmm4ZAS4qihq2Ht9QqX2rf6etRDvyGzL2a",
  "key17": "Pw651KGd2CBoWnDcXaEMjwhbExkM7VvPSvgvZ1s7Ny74besZzkeBnrA5zKah8J2juHnWA5bZ6dKMcGmzYPaXK1f",
  "key18": "5sF86G9LQegf7dedu4t1wyvXKe7j816aRdoA44oxxoSyjvQBxMkF4cnGQJhAbuxCLWBfDBc13DSAecyjDJCWBJmx",
  "key19": "3Les1YkmFcThv5tXXeH7R7x6ZobsNnFG57tYSvefPjMuKk1SvpE9XEKbpxyCLgzLKGgL8p26cbfSZZns1KhGzCxr",
  "key20": "3cvvDML2vEX2n6ofBRcdY41mkhU1HSgXXgXCUw4kiU7hDjaWzQgL618JxePbB2JTQGcvWVgr86sPzZqaFZsV5PV",
  "key21": "3qpdWDS9rP1BrSzaCpSXc9uwkYeUZcaA8vzLGpcfjDqfnqpBcU8hQaLEuMAHBB7RwTVNE6xmpLyoDimjcpH5FiGg",
  "key22": "5hayhm93X3EoTgERJXDGypKi4MsmB2GyUibEhxZkcCQ4y5J3LPsYWzmrKysAh6aMRD4HEd7ZA6krmSFNkyJ4QYkg",
  "key23": "NDW5wPrN3eqsTgoQEdnxYo5L4hFpFZfngTtnEDPxvkDW1xz37VTh3Cvt2rPPdNk78BpJniULYZMTDMm3fWYHLGL",
  "key24": "3MHnQGTa1XP3uSMHkmY4KWWF8ZWakXKbvVwxHcxrcGqeYnh9FnNLkiN7BGzNfzLAFUP3KdbSGYbAQEFmZE8Tnzyi",
  "key25": "2yjipNJebH7rLaYvEQUZuieCoUHRD6RyoPMctjMdfTUKBpNPj5cD2Qbtded5A5cwB74BvPyeVFSg9WrqLrYvZ356",
  "key26": "38LJjtgNW6tUnSpEGmjo4PonLst6K6KrXYJ5XcB6TAj1eyFk4zXDVN2DnTCTpitubxphag2pNG8KTVMX7c9LL35h",
  "key27": "mohjgfCzivHKVc2AEnyS7gKHWB8SthD9EmyNA1wM8J1CoUo7MGQhPjRQmyrKFx9R5pZ8gkNMg8xmPGkDTQiBaH9",
  "key28": "42yacMkQgwrFTRfMAwEmZLn8HhtauixgSwYnME9YKTG3gWxg1RJugtLiYW7AgN8q3ToCqdabgsBN1wfhk6pGeDyk",
  "key29": "23qDkrfRtQUXWdBUsfj6Ezjk9HCUgFLjyazeJG17n1oQheb3eX2LQ8hJZ98qX6MyTm9Ms9GucuVtEyfmJLzLfLK4",
  "key30": "37JdKcvNqpuqRw3786JxJ4mqYRnc3TC8igQXVZ5nvzybHw7jcNZq2aYH27W3mBi26JkoVYG11bfrLTyEy9eXgcAn",
  "key31": "3xRDq66cTi8yzidSaScdsq3DEUDnYSKZAMBByxaqnrRALsYwevNoCqLfr5vDs82MHoma5nfjQqx5PmdHa8Tbc3GG"
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
