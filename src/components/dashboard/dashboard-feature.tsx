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
    "8heLJcwvqevyH7J1nJSCggV3YoH5LrCZyzW6wogaR41ehEFtGEH21BfkBKDahYNxdabkk9CJfJU353k4uzoPeSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dyn2wLqQcBxTzNmTj8JczGfeNDZAz1AoBoGkURXvihpkP6ivs6CXbho49yUHSM6Dr7kvCM9e2BzTTV7hvNY3euC",
  "key1": "658vQGWgruzG2q4sHzacUTXXDRzG7y6aoAZyxvU47Wtqj4KcyGJfXqSLmiqmnZapLNPSoKfXuDMtB9QZMZepEpaP",
  "key2": "2D7JK6yuN7TUhR8DmatMt9eK7RZ7FoD8x6aTJyC35kkMo5pZRLgYeXmcRBoCY6dgVr1kroe2h6RSnhjhZZjMyLbF",
  "key3": "HEUNjmarr9EbwRKQUZZVNUkrsmDSNVgvcmE2CecVNbhykb7gunrWxjGAqVfW6JQ2zavxJCJ28Ygbf3wiN5C7J5E",
  "key4": "432XJzA4KURY6ozis1H9M1kPBhE8pMQwrGVSugwxVwKkPE1KbGB83UNswXxNUTiZ3vW4TdUfhqptiQV8GLwsA2nX",
  "key5": "N331eGBwAM1Zakgjrz1xRsGTN8LekTZTw1Abw1xAGLtPRjYWhm1Wwn1oiuLk4Bm872J1xCcv7KcssZcb52cb4Ti",
  "key6": "8fVokiSAP5prmrJpFtQq5xayaJVTXFHbo7yRAQnyERLtpJhsoVrbpsitUk8qi1WhwmWJSbFAWjRvZhE8pg7RUj6",
  "key7": "3uCxecJkAQBbFtphTrz7HVKyh32SJWpnQVSCaWpp36NpydHqeL7yR8zi12dSfujyZN4zjooc9jwhKFjDk1Jyizfb",
  "key8": "5ApnwxtbPb62kAzp5uwHEdcYkoxwsPbuYz5edWZbkNQcQfdkhAZEPTsys9HFho4kExSgDo66Hh62uwrrPXpfMc6C",
  "key9": "3oWJEKqZFawBHKThbVWokFJnqjVCCeHS2sZcSeKD3MHdjCRgUWZcgt2GQxXV3uAyj6bw9DDQWXzSezEqLx8oiRhx",
  "key10": "2Fp7FSAgmW7NnWA3gFRFRXmjsC213QfxKSuEXCGDpC7j24dwemVPVzvM6sZRLpzToatr29GPwCkCJuQgRD31yCnA",
  "key11": "4F19wkHRd8azKFBroUQmaeiJLmB3ULukurZEwGBV8RsNCzkHL2MQAxmxptFJGT43pbYoPYUYoFXKqiMxhbGWX9jE",
  "key12": "ZMRtJXXUnwLnkKb42WiQuYcfvfXWz4KtezQUqoDfJ4LQCB7Pqb4TfdmwR3jvPpRySc2UaDx6F6MxytWMXTcAYc8",
  "key13": "7qpjLfADjBfNMCSQiZ9sArYwpkccskVfCt9BN1i7dFawEVKyf55rXw3g5R3EEUkDVQz7Esb1c9rtU4ZZxSCZ8VT",
  "key14": "YTVuGq17JxCkHQ9KeBSFHkD4Cv63qUjus8ZV72YNJntid3ZXNJifqV88ZYni3Vqe5ofNdLtfQ4iSKqHcwp3JzJn",
  "key15": "4B4PSMs25qsrNiSv6ZgDHpHabmfnmiBKdZi4UgQSvLDK7itkx9tQ3PEJ6m76KegDccRkYKsVg3gjYWVWm4DNCnjk",
  "key16": "41HaxtamWYHEoq7ykP3texdc2jtf6Sq9oV4eSdcFGukv7BZqjW8VVdr3ydMqok786jf8hdsqwgNCxLCZdkKm9Pgt",
  "key17": "2gapnmtsR9zMV2apfYHCEJun3v2ix7WuupjYPpn3FknPeM3ftYVLqbhj2oxUjxjTUsPkfDwY24WPKc78eU6ASMib",
  "key18": "NR4dsuJGrvqc69UMshJM91PcGxk3Ae1qHd1rjqkFwjvNWr8GAZubF49H6rDeUpajQeDaDfy8qXSBGbmHfYugBHT",
  "key19": "2cQvBNQKbanj1uN8FcWi7ZsgA5oiYtU8YLThQ84mJUpTrPArv67bRHX4CKvAZynERsBLMu1mxSDhSGtERGRUSGaH",
  "key20": "5SH1ExuvoCK2Q3edBMA5aa4RQPTbbWx7xfX9snhCMmu1CnqHuNeaajUp8rSJkS2Sk7P3KXG2aXNSU1TYHfRXVput",
  "key21": "5f9LsBfjWqymyuZuLGXpAdNXZMeT5fvKteYZo53do1kyHXoAPG6C1obNtQAx8pBgqJMTgU287WvSzCMe5mwvdCH8",
  "key22": "3dUG4V9qVErfsbSygYtN6f2bFAnyBa7bBaJ7Tr1wjapWJRh9VoWZCRjv4egHt7qcYq2AjcPvRtCnJ3qVgnfcCDyQ",
  "key23": "M9SZBMiBdb2zHA71EeDnKendZnAHfo486R5xN9LHKFBpnWVp5Jx4CssWkJHoP8RVoUU8US2hw1wycVRtoWFvXj1",
  "key24": "2GrxcWr4WDW8zT9pgtVyK8jghRmtAg4Nr9K9gmhc4GaXxKy5zMMzzRaM7xrJwFWNzbZg5wGHhHQgnhcHBhey31JE",
  "key25": "41pu4QwsQVdhjhNDs4WEDVL6Drs4tGhN9yb48xDjf4qZqg5ZVMVqSuDMmTQprHgUiqX7nq2FygCLKknKTUe6jaaN",
  "key26": "66FU2F2km8s7gaNReWpffcdm77L5hvep2VprQfYjaCqGwTjHzGqbeijyb53ka5bXVBd1SCkMFmV6PosZj9JCzF5H",
  "key27": "3hFf7ZQ5MiaBZwK5nUoKM4sVji9iP1Soyf3foYAGFKejwrX4KAcMgsHRqniiPa7bFHvffjdNF6CexnW4JxB7DdMt",
  "key28": "QnRufJrT9dZPGUtuNHFPCmkyGLB1DPoRLWbFssNn3BM5WVP1Ny1aEtRRuBHbezchTBLrLTapHV5hWEzwursQGgB",
  "key29": "2VyRWakiG7UbuZ76SdVoReiDjckXdvLK5TNCEecWtqYeW1iCZ2fX93eMjyJP2c6rEKVYBrrDXtvJFNGn7SvPkqxP",
  "key30": "yUy4xGYVsv8Ju1USQGCeNsNY5HQhKtEteUUVVNMG31odmenXEKhRYXRdKuWTSPguQNNfWfvKtk5M8HceBVqN5qH",
  "key31": "2s7ve5pmf6aJhCTAfXp4M3xhJqG3ydD9zrh8iwp4Gx1vo6L68qk1EQskCMNbopGcePYQnmrH9dfaoxjhgSU2d9XK",
  "key32": "2Yw6vtKcpjwWM7cJ3H7t1EpbtB8iC7cANM1TQ2H253zevuGjjFxLzwa4AAW3ir1QN8MrtnkeFefvsuSD91qszYy7",
  "key33": "TeM1qrw2gq5xgHkJJm8CdxZBRGyvhqp6bZA3ukJuNWb7WGtT7MchxusTr36tAvnVCnwnKrxQPkg2dCYc1PAoKJW",
  "key34": "5wJLWiyPo4b9eMkUxAm7fxPKdsN5d6GZ1erctP7XkbuRHY4ufJoETdv9CNUQtM9fyCad7MnCa6ByJTVLk6RCYbZ9",
  "key35": "Nq8WvZy7MvGUowWBTQdrCFUb7ikcBj4Mby8JjQ6MAwGWBiqGgBPobN1EjupMLt5d6sWvSokyWs4RWGkeMXHpxh7",
  "key36": "27YzNja8KU3SDyqDyNmddPqfbNhyGBWkBkAvE66tMZAMk83JZuYWZcVVHS3eAfZ8NGosjaUi9YiqeeReTPdJtiN1",
  "key37": "4357HL6qvcW6G6HviGC6863nU1Ly8pMX2EKe2xjGZ5UfMsjf6WK1ZDn2on26DUXjvstC17BbQyCtVucSfi2S5Npo",
  "key38": "2jpmaYUG4w7yDMnaZnS7pV1yAGxrmvcWfYrjQjPkRAQYF4qECMLArm5KjWXku3fR2ETMbPCKGmTnXtRYY6JJToN2",
  "key39": "3p9j98WdfEBoLALpHMThYawJagb6AJomiCDDQWSZPE1RQnjanW5Lzp9AUjAti6zKDHG6Q8EtH48uTE2tPLb7kuk2",
  "key40": "4N818csFSBSmxpukrytq9bokLSqGSqVsgDDfs2WLT8v97x7gMo13y9q8f9eNdGRYWpFhRBTFHCPG5XjTchueVKQo",
  "key41": "24i3gr7X5hyK7SNpjNjr1uNhqgU9Yv6aSYi1kTBzb1uKXFxaJMsrXYn4qtBavYD8peu5QRSKH66Zr9eL3BqYoAPN",
  "key42": "5T6wMW6ZeP5ap682Dak5VJDkHoH6iKy1hA3apAgJ5UpZRZbk37LEZ7BQo3xNvSetdJD6xgyqRUYDBqr4rEMSCGrH",
  "key43": "3kB33VYMRpAzv4dKRGEhhu4UcSdw53vTxCe1BWTQrA8fNAkWdq2qDuENCGGTXaEm5ZfvaY7WQvFRBTu24Axp22qp",
  "key44": "4taXBTQP9FyuWEhScAkwYQ9Pe8RYvxN39sq3ju1a8HCxt7Zcadf5QKgU5EAGcxA7PkYFEXDcqxd9v9DESLk23YCP"
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
