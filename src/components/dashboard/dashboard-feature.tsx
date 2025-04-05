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
    "3Roq1nYD7vnDbWr9cNM2cjdiGo5usx9rZtaDNDAwsMJ37LKQMJ7GPrW5MmXNHWaXaXnEh2QNe9qv6uiork8WTdDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PT96sW3AzgGyW2ubMujSzChZUcGYjdSJ1voadQNfiwjxU5yWovJD8GeDEExpzyFX1KwvP8qrb84vnxyXXRq5uK",
  "key1": "2RiarNDV2u4izwsAVtMzsbhuJNN39cUtrPcyfU4WdWMTcto5Ud9e4E78zav5zxFvzDBZiQkWtQcCi4P2i9T3MzoA",
  "key2": "7w8EGqbx8msC8iirLtkEUwX5AXBv3HyHZHmzuGL46gktSLE4FFK9ZMcPF13YAnwLhn1ukEFxeUtRcL6t5iVKoV4",
  "key3": "2nJViiEodLsrjFcx5ghi36AKjSnABYCHJ13yHTj1qa4xKhGVY6nZLfRcbCrektYNfcNjwPa6PPvPMErLrHmc2DDR",
  "key4": "445i6EXTXvK5SER9z86bfo9NX3FhgwBYFmmRhPK8BkoHjCpLKQiLzxZZbJDyD252sAYMTP7MtNs5DKEygucF1BtD",
  "key5": "9juncdPU3Xup1et1zMXoZgsggg9Fi4MPU15nifhV9HZv8UFc2SsfPtLtDftBJ4HyVvTULx2DFGFj7hmpooD6S2v",
  "key6": "12Z4j2ooxfVKuH9HVrrH564WyZTUdy3HKfjmMJRk92T9tewaasa5hZJYsVeunZiwa3AiKEzBNuF3aWeh6mGGdK7",
  "key7": "5mik5yWyofaRNV2RRkBRPhWU3FWT7DeDJ2rGLjMBDb14aedtUiyUCJxE4LEJBiPxe1ujCdAhT81FciQn86RHb3Rk",
  "key8": "65bHnGQ84qi94GDsndCvu5vrkw4zAGQr17WMQYjViXCTSYoKduY6jfgTPX6QeG5buhzJSpSZqU9oKJtyDbrXwCj6",
  "key9": "2GHSuv7RZ7udzy7mZBLmYthEwJbXJzPXmFKsCEiR3uup7gjM2UmFTo8MHNsqxQj1fqgdyC5z5hSzUqFDWhGDNaut",
  "key10": "3MDckJUEAJEV1X9BT2agm7rP6bZvHKbUJ2ccDe1PqP7QKde7wrbJxP5SHxTC43xLn8rht7gztEFwNKm8jrWg2GG4",
  "key11": "3UZhX31LimCLaJazFhKjhgK54Wzek9Gr4yz8L3xqbPJjvTwNnf5xjCFQi3vWRtujzCrBiu1VdhCvWUhuDcB5fufw",
  "key12": "4wnuHS3Y5YVxQ5G5CPn5WRNQEoEdY2Xzxt6UAXDCcLf6DdKKx2YgtMjQAhdEC2LAfPMLhxXQkMRBzSK1xYFoV8Er",
  "key13": "36qRBkrh1T2W8YLiYB5CYcwkno3QJMUL56KmgiLbYvaPL9f2CwW7m1zSrGLeBfefLxncdwBKFA9h8CP5TitMXS27",
  "key14": "51Q5sPtGxtimK7EEF3sjmuprstXo15DLr8HUt7raAhUN9vuGHftj9WvWgkKjPWRyd2DmhbLMNYEBy8sR5ExCXTDW",
  "key15": "PFaQZ93atnP6bRpugVvkEwtoKXWRJ9e8BMUoQfjmKZx229xSPL8TQPpRHD7ZTkbScFHqxPb8TTxYogQNLggKyU2",
  "key16": "65AMQJyAczhAwwpy8XUSz4pnhcVcJYK3H3MQrMGJMgzbQDEJxzc2W6i9myWKy74iggrJHRKdPPWCLW7szyqTds32",
  "key17": "2buppN8kGtsBBM6W6yyXyTUgNCWGjXez5ysBNTYQHkBtNnyEbMnrafVSHmVRZtr4jv3L7BNghZ4AbJKkrJ5V8Hc2",
  "key18": "oQcZbprRNJwsUe5qvUjhe5fsguHM1ZZnX3MiqBYV8hVjhgS9doMuT35zvJwejhxJwcvWS3ybYPXt51yGYvUhm8f",
  "key19": "38BF3UGbE8XrEf2J75mKNPFVWLdiwaGJeqo94JdJfKCFZXk8fcm7mr6ifbrfv5qcDJxzGk34BMp9rnjVihRz9f83",
  "key20": "4cG6KBLWS3xRHkNJbSrqSEvKMPQ7Vc2MYuMEpQFpYKhNP2jCdeCZrhUpMJSNuc6H4KZaERsZY1pgnNdYCm2tbg5M",
  "key21": "3V56hWB16v2dEy83pQCXohYE8qPbRBjbsuJpWPtV8j8aHkguX63GGPguUGzou7qmW2FkEz7sGEoTC5HWrXqqbETH",
  "key22": "2cv4gJLh4NumNJddn88mrbDeMtWKNRw5odFchAEGpiuF4FiijHUmnN7XjZjsx83F59guKcrkGQadeQbdsUFPP9mp",
  "key23": "CzzXf55n4FedRwvTuYHc9XgokfNXaTdqZZchAVbQt2kYAECEK1GBRr5kDerjscGsdvAa4FHiWWzGnA2FpPJSgqZ",
  "key24": "39XDYgGnBqRjat164jQwEG8xRSFaru6iY4mSk1XTAcgfTxsmxsaQeghX4pwC21Cfr6LqCe2ZcVNUfShMwDpR7wTo",
  "key25": "5YGkwyVrzMErCSi6thGkQmbj449v8EAxFExApgaEmxAX9LFZShPNL5BmBNRdfUKjRk8NRJa2AAqb34XJW3bQ7DHQ",
  "key26": "3KHf92yZtg3Daq8crhwWp5zsxAsKLoqixzyabU4eRz4my45LwpYRx5WyVhfdjvJXcFzXsUwwT9B73had6eR51eKU",
  "key27": "4jbtBabSiVyxMMDpAvV9n5GCNVTHqBgjt8n76nE9qnZZceaox2Usicn1p5nRnaAGSvpsTqg7ua9ghYtMbFWs7qzz",
  "key28": "3jTi32Th7uZtjhomqzgs5sG1URdwDQnadVaE1dyiVVBV83JWx3vdmQDktm5sxMBp72643tDgMQYSGACz96PcCMdf",
  "key29": "5bpP21dNrue5ohFRRAjzNGD15keEEAtaa3JpWTp1QC1zxvtPEbYjJz3zhHVyQYdLwWzmDjHewG7sBZD86Zu34AJS",
  "key30": "54N9HR39AN2NyerxG6gw2cUC8SXXRCi8PrazHuTbwMLrrmhGYNBGkC4tpoCRiSjs3hT5zadj7aNWyPU3qcEjPQya",
  "key31": "5YDdGULCZo6S5iwsBSSxne73sMHpjqTNcDLxJQgS2KNMXvn9Wyvnt87KmoQe9AjSYujcu74a53pNRJM6mW1Qn8wE",
  "key32": "5jpkpecrJFj1JJxSChgEwX5vgLcccBppnszFKsBjUaRAPQKTauhurSNZBLfbnAuZUszBu71vLMbEiJ4yoCYD7bGC",
  "key33": "S7cFmqFgJNp1DA2yyadTTBZT2pczfBb664sY71csS8DTUezycxPZsaUpx4q5MyPMdWpWkTthjdzvs2XuiFBR4WY"
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
