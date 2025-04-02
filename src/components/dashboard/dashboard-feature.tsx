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
    "yrdXChBMhwuyZkYFAwDJJUzxxXWp8gWAo9Bxhc2ZzMESTNvGhe2YF6fxP2TpTKcCu6aunP8tUakw8pVtKozx4rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJgp6tQtivHviJhi3hvbxfkMDnaSmmAHWCRAHtxCS39TWFYa94RoHwUS6zpRMqvbqMABRyi7Y5SZ4PXXz7UYhVw",
  "key1": "3pBDkgnvq7pchHb4SDbYCbnztBptRBY7v3WknuYf3817yE1U3SDHuAPmSEMXhAHNqrNTXSCiN6qqwy7hGSe8u5vp",
  "key2": "8CAB55DV68xCL3XfzCMK9LWQFqL4rt2SBcws67CWodX1cJxvyfaCqWr97A86GcxxmzT6RhF3zUi915e3jg2yCZu",
  "key3": "5efdYPRupAm2uUYmhojXjWUhacYq114yyuMgSGvkLBa7CfF1Ke6bQcSqyc6vyxsnmLJ4wFJqr9gAZTmAK4xxnBor",
  "key4": "3yTu9LxXfB9i7GZV428NFe2MMutaPusbnwbD7KLJMJ7ed3Zwn8gbWLJcjAPUEMFKjVumZmkiLuMgqzQyW3HwhY9D",
  "key5": "51VMT4vMxqhhjSCHUXUA1956gBrb7EeJFvdqaGeAHzK8ubRMUdwR2Dvn1eXCZCdTYQmZMMUTBzaJyqx3sdQeYvFQ",
  "key6": "52L4daxPmBhgKn3GsjKid7h7bCqmoZDQCoAh3M97HEotVhrCwbSDMtLDENXWzynUvPBmU8KifmfZ1NnxwugjSKB8",
  "key7": "32w4WZ4gcZR49LBeiVCkANLy8vp7juvSUtLEeDJExEWAK97VUN1kAvnTZkcMfQ55Zyf6YKxpfQwrLTSxiL1eYQj8",
  "key8": "6XaFgmGgKK7PQy8wJEEqFsGuWwyBUCaSNC7vaNwr2bQXqLZdSd8vGdV3tSW6tE18L9hjNYMNBtZo38EkfLqzTmx",
  "key9": "3QuWe3iAA1mt9tVGDa3H1dht5js7hcw1wwXr4sHxwFvyikbugVBwYaKnkcs1ZLWrVryg4fga3LKiibEsKke7SoKo",
  "key10": "FxjisFprauRQMxfjtutn6Ccaf2AnHF6NzNRMnpiRDcEXdba4prxurnFwT5uki6aFZi7cYmUjwvrkSkMGGpSeArE",
  "key11": "4zxpNcNqHrewUf9EscVHCTXxM8uq9L6DS2BtmW3EpEuvpq7vSNjrtfi81FtKiXWPWAmpvL6wU4KHim9VjDmxpTD6",
  "key12": "3tfmZWJzAUMiUfFATLgUSRVadb658sEDp2jJopNVy2tEBR6RcrzCajnQKQeAzH6dXb1ngz7BVYscgax5tzGNmBL",
  "key13": "55BWHhXtVQjsFQm4ppfwEJ8gMJRehLrMkwK19uZQaVnpHKzRUo7cuSi9Pbgx5QcLgtFRLPncjLeyQyCVUgdZHAKg",
  "key14": "5AMeiR4NXdydou6N4P1vmgXuPtEyLpY1dYSwGLHXGzRp3Xa3fTrGJ7XHL2EZNkGCfJ2VTkB5GWhJzSb34Gpu6HdA",
  "key15": "5o8dnnC13jFV1gmG5CujQL21uCM8MyxwZ38kV1UFeXcfN3QG4UbW1TjzNr1Q7PktJ6Uk4TfheM7pwrkb57ay5cLU",
  "key16": "2FSmvMQDCdtwvz8uC9AoM85vMs82mX5wRwnmHe1FSvUKg1rWZdH2DVsUUjYWd4NdLScVi98rpDJ8Y776h4eLgLyS",
  "key17": "3JSMPHtJXDFua4D7KwPGsRhB9ak8zWemFza9b7LF16LGAg4MNGP1sL6ESKCFyXJrEEhJmWWqC6e2L71FERAsTUSX",
  "key18": "3UQ6wYVvt1Zk7LfdSciF27uUZLMNLejaUuTXdiSHvWZKnKJbFtwGkUtJhqgJSccgdhvCssQNepcR3HvXx8mpcKbc",
  "key19": "2wEQp61u7bfLgvoezAXfmp6vjtYY5mXxU4At25wNzE2dMp6nqPaj8vaQk2kmLQfspUfHQz4tvrfSqGnADbcPimA6",
  "key20": "5nL7wJXSjBuYtcnqGf6xmrtpiLcwdceYiCow1wy7rA4q1C3x5UCiAy6zsPnD8enyQs1Q29pVLDU9tN57CjD2rKCz",
  "key21": "3wMFEBrzYMYmW7usrFSFgd9fMqXVSu6FjJKpyhv6v7YcaLWBsUf5xAahjxYAMtrknFPXeScGJ6iGkt4v1ZTxekD4",
  "key22": "4cAjM86AT45bTUTGLwmzfNvPdnJnZrry36SRFLSv1R4Q9Rgmy5BpAtsDHbjACKHomhCzyyBTeALJSife8vmQRgK9",
  "key23": "5d72P8B8NUuMptnJcb297J1P37rzbuRStdmbr8YuBEJkErVCo5uo7nwEfABLuURYzK8fcU1MtPkX1hDqf7NgvC88",
  "key24": "3EA2MwPBFDwY8f4swEFpzGifhkrAiRrvdNqrtL2NecBbtmyEs369g5T6qExQU5D4WFhkvvMz4GfaKfyNFY7a2sqg",
  "key25": "3PzmGqfKo2KTeqqRiDLwvsPHU5S5jf6PUAZKhwTiBNztu3sPux8jZbND1YM888J18fY3gHAmonmdo5Y5nXaZDGDF",
  "key26": "4F9DNK8JwiQDpNiQSqNuudApfddXHBNBLMLFQwSR1KKA9rz65g8VDtiw2sBELeDW2YEyXTj3UYPznMMHQWGAqJkd",
  "key27": "4hHoKsLXuaW7dtA6peo9GhewjDmfWG2utrRZbsMo9syYi2TtNXxTdBkDic4CiHaQXtzyXtPJRfU5GRDhmyQaqMBp",
  "key28": "5ofvZVgnJdGyxNrEzwjbtAUywUsLsmadjUXHnqYJJMEbGcCywEVmdWZxB1ZsQk44BepZo2Qiw9J6Z1PE2qVx8WSc",
  "key29": "2QfzhHX8ujWhLo7DYFc9ZYchxa5GUTEVgbykUZrR1bHMf364cFhtYDx6C77L5rZGwvXxkAcDZJT3AhfGdAPo1nhk",
  "key30": "nixrUcwCNZ28zcAuMJJDsGYUC6WhUv6bu7HHmUvwJ4CcE3uc4AQnDAWV7RkqmtthVcBccdsScQdVuVNfB8xqWRz",
  "key31": "4FRk1MVtCxRLDEYRF22ZGZyjtryR4CRtSifKABUdg3nhKoHyWvrShYPu7wDUWUseXTQeU2DyFLSxTdqiRoyy6Bui",
  "key32": "4b3Wsdab74MQ2uMF375rApBApbj9MrnU77hp6ZcSHZYBsgZd5WqYcEjDGNJxk4XAccdD5MC9yyDGoPL5GwXfcqzQ",
  "key33": "46eiNPiSnQXBFjPh2eUVcotDtJQ5UAs5b7XD9k8hKfRAkJEbpLLwdCw2KZQQdtQNG48CRd1gH5x9jr7cdUiD75UQ",
  "key34": "2HMzBfgbP5Ee8TST7LD9jrqmBPSRfpBvFmKTuHU7h64jbeYheoj8H14ft7TsJ9b6WMHREMQ69xTBZf6XH65R9nZH",
  "key35": "3mubR6wat7Mx8RGpWEFhAfAwnpJC1UrnnhM9AyLZf3rQ9W8zZrQuBbQcCGZc7zuEkHgJWWZWt43hjUD7z1k4UtD",
  "key36": "td96frdk2myzs4Ty1URzVrxMfxTADtoSj5JZfPC1nMmEmTcJ3Q9LTYdzeGvoGiTHNBwEmdSHEy9z8jvKfDn1vFg",
  "key37": "4NdhW4usp4bFsVvukxgPYvSTyjR2ojoya9Y7SDhw9pnFTGK27USRB4EEvBEQRKo4EVksweiaufpDy4onoPeuofjH",
  "key38": "2prSR1bgyxn3ExJCnaXptqiSXibGSEWSbPLNk8MF72FjSYRsuZvLsKYtKSsEZ8kfrVfyRx51FHzqw292JuZj5Si4",
  "key39": "3FhubMZYaxDNxiHqySVWf1qmTB1cW4Wze4iPjFuCUc8qwmYC4dVm4bdMekijtghcuj5P9uLifFqY5LJiLtiSSpJL",
  "key40": "5jHuJiLUEzcyaBovdNGgFkWmnzCzsVqpXV1pfUMmvcS5SJFyDmw7LV8jGC1ZdCmjCMnjrQ9LQfCutqNbMBEk5EdX",
  "key41": "4scCX3qWWeTLKMGA5XaCtVG16o46L7SxeLFX4bYBxdHNHg4Kw18MPeb4iYJmJ8Uc8wmwghGgU55ZxDRA5E7ivjmU",
  "key42": "5oYAnMT9QUtRKFweJ9JzXJujR4UGRZHLqd5XYotjEabTHGRDgqWsU6jHL77an1ctAGC2HAB275HqkGgDgjNHDg9D",
  "key43": "2SrR9AHxJFmW3aLJ7gTdzGK8znkbSDzqnMku3SigWmGN3ohtYmWvMpTez6sLwz5akdxzvMXJibPcxwRRfWVR1Esg",
  "key44": "3TfKg5SzYtLaxN1uCjy9ysGx5kbMWs2iEdYYUegirNAsiqtof8LbdhrBB137EuMDg54jqQmxDFffcNFvZQugWvaR",
  "key45": "47kGwBXoUJnJ1A37aWGxtWmqq4kYaVcLRsSsUu2gGvKtQqE6WFhrrSAwuPLgUz7MkVDSq9JdSoKakUwTHgBB8Vfk"
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
