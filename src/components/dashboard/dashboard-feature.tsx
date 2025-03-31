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
    "5jNoD1hCXxQgEj4BWY7bZsA62GssYJyZDCHu81ZM5cnhajsgaMifYhxJLWYQYC3ztqwAFACrtA7L1iwh6fMbTWfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twrckoCaDHrL4GfzAWiRYgkLvY6XN3mCw4ZEhMHG8imaJk37fhncwrLcXKUZwGrJCDMVMXgVKGsfXWSr2Fndjkn",
  "key1": "2jXHGwybJyLtFU5GvAtqZs3GnG21dv5M42tCY1a637MSSVitfXZB57h7SW35hUiAb7nkqkmE2mXiCAU3VYhkRdVV",
  "key2": "4J9ckajyZTLkx99DsEwgdeBc5wz1yZ1LGJ5APCc5GFcoZPLUTj8LSbupScoBvU424ftC7ean1PSEj6ZiVL1brQvk",
  "key3": "ucga6KApLP1FN6HnPBCstkzY5PMSj1ZD3AM1KUCH1v2ggN3ztAbsPE7rBfYsZ6MDivKmo9RMehxtMnSTi99oz3U",
  "key4": "3xEfTNdeKHUf6Z7aoJmZ1tvZZ9XrjcYELyHNJ6tyidne7sPRCmKSQpAgMgiFBnprmCwC54MRjQFk1BwitcEspAiJ",
  "key5": "4XuaRdxhQK985mYCFwY7y8pCu4XHDXUoHc9bSYsFxiAEgw2EDNmBgvycPFrrpc7f9Y5qAECpMtpZNUtx74qU7d4C",
  "key6": "34UcFzGdYvcjoyQXxijmBKNDxnAaamaizhLpjHngLvX1o81RRBDqdHBdn5hBZuqmi4i6vrfG8gJzDozMJu9CnNkD",
  "key7": "4zCiYKL6fprKgrpX6YBmFa7XjgYMrV6JeYLUwa6qo74Y9Djiz8Q87t2AJNoy4EP9MKEmnTeigFpa5GqykCErkdVR",
  "key8": "3SC5RKRXBRUqVifyhbQfHkedmWGQjG2yWpi4mofZTgkDakhGUfXXHZRhyyxQGF48vsoYRcsgMvLrgvvBvhUUtBcW",
  "key9": "GQNQRAVX8bftg5MA1Ckkd3auqqCose15dhpoPR5PpamdGvzNYt1wCy42A9Fb3RvXrDCJPVVaYLWUR99vYA2QKwZ",
  "key10": "Gw2FWqGp1DAdDwXsfUtysUsxQu1nr94VeuNM9ivLVkv6GeneU3GnzZ4v4guavqxWXHYbXJmkyDeEzQb9CoQCJzZ",
  "key11": "5s4MKy1fQ3M7d71bQaQi76yW6SfhoQvPCascH5Kk8jGCLMvkhp5FxUEpx3NKVh88GxF3onZKvXX1AryQLhtDbZNV",
  "key12": "3XctGcVQesFqBxQMNJjCSwyfjgMAjzyR43b8yVJhJc6J3DqRKpdz6yQeyhCiZWmSQhXijwEg7zQsJmWdu1htJHJB",
  "key13": "5oKhXuYxNnSUzcUZQQL3SVMYp6ZCXQKBRQ27zgXrCYLkn7LzRR1o1HiAj2wx9KhbG1FoEk87v4VAkVwvqEM3v6ju",
  "key14": "4YZnnz832ZXhorU15WqfCwB58CqpjAeyNH5hVG7sU8aUWjNbKea2QK8ZEoRdKNqxTcPdGgAA2QatoRXACuLArjVy",
  "key15": "5TfYSaVsqm1GFpWqQ48vf4C7uKWTP9xXwaXuPk4qCAMXDdfKLYEWdTUtRKrHiZW964RF2bWLwe8s6DZPo3xDwA3G",
  "key16": "2yXXp3nN6N1RzqhBBQXCTCtrbc63mF72HpMuWUXLURjXwe8Q6gaZ9RDwmSSb2LShUwyYd1H1fpk7Gxyv1rieaGa6",
  "key17": "5pFk8xqtuwK71AJRsVud5iKwKuzERBXAGomSfvXX3h22mBAyU9z7WrT86DJ3FkFzbCQzZXxdgchtyR11n21bVovo",
  "key18": "2m1Jhftg6yMhi55aGbtHy9xsB3fovqJa7bhkUvicD3jiNMkyC1C5dLVXjXhCEeyanDH9xiHRfiPqevmMNmafrWP8",
  "key19": "3FS6RjZ2fjbGCeTaU8kyrwpyAUgRoxip3ELLGCihiffF9HB1tA6dyQj1TrNHcgdHiJaqKXHA3ufMZRwRFsj5X2Ro",
  "key20": "28nZMGdJvHNC2wRxckXb9oZTGHF27uA7BsRByjc5e4Wxd5Fbgw73X1sRQCUC4JK4j75N9Un7daNcFNkQQuPNH9Dv",
  "key21": "77N6QArRArBzHyn3EBGMqdd3xj14PTZbvSRV9tr4Wsdt7sBEYi6JqJjohZfcaDKSygs2i6ufZf9WQQ9SGjSbscw",
  "key22": "jAd37vC4YyWMYZfC5KgQYNc5tA3SUTJxa3ChdnZ7yhtR7L9VDKpsXf8ubUp2Fsc6DFpMVeTm8dMEBoEFvhGJdiD",
  "key23": "2Lz78bu4z61NFsSMMQoXEGRy3uKgL3bNTxMb4YGqECo54zTdLWunTLQWUd3fQKt8x1NCw23wkmgsMaT8qHBmB1S3",
  "key24": "j5P3kAnsuZtbrvRYXGh6z7Xj1x4YKkxrE8UVx36aFctJSZUEouKUQxHdEPZP6epdZiFskgyRASH6BZdksPE8zKj",
  "key25": "4EXaXrXrAoAsPNSRL8mzNkJty3thEBhu71JZvakW6wGd4T8ExzaRVHsFL9KA2f39399PLqtb88bKTh3zFEfdWAC8",
  "key26": "5op7GeUnBMaR4KE2QHbnwskMJ8sLtqUcGwaZc7V2vK9Wde9A7m1txgi1aRHi1y4Az5tC25abcEssFVY3B3pEwrjD",
  "key27": "EKtQN4FGnTEkA4dC72KevR85wU2gDsQzsyTwiXYVR2NGMARXNydQDWigPa4yEFA2qFdeZSLj2THuw2s8L1VTgrM",
  "key28": "4T4diUGXCxAL5VA9EyKtgJ5VQa21u1hHD2xSiFFz65uvVAhaYqjD2Yn6vC4WYEP6nEKp4HmxYTKW6TLMDySXR1KC",
  "key29": "5fdW5jsXcV6qJf9FjHCS8Bon3qKVJWQC6qyBzfqjquvVD6MLHNSzafWEvN2wT3oRFqKbQv3jbtNnzr1TtxUVvnN6",
  "key30": "xDarAHLcQLjZcm7PCa5vECoMKyWJ3No9wNWKFJMaRAccgtJhAeqFv4EGntqp3B4pTyKSMGQzkGLbL3ko1YxnYGU",
  "key31": "3BY4VewqVLwGYxY3fQ52AC9BkF2wp7x87e4cor5k9m9CDhaFfbXnh6HRnyyFoAJVVc4RLc48PBUd6KbmNhqSe5DC",
  "key32": "SJaSmTgdjsoVN6tEQbHPtbwvvhwF96ciCaxPBf1NV69H46nuyRcfCSzcWgAghTqRkWbF2nffTXXFfQX2z8HDbAa",
  "key33": "2Ym55nudcdkGLDkDBDXcdW3TiS3tN2CGiMGzHN2eKosJkT2ewjhqG37LojzeNXkPAGgQwkBJaQcJetfinDHcjbee",
  "key34": "651iYSaFb4PZ7gEDQeqq2R11HUB4xYcPAmNg8XbVz3A59QQMNEuF6Yud4NPzApiW7nL2tkdcTfHP6nqobjJ2L7Bg",
  "key35": "3NJDWNktyw67HR5QXagkeGbi9LvtE8cGf8XtQsSzqYNW3eKNzn8ixVtxStkoa7CUuCiUCy6AAGwwseMf62E7WxRj",
  "key36": "JtcyvCWLJ8ZsGkpFCmUZchHHs5jMunaTHwBFeJi9oinqQ4V4qRTHVyw84Lmz5AUKJW3U6wa9rC87ZhSQQH7TmEo",
  "key37": "WxtKX4oMx3MoixPCu7EYSLTU3tt54BjEHVMmJhC4nWHChBtPAyQUBMQvkfMA4YQpmGAQTmT9cmL7wE471EKgYUT",
  "key38": "2yGqk3gN5WojFrWA6c9LmWJpsi42Z95WWHQhgcuVfR4BLGZE4a9XipYNoBtbgBfQrn2DJTcQ8oXqxnDXToRQLyNP",
  "key39": "nr1SxhBdGAqZ2ois9ENvgFqmYsWpb3kWXwfB6RbJXZhzVTGnwCGeNJLjCtwbmC4uKSBTYMsbSumQUibMqwsa1W1",
  "key40": "bBtM7KThtaKNxV6tHBekMuYYB69N1NdqMbNjuBvcYHF8ayLu6eqN48ChRmWFUqLwftmaNWAzRxx8G8PjMgxKpXX",
  "key41": "3Hc9EfSBh7c5hNQHVyJjo7sntZcNSXTzssWsAeAq5iLn4fxbaL2fdfAdH1pH4DPo2HrGnJvLGYw7Rpga1WGEVteY",
  "key42": "3GNwzSREAJcWWdWpYM5UtTDJumUyjpSM46PtyGQ7qsyfJfd1rvnSvK7Q9Ad1aZABY7PbyiUxAu39WQqJG1h8ymZz",
  "key43": "CmT8eH1C156fE6NhBqEjbo8KaWNcGN1s7j7xrsXSrinNuQu1sQK7M9M6mvBq5sSAVGa4kAKesrUGytZ7d61hZD1",
  "key44": "32ZbX9f8ynqCpAnRw8ScRbR2kgNCwuH2eY6JbtwGGeSWZup8tPaocVJZDFNkKnd62uauSqeh5Z1KmVcHrA6R9kUX",
  "key45": "3kbAUTH54hJj7YZmYYGzE7dwqEzBQBSrfRuTh1AacU7LZvEzcfBnDgFawWCJTLwVye1sgmygx3XnfjUzCLqApwHk",
  "key46": "zYnN6MH5X77x66DTwSbSRGtdMEXzCMexQeAAJufnRAbexQrWL9f9XCr2x8S9UscfYqBoqpU8yVYagvWkYHq6tGc"
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
