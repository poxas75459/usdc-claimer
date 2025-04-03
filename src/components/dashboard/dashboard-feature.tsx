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
    "5rJ3hCMWf2wWj6ApfLFwVEBFJ6mAFEmLW4wsovN1mGhYcoFxoPaPfbXvJ76eXfPmNTi4keMf3xfovsk8Bk4UVAcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3STdSeTYEx4MzPXG2Ndy81Rzq8YfywLcyAByxF2pD6LxskA3tqjxGas2bHga4yweVzr7t7xx6nf913Cb6TNfkftg",
  "key1": "2jKZYgUrBecDpxcZsXFxzu8XccrvonSDAcAj7DfqCXxrZA8Pg3nbDUvGNRe9UhzfNyKhCmYM8sqntwWE8WcY49bt",
  "key2": "2rE9AA9cuohVYgtq9iWjT3TGTjrQUmPyN5Pp29rhX5ch79siRA4BbkcLJBkUd9kLYfpAykEi5HtftCrjLNetHMhi",
  "key3": "2FRwUpcHEXLr8JsagRVW2ahTFzaGVKs1bRyUJRDke41PQt8ojBpNoWvP32oH7hQCHfUdLvek3NKtr2zosTxE3Xhe",
  "key4": "5Tb8RqH6RnVke1wrpMN5tHSAkNwL3YKBAjpXEi6oWFgVgq8yWzuTi8WymNmjGXUo1Hm6hWcVLeWn794B5aeN9sd9",
  "key5": "2SegnnD4TwVvAhC2xqHxjJHb6TmaXC69bRw1PG47cr5GPFDypzWXKmZM2RBp5WFwcNJVesi21Tg3fEizvRsEFuiJ",
  "key6": "TkJNXqR39QAmnWfrzKfqC4rQEpN5T8rtgTARuSuxcfVuAbw3rbtPAgXyNzVJsQHF1iLgiUCSYhgqdwJPrpRJGZZ",
  "key7": "4pYWVotzcsKiQSVae7LzkzS9uDtW8byzSKrBnLbMspDchjbgXPmVewEZmqMUQf9v8JF3Y5SXog3NAA5TS7jHJ2vH",
  "key8": "5A9oZqVtTvhcow26HkcXkpNstf6sbV45MkQkfHeoWNawaSwrAVj716feqGDwvNyhp1vWya7DMCwba3E2jpk11vHt",
  "key9": "37cRnuCrYJDXwCUD4ExXoqQ9J71sV7GjYQLH8LkLjDd5YA6ARh3hBFoGJjS2UKgyMq7vn3nJKcC3abhtSpPzHcmf",
  "key10": "1SNoCNMozew8TuSm1rwv4B3WNJvw7zRnUwwbskZnMxmWQvvWfTfe1EFwB4Z8Aorhzzj41p4FcF67jxXx9KKDrb7",
  "key11": "5mwFvaTvzxbtAWVwBeAt9KuKrhcQ3WQzuVQo7DPH3WcBvrwjPh9U6LKyskVUo58uaXpeFp2hpEhZ9gUzsw52d2q3",
  "key12": "4X3u7NfGXSeKgeLXpaHLQo3WLzJMkYFa6jUwkTAnknGhStZqLUzuhzSGLacm77Nw61kZTQzH4EfR6M6xZRj1wAd",
  "key13": "5s8FaszUfY8nL35hpnY6nL4tGRRyGSMYYFd9YCpteZTTHFtpav8jdysWW91Tt8GLdN1ji4a2xwx5nZ1mj475Rad3",
  "key14": "RXUaWtiZRokihnXFRVExGV2zKwAgc4tvVzHFXiHMhWG4SGjdv7V6zFme6bocrwoZVXgXZVWZyAryt9mPEfikTNk",
  "key15": "4c324s1KfHJ7Msfytm9QEgWkzNhqYN97wPNZjGSUcUiEgDEuBvKQcSWCXUyzaHgHhwhzgu5PYt6EAfzpfhUY1dfa",
  "key16": "31eGcuAGbj3btooUfFNkRJdi9CSP6vdzNbRoNQr2UEpkfZc4yFRUeuLZ9dkc2WkvNoS8GJYT4K2Aau84w9SMLt48",
  "key17": "5H8BaWPuPFo2RDGzKTMGAmVKeKZJNSCSW2ju5Qyy2T8GKgxoHhsivv4XeMTs2Xs8iLYTse2z9vFDqUzHPf5Rjh3S",
  "key18": "2iYQV69GCLKefqE3CxQzJYnPCj49YYXa8EwmqYXL8KppsPG2B97FadD4zcifRmfuastv9jQhbp8LGXx3HF1ziWMN",
  "key19": "5Fy41o4jKt6RUW5j8BADPdZmp17tMJ3xysXU9JykjL4EXwxPQtLZx7fuG9snEbTkEewvabnKtyY1ibry5F7Fd2eg",
  "key20": "2qKvdM5ytibwcXqvH5v3hmjeppY9Wcy18SED9L1p3Ucx5WNbcQd1g75Pb1VPRySfHr2RfVpgBLsptDUW5mLXigC9",
  "key21": "58cUWJmLANaxQXsPY2rT7j5PLoXKvTM2qhz1rvxUMtqRRdLjiLkuRxitgfkd5T33ruE77eQmsiLPAGh9BHLxL9Uj",
  "key22": "4eqRdzsEnCwmxmTJBFCfeEuDToCgkyzqEFUPMmGZ9S1HTwg69UnGdpF6af3yGui5feFy9pHphk2NTeDyKBA9TckJ",
  "key23": "Gf9aHMVkEEB5uxN99QumLyre91mbubihRnW9ConEoYJ8ZXXT7dUoZDTXJKAuKEyPD8TVKDxsrtkZLvV4FESHnwe",
  "key24": "58s8vjRgVSaDR2XCxsz7NGRqbkawPpZ9Yh1mKDo4FCcw14yb1XM6mBnS4fk3XH1mUQNkqnLrEqtjnrBq9kGdMtX5",
  "key25": "doVoabA2bfJ9kAYS18hnMCFxNhDHBZUSi2TyVV3uu4R766aLn75xdscw1HZkUczNx48bKCgEV1NHgrq62feqZum",
  "key26": "23i7QaQUK9ZnzhTJ2dwG94h9WRDKREeaKMMzSZjMLnsTPPoDRbb4KqxjKvYLmVt2L5MU2cGSD2rLjxJFPpw6v67y",
  "key27": "3nxDBVMdC3i88CvPpzfcnHLCiD8GNG4eS11yXZdAudh6eVB722ZDXqh1vf3fUA9nZumBfFXv5pKUpeoQYEVEuWoA",
  "key28": "3eoNXWs7UkND2CgvLmpMpQAHCgR3wcYUDMKN4uXprcraZqZoKbHTFLeBuzx9GEU4kamjEWE939X4N9Ku4KuMdSsj",
  "key29": "2vJB1sbV3KXwH5WFgwtwNcVPrybSW3DwMgqzEePBGJmJYD242wuGtY4ER4vdnqCartVCs9EZeDVWVDRoysLFecLN",
  "key30": "5d5H6cWckZJ2sajxybfSDVRiZXG3M94Gc3xQYsrZi5PzRdCpg37AiMjx5HUTbTLyfzqRSyTpUCAT9TRu7Uiq3abd",
  "key31": "4BFka9P8DJjRvKkoxfn6fP75eQQqk28tT48M6vjCbJm4WNpLqXvRjktCYLwsdKFQhLbL2xQffE3oKxWFzuMjSS5o",
  "key32": "5i5BMvECrNjy9WCKq1zQai4nm7nW9qWxVdcJjUgguskdqcstSuuwURKxi5Bm9gqWgsw1xk6CpDV8rGurkx1RdZoG",
  "key33": "5ZZ63AyP13aURdMobcBhjVjwKyJ34x312sTv5HHHLJe7vc3Wv4FbkjqEFnwTmZ7P7J6Uu87WsJYWKh1hYcWh6DJy",
  "key34": "5FLsMAxXasPVsa14LuBAbQGiGdoownfmdWCyHd3sao1y3wE3QZtQZeqHd7f9yEET6wJzdE9DDFGkbqUwGg3fXQ5e",
  "key35": "2TDMYt2hHsuru1RcvJrhzCLPvZVzZmuFPtdPjcTU78x1WQDqLMx1dBvCAi8LxCjzA8KL9723aT89HnWCqkK5mXFr",
  "key36": "3AbiEEC6YfBJeFexSagD52q81CiBMgQVYkexiMGG12Cy2ZqE2eHHafismiSdHG8ZUs1CzH3wMeungXFCbWEiMD3s",
  "key37": "4jzsSGqWr5pTFZu4j715cJMofeSrkYtZDWYEDYXnaqLKBsoWegqDUNYX7TmLSiLvUGtDiz317n5jBQyZQhmojcoS",
  "key38": "56XspZhvGXvY2uiejzRNKbGcor8osZ51Nom423Y1yNHqUD2WyjKjze4BmyJhBfXunzwcLDQwyhAqWiXtJrGwjUjr",
  "key39": "2xe9ELfsgdxc7Xwpkw4qKk2s53GnnHU1mxtZar5mMW8UDCESArtH2A2ZdDTgY6zJLAq6E8HrJtFTVzqeHpMWCQM6",
  "key40": "5XXrVckDEtfZEK1oFgExFgdhWpjCGTpT4H1cgksKpU7Ro38F4ZmFvzEFdDZcexVTRATqsg6vEHVsh65wuh45C2Vn",
  "key41": "5q5PmPXAsEgfJC1sScmdMGm6AZ97rvJrxmekyrA6sCT7FRNxf8U2a8PVa4qY5vFou5SvBEuNk5pyhwWycgZiojZ2",
  "key42": "pg959sp7ZtRdcRmSwWnfcP6sre57R8HRBqTUTgLm7YQZNP2GJia7qEy8aygSubHUM7QXvLvRs2nbyJESW2APjvW",
  "key43": "65kZ3t46cHippTDqfRTNFDKaCnqqoUBwCLbVFjCvFFDc9tAUSUCzppLr1t7WMmpmopwKpePysmEtSi6yPtgiWbL3",
  "key44": "1ropm1ALfkd5WT8nJFhdcKv7cuyMGRPskSVwQFeZiWwL2aW77s7RPipKnzSAU7YEhqhjiTyH8woPYXHpmrJuPHZ"
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
