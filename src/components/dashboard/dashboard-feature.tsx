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
    "3VamCdtD8ieaNN4RXp9T6vD5CUFH22ask8nWgLbr8heppF1pMhUejsKS1JEiHkLEWbyWSwiQPPkJHcTHijTRDQij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33B9BZteYPGAWGMAFU7wdDjUkvQNMm7KKwipt5BzWpGQ1rwFWzrBGJQ82b1B8v8dttyCyZXV2tZFzXxGvCKRDfzH",
  "key1": "Ab3nSTdBnUJCzVmMVpUoszL8uVgwxuwpYU2jUD1i3es13vfpUqD2r8Gx6FL8aeWM9bXxKTWBeAsbeSKZR175qCo",
  "key2": "3PaMFRkymCHr6hLC5M54uWNoPdgtabD7LaK9TWnMw4XVZB71G5mM4EMnzd7L29bC14ysoD4eNbpMyyGj9JvB8pu4",
  "key3": "2B8Q9LboEY9MkiAX2VcSGtXSH3XSS3RRxep1wfnT8PZdAiuVZ2uVWh2dxMf89wFSNJ2CZtphB9w4LSbLhwaXcEcV",
  "key4": "dmKA4XRFkhsasiSXpd1gcxmmfCjb3o1bisYFF8LEqxZcajXvax6eUAjbuHqK1CyUyTgEv8HVBWeX8FTL2yp6gAe",
  "key5": "5VmiLt7pnNxhSUmqWbAtogSYyLC4n4ziZhkYMCjw3oTpNVdz7hJjxtENJ74amgttTY1fZdktgsgAcx9VH2xYx13g",
  "key6": "5dZU4MRySR5hsz1bfTGxKDBopmRaaZuDEVtXfEEWcH33psshpKdTrP4DF2xB6uPwZFUzsQxYPNYLNmRsm6TJ6YYS",
  "key7": "2E9hdHzFUdgMDJuTZtnkRJKL5jXb8nJA6qC3MpHhJoR6GvGDn3BNfNToYFJnTHzkassFjFSU3w8yW4ox7KSBEX3B",
  "key8": "3E8oVKyWx2sgyVyjJ7DMXRaPNmv7EWEAF2foTM6oRBGQnGMrgnmpMx7DZsGHv7Lzj9BS6sfptnCPTnNYfPsN2QCD",
  "key9": "4ASxZkUozitUf6t4Q2b3T9incY3uewtNJRrGVPWa56khnmRoQ525nePpxgeCdAAX7dBLim9YEiwg8WCcJH8zDNT6",
  "key10": "8pPsADytgKdYNfpTEgEYhfKavb1FhCBVLbMtLTi27uVvRAG9313fJKyx1sD72HFGUaZsjab3Frr1gJhBx3a9Bn8",
  "key11": "5zfyynynWznooAUYzjbKsuKR9DSgkoMzdbAV3zS326QHAC76dgN8GGbwhhSoWuXcpQ1aProwgxqTCDfvinXAJXbf",
  "key12": "3T2XZnYVa9hZnJJY4qoG1pxxhxD1Qy5b9QzDFzSJUfQyoQV2viSNSmKuNhrdUKnm9y4W3xcaBgX5KemaDYvADjWY",
  "key13": "3zN8NntFLXMHyQbDNBNsikaYTfzHBf7q3Sud6mUMQfjuq9VoyYK82mSxhEPAdfceYGmS5Fb2Ec62P29gUqmL2fXG",
  "key14": "51uybsNa2kK8VKcPUKcTvkXbzY6HKepmCoZBp5WZ34asF3AStJeXCXoL26268K42pmyAE8bDER6tbrqJTFseSb5m",
  "key15": "3uuiypw2DHvXKt8a9YHrocvk1n1RpngmgXg3X9A1ktjiAZq6i9FZ8QH17nmuFgUzZSAf2kQTUbZEQniFeYmmdVhJ",
  "key16": "4h8Rkaomg7KcBMeYnFqEqLQFV9PmNdxACH5wF6gn7S7fvzhtSQb33zy41jxSZyc62KDES7SDVnX6ghNja2y4QSPQ",
  "key17": "5Y3RSrtVmZ1XyWd3zWkh8eCvMh23keAgKNgdacaXJJr812kx53RGChiVuEfBh5gKppjLystTu8yPdUsMabNCHpNu",
  "key18": "2knDfm56Y93b7k2TKFJCMpzRNQY1ngka49RFesXeAKxCSo6cAycyMQ8mWzW9zDXhgTxHcL8cx3MheqFJKx7AUBye",
  "key19": "2Ru1zj7arS2wMyR2tJFtKKjWg7xqxGx7nzBfdXTcWF4pZD9QwNNpTjPnUCg8Fk1F3HBWrwmgwuCJGcRUd4cpU4oJ",
  "key20": "b4K4rgSQS9sgHgyiE2BjMjBk2LuMYjPxNyrMQUm1S3KzXDpH19cfcsHXkHe4j9Q6XMpVQnYCKhSK4hKmFD9HoAY",
  "key21": "59LngwDX8EV5K94ZdHE38qLNk2vVe2pGoKZ6HS3iLhL9ZeDiWhuQ2z8Vr8ULS5zJSpaM9TRZaXempfNY7eJdHvGa",
  "key22": "3E9Rpv3LsXaH2QzZRNczZUNYHQkgGVLeSnmjDG21d4UdAwTQqjxBAkNfdBbwfmk1BrcM6r9dLckyTHHgH6pQPG6n",
  "key23": "28exUEcNF2Ti6rK9NdNRYsGpwZbyasRXmPKrd7aZFPY1hideTMGETgmYzuhs5dmGeHtMneYYa5vP3NHi8cXWDF2A",
  "key24": "2NvSzMgSsN5MZoAPB3kGpbT4CYNUtaNGtMK9yEKs1uGHpTkkGVHtWceZ6Bt8AaeWVCxkfk3v3qSkf45chQY9HQm8",
  "key25": "4vE2ujByXnxoBSengKaYcuNJMKT6srYnWx6QpPmUMFZiLNB84V9ors6SsM8u8TVcc5ix68GTzFK8qYcevHXrwPfG",
  "key26": "3aC6y6aHovARgXonxEhLESG2gAqyxsf9iVjiDpmjfiHsVMarYYDKqozWbhZqdv5B7cJETYmr9gRaGWG4BVNV36aV",
  "key27": "52TQzLittBJkvb73eJSKhsEgAjjeBF7BoypxeGyxzazcrdBmpF5RF1Cf9QVEkbnkwx5G3TuTZKBwGUQWPRXi8LoE",
  "key28": "3dRWYVFWSDcD81xPwh9ngnLyzEtbUahDFkqXvVMd9UW3bJfsoV52z7aCjXF5TLnMoCbRSk9D8yGGNFtorVGyKvNp",
  "key29": "aufD3KME8WTgaQGq45LKzX48j5NjaEcTEp7FMMuzRF8G1ctuiwT5g9gzvfXSwt93Sowd5E2U9NUMAAb7qzwn1WF",
  "key30": "4TurHUYBbDhcx1T5DYhEzAG4ctdxups3CKpJMCSNR6JnXhoskJXoxdzMAPfrp6tPUSTGxNr4ky5bq3wsf6FdfzCP",
  "key31": "4mi6xXjb5s4Y52wFCPTTpAR4BPX2pEUqbAgEWFZDvLazCC3cxA1joNB6RypaRkqKBxc6pYsuPX9sf71A4Mkn6moT"
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
