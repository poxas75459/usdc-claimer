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
    "3snHxFoawBBr8KgxdDDFfg33FboVNvW7kcreK7MMSPZcm9NwUsCv9ULCKNZTzYfZNVDPyNGDoRTGcJyj1DTztcRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JW5WcYEriPNBhh8EKAzhzpEmrvQ3pQ719gGvifLTscwRz2nG6cooDFaJk76QbdX1dJ6dYLTrCFedrVE7JRwkZ3h",
  "key1": "5PXaezyAFrWiWdP5szfT1TRmSbur8udWKYGojC2beYeVo8HadJUhNCtuuR65UjapZXrKm9AGDf1tfDZzSByTuc82",
  "key2": "4rREmsxWv8GwHQ5zETfC2bz3fhJLFgh5Jvbd2aJJfAUUqX8seUpbPjEPZLLcfA4LfKyQRNS97BopuGDWbZJK6DH7",
  "key3": "53EMVzLdqCrGai8db9rnxWygfi8dvfAcwt5JpAxhB1WK3orD7vkZZnVSM31dGg7RgJwLh4in1qP3ACnxH6fbB8ZS",
  "key4": "5X14GenaqeP5bVrMfGjRAJ8oAF1HCSp1stn7d4P95F72Jk4hK1KhRpW1Mv9dZbtikAYmgP5CNU9DQYDtykG1MupU",
  "key5": "2Kv9uNq96oMMbFfuKEXyT83HCHFSTzypyAG81pcjSeb7QK2CLKKfkUgqtE2DcUZzcAATPZPNv62FZj8qRZ1HJ2Yi",
  "key6": "3ZS3eMfjCFrb1w5wBC5pP5weUhfhM6brAMipcJSiRQekuqBgEyq5TEgJW32xvvbsSSg3fHab6ceJrCECQhXeCEm9",
  "key7": "4ASMExHmTWbVN2X8cWrqgh5evdriKpJSYyDso1w9Dj8kwAffrhiFZdX1eoYsgWgc49gBTg24fbQnLNQEBxaWKywb",
  "key8": "59AYsp5qa5FXmnfoV9hJPEFHvFcpGB9Spean9PyA3EKuA8n2yKobu8y1JDmzsXi7BL4ZrmRJzcg1xq712UEbYnwe",
  "key9": "2YZCRNU7JT3TfSUPKsmzkUKfWsvFwNzRg5zGmsFvW4mH515Z6Ar9BdQ7UoqPjuASEQZNtZYsx7r5bdwve8MWoh4u",
  "key10": "3HZPApT7yx7eqZKpP9gAYhBDzGSPLmLuUXpgukSutnnaTdUtXhNjtMkNYrfqRBQjsUQngo6jHsz9xJpu8koNtK4D",
  "key11": "2GCXg5oZbjVxEdD2zEvJK24tirHBLxj4SNUePqMgSMtvx48PV8E9EUiFG1W5zohWAU4UCLtnk7muhRdcD5RwWBid",
  "key12": "5q6CfFA87s91juSvsZt81YWvh1PwFeFm85FvdvuVY5ywZvBuucn7ft8LkxhSCVqCMnRVNV2R7mnXNYhpjppfeWhF",
  "key13": "koLfoeQ8H4rH4HgvvNGkMX85YGru5JCJ2Pkw4AZMzsy83RCbGLWcYWAmLQVj5xcAYDzGFvwH1oH27HL4m8zdLcs",
  "key14": "3pPmRXhCV7Ys8dbuwskdeK2GuLkeF56wRqRQiAKXrtbHi5mX84QwXj3DE5rDC62dHusEu4Jb8h8YFuLYzuJF5doc",
  "key15": "4uHyH3iGYE1gbavqttCsE3tJQBMCQF1BC52447uxnUZcX2SbEJVXvKamZn5YLACGVR5Yb42CyGrTYmJD47Rm89mF",
  "key16": "3CdA97KKu4UzG4RbsQWPz6rCyP76esw5eBm2km5vKYEq8ZGsnX1Sy8195rcgNBu4gZ4p2HLKctAgxk9R5f75Lsma",
  "key17": "3hgSqCH8tWAQU64kMNXrPkdUnsHdZc4xAfwKS4T5Qqq7VppZ4P9XC2kMSqwwuFtdTyMGzPAHRDQDDpTBehuNxr5D",
  "key18": "4Q88PQfD8JzKPRdTFmfRePhjPheWNb5dyqxy4fjk9YdZvxq28kmwaAbupBQWibjhodWdAWvRxucT7dhDPUNmSt1W",
  "key19": "2tGRTfN21m1mTYCLgymAsPmsbaXx4XrKfQB341wGpytbQoAxvcHCcXUsFNXkDag2dRz7xQgrQZDFRhKwCTxQMQRC",
  "key20": "2hSyooTuY7mwchKA7oqXxgTgWruApdiWMVsn2qgmRLahGAtEZEAZSY1xvnA8JckpUAgyb81JivbKxdxhyMvefPLE",
  "key21": "5ywxquQj6noWqNzJsT9tv1pGVDnAdrAVmx1wNyR1xsLehmZ7G5b5YQT95RQXSVWHR2zPQ62ErfdqLNfPWoAGmsQd",
  "key22": "27C6kS5tP3DPEst6Qy1uj2hHccp6ueLiiDj5hJezAXjQfGrAvfd5WTykijDz6336sNNiYWCy4mfkvuYh2AbiEeVs",
  "key23": "4g8cWcrYW6zPK1trn73uuJ1vsMbX2DZgCYxgTnyHvA2RcEr3UFPabhcwm6B5T3w9GPZ1Y3jDmP135VKGey4rErVD",
  "key24": "3cbWXBX5G1he4JjbWX73gKE2B5DpHLhxd4iQVND34qp9TPwuH4jVrQDkZLNL4GhmnCzu2T8MRNEVPdgydiWX8E2Y",
  "key25": "4AEhRTEuNb4GrQNDiUxzMsr2ZFf6SQwJ8bCHhGrEHRbq4dVPB6hbGmZkGq22X8REmC8YrQAvJet4qbGewLWNJziG",
  "key26": "3nFyMeX4XpeM3qGuy4ZU6wHh6UJzMVUxW9GzX4C2wqkQSihp3aBDbGGCGahNfuDfZCcoeuAQAdAGCQ4T5mona1M5",
  "key27": "3FSqpVw7EKZrAw6GRmzGgWetpeJvRC7r5z4XehaCazbd436tconTdNgrdgzBjkmKj9A29SEtk6hFExweHyJCTaTi",
  "key28": "PW25T3QT9S8iJSwnmDT2BtiG2YRXVQQCRH63Vm7JXUXjoKXiEHsBtcmRdcdxJwvd6XpY9uAAtKLdVj8h31F4fbc",
  "key29": "5zGFAGLsF5hQFSLi5ecya7bhJMAcHSWYmvBoz2hDSbyeQGgxeEYWLooTAdgrCJ3cgHNtXatxNZad1cy7iKxoyAGf",
  "key30": "63HNH6UyowisCvfkr2KB7qmegyccK1ZFp5Xc9CjS6Xujtpcwcg9sAzbYjtbWt6s5wGHBJsFpVvWWg51mZoMYDQzm",
  "key31": "c1B5rtWw5GRgatj38M1rhpRLyMKak3aYnauQ7QU9GdQt4ejbNNcwmGUXyzdaJ9QADEx7Uea1FLQh22h6LpRe5ma",
  "key32": "4vwKh7wvtKHMVfp7RxNvmoH4FY7UmyBxCiRCKzkL7fsQp7NdksbrfjwBKgPXHofLthjvAy6Wqa9TCYm7nH9eeoyR",
  "key33": "3E6MRF3f91rXyHFSdHr7x9r24GrrEUBTZRMZYetWZexSGNps34kbFRsptPYARqE1WcPgQ5Ruo9MBh7wfW7WvEEBi",
  "key34": "518Ea45xVGytgVq8yg9FzCHb1uwhhdk6CTtJpRXVCkZjyTUFqotLx3nTJdvFAJTGSRuPHwCAXV4ds6bo9eVghoc6",
  "key35": "2sfjXL4ahDqroCaPrTLRsxe3jY2hB2PEWiRGUR94fYemjMJaM1cE892YehyS6LFe9THDLY7uVzStpjUJrTtkNyMq",
  "key36": "u6UDz7jm7Y6JpquSHPbTiATjkFbXC7k1aNjHFhaqgZg8xAi1yWYwgase4VEHHGAmK2trG9zPEx3kwyEge3K12Uj",
  "key37": "3A8C4BR2MC6F6EVzU6c7NVnNgf9PSgd1xtnqMEKR2KMBA5vmKkPmw5z1h4mb2zJcKYhqazmixLn9aLdXbEfVRT16",
  "key38": "nsmqQTk6J4ihKxJKcwH2rEgq7wdJF7PPh9hyBbKD8cPknrSJGEJ75Y9SC7gWrwr42GNFCXNrJWKe4KCY1WFWotP",
  "key39": "3C5BMF8HinVneVVjnV83fuSbCwU6TcVDv4XLbKmjgCozrHYF3FyUNHu41r3fSN7GaCqAbbb8rhDFbsbRQuXb6CPp",
  "key40": "55sgrReuF5A8zfAj98adEemHhiPoKZk2YqYFGrTjdNvEJBpKW8o3HAhJHTH8ifDpavisvbw7KTi1XpYx177Ve5r6",
  "key41": "2BC6RTaKjduTm5mVhJYHLYR3BkNLLHqmAx9Yut3N8mZSmZpcZkFvi3nxYnxREPCGq3xRi77mhCvu8LHYzKpWxFE6",
  "key42": "4GWRAgqTbLR4UgDb2Sd2g53dqyQaYXaCVPPEZChqQyjoAgQr23VPjNR8SJYj55pN3qZYLJN1CM3hxtkkjcYWBrhc",
  "key43": "5UcKd5aFEjkmG5LBnQ8VNF6C8mrTtKFEUkSLh813HyY9ZEDznsqopFCo3uYaraPLPo4d5ubH8gA1kydorqkaN1hs",
  "key44": "WaSP19aju1RYYLAt9FuDNukD9p14zYDNsfFi2k54UvKhCofGpGxzXiuAWxUhMg4vMZaYtPsnvjFaNpHxigxUhad",
  "key45": "2KJroS9EXMtpkE53sr1jiDTVHKL2RpC1mSRdGbHQGMnEMsk9qEVrUu33Ztc2oLwv8YdD4jJS1biXZRN5rnx6Lt6c",
  "key46": "2eWhTqyHHGUNQdZQkmD9SpS1mhVi3n5oYVBvrj5wozZHw1Eg8J1smr7X3MT3XBqcj5Va4VcwyiYwvJkxi7gDBuX2",
  "key47": "xzWnc9mRJFJEu2mUtW9yrcDz5H9713Lvh3UQNxrfnAS3fAAoiuiJNu18dVKHSfMBnc5t2ibLtt7JR6yKdrcSWYj",
  "key48": "3BfUzUmwDjYe39U7Z5Vc5jnWk98htYyXxrU9U6PZdSwAoHBpFzYg4QMymkixQuxSSTMytxh3TxFbhWNkQbLrA7FC",
  "key49": "51LBcizwdkd9jn3TVWAPMJxhWY5qimPdCPubYCU77bVDXiTmBzTuadnM5uiQMChwgagt7XZESTM3MuwTxQsEGvU4"
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
