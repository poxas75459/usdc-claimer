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
    "4Ts6jwgU1zEYU2LZGXUC1omwxVqNp4sFRidwY3qwpUrcymZE2P9ZaCzg2rocUaFnQLxdG4NPZpGae5SaobERrUdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H65DgFmWs8y6Vfgq3oNuPJmT473RwzvkzT3VEXk7AgvTvyh7uXjqHS698uXu8rFnXm3hVs7mK9w6LruFj1yDH66",
  "key1": "yhKMff5PZ8zH5CZL3MQPTB41KcrCQpB33oLnJss4g7i9rmzC2bymTEseKgiwn9CHgx5TyL6kdXLQUCHZ6ZsqJkg",
  "key2": "3arhhgoLE4ti6UzRzkqx5tp1PmmiT4ZABm58GiXa6nB35gFjKy1n2Qc7NoT6kWxgaF4XHwf1NHMMgajctX5Db4LD",
  "key3": "2ao5mwNQUs3wFBMY6EGrfsUU9Lr35jNJjjmkzhJpWraJhMGM3H66EybfpoqkqrTdHppfHDLJZznJQa1WNWrb6UFz",
  "key4": "5NeweKcxXDxgYQxrhcfrZqf7aatXhEiq6V4qojxdtTuUyLimLmKcc9Smc5jSXj8NFSPHRgscB5buuEW4f1YoTxDa",
  "key5": "5EdWMmMc9sF94fL6pQUqR2McvL22vcASgyRk784F5baykTS6dvesGVxyTnRqiy48A1W1z17JQGpHTjjV6hKfN5bx",
  "key6": "4TkyrZn46rpq3fBY8BrpQ79NP8tJXnD9CusGiBvxaAWGXtNvitYoSQQCnUYEGoHmubeeKMXHvBf2Uxvfsd8wFGce",
  "key7": "4kKYp3STDMjTqwZF1UYVpwx5mT5jHg17VmadAjLR67AkSVfoWV3nwjn7TmUm7uk8tpCKMC3fPJLuUtNykbxVAzAJ",
  "key8": "3Aqr8g98ZXbLCQMTsJRHi3hc5f1mGMCtuESHbt5BDL1REGYjcGQAQHhFCpywgM1voYJWmctEM4S768QEwetbkX9D",
  "key9": "2f6gvP1yq23gSwaGgdKAcGabDnEQoGBG3w2PTjHCDDrWWJYEmMb1h7VreZoSeCV4rGj5CX5DGSbsp1ASYe5MrNa",
  "key10": "5HJ9DTVJvV7Rz2bQ4LbWEjAos1SJNGN4Zv8cyHxh4DkYzUvnU8HWdtoDh39WuhmS5EqyQY4qDMFADP6NYPNv8qWa",
  "key11": "2WkE7cjBVTsTdAHs7XPGJVP8buepa5zgsxZc9LCcfas3HdzVio9wE4uko1Zrg8nhXd85dAXGBN1Log2zuJavhUQa",
  "key12": "2oWXtcXR7NW1Wvaavutx4Eicg2CgjjaNnuCaRjC5aKbfrRWNjjiX7N25xUspXD9BAbvinrYvD9JeNVAEPRCC5LfU",
  "key13": "NvS23KjTMBC7nCHkwCaAk3YeoveBR85BjaniSdxFZYF1KPNcp52nySMdghEpw2HmCLTmSHWu1zWkSedTmQAUz5N",
  "key14": "bdSTtuo2QbcvBTJsmc4nzcPtgpEY33VX6fm3xhoLBZrz2hoWHPBbg2CJrZJgyM4Cr5vgQh8x6oyabfEQvMXji7d",
  "key15": "8zhuaxCznHbgBxkqRmMNqho6bkT4CZG4nPHpYx4GTMkfmMSKgYddEhLf2uEWBVGPrxMYePW7NLQUafTo2s51wUS",
  "key16": "3RSHN5j1KrorJWopChQfbEe71kMis9sbayyLm4DBFizTZ3mujCRHxFm7MfwarCpdkTR1xpfcAFpTgTBue4RmM3EB",
  "key17": "416tBAM8Ytk3RzqfALYtp2Ce6bjaNJT4puxtEhy8DcxvxXLtqgGMJ9EmBBhR52Az2QS7xcGNQHgjApDjv5MedcTG",
  "key18": "48thzDXBVCvKXJJ2A1nffv6mYTAxjg1nKvyxBYm7nM8evb813RbSgEmJrmZFrJ5BvSLcVjxLq4SATRhgACe5UVAn",
  "key19": "34mKFsDboZe3UHz4pTFsNAk9etTnRAZRsHnDKcdpcKE5Npz74Yn8nSrSe2TN7nrgoea8Z2JbZxAkb7dcuS7i5H5q",
  "key20": "5on4trg89xhWNrDDGSdthjQFj16duG9dUNWKfTDYSWGkKv9fSpotVdW3tM4S5g9RgWnQytXY4PhSBdWYwYTum6ET",
  "key21": "5tCL6r3i6ig2p6ynKChX6WfaMVHqJXSEZrVSzedD5ht7gDJ456GU1yg4dfpUeUvwbBgGAjmfTUuhgTernjpMZF14",
  "key22": "inj19mYJDuzMzVX1uWSww44bzJ2LKAqENuQz9ZSsPRfBTbZMHTxzX41S4Cub1VKGooGo1HFkcgY871JzuofQ6PM",
  "key23": "3nfxMgff4vEtzyVLiGxYQYzwYkSDyuxS5EVPFAV5B75nbXAovynKNLJB8ViUHYhYN6LuZ3DzP1saoqdRmR8LqZ9V",
  "key24": "2c5SUuGRcysFUVz6vg986T1C9UqWrGyztcNfo4sgZMGUTYYL12msiLp727NYq9NGPZFxSippffdd5hWHfPCyRNFu",
  "key25": "4JCJqwZ8ibR1CkdyZ39jA2bDN1YKgtZX8G4hbZYkKh8qTjmmnV1S6djqRpmJw7wzhoZALsYA8N7jiQpJbsjGtiGe",
  "key26": "576WdnAbz95CBJFk2MNVdSzi1pzqUGATyEm9bvBdjkEJ1seLc4DQ6WJGRpV3pXQf4p9tyMayA8kqpCECNttL4VR4",
  "key27": "2Tq551kW6MK8WSahZxr9CwSXsNAWhZK6WYsU2bhb1iZgjF7kFMTyBfokEcMY776Tc393Kat5N5PBUTEtW6ycrWza"
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
