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
    "3kU6oWi9fjMpxTkpF5jCjwj6C8xyh9Qks8JHeTh48YpwVJrrt44R6pmdW9E7wEXMMXnjPwV6J33XVkiesdKUV1oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyxg7CbxLUgjUEeHfos2yX5JXzafme3vt8BdVhf3vH8KHVpzfrfFFyMPL2fABC8ak6t4nKUwzz1B95APnxVvLUs",
  "key1": "YdCEaGDAxXR2xXZTf2FLwFDo33Yx7ybum8qpQ9SKRXwRjoHMGvwgnJMU6onwdJCz3goLoUR1gSfEymSacvZJfQG",
  "key2": "5xwEWSvb24dSS9YsRfVaLXTvAWJeP98PwEdRr2LoHn5CKiosb8EatAHeifmSrNxdy8N11RK2d89CuaMA5X7Qk9ei",
  "key3": "3SbKb8xC1nxGH9SsJNx4imemBsJi5NLwKAb5pHUyNgcAZsSauJyrPgQczhAdGjVTBogkVc5LU4GQCEqrXCL26j3w",
  "key4": "47XWSQLBSYzq3wYy2LWwrfh64wDxqX2pV4pDnmVzSXpMcEQm3uGLw4M8raanvTJydwVybHH2yBWsAoNoYUoC5bMR",
  "key5": "64dW9iGmUoMneF6akehm5nsV3oxrpqMEZztmCa5vXXnkTN3Drk64iGsAZnFzA7tMxoS5xRvCz9qVnCXjKrLrEyTG",
  "key6": "3YZYbsnv2gXRm1VJTAKWBmoaSNbY7181VxyaW9sxcPvaLsEpF7E73cBTEMMH6F8uniHnYZQiax6NVc5rpJhvWeJN",
  "key7": "mhxZwxzZi1aLYgVduczeuctsFVtpcypKP4oUGM6nXNbVcLyWoW2gD1uVbvxTdBvD88MGuugAT2yEoS9s18CZL1E",
  "key8": "5RcErKyivTAFDwFGnnZokwGudYehkZaUUY1uP6EuJyLAeP49SuGYuiVkdvpjT9XY9wbjqy2F3CgQuikKm1Jw7UB9",
  "key9": "5N8xs9VcPSLDre3nyAzHxucArNeL6RiR6Z9pzVuVsUCE9aBujmYPrjMwkB8muvJiqVzPUQhqAEUnGDvTKHLwyH58",
  "key10": "65UJFNtEx1fLN349V2dWrqDaNismqzQihUkFoaEv7J3k6ZQsrNazeHCjCSLdBawwv3Nayr8FadJS69qX6giMraWr",
  "key11": "5vGnFDeijUCJUuQtgQMywrxd14mk26aMxpu6hQoTyn3jNULE9petqGG9RS79ByVHrx4tnY3uKHkdYSZeKY4XfNnR",
  "key12": "2y5D317835bKWLz1194bggAqcm6tHQ4ZEQtsi7CErAw24qTeE7jhaYhBzkjqXcNiRuySLKWREQv46YaSFK5swujz",
  "key13": "2kn5x4jbw61v2YPDM6A2FymgB23AsY6UUpRVR6FD7HY4kJ6LBuVyVopF5gpfQwibfSVk5Tfzg7fy1mp3A9vmj5Fk",
  "key14": "49ySyEn9m3eW9JX33nzUBVP5zoUzeAkXgAfeFPxX2wvBuopCXKPyUD72CqegKQ5p9fXiNNnZXB3cgpNBfcFiYwez",
  "key15": "4uYtgQCQ9NuXaqF6T6dbNvrGYYaKKys3QRH3EQH65TwCRSNNc6o8SmsHMFxdN2CRngAtTpj2ZS8SnRjJrvsnDc6C",
  "key16": "xPQzz8P2xGWUNBK8UcRW1Q6QThGvPHL9LHK2sT5JoXJrM6Z5h11bzsCqyuj68U9fB1vaJXW1X59oYrdm8tQBZjk",
  "key17": "4nDsFcmbSXQEkdYVv3pDaPG33oCYB4AqgFoHrvJ8HpsAEWX4wqFapkDXqdYsH8LpnG8qAx1hQfcxnU7tdLdqqh9z",
  "key18": "3oZzwEkRaqrmMtV5M4GxaewvNuTxv26kHzP7D5Zixq9NUtG6Gyes2R29MPfXY1UruzNL5QKo9ippd71Z1QowG89Z",
  "key19": "5NDMv3ewutdtVJVSeAQMLDiYweRx51u1L1sAViU7twwyaW2Sprm8HsgadDF2aiov4U64zebQczuEiDQ5HJHcCtEN",
  "key20": "3Zku5xCJXEegqEgQ8GNhwZuxDrFNzPeqbDCPR4UE42DxcBPk1RMgKe16BF9AtY3kSKu3tHEazMiVbsQuLhfPre3H",
  "key21": "HPLaXG6gLGTJKmwwTWfwoZXqobjSx9W1MRtiLSPr88QbS8sERfxZxKsDBTdxAdYj1zNasSbKVqVYmUf2jXP4HU8",
  "key22": "3sVNtArYU1SeNecyrARv8AhLM9aXNkcJSD9ns4NGctQQWkaeA42MvYSop3r83Jcsw3EiVCzhAfju1tQNYrniggjk",
  "key23": "UEcLsKounMSJMGQ6j8TdMRS2y9Bt3D3Gk4cYkLxDextQuwo15p7kEYapKoDyYfU2E72epsiGRsU3Q5513xpKAED",
  "key24": "3JbTyH2qNdw4RjFdNENuwM2WTGUCnPPYdgjo1qdkVub7XrVwFsRiNYdEoShAdVCckBUjyxZu3EF1DPiqBZDbhG1g",
  "key25": "3JgV1r57KPiW2D6AtH8A27W6wShgrXPtVniMVLaYB223h39ThKCpwsyjUUYbp6rxwCj7PxQaPE9cLm5h1ftsb356",
  "key26": "59e5KnF3pXtr3wAqMoNQQ86suPFXK6sE81pAw8XUMwbwtUdmt1nGhL7atatLpx4uzHKnxTS3Y1afRSFhwp4NAi3E",
  "key27": "Xdn9UjxT3as6nGNeeqW6xCjuk8hQLQZjeeE2ziBjh4mh1n1tpG9Ct6krZdVhcirSKTwJPz3mpLArYXWyJexXEFd",
  "key28": "4QFHwnQJ8VnMhZWG2MqDp17BNtuqiJVCTqWLRen3rgVYoX8msYJLRAg5DSe7V8QgNaKXHLLWvojorvNTVoAvtgvB",
  "key29": "5nm2tfggQikp4VNeKjP7n4uvf2umWSC2CFgmDEWF6xT4PaVV74Xa9jJHEfXSH9XQd5dHPeLigcH497MzdYc3YcpF",
  "key30": "21e3KE7mXdXP39AMfuEYpvuwnztvdm6GX1esr6iGKnRw4seAZ6FDQqLKKFrTJ7FTy7cuAAWB6ttxv96VHiJE3xim",
  "key31": "PcnD8o55VXcURidJGP8sQchuZyyXsvMi2g2KXdFVfsNuKLVr2xuE9yjisqfnnDiEwD9aQ1twgQWs4pqYwmfxi5s",
  "key32": "5ZQBGsYMwXBwK4Gvjenqby8JfQ8GV5qGvVRDSsTPkDYG8NyNCpTAmkgcXW536rvwDSASb3xyvZ17LkNtGVQqeH9x",
  "key33": "22D2GSSb7S94DaRCo8p3y1uyx8CNWiZuMAsAqZXHa3zg6xNFhtEaGZv7YCZq1eEpp7DWPGtXsbkngc6qDXsPW71e",
  "key34": "2mtmAYsioGuA1t3T4K4Rqy7goW4TxSi9uoF14yzxbcTZKpeMZz612wm7rfeodhCn6hPSjWfJsjkYFrxgQ2EGrFfN",
  "key35": "22vgtvUrH9tdRoR8zBEe8zTVwbvVAN9kpadNMD5MD2SbMuBbD3h7jS5QJ9Gc1BxP33snRz2b5rpXujWey7kpLkiF",
  "key36": "2rCEgsJPf3Kz1Z24vmFNzfjeLrwVuR2866Yu9zJ948Y1ks2YYrqPnuyobxp6H9rB6HjRJQEwZcSQ54eeP26L5E6Q",
  "key37": "3bBeDsK2EXeccJkoc95rKKwHBxTiyK9tqNHBQC4zM88ztqnrfDyjnCmS4LuMs3CSsUqHS61APiFQbbRn3jnH8aLz"
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
