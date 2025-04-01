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
    "Nmh6DgdQ93VGF33J2j2i5wmh1R8wLyhUDEvba3ntDHdKdhPqFvmGYhCcbTQA7eiUqviibHJXdeFhMdNjomxbmRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pny6yLbX97vVnNzGf3xYnZHqB1fuxPx7D19bnDe9LqeXsVaq2S8mfm4HqZuUGjfDsrGjgJj8zpM4M7iEDgRs6Q8",
  "key1": "57d16ZPsviXW8EaTqXCEy6GTis5W6Luo5enh6jzQYVmCWJir3MFvLNApoC522oeGUiCFBKqU7fRjJSKMx4U5A3Za",
  "key2": "5rAwhFDPvB9kti4v8U9JAkmHYVLvAFrDwU7YKieS3s8hc2wuVuR5VGqF9ZRfmuSQo5XAZDonGiiuUPjjU9qLqJ3r",
  "key3": "5JNTxmseowj5892iCfy8yajYjDR2H18Wj1EPgHP46S1JV8hBrRgJhsmeffkDovu7P1m6ToWCkuj64s9xgxf2VUqQ",
  "key4": "5BCsXjwgm1xzD6ZQsc7XnwBMT1U4DoU66CzSzDZTtCVETQnEwrKGxovvzwribeRDEVL4iRRktwZH8roPaYnv7uHT",
  "key5": "5KLbVUxbNyu6G8x1QSNFCAEeEC6QBTChF8bdf33ktmZVEfB4REQiFehwjeoHRtDC3PzmaPo12PYPCKcVF8NGB1Qm",
  "key6": "5FZNANWsrz2bgdYvNT2B8wLRw8fXWGMU4A6wyDfGx9niNMbDm7ueeaGEU1yBcnDPyG5e2bNtH3W7UGwz4nNQhvLE",
  "key7": "3UdooQ2N9DuQqmWuFvdCeyfbdGHXXf98TyLtjtg5VoMuA3U388EsifxequRHvXzjBdAf8yQdgHA7yiyhdr4T48WY",
  "key8": "2LSngWs6e1j2gqnmFbt6GTzZkKCn2k6GFZe8FVaiHSMWHaQNbBPPRMNtCgXps1UVV6FUcgKnsfQnZdpQ27JdS3CL",
  "key9": "WHUg8EzzR8Wy7s8npXfFi2fkgWQcuUYxkXygrS1kF3UL8HamM6BsFiYGxQd6jcZkbNX3tMf5oYx7HYFCHDHMQaR",
  "key10": "2XY1hH7knca6pD4kjQv78em4KjrPd92Suz9ZGYvvhDHZZbjq87PppcAkuoow8h4kjNARUsoEzUFQKVWCcVzRC2qh",
  "key11": "51UayqZ4h9zP5EBpg97tRjQEdbPiA6uqRbb3VSfwdtJqzcmdCUTD4S4juwuui6Sq3YXupoMWcsWD6dgvZ1BMqTu4",
  "key12": "2WE6m8L2svVuN69exXm3EkNo9GxfRj1eKCG91Ber1yTxj8tzmo2P94fbsTYEMCkkxF8KxiMhpwMBwyLnHimFzNaX",
  "key13": "4aAgtz8NFF81k44u74jUskpxtYJJRnYdmUQysnWZmZZARkuPDLf3nhUWovLtG13nefm3hqFBmiLZmEQZJj595XLe",
  "key14": "2FGFA8aknwGa5e7didqXd1P7FeEvDYezLMhc3twFwBFctiehJRpi7DEEU63RMMDbSyx1nqM2XxJA8QFFw76TPE2M",
  "key15": "4cWAfotDqkKs2qp1Rd1kP6J5DhxDbWc8K88mCKWYEqJt7ienNqN4AWdA8XkCwSMefwbGR22aUyFfsWX8gjQzW51J",
  "key16": "AUKNVCF8nc8pPaPh18xXBcb1zJqAyNqjTnxZ95iEVg5jSfk3jpoUWkDrM4chtwxU5vdwPJ7m6ZRn2V3EmPJs8jz",
  "key17": "2KjLshqfBa4iw4D8er4cYNSf7aRqSs43iwgnpETj7bSpdYKhgmSeaoHM9De31yJtM4rebXs6TH5tAgihz8YyKuGQ",
  "key18": "bMVUBQywcjWixLzbsiHeHwxVGEQNm9QFycQWYeeLUDDD849JC4484jCMaYndQNXTeuuEy5CoVGEEzaCcs3rys14",
  "key19": "3MTPUPSJqYPncMMqrMEV34sPMkffZEMJhQg5TWrCv2TQARVJSE6Nin8bvzYFS6XA66X4RtMdwiVomfvQc9SswK4",
  "key20": "3q6jb8ZgbtpQPyYHi5f4ThgsMDUGfVXqrv55toWZNqxXJHhcmT5S2vAA8HjkKUGR4bYD7328ZuenTnw9F3YMAq3N",
  "key21": "qvyBViaLSVHRTvkZ9C1rc8h6rZhr3dnhsFeMHXay4WtTstnT3BWM9YYtXkBVeWr4LhZcWGVpb54esxPyvQPQy4z",
  "key22": "5nuChsPyYBpRDRcGoAr7XgdjcQvrBujKNrFBhn95V2NvNfyKBRELsqyAZ2kWcKsWqyrAKKXKGUbccpj5mz5AoYpt",
  "key23": "LrqLzhNG17kX5ev4toNXNu6j5jaDGsF5vdN287gUusMtYEdz2k8uHKnqQY962Lt8kqkFMqjT62MpQkjntGrBQYs",
  "key24": "pNUvTdRmjxZmN7SgrMYkQjXaptGHS87DhcG6SNWYQszQngF2DEivxM32W4tw5LX1KtaREkNzASWWuAGXJr4eezE",
  "key25": "2Xr17KnNycKjqAS6LtvruudxVpjNiumfmWp1nZ1uq3JMVkTzqkw9DMVFC8vsHwFYGm26MnLo6qE55gcF2p58QPuz",
  "key26": "5uNGD724WhzUGKRcXXa2wr72be3HmJvKQ5AQ6qU91Pj4FjHenbq8QBxCTWuoxWJYke869HLwTHMPGrDasYH7HuQi"
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
