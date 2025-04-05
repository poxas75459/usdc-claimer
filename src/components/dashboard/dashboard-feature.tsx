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
    "22sBdaqUkpod66uR5sWtW6TFM3Ldz4aApKFTbxN3J7uqsrZtpFeSuUHHfDidE5EAQaATrrmkJxPnSAHn2UfCsJAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vX9yBW9eh7zgFVwPT1MquwjKEShUYo9o5cg2QpASm4BhXMcceTxg7Corsttza4oQ5xqjJesrLMyyhWbodbU5mzF",
  "key1": "3oi4xv8fq1CqSWDXCbutvMH5gP4EfyE3wVd29ba7JwLjK2x6R4agc6y4dScNyLUiTitzgwa1HSrR4nsVvod628kP",
  "key2": "59FMXxkpYqAeguZJLSXZt8fGVBMkJBRYVkDdtpTMkeWzSuvp2iMefjoyAyzSXHL55m6BRVhda1KH2svk1WSJV4hh",
  "key3": "dpYGSLsHJTHUVQaanqTvqP8NX5g7eHzYf43WoK4RAhQXLejtSjabvx3Lg1L4rGdA97pbcMxxvfyJMTahCjsU8PM",
  "key4": "PgfNa5AavrbwbM7kqN5mUiGG2dUczU485DUCn5RVNJq9xuSgGRi5D9YTTabNJG3iTRSYbSHwqjLHwAhvexrvnvZ",
  "key5": "3cqyqzcJfNG3as6zaBZ8rYHZinsgPzLCk3YKdiW3tYwQodRnTs19iQdc7bq9dcwq3tNsag9EAdRxwjEeMh7rdxuJ",
  "key6": "5PdJQPzge1c66PAzNsbM4WwLpkEi1kvLRGVEHHGmsRx4vGwdMRnt2NvkSCb3WaeTwSVwqfRPwomsomxcfPQwVvt7",
  "key7": "5YQSLCyzceTAGoUeEPrq9WgQrveKzW4kwxMEqetZJyL2GzqMnVSuGqtHyPt5USpcK2Dz2o3bVrhWzWDKbRK14mBp",
  "key8": "3eXjLqYCWRDb31KREFQfxgZnQLPpaynwxauQhYYG3ymYYdFvkJziWu2N4gHQyxjgNHZ7ctp6pLCoPqXbj749H56D",
  "key9": "5h66PF75fpYVDR6mxknxwerA8NsR5EeKR8h6gBSxENTpSMnB3twihSRatKLAeWF6UkFqJuMzWG8Q9rR8Ad765gxY",
  "key10": "5Mx613YNb6f1KqHPUmdA1D5XdQ8PovEPJJMsTyjcyE2bQebb8R88yvv3GhxEUnQGZy3bjKoeKsebtxDtPRemQwyr",
  "key11": "617Z4AQJ6KLey3nP18mzmrQZWe5LSvCuUhSCCH2WKDjxiwNnumcUnG8Ez7c3um5b43gncgj9H9phHfTT9pvF2eCo",
  "key12": "4jLvfmM5XnHg23Y9ZHu6ifKSaTAGfxDqrUEQa8hgc53xNUs29doRJdH6dtsjeTUAP7ncZ72s1eDvv2STVKHccxAG",
  "key13": "2mjj8tXa4SKqvq4zDJPUWdF5575g1EyEsNSbhS3iQc1f1q8Uy6ZPhDjPTr7qsU5SwSZTeBnWdKRk54TYuTLeM73x",
  "key14": "5XRPfQqaXCmSKPHGGqyTZnHG4eNNzSnJQ6Snyy9DBtrNBHa9o6vLPbscB1HL3GrXstvMgi4U1jnA2jDxCdjBQAMN",
  "key15": "5x3kvGTGaBxJVCd1xnwv6AaSKNXdqH7duTBDvDKQi5eEWqFPZseiDPTsCH2rjzBCYUcQCN1PhGrdPjZQu4iSG18h",
  "key16": "2B6ZfWVM7JZDhVJUkxMn5m3Y3cdnR47PHRFiPkqRrBq3jY5wqxgRmh5u4uBtsorbYiyDsTXp9frgSUdZ3D7mMQqD",
  "key17": "coB1yvky4uR9RS5XbYPHgH56g42KW6k3c1yVLYD51644FnhNEZFJ8E9tMsmhiP2S6u8H8UiHsECSAijAbhJ3UCo",
  "key18": "UiTcHDekrBMBxsBcYWetnhrGjFKU47WZ2WxNajH96dERdFMqLGvxquxwzU1zH1qj1ChiY1YM5B2ERCBmNwnbAZS",
  "key19": "SfvLP4q9zZ4tJVM2BSGJxuAJ54vgki7U6mWDhTAc6yawZwnhyRwTs6B711kbBj1LSVuZ4yy6gcijThFznvcD5D2",
  "key20": "sCHTKPjarNdj5VjNm6oxEyApqMQFaHHEtjuDLf4Qfs7pDRLDTKYYnXbpfPNyuLTwLMj7QFTJqAe2GrkNLNU4KCm",
  "key21": "55NhHX3sC65hQD3pUCBs4nqs2cayQopKiAc7kAowTyi1d8cW1chbtyfzFeX9DiFncmH4VrxseZdu3qQ9oGp2rmgF",
  "key22": "2S5AvvkSBBnUmw1FbTKsS4dFWCvGp3aJMTNyawzfS124tjqp8fn7qGh2wfgsH4ypDx5xpKEZPw8gKZwqrGcX8sWU",
  "key23": "4Sd5J52MvGnPZiCLiyqwNES4AK5dYJcQSDhCT8N6td62MpaXMuxQ3mf4CaYV85BSpaXWeGDuoNYeuHH44pTBDKgn",
  "key24": "63392BEG4fLY2N2g3fRVdurEwnoy8pLTL8FEqBPkEHXduy1F9s2JeQnbHAkyEPAGydBvDo98FfvGvLgDGN3JB7ik",
  "key25": "5PkosSA8Mgafn7wb16e9Tg9C3nMAB6MmUcnkQJHaXgY822ht9e9DiTC8zN9aSUk8QMf138GCCJs7J3C9qCHe24nu",
  "key26": "3VPTu6gpfr4qBRh4JrAnHoa6VdmvutdNqh4mPUvG6RerEisCU2MTJvdURbvqBGWE4NDqicM4GcJ3W4WYBGLVATAk",
  "key27": "h2PZUFcKRGRVqZgZWyRsKWuaDfzNcv5uofLtmQcvvqgtw28hnztVaBLuFHhxE4gEBfut2hfJFPk7oBEjfTS8fN3",
  "key28": "3uPEmxfy65hHYe6XW8HpcoD56yjWtCcw7MxhJuZr34GwuFa4cja2WJ5b98tP89QPCtmwwzRYk7o7hip7RXsPZei7",
  "key29": "2XAh5AEKxRnpGUPmY9g2JEKtQFxsrFmHKZCb9zSDNmUJVWBXT7gep4y7YFsoFoCKfo1DmWRvbF9W9o9bq5KFKu3y",
  "key30": "tG3fWp9NYd9Kmy4fT9HR8fZaXhN1FpyU27e4ZMrMv7CqffAaQg9D8NrSgXRV7Hbsn6jdGWQ1mEabAMcoeHhitpU",
  "key31": "2tLZ3WXUExRE4VJDHwDcQGUHSGj9BZZ4SovAsb4FFCgkxPubJjyLqEVHFAGM8MJitqfkYi5ULsfyjW6rRNUdJsHS",
  "key32": "Mr5N5zMpeMN4NoGkJraXMYtAndawbMojh9RPCBqsxNvp3M5BAbvd9j4ji5gVkzCkeEBhW84Gdqk8NXvveKX78vE",
  "key33": "E5irGR8iBBduaFn8faXfTEAKE9FZ6dvfU6ziXNz4yt23MWVEBHPKpv4NuA8oGF1DJ261hAEXLhyHRJLtQR7H9RY",
  "key34": "2U7S5fTJXviTcEid8NtEQaAKrnXb9s1zqrF4PhkKNgARKdc8QJZpch8jv4KHoLLVWUSdgrWcxr6Zdhy3bs8MUV4H",
  "key35": "3kaMvkvmAWwTw7ky1nA1wo4pUQqHfzTQsRJLL7h4jPsYiSxwkaBtE7t5Mfmhv5Tud4heVFFcPyQCZjL1KsJ8YN1Y",
  "key36": "2XZzvggzqt1AA7WQFujhqKa7k7atRauijUanUYHY2Noo2WSYNuDWYPTxe65upqVZRPz7yAQPEXgQk7a1CaowxKmS",
  "key37": "4yufcptjmCMYmvwfWZBnQiRvYYRhRejWCofYv3gjwjHS1XSqbRp2dZLMVpoL9yC5YqzFShEbLSN7yuva7eosYzdE",
  "key38": "2wiqywLkwdSGF2xwUguydsSP2GhmBVByTk7aqoDdx5R2QDckwefgmHiW3rrAgx6yFjRzP8QCN9FmU6vBz6HKxUCs",
  "key39": "5FSfXpsB8SDNoWgr9t8H7xxLj2QJbhzPz8B1LB7GSTRSW4bVYfz6DPt1USerBrXtdWhq7XZALqNs9rV1nYqZ4pdT",
  "key40": "29bnt55Zp7YthDTtrQBkeDVwQdtGbLUWZMwmxjiC9btw1YDzBiVr3mDGjVKRDs3mVhDsQMZkjSMpw4M6Er6FJZDB",
  "key41": "8njE6QggnnLdWX1n4PzUcs9GcJ7UxoMsmV8s1ZQQMUUVNp5jCwGxKDdVfkuiQAE9TVjFs7FaYhjYrUQ7SbGwoTj",
  "key42": "3DQCbXfQ7cBGymoeCUFRJiMCcBEA7Cm2FrqwbJXHsriZS1ss5CUqgfuk1FzUmVEHnqKUJDeUcUKHJ5vUV2EJcN28",
  "key43": "25KkCkJAgXqE1bUwog2UgrAmV2xaEhe5sgpy5tEWVP3wVrwaeiT9hPABbuvm7RxmJYBasb7jeEJuRF6NmgeT9D31",
  "key44": "4phNJ9u77ARuWcXAXThn8XbbX1QkHR5vCy6VUe3B9Yp5faUaJSa3BVHSR1g28gETUgLJt6rfHCQYf3sGcspQeUdE",
  "key45": "3awveKqcbWyiMVKjU7g5neUD2kk6aJJp8E9vSavW1vXnrtLvQWbG3BkE2HAoP8D33tvMU2LknjwhkLZEqrm9dyvY",
  "key46": "UBazH2vsirZRkkP2uapZz52zv6uDRHbRjtFShqMBwxh9tDoZgWdbZciyJEv4sn7SidsYMqyzYg4ckvLpGQj1SzL"
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
