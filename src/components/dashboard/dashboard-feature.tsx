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
    "53SBoHFLauHugCufKXA1rD6c8rRrcf9YccYpGHzqysM12m2K3MRnkoPyMcWJ6w8LWwP9tXszE8f1VJsfKDF7k3wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dqFdCqAZA6MSPzZCDor2C2Tk63Xrdve7j7B4QYygiqFtx88nSiEh2jGLnQJnYodhVKjQSWdFh9kD7gmAsJjQh4e",
  "key1": "55vUVzTjXqrAACxYcd5z3PWivtQZ7HpfUGnxnWYQVuoWfSqTNLRzzNyhQ7EMfjLVQLVZNA2aFRnqJszYS7yptB8q",
  "key2": "xKtTFaqTWiJuuVGBpkz9pCGw4fa5RtJsqF3e6FKHoThxYKGUnXXqW9yUmyLbrPEU7Ptca8V2YsfrZ9NGRbgdQkK",
  "key3": "5AQhq1pCi25Q95qvL3yU5Kbne28qQJq66ZZWPhrqewb46UQWe9AD6eKnu4JgAjm7DutiSsTYLQyhsDTMycMvrrUj",
  "key4": "5nKTKnnVxvWq3VwypS1MG9xUTdNSWy4r9vFTMen2sVYqG2j32Zt9hLx9JTDLUaouQhDFRywa8Kj6fLAwZpZ5HAmx",
  "key5": "3rYnGT32an1k2YC73d2DgjqXAo5BZC9fmt4HoGfja9SuuYr64bdjyv7ZM3P2zCLaBbNHjnKzisy6MRpQqJGYDDRc",
  "key6": "6uRfnQmmfkxJz87R2HYmPe2AvL6uKu37cuHVTQiXyj19fNbmJKc6Ev7bh5uoiuz3zmAg1v8jt9nHHyvMYwEBTMv",
  "key7": "3Gn7HhjzGbokc1CoUnagrBvKJMgEd4XccKhhCdNUPnLDWyFhNAgR2knKbbP1QaxqPrZUHJjEPzJFtnFoG1EAxCBK",
  "key8": "5krK5DxvRgpJqH9tmJM17SVBLAAXUNXFbhbd9jmNdGVJxDqyff4NQr7NrbbpW9B95W36yNQCG7Nbhbb5rcLfW4hq",
  "key9": "kDfYSzLxVoT7GfNgNvgkd71v6Cu4NnrGjWTyH9cioKp6DV3Jai77xZyiA4pENnqEZ2wtVyTAafMxXLVx7kyD3aM",
  "key10": "4QP6Q7Aq74x6s6MBEjqFtwfZJqzsSiKohzsTeNhAwHYGpCQXP8i8QBVNNSQSRxAD4CfwY3Z841MfuXTZKDxuorUH",
  "key11": "25rBqqKRM3KFcwCSC8mtUWFmcSVk1SwjEH3uzPtvvV9y6v9Vuq2EdDw4p86mW3iv1XY1FM7iYiRm9uuUNeKopPjC",
  "key12": "5oFxPaVXC1hYWveDvRT3sFXcbcutniPxYFEDXXvJY5qrnaDsyDbH5vdcHTCxMMaY9tfdTzDqb6acPUnTVXHqkgpL",
  "key13": "4RxPTfrTJds9NUo2UYMQNcjwPBQWkYFoQvHn1qqrKki8mGk6B9DMJ5WRsLABK4aEPV7J4w7rdMqgtGYEW29fmHJR",
  "key14": "3xAnzWqSgnkxy8X6m1SXtxZpbe2aAybk9FXEREubH3T3WmWsXmtAnaeCHuaz4czGWJeEZ8GtJMnrsP9NbEiSjKsU",
  "key15": "36WLVk9EKPnuHzowct5zYtaboEbpTcHT3zHfjp5xscZczafEjYNRkoryz85hhoKzb7Cd3pqxesRbiosWEnfti1xe",
  "key16": "5YTgbJvwEJAKMt1tWHbfXhthHNYFuHN7ZpSk6N9JmrjYaJ52j7ffdyFQ7Au234S4TYVJvikmNR1tW9tZzpH8s7U2",
  "key17": "2vE7prvMPCwUY8diD8ZPv5jhHsCSq6pcUojibLW6wNN1B5ZiESGBp3ZdfDC3gGYpTg8nNU1G3k8RgrCiG6DQ1jbB",
  "key18": "2M8ELcjqYqDsoSKQrbiy4xQHtqzVG3Y9wyrrxfjfPwBm3JMSzBirW7pLAJk4FbwZ5f9t9zsvLqJwEbK5c2hJVxWJ",
  "key19": "4Cj6kHGBWQBkWsxrtkn5VaABWVJjDEcKyUJwWsEw6goP6vPwDxYu3cTuAQC2pUbMkseAChKEoYThJDvGQGf9zEra",
  "key20": "qaCo4yTPZmDbAmg3buQnCKdD4HzZaU9MhjJ4AP3UCheuexNp1fc46J9ehhZ4SifePebVboGw9zYVw8jc1DRD84c",
  "key21": "4skMKnCA4qGoFRU3PZW7EVDeuo7DCoaq9xkpNQNaazP1fTwdqbbzhX2xayJJq6P7kozRMJbRDuzGKfkjUhrztZRt",
  "key22": "3BwxR9wZSgsxvLcYcT967LZ5E2xrCmH2f6cm2d4coJVix2WxRWETmJQCffjPdE3YirAyFPH4CETY8nMdChtrUduU",
  "key23": "3pWedHArph2ZQvn4eoHuAvfggFTZhJZKMXPRHpJUdNZ1GU6xfCBmTC4EzDqDDnWiC2PBcRYhW4eA5g5K1UpXRKX3",
  "key24": "3vZoPV7mUhCoFA5gfmCdEuaYpSzLiHg1S8Asg4Aw79BzkXFYaS9rcjx4CcWeHwvvzw6DFjq7qwGgiwfgwVtq1GoD",
  "key25": "4nvArD2yo93gbEEZN9f9oSuAzawTbAFmtAjYXGiAWvY4QbLEMs8RFNxaTruoZimFxW37r6FYhQirwWqJupeAwtrA",
  "key26": "5sh5G1CrbTEryrbzzoFT8wJdvprCGDcy81US7dqWjnF2Hgr8N1ZAgBGEvUV3Y4YeHLhrjGK1yHofPE4qrjxhfjwd",
  "key27": "9nMky8YMUUFiPVUyZ3U1qDeHbP42JgU86vjER7AL6qYhACcyH8mnMryzTRQLY6x8BX7BquwZ8ALduD17Ja5ShuE",
  "key28": "nz4taXrvUNkb5T2mhDdVYtVpvTaTdhRcKueBFn9cMSAK3yu2qhjrLeNos8ye3PVHxZ6bb77hpJTUcZvScNAhEE3"
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
