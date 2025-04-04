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
    "3uK3BLgF1eraxwNPiQSPzxwUtmicEGpCKTCUWbhfMp8HQ5VaBFVKXYDZdyMs2h3NPUMk4v4DwS8fUSZB8drc2iFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GXPEhFnHRqCNPYFTvu8cRVbRxLpGkgmWzoxPrZcxyxQURhvcNNW6nc5w2JRywcYadAvtoDty5zq6xfWkQV7XbkE",
  "key1": "3Y13rr1RA4KMfMuNa8AimYj61zXwMS7ZBXdwWjmGMaSzc6eAnoe8qmaaPpBJXNfktot9mS2DnaeywCE2DKH4181S",
  "key2": "2xBWsevTgjMKbTSzHAEv3UyZrETuE41Bfvsb6YjTH93vnjVPNCdcjYGKBiRwGr4bvbkxNPLd9y5eESCWKg9VepDM",
  "key3": "67BKccBRU9uJbAJazFZyPQzRxTeGpTN276WJ49xKR3L4ZBX9RRt9dZM7FibnZDxEZXMDJyJLdDR9HH731mU5QhWo",
  "key4": "pGu8fD1waMZDMBthtkMFfcwA4vT27tCNeQ9LDP1UknLHrYZDq6EGaP5mfLsZDvC9ikQdgMiExw8HtmBZ242VZKx",
  "key5": "2Nxv9dDkDJsceADnXAAM7e2JRnjjNDop5UN7srqjk47Zgr7kEYyoGYEuRuq9b3WeX4CNoCQ3ap4xwdmSQ7Eukofo",
  "key6": "4HEoJpsMgxfGWJghArPWawfEmtSox7KWTwa6k7wXetfq2NssdkPJ5EDdf65jWwGuNG1YXmc1sgyKzoXaTRp92QK6",
  "key7": "35Et6ZTPpKf7npAAccmq9GpeAqfo1HToYFRAuWAb17FbgcLMSxffvw3DQEnXyQWjdzme4oqkJWuMAogDGussSfmo",
  "key8": "5X7nHKksh5uY73GZwmc8eRx4GjB2Wcd9izqN2DBaLqMyChn2bJeUxn5j9fc9mtNUGr6iYshtGLgWazS5MAWxSs7B",
  "key9": "4njZw24JGsFGbPdoJ7pKATFBJToxNazdZ2yyf6FAtsTrmsH7oimmryFTzhWgSvQ9rC8jJiGnLPQzmHyAV7geBjGb",
  "key10": "2QXBGo5e6RErqGKLepRFESwSURtc2q2JqXvXjSkn2Ch8AS1haa6F9nQaDoeQhhbjnYLZDWWD5tZBVz6gxWPLCHM4",
  "key11": "2tXbba1HedwuigwiRP5zMp3oz2VYLXxAJE1gZDNw4ns5mLyyubDvvD6CtjjJy7ySjHvcTBKNzMAFuTwjPowh7WpM",
  "key12": "6o1rJc5wiQjHHATD1hmMDx4MsvWmMTRMC5sLWzYYyAmcenES7WaoLRGk6jXYqDAHBmpMM1W8Ve6odspztwCLGcL",
  "key13": "3rycUHmNzn3qXX2adk8mJYsM8WssVN53HXdgv2qXNabgwtamP9FMvSZULKH5Mh7hDo6FXYsyAw2TMscyrB8pTrHz",
  "key14": "4J5QibTvmDvrK4vNAAQQ9PqjdjqryJ8w4RhumhkHcExn28PU37CuyuhQvzJgkeH34RnMQkkWPnyu144Q7hhFoxM8",
  "key15": "3ruzRdEcTP9kuEFe84biczB5igv39cn5TZNJbbuLah4TF7nU4T9GLSxeKHQS9pvURPkSjpKcKz6qM5rx3Hy981cn",
  "key16": "4yYo3ptspoSCFw5W84tSMNrYVexfAThDSB6hZ2us186vfS6fd31HqvJ32ezZPajeqbdbUHvBZ9PdzjHkiJQmr4ta",
  "key17": "3o4nBPYKYi4edoDP4bmqySA7Nm9TMWCRUE8drSAbDJaqWYpACsMBZUbfQcXUEBghn86jXdJo6LH17r6xvc2tbf9B",
  "key18": "3ZoyuCg9S4oaUwjTBGpeGDj1or8qNgdH75kRTiTmXkXVPSE6jrcgnFRQhUbqnGec61AdaxTA5gx6gpT3SMXa5j3s",
  "key19": "2hWHmBbmgUqX1dtzC1b1dmJgu3k2roQqJHJFEHcKFDbno2A9Gis6syDQWempMH8eWfinYjh6xQRqi9KuyfboSKd8",
  "key20": "3VLfeJsSfdSoKr1hy3J7tX8Stcvd9bGzmMJAmBWjEpSxfmwdmJRBH3ga4isBV6rCsuBtgdpVn1q2yTKERL5SmEZG",
  "key21": "5U8Qn9DCGqfojLHpoJ3awLxs6T8QzGuXSWDZouiZ1dyE1wpFVpXisMYuYNAww7iJhEjYmSbWqa1fQguJj9opUjyD",
  "key22": "3tcwFvt2CBYcCPs6zQP77T4zzQyJqMxEkNF45Ck6xVedQys378QvPo7AMhJG2Dp18c7rAZVkVXS9j9HYoMup2rKV",
  "key23": "4jyHNLv3rsWg3PJD53aAk938KAxU7g9PQjh4AgrgizAXehosqd1R2r8T2p2vLbmqRcj4rYgDsHd9vmadJn8Zip7R",
  "key24": "sugsx49HBYcTmisAzudk7z3KBe77C3V1pB7MVMoZMmRmxoUZ3p7oSW2raUkqAudgUB9VW9pNTNuvcvSbq5bM7z6",
  "key25": "61DRY5Q7HmJ8263WS7Zkek82NecgkTSy2VGXgVZwNygpCLqCYX3Uz8ZWgzXQwEpjBkayPxa6xJMNoh7E6UDu5LeA",
  "key26": "5uPfvf8Qwe5BKvtiyFGBJyNj3GmAVPseawyi1YabDAra4dR488TRUBy8pxJqLxPVz3zfNTE4SXjy79s177WXnsuL",
  "key27": "2yEsNUsEaQ18dWC39DhmyPW3KU953AnKLUk6E3gwKYprMcuT4tLkV7oifzwxo6YRjhLUJhcY9WXnL4pCVdGD1xVA",
  "key28": "4rPUSio3A9qNE865SbqG3qfNN7vhnzgpJGCsRzEt2C1tufCcUU9CVuNekAiJb1HRgNccKyXgJBTjvz5QMWMgLqQj",
  "key29": "5BB1i2ew2WonDZCWTqPC9vaivfXK2mJGXQQXdKp2jf7N3NZnERMNqHd9wYYpY3SH4NSgTMZaaSsoDfLHWJcfsFvr",
  "key30": "5daBmScGSV4Lymnv679cgMykJQhxdoWEbVQar35BoiL5VCB2mVj3tWDqD26vd6NQfhcXG69hgzEm3pMuvKLNJaf9",
  "key31": "4ipwYSnjZRZgJ4iggWX16uy3uLFgzVPbD9dNyVGT4Nvkn6dAB7DSbuZWyqrAept17Redxg2RMKjEsKW7o6ycwWJ8",
  "key32": "27RbQAzNrnnKka8XjXwjyfh44xY6qN8b5es1YwR35FvkMYjb8Xn9xpRN11GLpCDcL3WcPUFXQXXr1uLYvhLbpMuw",
  "key33": "3jDeXe3AT9E6rE7B22bqiyNfPxMKi95Qr1NPYwqLeS8UMBr7qeNm7N4z4HJbp6eTxayGFzCgZzHnBKAjBYiKT1Xj",
  "key34": "4ACHJUUtq1hVrNdTESMEzscajY6Fykozh8j6bG3nPttBWpE2pEQfNPqQGALXshLq3AFhwTp3peKkxhiHrNar7RUz",
  "key35": "4oyKLHQr4eGcxv7n6Mehf8EvahpcMFYJsxzFE49ZDUaUELhvUtfvyUzufxQRDiuMBvDHop8EgsDtC84XZD9QsunE",
  "key36": "2LJMiqVPzoszRxBNPX2YWHWBhYMYpiN7PzHrnb1jfYTWo5toCG1Y1eeVYDVcgcSJx1PPfiLjkXAmSUzG6Sk5nbBS",
  "key37": "4kBcDcaPmoS3XyCenpYvGPwxegnCqHdb7ArzbAzhG3n1yWF2pCQ5JwYsBD5iZvx9DdhsCJyEkWNmEwxzg1y6jMgx",
  "key38": "32u5V4BAnciMD7EsJG9gJDRNMmyP6tUJ9TyFqSY2P2nUfFdqPBLsXtTVfVVbm2zh412feVrQxnBbJDzbt6PmF5mp"
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
