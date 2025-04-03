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
    "4rAk1v9faKvwWeQrLEY8FZUbzuSt8CwhAQJk9MVJBwmvkxSRo7jA6hLefyCs9kEbjgHKekNHHfinJyA2enzG3uGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbz4nG16r8VL6BtrUow8nn6dqNmYPFnXbKNorCpj1bZeYeBEsBBiXRpGUfGt4k77Vpy4nTUsZcMkdos1C8Bnvwp",
  "key1": "2Viq1Ko7AKyyoqanp5P82Eby2ydQZEYbGhTD2rbLt4BwHruZn9KuJZPuPkJqN8xZFTjndsAXR5nPtfE3uvXkC64",
  "key2": "5AuWg1qAso21yX6cUoFe1X4s4zE9M9btYSKQeBN4tNzh76oM35PFjVUZhm2p6vGQQrGqiSvvAhN7gNKXXXHRutwf",
  "key3": "3g38bLtDG9pueXcYrrEcmcG4kZvZgLPxYSp6hT6BYDaeqXugYifVkHTzbJ798oPNU5mjhyJXBQ8Pu2dqPc4v9q9R",
  "key4": "HkBYjdi6SYR4Wbd5tHuv4xQkKkXScbdtzvLQceSRPorr6DDCbHPP86NC5vErXAZ8f3W6RsvasB53966VQSmSdJW",
  "key5": "4dfnyYokdq1qx7doLkeY5c6VnioVSckkypnSGuREgQbiuNFKWdp2sPNVhfk2AGRTbTjYXu4NiJi8jJCkw33fgiDS",
  "key6": "5MxZfqrfKuVUXcbeq75PNvyKp5UprLUXmF66hVAy2QCJsUqZWXY8GEBQvfX1HZmC7xRKpiJADetwx7vzxXuwfaJ2",
  "key7": "2K6geB1wPnFRyxsH6MoYZzqSQs9SojYrbiAU7oRaycCDfCeZfMoueTPEFx4Qgug5FqGNhN5vwJpifnUNYtGqGNZN",
  "key8": "2g7uswBFXrUNzVECQXfGV9FopLabGtSPNk2HTkefGuYt4z1hLeFPeQKve8Sbdm5qCB3jq9Gad6B7Ak7Mi84x1rWf",
  "key9": "4ja9nMimYxhX6ec9S2VrjydCRScQ7fRXU1dSLmfGSBYFBvqAVkSg9yBkYihpBhQkF5m4U4uyTobdgySKtED5nXpB",
  "key10": "4qFgeiYE57B8i72iEhQxSKuPLUoZMu2MpEw93Vqd435SVntKMenmxHfpWsoHpTDvGR5sxsqUPhGgagHbUeB9cLk7",
  "key11": "498bqiViJ2zJr4tTFgNQ7aujZFWXe1Dzy45J5HjXajriD4S5aJux8Hkqop2ynGr9hnea2LygEGHemB3PgHxmT8qS",
  "key12": "nN9LfuSGgmtb3nYcLC3opZucLsp3BctTmMAmDd5cG7DCx11nDcP4gD6wG47yQ9djWLnmcKMQ6yxdovtSwuyfyEM",
  "key13": "4aUCxoSRybPQ77YfAAMkdVP6x1DPvWUipG35ub2HjHPmUTPNvHvq12zaPt9DdPfPetQqUQEQhjA99zwcukqTjdcG",
  "key14": "XkbqrMJP3WqaXnj7jJzaPxeTrjW9nsAHdcnqrgqNdZzrpWVkZ4KmdMttZHw2yrXqHhXaQmhZLHkkAafPYpj9JY6",
  "key15": "2xDKfsaRMaTDV6B15mtYRsezYn7w7XVd4grbkiJE9m9L6P8XimreSUPBkUQUfeHHNkMkj9Qj9Sxgw5kWgjek1H5h",
  "key16": "3P2YFUyvEGwSxHfpN4oJP4yxhhC4h8849sxoidMtY5yu2955y1DkbeYKxixadqPjCuuCeD53BW9WWDySazbhhLtg",
  "key17": "2mhmvsbmgZGCo9f8oWyT9TN8hXybG5o8vW2Lk88A6LwEa7BYUWQui7G27EbbnrCrhgBowFnzbnMPfbbz1PZK53oD",
  "key18": "4F5fbi7GEuv79t5pqXWPA15wjqM4xad2U5i6sHy1QiUnfv23fznAoqteCJKgqVk9Gye6c1g18Gqn5WLcHZBqjCDu",
  "key19": "2f9HTkBXKNNUPQcKxqxWPCDz8cFgyKYWyPUNriRT82Ymryh2PWcaYPDUXsZo5Dz15gkU9vCzvx2vkcaNE5cUxdoQ",
  "key20": "3jUKWsq2tkv3R5wAABrEixvaQZa1mqBfatdgeHp8forkeAXn9To26abfACDPhpbUjmFDV38Tji1Qtsn6j2vWSm6A",
  "key21": "2FfxJSttcbxfzKJXegvb9245CCVCuSjNnDnrVnqCx2MCph1mvgRpmPjC2vE1etbKhKPvcGW1UrV3qehUHRhFMPwu",
  "key22": "2EzKVfLedMZYsjApjqrrfRhLhz5S8ZjNLXdM663pj8URgLeLNv4pHwz3c2FSFQoqSws9euKdi86MmrckVppPSSN6",
  "key23": "53zQ9pPQNUjCPVKvPqu9Gcr9G6zXcabwojRbE1mM6ZRGXTxcwy57uf2djMFXQbaehTZh1r1SRhbWQriP7ZVhX1h8",
  "key24": "Z9sKyC11dCxP1QhYuFKyeRmtxTCAAWhMWogxeMAEJ3rcoyCEpvLZwmeb5jAp3WyjzqSbaWD6nKomrTauANRspgH",
  "key25": "4fcARv2wvWKhCfddYXWEw6MftvQNospt6Uwp3Z6c7wESTXDg7AiBQoXqzdaGgs5EX4jLnfBXzYRN768CZcskuEAy",
  "key26": "4EQEmyEDmTHjiQLXsKVRPK3EXdch6Tr8hCsjSBZa6rA78cF8DwB1oKkLB3WMXA5viECsotc8bhxGVhdD9sgGnmVx",
  "key27": "5mBYZx8PZbVeaAMkRxv5M5nrvSuz5vFUm64ozgqCAZsSYuG11MsQgqWVbcQh8EwmyBTjb4zdsPm4u1VeozQsbd7A",
  "key28": "B1ivChFR6FtnUm7U9bzQov99gzxoaHBMYhpFcEyoY1dHEEWqjVPw1FYEdKWq4MkodVTtJrAFJ2knsZV7KewnPQA",
  "key29": "22yq4UEgHt2NVagbKEHmPW8mZ2FeWWUAdM1G2yHx72g8YRHaqRVbFznge4Kz9Q51yFyMvQfcZsZUCkt2s57N7sQK",
  "key30": "57VhJcJQ2mQpHrVt6XvG6zPAbVzbmSPsmFmeZuk6NpQLcCoqE1CFx1TA7446Fh6recFKYGmX9SfnGBEXLcE1yYba",
  "key31": "3XETV5vmwibSgYjbc1UFgpJxj6p7YSUdqcF2V7zfjwkSNjo4mUibrX2KD8M2v4gxB2Jd7s7vGdq6PQ1aGbVwbC9k",
  "key32": "CkUECCyA89hPPhM6bKVsStBMdGGDk4RehvEjZdzE6Mz7UmKSmP2RqMrZKEYNQqwDqwEhaRjyXShquVpfRAAXGWx",
  "key33": "5WHhPz8E5FpMRAcSNsYXbRLJHsNqSqkrnBzM6jHmU7xoWNKsuLiA5VZirGFuMCs5R3VTb1DFxbZbqTpqvEaaCUE4",
  "key34": "3DxQWkFMXpBASpyMybXvCDhVpXgPcnV4BRK64C2n2g5tYZfRmpKsm9ke85z5uTiJPPHU1gAXQfxPzYso3Gsn8N8s",
  "key35": "qmC2tYefVn6XUpkGgMgH93swZvKC75zkg7Ee6EmPVLLimwh9Q6YffTEMV53x5bcVKnhacUZMM1tTbgmj6fUhrck",
  "key36": "efMdbu1p1dG1hUXzMr5URxYRgiy2vGnqUP2ZXfnk7ytBp6uxmK23WVvU2ZPmNWohzUrd3NwPs34ZWeW2GU2zXYf",
  "key37": "YWRAbve9XVUWgHKZdXDYmGNZ4aq5paejJrvFP69XPFcWzCWzcX4QZrvMCQ1VLmnKDVtAnirHybu7yugD9LaNP9t",
  "key38": "2ehEPooYiWRVsJKhWEkWcxay3WL8FStV58ojLy1UzsxG443mQJMe5H3WAp6QzkMwU6WXAhucyXWFjPEXz4mMApG9",
  "key39": "3wZXesJQbNGqoqbY6WPo7LW946A9E8d93Uw6mr4o7APvr6fFLxKsQfra9y4s3MZDHZ1DSBtUMcWczrSaMJB3kPp2",
  "key40": "4mf5RpbNc4JNGai5UJ3PaCi22Fce4FgVVLac46ipL7EWoSmhNWQjeSnikauaSQ9t5C1A3gnM9Ex1NRaDKMbpj28v",
  "key41": "27ubDbGKmh9qqodWG48E1ND7vPVtViof63msP2qyqZmxdifCDEysvTiET53sPGPpm1oayrpHL6tLebkUGzE8r1bB",
  "key42": "4RGT5oSMqagJoHbvhivukhQpmNFa1FF4G3RkEjRsAwms8PWjUNQcLdveFeEJvXSrjYx6ayXUNENG8pkNQcXPw1uG",
  "key43": "24YQjw7dQJNbnyopb5uoowRTjQB4qHUvJRaTukNagPYvwBeQjb2JzWUfQobWu1GSfHsKRmjAszyz951sLF17jZbg",
  "key44": "2afF75zNFB5tgdndidh2dRTSyUkUwUffiGSA4PLwW7Ak1oojt17iSrKoXFZyG5KxTYyHCBTLmyA6PkKTPECC11eN"
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
