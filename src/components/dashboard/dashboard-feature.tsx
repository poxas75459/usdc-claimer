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
    "2caxFLJ7AfbiXSKh2Mis6BYbzMuV1w5jjRzWpFp1qmv9T5bd45XAJv8F4jL5cu7KB69Rt8aK1PiYunLaCc2UiNXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K4pHqKhFgSRZ5BeLRPRTDbtfpt3Ya9FR6KVeyJXBrfy8kg79GjgPSBiyG6G3LQAkkSJxfuostUmKqj4GMqMyq8V",
  "key1": "5XvSzeqpS2A7UaQ5738PEW6Uih6S25sVZyzmFobEKDpsQ8dHzodYtCXbTHcZT8Vriz6gSJPo8yuez3MLvg7saDMV",
  "key2": "4GTMpiMwC1DHPJ9J3jb2DGd7EqbeCDMjEs3uAxJ1kK6j73auFn5Ewi7CwywL4GFTPVybwtUQgAYqCGJtUfS1w1Qk",
  "key3": "3ShVte1NtURwYiijrg5nrFxJj4Snwnm43ENbcdtaRrKbs8ybURkZeb4KKjbFJBz5PQTWzDatosTdip1paqgvNWXX",
  "key4": "5exoKBRDS8kvFYRCcQA6yDe1AyL4k4bLMHXp67xrazRxnSpMUrqhSaLyzuwMGDdCni8mXFone6Jg7LUfSFiu1caN",
  "key5": "2pBssXb6dhopA9sX6dhPr1PtPYBxrrT9YTRotZPCQxwMXCTQzinCTsG9a5a6gVvs2juP1F1YfeDPyntMpRAPsmHq",
  "key6": "2ZmYnJ3Jtir3zG4ssG2nP2nfv1niNxRNt2bMhwoCcx38USHgoymS7HsgwRopj8jMMKTtfQJsaqy1w7uYQeLEHhej",
  "key7": "32KmUSEFMFgvo2HVPtSLxEmx21R4XAXMn5SWgbyzmFZ1G2A3uzeAX5AYh3uoFYa5nG8XYNcj3mJD41mJanfWuk4k",
  "key8": "3nNfPxmdNhwRHutYtCgXGdEdeubrun4QXWcZ4ve5RJ8bxPBS7XQXi8vrxsJ9C4oVyznu3oACwffBaij7sipCW3B5",
  "key9": "2T6R4ETa2F7zqik7LjCf9aBxCTPMcvGgrDQWp3YkumYt9THYFvAABXunxnD4DBDnKq23q8tJLpj9aT6btRtS44Lw",
  "key10": "4nid6KCaf3ySD1e9sBAdAHr2BPdCYFXwBWyWs44XwPhQgx1Yzw2YE8hKWs6BFx2ZeL6NHChe3AHgsdjz9nnbyyaq",
  "key11": "4XEw6NCeKgExnyz7MB36KTGrkHxaVx3FQVzwu9GSxKnNR5oWB9gU4mZ2y57U2Wz9u6hBEfSrwTP4XNj66uDYfSZt",
  "key12": "2zQzg3y7jD6phdNUVdbM3hzLjkeZVb2tqTadCAQomTDmESo1fvdwPZAFKsKXCkbZgjiaK3VsN7pd2NMv8fRpwDYf",
  "key13": "5xyfVdZDykuq4HvKDXhVWbYH3ojWHRqK5mj25Wev7kpUhCPPP6Zp3n3Z687B8d1is7tCUjvbWDa5awppKpN6f1XU",
  "key14": "5J9Zw8GxcDfPsPVdFkzaMnavKbFmCvTUzpvn7KVhueDpCYWUaAFWedWqR7vzNLdgWGC1KiHvb3K6zJmeRsugbXuU",
  "key15": "23UK6ixY1WgxshwDzaQCzogyaxddDanDNpdMWXDosoUJPvH6v7D3sLHRSb3PRHuSkoKPvAkZTA3N8ZizCVLdFiLy",
  "key16": "25zw5xJAQN5UUcdR5PYjUUiB7wbuFA81tk4uEHoKtH32r4FMpCg3QHp6GVwZJEU56UDHAvp7uKnixr2ezCjddHji",
  "key17": "5W7Enury9SFcTwJDBsTBF5vgMZ1uY5EZgp7VUG2Lknbf7JjGStKLvDVS2DpctFbwwfg7WVw8kdgVmjywdHbjF4KJ",
  "key18": "47JPfWg9p5WqxJY1KWrnw489WGbMeziHqEgiPmeGZo7XEJ7EVpRFiGvKyeKAxvBc344e8pspNXwPqxFRgdRjEarV",
  "key19": "4GsX7Vi7Yyzd9qzaXx5sqT3Z3XFQWeGrHWcjM7Tm8bMjqjwtLSnLyqynvGaiZ6C3N78GL2qSPMQ8Y7ShbqNVpnir",
  "key20": "4vxHRTcF9HsdkuJjC7wcovQeuWaLRwuX3WqdJHyoszQhc6Wq5mfHozwVBkzHbghsg14FfqG3WqQgNbt6uUpsbD5h",
  "key21": "3sueW66Gsyfxwfd4G9M9U5UzUVw1adMTFmrdT4Y9VyfQKpCCLihiLYuSJaBmExLi8on4rgJv8vimHg671BKzexkR",
  "key22": "VNjAoau4gJ8XaAUvTUGGDjkJ5z41WNSuBFJVK9XtGnDACVwiS7xKSQh9zvDzgN4HdAo2gdunJpWnZzbHqtYrMbc",
  "key23": "22Rum8aPWkxSYG63Sj269YN7bTPBtU4WTyYMrhVFR3f6anoXK4agMGHjxMuvYPnXMJsWcxchji5TfN75qrmoECgm",
  "key24": "65u6Pc4eT8ud7v2n8zNQcxDyrBDQhst8bEPdh95eyovFsw5SoV68PiAhwMuNdxjFinijtEo5q9Hnc6iN6SoFfVgZ",
  "key25": "4sep84S2WnuVkqovPkrKQY1yaeuacmMUm55bxuBF3RLRc2VNgbJW9gMAWbRQs3jHgzNk1MkdgPP5Xu9a9LGcZkGn",
  "key26": "3kGv9mi1u9F65nSG2LtFgmixXqjETkaDyda1W3MSBLVosDcxCpnSU4p7UHnVkNEfnysMVM3bEjaFPmD3pzWcxXHk",
  "key27": "aNRJpai2qVNXmzFhaG2XKH17d2ZdjWeh7skPQxxk4NxQFgyTc8QSpum4y3Li3KVEkmsyVRTQKV7sgXShVx9w4yx",
  "key28": "2gChfDQatP6hL39WZPcfJpzMufhbDtwnZ2oRHVNefysSWAy8zkp4Dep42iMYF338m5pYEMsXL8w77u3XuwxZ9U5P",
  "key29": "9x7k9YiqrgEufDBK1iD6PGTmHvZUuS5wb3u4NoffoU8FMyuyMvnMhT6YS7idHxcz6ym6eEwodHUAGooNnM35x3N",
  "key30": "5iyvLDW3NasJQ2puJh4DXDxHKqtowtv1EmoVo46LRhmJFpQ3gFeptpDAbkpATZgZRc9yueN8TvWhQXDAHL8cr2Uq",
  "key31": "5fk3fGBbWW9GjBJfDKgvXQDgwqbtWxkCCqL62rYJBqAvFBxjqLXdcT9YG6hmAsxKrZHMuTCfbhCJX3tHj9TsKC47",
  "key32": "2PZn2CENZvWhGFagAhPM6H1MW78GLxc6E4LJsuPLiKh1G2XXR9gfHxVWfESa4UvhEZeCb3w424e7EZcfo8qtYdzX",
  "key33": "5Vq8G5ztSYz7RLdDFwjtx1RL9bsysc7S5bf6gasDziQ8k7tKy2HewCbMJe65tiXndqKXqN5kg1WJd3ohNt9KDsPr"
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
