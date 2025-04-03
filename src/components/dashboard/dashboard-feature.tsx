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
    "4apUD8YSW1QKDDFzKzezyrLUuj25XSqFQmLbBNZYS6vKSP5VSUDyb1cbmXa8kyPukjtsjcdrknB7FNA6PEux8aYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8A5tANASTyCRCsymTg5ksgwMaRHG4i1Yim2ExGJpU6PEgYtxDrkRnn1ya64YSgvxLnZ5VvwBx8UE84M8KuUQ8wW",
  "key1": "5KRrPXPvKrD5fTPbmkykCNiUorRgM53VGwyAVEEqLS8NqPpShL3gh7yPMdBbyXfCdeL4rg4Htdp4ockUMnWb31DX",
  "key2": "1J7quuticSsZzHfN9pfxSjSKdQL9qcYCGoZ1Ve5htsaT4bgqLWtCmCbJX2WMu7Ap6TTrCoZYrnw4v2JFrDUCWvW",
  "key3": "2F8A368W3kx83NUh219ebisZUiUZgdvAHDv2cEvCbikMqpfxJ3tZFhPde6uwjeb5XGxvEnapRzf88AmxiZGSWPxk",
  "key4": "4ofKV4sLmH59waRw6NpeE3ZrAdqLdy1GjRG5D4phgJ2Cn4EaL45CooUepP9EkLufY6SRia745ZwTBWF4W7vqgCga",
  "key5": "5sVjNXMSacNfDC1W7eVwFdHEtQZjTZHXrQjbFiA6a8f4LyaW6NF2whrxeFA8JDmeLFbxnrZEhgDNf7y1UTo4aDvx",
  "key6": "21ELkMeFaGbm5fV5pfHfATrhKiDp8qwMUSNjfJ24V1HRwxN4AmTyHYEghhwLyzxbwYjTsSjXGcSX19JfTy6fYBeg",
  "key7": "5CeGNTGqX9Tg6Ms7ND3CyjSSfTD5yVMqCpLA7WtkPCL6VANLXCyjdYL91UJphbPctykcQTT2Dfcb2z4fViTE9RTy",
  "key8": "4992bTqepUZ9PrkaEzGPkm4q7m4hfEYnN3mcoCVZQ8YvZZFf1u7srqy5VeUmaLzu2ffXpRceXj1vDMkip2DXQ1EG",
  "key9": "25gb8p8LdLnT1Qxn6M8j13QJmcBFPkEGvhfHyfw2NvTzsd2ykL4dLsPJRqMoMtdcpYeAUdgGkeoxvwf5XTr5no21",
  "key10": "59c9DimLjrfNT75HjHxJhvm5tNWraw8q8mE2HcQb5oWpxSpCfNH8fiLNCGPk6SgaPDtFNAN6Cj4UyZb4svpuCiUi",
  "key11": "5xANKTRoAjfbEdxkSFhy7vqpSsZSc7nPq7m5XxJr3FKzyPZq3v38ymwu2ndwYJUTxGLsf1YiUkRw1wZSRAZex1UG",
  "key12": "3Huxdgysq7NGvLhb733aMRyqqzbF2kbzrh22ymEz1yjzfJ9jo3gY25kJjCRZ9jTRgWx24sidogSxrzyxb4sSzaqe",
  "key13": "4GTY6pXjNqNsiop7ghoP3bRsV5fAqHQW2c6hgCEEN89FhgmLF9ZfnVSmtNSFfTdkWZLN2E2QfKd4Etax8aGxCyF9",
  "key14": "5HE4NBuVLjhvGPxfGwWU8HD5e8toQkRXSvNnSgCCqaagjvbfovLh6tizBVyiAHTTYRt3CKy3t3riZLR9WgAvjrNY",
  "key15": "5a2b3ba9sBq8ebUZccyX3jfN1UwBX1coGG68e33q1N5jYaVkBmuJKe85Tr9unSzWs4Mpi8JmE65uDDT6ysceJt4H",
  "key16": "63vN7FghMdwYtgCPxigZhA21bKG8DiTtXBXNczcUhkP11t2og6LoTUJzW8jjJVaDXevFUMxiKJnHULEQ2cxgd9jH",
  "key17": "4VxS8oxF5TxdHm93YrcoX9NUkcgQf5fJMZX7TubbCiHLZMSQ9YBtq7TcBDETwQ8C9wmg166zarFwP4VSXq5LAvK5",
  "key18": "2E93vHPPeAtuZLq8HjFsEcde14nvo9ajhd2fnfBWcffxZBhjpdwh8NcF7VpnD7kxfUG94R7j7DHVkxUS2TGCgDeV",
  "key19": "YvH7zCFqdZ4wRhrGxMEcfLZph12qcK95v2mkNtwT6SduxXeJbUg48iHxKBpAFt1XmggpUQ5BZWmyN89NfmDMNMB",
  "key20": "3iEm95SrFGkYbqHXjnHmnRw1ZEZB1B78yvrPhCcoiFoAk387X5sH75Pt6e4Bixv4d668jEe5BchpUfmEvZtbdj9M",
  "key21": "2a5HzFP9PPPu3XjvnTxAVYYypAds7m2RUMx18RbLphUkDpc3qmNKjy8vWe4BBNA1mnNaGH9CcPFJGWAjsRX2WTms",
  "key22": "4v16s6i51ErTB5aN1dtKHpkrnwikYHWRfRqmWMFZ3H97uZMedyg5Kg7M6sgWAGPUG1Umt2rxWmpCJtp2TJDgDRP",
  "key23": "3ds6ZV9bAzLSH27822PkzKemrHcJnM9HPD1DRCPk3QMz1xCj5s9a1DSsdeBLvGJNNAMwiTLAKuBij2piAnQyKweZ",
  "key24": "4ppsnwDufHeCL33L1XYr2YHAFaRtS3CucGWYnisnVtrBRp6UvjNiNbDw3JKYQnddaE7q3YNFbCJ8eUeR9FYh6Xrh",
  "key25": "342tfpB117tVrFwTUUCzYA8JjFjCJyEoXQkMdHDX6AE4SLmV2xEWepMehtH5vr5yfKSSuS5tvs2gmUp4d3Q1pqUr",
  "key26": "2YABQpkZAoyk65GXKCsXT5LH9VyqNDWqcSXaKAmsoqGbWaC7pqCne8ufGJ6aCv82idrGbEqBFBxoDZCH242oMvHw",
  "key27": "PnVTV5ovfYGtaSPmuKQPec4UP3JLBu4i6TqprnyCnWuU5BPSSm5qyQTuZ7PN7NXbAbafxR4i3vMK3WiypZyHTFd",
  "key28": "2v4CxL7oy1gcrzBuoXZ5pBet1Dvd9ZsTh5A1RJrSzNtz6xZCLuBFhQ5NfJ665zdyLJzCiabRqCLa7e48iv67fCch",
  "key29": "3FjvL7gQcnMM549Fkzu4Jk7HqF3tJtWdDUxXEYD546wTdXnZpyGfgGEuZPjmuYxM4V2bXYnruqhAVgqs718KmKcz",
  "key30": "2C6BCGpTm4Jx7YTvLw7bJCXgPg4W9GzsYPY7Y6kvs6sa1jY66QMtgFkouCoju8zLbKfn4w1KzzzoBcVRiU2TRUCT",
  "key31": "4UwkKWUfPuMKt9ApixxmMabigpvVxZZS9DVHk4ugrxGmCZqfcvEUfpjiUoesedmBR4boaenue5PB14TBYSGFK8fr",
  "key32": "3M88SpvUq8L2pEMbwHa6Uu3BnWhGsBaukqerGnstqdhcQpmMqj1eNjUUCmw2aoizWURqLhQpfJcEDLSQXQEGKHaN",
  "key33": "4M1QjVf9FhU8sRKqvyd4R6Toejh6QLaup8GztvjDZWFmLHDN8xGtnq5gKXFyTYJQu1X8YJRxWR7ThMdU4HaBVyhd",
  "key34": "5pdy9LuKLMgetrmEkeXknZ3zR4U8gvGTNoMqdQBvYfUvKqiHXKuLG8pVdAEtcgY66VrVe2Prxv29KMspcjzMBAvg",
  "key35": "2mNKFazKAMRU5NmpzMAEvjNVF9eCYN2ADRgjRGxrZgCQiHMhoPa1iYDPVZFcCGmNMW33RoXVK9pooLrdiq1nrMpG",
  "key36": "2AgSHReradbtrQ2RZaBQqZMsRKmcCusMT7hAB5bEWbJ5hkorMwxR9yTZtUYvp8CZUzMigio4WSPP6oGUYxCw9C8q",
  "key37": "5d5i78gAcUhvekEFZCAt45srHAqfzJss2g6QE7AzrSZvjdEQP77SF2gDviDzLfJyzLG8k1u1E3xPYCewLd1aXW7Q",
  "key38": "wNMN6eYPFA2bbkYDLz2yiq9B8saJr2iB16VKUUfnr1n5DED7SfVAQEN3aaQCfg29Qd7fvisKUVVRK7bEbjevPGD",
  "key39": "3vofDmNqaUzM8MS9VbJcu31EwJCtXQWTFnn8EbuQfFxrt8TL2tDhKdWsfGGHrRCp3fGthPNysNaPWeJizgvKQZ9U"
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
