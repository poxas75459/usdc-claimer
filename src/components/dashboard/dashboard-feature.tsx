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
    "3dob5CjhJB98RaQdAwC8Z8JLHm2y3XCiBSXnfSi6txrCoHBXZku4fYaP2rbrfmmtMNq9uzKZCaQiYczPsmRe5KuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ptqcs86k6Ye4N1zVYedEjDtSuj9tDTL8HFyTrMeArtVJ4MF8wNnVKSSkYd2nwZD7D9r76QtofyqCFMy83BiSRtA",
  "key1": "3LuAT8aitsEDzN1q44C6KZPC6S51Q2EHC4KptqNdWNA4cW7XY7t738sR8cT91Hvd2wuWs21hdLYrJhRdebRsS6LA",
  "key2": "kcb9XfXQ2Bb4LvVxthnp6PxHZv5owAXu25WsHv4XGkZAkLiBRrGCM1pvv9vBnevye3ZpbmhF2JjmA5ih2yGGosk",
  "key3": "2dN9iGcFQWrkEyBxW4V1s6jz9erMPwjzHfWxYqYZARyQguTR3gZ78fNUd95MpJD7jyAhnC5SL7TdrEh2M3fhSLLB",
  "key4": "38HHCG21E9b3vy66rqscnDicSwaAge4AJUeUwnvwyAMmAdxzUwZBqdEZScV6uL6QLL3xgxZjUYCdbXqzAsjaMFET",
  "key5": "g9KhCgXKzJmSm9YUpKNzxALQVeUTiVpaMEeyBycrRiWHGS1ArY2Vm19CaUt173hWfFmUrs64kzcWK5fCNc9nPdV",
  "key6": "4wLGTYuJcXVwWUc2xKin5EbskLg65ubebnq2FPMoXY5qhgzyD6rAcxjbPMeSAdTxnwpMkSFPY3rx5ZHVXKH2wEHp",
  "key7": "xknhMGGmSWCQonGzN2Cm7Jh5S3UG4rtbybDnavpYVDK5iL8nrpSzdpHc9Fid8Awk4EhTADemYiJBgKGDytPCfho",
  "key8": "3WczziUVEkeHhLTDuoEj78NnTt1VeNqtHYSvKm1pwry5LtJzbk7CmvQiwdttT4mhSgHe3mdwv6WuMZXwGWsh3xv5",
  "key9": "2aUutz8PkPzhny9KGdVh4am6DHu7zUvC76GvGYNKZjNABxUHVE24LkNQRWCUX8ws9wt5Bjcb8X6ccD1tfeKDtfJQ",
  "key10": "679F5tgW5iBR63gLLGUVvKYDJ1PT6PfRZokawcxYTnXuU6YLRRWC8MhyN49MDCKXwzjvTnmYaT88ztH5tM72BjPi",
  "key11": "4QiVSdxfxEeaXwpA4wA6DU9CeYKZjYzvTT8cNzbto7widWuAD2BW2BXMD6ciTyNVgE82YYr5F8fUCD2f5qP9kZqX",
  "key12": "5Vx7MVTmvnA2E5J46fPDei4wpJ5Lx8DDBaE9ENNoG5bk9s4LQ9BUEa9p1ZSYgS6oks4h62MxBgYaZWpT41ZpTyMj",
  "key13": "24KKGePYUuZ2A6YEaQFuQJcfCHxhFoW1fmHURCJW6EUYyf2EaoTtHQvTAaArWLm1JzY9vkhuEiohzmykKiwY6Bur",
  "key14": "4phWgvyNeAQvzvvJ1t4a5vACdWMnS8wmFmukQbA9LhZyZVyEuP3MBPgPbvdsU5PrtVQPahJdWFBxqj8NTs1RY13S",
  "key15": "4XgJtQVwvMqfuD2CDe2yvfb12LSaiq8Srbv2T2djxVn4bJ2uUsdCXYGUg9cdg6wwoMLSJcYV5uvEgXeLdXEoECWE",
  "key16": "4n42WC9se7rhekmfDwVvMpSVTU4YiRiqiYQrP7eAeXLysLEpHtpqtK1kLxDVLjTXFmhys5urnQkx5SYcFTSk2RfC",
  "key17": "BmsVoDGPWE2yRRiCddez13PtD797iTfxJr326QRb11d4gnNacHWXXfqXohbdbow34a2Ar5Pc1F4YSc2HuG53Ewa",
  "key18": "62vpK7ZbgHK49Lc3GqJxxXiNL4Y9BSsKrH6BkmKJQQnTATV1Tm1Bgs5Ka2i8J3XWVKZ5trSMQ1crUxNXgjsZFu38",
  "key19": "4tXnkyreEDoW7dcmgXLtc5TDaXrZsP7gFoPPfNE9JuxqpD8jGgLgRdrhim4sdvMA6sus6kk6eFUHHpv6DtHHmqNi",
  "key20": "4vnbgjwfmtLciDonLQsCqyFcSYoyLwXhkvor22oxZWKzaDdmGnLgQ3KanqLQPhX7fkFABoYyCNEnSMqCA9EeNbmq",
  "key21": "4c31eAa5vRnvY4dNrLFFPpiCe3LR263oS3iprctzAWwUvMnHfofAYEF1v4ttW2b4jBea7PKFMKq46aQvRWUQxcNj",
  "key22": "p6hejCgmz7759GuxyhbuhhZsQLyfqQRnhWVLgEKq5LuoPGoH3o7s625Ztta6CiNoovVpzVA5nc1aMQuLsfZKVdD",
  "key23": "L4M5LWN1oDLk2Zqp4k7BEV71WkgcvxP9rk5k45JFTvhNentKHcyfMdUsQ88ESNX6aL9Y9rRuh3QpLWYSncCmXss",
  "key24": "3MEabnf6DTXQ8NtwMo1vPjngNneYTRScVmuDdwMsQc485eZNsCPsnhf8DTwKUjFn4Z61NYQFzdccHH2o1qhJic8c",
  "key25": "KMKt64povpFLwzbSZEjxPwv8dZWRcSrqmiNLPfZPENEAW7VNxtJGvZjxe3CUveEmGF51KbPNGCVGZxTdgSqHc7Q",
  "key26": "3Nf7iEAGKhaFcRshBK579aQVUtK5FQVhNqpj4wqSx71Fa2EE82w8UhzKT1bMdsnYMQZjDRNh4Ayhy8Q2heQkitUY",
  "key27": "4oo9acfYYwEzzz5svUQmhVEp7W6u781dMcSQf4d29ZDVb4Bkvq8Wbgk6rqV7Hkq1BUqF3K1tsGYvCBHF48H9w6Tm",
  "key28": "5Q4rcWjn7AqfSeCJYSXbRc4zHn4LT1xdzV6jsxsUYxmxP7Hc5YFqe2HFALAd2Q87FXEs3hb5BGGYM3R4LaWaCPSs",
  "key29": "5iY8MH27gy7YAmQCCg3yDcHeT9PLSeG7459idXBGJxPh2RsAfJZfaGziiKMWMtAPGJ1XTsGxnvKyikTxJCPkhejX",
  "key30": "4k1vbChKJY2WgZPHgCuQLRXSK5rF7Carc7CPwQvZA3jkcqvrQM9kWM5QJabHBTAG1jcYqgZKV8CMT8CTzrxu97em",
  "key31": "s8BLVUtuwK9kT4JsFyz1c5WMCYKRrdbfssP2AnXNJDhUhmZL4P37JaAYHSm2FAbeQcckBfCXm7vbPRgvVKCKHaf",
  "key32": "4BSoYeap1Ld2Vym3NhjmLST16aYsJ8t9pVs8iAywCxTPUEFV6oi1Biv9KwCVeiEuRdMKxAHUduCag9JDKf1Xm1eq",
  "key33": "2YpBkvPuewitd5VyjNmtY2Gkrv2EKwW123ABEGgZo5DTZjYg5YCjwbZZagbqVaxNJdugBycutuUhbwo1xe2b4SUB",
  "key34": "3GF478xU9o7euuJ8mg2dtk19NwNGDLDrqjv6V4TavgPGcHWMNNPSy7qGioMFA8tZM5r9KC5nc9r63MMyFfCFLvpk",
  "key35": "4s9dXSMeHPDV1MdJ4zrr99bBfatYnwL27VLMT9jdxBijE3WhDUAzerdCA34UVWHoxDAdnt1qXA7WwAMBbCGUyJMn",
  "key36": "67AzSTVA7wLHq9AiHe9kg3fTnYbrNkwV59H8ycovRddNHWw9AcMF3hbr1EZxHZeK2S6R25neZRGuVUK4NaVoXEtc",
  "key37": "4DJJvmMZC4TVkpCVeF6bfprdh8JycwCsAR45FNut7tqiiknDz55awcjgm6VekJKre4rbhAyAighFRzv5CnTdcS2m",
  "key38": "2i2uNPHAYp2E9AR65xJW3anKx7h5LtWCCBtysbnEKTGXF34eSpm15vsY4Yt3UGqP1pJRQxqt9iPthjegyt7EkhBy",
  "key39": "4Jm2eCxcthFHeEU95EqLtzrhdr5b25f7RwcXc8GMqkXZA5s5HENmkAPEqrWgsGLuJDRZVVoEMm5T7Q9Wz4tBf6Cp",
  "key40": "63ajtUZwBGkWiPUc8pXLMzKGLkWcyijVBdnGQ7dtm68f7vvY2mK3haDPVRE5Sdyrf1JDUEdxCMAtdLHPArC7oiBe",
  "key41": "aHwwWbRdnwdkBkZ5ZUQUjLJnsAdFLSqUzH4rJknfSyV8jjc3EP25UWC1o1jjLXyinGweXgBgJ5a79aW89BnD1WR",
  "key42": "5StrfhNfsNGm3sYgKFLQuTtxTHcdwdH84fvVTbaRvT7BJn3x5R6hdmSHvMjY8HuURr2avLFmWuRmx4UMfMjLvDtE"
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
