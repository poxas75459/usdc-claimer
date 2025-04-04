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
    "4WTv5u7KbBLkvJiqZGQDpEALoN9gHbuhsbx7kUfonHjDJHrK7ZGwiCvrEs6AEwCSZkRnxwrLMk3p4wwMSmgUgymc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F675CbUmXmK5ud9CtGF7C5jBZczkgAszC7Dqe7oZNJdfSLa2pmic8qyQhLUgz84NeptVDhSRcYBCxLaUX5o2wbR",
  "key1": "adXYhVWhcJvyiM3wxvgPmNwco3aB6qcvV4r1v45EkUa4e2jzYYZp2dFxXRKjDZJV9ZBcB7xHgTr4sbYnGiq13bt",
  "key2": "4ZnYbHrZjugNS623e8RGdvhiYDWPsU7pLtusSZy2pFCfhsAiNPgmJ4gPiSCpuqVMvr1nUNJ8HymEg6j8zhEA9dVk",
  "key3": "9nztGe7M5r5uf8SmLh2M25XeN2ZM9rm3vNsnKVQ7vQWz9VHi6sHAwSAyo4bU41tjo1LjkaETpmaztsxavduXGx5",
  "key4": "zCjtAVjenuX3xXm52b9rYThFTBzEdudyh8MnLT5ZAnrRjQsDnJ5taXikHXmTaubm3uHwnqCuksjXiWa8JP6Qcic",
  "key5": "3Ekc16Ho8j6Fv5Q7X2oEAAwq5XwUxiJLKTLJfnCrzi7vgFcXxts8yij2cWYeYY6T2ES2Z9XZuBQq2BtZdpSsrG2c",
  "key6": "57uzBE1tycgtGGnJZFo59TmFNEX9HdqJQnc8sozDTo12TGAtAPbKkNNVh1Nzyu598WWmGejnNajsMftFXoNpTqH",
  "key7": "67TQMaxxqJxUus7TuKjjmaW3zSB936HA6oMpUnwVuubMkyYwXy4BKpZjadXpkJV6gqW5qHvqkk1rVKcgfWgX5Gyc",
  "key8": "2yn4JvRGhAEbYtcojmSbTaeqeajjd7JTDd1uJ3rfxp1QLBz2NaiNKGrus1pqxPJ3KMRmj1UzB2ecz1MDCKoCFSDw",
  "key9": "4xtBywzMkj79mMshM2bV6B918G6riBNjiUR32U7vJYgb6wXcEExJXNSnLTe8PUYGwwXCizoGpDwe3w2HcmWukTa7",
  "key10": "2CdH2byaZs8oBsscXwLmwqrxvfQLE9LydRsNMUccKFtxXfS2sd5hBqPNpqhY9NmKJZuYrUPZRJA7ysreSqxG1kHW",
  "key11": "PfYK3mgSA4yDRbx9oGW7UYbT89rhsQMywUPwPDnVK6ebuqDR5xPyt3QCbxA9Pi5ov87fMfTGYC5qneQPAjcJbDY",
  "key12": "4vZFV4GMZhhENj2YLVZSJZNvgHDLBAd5dd6B9Y9kEWm8UDpwHvQs6N9RBXC3m5QcKnPL835HekLcBVDDknYZZHxs",
  "key13": "4AcsbDCt5fycL2y5odYvyt5mRZDof84dRd2uP2GjosXKmHPYzfVZR7vwj7B43JHjxqhi1kh66VqM3fpgzpdZKaQE",
  "key14": "45BCeBmLm1S7uAK5wBJoTLonu1yTaqxaoQHZ3vMNwTEWmqWH9ovDbrDN8KvqC55tJVig9YaN8Epq9f5tcJaCp2v4",
  "key15": "2L5xP7UkYjbzoUJSkuPTv2erhtHFM8CX7S9CQkPHoSPF9WkfVqqamBoSZzVebu8KvuxFGHwD2B5d1uBJXFVFaTZ7",
  "key16": "2fZoeqHKh3ZAdvnb3cSP9aGFQbjzvYkiT8CPS1MywxsNQwKYtk7E1Ju36c92447EWsmsSjiLJvKmDj8s7hK5KbK7",
  "key17": "XFmCYzW3byGYwnw1JiJEfDDZRmnXCvidi87VbEsq5SQoYYCaSJ8jDPNsWjCv9LPD18BGp96jQu6juEQ8BMcwwM4",
  "key18": "32Ce1pxK9cPZwg1hPmvUvciHKpMrNATy8CDZFoA3UnbNtZJwrvE6fNBKEwkXwCEPWVnfSBhgNkbBfjHKRP1DAMK",
  "key19": "5JTjS7dPeNKR8rMBDKkby9cfxWAaoRaX7MuxUn27nxkdtf2qqHNCuZSGyAsiiVwvDVyvq5eyKVex4HvvtiikFZFU",
  "key20": "2GVphAcDMXzHRwbprKKir1wys7kyCugDzSqVwSpERPYPKbamN7ce7ZyaVFrtVmrtgnS9ioErFRxGUn2tEy4VdStL",
  "key21": "Wc8QjMca4hpmgiojff126j4cpwmiksL9fJA324TheCVaiJ2WGh62a867fF5cNcBykfTEacbhXruM3fL74F365yL",
  "key22": "46dznx972B1nqWPH1yZo3x7DEhxbL1iEqCKdmeCmwshfPHh9W4hUK7HznqLHKBp2onzzaQ673Tzus1YsDLN3EjSJ",
  "key23": "5wfojZxiQPcG3iDTbC8egzwLeoPURsZ41ahhmG5fvtQtQUbcVzWjvAbRERMMEHrwyp95CSBfXeUWuY7mRap7dv7G",
  "key24": "3Zj1srtPNfihTf6Ma67hJSCWtQrJKyrsVihm4rYnYFxuJi1cAybL64wZyLxJ4bCTQTUbAjsV1NL7Y26bw9Bm5VpJ",
  "key25": "LPGmoekD95vBMdPJVL9sxX3WpKwxsjc6gThgC75SwLBLXAtxbHMG3oUr7Ea4FWcwR4XicuRqf6eP2HVgvQbbsoV",
  "key26": "3goJJBQCBGKVJzaMXwPthLApseZk41y5X3LJboMrEz2wBTViTMUaenUQx8f2A1cH7jmLhdfHr3rUsj9ERUVjYvdv",
  "key27": "4HbA5XkL4wJDLSuAZTusmkAt48aU4VdXeKDoJ4NNPaMpxVGxgMaJKVsTSAw8ovoApmFhn7V444QKMHKj6B4DhZ7u",
  "key28": "2GtFzEwLjsAqPKoD6w6S618vZ4yx7qjjWJNYqbE8kcn3oAaMeA3C8k14VUKpDpku6iRUNJAsvSbmhdyCivbHcaED",
  "key29": "3zkGHaxscWmAdm2S3AoLYjf7E6z6EUNAY6ze9qSEtWriGH3HvQnNVJsZf6faZSH6SjT8UisN41empasD1mxtr6Ae",
  "key30": "2HEcxnhziJg9dZUoY2Rw8GYpGLM2H3t73a5z16wm5My1mKJhPoYgbVXG1G3ue4ac3ZF1RJXH5yS82SgtPFqoyHZ8",
  "key31": "5GL9zUmYBnJSAhqoyrnGN1jtsSKw8vLNP6HxDkvgdZU6xeRtJy42gWCxFFaHHab2PkrRyD72CY4WRa1D7tiUwwjA",
  "key32": "4UjB4HuvtgfpL3yWD2xYWxdzdXhJT4U5engxu1YywGmiNKZVGEaS8cVUo6PzaLkwndA38CEAJ9y9KF88nUFeKqxG",
  "key33": "4yjwmCa7bxNuY5oLphcdbA6rJivfAJB4LrLzU3EWwhwjTqJZsn5aUDdErJQn4AwjzHor3eoYV3GTu6TVq3EMf3j6",
  "key34": "3zopLnenNz1n5X8qiZqXREHbNCAvVemD6VHqdpVLJmVvdAYKKBzvKCTTYQP1n56SGHJuQZK2Cu3vq1s9FwQZb4Uv",
  "key35": "5utDukTSk7xuVBgXy1rK1EzPo8gjKoZVwmgeEiJRvTThkNqx1Aa8Kghs9fT4C5ABimuxJGLJiepFgTUAbkVQiMSw",
  "key36": "3pAjY9CpKNVCeuA9y45RmaD5eCxjGmCFWRoJEa1r5gpyAWWNbe76b95JEhABw4SidB2gpxMzzrnL453hWmxsz3mP",
  "key37": "2kTiYkcwv7FdU8cWfzwCeh7uvHz8VKUsaCmbfud5xGgsV6qZvzuJt7CuLjgyz55dzZAfAXyjsQrNU5hTajjo6goG",
  "key38": "2CmaZaR2LuQKs5E6buQQpeBtTxMG81pJid3dDechhcEsfNtgSYMW1EpT5HrVM5ZrMMnYg2kGJt5cdKK2riJzepEB",
  "key39": "5ciNS2B2R76zNoKRWa7LZYQp1uByMJd8qk6U4RuHbBtFRaoMsyJhzb6gR4LS2CYGxUQyEmzkEaPBh5K5VuU5t5L4",
  "key40": "5L5SUSftzgowDXNWJFwPJS4Ggi2hH75Dq7CemNKhQx5Aahq3oy9ncTVKSqx9MzD5vkB6osFWMbue3Q7nJ4Hf2PkX",
  "key41": "4QYinmpUx1BhfPWsp55UtmygFmaKpbAbuG3eftnqqmQS5qHefq6ZME1bcuM12tcmztD3sHSFtT3hyZpytwmG45jD",
  "key42": "bkuxGPkMnjHCVdYXcbUsohKUTj3P9Su1pkJWPEeEpkEu5NrsrUuGevvsPMTujbCgnzDcnUMZABMoL26DwMD72uY",
  "key43": "hdjWDsPaGmcnRgdM9uWFBJtmTKWY4DfvkztxWjTycCgNPV3ZHPD3XfV7gWqWyXkN85FxGDyX2kRwUHsPpWSh4xU",
  "key44": "2KU2LiMZHaT61e19dbyepTy6gSzfj7xk42m4UY9mMx9SA4P3dR4RpcdqcFN4rL7Nke6bK1pNNR8ybPgC5cVf4Krv",
  "key45": "2AAGPY1tDZM4VPtVJQ12AaRFnGEDKBnVWcwMwkJ91KywrXtuSwbhoirCaH2Q9bJkpknpoARb6obWddXJyj996CuV"
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
