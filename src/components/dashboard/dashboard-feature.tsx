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
    "3Z8KrK82GU7udB8CsScKN1dAacvTb1uQVVCiAqj8hdw3ENCP1mRSFWYT9xzE1aQdwW3GBSdYzu1CKb2Nn7Pnkmci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dRfaZzVJWDftWsNbMdeaPJLKKaup6eqdmaga99Nrb1PB1Ab8RdFczSZaR6THf6fqcFfxJgtRS6cSs4kauGNt7w",
  "key1": "31ogyMdBwE772TSKwbLNvrKuP6PjWFmMFwP5xMFdjMJJ5quu99KpUfxrMhXg5RSRufb3EXFWD2eASnm55QKjGNbu",
  "key2": "3ZcqyZxdKftdJqFCCeJyv59d1CUhXFQRz66Q8XBMzyhJxJpkvPYCnpK2d3gRC21LxHNXwvU79yUnEq9MB1QquK5P",
  "key3": "4Hd15TcLbPtf9vPqxXEyWhw5phZbMpwbM5kWzyuYZMizLNtkCzRqxJgvG4bu8cYnwSDVUbiNCciLUqCTqQgCgCk1",
  "key4": "5t5TbbnvJWLxKNo8bYzLph5cVHJPoX6nFEQdkknGGUDcih6LScigZsy84MwGx7BXzvLCNmbvKtXCckMPA1HsSg6q",
  "key5": "5JcSAT6T4fyxNjGjTU1ihDKHrMQRBCTtV9EVNquHkUMFgcUF7Lk6mmhAADq7vatFcsimAUmN1fQHq94pzefa8LiA",
  "key6": "fyaaFXJWyYj3QgvSZrAG1qrHsZxNyLCfZHSdeg6dpcLuMfZR3XuzyN5K27po7qBpsc8FBZ1tXmqxeKto9f2fdRY",
  "key7": "3gbtADWej2JT4tzEi92Zre1vZvqMDECbun22n2sAyeTJssbZKFHagzhPaHVVcwLCcrbVsTaZGJrCfvQkBsAMDcjD",
  "key8": "23PLmWMHmEUmzMJBU3DtHyjMyDjnKkWHFW7V6HWvzUoZGGMrmEj7eMExRiQgEGjB4mguuHfRfaCP5f18Aqh5Vg4M",
  "key9": "zNe6wtqfFnbYN3zqeJ56jVDpPuxox57WFLoHN9XEk4panxJ8bhsDz5Ha8toSqaM717SdUE3RrjkEuCocEHY9sxZ",
  "key10": "54eBQ4kVT5Ui1k7C2Qe1vSDr5Y4YJYU74nym9NiRLdfPwA6Z6rZgAXPaSt9k8DwjqMFhADEYnpoCet61KrRVgx7e",
  "key11": "5vNRRJZCcovNKwSjeC2oJFAkbSvcCchMvEG3bczQuwaXG7VfNfUiwLepwF8oXSs3qbpe9jmLaNvjx3AkzSHT68gY",
  "key12": "3JLt8GcUAfpyjGxZcSFSt6ohaYRitSKu2AzGYc4rjHMQ9sMv6NQ4evK6RcraPNvN1pZAvCcUqH5mnof8J6LiFCZQ",
  "key13": "57UVQxYzHqoQSgtAsCtPZbRG7H5ytQnGtiaBCHTuiuogbkTaJvoXp7ddcj5DcMdEwfR1JKK3KJre7SnRZVzGNLNm",
  "key14": "57B7B1QaKT7YUZSE1WKmb6ttX8YqezYCZMR34saCJCubZXQDH6f5Dye2AAmaUPMUZt8BNBhb34nmF8aiuV3PtRE7",
  "key15": "RnoPU8VjCePaPbNxDDsTFXVXTyzrGRvk9c2D5KAJb3aypDcoGvEK5TKMJM4RafDDYYPRN9uVDnka42yWwGGjR8P",
  "key16": "2tn4VUE5Uhhf9QbZLZnWh2uW5SMedCPofyfR145WY3ex84L2ALoThYs59J3ab4CnPByHS2MNwzv58kia9Zv7fc4f",
  "key17": "bC42f9PhMzr4oDmPm66RwBDn6eiVskKDnw8ejkbaNYrYtzftuvsCJd2AWYPKeQhtX5emgKowoYKoLW5NNHToh1M",
  "key18": "3YEnDvxZfpf6gPYpi7xFVuBLYeEN1qFz1ysjosPgyKLNo2zj2vNfbbttbWe3qahVNGKFo4A6eGhQv5vWStrFqbUk",
  "key19": "3tQLtAM7kBVy2dhxpDUSJ7kx2rotvSmPm2smyJEMAYqqcXCLo16L69HtY1qR6axi4huRjMp2UJ119auhxpm3jtVb",
  "key20": "4xBSKeKXKP7u25iqA5ur9H7CdCmFqpuHSRj1vpneqzG6NZ8PRVnbVxVKUdquuE3w5UNWe6k937e56Q52fZVRofz4",
  "key21": "3J34C1y9KiqxWeMHBfmiG9xy5KonndezPZBv5ggwavgvCEorjCi4zGkqnpoCDD16RYAEADiy8Y899D4KCgBe9snT",
  "key22": "41vU35sDSuM13mVfHgkrwnFXuiJuCnwDRMnGZeuGVvK17eB7ZwWMMNeh6t7jGsVzzKL1LP1SCoXDu93LrZUaq9pJ",
  "key23": "5q1ukym8bTxTVgkyXGtiQcLEAfcF7gb2Uvmn2NmyBpKdANX9xWwxdoriSiWdgHYRD6g7pxswfmZJyuYBa5WjgTG3",
  "key24": "5S4aqc78nhQjJHxG3EuWVrQ9dFuLWANk1FMsseCb97GVHxfBbPxyBzNwXs8h4jgVg7RXj1AFVeDxzmTLt5xw9uZ2",
  "key25": "5GWxhW3Q9AfHqC5t2i7orr3PqqsKQNqJXfuceoVPF65TD5VtKRjYyTSJck2uVa8cpS78cr8EgDD7gy9WjR6EJssZ",
  "key26": "3E24S61se1bZpDnLku8m61TtMGWFwEA3hu8Wj2RmbSWo3kj1uuRCiJFmvUB5eDBjWUPWh8wtpNH5oaerGRbrtJML",
  "key27": "2m3cnGTKBD9JwbjdrCsjWcmyNPKkmpDtzrXRw84wG9qoMkjLCdUvEKyNcZtFKB5WJ6rqMCVooGFeDAhmfTeUmqEi",
  "key28": "V31P6oBQu7H9azog8dP6wD5LVWKCrDkaGmcUsXf695HSv8iAUsKP3VuS4t1DXWej8micdQM2w3TH4Co773LQ2X8",
  "key29": "4EyKU8iPm6eWEkEzdQToEGf5c2Yr6YprpMNP7wE8J8fmAAD2KbvcoPtCUy7zwCggPj9Bvj5F8EczXgmiag9DZ11v",
  "key30": "3ur6vSFfZcTrQE3UHYhn1ZwV1BSdetPWmWZneqi63sMMDvscFi82T9g1a2Cn4B6xRbhL4vK6rWm1TBogcmTaREHe",
  "key31": "3oeveYwFQU31ZHHyzW3toyKmZMCZYhxUECxveRdVyLLqEf7H282B6ashyWE1BjtWvnr15s58ed7zER9wu7ieFuM",
  "key32": "SFejV4LMV5Z5MArrVd3ZSFWtaLSmxs4fYQYtinNJLsgPZQJE6JeFhYR3j1NLAPEinzQdLwPFjNwJoSFvdV4tTU2",
  "key33": "HKcbvQ4JHGMKLij4HHeet65hwBcBVZfgxJEjVP6QKCWxogU5f3SoUou9FrkgCLZ73gQFXEsbYGRcxXmqrr6axwk",
  "key34": "5j4W9Rh9PTnnuJAW9LJXghvWGVVPr9W8hQqNQz6sZYW3Yak7BVFfSgfqjrxKAEgtPNWvmY4Lw6ppgbWfGR3K8Kd4",
  "key35": "4U7B2JrdaNuChtoCMNfZJesckDnHxABFdYWfxLpSc7DgZv3uYvzo5XHm9EQgwocTkUMmAaenjN3pc17ighz5pJRp",
  "key36": "2aUKTuB2KcZsq21ZrTRr3tonJnLz8nsXsuJZCM73yt2oSTgeDthhBRYQ2hKmxZCWfjNAqzs7d5UhzXNYiWmdymZY",
  "key37": "phZLAiC5cEQkVn8hFXedh1RSmGJr1gXJdiE9Z4NtoqGbXZi9Su4yFahMafS7cv1ehkSK9nqKkJ8KgmnTgzmjM4p",
  "key38": "5KJaq6FqrmCG37a2tiQSqcBYbTRyoEhQjSAhXvaKApig8CUTsNQtAhqEedmzSNfjjhrnJxCrgyUjCtN8sucXFuGb",
  "key39": "5CjFGxexvNEW7PMxUUgJbeaxmSg6safCQToQtfDGv1q6mY6ePcKNTfVAhw8dMDadtQw15Kg7GpQFG6Cy8qZMSWgu",
  "key40": "5BbjoSSvTK3Ha61uKzo3ig43VKpdtZAfuhyKQd9PCQEcBWdrWp4rTGHgbMxVfATo4aeTjKpYpciLFTxBa1gJyJnn",
  "key41": "2Dbj92YqrhN1nGZCv9BSCSa9MSY81W7ZqBr1ze93yGEtvgTcbBVSzNsScEaW14YAU1zZcJJib11gjLQANXP3A8pf",
  "key42": "5x34UdQdwpS14roP5fL9M5XfAUZsy83jt81wQ22xrRHd3f5ri9c9gXSuKZD7BDgpPGR3E46XFi5dKVj54tfJ6g5g",
  "key43": "2DxYgj81BQ6JPrRbRSFvgje1JL2YzdjJ3MCxedX5C4Xiy2ZWuFEKdhXJmnXkMqcvfX4pMTHGN7mcS6PfDFf3YExt"
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
