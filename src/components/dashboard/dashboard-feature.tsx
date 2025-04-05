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
    "4WNBumRyMtsjGeCB4iRzm6qYU6tN58sMvTmRZgKvcTnYBV3wwjqkPUZnqRdkcze83kF1cm3X1JjbnivzYo4Nq7E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXV1nwvmbwawahHWRHqyLJbgwWfi3exqRf3zrys1AQsxWAph2B1aNimDwwe6fxJJkh5Q1WaPKhJN9ReA5fBCW7e",
  "key1": "4z7rnmYZuKAYNNenwaytRgxsGqpBnEYmjcfY3t7rToVo69FwE25Vzar44A51Rs5JVexxkbACD68YmbzkXZMGZn5G",
  "key2": "2pbXwBJkPaM6C2DA8PmB1qdvdbGkpds2gTXC7UcZbS9BgTWUV7ABrRcMPQkcnSWPw5zjGdMu5qdy7y8hPJAyGLeF",
  "key3": "2rj6cPqkCSd3r4tq7kmm9Ji1cKpPxfQ9Wv2zK2CrbQ2fwzubuTkRGNnoKUjmzqA7CdvbAEa46WvvESwhrA6Zq7KS",
  "key4": "2deoqgwsKMb8B5VabQaJ2wjbXh5YZg1SbcvrJxseiLE53WCokf6hinm9CiKUck9Kw18P8kP4wY6L3jmqoAs5xT2P",
  "key5": "44hJg4SoxFbYHVdRRsED3mV6wVzNQJq1JXyyuMbn4UV8cbsqJijVp1JD8CWTiAVMAdQhbYjigS9JQh4io68CJRbt",
  "key6": "38ccAKrKFBExXP1nXFcJ3B6wJQnbaXheGwy7Hp2dzCEAHQvn8iJoQLXveip2ikTb3wWPDfR8PDpq2SPar5Bn2ABW",
  "key7": "4467Do8mWDEQPYcpuMaUoxbbhBpH5YS6yK8yTgTa7z3Su72BJpPrWChjGMbVCJNFuaSvU7iZCnmTDUmLcKXytAo6",
  "key8": "4V8eV9HPrPsVQ84sqqmtCWmatdBLGxs5WK3bJsDimzAyfWhxr2JfDvXFFHHhfrGBNSU5dPJ8VvuiJNQ5Riu3Zmwh",
  "key9": "U6KVDKRBzZmPAk3Wh1roqsX2uvCb74wxTnstfueehixkoUMCNFKuB9tRzVGw5FFABafCGAKQu3mbfXzEjoUsrvU",
  "key10": "4XxAaZEoDRL7EHiPH5CEFeFzmW7tQnnv9n8612KJMjRJ1PkhgqHQxYrxJ3JodEqzPCRYL4cQMpqsoNAoiCpnqMVu",
  "key11": "3vVKeZcBHGd1STVcHGwx6Vfe6PLrimuynKRTMVmYHNePSinfodr9YzYdE2U1tF9z8ph3UXtxJ4p8LELtnfkPhwyz",
  "key12": "BfT9GbXpPKLPeYEBxCKne2d6NV6EvLjZQiWkvyM3Z1JqtSQA5Xe3tbQU2Ldi8ScExYQGAhSNUnYgWJo743Ma6p8",
  "key13": "5DET42arRjVGkn6dezXHSodRgTjGVqMv93W9ZuKetQr9rP2kJr52FZE4XHHuydLjTwvuF3mgvHS69szdkuAPiZBr",
  "key14": "3DRxrpCdFx1k8Su6JscUAXm4oufgoW8AKgTW3Gx7s1tk3FsByJ17KYLawRCypjBChkL3tYgSNr8VuZfdDMgi1kpi",
  "key15": "5F9m7nimc3SynCybdnABqG246ZdKCh1P21XEZxPdmvhMdpa5wirUCvTn7f54APve19a1LPKb11EcXaAptE8xYnyj",
  "key16": "5JApndEM14nrcu3XzGZHFCef489EggBbZGRNakAQgi4sqT3B5pRRBHgnYRuTukPCQnHT1GhcuS8EeGKPn7u1zohb",
  "key17": "29gwff5Fnvmguhu1vevkvNpDLyVYuGkYtsAVfVXxctxrC3US9zFDFsQBN5HtVRPWLqPKAPRzLKBExYCLhpcVsy2T",
  "key18": "5Lm5xdWvWLNgQVYsQKEqGAikHWY8YKjyp9rrbPoCA8ZLXskU3jqUNbig7gPUpSM6TCkZkcwZesfY7UKLdhEHie7H",
  "key19": "2espdQ5YSZgviHYHnMhgkpk95TvRBSbJWpFYS45Kb392Xkkk8FXBuaekTZNYaFncwtkiuyjbgmjui5KdDGACwitG",
  "key20": "2btTevVXxoXPotPvgqMFcuFbibHMGjPqT7NLAidA2jBxdk7q3NxxBTzHrtAEsWeqN3bLmPPPvZitPEQoyVQT9w48",
  "key21": "3Bnj5sXyxcNGovjU2kq9dDs1RuhQFSnAtfEHFacGkfbVovzwj6TL137eDhamjhXZviBqPEViXEtbZht2pnuv4KR4",
  "key22": "43FkirypCnRQawyhyNxjnRANww1qGwEuigGQjHSFNxEJutdMXKN685Rb4azmHKE8gGcjTtdL92CjhEUenjrcaXkN",
  "key23": "4L29CGN8nEqnHdvAxAKDopDzfWv57ZwbfUX4Jg4cVawCL9AKYYTDzt4mBW81XfLCoE4LDYBhAGXvvW2wkYnLgx8w",
  "key24": "2t7846KVy7FU1r9aFV42akddkbsL6rR3qmJFQ7RL3TrZC9kfdK6CPt1NE7cjfJnfnBUUYK5QCseQd54gHtoXoE6u",
  "key25": "5o1cN5XnVpsBTsZJ3zZ2V3k8gn2bJH4p3YyeWMVx95nrs898a4U5aQ22c98xsfdsCaARsEvXySyAR46jeAttP5zE",
  "key26": "3WqjQKJGFDpGnwUnxCk4PhDA4ugjNUYgsWpD3epWhUGNNcG2ije3uoFWTgRSkD8mo9VRbQ5x8jx7Q4pxh4dNz5G1",
  "key27": "61HK56iPjy6xjy3C2QeGbg5Ej8ekjrqmZBMjnSXnfreUY1NVDAvSrbPZQQRBoMTgK9z18pDDMhnEm6tc59gvYmUV",
  "key28": "fC8FZG3hu7ctTaFG4tvjeQkkkmx49NUEohDNSHH5ZhbNVe1KEcxGDXSYLwgTwgSpqyh4FqL3sN19AF6Pj2uPJZw",
  "key29": "w5iX9GF1y8SnPf2cuFvFSC6V4FTV1sJotDyxz9jc4kEAL4K3i9r4mfBnnsXBa2gvNtpo6Vu2NjA75w7wnSaafqW",
  "key30": "61UtW2DP88KiRfCpyA72jAYMUmTBRrXUxrTpnmQTyr1zeoXC2CxzzJDWswKxonyiUnp4T3CE7py8rhmXPTfHDfUh",
  "key31": "56eCY7Cui4W7rDWU1CJZLfefcyT4c2thsy227J9GPs499NdfU1LV8N5ZLZ5TvxpAGDFZEiHUE2X5iPGpwudiRR73",
  "key32": "56bfLRxJBQfBSEiz7jwSgQmKPkr19ibUvpb6ayLnJkBiFp3xKVihJ2he7pnfprfL6WZXZH6JsU7hq33FA89j8jA2"
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
