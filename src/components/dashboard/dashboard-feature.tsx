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
    "1GZdrjQoD3s9z7vJoikyhgQydLAumc4wnE97yUrnktNuiU6qXr6ziYvFSwdHq8pbf3uahiDM4HtVMC2iX21X9GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCzE5GXcRR6k6ABsSBBTux4GECwcPZiNEgC3jJyppHwNC3Rj5gopx1MnabubyerDiSc69MP8nzQp1s7HMsqtjp8",
  "key1": "3nEBfb6fisMHaZeHKt6WydtbYTokQ1h1kYnLz5LZ5pJDaxgkW8zkn3miuXDuk5QqTeqeYhPquz7F3s3nv5FhLJou",
  "key2": "AvReYBDt78NFHU9tETamHKRsddhBYW7mm1axMGvmxs4NycJW8ENiFAgDYXVz2Q6NTHAenhSb7TqJmbyPC2AdH4p",
  "key3": "4J97ogWfeB24EiA1e21AgcpFe6su2EmVfQTj1RVQW4EEBEGud4ukrt88ySDbidwEdfjd6HtEcqUw2wTTGqZJQhyD",
  "key4": "3SmaJT8A7Y4WDtfPph3uUyiX2pa9oqqX2mw4QBaYPXbNpTeZoz5D1GXmjX16jqeUYE5oKjiYb5xUGim9VgTcxEE7",
  "key5": "3XcnnVLF8HFN7VSrZ1YTX19cx74UV5StNLQCpAVcNh1cA2evGy2Y5Ty3Bn7rhVGuZk7GXdqbGy2neJRChPqaYnkg",
  "key6": "2zwPwgvn2h8uenEKwLTiRQmtCMfRwJXs9AP9baqWszsDk9rveGJAbyPxLZtfbgYfCqsE9JPFXhr6HT3M6KX6t2ZE",
  "key7": "38LfYbXmQkQtFp7YWkELEcQED6ZvrDwtwfbPN8xY3FGrXZ3M32ocvEaASxB4tkdVUMCyK1XAV3JzJGs2J11B4d2D",
  "key8": "5c5MRaCefrK8zU2epyyjL8vzZ6ZdWZeVCUPwueGCqadtGHxsiY7Nf75fvZ1Tv2N7Qkq7VA7iFehfMZp3rMVDjfAQ",
  "key9": "5UKNDvwtiX3Tb1QBKXvAxqpmXjbhDQGWAAR2xdRJMVdQfyapFy1sbLi1wJbR2DSaN7P1RNYa4sWtkfxotuB5cH6y",
  "key10": "337Y7WJ3tR6Nxw4K8YQhNrkmZokcWoikMtWvCJ8148wCYHzhA48wLtTjbcMwg24wGhrXWfhjVAXnKNnbmEmr9jKm",
  "key11": "2w8iQnFn5ynFMhuWUoD2WSg3r8hQPX2rcN9uWBr2QxQxeCh5zR9ddfM5T5Bzea3uYj6rqh4dub6n2fQPAvLWEPH1",
  "key12": "2GgLBfknee3FBi5bxJL6Ua7yWEkLvQmtDecShmJLoyRjz76xy323mUTCeoMVZUMytgFVPt9RWCtWR3sgcuDMwFP",
  "key13": "3kYTHCu2VwQ8LiNmy7yjKST4uvKmmQX3h2RGUD1iR58xxhaK7W4PyfeAd1qP8FvhKpkegxfJpGunrogwmXTMAYsN",
  "key14": "58ca7MFMBD2MCSdNt9frxHT3zNGGexWsLJ65DqC9jgYH4vaKXWPody4sMXecBAe9qanVJogFfNkbyqzHa3vNYtH2",
  "key15": "3gpxwDeiEyZB3EjwS6ibTQ39og7mNEYMeJAmeUDYuAEzjnocp2VuCVHgQqyQKr5U9nFxJB8BLSVortrAYnYLHxLv",
  "key16": "4LYB89kd8uaHKzqRLLtyPcKJsxztcQCkbpD6wEkpHkYyGjF3U2oVzkkMGUnwiayAzHTJxYYDVLP6o79g9gQrXJbJ",
  "key17": "5iQ9mZAzno2rg5vZYHdE1hAc54TybNW1rJ2Bga8n63qBsrQmctaq2R3FeHQvzSVcuXLizr7JERnywKWaRvDefHQc",
  "key18": "S89sJ7tbtx92EWVqQKssTaeXWabxi8BW8tfaNz3eagqqnxSEsWvgNVteAhNjn69S7BGcjVnZNZ8111S766wADG3",
  "key19": "4TwR49z6b6i2Nbc65XC863SRKpbu832jrshqqkFRER4hbgmGnz8BoRL7zEtTkWXsW9U47Ju2odwoR1pVGCmJcdfw",
  "key20": "VhwbWyvbADD3JNEBCqTs5oG5ZShuMPp7VmzLhVTF95LouGxn6QfYDB2BnA45jYRo3JtuKuP5ZCxhBbVb7T9wLDf",
  "key21": "MvMJwYgjKun8vMaBVkRvujEkWTBuALUZioCCpH427GNZnFUFpkwt8QQvJzR5RnEGtiNNYnzErYvMkzeU7BW6ps8",
  "key22": "2NSnAvxy3WL9YYf6657EvxfKeVXZZ4hQvketUbDYNDw9TUT3DbDjq38CSvonFZJdHaDkXZS4B6haJWWishUKjLv4",
  "key23": "5STNGjER5gs9Dcwk6D77XpvfsMwHuLuoGS98Waf5FL6wP81nYH8in6oChaANWMmKacT22MVoHU748S9njiTXuW9s",
  "key24": "45bdb3MeiqpAXcskHp989r4XqYuhTkS67jC7ZEQRwnzMMrpK5o2wEGDFBh6qmW5hc7oeeoXqDLVVeewsY2XBukZE",
  "key25": "5KMmdmQyNUfYh8kb76uZaG1Gr6iW7krUQ3kTGd8TTNuwsDArgSmXj59Bww46eb51ybm2KUFoFDwovQpG2Vk4xNTG"
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
