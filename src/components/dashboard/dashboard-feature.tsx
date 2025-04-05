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
    "4jbJ3sE3zZiyGqvi2527JFjNeHHLMq5kcMT3jKbfH1usbpWzT2M9wvEMySSshhm6CJNQ42ZH1gD81p8G65rPFJ1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ehpfUkzFt4UUuwTnqdq9ERtJMpcSc9aU748HuyHmnRacPb3dgbUdTwL9JPegAD4Xm7Bg9S1HiWNBrp1kWYzz6Kz",
  "key1": "5G3W4sEhDD1WaMYMABewnQpRH2rUztkwbRfysdFN3ZTegJJrSXyWj6pnUyVQqkatewg8cLSpz59WmM9R6KQGLTm3",
  "key2": "5VhNGv1UJSr5GTFSveJcWE4Zf6cbWorkuYd3nUpVTKSoA6FQE5hE5S7VD4WyZviVJqVt88YBnfB8L8aL7zhP5rMw",
  "key3": "2ND27KEX2c6SnAdRQFsDLoWMhnJFLS1cfCaKvGLh4voknmLWLz4qs5rhLPLvWC6rcZ16pycH4ckogWcWwV5GzBDY",
  "key4": "3TZQXYHeAxjU2hMcjpWTXH9tEHzNXFpAWVeSAGpFyk5T47YjAB7XCk8npCXz4Z1stz5cQKsQk8B7TTAn1D9LpbmP",
  "key5": "3NLMPzmJWkbnm4rDqG1yz9S3NcGPjBW13p8DomaJaaHHKXHHYjRe2rQGmKNLwkdBvBZcZK612oxYrWth2cgJdpKB",
  "key6": "39A5GwFXUjh4WZYG9zobkNvoD3F3DxCeiRwSEmWKgttdydansX5mRKUGJPoFMWLbCuk4g74H7tqm5gRUHdRtztmA",
  "key7": "5rmR3cqbmLfFR1PZ5GRtmR839zw2997AVVx7U7KTjfZgj4qXtEENi5haFMErYWL3nJDBnFhvFv8S293A9UiPVSpS",
  "key8": "ksM5UmWSZTinBSVYG8wwJucvrCU1UzrPThnyArQPHq66mm69E3Vm58dcnPeazojjwUTTNqwT8KdiWHmFBje52ka",
  "key9": "2WNytoqwv3LKgiiCQy8miVuCvE1AzRMZTt1EdYg3fSsTPjyXMddzHnXPEKuTzm8Ye9wjV6Jj8yGAHhBZEGUwfWhc",
  "key10": "43xYTxf3zHyNa2tjCj3fvPX4F43MrSLwLkpmXKxpZZzUZvEVHb1P9B5dmxhAagdaPNAZiPDdddpRQq3mmn8Zcfzh",
  "key11": "3G2jKghQxAMDRHpTjZCtKjPyMTDuxRpVZCWu7FhiMiwA9VTDn2ndYvaRniaYDPUvnjAXbkFh4iDcgVqKd2m9MMyD",
  "key12": "4mHiFcouhcm9ye2ePDhPvKLUPaDJjCHL9wbAwUuw7A2WDqUkYf6uvmvruEwgmfBBKipKPUMCgzVt7Ysaa9rneqFt",
  "key13": "pgJkJ6RESM21sKVjHx279YWv3QDUXFhzbYPnoArPkWAGeMsTZd3jf1GiT3j76hhmBVcdNDKqmUWnqZNzcpGkLEc",
  "key14": "5hj2AFfqdVcwGHWSur1ncMhvtiz8E99zad4jx1FQWpR21RUyBz63YRna73BGteRhJDUQ5hrAtoM3aG2KpHRA3zDc",
  "key15": "2ui67LKQhA6iF3oYuBLiwNK16RjZPh7sbwjTzqrY8rhNCPuKmCcZMjZyaLNa5Abb3PqkXvPcmu3b1wYuDiRKUPhx",
  "key16": "vx9yh35btJWNyfwmEFayMUfscA86dJwM8pDi8Ai87YPC6j6zELzvfMyw7ze5ZbT8wz9M5ZzpcncAyyDEhe61aGs",
  "key17": "4aUQaizgZHaVvW8F6VAf1wazpCW9i6i1soNbtQtVxksg8WFF8ugEcRLJuPY4UmMQ43KytNodejLY82F3P48dMEJq",
  "key18": "62Sjbi63wL6nySQdSqQZvMbomSDseY8eSLYX3xseu7ajRCrLjzjU5xdMYuTusgZX8hMUDVaVmQfpWGYJLYVokuwe",
  "key19": "2YioadDpD8FhAAdy1hY1DKhcSq2kVTtRk9X1VuCoXrZMvWK4h4qnPkRWuNVh9wXUCs9GfB9vtYaD6Erd6Juh7172",
  "key20": "3iPE1NzbRtVXC5LdMC35bY4MzrXpxk6nLWAqXLvfpGkuaTh1srtuarPjJjsDvazAFVxz4fGJh1DCmNpdQVc5xpGG",
  "key21": "3viGvJw2nR5jLegUjgbmZWAwU5pgfmL1Zimqkp6Jv4FsBZtYtt91E7JJF35zmjCkQLHNeki7oG1Pe2db4nzgL8Lk",
  "key22": "4HQyM8aP3mWisniAwxMrx1Qv2qYE1Ye348sGDMVxfeioYB6jUV7fSh7V8yoquFoLrLYt2EJqqpKQsxcVu49WjKsv",
  "key23": "4r7t6qXStiXxk1KK3uEJ68KbLw6Na239vJNRZe3Ziv1SiajK6oXYoVEuPPV8vgeTx4GYM8g1ThsnSR7YQgxkSBLW",
  "key24": "3RkCcPDHux1rpunyqSUFhPpfyKkbks77GzHJoHz1NZLkoo7BAJABQcnztiU6AhoQGp6qNyMK1bRtvVQPFy1HtZH",
  "key25": "4PdDygNPv2hm3m3ngPscaQXUrvJnZ9tuzBfHrZJGuuuxuT4QASYebUz8mAp8iVAodVJn2YXdP3DoNHkbAbfM831m",
  "key26": "bFRyHePwKX2byoFF6w9ogjTbtLPxLD77B33iXYAe1B6aYa7r7ofQdqerrHbhpUBuvVb82rUxN2v1rpNWDxGCju7",
  "key27": "5x3PfDqMAjxjrissbUbruegoLvS8MXLBET9zSTtoeeji6Umr6TUDweWjawyBspoPG5z8pMfzGreExMgXbBxjj4Tw",
  "key28": "J4BBsLxhi6qVAxRPpBxBk3LLMHUSJetZsZX7kVryVAnj3mv5rwCwzi1aU7WDuPUgYfBTAqemd7m1AdYb2h3PgvU",
  "key29": "3qkWwjLdp6xMLZrZcvesUGvodaJ7ntupYJXzPSrXrCbD9KZ4eyyp7wFwffPkZLeVUoZGJr9CzsGxq2isRAiSy63G",
  "key30": "5NzH2FvAe4ctwW7uGWwgjgYMgDw1qdQqHce5gGUFC3qTMbZ5SVNzPwssjDbYovzJdcXMnbb6AbXLmZ1iK9rJ5R5N",
  "key31": "2ppvmeVmJ1kF6Ars4DaXpK2rJvYCXhiPjVEtDy1W6WiiwjJCyVNgD2yytwLvDAafPhCSFcKXGsjcq4JZEmRWDVZe",
  "key32": "2S9wtYmA3WZdxFAseLLctWMDXogEssokYTk8SuRk2yWCSq5jSzCdEDGwmb9Qu1xmAKLKw9nW69rqB5WqQ3Xg5RFp",
  "key33": "42cPZymGtQb2t4HC3tDCwTDspmFqeDfAgu4GbDpSGkAAebmfbihjK3LVH5GFKWMuk5APxrXUNyAo8DxuYwadNWYK",
  "key34": "LGsjnF9qmKuuPyYGsbXMFBFmUo7SMCPcnNHDsDGE4MJdZ77U75zCCBgXV7FBLiXbtbAazom19ESny1sCSH6qkd7"
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
