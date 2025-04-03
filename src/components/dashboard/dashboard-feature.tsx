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
    "Xf4fiAMY8hqWWpHaLJoFv3QVN8FnT4yguizLGZAzrpixX2qfkjZAzsY7mJrRdYXkJeZkrHFHrtm7pdv6tRBN76v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeNzF3wRjq9Qfn8L2Cw7VYNqKEtkEegaoB6sCaprN1rwf3zEGUC3vX885392DmuZhP9shPrzX27LQKV4UPqrnuU",
  "key1": "2AdMu8ozYi8xZovAAkkE8kUzpNES63CpVZZp6cSbHtbjyMqKC6jrdxhR4Vh1Fmhm7qkQHhHPzRhparSgp3ZPGSXs",
  "key2": "2eRBZ38msrA642ThjfLGtg1U1nxznLaYZJu67cGNEhY6k4DmKetxetSwEWutotPpV5bbMkoJmMQiCugneTJaPMSA",
  "key3": "5UBea2HLw4vHv3MMj5QhiL5ekVNLtWbyMkuJg7bMRUrq3kox52U6Qa1yEDddyUXMxZdoYxSV9Bg4b3X8zfxmoT5",
  "key4": "czPjGdLcEZxeqv2TYHnrSr9khwg2FHtdR6QRoytgvz6ZNjjcSDpLkb1WJuUQSj2PR35TRvymmZddAp1cYGRXz2E",
  "key5": "5Fh7pEQ42vMTGWMGyjWGtRPtgQGwSx7SYRQtKgiJ6eWMVzFym86WmBcN8RPVMo38g89MVzr4eYTMV4jVvJZNvJ2X",
  "key6": "3r63dRTNADrGFHUijxqxdp2vC4f2k37VL2Bq1fw3FrLiyWxKUBCexMsgaBFoP49puehRe5wYBXLfnP71qvQ9GMzf",
  "key7": "tjBKjFYQCrgTjavmnxnaXFmPEGs9RgHsfciqzfUEXuEaWcmmQTpQgHRd1XXizboHb2dKXsjN7XoFX2wk8bbvNpd",
  "key8": "3YRgTAnrHpkaj5e9L8McBsuwEJH7yBhynPgAhYffPWbpZK9Wp4LPB2CHNsDTvN5VqBnw2BAQBLtR2oDXfEwHKnAv",
  "key9": "41oXuRC5JrsDYViBompUF4Agefd9dV9grQAHAUoma4DX3VWbH8EiKtSH2GWCCmTWqBffkc9pT13KxSF5Frpg8WMH",
  "key10": "6GUy6Vg76oRiB9z6MAHebGW6jeW4W5TFfjS76skciMiRiSzzC6z8dDP7DF2GxXkLN6E5Eaysuanx4VSZc4gYzsM",
  "key11": "2Ai2UPbVD7xf21ojUvBUpbsGdzYGzTe28kHZ2mSh8j2wpfdPtpZ5S74k8eGThbubLN4i4pqPGbsDtnFoC9Jjj9cN",
  "key12": "3aFZRAAqYXuzCvMEjREYJs9ch4ANdYYQM9xDzgSS7Y5mXoNURs9KjitgbKdfnLB9abERTUxY2aoQaHsdVYpNxUWb",
  "key13": "57nZN2YcEG2Ms6DCXHjmUMShyFKSsrJ4uKKjubBg7dLXc9UvqcyqwYQYmxZaJDoEbeRsaCBVS7zeGPAGt3qezySv",
  "key14": "41J94E4E85pbhiiTZBeCP7SUyksUBa4NzHFj3D9PwjS1i9Nm8qiimkSKRr6vsTpNs2AiqxdomrvRxppyNxMCypgP",
  "key15": "cykejBPJvD5oqBtQwDXrT6w6YuMt6s6c2iCHVo9qufvAW5tQLTqxjcWpZyc8fRWf1oYUgtZZFyAp7YuCnYuu49M",
  "key16": "seB5917fcAocTUkaJo1D5rGzUEEeQfDUhjPJvfFWKFiJyxNAvYq5JMMjs5Ufvkj35758BMHJFKcVzHuiHAyYebs",
  "key17": "4YhDkYUMVVgbxLPL2TCURUur316ZwzhcEcp6aimuJFnUh6AGGymYLn1uYz9xzwYK22FZfv6RKooEQpHrgE2nKfkr",
  "key18": "5C98eHeUppBzGoP7zbNUSrTVFJMyP5dgKW2apjpXmHvj4v987W2MxHJFgFpBuWL9njoHKVhY6fSjKXt9vfWc4PY5",
  "key19": "5nnCG71vbKB2QPvjXzpU9c4sAJg3JfRr44PkLrZmNvGKvNjEGyqPbcw6ChtrWNPFxSvEtSULh5ugDK6mgtQM61th",
  "key20": "B7FZjeCrVJLTC5BPM1ahuvKFYguXQRU9a9oPmkJJpiGeCAhdKACYnJsiXCwM2hmezMomukvYnqBnWFfnJJHkV4G",
  "key21": "3Ga39U8E2KUiRdZj12jgqVg9xs2TbqxBA5UQdSmwQdd7ZfT3enXHWNdypHBrVNJ67D7v7Ko66Na19gWqUeSC3n2b",
  "key22": "3whFSbK2wQ44VHUgLJRsZQPQm2siG3oQ9LEDiRqVTuh1Pt8VB6tDvqkT1tnq2i6EnB4ppCK61WhdmMXZq4y9r7sX",
  "key23": "62LSuGznbAwf4rivTzdnRkYrUwQsxHXkfNudni12tiumaMzZPY42GaJuuqHsgcid88iEYangrAH5x2tU4ga8hqz2",
  "key24": "44n1rDqP2ctwX9HrKb5ydEnznt6a39eKUhCnFRZ3hS82fBwhgNSNLv1b483h3D5j5e5fpfrckrhCkXR1yiBosux9",
  "key25": "3H9HeaMS8XyUEB9StbMtHfqcy85nnTyCuZaMbSNqCKtzJdeKQbJ6nEsN4GBgaxRZeDzNWm7BaLt6m78JjWyRJJHq",
  "key26": "2BJ2xepAzw4Nj4wDvA8S3WNFY3QcXXo8HqcakRNiCatTAWnxXtvdaYX3XzzyP3kmG94g4jmNQjiGupKTBxTiSZ6L"
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
