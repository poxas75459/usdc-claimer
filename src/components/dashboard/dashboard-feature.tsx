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
    "7rWs9BgHXV9WSyLrmohY8ea4mhjUKfqtRg18DA9JADWhAnQYH8fFrZKCRrzffTVLCgM5DgTsTbqttvUaSKRFNVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMxJ2fgzLVUSMXKfgbNL3aFqtHy1yMh57fgfvevk3tw27w3VqBTD9vZhNmVV9GMb3kbf9i3oYBomKRXErD6hqcB",
  "key1": "H8zSKZ2JJiUBfmcWvv8WHty2x8Cux4YX2isqwUwYaiSvihWtdix3kamn3Pm2QZuXm7NP1MkNAFj9MNAPb7x37Wg",
  "key2": "5fRccBMaeCE9AwiLppMo69fXhGqnqEbksRfwkqttzbP442igd9JTYFAizD6J8fMPRY2vFMFFgfTeordR16TbAejM",
  "key3": "267JVHz7HwgMoHaSQHVBEaZBZ7B9UTq9XCHptR2FaQtPYTjYcPjafEFb15JJ1PY21tViXS6nUE5KKgKgCTpS4nZq",
  "key4": "52hs5tXJBZhvWmLNzru3EQUzqE9VpZXL7nBWmA7p1cGAFwQPmEfZxX4aMwX83MhVu9CiDriP3dVDj2zrhHfcGKfP",
  "key5": "5RmG3tAiMkFLKB2vssDNwr5f5xH7WgL5y5JieY7hUAFdZVC56sKortxnAuTu81GxTGSzWGTWZNre2UVzuGSZ6sek",
  "key6": "2wj3Ak44ERCLHHrfuuarJFcTEzTJCvpzCV6AaYqH5iuUkpiZ8oaXidj7bKqhSezq1R4CfguzzWvnjftXcC5nDXJ5",
  "key7": "5iKdti5tGv8gquJd1CfWgPwCtQNC3EryvLaAbT7Mtv53uj9yS1ABM1DydYnVf59EshVj4ypRDEPC9xEptXEkX1y8",
  "key8": "51ULiyHBPh3aRy7EVUFs5kn2vkXJAWuVFc1uqAmPS2Khb6iQVFZexocH7gJpVuHp2Dgos6vYefn6uop6V4K4VEbC",
  "key9": "3TPcUC3SYDC7iWo7WZ82EqGxZgUbXkDJhTbmsosUj1RazMqaDUVTBaZsBLyH5vSXYLvcFK9faCgTGfQ6F74nMahs",
  "key10": "3musJ9h1TdAcHmavQbQRFSSxdf3hPovbigshdcfMzY94rYJwhQqcGR2Q2rZwoprAV2qV1W5W2492LqT1w2vDtokN",
  "key11": "34VwSxviNUjJpTWsR2TYrW3PGyJ9FzzAEga9W8yJEdJvmNYpvzgPD7Qu6bKMsiwfMqAtdoxCUWHheFE9YXEsYnxs",
  "key12": "2MWxCUNgeT4XH35k2svP39UVHPU9WjanPJMPKv4VYFNA25KUG6Bckoa3t3mPJSd7ose53ap5iSgKEsqYP9YgeZfh",
  "key13": "3fy59dKLaziXU9JeYUesmuKbmrGa17wEobwiMjngssTH55r9hWSrHTucXygGekxThCGZecuxq8DuuSVA5CrDLEwE",
  "key14": "2MU2d6g2FWrQihY2nejTztThj1PzXj9FzsFaEhhYck4hrvv2vCibUD5tSbG1XDdDLxSHYo5Sku47CB395NnikJtq",
  "key15": "5B5cYk3Su3BncsSCD43Fdz66M5pxPpvVTDvJiGcJqWaSVWSRRNEhqru5GfL6g5KgNjZuPxk1ZU6Aqhm4tBnvsDF7",
  "key16": "3qLkcYF6xPppj6nE2fR7PbBvrkBVN5DUEK6m5bczj2PyNb135qKACigrpnBHb9oE5BM6MVrFgx5HAWPyqQ5e6AFd",
  "key17": "3xCbF8dgRb81sqgVaE98SGUUMXPt4mcjBEGiEWJer6jbn7Yu7zaYV1L5hd3CZv6k5vH5wM4XTvdZZhrTs2zvJ8pf",
  "key18": "z2VKot6AQiBpsKSAsx6Pcu5HdiEjCLDyFnysS9osLLz9u5HzYuRYP2r6DQzy2sxS2BNxGWPL64ja6GfwTgH4TMG",
  "key19": "4UTGupZTJkwqxB5VJc9Dhz1tsPoUd6kDuv2uvQ9HCW3K8DTRpFEFoz8Wy9V1CujZbTg9ZEJCBW9wz2pnm5BBJnt2",
  "key20": "589hjobcohEwoLMvW1Qd2NbZygYHFh3cvw8iNP8K5BLF2kewnwk4xJZjoJKmVHQS8TH1eEY6Zmo9a8PNoVNP6kEm",
  "key21": "44v9GAJgrQoxD9pP3D7tLmAG4DDqaXmeMsa5tDCNwwGZxj74XktgZSsjafv6FquTsqGN6SAvFcuUEakgZHP8JtK6",
  "key22": "5w7tkFqRyQ9SxYHpy15bt1XtiKBV5NmGuV1fx21x2jxbaGH6qH3QMU84PYKWRYfnWaWVd67ZsJchZJLka2GoN4W8",
  "key23": "2wTQojwHyp62Mb8mcm8BfbsWguMHUD7HVgQ1neo4PGrmu1SaJ3C3t1jxJnkAMhD69pNfqv4qXDKUr4adxrupx6UA",
  "key24": "64K6hkXYa4gj38tTxur64HpQqrFTTz1XzUfjxm7bRHxN35GCttKqzi1PgD4ujJS1xw54P3yHVtouwp2RcdGrgWQt",
  "key25": "5ZBbzSaNZUMY16QnriB65mQUoEQSqdhbWq3u8FpsCBFpLNkxW3fhLxoATBAHhDwsoAsQGYwAJSwAKr4URiawJtg6",
  "key26": "5EycXXR1EuevduDJHZVf3euFMmT3JyrBQ5qirUCMSoZSUWr8ngFPZDRMmi3rW7PqACJRncf2yqhgvcVreqnxchFt",
  "key27": "4Qu4nT1CNG8V68USBbBU8Wp7eVJuNrdQ9ABQPJJbJ9aATpRzrt62NEjKKSZ3nYMnWewvJoznoWHxv4DFVJvAEGB5",
  "key28": "3snqRv7Q5QohN6UXdcQTs3bCpAkXEQ85CnvjRb3DqPo43dMx91GNS2Ci9zDMfBKKmwgGj4w3jYWmkv4j4RGg6Ayo"
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
