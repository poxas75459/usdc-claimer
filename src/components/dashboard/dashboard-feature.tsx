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
    "35KoWsbczuHvVGAJTm43ZBfsjsNvQdjekA5ZCuotG3N96xdJMfEWEzymHsjjdD95rXoEPzLmt7xdFqs1b7AbVn2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jk7f8j4V5mAhMmCoGrqahFnaK4JocXe1XUP1Z1aqVi4x2611PBTCbc8uCbDBbSwgkDacJLpb1JskauMGbkyw5Uq",
  "key1": "3cZCzeCUkSZkpShzo9zHWUDuPnQcAWWZSLsRRNgMkhZiQzxEN5injdsTAgWS1MdD9zUCsUWSdzYs9boJ88NHCtiQ",
  "key2": "37BH36PUGPZ1Dmu7912W7iWqDqGA1Dw1c2ab8v2FtEvrBVHWNcyoRXqjs2jz8SQeBHnkvv1teXrk4Usa78mNKXcU",
  "key3": "5bqbNAM3PKoTzcgCzfFAzs5dbHKyqc3rZWUYCvohd4h2SpzENtvfaEGFZJ8XqEwPVeFbhiSVfGgCH91cyCvyj3Gi",
  "key4": "4nQsUCjFUAiMudWLTW5XUG3nP69X87rqT9qGagiMt42rchNysE77sBG1aAE575fZNJgE2f2U6dJsLhNkoJ1HMvCB",
  "key5": "5d5f3fR6bNNn8ppvHs7HCA9NB1Wr8yb59E8LoJZtyvJkqqGbM2Jo5oW5Bngpe7eXB8PR2TZrkb1zjcTs8FVfcvm7",
  "key6": "2cE9HjG143HCevHbG7PWs4BwUhWXmaUyrHr1i1vyhKkcFJfpHRZh6tSBE9fbW8ctwGS5CkYK9chynNuzoz41BFsz",
  "key7": "2vSLDf5B8VCSGBpjtUxBgaVy1XNpSqZZP8byNwVfMVsuEJDHp3zQTKLaw8x8NK2XTv2XDWEhPwnguyy4KCVR1SXf",
  "key8": "2LRHQ87RSXv5uzMBmkFtNpcDPuMYx9y7Vo2b5t3WiXsWmfkn3Rg8c4UAnEJsCEfUcbsXhtNgL419WEwFx52kxZGj",
  "key9": "2Dp1XfwVRvqvNiDiSfegPNDFfWrGYSybG9fBuGu992aBtHjj2zWb4d9DsDNceU9yBi6bzChZ1P2vypdx1BhCbfjP",
  "key10": "sju5E5gEN2B6BYHS4V4G5qcA6kQnmuKPJf9anCJB9aPMHn6YEVYg6V9pB3qjppKNEsp8NUX1rLVRzMso58w995i",
  "key11": "2uRgzEnW19GVaEN4NLzRCbUgcfC8nYF5HyvWCYz2UnAQHtYRdNdvNCBVKDDMPgJUBYtm95iNxCwMiJ7ab8cV1iAD",
  "key12": "3AVWgcpQS7z1Jf1fv6fdjjSGYrs7GAY7LFxvusBLpVLyEyCZJ81DPyWwYUuZRmF1GuhWF3w2tS6GpT4Aa7zq5Pzj",
  "key13": "2RKNcC7BkZ5fnDVaf6CsA5VqaRbwn8fJWyQUMxRwD3jeTXPjy3BvMwzguqu7qHjhgPrzmSsfYMwt6JTBn5coiW8c",
  "key14": "4KgjXBAfSJKaJP8aGb2tRgoRuM47u7QaoxwiZLAFYpNGpRR6V5H2cwvfHX6R2zZmjxf2oHgC8guHBknMZduZ4Eim",
  "key15": "2F4iAvpze2nLY9ZpewXgBG5fL2H6aAWUNNBPewxxTRLz2K6tYN42jb23HZ9rtVYw7w9YTFPgxvDDGCzb4B54RiNE",
  "key16": "3vx3PvWkm1MtayGhg9SRNpxPvMuZ3oxtjv8ARMvptYwuTCdWKSSRcL6K2rYdLrQheDzqFcVHTYdtJoTdwBvT8pma",
  "key17": "3xNuEznzn8yoCmoG5os8Gwi35bDEQM3sABNfbfiA4bRdPDJkysudJn8Vc3qoKv2x3qGwjAi2S5rpbjsVZsyYYUpt",
  "key18": "2bEAmrToY2AUvYmvmYEaap6SzYjpg9EmeBKAMTbge3aEf3hEgnp723q2sRc5LduwWLitdkLKAr67S7tyrtmm4ufP",
  "key19": "5J2zULpD7p5wrJPuSqwd9QK2SK1XYUYrjcN7NirgPSGBfwp4kYHiNzsJ14bhheofJFNg6CypPKhyTCwt5oqSkkaY",
  "key20": "4yeHCKMcUEiCjU7f9o1UHH38FfP1tdNostqTJF6sEjBb7tuQ25fNwfKQEmNytYSbPXKvKJJFxFLrooiKtQhDzV7p",
  "key21": "3AHhwD1ZYiXGbp9BWYQLpPZhiGqZcw4PkcGJhH8s8HLwayaPFVCjmXw5g8cJpWJWDpyLpqgaW5MLfUyHS9ZuYkSW",
  "key22": "5QXKrNXqK1ABM7hqsfaW7Djopf1UtTsDoNk553BneurLBM5wsHdbc81xT37PPM2Ty7zzgPZXnZipFzeHogYJmnQG",
  "key23": "35Pg9MY9zuMKi3pViuq3JK6fBBqj6jFJNQSDX7K73SksR6wA5QZfPG7ABfkEyckms4DWMMACwDxK92GVitreq3kx",
  "key24": "3d1dig7VfSudaVUBmz9zLeSzzUdy1K2CbYVZxAhRxDZuokKLVYZkD2t2tM435o7qHiC2QFb89kEYW6KDLF7yWa9d",
  "key25": "64wYNSDi117AVimt23wYVxA1bWcHLLSh4nCwDythw2tBELGf5xXHXcmYkjMfZoyJiBuguKoonw7YmGNePc2vmDo8",
  "key26": "V27J9a3QNKM667X3Ync1BuhRhBm4BBEs4EbTNtVLBbm7An9AxKc68uVsxwqBgX1HjBoFUTkwNNR65nCTbbaz2wC",
  "key27": "2n8padrp22BKqkeXzX2iFmkUcrxGRNm3zXu7Q6jUoHinYiFhD92honqboYGcHb9e4PLv7F1urwvMDkyNsfnhZvLY"
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
