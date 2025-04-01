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
    "y9y6fn5RUF4NzYUajVhjiYcyLXeHNRqzKiHwevhQQQ3g9B51YgAgX5SdtnbHboR9gVNGuQYcG2H7HqkoTD5wwf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MH5jZxRDbWAKZHAMg6gk6dgwPTdaGEYVmvUY5DGqV6KrwCCQEddKH93XXUSutzxJoh5JKSdmfkh4FtbSwxqTUJ7",
  "key1": "5ZPm9mzU8v1hunit8jkBBieDjKqnZBucqN2MRfHn5uG6cM7n1WND9P5FAx6WssxcMMGUywhHdETQ1TfjkXP9jTio",
  "key2": "VBo6QK1PZWor8hpo3R2yUHGFre99XbTVBVTsWEHKNKUGKSDZxYtyLmzAPwuLUqwiXnZZVG4hAenNDusg89ipfTw",
  "key3": "3Tjnh7mgbLhSFCaUuDoMXAR2jCusfScMLBbxxCoiHTgG76dJuv5miXYud3JxQXkKUU8YPswjYHq1AUqbQrRgxWMF",
  "key4": "3rhqCSK3mXJBcGaRPNX5Uhn6F55JigJE7kCNxYXnmyxRCWgnqy25APweBP7aVFKEXr8i6yCXykdyDXPpRQ497tvW",
  "key5": "3d1hHBqBvUkXxk3bHQuqjuHHii6cGhduEvY5VgSkTQGJmzD8CYMF2DBHkJzipGPQKbf92rFo43Ebg4WLtXu1MFDu",
  "key6": "5GuMvwAPBQvKpcfiNK68NzQSq1EmbSMeTJE8wjdwrHhygMd7hrQqJ63LagERdqG1NZY7iMMkxoVNCjcW4exjVJZi",
  "key7": "5LUaUBispEAqwc8GuuaGrmjrRoARtUHopbk5PZWHcrHHbKoERC7KKpeu6YY88w42jMueG9w2WjDpoj5JHdaR7DLv",
  "key8": "5EMymmTxEYgqAJsLvJFjgDirjEPt1AKoFNDzcrzQKN1uL5UvEZsNuGMMJynFZ1eZwocoUiUnQztEjrXEiSP9AFNQ",
  "key9": "nvMG4fQjqKqjHBzinJYv3QgTo53pfFg8N7xF2v2GZG1UraVQzQpkHfPmQJq1t3S7zsWPdVdemnCWRKfgsWkqrAo",
  "key10": "2AEarDqP5KooKuuAYSnfhwCGJb8vsFSQFPyNpi3Y9Bb6TrT5PJig7paHx6UB9jJPGvTSVVeNGd3yC3rJe6VJ5if8",
  "key11": "3vDdooGS4PZZ1zD9QtYPRCLGdB84G7iJ8zmr7knRNJgtExT41sCvtEKonwcPnH7m7qy33e5aEETDWApMFsKXquDk",
  "key12": "UJatV292bvuBCBjDXNfRJCBbU5CfAsLPXqKXzCjNU5mky1uQcK4HkSVZjuacKk6DPnoDHM7u79NcWA57bvnf5xB",
  "key13": "4XXn6kWGWLT7xsiDbcmhJvt4BCqWLXxD7CYj8GavzJdVBAf6V1bDdS2UYDeyoBTajxTLmAxwrYPKMGfiNBpFrTxR",
  "key14": "2zuwWL78FtNnc3HeSuNEtDTPwQ6GM4pZL5pPxJZmUEDctJX6fWArAiD49snVeeANqC18XWfCf6oRKa4nVD2k5oW",
  "key15": "5H6c6mYmoc7H6cN6PU7UTFQDgGxH3ZU37TBVuyiuwBjSzKunZFaHYkyvxyn429CN23TqeEbjj4JBqjGjHMvJwu8P",
  "key16": "2C4eUoYFYSfqFzNyR3rQnDWhMpU6huzEhHcwo1kG4QSdNRvrV6FCUuP724FkfXRhq5MZRZrk61v7t6AVZNnHs7P",
  "key17": "pexzs3zqfyg2gvvfmshLfNFQ7aBogmS78fwm36hY7hKrFqjTn9ABHBmvbh7kLRTLCaFgAf759tg1V1KToJoZBKo",
  "key18": "2ukjy72qYmFP6v9vjpzUuxCqQdXWpRe8pqkhSrjqujybRiyJRkR4J4WXR3ojQMRnnTUzxTV75iNfAuBeL5UY4rFz",
  "key19": "2TRnhaFnXbpNr3gvWNtGi6poxgcyMQnWmMW9xVAZC88dkwSVB9r3Mfqrb5KSn2vV3RVsV3bKRg8RWVU2k5xcp4b9",
  "key20": "2DzgJfKTcL3LUFf6eiyykFfM4YUufHJG6YvPfvBk8t38F2wt7Y8ZkaqL5aNU8EAz3oomM2RZgnVaBkPot1dAcuLE",
  "key21": "5na94bzBfGroPuWStGLYUcEdXakGpQuriP6tbdEfuQnE22g8v944sfJsWig5TakSoL3pYUnG3Sf2aTZkLuQs5Cza",
  "key22": "3JbsNrESEhMmGvDJovpP8sGHPGRmLAiwVasZB7PDgT6MRB9HMD2h3t99Lc1ZeTXSpszGjasBPxZz3PqodPmJFjRM",
  "key23": "RprQZZzbMWqtHvkYPQzhz8XydyQqRGVpH3TZgsYQugfoSpmrEwcEck5kgXawDbEvcqd47iWphNBZTZWHP6zi6XK",
  "key24": "47wUwfeEK23dnxPVHJkKeAvrV8EBtDttznJytacqn2fgxxinpEia6bZAedKG4JrDiofJKHWEUiABBqDZm5o7PDZk",
  "key25": "4YkCRJKnTF4U5gKCxJcT3bDQQH6pYm2DYAX7WFUDE7LZFyfnupiPK5Bx8XRaDWvapapKjnpUArhN3qLb9dWSRDUY",
  "key26": "4EVt9KSe5wC2ajKcmaSFQRW9kpqF1canSvd9w1jukXNhzYmJMmM293sTBHgrY2kbWfyXkb7hAQiw8xQUggPyQw7F"
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
