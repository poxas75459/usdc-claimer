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
    "3YUd2K3WQJyaEFUZoTiy2Nd18A8kAEtpR2gKxggUe7kD3rEfgbPyG7ds2EMw9JyFoSQCRBAMQRwSqpqQPBcwjqaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdatC3q3XH8A3fVUJe8P8eAozWNsqg8DqPYMc5eQUsFmfxzfFqZyC4HJ2QmvEiPznqqbo6PRmWsSPwerTvVLRi7",
  "key1": "4eei11HADq6pfHBTJo356vPjZH9Yp9jt7HRvbKSd78xDAT8HGZeWz9p2gQHQCkwQiWnYqeFYmCkVnC4W9NG7ksp8",
  "key2": "5Z5xp1YgVqMoorJtYTLiG2pUqq13QijG64TMMGdPTeh5WXaerSPtxyTujJaSJ89UZ3qvvWXfKhuBCuQd1BUDmQyB",
  "key3": "i1bgiW32G42Vvrxji2MvBw6EJTbhWNhx8jLFYUje2kw48HjSfYWtqU4H6NRxwwCqQdvGRqW75oJ9vDaa5fB5FMV",
  "key4": "VQcLnkCukkZbuxD5akHY4VULgGaAa41euATFP9AjgUYXGN2nRja9uzmCihxLA8mjDxrG64WwYjtFpxvyaeJ19VK",
  "key5": "8s8y1zUuU3eWTjKXJEEY8DYoeF3hoamP6qkhygFx2cAZaZpd5pd1rP1HT4AQDFgukuBBBC1jF86DqHvnqD551bw",
  "key6": "3Qr8Yo7FvmRpxicJZGCNXiRASojMHkHZPm6dCPRWSDWxkfMe3Cih1RiVWtVV19BXBC6ETBz4LuyP5FqDpcWZmysy",
  "key7": "5oY1jub2miVzxnS5BfX5sw58wDEzf1Wi7BdY8wpugUKu79UDzxDNQb6fd2A2BrNSFgQM3itY8zwiMLy9trRLcNVm",
  "key8": "5DiG74FWWPT8oQ2cgZkLWpXTB8QwpUfnCg1bqTK54v9HUKA9ts2oQWeaeKRDU5Gk5oResiihEXugCGX4qqV4L7xz",
  "key9": "2Voiwi6vrYfgdq4VfgvwMuiJcn76JvrYzkA9fXspkK4DdMUFSVNrYddLFLmR9XnoYa2R6NFq7dBs9Dt8z6AqQMih",
  "key10": "gKPoQbX1Wh6ZNAUN9rai8rv6LnuPAKNTqmkvvQApZp6CaCn5ewSSqkcRzSDRoY8UaXRy9diHFi1okEwF6YyemTi",
  "key11": "2udfDieF8pb1fmQayBxTEL6KpzrwTdDaj3HEqioMH5SoSkUTbq91h4qW23JMYVXPdLrE66MEgDVWbNY1bqyFT3mi",
  "key12": "31MFKWt6NUbmr5EGey98KzeKv8hT2yH58UtHTyqTY41HeHVCTFFww2u8XXEse49aLGQCdKKa1bf6mqbpS1TJbdN8",
  "key13": "5sb9U85cJkdbvw6fLyFDT53BbQry5GUz55oueqSNyo7U2JWSjCVtTm9AqHkz1Z7UtmqH2dX7ubWw2UeENgiQpAmb",
  "key14": "2eKdKoyE29YmP6S6w2FHEEdvKyZCPiKHqSgKjNsAdKPiKW38SWr9Yh2sr69dLT7F7E5pDTd3wxMw5PoJm5oF9Bbk",
  "key15": "3CXT9D4duWyDFSdYV1JBZf8mqnZEiLQkQXYnCyieBTjHoiXh2Jh39antoWWFf1SbLP5sdwRtvV8WdqakDowCH7cu",
  "key16": "uSzQRPzEny5Z5PvQcSFtXKGL4h7e2z8QvqVKFGAQJPvejwuuMAkBLXZnrsqARiSA15L7wruqus4MRpu4irv5sZA",
  "key17": "4kL4ByACdB68WXHnwnhRYnxDfX55y4ZmjR5zeiv48AbZptDVfKA1MyLToqMEUbahc3GeEP31H1Rq3bBX4JcQhqa",
  "key18": "4oCu9YoKbL9545RB7MX3Jigs24jNHQsmFeyVKxuNwJqQuWqsLHzgB83DpELwR9joDUGMSpj7UBG3VvXXYDzdZu5F",
  "key19": "3A3TxioM9erFUBXVkoSCePgU8F7jXRUF7tpCSuMEzTtW6SGsafiZa3BwmJoWLFmvw2B6f4kRqWPDt5UWHvdbJ5Lx",
  "key20": "4EZMbKcCSkhUMsaBFvjPAUTwHedE9W7MYDtmnyDW8ynVAP1Ys5q3BTQxm9TVSpZqqKcNSfUCqK1HFwjpRixyW37p",
  "key21": "2NQmfErpnh61ZicT5saDmPA6YinW73vGQJ7yh981jhtAnuK2JnZ2HNN29GtK2dxVJkmPBN3g5eF89E9B1s5BZEi9",
  "key22": "28UuRmecXJZxeMciVS1zQDcsykgpdhgok5pyMzkJbaG3kmJCarfTXwJMp9kC1PUZDmUzKeAkZLsjmHGSBL6pxeps",
  "key23": "218UseWKLeFTfESRzLBhRpK557b6n3ZJadxz1UYLCKrutrWGXWHbSvVfdkKbGrYCCHT6NcUkQsWJM8T4nax2G4ZW",
  "key24": "29ypk3GpTxUyzMn7hkhLB2jidxJqsJBytpApfNcJXRVs2tsCzhq71B56KN87hvb9kbVKjgtMu9k1LPidj4hKdELQ",
  "key25": "4vc7VA11gBKRv3xk5Wic4P3WM4psH9z3qAkunhGuiHrPqsDJ8Az2yq8a6paNYyaTjQAyR1cpp1qb5Q4k6sdq4ocK",
  "key26": "5gckBEdo5Wk9iQHym6gcfEZeF7xsPfbvqHMDJiRD3QA87bZj4PcJQyJzzthsz1AKDdTTRK3JkgMYMB9jp7uFMNbe",
  "key27": "4LDsmbK8592Zhqr6UzNrn8xWrjU78ksS5BY5AoM1SZjf3JLkxKsWZuyvjpzY9Hg1yY9Z2n9xK3ZyrprHFEcZVk2D",
  "key28": "5SNwG5sepvR6rrccn3Cktd8JgZH8ub1bhGpEWwC8DAgr82yVrKJGzDhaTYjXAJdDokQZEvkx8JjiqFfZTthAr8BE",
  "key29": "NLGMPEEbW96F4M7djCdM4uyU4gysiDWKeUn9j1EJKHwfUyaVnnYTXUqhV7aztqKWYwpqzdPWzno8QREE4QxUpQ9",
  "key30": "5fiMeMzEfAd9qhiZsWcxk51CJit3u9nZMAQ3zZEqqMTfEGST1AHZHmCh9Uiuet1v6i8zSru57a9FtLeMEzAHoVcV",
  "key31": "24v7rm3Ghh4zikrtQ73AzoyKFnz8TSbc1KnxKJKeomUQWzvc6QqSoj5kH5KLiisLph1woVJrrkBAnQbDxWCrpYkP",
  "key32": "3SQ3QeSKwEqrYLKW2cPdveAvWSBAzp3hrRKGB7sWTokiDdqATDH52XUPcHoAxKzATVBtQjpiV6TJGFPufXv2JzgN",
  "key33": "4QU6bp1cymLbmNmmCvBBaE4ynKp1b8JhtNRwauBfeY1A7xfgpwiomnmx3LBFh1dVjqnTxGNEuJ2KwCAjj7yK5ijx",
  "key34": "2rJ8CqyXwGbuurChZEn1bNL2CDDEBpZokV4HtNWdDJXmFHixYvucAwmMMkHr1j62qACURTxCGbWWRTGvfxwwaGuC",
  "key35": "5ocSNUGcnwFhYdGu1mKtPZD1dBjXpZEfzkufyeGsan964KqFiv36Smo15nG9C7f7TuFibyc2vDUovMMqSaiKwonj",
  "key36": "3mzmqBT9tKKCqm7kN6YEhJwMhvDqBwyTtadZiT8zE9wFwHTfdX44ksPKE5ZS3LwpL57o1YuXNw9PoJ2yWwznJiDX",
  "key37": "a7dVryFYGN5SbYdWY2EZtgT3jLXX44j5sxtCwMoZKSACohh3RwBp8dbnGW6kJSbrbmsG9geiuZk1eZtiJqAFSKn",
  "key38": "2d6p8dxeYb1tFvQhKFYGjEfkhYQamE5SKnFNe5yGPLh5AvxkWuQqHSXsQs2iT4dkTaxMfWVDeXvL7SXKorSf7rLz",
  "key39": "LBHDdsnCaeFpvvfuupMQzAm9pMNktbToqt2Vih7PcGkRy36yQQ1cTyiHCDSBpvPg6FnuSFqN7zedQ2PQpRNzLmU"
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
