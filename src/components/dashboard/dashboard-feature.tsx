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
    "3Gxh1qfmCmanSRpoEhdHKDVz7XpUpZNDMtZT1SHAfaGyvjor8ddowX8QD57PpNjPLwrkkmU8pqEPymSwnQqGjXr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDpMqgZF6kCb65r7VccBjd1wopYi2QKRayytteKT7Fk8uSyt3uhJUEM4pQKv8zznKNfMKZAYGqgjiPyHUhLS5Dz",
  "key1": "4FvrnCqodeAdPQCy4E5udcECa4MzC1gc1Rfzo9g6XLM4mfkj6cqKxzQK74FxfBbCaywsgBJKRbiuAKABJdP678m3",
  "key2": "jE1Jmt6a1DCf7mNPwnv8YEsoq274dbcMBGgqCZ1fpJuqAXoJXN7g4dZZTFN2Drv4NxoDoZvvrNewGSk8A2a8QrM",
  "key3": "2JkQi3DZHWThi4NSLB346SaxsPY6VukRdzsLUVyPjPa1QADuPzkbnMmLuVpoPm63RTRytQyZvRuankZ7H4Dxx6Ri",
  "key4": "2baorB5PkiuHeVv3A22AKyoNAMBKjC6jwmsMr2usRMczWdkDfWVJLeveB3x3xFwsVsaAu1sCW2rtxfhhvH92HfKk",
  "key5": "2MwVEqRKeNWdtGKFFq4QJjt5drzZXr5EgpJ4zmMRmNQScQprDbdDivwPLhZBhsAtFxrqr9iQUDTcYJBgDtnDCFcQ",
  "key6": "5kpofSLykpuPVx69QtEvBXYuFeQF7yaxthgGNM7kAAmkfUseZzivEn6XenwcKjoCVyvNDdnLrKeCG7g5ANUK9XFE",
  "key7": "5c29rohSRmcSyaHy9E4vfPX9pgHQdBgfmJrgNwqUKRFckdvD1vNXaR4t99U6xT8zXNXueH81PAgrBV9VgPjdWuzc",
  "key8": "3sfmAY5ZyJAtvkbLoaC1u1PX5ffTkQ5HQUHMmooZuBnFaJyiaP7MaXR9CCqW2FPtTCRRLiLc6XDDjYD2vcrP99Av",
  "key9": "4mqcLQ7FLdixdHEk3QbsmqVmsUrsi5CCi4aQfZDfHhxzgoYKvkUWzHwij38Gt7KgGDMn2TzJckuMrh8wsTPPahL6",
  "key10": "2RdZk1DQoYQRcduKyd54j3hiUUCSS5rL6s4G2kyLsEFujZ7gvhjVp18EgNyywdxwdTWXw34sEMn69qqxEnyH5ZPV",
  "key11": "2dmbu8qPXU9HqBtuDnTSkvpUDPNntJeWuCqopYsqeaBGJsATFMae1abRmh6XFFENBANHFPCmQMbcve2qFC6eoqhv",
  "key12": "q4qegMpvRCHCgT3Aydfap617xMgYofrjtdSj2uvbBiDHz1yq9QpsinnBUgyVQVznwboouwPLs1ctnSX9HotTthu",
  "key13": "2sVmNKfKHNxYSrru4VKueVThe8FW7zMqCt2a7JmrJnfYBb99ptepJUv5ZaYkua4515R8Kz5iLxwAMVQp6P4NfEWQ",
  "key14": "3kq18sVmHHrJwGCGVzyzGfPVUM9Y45zswMQT1tGqrtD76Rkp8NBXqFoFZ2YbK6bbiF2zseREmFN58odzFtV4tPng",
  "key15": "5LLwycFJa49Yuq1WYwPBJbFWwvTLXGXRe8DXTPLXqKFL8kF9hLtyz92Pj78v69Fzgr5J6TBaN6FoaFz1GyvsjANA",
  "key16": "2h86qXdh5GrDG9m8Bvp4NyGKe5NK2G9zjzKLXcDaBnfx7RYaha5zohiKWZENoURyaGuAZTpM2ZZGHWmFs3hKs8aq",
  "key17": "3MCqyjwQR2hkgaHtFkWUizQDooDdBCJJrEaMBedV5xeKre4m7yWg2vTom2shXADrAw8v7DPyAQggL5D48HZSfH78",
  "key18": "52aBcYePSXVjqGGtYMiKVT9oeibGMazDPJF3abksFzEazmzRWQUwiAtFFSKd76fJ8L6Hjj4wVVBb8GwcJ7kELn7s",
  "key19": "5JXQqftcou2v12WjbXEjF12ay4q8Andv25LHsTdGewWrgPVuUeFPwF1SrvQ9NKH4nBmzPXUab1c4n6eezYMniTAU",
  "key20": "3pGnHXQZZbX9VtkjbDfwgxLoEghVzTY6RXvnPXcKfxbqidubs7KVwhXU4p4khscDuTrFw29cwnCoaofj1WGGnxcs",
  "key21": "3XseUa5KcgTakZs4qZKVAffFcpZxUDJHmA8TtfX7AtLgeNUH8KuCbS98BKkMG8XFhj18nxosSZQKMAoTgDXGYE8M",
  "key22": "2EMBwTntBD9pZC9W1GyoHeSUotZfytyb8oaddvEnTdHbHRCBDx4Y29PR9D82EyFmhi2qGCCZgSBVokj6tPYaCDpD",
  "key23": "2mhwv8hErBmA453ZSFYCLH1VE2a2eaRnJDiX7vUrG6xfyToWeUcPVuXWvDVgtdRErXSCUr7QY7668ve7b6biFbuy",
  "key24": "4f34iQ65RgeXVb2jtsDUEKaEhC3kZdWYhCjfu8Y2CxRhMJ4JjPbHFaPQ6GQVmzsKW2h5FLbPjNpuBpCYN8j68w2i",
  "key25": "3ZKYjmPHWrfbR5J2MLw9WpCVGw4MmQYtVdhwuLs6H9uX7ixJEWMuDtSHaEWWvAhTYLCvpNMxjU16UoEbiEywMAeo",
  "key26": "wpq4AyLWYebb9ZngDN6UDTTyZb7SDNQb3Kuae61S9r5xA2JiswBjvmRSLrX3j2xRkbdWJmVXq1ynhx3SKzkx1VY",
  "key27": "2McWrzCrzYzguJmWQn9pxb1B6UFR3R9mSZhEKPE1kLm2L9gGGahBmz892GxNLwRR4RowzGgLjb1yZ4RmcrkdCu2z",
  "key28": "2wK2Z7YojC9J6TnzZqjKCUKjVbcjia998CmHkAXrLSbXVY8RNvbyXBzxfkFDuTGSD2NdAavzQeE8VNYNniuzfMgC",
  "key29": "5JBFumYkcwSGvGQevGN75H57g6nJUj9iL7VCyTG7nuYTN8DowthzfkdjrPySGYmWCT4pCJgN3QoBxvnMdemVvmgQ",
  "key30": "kpi5BYQAK6aeybThbon1H8n1jMVNV41Ls1sYUeieaKrpGdrhCh6ajrxsC97xRuEmDShSWC8oxEE7yTQbXQcaD3n",
  "key31": "2S7Ym5d6obMFtUakzomotmsto4DR1cf4yJB53Crnc2M2N1rXxXphbs6zoaVXuLMAsDs4qXsMSK5XoWaPySnpkmdL",
  "key32": "2XQRohrzY9gvUehUdyB4RvfSJUJibhr2kjoWmDy24xeRuUp1hvGiSuVW28rYCEKNkJ9KjLZ2SFcJkvi1TrLJ8vHJ",
  "key33": "5hupx3WAEy213uteVu9Ga7f1L48S1i2AjcDPqWTZtEdn1tn1Wgw4dA36zJ8WfkNRUxUqD76Tb1A7TGnCsazdqfXm",
  "key34": "2ZmSjWnQYtHHn55J2tf357oXcdNchvCEQwNj3kD1LJHh1iv8C5thVeCxRUsoqbA29PxiwE4mZGFh6mTRoe82DKB6",
  "key35": "3dYLGAeU7w5zwBXKjNf22NHvqJJ4SvPHZ5P1sfNtHGbTT3ALXoggTVZ5jxhK1z9AJMMJEqogtxV5kgCySkoktMbz",
  "key36": "4TaDsChab4D663NFxo1qHcEfn5onXBWKRmymi9QBnCXaVeg82FWYXqMimDsB8RojiVhgRrrNE7Bb4jnBg3Cd3QrL",
  "key37": "3QLvpvQXwsJk2P1SmexpYhLte6u3VS3zBhbcSV6UPMQ9NWzpTCCd7icwvTrMqfXfQ2sSj8QR1xMZ4XWiAj8zUf1C",
  "key38": "45otz1yi98699tGD8FQtCMCYHEQXBxJh9csftGwazEmw97PCvJJQ1XNqJVuov4kVH6LPfXQLTy72jaL4h9tT8M9g",
  "key39": "3CFzKNbsCbL9heSL978hHXiGtcTMnzEtLMjqq6TGJjtRr8sjdJ9WbSGWb77hKpMVRJCNcy3CGTKtgCfwH3VnCdRU",
  "key40": "4yNbYYPjCedSax2G1kYuiWbUZruSFeVifhz4UNtbVmPeyj8QPmdXggVYQdd3xg68abKq7CzJAbaFHXzLbDAq92DK",
  "key41": "3ZAoru5fhXKEcubth6jye4ufEZGPp9Br2EEdLhPQJh96h9bvR8TeHkB3xXCLBTQLDQsfP5QbmM22WAcq9gNL98it",
  "key42": "ZdyqtzhH54FCXuW2KfGQqXjzp3mi1AyNxF92Ti1JXEfKV1Qag9uUbcSvrWebyhLEApBfoEqWsooEuM7jUT4wFnR",
  "key43": "3jmQVropReWUet2uzqRi2CgHSFnabaqzGTPHZ6Y14dL5BnVeQt3CJQtpPh6A3rcVDLWudQMMgEeD1cGAWvAsaQjX",
  "key44": "4uhg5gXoGKZymYfNkGEkxYmTTJArJ5fa2i8BnDwJVTUYwxjzjTcYD3RzTHWekvQpxHncKBBWL3vSYBxmXVvQi3Se"
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
