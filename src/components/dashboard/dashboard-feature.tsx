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
    "2UGLk1yduoVaJr2gA2QZhHuEZHCGpsesXMvt2v4FMXu4x5JRS1Uzxr4zcRvQEENgbYsd5uhqpFg4XtgbQAiiNRSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPaAeyuQyfaQF76MzT2rT1PSCKKgWcXvJSrXUvS5uMVrT2dQHXAQJCqx2zVXQX6TgzAp3iWgmmKw1XovbaP9qAo",
  "key1": "2Lv6agbWZwobmKDE517eS5KaUzYMQojvb23t16CoihqMkcY7x1XQSKpt4xDPhiSvgTroA56x7ZC1ZEVbVqpjGEe",
  "key2": "3Ce5k8hKCgGhBk4oh6q6nLtRQqVg9kQLD7nbdGaFkx5grS57sDdSFXb6WEVM2XVthKPq6vSk62PzGqRiRkNffXHd",
  "key3": "5zkUVpC68s5nhKE4yUaiyRMs6o8Yq3b97HhY7J5SQKzURuxjMSJvjL15Uhh3yuDqKVDnp47xd4rijegcHbpjYVD2",
  "key4": "5zXgT2L9kdZBsqLrdvDZZLo9bCDMUgMbfoWTw27jEuYZXc2bMBHG47abrWDUY4TdvJm8QkXPim5A5hG2N9qsKLNu",
  "key5": "LANCoBX3kryeXVwMJEfM6CAsCGtSTX1Md2nFC23pYfTmjYtUzrZfkVFiq918r8kzXhkue7FytC662CaFjrfGn9D",
  "key6": "3WzfSp9KnN7gz2hw6StW6cmapGwDWQYqwE8Zp4g9QtDBXD1NRH3RiU9NPVkehczNwQ4AxXgnENbNdm8dNxT9M2wZ",
  "key7": "4GCw6uWZuYoWNJsAYnN8X1W2Mypw8n4ZcfGsd161Ek2hjy86sLMpubYAZo6G5gvhsBnD2vYXj7W1wgKhGvdH3Ss3",
  "key8": "3vzZMpK7Foxrk6mAnMwx5P2ZvRHaFgkPKEno4GZUQDKZutNfEhi3UG5RTn7KVCvYECmxwjQzZixgNPk8YqmiZa65",
  "key9": "2tob6axFroZ5UrYREw1mEcbUfMWxQDNqLsvVaVnEU6nZDVKhaNbe5JAN8QnR15yf6cRrmhhE4EbqEJ6ijCJLKVx4",
  "key10": "5cyTkogPVC5ND9zmYZkT25TPQc4bayV8MR6uQStMVdYYNDr7XmLeBhF28w5hDGPvcwZuRwFg9PFwaxkuzAcNVKjH",
  "key11": "5rsAMCp6zpGgfZbMCQGDNZdfZdShvDWGawFbMpQ1TVgLUeEPvZnHyvNsBcKZGhVcw3QBxQNg6Q69k9wGYBrBwaFS",
  "key12": "PckBvoG4tPmm71AB7kASx91tbcCTJcicm7ZkYKtwkBiLgdeY5bP6u8R77UXaemZ7n9E2PjbSiXQdHiDNn5DPfXd",
  "key13": "5NnGDDLKSUbh8DQmDTF7QJaw1Zwpf25q6ZnjrqPtuoWL8rwJX7bLaNKxjCSrmYgwMTsNa79nS6Fg45Bk6fht84hx",
  "key14": "4RbFsLQvdhY1AUzUDj6BKr9BdcCdTQUYHK3zzKQGS1zAhmFLYMQH1hNeiLrk1QSdTKSEsuYJoUnG5hfGVx8ozhvb",
  "key15": "2dHrfr8mEp8UoBeWRj2MREMmUotYx7MyhDssvjA9FcB3LwDAjsQB7Ss2V5koQevMMXioy5L8yckJdruw6imyz1Gf",
  "key16": "3sZgzRbNHuagRPcPshMw8WCRDn8u1ZtDrcowrq5sETCBUhT1FuLrE2wzFYvxcTT3bBkGvjkawg5UeZnAZmCjQxoi",
  "key17": "4grvvzGYZHNzeZj8qwRgrwGmrMy3ywYE2oHTMhA1TNYGot1hQ6ovLT4o5phDs9ibtKkzoTqJsWJ6Lxwbon5AzMnM",
  "key18": "5owe1beKjBzbCwEns3fvKKzhuMJkD3Zkz79292CQU3EJjgYD3JmVJg1n22Sx7fyGodUD1gjYyvQSHArBGog8a8si",
  "key19": "25CsBwPHWsjpp7i1WAD39SGGDWfcKE7njSTi2NE3MzeivbZJ4foshUozmcAFUoywNmLpJLEg7micYGj3wdC528t2",
  "key20": "3CsTV661XTmR96nbCpSx4JB3U6S46fkCNwDy8boHeSNBRK4fpMivzMZAeCkXVkBvBzZ4Sj9KyTUwhEfzU9prJnDN",
  "key21": "33R7rTLcsFM9BZ6UnsczyqhuKowsbiSJfX8EF2n5oDinJiFkxGEkV4RJi3XrPgPA9VXe78bw1vB4hgJayeuV85KH",
  "key22": "5zfi44U4WiCDu6SbCYVk7GPggRbmUYvRZFgkbmR5uyj7wAofXxyFzbsMaCVY2wQjFMvA7zP4AGS9HBX41c99bkDW",
  "key23": "QjAGy1ko2GZK2jL867f9WubXCADafDVpLnMB34ofeLPiUGn7AYCaaaCxeQ3RAdzFyuR7LYsmMfZiZRj3pQsVWDF",
  "key24": "3BPqu1oqeXLxcxz4tkpKePzj6Lr5VzgeaFFH7XnJECGJ47zaH49P5FaJHdhzXC1nudn9nwvygpwNTs79HC3nLHb8",
  "key25": "5sWLbx2t9aFBdWzACdLnm9uZkgLNQQkSJMBKToiVT6hZrFwNjWQ77NHVtUzNxqPpncuZ69t8hUhQEXyxgaei33Ji",
  "key26": "hqRyroMpEmZWymLkFFEfbMAwX5qtDZzo3FSasPVXWbtW9RwMiNgMj4sQaPYz4FC24MyR5DVTmvxYn6iDCiyLeRx",
  "key27": "4i7x2Sxy1HMry7M8XMTX97T279yW1z5Bokq1nCxioLDpUcarRWo42CjC6UFw5zzkLLq4eVZJqcNNFU8nwTxGxcP2",
  "key28": "3fWCttkNhPHCuCU21FoHwG8cniteifn1zxXmnQjvaxSrf3fPb2nZEu5aDaz8A3qx4WP4QkxbZYEsrSsdZNpm7Aoy",
  "key29": "2kQwGF8rk7awVKCkeoyF7FJBQZdrvGAC57NNxdgbmwQLmaTfVgXLcyTDJ7AY3qN23SkenVkUgZUexSF9cBimf9h8",
  "key30": "232ssr27DXvqWPCVQi1w7kZjbkYs6niPz9FqQdvbsx7qts5rga7fxWfFrpAVkx3EmSNCGKvN5ecvpsyxbDynFot7",
  "key31": "5ANYe2L9T7Hn3PKSgfYmQb3xSkj4xzCTnCe8XYdjmqFZsgWn1RTckcGq4cMrTRGkN4jqLj9HiNHTrmc8R67uLXCK",
  "key32": "2CCiFxw2biakB6knfWoC6QuM1Mcx129C3dVvUEmb6Lu1ysxr7D5Nc6uanCpxTyD6F3hLfQcjviSr4fXCNfemnrAP",
  "key33": "3np83LTy7B8JzCjSfT2N2TgbZHoErbK79th6kiCEPVtmRQRBt9kmiX6AX9Fc4Dhdgv1e8yevRn7VckSXFKqX2qx3",
  "key34": "3WEFGGLGFjCQG3PDuB9HBnWR8ivmPJg11PVhz8mby3txgPseiEifP6ejdm2EP5CAZ4f2Unmwi5ZdS1L5WJQXhcSm",
  "key35": "RtDfDj1h1HfYUrAKHstuqwrAQWWyyA7fvvXUeD5nueiPfvRfMx1PSLuvVehxoUdLZuDsCzzHVpaKjhSdNGjcCc6",
  "key36": "4874RraB4ZHeinMcbpXk8yGjx1EhQyxQoBiQ1YQfU8hsC5rT3fk4vfLs9WKuhZUx8NxnV4vCB7cmMT3yJ9V9G5Ce",
  "key37": "m5PM2vwG2P4mahHLQTXPAKmgJxvsVYsfcGtxSjbYgByWZi3AssdwKRhYsS9cAmKuGXYv13Jijm9AVAm9DMtSi6U",
  "key38": "4b9mQCAxEDvfem6iv7hwDguSBZw33awwSZJEMHzGfRbFaM1YdEmQnCJmvr2voTCHdby8mo2TT4vFDjePNyE3TzyL",
  "key39": "3KmJHLJDqpKwa5ZyHFGcuc4qR7e56vWdCqSqsfJRj6inxjePDAN4Z9QbgGgXsbaE5veZ29QDgS9cUifBiz2BYpwP"
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
