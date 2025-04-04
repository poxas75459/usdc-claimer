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
    "3XmrNkKoE1Sxk3Z9vgQMEfQV44vPraqwqoxovUUcswN3mgWsfmumkgvcXQV6bF2RCTMvYupKiJuCbEHA2rc38AEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjdPS9Co29x7DJFZdE4UvVVDjm3Wjn6BB2t1FAyHy7AvJEzAcJ9fPaR7wQKyTSAfHq8X9DdauHFduutX11Q9cig",
  "key1": "mj6zsy3etqCDFueenfmLYibDUYR3i96dDNVtkfwzmeo7192DmJZFUmFgARy6HqxsrQcGvLMajqEyskCJMxCzHJ2",
  "key2": "5j2cZNAvsbof5PD1hnG58gUFo9bUkqiJhRDUar3HCPmXFvmc1UAwZZazkRXZr3ikbwDLXPbGaq1RweznUoMLH6K6",
  "key3": "3Z2eQyoaiA3xwKBNXzpvJrtF9fYxQDDaMHsPeJx1THE8QrAD2XNcaFqYEmFBZpXUPUckA8ELFo85kupzeE9xu5AZ",
  "key4": "3uieupYP5gjdFfw5PQCX6ByBBjDTTZxk1LjGBBmW2qBdtw9Rimvgv4EuddYYBWNVM7RvaH5NQ8GM9xZMZfv3ByZT",
  "key5": "zrpwsH6ZR4tE9NxrS28RpGCKRLvQrypBKsPNe5PeivDizmL1J6SmaCstisP6QJymRP8iDQhp55a1BvAij8Gr8zL",
  "key6": "21xPpy1adcvpo4SJJdGJx4cWq22RG9z5ZgZEabRcZ6AZfj3HHE2pAEPDF8N6hGUXN5zpFVtF7v3AEtVDaNLMDhiN",
  "key7": "2qsdSYFFw85zRV7zM1ZHyBVF19WYaTZ5cFSZuJ1re8mLwD7oF4kH3z9nyjFttw94Ec347czNvGuod3TvsvrM3QNY",
  "key8": "NATzEzM2td3J1KNVrsHLqt7sL7mx2D5T9VrVJsoyySVV96yKKnHsPNSgvFauSayjMr4ams3PvixgG5Jry5wepUg",
  "key9": "66HpVjHM4j8sLCBjyaRBbruhfuo53Y8kL4fTn8ye7hweaZWMMqdDDns8mz7JxPUFLD561FDQVJTyTz2zrxsrJeL9",
  "key10": "3aFZGBm8NUkEY6aCt1My1aYE6NFom7YwuSUpwPcJ9Y3cGwSESomP9bnqfAqubz3Uj6hNNohzbPzvpMP2wrzLZRAm",
  "key11": "ZA6cFiM69hSUeYegRe8mbtrfQc8VYAQejhCvC1QMmydGS7VC8SLkwX6hfsNvzAptFEAPQxd4JfpfCx2HRqS7se8",
  "key12": "4ggjSa83HSYfJcy7FTyctkrmmyndsb1BbkoygMqi3MPHFiJvfPEivnPhVyzZwCHBoknGt4sshJac2ybqxL4ost7f",
  "key13": "4zEDJWFuRHvqLG1CHMzcnyYJBXMDi7M5fsrVphjWErR5pA2ACh3sLnh9MkuLS8PhpfygubWLtkJravfypDv2YQm9",
  "key14": "3Msm7FkPcPpUCqb3x4VjsLFrAyaHtVt9BrVqCFTwV4bt6xKgtMcgcZbNNqT1ncNsLXyhZ4DHfY7yhbjgdbtthRAN",
  "key15": "3ZDVgDBmUNNoNURwcqQpQ3M6HZ8VkoRgJcNtHQTYCwufwRWYEjEQ3SsWFiif7zTpXaUqQojtfVvG2g9TLjNG4wEP",
  "key16": "5Qh2wLepLRjXY8RHcYyfMCTWnPr6ZERg1xGqhZEvTqkGHjhr5M6T4GaHtxizdZHrM1fUQ1wNXqmkk9ATnApkeCgo",
  "key17": "2VzPmqrg3pYwpR79bmedzT2GzLWVgeGtCZPoy7pmW2dBuQpcfncW874hFoqkQT8wfyQAAuV45hwvw35srfHnpyMA",
  "key18": "28gg3fsHAJ8A2xYkDTQiisQzyyBeB2wdPNuWLMirNwdoY6AbGPqxajBRkjA1bPt3E8gq2n7bwJjGbgZ6mk7Bf9i7",
  "key19": "3kg6oNeAg1n6Tg51PxynYAdiH6p5rfUBUeNst5SZjom6ZxZSavd5S6xE2TkKs3AdiEE8oTEmngQbTK5hJLAWk6iL",
  "key20": "2gSYw5PtDsdZ4QRbofVASLr56CEDCqt2G128KBUQxPdAnnXsDTs5HYm4UZfiwf5TMrSKJUgCMbVeCU2huGQRMnF2",
  "key21": "2W925ikXK4WDg3wfVmafZ9YwMKkYrHEWUE6WdE4Zsh4UX4qemDNkoexJ5wMSfvMrC77GHa9SXzuQhKh3XdGoCaRD",
  "key22": "2CikKpZqDBYNKJqAWT9UPjM2wjVYz4Wr1RWw1m5HtYJRoKXosw8wbNk5PHbGU5uMLJNzUM4zYq2fJn59ZutJs3cu",
  "key23": "5m9123D9TxGr8Rd68kePi9v84sqaq9zwfQKprJkTPMbo25fikRRXTCJSUrBjcEJkSNWDAVT3ZSbUmqEMUnFooLAt",
  "key24": "4xERGVoMuDMCoDhzZMEdnw4GboxAfXa48gfF3pLtxzoDKfSPtM8A43FyQNRDMNuCHgPpBtkB2tB5Nzko8xo87s3i",
  "key25": "5uECSbuekQDDmMouSjHWMpRjRTmHZ9RHNN4BoMgkf2h2FFxQ4ExkDUtw9hwJt9Zng6GAwJRcvWUWS9pAcXwgAT4K",
  "key26": "3JvbMVJWX6peEtaojh3QmyofGTsdVtPzRJAYBeeT4JZK8X2t8uTFGnXCgFY5fv9g8Bt1vFri9nUBNN5p5fD6Xvjo",
  "key27": "yw6RhiRPpVnBwAz7QnAMNfSm2HYhKy6pQwDSXjLkJJUVw1bvrCQsermLpvbbyqoYqxxdUdSo2UQz63ZzqKktNdM",
  "key28": "YSKZTqeb3GNcxDWhkVaRxVgt1AAaieJ7QDLWBUTC7jt2z3kTPa5YAgKEgdC27jmWP3RHTXAMy2gC4rKhN2dFGoL",
  "key29": "pLDZy8H21rJ4qjTFexoYoz3mAJcV4QwnSD4UJGnLUhCTPGLRviPBVi9PPpGyQ4Lwx72Fc5WceSDF8v3Ue7A9oe5",
  "key30": "4HY3T8ptJRx4TwnCF454fU3V6956ozWTKZVHg6acVeHnAiQZFAWqMP8pacJMXtJMLyPYyaEK8envNU9wABQcUaHy",
  "key31": "62BSpU73ZpfCabhh3st3Z8yCWvU7ZDL7QjnqWL6qQ7uWLQ5iDe86JCSTjEjm5xMjqG7GUf4aUoVw5eRCNVYiQ4Qv"
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
