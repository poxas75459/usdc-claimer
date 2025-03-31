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
    "2gABAo5W5z3oykee9j7spCbx1Ut5yd3f78NVhETZcUwBsKQUw4Bqw8StBvUDSJCF1xcgm6DMsptM7pDh496DzXzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKwQe6JTmLjqrPPVrJuz8esMMF8znoQxR6STHrERaGcpLZtwbFJ9hKGmq985FuxDyoK4DonNrWsPRBkeeeuLrcw",
  "key1": "219pCzb7pWUZi5u2kDRdLBAvKmVG23kkRTxs5UrzfdH7xEpodsBPC4ww4b26SzGapCSHnV8Qp4qY7hzVeAU9BhRs",
  "key2": "2XZXPEm4qThi2jJDpBZD5mCk5esJsVuhhJe7kWLuMaYCWYRHYGEyyfUqdwNYGZC5E8QGxQbAnMpeHh1wDFSEnW4g",
  "key3": "4DBQK6aEdo6ujr6DoPsa56QE4jiejgP1b9KrDwc7VNLWq5V4Nja2k1wjwbHo6edFBELNyATFDB3yWvn9QuBEz8jX",
  "key4": "4NNyeutdKsLLn2EJDG1pFEWRbs2E1JNp5E8fsPWDnEUR2V2DJNsF5QbhivPP6UKaSZkMu7881JXNVtx6fASojT1t",
  "key5": "4AbZxSbf6tcqxAMn9d8yAzDEguVp4pHpPkSbjyaqHZggHnCv6B3kRGGAKp7amP9NeZg34hRpPwQJp7YkbpcLRsE3",
  "key6": "2CFtYEYDjzN1PNpgb4ZJReCGt7YuzKfGooBJhnkh3bpJx4GMaDgebJJi1BAsEGKuE26zW8c9eES8aFCNjSEaejd6",
  "key7": "5VLqVCY5VEHtDjho8CJvLGYBguoMGVi3kQDMuXV1kgjxcAhHhb7PzftPbmS1FE5G6bvsKXP5qfogAcJRMTgRALip",
  "key8": "5PkyqKkHLbE4YG3nw9w1zEyzofxJ5XqrdPqkqFBQK4cmjpAWXsu7d1Qo1jE5F8ju2LHnCsbEwaZgcYohLppYTjVF",
  "key9": "48G99gxSbkoZoMvSz88uixQpLoRi7dJyVJNPKQvkxrt8qNMPaKeHywa1sc7qSMN2ApsyhjnTkT7ToEHdx4sFcfmD",
  "key10": "2Vcs4fcek6x6MgUBg72tKCUYfJybLcAEguhwsZsQgrtN4YeAJERpTcinYJnR2zjr5cjQLCEx4oXQum8hJSdYfsTJ",
  "key11": "5V5qy4rNRi73vB4FXkgKDkopDS7uZr6ZMhH4yFRNHgEJaEkopHnKdNdwcEQD8ZHLjdTA9ZFhGgyxEB3WTvvsKAjc",
  "key12": "4JaRxtfbHVBjLoK4BJH98BYKRDXwfGKZLGFmMtT8Ti28RMZzkNqnqvGMbNjVbALtVdRe5T75j9GgwnLw5SjspedZ",
  "key13": "4TyUWNUUedE6gyhTbQPDtnUssGaSyHiuJKmwN4Mgz4VS7ULg2UqgkpGvemmj5tbHpXh9cWnP9az3Ds1KFgk17onX",
  "key14": "3D7BJhN6Maxtoabgz4769TSqd9JaTK3Q9Ct7Th1RvtS9vd7mre3QCLzjuLavkiHCsia3uMy8W5ZijV6YqD2ZY5U",
  "key15": "4gL9kuCVYWjVwcRJCsVXGLRwpj5asbUfChCEz4JSPT1dNEpGVBZL2TJpSudbq3BaXQ5zSZECkdpLoWQz7xXHGJ7H",
  "key16": "9x5qJvy4ZQ54gZUEVuCumELB28ce4hWRsJqsJZzT5dLkcuEWgm5hAmnwgCTf5NUMg319hY7jJ2n5K6rMdDBAb5c",
  "key17": "48f2Zqcq1K5b9KTfWxyp1PLDeQPafWsrHwWKso8yCf6QTYGDH9UuNVFrEkYjqaoiJzALrGFihWb6v8gKqr2SAarL",
  "key18": "3Vu1WBcyosVs33oWBecCBAja9ene1ydTfCdfCxLQp1vEEj8UneEgszo5SVZHwriWVE2pBtAAKKVxVSuy5iHMa4YS",
  "key19": "v4vJjx51rLBYbafzSBar16PAEYemqkFb9nPhGgvgavJtNQuaEoSGJarg8Ei9vPXts1ud3m2kdkYz5sXQCARNd8f",
  "key20": "62AcoAg14pfaHsdNscdwyiFaZMTa22BHuJ8B9nrLRwmshs63zDed1XDiJabsYswSTuM6aMDgM9jx97J3HGQpFA2o",
  "key21": "64vYPCdvsoioW1RMx4rZxPDEBANwSk9TswM2FGvYBdov7QH3raUGDUSPQH75nAXfxXkPgysjk6jrUveDd5XPZFi8",
  "key22": "32WxKoKLob4mvc6bvowsLf5EdoQkT6D6xPdWARQysK5bDc7b3yyUst6tYKJWU4ZhgVA8R8uV4mbFNiDGj8hBKDif",
  "key23": "3Zia31HyeCdbpBJ2x9c6WAL87A4ehiCD2GPruw9JPfYE5Sx8Jh5kiePcXGsCno9kCtKU12q5LRH7JF1SK4pjrsoH",
  "key24": "2scdeWcWnK1ZMEexNPVeySEQkyvpFyrJJsthKwQgd7S5Gv1buU3FFGr9ZjFpDttibkduyQVpdRKfxoyNFw5nC4th",
  "key25": "3qgkJbm1xndQFz8668i6qgT7Upoy1BTEvZMoWEhgdqdmMwE1P1yVDjyh5XQf2UufMYdEWGpEUK5inVPyAHHQxKeH",
  "key26": "2ZjnaY74rvAPUbVhmig8HXV1D5tradMVUBzE3mE5TJd92hnH2NepWbZ2rrk5a3hNz8hnBN4drbiKEzouWzwd2MYd",
  "key27": "5zzUuhKUjCtuZh1SoXMvLtC2rJrNA5YSHfgqKW1hMnYj1PgGtRobpXfL7qG8gBinKohAkMPUsgS2HtxB14wTvpPa",
  "key28": "2HrGPNkdQokDspj5YJd2QoNrd3bPLV6zdJzMucSkoapWPzfTaCfHrEPuiGgiKhW6vmtaostwkMFYhuMcwA7kfhzC",
  "key29": "4QdmEKoHqXNJZtdDWaTF7rt1sZJrRCMmxqtCmGMYm1jNLworcwrbbC9FqLuJ64cN2omp1kk9QBZAS5PW9zUwPsyp",
  "key30": "48eD1nCLh6SB4sua857xNZ6w9EMhpkqXxF9XyLrC3UEEqnYpW7tccnKKFNRiiPmBnrDdNKrcdi5NYcryv1GKT6Pt",
  "key31": "2hMwxBNUwEhn7jvMNPZfU2qdvQMfLk7eyN1UWJMAaA73pvGjbqcJXvquf95K7MnN4htfFz9u9gZevPEMLKto8175",
  "key32": "XQxfEW2pf5REi5Yx55N2BkBkZafWkDSDjn4EbqkvwFH5XXU34YYdt9U4TAR8XTwvBhjy4vn4RgCWEZwJVSpKT5J",
  "key33": "3vrdyfgUFrpEDPq5cFhcXAEah7UDDCxhu6f2bjoJo6LcuH3XKyemGyjuT56qkfV6WcknUGskE7MU78HjGpinZsoX",
  "key34": "4EvS7cug2LZNHeDv1CqSQGLJU2XWYdvJz99SQNypGMSjEsDi56WDwqfhdKVxXNc5H1USwu8KNJn4f1hvGCL3cRyh",
  "key35": "2u3H3QS2qajt2rgw1EkcsoDC6qMWUAmYipcDczmHF66cqaotsfJWZESgLf6h1uhEY7Tp2aQRpREHCiuLUzPhfenC",
  "key36": "3U5TL3W6uYd3xkmyKzuKZMNpeWePU2aCzPQ7ySxWgyB7xrhm1YfmMzsaFMXh81CT9NFyh5wiZQoVnXeVpAAhK7f8",
  "key37": "5hEehFHu5mJ8w9Zuef14ektFQ88unj3nX2wGAUsyLwjDnpaiAtMMPfbkubCQVyL6Z3xD69dbVTqi9Hvb3NniYnmM",
  "key38": "5yCoCfePj1p5ZRvKSq6LcGUr3dZtZoiGQPSKdjxsPxWVcbWSYLjBLjV7zm6kWE64R5EZ1rDrqNLc8YwH72MuhKVz",
  "key39": "2a5HjJrsRb7Ai7M6qx4v7L8ikGQrprP4TJwytALFJJqc8CcGPMioQsiCpy3NZGGwQmGT4Fz6ixfAvhvmfzRZMpeP",
  "key40": "34C5CawEabeBoP9eAto93m6D6FBRg8F3FWvE3XEUzR1zr6NNPTMdoGR8newu1w7DuUxQcdmPqYBhSHqxkEfp659g",
  "key41": "HWnYGMKg6DcXBJXacaPSezaG5gWGa3N25nkJTLGyrygAEJenUL4xUwfPtaMAnBqgm3YBeJenHqcnbKhHzsmgg1o",
  "key42": "3zxQMcmnDhDhSu3BiNT7JW4sBYuC7QEnYL8aYEmN7MWEHYkZyLC6n2t3nAdab1bDTG8QGCevqnETn9DPALQKdWuT"
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
