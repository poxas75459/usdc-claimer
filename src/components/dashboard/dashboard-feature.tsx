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
    "54GxkFRtFuSwmtSir6Wfv8KY9w555Pzxu7dFQjU53yhwRUF7NeVZgaL7jHwgP3pYAaqGN7Z9zGLyh6eACbiJXahY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1jfCiDbD3AsfzmAW7GemtCLJhL2JYNsSvkwAEpghskB2zonChcJi4MWvk4oMByBEf2umbjagznne6QntV237hU",
  "key1": "5N6yy5UQfGjNLZe9ZiXv7GNJ9HSu3AeF1XPtp9ecwhnZoZAmgKcxpXfF9ThsT9JNroVVt546E8sJQPcnmavkJfaX",
  "key2": "5aNzttrQoN3Nff7Lk8hWEPPnNPLsqi6ratUQkCKmmw3nUhkis9gkyqFmdVrpZkTMZvGLeamfaWRrfm8Xtxsraw9W",
  "key3": "4UXxFvq87Pe8VgbDtix36Xvk12T696JL3gjTUd6hyZEiXjASJxiWwagX6AfXZN81QWkYL6cfgPRRvk49zZKnHjjv",
  "key4": "4qwNKaLiciRaFpV29i1y7TQFXvhHSXv1QM6vDYojpbcuVVg8xtAy6a8useEzBcuCYLrnRLZRhsmWjSD2Loht9zrs",
  "key5": "46wxjKgay9u27BFa6dAGoHhMUCU5bReafVrPHSJfKGiNyF1z7FP4CYf5RWgFUhYoDu8d3Vhf8XtX8kdaiQFV6AB1",
  "key6": "4gsNtmTwa5YQCX5iUyJ7Fh2esw5M1k3embyUTSsq7q9xGGhyxYbxrs99kVfLv2uQ5EqkcaDjGif2ekw3SA2oCH3p",
  "key7": "3y7xdKXiStH2vErRAbrW24byHhWZzcHGFfbSRL27E3pJ6rFPZbbZQfNBvecXwb5v73zi8fRABYouqizNzbndHKgk",
  "key8": "3jyCZNX6r5ZuJDjdaxV7hbxquJd5GVm74BdQ2J3Z5gK9SHRTF3oCkaPCgmsuijfVcXsvRwrDn6gog9iAfMB2HDAC",
  "key9": "4QLzFhAkJ87nUUc8pgBFSUQGNwL4aPCXUCBGufmUXFggujkku9fZCCkUtE9t3Zob6Nc3Fkz5V9hfZaGXkLv6EHsa",
  "key10": "4VhG1dJHhPxLf2SnBFYjxGYTVBULaaAg49JpMMqEVwPmmSmuXZuSijUXFXQbpDu9N9KXBGBCWMzxcBiwE68TdD8m",
  "key11": "4MrAXNehBuxgJb2k9CQvNie8Z5MB8Wd84B8DekD1MH3DaMChF1Q6SdKgD8ewMQ3QpmiiizyXJyob5p3F5bEi8M8e",
  "key12": "2xhfnyMZ7qh4fbb7H4NYrn5EvzmYtHEcxJDqu2Aat8aiEy25d6Wqqbs2mcVEFJNYhzTr41UgnBZb7ubxpuLfLupa",
  "key13": "nYzQUZwKJKv2Zh1JsvXXKvg1fM8A6iawvs9nowAQdFYiun7JMFA6UxzT7DWJPSU4pCy86uYaUpugJJsQcohYtse",
  "key14": "2aBaHZ1f8447HzmkmcHWwCfP2DFUaSEc6JGpQkxeXeGVsitbFGPCT65oRRPKkP6J4o1EjHeH6CFuxfyhVkxhjFjB",
  "key15": "4QRRrNHrRrcJin92dA8inHQWcTW5mAnPuwjhQxmdGVqCADBVeQ8erksbAWvmEAbCGvswmgYN5w7ssrTa6yJYS7cp",
  "key16": "2Ao8jh6FaEvfRBrAKi4ZiEFBPibkSmbtpthkKiwMJu9drbXCqFuR2nGvCL9XeynHk1J7uoKcEMyLVjrcjwUehA8b",
  "key17": "46g6jwqvFZGXU1wfzq5hmcYCSjEA1zQFhqHx5dQh1P4MhXS9r6BX2eY7ZmkZV73gZiSA5HkxYXwmpaNtBM12iQAB",
  "key18": "5j1pifUu1Nj9dtApSDeFEz69rFyrxT1rhZr1enMbnkA6oQFpjDWx8247rcJuAVEGCngJAcVX5RRQdBtuAwBCtptS",
  "key19": "5GrNyzJMp3SHpX5GUGTo468dFc5735SLbsDDNxLqgT9z9y4eiedYYoSQYAgovhfaqfzJzW7dyQa7bn57Vgcoemxo",
  "key20": "3M1XLaNHeqNHkf4uHegfjF74Faipe7vh4u71mDnG4LsFpMnUDwz5XDnoAaRV193Vbjw4v6uu6nNxLSkrn9Z7k8zx",
  "key21": "5evDq4yBicfg6cwY9K9a9JtQJudbrUnVXJ2Yo2GvZjUtU9iz5D5aQPGdKtdJc6kT7dgZqFh5mKQsU4m8QdiCvcCz",
  "key22": "4RnV8pniVRqXfAT1HB6m8fVMNPGUNuaxCQYKYncBMaYKxsFXyeV7ggzTNy3xMcPbfbb5o58GJcjCwqw1jFvXprG7",
  "key23": "4voVd3XjBTzzZ1TEXuWdwvLT6Qb7r62ZnG4G8he3S9L36mWz9Q4QJywbopQnwNLxsGaGrgUkP9gfJeUsKJuYLsEr",
  "key24": "63DATm1L7nBs2Dpae1HS2QfmMm4VQALs531TtvzpKKn58E8W548FpC4iZGvQ46mEXTvY6TJeNkzKWpQCqr3RmGPg",
  "key25": "2bSjb1LufDEUnffjmC5ndzGcjmvEV71YLZiGq1UiybpQwBj3yEsrsxYiYJVRfcnDmPcBjcLjbM7WEm6dCB12yGCz",
  "key26": "4N5uGcmtzC4pbpCL74npGQNpjpJSS3bQTqhuuH6znziUysqbREoKnHjiRhtWJXkyf9xT4gLmTwvcBcr554uYXacC",
  "key27": "2cY4h8RGbDoaRu248uW8uRPbzrzweTdwHxbTrdZTMJZfV8XeW51ugXUptp5BMipinnWJ5fDaL6kJk1PTgm7BsR42",
  "key28": "4Pz6KXvQS9jCdwP7pFZmd6BXr1TayMwUoPuhFJbLGk6VPAHbBe9CNKozW9WkWrnD5S7sd3XatqKP6xG3N4XwVEhv",
  "key29": "aUDgivTXwwErxnvvSZSoV6EosH9SaZryKRQiZr3hHtc4SCcbbgaHArwvuKgVmh96GMhezQUVhBndZdTZYjvxcYu",
  "key30": "5v2eiVkgGKbLBLcq7UVzSvumvkLrsgGovSxh72GPpBw8jDH8wb5Rjc2GLN3VHvdjsKJzqXmmSTHGkB234r88kumf",
  "key31": "qkLdZEDiTGovwkiM1pJY6Ziu1bnwDUMFetfTYbSRqNQxnQ1dvTfSp4RZKsypA3tqx4CRr6BVxMVFgmte4r7M4tK",
  "key32": "4AGZxXtbEECbEAx7S5p8MyxAeS7DS3P7jJbwsjvw7GZbV1PAcMi89F3RwmaReFm7UgqWykJoS1DVTGEAgwUtXRmW",
  "key33": "4kjE2Xf6JXLnq5Qts2btMdusyRWs3WjdLs3kwW84cSAFuf7BxrQK368JHbwZNduvpszXRRtgFi8LBCYdmgQ7txWq",
  "key34": "3FbYPPsCn9Ss2XxiHzvTzsqshRBqXJVM9o3ocympBwUS1WDhjRM47Fjrz1QYsNQgNn7Ad635dUfd1BX5v5KfhMYj",
  "key35": "eHXbcEFpj7Hgpe5XnQMsKECbMZ6Ce8uEY3qZKy5HdWQ3H44judYHY2QaPQ6Eo2XzyTCgkuyYGBAhN7kJsi94kJo",
  "key36": "2vGtDG9SJQQDRWtXoyXjc81vf5urYU2bDejnHfjJC86Mavqqfq3bqz3KWuWqrMaasasvTqxY4iHcrzKdtaWh7852",
  "key37": "24Mc2L3oZVz6pW5htCb3nrDDm8W4cQ8qUxMJ9xEL4DpbsQ2wCTVzSSCzzGz551yMUsuGwuPFr22hdLMpHKzKmjZW",
  "key38": "4mtbht288Xr6HUCr5xf6FdQEX8vxUMYwvGQ65Tq1Q7udkYEU9gia5DfVenkAk8CupsUqUnPEHovr2SUCVDDJCtFn",
  "key39": "2b4Xwizy5j18STvt8rD9zF8sjMEVHxYsuSeMjwGdFi7qWVTETag19qr5xd1JdD9vUiP1vKYD58iwduNonKgFc9ZN",
  "key40": "4RwAe9DVyi9CSUQC46W7P46A4xNyWVAPRwffeawaDmfRryp91MtqRHsb3uXrxMe76TDG4KHxENT4CeJSRHgagqoA",
  "key41": "2uAEL1ncrJg3U1WeygpHtuHzhkhrHYFeUjM2uCcxhJxMJTufgXvTHQZgeK2qUT95YhpuZxiSE2Ynx4Kfmah1T6Qu",
  "key42": "24bzcfSNKbnvonu3LwRvwmLrBeNjG1ndcvDbcaHSWpYkBjkMQwd5X579N3h4pmBM4v9tvijFZq6ZkGd3nv4kmrXP",
  "key43": "uW4dLRHmsGxrmRT1LHxszWLs3QkpFCVcR3R71fdF8WaWTAMV6cDwXL3i2q7DrFdXDxNU6eCB35NQdrYcEMSsTpe",
  "key44": "37E7Aq8VvgohB1D3P9cC7rBPPYGasUeX53NmgAES3QwUA23JoZu96xCPT4NsNA45m6d7eih2EUisQekAkr9fGdka"
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
