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
    "67SLeUNbEKKw4cxWKQifpQRjFpWpXsaUk2RkJcBjX2LiNoerKHXmfqpJBFzk6vUfF5St2aP4G3EdATaGhAGFgUe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ev3F2JJE9roGjcdzsXNrht3MR4W1ZuN6kxZSyAYj274DXsiUmibSDxepPNLTqx3XLtcEDV4RNsNyFQWssEREHzY",
  "key1": "3HYek6zD5pSgY5GDGv1ztRU5f6vQkkvSstveJcv6dWnisyhKZrUD8uQo1MgPHS67pcV6k8jnUf1cJF2KV6iogxKa",
  "key2": "2uaSSo95HfjvTT8Hk4PtFvVjhWRUorUL8A5HiNrn9WTwvsYri5Zkm4UU9R78XwuDpmuanNJ1D6ojwn9ft4prwvCy",
  "key3": "5docec3uNZHYBGWbsrrSvJ24BFcMu2167d7gUVA6scdVryuHHAviQdRirPemzxzEavgDKc4VwKLs2JV4dsdDx8C1",
  "key4": "MJRDweC2viqHDbTYTUbFDQB8TzRnJVfTfc6gyXictmQf9T2pc2ssGzJqz1nvUZJDCK1mLFJDbiPby15bKWRFkPJ",
  "key5": "2XUhkixjkfDMRxn5jpdYvxCAo2ZvuXbLwE76QJvU6MffcxS98jPjmZQ9oiUzjPDvuD1BFW9YxDx3gAHWNWQ5zDs4",
  "key6": "cGHqzWbGrQTfpsXzP4MdfcWMrTmmYvtU3nV2Ne2QLVKhkxHFFaZE4vsPwvp6EsxA7TcU78XK4XtjHct4EQi54GX",
  "key7": "2beyPTPdzCjk8D25tQZLirRCWKWsdgUMwKhHprZ4uJb5vizDtUSx1gNiWHmRqNYW2qGAeQqP2LZau2L6bDruK5F4",
  "key8": "3NBtCK3XqHFVqCiDF6PGbwrT6ofytaaqxCDyCaoPfHtDWpyRmS8fPAbwybdjeZ7nePdHGntmwsEvfXtxsEr4c86E",
  "key9": "5379TXTszSJqh2nKuRifzX1HpcDANDj3nTeNP1ZqauWwgAsD2qRc3tS9kxMDVp1YDLWmGwnVtMU4P4p9aCxt7cXJ",
  "key10": "5KmV6Nczd3wNNE8FrWSjfDnW3WDEoJSwqvECAMDJwD3cMfGpTL8mAMg5eHFSPKfik1cTmdjfu11PFUjW4LdGyeUt",
  "key11": "4YC9CVyV6rBJ7xyr3TiRuTa4FeFqQ2UFcReZ9YA4A7wDDq44dN6vE82jKnc4QqwusCdHrVQ9EesBAWyppCYvhiGp",
  "key12": "5aEMiE5QuS5u2HZWXKfZNMVrR12v11SCTrjfbEjerY55hCcSHXDGfGNkX9DkF6ai1XxZpSncpNDPQX4DWYEWoZ7V",
  "key13": "3Wh7v2RCSiY2wF3WurB3sVzHpPGzQNQK4RgT7aFdmy2EtYd8hv4iTmRRYX5PPKbZCuhRRjhPQwbRcRSPwsB7Qp4K",
  "key14": "Y9G6WD1UoW9xPEsJp1cGzzRhDLHXoAgQRpF2PLWTmLnvUFSGLG812aXLzB5RyYCeQCJgw9mEpYFxJ3LJ95qkes6",
  "key15": "3JCQZWpyJBkzHX2h9KNeYikuEwHgUc8rdtYg19RWEaZKatw81wZbsBn9HuqrxJFNVxz8WBnaVvjDS2eCbPKVpFT7",
  "key16": "4voUqqysUHVRr4oEPE35Rppd5ytpZJNYUsnnnaJ5ddf3163fBMFkkkTCPHCSi93iVno4Gx8VjzoDWDTxFr9FZ6RU",
  "key17": "3GApqZtVTdsna8yRk1CS75XyWur7AcHQ7Zauav2ffZx3GRc8SoTMvfGVndbZttW6H4G6MRf7nJCrbgn3g1Py7wYD",
  "key18": "4MS6NWbr8HWkKkLXppqRLyo6fuLNeFsGEVYZb1NJJTRcXEdGkQNEXMoN1DxkeQq1kz7f46G7KCUSZ2dGykzNtWxh",
  "key19": "4rJWntyweSauE12BvxyBWdLCdfUbGzv2QFB6bNu4f7Kq3kQfBqwYhTvCQqGv6NncagXASKWxLyxHq63ioFSGVr9z",
  "key20": "UEjwatyvR3gV4Z9LEdozwYdDVNjRe3SxMWxfSW5LCv5P4ZTPQotvNxzGohCiZnpTpUK3eqdCGkH2d9kUg3i3AM3",
  "key21": "2t338sKZ25BYE7GzM7D3LvdyrEfYzdjxqHHpPYKzp5iw2WtdWr6vevtXC5YEU9gmwtdQc7ngFZEahnC4R2rC4XBU",
  "key22": "5wBGK1EoULPM5x59uKGni1yBjHxg77T1epBsxcnsAYpXXZXwza2hA2TAQARCmJy9E1gNgGdXk13iMYTfD5QtU8qv",
  "key23": "3NqKKre87MVBZmiFcHYuojsVcnC4vgcCDNqnep9mjBuzvvfN3kbUsubngWxvJWF8cUDJp9mbccVkycV5FrdWpxdk",
  "key24": "5qiteX45qae1VhoZZk6HimhPX5aqkqkWUWWqRQsfpU7TmeHh9vw8ojfB3ZPLJhF6D9Wj3ST5wtnmGy6uiLJLXgoD",
  "key25": "QKKtbrxBSe67aKwJK1Bgcj4geK2KMeanCK7i9dH2d3SmSMMEvb45DE6FKYp9mKPkSfWTaLkj5yMjBFd4CmoMKZz",
  "key26": "2iqx4B4Zo8C9qJkB5itLZhVSFB6Z5zRVfXThSxiJXR7wABjmpZQktSUPXuYHt3QFEEEXky6gwB2PtWJPfJ79XAJ5",
  "key27": "48HiiRq6qMbkj2px74aYTYpnTgCFy3vRC7BSNf4ddTZnphzJwH4Y83R9AUKWWTj2oo87i3gQdv5wXi23WAvGGFXN",
  "key28": "5T9XfaBF9tja8vdn8Mj9iqNhaPkYyyekvgq85Z8tzZuoAN7RWqM8J8aCDSmRFsnn4gAZd7vHWCyeBju2LND3BJnz",
  "key29": "4R1p5Wa8HsiP8AgzGMDHtrt26mCfmNPzvevyzvQ5gH5DYLkCZbq2RkmvQpeoF44Kvc2MsQ228jSKMsQ36ftd6t87",
  "key30": "2fKcKWJGM3K3xMdFWVcdSHnzFhPPRkvt5dGg2VSYRbmt9QvuwVktSSi31tBvKj6Qt8JoxVturSgdGh2Q3LgNDEDj",
  "key31": "4qiEY6dXHdDvgiqLMWcvXQca2SfvCMX2CFMnmU7V7QXSe956XGn87AzRyJvoPkjYozpEsRsZjPfHB7CXZdZ4yyCp",
  "key32": "3ddYNhTJY53daHsTNewez6p4imKBGgb1xGbQdugfUWPiL19Sch5PLQxGH4SZ2XpEZ9yrYXSeUyTiGeiZqidkDtzE",
  "key33": "4GAUFxU1C7xMzGwsW4oJknM5L1bcTDCA3PfypeiVwAj5rb17spnBtbj1bFs3uqm4kNTCjdwb26roncDsZDnWT4EP"
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
