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
    "4HwnAHHYo1RD4VUJj51FewVf72VnGyH7yAR6EudtadhCP8g9JvLZd7YmqsjYMfHH6GXbqRxLjJf854R7kWYarbmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXQGDwnLAGQdy22pwFAFgHau1qMFNkZRNwKF5Vz5dEM2UpoHkzQiFjLpqXFcMhS1PyMsTFnb5jgnpfY1PCEBMsq",
  "key1": "3B2csLQsSGQUhRYqTHjeaA6aBXZJTXdbhKVbKbUULhduDz7iEGGzM1pM2DqEGsnRRFf1SkRbN9RZUHsbD1d1S7CA",
  "key2": "3UiWmqVfam57ygyRSy39BW836zXpaZLVE4umFHboftq2cYXQUnLzt5vGyHYajzbmyGcrVxNNgP6HJs8SBrfRhczK",
  "key3": "62mLKC7dHJne1WPncuKzV9KwDAqPPbqSoELEJbYn6vneLC85ejxbTgSDGvVcNiYC8LNbjMV5LLFViwjCkHbzHZrz",
  "key4": "5LuSrCQa6x4Sq9Cvndq7b79pbAz5kRWkLA85JUC1NkWDC3Bk8MV7fNBM1DkkrFVLJaobXirLdMU2DtJBgxpLXntu",
  "key5": "QnkBfbXn4aPGFNLnfFYjpd8uW2QqL6hE45Rrige95YR6bKjXrD3L3ccSUjCzhxMpuZvVf36WCTeqGA3jX6RnLov",
  "key6": "2avsm7SFyTiENQ6Gf1nuAFnndL8oFXmAeU9evjwCStmmwncaBvqFctWiquCk23e49oZzZUna9TVjJoDAASRcx4cC",
  "key7": "3fcYFB2GwxPsZrTrVirm7KCCcmGj12XaQaZTpm4KpER2C6u2qgGXFfHWPoMZMmTyRSadyBCFE5kr4DDinYSmS21s",
  "key8": "kjLhsrwVxbChgsca7Q2Zbw8a6jNoDpo5Rt5uCjF16SUp2ijj1w3ikCPaGLi3wAn5mXgE4pH7N8Um4wTnvasa3Jx",
  "key9": "5F2aQVLqB89KYZf4bzP4Q2ZkSFUwvizijuVSxjXHEVF6ywgecTzgEUmMs3joKa5XHgPpaREhN7Yh3A3vd8PZUMsd",
  "key10": "3PeGSBMYibCemk9RY5LjB3nb8hfjyPsCdrEXEryFCFWrXTrUHsaAvUAK4eBGS5bQwhGXxTk62ZSERiV1ao17UFhK",
  "key11": "4E441PjUGKFLov39F4NkmLnrts4MdeiooGSVyFtBMSQLi5NEBvzE4sTw9mjTuCfALFCrUtTm2tU4GHqVfsUw5S17",
  "key12": "KGTKmHRPbMLdRwsXQQGGTPnzNwk5oySVtXxgFPUVsw5FTEUsXf6UG7mX7mCy3Rt5oihk5QHTniiNp28na9uAAGv",
  "key13": "LsZhDBCSNZernHL7aD2F9vg6Nd8gixQGK7HeSTue6irLTSaPxCUhbaM2ngFt2mtpyKWh7xehZM4csQCZriS9QjN",
  "key14": "jKp5xCyQHZeKKeN9U7HmEqaQXXAxDxBiEoCYoqyAo5ZLBa6fb7sg5SLX5LRFv8eBk6obmVmpM5Uh2LN4XRm63BQ",
  "key15": "3vZT9XFkFKNmcDMUv52kSL44rBdgRSHWsD4Wv37MQAfubw9SPYbZX16N8DLeN5sJRobbyRg2o4RhqA7gdQRcNKoA",
  "key16": "2DZcH8W77MQEJLNG69uZYAT2gsPXLYy16L3GsHSD2K61PFeggTyeZocATDNRjwzBt6qwsuCU59BLN79RVNfSJhBP",
  "key17": "2nE9YYvxV8exn7unT5dkYjpLYd9jpc9CqU3mytkFJ3bz4AeEXrCtDCWKBSKfVfxm6RDTLLPQ9FymBy86s7RMbrLU",
  "key18": "5RApqE3kz4xfBhTWMbzPfNYS9qa6YDWXYSL23wFVuJ2ozfQgQySQe4xh1Ge9cpTjB9e2RmCE1sAY5gYi74RRZd5C",
  "key19": "3AUFqN95e8Ho4y3gFRJZHdowygQGeebEbe5n2otthHFHsEsW73UcTTYjnAqJqEnuzehAe1LPboywYWa8XjGTqy8h",
  "key20": "2qjNghjcFVjZiLFY6fBfMnTCNxcWxEE7S7GNgyamV64R7QTVVQczEBR8mSPMZdmxz8DB9pBKdGqCSAeJYyxMj78o",
  "key21": "jhfsu7VNBSZQzxsgonfYWShGC4QY72xgdLrAF5eHHWY2Bv5vhADA7MgMGhtjX9bjo9hn7RcqqRef6jX8T1Logmo",
  "key22": "2g9UNXznLzXiTCj9eDc1BU8Dt74GxDJdzseEtdCcG2MHktTzki4ddPVRhpegbiUwXwbBYy9beLCdxrjGgwqum9Nb",
  "key23": "5URjGgqKC8rrimmhR52a9fo2gybxhV1cZ7dGJDuzSQ5R3nGxcbmgNPvAMdeVHoyhxtfUegEZq9y9zRpxC73YY9bf",
  "key24": "3vGheczK9BHbrvuuFfeMFqpZgEj8ZMzZVrawUXapwyGXq7Ac2zoLjyDyxkAUi9Myh2jHCqFoDsWAXuhRmyAKL8Lk",
  "key25": "5yd7uAZmw5oMGR1dLvxy8vAPoBaKcqom1Z5xgwGr7iXjagGKTdsNxMVGHo8FezQ8MG8odv9yYqHhqVrxbVFUog9J",
  "key26": "2qPcgUSb47XYALGzN4jauidYiAfB4vZS1BqBd2FygKRgXZvFPHbvYGXcxYMw3fPiooKGxkBwCyZnHoQVa4aatnKU",
  "key27": "5YrpUSaEf8LvgYq8HepVo5jkFWHWFrt6Fs6FoMFbtLRi7bmiSHAuvBo87Wi8b2vzPdaJtunAV5Bbt3eZS62QaeaX",
  "key28": "4a7Yu71bJEAyxB8SHac2MixpZoz9YV5GmYFmaH3otuWjxF9deMAViX9V8U4JbnU48HRMSKAkGRjq7YBgVkEZvjH8",
  "key29": "41biArLwyAW5rZmU5yx5RNzykCHxxCihvuFL6UUkogitK4XXXz38cXAxtnbrhbYL6AduKPvsjRbgrn9qVWVR7DUr",
  "key30": "CSfdPHK3dvCmAJSnJiEFbSxybsvQdizKa1aAuWr1LMo3LwsdxkYE9Nvo9vkzNnvPaM2XPXZcVVg2ftMsbTinoJR",
  "key31": "4h8xEbri7JU6qWQo1vYy5wYSppeoxSAmKqf67EzDLVCsGJgJjxfp1q3PT2f1w24Jtyu3pwpS4jWpJ3zesg87zQMF",
  "key32": "5ASEUFNixwNhFjdqmbXtwqTMt5ei1JK2y2nDrqrcFRsr7xjnhsvfrzCawJU5X77oudvANwtHCwHzGdVWs3nJySTY",
  "key33": "4fo3RKPYye3hAxbqCCguadJAUBDc1DKPAC1xPjCpSYVpd3DEfd8sDHD298fA5imti19M9kdARdHTSpFh1A4HzJ1f",
  "key34": "45Qv4dxDxcP7aE9y2Mv2Grtn1pWzvCX3mMKMFNGs6pGB24sEffWAduYsvnwWj39fTEudTEMhoqH7NCkMVLmZbPqb",
  "key35": "ibdPGBmDTQ2AXfjiHU7i7UQe7Tbq4y1reqvCHr4tgkeP4E6GbkAZC8LSAJwVnFhMqwJsvFQwh2F5SuqGDUSVNQP",
  "key36": "213XXHAroM3Zdy4MryqwouhFSsRAknuncnAjrPWCYPkxmF8x9jfFuJo72VcDGbvgNFFwPr2cd6dxX5UToU4r9AmE",
  "key37": "4eEMmKhTBs9yFBqUjc8dJUAN8HvQsqtY6UNG1Jt46mJnbYfdtoVPwp9qBiRU17yv9u269Ywx9Mj9ar1pG3XBz5Ef",
  "key38": "3KVdhzuL6tdMW7wasirdtivenhR6zdWx6A7gomfz7w2xhE5MQveU4zE7xpxovAsh5MCPMuXhFz765dakyv21BzLj",
  "key39": "4jEPPRRswgW6BR2gyKTSC632gUucdpyASQDoHdpEeogjKpYBcCecSeVJc7bT7EFwzYEmEUu8KibZSfS54KdP736E",
  "key40": "2oWffBGw7nK2DAfyeh5EpFvkwu88PCe14VvszkKdZptrFwxGeGMposwD3uGm6TAWJtASmZgp7fLAAF9BwVkHZWYF",
  "key41": "5H2qKMVCvSnbnK4JB6zxbXdKr4P29h9TCThz7srivgrES7TAZkvpD9rsE4Vw4iTQELmGg4LaK5iCNcKk7BgatEbZ",
  "key42": "3UFAjJkEnCgyHCprfuMSYTMAkMdwnvKQ6toExbJ5i5bsTnoo1neCv157v64TKeNZnLVc4HPdM4nFgQzzzsWhPRXs",
  "key43": "5znX28NQUraqjLRhWhapLjEPjUPL98KXCfwpP9ApP71PLEi1V7CDMjDgBDwJt6nUUp2UgpoEFPptaB6Gd9rU9QpH",
  "key44": "qW5dbxmHv7ka2xo3HUUu1fzNSoq6WcNz15cwVZ39ZBgmnZ25XsU2qR4Tinu1K5uh3p8BbHzQM9LSRRP313pLagx",
  "key45": "QmuGh9sNKx7KoWVYovxwZ5WQr3mq6AXuzM4RDM98eD7AZF9xvzTwQCo8DosJxiUJsxFXouieJVejfd5BMeNmHKt",
  "key46": "eGvp5ba45qE2a5jYsFKVQ2d4xkH9V3EcpAg17DYk8cQ7dZH8X6TFoj6w7pLTtgi7D15un3PKPLhtLDDkjukLYY4",
  "key47": "4YGoWQhvPuJBMppjwpqFnhsZabW3AGwEcpVmjaNWbjFtdUyU3YJnJvb5T96vKVxRiLcJC1Q5u9PEaAmgt7AbgYum"
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
