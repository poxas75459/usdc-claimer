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
    "4VSMEtue6gxani8Ckga6j6nQHHpNV5HxXL6rPBzoN7oQYWecstmYeGxo9ibAvmEW6uXdXyX3eqq38CrBxNr4gQbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D84ZTMJaxBR53d8WzNrLEK87oKVP9KV6cG9bLfWyomo3giJ6NhY7798DKVNr8aCNvv7Xow1FYqZv5d5dGyPdwUG",
  "key1": "5XAwCRJFodAxd14skL1FJJbnRyTnYRq2R1yewhhMPkvcgFwU9z3N82aH8SMKYRWJq7fTQQ49k8p3AxuCw9YTAdpJ",
  "key2": "4qqhMpuvdAdyFHSdhpsKcH64GtuzdHnckG3Q8jHfCkzzAX8ooxC87m6YJNBL9bnMqCdfh7EmmHxBp1fHBQ1YhvN9",
  "key3": "3UirM7UAQoK72D5GwyqM9izWTzq7rztgGXtDxirDZY9PF7fcR1HttYUi6vh8yKrkr95Ruzhzokt1EhPVQrgMXWVJ",
  "key4": "2aZ43Z656X11axEdo4oiYk4PzUQiRUjETrESGbaDEk9JzFDBEwtvM6yJQV7T9GobH8FEQpiGa4zwuHBDFTcA7gQ3",
  "key5": "3sDBcj9nSdd25jJMBPgxg7WHXBrhrtgEVfJXekZUhRr4m4HP1JnjxNxRhiGtbUdX5F31jpJZZVXJLQFcTX72W27h",
  "key6": "3Y42GPjpNnoELdy1JEwemGyeXmjnYLpGtJzw1RLzSwU9NevCiobwJ4uS6FWUepZeL9ka4aWYnY1xDAn81Z3ZWK3U",
  "key7": "dbdBtpZBnvpZWcfXrAZvCfLRiwpReY3q2h7kmberQWLNbW3zWim3c6bKuPVQPwjTjjForrhppEFF2bWPVz1JAHB",
  "key8": "2g5RizT6SVVCAspEXtMsERT2LfoUk1C47mZivo7bwosfWUsacBmLt4z5unKYDHQKPrNm5W3cEZE8u77Hsm79Z9K6",
  "key9": "3VgLRsGDnAVuCdjt5MjfEod43jeY925qWEvNzZY1vCmvjyqyg8PCaJdu9vS1cPPhrUicgaS5zqSGf1nWCu3YqoMG",
  "key10": "4LscXYTPntzNxhbHbwxYRN597fcMsJFkKqH1tUzLZ8fmKGvokXrGXuJqHW3qtnZdP91yHaTRwVbH5hzAsUFgYyum",
  "key11": "4rtMtxMQXz6kDMx4tNwXAzfvKFDMJbLi3nWNRGpMW5P8Kr7PYgYjPFu64EoSrr6eV46FwgNGXora6DyVd4uS2khy",
  "key12": "4VRhreAwxP58p5C1foDwsfSUFFij5TpA9hnTUu1mkFHFVrGEmevCzQNpajwngj4CJTedrx5YoccbcK5BfsZdppjw",
  "key13": "2sM4VR9tzfp1KpcmmEdsZhBwYxpUjNxiKJgtUGszejyV5WcP6EeREtuxuKiuAYii445qnoYaSv8XyhNbE2wbu5zW",
  "key14": "4b8ZD34sig3CZJyvY1uTPVHtQTR7Ua7Df2BJYc3TPyHoqMZxfWK2FpGziUz1Js1m1utZMDREfFH7fbERspBpq6Rr",
  "key15": "5Ku81zVg1Qt5TChyWGQajSzcFebbE2cnzzcXjPjtvFj9xE2fepnp7tBvo31Tyg6dWUi2Tb3VooE6BLcWAk6jxwr6",
  "key16": "1k5YVNo3qBivkhmmyyaYnuJ5AQUxkE8njowf5fWpsHnthfQR7M8AHhEoACSjaArT9ppJYX5r4ah6cG5PZ2wxKMg",
  "key17": "2e6BxcNYfrXsLLpGp7rLBBBvwQAv1xmA3R98k9Utq1A6fuNCL4e7ZWcqVmeH4SeK8u7NG1EeP56jQzc7YwB3cqnK",
  "key18": "4BDCK8j3kSqptaXqSeJXo9NS3oABswKepnR9my7TSoMTLQCYxEdoZHo7fBHEsr2QcvoczMs9x5YoefvYQQPgo7sy",
  "key19": "5U1nreVbq5LUxi7qHMVHbCfy7nBJqVWpyb9H5iZeM1moHRkui19FhgfRWTnJiduYK4w7tNqBdGgz744fhskfwy2L",
  "key20": "bAB5wzSovnT68goico31XwnvWsbxnJwV36XrhvcVkPGdUpGCZgnbjA52QKQB1YTGGxCgSysw9DKxuLVMfRrTE9M",
  "key21": "2BhtPXzobcq8q5wfNxCsvBw6tFCiLr2XjdwZgN7Utckv1Ww3zUvJTWqqjPgunyckEtZothAFYdRdPiDAXJegjgmF",
  "key22": "2g8VAgpnaD1nNRFwo3JML9xHpy5Pn6xGFiipy4Wk9zrtUCrfsMFXq83Db1PJRdrPyXMcErXi6ag489Eii7iEzPXe",
  "key23": "3ewA1L2Q8nRMdEPd4gS7bb3kXgXyWBdjKJcAtnhg7ZCjjbZNfQ7xcLAQURWLQXJ84Xsv1SXMoPVBByyRodQr41on",
  "key24": "agvrVBcms6cfDdJJFuqw16xV2mpJAgSDSur56fJKiUTSUJCuiBa68PMYkTQA6ZCjPByv4H8FqvB1u7TuqpNv4Bj",
  "key25": "2qqiTUwDXzjr5xskpZcqXnhUnWep5AwY78fyzbNhQDvydaVu7JGWYjGprhm5G7VsogD6gML9zLpbB8YtBG4VvTWQ",
  "key26": "2FPj5edTVY1AzTAPF9JPL4xfPYvsF2Ly8yYLabMYMcYytekC61QeryJNfRs3ZuBXY8xQxX2BdksMaWo8ajPHvkj5",
  "key27": "59XA6FA7V97ksyMwJTi5RtvGXEVe9qdhJwPKiBK79EunCHym8oPE5AGTGwi7unLrUvcoBZ5A7Tbu2dFkwqXxwtXv",
  "key28": "27fABiEFUytP6qKXZRjZ6h17h7V5p1Q8J6tqLM8bWDeAHhQDyecLQ7QY4TBTK5r8uT9Sfm8McjPjRHbPdnPC67nj",
  "key29": "44WtgfKudtSb1dJLAiCMo2PMZLn3rpRKP9XCfP8BHC6pVFwth8q8rDEZ1FMjqZWc9cMcsUmWR9pT3HpdnajhLrXh",
  "key30": "3Db9s6g2DHGtN35J99hfwLLVZf8doxLLyyzx4s749yjHR9r1YLa3dBV4K88EnvUfPaWL11gbJABEuJ29pnERmrpk",
  "key31": "5toW1fdFqmSapMmqBmvpvsh5imxakrYPrd6MA8ZgosNwG83ucmgoRy2KHtp3o4CKYgBGfFBDJvHebD8AS2aqZCKp"
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
