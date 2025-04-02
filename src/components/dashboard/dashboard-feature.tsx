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
    "2xRJz6Fs3oCnwR4ztTEZ5nVb4GGgdTvhdwQwJoDPP7Q3LeDNWqmuuD9AjNwGmaQZLsBesjUZdbEAn17oL9WmxPpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuZUsG68Y5iZ4aTtXGsDCd9sJGqDzGtxxAcb5xz7RR63kFqDbanLQ84t7zEDCsEhBfvkCMsuxwKcKSXxY6SDYHo",
  "key1": "3MwXsfZboiG2nDEMD74qwqwy7zdBZk3VSn1AQiKvLte3rbiBseMjGfUMytZzePFk1xcv1WgPe4TQpfAHmpoEwyR7",
  "key2": "3NQUVToUFEUb8nLzcfqGhHeB4bFUxLDeL4N6vyZReY4x1v5UZWjK82zqKyLYbE2s8ScLLE5TvqJkNqcfkAJnH7Rd",
  "key3": "2Tif8EGoZWiQFojCt5G6e43rvzxH7q9RTMFYxp7DJxBh4yHdQ4aezDfKGonrczbAuNP6g3UztwA8dJb68DqLyDDz",
  "key4": "59rnsrmbdQrwqKe4NcWatTme6rrDwPxfPywEKFpjEAx7MW2EThouqRxDU29bwhawoJV1GvP3KsifZFeZApoD76Gi",
  "key5": "2fUg4EeRDEmJJBi15j8aznewG51DzeeMQuP6M86q2QZYXK34JdN7Q6Ha15oNgFUSERwYW5qFcEaypcXWnceQcffy",
  "key6": "4xjqJcyY4QzFkgNsiwrKem1qEg4whUvyi9dujZ3F3HeSWrHb7fJ4X9aHjMKbCrtCVaUjWsFUR2h1Que7evziTLwi",
  "key7": "3wwjUjs1yUE6R7ZbCnBHX1s5CkjrZyLy8yqBbDKqtZsU6FRmfXK3fUV4MGgkRS5YXZpWGmvXLWbxo4Ff5H838RRJ",
  "key8": "53FCkaATzdQaWV7HKfue2js9Gf2VYA4LcqegkzxpycmZ5D8NddmoSPpczMrFW5Wq15Qnya7geTHPT5EVqnWwFSw4",
  "key9": "5qmExgqgYmDcgy4tDSszdR4ZDy94Mv7NK7JwgpYSSahYLBLNVhKNU96kWudreZLhGwgASXuuJP6BqpZR8RCX9wwi",
  "key10": "52CjMDacuXJ2GN6FvU35i6VHFhqPXWyqWiHKbcehDNJXmBDmW64wQ8yekCpdyK3yHe7JyGnvr37WUGEk4AbZ1kVB",
  "key11": "3FjYsJiJMWNVzSojgPyYzdEwDwZKBGfyN8mPRYPTKbthJXajfEuCtt6SF5RJRF7SdstHEZ3WTmFGgBP2YaADzshp",
  "key12": "vRF14ganJxBJitAq4VKh2e1wropyt6bGRcLqEGemkrcT2z2s4sMuj7bAwfwCBjtsVdnp6u18UmLH8bMqmjCwzY2",
  "key13": "4ZS19dtG7WFHfWA2cuSVSpqN7snbvWQG6gK3zXQ3BFvMUqNBek3suzPbY8khspKHi8eqjk98ATKSErEbKp6eaVtj",
  "key14": "qjLkTh3kareGUXoQ1Bs443xxF8kibyB4fLzdzCWSvrNPvV4A5NwQLHqDe1df68nTSrXTTgYusz5Hgb97fhwbwXC",
  "key15": "4zJJCv1biEaUjmWcJye9wsmku33dmAXZP6i8EK69QwaNuQYrrVNarF5jDvWJ4JU7kQeRrgcbHCv4fmXPZcCNrGd2",
  "key16": "2ot9qBD7nACJNSgLvPKGLuF8NFXKWKgge8U7jbixQNB8TRLBW6BtnJb77Fan55qe5n5DoJBwiWuYNQ4ZDdxYjLKP",
  "key17": "67hLJAS2LkE12JLqSeNvUH81z1ZLCoW91jXjYCeUJ9mVhhboazsTwMJZQNFFi7QmEvdUoM1SPs1kVLmxxuuktWib",
  "key18": "YjXAGcCRXWbmzAXgBjbsPaXJDfGDpUvAk4H4ca2b5ixGMNTpu6D3QwsDbcTFLhdDg4ASsvw1GPy4oyKLt89wueH",
  "key19": "5wyyi3A79vBh6zY5pKKK79oNdCjm99K63F1Ta6HThJBT4ob9AJcSt9SJpNvdYepeTjLU11HnBexSWkYdexcNmXeW",
  "key20": "2WgbFRuEkmjh879zoVMbTYpL4yF4BVZcTaJRcRK5TzNk4TJXgBXCxNt9p2pz6mwqPz3EmhajmSp87HhUvrom85pr",
  "key21": "5tXnXxf4Y8DQK8GvDSqZFbgjuLV6znLWsakmGu7BCBPAHKBJq9GaERJy7775NW75pXYebViHsJRvqppuQBLWTzjn",
  "key22": "4ZcKMK8y5mEjRoVgzy3pENfnRsVJrCLCeNZc2bRy8Sm8LuXm5KjpjY1EP5Wry7JCfNUDdaDdAX8E9WzVnEPk6SAn",
  "key23": "469Z7Hp9xiAaj7MaTSrpN4c1aGdcsjZDgK4MZb9Z8cDQfrbNhJ92tB5qRqSZK56XfCToDWaxKfv1JDWCXg4aiasH",
  "key24": "5eZPBDEmX5bgqshEBCjmCE3xxp1y9pQdMqByPXQ5ChScc8SLMXPkpmaxVMSsnauPqnYvGWf6UMbFL8oVNBgAWuCS",
  "key25": "4UHGRQn22s2wVD7ab8nTF5Wwagxx8kwSdEUUGpxoyNUd4z2ZYdi96yQ75CmVEmy1UD1u1ogQnFuUyGFrFEPaLoJ6",
  "key26": "3aPPmhmZzP6FjTcaNoPGHxa6cRqGFj5nUg7XyP5d6MQ61WcZ8KiKVjYnLtZfqFDgqemzTcegmbgNrMojVDdHVj5p",
  "key27": "7X21mvoHwQuiV5fdHjLNPuUb3cRz6XoFw7rRx24f6W19oP7g5vDyKGh6zWQyMpHP2EF6pSePfUDrJ2ja2x69G6R",
  "key28": "4VQij1uACY9HFmDrDmwSxADseTar99aYpyMNcC26UzhXvhyj4D1ZxWHf9Cn2bp6CpfW32J2U4JGnEZHoYgjDu1b3",
  "key29": "JKngYZG3Q3Cgmu9Sf9QCiyKaRLNsCmVGjmX8LF1JgABXcxQjPJm4cvbY1dPjZnbnnMmr1yDt95jQaUPnsdaMcMR",
  "key30": "3qydHC5H93pNGkBkn5jXMcU5W5oCXZuBwNon8MFxazBhpMMz5XCGwJYpoBQJvwz16UZgtq9zEjfQYCTnBZqu66Dk",
  "key31": "5SuP5cFBGnseQbh5efRYmdAosP2wjnaTcQEp7VtvkAjGq94mTSPyR5HuMz7zGY2ZhS59c3pdAdd3V57udRJJrDiJ",
  "key32": "4VVVGa4CQVTnky63yauxfGaHeXe68c6oEaZsk8iF34sJo1UogDigtqqdu8e1RzhitAqa8RUqHf6N2CU1rsNpmX1L",
  "key33": "2nnCjCffihcBYtZCdfdCDZbUBfLyGXGnDcRNG1Wo8apiiranL5t4x2juGtvyNiUFfKwLqbT1a5p4Ekmw7V2R12BX",
  "key34": "3ewYPHZzzPPRf2UK765MtyR5xyBNrxRgDAUUWLZUmQeeNi3KT1DXw1gscFXJaYaQbAfa4DJynPvGKZ6AZ52M8ff5",
  "key35": "34owwxUEM6W8waNgByz8HUtTxaW7cSCvhnamigRnGMcfFjuhkCvGbBXP47H5whpaa6WvCJZmC3bc4foKE7fgfkgi",
  "key36": "3kr8yEDdGPWR7b2Zq1PqjbrMWaY9bh7C2jre3gs6oi2VU3hJEVKicEZfBY7ZcehBcsTdEB71KVNnNc33Tc6ChC9R",
  "key37": "8WThp85agRLj5m1d25azafrxnTu3rtLkpsVQ2tiqxtYgszxqJcPBo3hzmztQKQcvcezYzuqE9sSqn5wHHjDrzmH",
  "key38": "2HEciEBAV13TKczvKYDTvJAgWpJQHvPLLi6gCHiHeBYsauH2G1szTV9G8Y2rYFNmxa4ni36KYZ8dCfogFWRnGsW",
  "key39": "3T9ZXmm8a7w9zKym715PKdKVZTBsHb3AoDNk6wswAdxoJwYkSZEBWcqkeYWc8Y7F96gLpe7YBexKMNurmgkRVbbU",
  "key40": "4YMDU2HV9qCCNUPVdkK8X7rpH43peN2MS8wznp1siVqqwTgKbzW2xm9kxWSAAZrCMvjeqTgi9wncDwqg6Rx95Bay",
  "key41": "2YjoXQKoJT5JRzxHFzKrFMfqL1zBvAD8ALN1qtCJYkqk4YwHasBadSHausugAnz2eXTufsmm8kd1u5FEX25njcWP",
  "key42": "44Ke9X9nB2d2WAmrfpBHKbVkTa2SNipHGq27vDHHXWXCAfzCwC8gY1iqm2Cf7JGxA5g7Y49K8YP7y9ZU9ujmA2MY",
  "key43": "vDd4chipEM1HGDot7coh5v3edv4DyEBP1utCiMJxgzCQeeXocovP57wdjZR3j7NuXU4grtynrg4cFWnYPE96MvA"
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
