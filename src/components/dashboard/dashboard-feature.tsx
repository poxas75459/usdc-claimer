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
    "AmYGrM4DUtAiEQYxUeWQM7v6iuYVvFw3aSsF2HYNk6BjBnMNH3UHjbtnZuz1jfSNaZ6knt3LxdcSgSzxc1xhjKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPWHa73aJM9WNR8QSEWEVJ6JUhign4QMdYFF7xHwhJ4juj3QrCB2XAo2A2wJJFPUzjipnzvpRcUaHbKwbmswLit",
  "key1": "5q3taRyBEMAwVyLu5HMgAwfyjgXA6PeTSr1SHDCmyXeVvosh3xFYKdAJeBMSB9PbpFzF86fhrywFLsU1ohSFBLjH",
  "key2": "47a3iEVt9UcGtzcymPvXBAPf6nR1C8nMG8ZCzgvDBbLngR4Xaewb7aSawo3EFtJQVxgDU2ispG4BzyhmiJFMRBcX",
  "key3": "23VdoihdoHFcJHudRHT8aRCxCgCVfMJodq4o5ngjbDc6eE38ALoH9wz4xYZERCsFi4V8o1u7XDAY9V5WHLcGrg5G",
  "key4": "62WvsfwphpBFDuahBvzHnQYT9vedeit6aiCCJfuyzpMPHyQ4qaAppVsE1WeZDbQg3Yc5oXGGCvcoEwmESpKb3EJd",
  "key5": "a5yh4XEC2FibX6rYs9cd2pRtBt3sFS3KNy8mkzuVGZSQ3R7TPVpUkzvk5GR6NfjG1LwKjzdcbq3r7Y3KfUiGX6V",
  "key6": "5Map2JKmwCQk5HXJzdZkxbgL7PQ3ZnnMdzwhJ7Jxh9nafyr7bgPSgCiVo3iezDLoKAAUPkNCsRNpmKWqCoHQDq9W",
  "key7": "5X8qaCAFZfggngCz1bUfFSoXZvaG4HFiJnRmRRjrc4x8QZfuYdkMYraaRvR43AVGf9y4AWneg9izf6QTFCLE5sRw",
  "key8": "2GBM15jv7amdHskASFieBJK4Ag7n974wHfwMZZtaLL1TMskYxQGV9WreC2U217WpAD9XsthJ7upXwRcECnW52BLj",
  "key9": "AUZKgB1dkidNL1KF2QbSniJqpWJfDdMCS7RXGaEivzBsYozBieGcuBjQjzsDnv23RForb5dhNhBzxR98s419xzc",
  "key10": "2JpLboF9WMLEPQYE8Qs1LYTaguYgs7C4Aj8NCRV9czUG4ALsAiFn6hYNc1DAZBq6GkN7U2Yr4c8UaCfqEGMkJ9FK",
  "key11": "4dKH9jmJX8KdzciB7cV1AohpGZk4b5cYY6cCmG6Ht1JU5oKQDRL674we66B6sug9N5TwW78rX6vihPHKRFKhu4Gq",
  "key12": "61xG5gE6VmpHyuws7WZVBdZEppDLx1MKwoRCoVESfUZUpc1wTGgVdD5tstcELCbv95iDqxEjXdjAkYsSha5WiuJh",
  "key13": "qj43mYcdZArCsXxFKAQxhoaW8GLvCwyqcFAt4cwPENYdHa2q4tpGsoChZD88riN4gXz6rTC9XLgpRyVyQMtNq4s",
  "key14": "2ZgmW6gFqUNYzwsMPxH6zXsJ8jRDhfsEpbjdzmStAtA8KXyJM3DtqcU8nHmUWLK2rx4PWryVfjqecupit84HyvQy",
  "key15": "3RhTYUhz82e8e6DUwze1qrrS81qjDWzyY4R5iRTNtWy9K8W7PkmcrWGfph6iMpUuj96BGT5YdCit9tYTzJ7k1AuP",
  "key16": "5bv55hqDf12ruHHa2FqZdqtpvcohBZYg3ULR3BhMoDn2yegr5w1efwvVbMgyJ2U512pe612Lgt8WszknWPyL3Mec",
  "key17": "5LQtCYDtjHQJNCsPifYPmNFuxXjVkrCHrK9aK5rpvSCu4sLjXcaymaA6bVXkvhDt1B696KidyZAuBW1MvU9goLTB",
  "key18": "3BqZbav9jiTQkY85odTKuwNB3jbaGj6TEQwtbANuNpgFpQMSErzRDYZbWozLYgKPm8A3MsZyvhSs5vx11XixiQDT",
  "key19": "2L6ZHQqJ5D6H5gKRAGPC7MDgvZbpmBNBS3STEG2vx92fKxftdTV8m8Gs4DjGFvxcqSBnnF6MdB1fcs3RmrbhxgKa",
  "key20": "2vMnbX9M5dyERVoztuU3rwmhCTydoTm21eSJAeG89Nno6trzfGBqLnAn1DQbjtXK5GrStbw27DgdE6Cje8RsPCmc",
  "key21": "2k3FFq1PDnv8xwx4jUiFqpkb3k3FuZ9jeMvkD5PTU4bFfUPUYo2W4tjBsus6ohSBy8YoHrPCwn1d5xRpzRZ4ZxdB",
  "key22": "2GEC3kb6WoeiAKJUaDEWkzxrj6L5GrPXrobxQc18GFYosXr8gXsSJaTdSZTX9YSg89SP1vhyYM8JTBECmSQF1uhP",
  "key23": "2UTGD9zuZZawkupRw4ty5qhVs5BuxsmuHG1q4Cxud5JdH4dp5opXzeBaoZN32Xc2AR2YbcsFP9p9T5yUVWVhxKjn",
  "key24": "5cENfCffE3bZBGRM1PQczfPDTfd3SLxLAGa3rja4U4p53snH6Nvsi5thyRgJsicrCsQTbmoMW4bzZ59dFQ42t1cY",
  "key25": "XcBBcvXeEcYBi38uWcHJPHR33FqvB4KB8erWPzjVGisWX2CcpXHvkBiXswizChu1zCHNoeu2DHQUFhZ2cacV5K2"
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
