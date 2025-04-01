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
    "4YjAq8Sm78XskFWV4Esmq63W9D3AgUAXjdAs13CDwCPUWAVb1wZnpHfc7uuJ1KiDRtaRuiPuBqibZuK6T4hTDa1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sb3fAwjtku2tRiBmtXpCbriuMVaQZZwGeTc5NtG2Do6yVKhngWrMj2TkvTdBcy7PeGdLHFcHY2PQxPSaW6Jidq8",
  "key1": "2N5mSeTVT2VSnzjptEVw4XQe2rLaPH96cytudCQxjeqXb5XwSMbQhyPuxSBKeiJkovM5Es7uGDCm5qSGix7uzWcw",
  "key2": "4oS6cjERnE2eME4yWo1zVqyRihwMZFvyEoKQQ5D8QU4HK8xF1xPEQv5wj1ff6WeNhvxo47bBEceydYprpndaDgpL",
  "key3": "3GDMWYRbWgvPaDGmJhXUP66qNRX3XnGb9uxJbjvyzgHhA8GUGWGchPaNef9RsECkRRkkMMHrD3Bhk7yXkmnTHxeu",
  "key4": "aDuaV9b5qJFX6es1oXcHEX4cf41whALNSPwnZ37arv59SBTCcTGRzjCK49PxKi7gbAze3jYfCNvvXzVL5M7xmjR",
  "key5": "5mjs8ChAaNz3PXUwhRR1z3Wdm5mbjCD9eBqkJw4asWaE4ykKQN1BBY4EnEprkH59HoRzbz8phrSfCXt4W1HqUhY7",
  "key6": "3z9Vo1S7RZiWvGzaf28E4DNKR3CJBr3vdoj9fa9nPuA1qdjEmcH8qWZWrajJvhSSxYkrdsQUFefwLBhieYXGAPB9",
  "key7": "2TZB72orcjYTkeGmf5TdTcYtPX4kK6BihUu7UQo4oXPUt5wGCYxde3hnW3GEB9Lv1Ervq7PQjrS7ue9CkRKtPxiX",
  "key8": "5mRom78cPBRjFm4smAEeSzqWHERTssW71FugZmusQ5mjNAr4ywhDZCMnSYLyMV7kTx8VdSeUZ9tzB1WxBSsAW4GQ",
  "key9": "4wMqYWz5PwSzZR5Smbu7PvJzFUxeAtTB3hZBKU71SY1Xa53yBdjJwvoLxCP8DBJxV2dycgiKx2jG2acSfUExrr2a",
  "key10": "547bkqd9kJiNuKb8qfwn82nwV7rat66M656pkB21r54mDG2p4MvikwoT9db1odky998ccFbnmhw6Ju6GwBbFdoB",
  "key11": "4uXiSQBrhyYfcYDkeTVcrRSZEpTEt9JFS3qKULcwauzAePxfK8HoJaPmNb2C4QxEjtUvZ3NTqUir4u7Fo3GBKZkK",
  "key12": "vefDwdmZhR4VUdMxuiTbyndAp9MG1VaxTsLvc8brwX3SudLSMatYBPDRapTbNPmk2ighnhejquVrTxaGJvgewDQ",
  "key13": "2VJb8GDYusHoYjX7zC6pVB2qZ1reL8zrN2NXHSJC6NU2XHgP2vjZd2KoAqeKyjLdXLg7198mdAB787yT1Lqhetyh",
  "key14": "3AwD6UmZ7VKtKifJaWxBw38covx38jhyGAj5XgWpdmcUZhdCYbvSVig9k3jsnMqqR9qJcSVeW1EafyBMWzKrdvKE",
  "key15": "deigyRWpsg3k5h4AogTueoLPMiSwxN6Bw4mP2uw6nwrCX39iYAXP3uV3P161AqtoPssghya983Y2SMnaox66qRD",
  "key16": "4ckCXLH1QaEUFrCT6CaxDKHuUFYPvA4VKa27ngquZBBeQpUZDoT7uiDhR3ATBVYnMdC9jWb3z6eUvD4FXVsUfy5h",
  "key17": "33ygXePYrmpQoVMTYa7tq8zTJ8Sx2apoCMst8rM3xz4P9xB88W79QFfQWMg2ngzzxE83s1PLvpJKjr9QTXsusNB",
  "key18": "4Mio6j8hH1VK38wZtgJgVCJTXo8vCs3h2HudzScV2XPCnmD7SEiWauRX4nWXkZeUkVe14hZcuQX2rRNK2M44LKm7",
  "key19": "94xw4rEkoezh4DyAveeS9h1o6kwnwH9oLL2qdxn4ZSHcPcEPEtw37mQwSNa76VUZ3Lvh63nFYst8AUqxSERtmSE",
  "key20": "FfqEVY9ZEfvDmBLpE4RdqfwsEuyd8wDF6rwZQTtQGmWvt6zhGCyFSK1uvJ8zqrCHEZBm9tauTJVmGmfPoMPDqTr",
  "key21": "5AQmQQeLeodcbtSr1ATuUGgCWAxfDMEjNzPrqf6ezAbuaEoYwxs3Qj3DNvG3cru52KvgiBDhyNFBqXuM9DhM3xuZ",
  "key22": "iHu22JnUXcTUyCtFEaw5ghJZswc7AFqjzedr2YQ7jHp1mPJ6qzEMsTpxcwbGNZ3ACLWPXGYt2KyfFp9S5GtuNbm",
  "key23": "475hpzoAAEkxcQsn2A6LvZbeSAy9pxtAKPoKQcfK1JeoMZPhL7nGRbtVzG8krnbWKuiknqnnWEKaH4VxSPepi1SE",
  "key24": "5aEFzrgNg2oC1qXaDa28h4A6KAZeKnNeTgdT5yC7UisqHLKBLMnNrkwxEte2cMGxNkjc1WoxW3FYyFV9g59HrKrT",
  "key25": "27A65kP3FULtdFopjCTJUAfqCq4PMHrwK23QSEU9zfJnruCojHnC9ubsjiEAiwKSWR1Q8srJUTxMwqxGUgiKxmDG",
  "key26": "4hskCdg5LKy5MsxJDyfC1b1cGuWr82nH1QMZwnHiH1x282Gt8FJAjRBa6YrnVSZLw1DCm6C3sX5Wun6dBBMFksk",
  "key27": "2eREyuaKc8qoba136zeehkydP7yr3yeBt7xE3fA8oCaZ7JPB423SHLkwg2zFqLpcHegxdJJbkvM6G4piSvFnVnh2",
  "key28": "37dps3ZRF67C8iaWfMps8fPvgX2ZBCWhZgW9bJMaTcmWUAEMvumC53undU9v4dbdDZwxEFVvxvcSSC2MPnnyZkP3",
  "key29": "4kpvB3XGVL7jEesCmjcwdWhE2vAvcmwLMnyshBCaYdei4Ad1kNHSmfB6wu8YQ5AXxC2ncLgk1gFLcedpbRPvfMcC",
  "key30": "24JSBhWcLZRdrJnYQhFxmfdHtBpsbVhceFhU4dzzyVXUnTw76trwHT9yNUagRFRsXERS9twtvJmyGG5RPn6bRgrt",
  "key31": "4DuJkFQPZgpNtVXCRLwxTHpnnRbp6YPcT7AyvK7KFExJxVJBVzu4fdnLh3Wfevquof9zorperLCUncZvhkxNShVY",
  "key32": "5jaQFK3Kdt3tYdxveh1B49ep4gJVBpDeSGnLFayYk562hRsBzNtDW2jFouG437SP9XvRYveAVKBsWsgXhr2v8Yo1",
  "key33": "5Tj96tBXCw5Xb56rxNbYgxyXPsAvdBbq9Ki4hrNteJuZL3iiV4bwL899w6uGLy3BK1Mdf9ycZ5CaanmtisJ8QTXL",
  "key34": "2YM76BS7fKixMEMz1vLjzfftcKL2RQaq5A39ytSNqVyoVD9WqkwgszKqEPH5kaSpHL2wAf5FB1DRcUJey5gwRei1",
  "key35": "2NbwVd1q73gG3oL17EsB9iDqWDXhFBRBjxvsUN9RxK6FxS1fTVGhDbX11Th4PY3WDixrmGH9W9Qu8uNYoiASXde8",
  "key36": "4LS9ug5m1Z3vYr5JWixUJinALKt6LqbCxtYffRjmTm2smKHgiZMngfZkmrsDgJCipWeF85DqqL4t1ZjPDhGc2NnZ",
  "key37": "4T7R7EWUdQoQAstk5yhuu9NBv67didN9KJCizHRAYRCJUcVC98Dgxxw7zxcd4UxL8nL7RN64E7TdBhY4VwkSNc9t",
  "key38": "3wTMDmqDxqnBBUozEzcKczZJNq6tH4TiqXf6juqvQFq2mKQuSrXnbYxg97fDZCh77kdxXwpYNwv91KgpXupmYDs7",
  "key39": "t4pP4yKNkf4NyBzcyqoVdxzhERA2amcEHJpNNHDXT9zPdPoRX7GWM9NJKgFa3sn4BqcuCq9Dnv85NmtY97RuGbs",
  "key40": "4BLDtoLBQLUcBZZDS73Kkyi2Ddm1xSDJ8zGGVq38CJm2pBr3BDQGKnuhfXtqqPe5ww8NUU19KB46jUJH4raHpWAZ",
  "key41": "1tdTeZQUucck56CeoawA6P62KCLAFaCQfKWWnXych5bMLsq8eCpc9eGbKKuXL4QacwE3o32TYACouCN1bB8q3cV",
  "key42": "2JREqy2Tth3X6hrL6NM34XAXg2Uc634qiNRWMA816MBVikxjM54HyewRsfvfXW8YiMiJLtwR33QdXJTcNKvgpXEU",
  "key43": "38JgPY7UyHH3EBqQ7T5hKPtQNk6pyihUM5Fme6iFQ4aJgdDkjzu7fUJWrgfKAgonAecVvXEQMmE2v73vMZmG6RNX"
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
