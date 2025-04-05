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
    "2XHr2LDv6qY7fpYpUNuZFjCgAS4YBskRp1FsiJ9VhYAdwE85vpvgQVkb6KeirXxHkRrawwKMy5SWYgkAzdAegbrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rgQegFKn999RkvWNqYNLKoKFXTFpJHdxy77bgjzA3bTP18tQnh3pN6G51qt268Y923RGA67FTyFC1t1NHmtYvq",
  "key1": "3tA2QcXLSSC6ebEgu1LtXKWNBKtehLECjMb1dbLjuC8hRQ28bW69D7yGY9Hdvj9dDeoMYWxqKDA7fS2RwvJNfG6S",
  "key2": "3jTDytJin3eVZSj7CsrYXUkcYV3BZaNsHDQeLWZnrnaA1r3kPY4ezqMZhtxaqohoSZj71LoWKFNcf5rfCUERiQer",
  "key3": "3k2thbWA3cEYFWrL1bp5u9j3YG5tRMc3NFPR8WSGsnHYrAD4CJCeepN3RH6YXJBEJPCNZkLNaoLf5MiB7NBjY1B2",
  "key4": "1W3Daa25JP3rmR2JoPnP8qGbXVYJVjzXuB31sj8q8CUuF198Ho7hxT4W5em1sF5B2Woqs5cEGtVbxjfFZpbZoig",
  "key5": "j8bVRsZMTQKMTqTj5gZuFTGqDMGmAaTNRsdat8GDdipugz6jiV5imUt6FVAm7dWkg7CYMwfPyont2s2AV1JdS95",
  "key6": "W3JvLgtZAbfvsjHqdHqnri7EMWkqKEcbymXqrPspcgS3kPDZiP5B8GGtwH3pVhu7rpoi28dvkrmH7Qtvyr6BZf4",
  "key7": "gaPSUFV28qTjaPdJV3E2WCZyUMfYEkLVCAaVDmPi9gXb7BwVSCYHdTaSbwwKRMUuVSf3v6mAZcmVNg6XADAs844",
  "key8": "39BSDhE7wCxXMUCLM3Q2P7N2MtcGXryTperEPwidGhvtwbFWWYfKvXZUAn85cwoHHiy2VsEH9hykNqKQWWTy2gkd",
  "key9": "5XeEq8kGaSMbJ4RFrfUKL1LnyNGrrRTjwaUKNuydB8wR7HkqVrWkG9xriaLkmy2FcvvdCUTEXPZHGiKE7cQLztGe",
  "key10": "4n3iQhGjggmLwdWSYfQ2U9kmQgCBA4zdJ9NhDidt5zZkfdaQJEk9ZzJXLpvkbQuW9zaHQ5iW9TcE6Bhv1TxmJiDE",
  "key11": "4LHT7rMBedmgqxw6X1xAGjrpUFmTDcpgujiRYCuCRahyZRd7PwBWhATnxZkCs9T9sDXtrzAK3pcCS3AFfSX7u2Hy",
  "key12": "5bvMUb7cEfog128wKVr52RMbXer1GUYA7N3sJzm4TketqkJLswK8mYhhrMeUVMbMWL1HrfBCRPHczXPt3v6qXhMr",
  "key13": "5i7gcjoBvBvewMNj8XHH8HEsGg4vGDEAs2JqSd4BEcnHtk1EPrFftqFPY8JPqHXNt2WHu5j76Z1EgUW5SSiRHee",
  "key14": "4con37fu9m2nNXD4T6khUC5r2NeZBiykrmr87srzDYUJBZZ74BTgkyLjYyfsCYDnpwYb21bdEtqHNDrBMXihM2T4",
  "key15": "wUrLPWc7Fm9qZjUyMvXJcuwevdPTrHNXMPARiPQ6dtKYSkreresdt325absKHepZYkHYt2fijRZ1sNqh2nrpKrF",
  "key16": "316PZGcQDirU4b5QHMw2X6qeYZaC2P6QPS9RJw5mVXmidT7bH9utfAsPSL9tQzeRu3UEhznZb3LFjqTRXd97vf7P",
  "key17": "5uiXXPRzgLFKTGKFYvakNfAGRzTVMNWV3rDemsCAyRZFPm69kXh2A4T37t6axtH8yUWYTeVtujDojQgJFuUPGKn2",
  "key18": "24aCLhtBVw3tD88R3G7WuZi6wkNciADJnv8iHLrrZgxSvhMmvBoLUMUALsNNLF7yMuVQNxqQupbv6RGKAaf3Z9hK",
  "key19": "3BZFdu44JfETAGC7HZKgXFvAYah1grT4Xk3RSVH7ZQQzCV2d75unRqLoHpfUhkpYaMMibupxuQPucexiD9qy3Q4t",
  "key20": "4LaNV7Hh95XoUh386kshYYaij7pWam9H2vjdBP3i9DkfSTmsjyRGKUrYbMENaQAi7EevXoNuGAxogXRvGpa8vR42",
  "key21": "4ShEQpqpko9Y61DohvB2Eoyv653AN1t4hodmnfBrame8avX9MMRo3ofPpEYR6giS44KiUBxEfGb4UqNHUEAqGtJ3",
  "key22": "5ofTwL8utE5SmABkAFSuvhmUL8tv6Ee4fKmtfFi9G9HB9hkg4ht5ErdKEvDUuVtnR141C7ZtV169af2ZAF4VCZ4",
  "key23": "2G8TfnhdqodUn7FgWP6X5eYKhx3GsxJnTocCBSDf4BNA634byoeoonfr5b3rt3QnoRhLzhFydjt4NJQ62NAxEJYi",
  "key24": "3jFdaY9b9KNVzjxLrCN93xJAcuy8ZjaRFddceJKXg64Zv9CcYsPGn7esw3qz9pCBYHp8Y3uk4rRv8GfpHMiEori",
  "key25": "4aAFFJCmNShWopZPpniWcQiXiiSxzsKyQsebmHsEaXwoBAEHNDVAsrqNQU4sufSDxHRmNqE6h35EKkGRqv8NHj7L",
  "key26": "571ZxoY9c9Qqn71p6uW9zpBFHfXRftE8Qm6KU8saCtdm1j1nbpKwymyZ3vFrXPNRf2apfyL2A3kFx6kjFuKddUtd",
  "key27": "xZUSozrMqkaFJxj5764qjjSwNDfZCidzEfhxER3Nkgm3kiuUGq2exxBMc5fbvGjPLfiGNQuKY8cqfLBwzbafg6i",
  "key28": "5wEutZxDiFSUgCYYbfW7suCcBEEsSkE4WEBNRCcrSemtzQKTzULFtJN8HHZXKYfFygyYikKpobMLMkCQ7RRtZUTd",
  "key29": "YQafsPewEXXkeRsQBMvxwVsF3QeD81iBkHUdhKbZW1YzCseWJbsstgA3LgKKcdc2dMGs13UeMdr7y6QL2xH7qfk",
  "key30": "5ToK4djYdFw2UD2oL1QJ2TjoMcdBtMxjTZ6yycWZCNyoRXZFL9MEgdRafD6C8TFhd6Kw6285a1FNfNpW9jGvoKnM",
  "key31": "2FMosM4sKGjbh7EwKTsNcQSY51BFEhDBcd91mgC93JRcB9f1SCASrmK4X5cdUPGMqhKXwke7FWqVUm4396eRggzB",
  "key32": "2FdzGiQav3oT5HEpvWsWtrmbmtMxCCiyhCB23biAaqsP75kwQkKkcRSyuv3tFaG8VHHk8ihBwST6vJW24CzAx3EA",
  "key33": "3PpC4T9DeP1nkw8xopmfsGxaKTJ2FHFiuNcH9ZfFEvzjcE9QMErgEHf7UUHGJBWdVhHx3Dvqsazpfyw2fvETk1RA",
  "key34": "A8ggi3aFhqcijWkdGLdPfAaBVKgtxapQqJ7m9MnV4CzRoCqPuUhvrGScywNwqHwu6WK3gdK7BZbdQCRKq5tfyem",
  "key35": "62iZFaG7RPJS2jM7AwV8TMo3gZZaP13kKLT1GSsCChhcpcYDRRC9fAG76gWJZus5c8v637eZULNc1ddRNkAbPPE4",
  "key36": "4zLy51vYKCsCJQLDJirtukcTNiH9p7tind9yfUEkHCrQPa9rYQhcaq6zMySzCG4fJRmFsDPswuV1UWSsJAS66jkg",
  "key37": "4C6qNSauBo4gfXuPBumTG9KZJ6EpxDFQTao8kiPZvj1A9HAVh53WZTLpdptjqXoB7guNYeAmhCRb7P3mhn7cTYHz",
  "key38": "61EFJtvE9RAQhqyfca4bLAa44huEGdGvbVjVMjPyGs3A7PAa9VQfN7egWSpTxGhHFfUmW1AivyZK7J8XD8YwLQKB",
  "key39": "5fPJFzdwV34sEHQ6sVarYP7HJ8s9gJiYatppHLtpR94Squvfy739iJ16KukujzmEW9Cy5NGafzMvnCg6yor8onFc",
  "key40": "3coVH29xKtKXyRAd9E2oi7EteqThYgHVSreLftSEayUp3rVNohCmsPhSYKntNU5uVThbiobeu9ZSJe2AJUHtDa9E",
  "key41": "RCNcATSfkopsa1vmgF3skmX73jrSyjtqvPWVM9NHgrWRpa2uNrysRoY5yxkTwY4HAMnydRruT8EghY2uTD7uyGq",
  "key42": "3gLdEy3sP1qoX5eS6aJ7p8UUZ8iwWEKge9NPzyU19cG2YguLQex1JWbwgiAbCvU5MLG5Zb8w92XHw1meH8DPs89b",
  "key43": "4N2S2aJgyu4DPmycMqBbBFdh6YjyxE9femHyopHh7ZZTpzojdTrEARRUD4ECFseTNoKv1hkAmKXq6fLfgG4ryPci"
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
