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
    "3kG3Ucy8V7Kq16MCQAwPbVGkizyTayFo3Lkq1resfSpm5MDseXGtYJPUUjJHFrtk654u2aEsYen8hF8tPC5KuvFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VscP7pkTe1yiqVs4UbVA1i9uFoszgMn1VdBHwp3uHBkn8F7oWv95MUnR5C4BQuUDsth8E6bpDrX1XEQ6SEwep96",
  "key1": "5JqDMGsXnu5te2EZK6j9Bi9r19Rh2gW2Frfxm1QwyG8p5G3fCbGmN5RLdv2iVLsgWb5u96i8tMBT7tkmeqi16L6P",
  "key2": "3wSJVMgg8z5TK6VymLY5kkrro8KKMVMPL2CWPdxvfgWePm8eefdixX7KTmq2nuwFWGNBGYaAAy1CbMb9kcQhGk3q",
  "key3": "4afcxfDzzQ7NDwynDR29bw1LvLzbxRUKMy8517xJ6ZkEoDv4ngucR4woz9Ub5gUEiA7cPQaDtYg1f1uCwVMnjdjx",
  "key4": "1ud1LV9u5kyuCpBVFE9r8dZyH28693Qo5XdrsktiLfR2T8ver2JrsJ5ACNqXM3eWVMrdg8S9ZZPidqgCQzbMPZZ",
  "key5": "3tUCJ5FxG4JhasBQPGqKCJQ9meN4EqLoR7b8s2KMAmXERRUJU7S8C334HRmoy3imT8WspLSRwvDxDgjv45iJcndN",
  "key6": "4ViM1NSK2PHGyJJnRhhnXLcLMHyhDRADEz1ZEzgMD8C5YkWVtAps7TZtzsq987gmmx6AgmC8EJWigfR8uqiNyqCJ",
  "key7": "5irYHnPwbuuPWPiEVEbcr5HPhUdFzztJcHUTUbMXFKCivZyAwpPHxtTQZuhDEX3VWR9X7HuHQ3VvHz8ieLXpdAzP",
  "key8": "29NqKon9ZELRqPrYTnGdzJiumj5zg5N3wCVjCXZhzYbAwNc7KpcX8RXwSyyXivRJM8Tw8kE8ZsG2zhbNWDd2VbJL",
  "key9": "WZfXo3R9tKc8godL44sbo1CmWJeS8soG24ypsWFnsggY3ZTTJ2REknVktkEnUFEyaYjuALxn1yxA1GjizPgb2SA",
  "key10": "3krF1xG97syoE9mM2uLPmL1FpviPTGSkeRS8DXbpvYGHAaJ4KNrwt7jvNr8JqsZ9UjGncP5ttGtuc1MqJnh5QTxS",
  "key11": "4onrhqGF8j98ZkuZABg5524ktXte4JAPK8qZrUZA5ZnZc3Qe312dn3uymWGophoqsB8BFRTY9mb7TDP3cqAbVqWg",
  "key12": "4Sb6fATsfBv2uDBpNS9Pg3gWLLYrwf8cKUedNXiWU2r9cde7H2xTg3tvDMgtxN9gWQEstSWPq8Y4XNt5Tce2YfAi",
  "key13": "7yVd6LtJYy7ytqGjTcbf3ZEbveqgbAW3tKxRsLXojfpmiiu8mTMgm2mjHFCiYvrpYpP6aJ1frTpPNHJk2TsrkDM",
  "key14": "Nz2RQmujdMyjzt7kQ1TSzds6Jizngf7YEjcdXCTYxs6i54d4TKBu83fGa7ddFPYAsSXwWfm3QLfLj2WrYpzUBBW",
  "key15": "22PTi112QLhuXPhGNbg6ydVdEorDRXGF6VdRWZ599jCdt3rsMP6mZHkQck4o8izCyACvLcv5uvPp1FyQEDy8To91",
  "key16": "5PSVeNinuyF17kYdmKU6bq1ewEco46DgxbKhbNzGPxdGxb1h4QeX5KwzSnvaj3tvDb5fCfLs8BXogpeFYxG1pRmm",
  "key17": "5PtTDjreaqD66JcCPeo45kvtDVhZ13bVBGoL8ySZXXxSF7pYcFyJMgmxvva9KEogGpJDMbfitBjSEJGevPh8tKEu",
  "key18": "3hG4a2jbL5hveGrA1UwHHdxqHJ6QQP1tMrbrY6bG8NMvSmMVtYNXW2MxmEa8u6fCtYimzhHZWfjRu33PCVbe6VAi",
  "key19": "5kZ4jDDJgFt99MdyN8JBtzm5V7cU3v2q6wCUkuk2bhEPArooQZipaLnXHodSJEJKstmEvAcSr6ijxBGrRds3sbMs",
  "key20": "2JcAJqA1pxc3xu2UVpBkGHaECeCi78RGZHkxhNkvNReEBAQ1cBkfDnPQzczCrJdipVvXsN57rpw8ieLEkqx1jqmd",
  "key21": "2g2Czw95osa1NJikJSgxfotZJhokJGFEABG4QQeZ6xZuFMimvLBCMBDen98WLmA48bkCy61QC1Zo2Mz5PgCsjeLy",
  "key22": "7LzYWZxYryKXsK56tSLDd1xhKFAnrsPdPTTnDK5SVisoq3wUmycvcMKSgZMgZLjurhCSAx6fkNF68kMB7qZBsD4",
  "key23": "4dUhJiX2erweSy9Gqx8USeA6BTtQv58YutWeyDCJvrViQEThQJAnt6odBYzkPV9Esj8E3bcaxhHifqBGG8vp1cZn",
  "key24": "2Gv851nVQd3FCTgStQNQfH7NCT5k18tuv14dmoCt8ZEHWtuzvrKgs7oRWTy5882BUB3bD5MvBXDpctjBV15cvaAC",
  "key25": "38z5mA6DWKc8EFnfPoCqcaG96XSHXiMEReHAniuCfStYFA4Ha8BjHai2nJEDm7dfodALq18D8X1YydiCwmK2wKsE",
  "key26": "tYY7twgSAaPWdgtFJBJrCefzX9ybAc3JtPf66rRqnfci985s3P2ZB8ybARvTQU7Zc4qXAtPzenZXfHU54ChZD1e",
  "key27": "2bzZVna3B1WtCPyVYcuD4U32MFPftkV3bDhYTzJR45oqCwcUEJBojAAUGXQLeUqhphavTGYifymxrP5Vn3kBEPXp",
  "key28": "3zomaFTuoc2KDYgwixn2WrnHL4YJU9wRc9gLquNgDv7fUtQwUCuWV5rnrwM5jTC3o8RxzqnZZQMthpe99zkMmFNd",
  "key29": "4U3kGLqgY9j7CK8YGFES26y65RR6Wwqs8azXmE3KPHUEKvPqG6dVexRopHA75CCneh3porYKovTGpphe56cBkC2e",
  "key30": "661ptEcKWFyFcAJ3DYLuSY8rrsyYJu8NNHM58LB9QBPbvLDzjBVDZtkTHriRdsTaQuteRUJ1rqPVKwFuc5HU6uXz",
  "key31": "53zcXiwWMJupvnJNxDot94RPCJAB7hBw9hC8rBdPt2LWmn8qHB2LEHMoDCuVapgtZ5VeuqS7k8vJHA5GBY3RgpuL",
  "key32": "65GgTjPSc1ydo6BADqKSirnSeM27pYZkUKT9qCz76wKXr7ga3uQYHmoznS3p2eEodKAGXN4Zcp7KJeGdkuutZAqy",
  "key33": "2zY3LK3evLRrtZDsubRd9eb2g6n8zpw99rV5J7seCpcCsEpRx4GFmVNSbWMfJDKnN6GR8Ku1ejD61fGHGXtya7T4",
  "key34": "553prteh1mTtGE2SQ96JKU51Fo1nbrLtbre6omcGyULEaoYwGXHBTVmmQjwfvS7Ng8QKN7hhCDBFJRxXXazLMmp5",
  "key35": "3DfDKT7LbQnQ9BWTmCeFa8cwrnQT9dB9qQT81d3UiB4yF7FVnUW7N8dHum7nGQpZxksNLGxhEtPGigVkJiZvWbkr",
  "key36": "ECFdfQLb3t7bLxzqF21xd1yG87WNv8QtnsrNtMAy7hoxCrTedfJojPy52hptnBVt5dDS5nBx7mx7rfSQXhGY2xV",
  "key37": "4fLJ3m29EsE42YxBHvqnwtRH8ML9uwwZQZRnhX8qsySXdDpWXfiBn7bygJTnrmKrsxX6EwGe3VQo6XvooFxh7u57"
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
