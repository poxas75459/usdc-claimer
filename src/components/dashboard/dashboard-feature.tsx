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
    "2da32rDxk48qc6AhJA2xtA8oDBALPwsKjSh1GqUJSfKAPAJheiCFd5giEmhxmjK4umse3U7xcwrqJahWCb5gfZvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCLtpypLarquNK4kXVqGJ9uGiGzZ6hMeKqyDXLgb2m8ofxp6MooG441inWT4NtxiqMQvfMrsdozPmWMjp6LYat8",
  "key1": "4k8zY7NsxFXFYYnSt23ugcpTZASe8fCakvunbLHdqrpZMTYJcD4A4CDSx6W37U5c8SnrxtuGDaX5rNkCrdePo196",
  "key2": "6fMJy3DVAbqp4SFACXMk2NsvDeD4k9kMZ8TdvwYkpmxwE4N6jbT9TFdH6m6v9BsHKKaTZika25zmRwnRCyvJY2t",
  "key3": "GhUnBwM2B8cn3yCoZqt4CZygkdoDQER9vcSE1vH8i4mbRKp2gK43KHg5eRf97NXJ8MiE516dJWzQ6jLqXCWQFQY",
  "key4": "2HR2KmUYy6riJBgj3M7fpdakM4tDwt8UxJuNf5icLAFJdQRE5ynoAtYD5emspsZLGXXU3uy8y2W6WPn5HMBYELLp",
  "key5": "3C78Xz8DQbq12v7DFSL24ko6KgaHA1wcqe4QrWqqpkbp8BaQTCzUx472mHv2vkew4FxBxTMTkeSpN9uhtKtQezaK",
  "key6": "5Pq1x3jftv6jqAwxcoTD1ziWRDmsmQrjdz7Grc7vQShbiFh8kcE1cznncm9DLMaX9AaUjwcMPqXrBgMFotSxFnzm",
  "key7": "2nJhW453shu6QsRDdKSaYsYitgETGZpf6ZTBxKzsCDkt13xjVtAuAbBj6KtGgnwq9UCPvcuQZef6sTDi9fNkjdAr",
  "key8": "2VA1dxuZuoF14FgxrzV34VQmZ3cbYwK7eijquUj482mFLEafoE6PmMv2tWMQNkEBaG4Yfkb3B7P7VBVrghn3VeCn",
  "key9": "5Hhc2PECUBwa71s7J8SybxRzkhXZtWBTHFBD8D629nPB6L2XQxLeH2iJKSVgtkjG4CVAJz18wo6NMKManLx43QSB",
  "key10": "54Ai84q9J2VR72SCFinNCQqeMH1JzgoFQLhFJGeU35Dck1VA9GoF9fdu7s4mZwirPDNXgVyjPa1arjdwTC3TWrVD",
  "key11": "35BxEyHwxmE5xCJfBwqvfBqnGGS6cgSzoMrZ1tLiLo6F5iMRTzVbuJ8e2qGw6DenmjVo7Lm4pSAwaKPMmxzidWLZ",
  "key12": "4ustbChN4WDDU43BAhyqTEYszPhRkkmE74h2GFP4mUCXAGenV6xgYMdkQooYDo5seFsdG9W8FJJuo5XVw8vu2nNa",
  "key13": "22XSj44bkxSJVM7Z4K4bXY6cpSvKZqbKksKzt6VYnYr3qLHp4ftDhRqQSQjDwA7ZB3ScpdBBo1pB5zakCnabbJnk",
  "key14": "5rsbWBXXD1x11TxHoieQmG88djWV6txGphFnBCmuPPAvmqGzse6phEcvLbtTQsATq4es52SZ6C7jtrN6JpneTQ2u",
  "key15": "66Af3GhUCNqBXpF4xyaTjDCuhFuKt6jHCPccfcptMLfBzvsbLKevpw3pTNbtBjCHvDirtwUNwt5onz6sEGzSRoBS",
  "key16": "3wUiQLE3sT7VLVBoupwS325HMWYhnzmXAcxebUtayBR1ewkck9AE56pDAV5q2j527KchryMxGxNKZdPXUgnzkMTz",
  "key17": "2Ph8sW3twZT8KjPZWJfUAAJXbc2ddLqpzWHNECpzd2BBBZvNSGaQ7tJqj2g4KxV92ThMJx55uZsZqiPyGPovCyxT",
  "key18": "4TcwpCVkzeyTUZBoZv83y8MTw3CiM5HXRD5z7mBNPi98P7HbHFVarf6g29ho99jjaC8ccu88gbjMRuyz8TC7dFhp",
  "key19": "3xBeuUoDhuBwPxvBu5oZCQoVNhKczmUgEbz9Lu7aq2GqPFTVZjCBB8ZYWs7VcjXYh7sZjbTKGYe1GS6yJjT3Mkc7",
  "key20": "5vNf15tXB4t8eunRp2hdj4oBJfcT8QvFLGpM1H9VxbTDQfJfV5bAPXxvdQArMqfbtcdjBfTL6DYm8hD5UzH6Zwy8",
  "key21": "2oFRHTe6BR6vQkoKYmnrRDoF3rfzD4HL835CTws15NXrrQpGS3GKf6kiKi8cPBST7zHYhussfr9rjDkG7PMWia8k",
  "key22": "5CbcZy1sLH6k3Ks1rzLt4fDRejfEAkWMh19ppHtnqiT4BTfue9o9nxeYNJb3u9oPXPrL76Tqohpjvm3os3TP9FPB",
  "key23": "5cRnUohDB4K3WUZVU9pGefHiUQfC3bLpkTvDmw5kMayqHTLExdq1JukRKbA7S4yq1W9mF3WEf1tLnahHPJYpab3q",
  "key24": "66XVAdEpheuWo5gSK1Z9QaZGiF8BoZDQq73Ng26eayaRosoNpA8AeJEPYV8LLfRtrDr9FQa2s94JqYaJcBtzGDno",
  "key25": "iru47phNBqAydCGAWbMqELnH22uCxckiM2jinMzNRAT47CbsqYuoBKFwo5Xdu34aBSHH47RocCy5WB48msiCw2r",
  "key26": "3Lazv4zpE3TXNgdJMBxjm36YFEdEFRH14kZitjMnyDy1KzpeFqAVm4pJUUgsdhNwGDeK7rvAreGKTFjT9UXBr3Ga",
  "key27": "4bBpYsA7RrZzuY6R18xunDmoBka8krbzWqYfsSgp1ifFAWWLoNhvD5WjtycSrihoNw1fVb6dN7eVBRHdRpAYMq54",
  "key28": "2xEBTD26mp8a8JKSSFDAEwrjPwiY7dZHqjZvmpjT6NTSKtgkZTvQj4FjbgkE89TE5riiMaMao82LiBVM52ArcpeH",
  "key29": "4qVabuPQiWv6wVeAUZeCG3bcDWm9sjDntjvkPg2GxY8YTwWEABXfNprC4PotoWkc18choeMucEvo5xJjrg4Z7K4d",
  "key30": "5pTFZDxHvY3HTzLPbk3cEu1hZCDLfYkAdntpKKZoF53Lv5u5KonbWqCdb6DaUtzQJWfWZJMXvHdbTHFwWdB5UeiA",
  "key31": "MW8mUo5yWL1KxNRuWcKP4H8bZWGZ3SFUfS4JBqaR2KqixHwMA9cnZ3Dn5rGN2vps5ya5vKqkiMZZuJreCpR7Gh2",
  "key32": "RgFwVW6r5THNDq2yHAuz7Xy4qd3Cj2ykrRG2vUVDkXxoM7rMYdQRy63JQUPLu4c96nuV4i5564c3GJkUzcpKcUz",
  "key33": "kyyXpGNbt3VWPqrZBoTgx3o9nyGfhPKsTsnYMp2G9UPnukz2SL3XWs5u51uLp3CYbb1pjLEnH9SLLUEdJXyePWP",
  "key34": "5gEJxbb33LkP9GZcbQ3RGNUngCTGTJjE5uyYMs7mFEP2maSirV9Aq41rhWridnHBydGSsQwZ9LumW93tAxXz8d2J",
  "key35": "29VZ2mGYTBCfbxakYjUjF6tCMevKZzHUSkCk9AYmEf1VuziHLxK3Wih2tyXM1edykbP6kEMZcbJX7EbcdMoSqKXd",
  "key36": "2exfMMSpzj47mSxQmMKwPwkWTiJ7vDyLC9oLMhu8TxQcSpPtNzXxQWF9VCd9LjuP94UWhcstgkysAJAmfwWDXCt7",
  "key37": "3VTLvtyrFcDEDEWCqhtFLfNYidKdfL15SiijEJa3jBm3RxrncryP1TnRP7ZzYuAbMkZSwcXJAd7XMFB1wnVo33yJ",
  "key38": "3LUXF8pguSn4yHLv7aupqrtTnHBoJiPEFkYYCE5G4PQ6TNG948815qD7baMcmvjEy2wHwHUwGFtAT49wkPUoyLQB",
  "key39": "46U7cniRxoxYX8FRZ99X1Cgzan2Vom7EmfTuXtW4JZERPv96yp8degm9kCfpYDtfXekszNzvh2bjFSNSVNgeJm9f"
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
