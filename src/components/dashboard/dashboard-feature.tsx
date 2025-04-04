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
    "3BH6eWWDXyg8VWK7gxnAGZEQ7zu6jxLxoDSkyKtED8rK6eTSVbHaWmAcnwVhpAdmh1Dk3YVbm3gMgaWcasacAh82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uC8tpYDdTYe3djKxiM2oNSKeBFkRKYbVbtJDc3nwMjM6hNh1shoJTXbF8yySXP3Tr1kwMkk97wTzkf5MU5LhryV",
  "key1": "2S7QikRJsE7DMccbnhRWoekxhcCfaZs4rf1yiRroFVXrayTdAxBwveaQP6cYTCPyhn4s5cCCyNNJ2ax2qSJdBWVb",
  "key2": "BzG9A2tgw7A7uPDNmEzLzaJSHsLzAN1dCUkxrhiLwNKrYyaKaSYiA5PGmrxxXCordt5j4fUA75QmgUZcr6dVcjQ",
  "key3": "2fBLBS2b1m5Vhwwmmc6PpMGBhEwB8taD7NZtCpKhsCJdGwx2VbV9mb7wod7pLhsgKYaNEdq4KVL9JbakmCgsWiAe",
  "key4": "3WyJFf8QDdrgixzrs45mXGTRftx1Wwj5LiX4hWfTARm9tsc3BBU95R61atp9gGCF1Uhf52it95BmmRC2QsNjhQtY",
  "key5": "FgY9rBPSYESuPhZBCHVdavm3jCu2hyrBnwRXWsB3oUBqQVh3VMKPNN8RNHK8S8kd3dh3VCdBbKGmDpa78DsHYNV",
  "key6": "3v2Yjjn3y1nCEToSKwWCivbfJ3Lg5Fo9yCStGsqDbkoa9SYtS1AY6iTj6esqhjKkxkDcaACqBfSLyVz8XqH71s3Q",
  "key7": "5Y35uKeNjotdEnjydWyKWVQnt4LKLQPaqVEZ6MmhLFPHuP78tbNJBWjeJ6Xm7Q1RHkaq77arKvhB1VAoicy9gaHT",
  "key8": "4pBEnpDRd9CGLowkXM6rKihaTiZVuMuF3R34QKBCwtgT2U9QL9cwp35DpF5yukan3QfNNT3upTJduG1Nj7bMtFND",
  "key9": "GLU5gUtixYyT6mJtdLsaUxX2LUtS8Wof6FA89zMRU1623iooUvoDESoE8NWTUxT3aHp1SGSndxkuw8mfQEd1Q7N",
  "key10": "uB5GBohJtnAK9X8EfBxdXueAwh8DnjFo2eHkRz2LqGxZchSeLfgzBd5R5PLVRpHwqRs2a67t1ph82WHL9b3TTZp",
  "key11": "2Ao4YqjHph4XSAKuPAekD5BF9ocnTrKp8rNziAB9GGCYzhKMirxFNBGms5YPU19bhnuYLiEq3VnCqsZQRcTRKort",
  "key12": "2V98idfwBUsmV2U2sRb95W8AsUGZvxZ5xQvz6SvTyhv9Q1FVgpGVLeXbPaBgw4ceUKFW5XaqACPhpVj2FUANXqt5",
  "key13": "4QrmBYqKg7Q57X1backsGwbj7o6XDQiz3HSiG2u67ALPpH4Msyx9G16xAcpdfWrzsWsZGNPs3EB3EpY5m6WFWSKy",
  "key14": "NfPaBphfZcJaTdAxEQFH13cjiuwF3E3Q7kDwRt37bqcru6jLYGZ6qJ5qhQuyiLEsKk8NH9FYBDYgmKtDiU67gcW",
  "key15": "Nh5bVM8Dxi3ftxfpgdmUxDZzRpi1m49ytWvhT778phNA7oXTE41PAkmfe8BvPtzHcA5sPCBsNnb2YUMLGroUJvd",
  "key16": "3VQmrwCpxKHc2GPrS8GYer98xU9kU9wmYVZyQeNS8pM2y5AnkVhbtbQTcwMzFA28eo2eRdRs5iM3hXN7ec5FmTeq",
  "key17": "gS9E81ossWbz4cWPq7MiZeZESQurRiXYwEWQzpULsg89umWDRiLz7rFaWYmn1XwaPNjHDeqa4ekXyh9f5MMX9wo",
  "key18": "3cE3StkmpvNVYQXnC1NuV2eoDX2svJvGR2EiRyo5GdrNS2V6qnXizqAXJ3UiWkM1TddY6GxqdgoKC7eqwEgw34Cg",
  "key19": "jNAH7xnttzzS2Roe1jdc3WtbCNxFenCD9vS1MBtsStJWCNWDzHUMQk8VAATchKmBXyAcbPktZ7SpZHzNdNS2oSd",
  "key20": "2tRmPQRyj6agS7qGi4wRz3y2kvY2p1TwjrecYTWLsddFGrDC4LPJSaYQuHhvED5DLTdzUwKctHjzNeY5c56Z6bia",
  "key21": "46BzYrWnpxG74pGL9bg2m2EbH3aeAamgwj7g5TL7YMeBvWRf9F3PmB5soS9yL4FUwaAaqxMTtBEUnkFFHVdEnKb4",
  "key22": "iiV2zUYKU3tKdoP9fRAZmF6iC9V4Y3AaKnt7bf7rGhD5tk8b31CxBrM8qnRQAoq2eiaSEqrDiRG5uS3S8Sq6aAn",
  "key23": "3gTBgusDFrT41VJorvGehnxWoCXkRq3PbzsC1RmybnV7iA1dCWeEzocg46AZni96KvGKhMe8RrWng31uPwQ7VGf",
  "key24": "3W1GQBbvzunc75EjvKaeaHbJTcVwFEq4sb3oesgBZHCVmVqzC7jHLjVdyhG38zjRGpEpYc3pnttbE1B8nfpqfSR4",
  "key25": "4jYXpJRiVU9vUJmSH48zUApKMAzcpBhzdfKkt52rUtWSmVzQ92qV24Gyw8yLb4bWXJ7XgZ5qndYmHErfMdr3dAh7",
  "key26": "5B63LTFc1WNQmzTCcProBfdbyDKph3LMNQDeDArSPoZAn7epKfV1Qc4g4MCJV8dx7n23E8uNkcZ2KkP7Y5n4LUqX",
  "key27": "67jkcdxStJeQBTBhXwGbiMYqEnRcpEjy6i39Q4LzhqTxDKqKbahevh3D2onrqEcV8QSPjDo4fBoJk9AmEMYyx33o",
  "key28": "66bbTtq3Wh7pfSEigi5X4Tfuxg8ehXntzfUqyK1rfQYiwjENKbq8KS6bo92ki2NbnatVpdRcuZ2wURoUcGAHjSdq",
  "key29": "5q1hjej956F4ufMatMt8FpYqt2u21o8FVzMbpafegHNbs6nHYzJ3kowFpTHveg6bzbdaG1z7mRoU3tWWGG48xPRo",
  "key30": "3GFWKgsQRLyo7yzvuXnMbsTbQKWLcwapdpSnEnCiNgUJU1ruZxZoT2RvHtqaukKVM9tBQeWg78K8DGMgW8mD8M4q",
  "key31": "LDjjjXn85PYzgdakqRcUhMQonzqMcoVxs1PRLcikPRMXVjmJtUMwjZNdMqZYPkLjiASGv4odajpdZpzGD7spnZU",
  "key32": "BMKwSsjvJLq4chFFTMYPVER1qkoJceta9rQvgvezXuz45LfWUuqbVi9oSf9Bn8en69FQKLRrVaR3gkspZpC1Vf3",
  "key33": "2xasrKEF4N4YvutRGna9k3RxwMHeMRdsr3WVwHYyFQAp6qhYcHidf6qF22E6AhsPeE1Y17kg98KEsuNE5bvk72Fm",
  "key34": "2tZNCZ6XAFpTezQWLzD3ZXLDaLdmHgd43Um7GhDPKsDMJKWHxLqWimm6jxFQhFGzoAAXjnPnBeCYS3WDBz8icB3w",
  "key35": "41y1WQrqE566CS79Wb85z8t1g4tYyeo1zMD2RqVgoF8gRrfytxdPUirivz68Zgdhv93wf4poyJxJnDR98CPtuTDA",
  "key36": "5qRCUJJqxUDdBMxSPVpLNnCF5PWfLGPgMh6NjvhAHrT2EwrE95pk8AAv7nz9WvuHHDQebfZvde6g5F1b9jGrS7WZ",
  "key37": "3BG6SQD8qC9Wzj4kQXZ3JByYhAGXDRe1eZ5wsqfcScgiTqLtnZzFfvKaFMiNY3KGMVMosD5EBFxAsf1yFqgeKYvA",
  "key38": "2tRcNDs66Jywzsp2cG5pqkhy93NrUv94Nc48RMKKHKHMjPTP3pWNvFYotuvd76wvqw3FhQwCCdoiuEmvKe8bQyFH"
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
