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
    "4ueeKRSLDAd1BYZiBHVoBNZ5ijzWVM8HBt2Y4ZvWjXMDZVkYHXXHRXShyNMPiRNpSA8WCbT1BPH3oQvMW95iGMkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YTwyJAD48w76WobgSZvpVCpTt3QA6s2HFSa7vMxzknSmSm11ibBoCbXkvFFs1gX5GCUuUg4ipmVdh6TPiVZsYLQ",
  "key1": "ztmUkVKTd1PtC6z7LW835nYWEeo8gpCootmUnFRn92Q1NbMEeWDpLJ6RWK7CV5m6zGGjz3vmEXjsFu1vwpE6a9n",
  "key2": "E3wHNxRQSQGGarAAUMhyPKPbybHwLVcTKtn3dk96A9Gz1uAwx9U9FYL1Q3q2cHSmmao5mvxaFAZC5xLHYdbLg8T",
  "key3": "4BuMH4KyXaYs3edJ6irXGF5miDEURNXUe1Pn4kPtdRGQnA9373CMBYiAp1Dye2h2ArAu1WheGG5MFYBwgKFoMHNA",
  "key4": "5P3AVj9c8GjBsU9LpSRDGHENPoAjtWtNzF8y7zvfXadsNUGs351XXoBT3aqXQHYiUx8yQVtLKHidAo69fCg55uXX",
  "key5": "54hafRFSGvdmpRagXxW8ydymNV8ZHTreSQ645AwqaCgosxafQuKxzbDWsk5qSwsQ16uY8ji59kM9bjVwZ5A2G3n9",
  "key6": "pF5BVEPdJ1wRXtKSE6xcxkoKMFJ5h2ohQ4hZNHDr1h9P9YPQMSPDQzfNcHEb6wucqqkSNcVB72KY3XoRUJ57kVC",
  "key7": "22ahn51vwtW4asC8Hf6rgRkHSGrzwy3hDN1cyj7tJSccq3ybzw1JsNGoRzduMmFMomva75b9XWvJj15e15eGxoA3",
  "key8": "4qfSMWvuZeKHpUJuZJ8V7LhsTRMsE6DcFFpyqfJ4WLaHmNGaYwUbE6BANrdN5GPDVVLubrVDQ3jVa7X7GqcK29Np",
  "key9": "54bLW9Z21BBxfgoGJN7YZJRHLKMFKVFFocdMNbHyXu1qcPiHpjmPEMJ75iLPZciSfSLSPksBNofq8uq8JsUsM9gh",
  "key10": "664ERUYAtV1PLjxyvBcZc5BJSQLRwCv7Tzz7RUJPjZEPPNMX84CVgZ1D9qYaTaguMM1bY9tDroBXJy2JjFCNJQ6o",
  "key11": "4psCGeTUxdGoewPscU5tEbX4jZDPa7uev85rZDmF9cVFGXGdo4Vohq3GwWZp8nUgKtUSJN3uAAK9d91KWuWzKvtw",
  "key12": "Zaejupjdzs7GHM3fk6oy7RhXtB3gaPmP6yGaWHE2kXeaPD5FbH82ZWSwVmw47xFSqKrQM8oR1ufWiE4enx6epLK",
  "key13": "476qJh11zA8iTt9mVrPnneStU9nNRM76LMC7oenhXNFGEjYDAR5XS11jckkVN7bcXno2QyxfSKRXGnexm3xvP3zs",
  "key14": "2ujkcSzFG5uGGV4gA1XJ6ZpbtVgbKuNf1GKN5ebimvT4J5yQcoPGg3x8VrRLQvWvzrDidnhgstUR9dCQe9z9iB8h",
  "key15": "3M8uBjNFfg8xFTWLDU2u7QYnWMAs6kLHHWkR573YZu6uV8E3xEWhhKT9UhhhsYNYSNxtw3Y25ZPpLuzzHS5z8vK4",
  "key16": "8Mu7VgqYSZcxxnG7UZGzumPuWjrSDo5zVEvi8tW8XZHXfNYKbLREAze6EsAfd28FutUdHbCEGuGKCQQ7dcpwZBX",
  "key17": "3BE4QpUECur2RW2x1VqtSw3d92VGnPRYu4uTXi4Y1YRQcEVP52MT1mftK9vbvGJ34AM5HEXAmi8C59uQKFiePauq",
  "key18": "4NtKcXbiMrtL8m3SopKHTh97UTzp81GcUQkysruPsHmQtD8VuN5q5YvCvd2ndrE2rTsbxLtW8yf7pJPYYabtuPKA",
  "key19": "2mhpNBotC4X51BZEuKqLtJpp3t9Z2mCGQoCBCdEMgsK2Zj9vTyFCn34RTW9d1ijVYNvpjmf6g4kane8BfN1HQh8R",
  "key20": "MZAWru6fLb4HYeReGDEDovT2kvCTq14y6QDkqGHEqAZKQAAkh2yyQLFzkPd9jzASKqaGJqLvqZeU7QiqfHFBkmt",
  "key21": "42rNJ7APCGGfHiVJAqcoomtbNmfM2Gikhu6bqeeFtzvW88zxBc47tr34YWFi4y3Y3BkdzMUWKzrvCQthKA2UDaKA",
  "key22": "5RrUSF8JjUJYQFcCPVDx2Fr3QBGid4viL5tG9Y4fBzQoWWGUYcg6PALvPznKaXrE6SDfuYpg85rNQ84u3oXMrZo4",
  "key23": "5qkprGXTSbYwEpWwfacK69EQhRopu7zffv4Ch2WSSdWqZEZB1eC8SK1VqPjwJfiJ4qEFedSLcQNjHUufzpuDcMFZ",
  "key24": "3ESBpzSYgHD1bWRC2P5K16tsoczkXGvGA6ofSafz8mhZhaWdRmSw1PPVdJMxzrbQrgWh28b2SUE3VjB1PdfgGB2q"
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
