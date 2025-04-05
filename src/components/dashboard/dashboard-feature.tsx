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
    "2e6y5wb5wFUyg9JrCocD24Aa3G75N6d8sLRTwDt4hv8CzqeCYsqQWwU3F3k9hMXFRdQdmtBaBd623ho1omJn3vYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6rda1HkpfwpLKYmYSmZTfc2GE8W4jKemr6zJUEjZ2prKC4zrhzCkCkJ9SkCh9JN3MAnohuasQuLtsxcgKtC8dr",
  "key1": "5aBKEmUNM1KKwzDAeWS9rvWZtxX5wo1v5uJsmaUuLQ7QnRht76nRdyQS1ENiXSK4jFx4Bi5o5MTiU9CAmdB3BwJm",
  "key2": "2norMhza7XiB5TQkWJhYn3fifJuwfcQJTqd7ojoPJMqEiBdQWZYuezEgR8CLqD6YKG4Dax786Zxecub76N5KyKes",
  "key3": "zgTmLSENHYAveitC6MvDp8ahvVoAWympEZG49NQiTUJpiLr3kaqfEdHWewwQMhVqsD4qCzPWdLwR8UQmEzTb4Rk",
  "key4": "5maTscDoWKwRkk1QM36XKZyPfYdcsGn5thGuLH11xJ17yUXb33mgf63dpprnQeRYsYsqzYBZHZq4JMt9x68sHk97",
  "key5": "4BRB8ZtAcWwdwYSQwCpTnCQMWBoNK9npGjZSm1a7488PcL3bJwmt54U5ZWCAoBfimCDeoqmdSiQgH25EF1TKDcCE",
  "key6": "oRPS4DcbnhrdfYVkXhtfnE5pmZmzTAZoWyDkHj3hxFGaootDJJwSW2xeAZzscioSfBmmpFKSUKyUJSpbJmNjdMG",
  "key7": "j7GkTk44vky3QVewyK79tJcR2fjK8tVR4fPnjau8QR8gVJoQ9xiS57BTFYPTWXWdrA1sN7yR4ftgMaU7o989nJU",
  "key8": "4fteHHsUqUTYfcbwtMbq8k6dpBK8bjb2yq2paFwmr3Luekr1kngarsjuaLfCzGXorozJd878uPdgkB2VnnnU55r8",
  "key9": "4SNjrNhc9tmoBqhyxNHEk329ohxNcN2Khcmh9XU9xaSjD6rM1k7FgFiRHDa5mwnW9amZTFHv7x25ZzUoBxFhGY13",
  "key10": "4hCmGUhmqHpnJFFARDiZLgPkvYDtmPtoBK4kmRqyz2vpPNjZcpqokv5yBd28kpkKtEUTmmkLc9MMbNhzAT363KnW",
  "key11": "3hfznvQj9MYMLtPtQtShXjUUUJhLan92cR6jTBiuqWa43wzwpKSBQaUqJFFTucwCeUvqUs3mi7FCgL4KCoahhY16",
  "key12": "4Zmk8S4aGWsu9makfJUBPHA6aXtEvf7CLVDYwBVBLCW4FDMDA5PjA9YjnP7vyR6x3HPZHZE5eqsBBZSG8byyxyDn",
  "key13": "3q8eXFNfEEqQVYNBZw2RCqFUSJmjNNmByjfLRBrKxdGyLJydedXxZTicyXdvYMBj37gcgqJHCCKrUjhukbroyFVq",
  "key14": "5fHvN5Fv9dzJGjowMynQx3b7cZsLjitJ1EMyAqeMGuzB1fporXidyFf63SufhKH9LYa1zE5WxVGw9pGU9nMx7MP2",
  "key15": "4vLkbP7ab1HqBP3HWhrHBH4au8GsFYCMyZpEaYkFR52woR2m8p815DPbDPHNJP55wDioWRCp4fupwyuFqNrevHSV",
  "key16": "5d5dYvKoBmxERQzRmFabH4reGbN58DAxiMa3aeGFm3pF2Fwa4RJByf4hguje2ePdVEnENCBtDv5du8uCjUXaNGWu",
  "key17": "3dJtd43cS2S1CM67X8P9z26AtuZHZ6GKiGFKHLGmLwsR7DQ3JUHSMG23GvZqRcWFWLbgLsVV9346KDAhk4ddCQTq",
  "key18": "5rH82jLVcN5wfuydQF2YtDRfguynP1RZ8j59eow7qhH7QGdhiwVMm9xpAH7Xo2wNDdESrvYPjUDrJvkUaEpke17V",
  "key19": "5LkoUkPjBYNjT9ZojfyisTnqmhdGR5YtDm5PWwHA3tPosjsnxsnXe1EPz4D7aTtT3jXnD4ct6yYwzm4edpLPzNps",
  "key20": "5hLbW9hCidvhS8X5XfFec87B6HQxDxJawmoByQ3nPdhn5mi5v5yEaDfHbx7NPRrrh7TMdTj5csN1RkXkUQpCy3ao",
  "key21": "59X7sDiHLKVvcFcLKrTLKkKvV9ZemwR1vzqmantq1tLXLSL81uvWY1e7W6odHWnt8dNin3XETLZpQMrf2E4V2XFJ",
  "key22": "3WWHammDwiqX8BFGXqpLCYtsF3uL2ZyTcJa8jEkgAgjyWFBzgDnCQck3Jn7i5dZt7fRZZeH3xtgWvREhbG6MosJ2",
  "key23": "52Nrn6BautZ1JBWxT5tqBw1xb9Ecw9u9BAdwREXAioSTkGywFzn4BRyPV19ceSaPbiVVXTSXrSpRg8gEcUhP28Mi",
  "key24": "4tb3HBPahbLjySUhh3LN7q1tHz3iYaSw4LWSXhxz6wk3Bwd97iswyRNsv8wtpDBGz4A2gWJUzNgbesfJJEchxe8v",
  "key25": "k7S4wjHYKvAnYcekhh9LWTNDMbZDMgsi9Ex94GVcAVvfPfBSaPeUknsAifCihzbnCm9XZXuC5845uHN8T8DgKDN",
  "key26": "EbNyvkW5hdAsjXHBas1S7eHejg4GRSkBNMSsBBDFHFve5LZMiQfk5A9Pmepq4GKETRSrhUmfR76nR6wGjVSfL5i",
  "key27": "4PZ5gmMqPeWnNUZyUezEUpTsNPYvjNdCHLty9UWQe9uhgfg3QEDWrYPxBKsGNSno6sBoLptBLh8t8zgAeRbn8zhX",
  "key28": "Qko9mSGjSv6chijbf2U3qaPYzyBKRxWpa4Tt8qMdj2NuCXzt1wHY7qULV1LfecAEYp5Wj217gufr5PaTm9bBT6T",
  "key29": "4aiZkAkQsQhMaLbjpFSduMCLfGYrDDmiDmtreF6sKQyz1ugaRyb3eiHg38LNEHdBUgtuiU3GLa3opuiQ6xCdHaEP",
  "key30": "5kfAx9G61vUjrCY1648ikGgZFPbHFCeqLQdDr46z749gr2ZoadU7rP31MY9HCPWpHSo9KutbUZUEpvb6UfHsGnzB",
  "key31": "4MGR7tEbu8gha3oVoQCeEuHpoktiUW7Dp4xFfbEzUC7xUYUY41oi8tc2E5G8gALpiFuxw96hrfohiA7Tfvn3SB8n",
  "key32": "isDoVTdwhEAW4cAUV1eWEQC5xwz4wFpBueWq8TZFM34TX2dj5NFzbFexPdCFSgc7tGkeUbijvw7GSF97oafoGqD",
  "key33": "3SYx4LXe64SZDEeAsiGd8hVrqbbEANXv9YDgQc2TbBfAtyciur2Ato47LBCHV8E1gTy9Un3efj646djeGavxy6u9",
  "key34": "mYLwyQSofhtnRHrS4v4DgtQBLjoStRmS9mhPQRfBrBVFCupvXHpUCmrzMQyxYHvU9aaF4UYQ58mhqEQYohwfmPv",
  "key35": "3p7z9ZUaNRHnxKZSL4pappUuVshfbtTTZGtZCcKSjzkdR6CJWd9Gd4KuK7acJNhc8qLYedmjAZsPBFhJXXzekyuW",
  "key36": "2ogNCz4qPimmEo2nctv99BLepFD7ByNERxHPsYV5tKJ3cUtdMb7FNw6Bq44YaZUABZywTpvGiU6XrWpE8Cq667JT",
  "key37": "uk7aceb5DLw9A56DdfXRtgEtnvwRApEp3uMNs9Mpco6Jyx87redMzZFvhyf4AiFnFeEChz1yJBMHqLDhG9V6Lwa",
  "key38": "LDUgVPF5gbhPgihDjrQJwoGQi7mKaX627oTonCxAt9kZzoJWYQK6RyzPb6DanbtfLwLsft9L5CCrFJtepWJ9iSX",
  "key39": "gorXdTR3sTCGAuxsS2mTXtxsdcQFEz4jk9zqpRE5g1zoxvCp3HAWt7aHViYNbaaAhbTgjR78fc7XiMwGzPWBgRR",
  "key40": "w1FoxJk5P9LF6e35dCuyq4fj5wnwX6BDRcAKqk9NSuBHMfDhNSPYU79KNKZkUcXWGFCbx1nnssK3jvSabJCg6ev",
  "key41": "4TH1rZFxFuAsVkSuvedR9KndBEKp1VaBDSHzTvPtJ97f5knmgk1P7HMszwkG8b7ayekDxxcY4sDb1Lccmofu4EYQ",
  "key42": "2NQZjHf3FnTY395bEjwkKe8g4yGPMrAD48JYhVzMtyE66Bt9hGyjqiyxyd481ARdwnEWiPNF9Dha3F7F9kiwXge",
  "key43": "3kMvhHHKrJCswwDSwKxcjbV8i5ZtbzYTUcsqhXq3dCN9qR9hw5uMVg62kLRSacwwKjeMwtzrsLvqHm5LazDrzf8m",
  "key44": "3FrS1QD24rBkQweDB2BvBd1xUeJKwxXqNtUSfDQWNqXpvoe1dmvEtv8X8G2k2417oQnPsUZb2Vj4w1PpVKg9KeFh",
  "key45": "565yVwZd3Fh2tA54rzPhqkrrKMt4QzHNmhMZRbzy1B46UAdNgEbCTv5aqGnHVwDyodUj4CTbaSFNpZF63H8vQyH2"
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
