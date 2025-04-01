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
    "3AdKJRQbsgffE9BJxQzNvYRozwhEHgZpit2J7MDxwqLEXQWA61Vw9QeqBynFHXSyK2TfHoPsHSwUez5GY1nHFCKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgXuxVTfMUwdnPzEjJkzFKYWcQMy5Fbpobeg1zm5Xspm5J5nsaLUqXJGtjt9etcs1R6ZZkygzv69DYDqskCBfMU",
  "key1": "4LahurwxUiNqdTf1H2Dxe4svKAXVMcTXRMsW9znqn8RRoFQTn9kgSEhptJhVBKC7SuGDjA2YUgoDhhZ7WU5G5FN5",
  "key2": "2QztQTmfD2KCHCwGJ4QgbYxkSzNGJDj8NS4VELty2DVYGeR8xPE1ENeCwaYGgFbpXv2Q3r5J7euXfwDEEqGzvSMc",
  "key3": "3FMxHSwoyAzdLhopgeTfXtgRsY9e3ETHyNoHT6WhNdMLc3uCHXoK5YeUnyzFcaLJ5VK1ouMTeirCQshWH4cWQyXF",
  "key4": "22omXzJBtH9PjWLEjtLfdejTKQ9Ny3uNtx9Po1EXWp7N8PcdxjUZkYU1XJ1zZevZDYgBxzzbnDhMkAv5CcH2o2K7",
  "key5": "5drZwr8qRJhDUQo9bLjjtCQmdcuoGMevQE57pRdE46pQgDeLuhHLYqT5ebBoBsiJ3ZsUfu8F6zKehWvgNtjNubXM",
  "key6": "4b1h2gekProG6Nw7C8MJrz92SCrLuwmcaEjJ76WeVB1xQdXr32z2cHYxvJbnZYgVZriAMi6kon6UyegD3u4nYRKR",
  "key7": "2MT5DGSrXNtzmyXTxZ1snGPgPaBwDWiozmHnRF6wn1bk8SyxJtFVyKoaSA9832azXKn2r3f7K5D6rKjXpcDAM5jM",
  "key8": "e62nS59QLjorMosWdbrdXECLpJ9BYZqbUQDbUo4oxMuv1rbnxvQSvyQtpNtrsg8nDbQxreNU8yK9EpnRJgLgFqx",
  "key9": "5vDy35eH8NkmSxmqXEafHhUnfPaEj59swD47iGxoqaPW2f5auBU875PhzAjACn3dPDQYfpranA5Zf1HgpVNNF62b",
  "key10": "2WKnvWutVBUgjPWwucCjmeCQKckJqr1bp3J9RDZTy4Fs9BkFFvkwci4Z5UPiDvcBG3pgGVXBS3x8GuumCqGAEkz",
  "key11": "35XwPtpeqyTZ5uYaBYV1wzH2UPY3cv4ZyZnPPCpuYGTq5ZoXaMhB9KvG8rVcAccxF4N2WSUAoqpyG7Mfkke4dcmH",
  "key12": "34dDdg2iTbhTLRj85BxGhbHJzdrrxPQU4ry3itE3Q8FQu5VDFMYX3eNUXqp4c1mCvSprNWdTLD2nLGcuhWa1FNp9",
  "key13": "3KBKXEcUxRN3vEgBDSAHaKzmjkgcZCK5ZkGwvSGgx6Mtchf8UgZ1fCyhxzcvhn11cJBZtQfzURAdvgb7SBgBVM8i",
  "key14": "4ar5FuB3Mwh5Ri81mtE9dsyAzMwnZ1pcWg34t4FueMjwT5AJjwymxe6a7c1m4FSNiN1wqoKGmJ2g6mS7ToWzJghz",
  "key15": "jDiubfh98KtqPyVwC6zs5ajEw3e1ooj3gfBghqf8p18jzQXG9UL5CgpE8mAzUTkDUsxNmw49Wwhvq5fiNiEr34C",
  "key16": "3osQ7826z2WbVqKJhsvBbVyWjeJKV6xhGJrB8MFR9ZsPKgepXTsUFJPDrFe2gMqGB3wG5gzwmYn2F5VEEMmouPb",
  "key17": "vuBMingEDdMPpNNJzdG4JMVRvuzDsbHbwVf5K1KxY9WiQ3tU6Qh135DmgjnNkJkXxAYFpfZZmo7iKhcMr5BmZj2",
  "key18": "51yMqRH7DM7oHziFjinNQpVu9ovGnnKAL8ixVpqhkjCfCRriwCQ1p1i5pmbuBAwaE8xnteCYRbXmcR6h2JCS7dyH",
  "key19": "3aAovGKsK6jQUWiDuWPFfv8mEfDMJ9YTEQePXuGqnqMbkZtMcWpWyCN62LLQofCvWkCdehmhpUj5zDmHRHYEv16R",
  "key20": "5USfb9WHiqmZkp3JSWdsz7YTKrzRqAs4pCVzUnGBAVC1UzHiGHpwNy8RTzkZAduYV2iLgQjnphXU1G2yxf8LvxaM",
  "key21": "3gfEDMJQBgvWo1kqrQUYZP5mwNoCdkf2TEXqtKWbghqLQQKkpTyDMCxT7nv6PBx1NcD5Wm7D6aaxSJK7u2qm5vPv",
  "key22": "TZ5d2pV6o4DdWTk621vzrLUhooNR1ehLqVoAUu27u19QQnPeU8inrpb6gsRGTuyPfnvvhqwFtnqMahEcdyDnxhs",
  "key23": "5nZc4kZsfZxhyRLtzxZNaKQNZVop8zHcaG6VgGAkeD2dSb6FjrqG3gNA5UKVp84nXoBs5tAVJ61xoTRjwdF8ayXP",
  "key24": "V7Gq7mq53xGpV3tAAEQMHeA17M9T1p7MRzC7tgUsfgCag78nzprzCE2mZFzoNmTPuT17p47rtWjkiqACsJMPqUk",
  "key25": "3Wb1Rga8hQe88bTNSVGSqvXdsMTRV7jPgZmudNQyp5wYhjC4tgxXr47i98jr3eCCh6WjNAX9KVa144s44auxBG2U",
  "key26": "4fXhPKJXrjF15JQifBceawMRtXde12C9RyXKpwngdcKGHKQ54QN2Ln3WtzEXg82nUbr1LeACM9tvwyhjwQY6cKJR",
  "key27": "3tVeQ4Mgpvkfw2hHSbvp6KyQzjfzxFwCLpKGahDsn4HsLjhvopSivjHUxkoMbFySKwEiMy11kqJBwrJyaXJV2bAo",
  "key28": "VZ4uVHZfjQ1J3fruvUFRLDjFXXM7DAb5vCo2RfKo5aCUzqDVWZVXVpbcfvkde3V3jbmCK7CakQPhHeQhYvJdrM6",
  "key29": "3wgogoBVMtP4VQncLHbkcc6ZZj6aM896rxYivVqgywsFMjq615nqFx7wn8HBp4qjUaGU61sUN1aqY4iAM8zrKEm9",
  "key30": "2V2bVZ1vTHpWuaADKySma4pc8WeBZpZnaQDs8mtX3DFoQ5pQhYLFVAvTpbEcfeBH5nNSdzy8R7MMehQim5DkmN95",
  "key31": "2fvJkpubYWqx7ipoiR7kXYMMdYLeZWBKhsseW551DeNGSmBwiJTrrwoefbbp5ddit1WKdFnmDiCWieU6R76MrMhH"
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
