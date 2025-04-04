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
    "3eLBkQNcxkJNqNRhnEMJ3GZtL2bV7FPSVw6AQ3faNPLEBrXzWmuXsSyt9ZCGrWdfAfCvoFP3XN3YCJ8pXFvFUnhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMcPCtteAmnsGbzQKRZZ6S4gENVGLtFhWHzcgCCBA8JJGUmqSPKBnGwmPjvboVyRfSvvaqQWhhPoFWyxAdZjeSQ",
  "key1": "2maRPjHeR8Gio8zHTJDwms4oF62BCXzPkfamBdyGgu49e6e117a98q5uCHPVjNuXXM5Ax8qZ5Ga46yy5MN7w2gYV",
  "key2": "5nUA3EMVpN5RLgcwMNHJULfs14oF5rjynz2RoMdwcU9z6bEGykcG4aGmEfn99sLLiAX3sg6qAHbNDo69o2RAApPb",
  "key3": "31tvQyiYLFcf38yHrTWUtKj3xBubgnkygHRU6HvdMAoPebMEq9XqTSyEV5cfB2oVFVACtRgF7b3boW11aC3T14bU",
  "key4": "3e63wNgumiv9e53KW2baQnGVdRvqbM3zeTxYzdTYD7E8cjRjj6RDRmK3empAZx1rpACN1u9J5rW8PEQ98ZH5WWN3",
  "key5": "nfU2x9tzhssZXkWhRNMjyKJj7LfL9DSytLpyVrKqAXTR2vwSyRPtgTmEjroofpuVujRno9p8Bds8mZAtEYAd7Af",
  "key6": "5vfzcKddtRivijEnZ2ipeW8DeEVrp4WbUBeSDRSxrjquHCd9MG77Np13M5Xa14S99D7XdktbSncHeLGFQCYpAVNz",
  "key7": "bEQnG129Lh7wrqxQ8S3MNVQRFbHhMq1jbYY39BogKjDCNLxtugEVjKCzrVsrxniWdEz8kFj5HmWxsu94Ns93fTp",
  "key8": "3jerduTZjhVXs4Bg5v4QAikYhiByTaGYV7hmBfHg6gqGVA9LJzmFdvT1CJRhic6vBeQWBuBf3kitpri9TJeo4N6a",
  "key9": "2kRsSo4LvJ5zJ34sTgHgXxRMKSHCbzNokreeppdKdpffrfmwMj77UWwVTvV9F3n9CdCmMU1Bc4FBeLmCJgD257np",
  "key10": "39hTxunn9FJxqWDFE2YaXYgYXYJ3VxaJFJqc4wJR1AvREz5DwZzrVAYvUZG4sPjd2sUEHL8VAdMTxubtvdS5w48m",
  "key11": "53TgZEje5TsfhhYmLJYZYuHi6gXvMMxLrjSm8XneCY5VzYetkGnHkpivit58fGjsSd2QZ8F7faFnwJfHd4jDc1Vx",
  "key12": "3vPFFx6itVp1oe77NrBA7EFhSMUkaszfSVNkDahXXnuXRKeQTkSGn8DFeHH6dbUnnYf6DuqLSj7GioArixdFecpf",
  "key13": "3UJiKedbf71dpgchQA5ycxASCgB7Ri7BfVv2H9sqoxTYTvTDqH7qW1S3QNpNC3FZN5h1ajWGeaVsgNSNNFmT5Zjv",
  "key14": "4peygQRxfwrYq6z9oGXEio4n99S5YpY6rQbnn67Kp6Tab1Stfy2nHy69vCUTPt67dmLSssD3uKRCN4RFMQbpSgZU",
  "key15": "4x37pLrSzn58ywwHxWmfmHLFV63ANcRK7MRRKJeSkmKVT5gGC8e93L171yr48B274v4F5fGRk7TpCgok1ncqLGX2",
  "key16": "3eZcRBhrHpxRomPKtv2csTCDGFpD3pHxBbcCHeggLujmPLqrPpLrbnBLyGNToH4d8BRn4Q7VNds14rjMHo7C6joC",
  "key17": "4JCQ7rcpH8wXirtNSh8gw3bDZFmzPCbgikmhwrEKZbRvtopFVE7sFNABTSB26QDKUnzzTxcarrkq1iQKoRRkVX45",
  "key18": "9bKMc3uxZGgoJ4gbRdMK6yWiD1V4XcU7YB9cnUa8zjSdPvF9XGKRjioHHp5vrxPZss9whTwyGm5g45A9NMSDC23",
  "key19": "az2enzSFnJMkQ9hMHeyCZ1NUVNGZbSveeZ1MNGzDR6gpr4epEA5oDMLtnbrHqyexfxQtF7iBc7bBNz12rgMXKF3",
  "key20": "PboLdcGBeuXyoe2wHYjsx1QHb6CBkinSwDxYb2NsNuFKHVES3xa7FzBTYvDZhgvyk1dsRcMHoUHXxrZHU1XNHkZ",
  "key21": "E3R5EAd6dZbEtmozcGcQdUUakPnUFY5nACX1Srcdj486tq4B6ijiy1tdHF3SPBRJXYDH8WbYwd1VrnxHRc5YDvj",
  "key22": "3EAep2pCzaWo6aWua6qcVfCVvd44YQidC6Q5QFm63qgSVd5F5hpdxzv47ZNStpegdMxGtMAXqUCTKe39Vwne1UF8",
  "key23": "5uMVAciKzmc8kYbz45gBhhUyweDGp37ZW7wEqntXxbEt4Lgw6i7ZL9xTbwnjpxX3zGo8Kc4H3GeKd7vvC5D1DotA",
  "key24": "3WWyrdVZ2aQ5WYVu1Vwmg7SB7TVRRz6X2QRTHq97ZaM9VESFFc3oVkj35Mf6GQHxC5W1cHRU2MBmkafU2XTdd4kG",
  "key25": "44qTeRyyr1Tu1Cuw1EsDbKHfChT3e98St2yDQi4fMGSMB2G722gxrpypFC6asKkyZVvshQZVjiabbF14TdbwskKz",
  "key26": "28LAFoh9aSiPfKn4xfGJdWJMSk3stF7FPk2fvPNvWBUghNwoXZSrEtdbU7VmxYUv7iwCvdHz3wEdU9VVudXBRav5",
  "key27": "2i3Pi8jXXBEkCY2PnfQNnM7GdMHU3fuYfyCmQYPvrV3tXGffHJ671nkgTnmA5Q3Ei8SKXeYcpWrnsLgjYRAWTDey",
  "key28": "4VprKMLUfyYqRWdSLvfEsThBaVwLC4VtWR9FphFSt9nNTqo2R7iatpidcNmhrwWaZYuqMYUDH3Ft21X63zSfq7gF",
  "key29": "2YQMkRnVbtuudtmT4xGscvu2r8pJ7v1sQXe6sWBMc9YpoLcALcsJXuHQgtedK35cbWJwWLjLScphftBqvq4aTbPL",
  "key30": "3eBPbVrnz8D3javUGeLwxivVyNjj7q278fB4iuZJtrSqWgaskgeKtqqyLepFYSRPGzsKTfXeqXisQV9HPmWUjLhH",
  "key31": "486CJmpFSRX1VZfRjgz3pBeqHW3NxNTN8sPhBNyAh7FLJWb3dmwJV4ENsP4yxTBRwCYB7fBuVei9QDKdFG5TyNkj",
  "key32": "5tmGdEdDSBQon1Ff5faDVMGwpWiCwcJqkRA4hJwocwUXkHHis3sXQ82nNSjRgEuGjraf6bvQbAysZz92X1xWS5Mm",
  "key33": "4XVX554HFbNhfKqTakmZ7qKfobR9v8gzJnYbYciioeVfr3EjtvBqeHVpqdPfiypphhzeL7x7wdyDocgRSS8iUZjF",
  "key34": "3nqMwP1wpJgYjwbaGqCzgnP6WXygt5TawuCGiscZvgwe5dygKULgQrCHh92QwvgeffNeZzjXjJ6G5ivMZTJvChiR",
  "key35": "N6WFiyE9tA9jn5cBBdQsJrSEmjnebgFLmsxtWKWVDgUA3U6d6Ngr52f2FPy3qBtM7M1uTB7vjgopFgcJ1ap8ZgX",
  "key36": "5sUSEH4i1yefugyUd5WkbgHH2F1ZvZY6Lj9mRJubwSRARccVSYr6kVWHN4w4sSnZ5tXxZu6miXPF93qxbZk6Uv4o",
  "key37": "55VLLHsxAvXpWXjEEdNtSyhiq9BpiouuN3rGvEug1qPJbw2Bvycs4dDQfxyDkX2swXVck6PHfssTuNUH73Pi2Ccj",
  "key38": "2vM7zKwEWHDHL4DWN9wARR97BWfobG73ZZ3aaAmZ3z9tGsb75YJ7KCz6XC6pTvAjPi5sFbyDSFD8W6bRhHWBnBX9",
  "key39": "2Rt5o5q9aBB6KasysMcD68vUEZgHSoUYVdyCWqA53xJxUXSyhaw4A2bBWBiSPGGxygZdzNKk2j1H6PrqvWt3vtaB",
  "key40": "5VGvaS1aze6yLj7hE4shN64w8im49oWFNwK7zWC4CEyaeHYjdtjxoJzRonJeYZR8mPkZWntafxfD8XXzAhbs3FUf",
  "key41": "3MqGtexAUw6ffeErpeVy2fop83XRtw9JhUqgXQVSp6FCVWZ2J9CC4vjNuVcdpG7pXUz7SkwxqMvuxzFrpLagMXYW",
  "key42": "5qAZaPH9JXdQhBRdEcSM8btsTARQYVB6hz5hTaUvkVBskdcBawx4DcrBNvFCJFnhptPcdnRXEQXR8rBY53arXiZj",
  "key43": "3fpjhBXYTyWs6NjAeM81xXiaCmRws6FnpYGNDJqet5UNGmT9ayPdt8YPuqs9LzzYK4Nhw873y4FoWAte7ZXe3HDx",
  "key44": "3XBa3SpnTc6U2XLoHS7B5TS8cXB9UNuTRoA59nBtsWecq2soyDR2iGWb1Gws8a3a5ryCCYm2TvX8tXaDKzDUcyEL"
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
