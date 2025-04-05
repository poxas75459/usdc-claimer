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
    "2CZuJSozFbFeBxrciB5YNyj3H8uuezDmy7LiaYedD28Zd9dUV8Fn1GwpZH6ccSzf2erCbuixZPrtaDTf9uYBhrYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59U2y3Ap6BxhaWAsPmS9DVRnVUhB4C5YpBEss6wTxdvE8A7tvodbKndi3gvveEfMfPbHqv4mmJbPma2otdWCAZ1g",
  "key1": "5tTuhSq1A3rnEXYw4dbwj4HUsrxDPnQ74KdNBBHV4GUDNnFyxNwZsMhhgXiNXKoGWrzp7AALTRMjAHyYDDjvQiv2",
  "key2": "KgaiXRqpCjnwUc5BxocLaRiKq5nNscTWv4uAcDjK364ZjFywzVmiFStoFxjaFNWuYkyuQPMAHPyHCFn4ADjQzYd",
  "key3": "3DML5dtrykGbkCGYGUJm7vZ6vSwjrUzaD6gYSBvr4L7Mb89nVkUDYbBymGLhwSKoJp3p61b3saFQGEehhUhGbUdN",
  "key4": "3kUJDW6XEGi27anr87CRhBmJtwPQvXNzurdyDHKqAdF3zZS1QtVdeg9fyb48pLSoRmXEjyuRmcUGBdzha53m2zha",
  "key5": "5jqtsqWs3zJLFV5FKFka2VBQaQFZMNcUqrVPp54EZXtVTmgJJXB5iQQEJRvN4AgenFdPf6fHxyBiTFzNGzmVoPdo",
  "key6": "4ib5qe9Es84UjcEq7pRMJqoPgCCGJudKpNWEtvJkxB17R5xhLJMrwgdUYMFfbLqNATd4iSepe7X5oj7URnPcD2nV",
  "key7": "2tYVX72paj89fcCEp8rvZqUTvVkPJojkqKoAa2KMPKSeovkVC3dbaU9tDSBC7JghJmeoebR6qw7dVKY2Y18kFMH",
  "key8": "28qDcP1fQjiAuG2bDK7wQjc77ALXczfV3C7VJBdookj5KPFNaYcsHQMorfG8NJGv6MQkQ45isBFrmsUUu2CAu3Nm",
  "key9": "5zKabAgz8hiC7teVNVSTUVuno4xxLmWqCiVYiyLvDvDSpda5nro9mhZbeWExbFrQuxH7cR8QLt3YUFRGWbv9CQD5",
  "key10": "4zz13n9oGtJzfRrENftXJJCr49A468BEJqDCipakKHv4afKnSDy372Pi2Rz4d3ELVpAriySFFTEJNhGDxZpuFgDq",
  "key11": "3YfHYBSJVtZXNxzGcB4cvhKygg6PZMXdM5BAZsFsCUG7fSHvr1w7Gg3CKX8hcV2qa9qHDKFoLFXsaGQEUycLmNah",
  "key12": "3c596wFvKQmdDd1zyNZ3ixWa4HkrQeSAGMUxk6MBAN9ryRZqXfGmce8VzfTJBEAY6JhehEEqHs1uRLGvfrvKvkFy",
  "key13": "hPD49GaZLcCXqJN7k6vATTM1iaFTqXUcSs7MV6H95wbV1dEiW6gQWnSLrU3WXi2jPX8EnMcLVrrt9WKFxU3H3Va",
  "key14": "5AKJbzXCvWP3Nh6hccVMp2rJrzaiJpS61WsDkt6DXCR5dLJeAXcpd7yevDyJhNpKywr6iTcDuereJ8kfhuKnWsxX",
  "key15": "5EWYGV5JVyibZj5gGvQVM2wKJWmwHzMnJxX6KTFMhsEypkhehJEJYH1zHZEVFQA9Jw2k18Jxr1voFk8q5jWrzR93",
  "key16": "5n4GMjVd5W3VjmUPWUcE1UyaBoPa85GnEgrm1ubs116pE7ozYfdNQNSsjRxqX2hFfErLtAwUVPqmnEfLmnjRvg9r",
  "key17": "3mrnHNjeGSodDpFUoKvfXjuhGUkhUfCwSCkDXrbL6tjm2csj2hQU5TCvNzY657PzTRtVJeMBnfJ9MUGZbBfVDFhM",
  "key18": "3KA1avjc5yUDD5xJdWqhzRJ68g8tNpbZ6YbaEyunHiNcSURzBZk6wtsezbu4RDzz5TQb3v3EUtSJLJnKfyfKg2bg",
  "key19": "5QvA7msPcTHR6zPMfH7weRbx9iM4uhRdisXxSHVeV5sWLRFhYoBvewphHJRQKy6vqgMRy9WYADkaodkJTDuKhZZL",
  "key20": "5Xb2yrSZpef6agjzKAGiP6Hsvg51xooHR7MMRp7sK8fsACaKZm7WMD7USh2gb61FzCmNiWuZXpTpXVfFXRt43MuA",
  "key21": "2HSbwiBvs3DjaHJFccLTHqBXi6cibTFk67si5aL4gERbiJ3viHUDEWnLbqiVfReb9SUpotgmdFzPAqV7MFS7A3BJ",
  "key22": "4dxSL5XLe8nJTLQEKE4pQr4LCmWRXoZNnL4KWQa3jHgFdPTUSoMCD9osegVvt1dfpBtt2NgpsGkGTtEAj5eLB7SV",
  "key23": "4TrWgQL9bgCiHnH5RfYLESQUbqPYWu9GzVUbqQ6pzcEETvs4faPVQWm6AeoAPjZgfmV2Y1sd1Fywy6yrKpRHrsqV",
  "key24": "2Fr8qTm54nPZQkPyPJqj1oUC51mur5vFwbvu9isDqwxyyuJfE5GXKz9LHNQNty5gz9uW57G7YhRmgxgrLYwnAt5d",
  "key25": "251FLsLF1yYwDA34vQ163fRgcEQoW6punWnABh4dZ5wkARrksGGYURR8xQXHmUzjxJqDiAE9SUtVZPQy4b6xyEcL",
  "key26": "NMmRK1sxSasZUJYj2dvPPDGB65yninh73qQB7uot23PY3a4BnofXw4NNUpUf3yHzzqD9NvGUX3YJMtFmPWL1jay",
  "key27": "mayZwDqFdTfmFz3Cr5yrGcuGmgiKcLFfbNcA4KpKhapbbffqepUKu48HHQZ9NSndq8rEmZLzKKt4vvF8dBexTMK",
  "key28": "5jYBvioRGBS3RoHLzc5qGgxw9UKaCPERsSGFYifZcTq8q5KSdu5vJqPLAioQUhxh88L3LYMj16KoxCEsYS4kEhAY",
  "key29": "4fUykAs3Pv4VWdRBb6zcmrdmYbvTsApnMq3CG6HRAVh7BjvzqSMCyYWRNLYCv7nBgNe8nzYuAR5zb8eXWzTpkf94",
  "key30": "2xeeSAXBgz19t8MrkgDuiqZrLc5pRT5qrPJ6Uq3dNtYTxhVrHdvwVpUkHtSNd8EULL884DS5gqiaaGFe8X8sTwKd"
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
