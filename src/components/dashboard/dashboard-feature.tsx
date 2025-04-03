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
    "BVeyZ4fD43vTzxQ2PDWgUaxBgSB4A9pgKFJg4dvEnseBzCywmJeQJ72Cn6or3CjiVFU3FTBnsKCxcUs6KQvx5QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lnw5rb4MpVeNa3XXQKDGtJsXDEc27vXCe2i8QqSFyZj3cawNsqKw4Mi2WAcuf8zq46bQr5zHmxfXKP21SKjdNET",
  "key1": "pjfsZWofyoUpi1xxVUgEnKWiWqmi5Vaz4Gexp6mpjPanZ3CCQ39htKLMc64wEhqzByQwn9EHuBnps9yrNv5tZK7",
  "key2": "2agn7tLHzPgHWxFhmuBWRtyohwCfRF3Twd9sMXcKk6tQWTu95u4yDvsotv4rR7bfcFLaFcfAJqW53Tr8RGR6P5jk",
  "key3": "2zfE5GtivmUNkHsvMuPFemcnxuGZFQ78d4qjDrj9KW8znGfweaP3zLNi2jbYtFR742ZUuyEosnN21XgiEJkw4MiJ",
  "key4": "2Xb5aWZK1MGceb6K9iC1oP8hoKKzaQHNo2YKkVVMuLmxntXzzRBHeqA3EPns33xYBNZFfWFxvECswAp5oYLUWoZ5",
  "key5": "2UAHkWx4JDXtswAbzssCXthDuEZMLFnc9eNPnM4o5NznyHM3wL4RAF6Av82SR1rcDphVX5RdyfNpqe9s6B9mXPEc",
  "key6": "22sodBzKPuYLZE3SjBV2F6rFDyTBpG8DpepyTpD7dLXsUhZRBfWv69VHhMtGj3qhVtiQN92VdGPLLWfYWxrKA7yU",
  "key7": "5YFnezfTXsWpgRWTfr2y7MXFVCim7vUcQ52HVrmYw39BUqBrBUdZrJEpx2KDrAiuXdQp2t4YnLp2otyrJ5Fdsrjt",
  "key8": "4aYyzNABmgsnBXX15CSpVq2ixhiLUEMY1EGZ1Qaw7yvh1CCkR8zj6uM3koChPM3RyXSsLFUCkX19m9EXGvCqjjyT",
  "key9": "zkGg6D1aanu9zrxGD8FxhGCtZ8krZaYqMCJo6NyQpoVKuHGi2tCKYyxGMUDm1U4u4vEgWkKxAJustU8qNLPA7Dy",
  "key10": "4FR3fUi1TA1qYhxiAn1Tbc3BsCezdRZgG4q6B7etHvgD7Ls3mR1sZowPYz95W2QG7CaRrqebTbDkkFBB4DCpGU6r",
  "key11": "2tuuuWNetM4uGBdsRSwg8AnRG5qaKFEaf5Z6bJpN8dpcJxhkmJXsohF768rKJgrG9oZL8pDRFWYfPFBqSjuyhmn8",
  "key12": "QrFUkC17nm68ZZh926mkwX73Zc7qNxggG2GhkPCydBy1MmcrsXhBaN8J1YFWuzdtYSPFs259VhMmTvUZPniFRcG",
  "key13": "4DFe88UrKcd6NYSwmLSHM46Wrx2e1DwVwAvTpv2CQgH6FwHJX67PWA3uyqkYjvWyHz98VB4UgDneoZRoR4qeXJC3",
  "key14": "5UX8BrtvavsDDUGmDuwLmYZUjnsfMYytx861mtgjrgjAqzVa1ZhHhPCy6J884g22csFobByNXKsWibSYnYTqT1uK",
  "key15": "2sQqKtULtaarDBEndumfgYstXwqTW1Wy75Ej6Y1XzZniaMHo1LR2iGULGbvBdHEwJATNEDhtucM4dufKnzCEqh2m",
  "key16": "3vwuJVvHuAgwTAMwMwtWbH5sZrWwwdf1gFuwcVPrT6FY33yAVkuGPRk2QvJ8ZLPaqdKKQYWDGA3wyF3oPLpT4Us3",
  "key17": "2iQ7PyK7QqScNASVfPXc4AUPeAdc7AbAkKkrCkU7QG1WEb8vgTq9KFcJg3V2Ht4D5MVRQy9LKK8jciAShqr78Hk1",
  "key18": "4se8i479L3KhUrCmiuykWd9E1bE2ABRCcV4B2ofYgG4JYdUx8YfPVwgfajns4XYyMBjJEDC1B9fUrHUGBcZPQCEM",
  "key19": "3QLLKYv6WFBmY5t3Lyu6ZV5nwU4qWCJGbMwzCLAsPjBWnjCuWK7rGL7j6NhTbeuLWW3qAmQt4sowjqvzBFrZnKaR",
  "key20": "4p58tdgeu8wRZhaNHuWxz7vxy9TGaF1KkfHsBQfr8N7VZphMhJnZzZeujtULrfuu46GSPhywXTaQKDue8f1EfxcM",
  "key21": "3JUZu1iGKY5M87eszqufYXV8ce82teYcmHfQ3rTU1YUTLjkPpnHLwSKCr3x5BLvpCmJVZV7wdNSeFBMFEixjMD52",
  "key22": "5WU7pWJmDF42ADNYZULzCnvAJtzNCG3AepkbBJ6gqTr6iJ8b9thcd7e4U5Ni7uKAq6kTSTYh8nX8g3Y25tdMYbf4",
  "key23": "HCPZkrgbp3KKK1cZPrN2mzikcN8RyvVASEUZBQKmq5wzH4qh6DpDvfY72ykVcgacVDbSzCrjMAyuR1Hve55EcaU",
  "key24": "4XYu5XWq6vwuM72FQn9bzqSzDJhrbXQ8FFPo5F7buZzsGa2d17DL1gFpANx1Qx7ahCqGbWMpwjhCPB2UY2fiTnQf",
  "key25": "5yBDKEcSfFxirw2ZLTvqdGRr1AvgzGmHq7AAnG2LyMHuA363BQRZmsrBC1ZKNsxJJRFyVG2p1vjWn3pN8nFHXPjY",
  "key26": "XYSdgZuWvhDFp2Dsi4he2zybFXJxZCpHPgEyKNDhsdopmumAw8t6ACE4Y94FT6HwS8QdfLW2K2K4c8CHSDAVxDo",
  "key27": "32ete9Gx6wmNQCdZybu5axyPYgaqNEjcwk1dZLTb3RAi3AVm73Z5RHWo5qphqJqa4m9xyonM3GdvG7oJxZ8JnjUk",
  "key28": "5AHa2p5koBhmTHzNtybQLndwjVFKkN3GPhVJ6fPUUsF9QL5vkaUnGjUkVvgdKcVF2m7RC7tbVLeaoQMLXGdYtEik",
  "key29": "29Mb9sCiUCd4HM29oCUVZEfzwqe2czKyGBmEmmX3G3icZyHWKWzX6v2NE7oSiLoYJoNKrcMoBXpjxT23svQumPh1",
  "key30": "4eXBiVbdcrojw86aWWpPr1cvmHLGaakDuBbdhvZwtsZMCKegfEzpbwe2ouwHe5H6DEjoJ1LMq3j9QzzGvDA1iQjp",
  "key31": "3MiqFJ5d5PnQmAQoK7LuwbrUbCYeu8MVmfyoDrCti6VBA35HFhKDE3qv7tW85MNE7EVqxKKMVjJFLYFA2EagkV67",
  "key32": "qESV9yJ6QhKBReNeHZG5gy5oFjpkVrgBSm1kkkFkzHidFbKbjqe9FE7qDgAWCuax29sBSSvQcNv8jhe7AFSV6SY",
  "key33": "3WUtdAoK4C25f6c2y1Si1EUFBZMCN933P8qANx8eeeeM325raoX2wJGhuDii79VQzVBwhz8FWsbPSNANNRLqiruG",
  "key34": "22Tc1zMvd5pqMrCrvSepi6EQqDBspzuzAZqVYbkodP8rFC8vYXi2jymwcNq8TZQe71ZAsk7r7i84QnA9P1LTjMqz",
  "key35": "2D3NsrMszJN1EZQVSo2CP62HA8Pc45zUSMyZGFS5tos7FsQGup6Xsg3V4ZTj1LoJmqWQbsFA2wQaT6j3QukfTnN3",
  "key36": "62GtFYAo4tL5CVee1Cd7P3mrDKYmnEuHCT94ykBqak2HEpfLDY6Ecy5yHZN5SHvtsYPBeskk5MVMQyVNiERjXjkx",
  "key37": "3y1aAS5zKp96b4nxkBPUkKSk6V3EZvjhK19tNJA4VpqKK4T3r5RYLRbSE9C6CwJAKEgEUFhhB22u8AA9JnNUxyMx",
  "key38": "FnKZ43EMAVhURYuTzuJZ6XLtfGv1h1yJY4KyCFhSGFhycL77AbDtw6523h3qM4bNmyvUyL3pT6mWwfZ7P8MsYKR",
  "key39": "2u8w4KNTyQ412KvWT4VL2nnjBNyVABu7F5X5BtA3nX8u8Jsg1VV6KB9B12s3HtF6LBaNApFSThz7pqHyJAshStRE"
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
