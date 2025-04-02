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
    "518JZ8gStHsTmQiMrx2U3wMSFJ79QBA3SFBFGRt4hGXXDXDzhpbVVRHReudLknbkWo6uiQu9YJF8xrFjJgvXkzGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMwyj5MSduR5bJUPBWeZXqi2dnwmu9KNvDqV3iPng7i7xSQV83knHccVzADYEtzMKtMQudBx2Ji2Lm9dNGWPieH",
  "key1": "3N7wSZjzz1Nfyp2BHsZ5gcDSYRRueBDmrYSDtFpnbP88TQHSXCnSN23T69JRSsADNUWDZsL2K3soDposfxf84n9p",
  "key2": "2TFdjnUGmst7R98sQFdMwr4HjVUDtFKkD9NibYNjXkzguKh4Lyq3kkJUprR58qt6PFV1XTkDaNvEy414RGBSJUDP",
  "key3": "5RqXFoXKhehCxaR7N958cQsQbAaREE8WbeckuaxUtPsWteFtHdg1hNYwywnrzEfx7huJPZGfgWxQj9kNWU6MyhmZ",
  "key4": "2XSx5FiCf9SJj3NfNkRc8HBsDmKGwjsrjTdws7UhSyKbQR8Hy4phECaTLeRcw4ZTyRz293bQbtKGDCZLQXFvdn2y",
  "key5": "2R6T21MSgt6KjTmL9v9Xjz6suNnDi3XkbkEHT4sWCHf7KmnsqwVqgc5dZVUNxX5LHsQ5NbY7A1RKsG7LpqiZUG2s",
  "key6": "4UMySy22CH9CmAVtiWKqgXWkSBAcLb6rzizKEpX3gf2j18nQxheBaKQ35tYTHzEw7Sc1rGCGzViqYhfeNXJxRGPU",
  "key7": "5ud2rKSttF8xAm4Ec1RPTesK1Sq5ukv8sHbhSggxkkHr2Zw7V4MzhB7uYrPnHbbptRCBJ1AVaUSpHmidhodga2WQ",
  "key8": "33vvnFfNH1xef91X9zPFwM4RNaei8xNPKTFSCJqU2FEXrfysiWahfiZG7qZKkH8MpMxdUBtadARmpihFMcLrQztF",
  "key9": "3oGk7g5C8F9N7RuHzM5VQQvg6fsZEeLE6t1TByNanCiKtVeS8nmrHvTvDanAtasE11TkvxUpnC6EPDDViCmsrW5b",
  "key10": "2kC6vyB2jAfeW5x85W71CRFwp53gpw5p6AhtMVmuhg3XLs97X2eCds8nukxyiyp6F4FAExKAkbn5U7QXXa7Aw4Qo",
  "key11": "5fDcwG84P7MWvseGmvijB3MT3xWRTM6q7pgy4Nev1fP4kWHh7rdfNScd5HLEyxj9ncBJErqHAk877SS7WprehqfN",
  "key12": "44iCmx8uEpR6eoH2zGQXjZxutNxRTwcbgkcj4cVQZKJh6yWzCNJwntu16rQgvdwPUppjbtjtLa6KzdxuWNgvA96B",
  "key13": "43XZNegUaxXNjmUrzcTz67WZ41aNYu3fXkjg3tQnpAnpCnVXpK82yGjnxqsiKjhKYJChboM8UQQWwWMVJXsTswpz",
  "key14": "3JdQDUTjFCNbDq9KwDoFjJNZUUXTm9uSWXcKuCgjNGVdeYmaXJy3w1317Shfyb8CnK1J4EM91ceY9dRZuxAk4TMG",
  "key15": "4MPJYyCuKjnaCbnLuYKBCiccntn9NNti6VtczsWqkRpi7YUzpWfFGTwi37R35Hrrzq7cLoQnAZE1H6C13Uk1bEHD",
  "key16": "2GojsAf39UEc9QG6oAvrBtzKCWuRnVHwSi3X2MJAXX7cUG65sxS9pJza5TzEVxHKYvjuVEMf4QQ8aM1XsvtrTpYi",
  "key17": "2ow4b2DSJzKrFfeqy1QQZELo8tNssJXpFD6y93HBxsnUH5guKoYrpHftaJtpxshxKj7m5Wtb9fYEXKvrhxsVAShC",
  "key18": "24onhjdP9kwvBcwndsu81niNNqZ11xDkQjjjd7UYvpVvgtbydve7zE4SbpVjh8Q4n9iZpbTNaLdwJqCNmBr5cn7E",
  "key19": "3xZCmpNtFea8SgT1pYV7KhrBnypYV1rr7ChjF7tGkHsrQRCuNk81CpDGfQVMjHmPZ6Qv2Keyxj2dPNrqesUsBLTU",
  "key20": "4QmyCUezcxZZAUaqhKTwvoTwroWhJWHRKDGQNTsWFrX3tYjgUD4Lbw4DegNkjhpLERamFg9vWh76aMyF9uySViQG",
  "key21": "4TvccNgxctDzz39KL6gvmDdD4Qhu2MQYDMcHp33dZDVUeH5b18HrgsrwzX5h77afiHF6AxdsYrnrGwy4fBA5Xvei",
  "key22": "SoVNQjf2xNCZbpAseKkZWijWb6VavpipdiFQrVjoyT5CE3b4R9TrT7mJr5pvmUYfsyJoFCzkcx5p8acqsfKRXgV",
  "key23": "2M1Z6STsEvv9nZ9B7Z6Jvih5WQ9E8ZBCAvuqg1x5hwGa8PKQttW5a5uUWHtCMHygcd9Fzatqc2f5FnDuN7SKzXBZ",
  "key24": "xgnTvTUhrT95zZq8FQn8fTkLasXHucSgPYkXtYzoYkEiEdBiGnMsmTJwNJ4qPQPif6Cwg3tr5KfQTzHBhcn5Dvw",
  "key25": "5bVcy6t4Jq2EcQfYkteFyb4aCuUmZxgrVKqA474W4unKcadFFuWbYG6pFhBsRDEHDnJVYw91tBDu9X9RrNZiAx22",
  "key26": "4YC8iSjAz6GGQXhv2wvgHft29MzuXyz5dRJBbizCDzqMNbY6T1Xqh249c8yMvcnwA6zGbY3TumRdeXQT5U34zLuH",
  "key27": "F1MjXLhF9kKfQwRXi4EEPvEs94X6nekyfF7rS17TvJnMQHgsy6tgbQsHLgPwRDsRmii5HEo7g6dMsRL949bcqQL",
  "key28": "5a4MVsUMRaK9ACbTmrtnVUCpE1BEaRLYEWV741fc1czpuiQC4HyzzNzCUwviJHpFUcA2tgCZ9T4BBe5nY87xMgmQ",
  "key29": "4kSGa8xRFieVRN13uj4sJx3wiNEv5sWGhd4hMC1bD3avmzmSo8K7S5Mimh8KRouRVJzuqx7LwXTXXgKw6CH2MDuc",
  "key30": "4xQ2LN81CBgCjL8Z3oiBq5BZv74SzJuVg2QRfVrkfsJvUHvYZecQcGM3bHgY3FL2acZShXtn498nx6kKwxgNJw3E",
  "key31": "uQpf6FwUrjvdrNd4QHZwaReAH4oaVkMJuvyKkp8HDBaKPcbbEL6nSagVEx1QhxWkYSu7Y2FsL2WBrGYQLQhadBG",
  "key32": "53htPVgwyL1bXPET1s3MqpLm4JQdWQxKptBCuTpH4j1DsMk1jrxqwcz4SuMGLagNeA6huNkLK5Repm8tHowb1kMj",
  "key33": "5URPCp9BawoifKxPxPAg41LaKzBoLaxc5fgyB798Qsv6BZHz9yv1jdpz24cMz4namCXBR4656vZmbwBc6eeb6TTg",
  "key34": "54Wt6WceeFiTwF2hGrCvtQ5Ymod4rbdXXqxjr1Zuxkob59uot2V2HZbb5miwTnQHEanLcSQxEHiovwjmkxNhakKW",
  "key35": "u6rtWDbmFNQuprW9uNAGpUiZCUdLeuYsbDW5u1oHNDVzJ74TtBw75s9uuwbcKcKfdeENFghmRCMkm3bnxV1m14C",
  "key36": "4odmHUyciM7runFTLDUxLMREpxgjeCgACwtiSD4v2G4gjs1U8UHK7oFz1auhGJf4V47yi8J1bLxPFPUGxxmFZ54r",
  "key37": "33vDKMesJeCYttw9Vf8PMqUaEJXsY7tjRR65ff6TaUvcRJV5Rouf1oy3LnDZAeKLX6RTeBTuGXePZLKQ1veJGa2v",
  "key38": "GjEfvXgKCX49jPgWcTDyqPTAALK8zBKCJzTuzmDcqW49WG321Fe91Srq4MhRCUzwtEkiKL25SqiWWzjC8fszHrK"
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
