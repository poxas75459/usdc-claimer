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
    "r63JV8zngowgMdDz7vVtJCHyD9EtcXAYhsmNe4X99Axtzt91aZ1jX1WSAp8bDxuU4pR6dkniBqCqcguJSgQviGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMRtpLMp4Zw8hgyz9imUMA1KCMnT61BX8Xeh8HiAyqrFUA91mrYjLVMkXdbDSiLKhCvRr1LZC13rcshLTQcDp5E",
  "key1": "5k83JTpusdLoAfhHp5cAFrAVtSbF2VQaxscHZoTSnxpSLvA7UMh4udjkgHgehzUd4DpSShQbjxWVeYuLBFyfdyxi",
  "key2": "TnP43Ri6fXfL2UouGSY9E3m7vJ3mwsEGYYJWpsjXny8d15V4P1Sq87Dg9v4WjFMyFbwfJS68KZQg1CGANTwQhV5",
  "key3": "5XQfjiUEsmV7TZUDqjN58HpF3vDxvot8WL5aCF5zeCr8ReAS2FjB2rNzRjtBBtJ22qACnWkAF6uviQ3vRSLJkKHf",
  "key4": "5GZw1dAUVfA7LRUtZhyyt6aMg3FffSAdRT7ZrXVcqPr8YRvGH5UJGbdky464MgfJGo9ACPvhw3BfToULiSkg3mcx",
  "key5": "P36LoefGdXwzbDMdTpBaQme17yZnG6ffXmYgW3Y5XNgnFwPnUHCAqyWLx1dy9s5sEUP3BgAzsD7opvsaHCkVk1v",
  "key6": "4aVEXHb1CjsJ55VXtD8q7gduNagYtNyomcRwmV75YCxrc6kWq8h72K3N8YJpZbEFnk9g1y7BkaQqFmhWNqnHAhv3",
  "key7": "67mgCgTqJa3GRCsB7fQDFqR2ubqsbWeV95goxzuXy2g96hViLyVhJv15eZFpXPKwQ4FyKhdMbaVmxL3ocdmJngAH",
  "key8": "KcvmxYbW7cmqocKM6A8v7GojApgfh4FdsZmQQs7bWHzuDtom47aHtTMj7yfNJE328x8kxivVsHgz9JmTCeBWDDH",
  "key9": "XjBDTVVbBqCgVRJMeJYyrur4px9SuEx46kBBvXfCZJcMrQa9xNHhqNeHjFcr214cvz6xVii1VnAUgACZHzo1QUC",
  "key10": "2krnxabdMhUbgLYD4ZPyWHa3U27UdThdjr8QGeKDtYmSDg8TdQDXhghQ9J452ToU5Jp34MhDYjLe2MhCi6JgnAff",
  "key11": "619RcshN52qbPmYpzH1GUDnFG19wUcLj25UAD8XFjcp3jWfee39pDTPQe9SLdDQn1Qr5YJ5KqpKMFFYH2u4dPCgT",
  "key12": "Qc4AHSQavwzMmqaQwB9sFRG5kuArgrrTSubzHMSYgHtqu8umxvcXJY3qXJfxpmBHLNdx6hUBvgDfmV6QqRRDPyA",
  "key13": "5nRPjWVy6aBVHS1FC9bZt2mPJjiUVTFjZvstqNsHicRjqKRSmyT4UPPK9LuqRPdQP3bbSYtwAHNyMPj56NiDrJHU",
  "key14": "4xTy1iL6uqF2VK4z8KYb9bFZBQf2f4RLCKXhxEY1Wx4P2BAp6GAUo42cdtRN3pUXtDEMzuUt4L9GKCEQEhdtBsXt",
  "key15": "29Mcm4k8oqG48jj3x82VrRFcEosHPzWF8HfSPuSa2xp2LBdiKvSeAru6SHyLm2WdmDmJJe2YJysYt1GVGQ1xoJbc",
  "key16": "2evZMGkNsL9GLciCqgrZGdJwNDgnmycH6eGiMDQHDRkpPNDXEsLRP41oPsp5M56Uy3dWtggZ7BcXVpSczNA6R2iM",
  "key17": "p5cSoy1WJMHEDKwtnu1VQcuwP5gb68GvZDXdh2q9UnX6KXJRH5U9cStuwXDuz4fVSbsAzi8jbWLfjGPxwsGqCSh",
  "key18": "2wxPJjyZSpKLq7cNfKsb1PgWTADAkScKdxY3okp4a3udV8eSWhRwGi5R2fiT6NS32Z4r8uJJFBMr9BL9z8VBpp37",
  "key19": "5yap78AXDN18zxzB55WfjgXgkJV9fsUQK1TkwywNsWC4miFxxocLNzR1RbanAzuKoWpuxsYFP2ZZwj4UchESj4A7",
  "key20": "WyZEA3gypxW85QPoydb5BDvvcrA7Cx44qwytBsnyRBgnq2YNRRLeYWtk2xznjyzW3iBdNbsBoKbnBzXTokUn9Lr",
  "key21": "5qVhY7oTUxVbgzt5t2vSiRVRKY1emEDfgKDS2a9Aui24rUUQnWQxPxCB1ixTp7L2Wms3kivMoDeGbPQRkbgj3L2V",
  "key22": "5cQzrev2U7umhPooasp2oGBBbaE4XQXzHfSzeYW6uaYedtTGvqFax75JnNSWE91YBhvNSBJuRCdvdw3crA2WFsad",
  "key23": "5VNoWrPAzCWzY6qZ75kVDexi9RjLdUnmBdNhJKdXpLyufjaMQiWd5krVpvsnWKbcCGy5qWfmovYPv8fwfiJrCYyG",
  "key24": "2fTr7SGg1iWQdgrKYXYfqhnAddN1gU6GQhDwzYtZzX4Eg4JnbwB77Rvy4QPjfYpnQfLaTZPSZGeBQbSdvEFatyze",
  "key25": "3YxhyH4sF4ncw7Ye75r4spsbKS7cGovPdUXMnDT3iY1KEPHPQhzntKsaQ7JDmTDfSdzfkUd7nMQSs3UmyNRfChs3",
  "key26": "2Y7GBz3ExjVcdZpfqRBGmbUcRKwL3Bmi3QBsph95C2H8PPGDJJ2EnJjQQCDZbQtcZxZ73n7JQAZFAbMHyndJwgNZ",
  "key27": "2XtaqzayzsX3Gin6GjE7LEpMTfRn9WZp8b5CFxfvevkEYxyehHWwK4GnoQshuRsth6qJgpWLEMykbwhXyWLUCR8r",
  "key28": "sx9tXmgMRikpUddAU8ZUujfYboV3kVcfT4iko1GV5JHPHEnEcDrMw86fZHadJPwaxTFcYAszKQJJaUEBENG2N3X",
  "key29": "37vcgZKaxixXmtZeLJRNagXhhTCiXKGXVN3xGokfmqoWpd3Ad6ncEXbwcK6HEMXgDMwjRqLXaGqhGYkbTKErhpCm",
  "key30": "2LwBBgTunitahCgDutQiVmECj4YmQHzp7wFBcJPVQviDmJUd76DG4hpU8RNDwskkVZYR9WdfXmgKWo7etDhDPdn5",
  "key31": "xoXkkECorjc3EZvuh5dDt4j5gPcQZyHzSiamVGQJz5WHU6AeY8o69WzZCBsxTSM8Hna86Xp67fLc9QqaZgE8VMb",
  "key32": "25VPNks8o9zQBXsAdk5PMfAiV261HqBn1wRqP8oJXeBUUordE4dSWkh9a9hUZfaaPjjvVe8gMXzfymLSTgzjqJyE",
  "key33": "4wusDSHDt9Le82skdFa2wwUiNjz6sEV4GUQnNbP2HNwKVUyBh3QFw4z9iFD1M8wSj7QJJ2ubScUskZajUaczsrBU",
  "key34": "66wQiGbpxRSrhyvHnoa2rY4uXRmrK9eLKaYBzYBREAhzqdgCuFB7jgGuiGJWvQP6oWjE9qqdWxNhMHaMKsex381z",
  "key35": "5ayLHp7tbzFK2Eg6CL8ygXTpibDqyw4ZmByWB2HiJQ3rH7B9baw73ZbhKLnqdRbpe7dB2Ecv5NRgrWAkSDsvwRKo",
  "key36": "y6k16hby1xbuUfpCsQDAY5euP7fA93CitGRDLces4JysuAfSM6jYkC5U63Gh9kKoLahHa1Cu6ceQbV1AeWa4unr",
  "key37": "3YmWX9MBuMtj3GdBkuiufvTb14rMvqCuumyiZscmEADjD7XtwZrFVsqQKANHiJHPpdasR9AsTYFVpgYiK1EnjW1D",
  "key38": "4fohhTxSBt3XSfuMLDzm5a5vNtDjb7D9YkJd7VmNg6PAwcp6dWDt2iuVc4KKPScNQrWeKEzyCqhjwFWKyr3VV1Aw",
  "key39": "36Rf1ngdv8NrGvGz7jWGEpDTd9S6wcfkiuhvamEacseVsDsQadr2QXNM4MGv1jbiqJq3CEEWVgz1xk2axMsU1XKD",
  "key40": "5JSCYCRymz6mFHUA3zDUcZpFdsSn5jn5Em9WdqLKsorbnjMjxmoG8LgcDrW52KHxH2ZMgwtSJCjRnbt3KdS7TaQs",
  "key41": "R5ET8p1M4wc5BfJKzsvpJm44QKXUU1icjA9Rqn6SpZa7tc7WrfPUb6Qx6LBMGNEHBwmeQu7mtuJvvrQFe7nsJHW",
  "key42": "4dYv4FZQWCGiAQgs7cKWV4FH4kqogq2Aj18XZmWCF8f7eiquVxBcD83aWjL7SapqrQb7HnKv6uRM4B6auxm5hh6v",
  "key43": "2ikZMXDQvPAiijA52VfFSBokNvjq7cpguDkW9en5qSMGB9tQ3FoXfFDeE1jxW76Px5bLx7iywfQNt6aw8p3LEEQP",
  "key44": "4wpbskwJRUs3qL68gxxBs7E7fkmEgcKYYauy56WD9xrbB3DT669HW4e2TDE1GERh2c38CcaxNKB5WGwAvwJt9cXf"
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
