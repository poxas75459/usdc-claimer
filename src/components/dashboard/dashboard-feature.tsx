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
    "5UsUSj2M3kqH8trQh4JULgoKq84v5aP9vLGwnM4kQfCQzRaXc7tdvcojSmFSxw1p8vhL7whCyrCJnZXb78emL793"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdRPagJhEtULYNTYkwha8N814g4NQ6vuTa9P81feVC2MGXbvDSAREKsSfmxu2wQoTee94UitnnvAtraXmhkkaA6",
  "key1": "5BgAfM9enE3U3DGkZPcTsVUFtQpPH5RrWhsMspCN4M9q49nVjAFuyocW5ibtjmU4Rgctc8DLEbejS6W7MLw7CtcM",
  "key2": "qy1EzBWxXKHNikY7Y8ehrAAJKD9ffvuJrphHLJmsn7FBvDuvYvqFKVy72Cnrw7iTfK2QpEhVwMmGsTFRMPrVesK",
  "key3": "ZGDuqt4gRuYP223cz5nmW5bvGhNPVLgyUQy7YckEsF6Nw68fwNCMc9kxQDzHRj9xChgw3PMseYezrPsLikCTV1i",
  "key4": "249k5b3Q2hy6Yt5bZVpBXeAz2aH1XWY34YGCZzu2Y9zJTxESuZSGptMtunmxkVTcq8ypm6bMwDR7dc1rw97hTSG5",
  "key5": "4d3SNEo6rtWjRhuR3w7AhWmpAicJMUtLWnFVM4eWDXM4NZB6QyKGUbheTb11rxh7Bvt9tXB6VEpfQEor5YDNLcsW",
  "key6": "45DUEXGuQ52VqLYJGyeoLfe4h3s4v5wPASpgPCsEzZMwoohYCzYpYgYZzXzJAjV2Ce2AK3c1V6dhmfUrjP5FeujK",
  "key7": "31c7Qr9bWWqANfBTAsCfUCQboD4S3nWn2AzW41uVfwCqe6H9u2w4b825g7qLBZ7nnm7fdSoTS8C5KNh7z4GgfuyP",
  "key8": "2vt4ywyXTyduorjPwrB7ycGPKg4HRRNh6NSqSXG5GcyyxBkYo8cAsxyYzBa3kPcv1jwBqetfZL47w86E9fS5DLuq",
  "key9": "2inzdjYLxi4DUZJ4UbzS3pW5Btk3XzbkQ9xAbJ5iUqTo1dbQRjaxNpyDrR7VYsoevPPaYJRD3qwkfp7pnHjkDRsJ",
  "key10": "5zpSp2qFSSZitq51k3MoSL1cV9BeGavXeEMZpr8mqZpdxBkSsAVKX3cubCzpFpNLXToTPtUpyVfUPxnBaA2JFezR",
  "key11": "5Yd6n8sJkzsRZBkg83Av5Kwx6jiYMrTbyECjtHnFqPXo3r9e32Gyx5qRDkg61qhMFasdtHTkdaMhNYm8sM2teoHv",
  "key12": "3mZBHomJLM24NGJ5TETKTkrWkTAP5b8NyNBFisjVk3tJ6avftu6o5SAX83oEJgjo413EiLhfkAgGLbjsKg18XxyA",
  "key13": "4E58Pzn7LKsFWPYhGasVxSDBwr3jRJwhHqik42bZk3cEntpxdpZ2zZ4wSxPYfWmmbQjXwvWVygcru9kwBzVbkY7Y",
  "key14": "5iV2eTidstaPhHbxq4sMUnrGjfnbBZBrT7E5amdr1SHV96AUP3mPhZFnYJzwR6qeor4q6fzcjCjiQ71e2o8GXUW4",
  "key15": "fTNtd3gLfHbjTHMc98Yssq1qEBk2FdyTgPoyTyJ3SEU1fFKk8ZYTjrK6wRaXhZJK9Jrjup2wsxwaV5ZibcySxRH",
  "key16": "2Mf8ar194jyxQKvzeBc2k93THYeSJqTYK9UuSs1y8HsCifvagNuHcmCLa7QsDMvVGRWfmDBK4tw1QKzuFanjG6jy",
  "key17": "54h23szKKzNfDZvnDLCNQYDRM6MWPyPhQSn92GTwj76nUwG1EjXELKrRnV2rwN3xko7RJFCWhGo16xw4TdUEJMa4",
  "key18": "37Vm4qJF1yXU5zHVZ1mHWiAEs2KRP5HeeMmrgJXV3yzCDtsShkevigasAxuVk6AVXw4N7xRHRoX98Bxt73LE3Qsj",
  "key19": "43LebXBuW35kLD73nwHKCBXzUZFdmPqN2wYW2oPpLqNpsokAYy4DB3drZU8rAttB8MTDftHE1fcNXka6V3RoZvMw",
  "key20": "4DB6gxypTZgcMP1H8UysqCCUpS2mjFeNZALkCaHf1HRABqyLoqGk35kVdY8E6aRdkSxiE6UqNj5m5Qhw8FqUHERN",
  "key21": "6B5myPv3JWSMEFaGvWF3z4Cy8fFt6PQxwNFRenxKDCUrtGycTqmDtEb3nreKFpsXpEkqBN4m7wmST8miYArqwjy",
  "key22": "8pkdCmqMqvVyfQg8LxGvqBPS9U5qxRMDzUSXLcUYBJGkvv9TBo2HYxWF2Lw43jBNw6kxa9veeqM8bafqKPmRCPG",
  "key23": "4hFCa9Z3UJ7dGK3cLinLXx6QYXsVwE8HPi6xrJbB4kY7cZyj9wrKWFSixE5bBeBqmPTncgTMjNh6rFALeELQRniY",
  "key24": "3dCK1UoWtcpisbX31SRuXTGcWPia3ZU16QdZ22UcJcpf2t3GsgvRkUA1zd3URT4KxtJxzYMpoCo6uXd2n3XJ44CL",
  "key25": "4omzQwZSQNpozW9YVZZpL3BPdbXfMc94iGLCBSjnzPftNG2HC9cMB7qaRczrRr4inpG7n1nhefsChGyvAKWAkiUP",
  "key26": "4SUCR8uLyEJav6KwUoUN34ripZ1nzg4JUfAaTRtULdh8cb1pMV9TMExW5F1M2a3xPx3Aq7eZrfasFPj55YwVPV29",
  "key27": "MHkG4rq1unnq3apbFYCniuwfBFVTqWiKie17sekPv4cgsRycosE7VDt2UQqmQb5tisSN7RdSidCVJK9tWFQYmiK",
  "key28": "4VUfQW36QfuJdFDmXcdnMPrqCWfHMmPijysNEF7b3TspMEnVLKmbhMoEPdRfdsGXEtxhDtUVcHrGEQgdQrNnd5ai",
  "key29": "3JaPsQu7gfnvMZzEyqweETc6uCsduxybcB6m6p7mnvcwsfSTLs4XCXnXy3mnKzgTNraiG6YQVLwuL8spAGEdHTeA"
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
