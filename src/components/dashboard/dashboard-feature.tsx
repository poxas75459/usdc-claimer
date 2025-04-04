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
    "3DqaU6q9WBwS6vKSbt1oq95JrAz1gk7Xw8vbA8QdhLr8vzG8fRSFtxS95iPZXXU9xsxicdBDENMJoW6i17Yj7iec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mR6kQTw8J2npcqNw4qzLE435RYtpqFXQEFHdeKyGUSjqceC8cntRsU6X6yyaecMgyHFfsKxzivnwSpqTtue2GNp",
  "key1": "53JcG5cxvckTjfbQ6LHnKCLTwYqzQL8dkKZvCxmQcP9agyBMev3LVAqcAbD8yPci8C26gL2YXXFhLqCmSKkXzU41",
  "key2": "2EYxaaqAipBcPQrKphzKKTazrc5anMKK3Xt5FJ7WfaZA8j1akJZgEniCDgxHZEyiHnhtmivWqhTjKTTKTCLyLtuk",
  "key3": "3sgsip8RgnQnPrAU2jU3J2rdQxfnqRBrhXW7rv93GnHUiUhfMdH7wBxY8WxCLvUs9SFJ5e7jQUJv2mRTRPyTL4xx",
  "key4": "4qDDsqevtjVSZyRkqviG7vS7jqZAWsTtYW9S7aUaChrNHUCpTKKrcC8aYa1NAzc6qjBjG9kvngjDEG5Bvm1JDnu5",
  "key5": "5YgbjG63JBU3MruyBivWD2jJhNTCfB7eFbMM5u4gM3Bd5ww2BuiW2ByjunxtSxfE68Q1iDsRWKZe4zasTAGv15mc",
  "key6": "Xh1HFmZsCrdywnWsa2VK47FSsPEo5yAuWdrUC96xxehUQ9g48o1Udgg5o7HLzVSVFXB8Kj8MDzarjv1ch47Mqaa",
  "key7": "2PtS4hDdzop5gRRCwR8QqwK21XZMyo4VWaEgu9HC8s6i19vRbiAcXwFxvb1r5MGTPbv4YZThARepeXSVgEKGNVxy",
  "key8": "4FkXehuJFf87WMQsAqyd1zoAfSnd14zUpTzzd2GR6PCoLJD9YFFLSZmxngygZf1kHBqPy533T6QCSUdu6yEpJGhq",
  "key9": "37YeNk6GXY1uNb8dfQe3rpPnkARsg1jP6CzBsLexjLvSuRG8rwKow884fDuUCfNw3iDU9YnbaizyvvdnZQ33P78R",
  "key10": "3J4rvyHzu2d4bCtUSgpuhwLog45Dk4k5THjPxcrB2LiGRrf9Cp2U1c87R9DmhKoyLtHTDHvZstMN8PDV8UogKg5L",
  "key11": "4xhha8Cug4KEHtWgAnWxqAnm2veoXUeLkETHpsXo2bWtqzLZiypg13rRH3MCwAPGvo71vw7ho9hdBx1vtANpiqW4",
  "key12": "URsWj9UhFr48H7o6jqFXnfYoJC3YAjkpPikFbS4VRSmf6pw9jxfjCfCZWVzJVMBqJY4K2h5XnRaCiq53QKxSwjp",
  "key13": "rvEthSfSCBDBVUaTpDi7KLou8QiAtpfWryUc4Y17QHqTY22tpqhVHcUrX3S3ZfixBozHhyW7ed7FYzfH5j3mrVq",
  "key14": "3P3N8WYMjnkPAUdUx5j3kK1kE6rbaNgX9D5WLiwPkB5ofNhN9pjwLVjSnncjERmBaBWahn5UV7ow6xrTGYULXSxt",
  "key15": "4k2ctvpx476f3UVff7JTZKX2pKXwtUfncqj6McCm51oPGgEFihK9ReFsLsen4DGkA225BfKxFWqe8kGzcowamJ9Y",
  "key16": "3XhNw5hLot65tLfBZ739fPDdGawAAjCwUT1LiPZFXGF1FZGUduL38gD4sq8LiPdnCeeSoowRLK5JkUDJydebtboe",
  "key17": "456umtVJqnCkKq9spA6fWmx28VKzFyvCD5YEvGPbf25hPJjjt8dHtnU5yzVXa3ojTkWiTBCsRMCpVpsQ4FktNv9D",
  "key18": "3LTrV21a3Wkwch3z5Em6Vh2nEazKqErJA1FjMxndP94QFxAhy9HYcbLpBhz1HHLPGBK9EJYzYUyB9iGv3FMnu6LG",
  "key19": "3grJG5cjdXwuZRWLX69sgndUUHQPYLGHiBw36VMmeDN5484vHUD87nzZCvKWhymMwPqPKsvXFVAeinCKzA7TeeME",
  "key20": "2b6TYE2A2VLobtgxrFAFZkHB2DGpzT4UVnbVm9NPXhHxPLc8ahVPHE7k64fRBVaTTiCS2smMEMQQktCGVPTwTBqm",
  "key21": "3UiwDErwtYMUje4DNYhddLdz4FpHM61QQ68nMijqKKET7sNtgm99vKVue7zrWvYqLc4Gqu3sTxN3xj4PGrrqGcXG",
  "key22": "21tVfTGS1dT5BYqzd6hDicgE4D176dYhar6b5wH4wRznS8gxxX1tNWnwD5t8ZCRy4WvMpdYiLvHmceis5cDUjKf9",
  "key23": "idkgjsvsrgapikEZTBhFsCB74hyJUwKMt3s6YMPzSiGFh1rHd6gims5NUAAC3NondsGeiQd6ShzYc5vttLShJtj",
  "key24": "42tdYyNAoR9on4cgzQCAL9pMWX2XoBLSZf69jENvEAz14r593Sjqw2yjBzoRjyYuo2bqjyDTfHRbmhVywtTdiyGk",
  "key25": "62BiviAdzJJprWPUsWx28ZStcn61Uh6s6G1735N2XgzqHK1LPdD5WatofYVMKcBDaHY4trrUX5RcKrQ2eF5qm2eC",
  "key26": "3h2DCYVQcogp8KpTZoooYxnbVxM4q4uGyFzBWwRugRzewZWe1tv9d7wdVdZoaT34z2joVQGrmP15mff9MkVXFpfA",
  "key27": "4hoT3JKL9ckfhyHknPZjgQvqp5MVS9p7zYtG17jss3eqGKmXC4a62iKcqnWY2urCqnpRWteg9MiL2Sg2D9wkGbgn",
  "key28": "64oQx8mMnLjPnZARQVBT4VvRCYSKnkqmoXQ8pMpMM8Gk1DrbUQADzaqiQtYgiC8WXzbBmENoSL38PaivjXQ9kmBx",
  "key29": "5BTr8keiD1LzTbusP5Exxo2kr1hLyXnX81gJeTW3ZKevZnZG6582GwHRiLUPtDkjdiKYTCxHQtUZWKBxFSNWxmV4",
  "key30": "25dsNyWa5TTG2iqUQyRbnxQcpB4nNSeq9qcMp7kXDtWqnYJGSrzGbTr9isLXAZiv8VpJQEYQQrTFbMqrgBEjbu4j",
  "key31": "5Ewfkcyp35rrhzZ1cPVCTKsfBMH6jMYvD7Lznn5tFHqDMNsrHQcUa4BqsxTt8ADKjckWxMpo8YSyAv4KZsunv2ih",
  "key32": "2sK87DVXVJV2aUSUcAtRnHHjDwXNVWSJ918XXPqgXmgP9AKygjfCoW8kHH488j9JK8YSwqEigtNazBSnTeVBap2P",
  "key33": "2sEk2VZ7bmiAUjoNqDXE9zrrZ9NdubFDyn8iTS8FrmLZ15vBThDpwETj9pq7iaNLrF217HJQpp8THybB2th8FoGV",
  "key34": "4nUrw34NdkNCAbCpi2MraMRQhHQteZsTQWZHnhMW5NGkqziJBhc2Za8y4pKW2s6Zn5PK1L9Uata8HYFv6pFDSUhH",
  "key35": "cGFByDb6xfpnQRfVHrPQdXaoRTSAWkeriYnAvyopX9bp5CPVWFi71XCezc8doHCP8GJyLAT1L11jkGVWRvwFMnC",
  "key36": "2HQeiYQZAYv86gvXtC2tcwgWZ7Bo5v9WocQS6STscXaTzoM89uf94Q8vbMSsV5SK3WkqyM2gx7Ugh6JFgUmURbdG",
  "key37": "5UKshhAte8qgstTq97EWvED63th69jqikYyMh2qekVcLWWqYnvwwTzP6PEEcbqtFDboXDp6B2SRaXhz6JwnCDtnG",
  "key38": "3jHjtszWweWEcbKdLiYM1yGUKLnCiC8wGVVQdCsNw1u6UhFDafD8rRP78eK5DYZVeYQeL9kHFGbUUVxzzXuS5JNV",
  "key39": "FME7GY5SCKh3LoxRXEKydYStFpaijq9ofRjWHXnCUVVtQPF3sGHGpph5h5qJDYRCKZEWPfeWQ4c1P2C8ej5HVa6",
  "key40": "cUT929Mi718SobvcBuJLdQxF1VUBzQ6kUp5uBqLp2sqpMbfq9uiuf84ULBLYsAefjGHVfpTxdT11NzKeb4EKU7d",
  "key41": "5PEZd5cTZmRmerhK3ifQhamehKtNX1wcV9pTuDe9MwTCaar4uCpV2n41KNtp1o79xQeyfuwa2kRuvQ5KM6dyDCVb",
  "key42": "2cj3U6mFJv79zNNaXAizMbKpB591oZLWVm3ELkztRLa9idtp3hbU4w4ucwr6QwAJfLpY5WUvtL7HXWms4ZxEdMQy",
  "key43": "E1Qoj7TzmpzD9JZBcGTJHbG6HRsiSdQ39KdZM6BjL99giyLFeQKD88AYi6FLAg9SPACVAYnWba37rWcvzmNSE7j",
  "key44": "44zoLoKpLMpLCxFGTpLofBNTgu9JBG8iagtQjGJMS9z1TAQ7RVe3QUTijMNqSMSuYNtNhEf8zUCdXkXCWgmyWJoa",
  "key45": "dWUbomaAtaL5v8ZP9WnHWEqoQjHCXR352vnnWeUQ22AfKj8v8zB8wQmj2yGZhYWVSjFssxAxXvsM3t4GAERiLaX"
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
