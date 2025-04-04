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
    "3xRJ6HEh3Y2Lf5fMaqLi4bJW19s7Dtbq6AU3T15DENfFfqR4BjJ8JrZjK1zRRM7hHk8jYUoB9Mfa1FXyjoPCgFXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6eBpahTzzGKK6r9rzPREFDdzQ6LQVd7myHqHTcp1fytXEbiTbqoHtd3HNRiWqgdYaoKyvL6x3nFaEujyRELAQB",
  "key1": "pbFX8VyQHGydGGagAqLx3N1jTfiwp64YwBuULxFdNfk2687yhSD8PfDjHRuZyeNGtfVzgCMyoLcSGDQJ3rEG36N",
  "key2": "5aZX2WSUEJsYDdqU5PQGukTDgzyBkwJV2YMKEEh7aj59yRvrbgtknhmuZSPNUUFBsEuNFdLjfgjiMhugsWqhgMMP",
  "key3": "1m8EYjXzgEFvbm3GQUFCGT4hNuqixxDuSdVZDSV7tWBb9BVVLPieiWtqppN6kwbJH2Gdem3SUu5DyvwDMkYTy4v",
  "key4": "3DsdBLQYZwh3ijzddt8qi1nqZb7YhFKQy79SrQzr4bGXjYELEq2G7thxXDyseQToCZ8KRz3xgaN41L1MYNiE2ocj",
  "key5": "5JKoPYSq12vT37mbCsE3y2ktL9UAznUbsp6XevdA8MMHg49R1FFGJScUMHSjdFgeCH9vYRwy4r6AGVkBNNSno8PB",
  "key6": "2Q237qEv7qRv3E1bjfUQdjagFKa6EQBci1WrdKzpQoAx5Gn2rTQNrRVxPYAdHWLLQpeok1imF16yW5adrfUujEme",
  "key7": "3wqwsjPHTgYwhJQJsKfZpwqyXjAWbmHjPR41dtwE73EkLYKtjJ5hnLFdiFMgaWLfRVmZuyPYts9TEWoSVgawJAEv",
  "key8": "3RaZgUFrEoCdLAk83uZNjS8czwNt2L77mfwD7nd4Gsf2Da74fP8uTbZbUDP5v3TYqrdicf4XDMDLfnMt65wWerK",
  "key9": "4gRx97soSbaDEP5vuVsBrwLHGjXK5XGiN5qHupfwo8bNScRnuDhSSjPpJAMTiyPCV78zE6NqZhvQ98nsgbg7Erd9",
  "key10": "3Qo2rL55he1KNdk6jhitrwwFYsX7STq1jXC2yVw3nzcEWNt4zZ3NFWoqKANC8aiy4g6Kyd5MkXh95d6phuBhotXg",
  "key11": "39feTR3LXGafuggVWZHtcuNJuvbeT9Ne6VKX3KNzNnhTpcNtLnHNdwSSQHG4ks8yCpFXT3QLJiZzQ7jzpUXdqs8T",
  "key12": "5uNNLvZF6e6PdTsWqyE43MdgCuUNiUKZK211U5CnFq6Ram1ModSVxDTasDYscVtpVkmn4JCHj4xEuHYTXV25jLmQ",
  "key13": "4DAMoxmQf8MfwZCYLpefpBTJp4EkuGKovAzC7NxQFYkmzdRRm7oP7QHPZCBBwp83euLT7E7aWiscRfMvqWXE4Lhf",
  "key14": "5bGYtofNUzXemQorw1gh7EuzLRJRFMeLVGv6fefeJkc6qGnEC7sS6cov25sYz2eWRwEuyi4nwKRiXCY774hT2ETC",
  "key15": "2Xsjciczu9FZmqtYdqTskBzMc2Guwtg1TnZL5qBnxkPamcCksjwbHmn7t9gDgwsYHBmiPxsnsxo3PfMDtQW9a9sR",
  "key16": "24Yo29buG9q6NMwVePdqSmSdaLkGMxuvVZ4S91VqWKAddD4iL7jNZB2bZ8oR1tCUqBSkiWofcugfvcgRrh442hmT",
  "key17": "3TejRBNdb7FoVkCS3ivE9vTDsevYEEQk8EFZbckT5hQ1XS5KXbbQseTvBkjnbBNzGVNyeLYguabjoVXTzuB1BBhW",
  "key18": "5tq3vDcv26bwCBTFEr5CMNxUk6hFYA1hqh5ry8UUhvsDEmB96SGrzkr6nUWGyjRG7w8yTSXMFosSfwqUTVzm8j96",
  "key19": "4ph8pSaXPoH5j4QLc2pPNqwn1ohJXE3jLMXALSBfqAsj8Uey9CJaQPBhpqpi1jv2RWpdM8CbeLMcjGrRF1pgUAGJ",
  "key20": "213pbQ5iwCuCbXhmh9XRSugmvJJSKvFbt15JgTCgJ4jCxvJ8aHKXWNG1qefERdGArzTkMEajMEcDM61KSpes8vwV",
  "key21": "2upP4zWurHeZM8dDDQmEN67URMJNJ1eGY8GwiNZm8jHUm6ZpCQ9RKVUFhyk1dwGgyaMuvmSv4kibehGf3E7j77wP",
  "key22": "3zzqCYVhC8jmduFJaRiFapxACoy7bBMAh8DTAvi7ENV359cqyZTHsm8NULkYUABkmQt2fn4uSA2dSEC1vFkwfrvv",
  "key23": "YVKPqJJSuzNwKLytzxmGQet3k5pjurqnpXnQfWf78dTCwPkcSASpwUUrMUnRjou5NHEm6QVbB9k2Dz1tdnmLaVW",
  "key24": "SWtynPTbbMW7RCx9LM5cvMzmfapE6tKNVVaY4bQ2nCUKosv5AYdR7hvgzTknHotVXJ3wrpMzg17jfF9kPsoFnqb",
  "key25": "U7keVQiWCxGwPHesqPFQoCnrGvVe2TyTmi64YHK4sgLRZ7wUS9mEa12ymqJzcKoFdWnV9zSotUXrV8b9Yf1wWsX",
  "key26": "3jc21toW5AsNo1Jo5TcgEzBDGDaVE2aWb3YTyjHL4kNqkrisfYFeh1hzmFYTpHH64XY8xqYHsDETas3HVk6N2Pcq",
  "key27": "tmSPDuNUqXheDxyq4F7577xjBnvcYEdyktDJPKztNEv95nGgnP8LkZUCo6KFFqx63upLZ3xU3oCh8AD3nH3GbdX",
  "key28": "5koYuTySzGYVbMPx7yAAdTDgMCpCJrFjhsoR9MgB73bd32i6Vhh17qQ8oSTcBV1UYSRT8DVCyiPxeEY3QnvKhpJF",
  "key29": "2EiG5mkeFAQtEZKB27r2sFBZa56JjHKzxT2oCBR5UqqULvLfroj1F2Uqr89tZjpp6fjuQSbv4qAKbg8tzy1M3rnu",
  "key30": "5XTsz3tqv7LcRxGGTZBCcuHrE76agf3VUjdyfZTN6oQjANqWdqJzxijDPELL1QimUrQrb2VWPLFhnWnWqMAq6Fdq",
  "key31": "LaM7ptcSFWPxBgBg8XMXNnT42smQELMTPvbRL8BgNv8zfYTAHKXMSuafY5n4NMsHTErrfQ4DDHbFT5f4k6GExCT",
  "key32": "DxhapkLCxMgbBgyQEB5suHMyghD7Wf5jkskYq3aB49EnRgCro2hU6bJ8fbZozDDQad9nYRz4vKbDpBKxFh1rrJx",
  "key33": "4Bmjv4zJwufgVPpv2CY8YC69wwbb9oTp4wXiM8gNbvyeE1bR8CJETNemhRJ55hP6gSn3vWQEq35xnSuq7U8fhzDP",
  "key34": "YkHnXwY3opGMHUofrKAyd1fEi6BfaRQ4sQJkZuY2yVzBa8V1iBAGYnGPurJ537FsVAzDHxybvCd2dDw6pDfYsRr",
  "key35": "rK1VhnhstHZXcbVLLWWYwLikxknWW6sDg8DLxT13YyiDuCGdsQEyQD1YW1PUt2tTDSWyBgaFuppYHXR83i4xWbz",
  "key36": "545Q2ArHjnktxmeD2Z9Xi7gSULpq57WTKQygrS7JBUznAS7aFVf8xbzunNrttKTNMAj12PcAdhLTfZEN2g3BqA1E",
  "key37": "acheT5AGbnJrKRdK8rDmFJEHC9w3uoyeS84QCjVw7CKNHZ8wrAvzzakwDwwHLp6hHmYuiqNYGRKQDmuAnpxghmy",
  "key38": "2gtjWHE5VpxDG98qcnfcdW2AK6zEkqVn6fgHeM19yrVccBtBnTt7sANpNgLdERViSGiYyXsvPsdNR2NrA1VdWBze",
  "key39": "4fF5n8zzMXosuvA2zpELYDozvstYAqzPRujBDmku75dKTGmC6fs3ze5w9vyYResAQ7wf25okXCcDSMmUN6Xtiq23",
  "key40": "3sU8aNGTMYokrfubrqny9htmQkHM9Tu44myfPRkY8r9hQSS4MQ9Jrtr57jrv9ymgwgLWYZhjK6c88xYfULAqHbYT",
  "key41": "5Aq2WeKhLHpqdzdHhhPt8KXMovWnvfBkDjjh9qodCHSbrrAbtsWiY5W4swPD1XMWxid5W74bAz5CSNXXkT1imza9",
  "key42": "47JBqwkuT3T3EzjyLGCKruvr2Wj4j39yDwmBXJTzXwcHMFLk2PsJrcrBMGFY9qdRiJPC9c8hFTouPPrtcUiHeL5f",
  "key43": "4Qi8S5f7LAYHczz5Fz6phT3JkARXJFsmcrPpPrrULQ43MSoYRamEToMX2MQKftWpQ2gB4dvRuSxASmnxPJmXLMPZ",
  "key44": "4zJ7Txf6ZpxX6FCUtHD8iVB1NiMkhFkdec1NUNuJZWB5ezWVdEQiqp3yXLUVqNn7vsmMpVNPYpWKkNb2Vu1cgmrj",
  "key45": "2WRQ192RUhMxYkdU8xXamwRnGUHCdgLWDvc78zUodhN1H9XAHnoNpPPQ7Sm6ymHT3cVb9fNp2SeYhjXCK3YqLBBU",
  "key46": "4WBsPj7ZC7LRUBPyodAvTLcmRYb2tiU7tYVAwevRFsPGJu1UCsDFn9ZZLQdkiqu9vTzKuo2u8W3FC4B6xZMsWbMr",
  "key47": "3M937TtC16wWhEuGsBiZ5BW4igDvLLBeeSWR2GqfujNW2s8jD8P3S13fgHGTb2n7hCFQGTV73dQKSkMXBXf6Gani",
  "key48": "2nQPA6fdcs9NjF492uCjuw6AJyzjER9GYsULxsRuyLme6mkK9mVrabzJPkitDZ8tsS61871Lpnyh5Z2G2j8btHG8",
  "key49": "3BZMW7oEvhQoqZVhZtxw6rykW4Wxiqs6d9QVGE6Dqvt2QP9Jgnq11wrCXYMYBtpB6XZqrjTVzHLeyfehiddrBQe7"
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
