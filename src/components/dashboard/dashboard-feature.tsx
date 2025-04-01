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
    "SMLzjnAfBfkkcnRarGGoZRFh94h2y7jnhPLv1TgS1xV4zgS5VvBZqJdqfCXbxQLhDmm5XuC4NRhnutiRVsq9MfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KAe23ou9hswmFg5Um3khSMxrv6Wyr1HRaaTuNXZWjKmymTZ22emgAWLgsaiHwLXSfbZiiopyUvUW7Aw9GHbhK1",
  "key1": "25biFTiV8hQyJAR6NnmSZpoi8zxaWPKzK3b5W2ALExaioyBka9fFufKW3Go1dFm7pCMoE4PdowTuAgrC17MCCJYc",
  "key2": "4ytxFrww5ygq8nFrniN26FcKCvrveW6UqJTxKdNaRf9W1iGxZawGz4jGfLbMG1CraCGJBCuJuzdJmmrYcwrF8ser",
  "key3": "4s7QLM2kuXCrpWEk5cEo9BBuEZKnrMC8zowJbqSCFszyYXF7GYUTNBMgMa7Ya6TUWNeb9DXwU7UdAvEkiVgKHYKD",
  "key4": "4NGdUS3TEf6aGLnRrHiVPe3EhoYWynrpD94w8Vpc5KyR89XPGMwUdKVcbUVhpwfX33bk4mF5sDJeTCuxDZ6VYuKV",
  "key5": "5BVyeZQjKiuLtnHUF4C3vwCw6RPfsx7pUSY9mnboCTttaiGkyGo78z5kJFJSL7MMxiWrYMR2mNKWkdKRYNxWGpYn",
  "key6": "JX85T3uHa7d9R5C1GosVAD3pyrPpvMPv7R82dU1FTYMppEtk1iBrAX8pt9feKsV5h3Ai3hkPXCmknqAJFYr8y39",
  "key7": "kKe98wxMmQZ4qWHH4SisJrS7FKVrdskAKi5Un9mfrQ1xFNhweC1PPzrfkeQSSHwEb94NLfiv9xScbSNBrWTXTQL",
  "key8": "4C5qeexQLVDJdSqhHXjmEG7R8r1YeyEBq4uu6kss9XUFgchgrEpxgLs7xFX7iRivtrb49QMU3LtTQpjjY8vUPMDT",
  "key9": "3aiQjbVbKgZvfoxDFuiKv9RGtPaGDBNDjGryUhL6X4HQHuYSTsvp4ikFptza1oduUkaoEbQR9L4juLfs9SydYXwc",
  "key10": "2G6iFHGT4PPE54ETfRmG6Z75xBCz21VV6X2xxjxzf9TjVmPT3jyNvKNJ3eCogzXsvkSwetwJ9dv682NZhmfskw1r",
  "key11": "4CZmwJN6tbDhtedxCD5yxUbkGgY6iUunMHNoopfQnXSdY2gMuwfw5cRjDHH1JNBSZ16SnWGYJXyFxhAH5v7JECRD",
  "key12": "4BKjmpeHMoLrsV2Wicw2JuniahKSCf17bTRiAAxfta6KXoAL86byYRxjDjwkYRBodYsnZ8pr7zvdpCS5rXkd4iwP",
  "key13": "2MnZ1JgADi3ijY7HcU2kHrFRiVYkwt9qh92aEoBeaKw7iJxp1AjoMQu3mjVnDShpNFbN6dwhuDqteUdSpi2sFun1",
  "key14": "TY6Ld3mbG2o1BhVtkr6CgBq7LJmp1Keyvdo2oKe3b516sHxjHEAQWEc5ZM5WqzdcePKq9v4tfnoN1Uqt9hY5byo",
  "key15": "4ZqiLKFFfmk9kwcg3Rgozj3Kgg9ABrkVzP1fhUDmV6RZbPMpzRwEsNBiGgz6QvJ7piq7GYz7WjBoHhXetbykoqdh",
  "key16": "5JsE4igBu1DBchYciv4DM2ZVsMnK2rfeHSHNhQoa6NZEZZSRxRxsXmND32MRQoHH5iLH9iEPbbmaK5KNeaTkhnjK",
  "key17": "2bFLwhG3PF3xfZ9tH5KiEeFaNABhgx3DciGD2vimf8BET5ZaRqZgsTTtoeLK5byHj4te9M7vTEafD5FNWNLsAoaM",
  "key18": "5pLpdVvtndMjJbijLX1gaPmcYyFhkHjw2LhHdngWCDC1mjQf6HWTU1FTqRaW73PTFtRkR9FTVvYUpGe5AyCSrmmi",
  "key19": "3MtdEAimE1EaEunqNw4XY6e3xXS1EoJox7YH5hpmMqvGtGkLjiWXmfuo4LWngYWWjh6svTCZfVD5ePssykTHZKdH",
  "key20": "SozMAmbeQVjNPmBaLAw2GzdeukbhumaaLMJVYeGD1dKxiuibom7pcdfnQ7ZzbvWMhQRyM1C3aiS5mVzHaNTeZ3S",
  "key21": "fzyvsAtwbQgTNTskKE6U832gXmRUkSe5fDmCg1zxJejbsV7n5w7TPVPXjBcD62UynH3gb8Exo5eWayJAMetEZ8E",
  "key22": "2WUVp9EjfS3mkP9YBBm8RqzmrLBKC2ve4a5dbrriDoRb6ujALcKbTgHVkjojj5Hqr1JoJZzZv4BCW1LkNWfZMWXT",
  "key23": "243jCRrtGvJmNrovH2kBkfT7vHprh1gQ93xYNXhHBbUQgnZtEA7FtPSpBXQCnMDxPdiQSWPvgFb8HaW5n6tG7N4U",
  "key24": "2hVooDc2GhzD7sWfewRyS8NdomAdMTmCtKBtkFhSEybPYYf4wm3kHWyN4X4K6KrboUv4oFU4dxnuukQLJYmH9unf",
  "key25": "3KTeqyWNDt1mSaoF3GoFDQm2RvSFxCNwQ7dhy5ciar5EnyR6FFtMKgxG1QEu6rGavyWE47VLqKqRbFxFxxeiXXAk",
  "key26": "3D8MDovCMA5oX36bHq6M452zfRNwnm5uigmFDZ3uhYB18M1LqVME8o77cNPGy6snJYv4iCfaUfkCdWi34LBkJVSm",
  "key27": "4tuwoMNhcaLShJpMRThZnbuG1VAb8VUxzUBARnJLwk5RRo5ofmRnJVLFuuPyDF9UBMEFMKmu7uBuxWmzj9tAA1Sd",
  "key28": "JvkSQ9WfeFKUVYHvEXpVfh2BtXWg8fPVzHQCNqkg17eShs6GYvs5AUhxZgaPsz5yLsbZQMu1ciAiwPjT7Seyysm",
  "key29": "3rdGmpsfAK3Gjc73wRA1RktU6J7kQefBUm6AjMZengNBfEtFs28KuUZAxZqUWzzKYT2Rtt2ogKoJqMbceV25Nd3q",
  "key30": "5KSzhUqF1jnMqdb2pbQvAhBW13EhZVGhoqJufVEomzk7t3icktVZf85yoj1ZhDX4sokmopkV2GmXSZajqGcxu1Qg",
  "key31": "2wJ2DvDAMEv14yjqbfUDRDsPV5KqE4k3MACVXAguKwsENFZRwK5x8T59Ca6hmRwB9QF6vf88GySCCZqCoonZU4TE",
  "key32": "5qrs4m4fwPEYRhkGeVLRC2r421HM9jhKikxR8GCdNap5hZ6dWXHTYwrMhoFNYvr4aB4vR4MzECE1AHqurCxs4SX1",
  "key33": "4zDZU4GLrv8QfF8xxr597ToRPK8tSSF8474Tb3qdbw3BjvDLXthHt6nBfuCJDMxgkKpFvBtcfn49j8gnSJFZ4a1c",
  "key34": "5US2ZRoxm3msr6Q1PASUiGfE9WXNSkKpCkBziEzkizd8qLB6tBvgAJw6JATvtu3wQE95yjzza3JNYJdsrFe5Wg9r",
  "key35": "23tc5ebkpHBRzk5PKwQMDRVbrVhCtVhC5JWtPk1WeP88MbXhHjNp5hEivaymAgGFSmjmwM6bH4zfibPDnW5KeU9A",
  "key36": "2nxzKa9Psvwp9noA6MsKsuKTAZ2NA6uqsEQPQtLnXXVT8ZwD7zo53AMVTXRv4dcixvbkejsEHcQCU6z4t2tBfpdG",
  "key37": "2XSr9RjMVTMF3cqRvUjYqUEgX1zqENpzy8ydDQX4yosyazGkoTh99hUraHg93wD7FM58uZeHS7NcPdFv6b5qfUSs",
  "key38": "2P7vwfiXA1uZfsuKcKbg2RD9GbJMQSbQaS18B4VhCYCCUmp4TAShJvHZYSRbKLDtRb6FL2sDjzABt8HzmuKtE7Bh",
  "key39": "5fgpp916vD5MDnrX1EfvSpmkSrLeBQjArJTKAuW24FPaxbLNc9i9PFgcTKcq3LDEBJ7C8oHsivWy9AbfPTJ7PQNR",
  "key40": "5qL5tSpUQ88PyTahYZ2uztniZimsJRYu4F36HnRGjV2abXgCvztLpS1MJ4VjP4wLkrHaZdTgyxvAN8ZkSHCi2vhc",
  "key41": "vtyCXzgcdZNJqPWVe4aaoEHPdzBvfr3xBuaT9ek1wLzNeZSRH9fMmf48UEN1vYXSMmrX9fhRG4AQShx6xQKBMW6",
  "key42": "4ofaj2tXEPWZ1ez9C3xVFNFz7WTiuq6wZVwWNbSeoWGGnT4fBgRQbifFxjwRXjnaXDgfwpk7PUTwSo1RXFt9izwS",
  "key43": "5yCx6F5NwiMstLWdhyTSSwyYk4nRwZ9PwqnQB2FJX5Kp4tNKRpDfD3fD4T3N6WyB1JVQuK29Si79Zo2vZY3Rnz5Q"
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
