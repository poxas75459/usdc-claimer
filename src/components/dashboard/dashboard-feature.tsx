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
    "2CA77FYo4RnhPGS6dE1yY1Zns13vCYPrmD1suwhxG8fBFaBd1iYGaqrdgXZMwkRfVd712VBeYWV9qA97xudkVQQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQhgAYQLmyV8kHvw5N4qCMR57niGi6ZNZon3zntU3BFnXZ64MDk3xboyWkS2nM5WLPtYXm9cQn9t7LVxRrphENg",
  "key1": "22Jh99i2mndyX4T5b86vGx5HSRqmA7JJMsboLwf4rBcchB4YkwewxfT39aF7MrtkLnNqwvAzA2aWiDuE7hVv7HKx",
  "key2": "51mHtfAnZPJkUkFs9UnjXuRH5SHvfBCnhSaU5n18ZBkzt1pcn3Vb9yH4pNwza3BSwPMSAyXeSevC4v4FExyro7MG",
  "key3": "65cP9fzGpD7MkpJnPXAHZibLncbkCbe9XjhHWtyCUQs6wDqdDMfyjkd19KW9n9VU66koS5a3yB3BVSoiUCXdFjGw",
  "key4": "qQp9mxG4s6BxEGRi8sMzTsmrq2dGD9gXJUmaGogz5vFpt7cmSD4zgCTyG5obAyyDVqHBcvUBMWCpV1pqY3JZ4Q9",
  "key5": "2qkEj3ZDG4CLZzFefY9qZAT5efJjZ6zPA2n3ubo3GsXhLn9BmHtkyCutLJsV7LjocFMpuZga8HCRZYEg5ZJcNQQH",
  "key6": "255TzH3QZf2jrWxvNNfQiMB4Yfz2qLNBYapnR52FL4XRwUgPURXq6v13UeimX5PgLjaaRvFxMxKRCdsLa95L23NZ",
  "key7": "5ESwMTsVUJ74rV7gfpxtK5tUVpWbHyXesz81jLzpdkSiHYD6ysvDdwL9Jw19juqc8qA5ioiNcFstcyhYCM23v2hg",
  "key8": "2r5mKoP4dCBCUXV4QVXrjEMMFcjhA9StEeAJ59oUnqpQmGByMrY835oHXMqcfCiXvCS73P4rQLGWEMJLTumQfWrA",
  "key9": "39onJuvECCzMr8tiM8D5FLMobiocS8jvXb71PRdXHUQpdTQVVh5JvtaCChVU9H5cQStt6Erfg91fFrciQANyuYRA",
  "key10": "31U2j3cT3kZGK8d3P3ESXcBCaB54CuouwjJqPesymPpU5Wb1fxQ3BuuhzA1kR2nuikgYfx9Sgg8yZLgJya6Fmdnb",
  "key11": "4C8U3v1D6dgBUpUJef2cTG8NhA3VVR9R9G2xikC94ZvLBLRX16uzz7oXCR2zxMHHgmv5TVoBfeyNxZV4GJEb9Dcz",
  "key12": "2AbHC1uHMsGjDpvnWpS1Nj9LeySzf3TzqmWEVSPWy3wKEmtJCrJAFGkNiPydQeLoNXacSEAtn3i5ymWVbRC8pekL",
  "key13": "4k94RJE1PzNkjV4LcjEseFhcjxZ8xNzD2GFQTovjzHdQUi9WcsZ8gCqYV7ZirtrYxQba2yNHQzTgiVGkyX8rStEc",
  "key14": "NcFbXKsZMu7Wq1RS546hppAQfr4HsBiAC6fCEg8q2bHAgJu5vuzMYzCwARRPTPk7nsBkn6mRzMvvuUHPjZGYhPd",
  "key15": "3R6zRiGqFgP2uWUMbtw2TgnWVAEzHzZocGLsytkcYypzTXMBorFKUkT7qRnaoTdieHRpWT4mSueDiSV6WTjN1Hoc",
  "key16": "2x3ZV52ZZrt1JkJ3YCGK41KBRdMBm9BBaUVSFiiNwSkjUrB7E1PC6vVno7fJrTa67KtmQxu3pL9icVsy3Pkdj7Jh",
  "key17": "5U8FWUdtVMHnLEgSHP5zy1otcpHYxyEiXMr1fasPJkXJvKsqecvjQFF9TtDaC62WnDZAq3h1Rg4yLfQv712mZb3t",
  "key18": "59zYL3CgJyyNQBFaCvf5xVRv3sNLFWneeGgQhWhoGhkT3rQhNDrzUm1U5M3Wj5sgg5oeAQ2zpGarNzejYaYiebgG",
  "key19": "258qom1M66Yg3tdxrnNSqjBwCHCRZPAeER1taD8kweXJqDmLf1W7RKsRHLCDmEAm1dxkG9oMAR2PALpZweuR5xPQ",
  "key20": "4r8UzJgeCKGJVNzuuAWShfWjG2mN8NkVhdNUaUtFqgay7iEw2Us8FEG8BYRf9vdei4pjERTUR6AcHZ3rBbLdD9nA",
  "key21": "3eBEmVxopY2XZorsYCBAnAmM34t5GEm7bsKXZ4nCChTWF82g2htMR6QPghRSyRFuvgkXwwvZm5BPEr1q9BMniJux",
  "key22": "3QZ7xerJiWDyt2VLbGDBqa5tn6dLJJzoCGWJduyosxZqVEpiWAtNmXEe5QLWdHL8BZtsrLEqr4oB69kcrGKm3GQN",
  "key23": "53iwekLHJMrNFnGUqttQKdsmMF4gAbWvG14e9WjeEAAntra3EYjQwPTVkNdSRPNfjA2G4eFoRopzWtiUsFomNRGS",
  "key24": "AmRtd6f9V3hPbSqDHiMqn9jJJzDk4x8EjPbWCSFigdEH6xq7McYjTWEvWngQj4NRNWgrV6kjxSccA5B7FwQ3xyF",
  "key25": "2x4u1gP4tUJ41u2AJLjrrK5oDqBGhSiRTYJfnA7UBY3n2rjKZcsRTvvFHAYDBFxuYaphCk8UJVqDiCGbYKqkRUQ4",
  "key26": "88VPDhPNenpS35DkqgbQfBtYPA5ErvECHe2SJCb8A38BKUrpQN2YLizA9ZqhfDb4ysfoC8KRywfaaF85C2ipw1W",
  "key27": "Np2C3WZXfQNJWJqWbPQPzugw9LijacZCMHpRjnF2JmYBtgKZD16MHomRfguk7qBKRvXCLLcb66NGhUrWgRN71UZ",
  "key28": "3zdoFqvaJ4n5Kw4QsS7SEoZoUW9EwfsfxYCZvZSgUJcpEeB4iGqDuYjHw4zKVkkbqGX7Y1oyTbC5ScvTfZSHKPfx",
  "key29": "59uZYCeNrMvjd589WtEL9jFdhTcjSPmLXX5Pp7oWXsGhK24EpG9zTPb5VPouBpQGNfUVucA9EztEZ4VCnWTAQ2Uf",
  "key30": "5QSNfd1C6wU6KVL1iVnoRyFYQHn3rKZJxVc1Mwj4cat1f9tqhpTmBsxSfY1ydhW4D7uhwA13cb3tzicotR546qNu",
  "key31": "jvWTpc6MdjTdF2yGK7RabSAJVJDSCRZuaShdiu5vrCG8PY7cyHDa4JAHQBkYnWXxa5Tirgzc6fyeuSijWPVWmpu",
  "key32": "2FUQgURTfiNuUY2EWGcvxyePxT74LzyWHu6CinXKhkyXVqVMMsGxncroZgcq7hJZboTzwpTKfdhCQRXQVNHndtG",
  "key33": "66cZAmsGunEiumdUmm21EyUpoftzFeGqoWcaWTSes3nZviRpy62TXxqWyuCKFyqEjZgGkSPeCAMn4YvowYdnB92D",
  "key34": "5KZn1mZserEGXFhLxCeyWSGmyUh5NvBq5Vb2B9hZw5b4rdXGZa2F5oU7XUM8aXjwS6ZnTBeq5FDWD5AvCttnM9Xf",
  "key35": "5sqy4H7xDGbnK7xfpbaay4e9aiX6BtasxZDSHcaRuBxeCDR2QpkU9qWT1tdLbXnH82KYzaE4hbuuAaJhp8CjLXmh",
  "key36": "4W2Uf8FChBMYqzL9WyDM5A6Sm7LF5FEhpQnYM3X1cpyg7KcVM9AJo9w9hiLBNGouRBoWpaygziKQGERw5RVLVJH3",
  "key37": "4Y6qsYUyV1EZvrZLP5xtPT2RzNNn46BSNDd5KTXfYYCLhxKw29ANpwbUvLzqrCkC6KVNC1ijnh7G1TAfRQ4nFGAZ",
  "key38": "553HYYnSRBeUxcgYPHPhBVKsZXgo4rVdsKVcmi5kpJLXAKTtsyAERtrYCcWB4gRu9vf19vww877v185o3bG3myag",
  "key39": "2A46LTTGTpVE4wVoudQQWyT6yZbP5FgDjTEP8KHUuMKkHQ3t5ZFcW3pY9t9aJFZd4HuPmfejhknAHL8uaekr6use",
  "key40": "62CAidMvVuDxqG1FMGTwsEs9b9XSi9rqTocS8pFSVUUTTmusAP8uHTSgRF6zZuypumg3uzrdnPLqwsZDLLzstaWM",
  "key41": "tmNS4oBz1nfkR1YsTC8zQq4TeE88ty629rogWARYaHcYjvqL3MtwEHmFCmaCFh9DHmLZXftsfCkZhM4fAGPTygY",
  "key42": "2ENBHS1sstF5uLisfck9zS9JekJpMxnGmXeWcZDwL4SpfqymkrNxiPMdubeJnPgdmfDqCqEbhcVkd4TpEp7uPFoz",
  "key43": "aVy72YRNCQq49NfvdeKeqzvTwmzJ6KwugM4DZnxAeqUZQkLXT2JK3Qsrn4igBD5GdGTARGh1UAomQNFyrpUd8ss",
  "key44": "3gcgAXo8vSMMmTjNP3ooRtZwZXiqfiKaTk7CGGB3F2qCnEmnR5zbwiQeSYeuQ94E4MtZQFJMhZ6c2XDoDhr8MTAW",
  "key45": "4Dex52iufmuKsp3bvEq978QYx9iFNLYk6bqHJheAGwcrazX1dFiUZ5JhkJisc8E7CJHC65jmB5nRtJPUYT65VDZN",
  "key46": "5g1D4ibchVpvURaB6h4SmJb3owbHaCfhGcsxDwnzq4tuzW7pYCu3UdTgd2ZBmauiQhMJzeH3r9gMHXpAWd5KM4D1",
  "key47": "29BDwnJW8YogfFUhjDyKLTSvTWzwB4rFaJygrNsZqzP18fWyoTRm8DVgBLhUyTRsMYpDKtJ42MtAGYx8ZWyz7RM8"
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
