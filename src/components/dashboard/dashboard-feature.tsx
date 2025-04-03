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
    "3cBx3iaeU3p7EeQcthrGxXENGaRMH34ei2smm7LnhrRtGN61RSc24Qwfm1c6FjqrcCPA7Fw8jifwaf4MpnC6wktc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEsqv2F65kskKXmSqwnmdtsMCTiWC3w62ERPpLPgtLyprdm7pQ7jJfhXftANTCQUrZoT3z1JX7YApfWK8m2Y7QD",
  "key1": "2HQNmAtBKUDrQHeZLxMeYRTdHGLmfMXg8PqFoBBosN5NMLRkFZCrp2P6qbfsxi9DKyqEcuejeAWLNr819A21TAzi",
  "key2": "7EuQyagSH3mkFbaYAzyFdYmV9T73edmsNXu49xwC6nmsqGo3VXYLmSxpZKWnH2PFuiVzQudYiycnhWjTQp2Dkir",
  "key3": "4se9e7AEQ2ktK1KW5f7WgqWY4imvWoYPJzGbgV9hS3vVEdRq6taYN9vYtLGJ8kqrD9dob3GC4tHn3NuTGeCy5hKj",
  "key4": "HPg4V4VJ57Aufe3TAchvWLUzfhYqNAdciWGPytn5GiTYXyEdPTa2yCX7TkkDCF9aHnHfhuHQu2HeVbtyLmE7ALA",
  "key5": "r7DoY1itbjNvkyMnpNwdPALQ79MgmxmT6KrakrjcJDRbp7YBcGj9cgXWddZCBgUnQdp6H6U92L3ikvVbKM4xC7R",
  "key6": "2d1diAT2BTemHBZe8HSJEtStiQw1kw95hpFCUGeGd5ms7EYmdoxtseicP2QyLvYqJSZavMwHxLkoRUNcCS7X4hFa",
  "key7": "5Rv7TJbbcb9AmiiDqCB3VYLsMiedctMGoVi73d4ksbArH5vEN3Vup6a8hve8WY3GoTXonEXivS453qBvHewzM3m3",
  "key8": "3GUNrEZVwGH9PqKJ9w191T81T9UviQHYbnS98yR71NTTZHU77RVK1XGgPLm8wA9WH5QPrgANkfNGcNir4aYqkvi3",
  "key9": "3e9MU5JfE9CN2ttcsgRvMf5iQ5mVkjaaqFgUV62eHaM9KAf3pc4QA7duSAUB2pFp357ctfAZv1JS8Bj1YbXuguus",
  "key10": "4TrxxWe8k6tN4MoC8cZbL1bVUhb3NNToLhQuzxyHQZnM3xXu3p6aDzBHc59oKD1777TR6sqLyKrTsLoRq2JkTTbV",
  "key11": "CrgwSWGCxXwAvVXvtq1YWwgHL7xPKNYGb3xtTv94fnyeVPmDzgKCSQnv2v3eav9APD8bu1EmmUazNUW6rztqTFB",
  "key12": "5HtvqLCK5dLCZxJP7NHD6G2vfU1V2CR9jL1YjpCgtkkGoJ4WPD3AxyquvJgdhszRbzC8AgrTevsXQyDwuCjcSk4X",
  "key13": "LYxRjUCBuPyjCbPCrb39o9vhm2uBnp5Ukv6gPpv4G9BKkFHitRRqWAmUe3XcoMJinwaH4A1bBH1T1dsP6qAGxtx",
  "key14": "534r8hheA8rHsxtP2SoHvUEjTHgppkefByEb4XBY1g2kVopS5NxtnbppcLtaMGuqRhcpSF17yxoUSuMD6Kibrt6B",
  "key15": "3ZFuxFo483J8uYDzFjhBPJu8vUhoRA2CFBQ74aviLPdvBoK263C3q1EmrSy9UXwsyqkz6jXAytUw7AzzmRtkg2N8",
  "key16": "3zx9DZBBivJc2SkTgq7DEfGYFKzvxHzUChS1ycMm4E9QSWK5sKmvoVmVaJSiRGPWQbtQiMh5a53nEzreLvxf5w37",
  "key17": "2TxwrgNrJRhtkYxTa7MoJwceCCMjDaJPqiAEt3bpVDVGZcTsj6spvCjn5tnuzmNEptGVdy4VX3Dbah7dNGwxupx9",
  "key18": "3QChL2KGvSM8gGr8VcqNS6zLqDgXpjNgVd8nLqzDVsAwgsR4AjXXXYkg1GNzo6cHmgexMYHfGBwEaTTSBuWvctCm",
  "key19": "3gvvP5KutLAJfEfazkfgeBbo9jsARhm5PqDr3UnAFVRAkm7wEqKwjCbKvbxZpUzySiv9s4eNzvxDzSFaA4m35JkF",
  "key20": "WfAG1J43zre7FHw53y87tUUeZYnRtwD42aeHkCpM7sxzKn6SmnQUcgKDcA7vg5dHinS3xDZBHguH8sMcA3SqxHm",
  "key21": "3KPwNi6dSug82gYWRA3bfMHh5YjMSDLiELnaq8NDHJu9mezTnYdN5gYpXbcTi1w1UXzxJjQHrnXCUKPqDLftpdKp",
  "key22": "4XfiuhxwnpxjA67fX7XZJazeiMsj3E8Y7V4YXqgFDj8LNDr8wvm9xYgULEmoSboF3tKeG1RRzRee84wjAQjoXtun",
  "key23": "5FN1WXHMoD3Ujcb8iV8hpbXH85bEpG4FFB7ZXtze7xyyUhB3SMWNdQRuDMyvkrJVEWqQ8wsUQAHjPT37aWFEXhf4",
  "key24": "NLLWNG467QepqUswQcrPnSpRKstdpi9BTh6iJ6pGDkGFVixNPRru71Ve8oduDHJxyaFom2K7yTXBKc16Poe18ui",
  "key25": "3wbBoPakd6rVaGpieogsuu5PsrfFUdQuDpwCUByqsaTxfKkJBxpvxNDjURY1td5gQEbTxkmreDM6c3VjumUbNM6U",
  "key26": "2wo6u5ieMj4S5b4DxBJrxAYH54WzqP8cjA9Ydsae5g4qjWuzSBKKDC9E916T9SBejceDGRFA6HqnyvTB5Cvdsc79",
  "key27": "NzP7ZfgHK869MCTFUfn886hp92QzPkUHmMpFFQ6wVVbEL5aSLfTQvqD6GcvyWy4ByZqd7sLS9obYHSEQpwQ2wDT"
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
