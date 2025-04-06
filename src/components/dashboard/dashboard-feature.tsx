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
    "3ZLtiCRR9FxUsYuYUFoxv9tmmWCL6HiNNBTD7k46KT6PevftgU5oXMHk7p7FfTi2Rd8m2rZJbHJqqxv8FZXP2zjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yV169wZt2HDvrLavUZbv7Fg25YrfLwj8HneiFF2zsyzEdTq2DdT7SHrTWuNQx23tWnPPjSFRGAvPojzyoZfb38M",
  "key1": "3KK3Sr4nmw8onuJQj4n1gnM2vp2pB3b5Lim21kpLnvHEoR8mBxFrNSNZXBBbdV96kUvsh2TpXp6JDv5UC1bgEUTA",
  "key2": "2JvsVJxGLJkiC5ZEKodkmTYRcEcMNmSXtxtcgqiQhZm7T3e3AKS3fRQ65JkeBffTncKPNhTrTWbHAvYhngBe4m6D",
  "key3": "yhTWWB2xENBR9ZMgGedNavQfLUHJQRcQtAhhDPhpeRif2QvytkEDs1GnpHLHeskmgfAdf3ucPKWA9127Epu4q67",
  "key4": "4adaXcUWEywS8LDRA6MXQwvD6sbg8NfPU3kP8Wv7gboGjZD21ktVxGdyJms4Q7nWNhM3QaM96VeWfRRdf5epc7d1",
  "key5": "5gFubjMQxXggoqwqDChNA7emCnLgLcb7TkoHrHjSbUxDpdYZfr8GtL62cLd2yv5WPDZqHecGVCBnfkeoris4gygc",
  "key6": "2FU7TMN8uhnD23AhtrsUiLSy6c7JwfnhT7is2Jiuqeb8X5XQjBeEBzsdYKeLq3PbLGVu7PB4ApGwDb8q2KvWttTs",
  "key7": "2ZJb9Ty9gpFhsxrDzNzNFw8GvCMktT6NdnvPFJFC68ZBdL2bZ26qJdVSLXHysMrV2WMX137aKtrmtd5ge2BLVrtn",
  "key8": "y9Gx5MSxYtUCnu62R28o6NDvcwiyo5zWuFuXSVanQ7BRvWktPfchiv7MF5QRvrpQSUs7H9vfLZzdz4ikUZj1Dmm",
  "key9": "ecD58QZLX4kBaFuoyzqLe9aMbeDBfiu9aRrXFfKxyYG62X8BtUTJw7qz2bgAh8XX1ZwJAQ5kqKq28GqKH3ii6uM",
  "key10": "4dq5MtEXbFPhvbgLB85y2kT7knTPSaGwJUwVRJSvxuLgMeX5rK8fcMLtCHaF6fmuqcAtEiQXAA3PYgRA1Zf1sk2m",
  "key11": "5jxscSLqQEEdU5QQyPkEKNFuiFtSLQH3guEn4QVHc8Ue6DiLXgRRyzgbZcoyiZxrUbBvsactE3DRRQcEFGPyNEoy",
  "key12": "2dENju63m86xCYbF9jvj3xasVEvJT1rLpu4u6RKyCRnTTgR4Ftt6iCRHSTYiJ53SKjg6XeWoYDjo7UntdJxJJ4ab",
  "key13": "2frwsGRjgUSU9zRUDM8aYZMKbP8vu7mKQrED3DWBKKRB2GPHe1LRYv6J4ZmRQSgmRHroKH5biRKAgwnXfuUKyuW5",
  "key14": "4JXPQsk8bsN5UkJgXaLCo53ja8r6g6gYnWoKabDmnVVSdHK56YxEi1eVXobqhGGdzgSqVwEcuKQtzUv9zpL8HbuW",
  "key15": "svvWrpFaoktPUqjeK1JTZwxugRH8EevSxTym4iRRZ2go9pYvGF5LPGWdirJNUoDND3bwYb17aYCdkR9BgYPTojc",
  "key16": "4VTDMvLa9sb6PRAFd7PDYECRXRgsizNyxLutcAd7saNRcJiemsCkrtktYmcRSq5vzRCkCbRvDpMXVHSirZdQuvhs",
  "key17": "2WAQrcYbVX1ppCqTn34cVvwDZ4VwzS2BWwuf7CHGuf7Hz3cWDxdQ49R9jWZ6eg533muWZkiK8J68b3QPJDVDsZwG",
  "key18": "38HiRDvKpmYThwnkE4n4YbmzfdDp7dRBUcUy3Riicb3EwifHPBjuWWVzMNmLDd61W8n1SumZPJsGaiB9pyj6ZPQ6",
  "key19": "2evwPHFgKq5iDCzLd29jMfKjDZN6McJXguU18qJomnzy53GqXAxrjAGceBpBNqA5DPeYGjLW3cekqVLRkKWjYf5i",
  "key20": "4zxt7phhs5uizQDR3bYZSYXZrCzM9T9n51cya7X9YYKfSPgSpEMbj8appc4aeCNmzcqh1D6GxsQPoabMdBzVBDJw",
  "key21": "2WEhmSwVBUQQvpPavzzrFX3i8XkDBgAu5Gx4ZPBq28gt6pJuwfoLJ79UTTi17BVSB35pzkbkmhN3shGVnU9JkhMk",
  "key22": "5xQD5PtrZCfANJnYUgexc2VvirXcTjNqrfYwkDi59JwmzAYQ6zcttjXCknDeF9rdmU3PiFwrqbRtefV4JMwv74TR",
  "key23": "41whZZYK4cARwe7UBwmnvmcwKQHD2QN1vf2PGZPjAqHPCQdZTzGjgS1rbthVZXGwDhNAwHsXoMFwB6xRQQVcn5hb",
  "key24": "4fypnJsae2NRs1J8pANpxZ5RmopNgHg7Jq94kGuiNYxoUX5Dt6dH3QnBjCWa7mcUCgTPK8NzpELWqx7Bwt5rsnxR",
  "key25": "4q5jw1bj1fWYQx631BmWzRtpWCV23Refxv4vvBzfm3YxvgFyXBzcNWn5zT6JxGUKeXjg5TouNX9V1Z1nuCYGJ9pX",
  "key26": "2UrwvtNGAiiaytAmSUDMZucokiUeMhFvUdL6PrpygTKdez2PGVhbfWi2f2q6mgz37gFzvg3EK4uFqVtLQ2uHsiHv",
  "key27": "4mbZt4skhBtquW1UhCrCyUCn8JKaZjpz7t6zQ1mVSMmUQX3vHu7Zjc9fFb6hJ9Gd2yRkt18QVtQahyvP77rNGjs5",
  "key28": "3uuPnx28mCiYfwfKTyonE9iQGzJxkZYabX1TJx75EuCRb4Kg6vDMgAEMQngSEgzHByKLncpfNi2Y61huV1vN6E7J",
  "key29": "3zERh7YNTdjpMcLAET48ara4RZ1Ud1oH3uo8UVwFddCmg3UQjn4jddnX6uwRCLW3Re62eP3GBV44JFa86j3Puhti",
  "key30": "2r9xxPYT4qKFjRCt3EGxsC6YcocaJW1LDJmSDNvfy6mPErU4GC5P23nUiDSE5BaJm8EeBu63HSnnvdLQ1wBd3n9H",
  "key31": "2czAN6wwgCiNrJVTaeuoA2aW6h4mwfExWLDMzu1VkzUtetawiysN7Ab2Voph6EB6mmUgNiXVU3fW3DzVjnjd9ZWS",
  "key32": "3MfnS3UnCCpneqC8Ky6h35ScbLDbWjddrzamKfkuY78kGpWukGGJrZe8DNM3TTjiTaPQbg2V1gpkvhomLZWrFC7F",
  "key33": "5S7GFQz4ebNwxDDboKbjesNqWMQCaura3SmHQBnG2jVrCQbJx6YELUdkoW4vTi9LokzZpunFYdgWLNJhwAFsQoTi",
  "key34": "41Ct7FVUVDoUicbvRqBMktXxN7AuTaCE1WfDWGz9CfFNV9N1ivAC5qMHT1iZEYASMogMAZg78ajHvkECHect2FeM",
  "key35": "4DpK6gAZtWL1bud3xXCBrqBvVLPRnfCG8ND7BQtcuMvYEjTQg2j8o3JbsD6DHBE5x4z9dR5NEiboJ9cNFAVvvRTZ",
  "key36": "tM5ubq8YBay6JyHVy2dQL1hs14u27em7CmRaXw7QKnyt9gendVL2ZiGjgahibpbpqGa5d6L4JawgkKoL2h5RPNG",
  "key37": "5VWxksDJibZEX79XvpZgScWiAY3HbvXU7vULPopaYQnFRcq7XcDWiR54eAGifjYJwovd46rr6d54YwKycwzLvT7d",
  "key38": "573k5DWvy4hGgKvirQr6LuQ3se7w3XLhZwTKJYP6CTNEKYmULwiqK3W2xMBXu7Nyc4vfuLYmyUexf7eCu6yCz6kz",
  "key39": "5k8oJwD5Go8i4RhWmDe2Dho7NtNu1mdJbmpkTqUYG61dusKQb299Jw7GW4f5Ks2Q19LGZ1qTns2LGSb4qDRA4MDV"
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
