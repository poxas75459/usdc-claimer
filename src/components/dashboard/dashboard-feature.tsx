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
    "VdPPTh5s5Yg4xFyPykxm2YEHCi6CTGkkqzqazuKMoJjzbEikhvJcwm1MzEfb9nnB9pRmRZt7wEqu6f57dT1WmhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pX7L8uUpVNMfG2czrZhoLjd2Q1WqYaxGphBDr2m78AW2rvmPWHK59Gt1Hgjx6jMsLHnJo99P8JMpsQ22MygvMR",
  "key1": "4u7fgrc2AUWxsESjp8qaTpjokjpbfkHSzHYXHkZ9mGY7S1qpzSeZPHwLFJKwqQkH9yFW1qZySV2PuPfcCBvWPSr2",
  "key2": "4UbZNHTNcjnviP272ksbaS3rSyN19HFx8hJY8JmsLrRtTo3jT1Dvyj5Rhhegx5k9HbHZy58LyfYifpWkDe1xmXqj",
  "key3": "4XgQCs5V8iZ37PMK2oXQvZAo8F9sWcPYjmaSogu8gjBWJ5tquiCfhuYc1x27JkRMb1GtjHbwVb3yH9849u1urSAD",
  "key4": "5YWDkaejz7WPJmGNkNcvc637u1fCwyVaZC5bYR6xRee8sANP3aGTeiJze6rfJexq4ZrQB24EsC46X118b46jY2kE",
  "key5": "5oow1cWx1EvE7ddzZda9f8gey114B9Lann6BRUS6qkEK4rdeWVMeJ7FEDCEBQD8kBTzuumfvUQsjRtMxhjorAJDi",
  "key6": "24WXDFBaUYQHcQwgMDSXUtu8x8phDJXXkWw3tNaFGnU8KgupCy8RCfcaqGUPq5dJPeihYTsXPJ8GP95RxMJSfqem",
  "key7": "4nnibATshQudYpjLMyiYnCL6xqy5PAC9w5JRG4c6TkwA8WsjiheqvTpYGP1aPHt4GWoSgy6LY4jnafMVFx7APr6G",
  "key8": "5AGCyEjKvt8g6hgQtPZiuwh1Ay1gWMWjsPxWRFRWCDj7FXANtzj2DL16HwCaLmYXzcQ9xaWHa3a1szKScKup6rQr",
  "key9": "ayuZqRUuQJbwtdgScR17h3khQGKyn7XUkGxRvevdGuUzSbM2s46xNyJs6HgtKK13zovzNZxdkN6eqWSE4yCFq8k",
  "key10": "5ouHDMaw3oujRnZNZHC1MB7FryHsobEkuhwZ8jF6rD2AE9oCtaT5VTYVe1xVFnApRzEW5tjcQ38A6DBuuPN8UBcX",
  "key11": "4RpUZuWypW9bST4obdCzP9MfzBCFLtz8mLHUzXkBiSLT9YHEwT1xayZWy1VWj6UkRq5nKym8scvP56SeXmJXxvPz",
  "key12": "5ekEot94Mydb4NN8cFSRwurvzQsKgNwnEo3y8h1unBXgZ3qPxug1TfeSK7YikgWWBWGbjzhe82pWSD8yqZg2R7Mp",
  "key13": "25ZxRyYsTmMs8ZA4yK3QQfSgvGLjw6QxfGx1hAE8uuWYYtp1BGm5hmYHy9b41YQYTjTiTZuUprdjc7VCA9xJQfNx",
  "key14": "e39zhk9WnZy2DuXGQoFSnXsDH1fuJJxhBaPwhbShSAajjsKX3rfkeP2c3gpuMv9716DURJ7WDpi9AhXvkPogocT",
  "key15": "2QUy2dHxzL4nKTMgoR5VebEyLUeUDjjGEaF7bP67C76yGYMyGX6prAqeqEab7ZbM9AtZmTrGwM5YsXyM1Gw8YYJd",
  "key16": "4ug5bapkVmzn9WfuMHcKp9VZ1wJ71ACd6Na2sa9AhnUFaA3Ge8BH5SJh87QqG3CPCFdqTqip5M8ytJmKR1Jysc4q",
  "key17": "21DSyvVaN58naQPskDBUGk8e7dPBB8qaGKQrk7h4u33jTSRZcnJUfMZAQngtj7eHoKt1vLHffXw9YmFRUAAXeGWb",
  "key18": "4Pu623ZsDVxaYBFiCZxnNFCSSxFpdsHSRowcCe4GFz1Bfm52SAH4ykth1tR1ffTtLR3qhErtW1GHxxmw9dxh2qEg",
  "key19": "5nPfXqfRBgp3v44T1kzv2EWCLTGLemQpFUtc5B3XJETN2qZDH3LUR32X4ojvPWczSGfGJWCWy9SjGYvrXyQgW3ew",
  "key20": "4HgZN3rKNh6YbgVVWNjc2dtCzLG5KPGJbuJi63P3TkTMM6dr3qJjZcHN3YTVqCbXGhr2ZwevfEW8ZbBKvxM87qep",
  "key21": "WYpWj4xTtB9UBjkbLXeK9gS3KYfKpXZvaLJXHNaGv83Fgjad4jC35QeuXrKVXsavsury5SNKVmDSwCx81Wncwcd",
  "key22": "5CxAhayZYonFV5sZD2aGCsp93j4GD4gF4rjNRnMDUqDN83ZHonVrnigP6FLssVopH2KHqQwNAA9MX14TDg8RZEsy",
  "key23": "3V4bGLbk4aSvD7tK1higzEuk6yDp4KbhfBcH2HoyX5Dh7fLPYka2Jm4qMob5T4Fj2RvYHKEGWRcKUe96K9yUA2SW",
  "key24": "21LGaRC8Amv3fRV3oX6D6MmEuyM57dKnrNf3euV6BgKoAqQgBCHwpwLtpnaTZVN5JmZCp8rTRi1GZXfZYcJumQi8",
  "key25": "3PJAM8G7CVgqfqQPz4cpUEgfpedjY1VKeYyvfvvAkvcSoe9sxuVQXT8gZgXYXyckRoDix3BQqDKA9BvKdvcE6UYo",
  "key26": "2xPVLcTpRQHBEUp5ZCyaNjZ3aKZYqV4kMA3ETF72MGdqF36H1xoPab7bPZQWAJSkWEW8GN58C83pUrozGrsAxxGV",
  "key27": "NazhN4ChesvsLA2fdeR4Rk1AB15VfGpFqn8dpB1YENm6dHNeHjjYBheQVMrzTiw2BmYTgQTjdGcGFoc6kAZF75r",
  "key28": "3MN4D33GUk6zszSfLT4hPYtGkDqmndxBaxkzodUKS7UVpakiwaxZDHeiRvn5rwnK2eHm4NNE9xBXbKRzTMtQ6TBu",
  "key29": "65PmbdYuWjW8VjcNv9ypuUesRDBpW7vUFZBXYsubtMFMFWtYghYwi9i4nEgtGhYD7xXemwZh5aNSYotuhmx1dRtw",
  "key30": "29pPr72P4ZRjWwKSMLnatcZh39rmpJ2xSGLE7mxo3tayJpWeGNdHUZCrG4dRn4cgpx93Cs4J9mFKGugN9Laiwz6S",
  "key31": "PAhRCFVYS6BKV6GYkKkvyPw9YCYTepgfuDQBHBEVocLU4ZzQx7sHUccQrhoeHVgD5XiNY2gSL8U6bx1muxfaNcq"
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
