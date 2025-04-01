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
    "5icckQQf8y8jnjMzV7KjVPSPwmYhFeURVsZXwAUKZvyQNBqhcYq5RhzhdqZoD2ZUyTVaYiopzcEPawLXUzpTFkRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMQsGXz1jFAJvwyCWjcBSesUzS1vCjM3eFyPZsqYLQa63Lb8Ugz56iqGXNtH2xayZoCUpVxhFAouaGBsBvkSyYp",
  "key1": "354MvYwnBuiqGxeVM1WouHpRYG67qTyxNzjeuLEpRmQVHGB8d5r8xXva5vPFT9SYQmAuZnTCVzccg63W9YwcJywS",
  "key2": "59US6Yo6FYTLPA99nn27DJX7JfsVQyWRqEy5J9AQbRwXrbZdnRiLbfEZkR7wSewkAqCBfKokvRR2mmDc4Kaz9S5q",
  "key3": "rGvFED1emScVvQFmGyP86VZBDcWkfJ3QTBzFDHsmn2eCU4R9RKpQrqwNVQC29JzZErwnVsuZpUM3JyQC1Fi1piw",
  "key4": "5ng7J5j6ab8vVgANMQi1b8BvgGFg9VAdfdeuqonUhodjFNhtgVCNxJFQSQV8Anzg5dCJ3FY5p6s6Zw8QswKPTa7H",
  "key5": "4oZ59spZYp27djUpbaPAwyfGMzNJBNaitP7P36QRvSNsRwJ4RqPXeriW1qecBjr13j7FYquHAbD7rQC6tprwXv2r",
  "key6": "354g6ALJcAtwxFZKQ1VouVm8WB2SeKK7r1UbazCPuKmCE5jVCrhv7bTriYufP3eYpui5K3DrhKzkvtJx1wPij3c6",
  "key7": "4WJJg4nQmStsDabQGRSXYNBFepyK48XUDNLM81xMJ1eszLVPUWWC4CJLqo1TaYzeXCZdj2RSB1C75Q3sXnHWGoBr",
  "key8": "3yE7Pgnn4GaXXJw4eCgXB57Qve7KyyXB4pejfstP9qFuCrHPDCTpBPVj7Qs3uYrpvZpitjytu65iMUYA5JJuoPbK",
  "key9": "DVbtpXsn4qPfFFVjc8gN2s3FgYHjzpcdCQxiy3Dm8M7W19xeAnhoCEGG3VBapJ8ZKRiuYS8hRZZuXioZqX7XR6t",
  "key10": "LGs4PUhihuz2ncPkcuLug3oS4FzY17cfC35eD2HsuAG57WGscQvjKT2sS4CyYQBFGS5pJAhXisK5izfXNCCpxin",
  "key11": "5oWFriFzG5GBAAHR64hodiQmyZyFKVS3fmoRQezf6jymCeVBUm9AhLcbtuJxE4w4gG4B7XZTMUNs6zNEqJUGw8d8",
  "key12": "Gq9hjfxzMFe1JuxKTGndUGVxgBeD3jd8AMa94vquYA9g2FGMVmnNKNUS8Tdqqr2TCL145wr8Njq9yZJbhcsmy61",
  "key13": "5MMM7RHxHPFQkteL73B5QFEHpEdfXP8yF6C5tzsWpwbVEhYzGghzvM4cFwxBvpW81aJ8qtBANP8wEa4SLDVciNJe",
  "key14": "5hXtNf51f2zEYvcBzNe62ndZWovduY5qQW2TVHFAeMJFu3jHnphxf2jxoNZtdXAgLycHnyUFmeQ64E8w6noHyk6U",
  "key15": "4GmjPXpG6zYWHpXWbExGS1K9aPg1tdAg54igkExhpWqPvmpkj3VCRb2QUAz71JkBxyfMi6ghwZDWcLyS6pApjij4",
  "key16": "4C3XvH6gxiXDMipBt2FguKrnyerQRADDMSdzR1f9dckLY5XN54PFaqD7SyuKkD5r8Hr9437ykh5fXhmid6jXuLM",
  "key17": "4mFxKpgzHUpBWMF1qgQALwHV32nFZ5E67fn7pJFt1M7cgkitrzMBaxdhAPUtFuE7VDA4x9XHaH9uY5drSSRAkpid",
  "key18": "4XQJQWTgwa6ZyBt4KacZyUT32dL1BWjsgJ4iWR46JwpW63HoSCQRjzNaE8XfkfRPK2piKbjcWZLQpVbAPkZ3XQAA",
  "key19": "4yc3eHuZWXcqs1BFDm6CTAe8hwYXkEovCzjrKEfN4zcHCQonVcYrAp4DJYrC7168Xxh9vDwhGGnnxzwkMCYST5vP",
  "key20": "xLWyn9WKFEpyiaR2L76nwzx59sRbYYCxQofNeDs1HJLpQDg5Ny4JCvr6gbgC5E2wgcA5ELhgZaAnnsPQVbMXFK5",
  "key21": "59JcfWd8JgjAhYpwF5WykRPKPb9j57qGxtrthKmLBHJU2gzQ2xLvwKbCrbxyHy4EUeprpxvzd9mm1AtnEi1PAh1Y",
  "key22": "2dFtRzHzZU91zzxiMhtbjqdogTUXtCCXFEuDuGdvwjNSxCWGcDA2TewiWpc2fjnW7KDT31GeqjN2Bjw3QnGXn5DN",
  "key23": "58pCWzNyLPqDWeDZ9a3pv9RFaHHGCAWHq4A9CFMnMu8pTB3RujrEJHg5t8T733vdeznWwFEBYymXrPPVet2G7hsJ",
  "key24": "5Byj5ZcvrstdKwy8hsSY8uDcbuFUM27UAcwE37ipuTYC4ys2wj3iJ8hfw2vBo7sP2LAjs87eWSaLRE4iPLamcX8w",
  "key25": "2eehMKSFQn4Umrj3qCEoTu4vwjKUjjKFnuaVtjrb4EBUGS7Cvit6x1Xm7orMZfvoz8bRTX32CxM6jTB8RCGHccEH",
  "key26": "5rhmNpMS98YFG1rZ6Mor5x1rruPVH3syFWLUDR9oD1MfuPmcJijNJ2xJSoQeih6CYZxvLo3xmByBkK3cm6Boe4va",
  "key27": "35UJx2NQYNdXCFLnKuQry6oLiBX65GjMoT2QpPf83dGBHeAHePuPyDFPQ31KWVatgsPqRmYEXoPC2MXPx8rKqMaZ",
  "key28": "4EQVwp1uMah4f1vV724mCucngPWTEhpnGnH1XGEAagxeh6DvxGYDAC415T5PNvCRcEjVcLtrWbFXT1QHFwSHN7Ug",
  "key29": "2CTJmwuUv7cJQiKuzvo2UoocBG8tbVJ1bqckk1PH4jWhz4YCwoyZHLUQobYt8LQzNgRgrSBwV1c66qpBdqT57vRo",
  "key30": "2uDLWu5dk1SC9qKSLc4UAKsQVNABJPcvntoqLHq7cMGFJvHWwpLt28R8gmjXX8Fi5bUh8htbZGE52htyZTE64LVk",
  "key31": "23dt4gAqpgdK3RSe5pBCWsg54ceSzaStxpV3i3ijv9cmnDbXc8sbfDtQEuVPbZQ3sUEMdb2Uq9kvNfhDzcapfLZ4",
  "key32": "5QTqbFUq6qmQUHr8v3rb4XhosynxCYLtUA9PzjbQYRZCBd9TCSu2o3baUd8A57TEiYkHxyQn123yePmaDuqVTuyg",
  "key33": "3YP9WguXfLVexkMWUxyKvFJjncKnqxg4BVvSLnZvFJ9krxow6zR1LpuTYc6S4pBBp3y2mcjKF651A27wXLLyhH1N",
  "key34": "62R5EpLFcr1ZMvcfvQLi1utdYbtzH9f8qH7BYctXiZthvhwLtVBjKJrftEFBQSHKqjxuG9dHTKTHRPJt9bzmp27o",
  "key35": "5ckP3nyZnSY4NJgbHmKvAZZSM7qGrGYnjPSJQRYyTEWw5WCTHCZVqwsBxq3UXsrWLaEVvMrDKpToy4ScSx6MH2YK",
  "key36": "3eZs21NwrCcH4mV5sNmvEvTBUByqxbETggwQ65mN58EUbzVFSkB2RuMDdpMTc6zPV9DNLHTKvSpH8rbgejrBJZq7",
  "key37": "5EHMDSdQuk1Cm4qYN7Vi8DhycFSQQGQJyEXNti4kgSup2Frj44YZeDBo4hiqHfEu3Q6eH4f7bLmf1kpWj9Hz53XC",
  "key38": "42xg3Akgsk1R9hRkqRX64nhytjBbuQw6ztb8QJxRrg9Mz9BE5mdRA82W3qBXJU3XcJPoXmok8zP46ZNGikd8R4qK",
  "key39": "2csMV81To24LX8YYFKLHVkqhQXiJHdTtDya4hDZbNhdLNsgyYKvmreJA1NNPGaPG7JAT9Yw1evf3zouVNAjhh2pt",
  "key40": "5eqK8KL8rbu5vYAH9hjP93CwehA8mwzNDQSABhg49MQvSDkc8Dfp6JajfjMT9RabesAF7t5nbNVeYcqhej3aHzjC",
  "key41": "2LCDXRKPu7mxCYx6B1RcdZ9zuADo2GCSEFb2F7xkzinz8jLHeU4iE9cMi4QV16hrkeXSoAu1sLi6Z4F4KNypHNjp"
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
