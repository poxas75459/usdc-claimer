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
    "2kHaQTk47U7X9ByKs3KPRp5hugSmrBjJCw9mMgPsN1vvNtnqWGdVfCHjCMgt1Wm2f5SrA21Z4BBEpxdZb9cGArLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsukJzhYzcJLusgfVSzySMqW8k3PLW5cqx72Cx6VXhuLajKTZaNJYBpSSgBY9yVZSN4j4rrYaENSDMBh2v9eZVa",
  "key1": "5GT5v474ozvA247bTDdDWieqDYrt7rxzc6s3swVRB4HXoJWyUkZz32wd5kKykTJv2XyeJyMvsryV1YH4wrWwbzTk",
  "key2": "uETACmzDAAZiXBys2wP3wyHBJPmtQjmDS18XrooB4JyfN2GjDqp1BFMp7oiTMzasi8kSY2vQdMh5vca2Gk9Q75Y",
  "key3": "22X9UBYF5NapThTQ2wZgU2jZ88BJMNkZyZzccemz17J61qUrvUBxCgHBoXnaw982ntMas16aNiaBwKqB1gRbvKjg",
  "key4": "wMit7z7AgGY6tNgUEBDoHormgMj3dnpGx1hCVz5PFUVi5r7AnDAivbyfvXacfijNw8K1eiCguE33KN2A7WDf2UJ",
  "key5": "KQMVc1MMUy1crdSUbo8VCokaedtsuKtPtHxY1QvT4MYk6u3LosWcU2LQLuvuRirkVeo89xqZrma4sB3sBuAcVWG",
  "key6": "4QA7jUTHM8Nhd2nMkEoHPFmpg8wrUGPqtduzq5h7uVmgHN3qPyM7HphyhWygbSdt7xpKLyR6Bkk98F7KPjkqb3aX",
  "key7": "4MHmgtkihvgEgCWP2w3cbSd72cJJHMW6PLdhbTPEfGYfBD8MC5TJeS9uQiNj2yhguC6c86RL98RsKjQMqbvUNgRx",
  "key8": "pkgLbAGZuYgXphsj2LFtTZNJhS72GR8E2Z3teV7m9nPVk1uCP4KdmLLs8ZyLUxWXz9zRqckM81j1ypRsGVSfMBH",
  "key9": "2Zw3tC4xHY5ZZk29dCHCtBqTvBvcxfertBZ9kUHMPZSmCd2y8UgvCmiZnd16gtGYAYrcG9x2bVm5c42wDTPcZLzh",
  "key10": "mieFkzH8qcaPiynpaEUf5CqKvqePodwZxWEpU8DqKULSH2wqNzM9WQeo44VHRhxDdMAEtvdZuhAXihhGFi6JBuu",
  "key11": "5dnJderaPHjinhmewjdG47FLiZp9XaExhHTXazRyLRDpQXFbmdVp7z9h8Wp6hmANotii6V3EAJE5FYMe418sbxWc",
  "key12": "2EnFHSucMj67G4vShc94EBc6Cu5RgLSepLeTxtmgmABQk5S2AQTyaTg5bD9D3vwKDzwsvMfnybjkXYAGAuSjPvRL",
  "key13": "24Dc7D1pezn5eocAPJJ9gcBJmMBdC8Um7889xMhCvwEGkreV2377GbkPiDQazynk41RchW9A6Hfu9aF8JE2UEru7",
  "key14": "3G5Ys1tEiJrWUFTDpj8vhwbe7eNYpoP3mRqeVfBU3QJtjEa2c6egcP1rfCyr59FrwFvuKLQkHnfAQYgYVFDvnx9P",
  "key15": "37C2E1jXQiTZjv5cAPyizcn5oWVp6ajhUaeKWN2JzU7QLRvjxCgUDcvaCpnSdAib5J2b9BuZkQvYsBTPgoKStLm8",
  "key16": "628HAn5hg9HQT8xfJDQm49avCMsPFA2oXut7moN87a3LTkCF8rdt56cRyvw9jD4anw7n1NUNcoj6csFcDgMEeFGU",
  "key17": "5JdTjyJxPYDAhfiHnT3CRKZG1T66CHWMWEFhUVdxHDatdrKZRW7JyBUmwrWXiUjbgRxEMSGK9rhBrWq4fSHksBqV",
  "key18": "2xTPsNKjeXnnmHGPgxPa5KKwj3aZp7VGpRWg4fpo444Vbe4T4KiEBCbqeMSxNX9BA48XFGxCLFUJgvHDidABugmJ",
  "key19": "3TKCH2Gb3rZXUUgbGkvxMymCsYon3eEjc4ga7bciBwYsYm4ntqFtuF1rzHBdD6dU7tHA3DmmewPt86Ji6GQnH2Ez",
  "key20": "5Wmp1ZhchZTzWTKa7zxgEsYfTXaAXQCE5JxCN6wmyZmkU2RcsENghGZbW5PDyvmxPhbe3F648fwdftx3nUyukQ27",
  "key21": "3VLVJK9heryRSjDLhZcCiZLanic9AYBCaSQg5KgDgwnQTsWnjgSVi5kyfb2HUGz2KX68jZS8wV62BfGRFMmxbtg6",
  "key22": "4QoJMQFKrsDD48kpjabJ1gjBLczFprV9urt7dbAFyv9aibJrpRUswTAAtRbQxPkt1vZyu72EXbNDxhZLx6caKyJM",
  "key23": "4HS6QN3k7MCRC6nFYTDdbR6MAkXXkwKPahjEmK8Xt26LrHnXk5oXCYC9x28ahmtAp116sAVV4vLWPvSdCWn3P4GA",
  "key24": "2cKxQAxcM9k4pav5rf6pdpvYXJPUDVjsbyULSYN3VzXkHrEEJwL26pngQN92RNHeHq9S3N2HamJtxPUhi6XavciT"
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
