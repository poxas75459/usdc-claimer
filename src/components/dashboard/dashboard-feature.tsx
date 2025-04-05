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
    "5ZCgQUfzpafewFEVZgEYWBz2Vx5VZnfY4mq62LmJRmgzKV1rtMpNXwrieNk2c7UuPBrwermY7mEUa5aAAg8Bqz4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMpwgNZsA6w6qvEjAbZ8WJR7V6pUmabZkSdPj7ffnYRPj1CmB5TwraEDt8ERymQefKGU7xrp3AEMEZvFrc1zEG8",
  "key1": "5x3mfaqGdubJG3qmWoyHHfGGJMvfa5x5KE4kEiZAc5r2chMbFr6bGvSzkKUF98CbLxch8SKAzftRUSm74BireoRD",
  "key2": "79VaJpB6QeAGGC1iWF1PAWDppS5v6VXFMLUXEj6J1ovWxN3vHJgqLXicVaXfAzataua7qDoLnquhbY9eyTYAfzU",
  "key3": "5L6KGjmFJWQVvmjvU4NQLiyUrGMSByuoEwmBVTfiJrw8RJcvo5fWReykpSEnfbF3YcA56sshEuf3fegrJkhkG1TY",
  "key4": "3B1uEE8nEEg5mEgnXN5E64pRQGExYsFpfDmfaERBoFp1UqJAF9zqNcaYLsKZp5DTrnYExgNVvXk6XhwHR64fXG8D",
  "key5": "2TT85htSMrEirHt7Qb4UDFzEhQANRCaAA5eRHkS9zTRyTzJFojP82EQWDQB2carkVAnSn4PuB3FmNF245b5gQteV",
  "key6": "462dHj6vxXsanoHDogzL6yFVWwK7oT14JeQ87ZGgQ8AYYroSj52qJ4bDW3voqETo68EXR1pitdMEjT4G8vRrUvAo",
  "key7": "3rKuGudNgFq84J1PMPmV95f8gfVNUgcXroDvNBKjEyvVixGinVQNdzjTqcvA2DiXQyRt5B5PtsAohg4iXeNwMsnT",
  "key8": "2mkU3zoWWipx8ygiXEzyDbKFLu5Xp84hAcWW3rh9PrAPAMdFcbUbQPu1tocdF9h6omoM3AsDFXZq39h39GcbaMKg",
  "key9": "3mjqRsm31ovZiqadDvAAKnNaBhEE7EB7uM6FgjhtPPu4jFqoMLe7S1aFG9nmpADQyrApf2Rfh6gCu5K6bgw1kD3D",
  "key10": "4xFvMTqvVAT277pfSxnx7p5VwQ8dzQTtDGNttj1EcvHHwvk8HwmMbfhJbguvzWpptu7vWsV5XEFL486AHjefN79d",
  "key11": "61krvSiyzp5HNLpBFC1m5E1gqh8ZMVKBGaMkY4uZYDqZmePLhPzw5RmiDTvm5oLPnZWk1gmkRLdWt7mPUrGYFb8h",
  "key12": "qyVaQG1P17RmADGFX9LCXdJStYJ1aiYoDdYBhvzZ5UkzZDwcGbXYWfHKiemaAzsT3GiQXq6snFykRttD9WJ6SiN",
  "key13": "4AoeW887RS2NhiGuBA57rZepT4LPAzapKwrdZU6ZfBG3Vyn8Qtw9MUmuUHxGWSuEEzwczh4NP843rEoY7Cm4JUzh",
  "key14": "3MxH47MybVz3hhfHPdMrzD9hHnA5yPHN4QFAM7ChqFUjnj1u2sUSeismLbERaCWDHaN14PLJgdSkqrm1NRz9PcrH",
  "key15": "2PHdg2Geu7fANqHW3xQhA6tBTQPpU7LmSAQwcDmQffmN1uJLqfQ9th2L93dqpCUCdpZRPzYYW7wZ3dadvm4x958M",
  "key16": "wKAcCsYSKoCMMTPc3bs4GHKLyPGxZDMvxaD4tZ3XVintxgVYjaPZsKBNtA815gYoEe9VXpirNYfTRLdrf1Hu4Yv",
  "key17": "4HxgHyM8fxvzMKSVLjVNTWufuMt5Qc8JDeg866Gvb4b97o1fwS8BhSMBaQviQUSeDtQpTCP1XKGebCMTHmwJWvuR",
  "key18": "4Q2qgssbMYQmoa4dDULjc1ggH5CARafj1VEJZhMA8wgkonJ3eZigbLK935oY4zoAtgjEhsaZRN55Xx7463yXC6G9",
  "key19": "4JnYcG3EDhGQ496RCWzq6V6VZwaEquNP3rk3eT1QbpxFhTjbA8TwWq82pn1o8uDKrxmkaBKyMHs2MPbJ4CwVpgL8",
  "key20": "36X65cf2CWJ4S41h6AaHRJy5xcsnGCDvW76d2YSaBVbbPBKV4aLT7voxpaEXEFTGoXyr1bQ1xXJvgbsJS3VK6d2a",
  "key21": "vFm8ymPZ2D4BUs9jZ4J97n2Xihsw1Z8U9az3Ek8F596LuBvveBELeBUwLEM5iE9kQQkZxuHU2s3p6kesnsBKpqf",
  "key22": "5LTRnkn5apxaUxb6hrcgLL8u8VVAoj1MFd94b1aJ1r81NgMt1GJQepP4GE87f6MuZNGrvRUc8dwnmdfaEzKTPQUs",
  "key23": "4oEAPnCNYhHKgdWRhMSv9vGe5umRU8tUNZE91UA5VR9y541C1v6LAcJkbkCk1bxaNPBbL9p27WFL5eZztitMEuY7",
  "key24": "3r83gH93DpHGQXCVJsEB9tgrgw3vhzfUUEaUVKKBVDQnBsGVbuZaMm83kZkbRW2TkMPGUA2jzFSW8Ezfr98arUfT",
  "key25": "2gC56J4eWnRLhDyBBPWKfXGCuVvxZHKfiNhdWBJf9hsdK7oQy6Pmrw3ReTEJcKYX6rWci8Upxv4yjEeAZyVXHdXH",
  "key26": "2jDeiEoWyfm8shQfH2396D6obN2SSP9Y2RLLuFd48QFWHafAU7pyRMRsQ4qxJ6EthLrwFT5YNkLeJZFJai1B9wzk",
  "key27": "5ozPuCo43umxudU2ZTmEeoaawyaYv3KdXpnWAx7WSiQeYcCHx9QmkW4Rw99BoXMFe3bhyzzsLq7L7ABJ9c9hRWZn",
  "key28": "PFqQtyywyZVrvi85E6UnNfBeYxUWbFWFqtKZqAxkYTowzrdTXzKMPAix4hfvqLJEbE289rt4VsNtzbNQ1d5gyUk",
  "key29": "51DbN5T6f3TBhMdhKU2bKafoJarMEft9uDouqRAtGmeSg72vTwy1D6d7Sgzehkx1bf1ecM664wR3CkXsgYvJQHqZ",
  "key30": "4dwdrs72rYxFXMwJbavPaAitNPYwdSMY8ZzgLoVt4auk34YdKbxB7miVyiNyWqJSZdqT4z4XZ2sEDMiAWLyL8MwF"
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
