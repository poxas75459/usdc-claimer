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
    "AZJpctrRnRK9cbBdANrWaPvUZu72iQ4qTHtfvxjw8WMY7HjZQCM4YC7qooJZgpasVTgHRvnvfG5dsP4RiSf8bZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wTpWNLNZ56BPWhfAdGd2QtDLNU4XJYGJQzuidWd66ZWzbp5Wonesc444KkJbMbMrFkhtYTCRQjNY6DqY48UJP4",
  "key1": "2viNXBbQiYMMyXRQdHUZXQQbfoRurTnvC5a1NC9pVnDxxv9ZkccJ3ygyo7hxSUzitaC7PQgfAuppqFvUYnV1sYy9",
  "key2": "2ob9uLWEysSWn5gfJncZFVfYepjwRUTgbL1hc2FrZag5xGkFFH2yPXQY3AiW7HDi7fmLSU6ike9TYCroNF46SHe9",
  "key3": "4t6Z8dCngGKJbrKcUraV9cxZsFp1MFDKKbDvxi51w2H8HKSsHSwHLLN1QMCo9mDNrKT9Zm6uccvDh9NRVgQ4wTr1",
  "key4": "2j7k7u1N6mUdvmeiZUxnf52jwhgpUAvB1HM5WwHUYqnSJnLvfaZBUYxzxVrb65T1m95MunQjp9hEMVmgSz6u3mJM",
  "key5": "jEjZ3ULZc9hzB58Xv41CHe3GHb4iw7wNCjK5aX5wzCM7TK6AHhSeQrrMzB4XLAsQphHj6A8kkkhtLnr2jwKCneN",
  "key6": "3NQnygyEBtqELW2XazPyb8q6mnZFwMS1iUWLizksNJRipxqLNYSw4H7QjvgLVELX2GKiuz5No2TSNLhFPiiaVToi",
  "key7": "3LytMBCmZDw9Ugvoug21MtVytgUSu19djDgEuYQXQiFRgY8Qe1xm4KnxLVXhuzc3RYADhQaR4zwDFHy4EPm7HZeA",
  "key8": "3ytv23utVUcSCXmr2JCKnA8YxzbUjFZcpbkbnSZ8m1iYmiG314o7uh3tUuDBpAYrqceQsPvCzSGGZSCUoSQVJKxV",
  "key9": "4mSma4pLD8iJ3scc9NHvy1VoJV7m2W2sFHFyovCvgxdznjrskmdgXgmpiJXrejZ3gMBGEfVNKbQFMWntWSjEJpWD",
  "key10": "stx9iX9DeBTbyoVcCDU1eodJcGcYNf5BEuLvj3P3LafsW36TJ6tfwYHw6nKwP2JgchzDmWdHsrKqcBk6phhVtiq",
  "key11": "2hwcdYqGioV9JMyKcYHk2tQSLoxbmiyw1H15f3uofvLfj2q7hQh8ixRfkktBjCCb5sKGZoWuj2qiAHwFgcsgKs1E",
  "key12": "4rWchc51FREoEfuM5Nr5c3zuxnz2psJHEECZJRQcX3TSsqTnGXGgP2XFT3DBcso35HhJAmRdW18aiDjW53qg9FHD",
  "key13": "5i6sTEN3DuA9MJAgY2SGqdUjitXxsrTnL4vB81fkrnTheJ4zZWqXP1AZ1ieqCtHgxFamXLAyf7CzJM13kpJdFgQ3",
  "key14": "3wtJUbHs8hkYLGN4KfxEJLr7XmDeXvJ1ocuAqcFquMj4iKZU1jvqRPMNujmDsxZHjRkMimyvD4teEgngpfm5hU7k",
  "key15": "JhyHRrCkVKij7aKTzzK3zQ1d49ejqdSWUW7tuRh8QVwbKwBvbVAoTVa4eofP1X17jxzzjuJVRU2XwPJnFnRN4SW",
  "key16": "3VJbSLGdiuYZYfB6wcTjCzzfxMT4H412qnAFXJdGuuipniJQUUgvMx4zwzGerXx6TDH6rTdAZaEm3FEWQqa6EQ5Z",
  "key17": "5ds1AiYC2tCeDa8S2uKKBjZV8WKnf9CYLg2kqhvDG29YgPUVQM3ZUjPaoqTwvR8CVc1991MLdnAKMQvBit1nasQx",
  "key18": "jA79CtmJjsfNiX94SNCzwrnYoKojpcUioqnzh62Z5JQB3uhX3C3DJJqYsUiHrnYBjWGjg3trzRdamfZ492batqA",
  "key19": "pi8tEhA7dxRiQ4KTkS4TwUioSyS9s6h2PvgTLqikjw7KhtwesGw7snNxE8bpmg1cyYhAnjUttfqqRPGjWkLMx9G",
  "key20": "VzZQFkHJLjG7g22rcEMqEoM5DcAkK8kU6BnrgX78uFzMCfL5wknpjKMQPSLLscm5T8YE16M8pAmoDxmxFaf5gyx",
  "key21": "pyR3HzDcMELosa6Ex935MjSB2bzRV13xXn82nw7KCTedsgAA5JsMAo5W8qGMkEGSbp1qzYu9aWM6LBRN7fkLxSg",
  "key22": "3FMFRnquUbMbsa15u5PibgpcgF7AHSkDi2qQNvzBq3XEzJKBkEviykpqRL4zjjanYPRExkcgSN5Ccg5yVarjojJo",
  "key23": "cGouQ4Xt7Ci83AQWLUy1vYoEUzMKZHjwHNwq4ZC5btWt6YexMhAvz5o58s37bWWkPSKjEUqct1jLZcBxpSa5NKT",
  "key24": "5rSBDQDAe6F2tkkcom4RhfN3tCR96ETsEFMbp7vVZEjGKrpJxczbmezKsy7pDu6c8p511LtphMmEhGywwzxL9gnN",
  "key25": "64d9D5BgtdPX8D8GCfLedVjKaGR9pFHhXU22trWh622y2v4bfkMJ8eVrEvu2epDuLPVA4LuVwSW8FHuJw5MyqrU9"
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
