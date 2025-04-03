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
    "5V44EQuo1fduKgoWeCjr3FDHsxwEtSX4sVvhptC77wrsaBRpS6ThaaVkET3vP8yrbLaWMcGPtHLSq78Pu7SsWxLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FxejGqqKxax2rZRUPAcw5hGeMdt1xV4g5VSpcAnndDSYmoRWYByRE9MnQSQxuM4JbGxVF8xG9UKwEUkJk3FkRdg",
  "key1": "4E9BARYpNRpZrhCryW8EvLQM7JDBExepDz1UZ6QLHphiGUhoubWzirU7n86BkP2rUqoPKL4vhnBPCKj1Anh5igkF",
  "key2": "2d3yGQQ2yjZux6vQPkQcbbrXMv68i95fB4uLxPEwzLdbRu8HwARB7y43oyj3xXkenzBeRqz6YoxozWH6fuwv1EBi",
  "key3": "3gPYjJue2gA8mWAkgJMybjFXZViyATdzndC2nPdpLuU5rM5KVdHwN4AGxicNrqG4ozDHBnJfMUmTwdVidiCznTq9",
  "key4": "5NcR7UPALu1jPr5S5MBEu3CyDYwna9PqMEmvWWyH2eaCar9LMBW9ekLqfbvjoDPGLMq5prLNGCcLti7TQwxp8dYS",
  "key5": "3hC7jvrB285e9PCoxEy9kDmmd3eRBgP2KAuHe87Q2f5XKTbtdcL2GY7Jt5D1vYS8T3pqV32jeD14yWMQkuGUbA5i",
  "key6": "5RTHNfghR5AyU7eCCwY41hFiHqbZPDwytTxwg3UAdQZFv9s8b2tRV4bTi6ij56vkQXUoSsHenQMpQB1DErT4gFTP",
  "key7": "4Q21RqVZCkA11g2nXbNpmprGzp5mV9JfZJY1cWX9G5thDN71pcgkPke5rRxyGr9bGaEq2NUxD9yyRQZKTjs71XAQ",
  "key8": "5mzA49viUUZRQGTpEJeFCXGwJP3egUwCUgBHLRqxkBYotLDZxSbasQEuZtdm9NFRLMPnGB5ecUtdtTyqWzRBLYDF",
  "key9": "2jJxwADYtBCDqbeLixSeXibg9QviZgn9UyvbJsG81Q4kAVi9cD7vdtFLJJtWF8cgCnsqA1ia5zuhwuuHny3USUBK",
  "key10": "3s67KGExp8pNonvEMZETntJKquFVqApYnL6DxLb82uzb9NpZDVA3uGLgdNSotcGyVUZygjToQT2wn2vcsH8cbpQg",
  "key11": "W9Hn3xt7DJsib9vFDisXnhPmHWAK4qeTQqFnQJhFjpfZGNBDKE8BFKwCFmKRr4dwKMcxiAB1Yx9ZJWAw6EtxZGq",
  "key12": "4q4b7JAu5Zq9p8SzYs7CVtm1zrfJeZWm3reVj1Nk8hcSKQCZ2DEoDJ8DKuBRY4bxMYU7h78wGMKF6VHW6VA2EUBz",
  "key13": "4pUsRYAFdu7Rx9VNYgx679itMgrEEbL8hnccFZnJcxyAkxZMY8J5twBnstFYeWYsiiQ9fnM6MKHGpzN4Asc8f5Ro",
  "key14": "2nSr1iQeYENr8Ti3n8oV5UhDrAC995epe26CSarr9tCSwDEnzhd2sgUoFmwfrrWptEuox76Qc6BBfegzVZNwEHJb",
  "key15": "5i3V81htp5HNPQ6QUmNsEnCfvaQBLax8ELVqQXyrf3VapzeCudt3qXBZDPM6856Q7pVQXWkbPchvnyJBxV9VTn2x",
  "key16": "36AovGAMM41gZPcEZi9XoM1NRUX8v2L4gM7ZCMgf3VETZjusEmX14iDqdYfHRFUuSmGUqKaRCUE6wsXqN97p3TKf",
  "key17": "q2MsuThcKyvVXCYEeGuQDaX8tqpT3RDzQTfjwBGCe7AUmEaX565XyfWUsjXz8YS7jnhX5ixUbhYGCHAcfygTPQn",
  "key18": "3kJLkZnWQ4hysoVi99hpcALBb2WAJwUGMNQvY2hSdYYhKPMSaq7WTg2QKqs3m9vhHH8Se9AgwtFa3rC5mkn8sU7k",
  "key19": "3kmbJAQBjJkA62ojY7WJDzq4TTB3TnnXvJTphE6v1676FXLroPdHu4HNp2PbQXdcPyCBNKaixtbpMobNzJ8Yq8zZ",
  "key20": "XKvwYJzuoPdP1Foj5S4XngUztSjcqGkcy7UCKjDSAEmYBdgKeK1zVZQWx2udWehwkQPcqcPLFh7iKcPAZqLCCy8",
  "key21": "5ji7jb6SAxASfY6BxmD177oe4YxbZVoYE72xch4ZkFnjn92E2pN7fbRPuidiCiN4vpNE4D3uZmgoH24SadWZ1iC7",
  "key22": "3kBDox9bTzKHmiUiQM7hH3neunfHxGEugx3HLdfLEsh7bP1qHtq9WB5j9v1igJvaVcvTzGjXbYtihV6EzVvJsKqY",
  "key23": "GS4GjABCoksmwHumfycSfS1QUN5UQbFk9MUFCzDE6UvH8TLY3vdbUxKwo4vpsVrZQoxtWcGa7TrGcD57enjq26m",
  "key24": "3aobAJmgE6DA7JXYALTL8j5QycKuGNgxpKRxehnwQkGuSC7LkDAYcDTsUHaj2pvZPj4derc4AkV6GpoQQVFYLLx4",
  "key25": "3MitY6PjCcoMpSUXgsyHq2y1MkiXqiYFSLcLBLQNswa7YFc65a836a74bmXs6SrDS2drVAJMytU7utnY2F1GEX2a",
  "key26": "526tS3bRL1TZ6sdUU4ZQ5jWgt4a5W9M9zZHPWWo6A4HG7CV2GXYj3dVTBoWevG82vjEGARvPPcWFjCvgWz9EQjw5",
  "key27": "3Bzu5cKb4uqkzEwnRBGvSxNb4MEVctDCoWjxXWLEvFiAEUkdnCxRhezS7NMwftLBwLw1nEUDddVkNTyXxFx8HbEL",
  "key28": "4Q2jqqCbec8orkzHE17HTzDUwh9cGMjp4Hcf1ht1kyCJSzW5eufZqK9R6YndotVqNdus5seCACkQmTv8qx3t67tE",
  "key29": "5pmUWMs9Dxu67oVXZ1ECFeg6HTFHiTttNaBF33E4nLxprwr2vignrgeF23e8AscuhXGN6JoDQVHLmWviMSsyeZA6",
  "key30": "s3heMiTZSqM1gAWaQwtXrc6ZzVEp2gs8XxDYQgjDggCYSgj9FpqJGhsCtHRXtbqi8GC8Bp7aqtL6s59qnbExKfS",
  "key31": "3N4hpQWGNb9Bb8VGQzNgpDY5ePKUAFQsDR3QnVXj6nqEVhDadfpZ4wSQ97AQCJ8htyrxtsKF3xtUJvgYbcpqKYiR",
  "key32": "5x85cWrq4Q4C58Z1zpfP3xPgMSkxxy1MpvX3eCA8nUFipCEUTsqg149XQvCFtVUMa9srodMSj4qaYTASByV3BHK8",
  "key33": "QXYTbjgPs8VcLcziA7gmFf9UU9nteQ8jQ6fnQipmD6nRTdpM81KtLmzWpSSwRoneYu3fBXBNdSBiCTTP9XtB6ir",
  "key34": "2jfJrNuTafkSnkhaaWb5MSZEPiZsJ8hwbDDZ8Lcge8gNh3NfQnoUcNXqrTvLLBanff6AKsPa95TYS1fjpKw8bPbj",
  "key35": "2r97FhnKTfdZhszURf5CfVjmGemyiYkuqcaiKMn2r1cGXvHL1gj1B9XzPYKY5bv5P75RX22mHhiJEwKNN3kJyRee",
  "key36": "4AMrqmonczQ9iw1ZKjTsEpinestVBRfL4fZ2NEYN3L3qknpnzcrBTaQDLChbBpGbHwXs7bR4PZxWHbzbBfThEsne",
  "key37": "5n9zjnticVmTe5vzQ1WM5piYQ3fwDTw4iW8aHeqTaLH1nXEDXpBHKMc2kkBnML4dYetw12brciDGyRmcKM7r83mu",
  "key38": "3p36HCk46vyCSxKqzy1WoVsF4ycBsKPXYKHhBv2LqqqGEWNRX7cWt6t7vZqWnBHReWK5dAPYAkFrYweK16QG52si",
  "key39": "5jRJbCH44rxsmAW2pF1EUqfYo82oR1KmcgTmuXgP9iYN11uvCU7tYCqVCQxjQ3ikbt1DGrLMQKppLMyVWJvHairH",
  "key40": "8HchSC6HbJ8cdHjpW6dw2BJUzGLwFCBVdSUjQasHCH1TfqnrsHdf1jeehGqXti6ppGn6eKmEFbDFJJC5hqHtcaH",
  "key41": "4CJ5RtUSGXK99BAmLfiPPwSzwWpr5Qrz3xq63SRi7NDD5nwRKFb17UoKWNygstAFqYdCt8jJNkgVD7bxkS7ZTwRB",
  "key42": "3DLmvVim82MkBM5Ptg6HgxjgyEaT65bUJxNEbxr5TjYoiZCdMRVv9AkXgjbgi3LTiFa9GzdzEujCBd4gKroassVt",
  "key43": "5WKUdrZuFv9i4vPZutWg4TsksHeVaGaYPaHvEwNF6aAgoGRLKdEkKpZkMeoXfD18z151TXZ9bqTv3La2XgPDpE6H",
  "key44": "22kctLjNM3cxdG7mss5a5doE6f7TTxktnwuK8dkumq9kc29ZGj1mw7zqq3utTv3S1kiA5JXkNocbgvZ9Zy4tHsU6",
  "key45": "34FESRd5TyKNCqerayyXji2sCTGWWudBcHMWPbwb5sVQBB4hARNEfagjGHJuNq2FB8kJF7earDjMgKw1r1Wczw3s"
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
