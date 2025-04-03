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
    "3sd8SS6ZRsGsMpwvUyLQNgMqHofdTPqC4xccNcbhb2JW3KJjyeqAobkqZGWuLP5NPVnkUrCBscZRmRAcfc6U6vwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Z51kWU1joQcwrCvJf1g1ZXBvRYMqt9NDuZuqc7VCV3MrSWQGwXNALCug92jTvKouZLkJsM55eXMsp3Er21Z6yH",
  "key1": "3cCdFAhneq6m5snrBp1US5nWfKFVLWypo5uGcdmYewUoQuY8MsuYUGc8TStDDMiH3vYywdnFtYvvRhoLdBuWXavN",
  "key2": "2nUr1RUomtYtKeN99gyPt1uWYDRX74Tmkish2SqJXQe2qk2xUgCs3LWyt84UVUGXjXdXNPA81qSwuefmco5VV9Bm",
  "key3": "5bAThSctv1aUgUdBit4yYGJD4KRTKGndgxNVe1bYSq3cy8ZMn1L6dq6RcHq96GnakgGVmzRyHN7hLFhJG7KQmpGK",
  "key4": "5xg7ExwZUxVJT6YemViqFJFNjse3rFbF8WYH3BxgAqpNbC9v1mnKt1vd1WorDSJcRXgd8D5P493BmwDmmJP5E3kh",
  "key5": "5JMymvn1kEcZ6t92VrwgpXmhY7nxeLwDHNNNk2Eg28c7comGVSEi19PiZWFYZPTQSkq9UTBoXLxZqvdoJf5No1YK",
  "key6": "59LZkPxaccSye2FAuEsKwveFjnHTrYuCgGkT6bs6843A99nDXdntQvSx96YJhSUiri25AAAF515qg6q8jwnLEJxf",
  "key7": "QFradxXc2jE2pnzvKLgCHXbPsLUUieALPdJBnnvC7hRATPKFs1GiWVpae6DM4zYN1ngMTPYsjjzktJtrVTZg3DA",
  "key8": "2E9m2oJKhhevsQF6CdSCFrPNRpig1i61PQ7dWpKzqXoZcSVJ1sZKsZytxPd7mfHuDpMDXAdC6gd1MwhJ8JYkigGT",
  "key9": "3CAjR4WrZUYYCqqFeDWei5FukztgcMA8J8ZaMo8ssPvBinbQy8f7addJEENiW9CWvpH2aRorgpfgJNaJ6AVQqBL9",
  "key10": "3k5QZwqXgyGwwWdJJrWGvRfYz6FpYWbANHRKtzRen1xmbEeRHrBSke8qWBgG6DZumCcjBUFMuGJ2kk3KhiDKm7cg",
  "key11": "5L8rzxBQahWGuonkSeaKiSmatSJmVh3Xu5cHAzV7yFikNeG7k7eBcxQfJAKwrHPespBtvYtdfZEDW27boqW9beV2",
  "key12": "q16UHoAhaAWr2qKCQHHoVNmQXthjxPDQyXWisV1zgNkiMQmzYdwnUHgYpe7PAz55jUASiuXVTTZhN3PdBKpMrmR",
  "key13": "tUJFgRho658yq7aJPU3VpS5gP45yQsJY2K2nPQuABAyEor5fKR79ntpWVdrvDvGMAb1GpUpG8tpPpDkzuLuEPTT",
  "key14": "5J2y9voUMtpFnEmvzfU2UJcCxwqTNJe2GFy538KjmknrGt9ApUAt6To3r2KwnXMTqr6g7bVjxEGxpvJcpou88XHb",
  "key15": "42hfQK1SjoDthWP4K3tUPt2WX1NZ6oa5iFD662CwfpVk2CRN2JbPyiDKnXswgYkXnF79ChxRx4WUSSQxgkUnUpBh",
  "key16": "31JgPiGhYXqEv7Qi8AsYHSQgUQDQMHxS5wQFdEgzP78ayUDP83GjwAc6j1sVKNRdSVLUboymGY1nUiL1TWxALG6Z",
  "key17": "4UcECnxc1QkMi6mL2ACxQCoiYEqqgKGCrfev918tNxmuPJMfVLSFKvoq7RS6DRXyV9FbfEXPxexdTsDHD5afvBBm",
  "key18": "4dMa4BUrZLc9otAQ6orBSY9SRxbpdouZqPaEBcNrLFZpJT9DeXUbY3x8a25AJhkY9LySYsdeas4u9aSwJDr2qxse",
  "key19": "p9CfjSPx3W7ErTRsErgg9Cqcjmoj8MHHk1dpFp3S19Qg1jewqEMAE1emAhFawW9oMbk3FM7J6MSX21PGzKgtJXh",
  "key20": "sdsMojXT1wcgmSw3oFxRAtpUmPTAAHHW1PTAtdUFNfZbM4LV9oa7hSBJ9u8S26BpSTZf3mnK3nRtFVkXNiU7gsc",
  "key21": "3KcK5hAxHPD2ByoCtkeTtRphrqzFDfuhbPQYFXgYb2jccmhqUzik3xCm8Uep4QNiDBUNGXFZ5URe7rGcT8vY3ybh",
  "key22": "61W7rqSW2jPsMb3FfRnfkNRs53Y2L6aHLvXY5VBZgYigMhkAJJdwnKHhkJBdNmh7ZjFrE457GyurbeP6MtGzSQjW",
  "key23": "4XTtpwynDvRjgWoqvyoeGTmxdJexCEaXCkBud9cHrQqhuJjb5UCiUekVdvfLfews5haBQorcUErYGQJNoYkmu39m",
  "key24": "3z7EKuXkWbtZHv4n9sySr8vzoGznkarstakbWFGWN3UWWktVFA5ioFmAzqTAdAVQ4V3oBgMZ6p19BfLSoNu46V5t",
  "key25": "3eGBmsAMxoMHmSCrhs7XGfB75Hf2q7Dv5wU8xwpVq2UGzo88e66sfvFZcruxxMc1mUQoKkeV9oa96aMkC5JnbLeR",
  "key26": "4nKus7f1kEtkkc3aghur8jNN1DeiUYHeyKt7n4Y7Wmkv7MM9eJA8uDXM4zbiE5gkNP4cpATarscfZ68GkUY4LbWk",
  "key27": "2FWksWTDW4o6icLVPxZQMHVmEKYZzkUVX2G1UZaojxoZNAga6sFT6JoudLA16a5BzxFUqiLHnPSE9FQVVsbwDFnB",
  "key28": "57vVBjJvgDgWpxpvmQMiKHrw3FL4ThryNH8FWkVjMfZk1REyedHoYYi72n1RjG7g2VcRbvGW92ZTLqPeBLF5Ubet",
  "key29": "2g2M42x3bdv2jsoStwFsLHHRGLj7F2yw2GkWfyeFMjzmnrK486zwonrDfxHJggPJRXM25PB8MBWszt8bGqWeLp8d",
  "key30": "Fo4v7T4ZbrMGwLEyJ6G5qq1ruohp8ZRTdpmeBcqSbyQVDiD8Q392V8n8GACUqBNTiqLAQ3RTWNeUVoNgE99TxrB",
  "key31": "5cvcYJM497T9Da88t5gxUjtDNsh1qZGrtT51MituhEdmumXyXziuyjuRSrJTdBmW9gxwDsx3JCxqBRtctd69fsYT",
  "key32": "3A1BMf11gWpGMRnZyW5EPmD6Y9AZGmcupFfv52PfWHoBdaMTU8Gv2pNELfnEG3R7efWey8DxgxtKovGoaP5Ra796",
  "key33": "4UzHgz7DHAzSNB4uZ6S8ZTXdZVSzaYqopzBtAJ2cBncLdsVLQyNvRKMdw4EQbUPmKTqWXF6goRtcTGSJFnRMEoTE",
  "key34": "2eo8w5AhzdEVJJLSb7QJy77Kgu3mV8YAiJKctoWNGHa6kKZkXFGBuYM3g36WZ2Crh5eJ6VQi8cmn4atM88HsidRK",
  "key35": "4NjhwSdStKMkRCQW3VcJ4u1LUHTiwit9XuvkTkDoGDVkLhwjqQRujNY2MZGvBFXUkp1YNvHPc5w9Y8St5bauvAaU",
  "key36": "5skESvZSYskiJL2tMHVZ69NVfJSULssL4pNgBaJ2taCfpvxJLxW8zYDdgDA5AZ1vxxvGhDeCPufBNJS43ED8gnz3",
  "key37": "J1VqqVGWUg25xiQWfd2QQPtvXCr2rS8pqsgXUxkuH9X7GyPXgE5xSZzBwBc4F6mUzd4wf3dpUGtWSmhu7fZ1LyR",
  "key38": "5iSqCse1K7yr5jeDFbeN5mwZ2vEZGKvouf9uuTNfpJRzJRG6kHxpGFrnwUUF3bn3cis1zE13igKaT3ZBqnyNY9T4",
  "key39": "52DAHw8GnG3Gy5r7JEVyh5GzNp7FVjKp6aHGVAo5z2pFG6VWaANtYbKgvNiH2hP6jSVH7XZ9T6rNhwTSf6fkD5Ap",
  "key40": "GoSsTxjjr4BFkia4Sat3nYYmDjnyHSywfNE7C887CnM7ET1d4wqVydSwzXJyy4GXsUJDfLU4uqmK8TcgRUscNyv",
  "key41": "4hja4KQ3TVS9a87J88xYPstErJifnRyNWeiw9UfY7Vn747dsRFc6NJX63qfPXbRndCGAe9B4W7PVUpMGvQsrdnzi",
  "key42": "orHv3tLKdMy5SovsHeq8KW6zB3m3yZCxRjvWLkZstJfe6aQXyK3mCu3g2q465mQDvRsNUxRGCasXyCzxAUWo7TC",
  "key43": "4QYv1WmiYTB5WMSsAUnFxMVA4PPhPqe4SJFVqKDWh2bm87F986S2d3wzqYiKGzCqrEf3zPWDkHoa7Aqq6PZcq8ZS",
  "key44": "2gYydc14Lox3vVuVLD5zXabqdvsMygjjg1aSt4caMn1nwyYuF7eghkBjLsFe6u9gUKwdeFT55f7c9uCihSxFsaja",
  "key45": "3Uu3wU7sCDqEyCcgcDVMnXKU4zNbzWg2F1LxioWcKdwsMWywBwbUMkzB6hj6NzfLUZqZLNAY3TJoZtCxy8gq2w4u",
  "key46": "3ZyNfbKPPmnNSTk1mV55X4ZXme43KTVsotXwrf6ZGquHrCrj3XJEN8bttdzR1sfmbHAV6gNWpxQxEymRuovKKJpT",
  "key47": "5cnWCAqCp1iAb8vMYpPEp8fNaqrRJtoYHbkas51GC5sjrjR1rAvVurKogQx6ptVhYqnZNtvwWTwCuGshMThemamx"
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
