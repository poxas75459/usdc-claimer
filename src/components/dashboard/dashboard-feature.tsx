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
    "4B4CT3BdT8kbiWZtTkFtxBnqYAQUsqAhEgheSZgMBxJ31BpbftPHEG2so2RQfFCfqyntEwyDGYXubMwikBez35mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTJDW7nkUts21DWF21QHoKTEmTBV8EqhVPqBokBFudQWVepgz1npLCNw88AYqL7rwMDhaBYgDtYiditC4Lm7m3w",
  "key1": "3XMTyd2HJdpaQ3CejDqWwQoyARbSFytfVvKbGpdsdCqtLZjpXq9d1guEhvfk89KeASRWLFLabutBcyHueoykSfCP",
  "key2": "3W9Edtxrz3dvbGQ3w3F5VWbarRu6efs91jTwZaCBuRsz5ThSHUFzzUtwadoehcaT4y8iZqQjKfo2Uhwc5L1q1fBn",
  "key3": "5mtewSyL2dVKqNdRMDfR2Yi15UnFLn3UWfSR6ADQqnqXhjGfaUxtsi2kKfthrTj6FEZFAjKKQw6zu76du5SmxXvX",
  "key4": "275GNwvUNXUHsHYSs1pnMBNyDaz7F6Bcwe47ia26NarR9JQabMYCnJJhDBHRLouJb1W4JvXrLQCuKGSdm6oHVVhh",
  "key5": "33xHD3Ztx2yEurzJfNo2o7RdyS9eQchzWeim1vH7DcXJsXcLRatp1DJgHPfL5divYYSxQdZu2gWXZA7Gqm2wqaHG",
  "key6": "5aB6GMLjtGgCyGxKVjYK3fDZPoofSC4kLW6jzdZ54QxiKXLtKR9FydEfHV9fCQy7Gtqt4kSHgRMdY8XmhUf3NHWo",
  "key7": "4Nk197L2QmaBvNzsBomW1HMpHoopqGUASeT6RvJKTdkB3mJzFYP9wBHQAs11BGtvLYaBpJU62qR9MStGP6DU93yN",
  "key8": "M4EfFfGSnkqRc5n8TEWq1ZhnfRgv3VyjzpLCz5rA7jrGB5HUCVkC6BaLqyRJR2jV1P7idLxceNAwvfDzSvQWHxT",
  "key9": "35q2p6A653Sf68YkZwmQf527tPgvdJAx52KeqqojVsHTx1r7S63dmXfj8Lf98AdR3cDJACioLWZQsrcLtiBM82xU",
  "key10": "5GNNVP3AwfRLyqUmcE8JaJuLPwxkQ78iNfeoCLfvC4awH4oRaFKh3VZAiLQGjwhLSXoLe3ea8k8PrL4FQzdxcncF",
  "key11": "5mKNpxYXaaFNLLDKMHhJu2nFYaThAp1syFfnQseUPmYhEteXWUsdg4fchoqzixwUpP5AHag6sxobvFysTRYPPbfx",
  "key12": "4dTHbX7Pxzdtt1KBkHZKaMQBsoh1wBzWaV43A1HirPVQxzdshyc9YC1wpw6H31R62jjsE1zAZYAofe54Lhwd9cwU",
  "key13": "8xDxcgKx1EaWyxcZedeNrQwxjSB8At358FTNSP5gsqQNQxqbp7XNj3MJzzNFhKCZ1uMn7PipisMMRZS9wEAWXDe",
  "key14": "32hgTLk83Gr7PLBRmkP45dHXdb3eKG6LXhUT8JgSdq1qb4B7wCKSQF5ET3sMjJWJKq3wZYRCtSehDnuJFyVxHLqn",
  "key15": "2TeDGzutRExC9uAz5UtYvPM8bTjb4xZHpPHLd8D9mZnKWkk2duhLstT3Xiw36ok3Z2yHYSu3bxuZQ49kdzKetyfL",
  "key16": "3kbHuFspdmDjRsfiJhXQ9R32LsdvM9E6xphsjDGkpFuz8BnYKDp8GmvkZMhtCL5SUPwxPPKDxfrjvmXmwfvR8hZC",
  "key17": "2JrEUf4uqbsP9uLpwqqomB9yu2W8J7HNAi5LKndrp3Lb9PfXuoXPoGip9bfPnYKZd9xC7N5EJ1XCzbatEp3Mrpfn",
  "key18": "JQX1Jw3iKRNLkxr2BPzjpAkQD4E2Gb3FNFQczsKhXuFwYHnPzba4twQN8vFzd2dLs4En8FdsEL986mhJ4JD8KQ5",
  "key19": "3CRcJYeTsxb9DF8FteGSYjhgxQMdUvVTrKQLLGQQmJK6VLnTDrhUMmAAJeoShz9c8qfuYQDJp5MtsTDKUW8NrGxF",
  "key20": "kXKHCdzcsbwkwUr77CadXXXhQdTfvcPE4PEv3Aief7MU7dwuzBQaicq2LYUYNMygiCBRVquiXKbk4Lx6zYhT4mW",
  "key21": "2cGCwauDqoMWrpq61gkptM823nemjz9CELNsPiDpjFiiWGxykeq5G4QHVhfNgG8CLaCS1twM1x5ZTKgTosydDMxu",
  "key22": "4Xr8zCGDu8b8yiRrsJgEZk5M7REbb9gvNiXCT744osmXvGP2XQRCdmmSybsn88gZDU8EL96QNq2V5AwPiynRZYMc",
  "key23": "vNMJWWzDTKof4kKZz1HQhHRnxdEoycMSQkjGLtqp5ZhxYnzpg8TFEtfNbV1RHStR2e2ZzWh7tq4JJE9WuKtu6dd",
  "key24": "4aadiLyzFo9hDmKmgzA9fa2QuLmUPr8ST73bcxPZYWC62N1oLUoePaVCuZr6GLovgLceJNcKXwJxT4Y99aDazcd1",
  "key25": "3WSxxqTDbqxLiRKdt2PdDexG5iuFLGB74ok1WdGQtjMN5FKCtQhkc9LTop6eJzkiEGCs6W6WXm1pkFmvNAgnx2G6",
  "key26": "39ZU96umVe5FVEJ4RaqSaf9HGDMANJqmfpqVmubpFJh5cL1h5n6F89W2JeNRfJ3nVpqqqeCASBWbZ6nbsYQzKtAA",
  "key27": "3tENmtga554RtqBtgqqjw8ZVk7fWj7MKcM9hWUNEw7ptnewxWDfMEvq2pjdhSpCxoy3qGEHt7NEzvMVfRAznyzWD",
  "key28": "61dgSRuUQEoq6m1gmN82vx221XiJ4AB41HoPGWVYk2ji3eU2oAvZfzQg26ScmLULpPCKU7WrsCZZHre9gzsCehB5",
  "key29": "2RXedyEUDZY8u2ndkb2aHM5vB7wVwLnCHTTj8rUXEuoKeMeM5oMoVrpjBFvNm1o3HRierHYXr3vQPqRDxWGGGV6b",
  "key30": "3miyFRsy5CWzvaGxtU6yDY7jg85nXB18LQB9uY6Tf4dtWLEnqkrmHVP4e81KJVEwoJzQucJnqFepGJhDX8LH263r",
  "key31": "4smJdzAetxA9eZ9DBu7BdqGR49Hv6WCo8D7sh5mgrNVpUXKv7hBxh6fVHguNZrGVApotHtPzTzwP7bwZSdGf2Nf1",
  "key32": "5ZCRjKiruGVnMc86p8fWzTcdjf26h8dUYWQa6WTagiTzFu13zdqZpgeGYn5FXqGXDfJY1uPzrNEBxZDnFouPr5Yj",
  "key33": "x2XHbn7Avb11cyedki2xpNFxncenzgs6PFUaMAH3R7z7D6W3iz6W7WjpfMvD71nC8okNv8xRMSMbwKXA1fm7Bgq",
  "key34": "2q8K6kKczsjYhztiesYFqXrX7NVskSCvEJj1WFCTioZG7syKpLdcMc1CxErVPBU3zsKqavnrjNwTFzxyWNcJD5Se"
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
