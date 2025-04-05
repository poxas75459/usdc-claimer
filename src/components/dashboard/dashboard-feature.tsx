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
    "3yEcQWpCAFFFbXMo2rQDJVpwfUuKHB6Pi2ekQcu1JwEgdfApgcViuZUGA3XxNWnBc2S937o7Lb3JCEnS5JtrVC5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42iLuyFupUeVVQUg94XrtkbYwgSaJkPxJGHuZhZ5aJHt3uEmYKzWVCnXbc81P1ssMYKm2iEZoYiEZgLCz7P7mESz",
  "key1": "qD52XZD8NSKtHaKxznZutKi4fzTRSHB63FTRqZ71xEArJzZoNJbVB5mzw7QerKGHh9RFYE76c5kLNeETrB2fJQW",
  "key2": "2DnCSpbTBtDxjiBxQ2YuYDzbAGFajofhXG7dRmRewWuU4RY2UfvYgRqBH6Q7hRjzVnMSVv2C38nVqNbU5F9UwTBM",
  "key3": "4YxmfjE9gm2vj7uA5htXdFgr5ub83oq3r3SbpWUcL1Uh46hZEZ79kepDSq45NYd1bqwQ5hi5n1UqnR9GaGHXSNUz",
  "key4": "xv6jTUCCceuXUSGJwKWYa5EZfEo7MMy86C1ihP3PfW32BXsx8ZGUB6LGGRkwU4bTKDna1fzYVqBpKBP3sf7h9Jq",
  "key5": "11CLBXBrzKToG1nyeDHC9hrpqHBA2JD2ECWJtckZQAfpDytYt52E3NHWKqWpVrUA56sQKMUidtTPxaZ47eiz6qC",
  "key6": "SVY4pfmEm9rT6s4irqD7nzo1o6P1Z3FoXDNzPtgaoKXrKfwaGSPunmvrQso64qHBHmTS9AXA82g8n8tfcpZVDWL",
  "key7": "4PC9P7RkiN11XxxXQXPXrW2TnYxgnR8MWG4JGFrcYjxXJ2zJMGXrc8oPARZ7RoVaLFw6gZzKdwsAcD9e9uKCeBnm",
  "key8": "MtAHF2LMyekG26sYHWh36Ttqb4vnBRqMgWGhNhTc4eKscAgeWBkrfCEtpHCBp4UW5rhrwSL7y8GGXZuTxW1vxAa",
  "key9": "2dxn3bYrz1bBMJQNCnrbjvoURaXKzTjJ57fyu2gzCZjTxh8EEw64UmbFq7J4QtdfoecBR3t2a9Yyrp4Usw8LZzKk",
  "key10": "2Wr3Tg6FaCbBxyMNWdYQNCPSEsDf2azx1LcLXY2bjgXQu8h81KvPPw4dGyBhmmZLPLpcvDgeNyzNC5NBSSgnTxtj",
  "key11": "5XcU3xuVLpk7k1nRsLjYEqy1ALwTbimQ34182NR6YJwcN172NutPxu7o7jrB85PMt6ev7vR4HQcAkUa62W9r7H5N",
  "key12": "4kh1PCguLhuQs9ne5Bf7k2b3f6jediAHxG4LpmQp9iRbskS9bqzz5A2b86VW3X7wYHWQ4FgFPpMk6xhb5Q8vukNR",
  "key13": "26tLwxFisC4c4Y19Vv6371T2P1zvLdBnvGKmhtNBT2JRs6XY6VQrEd4xuykF18xdVwd3hgUCtoLuJRgpVk88aNFd",
  "key14": "3DoYFXVKnQGeWDs7rJEphac6SJEfTJuvy1zH16FSbCwk6e4DnGzE1H8J2R3Tu8JUN9MWXNhfYjtPgedXx7oEzrN8",
  "key15": "4cSAMoGiruPtBuZN8QBi59jcbGA9QZL9gAGZBNk8vCF4t9wCU3ixLkcTLzEhWejsK1dYtJxikBdVWUZg8KoVD3p2",
  "key16": "2eb3qQQuMvdDeo55Bmxaf9DbBetitYQNF1HvFFz794DhhS6jd6rSpL8m4ybnbEdhuuv1zRtXrQLg2W9J8JEJwGL7",
  "key17": "7AKGcEesgjDdstMBzuyi5jSPFZ7ZL4wRqqHh7tq2znpKZ8S6nUNYm4ZuAQvN4gSxN1bdDZLE1yzXp4krsJRaKdM",
  "key18": "64yiHVYGeSVpXHrW5LumdcZymUbno5NZHSxagkNhXF3CvdE7jkvHD5RLJe9Tfj4BsU1e129ciaRC3uEV6irPUU33",
  "key19": "44T5Y6MNJZgtZCjifrNwvbRu6dj7G5FzVuDQ5eEEJuiHJb648FX3J1ra1K7m7pVxQcKcSF1KH3kZDJyBkhfbDZEG",
  "key20": "YrZ8ci6NQQuCXhFqRcR1qJ6DE6yxMYGppo4WBKQFpqmfSzCRpxZUxQmEa8S5FkYj2s8tfkRJiTsiqgzUyUrg7Za",
  "key21": "4qGL52cCcdAcxvFND58dibss2D5mRSbxzBLosnE6cYhMgqV6WwRvtQn28gHTRPb6hUrK1A9YWxbkXJ4wjGweuuUA",
  "key22": "bhjMuRqHipWoDT63e6e3LjDs6oT9muJdemBBZUt8erm1RYcshxnzYQJarx2kPDLkex3Rht8wh1HR2zgwzfMy8NY",
  "key23": "3qH1VqimUtGFb3eNiGEyPDX5TFJ7tnHSBghnGnusP6zjQX7CQRKaZiqXMZG27BXqcmNg3uNfrR2GkT6PGmc495yv",
  "key24": "5KyXCbFE9j8zyXpTTttHDGo368i7eGvg3c8jM84yjoik7DvKtJvuHwpRAxVM7JEDcMmihCqCxxYTrUAuVbLVV7cd",
  "key25": "2fwmoRDtPKYUqAvpze2ZKfK88wFMzTAZqbNJjbns83NAZTm5JGdDUFKgJiHaYsy5kLfpvengYNGyU7GnFW8kn5tQ",
  "key26": "QnKeXMqRX97zAhSEA2NNL3QnheLh9AGCEBhR5Sicii8V8gG9MVajewZg2JVdP8RzUJKVyPKPnajbmM29FU9zoae",
  "key27": "38i351Ws7VNVFvvbPWroQjPYNAb5tUcQJ9vcYqdhtjRKLjNJ6fsHaDW12Q9hNpoYqa9fLfNVFnjXXJrcrjiWpCcR",
  "key28": "39YZYvw8de8LjfTc9tQ4PfWFWe2CyLCCWhLZeYEqPummjVoENduHQcRXspc6hVU7sXiJHXkocMj8ZVrkGdw9m7cg",
  "key29": "539EjSDkdvKgtspAr7AuxZZoYNr21GhKULnoSBEMLmAr9z89amJKj4RaTyvRPC7xLzcRdMFxtAFtycZGk2fMmNnB",
  "key30": "5bowziZF4bTdCiURjcxV7CqeHbywZwcd66bLLpzWHpX8XpveaakuHASt7aPvPphuERMYEwEenPGcEywknZKZYgdT",
  "key31": "2KFQ3ooHyHijVgL8STPddYuTVqpxcbfhL94npupFP8fsrxhNCrpghYvZh5J8K6R1f28Ffp8uxPbeYbmK2zkPZZ4F",
  "key32": "5xqE4bgMeN554mEyxRK7q1ZWsdBLjNBR9goQh35owZNWAEWk7MoJ7yTuv8e7H4ZxAHM2FcTtkmTHbMVoSbKcQ78U",
  "key33": "4pPr7LkKP5ki1R2hEkHGVxiRdQXtWnzzbDYSUAiR4XhUC3t4oNqJhTLmvxbQx1vkCkT8esKD8mKSSDVmxcHPLMm8",
  "key34": "3nf5Qd3K9ErqJyqo99NBNo2k8NUHdzUMUb4MRuAg1QVDwdR5gjLMUUpfiroimdDkwofzuC68ob6incL3ryze4iWu",
  "key35": "5x88gV5oyBxsFGGCC1D8QHTzgrcigNMzx1WGJitzwm4VqgPNS1ZEM6m936uSZJpBdenTp1wk6G9U7WYaS4UaRA1M",
  "key36": "3AnG4RxGBhfDzbPq1XNVJpNCKHRVdimcUN64NDuYpxLrRfuG6CEMpJEqQ4sZicGMFrn91379BTUdd3k5jLQe4bNy",
  "key37": "5hLWqa5ZmDkT9uJJgZ39yXx5PwwEmDcF5vBBW7qWhvo1DuN4EuQMTUSK3ipRDU2qisiKf2ir3qF8y6kXYp86XAcQ",
  "key38": "JSGsNZ9nXQnD2r5WZWSFScoceUm3GKhx1via7rt8HxdZngoERLW95DwXW1VgRGALdEBxSX5hQeUuwS5BTeeE2L2",
  "key39": "2GCYUnZb6xG1afxV8eHnD56W5WGA1Vbf4D4fAabYjrYNjoeAytNUbqjw2xw8wh9qtsiLXEq1deGEubJuR49CfZZW",
  "key40": "5Zw7UkdBJMZtL8MQ12ryzuVDR56yaw6cRL8BzLgeefsQtNKTJgvwPxLXTsgukeyRQhabLKb3puzmgPsQPYb4dD97",
  "key41": "4dp7bubeAEsfXp8RwLcLc68GRbJrtfFxxTPHLi9MLykqFGzBW8pWN8hBWyGM3EP3uwMAB1GACGL3hKuK8jDwbJKD",
  "key42": "4AsbprWj5okFt6p6cuJXmEFEqZzAJRczCxo9SwuFbXZL2jM8yJPm2qxuPVLvhud3HjSYBrbhqx8ZG8PSpmRcXU2F",
  "key43": "8WDB53g7K4einzu3trBK69qcJRkh576DuQWwsdX8cVAvMFNKmWBPDYMnfSzJKfLy8tiYkMxmHLXQpcPHMyuwb2b"
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
