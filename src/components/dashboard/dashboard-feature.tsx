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
    "m8ofz1sRr79zYi5GbGdN5g12sUU2iZ9qb5KyfZ1pcrs4EME4qmZdPKhmdz9pPc4pvWogmiskb4Btc3kRupvvpW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFUMUFJJNMMGbowF6hYgmnbEz3ku8qUte7igY9MpnUEgNKWJ2qHG4fUBqai9XL2Nn7jaLeF7hv5g7EZ1BLufMby",
  "key1": "48SVTRaNjmgDH8QnoVinWyw6EJiiFWBVndb3uZufpL3T29hW7sr7EFErdvwBGdTSDm8HDnuG3UK5QRXYxdLBAcYk",
  "key2": "3qWqdBbL8idHPHMGYiWvB5pFw328wc78kBgWyWtSRwjq62AApRcToxxJPU5tE3dGDbRY4PBdsMUWisuXWkke7aQ2",
  "key3": "5y68NMJwaG3t56DurkfCM21ij3nZkmPARFqV2z9pbKSfUfu7Pfb12n9FYdTV1bYjikuR1uuXjpKVCQGi5LuCqtud",
  "key4": "4aymFVTQMJbPafyArRndpZREU3TNPR9iHNKVhiJLVdFWjr7Usmm41czF3WYzJqg6McYoNknF5aZFjWEPNDC6Nryj",
  "key5": "e5TqWxK9EAwkCNGHBCUbvJYAqKkX3KDNMNNsFUFQfADSvxfnNQnoKasTyJbeK3X9VgsTZ4f7S44A211RDBvhGkw",
  "key6": "3TQXTSeT5HKizP3TZQoXBX4KM2sY4ZRuZUNhsPwnCUvm4iTf2vWXn5ZSrxrhfaAX7jELvPFoAbGbW65YofY59enc",
  "key7": "4YVKVVmUvvY4oBNzrm4Ejwvjo34awQfHMFJvxTy15fXPmiMbqaLPbhJHGskRYFGyWuNU2Pwbxj7zCciybnFJfwh8",
  "key8": "57xG3TPapcPgiSjEbjkt6Yhf2Zp9Muxicuxm8snHCgYGP7uS1jtMhwdR5CoBw66kr7oPFEVB4uk83RVcqgZHaUeL",
  "key9": "5tgyJDDuKbkA7FmWzyc5xvgkb6JFadVEeyv14xUFR64Q3yxj6zWViXeZmopzyr6ArRojJSGUEKXeQuxUPZue7zNC",
  "key10": "46xGQy5whqKZhkUD5nUj3DkmBWPEAPERKHwyCAUfL52c2PBsHbnzofCwh7d8WFRiSMaDyLSJXA5isJWZiEoazBTm",
  "key11": "4Em5EJFRpRbgwj5EFjmcmoUrtiQtPrU6KZjEmH8rKFgpWrumF4AVvM2142EECcwdXNXoQweVfXSrrk8ApYanbQGY",
  "key12": "33GuArVie911xs8mR3tAMbtZoJ2uF2HsGBQsfdcfg6YKPYUNZdAn2A8mui5iQ4WFxhWCfuJDYtCz7erGqkWvYkXi",
  "key13": "65D9SJ7WVWasD1z5w8FinAKXnRAN6rcWrq5UQdgYdq7J1feBJpXDqEY3P4DBHVByaUi3xtPnKJ9yrug8PnDci92H",
  "key14": "5CBiTqCk9wmGDbWdoH8dpJ2pFHu7BdDNVeXy8cFjsMUZsGyUieRLW75uePEHVL7dGUMM8dvKftgngQveEjP4vUKP",
  "key15": "LowwGc8A6sbqDinbCgWZvgw8XbP7UW73pCtLcEDDUaEcUQcYG9AYwHemVehYus2mBvTr7W6xhL5nhhv8B9yrXyo",
  "key16": "37YDm769zQ1wj45EjykczH8iHS5vkuLeitnCJVprqJeqxotcyJBtBAkmPzYqkDbb8Dvd5QLHrcm7YfhithPQGJUK",
  "key17": "4X9fGD5KLLQyrTKiKe9cKp6iLc33dBnoCPTwfnmn2Ri7RAgPoT3oEdVSvZkuVMePVJbJ861J66VL3EjQf2Y4wW87",
  "key18": "2M3KAPgVvnTMcz7cSNbvVs9am2Ek3ue9TbuRp4LLuiWKbXxJR5RYARDu1dvmiDErs3uYq88bzjFCCyqAxNMuQEy7",
  "key19": "tE3rUFzH1XRXvbJ1HdReNm6bS5uSC3VbkkG9vFCN1eh5K6NsZRRyayhyBbNL2px7AcZq1BtciWbawfmDn3rYPfC",
  "key20": "HKiksQiYLyQBPs7ujoXEADJT5EZkXwCWGjPZYEynkAYukpsURXUaFdkhfdoZaufzd5EeRwR8YSHEtzbnJoWUtrw",
  "key21": "3zrLj4fmr9yMbVSZcNKehdRS1HVqinsrykgMUoSFbDfmh3mFCnvBh2F6pyEYbRHYMSkTyDtFMdyWeA5qoHZMJSm4",
  "key22": "5sW7WD6F2J6GbYuf86w6DZaK3NgvMZR8WfAF3wqdBf8U9XYNkCNMMi82rpiKfVH2j6cJzzgPbmgaVfm49Gc46wj2",
  "key23": "2d8JCDt12dXTCsDbeoYd4m2LstrHjm3AecMFGuQBKrdoT33ebj3zm8xw6tUXNQca7tAEEoYbhcXWWTkfSytc858K",
  "key24": "4nWRzd8w34hBiqHeVfako6jbFKoBenagnfeJVpFgFQ5VZ4mcgH8PVUi1Pta58c1p88fxvwRAsgZMx2rTgALZDhcp",
  "key25": "22w3WXGW3eEy9Qb2hsdXDjwr7mwa86UQ3C2KdvRmqNLMZinZLvZZgLFRgia8oywkx8RvCNNVyiT1U3UVbY93KnET",
  "key26": "2guUw39iszGFGxEeuXh3HRnwCE73oPLYTyKrythdyQZiV6rRU1AmF9eRgnui3xLg2gMbBppyyiQNMYtZMvD6aP5m",
  "key27": "d1fFe237rws5v9ouRbLyPMtj5dRe2UFingFJZxbCAop88QQioDrZSU1BSYGGQiLwbJj8u4nqXmwe3FWhLSr5gPc",
  "key28": "3NJY5iK9GXexk66jm7esLCBLE3tDAjxCYUzPiJa9sKs6FBUJDFrp6YpRMTmGhi1jeDLd2MSxs98SEinwhzBUeToC",
  "key29": "2Z8jWRddjbUZU37jmrRnpj6c9YiZdMiqs7f2WPePHVFQpixksD8wPvuiWUuDKPai6UC9DQX4vsV5RPXJ6457USeD",
  "key30": "2Ze7ZZZ1PcR5GRMgaXYZULFCETiHRoBjPtPSpgFcDv7m7ypRfHEF5nDpgwyPes87dGowkTh4aJFU3AN3vWecNa1s",
  "key31": "4urzyXjLTGGmd6XEjkGSdaGuB6WjiPFgmmCmcjtUjz2MaxmZ8bSZ476Y6zZnExywMwRGy5RJzGApnj3ZNuhLGzQs",
  "key32": "3w9DBvoHe2tY4HzLjMQjKF7y7bqJs9j2Cfp1tupEEnhVSv2jpAtic2srjbsph2QwxfjDKWCv4z8ne7TWXHcwKM1o",
  "key33": "3dTvJMYYF6X4YpJsHgsNSrSLsLyUsUVS1gf7swfVV1VSFsFheFNsu6jt5efNc5KNK7h4shcWH2kbBWXNvsvPF5jH"
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
