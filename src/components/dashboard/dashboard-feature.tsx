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
    "v6d5E1u1SUx8ffLXgW8nE8ehjPWeosa37H3M7ENaqe6awyxq82BnWmQsq8ngADMDe1F1FTERrec52Byhc7Vr3AB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGMStHtoGhmq6hDEiCGWPSPinpfoeaMLSF7b7jt33WQsLSyy9mZ23N5ywyraQJLjSu9nycqap3BcvwrKjCmzasx",
  "key1": "2tsfGjU2orUACit6njJQE1rsSsi3PobDJ8bh2ztXM5ehqnaMYQP66WLRg4gFpMoSvB455vGte8GTft2jXYfUKFxD",
  "key2": "5iAHjarNNnw1qmSBbcSAuXydZ6Tbxr8mGjcRwBN1s6mpHdrR2gCrNE3m727L9bJaznP5e9cmCvCxWqfL8v23JMVc",
  "key3": "5gPLPChqaKR8y4hToctzADk2qeUGjBN6dSu9QAUr2gLfubLCoUHrDBGJB2A3kQP9LRDJZBVHjryKjViC2vJDAuEn",
  "key4": "2E9wWXASUAwmB7ABEhyqH68yRgQRVoeEy8rCnfbNajrDtR1fRjmFBLvxQ65By3CwpDHbk8gZstziT2EHzh92jc5o",
  "key5": "5htcdUE9bKi6cTx2fdXC1ghzKZVHCDd1W3ZzchczVJLBvfBKZAg9UiR38F3gzsKd9ht2bf88xiexuCJWC1umRySK",
  "key6": "kBznHLZHGCey44Dy1VBQDZq47UFbgHWuGdh1dsfhpzsmhveimqW6uscVr6cMvaoskN1fdtGeT6TF4w2zjmyFc2s",
  "key7": "AQnAByCM1P4H5ABWMRh6Pqune5izm7Gh9j3AorYdw4QP1VgEw1jQJqLw4bKHc54g2qFKVeZ6hxLBRQYNcyLTgW9",
  "key8": "4Y9aDbQ28YkqD6uXraudxt4acBxRUg5zpsNddxaNJcBAXxLCXzZAZz3aY3meLqEieFkdwSRVFELXZkVkHnNqTKUN",
  "key9": "4GYHTCsMZgTfstNDbtAx2nSA2JfQYgWGyq4R6zXcdBigCzeR48dv9ojpG9BSrn8UzXvKWkAMfcHWHYBErcM2UDB4",
  "key10": "548oV8ndSsuvRdyAcYyRtfaWb5ow5Y46Aopp67w9gCY8NxRRoUmY5MNJKTYEsf3ns9A8cLD5DcXSC2WeebrxnChj",
  "key11": "4sZzmia6Y3RYp4s7xRub8khVomFkFyVVqtokGyigiCnjixDC4uFjEJ9fcUXRMyE7B7EsVckvdFHhgvDB4iMpaM5Y",
  "key12": "45DVnVW4hWmdYDveToRtmr5LuXYyyRvJgz5RhgVTxKdbtuzuvbsS3YyyorSdHAS3nqTMy3V7rm4qhwbjazBnZof7",
  "key13": "2mcktMipXtxBFhRuTNHNnRQYMf8ED4UKLXYmQKDreJuC8qxBVwntki2y6aScE1MafRQwx4HvJqUXjdh995DWTNLa",
  "key14": "hZRtY93Kb6bb3U8zw2Z1UNd9BcMj6MNcLN9tTMfP5Bum28xgnEubgxRKuJg2KzQqj6mjNZQ3bvZmDVQqqEEg2hA",
  "key15": "4K48LHvE6mpBkb4oN3wUsbnMvL4p74cSd1DCs9aTCdBFbxf9Uz8ZPqMVNsJnFGVAa6Xrxown4YbEyzNLST1qCGQR",
  "key16": "m3v2F5xP1Aw6V1My1xyi39qkfuypCtbsJ1T1JYn112sT1FWt1DZaQGrHgaBz9pwB3UyQmimo8bc573GAtaatARZ",
  "key17": "2w9qZ25M3Xfy89pAJQJqUfu3d57CqFQwmzvHEeVkT9UjBXY7nq1e8oLyXknB4vNS2jymhYBBQ52yKxfyt6Zn1mvN",
  "key18": "jrRxyciTJjwyQGevAM4Ksoqu1eQEy3dAZUv92bthG8p5G6XVCSXQb8tDKn511tk5wU86vkzqJKQnvFyDe6Kot3z",
  "key19": "boJrtZgXYaHdCojgEuptjBj2Jx5ZNfHQ4UoJ49TR5RCQM4oX7txU2BgKw4WftnM2GsNRLCvVCcaZCbZTNyHqy1t",
  "key20": "36QeoogL5aKQ93FgD3vCACb6nTheyxBureDcATG9jpE1osxJoTesMsxTgcQ3D2xEddP6PQoSaroM4R6GkMLUSj63",
  "key21": "2hD8cNqB3AJHZKfT1D2F89ffxzDvBRWrfvL8P6dVnJ61rjQeB2cXxup47wivPhAs9LgHjKDWTkw4LS8iFNsaQHaS",
  "key22": "j9Ky7Y5FDVgKzBbpyvmRAeHhCw3c7Usyi58MMeqbEiLU9AF1Xodw236XqYkTVUmgSTdHXSRdMbf8RVv8jYhvw2p",
  "key23": "4eTztJsV5UCCGM1dk4HKZPkaDTVspDDNua9AexrLdmbGQZD6TusHxkv1mXCrabgcMuf7YrpdDrGJEiuBt8gtQJqz",
  "key24": "cUuonwMNZ1nUkD974BwxqLQKqHQfy9AW354HuNEGybjgEzLcEZ4JF1YUcv3Vy1zr3AZfRNPvUrmCcJ5PoScvRxv",
  "key25": "2zaZioNUge6KS94fPCmk2q7pAurx9FDRF18b9Zh5rsQcLE42BMggjQbRSro2Xdw8kDKUUMjUwjFuQpXNi3kGgjuZ",
  "key26": "9mFb95eQPrvweE9KtHnWwnqQC3uNL2tpGVGoRWG4QhAkeGoMhrkAKnvER95ctUArGTNCW4BfDFuhH5J8RGvEGZW",
  "key27": "4MW9a6Hd4fiT2LjF8MNgXpeLxw5QeevZ9i3K8o3FQNgXXfkWncwB9v9bhNRYREX3hgojNUWntqMwzFRwDFsZ4J5r",
  "key28": "39ZjcXtSaANwU5tzpzVbGKvurvwcGX7PKj5dgNGwXPuB7QkmywAqhZPAPr3v25oALFuQT7QdwrpWtCe96ogwzuGy",
  "key29": "4xD8CFbZaRajKYpLA7DswYVujXtE9mgZGouXW764d7cCQ2HQLX9xEuqgWojMKfb3zHrxZ8fWinsm9W9NdiYscStt",
  "key30": "2VpwVNwMVa8THqZafiGqdQnMduqN5TKG4WLqw2HyYJKrqzsYbzY4KaNooUyb5wWpsVsQ8ukMkRWFW19cNScdNgxb",
  "key31": "4bktV4PK6yJMCfz4s7NXwbffEt4H5gvt9BzTwxVgMYSHNPkXdN8NBJNNoMJiQdJdCi8MeWNf7W9T9c8TvgZMr5Wp",
  "key32": "Rhr1JV2ZkP3SYCsP74vKKQSfdruWoT1WchM8F9pnAFtCduS5kJTqujLuA9PrtPm53SqQ4YVV7mLkxaDtiwXmVfH",
  "key33": "2HjCurpNPAkSffLuGd7P2kbD87CMuTwMJfrEnHACXE66cWET1YXv83W6s7Lu3yKTtUfgzuBdqcjRybw3MTwm14Pf",
  "key34": "5721haYcBipHFfbKwvsipRH6JL64nkEmtbQZUhD7aqNk44aqbrhRd4sVCaHFhrtMkZgBjmW42MaRSTFpsD3geDpj",
  "key35": "4SC3AihgRCGpLY4gtmJz22i7croHMrh1HSivmxpdu3e1qFgp8KsmR4hDujMhNykz9CGujXyJFhM3HS4RdGhCTMMN",
  "key36": "5TfKhhZdJsi8mNt4zBKjZBFz4ELxjR1a63Gv46xWuBLEnSH6oFbBy7MiiacqjpfNMnnMaHPt8uMv8gvXUMy92xn9",
  "key37": "65CXwWUqVfLTRxKbH4WTwPfmW6WdX4zf46eM9LUq2hxeqJVjDbfRzdSFKJCeZqgXPrYZzszDjGKvTr1aW4vsTuJK",
  "key38": "nNxLheQz1YZMvYKbShF78PK1RjMejYKYdeVRfH2ihRjeHn8wSjMbXEitxU6tUJRRERb239td2ZBonvdeP3vs7DR",
  "key39": "4Wc7sFp9NYRBSycjwCXT76QLDbxLHXddLgooq37T1BAAe89fMh3Y3SZQutFxAAovex3hucWMzrU6JQrTzwwBNB8E",
  "key40": "1b6xekYCAGw1PmUix4ixGZir7oFkvjZdgK9FKb4nCXUic5mnWZ2pXnCazyvGHfRGaFBDhy75pyp7jcA8LkkKnUo",
  "key41": "ZNjeFzfCUN56cciFvNAaUhB4QrB1Hf8S3rsuyGUwVyTZsu9Wn3ZDjDEn76DjXyDa9vhXCdDaHFstNgfZTb4vE7r",
  "key42": "4vQJe76pwScfN8xdVvcimZkHAjSj8rrwNTsGYFZE7JS8bjBusnSjD7LfZ8d43mswmcYt91QV3KmTRZnvz1XPKQTQ",
  "key43": "zyD71pmLccww5k8LWWGuRkSfA7kZbqUtHR7JtgYvkMTdrucP796XzPqVWmoFRVadMTjeQMzZuV8n9ZKDkSFAnzC",
  "key44": "3zEhFPfFaiqarTN2opbdYKdKsM88ampszExUdnwUyWQeRPepj6EMwNweuGoNyLGosWuGSsopF64cuNKCYV5XYWYa",
  "key45": "2ansMahEJy8icRceYs8FFAothEtyThMXBPHTRVYEzYYS6pMiENiHXixR7Xv4UaqL3RzQmrymFHCAR2ZtCDSQpq5j"
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
