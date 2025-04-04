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
    "3anszzGvuSWP8Mexj14tFf9dqyuaNVANpWoerLxipQa74tWb5o7mLmCKwwJKzryyC5CzkN2HHAHNzTgqdso1znZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFVbsXgo9EW7VAGQDapTp3qYGSsvnWE6esjLos3fSdLRubLB67aP6TMm4yRBGXpWsBsWxGueR7XRGJDtKEKtCD6",
  "key1": "66kWRFaGNKgR3FhKwHWePy2LtAqPGVpjjiRtgffe4oWWnE1X4RgRnxPyX46g7ge8dv9NKFCybquqnvgtjabkvSHN",
  "key2": "4AxdzFgN4BNN2qDTeb8qVg7JCDXjFvcft5bKWJzeGP5v9mvj1k5aJF4cWSYi98cXovSwGWs551TjwS2KokPyHGEC",
  "key3": "n1G4ACvU1rAKrMhn6SNgA5cpjrq9NBz5XVd9f8SLJpPvTkPU6zeLwARf5rQ3vMvfBVqx2MLLoGroKZZobSaus4o",
  "key4": "2HfNXtym2P29eFyqMrbVfHbDqsBf1pE7FBw3yCDY617rBkjjzkgBAoW9WzwaZ2ZmwXdk5vQaiDaNx9NFbBn2Gdyb",
  "key5": "5Y6BTi3ju7CXR52ANHPFRHdnDG6KuaxRZArjwqH2ZdHTm6unKnr5JvByemkgtvK2upPsLYhqWu2MQgqjwQyV1red",
  "key6": "2MsRrz47WDWsTZnkag1CZgcHXuB82EA3nqPtrFLRdcgtKtj3WY7YkRHvYoRb8b3XM3sV1zbV1WFizxd86HJpf2V8",
  "key7": "544WnKrHCnzpqghdbQuTViQa9bKLpwf56SjQLvdznj3JpkSW8VYj34WNzb6qRbmF3jGunmZbtg8rASwh81LX8tMJ",
  "key8": "4PmpZWH6N62tU1czptY3gaPQxbKgMo2fyNbQa5ZpHMAKu6NJ2NYEwWdC45o7v86Bz3dECydEJkDZb8tZ1rvrjR3M",
  "key9": "5o3rLZTWAtsugULajSq9j9Z7fUxCTcSKN2sYJJN7qkUhViioL1HoYrQx7jEWMk4rt1kRrb4J59FTskYdYoAeAjYj",
  "key10": "5ducyFGzNChwrt5yVEkJoeLbZDZTz7J3k97NUG3oiPdnZj8cKEGZYPECpgShfvMQALA8QPvvqDk59GgaBUtMD4FJ",
  "key11": "4ec4oPPWU28Lue7SkHkadQwDLXuXD7p9Kgi34xfetB5SEKrbjGp9gNjCqcU8Wqss6qnnH1nj3NU2iJaqE7JEVH5A",
  "key12": "2tcC7bzvHMWjKSy2sBuYaCgFfbMCET9C6LsmTyrspYWQE7Hw912t5DdShHz4sQ77kELNnjGQBQJBabiTCES97Wpg",
  "key13": "63kwwaFM31MK9h3uV3e4ByjtcLCFAgwBSTdKEAQT5LP7aXjoAZZVJzV1F4SXzA2DhNkvyP7ypLNqkvVJqCu2fDxt",
  "key14": "24mZQ35d4V5RKQQ4RAvEs3QQkUfLnYHFPvEay5gip3mueG2YjnkPQXcZSrS1NWLwVhQGwAx5uezANxRphn34FgtB",
  "key15": "5eN1D3jJ2HrmiJZXt5qpYpL54Nx4cRP4etQZ3SKMmGTUkqox2uKT9DCh8MebWNsN4W9LTpb7qWsA6sfBdyynYKNA",
  "key16": "53EbrbMFznKBJxHLMZxBaEbGNyvcx7917cj97GzNQFc85md2chePict1ZmBRzoRKttRTcCeywt7r5Y7eMcxwpefT",
  "key17": "3gF1QekrzBBJXziWeorhjvo9t6N4kncjEVzK56bNjtHF7GpbQ4ven5pj5LsYt7Zds9G9NEftT174cg8vLtSjCfs2",
  "key18": "4R7qJeifxE747eKf6iaaGdKx7txR6L1RGcdCTFWr6GfFdRsR7zp5HyanJdbUtNeoDyYG8G9GM7FbALznSii3VEsk",
  "key19": "5hDCN9WT6pHMsMJyMsMShkxCmabqmfL9MecNzbMXsA8L4aLhj9hxU8bqZ5sEycpGp1LEoK8bnEGH6ECd1p97TAHT",
  "key20": "3AfwXvo2JT4A8XhFvTxT4qZWuG1atue98XVY2fair284qTqdvxAjaEFv5zpfdQWQnYvZaQpeVNGxaKGgoWirtBc6",
  "key21": "2ydDaw3u5JzvN2A8jE9FHdXnfP1Fo6mpDLQq5pexQfgJphCo9bCdkSD8MK6usnGCBNkWAbvZCwBryT4C6SxB7T4H",
  "key22": "5fhFwe9HWEdxLzAhvEgDi9qQh7hCCPrWusxF2mWykS1c8xy6hcDn2zTo3foB81jo8nE9doBQrxtQ5XjHgxkRbWCG",
  "key23": "2SFMnmTWt6TLHbK8VRjM6ev2jpqWZtfDdzkV8zDMT5tfHk3Nsq2jFw7ynYTHnbSuHPJbfeeAzsR1jWmJLhBdnQzA",
  "key24": "2yKsopNsWR6D8q68KV4Q78zFLXxK2aNzWw3DJjtTVd5pjYJ9JXHWw4xthXHXBYdtSNoDocyT5Pxk3NxZsk2VeDtw",
  "key25": "4zgmD95H4wY4QoDPajMp6V7mLb9mN5YSeWNjiKQYUfDgfJkkKgKk7RXFk5MzyJ6xUQ4cKPx3eFV1etKmfELuBbMe",
  "key26": "5xbuSBYPwg5wX29yDyXmVvnDNrtgfxZgPA2HNUAn8PKo57rSRCpnLMM16g8T7YvCPr1dH51XN5682U1hQ7tue1qK",
  "key27": "5XcBtzvprxT7prTBQ7ZkmhDbj2u3fwRcBtUy9A7h2mwAuMZtKnD3tVoCjgwupshQ8QBviPSuP3HpABsba3LFBTZz",
  "key28": "2tnYKthJwTxKeP6TCL9G6gJDyYPJ8mignWKL7SzUA5RvnnJW5mXQ6WBbAqz5jTJ9Rb6C3tu8hXg5HvWy6xLGtv2z",
  "key29": "3vpympvAxtdeysJPDUNYyx7QYeckdaYt8V8sp4BLfSTQjJEzpqkgZa9MUqKeKzAgvbrG8V4kTr9ND4JtxLS5rL1L",
  "key30": "5wvM9Hsm5x6dYswTREDj3Cm5BcZAWZqC6Q8tdC9WTQw3jYrhZfavvoqeKTASBNpkbhfBzB6PdZXhDe9R9yzBCn8H",
  "key31": "2jaj6Qfh8cTa6WvGPTutuiiv2E3btpEhPwoxTWbXhzcY7ukPk2s5dqdwUSoRuaLKD9M5reUXCpvnFbMPQ92b4L2e",
  "key32": "Kq3kXvSHQqCCE4kCJEgjnqrA44Adu1BM8ABJNgbuMyfapLr4FVJdU4hXPE7bF45Vt5u5TRCZCd6dgAz8KdJibdF",
  "key33": "57LfG4vSKizGE8Qv49Si19DsgB9ueMgv8u1Xg158BPu6a1aEhnN9vpU3sFQT7dzQ3UP4mjiZGi3m3p1N64JXGYDj",
  "key34": "383xZdjKfEgyYU671vySzvdNb8oqKPLky4gSXmnZ2WeFY74oCEuZY2MMbfpr1KdJuGQDGAhUYyJ9snEvjVQDcwqb",
  "key35": "35KY64deKJ5mLGBvsq98MUdA2sb6j9LTmqDskn8mMbXDgFiesMo5CUMs7KCGt9Y8yVWwuNea3G4Kn5rFG2r9HLDd",
  "key36": "5qJcHmFEtc3nA5uy2JQNXqfJkMzk785tf5QQPHNggKADsKSi6p1fvFhy1sLWok41P8FddE9p3koC4JJtTsbowbTV",
  "key37": "r6tUcjnSAG3hg4JPdipaVEcYjRuuu2mAYKQu1DFQLwD4BHmCNBKhuFqJLDedGch21soVYkG2NH9KMW2cahmuc9k",
  "key38": "4aA7g5m5w5ShHH3dR2g6XW6SgGgasTSJmPAVw7fEHMDwuS4TJxq6hE49FXquJQKWWcdmqEbP37z9b4CZz77CPxFJ"
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
