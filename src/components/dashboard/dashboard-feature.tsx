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
    "3ntQAzyqXHmsjoFaoLK4i8PrD8wvswC1PfYBsYzKR7tuhm86oYt7kNu9jgkT6MqrrJNDusLNB8N1V4CLWLoi4u8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1UW1jY7PvZwzf9tLwdoLzgK7EetWb4biosWviRdzgpRE5vgdHScwi8vGq1ktnwxiaTUU9J1ExVvFxELqqU9knB",
  "key1": "4uWwhYdUZX2aeTehsDQUoKV4Pzgce1J6PVgKuyyXytR6TxnMkrDYN96c46BQqcYNwLRZtR6V4ypiFsqxgc9HAwKx",
  "key2": "4SHU96yci5Lor6SvWNApjWtUrBfbMKcyhfLURFADHCE7DAHgR659U4bTPXPtJKsV5daLhYZ9rjVzE6xJZ9PVqgxf",
  "key3": "5zfahYye47f5Kr9FitBRmDr9aQC5U21fnHfAhHWegaziGqcRu11jcXQR4GkgpvC5W7f1ETJ9JpdcYpvQri5AdEX1",
  "key4": "5eAUTKJ8UUQTP5vrpfdz2rdevCFDt4La3sq1NFXWJdbLhS7FkVBH1WgoRcPnUrzvN3mAZcTqfknCjerYtqyES5oA",
  "key5": "4nG7HVMM1DuFfRxeUpWGanHEnkzqn43icB1vdH14qs9rYEEjQu3sPc3FC7C2QgEC3S94ombLrUZ6aQUaT9nfrKev",
  "key6": "4cAJc7dk834eWRsY97SN93oU8KVXmsafQ7UysN6XKFrVGmbQL86awBUEaz1rBV9J7vpNcaqoJM8vTt3efmXqvgLL",
  "key7": "2mR87MrgHN6cyd8ySo1XVt9RbFeunKuUTyKGYsM8x7qD2d9NheP3JvvVVpW89JF8R9dSbzX7PNhqAycwjJhGhbm1",
  "key8": "araBS59Gbvft8c1uvBtTrh6DMADoJaT8tJkjx86FAznAQaFtEi3oELKdjGpeJFvYZCtw2jUiaoqPJX7dBYyr4m4",
  "key9": "897ommoEohNSsPKx1CpYvTiy4HqJ5dhwtcY8rWztBT6CyhjC2CPdTF37TFqQjzXHTtHCEJhS3F8MqPk4715NpLY",
  "key10": "4737nNguRPd3GZqf9WqHqyA7XwZCLBfcxDCW1AXTsaR7bf9hTJRog7SHMLx1aS1LmQnMJrS8tWsUHxPxucMNqvwb",
  "key11": "3NEyKyVqJvQGPgDe2xRUqtvrAbjqK6KjtkHabebtxs6dymHdzGuYG4quRNEDkPkP7iqbe1VW4cBLYiTJjxSN5xM2",
  "key12": "35JdyzjVcrLJeQfkaL2wsKvWpdCcAfJqi35efji2fPKqoqDHFPsucNfotEaLSzxzpUVYa6jtqq7TGdDjue3c8ox3",
  "key13": "B4t474ud85gLWvUW5Mf8RUdmfnmWEgZJutYPC1fnXDZ2NXDUpMCcPB1gZJYs71SMnjoUHnU2ErKtaeNUj2JpUc7",
  "key14": "3R9ZjCNYb5MxuiGjFKaunSZhUeoJjPiyZ8ma32Rx75eSygxvtZNfz65wcHHkNPmoyokwDSjmyAf3H5oE6vDW7Lqr",
  "key15": "5LEvZfEXpwPmd9LLkfR9NKmwYJPCfXcpnnJzk7yewjwnrEVFkaYachMrAVYRTvwdCwfZv7kjMmE23kQJ3X6v72uu",
  "key16": "RCXAC2W3rvrQMMErbMDTLp7xgTTsk5ovwWbf3N4mdPeSMwp7iPjzaj6HXke8cAhRw3F9AcGnNVoLV5H4Q6AmpFD",
  "key17": "4fYkm47qi9XnPn2jsCyxqwi4gQHrMNyqhvWx2UKMyEZsWuXd9c5HVWznwhGvmfgoBiQ9KRjcpo4pG9iQxGjQMmPw",
  "key18": "2kEgmqXxsoiPx3BqJzhiXffYGwiyTKrQQNqzTiPjfQgaXE3LrD4Km1z5bZiw4N3qfkm2QAhP8wgNSTbqmqU9ZUqU",
  "key19": "5XGNwWSnFSkpvTaB8cwdZW222i8DXXaZBqyCFRhCDKGRwDbAHNCRNHFZQix3ah2WB5L8EEbaq9HkxNhQJkRjB9MT",
  "key20": "2tAw5Z6yekjR5QQKNSnbLTFUBWgK1iGdRZ8P13vAZTYwz538F6pnWooeTN14ZRLRAwRy3zN39vBD1sGc6GMYqtqM",
  "key21": "SXr9HoHZcbnSrq1axEHUPvmJaYQGC1ShSr6W6GpEkEtGeMr6fpj9RfkPefbgzdALbB4dAkuCb6id9u9JBTjYJ6L",
  "key22": "2gqcjAGepayivQuA18C3ucVEJJrGH7AC1DeCh3VSejWZQV6qs7DerX35yRNLyp2aKR53UDvS3NJCpsuQS3mkxacp",
  "key23": "dKBMC7GqBK2K2KzpVxpHo92kHXKv162nqm72PuhepTMz1iiMykpmWL5DQ4Fx5AVgPe4xZd4V4XFmMa7hsfGptqc",
  "key24": "61HAQQS5Ye5qtXxQKRyTz68aHqcdFJExvDQLxJBLHRDsxJQreyG3riF2czMzM5c4wMS7b4kyXNcAzrUWXjkHjLQh",
  "key25": "2tpVNMmejcitXWnRJ135CeesQCcthAQkJu5d7JvhV1sqC5M7gamk5mZx3YYXMp9eKXQfwkP9pig3N9B3WJP2iVyv",
  "key26": "5ga2hawf77QRQNZv4vfSLHBBenF4f9vBwxgEK8mUwNKvaFnwrzm2kMt4vSe1DYkiW2pM6cLndi1WUYkAcdm9aZj2",
  "key27": "5YEW9RL4eDoqv5ZKnWMXB1BconSCHhPzo4gujAtLaaVe8ZRKs7nnjEuh8uCTP6b5mXu4Vw6xepXB9C4h7mDE1ca9"
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
