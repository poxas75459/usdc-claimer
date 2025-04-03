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
    "3AxiSkv3kQpCVLA9Y2cdPSe1BaSQBrK7Gw4MWM7C7SeoWXn1CnVRnVhFnGWNjCz5TyiSTvQ9MTH29MDvon9KjD1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63keuqsYvhPmrfLKUhQcsxSmA9GtBtizYPCpas9jakZHyxBt7jMzRNTrc6S5v7Q2cq91WumgntBRKk9rfkB8Cjf8",
  "key1": "65Adq3KjjGr9TdYmLdArxV8d9LNpE2TkBht6U8JCA3CUDESy4yDoDjwUvVj6oYihGepP4tpUnHkJaivBfhnjhPVQ",
  "key2": "5AGgyCGfqeevWDg7ZhvsbniMH3swz8Wj1273geuJSRR7ow83VKhzRBQRbo3UEr197oy7ag899U7FS9fyAEpUYVPv",
  "key3": "31gj3CGZdhpY8BLNq3RTq58GgS7r2UAKYqJpdMdiRbeWph4j75q5J8fXcT76QfBwVTLs31L3H5aWsf81qdEEoT27",
  "key4": "Dk6DQcZK62xmVQ3L9tnnE3RzL7jpCPyNBP3x2vELLM8geyarz9CgoSSNJsqcbswbod4foExKpZcAABE5VvvRNvV",
  "key5": "2QizNFyRyRA6rYbvxyZqXZmWuFoVJJkkCmKvu2LL3xcFxFstmfGiAHr7Su9dSW7pbtv38cWuvt5JRKtbnJqMHk5Q",
  "key6": "1ePwanpFsREBsA1JUawBB48kwj1THQpC2M8cGZ7GmDAEdbvQWpXoNTsEWp3MchC6gC7kHZ8VYogvQ8zKqqpKsps",
  "key7": "5vZdG4YWcuJfBjTWP9TdBGjr3Z7dBbueczb3WgHLUUFSuaQbV3hj1dWfjAzNKj4F4FVgnPvRY3LMBnP81s6Pg3B6",
  "key8": "5PJCCCPsVNoyDHsAm7fB5kkdggjtSBEzdTCeg2j7v6au1XvS8bndcJvWyi9ZSjcrNXEbRYYQJPj18qJKU2E6r3mH",
  "key9": "35SNLBMRKRVM4SYttYrdySeinJkFzXMweoXgVRZ2b5R914xsZAkyH88cCh6uNaUFauLnjutCwuKTF6JSWggPH9S6",
  "key10": "3zYYvMAdFdGjxeRPzPWz9CNai2imtNcohQsAwuy5pNQFjHpYTHmr6X79pJgTcHjLGmxR7ZrPH2cjtB3UVY7ZGdbS",
  "key11": "4xcaJyxyDkNKppszPJfNNiT9zStnFPXtEpuhaHvafHTSfeQnRazRy8c2LQQqu7a5mEMAztgtTogP6i6izNE3DFsw",
  "key12": "2rd2ttza5w3pU4jGhrSwkdy6JhkyPh3TGxBqAX1xACwaUHo6QTCz1mi6DggYkVYCQz4bHPrevJmtqyq2VP9QnPuQ",
  "key13": "vtbF9ekYrY2HtVW46FJtxFtjAnpKSAVhfKisWXkJ13hmFmH5xww5fF6Sr89GYud8hnzTtdpXEHhFiAvJod7nNb6",
  "key14": "3N3Bd5JMEQtc1ibQxPjdxEJaqgqirQWGCaVwqjCQNtyus5MbE8ThYutoXcRVLkcKGnDiAm1zFzszZYQgMoq91t33",
  "key15": "ZikmKT13epCbDZk3RxMiiKw1TwvrW6CLYv8GWsvoPqHboMw5w2WV6LvxmzvHbVLrFXECmW1GcX6YMQN2WMiFY79",
  "key16": "3uvmtqTftirhfa8XSGPoBYmuVqFgtDBtXQyLG2MXLeycFEQkmxJdNcc4A8qgmrDSGksNX6yqr8GjGZ4SN8c3rZye",
  "key17": "4RFZswkkKZQsnfpBjxLHewXtwSrwbhwTuh3K4CUio13q9UpzWaEwrR5HH8C7B1d8mgNhdiu9fdVtbRxTDj6XwYeM",
  "key18": "5CvgVhhaVsQLUDqK6oGfzE4Bkb2RE8ChqEEHNbHC6AaWV72WuiheFq6AnswGxYsRZfVzcHMVH4rSsbScCsjTx8Hn",
  "key19": "5NMMQWdDTudpdoRhxKHfNFb1YrVynNaoGe5qbojEy9TWJzti5EmGXWLwKxkMFczuSBhxJuAX6XHMpR1rqocBnzvg",
  "key20": "3PNxtfjrj1ouo5K8JXbiwM2QpwEiGengT2v9hGGvUTnHcsC1dtmaBtLQzEr28qVNsojQSzFJfJwmD22wePhniFwY",
  "key21": "3VbUFBQM1epcrvsMY8LcgvKguBkpdwYi9uwjQAarbh7mvyh2XmQHE9xytN9EZgwuaT9XZ7BXksdmbdH7siVe5rJx",
  "key22": "6iYaFTLtgYUgmaj3Tve3NRgmpunr9JKzo2TpAbniEj4jQ2VWG73ioxxpVsvDS26wXC7ow76s1S1P9hvhyLWwFUb",
  "key23": "5feMGtMP78JF8qqqV4TPZNcL1gu8EJv2ecWYNGYc9xAzTCJmySrW2VVkaqj2j9BUHsh7j9TnQpwnDmbzFfcCkZck",
  "key24": "5AACrJW3zECsRLQpVsczdSyKP6QhAGDdCA6QEykdmeV1YfkkMt8WcKr3VH79jCtN3KFnWN1bgZvVVggp3AUDoZGc",
  "key25": "61YkzDervthMnsQyUrWVDn3M5w4TuaLYR7M8PwDSonmLkwFNYx9gHVQ29qrMXJWwrP7w9Zu6ZMGZecTqYwrphUee",
  "key26": "qGraKnkJPyrFiYtvnZm5d7QM9JP84XJHwW5SrfkQe8nzUmZNMaGrLsedRnxF65zF4HJyAXMqvzZYSijhABbKYds",
  "key27": "oKavL78u8Ykrf41WYg9y5ewfgBotA2jGrV2gqt5fCPQnmpj2LMk3t15TAjzT4N8EiJxXBQFSnDdZ4j4WQGsKZ3t",
  "key28": "4KP6rzuUBj7vBDvCTFyGu6qZGea5k8V9qSzsdXbcNV71rkB8LqQuGmkjQ97ozekAMEKG141Fo22ffEJmpskSWCTJ",
  "key29": "3puTjLxnwAGCP7PMkdy6N7HbXb6DzfaMioQzcska27F7nX7es2nytd1LnBHUY1GLQbYq5HJw1rgnmxcChq1MrqTQ"
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
