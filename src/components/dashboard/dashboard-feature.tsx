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
    "2K15cJRy9qvd94CaAsHimF8ETmU6QSA6DACzpte6pXKzJaWfXjiYnQ6dPbouuiBEwppSUnJHGRyrQfBkG9ZCdNsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JECvrUHDXmSVujWGSsUEKMNBH5qryuk1PzDp64pSCXkykZmc1GDTs4uk7i6hokuCqH5vMtLqGnkxtFM4K5UJscP",
  "key1": "5Ke1H8ud3u6mbUVbL2d9KBv7rwBGi8wtBU2nGiGfygJXtwkcr6UU4WW9SgDoVw2qrbcSyNUZmm9h6yW3xTjXvpFB",
  "key2": "2NGbVqAj7BgDBvXP9s9rg5q6EiZhcgVhHQYriHreJg3VWRDRninodDH1fECD2MWem5dpZUdbJb7HkKicmN9Mes2Q",
  "key3": "FGC2aW678KyaCxhavMUVTztzi13vCbJhGaDaCdrxgW5vowaLm56ThynudNZuux6HYCrUYv96ni62kpEvLoDn2ib",
  "key4": "2ouBaZVVhbg85ZiQW5jqy9K3cNPJd6F7U8aYjfuBwmbayNiFQ5mjRbEyAMUH8jzaxhCoEMXCBcNUGQiBNsqPUhXu",
  "key5": "5he7GmXwCAHWFD7pRAs2DGoQdkM3o5iyyphZzr9dGvkkZmAcYo9yWSSaLdGu3Q4mLr24XqBrZma12nsSicb2RK12",
  "key6": "EGzNWE3NWtArec2q1ysfeuU8AnnuUkVuaoFBStRCNG4UEaB97QMdcpMi1S3vLALE4iKTYa53vPMZcfMKMXePDrC",
  "key7": "2BKLfMbLvRPJoR8bAcHSwEQKcbsKVCFfajhySi98WoiYio8BYZyDoRndFRMu8H4xCWX1LpGvYyMTi56VzZMZfupt",
  "key8": "NkUbUtir1VzpV6jD1FUgG93LbTXgGyt4KtgUX9fFHwopX9cxRdYJYq7eEn9nPRtCGvZXRUTuZ2Q8kaUtfWBVSA5",
  "key9": "C5vxvMdNy66rotA8kMKWG5xiT7crWzY7k9j5aGSRAYUaMAiqdHNmUwUncNFwwS1nzs9oqk1hhvukRAk2yB48pki",
  "key10": "3Xp7mujnDuHMDJNFYJoMu8FwhqFGSwDD5SgFKhttBzzNdxwioSMbFQqsGEgTbBgVPezuTxyGon6Y8rRP4JDmH3bb",
  "key11": "65ZRzaGZ2qTRwuin9MW5ym9VgSU3to8SxdzAxyhLmKJcokoUMiDi19PFgrvFpBHWCg59CbHtp31d8maoo9YH3jY9",
  "key12": "2SKvFBpnruKKTtq5jcmmexdFZPgHwqBjGQDd8erredeYg2U4HdGL7LHq69tU8AJ8Wb9F34bTBT5VpiHJGN6kZF59",
  "key13": "1L4zMwpGa6fdQ3qJEMS3XhZ8g5PLCaszwF3v7cbL1tejFrAAQesG6P9BJcSGbb9ciw77FDfteuJ9k46yrcbgrH6",
  "key14": "qhZJgMK3fN2YeMDB3n1g3PHGKRW7fUqj7awp4zJUG8QbU8rxDRixH5LnAWrG7A5pQmxkC2P4W261foSzabLSbF6",
  "key15": "2izp6mik9yHJA1endJLEsCdPDzDCkNS7NTz4vPQSM3MY5ivL7Q9QRKasHmNJuBqwGSnFRaxSnPU89YjJrVQgD5su",
  "key16": "vvsiGqDRXmDvmWKz5mPbZg9pz2A8NHvjNh2VQehEvip41rCgGXVovHGBAuVHXGtiRPyVgu81v9QDZyx5HxZDk9e",
  "key17": "3PigLggX61N8q8xo6mwFURbD4JmdRFjbjqdVT5AB98P9YYL4mj3WMK26cVAWwdzbNe6gHPZDWe5YE5PGUQjpGgaW",
  "key18": "363KZwCh6ARVUyhRKVK5yMoVzVFDyzpkv3TYDz6NDyVVpTHtGu1FfeaT1YVpXJ6j3QvjCA884JLF6EuA53rds6GL",
  "key19": "2oEe3fzkFE6KgWgBkb6uH8AwN4oxA1HC6RAthXWpL7eq3SPd9uWLMyY7z9N94NnLS2YTAhW1G2e2pzwUeNVCHmxJ",
  "key20": "4CQ7rQ9eNTtmdSTvyvaJbM1MpM1Ghof5W7vfknsoGcwdsSnqyVN4DWo2Xo9yP5p4SdX1NXbJKXLXqNVPisPy1STu",
  "key21": "28jxHcQHJvaCYB9955XtoEQX4aF6NnR9wmQakMZmXM3v9A2WBRWnKDQiymbs5Gw1WC93CKgcCPqJiV9ABp1UqkF2",
  "key22": "4JMkqZr5fHtWKLLWcRirpnQ4AhkSr415CUrNtSAQ1QYbdScn1Cbr6bkX4YASxKo98d4LqZ14aaNsmoxUJrA46ik5",
  "key23": "Za7ja4ybeeeH3AqhbgDwEhp98TTG4bDKEemiJ9hVSXs15fjxDaWeL8TvZ9qttZXo7gTrcSCqzz5GXnBShCdqdV7",
  "key24": "4pwVMkb52dsoiTB6hpPY3nswHkhDbw8yqCTMYrX1h25bPCRkLetqF9m6S4LFXeGvPhNzmVGLqMeASb1WZhLoXLf3",
  "key25": "YmnNYxombyGcDLqf9mGoq65jk1MTpFs3hxK8fX86pgf8mSLsGutpxEDcKK3icTRAaSttFTTuWh2yJoXPjng8WA6",
  "key26": "2VcdjtyWhfHi3fawMvDgYA5UMupiUMHx9yHjjbKfDV6Uhz7EsbpmsjtZkNCzVRrrJj375t7TSR5fJpWETvk8MJPX",
  "key27": "2nJ58DdN194a4Fh8E2zYxhbcBywLDXU7cfJsypttVHAw7knET9hnYvJrpk43Qvt9d5xGnXD92XERy46UmqccPbUZ",
  "key28": "2SfsxbPa6SbKHqgx48iwB23bfnbZC7Dw1KLcAw9fgUPBC6sNApNweaNTzCzjKz2T1tcc5fEjXU6b7i5BFsk6tuVp",
  "key29": "2rbnBdYup5XwNqvQ2LTFyio3t1BQkrEFR56BdSgwRA2nZqdtrb3t8vUeW7DFvfUjjRDmuaG6V6tYT8UtXDddFZuR",
  "key30": "DMDTkGTtWhGN7JMXuEiTj97uLiB6v8vKPuqhjXCHGDes5U3u32vWFJC96ihSYM3cnKg8C5zBJdDUo9STRBzSzdB"
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
