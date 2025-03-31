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
    "ESXzkJeKvbd9GZ7FAcBv2nCAtpSBFFpg6gBVbDJtFpVus1MCysmTBmAjoqtXyeBQW2Rvt8bWANMcka8sCbc5JZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41gxxAZMvqAW9RVQTQYdGSkaHKK5XfE3Cn1n4cPkDBshraiFUNHuCi5jPoxFo5Wp7ay2cahkZxWpVMhQXSeS8WxL",
  "key1": "5JJLk8St2oSQzR6iWKMw61c2shJTrnYQ577Z48pHa571BkAEFRKNJS6U3zcHvS91XpLfDsnXvBgY7ADhQ7U8pzZZ",
  "key2": "2AQBXsQ6v765F7dUKAfXygDaXov1aAbdLKuR4Apd2kAiLoLyF2nYV6Fg6E87KN742FAsijVwbAP7SNqbnp2fjAAE",
  "key3": "2fxXxNhhjX2UH5UHkH42VNHSDGZ3mJQDifEt8Db9MQC61rZUEj77LRmNPGK2ew1ni6uH1dFCtkAZPXVBRb4LwAHH",
  "key4": "ncUwvmREB5z3ud2SHuDqhR3LWoYT3qEkeGfmZ5sawuYV3UFtBFxa2xGHXdGsvhHTXnmi5HiFLpoLsVurN2Hq94S",
  "key5": "65reoeBKUEpVwSKeazRyzMdswmsn6CGd8vSHu8jxmqGHaCL7AkbgjJ4GJ4GajnQM5E6xyttQPHVhJ3QuWAxk3fTU",
  "key6": "2xg1sPF16o1x6cQ1B9y96gnVbHB1GgeKyPbRNZZ3MRufUSmsDthNQFmCtupeyKw1gApCPmxc1zqSRp8TidUhkwbp",
  "key7": "4sN7D6uNFaTugVu7op1TQdYJhDKan5tVEuWj82EBUiS9ygK68vdyounk3x1Lk1i7DYywRCW8Cef3yp5CnvHwQraE",
  "key8": "SjabRhCD1qsEGL8sw2d8v1SVo5pRHqdLoU7BqwqsZFfQyFJ58wE7FarDKgWj7sCDDnrzrD5SkKaJVSk29CM83uL",
  "key9": "5gK8dnTXSfH9CuiPezni1Gv9RtCGV9Aemnvn7UnRLkf2wFNFuVakVjBvTUZZqiNmZDqNAAyjdjQWRR28Zw5dhesp",
  "key10": "4sgwXy6D7TdP9kL2bTLbBEj1fektetyUKvGJtKpiBGd93vaoRXhKLAKNkAVakZ6dgr3W8GA6DfGJ3ErMvsvB4eHj",
  "key11": "4gsY26rCKw8FBzN66P2koottmbuyosS49o4rMVmZdxeg3drLpheaQdpvj3Fr9XTT9PAqiiYx4hGnzQ3xmvJ7hoCA",
  "key12": "2ws6A4V1eYdpojzvAju1wmahbyc2fyHMPzQMtbvdmZpTk8PAPbCqUmxvXiN8ZtTuNSEJq9KZREUZWYGeSD9VVwpy",
  "key13": "5r9gKF88FEubjNQiz3Ykgzhzqm3bV4ugaMrZW4vFHnjeau2tYstDRjiXDQ9LftR6ML6hXtcbQrhnyKqZApa4iep3",
  "key14": "3Uo1Hjm9Abe8mCZCd7qk3hdj5V4FDcKqHadQwkzEyvZb3fWChQ6NnDkP6wiE5dHHYcCC7g3XpTznk89EgQ6QA5JM",
  "key15": "5pWjeR7ceAdEeGkN5cJZWDM1ZsSLGdFdtAFpWcbpHENaSvHEaYM1jnavF6VjzBqAVZR7scjeb6UxjRre6VQcQTFZ",
  "key16": "5A9eenFK8sAUdkHiQmrM4zpZCa5m6yh9NNeRPX3YxWcpvUfpk8tzAYSm8a7zsDJorWE7XzJFL8s6YzMARb4xMdFB",
  "key17": "2dsJHxbGJPKzErKskVV6xSLEFF35r4Ksv2FfM22jmtVmqprQLcnAKwcbTv8m3RPh5CTbZEFMcaiaf6mPyvL57Yqc",
  "key18": "3E79Qcfh7v9L2M3E8oqrufbeFUo7cHQ3fkkrhwM9WL1W7TawmsyMCWFVrbNTUmgkoHudrEdY77ABQqX6EGiN1UbK",
  "key19": "5nRb9AV1EMPqTCQnuYRwrrTEozWZ6kEeqrMED7w1Etgxf5iEUgCFqM6esYjdiJAm3nuZvyRUBPNkWXJZCJ2inZ6A",
  "key20": "3ibACJcte7DB1bj2U7x9jNe7SHtg19xmXBWWTGwTVns7seePqawwBC1mRqZp5HDzGdez97GeJCBbvsNHpLA8KTRn",
  "key21": "4eUzyowXa74p9rWhuYh2rkarBwnhZMp1bu5Xj1yrdejoANKEtrDKTWy6Fw68YXVQYpAr5iQ94s1GKnFChPyk2HZ",
  "key22": "wxGzdmnV7ved3NrN7PDWvEQipCnhjFPrCwVaxQTny4tqr2teL4GicDfhGtG8J83jMohD1UX59cs7xAtrZaP1zER",
  "key23": "3jy725z6E47GRZwGRd5vXyfx5XsvvLhoUdUB7MVXFNja9aYG2QSSDYXy8A2X9pXtgjyQxiKHjwqiFbpH39swaoFM",
  "key24": "2sokMArzUTnw3xqPqCfEsHKCS1unu4okcyc1VzYttPYyHgagXjf1kPk24qNwffasPuNGvVxLk3WzjkCcur6Dc4FE",
  "key25": "HZ9tQskvHcDyFoyogVfkSM4Hopb4sVzwvfSZctUhoW6YxcGgnQuyhb7QX8XhzCxt4w69DXdwzoewyCJLqiMHhqH",
  "key26": "5zpePMUfYs2V2vuqoZJUcJRgcDBsyxedYCb3JUpNjz2ZJEzrjCYSkrk1P6QHt9Ao4BEjLEQsujr4PguXuvMFrbrE",
  "key27": "3k7o1jM5Yk8G4hW9W3qm2VmvHb9K7kDtZdDPFKUEk47Qkfo8TXh5Przx7uiYNLmBGQ5bpqJwSBYa2p7q6Ce4D9U6",
  "key28": "2TWg66SzKicrGYwtgNhRmhjxDgBmjzCfwxGRPgpFyyydrUvZtpFGnXmT8ytXBzKNjzXxPmmZH83GKL3A7fVoYPnJ"
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
