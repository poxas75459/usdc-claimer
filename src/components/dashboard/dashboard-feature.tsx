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
    "4ExPSSdiP6UHDDS3mANm5QdBe9TQSYZGgmXPuTSfsW3rGydx2NpbjhrFKZ1a6GmmtVE75xy37wjE6A3TKap3n3ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ji5VmYNup33vjvihEo8wFu33X2JEsU5akFMB2UszXLokYnGvc4CsjtGEsPp9ksM779YNrnG6PWVE3NdYg6KxyQJ",
  "key1": "5wTVsJE7PyBsvLSL1s3dZgrBiMaABhmSBfySE8n1XRkAaY34M8hRbL1XB2c8a86t7K2pBbCzzKWNrWvPMd4ZgN2U",
  "key2": "2aMXFWVYNZnisMscgtKwKdePk2XESHdCAFyg5fvqxbSK3jnLUqQ6s3qc3hQqVSt6DJ3furB9fgX7cXBTpHaAbtfW",
  "key3": "4UA9YWKapd7bfsNkan3XsWwXU3pHZqxRLpagpdtfNb5NqWrJ6VHxHussBdE4xAorP3zuSH538AZB8x5fhTTd9GtT",
  "key4": "2W8tThM6nX3jW8FgBrNNw463Agbh1s6QALzv7nRrBZ7Z2985VvtUR5HYho2KeRSzAn6v4SwbUZsvDAhmFYSvpPC5",
  "key5": "mqD8ob5aR5fw3CsrD3DBQUVF6y8pBxwPtTMsUDyo5TPtGeMre1S1o11tScgQknvBkQBkHXoHXu35ZHU52qqssTS",
  "key6": "4n6h8XoqXznh1wMQErR6PUAVA8eNwEkCEJZks4nCoK9XoWJWY4PdwWmPcFsamgEfm6XwBARZptNPxRh8KXyPNzBf",
  "key7": "4CcVXve51msaeVsq53SPZGGdhJQpzwDgdLMsKgrkT9Xetx3YMSfZegd8iA6JQLbN7zi6XkyKyhvFDu8YdMZ4hznt",
  "key8": "2cf1pQVqRbQqwGZsxnsEUxZqrd49ki5Xaz3WJNeGebxAtqUmQhcX4naeFti46JVdTfGGUSgg2TjXKnubzMsd9mDB",
  "key9": "5SbL6pAptE5skwUEKuCg9ELLsbMmpeViGxKjCNwhQ972cqikFUjdtQtGNnRZ48K9Pt4UCdMSd4EaNYw2p6AdVhHV",
  "key10": "2EbRbjMcWBdxMquTvvpQFXUdeqx3BfQjfBLbmpds4GfcLDf2RvBtJunVKicMqk9LMqwLwN7xgkPmgB4DA72kMyYU",
  "key11": "2KTQAgthYnWiQ8wtBrHP1hhmRYqJxqCHSySwmhkwDJkEq5YvqCzABmSW7iySjdcLK65XFpkGnCrNYX5b8ALKvqVn",
  "key12": "4j4afUavtTCe9cBgP8ze8S5YPu92XaeQ5oc5RUHDKm4tGXecyHzw1vqHzmnyHPj3mZZF7s6Sp7B1dTM3WrtdmREG",
  "key13": "5r8UwcxBp9VdwSaP8Jq4JhGb97842zZjGxshxyEkFNxHryAUocHt9RHSQF2HqSVPhUFi2bDpaXrGxbFq7hUec2An",
  "key14": "4sGVyhA5UnfVL8PNtnnvya1yrYPToPgeN1ezwnabjfwmZwdtocQsrZNDBh9L4R6vHvb3f4CNP6w5UGov3g3sjyEh",
  "key15": "51FCs5ARRwyXCenA2BVJdKeorGf2Zgt4Q5UBm4Mrm5MgjdZz85jMemtvbmfLvKvqNXnFGpXc9797ttarMy9xygnK",
  "key16": "fGy85rrCTdaAFw7Dk9t5oDtqQzRA7Xs56NmqhEMUjvswFmVCw4BmC67agESEgTeTYXLMDNNyhpHetsHUiVpv32f",
  "key17": "5MxgoqayJboZkzuQCTwxbuN4M8RTsPdcV7UTRamYuf35HZNTjiU7MzEyTi3f5W5skZ7bbXf3ogaT3LFAxQcr99Sr",
  "key18": "5jGfP9HS9THbNZn9aFDDkSbP4FTHjv7mi3KJMJQt7jAixpveLTRiV2syKwwuoavm1eHWNwpen3eULA95ZFSUHHh3",
  "key19": "4fvUrKswP54tNqPqESCpcHqhFJHAkAyMyH3pPMyuUqFqr2oLoq5jYmrEZh8xRDuqLYY5zh1gBfUDkyjyMZG6nNx4",
  "key20": "3kHBZX5KYJnWpW9FYbiA4VZkHib69DiTw1vLJiWAvB7iuBzubss1uEbpjERMepuCJCzMqSa32udiiY6Fd81MKPQD",
  "key21": "2YPVsDA5yFopFAehtZ1o66SFmMhkTor4p6PwVNTzzSqmje7PrTpVu33YStsQ9CGg6aqKAPzpFDqpu4cSJSkaQvL1",
  "key22": "5gisMkHRStxAUikVhGsPf7deiPt491B56TLVaNdtRgQHekRyf7CnSgzEYA9Ju7zTsdBX3tivLxt9mBVTDtSnH6Qw",
  "key23": "4CfRyJUHftWXTpT86kJ3pJfPgL5j9p5odGAkbPckFXyRfPXKUJRL3tibELNYY8Bsq2HVy8yor258jeFHxncv3tmH",
  "key24": "59D4tBH696cMkhv3vqmvXVnfLKEArkGacg3uG2SbWk5AvgZLAjZQTyKQycA4b4HQueDFQPPLYNGUaVaBegXxGoTq",
  "key25": "5B1KzGaG8zqG7S59znbNNUvRTNLjktqdXgqgbN3TcnFR4rnCRZLjKYFBq1qt7nznJDU5qQTknQKpx9uZdDDy3HiB",
  "key26": "35hHZVVGuNQJeJT2j8Brhc8JDBevPQnwzDkWS3Y35hbaNyYwDv7LXdaPeYnhK761xA9b9sqiGC3wSFJRQxHEJkTq",
  "key27": "2C2M6wNtEaucsoJiix7N4aMSpeEdzTCzGu2pBkofBV76QF5wC7DRrxU9MMtXUhSLeSAk8zFK3eYnnhL7dg9QunwZ",
  "key28": "3UpkUUXKx15xq2k6DdmfzfTxcQ2E8zkhV86VJ8fostrsvY7YXCGFbLnuFCmPDyeG49XKvm5FsUo73SoDUaSVpZTx",
  "key29": "38yFfTi96R8k25WZLcrynPgDvFLEDRC2dYPCAZocJ8tY48bYHjczYSkQEiDyPLRyFQvb9THw3HGYh5KuayrPgcFK",
  "key30": "5ZnabRgkSgMps4stBAf7wFSFMe3B3BGB1i2c9e7aS9SZup5qxxJjR6nwmF4cFHFR3UzERNcgsyVd8cRwH7fUi4y8",
  "key31": "23xEqGmBHaMeAXfzyMsE92GpeUBjrgfnHuemfs9cF1SNW3fTPTt5NWCYScsk6xhzZUhoKSpCyC2fkjriueKJodZw"
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
