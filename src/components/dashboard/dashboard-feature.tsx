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
    "3Z7CxujwdPTYeW8DL8ZAhrMHsYQGxXU2AzXMmr2gDVe2L9fngrddThoF6DTR78k3cjwsuxtqiNQQdyC3tiHCTJ4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8aZje9UNJs92ytxNAXavG5dmmncDUUpHfKNcXRZqjYLcZxayrJoeefF4pR6QsUSN5wCYghpWvD1sLN25HhczrJ",
  "key1": "GfsPzktJNKRTGf4TtoDnvmggXLkt35SCaBiE6xYp2Jm2pL3rosWz85rGRa7roskJQgxDWZQ4YsumUQfS9ezUhJg",
  "key2": "2ugdLFV9ymiHZ7PeuN9FPZj1gCBJGVruZfEfqT7CdxoRKBNqwS13m7c7j7sHEsM5SmS18wmG5zwRdVqAgypoJoCe",
  "key3": "2RzFNqAYLcFU16PihuJrpq3kcm3Hhi65Rp8e7weL39xNrsG5yfNeJFGbDmUT6egYMcQkhSGMZbNDMZ1KxheAP8tM",
  "key4": "4SUCt3VHW9hCVH4mqbYLWQgcf3MYsHDYfChX6d392PKb4vu1oqwqyndVj12sDeeNgVpgNwXQRqD4zZHJVCkFYny3",
  "key5": "4hCGqemwRKkwuLKzfdSVShc93QgwYf7kng2znzE5zWF8U96tBnPJwYHpGyrYeskDifZYEuxaDCZmfY7v6n1t2aCG",
  "key6": "H4jEyn6GMimT9Pae9e9utxDCT74wK5SB5i97wwnN8AzQRRLgcFWXTEPH6EFdJ2ejZvzyhFRZ1BTiVjegWKB2GHx",
  "key7": "4FAxAZ35d37qpktXTRfk4odkoUHSgLUVdpyGoMcSfjSuxJv2xAVVzxG9dutqt7f8q3iSQhgm1bjKkaiRAh5AfuvB",
  "key8": "2q1EjLH6KADwaMeZZ2mV4btwe1Vh1tGUQDcqpQ5cFuuba6u72easGjSdtWCi5Z7pPTLW7Nxy1wZQXzcDNgFtfT3F",
  "key9": "2i8NzKBqkFxEfH4AMaJhPjqZ78nrPjWAKCw9CzxuviWTLDBMHjiw8MHiHtoA4Gkm8NDptatzvfaaWUC3vYxQhCaE",
  "key10": "5JBSKJ9uossEeQQpXoKpk5D3p4brj7aKCz5gM2fikRgbjfV6HzF31D8Z9YmyQK1wQSHHonqeipeeNBxWSZRfMvAj",
  "key11": "5hTtAHST2E4wPkfjDU7fJNF8xYuJm7c5R9bWPd3mRSrPq3P61H2vDFEFPWrj88rx1yRFEQKJPpFj17XnY27EAP69",
  "key12": "5iHVshwxyzAHm75G77DUkzQCmKH5wxUzqNGpan8WV3YmoGejdBnJVv333Uob1kzpV5F2AdYfr9wcM6p4VpaFBonp",
  "key13": "AWGfA7F6EJtvxVMXWALYj5CjU4SxnQCRDDyGikX3VYZwd1TVb9zXvRZ8CZrNPp9jAkdcCcsxRdaXrDxaQPGxvpu",
  "key14": "fjdcNUkwcknnyPoT7Ufm2NzgJcrxyMo4AFLA393BRrvAH8ckunn89qNtfznmVD9eDcsJkX8zzWRGL76gSrQ7vAP",
  "key15": "3KunPVfBzmiaN2hRFnAqFrsyBZCNcqKZg7iNwUkm59ersy2xrUf6CcjCWev1JMkgKnYZB8mUMURgTCX3TYt2LKWZ",
  "key16": "3DewT9m3FBuDLXtD79K7RyL1LtkY1LT1G56rjAHh3ErNFx7hJGrqskeJRpdinzjJbCTuoTeHSA6eaHJJXj3w4Kkn",
  "key17": "62mEeX7XoCYwa4SS4GcYnBrRnEEWuGsWjiwiC9155RdcYta5EkjxTRotcjCzMXEgrwPMj4sCynZVGxhjKqG4E33j",
  "key18": "32gs9cmbhmJJyHj9oPu22B57os2y7JGXdv555NYtUoeyvMm5K7imfQADXipBysyyr9JsLPc8MSbzeMcgSnshvs9E",
  "key19": "5aTvpKWWUp5ovLsC2zNVnjcD43XnoTPPgVDy73aGUEfPRtbfJaSYkvRpwrKXGBLA5v9NQSeN64qyGouiRrgVzCZ8",
  "key20": "3boaBLZGjHZ1Cei8Bxj2nfowN5vGJexJ9iM3cxizXJpLh8FZ1u829GYokEqrhvWX1wmSZG3XpbrkHnbJzSXpstw5",
  "key21": "4Wj7qJNgz8B7gTb9KWweSXXGXmCoqWQLjUipJiioYXE4nBEJmSD2eBsBV5KQyYy7ywZ2zhLbjnrDKi9Ftd8BCMZa",
  "key22": "4GZ5WdGKPHTnFZH2RmKBNQYqMKVdStKjXezSXrvWXaPGjPLzxvEpPB3XsFoNZbjFJXmMetXDg7bkktstFBvzBvZY",
  "key23": "Wbq6YR9kTrTcJh4RuzVP86c9ZcWAvcvJAu2hqS1hGh1MhEcUD1vEBh4uPrPaoHLus3ZC59A5YoPHwWDt8j1NYba",
  "key24": "3kr4VLJ3niHSh4qxZKj84sbSnNaFciCxhifoe9EEc4U1brTz2VKSL5XbbXFTNRdgLQJzKgV9Ur9458kBQrcxUeoq",
  "key25": "4zuRy6AtmhJSiZ7twpuBu8ALX2WpzHfJG7w72foWZWkzeKkUZ8pu8XsvUdxGxQKgg4VmTgBHNys2EDGnoMaw1k2M",
  "key26": "2WZo9ZLdiMofPfWt78cwMghQ7bqhNbRNLgVtio3NodRCugowWt7qh4uWXBqtD5NkKH2pEEYJGP1TLq1htoXMsNnM",
  "key27": "3BJatWieu4iKwfa14bUKgxsKRTHQTLL3kAH34PZokj3vw4rzC3b59sAHjJDYfVFDT282VbDfuQHHpLDzRjJvk1st",
  "key28": "3ugGVXkqXNNU6ijqjnBcGLtQvw3qGdhBW3rc3rpqeeFpJJcWZ937bL2hCZP7A1TLm2vvxYfp4fktYcWKYcwnKQRg",
  "key29": "4A84a9Jssz7C2CiYhRu56naPGvtKfkP4jjL2Js3GjGfATvPWLL3T8o8akbs2oRkvz6tGYm4rybC9yXfmBaAxUAY4",
  "key30": "pZSCmrxyBb7Ky9BnBio9soKyYVRGXj3SggMJFCvnYHnUyhFV5zPPy6wiBPznjTrUFfm9xQfwrMbMgB8Ag5419PK",
  "key31": "3dN6Qk99Buey3jtZFdVjrbbS9QnBotDTDApiBhAyEdYB9mwfsHfSQhtBffwu1cDCAe5xWrZVkhuFyHcCtxL2bDUe",
  "key32": "3VFte9StR2AiyWPy7FqvGTc6qrLa9TnALLL3Rnqvqgmiv3HwBryp5FzuAoxt2tzFHXoXrtoCc1e6Rfm4V3rd5UEL",
  "key33": "3ugFCq6W2qGVTz2YdnfLj8nLaFCo9QYh7rCNgergU1mcfmXzAeKBu5DvwWv3hq493dZtoPqeFUcSrtHNy5sdUmE8",
  "key34": "4YuQy74NyTVQTfJbPqYUZcNJPifwq27N5tgSBVXeV6EgFwpvxYji7PFFuVYSEKJw5LHDJiyN4z24NvHBqVff7mit",
  "key35": "3xcg2ahCNRNAdTLw2NnBtLBuZsKJBQ4n4KkbBVStvkykrZV6eJrBiEcBJNY6EZ2qnLEm8cbps7E8WKNx82J8bLxM",
  "key36": "28MLb4eK1mZsSE6qqMz6HCd34YEEv7XqpZKUW4F8eeUMn5wBxDavona9BUd9eCe8CUvKbf26jU3ybLHgrJfM1LRN",
  "key37": "4uV6wPkpZ55Wxc2ZJF2jopRNfAevz9BZ4jVV1NRGrjhjyKxCA2uKWF9mCg744NWik1NY2jASRt2vJKYjKQj19dVw",
  "key38": "61Rp3u7J4rj5AbHR93XZtv8BSFBqk9xMgFzQoLd5EuubS6vswipW1GeDUNw87cSieDHkWTtqjsemQaXBFfk9nyQJ",
  "key39": "dx7qUFED7PZv7BHvihSvfQ5ds5jzXfyaPSpwpJDKQXEf7P9sziZ4bz7YghRQ8QwSokkhn9WH5dUWvqL14Sn8ayB",
  "key40": "2bE29XBn2vPdFZdF67WdaFBGabYyuftZ9UwCxJMiinfVkodxgNj7bzrn4TFNLvbxixQbL9hVBfJmKnGG5C7ybifo",
  "key41": "25jNFXmdaSmArEDQZCJDn8r6GLTG4DYJhfPxFHyfD42dkqLQ2NJ4Ns8sQPxUUZFzJHbj5V7AcSJwv6AHPFSnxaLz",
  "key42": "3JUezVW3SvLY8oPu6F6R5tacJHwLZ7zHFcGpmyAMKHih6mzPQ7EaAVZ4kHtUqfrYxv6oqjabRE4vFzEFqVs2ieAD",
  "key43": "zR2WkiERysPw5cKTiVsD3XAWonuK7jTPjg8ux9BgS2zvCwQUkPqEzDNeEUt6hwY56L4LiyQH3yHMMth7zUR5h5R",
  "key44": "63iXKzuYWeREc5uJ4sR2cSaLJCarosckNURRaHTeTFMyBpXV9w3BdxwF73DPfeB4xJshVCbn212siDC5NnfbPK4X",
  "key45": "5xyGtFhfs1tjzVxfso3eeASLFmfkQfjkgk5tad59EEPwReMDtyWnraoiBHQhmwJTumf6LaZMaYvaLZiDGNjuTYS3",
  "key46": "3cydukMHYEgce2nJCopsKkbxbCmZRiq2FTBGCYfxaYPqU4cGZXUFN4j5MiqZNap1oZivv2Gecm9V8CJHunh1HXE6",
  "key47": "32fEhehHzJueeF83wTX4SL2tBYreCQxv9WFT5CB2NZiJJomn3UEBpQHQvnwvnYdShNqNCagAdVAVguF37dehG1cE"
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
