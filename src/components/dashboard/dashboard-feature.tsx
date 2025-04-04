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
    "3FTqX878rvyjXYXSAmnd8sUax7LK4VyRxjr3RY8kdsn46ANaSNH13hrqRQjtiaEftgn7RRH4EYpzNr6F73E5iRNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Eem2vJgHTxUiHfiJx8ixjbBs4kNGXXreA8iBcfsbvvoNNCgS7JnjLiC93ngaqxB2YheX3NNerqJhv2y8dzJZ6y",
  "key1": "2TedYMwSzD6e1RPQVsccz2KhYCu3J4a95GJDYBkkuD5LftJSrzFizrBJZtbNUXXtVp9xa8jQJzxkqhF1GQV5HieK",
  "key2": "xuYrEGjA4cEBkQdEbjLaQF7mzEYoKeDpV9aWLAMSemXh9zFoXjSgTNkNsQ1H4FpoY83DdKojSYYw3SVDzEJuk2k",
  "key3": "3u82x4KxwXH9aLAsSM6M6Hx4vJqJvqcdD9zTaHYNzGfk8uTG32S1NtXmtLF2yQV1ANZYxLqhcAgaCiDpF1RxDmtc",
  "key4": "4sVrXzqBp38yMGgWpu6J9Ac1sjycKAroEA5tdfr7bdZ9c4U8KnqZwMFoJgvDwmrtW4jPGMRUm1ARn8nRbkVEZDZ2",
  "key5": "3VPCJrTy66Ag71sAYC2a2tvLi4mm2AoMgnzfK1y9UnudUyQpXmGYNCocrKtffua5pBaqgqNjdCMLqwVySUNJakxG",
  "key6": "5pvT5qbP8NeUMVwP4GkgriG8ryjan6Eozu7wyMw8XN6yG5Yw6NV6vciQSYbgPZkFiHQfW3dxdPVeViYKvWY7Laxb",
  "key7": "2kN7oSRX1rJY5JELXeftLrZBrEdMRc33kkZdoiFHaNoFexo94PxnfXJ6TsgsunnHyovtsbvLU28MWC7kzMKNNRrd",
  "key8": "3ic3vx2oavHWvcuBQmETLJkg9FRniud8hi2hZR1GZu94Rao1E571uaHRchjjVwqJTUczJod7LojCDohmKsXuoofs",
  "key9": "BipVogXR5ay35eVE8onVhzdXaun3TBbTD44PpL49crMSj9gbC6yuTusdXeLc7QRkt3bQB48Gw3Amq1xgycgX1DP",
  "key10": "3k45JuzMYPUgwjffuta1rQaiVsYXpBtbtG2LDWeqe8WbowbTi6wYZ9LmiZoNgfMLZWtnZenuKWHX1rQuEYZAD9NH",
  "key11": "F2ZQp1a8rG34XfPYNaS9gSAsstzHkCazpy9HeBR8uQLGMcDjFCyzGGBaXv86qFmet7D6V2QeMFp9os3sayta8S4",
  "key12": "8bCLdazY1KA87fb1hvoA7iJonpMQNHYtu8tN8iSkV6YNeL8QnZCYJsi1eN16fEBYSRacCgqN25eTEyXi5f5jQZS",
  "key13": "BmqRnnaAU6eXtiAEXGaX3hjSWEU6NbQVz4v14xr17Lph9nv9fBLnb7Af4nRfF2siE8LCMeE1XCzfnrffTYfNU77",
  "key14": "4nwHG6SFCH8wRsvG8tRq5FS94Nf8ExpGsHHdu2gNe9C6Axmu5LMibk6eSVwG6M9Dhb8dfUqF6zDHkgz1HaPeiAZc",
  "key15": "2wXGXWuL1VRPhEu1cTU2wuxpZWQG4EsL46XhvpzjM7uPRmERKchPLxKk8bx7EGRYexBXX9hqY1fGpbNBTYyogW1K",
  "key16": "XL9CLxA4SoJPuaEBFDSxhFLPQGSh37bwkwpWCkrgc5EzMksMQntYLRhVoFaxdEBaWbv5j5YVWxLeYi9tP331biR",
  "key17": "2K5vi2sMLE3gVKbJEYXtpP14PMXvwPdmnwCoHaevNPB3EajrQLthCvTguBXURLj2JjbDuJQFPmXm2wDwz1ADzA9M",
  "key18": "HvZNEjVzUSW2YvMMXS6pcd3EinnLQcDoERNtDV4TkzY2Lj6aaSCJLQSU7LXuQREB1antUUf7CFRgLFUxsb19hjP",
  "key19": "9Pd3u4fDVvw4bYeXrwqRFgVWDYDq7LzKdx3Zr6ZJhyzTzq5xFKZ5VJaYVtLifA38nkXWKQ2a2GwUUhpkVETh364",
  "key20": "2wTJh2FcdRdmVrRixmYPdbgkJDjHfvLRvWEdaB5PKBh2vkfoopDDFvLmDK9cNh4J18KK5p8dSTKLuFii2gBm9hgH",
  "key21": "3i1QAUwhHocpEDxvzXHPsmtpEhDmBbtNaiWJiJh9VQbipTZQh3hBD237zAVMGS1C8ULQhqkhad9ktav4WYjE6Y7T",
  "key22": "2ASaNrAQz1DhLGnzdaM2RRtWbfaMPHTeRRZJaMtcEc4JLXWYghWsZLZN9JPL7S4mPrkYpdCxQmVFYwFm6eKwPiEZ",
  "key23": "w3QXFytbSPXU8HYAzM2Lnj1XF2DsNN53Dpd5f8KqJyspF23bApWCTWRyN5SEoqUifdwhmykycNpAspYPUmgNwhz",
  "key24": "2tAfaQ4oZQbM8ydc86aZS4MgqH7McVh16Vq5SyEeD4LEyqU7kLCgSqUCt1v9HRkTJCQeypkbqYHDBp1rnfqfo3Tv"
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
