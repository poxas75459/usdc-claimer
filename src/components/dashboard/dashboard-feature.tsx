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
    "2At5dc6bDJjBQiwLneSWMTagY8zEyvXpoEca15evNo8y4aWnQ3MMhr5nE8YdSmqLhE9wrY5eA2CvUYk8spWoAQg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7nyQBnAZQiEbckT7k7MVtYx7aF8dBHmCfvWXFvuutPyrxD8p8NZDsjNVEQz8MdwbJVHhNqZMMYbJC3YWBpn7BM",
  "key1": "2vcAq3QSAvHyMgaZhyyDiP17sskgmMngYxhndV54R28QHmEdVefpFqRAmwCSgqiL5xWUmK2MhiqQnXtYq3FrnEp",
  "key2": "5Ha2yCm6f76dHfd8U51Q58PZaPQeSBVDpkZNn4wBsXaDz96ztunxMZg6wB1TtnfsNvpbMPDEAY6HDEFtfwPw9tC1",
  "key3": "5DBQ9DCkac3iv4EcBRW5pwSToFoeQHCoDkQy89x7hEvFk7KFMNSsy7jyzuSEMYtvfTFSKoe9vNg1HGbvvHWxJK7c",
  "key4": "4wXzFoHJuoqffND1SVWrmwH28dWBexYvYhJKCKjampLTcVWupxjBpz1P5jnfZ3ZdpjtifaLmQZ4tHvBWHzLNBSDx",
  "key5": "4hXq1e1GYSvdHi3x1fDMsrKCdhMKVw8QHEJRhecLV9gFxxdp8S4yEVvL4wZeYWHv6PYy8r9FSVdLfb9RAMCCL9mx",
  "key6": "YGSRmFTfLBchUBi73wnQJv4q31vzKq7Bu58MBiK473m6PYnUwDJskpzriSr4ENJtVa2Yc6QxpRqAaxgSVi3ZdTG",
  "key7": "5M7VugEmyq9qEkok1aDm4CNN9PQdBCkyCTAMd1WgswgMA1vzEvdVzWkiQPK4ESeKVJREyb3b7ZqGcVR9C4ZxTZRv",
  "key8": "2K7hXF7HgwLzbMKcchV8yYnBwthkLzDmCKriQTRpaKPK2B6ajyr96sZqA8e2sDJFuBoZBXAPre1bj1i3td1cWnD",
  "key9": "frXzX4gy75dv9NiXcF1SRHdmyTDzcJhT6FEZxZLwz1KQcChkBnrkMwXpnA4mcCKb6J2STmDmU49vVdiPFEZ8srw",
  "key10": "299nuEFmS44nfzPwduGFcrRBK7P2dhEudDEHZshxyqs65ChLKnHHq7stA6Zjh5iLxw3qAgiaLKnWfDFQz8uKXQbr",
  "key11": "4Yf5g5GzVZZtYhsRjrKaFes5pHz8TXbLS9upNJA6uTjCkgi2jVPftuNkURMxqu81En5m3gBXqA68vuBBQEdVPmKm",
  "key12": "5S5nnrPfxEJoxjiYgkYupB2dupofaFi4vLHdRDQ4R44yqBDwvVt16UY5vW3Kt5VpMiNPaAjLGUnqzsHiamm9aEJi",
  "key13": "2ZAwzXUeYLAiYiZFvpT5U22YqbJo1phaQMBEhEXfZTjgJTRxnrXhMsJvbGNQfKUmeDzwSN7VDC2B6BN7uL6QuTUK",
  "key14": "gLLcDzjXbW5GLmGF1WTrbPJFbokmyYJ2uoTVPkVL837kcMmnhCYttqzggbkGEkztSsrXd8reetrq7bvR9hPYWYP",
  "key15": "3VSPUwa493wv9QvBxdK3dh44opv8t8MWzPQx3DFxvWVSMQFGrcUf2fB6NHYfxrGiaAsGDPehBkWGuJFz7mTD63ze",
  "key16": "5p42eZANXVozDBzLtguG8sGNfKhELzMKq1NdwZocVtANekYJgbtT9oFGWXJSkjjTba2tYTGDw6Ajd5ZU43azq4mT",
  "key17": "2poQdzSg3u38hwCRcVkr1d9bKuFMcyrV9djAKvvDKc3NukkHq9heHArSmnSjiHZ4Xke71WaBw5fT3fqZgmbs8cEx",
  "key18": "61s4fQgRUVfnyZnXQzLkNVsyZM7ygiNk3kPLeRhUepowQtwHrHwt1Tzxh9FVV7NwseKz2iEqJMcT249mBSii4DNe",
  "key19": "4iGqSoXP82WigwMCdJ9sBh99CQBLRs9DhNhcYJ3MBUXJbjbHnLjKsFdAsNzFWAtktcGwhpJW3waSezXUtCcQhLYb",
  "key20": "HDkzENwR5G8Eym8vqLpE5YwHVQMwr1ygygBnZFr1S6UMVKunY2SfwABSeUND7V7WFdSN2kbxFPyMTcwZ8M9nHsg",
  "key21": "3bfAPy2n1bqVH8AsmvPThqb71DLgYeEr6ABG6vQjBuxtwGk9bRGF5aHaXCNvL8vthybp8dA5E4dmZTxp6pTawNbN",
  "key22": "44zea2C5yo1mJFbqhwVaH949vz1z855sifH9vMdnrjGDWmZQzYrZzsrur4VZVV3gF3RyEDyLHJDewyFmSFaw5jsm",
  "key23": "5kkmTJtQuRTvaXZVkd3wufYewodV2tMs4xctN5ayoa4x9odFaNtwu3VFh58fnPuAghRzMGdUYopC8j8rtfodTDDG",
  "key24": "38r493wsRGMiDdB5WkzH3PdNJA8ze4rDA27jJR6EjcL3FTEouDj4eLCFZcdEAgZBmBAamWEPy3KEAkT5mZaf4cxf",
  "key25": "4AbCodZAZvfzkTN75mLi9E5xp3mLqjhbuGHYbc55dnf1j6Mgvh9kPqMmxxYew5aH1RkC4u6Xi77P1ybfyNz9268s",
  "key26": "2cUoVvSVNVZW6SCTPRPAeBN7tGdu8y2NjoeBiq2qoF6aYZiWX78pYSqvRyFGNoDCEQpX7cpThe4ShUufMzTVEyfQ",
  "key27": "4GEsSjJGiRXgW52an1qMsYabnMAQxWJCrQS9GG3MRotMhPNwPwYFMXkAPSBca66oZMRbso6z114nkYLtz21Uawxt",
  "key28": "2T7wQXqQMJtPXmSU7SmL9XckEsFymTrrhUiN8fbWAkVkhzpaMDEXfXTEoPR23kuHGX1FTmh89ucb1XGNsFXBJbDX",
  "key29": "44GVTytLSkijdQkwkhu9mjqSfNrmWY7B5GBQPDXSAJnpAd1ebsm3B1ogB7W6XX9BSNJEmk8yVpTxjHmB54UgMvwA",
  "key30": "391iLXA551M3QxaaJcgMPGe22wSbuH8uepPXf9P9aVymocojXE19vzBoN9hYNtoj4kmTtXKZezHYT1HdPYBQJ3Qj",
  "key31": "ZPftWsV1RxSzxNjD64w5tXHRVvZz5oqUu1xx6Mob3Ea6hPJ2sYY9QJ5KwkLfromphjrY5bNN83W7gr7D5Byruen",
  "key32": "3Xf2moX2VkXTi7xakpauHY3EtANgjjkVtu61t2cXCmvYEwjBLbVf82UVQVr1NybFMjoUicbW3o9u3agxn7cyizjX",
  "key33": "3vRcRpfC4rUVUVCZi6mYDbosUCNxs1oaT2HrwSNnKBCJaBEMNWCKaatVQznvgvFEXWd9dcmozwn2wGiZqMF1s71p"
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
