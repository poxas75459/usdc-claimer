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
    "5CgKxubaDLe9cGjmVgxRVNEbQSYX9ognFkfJioqLEvyR9vzXiehXThTa3otuTURo8GKEE9c2skVPh9NiEGBwfUKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bi1JJBV2Q5PznYuSpWY1whhQmSRy9Jh9Gr4UyUfc2FazspAtRC1JmtVFAUaEQ5sdsGQnSv4LgrBkdaXGKwEZv7A",
  "key1": "3y41M31K4XyfKkYV5fp9MkUrB1YKoNkuxjEQVUC3Kr29UhxEvUNcL9v7Tze6J4gnFxbYGEADqQcQCzVtNqDdKvb6",
  "key2": "2B5n4a3adoG7cZwRNCcgTPgkQzVmyidwviNNQLdd1Bb2zCj9hd9Wekd41u4YLGJkioBvHjKvQ4PgpoMRXpAAN1WW",
  "key3": "dU6uJ4zsku5rNZ5KuvL5qX24f19KHvNarKSGQejSMG21Bh826uDBEofDSUwz4Ukh6GRUGoqpqrQpT5riSQCBNnN",
  "key4": "5z6ZDmK73ZH7EkxfZ2buKQC4BQ3qttWnte6RBBZyUrBCtBu3rEznANmkDpFhTQC6444yGuA4mi9tGkGceR8ajHYo",
  "key5": "38EoJGQy9yJSV997r1vSC5TUifELGa9ivrbZTA6TVyqLvcLVXD378VdHuMQGHvbJQpWNWWhc75WjutKamtitEumT",
  "key6": "2GRnWYot92BhE7j2MnnLtcbUgfnt6GZcvTL2ixjzfESuQENmJmXoPY98ioa6V1J7zwuoRYN4mSuYdbt7T5fxzjHR",
  "key7": "54NMeQqvSpRRJ2eeG7YK8jKTtyD6fupgNeeQ2HgmfS9ZAe7C1c616bRhXBNVgSQ8cfp5NNtJ6kK1Ss9XeVJoA7zX",
  "key8": "39EZkynEis4B7ecnfsjphTAM3kh7TqHrppnZAGHXuNWb66yaTuK94qzjtZaby7YLd75dbu7QDXZ4G1MxTQ2dRxU4",
  "key9": "4VHTMxE2PtDJSowjB4DoK2tY7JL4cFr6k3XHrPYzQyegiyryJfpRUuuVcvgeDjsPLZpHFLiKMM3s97dMifzmoKT1",
  "key10": "RZeW8iw9oLCVdb9SuryY2QhH2KEjocFmC2ZSuNzNveWGuSJ2Fftnb2vzi393EtrfUPp2uwsfkQFSECL9CJnUai4",
  "key11": "yDQRmMHchpLru8C2NkqwRFB68QyUYN9A66cs575q1eSGU5AoWCWK8YBczNwH26EwiMkB94QsXgZsNQDUWiwzS5e",
  "key12": "4JK2DvqiWCG66JtKjr1Qd2WCbokupHBcuj68rBaRkxMPNSkSqFMfkMAyXsUF3otjuuE2skCiajitCL9av2B6pham",
  "key13": "3uD8sj9y5cVhqX4qs8WaJWmS9FFwJtxy84yFQJLy33cvyLztAQUFQkK5hNyuborQkNFgQiJhsncg7dRmpH4fDuJD",
  "key14": "2xw6DHhpjZ6e8p3HJatwkQk1mPSEU6BLF4NzsBKHv3FoYiwgCKYPCVoXyg8cr2X6z24vA94aUChkq8pVtKDuSXz3",
  "key15": "5KuPWV1nKHw923Hiwuubnu3N9VBCRi1u687HheVAZuK4Z46HnGPfTnXLNkgJT4DhYQD9eHZyr8h9mWbRaGVmkVyr",
  "key16": "4Tbp32gnPaS8tay3BRAM6Huwtzhu2ZSdtvixncnUvJyJAuetxdLDyBfMRodkD6fZH8Eh9qGHBgUXbgkWiD1AnJnG",
  "key17": "2YVxDh8fYMdTBjuSfiNmrSotoeus7cyukGtmDdxB1PcF1rWcySLjk4f9BGGMoV7UuJm1Z8bSfSKpr6VVPWsixfnw",
  "key18": "3JbMEV6NY8Bhb1qT954dYXcGsxjoUDqJx8SmNxxXsaCEyKuxAWJQTr9j9QCVA6KRWAhpv1KW6bPgdZYMebPzySbf",
  "key19": "homyyew84r87noFNprAFDxzPFnfuGTEdRJyPoJKKH8K8HeGZVLsSLMQF1K3dgb6ZUocq1BZQduJnmZEpCwqktQc",
  "key20": "4MYAVJF6CH61Mxhg4csP5HsxaeoXGzs7MNX5QnqJtVKKYg2to13dGXf1V5NJMpKthUyiDvjvHd9pe3gFGnaY9WUt",
  "key21": "4mQFyRSjXxg3bbap2PHKMvUeSomjtPwUujzxfeVq6VSvBRyhm8AvBezvfjQovfZ5HoegAcTcqLjJntS9EXU5GUSQ",
  "key22": "2pPNgkJYtkLompqysBBVyXAURAPgkruJn3QuaNbCmpJh57oW81RkYCVgs3nqeCE9ZXLHnc5tHuuZx5ReBng7VLGk",
  "key23": "3YBDGd3xTsRuEEsBBfd8ED3FmqdwwbDSEXKcY2uwo58TGJf5mAww5hPokTkLaUHz6WxD5fux4CaHxjRtYWsAbZkh",
  "key24": "2y3kTpQeWQZ2sTSAp6mdf1SCU7U7rpL6k5CX3DsAARFb1fmsd5B2pEquj4VjCirvoafp6cRmso3HJqpA2kVufRq9",
  "key25": "4q19s5bpWQePi4FmWTASwE9fT93it5hThvdXfqRGcEs22AdqvpugomNg41AciXjjTupNPcMPGLstv4vR2rsopgyX",
  "key26": "3mGDqyDvd9sXidfH3RHqFc4woMNhtqMNsUgd3NkZC4NoWMSw4crKZHhJWLNygmg1tj2L2n2PaoJmHyxQeCVugwsK",
  "key27": "5ZqPFES9hjTmpre6mWk8cz6oWuLELkAFmTwX6VzLGqcdsojCBKV9uL9WTk8XjQxCQatLLqfRFKh1kEntuR6eXT3x",
  "key28": "2apugFT4nEt1EbhT5ppWX9CqqesJh6zwmEJWn37GG22p8QmdmdhM5Ks1kT8V5d9tf3G1riqysQKRtpJoirUkswVe",
  "key29": "5ybfj9aaMhyBsSecD8pMTgZ8PEN3aL7XfgbkQtF5DW1QMd6W9SZEnnjzYq3yP5kSVdx8Jm38GZFV261qRgcTefN3",
  "key30": "oxqbHbDxL3TCPWZxX8Uxe1z1HNoAevbsAesjv5eh4Znnev4az8Z6AWKRv3uPnfnzDCNkjA3xZMyiSxHoS5XHgWG",
  "key31": "5dzaW9u2btaTPin1aDuq8GQyh2pYjUJR4wqRXxFx7FfVFVEfqW3FWJQB3KJ8o7YVpgk5iVmnTmRi7WvWGzAfm7Z3",
  "key32": "4mWo7D5qsNrqeWgM4BpMz1vHkQ6vX3P8e51EZaBv2Z7t6oMYSVP7kfZetGbTQ48RWhPhxGeDb75HuGBVMf4ghik9",
  "key33": "34WD4QbYqB8gwKmvdw28S5wRStj7bnkxigAYwyBtGPCGcwDUXPjgYpHZgjYtdHrWDnJu7hDtpKx3J25jhzFD8FKR",
  "key34": "4vouCqAbrQwG5h8JdSp2moPFRhwyBPKcNR8MXfhnrz46m9snX4YUYRuWcam7bSLta1K2oT4vK9KDwNRGW7xJqdmd"
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
