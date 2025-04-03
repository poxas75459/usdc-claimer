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
    "5geLApAdXgGMZJhdaHGrmhiLsw7exSbrLf5DozjWU9xeddmSF23PyfTyF67vTVp7b99sukEyjQL6L75rtSWfgxyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ste7MCEyde2m4ca2qHeZo1L4XZyFKEUeDyY5yGHn4L6wo2oYWjFQ4NNTcaEhxbeQmgACTKQZYRJvkbMxFc2Xzod",
  "key1": "5kiwYnX1oQ1kAeUFswopHdRiqM8zeuhyy6QEMLBZ5Uqe2qpDohEDuwWysttBBsHCmj7dXN7RpeQmtEBrL2ZqCeox",
  "key2": "57gbHNcrNvxxYuKhvVHjUKTMgLFdiFnKVHyJNsajEbaW5PaCfUtQYNvXCp5euFDanmVNV25WT8BixBJ279JqRB8Y",
  "key3": "2HK8HgsQkHwqS95aNZewPApK7Yw6nANfu6pgEaqFHTWBFkuQjrjBiv3rBKf4bp5TCQUQJDBt76m9dpmJapxCGKtS",
  "key4": "4RnYn79KBbUybViUwH8PHCsoHnUFWrAe72okrSGkETsQGGE9BQMFkaRmJFAii9WJvrJnWjADqcfv5QcwQsi1J7vz",
  "key5": "9BJdnCp7vmP7QjGTJHoLD63p52hjx8E7GJxkQphAPNhBR2GEo5v5UKz4Mnxd4CoUMTLjstDUn2Cao5B8t3xu91U",
  "key6": "4a3khYrKh9wgKWHerpnvv9bP88rEUP59EjgmD5fgh1okYjd39NeW8VM1mKZfFJyw5BvZMzXQidv4fBuKNf1CGTVh",
  "key7": "5zet2THQCTX5eBSXWmmvukdVqkf2vA3EbNvUM3Lqd8mhFHjZVams6nH7hbrnAxTAxbMDqmiteU9xM4RCb8Hm1BmP",
  "key8": "4swKWnWpHBGBzjQEbcHxH7TUzFeUUMmdpeSzfR7dwT88UqUniAWAJRWGWigNZwm5JioddAb665R69aoHrpSLgFAf",
  "key9": "3QKR253Ye3UcbihGZY7YhEurPSbrQJsakagLqYQjr5TeQeyBTdMWr35wn6aY2u7kjk5fnGh85VYJYjTUQqkPF91D",
  "key10": "3Vk3dgNkkxQCqSHZczewyDE6opt9zScgmVKqXxnqZLAuZ2prCRHrRRxwvQ77J81qyJDyLP7u6HsvvUoivRe7XhXr",
  "key11": "4Cm4DtNMzwZRe6VaRY3Q7Sx3vqD2h6jPmqZaHD67ombnxoQv3Y2zDu5vStRMqJ1HqG4hxMteL88ssrv6ZBzvQ9Kk",
  "key12": "3jPM5mYunVBjHVzDEQR9asACa2UCarTXkynRSk6Vq95WNrtjYyUnPb8ZNVrGeuZFhuyKspiVwJdLBMJv7tnRmkJk",
  "key13": "2rdUr5V7Qox35t6zuLV8k9hHzFQ25Hv7v73KLEkeAZZGHcRaGbuApFP9E8DArDiDLtNKfED6Ax4hwvA4xcvDZ9b4",
  "key14": "5FpYQRXwDCxxgoPWiQnaL3C4BEAU2f5GKNLwsa5ha7gEqx9vPr8aH89mapSSaHCyVqfUtiFyhKpXt6nko3hA4vN2",
  "key15": "2EZQuEQbSFdfmcJHFbU7mRMwiyptauMwZMC7sVrWP81AGtAGRVmziidc66Ye3q9ZZbRWFhAB7FrtJuU4vDkmMzDL",
  "key16": "4sPyqMLWwUK1XzzZbxBfzjMLCN6hNhNKE7q4ajfu4rhw5dgTtiYsfnyj5HTYWmBzG8SkmCvxkPhiNG6FWkD9Hsrr",
  "key17": "4G8W7FFdUb26SUVCLUpYNSgxWQpvJXTmQUCCEBtntrDj74DbmxmokX4z43hTAdgXFURLCuEqvgD33zp38DDnTWrU",
  "key18": "3auWoRujx12jZAfFzst732a9R5hKZqzGXovio88uyUfDWSUej7723zx4H7MZVWfZpbsJLDkq7RB3hHBiXu4QzAyy",
  "key19": "3aXCR8j4w3zKQ4js35Lj6hCW7AmAD3YtbfLkthbvDwE5zFqTjwJt5QbbiBgkxtXGer2uTPBsXfjWRg8cvdT8mDfR",
  "key20": "4sDyXnxDcQpP9goUQoWc9TRT5kHMUBdprB1NzGk7tQmwKMtGP1DBv6NkV9udjWaRLakXpmnDR8Ho6UtyLDxXHvVn",
  "key21": "4QrTMwtiFXFEyEjZVrV2nvsBEk2dQCK38NijTj47ynWBbg3Jc1311WvBNcGYKHBBMmgX6ZSVqB2q9HRzpScmF69o",
  "key22": "2H4tMUNf4WUPDrXf2avR6TxfeTzCjybnW7mLzjknZg8b6vG5D6NQktd5QyupDtPmmY6tgx5iTyZpBeJmkF7XoCjM",
  "key23": "4fum7AyBomP8dUkTX6UuoYKgK1Uaj5pjtcyRcstxAXfzKw5eiumfVWSKQtyJMK9seop1VvWqfEWnRCGyknvmx3Vv",
  "key24": "44KGswHhTMJE3aUN7iGrYXx1g6wEi3Untz6Ni9aoP9ysjButd1Ur88P2vazpQ2Y9FiR584uTMw3uJmUARMY7WaMB",
  "key25": "2V6ihEqQx8CSEFs4bcre9E4vPb36UsEhBK8daDUWB5Pcp8HELAzn52A1NRQTLmgrAvAgJZHtSjDfmyzbtFGZVwLA",
  "key26": "3xBvwtNzm23J1SbE5Nm65cGi3o2Z1uVqUy8mdWK5Jr42z2JoSsYpCuaguwwxqJKTijb36tE5ybDLPNMcLzN72qgN",
  "key27": "2aoWAVQgwqcDHZ6sSrRTZ96S7RBWKK5pEwLS19zoiNz8V5VxyxqBRJtj261rCfK5EYwA8cmuwr9BZmowGZVVpZkB",
  "key28": "5hWU4ikdehSMwhy7R4VUVSiJKT2bDdriNvegponpdNYSASFX9Uk3fbCVLgkNDfYeqo61Hdjq4CdWUAubJTZQqLp6",
  "key29": "3Df2DQoY8uKQXw9TN5P4Nk9KjSFDFNGUYX6pZ5qhBYcSgaLHg6Kv8iL181S6B11pvfBRYpLm8NaQ1ErC6Vh8sjN9",
  "key30": "3VpJgNWHNpuTnEnrtkh7eZQn2rEAwLuWfBYYg6QgphN2kZyoLbZHTMA9venEJg74CdDxGPMXb3ZLkz25faMC9bMJ",
  "key31": "3atbm8qcToTcHE1ypWkM4xfXuvU8JGhWpJYHphGcpPvMfPE2MADmxBKxn6KnU2ZoVzzQ1SPKaHwEQDmzm2NWsFhC",
  "key32": "5xCrQEhpVUuhL4AN2LzXDMJM91Bbi5NASvxCL6ZCizDMbAkfqpf7mpyMUhi8FNBSQzqSPqisF5NkdTpY1pBB4EfC"
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
