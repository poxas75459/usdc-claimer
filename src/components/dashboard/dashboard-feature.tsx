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
    "21UNMf3xcc3sRAHrwWSjyvEhNh7JPRYx2bvi4KJvfCuD6XkX4qpjUWw926hpQ9EaMd3opucvcCbSbXUnHBbEjQoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQSakdChQqjUUwHih1yrhxspW8isRYDVxhx2yrFPU4CfdSSbkPbJMS4HghNb1LAfDU8obpMJmGzPh9Tr7JY9FVv",
  "key1": "64fniPzikqUgRsSQPaa4HeE8HkNwAMFRzd9Ea6UVKb5xx8ojVsdNNxAAaTGezQzJsEycPu91mjAkegG8P8zk1JSb",
  "key2": "67h9cVhgxjRsmatPGkHWEPSzZJHmwv21r7gRk7ruAq1niMdHoAYZFNx9Tr9TWBB86xf3tXbW6oi6VBu45zZmJNmV",
  "key3": "4S3b1TCzGAYxzHTqCWcgAL9HqZiJ2wkDG49xbv7GFNrYesDiyg9d1mxPZuc7tqDTcQPuuRutcKi9fcKkHwXag7QE",
  "key4": "2XJY4vixGQatdhFpEU1Bu2oxtCTwg2Ve2JVMysbfKnB1qqWoFKC2NMPHFYXiVQHCJdJGuya3sqdkmSM4nD7vpPWi",
  "key5": "5hBdeHrGnbvAsDd6fvfojJnVpGRnzoQge6MVaAaCVRt9Co7xt9XteBXS1bE3pXb5yKpi8jhPURdKDQ4NwEy95ghQ",
  "key6": "5svqy4Ju2kJdptWo8nZJE99VcvVV1za7C9yFkDmdriKBvfdis1Q2NwKP6LC7ZbiJbgaknpwiu547tfmFMEn6BQEb",
  "key7": "5VrADzSLetZypHfE8TP8ZdFKaV1xRnxnGBZ3Q8UBFFkknuToTPMtjy13HaQn8zrRRLcVJrWb4dXEmyNcoXFWaJBR",
  "key8": "3CRzwKwNqkTP2bJbM7maSxRySw6r8Ai2YYs1DSQtScEjC44NEcQCtf7QDAMjhuB1j5iMSJeZeVj7MCC9Apd2Pyyy",
  "key9": "3TtNZtzGfXaweEjKMDdmJ2ptQtQokHZbA1FdhHwtGkoVpUSGu7Q1pHcaFbcsHDdxsSdNYZmqzPzN6r6aUkYFaNf1",
  "key10": "2tUxCZDzUM88cf7sUZNpNzWickKmgmJj9Qy6tdEz2rLePKZizxC5KvSr75LRS4W92A3jJhqjsvhEZ8HXacr4YMSi",
  "key11": "H7VjYsNceJcDhBmjLKiZ4TorGkdB5P2B3LWbTBcRhMwXvNij261R87YdsFeKB4Fe9s3w7drTsaLqypBMpGuFpqg",
  "key12": "5YTppYTwWP6Sy7eYEJbiZ1pGCePrWkpKdXXwFpPRBUTBNzwRF2wxYjpsAnyi5WufZUCQq4bBLsgRduagWzp1G9s8",
  "key13": "57BRNaqqGu6snkqJVKEDBfUDkoEsB8M3rpYB17pq5Vy3MUMUwCurxzyvVVUomkrk4Sj5aKdUiNMarjgC8dop2Zjs",
  "key14": "3SPzwmeagRfNXJ7CeJMp7aVJHvKCnXkE17o7FRpgRwQ6uKY6aoeCd5jep4Br2KmtySyVd2H3WGNszrVKFFBA3kYt",
  "key15": "22n4rygZhtWUkDuF6osn5VbCyjN6DLNW3QCQ6zKxeZMxQPc9421rhGLcXiDkCRJjKGkjyt4HcZ3equuWuCT2jTN6",
  "key16": "4syLBiTZBvSYbiFQqcXWpkvkXm9K7jNWiBD9kL9BQopNLUMgYcefZiJ6SxMJHzoR2gdcd429njGXAhPS6MJBxncg",
  "key17": "5rgvxtwmHsocuhx1vxNgYUTJNEEaJXN2wFwmvAWeyAonfgZJRhmCfDgmvdtjJx7UFUsnSWzcqcnFGci8sxevjaA6",
  "key18": "2AodsVPr2j9sTLyw1zunTVb9ragR1aBRb8S5pmqLnBHdfk7CG7iP1d7RLXYkJsuSz9UM12BRcFYa2w7pdCPYA1Dx",
  "key19": "5H6vtL2jjd7XrtRi5GexzkR6FT2sDtzKZsAJqZ31t4tcBeztpQbcpoYz8Ab9sXi26uursmTnzJjtYpSoFFKCzy4k",
  "key20": "5HmYtzDRTLPLMkznmT7WguyaWbaJSzpSR33KxSq3rnH4qJsUpaXdo8kxaw8s7sHYE26ZQTL4yyfE4DwvKaBAcUES",
  "key21": "4vWKps6anSxnsF7MPDshD6wjvRfQfFc957p6W86d5HxnsBQmvHkLAgueNYEy9XUvDZP3VTio2XdV28ViLwNA45u9",
  "key22": "32qkRMJGqE1HeGTYfPV885rkUKboiaERhotuyKqSQfz65ebM2Mh4Uxoh9MZcXWYjzH6KaGSVDoQLZ5JoaZiGMb2J",
  "key23": "58FY3jS7xAZfhjPKK25hC63xg9RgNRNWrEhmSNGDYav4JpEG8b6Wf39iAhUrJzBEUBLTnUT8pqCZSU3CMjpHGhLj",
  "key24": "5jd66xvgydfW4RnFu7KBZsyp3i1xGTxvXkr1hk583yVQja9kGCrk19Mu9RJD8sichxAwDNoq2TU79zpR3SxtddA9",
  "key25": "5LPQKVBNv8WUJ8fKUEVXY7oKSjLDg2NBvs8v8rYCSxBaowFC625mWt2vyLioh5L7x8AeUKF675J94UpfyMNESFLF",
  "key26": "5caQ7RmkQ24SnU3i2rn2QrTCKKi1R9y89qJZ8hqXihB1TYtJ1ZCyKGAq57vwEiMhsjxYRP5gt8C6ixBdFVJRKboX",
  "key27": "2dypS4aELJYykJF9A2q4cJ8PKTvSDQSaEEXmvMP7SeApkbyUKnSPQrN62y8wZbj7ppHsdGFnX46yrbVLtYMcjLuG",
  "key28": "3oAH8HVdgJRxVrd2TXKZ1dKCiubA6LCBjVaghYccuAprsaCGaLvQXRi6UsxS1psk9rYNaHWVqgPyNZWqX4DfSrD4",
  "key29": "3B2BzoMsFqbbnM4zHW9DAr16w4BApkh3QcnTje9CHbCS5bYJHzGWnR5W8LFGkS8UN6ZkfCPBfBye7HJhkmgoA8i",
  "key30": "5LcvpWV4HYoe3BnbViq9jxHiuebrZXuv8pu8q5yo5nGwBPpW83DxCB5qCvvs4VP2Aj6wbDN31fk97KnYeSGv39oq",
  "key31": "EzEA9dx4rhbRqHNSNgmFVEo941b8hJwCHkpbhhTLumkZXfQCV5niHekxMuyhVpYHwFb1zetrUqjvBst8UbdaFtP"
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
