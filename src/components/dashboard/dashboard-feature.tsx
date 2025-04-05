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
    "3aUUv8DR9APaZZKdvY7TAnwV4aGZjMejy2rbjd4LFKu4ZFKKEwTDx3Ey9PG9HeHkWaejSjxczwbSdFQa9ySKohAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZQBf1CEkZepbvMJmLeEUDNQwfzEUC1vGJPqoWKAao5vUonKiVXTbDm7NXKpC3PvJj4gPhjCTvuWDqu92wZiy7AJ",
  "key1": "3Cbsy5vM5RQuN9y1gxvkinvQ82WMhmkYCqSZ6scmTKT9ECoRd87RwyFPaYee328xoP1fXPwNDPaR2RVF9ZGnhfhY",
  "key2": "4XgwBFKP1XoqxCqYNq8JrXHwxdBKK1xPCq9oZxuuk3EdY78YfbDTPzB8rUPyuVXGWe9UsQn3X744YBBDxJVvAAMU",
  "key3": "j8tg2ZYLqBcfDZkEJuHyTLyjbcQMWvYvu55dFtVaVtNaNDnMsgeRVpMekBcJJ5B4R66ceR4HcJLokYZzBUwvR5X",
  "key4": "3CcQQXaHXkyAt4g6t3zsi3nJVqJHg6Qpn9qVRBNa1Ch1qMC9ZGcXyoUbUunRbnfvo8pg7kPB6yA6FygjD81dg1GX",
  "key5": "2RFAnLxgUR44kNuBjPqT4TXSzjZ8eaK19ti6cu1P4XzMLzq57pFBvtwhGavvgSRhG99UT3WadWw95YUrR9bPKAX2",
  "key6": "5KcAyLmJqXyZBM6tb8FKC8nGCYCW36QVnDXrEGff4tKn1QPv1MN1i2WHunpmHptW5uSvxCW661WZzJJdfuw2diM7",
  "key7": "644cVHPLAKHXuKqYsnyDBibeiC5cCsSUKikNBM5tgVZmtqwzvMNJWbkjKwnwEpmKDPsV8vEFGwhwL55eRGAuXbz5",
  "key8": "Y6KuGSZ8PNaRJA6Vt5Mezt38xyjRG4hU83oALu9FKgTrqgsD6XsjQQQtNQBsWtwmgty7KU8thDfuRW29NJt2ZcP",
  "key9": "3mYYgnYkp5CXETbmvXxiXREcx4tGz9195xi6V3844P2BPEY2M8SGc6XeJNxQZt8MyFGugtJRNket49LJTD5cMo8A",
  "key10": "4dxFL2j1mdoN58oK7cJCemD1KcU9TxhmCg2isy9nssFKfHEMECmRVk2H7YahFXZKrG4YPnEb2QcUbmTpMBVT4uHr",
  "key11": "442XgFs4FCavhm5q7mWF2CnNSPzY956vr59GziL8B1Kp3FS5jwBkdcMN8aJGLT9BR6C4kmXs5EA24Xe1hYiHMByS",
  "key12": "5NX5Vq6Sef5pwuN1SoxgvSggewNU3jUnzaPhXa97q6eEWz2TAoKWkFiTHWkV8EEPyycN1zCJJEpf9jChJC7bDqi9",
  "key13": "5vLxw8TyzpsnL1S1i5eHaJrySF72kCYhdLvbSkyQzqrUg2TUY1Msv9Z4uSgqraDNbD4YnxUZv6ZKUJFytwHKbU6B",
  "key14": "4NW93tK7g8MZWMgmkzUvY3iCWUZBqXktmeW3sGXPSMMCtUdHRzUwNeJDbB6Mjyjg3BS9oiBvMjDF4FcL5RbfPzBr",
  "key15": "3GAyuQ8SSgAbYEWY8Nqi18JaLpypcbNTfYz6P9bbDqtvKWzDQHbpashtvsSpV6hBqa9gvp2vuLrYh7NCMc66iWL8",
  "key16": "2uep4VTsW5UgsHNbY9YEV4umu4h9gxLaguCxYwVc8WEggmmPDiMtjP6poVmBXhASfDStv62hA3rCBz3uQGkJQeGw",
  "key17": "59CkpiLGcj9D8ZvwAUpofaiaprhuoptVNxudq9P17U7iwsvMN8EwtsQgNHFtxDyXYdH6tTB3XrH12YWnC7yE67Db",
  "key18": "5j5pFQnAWd1H9drWLKZAEjLZqd7ub2QQjDjUPwhCtjcxiKtDTdg7BrJHqz9ZQbydrfMCnWoW4XDf3rFRv3cdam5o",
  "key19": "669RdV2RnhjTx23Ud6t68aMenLov9kk5EJNmCGT8oiQZMNRsjftbt6zmkHJoDdhz8z7FWPUD2puCdMZm2DJPXQJA",
  "key20": "3h7Mc3tXhHKWKna1heXBWfx4v3s2FxdMSNbumLj4UnJWnQ2iPoCbBfRpYkZF4K98cHSh71BBym1Jjk8EaHhVKWav",
  "key21": "3VP6ZCrhgYFYNQ3uV9RboztjkuMExtheMJW8fkNxcuhp3SNcfdJJjY86j1FEki5auqRWDcY9q5nYuoAu4cGpuKaa",
  "key22": "3xN5m7w9Nd7FK7GNhmEwW76LNgNGifQSdiXUFg9a4Ps6cLjHfj5VyJMVKEwSVeVc6RGJoW5dF1s1dw6sootDkZdn",
  "key23": "AdwGwzWMpBPqx2nhqywUHJPom14xrABjgSSaF76aeht9dZwfAcCnM232hYWkK76TndTUUPTyooiSYCjk8k6JmkX",
  "key24": "27MLxAXoxFxjm7vieudMjbWYvrG49KMuEaBhHVtiVhbkqKQGf4LGW3j3fd5J8CH8y283R46kM9zKwhbPEAYWQWQu",
  "key25": "2ewKV7ez3UrLjFjrb8F662tB4Hchv4DQWzVMn9q2HvrH41JZnPJcHzjPgS3K8PWkYt4ePVN1RFt7VQ2d7wqjhgMz",
  "key26": "2NdZgRdsEQFsLUEs9tsLoV9JEbaJ4v79VJY43ecmzzb4tnZJmFJJVRTUmNsvd367MDK929tkBTwEEEk1TEjQtacN",
  "key27": "3aChzkgwv9JAVGsTTJbeZPw1vSz279i6yeFnAGbeGNkRM3aX4wHQY8KspTCkA2WdNn9AppRHvAYkboNU7Zs4rGkt",
  "key28": "2cri81N34UA8CHqhqbfp5uaWbgz1zXU58PEbF52a94tEaHvRmB3AjKrJtexueykcJVyZvRyyFfR8uqocc6r6zhL7",
  "key29": "SH7xCuxyRh89wucAn8Whehpvqxp2iTfCAHBSrEqVhSzRsHr8PCWJzytvSPzRq7yYLrtd3JuxjyKmiosucV6LDE8",
  "key30": "5GGyeCkjBdznWpENjrTM8MSPhhNQU6hpRJi2BXki7GoWq78rFtpqdb6wvN2PKNPCv2su2sNim3Q4gtDppETb8gwd",
  "key31": "2iofE1kca9AbPwrnR4S4fcosenBkEdmtyfw3GmAvpSDbMqeyM7urdsYdnE3wdjjMi5Cty4QNKYgobCAVgX2wMntd",
  "key32": "3qA2QDsXLqndHimX5HmbQ9Zb4dioCvpPr3UwDevGbdmEKa7q5WoKPFpMcmDsh5Ek18ma5D2GS83Xd8pCwXj6MZf9",
  "key33": "4357R6uWbQZdbJNj1yyXb9MukjeyXwMvhk87XfFGkHDDb7LCGEKWJcD9vg2csDLUAN3cKLoYeK7aixwzWAMfMNvQ",
  "key34": "3UXqit2XpHfEqMtDSjZaPboBfJcNv66z8HsGKT9CvbDavMXDgpDRXLQCVGYAQSK63a2bGiG6g3fQ5phF3dhurHvR",
  "key35": "cQom2LphdEjFNs9x1rU8zH3iRU5VTBD1jX69szR4mcHsFVHhrBdxTfuz5bffZPSkqSSZE4Met5bqwJ8rhUzRhAb",
  "key36": "5GunjEMRbexk9xiPnQHhsN85K5PLvZFcg3X2dH2sumH49iLG8G6oT8DwwaRKmF3PUTgXSr48eBaKEfbRxL1pR19t",
  "key37": "3HqEaw94MJcLdbqevi6dGgiGGVtGMZeAXnH8Vk6LnJ1trB9ckRTUqiPmYXXyGJ85MZTC9PgpmXeVgpYahWRs6kxm",
  "key38": "4z4upW926DKVRuHeUG6fS9hoqVZMkYmkQno2VFbbp2sCVeWdAmq44RnjJxEXWqpx5tYoWavuVmxcHsek3b8kbPUj",
  "key39": "61pNi6ztJiNYVG9yEnT7aPyJfwDmoHE7NMfsEKH8knHTkaLENhKpPUWLbrZuhJ2jXpVreoutdKsBoMLMUMt27yr4",
  "key40": "67Tsg2jALtFR52TRCHdf6UNKH71DgYx3vjASMLWjG2j1qLcLcfSEE4Nx7yaY9erGo3qSwbPLtsvj7HJAfwhmAYa"
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
