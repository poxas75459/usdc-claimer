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
    "5tEfsePCy1UmXzea6oQZnfsyyUFeqMLPFvbgfBuhVhviVfnPeWaqY8Do8r6WNPKLLCr4zyYkoon2FfZh87HePFqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2goBvX31tN6YFWQLAXjZ6LZbQvgDctHqTJHLvYpw7BRsjJHkiy3B7nCzY8dhztErYhwW5Ed54NPtTk9ZybAmPPwn",
  "key1": "23A9VWobBxtAjmsG2pDs9XQv3fi4kNveZDXqRWkc3vGTijoo3BsAe3UhCQsxp3JkBxwWpq2P1uESF5oHaSxYxaQa",
  "key2": "3vRDFntJC2kfvUQayd7FttDf1SLt4Z9XgErRiqsnbfgAB7BV41MhP9TDnHXx9cV28fY9r4zv4USFYiWwTZVs25Pe",
  "key3": "5G8hhKgqRMimPHngTgfTzwGVJPkvCx8eKaxsnpy9URvmtrfE6SvQXji7WhEsDpv6h2zJ2gP4WF1TsdBHpdxNM8ge",
  "key4": "2qunm1UPAuBGACmaEiovjGqsir95nwKhw5zr7nvrPGWX5qg7EcpE8uqnPdfz43exsomxTJHgR8yQGZb9EDUmuCPL",
  "key5": "4fsyHFzbbco8BZd1bYNx5gKH9KePUkLUqzkB3rkcV7y6TyNtJ1HNCvYHm8F2ssS5aeorTGRC4ZF1Rn5s38F9FzCU",
  "key6": "4m2asUhkYFJ9Ee7HNUR4jscrc4qQunTLSiyGH5VozsQjWt3W7Rfz3hupHaKP175J7p9C1poHCixEJV1Aru8BENCY",
  "key7": "Awo5MVvKbo3rQunNNmUtM7fK9t5dGPwS6LDyTkULrvKJ7uAjdALdSFvq2r6JoZf6yQhdP3chvXKRNLjeqhRgT3g",
  "key8": "3wvjYrKDfb7Cir53ixXFrT5nfmv5T9bapQeVyqpySiAgFgKU5Cex8LdRq4xW7QspAVpZ4GbCNq9hFWxh3MGXunZV",
  "key9": "7GNUk3qwhwGAEofECjcspwiTzuGypB2ieoQRBsGUmqPM89oznCoP81iGmqn9qC4fSbL3p8m3XbQEF5Em2Fptqbb",
  "key10": "3q1b9AsbR61tfteX9u6VfoipZEb5KEGamUGhrmDps4wgz3CmsK1n4j4ZQ6aR1CRytwGZJW8UxpfqsUysAhJCpiAX",
  "key11": "4Tdpnf9SLKMPZ55J7xDETcmcHbGEd6bCW24Jq1KXYWkPcK5BAbhUirLGkQzaJqrbsfa2cuM2KLyHxHgfhaeNZNwb",
  "key12": "2horfNKzE6oqZzD4QQfEqysDh23P4WfV4VrhgLmJZkgVSZStckq3x9Tuv818TeFZaHf6hT6r1VxV9uCkPa4MvwJT",
  "key13": "VPrA1HygEi296vHRg1eAb8g5RYDVDBCSyW7LTXnbaUqKNc2MM8X4pc4X5Rmaqhg6xdiCMr7qAA2NhiDDx4rgrWN",
  "key14": "oErFEwwCY6eAxrCHUf8vUF6qo84cEqk2VoUSB11FcHTmSar4vqDqmCp4sw6xrRRFH19vhKb8he2LQGXvmRyFRNw",
  "key15": "2zJGWQUYzq12142xS4uFXEYhAtwWXhfYVq9P4J5JExKFUdZaKBQZPzQGR58M8WAzCeskwh7iWUbpSwwBLiVfqhp5",
  "key16": "5ayqGMwrzfQ8ax9hTZ67hjeD8zPRJx3htfkX3U6JPEwAWKiAFPNgS13SXes28dfvbvw1pBk79APUAbfxavoyUzMq",
  "key17": "2fk3SRmMMQXtnjv3z4BEtqoWEJh9GYs63sh3qhWkwKA5YrDbkRmCLhNVNnCUrBzeiejZqQ3hkqEg1dr6tDVo66SX",
  "key18": "2LX7sek1QsJj5jQWjFm5FvZQMXAUvd7RPt6vxXVJbttQJndXRWZPCoCcLBE6WFgVVv1B3zKSw2D2HFJuHMCuAn1x",
  "key19": "k5REWugwv9moydVMG7uHhZTERe3Ut5wKZ8Lr8F7swQu4dzdQ3qHLdN5YaUXVU7XJciiD9kDhpLG95QfuLighu18",
  "key20": "21fb59yp82qDwsgSNuLJX1WUD8faeGtuJmifgWoXyP75h4sGuL5FPUQaNwVVEqAwtTwBwf3KrwyEpY3nJgcM5hmv",
  "key21": "4yFT2XfDHs3b8d3TUM1Jh1VaAAA4xkXKcpeQ1q144PucxcJLSRfsgsPZq2715ULiQkXiEJqp4AwETksx5rkZgi9c",
  "key22": "571fD8f2AzZGjRLZYSNNCPE3ADeCnvgexi6KoKnj1X9rXbfapxcJbGQvc5TRXKXbgmEfE58DNtvyKQNgKmf9GvUx",
  "key23": "3UyvfeGYi14fH5jfK3AfzdGymmzjbJueczZMC9fCmwT2UkPh9ZUfrdJ6vi8FpHTmTGNNZsZ1HoRkZNj2SUSyRqqr",
  "key24": "5zGFJWqhQm9zenYX4Gf49BTL4mcQt9WtcEsCXzf2qfsMvuUv4njMy4VsfkrXAC45KPWRNbaQekiD5aEPVahAdZn7",
  "key25": "2UCZBJVrKgcYE1bdS2QiafZfhb54HrWAbo5yc52tCkEgj269EUL2ZKzS2KBZFinnHgBeveXN8UFC7vKYPSfymz4o",
  "key26": "5kp3gLX6aRQur4cEF5s99FKLrMmn9AFyWcag41RwHKxB1YZGXPEptfCdUkEKMaBgYpqXAb7WhE9scct2yrokUT1m",
  "key27": "264FkWpSd621TKLtzP6RWJes32tGNqH1BQpkP9nVbfzx5Cf87C6npoeTBr3wvjC1C8Uf9QpdaRVynb9uPdPF5Lh9",
  "key28": "2YZD5SGZwi78CzKXRmgoPRmGiEa7fKX85oRnkeP64Y4t1Croq2HU42umBCpwhjmf2h8Uq1GwnBjwd7dxL9HgaPQL",
  "key29": "3mvqnymDzmY8daqvq2HYqJ6ASdFXothQvQaGLdV465Eu8jR9ugvidbfKAcNuEKTiSLso4vFdcbxZMpjyVGfvSatC",
  "key30": "JchgMu2snQCmmtErh72hv5G7QeGbmSaYDqYbECjF8J9PCdM85iiYw77Kh6KSqL8JgzqUe6ucYV3fiiqcwciuhyo"
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
