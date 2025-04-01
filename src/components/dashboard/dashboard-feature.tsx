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
    "5GcbGXtn72bioeZqpGj9zqWnFdorwe6YGzcoCd6ABAp3DjEzMMtA7K4yFyf8QdHTn3MyrbeaUwkDSxFqojWEQefu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSPv1MKC2xLTEgN3dLWMXWtqrt8trcMNL6LBZVaRe8jd1rXmxCev75DHNYA31sKoZ7Tm5AVuccbWo8BxxNYs4iZ",
  "key1": "3PZTshx83nhoHgKjucfRUHwiuVbYtQXzjMAohKzYD9weHVCHkb9QDWPGUojv2myUSuCTzvPtwWNuanNzUXTSH5ka",
  "key2": "3oGrCGNWZdUAY7WMuTKh1DEFedrqKk1Qc7PMy7JLcBCz6VhTZqvePSK2ym9iRoxGHtvudQ1kaMet2FpfEJWt6qQR",
  "key3": "4FeAwAnr2apdHrYUEbydQZKoGE4Wqnt3PDnakrGn9RSt2gRmUZaUtYZneWGQqyTSh71J69zmrvjKUc53RsEB1kbh",
  "key4": "4CkwAW8XPDeg9hNDaVUYVBvjrGNbLisedGYJbhkhZJoxbrbFYGHxfYNKUpTBG6nJP6AmDLPeSBWknnMq2XwhJAR8",
  "key5": "3ASUhiAgkgZam3kAqRTYmkUmJp2bRV7NA1H5q5JfarG76qtKRoNxXMb1YtodE5o31MfdqsLibdYAGP6Uf3sAyzJK",
  "key6": "2hU8RGSb1qVUwhJNxxbUSdca4bbfqNuRvUxJcW1dHNUgubSdPNVEDC6YEGBzzZazXu7ud8QZN7Pc4kZNWUs1sBNv",
  "key7": "3ddUodhKuf7kMJ53TrH7G6xHhTC3hhjV3taP29rNrGTFTrFa8bmGZ2cu4yqxwbsFnQS2eYQCpmjEgaPvbi2JjQ3g",
  "key8": "32bkf3bT58Aji4RcZgHUpf68eykVbAb4h8yA6wNdCh4Yx5UhEAmyPQQhBq9zg54i2BDPDAvVKQhcja9nikEY2sWF",
  "key9": "vTqy2MHDAmhM1EDgunNcMZteffPrpLpUQuvtmfTeqTc9yGZWtWSqWjc2ux6eSWPYw7wnCT7ZRiUZ3q37fUACgZS",
  "key10": "3SzBQ7nJAoSmK4b51q6fwK5J7sRH7e79MgPG649SBarjjW9WcFr8MMgL3XwtQQNiw69fd9T7Ly8siAjLdmPiL9d",
  "key11": "4ZfFAvwcgtj5Lx2yCFATtA1UKdgRc3hJMJUdDABBUAaeg4wJ2H4TnzXVjtobGv8dt4h1eun7KKVJfsYdNR3ncN3X",
  "key12": "2J8r3SDqLxWSSdPdPvK1FGyRMxjp5SUYfm7ycUPQo452y7N4xFFNxJweut5ceyHxxrTvqBvUKMty3o22CDHJKnnf",
  "key13": "3USsb4Son9Eqk1h75zPjfAeykhMNArQChJoc78gaFXGdV9txicqUKWbZs84zJ8QSCS8fogM5JFTFtCNXK64F3vbc",
  "key14": "55jyyCGq9XDSKqMfUZrzgHwyWz68iNwa5osKtBArYak5rHGWQcdFLfNfyj3tygPyGo9A3nnCwDkHWWAxnKhjotDf",
  "key15": "2UiNFnqhXpZi6orTm3HckfWm6o2uVkuZxXtwkHUMoRRR57xj3pYu6L1Re9r9wWTMR75AQx4ULfw4JtSEGpeTYNkp",
  "key16": "x7NTPyaJuqsYfozb4YDd3cXsWhnRPNNRnhakGBwMuaHKA4DAasrYA65dxXj3sGuQ2zW4QhByGK6du6VG3FssNhz",
  "key17": "4jNnoJSupma3eBrPR9aLSjFfaeyZt37M4XQd8FiK7Bi2Bqs9Ew7uJ7mWTKPpeXxPgRzupY7Rrz3ZyNzSfz1awjmB",
  "key18": "3KD16gh5ihVZ3v1GKfFLkDbFqLeV3pG2ZSLmQYvDbsghjzHx4Dne9MRpA4DUySxjodFitQrT17td1ZSgvhkRHWNj",
  "key19": "4uuhdtijxeCYYUW6ifu4pC31Xq7xjnbfHETQwRxrgH81kHfHmXNufdpiLXfHQo9dpRDX5yrkzkNkkejY9E8VfnaH",
  "key20": "64nyRnUDLHFsrX9rbULgkb2Mg9sZFL9VcRXGPWPz5VKH92LUmtpoTjp1Dnp71dLEK5vWrmMm3nCiVoaotq9dFprr",
  "key21": "4UcuRDh1eHcsxmr34gcFtGUXytDKTRUhjBEZSrFeQnX7dR22sjBbHVdswhx6DNzHEKkywdV4J3vkHqRPRqhr1rVm",
  "key22": "63QiWxw4fhEbvLjmD3odnywvC8Bf5m3RLwX9S9EY6BMxEq822Mv6byMe2ybYk4w11ikXmR8VTEcP3Wx9pMjMfKdn",
  "key23": "2RVccmeGjMTsGmh6QwUBZWDbtszGQjvw4hGmtcrXKsH6qGPNi4HVvReQACGt8oVBw3mCxjc8oWVnBgkcNP6psbni",
  "key24": "3bYwyK6ZEaqnKXMCiG7TF2CeU2LVZcWiU2XL3PQ7UG23gueMWmMaMcZtT4JPzn4pv2yXHmKguaVL3P2fA3GDPLR2",
  "key25": "4Gtw8wsTmvupjHWufbiddVBHAtBiA6nSDS1XQjynJNB8wbfdbt4WfqnPq721zNWjJUth5qC9s4Mg6Pg2Qbq3mahD",
  "key26": "2teHsYm7Ek1LQK5oWacThxmFGxWdYTN8f6DTjVBp86gr3B1uX9FaigBiG9RYcb16Ha7ywQrTcvRkzYKS4bzxTFEG",
  "key27": "3WdmXmUusJFG2dTdBiS3XZr1BNJnz9Kr2oreVbcU35Y8n8PqUUfCECw27qhx8RvgMXzTsDEs6NF2KC1QF5absG3L",
  "key28": "bpoFmEbJN2MP5MRZKyMesPpL4KDUabpJwfnPmhA7Unpnxdca8kGVhVfacXBpr5oqSrLhvgTQw4aEjCWhENEdw4f",
  "key29": "4uyE5pa9kdkFjUAWzypsuige6Wy2DPuzSNX1SVZMv7EhU3VossTJ32BerxxjGuSfwR8DruVPs6xAGXtnCZtb1ANg",
  "key30": "4KdB5mffrmQ3e8sUS1EPX2RjfRdGnC4uJzZ2zVRT7KSTGykKsQ5MYKGSQVJKWzTMYWKhFWXUnyr9ZFtpwmfQR7NQ",
  "key31": "2qeUthPbG5c5BvhJ6ask9gEux2gAfD7YgFpArtgd8h9cr9xVmmmjEsCQGjAd3o9WManri5n7oHV1iLUAT5Niuchh",
  "key32": "4tx6zfUJMbUZnHZGMNucfQAcCqq2ZG3QyYwENf27gSH3zt6dNuKnh2MQnkAcbvvSt2VWgLHtJgmZQDZi8Er4fPh7",
  "key33": "2xL3GkkhLUz3SzA5g6hJzHyX5m8TUNkqAJRXp8oSCnq3zj18bue1rUvkuFa8gPLkdpU6GxMwDrj5RYjZ8CqCAXNo",
  "key34": "3S8yjE6q1GqcrA9WAxfBigYAhVQK9tEuGAft89MSvfwjYB8pfbaZewzjKH6ZrWMzYFvfqSGRfL5wqwE6eKVvhAjL",
  "key35": "3KrDjnXbfVZ2dsb3KnCMjkudu36MH9o2yqrMQWek1hUWCho6zXokGa644iCva9nbgoAXGk1HK5BGiZoDhK51owkf",
  "key36": "TP7TaHduWVPEmsFqhn6YhAmWwSXKxbgjZH1oJbMEkazvJiX7QCf8sPXv3GYLLRMWkEvJJVTLHhDz4Rc73yosYSb",
  "key37": "5VrXW7bejJZjPnzMjABMrVcmQXp9Q7ELSzybKH2dQcodj5UgDWxLfvGffiuhp1AzYGchNXThsLdpW4ZeahAnsgeL",
  "key38": "2Fs6sVY9m78itwzdci2i9LmDUw7zEVwVycLjAjKng62wm17xJCT7xxTLv54wDYVY2Bm5Em2SMGFK4QNwqetdhUrm",
  "key39": "3jGbVpY1qM7XnnaGqLjrqDJZRd4Fb7c84ApLdRsL2pdYce6MkbE4mGuuhFG6J4rovGdmu7zRTbvhacgSqJUe14Vd"
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
