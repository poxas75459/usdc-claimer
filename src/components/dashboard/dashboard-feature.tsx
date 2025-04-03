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
    "3AGAA5JPDxkWxmmDRL2Uh8MRgkPnPQJCv8RrommgahPTjqUp9UbmupmrahsSTSx77fEUkC75Wf9t1VfodvmDP3xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AwcJ5GiwbLZ4uejxuxQqMhUPkpMiN5dxWRWDfgcDB9DARCn88YY8cufJLdvb9fz34xhAW6yvx15uJELrwPaTmvZ",
  "key1": "24sarAkRZYeuUgPFKR72qMzXF78JADLZrL2cofSFWx5zCP33PSZuSmBG683iUsD5qKt4mevH9TBDsJw6wobogHRG",
  "key2": "5gemAH2FrftRNistTuGpqgPaTCwDK73NQDSVLABRnvaCyVJWWVkrFs1UaLMBQ9yMefbnvZH1jqocaCSthMErnUjn",
  "key3": "41wrUiB8sZ5W8u8AkhqfSGSGGA19G9Bt1sFqS192MKbABtEHdKSw5SXRA81EKDPTZvMdHVYmrFJch6WyqEDrE3q2",
  "key4": "63Hmwo1wiy4bLH6uCbBFN3eysFqPb1emrcspuq7noR27MFDDbBA5njz2RoNWqhtzGSo9d2RaJURrpHN9UuMJtUAU",
  "key5": "3dyt42mJU6up8HKiuV3Hbuu1SoH3jU7imzJQ7CVHY7cYvR8c9r4YuwRdhezewagZSwaSq9J7TDFibJgEjScT6hbp",
  "key6": "5k8yox4xTTknKqiiEURjcZo8Ety6pvq5WU3fYXkFgot5FNR1YnGwh1FCBqVCFSRoSLHJe77Z9KJm87tiVNcHyQ72",
  "key7": "YCUyWJTVrn4eNbKe3mnjY18WxXrijbvBDJ7kCf468kggnwGFJ2eMHaFN4tNptzZ1Ymr2P9qQgxAfLa1MR11P64a",
  "key8": "2GQhiMz6AUbpzfTWxaH1gDLtHNLpcooaSTbEsDFTMd6kfeFMCjREaG4FZRPTbP9cBWVXFibpjkihn6kbWTct8a1A",
  "key9": "4d4XRqojvYzBhPPoCFQWP9KG4Qe62NQCmxNbgunzqZ8ezp7uVdH7FvvXu7wmj287ACAVta95gUK8wTgDQGgY4wmt",
  "key10": "5p8uzNnXF6kdpHdDbqX9MsnUjrxUeAQNDXX2YGqUVS7YXc5y41UZQSHrEd5r3cajHKgn6x9zg5KCLxicuNrHLKnx",
  "key11": "4wQ5jmSgAoL9VpxZMi7eRZBip9d7b5CAwek7Fa4xfZhpTMxuuKkuhu8yyGoc53V22sGf871VbhcCWB3T4iiMJ2tY",
  "key12": "4wJp5SppUdVYDbsADxoY1fjNDxLjLnE5CEvNbrCc9NkDrb8LJEsABbgfHkRJBfJq9Z1zwiZQs1bWqy2vtrSbPpKf",
  "key13": "39GtzFiZR4HMfAQHKAPwEeGmyqYc5AGE2gVbv6xfytu3KVN8J7mPZ87121jA5ywdidkr1dAT6sK3UwCVPbvPSMGb",
  "key14": "14gkL8LAsmTtxzDScFMmSupJ2hbhLFb4F8hJVVagbRfzgRzxrQJEjP4Pp3cozVEFVBRFHiTQxBJQCYk3G4j3xhE",
  "key15": "2zYjXTM4mjNnFaw5Ng1ksf9poRuwyBypHhnnqrEgbpX3ZsAxnSZEidGPVCSrHYvT5hQSf6ypCYYdMxt5rykeqQFM",
  "key16": "3Mg5bP25S7C1iESkoxttYofB3Pszqf2ZQeMtngWegcWLu6NBqSmS2TdJFGE2Zt6P62fY5WgqCU2UgPGhJnr51XKj",
  "key17": "5u7u3QNFNK1z9KARwbpZ9SrGA4byPnKZNkGZtFmj6duXtBX2erkUKH8Tsz7LtD49bYdLPYnukLvm6WzJSsqZD9Bn",
  "key18": "bg7GJrGzRVnkKiyiWkAoLk2HdnrWyhtW2d2z5fHhtBiDze5sEyWpqczu3N28yhADm1qQ2WYQJcnu3bS3zeLKbaG",
  "key19": "3gjZ7sFwpTKhCVNT7RWWJDmSrz1e5Vmni5AGfZaiJEEMT35x3WwNq6okY9uxScKc5ibaNyLj6Z37vskqaiYPyPpY",
  "key20": "49UR838DxAg3WKaSWoPgJcGVbcrQpi9nmnRVN77MtG7FAgvNqxk9yjXDZ2sfeKPfSJY4JyV23MQi3whpkbeGyPAP",
  "key21": "5aUUK27gJov2UPkoGxvNVZUEFfYG9DVjijqG8svy7TArH9KLtVeHNqYKg3dXVuA5nJXw5bp9fj6pkPRPNUGjap3T",
  "key22": "46wnwweFsi1WmJGgMT155fLVfBoKu7ZzRfKCugnrytAKTE54FCMT8sEM76spNTWWkx7DxQEUQzMxBHUmJRbjXQ7C",
  "key23": "dX4WRQhSEmTwq7H6oK1Gn3idnLgsDer7UJzj2c3PikzufBzbwJPfYHULwRPbYCwWKC7fE5sro8iQV6M4mSRTRfq",
  "key24": "buVMaovepyUagTV5ejPfGXGNzUis9a3nv7Cg7EZNcs5bXo12prfXyUynA6aj6C6ZxWME9iiwEdfuuB5nkBVB2gr",
  "key25": "5pA1x2bdkCHT6edkwnGyh7GFTuZRGYGb4k7h34SpBZKcXbGn4Uw1jWbc6FzvQPzKfesXKYRcYAzoasgcYjv1wKUR",
  "key26": "ykjYLEAT6rW9Rvm1onKdrBDyQrPkW4QjQ8jG6Pb6Gko5CjHjzQJkzv28bhNiUUhov8ZaS8UFZnvBMGE9qmA5F4z",
  "key27": "3jB6GgXdMKP5QKFYcQRg7zZqLNkZQHQBeMqiaXKaapa6MrPxeudJnu9NwP18uKk1yJch4HQVFomSR8ihyBrwCnhu",
  "key28": "21Fh4k9mezLUSJv74Pc1VLZRULMAyUGvJLANeVbrVpVVU4rtcZq47dbSuN1vtWkNFrvWQVhTNSWmUoqkojCtPoSH",
  "key29": "5q9ed6UCh6vjEP21sjq18hGuBchySN4Sn9wJZueeu4CJJ72EsmpRZzzkFgFuq1ajwP3YVHgSW3SWHrMbtb1Bu1TQ",
  "key30": "vUeQFsBEN8kJ31SWRz9yx28CswYgLR474sRyiSDdQrQMFXZNm3fwX5diCRPSkc2KtkebRQvu4bsjFUc3m3BVztS",
  "key31": "3p7bUrEWSRZwmxjtEn4M31Ca1vuBsa9SVmJU1NQHvGqMhTRj3uNteLwPCSzEYPbvvQ8mmf1YhYFZphEDno2yDw98",
  "key32": "Qo4T3hHc6fkKSgPXBoEzxiJ6sKEori1CBpmqyLmxTVcWMWGkPLPPG4wSBwsLuejnKDo9fcB7mWugxzHSRbFuhaV",
  "key33": "24B1ByCg5kKs4DC485GgLFRRfCK9prQ3vJrMoELUm8J3KeuxjEWRWLDL7tKycJqPxqfAJRXxTXFkVmjWKY2as5fs",
  "key34": "2cZN7JkZChdpJuAHCaEYsJhZC8jU4EfvqkKeEtyDKXHFYgBprPYif37huJcKWPvW7r6HY1WdJVoztPWumbpHR7mo",
  "key35": "5YsfgVyhaMGJTg7kYPXNsYNHw8khmjx9a1vkC8YWKi6joN82ZJxy1QjeNdXcUENaCDzokZEAqzhv9HAbq3Trpwhu",
  "key36": "4iLWBzPKnPcLyxtqSKTcxrNrJEQQu6bkrDGjnjiYw4tRy1pQWNBdsJRzL5mjVfNwaiUSMcqpf1n2VgWg6Lgi8BkU",
  "key37": "2wYbQSKAGbaE3BUfzJ5dXFZXSnJGoA6LgPqdyEUfP5SUo7sZgbChB2Zp46BGpn5gumPyc3uwYUtCkdx7uALB2gcS",
  "key38": "2HrcFPFS8XaBNJDekYDtmXucfbh4exPU39ckcazGmK8wvXdZQJA53fQYWBBmyagcrMKtdwgfD5XnSr3uUrgxPdzb",
  "key39": "3h52ofeSV8koN2Gih3zUMJBDF6UM3seDiCM5rarser7yzUgYUrGZ3XSFvspEfvmpy4yhACB6AxbfjMKnuGVKBsUU",
  "key40": "3c2tViqS88PvXmboGLzWsJkawGSkMr1kKoFHWqiYSgTWXj21rvt5QgAYv1SXQVsb6DAEqUu91JKsffVUjrAXHE5n",
  "key41": "ZMJ1pefbp96P3iYw724Cnj6ZkLsEvamjYVctFLMazkABsfgBVoMBCoeEebyB7APaYzknR3j1XUwxx3bTuhjfU9X"
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
