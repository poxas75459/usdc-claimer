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
    "5s35mpYHmKH9GDYZ94Tx1e62XuXC1V8G8o4fubCEKX5ZnvT2wePZTthAa5PmrtkxhBZJ9Jr5iKHtuitD5rRThGgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBo7LLM67XhaZijPn9oDYFnUQg1kjFCv7WGBXup5A49oduj6QG5iiVpe8Q2Q6B7tX7n9qZSXEBt6qMZ3UGucwEe",
  "key1": "kkkZwnpSBi4Uuxf7MnBjgzhHsaGVarry5WU9KLjBhBj6nVACEGA6ESSe7PdksBLGiwwfEGZGJPCRBpqr6LibUDE",
  "key2": "LVVsNJ7oyx5Rn2aD6dih97VynE2VTnyNTCZtFYFnjD3EfF6kQE264LdPR6YERwpopXwxMTYf3ai6BFtsYRRceYc",
  "key3": "3n35eVTsL5BxaGMEYmsR4YfDZ77FA82y4tQwwNAWXY2bDmUfpNjELaPtv43guA4M8tCnoGTt8tWi2CpUerUwM4U1",
  "key4": "2ARPXupDiqnaPaSqYHyXJ3xfDDipAx1r6oBUuJCdHoacF9t9mhPyNiNd5Fibf7DLHrQL43FBtWLSoLSCeSTQ6AdD",
  "key5": "4oYzx75fnHZxVVcPUehfeSzENfFSzUequfMHsjcyEFbjdnYkQW8eaWA6wUgaeWNZwAme7MxRaxV6pR2tVTGhFx8j",
  "key6": "38edDVmaozBubCGujgEX4SJRGL6BB2MauXinauu2caAuWeDWct22LnXDftYJyLnydFBNFcqBvpPggz1TJA4pQcm8",
  "key7": "612reJVMDjBtiEea3EbaVMgCXPdrnWQX252bGnVeZ8DJNqqRr35FG6vsVSdiVJJY7oCNrYu1Cwv6LqtnPwSkU12E",
  "key8": "4pe5DowjFFdU48v5rmQ42CERSKHyPjirsunWdZGGTFT7XndGMk73twcR3AMzhAke63nQfp4zZpuJZGMEGPxDRJTG",
  "key9": "3ZAVe167QXqHe1jTSnS7n7FLqzpfT6kcuDFicrAb5woFBtu512A3bzbpMGMc4WRr5nhziTL2fc7urVvfKFtdgqkP",
  "key10": "4uVvQQWedtUuQMTK8Y8wb34BCkwKWmsvBvh8tePPR56H5MRKr9AenEzxPXcPkHRzKUb6u9tt6BzBtiPrVAMiUnYX",
  "key11": "2nbuoMtcwrd4rFHHtQGisPiDBQei9sVbdVH6SxPmCSnxQXJdxCR4sJ7kuvzemcmZxjQje9EMK5C8vkBPupZw3SJR",
  "key12": "5jbhCMEhFViZx8MwWQYrSWGBzUmRWHRJPEMXpRuFdiWLwbctG1t1UcS3BbQ2NLiZ8zXqRLysrzK5b6VtPnFxXCX5",
  "key13": "2HnZh7bersWqcLnwxTKiqZy6pn3aJfvzgoRGAh8ncAywQN9N84qC8w9zzZmRSWXkFfpxyT2LpRR4defHmwiuhLb6",
  "key14": "614gW32sjdZbHnBV5ZeM1sSyUEc1A95zFmRTa1HYzrdfKKXZ2gv3Nna3v3uEtQ4ebtioyALk4gfgyNdGLUjkYL76",
  "key15": "eZLe7uxxiXYjmWdyY4xJbgak2xwtkpp9Pme9f4HWeK8TmoRrE9cntGETjK4BhdVfZZAVqvVzrjvWoBiQfQFTc3R",
  "key16": "364apT4RReoy2duNwedvkaYkm6xAYZoX68FAWiALNaqw8SyiPXpFpgTjC5EEFVXXyhww38YpDWrMCnMW67sfHRpK",
  "key17": "5ovBoFTbGMty9atZJEGTaGnhbEzzKUSBssjschsJ2Y1Lyzksm8mvtjzYUdXvRGQSQXADdPbZWn85K91ZhRLQRJQW",
  "key18": "3CdLqsSmqu5rormGvsBVqRZJNgHXMjhs8etmhkQ2WRu1dXBydrh1S4jySygSvP6Qd8vDLB8p6yt6hVUP3ELhqU3U",
  "key19": "3Wg5Pv8TAdsvu7ZH6CE1ot4HcopZpphqi87xV2jecfSPEvwiDb8BCXi8FsLyHnD1gTvuPe5UiKwqpb9btq2bLrca",
  "key20": "4rzGJ9eeNdYy5oduggfNkEsEX6AnFBJefbsnxN3GDyS3JwcDi3XBexhdY2rTTigqcNXY5deDJbrH6MY9XzwiKBip",
  "key21": "5rJ72kGtCMxwfRWqmBwAVNuZEv6CBP118TYv8vDy1JBArptDqnon4oZmRLC5YhiLgvLZR9sbt44H2RarkbuNLCbo",
  "key22": "26Fe4ZKDrEYW3MLgBSEFN2Z61HxJy3AMFsGsVDHTA8Q9RLrvUF5k8xLow5iUw9AtELE1CbKFNoB7iunfnmrTFRW3",
  "key23": "2T24KcEcUTSGqxZ5R945TEDJed6L4oWgAz5GyTb2fqJerDcRGD4hAgbhuVCfuHWxDpuWaJtfZYMnEbhkmNcWmCMi",
  "key24": "2cuDBmuQVadsoP4NaCRkzXEqJecxxnzaSWNAu5WhjuX2jUYK65NXLHv1qPPQU2P1A1fFFicBMaTh8qdfCy5Liqe6",
  "key25": "2U34yBSnpf7JqPiTBswPaeNkoXoArb5pq11rgGZKFGKLf7B3v4METauv7dJkhy6W7zzWjuz52yB71aHsNrTvsMHv",
  "key26": "4HGvnrpSLtiNXjX6aMDHjjJ79Ncxj4kZiySue2nd3ea8rpF4oS1LfwRPHes68xzdDLHLziXPZ8Vqd5wF5AgDt6u4",
  "key27": "5c6oKH2yPAoDaLzejeFaVfd2H8rrccjff7PPW6TUE9jdW9PGXMYXhkUDF9mXPaKgwpddJsercCGj6qsJbC13Epb3",
  "key28": "3XZofCAfQAzeEVmZpu6QgS54s1MASjGJFNqmoxwe6aQRqp5RMGMKXCFpDiwc33zvrLLGe4TQZ9zKGPCU1719cgJC",
  "key29": "2tm1EdSrcRuYJZxTpcbvgDv6HTgLJRhyG34gXohfwfJTrKEcxowP4dW49WUDTRd5jyqRoMzDPbaXXN4aHNM6XKiU",
  "key30": "46x3iP6dzfkyLne7VzBz6bUnEigJ24pcWA7rxTR9cZkLjPAc21MdrWCc9X21rSWy26njZTBWXosohM34MmrEXaiS",
  "key31": "AbBkUPMjFfHTwNzMacYo8P1zipcCG1TzPk4jtqqqWRoSZERbsK6t83J6suocokfpquXrExBS1CTu586gegpAqrZ",
  "key32": "27f8wf8oP1MikiiArZXojc9QYBw4UbmgCC7w1u7vkNXw1RrfeSCLSvrZxidcpQgUDMALwxVqZBVr8AJ2KbQ9MMEV",
  "key33": "2hKVd2wmdtx1pmQ7ohzUcNqQec7ihjY9ccaUZHHKfi9GC1vnb4xoyVqv6aPEk8NDDpAEkQGC6dX17YGJThVyjnox"
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
