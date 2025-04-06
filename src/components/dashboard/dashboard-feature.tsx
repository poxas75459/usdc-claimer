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
    "2Q9RikRYvKCCDhGSqY9mvQGiYtXcvLMang6MZF6hw5AaTyXi8vVfB4zd5dhrAjQfwkt8yXY4j8ziy63Tv2TKXwRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eDmXVXwwKXPBZkv9Fiag7ZujxjSRRYpwFeJd28KS5s84iVJ34LDqzMXWyjMCnvDWC4xb3p8GhMwvrhCSJWEJdG",
  "key1": "35x5Zydui3LW7CrxFJgBgLNWN6oy4h3kR41qTQy6Wv1zTxvxbWDsB2qQGQvcFhF7KyNegJSxtzZLyvLvM2whicvs",
  "key2": "2JCtGYRW3qkgsmQ82FGhUhnCcUaiMQc6PGzSxey6DMLimnPJvAvLq3486i2Wg1MXjaV1D7RHsiBpGvG6zPcQRrF6",
  "key3": "3XpqtZ7h6eDVia2KHRRv9mxyw8EELBa62CAeRVEkVCzqdbwa93uHejkB35unyHy114yMTSBKwiBQmWKyLypWkQif",
  "key4": "4VbZUuUxRtXyfKotY2jdS6fEoLFfEHu5LuNp7SWst1vEmNmzcPLmxeZEzu1LNgjPY6VCLX24pHomcRiYyznWRevF",
  "key5": "3Kid7QHTM1uqkpdZUkMtzm9g4yWzaAzosEPRB6egZShNQ6LhzxPqRSTBfZbg2W3wd3yvJq9fiRmx6TGoVuZbHnFh",
  "key6": "2W2C1qKA7w7Rz6t27BLUBEWm18wrkfTBbhckAPVKHzQor2hZ5J8CEr6BBbkdRqdk7JYHPeGYLnJD1yVshFPCAbWy",
  "key7": "2piUeoRdzxY89S5c3TVodmHPNUiJNViyj6bV3rRrdsZYesxsE1EpCzWf6wzpTi9x3WWqU1eoXqrQfyjq7YTZhSQv",
  "key8": "3wuWkdmbiT8PAyhgEnqJwuxTaADd9utXgf12Mo88sbPQ2n4LXsym7y2LudqXau71kaB8PXrPEaB9qRCfZJShbzV3",
  "key9": "4iwgktEihkwFTNSXAJHbssLVVUsYwSTgQ5YY3N68ougJhgaSxxEBSrQvTZkCtBvwrCZ72y8QfHqGfAvWkhKSKmTC",
  "key10": "4BAVQL1rm1QDn9NbGS2N4cAnJPwxav2hycLhPLoRLLhLxWeE1cYLn1Nje3Wqm6tf9WQMXumV8Lhvn2xFCBqCQ7Qv",
  "key11": "2wcBa81F2ErQTbGVegMFer5bd6LyKM4Ahj39G3xvHdHSvRV3nzMr25V3ncmu8hAyJG2SFMaJMcjMSMBZFFo4eNDj",
  "key12": "3frVuKSmpReUj4bx9ssp5TdMqxQEG6mgeWaAbyv9ZWLiFeR7rkBmLgEFU9EuicaEdWZyt6JRnnvV6BaXcKX4Gz5f",
  "key13": "Lpyk9ymRLdRwbCreDekayQbu9tmGswxwPihFy58VhtqnoFjzAzetw6y7GLcD2wdW6jBQLvWahRYvjtHgTFjmyWf",
  "key14": "2CsvmiMEpXazVxARWiAQMjV6vUB6Yszw4xvwJgGX6boESwy3hWYWyFqix1zNuSUhg1wUJYHjGYGZv2BcfRoBd28b",
  "key15": "5VPWg39MHcYbRyvAZyZbms4Zt9dQ2WJ38cAET6jRC2tXySD2eX6EeLi5fiQt6V94qc7NaEFVvtSAHPCiMjamswQt",
  "key16": "5LZGA9bHA6fJitEBAPMKtY2GDveQHUuJ9ypZZVd16KiPPZZ4vHG8QejF4MPu35UsVgXNYCn6EuJKiM1JhoaPofJ",
  "key17": "3SmCY8X5YKiHD6FNjGTTSd78z6Nov3bYgfWcuQSu81yME2xn82yprJnz9LvQfZHsDTKDJShBfVnRcJrGPPKhtTZx",
  "key18": "3Sx1WvGKFE24wjG7fDnvcd5AyuAtTC7cT3BpSHhfE6owh6iRi9pqZjwLgnGqRnuj41WiSirf84ZFYnUsVaq5DQkU",
  "key19": "5PkBS3x5oBqjHW55Czsn5ofC47QZz6eZhQdvQsfCTD24D7WKB9xY2KQBjJsV195EGLFnCGsYLbbU15omA1X1iA9s",
  "key20": "8R2TxsEwLKiPvoK6eoNxL2PqayoGvfmN5ANRuUq11N9Lsoz8c5kRJ1uceMBs9o54HWkxL8BgugnpdhMqTHYYSPq",
  "key21": "5eFhm7ZuqvpckMkqv9AzPvqcMn5nEznKP9gk2Z9ojXsKBooEEqiEjhAVXQ7SFTU2H8gWi3tgKn1QxWMbCuLRijqq",
  "key22": "4HFs5kJ98eZPcvxhZtJpU1yUCeVGt37zNReL9XV1wfhc2UoosbBsiZmbGYKNrfsP74mZC7v3asjkdELMsEsvpk8N",
  "key23": "2u5nYnUEYDe4wwKt7q6kTfqUqxEHT5fFg2y1vsXo22iDn19TDAAUUkQVrTHkr9MEdRNzWL4NLPgUyBf6tFyw6RLu",
  "key24": "24Kot2CSjaZQfBYGkgMMyLKgNZU1UNDgktYSM5kNESLF7sjEUfvt7qFXdWfiRoPrPwgceqw7muBD6HzgafanokVt",
  "key25": "3cGuWP3UXanAP4uUje8L7ge85rENkbCgQVc7jEqx4G5y1d4JpAG1fwztWjtQFSXfZehHCYgTL3koSFjUir18HQZc",
  "key26": "3osJ8sVvMY6XJaLgEhd1Vi7sD2Q184mdACoTR11pPr7PmQdWuV4TqRRnish6u8D6xNY2bZh3FHiaH7bnhcyrP9bZ",
  "key27": "5uaWKcHBTDFZqpue7zwKjMSPFdQpvgT2cz9sXS11RTJTR13FBzZ3DFcGm5S5MN8jGLHSCfMKYU47EhQkmCgd2trx",
  "key28": "55skKmcaXbrkc4n8fMZSms7RPwA2SnMdEbizxQ1PhFbD1uRymuNoQ6MkJBMqQTKFvY3m5HoZdNVfrth5rZ9vVzSr",
  "key29": "38PeYLb2anKjJTxVF2FKD6iDm2Eow5zUWDxBxxt9wEM3YGSQUuGLVwNrW8SH4oDztfudgSeg7ydHRU5BbgNtf84Q",
  "key30": "2LVeCpsNAu89uS4vJKbtEUx8M2AMuHLmTf1LeMJH7941mNyd2rJNxmarFHGwss2rnE4E1kRWshnG1ijkKeKe4pkJ",
  "key31": "qCfxZSCXJ4paHnJQhikgxofRBCKVmansX3bHmXTALifGYDRfABKZzBhPqnzhju62pPofgKNiYMjvhyv12abfTCK",
  "key32": "4Mz37359UwvUyLWuNr8MmRpof7cPwvQS4EtiUkjmXEaxYy77hGgr3Z4bLMYWBoYr97655hYQLuChXjQC631cTAty",
  "key33": "5YPu6XDVNBZ7tvvQUhcQSyR2G1xtjFdzvegaiGBoESVxoJUYuo6CcqPyHZKjtmnPX3JsGorvViv5G6ZifPMFwVor",
  "key34": "5ZavNhjSmHvsazek1wBzTr3kfwqBaxdEERZ2WinjixzZvyzwZ4mycf6SWxJ7uSNk52ppmneVe25utDCd9Jt7xWjP",
  "key35": "4hTZDi6gkGjG4rDCrfFoHFJD6g5ZAAzSio1oE8Y8RUXxcmnPX7qDHZE3uD7KNMs1WqmznNnkwrULdz9zF1FrPjua",
  "key36": "3ekQg4gVe119TJG41qthY1qFF5Cowx1ivBH3JX3GWKBqBwEHkBZDo8XwmPPo7F7uNoBGTZN1NYsz4WVwMGm3Ybhq",
  "key37": "4yoRR9tENguQbecsZpGej2djTad497myezj5uuLMwuV1gXwage8fTgbtsDBxi5UKzpJWVDHSPgbRUjk8BPFeSkha",
  "key38": "w9hWBmhhXUZgtnNEVwMC4Ni6QG3JQhpBafFYQeB4VzhVFjqp8rGHC6HiirsGLoQLZNmrz263mRMyy5dzenM8VNa",
  "key39": "AQhLYCtq5JnWjryCMoU246bcDHSpaBm9jbSjeQ3LhArhT9cWFvvw7bXoT9ceVnNzNjmP89VRxPimD1auuBNLfwQ",
  "key40": "5Nw2HK9rgEmdRom9kkHjTpTbRuyA6SwpcB1Te2RFpisEaK5HeePQKPHjC8hcvVE8La3QXaWL7w6Yqjx1XnsYXyyp",
  "key41": "2aq4j7oCuov8ufS1G8jPGarDwHg3UpBgmMjiRL4VdCFseqm63v2n2zuQQGEE1uaP3GaMSKyEeZrdCE5HYzQzeJe5",
  "key42": "5fLL2tK2aK2dkZTaUPxvMkQwyq4sLX3duiBKNK2LfeV1C6LRcXmA1L1fxRbQWVmQpokRFa2FBsSsnvqnCxbKtDxC",
  "key43": "2e31HHufyE4vfuyC8R6d5Jfow3CkddQiTFkMAAUogxCGc87AdyqAuyicLcxiVVG1So2uJVhapUQxJvxvW3LhjFvi",
  "key44": "5LnwnHNbnFq7yG7AbedST2waPcFKkvuDeBV9z6dNLZ7DwAg8zkSECSLyry29piDqaZaLhUp5RyAFKFsw25BT6UqB",
  "key45": "46c6wEsuZBXZW2iSwMkKwU9fPN2Z6MKVqTyEeaR5BQZBCjFqV4Y7m7gU6YibcwXE3NXg1tMUbURo7reYpMyxLx9R",
  "key46": "25C55xqQxDXbgx5BsQFsHvSjtwBEGVsK8iQa3WFt5eqzqsfwEtjw7AUDXABRk9h87Ly8owKB9sUQuAoVuXWywMC9",
  "key47": "3iLvSP3b2gXz64AiWUKBr4W25EeXPGpBxpxLmECKnk4pDhQoRMJcoXQxAbLK19yFvGFmDn2p1sK9hnpS9HbJpRE"
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
