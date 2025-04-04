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
    "3hNJGBVHWHtTsxBsv2BnJPDmqhrdPHFdRHQrkXTYtRvN4mX97MLMnq7FW8DdNDPYvA5Q5Jc1NycbFcq2iPrDSEJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZLPgzUqvQpi2BQR8jf4xzzt3bpvye4NBqKyt8SBvCpxSnqahEp8UUf8Nzc8UR2bSdGw4sRNDBiMPRsmsB9vBZF",
  "key1": "31wjS5QahJEvvrZwQVYThdc2HxGJPALeHDZuo7sbw5DsqJQ4bpnrq59kASELEefpea3Di8bx1e6weQttQmh46zX1",
  "key2": "4UuJBhPiKRA5NdKGyE9PXuydSv74Lrqsi6TZ6Mezxxg1NLzhEfQpKdXZNpY1VD45M1PzvWxnRCuDhiMcP3sUgsf4",
  "key3": "2YMLJtVVX4Pdmv4KTQdEYsv2cHPU4fuedro7DyjLaqBq9rfUuoNbMUcg993FpdG9GNuNfzKuSJSfX7biQwdZ36a8",
  "key4": "4AvHeFJSpqFkRE716h5QDskXmwF7GAPMDB9LWpCQKE9FVPBXE4kTaVo9Ra2cdjeNdDDxDs5gfkzAhbN9Z5ttqBg6",
  "key5": "3pvMZfqszVk7takveN94J9bHXB2Ate5koEsgnczRWej2RdbvgKgYfmyMvStFuTXP87mzRzNgGCbX1vALqcZzrzqE",
  "key6": "EXPfHjWrt9McfdGCZBirAqp2KdL1PUnqsRfZ4VccNZ6Y7pCxj57Tucv2V9MMb5MJaSvPVWZCobnNK5zSn8doQQ6",
  "key7": "5u3ui5bb3TF4CMo6vXDgPbqKvSYLvZiqbemhh6HdhjjcQKNPemqtaJo5PBDNryQBYpx9EPyKosYMzoZrnVRKnW9Z",
  "key8": "3XG2AqwyBhmWw4qV2U5SciXQozyhYjEf8eY5Xg7wDENgaXBKhMfEfSzXv9pEq6vEoFcX9vX5Hi3ctpFpS1SPrJQj",
  "key9": "629BL8jvKu6uJyLFZTagYvsztAwevz4uzKxbgrjhFc1WF2iMQnU6iXEQUkcHuyLCA3aANGzoDt5M1TJVkEV2GTmT",
  "key10": "Gu9VtAzL28d3mhktaJTqrhEmJVc4eSvTXBBqo2PT5PGN7DRQEhTxmdSWsuGt2PMum2FNNhboxpSVFn2a6RqWvh5",
  "key11": "fXyFkqKB1fx6kYtdkJUfYUsbdvzoqSvrCJ52Yd8BNZ3Ne5pdARrNgs4J2DPMcafJuokx78yDaB5fVjDKCZbCcY8",
  "key12": "5hK1ztJkq1kV8uoiq5qZ378qdnaoe59e9m9u3xviF562f4Hj3BR1F8iBJufGz8xW2Y7jakQRAVExLSfci9z3vofU",
  "key13": "5fHSrt1uMtEvxF7AUjUXgEkgsxQiX85yYSFkqL5uCk7nQCLFHqnwaGD3WqNJBULvF1yXsQzxAFdRNLSB3fH234ay",
  "key14": "BdjbjP21wzYx75byG4Qx2MU4JjqgFjd9AAwUqeEos8b55AdXKiq7EQD6UZZziLzB5avhh2a229Ub9oeAhggKJmF",
  "key15": "2f92J4bqfmy1mbCUz7a9sTaE5a7AEvw7a1bpNUq3rLhphhcY7nvtZQ8EtqxsPmR6nvPBN9vHdEpdGn82hCEJsUit",
  "key16": "4vFzNtZX63NEjUFWiW5W7ihnTLfo2NXRtURpt8M4gBqyHvaoP7DakMoZc8cWHWbPJjgv5AmwzTvHDmQiTPrjZNyG",
  "key17": "q4wUfdCQrQFkZSrqWGXzVsBrrVDGZ4K1hW1LioGyCePqFJGrXHcdAxyhFaSeCZVVAAnHCYVQUCpbVcrfrX8JM2B",
  "key18": "3Ghs6RN8ghmdpFWix1GLsyCkVipr24XVX1KGqDi1LQbaYtcTUVt1X37wa6dTnFSTxrdmJPmipym5nNeMPrinyNNr",
  "key19": "t2iYYyQK2K5tmPkGXw7Eyo8MZjdHfgrUoa6yBZoPv9bfebCJz4hLDMXcjysrvwcoXnXwUY4fZLRNCBvEFKkZkH6",
  "key20": "3itwyT9VRtVRKDAiSrKMQDyo5FARDzSCW4rba5roSW3iUBFQjCW5oJ2dgbFULUWarjug1nAviWqHLUBEwKkaWjzr",
  "key21": "223SmdnieLwuYK3AAHyW6ieqnnrty1dk5fsSVqLVt6HcBow2nL1bfbZo9o3pVQva9hAMw497jnPXHPUXSiDumvkp",
  "key22": "5R3LSdKfdgvZLvVgUDAShMeEwFmUdGoo8Lhps5N4N2VrN5aRqTw4Woq9Xg3Fwf9pLTcTSNRcCqfupPPU7htMrrAP",
  "key23": "5QAzouLxbEe2gycxLqdWmFfs9woy51PzkNjJdba6rocpgLyS8xCeSLTcPKAmgxkGWZQ7YkFSL7mg2YhCgCexjJX9",
  "key24": "5g9Fb6X7XLkRvSNsVCwCbN72of5UrePR8cqMRRiQ5xEm2YbiuENBejSDQfiKAgZttyrJqcg4aHYDAe8vCTD4DD13",
  "key25": "5SJnNkbKhjhoWKx2RrY9HoxFwW4ZSvgrSMpjpae5v1XkHNBZWgZYYGeiywqYheELUf81fdcxLDHHfoASuqQMoYJL",
  "key26": "5MdpPeAAqFGmX1BPQfHh2PfR2SV6HKyQVWaKQgjerRuLm7aa1J1nFBYL9bLYTXDgZGBJMhJmjxzVUyo2vd7oZX2t",
  "key27": "5Lz4Nc713AVmg3YMxKXpSpnHtsBVMifDkLhxg97BpWir7a1DpcPBDirMeoZGcDZzJDA9GgR7KcHFhFtTcuQc2oij",
  "key28": "3qbJhD3BP7Ycr7WAQAyA22TfAfG2rfRaia64o1poVh1mnyFzHXbJ2YAGA5tu5wtLyZF4gvzc2NRugP5CB2m5WDoS"
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
