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
    "5aG6UmW8iJHUGzWCcynjgnRF98Pv7rsGyArNKNAzGkniHeHck1Twh8hheUDWGdeZ4XJhXwBdJqqrbFccLxYgzzsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmm1EYTz8SHv536yoe4VqkfZP1maDH27Edc39s2Rrw6jox6uznP87of87MFzcBsCLrgCs559b1aA67cpyebdddo",
  "key1": "33912gEUYUcyCKfwc7ghU6qwmNfbFpXFJZ66oEnXR2796BuQLYCLRwTf6CGNnB4dRKhHWCFhftw6BxxEXsuh54i1",
  "key2": "5hThw2vMtkZ4AvRik5Y8okP4zTvH3NiqA8LWLXTCnGMCdAstBPJXsih6cbL7KcRUgyULL6k7q1WS2SrfcuYrQ2Po",
  "key3": "5Vfqxnm95y15VZokeJJf21YvGyWMo9JZg7c33gJWV6ebkNLaDtMjGzw4iLWt953zz8Uz1fP9P8SVL4s7u9nnExuU",
  "key4": "39RkitnfDAW6UZPLA4J9wKTDf8GhX6S5UumTJNf7nvzt1gPjF2MQfvJ7ZXgTtdwvZQQkJPY32komtzxQ4fgLPepd",
  "key5": "4wFH4XH8z3JpijeKrgGac8Gt9Vfv5ir3zJ8C6NRuEJmDYpsVYnhY95KHai8bGWwbTJepzBfNu1CDYDzjbKkY1yiH",
  "key6": "25YSkP5rBoS9bxsLZF1J1RR5CRM9Yz8QMiJCee731kUZQAL3Q92nikHLnizTUnYNbPMhJpjiBWieZDFL9KzUguMf",
  "key7": "L2rrXv4Pmi1X8frtMGk4ZNnEbJjqYrx7SAjvn2rBwmHwDME2J21oYts72StLWmBjmpdYBqTSc2Mh9BwnwKvrwxL",
  "key8": "3mBxeQyzyuBYHCmSogia45maFjQNNwFKUzW58Nshsk65BJMu2xhQzvSSeUeJyL6A2Bz65NnjXqhXpyrBpqTgKyhh",
  "key9": "33PVfqzgAmWHQbNH1SQ5gWMX7U1xjqEBiTjh7J6weqk3qiP3a4HaoTBv63sm83fCUZXASBVutVjdVyybm22rJQZJ",
  "key10": "46BZ96xhm9n9HGC49fcGL2FC6KTw99HryALAKLprBYp3FFm7WpcnmvnWzfJRr3jtf6gLWLpWJMTX6UznAHpyNAxy",
  "key11": "gxEkHmAwZRStYTAfgvujTTeSmLqmKoAhPoWLH1sqURH7TPM7XGwhcoL6sHigBefm3WRJL3TmLAgXUyrmDZv6K2E",
  "key12": "3vE7KLdJQuKHxJRgUYcbhgJZgFQd6Lyw6iqeB7NhwSabX3gssUqtpuvgSw4rRPmd1VRB9Tfer7yWDaSiDxK3AaTi",
  "key13": "5kFtZgMxFFJisncnEuqeWBXhQuPaskEUxDp5oep4QLjrNuFc3UoFtd1Lp6yBUWoCn1mRTLcKfM8DAzHXmmYG78yY",
  "key14": "4K3fidA9ioYsucaRSHKiCkiCxvmnpvFjL7oS4N7ozCUZLWwUJ95FoSqCdmcz4f6ytyYfmdu4rQxfBtZ5W4okhJR4",
  "key15": "8pyYea2iBivyEGg3nEexRuKBqcJaEjYxJGvUXv3vGDsC5urMhTXS9qw6ZfBmUy1cTsMR4fC6NhwJhS6oooV47Tz",
  "key16": "Z9SZDf9NEoqkor4V73ccSu4JRtUMW5RPScf56yfD3dWEDHnoogpnxtowvdQDBooxGJjCmW76WDhLX1NyEXddygg",
  "key17": "2BkpZnC9iYqWxKvnGxnCzCJDSDaBRD88XpcXCSBotqdvfaRGJMHYFuun9ie6iZ1YK8k5MQqDpF3xY9Pp93ap1yjy",
  "key18": "2ha8WdXeviqP8WLa4WxDVUU8HcFTGPAHznPUA1nVZFn9Fj3HpQeVnyqaBmhWoZAW63dng1zCeQG7cMCpo3uP2wHP",
  "key19": "4mK9GscZ1i8LkHS1Dk5YuaKjr36FN478HRxVDpkUcxxJqWTExdt5p52mcQJhqH3qoKTKJBoFTucNKC16WRCxVZfJ",
  "key20": "4gH1oWGG1xwid86ChqmoCGnXNZW9BCYuiW9RDujFSSMnqkbS3V7e9M2ghWBfxWnhN5pjwav14otL4xiXAWJfpzjW",
  "key21": "3UiA5FRfegQs5RQH4C4v3Cx8pNwijVJijYtdPL4xmpkKWuCCpUZXrrqsYjz1pWgapXwScsadBg193sracdadPv4Z",
  "key22": "5wVMAjEpotrR8NfkGjfPWKfxxzQ54CHKhQ3CatxER7GF36tuzaUgQzaF9mNmF7DmLLWY8QuLFJWwAax74LyU7Tqi",
  "key23": "2hicLELHU6TVrHLRnP2nogo43iR15D4pkzTiiV8Y2enNNTLkCtHtqePCen3zmdFL9XxqTuaS3xXsAXuDn6Q1ygcX",
  "key24": "3PabEgufqmXA8HK5j8TQr41JzG4hS3U3vmRedh3E8ATqYTTzVkvwEQWVbHrdMZYHs3GcgCyGZfUtRmXCjG34bib5",
  "key25": "3VyoKf4Z4TjEuSg69Zr67GTXvxWLnFev4JFXNSVT3mn6fKpNTajLq6zZziTa8P6Pfpi4feLVssbp1PbpYTGx5z1m",
  "key26": "48pvt8rjxYJLvXoFCJ4ysWV5D8yGiR4o1KaA7QQCBf92njyWjCs9vZKhGzivSmteMw1fizHAjvW4LhTfVkEwwQ6",
  "key27": "5m1d1FH1BCktNTdjhfNgobLH8seMVH81UDPp6iDJAKveh9vbN1RgZoPgaBQJKMH7mQe7zMenWm62hTmAdn9j5i1F",
  "key28": "45cxJD4cDDnNsMkzaq8GXzEBeTA4zUXabEMuCPC9uoDoFxxE73LJ7x5xjkJ9zu3G176eTC6YC2oRkmuEaUdX8a8o",
  "key29": "5ur8bxpNVC4xrvVGEA5nnS5HKRShbLXFS6hqKmshoZNXt7pGzjfrTMYdWqpWEyMorWDRXiarZx34vtpvdXi5Eraz",
  "key30": "44mynbVBxJYEVrFqDvNVxLj6Y2xfYGVgy7zVHNAK1JxCRrJXb8LZgvefmUdodbauQU7qnBE1hLLE3QDhyqsjKzbz",
  "key31": "2dREPC2xFke8U8FSnZFE9NN632Yr9XLXedau9JgcL7y323dvzztcXhkDQePfCWG7Pypitma5Dsifvq6Wjnc2175F",
  "key32": "4K84P8GddFz3fwevh2SjzhsUcCEh6fBRbtx2kc2xgWPJH7qqN9a4nanSSGwqFCgQnpkMcg136Y7vqKQZqHvCEtix",
  "key33": "31Aa6Jv84iYS3jVs9GzJdgskPE7dk12REPYTkvZu6fuGbtdcXqMoKi3djdudwbKmk3xKyA7dntNY3ePhGZLLnP7j",
  "key34": "5Y3agtj4uR7mVTcqf3hEwgfPLqGPysGRqax1CB2EjH8p1rZT4hpnCThnGajsG9rUoF168KJv6TkjrSnGnDbxGU3s",
  "key35": "2kpJbyFRLWye8ywaUKVPrvHw3zxLUhm8jHpGxboopMuAi3GT4FdjhepKcok3b3YuxCrgz8V5toEKUT1AqgDQ4GzJ",
  "key36": "4V14rz4GFjWhd2gGPmWXPpshsVybay76kDKSVkfbRpjDiXwLxaDpTTScaVfm2Fab44z5mfuY4JipK7xaj3o9DG6K",
  "key37": "2uHVcEFSsGiG6A5t1GmxVKYBdBXFgCHx4atArxHVspgvyZbA9GsvttFsf77KHxnwJhx2J2woCRrd3wK4LM2ur5V7",
  "key38": "5b5J76e5Xu7Z47sB79dA4cnnJSNgCt1tvvuhBvykijYQPwxD3oaTRv1y8m1QWDAuxCi8WUZy6mWaT3fHEu3HnfsS",
  "key39": "JFcwkATvLzhmfSjDsFAQ8mKC4vGDpGk26WTDh6WmcjWHZ8Sz459EAZXbejRGr1dXQVqPEetFCTswBEjijQrtfGX"
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
