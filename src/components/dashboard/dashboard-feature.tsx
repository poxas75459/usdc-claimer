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
    "4jurp9VXJ8NyrdDNnkhs7FcMGfTj5zEcttF2ZNkfyQeJRyo4oYQk11x1XFGMeGL3bmKj2j3xmbyvmio9F3mg73wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgx8GWLCbnMkUhAm3uD36oDeFUweqrYQe5aNaFtoLANnThizpkm6Qboqrvhz3zFFt6XA7SbSBUoJFK6JSvGC4GM",
  "key1": "5EkHcfUzPgM2xPAUvChpEdXsAqhTUP5xCtXWa5eJKuLbjXAGKRVZKtqJ1Kgn2UJczoB2acbD5AE3sjB37pPex1wp",
  "key2": "5crAY45rBCFfcXe9f8vuiXQfSy3Uvq72VQAG3JCsgWvABz6kJUAmNwwp3vY9M2z2BX3e6RXr3eWjsycvq1mCRuQ",
  "key3": "vRkeok31f8rJ3MrbRw7XdbqsfUZTbWi69s8ikt6oWzbmXSwL9iyeLjGqkyeSnvo7FtKtRfxbRPuUygpQnmB1S6P",
  "key4": "46gNpHexgDQKuUW3Qd2u2UXFadKUdxAHA1pVt419Vm7SA6fMCD9EbaL3R8rrHDkmuC65GsCBmFwxeTYzvuqS4TWF",
  "key5": "5ds6iQb6vNRWUdRdB1XohEQ1K241Bt6WdM4LiWhvJZRWePLDkBcyn1bgRRmiB23qP339QMRCXsuAB6FjTrsjKJug",
  "key6": "5sqeRMHZ23jpTgJhp82pYhqXELstG92DR9Hj3aVaUvPxZE92zXsk3CrfGXKEcj6xi3ZCZomE97pnhV72QXA1rCJU",
  "key7": "2mBpBk12AroiQ3Mn4PdcfbnM891svy1U1yYdSf2wWzxuxF7vsCdsTi4cUS1pSQQriDfWHaPKAnsuPGR5vhfnw9sz",
  "key8": "R8VczqZdzTB9PNyV3dSsA8DX2dRjfxtmAGm8YPiksHg5uAUHw42hhTFLew9cv8exae9HCivNEhGA55F8A2zmr1q",
  "key9": "49qVFhUAc8fKDYTSb4usFvNsbpJpTYZx7YTwNRsCAPWDwdr5agRkgG8DyrokmUouqeTC6dWY6UV638kbJ7rrRbi1",
  "key10": "G8EQmP6CbMehWnU6SxfXrvUAYrNBHFAe1BfARLQUvMDnkHh5w2EfDLZEnVr4iERQaUKQZxi53w8beExDTeuXFcq",
  "key11": "5bwKrbLQ3AGbm4FGreArDrM6sJ6YCjERUERwWms4ZpmRrJETZ4jyRgbSPxLLiUCWwV4T7okkArzsZhcvWoGmyn3D",
  "key12": "21ehcYy5WTEQhdhiZ2HVNHg3rdkEZR2eJepF8ZHzFVt8rDwDiEPeSjQ2y4EHhmcpCUZf8y21C2a6PPrnvaaTSYtb",
  "key13": "KUFq8x9d1QmJy531UgxYvdoA6NvoYxqUpYAiVFwoA5PxyuchsJs4tFL9s4QUuQoK2AXSRBrk9BJ5NWFxX2pmgfw",
  "key14": "3jiFgs5xyh2UqxgPNyiHUcedtKLAbZr7WMQrL4R8bPSckVF6DVkxyiJanCUv6HUKhs1SHGozj5S21MhmSZpnswNG",
  "key15": "5fvdtUE8DLYAmdBR4Aab4FrQTQzdaGQA4PbA8LE7WMp6u3oD5zSyFtJH5zihHzy2GHvL41PkiqqPWg4nxYtB5qaM",
  "key16": "2gdSW4wseSjHQujL5Lv7GbzMQpQakYPki2N7KTbz69JtP1wUoeQ19zkK3cXxNEBwgUe76N8oaHB3v7ecTKMES5V1",
  "key17": "3bbKuuuL2vEmbTsgb9HL6kLckWwt19UHC7DArVTR9oKup697Wk7cvXm3LkNkppZMWxBNhN1YLHjLYRVgQaXLSqGd",
  "key18": "4nbCRHpFHs5g2oGP3VNYEv3hcL1Dh34znkDg6RqQrmB1Mys38Xd6gjNP4nKJGo6W98vHJpBPvFf6xSuLzJ5PcFgw",
  "key19": "4RwWATVjtgn98ermfqcrN1pNBJQTdTJDuYeUkx3BYETdmvKVdsd4P89TqmhLCASWdu4cuYCUbxeTdMDsFkcqp2n5",
  "key20": "5gsDt79JqS7SbWnxP78oeX25y7yZ4XWzkKFerbNbUmjpxdq66fK8RcG8KrWG3mKABatZ8Kf6H6sPPqamSyT1BN97",
  "key21": "271yGzWtgXLuGyH9QpJsaTeQDhoaAErd5Xn7HCJYM1F3WmrnmCQa5TdVVtJ8jzVc3ZFcP1BnEKCWM66wRdDrZon6",
  "key22": "4KUFPAeFVkYnf5LP6mn5CKEXyBH72sg6LUUkw2NqG1Jm6NXo2pULAai5iVzv6Bmk5o69LHqsCGS1a9LUEe1aQD5W",
  "key23": "5TksjXhda5oCeG5UbfsmDZkebkGGZ1CLkb8cbPuGisRsyEm2gYh2QSB2wkXfGj46ZarwNtgTBo7XAMQwXAxZZDMf",
  "key24": "2WtNLWHFXDRFe57JfoSFaQU1cDqhWbqZCJ6zF2TgtwsTCoyMeRppg7Nx8zZy7kSWFeb56vqKpsHLRJPsRrFj4NSm",
  "key25": "RRpNmfpEfZS9bLWBtQdMhcEyKQDoogvWcJCSxcYMKzWcKaS4NZDzCHBBoFUqc9qNenNvVsPw96LhpkDFU4RiYsV",
  "key26": "52drMJsavawsu2yh4yRf5dbtgTAmtyZpsRojAhUrzmMh5DC5YF97wUjp7XQVSuS2d4GcRP3usqZmvggqkfQNLqzc",
  "key27": "34GWxzcMQK9D7MzyQKvARdmgCnm8T1Q4wHFxNHbRNJTwgajLMjCcKhrmhpGWac9bBVhh4ptN1TFMVDzBJpDcCpZG",
  "key28": "jAhwPmzqTyaKCB1MwMif1So5it8jJeDGzKn6BvAC8jxpNVE3zJNvuu8FpnXVedyBkpEJR3QAXaYu8u6jhiHq9W9",
  "key29": "5HjU2hTDMxp35y6uLnQqMpPMrNBN4j83DfXxUC2J4qN5gMtrQDrJtZaKbZgEwthbvHPnT92XjqF89H1kNtAD9Djd",
  "key30": "3jP3ZUJNcu97UXfmhPE6U3dkqffTsDBt7HKuT4stWZzmwrCVXpqNz68LkikoTdndCfQgmuqsdTy7dURgDoBHsNwk",
  "key31": "52VwboJT1KDdGcwpvZiwjw7VPdHWg1ga7nWovvPnXC1Y8nQd8ohTkJE8T6vpJ2Kuoz4FxC9iAywnvMTCxVeRrLKA",
  "key32": "5Bowr4kEwiYhAwKfQE5vyZW3wu3J1CpLXXgdYzHskaDzyVhhY1cf4FVbHdUgd4P1qAExN2vYEivjwL9M5hhm1pmr"
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
