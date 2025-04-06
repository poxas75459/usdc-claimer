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
    "5BKQLUkbUrihbqeJXTE3fyXJqXNpufCtGQ2TCWbK1DqXutbgQnyLVkC7HhRvModspx4cSViAv3Xvd8zyMBX8RviY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qoouEAkJRHTqofVeMLfFFCq5LcD6sTRpr5kw8VQd2ocUcSmJowcCNdpx6LHAov9nit8MfVh7vYsosRANv1BFgiX",
  "key1": "5rAUoKKDxYWdnzUJ3oo2sZcxo4UeS1zs2mjxmbTKPrABMRQvFZvEB1P75rrgt1PPFdFYKTtmX6jB8LdH3mqBkaeB",
  "key2": "2AeoE6TukZ2hZXv7R9PcRDTAsckbsjjbgkpFgfimtdEDM2Fh91uKyEDaCadVb6jefJywZdfUpnDL2ZcfMdDM2Nk3",
  "key3": "4qCFotM2zGFDTsfWQiLTpodACV4t3nLzzVzMzRn9j8T9qTFcNbXspiUwezvbMwQPR3njsYPACmjZyDLK3p8zig8d",
  "key4": "62hn1MkLH7CLCynFUGDzcLnMEocmxHskjdN4uaweksibVpTb7MFLYAWqRB1kM9FEAWXBVsT4aJi9hxBizoNYnhco",
  "key5": "2yL5rmnBmQdZoQimPtE56JFLZsBy2SVNSrUjgzr5LxtZjhMdKwS7j9ugG1RgYfNYdUbFhaqkuWkQXfzLH7jo22z5",
  "key6": "5YKJTjmVAnMZmAqqmDZ8m93fXErJn3bjE4nj8xWLMdML9GVhPyjvWoTP7L1ngBfe2ZC93CLjjP8A4gafKTPb7kfo",
  "key7": "2mEgJfECaNae2DCrLn8k1CSow4n1mWm4iCRa1C9yg4TMTUFYHqSMDaCtfn2HPrUJfadkF5iu8KH3nppPgEeArcQc",
  "key8": "2RjAP51pnH3NmzhQK6MnK49qvERuPEHveh2ABzy6a5Dht9ewCvcw53tmzY8NdV5Sthwj3LoinUGoFZWc2KHpjsC7",
  "key9": "u4WKs9ZPi5VkyQBU7EKzNuXtUmz55iwWDQRtt56mHhr4coEamrqrtjCiFVU7gQrfmwtM2mWCPwggfWkwTk17aRe",
  "key10": "23eKSq3imEdYTaNj3eYmSVuDD8rTjVJs6kATGSZZagVe7HqMFZpKs27AyAhQCV4peSWf24ZTf6m4SQStqQRi1dpe",
  "key11": "2quCLUtfjdADxHHjq34YDxgZs6UGKBPQcRTfQvX5cHYPTVRGiLpij9RKE7WpqA44biRDcffmEqQcnpezgq7tz6WM",
  "key12": "3EajrvJCWA6ihkEK4eSbRpaU5KdxTNh6CvdwHKM8v549mE29Xmhhqqbj7CCRLYJV1c3vqLK1UTGZpDBFN4HpQFdW",
  "key13": "4yFnhHFHxcVZcokjJLsD9oTiUKSh37r1zGG49LWUNDAQAdXju86wzPvzjQZrmmCxZU7SY22cKjh85hYabUzERjoh",
  "key14": "2dqBsuVJzwkjc7VQL5eSGUkjcmuhn8RHf7hm2joQEzub43YLK9L1CiF55W4Es89qZrKpx4x1zUt96Bjrk8SViaRr",
  "key15": "24S2yTTeRfMmXYKBYBxZXN5mYz1Mrpq8DfnwzXpGuzrqjmgWKetzubDHpae2NLDUx9Lfny8C1fV9nAEZBFaxxTKW",
  "key16": "4B54i2zZnimEuXQajKAyHy8eghzqPdakZdTff4y1jVGoHL6X7ss14YExgZVywcygJQguqXho8R7nc9hppREetYx2",
  "key17": "5t3tPpZj4ZhV5mJHvRY7WEHUMCWfXRoiTRejjvhHxVzswdtkHCuhJrEbW8anDGRo2krnku2eoFe3enkqjQiMsbfm",
  "key18": "diJPvLhxbJsBMt4ZBRH8XnNcFgJKRQKCKNCYFG2PcVk61d67EDMK5tKn4fomAVx8hMqPQPxUSsfHKn872FxnXjc",
  "key19": "pfEAwxHRiMj6saGCKqteB3typ2tkgoZcPsPtVd2LLbgjeyWBKHD8fcE2n1V4EBJD1u363wgCus8vh6ccAtRmRZ8",
  "key20": "5TsVVAuz6oEfkMkg8gpCw5bTDG5vdb4WUDbYHU1PzfNRFoQptn95wUPkH6FdzWyvB7eYGc3DeaQPFJDxHqoMg7vW",
  "key21": "2QQSusuCZAgj8MXM5S5pSdghncrfctMhTLwfaeefGMnS2deAj4MS4K7WZKfsSf4bKjD58VWnxXMJkzEtVZ8ozkmf",
  "key22": "5nxai5ULNPL71ewyryp9B7AKZGDPTMVcKd5wquA7ZB36y52zcyX3j3uXD298ne7GpaRLeX3xQuobFnLL74XStgUs",
  "key23": "2f4N1838s8LCsqfZTrqopm8XacboHAgfzAdUUNproF8PcF3DWjSis8CG6L2QpTVrNi3qnQtZmK8zte5SZAfKRNBW",
  "key24": "4ry6caRmRGtEsXSd3kK2qzn4BtvnqBst9u1KydYxKt2GusvyZxWQSEJ4i7fQzU5rfSAG7Gst1adkhUUBQGcXMdCe",
  "key25": "3s2ChBn3PboxNH5SqtGHaYXLGRJCuA3rK4o9LESQN5qSg9jABfQbAdYAgcCzVUeb8tWBGWaD3ChEAivuiyWqRiyV",
  "key26": "2WLaSU5FGtrPdvunoZ5De5T2VZymHyB8EzeYX4eAbw4Q2bNSWtzN6DVDF7EDq4keiPLVLGgKuXGD3mZCKAgQaxvX",
  "key27": "5BK2p3wakpBWeRH8C16MGo1QVWJLDQayPaUFJ8snCmuQ6NeXhiVHpSGeWYLrzjAgwdGkECD1Xcqpzfuf2VG9xfJR",
  "key28": "2tYgKVVJM3SYesDLnL2RYg5Cx5G9UfFy6hu1d6Ydwkv9LtVx2ZWfhgxkgN6vxVE86nQQobxQmpwDyyUFvoBNy2ZD",
  "key29": "67icis359CMgtQsRdxo3S1fUajfAFodr1qxWV7nhDSz2gUt5qDj7ozWYGmpXRLd23XbMSswSrNtd9gk8b2YKXint",
  "key30": "3yRYsURK43xft1EzVrBiLzwywmVVnSEA6W6eoNfW3vtj8LpT9x4ddYwNQbeL7vgaekJEUuzym7CL8sBJTPEwtzjX",
  "key31": "4mmG9341UNisJBAnh3N2bQMHbQxj8SypE11fZjGVhSYXBVNwGGDiXxbsmbxgQbk7jumv13zoUDGBJzr7Pi5CpzpM",
  "key32": "3v41rDyBijUMg4PNUEXVGmxJtjDxB5ig5ZWWutUN9QUdUnSvS9varA2MPKiPZsRme7YabmSn2KpwRmeEWu1GY56o",
  "key33": "ATuYuVDcmKY4s9Qt9C1vE5Yk3tixdw1sBTBrWrAuz2nvb3DEsVa7tPZs22745Ud4av3Grrc8exmTWVuJxZeMk5B",
  "key34": "4juJKY9oTqNaQ1JQE7EmkFGs567e6R1LG6o8zZypoW8XkCsiMhbZiK2JHbDUY5v4o9eo6fnGpJYv1dxw1ttXJLNf",
  "key35": "6NFjg6TCbaRuV8oZnbPDQVceCyTnYwDvyEoEzNhMauPa5eJ4sordK9rhkyx9cnzrz7fWqAivpScFRnEiN5bdGQy",
  "key36": "5cdYtQQAjwcJMuQJm4qSwE5cnYBwuChLk9MctwA1EBEp8znKPwMH2Wobt8UksvbkfknJJuxdDpeCffyJQTQ8Z9SR",
  "key37": "KzMycLBErgDSAQZ3fqMczS9yL5YsSsxCytdBRzp5tQeVSK9LFpSo1xCuZuzXhjrVc6o84apsL5BQmbGtFnc8hit"
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
