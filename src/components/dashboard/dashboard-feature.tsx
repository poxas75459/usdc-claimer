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
    "3DH7AWQLQwtkBrJFWNjLLHaVgafQ4jBpPCp1BqLyNWREkotVTwMGkuSFbeFFviY9wQwpWUB3n9yjkGVkkuRu4dhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dJMGMHBmgictV52rKwwiSyWE7tp94XpgmA836gzEA5zabG6cUbCGbFZ3HTd2TyEs294TFZwSVYW8PXn7xMYy5rt",
  "key1": "2Y9MabyZ5qVBDYvin6L8tJnvabhXtvqLvDLpEWgfc4fr9BaPCd7PwEGE6BQHGxbWeYgHAxYbns5fZ99aQwaXzVpU",
  "key2": "4ToyFy8r38MaPB295NLBsQ9Xbk5jDB4YHVdXbzzreWmdywz9Ugwk2AiRT4AiwChLV1fgTsMueLosTZmfidsdSUh1",
  "key3": "2gW7QLuf7MZqZLqLPRLW6C9ZR6JZ6aqvL9rHmudi9jj1szWdJLcm6xxnJyJfqAkgVFqyRBJQgecD7FA24nhkoRFN",
  "key4": "3hYJ7FSKu2XJfs4MKGAAeY2wPqUDWa79qwURhCPRnDb95hM9Dat4ZDhpuNz1wzgPQwPqD8ETJfUPoPxiPKx7rYVU",
  "key5": "24EFtKdAwhx5kZyfiCnFg8ZaGsJfj73faczANksn6H3LAN6uGsfPmNCpfDT6qzGdMJrwYC9Fz5yTq5Vx7xQau8az",
  "key6": "5mmoG6GAgiQbt8wc3zVv3v61bkmnHK5tzeaUBDZaJuJ67NTttL9VeLuQzsS7XHdhW7UTbEW5en8osS7EbxpEgtLQ",
  "key7": "dRiPhLWRu12m6gDfLjHsrXATAgxv89vg2CdFdZAQD786Szs8BPXYYPWF192WAC2p1R7RurztKH8VXiEJCo2DdaG",
  "key8": "4xZee71dgqJuxGNX5BzthGCHFFe5dgXNEaGUXhP94cKvvSgRVAAvcVprMcw4EfU18jCFpU76PNnpq5T1DUVDLn3c",
  "key9": "2umAMVHmuXcc2Ge5CaQqvBkoxgD33x3uoaFYoUiRtphn8UtxuVFQwSY4FFSnBnXnJXbVvNJmGzaV44PVR2ZUFwvc",
  "key10": "4Q9EZ7iQ7TNDpnFasZcwbAgKYRXnJHfsbfDNRWVXHS2D1GHJNLo5aEAt5pGNYF4DtUTuLHvzNQNcimjGATLagJM3",
  "key11": "2wnpiLUUjF8eMvvGT1NnXhs2wZTrSWxxYbKrzYCjtRS1z38GAH3dLWeRU4aSpQWJMEmasfhKHxCyUtYskeJ4TvpV",
  "key12": "4nQ1h8PKGkQ6cg1jHTkr5DWk1DbGtcTEzAk3Yi25PTQCkpLwezn3jRp49o4QhHr2Yk7ss2CobVmrySpURcF93A56",
  "key13": "4YXhRgNu9PZHevPSzj9oxXsLtpRQQQDdohhVQB2in6bkNe5jHBLAMg2rwVHG5enQK6L24c4vKFVMmboC8zsadLmt",
  "key14": "3DxS2jFbDxKifdxSFbNrYqZ1wgKPzGVWvgQd5kd9cwrTudZTYJazkMvjCjpGbDoBtjRDgjeia2aXaf2an9ynPpGw",
  "key15": "4MEkRf1fx7uQHksChEV1JVAtAbw7CzwHoVojo3Nfsf8wJy1vwo7FKxgeyQLLC59qMLmHzP8mG5hoha6zZ2ZhyFmH",
  "key16": "3JUL7TCpo44KmQsT4irR3tWdyYTh3TaFcyCpCWFTYSfjFJ6JHjPku5BewCwLzDFc8562KVYv5ZFaEpwFooa1DxEs",
  "key17": "DA5tx3VzmEDuatTZCDXrgXZAnhnzfhWGyzm8NQ27ifHRqMYAzmuioeyzpw7vyic9Evsda8mjKdhUfSVdbhMv7Wu",
  "key18": "n3VwjJ54VP7Fcsit3jfo1cngNQdBJTgtv3AJAcNAzm38xPkZ52Fj3gCb3nkL4U8P4xbBqdpxHqyfdBBfe6jcu21",
  "key19": "jXZQE3QgqTwFBGsdjMo6M3ZRXiwtYdNDv6PWtj1tK8dUxRkXRhat5xjucydSesYx39spwr7ufah4z8uLHcisEV8",
  "key20": "2dYsqQkQFgzDSnDijJh6UKeAfb4B9xLouRpuHDRJ5acNoWeoQep2UMaDEiQZgGNUy55HWZ2NbK2gpCtJkuLi71an",
  "key21": "4BhjWxJwnBFMMiXjazywXevV6QTXeJwr97f6qD3oDng1wQSfh6PQc8djaa5YCUK6VjZzKaqVQi26zWK9zL11ucht",
  "key22": "2SQyQeH2pDcQpy3naqd1pkZFqgKecTZ21TnLiv7Z8Py8cSk51iM7ooCMkmdzPStd7fR4txxbunQjL2fRERiF8cCV",
  "key23": "5pMzV7vA6UuEpxBcw7aEKwM1tiPBJdLjovAkLwwmCY9pWTUyZr5q6qE5uGQqV1ax6TJRN4daCYrxiQBgG39b47rY",
  "key24": "5jqjkcdGsthdp985AqXLMj7FnvAF7K6WsRZkqYjYzpXviDnXToRxXh4u6YyYduqCi2AjDQupijFipAddKGhghTVS",
  "key25": "4H9AX6BKAgZoVWi3CcZeC3xci3bnSSZvNGCP1P8H5jouDiC1BXw1tMWwe1nHjpTD5DSCBfB9zGtR7EKznSpSKZfJ",
  "key26": "nxrPn36BdpNrgiZGRmf3duucWAH7ewBMcTwUCjVS1M9CeSH8ubCHxBeCmKX7XSfjkn1Dc5Zh8vgXpsUgTptWXEq",
  "key27": "23TZuwbvEv6VJzo2Rb6DwzStQq9DeAaAWbg3yM1PW9644d9QQrGvsZctSkU8XwQQAvpqU61qBqRvoD9hJfgQiSrf",
  "key28": "4xic1ciSVLNWC1TynZKUZ9ZCTkRXcb2ygpU1EspWVe4A3f5EpsX23t2YMeDPse6mc4K32gtpK6jGit8vi2VwAkiB",
  "key29": "n8TPcBnwAhjq7tuFRbBPqXc7Qy2VLKEsJxMPsyDsKZZbyKFDi1f9eMoU12n78DUrQAKJNKz85gWXoAA5YpVHuZb"
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
