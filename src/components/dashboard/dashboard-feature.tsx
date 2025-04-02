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
    "5wFCRenX9To7gk1LanL4E6VfTjNmTF1cFN1wiACkTs8DMCj2JDN4vPPKogpWNGRpAc9kM8faMHZKVXrz4h1AEoUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yELSCanSxymsSWnEhdpKrdqcAokJmhwNCZDpvEwN3ESNdjZTKPCBUfkAYGqA6vTW4TfwmA7LYdn2d2mwWwsF83E",
  "key1": "4p5hMhyJxi5zYVED4RFE4GrhPjwAkU6dX3h7BHcovJWDJXxntwTHfKa8onZLpyZ4aRzeiEnGqTbtNdCgSEWj5u4U",
  "key2": "5LpAsHgehLd56MLFJ75pJ13WCv1qx9UYaPLFQmMBPaWVnUKEwX8Knm6PsPWA7DrCCBgwwpSaYALK6qSJ8bhbN3wZ",
  "key3": "2cWJuvZPy8d98dEX9EADHXQhMffaZENvmwpgdcpWw7Z6W6MLjTxzCExvbJZqqHHCfrME66uYrHcBkwbgk7pmteD",
  "key4": "wbTXJVECohuM6YuUpaqSdZVidDSDL5sEQZK4752CyGfPsk2ehtC8vxizNYW5HjxfyXzf8LbZx4J6Gf6RUDrg23Q",
  "key5": "c9AKCFjjZhYxHAZ8QqZ7uoD2UDwZL4YdAUZ5stjSXdRCktwVaQBVDEvTigeeeNLPtdDcHu5n8s4vNaao3JJbi9a",
  "key6": "3zpFcjpvUcFiPFjrgGNXfyUQRQ5QZ3gkb9mDepNtWTZ3Y97Lf6eVXcd9r4dDrv2588vXJwWNbBTPamV3EH5nHvCx",
  "key7": "3GvcUt9HLPWiJpYzEbiBEbMsarPFNFjiJgJnocFMcN7qgBUmG5F5jKaUSEQjGVujfXvEfG5LHHgH7h6ibjsLGbvB",
  "key8": "3MwPAK6i6RcqqZ3AysDAtMcchu3ftXv8JVrSaZKCmHTcwu1BoebDzX1jHA2GyTdkrcwuXSR4nCYWHadb5FKt8L6n",
  "key9": "29eZU8orxMvtiCzD6dD2scw6Fnbuj7hu4U31Ki5SVZnCt3tW3YpsTjxTYQri5hd1XRxHJGSAPPbD61qxErJxVk4T",
  "key10": "5qbULxTrfePBRBQNdZfy3x5piHAwcjxPEP9TPzUAd9nATfoLzPKozXBsHogdhv4fhN4N6gaW2eDfcv5NW2op43pu",
  "key11": "49ymSUBtAkGdR1eVGGgrayiC2qusQTERpCma3eNtt4nM1rvnBMEGxKe1mPG8hXDo3ZtHkjHUhMiqPNbp4XTPLxGr",
  "key12": "TCnwqi8ecx6gKrzCa6rfMtjg8Lh1u2quE3m94y1ENTTL11QwD8tqtHUWFtUJhVsqxqBGuynZGBiZqumsjYPccQG",
  "key13": "4sXVTKD1B4bQ9KCTeobyukGQAuPhKaUu3h4X9ft9YaJ2mNfQzcKArfGuXyjgyaGT3tXbCTm8dPJEu6KpU7FUJ3Ut",
  "key14": "3wB1HQsybEcir3fqWHQyyhQHemnCBVzmhAWaohEK2UfZs8CV17gxSoW3Qm5f3QtVi7cDFM43q28BrcFdFtqx7GvU",
  "key15": "5EodhoBqzZigNEPtvQb52GyjCs72Yj4d4oN4HucBL6TobXU5KUrXhVagGDcsCTZEorkdobKcZ2uts2fbuQwZGpTc",
  "key16": "573J7sU4ouwFbk44z7MqP5pCXfZ5c4wnYvSCBHJDM17bcvrr8KHEPstFyicFZ4ffvBWecHeNwcGT7YugAsuzYqVp",
  "key17": "3eQCNSNjCFqryrYrRS8aqnAcv3ETSV4DgLKXc8rKJdQNLBgEzspfkKB3HGwpevGVT1y45RJvUHxezaM5fup6ChoG",
  "key18": "2CvEGwM1iLoffNNGHU49AhAaSqC6z2ptFpQAnEppvzZuUqJs3JfwHg88xdrGa2edQN5tPo5jmgJy5RZQfhquumYd",
  "key19": "4kFeYryVejW4TScjNa4AZRyuG61Kq7KH6LUJ4KhNsTA6vTf4e61UgmR7x6ewpojqBvVSx31uJSodqqKjqapUMEeC",
  "key20": "2gZoLcUnd8iZmhRhyz6AnodTgFrh54YsKGwPB8JRaPh93ZSKMpsCdgWFLPNDuApd8nMH2rkczG9ZtD6suPSGwq9Y",
  "key21": "5boTKVr47KwPCNz59UjwwcT8ihYdigLeiZ8ugMy6b1oov34joy3W2Z2kRhurib19FxtUeMDjaA5Ub2JnKo6qRZmE",
  "key22": "4AWqZm56AcmrnLxVDQDXbJeZJ3R6XD6ST3dPHzj2kkjrF1iHG2zng8acvsipbAacGnKocGjX2jRBp8T37L9ta4s1",
  "key23": "3zF6jFv97NZSbowkoAH1XoLGYMQA57fMxu3ACEDznA2vn5amRc2ZGZKA5NL6sNLCB3Aux7AV5xzhZLawwzXQ7kAu",
  "key24": "LoPQcSDaiGW3r8Fc9TqQj4EA9znKqAeVGFBv4Ab4AZdqHBptqifPi19NpDH3fKvGWJEAHmTsW79D3W4KjiXxuNZ",
  "key25": "2UVPC1SqLYxMNSZ3YPUnEAhhhAwZDtWdzgKN8fS3LrTyPECH5QHR1FAQjuGF9B87As5d4TNj4sofB3ZbGkcxJ1hv",
  "key26": "4s6M99bADP2HaE3PZRDEEjyZs3ntdVsHNmYUvoRA2GzNFJ4HhggbxHJWYC5FMzJLfrPUEpxQGbz53Adr9y37Qk5U",
  "key27": "2GEsBof63FoR4C1143EzK8yxbmVwgQPCnY53sw4MVQifWDXxC132RpaU7SY97szCQDcdR5UecUcXKHPyKJhM2Y5r",
  "key28": "3XBQNDDZYqSepJ49h4vVtF8jXR2o3VczEWwRAi9729MzWsp4MbMrqbMdpvDbkaeAutgkT3jBgbGjDtxnnwowB2r4",
  "key29": "5k6URdbNvzCxrVjt14i67s2MLdkHPPiWrSY399L5MdEcCm2a8UEUwgt9cs99XZnVhbKBHDkkH8pg7K6JNk474dd1",
  "key30": "4gmQV46em3sRLiat7CN9hBvyZxL7JWFvvcm8EnF4qMrboXvLfFKpZYUR8g53gCE1B2AbcCz67BpU2xD7mRb4NaM7",
  "key31": "3SeeLhdqHUXNkvZ2iQP38QaQhRpuPRh2YJt2iQZyPQetp5nxxggFfvpgijT6ZVRRrVhGnxDnT3BarSCNpjXvG6L4",
  "key32": "hZDehwLHMiNoFna2dN9R2RBUn2nJEFNGx8We8zDGE2HPEPG6BUu7VarXSFxejvhBzKipKzk596UY3pimpyVRELP",
  "key33": "3Budbxn28qGkkuD8ew9nhb8sKProi9kwEunTby7zgfw6YYqDejuVyoV4Hij8jVLoeokkZDcHiHVFSfoywiR7FWj7",
  "key34": "5QxjpBpNnAfmtDKkWSkiSADwSgeitATKKwnvQ3xmsuThDd3K5zHX4hWQCDgUBLcW8RSn5s62cTfsFAngoZ6sqUa8",
  "key35": "3kX7CWhXrkvXuhybE8HknusC5dXA8wTrXYPUjPvhGruTSAPr5yvYQN242zH9tSVjDARrFohmHapdEFbn2WnBHuDa",
  "key36": "5SRLtprWnunMT1tkSNaas2nQP3x1ppaRha7tHvpXdeH1NCvv8xJxtWgdvzb1NWqcCRrQmBFEdDd6BxJbtVDZdGit",
  "key37": "xZgR7mSqoDBWL32hpNPWXu9z4VKLmpJjcKufE3TqizQVR8ZSQqg9k7DQQM6iCGtwwEm9wuwtCbEtTAEKVAvHaWo"
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
