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
    "4HxjAf4uNtLBfdPCeGXPwrYvL6pa3wqTHakXKtjNwXHJd6CwPnBNzBKfgHbPKQTvf7EnSFqoSnubDZqkpqDEyuVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWkLpvNyKohE17Ra8ueJUePjy5QtRv8NLRi76Tkg98mJQphTLzjL5tnjMuHLJCviJQpG2aufaq55jSGdV4Lb8gP",
  "key1": "2N8cwgZ1T2XYBoWiN61DKZtaeuD8EC9SpMRraFY9bTapZgX6x5gyHqrEj4dWXXhM5jyUYiVS3SJSKsNYovvvFMCw",
  "key2": "65x8oEujuEqc8z1ALYLbBXdSp4yofnm3L322uPJa1DQjJGPfZ9dd9hZJyX56fRTzYCknQtQAvdRG3sNs9kS9jGmT",
  "key3": "2B2Y8QaV93A3m6i7hUfs7e9saieMDSv8LgscPHf5yiqRmwMqD7kLiLFKCrE6BTxt2WJgnumQBuwavhKmgh5cHgQG",
  "key4": "4VQURUJVnCvepujjpdRaWXJ93e3PsLjvNPw2Y6PiYMwTn5yPdS5vSMAovZY7scDHZYL3bj5AZz1awMreb6sijJpZ",
  "key5": "2QqyUxpKeKBqMLLbbmZGEz34s7fuENAGRP25wTzb7gvTNJN8HpwADeBthU2kupbhzhxc9Y3JrS9RJU71LWBtKafh",
  "key6": "5GwyS3JisoGhfg7HxjkkJ5JpPTLceVoXsuExYnJmksbrLh76t8NdP9r9BWXVygSuLj8YsGN8bQ8K45qt1PPaLKqG",
  "key7": "4FtVaDKHu7whYroevas1LvMJ4XwwWPAWzf5v6a7HVmGFxTJLSWTr9jqDK5VKWsawh3JMDJ1Nh5mfGvqQpcntZqrZ",
  "key8": "3x852Kqm6C4B5L79GnQWNwvFm67z2hMTQ3hF97SzcCA6ne77EDfi8MphhbpPVFi9z2cwHwFn1pBUwF9qW3Gx1qFx",
  "key9": "25WtXF7ZTHPDH3hxcDBRTCQ2rbAL5Xg6GSQFfUzK3EeWu7dNjpmdj9hq6VVDXMrqbvgtA2WVUjnprkkWD5Du7PnT",
  "key10": "iJuBXk3q4Uz5LQy3s9JvUZMwLJxhdvoaowULwUh6JAV64gBAsKXKgkSFDXq7wKtbeHDBd3v8dSmKAfKh9HCX8Ns",
  "key11": "57tfzEofmZ6hqwVDzRRbtyrpSuvQSLigPV65TjLeK1DdX95j8vZ23BFJtcB9jbZioMLr5eXbxr5WeDbNU7r8u78h",
  "key12": "V5QU2CYk7zEUrE3T7LJnvuje4avq7sSYh5rY3uf5xHNeruhAFtTHW6jnV9nt2WJtvFhf5zdXAWUTYmH8G45ofTm",
  "key13": "4ry6cP8Ut3XdTr6Hx3LFa5T4y5BKBMCpxozbYujRGHKedeikcuLvau1oCam8gAn2AePyd3qKJLH2Umqr6m3uCsYN",
  "key14": "2CdzEN99SWzazRDqiNNX8DRkNpoBrGRsDz2CAFj4ocAEoBqi84vtyrVTu1bomzb8jQPZZPyk5X9b67abzTUrVes2",
  "key15": "23HmiJyCiyEkq8shmew3SgejNfsd7ZSbFWt5YbgDPv1m2v5phhGWuVswuWC9HiDR81MABWG6vv1phH6QV46PrJnc",
  "key16": "613LB29mWEYHpwFgiDFxKKpjASMcxoPsSiDTxkpzELAY6jub5wkp6WFxCaTGGkpL1qbKU8Weszv6cH2XgmPCowVx",
  "key17": "2oLscuJTaegmfkgadSy3UpsbBwDYkGHFUhRfJUVsjXqZWnt9MN9MzDmLASiKiQBGZstGPMvj5ySdwNCyvJk7sy6K",
  "key18": "3Fvv15sKx29ct9kZ2hXDrWAXnDGZGMuCASRcTiuGmiLVpn4CdUCyxvL8ugkTRNkztgoasTSDn745ZxC5RCfQntrB",
  "key19": "2Wx1xiDXdsQjnnBDJrPPJHYWwnTAQ2c7bFYxDmThRdJCbXwezFoXDc6QgGzrU13qXoc3wmhdxULf6D8q3q6E3YZC",
  "key20": "JZuTnYbfzoB2bHNUHE4CtaZDwRHn5XyMq33iaBYzY1bwSrCALPTt1tm6WDRjDXoMFeazMfMPHXyLPSnBkXSbkh4",
  "key21": "kSULW56yhmsLVvSQH8B71NCUKxfkG1A3sRjJZP2EB67ddE2chKAy3U7uufGoVTG9cVZWZqA34i77YM3KztqCv3h",
  "key22": "4kj6ymGq74b1BzQpYFw67NdhbwYSa4S8sKAgEX3AcEcsJN1ZgRbKwHWpVw5fBi8nedNBsUSVqXvMb9v1q53xq4cF",
  "key23": "3c6QUJ5FbyBjY3Wnqv9MuKNuW9YhiGNmhu8MxvpyegV7fBbcfBtkeKuibK56EBZ6U9wce2Vu7Kn3FpyyHrAZyqpG",
  "key24": "2i91Me5T6TPc8BE2JJT1WUfrWYFJSTiAfuWTUZi9vPeYZwqLNxti6rQh2BthkxpH1FbSmvwSKRFkj6RUjFAisTfV",
  "key25": "5b6BQ5fKfQPyn4UFAkkLd5TKvrULYejK4HaSLATZdJyiMKvNYaNdwxZmq1Sczvk2nnAyEEZQjHiKD8UGkxwMrKk9"
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
