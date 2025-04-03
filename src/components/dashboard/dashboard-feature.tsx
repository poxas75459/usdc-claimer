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
    "2bEjap2GtC2h7GHi6f6R9r7tLgdbp3z6a7oPktd59rEoqFCZw38yatiuUxFu7qdEzqGPic3VXo8MatS4ogLvx1KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wq1ovwGFUCxsvFZSP8NHwiUjZ42wYfM5BtJyBFnqtpSgw6PjtF7sBQyTQo7QS6AkFnsNh4UST171bXYZME6aayq",
  "key1": "2xAW2ZxSBQBYEnaHUcQC25Zh4XhZtDjKGQRKUR56WaSXaLQdpbvJgMCza1fpH6VnRTyfnBPtHa1UJuHqcmLKcqjZ",
  "key2": "2JPHKZdN1tqCq6DEJumk6s5P4fCXfkiESBJdCdjyLeSGBByacrxYfg3ZnKV1HVp7n56iBcYNwNSqKkF3Jg297UVM",
  "key3": "5Q9RhRriUuiMpmYf9UzCqoiP9dTLhU8cwt1w1EdG6XP3V4UTTSx8mfpNEh2bcjXDQpiuH9V5rWGaqfGW9ZpfHK9y",
  "key4": "ApHQgZCrQQPrnbWjixuDeSf2xMSoEvtmn2JY7soRZxdudBtDjULmXdyrTNhsU2nvC4FLFX9zG4MQRRy4xtXRLjm",
  "key5": "2GSoPkRNzeSq7axvWdu9SmiyggmuUfzRamu4oXAyjkqfBopiZnMdxUjtRffqJVN4T2WBWX5CFHXqNqfGS6C6M5XU",
  "key6": "2VdtCRMCSSQMm8fyuTxxKonzPNDQoR1k3C9v7rHtGZc1jP2j7BBSZzTQ89i7mUyGurbiL3jcvzdQVbQB5PvwFMea",
  "key7": "3F3WAGfwqjMUftcnbGEn6TtddzaZhbV2vF37NrDXLaefcdxNBtYT4rXMmK5FofS8LvXVT3tTyNsqRZ8B5oKZYeQ",
  "key8": "2SseEk9aDaALKrrZdh5k5AVtHppfbaSNgHZNAK4u4ch7mrbwCDCb9B8aaz3kMczJu3B1PiXEeTYMZT84y4A48ncZ",
  "key9": "51kxniZnSeneibTt97uomMAkC1mm4DsJW84R5mKvCC4krTHp5pSxk4vQkVAdTWdncLeaQV8t2WpugypWQXg8oyF2",
  "key10": "5jiZZEPvSBEnE9qk4MSJHAm7eu89kSoQwwyWLQ7cMK1NrgZXbZWxmUWYHSiiJWq4Zt15npKL2dScsWt7kD4EfBxC",
  "key11": "WUEyJZR4xUHFQ5ykhbNVrPD6zybH63ZzkVL5AcQg4gLgJ6SYFbzfDuKdJANoGdToh81MDBEZUtf4bsrN5jFQwbb",
  "key12": "4BLJd5NoUgBcSbYUttAVn4PESpBYzHkRDurqKWuA3mhjmddqq4KGxm3E3PhDP4uCndrFSiVXU3aDbKm4EPK931Ts",
  "key13": "2yjs7KESTxkRnGq19LsoQGoGS6TjJr5etyu63oaY13pXnYa8ktWbyKUjVuvYs7sGMx2yR3Pnrrg3MMxMzzpxDRLa",
  "key14": "81HxUCmqWu8NguzRzUSs8EZQD29NCzhQV6VaF8jWV7HarACDNhYQKzzAya3TwMYsTZjNbLJhWWA5h4qygQGzeRe",
  "key15": "2suBHVwMZ1zELtJvaJhiVZV4N4BAPA95uZfsjSL8MGcgMR6fdSFD3uuvQ4kYr6NxVRuxBP77jJobtEhUAANo4fJP",
  "key16": "2FouRoJD9xJGko8QNTsPRNh3Gu1PffexaFmAGC9Uxa3tzPZAZX6iTAZGvahNRsrU5gJbRhMfKRv2NnuqpebGDCW7",
  "key17": "4tdVNvdHniXgybwyrK79kK4UQcTChZjRApjNkRdbsSBm7TriZp34qoXpQX6fxdGnjLZKb81NAQQicCJ2MuEGKSaM",
  "key18": "21HspHrvkh23FPTKSnn1xCMMizyK6uURHGN6eDdVZNmtDYQpeNGACo4FRMqnp3zhaY3J34AGhvScSgj2oVFCCXwA",
  "key19": "27pVP13DfuhTeCd17RRN4iWDMF4ykHUunkYVEPzTdMKuxHXJotci2hfutGKZL63UWemEtqPXQhjZow7QUvCoYdeW",
  "key20": "4TsetogwD1oBMVGnucKo7pv5DrZbLukCNhZ4TVjS4t2tHTBRauzzBJes1GCV1neDsdb3MwyCC5zA2BSu2QNMSNhr",
  "key21": "4g3p6rDGmwz6UkNnwx5JhA54ZnS5QXZK6CVBxKdQHH2Dafp3M1Jxn1xormucj6tNqL4pG8LW5LkAZwTiAihrfuui",
  "key22": "3DmTN23eG5ccsTkDgwVyYVA2uv9hZs4mdkbyTkJpK34MttULL9ynKespQ8punNvDYschNGd2RGg4TJ9m4SakDV9M",
  "key23": "5RK6mFLDpWw9tySxfsE4TPR9qezLW4zjHMxN6LEf8piiKf6mYWcMgTTWH9iyLEfeRB8PwP8b8bQxa9RU83yQPBZj",
  "key24": "3gpXytzUog1RDGFFsMxoCSqgCifVgH2YTcPW9e33STWHanHpovp9Z8AD9As7B6rFGegXQ3YfHaUWFk4N1GpnvNML",
  "key25": "2JdD8ZTMK2xZjzw91JRwcAUQMCeqHLyiPEpSqzwEzRVWN4eYRMiQSJC1qoVpWtmTryELcQY8aV8fktayDN28ZtA7",
  "key26": "4gqLe2ko9XYwd4QbqzU5LedkcC5B2joZLqCe2jnx6egcwx8CURDZe6Kt42QxU1CNJrpuHuBonPFAFNqaEKdqRgMk",
  "key27": "24xZWkzwekGjs6g6pqSS6frDXboaeZjLej2cf7UXTHnyRL3Pe6itLrszf24e5wSYWgg6fQpPppHFsgrotXSNwBKq",
  "key28": "4F6sQunVBcL7CsXddrSjGNTSpVZ3X7aNzfoCuLZYp8i8F2inVjgAXfALfzZDSSgqsHDJn36n94ryDK9cpRBkkGmY",
  "key29": "356VWBrpoF3rydeVGhQvhYTvS91y3STvnJiKuM1n6sP5srdwWrUDgjc6xwniJ6povKxFzmwJy63UV5VMQC4VHXDn",
  "key30": "5RQVQHA8YCki4ZLSvRep5XfdvHPMc98qBSgKiUJLEWTpuqFbQfdHvoUoagjkZaKF162gbGQbqCMAKjxuqozakHf5"
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
