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
    "2TsSoBAz8RpyFqb4Hkct4mdRcfFAFX2jBjjSAmpw6BPCF32JiUQKL4zsSpijtE8SG38ZYbitQwSBHuKpqYYCUs5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAiU45emk8dFEiNTniPn4KaiQbbgm65YdVBUsu7hgSBW7tWP4idqskYiEdUQwQCE1pVADFXMtehdxfWANtJRrEE",
  "key1": "3Y6J4CLmNJFremnEEzV7CLzGYniWHRYP5q2q9qJPXVWxYaE3hUThgJyDMugkqfSXsjgqMhTvU55cAo3eYXBe7sUv",
  "key2": "2ojDoMphQ9R8XQZe31JCMNsGsZ4bVLiLFWYRvRBLCZsYGwRhsRLXG7G7eRHkViJcSKTwPzXum9zNwkKzjsen91Xa",
  "key3": "4rxx7HzZTBtzAtdpUcWbWyvQDyutrmX6M38sKfxvXxKVvRJyCEM2L9doeMbEbeqCLHRjkuHfJzjZNXQnYodxTYYA",
  "key4": "5TYNiP4YXQL82mmy7HgegGzkLr1FcSPTLiNCaSRyv6TMZxVkq6nBmCLQUo64WqQcgc1ks3V9PdyLh2ap5gK8xQMM",
  "key5": "vPJBNUZ3aBSKt1Mt5Ne3MAChw5Bn9gmW8h6fXbVsidPzSC76QNZPCyeJNBxyE1uPU9LWVQFEZfZ5Ke7srDdZfhx",
  "key6": "2UuuFeTddCAkZtRC8EPmPQsApNmpMBt8NvbbQrDwBtRyiFBgdC6XWWD9tkU4PvpihWJ6CWo7H68rn6tURFKbrD2J",
  "key7": "cW2eWnvwxdMvoQUDRxHaZ84gqkt4KhNisEMjntfG41Q7rpWaoN195ucwhHdVGa5ZxwgtPGPeQhXhALjfqkrYQQU",
  "key8": "5C4XpZy8nggVgNnPeiNcztMTAPWC5KjC4ybywE1cKwP9Cz527spgeKQCAA3ucYofEqTMTLt7qLzrLwumifZsU1wP",
  "key9": "4QjhNes6Bag1JXY36DS5v9nRZ2bCzTLb3Sw9ccsSxroraThLX2QYohbYEmdfzrFAGjaPkQN5G9tmDuDb5UH7ktH",
  "key10": "3QyThLfrNA13uVN4tkDURJhFQAZmZdTY28TPGZxvkNoQTX9ivyKDh6bLc4yNmXChcNAS44cAVERzYwZwkmiCYkKi",
  "key11": "5TZYDdaHCQeNdkJNyPvcE1iQKnGiWDK467rFPnYDv8eELgVa6fbCwgPx4ifPoYj7iNaWueKXf74U8zK4gHJyfycT",
  "key12": "2tuUgERgPg3fUayQGLmZZAY6ffWNuPVfC4TsYAJSHttLa8HQAa41SzVGdpe9f4HM7yU9dUSzbNincnswqDgr8fg1",
  "key13": "56t1GWQrucSjtCQ3WAx3NrZ4LR7fxcKuwLyvo6x3DCMEqU96gEY1iMCrFPuRPipFRGz7qiRd1oLCShmfh8QJAqG3",
  "key14": "4Hk9WYdvYP9eJS4GobR3V3bUFf7bk7ms36VTeWpM4Y87z5sUu2Jod5WPsrrdGZUeArWEqVkVPge6kwUoTHE1JtjL",
  "key15": "3Y49gXY3qi5xT4Fg1oPw8c3fSTsMTuYBXUm1924U2AuRxsdGQXhiYuzueb4Rmuu7jrLt3rTAhD7Je4tFRvtKBiTQ",
  "key16": "PNoYdbUq55EXJHti58M2BMWSFDWLKwyhHrRodKttB5JYfLZaY8JZUZgdKB4qkez8u4G12Feyb6AC8K3XTHwpyuM",
  "key17": "4zW3PgESygNTgVQMKmEDmS9Z8EwU9gzSaehDkpoiMamCftoJbqRtLiirQFgsrMjZVsr7UgybU6E57hvy1Yr7TAox",
  "key18": "5XP4Pk4ntuaeBeBDFqHnZRcv76MMCBCeSK6Kqdx2syw5mFDMYEctw1LfqmbHqzYrY9uDuWbqob5oamAmaNmRWTf9",
  "key19": "5kvY7xh7mB3877jLvz1kWCVN1pgpxqBGVQsit2DP7quM4suJsaDgRk1kHvvecynenNsjofZDo9YuDcg5WtzsLazC",
  "key20": "2MfMMDV28JbL4y3gW29EwfEoa6aMYnRQS8FNWX2X39azX8MDMASserFKVdj3X4H9sp1FzYH5iTHoMiKQPxpHCjth",
  "key21": "Dd6TVAbqosTQ6obc91j67ja6XZQoW32M2WLxHWjqV26oCShwYxUxoN1c7t7WWtDJMyHbUDqgY36nYmt7EbmjTwe",
  "key22": "3aM6reTFXXvoPQDeLvwADzxTuHvvkHij3sqwwUXLXfs97xXkf3tBNgertYLjMfvgNVDRQprZYDi3RfEcKREXNzQf",
  "key23": "3AnvyRTDdD46gqSm9GekjCMHz58Vzap3HSq9phfQCjtBnc5aWmgUhk4uATeTe9tgxVQ3JMM83fQ6k982ZDq5NHhV",
  "key24": "2DhiRZryxb6Ak2YYt7nXQ9HnPFGyMUw6LDcM9tt4APeUnDj64FiNswKdtBwaiHqZMU5qMBFHX95VMqVX2dVsMt4g",
  "key25": "5DMaS2gGT7pCdayQ5bcEn1WeqTBVaCfq5vXTRuYjByin6mxdLjooeKj1VHZ3bQ3bSyDhhxDW9Kir8YCNGuw2ZNu7",
  "key26": "nd1XBK8pNW69V132Hg4jYDo4HTzqRrP2bGJCYf66DcJVVL77nH6iwbYB9qJbrCtuQvgfm3QTsAXiqpenNY9HH3b",
  "key27": "396sB7y2KDje5uZPTyW1LfDYYntjD2bbCG7jURsUEcnydhYhE7ecVJUGv2PW3hFZ2izvKEMH9vEZxamYUiJpqjLs",
  "key28": "2ctnZ5R5mWHnbpUBjVkTzhuHYFw9noSNAk8rr2JqWYcLycLGsQKs5SMfkkaRYpca2iEmbKTddb3WespuCBtXH7kg",
  "key29": "21M6Xeniu4f7TJMdTZjGv4XUkFickRs7Kdefq3kn8ruXzWBTZLsC8ia9RMCKvDGzYnT7a4EUmsSHg6pNPDZFeaeZ",
  "key30": "2VbG6BJM29ndwUT933XUsNj4dqJ9F9JvAN7cU9xb4krTFYCNTLvFXBUPJvLKYajyBH4PxZggByzx5VpP1gt1rvTp",
  "key31": "UWW8SyF5Jym645VYtY5ttRTa3vFJnx23nmRUkRvAkSjddnB8kAVRvWjFyUm2UpUWKNRQonPg2vroMRx6rP8doeF",
  "key32": "2XHnKfsLUf5yYmVevaVRqNsyRDVnmqEzQgAmGG3DPUTqR2mD8KChgeag8X6B63RmUmSsTorr1GFYNAmSbJxB3Gqs",
  "key33": "3X8TmAYBSnGB48vZadTbEijfC7Tj2Aw9vozxMztDS71yuug9KXMh2M8gqXNKYVq1r7td89VahqwT7uD52sW7t2H2",
  "key34": "3Nw7ErgtfHG59WK6mcNmbqj3d8PhTYoBPmcLaz5mfqQ86mq5HJeMHytP4Wz6YERuhQfuHNJAHUgMacre5MQfshZc",
  "key35": "3V61nAR7hjdjw5rEbmCnd8BswX68d318di88geJGMof5WHoLgmTyduNR2Wwezm2jHyxwcbQUJgw8TxRC2AiuMaEC",
  "key36": "2Vc76y8fvPcLFocH2YKrfLeN9DWZixg31NnLJQh8H1QMRxnfEEwKVDPRevpnJeWPg3nqx3idEJg2N3iJBMFtQcQX",
  "key37": "4DWSHLRMCpMZ4ixYsgsVzf41LbqVG1K78NbkNS18dAqN4LmLnGDNTu88DDy2S65u9Tj7UJnx4pKRT3Hb1yPzAinC",
  "key38": "2dRoFJV1pGXDaipd7rfkEKGhhEwdAcRgFjUUGsVbBfqZmggN3XDDtN1h7hNkdw7EiVhsqinB3aJmrJWX562D7EzK",
  "key39": "5vJUtH8py648X6ixzz7bU66EE7DA1RdpDGD8MHPvMqUSU6bGghU6CD2yvHSoWRhCTNb8bmEuBhXmjhC41iW73S9J",
  "key40": "5sCwc9sMPbdtuVgQX8UL3MkfhP9EEqdca1Szp6rcvoiYnFFMXbBuV5iQRfG81Pq1a2in8xBHbZ8krD6MhvBedXeG",
  "key41": "fTKpJZXMnJF2EMVsHsrcj1RQKx3NbC8GNgAGZLmHD4gdVBBDRyJb3KKrsqYkEUjmjdXy1w4bombNFjpBi4VVqpa",
  "key42": "Ddi9cVoYYjjYX2Kz46NnnttKCzhCmALdaLEvKz2gMiDcsRNXZDuGp6GsjUMogi3JWHBpY9FzJtdo2H5Aiu2nVzB",
  "key43": "25nhrzoVs97YGtp4pcukpitGhNkeDdfoYyGFowgB8NtrER85BWCXqskHBdLxenptwwSy7sMcfyc8nWN44qzwpRFM",
  "key44": "2zKcLqb1EkYrrANFBUKWbfypwwivCGbovorbrXzFxkabzBn4GiVgTPtXzusdvNy721r9ZFKnfs5LFEhKjULk8azr",
  "key45": "3SAQMiwpXL8UCj6zv9CTpZFPtncXCBsKZzcvjN4Rm5v8pBBEfyp7fDqjgdsT8qaSD5YptWheZfEV5tqbsu5Rce8t",
  "key46": "3ncZAZAXaoFnPeoXcb1jCSJA8UZGwDW1o38G35m8H3sLtjgH9ikHpEo1GC95Lr5c5QWpk9Thc3VieUUPT7A2XLWh",
  "key47": "2hWkGXa6i7P3diXgjqr16BbKqHUV2gdj7LWHF227yrAyLxT9XsC5w7BPY6n8hUMQwT8T4p4y1NYuL5PxMVsPaE8G",
  "key48": "3EbLBXe94CDjeFcg4HmgkbNAKn8h6Wz8kgMgcqoR9B9jffX27DYf7UtzU4tXLmyaBFaxS2DfzumnKziqQLpMn8bu"
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
