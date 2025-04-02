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
    "5V5TkqGrjD1tur88xQVkDMsMwEFHyeUW1omeoGvsKWFq5TtzYMUEjWSAaYLwQSjENnXArVYdr2ejPN3yjMuy7qE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4M1fDGGFgzZ1xaV6xDhNUSKupCZgezMhGBpPeGnd2YAEHSCHLNnW8QiSiDhe22yFA74JNNUuLdpzMDx1SwzJ33",
  "key1": "5dHPzNcGFPYSzNTZSuPK8vupBvX8Y8R4wMNnp9mxcg7YQLUHRDJjxquAoGCtMN4K95gQWxG5MVWdyBanuzWLDZXa",
  "key2": "7oeavCmU4ofEbh6w2rAus8eM7u1TBKbs7apx35NQrwxp8GTftwjDeoJ8yj7yAyUFWThgJkqZZ1CR8u9rGejTxXx",
  "key3": "3FoCckiZtUCFXXfrMfyCLxuhdvjQKSD22Pu5isGSy1xnPcneuXn7motJMtkM4nffdQdfFCAXnGkW4fFDk89RLssx",
  "key4": "3CCYYsEru9fXYerDFjTXaaWbthPQBS8G6B2SaWgiULCec1HCXZDjc2NhMfU3pQeWgJebdtoLNcvEKcihe2Re1JiL",
  "key5": "437EWyLb7y3FhRRNULopWpkd6EqYqUDS9t39BsbAqT2kHNgXxHgmwYN1mE6mj5hirnN2k5RegfeK4hJE2SGfGuim",
  "key6": "3MM2o7zJy5B64jhN5LRkPMkNWPzVAZTwzDyTR28r4wJZoett2VxrVoM5eXvY8HNwe9S7UiPnPfhQz1vadhHnkSie",
  "key7": "2Yz8De3xednxsLmd4tysjoN7FvTQKCp284A461j65KjygZbQA73CgTTGcuJgqjmoHHSQsSxuWiaWELZq161wKjxr",
  "key8": "HvLfv13NzJtr67gx82EsccYWUEHnsrM87Gp4uwsCMd4ineMoo4hvb3JgEu2bCjea8Ktk48iDg7jNebQCyt4ZAta",
  "key9": "3T9VttSKy2PRfbofMeg3vjrGPTEwkgPKfLp2v8B9DCD3gHKJGFeoLnvjpPUaoXUb4A8kUoxRg3SmQrugtYN8u2VL",
  "key10": "3GzP9CnRS5ZXS9J9tGbNvTCRTwyz4aGTPY7TjCuMkVXbdu49od2oDew1j87ATb2jjRUcfHe6CZrLn6fWKaUjVUzJ",
  "key11": "4JpLchXGnueM9EvTuodqb5vQ35Lh93S2qoYScAmZJnqruUTMEnn8JrRSbopLLE6S3Gcd3d9xeUw2UuDDBW8bMAyk",
  "key12": "3EYbjigpXmZFMGTtv6mABF7dcquUTsXV83JxoYPZxRzpxga9nqLyM5q9KUPcKHUiCw6XbTsYg1xDP7g6ME3fyXax",
  "key13": "uQ4DfsNhjprzgamfBk7v9Y8YorJrnX85ThUgMLpGbjmFoLjyLwaabVjLT986S2fX6RX41jMBpxCiHitM2kNNhQx",
  "key14": "3rmbLh7hYeHKcjzdqanMdnrmNEVCvnQwKZJ7jJXYTmoqERMbfmC72WzEsyscicW9tkKb1AwywPksJ2aDDzpRKAMC",
  "key15": "5gwiv2v1nzMJqp23Kix5QSkXwqDvynL8k2C6xahw9ricH8pBi46jpdtqWJAboZ3AjrA6J3EXM2TV4BbREXXagfzk",
  "key16": "EW4j1nGoUPf4QNLVBoP5vhsLw2TFPLSNGb68Ujhpt995VW2XZCaw6FAtB8KjzeK4g7WBaMV9SMfJCoLJhMy3Gaw",
  "key17": "5cg3HChiyuY1BKgJ1MP52NTyKXt3CYckbwivjdjazs8V6kxKsZRToyp1KBxUjX5shve91xemdbTbb1xQ4UJfr54G",
  "key18": "JVfc6EjRVNJweLBsnFkRX8bJGEjD9izMwXtEj3Ngn3MYVyWe6m8Bi2GzUamEbjqisAtGmLLYnsXx7dKtUUmq2oJ",
  "key19": "2orG74exhjWyz3cGgETHkNKrJLRyUWD7WKUdvWAQ1u7qAqAAyEmFYx1QAtTLA29hEimyMnVTbFavcEBqp3uZTJBp",
  "key20": "5rkSN3KUiWEF25iZ8maFrY4xaLthLiKq65dDTpXpwJrqEMmrFas1F3nqLV3txDTwgdfEyXPHFZJMYNPJbALAizZH",
  "key21": "GXzgBGGpGM3bT28duTsbwth3jb4yMAgXrNvq4tDaGujVnkxpDhVM3YoS5SpSZLZtCpSK4eNg2gFwD2QW4iDfjy8",
  "key22": "pn88QLFJRoMCcQpzDJHggdFP7BCuqvCU3hBUg46GvXs7LVBwRiZrWULFCxVdBzy4PoXWK4sC1GyiuUkR9ffahsY",
  "key23": "3NkwCY9FxZ3kzWRMBUEyfPJ4BExEfKMTGLo9TKuRErC6LrqpojB42sBMPzDbiDPxCjhy9qgCnDnrPfYsW2Ti25Jq",
  "key24": "2isB9yiP4FfbKkJe3dE8dwQ9Ps6RaHTMcZ3nDTNZYXY6Qx79bkSJrCTKCJRbmqJwWfc57o3s9LRyfjcQzZw7roNX",
  "key25": "4ZU2Dd4QUgxye82byoQHrPyuwBiP33Em7WJQD1X2qDwycKDiSSZqk32gtRHYH6iRA9dd97LedpAYSgPLBLRsgj3S",
  "key26": "2KgMEoMzxU24rzSPc7NVHaYA6KjRpjL89zX4hBYeCENfXiX4dj2SGgdfBKf7bNaMKPKfxfVZ84EBGJsYZz6WuKAK",
  "key27": "28BkrvvxdVuv4y3cLRR795Baq2EK7PYPxP5kQv8ehkygySXbjeL7AQKZ3A8GgzdDrmxV6KyAYLbMcnseEpBmb35E"
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
