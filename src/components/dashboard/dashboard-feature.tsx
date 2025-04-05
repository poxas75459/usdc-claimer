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
    "3PsjCftwPfT3jbif9nDVWt3qdfoBapC9ynvQHTwX1WJKP76o2i5xfhuEg38JrXnpqShQ38DWbjC5j6AX1hDAEA2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NVrfRCRvzu4ewUU4eGPHrXu1HGi6NCXiJ4mwJYbhx6triDrzYRZ8pgdi51tShK6cnfPnvgDpP89hwSjLABWRLH",
  "key1": "5huewB4fQbJRHtkCFKVhag7RRfkmmiAVzPkrC4huSexyjS6eoM3Nb51dGcmFGJC4DF7SjzRvMHaLhzhaJjGehtc2",
  "key2": "3fcuvxUtYsbPfbJb4sTjW5DkJZETBeqpjqhQ7zfnxscbAib8hRetzP7Ps5enkcUjDTVknzjNJK63kpaLJKGH8htV",
  "key3": "5NqpEFgfQb6tsmWHFW7qMHHj2Nshx6U5qcgyLeFGUFqoPgMHdTXopLqNGror3AuGDBgHz6VSZvf3rdtsUKC61mZq",
  "key4": "3RB5mms8KHEESYwCRjUm2Kkeha74xiQybSoFtsesXUiumjKBqkaKTnNNxmanMvS1JTrD4KUCVLiNuZPwWZJErN2h",
  "key5": "5d3X4VtF4CYyYEN3uCc5HKyhcpJScL3MWKNhQEXKa12YxBQERXeJVDv7r6wUbty9JbPWjMUqN5odm4Z4m4nvSZJL",
  "key6": "44dpMrUCFTJmoULDzqSX1VJXMkbNHKv2YZR4dC5iZRiWc5GzTTxjjygASrNfP9UeqcB5ipDASUCfXpVYUMqUkUac",
  "key7": "2GDea8kMZYr71GFxpMyGs5D1zJYkThT71WpEfHrbR1G8qknhFS66ynsBbweJXHo5AbyaRNu8HW6cyz13Y8ohk6Rj",
  "key8": "5ZmCVnLALyrEva1Gi8oPkp6EaiSd95jUQ7dwkVymbUNiXnDpkGTArsDLx3qWqxRNfZrBxx8c6WNnEZQ2vB9RMEWD",
  "key9": "2qDtNsoceMBpD7UY6MzZzg8XF99hVS1susUg8KJ8jGszN2JDWfoLw9KLpYv37Eppci51hfjhrvGFCGhmmURjaieM",
  "key10": "43YWLrt2BJwoq2q5Ht6tdJTi3PNSuDH7tZqdVWbFXMFu3jUzM239YevrC9d2qdeJLh1E8WRzKTBo5R9W84hrBB8z",
  "key11": "2bErnD1f6rc7DjraD5GnCt63imjPRajpRee7Lmd49B3av7JPyaNFZwsvDBc3dKQmHsDX7qRBrauSG4iTJzZtdPow",
  "key12": "2hZUb7STTdYGvLLckogrwc38wFt2EatgbXFGzs5Jvo966CBxrcJFFgryYNt2MHKkXsokLuExq2NkgQz6m2gcEYNK",
  "key13": "22yTvqvPHi63xjuhvDCqCY8bzaRKzXfCypMsUyCXbrP6mwH2M7c99CVXUgZYcd7MJMqDGUBPLrinz3vWocR5DzU6",
  "key14": "5cN1bCa9zwrokmK2Dk3N5XsYUakeLHiqFxshbEH2ofP64nnenPABe13oxXvwkMKof4vvDJKE64NmVqmqtQcaNKUd",
  "key15": "56fLQc5XCG4ninzgyWaqdpQyRwpi3hJaziZkQCp7EJCEAtgjaahdTRtHpgYGdjU7oV3Rq3hEoQwYqjtGbJfbMxMZ",
  "key16": "tkBUC8fkM9Jh6uKA9FNfYwUkWBqq1YWnsoSWSJDoTb6stwwgZQ6qVdRG6ozye1DPUuhRxuX2k1FUt4MAj9g6xM4",
  "key17": "332gATaMhMf1yy6EHrMC3SEHEusJP1ZMwDgx1e3XCASDkaod7WWhsS7N4D539zekFZkNcajbSCqzabSVmUcy9jA8",
  "key18": "24ixVgn8w76BahewxLkskcRaQ12UPbh47gzYpcKcB8SXbKLpqSgh6w1sHnxPJoTyLd3M5Y1c75H4g5QyAa4yv12h",
  "key19": "4GfPUqXFWYdio4cJg4mNy6fQv5p8LdeS2QiiqDFQvf6cNnJbKwENsm9CRw4Pk8VqffQQo6Xtr8mdp53EaRcz6VXB",
  "key20": "5GEkfajGcpbjobfsd8xEfwbvwkutzUBgY1TfiYiw9FNqAmrkoefZHEybDdFWxiaADTBiPwP8SgNvQML8gj8dnM5C",
  "key21": "53ZYE2jQASBnqp32SjtWRfdbQMxWgH3zjs8ReC8HXcayA4RTNoVkDC4jkh2HsjjcEL34vHhRU8GzQuYs3mnM8nhx",
  "key22": "49bTfvVu3YGTTRBoLJPx2HNSVwiLdJiAM2D13aiSEA8SL6UvtoGZMbb4puheZ6hagyMXUYHGQ4ez6HXPuMMk8KNJ",
  "key23": "oWkDRm25d1inm1MqibXheX23cc1VG1pKcr8f8rgwfRLSfGdzReNLRVGBJDYzek1MkLuneDbWkxjhRPLRX4ijPoj",
  "key24": "63ihMUXi69ffLxzftkmDB6gBWGhQjtcrnaxhmLWTT5zcZ298nB3PRVVqGuyJFnUgKck7gLdn3xoHWhM2DLFU2jT5",
  "key25": "2WSZ6Pg7Z5qx3DWWUHDbbGuSPjhAjkZSiG5P45ri9FJa1dgNyo8j3x6BX6xKwJNh8ZD3NuCG73iKjPnrwhe3dvjM",
  "key26": "5qJVJ7RMhRZbR8sZ2AKQL5SphqmovhFMGEmCMsEmigc31XncZuN9Pr1btPdWztwYM7aCSV1Y5jfa8FFjX9igorRc",
  "key27": "5tBPMCEGMs2yBAMZ9nyNUn1VHwXCNrAC5cHEaWntFSxta9jdnfcmhvgHkaJcNTGXGveNDWA3FcYepxx915oYfTtJ",
  "key28": "4khsroXpoVBogvfn3JQrfDpYr2JVJpdFd6F8WLrjWwp8VfYHaHP74vmMhwq6rPmr8UeoyR7swVmrpj2cXGD4pc7t",
  "key29": "5Wbm4NN9cNsetqQ7RRj3Z7Ld8XCYM9poD3iDn96HtimU8Gus3sbqjx7znczqJ1fvGEKYSaJSZFwBZUSb8v1eFKp6"
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
