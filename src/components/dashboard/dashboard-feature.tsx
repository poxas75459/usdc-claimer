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
    "5wUhb7LJLPjCPznZzsKLjg7gzy3UZeyvFFsULU8ws16QNoy51sg38U8JzU18WeLnNoc26jv9NBy4GpjqgC9ZAEZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KESm7bqjKXcsYvjqKHFJuMxe7U7TufdM8bUXqwXpRVUUpJLbiHsruBrGHS1Y8bPqQr8WUzUsUnmnrfmQWe3Bq8j",
  "key1": "59wXW2RRUphca7fwBovqm89QnuhteQA3zTqEfsEr1LgFQHrusmjJJc2YHwVBrS3fsPw8ijtPLGofWovHcDW8PniZ",
  "key2": "5KQvxsZG1UyudDYxf5Z3pj7zGFxjWCtSBHSjW5vPehBmpPpmS87ECFMhYf26BMDYasBknjMS9JSXu5M95u9zJ8c2",
  "key3": "2GGNY5pBC1Buj17ogDj8gPRNTEbYpeEMrMjFbj8oysp9PrbvqssgCpWxoZtAHTL9THMV7do7wvBV3GSaVXkFnH7A",
  "key4": "3csJ26YT3cgy6mgdC686sQS25bLiD8ZhYG3mrVHwQAUAbGzfdVtBDV6XV2A94qj4xz8tR7gXwgm3xeZEUH6g9D8M",
  "key5": "wqxYn2xM8cwbYYXvKbNivFMzZrMLvDm7vPQeNH7Jny49ErWKY1hUcqscXwQxjf2uQ6ZniAti6S855Ao9pYGG2Lu",
  "key6": "4Z3TJ1vjtnxGTHjG5WR9DSNiQBMDcDKnwnei42nbLrxTM7opiFUWb3yURtjB8H1gqFwyyrSuADAR16gUxwQete9m",
  "key7": "C6FfP5cwmyoaWWNcPGaprAYUtxuYeeMLeMcmd7ZuojtkqcixKzofMwgfBaK1XykmobPujeq8bnA18iCDTck7NMU",
  "key8": "5yn1EAR5KtNJh7cVdmiJS1ynSBvwwAEL6yA6BarMeqEW5e3kARRZ72pcHjUtE1RkwxQiR2EAEgTfasU8ShigwwET",
  "key9": "3fDcskwdB7ef8fEYN6oVTfy4AA2GewsVwNiVwvctnDeuAMPTpVxh1RabJaCrb7Y27cw1uAS9WCj8VXxXAVzYJoWt",
  "key10": "3sWCZpZTRsEdFv3rWfwH8jGi4i747Uc6L4M4UCffvgyJR2NWAkgRVyQo2r3YcHb91ZfHyBWaUNqK1tp2YCrQR3cC",
  "key11": "4VB6opTypkmwWeiyAq2w9GPvoBLK37ZVpSLzSve57M1djh2k4Sksvw412zHYU32mFFSRB39DXg7pJBrzr4iTXBfh",
  "key12": "3aqWQnXMq5XqJnvQf5xqGDJuqkZRgreHVFttN2aFzmPra18bVvNZuasFKZ1FNJMpZjhEaziSCC1hNzbJa2ahAMEq",
  "key13": "2QLGaY2hQyHC5wccBBQQNEDw9MhrPkstHoqDELPP5hWSpX15cnbtSWJjdbgRz6JtjGPPYcRaCBLPXcwC1sK3k9q9",
  "key14": "22NaSdnZFkfH5w9WnUBnDMJfusuiBW4fcZnGkvAzDuW2LXrGdHtJ8xrBc2nGRq5HRboFd7FWwFRDoKw9h5vKuPcv",
  "key15": "4JyG2z7xA5FcLUmeci7JoEKJvj8JMy92iHYYtYado1CLfqb5kkiJ6nqb9njdw6TAEtsFCicfsYghm47KiHBsg8ue",
  "key16": "5P9hWAZrfzQ7XN4oagdFHvGc3r9t27gmvyxB1DLhJL6BJw7GRjCGhri5hU381vqGNpHneGe5M6H8ioyjWXxK31wr",
  "key17": "4W7Dqi47CjpuCMJkp7qnpXuEvPpS5x3oXyC9bKeFsxEdZ4wJUW15tX4mrRowJ3WTVkoKJ6g6RVauBeeWMGSnwCeU",
  "key18": "3VRwobosCi2XDfcaRcYAKJehZwVs6MVQTAsaKq8Lsw7hrJkMQ8FsUpRmgA2Asg8aWAiLxggaS47F6LjqK37m9yg2",
  "key19": "35ArJHj2wqxqXKMk12TeZm9cuCaJQibma4jqc4sEWtuxqhdKX3KoJWWJ63m8qAnRKz7Ckt8DetQrQZaaVemYxyVZ",
  "key20": "Fk3dPHuiNABJzqonFvoU7RodYottt9fM34AJoCNxw74vMud58FCE6JPvboBnSTaUGkaFtbNA4NrVeFFAKpr5U16",
  "key21": "249DXjTLiNzDeCDjZ64cw8rGYQggRtrFtSuq7LnWGmWqphbjMkfZPeoewYjm7rJyZ1rxaVDZJy4Cb41E5KJzn16p",
  "key22": "2fftFWwxRUJd5PZW75WoKgG8UuFPt4LoBMUjBEFRsvH3q2wTF6TFKHBxPeU376HSLGHtii3yjoa8frYdg48Wf2Eu",
  "key23": "3dAPbPoBg5jorRyJXF44fggZG7XALRSsRreSPoxfV3m3a65nXFBeSu94TQ61oL5Zh1AvwfvJ5khKPr78HeJtMjHt",
  "key24": "5CHYEvRyWwd8bDKm99zusG4SnGRkkXQrizKWk6KMoshjREx4TkS48Wyp2zpu1PDvhQKXwsJUZWfvNvUBDitCN6TH",
  "key25": "3HW3C8UP9q1cqqBmGWSe46H4Fji1UvWVarQVLMjWmEvYvwZ83MEtXKeeL52rj7Dg15b1JnrgavpMB9eV3SQa6qmC",
  "key26": "4DRVSsHCG2HhWpJNdgH1zjHnAk3UDYyRbyEZSzVbsa5j3yZqoigXKf3w7SRMijQ8fAFckmUu1iFNLkFaWRXNpp37",
  "key27": "2k8zC6XB7ntFHLdkXVnxda9SxXLz243npqirbCcTGwJFkKzmhJrJxvhEguGPe3DEdRLMeXCPPDtFFA54ygjTEiVx",
  "key28": "4gBaQDQaN3PFYqSKDBjhESg52EurPJum2JHkj7GCHqWY3npoKcmrYbVnhJ7cFnNTQ3xPzLELNT1kfNY3LuNvxRoF",
  "key29": "55D93VDTLCAMhpMLDPhLJkEugJf4W9ceUzwhQmPDzbidvizoXx3rNcu5RfNa23bFfknbCsTuEEk8bwMwf7FPFAZx",
  "key30": "2MyJ3V8JRfv6QgLKr6XGukaaj73RHK7jnc8ajaNsA9wQ1rBK86qTfzBmHBWANqzLWSb2AR43Kek5iW5ZEbp1GTN2",
  "key31": "49S2eHVqorNsfFTd2GznCXaAKdyQxFR8hvzEeyvKhoQ68We8fVmBXQL9SnKWLw3HHXcmHhtqqsNNBNtZmc3nWEJY",
  "key32": "dA5x4Y8o5aJRPSCUNBwEtdqCCg1PBUVHARNRS5q7bzhHLimVVPhrcK475vWyR8rBV4jE4196QtqCzSiw4yBKTFD",
  "key33": "dZ41oMWZiXofdVGa54z6wUG1G9cMsorGFSZtrYqdtFi5LfXRxepaRouZ956GoDQ4iVpbcEjp6mJBTpKEFUXrkeh",
  "key34": "2nR8ybTEoLH7ZHyhGBL3KNhKztJ5JdkMgnFJPWCUZ39YLZyXifobRXuLi9R56AHVeczVKC5FeniUJF9kH7skcdjj"
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
