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
    "3dQYptnyA4sFy6eX73AHW35V12YeVwAMNMFgekCPthuhki37PMa8xcuKnceLBm1MH7zcVLyKNqnXbyEmKyoXhMga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyyW4i7rAwArHqbp1Jig2EUSzJ2XBVVKYY4MSE3T7UDyCak7ErptsgyDGEXKAi8HynvEG9gjBtwo5PiQmuMZbjY",
  "key1": "AHWjh1aJWayrYu9mkjbGitLCm9is7wgsToZi5RaWteJU8qG3uNaDii9PQ3mS8SFAejcmETij3Ywx4ykTPA7Poej",
  "key2": "44QrJgh3WNbjqwWupDpU1bWWHu1oMNdrkZD9b2Hj2hC8Xbap4iquvBB5GskiDPKMD2JvTa7B9vAue5SZTtxVwsPF",
  "key3": "24iTtENN25biJNDYSRSRbR2UnVAQURtScPk9vPSZQc7HHF7sGzWZo7prVp7aYknzLaZtpEyErvMrjexpKuASuv7d",
  "key4": "5pDM3Br6eEax2883KXKE7iM2YdkS1Q7a1jBupuyZqyoaYKQkcWJRssNsrckbv8FA5CgZVgbRxcQx2gHGg8V2STN7",
  "key5": "371ZNQBfRTNgpEiHWaZ6sHZrMmhgCWxM9mcK1upAvbTEtCdvEA3R93hsAf2MQHSXU2SQ26UcpmXEbHTRHgZ7K1cW",
  "key6": "271SpLsivSgDE2nnj8S6LuW8QRetwcNugSyxFebz9FmzARSZ7RnLDHmh96kUSZf76mrPhz6VvJtcxvQxBTNXSACE",
  "key7": "38juKbjV8dvutqMs2L9o297fk9dM2YLrzvdaUkpAUUxoX1MyaesX6mEZKrCMVFAqkMSKaWf2cmm3HCdB616XyVYF",
  "key8": "5fgKiMKvNVypadc3WWuP9euTuY676hgjrAcEktRhjhPwQ4JMJZbqHbzNNHMgxotwJvw7XcW1szyxc9WwKCtrMrPy",
  "key9": "4PcNYnp3DTrwr8X1hQ8zfzFnt7C3qeuzzLmT3L5FpMzEzTkFmXZQdSmBw42cqYBDPjH8MkFVc3GnSRnRJTx8pX1b",
  "key10": "4KwPz5TdfrjaKznHZhUshhU3tVpGSTDeBcfD5kGRzbXx9YrTPLhP4fHKPyUWFVRzjcFzaE25mS6tEvCZAZSZYsyR",
  "key11": "RmWzz4aa6z5zyJb7X5j5z4g24QTqB6EHgEaetUa31djrY1ZfJ8YV7GBZmAmkDqHA8yy3xEXHYw9JqpkuedaUAhr",
  "key12": "3NKRFaP5KG8BCXh9Zpab5fF7Ksz1o5WpTGbUjv7hfMy83Dumgyz6kog6nRXH93QhRrdPEabZRMX7iFcKc13F4w27",
  "key13": "3TqAZ6SJvXLdhA7ZW4q8Jq3LAxgS76dBAKuC1WD6H4A3BMqTdYaM4xPGEzV2zyYGuLZ3Xm5C7fzQbuHChW1qieuJ",
  "key14": "3VzRWSF43GMsZHAAiDf513jtfmbRuP4owTQGA9Na3kigE9go26A8zkQPkUb3pUZJiQZi5JHxQ6PuPJRU3ux1Myjn",
  "key15": "5adMbWmCFCcF4tDW5TKvmwVHEL5U5WV3rb5y7pYhZEuJ3uSmdThsv1CKHujMVxPp8jWrcRgiZJnBTdihXJTWZk7v",
  "key16": "3yyVHQU9SGcdLUAgemTKFtp7HcuxtWMyVW85b4ir5kPF97uaMwuWdFbAb2NtvuLDMuKKv6zkrjuER5j4vWBDHcJf",
  "key17": "5aN4HSNL8nRSavUqe1RxKPjCxCoxjNE6ntU1eo4sxGGj26BM9m3BELpvcBj51WaCv5kHwA1tEQzMUD9RfHjkWEnT",
  "key18": "sz2n2TU2XUBU44LwZLRxnKVio9aGLGmpyEtaoUhi4VbZqnRFsoPKKvggHWG4yWLDeNmFykqE4zPs9nZcrLtJvkj",
  "key19": "3nRg2wQbrfujamMyM1ZrdWjAeLWGWpUyf3S7baSYBB4Nj2cDk1tqcCqP8xD2JJP9UXN9rrnLg4f1yzR3LkefjsDt",
  "key20": "3o15vgkjU6pWAn3MYMPMFA5KdKMm7o1kyV61FmHLsD7FwwQsnL7HUnyvswJZh6mFgYFFCY3EWDB4F2nQ5w5M5FjH",
  "key21": "4CEPXyngh9ZC5sEL2wmEsKszwkbULDMtjvKZZkiidasyxE8VdkRLnffvkmLTc4hVh2bfZoTaWgR4zRTPQBs333ej",
  "key22": "53MuVeKCL5VdthaTpDke1hCRbgaQ335FRR7jES3fKptL684x89Y34vKptNFDgHZUGC69S8wdLVDeat7SSNUXexeg",
  "key23": "4YfaPMjXMzefbRJTQLUM8E53vhAhN1pNEiv17jvZBxdxx3pB9cX5oTvXf13hxrHQ79Qv3byYkkRdBtJwWiPGWatM",
  "key24": "FrSH4bjC9asnSRyEyRpbs1BgX7i8ACnHGkjGnbaYUUTLBYSnGqFU6KpahF5VBwRTAKzdkLThLXjKCuZu1EEfzsx",
  "key25": "5QjwQib5zLsoVxxCgAZVddLp6gshHKeTANRKaf5GWNFzdsgiG9PuoXaw22YtWns5t1xxSzdzkiL8CXVvK5L4f2qZ"
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
