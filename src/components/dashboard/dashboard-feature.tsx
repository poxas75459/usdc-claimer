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
    "24WZk39EFSTtu1NmK2N15wEsQ1XTXXTkESitu1DdwqxPU3SpJtTFKgCZjNGUq8Lstwerm3p7cBuRNWPpijqFdk2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EX9pUF4D5BmVurhShXTPjhUTbXxiQ1nz6dZ17wPXBE2Dn2hAiPNtbprjt2oMjdzMrhAYFaXcb3UUz1N14xk3z5E",
  "key1": "g6gB6hjBdjdhcLwFPEFp5o6uZ36pqx2us2ypduLsWLyNiQzQWGU9nQJVXT77giwtVjiGZqUrRxRwNcxwvpSP1Tw",
  "key2": "4KPVB4RWpjvXj86f4huvnHuWgeFqgMDfRS82rttZPfq72DA7wgrDTFF88PAPQaJCthnjsWodxcqXEsozs3pjvSeZ",
  "key3": "5JQJkYFUAhK2CuUcm4iEtrpKkyzwKXSGBMbRHfxayQ442V5J6Hp88BfKuoWiMktsRKeCDxUFxxyjCC519HKphb3x",
  "key4": "2CZb7f6twtG1byZTKGbCkebaoRkqFSRqQjPDDuEmJxkrZbcHTJmASBiGosvD3NZMWgrktsyktnyFZ6DfB7VLKTEQ",
  "key5": "2TYm3pbMzCCsStHakikWyK57YhwmU57c6tLJtuYDigcLErcPiwBz5KgoTSJMYDpWw4MKGZ8s1VBAcDZzRLoAxuyu",
  "key6": "2GrSY3yGdzRyYx2YZoLgAodfEUPVUEWXQhL2rF9RjdVh9PidvjGNGVrsh1qg5yoFbDBUR1HMkQTLFN9E7dfRqBZL",
  "key7": "wSBqYUMwouwZUmPSCpFArbP6vJjWJYugFsh22xbSkT1iUSnT7sdXdfLLEzhTnTxu3mohysdP9nE1S3gNRQ4yGW9",
  "key8": "4Ka9Xz3necLXGDtQbkSApcEXoRYgM93AMEG99PQNwABfSvwB4NqUwR1rnE5DS3WtevnFzHWiuiUAPv8Hbea7ds4",
  "key9": "3kFKwVyJUJCmZjTTCwoWN6bQYwteUhrnyRGSWpsw9fzdYLVAx2oaR594LPUjgToHJ978dxxXdWtzUd8BFM6sHGE1",
  "key10": "4N8CKZi5vL7bGqReFMGD7DsUoASVVhfzfqDonyRfTSX79DUosijU5nDJekNt3zBh95kbsgbRzaBYLQwcehLRXXQi",
  "key11": "326fs1tHrVCppYYBqCvFKGAUn4455T5CyaeaxdVpstJghPy4PKPTNxzDV9hnKojY2LFvp7rNpCJhA33Vu3XzZszv",
  "key12": "5Axzg3pzDYMWUbLUkQtMraiEYPHUYpobPorB5PuCYtwBTcTLdDn9K5ikttS2YQZgs5wFDy8rE66MHCNScW7ytto5",
  "key13": "4FL8W1z8J7ffXpZxHPLKxv4WNLNqrbmuwPbJh1u978GKu1y4fLZRUKo3KoTbpKBoPCRmGYyHjLQQiFf74P78d1wn",
  "key14": "ekXNqrnpgoCzqRZFFwJK7jN8h8af1RfQGpYWXVMTNZAvb6yF4iPo5qjGJYjkBPVCwJx1etN8WQ41c6T4XgbY68G",
  "key15": "9Gh5iVA2vg4J8hwJXMQjrMTZJveCWgtXwnDyF2uL4UAPHxndmpEuSS5x92d6geCxVmSGFzkzKJoiCiJCZwPJiNP",
  "key16": "B1NCZWstKpgKn3YC8TiQVM18bwWvULogzpGi9XH5oj82wctB4aDJLFrNzqmWFKNr1AkjVDXEVmnGXX1zDaFfGsc",
  "key17": "quqG69nDFjn7FJFbhnXy7DDgrQazcAHWFFRTHjcftYjas1hNHCt43aEstRsuvjaXmU3Dgj9soF1QBM9ynetBj65",
  "key18": "5oBMQnXgvMjAYW31e7ER64K4NxK5pZTYthomS6aUXwtJxczKi1Kn4P7EtRDoj2SG8qsJwnqbTRfCPhBsFyuUXuTf",
  "key19": "g8Wsx57PP9fzsTdxHHwhrg8zfgLrFtdBbqdftwYemAPNWTUxTu48C9EV2tGLMXEj6XuPiCGcFL92JT93c3jZzoC",
  "key20": "3SqvySpW2RDupb2DvtQ7JTEP5rgxu73MoZxE6hvEVN9srtAhKDWoRgYXuPV1Zb9kZQLhQBqBSZL9tBEPzD2pyzzT",
  "key21": "2udBvHKeRbRaUqbbjKTDGAFM8EG985DzhstaWVrHnpyFmcE86qrR1PL3WBGMqab7ZhcXYd9rcs99m6AcSeqrjjj2",
  "key22": "2hYUoKm3WGnUxCXwWoVME1JLyk8o2wnjbXQaH1CYCQQHpRz2zzLJg2YYN4u62Y338QHEPBsQiK4hCkd7y9q4h1th",
  "key23": "3gYnuYsKfK1TBRq54N3CT6xLib2PinTGCU93PpzJ8DhfE4iUHXfJrp2325YEqRWgM22g1N5mNRzzCBmJEw6CvheC",
  "key24": "3unEFCEztntfVBTASSd7xhhMmUtYVPwLvtnNP8y3CpP7hyMNMmU6RQPrhYBMiTvCBfxv6Phik7BP8EL3a3Wz8QmP",
  "key25": "35VmTYFo7XS31RjGBtAXuX5ijh9iJbEAGvkKEJCtT6S8iBYEs9Yx42trTFyMF2gtqCLx4SLYxQo3X9vNvHBqvabX",
  "key26": "5NsjQPbcgk46khYRmVS2GJGvjL3YqqXrjgVQfU7mSKk4tXGf4yeomwYF6hd1oiS95qygZoZ9g3i5xx5qfe9DvgX7",
  "key27": "G8C3wwfKeuiFaY3k3hd9T5HvfmbgVQgbdWP3tpGZuPksv6yPp6KzfNVaSCtgj7kg8JrJA7M2eBMdghJH7a8vDKT"
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
