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
    "WRs7kLrGhxpfcKjXD5rbiKLwEP2XnFCA2HkC79uANoVJmn1bMh28pNXKzyzz1P2dJbbRxxyhCudGAfpWk88zRjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCKCcTnzPRMn5hZuB4gDEAb8ecKjZNgfiW8oJ61ccKcZUeT29EPiCLB547bNYMEedd9rTfHmTwKbtUGWNcSGQbb",
  "key1": "BKJPgEdnvSKSHni4y6mb51NiyNg8cXhsz8ye5A9giXdFDgyJKuyULLayvyfCYUhKpyps7jMBUKqWAGLki8HDW21",
  "key2": "4BWFYWbNriFAiNcUrd7nQsmQUHjVkDMmdsEjiPH9UqKi6zDNLBTMhtxUDWTHVjy9nbBYEy5GwXbdHhBVoN9vF2nE",
  "key3": "EKv34xrJWn7MNr7syf7bJ4cJCARBTY56RmQFiv2azCDx6rxuzExAcWxobQJcdWR8gqJfn4YXgxWeKwAadPf2tmJ",
  "key4": "58pC85eZcNNXMTczWByfic3h5eXLDo6berkzuqZq7zgcM7CMB3pys97jduHSCmsPPZEvJhtuwcVeYQwZT1J1we1z",
  "key5": "2rNG3b6PssQVWvxBSpS1onZArZXbqFnt9tEXNfjZ5CeuKyg1gPUbfPS9VNYv3DuKfNWNekYg1o3A55jFhE7YSspn",
  "key6": "pqhKiFFbNyXybEcVmfNzQPAsrady79BUsh4gQeHf4D78zLMAuzVN7pgFbdmjsQyCLaEyXK3R5CqQZg8VFiLzRPK",
  "key7": "3i6rV4wQJ1tpL8QuXezeii59TxCxjUXPyTZfD6BZKrdiAdu5fsuLCJJd1PDtYKTDV1PN6NwzZ3DNCwmUQAFrWfkW",
  "key8": "4SbD9X2APrVSpGwNiE77jgHB4fvnoAnmSS4Fi9ZCzU4Rb2zNENa8gMPFf3tXeU193cpCFtUqpPj1rj5QGZmsN6b3",
  "key9": "frrgWEogCTHv9MQn7iJkcwuMcKYDRFGuezAqRQ4bMb842ixsbY4yNpAPNJhzHJFDW63c3gmXVMx3Ptro4aMEFCV",
  "key10": "3o7bLhZawc4g7Vch4ANjDQrDZ7iss6CGVuP8UonJVjQgqmiEvd5D74McNKp6k5ewjFZrir9ic55CNguWZys3Bq2G",
  "key11": "5R5pC7f9JVoEuVeLkK39jejbTrAR8NKWKMiFM4LpBY7dUsYnACTYb62fhykyhUXYpidoTJaevut133sexuZoFJq7",
  "key12": "4CuEGdyUKbHwca5nrv3WLBKsahU6xAnuk9c3m58ynQQRCupVScU7RNcXFjDC8DKUCTV4GNi5Grpe46CUV8MvC6NX",
  "key13": "5KCg6VBPHtGVmvNpXhb7WpxAhFQptXS68kArk9AhuKEtzU7hxT3PToDSzZhfPy6SvRamS4Q9tafgJaR3bkUG26ie",
  "key14": "wXRcvG5bgmZvey2yUvFhDGHKioKUDmWmTf75YKWjD7KVwfK6spm4SrCAT7hZkwKMWy8BK2gnZSY4gyXHTwgPP53",
  "key15": "5jY3jqwmoAZ6ug3PtYow8kfLTKbuw1ECue1A6JEhCAdvxwMcX58hFGQkFKeYiyusbcW3Hfq7tYguve8zK7tPsrDt",
  "key16": "3RVDMXnhPKWvgHZAwucvj5xEdfjPZPSkRakrJwCKRzbwVtzvzkwXMXgUvNpMky6Ez8fKjM3EmF4j8KyEBTAozXQk",
  "key17": "5mbVRpJVMuL52RHwc3Y2ftK27NEKFTHBwnKmux4nFKNJPMQZGanF2oyXJsLYBKiYs7RihuUrxDP4hBnHXnPGZLPW",
  "key18": "3Npkyr6iekQsQWGWVkTY91FFB2fzgv3JDGuTayRdsCf545ymk6FEiLAUpUqJvyi3YaqWWHBwmTzpwTeEaqy15Vks",
  "key19": "4SHf5bP17wz5mVoBku5ZeDphrG78WC8osVyskwFRfGBbed4PkZmanCixxysY9skwLZAe2KskKGN5dPWp8Xr48eGR",
  "key20": "3bFhjgw23rtzc5CJK3gTwqDs7vEB2uE7S3Y7xwCg7Y6UhNpCUCxMtZcDNDgNKufFWwbGzE8E2Y3Sqru9XU8YBcfL",
  "key21": "65GsYZVCSN9Ktt4nTkB6gdVrpcUj4oo5Ypt8rHUXZHBtER8Qb6H4RmgjazyUCNjBP7o61RPYFwv7JBoeMi4bYHFT",
  "key22": "59PrPqzUxHiedtsy8breVCgnxyRBghJ7HCSzw6fXrzCybYUZVtNZgGjtrTXiZHD7PocjSqVheYwm488d96PbdtYu",
  "key23": "4Pad6BDnhgRZpu5D4JrC8kmd9jScfP5TeYw8hr2Tkz4As7NuhYddb6K8hLnrXAB8aqcxiCQbbC7Nt8FvSboXfrKK",
  "key24": "jzaC5f5hF7oUkj7f3mDaKgPQ4vKDezF3Ujnow1qkc2KwuAqBMyE69uqgMjKfxEZKgkGW3YQHvCeoq2D6ik3nN5Q",
  "key25": "3e6L253oDkrnrEZRgVbk4GbZkbYqDrQjdYF5mPiuMYMBJL3npafvNjVecZCFVdMeeM3XVVw3G9xbGacswC2uQgWD",
  "key26": "4GXP52sgpgdT91RFMu6XNVqR26rfSKkfoZTp76DjztTHV49TEVoUYzQBtoBx55y1X6tEy3mL8kkjedWCWt5wiwaz",
  "key27": "4duGqaAf2hfRq3Nev6PCNsgoxV27YzvSDtpb5UPdVXdgjM7RX5GD4AfpSHJsKqH2ThjWmpjSxBQLjDHjHg1xVcoZ",
  "key28": "4n7ybcUEKiK5g6BHVEgN8wDrsLhN97ctv8k738MYpQS5m8PfLnATiRnk3WBZ8dqENt2AZbGY1nMWFHRxr83Jf2uL",
  "key29": "5kHdJ5WLttA6995jbKAkKMTDcKQmPuEsgj7bpabf51Q1AiXf2DvKt5MKZZKWXm3PBqfcx8MtGrCJZcGfnE9DjX9j",
  "key30": "4yoJAqnapKwY87tJwH4B9x1mhRjYz3onacJWYLcEsyMoizYnicpRVMan4Yyyqof56WcoK4ZW3t98m9Gb7tK9fR8E",
  "key31": "2p7iPdVSDqNsPEVEEZYDTXF1TakDwPusdNAXJZjoFecdkWBCJj9sdjRSJKEdnBcfQTCh9jD4oytUhwhaSRpCcJX6",
  "key32": "4WqQ6WyFGyW3a78Fu8K6Mj8wJFiv6nktnoNw11NMXK4GRG1CtAG5hjL7VQbdF7XNckBq8md662GJkYUJoo9P4KVe",
  "key33": "2gnsRnuqWFgk1FshCxws5UiKG1XZExFrryFNqErt95ZLckpmAnCtxcR7hkcDTopVhxtrJMpbR7qZgv6pcfywyJtL",
  "key34": "AecPerkvKvcWDJAoyjbgErf7DYyMaMWLeAJakHyguwA1ts7ySieesY4DMijgyMoqP9Gd51rZ1iChxbd33dQNEiU",
  "key35": "5gihFaLsTxiUrLGmKwgtse7fVAP4Hxwv2ydGFa4TfLaoVjHhdbBU9By1b28n3auTobR3H32BwMATcUgW7zDniCGN",
  "key36": "4Us5Sxg6pg9Ss8GsZg7kJnXkrtHqxCfdrn3TJ4rSunZ4pnarjpSWsJyDPzMuUSJKov7qoBHrPaqdeZS82QqwrsH7",
  "key37": "3Mk5A1S6wmb3GypFte8gUzZZ2NFy5ztCjshrZfxeVmue1DjhuvTjx5sCRsaKky3EEr4btQ4F4oMmMrcDMYKLK97N",
  "key38": "5Hd45DsP9CeyNLcxUCELSPTnBBr9Q65qSUtH8fmBmZSceoWZsAdkZeRbQ5r86VWrEw12PiPkXa6MFceKscv128sQ",
  "key39": "4uE5kZ8Xz8gZmvew2e8fubXBv65s5dSQiTLvPpNC3P54ZxVUaESNz3udN8QhgqTrDfMjYLw1fdKJwwEiRAMiDsC3",
  "key40": "65FkwrPXsLjxvM97FyeHg5FJQZN5tipzZRmGd1QpvTmfd719qVDhqaUqWJ9VK3DJjZMu7dWFLQhagpJNRN5UUMxN",
  "key41": "5eSnhxBtQB3GPk9s94erp6GfmMAyve7N2EZTdHpA2frgm4WK9c732httjavna76pE3b8DNMsM65BhdfojVQxpnzn"
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
