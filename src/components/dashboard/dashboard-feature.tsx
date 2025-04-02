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
    "4oUXprYPpZ8KBFnZxUsMUyX25A24u611rFLAFUCR8HtJsb5QYhymorpVJBRxGQU4yj2oufuTnx6nB1kjPs4EuuG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnP8MD9TQsJPaUkFnoZyt5jHAkC7rReAkdT86uF8GYwoXPtqizinenq7w1nFeQgwE5X84FqYgUD5hJSnkqJbLa9",
  "key1": "4yLrmFP3QySvrTZwkUvyqL6jJn5qY4fxAzxru3JD29PnPCKmWSboSgtnReU1AMG31sRnbKKCTM4mow2aVR5PVnPD",
  "key2": "dprkzLwLBoC1ZxQVfBqWPzW2eyuEJpA1yN5zYv4n6WQJAD9i7LwkEmbWqQoJ7kTa1i3KP2nLsEJKsHNV8M7XmSL",
  "key3": "2tDY7DSF8G4PjVXbvCeHxJjRqzavAPCbpMb93mhB3sKtQJM47agjKsGkBnqFjto8T1obHqJ8uBgpGfyuob78HoMK",
  "key4": "238M2bMxZiRCzoK8QqfV8pSiVQTrW8VXZUPx3XjQT62X9HfKbCTFwp2c5mLhW9xmvjefmmSxM4TxiKn6JfUyhJq2",
  "key5": "GaHBNc9LajRDj6YKeLRvEwLLpwCgmskt3xWV9dPQgxcUk8MBWfPCXybH9Ki6MmWbu4SLo1xas9N18hR94wwBjZu",
  "key6": "3BNqgoR1myDWq4sHJDVaZLcF7nstVipKptFeHwEtvv5a3QnV55kubxHdStu2NRVrMjpgxnS2G2GSTgAm7ps5LQ1A",
  "key7": "3oiRdCiGZ8EsNRP6ShkcURCsVhCDkNuHbZA5hMjF2Z1c7BwPuPHvhjbhH2dgjJrVKSfb9DRGiMLaAxMnfUEzkJch",
  "key8": "5GXxTwfnkNjb6Wnxa3D2ZtAVQxojwEihqGcc2mRaHod6UrfcUvvLLAJ5PykWvqQ38LWVYpMUyeWPWqmw89vqBt1r",
  "key9": "59MUg41Dg8rjgXusoRzT69coxTPg6XdSPvy5jyPQjWncTBPCfVHMwN6YwAEJm4ZBfV99qGdB1QDugXGi1z3ywgmQ",
  "key10": "4Pkz86WpT1xNw4NMQWLJ12Rz35o8ur9RUEmqTHBc9DpM9GnQ1Uvw6GDWt7XTWyfvMoyMtbYayfsfM8rZSUKjuEhm",
  "key11": "3ZUpif1dgucopoy8ChbtmzfP5jfaD2TbMn3s9M3UD1a4ZyAfCUzG3JeWt6YrRobJKyXUaSp9fv1SaTyegw1KriTd",
  "key12": "L3fC1Kgh49U1VJUSZm3qCzfUzdb8rFBW8C9Bd74yV8rFJVLVrUjxh7LhVja6soVzn6Np9j9qji8y6d4bdhS9E6z",
  "key13": "3s4Snj42py63ykv5YxhUbxY8muKSXp7Rbvg2NEq89j518w6o16ZLXrMLPK1Ctysuuxh1RKVivJkwFBL2qwjuKU41",
  "key14": "yMH9AhfNgpcPjzX7HaMV2soADxt6JJQMXsi2T6CwVFJawUZh9gJiBmqQAUV962UJkCjKuEQ6WyheJcVsfoNp2gE",
  "key15": "GpribkZoi8unaBzx15ygyrFibuJqCfe2BUYihXJhrJwudgqLFt88tY7EiHqySQs6vyUZBwFWP6oV5cgEErKhJXh",
  "key16": "49myWzBNBb4GETAcdXuGgbu9yAJk49H1TTEWgc2DcsConZut3P7WeqxbYsK4f1RajVpveUaWTSb6CMixQammewWM",
  "key17": "2RNAaGKoDEBYvZhgapP3f9h8bcLwVyVecwBZfbFWh6wn3jTiy4zD1VBXUzNvSjRs4TcKKujdW6bswLvESnJn5zUe",
  "key18": "5Au3PeMk7iJDPV1zSUfJJuphkPaabiRgLyvAUT9s7djbqegyVyKDANd2bt5xnfgixFDgWKcdR88XGyGTdv2N3FUi",
  "key19": "23J8Mpqq5E82VWULML71Q4JrhhSzmP576mwBKVLay4xqm2N5rDz42R3haLWjhsoKcZ1TkJ9fG3HgZSGCJW1URc9E",
  "key20": "a2boMBE3aP6mbp4XBzkXA4gb8BTqroiCKPDcnUEtJnkqE5HNxYyiw3UviuNKvhKnwZ5WoiGBHknmHJoTKM8HYF1",
  "key21": "358UPPgN59GF3V1i8mw52DgvN1cHt3MGzUtGq7nHP8Joz6KpopbCGvku3AAkneGTcWmpwsYoy4aGbZHZXx4RQkUq",
  "key22": "P6orgToBnfni4Uk3kAzrv4SVZ8EPyYMtTt3vdciTtXsBG6YyGQzu7opfsdYk1H2GGqgtC6sLBK4jD9ZRJi57cck",
  "key23": "2zVQmncdYjWGETEpV8cTcyGFkWPEMnQinKj9q6iUj13x7QKxjF4zhSPykLG4DmkFKbLvxPCazgaYoPerezjRQC22",
  "key24": "426QYXT5ssvb4QduSS6uxMM9cKCXSAodoQZHyrSD996fX7fhcJJDZfYKyZ7nRgitZX5EuNtF9hJsySk67fpkUXA",
  "key25": "38vDzREvBofL3W9b8tT5BTBbULzJy3LCKmqzX1i3nVSGJeoE5ZLKJ63Nu714h6TecA4SPpMxJUM3ixn7Ei7iCa3t",
  "key26": "65hFxCcsSVDYioJfsBWSYd1LV5VuyWUZrxV2eCBe1ENuyssdhjadu69RYJGG9HBpy22sD99rj4xkvwsYixSyjqc7",
  "key27": "5xCP12zgRnersgkKJ9rWWmeHJq8YEH5yB68ZPW46FCqmd3YKdB5QPjfEZHULYY5KsNrwLt4Ncq3hN3YpDVkiPJvs",
  "key28": "34ZM7mEdmyhuTCsyMqZxuqBppxBQJvP4J3DMfwFgbextuWi6MTyXXMzX8ZnHXAHMgc1gVKmGvwSoSuw7FL1EJCZ9",
  "key29": "61RhfjhSTqcT8teEx7CLMTcjpcL4iCqzm1U2YEMkc8Eiq5EiN1upYhS9uguVwrEGPJMthYfrKQaz4KfJBG2LN8vo",
  "key30": "2nsKjWnhU8ZJvjETaCVvtqVuz1iaKu1GYm7YprRGDAgSgYDwq5H4f1C243MK2pxUZzjPhBLE4KpAzo2FQQ1dwdho",
  "key31": "42ejF92q8HovzSJRfR1g5nwCQqmkv2ba9u3pc7jSo81G6TBCGfVHDKw2VMXsn5rfz2a3yUocLCXR5TiLUceNrRCj",
  "key32": "rJWSQfuoDAfij9rkUXK34jsBypzeSdG1WNVdTm3ixJJWjnpB76vcarFgPGfCxRTkSTRboKq4HR9ysTDAuvhHfDb",
  "key33": "2eRLEDEy8qHW4zwBsBdwa6aeCCaVBgyDCwSQRfXJft8NTc99SYbz5siomSaNDaFPV8yxpybP2vfDMHUUmh9kQzyD",
  "key34": "apLSSZWScwQp1K2xJ7RpdtorgZ5eccicm5eB4ZcAxDa7jdhiCsAW7TTbCeK8sQcj9FgMTiDCSbufbBnC9JPJtbU",
  "key35": "hBxAQvJCBpQ2SrryxxgCEprSBQgGGJLKXdQSvsEpNH4s8eDdwEpB6imVPbiGa4ybn9gmnPX27BtCKFMC5yYEuZg",
  "key36": "1LDuS7RGpscLzbzzEWvahHzPL93QWiCh2tPJsaHQfUMU5AtmDdect1ztEMKDhmD4a3yoGFQe5MkHYTG8J6bU8uM",
  "key37": "36sWWRfNeW2S6PoVFJrUuFMaV1W4j1Cqt8wNyBf52hFUWRTqMDVwySwsiAdzDssfccuq4U8MjcZB25EMvwjooGvR",
  "key38": "2xSVWukaSF93EyHCuxHhZKQm6o34RSqYJM1Mx3rjLFKo7APKHm6MfZDLFD2QZY2ju8R6wnXTvPZFY4kTit42jf8F"
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
