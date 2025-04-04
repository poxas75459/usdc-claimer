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
    "2GQqR655uFrLG7LdnNEicf7n2MLNjgtFia7LNZrxPGdGHZCJHjEDQkpnYVjBN27pQTkU2ZqeGQKXJrhGtFzchW2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQLesBBxahz8wamUAQXgy5Fx3eYKxFmRsJfxJnkMgvkJR11cBBxuD9F3BdCPcJAbHfSNKF4UTEg3otTLny9Znfx",
  "key1": "59H1dt53AniVixXXYEBEjE3HVNhayCqcbr6VZJxb15Ptcjf3bpCkAsbc8vDpnSEnSXFLtYDnk1aE7j4gsj5ZsGdP",
  "key2": "3P5YpDUdGyVNAosW5xLoUUGBjEaNBnWUbAfaiHQsY9GJCQxMcoxvAchnTziJ8Q1Fak3ApV6ZXh31YFpSzq1i4Ds5",
  "key3": "55b7L9CpMr9nsH73WLrQFC2WFiG1WL4nKcZLSrka3nX42ChPAFxR91SFN2WTyqYTJN9JtnpvYoBvz9mihWxsKqUn",
  "key4": "HAEaLjKLSFXnjFheCzjD74HzVSx9y3JnrEV72vu5pn6Zo1TmBYLqDSJvuFB7xCVaTrWyGgc9YWWWLjpHp7zETnv",
  "key5": "PdZpmDg4vj3pYXHzQC6egjYnBH6PZUz9ieG2f2XQHEG4gB6jEC9wCDxGAMjiu1GZRH9NgAGPBw7VddygbcYESKd",
  "key6": "2Fgcu282q2gKtTDVjd198KunoVoPrHgWQp8GNVESs1X2Vfr6KGtpaeusLcZpJdXjG3nWHMsJzJ3Yy9nxKtS72vwq",
  "key7": "57xY9gX1tYPZsxmxk34MczTyVHkcALXgCZVGb1ASXL3pRdD4xM7HniozD6kgP2NquiYzRmAksPuQsTq4YMAxTXXA",
  "key8": "3WK1doYVKzzQiAYEy4AwG5iWYwp5YCwt767wkK9XteR4Zeo5MqEUtcQWPnmmE2zXRyPDTS7jbeBmjRCkK7NgA8LG",
  "key9": "2bZ5DpQzSae1wub5oYQGBd6d589ecDeeNPHd6bmKUHKrt59WnbU8uanttag4LG1WXXn1zrt95ngPmJtecGxSh3Zi",
  "key10": "2sFvpDXVFTC5zEG2AWhJSY97xxSvMmxXCLMnSobWBzTcHE6766ggGMNFmmvNQdx5ddgoiKshECteL1WXDjNfJoei",
  "key11": "2oZMAmgLby7igKY12wFa6qh4ca2rqmueLDjvxhuWwMjmYgjWLw27xRE4TgeLo9Dsi2wBbSCrdr8CipGDcbhL3agP",
  "key12": "5Rdr3X6aKAxzwXFbPLhWLVfbCg2wYLWwu6Xjqf4JL8AbEDAm5AQDJqNYGDYF1BhXMZbqR63mYzZLc4W28KwtEAEH",
  "key13": "4JviVZJXQn8nMmWeGJSsRBRBJk4fRzAW6J6uhQ8gdf3Q3hd1SLkPxNT8x5sfYaatAA8AT7NSinGShhAfwoBgXv4T",
  "key14": "5jLrn2DdG6fbfeFA2bAmfYrFouW3fWbK8yKvXBHMsr53xPEjv9947p6meq9aVH68R5TyP2yrpT6z2rbEvjaRShtM",
  "key15": "4QdPizFdTcoF8o7q7D66d7KErETFtWKt8ikZUacE7MSJkwKoi6iKJ4Uw6iPELvBtGgsY4gezaNx6zzTZkfzMm6nC",
  "key16": "3yrHvQzKwRHXVgYJQuGYnpyXAjM7Hh8z7VwmdFE2ZwgBmepxtyrCKtThV1ARLwVhtF9x9FMaZ9JZLPhcA885gpoL",
  "key17": "v2max1QKgVxANM9K9ncT57ar6ru3k7ctKqN48JFxaNaLsi2UNEfrsescEDrhLcQvtB4gvzdH5hx7jwzCrDyH2ij",
  "key18": "iHTMqkGNuKVj1N5PLW6WmpvdaJNogX9PH4BD7sK8coxbo81Tu3Sro8XouqKafKHVWE5RhWsn3KWH5ngiJxVb1Uh",
  "key19": "4T6x1SnwxjYi6ZkZfhp8epgQNptk8hJvNt97cMeSg3jpXByt5cS7bzqN438sPLdxP5rcQuEAXQ7cxFKqf42hdZKa",
  "key20": "2kfLhhrCyEDAtttXLJEkCWCcwoxqaRRv7NZGZg3fuVx8ZMctgS3drNwWYqUQnVJJZr9wfcy8MJPpqnau9by8tYvm",
  "key21": "3NtGcX1Fp9qwD1jwR8A2RWePjs8EsVvqYnAXERCVpdQ8TJeiXAPxnE336JtMREUppTKqgUADStFTeW8EjpikwuXG",
  "key22": "35fg8yhMUxSSYQYCNLGMXs9p2HV6dTce7dq9QWn6usCPLhuemENn7Zaon9yZ2scdAn92HaDj7duQoNURU4vXLBoQ",
  "key23": "4enoXddhxZhCszdCKPBXD7ptUCUY36BsZh8CW1JMeLQCgLwL3gYrAzt3vrxP9xgrNLPiNYUSiZ1mPNATdZ8WMWJB",
  "key24": "wXTndE6DkBD7eSvCWzpqHoaiP9GayQCgKiENstGK1nG7FDXnugC9D4LbbLrBAhV6JGvq6oUEi7rfqtcq6kqLx6B",
  "key25": "5HM5FX1iTXrDAV1r27V6oxXa4vf8etLVVd8ZYkwwh1EWQsePar8yDFiUy63fUxuGseWP1BqEUJTW8NZBRgm1ebJo",
  "key26": "4JQUf35K3fzKzihNuZBit7eSQejXeSNd7GViB9v1BVuNvXUsoCyaNx67QCqCEQKUE5NuQ2u251zcSKqpd9w5LkMd"
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
