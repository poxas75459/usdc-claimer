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
    "2nWoQSkVYnvcAHcdu9US9PZDcBS4cjVJUBy9zakDpqmjTnJijGraRDUEJ83ckAdPrtnJpKoy6DvhnwkpSQswVg1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVvCibmTqKdvs1AXczbzbXKn3qXKcSRs5E16Ay44c8cWhipTmbrbNdxQQT8vToLHJKS2o89jvfvTX1Li2MJ6W79",
  "key1": "3UnXz8tZUZx6q1QZCmKFNiF8iRVqUcqj582tN2cDMqsvJ7ZPwTJbex5xyiXpj3aGgFDvmVMs5YXSPQ5X56cNLuT7",
  "key2": "2njhxuRm4vCgCBstTdYEYBWjYhbdJmfzjmjpLWMtpXeWtZ5ij44f3egUkZBq56cX2XRHbRfLZod5PFnR31UDc5ib",
  "key3": "FCZqtSL1358Xstnz84HS7AVxk1pytnzZvq4txNYbjghHKy6rJh1vE81RTYhtib947XyQYRLVyj6YVw8ove4KYCW",
  "key4": "3BsZSDnEmrjZgeS6QgF1KCM3Mq3sdAvGztToNCkFMe3ufj9GEWcU1XbDWADhCvQ4t2Nzj72WnDzibTTx2corLRaj",
  "key5": "4YYhwJ6GjFNwT3AT5vSn2t7ruBMjidDqWTC4cYXrgZSvut3S25KJqmhd9UHDcKiK67a7cs6cndE39C71PmNdVTBY",
  "key6": "4ACzxJxa3gB2BZvqUoE5NV7eSsN1PQBhmUx6ZVfQ3cqCDM9rPin4m9oH2MFs5gYsU3YCRDJGuhmxFeiN8c4H2btc",
  "key7": "3EPkJcN4vexVKDu4bLFv8KPV7RJ1B5sSBFvVjgF5LQMgydVgSvipqF4Ky4G8B4Spab1DCxwmFH5WH23MCrobioHF",
  "key8": "5U6a6HEHFwoNGaX2ASMyzyFix3hQKjfK1vt1p7aHYanMVx1GbxHm5EYa5HpzeszwbCd7jCUtLdUT7LjfS3hzNu4U",
  "key9": "6MjWncbJKkxZ8gns68WKt2UZS5q7GGPageeCHJrsvE1cN6ec4yM6WqCy7kX3PwzdwEC1Dw51ru1LKCrn5QPvs3t",
  "key10": "31S3kVZPN8mdMqB6qNzwuF5BRBLQpdxKdETArCHL2RGeT1Hdw9i3n9JxqQHSC85o8SZMFDkAPDSmvwpim9Wm9UgU",
  "key11": "2YeuhnfpuEmvgacoW9rR3XMywHGAfHX8DeEUCjo2ESXjJ2U9pWsuPE44PKt3kJahCi6rZ9jkAJBaETjBNK6YgMCV",
  "key12": "3Gju9VWQ7qGf73sSSGLFgvTQGjpxyyvGxuSx97CRoHwXbHHFANEvJoXgPVZy5MQoWsmqaVamvbaE66fUStD3pYaC",
  "key13": "2x62Dw9NLQDojmFtReCoFg6kh4qdArxArDQEvkBWncVWRaQLh67EW3AQob62TEuAT6RzEdxkBEgEvD7e7hz6fMj7",
  "key14": "38vY1bM5KYEvVWNAD4j4pZTnY1PmuP6huPUjez21qrfqXpG9C5UBtPPMAVQfeBdouV99oaJXiSpGpAemKovUAaKi",
  "key15": "2fr3DTg73iqNUcxRMVRDkRVsPTmtRqZrVZS3KMS65ijpGZqgqanKKMdqSRQMYTh3D3WbYXMixQUduvLepkLn9uEL",
  "key16": "3gnTc4C8TuBuga7xXWQcgC2NozYGdoF9L7W64ngsKkeENR579n8uG5JMPJKDcMsQhgCkv2s4YwgcAEQ5sQ1VkQwp",
  "key17": "5u4e4Lo23DvTPtDvRpuq5vrjaAJpRhp6U8aB6bCWSCGNzMFHqdyihaMbkxbtnvfF6LaRz9vhEDAwhZ4LKT9DFgas",
  "key18": "3UDwv7bgXBVg8xoHX4ynFVQ4r4NR5t58ouzQWEjoVmRQTGpJJXmPAmEs3qyEwjhsCt3FTCjotPoX5q3yap9LSsSj",
  "key19": "344482DzN1scSh3Yk6iTWxToYtncKMUjKw3DitvCVtBHEHvRfeQHWtUwtByNFZbhTWNcyXKDcbM8tqQiF3ozSXm1",
  "key20": "4TLXNuZuMY125HEoaY3ydMs5x1nXBj77Z3qwSAgC5hRL5EEGJDHsAPnAiH8ko4pRyXmQxo4Vqo3RFbELHhHbKABY",
  "key21": "rQeWG2DVjvHpzq95mWrPWhbGgRjLpeEEcDWTATWieCVNEyPdujMHMPrfG2GPXmnEGhhmdPXrqtVtd5US9jzSC75",
  "key22": "4vX9aCmDRJbFDmZsen748s1gm8UEUB9HBo6CYbZcpMRdygGWTsiDZ2S2qaK6rYx49fBhZ2a7MoyGJ6aZ274XDiBH",
  "key23": "5EtyC5MgvxZxH8Bf7s7ddzrk7fDqr1dgD4XmrTqpdGzEnNJMhJG2T83b8dT25wDWUgfnzsKMTMNEnAKN1nwXKtiC",
  "key24": "2wK9BjeURVaWpqJ32t7M5X7bhn6cDnmTyfKK17KJ31eYY8KceSgNbRKXF6imHzajqRNYR3izWP2sMYBAC3CtZ6xA",
  "key25": "628MuvTytEdibfZU1Pt6UCNNSW2pkFMTsHnBDNwJf36swouLTABnPE3HHqcfdaFg3dUyZ9cyxvnUHiHVjWNR9UyQ",
  "key26": "35sbZycHh3Yrdtk715AaMmizLo5Pv3bRqQ7CReoNk3a1b7p99XV9bp5WYZTgbofaGBRHw1FQA6PrQVVUFPjX9PUm",
  "key27": "4VaXKBXzEsqxK9dAkN6Qh3gZqhMUdFVqitDQhYqFheeskqxkMHp3ShSzf1N1Sqj8hFeHoz5SM85o4og2vhbTRUXQ",
  "key28": "4Vqzm3wuM7rHAKpYJaWYv3SoP6jaj5fDDEJ2o5zf2afQwHdbQ5ANVNapNduQNJRGLRcwx3mFaoaPdAXHFNkqGNqf",
  "key29": "tynQW9dnwxnLYYhjtF17cpShgf5bc3GV7234sLqHFAtjXNXWFf6KgGCrz6uSEkAYVDi6hpwEGgKAizSUhjnLxF2",
  "key30": "3NS4k1ZqMgF9xXkhk51BEdr51uTWMYVgZr3L9hi6bKiqZF1H8VHSjcU2K8ynoHAJdUw57owa87pZWs5apudoHByn",
  "key31": "2DpcZ48pP51CafuH1BNrjVytN8M7ha478SnBnA4GBH1cD6gArh1GJSgZL9X3GzMERHGVkyyHdCZPcgxvZg6Sydju",
  "key32": "2bToKho8MFY4M5Sjbbvr3BZXr96Dw6yWqR7opZPrzwqroVmu9nygJKvMueS9MkDzMWPUvKse539rWaR7X7A6VYSh",
  "key33": "4PRN7ZrNdcUtULnTb5McxjZVREK1S7PkbCehthQaGSHdBrJK38jTaQ79w4vxH2PGk8jbTfSYho5JM7V25LuiAMz5",
  "key34": "4APocY1SdgJUHoPtosBsN5q2cW4vTUG9Tm5aJ5Sg8QYDctcDxcD3EW7ttTiRM8YmnZ57P4MVeDBMqFYpaWh5mNtx"
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
