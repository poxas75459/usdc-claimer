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
    "2jH3iyKmqKsMBxVCe92X1FFRvXkaBCt3gJov22wx2Zw8SEMvQzKhhttJxnkJm8fWcEPKBLzYxqcUVrSvvK72gerX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fz7VfnvVPhxoMPWVSY9g5Q2kGxe7yXLREPmombTAYaybfPrejymRj377eXTWs7t4ZMduBMtU9u9LtUPsvoMoYpa",
  "key1": "5R9pTsyBmhBb4TtbHVpN4Jd4HCMS6quJuD3zFbshGyKJs33w2XyUD2GKyEfGiZkNuQb9LYpfzuNjWnEJECtXfeqV",
  "key2": "3BPecG6bwFeJFZhhd4QR7t2HJA3vp3Wdjmdqi5W4E88zmRpbVib3UDgHV1QgPRm9t6U9pu73hYUvGWMkiDU5L2K7",
  "key3": "2UYSLjddc1m91sCqaRmQf74KrcipPJNgXed4FuQUNTWqU3VtpyGLTNstUa2JXnozTjJSYUoQtmQznjP8unKjCG2B",
  "key4": "2zCiyqEHwaJ7ymirKMft9JA5Cm7dLGP9988aRYcvYAGd77qiweVc6zFGfntm462kD3UXWhJt84c7NBCuD18QJBzm",
  "key5": "4kEb8xNZhppMAfngQVKqHLHS4tvftPQAqQLfKicK84u1pktfUdp75tU8WSjRpN9hiLqBUwgCgr9by7x9EB7D7ykz",
  "key6": "53DVLA7dhsndat56MkZZYXLFSTVyp8Qbo1W7PLn3tcGzZg6p9STu2XpXiKH5aEsfQ8rKQYVGLV2qdVBWcTjQcBUk",
  "key7": "4hZBWaM6RmehtrYSyneZUbmYba3ShxZ8quSFrcm6zLcjsYq5k39fR3Nk4NU6JXmqDxdR8ZHfG4WKPprdk8jdPnwS",
  "key8": "2QhiXJhzX9Nuzqt4dpgzoDN363xtuTAtjy2niYodWHrdcVFcipzWjpMdA3QGsm4ciGyoVon3kokDEQxXsMG4p3wq",
  "key9": "3v8gKMQQMcxnoj3HywBgtHWwpLZh2tPU2RyqgRTM7NzsZj2mg24YDB6ds5AUw6pu6oGFB4wgc6NkkAL5HpeaaWNa",
  "key10": "2sS3wR9rpTTE6M9yBTRY4AWQBmPZk8KH5fRw8StPzqhwnXm81TPGkQ25taVXD1AdzrX9ntTTxZVNjZviBKsMhpQY",
  "key11": "5dJaNCX954anZg6Riq9inVcxcGxHfMa6TbMmWFpneaXZb9n7kAxSaES6fnvtUxVwEoaUqBNaESnj53TENHy1dWGK",
  "key12": "49R9jop7q6g4RympKTCq9suRqdzym4aA2Yp5La8Mde9nX2V138NCu1bw7akk6BrhYcsw7a9FyuicxrDfM4qgHKrX",
  "key13": "yJyP9GfYCkRNH5jRZQgStHKuKBP75Xn83B4zu4Jp2AtxKZVLebXSNJ1QAH6RBockgNf6sQHhY9SEL9qiQoWdeKQ",
  "key14": "3pvC8HTdZwcJxCFftrGveXBCtuT1UZNTGyWjSvGU3HHGnCPeJ4aFk2NU6kvGkUWY72FSoTDXzFNV4FUP3pqqsXU6",
  "key15": "2pnYffQnJGerphuz8NqXw6fehHicwmY9URaujaNaMv63LFA7ydG5KB1Cw12qj4ECTrasQKjdhpcVhJsrW7qqSEuA",
  "key16": "5ugwzLw473WbJ4jVjZYeDcNwGdrKZXdfURK68DDNtEPqBDGHGV6Pr1kTdYAmF1hfGZd2Y4vzkborL3szgpBPvMeP",
  "key17": "NAiuEryoHwthq93o38t9m6JUUmMGw162tTSuJw1jdN6DSDrXSNP2eBa14F8AcdQNNZi226o15zscoQeFRZc8oDp",
  "key18": "tphFuj3dY7eZGmwzEzXrtpT2rpBzBq8EGSfGbgDK4qo9R4SS4rZ4aiw84rvCiL1Z9jQZUyJx7hv7pr2oT5XmLwk",
  "key19": "3v17EuPiL7fhC6TFJ58wFjJL2EFiBMBy9HL7ZsDvr7JEmXFHFDu58FZnJqYYYbtSK6MjW4q6Pcy8fehAVgkAgDGn",
  "key20": "42YjgCZUygLXoo6DLEKXMDNnwhj8Wm7v2kNNdq3JwcGEecbn2cWMHZw39BfQpcCKaG1qWh6EAsz3rUV9AoWneb1B",
  "key21": "694aqJvK7QoAR2rWySLoUtpFjxbmpFmNHdgUgufke4qP8QNssuHZFkT232tyc5t7FteL6iv4vMhSykXkGkTHN1m",
  "key22": "5VFq5Aqfuw7Ev9uFsf35rEr5d7CYt72ff9AZEtPE1zeUhAWySk5vRJH9GHuK75acVyEHgap9sTxANXA1Nkn1E2Hc",
  "key23": "3fZ2WpTPkk9iGeXVJ4rmnQHrG9eZiEuxGeeNdfwSH9FwQkD97CAXbJSnWwgcHtTVq1tyYZUtD2dt59To7apxuKTM",
  "key24": "5JXNYBqwcUdqotTPcVi3k2xey5Gm2TSjTLjkwE85KJBySWJFgLqxZTybXNxjGsKvakkTWjMs4UdVbmeyWM5bEbQo",
  "key25": "2Acs1Z47UnQy12Qw4cLuSTRwKm7ibN1i4dzyvPQfZEA7NZ9rBwnSKGyGwcWyPFSJP8jExcwseWiRnE8zCVnjpvMm",
  "key26": "2SebRL1qnP4Ln6bbAjXES4B7oJQt9bc4xsZB3vcGy1Mis92QN8tui66b2VzTESosKgvDSKrqLrwfqdgoQbqsPEqz",
  "key27": "5yqUgd6D2J3pZ3T62xH3BPCtdkgoyLMwSjY6pMbyL7Wxa3LzaKmw7A8xsk2ZpBacXjSgFqAkGk3CL1oxvCWuYtue",
  "key28": "4rz8jsV3q7HgLtYKwJsJCeuX6Zkdp9fGdR6Nh9VMTpJUCLgNrQaPzQdriUzfAZrEV6vTrSkXc59GDCybGSRfBe5F",
  "key29": "3Vz4jwhkMGUex8wYSJyNeR7ykVy4n3Hqyb9zLDz7D5hsbfBw3nCJh48WEFimoZzMBVsdZ3kUdftzxxNCGRUBYsct"
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
