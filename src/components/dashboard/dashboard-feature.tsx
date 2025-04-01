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
    "2Stz5o79Nk7zHWigvMrp4djAEFbH5yNovgWp6pWanCZQW16y5xaCyjnRmeiREP5puiqvJHVzq8patjtBjXKVygoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msQY2kDtFuy7iDb8zA451xhE1k5JWRath5y9fUw1D4Xw1voyztmFc5ZkLpvr8m1RjeWAQ9Fjg3jEt3WAvvdP6yo",
  "key1": "5YMkHG1wbHzepbb7Bdt4mWH9ZbMHd3Dg82R5uRgfQev4EKk9tDo1pWAn5UMfEZFnRGwokbDP8F6XaCCGRMfdCkF1",
  "key2": "3mkH99dPzKvnSxFWdhUxY16V4N1zypRR55GxMhcqnNxdFwYLN9bGG5fDxJYXtPGXdSHWhxnhHWa1TFrwhZq7Xpmm",
  "key3": "28eDZpN7bZMMu6kmYzcQu1dgVQJHTahf65jDVgedJWq3arNgSuFVnsMchR6uzLqFYTgKRfLcGGi4BNfxykufqrqx",
  "key4": "3QyXDozf5MboihoNuWJmYonfMo6TXLqA5woYnEsrJyBLxUpETq5pgYYUAiKE9HHchEMCdUuVym44N8PCLcKdEhgP",
  "key5": "3mrgoUVteKw1mGzVJyYkX6V1sydBmYxMF6vmGta9kzhRYJYMTAGVjAH2NcWostyvmF5F7P6hCyGo5igWZFEDMZdo",
  "key6": "ANtSsbevUJ9NCVHQJW1HFWTeHp2WeFp26bzyKmPiANtJu7ZxyJX1H7cw2ypMXZ4UUtDdW51iyt4Fvs9NENmFnak",
  "key7": "2FtAjJ9DpPirAF7USnAqGeZKwggD2xnWJpTTNWC5cj3VqJWM3zVZaqaaCtGUEyXW4vSquB9vp7TJYNeBma9p52hD",
  "key8": "oGWkDQ2M4QWc74Hs4jEQiiU6GKdueem1ztMXVhYczXCvHbz2MnNpUgUnuWipmmrQCZeymGk9oLPHPomkFDxbcVV",
  "key9": "3wN7mH5F7NKsx1d8ttvQ8Aoc4io41PgEzL425KkBo6aBU8YXHhbmeJepiXMNqbLQrht4KmSy3Mb7GhYawRM9N4zc",
  "key10": "DrV29r1R8ThtnePQ6fxjM4Wc3uNr9e7UwRccJT63cmGnNacrQwHhuu5aWAnoJ7VjERYsQSEcsrzNfi9gHp2KyGU",
  "key11": "4UJBDdAXjSBHMH3iVxia2t8fLi23vWbWeANbrRFERnDqbbVATfXixpPZY4WtVM5Uxj9vH3pA2rTcKeSdMm5jByBj",
  "key12": "3dJMWrDJ75Y5JVvKNjnoj5oiLguGjdrRJVAZNYrfx14B6CvoMf4V54jaPdtn9VmFQy2wbDRbC7Wy2h7SUZhcVFJN",
  "key13": "M5YfWTUbn7ChpuF4va26Tdm9HmTrNCMa5TK9fcrewn2NAMubef8ts5dN2XHNAG3TyfY5RqxjH7qHd28wbFKBxAe",
  "key14": "skb1BdHt6w3yEYPHXJ8gSS8vt6xBqDi16ND41N2KqsiZFAVNYsCW1iDGxhmctHwGiSfMGrUTNboAD4dVpA8wikk",
  "key15": "63D1r9J1rGJx7zyVda8XuX9Ga4LhQVDgVsz1CzKB5dpxrMdmeKFPZ5eca4PZhtZpf5moghsY7QXNXFr21isRfoHq",
  "key16": "syw1a1o3nV9cUZbZMbeWd5ntDQCNS4jpDf7k3AXrbTLTYAiM5j5rMWKHVMAuTraVBgSCeDDXXSQMgKCBwz9nX2v",
  "key17": "4JBr1t9rGoBVWVDsFujig8ggi39jgTFunEtFuZmhkE1CfoaxRs6MnjXvmDDKxwTfNaPivCFXMSjBXqp4wbaWmuM9",
  "key18": "3sCrFytn6Njgae4RP5QmPQTukv3erWWR4dGzSfQre1DT99t1SJ1Eeu8rU7UJ2bcRmjmvqYUrLGDCMCXjukuc84CE",
  "key19": "9rcW1s1tf3AchFtMqmTbRY3PcJHmNvFTKEXVEr8MKWvK2VGLepn7sz4YztuVXQNfqoYmELKYJTrkJSWabSXqGjG",
  "key20": "3gZ435R9Ygo9iwYDmt3ucWfaJ6Bqyj9WvGbpGsig5ftH9uU3WBwoY5PuMxRzzKKrsCSD4yxMwv7G6XbfahQvxHkD",
  "key21": "2uyjEgMtJdBxhgTQFbA8qtUfLsbenoybk5pprhfrSKRFfd32CjSKiwqf7M9P1cW5u5zh7Jb9Fq2jHofpPKwPgntD",
  "key22": "2NuuiqCAMKK5xA56rotJNKbktGKMViFEPh2NaiiufouCsyrvUGRH46ra7Xo87LNP8Fv3qtjfNyBat15LTAe5TXtV",
  "key23": "3KhCX6byeEeUzwRGueW2WKRyJnnqz33KcPPySEcT6ZQWpF1ipsDPQYLPrKTQhNp9rRPdMQGzvoDvJi127PjiRUfj",
  "key24": "53sYKhz9vRcHk4MgBXphSD4W8ctdajFZw8o2pP8CBpeW7vYAyoM1FBdPwD5cNFDDKmZSH3XjLQAfG9Ek87ykYcZS",
  "key25": "3BExtmrpVUUEHjJFCkNRwgenJ9gnFctGNohrN7n6rssi4WMk31W7wLgvy2GrcqWwu7PFpKqH5YYR3Go2LJYvKkYL",
  "key26": "3xkGEmRqQ18WLocKTvTkJSj8xyMZVb7hKNuFpSUWY6dweV75nx112XktBF7HHq4hVTNwbjb5J8G67rXuFuytUZ4Y",
  "key27": "33LXvMydUCTAmAaMosxrpWHg8AUqsexFjFnYqzyFex5iQHDtLzpNQgmGvorWq9pd4H3m1dCZ3Sy7TfxANWGfStg3",
  "key28": "2TaWLqZ9UvFtWZoSuKfxn5i6wCjqiVCYLKoNUkQcHTqYFTtwGTy2xY2rTTdLMssgqt47okz7gPw6V9oQqMk947ZZ",
  "key29": "7tGVsuF6DVa3g19Frsnoc3bZWjzxuRCt2FGN2W6vfpJBRLfoF4ZjrFUJuTgkscRackmQyBDgSKPrzuiSxeYJsCw",
  "key30": "4Bp8vCDrR5xrpsHugRPWnrU4DfAqXCgbxpLbfpxoatZD5jm7YHKRGWkXGsTjWzDQNwzNuDXDHYpVT7vjzKe5iNTi",
  "key31": "2B8qZo6ku1ohsTFGRnWhge9zWtgaiT459A3AsfG2AQmvWhq2gBbZ7275Q8FKkdg5N3jDs59LwNBKSfUnEmGkTzEU",
  "key32": "3Lnkns3WGdtKoFKqihWuMNCw7ZQxAJx7X1gM1SP2H5mmXPuosD5QNbeWAzZyiZdqaP3UV2BL36aZGKdTh1EzvzgM",
  "key33": "3KNJNqvXsCqL2HSwkL5zPUQ2ea615KQLtzukCz2beQ54et4Dt9uozCwDQ3Dgeov1N7SqpHzchzAMmBKwnMhe6XHZ",
  "key34": "4oDmL9Zjaqka8tN9Nh9wr56eNTBGK8hbpWSnsE7LKKgQUNgmq6zE9CkKdBUxG1jXLtxKR4aP8pLcS2kQ8KFhZRBb",
  "key35": "2GQ9KDXVCzGmYWHPK5AMvTetijoCPT8PooSeQJfY92fMug4ziN8ofQ1vpTt2h2dXpppg8YRHwm5VT3ehfbrWayYD",
  "key36": "4rQNxJay5c9K6sgDeTX5KESjk5VcUFwueksuZMemnAQqfCFqAkAevYDEN57UHoNetdPQBX1v8Z6CLYPneda27vyE",
  "key37": "4YXfeax2bJisqtQhaM7Fyw5AjpC13n3N5wPpKi4ASpACq2Er4kcByqsgBkFrNdTukhc93CNeshhEkTmxvn7zaoa5",
  "key38": "4g6ipmfYD8Q7qoffLjFnC6HPEWWCNYAV5aLcnH22Ts1TG9MGd4tBraaHwy2eTUti7Fb1FpSoxmZaYp7hmQTL25So",
  "key39": "4PomzNrcTYK1Rt6pmDq2GWh25PYVNHNLwS6gfvxUrm26KBdxYWfMDjQtXqnWqJhRWFFUZUxvUqoBrkrmvVXr7dV8",
  "key40": "YEAArVfXr3TgMwNUJmLxBEaaAgLcMjRzcGcTSSaaHTnPvWhdJx1y6jtg9QJcmGKAZm2mGjF8EsEDFx4drzZnGVN",
  "key41": "3mxSgp2scWSYWZJgauQMqAYoUfUWRnFHXTCcMU4DtPmGRmArdFQbFABs4woE2gD9aW3cTQ4VjPhMC6jPZ7ngcXBb",
  "key42": "2TQ2Mt9kUmAHv9TKdihYB4yC76CwrYG7w6CoB7wBB2Qi1MAV9CvQS6VHB2QvoZQKpXennjZwR5MQ2mHEFPeTyTJ7"
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
