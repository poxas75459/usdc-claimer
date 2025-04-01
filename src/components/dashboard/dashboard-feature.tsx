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
    "2s9ByvasCmdV6bezVkwNnSPD8mUMJACEsJj2Aqn7N3WfDT9AvcpX3PqFevVdxXPTGPLStMzX8rYNYMKejhhGZ1yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQ1dT23V91pgqPaEZXcvnwT2iujeF3P9FSsNY2aN661xy36yedzXsiwo37o1L1C8kurZQU44hTRjgPR9tJpH5Ay",
  "key1": "5CJ6Yk5GNNZWQ6AEN1ndH932g5e2w7oFamRH3wJU3HwEeqEdwhpg1yWVpWjBf3AEgyDyrdvAvCZTcyi3LhwKzcY9",
  "key2": "2WAeYUUQQCJy7uRU1DgmXi4jScbZFQxZs2YBYTsFWrCwNXMve4nZ34bt43JRWDYTKjJFUyc2DGvbESd3BkhxSqW6",
  "key3": "4dgJhBzzuLADns2trEzhiBPCTAmidBEf4BZXugpQi4vmMCev2qoqHqchboc96MddvZYF1ZF6RYgUQVbJbcuSEW3a",
  "key4": "5swAeFNcMzd2gDok17G5nBKTfzVgpCP8RrxwQRMfecdZubpf6EzMr4TyYsm32FCDTXHpPP5GQznqszJaZw6eqj7n",
  "key5": "2KFBZWJcd8vJh82427gQokCGuE23XL65hj6CZuzrLtsY6AG6apuZF7hWtjZizX6jXM6z2LqUtF8X8u3WtzfGYWgp",
  "key6": "93EpyxcYSjurUfXb8wVJgu81kEXrzeZxuVwZcx7conaFbLqbCk3L7UJjr6fJoEfu4aiUWf8uwpeSGP6WPZPJ2eW",
  "key7": "4md1cPnMv8PHd5MBkCtPNgUmBxtfsJsV3xANv6z96LjEag67kzcdrZCGYeFQGt8iSAQqQSeCgANpb5Pkbw2nbCQM",
  "key8": "5ZFBUzuizucnrCNoxSfZdpMqrzGoaDV2G7hrkt3u9ahL3b6brm9G2FnpMtCZyDxsmEX88S3hXK77AsqwuE44XdXQ",
  "key9": "5nLZsiw5Qqf6aGSqpPPnkzojXiXLgzsnEbFUeZ1wHAE2Fzpi19wpU7m5Yu1PoFy7UcgyF5cLiuzpYyRXuPdWLqon",
  "key10": "3M5oGzeuKW3f2C7mXJsHoZuZYkGDbEaWZAb6KVbGvwM8skGdrt39bu9whzThQ7PtDgLKxMQPfk47bzk6eueq1EEk",
  "key11": "WFPp55q9vaUWxfLrFDgxCd6zEJzAkDRerMq9HZfZHHj69gFA7FpyXnQjhsY3sxjExwzQEuZoPPstfmgW1kycTZf",
  "key12": "29YHoXyZ2thsk4Jd25xZLzTNobeD6ipUjnVM6fV7hnd6DSJa8oN4LhCw4bcDhJcbGXzahSa6hMpSkjDVrLGwKdqS",
  "key13": "5qBX6tM36UxxCrBdcxrJbVkdwNtYKL52kswTrWN8eupDrprcapUKm6o581kQGeo7SGRxg8NwByV9aCxkMUyGgrXV",
  "key14": "4XRqkZ4beMTfQh9tZVQp2eY7r1Lajp1wbqTWHiyweJbowC1nGy5ipBJdH9d5PyqgipZqsYxvRUykUYDCTREXQtC3",
  "key15": "3qjbZn2co594gb9hyhEn6PwW2oRi5vaEgVxo7tLNjqRQMU7jerKd8B7TK94WE2zLhb9tgUd3GzmMsCcC2MnLttTd",
  "key16": "4cnZrviyaMYgPAcN2UPwbMhhZ9tEnXHo8FG29bCUyF3BZLEG55LDYKHrTGcZyAYQnhU3CpXd32nnRzzXTMyVnZsP",
  "key17": "4NSELjKggi6NRq6mQPWxYTAHWz4GnhckLsEYHh3XNcXipZyox7ebcXKqDSpmmgBWRj3iw7vSfu3VTg7RQSPd4Sdq",
  "key18": "2MsbHZD3Q2BckJYx44trdcq1iSW555KB6HXZcGLP6EtixkS55yrRAYv2uKvKSnENn2PQH1KsWaS9WSHZRfiD5Uey",
  "key19": "4LjokNHZqfQARrchDC9kNuDdSukStpDdwQQc7f4pXi59hh48Zmv6ZS5WEA2gCr6kaJ1UdPYTQdc6zEUQmdtsFeDF",
  "key20": "3s5Bsmy6JamPBhh78ys89p2W2apc8mZfPcZQKRA2ukQYdAiY8JV6tq33zPkk8tEBBAqAHg1whNwpiysuhcF8q3DE",
  "key21": "4AUsDWTcyWk7Ke9tNifhzu5yySPj53EdM2aEvxuRzKg7c7AiGRcMBtnodZVMh877TsnavFiMzWf2PkcuxFLbxWsp",
  "key22": "5CZQVhLs6ncqHM9aLbEtv2obdeqzdPdex3RSMV4bDYtmpydgtvEJmdtZ1TXPUGpHYeJ42PDxRqAgPk8xpntz12eD",
  "key23": "q4rsKVgdgZ31Q4GKTZepECt1M4r6M3f2jb9LKyMhGBYnYPRHKvfBCwGJoY6UP6NoENPho6QRxPQWQn6VkxVwkRC",
  "key24": "4BBHb867nhesfRHBykAS9uHPDuSzqABwLU5riKeS9KxHiuHtrUE4x8GvNFJwBYYVaKmNL5M7BitCgUDsWzvSXW2s",
  "key25": "5j5yPdFkWP7UuVxC35LrkAvKsyiUzD8FGECYja6oPxwT4rVsHBt2uZ6mpfY59WrQeucLkB5YKMSPCTsLwBvbjS3m",
  "key26": "2Wo4foNXdTZCiXy2bdj3BSScPjvH7QZAB3ANuGqtw1anWWcaBYqGSeLvfHzZ3atRuWXoUTre3V5TwiUq4Sc21Zpo"
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
