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
    "2uWWJNPzxNk7iCiXHdQjXYQyXwm2qyRiafQWAfa3nVZRQZ7B5Ybw2HKbhF5jeyEzmWnxGheXgNg181juWbhyjdTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fC2JoG6cLpwLkqvCzsxvkXHG4pytw8XhCXMF8mJ5MuDM39WCgBwNxxz8EjSuF9BLQqbgR6sTvP2noDVKK6RDF6B",
  "key1": "ezFZw21ntE8W6o8cnCPQcWvzhyKTFxVDsPoRLSgE7Z6ZqPcnutpMv3ZvDHqMuBpBiHGH8L61aJMk9V3PG3NX7Nf",
  "key2": "3E1wTGWDUTAxMpRRRGA4m5JUUHtLrszTuLbej8ankMMAdBFTAn9Zcrq2BDaMrPs2sA1HU5frBqgYwwW1pfmvL9NY",
  "key3": "3UKFfpEnZVcacia2Qf4WmrzKcRo5CbtnSJVYv4YgnrcQyhMg5GUtQKPzLsubJDXtMUtLbBkwEFaW9RedGDM9WHRe",
  "key4": "5ZqCbwaNsYAcBNs4RjQ9GbaPojireAbKHksiz8rfD5UNdSuPexmP411vTuisbyXUmNFxeJHSDmnRpvdL39MzDaH2",
  "key5": "5u5dmnZDr8XFu2bj1NKmDH1diEmS5bSWLGuNqnbKSEkvGhh6fqCDuyJ1TxquzGp4kqVJAxBXoZmUmA7VbPPoRZX7",
  "key6": "4onoZVAsfa2GYtFjgXrJtpV49BtBg9JdREcXE8uJEbcW9XMnEEoPW9bM5dgqYHkE5FxYsGc7AXoJYTo9hi5qU2gA",
  "key7": "8bLyPYkNwDdUpxC1nr6yoem4ji6p2gggHdkbXaFZHtFnV73mjxTqzBeW39X26Ts8Y5JM9CR7cuK92zVm4kvS18a",
  "key8": "EXB6zUQYNhB8dLkP8UQwGnpUf2iYmxBmAwGyyvwFW69Y9JSKUEBKHpSSwtFyb6jZtB6HQMcswaJdJWNXQTaXNnc",
  "key9": "ZEmjuKThLJeLRDnMSSn4ANmeUjnuFDECmePXQvcmsaF1rTDwdaxSC6p1tMByRMHnExhBd4kndJhYDCkLbZ6WQ5r",
  "key10": "5Ln1K5eavoK3HgZWWcMDyUWuC4NUbfHzu91tFR8UXah8FPubjB7mxp3GmXxzjk8qoHF86aH9w3y1jkaDZfqtYbza",
  "key11": "4rvGi7f8nA8VttKDV1Zc5BeNhatLQ1vubCWHBRZthVwpDXZzrZUyamzt464NyGL7UhDnrSKeWHMWuAoAwFwHFgpD",
  "key12": "2TmBVECe4L7YHi6xFuGTQAFedgcvwdEBY93acDJJErrWFupt1KdcqnFUYB8JDWmA1iJL8qZbMDyhkv6NqRXDuz1M",
  "key13": "THa33ocHf2RLzz9YJo1AGCw2kVKRFikjjwFknXd7ZbsMzzriimKSTZrVsJwgLYcY2iwMKcT8wpXtH8pFF9MfEzA",
  "key14": "33FVejWr5ZZByEmFiTx2tS5uZyBy7GG5Z5s76NVRhD48FsgFrJgKrBoHkrsV4PQ2vYuUp9NwU2hgETWEQ7qDHM5m",
  "key15": "2TAzdNg3VtAYpyRDE4kvZAESsxAyts5rQSXfUte9uGy5kV7rVCc9xMUuB3knkVWo6YFjUGNT2oWYcA9xdQHv1xqy",
  "key16": "5NhHKAfczy1DWxoWmCtCtKCVnPZwYsqSg2Un2A6f6GW9os8Rdck1v3FFRPE5wQeWYdfprvdG9uafHhWzdzXTDL3d",
  "key17": "59sfeqSBq8nBeMqUne5gxaHjBhJkhEzAmyy1rgbTgbxFBK7cWZTWWpifneyLfBLERDV8Q8nhUr6azVCep4u2s4i8",
  "key18": "4snxXesyMEziPBzTpq2CHVBZffxuiQXYShzUJeSAokay2ZhaC7mnDR9e65tGiS6YAdUyE9HWF7vHZodVwjo52oN8",
  "key19": "4QdhYL7M6ihQyDdaJC8DB11DFTNG3n6inuCdMhjj6VGE1KAGQDmFpeL7F2yPjHCLC2w5XSojt6Ehy72d9JHyhjLC",
  "key20": "2P7gWaKmEkJ1qGmWqSqfwzV6qeEU5dULkyK3y4FZY7sLwP9Sa9QxpUA2VL1RF9ri5sR4p4jZbwxfrXzF3Ag4LKFU",
  "key21": "5bEqCjgNzs4AKJbLrHcoFAXtmJxtnQSVBSUKsAV9z8pYKe22AGqq9uizbgfemnp5CgJ1qtbCZt7oTuhtUX8GNu6D",
  "key22": "NCvbqzSM66DTjZrrw8FEC5Uh6ZfSsYB74wXw46hY5oGdcp8tBA3igytXrDyuViVjzWYNZ6XYCshtcK9UouFHeHJ",
  "key23": "5jGV5MVcREkJLtmjUdgf7H3Uppg1abmBViDfgVCaUWuLZ9qDzq2jgf8N5Ut19SWBDNqLB9yr3zB5QnB4JfWxB867",
  "key24": "4twyyBTbf6g3cA6QUQ8pySpAGRb3KnMNMLKiFuDMCNYQoNysVjsfzhLYQ7D8xbFtQavNKzTNdgSXHPTzJMZF86sw",
  "key25": "4kRJup5Ge3VqQtd91NBE4B4SBD2dwPJy5auvyZiyknMazhygerMnNWLfwGb9hK2y9uemvBC8AbMnk6xHt4Ex8fD2",
  "key26": "4NrfvumGnRnFpesumrPLcgjToBCE8sn4givrjofYmkwSqM6ScgEYuhY4waTz2Np7HwjSHGTWEJ8jwxy914njGBqb",
  "key27": "4bp1kx3G8LS98W5AtK4Xt4UVaz1nCJnZyaH2H8ppFGEe9JzJinXZ1ihQ38vd29fVpxRkQA2jyKu8NSpySJBEnSKh",
  "key28": "2ax2MMzTMYja3XRNFtSYhA9GkY1uGH6vdj69uerrnX2LrfHCUJp9ur58XRE6cqMneJtqdEowc2AfNR1LXT8VP9ta"
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
