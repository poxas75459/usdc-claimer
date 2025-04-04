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
    "3eqegkMMLTWEurbojmQ71WqcSW92APcJKdHReWp1kCMrVWxnU1qU5FPnuv1Go1ttrppep7ffKRg1qJiZyXHYjEKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YjhqHKG1hWdu8yESfc4DBM5hr92YSvWkjZSuSebZyBwjvCUhNeGfjJUuVNWJ8RvkpYgmo54hLhYsxsZFnAfojHb",
  "key1": "cPNtu1qPs82ag6sZ7k2vddoZjDrATTtP3rHz8cjVueSva7rqGDwAtrLtTZpa4JGdQW5s5Z5jjAcdoHK4AnvcGe5",
  "key2": "JxDDSdgoNXWzwQBQ32p8viqeoDrdVym1x4mLjyR3Q5WBGGTbxrr2iMMcfehwwHVdRooL8HusmM5a1Q3ZehKjvR4",
  "key3": "yhBPqhbtqY4yJMxyuXgYb4mGVkTfBjUpnHkUa1L8aLwNxvA8sad6YBKkKGVxp4MDJwc5NC1fWzcd6kKpgpv4JhB",
  "key4": "5Seo74Ma3mVY3YtaNMJkeqmgbbRcfxCxJUNVRBAV8QTtfjDyj8T58yVzQkXeP9BJa8q3mpugqiSF9NrGRzKkaPpS",
  "key5": "3JjBodtsWPRKCzzyJ6xUUTs2dTnWy5NA5zTFoPVUyegDNvoN9KPEJkm285j215s3cFv9qEL3oGKAdV9PZbB4zcrb",
  "key6": "3CNNVorVgs6fy5Teyd4NdPvh8fwkb7k36wiSiPfXiKKAWNr7MtMKNTtLQwXbv3c2EXoXtsgUhdZ6L6iAqFT8YoEc",
  "key7": "4T1Xgfw2UFDCywMvYLyNwVrb16pGwg9cmas5HsZb63Jz3TepwzFVM6S1ftGpJgVFE2kiGMVJcfqfHMooN7ViRqd5",
  "key8": "4KEKsgUx8ARAxYMYFkgJivHY2onDKEymP1FnLCgpmktQiLhGqpxvvCsg74sHeS1QXe7wnUuNdPx5hxRwunKdwU7e",
  "key9": "4oCMECz1tRLGDknY31stfnSNJUrnKUMezM8EcUAca63KRoh1f3CndCaDzqT9hNLKam7RJUoqETjGJnW2Q9T5GXLm",
  "key10": "5G344sSU9vBAtiNqrg4jqnPWk8TjPzs2JbSusWvEvr2TRRfcGJV6DjS1JW8pNE9UznvAsRpGvjyNX9SYd85tt6ba",
  "key11": "sa65GopFwe46XuUs4MCWmnzUzLZm7jh7UzPbXjNg4Pif4RmWpebjorXEsa1ZzMeAejFAge28jcoBah1i2HkEpKm",
  "key12": "5yLwaLAAntNTCCWBcibPoniERLcQ4PLfDJUx7jfqP8A9kgmamT4oxrvHzggJ2B2GWT8UNW52fDVD3Porup2dW27a",
  "key13": "KwsDLzhqojGp7N3jf9bU4uXhknU99UimGDzXNnaH5Cq7jfWDiERtmjLkNqnooGYLzrWh29XU9yJ3Ppq7QFeFzYH",
  "key14": "2GrL3njoacCgi7JFCsySTLbnQKpc8Aq5ZF9EuMK2UgLeuKvNfKQGNMXCpCYczgQVTukaeMeHyEDCFerUs5rq7sEL",
  "key15": "5XscRVZfTAgnnKYJ1KyCaSsABKcf7MExFycq9UPBdx4Z6vV59txvENYPCxhmLUH6LxLyZ8VufGhqsGUBty7MBtdF",
  "key16": "cEP5G2sJZy66UMrR4ZVDE2uVcqt7wLC3LweaqvXErax1JenXyHLwHkNLtsEBF5dFj6SFcZKBjF8ReZ9P9GxXWBS",
  "key17": "AmymnvL7hq1Zh9ZUwtBgKixnUSt8ATwAJTDW9Pca16gJYkWCkNqExmvHuFmDBBXwkf6hvQqxRf1YxJmV8u5G35i",
  "key18": "3Y1TiLQfurmiFVmVjNiBSu6hZZDzdbmUp1oqW5CT61JjqrZ9JU3KNUoiLpZFoumaaugPATkbobVm3SkML6YBbsuH",
  "key19": "583fPaEgkM4UPB6CBTg9XcQE83zDbrDdWuBrsuRpxnq4Ffz8AYC2cii6YcRXhotPYFWm4CJnzZiH3FEHm5gQ9JaX",
  "key20": "25BPboTts98N25sJsXWjWV7X3W8tAHvUsArmosLTgH1BYEXtCJbqcyWocQJkREmZBWUhWsUMYC2mwCkiqN7H1Ru6",
  "key21": "2ebY6jMe5nifYez481YCrNpm6Nut5s2raxC7zChtv9nzeCPauTS7PgVLSTXpanMYmnhJLpK1rqSD64X3FyUhmmi4",
  "key22": "5NoKtaFEYt3ydqzPiu1kN7YmLqgBYpBAhuBTduYCvHQKuHkJh1Tmh5UWyjk6Df8W2RwdfaGqjryMfpPB5dQMMQHc",
  "key23": "58Xg7bUXaEMvTdKskmvmjhbXTLa68MK9Mjgg1LxGixQ4kGcv4MQDhTYx9MuaQBznywSVHuhQ7fRDNJzSJQSYfzee",
  "key24": "2h4FPzJXsQSCu4mu3gMpHmap324hKyxxnykXRADRDU8sCCx9Bv1sh1wiHA7ottDJdk7GLQQa9nDqFb6XJdHMp9QT",
  "key25": "Uiqj36GBCmHJ7h8WECk26cjdypjR1XUigoezuuA4LCHPbsNnCPDyFMHvH3SUT6jn4TFLMwztWzNqkqo3BpC4w7c",
  "key26": "4fwp8CKcrpNJ6shYrLEE7vmi2D7oUakPNrZUXjNb9KFZjkMxgeRwoRGpdvMN3NjxTfTbUqFAQJFR6CBmrxWChZFk",
  "key27": "3cvEQSpHa9ANKCyDXUuZB3tW1ibPfF2UZBehUJcTp88vQtgfdMZvr1gpJ8MmrdkFxWv3tkYgi3dNbrdvndb4s3hM",
  "key28": "NWUEmzTovKvhpTz4tmPdgeLtU5KPJTVQJpm4UcT3NTLZpba4TXMphtp3iAy5K1Jzb91b8i9qtt9ijZ6N9LLJpVa",
  "key29": "2FERsMzVGP2LKnLGDRYmzPj8JuXWoEUSD4xwB39KmjU2CzxyhfHkeq8eTmwR87T79vroRzDeD9JJtwwu2BtuA1Ed",
  "key30": "2dSHjnFYMzpnnbYcCcTLfSRTmAgLmRPo3iki6koAvdZZvWrR2eooxsdQiF4Mkm4GAisLmy4h7D7UxzpiBpsiSh6n",
  "key31": "4xzQhnFp24vAN9EfzWJ9rVrg8JYHXeduULZmtVgjYzYyYgXgABDeBMGoBu9VGv2rbJQHmWQoMqq7on7hUv82ihVG",
  "key32": "3aA9QaCifLCVCGr8ChGCgFGPV5t1rUtcw1kSaeAqj3opAuNaasWKFiAbffDDzfpbZFsJfegMnLTxgeVKTQuTE63u",
  "key33": "2RANzHQAr76JUNx188heyecrRtAC6Qqvsj3UDDTpxbbp4t8RzRcGvS8CGpo4Eyd5TtUf9ntcVJqFLSawSZVXzCAj",
  "key34": "e6EDYWw79yiWoPkWzCUuWQv6o5VCJWPBnsDaULu41CzieU3MuUu21QaNfFbVhDM3hjEWRgjnoKoqPbib21ahNuC",
  "key35": "3MyUoCZi5ZzkjiXxQJBbRYi7vp3wuTjNij62iRxkRn7k2eRZQH8d1ZjxT7mzQ1xV6b1tmDLfVJdvy4H8JkfmBFC4",
  "key36": "3enKHFN2ryoZLtmwEHCtrmkKxSFnx7HzxW99dau1fC5mnzpW338MpUtSeMFydjSKe3w87UYHWBBu7y5rU6BENhGN",
  "key37": "37JX68dCqgxG12FYw4V2jopBnmGbMfz2VZnFUVpo3JapRU1JmbWgUcKej15FpzDAughknyRv828SXLroqTy3gshS",
  "key38": "3Ge5iFtPZHgy2PN8x8of6eYc5WqcK3XzfEByJRATosbkZ9SUC2TT6aqWCXBUGmeTsvvDpzcshaLtmgy3KNWiJFji"
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
