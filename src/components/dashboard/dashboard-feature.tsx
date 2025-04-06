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
    "4HioTBct54wyVF2JKgtqFaLnA4vamZJZe2NRWSjdqY7vA1XfQriUducBwmscugxFMddHXS1FoDroKriotYkEnRyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TwkoT9iyB6QqqGMBipGRPmzRMV98tzKQo5yLTAyCEhguwjJ6NVcSA7sw2cJFCApxMzEvtowG4jW3Zd42be4Wkh5",
  "key1": "4ZEQswmPx9bAAE7gkoGvUaqPozMwxFc4CoGvbH9imsgMmMz5i5GxTB4cMz1YD8LGwikqvTwdTzN6uA5auJPRvx3g",
  "key2": "5vf7UqfiRfNks5PPATuEoqTYFczGRd4mm5HbcYtyJ2njd4qe1rKnDtgF27Wh8UDGYXq36DCz9kAst4D5ZE55vR6Q",
  "key3": "5aY1Ddi96Ab8C865PPCmjiD2fki3LWFGHGy7v1UmQPFzsbsXkYY5sdN2hX61NBgsQWEkY2SirBsZh5Gv366qKvMo",
  "key4": "4jhXGD3BmCGzaLr5bfGQjJRc57Njtdaj2c9BTtGNo663ELLmevo6ct6dzgp5noqsg4hBxf3bYYPtpBvVeGuPDpKc",
  "key5": "5TH2jcDfuhdBxxYbZPciqF33JEznB9ST9k7HFZcDpxzrCsnLYeFLfKGEDG78N9xPtSG4amB2rsKKEEpAwboJp5fu",
  "key6": "6359qjQxJBACaMNmsUNQp7Uq3NdP3EDxP5MYVRUPd6iKi47c44TFQj2wmjKCsPtwGCcfeyo1hEoFtnzZF7WV6zsJ",
  "key7": "3wgPP3v7gBhtuDaf8ZNpAGBPuDbbPSS3Ekqb8EVckwLmDFuvUi2PBuYy3736YS3BKLnAt5fRNF7brCPdASjiTSM4",
  "key8": "5V1zQG664coRHCxFTwtGySoNEaJQMJSGHkuVa58zm2M5U7hJAGVyherbMPHLYmiYE3WTqUX69G6swka5fAonxsdQ",
  "key9": "3syP4nrE9a4XYkyg5vWaNbahPGqVSLc1V26vu6Bg758z7uNYGgBSnkVWiCQKCEkQaSMTUXEZZt33U7fLwg625a9v",
  "key10": "4zmLKkoXKDAeuSiNNbr7Ys4nUv38UZacuKwmmd9zPUDbfnwiYehH5zkUnmReHgAsbiRtZRuaciAUTyEhPhUAyvpr",
  "key11": "5BduD7WgoBGAwmA26ZpseSE8KwD4vd2UC5BdoKLvNWcc8zdxyYiExSuzpGe3fGTELeYyqRrYhPUirFaAQt8Q9Y63",
  "key12": "67k2WuHDyaXTGhxTDCjPRSwpR1B9QaGWjQpQv4y6zsoG9ZBvdyeWiA1ZvuYo8cJAu9AuHweD38KwpNR4btA94E9W",
  "key13": "3JwZPG3T7jgA5um3Y3WcQN7yLiSUCp47MXZBkhnG2FUiR32bE48PPdEDeDWBdYkpf6MGKunF8qCNpSxQgqhNiFvV",
  "key14": "HHWgGPvpWburYhpiAfZXqgBDFYjEckhs6QpZs13R9pJUC3DgYRvNRbMgC715pExJ53kdjUFifWmEbK6UCL1mW4K",
  "key15": "4QP5RveYiZMm2M2MAauGE5vHYtpnt28KT8dYjwyhCaWHxVthLHEBiR9QQVJxmzNSEZHRF2PC3npsto4HZwdvZfVC",
  "key16": "zyF69fkoj5h4tVouUoPgpGRqTAzVvgm6eMfGexr23j1tdWCuzZkERzkLYsX2PfPznFfFyvpDJiMzAygrjCvZBHd",
  "key17": "4R3FXAEfDLvGJUTWhiqS8Xm8aQmWzwFLRv8uuhbYaV6a8QFDDYmCPskX5UGS1fhGQU3nWku8P4yHoWurZmYjrcZ4",
  "key18": "5jzXmiuU6meon7ykBcH6XJSWEpZ4rNKDNGDSvEY2HFP6Herwy4TGMZ3R84xfN9H8XLcbNaTgyxJf66VcAe48ErXt",
  "key19": "3PpJj2gz5hVufVszPCw3agFa2dtwTZcYRvHjopfMr3y115a9WmASW8ANHfnUeAunwzZrYQvnYiKGWvH9kDc8RanZ",
  "key20": "5g4UEMCrfApnhVcuuyNg7erk9tUz11CxTJYFfPaxCbHTJuRcAG5LCc2rfyqNRqjrwazHJ31sSoyMzC6wc15gEf3M",
  "key21": "3tStVf4JwsTyGTqoVSNFm6EKF8NMWtZoEDj2TxykFvWR9xnGVduzZpQssBMJkBtei8j8mVZp5EwKANEa6SxsK2Js",
  "key22": "5BqWY4NXDwxC4LvNkujuhdUTeERjj3wJyL662UvWqA3npkR5MZDQm7dMKN9GzCjZgarmkRoYihjLTDXuz7NEWCfo",
  "key23": "Z4MRx18RRwMUeM6Rqeb1niiMddYF7rP7WPZ2bPbTFZy2eUfWyhGDKFGN61L7GGFviuBxF9SoDxfPe7YTEy4AMSA",
  "key24": "4Rp74Q32Mvsup8rQgT5pupEYQPsboEr5hWSLZUe9xmEWrpyU3RAsg95gtU69a41Tent9VUUM7USX3qWzXh1cKZow",
  "key25": "2qApxwFjQDQeP1fZk4Uqh8jReiqAcGnEHEEt8YEAz5t37bWjswZjjWRVkY37VwVRdfuu5fQsdmMxPRM8kAbe1Kra",
  "key26": "NLTSZtGVYVCgntrVGsiNMzC8UnftoizPJtULuXK3kwemV5kgNk6ARzyAhovCxpEXHs3wfAscotaKVf6ujVPTo6M",
  "key27": "5d4hX8Kx66k849fX1E89gii4s1Fnztbo8Qd4PJRoUduTsFX6XRwSpC77Z18bqpQ4EM9LJ9C4kWJmupA9f5efaf7c",
  "key28": "23zAhXzyUrASZEgNMLPeYtcacgCzFYj2ramGVmUupQ2NhyXwM46drHuQEMRA2UPjNPf54FdYvmVUerYRmYryT4zw",
  "key29": "LqDNDDMpWgAZXr6QMjZdzvxa43W9rby7kNzr2QuNbkX347X1VVCaPwx4SWp3z6we2HLCeqUJ8jTy1Zwf6BKFqRZ",
  "key30": "qDU8ktvhMTrwoJCsJayTKDAASEwhiEYaTUPekkxJvyrrAmoJo8BDUEwMnjT2tfrnurKtosTkjVoQm4sLd58iv2y",
  "key31": "72chGMyXqtQdMuvdiL3kfhDCNHpXcAJCnMKXdK65xmfurzHDPmdmz4AHSrUWF2Dzup8x2khVe3mwnSjin9qSu31",
  "key32": "24BpSYHZaYEFxPXDNsfbQXPHTwx4iYuk6jGAmXcbutqAH454wez3YPcndxyaN1AxgqwPtXEJSjhqbYVsM1wEgXCV",
  "key33": "5tkKfaogEvVXRgswgs7BCa6aYwvKGMtkm8ppoG9wpNU4XH7Hw3QYiqsmTyq4x7KS9pf8tjbDNW677jwck6uLFpY5",
  "key34": "5tnsNdn8BTCExdtxLacbaKQK4kye6QseQEDBmnCRBKQmdp6f6id2Ut3HFWK1hiNkc1rWkTdKN13Kjpmzzw7cTqCy",
  "key35": "4q46JadxFjaLNnm6ff5bqQeigdRyDXdL5j9gqimMWC8vswu3abcyaLPQBbqNQQBJMJa8RMNfLcCtnrX4eoUFxGiG"
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
