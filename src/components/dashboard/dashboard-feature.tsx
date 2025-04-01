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
    "3SuF917BQyuRVwitUTo5b7hGp99sd4aPmmty8TeA3mwKFNsnfSQhGevdrkSwcHHvejt8EAPAYvdiPadZeDxfi6dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tx4F78TuYHn33CmmsJkXzT2HyDMvLko7vVPQzHvozcC38WPJyVLTv2rhDettToXgkzKyZ6kftMsLZitwAJiVDjx",
  "key1": "3nJnHhpVMjmC7UbVJBgVPCMzMF2X9HZhuk1CznmhVchaANJZgsfaDu4ShEkP4SBr55FdfFzci7rnWrqmbgpz3b4u",
  "key2": "5Gb1Fp5hJ4fy5pU8JqaEoRg9x8vbHGEL3wBGFuRRwZXGaDLerFJxkduYwJasCeJgYK6PpeniknJvekyrp5zsGiKk",
  "key3": "4y1w5rmL1VAp4jMdQ5WwEwoqoRB96Hn6wKNraLjYEmhK1RrYgdYXw35ZXB7fASehc2t1dhducXwKkkcreHWhsBaE",
  "key4": "2RrXMy5vL5GmmHtds1CAc1obP1QVDPfw54XNczXF1CBzTrQLgSCrMkfroDZhtJvYktm5MoSApTBhBVzkFDWW6ZSs",
  "key5": "FzeTffptWDVa8pyv77vMgRycrpQPSVo6SYn7LwNYX59ZsWtAnkXJaHosR6NbrHe88wwfxVhga1PpiTiEn9pBY9w",
  "key6": "RkULtphGLxpp3NBrqamv6i2jG1rGPWjbqHVApVd9ZdTgFH6digndXWvBPc2w6hf2rhwEvM9mPqkcZfzMKeEBBpu",
  "key7": "2GezAHbE4J8kRTUrmhcYDop8y13B5BiutFYD34SXXaawDgeNyRXCzpiCCGS5DQvBKRHa5FzpSaKpHbsgEKe5CFBo",
  "key8": "34oaq2USVK4sjqZUAWAcyY35vCN14jzeefVZbLqoEbwF3GcaL5xNJLHEEz8iZCRGu8kfbniC9YmSJFexqbBZmRw7",
  "key9": "4HGXK3ncqiFmcgLqvV3VcmtJyUjEAnBNZLMKaPoLxjLNAeZpXsbaJ4XrudZUhLCadyXFYXRxpFNbNUojSjr8mZ1J",
  "key10": "2YvQGsEXNRZ7qUfAh4YB5oXWn3pVfXwrsgvKM39ycosCajToDx1RUHAd8KkSVefCpYb7EZbsUfNixvYZH4ngW3UW",
  "key11": "5wbr3SBGgCLrxime2kBvPdMNEqxxc5BcYM4AVLfGQpLtsKyfypPhmWGBCdk2r42yvMmmxSTb4xJF7PZQhhpEUoAW",
  "key12": "4MmEjkwE2xP4izms2bPX1AXJk9fJ8PNs6Zxx3M7tkGz5NkLb51LTco7khP8Jei7ThSN2zNjhc6dyR7k93UH3UUum",
  "key13": "2rz3D99A25ztKdjApm5PeLqyPdgLH1Sfddt3Thfz5hmt9VRHC6iMS9tZ9y6aEhbx3671HHkyzgJ1h2sPum4pgMKC",
  "key14": "4hJA16Xr8f7Hf41mok44PrkhksuQT2AdarJGrJSKuKNWCHVMtPrk6sqowtkAV4rLi8Unnre1grniDx9LK2WgNWqF",
  "key15": "2MRAjR2CtYZ16JZs9TtgjnWW4EHonrH6VLsAopWszSZfuUyBWYL98YfZkJKomadCHEzYb77LxjbxESFafvNZsufJ",
  "key16": "4jBk5Pu1shm4eQZ46nkd9fVSztKA5aHmnBqVK4g9vD9WAMCB9mpUnpnW8GwyWb4oqzraQYTJC6Qspn9F6G75BysC",
  "key17": "58bMJ5UwFohxRYhRfYAXu6g29Gq1RQKj15Cc55mjDWt6EYqb73SF7hu7VvgWJY3mAUScyetKXqAX8uwz9q8RurFL",
  "key18": "5q9zRrGuwnvT4VU1nbni7a2ER41G4fL85a89xPwiKB9Cp7LgJwpir7qgFNYhcq8e6rwDkU8Qrx49NKUFVs2hyL9t",
  "key19": "3XkrShL2L3qhtMYdJeSvSfq5voaDsDdGywG5u3cLqhnPpL9ekeNw2d5QXqtRw4e7TQ4JKExGZuVeta9VtvF7y2t6",
  "key20": "5fp5pMP3pyWC7z4J1Cqt5vFqRo3gxNeqycsYzHtvEaYS7ZqqtJexZXfcCDJBKP8D1RJEKUocjRGHgDrNuJHf5nw3",
  "key21": "5V6FseSV9N6Bn3YWma1cyoKRWZ6jKigtCJNDt3mNcZzJneod26BuLsJuk3owy4JUzowc6ZZSN4QJ5fk1JE5c1qLR",
  "key22": "5zfN7F4gxFV3mZSEim7cHCmRk8JUSGc7u1rS9tGBUoChu2EgHgwKCh4up33XyBBbFSAfthwLiJyGyuCy1dCT1Aex",
  "key23": "3cZqb7AQuQURU1LCL7Ms5Ry6TYHNkEATWMs4cmVW1ZpG8WuDi4Ji1jtJsDYZPnWidrsdgkzdn1Mwa6sypaXqatz7",
  "key24": "57ovTpKCXk7XxJduN8zB4dWu7NEPX5yMoLcQvSr3Rn4Te49YN2YCJiFNhQD71tZrUEaP9FecH9geQbD6gKUM3D5N",
  "key25": "CnibUbjTyAToi4biHPfypidMe7YptMDWaXts34GRa97VEmNsFWwiuosTTzD8smyWuwE1ZJcpAKUPPzWTEHmPJqK",
  "key26": "4Gpz8LGHT6iJJtWbjUcd8pMseo3SaRJcrbwLpWVWz5cSmWHL4Q9R3LPnW2tNvmGRkuoo1VHfFqwPVBFJRHzdSQDM",
  "key27": "HBmFhM3Z7CZD9pxkUDDNiGk26yzRSebNPsa2agkWVMYQmoM6AQbbhQHnmdYjjZks53q4oJdfANgumdg8NuaGec3",
  "key28": "zpjiFiCEQCiTfJqjGkk7JVUcm7fL3QqoUqLfKk5bbhWneYnsY4THjc2zjDsJYKJPrzKQRw6ysFRQcvHusUtgg9r",
  "key29": "2iczJTa46qxYas3zNhwMRRTSauViD7fCRCdixb9dV4TLjya3RdfYs6MrTJ8KX8QorkwhFsX4qCwtU7NyczrgszRo",
  "key30": "2QB2QkHwCBgaXJyTX2vtwESLWRyjEAryYVBhfzRdnXeJ3LpQA9LkvmwuUPXfCBJQwDm32EnNcbutqbiGrTWWUCgr",
  "key31": "5f89y6H97yGyCyzbHTaVKhKNb3ozMZCmgN7dr8Jjrw49XWX5eKnuCUHSXWGAq3K2VNf4hwYt7bKLr3NsVJuoupM6",
  "key32": "5oC12rBNvKjmcjScKGw6UZj4HYJpcAefWHNfXjmp2xQUJp1QvxFhcs55WeaMQiLCevrZ5QKWgDKRVQ5JSvzvwWKf",
  "key33": "4ofsPg8WbQ9VcvAHZF1jkQ5gKeYSYbjoQFK5MiewuQh92TUtpVpeM3wjxbCYhd4DpJYyYFBABJDrMha29vqKhgvR",
  "key34": "4BcnmTFEVAnMDrx9NKSp6SvTYyyEjxmNSMhfU8VQ3oEAgJrp3tz93tNmSDBS93kH4Mrrim33UorgNoQ9AG7jzqtk",
  "key35": "3uhUtx5mx6hHF4jPSq9UqqD8yJMrjgZCPCaxiV4NJxt4ku2Z9pxYKfFxqteLzqqhF3eUcfWYCCjqw2FwaKFZHBXB",
  "key36": "2KQkbSkeuf3Ys1eiTyNToKyB8CpeQxXdRomFsex3CojfYsRuRatPzaWz41srYhNR8iU57C3ZvQtbXxAY9TQffWcd",
  "key37": "2M7vPmqJ9HBLrvXrwzPtJbcDFjkV1Je6TTM7mfCZREaMqpXLNYqkzio9HrJZbH8o3hAbdPjcnq94GbS5W3KwjuWE",
  "key38": "2AnBcBC1MqrmiQVnHXyEXStkoLtvTXQddXZtTjzqCWTyWFebq9PfpGizxKfPT2vx7tbNRbkrhJA8shFkZqHSyx9g",
  "key39": "4VLLZtzmh7BGyuoxTTbA8gXgkRT3CLYrRtEA98foWh7sYvZqoVXYJ1jj9pSJ5o17Jdxptu7BafJuiStaMGwYSf4P",
  "key40": "3fNKLde38ChJdEZy6DigRGa2vtnt3TWRzZNUjLo44XZQVA79qRAaaioFZq75LxNJkaP1Ybt6iRxi7kY7683gc971",
  "key41": "BPFtrp7UW9gByCXW3WboPjmkDgW7HcPA66X4rLSVuP2ujYoMPkovrHmdpANBHkdBpo5KWRhZP5HEXpdJiiDvuAL",
  "key42": "S5MwyoxjkxsXtoeZA5fFjDdyfs7k5tb3Lhqg3yFFenAaaLJKEbzC6jh7pTqEoBprmzvUVnc1UYtcZfXNYVaMgUf",
  "key43": "V4QCmbqB8CmkrmMPVpNJ68ecgUmJD3kBVMHbWF5BDwAeXt1sbTHYmK8o2CdTP4i3ndCgt14DV6AJq1kMaECf47v",
  "key44": "2riFBGRtnNpZas51z94WNAwrzwteNGNev4Dr7yeVd6Z5aNKgTt85t7YVaY6f55x82rwXPFEuizrpFftsr7JytuhF",
  "key45": "3xKcoLRRiwChBfPZkPmpCXFf5ttgeLqYbhALUJxZHCsroCkWMkYUjHvzYPppyzR2zdf1cLxB4Xgepsaj5iFjsN7i",
  "key46": "5L2PL53oXDr9733VLr2BibPViqwgi8g3hBFP3pZbk2ocTbMUsQCdJRRHMv3nwnqCf116XbXhvxxgT8f6EHtBS829",
  "key47": "5JnXKwZamLMXchbRaKvvtG4sajFmfe6K4QoDyAJwDmQLQxgQx1RbtM3ESuiGKG3AgfggXQRiaka9UVtaacF9jebF"
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
