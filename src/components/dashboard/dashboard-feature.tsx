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
    "686BBqLsRjmJ3wBkcYrnLb74VcdisJnKBRb94Vg969HZkidqzxbYmW15b2gdkCCJ94tJBm6D3qh7bUep4TxYLm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668MALZNwxEwZqkx9aXrTSWbXVAyVb81CeXf47smKnP5JJQKnVjCqV7JWihRWmv5nVZPohLUPxdZFB8NJTEAzi9Y",
  "key1": "3DZBySSABvmDGFnMHWJhUpUS2HbCkZRZyuX65UsiXrZBFMkb297cK53bBxwCARCwBCZNX76dNgcZqmqenBheFD5U",
  "key2": "3PjPxD5RT34rB1HXeZ4Kav79aKWNstXWZtyF8W9pdgBdbUQZBP8W5FrDPJ2SmztC1zF4Cvhmzzqfb46xD3L2ckUN",
  "key3": "33B6x1SrubcgbexPoPuVJWcKGJe4cgLjDL1v6LNBMyxAqGQNrzzNs7YLXqcDzxQidFGAAEQDUVbaLgV1zY4A1fjV",
  "key4": "2v7EG6gSM6MnNim18WqDyjRs8EaUj31cvaQ51XjH5nRJMApDdPsJ58NWYSzeeqSVUnti45SnVhtvNfM4N4ebjDyR",
  "key5": "3W614zwmy57oN3vCG5UmHkRacnu7MAn7FcSswQefFNYmVHVoPDoXyXGUQSnP5LLKjQUMfa2swboh2Kt9YJVGSo6d",
  "key6": "a1XheyyW2iBaid6vv7WRxni6PXm63uFT8KfYB6HSvHQMi2pMRE3JtVRRjpKccsdhsisrqQMJgxVmx9EN7FN15xa",
  "key7": "4BmfVVENTkpWiqUGZ47nZgvedZskcTGBPUXcuRrCtTaKqHjjLMQS8cT9V44XZYbnY5mbPdaF1niFkw5qHfMR6hKF",
  "key8": "4bFKfTVk2RBsBCEwCbtSq36Y7fHQwMSjbsiDHjxhXVGx6HCLwfRPjg19CswTrPobnJv9zjvsU89PhT4PQgrv2Ehh",
  "key9": "3wPPQi4RG3fUY6y65i8vGsmz9Sevz4qapUg1EV74sG1vhaysS9Vw5Bzm4DWjvtE8VAiFcimmtAzRtmdTE5MHTDKu",
  "key10": "cPqqJFFQVuzc52PYvduCTQ3QzzwEh3UqH4ASWqEwn7DSdoYRC9549PyehxisniMn6FhkYCdzxcU788Mjw6mqdUs",
  "key11": "5Qouvfn59smVzzgAUX2A7P8xSjDKSaDad5cZ2A3fFPuJ5exinwC3UYRWg64kc38KteGrb1NQwcHTYW6Y8aE99gJz",
  "key12": "221e1iMdnNurHbWGx4SAmBQ9R2Gkw94azWJUzbLStZyUVfLa34SBwpp4LLigh9wbEPZfuch2RVcSMfBnji7wuBke",
  "key13": "XP6GEWD7mYr2HfHx9cArKfUSP9UUDJm4KvZS2pFSYvGsGRsYytzGQT8cdkCxhG9nEJRBRe781jYEDtVktHn6s62",
  "key14": "3KMTvvD8pRv4XG47hu5Lux2hQWeNjQWi7Dy88QU7ekSn7v6ZcVPgogiqEWuLJXmCYnhAVJxP7n278ReyFuAfr7Q7",
  "key15": "4brnkKtdRvWshCAwppJvWZjLkSs1qqSNccyC8WK64YBSNSmRTCe95SkMvifV6gwtYkhsSJSthx5n8rQWtCwhBkk1",
  "key16": "54Vh4Y8aQ4oZC4X9h9Ckzq6ouN3eyNc4XhHMY7JAR62dkdAWDfAnNBNu8qTfjuwpcvVrdvRUWjsLzXQrL4cvuJg8",
  "key17": "4BjPQsQ8iXP26TLyMZ5CY4eNNDNJup9Rknr6GWPqW2YSNDoAvNuVMLaZZBPLaVjKvvDBtV22cnGjoqopr3hdXF77",
  "key18": "5u9dPHwb7JtFPKJ1hAhs3QDSgrGHQGtgDLd8eJFpXzkXnxSPhbBLauwuLt8G6JcTx86ApHpQU62v75yAAbsGotnM",
  "key19": "3AWt4RueJwE6ahQQfNNZYwXSfcXRXuomwUh44Bo5WtbtCZxRc98P3dmNyj1wQtLjzpoW5MkoC1C79tMNpwmEgCpY",
  "key20": "2daRDtheVEv3ga1czEvxbWbFhDjv5q1ULkVEwsHgHrr1oK5hX5KawTjkobpWYiHFGCKYsGHyFaSgzsrW2iLN2MNs",
  "key21": "4KXuodcwYdFSynppmJc9fzy2yPxfBLwq3SHiLj6AC9q3co5CgxbKmD5g1dG8hRFcRG5iNzf24rY5k1WJRYFNEGNK",
  "key22": "3wJoCy6QkyZz9MZtaVsvcGQDvnaW8YU1S4ZusytHrnS3XySeRnB9ZKgGPcnEh8n6E4LWepn1P1V5KhmgjBCa6YVu",
  "key23": "39SVfPGsEkd2H71ZQG1JkxQNnPS4WD9GPa5593s49reFUR9wQYuURjqRLNF6z3mKZLiFBDPitATTmoJGETUX2itQ",
  "key24": "32YKrBq9VofPwKLUJLxs1oNktDEifJubtQYfVibkgewFnPyMGdScwBW13ZaAxt73xc46DR8x3xAUjKzV9gwdTzct",
  "key25": "4pKBgBBuxnPkQYYfNkWzr8edroi3Qb54C7Appg5sWkir1G97ZByoSWSvaDeUmXuW19Tqt8qsbpcHRZbcGHLJknLq",
  "key26": "2ZQftQwFMHT8D86HpQyXPSKg7UBC7gLKmeEsuRcqT4LD6worBHK2Q24QxgWQSnHsrrv4HSYMhM4TJuMMKCwZtkwg",
  "key27": "2V4A3c3jSutF6zPHiriwKABt7hbmfFb1hRr6SaWX96MrhMWc6P5oEJzK9YW3UqrqYMNUTNTXE6DxyynLgZjAXA8A",
  "key28": "mKYCpCMVXWNfY7pmwmLaDSdG7fPYtYQqHnjy7nkbBGHes2vJPJ1V6FBA5edEwwYFUmczDU8BHDPCMe9gjTA3nC5",
  "key29": "4Ur3JVLm4QsiGLVpFeU1u5JKcPHFwRdTdQ9q4GzU2R2NkJ3ZmwQuRDCUBJPLGHFudBzUTSeuQiDUS1frv8q8qBpE",
  "key30": "JahQXK3aZB7riRZBiaQp1skoX4mx6jdyskqeoSn8XSsSHwNMRhYHXbNQco24697T4yTg9mv4bQhdxL7YtAWW4G7",
  "key31": "4dWpVBherFPRV8qbnPJfDBarT4ibi69QJ77YFYRdZGhy8BGzfgsFPZYnpPD9Sv1k6DysakZRPEwNufa8WSW747W2",
  "key32": "58uKXe9NPaPA2t1i5vWbHzoMjBJ8AR2fey5zofWvEZFesvMrgtCS4sWmEnGNfhpxwZD4BNyY5xG3eJhxmAsHVfXm",
  "key33": "5pbp7Zfs8hST7ywAJFWpN4F2t7vSqj5h6p92SRPhr6xPtiqRJzFWhE5vfqaQsWt2hhyTxhKpCEC946AQHPriR4db",
  "key34": "4aUA8W3wwDWepdsvYjpEV27PKQtq7RxUoYMpzyrDHdikjm4XbYp7cUCkKrwMbcU7AHAKAog9VxGgwtn8C9LTyiki",
  "key35": "3kpoB42oq38SRSAUX8SfXD6SUL3PhJCQkbH4pC7kwQesVK8oV6EQiJB4493afvmN8tAWpLwyiwuAX3eRxYquDUAS",
  "key36": "2sHGeVUCKprJ3CxhjVwuu46SbnpBPPZ41r2Fn65gJuXe3VLDtCWjJ16GHG1dS82ZpD6q9mMQzkK4gotNa1b5W3zh",
  "key37": "2zZgYkmegFV7MwZu4KPatHLSLq1AxVbzt9Ei2CXBs5sTVa68pP9JXSQSZfeVWAsh1x7qqu3ErDCyeSpRdH3DfXZt",
  "key38": "vnRUCTiWfKeXxgBz6DmVN4LrJNq9kyKPCg5bC8NX7tzKKCQHArLfXc3stdGsmY2dySJaPYJNqqdpTJrkjMKeDXE",
  "key39": "3wcMKL3Ge1NgQVXMMfyWDNBDzVJHGBKdx8VTysJGtWx4isH1dapQ4rBjxfoZmgHzrSNdfVFT4bJiBANoFSTbhhr6",
  "key40": "2TgswEiPEratvT7cjch4U5RawkAt6G4sGdqTQrfCmoA9pJZa6nc3J5gtk5NFtfxfQmNXjxvPEWyTNHNs7pK7cmaw",
  "key41": "3Z4HVpycgnsE35VAjxKe5AePRvPVwAXURM4K5ZWEaDvTeBh12tyhrPJoXFZKmsZhGPp1uyvDDAJ828ZrpMyJpyrc",
  "key42": "5tvVU7oBJQBCHE7nFCz1frTmpfj294kjVQSYJXAMmz6RBKJQvCVg2R1LT8brYZ7Mqq5QxXbxpkMzdYsuMpkqEdD6",
  "key43": "2SqA819L8PqbZTZswz4X6EuS14MCYoN4jRC6n7QpJXvdF9FtdL8gWNqocKstxC8BLgHjQTKRVfaxXsgr3n9ZTFjx",
  "key44": "2ZVzoUTtptoiM5GxqCSRXmWKqEsRKpddxPM1DiqccLwGYJyDoadEfej3TWQrJqMVsDXYrEA4eMXiU9iyLJS8uZPb",
  "key45": "2dQMvHGFSfc8fXEcsCGiTLfUqm9ksi9pHP9e85e6qeZmvZii9Dsquanep3vd4GEMAAizLLKf9PqKCxxd2LPQiTJZ",
  "key46": "2kPsZaioaqmNwFsqGN3Gf5BuwiFxgBCJ2MJxcBjC8xGZhKspQLBpfNga9m2oE6d9eZVpq4BqrcDYoaRX4pyaQmHA",
  "key47": "7FcBGnnfYCBfic5VnbFVNyHGYm7GGUNZGwPPsa5p4xWvpLwQZH1Q3qzCAyUyNCNbjnd6jWvJdCtM1cGAgGgdgAt"
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
