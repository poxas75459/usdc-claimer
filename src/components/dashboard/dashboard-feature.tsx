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
    "2FAAWYHckucEhJ9nk5gmjPseH77Ab9wGDYdZHDAP21GXzGSUj3qz14HMyfSdc4NScj6HVUdzSAS1eP6RM3qVk8nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGgme3gwE5A3Rc1wy3XgmcMKpuL8Y4ZqTwXLwWfiD3rWm1UprRKR8zAx1xMyEvRGJ8gNKfM6v4KjhRW1hbhxo7F",
  "key1": "2TEae1kkcSJJDTLdjnhGbELQ3iaoKfcaLpL1S2y66Uo4k4eJ1U4FvZmaHxejkFAiWASXUpTKQgwmJmudNRiMFFMb",
  "key2": "5pRMXyvFWkfRHkcybZXJT4gZQ7BkHi2PsNFUK57de1JSFMsbxJH2Ypze2E9druoiyk4caXLCTs3i4y3achFpBMZu",
  "key3": "2Jm1Sqo7kwkZMb23oBZQhBbyZcnebYDQGLAqhUJ7jQ8LE9xFQXe3ftqLS5VapSyS9rNrZ3ukDy6ksVRvRMGUsViC",
  "key4": "gap35u9yF5Uu8xxYbyZT5dsDcmmkwQsq7fbfgvGuMNTFfGWnY462AhhsxCGbUd2xRfaW48TEbbJQ7CK6vn7Mtai",
  "key5": "2FQmoLCvnBZAkZnmnMKtT7LRhzFP1KZitWoWFN5pzS9M1x19RjLZaDZzSwvJdQjiCW648D99HKWiUtmFY7vWGNqv",
  "key6": "4B7KRBrBZMAhWxCRUZBAorU1zg9UgRgNpDNCVaVPjrcuBL7gj3nzUHcbDjJdvcHThXFcdvv9PtE5LCgLKr5JhDqv",
  "key7": "4NKTN2r59SotDbdVfwf7d5LoeP6FGu2bVhXwGwsjDuvsuNFHWjaGxUFJ6a997AK9RwtqLGaqEr2WGEkRSHSRRS85",
  "key8": "4Ukei4pMdfJvrkuLSGmhrToUzYeVcuQW5ZsUWo7D5WfNmBsSi72mYoyibSGqwiWhscHmpdds8ydi9xbdUVPWBio6",
  "key9": "4extvwFg8fnjUDrdbCVWdb5QYRAqZxwLu8eygzJLRpCfrPkCzsiJeXcQJYYdGgKoQY9DbeB1TSExFdELvULwikV2",
  "key10": "omocTPHRhHaeB1efjPcsPqxdkjJu82Bwy3SeYM7nmFZGqm2rUPZBNnUW2vW8gUfgmd2pSxucPshPCKQDVELZkdb",
  "key11": "2LNcC1d8jfrXWFTtyRbRazxZM7sEgTdxjz4nV6PLd94E2drQ5nRe8nm4Gj9y3tBXiKCjyc5TTMJwb2a4QtPd6MZQ",
  "key12": "hyTxgjqstxUhd5os2SAPn1bw4HYVd2P7yQoqJgcJb1DKwKB86vzowUCZPqgNpycEqVV2NYeo66cHT5D1dgCYeAN",
  "key13": "5UUSQjFPCncExWwhJvvZSqozrY9jBovBUipwFJ8NsTGqTQGqab8WeNEwx59uJXMhWYASNTZq69BGa7YMy2NS2BYj",
  "key14": "3xoq3fjkJ233wFUmJ5P9CTM9pdNsfyPFP1W6GG8k7M2Kbia4r3uAQY6cvEyLzjhHjjvoWpesWrr5nV62GonxRuFr",
  "key15": "3HSYa5Bvk9EXD4rB9br6B4UKUnqCgiDzyCouKM5ByMCEg96jtPVkwCq2BTEXxh3uKQnTsQ8VsZrJVUNbR47DGFqo",
  "key16": "3dn9kpJMmXY9J2Btexhz4rd8N1Gg39o3cDBYCMY2embUX6faTJeDiztBFnVdv7HJ9hvoiPr2uVGiek3koquReUie",
  "key17": "4mmV91RJpxbH65vxw38XkrjjPHv19miVnU53xAAH4fUbStxstnHW1jxfZYySe2FLMcRv1mcEFBjtBzA4Qrct7rkp",
  "key18": "4Gaa9dSzcmF9QBAWbUCy5Bp1Z8BsE1N7JFgLHwyVGU7KVu6bnCB8qduuDbbu1LWJRj5KCje9DoGtbrnSNuLEgWr8",
  "key19": "5XfNmNQ7t7XcSsDLy3CJF2n83aL2Qyu8wgiNSZBY5t9GYk59vKpDAedfAk7nPQdubE9fMXcJB9q25c77gWpRxNh7",
  "key20": "41HtyannAjT4fuTVifDJY3fYWZ95UYV3dkCp6CJ7Pabqgz1cQ8uSRpGfn9933mmrtsSAT3FaSr7Mv2kEVcPMx6Jz",
  "key21": "4TBNzPi3JnSN6AUXEPdE3rUtGqK3L7vmoKQGBtYLX9mi3ch7BXbYg57STLoCRCSyVWsDVe3bvLPxfRHZeMbZi4Y5",
  "key22": "2gm7qykKz7oUhKwB4KmQtRQ5oryHjB8WzdbRMhU7PsKp47DcfNv1XBdWeD9GK4xrmG6J7XSQLYsDn6MrZ2Jy79GM",
  "key23": "2NnaxYjrkHxc8EYT5d5LeZAP17FeAk1jZbYdmfx2binKVBG1onXfpUo5DhHWqvg1SBdWTJrtqShwCKcXdgiDFNSb",
  "key24": "gHoDtYQeFCizBrJ5vMsGEeGMTJu2Q9eeRRMUswZmL24n2YLLXh6R2nXGUpXZ2syd33z8yiRRjRzwvxrgn28P4Hf",
  "key25": "thqn6JorD8zGNfZ71abQfzNwwTh1378apRksxDsNKizQY5o3ArmWM5CidQQrJoAWn5MTFsf9fqvjs7FHWkoQ9au",
  "key26": "5A3zGSuY6qSnbAXpHvmcCaGUiTqFbqk6BqcBJYGktYQdbZWQBGCS7Dj4S2YUh5o7H1ZWWF2a44zwHPV5Xr71CEh2",
  "key27": "45hn8Z1ij5oHRodi8ssZunW1z4tXQyWgWueMqj6ZhsD7scwLwapZ4DdZmAap2fVX8bMKz5yUp6XKDKUKP1zEvUcp",
  "key28": "5K7T6s3ph8dbTt4QTax9cSqWCrLYsAUEMmupGWMJ9NQN4W27mf7qiTvhAEj59k3EnatMRKHfAKELskYMtNVu454C",
  "key29": "4xFiykMRQ6t6aC9goFCBRvH4mqfCJopSvLHa9FVzVY3EsaMQF7D2ibkb634nQNzvy9ECxCYpBp6AJeW6qRS3MD7f",
  "key30": "4oHGVphEUXhjnF5VeMfQCkXGke24sxJmyaVnezezSbC9Tv8p3WwTLiTYMTbUmbewzTw1QzWE4fmNQ3KSsTK2f2V4",
  "key31": "5yvs9b9jas5zmeXcdtXs5zyLw84L5BCN2gMKfBYVYd3ZNJYvg3ruoNmVhG6bKy9jCF7e82Vvt51rS17EX7Lkkhjk",
  "key32": "smY1KhbD63Y9LQpYi5Eqsw4bHxnBtPdxE2kX1PWyDqF3tExTtzH7FjbC6bbN1LPNJ3uggjQ8JZDfCgtspif9cmu",
  "key33": "4ZQ57AxVfDbzkUJSk1aFVFUc3YoL5ZZidBesskxA6KWnj8GGqWAGZeJEHV1ZZutUD3oVpyGgpFMdMhiGnCZQswT8"
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
