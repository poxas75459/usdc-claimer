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
    "2Q98gApGZsXNViRSnpB9oSJhfTcTwtxBqmwuWyzN95cxh39akNrzymWpEuaFBTbZGb3ZyWE2psDC9UUQNi4yj2wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Y5cdvUsMYHU9SNgtqH3WYz337FyZ2nwurJg6UvBgU84zJGLM7z7ujht4xjoSHsxZ2FGsdpsKWd4DBxW7Tu9Nka",
  "key1": "34BLMcdHRoEvcVnBhkshLzvPUikqaRJwsq5w6ozLarJqdanN5vkGfW8PBdPNudGsaYUf9RxQkJsPHxKhL8vsiVpa",
  "key2": "3B73YSFvKKgyckTFXt5hBNmGPV6wV1Co7di3HeycRxGVNpM6rTQrecHyrzH21PX6Knhu5FwSFR4ovGVAeAWYEbDx",
  "key3": "2xZmAf2fjQCY3fVrkRhBJkMTcuqMV1bBUxKbksuZTSsWpMuyzqE2RpvzhSkx3XF7Yb6ogagtRL8AtH2PAYatwtHx",
  "key4": "EAGdRW5FgTiTjpLyHAjx55XDeoNQWhFoGUzrn5yGNzRf9RFc7qgLP5nkVStFewfJTudCcq7LpHdN3DyFxCgD7ir",
  "key5": "3fCBPjQg8T8hoQWHsbL9SuqtDhUjVEYgtfK2kKk8XRrrD4rrz1TC8cRBeKntPTmRXG8Qcow3ZromfJWJ1eXhtu1H",
  "key6": "4uawP12TegGQSvsKrWYY4ets2hubiRHby1EhuPDybQ5spkqcwcPPawcvWvCZxGoJDuCseiH9yQkYHyJurE3ngqZh",
  "key7": "4d3khXtbpGymCTkeuMQsMTkE19dPasK8YZuuoUB69iRQwTriDfPsARECVWPpEjxHomGi7JiGTU4whJSVH257VKLZ",
  "key8": "631hTSJV9KerfWpPBtrYYJpeN3dNswbEXgnvN5r4LdyPJVXVA7DtiEi6Pfqbd4t9ahHixvJEwMfAWzzbqKoQZKw5",
  "key9": "FWuXcFV4ic4HdDdqTTShUJjQHZ86JaPvr7cvWzduHgRmxsmxzkGyYAFn2cybJZfddzpCSbguoxJPMBNSBMAij8J",
  "key10": "3aRL1CD8ZWXvHnUa7AtBNoBw8AJ6Pcmi3P3ioXbTwSnRaeyJXY6LZTLptVaFU2DZA8Xo8DLFJiBbapcXeTBbb9vv",
  "key11": "XEMWZGMRkx8sHEqNAgPRC5eso2AGSc8Q6ctbMMP86KMk4cGyhK1ENP1sQ4VaYixFxzvqT1LqdiPYZKCYEMXS5f8",
  "key12": "3hvuLeuN1uS3UYpWFXu52S1n7u168p8vmYJ6HmziZHzWHCwihGs77CgqV4Ytm5fZpTzPVn9u1wvzXVLftxwXTnQr",
  "key13": "2zp8s4dTyjHgZVwhcVKEDLMgtbmCM8JmTrZhGk3zv144ir4vUDkTtFL9JH3wv33Aj5QhtJGv91JYH1hWwtHZfrAA",
  "key14": "5EHy4vJsKRHEhHddXBKEASRySiPrwPrrHMUCkRVjFcXunq6K9NVz6C43FurSHxGtHQfHeVTycQbZjKqh2JZmTcWg",
  "key15": "4ZM6Mx1cPBAAQkW9EuFy5Uek1HbQ5rQwxpk2gXszQxprvCXEkWYWfnJhnGFeGgxS4yU3oG29NE8Scf1Sacb1FY94",
  "key16": "uWp3V8vr8W9UnGyEitZnPsKZsnVBjxnfv25umQGAgXzHLs2VNQaBBDuDgGWdywSFkWxoVCY1K2z94y8962qQCf1",
  "key17": "5bqFCHt42ShPxdoxgmY9U291uxCDR4eJEaywv6gHtizp3ayhQBhYh1e8XCtRgLiLnCUgmvDSd3E4bkSS7hiAtLAP",
  "key18": "3ERxXSRqHFm5xANiCet4da9CAWSERLnCKEqB7KivgYMKx7yqtKQBCpqBMwtouH643XJqmCo4bSrQrJif3LQsZGC4",
  "key19": "2nBYibYg5NSrsc6fUW65sx9YYNYkB2MiodUsnY5VMXk27HieY8PkycurS28sxr9NuMqMkwwTMJ8PVv7fYat9obqP",
  "key20": "em9w9fbmjodEWceeDtUtHp8aVamHtuVh1fBMWkVvmRCQUud5RNg7XdpaPUygAjbugrUNqKpEuLLFTY4xXYVbwMu",
  "key21": "nHa7n4VqNkL3JV2PKkJcPAxKqqkmQtxVH992YqcVb4xXcssZnB5FeEFvzoD1o4zeiqHQgpTuNyZs1oFsuK9LoX4",
  "key22": "3GbDdf2UEdBxN2zDrGhUa6xWrBWNa3AB7633ya4NtHtGsnNpZn3pHZ97boZg26CLHD8SJTTJjY3Pzibeu6LPkm96",
  "key23": "2yPgFFGjwFtKaywCdrobFjRzRaQitU9KHETZ7zhd6NYjYj96dCn485mCDJGdorfFVJ812fxdBxxa5St9jf6Q38JR",
  "key24": "5jnpnNPdkPXWnxSE4FeEFP7uFDMg4FfeVLLrtzioGNY5gB9N5yDxLi2CDCx863RGg34R9z3jiU8bjpHBWc2w3x9Y",
  "key25": "2WkrnvXu6EXEdvCsoLcFoZmCKPoNcSs3a6vvJwwFRL7XtXmhpvM3nSLbsCDAVxdtZEcdWXmZ5p9rjbbDKWZatZf6",
  "key26": "4Y5fVhzGE38J121PagS1b36ADcuWJk4RkztAWn8M9Zco6oRFfsPVJdySDqNQhpT7dU5WuunN4wAxomp15UrjyWme",
  "key27": "4ceaQ9m2mGBkiD8R6Zre8Qha83rryDYPYF9Bbagizd3xqof4euvCefTxDUeNYkJfDHVhGXqp5RSrKh3gWNJ72opH",
  "key28": "EnAQdLRbzTB148zeo3VpZ3vQBcZr5HgMva4PUcwbZnwiqe6WHXD5a5KA7cnQBDEDyGzB81tnBQMVAAz9Yg83Ja9",
  "key29": "2CGeFrYSxecK96Urn5pwEwaQZT6FJFZErBf5PfZqmP5HfNcZYsmMm9CCkGtQsMa8XetM41a5VmWw34Sk7A3PyG13",
  "key30": "5Gor2GEG954J5PmyMUyWGXtcuytr6RyUoFdVpSBUmKWUqq6J3VJR7dk6YgX6BfsSVwiuw8NRq2E4oqjBxzNaPXN7",
  "key31": "5Euj8gzg1hEfz8a1ADH5R9ymt8nevufbBsXvYjBuSGFJfgPURF7LNAPMtAnrx1WZi5U9tTSpSquS8xFNvf5QEgmo",
  "key32": "SmXPfGEk3BbVTi9aeDovf85B3EsHtcKYx7WyDwp5Eko2MJJm4nTKmpKYKmV8fQvLQrGVDE5Mgu1nMWNxeiQWYhh",
  "key33": "3m3RJCwzajPc2jofN5v7eMLEP3PXd2rpEc1VagoQhU4hqbd9KE6fFryRBUHDZTh752T7nWtXPTtkuuhoGwueeAMR",
  "key34": "SdrPuSaE4jDYbkiYYuPTcuXCn9VyuMVbWuXq9mDnkwRvpkGiqxfE685QXuYUfJbnTDeSxvAzLuSEZLsdC7wWcoj",
  "key35": "5hiewcP9ffLqkbQhNkgKcpyac9C1UTCucmaEbgPSK9xETG8Un5ZWouBkp4E6UsTgqWPcYkpeKuX8MTib6PW8Jkpp",
  "key36": "4aisWskACRfgmUUqL6neLZZMCCMBkKzLF2BXWuVTshjA7N59mUzf3GDQi2MYHAdCywk5DNYi1ErVVVFtDPAY3Uuh",
  "key37": "3R7BHGDFsTaTi52LWhVuevx2pnayVzbeiWxD3ZEJKkjGixAjXQ1HBf7Ku175MX8F7kcYbcXEtk5TE5sH3fhds4zD"
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
