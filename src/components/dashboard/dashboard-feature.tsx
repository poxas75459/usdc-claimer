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
    "2gfRE6RCBNcVXyTAw6V5cp6ibdQLY3sNBQYpJ1UYbHEWPXXVy6nSdhZLehv131Ezk2n5uwEnaq2xLBWV7uhZddGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UddLnTfkt855urFQrj6SC1XJtd41fTxtLGxzADystLAC6nyzM9C2PaiXQh8jwcVhwYXr9DQt1xjWNKukYGgQU3X",
  "key1": "8SC72jfERyLrjoc4CP7bXMVWAehkH8zemaNipYA4gwRDqr8KXTZ9ezK4ZR75VJnwGkeSSw6ABf79v7pA45x6JVm",
  "key2": "2PvvCYt2ZVrxKUsRT7RE95TqTWmCz1jmbqXNs89fwVoskWVc7Vm2LkdCQJXbeczJqDwgNTibTyB5rybJsG2fZJwr",
  "key3": "4dyqZR5AbLDMCexepbPWR5Xk7dMqqBBKYZwB9vnJPmsXwU9xLjZ4hLjE5udybyq5tk57fp1KAi5LEQ9DGpbWK7qC",
  "key4": "3KHwYqeS2pKnM4PhqGDQWcssBN6nHVQpETyuiFBWMmXxAax24oHiTQDyWe2yXMACi4K9WmGTnjkTtA5a8oC7jkn1",
  "key5": "38fA7Xh2JRDT36NAmkZCYDaRUH7bdk5XY6DXTU7fCeb5u3FRD9UVHCHkGE6ktH8q1t3XrJ1xVvmzBB3KPvdDnSkV",
  "key6": "3dQ9v6152FUhFJUFEsXoAtkVQnZmPMggHCYjeAeKoah9iwQp8zTRpCZTZ2xjHjgpfh5MwUsJw1HB64Uo4vR8wjaE",
  "key7": "3kwf2rXgbqWuSBDsvWiHhMbAym2rs5VYfRcuVNqtHUBZCwsjqw4Verk8zhcru2xzucdcP2rGqCKy7AcVP9kVhLLF",
  "key8": "Ww871uqAW46AP7v6aBG4Ct4sAEYuTDei8Ges99KdFH5iuFhgPbqXvJUuaUAtuBwGnBeUh7YKrkRDTXz9FbL7pn4",
  "key9": "3YsahXfC6N7rvnmnbTHz7Fd7ecmxu6kkEr4ycWg1Zunqsr6x7YJ6gX3R1ZS3yWjqGPFrCSD7s6Z1V5W3FGn83B9A",
  "key10": "5tuS1vfFShr4JBMXHnsSYzz91nWSUZjQcNwj3DCNxYM2LAsJfKTMnqvw6PzbdyP4FdbFsrEfhiZ1DtGa575PQH5n",
  "key11": "3Q5uejTQ8EA42HHdS2ZRogyR6urgk6UkduEZ4BdmK1fQCYFYX8ZWY94M194rkKdBczjahMqWESdffniAHQVNdu8d",
  "key12": "4rBYRxn1LBiSTeipcxtuszUhyrWrvycd9cJ5siunRE6JHn2rTqzVv4iScoQN15HJMCrfKEaBRxvq8m8hXAKEDGwZ",
  "key13": "46yL82yhm9drBLWuptCnAemwB1HTW8WXi9kSXWdi6jKsv7p54jNJDpHSKyEHZ44RUs5TAUrRXvGHE1zLGRfJpK95",
  "key14": "x6Cbp3bA5LZL5Nenr951b7DLBAsSm7JUmZ44aHXMWybvmEqwUmzKGdHx9YmSSa9txamCxukbsUuXLKoZdJYoy9d",
  "key15": "5mQ1zDvPzXnaz2vCZL3JALiC2wbPSCTXpnZWPbrmRmmmSt3dJb1jKCTM9jDZ2qYC47nvPdrySkHrVyupfkBsgkvC",
  "key16": "2HcAPWLsiMCzeWVExtBwmNQyTE1DzbdEe7cKooveJRTL6WQBLmFT5eUxh6yPWDDy7bJ1yXLMFJe8GN1xApAirUNU",
  "key17": "2zj6MKZphL4bvgwPe27DzzKEQeGAHsAaBnMmvw5nxwx334zuh7b2kBuCQU7qdPj7QTnXQzLTdCHygrUsfq9E7t3c",
  "key18": "2pkSKcidwmRcKQ6PFpaP9XE1egbsnJmRBBp2mfvTJpCAsPqqB2qQr8P5ExpyztiGKZ2pcoxQfYnD2Ndsd5zNyis4",
  "key19": "5VKNQp1oY7FifMerwMXFwhvz37aG3N8jCmT4CgXuWdcNRAkSewyqG35G1s6vwFScPdAy8fAysQgADRRQY4q6XGdz",
  "key20": "395YbZgPkkBm9NfPBX6iAUizqecMGNyRdvV7n34t29cgdoDgGbqDMuvFUt5JGzikcFA79wk5m6ngEXoDnAohLELu",
  "key21": "5kxGxiyosto4KP2acwGsELopmkiXoKnXKT8JfsrUzzUvDoiPCzGsKycmMQNj6MvS1xtLW1angNfgBtB86epwMWeK",
  "key22": "5eYrBPVKnsMx2GBsqjHvam88Z4MgQeRxz6w254sxLn63nMQJdBXfp5iRAH9atj6z3FhePmiEpC5YQQEBMWzaJuHb",
  "key23": "2sPrZ3RGr2yYwCYMUdLrwqArmNS1mKGU9d53WPJujmY3M564urozbVhq6j2tC4HNeKkpF4c5w8tXHv7vcztvk6ss",
  "key24": "5MX1afJH2ye5ccTX4PsXepjpzng94EWNnYLsLTvxnNNXJYkhxBHW138RHDDLkyocUy1HknQLveHsoTnytUAvyksg",
  "key25": "2KUhRrKxFjgYEtydvHqGYqV8eb81EHkwG2bRTxDc4Mo2adv9WQ7X5b3HicyaWVaJoTjJmu1kwh9cWcAUHjYMpXNX",
  "key26": "2TezCkbBavHi3hW4Jk7oTJ4DwW3E15sfkDnAScidkX3Ake8jFH6BQJVNqSN43aqLuWRv54xyUedeg98mgUxEYM7a",
  "key27": "2RndApw1dsKMafpstu7kH9YN2pqxmfrHuyF9p5RUbNPBiVN9RULDEf5KPUV89nZnmdvEzorav6aPNenouAF7atHH",
  "key28": "3REqTjuCiCHpmHzkfkZrobWvYbaxUdN3UeXaQ1ZwdybrkZWLxjuGt9gWg6H93mYE598YgiCijiQcERzjC6zyoXF2",
  "key29": "2fZWzn4kPGFr6ATHdsiEYLfQUSgX2GA34kJvrhpZybni4T1pkWJEp25gXNbMmAs8H7EbqekfKJQk2X8vHUSc2cJB",
  "key30": "4ZECNDX6xugGG982czYNS9YKchnbio1n6BERyMMTC6u5P75HZ3Ffswh6BbjrpqzQR9Hww8bSE1LjZ8ngWc9ryb7J",
  "key31": "nFEh94ezWfWnuziHz6wKtsY9zLPVYtrGeDHYUmSp97xndpjrxJ3Yez3H52K6fdvwZUGvkMurGctEdsmbrWjynK6",
  "key32": "5pCH8brdmcW6rfbcBWy1WSaFZ5g3VsjcPJYJVnYdmkKrVbKZ7kizuvmHqpnmt8EqBAHnGRCGTgJyKKWUoK4jQxuS",
  "key33": "4Rv9RkUtc44As6wPPRDjpjaPeSCJGkNEXmPRjzjVud1smtPxzba3wdTdq2rUqfppCPV6RFXAMAozd2JKbcmZYxwx"
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
