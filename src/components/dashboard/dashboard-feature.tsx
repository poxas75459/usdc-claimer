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
    "5JmMRAazZ2aQpGWJxQ9sft1ToFGyF4YLpESNJv1Xn1tiPbQbJYj5ZWKXNug8W4aNvhPiw2AD1jE2y57EJCNBrDiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6BPVhp3GgM4eitDfHSgn6URZz3geZuggishvCGnm7n1qJ7QsHexdCmnbnFj9cnf76MuM4oCqwcxpx4S9pKq5Pa",
  "key1": "23XUWxZPS3H2YzMSGeCwndJ7qCgKZvTF69cYgauCrJaLk5jGkupvWhwkjHB2ZMMiZ5TutSmqkxH5mieSdzRX9hBu",
  "key2": "5CzgLHZAzEK8LDguNWKxV9gWW5YU9PWHbViXry5ufu78VfWGTLVd2PFXw8P1LN5vUwBQ8SnLe3kBUZLymfVHVLca",
  "key3": "3uYXRhqTeu66V6Knscd6BCuFK1nzERej7FCM8G1xjmDT7wJ7rTrgUuLTXSN8ZVLhm5q1zh9bXPhdKyGJHTcBs4Xm",
  "key4": "31hm58Rri4pXxXvj5sXp4APDUz6mLSwgUd1UFTWZyPxSLLPhD5ctcabvD8dffvNsmKGTQv61TnsjkvW8TpWGP5cv",
  "key5": "36yGdY26NuvSafmD7UGoyusyWf79eqPqoPsumsZke1ZmWWJnQ2HnBBTSzDMpcC2CDqp2F6afZYFfM4wuRcwuhVCn",
  "key6": "4XsvucwHofp8NdionTEDCt4gALP4FSRUZzhjUH3Xe6qp7TUPWz9Rdy29yNUUpHXr4jy697874SAiYAC3iN6JeoEL",
  "key7": "4pmQ4Dx1vHXo87HSjv5zqKQDbAdNUdAfNsSc8CvFcpxj59PMzwJmE7CZH84i8deQ7AERAeyGitMMmVCFUqd2Y8Ur",
  "key8": "2opevx5ZxjucDBJQ2E4UudFRz9KL1hC6noqUspXV6bNDPqZ6ucsBAoJBcwPG3aDxgM2a7JRSWEc2PC3qPdf93Zam",
  "key9": "3zgvZkEgRXniEMgVgXHKzzTGaH9Egk4BeiFPW7KytsQycfzhNGXjeTKnVv9ynY5qQiJWpLgTTGM3tte3z7WukmA8",
  "key10": "JpDYbUe7nJSJuXqvTUxbj8iHYemWXPSXPWPoBdCjANFnPgRhRYBa4EwRfkifUFwK2vhFKZoonj5dYWx3Kh4VnC8",
  "key11": "4Py29k2cwivCKg3E9E4TUGUK61x6CrXkWFvKsJUR3FFBu7SK8kFLsC7Cj3yCstjNmyk6gfYeo24wVfguUARZPy8B",
  "key12": "4i7vijhZTLHV9ig4mxWb2kQv7hfJj9M3tCnVKwqj4idgs8U8CtcKnBpxbgXbQcbikv5oCAWFZBWC1uabGHmxWh4",
  "key13": "4kEEog9iT8FzzHWCosoxTzYq4yNbS649UYvhxdaPanwc9Rt6NQUZuX3Fzo2HyzH3HmT7ApP4jBjL7xB4FRsN1KXo",
  "key14": "2B3itAYtn6Wemur77EABP3knDFiMkYmrob8MBN1sNjaM4Lb8TG5n2hF9jLdn4WKk8gyMzXvTKi21WkM9p6M7byDg",
  "key15": "4fWjxTP3BdfiWQPMdgLkjKKDxAgXsQK6mjsmh14RxQSwzE4ZpNkzaEthJ1rusihPa62WoDLHJkXT2MZnsGWWCScg",
  "key16": "fob3rSoaHUJDHtwQBuDA5LBkKfTguzRqKksNfgmM6FRHvJuyRw38RQ1F1zBRSEiuXeLHwrJyFEEhG9DpcKjnWV1",
  "key17": "K1Lya1yH8PPMpusBhXT4NfTRbofCLwASK5ZXTjnZao5ErwGz5Wt6U1TJvmVW7fa9LQrdyzNp4QjntcWfq4C9wfS",
  "key18": "3avRWEXf68mbLK65TPUEQd5c3gnrPgAiZF1Hhadzv8oqyoynnwpuk9geUJTPQfM8BntTw9bjFCH4XqweLYgbcq3w",
  "key19": "ZnK2Gj9KaozYRdUdb1BdsivEz2P76iDmBW9VRg8P8KU3wxFYikP6r8xyjq6yd9GgTvLHTSwXz8H2wT126YyCdhR",
  "key20": "5crQqTXsHnsAKMHo6942WEcCwHg85BFA9ggsUtuGNicRV2GgJgN1gFuttDahY8G2oKXAumVbBsUptb6JT2yY4i6z",
  "key21": "3JdwabDKBwok2TardzGpVwLWakZ6Kmoga5xvcQEJ2fe1MrHTPbmE1SgWTZJQV2wbQGzknbxP6nkb4hHA31CasM1g",
  "key22": "5iUVxsLPATPyFpGGhZdWH6VY2T5WJ65n3yTduM4Bj3rG9PwefJcxU9kXkaAv6Di42H7jhwQBboqCVisvxDNpxKKe",
  "key23": "4HMPxMoDC2wTQkUpG94yYtJQCoDLRKPKNqimuWVxRjHbb48wNWJfBozMzveRuo8t3WZ7uMnShufJDvSHWdAnGVJ4",
  "key24": "63nKfe9psNT63ZrrvWS7DKrdQhnrrMzW6veHevb9KJQRhwpzu4yFbA7s5SPB6DkGzyK2nRMAwMwXCuxbkfjDTsYt",
  "key25": "cPqztqTy3iuqoRqRvfuRCaC3VoF2Cp73z6kxkPiuDFm8YGaYSVoS8NybMfkHNzMrn6E9qfX2MnXdKaXbSkx6f8s",
  "key26": "CKCryzvkaCGsLidzbcgb3Li1QdEA6s1ihu9SmGu68s72QKzZCtU9EtmA28BssBpNWoKayRY9GEAfaRQRptVcvvC",
  "key27": "5HRajyHjoZZ99L4TVh78wsj1CJUN7wKrorR3SgbPwgtSLzN8sDNKzCGAwNNZsyCHzKW4sVJpGEhWYvYax8vi86PR",
  "key28": "5oQivcKz3EwF2QENx9q43cxfw4pwqZPcMFMvNGmBGBWD4mtkbA7Xi1Br62oD9z8RD1E15B5nHWzBzsJkTeXcnLqu",
  "key29": "33oUECEuV4DbuapowN1BfmTuwDxM1muMoNmA1qKHCoU7BTemwRhkXZPLh8t8oHZdmiQeDGJJeey27es5fZcrugHr",
  "key30": "2DYWQfwpQq7WwYsMM36rrV8CHCrkYQSTMn4ioqesWoaxynmC5xGHLENKY97QtbjwLReFoYtJKzG1mTKAzv6qWyv2",
  "key31": "3mWEVk4oK6hjEnqEpXB9XWqTaW7o7x2obWu7qdnEqr7zKf3QCpHezRFzFE5ezEibN7BNC2imxd9btp7Sw9tbNrxV",
  "key32": "coUHMDFJ2MRu8LMQYJ9ewu1YMbJbk7xRNB4bVYKVUf2Dnm3MaqA6VLrzrebAkMpdn9WaGJBySsoszaq2hEfFYnu",
  "key33": "4X6hc66ttjBZjBtPREkYLNPiVbrhAUjcGFCHN3sLtSNmuHMQ7UWnjNLv1bt39HPZh1S7Ls3mAE8T9wgJN9YM4P13",
  "key34": "8FZRQq313jeaAEpvWksBS2pqQ5cx7uuuCL8XcCUA7ceNFE3mf5o1YMMZPSVoe1v293HJMoDnVQcT2AwCTn44KsY",
  "key35": "3M5gwMx4Ykk7znchuQex7frmL542KxtUEuiJ4SWphDULktoPZHxgCQqi8YoAHqggcuGp593hGJkGLzJmhUraxezt",
  "key36": "4L87PCnMUR8i2FG2ySXn84rKRndEX4qhu8AmR8uL3e84yjq3Z5Sda1GSiVwFMubYHn2hicLEmJwh2xbcBLXnmd1x",
  "key37": "3Ciyg6d8zs61WjSCjfWmCK1wFXVQkTRZDZmrpkXyCdQWAHLEWAngZ8FX33bewja2y38WmHUx7ufsjnWx6HYiv774",
  "key38": "34GvXF1jhwcHGR2xbxn4MfNyKUP3HkvFGhyCPJNSXrQd9smG4YG7JLVLtUZ71J74peqFR5MpWSH9JHy4yJStLTge",
  "key39": "2hoXmCoojUJmqXXWJWthTenUB4YJguxzU91ViJi2Ndpc9qbku41a2xojxtozGvv1fyjghsAb9NEanLPw6Rs4K71k",
  "key40": "p29g7BkDBTjnrkHghShNv8oSMcaqiWkz4YV4C8ezD24jBGK8QWJzSF6nEkD1WeTxNNLHyMuEgBNcJk91rv5JFsV",
  "key41": "5FaPHGTeADhdbP7EHxLvcBmyAXGhr16wzidBEhL2Ymmin7skSKamGPwsdbRsXjaf4d2bt9qjs2eJV9KTLfE6rFU8",
  "key42": "5QYh5ktskwx84zihLmFmFVd84gKzFzaeB43auDmtNmdUXmHp7qog7gXnUULWW9nhkVkf1xkTJ8owBEcEEE5697f1",
  "key43": "2saXNXnCXx3uibT7NcsZg9RMRxjrHNEhxvZmZM9GVKiWNu42rrH6BYHKNahRxZg5mea2sxyvPu3L2GGbVRNxzWLP",
  "key44": "5mfJJgvL5ero8kDytJBaNk2WZyDoM3QKpYuUHiN8RAKFASrkMFMtcwxry81k3TVWoU7KB5k5eXnmmwUx8ZsfPcXp",
  "key45": "454zeojLCtffZMVjzQM39NQzNbjFfmKFVe2QFxWdtZNWggj3fspYHiD7bmKtHjoWUA91GXq4oHtGGoSTTR7Datc9",
  "key46": "5QeGwBUcofAo14kvoxBJdQLyKQ4LoXoaCjeDAUSCQ8iRKsnxZRg7hqoQGXDoo1W7sJvbuj2i1Hkk93J15SNeWs8v",
  "key47": "5rBEaFD8nL75KeGoLQV3VQrL4K2N8oKCYDBnnQrSTsP96eDCMzAL12ZgypfCRoe2nzuZREdmQVEdTENt4WdxAN2V",
  "key48": "3FdKPd9Bqma2wf4HMvvowpmTADSWtyYCHR7whCEdDmEVRpzChCcyQFMJNji1HdMCiurrQoxJHvWDdHyX4FUg3WaY"
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
