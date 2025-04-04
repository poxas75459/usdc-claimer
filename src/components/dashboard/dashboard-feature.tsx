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
    "2nVcKDJfKd1JQiW1DE99iuoJvhSt7ECMB46ZEQ6ZvFgu32kUePpJ2QThhbCpTU8hDy9h1QfPgQb9EEErcCtPoMUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p433vsf6M2NC5bv9dYNPHgyYkYN6RDNoY8mPzLkJTJUZfpVkBHSnrfUzbfKArfRztyd18hVuCpcXvFt8Pb7RYvm",
  "key1": "4wujpuFZcikb7WWt2HPc1G8WvH6FdFvG23n8UztaecPuFfBmftz3jiS3E1c152jTshHuAK8KRE6S3eyWXpoHrLPo",
  "key2": "5P5NxvGws4LggGQB15mysRUnYoABQz9yNmPb2KH2TT5X79NCDNyzVoRXMSzVRKEUtvKJXhsdLsnRVmxgcP5eaKSp",
  "key3": "3t3FRKmRsK5SmSsD44tou1PyLAK4jLMvsQDF3THGZW4QrnUKGsXrCebAji2vW3uCuSTdMPHTf5TSEqNQsHeewFKR",
  "key4": "3pGqeMa74UaQ5gFMrUTHn6N7dJWAzmUqZrkG4e9aqTA9qTz2ehheWEdL8W3AUycYFte7MLNn1TstDqnK1ebJ3gn",
  "key5": "5znTcAtGMEogD5JCZ6Vq4oLpCGtFPnFpR2LR9tJEFt9yeF5k6Kc74PsJFTGE64s3H21UkRD2BP5vSwN2SAMVzrwb",
  "key6": "Hxa8woJWYkq9fExDejrDsgc6PXgMYZRL6MGdGXVsGLzbKbDbdLCDt2zoyzggtthTLqAhzaab2hyDBrKyg46A11F",
  "key7": "3WtdRc1KQfT9Fpg2GaWY6KoYkaZfeNcto7kn8BYPr3hX3XM3N7jLWUSe51RNZpvmV5vK1BH61j6Q5EHtTfbYsDPT",
  "key8": "i7uFuXTvkurypNxnk4aizbvugfD4YwayrvMK8mGCJ9k31fqSCGP3jQxTcHiuA1A4ULc24KJ7iKNHXLT6NBbpy9s",
  "key9": "y3rcdp23AJ6Q8PtkmJ5MnbqLGWvKGfKfDTHREppYgcKhnvxzWTUpC6EYXxTqaGhyrV3feZFM8oNUn8eySye6ifo",
  "key10": "4o7BFHZ81ChquCjNNjuV7sKW4uuUWnemEnCy7P4BiMjyGRMmxNvArSw3WHAmVQM1Xy4cy9MThnsEULB63JiXTSvC",
  "key11": "dDYqamPWU61jB9XKUKTKnZHZ7StuTZ8stG4nt8ZLJu5XHwqd66ovni1wgjbgZxBaG4qhpWCNCEkZJvvHMuxp1WH",
  "key12": "5vuvTg5ioypLoGnFaUuF1SZS5Bi6oZsp5e8nZRHm5Tfq6bsVXtoPe9nzYkikAPhdGsHDrHqRCLQxFoZapSZBM3r5",
  "key13": "5egBfSATuU819J9SufGWoR1cNKqix4AaCBdWhRTepw83eS9sUtTCZZiQTvcd8oXC6VDQboAcrApH3eBqpFWQwxhF",
  "key14": "5LDQDfxMjBkhtFzHH8ScFf7uPGrbzg8CNZkYDGYkTTwSazmKtvf1p7mSS1vrKVZc5wxTSxSBqwTK6L6Q4kKHpD6D",
  "key15": "5v9b2rqNr7UgvbXD9cVK981Gy3pcXKXPw8wBKBDfHzUtZ32UNiXbm95iAa7XYVCsXLWnE8KGpwgXodgE9wDtzdxd",
  "key16": "3Kyrp4zYuHrdro2u8z9hhgCENAVo7hcxiPK3fsF9hf52xogA63NzaHE79n5P9jFNphUF6jSrVGDRANbeZm9N63BE",
  "key17": "2NrJ1zhwk6ecDPGCq7rMAniD33PDkpTPQT2dffH7ZE2J2cV4dY99CWDg8Goda8yn6Q6vk9e42FLP9bRUh57pb43t",
  "key18": "3MeuoymxaKLXqxeWnBWMntRiqZ2s6BaTqQ1Yaxkv3R1f55takcnxkhujrfuavJu8JedR9xo56ojha7goSnV47n1J",
  "key19": "2u7QYKcRJZAfL6FNCQ7tu9WemQ1Ai32Vcs6puSSmGuF9qDagAGXJLQ5m6HF9RkDR37k6zc8pgQJPs2L8XP7e2gBZ",
  "key20": "nfxgH5rKszcBzabDxcg2eSZzY7mLvxquk9cg2MSsaPWeLCauXqijeHQedvQRCEWQu7tJPbdcSEu2C9vKYd3US7d",
  "key21": "5CqJAMv9wB5FhTMLAwbwaRmMFBPbJaHTSKLzFq88LjXJsZF1kdF7fNJ2hgdKEc7RrcfVZ7GzxMXjEZt2UHJPWDLp",
  "key22": "3yiLGq2BhWdiWs6xVhx35Y1VojWYepo5xc1QW7AUX4ME6hxcpWGA7JXn72KRSCNBLsk1uX3aPLGFJzKQZ3yzfYHB",
  "key23": "FFaHCK5ph5GiwdDF3nqC96MC7FCqTkrGzaZ2BHh1B8hwWS5DF89DSKbGVG3RoK9JSUrBSimjgKwkSZiRsxF5mCg",
  "key24": "41GQ6UtEHMTX4FosaZco1juE4xMYmTfZoiGJqVmHUhjgZTUCCHW8gxw7Er9e4cPWf8gFmUXLY1KmHnian6CXk598",
  "key25": "4aE3ito5dspe3NM6P3BsQE56QD9wJNgsginr9kAxMVM4jE3321uBCK4GXgQYqgGgCnxCLctEaxH3bpoYuLz2uQMS",
  "key26": "5Atk8gFYJPq7Y95cWztfbj4FwvG3xUH3QqShjRCRK3AxcHMEbeq6nYkJa9Jt84thHL4LqkCgoxSeCrbYUcMH6RYT"
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
