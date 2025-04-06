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
    "5Acg2VhZD5p2XQUBnjHuKtjytbrY8toZEuPK3BevjKCA35ibx2trdHEutUCUj6V44tGeeHLT2XATuTiaaWkHeyFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQnVxZpij4MxGsQW74A6X9xsqq4Aawwxhmxsy9HwuHTWd4naohi1njRJu9Mwuy7ViEfxf8yUBqmKFQFnDTaBMsJ",
  "key1": "NdUVyjraDwM2kfND88mo5ig3wCKZN78xybeE1nvySHv1gR2FWj4twhuvmJB8JztFiLFnAsnbxgws1a2ikaRokjh",
  "key2": "2zvPkvqtgY9pzBn14DTTEcd7yYDxFp6DQBAsv3BBcdDhLBkmgZrRQmA7WQubDxSZL5EHNeBpXA4tRb4sE1YxGN4u",
  "key3": "3hefwBtJ2Uo3dTiuRQyfvj1wqpr4HMWuEYpvGMgtUhiFosELkQndvMJbs3stijhZXjRCTv4JZMkhrSxo4fvA68pN",
  "key4": "2Rs3wCzHzrgisvXPzkmCm3iELArQFL89yCUwJngZnL4sEgfT6tjG1DARy328uB9rWdcSigemxmZ5xfESyyL99vCo",
  "key5": "2zEoDzsjxdsYtMGst2mbdcbjnqySt4qCcvLKDvnarRRzyi9BG87B6V2n2zukyW6fVyEcWqDzPzdEBsepQiRW75dt",
  "key6": "63ihw3W39fcHTRBBJXzrWZuBrxY2gr1oLm1x4YnbaZvj3jztjDxtzHhvf3mPf8UhdJMR4pvrkcDs6jCQ9Ud8cZtG",
  "key7": "4ZC8r4yaCPrfGmHBRqd5A9CiqWyyfjJRR9wE2cJSJdAfWPjD8znyZDkZu49AZeLMgRmzEy2XJD7cqhUFP1b7B9yn",
  "key8": "3cKCQ3ash8DEsGN4Yj1LfdGNsWjdVDP4eNE8q245myR9oiu7LCcqCkvccTzXaw1Qed1TXdVbaA1a3T6pQFW56Qxz",
  "key9": "38pSZ8fSR1ges7CGYUynA1kjfMr5bo9eEhfswX9GhA28QXiGaPRd2igq8z47zXRBsEhiog8Lhc7m11eeniAuCqbw",
  "key10": "4FWAJZdJTkMMQ8R22rKE8vS3zxCaSwbjB4Mg3AuQtYxisuLrDHJpHEoSPLuCiMGSHLD1H4kRapXMNNi1brq77cBF",
  "key11": "3svqzwwYceMyefU3GD7Di4NmMnYojnSNV6WaTYcmEqAnCsLhMKVXF9vaR3yi6wnXxtG4u6TbVPkwG4D62XdjKGNC",
  "key12": "5mZjfXRToNkS9nWcoSQswJERH7ys4UkrPYZn8YhcKaZexGcuahjPBZPbPJqJYxYahHCm2NbqWDDom6mPrPjrMRpG",
  "key13": "4u5p91y4KpWhJZemssmM4P83cSficU7oagatDyGeszMknRLjevtTHWg5nj51yG91PVDMqh4GCirdgUDvPBtBFZsC",
  "key14": "3s8QpRWkfghdk6PQMLXcqjGmumZrqeh6BGud1k5tAi1emutvB4eZgWThynPxTwAz1qxQLJQYBbqiotfDmtkQFZ4b",
  "key15": "646wpTAVmnnXdDLV2GJdjSiZnZggpmrkDYtsKsZN5m3qG1NMNWpDyowb7ba3ys8E1jFMjt7GB3izPjXuMCPAHBCw",
  "key16": "oZJpvfq17QbpYZwT8G9uf94GZWiee2HyEfdJWQhNr8j2ZnpsvMm4BUWU6izFwhbeSXXKG8sncqhYX3UZeVP8ppW",
  "key17": "61diSe3TfZgkyEYzvw7zFiNWP8pMzJkgjJGMx9pi5Dp4GRsLaAHKnJ5CYxqDvrTbpz3qgv6L7qGQFVFzPaTC4UXd",
  "key18": "2ppjcpry8qYSfiXdQyZT7HYiML5A2LhVktuWkWRLJyR7CekeeKH9DuFvUPE5oKvN1iSFs1j4nyMiQvo4wpaBjLam",
  "key19": "mX1ryn1GPxxP6pjYy2tD85gmozthGVLfDbZN92v35HAZVmwyvMSYLpKH4EB54FrdL5yZTrtrQYn7tMqYCuHTmaP",
  "key20": "4TuWToUHFkSL8yPgUuAwGkY1uDY1VNxugSWRWhgbxPy5EdQwbppncLp55AeJQjgBHajD5aaMWTJYLhL1WaHA7biD",
  "key21": "2HKNmexwfBFEGgenDzVYrdN5HcYJYiSHfZyDCv8rHKwH3b9o2RnU1iJirLVN1TEvNUvggdFDhZjgxbwMuDo7fTSJ",
  "key22": "3VGdd8uEvwCy7E5wEErQQZ5bAnUNtQhMCjGiXkEXYCLp7BnVs8aF6JYeKnSL4tjhBr13CxnKDAB6vjw259rbcXzo",
  "key23": "4ZqRfCRz5UoL65fQURtTX4YctiEZ3xibhsJ7SQNj42SNBcj2GUVnc2EmQD7hurLNekyLBaqDZgUpJfc1iwgGH31R",
  "key24": "3WrnpwEH1NNF7csnQU2SoRhdWnabMzSWsJhfBZLK75tch9hiCTtvzqJop68nYQbyZG6taFFG3zbkvrvdfk1fRZuS",
  "key25": "3ebxTQCP5JwyqgqDv2QqgY3na61SHHNEYKy446SydHPAm4VKj2FVia7oGyceaFea1Tp6WFnbSpRCwzGmVEyupSqQ",
  "key26": "nC4fMRHa6mnMfpqKLxZ7q1STxDTrbcwm71wDcstjwUfudd1NgU1jgtdmRkYeVZCVcASy6mtGpxBPokvRHT35PQj"
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
