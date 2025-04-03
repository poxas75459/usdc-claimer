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
    "4h4FJq5RHbPxnA3K9RDWLfSHBLCmYB1MmW6HKaecS9uqqQLugwJsK5cwfUM4eB7ace1kfpCdJGr82jZJjbNzhfiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PrEF9cxYtFK72PtnRBAxXWTSqA3AbMTpUE1teXMntG8tFiaMkRbeZppenbQft3gDJ8gRBjcDYFmjK3db78gvNon",
  "key1": "XvPifxop6Uj5XY5asXe3ug211LS5PX3XtFsXB9KFj7p9sphWCA11i7pUgSfaFazVQT4N9N5PqA4aPqTaSB8kDsX",
  "key2": "476A6rXqqSsx79xkWN5AfJwaJm6sYwJJvi7DGoo2csRDi3pDCi1g8Pmn9XmXq67ov6J9VQs7bLwYPearCbUWPvBe",
  "key3": "2mGRawh65Uf8TLxA3TD18r5Cx8d1W3RXraFNuvtk6scYgCvUaaKPped843VZvnFcuLPnNLRBUPWtHXYdoSZsQbDq",
  "key4": "2fBuKcJd5h1yn7tTSBzxxx6Nz53eZ3yocFVyRJAdDkixsnFPDDzxQoFovNfTphSC58cwpDSZnhrj8ik2uWfaoFRE",
  "key5": "5uMC3p737AhrwoAvoQ1wP57q485bwG5X61z4CTvwJdho6R8f4BkfiTtpiKnSwfN5XyovWcGVXA9xH1ivLhGuJFnw",
  "key6": "5WqW1bSk9sQCmyeQYCNvaz4uPTJLSqcDsCv2zr9U6gXUHbw44vAHfBtEaVTXU3w6H22RoytAQ4E6V4j6BncYP8Ga",
  "key7": "WK19Ltih3JzdVmYGWBm6WvdhMx5ysf8xSvtKvLine4TzasoCQGyVA1Lzk9vVmJco6cdVGCV5Hc9aCV1p4wKtC7s",
  "key8": "i87RYrSRNotdmt6kH49ex7m89cbQxZdZTRBPaD9D6kQ9m1gAm8aPcNiWSVoMssViov1cD6SNDcaR6Yc8L6DC14E",
  "key9": "5Ukv47N2oH3DvCrHwd4NZPCJQdKr3NQFXWiy2B6aFXRtAG7Mc2RM2DHovuWz5Nsn7MREgumTXCeEzzXnx6tnEKjn",
  "key10": "2oLw1s9pwk2WecynB9fUqyqcVP3dS36kQ8DP3GFwZJB8GpfVHDAAkVzMULqisM4AkkmU4f33FApYkWQSmFDXVbrr",
  "key11": "3pgrXAy6LD2op3RgLpwMXQBCiVFHUBHWrW9gkEZiRAgjVxrHnZAb8L4GJvmMo2msFKZ4W2EFXBhPoWZG9A3SVTMe",
  "key12": "5s4f22ire1kMCgRESBD28P6Jr9mmSUoNYgaWcpgErszpzmLG9aYTpvAFv8b7zXEm1nCsLzHUzD3PKcCpUvFE9x3R",
  "key13": "3Lp5LrezCNzvK4sqP325g87AriwkHnP2yYbEXAyBbF177vSDpsKHD3QAXDiL7vkYLirsNPmL9rmSAsDYjQS2tpdP",
  "key14": "3jR4eCs72jwbTFrqdPUX6doR9jXF8PXRBYSARZDBe7JSbXsHUYHaFYyHTAEhtvEy5t5ZZx1RA7ApMiDi623xn2Mg",
  "key15": "4MNrY9voVvTneVqpQNs6hjxV93SWjJbS9bz9i2qRx7oX8TQBv2VphN6yq1BfpCs4eK6MjUW16AWP2Ww4bStjkomf",
  "key16": "jb5ThYonnLpALYoDZNohrhdMU6jHrFJ1mQC1ftmuzSrKRYUqtxTvGQuP6xxbTwjgBeimy8VNfU77zV6B2nyKwsc",
  "key17": "2Y11oQkq7cN65jif2xDVEwRe7cLPeJAYUb8gvG3Wtq7ypbjCWG8hXrsR6SjJ1fVKG94pHKWp7KkMWbqZsVfx2hYT",
  "key18": "5Ub7q6HNGYkgheNCFey3SBfURL8Anw3XpXExt4fggqdfvyBtXrjZ8c8QLKe4cVpN8Y1inkP5jDEwaKozoDgQ93tF",
  "key19": "Ur6f4vfWqWnKto75uewsUA77BFJFFCo4C7tPwGzGpB4nAokNcoqfa5nxhJsyMQZKnSKwneAm5kt6zwz89mHRHck",
  "key20": "4nTv2C2hCPaYLUny33b8jbTNtuQLkDXXu4vYackdZkxzGSsNCajZdy84jqBfn2PEaYHEWA6Bru7bCkhRMt4cb3Nu",
  "key21": "1rRWzLMKxRn3ZDzQ9oQ5ZEinn1ardyM32bpxypTJmJyrJeUZ83XTDMKhVxURrYHi6nbUzEn7GTXEgscWpYuvXMv",
  "key22": "3ZgbrsC8n6qTk1UkVztEnPMqi2a1LwP5ki39npPfQVB5VQcdJa2CLEe8qmTxkuHq2sMwrmvXuMTAeJDbrfDrd2iB",
  "key23": "4Q29Qg4etjSs2ZTnaEEP7exnaiZ5GXho1bUeb1tDTaoLSjRu3NCbyhvSjxKyxr35QJXCTaSUjsqZVxXetn5Y5eYk",
  "key24": "SJWe1fP7Zm8zLbNhCQ1omUraxpAhDT26vJ4wuUCZ1ERV1c5CEYerjBxXVYUdrT2tSzX2wY8MQ5BsCxPib7zp2SZ",
  "key25": "5enshgx4MKCgdtTMPRA5s3LWaprdHem47kiSGM5btwQmP4SL44aRJ8eNtjZYnKEWvWgq99gUrpUKCcUCqeD2M14n",
  "key26": "4KiigwFwkxjo5m7zeqqG1pWwevgAurmVRe4HbJv7YuQJbiAdbGc5c7dwCyNNuM1SLToQfhSYEhzwXQsiA5b9HNLb",
  "key27": "4jTkChN5Vbn1HgpUHqWZqAL6YUGFaj4sFQjxt9ezha11NeFvEBddiyHR28A9AhnzAStVvXBcvsiAeHgxPzdgKyR2",
  "key28": "5UYZaJhjKkqqKoLn76mr5Dws4MhThGCm6rRggKAWbn9AWDEc1hRAEkFPMNSrhT9KQEdhUvMhr8QJ1sCjDKHMf397",
  "key29": "3b2McZT3UBKSz1F1qmgWKZVHng4k9cUKMA3aq9sufdkfnyxsqgkQCaZobqC3EVjRttjVjXjpM6NSMsa5QKhS6cfr",
  "key30": "43VoZu56AKPc4QTWFJFouzC5y7DzGMQJCEGe1H3vNLBYBdhbGpD7uBqoLwQPXex8kHNW5quYCe4GC1wJTMNsmJME",
  "key31": "2eTQvRxJACxrKt16EE9FtnfZ3mHfcAEtAd7i3adqpnjF3qk8KsnS9gAQKaMaFaoiWiYym8GQU2zj14ZF3AoLp2Sb",
  "key32": "62GwUEE4BCbqXAjCLhvnjfvKvykMVnBQHLDCEkVCkDLmrMHCvbYNwkWc9DVCJMJTmTM3zckVNKRxqboJnAVkrDF7",
  "key33": "3MbNg6UWobTbjqS8EKHtrognLHZb7iupbynZE9KXLkuusRueK6b3SBQoVsLAh3K5QvmR4iDPgGcBLFTBpoGTPR8U",
  "key34": "4Cgvm3HhoUyhcDNJbsNdw13dTW54MWZedTraSLBqrdstPt8iUBznHGB9q2H7ZMHUssJsQ9cjUwEhuBnrsXoAmg67",
  "key35": "38SFfumhP7fMTPus9kmUyqDLS1KUK7DmWQgHTMagVxdEiFWoEZq1wTc3t1M2WBX4bLdfP2gmDjojjFXCEdQGkfGe",
  "key36": "2MGc9ZWoWVZ5QanfjkeCR849Uz4FSuzUYGLRyJiAAB3K6c7voeFf3UpiewqnepEgdJhJHZYAdVBGPoyBW3HN3AMw",
  "key37": "5WqqkLK5ucWcKLiAr67o1FuyMLmetqsKoJ36e9KCzyBNGyCwiedsZC7QzH9nMRT5y7QnsW3pUSLBJnZNMpDFdyok",
  "key38": "3gnAWcipqDAbnHEGQhVxTxsCcVK6Xf1WuW2MBFuXJSPVBhATPnQR7p64ir3xKcEhBxgYFTqg67ePmw1vHVzFh2qk",
  "key39": "3G4uc9fQ3sFSxsD4F8gViSibcenXVAq7tTsSJGqhq2QvmMMt6VTRwqqCTxXrBCg1m19ZEVzX9vFskJgJEH8T8wNB",
  "key40": "3WnXe3JvevwdCZqFBSihcnxWZEYfpeGJ66thHfEA629Jqp3zGGB9NCSWezAqDz6YbFDPj4mXKYsjoRJbxB75yEG2"
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
