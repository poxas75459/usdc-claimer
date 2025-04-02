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
    "38m6B8zSG8ZY1BeDkCBFfhkC1b2xsJ762pUkqEtchRxBqv4EDs1Y2pAPkGVBodMSEUHcTbmL1WjXPkQjun84JPxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rBbH3Fqg7mXwTY2ciQY7XryV6B3YF8kU5ukoscNTcfnW7cFSCBPHqksSZQGzcb15Eixh8LJhLwbv4GehF5c8gy",
  "key1": "3bbvK4RZ12JUmY8rpbqVLjwr8fZALNe8smfViBaBAb1sR4hhqnGifsyJBQ6wPgYYnnCjcrL928aHGqq6GvzJ5Rqe",
  "key2": "28vF3snuzpgZLG9qqHWqEYwncdRygV1Kjmys9uGHgPHAsJNifRBF1tdiCuFqaZkthhkVQrK3uzEL2GsgKqKPDFzY",
  "key3": "3E2pGRRDcvWhPUE31rPpNCoNn7A1Bu8NFSjAgWTvUu3o87gwFDbS5cMtddXNY9LV4Hoh4eMUUVsBbn1975NwZumv",
  "key4": "4kozxHpChUkBgTwSTnCJPLFivmUmExoLxXpbTJqvERW6LyYX3FKNmkFFFHuNAg2H1oTH39PFuoaZmtytujj5yTGJ",
  "key5": "5SBT9iqATE1Uer8u22CJU5uFAdUiSGyBjR9fd3D3RsBmwMKbiXrKpYVy88FFa6MK2dzANxbXotzxfRdSLwM2KVvG",
  "key6": "4gDnrngcQhzAuuEpxsNr5mtcQWGWF6LNwMrg9riMet2mt9CFuQD74Hmp2FxjSQquRoZsegbSmgCv9kCbufNHqu9C",
  "key7": "5xHR7T5jWRfPsg7ug1CbnYBUaq7vzWfrAUFGZA3hXEXzdnFGoB6M91LgRZFnsWfUSbTHEsMZwnHysjEtPyUYSfiM",
  "key8": "3iK4vgHT6ggr4roH4aJ4ZJoyEFF8BAkfWuERtEQ2J6FqXesopX9UtwQruB7RZRpfUAsuZMLABoR5FdpQ2mNfUH6D",
  "key9": "KU4YCXyv4DQsKCnRzy6SkPkvw8Xk2SWtGUyh9eaRboeey9Wb5fZhksazHh3kB6LcMcWxo8DBSKsUzut96Uot2qR",
  "key10": "5VbPNWzeXBA5h1SVALyvqo4vz7XWdtasc1crGBj2373ZeSk3ec2XFhXpG9bjpQE9d7LGskLi6rnameqHcbfBsxYg",
  "key11": "doyA2s9mUpNVVPPZn339M3kSGgFoF7MoiexKCRQ3yFpq7ggXMyAMxxevvY1XiTnenrVcYMK3nyg4SFoNNSx17S7",
  "key12": "cyKsxqk4oxdHAGb8mckWE9sUwzeMSih8C6qgH6BWdvVGj3uXogjLWwMomsZnJcqKCdkqVrEwKZpZmvKDd8vJQs6",
  "key13": "4KhjAr86D19aEEQgcpfbyLob83ZYNA7SEY4wyFZtDdsT9FLRdt8NTf2ezMBMN2Q48q6fuTfNuEPDKaqcL3Y6iBge",
  "key14": "5vXKZpnCzzeBQgrpzE3KWjnuKcXHG1eYizwji2VBVzc1UwHiEfkW2u1bYdcrgaUz7K2mNhoqcwkoy9qGZx5KNrMo",
  "key15": "39vaQDV6sMYvTJa6QZc1mcQZzvfKx6mXXLK7qnpciUhf5Fi4xAhq21nDJt2eyxk7xiYe1EoF7bqSJHjceq1w5CYJ",
  "key16": "Qg46LrwnaHJjeUazoPH9E3whdxYk6kCjqZwGz6Bj3M4KLLqTPGSG8YWV2wUzTeFSnn1oCG6NMZfmvsAvhFg3FVh",
  "key17": "3FWrZxLSZh9x53abE9ZPwxC47Z4sqf2NBNpmfnkNBsoA1wkgi4nfBW17o7L793JEPbYTxo2CVEhSncZjoq3Wupi8",
  "key18": "5zfWRtWVQZxqzMfpLtJSDysa31NMP58NNh7vFrp8oP8HHVuaemScHpYS4sdFk1HPeEZ2wKUcy9vKxbHHTfEaHxqK",
  "key19": "3w9npMxP8atLJJBwCFFSRHLrzRLKk47FZHQaqk6x7FqmbQFYZw8RT6Ghy6Ycpc2GDqNCLkjLv9wCJgcuTMoZ51PK",
  "key20": "5WAfQwGToEpyWnDyHytCm3BoGV2DmUKLpgpZQUxnGqw4SsHmZ3mHXZbx4bc9rC6curQGZvqZTNPnT2XzaHchBsCe",
  "key21": "5tp1fQfgGV2N5rC28TbaidnXMeT9Jjq68tGghVD5iWK7p8Eh3EgvXkDcEL93WbLCWALKRdZiAvCo2F89AjJLCJKo",
  "key22": "KwdHuUcQ3SVtyNNspqgC7v7sZbkhxkLbMd638o9ccYWSfFZS9vnZtm3C3hcTAHaGN5tiYiUtSHwcQPCx3qX77dY",
  "key23": "2Zq6AAyMryTNDMuhEGMehzYBdSJ9xoZyi6CrRnmYkjJdPVR42KnTvii5b6DpEf3jGGdkwgCHj2zsy5wc8sqYwwFm",
  "key24": "2598j6S4FD2TMBVzwLTAt1BsAuCTu1iAgAgj4WXMGGXLtRRmbkHwWui3B1W86e5x5YB7HumuV6hgnZD7VZxxtVPA",
  "key25": "3DBn94PWcfcoDYHQEAR5QtQQPkYQUWX9MXCFtw1uVaLzJLNu2ESNxUPxgtHMrPNErDrhX6iUaCsedsuATwQXvXNb",
  "key26": "4Ha1oY5bZfLL6mifoxMe6HJf42nocYEHKToRBu4Yw7aFuEQncTaJzedDkX7rfuRGLA5jCU5enJHw3KySV8UCuK7x",
  "key27": "2UCb9uBcbqvHM5ZPDXRfnmSoi5L5u4vqif463fVxZLkp5XgMNvtHFm8fC7DjfCYJGfAdVvASyLbs5DLnHeuK4GSh",
  "key28": "55RZta6AX3sWpgYR2qbxRW2qGJM79f4gTmtjqu4qo9wUBDkrz4AB4DU9do32dnPycMBfBr5wmqRnhTFLApDcfusw",
  "key29": "YZnJ28jMJufB1yHjtpaZTRTvppp6HTcpFp9tM2HFYqydJ8RgTooiKoMZE3qhnQDn5D9qJpBGjP71gFNdv49YNBx",
  "key30": "Bwg5FqjSA2k8JKTejimd5mrGXWbpFCDPfaRt4eiPTPX2THs9bq2QSw1zSVbGWeW3RibP14S7TCHwTeNDjHUiofP",
  "key31": "4kobMxiSvnbLvSicddh7gytBEHBhsq3FkNrWAHk57dcMhGpf598JZ2CiFWkZLVScmBbnWLexuvhkRJmSTJ5cArpn",
  "key32": "DsSie1UcTAG1ceDMwTmW4z6mxjwEGBpmJ77bZbiG2DXXez5DhXLy5w6FxAa4EepZeVV5aLYRpLqFYi96YWQYtmv",
  "key33": "PXjQb5Q22ZkgQVSQvdbx4DmoWViBo7s6UCqWuzW8LuZ45mUVjcheXAQYvWK4d9vbp7kNiyCEgATp8tJr2KqhnxZ",
  "key34": "3FYW6pZbTQcAEUh1TjnsEjJ959YTSJwETSJfWGgvDECqtZ41iTYCu7b4HADmrncPsKVDqr1hRvmaz9pbySp4E3DU",
  "key35": "4pJ2Ea7qnYYcAKFQmWPK5BfwkBrrZWS3YGQiHfJPRRLAYbYRafLLSJBm6nun5G1i3tFnmVwkeNY9TZdKYR9qm3iP",
  "key36": "3S3pirHjpVyEABz318XvUhjMPbMTAkWfXHmNd7612EFGNd77WZBAMsV9QL6Pg2ii29LkMLMHiW5NXp5S3GW2xdNr"
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
