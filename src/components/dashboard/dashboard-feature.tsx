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
    "5omJHzgDdoVDDj49XLZSvndqCxxr4ssTLEecDtUGzVVW36d1Enkm8kw7jHaqH75VF3X3m9mXukoQLLCGVDG9A5KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtcntPozeYToofovgUdy91PWH9tgEU1ZBwwMUNHKffASBmutSpuN4AfUW5V4S8g5GC6eXmAb8ncvmmGRJ9VLqre",
  "key1": "5qnRi4tqKUGKwYJikFpe7n2imALTS4QCD778TEN7t77mZn8RsoJgUZae9r3mA1ESjhAQhHpBnZJQ4mKCtBSzwrL8",
  "key2": "5WcdAH9tYpquNLjs3JL9PC3fxbqYR1yeRG4m4nbVHcpWCkzQ2DoFFRov5c2KPs3CW9NezjHR1vZzSK4kgRu8VuMW",
  "key3": "46oiSbp8rM3oVKYxu4xXg6eRWA52s19SjFUPLLGQRCGQr3AWLMbvmJRCtb855egojcBPVgtDDnMUFsm8Rffbe5DC",
  "key4": "4VLSrYvytBEzpu2HK95mhQFCS6hmSAkZD536ha3M7y8ojTvQ2ASfJ3E6RDD1oPqqvsEComceHBBMq8swJ3R8Pk2x",
  "key5": "3gXWGxaojSWW86MLvcmJaTVtrLaWRuEqCRAJop76xHipq6NQ75KQoTUXueRvPu6uByUqzU1865RMkDoR4ZCNDbWx",
  "key6": "5HzZMjkB7boJfSfy5GVnxvFUsj5Pp7brqkSebHoYs3RLVXAs7JSTdeMUa6fc7fw8Z2jkRYmbSDdEKCwYvwJ74TxK",
  "key7": "55w7pkKRihmWqYDTJNUrtTu2CxmaLtb3kCGQWVAQmQV7PQe6PhgnVmJuP8mccwtgEKnvp72ojKAoeWWxqN5oGZLg",
  "key8": "3gXifYQ6XqGU8Y4mohX2MMZ6tHvmqfikvFVxyC9uV8LK85qCmsWGi7r5AfUozQJJ13RnetRWX494JqjyDCQgEfqA",
  "key9": "4cJ5ze1BXCNaHi3a1yLzH7u54iZD5sJneGXuNvKQshQH1KgRDnEaMH7tLH4Z94hJyPTVEcXrjCKmdxtsZZYXcX2x",
  "key10": "4JVGbMq1HQ5Wm4cpUvXsVHxn2VVDJS6QWwF9whP6DwX6Zxya3KpeR3oLSj89MT93rLem5WtaqG4553Sm41FpSxQJ",
  "key11": "2CMaobuBWVfCxD4CvHrzsbizdcX6fmuyTDrL5YM418SjGPMRzSeNrwWQM5BBmYcnzqUUVDANvec36X3XYCWKE2R1",
  "key12": "5turVpdp6DNuAc6x6ATmHXDckUp14GPSGFn8ERgz7x9h7XdpUG8S2AhkWtaWXAnB3AkaMKi8iWPL22uHKcb5MRPf",
  "key13": "7TkvkYDZCUUefK4ZJi4hCqRorxn1MnCUUJEuNgQDp3VByedR7TkpWgtrxGz5WjvmSJsEDrAj3vqodsKWuurPs5D",
  "key14": "BzTJybXxe5PekZwzgKSdWXCXNS9hdvvm9SHJoXQrzqF73rLzcpfqtmdCxQmbWXh5gQHrcApEngCmaRtTrhedxQe",
  "key15": "4LMT1fr7yQnHrp2VcyBpvdYbGz1CJxsitNQWTHxqNJ3VhTu6tjDVKPexHYSmDtwVs3NgSxEgUYAsZ2T5ftXGZH4a",
  "key16": "3WBma4pv3CKt4Cg1FDLcgRfaoS55w3AvWRJokc1JWZKzXTjpR5eqxcWtFziechs4rY1fkNahp8sNAjQYJDCANd2F",
  "key17": "2U6Lubo7F6wvKfv9eyZeU3WQ7EgQr2YYvi1vtpFHPYraJT7nu62NGJTpeF1P5baknDXGoP5GFdY2Y1hHURcEZGei",
  "key18": "4NQzPNFdxKWdjtMzLdztdxx21jeW3tqbgEhUPkKJGpvY9pzJ1ze2qcs97y4WQ2fAeirvqHLshDDTcRwGwyYmyGD5",
  "key19": "eGUaGGnGDtAfjGiimiwxQmJB1d59KztM4c33a1SB1kEJ7qP1ZWpG1TVGJ5h6DEchsSYJJGu7kPZto16SBjbtuhp",
  "key20": "4FajBm7zDjAxnTacHXzxBrVfb2Hom8pfvfokAfPt6UVh2QJ64buZ1xjP8JxA7vviCnhzP12owDguZdoUxTKP4iqQ",
  "key21": "5pzZ24tWMyvd77U2epeLvyLSuL8eE9uUtBgvSw76kTifr3U3WB25R4QonEwgAptjURvfQ2EYxLd8dxTC3tubCe6V",
  "key22": "VXyc1NGrhBFsUTribfs6E71oAYL3HQnAMaXaDKadzeDRBHfaZvHjFmJnJsEWUo6E4NfQrUqStJSZg7Jp1R87XRw",
  "key23": "4NZ3FPjRVQnDw76CDpHqasi5zDoLPJZKJK6H7ESki6ZRTs9nKsZWfwQacTTLgbBiHSM1bkrna8MPvixxc9do8h5k",
  "key24": "4CAUPfdS6sAPkZJQ4LCWpN5QkRsZUMjtqA7vc3Y1Ds6KR92zyMtcLL2UMqhCSZ7tzUSXhQvS6WRq7gAn4sWKFgtc",
  "key25": "2k4NxRRScnACBnsbVv5HQ7xPUAZEr5FTjSnK9uTEsQGzh5Edk4JeLFv3TczYQRg4rfRwVSW5PZuysGfxGTNryLPD",
  "key26": "pg4bE5ai4XfeytRNXjPiPnawD7ZDU8f14mcXiH1ZWMXHg4ToEc5qLumC79GkE8dJoWNaK7DvfTMEA9J5RLozVMj",
  "key27": "2bDHiY71YRUD24oJ3kugpNbrDn6AdNQfUPR2m4HJ2S4f97KviGMwrfyjPnrYq5nuJQBiXNhGip5A5wLb3FYW7c49",
  "key28": "2jzLrJrH5T796Jy7dreyW8BKowJCFruZDTrH3onfZgesbKpoY5EmLtHUEUpUSUvXs1ARYZjgJBsvGmZqaC1Fonmm",
  "key29": "5df2eGEnzj6tmTbLkdaRLdJ5MtuZuqZXK9pqCExHxqvsyzcSdqy6rPRAFBnBnSQRG3C2xzAAZzSwvE8zNV3otEvu",
  "key30": "4LqfYrwfojPn8t5DsXiATy2FJVUzGHP311rixunqY1tr2UNQoETE7VSe4Dwqz7JjG2tq5ZA6QJuWUVBh9SfSGWL",
  "key31": "ZJb7pA3nPZNUAW3AK8SQ3sVNHGF3DfmJDntL6n8mtPkWpDGMeMyG5tgdaug8FmpNhNkGRuqVBc7Xcn9JTVWfBh6",
  "key32": "28hzBvBZMGtHNH69bu9pheqgrwEy73GwskaM84RAvcY7Dwn98Zfs2N5HEXKHn6GmFSRK3ADgCX2mRscwy5VAa2tx",
  "key33": "2zus7NyKyKkHnnfz1db62MCUaPoBYmNS9kwQ26L9Q4j5hPcGfK1ferQibK2BBidDG6nNAjhuJRtRXVkhixZQot2N",
  "key34": "2EzRGKBWmLECjCpRaEb9drsoputzFiV3EVEPDTgwVzK2Uf8n8rG9oQ3YDwCyYWFrg58L7pRdoRdZcdEQCc1xq4Nh",
  "key35": "4muGzx9wX6kJBd7Mp6w6ggGcYTrKYbYfvPuTLjdJgTcyKpS7b1FwHuEtagyt34Ei9EFj6ULLXeJVBeoXowMiGwzx",
  "key36": "641aZobhMUgmxB4cLYqayWuZeakbUSXj21B7KZr9fAsx3Z3w1vZq9VNwy1uTxpzkd3VkAQxqPVFm5AmNsQiNWraP",
  "key37": "5thYHtPKPnVVg4C5ERLjZ1LBhTadw61T2CjV9wSMS4mUn3zhsWNfyVgjK8BkZgFUNmaaWHZB2Q6GNnh6TqXHYUL8",
  "key38": "oboL9AxzsJZzZ5NDxqx45XJjc4Uo7HufX4od9SEvANADHkjuhD2o8Wzkfngfx8sQMQ3aZzXPRRDTP2LcKGBF8xn"
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
