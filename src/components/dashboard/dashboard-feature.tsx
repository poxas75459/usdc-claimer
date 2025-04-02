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
    "4pDZuxqG8xEeFT14yq9AkANuJojAP1DiGXWDkN1w8WpYR2LNn3HzJEyCPBKn6jKmyTxN6YnwJMUfzimqBiN84TGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRRnMAFYu8B3GA8S19hFeBG585NDTvGbtvM3tXJKcz4PPZateofX3WLR8Gp1S7ywSf4mPQr3fkdwnqtBPTrjhdQ",
  "key1": "3rRHfTp7HLevgwN7mKKFXQQrvzmxRK9rgk2e1aFFWkqnwm3JHUgh8BqwDoMGRuGWkD15Y6TBZBU8h3VBDhp6Qnpd",
  "key2": "4rG1WRwALRBeMXU1o4ZM8f3JAmL5PHRQ7U6Md62pyAWybyujW2ZivfRCm3smNoPt27SAvL4LHy7S4JM8wJ3g5wob",
  "key3": "3MQgo1nUdLdvMekZfxBm6ZiKFXfT8h6n7vX1dRiUsxTmffmFm73iqRDvF472Gaj1bcvn8iwaSuvhR1KHnFVAhTCW",
  "key4": "5B7nFU8Q7LFEYbA7VzeAqMAtJLRVQRAnGavL9mz1jkFo9Fjfgp9UfFbMKsXzQjHhvYa3r3tR7tgK7nDKyfYmje1q",
  "key5": "2TDZjMe5WqndzfShrginrN6EaAoDhzeGUdMVf9y8yBK7KPqVbx2a2k8rJ9oEkh5oHuAMVaybJsJGgkySApWnJ3wL",
  "key6": "3hFf1tCUCpQWmzfFDGxy6zGtq43vQL5bhnXse6UH7m8E8peNt1ALoQ3Ws2v7xpyGAVtwQWDJb3wArWoYaKos45ix",
  "key7": "2JoKXvFFrHwHQhFmPGrsUFydskPJbq38bPw1j74yRc21s6qfDCYoWEEJjrP89YDtzR8ea7DigmEg74HcYM5x9aFg",
  "key8": "zzdFv1yiMcEP3sPeUU8hS7WMBEe4FihEsUHtZ1evaN2CzjeQBSzh9N4eEpdKerupnMiCwNwo7HgzMXfdQ1pGmoY",
  "key9": "HWyvDvMajzMEUB11h3ExZh6VKtYpr8wuQJSZ3TSnZ7ta9bWodXeTR2bANGnFhdQt9oU23mqRxxoy6HkRwxy2H8b",
  "key10": "5VaNir6jxigsWRogHJxYkrRkw8n2oezmTk4ut7pey71nLurVC1g3dBPnFHG3oQyx3nQYK7AQh2N8rwXbqKD6oEJc",
  "key11": "4wiKKD8awzmk6dsrisiAvJfipmdk3Sp7EjHPhzy3QwpT1U2n3QRxzX3MJiUdUXygc79D2ZXzpBLaVf9yxwQnZqko",
  "key12": "4C78yuqHbw3RCKNHsRaADXHncFWr9GXGw29anJeuLjuXGhkKq4ztqRSu1XwbJiffFgLmpzLd2b1NU35K1xJQu2bf",
  "key13": "2wJ5M4Lmde28ZJJQgWsH9pe3SLzwKsvvMegD7bsmXba9fZDeSp9UV7kjUGQDMWZLmU7YCEy2RnY2X6EoZrDWqEms",
  "key14": "3GtwCSmEQFfUor9mkx9A9j4uzv625yA5cneD5DJpVtFTPjwsYdSm7LXweE8T5c8M94TMfJPhtMp996kugkFUamDQ",
  "key15": "PQRyZ3YwHUkJDS1vV9QpuhvpiZX4hD2eMkEHsg6DvccXf4aJ8yWT5PTiGtio8azXiWprurGegJ1EEajA4WsLg8K",
  "key16": "47g5KQRecm7gh59ymhFtZw1FdGVkJzntjZfe6dZzxiw4VQnxhwCBuUeRdjZ6RYiXdzn2zpn9Svcr12aDHJmaJDxA",
  "key17": "4beNtZW7VE3iMrPZLuUZ5E4DW3q7v9FhgQ6wRdSbG1UzwUPVQjYYTLyEJPSesYEBrL6rZwwuFCUGGoDdjbVqv1Df",
  "key18": "2ymjr1gbaDcNDgdmunLRNVaPJpsR6YqeXcyu78N5PgN4mgzNH47qmoo23QWgEE18TTLr97uW4MkABkGHhV8ShMon",
  "key19": "2CfZBrBCUwbD9wscwLXBAapgoqjiTNVqhyKovhwYS3Xb51WYXfAMwaZEBbQdtNrNdUZMudgTDp1btYGHnq3nnvne",
  "key20": "2JgiQfYj3DGdbHYZT3xKZsw3uX8BYrCq93PkDfpZFyCwbv8aZs24XfimvC8PXPimMoJ9DfCcBvQVHV2pwBN5sHJ3",
  "key21": "2F9pHXNPTp7YzWCWBJpphxfWnohBtezQWSiJ6hJmpmLGnWniZsqAyLpDaoQdYLHM8XuXmWeaof6n3cvhn1692wjK",
  "key22": "2K6e3AjT3DYaLBQDiHiU5yNKdCx3tpMfrZy1B5pnHNdVuXTGjA6QMJviH4Ds3NdQxqM22qkMmYoLAPPMKTnFbM4C",
  "key23": "2Uch2L2PZGUe26JVDza9kHXGXDyS8R7yzz77Mck8SxxfTkMo1KApHKLaabJBsY8GCDsR7N2Ax2gt2wdnsRtRvygc",
  "key24": "c3PhafYszHBXYwmi2f4pCcwJMAUrzfBdfZUsSqy3MDk3yheqxye9uK8uUKbUGpyRiWxsZSvpWB5sB2uzShaWjqj",
  "key25": "2AKHC12n1Jt8UFKoFXR65hkVCLC9RAETPtPE7jHBWbKX6YxTH1u9DPXRMiDiactiNvMcLQnFFRM5oikAZHERHT8u",
  "key26": "b7HuHFtyez7vbExmZgunkiWm4LZmF8HsW71KFyXZ9B2JvEr9h2orJGniCK39gzt4iH5ouwA7CMVGPRZe7bifPMT",
  "key27": "21BvAS8yix2WUw25tCG61623y7V5cqQefviDEJ6Q7L3pNT5NuvjDYetnRWRyQD44X1kypHvi4vS2WiFG7m7Dqt11",
  "key28": "KveLGHjwbCYpYGqTxi3yncCBikEy4dGpKJGptgk4DoEJXknRnJqjEbEo1T7xwQQgTJwB71PwsW3PMsMzuQW6zX8"
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
