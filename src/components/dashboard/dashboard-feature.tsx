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
    "4jnBQ6qtkYuqgWJERGBvF9W5XYZAdb17QiyziFShtsXCqYFL6tKnHjQkzf2jrTE6royX9FvQMKGa4nfpncDb4nFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBpZu9Nu2pzRTLcDhvjjxtQYnUETbTasinugrZ9mNB7Yc5dSHxJFPQa8s3mpV5Vh2nWubhMTyxronYrnMNcszLc",
  "key1": "2K1SjJiZ54qbdgLojYajBxoZX5PspAd2ou2ateReS6ud8VPuBxJyEjBaygeP2xhRmeNFhdFc3kYCL7j6srYFvoGW",
  "key2": "2g1eT3PQq8tcbgUURA6qfzpNV49rDpSRJBKoQri7aUF2nTpAq1haCSyN8KMpqoEU56wTfveewRTNrFwzWdgZTkbG",
  "key3": "ZhZLkPNK4Y5kAJEkLgdpWQyA8tVTRdyAmnmmND6GVfpa96HsKPEG8u4wsQWbHa6ZryL3b24tzDDmxeZs7m8DSLQ",
  "key4": "mCbiV4CSTR39sCrT9hz54RuueAJQseNgHQMGKe436ktxH4tn7iCjyHf3jtNgS8gf6bKduYSFQbrAkZFSwmpwTSM",
  "key5": "3ziivECdpAuXAA58wJhBRV7nasCz5YWLZ2S4bbS8aJxvfHN7hhyH7ag8Sb2yuU2vwwZWQnBs7nPCo7q19zsgKD9c",
  "key6": "kLkDor8HR8tkJfBKpwDWXvf9cmLqrmEx7KhBZq7778yRFRqmCmrp1sRvraNiTJSwvHphUZ6XqkddUAju6QgRikv",
  "key7": "3kPb3usMvwiWqUZ3nUpv11w5yK9u6kncqpSacqoagBmmjMQdDnZb8S99D8cWJD6un9uGdu8P96LW1E6ugnKSwnSC",
  "key8": "5MgGxAQAbkij65pUbfzsgpnVxyzm5JhSbEt8qwRk4kXeurtRZiDBCXwHQ7mpww5gUCUCRQ5EByVp7vjCEwFBMV9n",
  "key9": "5AqetWmJiu4m6W6jH5PwdTwTy7oJtLyZiLKEiAPkAMBzynhiToVSE7YBSFvCwJYqXkuSMe4nAsGe6WGNw2ikMkHx",
  "key10": "2JczztrLqDNWMpgqSX3RS8ccbMhJhTDELEMwzqCLXcMPW99AVhC7SdgirGNc3AFdGL1pshTcK2Zj681v7BemKqVf",
  "key11": "qoTBbNSCW45vDNTkvTg1TNQNMdmUgFt3SgEjo8fZ4isEkeUyN2fsSY4sLW84aJkCkVQb78KwcrfbJW3iBnsmJuj",
  "key12": "E8McUS5xLZPckkhGLroSvTswMPNt6xcQ8XzRqJyB76VthZsGXRoFJ1iYTDDsj4ewZEiY6e37YJ3cC7PkmXbVH2i",
  "key13": "2KdSxu2oMqQLyAGZjtjvoZeZxTBZAkiXtGsBZLBpWqHkKwU7fWnRgtxPRxPqDXEJG61azjYZRkfwkXf8g1H8r4Rk",
  "key14": "4WmNxH8LSnkeb5rLDmCyHJM31SPJoqFAdAaKCF7QNTDk3YeBJ5mTcwAuAcjGgnqwCcG3edAifrzn6Ab5K59SBCCv",
  "key15": "5MLXXD414hZuLxfeVGnynCKbouafGMb4hgtgu7AwcVWB32Jh3gReLB3w79FAs4Ws55vH725GiAKsRvKQqwiHNgmm",
  "key16": "ERfGXZAz8ATWuhtbJtKcbEAEwx8WcRiN1RGAACMW4uJ7DS7LnRjd31pD8n2ozuVibFUo6wxy3VCiGrC2mw9M3Hv",
  "key17": "2vGe1wAHy62HFAXRVvLrvtzk9rP5DwL6s7dsV5hTxsjaN3X16G2BAhWuzK4k4TbUckrenrXueCa9KyTwYcNLVscx",
  "key18": "3hiudnYzfcfKqNcVGwrVcSWTJjBHboEDKMkpCAAu6z7qevKtjnC1b9778361RguBwteUJtgEUiurtZUpwZxG31BY",
  "key19": "66u4xsSU9i9RfQiAZq3d9Ed4S4UKPfGqByf9AHLn5zPUaqndhJ6xFURcWxiPX5KFPwkqhpNroe3qdgihiVTHxbbG",
  "key20": "3U52a9NHfLTjnTvNujHgFFd2AhZ6h4fJWGVL9PMpZGJTytuaQ65Qctur99biDesKgVkx5jfbnjE5uoKKMu1Grbui",
  "key21": "3CY8VT9MqF1CYTASnWi54fARcNY5FKu4Cego7nEBAKqUoRLTewAUmwAPkdAovYetJuQSGT7R4p8LK4Aq8Za3ru2v",
  "key22": "5jty7Ncj6DygbAypsFmTbU7X4kshRrH5nBUxjFZkz7cZVwTjuZiscabxQ1J3cuLDRKUTeM4rcv2dLyPURK6x8A5C",
  "key23": "TBjzxRYkWakocubsDd1eTj5KVEsQjMKGQjeaFXSNGsNJotpPyt79CdvV83LvUr4uufXskwDgvP9gzMHRmdJCTeR",
  "key24": "5SKa2VMNRGj8BAwgUbqoCWLu1EyhL56Z1MXcgioYvi9ZJiuXtYqhYDdYePQN8vvMyHfQ8bcZdx1z6rgvMiQ1aLra",
  "key25": "vpSpm431Ktv4XsLckQNRzeRLa8NxmwqTNxFtQX1MdMrgsmyzRyeg3cni9B7dGpjjaWmrqP86VodwTzwnyHi7wBr",
  "key26": "4MwvpqWmJJ57zZWDh79vKRHfMid9jPKv4FZ65eit5uT8Nnp42vcdpsDzuDLq7Yd34HHspDnqBUpqqZJnmXzVaHay"
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
