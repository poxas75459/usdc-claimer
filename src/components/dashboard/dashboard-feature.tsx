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
    "2Ss3bYtcuSkbYYHdPCgZWT4fZdzoRnnAKafcuv3ht6dwsAcmXL7sBD71rpdnrUNDJMYviYmtSFt9twdrYRxHU3AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m45V4HMyYh8FX6Htck6TPvRpMYvTYnCePBu3dgQiZiYxKC2npKjohZDtwgQeGuQ5ZvyVtWfK1xCBeTt5JrxKETb",
  "key1": "3kuuJDhz713q4AhiVHB2naoao9aM45nryfBFZX35KKBJUw7J68ZNnUAB6EiiGyXnidnEiu1o4WxShgtGe6rj4RZq",
  "key2": "5jHkhi6jQ8BaPxfLJNGEfycRKhstSUS7LuZTdkiGf8pQvaiPRKN5nPda4Hsf9ax3oddVhmZGz5fHDWSxSMYy6G9R",
  "key3": "3CVHzpSafTmCLL1ECBEw1z3q1sAPUa5B4WK7kr7tEUUdXtrxcY47KvNM59nw6fuVgV3j4sRxse73VQwHT8e1cgiN",
  "key4": "4sBvCncWxeUmjdKqF81y2vQJhMN5GqY85CxgtjFuFrfKh8XKgkr38qHtXo5CdFYaTLMyTpyBtNDG1RrXsjm9YyEE",
  "key5": "24qP1ZtG9ZaUrvDVs7dzQ4D8DsXULwvnchQ8PMK5GUffsoKc2hawZ73tsHGVZB5DcUPSbr3wUXNRpypHhK4RWTHT",
  "key6": "3Xa7m7aqnbhzUzdG6ukKuEvgJ5ptXCKPKkvtv9riv5DQLW8ABtKPtfurbpw8wtWBm4hDtDGWSR5hLbpiqXFSd7mM",
  "key7": "3qPeCyxuYyy2SG1f9q8VYjiqcvqVa6Q2jCsH92nMF4Xb9HoaBJ7rUkEYe3Wqxzp9w51o3hdRSm42qYsTzcVVsJhm",
  "key8": "qve4sMSA9uthoeeniu3T4V3n14xMVSPz5XUdYpYDwWrLkDg9towjCgygeXE81y69mgmvZnGVRVf3XQ2385UXuvJ",
  "key9": "hCaFf6xEVrE9qLp47vFVBdAJMmY439S5aGtvfZVg2dVdHqA5BbCyH7eDGmuEfSNQKPNdPKA2moB4Pi1jD6Cyq4y",
  "key10": "5TXjwkRMjMgEofyPHFMtG8HKvV9V14bWAJhGcrHjBN6vt3FxMSoZnbK4uEKd7zWaECQFWkWcVmsNaAQVJ2ges3V6",
  "key11": "4Cpky3nN7hMXtR7BxCk5JagZNvJZ3b1LRC7W9oVEYJo9s4QhNdmjEUCaXiBHYQ4G6EuGLuKvU9HFfgcQdjuMb5Mm",
  "key12": "3jkSPv3ucne7hT1M2XQdk8kvrRGgYRFx6fFab3fFv6rquV5KRDhdqb3bK9c3hXD9yxtZz3EkfXCmyzisSYGqNCKm",
  "key13": "4ThtehjaUbZtpf9B7h5raDS2w9x7YGyNBx6AwQEWtjuiPjTTTeCi7WXu7Cs4LPbrgEMeABm7Dr5mZKGgyJvoUKh9",
  "key14": "yL62s44DW1rZtHqUbM6MSQd9gU3jwW1oLpGFipKeQEG4cX1u8eVqHLiT7yw21VqtPE51KLPgQLnHDvA4KNaHSoC",
  "key15": "5bfYyrYoWeADgQh3EoAZjL3KqdWEjo7dYnVpooihNN2u2PEzsTndduwLZXwAZcQZjvg4bNsas3UZqmvtEaw9Yepa",
  "key16": "2Pk5PKs17shaMJvPj55XKj3eYozdxFCrbRSiNta7vjHyp4CaQQeEgj4fQP2ortN6aZZ33CT19y5uVe7ELabAT5SJ",
  "key17": "4ocPYJUVFrNRxfKvkyxZoBoNm4MFbepJm7nPNJQ3fYAQW778RAuzRcTLaHfTLtWi8Dy8EVPycN6mgBNHpfVFLivc",
  "key18": "3KJCsukK9rgjTzQHLMMHcSNHxEcneckKCp7JKBUtK5XhwbWxCVE1oaKSL4v4BU2c8mumreeJdzj4BxvkQipEFvTJ",
  "key19": "55Gei7Fxfx7n67bmrRQfnGDANoZx7sQu2uVtCPNXrQ4TAsibsZWgc4MXPQ9GrC8puXiJNN76bgFKLgm6PrYtLBco",
  "key20": "1FyccbBm3Gnz75gKazhjhUbBDAGZkDXhC6N1TBVgqRhEDtqKD4KcCizr3zVsH7yLDJ4BsodhMPtiUh3ehvCfJuT",
  "key21": "3DUmmYzBUMJ8wn19SPY2FdHSHVgwJGaVgAt47jBpbyM6SYCS7DDmfakxXxpgiq5e7Ln9djbPFjRP4QXXgxTwLcJa",
  "key22": "37gVxaufUweWkW8JfFNPW6gpEw2M4CFcwddFz8o3ab5YfXbXK1K8XDYPmyM4ecR6XwKVLmjr6mY9W3Mp3D4e6YYa",
  "key23": "5URQMbdLmk9Fpz47xF8xja4sUuYfnpjys8483YLnYftShKmmMCungMXvhoEazBGUEwgkEcswi9h3sEUiC28osM1z",
  "key24": "5pYdSJcwK4fXbZ1mxWjLYvD4rW2HDaJXxbmwo7Dj3Y22JyjBrBRqj272KVYUX4AQMuF514ufpBFgW3FyhGpRwhvF",
  "key25": "2rQnrXuRWejMETzSTtA7wfH6ZaBsFexvYHNVMnBDvmpdL83Uuv8K4prKCqu8ZNGFPfuJA158AKBB1x66GbESUphF",
  "key26": "25SWQ2uKTzpDbo2ckiAqUYhCtXUkMPQ9AmamVSfASZKbd8MJFMvZM2pcgUUR6xXG8pX5UBkiQ7bDAE21xRoz2tQW",
  "key27": "5UDf4VDAEcWJDT2VzSExuTNJE3h9giZEeDyUBez1BrqsnJZET1ravNuPP5LVp42rsVZiUYBVqDv5ZTz7sCuRHNFG",
  "key28": "3DYb62iAXVY2TfXBFEEUwg5rQ57SZcaQJmYJqcRZe7rjY63qsKtXxKAMEEniKgXbXayQCNWApAaWY1Q7bdhcSCbA",
  "key29": "2Wyq1CTsqvkwMMUaiZQdYBfwtRUt7f2Yu3mEkbQc3tfJWVaR64XZPLFXqprBBAnvPtrgEGkt7vmEYxYQA529kEUE",
  "key30": "FZ8mnN2YqK4WMxbcQ4bwzcZJYvTJ737u4Kr3oPnusZZSko6eq2pYDpKyWrWEVGM4s9mExT41dECA761yEjDNBvG",
  "key31": "5Pa4p7Q9KnF5ZQBuxBTyXgS7WwqxFb2pDAhQKko4HGoARp3nRRf3KxpaSyxo4a28w2ZKxiGJ35xC4X3YHc7nmvJP",
  "key32": "5Yq2xFKHqGjvZ4kXWZgjJGaWMvFJepKoAQm6VRBJQDYW6cuVGKNk3xzXxqfkSBb4VspFsrsyDdcVaVapnrUacjiM",
  "key33": "5ZdK95UmrrwDKwpQmf2be8VWYVmkjAmDEUYbqR6pP3zwAvciyYg6SgCjUMiZZzbHu1eoLG24exqSTJSNu1Yb9c82",
  "key34": "4UsxCVHFZyQAbmvXwVMFCHoxxcwmcGPBtqUf2pfaeHLqDsv4zrXSRpX9ZGi5UQSacpbERTDMq7x3n12zdqUo1DFY",
  "key35": "33Uir6LZc2ERyDiiApPkf7CJ7CKNXVNJcJM2Kpti7HZo1T1VKh77xjTS4e7jxfJF2YxXPpXdWLdnpRrPeqqsp4A2",
  "key36": "5LxZqpzLqcdrzJpFUdhngihs8AuPgrogj37ejGjvbwgcvkyWqgMv8Q5CDAYuk8Czq7xEABfJrdChXGKgoK2fx59w",
  "key37": "P2ixcNDDUprkMQLFr9C1GFzV6ZxbS4eWFi9tbiRZdWhJvzHKBomPq8kDT8GfMxb7WcDrQ5Q3Gt4pLGLozT81Abx",
  "key38": "3PL4EAXYfPwH4aKvUj4KsSAqdXUozyhLsMFLLY7HtjsLTp6CZ2zsoZwsQmQuoyxjdr7LK5j7tN5zcGESLhxV47y5",
  "key39": "4nLJCHi4GjZP2WL7f6BMQP49N6s59GgDLvkHebLfBRUBoLXRSSRq2Uj8diVNqdJt6Ft8wo9VAnkzNPy4xijCndbQ",
  "key40": "4HucFLrDtYaeMrWTCdXHorHjyHoaZi3U9joKdwVXGyTXEcRmWqhGoXZbZDnK8wXeGZf1aMx2iJmz2VTGkvQ8TJT2",
  "key41": "4nHshQF4mxdRV3VHcHygJbcrgmhJocZRZhVLd3beraEVAuQ962ivrg4D1iUm35CkzG5Jqj7scdwowm9YqQwRECwT",
  "key42": "zB7YLZSPtDagk4f47CwWecGhwVyPd8YVNmVtTgcURKa29MUmLFP2PFYKsUigUJzpDP5PN2ofeXU9EvFaXkaAsX3",
  "key43": "5HBMnAhjkqRPDesWvUhrSBi7Dy59MK7FahBMHXbRsLZEszhZPxrj7df6RUFegrqWvifupcSqEDWNwhJtt8MuBM8Q",
  "key44": "63DWwWaJm9eaT6ebWqFuxFNJKmMg3CJgvfUarXdXU66PhiJSFyB3gpRABjUDhtPzsjBxeUFYptyuvnVCQiP9vuMX",
  "key45": "GA8jMy6t19a84zEHutAW8AupsvUEazTuvbAMPhzCcMPc6YDMtdsBJpbsxbaqGHioKC2gfFc9LrEQV5uaySaoroc",
  "key46": "3aZSafxP9JNj4Xg8DW2NGotsDqJBH6ikiSwAHrZAB7bUDy2cB4wbK31wG4qXuB92ZrLLwWHs4bKtC3DyqzZzRb7X"
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
