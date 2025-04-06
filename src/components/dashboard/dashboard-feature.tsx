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
    "3s5fyWRYL3wCsXgUFGv4jpjefEjSLHMtCQfobDbhgVjBJ677sYxehMWdgJJYc391svMi3wAR4CChSsjnp5fR4dsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62d7skEpru3UqLJgJNTaGofwQYxodivLPwa5kcWcvqzm29sRmyxRDv2MueGRAVVRUrW3iz2ivi6sTfVoJ3FQUDm4",
  "key1": "2EkkyohCL8JUHsfhP67WeAUeSLJU6xT64EktSvd3RUv1EpNMvSq1kNo79JHnkmS6yiwmw6yXo6ze1MNuxScAs95a",
  "key2": "4s2v63HQHkYCX7YmHpioX2T9X5MhNpYahfZ4S8kTxbZPmuTwWgXyBYoXAA8uzSVmo2pPPpQtRPqVxA9gmXxDNwrg",
  "key3": "53pL2RUhWEvy2mU2QXG7aPk4QpvKU8f3uz7dYQajSvisBQKyCHsuNF8PANn9Y9C39PVPh1yNxYxe9p2rovr9FNHL",
  "key4": "3M4Q9f43oqS4XvXCadrUCjRgpvgGaVXBGBEjGv4yS7P5faRYgFqLbHmPooWW7iScQsGkZaXLghUgRg4iHbzZhFnA",
  "key5": "45qs1smNSgGizgjuGcqV9UKJhJ3ABEtqsiysWGsmASnw5s27kss52jVQ1GMFeSwY14rcpbUBzNBqHe5e6FtcMP8L",
  "key6": "3V5Pyazs8tTdYhNpG8qFVV7FLVho3JBZXGzxpSVWnV4onQ9GpU5FY6e941W4VQVXVYS6bYTZS5jkCYPYwpN5r4Hu",
  "key7": "5c2GKUek9s9gbTZJtjZ97PG169cguZs7EYShTuoKknegCKWitDhvXUkG1uQBqtsxckfq5x6PRY2xa5TQrECpKZtC",
  "key8": "3XvpSGbjDCH4XDGsMRpKa1E8sjx7bSn6LD3a5JMoyqThg4o6VztH3CF6D27ddgbMmWyjpVcSmtRqZsniaMqTfbqK",
  "key9": "4yKnH2CR6W8fUyi9EYRk3dypjNNz3GYr5eauiLZ19zhi8spUVPzn9hSmECTfHx33NXq72aYk61dWpZa2scwZKa2H",
  "key10": "64c26QZ6HdYyxP8JEzDZiAiCKJUSJxmS9VL2AfkEiNF394bnY1D2EgJtab2Q3d5raF5nAQcyT5uSemcAThQsgGc2",
  "key11": "62KevhGgtYgocaakjV54RtTU5nhSjxxKPsUWdKA3tjBhgNNFFf72cdr34Vk6afiNvKqqnKHsprLU3jbGdPt229H6",
  "key12": "5bDR9hW967FHLDq366WmXLmS9GL88LNU3oLhdoYFvunxoQgsmwkiu5qBvvJ64Yx8N3hFJr5WbZZrR541GE8VYLRT",
  "key13": "4i4aGSzPt6vYLbLnr1rBQ85jZaAyVyhH1pn9tffvyCxw9JeA5eBbpPAq74jFdbMUqgUFn87GiPQH9qgVc9gELvKE",
  "key14": "5NNPP1PpRcQRwkWNLoaHfS7q9vGahb1WvKeEjuq1qRpq9KyXZwdbSHMnQyoD7wQ14jFi1eZ9ZBGAHfCJ3Zh3EV3w",
  "key15": "63wo4MvaMUK16xfHEmhssGPZS49mBuK3suG3rnT7YvKXjkqZcnZ1Xixuzg9ozeWKCzqN35ShMJcZKGJpaM7iBf6",
  "key16": "2JRhTiyquvJNaaFT92CmVH2BuSjbd5KWrfsUeZyDbzbAbAdSvZtGQLJN1zTcBmZqsBLdRKaE31V3FodWJ22f8PYJ",
  "key17": "28qAqsoq9jxDoofosqnU9eCVSYYZBFPSZCUia8TWugLsp5KQdEXMHo4qr3FhqEVnnYky1KvXFrja1yc1vJfcyWda",
  "key18": "jKRy1EQHXEP19ipp8Kb3Acw6YPobBY8Hk5FwLiv75wQGA7TFGfNNGCzTFFJbTY2VYTNDvNG6zfrTjSeVF2EiwMK",
  "key19": "5xayxYXks6wfd3BHXUttExG83vSFZ44JwHBcEhr7CkeBtGXfNyQszFbe8FBtuiRrs7Ps7igzHU8TJgsjfQrqT7aq",
  "key20": "5aPZReK2FqU4L6fRyRWsw3WMHPUwhi5JehfituCHe8rRKQ9R7dseWD7wGAKFQYcewtae3PFPXmU92rxZjPT8bSPi",
  "key21": "57p2GXtWcZHdbPfRsZn5aPACYRiMDwjVYkV5gzB7aUPBTmUgVCQk1U614hunpdwjvwjdB5zWYHFeabemeKJrDX2j",
  "key22": "356C47xXNCUFdHibND7YeGvidoSuPwfQZSqTJ98MnnRnArwp7hQaJjyGkbeVfr9Yus3vzywAPK7WH9RbBgCTK8qy",
  "key23": "5cyfsCJ9VAKvqcCLEbC5GsFDE1x5VxAsjsicRf35jWTtMJUstCHgDPJzNBNaNEh6AjP7HNFvfHySpg2qRZCPyyj5",
  "key24": "125DxohpRRxbdFsgNMh8BzScvoEdfMAMAy6zjcqF4AMDkoQWKWX7Zh1TK6u7LsDakr3bB96TmCJp5PiFHoRZPPkF",
  "key25": "61ezkNrLhjc1kygUDHXcpf829YbM1bo4viCXHBrbHfuP3xPg1W8Ni6WdBX8w5Mrbr6fNfDsZnU3wodRuWfvmpULF",
  "key26": "gSsj2uhFkm4XFDKP7AXGePB7vw4pW3FPiK2R7BeKWFVM65TQthBmBheMRYHafA46RXLn8tfyC6mXmxiw7NCpXM5",
  "key27": "62V3FvzriwwDYRzJFK3eRWtCjywtdSSVBrmCGgqmNbRanBuZPrZbcF8Wnb8QQG7Z69eANcbEGa93EgnL6hgYhxE8",
  "key28": "5SWaEqkSM2XjUdm2mKc4Wxr7tVygzbE2wGgD9bFBHHnXwjsRHFHJqpbtF6sEEyijFBsMpMUzyf5s5eC6f6VBz6nD",
  "key29": "4hxcvTTypzsNipHkyyTtqLJPMfQWhtRScgKWkjQd25LFADJRpCeVBXNcwnLx8u88B3gZXuhn9taoN4y7fN8kohmM"
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
