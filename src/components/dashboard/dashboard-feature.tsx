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
    "4BsPvt17NCLFwBeXcjBLcwKk36SUD5q7fitfXHobvKdLeiXjyhtSTj9uteXHDiqeKeBQYR8GCMNt4VzQiMFGWpNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRqvjMDVRVrWGxyrcTXUnizVEQrfCKfzVYCeqwgtW3mG5K7xnpZhBsHGudCGhqNwbByUFujt14z3GsXieiFDesA",
  "key1": "5VtxgwNSqXNjoqcrhch6vBh16jCSpF4D5dNUVnmWpMhAhcPFv3fmDc4rYoWfjncHqmt58EPsyLkT85LchrHHSjSv",
  "key2": "5uYncTUzRVz7Jyso5rs4fwovj4ESjj447otWCdX2h2ihQp6GAfZjGipBvTXm8DFKnL9KLbpQ7SpsPhjNQ3JzYSna",
  "key3": "3ZBhqkkYC3Rw2PqCGHkcp5ytX7esegodx4dknDGWVLinQsRukn34y5umDQvjhdS35nxpLu1k5aENF3n5ihtKHZ95",
  "key4": "34WH15LgHpZwBaCJFCJgWhmK81HHrYHkGxwKEJjdF4dk6yVP5jezVeuspqJCMuXUTwFWp358LpsVxPz9jzMFfFGc",
  "key5": "fntqB3M252NP41JaX5RoKhwvbxMc9fHuDdHkQnWsBTY8EcnrEW1cHnBBA3kN2cosyf67mh7xg7u4UWg86612UAM",
  "key6": "4hkFvVsT1e8QBkwDvCv8QwN8VcKCoKzRxDy2BKxgkspaUrtx1vRu8EppejdfNGS21r4nah52TCVofXxKNQVWWamo",
  "key7": "5KfrmgzgRwcm4DNAHUeuvRFU1BYdPabDZMp1hT7iMJzeqcxtbbq9EXARwRvRR6p6q2ii9EtBM77mSRJfNKKhC5Z4",
  "key8": "5ZxpV5xQE8FDbtXucL4k3PcdfW6H5Q3CpaeCRvXK8zkaxPLjWnCLT5XtT4SXzvD6zEUdcYXEcq5QXjNA2jvAmJny",
  "key9": "2iLuoE8SbR3RXBn7eASWePLAdnfbvVNbKfNQi6wfWaQGQ3zFMGUkVPgFPS32Y4zWcH1rHjMjZnc2jQ2cY2tVfbzB",
  "key10": "2Qa8tnciJucXjvY7Wn8oZw5YrGvvRHF6Hi4y9MKHEQX5n87QseCVEQBcz6ypzAkJ1WtKxVS53s3PKgRejQUZJGXT",
  "key11": "5hhatGnzzDBoAZjkpHjsrjHdEMciLb2TGj8JqKjhB453FgNSVxE4EYsynQVHH6NQeuJTzooD49eaUJiQZaodwGCj",
  "key12": "24u1enberax8oW2Q9EyX7cDYwEyYxCy7qkppDG9qxgVeR39SMdbQEuT8qraSBXoWUPAMEojddTUHBhAgJcT7JpPL",
  "key13": "2JydfNgR38eK2pJ2jFjCCLcdF9i26WGS6YvpCyJhvHAtD1TduyPqMMUBUP5FrgRK1Q9Nunipg6QhM3yCpWGQ6jQM",
  "key14": "2bDaBKttxfUWe9iYbZTmE9kzoQtD4hakkQPFKCJLEnCFgiU3PvGTjY3GWYN2hoTtmaHuoRVxXyZrtBnd74SK8NQc",
  "key15": "2TdUYCjt2yEnbF9cF56YAhQPV4PVuv8BxVnU5hjeP7aUDfpM4aLdmByXyhDvuHsGUCC3hosFuJGYrxRZLgmNsSoX",
  "key16": "5tNrJ7vchgYKCHmaTY6BFJrQuwS4qxnTutGExgkWrzVb4KXfqeCaUCzrMz5vChZ684YSVBWYU1oExmxMu1bB5fki",
  "key17": "3Cg8qhckEpWbbj5hW7LeaQfie5jYTAGuKJz8shjuxjahxbrnFeFKCneczewSFHWa5rYsxyUeq2MucDW3ET49dpfm",
  "key18": "5GZFUcFhZDB3XM1XRq52Q3X5WQqLT7eiew856MbGiVgN8LHbSbetsmLxPMDhHaGadfraFvzJ6Mi9g1m8yrNcKKQ2",
  "key19": "Qf5dZEFq7FwJnH4hmsoTuscA69KEVfiGxT6j9JJJ4qNHrKsN9ZAXrdydQtMdJam2wT2w9dE6opmMYQfxLc2ag8v",
  "key20": "tVZd5UwWu2S3DLCUYv2F3WutDgfGtLKNZZkDk6FNMbXJkj4yPaYsnPWSeDQiJpDxFGHySbs1nZWFpv4MS2nGgHz",
  "key21": "51KgSmxhST7eZbACRYNGdCv9C7GD4Qw9dcEhZPbbAnwR8Wh1nNzhTA7rzrLCFRzfHdZ33Ws7PfSmoCFLT6Ni3cpo",
  "key22": "5cwBjhfZFchdS8AYkH8eVma3UbgPkFVt2L5NXSn8fHm9rRw2DVx5BrLwY7XB3a58aMYupwDC2pUMdbZtBQA3DzE9",
  "key23": "4xXZ7WyEqpRinMMgKTvgprTP3VnvWyWJnAVucRArHe2jYvdYZdqPZfhCHJn3r89kxCTzG1mDecfC69KLW9GTvrnt",
  "key24": "5GDcQe6U9y9Uzg2ZhbrgxJqiHctXQ4QDASZtaYWDkKrpjeHjw3xcWjyC56XBYyRCQ9b4Kvv4qcw9gDXCwBE9x5KR",
  "key25": "8FxH7p7eGCkxnM1mstsvaf3Etp5dPJzZR7BfjXk7cxSucz5VJY6PP97zBBqnfpVnKqMkiw8tQyCdHw1D46RoEdy",
  "key26": "5NFFS5nsS22PYMZMvK3ggFVbkbYpjrzJmZfiWNsTidULc5JV6uNWNJFXC8urNu9w3LGK1Ry3gB16foin8ubFM5TM",
  "key27": "56s2nEKwvvpfS8H3NPSVwUHtTQbZseNKhFAS1JywHqeMCrNKkcbz9MdnHFLH4BHcoFkb4k5Ydym3hBDACRZvQEPu",
  "key28": "4au91oiXKY5GrupcdpfQcHyAWKBNUtzdxpoFcuLaVScThZ1vrJHbEMwve7GDBZB7Ea6fCUHr2YH3z2CsGPCh4sMw",
  "key29": "r3dTjcs42DdBhQLabd7KR9wPzcoi2M3AdsBYQCAagh4ZCWtacivJ9Q3WUfXQNgg5RgVdzzmvWUHCd1CMDTDcwjc",
  "key30": "3MV2qk6FbwLLL4NeviEVB2AVWkkCbneqaFrbTcHFA7fUZRQdaK5PmBNCNdu3xLkKhX9EV32kXWxY54Aft95kFYmF",
  "key31": "5zGPi7YkMdTMNeXqTQBFf9F4CzqcLDncmfmRiuWiaWTFxCucRbr78uvxDgNjZg7q97cCmpjpvzq7q2F1XcUrvJ1h",
  "key32": "3eMQboqawRzNEV743LyTqRkqfyoUcNvB7jicZzyDzAaYnuJaDb6CLRn1bS3qo1636UBbTVNyjEkY1xyvPNcXuzEg"
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
