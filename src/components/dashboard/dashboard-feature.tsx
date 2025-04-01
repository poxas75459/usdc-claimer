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
    "4Q7hn8g1XXX2xJmH1nTnhseCFUCLMSb3vQDXtZH1KVW1nCkc3PagAeP4S1BeH8h3X4Y7QPvstp43ooM9NgiSqvni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJJXV9UdzJZzZByr1krjHLyN1fokZrxjokaCAjumQuoe7ZkWjmvqQuJB2UQ4a2sS7f7yCXUN2Zw1pZCwN5t9FPj",
  "key1": "4eKuNrqq7Vc3HEGwSUrBqDGujT1WfyD2Aa3WKW8qSPq286jb9L9mBWCDjSHvoYFjULvSKNnAVSvFTxiobBruZwJj",
  "key2": "3z9BZmZ8Dce4BRDQCbCLbGBnWdw9PZFhELfYvpgFWnXd61mrQSJp8MYiZSg9gxHtZQ4xhC7cPZnsN3w5xaeQQxSL",
  "key3": "5cdQ83zE6i1ZrBo1Rzr6p75Gfg1vRu5578xiakdua2uAUZfAGuTXMMwrJvhvL3QsDRbqwRhvNNZmfZDNjgDp8WqG",
  "key4": "sXkYEUg6wnMtvFk48USPktmegKgsrstx8em81KZWi9VFe8y5CB1ytzJKFq1Z8nCidajnQMV3D7R32Y7AgxH9Fif",
  "key5": "4sC93iA8Hv1r3sca22SDeYqPAd5PMU6ZL9ufabVWJoFbeZbpr1w1xQ9RhqCyFw4vsFHpVcAeuyeXmepTqmFRUUUj",
  "key6": "4Y7oMCZgPWkNvc9pQycjdYGqKK9FJ7uDFL9pvbp6VUFfBbDBQADximpDoomctQLZGB1e6ECnrdC28saPsrJx3s5f",
  "key7": "25q1hGsyNqtSmeAbPQ8spSGUJYGGksMZuGfkBKZWTXDG3V1EwXrH14GUJmg2ykzWzjHMsKAEP4V5i4eDD6vmD5UR",
  "key8": "52ng6Y5QTNUA2TibUvGcakbNf8RJ6VfPojnePgXZJV6Ziw2FE6WChhknKZVBqQVZjPW2uRw44w93s87AhoXJj8pt",
  "key9": "4utzEGNgcrq5JfS3SA3G9qWohULWwEFZaWvQLCw4psSdy7eVzzXCoRFYkyJCWefm5qp5LwwZgSHYudFzP81uU6py",
  "key10": "EHrffTcnGxKUc6XnVoUH4g5HGnFo4LHtwGWWJUe5P8fyLH9Y4yPn7PKBctWjaHZar1hbARA7L68Y13D7RgJ1P5i",
  "key11": "RbHxZSahu6Ym5h2Y9DjkjAV1nyPErbMR1uoPbbwm9hwMwem7DFfZz6xfGp9B6qpcCbwNwJzdhF1XJkTWMSLbGQQ",
  "key12": "4ybXSpyweiZ2njagtDbKg24aQFvyTcdrtQdpWSgH2WPVMXfCTbWG71FMxe9af6atCkHPNoZJuVLzZBTuW8uXyALM",
  "key13": "o9fG9VPRX86LDfxBuLRAYDTvptXTj7f5GSR494mv88fk2DdJ7pQPCjdopoJX3hsBdS8oFMG81X3A4W5pZkFeZhW",
  "key14": "55NcNq93uFfhJg5yrLu8DPVi8zw2ThhRcosohYZAMyL2nKZbm3WETiWukEfk8o1BQLTpx32XwkXt3pmGBTRWodZk",
  "key15": "64cnUWyHgyqfG5FB6Hc24ww7yxztb8SUqESkbnj24dzWWa9K2opQKbodQnAgKTot6zbnjcUYodK5s6Xbyj3P6Pkh",
  "key16": "CRsfFxfQMPVQjZZCYB8AtZRkCoP3mnzRquU7ZU2SrKfey4BqUXxMmzKjxUQGuVeSgH9VZASFw8UR4Qq1PtoM8Yn",
  "key17": "4bSwVU8YnHg8aYGuTXL4jDb2jo22gBuEwpGWEykDYNdJb3iDCki28fPy1eJghYdUuuvdpK3dqSzruQqbau3o3Y9x",
  "key18": "3YZcDFieaqhypUsZoJHdA7Pdp89TvtTScDgv1VQG1DmiNtgSxtauMFR74JiMcdMJZ8TgEzdHRpyRV9DNAkC5NJjt",
  "key19": "2GwJwNCPsioynBtfu6gs9f1CghcoyqtMoXPDMw6sduR4DBizaZ16YxD2vPxTiMoH6wRjFc2AttLtNg6kMtN8J6Hh",
  "key20": "4fKU7sEXZ486FaGRZfgQmF19SPjKQKHjMifhvpSkGHthCZZ7spodE4PUQM9wf6MjqkYAcvMAFFdL3xcvssFfD3cG",
  "key21": "2eeuXvyziAcf2FHCCYmDZrHdTehXMV12N9bvQEzQAUv94XVBn8hyf6Qvw3YKakUVGVWfM1jmkKhv1mNKUbUNLLVG",
  "key22": "5hCaXgekJhvLK5MKXpyr9XDLcDRJhLkghkmrz8Nnrnrs5N4YKUFdrpRMXth8BXanDSxoMtQu2URndbAsW1LHxGCN",
  "key23": "3xhe7uMVA4JisJS3PWbsPoRjGcCT2oeswuwS2DWoY8DPZMQueiqUvUB46gaNuBHtdtzm3QQN1M6BFZSfH9EXTaay",
  "key24": "4t7zPejwr5Lhbuc26YSNQ2yRecbBB8aFNwJmNTHQBpMrxMbptncUXx8pPnXvPZYyNFrNWSeH5WZxvBiAWGyu9NWZ",
  "key25": "637Tnx7QhBPnuSCvZ8EqCjBn9qb6zWYKNBb7pjsnD2aoj7LzVM79k3n8J1sWtkZueJZsA6vADk4s8Lac1pnWzRhp",
  "key26": "RrzRxrNQt9GRh7M7i9vfg8PjXnTJfx3szfbZ2vfd9uUZr8i9E4pv3sdnKp551pvinqKJ8fiNHQwprzj58PB7S84",
  "key27": "WXDjdRAtoJ9VFN7v5eM2MBcCFf2KZCu7ce1HdEnTbEFPPTzYmwRgL2BT3zaoGkXvgzR9uoWJC5gCryGupKvS1Uf",
  "key28": "51C8KPA3CTybteqfagKQRgz8Fso56Naj14vAwd8zhStW6j8ETPszspa4Fi5nBPp3vdS8moe1HhLM84c1dMHSFT7f",
  "key29": "4ebrHeuaXcBmXiPYqFEbbPqLgSNnF541izpUn7xKrYsqM2kUgEszNrSN5qrHiMqsJsaaBSkCXdVVpzoPEYhPwtB8",
  "key30": "2Lyma5MYipnDJYkNvo8kjZFn3TK2dWi9pjhXHUCTtsg7615SzBCjiybhRiuetH9xJvdMEFvsucWXQU5GjH7PkFW6",
  "key31": "4cfr4CxPUoPqG1SvLzenLQsyQqizwzFTxD8UnwRqErg9QW5d4N3TarwQjb9tcCwJFMEXYFTcN32gDsxEin2W62WS",
  "key32": "Z1pehetqkr9FCWCGw9n6PvdZmJkCb4Y31qyeWnEQSpS99cn1S4U2vS9sDecMT6DMzqZxoBPWgW8MqN8ybbBnU2a",
  "key33": "5Z5qaujP8oLBJYptcKMiiu9BUQ1b6ch6J7Qhy9xTzkRShHAt6bU4FrqfUui4nG93qRPDcArkyhxj5RpWjDAHQBtF",
  "key34": "4ooLKaME7219fcLSgEZumReayfyDSLCKMe6kjKMkbprTHx7KyRUBEsbDXRpHDmuraLNUdCcV9VGhAEEaYNJ6g6o7",
  "key35": "5fTb7KV4wG4FZxX2vEf1WDYAVPDq9zA6ozspijFxDkF2WPgjSQEbCvAvw9pfd38Aau69tGPEJ9tsQENTv61QFbaL",
  "key36": "WUa6d45BMeEYrb9ybLJMigXjANyidVBB9Dp4FaWZVhp8ZReBqhi4C9tAcJvty9kynuowuNVu64FiZGpagteLbdm",
  "key37": "2RpkLpAvUHtbdu5MbJsqqgssfe4DESMgFEpNMgsDPejtpVuVHchft96ouJc4AYfPd9cgtZhvkujypT3reoRgv4Ay",
  "key38": "4aRnkA7L6JmMS49p9BbL5yzN83YMqToLRxTTHgvrNmvTRYtYruXZMRBoAZVmShL2NFgAxvrzSjdcpcNaLaDeieKV",
  "key39": "5S2xTMjgiWx5hsRuRfKQZ66LRRTtkJTEz7KRuVH3pYBqLHPVMwULq5snxYYwRm9CTpWHMK8g4wW4FsN5ESvn43Kx",
  "key40": "2pTg8RtbnjgSM2L2TgXxSqK1xWAjGMVDxm4LJ8TBvNfNWJv4mppj4rUpEbkofmjVWijxpyCNjDdkmL2ec8c4ARQm",
  "key41": "3gZMcQefKQ5Us7m6XeseMydeixE7F3BNeq4tMjvDNtHLX4M7awgox59s6raCmztKbmX7sPnjXDLqhUzgiErLUVN7",
  "key42": "235aFvgYRVgUKkzYTRVsg4b4jx4fdjKoMBvmfbxi5kX9HGYgfc793tVrVBmzYVSfLvWaW8z6wQ8is9JRXhGZB3o8",
  "key43": "2BvZ9K1j7HmgJ8LUz2LJofC3w5p5YxRTPFA5YRYqzFsAz7Ft1bWBQzCCq8axPP5W2CDRS6nYHTUAfuLFgXrTsWXF",
  "key44": "5vV7imDgm5rj3CZBUGuv4Zar5kGtkCWP7aMwnHNZQe2vBFrKeBBbQ5ySg2NXwXLVsTx2jsyJKeeSSQDnN9y4Ly6S",
  "key45": "5xAoR8ZQ1NevGuKoKxKCMq59NKU4eCSt7ZdU5ziiFvnVVUeVDbDeN5CcY5m6L1DF5oH5sxXvNzTotViknybTD6X",
  "key46": "4Dzgwg8rx7bjWA4YikgmYJVJfTRuqT4D8qm2K2vxXbV1WUSfdbQVRokjgUscr9D49mU9gCGysdrhaXNxZBbCi6VC"
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
