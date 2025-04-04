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
    "sno7NuqwT9U8rn3QKQuAGA6AtybmMfdTz2byfaiwjNXCKx5rcdCMEFNhd2ZBj4cwtdw8AfhiN8bnKH58XMSZ6jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQGjGizB3EpaXS7fnr1UVbkUg4HqZqXrGFvSoijLT3y1GNu9UnR5ynVvuUPQjqCBTH9EHybbhp2XYyNoipLtNbL",
  "key1": "mvZCU2v8nD2xFEWXdxMZgHV7mCLSmXXFKc1L2HzMS3T1F2pyr26ZbMG3H6qZfVDwZbn8s6y54EZY4jAejjGpSvZ",
  "key2": "3JeUHMaY4J6BqvVuna2VFU4WDXr6W4FvkbPKUg79BvuEj13tLvP6353WXRTq4mqmeYi6w36tixXScW9F8VZEumgY",
  "key3": "3ehrCfCJ3ZZ9QDWhhcXncrvGkdofGdKMKg4sqqmXedUfSdwZZg7zxMQXux7YkfVDqRgZa7RaH1xr5fVvFi9SgjMQ",
  "key4": "39uwsfoUY8AUveUkpWoN4BKA8Y2VL8jipw2xDzZDy8NffHNC5DBLqv4AsScSTjnCVwGXUgnmjGTotJ9bmFvGvi1a",
  "key5": "cWnxudeTRbSpQzsrrHV2vYDg31kfRXyVEuFQ4hYJhRBd6SzdtZeB8sLuEWHWeeeSV1TuXfSybBsBRejEZ6uyW86",
  "key6": "38HDWemZk6fZYQHTuK8vqKrZAxYN4AMEr8pq6wqPgHrFfGUEUewkU8cTq7dcKXZPVece6g5ec3tYS1ENGpMpfqCo",
  "key7": "2BDyTJwsb6C5Q8kmYyd2vUNT6twUCDitcgVkVNjjsCHkjTcLk1q3ZUxRbMpa2r3dwvtvs2uRMVN4xRjpVxXcE7gh",
  "key8": "L72AHegJW8KwZDNbCEixabPnMBZ6ws1biPNRQzuf8KJ967yn5GzfmN4oCqQoNjGbC5MkGtviJHc5gvC1sMJvz2m",
  "key9": "57sqsZYGNUDfTwuehZYdJJgf5XjmHyt33zi1QYbJWf2ukGmUWyyjthEHoBKgRc6C3iMSfA7GAnZzoW38Z6FcybvW",
  "key10": "DcZr6xubZVbi6G7fHK3LCYW46TPQMzL64KQEnwKggorytDD4P1KJg4Jf5smXDFUmTmb8a89CAEhL2rXiTGNPYAj",
  "key11": "4mxy1ZnYRanaxoMzwk1a4dE9XL42813987ZES49yC8jQVFcMLmCXvU6UPayZJCicDCXmmsj6eKg3Z8kde2GrRLVS",
  "key12": "5fHZAXXxJGqMWHfxS7N6752svvZCfwhNWZAeb28n8f3vsaHbm4eZuNroW1oWVBtKvY3ANjZA176vsXo7Ajnu79Ba",
  "key13": "41oR1o3bD23FfKih5Wuy4XygFTsw8JSBP7UTwFx8jcE5cYtzEeaSu2P73TQzBr6FUzewuq2HEc4A5tgwPng8jEAw",
  "key14": "5kJRpCJDmnZovbRcHZK4cNqvhg2n2NHaiZ5Z2j5W3zPHuicN9Sf3wQwEiJvPDAht1Wt73wSrRR51YGMLAxYvzcX9",
  "key15": "28mDQa6MQe7TtPbsyQrTUfJLg23rQU2QBuG5bcqjr5MU9b3v9vy4N6Zdt8qxPtjQPvULFM4GiM7hpUCYeHFVvwWM",
  "key16": "3dUt1hRBst8ZKMrkMxMjduTM27C8thfTWSMoSxHUrvas3X9ruiGr398jXbstphjFu75pBtB54Rmyf2im8zdSUYYF",
  "key17": "2HqhWpC7NBzUvWqtLjJ6qjzNGVQGziNAvpDuyBcWfWjDSfY2twaNkZM1v4xSahf48G7aMCtHegLudBWh8ApBzWiA",
  "key18": "4aDpF2jJVdXPuiWU4KkcgyYACDQFaeonfiEjoqt7eFJHcRUCyaYBqMcyMeeKLLHhAJFZfunJr7Ad4zs7ZjrJ4FHu",
  "key19": "5hgT4hF1wxxCXwhCDr3v3BbEDji55YKKeqUdVdvn2R8VvFa2aKrVDXKmG3WuLWCNuDs8dhXEY8QaL75ikAg8pH1y",
  "key20": "5QULMsRmk2rQwhCofHdN5Mbu2LB6V7iAKmatc9FzHVB2LiDYCCnQRbqpm9Tsu9gWBvDbEADpUiybFN85imPsg75p",
  "key21": "4stDs5GXSFZ3r6niURh4t1fsbteFJdwVBSdR52CRFkhjRjogaFYStn571cx7nP17Up8MjEesBybNfVYKHf5rb6q1",
  "key22": "4hwr7yKWABxQSWyb4FDjdsYSH2N1nspXMii5kis7XqSYwor9EtwJLh3DAX86238un7KsfuP2GeShMDyXkz2AYkRi",
  "key23": "52gbVcBN8jiUNvmGcN5CDMWn7F2kFFQNLT81sj2zVrL6ncqf4aB8cCXV6Mxr6sLXz1QwWCQFt2CBcxPKzmX3iUNy",
  "key24": "3eGGdbFuMBeUv7pYfnBo6jubsMpRYYxjVukY8d56xQV9ohA9ZUke9noDaHXTiwGrB5n7UXtqfcHGX5GNUTCRyyYt",
  "key25": "EZDcPysQwcnWWEXs8L3VHeE8ZxDByDnpTEo5smEFnmwntNmRPfr9FZEUx3c2N9ZPp75SmMMndk5XaJ4WS7MDapr",
  "key26": "3TyizkbPxtpxCSrEc6wEJ6efVQ3hrPGUXypyLk551RFbwiMQdvPyiL7RqvEYMedYbsvHRNdAYFjNFoV8yzDCVcT",
  "key27": "3pDK5q3UDRQ7kiaQX1U9BfMTfq3b6oMQ5kBXFQJp8e4Cxq5H5w5eseK8QmDuL2aEGJc5wXsCTMSLiad7AR55gHsR",
  "key28": "2tUdMbSLT8FF29A7G359duaFxoxDYHFRDJ4A33N1N4bqW8fqMxze1cs1rmwHG5fEtnPhvfEQw7pqknt8kFwXRrze",
  "key29": "3TVKT5YP24qHBV57NJfWmmGwE5rEfHoYKgwfHxi52pacVs2G9GQg9M9U8zCNiFZKqVfnBqkHxRv7siKhViQp2Bbm",
  "key30": "2Rnmc3XWCA2gwR9EYfL5eF2fWtVj1Nb1iwePtbTgoE7MrYi7k4NtfYdLyDvuiYkpgPvXQ37YKuWV7LBp2fs3sJ4t",
  "key31": "2tWJVAVGS2xfLg2nQNYuv3sUExTaHA4AjuXAxCYJpyPoM776MWMAW34nwGTtnQM57VcgUwpxrmfXmiQK3eAjUWbc",
  "key32": "4KVqGVGqE1Rzb1a4WAyZ6xWCDJ4Ev3Yomv9zbBAzwMcDnj3cFFKtptAfLgopjeDDn3QcMMJTGra2uXgqATbRbyz3",
  "key33": "5qa73kfcMkDZEMp1DsWVtT7KoRCHuMePbExdDNE2hjCBrGKNmXn6Ke8gLQwXfKVeR2ZLa8kKnvjaNByki1feCG3W",
  "key34": "2bxKkzHTCgb5RJjqcszpGNNECRfgBh3PgXpWW8WZkFe2QZq3BW2p5EnhSX8otCdMdmCeoRnutLjrQ8uetExth2Sp",
  "key35": "2Cnb9winTGgE3W1STW4EJJow8cum7PhAXLUfPwPjM61Hxf6dDzLitL1CCYERt192kkV1hGijmgZrrHT6ykTJT62a",
  "key36": "3X4wcCZFeVh7ogfc1fhRMkZtMMwhJzPxKoWNHg3qj99bxkd2rStY5ZdLNGZagnFCo8h8R9RNw7BnHtskkXnBzohp"
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
