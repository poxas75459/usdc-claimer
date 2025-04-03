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
    "42geWbknbyLFHAPM1MJ6JpHDSymjDAtBtkNRvuNR6AVvzG7Fvqsx5G7LXSxLYLsFvHPyb8oGARbXPEkbatTpyDA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7CozZaP6SdrAKthao6Yr5rVHLNXc3SvwEWgjgQgUzd8FxzPf8Cop3SqcK6FrCK9Si9qGzUtK7WcxyjHhA2BScR",
  "key1": "B22VReNZMamibXDbnfayiU5JhFHLKh6PcuoRmsujqsMxeBEa2WhNStRcBz6mjK84CYsjENdbW2Vge3pQXx6YDjb",
  "key2": "5NX3GAGjxVx5pjRELqE2vLQZVNm5X6s9dBj8Wktfe1kWj7s22oZ5xv5N4WZmiscbudiRQfQ7Q6qCduJca51DE19Y",
  "key3": "5BnQHHznvdZ6M88hUuzEnVuGcBaZqHBTQLsFx714Ge44XRCdJA8J8jCPT5oiFUXxwDPzPW6wCQRsvFV5b9UyC1m5",
  "key4": "zMjXTSaDdLBaKbk2zZkRLtREFYXtfo6GeHtN7UiQUeyPVjgWGd6hPFCapKwdHBiWK4Z8gVsjBZQDgex8i7GHv8k",
  "key5": "5jSEwTTdC8nqapcnSihqWKEqT7GrnZ8rbVMWimKq4HnYUSwgciMRvjq3NQUbsCgh6QocCgFqMSCViE2WBDUcsomM",
  "key6": "2mX9fm5gDQpkyAEcQUKrTtXZqjWMdBJzubaxEfhiDheZKpiYgszCHZeiCS67Zxc2KPZjRbhYh6sVoCshJ2k7Cdmh",
  "key7": "21F22McML2b1PjTTt5RxL4iNsEajs9w7qAFp5TQDe9rhmVzS5psWvYNUJA42pt1EFCVxRVoiSuzB5zcRbeTKrKCX",
  "key8": "4QWtZFbCQkCwrYs43D7X14pCf4noQFAHfaQEE127PTKFYUPrq59XYCHvrmKHtmFCyyNparpifhkGsytZ5949cyaA",
  "key9": "3L2T2gKzedqV5E6QUcrGNgvhh8a8K5mytQQtvN4dwARhSsEWWPs7U3NqdQSZRV186bHBJLYnD4zMosWn3M8bifp5",
  "key10": "4kkQfzMTAnNZVqQnhRpLy3wZ7CapWRrSduGnsyUzHsecd4vVDPFurZ3AaSyqkFM39qCfYkMM6wXNHL1BboKdku92",
  "key11": "VSq7zPYR5FSWf7MTmpZQv22B9613tVy2VdtPuT458B6vYiV8DNCApNRLgW46awTYXYWQeqDKBSqUSk7BZXJTy9o",
  "key12": "4VXNWvUQthrfui9zqZ1EbscWTmSjGNF1yCBesfXarMfJPu148UgrFfU69DJhmBBHSK62ZE81HGVQq9mo1vTK4FyR",
  "key13": "4GD8hPXay6hLA4hAviERhZzBqMhyHMBBK4BQSDuwSr24xS2xazaLghizdGCRs8t5mY8iUCR6MwbPs3oq42PnCb6j",
  "key14": "39S2Nct3fz9of3x3wQCdDGwjMGBc5CyxiMvKdD1WqvHthSSmdthCuSu3JBnXaN4KAg1GdFuuUhn2bD8R7ZEdK32G",
  "key15": "2dtjxpCv3DWU6z87TiCMSWMeWde7kvYYR7wofX8pR4CruodqnwETh8Z14BV13eNBJq7LV1zyMLPXtBJAFiNdszic",
  "key16": "2264ne3MvYMsfBGZdX5zRyh6YBJDUqi1fjUrXf5JBBi2p7ZkorH73ECnPmPEfkybfWfZGipey38rt6oDpb1TWWHF",
  "key17": "4KtGzegezhJXC9Cmu5PHjJ2W4qkxGSYSyVfvnF8hHz4ZQFMZMWqPxxjyAp1EcY9iDpsyAQiX1ZE8kM2k3fCQhRmF",
  "key18": "5zLbxCsGFiGHG8aw9svPc1JtnNS7ExdGqtXzVJ8bSH3DWCrQ4Lqn8YU3pRB4eD4XvwqeKoy6NwAhb8VEy1gNhxXz",
  "key19": "1EZw85wd6SPXrENU5sAHm9ztyELH7mJieaseoLL2RogmfrkCsXk3ePaYMkLs2Q1bVFd9BZj6c5CHeuLyRx6cU9f",
  "key20": "5YfpLeX2V9wZXi4CyHm3LjHYv8y31yB6iWY6LbsMbfe1A4Ak6cDABQfsWrGrwzCz9Yi6pJyg6S2ffudB9AwHwtfR",
  "key21": "4EpUVoHfS8dRde4hjxK6Vhh7QXFmAhxkrjfPbwwLCqbCnez5TmWFKpNikQMttMRdyDxVrb4zrkU61uz4WFpMM7Yb",
  "key22": "2462gr6fAoRdybEg4vzdXrZ7v6NA4GswEV45NQbW7vUz16kcceAcMLATufezxYFNLiV5xtTZmnnMMenS9repULEj",
  "key23": "3rkQgh4owGCTPWh1VBKvGpYwhx6gBLL6qbBnx5ZY1yZJ8rJ3i1FCnGgTb2VWYgGpWS4xXPF7jFqD4t7odVw4TP5y",
  "key24": "3iViFXojg4rajU3CbkL2hNfKM69WzoePWUk4MXDD634umHkfiHvaHCMsLt2tjy6ucnSXUqor6ZyZ1U9dp7KMfJx4",
  "key25": "3c2pnPQS69BdVUWeuBDNtQeT5CtzFVFukViuB3JgYgr3PE1HTUYhxcmZ6xn2yNycqdRbLVEcQVqvJd6f8RDbGS4J",
  "key26": "5uZmdjL1daBnWPnd9CXRhuzT7vqiAN96zFY5dMNiyNKQHtLijNfaq5XcgzyioBBJ3B6ezhhEkNYcUiTn7sTQoFC6",
  "key27": "21116F88Zr9xXNkcH9Y1pXnBGXFeqwq6JaFqMj2aFi7TNoefBi85dEYnR3p9yVq6W2648HioiroJSPxcf6Qne4xX",
  "key28": "meXQuQyDSiQdaW7EiF3zjsvcHSvDEEzNYStc32KtiWDSbLVzr9suP73rjVUMwoZpdhuF81UpwZ6tL54dLh7fCdX",
  "key29": "5xuFpZGujkdLzYyj93Cr6mvj8U4tTjTXhywPCPwnDZS4gE6hM22R2kPrbo83wNBRTQbRnjzHR1XRNjwHKwbjT2VZ",
  "key30": "5YtgBt14KNmbv7FqQGNW6xXuCeHh5XQo9iKKyGdqDyFB3qFitvEkPZmwzBEoYm7dQJB658yuKzxPw8cWvv5LTMTN",
  "key31": "4oX7Yq6XuGLP3gLQuZVWVEPwYw8ARPLKgA4SR5NkjB8rFR1N8rRH1PNMZZJAepkMWYxJVGQVHwz4NEs2aAC8NT27",
  "key32": "Ayuq6EXNdiYp22BqysBAEURiTz5edWzj9Nz6Xc1ujX7pZWYuScbxHosbQhdY1jPoDRZkrczvRYP2vhCF2U4EDw1",
  "key33": "43dpTXX4qcFDENSUrP7em73oXSoGiqdwPLQUnxLVbcjoypN2HMiuQAFqsrr4h3ewtyW1H8USajgbkkPaTv3nUXW6",
  "key34": "2rNuK5zyhwa8WScW8nsYaiNEFBNmGgwgnooBSZsLELuX44nnrpZ52ss5UTeerJGaaUk2uJ5GiDbmtRzd6NHboxyV",
  "key35": "5SvXAyWLHvCGMwwGQS5sCLjk6UCtXEdUNPWywH2aVvGrrxw82pJxZTh9vujH3F2dh3jDdh1FYzEt9eidnunh6Vbd",
  "key36": "5UofQyRunqqrWk5PSyb8vA8bneF9YxuHARnqwJuqYrAa8xSGBVjJRufb4713TmP6xBTgx8YjmAkNg1pwv7UfVj1A",
  "key37": "5t4s3NWt4UrLcwZYSVSkHQKYHFAdRGVcTuRYmQqFn9BnKsKGSB9sDSQuqEnn248WUpTf4mFiRCuLMh1YxUGxg59s"
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
