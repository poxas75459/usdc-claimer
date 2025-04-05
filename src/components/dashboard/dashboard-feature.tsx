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
    "4SXDYr7Te7c1LY6CWhx2nazHFZhhZpAiuvhCPYwm4aaCcL5uKkbvGwBkY37WGYZHPNG5GLzcSh9GLe68cGTW1LXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMX99NMTEBvFrWnmpZUq6sSocXTUkzx5kTdYtnnoiD6EpTFaQypQJNn3p4EfUhp6u3iJuZwsKzyHKV6Fk6W4yd4",
  "key1": "5acDs83qYpcf1WgRRknzoxxZZKZftAaVqJJFVSywpJ7xRbH7HZY7z8EUAz25WpVxRmppyAkGB6XyDwXWqsGrizUu",
  "key2": "SXc4V2G94YW3CHvQWaJkg7yWBAUZ9v3DmuAvqzWCy7oP2t6EgATAVEp8FRDBUuBekNvzq7Wq5FpFGCbaahYyhnh",
  "key3": "4cNwULMfhWPE6AiB5jiEkVyPvFpQnbPyAhYN4TwV9ik6YqzV2kn3MSmNsi9yyYzkQ3FChkxXpoSgbuEwbtDj6fZ7",
  "key4": "4fT76E6YxHXwmzQj6B3Tb1AGwdz9DLuVrsmWJsui1aSijiYqFfNnxGLm4LXcrRB6egSQ5sDSutb2EaXzNrAL4mwE",
  "key5": "Hr4LtchYkHvcsv3Eyo6VvpJM9ypcowibSYAEDaykLiD98fwrczq3hnYVCFziqJJk288LJgFTrta4f8t1k5rtPnX",
  "key6": "CM7Jnv13NU2f9FNZJHgWLLgfJpkzpnxiCpupfeyhuggdmFhYSLyaECR5NcdRw62Ye6JH2Wdj3SB4WaNkFE9K3VR",
  "key7": "YB8KVj4F1oeonFFzBEQNqY92tFpK5U9KBRjpx54JbfeVC7XZDoNa3HsRmkt4BAsEqy6NZJNsV5gV3sMX99LPQPk",
  "key8": "5gKpAtBDmW62WKiK5ob3r8cW1aJCShmkg4kpJvLrPfH2ppokBomZpzXwNehAPq647VGJJtMdFn55WMxgjNeuC1SL",
  "key9": "62iT8B64X24CfMRQRGcRoKD6y67BP8WEvgQA3xgevyfmDGF867zkH46Q7t2YuPG3iziXAU265KriosCeBEGaA5k3",
  "key10": "4CzsRS1ue7yad8Ev2z8FPpKLZ4oB6GjccvS6KmMXMPU88W9X7Zmgq53K4cQEnVCp1LosJHchhMo4z2u85kRQ86qU",
  "key11": "54UziYYneA5a2FzP55NHGE7o3iSahJjsxy22s4WN8So1tBEpNLgePAUZ78qz2fagP58AqA25uEGcdXquUJ6AzY7S",
  "key12": "5ZUnDS9FbKR3Waecqd3jvMGyjMokeFd6By6zdxDXhxn8j1gBMqGDhEDwUXoJVNGHj7c3FpeKADoP3PbEs35xXGKH",
  "key13": "62pfJLDosfCgzBRCSMzdZJ6pHM4TMCsK2aYHCfCzt6TzqTYkgtwo4RWPLmEkTbK6kXjsbJ7n1hzCFZymrogQbAEG",
  "key14": "5wpscsHzNrSH5CfWNEzSMbRUQ76aF9YrKw3BtoTkU7cpaH7PnQ8MFr4HoLY9jhipQ4ZTFye5k7THUubHh3q46gh7",
  "key15": "3doiJXFiNaUtGKxv8cqtbZcYtWcCpDLDjvwdPYJoHcdyERp4bQCpKsLa92vhVdzE6KaAG9VZ3kmaWRkeBtzLTifK",
  "key16": "RjUWXEbqbzVL4hsCMUDaoVUZ2rasBzF83VauazjN2ots5Yn7xNRgxHTtoy8SMuMk116eZwZDzSGXMzHWrsH6azt",
  "key17": "3MDGat6KuJGBJLN7tZMwpcmgoEzvx1UM38fAhQKTxGaB15ekBr2G5xB3G7qTMZ8CmobcUB2sgSAiaz6G9wnPnzqY",
  "key18": "3Up5jXPxpidYKiMxm2BzJyKTZj1UtHTZDBMuYzcf7TbtRjiTyRk9KQLcbfSzdn4Lw2rzQHhiNUuWHtcqfurdciK7",
  "key19": "2erCp6bGNMH5vSQaDzJBqiuijRy2Y773kQfQde8G1UBUZQMPj74cTv7isHBcqS1NbrUKWite8J4zxCbqosDoBGUU",
  "key20": "4QYhPfpsDWxBdZNnN8Pv3ef7NAfnUjB6i76U98NipKFedJoaN4NdVsGUTy4i6RCVJAeebaemLp6GxQT97FiPsxpV",
  "key21": "2wt1ufPvoy2Fi9jZTH8DFYVh1BLrN11ijjgTU4CsKu3RjriW7aDWcXRYeuCjeTe6beDQsNwh7jTqAAoWCeoGj3uo",
  "key22": "q3NrEcKnq934YBsGoLeqA21iv8UpfJ8dp4C8oGqisLjtRMquQrTMxAhE6giAziFnwt5SSHj9SMLy1vV1JxJP4fE",
  "key23": "T8SzTConzvmXpJcBuAwD6brcEC3VdKWwF1DyuszPP9v9iRsd6kc5c1Te73Zj2BBJuMb5ceDj1aibHxoidHwuHPD",
  "key24": "2UrJu1heWYKK1CJkAX2CnWxW9Sp3i4c8AKCViiep21Roz1mh8qcXVn8cK8F9jNFbtvCwVEyVsSD5hMekdZMWZLgr",
  "key25": "Xky9L1J6Bwk7eWbqsK7vaBkPcbfyQznhpMhH3xC2f3rsme2LPDeCXKDdvhmNKNBJSZu5UXCBKAe18ZX3ZE1Qhhg",
  "key26": "471dAhmgEvWxbSt1qN1CjnCggEBdW89mmtZcqs2xhtKHiemYWgwSgjMo5EAXRBTvDimsxhh1rPdVQ7cxaYChNJVY",
  "key27": "3e2p5rU8ctNrpsd7EtoGASfJyihQ5wJ9V1fS4AUxHm1an5JVyY9UkEPSbGEQsTqiyNV282iaVJpZF8nyUSTfv4mL",
  "key28": "5SUE9rAvo7sZNvDaKGxuk7XyvB9oNUYv2sGUnkTUumkGikrqUUNmmnJNT3VNroaTqHykphmcsHHzpJ49YHWNiyz6",
  "key29": "4qW86GuAyTPHyKghAya5rLetbQsYN4kEmdn6XEu4FCrVmbApi44VPmkjKinykuu9d6HHK7Yjx8geYuw2i2JGkxDh",
  "key30": "qUdCX5a3x5JxMifXDi3AUU51D1KTda375M6K7AxaiVnMmZHjoqrkZ56k4ewhwQ7MEa6BqzCeWcyWhv5sJVqy8Z1",
  "key31": "5kd8RbM2LhAmJuU2XeCM66RddYKJKLoo3oz8hP2d6UxcicCAnJmHKcF71JsSEStunJ8G3P31YYSaAQbBTcGhHUr3",
  "key32": "UdbcM3YY62Sd3RJCYFwVwaoFBG7eAQAficE8XMq8vD6waT3cpLNBgkbXDjmBRUpgGxftY3Ng3fHVmm21Ku5x2st",
  "key33": "3Pym4KYk6je4VUsQEbFLsK8uusBi8TKEkuYjvQ3i98mchysgDPGmR7JwdwcVMeDEKnvn43BQXLbANKz9mnqAU5VH",
  "key34": "5AUdLmZsaGxCoyZ9nFuj1SHVFYKYV666gPSfJBkYDgGE5gHcRqCJvCRyWBUkYLg1rwN1ebGu8swEneBM734CyB4e",
  "key35": "46if4qk9a956U3nmNJZCwPrYckxVKgnd72oHTmV78kMXL1pnoPHvMMrELNKhHEkmoHgNEJbWXUW71mA88C2VhJc3",
  "key36": "3dWyjhBVU9tPsarMd4SuxxZ7avjGcig6ytNtwVtRXZUsoomKm8hrdxgY49q8W4cKver6yhwG7GRHHraaQtVD57Tn",
  "key37": "2CZg9LFsY6iFjVWqhxRwTMkFGYnzLAssuceHXRM1ULsrrz5AhmDBDVLsKWuVMrES5zqpPY4hCf2tzGYH7VmCxuQ6",
  "key38": "QfuxQ1WYk3HK5TFsMVuGhLwTorooVtPkL6tU7EdXHVp3SgVtr67KmS8WL2VDEPXvktfhCSXhMAeXtbDZ4hVzSMh",
  "key39": "4Hk9KvDTr3PKJ8zqaxYuSjm72rivigoSag7241Lr2pp3BUisEFhZaci5CdKuqAUKPALYoerWs9EuwtUMCBKUJPaM",
  "key40": "47aUuMum64GY6LqG1Yap5kX9UpG5RMiPWXCVFfSgkew9bDARGPnAd9XmKX6VevbKjpsZRfYTS33uNVnu42NbP4n5"
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
