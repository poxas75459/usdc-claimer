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
    "2BXAhLTPv6uT3NbAX3EpKN3sAVko1RMm46TFGoncWmxoR2J9WmzjPD8fhN75cHKW7dRUQdv7RgPqAGSBt6mPhSQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGgLkCXAFYn6oymQ1Hr1MBAiYUEVcBmJSa4K3gwhPp3Joawx4a3gnNtqPQZojpnCzSQ2HKSRAxRmquA7Qip3Hy3",
  "key1": "2phemJ3idFsc457U5pbT9gwk8dbBwHzGXdqiNDvjk4qCSAg6xip2WkQigQGsFYJ9nfbuuoFjgGoC1K7GLdtk4iFZ",
  "key2": "StZyfXSbJYPnyVeSsGaiEGLvtqDzFLSrF9UABL85SyC2G37NNfPDeNg155LPt9YffEsZQDzXq56YGz7VU67Tibn",
  "key3": "ECEB94tyeNVm67QNBDcBm6BmLBSZ5YmtLfNmX4PapWxw8NJx1p3G8D4hdUQeKXYZFw6CRyYMdUjfL2M5doJjZ1u",
  "key4": "4uNGHDkdjUEmTJCzLTQMjLgC5eg6bnon2dRR3AvHVxrBgA77eCvJMh1SvsPZbkyV68oZ3XVvGFxykZ8bprtqeuGq",
  "key5": "2LN9eQRwSqiQ46o8QnMzNfSeCbx7eXL8R6D4Z2kmrjvBTE16SzrgHNjUE6Ae2B6dJdw1rSvUxLLiXwKoaTdiepQq",
  "key6": "5SbUKimkMRpeR6oExvkXVVqMQyWcVduwbkaRmAwZrjnqNp6B3etmfvrAso6DLjzcPURejWLvDbaPiNbRqBys21LY",
  "key7": "GrGvfrQjTpZViP9jQhjm9jLAiAvdy5pYadLc5W5Xozvf34bgchviHhZ3w3HpUpDXQb7AHBTs5jN4EwAvSs36wkZ",
  "key8": "4xpUaETMyDxj2Li8rUsRUY89JLcty9DhwzGRWddC8gfdZBjT95hVsw4iwsjZ7AeDjj9zaP6oKbqV74QZGBEKhJbj",
  "key9": "3XmJWvzUg4wEGWrxkBSXXjM2eF1a17Ao1DDVMrT1GVNkh66rRUL4FKegeePxXb93A8KgCHPbZky3erM4obwABCej",
  "key10": "5E2ZppxQXNHZVzUFaii3WDroSsLUBU2kwsEQVw8cJrFfmrEdqFWi2KsE3YbYccER52gkVMNGxBeZTwQ1aFqVaJq5",
  "key11": "53ZBBUqEz5Leo6NrVptPv5GrKLUcHPmjcU4eGZY6YYreDUCfcC6ghkA2uFuNcLRoL9g18uasQD676pRSrRC8UA1a",
  "key12": "45nFCC1M2WgErQbg92JoYRdhrDxetRpuY8qJWLbwE2jGUsagHvieqoYoCSeRW2xRYGdX7HjASwuwesWJ65zHVZwt",
  "key13": "3mKvQg2Yfh9b2Ejzxkx1JwQ1gLnj962R9bPfUDgP1PZpmPDby8GeqBPi7K8e6HDNw6twYvJtammqvwoTF1usKReC",
  "key14": "5teVw8MKfYoQUJAsUVv3DEeAEoCJb4M3KBWVAv47fkF6CDKyvjKaTEQ5Lu5TTVsPf8GV38mZ6w1QAXXAibYE1RXh",
  "key15": "2yAafjY4jS2iPqnJa7F1dsteNzYnBVzq2PffekgZR1MgHcJx7LWZSjzZxv6cHZ82xNkmGiqGY1WtUdRkoximMDrp",
  "key16": "CmiAmAYomnTgrqhJD3NGi6KncPx3gSDN5DNUEMVLPdMCox3tzdXeXTq1vudwu4NPV1k41vxL6oQHxq6tbQETLyM",
  "key17": "45rdZvFB4W9nyimhRcaWc71F1zxd6aUzHJnGTgzPcJeMkUyGyAoMhJ1k5BHRohhGWZ99sXM9Ne6gFUb5goi6kMLY",
  "key18": "3yr46wb35uVtNWhWEY7frUHA6eqtymc9SQN48Au39N1c9K6qYJZR4VnVe9mbZdNekX4oyyqDihD77qJvkUfArJFP",
  "key19": "4gE9YfzMqCdRRFYn3vmVakG7xefKEiQyDRp3CTcRRrugGgfn3trVJBMDLTv7CqZtQzcyxgDJTWtqzdnKETHUP2eE",
  "key20": "2TeDdKuwLnJsx3gbaWA4fiQSZc8uSDo5g6TiYu6wqyf4G5w6DP1VJqmaENRrssweHAyDMTctC43d5zgbcAPUeDYN",
  "key21": "2XuEhoPTG2NAr28jG4EaZM4HjvJhgw5L6DjrrdGWQMzdaKjUveogXHokqQf93WBKwHgavG5VpyY443M4nnGAGpdo",
  "key22": "3WggKpDc1AA7DuE45wr8kXwYGFVjd7EBynD76NuzyNqcsyd3xew8ER9d2GhdJu5E9HhmjS9ZcoQd7yALe6wGNGGG",
  "key23": "4v6Zry8fitBSvaFLH5pdj4qhfooPtuYCXyznXKtWjjRACYPMhbFLNrm5mjzwrG6L8ohHVHkJpHG1aipZS4NFrjYk",
  "key24": "3YcvHQTDKsQS8jMBMvUuQxXV4n3JeJXjPhFWUyLyBK1w9yojJDpo3N23fxCEuTxrv7iS1eaxfGjgHdzs4bGzJAjC",
  "key25": "22QhSCGmDwzdgJyip9jjEE8qYXifQhZFeocWFiTX4Q5BZfk4FDnc5yGRZYS4dspJAMQiZdb1bZNtpqPThC9tAcgQ",
  "key26": "4CbRBnQwk8dKcubN8qcxQUQBVVu6NB2v8HLcL29oyYiu3E8DQ2NtCMP5KHXsWpiXbKLu6RGkGKfxJZcNxS2iyGDb",
  "key27": "45yoVoDmzJy2HJPqpLgFZQR9Mq6R5TDmZuak1qFGj7XbTGauQpqVzMYuW6ZbwfaVTG8mNsPrdnMirtNVpA1oFuew",
  "key28": "4ct37epx5nfMHrugAXZmEsLytZjjwZqmsYbSdQm1f1mg5ft2A6jfssxMT7QVpvysYUgLdWqfJLrqDXoR7tyw3dJN"
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
