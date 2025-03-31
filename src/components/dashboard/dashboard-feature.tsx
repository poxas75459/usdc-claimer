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
    "4Pa4Ke7QCdz91wZbqsgubEGNvFTsjcGF6Lft1KtNTYQp8vQjWzHtQfpCc5CaxSPmBuTJpaLvzeZ2qLcrwRAKLecD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvrawyPNU61EGvTr2ekdM2QQ5knHarVJ3SNUF8RRzaPRN5sarH53Ro6knAUMgQJRipr1Bj8dSYXgwn2vrJa1N8D",
  "key1": "44JNcsvVuVusBoUdMugbnk3QwJnwPSRYw432tnrDSU99Jn4E1tGFaKCzbW2hyZJFEPSTBhJg5FAXsokoq4YGwY1R",
  "key2": "5DrCtBP46Pxu5ZCbgf2fzFVfrE2tasXRa5HwyZXuZU29drLSuiGoCXrzEuZm16sZ5wwP1qYty7B93V4nuQmJTgtk",
  "key3": "3CyCgfAmwWWRobZtxeeSRyJ4D5GfzyknerS1X9jyGgVaFcMssfyFG3Rt3Dt2dVK35SefgMEuQv4fRh2ctEw68G6j",
  "key4": "2e2eTrvkjP5HwQvFAa9aNkQXbPFFzEvMQVgcizUnLet4jaFF6y4gz2DtZhw8PCwsjL8XcuyD6Zig4JSD6kpD7S6b",
  "key5": "54hxwNUACu6RBmRXhZGUwj56d6X8xkatryYFry1m9QGesb7iCQttDm8cp5xDob8NqSvtgzbWAvXHnaUdtUQ9MLgY",
  "key6": "4bsgWWEakxQT2queGFNvNxSbJBTG6YmBr4QcwLUBuwsBjxikGHzvp1CeoByRJ5A9KkSKdsCjnnyCHZfjT7A8agXs",
  "key7": "393r7JykSpMyRCEyjWTzGGmfjDMU6TfeKNcMZ11StdqTH9BV6npdoYKedeFYXnR3XtJCcZsakCAYKCYiKv1dVdpQ",
  "key8": "4XyfiqGDSbyjT9FmQk6LZZ9t984j5ZvAQLuNnHXLYs2YwqyXf6Hiv5hnY8CVhMEoHdqFEedBauAxVASUybs5HG1g",
  "key9": "3naic1QzjRmHTYQmThSvYp1PAoW4zcd4n6UAVRxqzeHo3cvrgD1bP8JN2rtkkN3SC1UZSMUYiWKrhKF53vmbZihF",
  "key10": "oH7TfFgFqwgbBXNDpVRA3euWQG1WPT3GKT1weRTYuNbu7HEWYdXHpgsaRnEtjduFTxjyWrPgQEHN7CPDGiyQDu1",
  "key11": "2YU5E9KS7HDjjV1ZiVoVg5318Rz2AfyuoNW78oGSqpCZEysMkhw6mdom4qKPdH9Nh2YnNuUgtY2Pf3dETLgXnmKr",
  "key12": "NEVH96J1K7SpvSARUVs5G9te5zvPVdpmu9Ci8AMQs8mYg7Z8zGDPBAgsJtDW8euBjYuYNPwvmttKmJnaFWff5Ea",
  "key13": "2M2WGuzmW5FfTAUGfSqpyMmYyoWcDwuBVS4STTbXAik1VesujLawMv73dWf1eYDotgZDPPBKX6d8u81CXPav8LhA",
  "key14": "357rd9M2cvj4tKbVXusjWnMErVkygKDBoC3MYv4256jBU7ejasqihEBFVCbqbxvpYGWY2nEhouri74gbgaA7RQgB",
  "key15": "2WRYzTaVt5jVaP8pvUDLqzhSqt23TaNBEUaHf7SwPFwRRjAqVZTjnYgFYV7vFTVKk6tjKnb4Q6ZtdQNUtJswedxQ",
  "key16": "2XRMwQnZhYGweKrDgXNBkWkam3bXVZ58z1GwGNxZmbA6rTcepNWJe9GPqdP1t4eC7vVx8942eycHUzRLQYmingUc",
  "key17": "5BJbwsz2MesafV8iLtsVt6qa1XosZP1KeRNdmTq6cTYjJH3BZDJXWMwFgB55aCMBi4No8nEAHoXLUNjjxCdDDGQL",
  "key18": "3gRVQM4258LS8bWhGDEMVSCg9jm9rToRQ4fKi55A6Q1FzLaumtfgwNDocGJAUBmunuc9pWZ3nLPvSJUQgXnuwLXb",
  "key19": "4Vmd1XkBnt9R4dgU7sxtgDpSjS3sNNS5QMvsWkZCbFdVc23BNzr3mzN3wr9xRqdp9XpRydZVqzgwFV4QiUHFrLqZ",
  "key20": "FWWgz9NqbmWbwCM3nGkxa6FYJJtn1FokVnnPptugAdKA67pYShcAvnEPb6izxfTiVEK6cnp2DoYNpwkFLgzMJuS",
  "key21": "2Di2R7KC4v4jWctzfJnn97RXPMBt5VsR5wAb7RgjWhP8857KTXkcyVGAiwoFpvPH9L9q7J48GtR6g7F7BUuVZwyr",
  "key22": "4LgZ6snCzxASWw2AUA6o8Xhza28FogzJ3pKXxBRP2bhEqN8HkuLXQjRmPYkXcnoPv2fvVfg5dVdy42u9dyt9KMcz",
  "key23": "52pHC22CFkRLXpzDxsMzqTMfXGNkwVB2YB4D4M1WNxUVtdKxaLxrh8UaZC5xmSwoX5ViwLVWWMtoxRvGSBKMSHDg",
  "key24": "2UY3y7KZAG3xhu85ZyoSc18vcY3c8QtpXVtL5tcxTPssofNqzmYK2H3pnvZQg1oqw4CVMyDxVZbMVdX6tFMpHJJq",
  "key25": "rbtaZtVkaXWjQbhbHdg7xKVLALsqpZLYAoAVBuRizLWGjhQXgZHCHoxYJek4RKRpck4Q3YNQgoD8oC1B8jczkb5",
  "key26": "3D546ffBjWZEqKa58s2KeBCdygWVVqNq2FJ6LBuf8VKMy44b5qXK6VxfJownjA9bs2Csrsrsqq9VZgDFunxtSyAk",
  "key27": "4kDy6YPvQZ3AyeJS5Qraj6p1rrqjjFVN5Zzmy2vZxLzEZHjrJcjmNPwDWyzxShy2P5NABHi1qbxGoJCj2XviquMA",
  "key28": "292hYJvjBeDTpJwR3KC6BN5AgABax2rdUjJDuArFa3TFc76fTHtPNU2VhqHtaxLKw935aLyJZkcKQp1ggGBh4r9K",
  "key29": "5LbScRUFSWnWMvPN2Q3ECpwFRMSca7VF7bGAv6Y8pY13MHByMGrtSFANKCZMLbEBbznNSCx6s91AY217JfLdBaNH",
  "key30": "2tAJ4xRBqSdu919sqoak8YDSoF14pysoTj7LCpuHHM79YSZEnMfMdLgnVR36vD6efPAUjBm1jFcNwoSroh71HaTT",
  "key31": "26XjXf4rSCzTSQoPKi6WE7XNpDK6K4MoiZAjAnrHpz4e3NXvh155rPL1qjjCc3NvwP9CFdEgVUWhSKM4MsGnyF4T",
  "key32": "3YbZyZ46teT8nicCGTPSjVS96cZW49XAZr2p7zK5ErD1PUbkGDUCMU8jjv3hgYcpN3dKq9UoNkdXWrrbUPGdW8T6",
  "key33": "3D52VBpBe1ZSXe8zXQsLcgcP6zxnNV47ek6LgNMxKW2ywoEurEvamCMKomZBzeRGQsPF5rrrCoKu7mPMjnnBzZhL",
  "key34": "2xKhHb792dpT17rvcdAtnh1NG16yCiNXgLFMo9qzzorMH5ecBPhuTZfGUxBKHdDiAazoLKWV4WVTbhvvCKHmggDv",
  "key35": "3VZXW9pu6orqXvVBEzkeQHL9NyTdCpsU228wkkcM477s85zqHjhusDzNUDqbo9rMxT5jagdyR7PAzXQCP1qxwwZx",
  "key36": "22CRLvXUP1vLsMknWo8GdGnt4AwnH4BBfnefwEDBJfq5P2pfwAFWGddPBjDVN7qfz3A5sVzjYHhWnojUPiC3p94r",
  "key37": "56xcjJEzyFtD1i54pwKQdmgm4pRHv51QmST9TyjmncALyJB1N2YhfT1iUQY9evwVLxTZDnATBStai5igLNW3Ueev",
  "key38": "2c9q3cbbc5fKBYWT3zJEuZJhozMmYLg2MbuWLARXJmsgNpuNTgEWhtbHfyRejEBeu4VDmp1khxKjs3mwmmLaFETJ",
  "key39": "5sDQ2gvEoTnvmZX9PA9PKk8yieNJuU9ZWFxhTMkK59XPhWyLYjZsiR7AHxrxm9mZVE7CK6NX6FZ2JSiA4njq5w3M",
  "key40": "2PWVpja5SYWbEcyVEWigkLFak76vWuCrDHQeBELfHXNBgKKH8vwC5J3x9wmbLfZmACGdZgv1ThvunTwwGX4usS1"
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
