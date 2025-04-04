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
    "4pNkiZfaBdPjtG5Ny7vSEdrsmGvpkVNQz8MxydLeZYV577Vf57AJnx6LmxBnuD6agT3kCuCiRv5n9Q1XncZwxBA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyP3P5DxuTBDnmcXqgb95DEZ8S8KuFc865uQCeiyb3uC8V2xRDgsjhAmndFDKbMaBYhYGPzfWrxLYoDJ1vRwLKb",
  "key1": "NqhHpg8iJTXjmShFfPCB5Rvu4xTPV4KHHdBu3nD6v8j6SDhKfzinDR5kkZhfunSdV4snEayjZsec8MxWbCscDxU",
  "key2": "5oJt2HvKYeA5Dh6S13V8XoRwKhu4sbhq7AaQybkHonRG2fhy3pUGihXDbVXU2S9BhUZ1TUYybnRaDTSZTAy2XWPH",
  "key3": "5cMEmGiJBeshrGMfDsAscdYxrCRASSYPjLv3zKFLUvdWgZxHYnrUerM5rn8Ek5BsbnvYns2vZANnp95MsqNnqmEh",
  "key4": "TzC8WqwrAaim3wAK72T5hufr8rJVnqmgXVUduXECVhyNs8GV7ZKBgiZznhXzBiYMfvV4wmKf5pc6LP7enkqy11f",
  "key5": "xTaF3L6BahzpZMr5mHyoNYEh2mvQDGKkEsfstbW5h7Vcx84TtMCEurXaykTnFn5PcS7q3xgoiPK9PoEj7byUpEX",
  "key6": "2cQscxB6dkXvxocb5pYSgdvU62TzoCv4JnBX2tUZcUaAMj27XXMiXji8VUVfjX4ZdEdQgvFeuHLmtMWyHhdhTNor",
  "key7": "SB7cKYFfLtTkrwQUWsL5xWaxZnMBQAgFaTUuyL7MRQrYY2bE6L4R2pXcxxALfkD32wynW6sLMXwAVytS82RmMAW",
  "key8": "34nCi5RGj3L7Z5YNZKLTiP53sRkrNdgRNH3ZmbGUq2QxJczAxqF2CJ9c5iQjkpnw7gZ9brZygszHc2NeQzrrjNQC",
  "key9": "5BExdjxk8e2GQ1V8u9hnpSFLBMLvaAqznXfshkTdAjG66rzH5pFXrRbxUiQYTjxL9iPrURkwa8K4rHEENG2w5hEZ",
  "key10": "5npu6sPt29qgSCs8eq7ehpeZFCwV4E4QWvbNPxcQHB6NAnv2dMDEu8dDhnvSq3VJn2ZgXRS943ihAP7h5vCESYCw",
  "key11": "41At2SFPuqqGEjo61eDdGjn6VNAhe9wsWd3qz2VjNkZTEhBLqABDN38pVHmH27ju2PkkcSmtTwH6tRqcTAiz7rPc",
  "key12": "1vmyNfkTGcPYjDEVBHYwAABKQmMoNvxzLAVQUa8XrRwxfJoo1DkPBA91vHmr56ehhPwabDfGkpGFjXR7WjCv22o",
  "key13": "4qjj9oH6XREnAJnQM7b6jHjt1figCGNkyqC6Zfqa6wAUxqeFw1u4Ai8pkx9mXDips37nkqMGK5FTDJSGP3jpp8pj",
  "key14": "4g6A2j4txZAiMTJqruAPwnCPX4tN3b6W5U924XEdXZQhvXdvD2V5NgXx5JqTgrxox8yxGyLdYWiiKEJztGryR9NT",
  "key15": "4sTJ7AhUPJNKcokGtFbN2qaXZK5Sg4KkuBxxsNqiFG62FtZKZrKhJr9V62BcJpfGvnXuSWhXL83gd5BbpADsm1Jt",
  "key16": "3VzAgG9QwSStCMLPpa7gSpsqRgZVhVmHfhxYGEXayzcZ6hmQZVicbGzAayzKF21wmkWtNUYZyjLa64nt3SRjf3zN",
  "key17": "35SvDh2HAM7CRf14S65k1ncp8pHaYGHU4aJYFT954zf7T8BR9CQpoEBthnssDMHEgoCAebKwjTDSHqifgh6T9Cjj",
  "key18": "azy2iKpS6oNTpeAXNwpiJTzopco8sawBCq4bLTVsKzKU9dyxKbGFK5PjDFz4iPPXWxp4kZFJYLHF9PmvmsKCpwE",
  "key19": "4cGifrcmLYF9xbAJK9ZZKqBUDqwL7UAB95ttN5QCZNMA43VAPA98e4toSMZA6vDEK9upma6XChaLrErPaYjS5H36",
  "key20": "3v22GGs4PG6u9ybj4TnwmwwZMPEcaWwKNEQRTKrkRPJqdia3MPajFU1AA2uKhv4BvNnzTcyR8RAiCv5wdZrm6X36",
  "key21": "2ovZmPBeZky26MPmBJNWjmKS7JDADu6s9LWd8bqZyV2ssLbPT2izWLcx44TqewJBCc6CvQ57G3L1GgHenp4hk5HQ",
  "key22": "57wFoQtJLhtFrQyKCa3Zo3914NLCYi8CnwfTT2W7JNQZCuCgzTzKu1n4mBtYZJxifdcgjA37eXRoy8o7JBgtdNDh",
  "key23": "8UA3FwSUJehv3ByMiLX7QjDFoWv1jP7GV14ffeGKwm25NQJdb13BSQVVpxKviaizz42vhT7PPydUMXbQwCT8BTR",
  "key24": "3n71Zz5788S3oumooj9NEb26i6peXwcuw7F5xshvTj1zNNyb8cesZSaHmEkHR2wvr4ZEfN9HfjWmd5f5oYBd4zGY",
  "key25": "2x1WEEnLq3D1TZiew96a13XxRVRjZ4nXvZ19zvVTgeyNYhqssXWYf9rLPz2xD4o6NAyK8ii22vx4KzDow9aN38wB",
  "key26": "2HLmcC6qnhBsWBfB9Rzf3CGbcSXqUsSK2kVRbKVsNrXrQVX2drxan4y31jdmgSZFNQyjRFjRYLjVPSN6G8BADPE7",
  "key27": "3usPVsmF24pUFwvdhWW2VKEo4kubkguHRqvSsAXVH3SMuAGwoMWYthjaMedWmYaw4Mf192dvL9NgSvG3pEo79ekK",
  "key28": "29XxGKHhvKpbfuZ4ia1MZd8pg6LwS7gKwfYSF1DmkZ9gUzyqC5kZ2ZeMUz2bBoe6VNcgo3op5433CkaDL3tYrZqV",
  "key29": "2GdvSrss3JvRHcgsRxt2AGN3j5v47hpweRyxNWpyA1MKY1dyX327ikMaxBYuXmhDLUtHefQfDTj9WeHShWQEp5fx"
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
