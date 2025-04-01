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
    "5gsRAhyFAT8uyQKCsPmbE6oyHHkTJHBKxPd8xufAPaN6WCeJVJPbEUyoisW3AFmEKiNXm9KuEzJiAX9c9pXt3c11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1YrYier5begUpVefk4qYLdtatmBrysqrfj2MPK3uBLdTPdNNhPktNVjxsnK9aTCX84G6ZrpzfcrBfUeGMQdePc",
  "key1": "3kzKXsn3hFj3fcSE11LFLtqnboJk76zbGqJq7B7GQ5fxXn4Po4ZDvCw7n5rwhovUqZyPNFrZPYQbmnxpq2KGSjC4",
  "key2": "43KnYQ5FeG95DrD4CAGSbt6zWXhZakjSbftCSsXBKWDFzgKyyA3s17yyLcaPYs1xEkVoKpDjDf2sVYbFtbLnNJdA",
  "key3": "31pn64YZ9zBMCSFu1QcwWXWS1SZaMudEnXw8XAFcY6cKD1qqjw5pj2zvry1AHyvnzEyLwGEcUSFefwqPhg6KpyWC",
  "key4": "4wGH8TtCg1sQjKCxMWb9puLngFxaHAsxjBa6FbW2KCuVgJRa9p25Y4SQnjqNHveL1mjjaSB4AL7WQbE687EtJJFu",
  "key5": "3q8MEZLRuUf2szu47S8GXmr3EoBtiZNLAcV9QKrAoj3FJMT6daAaCPnbCRPdfnrBSKiZ5E3VWHxwD4YvWoL4vkt7",
  "key6": "2zyvyNJfGFTCh8K37UBvFQNMw7DGfpDYGMbAge5i2v3k3HdLxKETuEU6FaeereyTfvgY7k4wWgVcmoE7N7QU6Rvh",
  "key7": "4YYGW3XdSkQsH2Gec8mnZJog4u7xKQmnT43uhrwoPbqAhnptrJYUFwf7guGNMbWRdUj8tSU36j9cj6JxmLhR7HMu",
  "key8": "3QCyVmiYNobgqPp3LaG6ica4PZMmB16j97mpXZMPBoBEpc1sMpe92DRLW3k2fLLkfjAwmx9Roq1jCqX94oErt1Kc",
  "key9": "5vGURm255MtBaKXD4qeK32vRXFwDT7HDADzNsLyr6xqDmVjww4Dk1zSd68SLBmkNkhay5EZHhZLJm8YXCNMPujYy",
  "key10": "4wi7odhZdRaLpxWj5dvAbAQnbErzc8rszEksZ8hMZsD9mFeVdEByJ3DphbzyJ6syZgWUgroLugF58p271SVnP9qr",
  "key11": "4ZDQ2r2cK1MjntgonoVejxodP7LkapG767xJkLuHY8o8uDwqKCvcb5uMhRhdgcZUWKPSckL2p7YHdUCVkcoMvRyZ",
  "key12": "3e53YYTGAreP4CDmPQ9QgcbmBzKmH11W948m6MVaoo3PYWBBB1CNoA7mRJKAgsXbGtsbiy1gECRPjWoZxZRfzxFF",
  "key13": "5hJZVTWRD1T9dHYsByS48jEqCzMXi59w456u8zTo61GiSNLhfXf37JqF98ymwJab1hfPG58xfbxQFrg5CY3vJhAB",
  "key14": "4KYGgDPrs9C9DZ2YSCFfHJERaAfT7zDgKyTVa579v6U1mtADiMWfS4CFVJXYpGiTveHF9XPuf4fDPUk4brS6zb6r",
  "key15": "5toLeEAFy1xSsUQsBjqBKfhGYYAVv41ZLG9mRzgWPHnvqiJCJVR5JSpMTDoD3kfTRkcCJgRSr7aiFrYTXiWNW3Bv",
  "key16": "4wMCZ9yy1VDhLmdGYnzz19tDXAY1wPXCwVemN15HPa8bQaou11p5vex2p3eUMctQHZmwp3TftBr4sT1s8FcP3g7S",
  "key17": "4Prz1abxmgzi3pZ4PBbVUJtvGeoNQCqShgmQt3gcdsCiByMqXCEaFkodDizLehDurrnVDcBfQQCo8aoJ3a7GkWnE",
  "key18": "4dSvuiCYkug64szspLDPhzT25CyELB1oF7mCoWNDEQA584RJYGaZaHGHJ5ae9zg6nPuE6sKfpREWq2pDv9tBZhvV",
  "key19": "4LrjZ9dpusuUfpF8BVj7MbZYcXHyQTQLuWAySUig3Lit18tn4aDzxcaAKFzhd7Ru4keay3KZ5sbYfHFo5Z3b9CQC",
  "key20": "CruAsJJXsLfD3AnrubENSHCCa3vLkWjAQxZkv6G7D6dkiQmkHyKmw2DvRobxBqkt2TTqhDWjocq6pmBCZzkno5i",
  "key21": "38p4PpqtBLdh5pcBNWidbgxHhC88RHe3HmvjxA7ZT3Mu5SVWHPKJxCTy66NLmYtCd9LFGudNjScBXGBzFZBt4Bxa",
  "key22": "4eds412iFwkzFPs6JLz344PWZME57zKS4fKLne4rY8vYeiR3jLAd8MmyZeKnbMj7c6n6C2xZm2z2hZfkEiovpW6y",
  "key23": "3XxxeByDFJ7pmLesiJNqu4c3fHSX3TvixcFaFoXKyvLpBpeRqjqc8LLLVdHybTBfpfwBZCuAcxwkGgkYA2DfPfch",
  "key24": "5jQiRZj3N7YAviQDvRXc8RM6AK9fzepWYRxqMd2J7VHFr9y1x3VSdUWt6dJ3spSc1YpqpWPC1a8qurZi1jRuojwu",
  "key25": "bhyRwPjc4N1wYd5y77TqCoFrGzBZ1vJXhrW5wjNewFdzxgtf7uFxg4pY3aLQqjrxrVLwkMbhRC1Kj8SHuYXmGrA",
  "key26": "3RAE2MHdHYUszigABPu1Zf78g65SKkyG17r9aqnRwqgQBfWsVFa3cix6jBuAT7t9TUGmdAcEr319hHkm3PHY4LTA",
  "key27": "3fGhpx616mdG6PKqjZQJ9s7i44WSC64g5qUSX97a3n6chgBkyEtdzYtu9WZPNdH6VggA55pHRyG9mqNKEcPjpeR2",
  "key28": "u1piUXXAD91XTM7gd7J1kWCyG44LfB65Tkq9ufm3KjWWkW9Mih4voFJKnCzcEGSnuQAsjEJQbKTQXftV4BvnnxB",
  "key29": "5u3ZyGT1bVb76KVRz4TEh5Y79PxMtrDoLVQc8iduLbMVA4RF3u83AMVfvX7Rs5BQso9NFCGi8SDSHywJW6VCof5Q",
  "key30": "5wAua61gAaVRdXJD5MAbbXRbeWYaK4SL41fCXoynBgzAVCVhFGveBQK37KhsdYNuZQt67tNXFQHNqc9EQs6rANnU",
  "key31": "4pXKsq5cSZAuNE8JSGYUqw2DVHDTCcbE5zit8xooo4SyFYvcDPvF9uu5ZgRA8hTQ17BPkWfhNiVFxvDPxyu3auhf",
  "key32": "4YDDESpgAhHQZ1Jot7x8RJSAxGSmFA7NfAwnFYRxCtj3TRQQeGSEBwwiRCcoCVTv7oa5WSTDANE4EKSrSU1NLhfy",
  "key33": "5knk5gNuoLjhB1Xjyq1SkWMwroCfWF21hy2s8bWG2PmC1meDfhvggPed1QaeUFvpeyDSAXFnpQNPMop9uFmvbCNf",
  "key34": "MxgHBdfJcUWTi3HSNb6gJwB689L2NzjrjsRMkGe7ST96KAE4a4mwMFt5aU6gMLdehk99dzQ72JC61yWeMswssi4",
  "key35": "vU3tujnzU4qRj1WAod3azA8daVwyYaUtvPQTsHYD163px2V1mAJUgfP4NeJ82skWgdeaWcYNFcCwogLZG3cJaT2",
  "key36": "DxhD8pE2KgQ4A3idQy68vZV3SdoESu3LTcS74441oX7fm3Y1duFNwQEtUnXNSvcU4Nsb8GtPeXnt2yvRFd2jypt",
  "key37": "4iQzQEz5DXZN49DGLirQWpPvHfrXLUs461nE4cV1pGkY6qKBuvBLDEuYDCMSeb22jedcHx3RH4fWjC7mHJfCNTvx",
  "key38": "3r8CDuaQg8sFzs523BZios4WwmVPCrEuUAJD5WDLTso1zAsTAtwKiqmsb91AZsdXjZVGEBey4yJbNv6wbHcPB5Q6",
  "key39": "2jygncZnoyWSoVbzXbm6LpkpHtsGN7F2Y9Z1wi2Um1tnX44rX4pnmbtHXJYQyEMNv81AK5ezcbZWBEuX2dUggZnj",
  "key40": "4VsMBxadjU4o76shZSdw81rSJLAbzJdxkMHWqPA9Hsaq8Y7LXkysLYT7HVQxMi442EP33Fe8oWRnuUXos8MrAqVc",
  "key41": "8F9eemwLm8zFaibKMNTNz4QQUbNMTqwDBwEVTRdRAbmoRhqJWjS5LuEDqNDADKFqBtSxDFxPk2DYxYSvdW5nFHq",
  "key42": "623oY6ZeqsZF8GTESAStnhGFuC14BVMLLjyV3uF5zRKFijTXqoNjgwBWF9CFPQg9Kd5DCDfUYATj4fWgG2PwJz7H",
  "key43": "5pYqG9rA4jkRQ7WbwFsHT6dF25KzNL5TFyHudbeYsP5BPMxfTsMUqkwyqT3CKXXUPNtJC5KSD6eAMtDFYq5Xrq95",
  "key44": "3AgSD6efkvGzPfigwgNHEaVwEHMyatD8zZokmAn4Ak8Q3RtUwe97zemfWjY72UREC3o32HNnYZZWidxMnYKW4TB"
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
