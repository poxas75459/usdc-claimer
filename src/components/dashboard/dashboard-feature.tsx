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
    "4pxqUe97jnc6yzMzoDcnEHEf1H5KzgqTC9y5K1jALfgPzR2h9SUL8t4MYY4Q4HPe5W6wgxZUkbVfhDqGWxbTnXG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLgGd9Z9XbUc5kL9pQ27FFG8dztvunNRuCTrwB44LBsEX8goye5h3C4r5d2dgvkCn5c5H32oreZVsVV1mEP9r9T",
  "key1": "2TJ2rDYdYWihMhJG8Q4KYguUckw1WwUMF4qQwtBm6LYoriQnKhJJfE1aNFSyb1xyUEq3nBZFWcRG3pKXK7tquAsa",
  "key2": "5xS8jBQKKfgFdqAhuGqMCMyAv7H5oH1YnDNGKPySW88avjWrPwVf7erBDqa22NFpd8NZ3Z62j8LCeBwtMW7QUaE1",
  "key3": "64LWaD7m1LFcZNiS32gQ3wfwWLrihuuvgcdSrpF8ogooCFhY6nRbSbi1LUqaAAQzPJs2FGtBthj7cZ2V1LRL7696",
  "key4": "5bS23yJ4KUPwZtUbmyzwcGLQzWsYcfAxZz9YtwoaSWR4VEWduPM3zD8MNvDtzUKKCLMiGgDco5m8izSmsKeU7JSD",
  "key5": "YHFEX7AEL8GmwK25EXnJxU8KXsZaBUEEu1ne4fWUztg4wCEAvp6ZxqZXSDFWKMmsRzrU1EpsBKhwc63vcaNef7M",
  "key6": "21dML8NEXk9a2vgcQxBmbpuzP3oHraW827smXuGQwdCFjTWR1syteLuATdAh4F9zFLNik9nQXSShLxatiMXh9mRZ",
  "key7": "2PtiurTcC4j9U3iDJUApD378YSj2xNSnWLGxLHdAkfNUa4kcQUHVZJSMaML3qi2vJuBrAckjxdkPpT8mWcJqorFm",
  "key8": "5LN6Q8W1PDXtkrkhBfbQTZxvRvYa1XJa3CqqNmFtr5rR2tLeM5fpkmNWAG3tf4x4wgRsxggXo37f9AHHAYVfNLSx",
  "key9": "4r7dTQJQ26t95gQsihjNX4bWadm7UYofFc84YqhAfeUL3e9cCNDWw7cuVfHTq8hMGC1ND7Lz4zHJ5vdKLym2Hxaw",
  "key10": "4qediNd8vUxLPg9xYB2sxpjZqvWmBADSMZ3CrTprydwYjMBpTDjK2eLy5G1SP5oCNtLSDuChNRUnxER49MWNeqpJ",
  "key11": "3kMNSQ7b7rAU39crvoLEY2nViyc6Kp3AcHdFUhewU4u2iNBx7wJK5Bh8r27qVrG7tBVH2Yjh3qW5oxBM2kuMiphf",
  "key12": "8L4BNC3ujKUeTYXZ2j7hRcc8Ln9wpseqNcZ8MoZSKrAcyUeWhwZdXmpc5NChgEA5qLs6DhZyyN4SWzKFZVS86V1",
  "key13": "3C9KATrrfDbKxWFJVgfHX6RqwnyAnccuLscMnK5X7KUjTwjRikJguRGrp1YNGfbVgGTGYRjuxL9Csg4dJDcC8yyy",
  "key14": "4YSCNyVWmJoKGKiCszSQnZMBvJvRswuYHawzTGqHQtq7xnUZ38eJbmJK79bVwycEJPhyHYK3jfrsmyxnhscTC6Me",
  "key15": "3gFHM7sUYKPgCvv7DxY9JBBe1M6YnFeviigd7Jj4jrxhz22weCVdUzUWXdqcpd7PFVRnu8j4tee2FA35K1CTsMNj",
  "key16": "5LTq4tciJJkJUEgghAzrTGq4iYPhXikmG9nr8VG7ZCNoJysys8QyBQyc9s6ptnX4AW6xNL8jtwDoE63a2BHxVMEE",
  "key17": "3CvCGgrRo4FF3QE9q41nWhyRaKh9C9dmGNCZEV65z21g3ewPYMDD61AiJQHpG9PHvWd7v35nwsao1WYU8v1JXCmZ",
  "key18": "4uHKQkYsEqMYt4LgcgY84JsicFMn8bwmsmn46CD8z7vmh5uiKAtxU1C8ZVi32SuMhvV3iHL3sd1hq7Nx46358kda",
  "key19": "5QgkQHNucGT7fcp7NsBhyDJMKuEnQLtzf9ULE7RxJD8pjSFT43WXycgaK7kgNnH1RQD8yCsFfzzC3CEMkoEQzyac",
  "key20": "2LQE43nn3c8ADhCLu52Sc6T6spYf3WSJYNCo8yhL4JnKFndQsNDQrS2fHHzEooAAkjSFw1HUyo848LuNV5EFmTkQ",
  "key21": "2BfmM4ahRj3CvfLKH18WqUQgYCmyJcmLBvWuiYrjStFCbYhnB7iTszdAjLoRnd9hUhETScpgFyBYdmxufTyL8ah8",
  "key22": "4b7XwZMcGHhUJ99bQjqjHdC6ZwyLNntQFaDozjrATmk2PQmCsWiVCM3Wf4dVxywYY2iiJbxpLEdGvXYbukpP71Dg",
  "key23": "5Ry6wqCgEu4RFRTqxcd93Eu5Aj2rwSP7cx5dynTttgZ2azjmtJwSL218UWDxthXaxkJLvrTQSj3N3u9oSMPsrkrL",
  "key24": "2QtZUvSXNM4VtjBnvXQaZC9HTHz4RMpMfc1zrkvdvdtYPCTfJnFddXNeAJ47fXJe32HL5YEFVgwh6gqT6jqtyC6m",
  "key25": "uBEHa22MD1Go7BPMcXKfsxHJjuZCLkWK3YhdLZZf6mJ8Rg8R79JfGRukEtmELPLC4HcmYZxTCVBaATBhNroRwyN",
  "key26": "3cR1qmXBXi1YXLdr15Rv3YLyW9pdWFBqo6J93Ae5AmmoAz9JPxWWzTThzLXYCqhp6ZgDgV38TUhnLF8nVsngt17B",
  "key27": "34DHJB7561nhtAXAzLS92agsm4KziME8yF9dfXw5RgSoRDRe9YW4V6hVrYh6dtB3ocq6DGunJWTzShh9C4ayqt9N",
  "key28": "1VL7vybTJmr14eomVbTXhYN92GNSUb414YScZn63bo6H3EcseJ5GYNo4CmtU5u5APA7zFWLx3cgaP8YcqJ25kJm",
  "key29": "56b57QYQ3mcc4EWrZT3PHxJ6sK68hsokTDjbWD99UG1QfeSG1MRJ2NghPFjcyUzxtiJu6KSSiChMGYgDj3rba5uM",
  "key30": "4J5Gb7JRZ7kvU451VZ6n8G4hyYosBykrugWjrfNyN37xU5NzGgteNNU5APF3dyySovEkSQvtQinUBixf5NBEkTTQ",
  "key31": "4aD1HiA9wGiqRhm2fgb9bCD9kYRy2eZmbwhAEG12jzoALohaDmAwBrW9xRQTEsqh3XjbUVBoJrUDhw9APikxLNJb",
  "key32": "agS9w7iV2chpKGfiFVHqYe585owMpb15wWujWQyKTuKzSSZE3ZtgPkwWxyeEuVDitdtfKu2FDbDJdnQV9tDFyVx",
  "key33": "2nqbqiX17mLjegRrmG8fFywwiCFWcQWeSLW9fakn8k8sFjPFf9XnXmWa7Ue9oTbjSKXMeTrCV5QzwJ2x1u9BSDGM",
  "key34": "2H37rxSxZ8UN9j7Y18n61sEwxXJsN5DZZkGKoDGUHiyfQ1PbXzhGpuzqY1iHkZcntpzpz1HvqkNc1LFi323HUM9W",
  "key35": "2dnzFyoaAtHqRtPp5uJCHmWQnFpGn57awdfLRD2cxVJK1wakJvPzGt6qNfKgGmhSx5eEjJdJQ1HCgY7oKNsJfLQ4"
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
