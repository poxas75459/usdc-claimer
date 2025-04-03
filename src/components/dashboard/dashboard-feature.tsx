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
    "3mLYG3oG8iK2w3w9yeTZy8QDkpqBQnw8Ezf4tbG3vFtVqqdfKf9AzxtRqNJjs8uC3C1aQD7vXdNnWLdoys8eHUrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GniPHMwEvMvCd31rCzm632sxUxsRmzSTM3za3e5vnTZYx9NUzXaMH1nadsggU8GndwLPwJRmpCAdwXhC5kCfwuC",
  "key1": "3vpbtLUGCRFxZSxVKfizEJjfsELhDmxQbmZTYXv86dUXUYquRN9n9zB1kKH3PcaibAo7YfeMZPeHZdkwGpNt3rvL",
  "key2": "qCfDDZHPPJun3hzMxRgpijaLgR9f9Y2VmysbdqReN4axdjkW6tVKfiKgHbb9yCEivh5ea8BSqm6pXNXpPVaHjF1",
  "key3": "4kgEvuFj3Gz7T9W5PYheYCoJotLzgi17MEskN3KNT3axR8xuHx61pyvy6JVPssBuumt1ydSkTZJRNEWeNV88cbtU",
  "key4": "4zwYQz7YrMGW1d5runEYYqTeDVGHc7GUAehxC9uT8o68CB8SrXEGDJ1F4pTSwdPk7RPz7HHuXo8tsMKc5MtU3MgX",
  "key5": "4aBiKAhbXs2Kq8bogZeLPDFttLAJtr51pPw4JhWFAhKS6RFZdDqBVSinnkz9p7DXGvqbzriesDAEpS7yV3sp5oDD",
  "key6": "2r7bJxbz7PT7YZPY9jf7fwimx7zevSCtDFdUn4fN9VdTRZFnVxdAJBihpqs5tXtpW3GuUT7BJRhAhqnYRMfF6STg",
  "key7": "2cMLvZ8Mp9Y5JYeJSAjaucZy96BiMhDgA6jUQVsgGHAJfPSiZ8XbRQjWpCQjZfYnF8B8naxarhTuYvNPNbhoFN2S",
  "key8": "4WK9MA3P2TCeLohPvPrig5Zu2HRWvrjqFWTKfXr8xfwZboh82cEhEWxPqC7UwEGwpH5ytPdYMsxUa9WbUfNYBSr5",
  "key9": "bpAfokj48jsVH5Tm6LXQrUZMq4pBJT1p82j7qH4mTDheiCGJ1aow5CEzUeQHMxSjTZyxdQef2ZnVeQ7JNtQnjrv",
  "key10": "39oUDYBgawsEQNAEtCVgEy2uuD6kHYczhfA4p3YbtEXeHg79tY3F2Z4jDZ8yvnFWeWS6W4io7FScYT6TkUi9qL3y",
  "key11": "63RntnWu6w6ZW2PDVWB2WZH57aJF6akkPDuVTyffT9ZGkm4ALdUMrzMHag5n6NomunSj3DoXboXKDaWRkkUnzBG5",
  "key12": "wRnTHHVMsLN7rhwLBgumL2tBUwYQ6GKH5ZRrzHP3uiVFH7ky4o9HvvLvPMPBL6CnL3C5qjktQhqXtsg8vgrsQte",
  "key13": "L2rNLjGYGz55QZX59jCEgn1WxRaKj6FX3GH4MhVMr7543HFGWudeY1EqeUwq4tLtyFW8RaG5wZxDqpxpiSuDn2n",
  "key14": "1P1vZ3woFVtpSzgReUnyvKHKmMk168F7medVeGDFkuKC2mbw7PXpuaftoWoA3Hxh1jN2gnygWYPWNi2sNzKNeXT",
  "key15": "5GbrXixtxeeZJH8MS1rzrAepjJQJb5fQpCwXA3wwgZ7hgxo4KjAQi7XaHkMgVt7acoeZ8Y3zPbWh5e7pZL6b6wqp",
  "key16": "2yG9tphD9TqNHjWx9PX4XXxNFYyUBPdbjXJnkSup2DsWET5we72TCYwFhJDRjEaJvRDG2z9fyXheBjL4CzmKiPhy",
  "key17": "2u1B4DFizdcYAHh42Hm5YZUs7mH3R7jkQRsoUFY7fXovnyMcCHe95byrMfkyCMrQ11dVu58dmhB8aHCHUzQw4aQ4",
  "key18": "38Evo7Dims6SxUR2YEp4ig2JB2g7MpqyN6wTRT28GNrfX2x5WSSMHqHfWdb78CAwdyuWDzKw4DjqRqw3Ug8XiYEX",
  "key19": "4QR3MuXg5h8QyXEdtSmtKfvD7gzvZf4QiUU6AAJJCf6aUoY8M6FiQxEpqbtGxe7m9JeU8z112haCdpBdHAV12fgU",
  "key20": "2zjdfCCmjDy8EueYT3AXCRHGVm4sWTSxYVwgfTZP1HNvZ1RpvTBuV2dFVkHnLZJA9na3FVnjZCz9qQQYYZBKf5UZ",
  "key21": "4HcZ3ohcdqNsdvscDWaX79nSfDV1mZcQrssz6WPYGHtZctxy1geXHLwvoLdtgC7gdbFovtwdTyU5DFwuk2TdUGda",
  "key22": "3P2TxCjn6kGz1mNeTLjmbq7SpogzTzNdF3fu9QPxxEocEXUSr2wHUawk5wLZ9nn4EmtfHEYZAEcN2mmD5r2E6qi5",
  "key23": "59ar4LYM9Msu1baEuA9kQGuy8N5Fcmq7zSiTKsgkGSkf6kUEpmfWK6HTrWWoWUEvJYJbyvviMjxqZ3kMbTeBZ3Rz",
  "key24": "2naUJzGh41AHpncjKtviKBRw3SRi2gUkHjtjVtCfHTSfADXVnC6EaZBKjXuMbDJeMoDw8g5oQ1YwcYq6XwBr8Xxa",
  "key25": "3uHuPv8GPeKnwN4ep3fpZS4rFg8UY8N85BpTGYs7Fm359UHyzmkt6yyYbZwkML4TxYGnzyBbpsWQ998pGB1Uv8zC",
  "key26": "4G3kW8zJMcbxXz6XHCS785Aht8tT1dtdb9XhAht1k2dQ5cAQRzNp8nnoLqH2eNDGaW2aSRFQGVeNF3T2Yb6F2uzw",
  "key27": "3fcY1XeDDe7nYMMPVypqutnviD98kgjKHpjCvLd8uTi2N1FE6MXpzaZsAMx1ovkuhQfZPWKq9veGdkPiTPQMUbvj",
  "key28": "5MSWJsgPTHzegEQEBtT2UBsjegzKoBspFX9kovhSJZE6Xz9HvnC73JykJn4w2oqokx1nKvWRcX55jS1HiF5KALkA",
  "key29": "2vAS9j4fzABqWQvP7Ei4MY2QbF7FN5Pf86u9zMBn93RE3wxVEP54k8T9sJXc8iVkxNFFA5ygR1igbDBM7XGJFwSQ",
  "key30": "3Ta3jYAdpNcP6DBPF9QgNb5s8gXPjCceiqcRAqfAvUUSZpPFvoqRp7EW7uXwM2bVmi2V4gS4ChDBKQxHSiVT5S8u",
  "key31": "3dKggBjZsHrgzRwTtcE33cxMeY5QUHpyfzwW4SBjj3hmHuoagZvakCB4pwyru64C5wSYyfUNP8nF8efJrcT8Et4",
  "key32": "4NqhEcHTXE4eWnywCGFhiVrtvEQx1JbSr4xhMsHy8bnC5pVVs84dk7XzHLXNEDBqSWen2btYPxQXCHAKaPnGZmzv",
  "key33": "2ci5abLuHzZvmbKn1yFDXVaazWfQJ8mXmuffs9L25oYzG5hGy2KCCydCmJmimmL2r9SuocuVWmTRVnQxBxsAApBM",
  "key34": "4q8Tqn6nRrXxfkxcR37CGXXgNW8gym9TT6W3eCZu1o21gZkuotLLwceSrNX5ccHD8evHwsdrH3ifiWKqmBrHp2n7",
  "key35": "A3hUeTPmz46oScCg86Lxkrv1gVPM8RxpyBR3nukAZ6B5on6HTWFL34vaz3y3EPZzSpTLmeopEmEQiVAWompKSSo",
  "key36": "ChBJSBDfHyctJPB9257nB9gmoRRg7GkD9h5itprSuehYofZPq7S3YLQ2VkYCKKQEwmsrdGwV3nXeCaBxP5Jo1xT",
  "key37": "Z1m5EkU5Ye9dNhu4r8rb86biMihjbpHuH8BAqM6jPHGyJRvZHG3AAD8ai5VB2s8ZSFs9kKQaYCZV7SNCryn7RLs"
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
