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
    "HceuuypPrLuWcPnaxwUk8aqYvbAS5kULFRqFnXSsZ6RbD5JDATe9hEcEynzGS528wfrNeUEyhAMZoyi66eaayUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpiaCpgD8NGK4ntdqgkYmRJ92mttJxPoc4iyte6TRRZ987i6FgeTX7XdWGJsxQpke1YM9WQ3wxxvbZqgp2ZRcPq",
  "key1": "2Qw9TXJSFDeJxuptTfrVEe4552hQQBEW3JUKLJYab8XMsuzn2rXgNLFwqk9N1VZJpMuUsKh5hWntDxaGWoJ453xz",
  "key2": "5CBB13r7pkJ5zTbLCcXC3Chp5FpdBaMhGu5wXLd6UJjdWpoM7pG15wfUs4YRvWWFL4BGboVz4izzpSjoKz4842Xt",
  "key3": "2Qca6PfFbDWPvTuNaMRQWi6gngribq1HGxCRNRZcLHTFEF4AHg6wGtc5bvEeeDFfARh6y4juWFxEGBZch6nqDi4N",
  "key4": "5HpEoJ1tjXPQ8Pp2W4MRLP1Ax1jm1MhpwkFWtNm4ta8ezWS19xzhbofLnDxqgBDfQE2Z6nTcFKt7js4LGQWMaHbj",
  "key5": "3zj6kGrmYggdnKLy96jcLhrV7kr8899nipePYWzX62k2j9m7z4pMUnE2GirK6iPR4mQz3ztjQq2YWavWocRYPaif",
  "key6": "HiD7SME1fJtVbmjYp2G1CsAZnab2ACzU38yaVFNUEvn9t5SZTNuzk5a9TxkXmQQzVBtrkQeYtdkSzoi7ouq3SdV",
  "key7": "4Fjf4Bqt4e7N6p37qsmK4jYU4CqKNTuhNStrseYcSoB4A3xsc6NvRSAMJdhCCfTpJUeVeyVMD6VkBd4arMU3VBAE",
  "key8": "3e5YqiciyYnZJbV1Y5xL6Ng5BPoH4re2DtuUJrcXKuonzuNyjSMEMFCoS5KCd743xBYYrNFa8j5SsHjNobM6UgRb",
  "key9": "2FKQPf2WYrcxb2Ym8jjpnAnPPMzdyP7QMET8Ku1Fs9LNXousEjQaQ3NfFZVGpndRYficGR52UEXVVdogVrzBBVa6",
  "key10": "3p5zMw6ChKoFRNjuYAXaJa1Mv13Bv5ohn2nHmGHnE8pHhXFfCPaTvBP5RujsvnkTy49xi8gFsnhVf3WkEsYoECpt",
  "key11": "3w2figbZs2AS6WZpmHCypDnci2ppDgQ3mjAgWLXCyY1PZ1LFZgsy7e51rMQdhkyzuokgeZwKgEVDQhPKPiXXzXvS",
  "key12": "2eD1tUvLwP5aNvVBgA4ck4P8UnXpobASE8XYdPBkumWwA3qk8ckjU5bbEQCWn8zFLsmoepuzXHLgSRzVMAS7Lyfq",
  "key13": "4SmLWCkpMUzGpCbPWLX2WdYA4bpXCvjRz52BWtmkojzBNWbQmi3UCxUc5vekhHDdFrYVFDptwegf7USVdKLyRkpw",
  "key14": "2AnaFicb5XuuqotCBzpfduTBDXJ7Rtq3i1fTGvxjGZPhE4Jy2eMEuqQmMFTVgHGbSekrWMTkFSgGgXNrCrtd6Bok",
  "key15": "Qj5FvkuWQP3f9ze2HphtZ9ksHWVTSFbmRQrfmEGFWVyk2UXs1GuJfUsyvwrv7z526tk5vzAeYFJQEzRWqyzQkae",
  "key16": "5GeyQ4UT9qYDJuPXx1BCpKqzU7TvHuXsZBE4xHA8RSY9Tez31dVicwDMjHmTeqwuaKumgjW9nbjz7SBgQTd3JjNR",
  "key17": "2CBoikvY4uz1f8USicu1vFHeeWnNF58BDqnpQFG1cgm9gYwN4hAqDjg5konuERpT1z3KbjSthvBBHWPxg3hKRLLX",
  "key18": "3CxjTpsMxSQNKg77xUykbSCzS8PFTFVQAwu5XM8qhUvbeLsuBRZxmzmXQuXpL839twSmHmezF3niH4qmm4Wyhpw8",
  "key19": "8vi4yMuUFUzuWChm1XyaqcR8g9sEGF3JuZrzxKQEETwpeYTQm2bPwyxZXUWUA9eAbw5bQ58b6dBoaoaqgtaNXGm",
  "key20": "QTjrTw73mUKd5o2RGgh53jj4EvT4YafFFYTLUNEUDDxFt7kJMbtWVz9zVm8YoBzHePkNbM4u6AC1L9oTGwrW2N8",
  "key21": "37qGKcyQVNcwA6mbwxwXgz2tMjkriRRS4xqBxwPnemUtoFaaAGSv77apoPNgvbkoBD4sg7S6aaJjbtXCPspefE28",
  "key22": "41YcAKdv8V3mAPPmux9yFj6UH8zmPoqjHeQAHsnXc97F8zJDNWGVGN7fTYWJiyihHrWQp7DtYg3vKNMegkETTs6",
  "key23": "3VbQaKsSY72wcgVVhfMuJSvr2YsW7a41x8VADukUAoffx4pyrctEUidbcs2Cnun1GN64WyGydvc6ww7jgM5zhRaJ",
  "key24": "5BDu6Rf4G75AtzmYbQjwVgrck1Ph3pG3ta2Gtgppk28mwyx16NUA5oKJQwBBGJ3gs6NsDNBDnEnjQZBPUGZt5UN5",
  "key25": "ntrcnRZnGyv9JLKqruvb8n1K77KmPV34wtWdaHgXu9BKSUeyoXB4zRxQSzgdciWcrduYpiJQKoKXEyp6eVqHoyZ",
  "key26": "2gaNAfnqUZBRezrUsYkbpmZMEx3TtiUPradUUE8w4LJye7S1fd2MfFhXrbbmsNvujH1yZawF28VkizTjTdywXZeH",
  "key27": "3Dh5nNGxaN2SvBZTgqo2FK8HscgMKBkuNQRTCTgVBnwRpZqWwTksSw14sZXqyXuiGyJqgGVwEbSsTWHRm7jkjm8z",
  "key28": "WeXfQt2k73JREH7jYewA3NXGSwDw2Xr4wa6mgBJcwrQxCZMt8QKuj124xe1Eb9N3mEodUjwrWfZmETZT6YDPSnL",
  "key29": "5cjgUYgpxKPPKry36QWE8qXQHFWJudVBG9Ez5dW8HoJfWs777fAn4X9Kek2ozvAva3BECCWG7VBVrKdR6gU8B8xb",
  "key30": "4nfJoV29FqgWspS7tbqX9EKvXQqvuSuv3Jkn1wBZzdWTLoj3XapPGz5RsFFq74LuonAAFqycn6NUWugPEoPN8KYa",
  "key31": "4wEUMi4YjYkJJJSK5XwqzHpqkvYU8kseRi51sQ1Au3aLME69yk9xWh369isF6L3HYsJoVVyX5Ype291MT4m13dMV",
  "key32": "4tQLNhBHY52vAyHpsAXxnGAXuqXBLCGVbYH6ycXUYW9EZMcqykQStzDkXtJuo8B6xsAf56WVbCpjPt5STv6viqGo",
  "key33": "2VdsykhJ7b4BepnPTxDPzAVuNVCFojZXcsJd3ChhWJwR7Sk2Z3Aqhg9WBgRLo2YMXu5nbaGa53wGtdCTQjFxVtQm",
  "key34": "49sLkd3KfM2rbVLcErrzS9xUQ6E3jVvw9uZiqfEKVg99h8Vj9YG8an8n8n1vgfZb8b5B7YjPrDu7ke1WAZHRePot",
  "key35": "szskCEZiBvixoRsq5yGihfnq8by12KYDfoABU4nwphnB7x6Lcp4bLrhErwoQ79owUHaqzCnqCRCo4z9zZcv9A19",
  "key36": "4DZAXrpULj1pzcb7PZFDBAvWcFskfTph6dR1EQfKbQVLsyyDDGLvM1GevSMDdRWoVzLYYfmKMGE8CDAgBjfytTBM",
  "key37": "dnwAkrjksxfck1mx1MgxkpcDgKTz8jrSgE1j6LoVfoFndoDy2WCw8k4ZDsJWJ2r29TxAYGpDdpoXJfTZWCk8sNQ",
  "key38": "5hNimAUCW2MCqbshDeAvAv1J5BPfD1GrZiMMA6Y1znXtaREqjCDSyuiLvsQEheMvQ9CYD3m7GXNffLLCFaMaSva2",
  "key39": "2xuNogHdGAchT1SMoB7KYiauF7RQx9hkRckDTGWL3zwSEqzvTxqQtYsgrVaWxRxQa92UsjVpnq2xJifJEaS23M9w",
  "key40": "5B43qk9vu3M415QEhoqdCrBV1UB2QGhHuxt9mYv8a1zCEGrS711gRR32YDwwFQ4cCwD6jCyVHrXUiCYK4j22sqs7",
  "key41": "sxLZKAMHqATgUQNaVfNvLTche8WxiJK3ZHdaG1icgvWJzg4AyM3yga8ayemXSbJL8Eg3H2LFdh3pfaw9jvsh5uf",
  "key42": "3Bv4XF9CtwENK8HcBmZpkc1JsuXW2f3xC241Zhs6UjLJn7MDLDNodqhgmDTJqPAvVWBLJd3ox5CcjXhpBfB1CiuR",
  "key43": "2J7SJxgmNBYuBSoV11kMVfSZv37oL6LD6C2ZtQHyx7XjxHQVHrEpbSArEbG92xSFduw8AonwzxGRBiFXBn73fvDL",
  "key44": "4JsC2Wjo8Bn3KN5rVKZV92yjVcvrcQ2DoUqEw4Vok8WUUejm6Zcg4RLn1N5Y9gsUEigaELC5MG8cqE3N9LtudyKg",
  "key45": "5FkaRZn14uQngQ6V8zXbNPhjohWrRrxE8VvqDziTAiu7wJbEMDgT2ETDdrZfybMcADQZS6mWiLkbNK6R78LRwt1m",
  "key46": "9MtgJSC9ziwrfZJETZYev7kapRpuy3uZpaUSrPSmcCY6B6mYX58epmG6eN2QNPgzK9Fc6iU3qiEpEqfZRVgAxrN",
  "key47": "2pNoWN6GQxKoancha6XKPSFeFQkp5qPtLPovuZ5WPiAXo9C8WuBZnF9H4r6oUsVBUJ2oHmkNMVYbvcJ7c9kzwhmP",
  "key48": "4T29s2ZRdugfYDsqJ87NJysJ76JkypChkvmeMMsmjLGXqGeNjB4MEAdy4i2yDokFzRxARZKsvZRM53CpiBzD5yr2",
  "key49": "641QzL1J1B8kRcNwSef74Y4UVyBHgwgcWNFcULzP6zcHuFUDdB54piTpM7qtb3C3kvtsmCcg6ZK58SSGBuSsrQKA"
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
