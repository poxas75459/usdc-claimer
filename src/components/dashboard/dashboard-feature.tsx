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
    "3me3SVm2aChJgPDh31d7UUcnbNR8wqL3igc5uo16jt8YfKoroiQeChnYksFxiJabJUJ6h7i1dXc3xbvd7BXdkYRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9L8kp4TYiKF4ngNM6H1wDbYNSQNtR4CGkfRYyhhVeF27tJPmrQd6Y63MEGHAx4BikGxbFZYxAAZaWLmqozhdrs",
  "key1": "23y926Yc8HLC7ysUnN5n2QUB7P2qLjN4UU4pxmupAq9QbEvqptKSLetR9cMiwPTDiepNZ5hMT5u45wYFGRbf8obD",
  "key2": "5BLYGr5uAnA9AEjsGB9XmZjqhD9PgqoU2JVFkjkM3Tp98Z6yATQsRL4cDKgsW5kkpNC2rXu5UoKovBVRTbEWxmJz",
  "key3": "2gZfziFy2Ysani2ZRvuYRwSsE23UVvi47QLfP9Md831Syugj5m12o2Jwpu6rGDm3byW7fEQU1gW9j2TsxVa39Gbg",
  "key4": "5wYQA4pzoLBRbKxg3NQ357xrMtvRG6vW2hYnjZAmjhreGG9yEbCpJuXSTeSU5pWSqjwsrMm7F6W2Rv2c3Lpjzfjf",
  "key5": "4MqrMjg59GAQtnMX2QWUagUk11PRDbiS7kSaF3oiSkxkHE3HGXjTyXyH4keioWueej9dP79FAuxM267znZ7rSVUD",
  "key6": "2qrEXWd1xn4shSbgipJLoMXMhyZoGT6ALEyx2oDhVDBQ3cS6RhtFmXcVdF5ic3PFjWMezJNPQEp3T4pFACQYhZj6",
  "key7": "2yZPKJeKGUhJv8E1aj6ZhA64WdjKJC1aihqzGwZj49NFRC9xqRPWsbxfLJbxXEuoVPBAXr7CeLWVocg3vWePwW8B",
  "key8": "3VqpDCBCpq2nYREvzHKcsDkz96BB2wRYyx3oKYMhf74hnGpkt4un4Zurh9d8ptXgcEybwMdW5DUnVTa496YwK7ze",
  "key9": "48PFApBGxpCetUwqLb2ny9dBXUpQ4uSkTrFciN4VQ4g52QwNujCUemhjEPGkQGT39BdPWfQxykr9d2Q38joiKCnX",
  "key10": "UJAbV91Kj98vRbpXSHEkCjqqtZ6xfQdoyfMMakkA3BL3FprFQFG9d8sdRixKgbeLYnRv2ST4U6hxqbjwRXUwgJM",
  "key11": "3oNuPn3HHNu9YshtPDcxkqPyUo9Zm4efSm9rvnHUwoBX5NgzmT4piiM2UN2UYG6ebdRa8ZESXV2rbPPopBpdJSsG",
  "key12": "5QvrJrirKE5JLbwrYNCduQN6m8DN4gxdTmLxm1StoWqZLxyLUjampy9t7E5yn6Qp8T41X5TdCmUwEgrYL11XKL45",
  "key13": "4XV5kgG4brrcVb7W4Kw1S58xiRorhrCjNKbyp5Sma72rj8hEKqaH899PWoLPX29ie1BcqDDPNLmk39xjMtNxv2ni",
  "key14": "3dSCXyxz32cVDSCfdLXVNDAvxbWbVQP7WTgBtxVfDzBwJYSQUXKFeFtHkYA7Zme9otCMor7N1rVvKNfC7gG9nYa4",
  "key15": "5Fwr2Jpu43kf5WvS4fk2nB8WDNT7NjHPchJZsrz2fSGrcYC6Zbekn66yi23AyAjqVjEVk1SfzgY7AAHENw4KYMQz",
  "key16": "5Z67PviKWGqx354qV6rzuSohCJDiB9fyzWMeCEShcL33HdmpDoGcHcdB5EQNNQTnCEGVhFFxSUAs3Zvoojp6k62q",
  "key17": "FiyLErVKbs6bfks4Z3t9gWfvCnzVraQpuPoUtTR45pexHz5WrJ9HzkTWWJMnoQ3jDQwWShaw17ymz2WSKEyp6pz",
  "key18": "3UrZKsbZmch1RCECAfyztnJXrAxuyhNN1CCy8xrGh2dhYXqtDbfeV8C55Be5WSLGpTN2Znjx5XKUxphqN7HCqwyH",
  "key19": "4mbi9FU4JpJHUpPRVMhZYho8QaYnJMtcuSMER2oVuyWcN4qFD9K6TPcfFaptAwCJ99ZD7uMXnFCNHyLtyZDi4Wh8",
  "key20": "4i9SPfsRatnZtiMdULjKCangEk6knqUiRWGrzfcGXSe7tUCTcB4sRvU56SBmzPqJaG3FfgH1iv7qGpHAFLtb6ZJi",
  "key21": "d1Pp23EsHgkiHPsNysCNvV2QBaEuFiGpRLRCQ6WHaSEu7BmixXedv8d9CdFxxuUjitP8DJwmoAZ8qTwviybEdfL",
  "key22": "3K8dS3pRSTbe31RzFAg5Xzz6vGJDoUq1cyhEYK7qXv5pJLKssrjCGmjM6Sm34fgUzHAzVm46voojAyaQDi9KAxS",
  "key23": "3ArY499H1XkEXCxqFCpAnPzUFTdGegnPt3SDd7Amqgm78UxNqHtALMYNcYsaV6YvLrS8hpDCaEJJmHDU1VUnePrw",
  "key24": "29dnRFYLbivCwMXBV8E6QYx74AVpdsXkoFKmpJ8p6BKvzWg8KWuu5U52XYF9iwGfgXZDYAHTjcXoD4nk1VsrtCJQ",
  "key25": "m39dMydYLZH7tvGfLQGhp3dZi96vLUSvY8vYvJwkzCfjgNWJ5gkGMsAvGYWy4DoZt7wvL3M8vCFUAi5Jf75dwaH",
  "key26": "3S5cB7CntobMiJx3n9GhhSCNAxehXMdujQVtWF1dq2UVxfDEDBbbkLPEL5mh8oDX2a388FEUqZ4edA8MQLhSF7Jd",
  "key27": "46HoBLtLKg8Lcdzdquq94x7kS5LW2JuN9LCHDPsoUWnLdgSnzcvRmgj9QmPxe1d8Qkb5mDfHzqGpCQbHdGgtsYcQ",
  "key28": "YrJsSQJ34cSRLR9tZmtD4BJvfJxncEYc8birACY1NKTqVq3FSVzmZacX5JoznvEYKdiYm2uoA2Ccwtt5k92Gj5g",
  "key29": "5Ad9PneSMjKBraFKwPSej79CZMoHs6Mm6jorTgbNBxGg1dtDEhwwNN3wnsxAQp85Jh5sFe6pEZ3MjrZM1EDGWKE3",
  "key30": "55Cwr92MhDodHdbdHYbangLUQMrLze5bWHQuJDjwZtvqfFQDRPZJQaByjB8owfnDaMbR9kWLavkKVhVC1vFHYUnn",
  "key31": "21L7iG7p5iBDaxkp6zw73CdJp3BEweL2K26W46qPixFPgickuEnNjAd47fsYNsp3apK4Yx13RTuGRygt7eUAR9Ln",
  "key32": "4CtcfLhkuGLoC4EqXB8XPLgfVTpedvNppuPfYAJr92LADghFHC9GpLEN6PSzw7yFH1WRHtRMBtxieDWPMmPdHb3M",
  "key33": "2Tp4suNpWMMRTr73uqmhJtaMxmo8YQTHNyuUPpjPCAo8yRFTs9xEKfk8mzxSQLfsAMNWHYHMbJeQkbgH3WKxX7o6",
  "key34": "4mQpQ5Eq8qC6vS4dgikEC3AFvrTSeP1DAT6jTxirwmNRqp6ZNke9C47CnyE1AkZugJcK88cq8Z8CxXUg8fLdPT5x",
  "key35": "2JMN7F9q9aDb6boavCeFUFBbwhPhYDFyo3vYmmthqHToe2rGcRaNhX39UEZLE6XNLVVMPtWGvsX5vbZqAntLVFtH",
  "key36": "3HqDCG2c9Qca695GCjhs1zK493G8od4hzpjCM54kCeSW29bwAmykFS5VeFVTmXcdxpgy7XGNbodofcpX6YxdKRM2",
  "key37": "3QSr5Udyg2pmZrRBiUrieYcfhoDLSVKnWmv87dBGpiKE1rqgWEm7we8NoR8Y8VtvubZkBY82tTTF1jfCAxCSFAqE"
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
