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
    "2dZsxdhWobRV3X8vPaGCWMt4s7j2mUwqRZxrKb2Pbm4Gz9AAXGtehEdwYe4ZcWr4M6c1LrHzEA6fKSvCytwBfP6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LPxaK65vVeu6jtBeyFpy8FYCiF9LqiMrqe5ActWTqgwgHqySaBJsRtiC2rhcQZNBTPZxzRwpi47KPEEfhgynSY",
  "key1": "WL6wujQuSCqnSsvmbAccFHPNNmUkR6w8HssE3iXSZFRvQQkcDGhcRiEBcPtXELgq4vqGkevFfHPHEKM9cqTop4d",
  "key2": "EZtgbTMU3TxgxExuVTSAPFCRGu2Tt9xLdfjZuEQ3U2ToBRHVXccwpLcAy2RbHGSgKELCyig9V4jVfPHi9HAxr9k",
  "key3": "7WhQ8G3trKAzKZHnC9AYv9VQXpSri9dgjFJ3Ne8DC3VFtLxK5BreSjKZNpEQhV8BbnYr5KAgpjML8P8UsunB73e",
  "key4": "5yAgE3M2n2x17rYKtc3KHUCsG258wKdN9Fa9jMU6N64HuGG84QkF3SZEmg4Zm7Knbi2t9Pd6wh6x96bJdyTrEB8s",
  "key5": "3L4cHZCzq3dAuJHuTEdDiEFt1Np4LB4yuhjEt9HyTHg3HvRonFdWsvN7StZEwFFsN71MAEgB4QHpP9f9EZym7boq",
  "key6": "2GTSdKF1ATM7ncM5pNe6jqdtvouR2GqVEPiLkyKBpmXAmGB3pBG4cdshUXtxPxqf9B6cFsbCze92dJBa6fhSLetc",
  "key7": "4ezyaBhwRUs6YSiMsyvkW3ngTqMRQv8B9V4QZ7irs3GRvmaM8Hwe3NmHM4Wt4axGtvfkxyMKEu6YXWTJfTL7nDVg",
  "key8": "dP3Yk2t7tJQD1sFEZHRAdynQmd2atUeLknf8DGikB8CDKPZtz8jHTWm9WY4A9Sa1Mjhew29p5HX4h9Z66iJNj7n",
  "key9": "31VxbybHUHgyG98QZBxkUgau7qjfHDXcMpmaZKUeoNJC79MtoMZGrNxfqQJtY2qntGX9XgmV7H3suE25Bbsuyh1x",
  "key10": "2AtQSixsd29JEo27ouHocUVh4YTUpX2SeU4XiYX7qjhGD7Z5NvSjaudwAfFps2aCNz6aoQtZv9WWgLbfmLfRCP8U",
  "key11": "2tyUDx2abUowDBUXsZZDJZgXrohiAUGts7WxBujn3Hc7jnPeNGqt92frpijHcHFibG5excoXX5bAoWuwCWNXP7B6",
  "key12": "2avH1PuNwbBgJWS77DBsmPd4AiaPo2UBrANge23jEr41Tij51cz1yKNwVCSo2jjTYzHc2mLufzexVSLzRSfBfStm",
  "key13": "4tfgfVj7ExtEVXKqPZ8xQEBBQ1HfyXLR3LWbNdiUKUZtvYEeLsUWwMy1TkUdu2a5nzaGMg4cQfBDo5Vr1StZNeLa",
  "key14": "2vbRfjxam7AywvTvoaTpihwa1wiy4nGcx9SUs9kEDA7rG8MZsfaewb4SNvaAjJHBW1jr84VrW7RmChLdb6zL9TDk",
  "key15": "2wRpMDGopLnJ4rpDTadZqVR5R8zXdqug4ig98Kn5Gp5afrqhNf9ULUthV9daxTAWjuJNAMY9yohAPpVvL2ewCJty",
  "key16": "7gYMgR7zp1QojiefgeoQe3WhwCLASqy3x6xJ6CQjys9TAR4ToFwz5qyZSMpX8Wbkx7FLsbqudXx6ZLSwcwraqoY",
  "key17": "y3kuj1JxPaTxwCfA5Y36YCT1hqDcQGUPGpzMRzfDGnAz5pyLAdcZUiPDfHJ6nazAL42WJiZyWiobuHrySzxUZy4",
  "key18": "48aRGBM1tV8PSNEdTHEae2aMe7vVYJvbDmyKcaRH8AGdkaW6zTKNmbqsxM9kxCdcuFpAkkoGy64Wmmkpj56ncYdh",
  "key19": "33xxct9K1qiZRpuLD8FDkZciGztQfKXFF22grid9W9HQ4FhvKGxtbfZqBRDLHt7aYVdJQs1gyeNBqapFphVJsHGm",
  "key20": "5efn3ryo3X38bWCZ6BhBuRokE9wzH86BPi6DWWqeVsPrMfAKAjFP9PbVZ85WjrvvjqQbmuB3B19eaWFoHTMm4pxL",
  "key21": "4UvsawshEZcrT843WhCcbj2xvHphi23xR9gC21oxq4FSVtSCezKWkoAHQQ2pdPepjWxvuAi3h7AHyqp4zWgGwUPj",
  "key22": "25e3Lf2sFiq5mhxZDhPCHS7ozPPnu1TLd5kmjM9HZSA5FA5qUz8UpZT1CtrhwtXapD6pTWUCTdH4pxZwhxXfhfTz",
  "key23": "3bLUY1ee7N5frWYaVRchtxw3DGt64rNWWZRKwYXyAH9DbTaxoPHE9ExdEckUQg9sGCgZocFBFunwARofx2vS5Jgz",
  "key24": "412ZP5BGbrLthgXSUsD7n3jhgxQYSD11kXoAgzq2MqGhyuXqJyb7tX9avYDL97ZeDKZE6Jfssnap6w8pztdpbFWC",
  "key25": "4uPTSshgWGZcSVKRgRCVd6TP6mYQjRi84duXRBAb8Duxn83sSg3jqtB4eBxyQeKASVCMjZ9ud7rUp1LrJJXUDfnn",
  "key26": "4a5huZTvfpDqT7gtnPc6o29qa4b2c2W8XefcyGdnoVdFAbY8H3FEmfkq8JSJpcUXv1fRZvEgfkFuYhu9R7eHMqYn",
  "key27": "3qjfXWxz1HmjbZ3Mvu3SaEbwG9KyqLYvmddu3apUNq8FPZUsaZkXfvNviDPY4wUN91wAtydqNZpyUzyG482QYSfS",
  "key28": "2d4gLc8tfcXTTvre5BUf9xZwo5HGebDpx4wQHN61qNZZrTBhFLbBJmfFVZtEjxgTzyjHCiB7gJnjmw5w4tLift5E",
  "key29": "5uFuhvwYTZFVfL69dTGt7yPDKfMdeVw5v7XZPhWwF9rFpUmVU8WuBCWQgZZShrehqCbdspY5HmUYQGrW4hgBMLJ9",
  "key30": "4doVCdTrN7QKSHcLxEBYEuSuyZKPrYaF377DQXa1o8qE9YVp8Z5j5n7ENKQpusLx5KNWqthA7oRkK3r71AjFg63G",
  "key31": "5nAGmjm76s6EnDU1SnnPQ7rtdYrJTxVRTsWmPRFiftN9Qyg4th1TAEJrFkhJhrRXX22UVgRZKkQ51JDtmUvbFBqV",
  "key32": "6qMEHhpDvhiMBjxysF6jZXhECyWqfG2Lvgryi8FjFnY3c1ug8mLaxXY1aRL8zyKX2s4cKZxP9mtgAMVF9nsjAQ4",
  "key33": "wjNZtxuaQwJWubLG8wqs9GEf4UZfG7z3tMFNRDWgXbFbD6M5Kt3oNLcZjpyWDnEW96NhYmVgqQtirmvwBbHQpN3",
  "key34": "2XkSCK4hYkY9zK8LTnHsxmFkzX7BV9NFGEqhAXwTfnfwqFWZ5BTm4N76v3SHDf2io4CkoPy6jWKHRCRfx3N25zDL",
  "key35": "BsEoAyvCFWTa5wSJ9MTWwfS2THdrVdCKCDnt5wZFnW5qUW4NKM1qMMcRDTYNXPwHazRc37UNsQaNshwB8AEfeoX",
  "key36": "2VrP5HyPdCqsJXeizoM4Y5rdh3A23two3Kq7q6t6fFae7CBumKtNHMcQRpwv6AdKJswDRzata1xF8QJDexE15HqN",
  "key37": "4TcekpV2r1FpHYDHBwE4cHXdfjHto36YM3tcbGZuB6fsjs2UYcviCWur7ruhuJgwkGJxVNnN92QVT57BzFX5oCB6",
  "key38": "4k1P4NHWQWJqzHtdkAtEXQfkzBq3Xt8DNXrsKrKPxsesLwK1PZS8oPqfgwe7HZWBRFs9dRk651YZFS8epr25mZZS",
  "key39": "qDnTx5svWfDcP94FmzbMkhBVw9csoq5hC29wjPrsU5JvgEN5FZ7Fw853eb8Zn9UdfzBZaPpCYzjj2Dq4irQ1Adv",
  "key40": "2KCKCx6eJdXx1vwLXC7Av8AzTTfCL4EaQ6jJXWQVkTPxuonGHKMe1kNzdwSQjzefZRjFzPf56pxJwryAmMVDi2ZM",
  "key41": "3CnXPt4RyeZiFByw5XzFa77LEBUx6WeCH8PqDvrMyfpDz8YvEM25BMYJxbPi8f12LHhgpt4NjD1xpMzG2mwM2AxB",
  "key42": "4g7feRF439GFDsZYCzgSKvZtU6njxceSN74wDVWLq5A3mrdtChWHH5Qx7p8xFdieskDd9Ne9XxU7JhMgPxhB53yT",
  "key43": "4peg4MnMhgzyRn3tEAfExzmBHo2UQfn8AFPZp5Nbq6sTRjus3BoN8JjTh71dp1mRGKrDGmkBsohfWAA8Whi1xcff",
  "key44": "315gNFUNg9oq45LUCvmEbPsux4UAG53S8CsinVUsp9dZhq1k3gbmz2Ak2YAwD84brxUCREzjc9S4jc8M7iKEytZ4",
  "key45": "5M2BogpncXoVq7KjGd4QmtZND53cmsH4Z7cAXBWTcYwotsoFB5fjwGi5qXrK1MZ9EGaqgzchkEsFrc6Mgd6May3u",
  "key46": "3ZJ3QvW9NbjGV7imkak6gCScCDz26FmYUz3hbuqgpMMCJXSpdpZb9TGJ53JMpHnqt5jeWq3ajMjKn3PbJk9LNZye"
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
