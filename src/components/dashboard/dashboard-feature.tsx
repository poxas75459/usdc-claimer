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
    "mCHkzNTVqW1XDW5aExiTbgSSVJniRmmREAWpRJ1JchPiRa7pQLJiwztXtesAK8kGynT9PSMPsxy9Qc825AkCPB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58NAuH6VoAz76PoDSrMYeYXYGLLdBARrs5YiDBmgA4UvnSC3gG8sMsUHUXHZ3KQeZAvesXkHhjdaYymGLwd88HC2",
  "key1": "3jWVWJu4Rwz2UHXTUSAwYwjx8QViGw7WEEhGMYd8f2uT1o3wj5kpytmi5kzfBwSEXtzneVQEDUizt1FsHn5zyAVX",
  "key2": "cgqWbSjAgzcnKT32SCHjdFEWmKSdgZC5dSLBUqeiE6x65vDyhM59iQn98i2GZDXozvAGR1zURuYhrfUJqLoZYsr",
  "key3": "dxd7B2KqNzkrnGAPuaUyhc32gAUryPJNLw6oRMw98yddio2DnB4jHRpCqfjM8PSejZw3RfvXb5C8ymkbve972QW",
  "key4": "4QggZ4T456hzhn3uBEZ6WMHZaFsQARjVSUrSJdBgiA3MfPzZqiSLAjLXmfq2ktnqtkiW1EQxu4Nu8dWtePYyjsvf",
  "key5": "5VxL76zQ3RgPHJWpxMuEYrv6KG9Cwps7cGPVRwq4vTHD9q7QuHML8tjAKsvNpGC8mRuvH2X8sVnavJUfeiquaYgm",
  "key6": "fTuRaKAMfa7dQHvadQCKa53FCsfofueyseXWdPKxvoMRJ3KTBy5KH9eu4AJkmTFrJRkHutMuB5JdzVqZdc2LkhH",
  "key7": "HDSYyrPUGCaSKLPGPXJ7a51Uur8x8uCtbH59XKP9hBvHP4vxjv9S53RXMNn3YgjE4MUwsnqboLysHGjKzxRXe4E",
  "key8": "2goSs8BfQ6DNH5muo699XToNpGX9PEthgUukQxY2hupry3wM6xrtTaVGDrr3Zc5KsQ8aYYHZSC9hNnAvcwfnMRbd",
  "key9": "5aNUwHuAhGcjUhXyp9FSyjHSjTtGVrZTqLMiWzz9JqPW9BKFBxiLuqcwfshF3SUBEXpUw8sjKnmCAnggPmDaqwXG",
  "key10": "4FY6LdjXmeZN4b483FAsTnJaJv3W1pM1qf6jtSWdDR6ptMsutSdtZMcf4sgFHRLuu2veASPD18HrXQa9SYkx4adx",
  "key11": "5Rcy3XKKMcort892Mbo4KonRcXC2jbFFbvXJMGcCxKekCERhseAqAvt1SNpojQ1QJu3RgkEGaQYRv9tAKhCsXhrD",
  "key12": "3KZYWwMuzGTTjeQj3qoQsLWRMPQbh9AqNQesqenAW4HxFSPSBwFBn3RPhyuS1RFQNNaZ1aZh3BL9z7pEvfVnz8nT",
  "key13": "MiS7gVinBQA2QTSiRNV6ekJp3ZAkv2C7UpHybcqftFUn7A4SpwHvgtugaYXpuYNfDdaqvEoKkwcqp8uRqRnVLdv",
  "key14": "3k8TXsbjAEk26CS5vCHCn7rqP4cc8V3WCSDF3eUwNYnbxa7hNyJfpgiZVqYeheqKUGtEkcDNffSobxebQfStJwcV",
  "key15": "3LQpa248CDDqn5AvhBgtFubYZEg4nh5msERzKEFxdWczxvpWizrFpYbtL9jSGZQgJ1vmJJsUgaD42ppbEJmhh878",
  "key16": "2HGg1QC3UWzoUWzs2sUWPsm5TPLjVw9VHbMtAeJDAHQUGybGAmBFkbwrDfADu9yXuj6ZYPtw2t4HDga38BGd5LQk",
  "key17": "4zGAMvUcHTQL6X3Zo6yA3GNSdeZAsonqqvLHcM3NnvyKbeic1tYtkhEYBkAz1Hdv75KNXaXdmSuUGBnSRur6ao4m",
  "key18": "4AU9y6iWNZ9Q2wN5TpKAAtJtFfMkF9tsCcJ6P5voMsB8X17oosyyxKMUiYAg4kpf3eaUhyKwnBvwTxz94Y5RUAve",
  "key19": "TLAi1V2CSN4JCVXyRehp7HS2hWeUb1HTrzKqwnVR4o1hVn5DamCdMcMQ9yPqQ8nWqQG9VzeA5JWRiBAkX7Zjti1",
  "key20": "3zEoY68qtXjF6WPeuWigKEF3qTBF37CdYB1CCyBUMd46z8qgUcfZhVerWGZz5ZUWSMSsMgN7pLgxgP3YDh3TLXhv",
  "key21": "5pc7hi84qj7UBk8bAmeWVXqqLKZYfjs9Hr4WvC1UNGVCdM7g28aaUeFve3Xy6rJ6rppp3PK5b9GKRXdCg5ceXjxL",
  "key22": "3MQPneFYCzbv5ehHW3tzacAwKdcf9gf5QHLCDsPBChWyxqqGkrt2pMDmZwUyVJ7ye7vzyKBpv3kUA7h5FfiSEsZd",
  "key23": "41ths5d3TxQqM3dEitWWBVcgBeG4mNPPS5Jm6n3wHm5vniARoAN38cXUfbVJM24x9rX9SLb8mSg9PcG3CSxMJ9kZ",
  "key24": "kw4xZKYUuEBdnw5t1iKHuEQ2CsAwFc7bXHW824gnQhkV3idX4QSvD8a5ihbr4edK2KTSWs6wFpMPTVy5NxHPJDM"
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
