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
    "4TQNVCsFEtQznTf5YD6nyLAGzP6rdBm4SecCh4bDyF4mywT5c5MC1tkk6u6ovov6PG679PfqAEaupg8e4ABNiRcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qwxViqA3DEqzqrUaCJ7f7jsenwv5BUJ7D8SMb7VH3czMssxpQXH23qpX2bLbDNg67MRhA9xdSgSWtKo7XvkBznc",
  "key1": "QhqnuXjHKXCRcpgETAeCYvsHX2ahvtdZ2XjT6kfbgszbH47h66YgT9iiZnbdvaqCqCcZBaYKDnazygSQMHASHDW",
  "key2": "5Ume4Kq7vWJSagn7U5cHT52DZ23T7BdeJkDbbkdS2x1w6mUuTSnY46LR95MgDuateDtwQ8HsT3BRUWJ5cKz4vDSC",
  "key3": "yebojzXnBMXvV1oEVg4KkPGbSb5VwXnpYJBTVsiwaw6XLH6EYUShPCfH88TGTsMQQHZ8u42FbTKmU6XZYG2js18",
  "key4": "5qmSCJnzSfLLfFYEgCX78RcBtmXnaMfMtNXPaYKGo7AwmVhWTB95mna4h5ygzqzWQfbFB9TqFTVMgtEVY6qut8sj",
  "key5": "4MezWwMchaXQ1hW6JGTR7qbpzHTBsAHfeTyEsbkEHzvdjGtMUEKYF6NDnHCnLsvRocwYETdYp8tMQcbWadJnGsJz",
  "key6": "2NRV6xD1wWMMry5y63Qmg5PGNjLskEjQEWqNLVe8FNjjUWCcG1Y5jE96AdQBfS6GcR3rfMjKEBYABz4AjARH6KzN",
  "key7": "2ApTUpzqw5GkAJSEtvRtrTjNdHKkvRH86W4EsozjMTDi1Ux2i5sj3XeXzv9AW3DQQn32XVrtaZpA6At8zYcFzZ9Q",
  "key8": "66cv87tKruwn3mFcrVCLdKCbX5UVEgba5nbTxCnZz15FewCtAbWzs4faVGRuTrAhHLkbYgr6epWsRoRGTepwWqit",
  "key9": "2V1G67f8jrefnaFxEkHZMLvyDvDttZdaVYAB69McBXGm1vW71Srfkhy9nzpkFZjeAEJ71sP5J7HsXUJAAkEnAD75",
  "key10": "RjGpP6mGY28gsk58Uq9Yt7LeD4NudbVE4ji8eyJg1pr6Xs49gvFC3QNyvkEuxywuoUTij5E13zmehP8eQSobX2z",
  "key11": "65YDRhGyrWhTB5rPyTVePo7onbbBSZa16tAtGMMURptUB7iwPR9oN63FxgYx2wZTNMcrEDukBkZ14MqDbFg6UUDL",
  "key12": "47FSK2zSNd9ZCXXDys2JGVMUnQWn3bqMXBJEnJgc75m9Zct8tA3yeQa5U6XRjX9kbngesf3XdghqPT8MQoi1TCgt",
  "key13": "24SWFwZAdVKzuZQdsvLo3NG8VPdaNZcGMrpdjG3vtQaf4SDJAsC1e4pMEqKMgWbt33QyDiJjSTsv94iyUESDUv3B",
  "key14": "xvMWZEaJhwP6d3JApRuKjUbySED4ws5XZJQVsE1BSHKpFevwtsQW4FY2z8w4UXT3rVvf8JJzQxwQzPhif5a8Mea",
  "key15": "27dYLFpgTKCTHMxnEXfb8gEWF4xbqvTP2ew23YpCWqcVVivrzgSKF9noW4oCTKowWppKHTF9tamU7DXWtScXBzY9",
  "key16": "3uQLcKYNdH56wnHygja3ZtifGYStR8s7ttF5Szm9LARuEzd2M5TTNvK9LikNAzUgSn4wYSG6hQzK1zMqgeM7X7Lk",
  "key17": "4YJ26wuLDE6Z6YihREcWC9Mfz9EVJ1Fa9qPckucZAABMwZR7sR1SUFYNa8Miwmgup5Ji1w6ZqZDX2e1DgJyGa7b",
  "key18": "2HxPruPhCPVK3ksv4txVNyWT1NXNozufvuzt7Wrts6vffVk7AJWKVmFKQKhPAdN1xV8DTL8MgH3DxAGXmuVdUJa1",
  "key19": "eCcA1GG69HQ8Acyd2bCjiBCF3wLBYNdEdj6ZrrZJ5UMg1BEQF8ywTWobGMdJbu8PgYNzoouMBkjx2EPXWVPmSGV",
  "key20": "3wamfbc2dNQraRSmn94S35ovZC2QUL6wUmuaQhM69AK1F2X6nBjrh3aiYnAzKqzdwKL4uFaSb9ssgNx9NDJeCCGr",
  "key21": "5zuhwrHJhsRYHVRVNw8xKDKppBQDN7DKsR47XqzMkqEpj4wF5jSZj5B1z3cUTNKpsqx3wMaV2pUKbtD1pyA8LSM",
  "key22": "4Qafhn3ZphojHqkhkf64mh5TfRWvGNmvAARCNbvP2P5mh2y683MknD9FTY4inJrjnTeMHqAR64EwiGQW4nc87kGq",
  "key23": "4GLacXPmb6sjRzunDzFvL83rg516om93ZhuyVKkdTyEFrU4dwqj7q9PN5XPZfkNd5G1JkwpXekjgA8wsmk3TmJQJ",
  "key24": "4UEtibtQnEzcU4zV8sojBNQBKfcqaBEwMm1bsrhKFhgSBinGxNZvABc1SaHafBoTkmKDpoQhboJ1R8Wke3gSPykD",
  "key25": "3U819yuESCmYCmYJxfSjmHoYSyGQJJZAJSTdajMKwZ37Q3LGPm2nwVHiydp37HzLwhUStq2NMmiebJvQNZpYshwM",
  "key26": "2RbjTNJ4GDEb6YTqmMB5EDAsupSPL2uPfQ5cDFhGnZ6pZTmGBJgoLcA448Rf63iuanUdN5ZeqJSBgUHbhAWssLwS",
  "key27": "5qZnLpm2MRG2te5CHhnFEFHstvrt4iLTVjKkw1yM1YQtArbbf93Kb8P5MvsP2ATkxzGbnHFLCAokRJgdGjTjyfCS",
  "key28": "3SeMjhW2Picp4uttbmc4Evk2aBES7FMKXrxYj2w7R3ts2wvN3ZDCQjQGDXuqoM4ECgpBQ3MDcidaLiWo9fTVWpkJ",
  "key29": "o8Z1ELrpnbDUJzY9zF3Ne42TA9TeyeiTpFCNY3HPkrB2B9DiNy2UJqw7UeFKsRF4hEqtt9qxgdaV6tuRBjAnJ1h"
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
