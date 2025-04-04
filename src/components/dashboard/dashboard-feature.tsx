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
    "3RngUkbtEmWZHLDV1qoicJJKR95BRPVkW7uD9qRUNMbdqxRzoxARfy8ciN5eUt2SmbqeUjjym85MrcPkzmXcjGzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJE55dja8Fit45fqBJ4Cg4MnK8ZzzBjRVGuvMo2Jg27Uiuup6jnrqYt7j6MDUDkSGKEBwHeNEtyj8R8HG9eNXik",
  "key1": "5SwLARNdd1vDtPnmBCMayPwW2m5nXDfWbsNpNL4nJmAbXN6xb8px2Nwg5rqbb3i1D27oPNnNfFNHvWWkAnLVGoC4",
  "key2": "4i6VAp9p7P9bNLMxJoqkGaXNLXYzB2hXLDLyUtke5oBkH8sQQBtiaWAxq9V8xY4nkjiBTHGYTr7jmGaUPiUVTQsM",
  "key3": "5i1Fo5xd41scJPTqodWZgHydDx7SzA4ze3jmYMiYvGctEFnoJUWiuY3C1ZNT6e5HcnXEiZ8KZEVyb1vg4WAju9mN",
  "key4": "XmFcdRKTo1cU4kpuNiaPfYKr3dMaaUp4NiCo13xFeUeJewxpUAagVfsUG7G27sneVHPAqfSJw3ZTpJovJfMrWha",
  "key5": "3F2ji9TgXC6Yee5JavqzUBWuZ3wB7Qb4ZrSXTa71YKu8c5oPwx2kJ16aHs115v4Dc8W4vAYY5pqPffp4NAAkT6oz",
  "key6": "62zNPbKNaNvGo5Qzyf3yXaJ22PpsqerehewRDNZ6Q64ngztvUyyU3aj7YCvRAUNjjxNbypjQAgv1kkx1Gk9oChQG",
  "key7": "5zSPbET5SiKvZHHT1y9Mxj75PA6VfKDAdigiz3KTyvuXP96BBN7U5vJB91iNtp3D2VZD77SB7nFH5Qu9Uh3NpJmX",
  "key8": "2ov9b8YT4ELkXwFWmi2Bi9yWCRHq1PtBUUvrUut3EgwnVo3aJU1Fxa8wDz8SW4BMqFyfu7MbffJ4qsYLXq8LW5re",
  "key9": "45VnQ3yGoXpwbeQzChrjtRcnS9wHTK48fhgJDTWWPDuQSs9fUytPKSHJZpp6jnApxV46CdyxwsgLcXaCndfqrdvo",
  "key10": "2KDr1ySYVT4uZyGLpo8HwFDGWH4CkRfsSxELpz2oTo5ujDRX9M8DSmq6E6MgkMsGM5bCsNaW78bbk1ymjdPMiJK9",
  "key11": "4dE98yj8UR6WiCcMrCd2LxbW8S1paSrVBtxeCKyLKjZznkr9KkCy3xeyFqU6fLVwFQzKH5gFQ5A6syzMujuHUFMM",
  "key12": "2hGFbfuyMJjxemrVAXhs3Q7SgKte1KUvrkdNBBZQmYsAW2d9Lth3mAo79ekHCqnHYgarJqxCkUNx7Gfs16K3zUxb",
  "key13": "3BUSk2hXS7xpJjaKfgxVeHFJFqk28nRizGCRuzh7vWdgepeKgQS7EySRiMSQvkDbovoXtwJau2R9XvQEUHtkCn12",
  "key14": "4Zdd8ed1jB3YABPTAKo8MB7ZAmjKVbJGF7az3GgvQTUyxKVSFL5aHB5mZvL7XXSefnrjF17TPNzCf2EAQKL1kjLD",
  "key15": "2zwLbUtZkZhoCeiVhZRbA9XjfBrJ32UdYT8gGa1v4ZufoC2PpNKojt6apVNRJP2r8MH3ETvitnykvBvrNQL8D9aQ",
  "key16": "3MA4YzBB9CBZf8rHfhMP9RHyWYbNrJ2gBPHqq5KwVinjJYKdcB2b63xFwG1Vr5vKTM1suS6doQ2UjMm6Vwiahqw2",
  "key17": "5FDWAtd29JR2Nf7JQEQ6HJSvDhjfFjY2vkGxqapKTRzcyt5XWfJM6eikkbT6SGedi6sPoGRui7vaC3AzPLLBi1da",
  "key18": "3UcRySQ4LAtsurUWQ2zQ6pgkPiLFbucA2KjXHt9LpKd76DkXMJtsqLBWaNxCVt5F6hW4J5haLgavpum8C4jqNEAN",
  "key19": "3dUPte7xiPveADB1oEJEaGRqN52HYN3n9Fo61tKAdRmPJfJ3rnxvjpuKwdP3hgWRgDpt7BQQ3wSEkJyTNNvRpVdc",
  "key20": "fWJJ5FhSEHq4gpeZtR94v2WBE3c4ScZcWQByz7WdhNrY5wAC3dZ41ftXNR4UyfrvJQGUvMrJBvySGi5NAABukyc",
  "key21": "3ru6cGYfeBt1QzfJMAV1W6bxc7QiEDEpzMnqt7r6QuusWjxS3MuZTyL9TgcZhPpeDpSx8XjufXQaQ9Szr3pCrEG6",
  "key22": "49d1R3J2fGrYTHdrfUhaP85xQmp8HCgoQmp2L5w49bmmP7UC9ncVX1r3MJdxqXktMkXJxJfW4zwPXqdCxrmU1mck",
  "key23": "4xhm96oHj9cHJxFMw3rCXwtdbbbmCqJW1pwU7jjgfSSnHRbqSWnHQ2LBKF2g85QuxYCn8UK9KojrYm3CA8MJtT13",
  "key24": "5Datz4zu7vizqqvUzwCsJoFk2fwusCMA61EW7fQ8qbymEikzfAT5c24n5PR6YrjwPtV2k1ybs7hbVgC55TzFBD7W",
  "key25": "5GfRjFNxfN3sfMQrCRnJfNMqnUt2htcPAetxopa3PLY2SMdnPuVZ3LMTR8UVqD1BqJsoqfqB2C97Cmuva1vAhY3g",
  "key26": "5UB45uZVZT3bkSMeBJzjGGqRS7ZpRbmAXvvAj183VSePa2w59CCrRYv4PcKU8zSqZtAYVyQpkct2AxoWQRhtRvxK",
  "key27": "58TVPLhuNyeEzWhqJnsd1YH2MPKN2V1JMYsoRcinfhg4aiXqgB5MeYAs7in9C9wXFcW3Dnq8EbprbUyUkmzUP2Tb",
  "key28": "3m1R8THfTsvRwZsrrVwBKdBuCfeZMFnMkd4isc9irF6QHytBHrdeL8pWePb4jK9kY7GSNPAPRxKAoJqTrSoauUxG",
  "key29": "v2Fw5QBpMTPXVwBWtNL7sMAzGHGGSYrfJhpZvLwNzXQ7Hs56HPFXDBbELxQUi1XeifBFf1uuKGZiLvFzKfLiq64",
  "key30": "NuETVy1zfqiMZ6hfEeFGUA4cpzmDNXdCavAE7o3mhRdNHwikcm8PBPKLbhCXMsJHbkCbVj5J4V73thezd5GPy8d",
  "key31": "25RHqHVovtMjNq4MNC1rQ5M6P6R4zdHQyCyY4deC7x8jR4kphdEhmeJKSJooQYg8atAhRW7TxVwppJ3ydjFEpxLt",
  "key32": "612XNVts2tcwMKfUgQHzjhdCMuHyjoRzCSqbJGhd64U94EWEm44CcQa5fGcXDewAQHGQybBHeNrnYKuLQu6U2iFH",
  "key33": "4FAoK3YhA4NUdPVT8pxcuy5hwdjsZSU4onkX3vts88WNJVXiJirrBfddxcMYuwsppxrQsu5qwg9kPek3oDsMy4wZ",
  "key34": "3TiKXe5deU7ShcQg6qyfPzqaSfampoj4gR5jLqRmd8Tw6oe3pdUfLoBsbW5u6fxo5L94epuqvdajcCY8Kp5sFTgR"
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
