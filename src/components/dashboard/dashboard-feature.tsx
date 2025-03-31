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
    "5ATr7ftpjb1ismkhs1JdaU58b9bAcs96Py9K8v4didJh5yKtpn7uL51EuCg2Hswe1udZjFzjjo2s1MJuVMQ29vBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vT86ywmyMyDhXxa9HBtJE7jQPuXAJXddJUPMP7P6JnSTM4seiKtfuxvbdWBqdbbkn5N1R4haXvbV3EhpWKgdgUt",
  "key1": "2ABSJqu5ujTtskn6r2DJmLFhCU5nkvFfnWWqjoCE6dC9e9xMeZGhJ3rVPgP9qAuiRitSo7accsTmV6fdiV9HuGbs",
  "key2": "61mrQHiD5VWfet1STAmjN4viJQPRu3xnqWTtq5i17ULYGz98tHyjb2qonY9rGrK71Cz4gojHSWptxmQTXBCJJsLM",
  "key3": "tCmKC3aoccB7ihV1xPh9CEcSg3QKa5sqBroDcnAZHsQuAXyvSvh5iJGKdt8q9ysf5FwWCSwHeXdSKJsj7mkqeLC",
  "key4": "64V3ojXC1QUYjRovX7inaNRTahW5BD7ENTWdpf2bTerQe337jDxoMboeyCVrK6EjJVhUV5airjxYZ2qRHJACCq3N",
  "key5": "3TAibu6F3kV4aGRbQTzrHgpzpXqBeA69PCuW6Zgz9vB2PKLjkFCrP92Y1mejvkZMoNdUmnmPBfqALhBDKbTA19cD",
  "key6": "MpBBQXPbnvYNWbpB7U6shAHeb3ZAeHVrLYxxPBibnHAzUo4fXa72MXmHCd3nCGd2u1WdnawxisarLDqvvEXjL4v",
  "key7": "3YcLYK4faxMpL1UiJHZ9HMLLcHDJrSHQ3AEkVCWRkDaTVXXaVWtVDWuaVzbDoENf1XWhDBnQ3ecGABWxRkWCxCEx",
  "key8": "4GfMK5CLpFXaZZ1UEzQ8UtBnKzbfTjP7Cd3onvqFMgWN3zLHNDBfbAZRzHVXSMAJPZrdYxuMZZLaCwaUH6Ja3D7U",
  "key9": "5CQqZJVZmPdusMPSaDmB1ijvVsat9ubdodyNKbup7vwNh63YfvUD6VRswFmGzRuPxU6mdQK5fKcFEXMoNF96tjJS",
  "key10": "4TrDCaZGuoTUywTqNCZDhq2Kq4fv8qDPofNQmfjQP2UUvqYVBQ2dsU1vEsLe4FHbWApQbuF6fU86UBaDPZgFqYWe",
  "key11": "4A4Tchdbx9xqAapksC9CD9qU1ACknUjamyn6KSaZRay6DhiP1UcqLFwWY63DM69eidYrthTFMaLjUaN5s5ivtaUG",
  "key12": "7d4NvvADsDKCbMEcPBBneikRXcCTnjLKzZaC3huKuPN7zJdVLP8ih66XmcvP3NfiQAeBTdVtFsJJsEkU9nxvVpB",
  "key13": "P6E9QZfikuTVLftd7G8Eca9qwgY1oW7KWg252CAD5h246R1NbrLFHJdm7BMZdG5zGMUvcaE3e4oMVCd93zebfxW",
  "key14": "ADHx7n7Tb1ww2SWRvzNe6JCT4CSxgpFK8Jt3KkKYvMmTPQDZWXcrSkawtQbXogH9xURQL4H9kbDbkSrR4sGBNta",
  "key15": "2zVrBwCsAd3mhZkQE3So8vWtqzqqL6QuRf7aa6hA36sEdEeBGZy6GDGpbe52QJBkWnj1RYTwiBcT6aA4teVq2p6h",
  "key16": "htEgQfkXkYGNAhoRMYuyTvns9Ht2FJW6V5amvu17fLL9HXs5EFSvTaS9KVyhTZMVcp46WAdAyKtYGrqJdRwTcyS",
  "key17": "3N9APHhd2kytH8JXrX5w6112TnQANU1iUoAgQ6yMp8jBLajyjQH69oCrUepwcYFpZg85ZUDNvBdBE1bNK9Vnjmst",
  "key18": "4uCNKuy3tJyh9c7HoLT5KAqyMpDzSjvWkczUyiZbfjVM4RyfAPvraxyv491Sxbu19UHZQ3NMKtps61Y4ZEQcjYRa",
  "key19": "3Z75pWazhzg7g9gg9ZgW8CusKUGGgL7SMhFLujXW2DLYpQdsMXKhWjFy3yXPMoYvq9h8HwdX3mgdyZqho2jxBtDE",
  "key20": "5Tq2LtmTax6oXZJcbVEE451cXu8EKCML15rLdiM14qCJU2yDYv9SZGHL66VvGgEKkzB4bsAXHWXZyFN9gHaxYznz",
  "key21": "2JX7MJ8ppTtJS7bHawDXw52BBi3qhVmqzZpkJsUAACvP34FjwjW3KRtNHMPF1PpZJybdgAm8zLE9TdoPqVFTmBa1",
  "key22": "5EY2RVPSPwhCCpfuiH1xcdwb7BvV9jRoxyos6AXXALXNATDqo2uKvKFcyYcYn2vujvHDBpDztiggtmBvCdyxMZnp",
  "key23": "2oXZ6VK5EvVpaevMGzB8PRd6yBTep8a3buZs6khybvnbac6MFZAwMTpyXsrskPpMrk7wTLEDVFN9BsM59A47BF9m",
  "key24": "uXCczjcW4xvMAwwPfusxvsq8QbUNL1pSb6UfiRBkXdwYY26mYuc7WoSBfjGZLAiHgFUUBYWFJL6JeZNPxywmMfT",
  "key25": "gwnZWuMtRiS4XoGJ38b9vaR6gAGfSg68hBoaLk2ZRYKPUQzf7stn5Cd3yHACUkqH7FwMsWV9MNPPfe33cWjcLcm"
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
