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
    "3YgznQnCe38xfUYPqqzaFaAqGe9Q8sTWLgGxuiwc4PDdAFkqKTSDG6vbjsdqT7uUMptpU2FCrmLEMovmywHLfoGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRnrsh2WJnv7x7P4gXnzHDYYPw3kUan4GgVmoqN7Apv6EnBTCrK4kWvsuzszxKLHS3PRNe71uQoKz1DqKksDHMF",
  "key1": "2VnyEYZRPK9zgQoNkXo8Mw6FibD8GVkooTccBN5x4n3tfx3hjDGxLwq5cDiV7ZVAeWuTwZevCD18UMKnFLDwj61e",
  "key2": "UL9oCBrYWoRLCsrUBacV9DLyWUQmp3WwMi51tZJcb84iqKmDAu17SaLXE6BKzGoJ53RcvZA7B4UdEUWAGvar4Cb",
  "key3": "SSZeZ5KwiEg9JzZmpYngfCrEkBykZF6jdGPJxrazQwMoQ9RKiCnggqEV6sJ1BpfES9yM5Bq1reooZNpuC59djaj",
  "key4": "3MRQz5jWbNumu9GdNAZ55ymDq5tr3b4p7ixkUCAnCYqCEZMcHv6fRG3ydgiXCx4B9CSr97Ug74bZZUknCotogZYU",
  "key5": "4GD8FwZaP15cAJvyVirayWWQZwBeZNnyaJauyfguV7r7SQLv9kW1MF3wVp4y6fGZbLB4wS9a3TTTfnnFuuFZxwM9",
  "key6": "3sKMrjBiTPpynUoGR618dcHcsksNR4FuLiiiceQ4WjmPjYCzJ6HBQ6uR3PdHYt7Ar3tJG6n2rwxU6bzCT817hSK2",
  "key7": "XM4UinVDgrQg5LFuak6gq7JrbJ4jZvdVYaKHRdw8REfFPggP1xmTpLYPYdadCzfNqLggshLo3wZrDkt89RW2DMY",
  "key8": "GrgeMgTp7sapWSHfkp8GY4CTFwc6S7GhZCdgCPZyqUUUKc2AzWLazr6BtoWgGXe52iMBo6Fi7BG4TUqP8neNMSp",
  "key9": "5xDRzZ1tzbpmhNjuWc8sDdt88eHJQuHxqDXB5k7hpxd9JXoaKBKynSXEYJcZwUMsS5XuRyJfHZicp6xBqZtydxdy",
  "key10": "3rYzZaf69PcTp8FQo3jJtCpAQXfKQiGo2cVUwPasVUCvxJYdEJbRRDywen77RLVWYGFWchGjVuWw2UiCUNgKxtky",
  "key11": "67ojYnTK1P4zWXjhXPU8hQoXsgbVBmHpeCqzu6D1J24vnJhrgW2FRHi7VgPzQBTCT5SazzCUDmMzfm1rCSZWjFGo",
  "key12": "3yJmds7ifFpGLkcuUUy4Y36Nh5sRdyQDGdTXtjN4A1izpoR6JcHbBYkMQwpg5426fMU734dBgtRaMSYAGh2NBfGD",
  "key13": "2oJxr6Bmdu63Vi49i7cJiUbpSXcwrFuVf6gGic9LRxrkU5DGLWCqEbj2UhEBgL9FCyBjtbbYvcDqB6V2EjC1brVo",
  "key14": "2cgVZMhG6DMK4B7fH5RURjFy9SC7ZBWrwL9BD57Q8w713tGcdZkARi1gyzqtwZE1wAaMJsBb2hWHfffWXYSdeBUr",
  "key15": "5o719fowYoJFtrknLsBT1Ua7izfyXoyW6bTr7XHdPw41C7wYt9R8QmcLrD9ZxVdMY7T3Jcrvs9Gaj4HDK4EBfBZY",
  "key16": "3FajSiw7TLe6yvSN8WY6NSAP5kjEGYQ649CkuWR6WHJLhQzVAMchQ1FfRsrQp7kXT3WfrVgYmnX3GsHBv85dRNLd",
  "key17": "5NZyAQfPrJ5maG7x4ebKLyeoMoV56FAzUbs62dVmpjAEKbpbYseCy9gChb2p1ExH3y9J6APuF8dAPYJQeMvpdRUm",
  "key18": "54qsqBYtPdNDcZQ1Ji6TAaCprrZMsT4fgHDVJ6nmH85tRvzjKe9CS1qMg39d5wqJT8fhZNpQxLFsEJ2Ujxp4NLdt",
  "key19": "3ALVAwxoxHC7gCSWDTWs2bPAAyuxHEaXbtokghTsfrjsVfsrVwh4CNKCUF8EPBocL7ZpsutoTwAyL2tTo2z6xGqs",
  "key20": "1Lj6HMrjZ1YEvVQ3WMsJw9qytyCLYUfi8fLyrJoaEJWoUUsk8JWRQi66PvC1WQiJqncfRAbEBUymVB5SjXCVaSk",
  "key21": "66dFN7qZ7rUAAiTQLJRUCaXBuaT6JE8AwXjPz5b6LbkRKRDPyGtc9Jd2pXbCx5UXjPk6hgpJF56pWE6RfVGaM8QA",
  "key22": "3pqPoReCsk5CvLabVSkTF3rMr2phhgujrifwF4ovvcFLG2yD8Yjpzs6nPhqZCZiEhHcspHfhjUYH2LR2wtAKvNj2",
  "key23": "5JwFKgadArAWgrctjgioFijCp3mS3hWFcdM5Xv3v5PaWBexZMW5BwJSkE5QZ1TaNosrRXj4qDWfrJT4BatA1tR3Q",
  "key24": "3UqT3PNgRMvQ3Ztc1iiMz41EbhcsFm8gqFC5uFZ22Vnb8suiZVnHFpcwN4sxBxV8DVYjcZQErwxmPQ8azeGkmf69",
  "key25": "RUiSXtSUh1dJRp1ZFkTtJmpaTib65xgate9JgtRYzU2eVRbYf6CDGk5G2PpZpSGoKCh7F2Kk4ztKFzyiVwpG5Ya",
  "key26": "sRphmMwYiBuPrhKdx55ChMi47XpfnJ31YRNQtZJ52G86ih7uNXWzF44toH4tfbEM3HQ6GfPbYw7QMhi5fFTF1MG",
  "key27": "5oohfky3AZzUdCPkPRW9cmXVtVCHUp7LqJSvJ92LX21LMShmF4eKs34SPwZz12pqCSNw5gvVTR7LnFRV6YKdhAGP",
  "key28": "Y9YT4TVfsTU5ejybCJRvtKpeX3RL5EuRaeL2dxNWFCix3gPgg4xApvq1RpZkYYQxrXbsTFdMtNVu299KfakcGGh",
  "key29": "BQTQkuAKXo1EjfWgxkYAfuyhKGXpUYbaREhgzkGJkMMy2CgW5YgJ4B5NEC5ty6JbueiqrPj7rFTAMPzYBEX2eLj",
  "key30": "e2Z1J3PmTCNbBGtsa5s5LLGpVAr18fbT2XfwP3cxAXPD6u7Bj8mRYMjqU5eiYKxvWrJmdGcFTUHVUeHTcMwqpYF",
  "key31": "2ZKwfLGafNubCsZnYVBkVYHi6xwDxAa1FZUWWMhAzvdDognn7hXNBUyhS1Uow4SaJinFWrUCarWnMEr5AAPFzf3N",
  "key32": "XtY2q1Sh2hSFfvkqUoejDn8fa2tVz2umCaa4bf4JZWH6GcdHs8YdVuZ5XtjeqqMYtjZH2dfQqmrSdAmT8UmqXbp",
  "key33": "5Kf1sCzqDs3M7t8TiSJbSLM8HH7YRrYSo7ksP2JpGyF2egkocYuyvBBWPsV5EU7Fg73MHyS99Gh2HZSR3xwfKamz",
  "key34": "2soqFWuLuKKKyn5kyP7r5pYsps3L36zdQMEgiNWfFo7oocxJFYY1aSLwDmfQzcBgrJ9BSj5HYbpDgVESdE5CF1t6",
  "key35": "5CQfYZcbfBxeUnWpBCYMf4qsDsYKvM4Ctztne1SY3SHfVTtjCw7WY4bdELqK1kNBYuj38gxMLxjxvX1K3oJ3mZMR",
  "key36": "4YtyN9M122tQjUH7oTdaVwgMdnGhPQZz4Wn49zBbuw7JjJtQAdS44iojSPFcfc5vi1jTuvvEzAvxV6qKtW2Hsxu8",
  "key37": "3QXzE9iQqGGpSvq4Urp6dkwuAukiMB1DaNpaMVKx6nvX1ZhX5GrKhY1xrbS7g4AZTeieRy9yvHJbFBLCv79Ha317",
  "key38": "eLSgzMm9aCpWTb9rzcH8Q8yWV39UcRsLdAV22up6GmDrhVWihL1DSefsB1T1DiLFjJRGGtC5XvcbdXqhcHU3qm6",
  "key39": "4Hoz4gcv5LLpQUtxiGgBkFEHF7yeNLCVWSpscaEexczYzxk54ANwJFHcW1EBnCB745fJE7rWXkneahJKzqiYWeeD",
  "key40": "313PwsMVuT7wb1a1Hy5UYD6dDLfPKubsNb22qDRS3HQwKGz9bzdUXTv4Ss2z28uU9XoLUfdhQZBK6SkzHEjN3A94"
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
