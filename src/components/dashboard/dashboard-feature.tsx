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
    "34U2eo3uKWisgQaTvD9a23Fp6vxNans6Qh4JQZLCu3eQ6np3cczLpMGaNgGWDjbsiZQVoteUkk7bCncaDuCtpJZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQ6zjhfXtVjD4BBhsg8AXf2QPR8TCLLDmpAdRBdHv2mUTryjvFbruUTZbq6QYGGHTaApL4gcZRYnjpJR29eEAK2",
  "key1": "4janfXoD2yR5AA1mDNXJFK2ThFZk9dofrJzfgyDVvRpajw6rQkwdMJH47Eykx9WR4GiduPNeQN1R2ebmR8AGZAL8",
  "key2": "44A3pmPuxjFjh3DSL2tbbKMuESQizzmLchN2CSfP9v61H47qZo94oxprVM7PbBhq5FDFi7oAD8LLX1RpWkaCmWHu",
  "key3": "3KkSjjKnfC99mBdfCXq52ijqk8KA46ybFEQSGnE9kf8rnH4opgPzU6AP3X8TBciVhLZ6SznxRLU1fEjsQ3BuJ3tN",
  "key4": "5CWT2bgcCtka51bZjLtwpUq9z8eXZrP57ba7y3gtAJDK7HqdtsVVwTnTh1GdHcyXFmZzjEiewzpZTDYi6M87K1uW",
  "key5": "1q8n6sa7FwZYe3g69txAhFrKizrxxyMq5TVJ3FwUDmZpWSuaG5yRbLfkJbLc3BYsSzDxFftrkt3QbUrTdxifgo9",
  "key6": "2mwUUA5jWiokfwDcAHnFxcFCeBRzpbT4BHXYSRQPfiqv6H8ZovboFnDjZFE87NUvxqDqmVdumR94nHkmioZxFakv",
  "key7": "2Nt4SQoDVSNu57JUStDsy6kxBxj9HdvA568QSULnhLqDsHaCNf9SJR1TWswPeFYBqJg2yR6gvyfCiczDKRpX7cVm",
  "key8": "4QDwXVCwmsFFDryUqGMpwQwaQrxjTWadrgUR55DzgkyX2nVgsRBuZSTyGrjTqSPZfPfKsJFbtLk67XARcCKTwu3",
  "key9": "5RriAnFwqMxgcdBxJ57nHu7ZGvhdsc3Sv2TYr5M6c6xcjB2iAxR5qVmCkkHBbrZPYTVUQT6qK6FtQsPX1pKPpdr3",
  "key10": "3NmiTz76WYHc2NLN4ehGKaZiW4TKuzj6z7PCHLB9ummfhjs6pMuL27nY1tycUeoSJtaPVMw3pxb6gPFK4mTtMveZ",
  "key11": "2MJENhEfsGs7dLQ3yvmd2APraw9x48VNYLuaNSxLmQypaRkNGT1neky8S1m4aKWNXJoKFeEnwMQnzkT6F1oAoLjA",
  "key12": "5pZTYyyhvFwd12X89hr221Am7e6gNfJ7feXASzu1j1nDDmRkZnR3d26UG1zdMbPAE6H5PbzSFKewrz73u5zcnxTi",
  "key13": "GNrpBFgxnoah3CUSayTKT4jYMuGtLg6Nksvm9wS3WgWJhWpZMhy7bVUMMapSn4Av8HTDfBSKauAHsdZBNKxL3tF",
  "key14": "5VPcXgqiVgpfXWRYwSpA6o5TogaDaHqXR9ujo9RKqcv758FQqKvbrXDTqUMBQAm1Q5jAo1qZpsQ6CqVpaGEKDfr3",
  "key15": "4xhtj5bKNBGr1XrtbW7zxvbeZcZxitzFB3FCt1Kn2JA3FZi7eKJDDgLN2gJ27bvMZ7GxQEJjrP5DtYbBMwys9Lmb",
  "key16": "VypbjPyL4HSJ9qVYZDK2Aa2qTNKnWXSJabpcZ1xDMJVCvPQErK7LKKhLmEYTUUYKAcjantosuuszXrjq1nJqmpR",
  "key17": "2eofL72V8DuCSTGHLXEqHVgbe5NqvGjjgRHMyY2vBZwiFGcDGoVBw9bszhKfceMDTKL5MgPf2hJfLeG1rdwNsh87",
  "key18": "5XfT7tzmfHZdXtB7pueqzZm6ei4xzBRp7f2Ffpo5fT3khy3GND7tvryQYqirH8XV47jgRa6mfDQRFGx3nGWPevHj",
  "key19": "YuYzgukQjz8PXDa7VSwuoDPpsmU8TraEjkyxkoh9DBw2uouzJtdUrYbMW6VVq7TCKbqQFUcyQx8Km8k9FfyPsHN",
  "key20": "2WBzo8qjCgP2LzvpjPFTShVaNhxPV4117fKwAPnHteJMBVbSYV6YpmFqoEUx2g6n7MqHXi14PwxgE3ATS8E39VNx",
  "key21": "D74r2yHjPEmAwnRYBEQmRxMnt56KVBrdGzVvGfPeVQc5aaJHixj9KrNj1iHAAEAeZzxrGuNGfmkoEZSeM28fWCu",
  "key22": "4sn3SDDTrPQMqrsL19h3vguwNQoTpMMVPW1fT884KtFTF2W9d1b2CiCpzequAFvzTaGvaTKRHdQdymb6nYprDmyA",
  "key23": "3Xt8G6RCRGzBhnSaVRZ1b6h3bHeobbXhUZ4s9P7BChYcjkGXz3i3qqnFGvtxFDy4GdSUB2qgSV8ZBSDkU8pA92XT",
  "key24": "tV45LXkffoiYCNW58eFwXDQvkSYx6ekCXK9aY4LF4duaF6Ro9Umf3XrojM6on2jTH2czUzj9DCmwrB4VoSTB4zv",
  "key25": "4xjhARScRkyRdxMe36CjLMJfhYqX8b71MRWiMVWJfLv9yTmtVzqpQHsVajyK31jigEZ5zRDC9hfKU5ABcgm4PqTM",
  "key26": "5ArEtZxWZg9ik1MARCeWJjS7srK3bFL76bUixvdButnZR1zUmUDzSqRFgzPRRyuEoDBaL1Sun8z6LzQNuZoa4R3E",
  "key27": "98jWp1GYL57JrDiJY1KxYNz6JWbLFrAMCxw1SHcTXkpFTui3A5PAo4jnVDxk5Dwh6M5yNRvxYESudKVL249Jay1",
  "key28": "XaoeRYGK5scp4xci5X1gQogevKBr3it8S7d7frySWqB2HSeqE3kjdtfWrqtQHnbWyHSaRewqQ9NLMDmoVcbU1Pe",
  "key29": "4LXsE81q6he671WfKYNbLXNA7WavdCrvhEzwubWUFSeMNHdDK2Ru2pKp8GNWbZyRvGXdexneRRjfXKYJF1yC3iXN",
  "key30": "2heHQLHRuxFmra7H1bnK3suXHA8nD3tJjVdDkhVrBLcd7L9NP8SBSGekDRXd8fpyF2rPVLCoBjc45zkty1RgDShk",
  "key31": "Ddxtrji7uMU6CiS4roLh1LDez9uKhpexRjVwHcMTE9P9RrZvh3UNHqKduKZp6fpWTCe7xPn4tz1BJuXdFWJYG4k",
  "key32": "5Vu7tx968zTHVjverEKnY6YvYMHC6iF91K1rJfKv2EUa4SNRrw2pBTCKexhfSaqHZcewoNhzy1iu6pnU8PB7mwTu",
  "key33": "4iJmBohmuHdxWJBfNA44D9E1qV8TSCnPRjrbqXkGWfLxHfsUVTUy96Ub8FMqYL6S7cmZzSadhK5BUYQh4rpAnvN5",
  "key34": "3aHWxP218asK7nDqgzeUNc6PmWs5toUyPrU38FBvYFM8NAZkZi7SHAYmMYKaHz2uHj7NYfFa2PA3E64AKNwMoTXu",
  "key35": "2Kzm1NQWsmdsyacw2eH7eU8HF4aK8uHNPyj8pKNukx2Tux7T3EV7vNFfFZy1WBXtCa7RfthyTQwPwTYqDcBiZTXN",
  "key36": "4SWue38Ssw6Rz8WsGGwzAW1HaR4ANFWxqGkd5MJJ7x3GSpzFuZEBi3J71v2du8q2fYwAunXCLo1gHyT66dBfashd",
  "key37": "58WECiUHBZ5i1NeJtnofX13MLn7VHwjz1TETTJxdLcEqpAvnSfy1CpRncM1EHexXxtJTbKTj9md7gVpKyUjmaYZM",
  "key38": "2HikNWne2xPpGAzDwh4PdVJamFGFi94NdUM72SDyQcDWZLV5M2nEe6ytA5cNqmu5p7dPVkNPXfy3c3Y97AkMffwP",
  "key39": "3BsvX8BCQ1WZDSnqy2AtzoMH9A7cqJYCafuFRroUKd92pBzJe57hvDy4uFynepFPVZkkrUt5Ff6LDxvHB5HFSKS6",
  "key40": "3tj8WXULRJhJdjWmmJ5A51LEPUNTdhHdX6bzUS5ve2JW2sTZmfErnEmXQK45mEmN5kZAdwNUoYxx2RYfcFw7ZAyz",
  "key41": "4wdox4rGYekAV9fyMfjLCkq7DaiciGL3D2UwbQYPXRHD1XWr1SjMWbnCNGZEGHvrSeQWHGUQzf7Z475NQ2kscN3w",
  "key42": "5GcEYbJ2aPntLmZWfUNgUiN9y7yn7rK8euAD9zjisrRhsw76ocGf6YUMjYQnYxpbUvzBWL9GEyqh2atn3fwRm9Dh",
  "key43": "c9UTGHeggHwy27hx2vvwwAiQ8r61UYx17dk5bbzEutr5wzKhiRx3d1j7p9k7Z3VEPLhXgVHBjjb4bsF43eEdLHj",
  "key44": "5z4uo4uzeJ7GgAjEbS1cYG9eKHdvfsZjx4FF3mbaj5ib7SeN6o57cywQv2bkidt9Bn8gnagMqJH1Dbu6NcxrHUS2"
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
