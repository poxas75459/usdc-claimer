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
    "312smJ19gNW1WvXgdb2B5MmZgQeyC9Y1gCryYyHWeYeieB2sHsUEM8ZCj97AXwZ6nqf9di9CoEMbrfmqUoLvVw2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zXckaWsM98bzj7AzoRsoXe3b9BE3o9rHZNELpc8hgTC4RFh8KLfZmzjQEgrrc4hKkYcQn4zaMx5iMRbH6rYLXKZ",
  "key1": "2njpt8PxnRS4yiEcPpNnwoysmvvhd5XPL5zHCz8Ekvt1pdHDCyi5axEnvoCtfJ7r62KnEB7yws5UNuNN1dAuRTZX",
  "key2": "453V7UVEtr5kqpDKMTkDu39ZR9ocui4EyZVCQfBxB6feghr9Y2HZfYpPyAAgvUwMQo8nxJqSvUnAzaCw5XBZyiEW",
  "key3": "2KmbQ8osQbCPFpsDCrLPTV4ZXYCNTjTvHXBPywHcbVwEiYnhs6ecS6o2KiJFLLea8xKbHGDakunQjdhr36SZAYVK",
  "key4": "3hEJuDV5qWChKFSztg86BRcxZ36RuQQFKCH9PTAAfJdhvWvCwzK5zAUGQuPGAkmBZH8jt151nCHpUW54f94cr6PU",
  "key5": "4moz7QVoypUPRUSMU8d1tJUvRSUeNVJW6Cnb2ha1yLfVwjEVaetbspZyeP1GqqhMTdiP253DvVzh9ti2EF9y6b2A",
  "key6": "5sFZ81UEjJXMpxCHzSuCZzt3VnaPrEvY5VRN2dJQ1E4j5tHFUFHZA4eVx8SGXXYJnxUjKeJ8drfj8MFtyhHWtwgZ",
  "key7": "24EVmsQcXzhNdnsjdAoFodzsQbQVUAdmhJ91BXy4Hc3dkmcDtUBAWiWCWjHU9KuV2YjmptHJcYgHZxspEtNaz62K",
  "key8": "3FsF3HgP1MoVPaqAB93jCDJfWxZJa2moDkwqeHUQYj7rWb2RMeGsoncrV4o1uXoUBKBemmuBPj7CUpExy7H3L186",
  "key9": "2ZsZMhjRt2QHBwqVE9rTMwRJpehWbcSCKY4WPgFdBfp1FRBfS5hmhh5P6NTNsj2w5pZTaNDrpE4MsYUYxwe3jQjE",
  "key10": "4v7X1vqyywJNVruFSBeyM8shaJMMyf4hFpjnv9XzViMes33gKSCYeVLDUWhgd6bpygLqGVfsb3LBG3Njd1NTxQnb",
  "key11": "iPTP6EAzT4KrCD3KWUAf1b7FJ88xgN2GXiqPiha9BEV7NjEVnAqAZR7aRJCEepgAJiqZGHK4YGVXyJtMiergyGw",
  "key12": "3rYBhkEhV8wjApEVYwhDGcuw6q7oyJvyixELw9NDgYXScZh6fNqrqEEKxQzFKyFTAUN9EbsDKNfGnxoStUPyec51",
  "key13": "52cMEedqgsjnmAvMse8AXurnbNtzXApNHKMz15CQTFmqi5jpWNrhBr2w4RTgoR227eLJwHezJ9zwDHghTJ1U3ciy",
  "key14": "5vZZ6QUypBESTDhAzN1cAZPiREhJZJqNMNHJz5MJU6GAqjCXqRCmJjhXw7caorfB5V229MuJabXCXBLSewCEhhSc",
  "key15": "61eRcRqcXB9Dj77nh5amzBJUgaVxnXXzhxSDg1hdZwobMMWwu4VzE4kKAcA7Bt5Qv3jME4MNch5NNUbNo9MkpzKz",
  "key16": "2YfwHNtY6nx8Xo4fUcos45F3zbU1NEFcfr6wsbYUQE1EmeMYgbn4bmvFa2s4T2JVsawts1xu28RwhjQQMKY7Ldj3",
  "key17": "376wAi8xabFcPB76paV1qBzZHDg5xznk3CPJhK7eufPPUmTYxhrvm7YtfwrZqF8ZstARrY1hwyw9EZmozuUXrYd3",
  "key18": "3gbxSADnXr4Mk76YQ9v3NhYYMc5y6JEbx9zRdfzKpYR1WeZDUH1CmAHhpXQFCvaPCuF7mNZaSMjxpeJnnFt87cxA",
  "key19": "rpjTF1ELiLCWCCHCNUTFq59283SxA994VH9BL3N8A6YyHAC48EFAEvfvCfi72xtg6pJ78vTrLp1bfZyHPPFyuqZ",
  "key20": "57KqyZhA5BLjsXLAvfvpsBX56QuWMX6nn3fmpG2MiDJtJjvEHbcH9aD3D28WDNBG1bsAkHMe3KyHm1GGjWPCqJr9",
  "key21": "2oG9itNkxchd39kN94UTYvKewKgzsLwhEB2sh63yNWDFNCdKafwd67qpXkEbo3gjyJg1rjqrmkSnSLdTVSLvCDFL",
  "key22": "fU2xpSPKnQ12dZbcxeP2VkuVviVCTtcxi5R8WGVtgtoZPxkPvGzNr4Zznjat2zWmXgGGx4757HBhgks6nJUbnDh",
  "key23": "3RdokdDoEaR2ovUx9tZ3k7h9LGcNumiWT6EJHwV1W15nv4Wn3ED6dpyAcwxtzYaXNJD2cJgw7uzwBdWXeLD6tHen",
  "key24": "4be26mpB3RcwTm2v6JGtMSNZeC5dvaBqALF59DVN3r7QbFGsT3FQ9rLwV7Qd2yuaabbAY1evSDbxdxEKFNT36fpR",
  "key25": "3tEtVWCZXsN9Nh8P9Hsxv5hJeHts2h7tTr46PEsZQQkTVHXAwT6JqWKqfDPhPM4azdMMLVVbeG6TXShoFD123EMK"
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
