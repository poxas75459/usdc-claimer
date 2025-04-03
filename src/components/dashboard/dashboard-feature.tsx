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
    "4x5xvRDmzPHLAmYeEEvkN1xY7eWmahh1NVZnWYQf1KveZxsLsiYdgFL2Z6abR45vg9XBPjUhZ1HrhPLwGxwTa7UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1sXAT3xN81vYS7Ltgo3NdVz1UpH45z3rNkg3ZJUKsVrRfAf9hMNiDWhazxk3cJ48vrU4KmfBGpgiwKC36gB1jM",
  "key1": "3xEQx8AsXe9eyVYj2r6wPFG1RYJbHhKjuyR5Pm9KwpiNLiaThKpRQRnJWYQq1XmzhnEEQRRdE2dL8RppT3WypFte",
  "key2": "4VkUNM6LjqVKmS1QyD1WmAiLsc5z8eGbhMtnme7yd5i1kETUbw4Hh42UdpAcDfpagH1pUQqXawUFducmcSELV6df",
  "key3": "5y4Yva8KZ8BRnyWboGnAd2UVgPSeRNEoZCCPHk3sCxYCvb1HatM99MqLdo8q4Lua6kmZLzTD34BAU75sUwDhSt4q",
  "key4": "xZdsBdXucHqdBWFtL7jTfS38Txf7fGeiUvEUbhFQ9s4veULMqt3U2dGZRNydYQmEtL6KmP5JuxahxZoGaZJnbXA",
  "key5": "3jH2RBaectpqfhGDhyCLKNpLsx6LN2oGr8mAHeABvDQkzcYdJeN9iqKeperDHzpw4mpYGCS2xWTDMGQLmwnN1QJk",
  "key6": "27BZbbYUDUiEsnBo4e6TvS4UHHGafanbk2nF52ArvQckUoKbSp3WpLBXWQZnHv9McfZyrErbaS2URJgjwnwc4Bi6",
  "key7": "3YDiSzC4rvidqWLi3NKdSh5P3PejCZks1DUui2yzzuPFwMzK9tkGPHWXUKodB8DaCevvjy8NuiSJ9DUhkXkY3iBG",
  "key8": "4yKrV1H2XZpz7Dca972cfLBD6LY3CJUK6otUE46HR9dC5tJqvTWCs6ThQ8uCLU6PycwJp4cPgph7AVWTQPw8MDpt",
  "key9": "cimyybd8ARPZ9FnPoHnWmioNYkvyiduoB7r4SdFusEjFZfct2HGsr1MeKHzZE9MWDeZDvUGKqf7ZEkG6rV9Lgpt",
  "key10": "3YQgSNPRn1kmdgAh2VEiQ4tQzGyR7RJRq7aYFq1hhw9hZzYZ3c1djD7io2KbFGbu6rQ43oVdTnEE9bmdryq1uxEE",
  "key11": "2hrSGh5DWLuHFd78qSEGJ1SnWeiSghinYcKarW1GPFTqn357J3DibUbaUBafoPAXtEb4UrevUj6qWXiXUrsd4W2B",
  "key12": "27VBM1uzyHGogESHjN59wGGqbY2Z5RRtakK5g32e894Xn9FDqEeqwHaJDFCKRyHii58Hw5iy1ccYKg5ya4K9tcH6",
  "key13": "5RhqKhhLnKsR5VVEiLiNf7fpMxkhARMNU5r3CpSbj8MD7cbkNG5KoJHj4dSo2eoZ3RBV9fFMexvEC1Yt2cfwJPPA",
  "key14": "5aJgdPkELLbkSwgoQCYCyQnWR4CffGjPwE1Vc7uT6312WPF7ttrEhyH7rZ6D6eBh17L1ESohz8GAfQjFjUnojc9X",
  "key15": "2THmV1bDyc272zj46j5BK86oDvrrjaGc15oDYfQUEx6aWdYWDuoRNgNq12SQc2x4FMZgAeb68L42BsXLtfCG4b7s",
  "key16": "5isuVxcKRpLy45gTTtEo6PceU681vvJQURkfPABSRj6W2J2LpWFCnwJg8JCdSmSCJ2SMwyKqJ75EPCz5wvHivtY",
  "key17": "4LrdVcy7TUhraJFEooTezrrDVTxVmaos8JEK1M8rLy5uKWe8eVZyCFBmP3ujv5nqKVzdMQJ5ym4Ek57rq8PMKkYz",
  "key18": "5DvBKZaQZEEkSwNxnj8Wy6tRKi1oXQUd8pVjr7ZFxeTPfuZTs5ezugJTwjpeADX7q3aAURWmUKqW4W9hsKUzwcP",
  "key19": "5HKkKjSVkjq1Jkr7cX7vPrusrsFNnunWrXCP3oHekAR5tRLjeKCjqF39qbfDbk5LgWE2xPnYY1ABZuHeNRws95qt",
  "key20": "5a26ZBdRATmdEonthEvfDoyFbmVJ9dFYQEXT39fmhKCc585Gs2VKwKzmMtp2QFq5tNGMJUk6p8Xaxkoo72w5PN14",
  "key21": "cebjbg31Qyab84EfJ7qPWkdFQ9wvF9YxGi5zpa8vutXjvLnsRqpLrzZ8g8x1MxK1RVE27ookJZgQDW3J3WUrkD8",
  "key22": "57aRtKtdg1LuB6K4CYd5uiUJt2ACWjqHx9GDJk77nB7nPyXvnpsCbsYasuKS64bwhvQsZSK7wqmUivyZMVvzMsXF",
  "key23": "5fUj23eygNfUgDFvCmYqPvTEu532rdoTNwDbxJkaBvU12Y58DNNAqcKtmdwE4xUteLjXKFbeXuZVAybty8bLxaSW",
  "key24": "3AaTBgu45Fzcak43ryr4V3UxzzNn4xog4zw1MFufRjEEkeAXAjTkZKEegxrATji2iai97rNYcsV8sUGoAXyrLqeP",
  "key25": "3yqHHVgXXuCdskDHK59SDM8rYwnUFUNoWvZGipqkjiwLaLhyyoCibLonDoyUKks86ZHAzfXtRrVYmYBF5Uckwxvn",
  "key26": "5pxwraszD9y1q451juogN3frdguHuxpGfanGMFauBdQU4dTBXsDi56oNjbrL8i9bDmrVrbA9D7XW851A7h4trieT",
  "key27": "4fUviJaDgfY8DT42az4WqxV5dhWRUCpFxmsYu7xP32YFjcJo7hLqS4ZM2fAStZg6FqxcS8qyyhk37o8tDWnxDipL",
  "key28": "3NDwtnrjxcMHgjS5Fz2wSLxRdq368rBr8mDFY8QVrWnoPZBkiTyHgyrgJnNAxr7Ym8so7FGV4brx8irurYCaGCg9",
  "key29": "32XZQjoqmQegqJpXA9sgE2UJu5XkmNwWV7FMD57x6p6h6icP6HS88sKNZwdUudsTZuXD4HSn7M9aLrGJnSmfUnfJ",
  "key30": "5HXbj4Wj3K4bmBLjABC8GCuWfPQD7WmudGLjiY7UeeXtqvJiZ7V4LMkgw7M2Qvj2aB9X4CR3KNVmQyHBJGJDsj8D",
  "key31": "xw3ibALzorz3r7oXu95UpN422fvdEK2BkL5GxExJUpDLKxK5FsCh4igfTWJLAmrjNLQChEijUq8AasbLjziWqtS",
  "key32": "3oEvEcbUVQRU6zxoAEpiLRKEsS1TeUonj7zgnLMoMsMLJSxnxDuDoyAdJFxjRU1Vr1LSVbFabwrtSrAdqH7V22Zv",
  "key33": "3F5CHNKu1y7Ti6q5W3Da2Ftari25UQ29KZmYbAE1FmuyrLDdNNrytC37aij97J217s5ELYa8aLi8PZ79Fye8FYmG"
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
