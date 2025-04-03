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
    "3rhk9j263ZbfHKQpoApyc4EaqgkZmqoh1ydd6Pk7i15FSvdgJbXY9bxyHhC8LQB48tDkMZoMcZkDc2FGCMLybPgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vuz6fheVoQiv4AYqMA9fVvoSbrSNpMudEjBnAWVrFiYMmjA7bKGUB7XnQSciEMyW2vPMBKH4TXzMNX2czEZoW3",
  "key1": "5ViiokRLaquWcjRpWJRkKvAZSGVLT9WZ2RPL5HMfeeoG7McYeafibdp63w9x7VVrnQejs5zocZV46aU56SjLSnk2",
  "key2": "224UAtbPApPJYcsN77MYsaAztQUT5a4AnvqYiGJoCKv2uwiGuAgMfPjCcuDmHKT5pHs3dnkYbdLmspZjAi9x6ss6",
  "key3": "2E9gHVyBxm21h1ky7wLihYjjggPG6FTtCks4933PUJkNUnZDYPzZqPDspUKtPXta26T9iYJ8abw3N1fWDCMvpEii",
  "key4": "2gqb5bZC91Txneruo7ddo43XUJNjDbpBWcYQNqbGxfYLuRzStTSy9zChbrXg3tuKSny4KxbRa4GjAozcU36KPDSz",
  "key5": "75LixLpjBvXEzdK3f7uby8M51JXvQWmpStS24UxpVDtr8Rcy33cADWLRBmvaPYm64F1zBB167PgmMDdaA6ZeWGt",
  "key6": "45GeEPgPg4huiTUU9j1oWxMa34Bd2he78rPTpBfUXEDPQNWkNZEEko5QFwQUtxaf1JFuTGgMaciWkgLVVD5QLDya",
  "key7": "4ihiGqVLvco7F78gQ27kdBfT6ZeaAqEUWXEeBpcm2y1Ja5DZfu5b9uCdYgvKdJ2mmeMftqbHULAKabHjZQxG26xz",
  "key8": "LQVi3JD8Xp4LjNwBLnp54n6CQXwfvK7WkB9fhwEWGY7PSNteEhKsWyAyVs22qEohy9iMxGLgJGstDbEKu8U3QW7",
  "key9": "44QSaEcFyBWrkYx7DJ3YfZv4aXFtyKWisjJZmjB185uPwNnsrtaYGdbK68f4DAvUDHgo4GvPUhDzoPz1ikbTomsy",
  "key10": "3NV898gZW1cvFQicrXERkSqevkN251xb5PQqc267aJhVv7wL1FHDJzs3RswpJWCL4eNDBmbyrNhw8iDXkpHm6cA2",
  "key11": "5F9paAGrqYvyYYgKrLknS6kKPvyZYFafGNyLSqvFqFBrpb1TAoXUmUjuhLckryjsjWdTjTS986Tt54iovsrY7fqF",
  "key12": "4GjP3BFdBZGCBtypn4AjjfW4zx3jos6ERJvhk68ZY6cePx8o7dBByp6YxAYrNkRkwxijJpf39iLKCrCyJ1X3diSX",
  "key13": "aiDMo8R6xULLUouMivhTH8ftQr4GahUXCDSbQmkN5rb2C1sxwu6C6gCPnkp7XMahWZBUDgvoZG1WdFgGCo8RDKj",
  "key14": "62Wo1g45nK8sZatoYexukwgu1gHe7qufV9hmuBD5igSXqE5soRVCuEYL4WSkcvvAtZiMYT4xJSbqH2rzYCVVVknD",
  "key15": "xZPkmuhHBJu24dEnquntRUQJdoxVTKF3LYq8t8fquHaFhZoRsfKyQ28u2umKby4A4kYhjC5TET8q5y932sfxPVs",
  "key16": "4sdvQ8FGBNBg9dDk7w3ph8fyoHVoF4nDYZqNR8TXGWg7Y1im43k5Ta2RJgeo1WWdG7GYRxnJ1QXVret9w38fiPw5",
  "key17": "2eFSoAoFz8LKPTM39e7jS6uX7z2X6vKnfw7wwj3us6kJrmadSNhYNpiDPcPyDPHgB8nnUdoq8umfhh7iondAiGuy",
  "key18": "4GHAJf7rybpo1DhP2e1F6oMHsfMRCa7hoCzaKTJgbLbMSx7P8tEMEAxUatFpPgZYg9D7tcKD7Svit3KgXWQWH8Sg",
  "key19": "2AHtZ9T8LDtGL9j5BtBjxLnyHqX587qb6rBxpyNZgUB9Jz2vSzMA8cDUcnD6R6dckwtNRGryWbPhd81mGWknSdNY",
  "key20": "2sN67KkTrNFMZUN2Pge8mX92rYyug3oXUdUNWZsbDbyaqxZjLJ27fbFvtFUJ5J3RghEopzLLYR24RpAhPmaaaRg2",
  "key21": "2TkCXMy6iA8fC97r6FKAJCEW8MUuvUPTkL4xp7DxsbxWhzgGjcqg9mfV9ZDxabPudin5GM97TxUuAp7xKw7bmVSq",
  "key22": "2GjGTVLmb6NBdHCFHRKLAoW3SjCy1sgnW4AFvXMwi8BEZGSNC3ZqquyLuNsXLiFayqgXcmb5NikjsZoitZw37VkZ",
  "key23": "2eaeELj5xFcbwmvAg6AhtNnNZsnnXYBDXXTuGDWCuUmE4hYSMNB5EitZSTW4Pq1SNQ54FpeasAVXGn2u8QgoBmtd",
  "key24": "4idX4e7Q1DEJWzYTS85LZJF6iwMXXbvZY8srjoMYMJoRWF7hQktkVy7WW6te31BcYFfvAp3bb1n9iKHDpxd96suG",
  "key25": "1WK9gc4oAu9AibxYPTus5zdoZpSYJLqHr2PE5N127iYKXs814Ezuy3yCKgMg6P8THNW7YXbL9FwtGy2YqXXDpzU",
  "key26": "3xTPEGkU6dTqSPJezANd1u5fJ7p3rxxfAzUBKeg73JWGvV8rysSvfNd8g4xxjxp7qkNy4yguPER79kqFYdWtp2ci",
  "key27": "shhYiMCgt6euxrMfmpVmk5rDacgDXK5AY7oqFPsVazYp2BhoW3dpXmCkafWB7DkUnZtPcjM7GbwA8db9dNNEFmG",
  "key28": "2d1Xy5FbpN2Q4P3f5e9KJaFfdLnk1w4eagAJSxK3X3yMr8r9NpLT2atudvk3CxZWMzoNr4k9jeHw4hELmRzbrHz",
  "key29": "57wps5aKpMD6cKLqvrUD5wJPtePUgzYJP4xnxoXi4nUutjTQ9to7pgS1TModknpyLZiVxPjERRpMyEQ9qaW5Mw6m",
  "key30": "2GJbwrrM1JsCEuSSPtJ5hrC5XfsBtRWwF1aa2gRFf8yeVKgaZYEKkizQSgCJtgf7vyNpPBaj3Yrd1s9YxCW5ZNzj",
  "key31": "2FLnSj7eENsqdKGEggW4LkeE6EQ4F82VYE5NdQobrRhnE7B7WdiqrVL7jhHQUEXp9o5eoeg9itTfdCtRM33EB4b7",
  "key32": "3VPxsg2CcMRAPWyyfSGduWi4AmWcQWut9ZCHNBGwHkNJvtZTW7JfXnVFLfc8BysCeb2tDt5ct5Nx5vyqLg2Ginxg",
  "key33": "6536hc3rSmfiGfZb9Ggcp3idyyrK2nHBa1LBXSTT8mfsXL9sYxx5AkXX5yQVXMmp5D4BrZpXe7R69t1Rbnigy71S",
  "key34": "3zcwniyeWx1ay52wfoWv8qNu8Prsh4YQL4iobPm5FDSMxDFaDy7ZwPvfqPh3FKQfA4jWUxSw4JkorhueiorSEKEg",
  "key35": "5mSaEfkXUFNPZ7kwnC1k62kNwG9yKHinZ6qZunFvc41VZHQwCspLjTxAN3ri43PSLNrPkudGxa5DtUkWGK25WhEF",
  "key36": "2uvA46owXnqi4atsi9q36puwxurVid8EKhLNwRh8RdGJU9hBfyRT35BYkQ4JtS6wxvmW5Y2KzarQNdBrMjnQZiX2",
  "key37": "4uphukUC3dodckt48TuPqKrtgJh3DZ8usye7VjNWAnfAHG1LhGGEcwfeWPzZpvsHyEUwSoo4zziGPtL9Zy2LVnuU",
  "key38": "45yeUiVnRGiQzkwiL58avU6qKkSDMQVh2bZBdMf4S8uKbG38TyP8LaPGmqAcW4pbnrrpQPbUX6XJ31PVPv6vQdiW",
  "key39": "59v7T9gLmEtd7VVeFvQLUjnb75ardBBWUVceQypReYTTqfNFJbNFYTSS3x5yzk1MMz3HuBZHUVBrTvuLNRKAtsRM"
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
