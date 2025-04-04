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
    "4JsafwpUpzG1oTUkVSSH2dmjjMpnCapvDVXdZBiML5gqris3RtWdLHXsgmzdpxaPpNKwe92Yi22gKuTvXk4pivN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42F6TkCS8toLYg5QyWpEPYMJd95je8aR4EDpV3aut5HHc31rKGFCbB83nNUPkc8dY2AWD4cwbEvCsgEwMyDHvosR",
  "key1": "oWBzF3hQfiMLhKEdpEdq2Jmpq4ifU4JuSj7ApjEMXeato5ysCHuiDAJPUphsxpufqawXBVW97iR1ds99KrHoNPG",
  "key2": "28Cjd4gnNf7MM221CmRPrQQVYkyzvW673t43fUsMbYfkDjooCU2L5XuQTerNvKT6KELbzxD6GZcEpXPKmaygjLNV",
  "key3": "3EqEwbV2bGq2WzaQYbUC84RBk9fmZKtC85QgvxHuCcZHrV1MUtqf1wVnaJc2XKeoa9LjY76zbcaLAoARzUXmBajS",
  "key4": "3qdQS1WQhtRjS4CtFZphxQ8UDQYB1S8FecYBwPxon6PsoCBrMUqpsiqPEa2prxnz5m2qdB6a1o94kZVaSYiwCbRq",
  "key5": "RidueayTArZkjkZafMQRrK1t9BWaHgdEqhSv1PJroLFGmdfRxEbCbHEGxgeR7Y7vP5Z8JBLzmddFNdg3Lg3SzWm",
  "key6": "64u1LMZZ7cQKEUZ2L4utso7ZyTtHJkjxZ826Qbw3e792kRYYto9VuSwBV8kwRkCkNgno8p2t7VHtHGnP6yRY4MXc",
  "key7": "58UBNUvSWtQTi21fCxUzb6q5fCH4q5aBLUUa4BuJgeGT7sY6Em44NQN7wY1A78kXAz6LJ5jjsFAXUYt35FFULkYu",
  "key8": "DWoK6sUyVTLgcXrXYpy8DSjRrz4ZuNrsNvapgcouy31AfRS7ygjnFhkLLCKwAfUbppBpVSUcXqyz6GKZoxjVTbR",
  "key9": "4YfpKroi6GAXVMG7brFmY4V15mpFndir38AjSS1bgtK5kGcBCQ27JZMjSLzgwY96aBWXhFeb2ZkVoek92vW72EqB",
  "key10": "51aqoimTLjscvLfjePt7WZNuUGBp2shQFHR5dGv2C4s6TPQCfg5bLUw4jW9MUWSgcU3CzoEnbnFT26H1Yb6vpHMy",
  "key11": "5e6YNM3UfoZMjgwSxnveSRqYziHNTmJC5GqpiiM6XQ3BVJPMRztqUEHHr2c4zy3XHnza36zsohpaSEmni7xw21cP",
  "key12": "4Hkq7FL5JDxDXFYppGDmWASkBEXa6av5SUpZgS74SjVWwPUqws1Rd9HNhsaFnqyqfbtq8EJvBwf2skHVbJKTgCh4",
  "key13": "5r8UdyvDyePu26a6sidrkoeR5Vh3tEehkrxsuzb3U7kBPGgrHGYg7kXeGBKu39rrBx1hUiLj9PEZjGa96cokoEGo",
  "key14": "2W4aU98MmqR9YJRtA5GyicRojyVYMCjgXUHJoC9jr6K9YRrw2dzZ3K2nkKNVX7TDBN96cWSm8yytzw1n6HdfoLe2",
  "key15": "63zrTcmWf27zwYJwUuDzZfqwYLAdHF9qA1o9KMRTf9YFesbSZvdGN9Me5rGEwrWLZYYboB6DbGh6b2JqtKE7anAS",
  "key16": "g26NznViq3By3iw4TLqyqfFMdywMgPdGiecKUWCgDZ2pQRGHZVhgErDhfjtWhKWhPaoNKsDthdHC5mMYX2ScCY7",
  "key17": "hXXW3i6Xttx5WF9RJ1s7zSMzXNB93uisRppH5LxamrmnVtWo5FBKPPKEMkeXe9VVadrEuLREwqSdd32beWgzaFi",
  "key18": "5BeZo8dVJsu4PJtrDM6yBKwPE92rPXMAARhTtcKDnP3CSUL6MMwdH5GWdTE6AqfeWSeJzFCo2Xita12ZmjGpWTWi",
  "key19": "8VJhMHHWD3pG6XK8LHjvgVRp1wVwdsebp4PMzepDdf29xg23WK268rT3hNKi9edgpGEXaB3DMm1EZMqvBJiTtsf",
  "key20": "ANyZAY3g6YxcUVpnGxTTSzpWx7bhaSX7G8QfNmgLvwcDWQDaCat3LT5rWBthJG6SE2wXSxc9PFLw8Fx3Zk7bjiJ",
  "key21": "4aboDed7GwbhCQFg4ReRbNrg9P67G1qFpJEt99bFzdxB8TVkjfB9Pdo9LgESsF7yz3QTc9ZbVAFuBxcZY6zLZj37",
  "key22": "5J8K4ku3i3CeYL2LekHzHQZdLjt1iwKS573jE2Mz9DCyWLhGBS8uCG2nY5fbuiJt7PWTevuLigz5QRPG37VmJDKP",
  "key23": "32Pi3WuN3o6GVc8Bc2PK5Z3Q2fSaPdN1yGdRTxdRy6DwFFyY7Abyny7PSrcLscHefq6FUaS6bai9vNrFFrqW1uWG",
  "key24": "4eHMa4ajY29Hdw8cTZBt93NCb2gyNmruAogngwQCSFJ32S6XRS4iCskMTXiT9W6G9V2cRQV4HND5zuGniAMRR68w",
  "key25": "5h9e9HSFtdUZfJQzoLw2WsKMYLTaNJvYdS5VhkUJSxz7GyUPLWk8YsMbp93js1cAd3MHEZRTb6rJAeuK8YCAbegR",
  "key26": "Rg6VnZCH5dt17W5CjLPDSXvw6MUhguqQFVbF28hZ9Efho4CRE8UjNtCkyipvGZp69qoBTbM8t8jNUJQcHtsS9sB",
  "key27": "3Yikg7nW6jbuu9wQWiAeQiHhtRG5Fvv9AUjNZBro1MdbLAvjBFc5afDtCDuvDDMQDVLpyQWkZD1UkDF8XmXr7HbY",
  "key28": "54YvomK3JBuCXU8zcYZVCJ2FF5SSjK6njA47DPz81NDitScF6udFxRHdYRntA1vCRdiCPNRh5LKiKQewfWdGNFo4",
  "key29": "5eswrQFdE86hSPSQo65cMGsLrRrhdz2gxKaUuJe9mVMoH5AaMdfvsMRsrRN6PLptSveckdf1UyWspWSt57WqHdDL",
  "key30": "5PoeriPdJhxp3rSjA2VrxRD7yDCsELeQNWspusPmRQ7j6dP2VV5FFFwbtM85XxrVp5h8mm3U2bCKFWTJDrYuDJim",
  "key31": "sAc8mrfXMpHpD3KHCZRwpACGEqe4Gh2ooNU72MUtsbu48UAjtfbNWUi77sngCWXGBHXiuXcNy1S4VrjC9F9emko",
  "key32": "54Scop2n4DM9YSDJf7hNSfbwDT8VxgJKwP692dJJA69CErmWUt98CBLzmjqpsEufUgSx1nd9XikztFtpHhgLEfwP",
  "key33": "5iJTC8me7HFaSSJhLwPt1Y14bRD74BV8TSG6fMSiruedU3o1Amj6AAuYoeLR3tBYrBDha7cwX1NS7Ug7VUpe6NHt",
  "key34": "3kAwH1rS3mydjErtZTZ5sPvNy2LNfpzYdhzygeFJ6bAggKw95E68FZuPdkAVwh3Wi32FcB7tMPZAqQ8Sz1Aze3k2",
  "key35": "iDT6ivEpWKWMj8Fevyqb7Swysw6imTziaXtzKgj3eKTaVYxhFgG6mgi1VJu7ANxY31nSxoC1GqfrjrUJhivDHQd",
  "key36": "3ZAzpCZYZrUbNPJgaBJr5jTuk2uAisZCKWBz1UTx1mfsxHSfXJkPBPWedojCtAJoiGsqKTYfXR77EyCU5WiVykEF",
  "key37": "3o85pMFNqBHFCXjd9Yx9PKkYCjTwbRhMBkxhQDL4RY18uEdfQ2gYL9g2tSFsfkqm5xx4gHJWFRJakBBdxRS34xGA",
  "key38": "2amhJNf6RinHoZzFpqKT4c4UNZc5P63J9Qogcdvfukpb22ixUYdvGS7gNkLSgyxUkapRnyWM8nywFFua9YEtiTta",
  "key39": "TnDRGgSbX5g1X7dXUe4yJA1i63xgxokuyGaY5sFMpvgiSHaYHmc15Zd9wpK4vafjxH2p655qXGPe5YCe2dtEYkv",
  "key40": "3JdeRfgpV9qZndyd5wB746v5x7u4FMpWkDW8aWqY49uYwMcdiSZgnGWWSA4VJJaHByCP8gJeUhdCk9LBQpjrmP9v"
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
