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
    "5Tdo7d9zGpx1RfqxKvABZR3EEuhTyBjkprFGeYmN8RYcJg7Csvs41rgKDwr2DCCVXoFTxn4A2xNuFzQo1NUSg2md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXKcDziMs3VSfGx16MEXEg75g56niJ51DTVQ6JZYJAfnLZcNZhq6on6p3SngpNPaftcpYUDQ3i7A1T7wpNEfd2F",
  "key1": "4JCE2LVfaziqLjrRLyf88XaDKGDPAhGmVz1owZDXdNxNWT9AATLJ7zLjuVfhk6b2yVJaUcswKWymqHFrGz4ishsU",
  "key2": "2Bb8SENnfckyVikRbAYxx8VTyzNW2rfAgbWJ4FKwcvEHLAiKg3svAWdaixQH6J7mGafHKWgPtP72Sd456yBBHbXu",
  "key3": "3aoE55y6QdJ8gV6hn1LBw88TUByyJqEmu6tqxRtarrd7forWacbceUTYqo66EZMVZiUBA8U6jYNhtMk7a2xFXqcU",
  "key4": "3ugssHm7pVqNFPKGchPLdCgW9q6D4nLVD9DKashUsZ22xgoXU1LYnwHZFQ4LeuGdAdQYWHAHdptaFxEouvzwdzBg",
  "key5": "85GfYp9Rk1CBSkXmXujQNeu6hUasJsY5jSNJAQN7SMY3cPcPAismbTbVTyxmp3mAJqVY2shf1Ra1592eho7n8hW",
  "key6": "2UVJd4A9Cifm2oQtqdJ9A4kPLY8sN5t9McfFK93TUoLwELRjvkJrXyh1ygiXDU9r4HRgCLWLd8MLec3qbgGbUxsf",
  "key7": "GotpgF3arNs97FMj4gGi6yDwm3dAR3AQLfGKHr7iN8zyEecTFHQBbM6Mw1a6ixEbrX3EoypkxpPtJBVMKZzLXY8",
  "key8": "5tUGt8Vu7w7NePmbEVYwWczVBfVMixhHfHWiW6Zq6PhoADRpWBLpag8ZDXbdLBrq7toq93h6mf641T7SUedVM4KW",
  "key9": "52ZzjrFxWvDENziHNS3eWQB7f5khmye7CSqkgfdtbzHkMMkX6yfuasJUJqyQfGBKn9bZoXdQskNnaDJa37vyABPs",
  "key10": "31NtSxJwrjEMj7Mod22rjzAo9ofgTMDbKuk9eHngbjmJdTkQBLSL42j2kgYPScPLz2G4Ji71978UAnsqWYM6uh8S",
  "key11": "2jbteexKNKYP571eAfHKYixSKuEgRRecZrqDpdQG9JA2Pj5SU2qyZS7wdDxp82FoxSDqvoRBFBoEJv26NN1HZKqU",
  "key12": "wSfTV54r5EAURyoieghdQbyhXXnU663xYEaXRPHv9AceN8wDyXq9txizzSMokw3PcKfbYXPNqLP9vLGRL8gtefM",
  "key13": "3pPHvRPhcir5qKVdqxPw1mdDQZEHxgwFu1LXEg4C7TpwSJzyqdZ7RKG11BnyYTmmfv716HCPcZexeBJGGXtMjWWr",
  "key14": "67DHEe75pr5gB5mvvCqvLr3WR163fakSZv2ZMgRSBsXKweVPKCrQsxwLrs6dCPDvCD38FvDZbGCRefRRdsjGviLp",
  "key15": "2vjD8vMwkScxgCm8R67AdHUkUq646ng1EVVGUKNAzHJEhV4N5fLxUZzT6tM7XmjwRbTLDQVxNk1LvYX8SsQreLZF",
  "key16": "37VW8i1pPvzzvXgEfNDoizTChoW41vGseGYS6BqYbAZvdPzydQVq5io77hMKNfmHZK1nXp5zcbRnJYRyBSSnFpBH",
  "key17": "2pPzLS6LnJtLyPqX1Tds3xFZNem5DVLpsphga9wXaPp14AfNuPVEYMPXSa7ne82AnC5qTBZKjxsxoHGJVRo67sZJ",
  "key18": "3bfA2erEYe95CXKves1sw4XBeypSwyJkvUbjhkB2c5678JpRnSkSG4rAoGoRmNwjUW4HjUkPo18LBLRhdNE4w1e1",
  "key19": "2RUMG3VkKXHQ9mQWhrscVjYeRtdaiAEWXQBQT3W8R5amY74YNEFb33RMfDYj7ywXup3PbsRsZNqar6A8gxNG5NCb",
  "key20": "3b5syH7DhzahKzT1sXh3miMnwysRQXqhCLCfTVCyXsuEVMF7xEpTiM2U2jEsDVipB2HBWfJ1dMupWpXGJUPdT6ii",
  "key21": "2yG6VpYs12cQAoLnB5Ly6EvaXdPL9t3pbSgtWmMdGjJb7p6qpZ2jXsHi2fq3zQt8N26ZoGon7NjJqUzMrCE9hg8a",
  "key22": "3H43KpapCUCWu9FxwpBdxGuxhpcPVqR9g44sdEF6PkQCVR2qVT5HnhkYNozMQt8iVKi7qf5pi4QEFtwAuqRdmrZP",
  "key23": "fjxkqDVqGNS4Xk9rkYHQLCoX5Z9Q3YVVKSK7PkxKEfcJLvJwf3yqsuQPxeCRkn7hz3Vu7pZUu2Ha72ozSeM33QK",
  "key24": "D1BNjSq1UTx3h5sGaCLcWSa6dtXbhJn3AkoHPZA3bkAZ2bixDtPyXzsbDLu9gWaJqQRZapYeN9iPs1ngkXX7qsw",
  "key25": "XqhRGpKx99d3cHYfqwxMbAcVZ2kkmeipwp3X1x32uo5w162g53GMknAuQrK82pr9J8hZthKchaUvvQ26tqcF4Ji",
  "key26": "5SrzMxXpR49yqE4FkzTJrDMPSXmuasUkfpSa8XNrgbixvKqMDW9o7ZhQAE89cZdRPPcVaF2veBBatWmfQyDeBUhL",
  "key27": "2NBuQHKXYaPdMkyCAkrvjRrw792YiiuFCqjrstQ1KCwZbtkTajnU33xBwgZYhj3yKcspRmPrJiAbbyrEozgWggML",
  "key28": "2L2MREiTW6k4UzZDmgvtsTGGowHRFGy1nimc5nt78sUYvV4X3NeuLHQGiTXPnCCWHkavyo2u5M3MjepS69WwLc6M",
  "key29": "37iu9Z6vH1jXCEGDhBJ2KHGDMrR28Qo7VjzpBoACdow5aeFwCEP2LhK9LGnp9nzNE5YTwUYqQpN3GRjfTUCxinEj",
  "key30": "4hxB2gfJYtSGMBzwxw2YwqKYiGMJJf4KpQ1c8kXWYVZk6uc5r1ZThkU7rzsvocCL47uaHmUyQJrY6kDHJNpZjzfP",
  "key31": "2yt5fiysTj74Lwrx5hf7T6AEyZxBJYxeJae9L44yBqJLEEiCmX4YeHPTB4cYY2zZEHxLn3SZ5SaeJjVFVMV5qLNx",
  "key32": "2krGMdN2Xvbp68YG6JgNhQrrWiTHAygCDtsraARHv5JMpixpzDz3PmaXQGrNgh126f9G49s73A4Hns6WtcRjGWfA",
  "key33": "5JGmvBvm2UZ8nBzRTtTtF4XbV7mz8mRbYT75iJpm8QWrDfraeEGVu53TXjGRoPRsAjsT5EK3ocXjSSTxze9FZ7zU",
  "key34": "2TFgFjZ1xptP8XppTBABevr2PxD4ZJJziriLq5LwNRxjWon1in7pp2tRmehTRfFLCxmmbD9Dq4MqbcZaL7j4Y9E6"
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
