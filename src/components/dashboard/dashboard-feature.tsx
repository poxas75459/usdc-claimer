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
    "2ibG1KbV6sJD8VJVGXQ7b7TmXo1N3d53PYDBLTqrePBrX1Fa9McYJvZhJLHh1PukQ3J1ncNTUgBVtPwXEHQeeUq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmQ2P7DcXaNW8Cei9xXe2bcaHEbgky3yjZrXZcbPpXiUXrpekzAhypxTmJVzt83CmKmFBfzc18Erbg2vgUovxNs",
  "key1": "5qcGNJBF6qBNWAUZ4xem2YFNWHr7zsho1cdYXePyae1Pge9pWCtVbK9rbnuf15oqupZWwVPxRjERWV5DnqyAt8Ru",
  "key2": "4bXrcUocJEWSP7oXXwfbvUQWmwnvASXomTSwGbHm5CTHTNiM8qPCHwXKjNUEWYhCBw14yTnPkvf2ATGknyLSVmfM",
  "key3": "4JrLoKkvTbxzcN99JketXrka8jao6H8YJRFq3U1bjHuggTYfXFaRM13ieRfvu74NDv8NwdCLbxeicciuKWZKn8U9",
  "key4": "e4eVfqQeA9RVu3KmTruLzxFkaRTsja9os2xor1WGKcq17Gc3jFftXT9yAFeGPAcch7vNvXTYRuu4qgCo8w1r1FY",
  "key5": "sQfMzThCjsCHY61dV7ASj7NG163w656WJzdmicPYGQeQXPLdbfqu9oPA2f8vgCh6QdZxqiZNUWKYv1mPWSZTa1j",
  "key6": "2YJk2cACKEDtFHBUUYMubJTJNjQvgNfFPRJiGSidA19tKyqHUdotGRsmw2ELtSCu16aa9K2eSwReqNBjqYbVmCif",
  "key7": "2HnoK62wv2N7tHAcrgMECXFqfLGbTW4yT7ydfysaqF4Sx254w9NW4xiKgWgnHZcELiC1ZBTTRcyg7bTckCuTKe6F",
  "key8": "48T6v8iPCx98TW24YiiqFZq6SJBiQScA79D4KYDFqSxJP5P4R9MomoWkrJtGccLFEjEnnhkrqKKvwKZ9ctZ2DNj7",
  "key9": "62m4zsgju6n654p9BbhcyttE6bzEcK5FwqMQ2kepyV1S4eRi8RxBSZ4fJcJYsg3jFQiYW3YPL5JJ4ZuKh95eK5HG",
  "key10": "4v7DEpUKkRb1jXtwmRmsD7g2ivzcGTWkknvsq8B8iWtKe9gAdZkmV8QCCbhg2FeDbwt2j1ncJLhB4jYazFo6ybN6",
  "key11": "2v6WD4vyjsbrffH1jQvDDFHUHdvhbjJU8Akq6TPTYdXNbwPXeiQXcpVNhPxCtX58g6Phg2L7GbdpkX7afGbw6t1V",
  "key12": "5rfyUWoiju97PuedRg9zCEJJWF9JSGSFanJKp4CkRkR71un4yVKXzYq3YiLkASGR5tVz1zRzrJm1KPoAyGLHwyet",
  "key13": "4Xa5E2neJqsTDcLW1J87NXiNkrwa8iLDyDduJyt2Gad6WmTnjgMVENbRM5ka3K1eYwkjfe7nqT3vzvwJ5xwSWsFv",
  "key14": "54HQULzXTV7JZzPforC222CkRk4aDdCnrkhoaaAMoH1ad2pmq98ob58p3hj4Lx3hDAqWarZtgKwwP7KUDVPv8yQJ",
  "key15": "3ppjTjiSvyo2BHmFQZsxBqwQxFdyb5BP4t4PNEbd1RiNRSaEMVLxqECgPPddG3sm6ubQCw8Uuucw5PmsAwkBjNFj",
  "key16": "381KJAdRJMKneL4reApYkV8PuaC2dQfzeV7NMMG7i7PdhYC2rDHw2QCyX1icyuqtzz4VzWtN7r452JeTAdNqMiuU",
  "key17": "vsGaAypACtR1XaXxgtAd1xS8zMhCrkx9SmFa6w8RczodU6UmADqK8wJAybNjkXkvEp6v4BPXNLEJHfjAaYSFE3D",
  "key18": "4PJ8nEYdbM2ayhe9rA4MXBAzm66LDgT54ST11c5RgzjBgkYDnarW4WWUKdtWJKPFZxrzC8esjgZepYMWyMBoNw5P",
  "key19": "553nmuG9SXDokjq7N2GgimWHXYJJHQa3pDyLyXA5SqDBC2xJYMx1ZQGcQRwAMKp1Rg2uRWW8f7qP4GpNNxAwahWT",
  "key20": "4tDotPbz1eE4Q8cy5vs3i7uECtJTSDVfnK4R8EcbShB9aGFkedFBaZKXEA11jAVrqUNWX6YS1PLCwjoeikvaaPHB",
  "key21": "5Wk8pqMQsm5VMSrYRsoC3EnyGpZr9PQPaEfo76wVz5xCjR2prgKcGt3x4Pi8dehvyUAiKuurqYsTR8Bfmxn2rJ4x",
  "key22": "3XQPgVUT94ENJz8hAz63AfCvHgdGPjgCsb6bDArLVvco9Y3ZTaJiRRuJYLsq4UGmFaRLJEbPQ9fjzXtf7BL6tXnZ",
  "key23": "GGTAnVnDJo71yhn8AMfpsktHgB3ZRjYH5Q4YMTgZmBW6y9wWjWjnuq1VuPjmjwzJqYMDEsjCwuZBa4uJPqL6Ljb",
  "key24": "51M8iHCv4QhZ4opT1gFy1ZHU9pc2ckTjNtDcpnVwV4PqtoCQcyFnfH3nuZumdMSYvadAFRUtvkvFncFfjf3DEMdD",
  "key25": "QXAdKCPMT3ogn8LNCjvoSNgwBVueQyofqgGXaRqd8BJBtokQ7zySsj588aJWtqZLS84LdmzBco6m7BAniXzuBem",
  "key26": "2FUiCwpkAXqijXpcLzxJxyFvFJZN6Vr44z1kziaTmwrQF3371TpKx9DksY9pjzomUXYLRwr34uJEN8TEwnjXKNzp",
  "key27": "3VJRoRgjL7EXRaWRGmMajCm71SKbCBvUa8uHN2uKmr3dGzQsWB5S9AK2Ld3kGb2TcikTnWM6rGHsfQG8SNbC4x2L",
  "key28": "27CLRGdpMqDrxkTKMzrH41yQdvzWtx3EWrh4A27ZnUu6ihfoHvRuHNr99WhoR3JkCjt8fwUZ9jYRcGPYJUAwkD74",
  "key29": "qHvSphqRW8UGNrS3pqhMYWN4GH1e9J1rEuLZ6ctDizoAHs9k8DKbcPPbw4mKGs7mKsWVqKmCUwnXxadDCfSUhD8",
  "key30": "2RPjH5Qz9bU9wGfbBC5xhBaBTnsuAQVYLEnKVhmn5n1CTEm8XPmVcF3UmfNtr2SQmfiwRd6Wvn2CqaFmC1VeN6cS",
  "key31": "ShFKmyCPEGJQ7BsKB7BYtwjr5hK7ok9CNvtaXxVNd3NKmcBgvDfYQNqb3EoRoV5a9ynXkUYrvVE6aiBSHRA2ZZY",
  "key32": "4X4rjVGWPFtys8FLBp5sP8KPJjuG3cLbNgMfCAK435WVKETTTt8hUFrjxY1dgxs2C6YLaqU4BzU7bHqPBB5nVujA",
  "key33": "2Q5a3p5owfrCjGovT4roNbFXW4kfZ1TteAjbCdBUCJ7yrfY8YVzcionmYDPbUNuw4pPPg8ooH3RK5J1jUXhU68rN",
  "key34": "37guau7agWvnMSGyPSAq6xcpNwFyLt4X8tGGzAAnLY4aSAwkfvkZGpDvqZrMrcE2q2qo1J6U6PBkada6s1ycGUty",
  "key35": "3Y3im4VSK5s9SsJzhLSqLv6tVzexiTuRuGX4PveY7JiifyNqkLWUua1KbsMkizCH1oLPmYAZ3hZhuepLQfKycPPe",
  "key36": "dnQaQhZ6TJ3QNsfFgWu29FKdt7yRtuxGozG1mpjjWDRHphJwgzc4Mj4UkKgUFnx7gu89ACKMXZD1J47gsNFhXaC",
  "key37": "SYVfbdpw8TLUVRbijiNLhD1NWg2gsYRFv9M17bqTvLyuQM1sfCnE1ssh7WgXzgbEn1ZbNfJDHYePAwdbS7DuVjL",
  "key38": "2Z6XDqgUvCdRPcYR3aNkB3VvNM9URKP3ZycU67LkNfvi2PLeWqPsWM9baXy3cuWos4VeJwioTsAnm94z63ARDEnP",
  "key39": "5yRTxBEycZbchntmELQNuJ72rsWfcN3Hurszdc6bidkUPyY7GHgMs8UQc79gMjDyLd87Pj8hTxgiN4jTrkUS7FBq"
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
