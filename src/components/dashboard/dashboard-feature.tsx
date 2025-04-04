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
    "hW66sLMAgRmEArmEGHCP9jEAAGFRWDeyBzuUoVitfYbDo5BdFLXhj8zSr4G42LJEqWhSRffAwuxGUtyjgw3784B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMwL6xvDCXiPmRHEpm9eFbwFnNCtvmrQ9xTAkDxG69rkUtjtvdxgHEY8CbgM2weyEfVrtJGzJeM21sn4HsMPFFL",
  "key1": "3xkDARaJ8oY7jUAzCRvVtf8sB7BggsXew1pSTcwvBjAfzDrsrRM8iXVXuegGC6NmZPD3CVpGXpxuuEuTj8PJtCW4",
  "key2": "3HvnTFPQwxPsQjnKsL5HKwVLccnGM7vzN7Xwq6KsU1RFzfbe7UMUpNP4C1U4DpThtUHx19LCy9pn6EmJK3z6XZeV",
  "key3": "4uxNPqKjDt9gzr5AB79xybonjLt6MDgNu6UJ7TEDCoLHvkKwJdQUjXFUWztcZq2vW6GV3aWMad6WwbWbDxdfCYyk",
  "key4": "2hQsz7qghWt6VcqAXUZ7DSqtr5LazXSk6eakwaLUzHNQTXT3usxuVTVN5Eajqp8uGiqBEk8ezq2bBLu6NW88RxND",
  "key5": "XgjXue6KZQXkeebNnKYiR86mKvNtB79LkmUBTXd1sJtXsrHoQaCvMZRSJvHzHv8ERY4ULykcnVhQ7bpXWGGCqsh",
  "key6": "2UMxx1d47Qi86HZBgkVQ1R2JY3xgsPmSvaTqBaubNVbXhV2qHaTbQ2oFTT5GMrcFUarMMuHfwjkHAgXR4zDjQo29",
  "key7": "5Y7mLqtm7foSFJPtDBAyksGk6tKE78zHEGsGmDjzoHRWYVYHiKptkevtnwAcxBx4m8vsKWAyQexBS9sdrF6ZTgAX",
  "key8": "485T9yhZFkAvjg6Qg3XUrm3LPRAJVGm7Q871F1moK9VADNBvasXNN8UqUTuE2w8uR4LMDxpbgm5wWj3y6Lid7orm",
  "key9": "5NuoNTCXLJU5gMz5dsjYXR5WHM7CPWQ3wzFosuWWF6CK33eYUfyoMkFMCbPsacW5QYCsSWozWwKgU8dQBPUywLZx",
  "key10": "bBTqou6Yi45fxmn78g2ZuQGDEPpS1dg7P1fbK9S4KJ55FgjR8A2yFRgy7qBtbshpL1a6ehZrrF4E6mJQyDaRnhA",
  "key11": "gnv4muogJPD6LGRF9ELWf7Zi1H1rHdLtD51GKbqcKjpU5aGKYvMf2bQVsAGssuVTrvAHkg8YiyTZVNn42P7mZ4h",
  "key12": "4icy43W2q7FinvwRdDtQfKPJj4pvkp5cZiyYc5iSekW6Gnz3j3rSn95qVSaBTKs9xoCqzyU92W4e5xHY595A2LLj",
  "key13": "65rc3kL4mZEd5ggMzALmuo8hGZqYfLfAGDMhWsgthRgZaXMw7SAGbRoA9CtT8B615ySJu5WCSxWgu5tgViTdiCZy",
  "key14": "K3i3Wwhubz1A5sYYL8s8if4CEqopgbJvvynCnPc2qewHV4fV3GrDz3kRCRkb5CeH5ap7bvu7qEa1UkBxhX8t5La",
  "key15": "gzvzbh9njRRZBTCwQ367VvG8mLauSCoeJLgviuGB9gS36gcHDLF5rdVACHF9aEX5oRnSxF85NR1f4EXmxfkQ6n6",
  "key16": "2yyFs7NiNb2B7kCc8J952EBLBigLeSU19vSd4g8E4oa4GDy6C3z37PbQmwFFK9zxfNzSDGQmdQPM1kdee4wkLSjM",
  "key17": "3pGFEfkLSBP1uFyK4VZTQ8b1D8XWWvp78W21K4WQBLoVUXuAYtj4SyM8RDkGt2bRpXW6SYHgpA2uG4Q6Rc7Tk4Lo",
  "key18": "453Mttiaypa9YaxAFKouTqEkEFkxc2E1MfEXWpFnNjG4Jn49ju7GkXhPdryQmqfizpXUt4ue8SmBg8NWFgsfJbGz",
  "key19": "2t7WVyN9Qgps77bpmPMMHaiDCQjAGUN53cn3LCeEMct6s96EepvEUeBioYPba119uvxdkBz5ZVXnKtq6rkgDvBLv",
  "key20": "5JRhrQ9F2hciJJx7dfN6M4TPhez6grggAGojZfn9NNac1rxvVJn9pHkkNbYz3gZthcEbkHUxQJrn19ZjjTUTW3RJ",
  "key21": "tztB2g3ujGXrUJSFoVss8BkmGvFZnkUwSmE3F5tmXgAZEwcvjqHu2Yokn9qZidroGv6Smd4fUAPWszEZ3qdiXKR",
  "key22": "3e9TcsHWp2YEgPwqsJQFya1nUQj1t6QQn1XfY6MLa3YTxPcBhSKN8yhrXpRLNocDvYgUnTDx8NF8KAFuYLkDjTVd",
  "key23": "4Y9JRhc3GZ4ikA4ZphYg8pxkKuEYQBLuZ1mDzTpUsqajHk255BAgpzER1W8rDsmsAZztZWqBFfVXzjrf99kXn4BD",
  "key24": "5LxfyyJpSG4LzbBqnaircaRY2oyqUyzVE78w9bXhprLbDmyZijexmJdwVyzkRja356ySLvd2akxKkiwUCxGnh3LX",
  "key25": "xcPwiohtAAcbB7uY56FY9Ng8P1Aqnfo4G1ck1bPVr1X8xJd6dVnsrxWnMNBcq7kqrdPYE2LE8e32PhWpdTtEdbT",
  "key26": "4Pjg1HjAyyGnLQnkpLoe5mUvYXL5qHt3KZqvWgdWKQCCwpBZGbjv5tXpQZeFSzfhWgcXzwJGTjmKCKBVzhfxSjZ9",
  "key27": "62wKFXbF2zJ8dBazuMAcTSK4CNHrqT5ME4Skxhs3dfvwv4CNfKEgHD3432UPBr5UmEbTqXqwDY1qccPSfP7B6LWP",
  "key28": "UnJng5nWj9CMbUNqrqWgsF5EXgrFPPGFKMTQj145Fzf9QukBsSXb6fPyqFKxUJYe91oErj69LS6csPrusaUicvT",
  "key29": "66k5LyAXTt1KGUXSixbfBcj4gYJfHjzMEM8WnBcp3wi1wBt62MBwCvqiyExUJ4rY1QRUcFYiGpt5pfkb5fXdj1t2",
  "key30": "3pAtC7xFURAf4XgeiEZRCuZMXpg8E1dJRwpgYmkfYX5gxy7zu2CLWCxtVhWWk8kPmBo5TfQuaJJDyBq8qJEPLvbt",
  "key31": "yT8qdJXH65hN9qYgpANxXYyDLZjtPqs64bwLSRCKHipteeez2PvMFZZDzNGXe2NP5qdSaY9kHQF8LPYZkewLSWz",
  "key32": "5jepHvbviJaWcuqkTtae1cS6sxdcmoHVRF7z4A1sM879AbtWR4wdUrW3S2T9RnTBaz9jrQcfScgp8Pgcg6C92pLc",
  "key33": "4ixaYF6LobUKwu1Kk8DcxTNP73b4NrXnvY2XrWs9caKfcxJkYbhGGnyxKnb7v85HSJEQdcrugDP2kpQJhGsxwvAR",
  "key34": "5LJ5HMayHPcxBWfjfo4NVw1kwv3sMtqM7JTayh4Hv1kCrTns5xE8dHCpMTaSPWFUPZZvHFb6oMbUFufNmQcTTd2b",
  "key35": "5M3UheR2esakYtKwkm4wN5WqHeYkxkUCzncvAJfXVLvst33GdofeK77wy856BBsvoYwAY61Rft6nAfSuLwSUS12W",
  "key36": "5XucPkxMXbbjrns4tC9tY1oLStyFrPBTS3iRVSqgynFCTu7g58tGdiuV93pHLZbzCLp7p9tZNY4bvQBxq1RRLprU",
  "key37": "Bbu7L1ndqngFaoVU7qEctA5BQ1tC33VLkC5K6bo9Qz1dCnxL66kQmuVQcr5G2zjoQimEsNKNPrPT1uQFmWJd7Yb",
  "key38": "VxNnUVqczgRsAEgWfX5Y6oqpMDSNqMHFDBtAiSXMJpY2CZm9i6SGiqzNzYUeEWK94bbAQGEvLwkyFLgavtjrw2D",
  "key39": "3UAbVa7AP8JoezyibSNsAYEGdaaLcYR3NrieNpTQYZ6nZbF5p8itd7qRJVoCymK87izdYLzbgYqVTxwLhqvhjcbX",
  "key40": "5DDbKmwURtHdsoTCypxR3YYZ1EW78dbaHgK7SgwvrFs38zXp9K5WGenSHxx1E5psoN1wXHFGFT6ZwmNyPdU2o1NA"
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
