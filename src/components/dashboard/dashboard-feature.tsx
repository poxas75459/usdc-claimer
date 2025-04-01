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
    "2VDkjdDnoQ6KbMQu8qtLnvWeFvVyDc5mxCHhZQVyZkZJXPmSi6zLCroyE4XPq7X5h32bjVGQVoNygNgzaLtMojB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kiFG7LnucurJLdHj392Q3qtWvHwEpDks7ZBSJsrTuBLjSbRrouaCEVWFqJwFwdM3U1BJLnX63YGJD31kgxZxmiL",
  "key1": "3YqhgNbCGqkeBiHXxjPtdpo7v98gGBAFTeiLhzHjQgBaVw74qYxh9B747RvcYHfEUngazKqWbEoJYA2V6P9hcnZ4",
  "key2": "4w968Rd96tsDeT7NVot5pENwF2bW8q3n2FUXVnoXVXAg4J1CD8V1G2rM1fY7uJVYKXvBvnENrXVJnyaV4oPWrzsq",
  "key3": "2GJmu2PufaeatKMzFXUSHMnPFxMywVzUAJ55co9MTqcMCbiqEE43nmwbQBBmsEZY5B3QSXFVM1eCNAU27ec9hJC6",
  "key4": "4TFbZJtnQ6kcaKXWNuA1FsRVaT8Wnbin5PfXFksUum1PCLY2tyTJF538wiGgN1j1M7tu9skEGkfDcd1PR9Qoi32N",
  "key5": "2oE3UqC3qRRfv6mFDzFeCC1eZGWkciLneuQMwQsCbMVF6htZoHSMVtJjibVrh6exvk9i7eCgXvqiruYQzTDBKPX2",
  "key6": "6ERG6Szn74hXAqnQPp6eU8vi1kmewLRRhEsdDVRG8msdNkN7yFZHrk6mixr5ZwRiuPGLaELFrySVCDEyK2jxhFG",
  "key7": "2CT18U3a4DiruHQvxuWJhZ8HRJHrbfprH28SRpQdSBB7xqk31tCGKykV7sxRtVC94KXkQiJ6NttsDW5ZyererRwh",
  "key8": "2pAvo6wrFaWGZPX7gGfUGyL3nB4XnfYwbdQJmFkRvQWgWCTogWyfg4FqMoMrvixgB79eWZuWiDkeaeLARPfky5Kr",
  "key9": "TgQxGnLtJMUMsQ6xgV4wvKfdMSbtTS3XLADwj6jVJpod5KKmLB6w2vZx4njrwakJ1YbVSTdLnvYCwnYDZW3SRfX",
  "key10": "4HY9PxWnxagsqahDZ2XHFsF1PfebPDmVCNwQZtGfAF6h9AzfNJYFPGKz3m3kcsF7QzCUUx94QPWZqHePWaBbbpj4",
  "key11": "3VaxCaT4hQsVN9gvuVhLGe27Pn4j2baVf1kigjHzLtFKh4yQ7RZNbfDkq3HdvsgWAJrAaaWu42yTqcnq7rEFq7L4",
  "key12": "y8z2JbwapZm4t5hJ1s1M5UNEpGj6C9bqHRpagqJRqvTzYGrkPmvNNoBxXDDbVAZ4wZz1h4TP1xw4MhfTSiM5Dud",
  "key13": "2jDwppGMN9xFLCyaCakcy7DfJ59qstMA3aF8KnJ2FJn6qDjD1tdLwet4t9Z47Qb63ct7HXNTayx7G6VmMTbSZDGq",
  "key14": "2t1tmPty8kJr88W47wtigrm9BGpwFMEPmiNLLenVMYHrmNcymiD1tTgH3uXZ7NqHW1HXdJ8sbiqBiASbUu9CWoyA",
  "key15": "5UeoZfj51em6xLdNh9Pyud3BwXEdG2QZv5KQPfRztm3C4r2r3ukdaA2gY5W9fdivx97Q7PLJvK7LEPAnxvsr8f2t",
  "key16": "2YYKrh3PPTtpTazR3KaYrJn1ys65hgpfvbvtH1s2CtFoydV95yE8QqdU1xRzXXpor37sbsqsp5Fyo4wFwmFvBTa6",
  "key17": "5QomybdcMH93boE3v1L2MKJzx8Gke5Yj5SgN2EbqhtKgA4KQnQwSCh6h24ndpncKX4VT3qBwjF1x8sZeKmVYxTz5",
  "key18": "2ZqQto7fqyfUnqudgVMbLWA6pY49bgQLvMLyYQorw4tkAEyJcG5yMz42bqKGDfHMd6PZEZPRNHZvCqLAek8Jp3S",
  "key19": "3Fzd1Hsxq1jK2eUYa9Ld4vHJTA6uG6g2xyLcDRqoP6D3VwP6kzqYsDnYAjVZAQbA3piZ9aNz1tpEeyTopW2JqU3H",
  "key20": "2qP43tHtZjaQJtgnowpZuPh6km2BvZekVUkC9JB5iHh7yA6TCyRqzgVzJNy8zMU5rcMLHkffYpQHBYsJ7ZDhtd9B",
  "key21": "37wBgjWvEgPKzoEgcBpWkSDnMujDs9VrhLmPEgZCkXXVAVFmagaJpbV7HPCWpHwVJEBS456wn1rMXvXJosxmpv2z",
  "key22": "2Xd6yNNbDMmZASrd5zKQn6ww7F8dxG9KY45oSbH198wv2r2PULyufGazCQ6isrjCfNVBSD1Jq7Lf99aexj5xKJi9",
  "key23": "57qXH8er1jmkk6Wb2ffn87T1j21G6quxocaDLaPZbc2cWwHcDxy9CBHSh6FceKqLxXZzDkNe7tehqt282bMSM5RF",
  "key24": "2UA1AJBZ9BEzAnr5eKeeaNj5vW3TmJmkApozcW8fn53Mz6fV2SYAGDbxPoNDsVbsv6uvm4R3g3V2isgC8wn2uK9B"
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
