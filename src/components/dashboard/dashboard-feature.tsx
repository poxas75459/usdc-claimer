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
    "2fqWNJZehEuNovdepBkrVqwKdGg6tnnM1LV7N2FnkajFTZK1ad2efUgsMmsiwtH8RdMJrcpNXzH2agcwBsN2sqok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPKH8Xjvqxadf9yCvEGWzG71aBdo73LSALyQRBHJueVZ5LFERw3HcN8m9wcGRTLSzumoyirimaRjANfAwMF3XgM",
  "key1": "Gy9bsFKqkuKRvzJ6z3kncHtVSRTTfTrMM4qJv9ALDHnCpsoYb4PeGccS2zAw5o4pWURzLU3heuo1dkwaadJJRxP",
  "key2": "21Q8XHoPrdNfQowkjSUoab1CnNUFPd1tQdkDpoE5ebW7wmKBpmKQoDk9NZ6VQUhJk4Bev9Yxo7YPMmCpyWFhM47i",
  "key3": "3ktKHTxzVG4oPTvpiuSkEUBDJDKYrQXHSCUzGDgsevyo2qThcSXCcT8PgMA7VaEAnEba8WBybjQhT2MfMHXfpfmK",
  "key4": "5fcygPWx9gerBFJkY4yjaoRjnL924QyXxx9cnJmr91j4rGmXNYM7Syj8pSr4XkRXWKotLzYZYg6EohNsNPsE9uw5",
  "key5": "5JWWcUswY4GzeRWJruEgEdgbw2x2W2LSDoucBMqWkwvNYZYfhdY9t74jZ9ajqGp6J6TjXVcu6vQCPcuZtosE2yiN",
  "key6": "4MVRix6yK7JFNJesYrzomnAb5EEdCbbgASQHZkWxMAFt9os5vvNZabPECzEfF8vcLCXDWc8r73iuw6H23r5hrQ1q",
  "key7": "5Mn8kFaG5tNnj7mqa1XyG4vNSjfwwNb77U3KQJHTEzHZ6qKanSdPSHe91ot4uqQj67Ya3aKJ3UypcVwvqVG3cAMG",
  "key8": "5wH2JebUbxtYdbv3fh4zyK48hQdFJFt3eM7PdAMzSjKQJNufFpFFwiMfQbDQ8UtG8ENijM8hXvmTehKCBgquK1YW",
  "key9": "413zrfBbpkyLsiQ6pEvPmQFHzpJyyU1FtcVRAFEek4jF1ezRZx7byMGMsnsFhb334kF9aiSnzi6Vr5tnDsSRW1hn",
  "key10": "4bXg7DbtrDLX7FaN1mA1dUrVK8kQrks2QfyrxnbFCXt5dBhvTocACgrSVBW6U6n13XLTb7v1Am4trLW2uD24Laud",
  "key11": "4DjwjV5tSGvjudDQADJbC3Fq7H8E4wDVbg1iyVHDAcA1iSvozp1yNLnf5Ynv4uxdbEWGE4EarLkey5z5LNfXyic3",
  "key12": "5Z8ou1gQFFr6ZueQ2ytNHyy6cQdzk91nXmK9bkgn42QwSwKveBcJEjf354HmYhDvKMg9PhLrAZdsgi51QAw6cNrQ",
  "key13": "AQyN5DWxkALZg7h62nQSNs5Pm9u3bVe626jNMruGSuF5dTwyofNSkAfXyHHAdoHP7jit7WuGs6dYaLcjthsgdcP",
  "key14": "36cWaAhcoTJ4F1n71GksDZPBbFbCwLX6ALdmQuAuFPwVZfLDJat7s8PGTZy84Qg4W3Hbz4EetppNBwkgfXyWxhar",
  "key15": "5txh5Up3QXvxRKB5vnrt4UcdWqYVuguHJrNw6My64EcxTMNbx9HQBp4k1Vn3vHMYc1erHBeusCt6arpau54jvhwA",
  "key16": "3cXZLFVUKbUdrDE38L2rpyCyzBnP6SWEF2GqvtjrZP9LrRKz87X65px48ct4JVFxnw62oKd3raRUXzkkv1N4HpBG",
  "key17": "5yZutZ2L95AuiUaaHbZEH7YGiFdjKQ1Ugr1GPVkQps87rV4axKxLdoynb8AKqdNiQbiQYXikFemjzXPJbZ7trhif",
  "key18": "y2nMRxQMHdzB7jMhyp7mWiCNDUfJ4TFeWzWTHw1vWjWH4VrUpChgZgUENniaf5wNPsvyAdGED2QJmkDmXsHZ4ij",
  "key19": "52SgFN45v5Y4CKvfqb65G3LBKLnjYiZV5igELupZRwn2Q3ERQmXakMJV2DRcF3u5ZkkR3VpHd3Kut32szV4ASgxy",
  "key20": "4Gm2TNx9g3QrRZXzujWS2nHjuDdZ8CFaXPe78g5wXCHceVuwjJ39KUYiwPH4vGVMVp5Jw5YmZfcPKbLJjf1fatuw",
  "key21": "12uU3PT4g1qHNvp5U8w83KFmaPp5qT8oVjuFUXsfYAsZTpa4uFbX2DriKxzqd2zKM58rwssuff7EXRxSeKvg7GY",
  "key22": "36ScQjfbJC4g2ajvaMdDGGzaU9jaFj6nPdsvXVmCiiiVdrdDtB9dvSQ5sWyVAFgxJQ3ftSoZki6srfjxBcDWY1VJ",
  "key23": "3ouYJDDuoQEAJuVgC6PByp3M1qbrL4TP1gqb2iw2dFhGix4BV23Z3qj34D3YGaw3JD5CxZzx95oHfLQ8oMGwL1Xo",
  "key24": "5yx1bS6NZT2VVVU71m6yMHzLphDbxrS8tH19EmkFiNVjD34eWPL4x1rT76j1tgSjMpPngdaoXkTAzPbpZQcTpAeY",
  "key25": "3BHUaMoMEsYo1NBdyyAaqwaRTC6uoHWd8ctRYzJ2gGUuVHnEij5RNjUtZjR6ZtXtbsm2TGTU9wmL8fcSCcmtstAu",
  "key26": "2CNn7bvSbrTuMgwhS2Bm5RhtWCcDsBaTaGvRLoAPzBLX5W5eCSt2h1HBGjsvRJwjYFLwBepe4eARGa6GADcuUo9m",
  "key27": "BDNNmgpGCz57yQv8ZShoq879mU38Mh1dx1TipQtnBdwv62QdVCw8PkZguCVKQbw1VoV7pCxzpNxrQjozU94oo5B",
  "key28": "5wQGa8eyyYSXwJLfG1nLac8QZ8QMLXmw99GaPnSdnwsXh1wACmti3WVFes6c6xqCFJijta3rmBnPsLJF8KZgv37Y",
  "key29": "5eoJNFwhrwCf8qcHrfBH5LGzmpUaGxc6zTJ4h6JDT8jaRWyU93vBQy5LRRZWAwQce3n2hQunyEZ5WHspzHXC6BcM",
  "key30": "28X3HogVCLn8a9ztXvoFy83iJGUf4aT8S9tLFbXFqcJbaxEzK5xBd16qq94HNgLtRNPruASstfknsYffqhedmJMV",
  "key31": "NKC4aHsbs6fLzam7kyVzH3D6XQhtBpo67hDFogTS2nKxLfdr5Vv27v9LpsTKmicSt3LB1y9AtFHpDghWv6Gwpfb",
  "key32": "mMNvQYKgvTm88ACNU22DznxSgrDqXA9gbMpStMu6yaBYQ9sCkwLZJ9drGNa5onBvHsjvpDSZ6vnNbkDySD9hvBs",
  "key33": "2NqcFRYiKVVuvM5U5L1yuFCLEAgKd4VZLgU77jzz9QGpCDQtR9grf4FwAXmz2FEhg6k6rRjcPkT7RfXuDVsD6ies",
  "key34": "28Qqz35ratME47gFd4cwUQ7spgdfDN5Czx8hiWsyhxBK3xBkzA6gMYgtXdhEv5pPaz4LKcudj89Xwe198EJFuGmQ",
  "key35": "JhUsgRV3coQyXrWT7yCHgouGAuvvxvCjh2MLmsEpwxoc1xRkPiQMF6QU21kTimTc9piUgXDc4cYSmD8ceQTJhPx",
  "key36": "R5RwX3VtUuAfwU9dRsWCbLpFvemkBPfU8eoUTYYUuJ3UfEwGGdr7YeFcGVuTQXJRTKW8TWDVXLR4WG7ah7BqHSk",
  "key37": "3vhH1cLDDSwuJr1dikF1EUbrbTuRTJT5U5YVeWeiWYTE2Xw6iV9FB6a8LwjGm1YAetrjnRxDedEUpqVWCRX1ziW8",
  "key38": "3sTEBjc6D1UAAjrkkC7xT5wXdMmoR6fxcxpiQrp2Hk6V3WqWWnPFqdjDc68AWihbbcmEccJf9LTuoYA5Dy7VZm5t",
  "key39": "5uap82WkMaQHM5LYW2c9rT6mMwuJ4sMkrsbBTM79NY5UUzPohADuEdTXmYMLJZXRcbFZNoeYQxeSQEg8jGfKTzn",
  "key40": "4jjsvBKFY9kr6tmvXfwA14RuE9fYM7qrrQxAyBLeAM5z9DARSuLUnJsn5vttqXi6mQgv9XvYs6VL2xEDWP7mWbry",
  "key41": "66hbGeHoHmWcuH5bhMoRHv8Wa2tmFiRS1RV4p4i2XyTee92wZb8VU3LS2ncStxe4bjui4aVw9TAodJSviDbCbrsW",
  "key42": "2B4aBmy7b4gfvPurgKsvLHEGYFCVTxRB1atJ5B46aPkP9iyUQnDoF28mnjvFov9nxPE2kiUKpJbuqNDtHhL3s45",
  "key43": "2aP9zfwNuY4GYbV4o8P92rxVQqzYwxSPDXpTKjDirs8UmWxjLWLSdiF67rhpQ3T4uVpA53B5K16yXsZPKFETaVRV",
  "key44": "3QiDepZ21FmaLeZ5Ls51BJaKKkxWR9oV8VL7hD9naK4SrVj1seZUv9XE68hogQdk5LumRqBtcV9pL3i6qhKyDhpd",
  "key45": "3FRrp3QKzAnSNScTGgntADxXHG4hnA4wUzrPyHkSzxVKzaCRnrNYTpU7AUyghKPMdE1XUn9yxdH7DWX6EKa4KYwk",
  "key46": "t5wbeiNpjq24m4bnDgKFQDjDpr8m9y3CgjTstVMB33dXBonXYu3M5H96YD2GvPh5vxXx3FZJhxFZNyQ1iyhRpnt",
  "key47": "2BbMevJBpyQW44Ye9Z1aRkyZuofSYbgvjxvGbYbaHxYSpp4W1rxW1hLj8GQD5GuHsRTtTjxtL5SEhBKFFHqRgGwR",
  "key48": "yU3NgjXsFXMpJdqA6Kqvnxbu8LUNMtJ637xcdob6oa5bPxQb9xWmLHdTKfr3KBpxM39g3hUjXjPbYFDdRrytAYg",
  "key49": "4q2gotHSwhvwp82LLfvpM2hCRgVrBPBHyry4GCG6yaCp58P4Y7jnGbMnNiPr68r61vzzdWJ4Ra7H5cDNUg86KKfg"
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
