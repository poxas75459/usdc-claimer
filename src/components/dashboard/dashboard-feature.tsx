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
    "4eCBEtiSuUJbEfHzc7oZnmkci8xyNHhUUmMdYWT4YbRiHtV6T7Fb7CA4RUZaGTxCP36hQzFLkA8caZFUVRENu6Mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n54ow74iYA2eLqH1hAMzrBL4StFxUyZTo7pSY4LQ61A5Jz9bZdJBBL2nVzv8XEwqyK8tdHF1kjSyZPecTXgxAEB",
  "key1": "58G8pp5gajGcrUxbJ3vtqzqjnrimCjicUK15pHCAd6Fb1rYNLttqHreL4meoecCgHtBEiQnn4nGJbghhybo1HfnZ",
  "key2": "X66qk91Bqs9PRJUEJHg8LgEfwDWNwnmnvGaphNGX9KhoAX5Lx9qzkJeFrZZ71wnT12NXmQjCDHeqTWi246MZ16H",
  "key3": "32qGzMdZNw4NBfhQqunhpNh2o2dBJ3WVQxpGoAjD7uqZePqRnLPbALKYc2UiYp4AvrVtHzWHHrYbrnFVJejsWquE",
  "key4": "otpPS7DSsB8McBxv13jLqx1n1Moncm8s5AGqisgZw7oEArRYcetuGXP1GgNpAtXX1jxzXtsQTT5CoxDeR1mrCP5",
  "key5": "2q38bb2p6VZBwt8FiqRH1EG1XkxN2iiZ3P1gziMDUvwJBsbNf92izucPHekFM1SwTdPrHQXQyVGYGa9DU7qZGLHW",
  "key6": "5T2ibyxSH6QNcLteL548xNTLaUCPodtgEvzovmdJDHfZx6PyGbBDiSge96EbwLv9fv9B2w7tvmjVvpe9QFkeVRJv",
  "key7": "4qwvEdv1U1DiDKqG8jgFQgSUqED95HEWDpDnDkreFuC6ophfhsAoZX7XGRY3Daf73AF5o4NRzKfuLUFkcfqwfFJB",
  "key8": "4EVZorEn8EcMZzc2N1Cobe2vy7UsGcpeUfFXbrAxTSszZgrbrBiiK4VcGuhj43bSZbA2LGGRhRkiC3eeGiv8sGQ9",
  "key9": "VD7eSsrVvVSmyyQWZv5uzFaiULeSiBudHfTZ8vna2aaxejfp3X41Cm556C9Sy2hXqVAWXWo6Z4v28cURBEoNgKf",
  "key10": "5xxcCqdUqphgrDyD8qQYpUNxvsXzcGpio7yNds1gFctiy2GZ9P3EPjoB6C7Rgzs85UzNrFURrPtsCJtq6FtuoBBz",
  "key11": "2jSEVGxncMqAqNvqf8yZiYvCbn7njYgay8fBH7sKcYC5QTzgATWKSxgyg8X5KJNN1eviByw1TKj73K828FQAK8Aj",
  "key12": "KeddbiMrfsV4rtZEaGSikDvGWSjgBLrLEfWQmWb9TTCt1Dookq4XimswwX48xZAwUneBFxodAJHpYHsXHZF33BL",
  "key13": "3aG4duMw3HtPyBV9PWmPs4kvxgPyZN1h1ipM9FSS6PBo85gzyBkEHtUBw7zyM8JoJAahWjZQMZAScet7Cz3y9XsA",
  "key14": "4EeAuAu1uhG92qFgCzmRNwKDNEJ7g7SnhwPTDxWteyM4DRDdJYLGjQXuwpRPM2r8eR1RKo81KM5QLftPyrd7R48r",
  "key15": "5aBTtrqPPbWZ8C4tw4c3MZMzVPaxFVjkA9N9DMZ7hnejjPhWMfKESv3m9Nig3sxTpLWXwTgsheMzYSQSCUaaxUmH",
  "key16": "3m9jGGUzq2FH12bbRND1NhbXdGYmsipHsgW2PSKAEXPWCfRPUFT2GCnn1RmMN1ojeptTUgWiTNJM7FiBpUsBinxn",
  "key17": "39Amq8ZNVDPM7zcHCvUCRUECkYg8M4eKiV1oDnMS8wN4jBt2LWxn5kiX8PVX15TxK59JnrUs1JCJEYyAu4Nxw96s",
  "key18": "CxX1h5tftF4zp5yvJQsC8kXe5eXZj1rQPrt2GFCg9j9JguWTUoaRTEzPpDX7mUwVnG7tBcVbLNf81FEEvCMRBwC",
  "key19": "4uxms4Ngs2ffr9gZ8uiNqGurYAQDpN3fReGXpHbjjGwUrBJHNYAYpEoc9waxshoG1cpUXCxRv3J3NssDzKz44tvZ",
  "key20": "38ModNwegw7Sp9npzrZFyEYzeQ9c39eMPz6asC8e3vPmKoKHM6bMFxPo1iwMLwo61o4b1osSaftEhu94xDsTQG6v",
  "key21": "5dFo1crDkg8i71R9jtZrkxsRyYbaRzUDwPnTTDZc6d2nPHMRH4oP2TcC7gXAa2xZ3fxC8kAkEBt6eAKSrTkixTQV",
  "key22": "4wCvGxTx48dhzXD6cZyNQw4o4nmerrVzorkX44BtKx7EcX9MnbkHL93Lmg5zw3Whfax9CuQdXC5BrbRpknmMPxkL",
  "key23": "5wh7JRYQ9QQ8WMrKmkZZ7gFs3TcWmZid8PJRe3CewQX4HqybmRuiufCC1QcvFiJ1X2AWRHcVLKQsRuYqumX5nNMf",
  "key24": "2kCq3dEakakxsKhkXrEX19wY7oDaudPobAAd9WokRrp2kt4bCMqx62zb66PzLEY7P1syKfd6a7tsaTg1RxMERxH5",
  "key25": "3RV9HFcFKxs5rVnbDBwk7ozcZDoDuAV5NY8socZMEKeKGV669ETaT24E1EcnDjv6BQ98cTsc81aEBp3X74k9kdNZ",
  "key26": "stLn4aUWUZES76E4TQeV8VWQWbujvfBuXcPg53z1rSpWkpnmzA5MuBueywg89TR1MxF6MXDbMcyvSs4mHaAVyNA",
  "key27": "4c7jMBA38WSz79J3PPyDVBWHbuQQ18gm5gJRHMUB5iKFWhL9ADJm5vPguDWhx3odUGc9scrjmddpGTWsHxFFKDjp",
  "key28": "3LXLvQwPtCUjxn1Mr24w9BRwtrdDnq5dGgS5LFVKGZBUdmY6G8okwy4N9UEXchGXM3YC2aG9eX3GiNKXhfveZqWu",
  "key29": "5BTbJQrEtBQsRP1ygonuASeyVSZBzTusJjp4H5DywActNJqPLYEa3NV1MjTJ9QvBHizrRjig1KGbv4CCkpeQ3RzQ",
  "key30": "39VLm77yxNfqCJgffV55BKjE1Neo8sQGWMTRafW34YFEyX3yvbZnbVK17cFmLB2t9ZEzD3X5ezwjswttFVNbSvcQ",
  "key31": "4wXMJgRHdAS3ECVe8moNGBKeYxaL5SJFn3LZmwHDGw1434LpF23hx91BWbeKupWN7d3p94ehpyoB8sVJUKTaBkcR",
  "key32": "ZrpdQFR52QRWcVmpXXd5BH5BFivH7eEcBjEwNMwuowrVtRqgjFmJVucebvutdWG3FEFgxFPExR6RCYKDYV4T4j7",
  "key33": "5cdLSMTBGcTShbYr6svSRwSfaUc8h42iWL1AtTWJk49YBNaC9xa8zREW4RcB4gHQqmeCfs5rvf1HFX19eiZFExHv",
  "key34": "5vfhGyEqWrspVRjHwW2zj6KyJASBHXux7WTew19XPf4xLq9XAmpshdnwFdPPAEyfLWZtjZy7BFR4vbHr8RAZSDvz",
  "key35": "3ugWYW9FAN3E1pvsE1AT29SRYHCEaigvVjFER2kGw163GQpnjAkvD6abnNqL5g8u7efwsDMbUNJeBrMUedwKrcSR",
  "key36": "4HqShzGcUrPgrAHoWNFh9BP2EziYjwnUGzV3RTt1CnYhwaUwdicaht4tUrhG2zPwvk3TvTRTwqA8XjNqLoeQwzxi",
  "key37": "3Krk2ayxnf2svgGDVzXE6dtt1p5piCyxHo1purjV76rjQwn7AtawWELXxUygnWV6sgCRN31rS4anktAonmpj1KTj",
  "key38": "4SHm1ZkY5zeCEzyKfAL93FzaEhCVtScAMsfAaKviJMxvPPwKur72L7SyHBsniojQNQzdiUDWbxesT1GcVDaqD2Cz",
  "key39": "24GXitxoGMJcq3K7uXxyKpKQp7HGU5qdGFMcTycJiZP7n5X1WfVaX9tFxz1kueYEHLPVcLM96vMu5CfYJVuA4NhJ",
  "key40": "23BEheeGrciDUgXUhRh87gmKzECRPMiCqaU55P8DEBUSqU37AJXW5ThZqsrZSuuZWCkeZK7j5AAfV8U14ELdJc78",
  "key41": "2o9p2chn4tg7KUEbwYqKGAQ1b8BB3RhiVXRk9PduvDVeq9UWSJzdhfoSskwSfgEZBtyAuzVsGNHdzwaeYNVMSkf1",
  "key42": "63WkD1Uq2wLMyFMGV8aU78Kjkj77kZwPiYgMYWFHxG7D7EsR896XFZaFKLk2NTipEoEkwVr3sSRFP5TGuzcEyCKB",
  "key43": "42eXWbawJwrnQKiPXuUw5rUiGza8xQ167XcBHDv6eWfj2EwCBwpynh5LS6ogzKwGKc1YxdsUCFW3FUwiPh2njGMt",
  "key44": "3xDp1UXgx1wCiG3xPJXBaYKv2LP1dBMwu11YS1cfKDvjiRZpRSwtxfX2t37Fk9Tmy7x7hbqFioghApMoVNvUYfuG",
  "key45": "572YWvpnLZ4EnFfzfSAJWnjPPomUmoJXsPe7jA52zkPC4ir7TvmdnFYu66rXSQvd5XrC8gUXDDs5ytoh2Q4cjRwR",
  "key46": "Q5YwP1iRTELW2ziPu9schZTxt8X9kv1ShwqbzzsEkxwY99fHgGmpkgv9DjDisChUBLg5ZVkdp369GhQTDawfNZk"
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
