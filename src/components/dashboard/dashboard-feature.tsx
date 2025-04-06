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
    "5XzojaPfVBaEo4MhGsSJGGAbHNitQ5npLZgrFUp5gyZ4GAywnLpL8w5E3zQ82c9gKcTjarW4KRtiPKTyS1bBeDJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mEeeywBsg2JvFSEbCQFvkFn3zTUJy4EwJ7LfrPZBWtXGAd4Cwr9o1ZVBVxE2fVC5biYp5WD1v5ongg2ijmu9iGp",
  "key1": "3m7XdyZTPwLoARfBxRbZdVN8bq8fWi3h7W576Dueh6JripsFPCkNNcjeNWTns8QD33uDiWxTQXQtDxZAdmpSdQYV",
  "key2": "4bcEeL5JZdUWMg9D6SbpAxpxTcLDxX7mDrdUk1Zq5s9xaoTtTnVCTHmdPkkN7xds2iqTqks5ArmB8QZiW8UYDSBs",
  "key3": "3GDWmeRD7fhKSUEpDNLNneZAHyYiiFRRSdqebuv4CPxND7shwCxD7L4JQtRb2thVaDoCuNAigxfthvd6DHj3R9k5",
  "key4": "2tBHLJ8a7uR2BnXhBWXVoSw15mPM8NJxy9PsUHd6LBGkYr9Jrefy8gMUsriU4s2zxkStuCnmQEabrTeigFXKH9U5",
  "key5": "nJpFXvWxDMWBKNQWTPTVgyGcrrLXKdxMdtHdMFSjRfjtDxCoipz47k6nqKeNJjaoSGxLQYDkYAfsafpkWprfQou",
  "key6": "5FRYDM7iYNtXSPe4x6SejLWy8GjawceahajBut4NHhNoTL1iUiY8tpW3JBopDFWazqc84pzQFQMNjXwz5k8oVss9",
  "key7": "3xuAC1RJ1bMAK4qtRF4rVYRDppSWHkfMHT55qdAx1wQzEHKYBvfeucgi9KMkzZxGcvsBEh5b9d6m9qyRAQzhgj1K",
  "key8": "56dZcwrwzceNmu1V9vpKHnzRowpJojo6aVs6xSASWkDNaL9sdy17KHcXtRB7juLcXBhUG5ZExTu7LEKMUCPKr2mH",
  "key9": "5StS4Y2ZkKbr1FmQE5kA2GyM2wnW1aG8YuEpkpWhQvLgNDDvayo2uPbvVtGJCPKDiWACsGhXNah1MMUfAvKQyMcF",
  "key10": "5xGFdHFY98nHquTMxxtXyvaHTFhHsrDQ9miakYnQU23zSXci316GU25qwqg7CJF4yw3JAD9hnG9UxWeWZRm6yBbA",
  "key11": "RqvUfg9uqqvgx13Q9sATH9emLq6w2kSbyg8XkfeNQRyWyAKmSuDTKWH4LEJYSFo8kKKQFzJmhgbp43jVvWuFTGo",
  "key12": "5UkWrp8QUiVUoJQo6ZQo6tydcYHw7Z9NFQCsyjpMtcMQ9AzCaKvg4c1jTHr8s1VsPsGuKf4cUUL1XkRTo5XD4VSd",
  "key13": "5w52aEpXV5FRJPxq51UBMqMVrKDQifBYtQh5z2fWbpuNb9PeAt4Ui6U1VAf2s3JuGwJmCDttbxmbYgbjgVRhb95e",
  "key14": "5F7bNcWRvehYPcDDrVZfaDuFkZ17mAJV4UC45FMXryC8Zb3S7vJHxoL59DSa9MR4MzmBYPHovowqYTQuQwGqnkEJ",
  "key15": "4mo33hWAsrKs1NsdeMC3LqntQNyfjSDWTCxTf6k8iyn4TZFWaUW7Saw2xshvXCr1jPHDYo2JQPSQ7QdNDPq2hh5K",
  "key16": "67MEX9JT1HaBAqxzRtZkYaCTQpvRXFYmnFeYQpmLWBV84gcnTswFG5M14bWrVLgQq1BS4G9BHsgP3BhQzNiDcSfz",
  "key17": "WSQ7zw3qFvTXQWuyeFZAdph1y5hMKQxdkQPrr5kZgXoriNUDLJAEVCuMvexqgrF2vSwLYDtNhTyQwU28Dt6W5jV",
  "key18": "5JxTQMSDufjvFubr9W48VmASKkHzKvax5c7uRUVfidanBfGpmSpSy8MygK9XaxFW1gDcU28ErgHeR5P5hm99au94",
  "key19": "67M4Li4J7DfLRjaSRTBTvK7baAuL67Sen7DdU9s5aynhfxSz5shfByWN9b8csr9YaC2YPCzMMR3gG7GVsJhggpoE",
  "key20": "2fbtx8m6F5Z6N4Xee9rcKEjLeM3Eox5HYpNj8joAAnBwZX6CEM38ooNDdbVpbZQtN49zuD4T1HT5ykVg3RVVWyp1",
  "key21": "5hYnVruNKM3n7o5JmamE9A6bFRbzuRDEMhHFnt16t2L63BnDYD6FvUv9zwSZsnnmvtWQwnaYGBEjAfZMzKLyQino",
  "key22": "5ryy1YcFgAry3KWCS9H1E8HKByTysbwduGct33phpmscj15M8kQ4dP56rU8KMBfXHGVbV2omsNsXjffZs2rW2jfq",
  "key23": "xmYB4VatwgS7WezrS2UbbV49WJ7RV8Uui7edY1HdskNifxexCyu7DRgUFbobuUZFSoZ25XLxeujd1obAqfAQmgz",
  "key24": "2WQAKF1tFwYPM3Pw47KUDxm9yaPGRb8Ez9ibSHPsLy4E85WztULti4tBjQnnYaN9xKnTktz9ZxqsWkUDMTGCWa5X",
  "key25": "5dCGXTHNq4mEk4Btnk2wZ2z6Wpyq2CCd61HSwPDjFERxy55MyzYvBdRBZ7KfnRwxCEYeBkAYULQi4vFkqPdgTf9R",
  "key26": "2pfQnMjsD4wcLtD1Cq3agBCdEFmjWpVg8uAYDMPdAAZW7Ay1FxZAWePS4L88Mc2dnk1gUNabmj4fb8hdcanwB3Ug",
  "key27": "4zCWM7Usc7KyQeBCmTtN5iggxcf4UiCnRBHvgVr4qRf2YLWcMDXNQ8iYsxV9pnNKV73Z3DoMUZAXtFR6mZPda2n8",
  "key28": "4qCSkS3ofi6rbLr924LYy9muKiWgYPxgKBXGiq26NoXjnCLxQtXFaWEuk4nrPP9sniE8t8TPEfuTZ3JDbjbghCgG",
  "key29": "smMJzHzt8gUq5TUZis8Htwk7NfsuFWzw1FKmv5u5sZFZYirUgEKjsyykP58ScvYbuRTNH2WxHQ795K1w9os2kVD",
  "key30": "2xTkUdxeikfGzX2HSsthwz2WAaheVncezDHQV8NVdpB9Q5DmZGhapxLpN6KoBVpG6DHrRWSykCubKCrYqdSnj1gh",
  "key31": "5QSbHe581d4fe2S9WcDE3eJDvZnuGnMQ2iZEiY88zfQpKM2zEWm9AxaNAbnoPdKM12ui8d3hXGyX6BErciJNughM",
  "key32": "2jix7vS4VDFhYf4zpR2kGQxt47LucMWXVMPkC8xnYxGu62dZBpNqbjzNG3BhXbBQde4SSkpeLoivmKWqeRSnHGc2",
  "key33": "5DY1RcAWKUyFtqkJf4cLqiHpWggBQ9CxJrUHysDxwRfPygN15taQL3xwjQ45tZY9cXwfjkEsMAF9KEj56dhGP78a"
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
