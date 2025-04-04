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
    "4gpghDAMzhPNDiYWgnB8vbThkqRzb8jSVCSQJdPhr9QtXohzS94yHckTpH9enWgLs1sWABGFiaDjcNxHWNdc1oV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VnX4m9xbwMpoP5rGbB3WpQHUozXZyCSqLXnd5pz5ieFdqM1thEKGXwNLhpJnSZVDkqcMtn1eifN71E63E6KKKt3",
  "key1": "4QuCWaYRWhFtGDDeB6SiJVN7E3TyJv3JGxV8W8ckkRXvpcyKtfKAkwHeLXfuLaiT5GwbqKRCDsHs9Ye9qp6t8LbJ",
  "key2": "5BEtQNQZ9zAq2TT5H1pjKeWKpPVP329CreAzdArHc7nK9nhYQrRBSeDBqWCmJvsJ9oZ7dxwPn7RHVxzdvpBoABiR",
  "key3": "36NWW4h4Y1oVMG5r77yE1XbHni14tSJxBpex7W9nLpryZvYrgFsJm4pdPS4gmrnfpP71M3FG3Wkedtaix1SkGjEp",
  "key4": "47geun4uPMNk9CTaFjpPgyB5yuthHVCkT9tuDMcX5rFM5HGCEZ6DgJhhm4woT7GapnyYHUzXtrm94FKtgt8DQzZ3",
  "key5": "2Kw6ChcXNRR5f9FUCvJuMmGVT7997kwxj8Fqc2BtASspHscur4MydUmqKfgNDaBvKqPamhxCvWr65CgifHnKh2ia",
  "key6": "cUS8D3Xosd85VFMMRtAd2TmPbwRrxsHmhz4YrqWo9YepA2rYoynQiS3QRrN4Z2eCguRxULg9GsPk2134y4MWDyj",
  "key7": "3LYbjgz5xJEPyib6sMYfMAJnYgQY4fEP9S3agUuVk8UCMQ4EgYfRcYrcewz1WkKJycPnpxmjHhXNRkMiYV9wRXdh",
  "key8": "2ArN3Te6hpzVi8GC6RYLFQ9wYnCzoiHicov3hqUEZN45Fh9w83ahJvLeYNryNy4VgJha755zbDJaKDPCGAbMtaQK",
  "key9": "2vPsQ8rh5WdEi9837pN2YVKpbzWiY72qc5ctdr8Tf5y6bVBFCA27fPauKg6GmPN92x7oT4Xrm6GiNmSnHzLpumBv",
  "key10": "4dY5EepBvWXqbx4idBPQB59tHsTgLY4xts82A3P8KLyZgAwQvYbbaTe4Y1n2M7qhCbRBtBaQ9uRSPc4US71gS17T",
  "key11": "2MSPVhfTcGd9PKu1kKzFi83QYJ6hLS386jUuB2gCR6cFVxgtDLsRxmwtGEJGega7cqXFai3tr81E6MynwVrU7vY3",
  "key12": "2NV2GGtaUrdvUPfj2QuiG6oKEpK6za95TgQqpypvnRDwiAj6W8aJEq65j333mTtfPxNPpZQKYxZ7qRyX6kk7hM6P",
  "key13": "2vAjLvD7USKCRqyPmJuWkUBVoFL8Eo7E8F7hqgTfMxuezwdcJGCB4sVait5bnGaDTifVoYbNXkSTYWcS2ZkM7qvN",
  "key14": "3CVZgQEMzSWowTEL75Nkn66H89wi2rPnNEX14fLpzsUMPb83LztCa7hTUJSjbqaDCBCofbLsEijdyqqrXuSMQPbK",
  "key15": "A1r6kJqwnjnbrubPGiS1ypsNrUwemQ9QJ7YkPPtLbHUZhSmWiq5FdcgN6uEGJ3Mh5gQ2vA6ZYtMwAzFQ2qgB9Vm",
  "key16": "2Um3f8xuDwYrFN6tsKtDDE8m4iDvozAmJGjeZ5aK5Szz6J1kZUUDEgyVH8xSg3yoHqmHT8uVBVtCnwv5GkGjJFDN",
  "key17": "2joi1RtUFaVYDxA2AqGfSzPWFCmBmANXCBDW1J7PikJotsvFe5Vh2Kht8suvZFkpSfaMeBk7Am64XEAYzNUQM98J",
  "key18": "T9RoRHDHn7W4Pd4SSiu52q9H6DyWaNAH5jMvfwz82vfpnj3iRJy1pm8PPUvPdMHc5TWZeLredY91eQYveZmFVaQ",
  "key19": "58ThpCQszNn8iHt8kMVM9zWpnTzFNaTjDpziRnP6eKNEcEE55vR7LPUEWvy8BkgdTYo2ZsDdQUWkPo6goGyTYuah",
  "key20": "28hKcsWsu37hJjGeWu4fH4cxrZq2Z7iMrjTuzRwxDKVsNKRR3bXMwWmytL4J2tbBzrppHxHoFYUPAF4LkCtEus2q",
  "key21": "4XEP43Myo2RbSREXdGTbgtjLqbEHpCkGJCAdcHHxy4jf31EgFeHx8N6ouzYCh2SoSexhpdV44yXM5kQv43swmpjD",
  "key22": "qfzXk9UANBC4i8wvhgvYKmH5euvPkajyP12fbpMV2w6WD1mdxvooqkDQ24YmxtgYwmY8nVTq9Bvj1YmLjLQxUMo",
  "key23": "4iNHuR8QEpCofb2hWLZVGHEHcdWjavJEct3nTUcdwCBEPycKRKZFvsfExNyQYXv7nzgmPi5tGc3jETc4ecLKNuiK",
  "key24": "5xqyGLQvKxhJTrJJqTUwYLB2SmfbF8WnJ2ZrPpriJcDy72sj5DV3Gv1owjjKPSoRKHfG9MxFVPuKDCTy4oixeZSx",
  "key25": "nta2b9Sx1do7QzqWJJcCBBqnsEhyETysM4ui9oVQKeWdHMC2uVQMgwRXJiesJH8h6QQLKfmqFijo4MfGNxi8NUv",
  "key26": "3RCWzMz5tmXoPiAGyf1HPS8bxZ1MqHeocbdxZ7RZRBZSZiAZqftCMr7CcPVGDbrD9j73aBTkVg7RpoqtR12LDhwG",
  "key27": "4GpaU4ZkzZAEu8qWf6FK6xLf4BeR5aZrAPDkGXTDVtjjE9kVxYHb4FQbQebWQkCCWSb2kJxUvKCyYMzeouM7jqxQ",
  "key28": "64NXMH5NY5CfMqvCb4s1LSTC4Q5BWQjDiL5xm7qHYvpPbGB83x3FtDoQHSzHFKd5DzGkVarFzV5uCK9CqVFFRtar",
  "key29": "5knQXL1LSspdiqcjMK92AUoPh36U6fVZnG9CrQcGkRPfTmKmbBQHq7nb4J1iSGULx8UJAPSR88kp3boVv82RWPFt",
  "key30": "27YeukwQzfZapqZDi7uyJtyQieBvUBGwKVU9uaByosXHA8YBusMhEUyYeAuKUgdVpUooUdzAzZa3fMKoB2GnZz9w",
  "key31": "32cmX6mdFEHaXhBt3LPcntNZQXAyANDd4Z3cKMBpJQdeG6yFbs4h3Kzpf9J1EU9HaJYy2ykgnk7r4F6WrAB6sdKD",
  "key32": "5FhSu6FFh7oHDk7FrrwxopdmSqvyA7yVmNjetdyGrurxY3xivAAPXDtEGVtA2mzHyTm8s86vRNEPy1RBprHW9EF5",
  "key33": "2BjuCEsw2CRyntBNDGs1NFE6d6dZV6bsgvqBYSbQLNr8e4CMbaQzSxvcs5AHrkrTrJ6HkyBPPRWsHDtb9daD2aQR",
  "key34": "2mKNwVVMda3P2zLX63P3U9V5c3o88fZP64wcFFSv2HHJeJaHGDTfJZMaZV7zxb8FBPKL2et7Q9vJ6VxUxFkM3qFp",
  "key35": "2xgrUvT6gySXnJh7utjCG86s5TasQk1SgcYpVm6bD4FyGUNXCy7tyE8Pp5dKDYJavMHsWbM2rHa9upXb9drVESDh",
  "key36": "4SRiBbw2JvLJ2yNkg6udHMThNhxLVNidxCDnS53gzZDXVgG1asgvgWAAFKSpCkrUpumpQsye2N91axtJtQK3S2uV"
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
