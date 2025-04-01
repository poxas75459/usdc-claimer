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
    "3kMNLANhypUqukchrSM3bsUbJLQ2popcuqAM4TUTS5FjRUaZcnMbU36XCjykGcS7vuKkA4ftwP67vTibHWtvBt1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9JzoqfQ47Z6BtK54SzBY3utpx1bqYFVSZ6r5GnGk8B2Bvvyf8npYuAwxixuhV4dFsjLtPGf2RBNeMBrTBbp7UrP",
  "key1": "3Jf5yNVtYP3s3uYKwtd3xHokE5HgwMMyv8TJzhGUftqyApSK73VS4K4bW8cdmnnpSDeVdu7PTthNQEqff72BxKUC",
  "key2": "4E9xr1bwF4rdpP9at4MXGftVzaDW59fhfKNxTf9MHmdp7tupKPyw77XKLiBrXw1NdfQPPEKjiu3b9KRbrUaUCPxD",
  "key3": "3P5XDqoGKvetFtYVJLNWCdnzia5ELuo5UKSB4iNsQBZqMVgaHAkaTyVXw5VkiFysUA8DoJYZors32iqcKsLL4jCy",
  "key4": "2mP92XQc5Po75wwJuPBQKMhkrcJQFfag1huNcJJgu43S2oWCd8uf8xSFt8fYuNEk3Wen7mj2nwNwuY5yZEKMdf5",
  "key5": "4wj1BETTxfbbLbsjRG9FEPecvQnG7EB5N35fEpME972iA3m9njPGCDqB36Gf3EB9goKz2RDvX8Zoi2D4JKam7ymi",
  "key6": "3pbqo1YHLuLZRnx5zEzHbgEMhCccCU52abzLJy9vZzw4F66mVc473H398NtfZK8BPeyYsEPKCo8qXLf3hKhLKvoW",
  "key7": "2HGfwu8Vv2Jvs1US7sUjmZXSeoEhCzPBeq7cD9iHkCDayh4HaGQUM5NK3kxiYKoYjZ1GBu7qzKsSn6sEChSHZ3Bz",
  "key8": "47FBid7oj81aLWgJ2tVRyGXHKWaQY9Y5B921R4gtV8mmMDZkodu2toj9oZUfh2goypYDFrBAeVXGRJ8ecq4oWPpC",
  "key9": "5rCWiVcZYrZBR282bpR5LbL8YS6YNrpom8NhV3oj8mVoiFQWNrVDbPQwnmFCtf5CycuQZEnTN8iXs1MH6ZzbKxwC",
  "key10": "3go4fc9o2BkvH4GVAgdmFrqyjbWmwSeeL2pbsF4gSvXf3v8DVmQYDCv1im2Sm7rTzpQaFawcEbGWWT9v7X7A1wDP",
  "key11": "4uUGGsD9jcRnc8cpe1AMGtZ1Zi9MCE2TwLAKzcynC2TNjHBMMsNrzCg9Reybnf7vfNZxH77B9DBZ2qaQ1Ai6YAzM",
  "key12": "248Eh4pKB8KJ7D2ikufFe9qCLq3iFVJQ6agx1586zV2Kx3EAB2wuQBwUFVq1YyGUwJXJNXpNYkMaxJJwZL7iyjzo",
  "key13": "sVMyrT5KXrc4mkX7jy4VRuB2NAUbaw1BuYj6eviw7wzAE8bATTup1CKQABifQKPA39FiS8FRwsHx6q6MkyU1dWv",
  "key14": "5AU3adNRkFxWpRdotCNZMdVoGv9J48SWQiBssYB5faCjCpcQ1eMNeUPssXAT1NJGyTYGtspjxB4LyBncUgCdcNDL",
  "key15": "3sco6rcjU42PuvRvTPZoqHQ6kgvXaf9hraUzD5NtAR51SZmnvM95KSzEo8sxXundm29xmKtYZDGwXvWpshNmn93j",
  "key16": "4apqo21vShAq4wTmFzJ4oF7moUH53ZMSkNQjt1hAVuH5M4uugLfc7L12gZoDUtpBdxNBQyYRK5V66ed49uX1nFUF",
  "key17": "26C8mXChyx2uoLLxS2F9fSMgAEEZo1BDrg5Lnvzoef7ktAjtZW6EZ1v6BqNSFG9cWH2eeCiD5FUnctoREKwNryeu",
  "key18": "dKqQnRDE5rNrMKbB5K8PbKVrXstUXoN9CRN1twSo7yECRMKdqQ8J3jE1bK1xkQw2p1s6ovMMsPkJF1MJKhVzH4X",
  "key19": "2ky7rRLv8W9WXZJC7hTLmpJ45gGZQpcHEf3Kb6YKHb624rULpS1V3WyozqgGSKrHtnKiDAJpLmQpStnFKiRBnp4D",
  "key20": "3xG6QMGqRE1Kbf6k6JJLTFYgKuUw4y8kbdYXdyocFxCvajN3c4W6HjF15rzuvgVAjbVadwH6uGcKkVwbagqCBAwx",
  "key21": "2dDvo5mk6Xu3RKBxeeT9d6qjHGBmkNuV7W9tT8wVe7VUumptqhMMyneB1jdgyLYa9nSjd6XzFYtbGJHmRDFN62pE",
  "key22": "4opreGaEeuVt7YAo3kCJKPox4Ag7R3u3NFBDJrpE6ojcBsgbi4QRTrAd1ZHJv3GKmKzY93HUF99eCL2voaKqfgk2",
  "key23": "di6zLvLdF2gQnh5BRAn9xLysHVxYCTxyKiCTkbvzdJVRrS7DbmRGKhzXtrnFjSrjvdDHB76Drg9vCPiJBNWjFZ6",
  "key24": "3JLtyQSZrk94gGrgrLy8WoNv6dRZtMteQ9krmzpk24A2yQMujFAw4FaK78aaKgGrA7M81SeRs1m2zQtRcMKLqovb",
  "key25": "3PRFTS6z1yUx8tTZ3XzmKCYPDLVKCUpDtVne6y1K9HKUaU52p7AV3vrpVSK5vLQW6uRCpzgHWgKpTZyefY7GkuUo",
  "key26": "2ufUv392K36hqrFaRgM35YU4k42aXQ6n8gcq9nsYHwPQVVJ6cAZLN8EZkQZPMRzTzMhpA3Tg5K5TN8M96HFh6ziN",
  "key27": "wyWoho8yNXHG3UJMk57wGSjM47vjExxLyfLeAEVPX6F5uPTKMQeXcF31Gz8WjbpyS6z8jVHoTghrg3WWpfRan5g",
  "key28": "4kp4kNfderKsupLFZ9RfDhC1SbgUToVkyzChc2UsrzHweo5BZv8qYzMYjph28yAiXeERt3FuuGrWRhW85tWnpjBo",
  "key29": "37iT4FFPx6GRLJFmeWcNS3TRoc4ZyzQgeR2jzCtkA39ZBcneGNKN216G1NwmxmN9LSv1qchTeHg2sRpBmSFn5rmQ",
  "key30": "7wu9qfjy3zhJx7svwwpasfDichGmfikT8zuzjaKwxfRyva6ss1rJvJQhtTMMxzN4L9VEbrSc5AWv8zAmoz1ovmB",
  "key31": "kAqt5PtTPvBbEUhht1cow7A1FsvmkgxHzwc7ZaENKF88HC32NwKSvstEwgWhzr4i7ixkGUpTFnMHrLnQ7ukVV6R",
  "key32": "kyaATXmPvNtFcZdRFVxCtTXk6djNUxwHd8gHgVounFGUv5RmoJGr81GcVE1ph1NxWB4nYMqcKA9sAJXopJKvBD7"
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
