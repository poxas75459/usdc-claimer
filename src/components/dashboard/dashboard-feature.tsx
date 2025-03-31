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
    "5KFmYf2CjRBv7UAfwLorck2yNjrAKnY1QvXSj8N4Z9dCGFqRRrCxNi72WQMNJjFVvua6JrqQzW16jWxpyLo3mbrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQnP2v51ap35eN2T6nQv62ctjQg2XvraY93B96GoxTvqi4jXNUk9LJCaxEnSJWfqax8fVt43B9A5ADpywK8hTBY",
  "key1": "2zmgg9GJyskc62oK2ddzMKDxZShQY5dvbogF8ynB8XDzsgqJFrDHFT1uvQcYXhmPecMLWvr1mbG6x8Ts83q8n34H",
  "key2": "3E5DTVjPjPszpGVmh3CAYzyVYGN73Tmb6L5cwQQLFWCeoQGj5f8TxXFkABxNQVR2axSJsfCb4gcQpDaB8Ertu5vY",
  "key3": "3KUpWabNJTFGfr362JPU9ebzEeZHeTUHRg2LSofztpeyeJqvWbrrFyis2F9hAreV5NWUBnH5Nw1e9y3gCz33uKS6",
  "key4": "3pJuQXnAu49HnefjqM87pmVPrGYonZgQz5AQwhX3ngM1EdPdGaWhjnx127VMp3PkSs6tnQdErfZ4tVX93UWomRH4",
  "key5": "4sM7851n3AWYFFs98eckdfyVB8e7VsiU4BnLknk3LRTcsGJWkfp4FV6uyapzJdRbxkN93UEgwbxjSrAoaKK99BkV",
  "key6": "zuDjVhtJoMANm3iN4GRyYErTR1QWvsD7b7MTBCU9ArdCGpgnnjzqL6twbAkKsjR6xSkfQ5c8VzMJJN4khox9mib",
  "key7": "2VyN8QPYPvv8Vh55Gj27Ao7Nv1rGSDDiFXKxyNrBfXnnf4UyB4sgdE6VW6RvJpfeGHppsJNmWNN5hruSErGZBvMM",
  "key8": "49TS2kpZ9UHpFmXuWZsVfimgo6wiPU9kW7BPDMC2tPoUbdatwr9qfbYnGrh3MtydcejvS73rciR7e4vSKWBTMk4X",
  "key9": "4mCCmXepzHtdwshniMP18xEv14wqr1yz3dGXrqJAoxSd3nxcXUnkK4ARg2BKmarsxP3NSqfeoLbwsSSdqSCYXnYA",
  "key10": "MqdrKZEQCFtyr84G6MaSCpBAm8eXmJ98nkQhZjnH15woTde63fZn3rSCbkAF6zfiXoUb9ydGXeEe2VtWv1ux5Py",
  "key11": "2vseEhJRkC35SrUwq6qrTLZy1KGAZFSxe8YvujEymG9eHKgQP3pefDLky5KMVFaYyV9Kyb3qwfEM7HEYhATZt74K",
  "key12": "rnffahpWHn1PghSxgWVQxBjdp17x3JhUt8hUPXA81mZtpkDkFAAXmTMToX7H6bHN1z37JgkC31nsWXP3KGjL9RM",
  "key13": "bp7ifysBZY8zboWQ4My3W1qNiq87SEH2BtPVHaqgVAB6BG4p1Xz3KzphSNLBhRDjgGSnWe2FK8FCsG4Pfku8pAy",
  "key14": "5XJK8JcF2TtUKKha1KWhDZZH9H9mun2XbBVxQRh3oAuHgUJ7sgUhcPuCRxGqNKAUGdfmCbbWRy4524ZPSHQQj6cS",
  "key15": "4vBKD46oagZ9tmHrXt4ZZh9Kg86kYaAycLg9n7BejKTrBJjKGV2PGivozG6x17Nh6XMPXdzqb4hdyrw2yoJfWW3N",
  "key16": "5BL7k8PqWuuyRtvPvm5fJYKAcDeZAaSwGAHhdLJaJ1xX1RyWvVkg1sqbV4GRreMcSNftmbKAx7Vh5vJGKhGopz8S",
  "key17": "J7fSZ3VJmU94K6V8VWojHAB1ou4LYoXGGU9WC4ztDuzNETcEAog76UFNd9jo58siNjkxMBsqnNRXkfFZpkkMHSs",
  "key18": "2cgL1EAJEmnsWcjXsq3cVaLATL7voRoXphaLhiXQqMyZmVnBpp4isuedMW3yPM6XYvRb9vc5P9XiQdfUQyVuHJ22",
  "key19": "5MaEa6PTKECHm858sz1aCmGqgcUwXj4nPWtwCp3XXJr7zHWH83xV2U9ttqAh8xTqU2SBTve6gkYXYg426YerUSaH",
  "key20": "3oD2ZjC6ApFKbSgqXxvprPscBMWK62zYvLmCk8Ax3ouCicfB6jbVgdzAZLfuxsStD7ffYp9zXNs6e2TP7u81EZch",
  "key21": "MUd6djJBerJiefG2Y1o9vcHLMdDJkokN84szeGKYPSGS8adTmk9PKCTivtKi8Cw2AFjYAgUcqhoSA4Gz6YSKwkx",
  "key22": "bfnRmHMhh9L27ZNiX4XugPkMWJi9M1XtGRfwbV4CneUCxvsf6J9sXMgUi76ALgLmWRTEcVHkcE6hatb7zbkiZgG",
  "key23": "2GjFcVunzZEdPP5ZNkCumsFTztKxEopAAXsjH6eFsqy2WAHuUv3t3nJtHJXSvamvRBgq2919Jf97coKHfDxRmTaM",
  "key24": "5G9hhTMKwkn957dfEEbZbgBTTxArv8qhYNsZvA4faorqspb39j8Vmw94jZaWHtdYuQzSW7vExEPcLdNYxMtiiLk4",
  "key25": "57kF9Myn4Zy47qBbhMAPUDGWMf7MZC2XQt9qfr3MNpptt2CJKWtvoLMJt3rRNgmWmjc7Yz7rhSoXRo5abhSgoAjw",
  "key26": "5BWkQpcpCGQe3vaFbDq4hFfwJJSnkCnDaYQd4jXnktBfLvERvEBijsW2Fjs2LH23hkmUWjpUW24yieG3hemEdEHn",
  "key27": "2smjSJZizA3CxkBeT6iGBkkLtYr7c3gRdcPtCwF89XmxvveGQa7aa4hiqGsJHWt46M4uDGYd7GtJufzbSaQWKT4K",
  "key28": "5wVNEiG3FXzEuT53CNFayGMoevZhx5cDpbyauktXMXPiJWnwhA7qhUq2XX4sYxmfFCKJjUktdSdyKJf4oB89nPhg",
  "key29": "2QMcuxeps7Qf1HibraoM82WpmVEdTBmiDXspKiTpuPpdXda51LVmMAZJjKxNevyHzA4ud3ys6d6wvKkhzMRSf9fL",
  "key30": "63XLd822JU2BvaQaHCTkeZDHUxFj7YK72BSWWeJ65ner5QK2i5PkjRGXdZZ8u12jBNEAeEieq8ZRqhyuWmTybfmY",
  "key31": "3FhHbWQYdV38wCkMfiB82MhQ6RiM5R9NMJ83r4jREZ5DaktFR1MvUX3P1qUs5j4oUfdL545bJZy8UdXDuBAQsvwK",
  "key32": "3Md5fhiGsDgEmqU8Gkdq7TYdzNABYquEWN5m8ZJrPvcueZtgSckGtzohb26Ywb2ugbSseDk1Fd7nxmCjCR8ZUVJA",
  "key33": "5E18cH6sRqqwP5nLV3eDrmjdFPmu5fFc1VuTb29fjHkLmPnMpKBC14fRamUnNRq9Tpc5FNXN9gZhfBy6hjxyFAJB",
  "key34": "4ng2WnGW4hsM9ZBfz3wnFGyRhjSAqCPZ3BGDxRpQ7V8WBq8sAHm34omAXSajp5k8zcMcuDMd1VMBdQ1EbQEWpH5U",
  "key35": "5TuTxgBW8CE6va1mpBYgj9LDRmRmxBHKzCJEzniTtbKB4RMDjzET6TZhRbFNexWjwiKg6KdjetAmpZt4BTzQGWv7",
  "key36": "3heHARW7zRGQVBMC3RPjzGyj3WkbFziVPkBfr1R9dwGnt9a2dgDMpy6HWYRT8JF9CGRhgPqEC1E6gD41tid9GkwV",
  "key37": "EUcG9kYDyN1evP7vPbHTNcNvQAYzSPDykjL2LvfRYfaK4PjXMLiCGSzQsuqkoBku7n95MmXJG76NNSGss9qVtzD",
  "key38": "5r1jWXqzP3PGkXvqLhUoAkQKj7S4yFv2aKJdvmj1hoZ6g8pfRviWkd7orD4nA3ZdRNv9NHYx4yQ7LrWBnB3FwjtG",
  "key39": "4SXBu9JLQtRkL8W6WB3yTNQyikRhkvnbPPU6mjXCjEm33mqyiRjCFcUjpSbgJG4ts87f62GT4ebFK14cF9rbPrRK",
  "key40": "3YjmodPAziBFoXf1kv37SVQumbGWr1tbJPM3B1aYch8EFBCPpa3D4m4vDVkg3yF4f2z6trBjnmvgFHEJi5pYHqXW",
  "key41": "2bZN7Ud3ydVrYQoy5KfZfkh5cptw2vHFLPiGbbJyj9D51Bo7JFh5ekSuBL46SXkEZtX4jzBQfqh2ndp9FRfLy83i"
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
