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
    "BbZpmcRxfj81wP1kEfwRx11UEaKwzSjrnX6z1i41RhUTziNdxsxiawD6k6jKNZHjqZZ8hQy3iJSZP7ZyT6SmMiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRNRamMH7wpWXn7ed1KbW7qzU6s9QvvfRuDD6n8WwNKhxWfL56oSMVq6MhBZRUN1e3fWSPecxphRLr5eT8HDNJL",
  "key1": "3mzVuZm5oeTrxkPn3iqvhbEYvgg2D6NtXjdwgwC3spYSegvBdhNutByMfwv7FbbqVyWWGRNhThgFgeCFgHR1hdk6",
  "key2": "2qEv5cf4yx9dxGJSgLffMt3zdUf8zNmtEyvaXoykkhnWTtdb9xJ3RAuba7htGZxd36jkjMuZXAHxbnTqvfZERo8N",
  "key3": "zycPD3Dyzn6NiUhoDn8K6s3w2kyLPEyxMH82QyZsEGaC71G6qrDPkXu8FKmo4g8rStD3ZgNkifJ3cLg5q4GbfwZ",
  "key4": "5P1eTHMn65aJyTdTrbAJbAZVA7JLHihXSRDQ9bqQcvSPZVq242fYhN431JGKwdafaSfkRDXpQ5rDFuedvv4MviFm",
  "key5": "4C9Er1jnehEQrKwRT4qnt7bB5Dscs1VsetpvMV7wybqjpTV8Sfez1i818pihDWYWw3pT9sSNBtHXuvzcwwhoFKPH",
  "key6": "2KBcTh2UfKtQPQ4buQSSxDzoReWA8gXqH8EiEi2nNizT9hyX9ZXkBS9mD4MZwzzbbZszmcRVQ8on8hqvW2dGHy9E",
  "key7": "4H5oqVb74XTFDpDLqEdqNANMmLkNqxBTLSqWax8TcMwdvr9sxtP1vJuyy8mGY5ToAiustvPnyuAYrUEt9gYqWNLT",
  "key8": "VM9htxK8rUaPpByDChbp7mFNGyh5WzqxARRjUHZdynM5UJFj5UHg1dFPgMGej9frxd3CGjakokVWM6DC2CoV41E",
  "key9": "34FqYJCGUggoU87pZFjHG44x3reieBYgPvf9msBH3qvC5VAggVq9k6ABzdRj42semGxB4idichU6usA52snjHM6R",
  "key10": "3jTRoqQxxn3xpipKtkxvPPA7JUrLoEJyrLzejiAAUQjjJPgtKU8hhhsiGatGYHoeG2vB7UwhrSVHRTGUqf3Vipa4",
  "key11": "3kBYCTnCreszPjG6UFx1TED9rqKEQD1Z4uirzmQtGPvtwdcguMt7nBrJnHyt4qorwNwr44fVzV7QVtJoE5hnaGEb",
  "key12": "2r2Fx9T2JgCPrHVb51Vsox7xtmGe89Biz1SXEL5aKetLvm1RfjStQYBa2ku3ZwTwSk66wobDuUU8ojGEz4z9wf5P",
  "key13": "4fz2frpihbvNHez9JnPWouDvYFiPbtrf6khJwaY4arHpf4YGLYbxpgN3ybY5q1n19zcrTq2mxZ6P5Jj6jJkKAxj3",
  "key14": "5JQQyHQRjRd4hcCvdByMuhT8XPMXBKyLoC2iMHKiFNg8uUGfZ7gTcXTF3XEsSnfo1wAC385ECXhaD4pVo9r9CdMv",
  "key15": "5QMXL3Xzc2kaukq6MvZ3ut5ZGWxjfJJNPzkBtE6mgRCY9BporWygrzpmjMghGxPDEJUYZq7tGV2L1hNM3ETFaoYk",
  "key16": "5gk43G6QrSxwnkDdx7obWUmgWusuRNXvzv2UG5yPosKSTv8MQjVxCepqhcZZCLUQaRyYpLBYxJBZtgjscNVQA4Yz",
  "key17": "5savtaff5c74jMykNYvTM6UN9y75geTBivitpNqGNFfij96Q5ucnbDnqF9Gw2JTGQPftBJCLDsqM7ofE5t7bg2uM",
  "key18": "EDDykjTvr6CwftpaRg6hdnZgSgEZrPvmTU5nBpQZ2iMVjLo3vazgrEGmpmkYJaYivbd3mog9qcv2vyUqnNmbZBn",
  "key19": "38xncubSKZ5RoS5zDwTYxgDCkWC6Ln7mpvV6XkyNHRcESZ7iuxhS7NJB2vbdcwNfYw8H5L4t12gzjRTVdZMzfzwm",
  "key20": "9ssoZhYUuvWi4Lsc4MgpETBkxhuG5wxRU7yHEtoAjMyjTddPVKtXjYWpZNTJnGbRNZAWJ785aASm6GNK5yPmNW4",
  "key21": "mD11cpeFmAwB8V8XMKih5GvVRiUHukDQHVK1S9U4F6syLa1FkskjrtZU16oXPnFQEKjx7nTFVT2MAeYStjuEP78",
  "key22": "2WVqEAGorUDUmcVv562zrQmdcJrX3Cyt11XRnDtaStJT372YXmvhoiHKMGbCnNEqfze5ub3ekbwQNPJ5fiuapuL5",
  "key23": "4XszizjNMWu7R7MhvMEmvY7PYApVECAwD7jpnAhWp8ycaWNAJtm4aQuxGKBr4dML2cJeaaLG2sfBL1Q4EEM6AsGA",
  "key24": "3r9nuSziDqgKkvULFP7GyWXuiQ1CMRNVwzvjmNfwYWaX9nu6BkmFz6p4Vkzyke3u8g6j56kQVF2NLPfH1fwDWFPL",
  "key25": "61ZcnfqbQvgsPhtYyyq3SSzXsM83gLxS1xrheAXTB7a5WAsRN4z4KHRMMSxFHxHmZ4pggapQ5JREDscXTMj118H",
  "key26": "2LMm3yVu1apDNpHqtqnuGCdwDstz5BwBJB4bcDkC8efeKXBB1JgQnNqcR2Q8sygQRzaAojzmZVnirCNDBK3NnZS6",
  "key27": "gpW8RWex1v56YJRECqoUVM97pqafwg5u76guRc2A2L45gYsaM17wCWG4B3D1irMX128VbULSLx1QdybMjmwRtok",
  "key28": "3DXBFJJJ3x5UpQNgpPudQDLxQkbBFi2GWsoaxh4R9NkJXors3Z7HXv1ATAJb2NSuwmB9XcRgGkG2ktsHK6hr16he",
  "key29": "4oB1EjzjrK1SBDku8MBZsghzRgBWeGwSZrGm6X627pHfuXXCSLWgNwzXyg645RYYGJ9zrZeYkH686PPXvQXU2b9o"
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
