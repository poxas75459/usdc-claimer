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
    "5ZqvdFxMdSeiBy4sbUq9yRd9ekuYK3N4s3DLbNB9pwxCXz4NAqriTRYznPHM8B3vg8KCnMTkfSiG8Kv76JXXKf4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qn3FFjPvj7uvS9nmbrP8ke1W1tQ6Jtxs7YFgFVKbiRXVnq6fDBEqDhidGPVv6BuAeMHL6m6FMSXXcrXhqvEfHA8",
  "key1": "oH7yc1fR1pATvk47u5QSQ5GxYQvBDo5orUzC6QRnRr3GaHx3mecYHsFHxcdi44j7BsSrCymadmMJ5heKBZVwuW4",
  "key2": "51FNKBAixADbbKjp4yMMkyM4uSfvGBfbiT7re8xZVZJ8DK1rm1YEhqYkp4kj1P8wW9ypjhzP96HHxY91QtF4JwD8",
  "key3": "4iJiZ3v2k6yx3JTLnmstnrXmCUpcAyNLTBcethMGquAMZ3wqja36C5DgtzaRpu8HsPMxP8Zbi3KhByUkthXQJqxV",
  "key4": "33t15L3xLvnbTVQSArJRiQ8dMBUSn5cMsAkPNAViWC7m5CXhhWVYpkMz8FL6RWE6Y75XTFbc77p7NpJ7ZoAWyg8B",
  "key5": "4qj8afKWw771PnLa1shz1JEj1JUULiPhpgXSoQNq8hvRPvfwJd59YkDCFaGLAWKmpwvhskdCVJmsMnK7m2HEnF3X",
  "key6": "27auJoCYLqABZNF5tppQAiHXkyT1847rZ6qPTzXUTHkLoKnEDD5v3N9KeWpXTBAyi3uDbWVJfQVewN15pRcZJAjr",
  "key7": "25Lsav6HAqMYphutEPqoiYXowUY6yCnMBWhVcD5Bu1NA1gP7tLGaxHUCFRPUzSWtJAjU2xdsW4oXjLBi9x4TGJmY",
  "key8": "2bh4GWXQ4iBxhp8iKeyegMmdP6ALFyg4XHnC14NFoa8d6PVnTGKoGYK3KNxAs7cAhKikFtHqPKuPgqKV5bHAf9CH",
  "key9": "4M8vWR1cEEQ1mLwHYcxFGCv8EEiVpEjqSHiE4MCzbKhT1PDBe7itLjikdhQKgPKeMVYEKPfKBkwJBZ6e89Sr7hvV",
  "key10": "4kgRiugvGgD1jJ4GcVxW3BYPReGEkeuDZLQPUtDhEriWT7gZw61XSpJd9y8K6QK959KURvebMs6H2E5XVwGkUcCt",
  "key11": "nryoBuoJcN8vEdJS1mYr2b4Zj4zVr3XUp1659wHYW62256qXxXLehE4pg2PvChrn26AYnNyUJSmfkCrMFgfEJgG",
  "key12": "4BHfFUgRwXZv6d4S4RDoAAtXFVGHz3hojsbNbfRj5wG4wCeEAwyB1o8AhFAzh3aYaxAChfPy8ChtebqQVNQ6u5aU",
  "key13": "5bDvv7igga4HCRSByBnDNKFW7vrwWtDPH7WqVjqfwjk7S6yN8bw89Y2Vrh1yLDJgbQkWGRGdFnVNf5YdJJqN1AWn",
  "key14": "P5qF3LNc9P1QBCMLdxg1Hjj3wFxDTnUUEjWfevbU9bry9GeQwXwBjjGbfXGKM7AeiWkn88NVjtYj1gNiWj5zTjJ",
  "key15": "4VydL8J4jtCrgu3KEYrMSXGBUsKvUEPiL9gcLuzbQfGnDK4HyEhf2DeAuqXgZ48Fd9MM7vrttqZsXSv3Bkyqhwc5",
  "key16": "4vDCP9i4f7GV9cxPXCPnXVeN25Ef3gtmg9y6vGVKZ35wY7gQUKSZQmZgY1gRLYQtW27WoarP6wR3HuzXnfyVp5s3",
  "key17": "62sHhhNpkiHZukP5MHgyLeG9HE24svK4e7pLS8uNowGSsiL2ucNRh72i56y3JVYvV8DvLFrThxJtbGUphNp3zbD4",
  "key18": "4VoYkd3xazHvEUSBqHjwXV5RGSYoCPnGo7TUHcvtAHWFsgP5Zn8Vsr9T8Z1PTDhsZTHZxPL8Y8D7Sp9HDZWiy8Eo",
  "key19": "4vwyoaqpyGWFze4E9axAgp9Mu7GqVp2n42xhjGj8pE9gPvm16AvwUNjhmaoRutbh5AhT5Ao7WTMyWH4wfpkdXp8K",
  "key20": "4BBmgqaxTop77KkJ6EJtLcmE98Masz94zRyoRJcbPuad9fXjk69zRuuNe9DPPRiJtsxp1qVr7Rv4mM3g4GEyk955",
  "key21": "49bKCFJxf5DW4oVwTa7fLEpyoReWhiFGEVt1D87vkEHeTT4Fx8eNwQen9x9LKPYpEXWHyq5SErvuH2UKjZF9a7gf",
  "key22": "51tuqY9L417T25BuhH8RDD58Zfrp5iSnb5EeZcv3hFbzaN6yeVRpBCDgd9V3X4XSS7aHaugTSms4eYPmnhB1fpoS",
  "key23": "3d4EuAPJJ9t9mMt4Pn4ePRjD6qZUUG2FXYD2ZbGaG5zzdxMNwx5gQDm8dBq23V3PhqbrDy4nKKMGAGrEwtzWJZsf",
  "key24": "ZnM4wG8bhLb8VfxTvxQJ8a1T7nVoctwHAjPAStT73uZ3EnZJSqZu94uS7rsxjsVJSi7w3XYnNGQo4frmckUrh5j",
  "key25": "3Xmu9PHqeXbRdPk9C29545oh4aXSyknQKhd82zLdh8c4qVGHV27XeQLdDiZ6RWAasgZmiCPQNBGpXYXjDiWPkPnj",
  "key26": "2VPp1XaS64nsDEHUr73wB9ELeHNPNCmHcfDzRXWaBoQLioNCgJQ9LYEnioj1jnhh3XHNzgHpKsCpphVoMdJsTiwf",
  "key27": "5ijoqUYmaoiortbhUGnYsJJCVodf3Adx8VhrzdhERnm839Sje8dCqYaUWJZRQgRv4zwJwL3BV7XVPvH7vhXJUWv2",
  "key28": "37bBwQfAbv3dHzMxvhBgyuDkLp4bLAA4cChEZXh8saQBqPRzPy41CHyfPZuviHLySfxnbuYeKPR4n7KnQvtzc8Up",
  "key29": "2XQxhuXhU4Tdt6qM92WKuAoZ8gHvctMZ8YqVnUx5E5iTKmH9xTF4QeALzq1LQs7HyKC6coAyPNQJvGqJEV4xfZvE",
  "key30": "38nREdLkq3y66bMR3GuzgNQxkst39FbCNQPXvjnHJD587ZiWW2NHdDK9HGkWs2p1JXTJEejHpne69c1HHbbFAr6U",
  "key31": "3ct6e7Hm4eG4d6Xq6t89n3FuCWJhCieTnmQLEGANgwAuW5de7sS6mo2MKAHAXd3bDQFGvu2hHzQgaNyTNqQJKwHZ",
  "key32": "nat7NMsX3EdhVsr6GNTbZinfe7KGk82bD79EoCU4MUcM1kMQNEvynVg7zWeF53yFrYgyhpFzVJMRRvufyZspfBk"
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
