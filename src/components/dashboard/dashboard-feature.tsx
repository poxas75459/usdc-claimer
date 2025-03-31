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
    "49C3K67uQNjdtHuwBgBPwuS5oUpQim32vA9QVKobypoW7CipevLLonQjyK7qmTTuZGDtU7cPUjSmRxNtomLvVYCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d8PvpYKmcwxhGHztg9tA35zWt6fYZ4BB2h97R29UXPdFf12pu8hRz8Dt8zpCTtHJaCUcT1tLiNYTSKgxL2HcMWx",
  "key1": "5ytDu4QwgyqzCGUXJsunJhqhccqCQDQoyx5so9G5BoQmUd2uYVv72Hb8ggaH2nnD8ArP3prbMAGM3hvWQRvoX3Yw",
  "key2": "25EYsf8o6L3se3gS348NNuvPBA9mBT1eqcm2TxsKuoNJurXW7USDqRNyjCyD7ZpTXsPgJDdkDccxdABg1H61myoA",
  "key3": "53svFxRBEKTNsnF5TL5RtaFENzok224iT3YbPKJgneyGS2Lwo9P9ezKWLnVP4dguXtkJFbFokSgMWFHHagBCphuY",
  "key4": "2n3qXtnLviZUf14MjoDeYd7coBnwLPt2VeyMC2b7PG2xWkbb9AY7xnS2btDGXjh6a6cfAFzEnAuoweoREeDyw6cu",
  "key5": "5cxEtjJmA5iiPra1xdwj4sEZnXbGJBLFqAu2cFRhYmmToYdjVaoZDDiSChW2P7mz6i34ZKS3ohrozxqQmRavxNTF",
  "key6": "2BRnzPNVwsF46kSLnTad2He1XrfLwZfWJyjGhvqRsHzL1htKzuiR1yNpmfyPxgWpeQ4nXqGZeYPSpfXyu6AKCJqS",
  "key7": "4odtDvQxhWYEi1nvSMe34ttXrLwgdrTUc9LX2EWANWBqBdMfpkusSWdUJDYoEvuGBKE9ACus75gBd2ez42wBDinA",
  "key8": "3nqYgdykJ93KgBouEjGt8sPu6vr7CR2F1ujQRmPZBti6iuMB88JgrFyFPGrB8dtkkrGhTxZW2tKspet2rS74cEgJ",
  "key9": "4ju7b3Tz8xzvv7Hj3X3XDjTbNarcMBHGkR1KHNrB8vAL6mBKuBcm6dBLLqW9vouHB5YXhRJaPrN9zaZtSyiyRs6P",
  "key10": "2ZQBujqh9xgHq4SQvrk8fA6VFXze5h6yPWRgCGTW9CSePZ6NpCSi451myiwSJt1dACCgmxyX4LU9uFEmdMmVfHhD",
  "key11": "5goBCBJLaF3NmJHyo3KZCbbqPvHMbpQYwDDPCrqnYZwXF8LAZ54xu5rfAMpcHA2FgqvpHMwJZH33MYN4SzBm7q7e",
  "key12": "31b98mPwJEwKPCAsU47pYW8YioWimxhY596XY8wgYKJuU1GUjq89hM595bEDJ6RmJZc4CJAj4X8KfjXhU2Nd35FE",
  "key13": "3rS1BDTu7eUgJKrtWmwTTdwBC7v4r7PQ9ciJbNDbo88AazWQ6t9VisXZ9NvmR9ygSvd8vwXSA3bwidpXa5W1nUJK",
  "key14": "2ggvNhrrqgvRsrvpZh5aCq5nv4PUqNo7DDGBUqbNURws1qjsDMbzCAL65Ttj9dN2XCmWG9zHedtWwnNiuvtPdp5v",
  "key15": "2mGGgr9FEymH38y88PuQQM6djHysdFFCqfna14QeeuZ8g6jSUmo9QQZfRDinrjVKsfu7VBsBQzaa6m5j4w4yu4QG",
  "key16": "kCGw8ZCAFxsuyhd6S4JUT8mBicrfqN2n9xK3eBmdia5pAtWxM14Be3dzn1LcZTZa5TAwDZHphxLQrYz6Nu2u2ut",
  "key17": "aH1gLPScVJQWUBLYbJx563m41uT4hfkAuZG8XP3xZ2Xvb3zegJkpz9nSsNiGz9jwCorG8VwLfVBUHsfigBjgZpt",
  "key18": "32yXPiTTPc6xbdxw43D6x7mXnV7Fx1z6hLHR3awZvWPzioRyngLFEXniJUppNZDJwMaTNtPzLR8kcRRBkPb22y7L",
  "key19": "2wcLL33PCaPJYK87ogTDXTKxVmhWSrPCbVTTmEzMePw4zkMN63goKYj2AYk84onrsgX7TCRNh199yak3TvVyxUdM",
  "key20": "3jnQrMS8qZtMUuXhdHwczXcgtqMdBfBCz4Y7dWVGwnYzAvrSKKs7EZFbkPuQvqSWY9vZzihw1Fs819sF7XJybiVT",
  "key21": "2g1MjnrMo3mHVVpHEDXEQtYMHeoJ5m4zZp72daU8CXpZA6HeCFWzi1oZvEVrHu49dyXsVeCwmmckmucdzSE8Qj6b",
  "key22": "5qF9W4wyYBszpP1AbBWprNNq9QeEwriJ5DgthMuH9kVTPE9oKiPrGRdcAtX53HVJVurvjfkx9MyjjPasujQZMGc3",
  "key23": "3uDiV3yDtLVJDrCsDTL9gwubQGAeHdxEdw8Pgkker4Lsn1e3JNdT4UjkwE7YTpfnBvBmab9vJmyE2kyiybCvWhEP",
  "key24": "rNU4bh3XX9L99uku37dmroGU6GVbiNiL6QNgHqZUm9Tzgu8YAfpNUqGdDTjVNqLaSdnbxzFoWZbD4jfqwkGEsxA",
  "key25": "38Vk41GZPoUhocom8scgF2d9Nsv4577YBNRdZFKntPwiTHVYvVnVUhjc391XiE6QMcPbEAB6rMzj4no8tAG67fjc",
  "key26": "25URnnagKETr21TrUCkULGuVkMJ1ZM1hRzTQ3ABAaY5KDTGUfDC4nV1E2Rx6MWiKujCyjzoEZekPBw4TEeppyBJZ",
  "key27": "8tZRwGWVWgZ2rUUXUgd9uVZFrSMPsTA8zzMz3X1jL1xHax2MtTVCW8134Fm92NSYb56ZUx97nM7d2VuQnLUyitd",
  "key28": "Ym8hhubYpPAErsHnS3rVQ5zE1QD8HfGTo2Rjn8eSeqeKmmiWq7QaQ6w6LkCUyaoP2SrXTZbFPmhBRwUFJE8MXoH",
  "key29": "25cYXo6Bk5UNDpcjPWQveiSMzbAQebBjpWgtfHNPfWZbTDya7TAs7xTEJG1dGMHivPDSsJH8VZFW8Eh3YvKqFjT5",
  "key30": "4DJ6oKgNUvzEMak7NwGrSJEgPzx123w9V6NgmzzB5jr6fVop3NBnHxFKepPxKpqCgTvxShyCAQBynaQro84iRFuY"
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
