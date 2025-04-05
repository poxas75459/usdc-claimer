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
    "64kQGmhaexG9V6wDUub9KKjRFRSWcdgQkrzyof2MV5xJS6dub7tMzz8maesaLdMe2MN3jh4rZQ8hpsH2rr4AtvEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdXSVRsux5he9XrsTbxP28hoPkdvjB5gD3xy6dAib2ZgvCpw6sDigrXde8MvL5CW8KBYooVpoSKwNjjANRXBE57",
  "key1": "C4KX2bFXsBNNFXHLnkCDjzb5QPmEmVT9mxuJ7feQ6EmJ3ErtifZvhPuMEP1LWDrN5KY3qP7ZbcavCjVWTsg4xPC",
  "key2": "J6uhE8t7sLsfENpyaUyvrgx7KqpHJuaNoxVpW4Q5Nbf8j21dcT4UZXZFQS2xXnrosAJQFUtjTC8MfbQcxyJtj2A",
  "key3": "3Yg4R8oGJ9b7aX5UC89FSJ7gj1CNBWRo9LJnsbz5Efh99s9XHfrfAy6LSjiDLsa9y2StEgnJBZqHDntfMjM1eDXv",
  "key4": "2bd3QVJYJ9D29dh4URN8iUApD195b5gM9MUTvpeMaeqMACgBxW2jxtgtDUCc3UQRsN84Ye6ieovwEUABwQZut2pt",
  "key5": "4JEWEefPHjauDAn1P9P1KSqrkPXCSwSSaUtQuKQwts5UGVBuAWp67MFe6oNPM4a7eXDcpPWug9DB8nPWHpE7dN6x",
  "key6": "iHnye36Vkb9XM4g8szaBHxMyz5pkZ7Y5SbaoAWtpYQqsSVvZncxwJGxuag3ojvnqkfu5Zw3wUoreQ5EE95HQazf",
  "key7": "5eNxQwzEgbKWVA6WChKME3vubsbqvxDS6ZgeZjXzTsxcHVAdG5NdqnRLJ1TVwDMbwbpxDaae6vqSLBVHGLeHAjtK",
  "key8": "4x9yKLskMVkaLX6F4GUxgF6xxPqYZxDzngDeRvgrvZraoAHsJrZkJbkG1sAJGTYnKnT6MdL3QQppobhm4nh5hJ3z",
  "key9": "j7JQ7Sey7jzaMRh33xDSRcmo8GWDJyPNgZKrdaewBfy45AQ88iYmuGbCvUbRP8B6KBtDfRuoN4d6xQzN2RdwpAm",
  "key10": "2xbNyNRGgnAaXmbk6ZfMtsA6moPNUnu8VZGSBFrDeygw3ojkVUfy2LebK5tRpaxML3EKY2owAMEa7bEHv82pHNVE",
  "key11": "Mox2KWThx34Vuco8eEQLWaQ76BxRVEw28etbFGgAxQ6Ada4MCxSvYYFY1FSsTdRdPL8ZzCMgcWjQM9AMEHRXrFD",
  "key12": "C75PJQbEEw7qZ5TDy5f27n1W1ACS1v482VJpmADCJBvn1xbN3ynaewQBCpLgksLEeyxC1UMBwRx8VKRzpQfQXf3",
  "key13": "4fAiuMEYvcGiMSZje9WXqdAsVo5wTRf2m539AedDCEFrBBV5b3nzB4SVwSoLgMz76gnFa8zEBxqcNgwDwdDfoyq7",
  "key14": "LBprZP8yiNwpSnFazkbhMPxj3CKFc9oEFaTe1Xi8z7JYEusjke2o7F8Vg8UayAg8gZPdoLmFqNEAUP6yJYgWbHk",
  "key15": "3H4j7qJY4RkRbVdweoxu4kXdETfiZGkjApytj7rzGikSUF4bKPkTT4UCX1ojafPDtSN66FHrXFNrfT5FuJ9eRjpw",
  "key16": "4QXMRmQ7qnckXp6u2AVRLbWJVGWp5TZvMbsmoa5AkY6xCjh7Lny3SWwREZ1tryc4HR9StvacZENjH88HhxDUt5Me",
  "key17": "PKCLZbrBEctDTJRD7nyqHqQxzB251SXn2imv12iUNw947Ry5M7ptM6UK5wPAyhKXFhAAEtCrTgTS1zq2pLL7rt1",
  "key18": "2QSWmkfAvXLfxTCwLMw23okNP2RzZpG21ao9Zft4W9Xmw3ZCSXqSGkj1jDCBpGwNasiMYCUDKad2o3SBh1fYCJBt",
  "key19": "4YE1LnNKwecRbTNMMMvuwzh2bMYk3p9LV8hYhdGF3UAr4Bnuyu28jH2wd9JKHDnG1X7uSyVLW53y2qRp3QGVSDDp",
  "key20": "4cZ68FGqjQcLQnNh4wHdnWVfNsJqPV4Lo45R9pKoW482XiqbCgcfQoB7G44FCjFHaxrr4anpWKChUHqevRbMuHjv",
  "key21": "3hj5UMyBbJgzebRHRdRY5Jn7k8fRcbhYWfAUUuEuarMcyuKZT4eJ8HnpwB7gssjHznxxoLKDN2cZTxAxdfibYxPR",
  "key22": "3aLtGPQRj44vcCQCkbetb9ZKwPstz1uBJekBAzDgRu6eGtCFp66ocDcByUL4sPC1daXbudiRhWrjggSbJDiA7q41",
  "key23": "51QjHwXE43bs1PoKC3GtxeFp7DPkPgnEyvx5ZWh1WwacLKsf1K4zyCBgJSZsc1TxF1sU2Re1fugxmXNGPyCyJhWn",
  "key24": "3PwwJ5m5aGAe8ExdrBofCxc86ypKYnF32ms3zmgiU5ZuRVxRBLnVVNkNGFJpw111BCFWeJAJDUHL9wpW3jQYKPJj",
  "key25": "5cYo1cCCzjmQsA1g8twmThD7LSaU2HBHMjNtJpPRJfaF94ExRuHBQ47jWmaJxXEcDgyCR7kcuPrNdTiGatDkqgru",
  "key26": "a6CoEnN61v6oJTRCwMEcxPhCZwxxPh9hK2yvW34JFN5vLiPZbCgaGY1z2VSKWvp5yQvYPVpok5mtX6TDhB1Hnni",
  "key27": "23osdcjJkdt5xxDGqZUsvQSfDF4VuECM5x4nofbrc8WPkdPBDGpAZGp9ETndo136qL1x5D7Zidxi8qtgZ4BLJWnh",
  "key28": "4jfY3APdM5BJTCo74qzEu89PTsHQryCJXD75cUVxbEqa8Y67vCkCLNiUkmqPhtTHnz6yHp9ttb5ECVCUtPEWe22n",
  "key29": "3Aq3jovuEis2a6s89uxXyP81ezZEu3LzCCMaweVeMpBvfnLcfh5GXPT2fcjQNftAnL5zL3Lh4nHmpaR2LtiAhyX1",
  "key30": "5gNa4sWmtWRNGzEgGEoKM7eVJYh85L9VDM1f5hu985pLcqVznSGFnawA7YaQsy27vra6Xto4a1ZWPjnmSFYhAuhc",
  "key31": "2UmBCi95eAoH4i9gozSdMeNc23mSdykKFqKPzRKeC11KdniJiCdYNabzavVRufXiXUeQDwE6qwnP7x22sh3U6N3i",
  "key32": "31gU6z1ADTHQ8EDLUFJ4CzQ4iVJFLjMJHEqL5xqYD7hoFSMg83JATpqXcKdwa9wuTaGuAtE6vfj8KY5MpLJvcDnj",
  "key33": "49hve1Rhy6iZG2ySscSMch3YNrC7icVmVTZfECofMfWCFCrgLz7wVwNWXHtWcu8C1STEHhv9bhDdc2AYcTyB1W89",
  "key34": "4sueRpH4t5PyT5dAMmmKNcgqbYLeQuYzRWKo6LpcR9Gzzesvqnr4THSUXxaVQ7A1kninW47B348GqdAgXN6NVpEJ",
  "key35": "2oyhXsBytWmdTvmW2GdC58taWCaKhkFbEeT6q2Pk4NEJjhUzXejBdELdXcsjAPEmnSZeQtjP55244o5WhQj3AvJt",
  "key36": "5wjkc2daPRoWPJAaZaRiuHnJkfUWQ8D89ovVeSpQjrJYiYNfmKx5xJRw3cs5z2pPTFG6n18p8SZaorsKAvh3u9KT",
  "key37": "5aEjHHAxMQBaP6wBkYWoq5CVPdvDdktkUAWfNuo7rmyxx2tMzL94m3C6eLTVDhXfZyUh4HAVwQnHTVbifXGbSp9S",
  "key38": "Nnj7d4p4PGAjmnWnbRZVChHseLAeG8U5Ndb7cj73Uzfg1kRr33PquS31k2qYUCaF54YxWsQGkQEeJecya1jpdE9",
  "key39": "33PgEWpzkBk49z3BVDy4QmbbC32vN7x1dGrFFRLUr3sVwBMFSbi26kYpSVKioXznDgrmVxA8ku5WMUhVcuVWcTGj",
  "key40": "4xGCZwzerAzRWAVyoTHuNHNHPGfFV1gFapP85mVio3L3jK9YtRYJtNHVLjNgwJcv4bTEBiaLhw69XRzkFMWdiHj2"
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
