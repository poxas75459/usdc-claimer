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
    "tnT5vRqPg5p1yxrWtDXjMngZfo8kXvRnDsCdGjfirNB1eV4p8qEFqKgGMBxdqNkZUYLaLW9soyWWnzTa9i8RE5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L2iK6C5L8tZgQdgPEuU44nsfn9Sur3KH8r6rMfnmhUFc5pyZkZVWhrenHqSdds2LiqjHj2QVmphUTaMLUM4wvvq",
  "key1": "4GPUKUGywVzKmiruCZc76ASmhKe2VNQXHvHz32yuao2n8jEAviT1hd2WvueoDPTBv5ra61oCPtZxd3pqygbx93MA",
  "key2": "4aqJtNHH8Xdt57VZBRzypcNWaj5ov79Tmj6TLuUDi7XnXZdSWeV2KUQ7xzMkYiMt9gbNQm8rBiGGJiAf1JW6FZVv",
  "key3": "2ZYDaAXy6XX7peQXSukhZycbzXXVXQybLEvAQiiMudDnzN6Y2B3uFNRtttkAgJvvmZNoj7PfKghtnZ4AhsL4Rwj1",
  "key4": "jS79NCZyajRsnkK1SnAJZ5PL71VPPdKv5xg3t5QT7yC3jmnHLX7NPY2SSt5pgpNBEMAZKzuWNDeL9uauhcpqEdJ",
  "key5": "5bsuAiJFMY1w1ut8ZrpiZZWZVUX68KCHmsUiL7fwAXFaC6fs1QCSW6SDZskApsn7uU2dvgLKmJonzUYZY9iDnCEB",
  "key6": "4V49ivenU5svYff2RmK5N7VHVWCBDFCrDJAjFuKUz6uxh88KvUTpPBbC499wQQz1fjbPNxc671yKn1GQgvS98qvu",
  "key7": "gRCrTgjRGfpTKGWGSvuh8HZBhKV3T6CiWq6Dp67MUNUuAvs8akExNzNkh21L5C5vW7iXRy57psqndU2DRzdQohb",
  "key8": "48eAWQM77eDEicWmyNQNkKYrDzEJGgXYTjmWWXFmLveJ4ZdJDJiiTBNrScFQgGm7eZxG71v2KeSRrGrEKS2NA9u3",
  "key9": "2XWTC2DzwZKHV2X1xkiussW84ofRRDarZjvbA8YKsaoem9BYsziNqLQ5xbqDnQQw1EtajeRD73FnzVjDs7EWLDN",
  "key10": "3tdcsmsoMQpM3Cjc46zEgPvM7DXqKFYrjVK8sW2dEvuYssuNQtBjhrkuKd5RoL5hy5Xrhkb7JpvnWuLCuwFUinHV",
  "key11": "3RvvikuKs38r9jMrq5YzCVvKt77i2Fq9q9spz6TThETuc8bw1ozDUPwQ5xhW4oY1vyhrY4CyqQnitWsBPCYte1bM",
  "key12": "uXxpV7MwP11dd2gumzoBQx65dsveQ9S87uHotf3ydfuhMRmrQU29XxzjF6hd8gAinyQ7wbHcfPeAnm4HP8n4Uiu",
  "key13": "2pnyycz7eQL75x7iGdABzoUQFZsem3g6LLvdXKyHYJe79mmEkKzdeRfEcYcfrE4p3sC8X3BRWzHBBTM4Dd25e9US",
  "key14": "x2yJpNNWDFfhfLiDBUGhfKSKEyE4toDaYERrJFmVm3htUF1xaJejazfZgPVENhYCi3CKvwigB9oD9iXTy2Maa3k",
  "key15": "4w5PVSfLE6CcQMzmDHyR3NBhY9Mjnym636NfKxEv784yk4kAvbCnQ8ZaHaGcjy6MyhT59ZNomZnooq2K4BBHQGZL",
  "key16": "5WGVvi8ynamZK8oNCKEPUbLUgv1ZSfcJEjgdigQu4iC71M52ESecMCL12fhTc4FXw1TLsZ7P79LaZUWV4tUKjuU2",
  "key17": "29gCYzFmkKALTTfbhmyB4hECmGwHwPYRCFa5i1DkGeqeS3eW7BTHiksy3gz7PZyCndhw4gQCK8hnpTaf3zSZUUu7",
  "key18": "49oPZFnztibSNr1a71Q2PFHPsGi7wr8X4pvpdN1AqoZ3q8d2KJ8tptUdVeU7foDyDMetywbY5JL7fj5wqfGAHWrW",
  "key19": "2DupADFDNSM7KaBzDXfTaxArZyH1Pf6uxNbPqRAPrmnMfLQgvbb9gkj5GDMnAmPiuf6nLgtyo4MXJQYfm6aT7coF",
  "key20": "2xsd2q7s7ziMEwpSz8QZpSXxBMyMU5kPrPTeRpzngiKEQJ2zWhNNpZa8FVhTmhpJu32nXkaHFpkk1SRB6BHpm2MF",
  "key21": "twPz6vWrnhArFaEjeieesC9uPsAbeV7C6NvUgkLPm2pVEy47XtonHxzDTiBRs7Nsq5YXvaRse7kQCpLVhpdYEbm",
  "key22": "3eDYTGSHq65PkEJ4YmRx5QNAnJcn2aYVTiN141L4yVXj2bXVJYGU8QEsufmwc85ATXf5PeWNqpixx1SP3u5PKxHv",
  "key23": "4fUrPSbkaovWronACcSvVYGqPg5tvMUcmdUmuYppFdYEzWhjwJmucNFsGsZ7WgpYMwStj6tKaxkNUt3J4BYpWqAW",
  "key24": "5UF9Lh3M7XscLaWfPJtNyFaYzXJeRSb478ECRpQHiVY8aezTe2aYu8m9B7x6SDK3ot8W9nKWQxUjuLz46nDiALV3",
  "key25": "5BU815GSLUKzgnxsffHxegtLJ99zSAep3B8UNmvsqhrHxMdziQLAuB12Q9mxoyD3oZSiKF1CLNXHbQj3W5c8Dmzx"
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
