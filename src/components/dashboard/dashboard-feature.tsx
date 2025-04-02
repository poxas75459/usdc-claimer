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
    "5VEGdhrMjBzn7hs4WHD9rhxA2MsuSmiiJgjSMYrUXw82KEgVZuoG3xnCvUpTRqkMz9aAgcfWrraP937CcqJryFZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WJGbkmcu5c7pZMuShVnhgCqekZwCFUs1cH5NsVbkVafisRGMnvjxqZRcPw1MYkHbR8oS7s4MiGWyNGbC8LnsU1",
  "key1": "3rUGbEvybs3qvjjAPouMGpDBAQyxA472uU5HuxUkqR4bx7aFNBbyFLEugdmmPi3cDTCmj1UuRVxdntCFtsgSiXGR",
  "key2": "rgJaVSg37RTsGvKtYyKmfJgK4UUbtSe3N6mSsUabt82zcBAAQ71VPiU7h8NunYJ9VYTUTtJUJtzQia7w9xKMmjr",
  "key3": "iGs2cNxnWmXxQAn2edbbjrbYDSNMztsRzqoauFWf5q4yV74xb8GESo7coanNhgTAX2HbTPCwbrFJazBVh8h1Ujx",
  "key4": "jPTknHug51RpBwj3ixHXAjXLS8VZh21ixLG1GTfdBmrzaeijhNMszy6jAPyrt8wDdac7VU2YfUxrXQmcwd9kTXc",
  "key5": "3g1WTw6y17GMUVgPgBZQosMypy2f8gCJze65mvzdJPMforEcWDAAE8XwQoXHrVbKqcg7VZw8d62Dgd35Ei2Kio6D",
  "key6": "tZJ7xqi187LJxe25GhMvNtnSaktSMkDZok8iGepS5LdbLoJ6WHtnZcoxARsB4YV6pCDvo2FmDz8xNV9N1n6iMw7",
  "key7": "4M5bVC3sxZ2H6rah7wzSeoE3Y5JfrqBttnPjWCVXcYDVoCD3wgwyFCj5QwqUYMc2DdrB8JQkVfndHJggsS8Ro8wY",
  "key8": "553BoGgCP7fnUqtXiojN83pGLieRwG4srLLsfcLWn4tv6vVGpumrhUyXUcwE1VKzKQTKM8cAgG3acJCtfCc4542o",
  "key9": "2Ab6e9EVrWGeiK89FxvQtgoFA3mfdwnddGZ49c9Unq2o3Vwkk9p9p1p3Lx3MBJLUSVNV27HcjwBdKFx4q8kKgkCo",
  "key10": "3d4vauM4HFfskK4gXhdvwRuVjHY6h1av6Esw8WzVSWG2kmCSds3uw5mjm5pEUB45mbzLu2zXfV7up4F1BuBmhFHc",
  "key11": "3NLKKBuuVgJdZVJPmgt3agh94H3HRUNfyiz6rdtSG1FAWbB4t5BvXfHipCh74vUVhZFjkm5KA8GdjZQdH45WpcJ4",
  "key12": "4aeCbsKa71L1rF6FFu2dbqLXfdc6KvneY9ffR3EFQFCm9531xXgriLq4KnMwzu6EsBFysPjeEudLnAeQC8k1PE5v",
  "key13": "5MqBtD7RsodL3oM2fqc5U1RzVyJV2yeDo3d25yhujFG4KUp1fAiPgf46YEQqJDe3KQGqxQvqwQu19keHHXpiVfm6",
  "key14": "2RW1kPpqQvRazCuFsGXyRnWaVRqrLrzhqoXTt1eX6DKYnFZ86p5xq1QnkJXJPNXiSa4Zxh2rB4kqugEiWMD7tJLr",
  "key15": "5Rgza4FE4FbaawHtd1zq5Tnam9RbR3usBenJ9HDuhxVK19TX8qZZyQPFWYHLvDqGwutzGh3WhK2fXGcbu452x6Mb",
  "key16": "4haVaU9Z6VDLi5ucMctxCnx1xcJPk913VWYzkTnBwaxkfhD9Sm53Bffce9WdSCSQDtH3mBmtertYXSircsXMgzF4",
  "key17": "WTMg9bxrWzDoKFsMdsqnur31cg2iy8A2dUa7LFugWzKD6yeKqMEzH6w1bKjreYf7gEeChcQHLRLpLaEdnkAirYz",
  "key18": "Auz42B8nSsvktyqRUxvkf4hEwDn3T9gKM4HhBAMJXWrF78rjiKJuKX2P1V3vjTGfoQfZRVWP3pGVqmLz4tPbAXo",
  "key19": "3cMMFo2F5C1fr8xm2WAu8qbwyEePQBCXQpJBs5PySVow16XNrmYHiGTaFVV5tDa6ZNkXRfDp3yUv1YyDkWnsihUr",
  "key20": "3xCFnEFvP9DvahWtyPdA5tFtBRWHhMdwY7zDskw2raMNoCcF5S8og1JUJqeAqx8a3drR9BVaCZw3FrsVLTC5yzL2",
  "key21": "Bg5SNvtvyiuaJE8sejxubfmSUwmLKBazPsoeYuoHWFkdxmTogpN31TWDXvUDaKEkU4qasnnVAD1QJ5VNptYrdms",
  "key22": "2dZbeFTgvynzd3bg9eP2HsZcHaKrPyf5BDrDFzutnDdnyjAYsGXJHiteaNSDdPtUaRzeEASittewCQqwcebVCE17",
  "key23": "5sWpKnVYTNpe7gQXJ7Xi11miSXockpdY8NNJMFbsgf9cxUwwP5sJRT8qyXqcJaoHfTsZYgYBFP9XSRifyCE2WULk",
  "key24": "yQUrwwuj2K5x2KLe2W3h71TTMniw6hQ2nDh7QseTfpvxRNiRVHm7TVsyNSjwGCYn4AyznBFtLfmYzfwCF8vuLw3",
  "key25": "225oiToKhMiHKaHPTxsLSorcySuKDQvk2NrMzmiDpUgMazu1Cnoz8u71HXA38AYZBct55Bee3ZkckqSkJ94yA9Zk",
  "key26": "4B43HT2XAqvJrcan3KMB2vy8eJaZX6gJ7YTZUqM3aMNFsrMbtwfviZeM6F29kgoFrGqLKP3ab7C3vnffUUFWbU9S",
  "key27": "2ymenS9oTLmfgHz1oS2omFxb8p3jsH7L1H87zEySbWeHSNFZq8zcSHuHkqSkrpXLBpqatRTvVcZ8T7VF1TgRFc2d",
  "key28": "2sbgaN4QHgbWfdZNG5yn7ouNY4qNzM7W7ah5CdPN11fSXiteSVPzumqLP52iNo3RQvrHYvzy1LKnaBxBD9wwsiEj",
  "key29": "FU23gKicCjVkru8xa5n7R4tV6R1aa4R3xktkvLrbjsstdF4GQVjT78XGBYcbrcdteWKv5kB4Cnz8ZZZKWhBih5c",
  "key30": "5thkqXpkNys4WbCtpZbJNp88pYa3HpMwHmBHaTfvJ3knoqLHkDpYvXg3CydkCsC2UtZEbsyvQu4HMTP7DYKg7a8p",
  "key31": "3socgQRth8DdZhBfPM8anAzeVBAgPUd2q3jkA7a3oFnBepg4SaHt8yqPMS4Zs15BhqAWLsFPutuqvZ9RH5VR64bB",
  "key32": "2xhwM3nwyGtiQeb9ENpKVCvTfaMAUYKgrF5nnaETrksrn2ytW9ixbBM9pRfqqHa6bQ2YhxxghMtm2USqZh2H6Abm",
  "key33": "8HKWVCcRy94cStaxDLevzgoWWTXmeLBPZnsiWgTrobT9ygYNpMibv6KTzYRjo4hoanwmSSCFHfZzw5y7imhUW9i",
  "key34": "2SYQ7sf8A9svh1RE8wzeSmN92iPVv7PLx84Amnt82ExL3HkMuUdKPRezZT4wagWgnanQNF317RUN6ZnBmJjohvLw",
  "key35": "3aHwoRuNhubw5Cj5bdDkXBZQY2sUm4GSnmKfW2o8FkE82yxNEsPu2472vzBxGcxdQZ2vSLgz7tRFh3RaFC7diACR",
  "key36": "3uCm9HkNTWR98zALdiZX5TQxqaqcUgFzrgyp8GkJzrZsJUGJkcw9KLuJg3oThxa4Me2hNnW7uHx8SEnB1cmx2Pm2",
  "key37": "5Fr7azA4CxxRbnacyqioadNYhdZ5L4u6RWj6VQsBDxyJ46jXnPxiaBUNaNtyD99Ni34xMRnufQUAaKwpMvNvMdcL",
  "key38": "2gvZYVjdNZnpd2EKrt2J1o78C8ftAUfiarnb7h1KjdJjKvdJWaTpoZ6ZxaQVK8LeqDVrixoi7SDAixmwM8aKHGGp",
  "key39": "5DvkcvAdJ1nujVVzMVpWwmp9DDMebaQxDMvXJJpiH4GXywVnBauUDtK5zoFeA2c5YStDxj2wLvz1PzwmjpTPLYu1",
  "key40": "5D9pE1U6XU5bSUj8zPjaKbMLiBPtz4k9wy1PWrVzDfZ7VMmWBLy3zja5NEcSjbymAx7cU7RYVWJZ5z5wZcrarayt",
  "key41": "2FJiuCooaJ1eq1Tok9HAvGeQpBRDTp7kx4wW9pUANH8QN2np4pedddhVUz7QPDdjDEXqFKHzuxmmeTZZtogJohAk",
  "key42": "2b1cUyjNU2dCbJnfw7DNBoa1Re8h7VgCC3oU8sitEfhPgNBh751p8w8gRhvJ442vYRJ5L89NHypJyUjoQSMbc6nf",
  "key43": "5f8Uz3aH1VJiktCporbHYz7PRj2fpFQ2CoU1GDVQxZWjiGJh5fr6dMjipa9e2xYuTdvnteeBfSMvtaX2Ejw5CAek",
  "key44": "3fh7VwmMBQBTEjphHFGnhHpdtF9BrHeZSnxYoAh6Cmwz2n5NMGgPqkJpqZTjsfSk2FBkDCUVWeS74zZPCHH4U4Dg",
  "key45": "4mLCt7dxK3jEDwG3mSDz2Gj8wKKhenaP15efwCvE44TnzbYJeizgc7emiLfHomzUwPzENUG8k7WBLPUaoCkDG5oK",
  "key46": "Lh7oUZHv2rBZ3mHbDjUNTMWG8cSr95bTNBTpvufvJtHh6e4rQMnvnidWA6ZogsPgCV3uMkNMks27yuiqS3KnSCE",
  "key47": "4sYoMJ6TtBMSRbEkxrSPR2edJZzwqs96d7fpKnaFzqSjPx3ubm4EY9nJazZet5yYp38oS4xFTKYxT9ZJ8d8xoCjc",
  "key48": "2tztERUHQ2SKPw8qM3AymAakJBEys9AdFWnpjVtrrXDCoss1pRTvJMod7Kr8DnR4NgWdU8JLYn8aiXf3M48Ad7qr"
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
