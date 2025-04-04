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
    "5inBN2MDq1cfUkmgDicprzUQJF7hU27Dqc41fyCaq1ahBRATuvKrq7qz3fdA9KhhXV1UWDWXZCtU5Te2gug9qXP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uienUR2diGfKPn1VffQzMFXU2jnB1bP1sycBWYe5GYGVYerQFB6DtUxMD7RaVwKvYQnZNHKR2kCCnch9VEZP4h6",
  "key1": "26dmZchc3ZGDN9CmyUw8SPcGct3mCKXm7SWY4jWPGeHZy2h4eXESfCAGsBbjDsQQPKp63kNjJt973JRzFCqDTq5V",
  "key2": "5om9Wnd2Qv1mr2dCPEqB2MPJKcugN8FYCzVoguGouwSgWf6skFYCKn1egc5eWS3z6fFvT1pB6DAvHBvzGzLjckkD",
  "key3": "4aoYqyFCZ647CQ6W6GwNdH24qmPgWFTU6ixnUaQWKRKQaLWo1CWU9uVdHXmi2Qu8FQmZMTDxCx7f3ZLcSjgD33Sr",
  "key4": "4N5ivu6uNHREspvNeALyFdjP9aHtGUWWtvcXTp2FtJdHvjK9H7ftw2ADUp3UK4jrffywKdkNpGZ1ZVo89HPHTsdq",
  "key5": "2viNiDCcPYSxiSRqws3BE7bzvHg7cy28dhQbV7tGiTyxMYmbtke1iab8AZfY4f9ycqmbnPXywHUdYyxMGvmckfm",
  "key6": "555xxDKCynt1yL4tRBac1jhvQ3Jhth8NhhzEjsVUN7DWqXY384tgHqyFKMR94pKxa71iL8TTUdtKa2n9iGgXLtmK",
  "key7": "MzJD6aSnieAfkYLukA46Ky456jfTXgw4thFf84qbGqRGKVzdEqeuMQD2TKJequmVEMjgB9VaXFoQaHScPHXNCAk",
  "key8": "sQVZdiLbLNFzwrfePz2xF7DZZGMSq6sBNNS8GnHgCfynxahZJrWWm8EjCF6Z2BmUP2QFMqA7ZNkrij1C8hUNAv8",
  "key9": "4spJ2yhRY2gNeQSCH86GQgq9KE6BaetHL3txM5LgKur8dpaXWcLQxZYsvp22x6WhWhjUabuyWkcBytaCNFXZ12ho",
  "key10": "3PQz1TcE26xsiW24LT4oZFC2jw9RuPxWPpKf1GXgpQ2gP2WdvZ7UBGqDbdmGmYvqcy7ZAGqgHknwMPkuG8Jc6mZz",
  "key11": "4kUUkTscdfserMKpupwQG5rdueuCSSRQfyey94vvhb9tpAWwqL4ASPxKTbKLvpnjRZVXqJs2a7uXPSp99mBUQuyY",
  "key12": "3bsu1GocpXbRsCqCvoRwKmEaKvW7PYQ4qghCsXzqzjWJguGdbPcb9v1ncQTuw7r8158JBCLZHb5f7wrieGHgnyxX",
  "key13": "5j7LdnyDDUSrn6D71ERAAPC3WaZfBtfivRzEGtJLErVWszcRwkL1BjA5ceCPLh3toQkLzQxj4etyzefVZWV8Xtx9",
  "key14": "5yzfBsFqrpKHECojyM9amm5HqfJdY3uPCQXdZJbLTXRjFMzdmRwhtBYZGecAdnFB8H7Q4mqKNFD6e3GrYvHUg7Ym",
  "key15": "5GVLVqRadQ1HJDgz5YixYMa2Sf7FWU2CQfPoeMAz7BPs9RLHSHHLJtf5zseLCHLMD5VJRDTkKNrJjUdUneSuQHYb",
  "key16": "4dBThVDyix8TY4U3bb1yuLMAsQta7dJT3FTDgaDqtDpF8jZi6Essa43uRpgDYQez5UGQWVaLb8gVHHg3SVmt4YNU",
  "key17": "4hAT2pyHvs2ZXcm9KbBUAa6SQQK664YfvbBrvjkmHaSLCq7myD1swYvk8LtwheGtfEB2DF8VWCbALRc81D8v81LW",
  "key18": "2ZMSRHS9nM7VTCZ7cuaXdwHNgvTASjXnzY5DZpSQ1hzejDWRjz4mjckcMYRN5YdG8Bn6zbh49bKAg6LqtrYixs2Z",
  "key19": "3CaMCSoU6L6KUGAg93dmZV9s6Ayj9weWyHcrEfRsQHUdAoX4QrV8dA3nHBGFWoGyPNbnf1gwVaeNnXRYS9swojoe",
  "key20": "3nGotHet9jR4UbHqnTp29oh11Jv1CfWWJdTeiUG44diWmE8gSaL8o1nANbqHdYCeGsAwyXecjooet7mWTvLnewpd",
  "key21": "ngNXBMWzM9ijdMTLmdG2ipx7sgfW7AR7ZfiVsSY7RQ1fqYggDiH2f4iuZYAdbUuvwbRxHgTo2akS9EmmwDCGjn2",
  "key22": "2YCRC3kTC3zTEH96nBRc2ucv4fbWG8BdufvzoTLo4i5UFR84o37EnXu6BT4ujebmWgBd6Hs7432mCFJtdAaiA6kS",
  "key23": "tdFBvJnDyUj9dtjvzZjngcPEE55Pqh3ePiek7LRSNR11DPAq6MVjLYka1KEAb22BsjdfxcX4gbtH2goBJjBD4WT",
  "key24": "4nGoUYst2QQBfVLgQaG6yGUYsHN1PXzjevQgXQwW6cgSr4arPbnwb3aC4Bsm1F9AbJc12ten3VTQR7jCX6L6eRxk",
  "key25": "354vc3Qh5u3RBV3khtNpQo7iVA7vtmxZp9R7i13XzGJeWck7JgoQH9jGybLnKyUdpVqtDqJYZCYjzYAE2tVG8Puv",
  "key26": "3XzhaeY5iHLLLTHGG2r3via8uA7aLGtwJMZ1hz4CwdT2TWPzu4Xje5iEhTNvGW3C9rfcRXNrjPpupkgco7VNJK6u",
  "key27": "3N14wr7a4G8fLy2LFu6X8SX2Nri8FR8VBswsi69kdvG9NFHNJrSDGfdScdmoQqiKSAMgbQdaCJ8SvAUb3rs7FkTB",
  "key28": "53uArqbvySE7d2xXUDFttFdxEEQyzwwoRXVX1mLvaeto7EQHDB8WW8rd6SmvjcXsD2xBfMoHd6C6kgsjxfZqV1up",
  "key29": "4phu9FesXD3wxs1GmC9YeEQKFwh5VZbK5X6jyHMmYq8ysWBgtk9kPsSg6STNk4vgtE7STMYQ8hXdKf2LqtnP2Rnv",
  "key30": "Dqf4cXWsNL5s57HMAKwB1t5A4qsBiziUvVJXwWfiuJ79kY2UXTYLfXMKqztfW6x8A7uXGREo6mBWrmhpMhiw6hG",
  "key31": "3hYwfuGeyhRxTG4Uw9JwmwGimBKSoruhhAu8wqUjR3Sxn783tmYnCn7PRqjqwrKZxTkfXxacnba35jGrMF7KnZT1",
  "key32": "F4wAZeAGh2d4TvnTeibPRFMmzDeJrbzVsPW3HZ1xME3VEWKWwp5stjdmhJpyTpxJLiXiDuprYptHZuj5Yby9gqJ",
  "key33": "5SZL8nwv9iRGapMuicTRGf1eFUyEAXLoKv6MkqwEnB3zTLvUCNcbB4ZfP88E46bhQXekPGPVCLSezYBTvp2ADYDV",
  "key34": "3UsxmnewZvHGfC6ppov9EGy3Mfypktk3oU69mugKa7gcXFBNVFDNYkY55arDmnrYkGNq5hiKtjfRcNnaK77qVkvZ",
  "key35": "3QKgDM8nEYz4GQhhgQwvbANBs1PmwbDte91Fy6qeBkGEjnGBHi3RoDK8epCzUewy1EB6dq6VHppL4kmJB2o4ufzc",
  "key36": "3ou7jNzWUKmjy5D7sevx1vZnDJYVG9MnCvSqKQPWTc7CvgxhbcDkbNHLKwPLfmuSDm3kDzvnBJoFeDZZ8nznTDTT",
  "key37": "3kRe2DXJRPDHHviwBczFhNKFFe5At1wBzfQEFBudhLET67ZwDy5WF4Tq31BPT2Wwe7X43Aa5R9gwBVxzAJU94KK3",
  "key38": "2yn8cckhzsoWxJ9tQtRscpVqD5JKgdSJXza4P7rNJLpYpk4qj15vJ3kPe1yVakM9gUsx5fwn19YR62WCG7k3DQBr",
  "key39": "EYzd2G27fi6EsBxCMYonx9AhC6jDnyMwq8rrhie7UMawnoJwWfumVuedKWLWkNRadw7uAQ8H1L46pshUFU4CaYf",
  "key40": "4oDsQn1NWRdARUvAizs86m2b85rKpfkTm8TW6PfyDBVNp5H7Nh5mKcgW9awGzj8FgLKLqZtqfo3AAP1FAwJ2vLN5",
  "key41": "tc2Gsj9YNTGbbrQShbaErh3XEM9BgYVSj3UFTG8gUuR5v5QARwmm61LhBzK7dmikp2wo1XXRtRx3Vv7kM4E44Mi",
  "key42": "3Smimajh2bRJYM8YomjAbx6AsiiS9nmfMPkpVULyajM5YezTf79z1nkaBCqgjLWk7adQabUSnSKdi44jiJ3wYSCA",
  "key43": "4wT2ZbjHeFTYDKsuXDpgRhZcxme1xXMr1yg4D5VgjNdt82RYe1mRXpDdk4WH6MT5Jv46LEySNvtENAo1oXup6TsA",
  "key44": "5DBhFkn5ci3nFTzWw4CRwo1no8MmPyDfSiPDGJbu78sQoHkjSC3FTGtuUbgwWLf15AYoHytFRLL6kc2ChohXdZvz",
  "key45": "4dJ2f2ZcQ2eYvPT1D1Hsapn1fdJiRYLmAZThofJZBeQmjDJo6R21vsnAmewMREUip4h2bKfA1YsAnc8ocn6JxUDd",
  "key46": "3JtdyuGVyhSK9yeqpv6KbpoQyQmsX8ocVdQaGBHrWa6fFLUjycsE9xdwL712f2D3BH3SQfu7PbEcWkCcWo9jiUsx",
  "key47": "41TSN168mkp6U1hx9apcsfcajMaqYPC6UyVSwuLJ3CY8WjoDGZ7oeHEi4MH6gVkGxityNLySALV1HqNQNXvCQxh7",
  "key48": "3HhXjsaaQfuDhzzdcmBfNbiMcez8ttmyDebJGinU7Sxz6nTTW41LErK2TAk89QYSPcD9SPQ52Jeg7AjcjaRgy4zy"
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
