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
    "67FqHNq14LKHotZxGNYPNW8GKYhdk3wF2wiGn67UXwFyoL85n5uZLVVHNDAGAmWMURZvG5YoGuUM5zYQzHvVggiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7iFpmQwdZhvPAJcCH6fgtoHkj6KbQ2M3rDpbrBsamri4Hw2fqVnxS45BrGtyJHbyNUZJJyqLK8ccSZFSjKcdn5",
  "key1": "5LHEnB17jr7C8QTUKS93gBy4G86rNhA6mhMMwTjGXjTXQU1oPi4CNa2u29AZ3zZVwAAvgf8MNsnXomoXosVF4Dxb",
  "key2": "4x2k7JM7qMrHZ6DVzfhYUF5FNpGq81vxLpXWiNH1jEYmomTE4qP764uLqTkqqQ7LKrgBvTm75Byn91zowM25UmVs",
  "key3": "5Kuk3RFuf7s1GmDhWCkNVyyrqYqfHT2ccC99btRLDLAHpt3QBavENwzKKAkSqinDcaVFwojYKsYmTcJ3FRT6wZpD",
  "key4": "ajDW5gfkaAo1yChGCsTZCZ5AiWvM3HRi5ii1F3K6RcpmhQ4Xy7qvojhMwwYeTvusGjMHGiEAsZzSRSqqL22xKH6",
  "key5": "2sfnjUJAK4fUWYMegn7jXCudf5rQCbBXrrspYQ2vhYBf6amMcNBaCWtNG71nv1VMHJBnisHTWbx1AoQZk8jiHjLC",
  "key6": "av49zKpRrvTpNYWwKemrTQvj76JVfmo7jr7wXDgp8txTzU4jKm4xShFtA7LhVn7bnsSYzQRFVfoLnEi3vmc6USm",
  "key7": "4y4wqUk7ghKarYwWKAegQVT7u8Nr5GNQPrwGoztTPxpArXoEzi8K6S1bLAMkZ5aFCKRJsNJpzh7n7mBM9TqTq5vK",
  "key8": "3nz2rPS7VPAKcRu3soD5qmmci8TrX4fKVisffCHKqsexUwXCiKpbUsqbv4p3tMxnpqXMYSKcVkqFhNZ141CJcEdS",
  "key9": "2YdWyUvUFVHaQ5XF7ToYSZR4zQDsrGnxed85tqsGhLFTi35gg9C2fJUp1d3m9QyzDH6rpHzqdKPNDjTHkuSJRU4z",
  "key10": "4M5wmYiuKeHgD27sMwmA3KmojnMNwKkQAncnHsbt5f8EJtMANVKKFCpGpCkwVJ7Q7tFyDeoMivb1ZWBs6JYptqn1",
  "key11": "v8LW5WyCitqCzF6YeoKZbBp2tAcKTXio37rZbDfxjxLkFsfJsWLSvqi6kdYgzreg4E7VTF1ytpL8htDEBCtxfWo",
  "key12": "4T6oE5LzoBgrQGJSj4TTKQ97Heuat5A7hQAZY4HbBGbJYMVvsapM1BYCPKmR1bwGbqqmnXfuJtdBbgzPPgmGA277",
  "key13": "3c75mTPkkxWQdqxso4q6AhBnvcRJLMrM5CUYoHVm4pTUzNm33SfHZLCeiM6TAXxXvT4Ve7C58xgjY1v2MYyEY7NF",
  "key14": "2GZeKXrKBxBpwhEmwGeP7QzeFEJbamqRTpWkpHJLGos1RWPLppwrFKJA2cJ1xJCDGzPmbWQJwS75d7HjrFpPq12X",
  "key15": "5k1fKNtm9ToF3WJWEk7pvyhbY5uZpGmiqFyNRsFU8sREjEaqRopPSaofNz7A3U1BTNL9vXGNAQyTshUvJjzkR3w6",
  "key16": "4JUKudTMKLQXeHw6Fnega8sqDTSzg1GR1L9vnJLDAUDWSfBUeMuGKUZcU8F17L7eHdKWP1B8gSxBBWnzuXdQnDbq",
  "key17": "3MNnSH4wobeAe4232kG5ZsJMwSurJrkAWEswywLL6pH43t9NSupNzjrGvGncf6PmjCmLrUBD44VaKEZVjn5mMLU",
  "key18": "34Q1L2UHsgAAbJmuMFK9dkJdH4nK3KJuK1bBryZCyAvRaC1E5CaH2ASBM5n7jcSXugGSeb94fQyEXdrXiJWD7aQp",
  "key19": "V5HBdRxpAzP2wxYW1VQhs8eHXbXzEXvWtFNifpMVikj8dgbTRGdmpKujGHYm2YiJqKM6jehKYN3qDZUgLewwVHZ",
  "key20": "64NJgqTnzNUwMYE2YufgPwH5V9GArgjtGqajgjsZEmeLE1tgCthTbRvQqRpSmfCbNq6KvpAuKqNV59P7qaWQUdVf",
  "key21": "5zBNTVJ32TDUhcV1Fau3ZKsBiSejbVcxM7bCjW6peMjTLZLULvaZtd8HsnG6DgEb9VhT7HFj7KVDDYp8B6NtXB9H",
  "key22": "wPfgRvmeqENDWfg347JUSboyex92124U3wKSm6pDrBRZ4gjq3XrfM1j4DKEfVSfbrxPwAeY2kKHb4QaibgJesJj",
  "key23": "vAqPEWRoxhHvJqk4ttPMLJaHdTDUCEcDYuykorcSpu26mYs1YrGtgHradpVLihny6P7kES1Wzckg5ZhVvLCzNqp",
  "key24": "3t1jnfVsTHkwHpaA6itZCTu61qnWe6rcsZJwmks2oKYjnm7cJtqKenzpp84PS6y2pUJvk7Xh8Aj2obNskSagupeG",
  "key25": "3DN7bzqgXR9zimzwgSYWEBgp6fLuoiFDnxdbsReV8aS5z5Z8TWd1DuCPSRfz1Xg6rbk9zurB8sCYzr8AqDVHdW9o",
  "key26": "b9uWwU2EA6NFCBKhWdWJYLesvAHQsr8yf5hwaYcyAAywRFT8tPj7jH5hUX9DYnTzsb97MVAvRCZc1C2bx3GYvoC",
  "key27": "5ph1EQqV5s93ZW7ZT4vku4ijDDfqdzX5E1Rq96dnueasFHgewa423K1PpXQb44SXWx6ErsyXKrQJDFDK1g8moeLs",
  "key28": "25qoY9gAU7oAck841iv7yM9dqDu3wQJp37Mzya5iXsnP3JaNVF63Pak5QuDT3dMheEBPSfehGYZyjMVJd3LrcbGa",
  "key29": "2XCzPocCbN7n8nhrTVZ3FHkLhskLzEvZotRxzgfH1tJmC6ifiNpEiscVHJqmb5RdMiRz81y9g55mkZDbkm52oYdM",
  "key30": "4773uw86yHPESHFfYqdDzrpsVaQZQymbD8gvrw79B1JAhkjVv9DyhCFzKcakR2o2m26kXkFt9hjeYXgHikH3g7Xd",
  "key31": "4vgV55yN1vHu9kBFHntiUYpuZjvw8XJRZES2VbmuEupYsCe8j3N6jUTvpJuzELMtXH2uC2SgHKxSdhm6ZXhizPWo",
  "key32": "41ueqUNgZynM3ZTV5xmDjyVpJgqJY9tdgZgskDsBfarZvULhVwz28tg17AAsQF59e8EBhNL39cfyQgsbxmzp71mB"
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
