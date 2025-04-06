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
    "tdhJtTJLpHevcvpgQbwLDEqpyeXQEeLMd5bQNtUeNmF5ymN5qZYdZJYfT8ZrQZzk14hVax9FXyVFhnbcGEC3ysh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyrqzJycKdAFQGAyQukap82RNDCUSBZcNu3B74R8fzTo9EKk4cuDQUjHugtHqnKBfaUXpfDV8xqvafZFzTiPVtP",
  "key1": "53jRAdvLygyVcU9gKwfVrMTug2PPzM1B2ZoXTt9si88WkNkWP5Yq7mthD5kcsHhzzEGo7YS2Rx1qVUatjgDC31vJ",
  "key2": "4J2hjyczmFcqs5fbQ82RC9hTDDGN6qWUxs7fRT3mxVBQWpARhMQfBppT2WRccTBBNEdFuqdSpTtazWNvUV9cmYPx",
  "key3": "3ZVo3aQS11DLi6qNHc9iXYjxNtcfaoujuqCSxs63KKDZkBfbU4iDuZWp5vDZT4xvnUoQiLND5L51u6ajWtfBYMjv",
  "key4": "2odMGivwMFew7cdvxUjbUhXTf2iV8n5scc5o6UZQim2UwiqJDAspWERJvnM8Bo2sfENaL1m2Q1RuEXKHVBFwrzFv",
  "key5": "4UVp5cFFxXPg9L7vEqtvg6a9B8S8kGq5eadpQ5btVV8jZK9xNcvg8wyF3YaTuA5nze2Un9KJh2nyaWbbfhYgHFA4",
  "key6": "569xvWWboNszDbErHFaUFKck8TY9EpSZd8ZP4RBe4hjK2RnSCZY83dcozuh3fayCP3YZUAUEgVW3yTf4RVpLmCXx",
  "key7": "Tq92gqCjyJVSvWg6gA8NySidB1cC5TTAHTXCwjDNLRBoZW3vHJ39jwRK6fg8GoBF6LQJgQPDvEkHzfd2Vk8ZXr1",
  "key8": "YrxaiuAzZ1QTYGVhTYhdEFM8jmxNdJEtc2bsGkehueYWdRNP9nZDfQ8PKDZ1Jdk7dhg4WbVfTJMcSmWAaNUSCRT",
  "key9": "3gMNDwPiJ61WUou53N9SzguZnPwyeQc9ppnyFNVCEbzyzJeiaRU7XuqtCQXNSCvCZ59ofwz4umTAyTwSwrbVvWTT",
  "key10": "5DEEFBVRCoJ8j5ShzAdGfKKfkocVf9soxvhCyMS28kfAB8HvaLeKe7UoisGpBDNTscREF4keWY5isdf6NtYGky8z",
  "key11": "2rNXPsmbM8ja4EEPPZLuZEPnUSJQrea1bEnLSGLq3pEV7fDqjintw9oAJxAbKFGFsM9vm7vUZTCuhCS8eiRBHb4q",
  "key12": "qGjhCApZp9Af6mtkzitpvFiRAmK6HBvnro44v23iVjvZ87RZG3nBpPqZMqPzsY7SJCkw41irK8esUph8XYiHSMF",
  "key13": "4sVPeJwJG2wM5BgmqdVqWgdzjd6L4v5eHkY61EYsk5a38ZB9uvdASqNGYTbdG93SSonfat77Tn7akwhjkQmTr9CD",
  "key14": "2oZLJL9oei9ZmXEytBZvFeTuKcktzaZzBBcci8FSNLjF5qwQAQRQFHxJHQokYj46DLhQwAiyDhuqk4MFTYB1ZNXi",
  "key15": "5ek7rDBa3hnJvS85NhvFU6hSucUSER9JzAe15XBwZ7auNMEoYNnXX9cCwR4W7tt21tKEhYSmkQMstpshn9rhuCYy",
  "key16": "2pfn3ME9xXsFW787CUq4vprerjCqFhwQXwGJdbR8zhppGBVohXyTN13u3XepTRWyjJJYpwnAAXtuXA4ChbrcTgqJ",
  "key17": "5piqVq1Ceci4HnsDg11kxqwnnsDnKjXbEqFmGJ6FKBRxhpuTepZ9JURFvggUVpzpdk44419S2d1z2hGmeyntS9m4",
  "key18": "3TTmV9ESJZwUwaDPpDWFeimX9DvQpARifF4oaiqNMY1XCrWqHs2Lj3wqkuEt36ziz81SAsJPFpoZ5ihNa4WRrJNe",
  "key19": "QXjqwCnZ1RbcrRe46CBSkyhhT4MvMBFPpYzbM4A4cKodkdQmJw8YLB8NtGpr8vaU4R5V3TdKSZmDehUUeqy4GXn",
  "key20": "UGp8oh6tKFngcpkRpveQQkmQHPpJ3ngtGhiFqW1W1zyW8qGWA9776bWFD4QqhCrWsMZhRL3P89qhzEygjVqm72z",
  "key21": "X2KZkYSauT7GXx4kSu2nzX61rexFdfhtbecXwrvu6yWMswcDFCD5rQRAHJ3eP6Viekw32pPi77smrpdAwN2Tjuq",
  "key22": "2KBMKHtqWNw5QSZRYhxQaPJNQ2X3qy4j1dLtKmyLcnGxVgfVagaCHgKHv5W9K6btBe5fspPY1K5XHEbTHcNMLWC4",
  "key23": "2KqYjEXgyXFGBLtgYD41sDJqHwa5aGHUudtYmVRxhpyxVXUGTYpmCU6yuJFLGfWLDh2jRCtrYY9d6oCwnqGYgGQ8",
  "key24": "3QcL7FG6RwdBfonsKs7q2xTHVqm8GZzb1cqsKmSrgxMY2MzBNLeuLcsDjAgbQR1EdU7SLmcKz19MmeftJeYhmF6W",
  "key25": "2NMBP4qGhT8DPMSoo3hpVVJq8QHGQkrH93T3wiLfYTh3PS9D6Vu3fHMTqgqCo4dgnMfRsjEwxH9kdLQR5hAit9Fr",
  "key26": "2BzWSsDXpLnj5bk2i7te87zK7nX1gQgDWoDhLPRQB9nshPKXCvpURP9gcFDak5U4F5kU5oi49F9L5ccmgq1qyciA",
  "key27": "bAKHLz7XmYkU9Yt94Ko1FPiyAoDEHbVcmX2ewcvJkKWGYfEFBF3a6yKRuRAcvrhcNjLjzLrT92kX3bPmWSKe9uZ",
  "key28": "2D9QyQoDgjCskXYnp8UAFUVaoNxfvzzxK2c6jkck38hHa1UrsjdkeadhCPnt52bbabCG4pTjR3c9D3QgF558std9",
  "key29": "gA2MkMabiQ3gTqEdJLCDgFMKTxvAJo19WsGmhfTbRo8HZdNfXmP4p5YNaTc3daEWRe4bXqb7kGLYYBif2Rq2mAD",
  "key30": "4z3XJnwajDEexo9aovUP8pZAnhX3py6wmqFxzPLcqWjP5QvYtxwhfMYMAUcx2PPJhnRvHVRhNG55tJYz7wUSbEEA",
  "key31": "55GAHaGkubfZz8dfhFtdS8Tkfb6EPwxkqvrz1ajSekhoU6MHvFB4hJd7DmHDW5Jj4Ke9hT2BnayGwiMKm8dVNENB",
  "key32": "5iL1eBEMHzaUfEGCfwvE6GWBCXz5RAHGp9Foarp2nh1C9MQAtMQQtdfGcGecvcW67nigw1ZJxKidKEuuCNKbtjMn",
  "key33": "5FZ2rCz5LcH4yYipKbALwY6Jmpsi3DPuPfRVBsVB3NyZKHefGYMN4W9uxw671GiJ6Jg9UbVpPxjdqtMmVLt9PYuo",
  "key34": "3cjGVv4xFJy4pZ8dmUW9jvGY8oNL5ykxxjD1e16eyCnRrWzGtNdqFydASAmn9TxZpkgNEZSkwvUvtnUJngBzRwEW",
  "key35": "2JK45nM8YMmcxi6nypMHydYMwiw3c33hjf5xV7Kn8CNwEMidJDieeuw1CMSticLvoR3yb3ohRLcUo9Lfy5Zk9bES",
  "key36": "TSP7Kh3EnbAuZ7AYYg5K1s4sNdTT8aCDoQwqSSD9HRCBQCsgPh6ckzBGsy122wos6QzrUwd2wuVLnoHCqrrfBcc",
  "key37": "G97Wg7TekryqbrKfPJuo84wgNc2iTb5Kg9jbN5Bj5zZJRfVxuAcCfAaScpNtzw1BTnUr2QU3sRWKnecvBPgXgt7",
  "key38": "3XwzoY3AN7wZiEAzEwoLWARc55hadJHBtUfkiR6eQ4kLnfFryN1aWzwSL9fbEtMDLeq3oyoRAJnYN93nb48QycMP",
  "key39": "3MSV3SNPLicpyrMRDLmDivW5GcpBzURzHVTxTf3bVSG493S38vPPH6Xobz345U4ukS5CLBJPou5UnMSGiHmdmAhA",
  "key40": "45kVHn47zV2JZfUJiTv8V7VvLkUDkrychkoAGkASXr1K35tn3gjbPDCYG7egnKaPPEKcCHxPydfqpypeqD9gBgHQ",
  "key41": "4KTzMWzwpv2M2t6Pj2ce5qQKMyNmFX6KCHsbebVERH7YGhkDe1e2ZF2Wr3Ag6mEUKzZjACva8rDMvn5Vn8VqHG3S",
  "key42": "Amgv7SXwuXxytR8qDMGoY2uxodUG9nhKF5wfztwPj8TTKALhpXqUyWdvNL98su92KZv2QaWrX6418HVCHNKSxoU",
  "key43": "49iv3tXC1vb7417HT17EVnViTRKzRdmHe6C1und19y27BuyHQtEwZTwAsFiV6tCL5MEX4kNf6ytSvFdCaS7V7o5f",
  "key44": "2SdBmpjkurJouNu2v3M5JdHuqvKnEBv91TEfqaX4mw5uFQr94mC13P1w1NhMeobSWmSuMJnxeLEVkya9rx87An6g",
  "key45": "5fgq8yJtZwZHjioZbRbXuZdis96pw3o2yxRdM9qeX7JdDg2RRZjz21bzqK1T5TARovoEer6Uu1P4TegBxNGxSyaH"
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
