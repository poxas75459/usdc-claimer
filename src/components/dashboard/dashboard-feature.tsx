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
    "26cfZXPTwDuZjeuQcDfzFyLGvTDjEMBPyvUKPnZN7TUFKhoXS1P73eKa2AacdSQH16HqkmFyeiWaT78neA68AzXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Umw96Z3xRGQJtrxwiAszAjNtfh4bwJEjD9o8CwE3f8eeFgsPzbHXrszihmi3hrBjuZ9BiR29vEPRc8dzuYdW5SW",
  "key1": "2CBc7GYCUJpRw1JfEmjqfU3S9miPUveJgdXxU9zJweBvBC1fZBiedYcnEjgUojaKyDGG3j5c2HcV7VzChuFvYmyu",
  "key2": "51aWsumLWKCVR8hUHKpm4zV7hopZ14oRZY3BR2crwZNjbRxFJUqPnFuy3onFK8vQv5xnDybb7Ru37uWGx3bV9tcp",
  "key3": "5JUrfumtxKbgToPdKPgobcXiTAGEmVYSZVdeboLZuMqvyswhVMaFFfiVjXuuqsDpyPbJRPKYMMgShWfgDMBtPb4U",
  "key4": "3spyeBw1TgkXyn7dazhnJYtsBszu2zJzvwtBohDKEQXSyuid1z5PgtU1rMW5nxH8wWifn4kfjsV2ka9SGjG32rbH",
  "key5": "3yYn9fFwE4RBj3sYDtsWxbB1FYwXo9mk7wTAFxAftnMd5oeZyHCcZTj5hJLjEF4SCTzGgZQHNZnK2yxpkqALb8J3",
  "key6": "2ZQpfCMTYT9onQbC6xbAaXckL8y9suA15ByYauQTE16fktFYy6bsxdUqtaHNU5aWt3a4uR2MYgZNhkxHek4kRvKa",
  "key7": "5ipZ7xXz7sDAmyDoXCSYaS4BE2SqmVmkRHKWeKuYb4AsZvmqY1utxD5AZq6E1hAwtavGG6gQVKYoxykfgit1XvLn",
  "key8": "5krmAVcpHhx8ic6NEUyajdoEEwariVyJ7GDuzpXoWpgRdvsJVEqgRryhM8FeBVJdPxpZYUgruUkmdtRHa3RSTVBm",
  "key9": "3WwEJsNUtUAJPUFPBNA4a1TS9we8SwsLkJ3MQnbL2FFdvTTHG91dhRysqjP8ALU3mK5nWULmHjeqXbwiQChQJdPE",
  "key10": "4wQEEp3WADLVEsHUgmvLmMdtFDaJ3XNmhX1HgAx7kdMpRvR6dykGf916rCV8Bsv1zfEG87CLSNn5wJ3wg1MYn3TU",
  "key11": "3rMcyXrJG5JeqEMqgLeJau6QmijEhtZ8y131VcuLt2RaDT3KWGXEnPwWkmMHAbArvVLNRkGETR4gYuirrqxjRSw3",
  "key12": "3xjV2RNDsGxWmGJqUUwV3DoAFyuWfHCTwLrWLXRNgfs1U2ryqNtdN6y4VapnwHTfupxomY7V5NiGesYcDqeKrtL1",
  "key13": "4eNz4uf9AkRKws1Pbq8yUQJKTN441cnJqrLmkF3CtFweigACNPcecU1aNMYqQeo6L3YzJoUYsuvsGSp1DX8p2TKB",
  "key14": "3tPsk2LurM8GUpxdjmz9T6Pi8o6FX6NSaFqb4BPgwdq33Ri67iaaTqDJ7JhbpMp1hTuYoJ9g5JU5kPyz4eiFVbyc",
  "key15": "2ZCDdXiv5yFY8QL4veuinteB2doxwScVa55fM1xNXvHffYMGbN137EvFcscNF96QnxXEwvQ5tAcb4RgUcdMXXTCh",
  "key16": "JJotvTBWmvJFmRxR8kPAEXJyQ6DeDKRJCyhCHVK3tRTtxSn5AJBZ7M8LArprLe8C7hyUKwe5U5btDUefpH5Jixx",
  "key17": "2eNF2pJkzKsC2STyw7ZniMZSqGiVCWDvXJ5sQYjbaDPvYV4TNsKyfnSeFKQvJ5QAin2e8KQBm4qCgVxPGXAHR6QG",
  "key18": "YFBurDhKmA2ZaUgMqTfA3CgLhdfuJFWbLFCv6CaCZS3oxutEGbbN31b37UE5NkVFfkmzhD9NyHikeJYR6mrVuBf",
  "key19": "2bTwKPPGVEJJKs4viMAGBAFB93ZGLzrX8SNQhdyJPvbjWPMJzUKgtCJ9FpVdJmST77oo67L6JBsPaWbQ2GJfT2oV",
  "key20": "3ZUhxGRQHWjqrpHyyfdRcDGquU6J6yqsCSbMkKK3w51B8LX4ZCfoexrKRUW6vMWKMgg9n5h5v8SRZkNtMeR7Twnd",
  "key21": "4ABHJWKv6V8Gmz7PfRP7hZHre7KwDoapjaiMfi8r9aYVqKDhy3fdjS4yFG5NH7yYy9Xprf4CbbECzLpMP5Hgh6CM",
  "key22": "2xNgxmoSaYBCMnZPCKb7T5bWStpZzb3WzkPTh8AyViXfJ5KrUyqmhMdfZsTiVxhbp5a8YoFhYYaM3YdDqEUh24gk",
  "key23": "5ug4TD3spWcqznYjJ1BSW3NyGFuQkNByrK532QgUgPjeXX1MsSF8fVVfLLuZViZws9PBZGiPSToeHo66VvrjdTgp",
  "key24": "5bxhAJJN3ZEjxDeztbB1ZQeM1k9MyjzfQVhEAzwzKuSXbQnjUoj4PABoW4a1d2jbD5RLx7aeEQx3y47AaNRkuZMU",
  "key25": "5g8SXQGFnesWTkDufhgN8eDmtXgsrRjR8yKiRQbcULGys35xojjT2qwNzon9e859m15WyWniz7enG4YKrW1zpGeY",
  "key26": "4mdG7DTVCADTgo6xhgNNLX6KfKvu3QYQA3mWu2W9kAfpC4WMRSwsi4aMTaLkz48kAao2jU7wavBCWAojwtmzgcLo",
  "key27": "3mhQAMNfsnddxJKUnRxK8BqorGCz9h7z9uKRSEh47BvmWcsDExmAw26bDYf6ZigoZv6KrH9jZaYRRgJivuJJCv3C",
  "key28": "2PMuYsYFfVC3BErazHrtzAcPYHApJxcMPjWXhPuTwNecqH1X5j2qqGtkAFp6mAq5Jkj8bHRTUYFZnURVH1Dd2o5d"
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
