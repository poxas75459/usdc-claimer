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
    "2d4GVtB2JxRKrhgvgDWM2KXP7XQygS2tKxLxT94f1NNdVi6mvtHLhsjzCv7SESzkdNxgb12CDhGx4QEpzjhMMcsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36h2GMPvzgdsmbpZqDafdkmkrEGthkQy55JzeqFFPCG5EE1tBTMw8or9YBf8tCTxwyKTLECJazKFa83XjwTSPnQS",
  "key1": "3DiErvtZvydEyjyiYKdmBeWxdnMVEAcRDMiEB8ckR9Jr81mT6ao5XfMZeUDnhRRAwAysa8GfS4VSVKwTKeCmmStV",
  "key2": "MUuvZqRrRDHrRkhkERXzbr4ZC9WmEeib9meYDyEoQwX3NRSiibutXWPXXqERVoTo4RLxPMDtjJ9mYPh1UzP3s9X",
  "key3": "t7BzuiZFSFkJkUK1o56M5Xzzg9HYTgiBvq6bMmeHqYZV6NXT4RH53DxeZU97tUnejZQTXD2G6QVPfPn5WThEkuc",
  "key4": "2p88yJfyN2Dq4aZGjSLisVYFLvT92PMJQJc8wYffs5pcjmdx6kce6qqUSjoTJp9SxqJtmVwUSC1BuzMGAj1sQCBH",
  "key5": "3VB126MCqNE5xYwy7focJpsKJrxeo2Nwm4gyidBXiSL2pwdR8Mqjrc9MiSg7KoGg8Vto8PSMt622JCX35pFwWY96",
  "key6": "4ci21cjdvzVT2egurfmEx515aBVCZwyLtX7tMLNv2tJgzwmJLEcBRhH7eRsiWkn5KjhazazURnmdfUTV4ytBkVdX",
  "key7": "5WDk6a1oY1s8NHygb4FgcvRPDATkgiGxZvghUCsDjWoP18645MJp1rkhmUYa57vHhV51REe8ZmU5Tohmmr96WSDt",
  "key8": "3RZ6soou6HUGigiVK5YR6aU6sc8MSRGok97TcamRR9UNBpMPm83ZwaWsVoCphQGfR3dV8R8s4wakysNZzadXQovK",
  "key9": "2MFbGtTChZ9SwJrXGouqCdYJ1KLCj1h2tCqt5J4gUa1QVFm3MPSzcRZcPkozzoUUvFvaSYcMmwKATZTXzKqTRSnj",
  "key10": "oWWwjBfhk5gnNLTF2oGdmSq2Csh5Tup5qqgtVado9UW1wRXAe26cpNR8kG5mE1X63gYxaN9934kef5PPgSaHU4E",
  "key11": "3Q4QsDGvoBMeNWxGqv4zHHfcvL5JMK3G8BZzaRvk6VWQy2MkdsFUAKxCaz34S3CFjySibkEyPvuvHvhQ4mcPNKN5",
  "key12": "2U6KNb5HAnCytSJPTfAsUAqAbVBWnBN78G6DZCeDqQ8oVv7KwWCuk7aYRigquAYfhgTDaSyYMPeNvvZmnwQ7qBLX",
  "key13": "2nb71ueNoBNCYrLMCB8NEbhHRU65rGHeRUHaMbagT95ypGGhj3mTtuMDZh23sttob6xDumgTPkLhMwmz8B5qcEMu",
  "key14": "TmpDWmsq6r3RFRHzt7n3VioSeVBKLBoXnezMY7X6js1AyVDemFjriTuoAuaJZUdM2WoSXm8QZdxfntcubS1EQfK",
  "key15": "5ASV4i8EMKfSwBhj3iWwjnMDogc6ELsEthKsPHMkV12JNZw2LokVmaAAaZpJ9VTaVRyBVfbhJ45sQpiggRR8cDsW",
  "key16": "5gwc3bJFHVBXf1HBWbMe4jBPyDF3MNRvXwHn7Xb4eEALogJsfVAatG6M6LQop4mQ7kvfQAGL5cTmRvYPah1aps2U",
  "key17": "2qJA3XPeWynube4ZP9Wz4HJ9Hcxmm3XL3RMG12fYcF5h9uHtcqtbnjwqpTdR2Paw4yNvj9niJSgr4AbngSXDD7wK",
  "key18": "3zNLza1fJn91otT5aLG5wu6nJe9YxQSCM2E68h7nL4Uq44ApVxEHmL443oSjNksn3fx7mPyEcWjqERJrupxomX2Y",
  "key19": "3MoTdzHtz6tgXXo9ju8d6FukRgznENr3d3wLc89ZFfLkPLv9ZetJsPYeBNwNDnzVfuzQBLPe3eUQkr7Lk26pwiLR",
  "key20": "4C4NyGgkK6tMduNJ7jkVjyGTgNbfjrPGXv36h7rrbCadv6iqDModBE1aLymUfitLkFrpfs9qhvxLaZoTQ1Ga5hsj",
  "key21": "5vB2nzg3tn68XceqE1uhSGmoZHyAN8n4mSgLVAu9vuF2VtCCP9NnTHrWy5cBpGjuuR8FXtNwkch3Zw5btDzeJjGw",
  "key22": "XYhrEwe2iyix4BDi5svmQCLFVtCRcbdde5SxPpm9ECxLgjA8vPy1UA2pC2G8EWqPX6oXpyN8987dX4EcdqSs6j1",
  "key23": "4zCWaNrHp4EQRWYkkT8U1EVrBsqhmtGUT7ccxjSHYxPQavnW6i2fWivQkDxTRhgLsKes3KuPgHaSrfLgPfxsmMZU",
  "key24": "3VTTh1EL8SjC8ypHGgqn8zZgfqdnyhmSMQduv1NtxnYEiVVeK2mdwZ8gRRUjzreX8UsB3yNF58BkqBUPxEdQoiVN",
  "key25": "nKyMQhSr6VXoMEACJT12WuK7yxLsjvLihcSpsy2EkURtuuEvLH3bmkwtm1rWhnnzw6UHYmTumw1JR3NSvbT3TV7",
  "key26": "r8459iRmsAu1Z2YhSzd27aLCDg3Te1D5iqGzfDd1EaZrhyL8K9rp8rU8PN8mSarFqGb3ChEM9H6g3Xe11w6WHTS",
  "key27": "5JURLgeBkf8NzZYjfx11JcfYoqqLNgJBy6yqaQoQ1Y7SrfURHr6NAW9LKgseUkDoUEB3fiaHozrPdhSp5ecV9Yf5",
  "key28": "2qtzf24qaV4LGdj273WuuJedn4E5LPsmZKKvUHfkLXaKVsyVbrrCN88sMRxLSsWBiu4et1B7rhUJ5cnMn3NopXm9",
  "key29": "4YgtBpkrsJkZijokQksnX3WfQoTqBKWbQT355YxSUu3p4iDjRhFoRdy9jVkF3DbR5Q2qY7Pfy72YNHNahb9uxEDy",
  "key30": "4HVEPKLT9x3EChS1X2V5oWoHUn4qej9jtCWHBsMZMAC6kQmmR6iQ39YSxK6mkhQWZSahA8ixe21Fx7iQNVVbBiVz",
  "key31": "2y8Ni5PvKfz6UJJj8z7mXJMNrEer9EbYyFRpLyT6GJArDRRvo1bmmn5FrL3MPLkpPLCF2HTXEdmbbHc3AEwEVnv1",
  "key32": "52LY5on7f8XekbH7KTetnpQVFHStoqT4YhLD44oLJawDKpZRvCDKHHbZAMVUrZXm3ngi59FVGD5G4y2z1XFs3xoo",
  "key33": "32EMeHpzZPqLwgvRrENKZXoLVUEpux5WuRyqPsrZczoTXBDLCmUHezXz33ErdZ2QVJKugkUbzmof6FqMG8c1gmvY",
  "key34": "3LvXr5282wMBvnxK31Y5QYLCaBAMEW5qCKotuT6y8zKhzfoD6iBfbv1eUiBAkRQQ1befHvGCjGGLjMA3AxqswKhx",
  "key35": "5dFXiGpwg5FfX24W5HNxHu2WjH1iiFThuknz8QHNW8nTC9fxepc5jDb87hEtThxpoae9pDHgYsNiwmeeoWSovbt6",
  "key36": "7nan6rFXYdknhFUW9wUvXiyiakA4M5ehYZgtPKbXLQ7eVfNZopJY5tB9dj842359u3X8fQyM5UDuGPkvUdzJH7b",
  "key37": "5iLBGGhvDoo7dnQqfLPHj93YPswVQeNcDzg4X5vuQAu7dpcxyqfwzNTJkaUHBmSVdjCmZ4bTyRx9HtgH4Uvr5XMQ",
  "key38": "pNCTfAW83uBb8Wi7Mh21m3wU7rueSUVynnnZNM126vfppfXT1wXnfySMBgZcw64MdK1w34eryGwnwHqpDAiTUbP",
  "key39": "3v4Fa5r2mvZSJsUZHktztMR8yDt3fXUiDcXrnXt5NSEwcF5TTUCuLcvdCYLRwCS6AFTgpACZniXTNsRsFmGsR52x",
  "key40": "ASSqtdmwuBXKBNuEnb1LtEgSwLhK5uEeNoH5RNMyG8E6gg9P8mStry8XGYQYPE7arvFyjcR3TMtXuEgTBqBvuvk",
  "key41": "4Ha6G6nH2ezMTJTgTXWq1U81byQ7d7GQ5u9bva83ZAAeHLnSazRzPZpiSqW3DM6gdRZibx3zwzGrENyiNvtLFMj3",
  "key42": "4jEezAV9njLCUdSsWUgiLYFdFvemxR29aQ7ha8fCuMXUte6gHmvqyLtk3xy77oHcZDfT4sFx4sQTbko5FLgZxPoE",
  "key43": "8AMyiMVuvcLekjW1zCqfogQiqzMjqZWonBtrvrKM1NFzmogVkHKtWLGY7Krjofi96WJ7GotxJcMZRphs3jQ9jUD",
  "key44": "2mk5qR1Z9zvH156wkNusMpNGuTtveLFZKBWqqqi4GbgYVR3dRT8U2FpdVewW7cLQgGZ1ocD1qQzjAtCceDGQTuKA",
  "key45": "5b3vUJF8AmbuzkMkagnjrASRcSRKHfj39sie5jGWAPfa98XFM82BjGyRktgP37oFwurHhox6Xa9ZDRuoh7A1G2Zu",
  "key46": "3qzx29uSZZQ2ZEiFgJs8weWm6JfQ8hGykaFJDAH2Yf9JRyB86AdNECgi2uxm3rEf6EiP99U7iRXKW56BmmP877fN",
  "key47": "2FymxvUyorVX2spyPPJ9USBhcWGSzGHq1hiNUo931GzFk2Lie8Cu9eiRs55Fam74Gib3ZPHcnzNaaGkq4Pu9sWyc",
  "key48": "3tQBFwC3kBFRkRKrfXGQbzx3T3P5Exhs3WEf5UgexeDsqpYGsNAwXNqL87Libh5ZyJBsEuoAmwNPmGCB1z9MD7AB",
  "key49": "5u3q38TNCc8dwyUY1MckZhV31jGGfjzo2vxTDAqqt3ZTxzVkLVsDQABNxL8XNTSwdpKDBE7evKcJQm6YviMRFm27"
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
