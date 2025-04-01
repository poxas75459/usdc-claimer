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
    "4nPgF4mK3sC3udseoiof6SPXn8P2N69im5vYxGeXafDdPUm1XaH3qs7UJZ64bsmSRkuiVQb3QoKkjfAdEBhSkmJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4GN7GVxHCrfX5L8TjoxrKayn88uPAe6RQq5H9ZZQ2r7Ht5PPd1Vs627swee7TLyJDLac7MsK6uGLAafQtwGvV3",
  "key1": "rToah4RbFT9eqrjRHiSKpH3yyS1YTWjbQbLEdRsLvX9PQ2PBrUMBX9XTTS3xzzUmZZpaqaF5wtZCBU1ArwdqHxF",
  "key2": "4Dmsk2PG15Cr4vUJMCJ8x5PXcFsCenKPx41bV8zyuMyt6A3vguFZpHQ2DadWx1jPw8UAdqYMbqNf1Dwo4WSPk8wR",
  "key3": "4a4kiaEA6eEwfJtiyWrvGjKGH9ds9dKskyNdKcLZuEuXfiEjdPYhC9sejZYPud53YALee3BZ64MiQPKQepNEmizT",
  "key4": "2MBjJYY7i6rn1XzrgcYyH8mxbwpsGFS7DQD8ovuYZaEkgtAkjt6AcH3zHJFGDRCL5PCcp3pgGQQDghDxWSyLrpdc",
  "key5": "65QYvhj9HiDXPuKdAG3NbhuSzF6DeQs5JLxxiX6sZgAjvmucDz6gJH9YyhkQPweZNWnFr4dyrCiCvnKLsadUpGh",
  "key6": "5Lp1Xkz11YxpPmjqSnLzePCZ2KS1fbtw2H73xHSWHdTUtJUsJ3denSXJsGSoPpuhvhDcmerjRKTKFu9ZzBtr776W",
  "key7": "2NyFzzie7mYNzJxma7DntNtrdVUxiL1wRbkDZKrAExi9UV788ADihVUrSnpmGmQMKc5oPWKVoXmfKB6qVHXj7XMC",
  "key8": "gWRpTbfGmxjezPF1gk1wi2YvPX1CNy2dEzKEADhxy8xeyLskt2w5239UvEAj3Pa7xoyCx5Rpt9JxLam2z7yAUXK",
  "key9": "2qrGfMHUpKM1f8UQpi9i5qtnifPM7p6G5n8wYUbyPGW1NgRr6QSkND1NqeU3V7NLk7Mf1yZM3r8X826WGise6y5x",
  "key10": "5CYPcVwgcyaDeQNSNfArHq6f1K5w3LqnsgYACPjB2RuQVQDtzme6UNCdScLGD8R19nT3uijzSDemkU5x64964jap",
  "key11": "2tiZEGCJnvJ1C7oymqL4CgVeoDAvJU5ujEebnHrTdv4dTTSg1c3nK5jLXnXD5ULvRTohpYqcN5V4tAnzHnetnT2A",
  "key12": "24Ppoq3ALCyhhiPcJ8kwqNwvEnAA1Bis2LdwuqyZsB6TA9D6np5sFY8ppK9Xomf6uKu1U3fxXU2aRdUU7zP2uSfJ",
  "key13": "5cMQHquhT35K2bSM3zHRMhFaVB5P5S4PCBjTzZoNFNpUReE88RvqKUunSvCtF99CrZ1jRFR1suBTckRDzuTD7uvb",
  "key14": "5uN7E8Kx4hAXXPF5rZaQFrNGkDb1HnTZ6ERdXPgG2uKBp3f6nk3L7b9sjC2biHLe4s6y2VtPwM1GhefRASViMAVC",
  "key15": "HWhPbTS4dbueAUsy73SRC4owdjNzsRM2t5rducF9R4ZqDjDRn1N5kkPuLh6T9u68JbX4raFx6scrWu3WMXiFHg5",
  "key16": "56HEa9K6fxpHgPfAH5pKdFHMUEinREpXYbc6NYaH4YV19LuTenbcAcWhzxknbaPyZkboCr8m6nTH78YQLBcPs6Sw",
  "key17": "2A8JQwPVPNFc9cL7kCjfMGBtinR6REGUBW4UQogtGVc8cqso9fYzdpjJHjr2UBW2BwwWByCPQYhBphP2ggWMvGUn",
  "key18": "63bQQtmp3DJNTtV8r1JLP31UKmemkqLCeq63sN1XDfZtJn8g1LSTcX9M8hR5ePXKBjQrjUKoyrhmkK2herEyU4Yx",
  "key19": "396zr1ph5cTdBtcsYpfWhud83TsjitG5ZCtSUuLn2qiLhGWqycTbUN4qwen9dnjzZHuGwNytxPoq75VdYjz9RMnw",
  "key20": "4CkMjsXkRMcnZwWC5woUdEUUedeni97C3nxEfTaJ8wqBZhHoGrivbQ65vXzQFV8wN3GR89f66r2ksBm7Go3zyXbV",
  "key21": "EfXTVE4eLuLGRcfY7fErduR9XZB79V9YicEfXgahvUCuG4vfiS46H7g1xaQpCxa3SkGFknH9dAFUfCWQC85X9GN",
  "key22": "3uLxpw5SnHjBwXEkHBQjCtKrqVzeEaZCsygAnd93LaGaq3Btm1TPGsxYHT84V2pPnQMrJLpZa4q81G5ffjdKEWVZ",
  "key23": "3qnGuFx4tYssfjsL5NdEKdwHKMKt6JSfBtNG43f2dMYqPB7ruSBC4cnHrn3XwDzi8BjafTiuhiMepL2t9Moj7smE",
  "key24": "4qhzXfcLyhAQdA124D97jGeSBcfctcNBHEQQtQCotCK9uRKGFk8NvEj4PDqNbSDN2f45AHKUkF5zW7QgjZYDxjXx",
  "key25": "3tR3v3uLZZg2ZKqjZwMmB82Ed4stjLiBTWKChMnv8uq1KVi8ScC5mNCJLpPKeEe5kZ9i7p6aYWhFHBtnCubDgUqj",
  "key26": "3DRZmqgWMcED3hFZ2r2bo7j9AfUnwbRQELKs4zcgxPPVuRaVyHqyHiaWMdsrmg6rxb5PQThthLaiKkQ74o2wF2j6",
  "key27": "2W54JNTUAm9XocSsUtZ3g7Lw4E1zj8AWrxyqrXKa3xscwD4XZcfQXMezWGLqSiYg5vRUhTK6nqv5VHPpeJzfhYA3"
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
