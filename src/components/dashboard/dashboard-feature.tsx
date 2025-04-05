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
    "4Uzv8yd7SvbmZ2n5iADsea62G2YaxP7JFmSikTztGNHgG68DAcEUVogEACw2n8V9MXcYzC38zcw8ajiyL92qZSft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjVxtjjQWPEgGacNsCMtcZkWdKty5Q4pxJMP4VpFL2sh8PFADPwq33dbu3w2dY5uPvekcnwL4iZkBFtii3pzvaD",
  "key1": "4bETrvH3LucxcNFu4eUTKZ3cH71xMwJsZHA8D3X4WvaMSi2FCRoVhNM6V96GxAprNb5YAeivj9LgzyXYVqioasrv",
  "key2": "3LahsA2nQXZjCKbN2FtjD1qpNk89XXEZYY4sG1bMxRQnkuS8Sc7GTLC7WsLqYt8gbiAWzaMebmc6JgMLHQDaH3K3",
  "key3": "hSKEKSGsMNEYwKPbwSpuLXJnzAQeYqMdLeqVQAvwT6ee9Xa3FAx7X5iLpzft38vRPXTncbkC5tnNSuuwbLdizja",
  "key4": "tRRrpZQVLSr2HeyvUSjJPUqqE28jPwQpLeGefAKK4L3ZCVkUK8qWc1ssgrWdoRnjhYqrm5tYbQE7STA6uoWS9zd",
  "key5": "2Ndcn2YMeXWa7cxyZuJYLpD1bGczwX9Kegs7o83FDxRdxXSQ1VkDnLpxrpGt8c2ibXLh4AZjJ7W1zLjxZyWpNuv",
  "key6": "5sBp9EmXauHkkJtrEQ1tHmKyhSU6dK4eJimCg3rWZrtwQ2Zii5RR3CxSUEBpeL8tdNmw7NTXytFmEgmZrMfhChvY",
  "key7": "5nUEoFUCVPcVrc8snFxPt7fUrrVRreSyeDM6tWc3tF6x8kZLbqGWK28iYtcua1zzGo54na5PPWyfwD3kZMYWGihe",
  "key8": "6438VAd6uSukxxJGmgUv3ev1rrdy1fqFX79BKy5XwxMfcLwMu8zwAEkgbZczkyAgJ1XRBvvvGumbXeKdjsrc828h",
  "key9": "2aQDsm5gfdNNQ9mzmjYNLJUbMoVQF9aNvuXeWKJ8Y2L5TSfUr9bkXjwHunE5mJCKh7bKrM9uJffvE9WtTJhhwDM",
  "key10": "2fAuffivwyFCPt7WNaEGoCdEKsRHs7EQnKeyY9QB33LSMrwsNpKduHaLfYrfqczDyNp3NZrqfag9zENoi69SrLK8",
  "key11": "7WMGT1ysShS6AUDgWPNu6fhwtXgpgZLzoYKzHE5J5PXK5unyEq6qCX8oS4v55Xcg6qnSC58eJ6epSKJzjPsam75",
  "key12": "23nGtYbJamfEdCg2uR7y6ajZTxchEuuYz3pDz5PBFeQiCsPmDaekcVCpAaPiEshhjzRRmnW7vEzjsjTK6iwXuxnE",
  "key13": "2KBb7MTsgZ3durmrbSaKqLQnYs2F8FgKTB1ercdaXJ5NFSr9DLdbPMAQr6itfSmBpq9GR7iYkusFjDc1VqKdko15",
  "key14": "42YsyeJdm82ecEmzYzBAqRXR2XJaKJ3JCaScnmmbkWFbdySdfFACnFe1gdzyPU4tvQBpXP6j9PzmKjWjbrojY1rt",
  "key15": "dc3iijHpEYDHacmoDPH9Ux4kmg1PBXa8upjZc3i1NJvXJ29xCKUdCrUQZwJvRKJSwC9RuyW2pxmAmHXFPoedEVs",
  "key16": "3k99hiRbNnvDVAri4SVC5ZEimoNGjiX8nTHBzi6YzcXznnaV4mGo2M71VVqvsiFDA5wxYYQfkTyZHXNT7Kc7AQbf",
  "key17": "2gZLu1NF776dyjFLY1AF8j9XUxjQFJP4JD9o9xhYK3QCK4eTGGujoofW1Q6LWo13q83Q2PpbcpfE3wGLRSQgvPaP",
  "key18": "3B7diVRuB4vhVKczCeN32aFtpYhhymV21FmEb6cEfd7LSzsSHUy1zW78chQq1mjKd8DikJLB6njq3DSdyKp1Dqyf",
  "key19": "5zjLY3zxZWJMDh1j5YUXUDQMDF9rucBEKKzu8yGbXrbCHRHDQFVQ5z7fDQneQuQqKzJs7Pxzcfx8Uvi9ai6QbE9e",
  "key20": "7oXJ7yLcVBbRZvkkGqmWdrm5Jy3onWZVpH53iYj4PwwZ17gjSkGvERotqefL9UnHji9Ygb3kk1G2LdasMcDcaZJ",
  "key21": "3bXpBh5ccUsQJ5Zb7RMQHXQMCuXinQcDPd2MnWxrojxo4qKnv3mmQWosEZ7WQgNso6BgFNHhLUy9tu9w53U8REqH",
  "key22": "38RYYCEDeaHaW1E1sVZwMC49ZjJgCcpQTcebZtAiSKSrfkBgsq5B55Bdgba3kVoSSM6NjGds1JA7tT2eBY3LhHQe",
  "key23": "5rrPknr3BdKMKKrjimM6c6LNHpDgoF9yxzxnN17MJ9FzaZ3oP7adoLijaaaoUp582d6CmWVvpPDwKe9EGC3L84es",
  "key24": "TXJLT2TNgzUiPmtHzhEZjrxDugHazDsZDUdrFd1pRBcZaeiXJh8SZRzqgDL2se2qqAeztyqQLeqfM8wmAhKebYT",
  "key25": "3YXgu3EQ8QnfMaF4VgxgGHeYD1hGm5iMFWC6CizmwqYdP1cPJTtnWpLCsrm2YQYe1yMnyEvVxNZt3KyrAbU2mu1a",
  "key26": "4gWzzeaeRKwVy44FzAVsnWcdiQfHSGcQkGgHA5eZszbrBaUFLbmXmrZsU84Dvgq86ksyri3p6fFQc9MFpHJhN5Tf",
  "key27": "44FBnBtH1CHTThWYunmQjMtZiEY4ofTntynLLRsBossVyNftsJ1wwQiR7FZxMQn9Q4NhZk5Xf9t7xSrtV7Ct7b9W",
  "key28": "2gmAzHxFfJ3cApJ9ZCfUrXjStT2Kr5bX22qqMizcyj7vGrXfcjmrfjnB3LCStz6AQPNnNFxCtq9ToPdZEaNfwCFZ",
  "key29": "vFpxvjh7ju7kssEGHmSTvbU5o14o9fKtV3qs7iDkVE74VnVPrhzvBdUk53a7bEY9E2ugtxet15ACsNJ6MhGERwM",
  "key30": "5QLP7VjH4VcwskaeftatBeHbpsVyM4JquFo6dvaBpSGuEQ5ToyNYnVRXBXeGysH13gMkcWmWNBotwTJ7We4DmsgY",
  "key31": "vM4Qb11Xg8j8fxfYYJjagGr2fYeXPHewFa4nyLYb63KXdXp5ipBPboaxmWoq1QfVGUsd9VE5tRPuCSmMLebxFxJ",
  "key32": "4aMLJjzcuSpj4MVnHQZ2sCKhMUAPPLo29GjRJYy26yru9iyukZaCFB7a32PZoyQ9xBLwbCgxLYQG1yMMgT4bSR2D",
  "key33": "66QMzubXPQUXVFUZBq4wr9ScpKUr1jZJwDrEmS2z2LqxBBNzjFrzfgDywghCiRbUMFUphWWudmtZMsjqHq7PC9F9",
  "key34": "2DxyZ6efAZaYU5UtkWBAXtCUkaM2Ktc27DvVwokEwVRbBg3RdrB9WC6qhHGZhNfsoFq74euz7EfLLe7bipyVALsa",
  "key35": "487xV4seJkrYVGyE34nSA37TC6hSxqGZpLkaSiSK83EKGBaE3fECzf36vZYvJQd7eZnPjcDAZNjrKtSbnDHd9fDQ",
  "key36": "3MjJqHomuVsKhM73JVgKLKsYVPfghFrgYsy4uk3Zjp5uB6ep5s86qKqr2QEmAoz8woQ5Y94Vwp3XkvCBGxB7vwBV",
  "key37": "7nZmpHwXSizmkP9iNZGno861WsbT3iBprKvCLDZuebr43Q9CGuywV5Zdy82ejt8PK1Wz4WmH2CxL7jchvYebZ4J",
  "key38": "497LwEVALqV3hESumssfp1U1yNf5vz7J2VUnntef4STA5eN2kSaW1YS5XDpGKsrm2vywBosSMnGzaZzJhCV73vF6",
  "key39": "jZ5Sv3vhYPUfvcPzuscR7dYkDJhB5iqgEr3cDCzCY8hWSwFJubTryHRGDtFrsvdYnjqdWeYp5dCcoc48tUSU7KX",
  "key40": "25b2YMMq2K2Qgy9Qg3Di9VvWdcgBxQjoV3JJDKNbeidtU6qWKYn9WkvveD9B4DPv5R9pu7ZakktnDfagzaXQBhwu",
  "key41": "1Y3ksqarQjVaWuaQ3pjVi3sg3ibZ2D2GUevCc1C7CitfNW3TkpderWVe1LNzLeUrf35MnhHzAhL21FWuZ51CivN",
  "key42": "4xXm3PUhTHvkeYMuSTcsw9zXSeaDEA5U59p4AW2hzpN3Dw3zWLDEF5w4SW5vBXFpyyQhbuH5DCp2Hkn18wmn26HP",
  "key43": "4Q7zsQzGW3gaddT7vuqCibh42f8RwcmoV92CxJpokurWBEcZtD92sDjLRTevBPVpo5CpYxTWwjaMZ3VKwLnqJC3K"
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
