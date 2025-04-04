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
    "541R7aK8VZ1UKoXePcAHdmZYw4GvhGMAzvwpHeEtcVvbUSdgo2cA6ZXUfmEfcj97KabhiXs3fDmm2gtx44FSZh4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjYZZGVZsKiDZYTCWCeiCk18cvCaindvsE26k7vG9GBimnwnbfVGTBDC3aBvNLQdhgTFSoqdKGYPocLKtRjHDBv",
  "key1": "31Taa48XQaweA7A1svenmSrgHiEYTb8f615EuLeU8NGcrqbBJTEnnM1HUC7DiMLnxLhw4UAsJJeSuNpJZRZ6GR23",
  "key2": "QsAM1Vhkp9xoP3SNCyQBR76zaurMdtHQ4Zr94yE3DVn8Kyv4qc439Fhh2ziYwtEWJRLY5oWJtYa8kujKGkqdS76",
  "key3": "5YjYD8pJdYR8mHumCzVQfCcAkGE2DcEJhToa7medEo2x27wbiJRcwYPqJDcbphq5mZTnmrGQ3gqCAWk1q7sbkhiQ",
  "key4": "3GgVMZJMottpeuTbsbkKAi6NXpL97qEPjbRSiy8aEvdSHGWCzpWKyeEgSnDizqyqDd7gGi6ogCZkojMZEwVmbxGN",
  "key5": "EMF4QmwvrzETxCt9tq54SF26TrkBZV7EpJvqdfx84UEGi4FBohLWnQj2FwnXwMmtCz87GyWdGckf9q37zjApUmE",
  "key6": "22jFeKqzqXnq1vHrVzXL83VkpMiUvWnAmty5ucsaPzQqT3qesgGS8wGXcFUC7Mgv723VaJW82wcEbDYnfmCBjTfH",
  "key7": "4wMNrSAb6apDP7kxbCc79d2rpetw7CLjB7y8uJ3ZwMBR1V1JpvjPfjF7q2HNcrcUDZpNa8zxewxnXGpW9GZqKpnp",
  "key8": "4SADh6zqakYzmZ7MS62A61HFAngXrwkYriGWLmbEra7Y7hm2irT5S1CbygAB8P6XT8Q1nVcutSeVaAxHcx1W6Hf5",
  "key9": "NWLcYCDvR3q83ihahUuonCFhP1UpxBLREHrzB4YkpnWsLk1u6SASoVxdXAxQJ2bo42Zbgt5sPa5Psp5T7LX4TWb",
  "key10": "AqpFER3ztvcv1tFHtuTwLC9sEfji8fSaKW2Kr7SvTtZLQm7zHxcfT4mGNkgRW5x1BsYmEHCZdtnjb5Q2D4XsBpS",
  "key11": "4NyGmaoVsG5ajZsRE6xkk71UW9UkSqCaWjjfmuTs2UPnACE2he3uwmvKQSj3XZLqdPDgvZrQoYAm3CgcR3xY33cX",
  "key12": "zjKDoJr22KSoFvxoSx3yiEgdHFbEhvqQtjRsubcNdxoKoQutbsGUH6Kqo6qhPeAxoLWQM2XX1bsUVLQv3YGbHh7",
  "key13": "2mXoECs1avKGoWT15awHSY2rTZ9J5jj7jv9p8bSZM7aurHsi6kF7gD9Zhx6yMAowPCqZiABsCD7cMknsmRxMNhar",
  "key14": "4LRKG9zoQhtC9y1ofrfsjExA5UPjSeQ28Y75pvRktn3mfJVAbeW1Q5UxMNTVKAr84f59xnPx4MQvPVEdr8K9bd9b",
  "key15": "3fQdSfiPfDAT1RyNXisaCevxQr2XDrQCAugJ6GReimGY5bqYuFtbjgQhrSTadJkdi6jqwFqmzeWZ2NdxzgxnHPCJ",
  "key16": "22wH4t5ewAxDGaZKNQCKz5UhjzMMd2e9omBhG2wfEQW5BBZqiGRumk9YqgJLP7r7agfSrWqTN638ZeCpoSmSrter",
  "key17": "3ML4ByAiW1s2oNZVJVAV6nuhbX33cVq9AQ9C9CExmmLtPENHDBp39KAcVwBLRL8fax8grBGcw8mqtGFa9trNFU5Z",
  "key18": "21DAuGYzXdQGNq6rV9LABCCnsToqpq6G1xd6jE3ApUBUCvLEw8w8LEzGyoWRd6EkTVUWEXcjRB1HURMbidaswzQ1",
  "key19": "2jdzAya6m9cZJZeaxieLYPJiKuiGLdq2eMB1k3nsf72FgvQGbswmqrXhDB6Hu1REqCSFEdxUwWssRABjK1QLjNHb",
  "key20": "3GuK6gCLt4iXPeixYtJknnshuxMEbLeXdy8Bmr2fg3TiWUKRqfF2aY7NqjsrgJdCvX2gTt2e2Yh98yLxVyCcM37R",
  "key21": "3LH3jeGcAMf4JvZsLUmFGix9KUjPBWNHpMK4FvY1MgtuPGboXoSuyFjoJV5K2BL4PGKNNzpiAqqjkBVuW7qyGzBY",
  "key22": "42zgJg2baccuJhDvZJhafVASa47AeoFNggcQGFDrdHGwWyqL7dYBQcsCrBE9YaqY7g6mVmVpvd32tow2b8nhXdbN",
  "key23": "3tmYPNFt4hCrKNhkHt4KZJPb3aiD2TB75LSGJFC5vhCn9tdCbqAtcEyWi3cP8G5k6YhmshvhWoFUVuo1QGWgfjmZ",
  "key24": "AUvUodE18kfrWQqQJmcGyhtYz95NGDPSrtKVWZKN6tjUnaJe3mH4FYty9RaN2xiLXwUeq8673NPQ9vbsBzPZ3QV",
  "key25": "2eN8wXg4oM6CaXAtmAx3Bpra8P8H1zJWk5voeoX4n62s1GgW28NsUW8EzqNrX8MKeBBu1s277TdRxjzeSZ5DiK7p",
  "key26": "355xhwjuZxBFyYgEFQMrQfsCtKLRzgoCdDTvLk9iMU7uszZS6NnngZzJz7n1H7ZixT1TjmoxgFs19zgNPqmA1TKV",
  "key27": "4XBKcawScNeroXVVSAdrprUSvZsaNvRHdkQNYrRKaVxw6dULsJb5T5YyHw1AzxkYdkFv7tuTopN1axouhJN1Wbe5",
  "key28": "3tknVFUhyv3ekkjhLW39dgfyNfSkXaTrqMmv8fvSXoNwe6vJw78ZNny3F8ssxidQkxYHUij1tg2WsXcg64Vh9GiC",
  "key29": "3UFMr3mX8GbtMJVfEcAWPw4pQdZctwbPwSizCFnTdYCzz9Xy283fJVs46CLXtDj33JfuZCA4AN4uGADwV4AU5Aag"
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
