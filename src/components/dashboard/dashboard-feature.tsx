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
    "XnHwT95LmTysnGM4EqRq2kSZyFvj15S8382j78uKfcgvu9umtFm6uT4Jk8VNwUu5EHaTJssH9GsSqABuP91Uvup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z79w3pm1jcC4yK7x1BFiMGgispvGpL51PSDGYqEj7aCpcMuY7FsE9Y2d5xcDrMEMFLBhPR8WDueNeR1VUYdx3qZ",
  "key1": "2ioQzfgYNuU3vvWoDBbS74whhaxKwJoSoHr75a1TnG7JKHvX2SbRE2NnGaUhCPrFziUwJFR6oaUyQYMdoYSytvFu",
  "key2": "pTmHjdpvQRcKbB5LoHiqxuQCHkcuqPEtcJTqfznzywoW8Fyeu6UqVbUpGjCGp5Wux1Y4D4tW5DMGD46yvutZhYq",
  "key3": "NHMexFRwoZq61qcNkQ6M9BHkHk3pH4kQHrzxjAiSpoy8TaL5UdD2qagzhQf1Xevt2eGcCppAa61SWAo8fw2WfYv",
  "key4": "Q86V99zZENuqDf17UGtfWuu5BivC7Y1H2Wmo2YVgW9JRgsoU6a6378VmWYwtkcXf51rzVsuYuvavtdpoF7311kf",
  "key5": "2s1szkuZ74LTvggvgTXXvMSw5UQDyGLvLHpDsmPgACABfpLBtadDXFbjRDo4KMnApPvCXvnFczRoqU2xsqtr7TyU",
  "key6": "4NZinXhJmH4tDT8B54apsXBCXSjycvnotyNecwhm72VfsMugGZeFxZsNmAm7XPPYkWgN2Q4rTD5P1YnoEoQgb8sV",
  "key7": "2D1M6xZYDFqRPdwxhJoMg3SUKb3iQXUJCFggXe6j1KQKYNc1xm4PPMTUrggppWjLZ7DtMQ3HNFE7Tyyj12BwuNhG",
  "key8": "kSog3YT6CLqSzKkHNwQgNAAettJNhhCkCcGhndKWrzrFdSq3aL51GTyfQVxFiJn1qN82fW9RouQvDX6sqPAMrzh",
  "key9": "5Hs5BNaCGEeKw6KnBNUh6SjkQSFhcvK5M3pW6KqzNXTA4rjJcboJgX34zose5hy9Ybt9jHft3d4HrwAPDdmLYq4q",
  "key10": "Dkb5fr36yMApBtmz34HWTLbm644GfG7zwuco8cBE4Nr5Gz237AKoDYUdR2MfLSduM24NZk6cCfZ2HiqCTNzpBJq",
  "key11": "4dap9GiEbiX7SSCTk1rZRRRbHh5J4X7x2gGyYZXFPsxPqbyJT1xTpbuWfxj8Jw6h2jSttf8cDjTEtN8tJfe3jXDs",
  "key12": "3FbPpAuhHNYpEF18qp6Th7DrJJ3A27khx2Bo6gYiHueTdTTi7XhXW94cssVZdAcEegwKNWzZtPM1PReeQPcKBapq",
  "key13": "2oQdGe67EBhDJPLgAMccHpVnrVf8HgK7fkKG3dxGZgncstu9toeHGjsYLwgyLT7aXbXV46hUqDAU8dpsTg4L5sur",
  "key14": "2wxYCdsnBEjvDvS7tJ16vjU7boC1cc69sZLZveaLShvzmcnLgHnRR8bR1mFdRQiYvkEEHPVKaGFduBgACfNBCn1w",
  "key15": "54CbuJY98p5uK27yGd4GQVz9qFPgaJr5zxo78BiBDE4LTyCehQRFBsum3rLwEAUeVpEY4xsYfDR2UUi13UyVijby",
  "key16": "2147j1WajXnXgDT1KCYHPJSRbAiSQzyqyxR9hAwsYG9Bc8ddrkCudFLj9HbKinzo1cpixc6LJVGFArmqpMhaEq5Q",
  "key17": "5fZgweCbBDvncqSLyqguRxJ4BKQrPK7Ef1YR2i41SfuiUZDUDy8Ws9svcXRFDNE5aBdjgQNoJym7WPYeDVc9mhKQ",
  "key18": "5Biafc6oF1PYQPNM5DZ7TaLrhF5QVxw3XbT1WQbPPQEJ6xpFeMNnsESk8sFxrcXeqv78EzNodhQVXjoEiPFj7arD",
  "key19": "4jJCWoVeUsc2ArHE3hFofEsovynkbD2wNYQDVYkFMzudyredosXqKuh5QWsMXqUcGDFVcWmG6isrwH1vyKGWsiE2",
  "key20": "bgqh5gpsvygZfUFab8j99XsxjpTtRkVhtpCUPnrF5w8WH12UuuWEeK8dXXMHLBUuHdUbePDDkmWP9HLUV5AXV6w",
  "key21": "3rnAs3VsdiJsfDoiw1opDvaHbah2j6fwrQUnNsBJgiKLFdfkHWMuN4jtfhkZssKzBeDpt6jJ8jBvDjjH3VbSynTk",
  "key22": "4EpjSbxWM2UZccX8s6cq1s6zK2KmEakfSW44vKQbcRBugpUmMC5XHeegzePVD6mNCyHcUnrtnCtzaHV2ZTmzCsLu",
  "key23": "2kngX3rBhNWdDou2x78r56CKsUDYmf5Ccr2P4NHApbe9WrrJAKPGxDDFHrAozibfjcSuf74ZsxrJLWCzWQbWjxxr",
  "key24": "5pZiAuqb9GgxRuxQqNM5CYhYxfNyY64B5dKbzoZEojbwb41zFv2QoYqsnrtbM3R4YmWQoDthZoXW336iiGxeLypc",
  "key25": "31jJiomY5B7aSTFKz1tSa37fYDEvaTHpmvwfKqjfcxcxjAKx9ZHPgCSDnHpx5Aq7V4LPWxGRYeosBZEmBwDggNix",
  "key26": "3rJQtgCkzBQJ9pLo9mSnkzp23DJmP125wnrYyhurJ73vzfwv8YyovnfAWf3vKLvLyvuPkQuUf9fah7kMGW9nCHGm",
  "key27": "6mJfsyDAhq5F231p1QQSQEvZehfzhzH9ZAc8Fm6ZNn8rez5CMtqfGxXDfedDL86Atdpytk11FWWgEixsXcRHFmZ",
  "key28": "fxJzubA5sRyj7Ua8LjBd6vUzvKMYrZGPC29xkf885gEjEJ8jmZeAn2HLbWUmBLwqJ5PKAgiHzSbu21XjS7Fm8U9",
  "key29": "2QyE6drTUfpnZEFXi9upd6dmPGxeea8dsLNWWPFXtJgevLX2BsDPheDrJJhWUf1A2p7gb4srRewYkvGjCkC8vjqd",
  "key30": "4VT2ZqxEwhxCerempwjcSMrY5ksiqjW1zPz9xPMWu4ESUx3UBCsvZfXqt4ukGmrYM1KFu94wCag1bPp4yhoTu8GS",
  "key31": "5CuYBo96JhBTJVKFBvQ9krpGNVGT8zYdHyuFXvnXvkhb78V19b43ggVqxDr3pyuQhdEpb2Ty97EXMoFxfpEyq3YG",
  "key32": "2Av6Rsd8RRz5Zv5hSe5st9X8WpzxcayPoaJA47TPDof1PtEsJVnFVVzK5EJi3PPdE7PB7gyVWgsciCuPNBPWhGRG",
  "key33": "4hdnLNLGi2jCK94vhfXah83p5ffWBdjgLf2aGRRT1ioV5aSnfanNCgMfuAuHnXNyLPgbnfae7NN6vcLNz4Kw5kpo",
  "key34": "5N3Geqi3zrBSJrQNpuvrkGzBV5SmSZoyYBxSCFnHbKgSya57dmi3aXwV45jtf8cM2yMoWHnSmuhGSvNrt78ej9RL",
  "key35": "33yYVy5zbpG2zZmqvrdNVHKdRTgVU2LF5jkVqLMJUxQJ3JPVLEwdf1SHkdd9dAoRp7TQeYwaavAppjqLWNi7UWh3",
  "key36": "3DXyeiQUSAzW1TH7B4HNuCgBiG3peZ8voVeYfR3v4kk1PPjc3aCYL5JZWkStAeMGiy7YJpyWTfWcbuRAeiZkKpSh",
  "key37": "5JpHLKzoRQJTkgFQm6RB75Hi6uZVcjgA1uf4WbbJRJYeApHMqjoejChBWGzZWQKtDccokH1MHiRQYCThCauMR6Hg",
  "key38": "5MCGbZ18ySNs5Nci6zv9dXvDQ1RhDgMDHHiMKVnWt6qw2apzALSmxuoei2FnABhMQuG5vMGZKeVFm35DCxA73aBY",
  "key39": "2h4Kz8kEzkPjwaUKnr9H1Zvu6Ne5L3a7UYtTMkDLNLJ3WqSsxShhsPrAGbrE6qSWgbstLeYRDPjeBkNVswhtZNw7",
  "key40": "5T2mHaQm1ctZYsUFU8sK1nYjZv5XXZUQRGivXjwWmj6wup2jnAMUArdUQBXviKhVKWGGZxQDqhgkL8HcQrAqV9BN",
  "key41": "46eC4vtn9o2D6FBL1wiwNdCESoVk5dG6imAwjH4ym9QajTTG3jViUoWQ1mCfWMmzHUG2fRYSuAxSrbNjmDso1UHq",
  "key42": "3ZUWVeZZneZnZPisSAFPNKvvFa5YxNscRCTB5XXMep66GJ24UxNU328Cnvc3QgjEpS13q5csbf1m3bGBXvA95vG5",
  "key43": "31x5ZNTnvgNqSzW9Se3bDLgaJmtncEno6r5R98MFe4HGaRLNk6ziZdwHsKQwHgtW8EyA9CFPaZGp6Fn4yZmJ6T7Y",
  "key44": "3F3cMszPdnjv9E68hGLB3XoF1YMWJRc1qr1nWcDtJXo9jup4DNmk1yMnVeNV8odsfLN6BYG8HmYHDyKtGy4rtunZ",
  "key45": "yyFne4oow7MoZR5UbjSisCpvzqioNUZVo3bUJUFEWNuca4D9iQvKiAX4nHdEAnQM6Rk5oQ3wZ74wCuWN249Kqme",
  "key46": "3zoMdnR8XMDbZbd1FMhmQbNKsHvJMxUD2TZMz2nDv7jBjJrDCortw7TRp2rtw6HTkpQozyrLnLxD6mAeHa4dWRgP",
  "key47": "2oqvzx2V3YswrqBdvHeJXtwu9qkzfzB1b4tzB7AA3paMw4W2JnwPhsLALsVL1AaEL9ddSgBPHStQTNrNwXBJAP5s",
  "key48": "2YtM6BQYUN9AwR5FXothL2Kz2CksYPLCzHhzDvW9T6cMDrSHricrWzigGVSvjRX5cZFh4631vw4xRjFrKdBp9eQk"
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
