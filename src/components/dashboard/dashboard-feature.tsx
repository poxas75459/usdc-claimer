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
    "4UvkRp2Q5DU6TW79QN2n4Tawoi7uw1vdBLtGjorwBa3jBfCbxebi3U3DHqrDRzFhFG4djdBbUL1uCV4Y34AZHuPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxfvBLCuHDzfGn8FMQLm6azxRycfF8ay7g8pXM2ULffPA2cAPkUFsNbgFXmLXUCf1mR8tsKsaKfZoqHDd2JJYop",
  "key1": "2QMFbhKfZVS7Eqcq46sFQpLL9QG4dVSWF7t71rofcr1rN3b678j6GUWAdgfYEpZpQqZXtP9KNV7UzuoocoKFsMaR",
  "key2": "4NHAonMAndBoUF6uNL3gjGm8hwKtXfrg9UBARfHK9Sb8jNZeshojVTtiSaQ17jk9fjtaBmK4n1cshjBLnkNGMLrf",
  "key3": "4EeY93iCqfHxTa9eKQjBjyBUNQDNYGwcKga9j1Yk4rMwgDGxdFWCFJr9XKkViTbnfaYjQsdAZACza7SnRkps86BN",
  "key4": "3w12UA7BNpBRnYiFDoVqBnWoLRPMEzAiK8qeAziZLeeNpngyYHfafgnAMmYZbG51ENK4vJcmE34bsxQVC6FMtRfw",
  "key5": "46Jqa4CEJhL9M8La48Vj6w1x4tTMyU31KzrKzGHbKuGjkiRhdLztjRdoaDXVvSkC57Yz9Q4BhVhiqVawQCey5Uz5",
  "key6": "AtVmEs2dfJUSCmcL5ZM3qjQtrRcZCvqhn868ffGmw94ZVztZp7BAb8yZGBNNWGkcDgiMQ7P6RMtovvHzWi84gts",
  "key7": "4C7jQrZe44vBgePoY8bwbTVY8ht58bZHhza3Q34D5B8NUtQjro5Fpgp2Nyb4ihB7NZgVCZoEqj8Vt1LzbnQ563pt",
  "key8": "2BVZnEHGc2BGpT3UJXHyBxfR6Vk1zQQ36BWYoJ7eG83gJPna1CZLnyJ55vQTcCNa3CaLxWXD1KP1LAcAcoRKoFZ1",
  "key9": "3Q7ie96gEHHHcxEfzJ5EkKYNbwBDDGXdZCtB936v2DVExk9Mde2gNJXBk8UbtC7dzaNqB83HPe8Ku9viCN5KfQy5",
  "key10": "625io1s8sdrrYxzK5mvYpA8k1dTRL77GeH9qV4qhJQQmxBedaAbzJQW97oF64jXtfRc6WWrNtW59LyEtdaHFq7FG",
  "key11": "3iyzTa2PUP6ugNDfKiHzstC7N5viUcurZTFFDNYjpnbwyaXj8pht7uA8oVJAtCao7oxKsC5ojHXLqsdXSpRLuZ7C",
  "key12": "4G5wZMPAg8NG9ehNdcKKaN5UyM3TiHLhC5tvehFEvzG4oCuGikJKA7T2ZARQ5wujQF7ATsa6AsRNA1thmwtgaegU",
  "key13": "5cZ56TdAwF57aziuUP64WicVTNxzYUEYFZ1H1nWm7bCvaNM54B82B3m7m6iLzeA6P3TjpgyJnYJUC2iYmPNuev26",
  "key14": "2Ka3DC3xYiopvtsE94rUQcyHaiLDeDAyEdtqb4xw59NLrZwKUog5hFEY4MKyuw3cEryEcLugv99nkp4f5ofSPNYw",
  "key15": "5H9KkDkqKd2gxxEbaxD6MLBQWEDznZ6DZdPYQMX1h1CncZM6e6dpndTHBjCuiLimGUZXy4YoJeAn1BoDTC1nfRgS",
  "key16": "3Sxjf9QKxSokCw495hQENhpZ4wp9UR6omMDtoivYthJqtKjtDbPuDu1rn3Y9vMCCLKQxUyUMaT3MPrNfnscFocZg",
  "key17": "3i1A496BV5vfmU28YYaDmjcz5Qa7mkMYkHirFJsjnQwcfzLH2g6oWiR1tUkprtZb1wV6Nyuw5UDfSHY8aSEHzx8r",
  "key18": "y8AyXcgJHaxASbdMaHMP5A7P9xtqxKisHuUv3KNFhhMfHXhPgRBn6PZ17uXbWTa7xJqQo3QGEWVJuyAjDCbcG9n",
  "key19": "FCYngBEaSYzyxBkEPJoMne94s9xNaH4Nxx5DY9HLTsG6yAkBfi6DgNhnP3SEjtDwHZCAxgxsw6qS3BRSeWRfkzG",
  "key20": "JL4Df6y6YwtquaXnNk7QRcWUreGwHQi6sDJJuWP5KJQvephytLKwh28bDWdS8P6wCfboQCFKiyfGA4Rxq7UxWkc",
  "key21": "64extBQ2PAXBu5LBfhqmwRF5cvNhDQ319w1PZNije4w1PEYdfywPGGW8HDZL8n1fZu6F3RHBieFbpJDvkMyZ4N4j",
  "key22": "SY5JKXsom32rvapzVhE69ZvN96pYCHxMSzE3ALE74dZik7Atk1etyf1rxK8Qk56PFLMtwVGtw5hfH5iT4Kb28m6",
  "key23": "4Mj4qvidseLsM76RJiUmJzw6ZbYUnnMjSaGrrZXkpG7fzZa9N7DWdZhFAhDkUeAs2uwZh9MJY3VZwXPWxkQkPuSH",
  "key24": "5GUJwviTbqWWJJKMbcGQGWTfSpU8riodZLq1aHzU95EqEbWFkdTnFyMZxqGfZeNC4qfAMELZaYA2H7HUh9Y1Gu6C",
  "key25": "3aaedPuan8HtNiymKpp1cHNvxyAFfi7GDFcprGZGSRYHux92ViBFoJtD1ufwZNkcJwqgTBfNgT3aiBwz1vrjFTPw",
  "key26": "5dL3KzZngwCgbpXXvhTyrkh779pU25zRaWwn23xmhnnR3gLkD2Z8TQpbXmxfne7fQd93mqckh8gTiLm5zCkU5nU4",
  "key27": "4UgdQhsZLoDhW7frihD2e4iaFeBCgyi6Mq77Jsmbn1xWtAstK7KXhrBswkzB8mCUxc4dAZGiZr3Kn8asCg9dmLqR",
  "key28": "24Pfju71tu95heP38SbPL3WR11Sz5jWXFbk4m2cn9M7wy2oAJemTrbgkxr2arXazo4vdmmAXMYkhwYMqd8fkP9xu",
  "key29": "5gcMoRw7ksAtpqWhPshYLG4V9HfEbfNfRGKBavbW6kHHtyP1vPjmWFz5eGpxFHYi91w2EmdfPTCyn3CFABEht1Ag",
  "key30": "4b2nS6vBVTyb9SpQ3JzRcAGApWbT6JVuq4imNyitmfRmpr9TeCB2ZsZT7MJdRDLM5etdZ4HtzuEXa1DqkSL3vgjT",
  "key31": "YZCnjR4Xd2RGufuKn2erao3bqpg3sctVSDzdjrWf6oxEhV7wMbCwu1ynzv9HCNMcg7PxfL4gZyTLFeZ7jUYzCvH",
  "key32": "3XVe4QL9DfeGF6xoGmk9GQfyTt7MMbovd7pik7rp5N2gAhNdvGRMBXmy7siib7Wa9ymCoihwamW3gF3pzBqrAoib",
  "key33": "38C4q9VXSWTw5KFQVCkye7aZm7ncTjKSqNNM5VsTa3vQ72KiY8DxyZVzaWtvzipPu3wQmCnfULH3f9Z1wHDcryhG",
  "key34": "2BUbSxXS84YNgytrRmmpuoHGoZYV5AZ1gYiXM6duNiYxYCtn6tNe6iqGqwBrWNAESJ8JLWRouuKtm8qWLpNmdyYy",
  "key35": "84LDNVNMMVvLu7bmiSQX4zNqq7aK6LY2X46KGEwrX9XBG8gtun9NAaxCGGLLJ31tj8NcaBsFJzK4TVZeoyqDJAa",
  "key36": "oFqqUx1FnPUGFAQNgX2Gi1ShAritqPZbMRYZQqqfYfafKygcGsLU49HhVNBGzhALzNfYM3HyfHaHU5dtXyb3jfA",
  "key37": "ktvxFsWm6ogHPZupZrR6X7DsxWmYdYRfn4wCHUpJp39hNWwQ7nr1N2gqxyDZ4nqi6ZmRzswqZ4Qcn51zbMbruuY",
  "key38": "5GWpLdnfkGn8ceMC1RmRX4WbUkpeQbPTPZgASpz66ynsy3bTXvdPdEMJYKSVZgoLgbQy3WgkUmeKK8BQjQFbriMH",
  "key39": "n5YVTUf3PpuQjvrgYs4XNYcgkMbRWrCERNCxN8cbEAtbP8ttxvaoXtpbvGM2imr1n9oMumcFgGMF8Qxnq27pmne",
  "key40": "2qH2Pioror7o5DXqY4wA5u2VcPbQpdwxL9FDCZBunnscj1s76FX1FGFC6c6Ro6jhT5ELXfPZyZ4oq5ecmLcJZoLP",
  "key41": "3SJEDzqKEMViZrorRhsH4AXBnuKGHKV48eJ4LYBDV2C179Uwfdy6doVy2BuJDsioi737itAex9NxLiubVdkSLngj"
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
