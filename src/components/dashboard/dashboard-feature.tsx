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
    "3pAUPCGfvbQt89pgfuH4kw4HXSDq74VCC9mwJECg2V3B8izg5y7QcJEZ3dRt6kidoRk3YT9bKrej7rfegMshM7vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WiESKXNRbjEkkWboauSvTH8FhqpSBRNWwUXUFCdeSrEdxBr5E1xrJJ3RUVtmM4uDZFX5vCSg3kfmfxGqV32VyJY",
  "key1": "LvvJMjknGb9y8UFPMamG3FvgvXMF3N9xfWaECg4DNpkXA91oobQsBW9Fx3MgKpogBPTof59VEGqF6nJErLFouQK",
  "key2": "3gYGkzL8R2YgfAChmpW9S3FLSiySmU63ZCoYArSKC7XbCKVSjue9f3LMsQkfFGwGfYnbL3Pe4sH72TDUfHoKXjhE",
  "key3": "3prte3UEoLG5pksSM3aXHKgamfgnmmEiYXNtYdo8u9h58J5PsP9XXxGrTmrRVX8MEX7DJ37xfCRwLc9ZKSvKvw4x",
  "key4": "36FUyJtPSLF5LbLYwtNAXVVg7WGsTmjyXfsduRtWhYcgHhA9vL4fjuZF5jJAkn9sYKAQ4ZoS5cGFVvYvExKue9rq",
  "key5": "61wrcx6hWKk3ytgsGSxsGYEWfzqRcbkNyUJRzbzjEGCwRXQPEjdR5A6yoZsbyNoi6HM3wyHNq9axqtTqeTCH7Y7U",
  "key6": "3RwQRRs7GB92T2Y9DMHd6rQBNfUAuPeRWCGbLLFWJoen5iPwujb9b4y2BRhGSxRPn93y6WAY8swGeeEF3bECCJzp",
  "key7": "2ZmeestnYtHuRX2wgsGmNqiSCZyxDWkdzjauYsTXmKx21ZfvtSNd8dpdGgbBxXVtmiXSQhMDcnY1Jvp4pCHCZQTg",
  "key8": "m9C32dQEhTs6gV2u1R61Z97q9wcQDUe28JYLC2kN2KTdFqy6RTNhB29jJv7QBqy4npzCYu7Z8d8PgtQg7eTL6UM",
  "key9": "5oc3qXc7tkRLQzW5LJE2csstpK7m5WCLevQd1GewfdimtPFRHUdGs1mMqEF45QiTD91LLjp5qpBF9FqqZZzYW4K5",
  "key10": "3ny3rcYCTg4Sknz8fHgEPW3LYG2jkCq6NAtrRADHXcdog1xPF5W2DxmAG3u9q23mVm3XHHgkj1anwtCVRR6tKM58",
  "key11": "2mcvt67GPCbKiS1mV84CUB5vhYfvZL7QhMthJTUKnQ92dnLuaui4bMTdVJeXoJeXdTH3tU9LjAcU4Bf8dcxXtaNY",
  "key12": "5dYYzyxGDSoE4cVbiM5LiBv4tPBJvJEbX1YQMdeadnJ1bBtaQ7cKocbb2h98FMQqPNdgra7ziKz4vLXxaPrWnc79",
  "key13": "rXdrJKkfvnd2TbLBTtfiZGsjn6zB3bhBM1coG3CFM7Wt48zoEs14b8HYvTW3C8t7F2xCcAGxaGPA1k52qCMKAh4",
  "key14": "epYyj3rhvxBh4ma72FVJcBjKet5LgBAyGsw5C2kVj6euuKzxpdRH57UmFc23B12Uo79JsLpBxudzXfyeToHA2Hf",
  "key15": "mD9QLci6yM8H7YkSSWgiJYActwXgpY2xG5hs3Rr8BfNcRo1d8E3Kz9Rf9gSp77t8UEP7vkWVNp8gGkpFEGCcvv2",
  "key16": "2bht9updgJNYwot3gsbutkh6yYVT3XGEFC8YJqCmwHDDCZwYHLUMva6FzPWAunQoMrkywVPf63djQaVyxTCSHP1T",
  "key17": "4nRJvUxps1e3axSjPM8S3snoRpcNeBBFGJy2Hd6cUxuddzAagwxZsdAjum2yqM5HHXShLN2FeigspLXezUhYqfCg",
  "key18": "5nE1UkAjNB6mkQe3fha89zxcQBTsfXZpcunJeGUBB5ULX5rZqFdratf3yhE4nfyEAiNRCTqffSN3doH7VrSH28Ct",
  "key19": "3JsJsUURYuspoFDJoeP23cCvWBJbF4yzNkMjkZUxvgYrQz9GTfTcm8BKqVi9iV76D97rsFNz9sBbhFebLc3cXJVs",
  "key20": "3GZSpHFFzsjSqm9uRuiRanwLJAjZuges6bEHJu8ShQiXWYWqiCxkpjgXFa5H6fX6Zm34rfrSrhh1CQW7qq6mHCUR",
  "key21": "fwLMC8AgfDdgby1Gw5PYURQLADP6APiToejyM2vLiFsxMN6D3gMGwqgrB4hpctn1Xe4KxX4u5PSBqFUaRpyoo4L",
  "key22": "4jsb2VXsvDaDXQz7oTMA72oKHFJv15brKZERd3rzyxXRZvYXr63nW87EAnG3JBRzcFkVkZhT8D44RWjp8jgLKCSX",
  "key23": "4kAiVu7VPwAqsQSPWdM9mpoKHTtvx9xD6ZWGvC4thBCb5WHRpZQsN3iknkeK5wjVhHm3T87s573VFaEk3Dw9gRyY",
  "key24": "5v9YeoVh6J2G7KaPXbAxiUy97iDMxJJkQyo2ZQkuTYwuxnmBHRmUjdJBogB4KfVMFSVJc1ToM9sZHjPQrNh63WNu",
  "key25": "gD5zuGbKA6iHiG1jFkpBwMpEe1FikFFajMdduhmtewWcmpvF1wK5J2bGSLZJ9ZbjAFL7niNSnXxzsZSXnciczio",
  "key26": "22BoZSAPxAxLQHX37LUUhx2nB6ffXWSbhBxUVRPYCQhT1nVEwJRxvD9QHs1KVmSXD7hiAtmQUP99oxfMadHrc4As",
  "key27": "4MduaW4bS7Bhr91aqBtuTAirDni2JvvJRdRvDyLZ68vVqQ7m7bNmywwBxuojJukwk75HzZNCTrRF2sc2owkizF54",
  "key28": "4xmTrEGbT9CjLFoksPf374JmKwL9Xcwcf9KBpD7uNCtXA2JrFsGTX9XtGjNvXQtwS5mAW3hEf1Kc8GoxRXPybL1Q",
  "key29": "2SGdWP1uK88etcJbNEcfXyWzSxi4VXueXpMg1H8BqDDDYVdMKFzmnrnn6qLyUWh8ags1cQ2CGWAbZDSjgDPsG1Eb",
  "key30": "w7kvdLamLUX8a2ZZmEsGQBitvojzJ3D96G22YQ3mC5zSzx6jh9jm13vcsDpJZ5Xhgv5YmAdXA2J7P6PrfLXZC6u",
  "key31": "h6tGa4d9LEHTawbMW4DhvWCvtsnJnd1SRfARCF9beYGvNTzafZqN96EPqc2icxEXsUT8LaKMhs5tPFr6q8X2VKT",
  "key32": "pg5ogN7KHt12XRBCs17dTfqPk1UNSEgqEUjgaNFyStxKynGrRqotFkv8t12vbPyzFqxu9fBZWy52MpKU6eiwYz4",
  "key33": "5FtZShst5qQihQfHzkbSBsSQioCFx44Gtyvk8abMDGTnHjivpzvCyEigF9anBb13r4ngtBUC6LTxvEiNLhjpMioM",
  "key34": "2UV3zENMyC47bgWfYxpCFoEsKjCF39PP3wA4SE4zyW3K54eWg3mbKp3xBR2X6Dv2bBEdKU9cQoX7QM6avNzZBKxN",
  "key35": "4Bw3z4xkKC126NJQyeCFkJ6W8mKcxBenP2JM8B4uz6xhgCTU6ZsAJjauF5e7GiEvWkjXsEmCWVhNtcbwxhSq24t5"
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
