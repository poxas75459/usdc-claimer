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
    "26QGtFQw7f1uemqqRT5S1uRp5FjmYJz6dWFPkxVSLYEpzLQAHQMcDSTuFpZwrpX6ppQX3ijdoe4mmeDcZuLMFp1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSPumpsdiwP6Z7aWnMYWG3XTeKLTgia3RXLpe5pfiCR8DwKyzEWiPmuCUXW3uhvNDn7KZqFHW1SRKSmofwfMWwX",
  "key1": "ezU18cHh4ffrGMH4tTY1xQX8B9rndHddV4GR3JNawibEqqkvVqPPA8suKXwEwsUwXnZivbdFWiXpwVmZpAKty1f",
  "key2": "4yF5YC8Yc8HLVeAYripXAuyfJsGGDxdKzcPjBzoVydM66Mm9LhH4iSNC46EZrwHMxoW54SanvXhQm6Gt9L5HKkqd",
  "key3": "2LQ4CJmb24W4w81ACeuYQtwTStVaGszbiKNTsuNdgMCCrKtJkCEb2C9QbCLjwNLAff62GVaYqmjE4aViGsPt8w19",
  "key4": "3cGHM9GeoJnvptVDhfD4fazSNoDuZnLbDJge4EYufncqrsgGQGcgtSg5MqWRz8pgzbSTpdzctEqpkXj5FkvKZvFm",
  "key5": "2rfeNmVzjVF8mdGbc4E4NRDGSWARj8QfpwRjab3gmxrGRqwLsA1X76nRZXbGK9Y6bLCDaUgnXN5Uu51v9424w7XF",
  "key6": "2tcfC5JAcXTgxXQfmpDTyA2nKVgx5d7ho7UddHRkkEB2n575AS49AHKwPcmzNZhWk996nPWZtugLmQLDsTUs7uR9",
  "key7": "4XqfTVcNLU4MdbS6eyFLswicR73kESRYavNjYq1j2qUy7i8ViP59sDDcu2r8mf4T8yfVhtRHeHqx4Huq7RYJWqYm",
  "key8": "47poTaLaKMhstwKyPV9AEKJYpkCrgvjioPMdPkPNt5cYwhvKF7M9idzZPTQPcTSfCK1Sdn2MXxguaseGquJBQcjX",
  "key9": "2XepYApTGC38KFBXBsFcGxkuJ8Fd64S7gDXtFNaDoHj6kcxRyGYfBm64VArvggHkBRkQVvzMYi5HzU9Phwm9QQh7",
  "key10": "4bDTXtV768j3wTyD2bHDnQZygthvLDfsopuAbYHXSZ64Gmthnz5JcWPQYxpmQvxKk325zmkGNNPeLjPeyk3JfQee",
  "key11": "3nD52w83XArJPTtKt1nHn2ZConGpGWLPYFYzUrL3CPhY9MeSGGwqmcXk7kqcuJzLbCukscyUcZU2dHLdbyNyhnXY",
  "key12": "zosMuuh7xbHeSkW2DqWXJU5b5cVaz6aafRgFoRSRR4pzS6crsX6pD6i7LAPcHh3kXasEPj8sNLMdhCvFEm4qdnY",
  "key13": "6wAtxYdiDCKpqkGQvJy7zhY6ZCpvAyrA6dWiSuZcykJV29LLFxbjBovc1yev8Q5egcbYgHnkSaCn5JJ93YPsuL2",
  "key14": "5sVxWDRk6eo3iPfkFiGA6uQvw6FKCPPkrz8EQfRmEWDPuVxKM4371MhLMeppsUJvjCjXQYuq9KBRSzy7wXQTMenS",
  "key15": "5W33M8V19ZfT7Rq1sjFjJAnzmK2fJmg9g4S27NED8PwcVvQGKmFM3RGPDPMamf4bz6MfjteJ4eZ5uF5a9rqHht4g",
  "key16": "4L2WjNuCr1nYPLyPrxbapAj3YmWkwmfVKj5FSff6KA5J67rDoKYYjCmHjSoATAYPjF97ZASCzifsYq9hrBVU7yU2",
  "key17": "28e2GHj9gcxxidXiuwp7s7xtgBaXJ7FBPFozDRzn3QxXVQYYys5F1iEibb541nWqZWrmGaAgrpwEwwXWKPzs1yxz",
  "key18": "5hKDA6J8dGN2nKEKD6kV1vTT638GE617vxU5gLzWiw6adY1SywYWxSUw7b3EbfAspE8WfvgKwYbDVdt4KiKySdh",
  "key19": "3crgG7hvYB4kbn8fNdauubCQ2P5tS7nFJ2pgq371dYVGM71KKYCSqg7EyVfUhUm5hoBHJFsyk9VE9BphmWyPXH8M",
  "key20": "372aAshhtgDjRS9zGb4wc3BYELj9t9w2HZeanNpTu4w5zkWyd9JuhQ5n5f5aGwRR5iyRwL39Qu8mmHMAVXGqVnBW",
  "key21": "YYi3eJNUKLSVu3YE2ZXwnx6HCunpmVeXHHPvFfEVLvgs45qUzHvDb2KaCEjVLLRGgvWS1Jc12urNXx4CDVr7Hg3",
  "key22": "DrJhEAfhsZTM9z8kKm1KKbpn4Rt4DRCcTEsPjQqbvY7tDFXZ9idGqm6qrhgi5Bodw3ZVD6TNBUE2nzfn3kVVoq7",
  "key23": "33BuYM95LhLnKcN3PsQDiSMuXz3Gc2x8bVPo23qKSWVk8JTUn59fNVBFH4wwJWTLq9Yfp4eue5XjjASmkXnfXo7n",
  "key24": "2mrQgSJjtagmCkDyGn52SPxFymiGKPBnE563ZHSvZayWA4zpjZ8k22cm36zw2FXc4jPCUwJeUDfrRk33hN7Y85SC",
  "key25": "2BBEFNqNzBFBjCkA3Awh3rjjsL5D3QuR2JpHQ5RAaHt5JNq7RYepJiR8qauM6HqkVz89qfZWPJMk5Q1YpvKhgD4x",
  "key26": "48eL7rT86enz2Lm1dXmxDXCfG8azmW6ZsJehmw2n2DngiHy9NVqLyGNsZidDXtiFdfRjpLCg9xVkHMdcKHbohBTD",
  "key27": "5c2y9JNUi8vw5yYFBtCrKpeXVcMshQV66ft6QaFgmUdhkx3qXV59z94ujwxBM3gkBBrvuSjzBUTLvVsskzfcrsUP",
  "key28": "gFjwXG9FH9uaCXjfzYjCJzsSRuGABsQ1FJ11m3VALk78YD3pyvFAdyodDHW4i5kTUbZzUUvyDK8Rx4Bujcte1T1",
  "key29": "2CZQEpgyT434uojjpRB5q2ZZzVARdNixGgrG4aYnPsiC1jAQKTCNTefNN1VXtkA2wh5oz5Z8cTU5S1b8EiQZ9Ltr",
  "key30": "3uyPpecfMuPGrzqvy8U2PTy5rqCmpx46gmddoy9JecrBZcWbcA85dPSFmDVJVTrpsFyyTtEK9p88quYsGmFLwjeA",
  "key31": "tRMJa66xrzPmh8p4zEup9AQHMCviLAPCJSLoTqSPsazwPAt6cQ8tZVVM5SCaufp69NaVvNiSAFAnUW4KBm5YcyK",
  "key32": "zZ1fcEzp6so7XaZsC5pi5SxMCs5eEDyaegu4fYZrfgys9KBmqNQj4nwC5zfxa5fQAXWb6Y3M4C7Av8KZeBrSYvP",
  "key33": "4SujVAkrR49Yd48cCcbzdwDHRvfAkknn4GDXmXUSbLwLiBCff7L8oaS6mNWwPFCuPHg7re9MNisuafpUxZNLfEL5",
  "key34": "vxtoAD9HEYspQBLXwyzfztZfjKdyvxLf6zCreFocaXReFTCDCdvE26ixiQmDsXNkLkomGUCSVA9MJEaAWdCui6S",
  "key35": "4azbpQXs4rPGjB4Z9wqqzk6vatGBEPaBp7mzUBsHGUcNpmxEBxRAES5jRswbvz52X2cKG7ChNarCa3J4mnhZ8J9a",
  "key36": "5Gp7w7sBacCKkuXwLcLJtJJ97kMoBRKGSgNYyCEHNGu1dq6GA3tGYn2Boo1WPGz2PyhwFrq8AZ89jjKgVvha2Zh7",
  "key37": "4YgKy4ZWVSa6aN4SmW6Qph5cj5Qf37xnEeE6swMZWJK3aDUVS2EHNCPCF2Uf6w368UvHy7RbrRWzWwmd6GnALpHv",
  "key38": "DDHt9oPcKjzSYMozyo5WLrxyxcFxPfbe9kPviGj81jg9KvANQG2PumnkyLVPzEH1SYvoJLfyMj9Fbq8HeNkRj8w",
  "key39": "61sVguJd4sPe63whBaE6DdWMQ7zfPCf6XaPxgt8AGCENtAXFrAR5jNkcTLeJLA5YiHqPHwYXRdr5MdusJ8gEmKHv",
  "key40": "43bAWoKsHB1SFeHmH6Ri4S4ohuoU7Jdj2qfALJG5WocucTfb1qUj4JuesJ3DxvrRVr71JPJPEduhp5BhBJTnxW7n",
  "key41": "4xiAziJXHcoLyh5xr2TjEd1vMYsxeQbmLhMGPgSHVzpiWJJ5D7dhV8GwwPnDjAfc264ZeUMqp6hx5WDc4riaLMZZ",
  "key42": "S2GFwCxusSFCNdJdZbqVeoMHbrXzCzDtFWzjRPX1zkGKRvuuNTc3tyrcYzyab3vAUKWUTvgP1bpvkjugBgo4dAE",
  "key43": "5xEBubtPuSe5igTnqe7rQiqershAGM83UjN2BCePGzQAaLioAKWcKJ2fhVuBR1zsN7yoLuBBWfukfCfwdfoULzk9",
  "key44": "27L1MzqYSnSJEyLT8g4yKrFrCfWGmUdhXgAxsqB2iz1PNaEGxnFUNfrRiHbmZZ5A3cW2K88rM9zph1LdyBh3AvWY",
  "key45": "jDPqMYu3tGAkFCLnXmZawU8aBYJmKH81wV6zv5V6SihtJGW5P73murTHBwF2YnM3qX97kda2aSVVcmztyctUwx1",
  "key46": "NZ99r7EWqXcseu9bJ1KoHHMkJvcjbv7fg3AFyEgMsuN8coJJ5gt8jdYsTaohuTe1NmNL6wjHjLSnzbpptr2fLvj"
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
