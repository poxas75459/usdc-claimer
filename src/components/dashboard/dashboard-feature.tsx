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
    "5oA6sFTEXcCgcrPT5oHitUfpE3QtuWpgZ8Tp66TYX43tinoEnEWrZ5hceUAyC6kX6JmFQsxuvM4B7KZR1XWaiMYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q2vGZ633o1VSAqZAWwi7q6oC1W1AG7z5UQXsrHb8nL3aKLaY8CPoSxt8xXnMsyyjhyv8JkZuStMjt8GgoTT9emg",
  "key1": "44G9TsJ7c6EY6gFrwmgvJG4PHVb3nhhKbWw54Z2Ft6SWDoui2aSt7APxQHirjpfBucCT2fyHkG4AB3yy3okKQ7R8",
  "key2": "5R7eip5AxKSxsZTrzM5gEykRo3NgE617oLq13M4Pr9Fh2wdLtpoXaLH2nNdF1eKvyJP4ZE1WY7YzahYJYFkdZSp7",
  "key3": "5mzdfv6cc3yUxcsuFmeFbtUrjoN7FNKH54BdpUpDCei9vnsPHBEs1qTr5nvRViE7LwLbxVmQd9qrVd4cDxPtk9M8",
  "key4": "2FVmDGzTic141dtvT9Wy9TSdjJ4C1KVkjnXXWJVHfZNg4P935stYevfoUkq1wWDs8ignDdTtxNbQoNgHQyH11vZZ",
  "key5": "76pxpwC5RfReuSHYL9ndjat8nYHAhEgh13ymymQZgzMDPduprsKVSRsAkYFsf6MH71yaLpVANPNVtfeTAABfyeU",
  "key6": "33BLWQUZDNMNb5AJdeF3qk4hHuvNS1vHdTNCsBx3cMCNnfCRaPARnNW5nw4iFpCFAHZeHsXd4XasYY2yee8hcsxp",
  "key7": "3huHoW396tXYRndzsxNC54UjeDY5T9BXJPqTZJswCx1Bdfizqym5mgfWrFomBum9DDK7n59StLK6HVbgs3WKNuJo",
  "key8": "CwBprpGeeRWnXpv5LhRdE7mYqb6FVrUU95RRYGNd3VreBmnE279qEMqbibuz5TJJeV7JV5JuQ6os1JefVMN93Ww",
  "key9": "4MQ3y4KbH1r15UiVEj7bxEA1hXoPifNBVCK4tfjc2HjSjNfeRnkgkD1rBP2uNVqbMBQnt2RpHNYGeUCA5XPq1miD",
  "key10": "4s2DQtDMc2fWxruZAMNjS3oYEF6EYTkMZ8SEBctW9kHuZjJYKYUsEgXd5fTpKvpoEbS9vmurJtwZqRPcxMmWfmir",
  "key11": "4qaD9kG7pYVF95v4tXAy6FA26Y7KQakYj3uE27Za5Y2S6DX5qAq843cry3C2bKdwSxp874fxcKUEv3mwwcYgxqMi",
  "key12": "bt1kByDFZiUtgCKGdTKHXuAGKTqNjP4si3ASbuucXMnfWH5A8FngbMTfdbPGLmJGofdPymnyo91dr4RQrwpM3z5",
  "key13": "222358AYNM2EqBu4e9uocGB1LJDEjRDim9pNo44AkcvWoMRisNHj1UdKmoqei37m1mYEYkzKVCnhJx8rwvti2uX6",
  "key14": "dNrmgPjeoMfyEJ6PqADpbszr2ciB1Wp1J3LThUPE5oqbfbqdW8sRqjW3nEcVxSardL7EkeZDcL3PbGGDCX8cZD6",
  "key15": "2jyE3JX167Tww2orqmaENnFjc7ob5y5vGyisxnReXGxgCJYtLu1zL1G1Z7Fbtt83AZeVnAKi94hqd8LV5o7Fqn7e",
  "key16": "3EYssPAhgHxTU7rX9T7E9gvyNEyHtbuXwb27h2ATJtKp1cFupEGZ3Z3wLGNVr63Y8Q9NS5a46bf9UXpaJHL3pALh",
  "key17": "3JmDKcLDaHkjKz9NxMy7i7mL6ncxf5SVQepM15PwEjpCPV8xYf3QYitsn1pkAzmkzGt2FJcahwoqnMfjiQbxt4Zr",
  "key18": "4Z4JEdnNDk6UDMm9o4A6zoT8PMWWB8V7VxShrE7rDoMmjR9RBA4Voc8XJ7ZhyTGhMnLWJ49sXg3efgMFCmzcD6pF",
  "key19": "2gpcf9rztoK1JPs3qjsqd3aVMGtNFdZnFcqL3jHDT5ZA69rXd5hcLup8LmwYzn1ahmgfVNw3yds4fi5v8xjUetAv",
  "key20": "2cucSiYw3iFRHvS6wicrtgrpR5CQyUdhRYJG3ytvS3HRdbeXcDXZLZuABdcK9mdzuZWwbftiq2UQE8VsExUXA2d8",
  "key21": "4yMpqTmWs4UKdeqRGi6GRxmPrxw2KQWUDzZiHDaKknbqDATfBbXpV8GcRpWnApSsMqeQHHqQiFKpjDNc6SDgyPp2",
  "key22": "3D9SWbskFpwepvJj9YXwbtugyJ8qe9fDX14QY8rmkZL6ARWY9L4DbYqVHBGkMF2ViYn7YFF7gqZdaKGQcS5eR9AF",
  "key23": "4NaCLjkcwuBCi4fr7eWeRGn9aqoKxpv1VisvwXRBNzkuoi8sJ1TUNZx84uNZhnnwWJRKLbV9uDcHy7jYwYDQgNWW",
  "key24": "5dT714c1TgCi1osydcNB9S5rToHiQfPeU9Cv2LWK2F4Q3pdCyniihPV9TFd6G9Zm31ojXQFFXeA19AQCG4cz4VTp",
  "key25": "uyWHyayn8rS2KqBsV2qUaYmL4PchFnY6Ap1k2bhLFT2NFYurMVnWmaVyBVe66qqhbFbhhs42isz4jcChv3wuFDo",
  "key26": "37X8STEthGy2keZYoAKrNah9dzjarDyXqa7pdwCNwi6JtjPLvtro3dboQ965ep3i67styrpVL5acrLc9gCw14BjS",
  "key27": "4QPnbr8d6zGFfNMsEj4c7D2hx1AYwtzaL4GgQeydto784ZUUKYwY8fDSn63TpYs8xQkqChKMEmwhLjk4rh2cgth2",
  "key28": "5KoARchAM7UKgZux4kQ3v2XXbqXttKLb5sgNyyCFHyQHu8r6Zkw7Mu5wUzTFoiGmFJPq8SQT8TRvyp4LBX9R39ZF",
  "key29": "2N9iYSMsd4SmHqyjDyatV7C8qXmuAq9SsYzfr1SxbxsCogWmCqbD7MXCTFRCAEcwvLzETpbi62NL2Hmf43wxn7zU",
  "key30": "4a69mtsQB1Qk9uk75fU67SCpdeFy5kJmdgjk1m4bDyWJBkUPq7muEbsBqsX8PLh3MPW25RZKnZd6W8CT7LytHCWZ",
  "key31": "2DURqXTcmxjcp6WU1P9WgJD6doQ2N1jmrDP2RiPwkc8iCCaDQ1bKLRkjXZENgnfJUdL3BXv46hf5znjZGZiaaiHY",
  "key32": "jciHJgkPGdRKGCoaQcXk2ukmCa9eUfZ3nS4iR3G5F7A2VT5eNaoJnsuSHjMtBk8hhkompvTNoNtZncYNfKWD5Hv",
  "key33": "5i7KmLFnYyn1Jh7ZVwzUSMx87WZEvvJF7cGjK2Uk3vnXrLtqWyMdMHJXpad1RYHrZmXev2itYLMhgJqUAkEbGiQQ",
  "key34": "3nouE7jyAfzwfWjbWQE3g1x5gpaxF9KicXJxSpmogYK4eqXmtwLqSys29L1gRLQU3QF5eaEd7Bx52hJREmGtcq21",
  "key35": "3VaYhRmyf1d9mmrLqmH15y32taRdEJBGUGzVPi2sPTUHNtmwgaeoZ3h8WcckJ9ayxYLcCSLymaFw3Da5ojDYiYsB",
  "key36": "Hi7vxHGy8EXWo3KbNv4PvgNyj6eHVPMNbBykf8S9z6Xhrn7kk9T9mmtxFt2Sj5sW5PGLs4p2g6bpZmM5qBecQg9",
  "key37": "21sPbZyuWbTbZ6QFQk84Tg1tsP8GSo4e69kdcTGFfagYjWd9BAH5eZKJvwScXtLhJbntWXsc57V4fKL24gC5ATvX",
  "key38": "3AibaW7p6eDohXyobxQ4wmr1sABtUF55eAuJTwyi5zy75j8z16z5ZkEB4tDG1SSQzqHxLE7E7DzaKM8rthcecPkV",
  "key39": "2gNczqZsZd5xgsqtMs3ua8yhBpggqjQadtY9E683LdwFRnxvQidiwCKwnc4T5B9v7FwrugTFo8rF7wb5uT5gxBMB"
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
