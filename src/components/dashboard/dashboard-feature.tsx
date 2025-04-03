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
    "61TvgooFEMLFTzNtunnXvq9zqoXe333a11ryqnbMNTbMxG9ahkZdNWkHZ6zQB397jJj5R5azd3egAeDnhrSW8w3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7DzzzyS5vXfd115URMENSH6mmrc4g1t1Yc2bKMyhFuiCpqNNeCLzTSvEgPoAUqtTCBcmPCwdS8NBUW9GdusqGE",
  "key1": "3gUUGSYP3RMLX6VGiFNQpNj5P4JUv2NFrGa3jvXMdA8rNYwXRuVBttB3jtXDv4rSVuExcVGVi21rKWZTMmdN7neJ",
  "key2": "2PfRMJ7JwjbCYuGa5kPZW2Pno3HvqWFSFeHh24om69Px2MJtfy5St8meNzegAnZK98bfBkhHVa5xSLpZhrdSQToW",
  "key3": "4E6cMK4e8NjQtDFPoFnocwJ9p4ni7h2und7P88Xde1rg2W69KAS7gpQ2REfVLoD2HAJRe5geuLx4gassg8cfBeC4",
  "key4": "5gFqgEfK5JNYg2oTJQFHRchEefxngdv4Zw6RZnNLYKCAHd5Wc6oyKAQZ3U7CcCR7oQmuwPPhUTfFRVQymQ6BMZUb",
  "key5": "4n3seQuGH2nUcWLkfUBWJjcvLsD17DNNzeSAzybAMD6emkz6TvpRT2R3EzAqPHtMa65TH6cSNAMUKAgxtq6LFFcK",
  "key6": "4arnpCZ3XJssmdjKSEqS3X6vLvwmJMW3JyLLGJkRHyNEz4DRPDWURNEc9K5M3oC2cL4HTZNAQFDXqRVcYkdqX5eH",
  "key7": "djiuU9zFhUQqnvUyGxyUTJBtmCrd5B9zrmrpZXvYTBnLZwvNs1TH1m8ACQXhQ6MRvag9epY3bUVHpA8oGAdgfjC",
  "key8": "5nm1xe6G4P42AXXu7DHTgqqcap1a76uUsC8eXdjEnkL2zXmQ5QcASUEPSDdkMYTTTjuSu3o1hV4otq8uhBS8CQ6X",
  "key9": "Fp2zpshfXTjZrVD6uLrV7Ed39vbp4U9vd1NbhZbEzmae8JRD4aQBrpc4EsSi62myc2cFvk8z3Xa5MbhmjyxAWA2",
  "key10": "3a3FfxX9AD7iHQxV2fAymB4FHBhMiwTmdR38AXpZYH5EeE8Pa4ZeAgqugtfnrGh1HsnFM2fLspS4iqhpDo1gRR8k",
  "key11": "2fos4gCLkTcUq7TSMt71DzZnBBmVsS8y4ESFM1ZV5tNdDQZCFs5ZK2MGHDcCRYHWePuhjUAhEnXvvqSpCk3ZHfbs",
  "key12": "5ToBA2N3Yp5BBqgzmYKo8DXtpBJs1R1ntJX12FPmxNQJmeHVKHbgb32cdg2mkA9c1N9U2pPKGWXAqFv964RJMRJ",
  "key13": "2YoQFDNMBTFAom6zGLwJ7CoExGjz26DzXrJ6gqpTpbQeW8NtUABLQSzramK84edqxMT8YMaode11KPexCBxTSNQE",
  "key14": "5iZQa8tckrMm5cpKij7hSTmmeugQYSndpyr8QzgWR4S4yHZHwGjg3D7Qgoynq7jxj6YcjbN2M3woMZpzVzxUvsps",
  "key15": "4LvAFyQ3DPVTehgriMCSD7UMqL796g6Pj1qJUkYPm75XgmDQ8xzsb2jd6xQDpNmCbbZAQhbQiQtuCiJ5bZjEaZWt",
  "key16": "5zq8vVVvcBRv82EG4pXqN3Mg7CiyTFKwf5Uq8U2MnEQMGsBdBdyWM5FkdaAMc8sLnfVfUEijsxKuqaMLmTrXF7qk",
  "key17": "JY1bEnZv34qxvZo9wSxbnahH1enyHfPwNWvmr4gtGq7MGn62c6n1NbLrJPsPaNQZg3vE7chE9nf9WYpydjRdwkV",
  "key18": "4kc9b4TguuHUGBTvncEY9UYjj78YK9cBn1qpDAdvT3u94J8ujWMiKn81Yv1AFVGkBkFPFqZRjGcTVBhBghrjNe3A",
  "key19": "3EwzLvsEmPC7Gvy7DuZi4TAPhikYTbpghA3tpFekGRfDcECWWG4ff2mH2RNGoV5PM9Kn82pvogqGH1Jp4Y9njYts",
  "key20": "D4Y7X48rJcFz8AryydgLBJ7ZMeuU4TDYwDzvfDoQR52uJCDg6QsiyDTuLUvqfCxWBmd5A25bMrx9BhEsF7vVyH8",
  "key21": "5gNd6D51Tck8W4ivbFzYnSjZ8G5CHFi3gnVzd635fRpNkEgwXyTye6qTsd5RUBrMHq9tGaDaMmVTbcmDcwaSt1Pn",
  "key22": "P5YPbXRKv6w4hDpM3heFZRGUxki744n9xK3EyqCZJVZNuGwQL77amgN8FGqMyqtb5edEevRPm3DG7ptz7TKoxi1",
  "key23": "2S1jgdqxY8eqBprYXmh95TANpsrdYdL97dBmornyFK1Z21S9hcoPua9CkbEPbYyQCpTynLL6p4rSzLpFFxU9h97w",
  "key24": "5QbBYy1pTQbMpAAhXScZnBD1fj9cLtrJx6Aau2gavLxxXAewM9XSmWinECXNEXY3k69z2HLX8wZxes8LLz5o6e2h",
  "key25": "2vvF6ykX2NwPNeXhicdEL2GRoxUmsgKDboNVj8J2AKpfKg9buVpC7CuVtsjsxXqAVkZ7GZja6aQLewoviSnkxvgp",
  "key26": "odLGyDcfWF1RJGUPbs7FgXWkQdMp9JcuigfkbyVv4SgEqgcaJPYtbHvdCMJAa6RM5ghxgwETTXgK2NPEFAzgHaS",
  "key27": "3cL2fKdo1qYCxhqge3NcYEfczjQn7QtP5yDXaAQtut1Jof48gk3rEghn6UZXizd6dQvnWgan7hgDj2L6sSFi6GnW",
  "key28": "5kW2RLZUPXz9yqZVaiHTKRdWKQcBY47gy373XxeeNK7qtLxRdSpmn8HUVNGkwob6VHxgEQeHkHYEJrbqVuJYjUfj",
  "key29": "5MYDULabLiBzygJ521XWiXzPmUWx14oAvWs1GtzHRKKeANKjaHJQBaLD9w4fMA8ZPWHkEy74DfbwSjKUZGMs1C1j"
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
