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
    "3LZzWXDRwegbke76bPrJzkdkBoCP1BctW6fMrkvgjSThssTzBEwK7YERUTbDiAa2aYmsjmzDdDirRePc8JxhmQy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tFgNrc8aKjhMHwzhs1Uec8yDk1gtHxF7yvVBFfhb8KfXLofVNzeF8PosGsYWTutanNGS5Zeg4q6PHwxrH89LXQ",
  "key1": "nmeJfdiPBKmn38TpUBqjmR13vsLgR9toFpuZnXaVMfevDgSXoiwzTRdVSGXu1dKW6cfJF7cowVEjt166LseaoCD",
  "key2": "4sQC51LBGojjLNypAsaNzXrJzcZ4UB8wfAfSK5KWFHeidzwEjHTcsFVhpWdiCrUtm6yG9SNA6kt5hsudLR1xW1EB",
  "key3": "2gUqn9KLUh9kVc7vzoH97jJm1o2zbvLKv52V51nThPZb6SMsM1fzTajiZqgPLR5JryMiUcBQeyQusB2Jdp8oCVLZ",
  "key4": "3yvgoNw76Aj6FQMiFTBp7R4Naa68gP18xEPXzCDakYPF5JjW8KLX4YwmKLwGZfChJhrNg7HqsEU8M34BRKMLFKEA",
  "key5": "3HdVWqhAqn7nkAFpKzFB2caDCmXmzRmUtq4UxTiitFYtxmR9VQEdRasApJku7DZ4eCTQGkt1fmaZcwqcQpz3uMLx",
  "key6": "4fETCR7TyBM8ATFiENu598uoTZ8g1vGWjEmRkkKxTp87JJRHdUn4b6v1wHwFSUW3eW4GHHA2QL52Z2SHK94EetjX",
  "key7": "w3GoFdcZBPJn7RgS8BAdxoDWSVDCZ1hptpUbmmWXbvuWzUaAUhzqB8m1bUuXn1Ecma5KYNcLM3SK5136mfnhjKm",
  "key8": "5weLiK5PQKySAMvLfarBqVfPyGnrTUtTMa5S2uXZJyxxhjsxZQbrtztYwC8xEzmY5L4XgfxjS9sffYp3pv43jgQB",
  "key9": "4Smtxw2Y5tnHg8n9pwmhTg1L8dzg17Qykc8PactoeybsTNNW65NxaAmuWpMU5AppBVzDAtc7sdbGEUB8yuV75wAV",
  "key10": "4g25rKaRgxbizBdSNzeGpYg6vUNp92Q3Tw8enHaxN7JfHzMi8gHqPjTDBrfhPT4ZZ8eWdUJ1C4gV3vvkbKMi5VjU",
  "key11": "25EqgBR3GdP1PQGsPMEPCLjvFWYKn2UbeCs1ZRF3HCvhR9nm8hvEt5KjkN9Kwqviu2ofzNsqENwMmeAxSvezg9zR",
  "key12": "yNAUEX9FEknTTtZwhynxKxP2mtvNVgSgo1LWmZbpe3hcJYgSkE6RvbSnrhLJHG5zYME6PaeUU4n7T1MfJbLSkNt",
  "key13": "44MjGhdqsRdkudM1LRQs7F9Y1Rf6gfspZzTFkB17uTjfdzm9H9nGMKym4vAXYvLbXjRaqviqi2aEkvopxY24qZJz",
  "key14": "5VgG3B464uGXdj967WtJVArcz4eotpoCHt1jPg9C6PfgbBUJ6MK6GTCG7LC9pB9Vjek6i4jYiCv4S42Kc6J2Gnjx",
  "key15": "2WpECUMj9nFp7tbLEqzCMEfpdRyXeCfhaHKtyFeZz42UxEuJtys6uNwNCdvh7RfqQLw3bMugBH5WFdMnn74ckAEX",
  "key16": "2M4L5JGiQaXB51tLHYd1nwa5hREPSNxKftPcCvk4iKsyTK9sE2FLzvwXjQ2uG2DojFJyChmiiYxDMYyBUoAd9kPG",
  "key17": "4Q2LZrDDYqBEdzBxQ8R7tVgDGD4AAo6xPeHbHXirophC2AKmnyU5tM4qsrdjLwqPEezxtzh3Gnr6nXASLr9U5pmq",
  "key18": "2urKStf8fWepFxhcMFUbjoYMZpLMUV8HA8RUNwfHoSKbbgYSMzii3XPSiEQCAVGaUDzqWbE56SLmPGgUhKstrU8z",
  "key19": "2Jacfta3QyzH2B4d8vxM7oMMoRRLujpdAyqShrZbQPscpiRpKvKvGopRh77XHHZ97TwwLTYdiadxTcrqgas1Ng29",
  "key20": "5QLh9Wz3QnN37jP5ZZwSoXr1yQhJG2zbmwv1MuEesrZBFsaSXyqQnrh3fkv3TWRGQrqBejzY41EoJCXLia4hY4aM",
  "key21": "5qeQmZXtHHBKxF5tKvVXvXFAjgooopf2KtfPtD6iLCcR8sgaapYXdia8pwGFfb1a3BRQs8PZ8VdT8FizwKxpkm5e",
  "key22": "5bz8wNdmLXPpDYyXz3r3chPmnTG4J95GdVLGJF81e4fNtKwMSXraCafp1vke8dHnHBeF5DziW3g4EmY5zD2Dzze6",
  "key23": "3s23NLJFVHVfJNHoCBGJWAw2JNZShA5DxuT2s6CKZ3m6dktFcgdQZN7fzJy83EVtaSpqn7GwT2QypdwCvZcdSfQw",
  "key24": "563dkVxbi443EPwx5v7uHuyRdVqUREKsRjg5wDZ4YAWnNKyeA9gUvCPSTma1rL8T9ao7a9GCN72V6q1657YEczvt",
  "key25": "4ASbc8K3DgzkTE7tbv1YBZPH9jaUFVY9efu53tB9aXgAf4jYGFHAdSU2J14tGZBX6m9LwxC47WgT6gykPX48kCzZ",
  "key26": "55BxHFRnPj1Xfq3f3smbkReHNif9S9qF53t5XFWNo2uNz4kgNm5R5JYSwyMA9QhJFnJiBfE97Bd3NCi4N7kv5dMc",
  "key27": "g9BgEx5Sbwq4QGUhHbGJYvnvXPXgcWkFF6wV1GhB3FiL4nzuHJqhzfRuYHGDPV3LxSa3gwTRL79GryQtHesWvTz",
  "key28": "5BBnn97VJEvASNsdXH7cRDVXnyZjZBoN5Jdd8EXaQwyzCTRiytEFubg8GwzavcqkCqy4TBazmrN4Ws5f76ooixZ6",
  "key29": "3vdid1HQQAw1xnXsX7HinHy7JFjrggrXykRCg7FLMderLmAhJ7UhgpELNRn6Binn2ZSSi2sspXM8zkpP4UF9em4v",
  "key30": "5ZG4vGH6e7JAf3Loh9evydAK6HyW7Zw6C8hMexo1G7wvyfQxVVDZJv8qBy4A5Tu5DD98V9WJSneszUghJVapW5uW"
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
