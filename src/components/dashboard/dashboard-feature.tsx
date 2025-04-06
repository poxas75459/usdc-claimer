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
    "4NKJeyfB9iZdbQJb9r9DJaqQdjouD5RpLa6GxU25WS81uHC6aAz578o2QE8XJmLya3Swb66kpd6rov447X5Rgb1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zkTeQvp8DkAVUooHgDTN1fwfrkzRfXifyXkk9CMRHQy9W1QB9iXFfw9HwCojM4sumYaj6r3kEUQ7MPm7kTkJdSV",
  "key1": "4vUrqr2FSjyyMXf8EBHMz781QttgcPAR7wPBpbqLbNwibZhVRSHGfwZ69vTr1FxnHZkfGf4qutga21Vridu3Ztnj",
  "key2": "2t6sQujTkGdyFv6NGWVFZrgh9e2ncjTtK7fgAQiAHrGBkzRNrMz4jdtD6hyAD4RcuzGFnz9SyA8dA3fL6HuhBE9h",
  "key3": "t1P2JnJA7Sv7v2RgzheGWcW2GiQ5eSQdAqKC9yAceHVg7bpNhboEmVBKZYiMpA9gDsd1suD8M6AVevUE9rwivTp",
  "key4": "2BKU4eP3PNif1n1jyDTqYedpSH7u2mQJzT2kqAFzbxY3zEMZNpqeRGqa37s5TUTzZi18g4wADJXcif5gVJuTYBkB",
  "key5": "64mbTWLDuQ8RCzHmY1qmfAjPTGcSspzxP4GtDHM6rZ9DHA5ugTEidVnR96kyXDxig13FWpGNakWDr7nd3acMfTL8",
  "key6": "2VjwL4UAUQpEW2H9hYsL9a3hAGLdb1Up5kLgqmSbhbUqY1VvaMVxDFzpxWCbcMYwDokzn3kzs4EMDD9kV7NaA2jb",
  "key7": "5Y9MiCzb46uYfuA976rdKHHRecdh87K96GppRyHtMvw5CqPSkhRgYu4NCkXNNJaeNjQsyvbLvscN9EGPKHpeNqvZ",
  "key8": "qexUxvAChU98wSgBdccB85jeirob8HKAe3UdsModcDfUSNWRn1QApM558QZxA8d7bTrmfuZnZoeJQ2hScVjZayD",
  "key9": "4V4cjMXBYhZmHfNgnSBBPQra4RNKDb6a9uCwxXWvE126hA7SefBi2qFGsGANe7fyCPESGnV1iLUCuWi3cWSsXQz8",
  "key10": "3NUgUFGky469mUz3RNjaFUqRykAe6FTT8pj6oSRw4R7EYP3YJA5jdGtM2Xze1zVbouF55EGAuqcZRE4hr6oqy5CC",
  "key11": "4abTgsPtLU1b3T2fdehUta46UtbrbxoeGH1D8D1aW8qtTFAMVqaScBCAyqcWiogeXzzbaaQmRuU8MwuCYWvzyn3q",
  "key12": "41HveZ3ksGrEwzrJmUrK9aVGkYkqivoEmTqeXsqrfjYmL5Qhiof6AgT1XDEkvgVkdymA4fhrjcjcjRGp7UrmCa5K",
  "key13": "5gqKo6kbcyY9nmLrAg1e2zCHeHq8iXoV1iXU42WmwTo46TiBPxPJCQ22ZJjWcpi7r7Xgj9Au4rXTEJ5XcithXcQ2",
  "key14": "JonfGEddKJSzGgRr67SmmnGProXHinUr7Crgkug9AZESJy5Qomfx2ZKW8grp3tRvHGWZi1U8aTY3tHYYiRPkpZy",
  "key15": "4Xxe8tM8VoZgW51uj1wsc9T9Eb8U7RBaGRxMNs3yhMKdDVrZQyuZ3qDbjvn9noWvHYL93YFEniJujya93hS1FMbb",
  "key16": "2S36t55xuE698nYxhhBY6oLdXYDQW7AXBTRvsZaKcuahBNifbjQHv8D9bjV8sHezyNHA8VXXJqv1ZefS4x346DHp",
  "key17": "2vgL6yJ29G14t6uGetqb8WHHCyDiyKMbyP3awWGhCJDyhaC2vSmMHemQarQRX3bfRRUuKCR2TmCM7r9s4iWfqLXW",
  "key18": "5gBumA6HK2kvffx5tF1ovKmx9FeEjA76BaTbQz9WGeRX7wvxxRowU3sYRU3cH2iqiQa3RpQNDPRENuS1ozpYenr8",
  "key19": "2QesrwFqdLM37MtsG8bWEZwWfH7Y3SZS5m3PCmmwiAhCYNC59QxeXNeDmpt33eUchS3zyuKtAyKsAnjUMRmfvxio",
  "key20": "5XnypEgHLVrmqNCzjBuPFrXrRda3SQuQmJ6rfXS9jHeceX6HLRv4Zz7DAR8hNeps99B6dpb4tPzvrQezkJjwVtDc",
  "key21": "2oQUPo47vHSetAf4MGeBHFheeg8HrwLxmSotuFobEqvfmG3qThyvxgAEYhiTuWZaDSgu24KVHQcRKP6mhrM5ynbE",
  "key22": "5VVs5nGh9bEkCYR5UCuNt5uL8RCgqWhtmdDPZCzWePLKLEydiBYAwJNZFUUaYa1x42prKHpPTG84wE2dZa4UH4Dm",
  "key23": "4rgxRLTVmteKFHHv3uPQETYMY7CnoZTDdZwx13rgLASmxGHJ9AhEMyr8o8WsRGohyCNnXmxYc4PraGVfdtMy9YzX",
  "key24": "4D4ynDxvgrY5DgojJ2cNQKzdDMPc8zgTVA9RpP8AyefGvd3eXBoDgB65vhPejtqiWPVq6EVxZZhnUVnBQSsF51dy",
  "key25": "x3CXNR3nwfunhpPuYVHgSdXQtWHTGG52yHgedsiPuu6WQZFEhphmor4Vn28kDeFGbLvQGHqN5U6q12BrQQNd444",
  "key26": "3vxGC3ZLNMXQZig6fmhAXADNvJHDyU6tL8VTM1PdMua69Qj8fGKFz4ikHwRnXN4R426BBWn7vE5TCDgp3BykbpVC"
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
