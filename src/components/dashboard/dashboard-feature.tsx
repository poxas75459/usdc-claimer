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
    "3ZanWSCWmkHFySFZPGVCuZ1iNTtWzYqieSG8xrf7fdhq2q5sD8SczLViMk68u738Au6bYT2mqznJfUienwrGRfM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qzkafKvCXXARLCSvXstvqKwtz4e5WyuWY6ogZrMx1jkR99id5XioQwdavrV6dgKhxhwqeNYpVe7EhcvXYqriDLU",
  "key1": "53TaJfDJ4vFWyPuNk5cQwz87Bc8bm1NTciQAX2ZeRJdXE44Nuo55KYqh3SnLgTLTYzD8PYH2YmqFsxV3Nk3sAL7q",
  "key2": "5ysBx94t2kN5WucEPEnpLg1ok2zEV8xJKLqFBuFhXtYpAPutaySaiFwjbtntnyhKGM4ryiCUn4hWEovTuxsphAG",
  "key3": "3Sc792cV8jZzwKiH7Z8wiP8nY9GVvYKJKjnMedfV2zaKXksG8Kt5dMdYPKSEuQu76bSMqupFwyC196qJ6a7jPcHo",
  "key4": "7HPVcsDB4JcxaM5uU6m2BPHBhbBXj69ZvXtqAzaWz9J8yPCvVCroq74KntABENFNKdHso8LDaXpMm39R7w9whdp",
  "key5": "5CKUXVWznZNBY3MFdX496hFZRrwYAHLGhTNh6JUSBkLTfge4mcrDwLt6jcDUK8BiKsXbXb9w119VcK66KaR6D5vT",
  "key6": "3U1S5FRwRuuczZDZZyrUtym9pr7qtAFshi5erwdVUJQZfPE8BGLpiZht87KGYqGAhYsYngRwUhR1ZzgA9H4ABR2w",
  "key7": "3JFUEwV18EMsdiN5SxU5rhVhLCCtvdRrx4pwxBfVSiQ94F1hSMWVPRke3KWqogxKztTeuohZvqX5ABoquJnHfAU1",
  "key8": "2LbynfAPym5gHi1DG9nS5zhEdZmuu1siQMYvWf7FpidoRsjKEwwfm9BMATiDcN7MJ3APihRiDx65omZsi15MTMcb",
  "key9": "43cE49kYD4kM77qgEsY1rxhiQ7PUZd7gP2cmHMPQkwzb4yj3repSPh1822Ad5ZRPMQ9F4Lm9TfbjKSsW2xngvDGe",
  "key10": "5cwe4ZA26AA563SXaNhGMzhe6wybqWNyMZBbzq9Re9LFL4zHQofjukREa3xczNo3J4PDqKSLVghmyGbSgEjWZ4h7",
  "key11": "4PeZPfzfpjQDMwSh5DQ1AFGB32ADEUeB5YVb77d3uz2CW9bCLJKjtQ39w7w6qFT5aop3Mc5dLYmvEWTCeHpYzosw",
  "key12": "29c7B35u57c4xBxab5ABMxeVb4pScnmTCpdvooGSTxCyrpjcJfN6J2MPnaJSGCx6WfCz4E2czXFCc6ZaxwN1NYg4",
  "key13": "4WCSzGrfJ3uWAYknEprdaMa4MufUgV4ERjQCSNjo3hsT1wVu8q8eWyaumuQXVPskWEJz5DkfqYy7WtWv9gukc8rq",
  "key14": "2WNabVwaJGBVD66v93bnVy9FH4LZF9rSnzgaaqErCXowaCT6Bag7yrhYdFrAWmsNdL8RbQ5KQ4GF7napNLhhsWqy",
  "key15": "2x8YAMfABNLa8ToRzLjKFVL4x9WVrxHJiqcLWvgj72MQhyqAYxqYxxYJ4k23n82DwXxD6GhcNpZyhk7zq3kVDQZF",
  "key16": "3tS9wiwCtk6Xu5478c7k8kVdgufMB3PFYbE9jzqJApA38zvMZFSJCwFZqpmhtKP8bqiF4agwz76n6ewhFCZojp1P",
  "key17": "3SGfAENYg5qsXhZQyZRYMf4zqQbUSss22nnTn75DF5ycotKKApuTeAxsfpZWzKyeSYaPvhkH51KumWpLi7FFN2gp",
  "key18": "3cHJmEed8Rv1q82XKx2BaP1ihENmbbP6rr7fY9Sid1iHaUn8QerhxfEy4jSRSXUQJa3hCF5MAbeJom4UbiGScrz5",
  "key19": "3JQ5hdjUUeHGNN9j3YSMiiDDiFaGos9SYmw4Ly9BVJ3tgYKDwC8eVUTnwME3D7fuUFTM1HfVh1Z1KcFCPAPzYuK6",
  "key20": "4zNTXuv4K8kdfMp9DDzkS9iGiFMpQJKuhGHKgXsKHGiuyPYbD8LnEaoAnE36iHGWeQLMXmshDeqnng6oFH8D6pix",
  "key21": "4y38Q4nMxxeXbchzBpr4hf9SpPdujLFaeZTLWovcWoAa7828sD3bFMXHNozNQyfr9cdB1rPQf34X148HTL4umXmU",
  "key22": "4ZqZyxK7D9xJ2QyZkqp5DEgtCQ3rPjSJcmXAn1RaDbGghhUzPPXbUA1gZtRbVUB3DgR4bv8RxvQYAhrJWcVXUaqt",
  "key23": "5VFkRhc2bwK9Rz9NMve3MSRaWGhDKigxphRmydqGF3rHqCskqX887UGG8thJfw9GwVPwUHkX74z23mqxtmwwCTCm",
  "key24": "3qypBmDc5cQRu7G4yAMjVPF9sq3CikfRa1g221Aqny2BH8yAcxsbBpMmzca99KMeMvNZuG5pvgunyERxL7xAEaM9",
  "key25": "4xcSQstaqL65NC9u5rdiJUurTbkKVwhEvZAtyCqi1DLZAphtteBMhQ293c2AxyDXirLiXvfVKUe9yV4BDRHSGtg3",
  "key26": "233NnL6FgeAeMeAUYT4CZyay2Bvk82tBvyxQy2WuhW9RvdfF1io5TqQHCTJTHLf5E1hjKE6XMde5oaKJN8VaLP4c",
  "key27": "4ZFDvYZrHqZCenNQ8sGytHAb4hC1iXBn5khPVbvym3nStz9bZsMYDoJsHS9yybq3goJabHRykCiVH6cckn9HpQRp",
  "key28": "5UgUDBEZf7ydZSQucfeMmu2mUV1zeZ6qjzpNF4QZEXCE5pULAWBotujtTC9qrzhjF9eddH18wCNEar1gXadzEM3M",
  "key29": "4HoRm61jk6rNEfpSesf7YkfusFab3ZPiuJEcn97n1mZVyyGY3DGHaVGFC6pQeZVgHLj64nQuBp1Tkhc3bye312yT",
  "key30": "3kRe56y5wSPwdbB2PH318cjajXXLVxUVVGsT1uDFvDMEdvjN9J7wPwJvuMqMe12eAHKiTps1u1gBo3dTUfFwS2Li",
  "key31": "5VvUg8PLGbdip7NDQqRXLxzknjtBHqjWEWdsNd2VAk6amde3AnniKF7TfEMfQDMkai9NtBfrFW7zBdVMtQKamHLu",
  "key32": "2iHq4CWfHJeZnMMbTHhC4ffTjygw4yeVFde6zMQpdY55rZ31Cb17yF2ozccszzn6izF4t6a7qrnpGhgooMTmCfDU",
  "key33": "37SniC8EawPFGnn3r7WAwTJBaedbnbzBvDWUBUgmoVC3AM3RpHp5e6z4mYAj6e3NXz2DowWkEagzQwKKG4BRr4Nc",
  "key34": "4THTuWevS6BURYRhJjWBfuzSS9A8YosaRpzNv66C37SHpKwY1Q8Uj1FLUZXPjV8m2mcVH9F7SKHCQ7LtYdiZ4Yjw",
  "key35": "5VN4THhfcXLm25jKrS3RPBdBU729ba7LoQu8J9pDkDv5vCX3hoKu65EqjRWUxiBC3AT1MyKGksA4r658ivj1oWB",
  "key36": "No2m1Jz9aAFWA76ZPhZ79r8tDeEPLyc3RYoCcMbTrfXxPrv9k6JhJRm2fpnyRw9Xc89jpLSwrJteCicaKy9gcy6",
  "key37": "2qAR8Gttrqz81xnM4vBrG1xqeyDrSjgQNuhtsmch64RrxQrT5tVyVNQZRn6NtXDJFrGN5nhX2SpwQy5RVDaNdyTS",
  "key38": "mphKsrSfaHvthy9m8Kv8QxBUppMUWLxLXSQBnyQhuBzYy9yc6Qdm27Zpkmyhe1UmYCVqgANopKt28bSGVFQqJsa",
  "key39": "5H8hJ67vjuJKrCZZGNagNBsa5mAkkn9abD7cQAXmZHh4gU6miwvGfuM6QVYB25q1njxPzauNLGydmPh9sqZCgSr7",
  "key40": "3WMsg3tGFytFdA8xFDmQ76azBmYUtrkMHeL6eqWqJdyPhE2AMfDYTKVH5EW3HBVMCw65LXf6kuDLqUxVHFLqkdhU"
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
