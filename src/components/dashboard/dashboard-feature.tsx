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
    "4SXau4cqxJgTtWBB92TeibcGQQZAhUpcyXCnyx1NtCGQcYfspCvP8Kj6Uj4kTx8UW6gsefpYPhmvhg8UiCiZSDTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJ7iD8ny1A6MgaMsYCaiVykjmx1UiTwpygD6SW6VMjgCbLQ24sbDSLe9EydszjyQLPQr8TdJyBpwgePCGbrq5LC",
  "key1": "GzmAjZMLCUec2mjb8bKa6v9FqhSz53g3bDztukd8kNyYM2ZAzLmyL4PhXsjagK94pBjBguz3UqepFzgR1ZWxDyQ",
  "key2": "4su1uTosefvUfkAiCvoWECFJ61PBQskJ4BcCMwrG8M5KyH8Lwx9WAQRe4JBbbA98GLHASRMEYaAZ2Prygm6X53wP",
  "key3": "kNoZTYitssXc9ai5xi2tCWoT1Myh31GAmTkFdt9Rp3zNtXA8qost5s9nyF7pDXdrX3NFmJP8mCDzSo5NZPy1N41",
  "key4": "9kuZy8wMAH6ynDLS7C43gZ4oBoMGMonWvVZCExbQsxZBKPH78KMuarVsbgLKUr4H3zof82FMQ572riLLek8R61K",
  "key5": "36jGhTx8XzSmhF6kT3EQxTTEcTr9usdHSjgJzTiiMuRPiUx33uzGVHa84noZiQGKo9f7jSgacc3HnwGFLwZpz1gQ",
  "key6": "2zsY9m8Z1ZFFLAK5ofRwRQtcPBfHV4Ec9pMkJTYKm4CB8XMcSXRp5x5nUQLghqbUuMVppU8RiaVsd3fiETeELVh4",
  "key7": "2bKzZcfqBH45NN11omt93Jmi8dYuaXAByHQ11WhFNbmHPrkc76ajD8jbXBYbWLGh89UpbDK9TqF1DkqM42YgANQv",
  "key8": "5hLJqz9keygfx7JAUtjXzGsKYxkqMJ5QFWkc4bEBMWuUbniJkmHjbso5yUAhr8MkuGqBmR2u7HozPucNhFQVnUSq",
  "key9": "5tVwTcxhzTQJtXD4EpT8MWigNaK1DReribetr1vL33Duszeqjuj38jp1a6bp5PrjUqetmJrbBDkg7ZyDhGRfxpbq",
  "key10": "5GDGwjbvfHH1oyypakDK8z5aykAfkierLNUrsMbzMHkTHmFaMk7ZzU7ySE9zy7CKnvWnfmfgp4YntGDqEVaAneQp",
  "key11": "5Rxeqgkf2ih1CV37Snt9SjBKAr8YZngjkH1KrqV6AiQrbqTqaLBzRDetmRrGZ6kZB8mWgPcYBdhJ6JRs3U62UHUG",
  "key12": "4uGvKu3s36XhjFV5h1wBBqemM6q9hDma1dCeMZqNKd29YacPFycvDAUiyou39mhXyr4Zwk53BBxBE4jBwD8cdyvy",
  "key13": "4FmKcwHdv8wMBEgciZBBUUTwsNmb7EnT9HmafJ8izuyJwZwkJveid7nav1PjL6AjvwWiM3bB4oLLXc5dMU8bdNRc",
  "key14": "2NG2qZSQTKbTnY7stD2rgrkePdrPnzZreL8K3Ja2ChV5wK87Qee68gBCd7PifjfoVzaz1QnAk3DUTJoa166UNGnk",
  "key15": "5vjPivMsUv2XXuSzFu12caDJREMCW7G1qHBUhVacdrHkVE8vigWvusPnEN8Wu3sPozhjGkwcg13V3FLQ8n3vcKuo",
  "key16": "4ArNPbbxcgmwiGUcL9TUn2qJqKt8K7CC49YvWJVDq9Y49xEDHzr3LY8gNnb4H3ZBr3YCsMPsRZPRZzcj9CBGsH2R",
  "key17": "54BPTR6s2UiVjHx4Bys1jk1he6GG3t2zsdAY6NcrmU5sfBYYcVuzf4tGwyQJHpddzjwZtAfXgoFjtGXLWQspkJG5",
  "key18": "3tnY8iroWbd1shTJi6bvXFx2AJjFceqUSXeqq9sTGsWEvAyCzDCEPZ7XcfGHUGSYKskqCSrVvnaYfh8NL4s3c4TV",
  "key19": "64ohzT34yU8cj56No35R56Aj4zjWdyZ97QrCRMQshDTJZdFYF2PNQuCTUZSYYEffRpKFrQ2SnmgH7WDzNCdWTXsn",
  "key20": "4UG46EVVdd88HTPx1eSjDrbmAabWbzkXDd2P4iXYWVBadYDLXjWGKdkA7tSpray53nEdfbuRmSSZFp1QED3EFCiJ",
  "key21": "529BNiTC2L7QbXnS9j9qhGWUUxmVHGBGEkFu579ysij54DUeTUcLrLvbW2Qxvg6wZiyPKkz6nYd6ACUsPmrFngmF",
  "key22": "5gxWaTFgpZpY91L74xWCZz3BarTFGAgG8JJ3sJyCJeNWeFsiab4jkxp82qu8eBFxCG6SDCc2TekjccQbyM2LZwP2",
  "key23": "8oGBxV8phUzqFjQXcRLooCL1E97tydiGppZbq9GCxCdWoM6cWeCt6NYm7djWhTUffWYTPSG57fCnEPWNkHA2m2y",
  "key24": "545DqzH32aCsJ3fE2oznxN6c5V1HvFd28cLJRtdM1UGQAqNsZEHARtoRFs36xDc3qyrm6awSGgecFWmYa2hqztUX"
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
