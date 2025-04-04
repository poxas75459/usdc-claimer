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
    "2GEVXZqp5xKRz5wf6h9SwJxej5n9uSmdkgpghvJxSZoSUdtxvuiMAmrrzgLP8soqAnq3kY2EaJKBAGo7VQ3PsSFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFZXmK2CWDXjCebRqnG6ELhu5q7MF3M5bJwPDF7yEwJn1QX3CnhcuoThXeX71z7iVXXe1LJETrTLeHqEwqTusYQ",
  "key1": "4BFYdKLxCa2aVJngFAS7ARhZgqNiLBMybxmBREnAW8y3RUkwWYwUcXcZ4sJTDavKHiXa4uKBkmmhwcbcNeXZpNuc",
  "key2": "3MP6kcxn4ahkCUk7sQgibixEDYHEERAjbLUqcymJgpaXspmsEzx1amxwWwYQpR9ntGx5apr6MutpWHzZjwrtYiXU",
  "key3": "4VamUPsbXQSoYC58Kedj6tLGvVXJ3uGy83B2rrp8QVFj64QUjFvb4qyhQJwFf9JZ9RTSQtSBozL3zMQjjAMLmz4M",
  "key4": "4YbjBa9bH2SpoStRsuXXcjgKhczMssu4buC8RCByiTDK1gyaJzy4VZGk8z9AY9zDXntiogZvANDUKweVfiHvtVaz",
  "key5": "38N96KUbTpKbVBh8nyMh5NXocBEM7gJzoiizdSP4FUp3FJ2SEaXSkbAzddmEjd1QUv8azP5ZQ2FXK5CG947YqjZc",
  "key6": "4nCTx9gfpHYTVJPaj8w3kXHbuSF5uGbnBkjiUi4G1TjcK5cHkZdYNChg5fZW1sZyGgH5anoN1MzrNqmeB8WLknms",
  "key7": "549EXc3zaivtMhyWjYuUAwxNcPVKT9xKiqD8rYx1SbDe65JbFMjhSnDLngdGAkVEJE33sTaWj8KoKgvyCALT1Jdh",
  "key8": "5mR5aimqg8eccekoybNwbnHyGfbrYeqQq9VgXDN9Ne68gE6tQBzP87RYw5KW5zu1U75EvSbopnrEQVcYUiEyF57z",
  "key9": "4knQu8BdJNvYj8Mnu5uK8qZuDFM1CyTHc8DqwQ3gE5mfJfe5dGFy2frMNAiXR6eWd8UgPbEY6ncPbRPTh1tvGhA8",
  "key10": "3wGdcNAARr9wBTXwNgEumV9ZpCkRynwJ1jVTMkwtZyk3m1W7st6Kfyu3WpCsq48ZkGzckRCBvXkbgSFyeAPVHsLr",
  "key11": "5bEiMbKTRsfHH2kBjqELdoz88Q67NiYucQbHJzK6q9d2C8pSdEsVcQi2HgWMq3XPdBQ4zFwa7JdrwYwZXWe1Bjf4",
  "key12": "5qPqvN4dntajaaQGCtnHYXxG8rjvcqeWzcj2MMYNjnXpr7FMKQpy1BcAAFdAstmnJgyc5YtckxqHf3a3ojs447Dj",
  "key13": "2EK2uHEfvhRSQ4WVdYQ59zgfEKgaMVidPiMJFSZ27YMUvdD1mt1g7XYE1Ri7bNrjpBMtnEfmBkdqbSDESNvtnjUU",
  "key14": "wWVPAf53Pis4cJ4GVRvAYSKzxrQf8GVexqxbuvyV4PGqoa2ov4KRBhgu4a6HAWTAMJZjUkjN6miNBNBZhfgfDF3",
  "key15": "59CbEpcfSmA4SStfSPYiLzPXkRenNM8NBtjP3288udJcwdZT4xY8Z7TP13tVNkx82cvAWo1j2BMAaJvmKqyv12Tm",
  "key16": "JgDggQogQA4UfdncHyAzTHMKYBAUvNHZUbevSJg8ALW5mBxCZkSo86Egs77g2GeEZM2D5iRmP6BUxXRbxXo7ywn",
  "key17": "3JsPGvHNgc8K7uWFzLVht1yGi7PJusx8F7qyCpceFQuFTaFJuVbWTNZg2Q2bz47xRgrMxGJCf6qqMtvz1VKokMoj",
  "key18": "3Fiz7sE7spN7cAvQTjHoonaWii333rtJjhGt5NCLECNes2Uhc45d945CiFk94weFfetzEgr39b2THFXWuy4i2f2e",
  "key19": "35r5ZcKfRDKs1CoYgajZNC4ttqTwwdNwYChTJ4YHhAQB91RQz9sjbZvNYs7CZhftZFs1PNAbCqz7GtCzRdcyNJd6",
  "key20": "32NSRWaKitHWkAEfz2ERx6WdZESjB9EiY6THLcKQMNdb63BDr5JWj8jVcGkJAvT3CST7KYeMnjuShLGgrXPHYGMR",
  "key21": "ZaL4s8thJeHLZbUuJvS9CfxWH45DRZjzkpjWZg5qUFPnUWYKU2j4D7rWTsD9r9wv3icLWE5sCv15Ggjsz4HPCaG",
  "key22": "MQTYfBxMpUSTwmCCN9TFbNaqmyjNAj7fz9pbTWyq8uLfmi7cWJffXy5DfkkpXPcHJRNer3GtDm9jPZeDGSo3LzJ",
  "key23": "38tvwiTxpFUoaRuMgwVcQTVvXbAa7Ksyjs7DVG6L2pwQtZdcPLQigb34cxsbip87FovZ4QQw2syD572dRPHqLz3E",
  "key24": "2JNq8hAvEkCsqCusDb1NQ31mgNrmqpZcFMdXYykNqjtVNJXfbmXCT9tSh7zuJ2jLebBFG6JRSAoVHQgFAyBdYywc",
  "key25": "52kfHja8Zzkq53fEybYApmCeg9jUSPbhmNmDZz9jkHY95ebpaspK9xu1Y9qXkEC6Lngo2jyt51mJPS6kJkpCQu1v",
  "key26": "2qBsShihpRXaCh5MYvjYfcbQaSYt4Yg8Y3YNsyFLvpEx4Beba79oGr6Ae95VzQ6pPpSmLLzE1wWytgYpnh6cxYYT",
  "key27": "3PKCDdTDrCdHZTUHMVfGJihCiN9aSZq26g9FdCZRYGtcES2jsnAqy9JCxTnmxapWpYA2zvQaLuHLSpBsWcSgkRqQ",
  "key28": "qxXAwGVTAuHM6rKwvx9zUB3SiJ5fWEmLLVFmQFVKtxSa7CCR2XUUBD3nAd68z6UT6esqS5E4LN1jF8b1D9xDnTs",
  "key29": "59zQs3YrBHUzcHfX6w3NrXghnaAugnwtw7sV3zx9k3j99qTy5nYrnr3J6YCJr6vBG7LRcFdtJxvdpCZyeypaMtdH",
  "key30": "3NBVeGk1FRwowUGiiCmPADFCRCMavZVUTAqH1mA1ywjzrzgE5s119oRordhqoamduhBT4LWcA1HHo7SSgcsxBpqt",
  "key31": "2K1ddL8w5FcrDoJkJJyXnfWNpzAoy9AWGZsFeqDwVzBKEWbBmcZh4e4wAx24suS9p5phEFAvkS7swRJWQKWEJDRn",
  "key32": "5JkN1YpyjPvuBaapKyR6Ztk2mToNFvSodX8HUgAqXAfg8Sd839p51LY55eezxEEHG5wH5dmFu2BBoUbVF4UqaMU9",
  "key33": "3pYgDeP9rVc7Ykb7KcZZLAzMg1QeqjMx1pGiwaeFwuCgXLdFkjjfJkFwZ75VtsdqZ9bn5gyzHUVspwQv4WcbsbcU",
  "key34": "3tszNgrJx57RVzSYE8EtggxFoC8bRnNP4qk7GXdvBn3ExyU39XcBgVojBjKW6aKeJSJDaYgoZjDx1p22C5iKaqCP",
  "key35": "2L2YHHUA43QKEeai2ErSVbYjosWYESiqGXvXBUUBZu967Wcmo8Bn3AVoPub52fjmFcN3izzUvPBzb98rmXtYhjum",
  "key36": "4Gbs1My2L4bV1PwBSy1tw8XNdHPzV2Z2As28bDzrpDMhrEvhpXx8AAy6h6P3MGuR8WR6vSTDJmudCY3AveudxBFR",
  "key37": "2HzTMDx9FYET85LLDKYH4sbVy9WtqgVGv7zYKV1LM4nFCR8ewH4VWt4MjVq3WhqKss314HAtcCquvqQg6d1LcUiq",
  "key38": "21U4JJFvPuRRsDt4L8DyDeKorLKpYw3TsRxVRp7zijaiaFFEUMjhMuyThw8t1HSoVdPMAqqZfE7jEZ1Fg588ZGPU",
  "key39": "5o4PLroqdFvpH6VY6gKRX8EsfQZK16NgpqtKZzdTayZyVZNVjWvdhV7iZzDHbdhWs85Ppc8gqFj5oPhysg8caeQK",
  "key40": "2noEPpyGmsyvWc1hpWc5jpccc6tV2kF3NwpVSVh73S8453oxgyREHny3UxdZG9sbvoebzbRWkU9vTP8DojsqXCQB",
  "key41": "3GTaZmZsW7W52SpSiLNFouEY2aNumft2aVUjDB37HYgFD7z2CPFzGD7616nGEY6xyACjBHETagfv5Mj4PthHRFMP",
  "key42": "3WPsdbi6vzywkiLF5VYgqpsSswaPWTvG7P4eTLf2LYKoQfCXgFifGZfkep6PQMkgBLNgQ5LWmS3QL9DEztWn75q7",
  "key43": "2thfJBG8UU9Dg4YxUGAh5n7saNH9AFoQazzGtL6jBPgmxxUXNBTzj8muYAi5b4ByK9CajqJzJE5sgKvNiX4Tcnjz",
  "key44": "41yAYCyaYcbKUnLBbdiFSDXgQZCkbTyJ7KJfH2PnBQqLW6ND27VZJMscpjJGJewjCqwZqRbzwmg7sG8T12pUS3Mm",
  "key45": "4xizk65YkiaFPLrqNr8FZQw5B33fxGN15n6ARd6DWuiZhS4VACAgFKkdfRM36pkiEGqPEJHXoMxv32WwrhUcMYR6",
  "key46": "21QdDd4HXTMAWDaJcn27W7WGcbHpLdAksJQo6WvtMNeMDQZGmRGdWyuYU6yNks37GMRDmPCgzXH9g3ng8wMpw7mx",
  "key47": "gpXVhSxw4NWitfG9xNUcwFzK7ynocXGNUGw7CMRpKzydRMKkffDoGkYaY5RVKrif9c34GT5SkkX5ERhT5xYLuM5",
  "key48": "4wVjjj4uFEKpGgBTwFhvxjgfv8MDtjQht5yMqkovJxLAK998F4sq9rLvxaEkpApMZrJiZ7xKMMyZ1N4hNXFede45"
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
