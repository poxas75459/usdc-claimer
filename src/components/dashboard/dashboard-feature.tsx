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
    "4MqDktkYs9fEMEfkApRgiSsRe1TC6edrdA4bxjypfKzMvMoxTBNixYyqTwVWunX6ijSVEte5ccotueNHkQJB1chK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vuwvcFL6xkquCWBSMqUXpBV3aKKAwpG7MDCi1KSVRxuag8DVvcVvarzjvxfmeyZhqeKFd1m3h3oJmjf5qWE6WtB",
  "key1": "vySFaM2NH553S9qbG2ztNEpBoQyfTiCo71FxUF9TXxuFnLW9Std9cvDiYVHK79Yyx9VtBNoquMJK6xCU7SUp8kC",
  "key2": "4ATNa8T2QpaNjK1ENWXRRJDYwQjGi7xrmxbm9oNwmPMRMprHLncHqpf41ekL5KNZMTPDdZEeyaL8R51UAsRMQcqf",
  "key3": "vzez9MKqTx2ag8eTUDRwEDPxAQF8pCfN35TJmgVAUwwstQLRM9GVa64JBWPoSBhwXUfmbULLpWu9DY3YY1f2sJ8",
  "key4": "3KeLnMW9XeCYm9aDp1miSYhrjSchR7WFUjvq1bU1dWihpk54keuvUzhgEFQJE5FrC9YbD94Qevh4JNScPjbDYVXc",
  "key5": "3wViizx9RaRLMP15BTETSpgh2pAebmGfs5vZeWaYNJNnUNgDDsh87XRUThEWDimp64Y4d2MTQXKfGi2aTenB9g8q",
  "key6": "22Tv7t3bLPmmu4EtmX1oVfrNaKnp75ACABUYwGQFcy8yCaZke4Abj1z8c8r3PpTJERHpv2Yjx6YBwqCCVgWwyZXg",
  "key7": "3TSgiU1T13wEMDs1oNxWPVER1iZTJKUCJJkM7dLBJUNP1kwgcpKWeNGC6F5CgrBxMWFe6yWSXdqoKqjFyUF6hfZA",
  "key8": "3UeEvfW2EfnFUMeb1nLwiPULWcTYMyPMXwrpy4XXcMGWfXETs4mWyxUoAB7Q8Thh4nNRPXLoJDR55b3knDZpTLC3",
  "key9": "5iHxSgLt5TPjhJjTwgLdkPyET1kMx5SF4VrrhBhR5FrkfSaZi66FYhKs64cMEZdR1YaT8e2cficq6aFQKLo59zj9",
  "key10": "eVG8EWSUAeAqSHKyxFaGtPqekw5cXwX6xm7ebBaYc3VPXaUionKyL7NzUDvxhtAjjxws6aGbXfWkzb1sXEVjbrE",
  "key11": "5L6eQe7A8HBK3YXf3FQAp9gZXB6MuRADRNxVknNMTSERWJRKcqAzXBhxH7Q1XFbH7Wk6hr1F8am2h4kr5i4FyUdV",
  "key12": "4nnmLvRoM9bAu4TmtoFVrq5fxueVnMNdrmqc8qnuLP3GZLgxtK5bam2KX9GY4Qsvst8ZDDKNLvVjUaNQ4BpbPUrg",
  "key13": "5BD921twsxsBt11k6qsbUbsgbmqv39gaitMCj5QnukTJVtgcEftY2EG2FFB9E3gvPYo9vrN3YJ4E9gMFTSDeanaZ",
  "key14": "2pDmAzJ9J4WhUsaAR9Hv3cXNezF2rY6Z2NKTSK9C4LsyyTcJnSd4JMBJecpXuZMDpNiAJ7HVeCmpeDcxKxzYSUCD",
  "key15": "aXJHo8gT3cPKQsVjtsnvZAHitGNsiub5rk4JdZbG88FfLrFpnGGyWWh3ZvyYwL7UavwRofVguvHeMYNcrZ9y1iG",
  "key16": "5kZMfnWqxzGcmgqA6e5BZcoghr8GwYozTW3f3APxW9MATcnviJafLi3UKPNuakohDab2Gvjs1U2ed8EVv3JQtfnG",
  "key17": "4U2ddUtNq4qaSWE33dMo7EczvnixPCEvGJnWgUsdj19vJrxYt83cy4iPag6TBNYgVydBt2eUWE8qJgQq7k866UPe",
  "key18": "y2SEWCrEXhB3qrqQfxqhHpSqZGhoubJGdVmQTgtgxu7RJGcafLf2nAGAwarcu8Q1uSoDq7v8MmeRVHKwp7JF8bJ",
  "key19": "5cCMn254EEXuWjc9YacLeWkyq11zRCSmpwV7c8SRjWcRett7wqpQoooHhkoNzbQS7Q4R1vmCDUE2eFLakHPtFBbL",
  "key20": "3ehoQCWGYAAjTJ2RsxTK6aghsFuZzH51mfGR2XHj6VPT1zSs1FUHGi2Nqfr5AmDruaFKnRML7t5qNBB9CDqsBfoN",
  "key21": "3wnswu8Eabuhm7AjFtgnu8Wup5g3t2gqG1kN837zWH5hFnhbgh6wDiUY6gj3Nj18T6WJ81pbmB7ZJPGqwNfkeFUX",
  "key22": "2R27Sik2D1u2j7BHJhcBmzEhJWVK1E4ZyS6ALsHnmVSynnkh4GE4EiWxvGG2zZmMryxm5aLGkHcQZDgzoiwCXx4F",
  "key23": "56BUpmBEACVSzv3c83yL6Numb3ah5h4enNAXbbCeLk8CtUzS3EYfTSUboQKoGozkRriVK6PQQjQnKjoNZs2qRGfc",
  "key24": "5UhYiZaGfyemJKzHnBnxRacWiDJDch8FNNUa4b8566KZV55Z1hgczFLr3w6TCVDEZxGcqfVaW3CNRuo6jaGrb3Hq",
  "key25": "4p6eqaaYzcydmj9vLQtjfgviwLh7Ryo1d4tf3L4RU7dw7EMgb6Tm6REpxuPa1WGip6ufSrB3pYHKhXNQhXsJ7rqJ",
  "key26": "2s1PRNcRjVaT3fjzP5gHVkV3L1E6KFspBNnn89rTQWH6AUAHnqnp6Qx9HknxZwj6XvNWX8uuSDUqgmyA9kv4CGF9",
  "key27": "2EWo85cBKwrYtuww7zeetk4CyQyGssNaP6tZYFaugQeFQgkNXSgjMXez1uet1YLWfYPAWfZ4DoWqPrAAy71iYaE6",
  "key28": "5MroVuz2VPSDxX1XsZkTY97ZAETp5nSPQ5TUXDHFXTPyHAK5j26CXmdQXrQpB2vPzt1MQHzebtqr2sUeafFxucRV"
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
