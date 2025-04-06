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
    "5wdw2odXhfEPm6u4XAzuXyNPw2nxYR4wZHb6AC6orCTNni4bnFEL7Mrqv4fJALRBcX9iGyCGARX49aUSVs7vFAie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huJxUxAtx7YrUa35vSpN418AUVLRnCLinUeajA8bKkGKeQHr2FFQicjUHve9uhM5xsdu7hLQVQGi9LdNR2Y6RUx",
  "key1": "5NPUrNrGbSKyuhQT23io89BMXA87T65E17b7JqCcdbiUpC8wjjTP9iCveyNGFCv4wqZFJbSV1eyAV95Ss2MAq637",
  "key2": "4GJsdgBgCRLa2P1yz2iFYEPELFKEPa9KgNzTWrbNq6fucPdeQfykGJ9TiGKcLrrdVYZXfqkLMK7hRJPg9ZqFTJzg",
  "key3": "3NcpZ3TW7Ng5unr3uVZvvy8Y4amf23ZZRHUd9jVTE9LGETg7cK8zpZtWTiccwe5nizahriskHJuUA4MX2RLum9GF",
  "key4": "5sm5m4Q38epWqJEQBfh7PkqDi98FBbo7W9KoNwSfUWXVSMRDgkCWaWh5xFpR9gDAjmEPcnPvhqoNSW9SXCaLp4JX",
  "key5": "2Ru1xt5oEnEZNqf97uPSUZUGuGDpFATzi4xc8B94LQr6J5BCg69QqsycraZUb7hHN1JRkSdXV1UpL5DxywEDHNJ6",
  "key6": "5Zh9r2k3vsDQBmfYgM7At1V1fwG7fp5XFMbYjTWrmPJ4g2FJj4SPYbm9B33FgF7BxpoZkWdDegCUbST1e94Aw9v6",
  "key7": "3rCzG1XPjFcjVEf78Fee1aQi57CoS3agaESCU33Dq2yZixPLygeig4imDpHjTBgGsS5fwpHWizdax8crkPLPZdba",
  "key8": "3Yt5UmQeChdEGX1y1dyFmTAaUdGKdrBcvREa1vUqZhj9XA6FajSVF6mx4cYY4X4Sbp5idLS267oEsv2Y4XnGy6mg",
  "key9": "5ty7b4QxzrYYuUVspj85iQYL5pfGFeY8CBz4KMvXdN8Pxm2v74KuDj6pGxEiyLj3nHkrFNKmt76i6b261xzekvJ9",
  "key10": "29xZ9Ag8YVnQvdD8RGcNJ4jeVRX5i3iJpER88M3bYBFG9Mg4URNZNdYSsGsmyjtYZdsuiACkjRgmKxy127Z876NR",
  "key11": "59eNggDxvPS8NVnqg3mo1W55QNB9rDMctorswoRB8RU1FYwYEeqmBUq6jwAALk7ifdGULQkj9pJZiTPwina8TaA2",
  "key12": "gVNHGUoryT3sAuS39hfGCGK73rhJNG9eA89VuQU1nsWj1PPSZFkVeCZPdxNqv5jWxV3ziYHS2x59KPe6R3AewSG",
  "key13": "2QPm4qReQcCyaEz2LrBqdTX2PtqTYJSCNTBmtpLTPrVXUtasWsrvxdrg4VJST5KrnWpkD4KncoaftsotQ1vc4c3s",
  "key14": "LZj9RWHYCPhJAyfk5shREYGx1eieXGZ5ULzqYU35b5wsrSkc11DSR4THHpJiaR1eZUPtqfdQpqUsLGdsT13HRxy",
  "key15": "45AZAYBo82Bm9dhjYGXF2zLqESEAM18MwUaSSTe5rqYezCrzEM4Vd5k7ZZ8djhmofmyh9ekvH3nJd9uhBWigMxsb",
  "key16": "Pim1mfBZtcSXV3g9aJ9PF59sFnrd2AYVKeCaE4Sd2mtAZ4j9TMTn9RHgGdaA4HusFtySHsiGZHoXic1tCEv7koU",
  "key17": "333odQ7v8hBuVToEn1v2geZBBsFG9haWi5Hg9cN7thbAuqoGY4eb7XDaMPRKLYNmPJrAxyjkosRgtN8BndaKmCFj",
  "key18": "4wuUmFUW2ApSR1ioHGWQYj38m3KeorHdwhimLGgUAvGa5bu4dhehwy4n8qHLjF3Kxgb6y9CfFNCVd1p22Mpszzbn",
  "key19": "3TpUbXdvuRt5x3UZyV9L6fhUADquDZpep59ZYDvLoEXkiz11Ds31EwjYEXs76yjR4EURmchbDqEVzfgq3rZfCMYx",
  "key20": "2F2oX2i9UpcEuWtb2Ht84RrbKWiEWN9ufocEyEpt54sj4JdSgvi37GPbUi3RCTtj7frUY6sHMntbWC8Y1cnFvy3J",
  "key21": "5ZqoRhBKjkD1SE4trvoTsSRk6nGzMPPrU83121PqAn8Stn2CcK8zBBmxxB4P5iMFYDatmV6BPGFsQZdjsRSwiExF",
  "key22": "2vtmaEiFPnkMNNmj3vXhpXpLwAyCYtVxH5T4tjCjvwNw8i6W5tvSRC42yghiMn49ezczGH3DEFyJghZhjJHTcsda",
  "key23": "36PG4kQhDFtLXj6b4sE8JJNG5pPftnRg1ffNeammRjcFtZ8rKCpNWE9LFfCKd5dNoHb9QRNNTeqgY7M2uepgRbW6",
  "key24": "4p5yPun33whFCWa2KvnZmmH37ipTVj4swUAY48Fsxxtd1JELFTJ7ru6WUQWiVWJp2cvFVYDWfEENqoBxzg5uDHd6",
  "key25": "2u5Wb1KFCZEkBFd1zAV6o46h7rtkfMXoRapZeDLX74VXJ5cJrujA6SavBmtrDuFA5L39UFWkB9DPEC2p7QyojaQf",
  "key26": "3QcspjaQHhnzuzkM7s5yeUFbCbZAXnQqVdtJ3wyutmGZsXUJUcVzxRWbVYW78FKLdectYdhktCRua9fmMGAn45h7"
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
