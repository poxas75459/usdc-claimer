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
    "5mVBgmVKQ81eZVb7NSTxwgUNpxjiLWgPBrqGAZKYSbJNKKwvGvJcMshf6EQBergudb16uY8LQ97SJjg7eSMEfP5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Px9ZER6xmth3s1ofKZqWNWBB4wSE598wJEuJHHKcT98kL6ne1Ucbh8XEF9frvHVrr2quxiTy634u8LogbPej6r7",
  "key1": "4QrN3vSz8S7x1JzWEjinc9bHphVCJmSP1JgfdTk2DQoUbvXDkTTofxPTwM8cPjQTgCm2sF9Eg8PNDMzKpxpkkC9L",
  "key2": "33BSLSSLe31LGe3WztCq6kqvKYxhhNKmQHKM3fJCU9LF7vHYRwi3PSJZjLBUPXtUtCD8aJiipLhfh5TVriHqwwBw",
  "key3": "feTTAuS8P6vNLv38CiHCyoEnZbGQLe8feChhkXTPqcm98HAGBubpHNFFwW84QMFhq1GLAKgkJfnfU9MudhbwftJ",
  "key4": "5VEEhJb6fFvoYNENk1ZYz1ayaHAjDjTYqf8T9zPH9q4rYNHKF1WNGZezZygV8J5vn8LGXG4ib4kZP3F4Tk6u6QDE",
  "key5": "5vKUXgZM6DdFwR6tMi137Jda2eGiSpZkBhALfqnNvuFWpyJGbJzZ8idYtAvA88EimeAm23pd1rwSFAVGE7yD6sJ3",
  "key6": "2LvjCP7Hf5VGGPedts6XU8fkLCzAoFgfhx5GZJ1AVrBfcZKfCCGLuoQe3aQndKFCmPAo4txUVjPV6VXowgv7h7B5",
  "key7": "43MVFSNGdm718TokVtXZwAxBYEJ6qUjRMVsnh2yJaUFqJjs5gSHVP8fRvDsiJW9wmRz4aGrDyv2UbUYEiwvwgQWc",
  "key8": "2vhHaQ8YgLVJhQxmHzmMDDCQzPaMsEKDVvcnMovWq8tiVLsdBsVkvB5UAsqjUwrQ7gy2UFUqsJzrbGkgkeZ9xWXQ",
  "key9": "86ZzoDxK2TbXYe4BoUj1mwjTYBvQMZyw8BTPYzXNcsL6v4Tfb7EyrFQaRx1b8tQ2jcTyvEGsufmJrppRFp5JqvC",
  "key10": "B1qGj4rJqbQ9qNb2PY423kjdsQMa13FfsAiPHFgcX9zUKarvixvHHXryWwMz3sR2PsqjJmDzfoL6X1La2jiKE4x",
  "key11": "3Nofw79ZrwaJe2b4tty9wxL7LV7Q2scszsxMvKqRzyFzXXBP4gcLt6Mq6w2Sv3Zqk4B7k36hTUArPJREFhd7uAbp",
  "key12": "3UZ7rzsXwCoaeMAysoquo623cZgR3Q5XpWBjBVJVjtrcpfUVmUUUkGGWqURuQhemejNbUNgeot6wKw2hkt1Pi1Yx",
  "key13": "2tFAzzVviDWBPFdq9mAcXuncWamwVvhbjzLzooxSk1aeT5vApynnmezssZGtjWW7LKSFsfmYAPxzsXzJ7HdJhYxo",
  "key14": "4Uu9RswNVGpUkqRXE7yc1DfRzXvjvJw9keTfJe5BHgNrKsHhEr6C4JGbLe4rgkmFv1e3tD5PXRaXQjrbsBFm5zff",
  "key15": "c6FF8qpDT72EFEzpwJMH8tsV258Pit2DNJ7argeRoqCD5APMR2rrxp34pm96uUTbs8RD4UjqyoHuF7ZSRhmqgtu",
  "key16": "495znpuE3phrcDRQNXvGn3yBrasHQKENEtwinQJRfhHC7WTpFiiYXJ6FVky5kjm3b2uKHhw7mYU1Sit4EYZ7Aa6p",
  "key17": "5gWHRJtzBRkPPHofd7KsyEdJSHQcHQ6iY3DqN6vCAswanSrQQUueEZz2nY1WP2km42WVGUXyrsBu3nfp7yAcaSYb",
  "key18": "5wKwzxQFRPEuE6ssPE3612EhxtqsR1tL1u86LQHx7PEsDWQk3R2WfD5wryGPnP4imdNDUgdYfz93cAQzL9EUiHCw",
  "key19": "4WkkF2o7nifFHa13rLPHrMWW8A37tHmJMuRv23xccRXFS2GdyECrwYt1PZyYEVRQhJ2W9kfJSQr2b8EHGKxvNEFo",
  "key20": "3e7uy6LoQLVh9FHPZUE5k4LQXfcQmBNn7LJcUBzPpjq15QoFx8isAh1dZ3cuPUwkXsNPKiKjnqZd9UA7FYq71v4q",
  "key21": "3fKnGHt5zn26UArJSu7ekt9vWC3CCNz8mf2thAEMMGcG7zZ6uiE25C33qidondKA9Cj3F8r6YntAoWeagAeRLQUj",
  "key22": "2BRBMrmarrcjRkXV45eo1gMzFHCAtBHqY1BkALxUpJFMV8VrPpPpT8QNjjyPRvpn8EfShN9Z9zNVcdbfwqoNn5zk",
  "key23": "5Q7MYb665QW7n4UGS5FmcTiw6Ncrv5EF31AJ67qj3Q2TqYLPF5T9yXtbaKP3GMi1wLPoUmQr1GBJB1SUARCZTyvx",
  "key24": "4phjsLPeUa1gY9KhidjUMS7kw4oeK2Ld4fU1SE54QKEEdJEP94HAezHntnUtpm3GT4spFwZPzUK4Vdm6mWDD6qBh",
  "key25": "5zrQJB2Wrw6t5afow7cvhNRNUh89Wi5fF5zieR56g3AUFBMSGGD1Ht4PqGmCJrHabMWToKgHePSP4pVzZM4b44RR",
  "key26": "3y4wc5ei7omqk4M8hFhRgkMwnYuudodoNvZqR5DdgsiahzKDrcgMVPyzVUNswJHC72pFpZWR4dhLyfGphZMMNvT8",
  "key27": "3B1wCDJcEoM9grsSc8m2jWLsck2fKfc69iuP5Gp6C9RVnRudtq1eCHE6o2iDQD188ReugDQggv8AMRaK2JwncvEG",
  "key28": "3dRrwbWVf5C9D4GP2Q7M3by3UGBc2qsy8znq6dX9byaZeCXYv9SzXiMPLv2aCCJPraj1xCNRH7dMJXNGD2mMZYTp",
  "key29": "5aevRDDU4EzLXi3uupmmeEaAgabvJ7Z8ScVx76QzufgDPqjCD4B9x4h1cuUFMs9X8pmf4ngjCu9tL7XQmj2jmPqg",
  "key30": "65NmGsZo1353Zk2HcgQPjiiFCwb4krnqfWZzEYojrze38vfKhbSS67wxrtr1BtEGhc8QfC66PTt6etiZvQ5aVYjc",
  "key31": "4NAKQKsRTqyMEdDcXBZHej5e8uoeScpPyXWXEz2n67SvCPUEszmgDWmjbEUnZdQJDGK7xqN8VqG8kfW99i8b8mir",
  "key32": "EfiJggcdNNwZUQwe4UiYf3CU4X85zihuWWRNZRx4vyqD6Bh6fuGTjdifUdTmrJu8BmyF6ZtEKyHw9HSH5FuZh2Y",
  "key33": "5bUFPeHLE6mtWGtjhYy1G9vyYx6xGmY1zPUx4CVCx7c1g2MF16vY9rZCejN75nQ5rVx5P7zk7AnXpYmKcajMNtYN",
  "key34": "S6XT8vK2gWYdYAnEPsu6AgmQPvPNRcYJobUM67USAmfxRxmGTv9kTMzwCDBw3H5NWepnvwXU6tTPHjmnaUWAuRy",
  "key35": "38L9urnreA9ZaEWCXj4zGZarU16jtz1WiCzrnwx9orn1u7t6dMfJhRCGGvPMMbTScowyaPVHe8oAfYDGWpjHFBKd",
  "key36": "2Cc2zu4PJitG4VWi9y93DYDc9pPF1R3Q4wA4waaStmXyXhpXwJTwCiVQvebTNNpBBbjNnYYyraEZ8w911rZVfXd3",
  "key37": "5bpkQx4LGsHXywx4ihZrPUCDac6yFJLSN233k3tHgGZWcmSkUtbYjbkKB7QW7rz4pGKrStbPhoLb24MqcR8CiAWa",
  "key38": "5MHvX4KKMXavZNG9qKJj7b5TdZgVG1NarZnSqxSZx6hJpnAbPei2GK6H8VocFtFMc8rq2cQucDUgyrX1dLbKf6gN",
  "key39": "4sQ1ffutUj8u6RbGF8NgGzFQXX9RT17H24kh7GNW6HjrVWM9JiQZQP2S8sD1qf4eWeuFgcWXVxZUf1X8MF3p4sdF",
  "key40": "2D8gz9iXaFZwqvT3nmTtTZvd9QM1tGxSeTPMsdDxkN53dHg8WLDLB17zexV2PUa4J9PBsejPxnB4sQNtivvcjZ9u",
  "key41": "5vE5SbbZjnZbFftWPxHEmsAbqtDWUGVGaVQYqQYi1xsNv63Jr8n311kooxTdtWzG6T434grpgEQfE5T5oekLrXjc",
  "key42": "2dvSWYJiAjKCZ5VLb2mjRHmoRB7TL6fU25ckYG7i1YN6gSo41B9wFgScEuRvqRSGG49d7CEMh2CKfDKrCQkEx8TJ",
  "key43": "67asft8TjtY1dJ3eHvVsHWzdH6U98xi197BSHqrTr243ByfpCULSPeRz7qrNYukmW2wGBBaAZiptYPMEyUdK5Jns",
  "key44": "2YpCKqEGzJd1D1XCTg2ciosrqUYcXCrNSKPbqw4AnD5TihvBmVRgAZQdFXSihUvVvp7E2Um3PBnKAGLNTytfLKns",
  "key45": "3Fq9tFh8a1ojS7TH4GiH9JZjKuyGjBEmSwVmx8de6iWYiKoq62FhNXkMXpP6JcnarwUsHdVGWx8MPV4cxBsNosPR",
  "key46": "5HEARCGPcGh65kMchYWYwqbTHdVjiAEHbhtDSJfnQoMmmwkUkAmv9xG6ndaF2J7J6XVLeJu4wut3HaxfJpibSMkw",
  "key47": "2LGS4FDRim6txFFc3fp9RpAFfzVAnHWghCYa3MvDb9R7AoE378rRM8opQeesCbaa81NYSrRPzx1ydiKTszkzcWjy"
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
