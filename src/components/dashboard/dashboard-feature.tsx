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
    "31upR5w5eanrLuZCQTBFoEjEfjbPx7erR7V2A92HqwwixrUDg87Bd5M27A6AfBQ7T3sk7ySZ38i1AuZZit8UPoTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWUkFqV3w1anHwYfzrQsUrrLTw2soXo4BACPhJsbRLoDhLbhqRQDaG7zeGTXyFCNx3NGi2CDnm8AAfMEs5JBhJe",
  "key1": "3EyS2dVVXb3cs97p4pQTTWeKoJHuTRF5hFvDR5DQrRkWppKtvt29MxbZWUiqEzj73nGNfzNRBHNHF2RhmfQry3ih",
  "key2": "5YGkcy7Wu76JM4xhxtQB8FgXQTXUHZkjhkf8AiRWwFDfwHNQYwaAsvKtdkyxJNGxDp8xoJb1wV3HRDjtD4owu3Cv",
  "key3": "2oFeNQFJdizrJS8NBBJnKvsqCmjJHUy5RUBKWjbiNMRU6vwdWkwPxdHwAXoA1BM5K1bSsKGC9VdTwGALiUdDtLNR",
  "key4": "3PK4qufdDdNvZtdFF8QNbugQ2QnijzqSzSQ87TQk7tKNHb6jJQigNDLDPPFqyuiTdNC9Lqe7d5kc8JU8xuiNAe8w",
  "key5": "3so2uNhtYSS7317j3EyVa9nYfqip67iQkuHNVv5dPLC7DoMDvY5VaK1SwkFJddCc5r28MwgrCtyKYnc9x87dsFAQ",
  "key6": "5QjUAD47tctw9F1AjMzzvW21UF5xEehLfGfFCg2Qbk4eL9MQif1JTDod6C7Xxt78CZeWxYZXMVbUVUgmCHPBRJ7o",
  "key7": "5CcyUUWX7rCzmBmnipZRDtY6eXgrUayt3NTZSoxhuW6cwN1UgaVt11CZeWsnTnSCwErBejnJ5bbCSQAFopg2Xyh3",
  "key8": "iLPSCqktSGMBjTJdDGWT6y9uDXQMZm1GvmJXPqyeBgotaLCwjbBHSvomhYRrad24RhxiwYPujUQXd28zdBjYPHA",
  "key9": "z2Lo85LKTFztsX154moAeFDYfKbQqJ2NREPbK9vLBM5UHGgjE6HwJxtDWbdHSJ7JFVq1Y7e9BBQtbXmju8APZVZ",
  "key10": "5AxdvAQibfuWqC9SYBBK4nEdA6Wqa97DmBPzRPXARSwKKjinPkthgCmbbDMyYvzsDB2HfhLYMAV63Jmuy5u4zZAo",
  "key11": "49Ar7hJnA9WEJqwtgXZZimkC3PuYRN6ZJEeWyqKWzbutiY77V6LU5w55qLN1HLNkWFoyKB8Dc1CudXpCfqMfjFDu",
  "key12": "4L8iNMQM6LyULNp6ff5KThHPkFwkPVb4U9zYo1gG7V8R9WgsgX4GWp6dWDcG6kMA5SoYk5JqF4gPbAF8duAYJmy1",
  "key13": "3vfXMu48T86hd3pEHddwxBruKdc1CwedyZYBhzpWLaK3PbDfaNw8xmryimWARAaebRfoRdHt9Pkic3atPJgNpFmb",
  "key14": "XYk1QGKPZXgvz7xiZ5RXpegZBtmoae2gWgazzshg3iCW1RT2ZzsUP82HkJiE1F1rcrhkNEN8dwQ44mJQDcM1md7",
  "key15": "2913KfVv787SeiSwdE1xBkmsZUmA6HzNzguwAKGSJyknXKyCuhRSAUEwy8eDPkWxUvGv4LdfEVbaUEPzEeD5GnSb",
  "key16": "3uyXRirCCtof94jbMsUJ1Tt6tusmjNJVCdXtqsBsNa6nXTx52qe8vaf3DN7ZdD1xrxaMTh6G45zQAaSksuoWatPH",
  "key17": "46vMNLPBiRnWzgWhwDPEd3yuFUK1Jmwve1QG4EJhsXvbsS99zpyng2NAfP3PpWm2VTr6WyZLXyVPKpe16Fcq2b8V",
  "key18": "EtwKqUAfmtXCvRQo493vWt3GrGzPj7x13VsjEpVa5Ug3NL9M6cyZyHZL2jtu9mWkM16bZREojvnZJEjq4EVkrNi",
  "key19": "rPpY64mYrKvrfGfUz9hpiv4mfiq83aSA5Tksc7aVqYYXZrKEKTHgCN9fzhspUXzaXd3bjQPRLTZMpAHSBPDstUJ",
  "key20": "5fvyZgPhUijSe92BupbRr4YCF43DDvrmXPjU53guhENT7g5zyAYWk6uzyrja2LeRfWfQrRC8SKH4YFvWKJH1peLe",
  "key21": "2u6JTGuxPo5w7EZEJF1Ss7CUxkQKxqYhGjJqkWE7C7GR8NekWYt2gDtSSrsoA3c2RMMiPasZnpL8dqY68Ca2iRdo",
  "key22": "4daS1KSBS9nFBFw9s4FsMfM1rBiFSA4LV5bois6CpSJmvi1SzPd7An2MCniigiE3ubJjNpJBBfchjee87yR5DTkq",
  "key23": "5XafNBEpYBC9etxwVt7cGTAtSesBbDqe4YjnnRrpSqREw58EzFV9ZjckisXxd3oARBkRmB6J6b2aUuoaYk7LEZ4L",
  "key24": "2yLDuM4yZumeJ5mpksuRZwhZHref3TBaS1AqVQEZ9qRrxyKuGZQft8Yu6WyPDyDRnBUQC8wTWoiNePj5BK7KqerS",
  "key25": "5r6TMdzxwKkgsEvSsJMQJ4VNq2zWSr8YyXGiX9WqkEBpULWKAJEokt9R54kL5EGzU5xD6yXqwRpthjANTr7GAATR",
  "key26": "31ewXkcGnWL4sPpVvZMZfigXQuze6Ctcs8pwCsrMviftJspNNwR4uBFRCEhZAf75gbGH32Mb62TqhBNs3yTdjNNm",
  "key27": "4Sth4ZzDXZLaDKoUFedyogNJ2taQTcv9gpeJBCeLraBBjJHZeoY7NG7c13XqYPYXvo23r8i2fafNBZ65gEfzTVom",
  "key28": "5t8nF2h3yjTetxNiQmsAYhpMxkbgGHFiWU9eWTRTHm1QcvYjvEXjcpc1YxwZ8bM2ETrfx4BnaDd4c3ZoCm7LKf1X",
  "key29": "3jWvWPf9cdaeZ8S414mPT4iqQXsnYrkvdbtyn2pQ6JVmBNXTAUb7LZAY4ScHAyfCtmUhMg7sc5G1hAP1D1Ff8xfn",
  "key30": "2nq7qYHgmYuHvMVjQXevZ7pRNjWpxKQkkV7aE6WHqmG3ewzZS5KT3JGvbXYrFenExXUDdmpcwEZ8MEV4i5rUWEeF",
  "key31": "3258vKtfTKUufdtR8cnpeVNDQTWcBtnfPUxaXFPKCtPHXCVvxi6Rdi5DDXpDZYEovzTboWCPkMoLqDvoDuNixsWF",
  "key32": "3FwpLS6YotuJFWr2MBGby19ugWSaVnU94gQVC6zPcbYvQ7sv9bPxX34TSHZ1mbeL9YcBX5ZsVYmrJ6CHxSRD9Vd",
  "key33": "5WG8qGoFpVh4SjDCzd4GsUew1SiCYAj1wkG8z6w5iLnboo2KzWdkrH2J4Ufn5FHP454CsJb6fpjGyuMGqHXKtkwV",
  "key34": "2SPPzb7tbeMY5ANBUJ5GoGHMCB7s7t9hViC12ELQStyPnNv6NMWXBFinNngVrvvj3jXjTprJDf8A2frGBhGCfsj6",
  "key35": "5ns6vauDz9Gtz5Ab4QtD7z5e9NS39gAstAjvy4vgSYwqT6pfdd86FQ4tnssBAKFsaqgqQ223T2YLASePbkg3wAy3",
  "key36": "GPdXZoS6gMW4Aj8dDjxrNFRePJnti7SPNCCWQ4C773bYGi4yVfwtH3wNruWcuZzALqsfdrYoawMEhiWLh3WtZ7w",
  "key37": "5QQsASvxhhXtJDsigbXTUqdxPiJPvzeEjWXCRTDGmKm2AdvUEj7UybVScPY9ctbk6roXM8EEc53Gwtz9D7u1WzAY",
  "key38": "5aimZE6iKnpg6KMeWFVV7qpuAQDXm9YbUf7J7QsjkiWsf8JnTaKTTFtBuBEULkBYR194rchXy7AsGg1QRi94U4bG",
  "key39": "3ckusgNkWLff6ifQoBg4CEwmHL6YhyKxW4Q5XRci8MLkAr9i4wFWUTboZXuPNXdrwN8DhG2WQMaH5zb5YAfZUdV3",
  "key40": "4vP6akXqnYVMWNKJYSemHHTY7BGmDAsbJdXscgSeJwmL41Rcf3VS5muyuhxkz7Crkyw9URbyo7YC3gFYiieBZ7C1",
  "key41": "2GFVZnitgPpjM5Fz8biYDQW7kbnLAj2vm4CveJGRXje2aTev8woUurk34h2n1BLFAZXAX5kEXSspHZJb7XawES5G",
  "key42": "5QMR81wWB2ESBN1WfnU81TQZ7AFwigHcYdZdfNRWpwn4jr4Aed9XtyTj8qBVTuyzoAWduB4imXPasvmz4r49ccSy",
  "key43": "5JEXNeiBwF5vsPVchQRqmJ7ALAh3efqhRAw4v3eT8pFwsGaZdqTwhggZakVv8s6MRr1taoyzaFTFydX1QcCjDuGW",
  "key44": "5PPRRyKHAeCxVfB4KuuoT5mwpww6HdT2ftCxusdVw8GaAKmsoRCsGfK81NYr9hqce7KR6iWae1DvdyCq4qbjmmE7",
  "key45": "3wUmmsNnV5jot7rybqiBHv7R6xJsmrHMmJqdShK1wxw3j4WknWaFDXTk5Fq8GEtDeDW4oy75u4z4inyHwY9MYi5a",
  "key46": "AN2L7VRWtFQkJtFy6pq4WjKf74iTa6S72wBv5wpscPT7DbmDysieVparVcTdLm7MagRixS5eCSpseMwHdePScVY",
  "key47": "56MNtWa3xYoo8nnTSrhXquBzSTmWkVv5tVreDsqYac61rodvNLSNjFGtwxRR5yddzNZe2cRw46CB2TpN8YztcPxR",
  "key48": "4NnbiUP37V4nmuEopXQosESdDdX8DkzPYjbXLfGouK4J6HhqXaVkum1MBeafLkTJTJ33zsNmyNesc9GydiA3Uvtm"
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
