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
    "2GbvXqKh4SBuK5bsHbY9RM7iMshwJFxpzaTEd2oVeGWsE6FnTRcvQGmQr8qBiMhH4oVoZ718nHp2zqi7ZniTpBjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2embCykNg6YQo9M79WWdB58gm6YSV1Rz87kiozsNeWK9W7t5YLGAerCGMUhhja6wm8zDLd9WHyTGE9yVTbDNrKyY",
  "key1": "yxuvA8QcKaddr74vKRSJVvrux3zv8Wpgbk7Z8QekBeBrcHoLu22Rd44MbjBEmmYdKguhJna2zP2AzKkGE3HeXRk",
  "key2": "5jv51ru4VHA2UBcYEeVJppWP14ZcWyyRq1DG2PFDUWn8LvWbuvDwohEm8GbywDYQD8m6ktnS7ngQnmCb5riXPXAd",
  "key3": "2nwW6oZo6DrEKT1Ni1TabuDGtFhxF6dF1Rfv2asDJcZFsUbs5rGdLSgrJfapHjcN1wMzRGnAGSHG24a8iebKZ4oS",
  "key4": "XYY2H1fHNfPtbrsBwrWe3ihsLUuQ4KD8EjERzmacUYypeXMTkCbuciENqbFGcVp6imTR3vBxThFBSwPwihqP5k3",
  "key5": "2Y2PpwjrrMCc7GtPBkhsx2piczhb6tgSS8LLnrwETzKxjK4CsFzvP1oe8XKHy5k1k8a5ggdf1m4t5ZLrw8ujafrD",
  "key6": "4ur2PU97HNDgdqC45RvR2am8Mo1hemb2P3XXWWMp7WHp1cwhf2a1RVdthPkq5sBmTxH2A2T7cDSuwQGGFUdgEbh6",
  "key7": "2fwekWYbqiMU8KTkM6uMA65Tgrw9UToDEcL8bAeD5ACvev8UPjtmjmAiHB7cYFqP28RhP6tjHkpJEqtoKXK5AAQ3",
  "key8": "2kXcfEjbAKLryQPx7EBgCzKEVSqC75SYkbWCcrHPHmuyjzHFNR2dQEFyLHQxg4XryxW3n4qSNGr6mvt4sJUSjfA7",
  "key9": "2KXbQfa4x3abKTqPGLXXvBP8am34bmMG9z427vsvCrwco1sFwgsRpjqyZrPprCnMVWdkW3YK2RYArBiDjBJUVPDs",
  "key10": "2iiGpsdTSNffw7L7Y1AKwQqXzdBMx6vbME9ydT6y4FcdKyDywVhSP5uDGVxbN9Q3XTGTU7vbVBLSj7dBPastC488",
  "key11": "2UpZgKF2ztAdNnh5iPajqB7JZqgYuUXGRoJuo7cAnt6P66bsD8DPjP1kgGrZ5TLw2TA1FV7X79PwuXFguzjWJq48",
  "key12": "39P6je6NTPczC2vRTt2cpFSya1UBk4GSfi4A3QrXVyxPyMx7zjtTbNaKZ6M3nLwHfcepFZH85u8BMEtTN2G3MSUz",
  "key13": "3fz1aDw92UFn3fdsSNnBgo4TYXPKfkzmZKsUZXAZZCd37MJYDucTFnBFvQFn7PkJXvN51PyJWKomEoCWU6V7qCvP",
  "key14": "5N8YqAgRgp1qN6xoz8aNkuh7ezfn49bAnbq11GEFnPfww14X9aKFCo8hqqMNxsrTBKzgoZd6SLWB5kKvuTC3gYpA",
  "key15": "5q8ENp68iQwKn8z76J6zrEz8EVefLhdWmzq5SLwCxEzzSiNTN47ZfW2v6TvHEwyFDSBiVXVJyXoT6yLGiWE8bWN8",
  "key16": "4cKMPnYEpcBecXJp9gZzkdWyAGTWn3hMdLPCT4H4ancKKPmuTSk6ND5FaH89UiFdW7rjEQ1WL52MGaHehHzLqU6C",
  "key17": "3iQ9mub1EJXatTHkRHbVWY64bitLVQYGEuGdLFb39y6JHysUryLjY6AbxScgxNYaQR9DLgaMfA38BR7LnMxzRsmS",
  "key18": "5PwsZQyaEaVt3wYcB2X59QZVDY2KQe9rQzYkRAgTJMf3U6Ug8oVNpaCEpC2Pjur3ihmDszR5PNDrcCjXNctgUKvS",
  "key19": "5k57UEXDuXu9ihAhedqLJUJPZXt7betCUCHyBGYWFnCbqgxKVcYoSTUgHhptprNHqiEaddshtvca4QfeqYDEZidH",
  "key20": "3dVZptjH9JJwcryTzAAZdZTvrqmnCeEfM5RwjUZt6ZJpR9aQeMVJ19VtsjPNjDpALXanRYrPbqS8VLUsyHYTRYxp",
  "key21": "57TBv3vZV3WaAMog4PCFVupfD1N1soV26BaPYR7FNJqpb1xubyE1mXfvoKxenuAkFsA4LWR5o26gcSz6xWRQMtJF",
  "key22": "34oWF2odYoVGXW3nx3QZqe9gkEKz5q7NZv1i3uiKoLNi8wPzHrXjtjjNamBz9rhCugw9rh7FwZgt7pwdyGm1tzUA",
  "key23": "58guJELJN6KSR5gBdE16yFzR8o6pU9FrrLqYzpjqJiKgjNYJiXeHaeFbn8PeM5hzSFDN9BF5Y9w9tBepPf9SB6aA",
  "key24": "AMhyRhgQmEVpt85GZ9YbjpLyt7rLh48NsWrMtc1KpHNmuugWuAbkdQcs2ky61qxPLG2o2VKRbdxMETBRbwuMqaY",
  "key25": "HHnQxsbmLCx8cTKPykWbAF2K9EyRna6woRWigQpV3WWHsEGRCheYNQsiieZvifP7Bog1TmVj4rfKrFZq7c23QEx",
  "key26": "38DtmZWHYKVuQWRkgHexzU7ftJ6PTXLabr7BfU6sfZB6rR5FHmQYYrB1qi8QuNkQQmEeLGjq7YnB4DAUVoeBqBPA",
  "key27": "nBQqxuz2ZVaKbEGiXfouosSLPesQEAfxgLcjGgFMpSqLuFfbe47zNRAiLLa4bvzsAxt2PjJAvEL5Qk7AAbroFya",
  "key28": "2rmoQADzs4VrHMJjscoCUELiWp5x5iDvGVryKCiTH3gXXKSp1mGrNLWSmYRxBhobexkftRz3BQPMNM6gpY9R3n9S",
  "key29": "25AcydjxWk3dssS1XDEXGoF7pSeniiFv68KCRoYh3ukGkSRY6T2V6HriALGLW8LEWUXNd9BK23cpTUizdNuw8Agu",
  "key30": "5cpMrjniMRg2XC3MB8UCcRxCRBGmEQjaAAzw5MuWAXKZBVtP6Tz8vypmUcGcqkyhjAqqCHcddNm6u5Xr3vwRGxov",
  "key31": "LyYXvFDpeMa7ghKuPVPyutfXabUNw2rSub6JgcoucHWiiT7eFge6XTxK6M2yLVVbPGEjx5esSTV5Nj5ohasz9HF",
  "key32": "46yc1N5ATbYu2LJV3J26MBjBgSQad77QYShKaziavN1CENaKzbt1rRrmnoh4RPXRtjXN5uHsfX3heSoF87CC63eP",
  "key33": "4QtDkNmTrSpXcdy4V9QBSpyvpB6885Kkz4dHesGnmqghNrm8jMajVRRpNHYJdX68ktUGnWvhP9yxFp4Getyw1H1N",
  "key34": "TVm8GdffQaBuRbeR2Xft39wbnfVwfBXB8aLiZdYiNcvrPDbTEJKGotFtzMmdaLsN5qBVG4Ysctwvwc1pgheaBpE",
  "key35": "4bbQ35akprJzWNqa45zPca72k6hZKUy7KcGCW4rYDbiJoM4QupGWUsTLReU9gCLzyNVMjqYCMYEuyF4H6gsDvFwf",
  "key36": "3S7UkisTSNYnZahU6E7CeXPYxBNXLiaLXnoWH99pkJ5CTLv95LNFJxy18vBmQ9NMVqJFPStHesBHdquVY3dxLGRn",
  "key37": "4aLczENg49izYnRxEweBgPhTDyD32qb7JVN6hmiRRcmQUvzwtEpb8NobPTo77AuC52KeUxzVaJnbcPt1fyA5oreE"
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
