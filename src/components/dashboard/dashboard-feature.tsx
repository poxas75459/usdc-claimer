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
    "2FMSvQGfCHUXuzCjGbpPEYgJ7G4AkicBmCaxuJ86yZ3HqBbNEp1ndiHFhpuGmfWJE1GfCBWbU6j2CyvDFgFMyHkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YqfSE2quX7kqd9Ww4kfY7kxTBfDG5FJcCNkMDhW7NLn1G2vu67GLZTuP6ZUaeQ9tcw1ovBKq32tYAB7zWf5afp1",
  "key1": "2okbHBayV5muvhLgF81ss7xjZNS8pTGGjWFQfSC13qtmbL7kEyNyVvAQWryS9puzKzPCFBZdabMjjYHNYk1gFSwc",
  "key2": "25rbyR2v2ER6ANacCi5JFAySQeHPYYP5SXssUezARxb3q7Kr9Tc4TN1qiAcankgpRwaFQUhzL37LQs7afAMLjQsJ",
  "key3": "3dENyR5DaSXD63rSZ5JAo8AzXVHee9VP3dPGmJmC3gxdkjHpgG8xRZSLZojjfsZ6wjKFvUWakjZGYTFHQxsH1G8t",
  "key4": "2qwJRFrYa1FHh2uQuXwWZBTjVRxBnkPYfK7AxEDkQVDZLSCgadPmQSGhuj7nAFXxTZaaY1WzwWs3WNEKvme9PesZ",
  "key5": "4GdDJzcMFGLi1BVQtydBJDQomg5hir5zrq955ZWP8TnLRB8iVWv1Egm5nkphnRUFU7nyetLWzPiCvs6q3TXJKLk5",
  "key6": "313T4h77jbiG5RcPR9urN9XrgUU8QVzAG3F2kp2AbrM9kd5BBkx65xWUFuPme79HTh5kheyjfRFKsfsbWMbrKPRn",
  "key7": "5hntyvebBkKKnxmWzqsRyQvMbyU9fcJ2UhYKxuP9bvYpeWQT7Z9v6k2y4PKhgtmQHu33jJkwGcBuVcQrRSUaDUmo",
  "key8": "4WBp7GxLvZbTzY8hRVjCh7bLnj6Hsx91hPeuXco98VjFMgfMJDiCg4jRRSmFPXBF3kvampuw7NiphTUEyy5HqJRF",
  "key9": "3S1eJq6GNoE5SNNqzc8zWNw5qkAN12QSLdmvPdqKNyxuN6R9FEgwTvFeDP9HzaHn7k3MWVeEKMp17nNamUd8a1kS",
  "key10": "5LbmKtzpg1ETFvHtquBhwSv3KSEacR7Gk3S67nsepHSs5K69UPWj9SszhpvUyftTyby2uW6mW3M2j3EMjmbdTUbo",
  "key11": "3bZYijcNVgP91kCevqEvSRcdrEMCZ1ZcAHRskHhyYxAdcNYQPo25XxNRH5hKEX1buRN1WgA7hM8hJGfNyFPPgx7H",
  "key12": "3Mi53crKWg4YthnXu2jvTHqo9qkqRy8Prbi9RP8a7DjXX5HWT1umAQHsJCBVTkASDDCGZEFkUEFhSkTVY6dLzCRw",
  "key13": "5aCBbkRSqg38FycBR164qSXnUxKrLhoifgxP3Aj68WW5z9L57jSrP9HyxqKe8cMZc5CagEQZ6FrEoysY9BPv16vB",
  "key14": "yNjrzPnZMBqQYBssssoaUHdfCbXbLY5muTpZTaX4EZfyVGeZn1qmqCsTKdTrDwr9aSGvjSo2AFtBa8FXJTAph1K",
  "key15": "WcjMu8q9eyhcbdPN8nfUFfsfGGcvAE426SFbggAMhtXmCHRXCzKR8sHEBpvrtxsfYsapJkzvg44UW6XzHsttpgv",
  "key16": "4bS6ymSkTTKkpatysbrmMrKHstyPdsuZpy57tYxKKk5ES1FYAAZpDo5HtHbEjNHVHwYKd2zDEjnRLCF5Jkf2tep7",
  "key17": "4gbqVRVWJCXK49kSE57FWWmZuxrW8VmNzPTHY82sPAxmof4DNTw8ePsfPp3yRbsavDCMS8HKs2fmNeYHXvHqaCrf",
  "key18": "4pZCS7Xf6xcyCeGv1B6BfNhbDJxTyHbhuuDBr5Q1iDCnmNm42653f9tbYeGBjDWU4LhmhNpamgaB1JpFoqWsjckP",
  "key19": "2RZQ6TJSDQTTsU7kQgCCMF8gTRR77v7WDVTXJiimq55RvteLnmV5MNWK65mETFVLeoQahxB6bomBMqY8AS1QqZvR",
  "key20": "3wWC66eeQw5yHtUPpKLyTiuhYdTzkp7kwL9VLQarqfyhwMYKZe6gLkTYJSUuV6cPNZRFhmpomPaELY7SceZgZ4UV",
  "key21": "4wFdGMkT7AWHDdhTfJKHG5e59e3UpmeDm1wdTZiwy68tyCHS7s9qtewdRbxzGuzmVh9TZtSyFpMCZSQg4VtmGEn6",
  "key22": "26fpvbT7xUQnrwE4vH3cGGLBj55w8pncWSUayhSGsXzu5tDAtiftkjosJEWCRJbFjbPH8uikwMuUWJS1Gbi3Xs1P",
  "key23": "561EuFoyvoVXnCyno9mG1iwnkDDuFvRNqQDs5fAdcnLeeqwvyGLX9LD928NAV2bd7b67rqWV9i6LbyCDDtgoQdNh",
  "key24": "3zeAMzTFCsBZ23todgbkPxUBVcVyzKqj6tYXG7L7StfRnfBXHMvxX8WGLmur5jHC7wNoK5Kw8AQLUL1gSKvPsH89",
  "key25": "4GMijPGySPxtwHwX9NwzzG32b12KVeMzYMrd8TLDH1hPNNyfkc7bbbSSCDWVWGqRTMaVUmMSJgCQjPdwpi7JBgMj",
  "key26": "4j4e5WKLdbiucDhggKKq6qSwrcE6RiPW9tgKnE2zhAk7jPGsH8hTL5dkMq6WaH2hL5UPuftMdme36MDEWE2cg1Tp",
  "key27": "4rbedmR3A74UDHEFnQSyovEgpqJpXL3vgnnvDvmaN4sLer8k84KPA6sVfdthHMFUQA61Z4HCJE7kM6KRyWSv9rSF",
  "key28": "4YnyJVykp3cBv7eGFekPYzDFXdps7QoyJETTixERJoF4QPVZ1oFnj6ScLgJw2PSybrtqJJ9NZq7bLPdg2a6jM6xK",
  "key29": "5rCzR6dDGz5UAan1e8GoMsiSuXDEtLVgo7MsUcZC9BYeUPY13U1zWSt3wckGJvvQ4yrKBnvJSVG7dqg4ToEFnmZb",
  "key30": "4zCLihe7obKFcYbFb3CuS5QKdpyFgxF9CGE7TexdGmf4xQqTdV2qRb2VnWL6HttMqduW91hAvjougMN9UGrfeGLU",
  "key31": "4znQWH97KE1jmBCwPbS6DDkrPmFLEpgPZiktPVCjfSw7ZMY8m4n7W7q4st1B461uk2iSY5YbGiBPuJ5WENy4a8Rb"
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
