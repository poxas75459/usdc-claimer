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
    "bxvjYWVAFd9jJVic5RANEzRLad21d3RMf5GkqkmfYUndW1WZnXzLGx6thBwZSFVmChZtvDS6gCcykwcEMe3cNwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmvsU4UaebBptqpcd8BjXjJw6rBKHpxbUUFa6WJE47XnU7ekacnxTd5hdf4aWDqQ3WHUz3RxZsiDoDbyenMZBq7",
  "key1": "3rksC7CF2maQbkRwTBmwYYdshSxGzKNLjChpjKFsHPkFoPthfPdNP8kGdQe1PT26ANr2VrzV3u2oRfZzAPbBT235",
  "key2": "3oh4AgPGRRbKY1LoJfMuJfz8uAHC8Hn1gFcY9A5yyduuJcTmpYCUNmZqEzsoksP1sLX3kwrfLBa1XzhWBsWD4KYq",
  "key3": "3k62SP5epAYd6rQS3e1n6fj3rU8S9bc2DwrZB5NotauawgRtbEAGViVoB3RDbHR3qSZqqqrPKvecu1w5YiECm2J7",
  "key4": "4XaWkKrbh3aimwAGAfH7h4SBz4NvixD2WyouBGfy7ga53XB4WcEGEvuEGxVumj48FNbwUL8eCVnrYzHurAYRViY9",
  "key5": "hHZEgj4i7v8UmdtXML7YuCuZRgHBBBCiQ1bzcscaridN9hoLyoSwRPwx6VWbdfK6wSU8ZFFCMX8Qy112Un8Kfnf",
  "key6": "Bxsntt7hTusc5GrCRzbKSETc5eA6hZ7fq9Bm82K46iHn71nSuLfdVqbFdqEcdPWqSPwnUTEiyEqDMGjSYXVaAqw",
  "key7": "5nd6eh1H91eVr6grGmgrF4xTYQEEangyKZ6UP9w2ScPowBr7wvD13ZcXRftRP5pGhxStGLjt8FeBhmjeGtxgatW8",
  "key8": "xHoZxp6XRDsFdL95DMrohF2G7rTBP6sT9D233sqYsi5ZQgpmcq5aTZSA2HazvzinFeGUGVemP9aE3tJZAqTmTby",
  "key9": "24kknojUh8amH2vVXknyrxskfr1UXHuN3Vai41hAJRPiKPjeDDRaoxK9FXDKKm3FpLxfYXx2xCj2vBb8KZFQ66mV",
  "key10": "4vZ3q2tjtqE8xQAq8CxuHnQfmURdPW38wnfRjH8aa2ZhTuvcxohjr5C5ys1wD2D1za4woBF96uuv3o6Ga2rH1P1u",
  "key11": "5TvSmZYjdDjmYB2BtVavKVmN94x1nf1gCGjqfY1ALZY1Su42uKJ7hWHKxXkZQiWXgeYNybcw6nCYfH8F86fcLyeW",
  "key12": "4BDK71DTRGSaZLgPmLXohf4avhqxchB94CtWvzaYmtwXe69CrdjqU9ziqjMzNHX8HFJzj9Uk6jZ3wAeCyzgG9Mjg",
  "key13": "E6HswRH7V3amc8enn9e6oPVX3sgfChFNkaqeMJjVQ9iECXC8z18MKByk5mBLNXRezLT5FJNK2UmJinFMfwZgFtS",
  "key14": "2QrzScbCVHnsaZz1VpuYfBSyCR4GcSR7TghmgpuHTTGBDLvTzzpL9KPgR6qvdUFW7SUxYhk3yt5mZrsbh59vSxUR",
  "key15": "KUCTkWbx3DHNpE86muUTffythAgn37Xcgj5oMY8bEjknPxBPFFjnqH6mvm6L7tJbdEU5UrwDKBQbpNZRvZXN98g",
  "key16": "3hPQtk11PifqLW4jM26K6m91u2x8xdWeCruzNmmgzzbi1bnC9L7K6Ey6wwEsmYM8ZrChg9B8PHkmJe4VeGWDdHQS",
  "key17": "3qZydSkAtihH6FqbRRendHaUC4vUb9cvPKaKA61iqWSLVpWTUoN43fv985r9nsEsg7R5jCuMXRjBjBRHFz6ryWmE",
  "key18": "JkkAJg9XpYk1zMJJsBuG4KgXXk15geGgcyVZ7TzXr3eH8M5WqqQUTjmCmaxCyYKAuKKPZTd17RrLbZqR5dj4X3B",
  "key19": "5RjPSdCv9Lc38dmZFFgANUYM4guLGGiAjFmgEFzdotSAsKaErRdzFkB2zgpG4DWN6epFQBsWJSJGUJe7VV86qGcb",
  "key20": "63Ez1pP9sYSehUe9uhU6H9RppmTM9ovfcMrN4oP1iTfgDfUQnHgYLGcG7qXNXNDUsKhfknJpfYydTr9Hzmegt8af",
  "key21": "4kQSfJSXxp1X411JkhfkfSKv6T7wAKcsJXhpsgJ9Sz36bH6qPYYmBmFDH2QCnVFMd6sgsmtjKCjZKFhPBjTQACmg",
  "key22": "2ddHUBQKnfcKUT6DzZPvuMsCUmdn2VxJ7qo7ohn2hoF5jjo89WrdEA3tUSKi2a1yCA5G48o9pRwsjkndsBB258AD",
  "key23": "4kW3cM1ExAUtqHKMn2GSBHpd4eiy3fA3A7dSxXd3uTiPWhWEdDF1U644Nnnk3jpP3nVoFJFLDALxGaG14EEmpy4H",
  "key24": "4ZGgr6emmWAysjN1kywkVcKrTrBsaGQwUN8tKcNRm1qKKjKNGPRm7EMaqDqV6Ra4bbntDBwhSWhVJ34wnpUDrWbV",
  "key25": "44DiYYCHgmQfg8x92ABrjAYCsU57oBS2VCJQoDE7Hr2zMegwbs89s7WGHxZUzkNmspXaAmEEJVp67HHo9Km4uig3",
  "key26": "4aQyximbBL7sGjponyd8jhPKJEu867zHfBHYwW2BCNLMmoFi6gp7Nvu2wQPJr5ozjcPbnCZ51PBePxA13Bph8HiH",
  "key27": "5Jm3gPUngSpHuqefGiSXYU2XfopouWCKSBEMq63e4T3iXGEd4oP1Eb9wRiAtdt7kD4C7c1BEBFSwDo2q6ADnYfHD",
  "key28": "5RqLEJ6PrxfUddhE2E1TzAexm6zRCcguN75qdo5QSUqf9pJEpiwaVvs9Y3DRNtx77arSmqV1uJ26VNKyXuSZmBWL",
  "key29": "3WkvTSMdwF9vhbSmJi9TXZnY2wZCtFMWo2muZ3VubtSNuL5iJbWsRHp9jxczDjFYSeYh77YMEur4VhaHtPkM5z3b",
  "key30": "2VF5zf5n41VMLNhwAfjRYGf2W8ikWVvUMFgn3kUx2gZeonDb1Uvrz4DM5PSvPT8Zc4D8xAPLkEiMR1xVpgetiE8M",
  "key31": "3c4iHHc6cZHmTCNza8anExTPuDCALSgagNmW3vAn8hr27tKt8vKakiGHcccvr4mqaCkoUDpSK2p2mCFyTQe1CPfV",
  "key32": "5KWGKG6khoqJJMZm8fCCzm2PqZLkBZ4b682xgiN1JQ79tAax6cwttucQ2ijNfPaFi9aSPzs1N4Xk6yXKYcDyHYxJ",
  "key33": "48RSUmAVTrCpdEWV6pSvcArPWuWWPBD3PJs1vuPDXx29AZ6538kzD5tyELygPVp5rqV3xGZ5QwwoFnNQBcbgdtCa",
  "key34": "4AC2gGeikyhk93v6mA1LBsFaQ9YgeRHUiY6VW7Eh27pij2FAhjYEeprherTp6MQGZLRpxpRARJnQFWKa4QXGH8hK"
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
