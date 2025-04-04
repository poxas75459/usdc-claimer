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
    "2RV63jDE59dU6M9YgwmD4TA6NG7k6CU5NKT9v7YKNST7xo4YTE17MQvKwVvC5buMnRvcKZiJtRmur6M2LG9Eka4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2siKXFL3jiAyt2icX8P8qnqUtBJQDPyX6YyBn9xfTixzkrXMGycR2fLfrN1mayvesNWN1H1YLLykpmQUWwg3E1cZ",
  "key1": "3n9z9vggRhN84SY3o776S4kbNPN9vMLiS3P7baD9M4jF5UmVTSC7VaEs3uVNP1ahpujApdKEaD5p8ZBevtoFw5C3",
  "key2": "24qaFfoZ7yJFFwAYtZL9oGWWgj48UzYWddZCsejvzFtCpxXxTPk4Xx7bRd3BEfpckC4N5WMh2UkkcYzVVaqSoQgd",
  "key3": "4yAo6QH5jbNDDMUyj1ZfEUv2zPVMaBFwpLMcsYvmXqW2q8Jhmpxq6HHKdsmeuD2uaNUNHiNqXYbrTrL8FqNJfc7C",
  "key4": "4xGJb1K7Qqp4SBnNMynepdH4k5noQPu3c1VXZeqCdFjks3eNuFmG98YhNYhinTGvQHFSp9RMwxPQXZroag3PGNoE",
  "key5": "5Ek43DQkiWVQFLHY6xJFyPjV9KJdcWtAY568JWBQsbbEEaEmGCwvimL2G5ixCseUTPB2UwXbDiwohUxfVyNvsYqt",
  "key6": "4DAMS1XQeAaquwaVCLGgs2f13SGQsfbMuRXTv1BKzRBMjnsLL4eMZ9rriQ983nMhNT3zmrSbraobLVV6Hr5n24Mi",
  "key7": "2UUbL1J1L9QirS5FkksiWWnaxhsLxsWK15JsGF5sJrksGsrLkJdHrjG9proojbJritBBRATAZiSPrZRPBpAV5g61",
  "key8": "64ZH9CXbzCTcDyVh9ZTjgsXmnSfT5u5BJNZrpq5fTgpAKLWSUzw3UjMTq4Lr69yX5RYMjQFhnQbFJrxitEfu9gjw",
  "key9": "5r23yQB11R8wNts2bXmWwTg5dcJvXpUUZz4f3eTiAGxXosg1JV21EkHuAxiodB47xjpkFcwFdrbyNbctC8qQi8SQ",
  "key10": "4hpCqvbg7yrn78i8iSFRm2cqNiqYqYecGurq1gWc9r8446NueswR1N7gqpVJHVDGL1ZFasxNKit58goHbQ1VwDrV",
  "key11": "MtZbB9LtDb1xVFTpHqzbRDqeAwb5Qa5NBFSyxUyz84ioHFSRcnBm19sfXm2A6NKMaqLbk7oiXpwgKS4XGXecsJY",
  "key12": "39FXg3G6boPSdtoGweNSxb3uowTHo6EcLjmfcFx1NvMFyhbLaYVAU5g4d91T7tgYDZsQpXCSFeQC7AitQ6QdMi7r",
  "key13": "44LGG983ekWFWmtNZDQNgXfZ141GxsjBJrjHZZKqGCY4EuckNbgfg4rdsSoyQnjfNj3JRhagp1TFr9TvMVk5LXZz",
  "key14": "5ty4g9sa4TEeiQAw5oWyQkX29U2M3jWLaB1uePBKnBbz4x4Cafcma1Dj1W2nugfVDewmVXPcQVXgMWCeCBXE8YUw",
  "key15": "2tUmttBvE3P5Bc4h72916DkiGVGdhjFt3nFw6g4qYaXut5XZJe5XAPgZBu6eLy82SEGdBW8T39EfiekwS5MVuvnn",
  "key16": "61NT949mDVXj48EJuufjCUYy3XHM9G9gBu8NXqjYF2hM81bJeYGCLyitV8z6EJAdBdwec3s7Uz1M9sdCMbzN7FLT",
  "key17": "478JPVKYgRNd6oJZCU1NfRVDPU7HwSUGkQXeF4FkcXMHgrzT3tvVqcaWbkaRVSkBesbhwvPcMMi65n7av5mdny9D",
  "key18": "2R45R5kgsEiCtVxBFmY3YcC76nyEAExfzU4K5S9x7vZB4mYKVhuBorMZGu72QdAiF5Dff72sJemqqMCkaszEfZnR",
  "key19": "2KEYcxTzVjBRUTAzWGgw7RXz6f15AaXRjY1qb54LQUTnw6RsRSXWfuP281bz4LPadMrsLFMbyVm1ixpsFvzgqDVD",
  "key20": "4h5Z4HCMQFAkuhqAUgt6xNr9usLTdvrtmyzgXdQLSzH6bRwZpAFepfbMVDFR8fmr9qs6CgNffpenzE1yi7GVN7NP",
  "key21": "4jNuG5RAqujb9J76WVeU8R3rAzmaWspysRhp86mqoW171yCMxErYjsTDSZ1RGiNt22SyzbxY87ECvwnA2bpZJxfN",
  "key22": "5p4rH3nm3uFbAwjnoWx3gKtL5Fh9WeHmmWfWhgg5DM8iyjnHbNrp8PxhsFi4TpTEY1BrShWBJNcuztPBsJszMFkE",
  "key23": "5mp6mZSD5of7bTk3w78Ux9SXvubwYVdZWn3umq1RgQ3deNXiGANJEcQkvrPghje2pPRoqV6zMwC6RmDXQ7SC32Ve",
  "key24": "2CeybTLebJj2X97TfUFhiBTAZ2Ni3po1Jg7QzCDyxbgcVsHa71NnZm4EotYNHSrR6RQ9buhYLYWs82dsEYkj2Tvj",
  "key25": "3SfnAeCFgbMJg3QTW8S9eKyBT9aMSEwrjJpnMiidRuwG2kWviu6u4oZRnviMpY8oWYSrb9aJCpyYdKE3BS3Zkc4t",
  "key26": "5acA1LrnwKghnZwxt6ACX5QkcyMz2hYC4NjJrpAhfSneq8qrMqW3VtAYSZ9dHJjPAUdVa3v8NQtjR4kucJuykgEN",
  "key27": "26cCaWSfN5LBRL8CBjP2MnCMhhDVGWPAystoMudfwy8PmyTus7pc5NtUaiWcSaZwBiSa3RjncWRjgHxPS47Gvezj",
  "key28": "67MYLXcSSCZCApH7TDFgXAzQdedCkrhChKAAqfULZvYMFg9WFKKAQzWnpqSwwVt3fETE1hyVdP4ucTTsqdHHpGC5",
  "key29": "5eeENbuj9BiCYYymnsSRoSLWYPvZFtwAGiahBSStyXTUcp2vu7nkEyi2AdBuXXS7KTJfJcAktmm3ZVUaDfYECKe4",
  "key30": "2ts66vKUA9pnN7bo8jFZ5SjtTwwTWMj3FDSw2iZrremPdvvEeeH5NehDjg1D2zLdG97SuccYK3kkpXyFqyyjuVXW",
  "key31": "3SSNvqSwC41BUMnU4oJQH1WV9xvrsnNmy2C4SM5Drwa9tQpZAhTHYuYVRhjzudjbdxxHYqhP32gJuYSYBCzdQQ3a",
  "key32": "BBTD8MANrKrDnobVLxgdg7bwraSmwMcDAStoJa9gXxnPakvHJfDMwWMTFrit38Xt8Fj2ESaCHiCDauGv7nRgjft",
  "key33": "2sEKeviD9n7VmLgJNi3vTGYT8zZkhjizZRbU2DRPqUyxdjJ6SBkfjv3vFb2yTiEeSQTbKs1ombATjhKenYEJ3ES7",
  "key34": "5Ng3RAvHqWF3c8Bxi4UtKk8tLKWCS7WmK8YzYqDhtWYkWYHm7ptcDgYw9aF6itfTnCVMjaxunF2FV7meC6rgvVtR",
  "key35": "4fDwXLZ8wFVuZjmqaMx3aQD72oBsxLfQSW48L9JUWePLZ7DtWfGEmUZWBpGX3F29i1g5TG6ttHYNyZDHGhxVSgdD",
  "key36": "4cgjGTZFiM4Vm4T5Zbp3X2hx6HMhtKDNyy5EGeRqVLEU65W7rrKHRv4yU1QJ4kqAVNmxeAFYoze7mmnVjpZdgyLG",
  "key37": "4wfF6yuKAVvFfa3noPNWPaNw9ktWiiG2UyfYk4VYawkmN3RdaSwRjQwx1bcUZJEpq8jb71ZCDHBTnrjjrR8uCqKE",
  "key38": "31sHyGd5R7TqCwT34UzSh2WVUNqjTxMQaoRztRk6ZYZpLP7X5waLJZMrzdqpooZjuoa5pe8K87wLMwtrVB9XbBr",
  "key39": "4hxfmnx33voEaqHjNRJxfFtUgfpQfgpoXT6JABZszrqGR6PorX6FwcCdKd9SGTH8Vw5ZQgRGu14xWmez3kzW9S3a",
  "key40": "4mrDYV15d1NoGDR5NR2yFPxQWbK5Thtmk3QKK15zTFWoLAgUD6aFhZ8VuTfEEvUdtgyNotEkfbpL5MMEaK7mJ57H",
  "key41": "3r9rUCevxubmnHzSS4GMANkhnNgnRmTGpUkj1Fgw7JabdzVFYmhT4VezUZZEwRSmkJtV8ZVLHJwHv7zHDM4qXahi",
  "key42": "5gSZmttD5d6aX3arABxLgwGmtufHrQ8NZQToTBb5VXLJWRCFzCzMP1qp2gQP7SzsUZPBQQMqxkGSukrgiFKdnJeJ",
  "key43": "2m6jgSLqoYXhV3oBgCezsXn5fLYyWX4EQeT8CB1iN9Jqvrro12QMc9o14z1cNQnShSExCZRmD8zzWxWrwy5cCThN",
  "key44": "4CXoKwbhfKnZbYP9Exkz6Yw9FeWdpcmseoAJ9FGwSnzVirQZxXzuTjCeAvQaC5EgqiaNshnwcDMGR7zJApQaAFZE"
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
