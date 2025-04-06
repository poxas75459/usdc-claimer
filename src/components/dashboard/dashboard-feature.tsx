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
    "3AFNF43eLYvtBaqdUS5dUSj55LmdY5E7AiREvd9PVjkRy9SvdoisRXTG3pCTXSPWcKktRpuLBFAhvsJ7p26rtGYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmuBJcdRfwDzBr9bSupF282c2AgKBswa8vWbmYQpdukE1Vu1NuzxeCUABP8XtMBtrmGkS4iQV7EWT6m2DrV7PMr",
  "key1": "GxReJYnpSTZhjCFmUzfzmBTW6ecRwHDfrhFK6y7MVxmT5GTtF85Zr1kzBMn3KdPSL2hz82MBv9q49JfhXELMjDk",
  "key2": "58j712Pi6hY4ppAjgmxrrCVCoogEp2eqVvJJCMAhYpURiaWp6p1y67WWZi9kkniPWTvdznpJaeDMYikFyVtCB7yi",
  "key3": "3jGrdtcYgT9hUp4VGfAPiz4kY3xTv1Lw7FqnuXkQ5qBFeQqmPxZzRgYmDPwAf7qHXdZ8mBoeGwb4wTC7maXLbDeN",
  "key4": "2JoKFFopbmitr319Rw9xg8ux92krgLenvy4kja7yXbzEMm994qgheacWF2pchx28YNBAa5k28BLgw3CvmxbFKver",
  "key5": "3Z318kbb4SvvmpYB2KJsbWwV6437XyfyHhpKVhtVXbyT3aMKs8UwXeNQtvu1neeRmk55KNdwoKhzDiDQEDH5vqq5",
  "key6": "2jG7xjm55sC89NPCUn27ANBU5ECddYXUqnx9vrnTCAoS3KeV3xxuKfAThT49TbgA6bjzoZjFXL9utTUpcgLTRrL9",
  "key7": "iqSWSSA8LXXKQ8spJBJVKhr4cEf6DkPX22P3Gy84pXCHCRijHHW7VZJVs4q8MUT9xRwqnBx3x6mLxVCnTEmi3Fu",
  "key8": "4avvWKNAt3VQC1iFCj6LE3XKLTX6BBacFFP1hnHwpTq6LQ8ifR5yiwrz83rkx1bCCTdmAwjPAQBuyjTpq584GCLF",
  "key9": "5Tohu8zkXuGEgbZqEL5zQ512LdyeknwNX2iwbsJuCcHeWEgJ9d6X3UyyVFHG9wJpd35YvWxWBezWbwgrK31ALHxY",
  "key10": "4LX7cvcHq3JLKuLZeB7Zm3n9HASVbRQnV5sbRqtkhuNi7xggDBUqGUFZDJswqWFYayuae8m1PQLCd4eG8Ww2mo8T",
  "key11": "2iM3BLJQCURW2PNNQRTMtscRu4MwM1u6Gf7DQypCCSPknRNC3p64rbFgTr1nZU8AfDrAUXhFcQf6pJxnkhFNeDWh",
  "key12": "3hMbwYRruEx4kLGD7UA5DpqcHgj6qjpa4JQsXbzK2xx7F5BHaWwBVqmgyQ8L6ZQNisLD39H7B2icUsPNfjoWWGn9",
  "key13": "3anVYn63BTn4Fk4jyQ5YSY2MKphuCM8ipLjWGXfKLEqyvzwYChVdKPTLtacfRi8JD2pTALb1pUKTB6QQeDVThTWS",
  "key14": "3efL6RhobFg6dgwoRXBGDPrVQBAAJSkZd2HcsXhigW3QrLmQhihwiXP4vkkdrM8ehtrtoQeNRASB8JPt3aAHhGq3",
  "key15": "5EXkQjuKPM8EqxUku87mhrz6h5bewtGbrp9JxWGoGkXDvkQg369nC6piKD8wsdp5GLYALsazH9uJ3ACGYQ51oHs8",
  "key16": "56s2YB4SvkkehHgHYVSKdzcj8GQ6YvBPdWsBCidUK2Gr7ENxph2xpFEYr6xZAHPm3xnKFNv4FMZ97k8UcHBrmLLD",
  "key17": "2q7cxxYYx1a5eyFfPtdtrLfe8JvkbbFiLJTzuw82ZDfWxJzZcB5WWCbjKNGChaXhX9CNWkFThf2FpBSPwbwpmPSb",
  "key18": "2wGVYZVaKXf6KWwXkyPTMhctX13xVMxn2UEpKzeDd3Fha3FLbbPkWpw271Fe2JBrG4eDJKx8ZNVb5n8BZkrng4DB",
  "key19": "5Xec3WsDP4bCfdkPGxS36HRE9TeRomQBhXdZGq59nux1KzJgBnd1RSfsaYUtWAn32JZm3xXF4iye68v19EDuHFGN",
  "key20": "Gd1GyxK9XVixzNajvDRQ4fThTAWHUwW5ViJ7dRzJD2bvtrYy5i71zm6RsEff565jYPJeRDPB8jL4Sov7LwN3E82",
  "key21": "wH2HAL49Qg7sCrVMQdJVHN6mFjCt1ywbiTMGn3wWd6aws8ShWeTfsMxRjbEBDBoe6Pak5gqp7M1FbeVDxFpYRGq",
  "key22": "2oZRmKuo1Ldij4oEPdjgncVHJy5P9KMPb2QpiJwhD6xf1gA5JhGmrppdxDL8WUiuHakYrVpND93mAq8WdUsZhzoP",
  "key23": "4ziovWJKnZsfCthhux62AAQBpDp3o1YEvwRRPPh6U5RbCcAUANxTyn5d1KNPsiLRwAokH9vTzGzByAf52mAM62WC",
  "key24": "XwNDdV3JjW2haLnY725eHfw4GBE8pvu6qaSogyF2wuvVPCWPpFHvzo8nWF9SccLzhjSrazm5tSBc5xKrEo7Xmr4",
  "key25": "5HxN2EmQtSCKQDJ2di1S4ULuCWq2S9KKyYAf1XjkBn5NuDaDQJ5TXvqi1f8HtzmHAUNSria6R4Wz94Nj1oYEqHjB",
  "key26": "3SwnfszkfjrFCc1udzuFcWHEuHN2iChKBbMywKksQH5CAuMMQ7AUNCVn9cgCms2fN492CmaQhsBMKTNxaP3nFqsR",
  "key27": "pg5z4jyQZe3hGwCpE9Z58f4ax89GLTZH3RycRmhP2FmH7W96yR1Tue6LrVtGz8YiD6KoP1G35XGZg1JLqCULR9H",
  "key28": "5etRnqZbmiZfCdA7M4BWnHbea31utoaxS5HHybdHEcpoYCku1iQCb1ff3XqkwddJ4XHFz1Eb3cLoD4q2PGHe8nmC",
  "key29": "2x2QfXkEtfCsiKokDwfJzgTiNnKf9KqqLLLS9BPj9DvPZq5ytuf9v5S4fvT1xgMWpLTPxFkbEFTK9s1Ud23PL8kt",
  "key30": "4zc7KdsfTunHnxPKPWXfRhhwVQizW1Dk4cwMMwWYLDrnQwnD8RzWiohv4nAxiXkozreLbFFbxmpPjZ4hphRRMFTd",
  "key31": "JTctt64Yert3bhsdRGVnCmrrzDx3QnzSEnLzsopgjfebbyDm85Pdyg9FD27y6wHgg5HxVZEbJVdsbhaauBvQEoT",
  "key32": "5K9oTwompqQ2aFTRPSM8aSeydu66KCGK5xNnDX2Tx6WBGfLGFBMBCqBRwHiJo6N1ZuUqQrMMPGfauyvQrkM9RGSZ",
  "key33": "63ERp5rNajUAyCmdHf4YMfuyD85n8JWVyj2pKJABTdzy4U2DDBQWjHLV6H5aQ8bmZ1tgWgkgGkRSDj1G8deoVovL",
  "key34": "4XWQNWunu47y72tL6B1audWE2SjPBA7PVprXkhRgkf8UJz9HQXLs4bJz25TAQz3vfbkTMwJYV6qpeaubaphCriG",
  "key35": "2wAm7sAX6uFvLhPKyUksdLqHAYCYKQF1MXsHNPcDEiBZk8wMCAPZDSQApe8qVehgFbHppTRFR5teAQgjkWcCA9Zf",
  "key36": "RwqwnHoHXKTRLBuaJSeMf9VpS3ZrrFJzygKa9mte2o5gowTQED89ypbPw4Pxrcn1GMHGpYkwRFJjLsGHpznRddC",
  "key37": "PZ2bTNCgmqDP2rPdzNttaBcPxrd5RBdxAwb85JHrwgwtacEhwM3iyvxdDsnmjzCWWwyuCVDJ9m57iM5qsaBn7KT",
  "key38": "2UzwdoaPQrmnPDFrmbJRH4eVkBDEZqBHGSnAzop2S3WX5Guzt9LakvkFpXLpTFCcidHgbGidCCQ3fJJB3gVPSAQw",
  "key39": "5PGJReYXQUHq1TxNxkSSY8c81XxfvounFoAik48zWcETYrQY9EUrME9vc5s9vWtwucow3EcJNbaQVjA18J9dPomd",
  "key40": "4uJuB6iHkwV95H8EeYckezdqujUXZJJ1Zw7mhZ3LTvZ1Rvs4wbH2RFwS64KyixBHd7wS3hf3Ad4wtz9vEnkU8gPu",
  "key41": "5aEmQi2pNZjoc7wc1UeeDVp9gSYjskHUpNRmYvRZbb68M7MwQg4UcuX8HDyb2DnpWx2kPGgxfc7zgAka2MEzwBnL",
  "key42": "2so2tsuoMkxGPWEgaoxarmTfihyahT4wXrdiCkVM9TUJger8AVyresvcpNjFjdQrHXPtabfKffSpVvk6Qgds1hYt",
  "key43": "GJXAdgf4bWybo7G6aBCuLdwKVsVGU7E5GV8VVqK5fFebSiJF6XPN68Ucnnw9DqoG8wNmFq7EN8NzdR7H5YDpCDD",
  "key44": "4mWSBdupvzCi4K8G3QBsMEjX26hH1Cv5Y9SYJKBxo3YUWzLaxucLTmZsB2NzRMybd9qtEpDHWPBJsy88tAr5qDmE",
  "key45": "3jmeWhc1egEhgv1Sz8Wofbp52km4tEi1mwMGb7Ry5DqhxMjhxqmpfnUaHPJbDCu9urgZtkFtzCc3XZgUpjsqnCbp",
  "key46": "TcX3bV8LpsMz8MMfWC9TDarVSUtCJHgSoBpazXnQnWaUMzT475mj5GZCWfpRxywhFErFqAcydy1hNub3vgsA8tL",
  "key47": "4fPBUv6fz6PwMStBgYsNwxaRqdoreqqmCw3bohtYuTWE5nug3JQJg4jPtx5UU567M4CRv3oqEXvfq7DWVbJEjaMu",
  "key48": "vgQ8nZVDCUUNRMZ3XQjqLnkg7s4DGphUY2EQwnaQ481Add4GybSGXi5pgHD6xquj4EmEimo2e4Rb6PFVPDKZzsX"
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
