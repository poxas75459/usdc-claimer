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
    "66mRqkR8JVPyE9NcqouV5uXwECA9EqG7pAY8UG1cuBXvUmXeHEBEw5j9mbwy29Be6b7DxJgTmbHtNUn6tkeozUa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVdgm6esPUyhK2EGUtf3pbcx9sNH9X4vgnJsjy5CTRgw3RZiTxnWwLsDLS4i5cLqThgRWsiuvFwcEskKXu44WnZ",
  "key1": "evEb8rg4mhmX5Jq89peqX4cQ25d4kDtUvLaapdUdesCC3cqygw68PGyHYF74uLzqmHT76XFKWvpG7PBTUY391v6",
  "key2": "4bEUgow6teUukVR9dpgHsWGV1BBXg21R3jvqC25C5whpPnRVDGFBJSLZpTwkjVK8mvH4xxXQYut6z6BuTVsJJJHz",
  "key3": "4XiKAXVYgc66MxmLEEgWtGiXRmaXEbJgUxHFt5civ6TxbmPMbonRCnXiRWAbeAgghXckiLrxczk58rRmQD4JEQEk",
  "key4": "4pj2T1ReUXUPM8KcpD2K1FT9xJaUC6YVLDFBRzU1JM2AnFi3FpJUraoRtDna7fYkRHQ8xpT9Prhdix322ShPnUUx",
  "key5": "4DHeaoSftftHZjkqExB7kvFQHmyh8YADipAZSTKoXfVpyoidjmsVpX3urBNbbwu24aKbrG1pYJskjpmenL3T76s1",
  "key6": "3uihfRUJ8jrPfd8g4f8RP9tXwYVj1hM9GE8MWts2eVF9WKSBNYUNDtBXsnW79GpoP8PQT76Gz56DtDWwXsC2JfAf",
  "key7": "3bkSN6meqUG68Y3bZwe1cyRBtSQa3fqFZtx4t5bDGbQKRhHY2csNAyGZMf1EKuJQfqJf6g7CUNW7dFYERmrtSJm6",
  "key8": "XqNSRg8Uu9YjRJnkaUMqs3i9DLxxPUfngzXkUBBk2nmfooMd1ufxHpFHtXbDGJDdi6UC4Vi8n2eA9rGcsWdkopB",
  "key9": "2QDHssgUAHW4ixvb8hhAw3y5eu3FVN5ip3W1dtYhdpaSNM9ZWHYCggRtrYGgKfNmPScGW321G6VZYG2Yk7hKBbeo",
  "key10": "5dSu4VhJ7JrubrGT5vLGBDCNTG8C3WJRkhU29VP4yde7xsmdg6L8n6djt8GiCjtHGpxeMr4UajEFocJjZTU8Axvg",
  "key11": "5bUj7rafCrThp2qHVe3x5HTffcL3Z6gJfXoQo2DqYo4MQtszqqdX6TNpQEomRmJ1DitE6pXtKfsAkh6mVak7A69y",
  "key12": "4MCxCWaxvYH2ENMxmPtaYrDYUgkYeqPxkeimuYrYvGUoWRL71APKeRr2V4B9JskJZxDmd3oAPf9qurSzPimr2Y5k",
  "key13": "2rjWVSQdYzQL4KwN1wv6B7E1QJKcpnceRuFaUrqPdZGpU1E1ho4Ab7QDQsbDwS3VytXjuCw4VdmYxyBPNbgs6Dkc",
  "key14": "5dPq82HMt7pjaZEFkCUceQxMndmcL5JeBbDCBTd55fGd8VhCkFuCBzYcGu9sArCXJ1oFBpcudr1rXkfgyToxUYaK",
  "key15": "2GgfZHvEB7uuAxe1MRX2T52JfQ3e3CXDVGqctpvuv2sQFfpUCi8mF2bJvXYoX3dGyEdwbZSvPTnGWpAaxE6h9Z3S",
  "key16": "2FJ9G36xcBAodnriep1z9Mj5gaP1jXK7RELx4u4TvDBCdNETXgMSWdRm9EvxsR7KbAxLPEyNjY9RFNB5GVYdvaHd",
  "key17": "2kEof5SviyAUjPhq8Pyr8bXpoQvxvkigY8YmJen58gY29ZcqxLziacHLGZhRjjSt1pouyjcWGQrw4Aa5gDuZYDAz",
  "key18": "2FKLkLSU8SToshvmAJeyzoJdLUEqmzaSDMjHDaRwtkDb1jrb2F77KfjjrV1nB8jobqrBay3MUpjg3qJ764LcFqKB",
  "key19": "36mwwULxEZKHoCZBRAA6EDRfpTVeyN8cm3jfRg55Noa8NNAawoukVfdpg2mHoLFzR1ZQX8g7VgebvvUjVsVcgCF6",
  "key20": "P7zE5VMGmYY5yDUzHeNKP2Cs7QUEizUZBUWJVYbYHFiA5YpXzJ2qZmoX4e9y3sqezF6Gjte5wSeKWNg6P8aKsQt",
  "key21": "3XoFNurLqf3Riu2uhbzKs183DoRwU77hBfVV9jEN3brAqkdPdmvWqLSjvGfdzEVJWrkUnic1SpQofAJMJK7buiGR",
  "key22": "4VQ7Up2ro2TaTr3vyPKpAEP2EGFk3xUYmtg8GKs49BLP2kdbVW3BwHHxoW1NJVPCcmwTmsD1CYnC7TrmKDeti9es",
  "key23": "4ZfZ18CpN5KUbaZqDEdKkRp9aoxM14A6ijJpNWKa3vMyX6fzCvEs1AhB2hcasu1epxBcpGgTNQnAFM8HjqsKWarW",
  "key24": "3SvE5LhgdPZcbRXTqDziT8k4p6BL4CVrxbuJQfGUWiGrr2rc7qJ4wnJXPvbXz8LdiVwB3qLudumPqckute3CfoRp",
  "key25": "Mgepa9UcWtYkMvDELh2fkW1vaMCSb99e6gE3oPChJvPyhxpg2UU8M6sPeZkX4SDm59C3AFcaR2ibxbRFGfYj6GN",
  "key26": "31fitrnhjAJSyivkvgnfeXGbZfkdpCZZLmRStiCQsFAutwADQTyrpuzcmwtpoaMfnZYQpJX6dpBw7TgD6H6P1ADV",
  "key27": "2qzGPqF4xqiQXtvkeMoyWwSkpRR7QUiEbCoBfA4L5n3fDtz8iE4mUAqQpbzi8LgrKJAmpM2VNwCARvSWq4qn3VG",
  "key28": "2sLitd3295hFfXzQK7ZixL8UPiGVu4EYtcwv2XzmergJwnVjYwvbsfcyjJfctdLkP6NnFpVTowEVUCnPy6LC3F2d",
  "key29": "98eEgiFkjSrDySkj5vae2bDzPsDQJP7L3nSWmwHRTqHcPfCptEaweVNifqzsixJpFLV5oyHCn2unU8UhctqAREu",
  "key30": "3BPHBn4Y9NGoDjLyzfmvCHp2mers8BnYs8ZcCu8uJuFUuvMkey52rJK4QMLKDgguE7coov3KZJNGzp7Qs5L8vpSD",
  "key31": "5vU6U9KN52XZFHeV52sLAniushVMdS7ymwAuc4Pu68TaDmkDFjUTfpRRh3orKSVa5JjDRJET7L6TxzcHdaFxNB75",
  "key32": "2trYfXSUVheShMj7ghUvjdx5S3a6K7eNgb5x3E1nw6y3n5mZpRX5MW3XUHwua2n58fUNjqwJBzWGaHqe524U6FHx",
  "key33": "2BTF44QMRWuicZa32ZyZqi88NzppS55adSffV3tz7s7TT7i9sV3QVYJv8XgwpXNuMRP2X4PFUswHTTXEno2WenHV",
  "key34": "5W8QAH8kSsJ42yMCfaquHvqt2QdnCTnq2REM5WnHQYnfd3JZHhWus3Y295KkPajLrLT8amAGJh7cPE6QFyb8DJuW",
  "key35": "NRNj42q7Ni3r8azU8QxuTa9sV6vTEUdVtzutokSAGKAsEmzy9tWYswZ5LuvdF4AD5MWDUfputFAm1NbRnDF9gDZ",
  "key36": "3KYrgmAxSDhvBnHLYtynN6hGv2paq294BnkAeE4JeAHzjHwhdb94tc8eKiJ34Ba7KiiZQdjRCKrkjH7ck8dfDJMh",
  "key37": "41LxUsT7MUqrTuhHDbD5geZGHq3jbEo4QAnZWdGHYhmNYP3dHpd5KzXJDa1EA8CpYBkdz2YrZR1H8ghWw75ytdvz",
  "key38": "5yc8S7pcneKVU8kiuMFDx3QDijFFgFGTLGAi3GcWCU8AhKLwGMJDQUA78AhGxN87vSCKoPnvbg4vFkqsCQqJQ8xP",
  "key39": "4uuz1R4FzA1cAfbhemgtysiPXR8BsWs9F97dzGzBhtfKyWuPm8snzLSD5F8Z8QNwn8rG2Lkkx36aZ5aSXLeWsfZb",
  "key40": "62L3V5DZXHHs6GSqDsJULQgBEJxChJm95J2hrcfRzL4aBv9uF2b1BwFDxEfAxCRWBiV8814YVqHSftnKyreWv5Y",
  "key41": "5b4fJDnbJyQnA4AXMnXV82xzqbsN7HxX6KK5quX4rynoH8Mk3y8DZykVLyBKBxL5pAexNFoKrSD74trPTZopFMKB",
  "key42": "2QYxjjWV2M4mnftHYC5tjrFPeiLYdNkYaCX7VXHmPSqsmC122xhAzEeLewHXppXx9Wsh1YYYb25BuPokTB8P78T3",
  "key43": "5QCA1Bv25aP9TeNT11Rv7b5FiPvRPz2Gqe8ad5wMWmW9GV8xWALZY7cKNF8mSZMNDFasA1NeAFLAQ7i8ETgURkfY"
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
