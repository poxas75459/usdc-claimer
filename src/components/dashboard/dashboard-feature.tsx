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
    "2T5M6YuJomgHdvuZJS9idxAzFDDMTFPR965FmMm4eGRWZRhAteWmDQrxzM5qbjfcpaEVCi3VwQr4xMvFThKuXDBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDgYty9Eqv6VqY2UDuXGPdKNEspfEihiYRe3qL38cbPdtvcvcWLpW8ui7nrtLxXyMe4oZohmfaLKmMtjJPpZFAT",
  "key1": "k2gssE3Z8YzD1mW4vh98USV5k4HtZsGbYd27poSocQ2whx4PdLM2fRAKWWcjBeMZ9XMtc8qj6asH6rryWbknJDc",
  "key2": "4C2FPhg2MDGLb7eBrkuMdE2VHQ4txbBeXmoc9igfkiRAKvZt25SAxGT7F1LhAai2Vu3nNKUrDJwZs29ZaCL8yanW",
  "key3": "5hY6TuVW5kZ4XQrtiVXNbGE9MKJthy7DXAgSfTnqLSJadkW8yu2k7XmHLPhJisGGU3GNPKfBNJd9YvnebemHTw6W",
  "key4": "4d7XRVSb3zEQYTd5fwDVuKemzCuo4ebhGeEJ4eroBf4dnrc4b1QmfTbDVqh9Rk5oQda7gNV1yy4ZVHoh7S7X5YjN",
  "key5": "4z3XyiS7BbwJNPcsbDNHojPhnvbgsSVqRKM7KJ5mqfrMVESn8NrdZTDSS5KXgaVxPdm4rAocqmi12TxLSxTcrdX7",
  "key6": "2AsM8mWVe4tYiS3cENUPxPUpDJbaPsiX2d5spq5VTrP4hge4mbxezjoZCowcjUEbZbQCKw3JTZT1ePLT3KVNmfyT",
  "key7": "3crvyKA9buGNG6KCKNRUCr3iqSwQ8XAiRPkA8ewqE7Z2k9W2Pkta4U9UEKtG26k3vtCgYWwXQU8e4v1n4uFFiXNw",
  "key8": "5SBJVup9ZacKJR6yxUkdMmfZpwVEAHmWJ6922ficfqjy6RcTG6ohguGPcvPi6yQFRqN4vkyEz9kzvv11dfeY8aJE",
  "key9": "4NXjRLQ4Wq1Bc7m8QyiweUsNsRpMwGfeNsTAJacekNembYRUD4rtemUPKu64LmW8WTrLQT5Vxen8TxvwnqDzjwv",
  "key10": "JPvjrkfbmtzjML4pX49fV5d4UXYRBUaFqMVo5y8w1xKcqroBRmNQtndu7sjZbHHRSgJVB28AGi2JwtMuboPMPuL",
  "key11": "3ak2jYu6s76LJpDURv8exL3w4AEYPvvkACiMWxXrZj3AK9xvhf6DhQDPoAT1LnbbGxDPkJf1jm9dz5RR3cKqDZip",
  "key12": "2myV7AFcjiWusxfUKQPZG749HBKmJ3PnyQzQw2BcAgKTF8LU6uHcqtwmUAZAbpbcWPKgLx723AvC4TEPhKvKRqBf",
  "key13": "2eUxeHBocoSoTKVm8ScoYheh62mMcCufzidqS6s8GCjr9RDMCSbhpSc1vF9ejpSnXTksmseFx3rGznUVcKwURn18",
  "key14": "3wCNYmYsMCqUZfNPPqoaAx6K6iW3adryUpbqPV9GFUswWcCoWVYwPzuhxhbFaFdvy6C6Mo9zZLXfbNCNZtzyA55N",
  "key15": "5pa6mZ1ytJSYdTSPHW2V8iDYNZ5QPvtDY4ZKXjAtK4N8WS8Wd6CaztSbMNoM2b188JDmZd2g1cVTKPxj3RiUrpHA",
  "key16": "2kvSLdyGcZ8trEJecj7VDso9iD5LUgQvvEU5De7i6JShaQa9e8zkw2G13gcuDcfHQZN1K6288qTNWKazCU4TjpiZ",
  "key17": "2j4gBFx6CGx5mx9Khr8VeDZSLNYXksfTaqSVpzf2XLFXq8pKWwWz2NUpGbXL1csUQWCFLwUJrgp8vkuB7yVCbDq6",
  "key18": "5NnZHmuXpfgL8G7d8yNEpdY4oPgqshfEP6cbxG3ci65QzRmLXY762wkCBAwKrhPLnzF9XhZ1bMda1cZvb48pH9rj",
  "key19": "3FuQBiPJYuon95mt4pxp8puTGiEHiPZ8TiMiMUscRvAt1h3v82oWv3SYud9Kjja1HStbyWAgf8Jy9hc7sqnvZeJc",
  "key20": "5zk8kiFcRX1SkrR2oYTyhTCDGv695CASeC2mjQUoUnSLn1r6KPJDuNLE4bRAazZAHT1R66e1VvjHU8618BABCULX",
  "key21": "5ew8vhtAMQwTtbbyVVKMfKVCkBCUWfgRrYnKdNaYiUxtEj17nC7niaKxfLrg7esZLZtduKLHQ4wx44aGznRf8irJ",
  "key22": "2yPZJyMjL1oPD4myxyEf6goioUnb7eWvmJ8kSom4KSjUQEd65DxWa2pWsk9ymWbY6ysQKezy7JURgqqEWbcM4Eub",
  "key23": "5kW65WW6jBLQnSUHc7nF1q4vBWnDcjMRC24acdEDyFHWDsEQnCxt9y9Mj7ysxcPNcnSM5kXxZ3LgM33wmnB2vbpG",
  "key24": "21m8DNZBHY4XhkhFW2NAvQbdtNjhumRR6DYKAGARKSeKKdAQeKUvXg5H3wxFPeRpdVVjn2LzGbGXi3k5RbvLybga",
  "key25": "2XrUq85QRiok2fpLVdSd48yy9t4MXZ6Y9qXqSM5bUrufPz1pVJ7XoKBJSPC5mdsz3Z6fxR6HhRmpnDtgdMKMYiEi",
  "key26": "2c8zjRKEiePdDCYkricuNSSdynt96pbNCMwtfVmRSPrB7iofphGgLjahBFR2ycfCRBV4oxxU89F1XisAJvshBcVm",
  "key27": "48qG4tCLGVcfGoBAPsBqvADq4XjyaNWRb6zvtAx1eJHMdsVNPThjM3mnNapM2Nu3vLPxGBpBL1NHqHtke9twyizf",
  "key28": "8mUqCJyG5GprMaJbvtTuPdUeo6PeAD1mAVfqWB5gdNcF23nKKhQiguzBwa1VbzZpf2aXpPKk9qoo4JwJdNuWYmX",
  "key29": "2iDSUkvHduwerHwkXmzXTfAuLazJTQMGhQQZs8fWzDoQwNg1giHP6J6WyeihGkcFWMjnjq1suW5nwe3mQBhGtuRx",
  "key30": "3gvfCtQyeqLmUhwhZ1HLmmWRH5L1gGDx7QFMH4QfjfX6pmuVZu7BF7YuvkG4dZ64mbjY7F3FRacE5iSym2hRjmKV",
  "key31": "CmuBkHC5J7qJb5mF8bfHmqMQ9RgoddgXQ1CVyjzthkLcefw1pnevCfDeUZcjsaDkfLuSxZ3XozEKguJTXuUM6gq",
  "key32": "3pxtvejFEMawKZgToXjAXMSKxU1wbQzDGN1pf9SMUW5GnzwwrpM8gTDLMiv5AX2PTrnAW6ZJPmKZMq7YfUdNJVeq",
  "key33": "5rdiQM8wqTpf5MXCQHBx9iFmuZT5bKYZvLSM8vC26r6BpQk5eaaXCRJcq6Q8KRBC519QXTXRpYZNquFiDP6huQzK",
  "key34": "dUymMex1mKrwZdv2gfF4oA7gnTGW4jQ9oAQV7NdWJPpzSuZgzZgkPaVA29AAHBcxbBDf5RXn6pU6jbukNK49bop",
  "key35": "5Xi93CLzSS5ZgaAMTgwmTKBSJ1ZiTEs45pRkKeg12WbBiyFhNNFZW7xi6WBwoBcyzasSxXdGMFf2zEQPwQRTnUjs",
  "key36": "5kvJZVMZWbz7AAagxRDKANFSd7YyspeLp2sRrRVumMHd1EgW6jvuyqPtKgvPQKWYyvmYRBTViu2UJHHbvFiJCsJH",
  "key37": "5AJtNFBqNhdbYSTDZkmsYCwHhjL4EWFp97c1XmJTtacQtbNrhbketgYDMpm3pTE3Whs8U6yHSmFAaX4s33S9iuSq",
  "key38": "3qVasxr7FV25hnnKnW3dZyij8KYxEBNCxbbf8tnQjS6ETvCSXgwDqpiR8SoCsRAUuAFXaKMfFJPyeZKWHmNnVkzC"
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
