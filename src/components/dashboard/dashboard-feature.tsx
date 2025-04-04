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
    "2LWjc1e6ifzaRCPoEScSGdGDd1u3Wt5k8WmWerrED4SY2W95ooWeYxkjSUjcSXFPMiULTgyXSHxAwbXMzhLp5np9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpQVytiHHuN7YJS5QpZpw7ycUYWJeCoY5PtRdQii5yKnT33LDNnoA3jezspYSf2RkzrQSd1tmAADzshrGndq4f1",
  "key1": "2qbGwZzEeNcXLnvPb8zpbz61yZWLhjPSLRosBMhHTYUv55RBrfsFwmRaj1u3doALfZPxh7QZaAuyTQ65w72Vec6p",
  "key2": "3492eDBAe68KPwYNahQvcztGGYbBrn3ZAohoYdnyJcq9Mr7SxeLkLLQmdD4MwFnkig6VZykYzxWKgp68q7vxe7R8",
  "key3": "5y5xwXC2vijg7txRQHMD6CbeVVV5amrJs9UyEDCKcoANGgC3kzvi7VfVeTgdnAzfPPLSFmW8kParDwJg4v7vpy6z",
  "key4": "gzGDyhMT9pomuArGM2iRjMjbtFFZFqH3qz4pE3u3ruVQmZ4vtjkQVAL21oZU1x9dgG4ZA22GPNJmoH1BRiRavHW",
  "key5": "3xpZ95noFFv2H34s87fKDyPdEfXvrgnNwZrE4EwvqC4wcXzvyHESrhq6GrdiyfTaXb9YaQhVX1tXCZGVxbM4D3W2",
  "key6": "3qVcdseEoB2JRz3z5rHxufcNEPJ3cXPMMf7Wn91g5M8U388KmRyLTF34jCthUHcrB3qkMowvLc5vBRraxtTiyS7S",
  "key7": "3cjewP15Js6WPDZuTXm5NWkWMC23Z57qBe12u6nxxbqAzsYTVkATbJdzJxWAFqxdMnwoGFeCdUw6hQnHJfACGsMJ",
  "key8": "2xD1aoe5LApY9b1p8no4AWuZPzMqGvQsdV83eZyWHWwakJ3SC6eGiAiEqRVhHnpFVhbduZARPJV8wooDaCXJsRDT",
  "key9": "2dvX9CNzPd2mmHaXCtLrEZ5WDQzKA7ssaLaJTbgAUhGe2tvY5ngNemfGJTWywqZQ8cEqtpUbD1kaTJAHDrSW1QN",
  "key10": "3ACouLZnuz17B7FucNSZcK8ftkRdYeJKYNqasZFwS5KHE5yry6NMzuY9BFJDE4FZHJiFAnxCMaNC3y2niipE89Ch",
  "key11": "36JSAv4VMtSmtPcHQk8BLyaXCq37sGg3c4CSzvrHhAuSzD4B63UtCsGkeGeYGKKxVA4q8twPnL692KCpJPU81Noy",
  "key12": "3izcJLATSokWE24SBHF81mX5zUZe7r7yjSReFsFcieFDJfMq1TvDryDtcYmt5bwxgqmWfGF1s7aTL6RVzjhD5LCK",
  "key13": "Zo3AkBCjddV1KtznxcpuT69pZrzcP8SXx3fLjbadcnAd1s9z4SHHKDCoKG4WP5ASEtWckNsFvWuHinFP9rM2dsT",
  "key14": "2zPS8FjLrrMs65y9ZbwNybjZwCYLKwSn6rXrW727vR4XuEANSwWxPiEUt3cDWJjc2884S8i72LbybnwxQmgr5Rey",
  "key15": "4GQqX7jvJyRMsasAMaj76REm9YvFo5xfNip6gQKjmfNSZUTynVXSz8TeoMfevR2kfP7CERjFPW21nrSaoybYCTBF",
  "key16": "2pgjW9r3PmLRM6AbGPWLs3dKvHish9SiCaRKmWjJJV94cbbfH6NkxGouMsnR4PbjQCTBV3DuNCL16hgKszvrD5t3",
  "key17": "5H4M4g6MrMNPzS4A82kuXPZyvv7bfDpj3b2x8RWP1uvV4jX42nJfJyyFN9wJxJVTxbFAekedvZbb59AXfQbieRLA",
  "key18": "3n9mXKX1Ay9t81krUQy9wKBpdb6iQ5tTX3uvUNqdvoFjmRYYVcAAJ5UiWXeLZRPD3CArrhtB2z2rJtNW41EpKx42",
  "key19": "31Bnfojkxzd15BRPtfWh8p7mJW2FWhpNLuWfKDgNPk4uKsC8JywxDXBs5r2LuEYFqd7LktvjM1dZqyeQMmBhHRrV",
  "key20": "pbjcvqS6u2h2QcnMDPVrMUwN6GnCe35x35onc8aP6Qi8VovKoqtuLpkfgWsgeT93J594N1nKfpt5nuo1gJc6ijv",
  "key21": "3saTWYgAjTAERFqMLscWUzZA7hUGYGUPmAAJgAqJKQEADibLP3ejQr9XsDYEee73AhfSkSTubxCRhMBzqo7HpGC8",
  "key22": "3JJBFb1vQ1RW3RbLCu2wHh4yC3wWXLkfQAePiqpaixkgBfUpoA2pKWZniCdD5SDiUaDcd9TU8ziej3DUBwhPZgQJ",
  "key23": "53siJ56MdU3yTfWCdhU6gpDstrpENPGxgPmLExJUbgZ3vTcRgBArnjTDWYfd9g4DZobDSPL1nvV9jQcXVqBMg4x1",
  "key24": "3RHYJoThcsnBS98eVKgmL5BqJPArVq5d9137xjb3BN11nxMYesEa5JQC3jT7ru5xTvMF7v6G2CVAGudm8N8piyuj",
  "key25": "2wtk8HcLX1ujCw5i74zoEKBTt1hx6WrhR428yhauNCpPqBeoAUvBJNYe29FbaibMR4mNNxKrR4ZRUhaKZxjkVn9N",
  "key26": "Qd3jvhFoYtcveoQhHgodLMpqQGWYNW1uyL3FaXNarKXzhoiEftK35xR5cEJu6zt2irzS1g1WpPBygdQviztjTtK",
  "key27": "22eLE9UgeiG4h2ibYEocxi52Tpmoyx4fLJofcYgTyVRn4nEkYZfXPo2PqhGVaA1koTrVWXn3qFPZuXxVxcvX5rj4",
  "key28": "4FEDyKnwrSFi6V8v5ujogYHEXKoniRfDmoxajC36KPYHSXQqQMWKxpWHgqWJHgPEKQg2o34kHut5B4nNPAW9hN5F",
  "key29": "3FqCmp6MuCn6gag2owRHC8pFX872XeuPpWawG8riLbJ6W2s5gQd7U4wHLm5cEaojAWyMrJaf8N8DEh5PX9nnJy4G",
  "key30": "WJNSyGXboLiCB41g8R6TsH7wFeJE87uBcgo6sWpvs4zXnEvD4zc5vHuzGmLWXiJ236j2eJTTYH926Pd2mkw7BCD",
  "key31": "1zRsXAKE1QQwsf49iN6qUNz3n7VvqfTszf66Vzu9vuNyRfPGbCEjoGfjAJFKZxGuaVaApJqg1eDhBF8jAYmgm8p",
  "key32": "2zEqki6tuagY3atdAdzLTAq7Q42XFSnzqqu11fP4EZ1SiCgVN3habH4dBtV2eEuhHLbs2kwJziFYSg7hw1BeDBHg",
  "key33": "5sDyfCf6fq8B3Uxnvjzt8SQdAXGziszMUzd28KCvg8R8UscMkH7qHbU1PwrcvQDvJt2hhr6LdatYcgQEPsYdrSbE"
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
