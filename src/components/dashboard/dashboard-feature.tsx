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
    "3CoKwsjszXp8yMAbMccD2XLAJWrpPGPcrFN26UEgfRJn8DhvARGqkjQFYJkNNgPgeoVGEVNzsxmFsSfDjfnTAV7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcGYqbzRUuU3pYXWc8AHhxxxyrKnAvSXGr5GMr5cGMqwaNWjUwXLyKHJ1mLeyrTKWrzHHi4Ki3B19xRkejdAWoT",
  "key1": "2qdBrrgWy9Xp6GHWCbC92DecA8KKKNU7JZ8BtGTyiFeox3L2fPpUoKVBbQaiLuPuvUHiGhEJR1hTWJFVyd3oSxSg",
  "key2": "2VNmtXjPv81pVCMtgskg2WR3ThpBdxnS75D7hpZo9qJmYaCoHQnfvenfu1P51zGgE39ENguU9sdkA1A8erz5v14i",
  "key3": "37VttExfbqbuXZHU9R3WecYWALLVDxsH2DHw3BgWNYungDBTaNq1SjhiXz17YDD9DkiZ5mjRJeUDk3ecQ2RqkfHW",
  "key4": "TXoUVp9fuFjsjTJZ9GuF8HpodE1Qx22gXwi3jRdSMW24bwR85A1cX37G2Ro3Fr7ggo1fSkJn5d4hA5yvBARoFz3",
  "key5": "iwMmdtLH8ZoFtdh9asmy41Zoy81dnzukwQHAUfHmQnkECBuS4nTXE9Jdu6E1zmDnEptQ6VaFXDvjjYxVZB1fNrC",
  "key6": "37qJbVBFiJtivAAS6ztULAfSEpy87pGw1MkCjvZazzX129MvvcHVEy6eprWXGgyjPAxcxAmvjQp75X5cir3hDgaM",
  "key7": "3YNxjmUSzNYNJtgxTVtSp3Q5zcqAcNWfPRyMwsthNSeF65gXTZxYAVYXNc3h15zzm9bPzz8oCR5KHoR9voPjgWr",
  "key8": "51nR3yypXFPZekZVfGUmQTJhmb8Esa4zo7HLa3EuAbcWAgGKVBijzyR1sVZQVWNYUAverD45YWZC2JbxKPoHakSF",
  "key9": "CZdJaQtU5JMsQmrt4qRRfSuiYCN2ry1R7zdNJx9kGG7MyaVZXBCYioxguEHVqSPEw5bEjvyP4MLmBps2k941UAU",
  "key10": "2xWwSNqinNoMJBiyXdBKiq4nHpyTZjwMMCT9S3Rnc1c6r6i2S3nqscns9KPkWQTmYLTWXu3VCX16K7Epq6Zqriwb",
  "key11": "61UPAEmpDJbdtoTNgxk9A3TcTaN9u8XTekYevYGrXu2D67o1eY6nkWfYrij4sow6q5qnuvsidCQjWtyuEZ7rHqzt",
  "key12": "4PAM57rRYAsCJMRGZWwUtor3oWqugnhjbQHptHtyJ4kMUgtDz7Yy2f8C8ytgNP28wvdV2c3DA4UdDbRhRtMX5y3g",
  "key13": "2JEza23ejwXLBeyiyNrjsXaRbmSLPUAuStxBKT57CDUJjGmmmDWdBzCrxb6j8pZ514yyHnNFBndQCxiu1BqkPUAs",
  "key14": "2NVbsC5TMeKWCpyo27EHHBWgbefyAdA2jBQLXPvLTFf594xrsx5exbcJjGpCxeWPhwWZ42VovY7Eb5rpYyr9Ys9E",
  "key15": "2WN2p9YoPAMLNSfozs9oFWcqWX2XgqvbSALFdMfUSoiwCQ9KtHRuJsjVJZKixR3tt6GejYoqR4NyBw2G5xRhj9XA",
  "key16": "22mhVwNzu9i1Acrb7AgppPjHwBKupm1JsrvEEtFRvUqEVfbr1Fuswv66wjADhGY1CSqTBTYg53CyU6WHpCXLuPHn",
  "key17": "5eR14kVzvGn9FFoiq2jKLmbUtgovwZfmJrtZdJQUyc8j9jgMHT5ccXKdXSuEuTdMrpZN9nhYWPFBnxLYZBhsjVrG",
  "key18": "reWCdwAMAUsCb7YpJLqJVQQkCLRb7Aggst26eYTP2tg3AJtuPVMH1e4uvZQLfC5KLaKgZMeGvKd8VkbwPcbgAVn",
  "key19": "2EjdvgL5wXAddE2AmZgibsFEtEUcd9fDNN1xg74DeMVGoMiTYXmWZaEP6RdkQPYUGvZx1fe2yCe9nRfAW1KvknbC",
  "key20": "epSmFKWti36ZyYPGeL4HQyEyvQMaf9JZMVSc9Uub1QEuR7qqvFZhZEVkprPzcPbJJXPzh7s45v5nz8ftxjjYrMK",
  "key21": "3scbry4ouQGis2r1WpDjLhSQd61Ld2EmPR52ZbJWG3fHczjRDyL5d6qmLwPPYJMDBL2gkT8NLQaLupsPNd5Yeb7B",
  "key22": "3S3sRFc21NdetSQJsN2uBms9uu4przmBk7iRM6pvFCHU4H2YMpobqp2w2Mzh4XozLqgHDJ952ETjrtmbv7Lk3Etm",
  "key23": "3wtk24Czsk7bZdDAVSV544JkZUycMZmSM4qBiRVnyPtfNJs2JryoToXY4xdBKTZ43ge8fXNNmrwXDQTnY7kJLJr9",
  "key24": "65RQxLmp6wGWMDXhMiP4s5RrqTMV7y4z6F8CfgYZeVuXgaGBCS2jxZv8daV819SSnPBXFq3SqmojMTy9xw41isWb",
  "key25": "3UMCJ1Mwp3PSk7L3ndzidcpQnAG3MJHNUiVrX2DmQHdH5YcqVqt2NgCfYkrun1PeGTKmAN88kBztgtuh4BF6H6UZ",
  "key26": "5RowRfQ9stG3nHs4mM3ZtnFGU7Ah8re3NKr3Nts9uRkMiQ4m8iAfEw6tjokRe5PKSQ9YpXMTT1UaWAWL7of8U91x",
  "key27": "5oZ35gN9dF9UwHhFFc3j2Bd69QZHxWj2BGbEjBP4DHWRwdw5miPyum4ceo5DRDHB6ZWuUtEBVcuapp2XhoSKFm8h",
  "key28": "48TecDhEyxx7Uode5R5pnubx1HBXwb19vAAtd4xPiKmBu85Gw6hvce3Fw4sEqEWA4kYBM53E7YLNLGmXEHTT4zGu",
  "key29": "AYepnXRDFoszJNCrze5VibbGQYJji2EjCVuvEJHhj4nuLmDzpMDJ8gissD2CQ1tD1jK4mXLqDTPRqXHfq7KYefa",
  "key30": "AhWFMdsn9QLyhW5rtoP7R7ojZSESaSskC1E4xTt5oB7Th48VnP12jQtQMzJoGgtKzZHgY2onikm38BziQxmutcR",
  "key31": "3svTKaSrAKzvqKfJqQJhEiCTJV1mDUbH8g3bFXAZtqyK6W46ei6vmqkgGqA2tAi2ccnNzykRCHYiG4cdU2JnjWFY",
  "key32": "4gdmwvKzjsjH2Q4C3RMsowaushs2nkf3GHYqUYAA3Mq8itMguWe1VXqDznYKDtwTG6vSnesT7bnSU2UH8rQK9f4F",
  "key33": "ao2qWp84tDdH8mTJKWNturJogVsCWSJ4dN5cRwRUBEAJfqK1QHY76g5Ek6eaoqE9cvtoBWV3zW9NTMHgutE68SL",
  "key34": "1SfQfLchut1kj1hnYP1puMfqpTnH4JJDYd5GSovJQnmJrvvF96FvMMhToBUXbTrfdwZoX2WQSVYog5puxUJu67n",
  "key35": "5gbq4faPWp3LrFNz7JVnHWCBx2qL3814rpsdCBEKaTy5NeyoTzqn2XmYwb5Txds2TTpwRUXM9SnZpWnsVMTdTqut",
  "key36": "34wEJ2yYwLDmJzDbmGzsAk1Qb18sinj6QxtSaZzjAxRpsGPJmB8pvrRNvR5iYeaMXYdgN65sBHTTXmJ2Rne8HNX9",
  "key37": "5zQ25AT1zDsMyip9raGtjB5NE1Qcpkc181E9qcWqdvaQEjXT8GsFTmv8KKPFRf9mHZv4UNyVBDujPM1ZGYoywsjJ",
  "key38": "4HV5cCvx54tsLKJAkev91xoZMzdVqn6kFB1fuXUY5jJssADHVDfqgFgegf9zWeqPcj9gcn41jAQcpFSdEALvqjqD",
  "key39": "5TBGmFZpj511FwuwFh3fL2LrHfetWWPanDwDnkANfLurS2yYxofFqHmXjaEJjsSz3hgS4H2v3wBUSSv6QhDLTz2g",
  "key40": "5vygCrQEnnP6VcXdmrAp5sZ5yCXiWePi7JGiUjr3vr1uEWS7XTmVNqzdBh33BawtTN5fTZC8DqTEfFgNUZhqoP7F",
  "key41": "2pd4D3TUNFm4SgGgFAonN3fAYU8LifwsGB6Vn8aLErJX7Z3vcZaU27BBeqZ9fZj2VdekSQuacXsLyo5Cn7apfDoz",
  "key42": "121kKhWg4c8FUCQ9ZxEUtuiJEC2HzzuwWg2HDmbgDz8hjEjfheYBfC8p7cLwtBrFvQKwWnwHDNYBdvxuHjaTc2zw",
  "key43": "5119k9rjjQeDZaK6eJLDY5TVbpsWz5ttuBGJ5FpA5N8vZZbTFRtWtnfHEAQMX5iUYcZ8BDbeyRKbrsuGo2tFdgvs",
  "key44": "3tk9dYj9ovn3jsA1mp3YVh3Z3DJEtoy12g84XxBvbdiosC7jHbnPcPqZ6FED51SpTCT4uMo8Gs8ejfvUptZF2YHi",
  "key45": "5ZFxmEaeq3qpcgY54JvjtZtkkNYy2AFiVXRkrWVahLtwkeJyYykdZcsNcMjRAwY2dXKnXgQKMNsxWN78d6ENEe5W"
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
