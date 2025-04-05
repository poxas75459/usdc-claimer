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
    "uHWuX7P4WrtQefhzEkbscXz8Urnu7xqheedZGJu1bgTA7QR43SUEhMUu8jiP5TmDqLvovMwiv8ktygRgHBdivfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yyZmo4DRdDDEQ7kTtA5Z4WekVXFxTDhjSfUaDwy7TgA8k9EHT6Z6sejLYxekdWCREcGHAy4HtJrcoYZyMypFoE",
  "key1": "2GcUZYzaf5Q7jXzisMukxZGcJqQesgzvvjgSaqeQ4Qpgb76hNPM4LqWdnqausDPPakKZmpwzyBa2aWhgHfW7uvur",
  "key2": "4KM5JKBJRBs7LB2ifVx2sMX1xdTz9ygBUjuRbsEieoHkRjTK2tnBber6XkxVKbVaN8rYgxLYwf4M5CZgR2y6fnpZ",
  "key3": "357H4fX6DsBCHH7VVgigNsbeLwMPYaMkjUMKeRh98BQp1z9DgB6SBFN2xSaTDwLLeR9qfFhdLAC1nW7JENNcgtRp",
  "key4": "gTYcPangdukCgPirxFE2sJbfji5jBeL84wBfmLVNkmtEqbXSvQp9adXGKTC8iAQJnPVrzfwbVi4YLLWmv5NDV4F",
  "key5": "3zGipSBBWvBX36NwfJQtTR6jmsF24YJ8mFU94hHM1dJq5fw8B2eLiHEdqpyoT6X9Kof7m4rtVzi6thGZjqmxyqNo",
  "key6": "v8QAE4iBcJNauavk3eGNULH4EoRhrxgALST3bkic4KQVQM7RdzvNKMzJAnMJqMhWPZpGPR8JUHyQ4S259woULX3",
  "key7": "zttQD6q9w7Y8zgDh6NaJxTcatrF1gBkGJ1hDnAcXQvSSuUJ19U9Wdcv1D6FNTT9izZ2LbKAdag5wvzZ77uyHbE7",
  "key8": "5ampvVez64CTEbm7eE8ynhk681iqSuCjm4zKce7LCstYECNdAt2EgHDzvso3Mi95wQWZNuKAEEMgf66BCwu5bJiS",
  "key9": "FoEmpNaEpxdPVN2J4uYAs3ZAecZLztuVzHsy2M2wXNcrY14fbELJ6jqjVqwRwanXGn71rRQm7HCWr5B1GbsV9s8",
  "key10": "5vezxPo6DRgBwG98jDVJjaqKV7oVjUjc7yD7vBF5V9PKd6HXUAp68x29FzAUJNgJ3YAZ93hs4vzudA2EY5QKfeEU",
  "key11": "4EsMebhy6EuWjm45DJXGVff9mgGoiL13MW1ARRit2u5Ktkxvt1ZKm8wuoq7UEZwtUY9cxwJ5nYABgZASE9vw5JQu",
  "key12": "4Ahx3YXpojzd4HpufBfmmPNCV15Nnca8WTraNnkXUhoD9DRgudgqr654oF9iq7BhytTGLzmjFgpgCo6DoGAHHEH",
  "key13": "64SFMk9RX8SU85LviVZATcWiGzNznY72NexwzbiRxUCfz82ZExwADdQ3zt1hcLX4VAwpzd7Dfx5xUpeVQ9s9Ejyr",
  "key14": "2x7BJ7umwE16cyPiD9buG3mqvCjqvzQcSLPLHwadcZvCqbfmQrLGuLBLxGkYyhWEGYc4LcDebXGjevsCFnTWA2GF",
  "key15": "4yckuLBbFgcJFeBmjYZA8vt8xnZPasKMKa6y7VgbbJvNMBtqdY3CbbgzuFSoVjxYstJx6jUjUieaByuqu83NB3qC",
  "key16": "xWRk4a6FG14hqesLt6wK8cZRUhaCFbkDYJ7JVd6tv9HGhoTQsLGDt3FxD5eYuJCMEToHsnjNDGFJ4X2QRQMhDQ9",
  "key17": "6Lorxr5jkx8fRwwFk1LkoK1wc3GbTKAGB7TT1gVjZNswNBdJwbWtofqmcSXhYspQsWQYFYFaQccBLXy8pLRE9fG",
  "key18": "4F4RAZi2UFZYz2GkyQamYGuGycmNHYtK8d1XPNtvZYVKk9GC4gVW7gHrY9wGYEVib24MMJ8hdCsvvvL7K7nzcbXf",
  "key19": "5b4RtP9rnDKC33EcABm7dNf3MthDHeQCcd4hEbDHMUnZH95ACTJ8c19mxrPgeXGFahbsU9k8WR1fKSEqnwcX1wFH",
  "key20": "2XCD1hDsv68wUddNPxjHSyyTNCC5zWejZQRECM4hj5iTDXE83pgRW7UKHJ66p9Mvjf4M3c2EtDLet4nkjERHizgc",
  "key21": "4jekoKH5JLxgBemAUw2NMQyovLMhYCRMoy9i1fiZPoJ77XSd9Rmg5c1e7RkRY7SHeRVSyBwwvc4KyLYH8vM5G73F",
  "key22": "5ViiHqryNUoj4iSY3G8nNtuU9cPTtHW5BLWsi68eanfcLR1ea3nZvZwLABPNS6csDfxux6W6dcgqUjbmEt8XKxML",
  "key23": "2fTwK5n8eiWw7z1zZ5UNBkFtkK7dEqNY4QY5HPFzv7rdVYDCs7rkTiFMLsYP7C4XQYHzvZmXiztn1os7hwAFHwnq",
  "key24": "5geYZjQm6gYLpU6RtueyuTN6LQH17PmGCaKnErubrxo1HoLzCvjf1Exo2AtscF4YJYpALzJtbqHGFLc1CrcZc2Uy",
  "key25": "3JEoNUEvhai8due25AVVuYPBdB7ormbzbcCpXj1giB3b9dmPvARDDDWtfZZK6ECHTX8C54qC7KTSsQBFMoB8v4ez",
  "key26": "Kf3H3vMPKe8zGRsNrZHshv9a5jYUfVtmfv94oD392ygKvN1aVE2PhCJXEFBEKbnMenx92ShQFhe3MrmENX756za",
  "key27": "2ZBcoxvFmATmXKjpEpcTz6nmw3mjHgJoy7wRpZJWTyDRg4nd4QCXJpfAKr2QU1QeQCHxB3aZeTc88m9PYi9ff8k2",
  "key28": "3cG152tdurhpLevXaXTSohuQgDZPdqNyb2s9SHqJBR9g41nqNhP2U51twSdJQoJSYJyCwhMPSGXtrb12CWyNz5fF",
  "key29": "2W8LujfHKYTy3WTxetLXp3MXMtkSjx4JCU8mbebaSZ8bNUtb2W1S2uPmzD7nQsAkMrSfMpUYg3oagQ7eK2UYMxKg",
  "key30": "5RfgLx39M5emoYdjYsEJ4FrU4NpfqCXF3JPHWeLd4oqxPAxsGSYHjbNtkrPJY9tw8V1tgozqJUJ76nZQT8FuW2wk",
  "key31": "5usWQrvGuD8kviPStdoAUTgGrz2sMcQATMowkaxfogyJ5mrQu2edizaoPGzKKbBhCoMJNuCyhQPBZWF6YDQvjvio",
  "key32": "3BRAZmi1kPdxijPvZ6K68BaSwthrvgwUjnBhmXcVezisQVhe8bwkXhfQPvWcCdK1RX6SjyHdn35Ni9SfRdFD75BS",
  "key33": "58h6vqwp9skDgTY7Zen3s6x3pWEVJk4EKwRThpe1GJAqtkAVJGDKkAtkNwN3y3orkgDk3tdzqjybVEww1WBFLPNE",
  "key34": "5G8hrpsEGaBPT3TkniSQPCvyNQwNgyyTYf2REW6EFHV2YqjNr437QLN1rLs2DPsVq5qwm2RGpRq7JrF7AU5EqG3F"
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
