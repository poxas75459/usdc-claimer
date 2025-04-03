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
    "4EJhLrsyAShF7d5fE7XXYr1qu2z9Cgu4v2TY2iZeRU5TBV5Y1QwwNPVHM3fSBbXt2jc4MnpRYT8v1KsGgfSHdZPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQpUTq8AYZcVdwdZgEtTdDg1ocaUKZ22sDs89sxPioikVkYRJGcwnuvR6172QUTu3F9k7m9U9WZ3QVb2YDQa1ay",
  "key1": "5UkEGZP3zjV3GtssPMSabQbEjGDB8UTZpynCTK5P7EjEPyM4m56eeKRErRMPKRPX9aaaSWvv7VcrFAanX75HCcRX",
  "key2": "3cUib7V8ABi1UaMohiBo81Bo74aTCBLpGJBXEqxXzy2A5ytZEQaKh2Z2XfPL4ZX16oysisZQRP6wH3et6YRzXhPm",
  "key3": "2fN6c2Qsk1XGcEtQyAj9xXFGNHYWopBgqSkkCALcPp3nSdgzLikEKCdvuENMQZwoj3p1p4SckwT1wJJDYNawUNAk",
  "key4": "3oLzk7taDUAWAPM3gDEeFgvWk64iEG1cAaFTEmwWUZhkE4aZqsk53FN4C5rkV3TszQ78foBLmcMRT3JVvNRGFXSB",
  "key5": "DEju3RmvhPxVN3i8Rfq8v5p2veb7RhntTtr7RqVs4HkTKGpWVnFUDdTBjBfTzjWNWuUqKpdLKtZYvrB3SiLBavu",
  "key6": "5bFUZEULaz5YPVFVgeqWqjT4bEsCbFxRnk4Zojb2PievbdCk8vLs5aFEZZuJuFURdCdKcCznmVeS7qK7fS34Z7zb",
  "key7": "L3uLjA6zwyCB1G5tp3jA8TPTBRNPYZq9Mkz6fC9near4qcDbufS6bdcMLFatbHjHtnyU9SUtCVYaZECYUWgqx8D",
  "key8": "rfzKhugyTj9Su9FodAQSsU8aKduvLp7HCV2Z3DedaSmZkaqwbcVYiyoKyG75xEHa8d3jJWwb632nreZMMYTrnoL",
  "key9": "4yNpvgvyqcY99WxEuZ9QFvSYXEut174AKJyTDj4rkwe2PrRC5StxmSmakm8mtW3kat1HtCcukDk2GeFx1YRS1372",
  "key10": "2uYzDXUdVMbiQGErCmEpnwBJrVRj7A3V5CmFia7xp6MarTDQC2Uhg65UCszkZ23hp5FXUG5bzV5SAy4Rg4FBZcV",
  "key11": "5K7Uc374Wwyb8DRLTXeVRheDr42MnvfRPvcD2TVz3gnJ3uLyAANXG3K8ihcxqcsJjpe9dE6Xa1BngPhpqUvxDPzF",
  "key12": "5zo5Tr2ujj6pLBzF1YL9YrfKDTorkR78Q9qwVLEh2ND91GEhLDXC8X58C4MdYhoyc7QqRdP2K8oXb6HoyUJt8uia",
  "key13": "vk1d1trngmJaotwF8yyYjkSGAzgu6njd5TBVVmLmKGs8mBWwfYHCYZjrMgE1pqFh6ytBEn1uEqkLn3fkmdTkBYN",
  "key14": "4CCEicodXo62KRE5ibJYPuHi8udUA3V2jwMqGmLQe4M4NFGjskwpn2WDGTZPScxmwjvayexA8DH9bbM27QtieY9P",
  "key15": "4aaB6ySnLybPuwqviKwyxQEuhDc4FR6D4DM1vPrAoP6RsLaJB4U37kL3A1he3cBRff5TX7wKYYJsid53dDMk6NxY",
  "key16": "3ySyGokjAh9XNtr2CrAARnLMJgj1G8QimrMkhd2P9Tv5B1eeD2zjknQWu2DQcfK1ReYXHBhDgKJq4nVUQiLq5dUM",
  "key17": "66G1qGKVSiNZnKEMER8Q3asYEESeQNeuCmR6ASKaAND9R1CuibhQYRMLPNFz7DF1oUFyYD9XiWehVryvGSdWjnPo",
  "key18": "3SwLjvvRodVXz1zGStFXLL4rHwwCDog6StM6VaWCpwjWn2xLBMBzfiXz4HHgqaggzoBakgFXGzcg6xs7Ua3ADHYi",
  "key19": "2zDGrYCv3FrkXBiaHu6NjtDcFNnWbqhF8zYaURhbAWmXWFcLr1wUEknZifwxVkHrqL93cdy6qBfPiUpixUQpj9Rc",
  "key20": "5rBAJK5nwLVnA9gTQf26ZhwokLvLLmPeqjnRQW49fpW544ve6URtx6ZUbwBSn1StBMbb66H9B1QxfCNwmMnDp2As",
  "key21": "24GEdXvLp9HBuypZ1jHRPCK2xBfTcNnLcSE1rKEr1HioVtkBviLsxFh5oq5riGzFrqdvtdSi8b9nb391FBzEBp1T",
  "key22": "jDK3jrS9zjcWDEvDeMP5nHgj4M2EoKc5XKjqXdzWprtSzSLazyF6meZYnrvL24BhU1iQRi15GVMisH45NSChp5G",
  "key23": "2WonJf2w9joctJVMaMt5GUbMGuW5CysNAi9u2FycVqoY3mYZEyyQp7UHNZHBU8AtQaTbEw7CmELepZPSMMvumfL9",
  "key24": "49GpnBfoygq9swSvQzuhcJnCRA37faEH9Lj4CoQ1vCfmcHhcL4MTgit4GYENqFrC7JnGTMdqzkMPBk5v9MuLr83A",
  "key25": "3A9jEmY2M5KdSBA2Bs2xMH1vi14agrM4bevXzbCLVQC8gdCfYw2AYDe7hJMQsdVjHZTfWVCHDJjYDqpYiagGtDqm",
  "key26": "31ndZRpbdXbKFr4G3oJcZhjWjvUTkBmqUX5LwSs126p71NdBqLVu7H5Tbv8h9V2o2B9otHi4YXSWPnWuLJF7oRxG",
  "key27": "X9CHSQpA4dHNkj3D4p45g9H45Fp1YcQYXwLTtsAM292WNo1zjUPsxeNsDqBWwEGnRw1TagHmNYdCMTxu39b3Upb",
  "key28": "5HCRRtXMMPNxsBeGcarUzKroCSJkE8nfE1PffASEtdhZei8Wm1ixKLvXGs2EtTdUBgxf8WJJQ8bA4mzZf3i6S819",
  "key29": "5NgrMK77yjmZEJi7w8xeB9ZyUMGrzJGJSJdxu8saqwhVsKwaToEvPd2AJofLLTLFsc5hEJLHPfjQTWrPLzCP2NoA",
  "key30": "3CzrePGgdAWKH65bDM7usXTUKDdg1ckxQbbikQ1EvtuUBub7aP2K7jzRfbNYMMjYfXjTkBdJduXpCH7oLHvFP3GP",
  "key31": "SFaHRZUv9se6hqnFXxGcMrNEVYA8fJKYsZ2JbfxKcxL9eMkCrFskfW5Uw4u2gETPovKcr4BhhxVYW6qg8LGRoNs",
  "key32": "4DAKhpaqjMhnjgJSTSTMc86dQfsAA1AwFpdS8KsF635stzBXLAf9N6LgJ2seod9qbJngJTH2mgkRY7Sp2diPVHP1",
  "key33": "kxs9U4CHrbCAipddv3yDNSFxDKcQz7Zf2bw3dcWpGUiLtQX9MFwNxpZmfeGycwCkRsEcG3HdHqXwKPoG8kokFgy",
  "key34": "4qhMKg2GHvzbr1Dw9W5yrGHjAKanQ7Ddhq4Wve45LNKb86iHiVBcfC7CwKeoMHtnED6J51p7hmZfvtYHFpfxAnCy"
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
