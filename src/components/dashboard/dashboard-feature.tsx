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
    "22GAGHoxwRvpxnCDPedV1VHt5zbccYTEpWD7Nrs6TBbe4scrZQhDqVwbyeQQe2p4aB7SJz7D3WrKuNnpN7j9ZZFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8eXsrVytBs43U3LeVBszbbcjQJH36q956fnDEcJ9Z1ouEbpxQ4SuD4p4biKZag1mv1asesSivigypiWdrTtjyq",
  "key1": "48jPsSGZm52GNJecqSwMGzS89QKM6smJ5C5v7ti4HXngcQy1pcntJsAfrJJ1EZrQh9tmqpZJE6cSxwG2vin71F5j",
  "key2": "393XUUuLw6iPcxsRhavdnJhZY9VYyKfKY1ouja4ZEvYq1WeRd4KegTCoTsus4ve7Zsth4kaa1K9GAEFV9JJrpxkK",
  "key3": "NodxBbXLQKt9DWUF5sAin9zaLFdhTAzCaKQ4fhLkSq3x84BM2YQKsu9ZH99zUZAUTigSdTeG3KktzW2v5SeFKjJ",
  "key4": "2UXqmNGDfQLXfHZnwMYnhA2rAoXNy67zpD8os3GVabcYw2nrJu1DqrghVdMxuLfNovbhrvJdsxnr1crT8dgKoKky",
  "key5": "QHPYmrSmPZv4L1Edtn1UGjtuLQMzz8sCggshrGwY6byvJNbdbwykWmZ5q8eBQtfy9DpeT2gTBquRGGnAnttEn8v",
  "key6": "3Lqj81piETbp3iGHxPvRxkCf9dFadk63Zv3i3vRPeAtid9bRhNTYWLpcVRYiEpXPPsTUq59zzK9DY6hzQRfRYG6x",
  "key7": "2MqrWtvV9wL3bkonrt8vyHK7toyAP8MjNLLTQCW2xDdnSsWD5j24yLmJcYgdjk9zswwhTZDbc53PWiV4rkjUuAx5",
  "key8": "ahT8AYmTG7rpVB4w9KWU7q6xQoYRZ7ssTd6KtdtKjDxM2aPXYvRGAnU2dxoXBGFFgEEsqvnLpcqo3Aewouvp2LL",
  "key9": "E3zgsJptB8YVXD48CTE2LLqczzsbh6igKBmaGyhbmFYqAHVizoxPtMDqscGFHefmu7wWUNHZ3G3XRk7xrozZds1",
  "key10": "51tJQBcxkeYwuGTp5yYZD63kjxB9VfoHSV9x4XoyrvMa3N35UPsXaoJ5xUexm7e4sgWRSdB86cktUAXic7iszuj8",
  "key11": "27YvfeaKxRJQto7aGc7sQaHxQdsB5yjgChmA3ga6cwuRb1yXFEYZgspEoDD1kjMFPfG4QoFFgrGccGxXkSt2uWW8",
  "key12": "5rVxsCt52sj7vNmA91HeASzEmnY7DmXSKD9wTArAqWDSnxLz6iX4JE374rxwgShq94vXvd624S3neLzGsw1Bkd55",
  "key13": "21BfFf6frkPBvo6iJRc992UWhQECQd2r9As8411zawiSUhH3JxAGoUHGKw1iEUi5sKVMZLtLuodumVz1C3pwapkC",
  "key14": "59XLyLeM6GaxiC4sULdVDeahFgoWNoGkkAymSB2MjKWrAfGiYnwv2zyRP66ZXBYMV6F35wMkmgN6ZFTobT3Gro49",
  "key15": "3xNeEvmi4X53bCmEFh1a6mGAHNPDYsh5hn71o6zsy8kCsPbWpJav1FWjvAdJVgQVqvgGVyynUojnFoAZiJh5bZHb",
  "key16": "44p3epxmMEyWKXJufiv2Zyqe2jHFotSWRgnbRFLHuG9WXRpWt8VNX81jVb9xKF5cz7XaWjnqFkJDEhhtHVvC7WqU",
  "key17": "5esJ1QtDXPwmni5oyRamLGVKYn6nAkMr7SM33SESV26zQdrowkyF9QPsoSf7WU38X1b28gCsQ416RB25MYMPjiDh",
  "key18": "52fWQC7p7NhJx4nDZWdrAm3GcQRu7uaTNQYN6BfLGtQa5yy1dt2YqAacvs2qiKuNK7mhRAa7HE3iqTzdNMWds4Wz",
  "key19": "5WvBDnjRtB8NBww9UPVRMZH2Lf39DD815FhVq1CDRU5tUVFmhx12QLou5hE5264PaUjgWvbcS15P4msC7ddjHmFb",
  "key20": "625WvHyv6oRgkm1HBMUesDSEoyt7XFApDZ3dw8SGitPyqHHpaEJx4u1ke7oAmWr1mYyATbQLMZnUBqGXZTAMhR29",
  "key21": "4QWgYmyXdTGvNW3qQmU2Fer7zrDpjSoViqBmAbT3a9bu9Pc8PSAaEvYT9oVCNPuu4rpofBMrxZa9SQqHZUc4W1Zj",
  "key22": "mXG9HDet1SqUz3hE8fEUPfqaTB63Tp8y5h15MANoyDUASefxyQKDGFeVnD7JfBcVBYU6ftZG6z1B94kPMtLkRCV",
  "key23": "3hMhFBUBkSribP5FMZ3ZF6w6W25EcHxcVuMYE69RwU2hPxmZWHwPdm5RkxjxXbPpLnzHDofZYaucXCRvp22JSph7",
  "key24": "2269XJQ2TvbrsnZGhkaTUbBtGx5KLuD58oS9HFqWQVji3ajCAjsrStYTpHHJFcRMgrPBvEbsnsRNui2Rdkecxv1j",
  "key25": "3bFzqk1H2kDTnYqwXrnr3wkg7z6eqizhx8K2YGEVssfnaGczGKonnajmbJg4V16bggk6BRbWcUAXLgP6s99G5MHd",
  "key26": "5aNpJtYXHda1cWcQxvFyUoqE8pZTFVAaKQzFSFooLLChT55D63RgAw6MXufs9nr1a7Lvxqw3S794FPbs5FFxtzpM",
  "key27": "2iYfe8jxY73o6rJ1QXVmRCYHb166D1QNtYYhRTU57LUAxyWu68v7r2ajjkZC4E5ePNWuxq9up6cGpRVK6BHnuprk",
  "key28": "2VtiVi4WkHUEMzto1fMrPqP4ZktNvPgHuP3s5Fuaf8TeWaNETLLfMJcrcSmd9i2F5cSK28jFu8n6aR7jC77DcXPt",
  "key29": "5RUtszfAVLkXrb1pR85FWj1jnUXR6Zz2UrmMwq8vQjr5vUhdDZLLD9JNPR7dfityfG2CuZ8Z4v5CxG12fbKuUvTY",
  "key30": "1NwHVMRMbGpUcMuhUa6dA1CY4g9LyYL82ECtgRDDErLvq8TcS7q9G3MZab8ys1xGRsTfKBP8HpNWDsvvBAgwnDt",
  "key31": "pwzgTsT8z5x9dVrSpkzx3wK6oaDUN4rAg2eyTW86NYjindJLp5T1qjPNdx74ENHLQk8PY1Rp399xHbJ7PZse7r3",
  "key32": "2e9vKDCdT3oHU8GswcQ7C6LPDEgk7GgXfvgMTDC2etYnfnpRTCBpEx86StjyoKeSPkNgnGbgkKSf6r6x7PmrafD7",
  "key33": "5CTVJ8rTsz43mnKca3jMMSsHYdfNYdMtReRU4FgcwW8f1uwEu2SjwWrTEoHXBCYvr4dtnEapz7cT3pY2TYjgxy8g",
  "key34": "31RMH5fFHua9auFRuxZWUEytsUf1bFYaxcdX1Ku1QQaCGdZn7H9Gx86EXgiDdixF353qnu2L8bY5escUk23kMG94"
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
