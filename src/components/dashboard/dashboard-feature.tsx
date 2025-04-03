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
    "3EXKs47wT9WCuk3mQbQqy6vzJqtqRe6YvGiVqVB5Tg282ZcLZGY7fxo2bUekeeHJmzENoGDLHwsxrQ2msJMnrhRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfpMNfzKizsVeR6vd13BeVpF2PUuW9FrXTconQ9zWUsbhpBgc4WooaRqo8yaPQejyZAWxJWEttbLd5uZ3BkmeFf",
  "key1": "2s7mJSYnQrgsefX97iZ21a5tnkFc1qP95LvNVHid4HGAPcgyLYJ9Z1npvPnYLuGH9CBEziPbUp3LXE33VPXrwYvF",
  "key2": "3gx9Jc6e94ysVZsDyRUpUwqDAmfmMvdVxSx16c8XZMP5tN8HZeY5Zay6fujhcu8ZJqvaAEfouerKCZgf2LpZ7fqp",
  "key3": "2Vqq97MDsARq39EzkrYuqURPCYMRjSXSLK1H43N2M6neCY3VQA687s18D9XUsH12JBdKQKCSedQWdFs1aKh9VgJ7",
  "key4": "NoruGf9K2Xacqfz2uHN9uQC7dgNtyj5jNhNVhLDZBEqQggxCdvSN1AuLnq7anEA7bqoYss1ZPUy5HCszH9sYu9Y",
  "key5": "5uSkcR9bHmPr89Nwx53mECXYqkgxyrU8i8MgtSWvcDMAyBctWyrsTZ4WwqZfE2tyxJ8hPDEDnj5tZ6vpB1r28dAm",
  "key6": "qUtVPKY94QwZ2hgfbSxRLhnXU42A6Mc56mrxewLgufyaWbHx57mP4Yj8A8JprpikrGZ5iFW3QE8uDrhoMbVQhMm",
  "key7": "5gBSARfu4gkZzDPBW8GRK4LcxZbAny39mijsDredE2EsN2zNsDPdy8LkJpW7dgswFCA4YHqC2T8u5vAFqCtsNchM",
  "key8": "UQfL5SuzrSHGQqjX2HWQupbtmVczyXj1v5Q5dLEHhW5x6iJeEuT8Pf5GXhtLEutsQjabtazZv57XQwbnFcoFeRh",
  "key9": "484SKeocYESJtpeNgnctgcGtt2zh2zXE75u6GmWrVtYkKkCqem41KWBAE5FE2oQipGx43rjQtfEFkZ7cpC1tXbRD",
  "key10": "4aid25ncZYoLtfw6UunC7s3DT6SenesGgcMij8x8wExqHEPPzHPCB36mjUP7N4epB3HyyUrdxiDHgLbvXoP2ZRLq",
  "key11": "adSzMx4DvAJ7rEMeKuc1gT62zbFSb7o3XcoVmTfB2zr1eDCfBPXBQPixFH8NBb3XgWdQw9qLAqMgfi8aWH1rV7F",
  "key12": "2MJHusXaTwSZnbjSGsQ2JXvo3vRS7L37VkFvmq4TiNJgQU7bMru7wJbbra8yq62W8n6xyuUkUCBuWMXZnM7VjCvt",
  "key13": "5ndhCebopSHLRHPjMLbEfM2ZWmLaSdrRX8THztGdtG1vGPbZ67cBvyYUYvnFjfSzW77tJBLe8n8AZ3S3S445CPsu",
  "key14": "3Rjz7F2TGXPMbuWHGydLQpugrwfnLpjVPfqaDfgKrTmPdq67z66LCU9zu85PVRTEbnYBpN3BpjLtxziHj1szv1c3",
  "key15": "sLJ5n7PUqX2pTek8GZbwFjDjNkqQQxS3Jw6NyzBNsJS7Q87jfj2yX1visE1LxBiCJzDCtNhNDEEiaWXPrNFAuxU",
  "key16": "cPVgYbTDXnRU9qfiWHgkstu4Z8GkkiyyH9V48SFYNXuegMFM713jKRz4n2qqRk5f6nzQiCtcpNHS2HBPWnkywMJ",
  "key17": "21FcS8hNmVwpxbZxvmgbjyqr9tb3bxYEG5Ai9wHMC6JHjjtWiJ7v4fh61wcqmVALMwyCUnXrEgcuXJEFHe2aEVte",
  "key18": "5n63o7WqAQv7ZHWMPAGEoRY8stu9tBRULrKLzmPprAd71H7GPjrKrRrEcGfGKWrWgRXiRU9Df5eGNaSbymEHXQXS",
  "key19": "3yschLLCp3H1np8ssStPNxaMAczHuKD5FAQHFqXM4PGSTSxrYk1u7o9C9mk9igPETxd9MeMG1trAxVPRSzEieZrV",
  "key20": "hAVGd83vDwyLwBKnoUpcksQE9YsjLiMgXAyq7bXqDWjFDQPgD6UuuANuptDXHyJzyRcqbWhmPVmJXgvLnhrvHgY",
  "key21": "3Vaeoifgw9yiuG8Wb8j48xk5n2F19df9e6gMrcQSR9gJR2GqQVfkPA1v4wudEr4zTQ4EUypSfYvstFSN9qzWPrp3",
  "key22": "5pwUc5C2DvpWmfdjeb6a2fJeJPrGihXy79UE663QXoV38P2iQr6jaM92y8TgKNee4U5mCxZjoxijbYTVJjfxCVG8",
  "key23": "5QZ7p39AxmV478P2T6HBGv6RnvJrxASFjUTpySRL21jrBL61KR33YagRCRoCszHnw4mgN14TRpAPNX7e4t7vzm1M",
  "key24": "2WtPwRQ8V9ivr8tg8bcLshUMqURWGowyF19dLHoyqJiHW5KSfJdQ8CKBk3KR9GW7ESTBXHmSi6yRP2ghqmEjRjM3",
  "key25": "3VZYpq64ZLpqNcbxbrWwip42t6jW2KvWFnjP2YXdMPUos88eprUCjpUPK1Uatf6L9yNVN2dX4kySvByZxJigMujV",
  "key26": "2bRaU4kZvTvvRH4DjVEJomus9h2TaD4ojFvyP6BBhinxAbFAiYQ6K3sjssi15a5599MvQmVyprM5xiiQT2ZHsaZE",
  "key27": "5mhVDz9n91EXGjn5ybXW2iqTWX6VujDLwsZ5gqtfV43zy9r38rJzzt4uYoGWff37uhqJs9zBwHZFEAQbMSo5Ezce",
  "key28": "5jxEYQrkqBqCZAWDY6FH3Qnxw76RvTeYJtLB7PnoALzudBgD6yA38C8dYWrGzsiuXcrBhWk94jfdg9vF7RsBnPcF",
  "key29": "2g2kjTG7bHk36ao8uzAv8gsNB19oAEUc3mht6ez3GveaudrCuHmbKRwstQgnMvPLtwX8gHMSsGYsUrVEKGHTW8zT",
  "key30": "7RZztxb1eSCN6pS6M8UgBTEhqfyvzkPbz14Bmr71jZyCisWxvqxdhg4qnUDbCKL6XCrZXXGwuDHxGqpCUFfjcPf",
  "key31": "5c1d4o7fhUWVwfoCnmCSa3wAXdhhDSMLhtr7EjoHMuE8YW8R1ycc83Y3sZqBSwjqxB2K2Tg2DKz4HwLxCdqufCKP",
  "key32": "3tR518puihgLzdNNsR3ya2qwwXCb6Ju1h3Ajj3KLCZNggeCye9xqMvj8BteMt4WsGNpK8WdMXEVLZea49u1u5b2H",
  "key33": "5F6buiAu5rhhWDo5SjQ6sWUSqspgCdg2uHMin2Efu9befypGRgNUEVjp5V9di68i36BvXWTbXjpm44JfP3EStb1b",
  "key34": "3nEesvmaR1HyWwNLkiprsDr8CXjvJ9txjTDXWGTVgqk1ca7xUreRucEreph75BfcKg3dZY2mkGbsGxzH1kDudT4z",
  "key35": "5E16cMM1v5pkyarbV9sSTnPADSUqdWkHsRB6X5rKknUswSd5S8enKULT6hrQv32GqdrtREHoHFBLdpBAqmC3T5Q3",
  "key36": "22twftBLtH8iRM7WunejuaQK8zQF6Nbhyb79upXqimzJMW8eHmeBiVAurAn9HVAwkiqFGsariBojtvcQh3xr7LAV",
  "key37": "5WPs7ZGH1jBQRM2WyeoexPH5v92NS9oYNc2THXPPh4f3HRPGAfjfEFCAwZdt2Wn5q5rXaR9iFwfBqaiXVi2VgTXd",
  "key38": "FKuVtzK36mtw21M8CUcDekLjMWGfNAV3fzREDq4qWWxX5VakBKov5WwSZpfVG6Q42L95KZF26NCxkifjx7MG5kY",
  "key39": "4ZUCYoKtwoX9S1mVrpkibhoutiyLgqpRp38ifieTukrr3qPa5FyKxeUcM2C4Hmj7ZQsSaYXWHXxfZGmqKwMTqHAm"
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
