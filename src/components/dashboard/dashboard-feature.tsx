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
    "jPdRve3zSL4VYgU3BQibtWJkTV6nyuRP1toJZdTUB6YtVizjmBEcHkEJWboEQ3LYhUvnf9J3MTRMQk9Q8Z2Weez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661EA5kSWwJ9w2q93RoPTBa6rESE7escZmxH6pcUdjJw7vhx9RtZfkgiNujww6gmKLUME7tsYQApkzw4dTAAkHch",
  "key1": "538rRYiYzTxczGhxfL18RS1bQVdfSK5sH1p65QJwj1bpdyESB3sQ4cLzPSMeqRgQUVPmjVrXxd9jiPedEvkmwLm4",
  "key2": "3C9r9msf7kvDD7SXkF5UoTZkQeMHDbD8WJh14J8YHhbbDRUVSttAZMi2APBLXahbJFsyXPVQwXiCKMtp2GBJvrFh",
  "key3": "5hLeXsY2m7MsCNmisqEYyUpBRn1NEkEJ6DD7ewKk6mzkLfcxd56y7LmHasyJ1gukUpoBWB47kSobMkCkoGj3e9Jo",
  "key4": "5X6PotWxt8ZcXbPtsoeGckdaz7u9R7xvSHALcQpPpEJwrBkKMoVvCeJD328ZhzzKibLY66eypK6NSSedz2Lccwrn",
  "key5": "2LSHxFYDfkSze4xufeS3HRbe99qH76pg6KUohhVSLqLYjKhD6AwQywGpnQC9c6yJ4nf4d2z3LvEASsmy976ryW9o",
  "key6": "eoSfN3fQ3YnQQYUEcD9r7ERTBkTfxj4Rin9aoFxC12Up3Ghonga5Z4FRzXN8T8JxLQeQBiRHy8xTFbj8XmsSk3W",
  "key7": "57Z8oVV4tDQ52jFVst5ftBYdaTKsyc7eWoMFPAJXhUCpoqGojvs43bqgJJFGPDqmc2NJ8KCiFrScE9YAe9rgiKDH",
  "key8": "2W9uHhHnk1KBY5YrCCZ53HKARHyuC45HW4gZnaqoKZLp63vYpHiFtjAUGLXENrGeEDZXi2QqRey6cQGy12jgfPUK",
  "key9": "5gnUdbVZruyPdso7WgAxPEqoJ9LV2unDwuuLuQHGb31aBxLUbBK7CDWCQjtcGPCxMLprEF1tfMqamPdNT4LLKLox",
  "key10": "6182uoJUy2ALiRJ26DYzrk1hbC3VT9A8eW4RyAjamHDWG4vsaofY7nCkqBJeVtH71511mjfMsnaf3KyV2rqSZGUT",
  "key11": "LLLLhTmQvB1yaamHUtyXc9i5EGA8Cp9VNNgZtFXSwrx911SnrGfuntUW1yAsubDKw4fxptdV6Cu11kAkrkuQHtT",
  "key12": "s5sa8LbD41tPRqQFcJTLU3CfnmVBvssogGY1agK9vcQ9nrxbpbCDHVeTazzWGqyRUsuirah2vv2roco4XQfye41",
  "key13": "5pJmyMxRXUyDq62Wz7u2oc81vz7PA9hQWrdmx3vq9GJerjrP8hnMuMRRkJCaWMDfxmyMWkiaud9UwMzdsk7dTARi",
  "key14": "4Uho7edLjEobjGH1ssD3BJTqxAoNSZGb3K8EWJFmMnHEKBBwWYfMfFsuC7576X4HQUG6ebmbzqZQYUKoY7v91DNM",
  "key15": "5grKdyvVUDua5Bd6bbYNvJjeZsUXJ1oDvmk6UNfc71KgMyQk6cbE2PnLufz2btAsk7RMKaM5GDfcqFkmjcRH8cc8",
  "key16": "mnTQtwQgZpqnsgUDimPcq1fZTvJCCpXrPpptbXr2QPrS7wPgG59445HVRDQc37zKmN2H8u6DYU8sbT9qhovKeWR",
  "key17": "2aZzNKapSiJpeJF8c2HwQYjNRWUUgN2WE4dp9qwKe68WnXSaXbVZs97JnUYxsC8xiNBd5cufnq1GjXx8YuvgiUFx",
  "key18": "4VjtDk3QJhCD9wZtMayyzzKDgL8QqV7UXvdm6vANY8TceNcje8Y9Qr7Ge8N3jRMv8khoUNdyiBFWaq2vzSJjnJwp",
  "key19": "5CVquFP5igpW6uNT7HMkXgUujKQo8n3FQiAmst9gs4rKCaJWEf3bXQrvqYc8RnDEFZDiks6T7dDf4XrjGjkQg6Ug",
  "key20": "JjgNXQxQR7jCUYLRh2mHENgQm1VHp8HHV55ugP4JhULQADcJnwLAkc2277vU5hZgG9FvR4fYYp2dJvZiKTDzcrz",
  "key21": "7VWXTTrf9cSipxtsh83QpKYLSUYYtFHgD3iHb1Ara8LbA1X47sq36LHrGZAQQDx1NEghTXuDwEUCegKZ7agoL58",
  "key22": "5pVnCY9a3HKNYX8vUqAqCvKmCj3nyTNNBXtXstJggSzFKm4zGxiP24HCEBuRBv3THtAjwFnAwM2XT15qo8ZNvbEY",
  "key23": "5mM2w66bodJDaKVxuaNcZ4KVGCGy4RoxdLe75sGF4pFYXMjNkFHwmuU2deEjJ9e8fFvLCx7YMMaVP11dgF45Cjem",
  "key24": "Ks2nGawA1EE9i88ZYnAtgPcsNYaatFu3TbrXfhj2UGcP5YDnkxNMW8W9Kv4NG5DBaPdH5QyCakeUzTV7f3cEoMN",
  "key25": "4fMJKBLoWLeCybpKUFMcqe2f1a5pdn1esNpuR9r8ta5MdmkgbSMwV586c9vEU6f4cV4dLCmZNKMBpbstH3iU5tz1",
  "key26": "kEJTQqbDCPE9ejGG9K913bGpRh3LBR2YSsRgZjuSytYMFJhGEiYKZAKeiYkr7HnyUVJzYbLa8JyRApFFYkFZKZY",
  "key27": "Rf8gZevSxN2FGv8chP1qFvceuN2ZLskavhGmuTwmm56L3H9Bsqqn9gWBcXJ9ZVyFg5RLF5YoToV97vcMnYiLppe",
  "key28": "34jcurtvfRm5MiYiHaWWjE7ag3y56iLwrLZ4WQeJKQpYgzCVhWJbdiLkCn5Vxz6hH51nVGFWn1AgPzW2FgBxjubf",
  "key29": "5sGX9NudnhxkLXUB4QT6soTXDKg8MMU2gVQy7VoBgsxLvz4rRm2aEk8ZpeH4MiV4FwtqiYy7CmLq1HrKW99CL2WB",
  "key30": "2H443LoFwRdwRt2ygBpfRWy9nMynrnWDngF6ybHLhqCrXog8A4XaYLap29LfnPYGGcehoDYuGxV1KQMMQggVfj8S",
  "key31": "5mzDsfwNyfDztCbF3kkcx9ZYmRLUpwFUpczex7S5ZvqXmKFKvNP3jU8ar2egFcs17RKuisjYe7rHq22hyDJRnShi",
  "key32": "3JXMUfsbmbD8q2F6RmELyqitG2FZhscEhSwQJfKN5cvkr5PSznBWPZzxR871dFFhDot2uLd7DF1kThj8CDg4yekS",
  "key33": "AtqArWmUH9bHGPYxcM46irAcm77aVB5xgQ4NywQt21vot69WpihDpBRh6Wcr79LP6f8YhcWL1HjGGbhRqJFyMs9",
  "key34": "5Mg24jRuKKvyB6QyuZJShZuamCFb21mrnn6kzn6zWG1D4sStw32mmuhPWXwMViwedrPuRyyo1boBektk9k2oLVjG",
  "key35": "4js578PyParZHMUJQsE8HiWGZVekWa3ornZTsyToFWb6ADhKfnFMjPD4dwU2uuMsFcEiJ3pTwpmrXBAMmk746dxj",
  "key36": "5S4Fnw8WVeTNCwX3AGmfCGNCWTMQ1HoGjnDPNQMBaQNBYjQC8ZCg5ALCfDGPBFyatt41ARr95ebVP4oDjvkAGuyB",
  "key37": "5CvsPHce4FWZFy6umtFqMt8ntYVuSBpUun5fTiZqRGV8gkSPXAmeAYsLZTbVcBT3qkKLDFe2SK7dyfaBxn7MdJT9",
  "key38": "31HQve6T7DmnkkYC3mmqbvyNbGgWWSSZvZet7ygkNLtP4E2sJWfnWjXiY937gfjjvesAhrrwJgP4EfEcrbTAQhJ7",
  "key39": "6ddTZBjUMT5bQZyupmHR5XnE5ZD2pzNgdy8PmcPgjGL1T6mwMz7JcQa5EGxWcn2b23sbn36XzoprjjApLSm9TCJ",
  "key40": "655t4f7vZfgxhECDNw7KyCJiRmiGSDiYuwjJZAw8R6TY9eXFAVNYE6Yk5PPrwtgXLcYhNk3Lf9s8e87nLR5ZNwpD",
  "key41": "5VnkkMdWpxSBJUjTchFoM1f15G9XG1Gnjcd9QB9nFWWsRSSJbdSSaNaWEcjW1y3xWwcVF4jfmQhBJFm4gYSz5UQx",
  "key42": "45CALyBhoykky1DatiVHXqBENf2WuVvyXMvuuCvtwQrs4vHMVPargpoWf1ToACDZa3Kb6uPfBge9gd75DkstSeqD",
  "key43": "5Prb5nibBmwGzYCUhuu9oMFuTNeoqXTS9dhEq8MtqcpN4BWUnjBLXFv4waNzT1VEoQvfk8iHexxxZYriKnpovE51",
  "key44": "2sCzX1oUycdAPSDfiSZySLDTV4jjcnGbpP3kJC2WaciuyM4XGiJubMqr1FzCYMrop7ukJZ6sxugwyweawh5QkhLM",
  "key45": "3j3XgzTafqe4FQ2uBZZMKcpW18rpMfYx1B6PeDmnTmpv95x7HJNGx8v3mngWQ7jLaoWGvWkms13HUr3QyprGeSZw",
  "key46": "57pjBt4BAk3448kC88sno9mKgfM9tj2rMRoS5QiPadPsAnCaMVsRYZW9NBxTDYrMYEv6UWbLZADme2DBFKgvYMUZ",
  "key47": "dkNVd4v3miMqaGDV6pCYHmFZw1fS8Xtt9MXqd4s9Vh5ZsQCaYKSp1d4KxALvjb7arJ2cCKAw5jwA7XVWLZ9SFeu",
  "key48": "4MnUJkGJxdx5KDRKCRMjejxsrCVPgMqPiWm67ZU35Rhb31X7gpVC3ZcdCQEsadE71HGf6B7PxeJcn4yxDJPetPwj",
  "key49": "aosANnxctVnopTiw43PYgXUiSo8kBKbQAHz13SirG23C1UxWb6mgc9QBxw4zLXKkMtibPPJHBJ9h5WfCrD1XTY5"
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
