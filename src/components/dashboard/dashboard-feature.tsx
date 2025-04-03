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
    "3CwsotyK5kiBNGzJC437So489HqonEeo21Mx2XNqEGALRercyMLXE9mGYiHKQJGH7GBGkiVfYrGuHfDyS5GfujP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkJyc9UT1zcUzZ5FmEuUWVtR4QbJ7g7TyGXt3rGkpW8cQf2QgvyeArL2yeyN9K5cu2156RfRrzvgCmTA9Zxyt32",
  "key1": "2bEEAqMyoxbmcTDZpTJiLkib7euUeqqWHxZkRgbMu3G7eYea1E4ufLEi3xuboh7WWZJ5AWMhMaRRr363pKM8TGq4",
  "key2": "4MJ5Bvrh44PvCvDdRQuBZNCXz9BVDeY6zG2EWhQZ44SHWC1fw9U3L6LuRaZdj8tzL6QNLFJ3TbS4yzGqJcN5Th9X",
  "key3": "3ppE3jKW2XkEsQygvvGJDs5mP4kP4ZSTvGCi5nqxD5oQfwEYs5MEaF2DFVUQoRvq4Z8UYBw7HfTZsmjki2LaQi22",
  "key4": "NYFQE7jUTBU1hHmb9mEUsshiT5B5B5PmJqJykPqjYLTeAZ9XViu8bsAHVU9s3cqvmQomb51gJZDHAHKLzKk32As",
  "key5": "3U8wUpmErtSGaVMKxmJTmTMdsWth6QyYYNqkgokA96Fi3Majuv3ReNX9GnddepfHBPDumA7Uxa99coJegbguQSiy",
  "key6": "67YpfztBsBzaraWFL2ALnoRJPAbndmFf4ySprRgScqSB1u6G9KpSXFPHhyQyzqAu3ccWhmxoqVi8Gc1nnLyB7fHg",
  "key7": "WUcTYq9SpmD74kPPMMkF4hZy5Ai3UBP6trXU8brM2XZrbXYujR7NnNZRJuoXyYBJK3UNnJqtu7JjFf6LDwcLnJc",
  "key8": "3Mj4EUKGX7zTAtS8DJxPNJH5dUW964WyruUVLKXCMpPSSDcfeR6DcEKWzHAvjEVTAsQimixfw3H1VhSYoUm7YS8M",
  "key9": "kxxQ5AuTppezN3PHRQ2ngvsqjgDWNbTS3P1YkJdPFnxaugTfzGc3M8QDF6dwz5VoTpzi6RTowF5g3CruyhjKsNy",
  "key10": "3EBDopQ3Pr4tjDtuKuYjx2TdoxLD5tPvTpp5o1kE1Haof1sm9sS6Q1j2J3yiDHwyMJMMyPyF2dCaxgqRs72f3nAd",
  "key11": "4FhVuU4iY4TDmkRQ3ysNHta8ZJeFMCfNvZ1tj9be7YU9cRs8mXWo8rAAHndMvbmKFdBbaBaQ6nYcRwv8Md7gB6dG",
  "key12": "5jvXT752RD6uHYZuVeAyy9wZuRtKVHxw2kVrtatctiYZSfrdouScjJAnGNSy1J4BrGgmmsAKfuja9hyKJF2LgRig",
  "key13": "2dCjEc3qbceLyKtpwHFeHXU7gAjzmbNcTEZEPpbM8sWRMfkNFYxAz64LDKUvhRWkTiE6JsMq1QqpTigCV7DFSF3L",
  "key14": "B3r3x3YCr2w3qUoaVZ6JEeT96RZBXKK1gYrFmLFVPKVRpFJeS5iyCpjVtstEwTNyQu5ZEcba69Bivwto8vPajMo",
  "key15": "4MboUhZzMiihd7jLcmatB96S4cD7KpQ1EggzCvbunYG61WJMnhs52A4oCSKAvtMUwNUWuZTBuD7FKMrEuJMbKp7r",
  "key16": "32JbkiDUAmDryN5bacLHgG85SHWdgpRspo32q5d6kSDK4FRbiBMTwRDYVfHKZfyPGsxVZmAB61ywp6UCRaFiwrCS",
  "key17": "4esjmu3fqps6urbzoLrqRNkmwh5PrivNi3BwKhtN4A5taG3qEox4T5pFoFBUHeAK28hxk3fBzmzBy6LMeCUv58Cp",
  "key18": "2iHCRwNPY62zchSWasqACC9zjw1q9LQmFE51VtVYeXYouc7BzFhzXxPDf73ZxoTKWCSRb7gbNknbcbYCf5wKJfp8",
  "key19": "EPovo9vdzUd3s9NkMgoeCRTGc1QF6JBqJxcrQRqJh3kQfnNxAbUkydMKppuZtqqD8myMykBA8gimRgQdAzz3feo",
  "key20": "4CfoWo1R7zjexfqFYMHe3UxBnmRHkUBTPV3KUReTxqVe7CnRid7ZDiwAnHsUr7EFtFV39dkco21c5XR6Tf1TSuQf",
  "key21": "479Pj3zCRe9ZMgGdTfsgmnZNLRYV4SnVPZGCxbNagX2PfdFGC7yTaqogUdebRd8Y2pzXdtH42CAkDH9aMfZvUZht",
  "key22": "5289176rE1kgCovSJ34eD1fxmc28GAm19ru9mmsTgMxAGUJTZeBd951HJPZMKubh5tTwvVS6HqCAnFCqBvX16t1y",
  "key23": "23hSCFYYR3L8gnKN2HKNdhkioherDhVWyoTK86JoMoVbxD9ncVzcMjCSAcQyN72DL7qmkFYuG371xeYEEsxVBYCe",
  "key24": "5bgaZsvXD7Bkjw3bWSfK95xVWXNrvfc19FZJW6ZGYSMH3vK86H7wAtYVJ7jSag6XNL5Ng9UQQGW38y2KUyu8f5RD",
  "key25": "3wkAxrTff45m5m9D4JsodcqMACPiPR18hhP13dW9uhcRh8DNTzK3bJVXEWHpZAv7TeWEkhyGGYbGebYe8Eh3uP5M",
  "key26": "3XKLE9wZQtS45wQorxoxowgMcfmRZpVLC3uUbicv6EdgZuW8mdXFEADoTw33cj3GVd2VHcb9UMm1fsZc2BciqDfL",
  "key27": "3TiHVXaffRcZqhM3jnbgGvon6gktpVWP4XSRHFuvXNzBZHSKW8PztZ8nbXx4MwW1fLJzhCqxsLdgv6y9y2gQTBpT",
  "key28": "5iD1xheMBTgXGxPK9jHr6syVFTa3QJMzWaNvp2qU32E6ECsf6rkHjJgxhPt38944KhUYxoHQ2DzYPskqDYYQrUoh",
  "key29": "2LmMMHW1bZbZqbyhs19YU24cCf4zo7WjJVgZxpLv2MkoCUdF8Pj95am1AjhxgCGdHW2NbKbeJVm1qNvxD45qvNXB",
  "key30": "5XrVUQs5EtZdTKy2pMgSyGVu6Q6x8hjFy62TDuEDidVtJxxePdC2BMFLnW66DMMn98tzYqWDnRSER3S2uzqickbK",
  "key31": "1HmoTSqcSR4HshBiSx5W7JuaqrzDQf9oSdUBzA8T9d58LWvg3KJAwqq7JpuCA6MtGhWXWtUjNNNuPAp7szyqLsn",
  "key32": "54QcDjAEnEbSa54HccLMmxBqQXaVydgitEPHB6NFAWVsUZArPpcqP2BjqNmrRDwEV9YxnRXc424oC6KSYTw1nhVu",
  "key33": "5TBKdxZcUWV38ZK96i1u54YdM32kkrkM3JJDBFC8gGtEx91tgpKqKKVXUt7qGhy7hFryikqFfHRcb6CUWr7K5NYx",
  "key34": "5xrxAufmSe22rtLNNjgAWCCPTE2jDMsMCL6ALfXYeMpEZsfXRAajZq4ZacbnCSbd2m34ucbAAiJNdo7NpyiSoY67",
  "key35": "2dtSwZP3JeN2WUXAo7b3PYZE1gDmwe3sUx81HyGLwWzcndSgRfxpo7mkLAUPG2App7ysit4PD5PmyPEot1RfAWeD",
  "key36": "3cW4Yv4SarBGXV48CbrReZYF6wKS2bbznN3QbEWFW7fcviJtcqR6uWQNHw6F9DqJo7QuJr3q6i1rLwbpbDJtvwdw",
  "key37": "2wxxnpQn5eqcL9wnT8snk4feKW78SRFv2iGFasYkyMXAbhJgC3tt3SxJ8ymgvos1E7rvsQBUteBkBP9Yefh77VmL",
  "key38": "oWSEyTqajmAb9UHE4WtaGUS9AubXpseXVssjbp9A5JY2o26r1CswTv8pobKM1oqn46xskKvi6mwZLp5wab1hYsh",
  "key39": "5NzSpEoYihk8hLb8wAaXzt7GCpbuNHA8sVoVGqY1miQp6MisymnY5nXA3shQ2rrYhyjdbumPqWMGgcPm2M8bhXt7",
  "key40": "25oCXQFuxosb7eVKSxVnUeossBpomobN29QrbmaUh12J6ABLYyAK6Apw4skYJzesn8riACyMXYEjD34PFFXs6gJs",
  "key41": "2jJfXEX9tyrKUd3So2RWmsnFFaZrNekwNDAvmvYVUv2qc8XMbHuXAn9g14UNEccy4JjpLFwXnRBjEgwxznCbAGLE",
  "key42": "2VcXf99SdzKVxf6NRwYW5tLeMVSkwVQvA5NXM9ozQeupoukJDeGHkmDFsEtwJGLDsDVHLBH8JBPsDGBQp5HaaVHc",
  "key43": "2wdQCaXAg9kFkrd8YjN98MZyCvaPtzywKGJ4PgEMJUZ8hZiPmWN76fFP1nXYW4kLTrzi6w5dUn5jx6k7nxuTLJiV"
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
