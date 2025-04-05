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
    "xZWtGPbc1M1T6ws2Fra7rbzK9rUkzQbMB7Vra9HVwKmKawSm8LobwgGEMzuciDeq3xcApSKXRLaua4d1b5ZW4Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWjPWxEWEu9fMFdnyhKxFAC3Jc8gDJ7SnLJLLS5rzZT6q9G1KCptQNDa3sZXzdsoLyTMGiXn4crhij9chHvb87r",
  "key1": "4CJkqRR4Vgy9qPfogLpF1GHCq4uPJbfmuHhu67wL3M4VzhEwzW5ZMcghaUwx5Xwv7VErJbHCBpT3RRJ6ZXNjMu4F",
  "key2": "23JuriNAcfXJx1AFZkqmj1A8RUJfTucvBW8pGkKn3iktxPhxP78etB8w8GuxDXzcfWrUwQAsqfkd5gw7PdHqpCTb",
  "key3": "rYvoZBria5ow2vLvSzMVWXFm55M5og7KK42hPjLgNs11aVJ7WcCDUzEKH3UMddvxU1Lyy3Z68dAMEsjPatBKizC",
  "key4": "VaMCPNw6eWSRTUoJo8cqAQEXAR2d9BqXngAv5Gj9kerbuvzonZEbXz3cYid4Xo3oPDD7VfsTS9KAwi8M58UmWrz",
  "key5": "PgWcg5To6SXc995ypeNMU5r15kQYhaFxgqXdi2646NPaWoFjbtvS8UwLBCY3gEn1s1vLTk77pyv19QQcPATaMoh",
  "key6": "45GNMKAvubFYgWpPLB7cys5mxq4rohz7wsH9frabANpyXBkj4jbvqtdSnzM2ZSU9Gtgy8dVaHmrsH5rYP8JLBkiH",
  "key7": "4hdhjrNMAQ8znU5QMRNfLLaYhHLQNbASckH7XzV3fpKtTuPSyJm1VtypqX7x6kF82Xt5yD8t8LfNByzdKMrHY7t",
  "key8": "5saYE4TNu5dhUkM6nxV8trMuhkC62sx7FxaFZNAKek8oBRNzaTENb9cQRJNNerGQCBC5KndNh8NNjC3QBgDSvgto",
  "key9": "3biV5xdnwwrBCJSDFndmqRDSiSACHPGfbqaNSJH7GM3gA2FjAkZSRrqEpmaqztnYLrpPGdRQJQeuxLDXiKQ7CtW8",
  "key10": "2YQLQYb3H8qUUWcCY1FF3hbcqJwqecDn8eYkuwXz1pzhkGLwq9KQakkToecuxY6f1ExF8C9r8Rb3S65eV2yUqonJ",
  "key11": "enxknpwLwYMerR3ScR6MQZPtcYAHccufGQXVLwJtE7yXqKukn49fTkB2JW1y34WJKRH6JUkX1CTMsiDJeCHdqE3",
  "key12": "71nYBshB1jgMgvRw4he145BEi7uHG4zEtpCE6WgmAjpo6F7LNuPXTZCtiKpbv4qvLaSv95w1336Hg2sxqA1e5Xg",
  "key13": "4w2kpp9txKhM7mk2cUFiuf5TLYBX6bjp9Q39hjuN1HhtDCKEr5fch5Ghp7STTdiv41S3o5sd6GUqdULa2KCUZnh3",
  "key14": "35YmwywVQWuNcFRQgVjFDyBVuaJ6UcEyMvEhHKFDedB6eXywHsppBZ8SsW1qnXFZ3fGruqW5WY7TsxLZFVNnLj19",
  "key15": "4gr7kSUv4f8W35AMoYpSai3buk6S4wzaasZLcLUi6p4ycYyb1DMEuVsfYh22U3bZuQRmggDH9N3Jc4a5PATzyAPL",
  "key16": "mpoh4iXrRhgoXdiNeKNnEBZwEwUDsJUFWgxpnxdvyVLLmiRYSYbCacpgyyY6GFvjsw173hSd1MsjupCYGgtw6yH",
  "key17": "52orsz1MFEaceL1BvQYwLm4HytBXFE31Q7xne3iSiutiNoVVz4kNYChardteyHSGbAYvGpQQUpa3benCK955NBHZ",
  "key18": "GxG2vey2DTD9HX9PHgJNtZUvttYF8wzyZupar7z5RJMrQv3uCVQSdo2zdX18ubSVPCDFYmCkFfoXjxXZqmPpJ2N",
  "key19": "4teWfpUMMzTxZ8C9RV9ngymjkQB2SgrymXbZqwTfjevqAoaqYX6AfQ8DhhsqqAYFWn8HrrMvjA7jFPzjmXSpam6r",
  "key20": "29qfnHgcaMpEByPRbswpkXTUbJjdD29kkkrfgqgB7hcgtKgAL6K9yWNEBaZBywNo6xFv777xUjsQK14cDNeNQHk8",
  "key21": "miuRLxaygm6uqD9PHE7AMhgGJhHmZH4JzEWjGvzE9AChqn92mCyMMBNrt4veCTtAEgU1MTRzeyHpV5aNHuBukiQ",
  "key22": "3fYUhcbr6wFuPAzVpYSTf1XTAGigUXWBLXwgQVZRC2o6pMuGoU1eczAHqfN3ghpyZE5GmnRrX4ww1V61uWaoPkTM",
  "key23": "Y1MbERyKjA1Vss4f7ZCkwTbp3fvHk2ZrnLNNjQhKhW4EnD2Lpny6sqvbiZUEYFAGMoaVttGYbgVgJFteVn5hWJy",
  "key24": "2D5297iuRCfNPx45Ps67vgp7f5MoSKJuMQkY542Yz9n2No7jeqbrSD8GqdfhJuYmU722XyGTuYocwNjNqcDHdnoR",
  "key25": "2KbZ9MbUThTywv5oPFebQzZQuRpkWkeUirD7mmdP8VDaVruLv2sMG4dRMVtVTjB4dCuMCUzCpYmF4ciwgwWSfegn"
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
