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
    "2LmSk7ZUgxR741XQaBgwq71sn3nXZKULVffPg4WQPSAdVrGX487wE7wdMdZ4SBfpZyBjtq2KaM8PQs6fAbUCjMov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235drFGXd8vzpxGEfspW8Y2CxQJmmJmLRy5xUS7EYF7df4i1Q8t3Fpe84NCffVZiQyHdu7ZQEgCNMz5SwP9hZxvH",
  "key1": "39QD7wRL2BtzbZGJB7aHY4aogaNp2picVs1Ui5Yzb5ukpPRvnK9p7hPJsS2THp2ZaTcVbF1VjHjEWeYF1btVfjf6",
  "key2": "48qezSBowhnQD82gYLYp9aWTMaWx5pLh6BqJgHDokyzEtABq6b7U63tgawvH6T3yZfiGCzDLbv85a2idh5Jge6jL",
  "key3": "5KN8FghJ23MDK5RmaFmYqTSEz8CQVZS1WRFyQ8wsHFCPW227UNF44AZ5V7Vn4EmhLGhL9nGVfGsLLUQhysdRP8qn",
  "key4": "3jnQ2g3stbC7ERAgqznyU7gtYYu8XxJjbYopTTXFePyjmg2KFFcGXa78bKsD8UrFZJruRKUqbzCo1yRLnqUM6diQ",
  "key5": "McUnbXxCW7CaDGsQ9DBXB3bH84Ut2MLjx5uk2Qh8sFc8nSiK38AmrzQtQfbgcv2APzXqqnFrcpCH1UZBKnx4pmB",
  "key6": "3WU8e4ysJCTGjoAcCnpEkdwg8K1TUe9ydUfPTGxm4L3jzyrp6nSUr1r2XViSr1RAN2aoV3VnuTnAT1aTk5JL5W29",
  "key7": "MPrAPB6fr5K2CYJffi7hdfJJDU9yFuFEyUDbF97AHBbxQZ3rwKH6pJcdsp3qNRsJMoDvPfEHyhhmJyHjjrQ8NkM",
  "key8": "3M7Yy9SeFZq6vshQBn1979rjqxfS4PXnJDk935ySquUGYD1GRiRRgfCRm5cg5bQ1r1qYVUZ2i8gAUMRfD67x4z5z",
  "key9": "38uxkFNJwRVAL6LUoNw8VSEXYxDBzi6Hsdfd134beFfqkcQTfFUWFCRHNtxmgzxJhvBS8oLKydoTaR8tz2ZGRkxR",
  "key10": "5oyGjVhsBgf2Q9zMmbpMkT9Tkyxj8tMqLkYMWVPFCMSY8VymhxUqcC7o4HttQR8SWdWZbiNrsZgNvgJM2XbTx9Wu",
  "key11": "3CKQJsUYuUxbUATWTh56Qdvhf7go3m7oFDzSSYSzP8waGu3eDYa5weBw9mPRU3kQqUuHHTNSs2Zdyv8tVLvziEUb",
  "key12": "414vrswmu3tU6GzuVNWiqwzoEXLMEHMUuDEo1tRovtZcPpFWexhpqnaDucJ72fM5RymdkcyyaLosm65syAq5qksH",
  "key13": "2k4Vc4ZA1HxYXDT3hztdnvASLKhByLznEyfH66mR6UNqP58evnAKUTzbyHPHi3iyrWzhp7cQ24vcdSTAtWunZwZ8",
  "key14": "3JwB61yXz8bsREHDBs1okDZaXmcnHF1SdYcCsadqg64RmP8yhUTwAbAkaFat8B1yPBHZqzPoiBMHd1E1YQgrhSd1",
  "key15": "26D3WX1RcZBMb6vA8mage8fUGoYRx2kZ8t4ZXtXdvq77F17H7cMt9mRvpSKafbWePNoTCjfosJcpP2cJvPJUnnGZ",
  "key16": "p8FjZS6mP4jCam5yA8uY88mNaKZDs6Yzh2Nd7FCaRXCq7BELwZMSxaD17bBUJRNFDjK9ZEtYz1XXHgLJvhdDopB",
  "key17": "2fm9W74JsyM34z8tyKTccDMiWyk3av7FX33DF8m8TmsYxGgb8w7AKazPYhWajLrcHxPM5YUPkr7gBqsfPi6DH8mp",
  "key18": "3TaPxT5V1xRXJ9FK1SzhWbsHheUjsvoapi83w3f7fWCDiWqq4upWKtGnB53dybY4Wmd3d54uNRQAGgsbkMfUbeNv",
  "key19": "hLMwU31FCCu4RhvEPkfTqVcWuEjMeLhyxnmmGpi8djF1jA6siPmRXqhsbP4iw1cryMydjxhMuWmFS7nad9t323B",
  "key20": "4qStqCmR3Cv5wQX2ovdHqgCDYupyWSxXvq6xBxRE2NjSZ48V4c7g524Emij929SUBECzsjXyhUkEpweM2XBC6oee",
  "key21": "4qZ3DyZAsprSgg1rPnedZfgHHD3RZs2ivoX8uLL5rxKijskFfhcpzqHX33Po3rHSpArxR1TUp36GmWsKoL2LQ6os",
  "key22": "3xxSKouuAjt73VEqgECCtX8hkgMzy51Fb4ufp27KLn6xYNfpMGSHQACiXNZQNh1VM3tVTdzAPmu53aSfSdBtcKaX",
  "key23": "3jJWkXr6tUevwtQpry44d5ZrC3B2fxEkF1y6mJmPwUxwyaicBQPSMXeypizwnv4s2n8QKfaQ8dw5wVWmwht3Qng",
  "key24": "58wEj6xz2S59UTgRattNKicqC2edWqBtfU1JUUgiv6aw9FEN91zAsiY5EiU3jauSrzizUstmYoaBdfmygwyK191f",
  "key25": "3p6jjgn961xL17aJ5HSXZftNqbdFLqBAheqC9RShapdhVNxKkF8si6baYcyz1sggkrd17XXTZ6SYk3v4SfG1xmqf",
  "key26": "ULvqLbsgn1KtWhPpLQzxABcJpo48dVLnXD3cSbZBhA9PFar99DPknzSnASkcHYopaZeD8cYP32CjtbyU8fhwQnR",
  "key27": "21uyYuQJUJPkc7GdqnwLYPxK6HQJUXrzZj96peiaJgWznNK8MCPUkB2ARtQTeRTnGPvayBsSC9fThfBigQjgMGGa",
  "key28": "62TV4pAC6TRqjJmbRbqfSdBVmE3Z8vqG7oUUeDNbQfJUNxJgdegFdkHYNhvyx7UxNzSiyCPdUZGZWctPWEGVnnUw",
  "key29": "5SYm2ZKBRZKXC7RSM3TJrwukXV3dkWjDb9mqq5FFwFjYeQxHGPQgtAUbmhC8Ztqy6Ra8AXsKk1aa76sqkwc5U14m",
  "key30": "647FwjTuYw98wsJeQ1it9QzXXigUSt5DJe3Hz67RqTgwkKA9MVbY52K2FPccG53FkMGJtf4KBPs9fVg8QWDrsQ67",
  "key31": "37wBhWSzYyUKyp1DLMTuqQPecah136psHDzfTQ1xrmjgdRSNCUY4Toic68qnZqp1gkpUMqWwHELEC6cBndXkdF7C",
  "key32": "57irSLt4s4BrRDufyQmZhpPwqkoq7qrJSuQ92g71Naq4ZrvE3WdwqJ8iCBWHDEQPS1W5gGjpe864VjpVuK5ViAma",
  "key33": "2qXnppC3B1g4N2Uv9xnqcxP47gYNCHaEovKvx1uhB6S4GGmNqiwHjvRBYrBaBHcNuvNrLZsphJaBhb6VYNymSobd",
  "key34": "35sLVSYx6urTPBjsKzvtWkjBEyRthV72HVUPNapjgzvirNKe8pKbUj7cH65S4dyU3MVWmHXFPZ5kgfZ8vuamcs5b",
  "key35": "3LwEm9gmAyPVtNzhRv3W23sQATLUTHwuRBSYz1cL7of6Xd5HUrJ7a8LthA1spDU7nmci3vPqPFJWeTGCDTP9ayaG",
  "key36": "39kgEcUw1WAjRQUVzHWwq1Ha6LT6FUKL5cntJM2zL6PsoifZxRxrLvUynH87vFGSNJvHWrGqyR3Sfj5gMZt6tExB",
  "key37": "fruiw2xQHM1694CNCDK8YndRfX8mWNJdjNvSGHvvrrV82Q4Wcudxu1kRYoJTJ5mmBSKJsJmEpgqZx7NYVijNs7H",
  "key38": "4fdW8bSWB5rd3v4DLYegp3PnhmBx9y3ZokdARVvrRebDMK74cJRfPHjpZhC4L3BLvgeffdHVjUdCQGpVeyJqW9s5",
  "key39": "2qYGQ6mGPxproNHBwx9hx1dGWEBaLnDWff8nKqHB7oSxYR6qMVptdtqtkr2FAGVatWnDSnXxkRAzMqsQg4S2aMxz",
  "key40": "487VyFQM43J8aYga5FbXQmWv4wodbJAoV14AEcjBm7zx3RfCvnpHJGihqi2dZM7EGx5VJqiTcpeCUAaYMpQnCRAc",
  "key41": "5vQ5wzDAqmNx7tDa1QEjW2MtbPJd2PfYTKwdZNqku7Qvrz1kGf7RMpFujexgXBGsZGpDQZbtcP6aS7dCe7R4ceua",
  "key42": "2bvHE3NjB1StEmTLhrtxWFxWLU81xtp2NMLHmBPw6c5LmFKW1s2xpCTnf8yMJCqJWD85CBeWjjpJE7sF9JiP5NuB",
  "key43": "5vKxoonq8JTdNeRUZAj9xL7F7eEbrnccysewc8kQ2nZoxKyE3kQD7xxmtQYhnqLn3WgK4CkQ64GGh59qCh3XsSoZ",
  "key44": "3wWZaavRN6KZk4MxGvBstFLXggACGfMgfsmV5pyWy2yePsZHecY6H8psQW1oJbDAE2aadrEC9oGVJZs9uSE2fSu1",
  "key45": "EKxcBkxQzMJkw2K2HeMXxnoptBM1ZgPwJRCfWiKpkm3wHYrBJ8xft6kouscQMsSexdBkaC5tUmacfLGCrZSyX21",
  "key46": "SLwzEU9h5tdKciA81rD2zjfJHoJkCvzBNXbPX3Ao5imKTQhdSGayE5pbSgKQGGPePmLY6WapGgML8CvniJqcskB",
  "key47": "48SkS8HcTH86nuBFacTy1urP3RJYe7NC1NMepecZPPKmnksgjfJfniwEArsHVvp2zUBAJUNCeAt5GnjgcnkgY9uh",
  "key48": "QPzQrMFdJZ9KysDaNN8V5XboCkyhuhRVWF21jDV7komUVcr3pix7MMmg7NBBErC6QiBe2RnjTQRdth1jZ6QC5Ad",
  "key49": "2bUnHSUj2qMMqBM5stP4AZFAFsSWxo4UDBmFYpKGS5p26bsEYUAi9iNxL4g87zd5WjxqUdDxPJiGys54jJfC2Nci"
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
