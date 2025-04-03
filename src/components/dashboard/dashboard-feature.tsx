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
    "38nupEUt6PhRRUkhWsoWfYdexr6A7eNRLGaHivZjo5xWrKBUZnGWvtUM2RwmwYk3qsT2wqcZCzCkzAm6G4X3NYpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWPKTGYTSbaVa4pam7reBp3zyXXm4PvxceRLDcxuwSx6kCpTMwgyQzmVhbwp7sshxkyQaHTWX5RnZC71JVHqy4Q",
  "key1": "3kAJBqWjsoM31VZNe9UUKTTQK6U9Ek8YCk1kPMVofcR9WTveNePRRhXrL7nVfa1zevk7WRiVtvMk247kJj8v6G16",
  "key2": "588RHXLCAMau1k4c1gdvXbieCzvb4EZHLQVaniVqsrKXA1aqYQsmiB6odCfCVEDT1s9cL229kdfsocAjVy1ghNrs",
  "key3": "fF6VD3jqJ7tC9VNjkwRAYHNLj5TxWcsNW2ibXFoeFEh3RXt2v2tTMwpgTWSPZgoosTo1uhcCVuUSPJyGMADsPww",
  "key4": "3w3E2tqwdbhoG8C45ZYyr2Q1y2T5UaNtCj4A2hiNSnNCFUFDyQdTyWV8c2hGYQaM1oEe1rxX6DXwtNVASZzFsoFd",
  "key5": "4WhZoz8wWVGbQqqLZNmnSeedrdj5DHvQ3DDy4dybdkMkBcUzRoANUA7zLP5NSTnCD5U5UzXUXcvVNbsx8K9mmMpp",
  "key6": "5tuA9HMDiGcRzfTkEUBhRWJkk6ykmv58SRrEiaHC5aHtn7nzJDHKLVJDTme29dJj2dfTH9jjtoj6y4aLAaeXhkHA",
  "key7": "5TXzvjMexeb7vsxicpqHiUDZxDztEBSZCJtzxx7LhvGpj8PqzMrhdeQWaTV8ug9yxxqqJ2AJuYCoQzHQe6N2hCy7",
  "key8": "64TR7g2Wsfg7BBmPkJSa4emVU5oGkguVoxbj7dgfpo5H1zGVNtqP38tNMiKeUYsjpE9FjwA5vQMvgkuQx8eujZo3",
  "key9": "GHDwaSRmbg6njGbj5ZUrkCoqBVCEfkJvTMAsZqYPHk7wFro8252wg5x1Sqvh6ZbGRg3Uat8XCni6BR166AivkvS",
  "key10": "3ygab12K5Zpmh4Lwt4yEx1ejv3zFKKhEJSQEUc9Hj7nyNYFVGnsZX7KghL3kNNNzrorM1T8oj7HgMkmJQJveHV3d",
  "key11": "36MfYgsGuWtcYAjX4X9TZ3eyjfFGrDzBBGsZdkGKkPmezVQe8fRtxbgRfYwNp5rtWQaDe31Qr5xCVyTJ3wAFW44x",
  "key12": "65KGu2UiTKh1zD7yuB4MdXwRkG3XeX4axNEYPWy1D1SUCzX7KLHt594ZuDVy7m7H8ETHoaLy2rK2WfnpMBSgsdzD",
  "key13": "2D7bAJzWeqHD9NZt9UVckKpjMYtDLTKoeCKy89amEzbS9s6DgbecTjKWMrLKKbEa9HHK4wyXjrTbTvVpqshDTz4A",
  "key14": "5UCUaUBr8j8c1wi2Tqgmhux6kRgyXBEFaAEWnFHfBK9Hegkz8NWCUE3hioWY9evJDvuyxQiQX6e3aaNjF5qfoh2B",
  "key15": "2Fbii9r6aQXG1a93Q6qp1bjkZWvDrvUqtsSLGijtbGGnxKLJZ5UtsfosasAap9sf2ohDooNsfcCKJu2HrzkoYhpt",
  "key16": "5YbnQ11cgBPTrhiHaxUSjsesBb7BwZAvg2XPRzn4cN36SxbyeCvxo76MF7xXXstq6EgHpZSUCQaubzmzsKm58Dpp",
  "key17": "2exifciHxFYajhuU1oDSDdFcHTJNsFswikZBFcN8r5rcbaQPSu9vTrnSF28yivaG7Lbr7VMob4WkfvKBB3UcMqeL",
  "key18": "65Ym7V49Tc7thdWAxP7mUT6nhvWb7RSjrjcxRa2EGLxJArjyqJpBTZq6DtusUR2eiV3mcGPDJzJSgboZzWw3e5sU",
  "key19": "t7Rx3Nq1E94RjYeK8bVMtFeXZvqKVz7qiUtF7DxqbPD7tG2wbG5xSR9Ux4pn7uNf2bqxQinbaYgGA4NC8AU5FR3",
  "key20": "3zRFkopqccM4EhHhwbNU5jwJMpjre5mG8ZwoqnRah1mocgcUruDihL3w1iCnFAj6ZQanpgYHHegs39HS41UBYBZu",
  "key21": "3KPQEssCZxcEcCi9w7mGfhG4BEzYE89snCJ3K6txdTJvw8HBzvLD8uPMJxkvLfZutWTZb4nLQen8WVtsYSva95eA",
  "key22": "5eUG6RSRy2fhEcvWfW8Yb2FCZjBYUMsA22UA8JuYqRwWnyEnd68TcUyH3R7PebG6KNkbYdKir4GG2yb7idv8YFJD",
  "key23": "3oC7XAdNNqFgkeAuNwd5CoeRq7eCFDDGgS1w9EhKtKXDJdEskHN55pVGC4QgrLP6gawpHjMvGjwX18PQeapiw8Xt",
  "key24": "3uf5LJgmioZpVVWWc3WqLYMVrQ8jQyEM54sYsUSxuQfkJ5cm1GzMyEYKcgFrE14pDdSg5WDbcc9RkUAUjrtEHnZy",
  "key25": "5kxJSGsRRua2GhA4ANoGGiPH9aJJYRno63E4xkqtZmjDoS8uUHyaoBGsvD6REDWb9Rd9ZUnrCe1b33YAVr6PbAaq",
  "key26": "QwJFkdbPWPSBGVDcZhR1HpfAg1PS4CfbRpG94aX5pSFiRdW7BNhbqNgC6a9ac7BQHjKcZmUHyvwtEkq4ZLjmKRy",
  "key27": "5WMKFR31ehFbdhYL5TxAt52P6sebbecPTUutnu2aXxP9gVSpN7pk4QtJ451pHd76aJF4vuxVybVYerf1Xm6uVvPe",
  "key28": "JmYoo9ojoenyzByf65DSuucDUpGknn2aCGwdPvK9pqwvaxJgtkZUDfbje19R9GUYpxuDZtiHWX38r84Yx4f3Wd2",
  "key29": "47GPZ9N4p3UzHL5RqJeQnDw2yGDfgfLAXGe1tgQ97Nwc6SsAdtscAFXRBWgQBTx6dQZ3RdvUy4sxHVKRiW98ZcyC",
  "key30": "8WH57JmbCCNiNbPZseGfzeVmgyhEsPvedD3JifUcXvAkXpRrUzbhXkZG2BGQgQQca58Knqyn1iuzR3CcWkCuMBP",
  "key31": "2CWBFNP4CdE5v8PSDFa9PFYMzEctZNnkvRn3wDS3QhQPuLSKcMjVTwQm5EbRnbFEZ8Vr9ab39NokFKZZMqbbYMFo",
  "key32": "sfyQmzZPLnJRjrAnneVvHs5xajR4j49TsgYDaGUd58waLE6riutnnnzWqzX9WAcv4ikKDyEUP6d6KuNPsdge6an",
  "key33": "2GtNH1f2usbasBVEXdGNMsJ5HRAK1kAVzPhzgXKa6fuzrkDn34byhFuxUvsgNAmNxsBgUPeQbNeiCBj5kq2AM9vK",
  "key34": "4XD5RqdEtdmpUQFmBu4Qn99FkZPqE1RD1nLg58HLNdLf6txY4Ux1oJZ95QB1cuzgzWwL6oK7cAWrM1Fexw8KtARk",
  "key35": "3DpG1xZSVvAghYX45nkbqABtYfQEqhKrVPigvDaP8ticyJNR4PV6PzUPbgXWqdHP2VTtyjcFwpDEynoebWmsgTZN",
  "key36": "C4wt7Zz4dtkqXWACUQxn9Chd4PX2ntczUbxo1QmDPDRJoKuDw658c2NWmWpxLyZRWip8SU9n4UwP5aSnbxmyj57",
  "key37": "4j7eDut7vKzZLiyqM2vMA2UyyChRyV4dxLnWzhnoeACssW8WUo5sGUpbXM26vdGu1bgeeAXRexd9wHL4czkKmwvo",
  "key38": "63UFBQ58AY6cFRhEdGEGUSBrrdqCt6duQpBkFkTM9GtAHTFvkW3v2Cjmp4gLNT9uYuvoP7K286T5P21SThfaB24X",
  "key39": "3fvQaiQ8zQFF8aMWFbJV8xywyFQ6kvYk4Q6r9HQRqqX2Rn6ThBAoxsuLjwADPPM4ZexH3r7U1BRgRZC3SfQvpVjJ",
  "key40": "icQgdK8PEvgPCeMcTvfmTTgjfr7jgzPcEQF3Tveu2DN2r8gLXjSLegooY8hV9EFVxsMDf8sYvz58yyPnMzjesDE",
  "key41": "3oD3LYkT8yu8YTxBd4tWFteVZwrYgKKqgLj2tYhi4VarT5QZu3fYYYhrLQ4w6xxxDPES7ipAzwsLYUAse3bMwErn",
  "key42": "4FWrkbuYcf3ee7KFRVZtiNmQXUyXqEYVY9Pg1Tw3yUSPGyR54qFNoG95FJaQc8KsurLPqyymfT5nbBGwCd1cZxKn",
  "key43": "5ueRnuHe46BYXk8vA4FkbW18RkY2ixiRb2mmnVEyakWht4kDnwxXYistPT1vduHRMKwDjFXBa3f31xQB3z33EwZW",
  "key44": "44bv9ZGVM1esbiH6qAgdDF2sLafusrqusJjDNnGgcrbPa35Nvj7W2jkdaLyfw96Ym389HCz43MEEVM7zRxgn81Jg",
  "key45": "awk1anprcBAfVQbQDUwm23hABns1E61GsykdVViM5eff9SnqnacfZrYc8oXE2vWFonSJyZkgFVVpkHyJpJQuYRx",
  "key46": "4SaKyzHh4n68yknFmtcsPemqQD7ehWwf1oFX6y1UZafkWJfxjvfvHpVDtambStpbZrrwqm3uEQL2hJwoqjcFjzk9"
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
