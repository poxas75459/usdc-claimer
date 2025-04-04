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
    "3N2pgpFdZu7XLCjeyhobP8YQHrC4HUJLDHH4iRJ8oLWiF9ePu1iW9HvKH4aqA6ERyG78Ch74cqZnYwQr5NQbngws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sEU3UFFEGSVsVtxpAcYg9qiBEu1TgSajCQdZvxrRELxMySuoepCH5Xm2tJt7gsPYtKxfPjZVu2MXha6ABkehnn8",
  "key1": "2Z79R3yMxWLYzJwX9dVZ18bHYWpYUVaufAjFfLTsNEHUEpLW6MRVgu8Khxs7wYqva7Exf9JCSs2GZMWyHHCJgbMQ",
  "key2": "4B5dPKLkXEq93BwiChxX5hqXA43Tm65AuwVMW2UVaGTCsw8BYpWz7yzDpHhxgMZ2z2dCR9K9i8r6Ld77Px26iHnn",
  "key3": "3UpCYKmrZ5j2HWYwNt9M6oFmLB21kPwYUjezzdVh1Bnag3aYDcadJu4yPkRmF9YN74bpVv6wzmATA9ncJ153uAF8",
  "key4": "2TDuAXLPgcxEeg313NZkGLgyi9EghBRgpKM9w9DgvVX1VsPAuyXUPeKgFvfLWB4UK2YGt36EJA5PdY7PGHQEe9LJ",
  "key5": "4jAPbGiW2iPJAjtkWwxt9XXFeWKFetJnFFt2WFiaT1iMcQwTCj6NSMpJPPT9iCGcFpJEHDzUXu21jiMzJtoMJeLP",
  "key6": "2sHL7rwrcMyqMhtcZEikDMMnYsRbqMpNPtXUW4UVWXFwf6VyoysNg1R5hxyWSsGrzH3Qg7UE55V4undBDC1JyA3v",
  "key7": "4sK293mgrnoiGYZFvJmGZu3yVLUDbamTDBwCKzbqsxRcgxRx3Jy7P13ePvWDesE7j2wE1bKDYBUqKoKiy1Z3dUj",
  "key8": "35tppJWVFAqRqgmJSCLJX7UjpBgW8cEqFziWN5vhMLXZo77MDeEHxGiXgqkyCReDQeddzkcJmrJubfwMapJkMkyY",
  "key9": "3SUCZKc1Bv7UcFYzkf7Kr8vKrzy9azfFatxoriVxGNzberhsUcWe8HxY8RUV64Bu4f1yEVkeHz5qMCgqWgdRqLxi",
  "key10": "4mnPvb9dkpNfZedtMRV8QM4P3oPXhUU9zdsAiLfrqJncruxPoTe7kj7FuNJSrFjLN5jUUCUeJSHCbxRNtFCtCCfs",
  "key11": "4Xin4x2WU8ZzGnmPM2fxCHBLCz4uQPt9uZSLYyDsoJBpbkroadjp2Qw8krJNrzbWB8dSyE81cM7yZ7Vwev7BgQEh",
  "key12": "2xKxwR73RhbxbS3LYXf9eXT51djjNwSQFL6T56VXNedyVKYoMkTGQj5Eeg6DJuvBWvSRqAd8bYwJiidMxLDha9D5",
  "key13": "5nghLyUmrci9UDLjGqjjcStc3DU6aFSAF4RHSzKoL6xNRhWVh5B49UeTBSW2mV7FQi6rYJTUbcKGGeX1dF4iVWMv",
  "key14": "2viZovxbM1vDGhxvUhtxWAUCzTdGchVFS36mYxpE1W7WZvkWgkJriKkj1FDdiHvhgADWTFQcV8eD7aGJ6dVXd6yb",
  "key15": "4ADuQDPHF6YjmQY72Xq941k313p32TPWUrmbmqhtm7KPfNfL8Xh3jPp9tXZvNXpPDmmQEtbQaEWvcwKJVGwCNH9c",
  "key16": "ihtmEKwYXsfToJwHhuW6Kasidtah4TVfEdShrdiCNocyLTtWGB6TimE811Ubepip4qTPCo2To9EG6QkPePHYdjr",
  "key17": "zVc2zMUCWTVNo5PzNzPUqFGPGBjrX9xzMVjQD3fSNpBCjneNBeQbVi1Zr5WXM3RDcQ84hCSq4mJf8WZS2kaipca",
  "key18": "32ZJL2ZD6mP3s9XLg2R9bmGwks4o7szG9qdnTdvtkz4a1ZgCEWqjXHp3Zqo3riUDBvGfa1bv4bUsGvZLrWUkQJ5k",
  "key19": "2pCJxxpwwr15u4yjc5C4MU7QYBDLFmGnwLyMX4EivNgYsv7voMotqmR4rjUdaQTfzpEq7mX4sgAd6m9viKoEhAay",
  "key20": "59BgttAcunobt1A4wy2qPfEf18D23XZfJuMsN4pTycvv1V3F1pgSpRXSJW5gz73zSTtZsHWH6C4tRBueSK7X8RXc",
  "key21": "5Qy7CRdXV7dMFXt7tiUEHNc9nAsSYzdTmF2BEuR8VjsXphLceuQRxeZH9naf16eNKqh19VNJsao4q9oSNTSZz9H2",
  "key22": "vDy9mHND9wewx2NmSubt8BitutXPXuuSToTeTayQmQiMWpEd9yRAcJnX1mHapuTebKxYP5BeZQnaqi57JZ8WE9S",
  "key23": "4QgWrLda6doMRVGrWYoYR2eNJNfcF3gM1tfasntbHDWLDreZd7rMoPcn6AZCSw4EAikcYwoD5VcChGhZSUkR431U",
  "key24": "5GVJKQyEqLzsiNc5p9Zw13HtAHzxNGG8ct4MECDq8aBauKgnz3TEFZ4Ws399PBBgwp2zBxaZR8bbs7Te4b9Qe66W",
  "key25": "2mhwbyxQ9btXGwRngtcAQmBXKX6HrMQfi5eKMnbc12yVTShzHVLzhnnToZYCzZJVBNBnsksQCeFunKT6Q2aN2YQK",
  "key26": "5BmbQ6gkU4i5ZUKpgigA1k2yPMtMrWpx74jWjHa8JmVJDU88kKxssADy8T4ihwSKqPeApP6cWbJRz8wvPi2BRSd6",
  "key27": "63tAa16LCff64xxTkDjFfusLHZBDCiCKpoKaDHDrnzuHu6pV941t2B7udAVuC9bwEBBwxhyi31qbSPPssQypV52s",
  "key28": "BPMxpEXmnxU4tjAGnFNFQE3iw9TqVrfr6tyuLQsPsQyiYVbbZWiHYBuSK74cVdvGcBHEVzJEwBBwJ9urHsgkHfu",
  "key29": "4btRdL85ui4Hw3ekoT77zqeS4Xb8EbN2UZ9TvwAovRzbA4FtiSxxKn9D2nqXUiMQbK4nYVtYTUdnM2ywpojauMKx",
  "key30": "3V67xpDix3HT4avWHRSVmP6kpYoao7H4nYrKa4MnfhfZ2LFhLEoiiC5ZENdxXx1Pic9LnhBRpeWtCDgkUKR6uwQ3",
  "key31": "4hdnVyZEnzcXWiM75sFximgNvKyf4kQUtdMfT8Ay23Kz5yHB4YyLCtyffDUpqDbBFTwiourSjXRjc7zDArDV7527",
  "key32": "2EC1dVTEbTY7aLVLMjh7dgJcfVFhgap6pfTtyvSNmdtZtVWEUggAE6Pby3Ds642Z7CQpLxCnthqjqUzMMk9AL5fQ",
  "key33": "4Dwy3FrL9rxJEHCADpDQggVqMeZ7LrYXAeTJ4gUK3t25S9cVkYu5aEfvPffYmoUWJPSjWKfvHWFFr9qmtAQ6zyYU",
  "key34": "rFKXpxuMdDh8RAq5r7EorPPhadCyW1PHBD2HBUcXQmckFwmh6usFFoVhwpHtr58rhGZ83RtXhpo65mdbNmVPbj1",
  "key35": "2xdWEjFyZatjpJEQojYdnHYXvwawADH58FnvXRCywVLYvTBbfQSQB2ETE6niAz7DKuX1EKbyGj3oqDocEDU2iK9d",
  "key36": "2J3WWreFqgP4QtronrbosVGknxV2UJhdc71iRN2VeBxTx1qTYKRRS2m5cqx5txPRvPiaTmtWQn7h5vwbbSyyiZPv",
  "key37": "5X8ZM8CJLPYa5uPjT5NcXh4cdqar8bS6gxPS3WLpLnznv9EF3kMoDaMjVktz7AHNAf71k2iKohCNYUvW6grctkYU",
  "key38": "oyy29e6SjhbNroJ3Y5GmyS4RmnhggoUGtEm5eLGp8PRM7PGYdaHqCmZtAmPB88ekzNPE4XRdTTBFg3cUoJvPRZw",
  "key39": "3PDfPySPSeeKkM8sFAYGcUEzysyMJbXk8kNP3TSV7bCDu7TuDQD6A3tfyRfmpuNFKy1vLMywQej3FAdbksyL338",
  "key40": "5BeDvLiDfpatH52BEC7A7PA1rVih79ve7YrTJfbUWuRUqoZ2ko6JN7YckGjaoBH1regdm64dgZ33GHsaNPUZb6eV"
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
