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
    "2wLEdFHyFZA9fQsd4Nq21KrZ1CC5K3rMhT5NrzdJENs8wdAkNaFvDrpdKYL7aDSKyEUozaP8Dqu7rEwmUkE79mMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBZTqDrPMthecsfdWmTwWA39S4yKfKUYDVcSoDpozcARrYz584s1oH9bfh4vzmnNuxU6f4qMjUJpf9qvBzL2UVc",
  "key1": "4a5GVU9oq5X1ZxnqCVhSb8aFA7KiupeJsxdPPn4Sv9BXwVkVJHz99xVdCBMBpN3agiU7fWUkWyJGjCuE82MUJGHh",
  "key2": "4pZ6mKXgESV6b9xF1CNdpPouVgCbwTiCSbgh8U6ERJaJR6CBLH8eiDaQkTPkPVcagP8YwxnPZZVAonQ8KGFViLJn",
  "key3": "5jF2WExoAN6LQhUyRzMes5R3gRDfn3fbabngms4mY1aFkjhTV5WaT7DWuTg6Wc6vfz3JeQRsxHRdAy4oZpFE5z1b",
  "key4": "3MPuAvuhmkgAfXqTb5gNVKHU2t1dfe7Ea6f5DcZjQ3MDTyKpunCXQJfLxpm36QXCkx4C44AFuTe6A1HzUPbUpw4M",
  "key5": "eyjJzrkzwSjcBCBh6UnhVGppAPiPL6jY9Sxy8GSHUpJ4vUYqfjFFYAuvanMLRk7yPw6eTpUNhvfiy2kYdpmqAWC",
  "key6": "49zjXU8HUAz5t4LZufq4b7J7qWhRDKrw7xJpqWJBpdJSTDFtXGzHY5XqL2u7xLWRxSW1YqShpcn5ABpzNrRdo4E4",
  "key7": "4mrafMSQ6JaEACC5zNwdya64LazJksvCtfx51NcsLtozqCL1Yo9YvK8mq9wG6yRt7oZf3Cdc98vJwAbDUyiYyQuZ",
  "key8": "5umqgHPCHjpkYcubcmC4vNfCFgVKrb4SEhavzNJXJSPFr5NF69bGZn8Doj94mumXucFFQFtxemj52AZUtvxtReGH",
  "key9": "2CAnArCoSmEiGq1n3AP1qbDzyqcV47QJrinmAeq6kMQ51hcxr9Hr71FBr9Pjd2whQepUwKdvaLjWycoBuCcVFcye",
  "key10": "5wcnJyWZ7VoqAxVdTDseaQSKX5rzSgXrCRaDvWwHAYtk177zNrAbBaSPkj3G79SgUBn519tB5VppbqQxKjYtciU9",
  "key11": "5etrsPJe7Vr7bj6JycQbGvKUXBxX4u53mGqr5GG1qU6HVgzRCd3jaMRaiPsm3PTiBQAMNtWUeeA96aC2Gw1wkG9j",
  "key12": "2kmeNBFDyj8PcQnjuKVinQhKMhzPJJ6GqCEMim4nRmuSwhWe1q4KD8tjzeS828rt42cPDp47e7HhUGAkBae4E4Rd",
  "key13": "4fAeuVXbYR6X3XdQC9Ary1x4d5Ph4xHA1LVqHcaKyBYtxFBxSNRMqwfPR6aiUCHZtnd9fAiLMoxAVr5HM1fdAiMH",
  "key14": "5xmuJVTmEC3Bzp1hyvzDT7Uww4Y4T62RfbXMyQqxDQ2yxqmEbomAxqCnu3a1ihJkdUyF9K4EN75J78SL4fQPDqYW",
  "key15": "4s9o1WG58PF1Pt1rpMfXSjTULJZxVaX45ehCkYcUiiFaRbtkUuUPmbgLoHFpBaLzfLH86tRwK4kSFQvjYhAUx41Y",
  "key16": "5HHrd3X4cYvKs99cQqsX1kn5uvBpTxrTcX7GNTtAgvz3Uvovmr4nZw4Qmk6jeERh5muwbVt74ciSkAc6vk8RunRN",
  "key17": "5GoGc2BUy7hb8vMHKyEYYuDe4xz99mWzo3cRofeEfgM4yWLgpJxSprBHe6j24Q7KMY6L2iNF4coxU6NAnGqu2tGH",
  "key18": "2AnbA7T6Udoo3S3PKHAio9id5fwLQwiwSJctanfRWuKiWKSg5cB65tkzCbeAdyYCpBrx2fjC7cVQCfxh9rTJBKvk",
  "key19": "5GD9MiAZgfTkNfvEaUkVP6FyXRzRc21xbuFF2NLsmaZZjfUKwhu5rFbahyn2R3CTojYnHAeD3sFv3JJty6C3UnXR",
  "key20": "28ftHRp4Cpk1vH1yxqSgJS8so6kTGWF4VKwoXf3Ga5WBXv1sYdDRB6SfYVhr1sywu175ExQdWytdQNr4iZZfTNat",
  "key21": "51DZksb57EipvJ4GrRHFC5apAAFCNg76hLk8s4abStad9N6BWrwRnQcPmaj4cGg97kuS3ZkUSnLHTzgjpMSe2KvS",
  "key22": "2XkQHhBsiLfmZhC7gwcqmdncPGgnrGmjW72sVJ4ZujF2g2dF8EK49qiwRuNNz3q5T4NUF77ri2dkfPvQrfFjYByi",
  "key23": "5zBjuXanpNrzMAaPyGezDYCnouPqd7wxRN6zwC6tmL87KSn6kEvt6nDrXdtyUJMJeReBa3WvGmF6uPrr1BF2tV7F",
  "key24": "3zg9J5ymMQUFDnc5uHvaX9kcAYWdiMQjUsAzWR4WBgNErvfF2vsrCgzXv3ZHbJmQmdQP2rLU9QSnx4NzSfkdjeGb",
  "key25": "CCcfjryGxDyaHrtuZGG4PpSWjMqkMyWmjoVva8EDrGgMA7EC4nVx5CEu5wkT9nxyz2LSLHAnkEcKY4XXYNfvKTX",
  "key26": "jzJ1Pp1wyCdGpveTcYzdiFMoTq7tz3ZsqvAVEknX5xbvx366synCtjkCXkhfyvcGCg2noiirpm4i17JVGz8vQve",
  "key27": "5pc4XVzuH6cNnz6DiCvSQUYKnV9yJ2nKZXWMczyZin2mq5ntDk4nTBAFbak7Wxnz7Q86kWgyKbiwBRSppbmRET4L",
  "key28": "3CQpuQR9nzKM2RmZf7jm4yHEGfe5VJLC93krqgASaRBA1x7JrsEVsbDC5jtJeQVQGQbUtTqQMqpbSyWgaZ7WhPXz",
  "key29": "H5Tq8zMo6byxRi4WmWawnXQYuRNheSVbPU716U82uTrvEybyZ6fg84Z32ZeynJe9RN5ajkWKZpHK4KaVLSZC45H",
  "key30": "55XJmAJ3dKMn9AXDjRdv71kyTkPFXktJvU1M7wM5oHBD5b7mybfa4sRf48M8tFYsVD6qZMgnNdEhy88B9QPAwdPk",
  "key31": "3cTdH7PNVcyZjSqCbXDj4AUxvfJkM4sHR7ijhQLegTMGmFUwr2fd6HHHc3h9xAfQbFAPgVzYirnVFyt4DR1QpjEv",
  "key32": "5zwhpdLiyRvXpGZY2kWq1E9Ym7a9bPMQGoaHmYiQBCgEZAmLXg5rZ7JaJVPQw6Fpb4FsbVCjyVkykMQeUgphz476",
  "key33": "55TMv71Vz5Uv3dreKnSLQirvvMFdD8WY6BGRbFkDSN1tHVeHE2y1CtbehXWDuvAPWu3ctbmzAjrn4FCwbZXUb9ef",
  "key34": "4oB5PfjDXreEJ18QB7sb7kSBWFkTFUcLfgewwtrUhya7ksxSzDqf98Priy2DweSrfhEPRkc3X5MfufDgj3xj2e36",
  "key35": "yaDRZB4pMw45x5f93vVvC2w9A1oibr5EvJc8yhNifWuBjNM3JB9XaL6jbn66tYA7xEcSrYjwT7e4JMuSk4qDWQD"
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
