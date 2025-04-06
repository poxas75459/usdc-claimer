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
    "35rajSLiE1A8xmFM8pWu9DELN5Pfge8SvFmNsTfP1TZzVPov5ssKb81U68mSXZv3kRUWck3YLagsbnKkidPPGfKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HmFPrSA3o4jGvdevyCKi99bcgkHznrdQfrNu5x4eGp4ZNTyWVbcUn8spvLafDhkgyqG4nSdTC5489ii6EksKdqR",
  "key1": "2KpCumhq7xq5HtJWEHC9tzCS5eQL81L5U8f1zk39oRWbP9fN9rkH32S7y7CPpEJtcSoCWp3tGBegfB48RjE9fsS9",
  "key2": "3K8tWLumhzLTBmGykYGpeLPYxJhVJ3QM7oBZgn1GTnii3w9kuqkYHRXWXxAjqpCTVkChwEGYkR5Dggowgob8bFEx",
  "key3": "3Ynga4CUq1DGj2XBBDdE8krtKcz6RXjeYoFYT51spZ45sZNyUosRMEZTv3vaopqCLwxTwdd1uZZXUnh2xsBGHcx",
  "key4": "3FXm7PqxHvBGZx3uaRcFjic9zeRcpuVc3eYCu2ZaTT4RxLwgvg4UNG2zC11Bh1NZYhkKTxJLuztbAYaxtJJ2jaia",
  "key5": "SydBC28vh3gx2yRZX6Df3avVCpFCKY89sN9xjEbTC2924z9e2c5PdSnC5XUNTq4JiywxN9iEQuVZH3MtsdaATqs",
  "key6": "3LhxYTMFTryDeBETzw9Z7B7Pd9xNc5fP2TsSfh9RM8NbjWb1SifnXaBFGYasLzKkAMxiJt6uY6ULHfPp5orYx9N7",
  "key7": "4LJtNnNhVpgnGedMsFyTSrKiCykRSbqYrj7w48QejgyjjNeYVtsgjCJL5nsHAzDVJo3NybekxjSKDp2taC8hYcpX",
  "key8": "5qmnA4a8aaJNtGm9L6ECz6HtYLwwiPQWY8Xaoh8xJyaFRbAW7rchwRwg7SGP5StNgFbmsGYSVddT2KXSBxzUceJE",
  "key9": "4c76bTRbgssEcSVkSSBkU8YQaYE16pJGXbuE2YpCDodjDukPoRAd1QomH26uSfGkruFwPADoTbZVYCVavnSJ4aCu",
  "key10": "3cvGJ7nEFWQpLPqe4sgLXvSYHXSuU9HCaLo7SeZ9L3v8gtNUGXDimMVAtWig27j2tfeTJBpodAALpwQEbLVX5k2C",
  "key11": "5X7AhNyCFg1p4FdLBX6FhmT3bmUXBi5bD7ZnMbhggfCSxqxx9wFb77sABJxq4qvbr3rGY6EPSeR38U8Y2xmzHqbe",
  "key12": "2KskWanERAN6jUfBnnayJWRVgLGhnbKPPt8BKPPpBiNmt5chRhFeB3U7tgqL2QKFMhbCMvoJkzLJrGd2oVXi7JY7",
  "key13": "YYJZkoFPYftsUrrc21XPYgXRQb3HWg96vDjGbozy2kKvzPTeA7FWDgH9qg9XCwtrCD2wLDFcx3roPSKcGmrMeAB",
  "key14": "5Xa62EcQ2PrXqrHe5ARTj3vyuLt7Z3GcN6k3M1Jn4WihdWzBgMkhWx62yR6WDDmRFENFM6dABGvtTQBXuAjimP3g",
  "key15": "Vb58kYYDXvSzfjjxMxBhpUbZj2LmiEsFC1p4kE8F8NWBUVSzwqLungkxn6ssnnjMW2i3TvG8XUG8d7y5SfMj148",
  "key16": "ESDHJkEgJUJ7QNUiqobToTBR4yCRd3au3Cd2587XtFTcQ8bDJJAoiQBmUc6QQ7aju66NWzFVmYats8G56AzJQ8K",
  "key17": "2L5PtiZ6SzRSpx9hTE2Y5itMShreJDbbKFrkzhwGJuggZxyDZbuV2AMpQJMZfcAbVtyAckejzEmzghskaJW7gkXp",
  "key18": "Y3zbVQ4MgJuEucL4HAXzCRzKHdEtVHwQm2tkMDxjrsnehKZSx5pyfee32MfH6rU4wbDKjkufwErYpFJjCGzKQwX",
  "key19": "2muEQTxWNQazm9NTPkfJ96bn7AyDWKR2djFR62X6YKZNJRyirmWGpnSsGjfncUUsH74fXSc43DmiDbEuoJJUrYWF",
  "key20": "4jqm23DS6cJrqu97Nv9PA8ESv4cujqhVUsH4Z5qBkCck9kgFX9PG9jAdqj8uHEHVJnoyVDEfwkvP6AjfqwSsyVg4",
  "key21": "2HYUJC4qX82PRn1Z26P4fj9ZFjMFEEYq1kD8tzdL46ucxmtVk1sKTn6EZoQSJAepvbBsfSmoAvv7S5WwCh8Ed42r",
  "key22": "3umqMVAkffm9an55bYtvvxBAf1iA9M824aHtK1cTLs5CxJwzDi6HUmKpKLohhtdxkmDL4DTZ6TdAgfbN3BiEVgGn",
  "key23": "3rCArssQbEKVPTftakY8uKW6buN1ceEXx6KLCAZnRpdcVrBJEwcm6gE1gWiBrqhithH2TeLWk6p7XEXE4ya3gXJE",
  "key24": "5TfuZwpB5hgdNb5Z5R5Svt1hsBXVN2VMb9ddFBWUWcz4eKXsQgQ2kQBomPJpsLAnr8hbPDLW1sScmMdRumhw7z3J",
  "key25": "TxhUpJ3vemvGLXZvf4PUhzh8QB768JtX91ghrix7mHyfSSYeyUu6wMbBeXqqNoto2VYmX8WXXq394rkc8r9CbVf",
  "key26": "4C6hgx1akXSfWGs1QvZyKCakdWEMdLHJWv4prbrxA4v6FNy8q7647eMFKmqUPjGvHLtwCVpXAGLPpRqMjggYjAFA",
  "key27": "22g3cmyf3d5weBJVACoGERzVL8ss4Bc9wZSppkNvGMV51aNusGL6vh7novekgVgCfM7kge51PN42kTy1w9xjwvFG",
  "key28": "3FMTEQkDmK1r8nNM5MvDpWeTU3o83jVEy5rEk3RuRDBg5s57Ybb4HomfBjmep9YC7Qt1AoKop3B66vvTgykZ3YHu",
  "key29": "99nruqjhzdKeswfgFKZ2VnkvVKA5vFCnSMsACq6GLG51aJPay8v7F5oKirZcDzoSFsNpKHomEPsWsQqkzG6apZX",
  "key30": "2hnrPQr5TGGfWnK2BVw3CKPEyL9k4QaabRSnkAkkdCGabaonzUe58qJnM2ZDF2PAdz6Ngptit32wSn24fjckTA99",
  "key31": "2iEMmbDmd1d48XTWTJYQHK4wrNx6rWwyuFD3UYkyAT6J1xi3SxWR37exLE86CBazCMd4gHRzDJ7yzi3wVhCWDm9i",
  "key32": "34fbeXDV8FYc2C2ZHFNZxXDDC5Kbs2JWDhKWVGXkkKe6rQErEiWkCZasZmBhPSoJG3etiERMjVbLwxTDsr5NJyHh",
  "key33": "22ATHmUucWjjWarLuaubAMNkpsm96a9Kv3zmc8mi4s8rcfkZr3qwdiF8fUw63KWGX9HzzsstvRw5j3zaiLskUcqW",
  "key34": "j4YF3gUPtvAXe3wVvJNmkh5f4aXaUjUkAovi72NxccKqqpRzjyhrhjDmKBsEULJ9bvwk7GfUHVUaKp7ZyUN4Aqo",
  "key35": "49EsnKAU63RjwQQKZornBHqSy5enRtGYWZjErwoXTtZQm1wq62MqKrJmzxgeMECuEsQqmKoKumT5mnuTHwX8zHgu",
  "key36": "5F8EoTfwkEQrhKo4KrrRThixkzpZux8Ei1mKtUXF6FUxNpL2dxjMCaRvahKezGGYJENd2ApU1oVvfzFemeioxpgg",
  "key37": "4NVVNsT7rzdiTADg2rDbxrBMY2ak58bbbBzFMrEvzL1U7BUUWg61mLACeAiU7zEAU7jALRYzjh781cxYkbrJEXyg",
  "key38": "36vdEaEA6Hpnk6mxfJvyutCaMZtqs7uE9R7X4fQiM24HuMsP6hG8pYyhnxWu7EDffTcrXadAh318voJmPFUtBpi",
  "key39": "4c7NQ8xrvwbRRr2oAEnUNiorcjw2HVhVSdivyBVSLMUEywkPbBAHxC2xLg1K8NeAEvL41bjypNsDHwF6JMPdSLia"
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
