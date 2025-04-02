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
    "R33DX1867eTRumjVMKeapXJhwY7VQGcT5tvH8bYsmtu8tL6bbyjePEGhxvMggWJjtzBkRioww5j1tALH29veNpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3smmnFbMH5wdCd2iiYeVzxNEkYcdKQGWP9oVKicf7heyYRa4HSnviUmNdrw5XaVzGnyGskVBetKzseXEYPhGqt",
  "key1": "2jVM7MmScft1ELj1723GkTShCRJ6VgaNTPMFswJSPAZUEnE2T13yNWKcEpDiSYe8a9p79VEtVTjayBctLgjozhMm",
  "key2": "2napDmAZASWncXSgH7JR67rRt5DS7pq834PCsgXES13poYaMSRYYpfDiiKpkiqty2nFZHHoVTk9y62tRCJPNgjN1",
  "key3": "3QSkCJFjwynC9MDhFRXVnuyQnDX1XLLNBVajKFEy1m8trd8xAXHijApY1ihx6rDhvk1XQ3r9YEJCzBSGNyMBhipp",
  "key4": "5WQWQcnSraeyfof9tNLUfW5vKuXp7FM756muvVAQuFxhbeebcZPgRHRixZidhkdiMiVHxgPjWpXiEkwqdRqK3fwe",
  "key5": "4Dr1XvYXC6StC1ZEMB9TamRRFnk22WynexQ7G95h5YregQ9PSWRk9YXAS1gyyYUtcQErvQKmQ9rmcQbUDrP2tXoi",
  "key6": "2Zb5Nrto3Lv3DC6e2RaymTz9r1JgXbUsU5vHgPPjDvTi9WbzuQAJGGFVU5S2eSh37JTGPpja8naUCXK9qxHHVLZr",
  "key7": "5hMa4sPF8UhsdGyjm9jd9QHXzjKCmdSmZri7dzAHGdwsQME2NwfCgT5RFbyBoDzxdbKmU4CJCv7Yy63phv1Ee7ug",
  "key8": "3LS4PKDSUYDc6HkNUDTGDu6nKvqEDjF2BiBwQdiDKNBhnSqa1VAnpoXhrgh2JABLodjXvFmgEW6A2E15bz5UT8Mm",
  "key9": "5uZfsMHxzshLrGNVPt7AnhFS5V3nm33FGaeGdhWmDvCkzC1bEo5xWKfSqJtfN6eaDQiA1mPVN3576CvxuPGeimig",
  "key10": "3DHuKE9NiubeXFniaqXKCRWAY5ywJrd6scxJy2f8S6pQs4xUiBrUbAgYFPfJq1mD6dFRXCJLAGWPVvVAsGrbktBb",
  "key11": "2qy7gu27eFkYHf5UPXX9Fv86GFqg7krcoUFmDeKsNVBFZdBdEzRuzXunV75uTH3jwWRWCRPkk7CuDnEjRzDPVc2i",
  "key12": "2jjQiYhtCA6pnHGENVULBfpiRRYxTHsHogV72J7DjMMDsJeVpwucFWLeb4T15qtxPEJLfxHcaYu72EUKwxUopJ3f",
  "key13": "3rbFVRBWgoEHHQt4dbtJv5or2m3myXiDUeKoxoHdvYpS87PggmwQTPB6Q5HEhq1zK94Ke6JsEhHHm7QFfBwEZUKF",
  "key14": "5csz6PCpREaDiLyMX96zTAvkJXRADbLeymLvTanRpgNPpHxmGBqReoEujqkPt19rBHiaUBdQCFoPtHwBxMxwZukw",
  "key15": "zyQe5mkYJR7LY9q4pK2oM1M252qh3t8j6Bc9rPB2EYb996YUWNSM9jFYnThUEj8QJqnmeDgwq5kEnyRwbfJ2hCk",
  "key16": "4R4EaMiPrxFKLZLMSuShnnp5YWZcgnwSJhhH4apA9Pjd1eUW4suBDK5N6o6KT4zfMC32BSPcga7oeq6RMGYLvWAh",
  "key17": "35KqcZKzDte5aiTqT4tDJw1wXnVN6uB5mFWYam6D2Mragd6u33mGCEzBfqfPGjtVschCeeBgVoVJCm5B4noNbDkq",
  "key18": "2f59uNhM9kRZ9gE66Gg8Ajhs5bhqDRBVLBjq7yqbaqbd2j4jygtmM3yxi72waBmbvWFiP4ebhY4jQAWihfwraoFf",
  "key19": "2rypzcUw16yc9aQB1pC4bsD3LaAhUUvMtQRyvhXKUaFJnnDdrWhj5T9poZTv6LqSvrGThYRWwCzqeSZa3Qf1KJjZ",
  "key20": "2gG4ymeGTnTbYT5Zz9qrs5WTuhA583Usu8CQQQWSiu35tpMgzCefeNUauVPZzcEv3ENvxsjLogsTahNNGNCkViFK",
  "key21": "5LaC6TtEqTSnbVbXtoweTK8YWur14nUEkxNF4sKXSRQQWvHWPQQdNGMEqUDQ1kQ4msuVs4durSZ8mc8txiHh7mdQ",
  "key22": "67SDMjHVCkXSNhLKKUpLXAPXPdo5RxgzWupb1DnNnBYmxKxY3Wx7fPnW47ipLr8vaTPJJTqPQtienqeQUnkWxfny",
  "key23": "ZeM9rYDj6FzKQeupxeMFqGJHMVxM9EphTN5iJ7iVfwhNXc6HvEBwrwWTShJiYVAZBi1UmtJjG76wrbCfaew354S",
  "key24": "4Hfezg2EaRRWXZiELP4M3fnEwDZ88B3SQ9hJ4B2KaACf4qNV5sZFJhcyZTm65UMKBNBcauewTZ2PM5U5gMdXh4zU",
  "key25": "5ymhv1g5sPRRhbBoiRvrCwLQPkgL7Zgj9KQ5wQPzX3SUQJoNuCgNrsXkxBcnb2maaAet33mwphCZ28z5vwedJH1y",
  "key26": "fUabsSLRHknnNaiFzts3tPkkEXhipyQ4RhRfhkFxQzPtyT5EikYd4YGQa9s9Fypdrt1qZDriQGZDvUMf2m1Wbsh",
  "key27": "4oXSwUy2HBVF8iJ3XfL7rKZJBuc6ZzX6RqhEuysMKfs7VEEThbv3vJ19PFTwDk39vw9SgsiYYSZeejPJebHGh4tx",
  "key28": "5ayXgVKd92Zsb2daq7hjya92wpXSFEEn19x2GXFRZimawL39eBTwvCBcEz6mywwwuWmUY7ReKWcxfyNMkcWHykkP",
  "key29": "3QiyDJnPiW6fQroqJQyVB3xcTjZ4S7MmkTQ29p6mfUJjmsnab8go6Jzda4SSPSExHuRbp84LLhyGndc4ANCtcSF1",
  "key30": "27PH2ZnmdSBcmecVhTguVkK3RKUtrCJwg9ojNmUERc5kGAv2rY52wyxZ4xpfwH5HrXMS4JUyufR4fjSAoHZcmZoA",
  "key31": "3CA1hnb57dbxKFSxpaAUJMQrEKnhcxfDXGZmw62qZuEprc7AN1tZejqJFyKYuJoNDFrJzVo1tWGC58E3YfBK65nz"
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
