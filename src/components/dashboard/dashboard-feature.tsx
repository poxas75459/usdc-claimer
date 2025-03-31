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
    "3Y97ZVBfcUG53izYdXTbt4PP2N5SELDsno3khRU6hfkq7SMxCo4npkBNqaUGehvn58y5PZeEh1ZHkzgs7QVKyUsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSbs2f4km6zuAKaBtd4Qfe89eiAyeGnPEwa2TZ9rYjan1nyXdyykWiAv1Qhu5kcTwmiW1sTd8RckVpHhiVvs5f9",
  "key1": "2oVQiDRWJTqy8MyJgrB4JHzrK5RXmHnjPFFxGYvo1eJuZ4VKyQFkG1UBsX2s2iEqoVanfJdzRUf2wcQ5PMTrvktL",
  "key2": "qsHiuyFywamT4q3bwn1d3oiUM3AkAhu8AGEUbz3VJLstnHcdEEzacvLJUFBRHucuFvRSVBeQz9S9cPDX5Tf5odx",
  "key3": "2CfT3YKFJmimcNa8AshgtPZWjkEDri65rS3tWCFcE8YWMxPjZqpFFLvXup8RofinUoWRWypLmELQaRRLQadvJPzX",
  "key4": "2GeBXhqoeLpLvanAQaZjDPvPtoMLnDXmwQQ87NJubkYM7b6tUnZUGyLPN5JUtyv3yYW72JS2BKnyXiHVLo1hbDXT",
  "key5": "4ttcV6yAoKYcmahkuDg4s9QDWrSxSZhTQ7TxACqDK1iDBV5Z98mdciCUSQedE8jWwfnjeGdD4NUHXKbhpwzYbkXk",
  "key6": "4qkR81gx8sziVkFxDSDu1bidaNj1Kq31m5X6wbENvrnZonQMbFyWsW4g4DxrhHwH2f5ysnUQ5PMvJ1xAFBgFbPuk",
  "key7": "2bMSmy4toSnPMTMw6KvgCy5XiQqPPGnn2Nk5CRYV8yGNsoQcBbf5detzDCRy66z7xDVmQtphdM5EJvZJQdhy6eGu",
  "key8": "5rueDxzRjrMtZnBvqbAdzMYemyn1TggdbBnZgWeZRpguzMqud5pB1SsoyHi6iDtp43N58SPwSaKCN612MFLzNPgc",
  "key9": "4J92UhUgYxj7hwQzpcQuutif9rB7NJCxv3PVPDyE8XCHTWH5wUFaWFjDhddzzAfAR1iTay9AdcvkXgx3ovRfNTyU",
  "key10": "4KhJ4c3VYD6dayXxz3ZJhUzDraERv2iTeYLeX7sKAEjtBQDoZ9uRqSL4qXmjHBY9gJZipsxfWoVaks6ka9qzFmLh",
  "key11": "x4dEcVoUe3eU78o9HjbhvUxcvHaPjb4kaLcyvQQg3SGUPEjx84ysCFVFmXGESqT7Zmu772mjznVr4Sw4HySCSG4",
  "key12": "2Fnnk9n1ZQcJWHxhQTxnBNFKCyDAWoj4jsdZ8yY4D1BuqC6CPgAijgq3y9T442XwWEU1PeH9YhVQRkFU6QYUy1uw",
  "key13": "2gmSjg4wZezsJDBLmJWde4t5jf1zeLdQUh2yNMnKCaXKeiTSFTYcxBdzit5cCoGEPSwCZDGn8GCyFrb1tDWqw5te",
  "key14": "5W2ES5HyEdBYJdrRWbs9MtiETGHEF9yaN3Fne7G96xgczD6YQxkKjxYETCbNWTxNpUiUdtvoHRiw9Do3DLR1dHH8",
  "key15": "rzwSSawkyDyToySHACMAVBKwHevM49FZFWeffDJEuTXX9QcXa3RFZN7s5Wz8fnDMhtwrJBoLmaRhErghbC5QaKy",
  "key16": "4UwSmwyQv8K3HEmg5UQVW2HUM95D71dj8WUzL5iVCdDKG8jkypj6pSL2sfoYoFkrA6pDDPN7QfHxNSN2E33NTGbP",
  "key17": "35toc6yvXAVotEUrA5DdeDx2zELSAZ6znYyP5cSaj4GcRMYWnbUYufCmEjQCiDWtPdovLs79JrJbda2xF9QRrdCM",
  "key18": "62P3aoFN4ZLUJj2huMS7bk6vywN8BnHA217MyCk9Q6HZyUevmTExUkTbYszWNrowbzTWm2HwEajecWUTo3yFQvwg",
  "key19": "3QuhagmQAm7muLdHrvD1mBAcUBthcE4GscmNMPTJRAiz9QvHsaKn6SWixSavjFZ3Aw1jU6NeaaFeMpSZz8GgKWcv",
  "key20": "4etzz7ABUxjnVz2vHxUmr8ATFq9WYGQuzkCDuAHGSECkXxPEkVJfPxtvVijAa7ZApdDd1YNuTEbHunosqRM78jSV",
  "key21": "LBDfVyuqoZSHUqU4cmVswNEpvyC5ywMHN6TQWmguHYs1LGgFiyJg3mpJwyQrdPr6RZd96BVXpG5NExiVBgVPQBH",
  "key22": "3niuzBoybRC84qjtJkGoArrFw6wTeK2s6XaziWrMv4kP82E766Zt3hFXjkBK8T5ZuBkgrDbBcq3vZaKzy67pDqcg",
  "key23": "xCsnoCdMKymsE2HEMBFUvqCNDcaKAT89bNqujm53icCjooJxEg6y7nCSw76i439W633ohndAiox8aw5DDJMd6jQ",
  "key24": "66Yg5RJbBVUD6X6ZN9XpaRnA4FYmPtfdxbbSTWAwE1ifQU3KepTgFzTN1wX8urhU1NHVFiJwMefjxa46NPYMskuz",
  "key25": "5GW3AzguNQbHSW9qnQ54hPXD81RxQikMaZKMJ4mCSyurij2MM8dCfSFtZipQNbU73rnucSRo2qerQ5DUvtfHEnMm",
  "key26": "Fft6fxndppnniHaLGvomLri7aTgrtyPLf167zT874hTUC4rbi61fSFphgwX1f7srz6GAfwrvF8z6qk3kvFYagc1",
  "key27": "2XuQxGEcHjjgBtQUxqzVGv6KJHi7T2714RSQU5ziEbk636F1Uu2Ds8PMijT5ABhfWf8XquDcNDQCdDJ9vmiytG1D"
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
