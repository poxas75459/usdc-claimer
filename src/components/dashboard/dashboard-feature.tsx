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
    "2FeN4b9nF4FcvmpiHJRaNHxZzVJVyWH3nXNcaw6whqzaQUEMnz1XV2SvTzWAW7APnhVtv8sho45aHwcewkRqJcnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pp7o97GuK5fLWwexKpD9uvNYeL88UAmsu3uGW5tUcfnGcmRwYih3NfAfQqiaAfHXCi9WrnJb3acrAL8dPFaXCf",
  "key1": "247puVNsVHHjA3fEHyUj6ezF2bdUPHioGmEUJc2T7nxraQgdKKVmA2vV5j5r11EbWqHeX7mpZzLRshXZTtw9RCf3",
  "key2": "29LjuPTckgVxkV4iQhy5bTp2rsvpsftooKuKGZmd65ivJHQZahuuo5r7nYN18THa7H8gUuQpEVTCHXezH4P1QwFU",
  "key3": "3NYZXzUCZi11vKxQno5av8dCTRdFNAdHFwrybjb2njZzyJoh1AftPjfwSWXhwczrGYUQxWeiAYPCZuq1E6GXa6WE",
  "key4": "WC4fvku56PVGdn2FWpYEuKcJQsUwQbJ4DNi2x1r6rooZJFn64NbGd8t9sDBwFHKhUyfbGj7qGPedqSEG6S6iXCi",
  "key5": "3EyBnNqDdNoV4Z6tYgqsdkovLxVfgbhSk9tXMLBu1dLuesf3jFjvrk5WamuGPRVVYnB4oSg4BPiXEvCvEYtywz5v",
  "key6": "5UwgpJfmvRBnrFFvSd8XaHR8fzEUN1aQ2zq4LqRfiRFjQVKpp5LYHss3HBsKZ9kxYMzCxi55N6fsvpUZ9BJZrCGC",
  "key7": "4YWPZiSKptGx41d3A5KGRR4CuspURBpzfLFWMueScu82n6EvTkLvYBMZJvmnwgHzTLFTjsmVxoRN28uAcF1hWHAo",
  "key8": "A3wQ5bXEfzq2dV7ywJtA9c7wSWjroVbZPSfcUm8NZTuPPnqcan8CEGyymTHFpTxFTUK94p6irYGRfMWjWKdcUeS",
  "key9": "4S912qtCEr7qmEWZJGwC2BAqYVPv2qTKMF7d9hN7wiwvSY1VGNbNY3FzWdA1WZpsCMhiCLExNSHZvxX4PfYGJjWD",
  "key10": "2SNNYgJcQZywTkGYSRZi4M6QTUQQiComyCJMtBwENoxehePuBQ8KGkn7CVzPNRvidkRENwn24GXkkQEaBCqg86cr",
  "key11": "234qbZRirpAtTupb5BEhtp1czBbSFeuPhVpaJtipVBqWf5bWkHwBTK2ngFarrEpf7MFbp3jZBHNwriZk4cz1LiFj",
  "key12": "xJn2mhBjy4CMVhS8r3w6jViwwzMmSSzj4AniK7ADGqriJDd7icwi8TYEMLZGSys22u2QghgjMqF1yzYtg9AzrtH",
  "key13": "2fjoaCz4Wfa1JkWfpWoiWzGwNW7bHiGKzPo6hhuyiTc6dxbTawq8VWYvdKLWs8bjajaNF1zAehLR4ewSeeoj6oHN",
  "key14": "4YeEG7H9DdCZLPZN9APrGSFHWhDotySFuto6FVNWjGEEr5NRfguWAS3B4vVWAmHDDPNgSMgfxK33c3wH85a4tHRh",
  "key15": "275V59Vph74mtQdUXp62hZPYtmRsMMYw4hEvLuwP98CwwLh7HdUR26QM33mjyTpyjgKVnd1XMPacf4fA3m36hf8W",
  "key16": "57qB5rs3eFKR6rW4mNRwUryi1hi5mRrzdcv9vTyQEopLhbSkBfCrcfXGL7G6UhdPZCzzJsBBbr3qW7Cn81iFANS3",
  "key17": "uPerVKwCc1j6ipBzHFkhu85eLWzYhCecUUkNxW6DCjSqUqeZPQP3mEkcbAF2SvYWKRtsexn1MBwubmip4PJpHGi",
  "key18": "3MxfEtMa9JgWDeckzaygDvUupz4Gs7tKTnKM4hgLnzcT9dwk4oU6B5BgTwLzr1vauqhfRCVp2RRJvsfLtZANAQVG",
  "key19": "5nV1CVjuBn1fCPVABea7QYWAzogoRzVnSkXAkdyHMCi7PXWVkmv3eYowCqTbH8KNVsEFsdesGFiBxTm5Mgy7eBcD",
  "key20": "4we1kTwfc7tgdrKVUisgsRsdDdWfhBR2vtBBkRz1HsSBp5Vg3bY1Rw7ah5eoBZHGDq7tJpZrn9hxdpFF6zm7djAk",
  "key21": "2bRqNpqE3LBdWynhheQX9c7fU2dcrdibzSHKSpyecjvPvkMBp2bA6q7rKswiikyqwdcsYvrdhJSSDgoeXn2PDJLU",
  "key22": "67iQPwskxnFANNkbik5zuFkMtATipYcAqgp5zqVej8Xt4LKndeHkR58yhYnWcHJEKhSCsbNWw5aeSbr6mpoQD1QQ",
  "key23": "nLQchb9qN5soYuYtWSFgNsodVCyM8dMWMisp92ryUrH31GBGaskt7pgawZHWV4yn7a3ZGUVdpNTr6wNZEBRNz8s",
  "key24": "3Ni7eu9jjzLxAYsGYfVGrGHjA5jN4HrLa7iot6xzpEvfHK4YvGVoKGpHah8qDeSWcUgKp4AyTFNdvsQ1bgdEEEig",
  "key25": "4U9FZxf6rmCjFqt6HhonU7L7fhSpM51VTHRzQgQApZgABA9eh4RENTtxiDrZGkpZU97FWjs8t34gfbLQu7fATWfd",
  "key26": "2kDs822pZAJjos1nmNH7qbQP3bmRmx87ApqaaR66JfGd8UK32AX93AN7Y1MjCnw6XpJoj23PfH6kgpeRP95UaMWj",
  "key27": "WPQTmJwbxVYs6cn6WmvVor1i3f6NW1Awh4HkbXbDNARqCmhFM3AVoVvJbNicEtBupiuzCnBf92DxnYma7HJ4yzr",
  "key28": "3S9thwZToXnXA2WMRJ2u5WJ47hEkyaqdG8zf7TUoRPqLD1sxuhgiomCkXTGQLvPXAyRajfqZqqQL3uxWXhtRFX4v",
  "key29": "2FxLNNX9k6kfZ71irrdXdPnZnEUAJcfqTmv1owrtSTVdxdayP6o4udfaQzSsZbKhNrizFCXgho3PS5TRY25NWFCp",
  "key30": "3zDQWej6f8wDR7kD2E6jiC6mRCAWE5jRR9ZLraJyTzY3Tuq1uiTtL48sU4ZyrFtrUGiRHWmGeBDuFxGZPJscxpqx",
  "key31": "5PrYdp5AsrCd3G2sHQ1QHNoQtLbZMF41yRSuXxSKzwy7UJ3uR6JDYnfzqNtDSW952azuH71r2NhnCgdYfYMPThMw",
  "key32": "2ATMMCcmZTMcZ9QxnQHfwubYUhsWUwuvMEPZGWphxryv3AEd6Zjiqtno7ffpTqkfZFm8HsAJHZkFaQxH3PtoEMVe",
  "key33": "3eBKn7cbctih5fC89sEVUuHsSxsw9iPF7g46Tmz6ixX6jmT5CNxzHieMX956Ttr1QikQYJvvUcZsVUAAPaTvUeuo",
  "key34": "5Sc72zeY3ud6uyitjzbRuwZHkwS7gWzUpBNomaC5apVfBAdXRrAcat1pRmH2hacHCiS7WBtQHyabdBHGvw7AgUvR",
  "key35": "LJgdEVeuq8j4ZsHsbh1TN6RtLmVXJ8dMNCzvsVYYYU5fTTuB1VE7ft81zu5cGD7Zy1csxNn1jjzXiBm4D61Mcaz",
  "key36": "3nScRPPLqe6YUgxXe3RqKPGAxPQuaGkaikSuWAuFgqYKFJTuTGxXnJiXSqrv8NiTBKFL77QQmpjmWoYNkhixf8E5",
  "key37": "66LJoJ8XomowiH8quTgFFv46LV5oJkhrr5PV88zT2B6WpNP2D7utpvAVLGcm3XRi7ZtYLXU3UHTajNDeVipaY9YE"
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
