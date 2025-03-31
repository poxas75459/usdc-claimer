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
    "4g656uqu23jKFPc1pJBGfZuymvnqoGiDVzXqHhJLk851hQr2cbAuXwTfiH27WdtRZ8RtvQ7RSwfVb35sB5Vmiqdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwhSBQBSf46L4c4hhPRXvQfVGfUvrz8KLBAW5yh5DMLVrzD1EQT1aXnqf89YwMwwXEcDa1aJ4VfVQx9ifvWBux5",
  "key1": "3LEjZD1vPhDAoWm21UaH7dtb6VcAYzmr4KACwSmoChtcXdeaqbL7WQNJB6pFqZNixQUocaechkqDq4EcZF5S2TGb",
  "key2": "4HkzsT1Y5oikPKcim1JuTAsY6dPQzAfmqyMvYDManpgSf9sGa1DUzuoANbceMyjfFUtWe22C4wGQd9vPUj4i124S",
  "key3": "2ynQc6udAqnzKfmbTu3T8cEHiiY2YR6rvwcDJRaexdSYJzoUbKihNB4kNby6EkLPn5hDQ9f6TTvvCYYWmYphnN9h",
  "key4": "1wAJa6VgiaNnA1ruuF2bJJhcw1QJeSieGtZ3yy24LqJoa1w8mMR8mtAFA9ZtMMHxEucPWmeV5y56rdco727zTB4",
  "key5": "4Xy7ipyANcr1fyUzwU5z6xRpuuvYWX32o9yPJooVRJXf6fEnd6VrRSsYDULeXGAmsZcDaqjxjfe6gzr3SMdZj44h",
  "key6": "k7wxPX2BVSAaz3YHyjxKGEg1GYojVnU1DhCMTcAK1vXdA3tiQMawQ8pQ1i4dMYLec6PF4QN9S3i3jrqU5uuoLQX",
  "key7": "5HHtSQ9RW2xNDxWwqVyG4agfDmAREv53hfF4WN7NAy8UuxgsDLgjC3ZvEK1Fi5eJBc6exyDJtZMFG69tBh1p4N93",
  "key8": "3MVQfAmXfECSi1MpQ9cSJgoJRcJ1tJuxRGpybz1sXY3XXYg63tyonw5SFKyv7r1maqwanJSXbBxidZ1qhgkqtkyw",
  "key9": "5MVfaTkHaUjqBD4iMsPCRDyhGM8vr34ga2U3Nwu26uz7VR3CU2sXQjHa3w1cfnxPkDhohKe9U4onyK6eQNXgsccD",
  "key10": "63qWHffe8gkaxNzYmYeyKihQLckeQiseuEz9RbdPLbAve2b5YbrUhgBAqXRZMx3G1NyVyo2tuMxMcmLHZ5yh7KkA",
  "key11": "5obhFNvKpochhx823gPJManwkPEoxLuCJNMzimVXUmE8reoSdCGWPmsiB65Dce2iJbVBXNrDaxjtUrdusf7FPSYi",
  "key12": "3LPEu1K4Zj26fvtsPGh7ig8zNiMoARVVYk5zRjEvT7gYXogbNXoVNj5wHE71fdcZKEhTnuA6iYyt1iDj9cPpTMHV",
  "key13": "4fVjS6fUNbadFvxDYUiXheLvUtmerbcop9F44Zm7Tg1kYyUvbWbFhYmSpg3hvQmxGQt8ZmdDgdzHft8znru6VaLJ",
  "key14": "fcpucXsveVX5TyYEijt6tnx3TQdFnzJKeTQnxG1PSucTND14WS5q2HcMbhSeDVRb4auma5VHS81PW98N3GGnWq2",
  "key15": "n34V2wQQG83PtxfaRVVbxyyugsBcmYJAJ32277xzh1YfPru7LKKLLb28zAqFaoZ2oJUUZ1VH71jqRnFGhxhqYW7",
  "key16": "4ZETgyxMoLZvT6Fe75k9m1ZbCqWzbvf7dFPL4Rv4RKf42tLchCQBaptWxsE422goBMCWRNgS4DGDEAyShMbaY1B9",
  "key17": "4mCVJikN6H9NMsqkeptUjCDVufxbgp8EpR1mgNxrj7ZPtZNcNCDfL3cUaQu8aeBpwtxSLLdvPr26nUQ6EZMKNEMc",
  "key18": "5Sxo4g2VSZnDf6WrCZsejmNi7YBupfUBXn2jcw9prgZgXfPG3KkbV7BfezpTfNDm8HvjGFmPZokSPfg3GeJBsAim",
  "key19": "41aL9b4Pbh9L14kMR65KmCYmUhgAKMMjqTqD34AqadPDds7rGDCtr3Nqb4gx2Mmyw5mbPMzzWokxYna16WKQ4qda",
  "key20": "3a4RiT8jt9EfTC1zU15yJ5NYWjcxhrLPZywkdy6XnFqCDRti6sc2aABJjaepjj2H91BcUPrmqH9EA5saECcqvyAM",
  "key21": "3pQeXxvJmhWKjBQw88aESjWjY8vs1MYZjrRGBo86gtj8c2vC1e5BuWQJ9bMwHS4PLhQggULtqWN2GCU5sTzJ7VJm",
  "key22": "2Zki16zt2p99sfEUti1SxHMCVXyznj9huR76vDv8r2HwpgzLRzunkJSbDfWexBJbkmgzdT2UsH39SC3Vg2A2VgRS",
  "key23": "pL3qcgfK1eV9Gtfx88WLPECYPEUkwf9XfjDxspVSe4DT3MdqqC9ZpsLekfx5g5gGjAQY1NUJbpQjDyufkLKrHrG",
  "key24": "4yzPkb99rbjRm1wu4CynJbvHDXvXcYvcm9RLVuMRYU2mHVWA7xbYaQWaEWdPdBHJsuioEqWETapHArM6Sx5D6wQH",
  "key25": "2c6uWqDzYt5Webt14UKvLtqMo2JoR3hVaHRb68s4gFaJ7RvxAhvofBxyBGQHooxa4gGdz4Ki5EG1CPK8XtxWnq72"
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
