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
    "2g67eGbwmQXPaafCeCjMAoFkUVjnJbTXvS5mbNgu9gim3cNK4emdLcRxRSGJUJdadosPLH75jWsbdFw7WgtbHc3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WqczPFWiaMcEPQY86WjctvMcnsK6sATQnoS8stZTckJdno3BNmAgWHdj6V2DDzb1tekQ1rkM4TRwHijuzxFbzuT",
  "key1": "3hpHyoVUScqo6KuPe2qdDaQYrGV27YLhmzuPVrx6ynK6haUTdYN5qvVGLL6QRESoy66p85fLWEpx38siGzBD3hE9",
  "key2": "3qu8vzvHPjVSBwi7EHjyoK4bUhXkMEt5cdXnLuDr8iSAGERvYoWPryfpP8tuCN19zSrwg5JNe3gooEmNPhT7iRqs",
  "key3": "467xAFoKAL3rpEvd34EduV1PNm3ryoksybcvDPycqPVDndr8jfJk3maEEBKqZA2cf74DwrVTrHf4SK3TutUoarfe",
  "key4": "5Aip1dLEsrxGaKiKXpsyFdG573ksvAmSzEn9CX4WopEvbS1LRVfxUvb48fr58w7K8mtMVcdPxmhvKi2GDX18xnKf",
  "key5": "4cWMVTJJ8C8ZRTugL2g565yYz1xxJ8CqvMKgrrcaioS9Jj7bgR19xJ3otj7L8VaFLPpMct7JRKYGvHDprMJtnKKU",
  "key6": "3CnpkqeqvfMLuuTWVdL2pn6wFmt7eySH8uHSeKHAzKoZxVqVKHXmnT6Zd4iPAnKXfnttWJExqz8qazQNM17xhf6a",
  "key7": "4xc165D4NaVYq6ixYLdryBjxAem5dT7z9uxiNrBV8MzG6Xj7WpT4D1TwxvrjzLHAjTGzhQch3XvSbkvkvufkne5m",
  "key8": "64Ma6joJkdJAvvaC4AooxhWzwa2esA9hhzMjCpQbcMPeGph12W1xHiaXjekVaXNPgNxoD3LAp9gUHjjnMRHQ5bPz",
  "key9": "44D1mM4NnpnsRCEzt6p7NVELzq5dwDY9DtXwEG8LjA44EcR2nYUQPAzknTtLywmMACNYxBuoyVzBQU5SJe4w3W1M",
  "key10": "2V6m55ybWm25tCfwVa7Gx1VsFN6zSQiT1baMEf9rKZvZq61iMA6mq7N1XKYQrspYBGWLNkrMMC8EfTj23zd8iD9H",
  "key11": "2Xiy6kh1P6kmeLVXXcW6uYFsRAcHgTHtn1VsCz14heBb5pzhRotHBY56N7KyTxm7ZH6LnmgETDs6PzgMytrTtmYW",
  "key12": "2vNJk2yo597Ca3RGukTCMQeS5tjMXA3acFVJDKAix5SMng7V47d7c6qtvrGqtRbDomtpmfhN3DZTC7DaeLX1RhvD",
  "key13": "3fhxVqXdCEhRV3s3NwZma8W5o3JdEsKB6D7uXzqgYansfeptMcHuGVmngFNmortd2aRwXBqtFamqSmS9oMapUyL2",
  "key14": "36nDPhQMJZ9VkX1U9ZPqsCLwNHpW41VxsMHP9zwbG7TW7QScHdKf675ow2zbJd7qmtKiCWroevhZrynkveBDFB5v",
  "key15": "5bvMeruPnTtNgMMUj9Znff3Cy3NpkgK2gK4USHxqCVMT7zZzW8jHnvbcvcTaKCQAHWyUwHL3xa2vLs844tnaU95o",
  "key16": "3B3aDHMRZmNMNY91qNQqGjK8nyCJCsnk3DzYUc77WVjDhGnUgubZCzWiP3w3NdhfVEJLMZeuFrfZLP96J2FqJsrP",
  "key17": "5vaeL1vzvDChbhqQMNt9X4F2dwShS7hsht5593QDyewp3u5e1muNUVKNrGBhj8GVVqKJCn65D8VgKmTpqG2hS3Gc",
  "key18": "3Tv7F1Zaxs5RD7n2amU4qRNHU4b1wSzwfD9uqVUNKCYdRuvMspkGo9iWKkHPLyncNN2G7cHzBBm2ZzJyXZ1GMtvh",
  "key19": "2nmGndoVfqxqik7e9WyaqZtQY3CDHgmdLbXaFmTKicUYjz5cAJp8mtta5JYhDoPWiJNPoPhcBJXJ7HppLHSJBKb3",
  "key20": "5hkgTqkUzgaPMViPCvFn4HmgByKPvzz3j65wZ1G654YTP4AaUBatHFGsrjVKmsoNvUhTtRbcauh7fMk6tVxeH9aD",
  "key21": "66E5exoQJSgyeYf2xx98A2Zga1i3Pjw9UGVrYUUgFU9FYnKLyp6sXG9oNttdzzsqLUBaHD12UjeTzpfSaUSRn6wE",
  "key22": "4uPcKGkv7a1DiD1gLtryS1Z75a7aQJpJs61jyPAzEnQgZYcyrrTNP6r7bX7nzHaKQZZjSDHyuv6XH2ndqV5KzyUn",
  "key23": "4M3CqpYM5Sn8oLD3RuFVdN8TfZJ6RTYgM2uy183KuTTLP1RTtML2V3jvQGvBsbY8ExKNFZphLMfysAK9MyNhCj9D",
  "key24": "39vmMEwtiEY1ni29VRgo9tWUU9V9ptoQxbbZKzizXNaMX5vtqCaxWX9BfpgtSo67VufCoHSYduz74aYB2J1ppLe5",
  "key25": "4ujznszygvmuEnVDh3epUknPY7KVDFnr48mdz2W1eWCMJvuMjFVzJ1TwRTjoKxkhujFKaP18WNUacq1TyUdafNu9"
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
