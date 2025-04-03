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
    "2jvQ2BApyxAFM9ur6BHHV4kqrx1ifcyzQ8CvqRNfJYtRJ6s7r85uPZ1hENohpratzfeSrfjPWgBATT1ijmBCiJAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5je3zPKUNDLGXVoUqtwLkW8iWcpagbRWbLQLkztMFmz37ksE18EpxwpFUXz66URm71hkfVBv9w37eoEc9SG6P3VA",
  "key1": "2ZD7xFbP1VLkwQC9P6nrDn8PTFnXhj8tS4w5CRaTcDChg9WAVxDNgLsZBznWkPobHPHpUoyYeL66B5JLdmuwTQVK",
  "key2": "4th3Qen6PQ5DCGLThNyLJkNDGqu3QnHetBfvqzjeZxRUkbPeh9hWiymod7mEh5sibr8aRczHmzsLTpwgE9caPbsj",
  "key3": "5z6Ykn7B7gSPG16ScWbY3jhKQ4TDLdDGgfvSrjUWrnziDeK8AzJmdE7PGkRAh3pvZzNLuCPH5RJuFU76ZHcEB6uz",
  "key4": "3mhe6t2BY61UD6oAzMS37iwunFQz4tPi8ysLjC8hNZ1wcj4Ss3haTjxcBf8weHqsto2ZZjGF8jxXe4WEpVXbjosD",
  "key5": "62JipZDoSmTXh5qBhJYhNFtajsd1YuBNphZiiDHezcnSaF2cQsXpx1ntMNvGgjGvtTrEhyAqNVMH4ci3VnuxitPS",
  "key6": "4V1ixXvhsopFfhDviBgXsqawRmDZM1xd4XnQghRyrdZnF5n2c5zXXbkhoRASRU3bDy4GMtcwBRUn8kxdrD9Ueh7N",
  "key7": "2LEixNxR5RzqYA44Va9yyCQWKGQtjHVkJCn1iutz6gbjdg3jMf75LdBpo4m8jNUZuyKz6mMXvdKu9wAsuVHQytod",
  "key8": "ZK1h5MYoaqnwuDTmC6gPHR8VFycxgeiQPXBmo3JvrXMWwUoK9akLkWU7jsdBQt9MrbREtFwtU7fB1AQgzocCdZL",
  "key9": "5a57wU7nhKx1eb5Dvfdb6iDHF2VErYKzV1MhzCvCPpPvg6FyqESqA5HKuj5M1yQVHzNfzEgBPos84RqeA5X4bVCt",
  "key10": "caGGYoPSynKfpovG6GmAqkjtHbeDZQb3mBj2J4czjwZvGmCJLrZ62UTHv13kh51UJAEiyvqJi518Vb9z8ASgxq2",
  "key11": "3DHjXDSw6WczcQ9Vv8Ts1B5MqHLPxS1rFKSV6JNq3R78nFgLqnX6i5bKvHxhTMRv3fguNkfmqCUBrSB9M3fQRpY",
  "key12": "2GAYp9YYe6C9xYZW3WsQWhEGdCGRD2w6XRg9rybvTLRETL29EizGv3ghz9win8DKLUKFC5L1UjChnmgEtkNqe7Ls",
  "key13": "46z1Am5jUHEfLg22XW7zqpn5LVXePZTXk6JrNVifgfKgV8w3cZ5aEDe9FaorQgom78VaUx7KdunjTwoYQ4MCa5PE",
  "key14": "4fUFVY5kNhMmifZfnMMbgtiU4sjofU23ogV8Vq5i4eR3REDvjp7FeGrsWScQcd8J8vmviNuDuUg7YwPS5skpBVws",
  "key15": "25WYirtX5rcbg46x8SkvSWzWgLqnhTGsSVSMW27hpCqV7agMNzrvNpfHZSLwvfAP3pHZ8Cu4U7okvPdPTMqEPZHh",
  "key16": "3ungctkTdkuLKVKNy68GyKgYi4awK1Uuk8CDtXdy6s58RmikGEQAQRiJottGeNuMr6CKV1NiMWVXeER5joBXWStP",
  "key17": "4mcMAN2VAYVRjukJm2zgdERw6tbLQL9xe7VDYJrVbruPK8ZHyuwWrvkotrJuU4CopG6iFGsg8vLzKirKLbZWEwva",
  "key18": "4SvR45uyefZa2R3cuaDsWRpAWmUGEG1L2Z97vdy4m9pweivTkGfkW5GMTd4ntupPjjX1BAxCM8XuLLP1DdZmwBsd",
  "key19": "3nKCDEHB9EaPfjcYUfYxHukeuGoQmDNNz7TYvg2qsuSVSYQkKNpnXcZcLwcWFtZqcLyPJAyhTmSkbR2ZAdjX3XzN",
  "key20": "8RWeyMMby6hdnSSAtGqf2285DL16USZiEFbbmUuswBnpUun4Cg4cQPCjstMHytfF5Vzsw5TtcexcHs9G8AJkoF3",
  "key21": "66Q2nShMwjveJwMQqKGt6XfoRAMbQ8HQn2oovnFxPXemyPE7JfQk1m5p2YmhQYvyL3ELsWRMajQLNHLAZNdkUzNM",
  "key22": "3NsYvpZprY1PpapP3WySgmvghnUdDNEnEqLoQFybqfzGG6mWq8RsP9yo4fVocraVHzwdXfqzxUC5FVBiAkZMoB7k",
  "key23": "3zXKHdHzT6x5noxDMnNvmjMGgvrTgnJyMVxbq9ib1iGUE5SrrNN588aQv4WYaHXbDQzW38JVpHZyPvneBL9uruF9",
  "key24": "iGAHWpwPypSrEv3gRncfPbeCVwfaNk8ghURjaQ3j2YmSRwwHKcN41q9aT9Txe8j8z2P8SGEmALmDwdqHT6CQenc",
  "key25": "3veee75sA8td3zSzEnFmd7dvwbBSLMiqAMoGU1oxDrHSxrz1gprqref9V6urmyU15c17V6ATV5nFrgZ6jaXBekmy",
  "key26": "2nafSw1nXguR9fpjksG2QRFS4XuZpRqMDu5jTpSKfosdrGAEwzyFWYgjFGB9SUSCnQjoGApma8CVCH4pama8CXMZ",
  "key27": "3jXvq5Rb2XFXPEjbji7zsqoPmqbEZMPLcQJrPXqoNMmDEGEytKFae2moBByJYUAbZFWY5jG5xRQ3gPCsDw9zPPUG",
  "key28": "YHMs3KZ37eQZyW9V5tZJwXCiiCstv3YVuyJmFdhYmPqixfcKT46SDAFQXuUSmLUXBJiM9zQasnaNrAhmQ3ShZoM",
  "key29": "257dTNh7LzEbRRPwYKreotnJQQWaquqksf7mAFSPhaRXWGx5ngfXzxJmiSn5QKfTTRHeDBvKP6wLDNvZkattN9yz",
  "key30": "LQpNUBwr4os72btJFYY9NKEmo5gemGkHv9Gbt1e1vRkMmBQHR4wmCAWn9xmt3iJHMH3oLfhyVT8Z9fWzZPB5W8r"
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
