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
    "TeF3j6RRtszBPdNt8krwvwVS8W2UPJPkP6Wb3zcdFm9NUPhbxk67xNoFM1fBB6qrsDiP9Hw7QS2tTohThs9Ud4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DQsH7VWRZynm52abSBjqxV3XYTSXN6XV1h8Wk1fUeR82CnohRGEqGne3uWTcmTDbaMi3dghdnvk5xpCh2fBknc",
  "key1": "4F7v8Q3od8cz98nYzezG6QTxHuwoVtrRN9RT5ey3hNZvd8xbKjQvsXmPeELojDxa1nT97zaxU1tQMLbiLoAX7j2c",
  "key2": "5EZK5YgekP3bRTq9A7LkLtMxQvo5BZUoabcuoGknjKNbuPPUQ5SG7Xk9fF74PjaPrcQc8rufQYkASxHVR5QCCByo",
  "key3": "3rPSkg2p54qs3iPFWW5gBXooRSWCTnKiwGCLccU5UbpgVC59fR93eufqLmrLvTCPaW6zyFFUcuXvSE6QYFEA6CEK",
  "key4": "s514Yui23De9ZjN7uyGG9phnduxkZs1mMPRfqMAD1qVSBuEhVdkSR2oGiS6gyeaBBreGcy8tBJLXbz4tWir9EAY",
  "key5": "2BSPbU5MPHtEGn8QKkkmokGm7sAhu28TfSg3fkx6xUcEGpGdjWhuByXajSyWXd2JWpVpCYBt6Hp35YkibRKTfNHX",
  "key6": "2yZhdx5nP5xMCk9dp9uaUbvv4KZQWNjejZPfYojwNgJBywGdKhoJfWbayDWWf7kbJCfSUMCopshLuBB1Mv7oyshT",
  "key7": "61HJETgLmTnE5EYpE1htBnXBCXoyBWhRGpmkrdiro2x8oQd4xjf491oWNzJT46CDb5rKYyviKwxoLWkTmFT94soT",
  "key8": "581rjLBrz4pDVv6fDAv85meptwHkmPoMGotxD5HH2sz9a8QvzxAGkdNKuE86cmxgzrKJJ6gDka6W7Q1BRk7DDS39",
  "key9": "4mbLTpkb12d1Qni148PxjFbDm3s3Tn3xZr5oPHkfBvPz1qP7kczbBFRFHhL6Pqea7PkyXtLyd9yoBbFoX1xpf64P",
  "key10": "2hRBfKofJc49kxYYbcza5pwZastHEYaSroS6LNMcy3FwcLBtZ6Jh3yyitfi8F9H3Q6qpLz8qAA9BU68CbynJV7bi",
  "key11": "42mvbckmp3k6V3qtgr73xSz3picBo81wvGye1WLARdmpSfFUUAjNuJLHmeY53tgP9dK5P8CcmALTnnUFdQd51Jss",
  "key12": "5hHzyTY4dYatoqz4YBdTCQZ4vaYNcAe7cgN3UocczUfBhsyN64zchYFo2zNWSQLweY8JbE31cfEqMsyx9LRdsjkn",
  "key13": "SqNphy55kTHGJ5e6jnTinw4NG8SwyZ6YG9TWwgfAayGP3kr7SPz1eQRCTVjZyp2iYxUmds6KQQKVGTfDJHsYDRh",
  "key14": "5fUX7o3dfZb6RBqizT6RTWB9hTAPgB8tJyta5TN5gUKb1o8mHmnkqzm4fv44AVB9R44eoY9aPh579dsW2ikG5Qw",
  "key15": "3aYvQxLH7SzXbidpKRA4nwbK2uEp69ypJ6TMAmeSWA179vzkJPZ5fxU9tNmQiBt4QNAmREPQetA6KxpG34mniEtW",
  "key16": "2vanM5UrT4R5PcdyMVUir8tCpBCRRNhFe4LUiJ1C7HDoq68CQxBMCw7NHEfHSZoDg9jCZvPZTJRNDxXxxwtu1y4T",
  "key17": "66qiMy6d8gFmUAgWfuPabCmatyY1iNdg1gRcDs1SnhJiESfrtAaj8yU7pZwifypxn7ZwgB6fEi8CAxUQ9vBdnnK6",
  "key18": "5ytnvH5yv1qYTwPbaJxNDdMTdega8vktGg5Guj5MQwMKukwCM5i5cLDha6dotFD6Ag2Ybz1XWSbZJcwqyAnjfEuN",
  "key19": "4jGbrxfT3LeqGxC8vHDM6iQBpopaVGP1sRQ4a9YNKZD7pR3WMfBqDEYxr2joh38LgJXja9TCwhzmcCxNFHK9MSZ9",
  "key20": "gdwaqvikYp8yjSbgCYck9MxhJUyKRVnYEzHh7L5CUzE5sAZqDJxc4gWVg8WqtC9fNCGtHajrS8To2oZNr4mb9XN",
  "key21": "3BZ4V2ydYMxHCH9ct1XgJjqfZGFvXb5gaK31sxurV5Fe7USgcFWCcSCwrHsJvU17R62jYZPM1mYgxKNjq7gfKb7h",
  "key22": "2FV4DTVpaSWf5nZ754fLh1oRv3NgyR4PWWTmYhJ2orycBb2xMfwT8MDjdrmEGmE1iUSEMaSuoNmSritKg5XLWaZ1",
  "key23": "2LDRADArMaEWbFVdNSiRxxhSa3XTbQFyaYPoE6BmW2W42KeWCZZjJaRyGz5b97owVnmxHyWEku3gMiYCcYHazLiv",
  "key24": "SyzWQcF4ZaLR6Gj5hYpBAkgTyoti87HiVVfJ83JWpF5dvPaJ1BjewEe3DNJT35rgpHvnSbNAJZXAxPoPKq5rnay",
  "key25": "3mEDQbXV4Di9JjfMMUT87f2GhsvfB4JXpyYHhCw2h6nnBARwAykUVkbZX2e4x7M4AwgfhRmuaADpbFs55NsQU1At",
  "key26": "4Lazeoq5o6WTBGtAMofSVKPPEtzVf5j49LwBuPDoX9xUzt6WrVN48Sn5B6onAXupaijG8nsZvWcgS6CodSKi1hEh",
  "key27": "52bPM97o7QHVj7bKnEP5XKhibGri8Ea6e9EiY7wSvchewETFnaEBFL23y4KMFAcFCq9FrPCtfRTdVff4ZjRaqgJY",
  "key28": "4JTewFYaocuWXnrKVKVhBvp7GZc2kE8dCR1GLJkZ3NcnG2GyAr9R5Y22AnVkYjyTiP7XaobhvMEzjfMNgP2cChbe",
  "key29": "5kZgcYgYGbW1cPyfoamaNCNDAgH3bWCaVP96ykgagta1Yq5nN2iTZeQPNoSa6xj9BRjzaPD7nw3V5rqKrpDaGrY2",
  "key30": "2aa2pUJTvG7mtFSnvuwA4f3gnuqHzjZPYMTacthppe5UgopxLgP6eFoN4YuDonPH6UvfzQwM8Xr5HXevM4f3Zs9v",
  "key31": "2p6cjc7hWhX8YwZAhGpWv1S7hE7gbqx82HPoZtWTAYdYvNyYupEfPqEkVXf88uejdYQjiGbV8rybmvMdRC6K2YEd",
  "key32": "AWSbCxBdszDMhJZwtfuPsJZ5WHVgdi63gENg8Wq3pE5ZyGhJMnnZPtRRk28vPy3Kc77JEKacNSYd9XSRsftSbVx",
  "key33": "4B3h8WXo6BHjaeXygYXyseEBFdmwmRWjpia8mKKX7QocwBbcs4LLKks34uhHAMMqTeYBENfGLQz3MfeNrc8h7XgW",
  "key34": "2SFgcTgebVHU3xbB1uuNEXEYuhsznAJahBEiQodArEuCPBDhy5jnLDcf9S5htNhzR4iMeVPyqj6YjseUogPBxaYd",
  "key35": "oLJnnGBW2KDsD48ehtbDtk4iA5FfpWQebUMZnpXXXP9X5kvJHU5nAaqB3f5vW6yMAQxcEeKRK1YfLC9DhGzPQJN",
  "key36": "2h7PtGUTGJdcqqZ6HbwEgTqZqoPffDi7qCUd8y5aTW6N37HKbmqoc5exSwDvSnKKWuYJeK5qN7KBnjaf2QMF9sXU",
  "key37": "sqojF87tnWB4m1jGBSnHsesdqWngvbDLaH13mDZfHVTDUthT8LugnjLDBsJd6wyDWDq4f95hkPkBn2JBfRqwKyj",
  "key38": "yqjGG7ectRyj1B2kW3hQtE3caZ5gHJj22EG8ZeJWXdEbXVFNx3kmqzH9W3qQ1shAKfHLyVCJCVDCCsih1tESi7o",
  "key39": "3iXar9cAcrzyH5VXedP7k9qXe2VEuHxpKYwADxf1L55QUQ9C754vAgrmP4ynwaDSCA5cL2qE95Rq8t9AvZbEmjCP",
  "key40": "53kRWpeQFrjhvXJS6GMFStRMUcKAXfuhBZNoFVFF1FyGkWSzNUPJY3Z97akPRunz1E9pX6eK4zrnRxXYjt1UPmRp",
  "key41": "49hAH59yTz2w6bVf1hgcWpYdnBy1Yiui3sLXf3Jfa5HMJ2MBooxRauCFpnp35HrjKVyTeoz285HQGxrHsJou3FU8",
  "key42": "27G15wvNy6XY33q52g7dBv8KYvXz5uYR2t7QPHfAJSUFY2Pcee2ZKbtEzQNL1SUETsXm76v37zePe5g9xc8HyGJg",
  "key43": "4fJVKj7YasyKArSkS38ishptsvsLo9Qck4YtqnHsXeDCUYE9R6D3UA9R89DofDvA5anDb6k559sBuPKdwV934tBb",
  "key44": "4aUgFXdcL9fq9G2UsviAjA9NoWS84wkAemjH51G6EGLCS285Vj55RuSDharmCN5Stsn1YFbFsgq8zQ9Ku3vdj7Jd",
  "key45": "L2LtzigtgutGnNTTabDU4xL9ZBBYwrz5dpvPDCqXXzLUkoSTWFqDUDxbovaGZTVkqWmARyTPLb1Nu97gFTd4Nya",
  "key46": "SevahYdMn6QV6UChnN1LrYqN1QrnrrJtZ3TubHCxdyzvmRgcJucge4tGVPXE7YJNpttMrPhW5fw7qNpA2aJn2D5",
  "key47": "4XD1aKxmFqwraqjCteCF26NYwsXFHxknznqrQJzrF5ox8sux845LbomBEUmRsohWgT4U6wBhyer3kFbnRcCJ2L3Q"
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
