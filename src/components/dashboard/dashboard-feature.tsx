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
    "2r8qr35kjyhmL36ExMFrUpnKkSLcSMe3XgfHd4W9mcDsWQRsQzuV2xPqyQ559oTTUMp28By4gWvZmbtXAu9n97VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rq8n4XMPz1V9pUixoXG4zs7AdziNS42VyXDnBBwgaN5wfaXTLM4iUSWeAdEE38C7gzDuhFpftVBwosoXmJ4KnsY",
  "key1": "3zNtUHFz9XxTy5PpjnD8cKKjgdnFwYoUHaHNKn4X9qccGHiHbyk9rsubiM2PprMMGYdq24Sr6Wn7QjK9YS3PmNwi",
  "key2": "t7z7p8nYXSTeLMnmSSfmDnp4knmNDbdHwKckviDG1GyF89xYWq4aZ1Rm2PVQBhJzjMYczK5eUaPXeaYEdzhf3JP",
  "key3": "47HSzxKc9LF297CJE3GbgqK6XRGW7ucgVqJZnsYVhCvQ3v9KBQw5CRNqPpYLaQcTPs627qzyq5W17nmmviwuQqwT",
  "key4": "379sBYFRr3VVstfmkb3pYVkxi273T7Sgt76tYiE34PmNeN4Q4H2dzkRmZurp3HCzN5H1eE1rTHhkPKVxrEvqqUVX",
  "key5": "SA5xyCr1YFQMwuTQfBBYYfPXrG7wTpXuxQLrARRP9iEA2Sc5nNj8TsXBERxXz2m8b4mRxFcxLN1vRf27cDuBm1t",
  "key6": "5fHBcsTd74NkoMRoUj2Dmc539dLuxxY4YnwGzJB57Ze1DnoKns8AgFMu8gi4CSGcrLou6B8ZaaryvGUEF4ZxNiJk",
  "key7": "4WMN7PEi4bcJy4jrz1NvDGLLKrpoZzfu8rWZq1FdLxuvm5BvLPEQ5fQAcSwUN7nVaZxFHpXuDXz2m8MEgfyy8FpB",
  "key8": "2Jvqv38nMNYUtAzagVV94gATAuZv6t1scDu5e7i1TCFgDURLKPJFrxUHgdtre1e67mca75wstnBLnDAuRuBJ845f",
  "key9": "rKGXK4tnXo2d1KY8ZAyCb4mG1URYEE1eaQGYLmqgS9uZ3FbRmo5jYhrZLzSELCPb3TQT7awNoFKQCDBRjCqzvBk",
  "key10": "34Y6HVJwxdv3gEtnKs8yeukASz6T567YKS3x9vzcoZo8uEQk38Uee6cBnpbPH1EjaqFQckPXhekxqRwr5pjxXkKm",
  "key11": "Yqcxs28N7zNTi3ZXB94NWAjZ2W9oh6nasQBFwaibe9u9Tu8KnAknbF4k7Pk43bZ1jDWjeLZFRUSGEYRipxexA3m",
  "key12": "5uwQHJJdmtCTUaMotNrQGUYYDVtrm1upuZ2fEXTT2yez9TJ65aivVKQdDWWCK3rM3Gg7KDTKR5B4V9gAKJRdKwm8",
  "key13": "2WzzDKyiJYC9Ra8NxepzjSXscKWMYfgwhVZHt3oBe6kpF6M3JS3Fmp8zeiUWgzSoWudx4hL4RzP23ENnijbNkWeG",
  "key14": "3mrcWua2kocfoDqcccV7KPgmHrkCgvZ1nDB4uAJwfEsFQWckF9M1hd7xot5T53isFR71QhywFTsxi3UV24tKi3et",
  "key15": "5yFKW4yGbHALcwgSVPK5xGQxvRR4VnCB5sMh1Pm1PZD8BMrw23HVuVQBbZDmFohLtEyCHGTTmBneuAnwkWjpQeRr",
  "key16": "2qFQFEWE5AgBNEA8juqVu4HJQ2kvrXTPYFZD2HwV59akm7B1qcxQHYcbx6ps7V7EPTivjneXHG7BFichvo2Er6sh",
  "key17": "5479hUsAKA7W6WuEknbhwrXEg4N8uTw5U8u6Lp1eXdswSqYhgFW1rdw7NSKa5NNMXVZ4PuiDjkHj3bU56v7uZMFy",
  "key18": "5cWMhcC5e5nqzxifv3oD1MJeddkCPr8aq11nrVT3uLmxBGWy51eGY51jT5G38958WJin46wDFhM9eF7RzZ69xHsR",
  "key19": "ukiykRSyPXAvo1ADzeGPK1APS96XD3G7S1HwroMEzxE7jmWbxvPua2K4BT1JYAjZqnCCmur6u7EbfnrZYaME6ba",
  "key20": "5rUFBDxNcNgauQ6fZUPJ8WjnPunEgkvDs6h7XiBSLJ6QBTzvz55TiQSrTPfqm1p9QBpv4wryksC63KrZE1ynvfpf",
  "key21": "23LdiJCuaxJ4rvtnrH7npVnH9oXH5s4QwcnQj4z7EeNTrWyLr4GWBHQq33RJfyv3sUHdqaYYfBhwTT91PzXZp16A",
  "key22": "5eD9A5PUadP7s1TSrLJf2Zb2isHk54si5dHjR7TpzwksKZLEx6qjKHqQae7qhyY861SQ8DUzQThyYVJmZafhPpkc",
  "key23": "5qexxurhnSyWQT5ZWEDCjrDtvwsRkfz2dwYri5L75ypV9jYR8TkNuKSnbqV6AepbYvUa8gTahuVYUgn2rB3H4tMc",
  "key24": "5t7cmnx2BU6VTGjcPaBz1bpsJnpQ42kiQPXc9a33ojz7mD9vsJCBTPzcRryV1X6XqqX3ukHCuGpjjHF1EhN1zWHL",
  "key25": "3zFseQ2yo8dvSkWJFe6h74yi6sGzJSVvsDwRTDDWm3WfjmXJjdvsacySkDG1VMZt7JE6puZ8jEDFAvEurB1v2Zmi"
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
