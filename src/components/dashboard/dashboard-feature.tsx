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
    "XenSEuzdhHDJG6cFVkSa1XbbDCxQZxcJKfnjJFYZEz2EPAWqDzLTX7KpfbnpQbgvCZBXoQ1rVe4ynzybhcZJKn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KoFys8s2YydzT8WwWdV3DQvhPnR7MDpWiXMDpbn4GcGouc46hNqkCZQUHWHmK86ppMpxzYJYtRt6WHeiNRc43gx",
  "key1": "2UYr5XSP14bPGdEotQVGEyKJm1sLGWaCLaEex68wWuPZmGaPCb2jX2hp7uK1v2uy1XTCgMzg7ki8vLnYbsVGL5f8",
  "key2": "5J8aomBZk8hUbj6aintQZadZGyyJw9VH3zbtMZDqqFtsCTJAiNE5jcCUHbDjvrRS16123Uih8CGyKtzgyr77GQ1F",
  "key3": "H5Su4Sf46kBXtfhszefTo5qpHEo6bYWDRZUrBae9LhZEVN2Atn9jPeW52QGSzKm9vybfgJ4QR8f1vpVxyPJZa17",
  "key4": "5jVsQSHKeGVdTcAFdr1ZizHEgJsUczTwTVjTPPNPPNfRfguJjZ9hkowiHWXucShdwBKknxyuKoMUuGeb3PQ3e7En",
  "key5": "2qTtmgnKJP2TZAfjkQ5KUGpoM8TQpfWM8wn1Zv6DrQy8WhhBCk56QJrgGfXGWXVkv2CJSj4bck9eoaygZQGerd61",
  "key6": "BsGzb3LDmnPKW2Z9d9VRY3UYKHTbDB82WDzxzwFpFsg5eqpjVvcV7KY76J6Z51LMLUuJfRM1tEaJvCgfD81q2nY",
  "key7": "231UkqL6fqHgq5LAD6X1DffWwkm1PykCEBFY2RmPuv7TkhTmrjpmpzCaCb5xLJ9f9f2mv8WrAyU7djZKmv3MSCY6",
  "key8": "3VFfFjYHPowe7Qs3eH4iKGpydWWCZhzUmxqQZcyP2dTVogvpCy3BftXu1ex27f6qWJCAVtFyRA39zTp8YGuVRCnq",
  "key9": "FEqtUi3dRS8gw6Fak11V4qwEq4R3ksfHd5zGtkDqfqj9sYpNDW7GzABYBrmLMi8etFGt28ruueG3Xhuh8ZikxRs",
  "key10": "5n87ALovy28sxYpTCVVZGgi2Nfh9vwiMgDbYMYf1m5mDnq1qdNTRBmi2yKZDQgi1855Zc7niGJwdHd8xGscqWyMZ",
  "key11": "3neBwLjDf1d5pW3JrrrmzX4wKriFmQS5s7zybQZqdyfvcZ1uAWjx5p81Gq6VsfudTeUKadgVLTyVifo5bNgZV1Bu",
  "key12": "WhvC8vtHJZ4znTc9EMKgcLW9nPBxznbRAsWMaXbVCsHd2xgTjvJbLus9VPmEhWuFf66NurB3t2YQ6ysAmtmdg1U",
  "key13": "3fhHDJ3rXXEW8wjpoq7H2Btq1drBxMTc4NrihoLHyaXVTMfw2toxSuibPAvSjBf1JjuGwmvnHHtQZpiwRW9NGYmc",
  "key14": "2e1MidVZKiWwSSinZeainuRdK9PrkYzYCj9J1bdqMrZaoCAWi2FbfBAt9nSHc2uPVZouK1TVMbNfdxQDr7CSEtG3",
  "key15": "2wHP2hx3sYELk37PfSMpUAbGYFY6tnW3j96tNTyPnNW6o1Eo1A4S1zPxsiw4nTKhsFApqGB4aSQDM7K3UdRuryJR",
  "key16": "2Ar5jcPHnhFkFuZj1ifbEZHo6q28aMV9k1Y3gGxr22YcoRQX8xn7KQiriQRZTvFQVgsBF6HqjTVWX4GVi82psXnT",
  "key17": "41bvQXdzSQWGcqpsKsikrJUBoL2LsW4kTLvwsQoxyWRbGnYKSFgd1XJD4uRcR2nh59goRPJgtxAEJN8fH1wsX9JY",
  "key18": "2XDJGXEcAAzvNkrsBtPQhxHxHJknsrvp9GuM3g7KBd7obGYW6h8cxd9nr1AtD4egCTj3KhUV7REWuC2apK2yYV83",
  "key19": "5SMJzrbLJJJVRCk8k92A9QdKQbdaMoLxG55RjSGDs9XzQj1X4TFDUDJFyLRY3zUYiP3kEzQeL56rGSACgCuamsSL",
  "key20": "2VpaBz286UQJkac2uLiS4sZc3fpdYqYZCSdR7jRwCgB9VVTprkK57c2c7Gcgjp5ZoMoSeJZ9oamnSaiVgBRTHZN9",
  "key21": "4zsoRZaxDPv4HuWz6Ws6cCSqGHF5q9U2DjWuEgm6PzGXLhxPTy29dj63gqAo5FQppSUDTcjo29TrhR79nLF4xmn2",
  "key22": "2trU7FKGDy1K2ggCxZTdo6pLSxJF1kzXjoSFRn9TzFgcof3hipUaHpdmUN1XoddZw7YKQ1fWeX6uxGKRrKpMSwxS",
  "key23": "3uh2t4jtZXzof9dNrn2e4DSayj924wxty7W54avNQF763627i7pqDWhJuBw9sJA6YPCvcp1xsrXMJeax44cE4t1y",
  "key24": "5v1rocR5zkRDfzvkXfdizsw5FPewk6BfjH3znBQM7oDUoRGk9pajLpmeQsxVFJqhMy43VyjCpsX6Hj5Y5XVRSdTC",
  "key25": "2TMFe8pJiTEGXCQtdoDZBGDMZhoTsdJUy9JbiJsGxjS6djVzHuoSge8WF1gLeP8SSHARgaXwJ7KrkKCdBJ7Wgxq5",
  "key26": "4o433Hzm2oUev2AzfLTRm6RLX7RDkxvmCU4ZT1wGbLY4GqRRoy5AUVnQD6ocPXDHcdvcoh75KHanLNEcs1eobRz1",
  "key27": "4j9oiWweZMqGy3snEybcNDFpxmcLQGEMEtbeNBVpLw5rpxFXUDfrCLeMQBHFPb9KWsDB84UGJY2V7thM8pRh8aGe",
  "key28": "2BvDq7ZQeUKhhUsi8mxpsWt6wMrL93SXZNcKAgiRzU8vkcVJXQAjeMvFZ7DK6JMMGaaL1LFAFfKsad9F2zGw479V",
  "key29": "2zRh3daSwiJAmGX74v5qwNgpvQ3XjhEHrLkY8qwMnNeTVzBrvf5ihnQX2VTYmk3d8jozZn8pP62M1p9QtP6qjRx1",
  "key30": "2QdErrnWmxfkMnAmcXFxYetc7tzdPNZcbXKpm3FDHAvnNqSoFJ3iNSBmqNL6y5htwdZTSD4WgAJn3Nw1njx5NokG",
  "key31": "ApPnttdZ9qyw33LBykHzKsYWgPLTd1479cU9sV7A9b6rt3cdgHmWyVg8FvZa952vgX6HiaoWMK3PvhGy8jjGPFm",
  "key32": "QNCNgzGbRu3rwAWYbQwtTPL6eT9fLCQBku5XbPm7RUVvv5TdR4mm1cZWzLyLkB9kgDvzszhRQfLdzXbYrq2TjmM",
  "key33": "modYnA3euVgaKki9dDeTA67Rb9Bs1UecpDngYUkHQukj5VeHfbcgrzd8EkhyV9cVWv48ECmeVaiebQovSp9TX3s",
  "key34": "WXzLKraNNg3qww1KiBzLqm42y99Q4vvJ8J8wE2pdB7FFw9QUSGdnymUJwoSft9oLyEwhq6zKeLtVohHa4U96DgM",
  "key35": "328EWdRsSE18NPWnW8WEc1GB6JZQq79rVPT3R9G3WMjfgBLxqHaArFUmcoowtxwdHJhBzsvG5t2bU12FNb2pDKMb",
  "key36": "4UabzLtuzrfUBH6gbWZiUcoRdRLnyGJ9DWiFZbXDzMrmY4ZunxbsPbGkzBKTMF3QQaokCrqtazUDbDxEuCo6BpTH"
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
