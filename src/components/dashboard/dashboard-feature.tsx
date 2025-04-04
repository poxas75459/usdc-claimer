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
    "3NM7dSsj2nMFrXmWkzUedzuK5sQrNRQiTbt7Ea2jDxZWC7ZUbKKUmAjaPKoiBujFaC3hmZR3Sk6eaAeh5gt3HUCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6Y9BUYtzGqpgSSevauPhZ7W1Sc2ro3Xo73MVELDV9YSxttj6Rh1YcLJBcYFaJHf2MaLiudNw8J9Z6nvTJvNKPG",
  "key1": "4HvoztqVGvKo3vvUst3DhcauvvUutuKHkDFsRnkWW2xuBoN9kRfpKsFFZLbiLJMsAyoVmENn45DkCTkeCbPnP4ta",
  "key2": "5Degm7fdTmr13oWkff8F54RXKxNG4kjA3wGnwhgNH3j3JbVQ7aherTsjm8U7WkrddNh5gWjh9Pb68w2AQSdUm7FZ",
  "key3": "54deL4TN9uryVoaZGPyPRBmhEutFpQ1LuyeEJoJsBZFzq4EWQmMmE8RNbMSe2frHCv1y8GRmqtzeuwZUNfEDxa5N",
  "key4": "eh4C7mtiNqghZk9cYawhTDPHYTo2RQHyFtzNhMsvKMyme41iMgFzxBjCwDH1Ch1tpnfMegGvzQ2H71DZ2BjEkk3",
  "key5": "52g69SLbsPCP1rvfi2an3nnGqNk4KjL7ia3svoFgutjXQJyx7CAUv1g1xYU34cjSUX8GS3hRsHckxMUk8DJCCbJq",
  "key6": "2T6YMZnjQpJvZ6Q1nhUWnaxJVaRZ9qEpSJkkrXqP3rS3eKbb5ivfc7WmdTG1VHmpZVrfqs4yAZ3icXKASKCM4ATq",
  "key7": "57CWYK7Uewa56HXgSj6E7EKGgZcBo2vcNMtEwrrgxNXTWT2TeZJ5ATfvuoVEhK6vdfMQ2KEgF77PggUvC8iXRt5X",
  "key8": "3N41j3HeprJQV5NjZc5SY3qNhzkbkNNbn4puyHPa9GgoTHeZbcDokV85rgcjKwn8RgQmB1SfsbXqFsfgHHeExspg",
  "key9": "5UUnxz6Fp4uakvsX7NyvvjyyivZr9eHShasQMJr82WYAcgKV4CoY63PGiRcMdNt6oViYamZ59JdEoBqPsZftqxNx",
  "key10": "5htNZWMXbQJpr2c7A8zSeyid27FVjyHqDmSY7BCw1chJMknQ5ARiqRKrsgvDddNNSxCFzkD1Z1hB7mR3fAfV8hKi",
  "key11": "47K9z5YvfPpX4kF3GWEy5T1BNU8Y9kF1kDJaoV9W9ukSrTEpYqJ3Y4YjA2F8rbmm9QEGr7MUB2Vodc5skupgvfqF",
  "key12": "2SQEGSdo2rrb7X1cA7hGpL12sT3EpHkf741hESCyyMXwiLZa9GAjJB623bEVrqRDGg9dU12bkQakiQ7wbeonccvj",
  "key13": "2BnrWMwDWiR4pLCoqyGZPoAKAh7y7XNZGwgbQw72ofNtHuBFEbHy1c5QK4RWV7vW2EwqA19ZrYeqXvmGBP4YyNvj",
  "key14": "4ENTN3rdq5JbCBgGdqN7jxhSQ7s8g9QqDEAqvWTae8ZFGDm3VfNeGfWuijvzJFM1fcxSUsacvfAegvouk6CXjteZ",
  "key15": "xyWPgposNkPdRtL5BPrPpZuQMXMKVJz2UF19b8FXc5gKaGkzuhHJU22DPx7DTSqAiJhP8CHzc8Shv5xUxPMsFrC",
  "key16": "3eTboUd6msnz98rkK4Hi2oAhpW8M76c3Zn1LXubXfR6vU89R6QZRVK7Ci3tFBxbPoSZuoeugBfgA5TjotFMP4yFd",
  "key17": "67BdAbUyMfokkLfQQAiCJWcHZnaNK95C8gi98utnMkdf3UA5CVLtwsyEhTdD4WMUdTB5imGkJynTNXwqBifPwKs9",
  "key18": "39bdH8E2tJDJyvqVMZyCNqdNU3xnYQ6QSFx8PLp9hdo3KV1RRGyyrFeSv6PzMhyhAqLiMiyso5ucgLyo9ZgXbysw",
  "key19": "H9Y5JKkAjvciJntyBXPgRUQ8bwzVbWrwKJJbpGuie6iGnJdnbmECe81MRzf1SetckaACcUL9P7TPeTcHck5c5Xs",
  "key20": "3jEuCtzu9Ti4spRuzpt5GxrrSqoMotQgrgBJzqQtMUBXZnqieJ9MJDKtSnyn8bfY3eZtyWVKZjgVhyqTk46bAMKd",
  "key21": "3omdWfUAJdkQ4Zr91tDdmNakmW7cDFMt2K8jRGBX8eLme7ojmNDeWJZMSDyKCxgvjHYdKzWhqmzh6xBqFwUAefie",
  "key22": "44begFnW9KquNimWcQQuZA5qrypim13e8AkHbLH6GdqxsvJcB9jnvHvTACehYKzuUQ3mLDDZnzjHP3dUqVoGkUGm",
  "key23": "9zWABhvDEnH9oxh37coPGDvHUDbHur4mVYuz9w1iLku47GUuv68LhWEzcT1aGC7cKvvUpi3kNNQGQHGyDmRB4VS",
  "key24": "38TQXvgmUoVogm1FYygT3JKfLLeDNk9vC6CNdYhejrfMsHCth45EP8NSafCQ6qfLbUbE6oCMJtc81LfuALuGgSKo",
  "key25": "5Wi7t23YJuTWLw2hPci9HJ7YdTbDZZyBHfTkKmoa2DThUz6zMkdDiB2Qnm9DziSez1UA7yspLjMBefSjhKXUtau7",
  "key26": "9j9M5Mm6jPjxB2NYSncUtcsN4dVpKZD3VcNRGkAH964LepgX5kb4odpiXz5mgpw5Xx8fan5eNmCyTuqeKn2xPaT",
  "key27": "2ZPzTJEEjdbaKypE4EMRzgmNyk24rJJP74M1BMssmGi7rptTYG62WJ7YQwkmRFm9mNHCKvgwGtEDiMGE7HFHd1ig",
  "key28": "65G5ZaK3bk3VuuBXaKgYAcgnZ2PGEk6GUCj8BgkUkGPj3GLa9o3NZLKs5UFNx727DN6uWHi4tZZRZr4ZWPLABLn2",
  "key29": "5TWw9a8yFivzAoPGVU9go4izLqFHdC7rASsF1Pat4JdnNaYY2Hv2MBMb1eM9CFuQjtGhUtpCnXy1rcyABawLV64Q",
  "key30": "22VgA4BTS6VTQXiz2ymkP4ryUbpeKNjEfhQqF8LFUPDASSWcuiqaHFNwQKNJKJ1JV8yRgf7Lg4tyDy5nPVykYU6h",
  "key31": "3Ze9eDvLquDKJyRYgVqmGsZM1AVfe7u4ncVrBbuySeym4hT6yNt4PiYcZSdyxHPPNVLuhp6n8P93kQVvzujbhwoM",
  "key32": "2iYXwys9za2BkhqfEkZ8X21ratPr6WDAYo2kGL4Gv3unZ3wzEgYhQe4fWho3qFcNcQm3SenXrTpLiKWFpRFWJ9My",
  "key33": "31tYbgYuau8fXWrs9boTMtTPj9nvQExYjjDzbG6DQGmPvgcK8DXw3gobesQ3Qu2dK9KBKXMBfFTw27LzMCaKBUAY",
  "key34": "4GZEJZzPnicD1xyRC3r5ZbtdNVjzh78J1LhTqJYjnnjwLdTTXAPiUigaQY4zyvM1DwaDprvfdGVG1ishMCz6FoBn",
  "key35": "3r6WqSyPd8QGsJNZo7RJ1StyHM1zmGQe6sbwvraGANKsrRhZ7JwLdiW5Pzw2pZa2Uc69jHecxmxRJK3AZD2syi4z",
  "key36": "2CKuvpuTc42P39e2Zh4cC9FCv8rtESXAMKTerk8n7hRsRVKLFfPeHNdLPBaLTmhC3cLjiL7u9Y6nWExueL1Q3DgH",
  "key37": "33t8nX6Y8Kavismy9vkE21j1yKrFLhw2nAZkvJzC6GsUyXoMNgfMa6N4DVP4HRkdQep8pBL8aDR1QVDhR6EMAE8Z"
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
